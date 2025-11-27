import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import './div'
import '../flex'
import '../grid'
import '../card'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

/**
 *
 * `gds-div` is a base element in the declarative layout system.
 *
 * Div accepts all available style expression properties, and is also the base class for `gds-flex`, `gds-grid`, `gds-card` and `gds-text`
 */
const meta: Meta = {
  title: 'Components/Div',
  component: 'gds-div',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-div'),
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

export const Default: Story = {
  ...DefaultParams,
  args: {
    background: '01',
    border: '2xs',
    'border-radius': 'm',
    'border-color': 'subtle-01',
    width: '4xl',
    height: '4xl',
  },
}

/**
 * Here is an example of a simple layout structure using `gds-div`:
 */
export const Example: Story = {
  ...DefaultParams,
  render: (args) => html`
    <!-- This is equivalent to 'gds-flex' -->
    <gds-div
      display="flex"
      gap="xl"
      justify-content="center"
      align-items="center"
    >
      <!-- Some properties, like 'width' and 'height', accepts either tokens or arbitrary values -->
      <gds-div width="4xl" height="4xl" background="neutral-01"></gds-div>

      <!-- All style expressions properties accepts multi-viewport expressions -->
      <gds-div
        width="4xl; l{ 6xl }"
        height="4xl; l{ 6xl }"
        background="neutral-02"
        border="4xs"
      ></gds-div>

      <!-- Instead of adding 'background' and 'border-radius', take a look at 'gds-card',
           which provides pre-configured configurations of these properties -->
      <gds-div
        width="4xl"
        height="4xl"
        background="03"
        border-radius="s"
      ></gds-div>
    </gds-div>
  `,
}

/**
 * Border styling follows the same patterns as CSS and can be controlled using the shorthand properties `border`, `border-width`, `border-style`, `border-color`
 *
 * - `border-color` defaults to subtle-01
 * - `border-width` defaults to 0 (supports all spacing tokens)
 * - `border-style` defaults to solid
 *
 * To add a 1px primary border around the element:
 *
 * ```html
 * <gds-div border="4xs"></gds-div>
 * ```
 *
 * To only add border bottom:
 *
 * ```html
 * <gds-div border-width="0 0 4xs 0"></gds-div>
 * ```
 *
 * To add a 1px secodary color border on the bottom:
 *
 * ```html
 * <gds-div border-width="0 0 4xs 0" border-color="subtle-01"></gds-div>
 * ```
 */
export const CardBorder: Story = {
  ...DefaultParams,
  name: 'Border Style',
  render: (args) =>
    html`<gds-grid columns="5" gap="4xl">
      <gds-card
        variant="primary"
        border-radius="0"
        border-width="2xs 0 0 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center"> Top </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="0"
        border-width="0 2xs 0 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">Right</gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="0"
        border-width="0 0 2xs 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">
          Bottom
        </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="0"
        border-width="0 0 0 2xs"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">
          Left
        </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="0"
        border="2xs"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center"> All </gds-flex>
      </gds-card>
    </gds-grid>`,
}

/**
 *
 * Values are mapped directly from our radius tokens to maintain proportional scaling. <br />
 * View all available radius tokens and their values in Green Studio:
 * https://seb.io/studio/radius
 *
 *
 * ##### Single value
 * ```html
 * <gds-div border-radius="m">...</gds-div>
 * ```
 *
 * ##### Multiple corners / (top-left, top-right, bottom-right, bottom-left)
 * ```html
 * <gds-div border-radius="s m l xl">...</gds-div>
 * ```
 *
 */
export const BorderRadius: Story = {
  ...DefaultParams,
  args: {
    background: 'neutral-02',
    border: '2xs',
    'border-radius': 'm',
    'border-color': 'strong',
    width: '8xl',
    height: '4xl',
  },
}
