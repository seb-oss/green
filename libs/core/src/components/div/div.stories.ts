import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './div'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

/**
 * @status beta
 *
 * `gds-div` is a base element in the declarative layout system. It accepts all available style expression properties, and is also the base class for `gds-flex`, `gds-grid`, `gds-card` and `gds-text`
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
      <gds-div width="4xl" height="4xl" background="primary"></gds-div>

      <!-- All style expressions properties accepts multi-viewport expressions -->
      <gds-div
        width="4xl; l{ 6xl }"
        height="4xl; l{ 6xl }"
        background="secondary"
        border="4xs"
      ></gds-div>

      <!-- Instead of adding 'background' and 'border-radius', take a look at 'gds-card',
           which provides pre-configured configurations of these properties -->
      <gds-div
        width="4xl"
        height="4xl"
        background="tertiary"
        border-radius="s"
      ></gds-div>
    </gds-div>
  `,
}
