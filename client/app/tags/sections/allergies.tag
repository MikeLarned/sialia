<allergies>
  <panel section={ opts.section } count={ opts.data.length } data={ opts.data }>
    <div class="row">
      <div each={ opts.data } class="col-sm-4">
        <div class="alert alert-mild clearfix " role="alert">
          <h4>{ allergen.name }</h4>
          <div class="pull-left">{ reaction.name }</div>
          <div class="pull-right">{ severity }</div>
        </div>
      </div>
    </div>
  </panel>
</allergies>
