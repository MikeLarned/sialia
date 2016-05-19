<panel>
  <div class="panel panel-{this.state ? this.state : 'default'}" id="document">
    <div class="panel-heading">
      <h3 class="panel-title">
        <i class="fa fa-{this.icon}" aria-hidden="true"></i>
        {this.title}
      </h3>
    </div>
    <div class="panel-body">
      <yield/>
    </div>
  </div>
</panel>
