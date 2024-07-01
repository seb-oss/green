import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

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
  render: (args) => html` <gds-flex> Flex </gds-flex>`,
}
