import { ViewerOptions, Section, Preferences, DocType } from '../models';
import * as _ from 'lodash';

export class PreferencesService  {

    save(opts: ViewerOptions): void {

        let enabled = _.filter(opts.sections, (item) => {
            return item.enabled;
        });

        let sortOrder = _.map(opts.sections, (item) => {
            return item.key;
        });

        let pref = this.getPreferences(opts.pref.type);
        pref.enabledSectionKeys = _.map(enabled, (item) => {
           return item.key;
        });
        pref.sortedSectionKeys = sortOrder;
        pref.isSet = true;

        let storageId = 'doc_' + opts.pref.type.templateId;
        localStorage.setItem(storageId, JSON.stringify(pref));
    }

    getPreferences(docType: DocType): Preferences {

        let id = docType.templateId,
            storageId = 'doc_' + id,
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
