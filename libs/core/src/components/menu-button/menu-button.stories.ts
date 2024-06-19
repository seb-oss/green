import type { Meta, StoryObj } from '@storybook/web-components';

// import { html } from 'lit';
import { html } from '@sebgroup/green-core/scoping'
import './menu-button';

import '@sebgroup/green-core/components/icon/icons/magnifying-glass.js';
import '@sebgroup/green-core/components/icon/icons/bell.js';
import '@sebgroup/green-core/components/icon/icons/star.js';
import '@sebgroup/green-core/components/icon/icons/people.js';
import '@sebgroup/green-core/components/icon/icons/globus.js';
import '../berry/berry';

const meta: Meta = {
  title: 'Intranet/Menu button',
  component: 'menu-button',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <menu-button slot="lead">
      <gds-icon-magnifying-glass width="24" height="24" slot="lead"></gds-icon-magnifying-glass>
        Search
    </menu-button>`
};
export const Example_selected_state: Story = {
  render: () => html`
    <menu-button slot="trail" selected>
      <gds-icon-magnifying-glass width="24" height="24" solid slot="lead"></gds-icon-magnifying-glass>
        Search
    </menu-button>`
};
export const Notification: Story = {
  render: () => html`
    <menu-button slot="trail">
        <gds-icon-bell width="24" height="24" slot="trail"></gds-icon-bell>
        Notification
    </menu-button>`
};
export const Notification_unread: Story = {
  render: () => html`
    <menu-button slot="trail">
        <berry-component slot="trail">3</berry-component>
        <gds-icon-bell width="24" height="24" slot="trail"></gds-icon-bell>
        Notification
    </menu-button>
    <menu-button slot="trail">
        <gds-icon-bell width="24" height="24" slot="trail"></gds-icon-bell>
        Notification
    </menu-button>
    <menu-button slot="trail">
        <gds-icon-bell width="24" height="24"  slot="trail"></gds-icon-bell>
        Notification
    </menu-button>`
};
export const My_shortcuts: Story = {
  render: () => html`
    <menu-button slot="trail">
        <gds-icon-star width="24" height="24" slot="trail"></gds-icon-star>
        My shortcuts
    </menu-button>`
};
export const Profile: Story = {
  render: () => html`
    <menu-button slot="trail">
        <gds-icon-people width="24" height="24" slot="trail"></gds-icon-people>
        Profile
    </menu-button>`
};
export const Search: Story = {
  render: () => html`
    <menu-button slot="trail">
      <gds-icon-magnifying-glass width="24" height="24" slot="lead"></gds-icon-magnifying-glass>
        Search
    </menu-button>`
};
export const Settings: Story = {
  render: () => html`
    <menu-button slot="trail">
    <gds-icon-globus width="24" height="24" slot="trail"></gds-icon-globus>
      Other countries
    </menu-button>`
};
export const Dubble_icon: Story = {
  render: () => html`
    <menu-button slot="trail">
      <gds-icon-magnifying-glass width="24" height="24" slot="lead"></gds-icon-magnifying-glass>
      <gds-icon-people width="24" height="24" slot="trail"></gds-icon-people>
        Search a user
    </menu-button>`
};
export const About_SEB: Story = {
  render: () => html`
    <menu-button type="button" label="button">
        About SEB
    </menu-button>`
};