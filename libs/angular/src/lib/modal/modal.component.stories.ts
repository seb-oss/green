import type { Meta, StoryObj } from '@storybook/angular'
import { NggModalComponent } from './modal.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NggModalComponent> = {
  component: NggModalComponent,
  title: 'NggModalComponent',
}
export default meta
type Story = StoryObj<NggModalComponent>

export const Primary: Story = {
  args: {
    header: '',
    confirmLabel: '',
    dismissLabel: '',
    hideHeader: false,
    hideFooter: false,
  },
}

export const Heading: Story = {
  args: {
    header: '',
    confirmLabel: '',
    dismissLabel: '',
    hideHeader: false,
    hideFooter: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/modal works!/gi)).toBeTruthy()
  },
}
