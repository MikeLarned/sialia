import '../styles/styles.scss';
import 'bootstrap';
import _ from 'lodash';
import riot from 'riot';

import './tags';
import { DocumentsService } from './services';
import { PreferencesService } from './services';

export class Sialia {

  service: DocumentsService = new DocumentsService();

  constructor(options: any) {

    let documents = options.docs;

    this.service.fetch(documents[0].Url).then((options) => {
      options.documents = documents;
      riot.mount('sialia', options);
    });
  }
}

window['Sialia'] = Sialia;