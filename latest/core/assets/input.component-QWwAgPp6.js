import{Y as R,V as P,X as u,W as G,af as g,A as v,al as M,i as F,E as D,n as a,f as W,a7 as N,Z as q,S as U,Q as L,a8 as X,d as A,h as p,o as n,N as Y,g as H,O as K}from"./iframe-CsT9moiw.js";import{l as Q}from"./localized-decorator-CHDsyZqF.js";import{r as Z}from"./query-async-DTsUub8W.js";import{f as J,G as j}from"./form-control-host.style-Blx6QSWg.js";import{G as tt,a as et}from"./form-control-header.component-1yNw0pfW.js";import{G as st}from"./flex.component-DByS7Bd2.js";import{I as it}from"./cross-small.component-CQJ2s4d-.js";import{c as rt}from"./textarea.component-C7rXnKla.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=R(class extends P{constructor(t){if(super(t),t.type!==u.PROPERTY&&t.type!==u.ATTRIBUTE&&t.type!==u.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!G(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===g||e===v)return e;const r=t.element,o=t.name;if(t.type===u.PROPERTY){if(e===r[o])return g}else if(t.type===u.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(o))return g}else if(t.type===u.ATTRIBUTE&&r.getAttribute(o)===e+"")return g;return M(t),e}}),ot=F`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: var(--_appearance-spin-button, auto);
  }

  input[type='number'] {
    -moz-appearance: var(--_appearance-spin-button, textfield);
  }
`;var nt=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,T=t=>{throw TypeError(t)},i=(t,e,r,o)=>{for(var h=o>1?void 0:o?lt(e,r):e,y=t.length-1,_;y>=0;y--)(_=t[y])&&(h=(o?_(e,r,h):_(h))||h);return o&&h&&nt(e,r,h),h},x=(t,e,r)=>e.has(t)||T("Cannot "+r),f=(t,e,r)=>(x(t,e,"read from private field"),r?r.call(t):e.get(t)),c=(t,e,r)=>e.has(t)?T("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),pt=(t,e,r,o)=>(x(t,e,"write to private field"),e.set(t,r),r),d=(t,e,r)=>(x(t,e,"access private method"),r),m,l,S,C,w,$,b,E,V,z,B,I,O;let s=class extends X{constructor(){super(),c(this,l),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.autocapitalize="off",this.autocorrect=!1,this.autofocus=!1,this.spellcheck=!0,this.charCounterCallback=rt,c(this,m,this.charCounterCallback(this)),c(this,C,t=>{const e=t.target;this.value=e.value}),c(this,w,t=>{const e=t.target;this.value=e.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),c(this,$,t=>{if(t.key!=="Enter"||this.disabled||t.isComposing||t.repeat)return;const e=this.form??this.closest("form");e&&queueMicrotask(()=>{t.defaultPrevented||this.disabled||e.requestSubmit()})}),c(this,b,()=>{this.elInputAsync.then(t=>t.focus())}),c(this,E,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}focus(t){var e;(e=this._getValidityAnchor())==null||e.focus(t)}select(){var t;(t=this._getValidityAnchor())==null||t.select()}setRangeText(...t){var e,r;(e=this._getValidityAnchor())==null||e.setRangeText(...t),this.value=((r=this._getValidityAnchor())==null?void 0:r.value)||""}setSelectionRange(...t){var e;(e=this._getValidityAnchor())==null||e.setSelectionRange(...t)}showPicker(){var t;(t=this._getValidityAnchor())==null||t.showPicker()}stepDown(t){var e;(e=this._getValidityAnchor())==null||e.stepDown(t)}stepUp(t){var e;(e=this._getValidityAnchor())==null||e.stepUp(t)}get selectionStart(){var t;return(t=this._getValidityAnchor())==null?void 0:t.selectionStart}set selectionStart(t){const e=this._getValidityAnchor();e&&(e.selectionStart=t)}get selectionEnd(){var t;return(t=this._getValidityAnchor())==null?void 0:t.selectionEnd}set selectionEnd(t){const e=this._getValidityAnchor();e&&(e.selectionEnd=t)}get selectionDirection(){var t;return(t=this._getValidityAnchor())==null?void 0:t.selectionDirection}set selectionDirection(t){const e=this._getValidityAnchor();e&&(e.selectionDirection=t)}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}render(){return p`
      ${A(!this.plain,()=>p`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText=${this.showExtendedSupportingText}
          >
            <label for="input" slot="label">${this.label}</label>
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
        @click=${f(this,b)}
        id="field"
      >
        ${d(this,l,V).call(this)}
      </gds-field-base>
      ${A(d(this,l,S).call(this),()=>p` <gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .charCounter=${f(this,m)}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleValueChange(){pt(this,m,this.charCounterCallback(this))}_getValidityAnchor(){return this.elInput}};m=new WeakMap;l=new WeakSet;S=function(){return!this.plain};C=new WeakMap;w=new WeakMap;$=new WeakMap;b=new WeakMap;E=new WeakMap;V=function(){return[d(this,l,z).call(this),d(this,l,I).call(this),d(this,l,O).call(this),d(this,l,B).call(this)].map(e=>p`${e}`)};z=function(){return p` <slot slot="lead" name="lead"></slot> `};B=function(){return p`<slot slot="trail" name="trail"></slot>`};I=function(){return p`
      <input
        class="native-control"
        @input=${f(this,C)}
        @keydown=${f(this,$)}
        @change=${f(this,w)}
        .value=${at(this.value)}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-errormessage="message"
        aria-label=${this.plain&&this.label||v}
        placeholder=" "
        type=${this.type}
        min=${n(this.min)}
        max=${n(this.max)}
        step=${n(this.step)}
        autocapitalize=${n(this.autocapitalize)}
        autocomplete=${n(this.autocomplete)}
        autocorrect=${n(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${n(this.enterkeyhint)}
        inputmode=${n(this.inputmode)}
        ?required=${this.required}
      />
    `};O=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?p`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${n(this.invalid?"negative":void 0)}"
        ?disabled="${this.disabled}"
        label="${Y("Clear input")}"
        @click=${f(this,E)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-small></gds-icon-cross-small>
      </gds-button>`:v};s.styles=[D,J,ot];i([a({attribute:"supporting-text"})],s.prototype,"supportingText",2);i([a({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);i([a({type:Boolean})],s.prototype,"clearable",2);i([a({type:Number})],s.prototype,"maxlength",2);i([a({reflect:!0})],s.prototype,"size",2);i([a({type:Boolean})],s.prototype,"plain",2);i([a({reflect:!0})],s.prototype,"type",2);i([a()],s.prototype,"min",2);i([a()],s.prototype,"max",2);i([a()],s.prototype,"step",2);i([a()],s.prototype,"autocapitalize",2);i([a({type:Boolean})],s.prototype,"autocorrect",2);i([a()],s.prototype,"autocomplete",2);i([a({type:Boolean})],s.prototype,"autofocus",2);i([a()],s.prototype,"enterkeyhint",2);i([a({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],s.prototype,"spellcheck",2);i([a()],s.prototype,"inputmode",2);i([a({attribute:!1})],s.prototype,"charCounterCallback",2);i([Z("input")],s.prototype,"elInputAsync",2);i([W("input")],s.prototype,"elInput",2);i([N("value")],s.prototype,"_handleValueChange",1);s=i([Q()],s);let k=class extends q(U(L(s))){};k=i([H("gds-input",{dependsOn:[tt,et,j,st,K,it]})],k);export{k as G};
