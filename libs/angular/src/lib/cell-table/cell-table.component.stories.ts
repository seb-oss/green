import type { Meta, StoryObj } from '@storybook/angular'
import { NggCellTableComponent } from './cell-table.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NggCellTableComponent> = {
  component: NggCellTableComponent,
  title: 'NggCellTableComponent',
}
export default meta
type Story = StoryObj<NggCellTableComponent>

export const Primary: Story = {
  args: {
    minWidth: 0,
    overflowReverse: false,
    className: '',
    headerList: [],
    rows: [],
    clickableRows: false,
    clickLabel: 'View details',
  },
}

export const Heading: Story = {
  args: {
    minWidth: 0,
    overflowReverse: false,
    className: '',
    headerList: [],
    rows: [],
    clickableRows: false,
    clickLabel: 'View details',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/cell-table works!/gi)).toBeTruthy()
  },
}
