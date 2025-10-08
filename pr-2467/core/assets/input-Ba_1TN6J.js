import{l as A,m as B}from"./runtime-CNluP0A8.js";import{n as r}from"./Reflect-DJ7r0WLU.js";import{a as M}from"./query-p8xgzTDt.js";import{r as T}from"./query-async-MEroNOeJ.js";import{o as l}from"./if-defined-CVqwUuaf.js";import{n as x}from"./when-BR7zwNJC.js";import{i as O,E as w}from"./lit-element-Bx14lxc-.js";import{f as P,G as W}from"./form-control-host.style-D8bTWmAj.js";import{G as N,a as q}from"./form-control-header.component-Bsr_kEl5.js";import{h as p,g as R}from"./gds-element-DTROifYq.js";import{t as V}from"./tokens.style-CyN6927s.js";import{w as X}from"./watch-tFciLXSI.js";import{w as D,b as H,d as L}from"./declarative-layout-mixins-DFPXvh_g.js";import{a as J,G as K}from"./button.component-DpNXiJAt.js";import{G as Q}from"./flex.component-Co_GHco4.js";import{I as U}from"./cross-small.component-C9atjG1I.js";const Y=O``;var Z=Object.defineProperty,j=Object.getOwnPropertyDescriptor,k=t=>{throw TypeError(t)},a=(t,e,o,i)=>{for(var h=i>1?void 0:i?j(e,o):e,f=t.length-1,g;f>=0;f--)(g=t[f])&&(h=(i?g(e,o,h):g(h))||h);return i&&h&&Z(e,o,h),h},b=(t,e,o)=>e.has(t)||k("Cannot "+o),c=(t,e,o)=>(b(t,e,"read from private field"),o?o.call(t):e.get(t)),u=(t,e,o)=>e.has(t)?k("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),tt=(t,e,o,i)=>(b(t,e,"write to private field"),e.set(t,o),o),d=(t,e,o)=>(b(t,e,"access private method"),o),m,n,E,_,$,y,C,S,z,G,I,F;let s=class extends J{constructor(){super(),u(this,n),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.autocapitalize="off",this.autocorrect=!1,this.autofocus=!1,this.spellcheck=!0,this.charCounterCallback=t=>{var o,i;const e=(((o=t.value)==null?void 0:o.length)||0)>=t.maxlength?"negative":"positive";return[t.maxlength-(((i=t.value)==null?void 0:i.length)||0),t.maxlength<Number.MAX_SAFE_INTEGER&&e]},u(this,m,this.charCounterCallback(this)),u(this,_,t=>{const e=t.target;this.value=e.value}),u(this,$,t=>{const e=t.target;this.value=e.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),u(this,y,()=>{this.elInputAsync.then(t=>t.focus())}),u(this,C,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}focus(t){var e;(e=this._getValidityAnchor())==null||e.focus(t)}render(){return p`
      ${x(!this.plain,()=>p`<gds-form-control-header class="size-${this.size}">
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
        ${d(this,n,S).call(this)}
      </gds-field-base>
      ${x(d(this,n,E).call(this),()=>p` <gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .charCounter=${c(this,m)}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleValueChange(){tt(this,m,this.charCounterCallback(this))}_getValidityAnchor(){return this.elInput}};m=new WeakMap;n=new WeakSet;E=function(){return!this.plain};_=new WeakMap;$=new WeakMap;y=new WeakMap;C=new WeakMap;S=function(){return[d(this,n,z).call(this),d(this,n,I).call(this),d(this,n,F).call(this),d(this,n,G).call(this)].map(e=>p`${e}`)};z=function(){return p` <slot slot="lead" name="lead"></slot> `};G=function(){return p`<slot slot="trail" name="trail"></slot>`};I=function(){return p`
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
        aria-label=${this.plain&&this.label||w}
        placeholder=" "
        type=${this.type}
        min=${l(this.min)}
        max=${l(this.max)}
        step=${l(this.step)}
        autocapitalize=${l(this.autocapitalize)}
        autocomplete=${l(this.autocomplete)}
        autocorrect=${l(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${l(this.enterkeyhint)}
        inputmode=${l(this.inputmode)}
        ?required=${this.required}
      />
    `};F=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?p`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${this.invalid?"negative":""}"
        ?disabled="${this.disabled}"
        label="${B("Clear input")}"
        @click=${c(this,C)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-small></gds-icon-cross-small>
      </gds-button>`:w};s.styles=[V,P,Y];a([r({attribute:"supporting-text"})],s.prototype,"supportingText",2);a([r({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);a([r({type:Boolean})],s.prototype,"clearable",2);a([r({type:Number})],s.prototype,"maxlength",2);a([r({reflect:!0})],s.prototype,"size",2);a([r({type:Boolean})],s.prototype,"plain",2);a([r({reflect:!0})],s.prototype,"type",2);a([r()],s.prototype,"min",2);a([r()],s.prototype,"max",2);a([r()],s.prototype,"step",2);a([r()],s.prototype,"autocapitalize",2);a([r({type:Boolean})],s.prototype,"autocorrect",2);a([r()],s.prototype,"autocomplete",2);a([r({type:Boolean})],s.prototype,"autofocus",2);a([r()],s.prototype,"enterkeyhint",2);a([r({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],s.prototype,"spellcheck",2);a([r()],s.prototype,"inputmode",2);a([r({attribute:!1})],s.prototype,"charCounterCallback",2);a([T("input")],s.prototype,"elInputAsync",2);a([M("input")],s.prototype,"elInput",2);a([X("value")],s.prototype,"_handleValueChange",1);s=a([A()],s);let v=class extends D(H(L(s))){};v=a([R("gds-input",{dependsOn:[N,q,W,Q,K,U]})],v);v.define();
