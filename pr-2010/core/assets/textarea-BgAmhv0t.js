import{m as F}from"./runtime-BL31MtW8.js";import{l as O}from"./localized-decorator-DtmrKsyB.js";import{n as c,g as W,h as p}from"./custom-element-scoping-BEGY3AqQ.js";import{a as x}from"./query-p8xgzTDt.js";import{r as H}from"./query-async-MEroNOeJ.js";import{r as q}from"./choose-Dh3k58u9.js";import{i as N,E as z}from"./lit-element-C_s9q329.js";import{t as G}from"./tokens.style-CFvqdzpw.js";import{w as R}from"./watch-tFciLXSI.js";import{r as L}from"./resize-observer-B9k8v2TZ.js";import{s as D,d as U,w as I,b as X}from"./declarative-layout-mixins-Cg5fmtre.js";import{a as V,f as J}from"./button-DMqiAWPO.js";import"./field-base-DrpYf7Nt.js";import"./cross-large-DrW_LU0E.js";const K=N`
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
`;var Q=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,C=e=>{throw TypeError(e)},a=(e,t,s,o)=>{for(var n=o>1?void 0:o?Y(t,s):t,u=e.length-1,g;u>=0;u--)(g=e[u])&&(n=(o?g(t,s,n):g(n))||n);return o&&n&&Q(t,s,n),n},S=(e,t,s)=>t.has(e)||C("Cannot "+s),h=(e,t,s)=>(S(e,t,"read from private field"),s?s.call(e):t.get(e)),l=(e,t,s)=>t.has(e)?C("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),d=(e,t,s)=>(S(e,t,"access private method"),s),r,T,$,f,m,_,w,v,y,A,E,P,k,M,B;let i=class extends V{constructor(){super(),l(this,r),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},l(this,f,e=>["type","placeholder","required"].includes(e.name)),l(this,m,e=>{const t=e.target;this.value=t.value}),l(this,_,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),l(this,w,e=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),l(this,v,()=>{this.elTextareaAsync.then(e=>e.focus())}),l(this,y,()=>{this.value="",this.elTextareaAsync.then(e=>{if(this.resizable==="manual")e.style.height="";else if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString()),e.style.height=""}}),this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#clear-button")}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{var s;const e=(s=this.fieldBase)==null?void 0:s.shadowRoot;if(!e)return;const t=e.querySelector(".right");if(t){const o=t.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${o.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return p`${q(this.variant,[["default",()=>d(this,r,T).call(this)],["floating-label",()=>d(this,r,$).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(e.value===""){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=getComputedStyle(e),s=parseFloat(t.lineHeight),o=e.scrollHeight,n=Math.ceil(o/s),u=this._initialRows??this._defaultRows;this.rows=Math.max(u,n),e.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(e=>{this.resizable==="false"&&e.style.setProperty("--_lines",this.rows.toString())})}};r=new WeakSet;T=function(){var e;return p`
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
        @click=${h(this,v)}
        multiline
      >
        ${d(this,r,A).call(this)}
      </gds-field-base>

      <gds-form-control-footer
        lass="size-${this.size}"
        .charCounter=${h(this,r,B)&&this.maxlength-(((e=this.value)==null?void 0:e.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};$=function(){return z};f=new WeakMap;m=new WeakMap;_=new WeakMap;w=new WeakMap;v=new WeakMap;y=new WeakMap;A=function(){return[d(this,r,E).call(this),d(this,r,k).call(this),d(this,r,M).call(this),d(this,r,P).call(this)].map(t=>p`${t}`)};E=function(){return p`<slot slot="lead" name="lead"></slot>`};P=function(){return p`<slot slot="trail" name="trail"></slot>`};k=function(){return p`
      <textarea
        @input=${h(this,m)}
        @change=${h(this,_)}
        @paste=${h(this,w)}
        .value=${this.value}
        id="input"
        class="resize-${this.resizable}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        placeholder=" "
        ${J(h(this,f))}
      ></textarea>
    `};M=function(){var e;return this.clearable&&(((e=this.value)==null?void 0:e.length)||0)>0?p`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${F("Clear input")}"
          @click=${h(this,y)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `:z};B=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};i.styles=[G,K];a([D({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],i.prototype,"rows",2);a([c({attribute:"supporting-text"})],i.prototype,"supportingText",2);a([c({type:Boolean})],i.prototype,"clearable",2);a([c({type:String})],i.prototype,"resizable",2);a([c({type:Number})],i.prototype,"maxlength",2);a([c({type:String})],i.prototype,"variant",2);a([c({type:String})],i.prototype,"size",2);a([H("textarea")],i.prototype,"elTextareaAsync",2);a([x("textarea")],i.prototype,"elTextarea",2);a([x("gds-field-base")],i.prototype,"fieldBase",2);a([L()],i.prototype,"_handleResize",1);a([R("value")],i.prototype,"_setAutoHeight",1);a([R("rows")],i.prototype,"_handleRowsChange",1);i=a([O()],i);let b=class extends U(I(X(i))){};b=a([W("gds-textarea")],b);
