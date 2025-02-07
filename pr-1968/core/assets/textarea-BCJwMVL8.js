import{m as z}from"./runtime-CMQcyTl6.js";import{l as W}from"./localized-decorator-iufJoRiP.js";import{n as c,g as F,h as d}from"./custom-element-scoping-BEGY3AqQ.js";import{a as O}from"./query-p8xgzTDt.js";import{r as H}from"./query-async-MEroNOeJ.js";import{r as P}from"./choose-Dh3k58u9.js";import{i as G,E as y}from"./lit-element-C_s9q329.js";import{t as N}from"./tokens.style-CFvqdzpw.js";import{w as q}from"./watch-tFciLXSI.js";import{s as B}from"./style-expression-property-D7o6hSzp.js";import{a as D,f as I}from"./button-BoBQ5idR.js";import"./field-base-DumaPvjb.js";import"./cross-large-DYI6wi_d.js";import"./flex-CV3X_Fty.js";const L=G`
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
      outline: none;
      overflow: auto;
      padding: unset;
      resize: none;
      width: 100%;
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
`;var X=Object.defineProperty,V=Object.getOwnPropertyDescriptor,w=t=>{throw TypeError(t)},i=(t,e,a,p)=>{for(var l=p>1?void 0:p?V(e,a):e,u=t.length-1,g;u>=0;u--)(g=t[u])&&(l=(p?g(e,a,l):g(l))||l);return p&&l&&X(e,a,l),l},C=(t,e,a)=>e.has(t)||w("Cannot "+a),o=(t,e,a)=>(C(t,e,"read from private field"),a?a.call(t):e.get(t)),n=(t,e,a)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),h=(t,e,a)=>(C(t,e,"access private method"),a),r,$,E,m,f,v,_,b,x,T,A,S,k,M,R;let s=class extends D{constructor(){super(),n(this,r),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",n(this,m,t=>["type","placeholder","required"].includes(t.name)),n(this,f,t=>{const e=t.target;this.value=e.value}),n(this,v,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),n(this,_,t=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),n(this,b,()=>{this.elTextareaAsync.then(t=>t.focus())}),n(this,x,()=>{this.value="",this.rows=this._defaultRows,this.elTextareaAsync.then(t=>{t==null||t.style.setProperty("--_lines",this._defaultRows.toString())}),this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}disconnectedCallback(){super.disconnectedCallback()}render(){return d`${P(this.variant,[["default",()=>h(this,r,$).call(this)],["floating-label",()=>h(this,r,E).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(t=>{if(t.value==="")this.rows=this._defaultRows;else{const e=getComputedStyle(t),a=parseFloat(e.lineHeight),p=t.scrollHeight,l=Math.ceil(p/a);this.rows=Math.max(this._defaultRows,l)}t.style.setProperty("--_lines",this.rows.toString())})}};r=new WeakSet;$=function(){var t;return d`
      <gds-form-control-header>
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
        @click=${o(this,b)}
        multiline
      >
        ${h(this,r,T).call(this)}
      </gds-field-base>

      <gds-form-control-footer
        .charCounter=${o(this,r,R)&&this.maxlength-(((t=this.value)==null?void 0:t.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};E=function(){return y};m=new WeakMap;f=new WeakMap;v=new WeakMap;_=new WeakMap;b=new WeakMap;x=new WeakMap;T=function(){return[h(this,r,A).call(this),h(this,r,k).call(this),h(this,r,M).call(this),h(this,r,S).call(this)].map(e=>d`${e}`)};A=function(){return d`<slot slot="lead" name="lead"></slot>`};S=function(){return d`<slot slot="trail" name="trail"></slot>`};k=function(){return d`
      <textarea
        @input=${o(this,f)}
        @change=${o(this,v)}
        @paste=${o(this,_)}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        placeholder=" "
        ${I(o(this,m))}
      ></textarea>
    `};M=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?d`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${z("Clear input")}"
          @click=${o(this,x)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large />
        </gds-button>
      `:y};R=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};s.styles=[N,L];i([B({valueTemplate:t=>t,selector:"textarea",styleTemplate:(t,e)=>`min-height: calc(1lh * ${e[0]});`})],s.prototype,"rows",2);i([c({attribute:"supporting-text"})],s.prototype,"supportingText",2);i([c({type:Boolean})],s.prototype,"clearable",2);i([c({type:String})],s.prototype,"resizable",2);i([c({type:Number})],s.prototype,"maxlength",2);i([c({type:String})],s.prototype,"variant",2);i([H("textarea")],s.prototype,"elTextareaAsync",2);i([O("textarea")],s.prototype,"elTextarea",2);i([q("value")],s.prototype,"_setAutoHeight",1);s=i([F("gds-textarea"),W()],s);
