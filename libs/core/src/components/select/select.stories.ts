import type { Meta, StoryObj } from '@storybook/web-components'

import './select'

import { html } from 'lit'

const meta: Meta = {
  title: 'Components/Select',
  component: 'gds-select',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { expanded: true },
  },
}

/**
 * TODO: Add documentation
 */
export const select: Story = {
  ...DefaultParams,
  name: 'select',
}
