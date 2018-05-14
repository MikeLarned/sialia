import { Document } from './models';
export declare class Sialia {
    private documentService;
    private instance;
    private documents;
    constructor(config?: SialiaConfig);
    configure(config: SialiaConfig): void;
    open(document?: Document): Promise<any>;
    close(): void;
}
export interface SialiaConfig {
    docs: Document[];
    headers?: {
        [key: string]: string;
    };
}
