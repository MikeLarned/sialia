import _ from 'lodash';
import { Section, Document } from './models';

export const SECTIONS: Section[] = [
  { key: 'allergies', display: 'Allergies', tagName: 'allergies', icon: 'pagelines' },
  { key: 'care_plan', display: 'Care Plan', tagName: 'generic', icon: 'sticky-note-o' },
  { key: 'chief_complaint', display: 'Chief Complaint', tagName: 'generic', icon: 'bullhorn' },
  { key: 'encounters', display: 'Encounters', tagName: 'generic', icon: 'stethoscope' },
  { key: 'functional_statuses', display: 'Functional Status', tagName: 'generic', icon: 'wheelchair' },
  { key: 'immunization_declines', display: 'Declined Immunizations', tagName: 'generic', icon: 'ban' },
  { key: 'immunizations', display: 'Immunization', tagName: 'generic', icon: 'eyedropper' },
  { key: 'instructions', display: 'Patient Instructions', tagName: 'generic', icon: 'user-md' },
  { key: 'medications', display: 'Medications', tagName: 'medications', icon: 'medkit' },
  { key: 'problems', display: 'Problems', tagName: 'generic', icon: 'exclamation-triangle' },
  { key: 'procedures', display: 'Procedures', tagName: 'generic', icon: 'hospital-o' },
  { key: 'results', display: 'Results', tagName: 'generic', icon: 'flask' },
  { key: 'smoking_status', display: 'Smoking Status', tagName: 'generic', icon: 'fire' },
  { key: 'vitals', display: 'Vitals', tagName: 'generic', icon: 'heartbeat' },
];

export const IGNORE_SECTIONS: string[] = ['document', 'demographics', 'json'];

let root: string = 'https://raw.githubusercontent.com/dougludlow/ccdaview/develop/docs/';
let fileNames: string[] = [
  'C-CDA_R2-1_CCD.xml',
  'C-CDA_R2_Care_Plan.xml',
  'CCD 1.xml',
  'Consult 1.xml',
  'DIR.sample.xml',
  'Discharge Summary 1.xml',
  'Final_Task_Force_Full_Sample_R1.1.xml',
  'HandP 1.xml',
  'Op Note 1.xml',
  'Proc Note 1.xml',
  'Progress Note 1.xml',
  'UD 1.xml',
  'UD 2.xml',
];

export const DOCUMENTS: Document[] = _.map(fileNames, (name) => ({
  name: name,
  url: `${root}${name}`
}));
