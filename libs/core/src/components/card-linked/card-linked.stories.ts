import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './card-linked'
import '../button'
import '../text'
import '../link'
import '../divider'

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

export const CardLinked: Story = {
  ...DefaultParams,
  args: {
    href: '#',
    title: 'Title',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    innerHTML: 'Card content',
  },
}
