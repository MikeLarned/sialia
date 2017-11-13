<ccda-section>
  <allergies if={ opts.current.tagName == 'allergies' } section={ opts.current } data={ opts.parent.data[opts.curent.key] } />
  
  var options = {
    section: opts.current,
    data: opts.parent.data[opts.current.key]
  };


  //console.log("TagName:");
  //console.log(opts.current.tagName);

  //riot.mount(this.root, opts.current.tagName, options);
  this.on('update', function() {
    //options.data = opts.parent.data[opts.current.key];
  });
</ccda-section>
