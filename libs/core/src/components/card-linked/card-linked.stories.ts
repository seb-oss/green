import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps.js'

import './card-linked'

/**
 * The card groups related content into a single container.
 *
 * `gds-card` inherits all properties from `gds-div`, but comes with some predefined defaults
 * and a shortcut property for specifiying different card variants.
 *
 *
 * @extends `gds-div`
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
