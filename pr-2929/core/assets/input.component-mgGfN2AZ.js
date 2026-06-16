import{P,K as R,O as u,N as F,a6 as g,A as _,aa as G,i as M,v as D,n as r,f as W,$ as N,y as q,Q as U,I as L,H,a0 as K,d as k,h as p,o as a,E as X,g as Y,F as Q}from"./iframe-CUpmeMNK.js";import{l as J}from"./localized-decorator-OBEwFB1M.js";import{r as Z}from"./query-async-6aPP5wPP.js";import{f as j,G as tt}from"./form-control-host.style-k_eQw-AP.js";import{G as et,a as it}from"./form-control-header.component-vk5B08Hr.js";import{G as st}from"./flex.component-BIdx6581.js";import{I as rt}from"./cross-small.component-DigsjyjM.js";import{c as ot}from"./textarea.component-D8J8BPQx.js";const at=P(class extends R{constructor(t){if(super(t),t.type!==u.PROPERTY&&t.type!==u.ATTRIBUTE&&t.type!==u.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!F(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===g||e===_)return e;const o=t.element,n=t.name;if(t.type===u.PROPERTY){if(e===o[n])return g}else if(t.type===u.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(n))return g}else if(t.type===u.ATTRIBUTE&&o.getAttribute(n)===e+"")return g;return G(t),e}}),nt=M`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: var(--_appearance-spin-button, auto);
  }

  input[type='number'] {
    -moz-appearance: var(--_appearance-spin-button, textfield);
  }

  input[type='file'] {
    display: flex;
    width: 100%;
    max-width: 100%;
    font-size: 12px;
    font-family: inherit;
    line-height: 1;
    gap: 8px;
  }

  input::file-selector-button {
    font-weight: 450;
    font-size: 12px;
    color: inherit;
    padding: 6px 12px;
    color: var(--gds-sys-color-content-neutral-01);
    background-color: var(--gds-sys-color-l3-information-03);
    border: none;
    border-radius: 200px;
  }
`;var lt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,T=t=>{throw TypeError(t)},s=(t,e,o,n)=>{for(var h=n>1?void 0:n?pt(e,o):e,m=t.length-1,b;m>=0;m--)(b=t[m])&&(h=(n?b(e,o,h):b(h))||h);return n&&h&&lt(e,o,h),h},x=(t,e,o)=>e.has(t)||T("Cannot "+o),f=(t,e,o)=>(x(t,e,"read from private field"),o?o.call(t):e.get(t)),c=(t,e,o)=>e.has(t)?T("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),ht=(t,e,o,n)=>(x(t,e,"write to private field"),e.set(t,o),o),d=(t,e,o)=>(x(t,e,"access private method"),o),y,l,S,w,C,$,v,E,B,z,I,V,O;let i=class extends K{constructor(){super(),c(this,l),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.multiple=!1,this.autocapitalize="off",this.autocorrect=!1,this.autofocus=!1,this.spellcheck=!0,this.charCounterCallback=ot,c(this,y,this.charCounterCallback(this)),c(this,w,t=>{const e=t.target;this.value=e.value}),c(this,C,t=>{const e=t.target;this.value=e.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),c(this,$,t=>{if(t.key!=="Enter"||this.disabled||t.isComposing||t.repeat)return;const e=this.form??this.closest("form");e&&queueMicrotask(()=>{t.defaultPrevented||this.disabled||e.requestSubmit()})}),c(this,v,()=>{this.elInputAsync.then(t=>t.focus())}),c(this,E,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}focus(t){this._getValidityAnchor()?.focus(t)}select(){this._getValidityAnchor()?.select()}setRangeText(...t){this._getValidityAnchor()?.setRangeText(...t),this.value=this._getValidityAnchor()?.value||""}setSelectionRange(...t){this._getValidityAnchor()?.setSelectionRange(...t)}showPicker(){this._getValidityAnchor()?.showPicker()}stepDown(t){this._getValidityAnchor()?.stepDown(t)}stepUp(t){this._getValidityAnchor()?.stepUp(t)}get selectionStart(){return this._getValidityAnchor()?.selectionStart}set selectionStart(t){const e=this._getValidityAnchor();e&&(e.selectionStart=t)}get selectionEnd(){return this._getValidityAnchor()?.selectionEnd}set selectionEnd(t){const e=this._getValidityAnchor();e&&(e.selectionEnd=t)}get selectionDirection(){return this._getValidityAnchor()?.selectionDirection}set selectionDirection(t){const e=this._getValidityAnchor();e&&(e.selectionDirection=t)}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}render(){return p`
      ${k(!this.plain,()=>p`<gds-form-control-header
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
      ${k(d(this,l,S).call(this),()=>p` <gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .charCounter=${f(this,y)}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleValueChange(){ht(this,y,this.charCounterCallback(this))}_getValidityAnchor(){return this.elInput}};y=new WeakMap;l=new WeakSet;S=function(){return!this.plain};w=new WeakMap;C=new WeakMap;$=new WeakMap;v=new WeakMap;E=new WeakMap;B=function(){return[d(this,l,z).call(this),d(this,l,V).call(this),d(this,l,O).call(this),d(this,l,I).call(this)].map(e=>p`${e}`)};z=function(){return p` <slot slot="lead" name="lead"></slot> `};I=function(){return p`<slot slot="trail" name="trail"></slot>`};V=function(){return p`
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
        @click=${f(this,E)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-small></gds-icon-cross-small>
      </gds-button>`:_};i.styles=[D,j,nt];s([r({attribute:"supporting-text"})],i.prototype,"supportingText",2);s([r({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);s([r({type:Boolean})],i.prototype,"clearable",2);s([r({type:Number})],i.prototype,"maxlength",2);s([r({reflect:!0})],i.prototype,"size",2);s([r({type:Boolean})],i.prototype,"plain",2);s([r({reflect:!0})],i.prototype,"type",2);s([r()],i.prototype,"accept",2);s([r({type:Boolean})],i.prototype,"multiple",2);s([r()],i.prototype,"min",2);s([r()],i.prototype,"max",2);s([r()],i.prototype,"step",2);s([r()],i.prototype,"autocapitalize",2);s([r({type:Boolean})],i.prototype,"autocorrect",2);s([r()],i.prototype,"autocomplete",2);s([r({type:Boolean})],i.prototype,"autofocus",2);s([r()],i.prototype,"enterkeyhint",2);s([r({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],i.prototype,"spellcheck",2);s([r()],i.prototype,"inputmode",2);s([r({attribute:!1})],i.prototype,"charCounterCallback",2);s([Z("input")],i.prototype,"elInputAsync",2);s([W("input")],i.prototype,"elInput",2);s([N("value")],i.prototype,"_handleValueChange",1);i=s([q({labelledBy:"input",describedBy:"input",errorMessage:"input"}),J()],i);let A=class extends U(L(H(i))){};A=s([Y("gds-input",{dependsOn:[et,it,tt,st,Q,rt]})],A);export{A as G};
