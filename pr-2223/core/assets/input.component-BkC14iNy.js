import{m as A}from"./runtime-BL31MtW8.js";import{l as B}from"./localized-decorator-DtmrKsyB.js";import{n as r,h as l,g as M}from"./gds-element-DKcDvDP5.js";import{a as T}from"./query-p8xgzTDt.js";import{r as O}from"./query-async-MEroNOeJ.js";import{o as n}from"./if-defined-CVqwUuaf.js";import{n as $}from"./when-BR7zwNJC.js";import{i as P,E as x}from"./lit-element-Bx14lxc-.js";import{f as N,G as W}from"./form-control-host.style-BAqidaJg.js";import{G as R,a as q}from"./form-control-header.component-Drk2vaNu.js";import{t as L}from"./tokens.style-Dtt7LJZD.js";import{a as X,b as D,w as H}from"./declarative-layout-mixins-mU9_fNeX.js";import{a as V,G as J}from"./button.component-BStz0xvl.js";import{G as K}from"./flex.component-sjzeq8vf.js";import{I as Q}from"./cross-large.component-Bq6xmB1c.js";const U=P``;var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,C=t=>{throw TypeError(t)},o=(t,s,i,c)=>{for(var p=c>1?void 0:c?Z(s,i):s,m=t.length-1,f;m>=0;m--)(f=t[m])&&(p=(c?f(s,i,p):f(p))||p);return c&&p&&Y(s,i,p),p},w=(t,s,i)=>s.has(t)||C("Cannot "+i),d=(t,s,i)=>(w(t,s,"read from private field"),i?i.call(t):s.get(t)),u=(t,s,i)=>s.has(t)?C("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,i),h=(t,s,i)=>(w(t,s,"access private method"),i),a,E,y,v,g,b,S,z,k,G,I,F;let e=class extends V{constructor(){super(),u(this,a),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.autocapitalize="off",this.autofocus=!1,this.spellcheck=!0,u(this,y,t=>{const s=t.target;this.value=s.value}),u(this,v,t=>{const s=t.target;this.value=s.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),u(this,g,()=>{this.elInputAsync.then(t=>t.focus())}),u(this,b,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}render(){return l`
      ${$(!this.plain,()=>l`<gds-form-control-header class="size-${this.size}">
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
        @click=${d(this,g)}
        id="field"
      >
        ${h(this,a,S).call(this)}
      </gds-field-base>
      ${$(h(this,a,E).call(this),()=>{var t;return l` <gds-form-control-footer
            class="size-${this.size}"
            .charCounter=${d(this,a,F)?this.maxlength-(((t=this.value)==null?void 0:t.length)||0):void 0}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`})}
    `}_getValidityAnchor(){return this.elInput}};a=new WeakSet;E=function(){return!this.plain};y=new WeakMap;v=new WeakMap;g=new WeakMap;b=new WeakMap;S=function(){return[h(this,a,z).call(this),h(this,a,G).call(this),h(this,a,I).call(this),h(this,a,k).call(this)].map(s=>l`${s}`)};z=function(){return l` <slot slot="lead" name="lead"></slot> `};k=function(){return l`<slot slot="trail" name="trail"></slot>`};G=function(){return l`
      <input
        class="native-control"
        @input=${d(this,y)}
        @change=${d(this,v)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-label=${this.plain&&this.label||x}
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
    `};I=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?l`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${this.invalid?"negative":""}"
        ?disabled="${this.disabled}"
        label="${A("Clear input")}"
        @click=${d(this,b)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-large />
      </gds-button>`:x};F=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};e.styles=[L,N,U];o([r({attribute:"supporting-text"})],e.prototype,"supportingText",2);o([r({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],e.prototype,"showExtendedSupportingText",2);o([r({type:Boolean})],e.prototype,"clearable",2);o([r({type:Number})],e.prototype,"maxlength",2);o([r({type:String})],e.prototype,"size",2);o([r({type:Boolean})],e.prototype,"plain",2);o([r({reflect:!0})],e.prototype,"type",2);o([r()],e.prototype,"min",2);o([r()],e.prototype,"max",2);o([r()],e.prototype,"step",2);o([r()],e.prototype,"autocapitalize",2);o([r()],e.prototype,"autocorrect",2);o([r()],e.prototype,"autocomplete",2);o([r({type:Boolean})],e.prototype,"autofocus",2);o([r()],e.prototype,"enterkeyhint",2);o([r({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],e.prototype,"spellcheck",2);o([r()],e.prototype,"inputmode",2);o([O("input")],e.prototype,"elInputAsync",2);o([T("input")],e.prototype,"elInput",2);e=o([B()],e);let _=class extends X(D(H(e))){};_=o([M("gds-input",{dependsOn:[R,q,W,K,J,Q]})],_);export{_ as G};
