import{m as A}from"./runtime-BL31MtW8.js";import{l as k}from"./localized-decorator-DtmrKsyB.js";import{n as d,h as n,g as T}from"./custom-element-scoping-b4c89-hi.js";import{a as B}from"./query-p8xgzTDt.js";import{r as O}from"./query-async-MEroNOeJ.js";import{n as y}from"./when-BR7zwNJC.js";import{i as P,E as w}from"./lit-element-Bx14lxc-.js";import{f as W,G as N}from"./form-control-host.style-D8gynaCX.js";import{G as R,a as q}from"./form-control-header.component-BDchjC5I.js";import{t as L}from"./tokens.style-C9bLefPj.js";import{a as X,G as D,f as H}from"./button.component-D9i3kx96.js";import{w as V,b as J,d as K}from"./declarative-layout-mixins-C09DP4OO.js";import{G as Q}from"./flex.component-BfiuBC5x.js";import{I as U}from"./cross-large.component-BLGJR-vd.js";const Y=P``;var Z=Object.defineProperty,j=Object.getOwnPropertyDescriptor,C=t=>{throw TypeError(t)},a=(t,e,s,u)=>{for(var o=u>1?void 0:u?j(e,s):e,c=t.length-1,m;c>=0;c--)(m=t[c])&&(o=(u?m(e,s,o):m(o))||o);return u&&o&&Z(e,s,o),o},E=(t,e,s)=>e.has(t)||C("Cannot "+s),l=(t,e,s)=>(E(t,e,"read from private field"),s?s.call(t):e.get(t)),p=(t,e,s)=>e.has(t)?C("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),h=(t,e,s)=>(E(t,e,"access private method"),s),r,G,g,v,b,f,_,S,I,z,F,M,x;let i=class extends X{constructor(){super(),p(this,r),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,p(this,g,t=>["type","placeholder","required"].includes(t.name)),p(this,v,t=>{const e=t.target;this.value=e.value}),p(this,b,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),p(this,f,()=>{this.elInputAsync.then(t=>t.focus())}),p(this,_,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}render(){return n`
      ${y(!this.plain,()=>n`<gds-form-control-header class="size-${this.size}">
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
        @click=${l(this,f)}
        id="field"
      >
        ${h(this,r,S).call(this)}
      </gds-field-base>
      ${y(h(this,r,G).call(this),()=>{var t;return n`<gds-form-control-footer
            class="size-${this.size}"
            .charCounter=${l(this,r,x)&&this.maxlength-(((t=this.value)==null?void 0:t.length)||0)}
            .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
          ></gds-form-control-footer>`})}
    `}_getValidityAnchor(){return this.elInput}};r=new WeakSet;G=function(){return!this.plain&&(this.invalid||l(this,r,x))};g=new WeakMap;v=new WeakMap;b=new WeakMap;f=new WeakMap;_=new WeakMap;S=function(){return[h(this,r,I).call(this),h(this,r,F).call(this),h(this,r,M).call(this),h(this,r,z).call(this)].map(e=>n`${e}`)};I=function(){return n` <slot slot="lead" name="lead"></slot> `};z=function(){return n`<slot slot="trail" name="trail"></slot>`};F=function(){return n`
      <input
        class="native-control"
        @input=${l(this,v)}
        @change=${l(this,b)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-label=${this.plain&&this.label||w}
        placeholder=" "
        ${H(l(this,g))}
      />
    `};M=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?n`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${this.invalid?"negative":""}"
        ?disabled="${this.disabled}"
        label="${A("Clear input")}"
        @click=${l(this,_)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-large />
      </gds-button>`:w};x=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};i.styles=[L,W,Y];a([d({attribute:"supporting-text"})],i.prototype,"supportingText",2);a([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);a([d({type:Boolean})],i.prototype,"clearable",2);a([d({type:Number})],i.prototype,"maxlength",2);a([d({type:String})],i.prototype,"size",2);a([d({type:Boolean})],i.prototype,"plain",2);a([O("input")],i.prototype,"elInputAsync",2);a([B("input")],i.prototype,"elInput",2);i=a([k()],i);let $=class extends V(J(K(i))){};$=a([T("gds-input",{dependsOn:[R,q,N,Q,D,U]})],$);export{$ as G};
