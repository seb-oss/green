import { RadioButton } from './radioButton'
import { RadioGroup } from './radioGroup'

const RadioButtonTemplate = ({ ...props }) => <RadioButton {...props} />

const RadioGroupTemplate = ({ ...props }) => (
  <RadioGroup {...props}>
    <RadioButton value={'value-1'} label="First label" />
    <RadioButton value={'value-2'} label="Second label" />
  </RadioGroup>
)

export default {
  title: 'Components/Form/RadioGroup',
  component: RadioGroup,
}

export const Default = {
  render: RadioGroupTemplate.bind({}),
  name: 'Default',

  parameters: {
    componentIds: ['component-radiogroup'],
  },

  args: {
    label: 'Radio group',
    labelInformation: 'This is longer information describing the input',
  },
}

export const ExpandableInformation = {
  render: () => (
    <RadioGroup
      label="Radio Group"
      labelInformation="Radio Group Description"
      expandableInfo="This is a long expandable information that can be sent to the radio group component"
      expandableInfoButtonLabel="Toggle additional information"
    >
      <RadioButton label="Radio Button 1" name="name" value="button1" />
      <RadioButton label="Radio Button 2" name="name" value="button2" />
    </RadioGroup>
  ),

  name: 'Expandable information',
}

export const Validation = {
  render: () => (
    <RadioGroup
      label="Radio Group"
      labelInformation="Radio Group Description"
      validator={{
        message:
          'This form item is invalid! And what happens if its really long?',
        indicator: 'error',
      }}
    >
      <RadioButton label="Radio Button 1" name="name" value="button1" />
      <RadioButton label="Radio Button 2" name="name" value="button2" />
    </RadioGroup>
  ),

  name: 'Validation',
}

export const Horizontal = {
  render: () => (
    <RadioGroup
      label="Radio Group"
      labelInformation="Radio Group Description"
      validator={{
        message:
          'This form item is invalid! And what happens if its really long?',
        indicator: 'error',
      }}
      horizontal
    >
      <RadioButton label="Radio Button 1" name="name" value="button1" />
      <RadioButton label="Radio Button 2" name="name" value="button2" />
    </RadioGroup>
  ),

  name: 'Horizontal',
}
