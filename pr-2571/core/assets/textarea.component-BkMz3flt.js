import{i as M,t as V,s as G,n as o,d as z,a8 as m,Q as O,a0 as H,S as W,a9 as q,b as S,h,E as R,o as p,O as D,g as N,P as I}from"./iframe-CJE7aiH0.js";import{l as L}from"./localized-decorator-kFqkmb10.js";import{r as U}from"./query-async-utgmSpeQ.js";import{f as X,G as Q}from"./form-control-host.style-CmHUQyIY.js";import{G as J,a as K}from"./form-control-header.component-BsIbS895.js";import{r as Y}from"./resize-observer-B9k8v2TZ.js";import{I as Z}from"./cross-small.component-CSC62mww.js";const j=M`
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
`;var tt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,T=t=>{throw TypeError(t)},a=(t,e,i,r)=>{for(var n=r>1?void 0:r?et(e,i):e,g=t.length-1,y;g>=0;g--)(y=t[g])&&(n=(r?y(e,i,n):y(n))||n);return r&&n&&tt(e,i,n),n},w=(t,e,i)=>e.has(t)||T("Cannot "+i),u=(t,e,i)=>(w(t,e,"read from private field"),i?i.call(t):e.get(t)),c=(t,e,i)=>e.has(t)?T("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),st=(t,e,i,r)=>(w(t,e,"write to private field"),e.set(t,i),i),d=(t,e,i)=>(w(t,e,"access private method"),i),f,l,A,v,b,x,_,C,k,E,P,B,F;let s=class extends q{constructor(){super(),c(this,l),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.showExtendedSupportingText=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.autocapitalize="off",this.autocorrect=!1,this.autofocus=!1,this.spellcheck=!0,this.charCounterCallback=it,c(this,f,this.charCounterCallback(this)),this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},c(this,v,t=>{const e=t.target;this.value=e.value}),c(this,b,t=>{const e=t.target;this.value=e.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),c(this,x,t=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),c(this,_,()=>{this.elTextareaAsync.then(t=>t.focus())}),c(this,C,()=>{this.value="",this.elTextareaAsync.then(t=>{if(this.resizable==="manual")t.style.height="";else if(this.resizable==="false"){const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString())}else{const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString()),t.style.height=""}}),this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}focus(t){var e;(e=this._getValidityAnchor())==null||e.focus(t)}select(){var t;(t=this._getValidityAnchor())==null||t.select()}setRangeText(...t){var e,i;(e=this._getValidityAnchor())==null||e.setRangeText(...t),this.value=((i=this._getValidityAnchor())==null?void 0:i.value)||""}setSelectionRange(...t){var e;(e=this._getValidityAnchor())==null||e.setSelectionRange(...t)}get selectionStart(){var t;return(t=this._getValidityAnchor())==null?void 0:t.selectionStart}set selectionStart(t){const e=this._getValidityAnchor();e&&(e.selectionStart=t)}get selectionEnd(){var t;return(t=this._getValidityAnchor())==null?void 0:t.selectionEnd}set selectionEnd(t){const e=this._getValidityAnchor();e&&(e.selectionEnd=t)}get selectionDirection(){var t;return(t=this._getValidityAnchor())==null?void 0:t.selectionDirection}set selectionDirection(t){const e=this._getValidityAnchor();e&&(e.selectionDirection=t)}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{var i;const t=(i=this.fieldBase)==null?void 0:i.shadowRoot;if(!t)return;const e=t.querySelector(".right");if(e){const r=e.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${r.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return h`
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
        @click=${u(this,_)}
        multiline
      >
        ${d(this,l,k).call(this)}
      </gds-field-base>

      ${S(d(this,l,A).call(this),()=>h`<gds-form-control-footer
            id="footer"
            class="size-${this.size}"
            .charCounter=${u(this,f)}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleValueChange(){st(this,f,this.charCounterCallback(this))}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(t=>{if(this.resizable==="false"){const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(t.value===""){const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString())}else{const e=getComputedStyle(t),i=parseFloat(e.lineHeight),r=t.scrollHeight,n=Math.ceil(r/i),g=this._initialRows??this._defaultRows;this.rows=Math.max(g,n),t.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(t=>{this.resizable==="false"&&t.style.setProperty("--_lines",this.rows.toString())})}};f=new WeakMap;l=new WeakSet;A=function(){return!this.plain};v=new WeakMap;b=new WeakMap;x=new WeakMap;_=new WeakMap;C=new WeakMap;k=function(){return[d(this,l,E).call(this),d(this,l,B).call(this),d(this,l,F).call(this),d(this,l,P).call(this)].map(e=>h`${e}`)};E=function(){return h`<slot slot="lead" name="lead"></slot>`};P=function(){return h`<slot slot="trail" name="trail"></slot>`};B=function(){return h`
      <textarea
        @input=${u(this,v)}
        @change=${u(this,b)}
        @paste=${u(this,x)}
        .value=${this.value}
        id="input"
        class="native-control resize-${this.resizable}"
        aria-label=${this.plain&&this.label||R}
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
    `};F=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?h`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${p(this.invalid?"negative":void 0)}"
          ?disabled="${this.disabled}"
          label="${D("Clear input")}"
          @click=${u(this,C)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
        </gds-button>
      `:R};s.styles=[V,X,j];a([G({valueTemplate:t=>t,selector:"textarea",styleTemplate:(t,e)=>`min-height: calc(1lh * ${e[0]});`})],s.prototype,"rows",2);a([o({attribute:"supporting-text"})],s.prototype,"supportingText",2);a([o({type:Boolean})],s.prototype,"clearable",2);a([o({type:String})],s.prototype,"resizable",2);a([o({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);a([o({type:Number})],s.prototype,"maxlength",2);a([o({type:String})],s.prototype,"size",2);a([o({type:Boolean})],s.prototype,"plain",2);a([o()],s.prototype,"autocapitalize",2);a([o({type:Boolean})],s.prototype,"autocorrect",2);a([o()],s.prototype,"autocomplete",2);a([o({type:Boolean})],s.prototype,"autofocus",2);a([o({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],s.prototype,"spellcheck",2);a([o()],s.prototype,"wrap",2);a([o()],s.prototype,"enterkeyhint",2);a([o()],s.prototype,"inputmode",2);a([o({attribute:!1})],s.prototype,"charCounterCallback",2);a([U("textarea")],s.prototype,"elTextareaAsync",2);a([z("textarea")],s.prototype,"elTextarea",2);a([z("gds-field-base")],s.prototype,"fieldBase",2);a([Y()],s.prototype,"_handleResize",1);a([m("value")],s.prototype,"_handleValueChange",1);a([m("value")],s.prototype,"_setAutoHeight",1);a([m("rows")],s.prototype,"_handleRowsChange",1);s=a([L()],s);let $=class extends O(H(W(s))){};$=a([N("gds-textarea",{dependsOn:[J,K,I,Q,Z]})],$);const it=t=>{var i,r;const e=(((i=t.value)==null?void 0:i.length)||0)>=t.maxlength?"negative":"positive";return[t.maxlength-(((r=t.value)==null?void 0:r.length)||0),t.maxlength<Number.MAX_SAFE_INTEGER&&e]};export{$ as G,it as c};
