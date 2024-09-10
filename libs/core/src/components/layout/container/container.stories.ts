import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './container'

/**
 * The `gds-container` component is a container element that can be used to wrap other components.
 *
 * @extends `gds-flex`
 *
 */
const meta: Meta = {
  title: 'Docs/Layout/Container',
  component: 'gds-container',
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
  render: (args) => html` <gds-container> Container </gds-container>`,
}

/**
 * The `margin` property can be used to set the margin of the container.
 *
 * It supports all the spacing tokens from the design system.
 * The margin can be set in the following ways:
 * - `margin="auto"`: Center aligns the container.
 * - `margin="auto 2xl 4xl auto"`: Sets the margin of the container in the following order: `top`, `right`, `bottom`, `left`.
 */
export const ContainerMargin: Story = {
  ...DefaultParams,
  name: 'Margin',
  render: (args) =>
    html` <gds-container margin="auto 2xl 4xl auto">
      Container
    </gds-container>`,
}
