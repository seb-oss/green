import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps.ts'

import './select'
import '../flex'
import '../icon/icons/bank.ts'
import '../icon/icons/rocket.ts'
import '../icon/icons/compass-round.ts'
import '../icon/icons/lightning.ts'
import '../icon/icons/sun.ts'
import '../icon/icons/square-grid-circle.ts'
import '../icon/icons/brand-green.ts'
import '../icon/icons/books.ts'

/**
 * `gds-select` is a wrapper component for the native select element.
 *
 * Use this component instead of `<gds-dropdown>` when you need to leverage the inherent behavior of the native select element, for example when native accessibility features, some of which are not currently replicable in custom dropdowns, are required. Usability on mobile devices is also sometimes better with native select elements.
 *
 * Don't use this component when you need to customize the dropdown behavior or appearance, or when you need to display complex content in the dropdown, or require multi-select functionality. While the native select element does support multi-select, it is not recommended for use in most cases.
 *
 * The wrapped select element will be cloned into the component's shadow DOM. Therefore, event listeners should only be added on the host
 * element, and not on the enclosed select element. Also, state should also be handled only through the host.
 * Setting value or selected props on the select element will not work as expected.
 */

const meta: Meta = {
  title: 'Components/Select',
  component: 'gds-select',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-select'),
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
}

/**
 * Basic example showing the select component with a label, supporting text and a lead icon.
 * The wrapped `<select>` element is making use of `<optgroup>` elements to group the options.
 */
export const Default: Story = {
  ...DefaultParams,
  name: 'Select',
  args: {
    label: 'Label text',
    supportingText: 'Supporting text',
    value: '',
    innerHTML: `
      <gds-icon-books slot="lead"></gds-icon-books>
      <select>
        <option value="">Select a value</option>
        <optgroup label="Physics">
          <option value="quantum-mechanics">Quantum Mechanics</option>
          <option value="relativity">Relativity</option>
        </optgroup>
        <optgroup label="Chemistry">
          <option value="organic-chemistry">Organic Chemistry</option>
          <option value="inorganic-chemistry">Inorganic Chemistry</option>
        </optgroup>
        <optgroup label="Biology">
          <option value="genetics">Genetics</option>
          <option value="microbiology">Microbiology</option>
          <option value="ecology">Ecology</option>
        </optgroup>
      </select>
    `,
  },
}

/**
 * It is mandatory to use a native `<select>` element with options inside `<gds-select>`. `<gds-select>` is only a wrapper that allows native select to be used seamlessly along with the other form controls in the design system.
 *
 * e.g
 *
 * ```html
 *    <gds-select>
 *     <select>
 *       <optgroup label="Astronomy">
 *         <option value="cosmology">Cosmology</option>
 *         <option value="astrophysics">Astrophysics</option>
 *       </optgroup>
 *     </select>
 *   </gds-select>
 * ```
 */

/**
 * > In web components using Shadow DOM, elements cannot be associated with each other across Shadow DOM boundaries. This is why you need to wrap a full native `select` element and it's options, rather than just putting options directly under `<gds-select>`. If placed in a slot, options would not be picked up due to the Shadow DOM encapsulation.
 */

export const Option: Story = {
  ...DefaultParams,
  name: 'Options',
  render: () => html`
    <gds-flex>
      <gds-select label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-square-grid-circle slot="lead"></gds-icon-square-grid-circle>
        <select>
          <optgroup label="Astronomy">
            <option value="cosmology">Cosmology</option>
            <option value="astrophysics">Astrophysics</option>
          </optgroup>
          <optgroup label="Geology">
            <option value="volcanology">Volcanology</option>
            <option value="seismology">Seismology</option>
          </optgroup>
        </select>
      </gds-select>
    </gds-flex>
  `,
}

/**
 * The lead icon is displayed to the left of the select field.
 * <br>It can be used to provide additional context or to visually represent the select field's purpose.
 * <br>It is set by adding an icon component to the 'lead' slot.
 */
export const Lead: Story = {
  ...DefaultParams,
  name: 'Lead Icon',
  render: () => html`
    <gds-flex>
      <gds-select label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-brand-green slot="lead"></gds-icon-brand-green>
        <select>
          <option value="green">Green Design System</option>
          <option value="carbon">Carbon Design System</option>
        </select>
      </gds-select>
    </gds-flex>
  `,
}

/**
 * The `disabled` property can be set to disable the `gds-select` field.
 * <br> e.g
 *
 * ```html
 *<gds-select disabled> ... </gds-select>
 * ```
 */
export const Disabled: Story = {
  ...DefaultParams,
  name: 'Disabled',
  render: () => html`
    <gds-flex>
      <gds-select disabled label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-lightning slot="lead"></gds-icon-lightning>
        <select>
          <option value="thunder">Thunder</option>
          <option value="lightning">Lightning</option>
        </select>
      </gds-select>
    </gds-flex>
  `,
}

/**
 * Select has built-in support for form validation.<br>The validation feature is built on top of the browsers native validation features, using `ElementInternals` and `Constraint Validation API`.
 *
 * Validation is configured by adding a validator to a form element.<br> A validator is an object that implements the `GdsValidator` interface:
 *
 * ```html
 * <gds-select invalid></gds-select>
 * ```
 * **@property invalid** - Indicates that the select field contains an error.
 *
 */
export const Validation: Story = {
  ...DefaultParams,
  name: 'Validation',
  render: () => html`
    <gds-flex>
      <gds-select
        .invalid=${true}
        label="Label text"
        supporting-text="Supporting text"
        .required=${true}
        .validator=${{
          validate: (el: any) => {
            if (el.value === '')
              return [
                {
                  ...el.validity,
                  valid: false,
                  customError: true,
                },
                'Error message.',
              ]
          },
        }}
      >
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        <select>
          <option value="">Incorrect Value</option>
          <optgroup label="Propulsion">
            <option value="ion-thrusters">Ion Thrusters</option>
            <option value="chemical-rockets">Chemical Rockets</option>
          </optgroup>
          <optgroup label="Communication">
            <option value="satellite-communication">
              Satellite Communication
            </option>
            <option value="deep-space-network">Deep Space Network</option>
          </optgroup>
        </select>
      </gds-select>
    </gds-flex>
  `,
}

/**
 * The `extended-supporting-text` slot can be used to provide extended information about the select field.<br>
 * The slot will show by default when the `show-extended-supporting-text` property is set.<br>
 * If not specified, the slot will be hidden and a companion icon will be displayed to indicate that more information is available.
 *
 * ```html
 *<gds-select show-extended-supporting-text>
 *  <span slot="extended-supporting-text">...</span>
 *  <select><option value="">...</option></select>
 *</gds-select>
 * ```
 */
export const ExtendedSupportingText: Story = {
  ...DefaultParams,
  name: 'Extended Supporting Text',
  render: () => html`
    <gds-flex
      gap="xl"
      align-items="center"
      justify-content="center"
      width="100%"
    >
      <gds-select
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        <select>
          <option value="">First option</option>
          <optgroup label="Propulsion">
            <option value="ion-thrusters">Ion Thrusters</option>
            <option value="chemical-rockets">Chemical Rockets</option>
          </optgroup>
          <optgroup label="Communication">
            <option value="satellite-communication">
              Satellite Communication
            </option>
            <option value="deep-space-network">Deep Space Network</option>
          </optgroup>
        </select>
      </gds-select>
    </gds-flex>
  `,
}

/**
 * The `size` property can be set to 'small' to reduce the size of the select field.<br>
 * **@property size** - The size of the select field.
 *
 * ```html
 *  <gds-select size="small"></gds-select>
 * ```
 */
export const Size: Story = {
  ...DefaultParams,
  name: 'Size',
  render: () => html`
    <gds-flex>
      <gds-select
        size="small"
        label="Label text"
        supporting-text="Supporting text"
      >
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-bank slot="lead"></gds-icon-bank>
        <select>
          <optgroup label="International">
            <option value="nasa">NASA</option>
            <option value="esa">ESA</option>
          </optgroup>
          <optgroup label="National">
            <option value="isro">ISRO</option>
            <option value="cnsa">CNSA</option>
          </optgroup>
        </select>
      </gds-select>
    </gds-flex>
  `,
}

/**
 * The `multiple` attribute can be set to allow multiple options to be selected on the native `<select>` element.
 *
 * However, it is not recommended to use the native select element in multi-select mode. The native select element does not provide a good user experience for multi-select, especially when there are many options. Prefer to use checkbox groups or the `<gds-dropdown>` component for multi-select functionality instead.
 */
export const Multiple: Story = {
  ...DefaultParams,
  name: 'Multiple',
  render: () => html`
    <gds-flex>
      <gds-select label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-sun slot="lead"></gds-icon-sun>
        <select multiple>
          <option value="black-holes">Black Holes</option>
          <option value="neutron-stars">Neutron Stars</option>
          <option value="supernovae">Supernovae</option>
          <option value="galaxies">Galaxies</option>
          <option value="exoplanets">Exoplanets</option>
          <option value="dark-matter">Dark Matter</option>
        </select>
      </gds-select>
    </gds-flex>
  `,
}

/**
 * The native `<select size="...">` to not be confused with property `size` <br> it is the native attribute that sets the number of visible options in a select element.
 *
 * ```html
 *  <gds-select>
 *  <select multiple size="14">
 *    ...
 *  </select>
 * </gds-select>
 * ```
 */

export const SelectSize: Story = {
  ...DefaultParams,
  name: 'Select Size',
  render: () => html`
    <gds-flex>
      <gds-select label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-compass-round slot="lead"></gds-icon-compass-round>
        <select multiple size="14">
          <optgroup label="Mars Missions">
            <option value="curiosity">Curiosity</option>
            <option value="perseverance">Perseverance</option>
            <option value="spirit">Spirit</option>
            <option value="opportunity">Opportunity</option>
          </optgroup>
          <optgroup label="Moon Missions">
            <option value="apollo-11">Apollo 11</option>
            <option value="luna-2">Luna 2</option>
            <option value="chang-e-4">Chang'e 4</option>
            <option value="artemis-1">Artemis 1</option>
          </optgroup>
          <optgroup label="Jupiter Missions">
            <option value="galileo">Galileo</option>
            <option value="juno">Juno</option>
          </optgroup>
          <optgroup label="Saturn Missions">
            <option value="cassini">Cassini</option>
            <option value="huygens">Huygens</option>
          </optgroup>
          <optgroup label="Asteroid Missions">
            <option value="hayabusa">Hayabusa</option>
            <option value="osiris-rex">OSIRIS-REx</option>
          </optgroup>
          <optgroup label="Comet Missions">
            <option value="rosetta">Rosetta</option>
            <option value="deep-impact">Deep Impact</option>
          </optgroup>
          <optgroup label="Venus Missions">
            <option value="magellan">Magellan</option>
            <option value="akatsuki">Akatsuki</option>
          </optgroup>
          <optgroup label="Mercury Missions">
            <option value="messenger">MESSENGER</option>
            <option value="bepi-colombo">BepiColombo</option>
          </optgroup>
        </select>
      </gds-select>
    </gds-flex>
  `,
}
