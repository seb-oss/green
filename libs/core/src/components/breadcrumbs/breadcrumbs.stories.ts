import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './breadcrumbs'
import './breadcrumbs-item/breadcrumbs-item'
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
 * A breadcrumb is a secondary navigation showing the website hierarchy.
 *
 * ## Features
 * - Supports both text-only and icon+text navigation links
 * - Responsive design with mobile optimization showing the previous page
 * - Configurable sizes (large/small)
 * - Each breadcrumbs item is a slot that preferably uses `gds-link` component.
 *
 * ## Basic Usage
 *
 * ### Simple breadcrumbs
 * The most basic implementation using text-only links.
 *
 * ```html
 * <gds-breadcrumbs>
 *   <gds-link href="/">Home</gds-link>
 *   <gds-link href="/products">Products</gds-link>
 *   <gds-link href="/products/category">Category</gds-link>
 *   <gds-text>Current page</gds-text>
 * </gds-breadcrumbs>
 * ```
 */

const meta: Meta = {
  title: 'Components/Breadcrumbs',
  component: 'gds-breadcrumbs',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const Simple: Story = {
  render: () => html`
    <gds-breadcrumbs>
      <gds-breadcrumbs-item href="/"> Home </gds-breadcrumbs-item>
      <gds-breadcrumbs-item href="/products"> Products </gds-breadcrumbs-item>
      <gds-breadcrumbs-item href="/products/category">
        Category
      </gds-breadcrumbs-item>
      <gds-breadcrumbs-item>Current page</gds-breadcrumbs-item>
    </gds-breadcrumbs>
  `,
}

/**
 * This example shows how to use icons alongside text in the breadcrumbs links.
 * Icons can be used to enhance the visual representation of the links.
 *
 * ```html
 * <gds-breadcrumbs>
 *  <gds-link href="/">
 *   <gds-icon-home-open slot="lead"></gds-icon-home-open>
 *   Home
 *  </gds-link>
 * </gds-breadcrumbs>
 * ```
 *
 * For more information on lead and trail icon, please refer to the [Link documentation](https://storybook.seb.io/latest/core/?path=/docs/components-link--docs).
 */
export const WithIcon: Story = {
  render: () => html`
    <gds-breadcrumbs>
      <gds-breadcrumbs-item href="/">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-breadcrumbs-item>

      <gds-breadcrumbs-item href="/folder">
        <gds-icon-folder slot="lead"></gds-icon-folder>
        Documents
      </gds-breadcrumbs-item>

      <gds-breadcrumbs-item href="/folder/settings">
        <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
        Settings
      </gds-breadcrumbs-item>

      <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
    </gds-breadcrumbs>
  `,
}

/**
 * Size of the breadcrumbs can be adjusted using the `size` attribute. <br/>
 * The default size is `large`, but you can set it to `small` for a more compact appearance.
 *
 * ```html
 * <gds-breadcrumbs size="small">...</gds-breadcrumbs>
 * ```
 */
export const Size: Story = {
  render: () => html`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default(large)</gds-text>
          <gds-card flex="1" background="neutral-02">
            <gds-breadcrumbs>
              <gds-breadcrumbs-item href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Small</gds-text>
          <gds-card background="neutral-02" flex="1">
            <gds-breadcrumbs size="small">
              <gds-breadcrumbs-item href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * Mobile optimization is built into the breadcrumbs component. <br/>
 * On mobile devices, the breadcrumbs will show the previous page instead of the full path. <br/>
 * This is done to save space and make navigation easier on smaller screens.
 */
export const Mobile: Story = {
  render: () => html`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Desktop</gds-text>
          <gds-card flex="1" background="neutral-02">
            <gds-breadcrumbs>
              <gds-breadcrumbs-item href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Mobile</gds-text>
          <gds-card background="neutral-02" width="400px">
            <gds-breadcrumbs>
              <gds-breadcrumbs-item href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * The breadcrumbs component is designed with flexibility in mind, allowing developers to implement * custom overflow solutions that best fit their specific needs.
 *
 * ### Example
 *
 *```html
 *<gds-breadcrumbs>
 *  <gds-link href="/home">Home</gds-link>
 *  <gds-button rank="tertiary">
 *    <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
 *  </gds-button>
 *  <gds-link href="/current">Current</gds-link>
 *</gds-breadcrumbs>
 *```
 */
export const Overflow: Story = {
  render: () => html`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-breadcrumbs>
        <gds-breadcrumbs-item href="/home">
          <gds-icon-home-open slot="lead"></gds-icon-home-open>
          Home
        </gds-breadcrumbs-item>

        <gds-breadcrumbs-item href="/folder">
          <gds-icon-folder slot="lead"></gds-icon-folder>
          Documents
        </gds-breadcrumbs-item>

        <gds-button rank="tertiary" size="small">
          <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
        </gds-button>

        <gds-breadcrumbs-item href="/settings">
          <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
          Settings
        </gds-breadcrumbs-item>

        <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
      </gds-breadcrumbs>
    </gds-flex>
  `,
}

/**
 * The breadcrumbs component supports customizing the accessibility label. <br/>
 * This can be useful when you have multiple navigation sections
 * or want to provide more specific context for screen readers.
 *
 * ```html
 * <gds-breadcrumbs label="Site Navigation">
 *   ...
 * </gds-breadcrumbs>
 * ```
 */
export const Label: Story = {
  name: 'Accessible Label',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="2xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default label</gds-text>
          <gds-card flex="1" background="neutral-02">
            <gds-breadcrumbs>
              <gds-link href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-link>
              <gds-link href="/products">Products</gds-link>
              <gds-text>Current page</gds-text>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Custom label</gds-text>
          <gds-card background="neutral-02" flex="1">
            <gds-breadcrumbs label="Site Navigation">
              <gds-link href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-link>
              <gds-link href="/products">Products</gds-link>
              <gds-text>Current page</gds-text>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `,
}
