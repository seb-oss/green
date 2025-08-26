import type { Meta, StoryObj } from '@storybook/web-components'

import './img'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

/**
 * An image displays media with configurable dimensions and styling properties.
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
    src: 'https://api.seb.io/components/image/img.jpg',
    alt: 'Placeholder',
    'border-radius': 's',
  },
}

export const Basic: Story = {
  ...DefaultParams,
}
