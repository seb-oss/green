import type { Meta, StoryObj } from '@storybook/web-components'

import './table'

import { html } from 'lit'

const meta: Meta = {
  title: 'Components/Table',
  component: 'gds-table',
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
export const Table: Story = {
  ...DefaultParams,
  name: 'table',
}
