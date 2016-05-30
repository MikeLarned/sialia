
export class Preferences {
  id: string;
  type: DocType;
  enabledSectionKeys: string[];
  sortedSectionKeys: string[];
  isSet: boolean;
}

export interface DocType {
  displayName: string;
  loinc: string;
  rootTemplateId: string;
  templateId: string;
  type: string;
}
