import { Section, ViewerOptions, Preferences } from '../models';
export declare class DocumentsService {
    getSections(bb: any, sections: Section[], ignoreSections: string[], pref: Preferences): Section[];
    fetch(url: string): Promise<ViewerOptions>;
    load(data: any): ViewerOptions;
}
