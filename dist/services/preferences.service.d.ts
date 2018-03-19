import { ViewerOptions, Preferences, DocType } from '../models';
export declare class PreferencesService {
    save(opts: ViewerOptions): void;
    getPreferences(docType: DocType): Preferences;
}
