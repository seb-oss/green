import { Dropdown } from './dropdown'

const Template = ({ align, ...props }) => (
  <div style={{ paddingBottom: '150px' }}>
    <Dropdown {...props}></Dropdown>
  </div>
)

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
}

export const Default = {
  render: Template.bind({}),
  name: 'Dropdown',

  parameters: {
    componentIds: ['component-dropdown'],
  },

  args: {
    options: [
      {
        label: 'Select',
        value: null,
      },
      {
        label: 'Tacos',
        value: 'tacos',
      },
      {
        label: 'Pizza',
        value: 'pizza',
      },
      {
        label: 'Sushi',
        value: 'sushi',
      },
    ],

    label: 'Dropdown label',
    multiSelect: false,
    searchable: false,

    texts: {
      selected: 'selected',
      placeholder: 'Select',
      close: 'Close',
      optionsDescription: 'Options',
    },

    onChange: (value) => {
      console.log('OnChange', value)
    },

    label: 'Dropdown label',
    syncPopoverWidth: false,
  },
}
