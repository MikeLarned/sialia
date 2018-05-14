import { Document, Section, ViewerOptions, Preferences } from '../models';
export interface DocumentsServiceConfig {
    headers?: {
        [key: string]: string;
    };
}
export declare class DocumentsService {
    config: DocumentsServiceConfig;
    setHeaders(headers: {
        [key: string]: string;
    }): void;
    getSections(bb: any, sections: Section[], ignoreSections: string[], pref: Preferences): Section[];
    fetch(document: Document): Promise<string>;
    open(document: Document): Promise<ViewerOptions>;
    load(data: any): ViewerOptions;
}
