import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './select'
import '../flex'
import '../icon/icons/bank.ts'
import '../icon/icons/rocket.ts'
import '../icon/icons/compass-round.ts'
import '../icon/icons/lightning.ts'
import '../icon/icons/sun.ts'
import '../icon/icons/square-grid-circle.ts'
import '../icon/icons/books.ts'

const meta: Meta = {
  title: 'Components/Select',
  component: 'gds-select',
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
}

/**
 * TODO: Add documentation
 */
export const select: Story = {
  ...DefaultParams,
  name: 'select',
  args: {
    placeholder: 'Science Themes',
    label: 'Label text',
    supportingText: 'Supporting text',
    innerHTML: `
      <span slot="extended-supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <gds-icon-books slot="lead"></gds-icon-books>
      <select>
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
 * Select Option
 */
export const Option: Story = {
  ...DefaultParams,
  name: 'Option',
  render: () => html`
    <gds-flex>
      <gds-select
        placeholder="Science Fields"
        label="Label text"
        supporting-text="Supporting text"
      >
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
 * Disabled
 */
export const Disabled: Story = {
  ...DefaultParams,
  name: 'Disabled',
  render: () => html`
    <gds-flex>
      <gds-select
        disabled
        placeholder="Space Missions"
        label="Label text"
        supporting-text="Supporting text"
      >
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-lightning slot="lead"></gds-icon-lightning>
        <select></select>
      </gds-select>
    </gds-flex>
  `,
}

/**
 * Validation
 */
export const Validation: Story = {
  ...DefaultParams,
  name: 'Validation',
  render: () => html`
    <gds-flex>
      <gds-select
        .invalid=${true}
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
            else if (el.value.length !== 12 || isNaN(el.value))
              return [
                {
                  ...el.validity,
                  valid: false,
                  customError: true,
                },
                'The value must be 12 characters long.',
              ]
          },
        }}
        placeholder="Space Technologies"
        label="Label text"
        supporting-text="Supporting text"
      >
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        <select>
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
 * Disabled
 */
export const Size: Story = {
  ...DefaultParams,
  name: 'Size',
  render: () => html`
    <gds-flex>
      <gds-select
        size="small"
        placeholder="Space Agencies"
        label="Label text"
        supporting-text="Supporting text"
      >
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
 * Multiple
 */
export const Multiple: Story = {
  ...DefaultParams,
  name: 'Multiple',
  render: () => html`
    <gds-flex>
      <gds-select
        placeholder="Space Phenomena"
        label="Label text"
        supporting-text="Supporting text"
      >
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
 * Size
 */
export const SelectSize: Story = {
  ...DefaultParams,
  name: 'Select Size',
  render: () => html`
    <gds-flex>
      <gds-select
        placeholder="Space Exploration"
        label="Label text"
        supporting-text="Supporting text"
      >
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
