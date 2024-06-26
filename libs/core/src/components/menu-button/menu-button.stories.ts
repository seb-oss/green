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

export const Selected_state: Story = {
  ...DefaultParams,
  render: () =>
    html`<gds-menu-button selected>
      <gds-icon-magnifying-glass solid slot="lead"></gds-icon-magnifying-glass>
      Search
    </gds-menu-button>`,
}

export const Examples: Story = {
  ...DefaultParams,
  render: () =>
    html`<gds-menu-button>
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
        Search
      </gds-menu-button>
      <gds-menu-button>
        <gds-icon-bell slot="trail"></gds-icon-bell>
        Notification
      </gds-menu-button>
      <gds-menu-button>
        <gds-icon-people slot="trail"></gds-icon-people>
        Profile
      </gds-menu-button>`,
}
