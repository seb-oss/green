import type { Meta, StoryObj } from '@storybook/web-components'

import { html } from '../../scoping.js'

import './link.js'
import '../popover/popover.js'
import '../flex/flex.js'
import '../card/card.js'
import '../text/text.js'
import '../divider/divider.js'
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
    // 'text-decoration': 'underline',
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
 * A link component has a `text-decoration` property that accepts all valid CSS `text-decoration` values.
 *
 * It also supports setting `text-decoration` or disable on hover by using the `hover:` prefix.
 *
 * ```html
 * <gds-link text-decoration="hover:none">
 *    Underline on Hover
 * </gds-link>
 * ```
 */
export const TextDecoration: Story = {
  ...DefaultParams,
  name: 'Text Decoration',
  render: () => html`
    <gds-flex gap="4xl" width="600px" flex-direction="column">
      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Underlined</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="underline"> Link text </gds-link>
        </gds-flex>
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">No Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="none"> Link text </gds-link>
        </gds-flex>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Underline Hover + Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link variant="secondary">
            Link text
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-link>
        </gds-flex>

        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">No underline on hover</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="underline; hover:none">
            Link text
          </gds-link>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `,
}
