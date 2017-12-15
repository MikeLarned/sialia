import { Section } from './section';
import { Preferences } from './preferences';
import { DocumentsService } from '../services';

export class ViewerOptions {
  sections: Section[];
  data: any;
  pref: Preferences;
  documents?: any[];
}
