import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import '.'

import { html } from 'lit'

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
    <gds-checkbox label="First option" supporting-text="This is the first option" value="first"></gds-checkbox>
    <gds-checkbox label="Second option" supporting-text="This is the second option" value="second" checked></gds-checkbox>
    <gds-checkbox label="Third option" supporting-text="This is the third option" value="third"></gds-checkbox>
    `,
  },
}

/**
 * It's possible to use a single checkbox without enclosing it in a group.
 *
 * However, single checkboxes does not support error messages, so if you need that, wrap it in a group.
 */
export const Single: Story = {
  ...DefaultParams,
  render: () => html`<gds-checkbox label="A single checkbox"></gds-checkbox>`,
}
