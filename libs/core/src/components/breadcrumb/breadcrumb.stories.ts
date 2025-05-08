import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './breadcrumb'
import '../link'
import '../card'
import '../divider'
import '../text'
import '../button'
import '../context-menu'
import '../icon/icons/home-open'
import '../icon/icons/chevron-right'
import '../icon/icons/settings-gear'
import '../icon/icons/square-grid-circle'
import '../icon/icons/folder'

const meta: Meta = {
  title: 'Components/Breadcrumb',
  component: 'gds-breadcrumb',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

/**
 * Basic breadcrumb with text-only links
 */
export const Simple: Story = {
  render: () => html`
    <gds-breadcrumb>
      <gds-icon-chevron-right
        size="s"
        slot="separator"
      ></gds-icon-chevron-right>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/category">Category</gds-link>
    </gds-breadcrumb>
  `,
}

/**
 * Breadcrumb with leading icons in links
 */
export const WithLeadIcons: Story = {
  render: () => html`
    <gds-breadcrumb>
      <gds-icon-chevron-right
        size="s"
        slot="separator"
      ></gds-icon-chevron-right>

      <gds-link href="/home">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-link>

      <gds-link href="/folder">
        <gds-icon-folder slot="lead"></gds-icon-folder>
        Documents
      </gds-link>

      <gds-link href="/settings">
        <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
        Settings
      </gds-link>
    </gds-breadcrumb>
  `,
}

/**
 * Breadcrumb with mixed elements (link, button, and context menu)
 */
export const MixedElements: Story = {
  render: () => html`
    <gds-breadcrumb>
      <gds-icon-chevron-right
        size="s"
        slot="separator"
      ></gds-icon-chevron-right>

      <gds-link href="/home">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-link>

      <gds-button rank="tertiary" size="small">
        <gds-icon-folder slot="lead"></gds-icon-folder>
        Select Folder
      </gds-button>

      <gds-context-menu>
        <gds-menu-item>Move</gds-menu-item>
        <gds-menu-item>Copy</gds-menu-item>
        <gds-menu-item>Delete</gds-menu-item>
      </gds-context-menu>

      <span>Current Item</span>
    </gds-breadcrumb>
  `,
}

/**
 * Breadcrumb with trailing icons in links
 */
export const WithTrailingIcons: Story = {
  render: () => html`
    <gds-breadcrumb>
      <span slot="separator">·</span>

      <gds-link href="/home">
        <gds-icon-home-open slot="trail"></gds-icon-home-open>
      </gds-link>

      <gds-link href="/settings">
        Settings
        <gds-icon-settings-gear slot="trail"></gds-icon-settings-gear>
      </gds-link>
    </gds-breadcrumb>
  `,
}

/**
 * Breadcrumb with text separator
 */
export const TextSeparator: Story = {
  render: () => html`
    <gds-breadcrumb>
      <gds-text slot="separator" color="secondary"> · </gds-text>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-text color="secondary">Current</gds-text>
    </gds-breadcrumb>
  `,
}

/**
 * Breadcrumb with context menu for overflow
 */
export const WithOverflow: Story = {
  render: () => html`
    <gds-breadcrumb>
      <gds-icon-chevron-right slot="separator"></gds-icon-chevron-right>

      <gds-link href="/home">
        <gds-icon-square-grid-circle slot="lead"></gds-icon-square-grid-circle>
        Components
      </gds-link>

      <gds-context-menu>
        <gds-menu-item>Level 1</gds-menu-item>
        <gds-menu-item>Level 2</gds-menu-item>
        <gds-menu-item>Level 3</gds-menu-item>
      </gds-context-menu>

      <gds-link href="/current">Current Page</gds-link>
    </gds-breadcrumb>
  `,
}

/**
 * The breadcrumb component supports different font sizes for its text.
 * Font size sets automatically line height.
 *
 * All the typography tokens are available for use.
 */
export const fontSize: Story = {
  render: () => html`
    <gds-flex flex-direction="column" gap="xl">
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Font size: Default/inherited</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb>
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text opacity="0.4">v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-divider opacity="0.2"></gds-divider>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Font size: Body S</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb font-size="body-s">
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text opacity="0.4">v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Font size: Body M</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb font-size="body-m">
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text opacity="0.4">v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Font size: Body L</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb font-size="body-l">
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text opacity="0.4">v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * The breadcrumb gap between its elements can be set using the `gap` property.
 * The gap property accepts all the spacing tokens from the design system.
 * The default value is `2xs`.
 */
export const Gap: Story = {
  render: () => html`
    <gds-flex flex-direction="column" gap="xl">
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Gap: Default(s)</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb>
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text opacity="0.4">v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-divider opacity="0.2"></gds-divider>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Gap: L</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb gap="l">
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text opacity="0.4">v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Gap: XL</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb gap="xl">
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text opacity="0.4">v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
    </gds-flex>
  `,
}
