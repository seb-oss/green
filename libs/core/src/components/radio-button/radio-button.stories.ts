import type { Meta, StoryObj } from '@storybook/web-components'

import './radio-button'

import { html } from 'lit'

const meta: Meta = {
  title: 'Components/Radio Button',
  component: 'gds-radio-button',
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
  name: 'radio-button',
}
