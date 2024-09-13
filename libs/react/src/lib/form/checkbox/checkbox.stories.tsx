import { Checkbox } from './checkbox'

const CheckboxTemplate = ({ ...props }) => <Checkbox {...props} />

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  args: {},
}

export const Default = {
  render: CheckboxTemplate.bind({}),
  name: 'Checkbox',

  parameters: {
    componentIds: ['component-checkbox'],
  },

  args: {
    label: 'Checkbox input',
    defaultChecked: false,
  },
}
