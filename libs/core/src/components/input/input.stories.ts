import type { Meta, StoryObj } from '@storybook/web-components'
import './input'
import { html } from 'lit'

const meta: Meta = {
  title: 'Docs/Components/Input',
  component: 'gds-input',
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
}

export const Basic: Story = {
  ...DefaultParams,
}

export const Input: Story = {
  ...DefaultParams,
  name: 'Regular icons',
  render: (args) => html`
    <gds-flex>
      <gds-input
        label="Label"
        maxlength="50"
        supporting-text="Supporting text"
        clearable
      >
        <gds-icon-email slot="lead"></gds-icon-email>
        <gds-badge slot="trail" variant="surface"> kr </gds-badge>
        <gds-panel slot="extended-supporting-text">
          Extended supporting text as <strong>markup</strong>
          <br />
          <a href="#">Can contain links</a>
        </gds-panel>
      </gds-input>
    </gds-flex>
  `,
}
