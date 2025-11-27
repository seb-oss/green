import { Component } from '@angular/core'

import { ChartSettings } from '@sebgroup/green-charts'

@Component({
    selector: 'green-green-charts',
    template: `<div class="card d-block" style="height: 270px;">
      <ngg-chart [settings]="settings"></ngg-chart>
    </div>
    <div class="card d-block mt-5">
      <ngg-chart [settings]="hideAxis"></ngg-chart>
    </div>`,
    standalone: false
})
export class GreenChartsComponent {
  settings: ChartSettings = {
    style: {
      fitHeightToParent: true,
    },
    data: [
      {
        name: 'Totalt',
        type: 'bar',
        values: [234, 197, 97, 142],
      },
      {
        name: 'Total',
        type: 'bar',
        values: [24, 17, 7, 14],
      },
      {
        name: 'Unika',
        type: 'line',
        values: [12, 5, 20, 7],
        axis: 'y2',
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
  hideAxis: ChartSettings = {
    data: [
      {
        name: 'Unika',
        type: 'line',
        values: [12, 5, 20, 7, 4, 16, 2, 3, 9],
      },
    ],
    style: {
      axis: false,
      point: {
        show: 'focus',
      },
    },
    categories: [
      'Signerade avtal (SEB)',
      'Påbörjade trials (Oxceed)',
      'Aktiverade prenumerationer',
      'Avslutade prenumerationer (endast efter avslutad ordinarie pren.)',
    ],
  }
}
