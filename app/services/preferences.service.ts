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

        let id = docType.templateId,
            storageId = "doc_" + id,
            prefString = localStorage.getItem(storageId),
            pref = JSON.parse(prefString),
            isSet = pref !== null;

        if (!isSet) {
            pref = {
                id: id,
                isSet: isSet,
                type: docType,
                enabledSectionKeys: null,
                sortedSectionKeys: null
            };
        }

        return new Preferences(pref);
    }
}
