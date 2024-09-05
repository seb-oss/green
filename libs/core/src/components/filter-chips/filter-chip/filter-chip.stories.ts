import { html } from 'lit'
import { repeat } from 'lit/directives/repeat.js'
import type { Meta, StoryObj } from '@storybook/web-components'
import '../index.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/filter-chips)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/component-filter-chip)
 *
 * The filter chip is a sub-component of the filter chips component, and should generally not be used on its own.
 */
const meta: Meta = {
  title: 'Docs/Components/Filter Chips/Filter Chip',
  component: 'gds-filter-chip',
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
    controls: { expanded: true },
  },
  args: {
    innerText: 'Filter chip',
  },
}

export const Basic: Story = {
  ...DefaultParams,
}
