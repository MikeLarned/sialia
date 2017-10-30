<ccda-section>
  var options = {
    section: opts.current,
    data: opts.parent.data[opts.current.key]
  };

  console.log("Mounting: ", this.root);
  console.log("Tag Name: ", opts.current.tagName);
  console.log("Options: ", options);
  console.log("Data: ", opts.parent.data[opts.current.key]);

  riot.mount(this.root, opts.current.tagName, options);
  this.on('update', function() {
    options.data = opts.parent.data[opts.current.key];
  });
</ccda-section>
