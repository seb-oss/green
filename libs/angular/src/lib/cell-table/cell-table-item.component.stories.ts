import type { Meta, StoryObj } from '@storybook/angular'
import { CellTableItemComponent } from './cell-table-item.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<CellTableItemComponent> = {
  component: CellTableItemComponent,
  title: 'CellTableItemComponent',
}
export default meta
type Story = StoryObj<CellTableItemComponent>

export const Primary: Story = {
  args: {
    valueType: 'string',
    id: '',
  },
}

export const Heading: Story = {
  args: {
    valueType: 'string',
    id: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/cell-table-item works!/gi)).toBeTruthy()
  },
}
