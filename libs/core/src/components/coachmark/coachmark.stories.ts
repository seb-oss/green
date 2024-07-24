import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'
import './index.ts'

/**
 * [Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/coachmark)
 *
 * Coachmarks are contextual tips that focus on making the user
 * aware of a new feature, the benefits of an existing one or a moved feature within an interface.
 *
 * the component is primarily a container that follows the targeted element.
 * the tooltip will be invisible and disabled if another element covered the targeted element or its simply out of view
 * the tooltip will close and dispatch a CustomEvent of "tooltipClosed"
 *
 * Note: the component can only view one coachmark at the time therefore the tooltip won't be
 * rendered in second storybook panel and testing the tooltip behaviour will be in the first panel only
 *
 */
const meta: Meta = {
  title: 'Components/Coachmark',
  component: 'gds-coachmark',
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
  },
}

export const Basic: Story = {
  ...DefaultParams,
  render: () => html`
    <main>
      ${document.querySelector('gds-coachmark')
        ? html`the coachmark is already visible in another panel`
        : html` <p id="targetElement">clicking will close the coachmark</p>
            <gds-coachmark .coachmark=${coachmarkExample}>
              <div class="gds-coachmark" slot="body" aria-modal="false">
                <div>${coachmarkExample.tooltip.content}</div>
              </div>
              <div id="gds-arrow"></div>
            </gds-coachmark>`}
    </main>
  `,
}
let coachmarkExample = {
  id: 'test-coachmark',
  variant: 'dark',
  tooltip: {
    title: 'This is a coachmark title',
    content: ['This is the coachmark content.'],
    closeButton: { text: 'Close', ariaLabel: 'Close tooltip' },
    preferredPlacement: 'top',
    target: ['#targetElement'],
  },
}
