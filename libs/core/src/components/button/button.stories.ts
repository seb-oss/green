import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'
import '../../../../../dist/libs/core/src/components/button/index.js'

const meta: Meta = {
  title: 'Components/Button',
  component: 'gds-button',
}

export default meta
type Story = StoryObj

export const Ranks: Story = {
  render: () => html`
    <gds-button>Primary</gds-button>
    <gds-button rank="secondary">Secondary</gds-button>
    <gds-button rank="tertiary">Tertiary</gds-button>
  `,
}
