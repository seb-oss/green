import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

/**
 * The `gds-card`
 *
 * ## Usage
 *
 */
const meta: Meta = {
  title: 'Components/Image',
  component: 'gds-img',
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
