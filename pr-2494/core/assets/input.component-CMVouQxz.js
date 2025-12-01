import{i as F,t as M,n as r,d as A,a2 as T,U as O,L as P,K as W,a3 as q,b as C,h as l,E as k,o as i,H as N,I as V,g as D,J as H}from"./iframe-BBWJ5-ds.js";import{r as L}from"./query-async-D1tIT2yI.js";import{f as R,G as X}from"./form-control-host.style-GuJjBAUn.js";import{G as J,a as K}from"./form-control-header.component-BfOHAH8h.js";import{G as U}from"./flex.component-C6tfZiZr.js";import{I as Q}from"./cross-small.component-DGjOJg0F.js";import{c as Y}from"./textarea.component-blkTO4SX.js";const Z=F`
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
      </gds-button>`:k};s.styles=[M,R,Z];a([r({attribute:"supporting-text"})],s.prototype,"supportingText",2);a([r({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);a([r({type:Boolean})],s.prototype,"clearable",2);a([r({type:Number})],s.prototype,"maxlength",2);a([r({reflect:!0})],s.prototype,"size",2);a([r({type:Boolean})],s.prototype,"plain",2);a([r({reflect:!0})],s.prototype,"type",2);a([r()],s.prototype,"min",2);a([r()],s.prototype,"max",2);a([r()],s.prototype,"step",2);a([r()],s.prototype,"autocapitalize",2);a([r({type:Boolean})],s.prototype,"autocorrect",2);a([r()],s.prototype,"autocomplete",2);a([r({type:Boolean})],s.prototype,"autofocus",2);a([r()],s.prototype,"enterkeyhint",2);a([r({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],s.prototype,"spellcheck",2);a([r()],s.prototype,"inputmode",2);a([r({attribute:!1})],s.prototype,"charCounterCallback",2);a([L("input")],s.prototype,"elInputAsync",2);a([A("input")],s.prototype,"elInput",2);a([T("value")],s.prototype,"_handleValueChange",1);s=a([V()],s);let x=class extends O(P(W(s))){};x=a([D("gds-input",{dependsOn:[J,K,X,U,H,Q]})],x);export{x as G};
