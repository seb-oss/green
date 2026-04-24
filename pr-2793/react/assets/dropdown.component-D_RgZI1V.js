import{i as y,t as G,_ as s,g as x,h as l,G as z,b as a,c,n as r,r as E,d as i,A as we,e as ke}from"./tokens.style-DxVdNCZa.js";import{l as ge,m as W,s as qe}from"./runtime-nRyYmvPb.js";import{a as Re,e as V,w as k}from"./watch-Bh1rs_BK.js";import{G as je,o as Ue,a as Ke,b as Xe}from"./button.component-ptZsQnet.js";import{w as Se,b as $e,d as Ce,o as Ye}from"./icon.component-CnxzhO6D.js";import{n as u}from"./when-BR7zwNJC.js";import{G as Ee,o as Je,f as Qe}from"./popover.component-DHc2z6R4.js";import{e as w}from"./class-map-1rRrO_lX.js";import{T as ue,c as Ze}from"./transitional-styles-DN7pQLG_.js";import{a as et,G as tt}from"./card.component-qAKB9g32.js";import{I as st}from"./triangle-exclamation.component-4OoHYgGY.js";import{I as it,a as at}from"./chevron-bottom.component-BWC0bhUe.js";import{e as ot,n as rt}from"./ref-BV7LdmuT.js";import{F as lt,o as nt,L as dt,u as ct}from"./unwrap-slots-DRf-ij9w.js";import{I as Te}from"./checkmark.component-C_MhBgkp.js";import{I as ht}from"./cross-small.component-C3LmuYqK.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(e){return(t,o)=>Re(t,o,{async get(){var h;return await this.updateComplete,((h=this.renderRoot)==null?void 0:h.querySelector(e))??null}})}const gt=y`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-neutral-02);
  }
`;var ut=gt;let P=class extends et{render(){return l`<slot></slot>`}};P.styles=[G,ut];P=s([x("gds-flex")],P);const bt=y`
  @layer tokens, core, variants, sizes, states, notification;

  @layer core {
    :host {
      display: inline-block;
    }

    .badge {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: var(--gds-sys-space-3xs);
      padding: var(--_padding);
      min-height: var(--_block-size);
      border-radius: var(--_border-radius);
      width: 100%;
      min-width: var(--_inline-size);
      font: var(--_font);
      background-color: var(--_bg);
      color: var(--_color);
      box-sizing: border-box;

      --_padding: var(--gds-sys-space-4xs) var(--gds-sys-space-xs);
      --_block-size: var(--gds-sys-space-xs);
      --_border-radius: var(--gds-sys-space-2xs);
      --_inline-size: var(--gds-sys-space-l);
      --_font: var(--gds-sys-text-detail-s-book);
    }
  }

  @layer variants {
    .badge.information {
      --_bg: var(--gds-sys-color-l3-information-03);
      --_color: var(--gds-sys-color-content-information-01);
    }

    .badge.notice {
      --_bg: var(--gds-sys-color-l3-notice-03);
      --_color: var(--gds-sys-color-content-notice-01);
    }

    .badge.positive {
      --_bg: var(--gds-sys-color-l3-positive-03);
      --_color: var(--gds-sys-color-content-positive-03);
    }

    .badge.warning {
      --_bg: var(--gds-sys-color-l3-warning-03);
      --_color: var(--gds-sys-color-content-warning-01);
    }

    .badge.negative {
      --_bg: var(--gds-sys-color-l3-negative-03);
      --_color: var(--gds-sys-color-content-negative-01);
    }

    .badge.disabled {
      --_bg: var(--gds-sys-color-l3-disabled-03);
      --_color: var(--gds-sys-color-content-disabled-01);
    }
  }

  @layer sizes {
    .badge.small {
      --_padding: var(--gds-sys-space-4xs) var(--gds-sys-space-2xs);
      --_block-size: var(--gds-sys-space-m);
      --_border-radius: var(--gds-sys-space-3xs);
      --_font: var(--gds-sys-text-detail-xs-book);
    }
  }

  @layer notification {
    .badge.notification {
      --_padding: var(--gds-sys-space-3xs);
      --_block-size: var(--gds-sys-space-xs);
      --_border-radius: var(--gds-sys-space-max);
      --_inline-size: 0;
      justify-content: center;
      gap: 0;
      --_bg: var(--gds-sys-color-l3-negative-01);
      --_font: var(--gds-sys-text-detail-xs-book);
      --_color: var(--gds-sys-color-content-neutral-05);
    }

    .badge.notification.with-content {
      --_padding: var(--gds-sys-space-4xs) var(--gds-sys-space-2xs);
      --_block-size: var(--gds-sys-space-m);
      --_inline-size: var(--gds-sys-space-l);
    }
  }

  @layer states {
    .badge.rounded {
      --_border-radius: var(--gds-sys-space-max);
      justify-content: center;
    }
  }

  slot[name='lead']::slotted(*) {
    line-height: var(--gds-sys-space-m);
  }

  :host([notification]) slot[name='trail']::slotted(*) {
    line-height: var(--gds-sys-space-s);
  }

  :host([notification]) slot[name='lead']::slotted(*) {
    line-height: var(--gds-sys-space-s);
  }
`;var ft=bt,N,be,R,ze,j,Me,U,We;let f=class extends Se($e(Ce(z))){constructor(){super(...arguments),a(this,N),a(this,R),a(this,j),a(this,U),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1,this.leadSlotOccupied=!1}render(){const e=w({badge:!0,[this.variant]:!0,[this.size]:this.size==="small",notification:this.notification,"with-content":this.notification&&this.mainSlotOccupied,rounded:this.rounded});return l`
      <div class="${e}">
        ${[c(this,R,ze).call(this),c(this,j,Me).call(this),c(this,U,We).call(this)]}
      </div>
    `}};N=new WeakSet;be=function(e,t){const h=e.target.assignedNodes({flatten:!0});this[t]=h.length>0&&h.some(d=>{var p;return d.nodeType===Node.ELEMENT_NODE||d.nodeType===Node.TEXT_NODE&&((p=d.textContent)==null?void 0:p.trim())!==""})};R=new WeakSet;ze=function(){if(this.size!=="small"||!this.notification)return l`<slot
        name="lead"
        @slotchange=${e=>c(this,N,be).call(this,e,"leadSlotOccupied")}
      ></slot>`};j=new WeakSet;Me=function(){return l`<slot
      @slotchange=${e=>c(this,N,be).call(this,e,"mainSlotOccupied")}
    ></slot>`};U=new WeakSet;We=function(){return l`<slot name="trail"></slot>`};f.styles=[G,ft];s([r()],f.prototype,"variant",2);s([r({type:String})],f.prototype,"size",2);s([r({attribute:"notification",type:Boolean,reflect:!0})],f.prototype,"notification",2);s([r({attribute:"rounded",type:Boolean,reflect:!0})],f.prototype,"rounded",2);s([E()],f.prototype,"mainSlotOccupied",2);s([E()],f.prototype,"leadSlotOccupied",2);f=s([x("gds-badge",{dependsOn:[P]})],f);const vt=e=>mt({...e,type:"checkbox"}),mt=e=>{const{type:t,checked:o,indeterminate:h,disabled:d,invalid:p}=e;return l`
    <div class="rbcb ${w({"rbcb--checkbox":t==="checkbox","rbcb--radio":t==="radio","--checked":o,"--indeterminate":h,"--disabled":d,"--invalid":p})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${u(t==="checkbox",()=>l`
            <gds-icon-minus-small
              class=${w({rbcb__icon:!0,"rbcb__icon--visible":h})}
              stroke="4"
            ></gds-icon-minus-small>
            <gds-icon-checkmark
              class=${w({rbcb__icon:!0,"rbcb__icon--visible":o})}
              stroke="4"
            ></gds-icon-checkmark>
          `)}
      </div>
    </div>
  `},yt=y`
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
      gap: var(--gds-sys-space-xs);
      padding-block: var(--gds-sys-space-xs);
      padding-inline: var(--gds-sys-space-m) var(--gds-sys-space-s);
      min-block-size: var(--gds-sys-space-3xl);
      block-size: var(--gds-sys-space-3xl);
      outline-style: solid;
      outline-width: 0;
      border-radius: var(--gds-sys-radius-xs);
      background: var(--gds-sys-color-l3-neutral-02);
      color: var(--gds-sys-color-content-neutral-01);
      outline-offset: 0;
      border: var(--gds-sys-space-5xs) solid
        var(--gds-sys-color-border-neutral-01);
      cursor: text;
      transition-property: background-color, outline-offset;
      backface-visibility: hidden;
      transition-duration: var(--gds-sys-motion-duration-fastest);
      transition-timing-function: var(--gds-sys-motion-easing-linear);

      .right {
        display: contents;
      }

      .right.as-flex {
        display: flex;
        position: absolute;
        gap: var(--gds-sys-space-xs);
        right: var(--gds-sys-space-xs);
        top: var(--gds-sys-space-xs);
        block-size: max-content;
      }
    }

    .field:focus-within {
      outline-width: var(--gds-sys-space-4xs);
      outline-offset: var(--gds-sys-space-4xs);
      outline-color: currentColor;
      border-color: currentColor;
    }

    .field.small {
      gap: var(--gds-sys-space-3xs);
      padding: var(--gds-sys-space-3xs) var(--gds-sys-space-xs);
      min-block-size: var(--gds-sys-space-2xl);
      block-size: var(--gds-sys-space-2xl);
      border-radius: var(--gds-sys-radius-2xs);
    }

    .field.multiline {
      align-items: flex-start;
      padding: var(--gds-sys-space-s);
      padding-inline-start: var(--gds-sys-space-m);
      height: max-content;
    }

    .field.disabled {
      background: var(--gds-sys-color-l3-disabled-01);
      color: var(--gds-sys-color-content-disabled-01);
      border-color: transparent;
      pointer-events: none;
    }

    .field.invalid {
      background: var(--gds-sys-color-l3-negative-02);
      border-color: var(--gds-sys-color-border-negative-01);
      color: var(--gds-sys-color-content-negative-01);
    }

    .field.lead-slot-occupied {
      padding-inline-start: var(--gds-sys-space-s);
    }

    .field.lead-has-badge {
      padding-inline-start: var(--gds-sys-space-2xs);
    }

    .field.small.lead-has-badge {
      padding-inline-start: var(--gds-sys-space-2xs);
    }

    .field.trail-slot-occupied {
      padding-inline-end: var(--gds-sys-space-xs);
    }

    .field.small.trail-slot-occupied {
      padding-inline-end: var(--gds-sys-space-2xs);
    }

    .field.action-slot-occupied:not(.trail-slot-occupied) {
      padding-inline-end: var(--gds-sys-space-s);
    }

    .field.small.action-slot-occupied:not(.trail-slot-occupied) {
      padding-inline-end: var(--gds-sys-space-2xs);
    }

    slot:not([name])::slotted(*) {
      color: currentColor;
    }

    .main-slot-wrap {
      display: flex;
      gap: var(--gds-sys-space-xs);
      flex: 1;
      align-self: stretch;
    }

    .main-slot-wrap.multiline {
      height: max-content;
    }

    @media (hover: hover) {
      .field:hover {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-02),
          var(--gds-sys-color-state-neutral-03)
        );
      }

      .field.invalid:hover {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-negative-02),
          var(--gds-sys-color-state-negative-hover)
        );
      }
    }

    slot[name='lead']::slotted([gds-element^='gds-icon-']) {
      align-items: center;
      justify-content: center;
      display: flex;
      inline-size: var(--gds-sys-space-l);
      block-size: var(--gds-sys-space-l);
    }

    .multiline slot[name='action']::slotted([gds-element]) {
      margin-top: -4px;
    }
  }
`;var xt=yt,M,K,Oe,fe,Le,ve,Be,me,Ae,ye,De;let g=class extends z{constructor(){super(),a(this,K),a(this,fe),a(this,ve),a(this,me),a(this,ye),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._leadHasBadge=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,a(this,M,(e,t)=>{const h=t.target.assignedNodes({flatten:!0}),d=h.length>0&&h.some(p=>{var b;return p.nodeType===Node.ELEMENT_NODE||p.nodeType===Node.TEXT_NODE&&((b=p.textContent)==null?void 0:b.trim())!==""});e==="lead"?(this._leadSlotOccupied=d,this._leadHasBadge=d&&h.some(p=>{var b;return((b=p.getAttribute)==null?void 0:b.call(p,"gds-element"))==="gds-badge"})):e==="trail"?this._trailSlotOccupied=d:e==="action"&&(this._actionSlotOccupied=d)})}connectedCallback(){super.connectedCallback(),ue.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"lead-has-badge":this._leadHasBadge,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return l`
      <div class="field ${w(e)}" part="_base">
        ${c(this,K,Oe).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};M=new WeakMap;K=new WeakSet;Oe=function(){const e={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return l`
      ${c(this,fe,Le).call(this)} ${c(this,ve,Be).call(this)}
      <div class="${w(e)}">
        ${c(this,me,Ae).call(this)} ${c(this,ye,De).call(this)}
      </div>
    `};fe=new WeakSet;Le=function(){return l` <slot
      name="lead"
      @slotchange=${e=>i(this,M).call(this,"lead",e)}
    ></slot>`};ve=new WeakSet;Be=function(){return l`<div
      class="main-slot-wrap ${w({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>i(this,M).call(this,"main",e)}
      ></slot>
    </div>`};me=new WeakSet;Ae=function(){return l`
      <slot
        name="action"
        @slotchange=${e=>i(this,M).call(this,"action",e)}
      ></slot>
    `};ye=new WeakSet;De=function(){return l`
      <slot
        name="trail"
        @slotchange=${e=>i(this,M).call(this,"trail",e)}
      ></slot>
    `};g.styles=[xt];s([r()],g.prototype,"size",2);s([r({type:Boolean})],g.prototype,"multiline",2);s([r({type:Boolean,reflect:!0})],g.prototype,"disabled",2);s([r({type:Boolean})],g.prototype,"invalid",2);s([V("slot:not([name])")],g.prototype,"_mainSlotElement",2);s([E()],g.prototype,"_leadSlotOccupied",2);s([E()],g.prototype,"_leadHasBadge",2);s([E()],g.prototype,"_trailSlotOccupied",2);s([E()],g.prototype,"_actionSlotOccupied",2);s([k("disabled")],g.prototype,"_handleDisabledChange",1);g=s([x("gds-field-base"),ge()],g);const _t=y`
  @layer base, reset, transitional-styles;
  @layer base {
    :host(.visually-hidden) {
      position: absolute;
      clip: rect(0 0 0 0);
      width: 0px;
      height: 0px;
      overflow: hidden;
    }

    :host > *:not(style) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--gds-sys-space-xl);
    }

    .error-message {
      display: flex;
      align-items: flex-start;
      gap: var(--gds-sys-space-xs);
      margin-top: var(--gds-sys-space-3xs);
      font: var(--gds-sys-text-detail-s-regular);
      color: var(--gds-sys-color-content-negative-01);
    }

    [gds-element^='gds-icon'] {
      width: 18px;
      height: 18px;
    }

    :host(.size-small) {
      & .error-message {
        font: var(--gds-sys-text-detail-xs);
        gap: var(--gds-sys-space-3xs);
      }
      & [gds-element^='gds-icon'] {
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-right: 2px;
      }
    }
  }
`;var wt=_t,X,Fe;let S=class extends z{constructor(){super(...arguments),a(this,X)}_handleVisibilityChange(){var e;this.classList.toggle("visually-hidden",!this.errorMessage&&!((e=this.charCounter)!=null&&e[1]))}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return l`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${u(this.errorMessage,()=>l`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${c(this,X,Fe).call(this)}
      </div>
    </div>`}};X=new WeakSet;Fe=function(){if(!this.charCounter||this.charCounter[1]===!1)return we;const[e,t]=this.charCounter;return l`<gds-badge variant="${t}">${e}</gds-badge>`};S.styles=[wt];s([r({type:Array})],S.prototype,"charCounter",2);s([r()],S.prototype,"errorMessage",2);s([k("charCounter"),k("errorMessage")],S.prototype,"_handleVisibilityChange",1);S=s([x("gds-form-control-footer",{dependsOn:[f,st]})],S);const kt=y`
  @layer base, reset, transitional-styles;
  @layer base {
    #label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--gds-sys-color-content-neutral-01);
    }

    #label-row > div {
      display: flex;
      flex-direction: column;
    }

    slot[name='label']::slotted(*) {
      font: var(--_font-label, var(--gds-sys-text-detail-m-book));
    }

    slot[name='supporting-text']::slotted(*) {
      font: var(--_font-supporting-text, var(--gds-sys-text-detail-s-regular));
    }

    :host(.size-small) slot[name='supporting-text'],
    :host(.size-small) ::slotted(label) {
      font: var(--_font-label, var(--gds-sys-text-detail-s-book));
    }

    #extended-supporting-text {
      opacity: 1;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: all;
      font: var(--_font-supporting-text, var(--gds-sys-text-detail-s-regular));
      border-radius: var(--gds-sys-space-xs);
      background-color: var(--gds-sys-color-l3-neutral-02);
      color: var(--gds-sys-color-content-neutral-01);
      max-height: var(--_max-height);
    }

    #extended-supporting-text[aria-hidden='false'] {
      margin: var(--gds-sys-space-3xs) 0 0 0;
      padding: var(--gds-sys-space-s) var(--gds-sys-space-m);
    }

    #extended-supporting-text[aria-hidden='true'] {
      max-height: 0;
      opacity: 0;
      translate: 0 2px;
      padding: 0 var(--gds-sys-space-m);
      margin: 0;
      overflow: hidden;
    }
  }
`;var St=kt,xe,He,Y,J,D,Q,Ie;let $=class extends z{constructor(){super(...arguments),a(this,xe),a(this,Q),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,a(this,Y,()=>l`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${W("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${i(this,J)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),a(this,J,()=>{var t;this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText,cancelable:!0})&&(this.showExtendedSupportingText=!this.showExtendedSupportingText,(t=this._extendedSupportingText)==null||t.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"))}),a(this,D,()=>{var e;this.showExtendedSupportingText&&((e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`))})}render(){return l`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${u(this._hasExtendedSupportingText,i(this,Y))}
      </div>

      ${c(this,Q,Ie).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",i(this,D))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",i(this,D))}};xe=new WeakSet;He=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};Y=new WeakMap;J=new WeakMap;D=new WeakMap;Q=new WeakSet;Ie=function(){return l`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${c(this,xe,He)}
        ></slot>
      </div>
    `};$.styles=[St];s([r({type:Boolean,reflect:!0})],$.prototype,"showExtendedSupportingText",2);s([E()],$.prototype,"_hasExtendedSupportingText",2);s([V("#extended-supporting-text")],$.prototype,"_extendedSupportingText",2);$=s([x("gds-form-control-header",{dependsOn:[je,tt,it]}),ge()],$);const $t=y`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
      overscroll-behavior: contain;
    }
  }
`;var Ct=$t,O,F,Z;let v=class extends lt(z){constructor(){super(),a(this,F),a(this,O,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",c(this,F,Z)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),c(this,F,Z).call(this,e))})}get hidden(){return i(this,O)}set hidden(e){const t=e.toString();ke(this,O,t==="true"),i(this,O)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),ue.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){var t;const e=(t=this.parentElement)==null?void 0:t.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),l`<div class="item">
      ${u(e,()=>vt({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};O=new WeakMap;F=new WeakSet;Z=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};v.styles=[G,Ze,nt];s([r()],v.prototype,"value",2);s([r({type:Boolean,reflect:!0})],v.prototype,"hidden",1);s([r({attribute:"aria-selected",reflect:!0})],v.prototype,"selected",2);s([r({type:Boolean,reflect:!0})],v.prototype,"isPlaceholder",2);s([k("isPlaceholder")],v.prototype,"_handlePlaceholderStatusChange",1);v=s([x("gds-option",{dependsOn:[Te]})],v);var L,ee;let C=class extends z{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,a(this,L,ot()),a(this,ee,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(o=>{o!==t&&(o.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})}),new dt(this)}get navigableItems(){return this.visibleOptionElements}get options(){return i(this,L).value?ct(i(this,L).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(o=>this.compareWith(o,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),ue.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",i(this,ee))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return l`<slot ${rt(i(this,L))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};L=new WeakMap;ee=new WeakMap;C.styles=Ct;s([r({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],C.prototype,"multiple",2);s([r()],C.prototype,"compareWith",2);s([k("multiple")],C.prototype,"_rerenderOptions",1);C=s([x("gds-listbox",{dependsOn:[v]})],C);var Et=y`
  * {
    box-sizing: border-box;
  }

  :host {
    display: flex;
    flex-direction: column;
    width: 100%;
    contain: layout;
    isolation: isolate;
    gap: var(--gds-sys-space-xs);
  }

  :host([size='small']) {
    gap: var(--gds-sys-space-3xs);
  }

  :host([size='small']) .native-control {
    font: var(--gds-sys-text-detail-s-regular);
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    pointer-events: none;
  }

  .native-control {
    font: var(--gds-sys-text-detail-m-regular);
    align-items: center;
    align-self: center;
    appearance: none;
    background-color: transparent;
    border: 0;
    font-family: inherit;
    margin: unset;
    outline: none;
    overflow: hidden;
    padding: unset;
    width: 100%;
    color: currentColor;
    text-align: left;
  }

  :host([size='small']) slot[name='lead']::slotted(*) {
    line-height: 18px;
    width: var(--gds-sys-space-m);
  }

  :host([size='small']) slot[name='lead']::slotted(*) {
    min-width: var(--gds-sys-space-m);
    max-width: var(--gds-sys-space-m);
    display: flex;
  }

  slot[name='lead']::slotted(*) {
    min-width: var(--gds-sys-space-l);
    display: flex;
  }
`;const Tt=y`
  @layer base, reset;

  @layer base {
    :host {
      isolation: auto;
      contain: none;
    }

    #field::part(_base) {
      cursor: pointer;
      block-size: auto;
    }

    #clear-btn {
      margin-top: calc(-1 * var(--gds-sys-space-xs));
      margin-bottom: calc(-1 * var(--gds-sys-space-xs));
    }

    button#trigger {
      flex: 0 1 100%;
      cursor: pointer;

      /* This prevents overflow when the text is too long */
      display: grid;
    }

    #trigger:focus {
      outline: none;
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    input[type='text'] {
      border-radius: var(--gds-sys-radius-xs);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      font-size: inherit;
      line-height: inherit;
      border: none;
      outline: none;
      color: var(--gds-sys-color-content-disabled-01);
      border-color: var(--gds-sys-color-border-neutral-01);
      border-width: 0 0 var(--gds-sys-space-5xs) 0;
      border-style: solid;
      width: 100%;
      padding: var(--gds-sys-space-m);
      font-weight: var(--gds-sys-text-weight-regular);
      flex: 1;
      box-sizing: border-box;
      font-family: inherit;

      &:focus {
        border-color: var(--gds-sys-color-border-neutral-01);
        color: var(--gds-sys-color-content-neutral-01);
      }

      &::placeholder {
        font-family: inherit;
        font-weight: var(--gds-sys-text-weight-book);
        color: var(--gds-sys-color-content-disabled-01);
      }
    }

    [aria-expanded='true'] [slot='trail'] {
      transform: scaleY(-1);
    }
  }
`;var zt=Tt,_,te,Pe,se,ie,H,ae,m,oe,re,I,le,ne,de,ce,Ge,B,A,he,Ve,pe,Ne,T,q;let n=class extends Ke{constructor(){super(...arguments),a(this,te),a(this,ce),a(this,he),a(this,pe),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,a(this,_,void 0),a(this,se,()=>{var e;return l`
      <input
        id="trigger"
        role="combobox"
        class="native-control"
        aria-expanded="${this.open}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        placeholder="${(e=this.placeholder)==null?void 0:e.innerHTML}"
        name="trigger"
        aria-label="${this.label} ${this.displayValue}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
        .value=${this.value}
        @click=${t=>{t.stopImmediatePropagation()}}
        @input=${t=>{this.value=t.target.value,i(this,B).call(this),i(this,I).call(this,t),i(this,m).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${t=>{t.key==="ArrowDown"&&(t.preventDefault(),i(this,m).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(o=>o.focus())),t.key==="Enter"&&i(this,A).call(this)}}
      />
    `}),a(this,ie,()=>l`
      <button
        id="trigger"
        role="combobox"
        class="native-control"
        aria-expanded="${this.open}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        name="trigger"
        aria-label="${this.label}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
      >
        <slot name="trigger">
          <span>${Ye(this.displayValue)}</span>
        </slot>
      </button>
    `),a(this,H,e=>{this.open||this.dispatchCustomEvent("gds-blur",{detail:{relatedTarget:e.relatedTarget},bubbles:!1,composed:!0})}),a(this,ae,e=>{if(this.combobox){const o=e.getBoundingClientRect(),d=window.innerHeight-o.bottom,p=o.top;let b=Math.min(p,this.maxHeight);return d>p&&(b=Math.min(d,this.maxHeight)),`${b-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),a(this,m,(e,t)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1})),a(this,oe,e=>{i(this,m).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),a(this,re,e=>{e.preventDefault(),e.stopPropagation(),this.value=void 0,this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),i(this,B).call(this),i(this,A).call(this)}),a(this,I,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const o=e.currentTarget;if(this.options.forEach(d=>d.hidden=!1),!o.value)return;this.options.filter(d=>!this.searchFilter(o.value,d)).forEach(d=>d.hidden=!0)}),a(this,le,e=>{var t;(t=this._elListbox)==null||t.then(o=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),o.focus();return}})}),a(this,ne,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),a(this,de,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),a(this,B,()=>{this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))}),a(this,A,()=>{this.updateComplete.then(()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),a(this,T,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&i(this,m).call(this,!1,"close")&&(this.open=!1)}),a(this,q,e=>{var t;e.key==="Tab"&&!this.searchable&&i(this,m).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())})}get type(){return"gds-dropdown"}get options(){return i(this,_)?Array.from(i(this,_)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(i(this,_))return Array.from(i(this,_)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,o;let e;return Array.isArray(this.value)?e=this.value.slice(0,5).reduce((h,d)=>{var p;return h+((p=this.options.find(b=>b.value===d))==null?void 0:p.innerText)+", "},"").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):e=(t=this.options.find(h=>h.selected))==null?void 0:t.innerText,e||((o=this.placeholder)==null?void 0:o.innerText)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",i(this,H)),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",i(this,H))}render(){return l`
      ${u(!this.plain&&!this.hideLabel,()=>l`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${u(this.supportingText.length>0,()=>l`<span slot="supporting-text" id="supporting-text">
                  ${this.supportingText}
                </span>`)}
            <slot
              id="extended-supporting-text"
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
            <!-- @deprecated: use 'supporting-text' slot instead. Remove in 2.0 release. -->
            <slot id="sub-label" name="sub-label" slot="supporting-text"></slot>
          </gds-form-control-header>
        `)}
      <gds-popover
        .autofocus=${!this.combobox}
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${i(this,ae)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[Je(8),Qe()]:Ee.DefaultMiddleware}
        @gds-ui-state=${i(this,oe)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${u(this.value&&this.multiple&&this.value.length>0,()=>l`<gds-badge
                rounded
                size=${this.size==="small"?"small":"default"}
                slot="lead"
                aria-label=${W(qe`${this.value.length} options selected`)}
              >
                ${this.value.length}</gds-badge
              >`)}
          ${u(this.clearable&&!this.disabled&&(Array.isArray(this.value)?this.value.length>0:!!this.value),()=>l`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${this.size==="small"?"xs":"small"}
                label="${W("Clear selection")}"
                @click=${i(this,re)}
                slot="action"
              >
                <gds-icon-cross-small></gds-icon-cross-small>
              </gds-button>`)}
          ${u(this.combobox&&!this.multiple,()=>i(this,se).call(this))}
          ${u(!this.combobox||this.multiple,()=>i(this,ie).call(this))}
          <gds-icon-chevron-bottom
            size=${this.size==="small"?"m":"l"}
            slot="action"
          ></gds-icon-chevron-bottom>
        </gds-field-base>

        ${u(this.searchable,()=>l`<input
              id="searchinput"
              type="text"
              aria-label="${W("Filter available options")}"
              placeholder="${W("Search")}"
              @keydown=${i(this,le)}
              @input=${i(this,I)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${Xe(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${c(this,ce,Ge)}"
          @gds-focus="${i(this,de)}"
          @keydown=${i(this,ne)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${u(c(this,te,Pe).call(this),()=>l`
          <gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.invalid?this.errorMessage:we}
            </slot>
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),ke(this,_,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.combobox&&!this.placeholder&&this.options.find(o=>this.compareWith(o.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value),this._handleValueChange()}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(o=>o.hidden=!e),e?c(this,he,Ve).call(this):(c(this,pe,Ne).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(o=>o.selected);requestAnimationFrame(async()=>{await this.updateComplete,t==null||t.scrollIntoView({block:"center"})})}};_=new WeakMap;te=new WeakSet;Pe=function(){return!this.plain};se=new WeakMap;ie=new WeakMap;H=new WeakMap;ae=new WeakMap;m=new WeakMap;oe=new WeakMap;re=new WeakMap;I=new WeakMap;le=new WeakMap;ne=new WeakMap;de=new WeakMap;ce=new WeakSet;Ge=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(o=>o.value):(this.value=(t=e.selection[0])==null?void 0:t.value,i(this,m).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>{var o;return(o=this._elTriggerBtn)==null?void 0:o.focus()},0))),i(this,B).call(this),i(this,A).call(this)})};B=new WeakMap;A=new WeakMap;he=new WeakSet;Ve=function(){this.addEventListener("blur",i(this,T)),this.addEventListener("gds-blur",i(this,T)),this.addEventListener("keydown",i(this,q))};pe=new WeakSet;Ne=function(){this.removeEventListener("blur",i(this,T)),this.removeEventListener("gds-blur",i(this,T)),this.removeEventListener("keydown",i(this,q))};T=new WeakMap;q=new WeakMap;n.styles=[G,Et,zt];s([r({attribute:"supporting-text"})],n.prototype,"supportingText",2);s([r({type:Boolean,reflect:!0})],n.prototype,"open",2);s([r({type:Boolean,reflect:!0})],n.prototype,"searchable",2);s([r({type:Boolean,reflect:!0})],n.prototype,"multiple",2);s([r({type:Boolean,reflect:!0})],n.prototype,"clearable",2);s([r({type:Boolean,reflect:!0})],n.prototype,"combobox",2);s([r()],n.prototype,"compareWith",2);s([r()],n.prototype,"searchFilter",2);s([r({type:Boolean,attribute:"sync-popover-width"})],n.prototype,"syncPopoverWidth",2);s([r({type:Number,attribute:"max-height"})],n.prototype,"maxHeight",2);s([r({reflect:!0})],n.prototype,"size",2);s([r({type:Boolean,attribute:"hide-label"})],n.prototype,"hideLabel",2);s([r({type:Boolean})],n.prototype,"plain",2);s([r({type:Boolean})],n.prototype,"disableMobileStyles",2);s([r({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],n.prototype,"showExtendedSupportingText",2);s([V("#trigger")],n.prototype,"_elTriggerBtn",2);s([pt("#listbox")],n.prototype,"_elListbox",2);s([V("#searchinput")],n.prototype,"_elSearchInput",2);s([Ue({attributes:!0,childList:!0,subtree:!0,characterData:!0})],n.prototype,"_handleLightDOMChange",1);s([k("value")],n.prototype,"_handleValueChange",1);s([k("open")],n.prototype,"_handleOpenChange",1);n=s([ge()],n);let _e=class extends Se($e(Ce(n))){};_e=s([x("gds-dropdown",{dependsOn:[$,S,g,C,Ee,Te,at,ht]})],_e);export{_e as G,v as a,P as b,Et as f,pt as r};
