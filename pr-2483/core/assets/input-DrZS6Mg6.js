import{l as F,m as M}from"./runtime-CNluP0A8.js";import{n as r}from"./Reflect-DJ7r0WLU.js";import{a as A}from"./query-p8xgzTDt.js";import{r as T}from"./query-async-MEroNOeJ.js";import{o as i}from"./if-defined-CVqwUuaf.js";import{n as x}from"./when-BR7zwNJC.js";import{i as O,E as w}from"./lit-element-Bx14lxc-.js";import{f as P,G as W}from"./form-control-host.style-D8znqKmB.js";import{G as q,a as N}from"./form-control-header.component-JZThttLv.js";import{h as n,g as V}from"./gds-element-DTROifYq.js";import{t as D}from"./tokens.style-BcVhf7GG.js";import{w as R}from"./watch-tFciLXSI.js";import{w as H,b as L,d as X}from"./declarative-layout-mixins-DFPXvh_g.js";import{a as J,G as K}from"./button.component-CymCYp3R.js";import{G as Q}from"./flex.component-arMN-R6E.js";import{I as U}from"./cross-small.component-DziJ0Mzg.js";import{c as Y}from"./textarea.component-BBlghNXe.js";const Z=O``;var j=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,k=t=>{throw TypeError(t)},o=(t,e,a,d)=>{for(var p=d>1?void 0:d?tt(e,a):e,f=t.length-1,g;f>=0;f--)(g=t[f])&&(p=(d?g(e,a,p):g(p))||p);return d&&p&&j(e,a,p),p},b=(t,e,a)=>e.has(t)||k("Cannot "+a),c=(t,e,a)=>(b(t,e,"read from private field"),a?a.call(t):e.get(t)),h=(t,e,a)=>e.has(t)?k("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),et=(t,e,a,d)=>(b(t,e,"write to private field"),e.set(t,a),a),u=(t,e,a)=>(b(t,e,"access private method"),a),m,l,z,_,$,y,C,S,E,G,I,B;let s=class extends J{constructor(){super(),h(this,l),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.autocapitalize="off",this.autocorrect=!1,this.autofocus=!1,this.spellcheck=!0,this.charCounterCallback=Y,h(this,m,this.charCounterCallback(this)),h(this,_,t=>{const e=t.target;this.value=e.value}),h(this,$,t=>{const e=t.target;this.value=e.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),h(this,y,()=>{this.elInputAsync.then(t=>t.focus())}),h(this,C,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}focus(t){var e;(e=this._getValidityAnchor())==null||e.focus(t)}render(){return n`
      ${x(!this.plain,()=>n`<gds-form-control-header class="size-${this.size}">
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
        @click=${c(this,y)}
        id="field"
      >
        ${u(this,l,S).call(this)}
      </gds-field-base>
      ${x(u(this,l,z).call(this),()=>n` <gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .charCounter=${c(this,m)}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleValueChange(){et(this,m,this.charCounterCallback(this))}_getValidityAnchor(){return this.elInput}};m=new WeakMap;l=new WeakSet;z=function(){return!this.plain};_=new WeakMap;$=new WeakMap;y=new WeakMap;C=new WeakMap;S=function(){return[u(this,l,E).call(this),u(this,l,I).call(this),u(this,l,B).call(this),u(this,l,G).call(this)].map(e=>n`${e}`)};E=function(){return n` <slot slot="lead" name="lead"></slot> `};G=function(){return n`<slot slot="trail" name="trail"></slot>`};I=function(){return n`
      <input
        class="native-control"
        @input=${c(this,_)}
        @change=${c(this,$)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-errormessage="message"
        aria-label=${this.plain&&this.label||w}
        placeholder=" "
        type=${this.type}
        min=${i(this.min)}
        max=${i(this.max)}
        step=${i(this.step)}
        autocapitalize=${i(this.autocapitalize)}
        autocomplete=${i(this.autocomplete)}
        autocorrect=${i(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${i(this.enterkeyhint)}
        inputmode=${i(this.inputmode)}
        ?required=${this.required}
      />
    `};B=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?n`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${i(this.invalid?"negative":void 0)}"
        ?disabled="${this.disabled}"
        label="${M("Clear input")}"
        @click=${c(this,C)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-small></gds-icon-cross-small>
      </gds-button>`:w};s.styles=[D,P,Z];o([r({attribute:"supporting-text"})],s.prototype,"supportingText",2);o([r({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);o([r({type:Boolean})],s.prototype,"clearable",2);o([r({type:Number})],s.prototype,"maxlength",2);o([r({reflect:!0})],s.prototype,"size",2);o([r({type:Boolean})],s.prototype,"plain",2);o([r({reflect:!0})],s.prototype,"type",2);o([r()],s.prototype,"min",2);o([r()],s.prototype,"max",2);o([r()],s.prototype,"step",2);o([r()],s.prototype,"autocapitalize",2);o([r({type:Boolean})],s.prototype,"autocorrect",2);o([r()],s.prototype,"autocomplete",2);o([r({type:Boolean})],s.prototype,"autofocus",2);o([r()],s.prototype,"enterkeyhint",2);o([r({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],s.prototype,"spellcheck",2);o([r()],s.prototype,"inputmode",2);o([r({attribute:!1})],s.prototype,"charCounterCallback",2);o([T("input")],s.prototype,"elInputAsync",2);o([A("input")],s.prototype,"elInput",2);o([R("value")],s.prototype,"_handleValueChange",1);s=o([F()],s);let v=class extends H(L(X(s))){};v=o([V("gds-input",{dependsOn:[q,N,W,Q,K,U]})],v);v.define();
