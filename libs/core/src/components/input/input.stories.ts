import type { Meta, StoryObj } from '@storybook/web-components'

import { html } from 'lit'

const meta: Meta = {
  title: 'Docs/Components/Input',
  component: 'gds-input',
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

export const Basic: Story = {
  ...DefaultParams,
}

export const Input: Story = {
  ...DefaultParams,
  name: 'Regular icons',
  render: (args) => html`
    <gds-flex direction="column" gap="xl" id="solids"> test </gds-flex>
  `,
}
