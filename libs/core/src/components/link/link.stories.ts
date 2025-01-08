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
    html` <gds-link href="#test">
      <gds-icon-cain-link slot="lead"></gds-icon-cain-link>
      Link text
    </gds-link>`,
}

/**
 * The `href` property determines the URL that the link will navigate to when clicked.
 *
 * If the `href` property is not set (i.e., it is an empty string), the component will still render as a link element (`<a>`),
 * but it will not have a valid destination. This allows the component to maintain its visual appearance and
 * styling as a link, while preventing any navigation. This behavior is useful for scenarios where you want
 * the link to appear interactive (for example, to indicate a disabled state or for use in a JavaScript event handler),
 * but without directing the user to a different page or resource.
 *
 * Additionally, this approach helps to avoid issues in single-page applications (SPAs) where links without valid `href`
 * attributes can lead to unexpected navigation or errors in the routing logic.
 */
export const Href: Story = {
  ...DefaultParams,
  name: 'HREF',
  render: () =>
    html` <gds-flex gap="4xl" width="600px" flex-direction="column">
      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">With <code>href</code></gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="underline" href="#test">
            Link text
          </gds-link>
          <small>
            <pre><code>&lt;gds-link href=&quot;#test&quot;&gt;...&lt;/gds-link&gt;</code></pre>
          </small>
        </gds-flex>
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Without <code>href</code></gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="underline"> Link text </gds-link>
          <small>
            <pre><code>&lt;gds-link&gt;...&lt;/gds-link&gt;</code></pre>
          </small>
        </gds-flex>
      </gds-flex>
    </gds-flex>`,
}

/**
 * A link component with a trailing icon.
 */
export const Trail: Story = {
  ...DefaultParams,
  name: 'Icon: Trail',
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
          <gds-text tag="small">Link with Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="underline"> Link text </gds-link>
        </gds-flex>
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link without Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="none"> Link text </gds-link>
        </gds-flex>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline on Hover and Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link>
            Link text
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-link>
        </gds-flex>

        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with No Underline on Hover</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="underline; hover:none">
            Link text
          </gds-link>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `,
}
