import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './radio'
import '../flex/flex'

const meta: Meta = {
  title: 'Components/Radio',
  component: 'gds-radio',
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
}

/**
 * TODO: Add documentation
 */
export const RadioButton: Story = {
  ...DefaultParams,
  name: 'radio',
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
export const States: Story = {
  ...DefaultParams,
  name: 'States',
  render: () => html`
    <gds-flex>
      <gds-radio></gds-radio>
    </gds-flex>
  `,
}
