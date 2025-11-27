import type { Meta, StoryObj } from '@storybook/web-components-vite'

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
import '../icon/icons/chain-link.js'

import { argTablePropsFor } from '../../../.storybook/argTableProps.js'

/**
 * A link navigates users to other pages or sections of content.
 */
const meta: Meta = {
  title: 'Components/Link',
  component: 'gds-link',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-link'),
  },
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
    href: '#',
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
  name: 'Icon: Lead',
  render: () =>
    html` <gds-link href="#">
      <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
      Link text
    </gds-link>`,
}

/**
 * A link component with a trailing icon.
 */
export const Trail: Story = {
  ...DefaultParams,
  name: 'Icon: Trail',
  render: () =>
    html` <gds-link href="#">
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
          <gds-text tag="small">Link with Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="underline"> Link text </gds-link>
        </gds-flex>
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link without Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="none"> Link text </gds-link>
        </gds-flex>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline on Hover and Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#">
            Link text
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-link>
        </gds-flex>

        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with No Underline on Hover</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="underline; hover:none">
            Link text
          </gds-link>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * On the `gds-link` component, the `label` attribute is used to provide an accessible name for the link.
 *
 * It will be forwarded to the `aria-label` attribute of the underlying anchor element.
 *
 *
 * Use this when:
 * - The link contains only an icon
 * - The visual text needs a different description for screen readers
 * - Additional context is needed for accessibility
 *
 *```html
 *<!-- Icon-only link -->
 *<gds-link href="/settings" label="Open settings">
 *  <gds-icon-settings></gds-icon-settings>
 *</gds-link>
 *
 *<!-- Different screen reader text -->
 *<gds-link href="/article" label="Read full article about climate change">
 *  Read more
 *</gds-link>
 *```
 */
export const Label: Story = {
  ...DefaultParams,
  name: 'Label',
  render: () => html`
    <gds-link href="#" label="Aria label is used">
      Link with aria-label
    </gds-link>
  `,
}
