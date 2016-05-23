<viewer>
  <header data={ opts.data } sections={ opts.sections }/>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 col-sm-4" id="left">
        <demographics demographics={ opts.data.demographics }/>
        <allergies-summary section={ sections['allergies' ] } data={ opts.data.allergies }/>
      </div>
      <div class="col-lg-9 col-sm-8" id="right">
        <ccda-section each={ opts.sections } current={ this } sectiondata={ parent.opts.data[key] }/>
      </div>
    </div>
  </div>
  <script>
    this.sections = opts.sections.reduce(function(o, x){ o[x.key] = x; return o; }, {});
  </script>
</viewer>
