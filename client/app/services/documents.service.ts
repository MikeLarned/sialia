import $ from 'jquery';
import _ from 'lodash';
import BlueButton from 'bluebutton';
import { Observable } from 'rxjs/Observable';
import { Section, ViewerOptions } from '../models';
import { SECTIONS, IGNORE_SECTIONS } from '../config';

let viewer: any;

export class DocumentsService {

  getSections(bb: any, sections: Section[], ignoreSections: string[]): Section[] {

    let allSections = [];
    _.each(bb.data, (val, key) => {
      if (ignoreSections.indexOf(key) == -1) return;
      var match = _.find(sections, (s) => { s.key === key; });
      if (match) allSections.push(match);
      else allSections.push({
        key: key,
        display: val.displayName || key,
        tagName: 'generic',
        icon: 'asterisk'
      });
    });

    // init sort and enabled
    _.each(sections, (val, index) => {
      val.sort = index;
      val.enabled = false;
    });

    return sections;
  }

  fetch(url: string): Observable<ViewerOptions> {
    return Observable.create((observer) => {
      $.get(url, (content) => {
        observer.next(this.load(content));
        observer.complete();
      });
    });
  }

  load(data: any): ViewerOptions {
    let bb = BlueButton(data);
    console.log(bb);

    return {
      sections: this.getSections(bb, SECTIONS, IGNORE_SECTIONS),
      data: bb.data
    };
  }
}
