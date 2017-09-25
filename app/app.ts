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

    let documents = options.docs;

    if (lodash.isString(documents[0])) {
      this.service.loadRaw(documents[0])
        .subscribe(documents => {
          riot.mount('sialia', {
            documents: documents
          },
          errorHandler);
      });
    } else {
      this.service.fetch(documents[0].Url)
        .subscribe((options) => {
          options.documents = documents;
          riot.mount('sialia', options);
        },
        errorHandler);
    }
  }
}

window['Sialia'] = App;