import React from 'react'

import { Button } from '../button/button'
import { ButtonGroup } from './buttonGroup'

const Template = ({ children, ...props }) => (
  <ButtonGroup {...props}>
    <Button>First Button</Button>
    <Button>Second Button</Button>
    <Button>Third Button</Button>
    <Button>Forth Button</Button>
  </ButtonGroup>
)

export default {
  title: 'Components/Form/ButtonGroup',
  component: ButtonGroup,
}

export const Default = {
  render: Template.bind({}),
  name: 'Button Group',

  parameters: {
    componentIds: ['component-segmented-control'],
  },

  args: {
    variant: 'secondary',
    selectedIndex: 1,
  },
}
