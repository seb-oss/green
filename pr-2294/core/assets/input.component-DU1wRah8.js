import{l as A,m as B}from"./runtime-CNluP0A8.js";import{n as i,h as l,g as M}from"./gds-element-DKcDvDP5.js";import{a as T}from"./query-p8xgzTDt.js";import{r as O}from"./query-async-MEroNOeJ.js";import{o as n}from"./if-defined-CVqwUuaf.js";import{n as $}from"./when-BR7zwNJC.js";import{i as P,E as x}from"./lit-element-Bx14lxc-.js";import{f as N,G as W}from"./form-control-host.style-XtoWBGtT.js";import{G as R,a as q}from"./form-control-header.component-D7XCcRww.js";import{t as L}from"./tokens.style-Cct4pBht.js";import{w as X,b as D,d as H}from"./declarative-layout-mixins-D-CzJZ0x.js";import{a as V,G as J}from"./button.component-BkjhbsKb.js";import{G as K}from"./flex.component-BfKO9GTN.js";import{I as Q}from"./cross-large.component-Db6OGGHZ.js";const U=P``;var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,C=t=>{throw TypeError(t)},o=(t,e,r,c)=>{for(var p=c>1?void 0:c?Z(e,r):e,m=t.length-1,f;m>=0;m--)(f=t[m])&&(p=(c?f(e,r,p):f(p))||p);return c&&p&&Y(e,r,p),p},w=(t,e,r)=>e.has(t)||C("Cannot "+r),d=(t,e,r)=>(w(t,e,"read from private field"),r?r.call(t):e.get(t)),u=(t,e,r)=>e.has(t)?C("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),h=(t,e,r)=>(w(t,e,"access private method"),r),a,E,y,v,g,b,S,z,k,G,I,F;let s=class extends V{constructor(){super(),u(this,a),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.autocapitalize="off",this.autofocus=!1,this.spellcheck=!0,u(this,y,t=>{const e=t.target;this.value=e.value}),u(this,v,t=>{const e=t.target;this.value=e.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),u(this,g,()=>{this.elInputAsync.then(t=>t.focus())}),u(this,b,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}focus(t){var e;(e=this._getValidityAnchor())==null||e.focus(t)}render(){return l`
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
    `}_getValidityAnchor(){return this.elInput}};a=new WeakSet;E=function(){return!this.plain};y=new WeakMap;v=new WeakMap;g=new WeakMap;b=new WeakMap;S=function(){return[h(this,a,z).call(this),h(this,a,G).call(this),h(this,a,I).call(this),h(this,a,k).call(this)].map(e=>l`${e}`)};z=function(){return l` <slot slot="lead" name="lead"></slot> `};k=function(){return l`<slot slot="trail" name="trail"></slot>`};G=function(){return l`
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
        label="${B("Clear input")}"
        @click=${d(this,b)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-large />
      </gds-button>`:x};F=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};s.styles=[L,N,U];o([i({attribute:"supporting-text"})],s.prototype,"supportingText",2);o([i({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);o([i({type:Boolean})],s.prototype,"clearable",2);o([i({type:Number})],s.prototype,"maxlength",2);o([i({type:String})],s.prototype,"size",2);o([i({type:Boolean})],s.prototype,"plain",2);o([i({reflect:!0})],s.prototype,"type",2);o([i()],s.prototype,"min",2);o([i()],s.prototype,"max",2);o([i()],s.prototype,"step",2);o([i()],s.prototype,"autocapitalize",2);o([i()],s.prototype,"autocorrect",2);o([i()],s.prototype,"autocomplete",2);o([i({type:Boolean})],s.prototype,"autofocus",2);o([i()],s.prototype,"enterkeyhint",2);o([i({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],s.prototype,"spellcheck",2);o([i()],s.prototype,"inputmode",2);o([O("input")],s.prototype,"elInputAsync",2);o([T("input")],s.prototype,"elInput",2);s=o([A()],s);let _=class extends X(D(H(s))){};_=o([M("gds-input",{dependsOn:[R,q,W,K,J,Q]})],_);export{_ as G};
