import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'
import './index.ts'

// Needed for components that only have 2016 style so far
import { registerTransitionalStyles } from '../../transitional-styles.ts'
registerTransitionalStyles()

/**
 * [Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/calendar)
 *
 * The calendar component is a visual representation of a calendar that allows users to select a date.
 */
const meta: Meta = {
  title: 'Components/Calendar',
  component: 'gds-calendar',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: {
      expanded: true,
    },
  },
  args: {},
}

export const Basic: Story = {
  ...DefaultParams,
}

/**
 * !!! Add usage info here !!!
 */
export const Usage: Story = {
  ...DefaultParams,
  render: (args) => html`<gds-calendar></gds-calendar>`,
}
