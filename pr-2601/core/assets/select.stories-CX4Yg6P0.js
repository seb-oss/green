import{x as o}from"./iframe-BrEe7A9x.js";import{a as t}from"./argTableProps-DykrQ4Uz.js";import"./select-cqQ0IacK.js";import"./flex-C6hboL-M.js";import"./sun-N0F6_wO6.js";import"./rocket-S10zvttw.js";import"./square-grid-circle-D6n9RJds.js";import"./select.component-C9z2SbeS.js";import"./localized-decorator-B1QgNj29.js";import"./form-control-host.style-8SsM0fXs.js";import"./form-control-header.component-1UEDUWT0.js";import"./badge.component-CJvL_L9e.js";import"./flex.component-CSsERzN1.js";import"./triangle-exclamation.component-TpZwIAlP.js";import"./icon.component-BJgPnnvB.js";import"./card.component-DK4yBXx1.js";import"./chevron-bottom.component-DAB8Gtrg.js";import"./sun.component-C0nDCjHY.js";import"./rocket.component-Bxzl4j78.js";import"./square-grid-circle.component-JoNp3ZxV.js";const L={title:"Components/Select",component:"gds-select",tags:["autodocs"],argTypes:{...t("gds-select")},parameters:{docs:{description:{component:`A select enables the user to choose a single option from a list.

\`gds-select\` is a wrapper component for the native select element.

Use this component instead of \`<gds-dropdown>\` when you need to leverage the inherent behavior of the native select element, for example when native accessibility features, some of which are not currently replicable in custom dropdowns, are required. Usability on mobile devices is also sometimes better with native select elements.

Don't use this component when you need to customize the dropdown behavior or appearance, or when you need to display complex content in the dropdown, or require multi-select functionality. While the native select element does support multi-select, it is not recommended for use in most cases.

The wrapped select element will be cloned into the component's shadow DOM. Therefore, event listeners should only be added on the host
element, and not on the enclosed select element. Also, state should also be handled only through the host.
Setting value or selected props on the select element will not work as expected.`}}}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},k={...e,name:"Select",args:{label:"Label text",supportingText:"Supporting text",value:"",innerHTML:`
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
    `}},q={...e,name:"Options",render:()=>o`
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
  `},C={...e,name:"Lead Icon",render:()=>o`
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
  `},T={...e,name:"Disabled",render:()=>o`
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
  `},D={...e,name:"Invalid",render:()=>o`
    <gds-flex>
      <gds-select
        invalid
        label="Label text"
        supporting-text="Supporting text"
        .required=${!0}
        error-message="This field is required"
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
  `},I={...e,name:"Extended Supporting Text",render:()=>o`
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
  `},A={...e,name:"Size",render:()=>o`
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
  `},O=["Default","Option","Lead","Disabled","Invalid","ExtendedSupportingText","Size"];export{k as Default,T as Disabled,I as ExtendedSupportingText,D as Invalid,C as Lead,q as Option,A as Size,O as __namedExportsOrder,L as default};
