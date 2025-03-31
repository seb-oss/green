import{m as B}from"./runtime-BL31MtW8.js";import{l as G}from"./localized-decorator-DtmrKsyB.js";import{n as c,h as p,g as O}from"./custom-element-scoping-b4c89-hi.js";import{a as x}from"./query-p8xgzTDt.js";import{r as W}from"./query-async-MEroNOeJ.js";import{r as H}from"./choose-Dh3k58u9.js";import{i as q,E as z}from"./lit-element-Bx14lxc-.js";import{G as L}from"./field-base.component-u2-leZ5O.js";import{G as N,a as I}from"./form-control-header.component-hkn5PcQv.js";import{t as D}from"./tokens.style-BScLRl5F.js";import{w as C}from"./watch-tFciLXSI.js";import{r as U}from"./resize-observer-B9k8v2TZ.js";import{s as X,d as V,w as J,b as K}from"./declarative-layout-mixins-BB4ZLY5n.js";import{a as Q,G as Y,f as Z}from"./button.component-Z9yRxVMZ.js";import{I as j}from"./cross-large.component-BYEseUaL.js";const ee=q`
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
`;var te=Object.defineProperty,se=Object.getOwnPropertyDescriptor,R=e=>{throw TypeError(e)},a=(e,t,s,n)=>{for(var o=n>1?void 0:n?se(t,s):t,u=e.length-1,g;u>=0;u--)(g=e[u])&&(o=(n?g(t,s,o):g(o))||o);return n&&o&&te(t,s,o),o},S=(e,t,s)=>t.has(e)||R("Cannot "+s),h=(e,t,s)=>(S(e,t,"read from private field"),s?s.call(e):t.get(e)),l=(e,t,s)=>t.has(e)?R("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),d=(e,t,s)=>(S(e,t,"access private method"),s),r,T,$,m,_,w,v,y,b,A,E,P,k,M,F;let i=class extends Q{constructor(){super(),l(this,r),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},l(this,m,e=>["type","placeholder","required"].includes(e.name)),l(this,_,e=>{const t=e.target;this.value=t.value}),l(this,w,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),l(this,v,e=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),l(this,y,()=>{this.elTextareaAsync.then(e=>e.focus())}),l(this,b,()=>{this.value="",this.elTextareaAsync.then(e=>{if(this.resizable==="manual")e.style.height="";else if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString()),e.style.height=""}}),this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#clear-button")}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{var s;const e=(s=this.fieldBase)==null?void 0:s.shadowRoot;if(!e)return;const t=e.querySelector(".right");if(t){const n=t.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${n.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return p`${H(this.variant,[["default",()=>d(this,r,T).call(this)],["floating-label",()=>d(this,r,$).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(e.value===""){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=getComputedStyle(e),s=parseFloat(t.lineHeight),n=e.scrollHeight,o=Math.ceil(n/s),u=this._initialRows??this._defaultRows;this.rows=Math.max(u,o),e.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(e=>{this.resizable==="false"&&e.style.setProperty("--_lines",this.rows.toString())})}};r=new WeakSet;T=function(){var e;return p`
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
        @click=${h(this,y)}
        multiline
      >
        ${d(this,r,A).call(this)}
      </gds-field-base>

      <gds-form-control-footer
        lass="size-${this.size}"
        .charCounter=${h(this,r,F)&&this.maxlength-(((e=this.value)==null?void 0:e.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};$=function(){return z};m=new WeakMap;_=new WeakMap;w=new WeakMap;v=new WeakMap;y=new WeakMap;b=new WeakMap;A=function(){return[d(this,r,E).call(this),d(this,r,k).call(this),d(this,r,M).call(this),d(this,r,P).call(this)].map(t=>p`${t}`)};E=function(){return p`<slot slot="lead" name="lead"></slot>`};P=function(){return p`<slot slot="trail" name="trail"></slot>`};k=function(){return p`
      <textarea
        @input=${h(this,_)}
        @change=${h(this,w)}
        @paste=${h(this,v)}
        .value=${this.value}
        id="input"
        class="resize-${this.resizable}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        placeholder=" "
        ${Z(h(this,m))}
      ></textarea>
    `};M=function(){var e;return this.clearable&&(((e=this.value)==null?void 0:e.length)||0)>0?p`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${B("Clear input")}"
          @click=${h(this,b)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `:z};F=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};i.styles=[D,ee];a([X({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],i.prototype,"rows",2);a([c({attribute:"supporting-text"})],i.prototype,"supportingText",2);a([c({type:Boolean})],i.prototype,"clearable",2);a([c({type:String})],i.prototype,"resizable",2);a([c({type:Number})],i.prototype,"maxlength",2);a([c({type:String})],i.prototype,"variant",2);a([c({type:String})],i.prototype,"size",2);a([W("textarea")],i.prototype,"elTextareaAsync",2);a([x("textarea")],i.prototype,"elTextarea",2);a([x("gds-field-base")],i.prototype,"fieldBase",2);a([U()],i.prototype,"_handleResize",1);a([C("value")],i.prototype,"_setAutoHeight",1);a([C("rows")],i.prototype,"_handleRowsChange",1);i=a([G()],i);let f=class extends V(J(K(i))){};f=a([O("gds-textarea",{dependsOn:[N,I,Y,L,j]})],f);f.define();
