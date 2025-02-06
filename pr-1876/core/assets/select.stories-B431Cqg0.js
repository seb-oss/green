import{i as Se,x as u}from"./lit-element-C_s9q329.js";import{l as Me}from"./localized-decorator-iufJoRiP.js";import"./runtime-CMQcyTl6.js";import{n as ce,r as de,g as Ee,h as d}from"./custom-element-scoping-BEGY3AqQ.js";import{a as Le}from"./query-p8xgzTDt.js";import{e as Ce}from"./class-map-Bz98xO8-.js";import{t as we}from"./tokens.style-CFvqdzpw.js";import{w as ke}from"./watch-tFciLXSI.js";import{a as Ae}from"./button-DGHfKrd_.js";import"./field-base-Dv36WMxd.js";import"./chevron-bottom-DBkKupLL.js";import"./flex-CV3X_Fty.js";import"./square-grid-circle-DVoM86wV.js";import"./rocket-B3c2UOEd.js";import"./sun-B5D_0VdZ.js";import"./brand-green-Bv3B13iz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./transitional-styles-gKBkOdeg.js";import"./observe-light-dom-CmJPHUQ4.js";import"./triangle-exclamation-BZzuw6qS.js";import"./icon-C4kC8HZ6.js";import"./card-stRHUTua.js";import"./style-expression-property-D7o6hSzp.js";import"./container-DDOcWLIX.js";import"./badge-R9tjKr0S.js";const ze=Se`
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
`;var Oe=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,ge=t=>{throw TypeError(t)},c=(t,e,o,i)=>{for(var n=i>1?void 0:i?Te(e,o):e,l=t.length-1,r;l>=0;l--)(r=t[l])&&(n=(i?r(e,o,n):r(n))||n);return i&&n&&Oe(e,o,n),n},qe=(t,e,o)=>e.has(t)||ge("Cannot "+o),De=(t,e,o)=>e.has(t)?ge("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),S=(t,e,o)=>(qe(t,e,"access private method"),o),p,me,he,ve,be,xe;let s=class extends Ae{constructor(){super(),De(this,p),this.supportingText="",this.size="large",this.multiline=!1,this.selectedValue=""}getInitialSelectValue(t){return t.multiple?Array.from(t.selectedOptions).map(o=>o.value).join(","):t.value}firstUpdated(){var o,i,n;const t=(o=this.shadowRoot)==null?void 0:o.querySelector("slot:not([name])");if(t){const l=t.assignedNodes({flatten:!0}),r=(i=this.shadowRoot)==null?void 0:i.querySelector(".select-container");l.forEach(E=>{if(E.nodeType===Node.ELEMENT_NODE&&E.nodeName.toUpperCase()==="SELECT"){const M=E;if(this.multiline=M.multiple,r==null||r.appendChild(M),!this.value){const fe=this.getInitialSelectValue(M);this.value=fe;const L=Array.from(M.selectedOptions).map(ye=>ye.value);this.multiline?this.selectedValue=L:this.selectedValue=L.slice(0,1)}}})}const e=(n=this.shadowRoot)==null?void 0:n.querySelector(".select-container select");e&&(e.setAttribute("aria-describedby","supporting-text"),e.setAttribute("aria-label",this.label),e.addEventListener("change",this.handleSelectChange.bind(this)),e.addEventListener("input",l=>l.stopPropagation()))}updated(t){const e=this.getSelectElement();if(e&&t.has("value"))if(e.multiple){if(e.multiple){const o=this.value?this.value.split(","):[];Array.from(e.options).forEach(i=>{i.selected=o.includes(i.value)}),this.selectedValue=o}}else{if(!Array.from(e.options).some(i=>i.value===this.value)&&this.value){const i=document.createElement("option");i.value=this.value,i.text=this.value,i.selected=!0,e.prepend(i)}else e.value=this.value||"";this.selectedValue=this.value?[this.value]:[]}}handleSelectChange(t){t.stopPropagation();const e=t.target,o=Array.from(e.selectedOptions).map(i=>i.value).filter(i=>i!=="");e.multiple?(this.selectedValue=o,this.value=o.length>0?o.join(","):""):(this.selectedValue=[o[0]],this.value=o[0]),this.checkValidity(),this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}formResetCallback(){const t=this.getSelectElement();if(t)if(t.multiple)Array.from(t.options).forEach(e=>{e.selected=!1}),this.selectedValue=[],this.value="";else{const e=t.options[0];e&&(this.value=e.value,t.value=e.value,this.selectedValue=[e.value])}}getSelectElement(){var t;return((t=this.shadowRoot)==null?void 0:t.querySelector(".select-container select"))??null}_getValidityAnchor(){return this.selectElement}render(){const t={multiple:this.multiline};return d`
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
        class=${Ce(t)}
      >
        ${S(this,p,me).call(this)}
      </gds-field-base>

      <gds-form-control-footer
        class="size-${this.size}"
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `}};p=new WeakSet;me=function(){return[S(this,p,he).call(this),S(this,p,be).call(this),S(this,p,ve).call(this),S(this,p,xe).call(this)].map(e=>d`${e}`)};he=function(){return d` <slot name="lead" slot="lead"></slot> `};ve=function(){if(!this.multiline){const t=this.getSelectElement();let e=this.value;if(t){const o=Array.from(t.selectedOptions);o.length>0&&(e=o[0].text)}return d`<label id="placeholder">${e}</label>`}};be=function(){return d`
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
      `};s.styles=[we,ze];c([ce({attribute:"supporting-text"})],s.prototype,"supportingText",2);c([ce({type:String})],s.prototype,"size",2);c([de()],s.prototype,"multiline",2);c([de()],s.prototype,"selectedValue",2);c([Le("select")],s.prototype,"selectElement",2);c([ke("value")],s.prototype,"firstUpdated",1);s=c([Ee("gds-select"),Me()],s);const pt={title:"Components/Select",component:"gds-select",tags:["autodocs"],parameters:{docs:{description:{component:"The `Select` story demonstrates a default selection component with a label and supporting text.\n<br>The component can be customized with a label, supporting text, lead icon and additional content."}}}},a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},g={...a,name:"Select",args:{label:"Label text",supportingText:"Supporting text",innerHTML:`
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
    `}},m={...a,name:"Option",render:()=>u`
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
  `},h={...a,name:"Lead Icon",render:()=>u`
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
  `},v={...a,name:"Disabled",render:()=>u`
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
  `},b={...a,name:"Validation",render:()=>u`
    <gds-flex>
      <gds-select
        .invalid=${!0}
        label="Label text"
        supporting-text="Supporting text"
        .required=${!0}
        .validator=${{validate:t=>{if(t.value==="")return[{...t.validity,valid:!1,customError:!0},"Error message."]}}}
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
  `},x={...a,name:"Size",render:()=>u`
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
  `},f={...a,name:"Multiple",render:()=>u`
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
  `},y={...a,name:"Select Size",render:()=>u`
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
  `};var C,w,k,A,z;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(w=g.parameters)==null?void 0:w.docs)==null?void 0:k.source},description:{story:`### Parameters

-  **label**: The label text displayed above the select field (e.g., 'Label text').
-  **supportingText**: Additional text that provides context or instructions (e.g., 'Supporting text').
-  **innerHTML**: The inner HTML content that defines the options within the select dropdown. It includes:
- <strong>@slot</strong> 'extended-supporting-text'

\`\`\`html
 <span slot="extended-supporting-text">...</span>
\`\`\`
- An icon displayed alongside the select field.
- Multiple option groups (e.g., Physics, Chemistry, Biology) with specific options.`,...(z=(A=g.parameters)==null?void 0:A.docs)==null?void 0:z.description}}};var O,T,q,D,I;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(T=m.parameters)==null?void 0:T.docs)==null?void 0:q.source},description:{story:`The select component can have options, and grouping is also possible, with support for all native select attributes.

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
> In web components using Shadow DOM, options cannot be placed directly within a slot of a custom element. The native \`select\` element requires its options to be part of its own DOM structure . If placed in a slot, options will not render due to Shadow DOM encapsulation.`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.description}}};var V,_,P,$,R;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(P=(_=h.parameters)==null?void 0:_.docs)==null?void 0:P.source},description:{story:`The lead icon is displayed to the left of the select field.
<br>It can be used to provide additional context or to visually represent the select field's purpose.
<br>It can be set by adding an icon component to the 'lead' slot.`,...(R=($=h.parameters)==null?void 0:$.docs)==null?void 0:R.description}}};var N,G,H,B,j;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(H=(G=v.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:"The `disabled` property can be set to disable the `gds-select` field.\n<br> e.g\n\n```html\n<gds-select disabled> ... </gds-select>\n```",...(j=(B=v.parameters)==null?void 0:B.docs)==null?void 0:j.description}}};var J,U,W,F,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(W=(U=b.parameters)==null?void 0:U.docs)==null?void 0:W.source},description:{story:"Select has built-in support for form validation.<br>The validation feature is built on top of the browsers native validation features, using `ElementInternals` and `Constraint Validation API`.\n\nValidation is configured by adding a validator to a form element.<br> A validator is an object that implements the `GdsValidator` interface:\n\n```html\n<gds-select invalid></gds-select>\n```\n**@property invalid** - Indicates that the select field contains an error.",...(Q=(F=b.parameters)==null?void 0:F.docs)==null?void 0:Q.description}}};var K,X,Y,Z,ee;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"The `size` property can be set to 'small' to reduce the size of the select field.<br>\n**@property size** - The size of the select field.\n\n```html\n <gds-select size=\"small\"></gds-select>\n```",...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,oe,ie,ne,se;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ie=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ie.source},description:{story:"Multiple\nThe `multiple` attribute can be set to allow multiple options to be selected on the native `<select>` element.",...(se=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:se.description}}};var ae,le,re,pe,ue;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(le=y.parameters)==null?void 0:le.docs)==null?void 0:re.source},description:{story:'The native `<select size="...">` to not be confused with property `size` <br> it is the native attribute that sets the number of visible options in a select element.\n\n```html\n <gds-select>\n <select multiple size="14">\n   ...\n </select>\n</gds-select>\n```',...(ue=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:ue.description}}};const ut=["select","Option","Lead","Disabled","Validation","Size","Multiple","SelectSize"];export{v as Disabled,h as Lead,f as Multiple,m as Option,y as SelectSize,x as Size,b as Validation,ut as __namedExportsOrder,pt as default,g as select};
