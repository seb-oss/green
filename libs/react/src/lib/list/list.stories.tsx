import List from './list'

const Template = ({ children, ...props }) => <List {...props}>{children}</List>

const TableListTemplate = ({ ...props }) => <List {...props} />

export default {
  title: 'Components/Lists',
  component: List,
}

export const OrderedList = {
  render: Template.bind({}),
  name: 'Ordered-list',

  args: {
    listType: 'ordered',
    children: ['First', 'Second', 'Third', 'Fourth'],
  },
}

export const UnorderedList = {
  render: Template.bind({}),
  name: 'Unordered-list',

  args: {
    listType: 'unordered',
    children: ['First', 'Second', 'Third', 'Fourth'],
  },
}

export const CheckList = {
  render: Template.bind({}),
  name: 'Check-list',

  args: {
    listType: 'check',
    children: ['First', 'Second', 'Third', 'Fourth'],
  },
}
