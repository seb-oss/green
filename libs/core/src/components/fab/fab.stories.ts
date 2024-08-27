import type { Meta, StoryObj } from '@storybook/web-components'

import { html } from '../../scoping.ts'
import './index.ts'
import '../icon/icons/chevron-bottom.ts'

/**
 * A FAB is a floating action button that is used to trigger a primary action in the UI.
 */
const meta: Meta = {
  title: 'Docs/Components/FAB',
  component: 'gds-fab',
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
    innerHTML: `
    Floating action! <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
`,
  },
}

/**
 * The popover can be used declaratively by adding a trigger button and content inside the popover element, like in the example below.
 *
 * It is also possible to set the trigger and anchor by supplying DOM references (wrapped in promises) to the `triggerRef` and `anchorRef`
 * properties. This is useful when the trigger and anchor needs to be different elements.
 */
export const Usage: Story = {
  ...DefaultParams,
}
