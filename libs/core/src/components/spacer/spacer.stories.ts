import type { Meta, StoryObj } from '@storybook/web-components'

import './spacer'

import { html } from 'lit'

const meta: Meta = {
  title: 'Components/Spacer',
  component: 'gds-spacer',
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

export const Spacer: Story = {
  ...DefaultParams,
  name: 'Spacer',
  render: (args) => html` <gds-spacer size="2xl"></gds-spacer>`,
}
