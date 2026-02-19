import{i as M,t as B,n as r,d as F,a8 as P,a0 as D,S as T,Q as O,a9 as W,b as x,h as l,E as w,o,O as R,g as q,P as N}from"./iframe-BpRfpQgc.js";import{l as H}from"./localized-decorator--nY8YBZB.js";import{r as L}from"./query-async-CTwhLTVP.js";import{f as U,G as X}from"./form-control-host.style-Brhdp7hL.js";import{G as K,a as Q}from"./form-control-header.component-BPHJ-rxu.js";import{G as J}from"./flex.component-C8ubOOy0.js";import{I as Y}from"./cross-small.component-33K4dLZB.js";import{c as Z}from"./textarea.component-CKaNg5LI.js";const j=M`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: var(--_appearance-spin-button, auto);
  }

  input[type='number'] {
    -moz-appearance: var(--_appearance-spin-button, textfield);
  }
`;var tt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,S=t=>{throw TypeError(t)},i=(t,e,a,d)=>{for(var p=d>1?void 0:d?et(e,a):e,g=t.length-1,m;g>=0;g--)(m=t[g])&&(p=(d?m(e,a,p):m(p))||p);return d&&p&&tt(e,a,p),p},_=(t,e,a)=>e.has(t)||S("Cannot "+a),u=(t,e,a)=>(_(t,e,"read from private field"),a?a.call(t):e.get(t)),h=(t,e,a)=>e.has(t)?S("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),st=(t,e,a,d)=>(_(t,e,"write to private field"),e.set(t,a),a),c=(t,e,a)=>(_(t,e,"access private method"),a),f,n,A,b,v,$,y,C,E,z,V,G,I;let s=class extends W{constructor(){super(),h(this,n),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.autocapitalize="off",this.autocorrect=!1,this.autofocus=!1,this.spellcheck=!0,this.charCounterCallback=Z,h(this,f,this.charCounterCallback(this)),h(this,b,t=>{const e=t.target;this.value=e.value}),h(this,v,t=>{const e=t.target;this.value=e.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),h(this,$,t=>{if(t.key!=="Enter"||this.disabled||t.isComposing||t.repeat)return;const e=this.form??this.closest("form");e&&queueMicrotask(()=>{t.defaultPrevented||this.disabled||e.requestSubmit()})}),h(this,y,()=>{this.elInputAsync.then(t=>t.focus())}),h(this,C,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}focus(t){var e;(e=this._getValidityAnchor())==null||e.focus(t)}select(){var t;(t=this._getValidityAnchor())==null||t.select()}setRangeText(...t){var e,a;(e=this._getValidityAnchor())==null||e.setRangeText(...t),this.value=((a=this._getValidityAnchor())==null?void 0:a.value)||""}setSelectionRange(...t){var e;(e=this._getValidityAnchor())==null||e.setSelectionRange(...t)}showPicker(){var t;(t=this._getValidityAnchor())==null||t.showPicker()}stepDown(t){var e;(e=this._getValidityAnchor())==null||e.stepDown(t)}stepUp(t){var e;(e=this._getValidityAnchor())==null||e.stepUp(t)}get selectionStart(){var t;return(t=this._getValidityAnchor())==null?void 0:t.selectionStart}set selectionStart(t){const e=this._getValidityAnchor();e&&(e.selectionStart=t)}get selectionEnd(){var t;return(t=this._getValidityAnchor())==null?void 0:t.selectionEnd}set selectionEnd(t){const e=this._getValidityAnchor();e&&(e.selectionEnd=t)}get selectionDirection(){var t;return(t=this._getValidityAnchor())==null?void 0:t.selectionDirection}set selectionDirection(t){const e=this._getValidityAnchor();e&&(e.selectionDirection=t)}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}render(){return l`
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
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${u(this,y)}
        id="field"
      >
        ${c(this,n,E).call(this)}
      </gds-field-base>
      ${x(c(this,n,A).call(this),()=>l` <gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .charCounter=${u(this,f)}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleValueChange(){st(this,f,this.charCounterCallback(this))}_getValidityAnchor(){return this.elInput}};f=new WeakMap;n=new WeakSet;A=function(){return!this.plain};b=new WeakMap;v=new WeakMap;$=new WeakMap;y=new WeakMap;C=new WeakMap;E=function(){return[c(this,n,z).call(this),c(this,n,G).call(this),c(this,n,I).call(this),c(this,n,V).call(this)].map(e=>l`${e}`)};z=function(){return l` <slot slot="lead" name="lead"></slot> `};V=function(){return l`<slot slot="trail" name="trail"></slot>`};G=function(){return l`
      <input
        class="native-control"
        @input=${u(this,b)}
        @keydown=${u(this,$)}
        @change=${u(this,v)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-errormessage="message"
        aria-label=${this.plain&&this.label||w}
        placeholder=" "
        type=${this.type}
        min=${o(this.min)}
        max=${o(this.max)}
        step=${o(this.step)}
        autocapitalize=${o(this.autocapitalize)}
        autocomplete=${o(this.autocomplete)}
        autocorrect=${o(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${o(this.enterkeyhint)}
        inputmode=${o(this.inputmode)}
        ?required=${this.required}
      />
    `};I=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?l`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${o(this.invalid?"negative":void 0)}"
        ?disabled="${this.disabled}"
        label="${R("Clear input")}"
        @click=${u(this,C)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-small></gds-icon-cross-small>
      </gds-button>`:w};s.styles=[B,U,j];i([r({attribute:"supporting-text"})],s.prototype,"supportingText",2);i([r({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);i([r({type:Boolean})],s.prototype,"clearable",2);i([r({type:Number})],s.prototype,"maxlength",2);i([r({reflect:!0})],s.prototype,"size",2);i([r({type:Boolean})],s.prototype,"plain",2);i([r({reflect:!0})],s.prototype,"type",2);i([r()],s.prototype,"min",2);i([r()],s.prototype,"max",2);i([r()],s.prototype,"step",2);i([r()],s.prototype,"autocapitalize",2);i([r({type:Boolean})],s.prototype,"autocorrect",2);i([r()],s.prototype,"autocomplete",2);i([r({type:Boolean})],s.prototype,"autofocus",2);i([r()],s.prototype,"enterkeyhint",2);i([r({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],s.prototype,"spellcheck",2);i([r()],s.prototype,"inputmode",2);i([r({attribute:!1})],s.prototype,"charCounterCallback",2);i([L("input")],s.prototype,"elInputAsync",2);i([F("input")],s.prototype,"elInput",2);i([P("value")],s.prototype,"_handleValueChange",1);s=i([H()],s);let k=class extends D(T(O(s))){};k=i([q("gds-input",{dependsOn:[K,Q,X,J,N,Y]})],k);export{k as G};
