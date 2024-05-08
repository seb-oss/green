import type { Meta, StoryObj } from '@storybook/angular'
import { NggBadgeComponent } from './badge.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NggBadgeComponent> = {
  component: NggBadgeComponent,
  title: 'NggBadgeComponent',
}
export default meta
type Story = StoryObj<NggBadgeComponent>

export const Primary: Story = {
  args: {
    badgeType: '',
    isCloseable: false,
    closeText: '',
    customColor: '',
    customBackgroundColor: '',
  },
}

export const Heading: Story = {
  args: {
    badgeType: '',
    isCloseable: true,
    closeText: '',
    customColor: '',
    customBackgroundColor: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/badge works!/gi)).toBeTruthy()
  },
}
