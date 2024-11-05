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
    innerHTML: `Link text`,
  },
}

export const Basic: Story = {
  ...DefaultParams,
}

/**
 * A link component with a leading icon.
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
 * A link component with a trailing icon.
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
 * A link component has a secondary variant that reverts the underline behavior.
 */
export const Variants: Story = {
  ...DefaultParams,
  render: () =>
    html` <gds-link variant="secondary">
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>`,
}
