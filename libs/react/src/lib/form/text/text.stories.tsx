import { Text } from './text'

const TextInputTempalte = ({ children }) => <Text>{children}</Text>

export default {
  title: 'Components/Form/Text',
  component: Text,
}

export const Default = {
  render: TextInputTempalte.bind({}),
  name: 'Text',

  args: {
    children: 'This is a line of text',
  },
}
