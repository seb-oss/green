import React from 'react'

import { GroupedList, ListItem } from './grouped-list'

const Template = ({ children, ...props }) => (
  <GroupedList {...props}>{children}</GroupedList>
)

export default {
  title: 'Components/GroupedList',
  component: GroupedList,
}

export const Default = {
  render: Template.bind({}),
  name: 'Default',

  parameters: {
    componentIds: ['component-input'],
  },

  args: {
    label: 'List heading',
    children: [
      <ListItem>Item 1</ListItem>,
      <ListItem>Item 2</ListItem>,
      <ListItem>Item 3</ListItem>,
    ],
  },
}
