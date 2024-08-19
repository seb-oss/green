import type { Meta, StoryObj } from '@storybook/web-components'

import { html } from 'lit'

/**
 * The `gds-theme` is a custom element that provides tokens and high level styling that lives system wide.
 *
 * It is mandatory and all component should be wrapped in a `gds-theme` element.
 *
 * @status beta
 *
 */

const meta: Meta = {
  title: 'Docs/Theme',
  component: 'gds-theme',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { disable: true },
  },
}

/**
 * Card
 */

export const Theme: Story = {
  ...DefaultParams,
  render: (args) => html` <gds-theme> Theme example </gds-theme> `,
}
