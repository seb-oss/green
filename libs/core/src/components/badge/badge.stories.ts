import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import { argTablePropsFor } from '../../../.storybook/argTableProps.ts'

import './index.ts'
import '../grid/index.js'
import '../flex/index.js'
import '../divider/index.js'
import '../icon/icons/circle-info.js'
import '../icon/icons/circle-check.js'
import '../icon/icons/plus-small.ts'
import '../icon/icons/minus-small.ts'
import '../icon/icons/rocket.ts'
import '../icon/icons/arrow-rotate-counter-clockwise.ts'
import '../icon/icons/triangle-exclamation.js'
import '../icon/icons/plus-small.ts'

/**
 * A compact visual indicator for status, counts and notifications.
 *
 * Features:
 * - **Variants**: The badge supports multiple variants including `information`, `notice`, `positive`, `warning`, and `negative`, allowing for different contextual uses.
 * - **Slots**: The badge includes a `lead` slot for adding leading content such as icons, enhancing the visual representation.
 * - **Disabled State**: The badge can be disabled, making it non-interactive and visually indicating its disabled state.
 * - **Size Control**: The badge size can be controlled via the `size` property, with options for `default` and `small`.
 *
 * Example usage:
 *
 * ```html
 * <gds-badge variant="positive">
 *   <gds-icon-rocket slot="lead"></gds-icon-rocket>
 *   Launch
 * </gds-badge>
 * ```
 */
const meta: Meta = {
  title: 'Components/Badge',
  component: 'gds-badge',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-badge'),
  },
}

export default meta
type Story = StoryObj

export const Variants: Story = {
  name: 'Variants',
  render: (args) => html`
    <gds-flex
      flex-direction="column"
      justify-content="center"
      gap="4xl"
      padding="4xl"
    >
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge variant="information">
            <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
            Information
          </gds-badge>
          <gds-badge variant="notice">
            <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
            Notice
          </gds-badge>
          <gds-badge variant="positive">
            <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
            Positive
          </gds-badge>
          <gds-badge variant="warning">
            <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
            Warning
          </gds-badge>
          <gds-badge variant="negative">
            <gds-icon-triangle-exclamation slot="lead">
            </gds-icon-triangle-exclamation>
            Negative
          </gds-badge>
          <gds-badge variant="disabled">
            <gds-icon-triangle-exclamation slot="lead">
            </gds-icon-triangle-exclamation>
            Disabled
          </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Basic</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge variant="information"> Information </gds-badge>
          <gds-badge variant="notice"> Notice </gds-badge>
          <gds-badge variant="positive"> Positive </gds-badge>
          <gds-badge variant="warning"> Warning </gds-badge>
          <gds-badge variant="negative"> Negative </gds-badge>
          <gds-badge variant="disabled"> Disabled </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Small</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge size="small" variant="information"> 120 </gds-badge>
          <gds-badge size="small" variant="notice"> 428 </gds-badge>
          <gds-badge size="small" variant="positive"> 32 </gds-badge>
          <gds-badge size="small" variant="warning"> 602 </gds-badge>
          <gds-badge size="small" variant="negative"> 537 </gds-badge>
          <gds-badge size="small" variant="disabled"> 982 </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Notification</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl" align-items="center">
          <gds-badge notification></gds-badge>
          <gds-badge notification>9</gds-badge>
          <gds-badge notification>999+</gds-badge>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * The `gds-badge` component includes a `lead` slot that allows for the addition of leading content, such as icons.
 *
 * This slot can be used to enhance the visual representation of the badge by including elements like `gds-icon`.
 *
 * Example usage:
 *
 * ```html
 * <gds-badge variant="positive">
 *   <gds-icon-rocket slot="lead"></gds-icon-rocket>
 *   Launch
 * </gds-badge>
 * <gds-badge variant="warning">
 *   <gds-icon-chevron-up slot="lead"></gds-icon-chevron-up>
 *   Discard
 * </gds-badge>
 * ```
 */
export const Lead: Story = {
  name: 'Lead',
  parameters: {
    controls: { include: [] },
  },
  render: (args) => html`
    <gds-flex gap="xl">
      <gds-badge variant="positive">
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        Launch
      </gds-badge>
      <gds-badge variant="warning">
        <gds-icon-arrow-rotate-counter-clockwise slot="lead">
        </gds-icon-arrow-rotate-counter-clockwise>
        Discard
      </gds-badge>
    </gds-flex>
  `,
}

/**
 * `gds-badge` has a trail slot that can be used to add additional content to the badge.
 *
 * ```html
 * <gds-badge>
 *  <span slot="trail">...</span>
 * </gds-badge>
 * ```
 */
export const Trail: Story = {
  name: 'Trail',
  parameters: {
    controls: { include: [] },
  },
  render: (args) => html`
    <gds-flex gap="xl">
      <gds-badge variant="positive">
        <gds-icon-plus-small slot="lead"></gds-icon-plus-small>
        10,000.00
        <span slot="trail">SEK</span>
      </gds-badge>
      <gds-badge variant="negative">
        <gds-icon-minus-small slot="lead"></gds-icon-minus-small>
        142.00
        <span slot="trail">EUR</span>
      </gds-badge>
    </gds-flex>
  `,
}

/**
 * Defines the size of the badge.
 * The default value is `default`.
 *
 * @property {string} size - The size of the badge, which can be either 'default' or 'small'.
 *
 * ```html
 * <gds-badge size="small">...</gds-badge>
 * ```
 */
export const Size: Story = {
  name: 'Size',
  render: (args) => html`
    <gds-flex gap="4xl">
      <gds-flex flex-direction="column" gap="xl">
        <gds-badge variant="information" size="small">140</gds-badge>
        <gds-badge variant="notice" size="small">140</gds-badge>
        <gds-badge variant="positive" size="small">140</gds-badge>
        <gds-badge variant="warning" size="small">140</gds-badge>
        <gds-badge variant="negative" size="small">140</gds-badge>
      </gds-flex>
      <gds-flex flex-direction="column" gap="xl">
        <gds-badge variant="information" size="small">kr</gds-badge>
        <gds-badge variant="notice" size="small">kr</gds-badge>
        <gds-badge variant="positive" size="small">kr</gds-badge>
        <gds-badge variant="warning" size="small">kr</gds-badge>
        <gds-badge variant="negative" size="small">kr</gds-badge>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * The `Notification` story demonstrates the use of the `gds-badge` component in notification mode.
 * In this mode, the badge acts as a notification indicator with only two possible variants: `positive` or `negative`.
 *
 * Example usage:
 *
 * ```html
 * <gds-flex gap="xl">
 *   <gds-badge notification>...</gds-badge>
 *   <gds-badge notification>...</gds-badge>
 * </gds-flex>
 * ```
 *
 * @property {boolean} notification - Controls the notification mode of the badge.
 */

export const Notification: Story = {
  name: 'Notification',
  parameters: {
    actions: {
      handles: ['mouseover', 'mouseout'],
    },
  },
  play: async () => {
    document.querySelectorAll('gds-badge[notification]').forEach((badge) => {
      let interval: number | undefined

      const startAnimation = () => {
        const content = badge.textContent?.trim() || ''
        const numericContent = content.replace(/\D/g, '') // Remove non-numeric characters
        if (numericContent && !isNaN(Number(numericContent))) {
          const targetValue = parseInt(numericContent, 10)
          let currentValue = 0
          interval = window.setInterval(() => {
            badge.textContent =
              currentValue.toString() + content.replace(/\d/g, '') // Preserve non-numeric characters
            if (currentValue === targetValue) {
              clearInterval(interval)
            } else {
              currentValue++
            }
          }, 50) // Adjust the interval speed as needed
        }
      }

      const stopAnimation = () => {
        if (interval) {
          clearInterval(interval)
          interval = undefined
        }
      }

      badge.addEventListener('mouseover', startAnimation)
      badge.addEventListener('mouseout', stopAnimation)
    })
  },
  render: (args) => html`
    <gds-flex gap="xl" align-items="center">
      <gds-badge notification></gds-badge>
      <gds-badge notification>9</gds-badge>
      <gds-badge notification>
        999
        <gds-icon-plus-small slot="trail"></gds-icon-plus-small>
      </gds-badge>
    </gds-flex>
  `,
}

/**
 * The `Rounded` story demonstrates the use of the `gds-badge` component with the `rounded` property.
 *
 * When set to `true`, the badge will have fully rounded corners.
 *
 * Example usage:
 *
 * ```html
 * <gds-badge rounded variant="information"> 01 </gds-badge>
 * ```
 *
 * @property {boolean} rounded - Controls the border radius of the badge.
 */

export const Rounded: Story = {
  name: 'Rounded',
  parameters: {},

  render: (args) => html`
    <gds-flex gap="xl" flex-direction="column">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Rounded Default</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge rounded variant="information"> 01 </gds-badge>
          <gds-badge rounded variant="notice"> 02 </gds-badge>
          <gds-badge rounded variant="positive"> 03 </gds-badge>
          <gds-badge rounded variant="warning"> 04 </gds-badge>
          <gds-badge rounded variant="negative"> 05 </gds-badge>
          <gds-badge rounded variant="negative" disabled> 06 </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Rounded Small</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge rounded size="small" variant="information"> 01 </gds-badge>
          <gds-badge rounded size="small" variant="notice"> 02 </gds-badge>
          <gds-badge rounded size="small" variant="positive"> 03 </gds-badge>
          <gds-badge rounded size="small" variant="warning"> 04 </gds-badge>
          <gds-badge rounded size="small" variant="negative"> 05 </gds-badge>
          <gds-badge rounded size="small" variant="negative" disabled>
            06
          </gds-badge>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `,
}
