import type { Meta, StoryObj } from '@storybook/web-components'

import { html } from '../../scoping.js'

import './link.js'
import '../popover/popover.js'
import '../flex/flex.js'
import '../card/card.js'
import '../icon/icons/magnifying-glass.js'
import '../icon/icons/bell.js'
import '../icon/icons/star.js'
import '../icon/icons/people.js'
import '../icon/icons/globus.js'
import '../icon/icons/square-arrow-top-right.js'
import '../icon/icons/arrow-right.js'
import '../icon/icons/cain-link.js'

const meta: Meta = {
  title: 'Components/Link',
  component: 'gds-link',
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

// export const Basic: Story = {
//   ...DefaultParams,
// }

/**
 *
 */
export const Lead: Story = {
  ...DefaultParams,
  render: () =>
    html` <gds-link>
      <gds-icon-cain-link slot="lead"></gds-icon-cain-link>
      Link text
    </gds-link>`,
}

/**
 *
 */
export const Trail: Story = {
  ...DefaultParams,
  render: () =>
    html` <gds-link>
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>`,
}

/**
 *
 */
export const Disabled: Story = {
  ...DefaultParams,
  render: () =>
    html` <gds-link disabled>
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>`,
}
