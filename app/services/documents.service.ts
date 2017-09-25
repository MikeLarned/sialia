import $ from 'jquery';
import _ from 'lodash';
import BlueButton from 'blue-button';
import { Observable } from 'rxjs/Observable';
import { Section, ViewerOptions, Preferences } from '../models';
import { SECTIONS, IGNORE_SECTIONS } from '../config';
import { PreferencesService } from './preferences.service';

let viewer: any;

export class DocumentsService {

  getSections(bb: any, sections: Section[], ignoreSections: string[], pref: Preferences): Section[] {

    let allSections = [];
    _.each(bb.data, (val, key) => {
      if (_.includes(ignoreSections, key)) return;
      let match = _.find(sections, s => s.key === key);
      if (match) {
        match.sort = pref.indexOfSection(key);
        allSections.push(match);
      }
      else allSections.push({
        key: key,
        display: val.displayName || key,
        tagName: 'generic',
        icon: 'asterisk',
        sort: pref.indexOfSection(key)
      });
    });

    // sort by name first, then by sort order
    allSections = _.sortBy(allSections, s => s.display.toLowerCase());
    allSections = _.sortBy(allSections, s => s.sort);

    // init sort and enabled
    _.each(allSections, (val, index) => {
      val.enabled = pref.isSectionEnabled(val.key);
    });

    return allSections;
  }

  fetch(url: string): Observable<ViewerOptions> {
    return Observable.create((observer) => {
      $.get(url, (content) => {
        try {
          let loadedData = this.load(content);
          observer.next(loadedData);
        }
        catch (e) {
          observer.error(e);
        }
        observer.complete();
      }, 'text');
    });
  }

  loadRaw(data: any): Observable<ViewerOptions> {
    return Observable.create((observer) => {
      try {
        let loadedData = this.load(data);
        observer.next(loadedData);
      }
      catch (e) {
        observer.error(e);
      }
      observer.complete();
    });
  }

  load(data: any): ViewerOptions {
    let bb = BlueButton.parse(data);
    if (!bb.data) throw 'BlueButton could not parse the file.';

    let pref = new PreferencesService().getPreferences(bb.data.document.type);

    return {
      sections: this.getSections(bb, SECTIONS, IGNORE_SECTIONS, pref),
      data: bb.data,
      pref: pref,
    };
  }
}
