import './tags/viewer.tag!';
import './tags/name.tag!';
import './tags/header.tag!';
import './tags/panel.tag!';
import './tags/sections/demographics.tag!';
import './tags/sections/allergies.tag!';
import 'font-awesome/css/font-awesome.min.css!';

import BlueButton from 'bluebutton';
import * as _ from 'lodash';
import * as $ from 'jquery';
import * as riot from 'riot';
import { Section } from './models';

export class App {

  sections: Section[] = [
    { key: 'allergies', display: 'Allergies', icon: 'pagelines' },
    { key: 'care_plan', display: 'Care Plan', icon: 'sticky-note-o' },
    { key: 'chief_complaint', display: 'Chief Complaint', icon: 'bullhorn' },
    { key: 'encounters', display: 'Encounters', icon: 'stethoscope' },
    { key: 'functional_ststus', display: 'Functional Status', icon: 'wheelchair' },
    { key: 'immunization_declines', display: 'Declined Immunizations', icon: 'ban' },
    { key: 'immunizations', display: 'Immunization', icon: 'eyedropper' },
    { key: 'instructions', display: 'Patient Instructions', icon: 'user-md' },
    { key: 'medications', display: 'Medications', icon: 'medkit' },
    { key: 'problems', display: 'Problems', icon: 'exclamation-triangle' },
    { key: 'procedures', display: 'Procedures', icon: 'hospital-o' },
    { key: 'results', display: 'Results', icon: 'flask' },
    { key: 'smoking_status', display: 'Smoking Status', icon: 'fire' },
    { key: 'vitals', display: 'Vitals', icon: 'heartbeat' },
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

  render(data) {
    riot.mount('viewer', data);
  }

  load(data) {
    // console.log(data);
    // var xmlDoc = $.parseXML(data);
    // var $xml = $(xmlDoc);
    // console.log(xmlDoc);

    var bb = BlueButton(data);
    // console.log(bb);
    // $("#pre").text(JSON.stringify(bb, null, 4));
    this.render(bb.data);
  };

}
