import type { Meta, StoryObj } from '@storybook/web-components'

import './divider'
import '../flex'
import '../card'

import { html } from 'lit'

/**
 * The `gds-divider`
 */
const meta: Meta = {
  title: 'Components/Divider',
  component: 'gds-divider',
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

export const Divider: Story = {
  ...DefaultParams,
  name: 'Divider',
  render: (args) =>
    html` <gds-divider color="primary" size="2xl"></gds-divider>`,
}

/**
 * The `gds-divider` with different colors
 * The default level on the divider is 2 and based on the level it accepts all border colors of that level colors can be found here:[Color System documentation page](./?path=/docs/style-colors--docs)
 *
 * Example:
 *
 * ```html
 * <gds-divider color="primary"></gds-divider>
 * <gds-divider color="secondary"></gds-divider>
 * <gds-divider color="inversed"></gds-divider>
 * ```
 *
 * The above example will apply the color style of 'primary'.
 */
export const Color: Story = {
  ...DefaultParams,
  name: 'Color',
  render: (args) =>
    html` <gds-flex flex-direction="column" gap="xl">
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Primary</gds-text>
          <gds-divider color="primary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Secondary</gds-text>
          <gds-divider color="secondary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Tertiary</gds-text>
          <gds-divider color="tertiary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Quarternary</gds-text>
          <gds-divider color="quarternary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Inversed</gds-text>
          <gds-divider color="inversed" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>`,
}

/**
 * The `gds-divider` with different sizes
 *
 * Example:
 *
 * ```html
 * <gds-divider size="xl"></gds-divider>
 * <gds-divider size="2xl"></gds-divider>
 * <gds-divider size="4xl"></gds-divider>
 * <gds-divider size="6xl"></gds-divider>
 * ```
 *
 * It accepts all the [size tokens from the design system](?path=/docs/style-size--docs).
 */
export const Size: Story = {
  ...DefaultParams,
  name: 'Size',
  render: (args) =>
    html` <gds-flex flex-direction="column" gap="xl">
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Primary</gds-text>
          <gds-divider color="primary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Secondary</gds-text>
          <gds-divider color="secondary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Tertiary</gds-text>
          <gds-divider color="tertiary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Quarternary</gds-text>
          <gds-divider color="quarternary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Inversed</gds-text>
          <gds-divider color="inversed" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>`,
}
