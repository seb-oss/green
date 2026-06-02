import{i as M,E as V,a0 as G,n as r,f as T,a7 as m,I as O,S as H,$ as W,T as q,a8 as D,d as S,h,A as z,o as d,O as I,g as N,Q as L}from"./iframe-yTRwv3_g.js";import{l as U}from"./localized-decorator-ruIXfqxP.js";import{r as X}from"./query-async-zVDRaMDJ.js";import{f as Q,G as J}from"./form-control-host.style-BjurbchL.js";import{G as K,a as Y}from"./form-control-header.component-jhVVYn3k.js";import{r as Z}from"./resize-observer-B9k8v2TZ.js";import{I as j}from"./cross-small.component-DXPQvW7J.js";const tt=M`
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
`;var et=Object.defineProperty,st=Object.getOwnPropertyDescriptor,A=t=>{throw TypeError(t)},a=(t,e,i,o)=>{for(var n=o>1?void 0:o?st(e,i):e,g=t.length-1,y;g>=0;g--)(y=t[g])&&(n=(o?y(e,i,n):y(n))||n);return o&&n&&et(e,i,n),n},w=(t,e,i)=>e.has(t)||A("Cannot "+i),u=(t,e,i)=>(w(t,e,"read from private field"),i?i.call(t):e.get(t)),c=(t,e,i)=>e.has(t)?A("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),it=(t,e,i,o)=>(w(t,e,"write to private field"),e.set(t,i),i),p=(t,e,i)=>(w(t,e,"access private method"),i),f,l,R,v,x,b,_,C,k,E,B,P,F;let s=class extends D{constructor(){super(),c(this,l),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.showExtendedSupportingText=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.autocapitalize="off",this.autocorrect=!1,this.autofocus=!1,this.spellcheck=!0,this.charCounterCallback=at,c(this,f,this.charCounterCallback(this)),this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},c(this,v,t=>{const e=t.target;this.value=e.value}),c(this,x,t=>{const e=t.target;this.value=e.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),c(this,b,t=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),c(this,_,()=>{this.elTextareaAsync.then(t=>t.focus())}),c(this,C,()=>{this.value="",this.elTextareaAsync.then(t=>{if(this.resizable==="manual")t.style.height="";else if(this.resizable==="false"){const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString())}else{const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString()),t.style.height=""}}),this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}focus(t){var e;(e=this._getValidityAnchor())==null||e.focus(t)}select(){var t;(t=this._getValidityAnchor())==null||t.select()}setRangeText(...t){var e,i;(e=this._getValidityAnchor())==null||e.setRangeText(...t),this.value=((i=this._getValidityAnchor())==null?void 0:i.value)||""}setSelectionRange(...t){var e;(e=this._getValidityAnchor())==null||e.setSelectionRange(...t)}get selectionStart(){var t;return(t=this._getValidityAnchor())==null?void 0:t.selectionStart}set selectionStart(t){const e=this._getValidityAnchor();e&&(e.selectionStart=t)}get selectionEnd(){var t;return(t=this._getValidityAnchor())==null?void 0:t.selectionEnd}set selectionEnd(t){const e=this._getValidityAnchor();e&&(e.selectionEnd=t)}get selectionDirection(){var t;return(t=this._getValidityAnchor())==null?void 0:t.selectionDirection}set selectionDirection(t){const e=this._getValidityAnchor();e&&(e.selectionDirection=t)}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{var i;const t=(i=this.fieldBase)==null?void 0:i.shadowRoot;if(!t)return;const e=t.querySelector(".right");if(e){const o=e.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${o.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return h`
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
        ${p(this,l,k).call(this)}
      </gds-field-base>

      ${S(p(this,l,R).call(this),()=>h`<gds-form-control-footer
            id="footer"
            class="size-${this.size}"
            .charCounter=${u(this,f)}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleValueChange(){it(this,f,this.charCounterCallback(this))}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(t=>{if(this.resizable==="false"){const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(t.value===""){const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString())}else{const e=getComputedStyle(t),i=parseFloat(e.lineHeight),o=t.scrollHeight,n=Math.ceil(o/i),g=this._initialRows??this._defaultRows;this.rows=Math.max(g,n),t.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(t=>{this.resizable==="false"&&t.style.setProperty("--_lines",this.rows.toString())})}};f=new WeakMap;l=new WeakSet;R=function(){return!this.plain};v=new WeakMap;x=new WeakMap;b=new WeakMap;_=new WeakMap;C=new WeakMap;k=function(){return[p(this,l,E).call(this),p(this,l,P).call(this),p(this,l,F).call(this),p(this,l,B).call(this)].map(e=>h`${e}`)};E=function(){return h`<slot slot="lead" name="lead"></slot>`};B=function(){return h`<slot slot="trail" name="trail"></slot>`};P=function(){return h`
      <textarea
        @input=${u(this,v)}
        @change=${u(this,x)}
        @paste=${u(this,b)}
        .value=${this.value}
        id="input"
        class="native-control resize-${this.resizable}"
        aria-label=${this.plain&&this.label||z}
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
          label="${I("Clear input")}"
          @click=${u(this,C)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
        </gds-button>
      `:z};s.styles=[V,Q,tt];a([G({valueTemplate:t=>t,selector:"textarea",styleTemplate:(t,e)=>`min-height: calc(1lh * ${e[0]});`})],s.prototype,"rows",2);a([r({attribute:"supporting-text"})],s.prototype,"supportingText",2);a([r({type:Boolean})],s.prototype,"clearable",2);a([r({type:String})],s.prototype,"resizable",2);a([r({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);a([r({type:Number})],s.prototype,"maxlength",2);a([r({type:String})],s.prototype,"size",2);a([r({type:Boolean})],s.prototype,"plain",2);a([r()],s.prototype,"autocapitalize",2);a([r({type:Boolean})],s.prototype,"autocorrect",2);a([r()],s.prototype,"autocomplete",2);a([r({type:Boolean})],s.prototype,"autofocus",2);a([r({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],s.prototype,"spellcheck",2);a([r()],s.prototype,"wrap",2);a([r()],s.prototype,"enterkeyhint",2);a([r()],s.prototype,"inputmode",2);a([r({attribute:!1})],s.prototype,"charCounterCallback",2);a([X("textarea")],s.prototype,"elTextareaAsync",2);a([T("textarea")],s.prototype,"elTextarea",2);a([T("gds-field-base")],s.prototype,"fieldBase",2);a([Z()],s.prototype,"_handleResize",1);a([m("value")],s.prototype,"_handleValueChange",1);a([m("value")],s.prototype,"_setAutoHeight",1);a([m("rows")],s.prototype,"_handleRowsChange",1);s=a([O({labelledBy:"textarea",describedBy:"textarea",errorMessage:"textarea"}),U()],s);let $=class extends H(W(q(s))){};$=a([N("gds-textarea",{dependsOn:[K,Y,L,J,j]})],$);const at=t=>{var i,o;const e=(((i=t.value)==null?void 0:i.length)||0)>=t.maxlength?"negative":"positive";return[t.maxlength-(((o=t.value)==null?void 0:o.length)||0),t.maxlength<Number.MAX_SAFE_INTEGER&&e]};export{$ as G,at as c};
