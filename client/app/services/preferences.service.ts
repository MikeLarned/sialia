import { ViewerOptions, Section, Preferences, DocType } from '../models';
import _ from 'lodash';

export class PreferencesService  {

    save(opts: ViewerOptions) : void {

        var enabled = _.filter(opts.sections, (item) => {
            return item.enabled
        });

        var sortOrder = _.map(opts.sections, (item) => {
            return item.key
        });

        var pref = this.getPreferences(opts.pref.type);
        pref.enabledSectionKeys = _.map(enabled, (item) => {
           return item.key;
        });
        pref.sortedSectionKeys = sortOrder;
        pref.isSet = true;

        var storageId = "doc_" + opts.pref.type.templateId;
        localStorage.setItem(storageId, JSON.stringify(pref));

    }

    getPreferences(docType: DocType): Preferences {

        var id = docType.templateId;
        var storageId = "doc_" + id;

        var prefString = localStorage.getItem(storageId);
        var pref = JSON.parse(prefString);
        var isSet = pref !== null;

        if(!isSet) {
            pref = {
                id: id,
                isSet: isSet,
                type: docType,
                sortedSectionKeys: []
            };
        }

        //console.log("Doc Pref " + pref.isSet);
        //console.log(pref.type.templateId);
        //console.log(pref.sortedSectionKeys);
        //console.log(pref.type.displayName);

        return pref;
    }
}
