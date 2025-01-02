import{m as K}from"./runtime-CMQcyTl6.js";import{l as P}from"./localized-decorator-B8fm5KIw.js";import{n as p,r as f,g as E,G as T,h as n}from"./custom-element-scoping-b4lD3laR.js";import{a as F}from"./query-p8xgzTDt.js";import{n as b}from"./when-BR7zwNJC.js";import{i as C}from"./lit-element-C_s9q329.js";import"./button-E0snPoHF.js";import"./triangle-exclamation-di0WtSeu.js";import"./card-XqiHdOAu.js";import"./badge-B7pEuVzS.js";import{e as M}from"./class-map-Bz98xO8-.js";import{o as Q}from"./map-DiiNQ3pp.js";import{T as U}from"./transitional-styles-BzIRfoob.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=(e,t,s)=>{for(const r of t)if(r[0]===e)return(0,r[1])();return s==null?void 0:s()},V=C`
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
`;var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,G=e=>{throw TypeError(e)},m=(e,t,s,r)=>{for(var a=r>1?void 0:r?Z(t,s):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(a=(r?o(t,s,a):o(a))||a);return r&&a&&Y(t,s,a),a},B=(e,t,s)=>t.has(e)||G("Cannot "+s),z=(e,t,s)=>(B(e,t,"read from private field"),s?s.call(e):t.get(e)),y=(e,t,s)=>t.has(e)?G("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),W=(e,t,s)=>(B(e,t,"access private method"),s),x,D,w,S,N;let g=class extends T{constructor(){super(...arguments),y(this,x),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,y(this,w,()=>n`
      <gds-button
        size="small"
        rank="tertiary"
        label="${K("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${z(this,S)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),y(this,S,()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,(e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))})}render(){return n`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${b(this._hasExtendedSupportingText,z(this,w))}
      </div>

      ${W(this,x,N).call(this)}
    `}};x=new WeakSet;D=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};w=new WeakMap;S=new WeakMap;N=function(){return n`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${W(this,x,D)}
        ></slot>
      </div>
    `};g.styles=[V];m([p({type:Boolean,reflect:!0})],g.prototype,"showExtendedSupportingText",2);m([f()],g.prototype,"_hasExtendedSupportingText",2);m([F("#extended-supporting-text")],g.prototype,"_extendedSupportingText",2);g=m([E("gds-form-control-header"),P()],g);const ee=C`
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
`;var te=Object.defineProperty,se=Object.getOwnPropertyDescriptor,A=e=>{throw TypeError(e)},O=(e,t,s,r)=>{for(var a=r>1?void 0:r?se(t,s):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(a=(r?o(t,s,a):o(a))||a);return r&&a&&te(t,s,a),a},ae=(e,t,s)=>t.has(e)||A("Cannot "+s),re=(e,t,s)=>t.has(e)?A("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),ie=(e,t,s)=>(ae(e,t,"access private method"),s),$,H;let u=class extends T{constructor(){super(...arguments),re(this,$)}render(){return n`<div aria-live="polite">
      <div class="error-message">
        ${b(this.validationMessage,()=>n`
            <gds-icon-triangle-exclamation
              solid
            ></gds-icon-triangle-exclamation>
            ${this.validationMessage}
          `)}
      </div>
      <div class="char-counter">
        ${b(Number.isInteger(this.charCounter),()=>ie(this,$,H).call(this,this.charCounter))}
      </div>
    </div>`}};$=new WeakSet;H=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",n`<gds-badge variant="${t}">${e}</gds-badge>`};u.styles=[ee];O([p({type:Number})],u.prototype,"charCounter",2);O([p()],u.prototype,"validationMessage",2);u=O([E("gds-form-control-footer")],u);const oe=C`
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
      user-select: none;
    }

    .field {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
      gap: var(--gds-space-xs);
      /* In Figma, the border overlaps with the padding, so we need to
         subtract 1px to replicate this in CSS */
      padding: calc(var(--gds-space-xs) - 1px) var(--gds-space-xs)
        calc(var(--gds-space-xs) - 1px) var(--gds-space-m);
      min-block-size: var(--gds-space-3xl);
      outline-style: solid;
      outline-color: transparent;
      outline-width: var(--gds-space-3xs);
      outline-offset: var(--gds-space-3xs);
      border-radius: var(--gds-space-xs);
      background: var(--gds-color-l3-background-secondary);
      color: var(--gds-color-l3-content-tertiary);
      border: var(--gds-space-4xs) solid var(--gds-color-l3-border-secondary);
      cursor: text;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: background-color, border-color, outline-color;
    }

    .field:focus-within {
      outline-color: currentColor;
    }

    .field.small {
      gap: var(--gds-space-2xs);
      padding: calc(var(--gds-space-xs) - 1px) var(--gds-space-xs);
      min-block-size: var(--gds-space-xl);
    }

    /* In Figma, the icon button overlaps 4px with the padding. The rule
       below is there to replicate that so the field doesn't change height
       when the action button appears */
    .field.small slot[name='action']::slotted(*) {
      margin: calc(var(--gds-space-xs) / -0.5) 0;
    }

    .field.multiline {
      align-items: flex-start;
      padding: calc(var(--gds-space-s) - 1px) var(--gds-space-s)
        calc(var(--gds-space-s) - 1px) var(--gds-space-m);
      height: max-content;
    }

    .field.trail-slot-occupied,
    .field:not(.action-slot-occupied):not(.small) {
      padding: calc(var(--gds-space-xs) - 1px) var(--gds-space-m);
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
      min-width: var(--gds-space-l);
    }
  }
`;var ne=Object.defineProperty,le=Object.getOwnPropertyDescriptor,I=e=>{throw TypeError(e)},d=(e,t,s,r)=>{for(var a=r>1?void 0:r?le(t,s):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(a=(r?o(t,s,a):o(a))||a);return r&&a&&ne(t,s,a),a},L=(e,t,s)=>t.has(e)||I("Cannot "+s),_=(e,t,s)=>(L(e,t,"read from private field"),s?s.call(e):t.get(e)),k=(e,t,s)=>t.has(e)?I("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),v=(e,t,s)=>(L(e,t,"access private method"),s),h,c,R,X,j,q,J;let l=class extends T{constructor(){super(),k(this,c),this.size="large",this.multiline=!1,this.disabled=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,k(this,h,(e,t)=>{const r=t.target.assignedNodes({flatten:!0}),a=r.length>0&&r.some(i=>{var o;return i.nodeType===Node.ELEMENT_NODE||i.nodeType===Node.TEXT_NODE&&((o=i.textContent)==null?void 0:o.trim())!==""});e==="lead"?this._leadSlotOccupied=a:e==="trail"?this._trailSlotOccupied=a:e==="action"&&(this._actionSlotOccupied=a)})}connectedCallback(){super.connectedCallback(),U.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return n`
      <div class="field ${M(e)}">
        ${v(this,c,R).call(this)}
      </div>
    `}};h=new WeakMap;c=new WeakSet;R=function(){const e=[v(this,c,X).call(this),v(this,c,j).call(this),v(this,c,q).call(this),v(this,c,J).call(this)];return n`${Q(e,t=>t)}`};X=function(){return n` <slot
      name="lead"
      @slotchange=${e=>_(this,h).call(this,"lead",e)}
    ></slot>`};j=function(){return n`<div
      class="main-slot-wrap ${M({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>_(this,h).call(this,"main",e)}
      ></slot>
    </div>`};q=function(){return n`
      <slot
        name="action"
        @slotchange=${e=>_(this,h).call(this,"action",e)}
      ></slot>
    `};J=function(){return n`
      <slot
        name="trail"
        @slotchange=${e=>_(this,h).call(this,"trail",e)}
      ></slot>
    `};l.styles=[oe];d([p()],l.prototype,"size",2);d([p({type:Boolean})],l.prototype,"multiline",2);d([p({type:Boolean,reflect:!0})],l.prototype,"disabled",2);d([p({type:Boolean})],l.prototype,"invalid",2);d([F("slot:not([name])")],l.prototype,"_mainSlotElement",2);d([f()],l.prototype,"_leadSlotOccupied",2);d([f()],l.prototype,"_trailSlotOccupied",2);d([f()],l.prototype,"_actionSlotOccupied",2);l=d([E("gds-field-base"),P()],l);export{we as r};
