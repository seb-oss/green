import type { Meta, StoryObj } from '@storybook/web-components'

import { html } from '../../../scoping.ts'
import './index.ts'
import '../../icon/icons/chevron-bottom.ts'
import '../../icon/icons/bubbles.ts'
import '../../../primitives/signal'
import { DefaultParams as ButtonDefaultParams } from '../button.stories'

/**
 * The Floating Action Button is used for functions central to the user experience, such as
 * support and help features that needs to be accessible at all times.
 *
 * The button is always floating visible in the users viewport, typically in the lower right
 * corner. This button can be used with an icon only.
 */
const meta: Meta = {
  title: 'Docs/Components/Button/FAB',
  component: 'gds-fab',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  ...ButtonDefaultParams,
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
      story: {
        height: '200px',
      },
    },
    controls: { expanded: true },
  },
  args: {
    innerHTML: `See what's new! <gds-signal slot="trail"></gds-signal>`,
  },
}

export const Usage: Story = {
  ...DefaultParams,
}

/**
 * The FAB can be used with a signal to indicate that there is something new or updated.
 *
 * Signal style matches the button rank and variant.
 */

export const RanksAndVariants: Story = {
  ...DefaultParams,
  name: 'Signal ',
  parameters: {
    ...DefaultParams.parameters,
    controls: { include: [] },
  },
  render: (args) => html`
    <gds-flex height="600px">
      <gds-fab bottom="300px">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="200px" rank="secondary">
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="100px" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab bottom="300px" right="300px" variant="positive">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="200px" right="300px" variant="positive" rank="secondary">
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="100px" right="300px" variant="positive" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab bottom="300px" right="500px" variant="negative">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="200px" right="500px" variant="negative" rank="secondary">
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="100px" right="500px" variant="negative" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  `,
}

/**
 * The FAB can be used with all the `gds-button` properties.
 */

export const IconButton: Story = {
  ...DefaultParams,
  name: 'Icon Button',
  parameters: {
    ...DefaultParams.parameters,
    controls: { include: [] },
  },
  render: (args) => html`
    <gds-flex height="600px">
      <gds-fab bottom="300px">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab bottom="200px" rank="secondary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab bottom="100px" rank="tertiary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab bottom="300px" right="300px" size="medium" variant="positive">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        bottom="200px"
        right="300px"
        size="medium"
        variant="positive"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        bottom="100px"
        right="300px"
        size="medium"
        variant="positive"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab bottom="300px" right="500px" size="small" variant="negative">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        bottom="200px"
        right="500px"
        size="small"
        variant="negative"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        bottom="100px"
        right="500px"
        size="small"
        variant="negative"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
    </gds-flex>
  `,
}
