import type { Meta, StoryObj } from '@storybook/angular'
import { NggDropdownComponent } from './dropdown.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NggDropdownComponent> = {
  component: NggDropdownComponent,
  title: 'NggDropdownComponent',
}
export default meta
type Story = StoryObj<NggDropdownComponent>

export const Primary: Story = {
  args: {
    id: '',
    loop: false,
    display: 'label',
    useValue: 'value',
    label: '',
    valid: false,
    invalid: false,
    syncPopoverWidth: false,
    hideLabel: false,
    maxHeight: 0,
    multiSelect: false,
    searchable: false,
    value: '',
  },
}

export const Heading: Story = {
  args: {
    id: '',
    loop: false,
    display: 'label',
    useValue: 'value',
    label: '',
    valid: false,
    invalid: false,
    syncPopoverWidth: false,
    hideLabel: false,
    maxHeight: 0,
    multiSelect: false,
    searchable: false,
    value: '',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/dropdown works!/gi)).toBeTruthy()
  },
}
