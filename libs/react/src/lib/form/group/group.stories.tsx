import React from 'react'

import Button from '../button/button'
import { TextInput } from '../input/input'
import { Group } from './group'

const Template = ({ children, ...props }) => (
  <Group {...props}>{children}</Group>
)

export default {
  title: 'Components/Form/Group',
  component: Group,
}

export const Default = {
  render: Template.bind({}),
  name: 'Basic Group',

  parameters: {
    componentIds: ['component-form-group'],
  },

  args: {
    children: [
      <TextInput placeholder="Input field" />,
      <Button>Normal button</Button>,
    ],
  },
}

export const StaticText = {
  render: Template.bind({}),
  name: 'Static text and input field',

  args: {
    groupBorder: true,
    groupFocus: true,
    children: [
      <TextInput placeholder="First input field" />,
      <span className="gds-form-text">kr</span>,
    ],
  },
}

export const Error = {
  render: Template.bind({}),
  name: 'Group error',

  args: {
    groupBorder: true,
    groupFocus: true,
    error: 'Error message',
    children: [
      <TextInput placeholder="First input field" />,
      <span className="gds-form-text">kr</span>,
    ],
  },
}
