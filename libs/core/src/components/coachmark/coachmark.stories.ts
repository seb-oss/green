import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import './index.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/coachmark)
 *
 * Coachmarks guide users through interface features.
 *
 * The component is primarily a container that follows the targeted element.
 * The coachmark will be invisible and disabled if another element covered the targeted element or its simply out of view.
 * The coachmark will close and dispatch a CustomEvent of `gds-ui-state`
 *
 * Note: the component can only view one coachmark at the time therefore the tooltip won't be
 * rendered in second storybook panel and testing the tooltip behaviour will be in the first panel only
 *
 * @status beta
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

/**
 * Because this is the default story that also renders at the top of the page, the
 * coachmark will be shown in the first panel only, since the `#targetElement` selector
 * will match the first element in the DOM.
 */
export const Basic: Story = {
  ...DefaultParams,
  render: () => html`
    <div style="height: 200px">
      <p>
        The coachmark will target the first element that matches the selector.
        Clicking anywhere closes the coachmark.
      </p>
      <p
        id="targetElement"
        style="width: 200px; background: #ddd; padding: 1px"
      >
        Coachmark target element
      </p>
      <gds-coachmark .target=${['#targetElement']} placement="bottom">
        This is the coachmark content.
      </gds-coachmark>
    </div>
  `,
}
