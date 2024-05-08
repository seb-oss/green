import type { Meta, StoryObj } from '@storybook/angular'
import { NggContextMenuComponent } from './context-menu.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NggContextMenuComponent> = {
  component: NggContextMenuComponent,
  title: 'NggContextMenuComponent',
}
export default meta
type Story = StoryObj<NggContextMenuComponent>

export const Primary: Story = {
  args: {
    direction: 'ltr',
    menuItems: [],
    menuItemTemplate: null,
    menuAnchorTemplate: null,
    closeOnScroll: false,
  },
}

export const Heading: Story = {
  args: {
    direction: 'ltr',
    menuItems: [],
    menuItemTemplate: null,
    menuAnchorTemplate: null,
    closeOnScroll: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/context-menu works!/gi)).toBeTruthy()
  },
}
