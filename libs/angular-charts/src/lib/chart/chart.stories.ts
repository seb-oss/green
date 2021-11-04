import { moduleMetadata, Story } from '@storybook/angular'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { ChartComponent } from './chart.component'
import { of } from 'rxjs'
import { NggChartsModule } from '../ngg-charts.module'

export default {
  title: 'Chart',
  decorators: [
    moduleMetadata({
      imports: [BrowserModule, CommonModule, NggChartsModule],
    }),
  ],
}

const ChartStory: Story<ChartComponent> = (args) => ({
  props: args,
  template: `<ngg-chart [settings]='settings'></ngg-chart>`,
})

const ObservableChartStory: Story<ChartComponent> = (args) => ({
  props: args,
  template: `<ngg-chart [settings]='settings | async'></ngg-chart>`,
})

export const SimpleBar = ChartStory.bind({})
SimpleBar.args = {
  settings: {
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
  },
}

export const EmptyChart = ChartStory.bind({})
EmptyChart.args = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  settings: null,
}

export const ObservableSimpleBar = ObservableChartStory.bind({})
ObservableSimpleBar.args = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  settings: of({
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
  }),
}

export const Pie = ChartStory.bind({})
Pie.args = {
  settings: {
    type: 'pie',
    data: [
      {
        name: 'Ej tilldelade',
        values: [700],
      },
      {
        name: 'Tilldelade',
        values: [200],
      },
      {
        name: 'Utnyttjade',
        values: [100],
      },
    ],
    legend: 'right',
  },
}

export const Donut = ChartStory.bind({})
Donut.args = {
  settings: {
    type: 'donut',
    data: [
      {
        name: 'Ej tilldelade',
        values: [700],
      },
      {
        name: 'Tilldelade',
        values: [200],
      },
      {
        name: 'Utnyttjade',
        values: [100],
      },
    ],
  },
}

export const Lines = ChartStory.bind({})
Lines.args = {
  settings: {
    data: [
      {
        name: 'Signerade avtal SEB',
        type: 'line',
        values: [10, 14, 6, 15],
      },
      {
        name: 'Påbörjade trials',
        type: 'line',
        values: [8, 9, 13, 11],
      },
      {
        name: 'Aktiverade prenumerationer',
        type: 'line',
        values: [3, 7, 9, 10],
      },
    ],
    categories: ['jan', 'feb', 'mar', 'apr'],
  },
}

export const Splines = ChartStory.bind({})
Splines.args = {
  settings: {
    type: 'spline',
    data: [
      {
        name: 'Signerade avtal SEB',
        values: [10, 14, 6, 15],
      },
      {
        name: 'Påbörjade trials',
        values: [8, 9, 13, 11],
      },
      {
        name: 'Aktiverade prenumerationer',
        values: [3, 7, 9, 10],
      },
    ],
    categories: ['jan', 'feb', 'mar', 'apr'],
  },
}

export const Mixed = ChartStory.bind({})
Mixed.args = {
  settings: {
    data: [
      {
        type: 'spline',
        name: 'Signerade avtal SEB',
        values: [10, 14, 6, 15],
      },
      {
        type: 'area',
        name: 'Påbörjade trials',
        values: [8, 9, 13, 11],
      },
      {
        type: 'bar',
        name: 'Aktiverade prenumerationer',
        values: [3, 7, 9, 10],
      },
    ],
    categories: ['jan', 'feb', 'mar', 'apr'],
    legend: 'right',
  },
}
