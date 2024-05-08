import type { Meta, StoryObj } from '@storybook/angular'
import { NggDatepickerComponent } from './datepicker.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NggDatepickerComponent> = {
  component: NggDatepickerComponent,
  title: 'NggDatepickerComponent',
}
export default meta
type Story = StoryObj<NggDatepickerComponent>

export const Primary: Story = {
  args: {
    hideLabel: false,
    disabledWeekends: false,
    label: '',
    isValid: null,
  },
}

export const Heading: Story = {
  args: {
    hideLabel: false,
    disabledWeekends: false,
    label: '',
    isValid: null,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/datepicker works!/gi)).toBeTruthy()
  },
}
