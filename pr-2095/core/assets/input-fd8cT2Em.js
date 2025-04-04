import{m as F}from"./runtime-BL31MtW8.js";import{l as A}from"./localized-decorator-DtmrKsyB.js";import{n as d,h as n,g as k}from"./custom-element-scoping-b4c89-hi.js";import{a as T}from"./query-p8xgzTDt.js";import{r as B}from"./query-async-MEroNOeJ.js";import{n as y}from"./when-BR7zwNJC.js";import{i as O,E as $}from"./lit-element-Bx14lxc-.js";import{f as P,G as W}from"./form-control-host.style-CjuX2tXS.js";import{G as N,a as R}from"./form-control-header.component-WfvpaWX8.js";import{t as q}from"./tokens.style-C9bLefPj.js";import{a as L,G as X,f as D}from"./button.component-stQavwFU.js";import{w as H,b as V,d as J}from"./declarative-layout-mixins-BB4ZLY5n.js";import{G as K}from"./flex.component-QD4FtwzU.js";import{I as Q}from"./cross-large.component-BYEseUaL.js";const U=O``;var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,w=t=>{throw TypeError(t)},r=(t,e,s,u)=>{for(var o=u>1?void 0:u?Z(e,s):e,c=t.length-1,m;c>=0;c--)(m=t[c])&&(o=(u?m(e,s,o):m(o))||o);return u&&o&&Y(e,s,o),o},C=(t,e,s)=>e.has(t)||w("Cannot "+s),p=(t,e,s)=>(C(t,e,"read from private field"),s?s.call(t):e.get(t)),l=(t,e,s)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),h=(t,e,s)=>(C(t,e,"access private method"),s),v,b,_,f,x,a,E,G,S,I,z,M;let i=class extends L{constructor(){super(),l(this,a),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,l(this,v,t=>["type","placeholder","required"].includes(t.name)),l(this,b,t=>{const e=t.target;this.value=e.value}),l(this,_,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),l(this,f,()=>{this.elInputAsync.then(t=>t.focus())}),l(this,x,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}render(){return n`
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
        @click=${p(this,f)}
        id="field"
      >
        ${h(this,a,E).call(this)}
      </gds-field-base>
      ${y(!this.plain,()=>{var t;return n`<gds-form-control-footer
            class="size-${this.size}"
            .charCounter=${p(this,a,M)&&this.maxlength-(((t=this.value)==null?void 0:t.length)||0)}
            .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
          ></gds-form-control-footer>`})}
    `}_getValidityAnchor(){return this.elInput}};v=new WeakMap;b=new WeakMap;_=new WeakMap;f=new WeakMap;x=new WeakMap;a=new WeakSet;E=function(){return[h(this,a,G).call(this),h(this,a,I).call(this),h(this,a,z).call(this),h(this,a,S).call(this)].map(e=>n`${e}`)};G=function(){return n` <slot slot="lead" name="lead"></slot> `};S=function(){return n`<slot slot="trail" name="trail"></slot>`};I=function(){return n`
      <input
        class="native-control"
        @input=${p(this,b)}
        @change=${p(this,_)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-label=${this.plain&&this.label||$}
        placeholder=" "
        ${D(p(this,v))}
      />
    `};z=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?n`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${this.invalid?"negative":""}"
        ?disabled="${this.disabled}"
        label="${F("Clear input")}"
        @click=${p(this,x)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-large />
      </gds-button>`:$};M=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};i.styles=[q,P,U];r([d({attribute:"supporting-text"})],i.prototype,"supportingText",2);r([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);r([d({type:Boolean})],i.prototype,"clearable",2);r([d({type:Number})],i.prototype,"maxlength",2);r([d({type:String})],i.prototype,"size",2);r([d({type:Boolean})],i.prototype,"plain",2);r([B("input")],i.prototype,"elInputAsync",2);r([T("input")],i.prototype,"elInput",2);i=r([A()],i);let g=class extends H(V(J(i))){};g=r([k("gds-input",{dependsOn:[N,R,W,K,X,Q]})],g);g.define();
