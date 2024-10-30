import { html, nothing } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

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

/**
 * A button serve as an interactive element that enables users to perform an action or make
 * a choice with a simple click or tap. To decide which kind of button/buttons and putting
 * them in the right order is key to make sure users know how to take the right action.
 * A good rule of thumb is to use only one primary action in each context.
 */
const meta: Meta = {
  title: 'Components/Button',
  component: 'gds-button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
  argTypes: {
    rank: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
    variant: {
      options: ['neutral', 'positive', 'negative'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
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
        <gds-flex gap="xl">
          <gds-button>
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button>
          <gds-button rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button>
          <gds-button rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Positive</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="positive">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button>
          <gds-button variant="positive" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button>
          <gds-button variant="positive" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Negative</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="negative">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button>
          <gds-button variant="negative" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button>
          <gds-button variant="negative" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button>
        </gds-flex>
      </gds-flex>
    </gds-grid>
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
    <gds-flex gap="l" align-items="center">
      <gds-button .rank=${args.rank} .variant=${args.variant} size="small">
        Small
      </gds-button>
      <gds-button .rank=${args.rank} .variant=${args.variant}>
        Medium
      </gds-button>
      <gds-button .rank=${args.rank} .variant=${args.variant} size="large">
        Large
      </gds-button>
    </gds-flex>
  `,
}

/**
 * Buttons can have an icon on the left or right side of the text. These are called leading or trailing icons,
 * and are added by placing a `gds-icon` component in either the `lead` or `trail` slot.
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
 * If a single `gds-icon` is the only child of a button, it will render as a circular icon button.
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
      <gds-button .rank=${args.rank} .variant=${args.variant} size="small">
        <gds-icon-arrow-right />
      </gds-button>
      <gds-button .rank=${args.rank} .variant=${args.variant}>
        <gds-icon-arrow-right />
      </gds-button>
      <gds-button .rank=${args.rank} .variant=${args.variant} size="large">
        <gds-icon-arrow-right />
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
