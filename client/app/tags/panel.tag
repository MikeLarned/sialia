<panel>
  <div class="panel panel-{opts.state ? opts.state : 'default'}" id={ opts.section.key }>
    <div class="panel-heading">
      <h3 class="panel-title">
        <i class="fa fa-{ opts.section.icon } section-icon" aria-hidden="true" if="{ !opts.hideicon }"></i>
        { opts.section.display }
        <span class="section-item-count badge badge-muted" if={ opts.count }>{ opts.count }</span>
        <a href="#" class="section-toggle pull-right">
          <i class="fa fa-lg fa-caret-down" aria-hidden="true"></i>
        </a>
      </h3>
    </div>
    <div class="panel-body">
      <yield/>
    </div>
  </div>
</panel>
