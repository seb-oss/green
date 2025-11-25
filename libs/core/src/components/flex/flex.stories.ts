import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './flex'

/**
 * `gds-flex` extends `gds-div` and sets display to flex by default.
 */
const meta: Meta = {
  title: 'Components/Flex',
  component: 'gds-flex',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-flex'),
  },
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
