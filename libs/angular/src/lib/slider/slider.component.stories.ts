import type { Meta, StoryObj } from '@storybook/angular'
import { NggSliderComponent } from './slider.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NggSliderComponent> = {
  component: NggSliderComponent,
  title: 'NggSliderComponent',
}
export default meta
type Story = StoryObj<NggSliderComponent>

export const Primary: Story = {
  args: {
    name: `primary-slider`,
    min: 0,
    max: 100,
    step: 1,
    label: '',
    instruction: '',
    placeholder: '',
    errorMessage: '',
    hasTextbox: false,
    unitLabel: 'kr',
    disabled: false,
    value: 0,
  },
}

export const Heading: Story = {
  args: {
    name: `heading-slider`,
    min: 0,
    max: 100,
    step: 1,
    label: '',
    instruction: '',
    placeholder: '',
    errorMessage: '',
    hasTextbox: false,
    unitLabel: 'kr',
    disabled: false,
    value: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/slider works!/gi)).toBeTruthy()
  },
}
