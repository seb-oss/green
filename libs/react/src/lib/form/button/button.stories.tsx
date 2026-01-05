import React from 'react'

import Button from './button'

const Template = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
)

export default {
  title: 'Components/Form/Button',
  component: Button,
}

export const Default = {
  render: Template.bind({}),
  name: 'Button',

  parameters: {
    componentIds: ['component-button'],
  },

  args: {
    children: 'Button',
  },
}
