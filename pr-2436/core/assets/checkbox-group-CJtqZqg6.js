import{n as l}from"./Reflect-DJ7r0WLU.js";import{a as w}from"./query-p8xgzTDt.js";import{o as A,e as L}from"./if-defined-BAXgs-ZI.js";import{G as B}from"./toggle-control-base.component-C8OKWZVn.js";import{h as g,g as $}from"./gds-element-DTROifYq.js";import{a as W}from"./transitional-styles-D2m6PuZd.js";import{c as H}from"./rbcb-toggle.template-B-MDayTD.js";import{t as J}from"./tokens.style-BS_h03Rl.js";import{w as b}from"./watch-tFciLXSI.js";import{a as G}from"./button.component-CpGiPPR4.js";import{I as N}from"./checkmark.component-CMelikpB.js";import{I as U}from"./minus-small.component-BdwxrhaM.js";import{i as E}from"./lit-element-Bx14lxc-.js";import{l as q}from"./runtime-CNluP0A8.js";import{G as R,a as X}from"./form-control-header.component-C-yQvAXj.js";import{o as K}from"./observe-light-dom-CmJPHUQ4.js";import{d as Q,b as Y,w as Z}from"./declarative-layout-mixins-XrCARJjW.js";const j=E`
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
`;var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,O=e=>{throw TypeError(e)},p=(e,t,s,c)=>{for(var o=c>1?void 0:c?te(t,s):t,h=e.length-1,u;h>=0;h--)(u=e[h])&&(o=(c?u(t,s,o):u(o))||o);return c&&o&&ee(t,s,o),o},se=(e,t,s)=>t.has(e)||O("Cannot "+s),oe=(e,t,s)=>t.has(e)?O("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),m=(e,t,s)=>(se(e,t,"access private method"),s),f,S,_;let i=class extends G{constructor(){super(...arguments),oe(this,f),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1}get value(){return this._internalValue||""}set value(e){this._internalValue=e}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}render(){return g`
      <input
        type="checkbox"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        ?indeterminate=${this.indeterminate}
        aria-invalid=${this.invalid}
        aria-describedby=${A(this.supportingText?"supporting-text":"")}
        id="checkbox-input"
        @change=${()=>{this.checked=this._elCheckbox.checked,m(this,f,_).call(this)}}
      />
      <gds-toggle-control-base type="checkbox" @click=${m(this,f,S)}>
        <label for="checkbox-input" slot="label"> ${this.label} </label>
        <span
          slot="supporting-text"
          class="supporting-text"
          id="supporting-text"
        >
          ${this.supportingText}
        </span>
        ${H({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}_getValidityAnchor(){return this._elCheckbox}formResetCallback(){this.checked=!1}};f=new WeakSet;S=function(e){this.disabled||e.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,m(this,f,_).call(this))};_=function(){this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};i.styles=[J,W,j];p([l()],i.prototype,"label",2);p([l({attribute:"supporting-text"})],i.prototype,"supportingText",2);p([l({type:Boolean})],i.prototype,"checked",2);p([l({type:Boolean,reflect:!0})],i.prototype,"indeterminate",2);p([l({type:Boolean,reflect:!0})],i.prototype,"disabled",2);p([w('input[type="checkbox"]')],i.prototype,"_elCheckbox",2);p([b("indeterminate")],i.prototype,"_handleIndeterminateChange",1);i=p([$("gds-checkbox",{dependsOn:[B,N,U]})],i);i.define();const re=E`
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
`;var ie=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,z=e=>{throw TypeError(e)},a=(e,t,s,c)=>{for(var o=c>1?void 0:c?ae(t,s):t,h=e.length-1,u;h>=0;h--)(u=e[h])&&(o=(c?u(t,s,o):u(o))||o);return c&&o&&ie(t,s,o),o},T=(e,t,s)=>t.has(e)||z("Cannot "+s),k=(e,t,s)=>(T(e,t,"read from private field"),s?s.call(e):t.get(e)),C=(e,t,s)=>t.has(e)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),d=(e,t,s)=>(T(e,t,"access private method"),s),v,n,P,M,I,V,y,F,D;let r=class extends G{constructor(){super(...arguments),C(this,n),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,C(this,v,()=>{this.checkboxes.forEach(e=>{e.invalid=this.invalid})})}get value(){return this._internalValue||[]}set value(e){this._internalValue=e}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this._elCheckboxGroup}_handleValueChange(){this.checkboxes.forEach(e=>{e.checked=this.value.includes(e.value)||!1})}_handleGroupInvalidChange(){k(this,v).call(this)}focus(){var e;(e=this.checkboxes[0])==null||e.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",k(this,v))}render(){const e={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return g`<div
      role="group"
      id="checkboxgroup"
      class=${L(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${d(this,n,P).call(this)}
    </div>`}_syncOnDOMChange(){d(this,n,y).call(this)}};v=new WeakMap;n=new WeakSet;P=function(){return[d(this,n,M).call(this),d(this,n,I).call(this),d(this,n,D).call(this)].map(t=>g`${t}`)};M=function(){if(this.label)return g`<gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};I=function(){return g`<div class="content">
      <slot @input=${d(this,n,V)}></slot>
    </div>`};V=function(e){e&&e.stopPropagation(),d(this,n,y).call(this),d(this,n,F).call(this)};y=function(){const e=this.checkboxes.filter(t=>t.checked).map(t=>t.value);JSON.stringify(e)!==JSON.stringify(this.value)&&(this.value=e)};F=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};D=function(){return g`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};r.styles=[re];a([l()],r.prototype,"size",2);a([l()],r.prototype,"direction",2);a([l({attribute:"supporting-text"})],r.prototype,"supportingText",2);a([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);a([l({type:Array})],r.prototype,"value",1);a([w("#checkboxgroup")],r.prototype,"_elCheckboxGroup",2);a([b("value",{waitUntilFirstUpdate:!0})],r.prototype,"_handleValueChange",1);a([b("invalid")],r.prototype,"_handleGroupInvalidChange",1);a([K({attributes:!0,childList:!0,subtree:!0,characterData:!0})],r.prototype,"_syncOnDOMChange",1);r=a([q()],r);let x=class extends Q(Y(Z(r))){};x=a([$("gds-checkbox-group",{dependsOn:[R,X]})],x);x.define();
