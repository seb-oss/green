import{m as M}from"./runtime-BL31MtW8.js";import{l as A}from"./localized-decorator-DtmrKsyB.js";import{n as i,h as l,g as B}from"./custom-element-scoping-CNGU1oQ0.js";import{a as T}from"./query-p8xgzTDt.js";import{r as O}from"./query-async-MEroNOeJ.js";import{o as n}from"./if-defined-CVqwUuaf.js";import{n as $}from"./when-BR7zwNJC.js";import{i as P,E as x}from"./lit-element-Bx14lxc-.js";import{f as N,G as W}from"./form-control-host.style-tmPF1Pqn.js";import{G as R,a as q}from"./form-control-header.component-DXo0ZI5V.js";import{t as L}from"./tokens.style-DQsNuKSy.js";import{a as X,b as D,w as H}from"./declarative-layout-mixins-dHcexrGz.js";import{a as V,G as J}from"./button.component-CAws_hxG.js";import{G as K}from"./flex.component-DXi-h7Ch.js";import{I as Q}from"./cross-large.component-BoQaUmR8.js";const U=P``;var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,w=t=>{throw TypeError(t)},o=(t,s,r,c)=>{for(var p=c>1?void 0:c?Z(s,r):s,m=t.length-1,f;m>=0;m--)(f=t[m])&&(p=(c?f(s,r,p):f(p))||p);return c&&p&&Y(s,r,p),p},C=(t,s,r)=>s.has(t)||w("Cannot "+r),d=(t,s,r)=>(C(t,s,"read from private field"),r?r.call(t):s.get(t)),u=(t,s,r)=>s.has(t)?w("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,r),h=(t,s,r)=>(C(t,s,"access private method"),r),a,E,v,y,g,b,z,k,G,S,I,F;let e=class extends V{constructor(){super(),u(this,a),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.autocapitalize="off",this.autofocus=!1,this.spellcheck=!0,u(this,v,t=>{const s=t.target;this.value=s.value}),u(this,y,t=>{const s=t.target;this.value=s.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),u(this,g,()=>{this.elInputAsync.then(t=>t.focus())}),u(this,b,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}render(){return l`
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
        ${h(this,a,z).call(this)}
      </gds-field-base>
      ${$(h(this,a,E).call(this),()=>{var t;return l` <gds-form-control-footer
            class="size-${this.size}"
            .charCounter=${d(this,a,F)?this.maxlength-(((t=this.value)==null?void 0:t.length)||0):void 0}
            .validationMessage=${this.invalid?this.errorMessage||this.validationMessage:void 0}
          ></gds-form-control-footer>`})}
    `}_getValidityAnchor(){return this.elInput}};a=new WeakSet;E=function(){return!this.plain};v=new WeakMap;y=new WeakMap;g=new WeakMap;b=new WeakMap;z=function(){return[h(this,a,k).call(this),h(this,a,S).call(this),h(this,a,I).call(this),h(this,a,G).call(this)].map(s=>l`${s}`)};k=function(){return l` <slot slot="lead" name="lead"></slot> `};G=function(){return l`<slot slot="trail" name="trail"></slot>`};S=function(){return l`
      <input
        class="native-control"
        @input=${d(this,v)}
        @change=${d(this,y)}
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
        label="${M("Clear input")}"
        @click=${d(this,b)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-large />
      </gds-button>`:x};F=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};e.styles=[L,N,U];o([i({attribute:"supporting-text"})],e.prototype,"supportingText",2);o([i({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],e.prototype,"showExtendedSupportingText",2);o([i({type:Boolean})],e.prototype,"clearable",2);o([i({type:Number})],e.prototype,"maxlength",2);o([i({type:String})],e.prototype,"size",2);o([i({type:Boolean})],e.prototype,"plain",2);o([i({reflect:!0})],e.prototype,"type",2);o([i()],e.prototype,"min",2);o([i()],e.prototype,"max",2);o([i()],e.prototype,"step",2);o([i()],e.prototype,"autocapitalize",2);o([i()],e.prototype,"autocorrect",2);o([i()],e.prototype,"autocomplete",2);o([i({type:Boolean})],e.prototype,"autofocus",2);o([i()],e.prototype,"enterkeyhint",2);o([i({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],e.prototype,"spellcheck",2);o([i()],e.prototype,"inputmode",2);o([O("input")],e.prototype,"elInputAsync",2);o([T("input")],e.prototype,"elInput",2);e=o([A()],e);let _=class extends X(D(H(e))){};_=o([B("gds-input",{dependsOn:[R,q,W,K,J,Q]})],_);export{_ as G};
