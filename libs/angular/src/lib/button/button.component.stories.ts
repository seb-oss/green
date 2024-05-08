import type { Meta, StoryObj } from '@storybook/angular'
import { NggButtonComponent } from './button.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NggButtonComponent> = {
  component: NggButtonComponent,
  title: 'NggButtonComponent',
}
export default meta
type Story = StoryObj<NggButtonComponent>

export const Primary: Story = {
  args: {},
}

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/button works!/gi)).toBeTruthy()
  },
}
