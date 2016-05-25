<demographics>
  <div class="panel panel-default" id="demographics">
    <div class="panel-heading">
      <h2><name name={ opts.demographics.name } /></h2>
      <a href="#" class="toggle-body">
        <i class="fa fa-lg fa-caret-down"></i>
      </a>
      <ul class="fa-ul">
        <li class="dob">
          <i class="fa fa-li fa-birthday-cake" title="DOB"></i>
          <p>{ opts.demographics.dob }</p>
        </li>
        <li class="guardian">
          <i class="fa fa-li fa-child" title="Guardian"></i>
          { opts.demographics.guardian.name.given[0] } { opts.demographics.guardian.name.family }
          <span class="text-muted">(guardian)</span>
        </li>
      </ul>
    </div>
    <div class="panel-body">
      <ul class="fa-ul">
        <li class="narrative">
          <i class="fa fa-li fa-female" title="Demographics"></i>
          <p>{ opts.demographics.name.given[0] } is a { opts.demographics.marital_status } { opts.demographics.race } { opts.demographics.gender } who observes { opts.demographics.religion } and speaks { opts.demographics.language }.</p>
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
          <address class="phone"> { opts.demographics.phone.home }</address>
        </li>
        <li>
          <i class="fa fa-li fa-building title="Provider"></i>
          <p>{ opts.demographics.provider.organization }</p>
        </li>
      </ul>
    </div>
  </div>

</demographics>
