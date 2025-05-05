/* eslint no-console: "off" */
import { RadioButton } from './radioButton'
import { RadioGroup } from './radioGroup'

const RadioButtonTemplate = ({ ...props }) => <RadioButton {...props} />
const RadioGroupTemplate = ({ ...props }) => <RadioGroup {...props} />

export default {
  title: 'Components/Form/RadioButton',
  component: RadioButton,
}

export const Default = {
  render: RadioButtonTemplate.bind({}),
  name: 'RadioButton',

  parameters: {
    componentIds: ['component-radiobutton'],
  },

  args: {
    label: 'Radio Button',
    value: 'Button value',

    onChange: (e) => {
      console.log(e.target.checked)
    },
  },
}
