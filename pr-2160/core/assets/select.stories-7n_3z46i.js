import{i as Ae,x as r}from"./lit-element-Bx14lxc-.js";import{a as ze}from"./argTableProps-DSrWd0C8.js";import{l as Ie}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{n as w,h as a,g as Oe}from"./custom-element-scoping-b4c89-hi.js";import{a as we}from"./query-p8xgzTDt.js";import{e as Pe}from"./class-map-CXsQwv0r.js";import{n as T}from"./when-BR7zwNJC.js";import{f as qe,G as $e}from"./form-control-host.style-GwSQv2RY.js";import{G as Ve,a as Ge}from"./form-control-header.component-BHPTElKC.js";import{t as Ne}from"./tokens.style-OWC-W9l-.js";import{o as Re}from"./observe-light-dom-CmJPHUQ4.js";import{w as Fe}from"./watch-tFciLXSI.js";import{d as Be,w as He,b as je}from"./declarative-layout-mixins-BgWwoHZ-.js";import{a as We}from"./button.component-DxfU86xO.js";import{I as Je}from"./chevron-bottom.component-DXzT4jUC.js";import"./flex-DvFpiQV2.js";import"./bank-fmmVaPb7.js";import"./rocket-BiK2dhy3.js";import"./square-grid-circle-B9412UGK.js";import"./sun-DsHMWxJH.js";import"./brand-green-D10hwU4q.js";import"./custom-elements-DAZWk5zZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./transitional-styles-Ckr_5-pT.js";import"./badge.component-BbHeY5MQ.js";import"./flex.component-CYboTd6A.js";import"./div.component-DlGsFHOd.js";import"./triangle-exclamation.component-7Z9_MCa_.js";import"./icon-BISRwovF.js";import"./card.component-BkDO6s2X.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";const Ue=Ae`
  @layer base, reset, transitional-styles;
  @layer base {
    .select-container {
      display: contents;
    }

    select {
      flex: 1;
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
`;var Qe=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Ce=e=>{throw TypeError(e)},s=(e,t,o,d)=>{for(var p=d>1?void 0:d?Xe(t,o):t,k=e.length-1,M;k>=0;k--)(M=e[k])&&(p=(d?M(t,o,p):M(p))||p);return d&&p&&Qe(t,o,p),p},D=(e,t,o)=>t.has(e)||Ce("Cannot "+o),C=(e,t,o)=>(D(e,t,"read from private field"),t.get(e)),L=(e,t,o)=>t.has(e)?Ce("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),Ke=(e,t,o,d)=>(D(e,t,"write to private field"),t.set(e,o),o),u=(e,t,o)=>(D(e,t,"access private method"),o),S,i,Ee,E,ke,Me,Le,_e,De,Te;let n=class extends We{constructor(){super(...arguments),L(this,i),this.supportingText="",this.showExtendedSupportingText=!1,this.size="large",this.plain=!1,L(this,S,!1),L(this,E,e=>{e.stopPropagation(),u(this,i,ke).call(this),requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})})}get value(){return this._internalValue}set value(e){C(this,S)||Ke(this,S,!0),this._internalValue=e}get displayValue(){return this.selectElement?Array.from(this.selectElement.selectedOptions).map(e=>e.text).join(", "):""}get multiple(){var e;return((e=this.selectElement)==null?void 0:e.multiple)??!1}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._captureDOM(),this._handleValueChange()})}render(){const e={multiple:this.multiple};return this.selectElement&&(this.selectElement.disabled=this.disabled),a`
      ${T(!this.plain,()=>a`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText=${this.showExtendedSupportingText}
          >
            <label for="select" slot="label" id="label-text">
              ${this.label}
            </label>
            <span slot="supporting-text" id="supporting-text">
              ${this.supportingText}
            </span>
            <slot
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
          </gds-form-control-header>`)}

      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        .multiline=${this.multiple}
        align-items=${this.multiple?"flex-start":"center"}
        class=${Pe(e)}
      >
        ${u(this,i,Me).call(this)}
      </gds-field-base>

      ${T(u(this,i,Ee).call(this),()=>a`<gds-form-control-footer
            class="size-${this.size}"
            .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
          ></gds-form-control-footer>`)}
    `}_captureDOM(){if(!this.shadowRoot||this.childNodes.length===0||!this._elSelectContainer)return;const e=Array.from(this.children).filter(t=>t.nodeName==="SELECT").map(t=>{const o=t.cloneNode(!0);return o.addEventListener("change",C(this,E)),o.addEventListener("input",C(this,E)),o.setAttribute("aria-describedby","supporting-text extended-supporting-text sub-label message"),o.ariaLabel=this.label,o.setAttribute("id","select"),o.disabled=this.disabled,o.className="native-control",C(this,S)?o.value=this.value:this.value=o.value,o});this._elSelectContainer.replaceChildren(...e)}formResetCallback(){if(this.selectElement)if(this.selectElement.multiple)Array.from(this.selectElement.options).forEach(e=>{e.selected=!1}),this.value=[];else{const e=this.selectElement.options[0];e&&(this.value=e.value,this.selectElement.value=e.value)}}_getValidityAnchor(){return this.selectElement}_handleValueChange(){if(this.selectElement){if(this.multiple){const e=this.value||[];Array.from(this.selectElement.options).forEach(t=>{t.selected=e.includes(t.value)})}else this.selectElement.value=this.value;this.requestUpdate()}}};S=new WeakMap;i=new WeakSet;Ee=function(){return!this.plain&&this.invalid};E=new WeakMap;ke=function(){if(this.selectElement)if(this.multiple){const e=Array.from(this.selectElement.selectedOptions);this.value=e.map(t=>t.value)}else this.value=this.selectElement.value};Me=function(){return[u(this,i,Le).call(this),u(this,i,De).call(this),u(this,i,_e).call(this),u(this,i,Te).call(this)].map(t=>a`${t}`)};Le=function(){return a`<slot name="lead" slot="lead"></slot>`};_e=function(){if(!this.multiple)return a`<label id="placeholder" class="native-control"
        >${this.displayValue}</label
      >`};De=function(){return a`<div class="select-container"></div>`};Te=function(){if(!this.multiple)return a` <gds-icon-chevron-bottom></gds-icon-chevron-bottom> `};n.styles=[Ne,qe,Ue];s([w({attribute:"supporting-text"})],n.prototype,"supportingText",2);s([w({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],n.prototype,"showExtendedSupportingText",2);s([w({type:String})],n.prototype,"size",2);s([w({type:Boolean})],n.prototype,"plain",2);s([we("select")],n.prototype,"selectElement",2);s([w()],n.prototype,"value",1);s([we(".select-container")],n.prototype,"_elSelectContainer",2);s([Re({childList:!0,subtree:!0,attributes:!0,characterData:!0})],n.prototype,"_captureDOM",1);s([Fe("value")],n.prototype,"_handleValueChange",1);n=s([Ie()],n);let _=class extends Be(He(je(n))){};_=s([Oe("gds-select",{dependsOn:[Ve,Ge,$e,Je]})],_);_.define();const zt={title:"Components/Select",component:"gds-select",tags:["autodocs"],argTypes:{...ze("gds-select")},parameters:{docs:{description:{component:`\`gds-select\` is a wrapper component for the native select element.

Use this component instead of \`<gds-dropdown>\` when you need to leverage the inherent behavior of the native select element, for example when native accessibility features, some of which are not currently replicable in custom dropdowns, are required. Usability on mobile devices is also sometimes better with native select elements.

Don't use this component when you need to customize the dropdown behavior or appearance, or when you need to display complex content in the dropdown, or require multi-select functionality. While the native select element does support multi-select, it is not recommended for use in most cases.

The wrapped select element will be cloned into the component's shadow DOM. Therefore, event listeners should only be added on the host
element, and not on the enclosed select element. Also, state should also be handled only through the host.
Setting value or selected props on the select element will not work as expected.`}}}},l={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},c={...l,name:"Select",args:{label:"Label text",supportingText:"Supporting text",value:"",innerHTML:`
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
    `}},m={...l,name:"Options",render:()=>r`
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
  `},g={...l,name:"Lead Icon",render:()=>r`
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
  `},h={...l,name:"Disabled",render:()=>r`
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
  `},v={...l,name:"Validation",render:()=>r`
    <gds-flex>
      <gds-select
        .invalid=${!0}
        label="Label text"
        supporting-text="Supporting text"
        .required=${!0}
        .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Error message."]}}}
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
  `},b={...l,name:"Extended Supporting Text",render:()=>r`
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
  `},x={...l,name:"Size",render:()=>r`
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
  `},f={...l,name:"Multiple",render:()=>r`
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
  `},y={...l,name:"Select Size",render:()=>r`
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
  `};var A,z,I,O,P;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Select',
  args: {
    label: 'Label text',
    supportingText: 'Supporting text',
    value: '',
    innerHTML: \`
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
    \`
  }
}`,...(I=(z=c.parameters)==null?void 0:z.docs)==null?void 0:I.source},description:{story:"Basic example showing the select component with a label, supporting text and a lead icon.\nThe wrapped `<select>` element is making use of `<optgroup>` elements to group the options.",...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.description}}};var q,$,V,G,N;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Options',
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
}`,...(V=($=m.parameters)==null?void 0:$.docs)==null?void 0:V.source},description:{story:'It is mandatory to use a native `<select>` element with options inside `<gds-select>`. `<gds-select>` is only a wrapper that allows native select to be used seamlessly along with the other form controls in the design system.\n\ne.g\n\n```html\n   <gds-select>\n    <select>\n      <optgroup label="Astronomy">\n        <option value="cosmology">Cosmology</option>\n        <option value="astrophysics">Astrophysics</option>\n      </optgroup>\n    </select>\n  </gds-select>\n```\n> In web components using Shadow DOM, elements cannot be associated with each other across Shadow DOM boundaries. This is why you need to wrap a full native `select` element and it\'s options, rather than just putting options directly under `<gds-select>`. If placed in a slot, options would not be picked up due to the Shadow DOM encapsulation.',...(N=(G=m.parameters)==null?void 0:G.docs)==null?void 0:N.description}}};var R,F,B,H,j;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(F=g.parameters)==null?void 0:F.docs)==null?void 0:B.source},description:{story:`The lead icon is displayed to the left of the select field.
<br>It can be used to provide additional context or to visually represent the select field's purpose.
<br>It is set by adding an icon component to the 'lead' slot.`,...(j=(H=g.parameters)==null?void 0:H.docs)==null?void 0:j.description}}};var W,J,U,Q,X;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Disabled',
  render: () => html\`
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
  \`
}`,...(U=(J=h.parameters)==null?void 0:J.docs)==null?void 0:U.source},description:{story:"The `disabled` property can be set to disable the `gds-select` field.\n<br> e.g\n\n```html\n<gds-select disabled> ... </gds-select>\n```",...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var K,Y,Z,ee,te;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
  \`
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Select has built-in support for form validation.<br>The validation feature is built on top of the browsers native validation features, using `ElementInternals` and `Constraint Validation API`.\n\nValidation is configured by adding a validator to a form element.<br> A validator is an object that implements the `GdsValidator` interface:\n\n```html\n<gds-select invalid></gds-select>\n```\n**@property invalid** - Indicates that the select field contains an error.",...(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var oe,ne,se,ie,le;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Extended Supporting Text',
  render: () => html\`
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
  \`
}`,...(se=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:se.source},description:{story:'The `extended-supporting-text` slot can be used to provide extended information about the select field.<br>\nThe slot will show by default when the `show-extended-supporting-text` property is set.<br>\nIf not specified, the slot will be hidden and a companion icon will be displayed to indicate that more information is available.\n\n```html\n<gds-select show-extended-supporting-text>\n <span slot="extended-supporting-text">...</span>\n <select><option value="">...</option></select>\n</gds-select>\n```',...(le=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:le.description}}};var ae,re,pe,ue,de;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Size',
  render: () => html\`
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
  \`
}`,...(pe=(re=x.parameters)==null?void 0:re.docs)==null?void 0:pe.source},description:{story:"The `size` property can be set to 'small' to reduce the size of the select field.<br>\n**@property size** - The size of the select field.\n\n```html\n <gds-select size=\"small\"></gds-select>\n```",...(de=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:de.description}}};var ce,me,ge,he,ve;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Multiple',
  render: () => html\`
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
  \`
}`,...(ge=(me=f.parameters)==null?void 0:me.docs)==null?void 0:ge.source},description:{story:"The `multiple` attribute can be set to allow multiple options to be selected on the native `<select>` element.\n\nHowever, it is not recommended to use the native select element in multi-select mode. The native select element does not provide a good user experience for multi-select, especially when there are many options. Prefer to use checkbox groups or the `<gds-dropdown>` component for multi-select functionality instead.",...(ve=(he=f.parameters)==null?void 0:he.docs)==null?void 0:ve.description}}};var be,xe,fe,ye,Se;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Select Size',
  render: () => html\`
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
  \`
}`,...(fe=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:fe.source},description:{story:'The native `<select size="...">` to not be confused with property `size` <br> it is the native attribute that sets the number of visible options in a select element.\n\n```html\n <gds-select>\n <select multiple size="14">\n   ...\n </select>\n</gds-select>\n```',...(Se=(ye=y.parameters)==null?void 0:ye.docs)==null?void 0:Se.description}}};const It=["Default","Option","Lead","Disabled","Validation","ExtendedSupportingText","Size","Multiple","SelectSize"];export{c as Default,h as Disabled,b as ExtendedSupportingText,g as Lead,f as Multiple,m as Option,y as SelectSize,x as Size,v as Validation,It as __namedExportsOrder,zt as default};
