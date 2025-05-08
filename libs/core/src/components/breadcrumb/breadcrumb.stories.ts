import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './breadcrumb'
import './breadcrumb-item/breadcrumb-item'
import '../icon/icons/home-open'

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
    <gds-breadcrumb>
      <span slot="separator">/</span>
      <gds-breadcrumb-item href="/">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-breadcrumb-item>
      <gds-breadcrumb-item href="/products">Products</gds-breadcrumb-item>
      <gds-breadcrumb-item active>Current Page</gds-breadcrumb-item>
    </gds-breadcrumb>
  `,
}

/**
 * Breadcrumb with dropdown menu
 */
export const WithDropdown: Story = {
  render: () => html`
    <gds-breadcrumb>
      <gds-icon-chevron-right slot="separator"></gds-icon-chevron-right>
      <gds-breadcrumb-item href="/">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-breadcrumb-item>
      <gds-breadcrumb-item>
        <gds-dropdown>
          <gds-button slot="trigger">Categories</gds-button>
          <gds-menu>
            <gds-menu-item>Category 1</gds-menu-item>
            <gds-menu-item>Category 2</gds-menu-item>
          </gds-menu>
        </gds-dropdown>
      </gds-breadcrumb-item>
      <gds-breadcrumb-item active>Current Page</gds-breadcrumb-item>
    </gds-breadcrumb>
  `,
}

/**
 * Breadcrumb with custom icon separator
 */
export const WithIconSeparator: Story = {
  render: () => html`
    <gds-breadcrumb>
      <gds-icon-chevron-right slot="separator"></gds-icon-chevron-right>
      <gds-breadcrumb-item href="/">Home</gds-breadcrumb-item>
      <gds-breadcrumb-item href="/products">Products</gds-breadcrumb-item>
      <gds-breadcrumb-item active>Current Page</gds-breadcrumb-item>
    </gds-breadcrumb>
  `,
}

/**
 * Complex example with mixed content
 */
export const ComplexExample: Story = {
  render: () => html`
    <gds-breadcrumb>
      <gds-icon-chevron-right slot="separator"></gds-icon-chevron-right>
      <gds-breadcrumb-item href="/">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-breadcrumb-item>
      <gds-breadcrumb-item>
        <gds-dropdown>
          <gds-button slot="trigger">
            Categories
            <gds-icon-chevron-down slot="trail"></gds-icon-chevron-down>
          </gds-button>
          <gds-menu>
            <gds-menu-item>Category 1</gds-menu-item>
            <gds-menu-item>Category 2</gds-menu-item>
          </gds-menu>
        </gds-dropdown>
      </gds-breadcrumb-item>
      <gds-breadcrumb-item href="/products">
        Products
        <gds-badge slot="trail">New</gds-badge>
      </gds-breadcrumb-item>
      <gds-breadcrumb-item active>Current Page</gds-breadcrumb-item>
    </gds-breadcrumb>
  `,
}
