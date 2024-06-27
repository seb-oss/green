import type { Meta, StoryObj } from '@storybook/web-components'

// import { html } from 'lit';
import { html } from '../../scoping'
import './menu-button'
import '../popover/popover.js'

import '../icon/icons/magnifying-glass.js'
import '../icon/icons/bell.js'
import '../icon/icons/star.js'
import '../icon/icons/people.js'
import '../icon/icons/globus.js'
import '../icon/icons/square-arrow-top-right.js'

const meta: Meta = {
  title: 'Components/Menu button',
  component: 'gds-menu-button',
  parameters: {
    layout: 'centered',
  },
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
  args: {
    innerHTML: `<gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
    Search`,
  },
}

export const Basic: Story = {
  ...DefaultParams,
}

/**
 * Selected state is used to indicate that the button is currently selected, for example to indicate the current page.
 */
export const Selected_state: Story = {
  ...DefaultParams,
  render: () =>
    html`<gds-menu-button selected>
      <gds-icon-people solid slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>`,
}

/**
 * The menu button can be used without an icon as well.
 */
export const Only_text: Story = {
  ...DefaultParams,
  render: () => html`<gds-menu-button>Search</gds-menu-button>`,
}

/**
 * An example of a menu bar with a search button, a notification button, a profile button, and an external link button.
 *
 * The profile buitton shows an example of using a popover together with a menu button.
 *
 * External link is an example of using a menu button as a link to a URL.
 */
export const Example_menu_bar: Story = {
  ...DefaultParams,
  render: () =>
    html` <div
      style="display:flex;width:700px;height:50px;border-bottom: 1px solid #ddd;"
    >
      <div style="flex-basis:50%;">
        <gds-menu-button>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <div style="flex-basis:50%;display:flex;justify-content:flex-end">
        <gds-menu-button>
          <gds-icon-bell slot="trail"></gds-icon-bell>
          Notification
        </gds-menu-button>
        <gds-popover>
          <gds-menu-button slot="trigger">
            <gds-icon-people slot="trail"></gds-icon-people>
            Profile
          </gds-menu-button>
          <div style="padding: 1rem;">Profile stuff</div>
        </gds-popover>
        <gds-menu-button
          href="https://github.com/seb-oss/green"
          target="_blank"
        >
          <gds-icon-square-arrow-top-right
            slot="trail"
          ></gds-icon-square-arrow-top-right>
          External link
        </gds-menu-button>
      </div>
    </div>`,
}

/**
 * Same as above, but using the compact style. This is mainly intended for use in a mobile viewport.
 */
export const Compact_menu_bar: Story = {
  ...DefaultParams,
  render: () =>
    html` <div
      style="display:flex;width:700px;border-bottom: 1px solid #ddd;"
    >
      <div style="flex-basis:50%;">
        <gds-menu-button compact>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <div style="flex-basis:50%;display:flex;justify-content:flex-end">
        <gds-menu-button compact>
          <gds-icon-bell slot="trail"></gds-icon-bell>
          Notification
        </gds-menu-button compact>
        <gds-popover>
          <gds-menu-button compact slot="trigger">
            <gds-icon-people slot="trail"></gds-icon-people>
            Profile
          </gds-menu-button>
          <div style="padding: 1rem;">Profile stuff</div>
        </gds-popover>
        <gds-menu-button
        compact
          href="https://github.com/seb-oss/green"
          target="_blank"
        >
          <gds-icon-square-arrow-top-right
            slot="trail"
          ></gds-icon-square-arrow-top-right>
          External link
        </gds-menu-button>
      </div>
    </div>`,
}
