import { Chart } from '.'

const Template = (args) => <Chart {...args} />

export default {
  title: 'Getting started',
  component: Chart,
}

export const GettingStarted = {
  render: Template.bind({}),
  name: 'Getting started',

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
    },
  },
}
