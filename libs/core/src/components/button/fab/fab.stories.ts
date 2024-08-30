import type { Meta, StoryObj } from '@storybook/web-components'

import { html } from '../../../scoping.ts'
import './index.ts'
import '../../icon/icons/chevron-bottom.ts'

import { DefaultParams as ButtonDefaultParams } from '../button.stories'

/**
 * The Floating Action Button is used for functions central to the user experience, such as
 * support and help features that needs to be accessible at all times.
 *
 * The button is always floating visible in the users viewport, typically in the lower right
 * corner. This button can be used with an icon only.
 */
const meta: Meta = {
  title: 'Docs/Components/Button/FAB',
  component: 'gds-fab',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  ...ButtonDefaultParams,
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
      story: {
        height: '200px',
      },
    },
    controls: { expanded: true },
  },
  args: {
    innerHTML: `See what's new! <div slot="trail" style="width:8px;height:8px;border-radius:8px;background-color:green;box-shadow:0 0 0 4px rgba(0,85,0,0.3)"></div>`,
  },
}

export const Usage: Story = {
  ...DefaultParams,
}
