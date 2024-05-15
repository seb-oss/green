import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'
import '../../../../../dist/libs/core/src/components/button/index.js'

const meta: Meta = {
  title: 'Components/Button',
  component: 'gds-button',
}

export default meta
type Story = StoryObj

const BaseStoryParams: Story = {
  parameters: {
    docs: {
      source: { format: true },
    },
  },
}

export const Ranks: Story = {
  ...BaseStoryParams,
  render: () => html`
    <gds-button>Primary</gds-button>

    <gds-button rank="secondary">Secondary</gds-button>

    <gds-button rank="tertiary">Tertiary</gds-button>
  `,
}

export const Variants: Story = {
  ...BaseStoryParams,
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

export const Sizes: Story = {
  ...BaseStoryParams,
  render: () => html`
    <gds-button size="small">Small</gds-button>

    <gds-button>Medium</gds-button>

    <gds-button size="large">Large</gds-button>
  `,
}

export const WithIcon: Story = {
  ...BaseStoryParams,
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

export const IconButton: Story = {
  ...BaseStoryParams,
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

export const Disabled: Story = {
  ...BaseStoryParams,
  render: () =>
    html`<gds-button disabled>Primary</gds-button>

      <gds-button rank="secondary" variant="positive" disabled>
        Secondary
      </gds-button>

      <gds-button rank="tertiary" disabled> Tertiary </gds-button>`,
}
