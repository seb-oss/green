import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './breadcrumb'
import '../link'
import '../flex'
import '../card'
import '../divider'
import '../text'
import '../button'
import '../context-menu'
import '../icon/icons/home-open'
import '../icon/icons/chevron-right'
import '../icon/icons/settings-gear'
import '../icon/icons/square-grid-circle'
import '../icon/icons/square-grid-circle'
import '../icon/icons/dot-grid-one-horizontal'
import '../icon/icons/folder'

/**
 *
 * The `gds-breadcrumb` component is a navigation element <br/>
 * It helps users understand their current * location within a hierarchical structure of a website or application.
 *
 * ## Features
 * - Supports both text-only and icon+text navigation links
 * - Responsive design with mobile optimization showing the previous page
 * - Configurable sizes (large/small)
 * - Each breadcrumb item is a slot that preferably uses `gds-link` components
 *
 * ## Basic Usage
 *
 * ### Simple Breadcrumb
 * The most basic implementation using text-only links.
 *
 * ```html
 * <gds-breadcrumb>
 *   <gds-link href="/">Home</gds-link>
 *   <gds-link href="/products">Products</gds-link>
 *   <gds-link href="/products/category">Category</gds-link>
 *   <gds-text>Current page</gds-text>
 * </gds-breadcrumb>
 * ```
 */

const meta: Meta = {
  title: 'Components/Breadcrumb',
  component: 'gds-breadcrumb',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const Simple: Story = {
  render: () => html`
    <gds-breadcrumb>
      <gds-link href="/">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/products/category">Category</gds-link>
      <gds-text>Current page</gds-text>
    </gds-breadcrumb>
  `,
}

/**
 * ## Breadcrumb with Icons
 * This example shows how to use icons alongside text in the breadcrumb links.
 * Icons can be used to enhance the visual representation of the links.
 *
 * ```html
 * <gds-breadcrumb>
 *  <gds-link href="/">
 *   <gds-icon-home-open slot="lead"></gds-icon-home-open>
 *   Home
 *  </gds-link>
 * </gds-breadcrumb>
 * ```
 *
 * For more information on lead and trail icon, please refer to the [Link documentation](https://storybook.seb.io/latest/core/?path=/docs/components-link--docs).
 */
export const WithIcon: Story = {
  render: () => html`
    <gds-breadcrumb>
      <gds-link href="/">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-link>

      <gds-link href="/folder">
        <gds-icon-folder slot="lead"></gds-icon-folder>
        Documents
      </gds-link>

      <gds-link href="/folder/settings">
        <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
        Settings
      </gds-link>

      <gds-text> Current page </gds-text>
    </gds-breadcrumb>
  `,
}

/**
 * Size of the breadcrumb can be adjusted using the `size` attribute. <br/>
 * The default size is `large`, but you can set it to `small` for a more compact appearance.
 *
 * ```html
 * <gds-breadcrumb size="small">...</gds-breadcrumb>
 * ```
 */
export const Size: Story = {
  render: () => html`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default(large)</gds-text>
          <gds-card flex="1" background="secondary">
            <gds-breadcrumb>
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

              <gds-text> Current page </gds-text>
            </gds-breadcrumb>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Small</gds-text>
          <gds-card background="secondary" flex="1">
            <gds-breadcrumb size="small">
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

              <gds-text> Current page </gds-text>
            </gds-breadcrumb>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * Mobile optimization is built into the breadcrumb component. <br/>
 * On mobile devices, the breadcrumb will show the previous page instead of the full path. <br/>
 * This is done to save space and make navigation easier on smaller screens.
 */
export const Mobile: Story = {
  render: () => html`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Desktop</gds-text>
          <gds-card flex="1" background="secondary">
            <gds-breadcrumb>
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

              <gds-text> Current page </gds-text>
            </gds-breadcrumb>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Mobile</gds-text>
          <gds-card background="secondary" width="400px">
            <gds-breadcrumb>
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

              <gds-text> Current page </gds-text>
            </gds-breadcrumb>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 *## Overflow Handling
 *
 * The breadcrumb component is designed with flexibility in mind, allowing developers to implement * custom overflow solutions that best fit their specific needs.
 *
 *
 *```html
 *<gds-breadcrumb>
 *  <gds-link href="/home">Home</gds-link>
 *  <gds-button rank="tertiary">
 *    <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
 *  </gds-button>
 *  <gds-link href="/current">Current</gds-link>
 *</gds-breadcrumb>
 *```
 */
export const Overflow: Story = {
  render: () => html`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-breadcrumb>
        <gds-link href="/home">
          <gds-icon-home-open slot="lead"></gds-icon-home-open>
          Home
        </gds-link>

        <gds-link href="/folder">
          <gds-icon-folder slot="lead"></gds-icon-folder>
          Documents
        </gds-link>

        <gds-button rank="tertiary" size="small">
          <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
        </gds-button>

        <gds-link href="/settings">
          <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
          Settings
        </gds-link>

        <gds-text> Current page </gds-text>
      </gds-breadcrumb>
    </gds-flex>
  `,
}
