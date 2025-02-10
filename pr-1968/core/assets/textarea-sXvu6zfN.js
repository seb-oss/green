import{m as P}from"./runtime-CMQcyTl6.js";import{l as W}from"./localized-decorator-iufJoRiP.js";import{n as c,g as B,h as p}from"./custom-element-scoping-BEGY3AqQ.js";import{a as y}from"./query-p8xgzTDt.js";import{r as F}from"./query-async-MEroNOeJ.js";import{r as O}from"./choose-Dh3k58u9.js";import{i as H,E as w}from"./lit-element-C_s9q329.js";import{t as q}from"./tokens.style-CFvqdzpw.js";import{w as G}from"./watch-tFciLXSI.js";import{r as N}from"./resize-observer-B9k8v2TZ.js";import{s as D}from"./style-expression-property-D7o6hSzp.js";import{a as L,f as I}from"./button-sFwDD1rU.js";import"./field-base-vfosZPuZ.js";import"./cross-large-DYI6wi_d.js";import"./flex-CV3X_Fty.js";const X=H`
  @layer base, simplified;

  @layer base {
    * {
      box-sizing: border-box;
    }

    :host {
      display: flex;
      flex-direction: column;
      // When resize is set in both axis the width must be max-content
      // width: max-content;
      width: 100%;
      contain: layout;
      isolation: isolate;
      gap: var(--gds-space-xs);
    }

    textarea {
      appearance: none;
      background-color: transparent;
      border: 0;
      box-sizing: border-box;
      font-family: inherit;
      font-size: var(--gds-text-size-detail-m);
      height: calc(1lh * var(--_lines));
      line-height: var(--gds-text-line-height-detail-m);
      margin: unset;
      min-height: calc(1lh * 4);
      max-height: calc(1lh * 20);
      overflow: auto;
      outline: none;
      padding: unset;
      width: 100%;
      min-width: 20ch;
      padding-inline-end: calc(var(--gds-space-xs) + var(--padding-inline-end));

      &.resize-manual {
        resize: vertical;
      }

      &.resize-auto {
        resize: none;
      }

      &.resize-false {
        resize: none;
      }
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      width: var(--gds-space-m);
    }

    slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-l);
      display: flex;
    }

    [align-items] ::part(_button) {
      margin-top: calc(var(--gds-space-2xs) * -1);
    }
  }

  @layer simplified {
  }
`;var V=Object.defineProperty,J=Object.getOwnPropertyDescriptor,z=e=>{throw TypeError(e)},i=(e,t,s,l)=>{for(var n=l>1?void 0:l?J(t,s):t,u=e.length-1,g;u>=0;u--)(g=e[u])&&(n=(l?g(t,s,n):g(n))||n);return l&&n&&V(t,s,n),n},C=(e,t,s)=>t.has(e)||z("Cannot "+s),h=(e,t,s)=>(C(e,t,"read from private field"),s?s.call(e):t.get(e)),o=(e,t,s)=>t.has(e)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),d=(e,t,s)=>(C(e,t,"access private method"),s),r,$,S,m,f,v,b,_,x,E,T,R,A,k,M;let a=class extends L{constructor(){super(),o(this,r),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},o(this,m,e=>["type","placeholder","required"].includes(e.name)),o(this,f,e=>{const t=e.target;this.value=t.value}),o(this,v,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),o(this,b,e=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),o(this,_,()=>{this.elTextareaAsync.then(e=>e.focus())}),o(this,x,()=>{this.value="",this.rows=this._defaultRows,this.elTextareaAsync.then(e=>{e.style.height="",e.style.setProperty("--_lines",this._defaultRows.toString())}),this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#clear-button")}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{var s;const e=(s=this.fieldBase)==null?void 0:s.shadowRoot;if(!e)return;const t=e.querySelector(".right");if(t){const l=t.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${l.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return p`${O(this.variant,[["default",()=>d(this,r,$).call(this)],["floating-label",()=>d(this,r,S).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{if(e.value===""||this.resizable==="false"||this.resizable==="manual")this.rows=this._defaultRows,e.style.height="";else{const t=getComputedStyle(e),s=parseFloat(t.lineHeight),l=e.scrollHeight,n=Math.ceil(l/s);this.rows=Math.max(this._defaultRows,n)}e.style.setProperty("--_lines",this.rows.toString())})}};r=new WeakSet;$=function(){var e;return p`
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
        id="field"
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${h(this,_)}
        multiline
      >
        ${d(this,r,E).call(this)}
      </gds-field-base>

      <gds-form-control-footer
        lass="size-${this.size}"
        .charCounter=${h(this,r,M)&&this.maxlength-(((e=this.value)==null?void 0:e.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};S=function(){return w};m=new WeakMap;f=new WeakMap;v=new WeakMap;b=new WeakMap;_=new WeakMap;x=new WeakMap;E=function(){return[d(this,r,T).call(this),d(this,r,A).call(this),d(this,r,k).call(this),d(this,r,R).call(this)].map(t=>p`${t}`)};T=function(){return p`<slot slot="lead" name="lead"></slot>`};R=function(){return p`<slot slot="trail" name="trail"></slot>`};A=function(){return p`
      <textarea
        @input=${h(this,f)}
        @change=${h(this,v)}
        @paste=${h(this,b)}
        .value=${this.value}
        id="input"
        class="resize-${this.resizable}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        placeholder=" "
        ${I(h(this,m))}
      ></textarea>
    `};k=function(){var e;return this.clearable&&(((e=this.value)==null?void 0:e.length)||0)>0?p`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${P("Clear input")}"
          @click=${h(this,x)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `:w};M=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};a.styles=[q,X];i([D({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],a.prototype,"rows",2);i([c({attribute:"supporting-text"})],a.prototype,"supportingText",2);i([c({type:Boolean})],a.prototype,"clearable",2);i([c({type:String})],a.prototype,"resizable",2);i([c({type:Number})],a.prototype,"maxlength",2);i([c({type:String})],a.prototype,"variant",2);i([c({type:String})],a.prototype,"size",2);i([F("textarea")],a.prototype,"elTextareaAsync",2);i([y("textarea")],a.prototype,"elTextarea",2);i([y("gds-field-base")],a.prototype,"fieldBase",2);i([N()],a.prototype,"_handleResize",1);i([G("value")],a.prototype,"_setAutoHeight",1);a=i([B("gds-textarea"),W()],a);
