import type { Meta, StoryObj } from '@storybook/web-components-vite'

import './icons'
import '../grid'
import '../card'
import '../badge'
import '../flex'
import '../divider'
import '../text'
import '../theme'

/**
 * An icon helps communicate meaning quickly, enhances visual hierarchy, and supports navigation or interaction.
 */
const meta: Meta = {
  title: 'Components/Icon',
  component: 'gds-icon-bank',
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

export const Basic: Story = {
  ...DefaultParams,
  args: {
    solid: false,
    size: 'xl',
  },
}

/**
 *Toggle between outline and solid icon styles using the `solid` attribute.
 *Toggle between outline and solid icon styles using the `solid` attribute.
 */

export const Solid: Story = {
  ...DefaultParams,
  args: {
    solid: true,
    size: 'xl',
  },
}

/**
 * The default icon size is equal to 1lh (1 line height). <br>
 * You can change the icon size by setting the `size` attribute. <br>
 * The size property accepts all the size tokens and also custom value like px or lh.
 *
 * ```html
 * <gds-icon-bank size="l"></gds-icon-bank>
 * <gds-icon-bank size="2xl"></gds-icon-bank>
 * <gds-icon-bank size="48px"></gds-icon-bank>
 * <gds-icon-bank size="2lh"></gds-icon-bank>
 * ```
 */

export const Size: Story = {
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    size: '2xl',
  },
}

/**
 * You can change the icon stroke by setting the `stroke` attribute.
 *
 * ```html
 * <gds-icon-bank stroke="2"></gds-icon-bank>
 * ```
 */

export const Stroke: Story = {
  ...DefaultParams,
  args: {
    solid: false,
    stroke: '2',
    size: 'xl',
  },
}

/**
 *
 * Set icon colors using the `color` attribute. Supports design system tokens and transparency.
 *
 * ```html
 * <!-- Basic color tokens -->
 * <gds-icon-ai color="primary"></gds-icon-ai>
 * <gds-icon-ai color="negative-01"></gds-icon-ai>
 *
 * <!-- With transparency -->
 * <gds-icon-ai color="primary/0.2"></gds-icon-ai>
 * <gds-icon-ai color="negative/0.5"></gds-icon-ai>
 *
 * ```
 *
 */

export const Color: Story = {
  ...DefaultParams,
  args: {
    solid: false,
    color: 'tertiary',
  },
}

/**
 * Icons have the role of `presentation`, when there is no label provided. This means that the icon will be ignored by screen readers.
 */

export const Label: Story = {
  ...DefaultParams,
  args: {
    label: 'Bank',
  },
}
