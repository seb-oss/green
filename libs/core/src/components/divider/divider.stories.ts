import type { Meta, StoryObj } from '@storybook/web-components'

import './divider'
import '../flex'
import '../card'

import { html } from 'lit'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

/**
 * `gds-divider` is used to semantically separate content, and has the same meaning as the `<hr>` element in HTML. Add `role="presentation"` to the divider if you only want a visual separation.
 *
 * The divider can be customized with different properties like color and size.
 *
 * @status beta
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
 * Custom color
 * In addition to color tokens you can still use custom colors in cases when you need to use a color that is not part of the design system.
 *
 * Example:
 *
 * ```html
 * <gds-divider color="#fc0"></gds-divider>
 * ```
 *
 */
export const Custom: Story = {
  ...DefaultParams,
  name: 'Color Custom',
  render: (args) =>
    html` <gds-flex flex-direction="column" gap="xl">
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Custom Color: #fc0</gds-text>
          <gds-divider color="#fc0" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Custom Color: #2561ad</gds-text>
          <gds-divider color="#2561ad" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>`,
}

/**
 * Color property acceps alpha values
 * It can be used with variable colors from the design system or custom colors.
 *
 * Example:
 * ```html
 * <gds-divider color="#2561ad/0.2"></gds-divider>
 * <gds-divider color="primary/0.2"></gds-divider>
 * ```
 *
 * The alpha value should be between 0 and 1.
 */
export const Alpha: Story = {
  ...DefaultParams,
  name: 'Color Alpha',
  render: (args) =>
    html` <gds-flex flex-direction="column" gap="xl">
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>
            Token with alpha: <br />
            <code>primary/0.4</code>
          </gds-text>
          <gds-divider color="primary/0.4" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>
            Custom color with alpha: <br />
            <code>#2561ad/0.2</code>
          </gds-text>
          <gds-divider color="#2561ad/0.2" size="2xl"></gds-divider>
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
          <gds-divider color="primary" size="2xl" opacity="0.6"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Opacity: 0.3</gds-text>
          <gds-divider color="secondary" size="4xl" opacity="0.4"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Opacity: 0.2</gds-text>
          <gds-divider color="tertiary" size="6xl" opacity="0.2"></gds-divider>
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
          <gds-divider color="primary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Size: 4xl</gds-text>
          <gds-divider color="secondary" size="4xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Size: 6xl</gds-text>
          <gds-divider color="tertiary" size="6xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>`,
}
