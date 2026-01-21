import{i as I,t as B,n as o,d as F,a8 as M,a0 as P,S as T,Q as D,a9 as O,b as C,h as l,E as w,o as r,O as R,g as W,P as q}from"./iframe-BKxXo2qK.js";import{l as N}from"./localized-decorator-CDZGgK4X.js";import{r as H}from"./query-async-4SKqjzJS.js";import{f as L,G as U}from"./form-control-host.style-BvDJrwPF.js";import{G as X,a as Q}from"./form-control-header.component-BPXKGLro.js";import{G as J}from"./flex.component-BmTGdA7s.js";import{I as K}from"./cross-small.component-gGlsemlT.js";import{c as Y}from"./textarea.component-Vqk0sFV0.js";const Z=I`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: var(--_appearance-spin-button, auto);
  }

  input[type='number'] {
    -moz-appearance: var(--_appearance-spin-button, textfield);
  }
`;var j=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,k=t=>{throw TypeError(t)},i=(t,e,a,u)=>{for(var p=u>1?void 0:u?tt(e,a):e,f=t.length-1,m;f>=0;f--)(m=t[f])&&(p=(u?m(e,a,p):m(p))||p);return u&&p&&j(e,a,p),p},_=(t,e,a)=>e.has(t)||k("Cannot "+a),d=(t,e,a)=>(_(t,e,"read from private field"),a?a.call(t):e.get(t)),h=(t,e,a)=>e.has(t)?k("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),et=(t,e,a,u)=>(_(t,e,"write to private field"),e.set(t,a),a),c=(t,e,a)=>(_(t,e,"access private method"),a),g,n,S,b,v,y,$,A,E,z,V,G;let s=class extends O{constructor(){super(),h(this,n),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.autocapitalize="off",this.autocorrect=!1,this.autofocus=!1,this.spellcheck=!0,this.charCounterCallback=Y,h(this,g,this.charCounterCallback(this)),h(this,b,t=>{const e=t.target;this.value=e.value}),h(this,v,t=>{const e=t.target;this.value=e.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),h(this,y,()=>{this.elInputAsync.then(t=>t.focus())}),h(this,$,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}focus(t){var e;(e=this._getValidityAnchor())==null||e.focus(t)}select(){var t;(t=this._getValidityAnchor())==null||t.select()}setRangeText(...t){var e,a;(e=this._getValidityAnchor())==null||e.setRangeText(...t),this.value=((a=this._getValidityAnchor())==null?void 0:a.value)||""}setSelectionRange(...t){var e;(e=this._getValidityAnchor())==null||e.setSelectionRange(...t)}showPicker(){var t;(t=this._getValidityAnchor())==null||t.showPicker()}stepDown(t){var e;(e=this._getValidityAnchor())==null||e.stepDown(t)}stepUp(t){var e;(e=this._getValidityAnchor())==null||e.stepUp(t)}get selectionStart(){var t;return(t=this._getValidityAnchor())==null?void 0:t.selectionStart}set selectionStart(t){const e=this._getValidityAnchor();e&&(e.selectionStart=t)}get selectionEnd(){var t;return(t=this._getValidityAnchor())==null?void 0:t.selectionEnd}set selectionEnd(t){const e=this._getValidityAnchor();e&&(e.selectionEnd=t)}get selectionDirection(){var t;return(t=this._getValidityAnchor())==null?void 0:t.selectionDirection}set selectionDirection(t){const e=this._getValidityAnchor();e&&(e.selectionDirection=t)}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}render(){return l`
      ${C(!this.plain,()=>l`<gds-form-control-header class="size-${this.size}">
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
        @click=${d(this,y)}
        id="field"
      >
        ${c(this,n,A).call(this)}
      </gds-field-base>
      ${C(c(this,n,S).call(this),()=>l` <gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .charCounter=${d(this,g)}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleValueChange(){et(this,g,this.charCounterCallback(this))}_getValidityAnchor(){return this.elInput}};g=new WeakMap;n=new WeakSet;S=function(){return!this.plain};b=new WeakMap;v=new WeakMap;y=new WeakMap;$=new WeakMap;A=function(){return[c(this,n,E).call(this),c(this,n,V).call(this),c(this,n,G).call(this),c(this,n,z).call(this)].map(e=>l`${e}`)};E=function(){return l` <slot slot="lead" name="lead"></slot> `};z=function(){return l`<slot slot="trail" name="trail"></slot>`};V=function(){return l`
      <input
        class="native-control"
        @input=${d(this,b)}
        @change=${d(this,v)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-errormessage="message"
        aria-label=${this.plain&&this.label||w}
        placeholder=" "
        type=${this.type}
        min=${r(this.min)}
        max=${r(this.max)}
        step=${r(this.step)}
        autocapitalize=${r(this.autocapitalize)}
        autocomplete=${r(this.autocomplete)}
        autocorrect=${r(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${r(this.enterkeyhint)}
        inputmode=${r(this.inputmode)}
        ?required=${this.required}
      />
    `};G=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?l`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${r(this.invalid?"negative":void 0)}"
        ?disabled="${this.disabled}"
        label="${R("Clear input")}"
        @click=${d(this,$)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-small></gds-icon-cross-small>
      </gds-button>`:w};s.styles=[B,L,Z];i([o({attribute:"supporting-text"})],s.prototype,"supportingText",2);i([o({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);i([o({type:Boolean})],s.prototype,"clearable",2);i([o({type:Number})],s.prototype,"maxlength",2);i([o({reflect:!0})],s.prototype,"size",2);i([o({type:Boolean})],s.prototype,"plain",2);i([o({reflect:!0})],s.prototype,"type",2);i([o()],s.prototype,"min",2);i([o()],s.prototype,"max",2);i([o()],s.prototype,"step",2);i([o()],s.prototype,"autocapitalize",2);i([o({type:Boolean})],s.prototype,"autocorrect",2);i([o()],s.prototype,"autocomplete",2);i([o({type:Boolean})],s.prototype,"autofocus",2);i([o()],s.prototype,"enterkeyhint",2);i([o({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],s.prototype,"spellcheck",2);i([o()],s.prototype,"inputmode",2);i([o({attribute:!1})],s.prototype,"charCounterCallback",2);i([H("input")],s.prototype,"elInputAsync",2);i([F("input")],s.prototype,"elInput",2);i([M("value")],s.prototype,"_handleValueChange",1);s=i([N()],s);let x=class extends P(T(D(s))){};x=i([W("gds-input",{dependsOn:[X,Q,U,J,q,K]})],x);export{x as G};
