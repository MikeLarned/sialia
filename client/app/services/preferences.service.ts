import { Section} from '../models';
import _ from 'lodash';

export class PreferencesService  {

    save(documentid: string, sections: Section[]) : void {

        // ML - Find the Items we want to enable for a given document section and document
        // id type
        var enabled = _.filter(sections, (item) => {
            return item.enabled
        });

        var doc = "doc_" + documentid;

        console.log(doc)
    }

    isDocumentPrefSet(documentid: string) {
        return false;
    }
}