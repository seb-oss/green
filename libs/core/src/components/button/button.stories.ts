import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'
import '../../../../../dist/libs/core/src/components/button/index.js'
import '../../../../../dist/libs/core/src/components/grid/index.js'
import '../../../../../dist/libs/core/src/components/icon/index.js'

/**
 * A button serve as an interactive element that enables users to perform an action or make
 * a choice with a simple click or tap. To decide which kind of button/buttons and putting
 * them in the right order is key to make sure users know how to take the right action.
 * A good rule of thumb is to use only one primary action in each context.
 */
const meta: Meta = {
  title: 'Components/Button',
  component: 'gds-button',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const BaseStoryParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
  },
  argTypes: {
    rank: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['neutral', 'positive', 'negative'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
  args: {
    innerText: 'Button',
  },
}

export const Basic: Story = {
  ...BaseStoryParams,
}

/**
 * Buttons can have different ranks and variants. The rank defines the visual importance of the button,
 * while the variant defines the intent of the button.
 */
export const RanksAndVariants: Story = {
  ...BaseStoryParams,
  name: 'Ranks and variants',
  render: () => html`
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
  ...BaseStoryParams,
  render: () => html`
    <gds-button size="small">Small</gds-button>

    <gds-button>Medium</gds-button>

    <gds-button size="large">Large</gds-button>
  `,
}

/**
 * Buttons can have an icon on the left or right side of the text. These are called leading or trailing icons,
 * and are added by placing a `gds-icon` component in either the `lead` or `trail` slot.
 */
export const WithIcon: Story = {
  ...BaseStoryParams,
  name: 'Using icons in button',
  render: () => html`
    <gds-button>
      <gds-icon slot="lead" name="arrow-down"></gds-icon>
      Leading icon
    </gds-button>

    <gds-button>
      Trailing icon
      <gds-icon slot="trail" name="arrow-up"></gds-icon>
    </gds-button>
  `,
}

/**
 * If a single `gds-icon` is the only child of a button, it will render as a circular icon button.
 */
export const IconButton: Story = {
  ...BaseStoryParams,
  name: 'Icon button',
  render: () => html`
    <gds-button size="small">
      <gds-icon name="arrow" />
    </gds-button>

    <gds-button>
      <gds-icon name="arrow" />
    </gds-button>

    <gds-button size="large">
      <gds-icon name="arrow" />
    </gds-button>
  `,
}

/**
 * The buttons support a disabled state, but in general, it should not be used. It can be
 * hard for the user to understand why the button is disabled, so it is often better to
 * keep the button clickable and then show an error message instead.
 */
export const Disabled: Story = {
  ...BaseStoryParams,
  render: () =>
    html`<gds-button disabled>Primary</gds-button>

      <gds-button rank="secondary" variant="positive" disabled>
        Secondary
      </gds-button>

      <gds-button rank="tertiary" disabled> Tertiary </gds-button>`,
}
