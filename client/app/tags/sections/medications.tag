    <medications>
        <panel section={ opts.section } entries={ opts.data.entries }>
        <div each={ opts.entries }>
        <div class="row">
        <div class="col-md-12 header-row">
        <span class="header-name">{ text }</span>
        </div>
        </div>
        <div class="row">
        <div class="col-md-12">

        </div>
        </div>
        <div class="row">
        <div class="col-md-4">
        <table class="table table-borderless">

        <tbody>
        <tr>
        <th>
        <span class="header-small">Admin</span>
        </th>
        <td>
        <span>{ administration.name } [{ administration.code }]</span>
        </td>
        </tr>
        <tr>
        <th>
        <span class="header-small">Schedule</span>
        </th>
        <td>
        <span>{ schedule.type } { schedule.period_value }{ schedule.period_unit }</span>
        </td>
        </tr>
        <tr>
        <th>
        <span class="header-small">Dose</span>
        </th>
        <td>
        <span>{ dose_quantity.value } { dose_quantity.unit }</span>
        </td>
        </tr>
        <tr>
        <th scope="row">
        <span class="header-small">Rate</span>
        </th>
        <td>
        <span>{ rate_quantity.value } { rate_quantity.unit }</span>
        </td>
        </tr>
        </tbody>
        </table>
        </div>
        <div class="col-md-4">
        <table class="table table-borderless">

        <tbody>
        <tr>
        <th>
        <span class="header-small">Route</span>
        </th>
        <td>
        <span>{ route.name }</span>
        </td>
        </tr>
        <tr>
        <th>
        <span class="header-small">Vehicle</span>
        </th>
        <td>
        <span>{ vehicle.name } [{ vehicle.code_system_name } { vehicle.code }]</span>
        </td>
        </tr>
        <tr>
        <th>
        <span class="header-small">Prescriber</span>
        </th>
        <td>
        <span>{ prescriber.organization }</span>
        </td>
        </tr>
        <tr>
        <th scope="row">
        <span class="header-small">Rate</span>
        </th>
        <td>
        <span>{ rate_quantity.value } { rate_quantity.unit }</span>
        </td>
        </tr>
        </tbody>
        </table>
        </div>
        <div class="col-md-4">Test</div>
        </div>
        </div>
        </panel>


        <script>
        console.log(opts.data.entries[0]);
        </script>
        </medications>