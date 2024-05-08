import type { Meta, StoryObj } from '@storybook/angular'
import { NggProgressCircleComponent } from './progress-circle.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NggProgressCircleComponent> = {
  component: NggProgressCircleComponent,
  title: 'NggProgressCircleComponent',
}
export default meta
type Story = StoryObj<NggProgressCircleComponent>

export const Primary: Story = {
  args: {
    theme: 'warning',
    value: 50,
  },
}

export const Heading: Story = {
  args: {
    theme: 'warning',
    value: 20,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/progress-circle works!/gi)).toBeTruthy()
  },
}
