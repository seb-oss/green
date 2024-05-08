import type { Meta, StoryObj } from '@storybook/angular'
import { NggInPageWizardStepCardComponent } from './in-page-wizard-step-card.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NggInPageWizardStepCardComponent> = {
  component: NggInPageWizardStepCardComponent,
  title: 'NggInPageWizardStepCardComponent',
}
export default meta
type Story = StoryObj<NggInPageWizardStepCardComponent>

export const Primary: Story = {
  args: {
    stepText: '',
    title: '',
    editBtnText: '',
    nextBtnText: '',
    isCompleted: false,
    disableNext: false,
    isActive: false,
  },
}

export const Heading: Story = {
  args: {
    stepText: '',
    title: '',
    editBtnText: '',
    nextBtnText: '',
    isCompleted: false,
    disableNext: false,
    isActive: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/in-page-wizard-step-card works!/gi)).toBeTruthy()
  },
}
