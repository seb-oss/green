import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './flex'

/**
 * The `gds-flex` component is a container element that can be used to wrap other components and control the layout of its children.
 *
 */

const meta: Meta = {
  title: 'Docs/Layout/Flex',
  component: 'gds-flex',
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

export const Flex: Story = {
  ...DefaultParams,
  name: 'Flex',
  render: (args) => html`
    <gds-flex align-items="space-between" justify-content="space-between">
      <gds-text>Flex</gds-text>
      <gds-text>Example</gds-text>
    </gds-flex>
  `,
}
