import{m as K}from"./runtime-CMQcyTl6.js";import{l as B}from"./localized-decorator-iufJoRiP.js";import{n as g,r as f,g as z,G as k,h as n}from"./custom-element-scoping-BEGY3AqQ.js";import{a as F}from"./query-p8xgzTDt.js";import{n as b}from"./when-BR7zwNJC.js";import{i as P}from"./lit-element-C_s9q329.js";import"./button-sFwDD1rU.js";import"./triangle-exclamation-BZzuw6qS.js";import"./card-CnLl-_go.js";import"./badge-B45v0_tU.js";import{e as W}from"./class-map-Bz98xO8-.js";import{T as Q}from"./transitional-styles-gKBkOdeg.js";import{w as U}from"./watch-tFciLXSI.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*V(e,t){if(e!==void 0){let s=0;for(const a of e)yield t(a,s++)}}const Y=P`
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
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: all;
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
`;var Z=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,N=e=>{throw TypeError(e)},m=(e,t,s,a)=>{for(var i=a>1?void 0:a?ee(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(i=(a?o(t,s,i):o(i))||i);return a&&i&&Z(t,s,i),i},A=(e,t,s)=>t.has(e)||N("Cannot "+s),D=(e,t,s)=>(A(e,t,"read from private field"),s?s.call(e):t.get(e)),y=(e,t,s)=>t.has(e)?N("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),H=(e,t,s)=>(A(e,t,"access private method"),s),x,L,w,S,I;let h=class extends k{constructor(){super(...arguments),y(this,x),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,y(this,w,()=>n`
      <gds-button
        size="small"
        rank="tertiary"
        label="${K("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${D(this,S)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),y(this,S,()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,(e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))})}render(){return n`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${b(this._hasExtendedSupportingText,D(this,w))}
      </div>

      ${H(this,x,I).call(this)}
    `}};x=new WeakSet;L=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};w=new WeakMap;S=new WeakMap;I=function(){return n`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${H(this,x,L)}
        ></slot>
      </div>
    `};h.styles=[Y];m([g({type:Boolean,reflect:!0})],h.prototype,"showExtendedSupportingText",2);m([f()],h.prototype,"_hasExtendedSupportingText",2);m([F("#extended-supporting-text")],h.prototype,"_extendedSupportingText",2);h=m([z("gds-form-control-header"),B()],h);const te=P`
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
`;var se=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,R=e=>{throw TypeError(e)},M=(e,t,s,a)=>{for(var i=a>1?void 0:a?ie(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(i=(a?o(t,s,i):o(i))||i);return a&&i&&se(t,s,i),i},ae=(e,t,s)=>t.has(e)||R("Cannot "+s),re=(e,t,s)=>t.has(e)?R("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),oe=(e,t,s)=>(ae(e,t,"access private method"),s),$,X;let u=class extends k{constructor(){super(...arguments),re(this,$)}render(){return n`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${b(this.validationMessage,()=>n`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.validationMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter">
        ${b(Number.isInteger(this.charCounter),()=>oe(this,$,X).call(this,this.charCounter))}
      </div>
    </div>`}};$=new WeakSet;X=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",n`<gds-badge variant="${t}">${e}</gds-badge>`};u.styles=[te];M([g({type:Number})],u.prototype,"charCounter",2);M([g()],u.prototype,"validationMessage",2);u=M([z("gds-form-control-footer")],u);const ne=P`
  @layer base, a11y;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .field {
        transition: none;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    .field {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
      gap: var(--gds-space-xs);
      padding-block: var(--gds-space-xs);
      padding-inline: var(--gds-space-m) var(--gds-space-s);
      min-block-size: var(--gds-space-3xl);
      block-size: var(--gds-space-3xl);
      outline-style: solid;
      outline-width: 0;
      border-radius: var(--gds-space-xs);
      background: var(--gds-color-l3-background-secondary);
      color: var(--gds-color-l3-content-tertiary);
      border: var(--gds-space-4xs) solid var(--gds-color-l3-border-secondary);
      cursor: text;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: background-color;
    }

    .field.lead-slot-occupied {
      padding-inline-start: var(--gds-space-s);
    }

    .field.action-slot-occupied:not(.trail-slot-occupied) {
      padding-inline-end: var(--gds-space-s);

      &.small {
        padding-inline-end: var(--gds-space-xs);
      }
    }

    .field:focus-within {
      outline-width: var(--gds-space-3xs);
      outline-offset: var(--gds-space-3xs);
      outline-color: currentColor;
      border-color: currentColor;
    }

    .field.small {
      gap: var(--gds-space-2xs);
      padding: calc(var(--gds-space-xs) - 1px) var(--gds-space-xs);
      min-block-size: var(--gds-space-xl);
      block-size: var(--gds-space-xl);
    }

    .field.multiline {
      align-items: flex-start;
      padding: var(--gds-space-s);
      padding-inline-start: var(--gds-space-m);
      height: max-content;
    }

    .field.disabled {
      background: var(--gds-color-l3-background-disabled);
      color: var(--gds-color-l3-content-disabled);
      border-color: transparent;
      pointer-events: none;
    }

    .field.invalid {
      background: var(--gds-color-l3-background-negative-secondary);
      border-color: var(--gds-color-l3-border-negative);
      color: var(--gds-color-l3-content-negative);
    }

    slot:not([name])::slotted(*) {
      color: currentColor;
    }

    .main-slot-wrap {
      display: flex;
      flex: 1;
    }

    .main-slot-wrap.multiline {
      height: max-content;
    }

    @media (hover: hover) {
      .field:hover {
        background: color-mix(
          in srgb,
          var(--gds-color-l3-background-secondary),
          var(--gds-color-l3-states-light-hover)
        );
      }

      .field.invalid:hover {
        background: color-mix(
          in srgb,
          var(--gds-color-l3-background-negative-secondary),
          var(--gds-color-l3-states-negative-hover)
        );
      }
    }

    slot[name='lead']::slotted([gds-element^='gds-icon-']) {
      align-items: center;
      justify-content: center;
      display: flex;
      inline-size: var(--gds-space-l);
      block-size: var(--gds-space-l);
    }

    .multiline slot[name='action']::slotted([gds-element]) {
      margin-top: -4px;
    }
  }
`;var le=Object.defineProperty,de=Object.getOwnPropertyDescriptor,j=e=>{throw TypeError(e)},c=(e,t,s,a)=>{for(var i=a>1?void 0:a?de(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(i=(a?o(t,s,i):o(i))||i);return a&&i&&le(t,s,i),i},q=(e,t,s)=>t.has(e)||j("Cannot "+s),_=(e,t,s)=>(q(e,t,"read from private field"),s?s.call(e):t.get(e)),G=(e,t,s)=>t.has(e)?j("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),p=(e,t,s)=>(q(e,t,"access private method"),s),v,d,J,E,C,T,O;let l=class extends k{constructor(){super(),G(this,d),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,G(this,v,(e,t)=>{const a=t.target.assignedNodes({flatten:!0}),i=a.length>0&&a.some(r=>{var o;return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&((o=r.textContent)==null?void 0:o.trim())!==""});e==="lead"?this._leadSlotOccupied=i:e==="trail"?this._trailSlotOccupied=i:e==="action"&&(this._actionSlotOccupied=i)})}connectedCallback(){super.connectedCallback(),Q.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return n`
      <div class="field ${W(e)}" part="_base">
        ${p(this,d,J).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};v=new WeakMap;d=new WeakSet;J=function(){const e=[p(this,d,E).call(this),p(this,d,C).call(this),p(this,d,T).call(this),p(this,d,O).call(this)];return n`${V(e,t=>t)}

      <!-- <div class="left">
        ${p(this,d,E).call(this)} ${p(this,d,C).call(this)}
      </div>
      <div class="right">
        ${p(this,d,T).call(this)} ${p(this,d,O).call(this)}
      </div>  --> `};E=function(){return n` <slot
      name="lead"
      @slotchange=${e=>_(this,v).call(this,"lead",e)}
    ></slot>`};C=function(){return n`<div
      class="main-slot-wrap ${W({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>_(this,v).call(this,"main",e)}
      ></slot>
    </div>`};T=function(){return n`
      <slot
        name="action"
        @slotchange=${e=>_(this,v).call(this,"action",e)}
      ></slot>
    `};O=function(){return n`
      <slot
        name="trail"
        @slotchange=${e=>_(this,v).call(this,"trail",e)}
      ></slot>
    `};l.styles=[ne];c([g()],l.prototype,"size",2);c([g({type:Boolean})],l.prototype,"multiline",2);c([g({type:Boolean,reflect:!0})],l.prototype,"disabled",2);c([g({type:Boolean})],l.prototype,"invalid",2);c([F("slot:not([name])")],l.prototype,"_mainSlotElement",2);c([f()],l.prototype,"_leadSlotOccupied",2);c([f()],l.prototype,"_trailSlotOccupied",2);c([f()],l.prototype,"_actionSlotOccupied",2);c([U("disabled")],l.prototype,"_handleDisabledChange",1);l=c([z("gds-field-base"),B()],l);export{V as o};
