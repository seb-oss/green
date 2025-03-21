import{m as T}from"./runtime-BL31MtW8.js";import{l as F}from"./localized-decorator-DtmrKsyB.js";import{n as p,h as o,g as P}from"./custom-element-scoping-BOlwUH_F.js";import{a as W}from"./query-p8xgzTDt.js";import{r as N}from"./query-async-MEroNOeJ.js";import{r as O}from"./choose-Dh3k58u9.js";import{i as B,E as y}from"./lit-element-Bx14lxc-.js";import{t as G}from"./tokens.style-Db3B8yEB.js";import{a as R,f as q}from"./button-DC9S9tme.js";import{w as D,b as L,d as X}from"./declarative-layout-mixins-CvhbdVQ9.js";import"./form-control-footer-CmSOcy4e.js";import"./field-base-0clmOCSV.js";import"./cross-large-HtIrBfFL.js";import"./flex-COKa8ndQ.js";const V=B`
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
`;var H=Object.defineProperty,J=Object.getOwnPropertyDescriptor,w=t=>{throw TypeError(t)},n=(t,e,s,u)=>{for(var r=u>1?void 0:u?J(e,s):e,c=t.length-1,g;c>=0;c--)(g=t[c])&&(r=(u?g(e,s,r):g(r))||r);return u&&r&&H(e,s,r),r},$=(t,e,s)=>e.has(t)||w("Cannot "+s),h=(t,e,s)=>($(t,e,"read from private field"),s?s.call(t):e.get(t)),d=(t,e,s)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),l=(t,e,s)=>($(t,e,"access private method"),s),a,z,E,f,v,b,x,_,C,S,M,I,k,A;let i=class extends R{constructor(){super(),d(this,a),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",d(this,f,t=>["type","placeholder","required"].includes(t.name)),d(this,v,t=>{const e=t.target;this.value=e.value}),d(this,b,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),d(this,x,()=>{this.elInputAsync.then(t=>t.focus())}),d(this,_,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}render(){return o`${O(this.variant,[["default",()=>l(this,a,z).call(this)],["floating-label",()=>l(this,a,E).call(this)]])}`}_getValidityAnchor(){return this.elInput}};a=new WeakSet;z=function(){var t;return o`
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
        @click=${h(this,x)}
        id="field"
      >
        ${l(this,a,C).call(this)}
      </gds-field-base>
      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${h(this,a,A)&&this.maxlength-(((t=this.value)==null?void 0:t.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};E=function(){return y};f=new WeakMap;v=new WeakMap;b=new WeakMap;x=new WeakMap;_=new WeakMap;C=function(){return[l(this,a,S).call(this),l(this,a,I).call(this),l(this,a,k).call(this),l(this,a,M).call(this)].map(e=>o`${e}`)};S=function(){return o` <slot slot="lead" name="lead"></slot> `};M=function(){return o`<slot slot="trail" name="trail"></slot>`};I=function(){return o`
      <input
        @input=${h(this,v)}
        @change=${h(this,b)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        placeholder=" "
        ${q(h(this,f))}
      />
    `};k=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?o`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${this.invalid?"negative":""}"
        ?disabled="${this.disabled}"
        label="${T("Clear input")}"
        @click=${h(this,_)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-large />
      </gds-button>`:y};A=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};i.styles=[G,V];n([p({attribute:"supporting-text"})],i.prototype,"supportingText",2);n([p({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);n([p({type:Boolean})],i.prototype,"clearable",2);n([p({type:Number})],i.prototype,"maxlength",2);n([p({type:String})],i.prototype,"variant",2);n([p({type:String})],i.prototype,"size",2);n([N("input")],i.prototype,"elInputAsync",2);n([W("input")],i.prototype,"elInput",2);i=n([F()],i);let m=class extends D(L(X(i))){};m=n([P("gds-input")],m);m.define();
