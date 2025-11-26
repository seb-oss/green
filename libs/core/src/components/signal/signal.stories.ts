import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './signal'
import '../fab'
import '../flex'

const meta: Meta = {
  title: 'Components/Signal',
  component: 'gds-signal',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-signal'),
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

/**
 * A signal is used to draw attention to notifications and new content.<br/>
 */
export const Signal: Story = {
  ...DefaultParams,
  name: 'Signal',
}

/**
 * The signal's style matches the button's rank and variant by default. <br/>
 * The color can be customized using the `color` property. It accepts as value all the content color tokens.
 *
 * Color tokens: <a href="https://seb.io/studio/colors" target="_blank">seb.io/studio/colors</a>
 */
export const Color: Story = {
  ...DefaultParams,
  name: 'Color',
  render: (args) => html`
    <gds-flex gap="4xl">
      <gds-signal></gds-signal>
      <gds-signal color="positive-01"></gds-signal>
      <gds-signal color="negative-01"></gds-signal>
      <gds-signal color="notice-01"></gds-signal>
    </gds-flex>
  `,
}

/**
 * Signal can be used on the FAB by setting it as trail slot element.
 */
export const Usage: Story = {
  ...DefaultParams,
  name: 'Usage',
  render: (args) => html`
    <gds-flex height="200px">
      <gds-fab inset="auto 40px 40px auto">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  `,
}
