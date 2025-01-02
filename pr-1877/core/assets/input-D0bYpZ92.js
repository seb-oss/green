import{m as I}from"./runtime-CMQcyTl6.js";import{l as T}from"./localized-decorator-B8fm5KIw.js";import{n as l,g as F,h as d}from"./custom-element-scoping-b4lD3laR.js";import{a as W}from"./query-p8xgzTDt.js";import{r as B}from"./query-async-MEroNOeJ.js";import{r as G}from"./field-base-CjPp99ax.js";import{i as N,E as _}from"./lit-element-C_s9q329.js";import{t as O}from"./tokens.style-B6Zq2CtY.js";import{a as R,f as P}from"./button-DnilZTBH.js";import"./cross-small-CgIxxlLH.js";import"./flex-DnAdyWkx.js";import"./theme-BF9mlNuE.js";const q=N`
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
`;var D=Object.defineProperty,L=Object.getOwnPropertyDescriptor,y=t=>{throw TypeError(t)},a=(t,e,i,u)=>{for(var r=u>1?void 0:u?L(e,i):e,c=t.length-1,m;c>=0;c--)(m=t[c])&&(r=(u?m(e,i,r):m(r))||r);return u&&r&&D(e,i,r),r},w=(t,e,i)=>e.has(t)||y("Cannot "+i),h=(t,e,i)=>(w(t,e,"read from private field"),i?i.call(t):e.get(t)),p=(t,e,i)=>e.has(t)?y("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),o=(t,e,i)=>(w(t,e,"access private method"),i),n,$,z,g,f,v,b,x,C,E,k,S,M,A;let s=class extends R{constructor(){super(),p(this,n),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",p(this,g,t=>["type","placeholder","required"].includes(t.name)),p(this,f,t=>{const e=t.target;this.value=e.value}),p(this,v,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),p(this,b,()=>{this.elInputAsync.then(t=>t.focus())}),p(this,x,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))})}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return d`${G(this.variant,[["default",()=>o(this,n,$).call(this)],["floating-label",()=>o(this,n,z).call(this)]])}`}_getValidityAnchor(){return this.elInput}};n=new WeakSet;$=function(){var t;return d`
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
        ${o(this,n,C).call(this)}
      </gds-field-base>
      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${h(this,n,A)&&this.maxlength-(((t=this.value)==null?void 0:t.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};z=function(){return _};g=new WeakMap;f=new WeakMap;v=new WeakMap;b=new WeakMap;x=new WeakMap;C=function(){return[o(this,n,E).call(this),o(this,n,S).call(this),o(this,n,M).call(this),o(this,n,k).call(this)].map(e=>d`${e}`)};E=function(){return d` <slot slot="lead" name="lead"></slot> `};k=function(){return d`<slot slot="trail" name="trail"></slot>`};S=function(){return d`
      <input
        @input=${h(this,f)}
        @change=${h(this,v)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        aria-invalid=${this.invalid}
        placeholder=" "
        ${P(h(this,g))}
      />
    `};M=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?d`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${this.invalid?"negative":""}"
        ?disabled="${this.disabled}"
        label="${I("Clear input")}"
        @click=${h(this,x)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-small />
      </gds-button>`:_};A=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};s.styles=[O,q];a([l()],s.prototype,"value",2);a([l()],s.prototype,"label",2);a([l({attribute:"supporting-text"})],s.prototype,"supportingText",2);a([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);a([l({type:Boolean,reflect:!0})],s.prototype,"disabled",2);a([l({type:Boolean})],s.prototype,"clearable",2);a([l({type:Number})],s.prototype,"maxlength",2);a([l({type:String})],s.prototype,"variant",2);a([l({type:String})],s.prototype,"size",2);a([B("input")],s.prototype,"elInputAsync",2);a([W("input")],s.prototype,"elInput",2);s=a([F("gds-input"),T()],s);
