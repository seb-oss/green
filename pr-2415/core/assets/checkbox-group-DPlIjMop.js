import{n as l}from"./Reflect-DJ7r0WLU.js";import{a as $}from"./query-p8xgzTDt.js";import{n as A}from"./when-BR7zwNJC.js";import{G as L}from"./toggle-control-base.component-CcMVty3-.js";import{h as g,g as w}from"./gds-element-DTROifYq.js";import{a as B}from"./transitional-styles-BfqUw7Aj.js";import{c as W}from"./rbcb-toggle.template-B-MDayTD.js";import{t as H}from"./tokens.style-CJKwYBen.js";import{w as m}from"./watch-tFciLXSI.js";import{a as G}from"./button.component-qvVtjlow.js";import{I as J}from"./checkmark.component-BsK1aQGf.js";import{I as N}from"./minus-small.component-CeZtqvai.js";import{i as E}from"./lit-element-Bx14lxc-.js";import{l as U}from"./runtime-CNluP0A8.js";import{e as q}from"./if-defined-BAXgs-ZI.js";import{G as R,a as X}from"./form-control-header.component-C5iR_Qu9.js";import{o as K}from"./observe-light-dom-CmJPHUQ4.js";import{d as Q,b as Y,w as Z}from"./declarative-layout-mixins-DFPXvh_g.js";const j=E`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    cursor: default;
  }

  :host(:invalid) {
    color: var(--gds-sys-color-content-negative-01);
  }

  :host(:focus) {
    outline: none;
  }

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  #message {
    display: none;
  }
`;var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,O=e=>{throw TypeError(e)},p=(e,t,s,c)=>{for(var o=c>1?void 0:c?te(t,s):t,h=e.length-1,u;h>=0;h--)(u=e[h])&&(o=(c?u(t,s,o):u(o))||o);return c&&o&&ee(t,s,o),o},se=(e,t,s)=>t.has(e)||O("Cannot "+s),oe=(e,t,s)=>t.has(e)?O("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),x=(e,t,s)=>(se(e,t,"access private method"),s),v,M,y;let a=class extends G{constructor(){super(...arguments),oe(this,v),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1}get value(){return this._internalValue||""}set value(e){this._internalValue=e}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}focus(e){this._elCheckbox.focus(e)}render(){return g`
      <input
        type="checkbox"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        ?indeterminate=${this.indeterminate}
        aria-invalid=${this.invalid}
        aria-describedby="message supporting-text"
        id="checkbox-input"
        @change=${()=>{this.checked=this._elCheckbox.checked,x(this,v,y).call(this)}}
      />
      ${A(this.errorMessage,()=>g`<span id="message">${this.errorMessage}</span>`)}
      <gds-toggle-control-base type="checkbox" @click=${x(this,v,M)}>
        <label for="checkbox-input" slot="label"> ${this.label} </label>
        <span
          slot="supporting-text"
          class="supporting-text"
          id="supporting-text"
        >
          ${this.supportingText}
        </span>
        ${W({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}_getValidityAnchor(){return this._elCheckbox}formResetCallback(){this.checked=!1}};v=new WeakSet;M=function(e){this.disabled||e.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,x(this,v,y).call(this))};y=function(){this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};a.styles=[H,B,j];p([l()],a.prototype,"label",2);p([l({attribute:"supporting-text"})],a.prototype,"supportingText",2);p([l({type:Boolean})],a.prototype,"checked",2);p([l({type:Boolean,reflect:!0})],a.prototype,"indeterminate",2);p([l({type:Boolean,reflect:!0})],a.prototype,"disabled",2);p([$('input[type="checkbox"]')],a.prototype,"_elCheckbox",2);p([m("indeterminate")],a.prototype,"_handleIndeterminateChange",1);a=p([w("gds-checkbox",{dependsOn:[L,J,N]})],a);a.define();const re=E`
  :host {
    /* Font Sizes */
    --_font-label: var(--gds-sys-text-detail-book-m);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-s);
    font: var(--_font-label);

    /* Color */
    --_checkbox-label-color: var(--gds-sys-color-l3-content-tertiary);

    /* Perimiter */
    --_perimeter-size: var(--gds-sys-space-2xl);
    --_container-gap: var(--gds-sys-space-s);
  }

  :host(:invalid) {
    --_checkbox-label-color: var(--gds-sys-color-content-negative-01);
  }

  :host([size='small']) {
    --_font-label: var(--gds-sys-text-detail-book-s);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-xs);
    --_perimeter-size: var(--gds-sys-space-xl);
    --_container-gap: var(--gds-sys-space-xs);
  }

  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
  }

  :host([size='small']) .checkbox-group {
    gap: var(--gds-sys-space-xs);
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
    gap: var(--gds-sys-space-s) var(--gds-sys-space-xl);
  }

  .direction-column .content {
    flex-direction: column;
    gap: var(--gds-sys-space-s);
  }

  :host([size='small']) .direction-column .content {
    gap: var(--gds-sys-space-xs);
  }

  :host([size='small']) .direction-row .content {
    gap: var(--gds-sys-space-xs) var(--gds-sys-space-m);
  }
`;var ae=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},i=(e,t,s,c)=>{for(var o=c>1?void 0:c?ie(t,s):t,h=e.length-1,u;h>=0;h--)(u=e[h])&&(o=(c?u(t,s,o):u(o))||o);return c&&o&&ae(t,s,o),o},z=(e,t,s)=>t.has(e)||S("Cannot "+s),b=(e,t,s)=>(z(e,t,"read from private field"),s?s.call(e):t.get(e)),C=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),d=(e,t,s)=>(z(e,t,"access private method"),s),f,n,T,P,V,F,k,I,D;let r=class extends G{constructor(){super(...arguments),C(this,n),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,C(this,f,()=>{this.checkboxes.forEach(e=>{e.invalid=this.invalid,e.errorMessage=this.errorMessage})})}get value(){return this._internalValue||[]}set value(e){this._internalValue=e}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this._elCheckboxGroup}_handleValueChange(){this.checkboxes.forEach(e=>{e.checked=this.value.includes(e.value)||!1})}_handleGroupInvalidChange(){b(this,f).call(this)}focus(){var e;(e=this.checkboxes[0])==null||e.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",b(this,f))}render(){const e={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return g`<div
      role="group"
      id="checkboxgroup"
      class=${q(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${d(this,n,T).call(this)}
    </div>`}_syncOnDOMChange(){b(this,f).call(this),d(this,n,k).call(this)}};f=new WeakMap;n=new WeakSet;T=function(){return[d(this,n,P).call(this),d(this,n,V).call(this),d(this,n,D).call(this)].map(t=>g`${t}`)};P=function(){if(this.label)return g`<gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};V=function(){return g`<div class="content">
      <slot @input=${d(this,n,F)}></slot>
    </div>`};F=function(e){e&&e.stopPropagation(),d(this,n,k).call(this),d(this,n,I).call(this)};k=function(){const e=this.checkboxes.filter(t=>t.checked).map(t=>t.value);JSON.stringify(e)!==JSON.stringify(this.value)&&(this.value=e)};I=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};D=function(){return g`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};r.styles=[re];i([l()],r.prototype,"size",2);i([l()],r.prototype,"direction",2);i([l({attribute:"supporting-text"})],r.prototype,"supportingText",2);i([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);i([l({type:Array})],r.prototype,"value",1);i([$("#checkboxgroup")],r.prototype,"_elCheckboxGroup",2);i([m("value",{waitUntilFirstUpdate:!0})],r.prototype,"_handleValueChange",1);i([m("invalid"),m("errorMessage")],r.prototype,"_handleGroupInvalidChange",1);i([K({attributes:!0,childList:!0,subtree:!0,characterData:!0})],r.prototype,"_syncOnDOMChange",1);r=i([U()],r);let _=class extends Q(Y(Z(r))){};_=i([w("gds-checkbox-group",{dependsOn:[R,X]})],_);_.define();
