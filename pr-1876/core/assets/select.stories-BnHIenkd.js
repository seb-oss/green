import{i as me,x as r}from"./lit-element-C_s9q329.js";import{l as he}from"./localized-decorator-iufJoRiP.js";import"./runtime-CMQcyTl6.js";import{n as p,g as be,h as g}from"./custom-element-scoping-b4lD3laR.js";import{e as ve}from"./class-map-Bz98xO8-.js";import{a as xe}from"./button-2UyQ373u.js";import"./field-base-9NuuNTWU.js";import"./chevron-bottom-CTTxLLl8.js";import"./flex-DnAdyWkx.js";import"./square-grid-circle-i7vR2O9r.js";import"./rocket-DZwDY5xD.js";import"./sun-DOIm_P80.js";import"./brand-green-BfkbhBXm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./query-p8xgzTDt.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./tokens.style-B6Zq2CtY.js";import"./transitional-styles-Cs4yqpk_.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./circle-info-BjdzhmTI.js";import"./icon-BAGUC4Iy.js";import"./card-XqiHdOAu.js";import"./style-expression-property-CYg4CGI6.js";import"./container-C9hIB2Az.js";const ye=me`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      contain: layout;
      isolation: isolate;
      gap: var(--gds-space-xs);
    }

    ::slotted(select) {
      appearance: none;
      outline: none;
      border: none;
      font: inherit;
      flex: 1;
      box-sizing: border-box;
      background: transparent;
      height: 100%;
      opacity: 0;
      position: absolute;
      z-index: 1;
      inset: 0;

      &::-ms-expand {
        display: none;
      }
    }

    .multiple ::slotted(select) {
      opacity: 1;
      position: relative;
    }

    label {
      flex: 1;
    }
  }
`;var fe=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,pe=e=>{throw TypeError(e)},a=(e,o,t,n)=>{for(var i=n>1?void 0:n?Se(o,t):o,d=e.length-1,c;d>=0;d--)(c=e[d])&&(i=(n?c(o,t,i):c(i))||i);return n&&i&&fe(o,t,i),i},Me=(e,o,t)=>o.has(e)||pe("Cannot "+t),Le=(e,o,t)=>o.has(e)?pe("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(e):o.set(e,t),M=(e,o,t)=>(Me(e,o,"access private method"),t),u,de,ce,ue,ge;let s=class extends xe{constructor(){super(...arguments),Le(this,u),this.placeholder="",this.label="",this.supportingText="",this.size="large",this.disabled=!1,this.multiple=!1,this.selectId=`select-${Math.random().toString(36).substring(2,11)}`}firstUpdated(){var n,i;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("label#placeholder"),o=(i=this.shadowRoot)==null?void 0:i.querySelector("slot:not([name])");let t=null;o&&(t=o.assignedNodes({flatten:!0}).find(c=>c.nodeType===Node.ELEMENT_NODE&&c.nodeName==="SELECT"),t&&(t.id=this.selectId,t.setAttribute("aria-describedby","supporting-text"),t.setAttribute("aria-label",this.label),this.multiple=t.multiple,this.selectElementSize=t.size||void 0,this.addEventListener("click",()=>{t==null||t.focus()}),t.addEventListener("change",()=>{if(t)return this.validate(t)}))),e&&t&&o&&o.addEventListener("change",()=>{const d=t.selectedOptions[0];e.textContent=d.textContent})}validate(e){throw new Error("Method not implemented.")}getSelectElement(){var o;const e=(o=this.shadowRoot)==null?void 0:o.querySelector("slot:not([name])");return e?e.assignedNodes({flatten:!0}).find(n=>n.nodeType===Node.ELEMENT_NODE&&n.nodeName==="SELECT"):null}_getValidityAnchor(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("SELECT")}render(){const e={multiple:this.multiple};return g`
      <gds-form-control-header class="size-${this.size}">
        <label for="input" slot="label" id="label-text">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>

      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        .multiline=${this.multiple}
        align-items=${this.multiple?"flex-start":"center"}
        class=${ve(e)}
      >
        ${M(this,u,de).call(this)}
      </gds-field-base>

      <gds-form-control-footer
        class="size-${this.size}"
        .validationMessage=${this.invalid?this.validationMessage:void 0}
      ></gds-form-control-footer>
    `}};u=new WeakSet;de=function(){return[M(this,u,ce).call(this),M(this,u,ue).call(this),M(this,u,ge).call(this)].map(o=>g`${o}`)};ce=function(){return g` <slot name="lead" slot="lead"></slot> `};ue=function(){return this.multiple?g` <slot></slot> `:g`
        <label id="placeholder">${this.placeholder||"Select"}</label>
        <slot></slot>
      `};ge=function(){if(!this.multiple)return g`
        <gds-button
          tabindex="-1"
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":"neutral"}"
          ?disabled="${this.disabled}"
          slot="action"
        >
          <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
        </gds-button>
      `};s.styles=[ye];a([p()],s.prototype,"placeholder",2);a([p()],s.prototype,"label",2);a([p({attribute:"supporting-text"})],s.prototype,"supportingText",2);a([p({type:String})],s.prototype,"size",2);a([p({attribute:"disabled",type:Boolean,reflect:!0})],s.prototype,"disabled",2);a([p({type:Boolean})],s.prototype,"multiple",2);a([p({type:Number})],s.prototype,"selectElementSize",2);s=a([be("gds-select"),he()],s);const Ye={title:"Components/Select",component:"gds-select",tags:["autodocs"],parameters:{docs:{description:{component:"The `Select` story demonstrates a default selection component with a placeholder and supporting text.\n<br>The component can be customized with a label, supporting text, and additional content."}}}},l={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},m={...l,name:"Select",args:{placeholder:"Science Themes",label:"Label text",supportingText:"Supporting text",innerHTML:`
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
    `}},h={...l,name:"Option",render:()=>r`
    <gds-flex>
      <gds-select
        placeholder="Science Fields"
        label="Label text"
        supporting-text="Supporting text"
      >
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
  `},b={...l,name:"Lead Icon",render:()=>r`
    <gds-flex>
      <gds-select
        placeholder="Green Design System"
        label="Label text"
        supporting-text="Supporting text"
      >
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
  `},v={...l,name:"Disabled",render:()=>r`
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
  `},x={...l,name:"Validation",render:()=>r`
    <gds-flex>
      <!-- .invalid=${!0} -->
      <gds-select
        placeholder="Space Technologies"
        label="Label text"
        supporting-text="Supporting text"
        .required=${!0}
        .validator=${{validate:e=>e.value===""?[{...e.validity,valid:!1,customError:!0},"Please select a valid option."]:[e.validity,""]}}
      >
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        <select>
          <option value="" selected>Incorrect Value</option>
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
  `},y={...l,name:"Size",render:()=>r`
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
  `},f={...l,name:"Multiple",render:()=>r`
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
  `},S={...l,name:"Select Size",render:()=>r`
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
  `};var L,E,C,T,w;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Select',
  args: {
    placeholder: 'Science Themes',
    label: 'Label text',
    supportingText: 'Supporting text',
    innerHTML: \`
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
    \`
  }
}`,...(C=(E=m.parameters)==null?void 0:E.docs)==null?void 0:C.source},description:{story:`### Parameters

-  **placeholder**: The placeholder text displayed before an option is selected (e.g., 'Science Themes').
-  **label**: The label text displayed above the select field (e.g., 'Label text').
-  **supportingText**: Additional text that provides context or instructions (e.g., 'Supporting text').
-  **innerHTML**: The inner HTML content that defines the options within the select dropdown. It includes:
- <strong>@slot</strong> 'extended-supporting-text'

\`\`\`html
 <span slot="extended-supporting-text">...</span>
\`\`\`
- An icon displayed alongside the select field.
- Multiple option groups (e.g., Physics, Chemistry, Biology) with specific options.`,...(w=(T=m.parameters)==null?void 0:T.docs)==null?void 0:w.description}}};var k,z,A,D,q;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Option',
  render: () => html\`
    <gds-flex>
      <gds-select
        placeholder="Science Fields"
        label="Label text"
        supporting-text="Supporting text"
      >
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
  \`
}`,...(A=(z=h.parameters)==null?void 0:z.docs)==null?void 0:A.source},description:{story:`The select component can have options, and grouping is also possible, with support for all native select attributes.

It is important to note that options must be wrapped within a native \`<select>\` element to ensure proper functionality and rendering. The \`<gds-select>\` component is designed to enhance the native select element by providing additional features such as labels, supporting text, and icons. However, the core functionality of selecting options relies on the native \`<select>\` element.

By wrapping options in a native \`<select>\`, we leverage the inherent behavior of the select element, which allows for user interaction, selection management, and accessibility features. Without this wrapping, the options would not be recognized or rendered correctly, as the native select element is responsible for handling the display and selection of options.

Therefore, it is essential to include the \`<select>\` element to maintain the expected behavior and ensure that the component functions as intended.

e.g

\`\`\`html
   <gds-select>
    <select>
      <optgroup label="Astronomy">
        <option value="cosmology">Cosmology</option>
        <option value="astrophysics">Astrophysics</option>
      </optgroup>
    </select>
  </gds-select>
\`\`\`
> In web components using Shadow DOM, options cannot be placed directly within a slot of a custom element. The native \`select\` element requires its options to be part of its own DOM structure . If placed in a slot, options will not render due to Shadow DOM encapsulation.`,...(q=(D=h.parameters)==null?void 0:D.docs)==null?void 0:q.description}}};var I,N,P,_,O;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Lead Icon',
  render: () => html\`
    <gds-flex>
      <gds-select
        placeholder="Green Design System"
        label="Label text"
        supporting-text="Supporting text"
      >
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
  \`
}`,...(P=(N=b.parameters)==null?void 0:N.docs)==null?void 0:P.source},description:{story:`The lead icon is displayed to the left of the select field.
<br>It can be used to provide additional context or to visually represent the select field's purpose.
<br>It can be set by adding an icon component to the 'lead' slot.`,...(O=(_=b.parameters)==null?void 0:_.docs)==null?void 0:O.description}}};var $,G,R,V,H;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Disabled',
  render: () => html\`
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
  \`
}`,...(R=(G=v.parameters)==null?void 0:G.docs)==null?void 0:R.source},description:{story:"The `disabled` property can be set to disable the `gds-select` field.\n<br> e.g\n\n```html\n<gds-select disabled> ... </gds-select>\n```",...(H=(V=v.parameters)==null?void 0:V.docs)==null?void 0:H.description}}};var B,F,J,j,W;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Validation',
  render: () => html\`
    <gds-flex>
      <!-- .invalid=\${true} -->
      <gds-select
        placeholder="Space Technologies"
        label="Label text"
        supporting-text="Supporting text"
        .required=\${true}
        .validator=\${{
    validate: (el: any) => {
      // Custom validation logic
      if (el.value === '') {
        return [{
          ...el.validity,
          valid: false,
          customError: true
        }, 'Please select a valid option.'];
      }
      return [el.validity, ''];
    }
  }}
      >
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        <select>
          <option value="" selected>Incorrect Value</option>
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
  \`
}`,...(J=(F=x.parameters)==null?void 0:F.docs)==null?void 0:J.source},description:{story:"Select has built-in support for form validation.<br>The validation feature is built on top of the browsers native validation features, using `ElementInternals` and `Constraint Validation API`.\n\nValidation is configured by adding a validator to a form element.<br> A validator is an object that implements the `GdsValidator` interface:\n\n```html\n<gds-select invalid></gds-select>\n```\n**@property invalid** - Indicates that the select field contains an error.",...(W=(j=x.parameters)==null?void 0:j.docs)==null?void 0:W.description}}};var Q,U,K,X,Y;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Size',
  render: () => html\`
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
  \`
}`,...(K=(U=y.parameters)==null?void 0:U.docs)==null?void 0:K.source},description:{story:"The `size` property can be set to 'small' to reduce the size of the select field.<br>\n**@property size** - The size of the select field.\n\n```html\n <gds-select size=\"small\"></gds-select>\n```",...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,te,oe,ne;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Multiple',
  render: () => html\`
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
  \`
}`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Multiple\nThe `multiple` attribute can be set to allow multiple options to be selected on the native `<select>` element.",...(ne=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};var ie,se,ae,le,re;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Select Size',
  render: () => html\`
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
  \`
}`,...(ae=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ae.source},description:{story:'The native `<select size="...">` to not be confused with property `size` <br> it is the native attribute that sets the number of visible options in a select element.\n\n```html\n <gds-select>\n <select multiple size="14">\n   ...\n </select>\n</gds-select>\n```',...(re=(le=S.parameters)==null?void 0:le.docs)==null?void 0:re.description}}};const Ze=["select","Option","Lead","Disabled","Validation","Size","Multiple","SelectSize"];export{v as Disabled,b as Lead,f as Multiple,h as Option,S as SelectSize,y as Size,x as Validation,Ze as __namedExportsOrder,Ye as default,m as select};
