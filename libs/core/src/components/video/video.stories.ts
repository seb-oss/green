import type { Meta, StoryObj } from '@storybook/web-components-vite'

import './video'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

/**
 * The `gds-video`
 */
const meta: Meta = {
  title: 'Components/Video',
  component: 'gds-video',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-video'),
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
    src: 'https://api.seb.io/components/video/video.mp4',
    autoplay: true,
    muted: true,
    playsinline: true,
    loop: true,
    events: 'none',
    'border-radius': 's',
  },
}

export const Basic: Story = {
  ...DefaultParams,
}
