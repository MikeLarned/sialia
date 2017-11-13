<ccda-section>
  <allergies if={ opts.current.tagName == 'allergies' } section={ opts.current } data={ data } />
  <generic if={opts.current.tagName == 'generic' } section={ opts.current } data={ data } />
  
  var options = {
    section: opts.current,
    data: opts.parent.data[opts.current.key]
  };


  //console.log("TagName:");
  //console.log(opts.current.tagName);

  //riot.mount(this.root, opts.current.tagName, options);
  var self = this;
  self.data = opts.data;
  this.on('update', function() {
    self.data = opts.parent.data[opts.current.key];
  });
</ccda-section>
