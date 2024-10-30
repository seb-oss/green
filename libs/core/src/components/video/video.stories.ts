import type { Meta, StoryObj } from '@storybook/web-components'

import './video'

import { html } from 'lit'

/**
 * The `gds-video`
 */
const meta: Meta = {
  title: 'Components/Video',
  component: 'gds-video',
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
  args: {
    ratio: '16/9',
    fit: 'cover',
    inset: '0',
    position: 'relative',
    opacity: '1',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    autoplay: true,
    muted: true,
    playsinline: true,
    loop: true,
    events: 'none',
  },
}

export const Basic: Story = {
  ...DefaultParams,
}
