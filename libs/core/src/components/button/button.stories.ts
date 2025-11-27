import { html, nothing } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import './index.ts'
import '../grid/index.js'
import '../text/index.js'
import '../divider/index.js'
import '../flex/index.js'
import '../icon/icons/credit-card.js'
import '../icon/icons/circle-x.js'
import '../icon/icons/chevron-top.js'
import '../icon/icons/arrow-up.js'
import '../icon/icons/arrow-down.js'
import '../icon/icons/arrow-right.js'
import '../icon/icons/arrow-left.js'

import { argTablePropsFor } from '../../../.storybook/argTableProps.ts'

/**
 * A button can be tapped or clicked to perform an action.
 */
const meta: Meta = {
  title: 'Components/Button',
  component: 'gds-button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-button'),
    rank: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
    variant: {
      options: ['neutral', 'brand', 'positive', 'negative'],
      control: { type: 'select' },
    },
    size: {
      options: ['xs', 'small', 'medium', 'large'],
      control: { type: 'select' },
    },
    target: {
      options: ['_self', '_blank', '_parent', '_top'],
      control: { type: 'select' },
    },
    rel: {
      control: { type: 'text' },
    },
    download: {
      control: { type: 'text' },
    },
  },
}
export default meta
type Story = StoryObj

export const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { expanded: true },
  },
  args: {
    innerText: 'Button',
  },
}

export const Basic: Story = {
  ...DefaultParams,
}

/**
 * Buttons can have different ranks and variants. The rank defines the visual importance of the button,
 * while the variant defines the intent of the button.
 */
export const RanksAndVariants: Story = {
  ...DefaultParams,
  name: 'Ranks and variants',
  parameters: {
    ...DefaultParams.parameters,
    controls: { include: [] },
  },
  render: (args) => html`
    <gds-flex flex-direction="column" gap="4xl" padding="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Neutral</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl" align-items="center">
          <gds-button variant="neutral">
            <gds-icon-credit-card slot="lead" size="xl"></gds-icon-credit-card>
            Primary
          </gds-button>
          <gds-button variant="neutral" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary
          </gds-button>
          <gds-button variant="neutral" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary
          </gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Brand</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="brand">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary
          </gds-button>
          <gds-button variant="brand" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary
          </gds-button>
          <gds-button variant="brand" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary
          </gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Positive</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="positive">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary
          </gds-button>
          <gds-button variant="positive" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary
          </gds-button>
          <gds-button variant="positive" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary
          </gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Negative</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="negative">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button
          >
          <gds-button variant="negative" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button
          >
          <gds-button variant="negative" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button
          >
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Notice</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="notice">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button
          >
          <gds-button variant="notice" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button
          >
          <gds-button variant="notice" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button
          >
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Warning</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="warning">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button
          >
          <gds-button variant="warning" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button
          >
          <gds-button variant="warning" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button
          >
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * Buttons can be small, medium or large. The default size is medium.
 */
export const Sizes: Story = {
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: { include: ['rank', 'variant'] },
  },
  render: (args) => html`
    <gds-flex flex-direction="column" gap="2xl">
      <gds-flex gap="l" align-items="center">
        <gds-button .rank=${args.rank} .variant=${args.variant} size="large">
          Large
        </gds-button>
        <gds-button .rank=${args.rank} .variant=${args.variant}>
          Medium
        </gds-button>
        <gds-button .rank=${args.rank} .variant=${args.variant} size="small">
          Small
        </gds-button>
        <gds-button .rank=${args.rank} .variant=${args.variant} size="xs">
          XS
        </gds-button>
      </gds-flex>
      <gds-flex gap="l" align-items="center">
        <gds-button .rank=${args.rank} .variant=${args.variant} size="large">
          <gds-icon-credit-card slot="lead" size="xl"></gds-icon-credit-card>
          Large
        </gds-button>
        <gds-button .rank=${args.rank} .variant=${args.variant}>
          <gds-icon-credit-card slot="lead" size="l"></gds-icon-credit-card>
          Medium
        </gds-button>
        <gds-button .rank=${args.rank} .variant=${args.variant} size="small">
          <gds-icon-credit-card slot="lead" size="m"></gds-icon-credit-card>
          Small
        </gds-button>
        <gds-button .rank=${args.rank} .variant=${args.variant} size="xs">
          <gds-icon-credit-card slot="lead" size="m"></gds-icon-credit-card>
          XS
        </gds-button>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * Buttons can have an icon on the left or right side of the text. These are called leading or
 * trailing icons, and are added by placing a `gds-icon` component in either the `lead` or `trail`
 * slot.
 *
 * Note that the icons themself does not have a label so if the icon have some meaning,
 * show that on the text or use the label attribute, for it to be read out on screen readers.
 * <a href="/docs/components-icon--docs#regular%20icons">
 * Icons</a> that can be used.
 */
export const WithIcon: Story = {
  ...DefaultParams,
  name: 'Using icons in button',
  parameters: {
    ...DefaultParams.parameters,
    controls: { include: ['rank', 'variant', 'size'] },
  },
  render: (args) => html`
    <gds-flex gap="l">
      <gds-button
        .rank=${args.rank}
        .variant=${args.variant}
        .size=${args.size}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        Leading icon
      </gds-button>
      <gds-button
        .rank=${args.rank}
        .variant=${args.variant}
        .size=${args.size}
      >
        Trailing icon
        <gds-icon-credit-card slot="trail"></gds-icon-credit-card>
      </gds-button>
    </gds-flex>
  `,
}

/**
 * If a single `gds-icon` is the only child of a button, it will render as a circular
 * icon button. Note the icon does not have a aria-label so you have to set the label
 * attribute on the button so it reads more than just Button on screen readers.
 * <a href="/docs/components-icon--docs#regular%20icons">
 * Icons</a> that can be used.
 */
export const IconButton: Story = {
  ...DefaultParams,
  name: 'Icon button',
  parameters: {
    ...DefaultParams.parameters,
    controls: { include: ['rank', 'variant'] },
  },
  render: (args) => html`
    <gds-flex gap="l" align-items="center">
      <gds-button
        .rank=${args.rank}
        .variant=${args.variant}
        size="xs"
        label="Next step 1"
      >
        <gds-icon-arrow-right size="s" />
      </gds-button>
      <gds-button
        .rank=${args.rank}
        .variant=${args.variant}
        size="small"
        label="Next step 2"
      >
        <gds-icon-arrow-right size="m" />
      </gds-button>
      <gds-button
        .rank=${args.rank}
        .variant=${args.variant}
        label="Next step 3"
      >
        <gds-icon-arrow-right size="l" />
      </gds-button>
      <gds-button
        .rank=${args.rank}
        .variant=${args.variant}
        size="large"
        label="Next step 4"
      >
        <gds-icon-arrow-right size="xl" />
      </gds-button>
    </gds-flex>
  `,
}

/**
 * The buttons support a disabled state, but in general, it should not be used. It can be
 * hard for the user to understand why the button is disabled, so it is often better to
 * keep the button clickable and then show an error message instead.
 */
export const Disabled: Story = {
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: { include: [] },
  },
  render: () => html`
    <gds-flex gap="l">
      <gds-button disabled>Primary</gds-button>
      <gds-button rank="secondary" variant="positive" disabled>
        Secondary
      </gds-button>
      <gds-button rank="tertiary" disabled> Tertiary </gds-button>
    </gds-flex>
  `,
}

/**
 * A link styled as a button.
 */
export const Link: Story = {
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: { include: ['href', 'target', 'rel', 'download'] },
  },
  args: {
    href: 'https://github.com/seb-oss/green',
  },
  render: (args) => html`
    <gds-button
      href=${args.href}
      target=${args.target || nothing}
      rel=${args.rel || nothing}
      download=${args?.hasOwnProperty('download') ? args.download : nothing}
    >
      Link
    </gds-button>
  `,
}

/**
 * Text content will get truncated if it does not fit.
 */
export const Length: Story = {
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: { include: [] },
  },
  render: (args) => html`
    <div style="width: 30ch">
      <gds-button>
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        This is a long text that will truncated
      </gds-button>
    </div>
  `,
}

/**
 * Some aria attributes are forwarded to the inner button element by default, but if you want to force a certain
 * aria-attribute on the inner button, you can use the `gds-aria-*` attributes on the `gds-button` element.
 *
 * Also note that `label` will render as `aria-label` on the inner button element.
 */
export const Aria: Story = {
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: { include: [] },
  },
  render: () => html`
    <gds-button
      label="This is a button"
      aria-haspopup="dialog"
      aria-expanded="false"
      gds-aria-description="This is a description"
    >
      Aria button
    </gds-button>
  `,
}

/**
 *
 * The `justify-content` property allows control over how content is distributed within buttons.<br/>
 * This is particularly useful for navigation patterns like Next/Previous buttons where you want
 * consistent spacing between icons and text.
 *
 * Uses `justify-content="space-between"` to maximize space between elements
 *
 * Common use cases:
 * - Navigation buttons (Next/Previous)
 * - Buttons with leading/trailing icons that need specific spacing
 *
 * e.g
 *
 * ```html
 * <!-- Example of a button with leading icon and text -->
 * <gds-button justify-content="space-between">
 *   <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
 *  Previous
 * </gds-button>
 *
 * <!-- Example of a button with trailing icon and text -->
 * <gds-button justify-content="space-between">
 *   Next
 *   <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
 * </gds-button>
 * ```
 */
export const NextPrevious: Story = {
  ...DefaultParams,
  name: 'Next & Previous',
  parameters: {
    ...DefaultParams.parameters,
    controls: { include: [] },
  },
  render: () => html`
    <gds-flex gap="4xl" flex-direction="column" width="520px">
      <gds-flex flex-direction="column" gap="m" width="100%">
        <gds-text>Spread: Neutral</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-grid columns="3" gap="xl">
          <gds-button justify-content="space-between">
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button rank="secondary" justify-content="space-between">
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button rank="tertiary" justify-content="space-between">
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>

          <gds-button justify-content="space-between">
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button rank="secondary" justify-content="space-between">
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button rank="tertiary" justify-content="space-between">
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
        </gds-grid>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m" width="100%">
        <gds-text>Spread: Positive</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-grid columns="3" gap="xl">
          <gds-button variant="positive" justify-content="space-between">
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button
            rank="secondary"
            variant="positive"
            justify-content="space-between"
          >
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button
            rank="tertiary"
            variant="positive"
            justify-content="space-between"
          >
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>

          <gds-button variant="positive" justify-content="space-between">
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button
            rank="secondary"
            variant="positive"
            justify-content="space-between"
          >
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button
            rank="tertiary"
            variant="positive"
            justify-content="space-between"
          >
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
        </gds-grid>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m" width="100%">
        <gds-text>Spread: Negative</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-grid columns="3" gap="xl">
          <gds-button variant="negative" justify-content="space-between">
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button
            rank="secondary"
            variant="negative"
            justify-content="space-between"
          >
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button
            rank="tertiary"
            variant="negative"
            justify-content="space-between"
          >
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button variant="negative" justify-content="space-between">
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button
            rank="secondary"
            variant="negative"
            justify-content="space-between"
          >
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button
            rank="tertiary"
            variant="negative"
            justify-content="space-between"
          >
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
        </gds-grid>
      </gds-flex>
    </gds-flex>
  `,
}
