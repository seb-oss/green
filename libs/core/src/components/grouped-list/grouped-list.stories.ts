import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import './index.ts'

// Needed for components that only have 2016 style so far
import { registerTransitionalStyles } from '../../transitional-styles.ts'

registerTransitionalStyles()

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/grouped-list)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/component-list)
 *
 * ist are used to list many datapoints with labels in a structured way. They may be grouped under
 * heading and they may have a link or button added to act on the data being displayed.
 */
const meta: Meta = {
  title: 'Components/Grouped List',
  component: 'gds-grouped-list',
  subcomponents: { GdsListItem: 'gds-list-item' },
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
  argTypes: {
    items: {
      control: { type: 'array' },
    },
  },
  args: {
    innerHTML: `<gds-list-item>Item 1</gds-list-item>
<gds-list-item>Item 2</gds-list-item>
<gds-list-item>Item 3</gds-list-item>`,
    label: 'Grouped list label',
  },
}

export const Basic: Story = {
  ...DefaultParams,
}

/**
 * By default, the list items are displayed as `flex` containers with `space-between` alignment.
 */
export const WithValues: Story = {
  ...DefaultParams,
  name: 'Grouped list with values',
  render: (args) => html`
    <gds-grouped-list label="Example with values">
      <gds-list-item>
        <div>Key 1</div>
        <strong>Value 1</strong>
      </gds-list-item>
      <gds-list-item>
        <div>Key 2</div>
        <strong>Value 2</strong>
      </gds-list-item>
      <gds-list-item>
        <div>Key 3</div>
        <strong>Value 3</strong>
      </gds-list-item>
      <gds-list-item>
        <div>Key 4</div>
        <strong>Value 4</strong>
      </gds-list-item>
      <gds-list-item>
        <div>Key 5</div>
        <strong>Value 5</strong>
      </gds-list-item>
    </gds-grouped-list>
  `,
}

/**
 * Elements such as links or buttons can be slotted into the list items.
 */
export const WithValuesAndAction: Story = {
  ...DefaultParams,
  name: 'Grouped list with values and action',
  render: (args) => html`
    <gds-grouped-list label="Example with links">
      <gds-list-item>
        <div>Key 1</div>
        <strong>Value 1</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item>
        <div>Key 2</div>
        <strong>Value 2</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item>
        <div>Key 3</div>
        <strong>Value 3</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item>
        <div>Key 4</div>
        <strong>Value 4</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item>
        <div>Key 5</div>
        <strong>Value 5</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
    </gds-grouped-list>
  `,
}

/**
 * The slotted elements can be styled using inline styles or CSS classes.
 */
export const AdjustingAppearance: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-grouped-list label="Example of left aligned list">
      <gds-list-item style="justify-content: left">
        <div>Key 1</div>
        <strong>Value 1</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item style="justify-content: left">
        <div>Key 2</div>
        <strong>Value 2</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item style="justify-content: left">
        <div>Key 3</div>
        <strong>Value 3</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
    </gds-grouped-list>

    <gds-grouped-list label="Example of vertical list">
      <gds-list-item style="flex-direction: column; border-width: 0">
        <div>Key 1</div>
        <strong>Value 1</strong>
      </gds-list-item>
      <gds-list-item style="flex-direction: column; border-width: 0">
        <div>Key 2</div>
        <strong>Value 2</strong>
      </gds-list-item>
      <gds-list-item style="flex-direction: column; border-width: 0">
        <div>Key 3</div>
        <strong>Value 3</strong>
      </gds-list-item>
    </gds-grouped-list>
  `,
}
