export interface Document {
    name?: string;
    url?: string;
    content?: string;
}
export declare function isDocument(arg: any): arg is Document;
