<sialia>
  <header data={ data } sections={ sections } documents={ documents }/>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 col-sm-4 hidden-xs" id="placeholder"></div>
      <div class="col-lg-3 col-sm-4" id="left">
        <demographics demographics={ data.demographics }/>
      </div>
      <div class="col-lg-9 col-sm-8" id="right" if={ showPreferences && !showNonXml}>
        <preferences sections={ sections } pref={ pref } />
      </div>
      <div class="col-lg-9 col-sm-8" id="right" if={ !showPreferences && !showNonXml }>
        <ccda-section each={ section in sections } current={ section } parent={ parent }/>
      </div>
        <div class="col-lg-9 col-sm-8" id="right" if={ showNonXml }>
            <nonxml nonxml={ data.document.type.nonXmlBody } />
        </div>
    </div>
  </div>

  <script>

    var self = this;
    this.data = opts.data;
    this.pref = opts.pref;
    this.sections = opts.sections;
    this.showPreferences = !opts.pref.isSet;
    this.showNonXml = self.data.document.type.nonXmlBody.type;
    this.documents = opts.documents;
    this.dictionary = this.sections.reduce(function(o, x){ o[x.key] = x; return o; }, {});
    this.on('update', function() {

        // ML - Not showing preferences when the body type is nonXmL.  We just want to show
        // a link to the document.
        self.showNonXml = self.data.document.type.nonXmlBody.type !== "";
    });
  </script>
</sialia>
