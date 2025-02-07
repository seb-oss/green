import{m as R}from"./runtime-CMQcyTl6.js";import{l as W}from"./localized-decorator-iufJoRiP.js";import{n as c,g as F,h as d}from"./custom-element-scoping-BEGY3AqQ.js";import{a as O}from"./query-p8xgzTDt.js";import{r as H}from"./query-async-MEroNOeJ.js";import{r as P}from"./choose-Dh3k58u9.js";import{i as G,E as y}from"./lit-element-C_s9q329.js";import{t as N}from"./tokens.style-CFvqdzpw.js";import{w as q}from"./watch-tFciLXSI.js";import{s as B}from"./style-expression-property-D7o6hSzp.js";import{a as D,f as I}from"./button-BoBQ5idR.js";import"./field-base-DumaPvjb.js";import"./cross-large-DYI6wi_d.js";import"./flex-CV3X_Fty.js";const L=G`
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
      resize: vertical;
      outline: none;
      overflow: auto;
      padding: unset;
      width: 100%;
      min-width: 20ch;

      // &::-webkit-resizer {
      //   background-image: linear-gradient(to bottom, transparent, currentColor);
      //   background-position: center;
      //   background-size: 100% 1px;
      //   background-repeat: no-repeat;
      // }
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
`;var X=Object.defineProperty,V=Object.getOwnPropertyDescriptor,w=t=>{throw TypeError(t)},i=(t,e,s,p)=>{for(var n=p>1?void 0:p?V(e,s):e,u=t.length-1,g;u>=0;u--)(g=t[u])&&(n=(p?g(e,s,n):g(n))||n);return p&&n&&X(e,s,n),n},$=(t,e,s)=>e.has(t)||w("Cannot "+s),l=(t,e,s)=>($(t,e,"read from private field"),s?s.call(t):e.get(t)),o=(t,e,s)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),h=(t,e,s)=>($(t,e,"access private method"),s),r,C,k,m,f,b,v,_,x,z,E,S,T,A,M;let a=class extends D{constructor(){super(),o(this,r),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",o(this,m,t=>["type","placeholder","required"].includes(t.name)),o(this,f,t=>{const e=t.target;this.value=e.value}),o(this,b,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),o(this,v,t=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),o(this,_,()=>{this.elTextareaAsync.then(t=>t.focus())}),o(this,x,()=>{this.value="",this.rows=this._defaultRows,this.elTextareaAsync.then(t=>{t.style.height="",t.style.setProperty("--_lines",this._defaultRows.toString())}),this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}disconnectedCallback(){super.disconnectedCallback()}render(){return d`${P(this.variant,[["default",()=>h(this,r,C).call(this)],["floating-label",()=>h(this,r,k).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(t=>{if(t.value==="")this.rows=this._defaultRows,t.style.height="";else{const e=getComputedStyle(t),s=parseFloat(e.lineHeight),p=t.scrollHeight,n=Math.ceil(p/s);this.rows=Math.max(this._defaultRows,n)}t.style.setProperty("--_lines",this.rows.toString())})}};r=new WeakSet;C=function(){var t;return d`
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
        @click=${l(this,_)}
        multiline
      >
        ${h(this,r,z).call(this)}
      </gds-field-base>

      <gds-form-control-footer
        lass="size-${this.size}"
        .charCounter=${l(this,r,M)&&this.maxlength-(((t=this.value)==null?void 0:t.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};k=function(){return y};m=new WeakMap;f=new WeakMap;b=new WeakMap;v=new WeakMap;_=new WeakMap;x=new WeakMap;z=function(){return[h(this,r,E).call(this),h(this,r,T).call(this),h(this,r,A).call(this),h(this,r,S).call(this)].map(e=>d`${e}`)};E=function(){return d`<slot slot="lead" name="lead"></slot>`};S=function(){return d`<slot slot="trail" name="trail"></slot>`};T=function(){return d`
      <textarea
        @input=${l(this,f)}
        @change=${l(this,b)}
        @paste=${l(this,v)}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        placeholder=" "
        ${I(l(this,m))}
      ></textarea>
    `};A=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?d`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${R("Clear input")}"
          @click=${l(this,x)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `:y};M=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};a.styles=[N,L];i([B({valueTemplate:t=>t,selector:"textarea",styleTemplate:(t,e)=>`min-height: calc(1lh * ${e[0]});`})],a.prototype,"rows",2);i([c({attribute:"supporting-text"})],a.prototype,"supportingText",2);i([c({type:Boolean})],a.prototype,"clearable",2);i([c({type:String})],a.prototype,"resizable",2);i([c({type:Number})],a.prototype,"maxlength",2);i([c({type:String})],a.prototype,"variant",2);i([c({type:String})],a.prototype,"size",2);i([H("textarea")],a.prototype,"elTextareaAsync",2);i([O("textarea")],a.prototype,"elTextarea",2);i([q("value")],a.prototype,"_setAutoHeight",1);a=i([F("gds-textarea"),W()],a);
