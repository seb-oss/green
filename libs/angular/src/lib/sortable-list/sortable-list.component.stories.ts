import type { Meta, StoryObj } from '@storybook/angular'
import { NggSortableListComponent } from './sortable-list.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NggSortableListComponent> = {
  component: NggSortableListComponent,
  title: 'NggSortableListComponent',
}
export default meta
type Story = StoryObj<NggSortableListComponent>

export const Primary: Story = {
  args: {
    groups: [],
    shouldDisplayCheckboxes: false,
    isReadOnly: false,
    isDraggable: true,
    description: '',
    suffixTemplate: null,
  },
}

export const Heading: Story = {
  args: {
    groups: [],
    shouldDisplayCheckboxes: false,
    isReadOnly: false,
    isDraggable: true,
    description: '',
    suffixTemplate: null,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/sortable-list works!/gi)).toBeTruthy()
  },
}
