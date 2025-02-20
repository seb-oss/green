import{m as B}from"./runtime-BL31MtW8.js";import{l as F}from"./localized-decorator-DtmrKsyB.js";import{n as c,g as O,h as p}from"./custom-element-scoping-BEGY3AqQ.js";import{a as b}from"./query-p8xgzTDt.js";import{r as W}from"./query-async-MEroNOeJ.js";import{r as H}from"./choose-Dh3k58u9.js";import{i as q,E as x}from"./lit-element-C_s9q329.js";import{t as G}from"./tokens.style-CFvqdzpw.js";import{w as z}from"./watch-tFciLXSI.js";import{r as N}from"./resize-observer-B9k8v2TZ.js";import{s as D}from"./style-expression-property-D7o6hSzp.js";import{a as L,f as U}from"./button-BjKyAUF_.js";import"./field-base-CgRfAFAQ.js";import"./cross-large-DrW_LU0E.js";const I=q`
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
`;var X=Object.defineProperty,V=Object.getOwnPropertyDescriptor,R=e=>{throw TypeError(e)},a=(e,t,s,o)=>{for(var n=o>1?void 0:o?V(t,s):t,u=e.length-1,g;u>=0;u--)(g=e[u])&&(n=(o?g(t,s,n):g(n))||n);return o&&n&&X(t,s,n),n},C=(e,t,s)=>t.has(e)||R("Cannot "+s),h=(e,t,s)=>(C(e,t,"read from private field"),s?s.call(e):t.get(e)),l=(e,t,s)=>t.has(e)?R("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),d=(e,t,s)=>(C(e,t,"access private method"),s),r,S,T,f,m,_,v,w,y,$,A,E,k,P,M;let i=class extends L{constructor(){super(),l(this,r),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},l(this,f,e=>["type","placeholder","required"].includes(e.name)),l(this,m,e=>{const t=e.target;this.value=t.value}),l(this,_,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),l(this,v,e=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),l(this,w,()=>{this.elTextareaAsync.then(e=>e.focus())}),l(this,y,()=>{this.value="",this.elTextareaAsync.then(e=>{if(this.resizable==="manual")e.style.height="";else if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString()),e.style.height=""}}),this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#clear-button")}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{var s;const e=(s=this.fieldBase)==null?void 0:s.shadowRoot;if(!e)return;const t=e.querySelector(".right");if(t){const o=t.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${o.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return p`${H(this.variant,[["default",()=>d(this,r,S).call(this)],["floating-label",()=>d(this,r,T).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(e.value===""){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=getComputedStyle(e),s=parseFloat(t.lineHeight),o=e.scrollHeight,n=Math.ceil(o/s),u=this._initialRows??this._defaultRows;this.rows=Math.max(u,n),e.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(e=>{this.resizable==="false"&&e.style.setProperty("--_lines",this.rows.toString())})}};r=new WeakSet;S=function(){var e;return p`
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
        @click=${h(this,w)}
        multiline
      >
        ${d(this,r,$).call(this)}
      </gds-field-base>

      <gds-form-control-footer
        lass="size-${this.size}"
        .charCounter=${h(this,r,M)&&this.maxlength-(((e=this.value)==null?void 0:e.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};T=function(){return x};f=new WeakMap;m=new WeakMap;_=new WeakMap;v=new WeakMap;w=new WeakMap;y=new WeakMap;$=function(){return[d(this,r,A).call(this),d(this,r,k).call(this),d(this,r,P).call(this),d(this,r,E).call(this)].map(t=>p`${t}`)};A=function(){return p`<slot slot="lead" name="lead"></slot>`};E=function(){return p`<slot slot="trail" name="trail"></slot>`};k=function(){return p`
      <textarea
        @input=${h(this,m)}
        @change=${h(this,_)}
        @paste=${h(this,v)}
        .value=${this.value}
        id="input"
        class="resize-${this.resizable}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        placeholder=" "
        ${U(h(this,f))}
      ></textarea>
    `};P=function(){var e;return this.clearable&&(((e=this.value)==null?void 0:e.length)||0)>0?p`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${B("Clear input")}"
          @click=${h(this,y)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `:x};M=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};i.styles=[G,I];a([D({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],i.prototype,"rows",2);a([c({attribute:"supporting-text"})],i.prototype,"supportingText",2);a([c({type:Boolean})],i.prototype,"clearable",2);a([c({type:String})],i.prototype,"resizable",2);a([c({type:Number})],i.prototype,"maxlength",2);a([c({type:String})],i.prototype,"variant",2);a([c({type:String})],i.prototype,"size",2);a([W("textarea")],i.prototype,"elTextareaAsync",2);a([b("textarea")],i.prototype,"elTextarea",2);a([b("gds-field-base")],i.prototype,"fieldBase",2);a([N()],i.prototype,"_handleResize",1);a([z("value")],i.prototype,"_setAutoHeight",1);a([z("rows")],i.prototype,"_handleRowsChange",1);i=a([O("gds-textarea"),F()],i);
