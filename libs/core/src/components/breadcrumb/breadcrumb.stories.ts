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
      <gds-text slot="separator">/</gds-text>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/category">Category</gds-link>
    </gds-breadcrumb>
  `,
}

/**
 * Breadcrumb with mixed elements (link, button, and context menu)
 *
 * The breadcrumb component is not limited to links only. <br />
 * It can also contain buttons and context menus. <br />
 * The context menu can be used to show the overflow items when the breadcrumb is too long to fit in the available space.
 * Buttons and context menus can be used to trigger actions or show additional options. <br />
 *
 * ```html
 * <gds-breadcrumb>
 *   <gds-icon-chevron-right slot="separator"></gds-icon-chevron-right>
 *   <gds-link href="/home">
 *     <gds-icon-home-open slot="lead"></gds-icon-home-open>
 *     Home
 *   </gds-link>
 *   <gds-button rank="tertiary" size="small">
 *     <gds-icon-folder slot="lead"></gds-icon-folder>
 *     Select Folder
 *   </gds-button>
 *   <gds-context-menu>
 *     <gds-menu-item>Move</gds-menu-item>
 *     <gds-menu-item>Copy</gds-menu-item>
 *     <gds-menu-item>Delete</gds-menu-item>
 *   </gds-context-menu>
 *   <span>Current Item</span>
 * </gds-breadcrumb>
 * ```
 *
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
 * Lead and trail icons depend on the element type. <br />
 * The trail slot is used in links and buttons. <br />
 *
 * For more information about the lead and trail icons, check the documentation on button and link. <br />
 *
 *```html
 * <gds-breadcrumb>
 *    <gds-text slot="separator">/</gds-text>
 *    <gds-link href="/home">
 *      <gds-icon-home-open slot="lead"></gds-icon-home-open>
 *      Home
 *    </gds-link>
 *    <gds-link href="/folder">
 *      <gds-icon-folder slot="lead"></gds-icon-folder>
 *      Documents
 *    </gds-link>
 *    <gds-link href="/settings">
 *      <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
 *      Settings
 *    </gds-link>
 *  </gds-breadcrumb>
 *  ```
 */
export const LeadIcon: Story = {
  render: () => html`
    <gds-breadcrumb>
      <gds-text slot="separator">/</gds-text>

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
 * Lead and trail icons depend on the element type. <br />
 * The trail slot is used in links and buttons. <br />
 *
 For more information about the lead and trail icons, check the documentation on button and link. 

 * ```html
 * <gds-breadcrumb>
 *   <gds-text slot="separator">/</gds-text>
 *   <gds-link href="/home">
 *     <gds-icon-home-open slot="trail"></gds-icon-home-open>
 *   </gds-link>
 *   <gds-link href="/settings">
 *     Settings
 *     <gds-icon-settings-gear slot="trail"></gds-icon-settings-gear>
 *   </gds-link>
 * </gds-breadcrumb>
 * ```
 */
export const TrailIcon: Story = {
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
 *
 * The separator can be any text or icon. <br/>
 * Is recommanded to be used the slash character. <br />
 *
 * Separator can be set using the `slot="separator"` attribute. <br />
 * The separator will automatically show in between the breadcrumb items.
 *
 * ```html
 * <gds-breadcrumb>
 *   <gds-text slot="separator">/</gds-text>
 *   <gds-link>...</gds-link>
 *   <gds-link>...</gds-link>
 *   <gds-link>...</gds-link>
 * </gds-breadcrumb>
 * ```
 */
export const Separator: Story = {
  render: () => html`
    <gds-flex flex-direction="column" gap="xl">
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Slash</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb>
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text>v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Icon</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb>
            <gds-icon-chevron-right size="s" slot="separator">
              /
            </gds-icon-chevron-right>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text>v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Dot</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb>
            <gds-text slot="separator">·</gds-text>
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
 * Breadcrumb with context menu for overflow
 *
 * The context menu can be used to show the overflow items when the breadcrumb is too long to fit in the available space.
 *
 * ```html
 * <gds-breadcrumb>
 *   <gds-text slot="separator">/</gds-text>
 *   <gds-link>...</gds-link>
 *   <gds-context-menu>
 *    <gds-menu-item>Level 1</gds-menu-item>
 *    <gds-menu-item>Level 2</gds-menu-item>
 *    <gds-menu-item>Level 3</gds-menu-item>
 *   </gds-context-menu>
 *   <gds-link>Current Page</gds-link>
 * </gds-breadcrumb>
 * ```
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
 *
 * The default font size it inherits from parent.
 *
 * ```html
 * <gds-breadcrumb font-size="body-m">...</gds-breadcrumb>
 * ```
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
            <gds-text>v2.0</gds-text>
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
            <gds-text color="secondary"> v2.0 </gds-text>
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
            <gds-text color="secondary"> v2.0 </gds-text>
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
            <gds-text color="secondary"> v2.0 </gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * The breadcrumb gap between its elements can be set using the `gap` property. <br/>
 * The gap property accepts all the spacing tokens from the design system.<br/>
 * The default value is `s`.
 *
 *
 *```html
 * <gds-breadcrumb gap="m">...</gds-breadcrumb>
 * ```
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
            <gds-text color="secondary"> v2.0 </gds-text>
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
            <gds-text color="secondary"> v2.0 </gds-text>
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
            <gds-text color="secondary"> v2.0 </gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
    </gds-flex>
  `,
}
