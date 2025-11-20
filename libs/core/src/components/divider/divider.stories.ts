import type { Meta, StoryObj } from '@storybook/web-components-vite'

import './divider'
import '../flex'
import '../card'

import { html } from 'lit'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

/**
 * Divider creates visual and semantic separation between content.
 *
 * Add `role="presentation"` to the divider if you only want a visual separation.
 *
 * The divider can be customized with different properties like color and size.
 *
 *
 * > Divider should not be used as a border for a container. In that case, use the border property of the container instead.
 */
const meta: Meta = {
  title: 'Components/Divider',
  component: 'gds-divider',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-divider'),
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
}

export const Divider: Story = {
  ...DefaultParams,
  name: 'Divider',
  render: (args) => html` <gds-divider color="" size="2xl"></gds-divider>`,
}

/**
 * The `gds-divider` accepts all the border tokens as color value.
 *
 * Example:
 *
 * ```html
 * <gds-divider color="subtle-01"></gds-divider>
 * <gds-divider color="subtle-02"></gds-divider>
 * <gds-divider color="inverse"></gds-divider>
 * ```
 *
 */
export const Color: Story = {
  ...DefaultParams,
  name: 'Color',
  render: (args) =>
    html` <gds-flex flex-direction="column" gap="xl">
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>interactive</gds-text>
          <gds-divider color="interactive" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>subtle-01</gds-text>
          <gds-divider color="subtle-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>subtle-02</gds-text>
          <gds-divider color="subtle-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>strong</gds-text>
          <gds-divider color="strong" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>inverse</gds-text>
          <gds-divider color="inverse" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>information-01</gds-text>
          <gds-divider color="information-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>information-02</gds-text>
          <gds-divider color="information-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>positive-01</gds-text>
          <gds-divider color="positive-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>

      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>positive-02</gds-text>
          <gds-divider color="positive-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>negative-01</gds-text>
          <gds-divider color="negative-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>negative-02</gds-text>
          <gds-divider color="negative-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>warning-01</gds-text>
          <gds-divider color="warning-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>warning-02</gds-text>
          <gds-divider color="warning-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>notice-01</gds-text>
          <gds-divider color="notice-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>notice-02</gds-text>
          <gds-divider color="notice-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>`,
}

/**
 * In addition to the color and size properties, the divider component also supports the opacity property.
 *
 * Example:
 *
 * ```html
 * <gds-divider opacity="0.2"></gds-divider>
 * <gds-divider opacity="0.4"></gds-divider>
 * <gds-divider opacity="0.6"></gds-divider>
 * <gds-divider opacity="0.8"></gds-divider>
 * ```
 */
export const Opacity: Story = {
  ...DefaultParams,
  name: 'Opacity',
  render: (args) =>
    html` <gds-flex flex-direction="column" gap="xl">
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Opacity: 0.6</gds-text>
          <gds-divider color="" size="2xl" opacity="0.6"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Opacity: 0.3</gds-text>
          <gds-divider color="" size="4xl" opacity="0.4"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Opacity: 0.2</gds-text>
          <gds-divider color="" size="6xl" opacity="0.2"></gds-divider>
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
 *
 * > The size property doesn't affect the size of the border itself but the space around the divider.
 */
export const Size: Story = {
  ...DefaultParams,
  name: 'Size',
  render: (args) =>
    html` <gds-flex flex-direction="column" gap="xl">
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Size: 2xl</gds-text>
          <gds-divider color="" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Size: 4xl</gds-text>
          <gds-divider color="" size="4xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Size: 6xl</gds-text>
          <gds-divider color="" size="6xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>`,
}
