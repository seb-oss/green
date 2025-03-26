import{m as k}from"./runtime-BL31MtW8.js";import{l as A}from"./localized-decorator-DtmrKsyB.js";import{n as p,h as o,g as T}from"./custom-element-scoping-b4c89-hi.js";import{a as B}from"./query-p8xgzTDt.js";import{r as O}from"./query-async-MEroNOeJ.js";import{r as P}from"./choose-Dh3k58u9.js";import{i as W,E as y}from"./lit-element-Bx14lxc-.js";import{G as N}from"./field-base.component-1Udsrbfm.js";import{G as R,a as L}from"./form-control-header.component-Cnmdeo3a.js";import{t as q}from"./tokens.style-CBvx1j-N.js";import{a as D,G as X,f as H}from"./button.component-C5Q-xcah.js";import{w as V,b as J,d as K}from"./declarative-layout-mixins-MroHtNIW.js";import{G as Q}from"./flex.component-BA1Gr0Oa.js";import{I as U}from"./cross-large.component-BYEseUaL.js";const Y=W`
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
`;var Z=Object.defineProperty,j=Object.getOwnPropertyDescriptor,w=t=>{throw TypeError(t)},r=(t,e,s,u)=>{for(var n=u>1?void 0:u?j(e,s):e,c=t.length-1,m;c>=0;c--)(m=t[c])&&(n=(u?m(e,s,n):m(n))||n);return u&&n&&Z(e,s,n),n},$=(t,e,s)=>e.has(t)||w("Cannot "+s),h=(t,e,s)=>($(t,e,"read from private field"),s?s.call(t):e.get(t)),d=(t,e,s)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),l=(t,e,s)=>($(t,e,"access private method"),s),a,z,C,f,v,b,x,_,E,G,S,I,F,M;let i=class extends D{constructor(){super(),d(this,a),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",d(this,f,t=>["type","placeholder","required"].includes(t.name)),d(this,v,t=>{const e=t.target;this.value=e.value}),d(this,b,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),d(this,x,()=>{this.elInputAsync.then(t=>t.focus())}),d(this,_,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}render(){return o`${P(this.variant,[["default",()=>l(this,a,z).call(this)],["floating-label",()=>l(this,a,C).call(this)]])}`}_getValidityAnchor(){return this.elInput}};a=new WeakSet;z=function(){var t;return o`
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
        ${l(this,a,E).call(this)}
      </gds-field-base>
      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${h(this,a,M)&&this.maxlength-(((t=this.value)==null?void 0:t.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};C=function(){return y};f=new WeakMap;v=new WeakMap;b=new WeakMap;x=new WeakMap;_=new WeakMap;E=function(){return[l(this,a,G).call(this),l(this,a,I).call(this),l(this,a,F).call(this),l(this,a,S).call(this)].map(e=>o`${e}`)};G=function(){return o` <slot slot="lead" name="lead"></slot> `};S=function(){return o`<slot slot="trail" name="trail"></slot>`};I=function(){return o`
      <input
        @input=${h(this,v)}
        @change=${h(this,b)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        placeholder=" "
        ${H(h(this,f))}
      />
    `};F=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?o`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${this.invalid?"negative":""}"
        ?disabled="${this.disabled}"
        label="${k("Clear input")}"
        @click=${h(this,_)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-large />
      </gds-button>`:y};M=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};i.styles=[q,Y];r([p({attribute:"supporting-text"})],i.prototype,"supportingText",2);r([p({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);r([p({type:Boolean})],i.prototype,"clearable",2);r([p({type:Number})],i.prototype,"maxlength",2);r([p({type:String})],i.prototype,"variant",2);r([p({type:String})],i.prototype,"size",2);r([O("input")],i.prototype,"elInputAsync",2);r([B("input")],i.prototype,"elInput",2);i=r([A()],i);let g=class extends V(J(K(i))){};g=r([T("gds-input",{dependsOn:[R,L,N,Q,X,U]})],g);g.define();
