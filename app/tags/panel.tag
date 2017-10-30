import _ from 'lodash';

console.log(opts);
if (opts.section) {
  console.log(opts.section.tagName)
}

<panel class={ opts.section.tagName } class={ fade: isEmpty(), expanded: isEnabled(), collapsed: !isEnabled() }>
  <div class="panel panel-{ opts.state ? opts.state : 'default' }" id={ opts.section.key }>
    <div class="panel-heading section-toggle" onclick={ toggleSection }>
      <h3 class="panel-title">
        <i class="fa fa-{ opts.section.icon } section-icon" aria-hidden="true" if="{ !opts.hideicon }"></i>
        { opts.section.display }
        <span class="section-item-count badge badge-muted" if={ opts.data.entries.length }>{ opts.data.entries.length }</span>
        <span class="text-muted" if={ isEmpty() }>(empty)</span>
        <span class="pull-right">
          <i class="fa fa-chevron-down { fa-rotate-180: opts.section.enabled }" aria-hidden="true"></i>
        </span>
      </h3>
    </div>
    <div class="panel-body">
      <yield/>
    </div>
  </div>

  <script>
    var current;
  
    this.on('update', function() {
      if (opts.data !== current) {
        current = opts.data;
        if(this.isEmpty()) opts.section.enabled = false;
      }
    }.bind(this));
    
    this.isEmpty = function() {
      return !_.get(opts, 'data.entries.length') && !opts.data.text;
    }
    
    this.isEnabled = function() {
      return opts.section.enabled || opts.enabled;
    }
  
    this.toggleSection =  function() {
      opts.section.enabled = !opts.section.enabled;
    }
  </script>
</panel>
