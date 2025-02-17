import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './div'

import { getArgTablePropsFor } from '../../../.storybook/getArgTableCategories'

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
    ...getArgTablePropsFor('gds-div'),
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
    <gds-div display="flex" gap="xl" justify-content="center">
      <gds-div width="50px" height="50px" background="primary"></gds-div>
      <gds-div
        width="50px"
        height="50px"
        background="secondary"
        border="4xs"
      ></gds-div>
      <gds-div width="50px" height="50px" background="tertiary"></gds-div>
    </gds-div>
  `,
}
