import{P,K as R,O as u,N as F,a6 as g,A as _,aa as G,i as M,v as D,n as r,f as W,$ as N,y as q,Q as U,I as L,H,a0 as K,d as E,h as p,o as a,E as X,g as Y,F as Q}from"./iframe-BqBOLG1S.js";import{l as J}from"./localized-decorator-CW4WK4t9.js";import{r as Z}from"./query-async-nQcTfGhN.js";import{f as j,G as tt}from"./form-control-host.style-DIZf6vS-.js";import{G as et,a as st}from"./form-control-header.component-D6u2qRdh.js";import{G as it}from"./flex.component-DTLXrlcv.js";import{I as rt}from"./cross-small.component-DSusWtsV.js";import{c as ot}from"./textarea.component-95Bo7fuR.js";const at=P(class extends R{constructor(t){if(super(t),t.type!==u.PROPERTY&&t.type!==u.ATTRIBUTE&&t.type!==u.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!F(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===g||e===_)return e;const o=t.element,n=t.name;if(t.type===u.PROPERTY){if(e===o[n])return g}else if(t.type===u.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(n))return g}else if(t.type===u.ATTRIBUTE&&o.getAttribute(n)===e+"")return g;return G(t),e}}),nt=M`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: var(--_appearance-spin-button, auto);
  }

  input[type='number'] {
    -moz-appearance: var(--_appearance-spin-button, textfield);
  }

  input[type='file'] {
    color: inherit;
    font: var(--gds-sys-text-detail-xs-book);
  }

  input::file-selector-button {
    color: inherit;
    border: none;
    font: var(--gds-sys-text-detail-xs-book);
    padding-block: var(--gds-sys-space-3xs);
    padding-inline: var(--gds-sys-space-m);
    background-color: var(--gds-sys-color-l3-information-03);
    border-radius: var(--gds-sys-radius-max);
  }

  :host(:invalid) input::file-selector-button {
    color: var(--gds-sys-color-content-negative-01);
    background-color: var(--gds-sys-color-l3-negative-03);
  }
`;var lt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,T=t=>{throw TypeError(t)},i=(t,e,o,n)=>{for(var c=n>1?void 0:n?pt(e,o):e,m=t.length-1,b;m>=0;m--)(b=t[m])&&(c=(n?b(e,o,c):b(c))||c);return n&&c&&lt(e,o,c),c},x=(t,e,o)=>e.has(t)||T("Cannot "+o),f=(t,e,o)=>(x(t,e,"read from private field"),o?o.call(t):e.get(t)),h=(t,e,o)=>e.has(t)?T("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),ct=(t,e,o,n)=>(x(t,e,"write to private field"),e.set(t,o),o),d=(t,e,o)=>(x(t,e,"access private method"),o),y,l,S,w,C,$,v,k,B,z,I,V,O;let s=class extends K{constructor(){super(),h(this,l),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.multiple=!1,this.autocapitalize="off",this.autocorrect=!1,this.autofocus=!1,this.spellcheck=!0,this.charCounterCallback=ot,h(this,y,this.charCounterCallback(this)),h(this,w,t=>{const e=t.target;this.value=e.value}),h(this,C,t=>{const e=t.target;this.value=e.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),h(this,$,t=>{if(t.key!=="Enter"||this.disabled||t.isComposing||t.repeat)return;const e=this.form??this.closest("form");e&&queueMicrotask(()=>{t.defaultPrevented||this.disabled||e.requestSubmit()})}),h(this,v,()=>{this.elInputAsync.then(t=>t.focus())}),h(this,k,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}focus(t){this._getValidityAnchor()?.focus(t)}select(){this._getValidityAnchor()?.select()}setRangeText(...t){this._getValidityAnchor()?.setRangeText(...t),this.value=this._getValidityAnchor()?.value||""}setSelectionRange(...t){this._getValidityAnchor()?.setSelectionRange(...t)}showPicker(){this._getValidityAnchor()?.showPicker()}stepDown(t){this._getValidityAnchor()?.stepDown(t)}stepUp(t){this._getValidityAnchor()?.stepUp(t)}get selectionStart(){return this._getValidityAnchor()?.selectionStart}set selectionStart(t){const e=this._getValidityAnchor();e&&(e.selectionStart=t)}get selectionEnd(){return this._getValidityAnchor()?.selectionEnd}set selectionEnd(t){const e=this._getValidityAnchor();e&&(e.selectionEnd=t)}get selectionDirection(){return this._getValidityAnchor()?.selectionDirection}set selectionDirection(t){const e=this._getValidityAnchor();e&&(e.selectionDirection=t)}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}render(){return p`
      ${E(!this.plain,()=>p`<gds-form-control-header
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
        @click=${f(this,v)}
        id="field"
      >
        ${d(this,l,B).call(this)}
      </gds-field-base>
      ${E(d(this,l,S).call(this),()=>p` <gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .charCounter=${f(this,y)}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleValueChange(){ct(this,y,this.charCounterCallback(this))}_getValidityAnchor(){return this.elInput}};y=new WeakMap;l=new WeakSet;S=function(){return!this.plain};w=new WeakMap;C=new WeakMap;$=new WeakMap;v=new WeakMap;k=new WeakMap;B=function(){return[d(this,l,z).call(this),d(this,l,V).call(this),d(this,l,O).call(this),d(this,l,I).call(this)].map(e=>p`${e}`)};z=function(){return p` <slot slot="lead" name="lead"></slot> `};I=function(){return p`<slot slot="trail" name="trail"></slot>`};V=function(){return p`
      <input
        class="native-control"
        @input=${f(this,w)}
        @keydown=${f(this,$)}
        @change=${f(this,C)}
        .value=${at(this.value??"")}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-errormessage="message"
        aria-label=${this.plain&&this.label||_}
        placeholder=" "
        type=${this.type}
        accept=${a(this.accept)}
        min=${a(this.min)}
        max=${a(this.max)}
        step=${a(this.step)}
        autocapitalize=${a(this.autocapitalize)}
        autocomplete=${a(this.autocomplete)}
        autocorrect=${a(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${a(this.enterkeyhint)}
        inputmode=${a(this.inputmode)}
        ?multiple=${this.multiple}
        ?required=${this.required}
      />
    `};O=function(){return this.clearable&&(this.value?.length||0)>0?p`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${a(this.invalid?"negative":void 0)}"
        ?disabled="${this.disabled}"
        label="${X("Clear input")}"
        @click=${f(this,k)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-small></gds-icon-cross-small>
      </gds-button>`:_};s.styles=[D,j,nt];i([r({attribute:"supporting-text"})],s.prototype,"supportingText",2);i([r({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);i([r({type:Boolean})],s.prototype,"clearable",2);i([r({type:Number})],s.prototype,"maxlength",2);i([r({reflect:!0})],s.prototype,"size",2);i([r({type:Boolean})],s.prototype,"plain",2);i([r({reflect:!0})],s.prototype,"type",2);i([r()],s.prototype,"accept",2);i([r({type:Boolean})],s.prototype,"multiple",2);i([r()],s.prototype,"min",2);i([r()],s.prototype,"max",2);i([r()],s.prototype,"step",2);i([r()],s.prototype,"autocapitalize",2);i([r({type:Boolean})],s.prototype,"autocorrect",2);i([r()],s.prototype,"autocomplete",2);i([r({type:Boolean})],s.prototype,"autofocus",2);i([r()],s.prototype,"enterkeyhint",2);i([r({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],s.prototype,"spellcheck",2);i([r()],s.prototype,"inputmode",2);i([r({attribute:!1})],s.prototype,"charCounterCallback",2);i([Z("input")],s.prototype,"elInputAsync",2);i([W("input")],s.prototype,"elInput",2);i([N("value")],s.prototype,"_handleValueChange",1);s=i([q({labelledBy:"input",describedBy:"input",errorMessage:"input"}),J()],s);let A=class extends U(L(H(s))){};A=i([Y("gds-input",{dependsOn:[et,st,tt,it,Q,rt]})],A);export{A as G};
