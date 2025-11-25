import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import './breadcrumbs'
import './breadcrumb/breadcrumb'
import '../link'
import '../context-menu'
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
 *
 * ## Basic Usage
 *
 * ### Simple breadcrumbs
 * The most basic implementation using text-only links.
 *
 * ```html
 * <gds-breadcrumbs>
 *   <gds-breadcrumb href="/">Home</gds-breadcrumb>
 *   <gds-breadcrumb href="/products">Products</gds-breadcrumb>
 *   <gds-breadcrumb href="/products/category">Category</gds-breadcrumb>
 *   <gds-breadcrumb>Current page</gds-breadcrumb>
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
      <gds-breadcrumb href="/"> Home </gds-breadcrumb>
      <gds-breadcrumb href="/products"> Products </gds-breadcrumb>
      <gds-breadcrumb href="/products/category"> Category </gds-breadcrumb>
      <gds-breadcrumb>Current page</gds-breadcrumb>
    </gds-breadcrumbs>
  `,
}

/**
 * This example shows how to use icons alongside text in the breadcrumbs item.
 * Icons can be used to enhance the visual representation of the breadcrumbs item.
 *
 * ```html
 * <gds-breadcrumbs>
 *  <gds-breadcrumb href="/">
 *   <gds-icon-home-open slot="lead"></gds-icon-home-open>
 *   Home
 *  </gds-breadcrumb>
 * </gds-breadcrumbs>
 * ```
 *
 * For more information on lead and trail icon, please refer to the [Link documentation](https://storybook.seb.io/latest/core/?path=/docs/components-link--docs).
 */
export const WithIcon: Story = {
  render: () => html`
    <gds-breadcrumbs>
      <gds-breadcrumb href="/">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-breadcrumb>

      <gds-breadcrumb href="/folder">
        <gds-icon-folder slot="lead"></gds-icon-folder>
        Documents
      </gds-breadcrumb>

      <gds-breadcrumb href="/folder/settings">
        <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
        Settings
      </gds-breadcrumb>

      <gds-breadcrumb> Current page </gds-breadcrumb>
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
              <gds-breadcrumb href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumb>

              <gds-breadcrumb href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumb>

              <gds-breadcrumb href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumb>

              <gds-breadcrumb> Current page </gds-breadcrumb>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Small</gds-text>
          <gds-card background="neutral-02" flex="1">
            <gds-breadcrumbs size="small">
              <gds-breadcrumb href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumb>

              <gds-breadcrumb href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumb>

              <gds-breadcrumb href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumb>

              <gds-breadcrumb> Current page </gds-breadcrumb>
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
              <gds-breadcrumb href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumb>

              <gds-breadcrumb href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumb>

              <gds-breadcrumb href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumb>

              <gds-breadcrumb> Current page </gds-breadcrumb>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Mobile</gds-text>
          <gds-card background="neutral-02" width="400px">
            <gds-breadcrumbs>
              <gds-breadcrumb href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumb>

              <gds-breadcrumb href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumb>

              <gds-breadcrumb href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumb>

              <gds-breadcrumb> Current page </gds-breadcrumb>
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
 *  <gds-breadcrumb href="/home">Home</gds-breadcrumb>
 *  <gds-button rank="tertiary">
 *    <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
 *  </gds-button>
 *  <gds-breadcrumb>Current</gds-breadcrumb>
 *</gds-breadcrumbs>
 *```
 */
export const Overflow: Story = {
  render: () => html`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-breadcrumbs>
        <gds-breadcrumb href="/home">
          <gds-icon-home-open slot="lead"></gds-icon-home-open>
          Home
        </gds-breadcrumb>

        <gds-breadcrumb href="/folder">
          <gds-icon-folder slot="lead"></gds-icon-folder>
          Documents
        </gds-breadcrumb>

        <gds-breadcrumb overflow>
          <gds-context-menu>
            <gds-menu-item>Action 1</gds-menu-item>
            <gds-menu-item>Action 2</gds-menu-item>
            <gds-menu-item>Action 3</gds-menu-item>
          </gds-context-menu>
        </gds-breadcrumb>

        <gds-breadcrumb href="/settings">
          <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
          Settings
        </gds-breadcrumb>

        <gds-breadcrumb> Current page</gds-breadcrumb>
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
              <gds-breadcrumb href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumb>
              <gds-breadcrumb href="/products"> Products </gds-breadcrumb>
              <gds-breadcrumb>Current page</gds-breadcrumb>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Custom label</gds-text>
          <gds-card background="neutral-02" flex="1">
            <gds-breadcrumbs label="Site Navigation">
              <gds-breadcrumb href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumb>
              <gds-breadcrumb href="/products"> Products </gds-breadcrumb>
              <gds-breadcrumb>Current page</gds-breadcrumb>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `,
}
