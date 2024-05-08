import type { Meta, StoryObj } from '@storybook/angular'
import { NggSegmentedControlComponent } from './segmented-control.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NggSegmentedControlComponent> = {
  component: NggSegmentedControlComponent,
  title: 'NggSegmentedControlComponent',
}
export default meta
type Story = StoryObj<NggSegmentedControlComponent>

export const Primary: Story = {
  args: {},
}

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/segmented-control works!/gi)).toBeTruthy()
  },
}
