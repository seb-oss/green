import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './breadcrumb'
import '../link'
import '../context-menu'
import '../icon/icons/home-open'
import '../icon/icons/chevron-right'

const meta: Meta = {
  title: 'Components/Breadcrumb',
  component: 'gds-breadcrumb',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

/**
 * Basic breadcrumb with default separator
 */
export const Default: Story = {
  render: () => html`
    <gds-breadcrumb gap="s">
      <gds-icon-chevron-right slot="separator"></gds-icon-chevron-right>

      <gds-link href="/home">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-link>

      <gds-link href="/components">Components</gds-link>

      <gds-context-menu>
        <gds-menu-item>Action 1</gds-menu-item>
        <gds-menu-item>Action 2</gds-menu-item>
      </gds-context-menu>

      <gds-link href="/current">Current Page</gds-link>
    </gds-breadcrumb>
  `,
}
