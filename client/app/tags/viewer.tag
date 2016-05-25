<viewer>
  <header data={ data } sections={ sections }/>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 col-sm-4" id="left">
        <demographics demographics={ data.demographics }/>
        <allergies-summary section={ dictionary['allergies'] } data={ data.allergies }/>
      </div>
      <div class="col-lg-9 col-sm-8" id="right" if={ showPreferences }>
        <preferences sections={ sections } />
      </div>
      <div class="col-lg-9 col-sm-8" id="right" if={ !showPreferences }>
        <ccda-section each={ section in sections } current={ section } parent={ parent }/>
      </div>
    </div>
  </div>

  <script>
    var self = this;
    this.data = opts.data;
    this.sections = opts.sections;
    this.showPreferences = true;
    this.dictionary = this.sections.reduce(function(o, x){ o[x.key] = x; return o; }, {});
  </script>
</viewer>
