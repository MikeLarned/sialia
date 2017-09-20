import * as lodash from 'lodash';

export interface Section {
  key: string;
  display: string;
  tagName: string;
  icon: string;
  sort?: number;
  enabled?: boolean;
}

export function updateSortOrder(sections: Section[]): Section[] {
  lodash.each(sections, (v, k) => {
    v.sort = k;
  });
  return sections;
}
