import{m as X}from"./runtime-CMQcyTl6.js";import{l as C}from"./localized-decorator-iufJoRiP.js";import{n as u,r as x,g as O,G as z,h as p}from"./custom-element-scoping-BRwcB39g.js";import{a as P}from"./query-p8xgzTDt.js";import{n as q}from"./when-BR7zwNJC.js";import{i as B}from"./lit-element-C_s9q329.js";import"./button-C98Bowv3.js";import"./circle-info-DUfSTdk1.js";import"./card-jDpO6Z0G.js";import{e as D}from"./class-map-Bz98xO8-.js";import{T as I}from"./transitional-styles-DmGQO-4x.js";import{w as J}from"./watch-tFciLXSI.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*K(e,t){if(e!==void 0){let s=0;for(const a of e)yield t(a,s++)}}const Q=B`
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
`;var R=Object.defineProperty,U=Object.getOwnPropertyDescriptor,G=e=>{throw TypeError(e)},f=(e,t,s,a)=>{for(var i=a>1?void 0:a?U(t,s):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(a?n(t,s,i):n(i))||i);return a&&i&&R(t,s,i),i},M=(e,t,s)=>t.has(e)||G("Cannot "+s),T=(e,t,s)=>(M(e,t,"read from private field"),s?s.call(e):t.get(e)),_=(e,t,s)=>t.has(e)?G("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),W=(e,t,s)=>(M(e,t,"access private method"),s),v,A,b,y,F;let h=class extends z{constructor(){super(...arguments),_(this,v),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,_(this,b,()=>p`
      <gds-button
        size="small"
        rank="tertiary"
        label="${X("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${T(this,y)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),_(this,y,()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,(e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))})}render(){return p`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${q(this._hasExtendedSupportingText,T(this,b))}
      </div>

      ${W(this,v,F).call(this)}
    `}};v=new WeakSet;A=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};b=new WeakMap;y=new WeakMap;F=function(){return p`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${W(this,v,A)}
        ></slot>
      </div>
    `};h.styles=[Q];f([u({type:Boolean,reflect:!0})],h.prototype,"showExtendedSupportingText",2);f([x()],h.prototype,"_hasExtendedSupportingText",2);f([P("#extended-supporting-text")],h.prototype,"_extendedSupportingText",2);h=f([O("gds-form-control-header"),C()],h);const V=B`
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
      transition-property: background-color, border-color, outline-color;
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
`;var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,N=e=>{throw TypeError(e)},d=(e,t,s,a)=>{for(var i=a>1?void 0:a?Z(t,s):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(a?n(t,s,i):n(i))||i);return a&&i&&Y(t,s,i),i},H=(e,t,s)=>t.has(e)||N("Cannot "+s),m=(e,t,s)=>(H(e,t,"read from private field"),s?s.call(e):t.get(e)),k=(e,t,s)=>t.has(e)?N("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),c=(e,t,s)=>(H(e,t,"access private method"),s),g,l,L,S,w,E,$;let o=class extends z{constructor(){super(),k(this,l),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,k(this,g,(e,t)=>{const a=t.target.assignedNodes({flatten:!0}),i=a.length>0&&a.some(r=>{var n;return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&((n=r.textContent)==null?void 0:n.trim())!==""});e==="lead"?this._leadSlotOccupied=i:e==="trail"?this._trailSlotOccupied=i:e==="action"&&(this._actionSlotOccupied=i)})}connectedCallback(){super.connectedCallback(),I.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return p`
      <div class="field ${D(e)}" part="_base">
        ${c(this,l,L).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};g=new WeakMap;l=new WeakSet;L=function(){const e=[c(this,l,S).call(this),c(this,l,w).call(this),c(this,l,E).call(this),c(this,l,$).call(this)];return p`${K(e,t=>t)}

      <!-- <div class="left">
        ${c(this,l,S).call(this)} ${c(this,l,w).call(this)}
      </div>
      <div class="right">
        ${c(this,l,E).call(this)} ${c(this,l,$).call(this)}
      </div>  --> `};S=function(){return p` <slot
      name="lead"
      @slotchange=${e=>m(this,g).call(this,"lead",e)}
    ></slot>`};w=function(){return p`<div
      class="main-slot-wrap ${D({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>m(this,g).call(this,"main",e)}
      ></slot>
    </div>`};E=function(){return p`
      <slot
        name="action"
        @slotchange=${e=>m(this,g).call(this,"action",e)}
      ></slot>
    `};$=function(){return p`
      <slot
        name="trail"
        @slotchange=${e=>m(this,g).call(this,"trail",e)}
      ></slot>
    `};o.styles=[V];d([u()],o.prototype,"size",2);d([u({type:Boolean})],o.prototype,"multiline",2);d([u({type:Boolean,reflect:!0})],o.prototype,"disabled",2);d([u({type:Boolean})],o.prototype,"invalid",2);d([P("slot:not([name])")],o.prototype,"_mainSlotElement",2);d([x()],o.prototype,"_leadSlotOccupied",2);d([x()],o.prototype,"_trailSlotOccupied",2);d([x()],o.prototype,"_actionSlotOccupied",2);d([J("disabled")],o.prototype,"_handleDisabledChange",1);o=d([O("gds-field-base"),C()],o);export{K as o};
