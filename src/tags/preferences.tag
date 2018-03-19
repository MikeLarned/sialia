import dragula from 'dragula';
import * as _ from 'lodash';
import '../utilities/lodashmixins';
import { updateSortOrder } from '../models/section';
import { getElementIndex } from '../utilities/htmlhelpers';
import { PreferencesService } from '../services';

<preferences>
  <h2>
    <button class="btn btn-primary pull-right" type="button" name="button" onclick={ save }>Save</button>
    Which sections would you like to see?
    <small>
      <a href="#" onclick={ enableAll }>all</a> | <a href="#" onclick={ disableAll }>none</a>
      (drag to sort)</small>
  </h2>
    <p class="alert-info" if={ !opts.pref.isSet }>
        This is the first time you are setting up your section preferences for <b>{ opts.pref.type.type } { opts.pref.type.displayName }</b> documents.  You can order and select
        sections that are relevant for the care you are providing and we will save these for future use.
    </p>
  <ul class="list-group" id="preferences">
    <preference-section each={ opts.sections }/>
  </div>

  <script>
    var self = this;
    this.preferencesService = new PreferencesService();

    this.on('mount', function () {
      updateSortOrder();
      var container = document.getElementById('preferences');
      dragula([container], {direction: 'vertical'}).on('drop', drop);
    });

    function drop(el) {
      var from = _.findIndex(opts.sections, { key: el.key });
      var to = getElementIndex(el);
      _.move(opts.sections, from, to);
      updateSortOrder();
      self.preferencesService.save(opts);
      self.update();
    }

    this.enableAll = function() {
      _.each(opts.sections, function(s) {
        s.enabled = true;
      });
    }

    this.disableAll = function() {
      _.each(opts.sections, function(s) {
        s.enabled = false;
      });
    }

    this.save = function() {
      this.parent.showPreferences = false;
      this.preferencesService.save(opts);
      riot.update();
    }

  </script>
</preferences>

<preference-section>
  <li class="list-group-item preferences-section text-right">
    <label class="checkbox-inline pull-left">
      <input type="checkbox" checked={ enabled } onchange={ change }>
      <i class="fa fa-{ icon }"></i> { display }
    </label>
    <i class="fa fa-bars" title="Drag to sort"></i>
  </div>

  <script>
    this.root.key = this.key;

    this.change = function(e) {
      e.item.enabled = e.target.checked;
      this.update();
    }
  </script>
</preference-section>
