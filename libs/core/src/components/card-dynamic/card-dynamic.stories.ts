import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './card-dynamic'
import '../button'
import '../text'
import '../link'
import '../divider'

const meta: Meta = {
  title: 'Components/Card Dynamic',
  component: 'gds-card-dynamic',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-card-dynamic'),
  },
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { disable: true },
  },
}

export const CardDynamic: Story = {
  ...DefaultParams,
  args: {
    innerHTML: 'Dynamic',
  },
}

/**
 * Examples of different color variants
 */
export const Patterns: Story = {
  ...DefaultParams,
  render: (args) => html` <gds-flex gap="4xs"> Dynamic </gds-flex> `,
}
