import { bootstrapize } from '../utilities/htmlhelpers';

<raw>
  <span></span>

  <script>
    this.root.innerHTML = bootstrapize(opts.content);
    this.on('update', function() {
      this.root.innerHTML = bootstrapize(opts.content);
    }.bind(this));
  </script>
</raw>
