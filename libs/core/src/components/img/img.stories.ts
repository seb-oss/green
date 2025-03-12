import type { Meta, StoryObj } from '@storybook/web-components'

import './img'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

/**
 * The `gds-img`
 */
const meta: Meta = {
  title: 'Components/Image',
  component: 'gds-img',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-img'),
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
  args: {
    ratio: '16/9',
    fit: 'cover',
    inset: '0',
    position: 'relative',
    opacity: '1',
    src: 'https://placehold.co/600x400',
    alt: 'Placeholder',
  },
}

export const Basic: Story = {
  ...DefaultParams,
}
