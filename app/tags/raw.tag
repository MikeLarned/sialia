import { bootstrapize } from '../utilities/htmlhelpers';
<raw>
  <span></span>

  this.on('update', function() {
    this.root.innerHTML = bootstrapize(opts.content);
  }.bind(this));
</raw>
