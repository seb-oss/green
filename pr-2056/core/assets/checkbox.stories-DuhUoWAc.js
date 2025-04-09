import{a as D}from"./argTableProps-DwQcFV4K.js";import{l as L}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{n as c,h as b,g as E,r as M,G as H}from"./custom-element-scoping-b4c89-hi.js";import{a as W}from"./query-p8xgzTDt.js";import{e as B}from"./class-map-CXsQwv0r.js";import{G as V,a as q}from"./form-control-header.component-C4JQUZjZ.js";import{w as $}from"./watch-tFciLXSI.js";import{d as K,b as X,w as I}from"./declarative-layout-mixins-BB4ZLY5n.js";import{a as J}from"./button.component-Bdos8zoN.js";import{i as T}from"./lit-element-Bx14lxc-.js";import{G as N}from"./selection-field-label.component-YG8VO96b.js";import{t as Q}from"./tokens.style-C9bLefPj.js";import"./custom-elements-XkCQEGUf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./badge.component-C6J1p3VS.js";import"./flex.component-QD4FtwzU.js";import"./div.component-DQzJWx6E.js";import"./triangle-exclamation.component-BC2b4__3.js";import"./icon-TXeUf8MR.js";import"./card.component-URb5HL5V.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./transitional-styles-BOwn52Fb.js";import"./observe-light-dom-CmJPHUQ4.js";const R=T`
  :host {
    --checkbox-bg-mix: color-mix(
      in srgb,
      var(--gds-color-l3-background-secondary),
      var(--gds-color-l3-states-light-hover)
    );
    --checkbox-bg-mix-active: color-mix(
      in srgb,
      var(--gds-color-l3-background-secondary),
      var(--gds-color-l3-states-light-pressed)
    );

    --checkbox-size: var(--gds-space-xl);
    --checkbox-disc-size: var(--gds-space-m);
    --checkbox-radius: var(--gds-space-2xs);
    --checkbox-border-color: var(--gds-color-l3-border-secondary);
    --checkbox-border-color-selected: var(--gds-color-l3-border-primary);
    --checkbox-border-width: var(--gds-space-4xs);
    --checkbox-border-width-selected: var(--gds-space-2xs);
    --checkbox-outline-width: var(--gds-space-3xs);
    --checkbox-disc-background-color: var(--gds-color-l3-content-primary);

    /* Font Sizes */
    --_font-size-label: var(--gds-text-size-detail-m);
    --_line-height-label: var(--gds-text-line-height-detail-m);
    --_font-size-supporting-text: var(--gds-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-text-line-height-detail-s);
    font-size: var(--_font-size-label);
    line-height: var(--_line-height-label);

    /* Color */
    --_checkbox-label-color: var(--gds-color-l3-content-tertiary);
    --_checkbox-outline-color: var(--gds-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --checkbox-border-color: var(--gds-color-l3-border-negative);
    --checkbox-disc-background-color: var(
      --gds-color-l3-background-negative-secondary
    );
    --checkbox-border-color-selected: var(--gds-color-l3-border-negative);
    --checkbox-bg-mix: color-mix(
      in srgb,
      var(--gds-color-l3-background-negative-secondary),
      var(--gds-color-l3-states-negative-hover)
    );
    --checkbox-bg-mix-active: color-mix(
      in srgb,
      var(--gds-color-l3-background-negative-secondary),
      var(--gds-color-l3-states-negative-pressed)
    );
    --_checkbox-label-color: var(--gds-color-l3-content-negative);
    --_checkbox-outline-color: var(--gds-color-l3-content-negative);
  }

  :host([size='small']) {
    --_font-size-label: var(--gds-text-size-detail-s);
    --_line-height-label: var(--gds-text-line-height-detail-s);
    --_font-size-supporting-text: var(--gds-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-text-line-height-detail-s);
  }

  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: var(--gds-space-m);
  }

  .content {
    display: flex;
    position: relative;
    max-width: max-content;
    color: var(--_checkbox-label-color);
  }

  .direction-row .content {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gds-space-l);
  }

  .direction-column .content {
    flex-direction: column;
    gap: var(--gds-space-xs);
  }
`;var U=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,A=e=>{throw TypeError(e)},n=(e,t,o,a)=>{for(var s=a>1?void 0:a?Y(t,o):t,d=e.length-1,h;d>=0;d--)(h=e[d])&&(s=(a?h(t,o,s):h(s))||s);return a&&s&&U(t,o,s),s},Z=(e,t,o)=>t.has(e)||A("Cannot "+o),j=(e,t,o)=>t.has(e)?A("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),g=(e,t,o)=>(Z(e,t,"access private method"),o),p,G,S,F,O;let i=class extends J{constructor(){super(...arguments),j(this,p),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,this._isConnected=!1}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._isConnected}render(){const e={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return b`<div
      role="group"
      id="checkboxgroup"
      class=${B(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
    >
      ${g(this,p,G).call(this)}
    </div>`}};p=new WeakSet;G=function(){return[g(this,p,S).call(this),g(this,p,F).call(this),g(this,p,O).call(this)].map(t=>b`${t}`)};S=function(){if(this.label)return b` <gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};F=function(){return b` <div class="content">
      <slot></slot>
    </div>`};O=function(){return b` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
    >
    </gds-form-control-footer>`};i.styles=[R];n([c()],i.prototype,"size",2);n([c()],i.prototype,"direction",2);n([c({attribute:"supporting-text"})],i.prototype,"supportingText",2);n([c({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);n([W(".content")],i.prototype,"_contentElement",2);n([$("value")],i.prototype,"_handleValueChange",1);i=n([L()],i);let u=class extends K(X(I(i))){};u=n([E("gds-checkbox-group",{dependsOn:[V,q]})],u);u.define();const ee=T`
  @layer base, a11y, reset, transitional-styles;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .checkbox {
        transition: none;
      }
    }
  }

  @layer base {
    :host([disabled]) {
      --_checkbox-label-color: var(--gds-color-l3-content-disabled);
    }

    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: var(--checkbox-disc-size);
      height: var(--checkbox-disc-size);
      margin-block-start: calc(var(--checkbox-border-width) * 2);
      cursor: pointer;
    }

    .state {
      display: flex;
      box-sizing: border-box;
      backface-visibility: hidden;
      transition-property: background-color, scale, outline;
      transition-duration: 248ms;
      outline-style: solid;
      outline-offset: calc(-1 * var(--checkbox-outline-width));
      outline-width: var(--checkbox-outline-width);
      outline-color: transparent;
      border-radius: var(--checkbox-radius);
      min-width: var(--checkbox-size);
      min-height: var(--checkbox-size);
      position: absolute;
      left: calc(
        * 1 - calc((var(--checkbox-size) - var(--checkbox-disc-size)) / 2)
      );
      top: calc(
        * 1 - calc((var(--checkbox-size) - var(--checkbox-disc-size)) / 2)
      );
      scale: 0.8;
    }

    @media (hover: hover) {
      .checkbox:hover,
      :host(:hover) .checkbox .state {
        background-color: var(--checkbox-bg-mix);
        scale: 1;
      }
    }

    .checkbox:active .state,
    :host(:active) .checkbox .state {
      background-color: var(--checkbox-bg-mix-active);
    }

    :host(:active:not(:focus-visible)) .checkbox:active .state,
    :host(:active:not(:focus-visible)) .checkbox .state {
      scale: 0.96;
    }

    :host(:focus) {
      outline: none;
    }

    :host(:focus) .checkbox .state {
      outline-color: var(--_checkbox-outline-color);
      scale: 1;
    }

    :host(:not(:focus-visible)) .checkbox .state {
      outline-color: transparent;
    }

    .disc {
      width: var(--checkbox-disc-size);
      height: var(--checkbox-disc-size);
      border-radius: var(--checkbox-radius);
      box-shadow: inset 0 0 0 var(--checkbox-border-width)
        var(--checkbox-border-color);
      background-color: var(--checkbox-disc-background-color);
      box-sizing: border-box;
      transition-property: box-shadow;
      transition-duration: 248ms;
      will-change: box-shadow;
      position: absolute;
      inset: 0;
    }

    :host([checked]) .disc,
    :host(:active) .disc {
      box-shadow: inset 0 0 0 var(--checkbox-border-width-selected)
        var(--checkbox-border-color-selected);
    }

    :host([disabled]) {
      pointer-events: none;
    }

    :host([disabled]) .checkbox .disc {
      box-shadow: none;
      background-color: var(--gds-color-l3-content-disabled);
    }
  }
`;var te=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,P=e=>{throw TypeError(e)},l=(e,t,o,a)=>{for(var s=a>1?void 0:a?oe(t,o):t,d=e.length-1,h;d>=0;d--)(h=e[d])&&(s=(a?h(t,o,s):h(s))||s);return a&&s&&te(t,o,s),s},se=(e,t,o)=>t.has(e)||P("Cannot "+o),m=(e,t,o)=>(se(e,t,"read from private field"),o?o.call(e):t.get(e)),f=(e,t,o)=>t.has(e)?P("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),v,k;let r=class extends H{constructor(){super(...arguments),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,f(this,v,e=>{this.checked=!this.checked,this.focus(),this.dispatchEvent(new Event("gds-checkbox-change",{bubbles:!0}))}),f(this,k,e=>{this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.checked=!0,this.dispatchEvent(new Event("gds-checkbox-change",{bubbles:!0})))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","checkbox"),this._updateAriaState(),this.addEventListener("keydown",m(this,k)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.toggleAttribute("aria-invalid",this.invalid)}updated(e){super.updated(e),(e.has("checked")||e.has("disabled")||e.has("invalid"))&&this._updateAriaState()}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}render(){return b`
      <gds-selection-field-label
        supporting-text=${this.supportingText}
        label=${this.label}
        type="checkbox"
        @click=${m(this,v)}
      >
        <div class="checkbox">
          <div class="state"></div>
          <div class="disc"></div>
        </div>
      </gds-selection-field-label>
    `}};v=new WeakMap;k=new WeakMap;r.styles=[Q,ee];l([c()],r.prototype,"label",2);l([c({attribute:"supporting-text"})],r.prototype,"supportingText",2);l([c()],r.prototype,"value",2);l([c({type:Boolean,reflect:!0})],r.prototype,"checked",2);l([c({type:Boolean,reflect:!0})],r.prototype,"disabled",2);l([c({type:Boolean})],r.prototype,"invalid",2);l([M()],r.prototype,"_isFocused",2);l([$("disabled")],r.prototype,"_handleDisabledChange",1);r=l([E("gds-checkbox",{dependsOn:[N]})],r);r.define();const Fe={title:"Components/Checkbox",component:"gds-checkbox-group",subcomponents:{GdsCheckbox:"gds-checkbox"},tags:["autodocs"],argTypes:{...D("gds-checkbox-group")}},re={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},x={...re,name:"checkbox",args:{label:"Pick options",supportingText:"Label support text.",innerHTML:`
    <gds-checkbox label="Hello"></gds-checkbox>
    <gds-checkbox label="Hello" checked></gds-checkbox>
    `}};var _,y,w,C,z;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'checkbox',
  args: {
    label: 'Pick options',
    supportingText: 'Label support text.',
    innerHTML: \`
    <gds-checkbox label="Hello"></gds-checkbox>
    <gds-checkbox label="Hello" checked></gds-checkbox>
    \`
  }
}`,...(w=(y=x.parameters)==null?void 0:y.docs)==null?void 0:w.source},description:{story:"TODO: Add documentation",...(z=(C=x.parameters)==null?void 0:C.docs)==null?void 0:z.description}}};const Oe=["checkbox"];export{Oe as __namedExportsOrder,x as checkbox,Fe as default};
