import { moduleMetadata, Story } from '@storybook/angular'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { NggChartComponent } from './ngg-chart.component'
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

const ChartStory: Story<NggChartComponent> = (args) => ({
  props: args,
  template: `<ngg-chart [settings]='settings' [theme]='theme'></ngg-chart>`,
})

const ChartCardStory: Story<NggChartComponent> = (args) => ({
  props: args,
  template: `<div class="card" style="height: 340px">
                <header><h3>Chart in card with locked height (340px)</h3></header>
                <div>
                    <ngg-chart [settings]='settings' [theme]='theme'></ngg-chart>
                </div>
             </div>`,
})

const ObservableChartStory: Story<NggChartComponent> = (args) => ({
  props: args,
  template: `<ngg-chart [settings]='settings | async' [theme]='theme'></ngg-chart>`,
})

export const SimpleBar = ChartStory.bind({})
SimpleBar.args = {
  theme: '',
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
    style: {
      axis: {
        y: {
          label: 'Antal',
        },
      },
      tooltipNumberFormat: value => `${value} kr`
    },
  },
}

export const EmptyChart = ChartStory.bind({})
EmptyChart.args = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  settings: null,
  theme: '',
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
  theme: '',
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
  theme: '',
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
  theme: '',
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
  theme: '',
}

export const HideAxes = ChartStory.bind({})
HideAxes.args = {
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
    style: {
      axis: false,
      point: {
        show: 'focus',
      },
    },
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
  theme: '',
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
  theme: '',
}

export const MixedSecondY = ChartStory.bind({})
MixedSecondY.args = {
  settings: {
    data: [
      {
        type: 'spline',
        name: 'Signerade avtal SEB',
        values: [100, 140, 60, 150],
      },
      {
        type: 'area',
        name: 'Påbörjade trials',
        values: [80, 90, 130, 110],
      },
      {
        type: 'bar',
        name: 'Aktiverade prenumerationer',
        values: [3, 7, 9, 2],
        axis: 'y2',
      },
    ],
    categories: ['jan', 'feb', 'mar', 'apr'],
    legend: 'top',
  },
  theme: '',
}

export const FitToHeight = ChartCardStory.bind({})
FitToHeight.storyName = 'Fit to height of parent'
FitToHeight.args = {
  theme: '',
  settings: {
    style: {
      fitHeightToParent: true,
    },
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
      'Avslutade prenumerationer',
    ],
  },
}
