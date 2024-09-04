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
