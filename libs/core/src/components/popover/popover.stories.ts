import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'

import '../../../../../dist/libs/core/src/components/popover/index.js'
import '../../../../../dist/libs/core/src/components/button/index.js'
import '../../../../../dist/libs/core/src/components/grouped-list/index.js'
import '../../../../../dist/libs/core/src/components/icon/icons/share.js'

/**
 * A popover is a transient view that appears above other content. It is used by components such as dropdowns.
 */
const meta: Meta = {
  title: 'Components/Popover',
  component: 'gds-popover',
  parameters: {
    layout: 'centered',
  },
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
    innerHTML: `<gds-button rank="tertiary" slot="trigger"><gds-icon-share></gds-icon-share></gds-button>
<div style="padding: 1rem; padding-top: 0">
  <h3>This is a custom popover!</h3>
  <p>It can contain any content you need, including other components.</p>
  <gds-button rank="primary">Like buttons!</gds-button>
</div>`,
    calcMaxWidth: () => '300px',
    placement: 'bottom-center',
  },
}

export const Basic: Story = {
  ...DefaultParams,
}
