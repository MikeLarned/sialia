import moment from 'moment';
import * as _ from 'lodash';
import '../../utilities/lodashmixins';
import { languages } from '../../utilities/lang';

<demographics>
  <div class="panel panel-default" id="demographics">
    <div class="panel-heading">
      <h2><name name={ opts.demographics.name } /></h2>
      <a href="#" class="toggle-body" onclick={ toggle }>
        <i class="fa fa-chevron-down { fa-rotate-180: visible }" title="Show/hide"></i>
      </a>
      <ul class="fa-ul">
        <li class="dob">
          <i class="fa fa-li fa-birthday-cake" title="DOB"></i>
          <p>{ formatDate(opts.demographics.dob) }</p>
        </li>
        <li class="guardian" if={ opts.demographics.guardian.name.family }>
          <i class="fa fa-li fa-child" title="Guardian"></i>
          <name name={ opts.demographics.guardian.name } />
          <span class="text-muted">(guardian)</span>
        </li>
      </ul>
    </div>
    <div class="panel-body" show={ visible }>
      <ul class="fa-ul">
        <li class="narrative">
          <i class="fa fa-li fa-female" title="Demographics"></i>
          <p>
            <strong>{ opts.demographics.name.given[0] }</strong> is a
            <strong>{ opts.demographics.marital_status } { opts.demographics.race } { opts.demographics.gender }</strong> whose religion is
            <strong>{ opts.demographics.religion || 'unspecified' }</strong> and speaks <strong>{ formatLanguage(opts.demographics.language) }</strong>.
            </p>
        </li>
        <li>
          <i class="fa fa-li fa-map-marker" title="Address"></i>
          <address class="address">
            { opts.demographics.address.street[0] }<br>
            { opts.demographics.address.city }, { opts.demographics.address.state } { opts.demographics.address.zip }
          </address>
        </li>
        <li>
          <i class="fa fa-li fa-phone" title="Phone"></i>
          <address class="phone"> { formatPhone(opts.demographics.phone) }</address>
        </li>
        <li if={ opts.demographics.provider.organization }>
          <i class="fa fa-li fa-building" title="Provider"></i>
          <p>{ opts.demographics.provider.organization }</p>
        </li>
      </ul>
    </div>
  </div>

  <script>
    this.visible = true;

    this.toggle = function() {
      this.visible = !this.visible;
    }

    this.formatDate = function(date) {
      return moment(date).format('MMM D, YYYY');
    }

    this.formatPhone = function(phone) {

      var p = '';
      // which phone?
      if (phone.work) {
        p = phone.work
      }
      if (phone.home) {
        p = phone.home;
      }
      if (phone.cell) {
        p = phone.cell;
      }

      var clean = "";
      //_.(p).forEach(function(value) {
        //clean = clean + value;
      //});
      for (var i = 0, len = p.length; i < len; i++) {
        if (!isNaN(p[i])) {
          clean = clean + p[i];
        }
      }

      if (clean.length > 10) {
        if (clean[0] == '1') {
          clean = clean.slice(1);
        }
      }

      var pretty = '';
      if (clean.length == 10) {
        var c = clean;
        pretty = '(' + c[0] + c[1] + c[2] + ') ' + c[3] + c[4] + c[5] + '-' + c[6] + c[7] + c[8] + c[9];
      }
      return pretty;
    }

    this.formatLanguage = function(languageCode) {
      return languageCode && languages[languageCode.toLowerCase()] || 'an uknown language';
    }

    // religion: http://www.hl7.org/documentcenter/public_temp_44EED454-1C23-BA17-0CCDE88B4D98F6FD/standards/vocabulary/vocabulary_tables/infrastructure/vocabulary/ReligiousAffiliation.html
  </script>
</demographics>
