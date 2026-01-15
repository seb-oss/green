import{i as F,t as M,n as r,d as A,a8 as O,a0 as P,S as T,Q as W,a9 as q,b as C,h as l,E as k,o as i,O as N,g as V,P as D}from"./iframe-DB_oVbyA.js";import{l as R}from"./localized-decorator-DlNuqE9w.js";import{r as H}from"./query-async-C8OqxdsG.js";import{f as L,G as X}from"./form-control-host.style-CBmIABk_.js";import{G as Q,a as J}from"./form-control-header.component-BkI4QHH4.js";import{G as K}from"./flex.component-BuewdMkP.js";import{I as U}from"./cross-small.component-CQtxVTMV.js";import{c as Y}from"./textarea.component-DYiY599N.js";const Z=F`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: var(--_appearance-spin-button, auto);
  }

  input[type='number'] {
    -moz-appearance: var(--_appearance-spin-button, textfield);
  }
`;var j=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,w=t=>{throw TypeError(t)},a=(t,e,o,c)=>{for(var p=c>1?void 0:c?tt(e,o):e,m=t.length-1,g;m>=0;m--)(g=t[m])&&(p=(c?g(e,o,p):g(p))||p);return c&&p&&j(e,o,p),p},b=(t,e,o)=>e.has(t)||w("Cannot "+o),d=(t,e,o)=>(b(t,e,"read from private field"),o?o.call(t):e.get(t)),h=(t,e,o)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),et=(t,e,o,c)=>(b(t,e,"write to private field"),e.set(t,o),o),u=(t,e,o)=>(b(t,e,"access private method"),o),f,n,z,v,_,y,$,S,E,G,I,B;let s=class extends q{constructor(){super(),h(this,n),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.autocapitalize="off",this.autocorrect=!1,this.autofocus=!1,this.spellcheck=!0,this.charCounterCallback=Y,h(this,f,this.charCounterCallback(this)),h(this,v,t=>{const e=t.target;this.value=e.value}),h(this,_,t=>{const e=t.target;this.value=e.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),h(this,y,()=>{this.elInputAsync.then(t=>t.focus())}),h(this,$,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}focus(t){var e;(e=this._getValidityAnchor())==null||e.focus(t)}render(){return l`
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
        ${u(this,n,S).call(this)}
      </gds-field-base>
      ${C(u(this,n,z).call(this),()=>l` <gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .charCounter=${d(this,f)}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleValueChange(){et(this,f,this.charCounterCallback(this))}_getValidityAnchor(){return this.elInput}};f=new WeakMap;n=new WeakSet;z=function(){return!this.plain};v=new WeakMap;_=new WeakMap;y=new WeakMap;$=new WeakMap;S=function(){return[u(this,n,E).call(this),u(this,n,I).call(this),u(this,n,B).call(this),u(this,n,G).call(this)].map(e=>l`${e}`)};E=function(){return l` <slot slot="lead" name="lead"></slot> `};G=function(){return l`<slot slot="trail" name="trail"></slot>`};I=function(){return l`
      <input
        class="native-control"
        @input=${d(this,v)}
        @change=${d(this,_)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-errormessage="message"
        aria-label=${this.plain&&this.label||k}
        placeholder=" "
        type=${this.type}
        min=${i(this.min)}
        max=${i(this.max)}
        step=${i(this.step)}
        autocapitalize=${i(this.autocapitalize)}
        autocomplete=${i(this.autocomplete)}
        autocorrect=${i(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${i(this.enterkeyhint)}
        inputmode=${i(this.inputmode)}
        ?required=${this.required}
      />
    `};B=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?l`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${i(this.invalid?"negative":void 0)}"
        ?disabled="${this.disabled}"
        label="${N("Clear input")}"
        @click=${d(this,$)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-small></gds-icon-cross-small>
      </gds-button>`:k};s.styles=[M,L,Z];a([r({attribute:"supporting-text"})],s.prototype,"supportingText",2);a([r({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);a([r({type:Boolean})],s.prototype,"clearable",2);a([r({type:Number})],s.prototype,"maxlength",2);a([r({reflect:!0})],s.prototype,"size",2);a([r({type:Boolean})],s.prototype,"plain",2);a([r({reflect:!0})],s.prototype,"type",2);a([r()],s.prototype,"min",2);a([r()],s.prototype,"max",2);a([r()],s.prototype,"step",2);a([r()],s.prototype,"autocapitalize",2);a([r({type:Boolean})],s.prototype,"autocorrect",2);a([r()],s.prototype,"autocomplete",2);a([r({type:Boolean})],s.prototype,"autofocus",2);a([r()],s.prototype,"enterkeyhint",2);a([r({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],s.prototype,"spellcheck",2);a([r()],s.prototype,"inputmode",2);a([r({attribute:!1})],s.prototype,"charCounterCallback",2);a([H("input")],s.prototype,"elInputAsync",2);a([A("input")],s.prototype,"elInput",2);a([O("value")],s.prototype,"_handleValueChange",1);s=a([R()],s);let x=class extends P(T(W(s))){};x=a([V("gds-input",{dependsOn:[Q,J,X,K,D,U]})],x);export{x as G};
