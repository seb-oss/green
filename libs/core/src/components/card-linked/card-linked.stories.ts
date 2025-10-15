import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps.js'

import './card-linked'

/**
 *
 * @extends `gds-card`
 */

const meta: Meta = {
  title: 'Components/Card Linked',
  component: 'gds-card-linked',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-card-linked'),
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

export const Card: Story = {
  ...DefaultParams,
  args: {
    innerHTML: 'Card content',
    href: '#',
  },
}
