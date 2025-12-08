import{i as F,t as M,n as o,d as A,Q as P,N as T,D as O,H as W,S as N,b as x,h as n,E as k,o as i,U as V,P as q,g as D,V as H}from"./iframe-BoTLJnrP.js";import{r as R}from"./query-async-whCRLKSn.js";import{f as L,G as X}from"./form-control-host.style-DqnpNkl-.js";import{G as Q,a as U}from"./form-control-header.component-kyMUiCrc.js";import{G as J}from"./flex.component-CwaVbukZ.js";import{I as K}from"./cross-small.component-C_b1HPjO.js";import{c as Y}from"./textarea.component-iCewcFHT.js";const Z=F``;var j=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,w=t=>{throw TypeError(t)},a=(t,e,r,d)=>{for(var p=d>1?void 0:d?tt(e,r):e,m=t.length-1,g;m>=0;m--)(g=t[m])&&(p=(d?g(e,r,p):g(p))||p);return d&&p&&j(e,r,p),p},b=(t,e,r)=>e.has(t)||w("Cannot "+r),c=(t,e,r)=>(b(t,e,"read from private field"),r?r.call(t):e.get(t)),h=(t,e,r)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),et=(t,e,r,d)=>(b(t,e,"write to private field"),e.set(t,r),r),u=(t,e,r)=>(b(t,e,"access private method"),r),f,l,S,_,$,y,C,z,E,G,I,B;let s=class extends N{constructor(){super(),h(this,l),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.autocapitalize="off",this.autocorrect=!1,this.autofocus=!1,this.spellcheck=!0,this.charCounterCallback=Y,h(this,f,this.charCounterCallback(this)),h(this,_,t=>{const e=t.target;this.value=e.value}),h(this,$,t=>{const e=t.target;this.value=e.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),h(this,y,()=>{this.elInputAsync.then(t=>t.focus())}),h(this,C,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}focus(t){var e;(e=this._getValidityAnchor())==null||e.focus(t)}render(){return n`
      ${x(!this.plain,()=>n`<gds-form-control-header class="size-${this.size}">
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
        @click=${c(this,y)}
        id="field"
      >
        ${u(this,l,z).call(this)}
      </gds-field-base>
      ${x(u(this,l,S).call(this),()=>n` <gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .charCounter=${c(this,f)}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleValueChange(){et(this,f,this.charCounterCallback(this))}_getValidityAnchor(){return this.elInput}};f=new WeakMap;l=new WeakSet;S=function(){return!this.plain};_=new WeakMap;$=new WeakMap;y=new WeakMap;C=new WeakMap;z=function(){return[u(this,l,E).call(this),u(this,l,I).call(this),u(this,l,B).call(this),u(this,l,G).call(this)].map(e=>n`${e}`)};E=function(){return n` <slot slot="lead" name="lead"></slot> `};G=function(){return n`<slot slot="trail" name="trail"></slot>`};I=function(){return n`
      <input
        class="native-control"
        @input=${c(this,_)}
        @change=${c(this,$)}
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
    `};B=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?n`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${i(this.invalid?"negative":void 0)}"
        ?disabled="${this.disabled}"
        label="${V("Clear input")}"
        @click=${c(this,C)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-small></gds-icon-cross-small>
      </gds-button>`:k};s.styles=[M,L,Z];a([o({attribute:"supporting-text"})],s.prototype,"supportingText",2);a([o({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);a([o({type:Boolean})],s.prototype,"clearable",2);a([o({type:Number})],s.prototype,"maxlength",2);a([o({reflect:!0})],s.prototype,"size",2);a([o({type:Boolean})],s.prototype,"plain",2);a([o({reflect:!0})],s.prototype,"type",2);a([o()],s.prototype,"min",2);a([o()],s.prototype,"max",2);a([o()],s.prototype,"step",2);a([o()],s.prototype,"autocapitalize",2);a([o({type:Boolean})],s.prototype,"autocorrect",2);a([o()],s.prototype,"autocomplete",2);a([o({type:Boolean})],s.prototype,"autofocus",2);a([o()],s.prototype,"enterkeyhint",2);a([o({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],s.prototype,"spellcheck",2);a([o()],s.prototype,"inputmode",2);a([o({attribute:!1})],s.prototype,"charCounterCallback",2);a([R("input")],s.prototype,"elInputAsync",2);a([A("input")],s.prototype,"elInput",2);a([P("value")],s.prototype,"_handleValueChange",1);s=a([q()],s);let v=class extends T(O(W(s))){};v=a([D("gds-input",{dependsOn:[Q,U,X,J,H,K]})],v);v.define();
