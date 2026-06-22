import{P as R,K as G,O as f,N as D,a6 as y,A as w,aa as N,i as W,v as q,n as r,f as U,$ as L,y as H,Q as K,I as X,H as Y,a0 as Q,d as S,h,o as a,E as J,g as Z,F as j}from"./iframe-c0lJwxcK.js";import{l as tt}from"./localized-decorator-BvLFbsUv.js";import{r as et}from"./query-async-B19tm3g_.js";import{f as st,G as it}from"./form-control-host.style-Bgf6qDLT.js";import{G as rt,a as ot}from"./form-control-header.component-YSto-Ent.js";import{G as at}from"./flex.component-ClU-nez5.js";import{I as nt}from"./cross-small.component-CmRBPOWe.js";import{c as lt}from"./textarea.component-Dq0MVSRk.js";const pt=R(class extends G{constructor(t){if(super(t),t.type!==f.PROPERTY&&t.type!==f.ATTRIBUTE&&t.type!==f.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!D(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===y||e===w)return e;const o=t.element,l=t.name;if(t.type===f.PROPERTY){if(e===o[l])return y}else if(t.type===f.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(l))return y}else if(t.type===f.ATTRIBUTE&&o.getAttribute(l)===e+"")return y;return N(t),e}}),ct=W`
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
`;var ht=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,B=t=>{throw TypeError(t)},i=(t,e,o,l)=>{for(var u=l>1?void 0:l?ut(e,o):e,v=t.length-1,b;v>=0;v--)(b=t[v])&&(u=(l?b(e,o,u):b(u))||u);return l&&u&&ht(e,o,u),u},C=(t,e,o)=>e.has(t)||B("Cannot "+o),d=(t,e,o)=>(C(t,e,"read from private field"),o?o.call(t):e.get(t)),p=(t,e,o)=>e.has(t)?B("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),_=(t,e,o,l)=>(C(t,e,"write to private field"),e.set(t,o),o),c=(t,e,o)=>(C(t,e,"access private method"),o),m,g,n,P,$,E,A,x,k,T,z,O,V,F,M;let s=class extends Q{constructor(){super(),p(this,n),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.multiple=!1,this.autocapitalize="off",this.autocorrect=!1,this.autofocus=!1,this.spellcheck=!0,this.charCounterCallback=lt,p(this,m,this.charCounterCallback(this)),p(this,g,!1),p(this,$,t=>{const e=t.target;this.value=e.value}),p(this,E,t=>{const e=t.target;this.value=e.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),p(this,A,t=>{if(t.key!=="Enter"||this.disabled||t.isComposing||t.repeat)return;if(this.type==="file"){t.preventDefault(),c(this,n,k).call(this);return}const e=this.form??this.closest("form");e&&queueMicrotask(()=>{t.defaultPrevented||this.disabled||e.requestSubmit()})}),p(this,x,t=>{if(this.type==="file"){t.composedPath().includes(this.elInput)||c(this,n,k).call(this);return}this.elInput.focus()}),p(this,T,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}focus(t){this._getValidityAnchor()?.focus(t)}select(){this._getValidityAnchor()?.select()}setRangeText(...t){this._getValidityAnchor()?.setRangeText(...t),this.value=this._getValidityAnchor()?.value||""}setSelectionRange(...t){this._getValidityAnchor()?.setSelectionRange(...t)}showPicker(){this._getValidityAnchor()?.showPicker()}stepDown(t){this._getValidityAnchor()?.stepDown(t)}stepUp(t){this._getValidityAnchor()?.stepUp(t)}get selectionStart(){return this._getValidityAnchor()?.selectionStart}set selectionStart(t){const e=this._getValidityAnchor();e&&(e.selectionStart=t)}get selectionEnd(){return this._getValidityAnchor()?.selectionEnd}set selectionEnd(t){const e=this._getValidityAnchor();e&&(e.selectionEnd=t)}get selectionDirection(){return this._getValidityAnchor()?.selectionDirection}set selectionDirection(t){const e=this._getValidityAnchor();e&&(e.selectionDirection=t)}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}render(){return h`
      ${S(!this.plain,()=>h`<gds-form-control-header
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
        @click=${d(this,x)}
        id="field"
      >
        ${c(this,n,z).call(this)}
      </gds-field-base>
      ${S(c(this,n,P).call(this),()=>h` <gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .charCounter=${d(this,m)}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleValueChange(){_(this,m,this.charCounterCallback(this))}_getValidityAnchor(){return this.elInput}};m=new WeakMap;g=new WeakMap;n=new WeakSet;P=function(){return!this.plain};$=new WeakMap;E=new WeakMap;A=new WeakMap;x=new WeakMap;k=function(){d(this,g)||(_(this,g,!0),this.elInput.click(),queueMicrotask(()=>{_(this,g,!1)}))};T=new WeakMap;z=function(){return[c(this,n,O).call(this),c(this,n,F).call(this),c(this,n,M).call(this),c(this,n,V).call(this)].map(e=>h`${e}`)};O=function(){return h` <slot slot="lead" name="lead"></slot> `};V=function(){return h`<slot slot="trail" name="trail"></slot>`};F=function(){return h`
      <input
        class="native-control"
        @input=${d(this,$)}
        @keydown=${d(this,A)}
        @change=${d(this,E)}
        .value=${pt(this.value??"")}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-errormessage="message"
        aria-label=${this.plain&&this.label||w}
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
    `};M=function(){return this.clearable&&(this.value?.length||0)>0?h`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${a(this.invalid?"negative":void 0)}"
        ?disabled="${this.disabled}"
        label="${J("Clear input")}"
        @click=${d(this,T)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-small></gds-icon-cross-small>
      </gds-button>`:w};s.styles=[q,st,ct];i([r({attribute:"supporting-text"})],s.prototype,"supportingText",2);i([r({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);i([r({type:Boolean})],s.prototype,"clearable",2);i([r({type:Number})],s.prototype,"maxlength",2);i([r({reflect:!0})],s.prototype,"size",2);i([r({type:Boolean})],s.prototype,"plain",2);i([r({reflect:!0})],s.prototype,"type",2);i([r()],s.prototype,"accept",2);i([r({type:Boolean})],s.prototype,"multiple",2);i([r()],s.prototype,"min",2);i([r()],s.prototype,"max",2);i([r()],s.prototype,"step",2);i([r()],s.prototype,"autocapitalize",2);i([r({type:Boolean})],s.prototype,"autocorrect",2);i([r()],s.prototype,"autocomplete",2);i([r({type:Boolean})],s.prototype,"autofocus",2);i([r()],s.prototype,"enterkeyhint",2);i([r({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],s.prototype,"spellcheck",2);i([r()],s.prototype,"inputmode",2);i([r({attribute:!1})],s.prototype,"charCounterCallback",2);i([et("input")],s.prototype,"elInputAsync",2);i([U("input")],s.prototype,"elInput",2);i([L("value")],s.prototype,"_handleValueChange",1);s=i([H({labelledBy:"input",describedBy:"input",errorMessage:"input"}),tt()],s);let I=class extends K(X(Y(s))){};I=i([Z("gds-input",{dependsOn:[rt,ot,it,at,j,nt]})],I);export{I as G};
