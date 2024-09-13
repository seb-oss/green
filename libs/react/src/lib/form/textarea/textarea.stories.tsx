import { TextArea } from './textarea'

const TextAreaTemplate = ({ ...props }) => <TextArea {...props} />

export default {
  title: 'Components/Form/TextArea',
  component: TextArea,
}

export const Default = {
  render: TextAreaTemplate.bind({}),
  name: 'TextArea',

  parameters: {
    componentIds: ['component-textarea'],
  },

  args: {
    label: 'Text Area',
  },
}

export const LabelInformation = {
  render: TextAreaTemplate.bind({}),
  name: 'Label Information',
  args: {
    label: 'Text Area',
    info: 'Label Information',
  },
}

export const ExpandableInformation = {
  render: TextAreaTemplate.bind({}),
  name: 'Expandable Information',
  args: {
    label: 'Text Area',
    expandableInfo: 'Expandable Information',
  },
}

export const MaxLength = {
  render: TextAreaTemplate.bind({}),
  name: 'Max Length',
  args: {
    label: 'Text Area',
    maxLength: 100,
  },
}

export const MoreRows = {
  render: TextAreaTemplate.bind({}),
  name: 'More Rows',
  args: {
    label: 'Text Area',
    rows: 10,
  },
}

export const ErrorMessage = {
  render: TextAreaTemplate.bind({}),
  name: 'Error message',
  args: {
    label: 'Error message',
    validator: {
      indicator: 'error',
      message: 'Error message text',
    },
  },
}

export const Everything = {
  render: TextAreaTemplate.bind({}),
  name: 'Everthing enabled',
  args: {
    label: 'Text Area',
    expandableInfo: 'Expandable Information',
    info: 'Label information',
    maxLength: 1000,
    rows: 4,
    validator: {
      indicator: 'error',
      message: 'Error message',
    },
    placeholder: 'Placeholder',
  },
}
