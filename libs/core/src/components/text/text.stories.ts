import type { Meta, StoryObj } from '@storybook/web-components'
import '../../../../../dist/libs/core/src/components/card/index.js'
import '../../../../../dist/libs/core/src/components/container/index.js'
import '../../../../../dist/libs/core/src/components/icon/icons/arrow-down.js'
import '../../../../../dist/libs/core/src/components/icon/icons/arrow-right.js'
import { html } from 'lit'

/**
 * The `gds-text`
 *
 * ## Usage
 *
 */
const meta: Meta = {
  title: 'Components/Layouts/Text',
  component: 'gds-text',
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
  argTypes: {},
}

/**
 * Headings
 */

export const Card: Story = {
  ...DefaultParams,
  name: 'Headings',
  render: (args) =>
    html` <gds-card shadow="s{xs} m{xs} l{s}" radius="m">
      <gds-container
        padding="s{xs} m{l} l{2xl}"
        display="flex"
        align="center"
        justify="center"
        gap="xl"
      >
        <span>Default</span> <gds-icon-arrow-down></gds-icon-arrow-down>

        <gds-button>
          Button
          <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
        </gds-button>
      </gds-container>
    </gds-card>`,
}
