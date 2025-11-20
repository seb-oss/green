import { Meta, Story } from '@storybook/react-vite'

import { Chart, ChartProps } from './chart'

export default {
  component: Chart,
  title: 'Chart',
  parameters: {
    componentIds: ['component-chart'],
  },
} as Meta

const Template: Story<ChartProps> = (args) => <Chart {...args} />

export const SimpleBar = Template.bind({})
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
    style: {
      axis: {
        y: {
          stepSize: 50,
        },
        x: {
          height: 60,
        },
      },
    },
  },
}

export const Pie = Template.bind({})
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

export const Donut = Template.bind({})
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

export const Lines = Template.bind({})
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

export const Splines = Template.bind({})
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

export const Mixed = Template.bind({})
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

export const CustomColours = Template.bind({})
CustomColours.args = {
  settings: {
    type: 'donut',
    data: [
      {
        name: 'Ej tilldelade',
        values: [700],
      },
      {
        name: 'Tilldelade',
        values: [300],
      },
    ],
    style: {
      color: {
        pattern: ['#dadada', 'green'],
      },
    },
  },
}
