import '../styles/styles.css!';
//import 'font-awesome/css/font-awesome.css!';
import './tags';
import 'bootstrap-sass';
import riot from 'riot';
import { DocumentsService } from './services';
import { PreferencesService } from './services';
import { DOCUMENTS } from './config';

export class App {

  service: DocumentsService = new DocumentsService();

  constructor() {
    this.service.fetch(DOCUMENTS[2].url).subscribe((options) => {
      options.pref = new PreferencesService().getPreferences(options.data.document.type);
      riot.mount('viewer', options);
    });
  }
}

new App();
