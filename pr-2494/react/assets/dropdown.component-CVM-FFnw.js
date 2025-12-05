import{i as m,h as r,G as M,t as W,_ as t,n as l,g as x,b as p,c as u,r as O,d as o,E as fe,e as me}from"./tokens.style-DbNH1nUB.js";import{l as ce,m as D,s as He}from"./runtime-nRyYmvPb.js";import{a as Ie,e as X,w as C}from"./watch-Bh1rs_BK.js";import{G as Ve,o as Ne,a as je,b as qe}from"./button.component-BG9uAJJw.js";import{w as pe,c as Re,b as he,d as Ke,a as ge,f as Ue,s as d,g as ue,p as Xe,h as xe,j as Ye,o as Je}from"./icon-4HRzMV4I.js";import{n as b}from"./when-BR7zwNJC.js";import{G as _e,o as Qe,f as Ze}from"./popover.component-De2VtvB-.js";import{e as V}from"./class-map-BDpprcGq.js";import{T as be,c as et}from"./transitional-styles-jHXdbrLl.js";import{I as tt}from"./triangle-exclamation.component-BFKJm8fT.js";import{I as st,a as it}from"./chevron-bottom.component-BDJNT7Jx.js";import{F as ot,o as at,e as rt,L as lt,u as nt,n as dt}from"./unwrap-slots-9Te7o6mZ.js";import{I as we}from"./checkmark.component-B2Sx1diL.js";import{I as ct}from"./cross-small.component-DouUK-Th.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(e){return(s,i)=>Ie(s,i,{async get(){var c;return await this.updateComplete,((c=this.renderRoot)==null?void 0:c.querySelector(e))??null}})}const ht=m`
  :host {
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
`;var gt=ht;let a=class extends pe(Re(he(Ke(ge(Ue(M)))))){constructor(){super(...arguments),this.level="2"}render(){return r`<slot></slot>`}};a.styles=[W,gt];t([d()],a.prototype,"display",2);t([l()],a.prototype,"level",2);t([d(ue("content"))],a.prototype,"color",2);t([d(ue("background"))],a.prototype,"background",2);t([d({styleTemplate:function(e,s){const i=this,[c,n=i["border-style"]||"solid",g=i["border-color"]||"subtle-01"]=s,v=`var(--gds-sys-space-${c})`,Ge=Xe(g,"border",i.level);return`border: ${v} ${n} ${Ge};`}})],a.prototype,"border",2);t([d(ue("border"))],a.prototype,"border-color",2);t([d(xe)],a.prototype,"border-width",2);t([d()],a.prototype,"border-style",2);t([d(Ye)],a.prototype,"border-radius",2);t([d({valueTemplate:e=>`var(--gds-sys-shadow-${e}-01), var(--gds-sys-shadow-${e}-02)`})],a.prototype,"box-shadow",2);t([d()],a.prototype,"opacity",2);t([d()],a.prototype,"overflow",2);t([d()],a.prototype,"box-sizing",2);t([d()],a.prototype,"z-index",2);t([d({styleTemplate:(e,s)=>`font: var(--gds-sys-text-${s[0]});`})],a.prototype,"font",2);t([d({valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],a.prototype,"font-weight",2);t([d()],a.prototype,"text-align",2);t([d()],a.prototype,"text-wrap",2);t([d()],a.prototype,"overflow-wrap",2);t([d()],a.prototype,"white-space",2);t([d({...xe,styleTemplate:(e,s)=>{const i=s[0],c=s[1]||i;return`gap: ${i} ${c};`},cacheOverrideKey:"flex"})],a.prototype,"gap",2);t([d()],a.prototype,"align-items",2);t([d()],a.prototype,"align-content",2);t([d()],a.prototype,"justify-content",2);t([d()],a.prototype,"justify-items",2);t([d()],a.prototype,"flex-direction",2);t([d()],a.prototype,"flex-wrap",2);t([d()],a.prototype,"place-items",2);t([d()],a.prototype,"place-content",2);t([d()],a.prototype,"aspect-ratio",2);t([d()],a.prototype,"cursor",2);t([d()],a.prototype,"pointer-events",2);a=t([x("gds-div")],a);let I=class extends a{constructor(){super(),this.variant="primary",this.padding="m;m{xl}",this["border-radius"]="s",this.gap="m;m{l}"}render(){return r`<slot></slot>`}};I.styles=[W,m`
      :host {
        box-sizing: border-box;
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
        border-width: var(--gds-sys-space-5xs);
        border-style: solid;
        display: flex;
        flex-direction: column;
      }
    `];t([d({styleTemplate:function(e,s){let i,c,n;switch(s[0]){case"primary":i="transparent",c=`var(--gds-sys-color-l${this.level}-neutral-01)`,n="var(--gds-sys-color-content-neutral-01)";break;case"secondary":i="var(--gds-sys-color-border-subtle-01)",c=`var(--gds-sys-color-l${this.level}-neutral-02)`,n="var(--gds-sys-color-content-neutral-01)";break;case"tertiary":i="transparent",c=`var(--gds-sys-color-l${this.level}-neutral-02)`,n="var(--gds-sys-color-content-neutral-01)";break;case"brand-01":i="transparent",c=`var(--gds-sys-color-l${this.level}-brand-01)`,n="var(--gds-sys-color-content-inversed)";break;case"brand-02":i="transparent",c=`var(--gds-sys-color-l${this.level}-brand-02)`,n="var(--gds-sys-color-content-brand-02)";break;case"positive":case"negative":case"warning":case"information":case"notice":i=`var(--gds-sys-color-border-${s[0]}-02)`,c=`var(--gds-sys-color-l${this.level}-${s[0]}-01)`,n=`var(--gds-sys-color-content-${s[0]}-01)`;break;default:i="transparent",c=`var(--gds-sys-color-l${this.level}-neutral-01)`,n="var(--gds-sys-color-content-neutral-01)";break}return`
      --_border-color: ${i};
      --_background-color: ${c};
      --_color: ${n};
      `}})],I.prototype,"variant",2);I=t([x("gds-card")],I);const ut=m`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
`;var bt=ut;let K=class extends a{render(){return r`<slot></slot>`}};K.styles=[W,bt];K=t([x("gds-flex")],K);const yt=m`
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
      --_font: var(--gds-sys-text-detail-book-s);
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
      --_font: var(--gds-sys-text-detail-book-xs);
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
      --_color: var(--gds-sys-color-content-inversed);
      --_font: var(--gds-sys-text-detail-book-xs);
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
`;var vt=yt,k,ye,$e,ke,Se;let f=class extends pe(he(ge(M))){constructor(){super(...arguments),p(this,k),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1,this.leadSlotOccupied=!1}render(){const e=V({badge:!0,[this.variant]:!0,[this.size]:this.size==="small",notification:this.notification,"with-content":this.notification&&this.mainSlotOccupied,rounded:this.rounded});return r`
      <div class="${e}">
        ${[u(this,k,$e).call(this),u(this,k,ke).call(this),u(this,k,Se).call(this)]}
      </div>
    `}};k=new WeakSet;ye=function(e,s){const c=e.target.assignedNodes({flatten:!0});this[s]=c.length>0&&c.some(n=>{var g;return n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE&&((g=n.textContent)==null?void 0:g.trim())!==""})};$e=function(){if(this.size!=="small"||!this.notification)return r`<slot
        name="lead"
        @slotchange=${e=>u(this,k,ye).call(this,e,"leadSlotOccupied")}
      ></slot>`};ke=function(){return r`<slot
      @slotchange=${e=>u(this,k,ye).call(this,e,"mainSlotOccupied")}
    ></slot>`};Se=function(){return r`<slot name="trail"></slot>`};f.styles=[W,vt];t([l()],f.prototype,"variant",2);t([l({type:String})],f.prototype,"size",2);t([l({attribute:"notification",type:Boolean,reflect:!0})],f.prototype,"notification",2);t([l({attribute:"rounded",type:Boolean,reflect:!0})],f.prototype,"rounded",2);t([O()],f.prototype,"mainSlotOccupied",2);t([O()],f.prototype,"leadSlotOccupied",2);f=t([x("gds-badge",{dependsOn:[K]})],f);const ft=e=>Ce({...e,type:"checkbox"}),jt=e=>Ce({...e,type:"radio"}),Ce=e=>{const{type:s,checked:i,indeterminate:c,disabled:n,invalid:g}=e;return r`
    <div class="rbcb ${V({"rbcb--checkbox":s==="checkbox","rbcb--radio":s==="radio","--checked":i,"--indeterminate":c,"--disabled":n,"--invalid":g})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${b(s==="checkbox",()=>r`
            ${b(c,()=>r`<gds-icon-minus-small
                  class="rbcb__icon"
                  stroke="4"
                ></gds-icon-minus-small>`,()=>b(i,()=>r`<gds-icon-checkmark
                      class="rbcb__icon"
                      stroke="4"
                    ></gds-icon-checkmark>`))}
          `)}
      </div>
    </div>
  `},mt=m`
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
        var(--gds-sys-color-border-interactive);
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
`;var xt=mt,A,S,Ee,Te,ze,Me,Oe;let y=class extends M{constructor(){super(),p(this,S),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._leadHasBadge=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,p(this,A,(e,s)=>{const c=s.target.assignedNodes({flatten:!0}),n=c.length>0&&c.some(g=>{var v;return g.nodeType===Node.ELEMENT_NODE||g.nodeType===Node.TEXT_NODE&&((v=g.textContent)==null?void 0:v.trim())!==""});e==="lead"?(this._leadSlotOccupied=n,this._leadHasBadge=n&&c.some(g=>{var v;return((v=g.getAttribute)==null?void 0:v.call(g,"gds-element"))==="gds-badge"})):e==="trail"?this._trailSlotOccupied=n:e==="action"&&(this._actionSlotOccupied=n)})}connectedCallback(){super.connectedCallback(),be.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"lead-has-badge":this._leadHasBadge,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return r`
      <div class="field ${V(e)}" part="_base">
        ${u(this,S,Ee).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};A=new WeakMap;S=new WeakSet;Ee=function(){const e={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return r`
      ${u(this,S,Te).call(this)} ${u(this,S,ze).call(this)}
      <div class="${V(e)}">
        ${u(this,S,Me).call(this)} ${u(this,S,Oe).call(this)}
      </div>
    `};Te=function(){return r` <slot
      name="lead"
      @slotchange=${e=>o(this,A).call(this,"lead",e)}
    ></slot>`};ze=function(){return r`<div
      class="main-slot-wrap ${V({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>o(this,A).call(this,"main",e)}
      ></slot>
    </div>`};Me=function(){return r`
      <slot
        name="action"
        @slotchange=${e=>o(this,A).call(this,"action",e)}
      ></slot>
    `};Oe=function(){return r`
      <slot
        name="trail"
        @slotchange=${e=>o(this,A).call(this,"trail",e)}
      ></slot>
    `};y.styles=[xt];t([l()],y.prototype,"size",2);t([l({type:Boolean})],y.prototype,"multiline",2);t([l({type:Boolean,reflect:!0})],y.prototype,"disabled",2);t([l({type:Boolean})],y.prototype,"invalid",2);t([X("slot:not([name])")],y.prototype,"_mainSlotElement",2);t([O()],y.prototype,"_leadSlotOccupied",2);t([O()],y.prototype,"_leadHasBadge",2);t([O()],y.prototype,"_trailSlotOccupied",2);t([O()],y.prototype,"_actionSlotOccupied",2);t([C("disabled")],y.prototype,"_handleDisabledChange",1);y=t([x("gds-field-base"),ce()],y);const _t=m`
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
      font: var(--gds-sys-text-detail-regular-s);
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
`;var wt=_t,J,Le;let E=class extends M{constructor(){super(...arguments),p(this,J)}_handleVisibilityChange(){var e;this.classList.toggle("visually-hidden",!this.errorMessage&&!((e=this.charCounter)!=null&&e[1]))}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return r`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${b(this.errorMessage,()=>r`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${u(this,J,Le).call(this)}
      </div>
    </div>`}};J=new WeakSet;Le=function(){if(!this.charCounter||this.charCounter[1]===!1)return fe;const[e,s]=this.charCounter;return r`<gds-badge variant="${s}">${e}</gds-badge>`};E.styles=[wt];t([l({type:Array})],E.prototype,"charCounter",2);t([l()],E.prototype,"errorMessage",2);t([C("charCounter"),C("errorMessage")],E.prototype,"_handleVisibilityChange",1);E=t([x("gds-form-control-footer",{dependsOn:[f,tt]})],E);const $t=m`
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
      font: var(--_font-label, var(--gds-sys-text-detail-book-m));
    }

    slot[name='supporting-text']::slotted(*) {
      font: var(--_font-supporting-text, var(--gds-sys-text-detail-regular-s));
    }

    :host(.size-small) slot[name='supporting-text'],
    :host(.size-small) ::slotted(label) {
      font: var(--_font-label, var(--gds-sys-text-detail-book-s));
    }

    #extended-supporting-text {
      opacity: 1;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: all;
      font: var(--_font-supporting-text, var(--gds-sys-text-detail-regular-s));
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
`;var kt=$t,U,Be,Q,Z,N,We;let T=class extends M{constructor(){super(...arguments),p(this,U),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,p(this,Q,()=>r`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${D("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${o(this,Z)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),p(this,Z,()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,(e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText})}),p(this,N,()=>{var e;this.showExtendedSupportingText&&((e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`))})}render(){return r`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${b(this._hasExtendedSupportingText,o(this,Q))}
      </div>

      ${u(this,U,We).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",o(this,N))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",o(this,N))}};U=new WeakSet;Be=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};Q=new WeakMap;Z=new WeakMap;N=new WeakMap;We=function(){return r`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${u(this,U,Be)}
        ></slot>
      </div>
    `};T.styles=[kt];t([l({type:Boolean,reflect:!0})],T.prototype,"showExtendedSupportingText",2);t([O()],T.prototype,"_hasExtendedSupportingText",2);t([X("#extended-supporting-text")],T.prototype,"_extendedSupportingText",2);T=t([x("gds-form-control-header",{dependsOn:[Ve,I,st]}),ce()],T);const St=m`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
      overscroll-behavior: contain;
    }
  }
`;var Ct=St,P,j,ee;let _=class extends ot(M){constructor(){super(),p(this,j),p(this,P,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",u(this,j,ee)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),u(this,j,ee).call(this,e))})}get hidden(){return o(this,P)}set hidden(e){const s=e.toString();me(this,P,s==="true"),o(this,P)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),be.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),r`<div class="item">
      ${b(e,()=>ft({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};P=new WeakMap;j=new WeakSet;ee=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};_.styles=[W,et,at];t([l()],_.prototype,"value",2);t([l({type:Boolean,reflect:!0})],_.prototype,"hidden",1);t([l({attribute:"aria-selected",reflect:!0})],_.prototype,"selected",2);t([l({type:Boolean,reflect:!0})],_.prototype,"isPlaceholder",2);t([C("isPlaceholder")],_.prototype,"_handlePlaceholderStatusChange",1);_=t([x("gds-option",{dependsOn:[we]})],_);var F,te;let z=class extends M{constructor(){super(),this.multiple=!1,this.compareWith=(e,s)=>e===s,p(this,F,rt()),p(this,te,e=>{const s=e.target;this.multiple?s.selected=!s.selected:(s.selected=!0,Array.from(this.options).forEach(i=>{i!==s&&(i.selected=!1)})),this.ariaActiveDescendantElement=s,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})}),new lt(this)}get navigableItems(){return this.visibleOptionElements}get options(){return o(this,F).value?nt(o(this,F).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(s=>{s.selected=e.some(i=>this.compareWith(i,s.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),be.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",o(this,te))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return r`<slot ${dt(o(this,F))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};F=new WeakMap;te=new WeakMap;z.styles=Ct;t([l({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],z.prototype,"multiple",2);t([l()],z.prototype,"compareWith",2);t([C("multiple")],z.prototype,"_rerenderOptions",1);z=t([x("gds-listbox",{dependsOn:[_]})],z);var Et=m`
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
    font: var(--gds-sys-text-detail-regular-s);
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    pointer-events: none;
  }

  .native-control {
    font: var(--gds-sys-text-detail-regular-m);
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
`;const Tt=m`
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
      border-color: var(--gds-sys-color-border-interactive);
      border-width: 0 0 var(--gds-sys-space-5xs) 0;
      border-style: solid;
      width: 100%;
      padding: var(--gds-sys-space-m);
      font-weight: var(--gds-sys-text-weight-regular);
      flex: 1;
      box-sizing: border-box;
      font-family: inherit;

      &:focus {
        border-color: var(--gds-sys-color-border-interactive);
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
`;var zt=Tt,$,L,Ae,se,ie,q,oe,w,ae,re,R,le,ne,de,De,G,H,Pe,Fe,B,Y;let h=class extends je{constructor(){super(...arguments),p(this,L),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,s)=>e===s,this.searchFilter=(e,s)=>s.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,p(this,$),p(this,se,()=>{var e;return r`
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
        @click=${s=>{s.stopImmediatePropagation()}}
        @input=${s=>{this.value=s.target.value,o(this,G).call(this),o(this,R).call(this,s),o(this,w).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${s=>{s.key==="ArrowDown"&&(s.preventDefault(),o(this,w).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(i=>i.focus())),s.key==="Enter"&&o(this,H).call(this)}}
      />
    `}),p(this,ie,()=>r`
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
          <span>${Je(this.displayValue)}</span>
        </slot>
      </button>
    `),p(this,q,e=>{this.open||this.dispatchCustomEvent("gds-blur",{detail:{relatedTarget:e.relatedTarget},bubbles:!1,composed:!0})}),p(this,oe,e=>{if(this.combobox){const i=e.getBoundingClientRect(),n=window.innerHeight-i.bottom,g=i.top;let v=Math.min(g,this.maxHeight);return n>g&&(v=Math.min(n,this.maxHeight)),`${v-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),p(this,w,(e,s)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:s,open:e},bubbles:!1,composed:!1})),p(this,ae,e=>{o(this,w).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),p(this,re,e=>{e.preventDefault(),e.stopPropagation(),this.value=void 0,this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),o(this,G).call(this),o(this,H).call(this)}),p(this,R,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const i=e.currentTarget;if(this.options.forEach(n=>n.hidden=!1),!i.value)return;this.options.filter(n=>!this.searchFilter(i.value,n)).forEach(n=>n.hidden=!0)}),p(this,le,e=>{var s;(s=this._elListbox)==null||s.then(i=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),i.focus();return}})}),p(this,ne,e=>{var s;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(s=this._elSearchInput)==null||s.focus();return}}),p(this,de,e=>{const s=this._elTriggerBtn;s&&(s.ariaActiveDescendantElement=e.target)}),p(this,G,()=>{this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))}),p(this,H,()=>{this.updateComplete.then(()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),p(this,B,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&o(this,w).call(this,!1,"close")&&(this.open=!1)}),p(this,Y,e=>{var s;e.key==="Tab"&&!this.searchable&&o(this,w).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,(s=this._elTriggerBtn)==null||s.focus())})}get type(){return"gds-dropdown"}get options(){return o(this,$)?Array.from(o(this,$)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(o(this,$))return Array.from(o(this,$)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var s,i;let e;return Array.isArray(this.value)?e=this.value.slice(0,5).reduce((c,n)=>{var g;return c+((g=this.options.find(v=>v.value===n))==null?void 0:g.innerText)+", "},"").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):e=(s=this.options.find(c=>c.selected))==null?void 0:s.innerText,e||((i=this.placeholder)==null?void 0:i.innerText)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",o(this,q)),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",o(this,q))}render(){return r`
      ${b(!this.plain&&!this.hideLabel,()=>r`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${b(this.supportingText.length>0,()=>r`<span slot="supporting-text" id="supporting-text">
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
        .calcMaxHeight=${o(this,oe)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[Qe(8),Ze()]:_e.DefaultMiddleware}
        @gds-ui-state=${o(this,ae)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${b(this.value&&this.multiple&&this.value.length>0,()=>r`<gds-badge
                rounded
                size=${this.size==="small"?"small":"default"}
                slot="lead"
                aria-label=${D(He`${this.value.length} options selected`)}
              >
                ${this.value.length}</gds-badge
              >`)}
          ${b(this.clearable&&this.value&&!this.disabled,()=>r`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${this.size==="small"?"xs":"small"}
                label="${D("Clear selection")}"
                @click=${o(this,re)}
                slot="action"
              >
                <gds-icon-cross-small></gds-icon-cross-small>
              </gds-button>`)}
          ${b(this.combobox&&!this.multiple,()=>o(this,se).call(this))}
          ${b(!this.combobox||this.multiple,()=>o(this,ie).call(this))}
          <gds-icon-chevron-bottom
            size=${this.size==="small"?"m":"l"}
            slot="action"
          ></gds-icon-chevron-bottom>
        </gds-field-base>

        ${b(this.searchable,()=>r`<input
              id="searchinput"
              type="text"
              aria-label="${D("Filter available options")}"
              placeholder="${D("Search")}"
              @keydown=${o(this,le)}
              @input=${o(this,R)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${qe(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${u(this,L,De)}"
          @gds-focus="${o(this,de)}"
          @keydown=${o(this,ne)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${b(u(this,L,Ae).call(this),()=>r`
          <gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.invalid?this.errorMessage:fe}
            </slot>
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,s;if(this.requestUpdate(),me(this,$,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.combobox&&!this.placeholder&&this.options.find(i=>this.compareWith(i.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(s=this.options[0])==null?void 0:s.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(i=>i.hidden=!e),e?u(this,L,Pe).call(this):(u(this,L,Fe).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const s=this.options.find(i=>i.selected);requestAnimationFrame(async()=>{await this.updateComplete,s==null||s.scrollIntoView({block:"center"})})}};$=new WeakMap;L=new WeakSet;Ae=function(){return!this.plain};se=new WeakMap;ie=new WeakMap;q=new WeakMap;oe=new WeakMap;w=new WeakMap;ae=new WeakMap;re=new WeakMap;R=new WeakMap;le=new WeakMap;ne=new WeakMap;de=new WeakMap;De=function(){this._elListbox.then(e=>{var s;this.multiple?this.value=e.selection.map(i=>i.value):(this.value=(s=e.selection[0])==null?void 0:s.value,o(this,w).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>{var i;return(i=this._elTriggerBtn)==null?void 0:i.focus()},0))),o(this,G).call(this),o(this,H).call(this)})};G=new WeakMap;H=new WeakMap;Pe=function(){this.addEventListener("blur",o(this,B)),this.addEventListener("gds-blur",o(this,B)),this.addEventListener("keydown",o(this,Y))};Fe=function(){this.removeEventListener("blur",o(this,B)),this.removeEventListener("gds-blur",o(this,B)),this.removeEventListener("keydown",o(this,Y))};B=new WeakMap;Y=new WeakMap;h.styles=[W,Et,zt];t([l({attribute:"supporting-text"})],h.prototype,"supportingText",2);t([l({type:Boolean,reflect:!0})],h.prototype,"open",2);t([l({type:Boolean,reflect:!0})],h.prototype,"searchable",2);t([l({type:Boolean,reflect:!0})],h.prototype,"multiple",2);t([l({type:Boolean,reflect:!0})],h.prototype,"clearable",2);t([l({type:Boolean,reflect:!0})],h.prototype,"combobox",2);t([l()],h.prototype,"compareWith",2);t([l()],h.prototype,"searchFilter",2);t([l({type:Boolean,attribute:"sync-popover-width"})],h.prototype,"syncPopoverWidth",2);t([l({type:Number,attribute:"max-height"})],h.prototype,"maxHeight",2);t([l({reflect:!0})],h.prototype,"size",2);t([l({type:Boolean,attribute:"hide-label"})],h.prototype,"hideLabel",2);t([l({type:Boolean})],h.prototype,"plain",2);t([l({type:Boolean})],h.prototype,"disableMobileStyles",2);t([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],h.prototype,"showExtendedSupportingText",2);t([X("#trigger")],h.prototype,"_elTriggerBtn",2);t([pt("#listbox")],h.prototype,"_elListbox",2);t([X("#searchinput")],h.prototype,"_elSearchInput",2);t([Ne({attributes:!0,childList:!0,subtree:!0,characterData:!0})],h.prototype,"_handleLightDOMChange",1);t([C("value")],h.prototype,"_handleValueChange",1);t([C("open")],h.prototype,"_handleOpenChange",1);h=t([ce()],h);let ve=class extends pe(he(ge(h))){};ve=t([x("gds-dropdown",{dependsOn:[T,E,y,z,_e,we,it,ct]})],ve);export{ve as G,_ as a,I as b,K as c,f as d,ft as e,Et as f,a as g,T as h,E as i,y as j,jt as k,pt as r};
