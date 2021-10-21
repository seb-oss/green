import { Story, Meta } from '@storybook/react'
import { ReactCharts, ReactChartsProps } from './react-charts'

export default {
  component: ReactCharts,
  title: 'ReactCharts',
} as Meta

const Template: Story<ReactChartsProps> = (args) => <ReactCharts {...args} />

export const SimpleBar = Template.bind({})
SimpleBar.args = {
  data: {
    name: 'Antal',
    type: 'bar',
    values: [
      { name: 'Signerade avtal (SEB)', value: 234 },
      { name: 'Påbörjade trials (Oxceed)', value: 197 },
      { name: 'Aktiverade prenumerationer', value: 97 },
      { name: 'Avslutade prenumerationer (endast efter avslutad ordinarie pren.)', value: 12 },
    ]
  }
}

export const Pie = Template.bind({})
Pie.args = {
  data: {
    name: 'Gold tickets',
    type: 'pie',
    values: [
      { name: 'Ej tilldelade', value: 700 },
      { name: 'Tilldelade', value: 200 },
      { name: 'Utnyttjade', value: 100 },
    ],
  },
}

export const Lines = Template.bind({})
Lines.args = {
  data: {
    name: 'Diagramrubrik',
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
