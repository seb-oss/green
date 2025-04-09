import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import '.'

const meta: Meta = {
  title: 'Components/Checkbox',
  component: 'gds-checkbox-group',
  subcomponents: { GdsCheckbox: 'gds-checkbox' },
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-checkbox-group'),
  },
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { expanded: true },
  },
}

/**
 * TODO: Add documentation
 */
export const checkbox: Story = {
  ...DefaultParams,
  name: 'checkbox',
  args: {
    label: 'Pick options',
    supportingText: 'Label support text.',
    innerHTML: `
    <gds-checkbox label="Hello"></gds-checkbox>
    <gds-checkbox label="Hello" checked></gds-checkbox>
    `,
  },
}
