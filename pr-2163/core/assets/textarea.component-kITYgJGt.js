import{m as F}from"./runtime-BL31MtW8.js";import{l as G}from"./localized-decorator-DtmrKsyB.js";import{n as p,h,g as O}from"./custom-element-scoping-CNGU1oQ0.js";import{a as C}from"./query-p8xgzTDt.js";import{r as H}from"./query-async-MEroNOeJ.js";import{n as b}from"./when-BR7zwNJC.js";import{i as W,E as R}from"./lit-element-Bx14lxc-.js";import{f as q,G as N}from"./form-control-host.style-6nBgr2Im.js";import{G as I,a as L}from"./form-control-header.component-2No3NYhH.js";import{t as U}from"./tokens.style-BM4vGTsU.js";import{w as T}from"./watch-tFciLXSI.js";import{r as D}from"./resize-observer-B9k8v2TZ.js";import{s as X,d as V,w as J,b as K}from"./declarative-layout-mixins-D1Y0gyd7.js";import{a as Q,G as Y,f as Z}from"./button.component-DXC0APnJ.js";import{I as j}from"./cross-large.component-B19sf77F.js";const ee=W`
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
`;var te=Object.defineProperty,se=Object.getOwnPropertyDescriptor,z=e=>{throw TypeError(e)},a=(e,t,s,n)=>{for(var o=n>1?void 0:n?se(t,s):t,u=e.length-1,g;u>=0;u--)(g=e[u])&&(o=(n?g(t,s,o):g(o))||o);return n&&o&&te(t,s,o),o},$=(e,t,s)=>t.has(e)||z("Cannot "+s),l=(e,t,s)=>($(e,t,"read from private field"),s?s.call(e):t.get(e)),d=(e,t,s)=>t.has(e)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),c=(e,t,s)=>($(e,t,"access private method"),s),r,E,m,_,w,y,f,v,A,P,M,k,B,x;let i=class extends Q{constructor(){super(),d(this,r),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.showExtendedSupportingText=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},d(this,m,e=>["type","placeholder","required"].includes(e.name)),d(this,_,e=>{const t=e.target;this.value=t.value}),d(this,w,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),d(this,y,e=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),d(this,f,()=>{this.elTextareaAsync.then(e=>e.focus())}),d(this,v,()=>{this.value="",this.elTextareaAsync.then(e=>{if(this.resizable==="manual")e.style.height="";else if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString()),e.style.height=""}}),this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#clear-button")}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{var s;const e=(s=this.fieldBase)==null?void 0:s.shadowRoot;if(!e)return;const t=e.querySelector(".right");if(t){const n=t.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${n.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return h`
      ${b(!this.plain,()=>h`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
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
        ${c(this,r,A).call(this)}
      </gds-field-base>

      ${b(c(this,r,E).call(this),()=>{var e;return h`<gds-form-control-footer
            lass="size-${this.size}"
            .charCounter=${l(this,r,x)&&this.maxlength-(((e=this.value)==null?void 0:e.length)||0)}
            .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
          ></gds-form-control-footer>`})}
    `}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(e.value===""){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=getComputedStyle(e),s=parseFloat(t.lineHeight),n=e.scrollHeight,o=Math.ceil(n/s),u=this._initialRows??this._defaultRows;this.rows=Math.max(u,o),e.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(e=>{this.resizable==="false"&&e.style.setProperty("--_lines",this.rows.toString())})}};r=new WeakSet;E=function(){return!this.plain&&(this.invalid||l(this,r,x))};m=new WeakMap;_=new WeakMap;w=new WeakMap;y=new WeakMap;f=new WeakMap;v=new WeakMap;A=function(){return[c(this,r,P).call(this),c(this,r,k).call(this),c(this,r,B).call(this),c(this,r,M).call(this)].map(t=>h`${t}`)};P=function(){return h`<slot slot="lead" name="lead"></slot>`};M=function(){return h`<slot slot="trail" name="trail"></slot>`};k=function(){return h`
      <textarea
        @input=${l(this,_)}
        @change=${l(this,w)}
        @paste=${l(this,y)}
        .value=${this.value}
        id="input"
        class="native-control resize-${this.resizable}"
        aria-label=${this.plain&&this.label||R}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        placeholder=" "
        ${Z(l(this,m))}
      ></textarea>
    `};B=function(){var e;return this.clearable&&(((e=this.value)==null?void 0:e.length)||0)>0?h`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${F("Clear input")}"
          @click=${l(this,v)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `:R};x=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};i.styles=[U,q,ee];a([X({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],i.prototype,"rows",2);a([p({attribute:"supporting-text"})],i.prototype,"supportingText",2);a([p({type:Boolean})],i.prototype,"clearable",2);a([p({type:String})],i.prototype,"resizable",2);a([p({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);a([p({type:Number})],i.prototype,"maxlength",2);a([p({type:String})],i.prototype,"size",2);a([p({type:Boolean})],i.prototype,"plain",2);a([H("textarea")],i.prototype,"elTextareaAsync",2);a([C("textarea")],i.prototype,"elTextarea",2);a([C("gds-field-base")],i.prototype,"fieldBase",2);a([D()],i.prototype,"_handleResize",1);a([T("value")],i.prototype,"_setAutoHeight",1);a([T("rows")],i.prototype,"_handleRowsChange",1);i=a([G()],i);let S=class extends V(J(K(i))){};S=a([O("gds-textarea",{dependsOn:[I,L,Y,N,j]})],S);export{S as G};
