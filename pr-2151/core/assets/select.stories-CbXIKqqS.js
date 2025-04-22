import{i as Me,x as u}from"./lit-element-Bx14lxc-.js";import{a as Le}from"./argTableProps-DV1J3WxS.js";import{l as ke}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{n as w,h as a,g as _e}from"./custom-element-scoping-b4c89-hi.js";import{a as ve}from"./query-p8xgzTDt.js";import{e as Ae}from"./class-map-CXsQwv0r.js";import{n as A}from"./when-BR7zwNJC.js";import{f as De,G as ze}from"./form-control-host.style-C4yW1JWW.js";import{G as Oe,a as Ie}from"./form-control-header.component-B10A3La-.js";import{t as qe}from"./tokens.style-FJSmZZcv.js";import{o as Te}from"./observe-light-dom-CmJPHUQ4.js";import{w as Pe}from"./watch-tFciLXSI.js";import{d as $e,w as Ve,b as Ge}from"./declarative-layout-mixins-BgWwoHZ-.js";import{a as Ne}from"./button.component-DtF9Ct8d.js";import{I as Re}from"./chevron-bottom.component-Dki1Ti7d.js";import"./flex-C_x5I4jr.js";import"./square-grid-circle-Du6QNwGS.js";import"./rocket-DxnqIoVB.js";import"./sun-HEJHC02m.js";import"./brand-green-BNdNnP-v.js";import"./custom-elements-DswHMhod.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./transitional-styles-CLkQCQV5.js";import"./badge.component-TZirAiZ9.js";import"./flex.component-CPPMsy9S.js";import"./div.component-BuGkGqpt.js";import"./triangle-exclamation.component-CxJk4dIA.js";import"./icon-61apcvHX.js";import"./card.component-NhDjIX8u.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";const He=Me`
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
`;var Be=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,be=e=>{throw TypeError(e)},s=(e,t,o,d)=>{for(var r=d>1?void 0:d?Fe(t,o):t,E=e.length-1,M;E>=0;E--)(M=e[E])&&(r=(d?M(t,o,r):M(r))||r);return d&&r&&Be(t,o,r),r},_=(e,t,o)=>t.has(e)||be("Cannot "+o),S=(e,t,o)=>(_(e,t,"read from private field"),t.get(e)),L=(e,t,o)=>t.has(e)?be("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),We=(e,t,o,d)=>(_(e,t,"write to private field"),t.set(e,o),o),p=(e,t,o)=>(_(e,t,"access private method"),o),y,i,fe,C,xe,ye,Se,Ce,we,Ee;let n=class extends Ne{constructor(){super(...arguments),L(this,i),this.supportingText="",this.size="large",this.plain=!1,L(this,y,!1),L(this,C,e=>{e.stopPropagation(),p(this,i,xe).call(this),requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})})}get value(){return this._internalValue}set value(e){S(this,y)||We(this,y,!0),this._internalValue=e}get displayValue(){return this.selectElement?Array.from(this.selectElement.selectedOptions).map(e=>e.text).join(", "):""}get multiple(){var e;return((e=this.selectElement)==null?void 0:e.multiple)??!1}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._captureDOM(),this._handleValueChange()})}render(){const e={multiple:this.multiple};return this.selectElement&&(this.selectElement.disabled=this.disabled),a`
      ${A(!this.plain,()=>a`<gds-form-control-header class="size-${this.size}">
            <label for="select" slot="label" id="label-text"
              >${this.label}</label
            >
            <span slot="supporting-text" id="supporting-text">
              ${this.supportingText}
            </span>
          </gds-form-control-header>`)}

      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        .multiline=${this.multiple}
        align-items=${this.multiple?"flex-start":"center"}
        class=${Ae(e)}
      >
        ${p(this,i,ye).call(this)}
      </gds-field-base>

      ${A(p(this,i,fe).call(this),()=>a`<gds-form-control-footer
            class="size-${this.size}"
            .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
          ></gds-form-control-footer>`)}
    `}_captureDOM(){if(!this.shadowRoot||this.childNodes.length===0||!this._elSelectContainer)return;const e=Array.from(this.children).filter(t=>t.nodeName==="SELECT").map(t=>{const o=t.cloneNode(!0);return o.addEventListener("change",S(this,C)),o.addEventListener("input",S(this,C)),o.setAttribute("aria-describedby","supporting-text extended-supporting-text sub-label message"),o.ariaLabel=this.label,o.setAttribute("id","select"),o.disabled=this.disabled,o.className="native-control",S(this,y)?o.value=this.value:this.value=o.value,o});this._elSelectContainer.replaceChildren(...e)}formResetCallback(){if(this.selectElement)if(this.selectElement.multiple)Array.from(this.selectElement.options).forEach(e=>{e.selected=!1}),this.value=[];else{const e=this.selectElement.options[0];e&&(this.value=e.value,this.selectElement.value=e.value)}}_getValidityAnchor(){return this.selectElement}_handleValueChange(){if(this.selectElement){if(this.multiple){const e=this.value||[];Array.from(this.selectElement.options).forEach(t=>{t.selected=e.includes(t.value)})}else this.selectElement.value=this.value;this.requestUpdate()}}};y=new WeakMap;i=new WeakSet;fe=function(){return!this.plain&&this.invalid};C=new WeakMap;xe=function(){if(this.selectElement)if(this.multiple){const e=Array.from(this.selectElement.selectedOptions);this.value=e.map(t=>t.value)}else this.value=this.selectElement.value};ye=function(){return[p(this,i,Se).call(this),p(this,i,we).call(this),p(this,i,Ce).call(this),p(this,i,Ee).call(this)].map(t=>a`${t}`)};Se=function(){return a`<slot name="lead" slot="lead"></slot>`};Ce=function(){if(!this.multiple)return a`<label id="placeholder" class="native-control"
        >${this.displayValue}</label
      >`};we=function(){return a`<div class="select-container"></div>`};Ee=function(){if(!this.multiple)return a` <gds-icon-chevron-bottom></gds-icon-chevron-bottom> `};n.styles=[qe,De,He];s([w({attribute:"supporting-text"})],n.prototype,"supportingText",2);s([w({type:String})],n.prototype,"size",2);s([w({type:Boolean})],n.prototype,"plain",2);s([ve("select")],n.prototype,"selectElement",2);s([w()],n.prototype,"value",1);s([ve(".select-container")],n.prototype,"_elSelectContainer",2);s([Te({childList:!0,subtree:!0,attributes:!0,characterData:!0})],n.prototype,"_captureDOM",1);s([Pe("value")],n.prototype,"_handleValueChange",1);n=s([ke()],n);let k=class extends $e(Ve(Ge(n))){};k=s([_e("gds-select",{dependsOn:[Oe,Ie,ze,Re]})],k);k.define();const Mt={title:"Components/Select",component:"gds-select",tags:["autodocs"],argTypes:{...Le("gds-select")},parameters:{docs:{description:{component:`\`gds-select\` is a wrapper component for the native select element.

Use this component instead of \`<gds-dropdown>\` when you need to leverage the inherent behavior of the native select element, for example when native accessibility features, some of which are not currently replicable in custom dropdowns, are required. Usability on mobile devices is also sometimes better with native select elements.

Don't use this component when you need to customize the dropdown behavior or appearance, or when you need to display complex content in the dropdown, or require multi-select functionality. While the native select element does support multi-select, it is not recommended for use in most cases.

The wrapped select element will be cloned into the component's shadow DOM. Therefore, event listeners should only be added on the host
element, and not on the enclosed select element. Also, state should also be handled only through the host.
Setting value or selected props on the select element will not work as expected.`}}}},l={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},c={...l,name:"Select",args:{label:"Label text",supportingText:"Supporting text",value:"",innerHTML:`
      <span slot="extended-supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>
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
    `}},m={...l,name:"Options",render:()=>u`
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
  `},g={...l,name:"Lead Icon",render:()=>u`
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
  `},h={...l,name:"Disabled",render:()=>u`
    <gds-flex>
      <gds-select disabled label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-lightning slot="lead"></gds-icon-lightning>
        <select>
          <option value="thunder">Thunder</option>
          <option value="lightning">Lightning</option>
        </select>
      </gds-select>
    </gds-flex>
  `},v={...l,name:"Validation",render:()=>u`
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
  `},b={...l,name:"Size",render:()=>u`
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
  `},f={...l,name:"Multiple",render:()=>u`
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
  `},x={...l,name:"Select Size",render:()=>u`
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
  `};var D,z,O,I,q;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Select',
  args: {
    label: 'Label text',
    supportingText: 'Supporting text',
    value: '',
    innerHTML: \`
      <span slot="extended-supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>
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
}`,...(O=(z=c.parameters)==null?void 0:z.docs)==null?void 0:O.source},description:{story:"Basic example showing the select component with a label, supporting text and a lead icon.\nThe wrapped `<select>` element is making use of `<optgroup>` elements to group the options.",...(q=(I=c.parameters)==null?void 0:I.docs)==null?void 0:q.description}}};var T,P,$,V,G;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...($=(P=m.parameters)==null?void 0:P.docs)==null?void 0:$.source},description:{story:'It is mandatory to use a native `<select>` element with options inside `<gds-select>`. `<gds-select>` is only a wrapper that allows native select to be used seamlessly along with the other form controls in the design system.\n\ne.g\n\n```html\n   <gds-select>\n    <select>\n      <optgroup label="Astronomy">\n        <option value="cosmology">Cosmology</option>\n        <option value="astrophysics">Astrophysics</option>\n      </optgroup>\n    </select>\n  </gds-select>\n```\n> In web components using Shadow DOM, elements cannot be associated with each other across Shadow DOM boundaries. This is why you need to wrap a full native `select` element and it\'s options, rather than just putting options directly under `<gds-select>`. If placed in a slot, options would not be picked up due to the Shadow DOM encapsulation.',...(G=(V=m.parameters)==null?void 0:V.docs)==null?void 0:G.description}}};var N,R,H,B,F;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(H=(R=g.parameters)==null?void 0:R.docs)==null?void 0:H.source},description:{story:`The lead icon is displayed to the left of the select field.
<br>It can be used to provide additional context or to visually represent the select field's purpose.
<br>It is set by adding an icon component to the 'lead' slot.`,...(F=(B=g.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};var W,J,j,U,Q;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        <select>
          <option value="thunder">Thunder</option>
          <option value="lightning">Lightning</option>
        </select>
      </gds-select>
    </gds-flex>
  \`
}`,...(j=(J=h.parameters)==null?void 0:J.docs)==null?void 0:j.source},description:{story:"The `disabled` property can be set to disable the `gds-select` field.\n<br> e.g\n\n```html\n<gds-select disabled> ... </gds-select>\n```",...(Q=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Q.description}}};var X,K,Y,Z,ee;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Y=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Y.source},description:{story:"Select has built-in support for form validation.<br>The validation feature is built on top of the browsers native validation features, using `ElementInternals` and `Constraint Validation API`.\n\nValidation is configured by adding a validator to a form element.<br> A validator is an object that implements the `GdsValidator` interface:\n\n```html\n<gds-select invalid></gds-select>\n```\n**@property invalid** - Indicates that the select field contains an error.",...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,oe,ne,se,ie;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ne.source},description:{story:"The `size` property can be set to 'small' to reduce the size of the select field.<br>\n**@property size** - The size of the select field.\n\n```html\n <gds-select size=\"small\"></gds-select>\n```",...(ie=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var ae,le,re,pe,ue;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(le=f.parameters)==null?void 0:le.docs)==null?void 0:re.source},description:{story:"The `multiple` attribute can be set to allow multiple options to be selected on the native `<select>` element.\n\nHowever, it is not recommended to use the native select element in multi-select mode. The native select element does not provide a good user experience for multi-select, especially when there are many options. Prefer to use checkbox groups or the `<gds-dropdown>` component for multi-select functionality instead.",...(ue=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:ue.description}}};var de,ce,me,ge,he;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:me.source},description:{story:'The native `<select size="...">` to not be confused with property `size` <br> it is the native attribute that sets the number of visible options in a select element.\n\n```html\n <gds-select>\n <select multiple size="14">\n   ...\n </select>\n</gds-select>\n```',...(he=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:he.description}}};const Lt=["Default","Option","Lead","Disabled","Validation","Size","Multiple","SelectSize"];export{c as Default,h as Disabled,g as Lead,f as Multiple,m as Option,x as SelectSize,b as Size,v as Validation,Lt as __namedExportsOrder,Mt as default};
