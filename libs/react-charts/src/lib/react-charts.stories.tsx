import { Story, Meta } from '@storybook/react'
import { ReactCharts, ReactChartsProps } from './react-charts'

export default {
  component: ReactCharts,
  title: 'ReactCharts',
} as Meta

const rand = () => Math.round(3000 * Math.random()) - 1000

const Template: Story<ReactChartsProps> = (args) => <ReactCharts {...args} />

export const Mixed = Template.bind({})
Mixed.args = {
  data: {
    columns: [
      ['Data 1', rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      ['Data 2', rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      ['Data 3', rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      ['Data 4', rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    ],
    types: {
      'Data 1': 'bar',
      'Data 2': 'line',
      'Data 3': 'area',
      'Data 4': 'spline',
    },
  },
  zoom: {
    enabled: true,
  },
  legend: {
    position: 'right',
  },
}

export const Bar = Template.bind({})
Bar.args = {
  data: {
    columns: [
      ['Data 1', 12, 3, 3, 1],
    ],
    type: 'bar',
  },
  axis: {
    x: {
      type: 'category',
      categories: [
        'Signerade avtal (SEB)',
        'Påbörjade trials (Oxceed)',
        'Aktiverade Prenumerationer',
        'Avslutade prenumerationer (endast efter avslutad ordinarie pren.)',
      ],
    }
  },
}

export const Pie = Template.bind({})
Pie.args = {
  data: {
    columns: [
      ['Ej tilldelade', 99],
      ['Tilldelade', 2],
      ['Utnyttjade', 2],
    ],
    type: 'pie',
  },
  zoom: {
    enabled: true,
  },
}

export const Donut = Template.bind({})
Donut.args = {
  data: {
    columns: [
      ['Ej tilldelade', 99],
      ['Tilldelade', 2],
      ['Utnyttjade', 2],
    ],
    type: 'donut',
  },
  zoom: {
    enabled: true,
  },
}

export const Spline = Template.bind({})
Spline.args = {
  data: {
    columns: [
      ['Data 1', 12, 3, 3, 1],
      ['Data 2', 5, -3, 13, 1],
    ],
    type: 'spline',
  },
  axis: {
    x: {
      type: 'category',
      categories: [
        'Signerade avtal (SEB)',
        'Påbörjade trials (Oxceed)',
        'Aktiverade Prenumerationer',
        'Avslutade prenumerationer (endast efter avslutad ordinarie pren.)',
      ],
    }
  },
}

export const Area = Template.bind({})
Area.args = {
  data: {
    columns: [
      ['Data 1', 12, 3, 3, 1],
    ],
    type: 'area',
  },
}

export const AreaSpline = Template.bind({})
AreaSpline.args = {
  data: {
    columns: [
      ['Data 1', 12, 3, 3, 1],
    ],
    type: 'area-spline',
  },
}

export const AreaStep = Template.bind({})
AreaStep.args = {
  data: {
    columns: [
      ['Data 1', 12, 3, 3, 1],
    ],
    type: 'area-step',
  },
}

export const Gauge = Template.bind({})
Gauge.args = {
  data: {
    columns: [
      ['Data 1', 12],
      ['Data 2', 55],
      ['Data 3', 25],
    ],
    type: 'gauge',
  },
}

export const Radar = Template.bind({})
Radar.args = {
  data: {
    columns: [
      ['Data 1', 12, 3, 7, 4, 45, 65, 9,90, 67],
      ['Data 2', 55, 1, 53, 56 ,9, 56, 34, 5],
      ['Data 3', 25],
    ],
    type: 'radar',
  },
}
