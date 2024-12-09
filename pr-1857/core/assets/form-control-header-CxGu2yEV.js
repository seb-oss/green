import{m as E}from"./runtime-CMQcyTl6.js";import{l as S}from"./localized-decorator-B8fm5KIw.js";import{n as w,r as y,g as T,G as b,h}from"./custom-element-scoping-b4lD3laR.js";import{a as $}from"./query-p8xgzTDt.js";import{n as C}from"./when-BR7zwNJC.js";import{i as z}from"./lit-element-C_s9q329.js";import"./button-NaP5_Riu.js";import"./circle-info-BjdzhmTI.js";import"./card-XqiHdOAu.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=(t,e,s)=>{for(const r of e)if(r[0]===t)return(0,r[1])();return s==null?void 0:s()},k=z`
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
`;var G=Object.defineProperty,P=Object.getOwnPropertyDescriptor,c=t=>{throw TypeError(t)},a=(t,e,s,r)=>{for(var n=r>1?void 0:r?P(e,s):e,d=t.length-1,p;d>=0;d--)(p=t[d])&&(n=(r?p(e,s,n):p(n))||n);return r&&n&&G(e,s,n),n},m=(t,e,s)=>e.has(t)||c("Cannot "+s),u=(t,e,s)=>(m(t,e,"read from private field"),s?s.call(t):e.get(t)),l=(t,e,s)=>e.has(t)?c("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),v=(t,e,s)=>(m(t,e,"access private method"),s),o,f,x,g,_;let i=class extends b{constructor(){super(...arguments),l(this,o),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,l(this,x,()=>h`
      <gds-button
        size="small"
        rank="tertiary"
        label="${E("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${u(this,g)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),l(this,g,()=>{var t;this.showExtendedSupportingText=!this.showExtendedSupportingText,(t=this._extendedSupportingText)==null||t.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))})}render(){return h`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${C(this._hasExtendedSupportingText,u(this,x))}
      </div>

      ${v(this,o,_).call(this)}
    `}};o=new WeakSet;f=function(t){this._hasExtendedSupportingText=t.target.assignedElements({flatten:!0}).length>0};x=new WeakMap;g=new WeakMap;_=function(){return h`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${v(this,o,f)}
        ></slot>
      </div>
    `};i.styles=[k];a([w({type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);a([y()],i.prototype,"_hasExtendedSupportingText",2);a([$("#extended-supporting-text")],i.prototype,"_extendedSupportingText",2);i=a([T("gds-form-control-header"),S()],i);export{I as r};
