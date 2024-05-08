import type { Meta, StoryObj } from '@storybook/angular'
import { NggAccordionComponent } from './accordion.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NggAccordionComponent> = {
  component: NggAccordionComponent,
  title: 'NggAccordionComponent',
}
export default meta
type Story = StoryObj<NggAccordionComponent>

export const Primary: Story = {
  args: {
    closeOthers: false,
  },
}

export const Heading: Story = {
  args: {
    closeOthers: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/accordion works!/gi)).toBeTruthy()
  },
}
