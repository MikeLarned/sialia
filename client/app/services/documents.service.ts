import $ from 'jquery';
import _ from 'lodash';
import BlueButton from 'bluebutton';
import { Observable } from 'rxjs/Observable';
import { Section, ViewerOptions, Preferences } from '../models';
import { SECTIONS, IGNORE_SECTIONS } from '../config';
import { PreferencesService } from './preferences.service';

let viewer: any;

export class DocumentsService {

  getSections(bb: any, sections: Section[], ignoreSections: string[], pref: Preferences): Section[] {

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
      if (match) {
        match.sort = indexOfSection(key, pref);
        allSections.push(match);
      }
      else allSections.push({
        key: key,
        display: val.displayName || key,
        tagName: 'generic',
        icon: 'asterisk'
      });
    });

    allSections = _.sortBy(allSections, (item) => {
        return item.sort;
    });

    // init sort and enabled
    _.each(allSections, (val, index) => {
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

    if (!bb.data) {
      console.log('BlueButton could not parse the file.');
      return null;
    }

    let pref = new PreferencesService().getPreferences(bb.data.document.type);

    return {
      sections: this.getSections(bb, SECTIONS, IGNORE_SECTIONS, pref),
      data: bb.data,
      pref: pref,

    };
  }
}
