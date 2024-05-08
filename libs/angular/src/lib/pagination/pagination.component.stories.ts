import type { Meta, StoryObj } from '@storybook/angular'
import { NggPaginationComponent } from './pagination.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NggPaginationComponent> = {
  component: NggPaginationComponent,
  title: 'NggPaginationComponent',
}
export default meta
type Story = StoryObj<NggPaginationComponent>

export const Primary: Story = {
  args: {
    size: 'small',
    displayPages: 5,
    length: 0,
    pageSize: 10,
    pageIndex: 0,
  },
}

export const Heading: Story = {
  args: {
    size: 'small',
    displayPages: 5,
    length: 0,
    pageSize: 10,
    pageIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/pagination works!/gi)).toBeTruthy()
  },
}
