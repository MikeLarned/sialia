import { Section} from '../models';
import _ from 'lodash';

export class PreferencesService  {

    save(documentid: string, sections: Section[]) : void {

        // ML - Find the Items we want to enable for a given document section and document
        // id type
        var enabled = _.filter(sections, (item) => {
            return item.enabled
        });

        var pref = getPreferences(documentid);

    }

    isDocumentPrefSet(documentid: string) {
        return false;
    }

    getPreferences(documentid: string) {
        var isSet = false;
        var id = documentid;
        var storageId = "doc_" + id;

        var prefString = localStorage.getItem(storageId);
        var pref = JSON.parse(prefString);
        isSet = pref !== null;

        if(!isSet) {
            pref = {
                id: id,
                isSet: isSet
            };
        }

        console.log("Preferences String");
        console.log(pref);

        return pref;

    }
}