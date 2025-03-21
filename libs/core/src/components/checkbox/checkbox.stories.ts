import type { Meta, StoryObj } from '@storybook/web-components'

import './checkbox'

const meta: Meta = {
  title: 'Components/Checkbox',
  component: 'gds-checkbox',
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
export const checkbox: Story = {
  ...DefaultParams,
  name: 'checkbox',
}
