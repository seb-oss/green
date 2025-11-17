import{l as M,m as G}from"./runtime-CNluP0A8.js";import{n as r}from"./Reflect-DJ7r0WLU.js";import{a as z}from"./query-p8xgzTDt.js";import{r as O}from"./query-async-MEroNOeJ.js";import{o as d}from"./if-defined-CVqwUuaf.js";import{n as S}from"./when-BR7zwNJC.js";import{i as H,E as T}from"./lit-element-Bx14lxc-.js";import{f as W,G as q}from"./form-control-host.style-CZYByobw.js";import{G as N,a as I}from"./form-control-header.component-Cbr3TQRo.js";import{h,g as D}from"./gds-element-DTROifYq.js";import{t as L}from"./tokens.style-CQAfIFlK.js";import{w as _}from"./watch-tFciLXSI.js";import{r as U}from"./resize-observer-B9k8v2TZ.js";import{s as V,d as X,w as J,b as K}from"./declarative-layout-mixins-C4FFYA_h.js";import{a as Q,G as Y}from"./button.component-D-n6FD2-.js";import{I as Z}from"./cross-small.component-pakmiBgV.js";const j=H`
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
`;var tt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,R=t=>{throw TypeError(t)},i=(t,e,a,o)=>{for(var l=o>1?void 0:o?et(e,a):e,g=t.length-1,m;g>=0;g--)(m=t[g])&&(l=(o?m(e,a,l):m(l))||l);return o&&l&&tt(e,a,l),l},w=(t,e,a)=>e.has(t)||R("Cannot "+a),u=(t,e,a)=>(w(t,e,"read from private field"),a?a.call(t):e.get(t)),p=(t,e,a)=>e.has(t)?R("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),st=(t,e,a,o)=>(w(t,e,"write to private field"),e.set(t,a),a),c=(t,e,a)=>(w(t,e,"access private method"),a),f,n,k,v,b,x,y,C,A,E,P,B,F;let s=class extends Q{constructor(){super(),p(this,n),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.showExtendedSupportingText=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.autocapitalize="off",this.autocorrect=!1,this.autofocus=!1,this.spellcheck=!0,this.charCounterCallback=it,p(this,f,this.charCounterCallback(this)),this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},p(this,v,t=>{const e=t.target;this.value=e.value}),p(this,b,t=>{const e=t.target;this.value=e.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),p(this,x,t=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),p(this,y,()=>{this.elTextareaAsync.then(t=>t.focus())}),p(this,C,()=>{this.value="",this.elTextareaAsync.then(t=>{if(this.resizable==="manual")t.style.height="";else if(this.resizable==="false"){const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString())}else{const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString()),t.style.height=""}}),this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}focus(t){var e;(e=this._getValidityAnchor())==null||e.focus(t)}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{var a;const t=(a=this.fieldBase)==null?void 0:a.shadowRoot;if(!t)return;const e=t.querySelector(".right");if(e){const o=e.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${o.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return h`
      ${S(!this.plain,()=>h`<gds-form-control-header
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
        @click=${u(this,y)}
        multiline
      >
        ${c(this,n,A).call(this)}
      </gds-field-base>

      ${S(c(this,n,k).call(this),()=>h`<gds-form-control-footer
            id="footer"
            class="size-${this.size}"
            .charCounter=${u(this,f)}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleValueChange(){st(this,f,this.charCounterCallback(this))}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(t=>{if(this.resizable==="false"){const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(t.value===""){const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString())}else{const e=getComputedStyle(t),a=parseFloat(e.lineHeight),o=t.scrollHeight,l=Math.ceil(o/a),g=this._initialRows??this._defaultRows;this.rows=Math.max(g,l),t.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(t=>{this.resizable==="false"&&t.style.setProperty("--_lines",this.rows.toString())})}};f=new WeakMap;n=new WeakSet;k=function(){return!this.plain};v=new WeakMap;b=new WeakMap;x=new WeakMap;y=new WeakMap;C=new WeakMap;A=function(){return[c(this,n,E).call(this),c(this,n,B).call(this),c(this,n,F).call(this),c(this,n,P).call(this)].map(e=>h`${e}`)};E=function(){return h`<slot slot="lead" name="lead"></slot>`};P=function(){return h`<slot slot="trail" name="trail"></slot>`};B=function(){return h`
      <textarea
        @input=${u(this,v)}
        @change=${u(this,b)}
        @paste=${u(this,x)}
        .value=${this.value}
        id="input"
        class="native-control resize-${this.resizable}"
        aria-label=${this.plain&&this.label||T}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-errormessage="footer"
        placeholder=" "
        autocapitalize=${d(this.autocapitalize)}
        autocomplete=${d(this.autocomplete)}
        autocorrect=${d(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${d(this.enterkeyhint)}
        inputmode=${d(this.inputmode)}
        wrap=${d(this.wrap)}
        ?required=${this.required}
      ></textarea>
    `};F=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?h`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${d(this.invalid?"negative":void 0)}"
          ?disabled="${this.disabled}"
          label="${G("Clear input")}"
          @click=${u(this,C)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
        </gds-button>
      `:T};s.styles=[L,W,j];i([V({valueTemplate:t=>t,selector:"textarea",styleTemplate:(t,e)=>`min-height: calc(1lh * ${e[0]});`})],s.prototype,"rows",2);i([r({attribute:"supporting-text"})],s.prototype,"supportingText",2);i([r({type:Boolean})],s.prototype,"clearable",2);i([r({type:String})],s.prototype,"resizable",2);i([r({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);i([r({type:Number})],s.prototype,"maxlength",2);i([r({type:String})],s.prototype,"size",2);i([r({type:Boolean})],s.prototype,"plain",2);i([r()],s.prototype,"autocapitalize",2);i([r({type:Boolean})],s.prototype,"autocorrect",2);i([r()],s.prototype,"autocomplete",2);i([r({type:Boolean})],s.prototype,"autofocus",2);i([r({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],s.prototype,"spellcheck",2);i([r()],s.prototype,"wrap",2);i([r()],s.prototype,"enterkeyhint",2);i([r()],s.prototype,"inputmode",2);i([r({attribute:!1})],s.prototype,"charCounterCallback",2);i([O("textarea")],s.prototype,"elTextareaAsync",2);i([z("textarea")],s.prototype,"elTextarea",2);i([z("gds-field-base")],s.prototype,"fieldBase",2);i([U()],s.prototype,"_handleResize",1);i([_("value")],s.prototype,"_handleValueChange",1);i([_("value")],s.prototype,"_setAutoHeight",1);i([_("rows")],s.prototype,"_handleRowsChange",1);s=i([M()],s);let $=class extends X(J(K(s))){};$=i([D("gds-textarea",{dependsOn:[N,I,Y,q,Z]})],$);const it=t=>{var a,o;const e=(((a=t.value)==null?void 0:a.length)||0)>=t.maxlength?"negative":"positive";return[t.maxlength-(((o=t.value)==null?void 0:o.length)||0),t.maxlength<Number.MAX_SAFE_INTEGER&&e]};export{$ as G,it as c};
