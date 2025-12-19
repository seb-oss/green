import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { moduleMetadata } from '@storybook/angular'
import { of } from 'rxjs'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggChartsModule } from '../ngg-charts.module'
import { NggChartComponent } from './ngg-chart.component'

const meta: Meta<NggChartComponent> = {
  title: 'Chart',
  component: NggChartComponent,
  parameters: {
    componentIds: ['component-chart'],
  },
  decorators: [
    moduleMetadata({
      imports: [BrowserModule, CommonModule, NggChartsModule],
    }),
  ],
}

export default meta
type Story = StoryObj<NggChartComponent>

export const SimpleBar: Story = {
  render: (args) => ({
    props: args,
    template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`,
  }),
  args: {
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
            stepSize: 50,
          },
        },
        tooltipNumberFormat: (value: any) => `${value} st`,
      },
    },
  },
}

export const EmptyChart: Story = {
  render: (args) => ({
    props: args,
    template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`,
  }),
  args: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    settings: null,
    theme: '',
  },
}

export const ObservableSimpleBar: Story = {
  render: (args) => ({
    props: args,
    template: `<ngg-chart [settings]="settings | async" [theme]="theme"></ngg-chart>`,
  }),
  args: {
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
  },
}

export const Pie: Story = {
  render: (args) => ({
    props: args,
    template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`,
  }),
  args: {
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
  },
}

export const Donut: Story = {
  render: (args) => ({
    props: args,
    template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`,
  }),
  args: {
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
  },
}

export const Lines: Story = {
  render: (args) => ({
    props: args,
    template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`,
  }),
  args: {
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
  },
}

export const HideAxes: Story = {
  render: (args) => ({
    props: args,
    template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`,
  }),
  args: {
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
  },
}

export const Splines: Story = {
  render: (args) => ({
    props: args,
    template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`,
  }),
  args: {
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
  },
}

export const Mixed: Story = {
  render: (args) => ({
    props: args,
    template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`,
  }),
  args: {
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
  },
}

export const MixedSecondY: Story = {
  render: (args) => ({
    props: args,
    template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`,
  }),
  args: {
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
  },
}

export const FitToHeight: Story = {
  render: (args) => ({
    props: args,
    template: `<div class="card" style="height: 340px">
                <header><h3>Chart in card with locked height (340px)</h3></header>
                <div>
                    <ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>
                </div>
             </div>`,
  }),
  name: 'Fit to height of parent',
  args: {
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
  },
}

export const CustomTickValues: Story = {
  render: (args) => ({
    props: args,
    template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`,
  }),
  args: {
    settings: {
      data: [
        {
          type: 'spline',
          name: 'Signerade avtal SEB',
          values: [100, 140, 250, 380],
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
      style: {
        axis: {
          y: {
            values: [100, 200, 300, 400],
          },
          y2: {
            values: () => [0, 4, 8, 10],
          },
        },
      },
    },
    theme: '',
  },
}

export const MixedGraphWithNegativeValues: Story = {
  render: (args) => ({
    props: args,
    template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`,
  }),
  args: {
    settings: {
      data: [
        {
          type: 'spline',
          name: 'Signerade avtal SEB',
          values: [100, 140, 250, 380, -100, 345, 100, 50, 20, 230, -20, 180],
        },
        {
          type: 'line',
          name: 'Aktiverade prenumerationer',
          values: [-100],
          axis: 'y2',
        },
        {
          type: 'bar',
          name: 'Aktiverade prenumerationer',
          values: [50, 230, 100, 280, 100, -30, -200, 100, 20, 230, -20, 180],
          axis: 'y2',
        },
      ],
      categories: [
        'jan',
        'feb',
        'mar',
        'apr',
        'maj',
        'jun',
        'jul',
        'aug',
        'sep',
        'okt',
        'nov',
        'dec',
      ],
      legend: 'top',
    },
    theme: '',
  },
}

export const CustomColours: Story = {
  render: (args) => ({
    props: args,
    template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`,
  }),
  args: {
    settings: {
      type: 'donut',
      data: [
        {
          name: 'Ej tilldelade',
          values: [600],
        },
        {
          name: 'Tilldelade',
          values: [100],
        },
      ],
      style: {
        color: {
          pattern: ['#dadada', '#45B400'],
        },
      },
    },
    theme: '',
  },
}
