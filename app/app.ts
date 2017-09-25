import '../styles/styles.scss';
import './tags';
import 'bootstrap-sass';
import * as lodash from 'lodash';
import riot from 'riot';
import { DocumentsService } from './services';
import { PreferencesService } from './services';

export class App {

  service: DocumentsService = new DocumentsService();

  constructor(options: any, errorHandler?: (err: any) => void) {

    let docs = options.docs;

    if (lodash.isString(docs[0])) {
      this.service.loadRaw(docs[0])
        .subscribe(options => {
          riot.mount('sialia', options);
          },
          errorHandler);
    } else {
      this.service.fetch(docs[0].Url)
        .subscribe((options) => {
          options.documents = docs;
          riot.mount('sialia', options);
        },
        errorHandler);
    }
  }
}

window['Sialia'] = App;