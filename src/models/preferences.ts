import * as _ from 'lodash';

export interface DocType {
  displayName: string;
  loinc: string;
  rootTemplateId: string;
  templateId: string;
  type: string;
}

export interface IPreferences {
  id: string;
  type: DocType;
  enabledSectionKeys: string[];
  sortedSectionKeys: string[];
  isSet: boolean;
}

export class Preferences {
  id: string;
  type: DocType;
  enabledSectionKeys: string[];
  sortedSectionKeys: string[];
  isSet: boolean;

  constructor(pref: IPreferences) {
    this.id = pref.id;
    this.type = pref.type;
    this.enabledSectionKeys = pref.enabledSectionKeys || [];
    this.sortedSectionKeys = pref.sortedSectionKeys || [];
    this.isSet = pref.isSet;
  }

  isSectionEnabled(key: string): boolean {
    return _.some(this.enabledSectionKeys, (k) => {
      return k === key;
    });
  }

  indexOfSection(key: string): number {
    return this.sortedSectionKeys.indexOf(key);
  }
}