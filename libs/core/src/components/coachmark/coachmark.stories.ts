import type { Meta, StoryObj } from '@storybook/web-components'

import './index.ts'

/**
 * Coach marks are contextual tips that focus' on making the user aware of a new feature, the benefits of an existing one or a moved feature within an interface.
 */
const meta: Meta = {
  title: 'Components/Coachmark',
  component: 'gds-coachmark',
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
    controls: { expanded: true },
  },
  args: {
    innerHTML: ``,
  },
}

/**
 * !!! Add some info about how to use the coachmark component here. !!!
 */
export const Usage: Story = {
  ...DefaultParams,
}
