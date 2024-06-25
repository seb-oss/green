import type { Meta, StoryObj } from '@storybook/web-components'
import '../card'
import { html } from 'lit'

/**
 * The `gds-container` component is a container element that can be used to wrap other components.
 *
 * ## Usage
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
  argTypes: {
    padding: {
      control: {
        type: 'object',
        value: { l: '2xl', m: 'l', s: 'xs' },
        options: ['xs', 's', 'm', 'l', 'xl', '2xl'],
      },
    },
    gap: {
      control: {
        type: 'object',
        value: { l: '2xl', m: 'l', s: 'xs' },
        options: ['xs', 's', 'm', 'l', 'xl', '2xl'],
      },
    },
    'row-gap': {
      control: {
        type: 'object',
        value: { l: '2xl', m: 'l', s: 'xs' },
        options: ['xs', 's', 'm', 'l', 'xl', '2xl'],
      },
    },
  },
}

/**
 * Container
 */

export const Card: Story = {
  ...DefaultParams,
  name: 'Container',
  render: (args) => html` <gds-container> Container </gds-container>`,
}

export const CardGrid: Story = {
  ...DefaultParams,
  name: 'Using with Grid',
  render: (args) =>
    html` <gds-grid columns="4">
      <gds-container column="2 / -1">
        <gds-card shadow="s{xs} m{xs} l{s}" radius="xs">
          <gds-container
            padding="l{2xl} m{l} s{xs}"
            display="flex"
            align="center"
            justify="center"
          >
            L
          </gds-container>
        </gds-card>
      </gds-container>
    </gds-grid>`,
}
