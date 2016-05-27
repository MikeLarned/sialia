<panel>
  <div class="panel panel-{opts.state ? opts.state : 'default'}" id={ opts.section.key }>
    <div class="panel-heading">
      <h3 class="panel-title">
        <i class="fa fa-{ opts.section.icon } section-icon" aria-hidden="true" if="{ !opts.hideicon }"></i>
        { opts.section.display }
        <span class="section-item-count badge badge-muted" if={ opts.count }>{ opts.count }</span>
        <span class="section-toggle pull-right" onclick={ toggleSection }>
          <i class="fa fa-lg fa-caret-down { fa-rotate-180: opts.section.enabled }" aria-hidden="true"></i>
        </span>
      </h3>
    </div>
    <div class="panel-body" show={ opts.section.enabled || opts.enabled }>
      <yield/>
    </div>
  </div>

  <script>
    toggleSection() {
      opts.section.enabled = !opts.section.enabled;
    }
  </script>
</panel>
