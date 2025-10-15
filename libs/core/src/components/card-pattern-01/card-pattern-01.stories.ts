import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './card-pattern-01'
import '../button'
import '../div'
import '../icon/icons/chevron-right'
import '../text'
import '../link'
import '../divider'

const meta: Meta = {
  title: 'Patterns/Card Pattern 01',
  component: 'gds-card-pattern-01',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-card-pattern-01'),
    rank: {
      control: 'select',
      options: ['primary', 'outlined', 'plain'],
      description: 'Visual style of the card',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    media: {
      control: 'select',
      options: ['default', 'square'],
      description: 'Aspect ratio for media content',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
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

export const Default: Story = {
  args: {
    title: 'Card Title',
    excerpt: 'This is a brief description of the card content.',
    label: 'Read more',
    src: 'https://api.seb.io/assets/launch-hero.jpg',
  },
}

export const Link: Story = {
  ...DefaultParams,
  args: {
    title: 'Title',
    href: '#',
    label: 'Read more',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
}
