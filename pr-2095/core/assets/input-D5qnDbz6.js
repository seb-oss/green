import{m as k}from"./runtime-BL31MtW8.js";import{l as T}from"./localized-decorator-DtmrKsyB.js";import{n as d,h as n,g as B}from"./custom-element-scoping-b4c89-hi.js";import{a as O}from"./query-p8xgzTDt.js";import{r as P}from"./query-async-MEroNOeJ.js";import{n as x}from"./when-BR7zwNJC.js";import{i as W,E as g}from"./lit-element-Bx14lxc-.js";import{f as N,G as R}from"./form-control-host.style-CjuX2tXS.js";import{G as L,a as q}from"./form-control-header.component-WfvpaWX8.js";import{t as D}from"./tokens.style-C9bLefPj.js";import{a as X,G as H,f as V}from"./button.component-stQavwFU.js";import{w as J,b as K,d as Q}from"./declarative-layout-mixins-BB4ZLY5n.js";import{G as U}from"./flex.component-QD4FtwzU.js";import{I as Y}from"./cross-large.component-BYEseUaL.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=(t,e,s)=>{for(const o of e)if(o[0]===t)return(0,o[1])();return s==null?void 0:s()},j=W``;var tt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,w=t=>{throw TypeError(t)},i=(t,e,s,o)=>{for(var l=o>1?void 0:o?et(e,s):e,c=t.length-1,f;c>=0;c--)(f=t[c])&&(l=(o?f(e,s,l):f(l))||l);return o&&l&&tt(e,s,l),l},C=(t,e,s)=>e.has(t)||w("Cannot "+s),u=(t,e,s)=>(C(t,e,"read from private field"),s?s.call(t):e.get(t)),h=(t,e,s)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),p=(t,e,s)=>(C(t,e,"access private method"),s),a,E,S,v,b,_,y,$,G,I,z,F,M,A;let r=class extends X{constructor(){super(),h(this,a),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this.plain=!1,h(this,v,t=>["type","placeholder","required"].includes(t.name)),h(this,b,t=>{const e=t.target;this.value=e.value}),h(this,_,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),h(this,y,()=>{this.elInputAsync.then(t=>t.focus())}),h(this,$,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}render(){return n`${Z(this.variant,[["default",()=>p(this,a,E).call(this)],["floating-label",()=>p(this,a,S).call(this)]])}`}_getValidityAnchor(){return this.elInput}};a=new WeakSet;E=function(){return n`
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
        @click=${u(this,y)}
        id="field"
      >
        ${p(this,a,G).call(this)}
      </gds-field-base>
      ${x(!this.plain,()=>{var t;return n`<gds-form-control-footer
            class="size-${this.size}"
            .charCounter=${u(this,a,A)&&this.maxlength-(((t=this.value)==null?void 0:t.length)||0)}
            .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
          ></gds-form-control-footer>`})}
    `};S=function(){return g};v=new WeakMap;b=new WeakMap;_=new WeakMap;y=new WeakMap;$=new WeakMap;G=function(){return[p(this,a,I).call(this),p(this,a,F).call(this),p(this,a,M).call(this),p(this,a,z).call(this)].map(e=>n`${e}`)};I=function(){return n` <slot slot="lead" name="lead"></slot> `};z=function(){return n`<slot slot="trail" name="trail"></slot>`};F=function(){return n`
      <input
        class="native-control"
        @input=${u(this,b)}
        @change=${u(this,_)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-label=${this.plain&&this.label||g}
        placeholder=" "
        ${V(u(this,v))}
      />
    `};M=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?n`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${this.invalid?"negative":""}"
        ?disabled="${this.disabled}"
        label="${k("Clear input")}"
        @click=${u(this,$)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-large />
      </gds-button>`:g};A=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};r.styles=[D,N,j];i([d({attribute:"supporting-text"})],r.prototype,"supportingText",2);i([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);i([d({type:Boolean})],r.prototype,"clearable",2);i([d({type:Number})],r.prototype,"maxlength",2);i([d({type:String})],r.prototype,"variant",2);i([d({type:String})],r.prototype,"size",2);i([d({type:Boolean})],r.prototype,"plain",2);i([P("input")],r.prototype,"elInputAsync",2);i([O("input")],r.prototype,"elInput",2);r=i([T()],r);let m=class extends J(K(Q(r))){};m=i([B("gds-input",{dependsOn:[L,q,R,U,H,Y]})],m);m.define();
