import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps.ts'

import './index.ts'
import '../grid/index.js'
import '../flex/index.js'
import '../card'
import '../div'
import '../img'
import '../popover'
import '../text'
import '../dialog'
import '../select'
import '../signal'
import '../spinner'
import '../grid'
import '../video'
import '../theme'
import '../textarea'
import '../segmented-control'
import '../form-summary'
import '../filter-chips'
import '../link'
import '../radio'
import '../fab'
import '../signal'
import '../blur'
import '../divider'
import '../checkbox'
import '../details'
import '../input'
import '../datepicker'
import '../context-menu'
import '../coachmark'
import '../menu-button'
import '../breadcrumbs'
import '../calendar'
import '../divider/index.js'
import '../icon/icons/home-open.ts'
import '../icon/icons/folder'
import '../icon/icons/ai'
import '../icon/icons/brush'
import '../icon/icons/bank'
import '../icon/icons/books'
import '../icon/icons/bell'
import '../icon/icons/people'
import '../icon/icons/square-arrow-top-right'
import '../icon/icons/magnifying-glass'
import '../icon/icons/people-profile'
import '../icon/icons/text-edit'
import '../icon/icons/sun'
import '../icon/icons/moon'
import '../icon/icons/arrow-right'
import '../icon/icons/settings-gear'
import '../icon/icons/credit-card'
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
          <gds-badge variant="negative" disabled>
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
          <gds-badge variant="negative" disabled> Disabled </gds-badge>
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
          <gds-badge size="small" variant="negative" disabled> 982 </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Notification</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl" align-items="center">
          <gds-badge variant="positive" notification></gds-badge>
          <gds-badge variant="positive" notification>9</gds-badge>
          <gds-badge variant="positive" notification>
            999
            <gds-icon-plus-small slot="trail"></gds-icon-plus-small
          ></gds-badge>
          <gds-badge variant="negative" notification></gds-badge>
          <gds-badge variant="negative" notification>9</gds-badge>
          <gds-badge variant="negative" notification>
            999 <gds-icon-plus-small slot="trail"></gds-icon-plus-small
          ></gds-badge>
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
 * Indicates whether the badge is disabled.
 * When set to `true`, the badge will appear in a disabled state and will not be interactive.
 *
 * @property {boolean} disabled - Controls the disabled state of the badge.
 *
 * ```html
 * <gds-badge disabled>...</gds-badge>
 * <gds-badge disabled>...</gds-badge>
 * ```
 */
export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => html`
    <gds-flex gap="xl">
      <gds-badge variant="positive" disabled>
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        Launch
      </gds-badge>
      <gds-badge variant="warning" disabled>
        <gds-icon-arrow-rotate-counter-clockwise slot="lead">
        </gds-icon-arrow-rotate-counter-clockwise>
        Discard
      </gds-badge>
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
      <gds-badge variant="positive" notification></gds-badge>
      <gds-badge variant="positive" notification>9</gds-badge>
      <gds-badge variant="positive" notification>
        999
        <gds-icon-plus-small slot="trail"></gds-icon-plus-small>
      </gds-badge>
      <gds-badge variant="negative" notification></gds-badge>
      <gds-badge variant="negative" notification>9</gds-badge>
      <gds-badge variant="negative" notification>
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

export const ALL: Story = {
  name: 'ALL',
  parameters: {
    controls: { include: [] },
  },
  render: (args) => html`
    <gds-flex gap="xl" flex-direction="column">
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        ...
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex align-items="center" gap="m">
          <gds-badge variant="negative" notification>999+</gds-badge>
          <gds-badge variant="positive">
            <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
            Positive
          </gds-badge>
          <gds-badge size="small" variant="warning"> 602 </gds-badge>
        </gds-flex>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-blur>
          <gds-text>Blurred content</gds-text>
        </gds-blur>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <div>
          <gds-breadcrumbs>
            <gds-link href="/">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
              Green
            </gds-link>

            <gds-link href="/folder">
              <gds-icon-folder slot="lead"></gds-icon-folder>
              Folder
            </gds-link>

            <gds-text> Current </gds-text>
          </gds-breadcrumbs>
        </div>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex gap="s" align-items="center">
          <gds-button size="small">Primary</gds-button>
          <gds-button rank="secondary" size="small" variant="positive">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary
          </gds-button>
          <gds-button size="small" label="Next step 2" rank="secondary">
            <gds-icon-arrow-right> </gds-icon-arrow-right>
          </gds-button>
        </gds-flex>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex overflow="hidden" height="220px">
          <gds-calendar></gds-calendar>
        </gds-flex>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex gap="s" align-items="center">
          <gds-card
            variant="primary"
            border-color="primary"
            width="140px"
            height="140px"
          >
            Primary
          </gds-card>
          <gds-card
            variant="secondary"
            border-color="secondary"
            width="140px"
            height="140px"
          >
            Secondary
          </gds-card>
          <gds-card
            variant="tertiary"
            border-color="tertiary"
            width="140px"
            height="140px"
          >
            Tertiary
          </gds-card>
        </gds-flex>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-checkbox-group>
          <gds-checkbox label="Checkbox 1" value="1"></gds-checkbox>
          <gds-checkbox label="Checkbox 2" value="2" checked></gds-checkbox>
          <gds-checkbox label="Checkbox 3" value="3"></gds-checkbox>
        </gds-checkbox-group>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-text tag="p" id="mark">Coachmark</gds-text>
        <gds-coachmark .target=${['#mark']} placement="bottom">
          Coachmark content.
        </gds-coachmark>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-context-menu>
          <gds-flex slot="trigger" gap="s" align-items="center">
            <gds-icon-text-edit></gds-icon-text-edit>
            Edit
          </gds-flex>
          <gds-menu-item>
            <gds-flex gap="s" align-items="center">
              <gds-icon-ai></gds-icon-ai>
              Help me write
            </gds-flex>
          </gds-menu-item>
          <gds-menu-item>
            <gds-flex gap="s" align-items="center">
              <gds-icon-brush></gds-icon-brush>
              Fix grammar
            </gds-flex>
          </gds-menu-item>
        </gds-context-menu>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex width="200px">
          <gds-datepicker show-week-numbers></gds-datepicker>
        </gds-flex>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-dialog heading="Dialog heading">
          <gds-button slot="trigger">Open Dialog</gds-button>
          This is the content of the dialog.
        </gds-dialog>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex flex-direction="column" width="280px">
          <gds-details name="group-1" summary="First Details" size="small">
            <gds-rich-text> Details content </gds-rich-text>
          </gds-details>
          <gds-details name="group-1" summary="Second Details" size="small">
            <gds-rich-text> Details content </gds-rich-text>
          </gds-details>
        </gds-flex>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex align-items="center" gap="s">
          <gds-div
            width="4xl"
            height="4xl"
            background="primary"
            border-color="primary"
            border-width="xs"
          ></gds-div>

          <gds-div
            width="4xl; l{ 6xl }"
            height="4xl; l{ 6xl }"
            background="secondary"
            border="4xs"
          ></gds-div>

          <gds-div
            width="4xl"
            height="4xl"
            background="tertiary"
            border-radius="s"
          ></gds-div>
        </gds-flex>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-div min-width="280px" align-items="center">
          <gds-divider
            color="quarternary"
            size="2xl"
            width="100%"
          ></gds-divider>
        </gds-div>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex width="280px">
          <gds-dropdown label="Select tech" hide-label>
            <gds-option value="">Select tech</gds-option>
            <gds-option value="warp">Warp Drive</gds-option>
            <gds-option value="cybernetics">Cybernetics</gds-option>
            <gds-option value="nanotechnology">Nanotechnology</gds-option>
            <gds-option value="cloning">Cloning</gds-option>
            <gds-option value="cryonics">Cryonics</gds-option>
            <gds-option value="teleportation">Teleportation</gds-option>
          </gds-dropdown>
        </gds-flex>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex>
          <gds-fab
            inset="auto"
            position="relative"
            variant="positive"
            rank="secondary"
            size="small"
          >
            Floating <gds-signal slot="trail"></gds-signal>
          </gds-fab>
        </gds-flex>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-filter-chips
          value="top-news"
          label="Pick news channel"
          row-collapse
        >
          <gds-filter-chip value="all">All</gds-filter-chip>
          <gds-filter-chip value="top-news">Top news</gds-filter-chip>
          <gds-filter-chip value="division">Division</gds-filter-chip>
        </gds-filter-chips>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex flex-direction="column" gap="s">
          <gds-flex gap="s" align-items="center">
            <gds-card variant="secondary" width="40px" height="40px">
              01
            </gds-card>
            <gds-card variant="secondary" width="40px" height="40px">
              02
            </gds-card>
            <gds-card variant="secondary" width="10px" height="40px">
              03
            </gds-card>
          </gds-flex>
          <gds-flex gap="s" align-items="center" justify-content="flex-end">
            <gds-card variant="secondary" width="40px" height="40px">
              04
            </gds-card>
            <gds-card variant="secondary" width="10px" height="40px">
              05
            </gds-card>
          </gds-flex>
        </gds-flex>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <form style="width: 450px">
          <gds-flex flex-direction="column" gap="m">
            <input
              id="designation"
              type="text"
              aria-invalid="true"
              data-label="Designation"
              data-errormessage="A designation is required"
              required=""
              hidden
            />
            <gds-form-summary id="summary"></gds-form-summary>
          </gds-flex>
        </form>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-grid columns="12" gap="xs" width="280px">
          <gds-card
            variant="secondary"
            grid-column="1/13"
            border-radius="xs"
            height="2xl"
            padding="xs"
          >
            <gds-text tag="small">Nav</gds-text>
          </gds-card>
          <gds-card
            variant="secondary"
            grid-column="1/5"
            border-radius="xs"
            height="6xl"
            padding="xs"
          >
            <gds-text tag="small">Sidebar</gds-text>
          </gds-card>
          <gds-card
            variant="secondary"
            grid-column="5/13"
            border-radius="xs"
            height="6xl"
            padding="xs"
          >
            <gds-text tag="small">Content</gds-text>
          </gds-card>
        </gds-grid>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex alig-items="center" gap="m">
          <gds-icon-ai size="xl"></gds-icon-ai>
          <gds-icon-bank size="xl"></gds-icon-bank>
          <gds-icon-rocket size="xl"></gds-icon-rocket>
        </gds-flex>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-img
          aspect-ration="16/9"
          src="https://api.seb.io/components/image/img.jpg"
          border-radius="s"
          width="280px"
        ></gds-img>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex width="280px">
          <gds-input plain>
            <gds-icon-people-profile slot="lead"></gds-icon-people-profile>
          </gds-input>
        </gds-flex>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-link text-decoration="underline">Link text</gds-link>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-card
          height="40px"
          width="max-content"
          flex-direction="row"
          variant="primary"
          padding="0"
          border="none"
          gap="0"
        >
          <gds-menu-button selected>
            <gds-icon-bell slot="trail"></gds-icon-bell>
            Notification
          </gds-menu-button>
          <gds-popover>
            <gds-menu-button slot="trigger">
              <gds-icon-people slot="trail"></gds-icon-people>
              Profile
            </gds-menu-button>
            <gds-flex padding="m">Profile stuff</gds-flex>
          </gds-popover>
          <gds-menu-button
            href="https://github.com/seb-oss/green"
            target="_blank"
          >
            <gds-icon-square-arrow-top-right
              slot="trail"
            ></gds-icon-square-arrow-top-right>
            External link
          </gds-menu-button>
        </gds-card>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-popover>
          <gds-button rank="secondary" slot="trigger">
            Show popover
            <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
          </gds-button>
          <gds-flex
            flex-direction="column"
            gap="s"
            padding="m"
            align-items="flex-start"
            width="280px"
          >
            <gds-text tag="h3">Custom popover!</gds-text>
            <gds-text tag="p"> Popover content </gds-text>
            <gds-button rank="primary">Action</gds-button>
          </gds-flex>
        </gds-popover>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-radio-group>
          <gds-radio label="Radio 1" value="1"></gds-radio>
          <gds-radio label="Radio 2" value="2"></gds-radio>
          <gds-radio label="Radio 3" value="3"></gds-radio>
        </gds-radio-group>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-rich-text>
          <p>Rich <strong>text</strong> <u>with</u> <em>proper</em> style!</p>
        </gds-rich-text>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex width="280px">
          <gds-segmented-control value="1" size="small">
            <gds-segment value="1">Item 1</gds-segment>
            <gds-segment value="2">Item 2</gds-segment>
            <gds-segment value="3">Item 3</gds-segment>
          </gds-segmented-control>
        </gds-flex>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex width="280px">
          <gds-select>
            <gds-icon-books slot="lead"></gds-icon-books>
            <select>
              <option value="">Select a value</option>
              <optgroup label="Physics">
                <option value="quantum-mechanics">Quantum Mechanics</option>
                <option value="relativity">Relativity</option>
              </optgroup>
              <optgroup label="Chemistry">
                <option value="organic-chemistry">Organic Chemistry</option>
                <option value="inorganic-chemistry">Inorganic Chemistry</option>
              </optgroup>
              <optgroup label="Biology">
                <option value="genetics">Genetics</option>
                <option value="microbiology">Microbiology</option>
                <option value="ecology">Ecology</option>
              </optgroup>
            </select>
          </gds-select>
        </gds-flex>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-signal></gds-signal>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-spinner size="sm"></gds-spinner>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex width="280px" flex-direction="column" gap="s">
          <gds-flex gap="m">
            <gds-text> Text </gds-text>
            <gds-text text-decoration="underline"> is </gds-text>
            <gds-text text-decoration="currentcolor wavy underline">
              Awesome!
            </gds-text>
          </gds-flex>
          <gds-flex>
            <gds-text font-size="body-s" lines="2" color="secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </gds-text>
          </gds-flex>
        </gds-flex>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex width="280px">
          <gds-textarea
            label="Label"
            supporting-text="Label support text"
            resizable="false"
          >
          </gds-textarea>
        </gds-flex>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex gap="m">
          <gds-theme color-scheme="light" design-version="2023">
            <gds-card variant="secondary" align="center">
              <gds-icon-sun size="xl"></gds-icon-sun>
            </gds-card>
          </gds-theme>
          <gds-theme color-scheme="dark" design-version="2023">
            <gds-card variant="primary" align="center">
              <gds-icon-moon size="xl"></gds-icon-moon>
            </gds-card>
          </gds-theme>
        </gds-flex>
      </gds-card>
      <gds-card
        height="280px"
        width="840px"
        justify-content="center"
        align-items="center"
      >
        <gds-flex width="280px" overflow="hidden" border-radius="s">
          <gds-video
            width="100%"
            height="auto"
            aspect-ration="16/9"
            src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            playsinline
            muted
            autoplay
            loop
          ></gds-video>
        </gds-flex>
      </gds-card>
    </gds-flex>
  `,
}
