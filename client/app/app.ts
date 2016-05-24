import './tags';
import 'bootstrap-sass';

import BlueButton from 'bluebutton';
import _ from 'lodash';
import $ from 'jquery';
import riot from 'riot';
import { Section, ViewerOptions } from './models';

export class App {

  sections: Section[] = [
    { key: 'allergies', display: 'Allergies', tagName: 'allergies', icon: 'pagelines' },
    { key: 'care_plan', display: 'Care Plan', tagName: 'care-plan', icon: 'sticky-note-o' },
    { key: 'chief_complaint', display: 'Chief Complaint', tagName: 'chief-complaint', icon: 'bullhorn' },
    { key: 'encounters', display: 'Encounters', tagName: 'encounters', icon: 'stethoscope' },
    { key: 'functional_status', display: 'Functional Status', tagName: 'functional-status', icon: 'wheelchair' },
    { key: 'immunization_declines', display: 'Declined Immunizations', tagName: 'immunization-declines', icon: 'ban' },
    { key: 'immunizations', display: 'Immunization', tagName: 'immunizations', icon: 'eyedropper' },
    { key: 'instructions', display: 'Patient Instructions', tagName: 'instructions', icon: 'user-md' },
    { key: 'medications', display: 'Medications', tagName: 'medications', icon: 'medkit' },
    { key: 'problems', display: 'Problems', tagName: 'problems', icon: 'exclamation-triangle' },
    { key: 'procedures', display: 'Procedures', tagName: 'procedures', icon: 'hospital-o' },
    { key: 'results', display: 'Results', tagName: 'results', icon: 'flask' },
    { key: 'smoking_status', display: 'Smoking Status', tagName: 'smoking-status', icon: 'fire' },
    { key: 'vitals', display: 'Vitals', tagName: 'vitals', icon: 'heartbeat' },
  ];

  ignoreSections: string[] = ['document', 'demographics', 'json'];

  filter: any = {
    user: {
      sections: ["allergies", "results", "vitals"]
    },
    patient: {
      sections: ["immunizations"]
    }
  };

  constructor() {
    $.get('https://raw.githubusercontent.com/MikeLarned/ccdaview/mock/docs/CCD%201.xml', (x) => this.load(x));
  }

  getSections(bb: any) {

    let keys = [];
    _.each(bb.data, (val, key) => {
      if (val) {
        if (this.ignoreSections.indexOf(key) == -1)
          keys.push(key);
      }
    });

    //TODO: Filter by clinician preference
    let allSections = [];
    _.each(keys, (key) => {
      var match = _.find(this.sections, (s) => { s.key == key; });
      if (match) allSections.push(match)
      else allSections.push({ key: key, display: key });
    });

    let userSections = _.filter(allSections, (a) => {
      let m = this.filter.user.sections.indexOf(a.key) > -1;
      return m;
    });

    return {
      user: _.sortBy(userSections, 'key'),
      all: _.sortBy(allSections, 'key')
    }
  }

  render(options: ViewerOptions) {
    riot.mount('viewer', options);
  }

  load(data) {
    let bb = BlueButton(data);
    console.log(bb);
    let options: ViewerOptions = {
      sections: this.sections,
      data: bb.data
    };

    this.render(options);
  };

}
