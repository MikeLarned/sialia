<allergies>
  <panel section={ opts.section } entries={ opts.data.entries }>
    <div class="row">
      <div each={ opts.entries } class="col-sm-4">
        <div class="alert alert-mild clearfix " role="alert">
          <h4>{ allergen.name }</h4>
          <div class="pull-left">{ reaction.name }</div>
          <div class="pull-right">{ severity }</div>
        </div>
      </div>
    </div>
  </panel>
</allergies>
