import { Chart } from '../'

const Template = (args) => <Chart {...args} />

export default {
  title: 'Use cases/Lighthouse 1',
  component: Chart,
}

export const BarChart = {
  render: Template.bind({}),
  name: 'Bar chart',

  args: {
    settings: {
      data: [
        {
          name: 'Score card',
          values: [12, 9, 3, 1],
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
          x: {
            height: 60,
          },
        },
      },
    },
  },
}

export const BarChartWithNegative = {
  render: Template.bind({}),
  name: 'Bar chart with negative',

  args: {
    settings: {
      data: [
        {
          name: 'Score card',
          values: [12, 9, -3, 1],
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
          x: {
            height: 60,
          },
        },
      },
    },
  },
}

export const PieChart = {
  render: Template.bind({}),
  name: 'Pie chart',

  args: {
    settings: {
      type: 'pie',

      data: [
        {
          name: 'Ej tilldelade',
          values: [900],
        },
        {
          name: 'Tilldelade',
          values: [50],
        },
        {
          name: 'Utnyttjade',
          values: [50],
        },
      ],

      legend: 'right',
    },
  },
}

export const SplinesChart = {
  render: Template.bind({}),
  name: 'Splines chart',

  args: {
    settings: {
      type: 'spline',

      data: [
        {
          name: 'Signerade avtal SEB',
          values: [0, 0, 0, 0, 2, 0, 2, 0, 0, 3, 0, 0],
        },
        {
          name: 'Påbörjade trials',
          values: [0, 0, 1, 0, 0, 0, 0, 0, 2, 6, 0, 0],
        },
        {
          name: 'Aktiverade prenumerationer',
          values: [0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0],
        },
      ],

      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Okt',
        'Nov',
        'Dec',
      ],
    },
  },
}
