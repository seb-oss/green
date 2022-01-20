import { Component } from '@angular/core'
import { ChartSettings } from '@sebgroup/green-charts'

@Component({
  selector: 'green-green-charts',
  template: `<ngg-chart [settings]="settings"></ngg-chart>`,
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
