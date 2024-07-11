import { html } from 'lit'
import { repeat } from 'lit/directives/repeat.js'
import type { Meta, StoryObj } from '@storybook/web-components'
import './index.ts'

// Needed for components that only have 2016 style so far
import { registerTransitionalStyles } from '../../transitional-styles.ts'
registerTransitionalStyles()

/**
 * [Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/dropdown)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/component-dropdown)
 *
 * A dropdown enables the user to choose one or multiple options from a list. It's ideal for
 * situations where there are numerous predetermined choices and space is limited.
 *
 * The dropdown can be searchable, allowing users to filter the options by typing in the input
 * field, and it also suports both single and multiple selection.
 */
const meta: Meta = {
  title: 'Docs/Components/Dropdown',
  component: 'gds-dropdown',
  subcomponents: { Option: 'gds-option' },
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
    options: {
      control: { type: 'array' },
    },
  },
  args: {
    innerHTML: `<gds-option value="1701-D-1">Enterprise 1701-D</gds-option>
<gds-option value="falcon-1">Millenium Falcon</gds-option>
<gds-option value="defiant-1">Defiant</gds-option>
<gds-option value="voyager-1">Voyager</gds-option>
<gds-option value="prometheus-1">Prometheus</gds-option>
<gds-option value="discovery-1">Discovery</gds-option>
<gds-option value="columbia-1">Columbia</gds-option>`,
    label: 'Select an option',
  },
}

export const Basic: Story = {
  ...DefaultParams,
}

/**
 * `<gds-menu-heading>` can be used to create group headings in the dropdown.
 */
export const OptionHeadings: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-dropdown
      onchange="document.getElementById('selected-value').innerText = event.target.value"
      label="Select a starship"
    >
      <gds-menu-heading>Space vehicles</gds-menu-heading>
      <gds-option value="1701-D-1">Enterprise 1701-D</gds-option>
      <gds-option value="falcon-1">Millenium Falcon</gds-option>
      <gds-option value="defiant-1">Defiant</gds-option>
      <gds-option value="voyager-1">Voyager</gds-option>
      <gds-option value="prometheus-1">Prometheus</gds-option>
      <gds-option value="discovery-1">Discovery</gds-option>
      <gds-option value="columbia-1">Columbia</gds-option>
      <gds-option value="yamato-1">Yamato</gds-option>
      <gds-option value="equinox-1">Equinox</gds-option>
      <gds-option value="daedalus-1">Daedalus</gds-option>
      <gds-menu-heading>Ground vehicles</gds-menu-heading>
      <gds-option value="at-at">AT-AT</gds-option>
      <gds-option value="at-st">AT-ST</gds-option>
      <gds-option value="at-te">AT-TE</gds-option>
      <gds-option value="at-rt">AT-RT</gds-option>
      <gds-option value="at-ap">AT-AP</gds-option>
    </gds-dropdown>
    <br />
    <div>Selected starship: <span id="selected-value"></span></div>
  `,
}

/**
 * Custom content for the trigger can be provided by assigning an element to the `trigger` slot. When this slot is occupied,
 * the default trigger content will be overridden, and you will have to manage the displayed value yourself.
 */
export const CustomTrigger: Story = {
  ...DefaultParams,
  name: 'Custom trigger content',
  render: (args) => html`
    <gds-dropdown
      onchange="document.getElementById('trigger-value').innerText = event.target.value"
    >
      <div slot="trigger">
        <b>Selected: </b>
        <span id="trigger-value">v1</span>
      </div>
      <gds-option value="v1">Value 1</gds-option>
      <gds-option value="v2">Value 2</gds-option>
      <gds-option value="v3">Value 3</gds-option>
    </gds-dropdown>
  `,
}

/**
 * Normally, the popover will never be narrower than the trigger, but may be wider if the option contents are wider.
 * Optionally, the width of the popover can be locked to the width of the trigger by setting the `sync-popover-width` attribute.
 */
export const SyncedPopoverWidth: Story = {
  ...DefaultParams,
  name: 'Synced popover width',
  render: (args) => html`
    <gds-dropdown sync-popover-width style="width: 200px">
      <gds-option value="1701-D-1">
        Enterprise 1701-D is a starship from the TNG series
      </gds-option>
      <gds-option value="falcon-1">Millenium Falcon</gds-option>
      <gds-option value="defiant-1">Defiant</gds-option>
      <gds-option value="voyager-1">Voyager</gds-option>
      <gds-option value="prometheus-1">Prometheus</gds-option>
      <gds-option value="discovery-1">Discovery</gds-option>
      <gds-option value="columbia-1">Columbia</gds-option>
    </gds-dropdown>
  `,
}

/**
 * The Dropdown is available in two sizes: `small` and `medium`. `medium` is the default.
 */
export const Size: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-dropdown size="small" label="Select tech">
      <gds-option value="">Select tech</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `,
}

/**
 * A common use case for the small version is in constrained areas, such as table cells. In those cases,
 * it is also often desirable to hide the label. This can be done with the `hide-label` attribute.
 *
 * Omitting the label attribute itself is not recommended, as it would make the dropdown inaccessible to
 * screen readers.
 */
export const HiddenLabel: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-dropdown size="small" label="Select tech" hide-label>
      <gds-option value="">Select tech</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `,
}

/**
 * If you need to show a placeholder in the trigger before an option is selected, but you don't want
 * it to show in the list of options, you can mark an option as a placeholder by setting its
 * `isplaceholder` attribute.
 */
export const PlaceholderOptions: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-dropdown size="small" label="Select tech" hide-label>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `,
}
