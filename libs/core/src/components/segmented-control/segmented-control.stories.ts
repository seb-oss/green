import { html } from 'lit'
import { repeat } from 'lit/directives/repeat.js'
import type { Meta, StoryObj } from '@storybook/web-components'
import '../../../../../dist/libs/core/src/components/segmented-control/index.js'

/**
 * [Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/segmented-control)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/component-segmentedcontrol)
 *
 * A segmented control is a group of 2-5 buttons that lets the user switch views or sort elements.
 */
const meta: Meta = {
  title: 'Components/Segmented Control',
  component: 'gds-segmented-control',
  subcomponents: { MenuItem: 'gds-segment' },
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
    items: ['Item 1', 'Item 2', 'Item 3'],
    value: 'Item 1',
  },
}

export const Basic: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-segmented-control
      .segMinWidth=${args.segMinWidth}
      seg-min-width=${args['seg-min-width']}
      size=${args.size}
      value=${args.value}
    >
      ${repeat(
        args.items,
        (item: any) => html`<gds-segment value=${item}>${item}</gds-segment>`,
      )}
    </gds-segmented-control>
  `,
}

/**
 * The `gds-segmented-control` element has a value-property that corresponds to the value of the selected segment.
 * Each segment also needs to have a unique value-property set so thateach can be distinguished.
 */
export const Usage: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-segmented-control
      value="2"
      onchange="document.getElementById('sel').innerText = event.target.value"
    >
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
      <gds-segment value="4">Fourth</gds-segment>
      <gds-segment value="5">Fifth</gds-segment>
    </gds-segmented-control>
    <div style="margin-top: 1rem">Selected: <span id="sel">2</span></div>
  `,
}

/**
 * There is a small and a medium version which can be configured using the `size` attribute.
 */
export const Small: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-segmented-control size="small" value="2">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
    </gds-segmented-control>
  `,
}

/**
 * The size of the segments can be configured using the `seg-min-width` attribute. This influences
 * how many segments will be visible at the same time. If you have long segment labels and want to
 * avoid concatenation, you can increase the `seg-min-width` attribute. But keep in mind that the
 * best practice is to keep the segment labels short.
 */
export const SegmentSize: Story = {
  ...DefaultParams,
  render: (args) => html`
    <div style="max-width: 800px">
      <gds-segmented-control seg-min-width="200" value="3">
        <gds-segment value="1">First</gds-segment>
        <gds-segment value="2">Unusually long label text</gds-segment>
        <gds-segment value="3">Third</gds-segment>
        <gds-segment value="4">Fourth</gds-segment>
        <gds-segment value="5">Fifth</gds-segment>
      </gds-segmented-control>
    </div>
  `,
}
