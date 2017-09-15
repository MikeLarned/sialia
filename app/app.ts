import '../styles/styles.scss';
//import 'font-awesome/css/font-awesome.css!';
import './tags';
import 'bootstrap-sass';
import riot from 'riot';
import { DocumentsService } from './services';
import { PreferencesService } from './services';

export class App {

  service: DocumentsService = new DocumentsService();

  constructor(options: any) {

    var documents = options.docs;

    this.service.fetch(documents[0].Url).subscribe((options) => {
      options.documents = documents;
      riot.mount('sialia', options);
    });
  }
}

window['Sialia'] = App;
