import { ViewerOptions, Section, Preferences } from '../models';
import _ from 'lodash';

export class PreferencesService  {

    save(opts: ViewerOptions): void {

        let enabled = _.filter(opts.sections, (item) => {
            return item.enabled;
        });

        let sortOrder = _.map(opts.sections, (item) => {
            return item.key;
        });

        let pref = this.getPreferences(opts.pref.id);
        pref.enabledSectionKeys = _.map(enabled, (item) => {
           return item.key;
        });
        pref.sortedSectionKeys = sortOrder;
        pref.isSet = true;

        let storageId = 'doc_' + opts.pref.id;
        localStorage.setItem(storageId, JSON.stringify(pref));

    }

    getPreferences(docId: string): Preferences {

        let storageId = 'doc_' + docId,
            prefString = localStorage.getItem(storageId),
            pref = JSON.parse(prefString),
            isSet = pref !== null;

        if (!isSet) {
            pref = {
                id: docId,
                isSet: isSet,
                enabledSectionKeys: null,
                sortedSectionKeys: null
            };
        }

        return new Preferences(pref);
    }
}
