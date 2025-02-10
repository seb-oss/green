import{m as R}from"./runtime-CMQcyTl6.js";import{l as W}from"./localized-decorator-iufJoRiP.js";import{n as c,g as F,h as d}from"./custom-element-scoping-BEGY3AqQ.js";import{a as O}from"./query-p8xgzTDt.js";import{r as H}from"./query-async-MEroNOeJ.js";import{r as P}from"./choose-Dh3k58u9.js";import{i as G,E as y}from"./lit-element-C_s9q329.js";import{t as N}from"./tokens.style-CFvqdzpw.js";import{w as q}from"./watch-tFciLXSI.js";import{s as B}from"./style-expression-property-D7o6hSzp.js";import{a as D,f as I}from"./button-sFwDD1rU.js";import"./field-base-CiNrxHUC.js";import"./cross-large-DYI6wi_d.js";import"./flex-CV3X_Fty.js";const L=G`
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
`;var X=Object.defineProperty,V=Object.getOwnPropertyDescriptor,w=e=>{throw TypeError(e)},i=(e,t,s,p)=>{for(var n=p>1?void 0:p?V(t,s):t,u=e.length-1,g;u>=0;u--)(g=e[u])&&(n=(p?g(t,s,n):g(n))||n);return p&&n&&X(t,s,n),n},z=(e,t,s)=>t.has(e)||w("Cannot "+s),o=(e,t,s)=>(z(e,t,"read from private field"),s?s.call(e):t.get(e)),l=(e,t,s)=>t.has(e)?w("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),h=(e,t,s)=>(z(e,t,"access private method"),s),r,$,C,m,f,v,b,_,x,E,S,T,A,k,M;let a=class extends D{constructor(){super(),l(this,r),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",l(this,m,e=>["type","placeholder","required"].includes(e.name)),l(this,f,e=>{const t=e.target;this.value=t.value}),l(this,v,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),l(this,b,e=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),l(this,_,()=>{this.elTextareaAsync.then(e=>e.focus())}),l(this,x,()=>{this.value="",this.rows=this._defaultRows,this.elTextareaAsync.then(e=>{e.style.height="",e.style.setProperty("--_lines",this._defaultRows.toString())}),this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#clear-button")}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}disconnectedCallback(){super.disconnectedCallback()}render(){return d`${P(this.variant,[["default",()=>h(this,r,$).call(this)],["floating-label",()=>h(this,r,C).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{if(e.value===""||this.resizable==="false"||this.resizable==="manual")this.rows=this._defaultRows,e.style.height="";else{const t=getComputedStyle(e),s=parseFloat(t.lineHeight),p=e.scrollHeight,n=Math.ceil(p/s);this.rows=Math.max(this._defaultRows,n)}e.style.setProperty("--_lines",this.rows.toString())})}};r=new WeakSet;$=function(){var e;return d`
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
        @click=${o(this,_)}
        multiline
      >
        ${h(this,r,E).call(this)}
      </gds-field-base>

      <gds-form-control-footer
        lass="size-${this.size}"
        .charCounter=${o(this,r,M)&&this.maxlength-(((e=this.value)==null?void 0:e.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};C=function(){return y};m=new WeakMap;f=new WeakMap;v=new WeakMap;b=new WeakMap;_=new WeakMap;x=new WeakMap;E=function(){return[h(this,r,S).call(this),h(this,r,A).call(this),h(this,r,k).call(this),h(this,r,T).call(this)].map(t=>d`${t}`)};S=function(){return d`<slot slot="lead" name="lead"></slot>`};T=function(){return d`<slot slot="trail" name="trail"></slot>`};A=function(){return d`
      <textarea
        @input=${o(this,f)}
        @change=${o(this,v)}
        @paste=${o(this,b)}
        .value=${this.value}
        id="input"
        class="resize-${this.resizable}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        placeholder=" "
        ${I(o(this,m))}
      ></textarea>
    `};k=function(){var e;return this.clearable&&(((e=this.value)==null?void 0:e.length)||0)>0?d`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${R("Clear input")}"
          @click=${o(this,x)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `:y};M=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};a.styles=[N,L];i([B({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],a.prototype,"rows",2);i([c({attribute:"supporting-text"})],a.prototype,"supportingText",2);i([c({type:Boolean})],a.prototype,"clearable",2);i([c({type:String})],a.prototype,"resizable",2);i([c({type:Number})],a.prototype,"maxlength",2);i([c({type:String})],a.prototype,"variant",2);i([c({type:String})],a.prototype,"size",2);i([H("textarea")],a.prototype,"elTextareaAsync",2);i([O("textarea")],a.prototype,"elTextarea",2);i([q("value")],a.prototype,"_setAutoHeight",1);a=i([F("gds-textarea"),W()],a);
