import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'
import './index.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/input)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://seb.io/component/input)
 *
 * @status beta
 *
 * Input fields allow users to enter text into a UI. They typically appear in forms and dialogs.
 */
const meta: Meta = {
  title: 'Docs/Components/Input',
  component: 'gds-input',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: {
      expanded: true,
    },
  },
  args: {
    label: 'Label text',
  },
}

export const Basic: Story = {
  ...DefaultParams,
}
