import type { Meta, StoryObj } from '@storybook/web-components-vite'

import { argTablePropsFor } from '../../../../.storybook/argTableProps.ts'

import '../index.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/filter-chips)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/component-filter-chip)
 *
 * The filter chip is a sub-component of the filter chips component, and should generally not be used on its own.
 */
const meta: Meta = {
  title: 'Components/Filter Chips/Filter Chip',
  component: 'gds-filter-chip',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-filter-chip'),
    size: {
      options: ['small', 'large'],
      control: { type: 'select' },
    },
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
  args: {
    innerText: 'Filter chip',
  },
}

export const Basic: Story = {
  ...DefaultParams,
}
