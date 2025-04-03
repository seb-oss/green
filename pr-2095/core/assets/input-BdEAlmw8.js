import{m as A}from"./runtime-BL31MtW8.js";import{l as T}from"./localized-decorator-DtmrKsyB.js";import{n as d,h as n,g as B}from"./custom-element-scoping-b4c89-hi.js";import{a as O}from"./query-p8xgzTDt.js";import{r as P}from"./query-async-MEroNOeJ.js";import{r as W}from"./choose-Dh3k58u9.js";import{n as w}from"./when-BR7zwNJC.js";import{i as N,E as f}from"./lit-element-Bx14lxc-.js";import{G as R}from"./field-base.component-u2-leZ5O.js";import{G as L,a as q}from"./form-control-header.component-CS8g-3iX.js";import{t as D}from"./tokens.style-BScLRl5F.js";import{a as X,G as H,f as V}from"./button.component-Z9yRxVMZ.js";import{w as J,b as K,d as Q}from"./declarative-layout-mixins-BB4ZLY5n.js";import{G as U}from"./flex.component-d_gd050y.js";import{I as Y}from"./cross-large.component-BYEseUaL.js";const Z=N`
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

    :host([size='small']) {
      gap: var(--gds-space-2xs);
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
`;var j=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,$=t=>{throw TypeError(t)},a=(t,e,i,u)=>{for(var l=u>1?void 0:u?tt(e,i):e,c=t.length-1,m;c>=0;c--)(m=t[c])&&(l=(u?m(e,i,l):m(l))||l);return u&&l&&j(e,i,l),l},z=(t,e,i)=>e.has(t)||$("Cannot "+i),h=(t,e,i)=>(z(t,e,"read from private field"),i?i.call(t):e.get(t)),p=(t,e,i)=>e.has(t)?$("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),o=(t,e,i)=>(z(t,e,"access private method"),i),r,C,E,v,b,x,_,y,G,S,I,F,M,k;let s=class extends X{constructor(){super(),p(this,r),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this.plain=!1,p(this,v,t=>["type","placeholder","required"].includes(t.name)),p(this,b,t=>{const e=t.target;this.value=e.value}),p(this,x,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),p(this,_,()=>{this.elInputAsync.then(t=>t.focus())}),p(this,y,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}render(){return n`${W(this.variant,[["default",()=>o(this,r,C).call(this)],["floating-label",()=>o(this,r,E).call(this)]])}`}_getValidityAnchor(){return this.elInput}};r=new WeakSet;C=function(){return n`
      ${w(!this.plain,()=>n`<gds-form-control-header class="size-${this.size}">
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
        @click=${h(this,_)}
        id="field"
      >
        ${o(this,r,G).call(this)}
      </gds-field-base>
      ${w(!this.plain,()=>{var t;return n`<gds-form-control-footer
            class="size-${this.size}"
            .charCounter=${h(this,r,k)&&this.maxlength-(((t=this.value)==null?void 0:t.length)||0)}
            .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
          ></gds-form-control-footer>`})}
    `};E=function(){return f};v=new WeakMap;b=new WeakMap;x=new WeakMap;_=new WeakMap;y=new WeakMap;G=function(){return[o(this,r,S).call(this),o(this,r,F).call(this),o(this,r,M).call(this),o(this,r,I).call(this)].map(e=>n`${e}`)};S=function(){return n` <slot slot="lead" name="lead"></slot> `};I=function(){return n`<slot slot="trail" name="trail"></slot>`};F=function(){return n`
      <input
        @input=${h(this,b)}
        @change=${h(this,x)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-label=${this.plain&&this.label||f}
        placeholder=" "
        ${V(h(this,v))}
      />
    `};M=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?n`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${this.invalid?"negative":""}"
        ?disabled="${this.disabled}"
        label="${A("Clear input")}"
        @click=${h(this,y)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-large />
      </gds-button>`:f};k=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};s.styles=[D,Z];a([d({attribute:"supporting-text"})],s.prototype,"supportingText",2);a([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);a([d({type:Boolean})],s.prototype,"clearable",2);a([d({type:Number})],s.prototype,"maxlength",2);a([d({type:String})],s.prototype,"variant",2);a([d({type:String})],s.prototype,"size",2);a([d({type:Boolean})],s.prototype,"plain",2);a([P("input")],s.prototype,"elInputAsync",2);a([O("input")],s.prototype,"elInput",2);s=a([T()],s);let g=class extends J(K(Q(s))){};g=a([B("gds-input",{dependsOn:[L,q,R,U,H,Y]})],g);g.define();
