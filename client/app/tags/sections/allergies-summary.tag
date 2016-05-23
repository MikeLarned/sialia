<allergies-summary>
  <panel section={ opts.section } count={ opts.data.length } data={ opts.data } hideicon={ true }>
    <div each={ opts.data }>
      <div class="alert alert-mild clearfix" role="alert">
        <h4>{ allergen.name }</h4>
        <div class="pull-left">{ reaction.name }</div>
        <div class="pull-right">{ severity }</div>
      </div>
    </div>
  </panel>
</allergies-summary>
