import { Component } from '@angular/core'
import { ChartSettings } from '@sebgroup/green-charts'

@Component({
  selector: 'green-green-charts',
  template: ` <div class="card d-block" style="height: 270px;">
    <ngg-chart [settings]="settings"></ngg-chart>
  </div>`,
})
export class GreenChartsComponent {
  settings: ChartSettings = {
    fitHeightToParent: true,
    data: [
      {
        name: 'Antal',
        type: 'bar',
        values: [234, 197, 97, 142],
      },
      {
        name: 'Total',
        type: 'bar',
        values: [24, 17, 7, 14],
      },
    ],
    legend: 'right',
    categories: [
      'Signerade avtal (SEB)',
      'Påbörjade trials (Oxceed)',
      'Aktiverade prenumerationer',
      'Avslutade prenumerationer (endast efter avslutad ordinarie pren.)',
    ],
  }
}
