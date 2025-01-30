import{i as ye,x as u}from"./lit-element-C_s9q329.js";import{l as fe}from"./localized-decorator-iufJoRiP.js";import"./runtime-CMQcyTl6.js";import{n as de,r as ce,g as Se,h as d}from"./custom-element-scoping-BRwcB39g.js";import{e as Le}from"./class-map-Bz98xO8-.js";import{t as Me}from"./tokens.style-SarioPsh.js";import{a as Ee}from"./button-Ck5JCMxE.js";import"./field-base-DipKZHhv.js";import"./chevron-bottom-bIUUPBrH.js";import"./flex-DYJ5h7D3.js";import"./square-grid-circle-BxZXT1pg.js";import"./rocket-By36vGMQ.js";import"./sun-B6-q3uuw.js";import"./brand-green-B0sSgmTm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./query-p8xgzTDt.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./transitional-styles-CXWlQDsX.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./triangle-exclamation-B-wIpajX.js";import"./icon-B0MZHPzy.js";import"./card-aIEaOFVy.js";import"./style-expression-property-Dbto4vYM.js";import"./container-CQV8FXoH.js";import"./badge-Bk0Oy8yr.js";const Ce=ye`
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

    select[multiple] {
      opacity: 1;
      position: relative;
      width: 100%;
    }

    label {
      flex: 1;
    }
  }
`;var we=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,ge=e=>{throw TypeError(e)},S=(e,t,o,n)=>{for(var i=n>1?void 0:n?ke(t,o):t,l=e.length-1,a;l>=0;l--)(a=e[l])&&(i=(n?a(t,o,i):a(i))||i);return n&&i&&we(t,o,i),i},ze=(e,t,o)=>t.has(e)||ge("Cannot "+o),Ae=(e,t,o)=>t.has(e)?ge("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),f=(e,t,o)=>(ze(e,t,"access private method"),o),r,me,he,be,ve,xe;let p=class extends Ee{constructor(){super(),Ae(this,r),this.supportingText="",this.size="large",this.multiline=!1,this.selectedValue="",this.value=""}getInitialSelectValue(e){return e.multiple?Array.from(e.selectedOptions).map(o=>o.value).join(","):e.value}firstUpdated(){var o,n,i;const e=(o=this.shadowRoot)==null?void 0:o.querySelector("slot:not([name])");if(e){const l=e.assignedNodes({flatten:!0}),a=(n=this.shadowRoot)==null?void 0:n.querySelector(".select-container");l.forEach(L=>{if(L.nodeType===Node.ELEMENT_NODE&&L.nodeName==="SELECT"){const E=L,M=this.getInitialSelectValue(E);a==null||a.appendChild(L),this.value=M,this.selectedValue=E.multiple?M.split(","):M}})}const t=((i=this.shadowRoot)==null?void 0:i.querySelector(".select-container select"))||null;t&&(this.multiline=t.multiple,t.setAttribute("aria-describedby","supporting-text"),t.setAttribute("aria-label",this.label),this.selectedValue=t.value,t.addEventListener("change",this.handleSelectChange.bind(this)),t.addEventListener("input",l=>l.stopPropagation()),t.value=this.value||"")}willUpdate(e){if(super.willUpdate(e),e.has("value")){const t=this.value,o=this.getSelectElement();o&&o.value!==t&&(o.value=t||"",this.selectedValue=o.multiple?(t==null?void 0:t.split(","))||[]:t||"")}}handleSelectChange(e){e.stopPropagation();const t=e.target,o=Array.from(t.selectedOptions).map(n=>n.value);this.selectedValue=this.multiline?o:o[0],this.value=this.multiline?o.join(","):this.selectedValue,this.checkValidity(),this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}formResetCallback(){const e=this.getSelectElement();if(e){const t=e.options[0];t&&(this.value=t.value,e.value=t.value,this.selectedValue=e.multiple?[t.value]:t.value)}}getSelectElement(){var e;return((e=this.shadowRoot)==null?void 0:e.querySelector(".select-container select"))??null}_getValidityAnchor(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("SELECT")}render(){const e={multiple:this.multiline};return d`
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
        .multiline=${this.multiline}
        align-items=${this.multiline?"flex-start":"center"}
        class=${Le(e)}
      >
        ${f(this,r,me).call(this)}
      </gds-field-base>

      <gds-form-control-footer
        class="size-${this.size}"
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `}};r=new WeakSet;me=function(){return[f(this,r,he).call(this),f(this,r,ve).call(this),f(this,r,be).call(this),f(this,r,xe).call(this)].map(t=>d`${t}`)};he=function(){return d` <slot name="lead" slot="lead"></slot> `};be=function(){var e;if(!this.multiline){const t=Array.from(((e=this.getSelectElement())==null?void 0:e.selectedOptions)||[]).map(n=>n.text),o=this.multiline?t.join(", "):t.length>0?t[0]:"Select";return d` <label id="placeholder">${o}</label> `}};ve=function(){return d`
      <slot></slot>
      <div class="select-container"></div>
    `};xe=function(){if(!this.multiline)return d`
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
      `};p.styles=[Me,Ce];S([de({attribute:"supporting-text"})],p.prototype,"supportingText",2);S([de({type:String})],p.prototype,"size",2);S([ce()],p.prototype,"multiline",2);S([ce()],p.prototype,"selectedValue",2);p=S([Se("gds-select"),fe()],p);const st={title:"Components/Select",component:"gds-select",tags:["autodocs"],parameters:{docs:{description:{component:"The `Select` story demonstrates a default selection component with a label and supporting text.\n<br>The component can be customized with a label, supporting text, lead icon and additional content."}}}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},c={...s,name:"Select",args:{label:"Label text",supportingText:"Supporting text",innerHTML:`
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
    `}},g={...s,name:"Option",render:()=>u`
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
  `},m={...s,name:"Lead Icon",render:()=>u`
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
  `},h={...s,name:"Disabled",render:()=>u`
    <gds-flex>
      <gds-select disabled label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-lightning slot="lead"></gds-icon-lightning>
        <select></select>
      </gds-select>
    </gds-flex>
  `},b={...s,name:"Validation",render:()=>u`
    <gds-flex>
      <gds-select
        .invalid=${!0}
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
  `},v={...s,name:"Size",render:()=>u`
    <gds-flex>
      <gds-select
        size="small"
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
  `},x={...s,name:"Multiple",render:()=>u`
    <gds-flex>
      <gds-select label="Label text" supporting-text="Supporting text">
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
  `},y={...s,name:"Select Size",render:()=>u`
    <gds-flex>
      <gds-select label="Label text" supporting-text="Supporting text">
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
  `};var C,w,k,z,A;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Select',
  args: {
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
}`,...(k=(w=c.parameters)==null?void 0:w.docs)==null?void 0:k.source},description:{story:`### Parameters

-  **label**: The label text displayed above the select field (e.g., 'Label text').
-  **supportingText**: Additional text that provides context or instructions (e.g., 'Supporting text').
-  **innerHTML**: The inner HTML content that defines the options within the select dropdown. It includes:
- <strong>@slot</strong> 'extended-supporting-text'

\`\`\`html
 <span slot="extended-supporting-text">...</span>
\`\`\`
- An icon displayed alongside the select field.
- Multiple option groups (e.g., Physics, Chemistry, Biology) with specific options.`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.description}}};var T,q,D,I,O;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Option',
  render: () => html\`
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
  \`
}`,...(D=(q=g.parameters)==null?void 0:q.docs)==null?void 0:D.source},description:{story:`The select component can have options, and grouping is also possible, with support for all native select attributes.

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
> In web components using Shadow DOM, options cannot be placed directly within a slot of a custom element. The native \`select\` element requires its options to be part of its own DOM structure . If placed in a slot, options will not render due to Shadow DOM encapsulation.`,...(O=(I=g.parameters)==null?void 0:I.docs)==null?void 0:O.description}}};var V,_,P,$,R;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Lead Icon',
  render: () => html\`
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
  \`
}`,...(P=(_=m.parameters)==null?void 0:_.docs)==null?void 0:P.source},description:{story:`The lead icon is displayed to the left of the select field.
<br>It can be used to provide additional context or to visually represent the select field's purpose.
<br>It can be set by adding an icon component to the 'lead' slot.`,...(R=($=m.parameters)==null?void 0:$.docs)==null?void 0:R.description}}};var N,G,H,B,j;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Disabled',
  render: () => html\`
    <gds-flex>
      <gds-select disabled label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-lightning slot="lead"></gds-icon-lightning>
        <select></select>
      </gds-select>
    </gds-flex>
  \`
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:"The `disabled` property can be set to disable the `gds-select` field.\n<br> e.g\n\n```html\n<gds-select disabled> ... </gds-select>\n```",...(j=(B=h.parameters)==null?void 0:B.docs)==null?void 0:j.description}}};var J,U,W,F,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Validation',
  render: () => html\`
    <gds-flex>
      <gds-select
        .invalid=\${true}
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
}`,...(W=(U=b.parameters)==null?void 0:U.docs)==null?void 0:W.source},description:{story:"Select has built-in support for form validation.<br>The validation feature is built on top of the browsers native validation features, using `ElementInternals` and `Constraint Validation API`.\n\nValidation is configured by adding a validator to a form element.<br> A validator is an object that implements the `GdsValidator` interface:\n\n```html\n<gds-select invalid></gds-select>\n```\n**@property invalid** - Indicates that the select field contains an error.",...(Q=(F=b.parameters)==null?void 0:F.docs)==null?void 0:Q.description}}};var K,X,Y,Z,ee;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Size',
  render: () => html\`
    <gds-flex>
      <gds-select
        size="small"
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
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"The `size` property can be set to 'small' to reduce the size of the select field.<br>\n**@property size** - The size of the select field.\n\n```html\n <gds-select size=\"small\"></gds-select>\n```",...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,oe,ne,ie,se;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Multiple',
  render: () => html\`
    <gds-flex>
      <gds-select label="Label text" supporting-text="Supporting text">
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
}`,...(ne=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ne.source},description:{story:"Multiple\nThe `multiple` attribute can be set to allow multiple options to be selected on the native `<select>` element.",...(se=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:se.description}}};var le,ae,re,pe,ue;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Select Size',
  render: () => html\`
    <gds-flex>
      <gds-select label="Label text" supporting-text="Supporting text">
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
}`,...(re=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:re.source},description:{story:'The native `<select size="...">` to not be confused with property `size` <br> it is the native attribute that sets the number of visible options in a select element.\n\n```html\n <gds-select>\n <select multiple size="14">\n   ...\n </select>\n</gds-select>\n```',...(ue=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:ue.description}}};const lt=["select","Option","Lead","Disabled","Validation","Size","Multiple","SelectSize"];export{h as Disabled,m as Lead,x as Multiple,g as Option,y as SelectSize,v as Size,b as Validation,lt as __namedExportsOrder,st as default,c as select};
