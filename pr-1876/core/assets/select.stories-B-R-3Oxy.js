import{i as xe,x as p}from"./lit-element-C_s9q329.js";import{l as ye}from"./localized-decorator-iufJoRiP.js";import"./runtime-CMQcyTl6.js";import{n as c,g as fe,h as m}from"./custom-element-scoping-BRwcB39g.js";import{a as Se}from"./query-p8xgzTDt.js";import{e as Me}from"./class-map-Bz98xO8-.js";import{a as Le}from"./button-Ck5JCMxE.js";import"./field-base-DipKZHhv.js";import"./chevron-bottom-bIUUPBrH.js";import"./flex-DYJ5h7D3.js";import"./square-grid-circle-BxZXT1pg.js";import"./rocket-By36vGMQ.js";import"./sun-B6-q3uuw.js";import"./brand-green-B0sSgmTm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./tokens.style-SarioPsh.js";import"./transitional-styles-CXWlQDsX.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./triangle-exclamation-B-wIpajX.js";import"./icon-B0MZHPzy.js";import"./card-aIEaOFVy.js";import"./style-expression-property-Dbto4vYM.js";import"./container-CQV8FXoH.js";import"./badge-Bk0Oy8yr.js";const Ce=xe`
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

    .select-container {
      display: contents;
    }

    select,
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

    /* .multiple ::slotted(select) { */
    select[multiple] {
      opacity: 1;
      position: relative;
      width: 100%;
    }

    label {
      flex: 1;
    }
  }
`;var Ee=Object.defineProperty,we=Object.getOwnPropertyDescriptor,ue=e=>{throw TypeError(e)},s=(e,o,t,l)=>{for(var i=l>1?void 0:l?we(o,t):o,d=e.length-1,u;d>=0;d--)(u=e[d])&&(i=(l?u(o,t,i):u(i))||i);return l&&i&&Ee(o,t,i),i},Te=(e,o,t)=>o.has(e)||ue("Cannot "+t),ke=(e,o,t)=>o.has(e)?ue("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(e):o.set(e,t),C=(e,o,t)=>(Te(e,o,"access private method"),t),r,ge,me,he,be,ve;let n=class extends Le{constructor(){super(),ke(this,r),this.placeholder="",this.label="",this.supportingText="",this.size="large",this.disabled=!1,this.multiple=!1,this.selectId=`select-${Math.random().toString(36).substring(2,11)}`,this.value=""}firstUpdated(){var l,i,d,u;const e=(l=this.shadowRoot)==null?void 0:l.querySelector("label#placeholder"),o=(i=this.shadowRoot)==null?void 0:i.querySelector("slot:not([name])");if(o){const g=o.assignedNodes({flatten:!0}),h=(d=this.shadowRoot)==null?void 0:d.querySelector(".select-container");g.forEach(E=>{E.nodeType===Node.ELEMENT_NODE&&E.nodeName==="SELECT"&&(h==null||h.appendChild(E))})}const t=((u=this.shadowRoot)==null?void 0:u.querySelector(".select-container select"))||null;t&&(this.multiple=t.multiple,t.id=this.selectId,t.setAttribute("aria-describedby","supporting-text"),t.setAttribute("aria-label",this.label),this.value=t.value,t.addEventListener("change",()=>{const g=Array.from(t.selectedOptions).map(h=>h.value);this.value=this.multiple?g.join(","):g[0],this.checkValidity()}),t.value=this.value),e&&t&&t.addEventListener("change",()=>{const g=t.selectedOptions[0];e.textContent=g.textContent})}getSelectElement(){var e;return((e=this.shadowRoot)==null?void 0:e.querySelector(".select-container select"))??null}_getValidityAnchor(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("SELECT")}render(){const e={multiple:this.multiple};return m`
      <gds-form-control-header class="size-${this.size}">
        <label for="input" slot="label" id="label-text">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
      </gds-form-control-header>

      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        .multiline=${this.multiple}
        align-items=${this.multiple?"flex-start":"center"}
        class=${Me(e)}
      >
        ${C(this,r,ge).call(this)}
      </gds-field-base>

      <gds-form-control-footer
        class="size-${this.size}"
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `}};r=new WeakSet;ge=function(){return[C(this,r,me).call(this),C(this,r,be).call(this),C(this,r,he).call(this),C(this,r,ve).call(this)].map(o=>m`${o}`)};me=function(){return m` <slot name="lead" slot="lead"></slot> `};he=function(){if(!this.multiple)return m`
        <label id="placeholder"> ${this.placeholder||"Select"} </label>
      `};be=function(){return m`
      <slot></slot>
      <div class="select-container"></div>
    `};ve=function(){if(!this.multiple)return m`
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
      `};n.styles=[Ce];s([c()],n.prototype,"placeholder",2);s([c()],n.prototype,"label",2);s([c({attribute:"supporting-text"})],n.prototype,"supportingText",2);s([c({type:String})],n.prototype,"size",2);s([c({attribute:"disabled",type:Boolean,reflect:!0})],n.prototype,"disabled",2);s([c({type:Boolean})],n.prototype,"multiple",2);s([c({type:Number})],n.prototype,"selectElementSize",2);s([Se("select")],n.prototype,"selectElement",2);n=s([fe("gds-select"),ye()],n);const it={title:"Components/Select",component:"gds-select",tags:["autodocs"],parameters:{docs:{description:{component:"The `Select` story demonstrates a default selection component with a placeholder and supporting text.\n<br>The component can be customized with a label, supporting text, and additional content."}}}},a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},b={...a,name:"Select",args:{placeholder:"Science Themes",label:"Label text",supportingText:"Supporting text",innerHTML:`
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
    `}},v={...a,name:"Option",render:()=>p`
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
  `},x={...a,name:"Lead Icon",render:()=>p`
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
  `},y={...a,name:"Disabled",render:()=>p`
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
  `},f={...a,name:"Validation",render:()=>p`
    <gds-flex>
      <gds-select
        .invalid=${!0}
        placeholder="Space Technologies"
        label="Label text"
        supporting-text="Supporting text"
        .required=${!0}
        .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Error message."]}}}
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
  `},S={...a,name:"Size",render:()=>p`
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
  `},M={...a,name:"Multiple",render:()=>p`
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
  `},L={...a,name:"Select Size",render:()=>p`
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
  `};var w,T,k,z,A;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(T=b.parameters)==null?void 0:T.docs)==null?void 0:k.source},description:{story:`### Parameters

-  **placeholder**: The placeholder text displayed before an option is selected (e.g., 'Science Themes').
-  **label**: The label text displayed above the select field (e.g., 'Label text').
-  **supportingText**: Additional text that provides context or instructions (e.g., 'Supporting text').
-  **innerHTML**: The inner HTML content that defines the options within the select dropdown. It includes:
- <strong>@slot</strong> 'extended-supporting-text'

\`\`\`html
 <span slot="extended-supporting-text">...</span>
\`\`\`
- An icon displayed alongside the select field.
- Multiple option groups (e.g., Physics, Chemistry, Biology) with specific options.`,...(A=(z=b.parameters)==null?void 0:z.docs)==null?void 0:A.description}}};var q,D,I,O,_;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(I=(D=v.parameters)==null?void 0:D.docs)==null?void 0:I.source},description:{story:`The select component can have options, and grouping is also possible, with support for all native select attributes.

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
> In web components using Shadow DOM, options cannot be placed directly within a slot of a custom element. The native \`select\` element requires its options to be part of its own DOM structure . If placed in a slot, options will not render due to Shadow DOM encapsulation.`,...(_=(O=v.parameters)==null?void 0:O.docs)==null?void 0:_.description}}};var P,$,R,N,G;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=($=x.parameters)==null?void 0:$.docs)==null?void 0:R.source},description:{story:`The lead icon is displayed to the left of the select field.
<br>It can be used to provide additional context or to visually represent the select field's purpose.
<br>It can be set by adding an icon component to the 'lead' slot.`,...(G=(N=x.parameters)==null?void 0:N.docs)==null?void 0:G.description}}};var V,H,B,j,F;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(B=(H=y.parameters)==null?void 0:H.docs)==null?void 0:B.source},description:{story:"The `disabled` property can be set to disable the `gds-select` field.\n<br> e.g\n\n```html\n<gds-select disabled> ... </gds-select>\n```",...(F=(j=y.parameters)==null?void 0:j.docs)==null?void 0:F.description}}};var J,W,Q,U,K;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Validation',
  render: () => html\`
    <gds-flex>
      <gds-select
        .invalid=\${true}
        placeholder="Space Technologies"
        label="Label text"
        supporting-text="Supporting text"
        .required=\${true}
        .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'Error message.'];
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
}`,...(Q=(W=f.parameters)==null?void 0:W.docs)==null?void 0:Q.source},description:{story:"Select has built-in support for form validation.<br>The validation feature is built on top of the browsers native validation features, using `ElementInternals` and `Constraint Validation API`.\n\nValidation is configured by adding a validator to a form element.<br> A validator is an object that implements the `GdsValidator` interface:\n\n```html\n<gds-select invalid></gds-select>\n```\n**@property invalid** - Indicates that the select field contains an error.",...(K=(U=f.parameters)==null?void 0:U.docs)==null?void 0:K.description}}};var X,Y,Z,ee,te;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"The `size` property can be set to 'small' to reduce the size of the select field.<br>\n**@property size** - The size of the select field.\n\n```html\n <gds-select size=\"small\"></gds-select>\n```",...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var oe,ne,ie,se,ae;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(ne=M.parameters)==null?void 0:ne.docs)==null?void 0:ie.source},description:{story:"Multiple\nThe `multiple` attribute can be set to allow multiple options to be selected on the native `<select>` element.",...(ae=(se=M.parameters)==null?void 0:se.docs)==null?void 0:ae.description}}};var le,re,pe,ce,de;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(pe=(re=L.parameters)==null?void 0:re.docs)==null?void 0:pe.source},description:{story:'The native `<select size="...">` to not be confused with property `size` <br> it is the native attribute that sets the number of visible options in a select element.\n\n```html\n <gds-select>\n <select multiple size="14">\n   ...\n </select>\n</gds-select>\n```',...(de=(ce=L.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};const st=["select","Option","Lead","Disabled","Validation","Size","Multiple","SelectSize"];export{y as Disabled,x as Lead,M as Multiple,v as Option,L as SelectSize,S as Size,f as Validation,st as __namedExportsOrder,it as default,b as select};
