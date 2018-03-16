import riot from 'riot';
import { DocumentsService } from './services';

export class Sialia {

  service: DocumentsService = new DocumentsService();

  constructor(options: any) {

    let documents = options.docs.map(x => ({
      name: x.Name || x.name,
      url: x.Url || x.name
    }));

    this.service.fetch(documents[0].url).then((options) => {
      options.documents = documents;
      riot.mount('sialia', options);
    });
  }
}
