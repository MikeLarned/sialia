import { DocumentsService } from '../services';
import { DOCUMENTS } from '../config';

<header>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">
          { opts.data.document.title } -
          <name name={ opts.data.demographics.name } class="text-muted"/>
        </a>
      </div>

      <div class="collapse navbar-collapse" id="navbar-collapse-1">

        <!-- <form class="navbar-form navbar-right" role="search" id="search">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search">
            <span class="input-group-btn">
              <button type="submit" class="btn btn-default" aria-label="Search">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </span>
          </div>
        </form> -->

        <ul class="nav navbar-nav navbar-right" id="jump-nav">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" id="jump" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              Documents
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu" aria-labelledby="jump">
              <li each={ documents }>
                <a href="#" onclick={ view }>
                  { name }
                </a>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" id="jump" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              Jump to
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu" aria-labelledby="jump">
              <li>
                <a href="#">Top</a>
              </li>
              <li role="separator" class="divider"></li>
              <li each={ opts.sections }>
                <a href="#{ key }">
                  <i class="fa fa-{ icon }" aria-hidden="true"></i>
                  { display }
                </a>
              </li>
            </ul>
          </li>
          <li class={ active: this.parent.showPreferences }>
            <a href="#" onclick={ showPreferences }>
              <i class="fa fa-lg fa-cog"></i>
            </a>
          </li>
        </ul>

      </div>
    </div>
  </nav>

  <script>
    this.documents = DOCUMENTS;
    this.service = new DocumentsService();

    view(e) {
      this.service.fetch(e.item.url).subscribe((options) => {
        this.parent.update(options);
        riot.update();
      });
    }

    showPreferences() {
      this.parent.showPreferences = true;
      this.parent.update();
    }
  </script>

</header>
