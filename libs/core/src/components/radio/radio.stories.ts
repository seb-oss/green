import type { Meta, StoryObj } from '@storybook/web-components'

import './radio'

import { html } from 'lit'

const meta: Meta = {
  title: 'Components/Radio',
  component: 'gds-radio',
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
export const RadioButton: Story = {
  ...DefaultParams,
  name: 'radio',
}
