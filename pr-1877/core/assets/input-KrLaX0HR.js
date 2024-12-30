import{m as O}from"./runtime-CMQcyTl6.js";import{l as A}from"./localized-decorator-B8fm5KIw.js";import{n as r,r as I,g as F,h as p}from"./custom-element-scoping-b4lD3laR.js";import{a as W}from"./query-p8xgzTDt.js";import{r as B}from"./query-async-MEroNOeJ.js";import{r as G}from"./field-base-M7Yks-hH.js";import{i as D,E as _}from"./lit-element-C_s9q329.js";import{t as R}from"./tokens.style-B6Zq2CtY.js";import{a as P,f as q}from"./button-5hkoQ3qT.js";import"./cross-small-CgIxxlLH.js";import"./flex-DnAdyWkx.js";import"./theme-Ci-nJtGD.js";const L=D`
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
`;var X=Object.defineProperty,V=Object.getOwnPropertyDescriptor,x=t=>{throw TypeError(t)},a=(t,e,s,o)=>{for(var l=o>1?void 0:o?V(e,s):e,c=t.length-1,g;c>=0;c--)(g=t[c])&&(l=(o?g(e,s,l):g(l))||l);return o&&l&&X(e,s,l),l},$=(t,e,s)=>e.has(t)||x("Cannot "+s),u=(t,e,s)=>($(t,e,"read from private field"),s?s.call(t):e.get(t)),h=(t,e,s)=>e.has(t)?x("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),d=(t,e,s)=>($(t,e,"access private method"),s),n,w,E,m,f,v,b,y,C,z,S,k,T,N,M;let i=class extends P{constructor(){super(),h(this,n),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this.trailSlotOccupied=!1,h(this,m,t=>["type","placeholder","required"].includes(t.name)),h(this,f,t=>{const e=t.target;this.value=e.value}),h(this,v,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),h(this,b,()=>{this.elInputAsync.then(t=>t.focus())}),h(this,y,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))})}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return p`${G(this.variant,[["default",()=>d(this,n,w).call(this)],["floating-label",()=>d(this,n,E).call(this)]])}`}_getValidityAnchor(){return this.elInput}};n=new WeakSet;w=function(){var t;return p`
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
        @click=${u(this,b)}
        id="field"
      >
        ${d(this,n,C).call(this)}
      </gds-field-base>
      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${u(this,n,M)&&this.maxlength-(((t=this.value)==null?void 0:t.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};E=function(){return _};m=new WeakMap;f=new WeakMap;v=new WeakMap;b=new WeakMap;y=new WeakMap;C=function(){return[d(this,n,z).call(this),d(this,n,T).call(this),d(this,n,N).call(this),d(this,n,S).call(this)].map(e=>p`${e}`)};z=function(){return p` <slot slot="lead" name="lead"></slot> `};S=function(){return p`
      <slot
        slot="trail"
        name="trail"
        @slotchange=${d(this,n,k)}
      ></slot>
    `};k=function(t){const s=t.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(o=>{var l;return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE&&((l=o.textContent)==null?void 0:l.trim())!==""})};T=function(){return p`
      <input
        @input=${u(this,f)}
        @change=${u(this,v)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        aria-invalid=${this.invalid}
        placeholder=" "
        ${q(u(this,m))}
      />
    `};N=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?p`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${this.invalid?"negative":""}"
        ?disabled="${this.disabled}"
        label="${O("Clear input")}"
        @click=${u(this,y)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-small />
      </gds-button>`:_};M=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};i.styles=[R,L];a([r()],i.prototype,"value",2);a([r()],i.prototype,"label",2);a([r({attribute:"supporting-text"})],i.prototype,"supportingText",2);a([r({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);a([r({type:Boolean,reflect:!0})],i.prototype,"disabled",2);a([r({type:Boolean})],i.prototype,"clearable",2);a([r({type:Number})],i.prototype,"maxlength",2);a([r({type:String})],i.prototype,"variant",2);a([r({type:String})],i.prototype,"size",2);a([B("input")],i.prototype,"elInputAsync",2);a([W("input")],i.prototype,"elInput",2);a([I()],i.prototype,"trailSlotOccupied",2);i=a([F("gds-input"),A()],i);
