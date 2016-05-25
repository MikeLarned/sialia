import './tags';
import 'bootstrap-sass';
import riot from 'riot';
import { DocumentsService } from './services';
import { DOCUMENTS } from './config';

export class App {

  service: DocumentsService = new DocumentsService();

  constructor() {
    this.service.fetch(DOCUMENTS[2].url).subscribe((options) => {
      riot.mount('viewer', options);
    });
  }
}
