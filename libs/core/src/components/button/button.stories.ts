import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'
import '../../../../../dist/libs/core/src/components/button/index.js'
import '../../../../../dist/libs/core/src/components/grid/index.js'

import '../../../../../dist/libs/core/src/components/icon/icons/chevron-top.js'
import '../../../../../dist/libs/core/src/components/icon/icons/arrow-up.js'
import '../../../../../dist/libs/core/src/components/icon/icons/arrow-down.js'
import '../../../../../dist/libs/core/src/components/icon/icons/arrow-right.js'

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

const DefaultParams: Story = {
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
    <gds-grid columns="3" gap="m" row-gap="m">
      <div>
        <gds-button>Neutral primary</gds-button>
      </div>
      <div>
        <gds-button rank="secondary">Neutral secondary</gds-button>
      </div>
      <div>
        <gds-button rank="tertiary">Neutral tertiary</gds-button>
      </div>
      <div>
        <gds-button variant="positive">Positive primary</gds-button>
      </div>
      <div>
        <gds-button variant="positive" rank="secondary">
          Positive secondary
        </gds-button>
      </div>
      <div>
        <gds-button variant="positive" rank="tertiary">
          Positive tertiary
        </gds-button>
      </div>
      <div>
        <gds-button variant="negative">Negative primary</gds-button>
      </div>
      <div>
        <gds-button variant="negative" rank="secondary">
          Negative secondary
        </gds-button>
      </div>
      <div>
        <gds-button variant="negative" rank="tertiary">
          Negative tertiary
        </gds-button>
      </div>
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
    <gds-button .rank=${args.rank} .variant=${args.variant} size="small"
      >Small</gds-button
    >
    <gds-button .rank=${args.rank} .variant=${args.variant}>Medium</gds-button>
    <gds-button .rank=${args.rank} .variant=${args.variant} size="large"
      >Large</gds-button
    >
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
    <gds-button .rank=${args.rank} .variant=${args.variant} .size=${args.size}>
      <gds-icon-arrow-down slot="lead" />
      Leading icon
    </gds-button>

    <gds-button .rank=${args.rank} .variant=${args.variant} .size=${args.size}>
      Trailing icon
      <gds-icon-arrow-up slot="trail" />
    </gds-button>
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
    <gds-button .rank=${args.rank} .variant=${args.variant} size="small">
      <gds-icon-arrow-right />
    </gds-button>

    <gds-button .rank=${args.rank} .variant=${args.variant}>
      <gds-icon-arrow-right />
    </gds-button>

    <gds-button .rank=${args.rank} .variant=${args.variant} size="large">
      <gds-icon-arrow-right />
    </gds-button>
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
  render: () =>
    html`<gds-button disabled>Primary</gds-button>

      <gds-button rank="secondary" variant="positive" disabled>
        Secondary
      </gds-button>

      <gds-button rank="tertiary" disabled> Tertiary </gds-button>`,
}
