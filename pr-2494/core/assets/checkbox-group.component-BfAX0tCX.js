import{n as l}from"./Reflect-DJ7r0WLU.js";import{a as $}from"./query-p8xgzTDt.js";import{n as A}from"./when-BR7zwNJC.js";import{G as L}from"./toggle-control-base.component-246dLh24.js";import{h as g,g as w}from"./gds-element-DTROifYq.js";import{c as B}from"./transitional-styles-BBuLsmAa.js";import{c as W}from"./rbcb-toggle.template-DqXF-ZkM.js";import{t as H}from"./tokens.style-DeseHqaM.js";import{w as m}from"./watch-tFciLXSI.js";import{a as G}from"./button.component-BfRSreak.js";import{I as J}from"./checkmark.component-B7EWT7bF.js";import{I as N}from"./minus-small.component-Cqp98pLU.js";import{i as E}from"./lit-element-Bx14lxc-.js";import{l as U}from"./runtime-CNluP0A8.js";import{e as q}from"./class-map-CXsQwv0r.js";import{G as R,a as X}from"./form-control-header.component-C4Z7eJhe.js";import{o as K}from"./observe-light-dom-CmJPHUQ4.js";import{d as Q,b as Y,w as Z}from"./declarative-layout-mixins-C4FFYA_h.js";const j=E`
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

  #message {
    display: none;
  }
`;var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,O=e=>{throw TypeError(e)},h=(e,t,s,c)=>{for(var r=c>1?void 0:c?te(t,s):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(r=(c?u(t,s,r):u(r))||r);return c&&r&&ee(t,s,r),r},se=(e,t,s)=>t.has(e)||O("Cannot "+s),re=(e,t,s)=>t.has(e)?O("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),b=(e,t,s)=>(se(e,t,"access private method"),s),v,M,_;let n=class extends G{constructor(){super(...arguments),re(this,v),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1}get value(){return this._internalValue||""}set value(e){this._internalValue=e}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}focus(e){this._elCheckbox.focus(e)}render(){return g`
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          ?indeterminate=${this.indeterminate}
          aria-invalid=${this.invalid}
          aria-describedby="message supporting-text"
          id="checkbox-input"
          @change=${()=>{this.checked=this._elCheckbox.checked,b(this,v,_).call(this)}}
        />
        ${A(this.errorMessage,()=>g`<span id="message">${this.errorMessage}</span>`)}
        <gds-toggle-control-base type="checkbox" @click=${b(this,v,M)}>
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
      </div>
    `}_getValidityAnchor(){return this._elCheckbox}formResetCallback(){this.checked=!1}};v=new WeakSet;M=function(e){this.disabled||e.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,b(this,v,_).call(this))};_=function(){this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};n.styles=[H,B,j];h([l()],n.prototype,"label",2);h([l({attribute:"supporting-text"})],n.prototype,"supportingText",2);h([l({type:Boolean})],n.prototype,"checked",2);h([l({type:Boolean,reflect:!0})],n.prototype,"indeterminate",2);h([l({type:Boolean,reflect:!0})],n.prototype,"disabled",2);h([$('input[type="checkbox"]')],n.prototype,"_elCheckbox",2);h([m("indeterminate")],n.prototype,"_handleIndeterminateChange",1);n=h([w("gds-checkbox",{dependsOn:[L,J,N]})],n);const oe=E`
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
`;var ae=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},a=(e,t,s,c)=>{for(var r=c>1?void 0:c?ie(t,s):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(r=(c?u(t,s,r):u(r))||r);return c&&r&&ae(t,s,r),r},z=(e,t,s)=>t.has(e)||S("Cannot "+s),x=(e,t,s)=>(z(e,t,"read from private field"),s?s.call(e):t.get(e)),k=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),d=(e,t,s)=>(z(e,t,"access private method"),s),f,i,P,T,V,F,y,I,D;let o=class extends G{constructor(){super(...arguments),k(this,i),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,k(this,f,()=>{this.checkboxes.forEach(e=>{e.invalid=this.invalid,e.errorMessage=this.errorMessage})})}get value(){return this._internalValue||[]}set value(e){this._internalValue=e}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this._elCheckboxGroup}_handleValueChange(){this.checkboxes.forEach(e=>{e.checked=this.value.includes(e.value)||!1})}_handleGroupInvalidChange(){x(this,f).call(this)}focus(){var e;(e=this.checkboxes[0])==null||e.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",x(this,f))}render(){const e={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return g`<div
      role="group"
      id="checkboxgroup"
      class=${q(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${d(this,i,P).call(this)}
    </div>`}_syncOnDOMChange(){x(this,f).call(this),d(this,i,y).call(this)}};f=new WeakMap;i=new WeakSet;P=function(){return[d(this,i,T).call(this),d(this,i,V).call(this),d(this,i,D).call(this)].map(t=>g`${t}`)};T=function(){if(this.label)return g`<gds-form-control-header class="size-${this.size}">
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
      <slot @input=${d(this,i,F)}></slot>
    </div>`};F=function(e){e&&e.stopPropagation(),d(this,i,y).call(this),d(this,i,I).call(this)};y=function(){const e=this.checkboxes.filter(t=>t.checked).map(t=>t.value);JSON.stringify(e)!==JSON.stringify(this.value)&&(this.value=e)};I=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};D=function(){return g`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};o.styles=[oe];a([l()],o.prototype,"size",2);a([l()],o.prototype,"direction",2);a([l({attribute:"supporting-text"})],o.prototype,"supportingText",2);a([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],o.prototype,"showExtendedSupportingText",2);a([l({type:Array})],o.prototype,"value",1);a([$("#checkboxgroup")],o.prototype,"_elCheckboxGroup",2);a([m("value",{waitUntilFirstUpdate:!0})],o.prototype,"_handleValueChange",1);a([m("invalid"),m("errorMessage")],o.prototype,"_handleGroupInvalidChange",1);a([K({attributes:!0,childList:!0,subtree:!0,characterData:!0})],o.prototype,"_syncOnDOMChange",1);o=a([U()],o);let C=class extends Q(Y(Z(o))){};C=a([w("gds-checkbox-group",{dependsOn:[R,X]})],C);export{n as G,C as a};
