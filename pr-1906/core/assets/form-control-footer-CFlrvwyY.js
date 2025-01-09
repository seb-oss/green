import{m as O}from"./runtime-CMQcyTl6.js";import{l as G}from"./localized-decorator-B8fm5KIw.js";import{n as m,r as M,g as y,G as w,h as o}from"./custom-element-scoping-b4lD3laR.js";import{a as F}from"./query-p8xgzTDt.js";import{n as c}from"./when-BR7zwNJC.js";import{i as E}from"./lit-element-C_s9q329.js";import"./button-NaP5_Riu.js";import"./triangle-exclamation-di0WtSeu.js";import"./card-XqiHdOAu.js";import"./badge-B7pEuVzS.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=(e,t,s)=>{for(const a of t)if(a[0]===e)return(0,a[1])();return s==null?void 0:s()},W=E`
  @layer base, reset, transitional-styles;
  @layer base {
    #label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: var(--gds-text-line-height-detail-m);

      & > div {
        display: flex;
        flex-direction: column;
      }
    }

    ::slotted(label) {
      font-weight: var(--gds-text-weight-book);
    }

    :host(.size-small) {
      & slot[name='supporting-text'],
      & ::slotted(label) {
        font-size: var(--gds-text-size-detail-s);
        line-height: var(--gds-text-line-height-detail-s);
      }
    }

    #extended-supporting-text {
      opacity: 1;
      transition: var(--_transition);
      font-size: var(--gds-text-size-body-s);
      line-height: var(--gds-text-line-height-body-s);
      border-radius: var(--gds-space-xs);
      background-color: var(--gds-color-l3-background-secondary);
      color: var(--gds-color-l3-content-tertiary);
      max-height: var(--_max-height);

      &[aria-hidden='false'] {
        margin: var(--gds-space-2xs) 0 0 0;
        padding: var(--gds-space-s) var(--gds-space-m);
      }

      &[aria-hidden='true'] {
        max-height: 0;
        opacity: 0;
        translate: 0 2px;
        padding: 0 var(--gds-space-m);
        margin: 0;
        overflow: hidden;
      }
    }
  }
`;var k=Object.defineProperty,B=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},h=(e,t,s,a)=>{for(var r=a>1?void 0:a?B(t,s):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(a?n(t,s,r):n(r))||r);return a&&r&&k(t,s,r),r},$=(e,t,s)=>t.has(e)||S("Cannot "+s),_=(e,t,s)=>($(e,t,"read from private field"),s?s.call(e):t.get(e)),g=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),T=(e,t,s)=>($(e,t,"access private method"),s),p,b,x,v,C;let d=class extends w{constructor(){super(...arguments),g(this,p),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,g(this,x,()=>o`
      <gds-button
        size="small"
        rank="tertiary"
        label="${O("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${_(this,v)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),g(this,v,()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,(e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))})}render(){return o`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${c(this._hasExtendedSupportingText,_(this,x))}
      </div>

      ${T(this,p,C).call(this)}
    `}};p=new WeakSet;b=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};x=new WeakMap;v=new WeakMap;C=function(){return o`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${T(this,p,b)}
        ></slot>
      </div>
    `};d.styles=[W];h([m({type:Boolean,reflect:!0})],d.prototype,"showExtendedSupportingText",2);h([M()],d.prototype,"_hasExtendedSupportingText",2);h([F("#extended-supporting-text")],d.prototype,"_extendedSupportingText",2);d=h([y("gds-form-control-header"),G()],d);const D=E`
  @layer base, reset, transitional-styles;
  @layer base {
    :host > *:not(style) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--gds-space-xl);
    }

    .error-message {
      display: flex;
      align-items: flex-start;
      gap: var(--gds-space-xs);
      margin-top: var(--gds-space-2xs);
      font-weight: var(--gds-text-weight-book);
      font-size: var(--gds-text-size-detail-s);
      color: var(--gds-color-l3-content-negative);
    }

    [gds-element^='gds-icon'] {
      width: 18px;
      height: 18px;
    }

    :host(.size-small) {
      & .error-message {
        font-size: var(--gds-text-size-detail-xs);
        line-height: var(--gds-text-line-height-detail-s);
        gap: var(--gds-space-2xs);
      }
      & [gds-element^='gds-icon'] {
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-right: 2px;
      }
    }
  }
`;var H=Object.defineProperty,A=Object.getOwnPropertyDescriptor,z=e=>{throw TypeError(e)},f=(e,t,s,a)=>{for(var r=a>1?void 0:a?A(t,s):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(a?n(t,s,r):n(r))||r);return a&&r&&H(t,s,r),r},N=(e,t,s)=>t.has(e)||z("Cannot "+s),I=(e,t,s)=>t.has(e)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),R=(e,t,s)=>(N(e,t,"access private method"),s),u,P;let l=class extends w{constructor(){super(...arguments),I(this,u)}render(){return o`<div aria-live="polite">
      <div class="error-message">
        ${c(this.validationMessage,()=>o`
            <gds-icon-triangle-exclamation
              solid
            ></gds-icon-triangle-exclamation>
            ${this.validationMessage}
          `)}
      </div>
      <div class="char-counter">
        ${c(Number.isInteger(this.charCounter),()=>R(this,u,P).call(this,this.charCounter))}
      </div>
    </div>`}};u=new WeakSet;P=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",o`<gds-badge variant="${t}">${e}</gds-badge>`};l.styles=[D];f([m({type:Number})],l.prototype,"charCounter",2);f([m()],l.prototype,"validationMessage",2);l=f([y("gds-form-control-footer")],l);export{Z as r};
