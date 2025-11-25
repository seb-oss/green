import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import { argTablePropsFor } from '../../../.storybook/argTableProps.ts'

import './index.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/filter-chips)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/component-filter-chip)
 *
 * Filter chip allows users to narrow down the data they want to see on the page.
 */
const meta: Meta = {
  title: 'Components/Filter chips',
  component: 'gds-filter-chips',
  subcomponents: { FilterChip: 'gds-filter-chip' },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-filter-chips'),
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
  argTypes: {
    chips: {
      control: { type: 'array' },
    },
  },
  args: {
    innerHTML: `<gds-filter-chip value="1">Item 1</gds-filter-chip>
<gds-filter-chip value="2">Item 2</gds-filter-chip>
<gds-filter-chip value="3">Item 3</gds-filter-chip>`,
  },
}

export const Basic: Story = {
  ...DefaultParams,
}

/**
 * This component works like many other types of input controls. A `value` property holds the currently
 * selcted value/values and a `change` event is emitted when the value changes.
 *
 * ## Single select
 *
 * By default, the filter chips component is single select. Each filter-chip needs to have a unique value
 * attribute. This determines the value of the parent components, and which chip is selected.
 * Chips without value cannot be selected.
 *
 * **Note:** It is important to remember to set the label attribute. Omitting it will cause poor
 * accessibility for screen reader useSharedState. Internally in the component, the label attribute
 * will be used to set `aria-label` for the appropriate element.
 */
export const Usage: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-filter-chips
      value="top-news"
      label="Pick news channel"
      onchange="document.getElementById('sel').innerText = event.target.value"
    >
      <gds-filter-chip value="all">All</gds-filter-chip>
      <gds-filter-chip value="top-news">Top news</gds-filter-chip>
      <gds-filter-chip value="division">Division</gds-filter-chip>
      <gds-filter-chip value="global">Global</gds-filter-chip>
      <gds-filter-chip value="country">Country</gds-filter-chip>
      <gds-filter-chip value="lcfi">
        Large Corporate & Financial Institutions
      </gds-filter-chip>
    </gds-filter-chips>
    <div style={{ marginTop: '1rem' }}>
      Selected: <span id="sel">top-news</span>
    </div>
  `,
}

/**
 * Setting the `multiple` attribute will allow users to select multiple filter chips. The value of the
 * component will be an array of the selected chip values.
 */
export const MultiSelect: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-filter-chips
      value="top-news,global"
      label="Pick news channels"
      multiple
    >
      <gds-filter-chip value="all">All</gds-filter-chip>
      <gds-filter-chip value="top-news">Top news</gds-filter-chip>
      <gds-filter-chip value="division">Division</gds-filter-chip>
      <gds-filter-chip value="global">Global</gds-filter-chip>
      <gds-filter-chip value="country">Country</gds-filter-chip>
      <gds-filter-chip value="lcfi">
        Large Corporate & Financial Institutions
      </gds-filter-chip>
    </gds-filter-chips>
  `,
}

/**
 * In some cases, layout constraints may require the filter chips to collapse into a single row.
 *
 * Setting the `row-collapse` attribute will enable this behavior when the chips require more than two rows. Instead, scrolling overflow will be used to accommodate the chips.
 */
export const RowCollapse: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-filter-chips value="top-news" label="Pick news channel" row-collapse>
      <gds-filter-chip value="all">All</gds-filter-chip>
      <gds-filter-chip value="top-news">Top news</gds-filter-chip>
      <gds-filter-chip value="division">Division</gds-filter-chip>
      <gds-filter-chip value="global">Global</gds-filter-chip>
      <gds-filter-chip value="country">Country</gds-filter-chip>
      <gds-filter-chip value="lcfi">
        Large Corporate & Financial Institutions
      </gds-filter-chip>
    </gds-filter-chips>
  `,
}
