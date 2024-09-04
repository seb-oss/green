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
