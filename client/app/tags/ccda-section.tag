<ccda-section>
  var tag = riot.mount(this.root, opts.current.tagName, {
    section: opts.current,
    data: opts.sectionData
  });
  var self = this;
  this.on('mount', function(){
    var seen = [];
    console.log(JSON.stringify(self, function(key, val) {
       if (val != null && typeof val == "object") {
            if (seen.indexOf(val) >= 0) {
                return;
            }
            seen.push(val);
        }
        return val;
    }, 4));
  });
</ccda-section>
