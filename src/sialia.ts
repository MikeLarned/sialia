import riot from 'riot';
import { DocumentsService } from './services';

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
