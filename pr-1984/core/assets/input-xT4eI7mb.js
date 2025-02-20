import{m as I}from"./runtime-CMQcyTl6.js";import{l as T}from"./localized-decorator-iufJoRiP.js";import{n as p,g as F,h as o}from"./custom-element-scoping-BEGY3AqQ.js";import{a as W}from"./query-p8xgzTDt.js";import{r as G}from"./query-async-MEroNOeJ.js";import{r as N}from"./choose-Dh3k58u9.js";import{i as O,E as _}from"./lit-element-C_s9q329.js";import{t as B}from"./tokens.style-CFvqdzpw.js";import{a as R,f as P}from"./button-C0h0e6wM.js";import"./field-base-BjGBFlXT.js";import"./cross-large-DrW_LU0E.js";import"./flex-CV3X_Fty.js";const q=O`
  @layer base, simplified;

  @layer base {
    * {
      box-sizing: border-box;
    }

    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      contain: layout;
      isolation: isolate;
      gap: var(--gds-space-xs);
    }

    :host([disabled]) {
      color: var(--gds-color-l3-content-disabled);
      pointer-events: none;
    }

    :host([size='small']) input {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
    }

    input {
      appearance: none;
      background-color: transparent;
      border: 0;
      box-sizing: border-box;
      font-family: inherit;
      margin: unset;
      outline: none;
      overflow: hidden;
      padding: unset;
      width: 100%;
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      line-height: 18px;
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-m);
      max-width: var(--gds-space-m);
      display: flex;
    }

    slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-l);
      display: flex;
    }
  }

  @layer simplified {
  }
`;var D=Object.defineProperty,L=Object.getOwnPropertyDescriptor,y=t=>{throw TypeError(t)},n=(t,e,s,u)=>{for(var r=u>1?void 0:u?L(e,s):e,c=t.length-1,g;c>=0;c--)(g=t[c])&&(r=(u?g(e,s,r):g(r))||r);return u&&r&&D(e,s,r),r},w=(t,e,s)=>e.has(t)||y("Cannot "+s),h=(t,e,s)=>(w(t,e,"read from private field"),s?s.call(t):e.get(t)),d=(t,e,s)=>e.has(t)?y("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),l=(t,e,s)=>(w(t,e,"access private method"),s),a,$,z,m,f,v,b,x,E,C,S,M,k,A;let i=class extends R{constructor(){super(),d(this,a),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",d(this,m,t=>["type","placeholder","required"].includes(t.name)),d(this,f,t=>{const e=t.target;this.value=e.value}),d(this,v,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),d(this,b,()=>{this.elInputAsync.then(t=>t.focus())}),d(this,x,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}render(){return o`${N(this.variant,[["default",()=>l(this,a,$).call(this)],["floating-label",()=>l(this,a,z).call(this)]])}`}_getValidityAnchor(){return this.elInput}};a=new WeakSet;$=function(){var t;return o`
      <gds-form-control-header class="size-${this.size}">
        <label for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${h(this,b)}
        id="field"
      >
        ${l(this,a,E).call(this)}
      </gds-field-base>
      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${h(this,a,A)&&this.maxlength-(((t=this.value)==null?void 0:t.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};z=function(){return _};m=new WeakMap;f=new WeakMap;v=new WeakMap;b=new WeakMap;x=new WeakMap;E=function(){return[l(this,a,C).call(this),l(this,a,M).call(this),l(this,a,k).call(this),l(this,a,S).call(this)].map(e=>o`${e}`)};C=function(){return o` <slot slot="lead" name="lead"></slot> `};S=function(){return o`<slot slot="trail" name="trail"></slot>`};M=function(){return o`
      <input
        @input=${h(this,f)}
        @change=${h(this,v)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        placeholder=" "
        ${P(h(this,m))}
      />
    `};k=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?o`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${this.invalid?"negative":""}"
        ?disabled="${this.disabled}"
        label="${I("Clear input")}"
        @click=${h(this,x)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-large />
      </gds-button>`:_};A=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};i.styles=[B,q];n([p({attribute:"supporting-text"})],i.prototype,"supportingText",2);n([p({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);n([p({type:Boolean})],i.prototype,"clearable",2);n([p({type:Number})],i.prototype,"maxlength",2);n([p({type:String})],i.prototype,"variant",2);n([p({type:String})],i.prototype,"size",2);n([G("input")],i.prototype,"elInputAsync",2);n([W("input")],i.prototype,"elInput",2);i=n([F("gds-input"),T()],i);
