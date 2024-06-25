import type { Meta, StoryObj } from '@storybook/web-components'

// import { html } from 'lit';
import { html } from '../../scoping'
import './menu-button'

import '../icon/icons/magnifying-glass.js'
import '../icon/icons/bell.js'
import '../icon/icons/star.js'
import '../icon/icons/people.js'
import '../icon/icons/globus.js'

const meta: Meta = {
  title: 'Components/Menu button',
  component: 'gds-menu-button',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () =>
    html`<gds-menu-button compactview>
      <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      Search
    </gds-menu-button>`,
}
export const Example_selected_state: Story = {
  render: () =>
    html`<gds-menu-button selected>
      <gds-icon-magnifying-glass solid slot="lead"></gds-icon-magnifying-glass>
      Search
    </gds-menu-button>`,
}
export const Notification: Story = {
  render: () =>
    html`<gds-menu-button>
      <gds-icon-bell slot="trail"></gds-icon-bell>
      Notification
    </gds-menu-button>`,
}
export const Notification_unread: Story = {
  render: () =>
    html`<gds-menu-button>
        <berry-component slot="trail">3</berry-component>
        <gds-icon-bell slot="trail"></gds-icon-bell>
        Notification
      </gds-menu-button>
      <gds-menu-button>
        <gds-icon-bell slot="trail"></gds-icon-bell>
        Notification
      </gds-menu-button>
      <gds-menu-button>
        <gds-icon-bell slot="trail"></gds-icon-bell>
        Notification
      </gds-menu-button>`,
}
export const My_shortcuts: Story = {
  render: () =>
    html`<gds-menu-button>
      <gds-icon-star slot="trail"></gds-icon-star>
      My shortcuts
    </gds-menu-button>`,
}
export const Profile: Story = {
  render: () =>
    html` <gds-menu-button>
      <gds-icon-people slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>`,
}
export const Search: Story = {
  render: () =>
    html` <gds-menu-button>
      <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      Search
    </gds-menu-button>`,
}
export const Settings: Story = {
  render: () =>
    html` <gds-menu-button>
      <gds-icon-globus slot="trail"></gds-icon-globus>
      Other countries
    </gds-menu-button>`,
}
export const Dubble_icon: Story = {
  render: () =>
    html` <gds-menu-button>
      <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      <gds-icon-people slot="trail"></gds-icon-people>
      Search a user
    </gds-menu-button>`,
}
export const About_SEB: Story = {
  render: () =>
    html`<gds-menu-button label="button"> About SEB </gds-menu-button>`,
}
