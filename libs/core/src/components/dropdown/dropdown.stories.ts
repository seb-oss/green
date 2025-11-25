import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import { argTablePropsFor } from '../../../.storybook/argTableProps.ts'

import './index.ts'
import '../flex/flex.ts'
import '../icon/icons/push.ts'

import { ifDefined } from 'lit/directives/if-defined.js'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/dropdown)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/component-dropdown)
 *
 * A dropdown enables the user to choose one or multiple options from a list.
 *
 * The dropdown can be searchable, allowing users to filter the options by typing in the input
 * field, and it also supports both single and multiple selection.
 */
const meta: Meta = {
  title: 'Components/Dropdown',
  component: 'gds-dropdown',
  subcomponents: { GdsOption: 'gds-option' },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-dropdown'),
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
    options: {
      control: { type: 'array' },
    },
  },
  args: {
    innerHTML: `
      <span slot="extended-supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <gds-icon-push slot="lead"></gds-icon-push>
      <gds-option value="1701-D-1">Enterprise 1701-D</gds-option>
      <gds-option value="falcon-1">Millenium Falcon</gds-option>
      <gds-option value="defiant-1">Defiant</gds-option>
      <gds-option value="voyager-1">Voyager</gds-option>
      <gds-option value="prometheus-1">Prometheus</gds-option>
      <gds-option value="discovery-1">Discovery</gds-option>
      <gds-option value="columbia-1">Columbia</gds-option>
    `,
    label: 'Select an option',
    supportingText: 'Label support text',
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
      supporting-text="Label support text"
    >
      <span slot="extended-supporting-text"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
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
  render: (args) => {
    const optionTemplate = (slot?: string) =>
      html` <gds-flex
        slot="${ifDefined(slot)}"
        gap="xs"
        width="100%"
        justify-content="space-between"
      >
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text font="detail-regular-s">Account</gds-text>
          <gds-text>123 456</gds-text>
        </gds-flex>
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text font="detail-regular-s" text-align="end">Balance</gds-text>
          <gds-text text-align="end">9 654,00</gds-text>
        </gds-flex>
      </gds-flex>`

    return html`
      <gds-dropdown
        width="250px"
        onchange="document.getElementById('trigger-value').innerText = event.target.value"
      >
        ${optionTemplate('trigger')}
        <gds-option value="v1">${optionTemplate()}</gds-option>
        <gds-option value="v2">${optionTemplate()}</gds-option>
        <gds-option value="v3">${optionTemplate()}</gds-option>
      </gds-dropdown>
    `
  },
}

/**
 * Normally, the popover will never be narrower than the trigger, but may be wider if the option contents are wider.
 * Optionally, the width of the popover can be locked to the width of the trigger by setting the `sync-popover-width` attribute.
 */
export const SyncedPopoverWidth: Story = {
  ...DefaultParams,
  name: 'Synced popover width',
  render: (args) => html`
    <gds-dropdown
      label="Synced popover width"
      sync-popover-width
      style="width: 200px"
    >
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
    <gds-dropdown label="Select tech" hide-label>
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
    <gds-dropdown label="Select tech">
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

/**
 * To make it easy for users to clear a field, an x-icon button can be placed at the end of the field. This is commonly used in search/filter forms.
 */
export const Clearable: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-dropdown label="Select tech" value="teleportation" clearable>
      <gds-option isplaceholder>None</gds-option>
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
 * In order to show a search field on the dropdown, set the `searchable` attribute.
 */
export const Searchable: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-dropdown label="Select tech" searchable>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
      <gds-option value="ai">Artificial Intelligence</gds-option>
      <gds-option value="robotics">Robotics</gds-option>
      <gds-option value="quantum-computing">Quantum Computing</gds-option>
      <gds-option value="biotechnology">Biotechnology</gds-option>
      <gds-option value="genetic-engineering">Genetic Engineering</gds-option>
      <gds-option value="holography">Holography</gds-option>
      <gds-option value="fusion-power">Fusion Power</gds-option>
      <gds-option value="antimatter">Antimatter</gds-option>
      <gds-option value="dark-matter">Dark Matter</gds-option>
      <gds-option value="neural-interfaces">Neural Interfaces</gds-option>
      <gds-option value="exoskeletons">Exoskeletons</gds-option>
      <gds-option value="space-elevators">Space Elevators</gds-option>
      <gds-option value="terraforming">Terraforming</gds-option>
      <gds-option value="nanobots">Nanobots</gds-option>
      <gds-option value="smart-materials">Smart Materials</gds-option>
      <gds-option value="augmented-reality">Augmented Reality</gds-option>
      <gds-option value="virtual-reality">Virtual Reality</gds-option>
      <gds-option value="brain-computer-interface"
        >Brain-Computer Interface</gds-option
      >
      <gds-option value="cybersecurity">Cybersecurity</gds-option>
      <gds-option value="biometrics">Biometrics</gds-option>
    </gds-dropdown>
  `,
}

/**
 * Use the `multiple` attribute to allow multiple selections. The selected values will be displayed
 */
export const Multiple: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-dropdown label="Select tech" searchable multiple clearable>
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

/**
 * The dropdown supports the combobox pattern with the `combobox` attribute.
 *
 * Use combobox when the user needs to have the option of entering a custom value but is also helped by a list of predefined options.
 *
 * Don't use combobox if you only need a searchable dropdown but don't want to allow custom values. Use the `searchable` attribute instead in that case.
 *
 * ***Note:***
 * - The `combobox` attribute doesn't work with the `multiple` attribute. If both are used, the `combobox` attribute will be ignored.
 * - Custom trigger content will not be rendered when the `combobox` attribute is used, since it will be replaced with an input element internally.
 * - Never combine the `searchable` attribute with the `combobox` attribute, since the combobox input is already used for filtering.
 * - For practical reasons, mobile styles are disabled when the `combobox` attribute is used.
 */
export const Combobox: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-dropdown label="Favorite sci-fi tech" combobox>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
      <gds-option value="ai">Artificial Intelligence</gds-option>
      <gds-option value="robotics">Robotics</gds-option>
      <gds-option value="quantum-computing">Quantum Computing</gds-option>
      <gds-option value="biotechnology">Biotechnology</gds-option>
      <gds-option value="genetic-engineering">Genetic Engineering</gds-option>
      <gds-option value="holography">Holography</gds-option>
      <gds-option value="fusion-power">Fusion Power</gds-option>
      <gds-option value="antimatter">Antimatter</gds-option>
      <gds-option value="dark-matter">Dark Matter</gds-option>
      <gds-option value="neural-interfaces">Neural Interfaces</gds-option>
      <gds-option value="exoskeletons">Exoskeletons</gds-option>
      <gds-option value="space-elevators">Space Elevators</gds-option>
      <gds-option value="terraforming">Terraforming</gds-option>
      <gds-option value="nanobots">Nanobots</gds-option>
      <gds-option value="smart-materials">Smart Materials</gds-option>
      <gds-option value="augmented-reality">Augmented Reality</gds-option>
      <gds-option value="virtual-reality">Virtual Reality</gds-option>
      <gds-option value="brain-computer-interface"
        >Brain-Computer Interface</gds-option
      >
      <gds-option value="cybersecurity">Cybersecurity</gds-option>
      <gds-option value="biometrics">Biometrics</gds-option>
    </gds-dropdown>
  `,
}

export const Validation: Story = {
  ...DefaultParams,
  render: () => html`
    <gds-dropdown
      label="Select tech"
      searchable
      @change=${(e: any) => e.target.reportValidity()}
      .validator=${{
        validate: (el: any) => {
          if (!el.value) {
            return [
              {
                ...el.validity,
                valid: false,
                customError: true,
              },
              'Please select a technology',
            ]
          }
          if (el.value === 'warp') {
            return [
              {
                ...el.validity,
                valid: false,
                customError: true,
              },
              'Warp drive is not yet available',
            ]
          }
        },
      }}
    >
      <gds-option value="" isplaceholder>Select a technology</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `,
}

export const Disabled: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-dropdown label="Select tech" searchable disabled>
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
