import{m as B}from"./runtime-BL31MtW8.js";import{l as F}from"./localized-decorator-DtmrKsyB.js";import{n as p,h as l,g as G}from"./custom-element-scoping-b4c89-hi.js";import{a as C}from"./query-p8xgzTDt.js";import{r as O}from"./query-async-MEroNOeJ.js";import{n as x}from"./when-BR7zwNJC.js";import{i as H,E as R}from"./lit-element-Bx14lxc-.js";import{f as W,G as q}from"./form-control-host.style-CjuX2tXS.js";import{G as N,a as I}from"./form-control-header.component-WfvpaWX8.js";import{t as L}from"./tokens.style-C9bLefPj.js";import{w as z}from"./watch-tFciLXSI.js";import{r as U}from"./resize-observer-B9k8v2TZ.js";import{s as D,d as X,w as V,b as J}from"./declarative-layout-mixins-BB4ZLY5n.js";import{a as K,G as Q,f as Y}from"./button.component-stQavwFU.js";import{I as Z}from"./cross-large.component-BYEseUaL.js";const j=H`
  textarea {
    height: calc(1lh * var(--_lines));
    min-height: calc(1lh * 4);
    max-height: calc(1lh * 20);
    overflow: auto;
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
`;var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},a=(e,t,s,o)=>{for(var r=o>1?void 0:o?te(t,s):t,c=e.length-1,g;c>=0;c--)(g=e[c])&&(r=(o?g(t,s,r):g(r))||r);return o&&r&&ee(t,s,r),r},$=(e,t,s)=>t.has(e)||S("Cannot "+s),d=(e,t,s)=>($(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),u=(e,t,s)=>($(e,t,"access private method"),s),_,w,v,y,f,b,n,T,A,E,P,M,k;let i=class extends K{constructor(){super(),h(this,n),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this.plain=!1,this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},h(this,_,e=>["type","placeholder","required"].includes(e.name)),h(this,w,e=>{const t=e.target;this.value=t.value}),h(this,v,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),h(this,y,e=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),h(this,f,()=>{this.elTextareaAsync.then(e=>e.focus())}),h(this,b,()=>{this.value="",this.elTextareaAsync.then(e=>{if(this.resizable==="manual")e.style.height="";else if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString()),e.style.height=""}}),this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#clear-button")}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{var s;const e=(s=this.fieldBase)==null?void 0:s.shadowRoot;if(!e)return;const t=e.querySelector(".right");if(t){const o=t.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${o.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return l`
      ${x(!this.plain,()=>l`<gds-form-control-header class="size-${this.size}">
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
        id="field"
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${d(this,f)}
        multiline
      >
        ${u(this,n,T).call(this)}
      </gds-field-base>

      ${x(!this.plain,()=>{var e;return l`<gds-form-control-footer
            lass="size-${this.size}"
            .charCounter=${d(this,n,k)&&this.maxlength-(((e=this.value)==null?void 0:e.length)||0)}
            .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
          ></gds-form-control-footer>`})}
    `}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(e.value===""){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=getComputedStyle(e),s=parseFloat(t.lineHeight),o=e.scrollHeight,r=Math.ceil(o/s),c=this._initialRows??this._defaultRows;this.rows=Math.max(c,r),e.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(e=>{this.resizable==="false"&&e.style.setProperty("--_lines",this.rows.toString())})}};_=new WeakMap;w=new WeakMap;v=new WeakMap;y=new WeakMap;f=new WeakMap;b=new WeakMap;n=new WeakSet;T=function(){return[u(this,n,A).call(this),u(this,n,P).call(this),u(this,n,M).call(this),u(this,n,E).call(this)].map(t=>l`${t}`)};A=function(){return l`<slot slot="lead" name="lead"></slot>`};E=function(){return l`<slot slot="trail" name="trail"></slot>`};P=function(){return l`
      <textarea
        @input=${d(this,w)}
        @change=${d(this,v)}
        @paste=${d(this,y)}
        .value=${this.value}
        id="input"
        class="native-control resize-${this.resizable}"
        aria-label=${this.plain&&this.label||R}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        placeholder=" "
        ${Y(d(this,_))}
      ></textarea>
    `};M=function(){var e;return this.clearable&&(((e=this.value)==null?void 0:e.length)||0)>0?l`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${B("Clear input")}"
          @click=${d(this,b)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `:R};k=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};i.styles=[L,W,j];a([D({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],i.prototype,"rows",2);a([p({attribute:"supporting-text"})],i.prototype,"supportingText",2);a([p({type:Boolean})],i.prototype,"clearable",2);a([p({type:String})],i.prototype,"resizable",2);a([p({type:Number})],i.prototype,"maxlength",2);a([p({type:String})],i.prototype,"variant",2);a([p({type:String})],i.prototype,"size",2);a([p({type:Boolean})],i.prototype,"plain",2);a([O("textarea")],i.prototype,"elTextareaAsync",2);a([C("textarea")],i.prototype,"elTextarea",2);a([C("gds-field-base")],i.prototype,"fieldBase",2);a([U()],i.prototype,"_handleResize",1);a([z("value")],i.prototype,"_setAutoHeight",1);a([z("rows")],i.prototype,"_handleRowsChange",1);i=a([F()],i);let m=class extends X(V(J(i))){};m=a([G("gds-textarea",{dependsOn:[N,I,Q,q,Z]})],m);m.define();
