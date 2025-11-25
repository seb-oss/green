import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import { argTablePropsFor } from '../../../.storybook/argTableProps.ts'

import './index.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/segmented-control)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/component-segmented-control)
 *
 * SegmentedControl allows users to select a single option, immediately changing the display to reflect their selection. It is used for switching views or view options, not for navigation.
 */
const meta: Meta = {
  title: 'Components/Segmented control',
  component: 'gds-segmented-control',
  subcomponents: { GdsSegment: 'gds-segment' },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-segmented-control'),
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
    size: {
      control: { type: 'text' },
    },
  },
  args: {
    innerHTML: `<gds-segment value="1">Item 1</gds-segment>
<gds-segment value="2">Item 2</gds-segment>
<gds-segment value="3">Item 3</gds-segment>`,
    value: '1',
  },
}

export const Basic: Story = {
  ...DefaultParams,
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
 * Segments can have different widths depending on the content, and if there are too many
 * segments to fit in the container, scroll buttons will appear to the left and/or right.
 *
 * Segment with can also be controlled individually on the segments using the `width`,
 * `min-width` and `max-width` Style Expression properties.
 */
export const SegmentSize: Story = {
  ...DefaultParams,
  render: (args) => html`
    <div style="width:90vw; max-width: 556px;">
      <gds-segmented-control value="1">
        <gds-segment value="1" min-width="200px">Min-width</gds-segment>
        <gds-segment value="flaschenabfüllmaschine" max-width="150px"
          >Flaschenabfüllmaschine</gds-segment
        >
        <gds-segment value="longlonglong">Long long label</gds-segment>
        <gds-segment value="longlabel">An even longer long label</gds-segment>
        <gds-segment value="pinetrees">Pinetrees</gds-segment>
      </gds-segmented-control>
    </div>
  `,
}
