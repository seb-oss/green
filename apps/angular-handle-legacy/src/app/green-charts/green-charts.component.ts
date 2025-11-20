import { Component } from '@angular/core'

import { ChartSettings } from '@sebgroup/green-charts'

@Component({
    selector: 'green-green-charts',
    template: `<h3 class="my-3">Green chart</h3>
    <div class="use-green">
      <ngg-chart [settings]="settings"></ngg-chart>
    </div>
    <button type="button" class="btn btn-primary">Bootstrap primary</button>
    <div class="use-green mt-3">
      <button type="button">Green default button</button>
      <button type="submit">Green primary button</button>
    </div>`,
    standalone: false
})
export class GreenChartsComponent {
  settings: ChartSettings = {
    data: [
      {
        name: 'Antal',
        type: 'bar',
        values: [234, 197, 97, 12],
      },
    ],
    categories: [
      'Signerade avtal (SEB)',
      'Påbörjade trials (Oxceed)',
      'Aktiverade prenumerationer',
      'Avslutade prenumerationer (endast efter avslutad ordinarie pren.)',
    ],
  }
}
