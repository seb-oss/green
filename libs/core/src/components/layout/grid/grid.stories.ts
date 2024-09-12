import type { Meta, StoryObj } from '@storybook/web-components'
import './grid'
import '../card'
import '../flex'
import '../container'
import './grid.stories.css'
import { html } from 'lit'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/grid)
 *
 * The `gds-grid` is a custom element that provides a flexible grid system. It uses CSS grid layout to arrange its child elements into columns. This component is highly customizable and responsive, allowing you to specify the number of `columns`, `gap`, `padding`, and fluidity for different devices with automated column size based on the content using the `auto-columns` attribute.
 */
const meta: Meta = {
  title: 'Docs/Layout/Grid',
  component: 'gds-grid',
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
    gap: 'm',
    padding: '0',
    columns: '4',
    innerHTML: `
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 01</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 02</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 03</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 04</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 05</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 06</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 07</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 08</gds-flex>
      </gds-card>
  `,
  },
}

export const Basic: Story = {
  ...DefaultParams,
}

/**
 * To use the `gds-grid`, you add it to your HTML and specify the number of `columns` for `desktop`, `tablet`, and `mobile` devices using the `columns` attribute. The `columns`, `gap`, `row-gap` and `padding` attributes can take either a single value or a string of three tokens separated by spaces, each prefixed with `l` for `desktop`, `m` for `tablet`, and `s` for mobile.
 *
 * If a single value is provided, it will be used for all screen sizes. If three tokens are provided, each screen size will use the value specified for it.
 *
 * ```html
 * <!-- Using a single value for all screen sizes -->
 * <gds-grid columns="2" gap="xl" row-gap="2xl" padding="2xl">
 *   <!-- Child elements here -->
 * </gds-grid>
 *
 * <!-- Using different values for each screen size -->
 * <gds-grid
 *   columns="l{8} m{4} s{2}"
 *   gap="l{xl} m{l} s{xs}"
 *   row-gap="l{xl} m{l} s{xs}"
 *   padding="l{2xl} m{l} s{xs}"
 * >
 *   <!-- Child elements here -->
 * </gds-grid>
 * ```
 *
 * #### Example
 *
 * This example shows a grid with 8 columns on desktop, 4 on tablet, and 2 on mobile. It also has a gap of `l` on desktop, `m` on tablet, and `s` on mobile. The padding is `2xl` on desktop, `l` on tablet, and `xs` on mobile.
 */
export const Usage: Story = {
  ...DefaultParams,
  render: (args) => html`
    <!-- prettier-ignore -->
    <gds-grid
      columns="s{2} m{4} l{6}"
      gap="s{s} m{s} l{s}"
    >
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 01</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 02</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 03</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 04</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 05</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 06</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 07</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 08</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 09</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 10</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 11</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 12</gds-flex>
      </gds-card>
    </gds-grid>
  `,
}

/**
 * This example shows a grid with `4` columns on all breakpoints desktop, tablet, and on mobile. It also has a gap of `2xl` on all breakpoints. The padding is `l` on all breakpoints. As well as `auto-columns` attribute is set to `100` which will make the columns to be `~100px` wide.
 */
export const AllBreakpoints: Story = {
  ...DefaultParams,
  name: 'Breakpoints + Auto Columns',
  render: (args) => html`
    <!-- prettier-ignore -->
    <gds-grid columns="4" gap="m" auto-columns="100">
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 01</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 02</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 03</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 04</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 05</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 06</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 07</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 08</gds-flex>
      </gds-card>
    </gds-grid>
  `,
}

/**
 * The `auto-columns` attribute makes the grid flexible by adjusting column widths based on available space and content size. If space is limited, it reduces the number of columns while maintaining a minimum column width based on the value provided. The `auto-columns` attribute can take either a single value or a string of three tokens separated by spaces, each prefixed with `l:` for `desktop`, `m:` for `tablet`, and `s:` for `mobile` respectively.
 *
 * It can be used without the other attributes and still fit the content on the available width. But for more granular control it can be used with the `columns`, `gap`, and `padding` attributes.
 *
 * Auto Columns, while optional, remove the need for breakpoints, adapting to content for a more flexible and responsive grid. However, they can still be used in conjunction with breakpoints to accommodate content in both cases.
 *
 * ```html
 * <!-- Using a single value for all screen sizes -->
 * <gds-grid columns="2" gap="xl" auto-columns="200">
 *   <!-- Child elements here -->
 * </gds-grid>
 *
 * <!-- Using different values for each screen size -->
 * <gds-grid columns="l{8} m{4} s{2}" auto-columns="l{200} m{100} s{80}">
 *   <!-- Child elements here -->
 * </gds-grid>
 * ```
 *
 * > The `auto-columns` attribute, used with CSS grid layout, calculates the maximum column width by subtracting the total gap width from the total available width and dividing by the number of columns. This is represented by the formula `MaxColumnWidth = (W - ((C - 1) * G)) / C`, where `W` is the total available width, `C` is the number of columns, and `G` is the width of a single gap. This calculated width is then used to set each column's width, with a minimum width of the `auto-columns` value.
 *
 * #### Example: Auto Columns without other attributes
 *
 * This example has the fluid attribute and it will adapt the content automatically based on the available width and min inline size.
 * The `auto-columns` attribute is set to `240` which will make the columns to be `240px` no matter the screen/container size.
 */
export const AutoColumns: Story = {
  ...DefaultParams,
  name: 'Auto Columns',
  render: (args) => html`
    <!-- prettier-ignore -->
    <gds-grid gap="s" auto-columns="s{200} m{220} l{240}">
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 01</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 02</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 03</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 04</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 05</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 06</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 07</gds-flex>
      </gds-card>
      <gds-card border="4xs/l2-stroke-primary" border-radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 08</gds-flex>
      </gds-card>
    </gds-grid>
  `,
}
