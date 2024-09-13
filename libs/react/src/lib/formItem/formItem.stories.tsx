import { FormItem } from './formItem'
import { Select, Option } from '../select'
import { NumberInput } from '../form/input/input'

const Template = () => {
  return (
    <>
      <Select label="This is a label" info="this is information label">
        <Option>This is an option</Option>
        <Option>This is an option</Option>
      </Select>
      <Select label="This is a label" info="this is information label">
        <Option>This is an option</Option>
        <Option>This is an option</Option>
      </Select>
    </>
  )
}

export default {
  title: 'Components/FormItem',
  component: FormItem,
}

export const TextInput = {
  render: Template.bind({}),
  name: 'TextInput',

  parameters: {
    componentIds: ['component-input'],
  },

  args: {
    label: 'Text input',
    info: 'Input some text here',
  },
}

export const ExpandableInformation = {
  render: () => (
    <NumberInput
      label="Hur mycket vill du låna?"
      info="För att du ska kunna få låna pengar behöver vi veta hur mycket"
      expandableInfo="This is some expandable information that is very long as was created that way in order to test how it preforms in such a situation"
      expandableInfoButtonLabel="Toggle additional information"
    />
  ),

  name: 'Expandable information',
}

export const ExpandableInformationJsx = {
  render: () => (
    <NumberInput
      label="Hur mycket vill du låna?"
      info="För att du ska kunna få låna pengar behöver vi veta hur mycket"
      expandableInfo={
        <>
          Using JSX here is useful if you need to include for example a
          <a href="#">link</a>
        </>
      }
      expandableInfoButtonLabel="Toggle additional information"
    />
  ),

  name: 'Expandable information JSX',
}
