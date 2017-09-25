import _ from 'lodash';

export interface IPreferences {
  id: string;
  enabledSectionKeys: string[];
  sortedSectionKeys: string[];
  isSet: boolean;
}

export class Preferences {
  id: string;
  enabledSectionKeys: string[];
  sortedSectionKeys: string[];
  isSet: boolean;

  constructor(pref: IPreferences) {
    this.id = pref.id;
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