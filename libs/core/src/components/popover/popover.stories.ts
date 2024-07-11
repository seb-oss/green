import type { Meta, StoryObj } from '@storybook/web-components'

import { html } from '../../scoping.ts'
import './index.ts'
import '../button/index.ts'
import '../grouped-list/index.ts'
import '../icon/icons/chevron-bottom.ts'
import '../layout/flex/flex.js'
import '../layout/card/card.js'
import '../menu-button/index.ts'

/**
 * A popover is a transient view that appears above other content. It is used by components such as dropdowns.
 */
const meta: Meta = {
  title: 'Docs/Components/Popover',
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
    innerHTML: `
  <gds-button rank="secondary" slot="trigger">
    Show popover <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
  </gds-button>
  <div style="padding: 1rem; padding-top: 0">
    <h3>This is a custom popover!</h3>
    <p>It can contain any content you need, including other components.</p>
    <gds-button rank="primary">Such as buttons!</gds-button>
  </div>
`,
    calcMaxWidth: () => '300px',
    placement: 'bottom-center',
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

/**
 * Here is an example of how the popover can be customized with sizing, placement and backdrop.
 */
export const Customization: Story = {
  ...DefaultParams,
  render: () =>
    html`<gds-container width="700px" height="250px"><gds-card
        display="flex"
        width="720px"
        border="0 0 4xs/base300 0"
        position="fixed"
        background="base-white"
        style="left: 0; top: 0; z-index: 1000;"
      >
        <gds-popover>
          <gds-menu-button slot="trigger">
            <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
            Basic popover
          </gds-menu-button compact>
          <div style="padding: 1rem;">Basic popover</div>
        </gds-popover>
        <gds-popover nonmodal backdrop="#my-backdrop" .floatingUIMiddleware=${[{ fn: ({ y }) => ({ x: 25, y: y + 8 }) }]} .calcMaxWidth=${() => '670px'}>
          <gds-menu-button slot="trigger">
            <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
            With custom backdrop and positioning middleware
          </gds-menu-button>
          <div style="padding: 0 1rem;">
            <h3>Customized popover</h3>
            <p>In this popover, we're using custom Floating UI middleware to control the positioning, and <i>calcMaxWidth</i> to set the size.</p>
            <p>We're also using a backdrop element, referenced by the <i>backdrop</i> attribute, to dim the background below the menu bar.</p>
          </div>
        </gds-popover>
    </gds-card>
    <gds-backdrop id="my-backdrop"></gds-backdrop>
</gds-container>`,
}
