import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'
// import './badge'

const meta: Meta = {
  title: 'Docs/Components/Badge',
  component: 'gds-badge',
}

export default meta
type Story = StoryObj

export const Basic: Story = {}

/**
 * Badge
 * @status beta
 */
export const Variants: Story = {
  render: () => html`
    <gds-badge variant="information">Information</gds-badge>
    <gds-badge variant="success">Success</gds-badge>
    <gds-badge variant="warning">Warning</gds-badge>
    <gds-badge variant="error">Error</gds-badge>
    <gds-badge variant="disabled">Disabled</gds-badge>
    <gds-badge variant="surface">Surface</gds-badge>
  `,
}
