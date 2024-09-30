import React from 'react'
import { Meta } from '@storybook/react'
import { Popover } from './popover'
import { Button } from '../form'

export default {
  title: 'Components/Popover',
  component: Popover,
} as Meta

export const Default = () => (
  <Popover>
    <Button slot="trigger">Open popover</Button>
    <div style={{ padding: '1rem' }}>Content in popover</div>
  </Popover>
)
