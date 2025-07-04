import{m as G}from"./runtime-BL31MtW8.js";import{l as M}from"./localized-decorator-DtmrKsyB.js";import{n as o,h,g as O}from"./gds-element-DKcDvDP5.js";import{a as $}from"./query-p8xgzTDt.js";import{r as H}from"./query-async-MEroNOeJ.js";import{o as p}from"./if-defined-BAXgs-ZI.js";import{n as x}from"./when-BR7zwNJC.js";import{i as W,E as S}from"./lit-element-Bx14lxc-.js";import{f as q,G as N}from"./form-control-host.style-DwE6PniO.js";import{G as I,a as L}from"./form-control-header.component-vpadqcyN.js";import{t as U}from"./tokens.style-BJN0iJ4Z.js";import{w as z}from"./watch-tFciLXSI.js";import{r as D}from"./resize-observer-B9k8v2TZ.js";import{s as X,w as V,a as J,b as K}from"./declarative-layout-mixins-Bw_LIblW.js";import{a as Q,G as Y}from"./button.component-BkcuxinN.js";import{I as Z}from"./cross-large.component-BIXjQpCK.js";const j=W`
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
`;var tt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,C=t=>{throw TypeError(t)},i=(t,e,r,l)=>{for(var a=l>1?void 0:l?et(e,r):e,f=t.length-1,g;f>=0;f--)(g=t[f])&&(a=(l?g(e,r,a):g(a))||a);return l&&a&&tt(e,r,a),a},R=(t,e,r)=>e.has(t)||C("Cannot "+r),u=(t,e,r)=>(R(t,e,"read from private field"),r?r.call(t):e.get(t)),d=(t,e,r)=>e.has(t)?C("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),c=(t,e,r)=>(R(t,e,"access private method"),r),n,T,y,_,w,m,v,E,A,k,P,B,F;let s=class extends Q{constructor(){super(),d(this,n),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.showExtendedSupportingText=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.autocapitalize="off",this.autofocus=!1,this.spellcheck=!0,this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},d(this,y,t=>{const e=t.target;this.value=e.value}),d(this,_,t=>{const e=t.target;this.value=e.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),d(this,w,t=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),d(this,m,()=>{this.elTextareaAsync.then(t=>t.focus())}),d(this,v,()=>{this.value="",this.elTextareaAsync.then(t=>{if(this.resizable==="manual")t.style.height="";else if(this.resizable==="false"){const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString())}else{const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString()),t.style.height=""}}),this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{var r;const t=(r=this.fieldBase)==null?void 0:r.shadowRoot;if(!t)return;const e=t.querySelector(".right");if(e){const l=e.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${l.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return h`
      ${x(!this.plain,()=>h`<gds-form-control-header
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
        @click=${u(this,m)}
        multiline
      >
        ${c(this,n,E).call(this)}
      </gds-field-base>

      ${x(c(this,n,T).call(this),()=>{var t;return h`<gds-form-control-footer
            id="footer"
            class="size-${this.size}"
            .charCounter=${u(this,n,F)?this.maxlength-(((t=this.value)==null?void 0:t.length)||0):void 0}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`})}
    `}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(t=>{if(this.resizable==="false"){const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(t.value===""){const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString())}else{const e=getComputedStyle(t),r=parseFloat(e.lineHeight),l=t.scrollHeight,a=Math.ceil(l/r),f=this._initialRows??this._defaultRows;this.rows=Math.max(f,a),t.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(t=>{this.resizable==="false"&&t.style.setProperty("--_lines",this.rows.toString())})}};n=new WeakSet;T=function(){return!this.plain};y=new WeakMap;_=new WeakMap;w=new WeakMap;m=new WeakMap;v=new WeakMap;E=function(){return[c(this,n,A).call(this),c(this,n,P).call(this),c(this,n,B).call(this),c(this,n,k).call(this)].map(e=>h`${e}`)};A=function(){return h`<slot slot="lead" name="lead"></slot>`};k=function(){return h`<slot slot="trail" name="trail"></slot>`};P=function(){return h`
      <textarea
        @input=${u(this,y)}
        @change=${u(this,_)}
        @paste=${u(this,w)}
        .value=${this.value}
        id="input"
        class="native-control resize-${this.resizable}"
        aria-label=${this.plain&&this.label||S}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-errormessage="footer"
        placeholder=" "
        autocapitalize=${p(this.autocapitalize)}
        autocomplete=${p(this.autocomplete)}
        autocorrect=${p(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${p(this.enterkeyhint)}
        inputmode=${p(this.inputmode)}
        wrap=${p(this.wrap)}
        ?required=${this.required}
      ></textarea>
    `};B=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?h`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${G("Clear input")}"
          @click=${u(this,v)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `:S};F=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};s.styles=[U,q,j];i([X({valueTemplate:t=>t,selector:"textarea",styleTemplate:(t,e)=>`min-height: calc(1lh * ${e[0]});`})],s.prototype,"rows",2);i([o({attribute:"supporting-text"})],s.prototype,"supportingText",2);i([o({type:Boolean})],s.prototype,"clearable",2);i([o({type:String})],s.prototype,"resizable",2);i([o({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);i([o({type:Number})],s.prototype,"maxlength",2);i([o({type:String})],s.prototype,"size",2);i([o({type:Boolean})],s.prototype,"plain",2);i([o()],s.prototype,"autocapitalize",2);i([o()],s.prototype,"autocorrect",2);i([o()],s.prototype,"autocomplete",2);i([o({type:Boolean})],s.prototype,"autofocus",2);i([o({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],s.prototype,"spellcheck",2);i([o()],s.prototype,"wrap",2);i([o()],s.prototype,"enterkeyhint",2);i([o()],s.prototype,"inputmode",2);i([H("textarea")],s.prototype,"elTextareaAsync",2);i([$("textarea")],s.prototype,"elTextarea",2);i([$("gds-field-base")],s.prototype,"fieldBase",2);i([D()],s.prototype,"_handleResize",1);i([z("value")],s.prototype,"_setAutoHeight",1);i([z("rows")],s.prototype,"_handleRowsChange",1);s=i([M()],s);let b=class extends V(J(K(s))){};b=i([O("gds-textarea",{dependsOn:[I,L,Y,N,Z]})],b);export{b as G};
