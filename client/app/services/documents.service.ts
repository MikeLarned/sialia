import $ from 'jquery';
import _ from 'lodash';
import BlueButton from 'bluebutton';
import { Observable } from 'rxjs/Observable';
import { Section, ViewerOptions } from '../models';
import { SECTIONS, IGNORE_SECTIONS } from '../config';
import { PreferencesService } from './services';

let viewer: any;

export class DocumentsService {

  getSections(bb: any, sections: Section[], ignoreSections: string[]): Section[] {

    //var pref = new PreferencesService().getPreferences(b)

    var storageId = "doc_" + bb.data.document.type.templateId;
    var pref = JSON.parse(localStorage.getItem(storageId));

    var isSectionEnabled = function(key, pref) {
      if(!pref) return false;
      return _.some(pref.enabledSectionKeys, (k) => {
        return k == key;
      });
    };

    var indexOfSection = function(key, pref) {
        if(!pref) return -1;
        var index = pref.sortedSectionKeys.indexOf(key);
        //console.log(key + " " + index);
        return index;
    };

    let allSections = [];
    _.each(bb.data, (val, key) => {
      if (ignoreSections.indexOf(key) !== -1) return;
      var match = _.find(sections, (s) => s.key === key);
      match.index = indexOfSection(key, pref);

      if (match) allSections.push(match);
      else allSections.push({
        key: key,
        display: val.displayName || key,
        tagName: 'generic',
        icon: 'asterisk'
      });
    });

    allSections = _.sortBy(allSections, (item) => {
        return item.index;
    });

    // init sort and enabled
    _.each(allSections, (val, index) => {
      val.sort = index;
      val.enabled = isSectionEnabled(val.key, pref);
    });

    return allSections;
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

    return {
      sections: this.getSections(bb, SECTIONS, IGNORE_SECTIONS),
      data: bb.data
    };
  }
}
