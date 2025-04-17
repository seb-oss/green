import{m as B}from"./runtime-BL31MtW8.js";import{l as G}from"./localized-decorator-DtmrKsyB.js";import{n as c,h,g as O}from"./custom-element-scoping-b4c89-hi.js";import{a as R}from"./query-p8xgzTDt.js";import{r as H}from"./query-async-MEroNOeJ.js";import{n as C}from"./when-BR7zwNJC.js";import{i as W,E as z}from"./lit-element-Bx14lxc-.js";import{f as q,G as N}from"./form-control-host.style-C4yW1JWW.js";import{G as I,a as L}from"./form-control-header.component-B10A3La-.js";import{t as U}from"./tokens.style-FJSmZZcv.js";import{w as S}from"./watch-tFciLXSI.js";import{r as D}from"./resize-observer-B9k8v2TZ.js";import{s as X,d as V,w as J,b as K}from"./declarative-layout-mixins-BgWwoHZ-.js";import{a as Q,G as Y,f as Z}from"./button.component-DtF9Ct8d.js";import{I as j}from"./cross-large.component-q0mIQ94A.js";const ee=W`
  textarea {
    height: calc(1lh * var(--_lines));
    min-height: calc(1lh * 4);
    max-height: calc(1lh * 20);
    overflow: auto;
    min-width: 20ch;
    padding-inline-end: calc(
      var(--gds-sys-space-xs) + var(--padding-inline-end)
    );

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
`;var te=Object.defineProperty,se=Object.getOwnPropertyDescriptor,$=e=>{throw TypeError(e)},a=(e,t,s,n)=>{for(var o=n>1?void 0:n?se(t,s):t,u=e.length-1,g;u>=0;u--)(g=e[u])&&(o=(n?g(t,s,o):g(o))||o);return n&&o&&te(t,s,o),o},T=(e,t,s)=>t.has(e)||$("Cannot "+s),l=(e,t,s)=>(T(e,t,"read from private field"),s?s.call(e):t.get(e)),d=(e,t,s)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),p=(e,t,s)=>(T(e,t,"access private method"),s),r,A,_,w,v,y,f,b,E,P,M,k,F,x;let i=class extends Q{constructor(){super(),d(this,r),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},d(this,_,e=>["type","placeholder","required"].includes(e.name)),d(this,w,e=>{const t=e.target;this.value=t.value}),d(this,v,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),d(this,y,e=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),d(this,f,()=>{this.elTextareaAsync.then(e=>e.focus())}),d(this,b,()=>{this.value="",this.elTextareaAsync.then(e=>{if(this.resizable==="manual")e.style.height="";else if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString()),e.style.height=""}}),this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#clear-button")}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{var s;const e=(s=this.fieldBase)==null?void 0:s.shadowRoot;if(!e)return;const t=e.querySelector(".right");if(t){const n=t.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${n.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return h`
      ${C(!this.plain,()=>h`<gds-form-control-header class="size-${this.size}">
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
        @click=${l(this,f)}
        multiline
      >
        ${p(this,r,E).call(this)}
      </gds-field-base>

      ${C(p(this,r,A).call(this),()=>{var e;return h`<gds-form-control-footer
            lass="size-${this.size}"
            .charCounter=${l(this,r,x)&&this.maxlength-(((e=this.value)==null?void 0:e.length)||0)}
            .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
          ></gds-form-control-footer>`})}
    `}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(e.value===""){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=getComputedStyle(e),s=parseFloat(t.lineHeight),n=e.scrollHeight,o=Math.ceil(n/s),u=this._initialRows??this._defaultRows;this.rows=Math.max(u,o),e.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(e=>{this.resizable==="false"&&e.style.setProperty("--_lines",this.rows.toString())})}};r=new WeakSet;A=function(){return!this.plain&&(this.invalid||l(this,r,x))};_=new WeakMap;w=new WeakMap;v=new WeakMap;y=new WeakMap;f=new WeakMap;b=new WeakMap;E=function(){return[p(this,r,P).call(this),p(this,r,k).call(this),p(this,r,F).call(this),p(this,r,M).call(this)].map(t=>h`${t}`)};P=function(){return h`<slot slot="lead" name="lead"></slot>`};M=function(){return h`<slot slot="trail" name="trail"></slot>`};k=function(){return h`
      <textarea
        @input=${l(this,w)}
        @change=${l(this,v)}
        @paste=${l(this,y)}
        .value=${this.value}
        id="input"
        class="native-control resize-${this.resizable}"
        aria-label=${this.plain&&this.label||z}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        placeholder=" "
        ${Z(l(this,_))}
      ></textarea>
    `};F=function(){var e;return this.clearable&&(((e=this.value)==null?void 0:e.length)||0)>0?h`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${B("Clear input")}"
          @click=${l(this,b)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `:z};x=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};i.styles=[U,q,ee];a([X({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],i.prototype,"rows",2);a([c({attribute:"supporting-text"})],i.prototype,"supportingText",2);a([c({type:Boolean})],i.prototype,"clearable",2);a([c({type:String})],i.prototype,"resizable",2);a([c({type:Number})],i.prototype,"maxlength",2);a([c({type:String})],i.prototype,"size",2);a([c({type:Boolean})],i.prototype,"plain",2);a([H("textarea")],i.prototype,"elTextareaAsync",2);a([R("textarea")],i.prototype,"elTextarea",2);a([R("gds-field-base")],i.prototype,"fieldBase",2);a([D()],i.prototype,"_handleResize",1);a([S("value")],i.prototype,"_setAutoHeight",1);a([S("rows")],i.prototype,"_handleRowsChange",1);i=a([G()],i);let m=class extends V(J(K(i))){};m=a([O("gds-textarea",{dependsOn:[I,L,Y,N,j]})],m);m.define();
