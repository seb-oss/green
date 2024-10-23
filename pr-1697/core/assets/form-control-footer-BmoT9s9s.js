import{m as P}from"./runtime-CMQcyTl6.js";import{n as u,r as G,g as y,G as w,h as o}from"./gds-element-DjAhZX8m.js";import{n as g}from"./when-BR7zwNJC.js";import{i as E}from"./lit-element-C_s9q329.js";import"./triangle-exclamation-D8aXgUcH.js";import"./card-DPV51UTY.js";import"./badge-BOd5zLMj.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=(e,t,s)=>{for(const a of t)if(a[0]===e)return(0,a[1])();return s==null?void 0:s()},M=E`
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

    .extended-supporting-text {
      opacity: 1;
      translate: 0;
      transition: var(--_transition);
      font-size: var(--gds-text-size-body-s);
      line-height: var(--gds-text-line-height-body-s);

      @starting-style {
        opacity: 0;
        translate: 0 2px;
      }
    }
  }
`;var F=Object.defineProperty,W=Object.getOwnPropertyDescriptor,$=e=>{throw TypeError(e)},f=(e,t,s,a)=>{for(var r=a>1?void 0:a?W(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(a?i(t,s,r):i(r))||r);return a&&r&&F(t,s,r),r},b=(e,t,s)=>t.has(e)||$("Cannot "+s),_=(e,t,s)=>(b(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),S=(e,t,s)=>(b(e,t,"access private method"),s),p,C,c,x,T;let d=class extends w{constructor(){super(...arguments),h(this,p),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,h(this,c,()=>o`
      <gds-button
        size="small"
        rank="tertiary"
        label="${P("Show more information")}"
        @click=${_(this,x)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),h(this,x,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))})}render(){return o`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${g(this._hasExtendedSupportingText,_(this,c))}
      </div>

      ${S(this,p,T).call(this)}
    `}};p=new WeakSet;C=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};c=new WeakMap;x=new WeakMap;T=function(){return o`
      <gds-card
        level="3"
        class="extended-supporting-text"
        padding="s m"
        margin="2xs 0 0 0"
        border-radius="xs"
        background="secondary"
        color="tertiary"
        display="${this.showExtendedSupportingText?"block":"none"}"
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${S(this,p,C)}
        ></slot>
      </gds-card>
    `};d.styles=[M];f([u({type:Boolean,reflect:!0})],d.prototype,"showExtendedSupportingText",2);f([G()],d.prototype,"_hasExtendedSupportingText",2);d=f([y("gds-form-control-header")],d);const k=E`
  @layer base, reset, transitional-styles;
  @layer base {
    :host > * {
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
`;var B=Object.defineProperty,D=Object.getOwnPropertyDescriptor,z=e=>{throw TypeError(e)},m=(e,t,s,a)=>{for(var r=a>1?void 0:a?D(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(a?i(t,s,r):i(r))||r);return a&&r&&B(t,s,r),r},A=(e,t,s)=>t.has(e)||z("Cannot "+s),H=(e,t,s)=>t.has(e)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),N=(e,t,s)=>(A(e,t,"access private method"),s),v,O;let l=class extends w{constructor(){super(...arguments),H(this,v)}render(){return o`<div aria-live="polite">
      <div class="error-message">
        ${g(this.validationMessage,()=>o`
            <gds-icon-triangle-exclamation
              solid
            ></gds-icon-triangle-exclamation>
            ${this.validationMessage}
          `)}
      </div>
      <div class="char-counter">
        ${g(Number.isInteger(this.charCounter),()=>N(this,v,O).call(this,this.charCounter))}
      </div>
    </div>`}};v=new WeakSet;O=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",o`<gds-badge variant="${t}">${e}</gds-badge>`};l.styles=[k];m([u({type:Number})],l.prototype,"charCounter",2);m([u()],l.prototype,"validationMessage",2);l=m([y("gds-form-control-footer")],l);export{Q as r};
