<ccda-section>
  var options = {
    section: opts.current,
    data: opts.parent.data[opts.current.key]
  };

  riot.mount(this.root, opts.current.tagName, options);
  this.on('update', function() {
    options.data = opts.parent.data[opts.current.key];
  });
</ccda-section>
