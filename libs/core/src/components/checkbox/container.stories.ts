import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './container'

/**
 * The `gds-container` component is a container element that can be used to wrap other components.
 *
 * @extends `gds-checkbox`
 *
 */
const meta: Meta = {
  title: 'Components/Checkbox',
  component: 'gds-checkbox',
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

export const Container: Story = {
  ...DefaultParams,
  name: 'Container',
  render: (args) => html`<gds-container> Container </gds-container>`,
}

/**
 * The `padding` property can be used to set the padding of the container.
 *
 * It supports all the spacing tokens from the design system.
 * The padding can be set in the following ways:
 * - `padding="auto"`: Center aligns the container.
 * - `padding="auto 2xl 4xl auto"`: Sets the padding of the container in the following order: `top`, `right`, `bottom`, `left`.
 */
export const PaddingMargin: Story = {
  ...DefaultParams,
  name: 'Padding',
  render: (args) =>
    html` <gds-container padding="xl s md xs"> Container </gds-container>`,
}
