import { Input } from './input'

const InputTemplate = ({ ...props }) => <Input {...props} />

export default {
  title: 'Components/Form/Input',
  component: Input,
}

export const Default = {
  render: InputTemplate.bind({}),
  name: 'Input',

  parameters: {
    componentIds: ['component-input'],
  },

  args: {},
}

export const WithFormInfo = {
  render: InputTemplate.bind({}),
  name: 'With form info',

  args: {
    label: 'Label',
    info: 'Some info text',
  },
}

export const WithExpandableInfo = {
  render: InputTemplate.bind({}),
  name: 'With expandable info',

  args: {
    label: 'Label',
    expandableInfo: 'Some info text',
  },
}

export const UnitLabel = {
  render: InputTemplate.bind({}),
  name: 'With unit label',

  args: {
    label: 'Label',
    unit: 'kr',
  },
}

export const Validator = {
  render: InputTemplate.bind({}),
  name: 'With validator',

  args: {
    label: 'Label',
    validator: {
      indicator: 'error',
      message: 'Error message',
    },
  },
}

export const Everything = {
  render: InputTemplate.bind({}),
  name: 'With everything enabled',

  args: {
    label: 'Label',
    expandableInfo: 'Some expandable text',
    info: 'Some info text',
    maxLength: 100,
    rows: 5,
    placeholder: 'Placeholder',
    unit: 'kr',
    validator: {
      indicator: 'error',
      message: 'Error message',
    },
  },
}
