import{P,K as R,O as u,N as F,a6 as g,A as v,aa as G,i as M,v as D,n as a,f as W,$ as N,y as q,Q as U,I as L,H,a0 as K,d as A,h as p,o as n,E as X,g as Y,F as Q}from"./iframe-DeZzR3Q-.js";import{l as J}from"./localized-decorator-lx2IguJu.js";import{r as Z}from"./query-async-CAMmB_0x.js";import{f as j,G as tt}from"./form-control-host.style-D9EX82XG.js";import{G as et,a as st}from"./form-control-header.component-DGljUBga.js";import{G as it}from"./flex.component-BaqhG-ob.js";import{I as rt}from"./cross-small.component-CPlXTPcl.js";import{c as at}from"./textarea.component-Bd_71NOH.js";const ot=P(class extends R{constructor(t){if(super(t),t.type!==u.PROPERTY&&t.type!==u.ATTRIBUTE&&t.type!==u.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!F(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===g||e===v)return e;const r=t.element,o=t.name;if(t.type===u.PROPERTY){if(e===r[o])return g}else if(t.type===u.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(o))return g}else if(t.type===u.ATTRIBUTE&&r.getAttribute(o)===e+"")return g;return G(t),e}}),nt=M`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: var(--_appearance-spin-button, auto);
  }

  input[type='number'] {
    -moz-appearance: var(--_appearance-spin-button, textfield);
  }
`;var lt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,T=t=>{throw TypeError(t)},i=(t,e,r,o)=>{for(var h=o>1?void 0:o?pt(e,r):e,m=t.length-1,b;m>=0;m--)(b=t[m])&&(h=(o?b(e,r,h):b(h))||h);return o&&h&&lt(e,r,h),h},x=(t,e,r)=>e.has(t)||T("Cannot "+r),f=(t,e,r)=>(x(t,e,"read from private field"),r?r.call(t):e.get(t)),c=(t,e,r)=>e.has(t)?T("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),ht=(t,e,r,o)=>(x(t,e,"write to private field"),e.set(t,r),r),d=(t,e,r)=>(x(t,e,"access private method"),r),y,l,S,w,C,$,_,E,B,z,I,V,O;let s=class extends K{constructor(){super(),c(this,l),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.autocapitalize="off",this.autocorrect=!1,this.autofocus=!1,this.spellcheck=!0,this.charCounterCallback=at,c(this,y,this.charCounterCallback(this)),c(this,w,t=>{const e=t.target;this.value=e.value}),c(this,C,t=>{const e=t.target;this.value=e.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),c(this,$,t=>{if(t.key!=="Enter"||this.disabled||t.isComposing||t.repeat)return;const e=this.form??this.closest("form");e&&queueMicrotask(()=>{t.defaultPrevented||this.disabled||e.requestSubmit()})}),c(this,_,()=>{this.elInputAsync.then(t=>t.focus())}),c(this,E,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}focus(t){this._getValidityAnchor()?.focus(t)}select(){this._getValidityAnchor()?.select()}setRangeText(...t){this._getValidityAnchor()?.setRangeText(...t),this.value=this._getValidityAnchor()?.value||""}setSelectionRange(...t){this._getValidityAnchor()?.setSelectionRange(...t)}showPicker(){this._getValidityAnchor()?.showPicker()}stepDown(t){this._getValidityAnchor()?.stepDown(t)}stepUp(t){this._getValidityAnchor()?.stepUp(t)}get selectionStart(){return this._getValidityAnchor()?.selectionStart}set selectionStart(t){const e=this._getValidityAnchor();e&&(e.selectionStart=t)}get selectionEnd(){return this._getValidityAnchor()?.selectionEnd}set selectionEnd(t){const e=this._getValidityAnchor();e&&(e.selectionEnd=t)}get selectionDirection(){return this._getValidityAnchor()?.selectionDirection}set selectionDirection(t){const e=this._getValidityAnchor();e&&(e.selectionDirection=t)}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}render(){return p`
      ${A(!this.plain,()=>p`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText=${this.showExtendedSupportingText}
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
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${f(this,_)}
        id="field"
      >
        ${d(this,l,B).call(this)}
      </gds-field-base>
      ${A(d(this,l,S).call(this),()=>p` <gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .charCounter=${f(this,y)}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleValueChange(){ht(this,y,this.charCounterCallback(this))}_getValidityAnchor(){return this.elInput}};y=new WeakMap;l=new WeakSet;S=function(){return!this.plain};w=new WeakMap;C=new WeakMap;$=new WeakMap;_=new WeakMap;E=new WeakMap;B=function(){return[d(this,l,z).call(this),d(this,l,V).call(this),d(this,l,O).call(this),d(this,l,I).call(this)].map(e=>p`${e}`)};z=function(){return p` <slot slot="lead" name="lead"></slot> `};I=function(){return p`<slot slot="trail" name="trail"></slot>`};V=function(){return p`
      <input
        class="native-control"
        @input=${f(this,w)}
        @keydown=${f(this,$)}
        @change=${f(this,C)}
        .value=${ot(this.value)}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-errormessage="message"
        aria-label=${this.plain&&this.label||v}
        placeholder=" "
        type=${this.type}
        min=${n(this.min)}
        max=${n(this.max)}
        step=${n(this.step)}
        autocapitalize=${n(this.autocapitalize)}
        autocomplete=${n(this.autocomplete)}
        autocorrect=${n(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${n(this.enterkeyhint)}
        inputmode=${n(this.inputmode)}
        ?required=${this.required}
      />
    `};O=function(){return this.clearable&&(this.value?.length||0)>0?p`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${n(this.invalid?"negative":void 0)}"
        ?disabled="${this.disabled}"
        label="${X("Clear input")}"
        @click=${f(this,E)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-small></gds-icon-cross-small>
      </gds-button>`:v};s.styles=[D,j,nt];i([a({attribute:"supporting-text"})],s.prototype,"supportingText",2);i([a({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);i([a({type:Boolean})],s.prototype,"clearable",2);i([a({type:Number})],s.prototype,"maxlength",2);i([a({reflect:!0})],s.prototype,"size",2);i([a({type:Boolean})],s.prototype,"plain",2);i([a({reflect:!0})],s.prototype,"type",2);i([a()],s.prototype,"min",2);i([a()],s.prototype,"max",2);i([a()],s.prototype,"step",2);i([a()],s.prototype,"autocapitalize",2);i([a({type:Boolean})],s.prototype,"autocorrect",2);i([a()],s.prototype,"autocomplete",2);i([a({type:Boolean})],s.prototype,"autofocus",2);i([a()],s.prototype,"enterkeyhint",2);i([a({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],s.prototype,"spellcheck",2);i([a()],s.prototype,"inputmode",2);i([a({attribute:!1})],s.prototype,"charCounterCallback",2);i([Z("input")],s.prototype,"elInputAsync",2);i([W("input")],s.prototype,"elInput",2);i([N("value")],s.prototype,"_handleValueChange",1);s=i([q({labelledBy:"input",describedBy:"input",errorMessage:"input"}),J()],s);let k=class extends U(L(H(s))){};k=i([Y("gds-input",{dependsOn:[et,st,tt,it,Q,rt]})],k);export{k as G};
