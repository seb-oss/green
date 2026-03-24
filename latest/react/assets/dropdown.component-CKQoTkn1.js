import{i as m,h as d,G as z,t as O,_ as t,n as l,g as x,b as a,c as u,r as M,d as o,E as ze,e as Me}from"./tokens.style-DdV6ipms.js";import{l as ye,m as B,s as Je}from"./runtime-nRyYmvPb.js";import{a as Qe,e as q,w as S}from"./watch-Bh1rs_BK.js";import{G as Ze,o as et,a as tt,b as st}from"./button.component-dABcb4XE.js";import{w as ve,c as it,b as fe,d as ot,a as me,f as at,s as c,g as xe,p as rt,h as We,j as lt,o as nt}from"./icon.component-CPDtKq9S.js";import{n as v}from"./when-BR7zwNJC.js";import{G as Oe,o as dt,f as ct}from"./popover.component-BOmsK-AM.js";import{e as $}from"./class-map-DX7GvrIr.js";import{T as _e,c as pt}from"./transitional-styles-R5Ln4I92.js";import{I as ht}from"./triangle-exclamation.component-aE9kpZQ2.js";import{I as gt,a as ut}from"./chevron-bottom.component-BKb7a6HV.js";import{F as bt,o as yt,e as vt,L as ft,u as mt,n as xt}from"./unwrap-slots-Bc9cWLw4.js";import{I as Le}from"./checkmark.component-DOQOUXBd.js";import{I as _t}from"./cross-small.component-FmgQJDe9.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wt(e){return(s,i)=>Qe(s,i,{async get(){var p;return await this.updateComplete,((p=this.renderRoot)==null?void 0:p.querySelector(e))??null}})}const kt=m`
  :host {
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
`;var $t=kt;let r=class extends ve(it(fe(ot(me(at(z)))))){constructor(){super(...arguments),this.level="2"}render(){return d`<slot></slot>`}};r.styles=[O,$t];t([c()],r.prototype,"display",2);t([l()],r.prototype,"level",2);t([c(xe("content"))],r.prototype,"color",2);t([c(xe("background"))],r.prototype,"background",2);t([c({styleTemplate:function(e,s){const i=this,[p,n=i["border-style"]||"solid",g=i["border-color"]||"subtle-01"]=s,y=`var(--gds-sys-space-${p})`,Ye=rt(g,"border",i.level);return`border: ${y} ${n} ${Ye};`}})],r.prototype,"border",2);t([c(xe("border"))],r.prototype,"border-color",2);t([c(We)],r.prototype,"border-width",2);t([c()],r.prototype,"border-style",2);t([c(lt)],r.prototype,"border-radius",2);t([c({valueTemplate:e=>`var(--gds-sys-shadow-${e}-01), var(--gds-sys-shadow-${e}-02)`})],r.prototype,"box-shadow",2);t([c()],r.prototype,"opacity",2);t([c()],r.prototype,"overflow",2);t([c()],r.prototype,"box-sizing",2);t([c()],r.prototype,"z-index",2);t([c({styleTemplate:(e,s)=>`font: var(--gds-sys-text-${s[0]});`})],r.prototype,"font",2);t([c({valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],r.prototype,"font-weight",2);t([c()],r.prototype,"text-align",2);t([c()],r.prototype,"text-wrap",2);t([c()],r.prototype,"overflow-wrap",2);t([c()],r.prototype,"white-space",2);t([c({...We,styleTemplate:(e,s)=>{const i=s[0],p=s[1]||i;return`gap: ${i} ${p};`},cacheOverrideKey:"flex"})],r.prototype,"gap",2);t([c()],r.prototype,"align-items",2);t([c()],r.prototype,"align-content",2);t([c()],r.prototype,"justify-content",2);t([c()],r.prototype,"justify-items",2);t([c()],r.prototype,"flex-direction",2);t([c()],r.prototype,"flex-wrap",2);t([c()],r.prototype,"place-items",2);t([c()],r.prototype,"place-content",2);t([c()],r.prototype,"aspect-ratio",2);t([c()],r.prototype,"cursor",2);t([c()],r.prototype,"pointer-events",2);r=t([x("gds-div")],r);let H=class extends r{constructor(){super(),this.variant="primary",this.padding="m;m{xl}",this["border-radius"]="s",this.gap="m;m{l}"}render(){return d`<slot></slot>`}};H.styles=[O,m`
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
    `];t([c({styleTemplate:function(e,s){let i,p,n;switch(s[0]){case"primary":i="transparent",p=`var(--gds-sys-color-l${this.level}-neutral-01)`,n="var(--gds-sys-color-content-neutral-01)";break;case"secondary":i="var(--gds-sys-color-border-subtle-01)",p=`var(--gds-sys-color-l${this.level}-neutral-02)`,n="var(--gds-sys-color-content-neutral-01)";break;case"tertiary":i="transparent",p=`var(--gds-sys-color-l${this.level}-neutral-02)`,n="var(--gds-sys-color-content-neutral-01)";break;case"brand-01":i="transparent",p=`var(--gds-sys-color-l${this.level}-brand-01)`,n="var(--gds-sys-color-content-inversed)";break;case"brand-02":i="transparent",p=`var(--gds-sys-color-l${this.level}-brand-02)`,n="var(--gds-sys-color-content-brand-02)";break;case"positive":case"negative":case"warning":case"information":case"notice":i=`var(--gds-sys-color-border-${s[0]}-02)`,p=`var(--gds-sys-color-l${this.level}-${s[0]}-01)`,n=`var(--gds-sys-color-content-${s[0]}-01)`;break;default:i="transparent",p=`var(--gds-sys-color-l${this.level}-neutral-01)`,n="var(--gds-sys-color-content-neutral-01)";break}return`
      --_border-color: ${i};
      --_background-color: ${p};
      --_color: ${n};
      `}})],H.prototype,"variant",2);H=t([x("gds-card")],H);const St=m`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
`;var Ct=St;let j=class extends r{render(){return d`<slot></slot>`}};j.styles=[O,Ct];j=t([x("gds-flex")],j);const Et=m`
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
`;var Tt=Et,R,we,U,Be,X,Ae,Y,De;let f=class extends ve(fe(me(z))){constructor(){super(...arguments),a(this,R),a(this,U),a(this,X),a(this,Y),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1,this.leadSlotOccupied=!1}render(){const e=$({badge:!0,[this.variant]:!0,[this.size]:this.size==="small",notification:this.notification,"with-content":this.notification&&this.mainSlotOccupied,rounded:this.rounded});return d`
      <div class="${e}">
        ${[u(this,U,Be).call(this),u(this,X,Ae).call(this),u(this,Y,De).call(this)]}
      </div>
    `}};R=new WeakSet;we=function(e,s){const p=e.target.assignedNodes({flatten:!0});this[s]=p.length>0&&p.some(n=>{var g;return n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE&&((g=n.textContent)==null?void 0:g.trim())!==""})};U=new WeakSet;Be=function(){if(this.size!=="small"||!this.notification)return d`<slot
        name="lead"
        @slotchange=${e=>u(this,R,we).call(this,e,"leadSlotOccupied")}
      ></slot>`};X=new WeakSet;Ae=function(){return d`<slot
      @slotchange=${e=>u(this,R,we).call(this,e,"mainSlotOccupied")}
    ></slot>`};Y=new WeakSet;De=function(){return d`<slot name="trail"></slot>`};f.styles=[O,Tt];t([l()],f.prototype,"variant",2);t([l({type:String})],f.prototype,"size",2);t([l({attribute:"notification",type:Boolean,reflect:!0})],f.prototype,"notification",2);t([l({attribute:"rounded",type:Boolean,reflect:!0})],f.prototype,"rounded",2);t([M()],f.prototype,"mainSlotOccupied",2);t([M()],f.prototype,"leadSlotOccupied",2);f=t([x("gds-badge",{dependsOn:[j]})],f);const zt=e=>Pe({...e,type:"checkbox"}),ts=e=>Pe({...e,type:"radio"}),Pe=e=>{const{type:s,checked:i,indeterminate:p,disabled:n,invalid:g}=e;return d`
    <div class="rbcb ${$({"rbcb--checkbox":s==="checkbox","rbcb--radio":s==="radio","--checked":i,"--indeterminate":p,"--disabled":n,"--invalid":g})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${v(s==="checkbox",()=>d`
            <gds-icon-minus-small
              class=${$({rbcb__icon:!0,"rbcb__icon--visible":p})}
              stroke="4"
            ></gds-icon-minus-small>
            <gds-icon-checkmark
              class=${$({rbcb__icon:!0,"rbcb__icon--visible":i})}
              stroke="4"
            ></gds-icon-checkmark>
          `)}
      </div>
    </div>
  `},Mt=m`
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
`;var Wt=Mt,L,J,Fe,ke,He,$e,Ge,Se,Ie,Ce,Ve;let b=class extends z{constructor(){super(),a(this,J),a(this,ke),a(this,$e),a(this,Se),a(this,Ce),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._leadHasBadge=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,a(this,L,(e,s)=>{const p=s.target.assignedNodes({flatten:!0}),n=p.length>0&&p.some(g=>{var y;return g.nodeType===Node.ELEMENT_NODE||g.nodeType===Node.TEXT_NODE&&((y=g.textContent)==null?void 0:y.trim())!==""});e==="lead"?(this._leadSlotOccupied=n,this._leadHasBadge=n&&p.some(g=>{var y;return((y=g.getAttribute)==null?void 0:y.call(g,"gds-element"))==="gds-badge"})):e==="trail"?this._trailSlotOccupied=n:e==="action"&&(this._actionSlotOccupied=n)})}connectedCallback(){super.connectedCallback(),_e.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"lead-has-badge":this._leadHasBadge,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return d`
      <div class="field ${$(e)}" part="_base">
        ${u(this,J,Fe).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};L=new WeakMap;J=new WeakSet;Fe=function(){const e={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return d`
      ${u(this,ke,He).call(this)} ${u(this,$e,Ge).call(this)}
      <div class="${$(e)}">
        ${u(this,Se,Ie).call(this)} ${u(this,Ce,Ve).call(this)}
      </div>
    `};ke=new WeakSet;He=function(){return d` <slot
      name="lead"
      @slotchange=${e=>o(this,L).call(this,"lead",e)}
    ></slot>`};$e=new WeakSet;Ge=function(){return d`<div
      class="main-slot-wrap ${$({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>o(this,L).call(this,"main",e)}
      ></slot>
    </div>`};Se=new WeakSet;Ie=function(){return d`
      <slot
        name="action"
        @slotchange=${e=>o(this,L).call(this,"action",e)}
      ></slot>
    `};Ce=new WeakSet;Ve=function(){return d`
      <slot
        name="trail"
        @slotchange=${e=>o(this,L).call(this,"trail",e)}
      ></slot>
    `};b.styles=[Wt];t([l()],b.prototype,"size",2);t([l({type:Boolean})],b.prototype,"multiline",2);t([l({type:Boolean,reflect:!0})],b.prototype,"disabled",2);t([l({type:Boolean})],b.prototype,"invalid",2);t([q("slot:not([name])")],b.prototype,"_mainSlotElement",2);t([M()],b.prototype,"_leadSlotOccupied",2);t([M()],b.prototype,"_leadHasBadge",2);t([M()],b.prototype,"_trailSlotOccupied",2);t([M()],b.prototype,"_actionSlotOccupied",2);t([S("disabled")],b.prototype,"_handleDisabledChange",1);b=t([x("gds-field-base"),ye()],b);const Ot=m`
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
`;var Lt=Ot,Q,Ne;let C=class extends z{constructor(){super(...arguments),a(this,Q)}_handleVisibilityChange(){var e;this.classList.toggle("visually-hidden",!this.errorMessage&&!((e=this.charCounter)!=null&&e[1]))}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return d`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${v(this.errorMessage,()=>d`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${u(this,Q,Ne).call(this)}
      </div>
    </div>`}};Q=new WeakSet;Ne=function(){if(!this.charCounter||this.charCounter[1]===!1)return ze;const[e,s]=this.charCounter;return d`<gds-badge variant="${s}">${e}</gds-badge>`};C.styles=[Lt];t([l({type:Array})],C.prototype,"charCounter",2);t([l()],C.prototype,"errorMessage",2);t([S("charCounter"),S("errorMessage")],C.prototype,"_handleVisibilityChange",1);C=t([x("gds-form-control-footer",{dependsOn:[f,ht]})],C);const Bt=m`
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
`;var At=Bt,Ee,je,Z,ee,G,te,qe;let E=class extends z{constructor(){super(...arguments),a(this,Ee),a(this,te),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,a(this,Z,()=>d`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${B("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${o(this,ee)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),a(this,ee,()=>{var s;this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText,cancelable:!0})&&(this.showExtendedSupportingText=!this.showExtendedSupportingText,(s=this._extendedSupportingText)==null||s.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"))}),a(this,G,()=>{var e;this.showExtendedSupportingText&&((e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`))})}render(){return d`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${v(this._hasExtendedSupportingText,o(this,Z))}
      </div>

      ${u(this,te,qe).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",o(this,G))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",o(this,G))}};Ee=new WeakSet;je=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};Z=new WeakMap;ee=new WeakMap;G=new WeakMap;te=new WeakSet;qe=function(){return d`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${u(this,Ee,je)}
        ></slot>
      </div>
    `};E.styles=[At];t([l({type:Boolean,reflect:!0})],E.prototype,"showExtendedSupportingText",2);t([M()],E.prototype,"_hasExtendedSupportingText",2);t([q("#extended-supporting-text")],E.prototype,"_extendedSupportingText",2);E=t([x("gds-form-control-header",{dependsOn:[Ze,H,gt]}),ye()],E);const Dt=m`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
      overscroll-behavior: contain;
    }
  }
`;var Pt=Dt,A,I,se;let _=class extends bt(z){constructor(){super(),a(this,I),a(this,A,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",u(this,I,se)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),u(this,I,se).call(this,e))})}get hidden(){return o(this,A)}set hidden(e){const s=e.toString();Me(this,A,s==="true"),o(this,A)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),_e.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),d`<div class="item">
      ${v(e,()=>zt({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};A=new WeakMap;I=new WeakSet;se=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};_.styles=[O,pt,yt];t([l()],_.prototype,"value",2);t([l({type:Boolean,reflect:!0})],_.prototype,"hidden",1);t([l({attribute:"aria-selected",reflect:!0})],_.prototype,"selected",2);t([l({type:Boolean,reflect:!0})],_.prototype,"isPlaceholder",2);t([S("isPlaceholder")],_.prototype,"_handlePlaceholderStatusChange",1);_=t([x("gds-option",{dependsOn:[Le]})],_);var D,ie;let T=class extends z{constructor(){super(),this.multiple=!1,this.compareWith=(e,s)=>e===s,a(this,D,vt()),a(this,ie,e=>{const s=e.target;this.multiple?s.selected=!s.selected:(s.selected=!0,Array.from(this.options).forEach(i=>{i!==s&&(i.selected=!1)})),this.ariaActiveDescendantElement=s,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})}),new ft(this)}get navigableItems(){return this.visibleOptionElements}get options(){return o(this,D).value?mt(o(this,D).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(s=>{s.selected=e.some(i=>this.compareWith(i,s.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),_e.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",o(this,ie))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return d`<slot ${xt(o(this,D))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};D=new WeakMap;ie=new WeakMap;T.styles=Pt;t([l({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],T.prototype,"multiple",2);t([l()],T.prototype,"compareWith",2);t([S("multiple")],T.prototype,"_rerenderOptions",1);T=t([x("gds-listbox",{dependsOn:[_]})],T);var Ft=m`
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
`;const Ht=m`
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
`;var Gt=Ht,k,oe,Re,ae,re,V,le,w,ne,de,N,ce,pe,he,ge,Ke,P,F,ue,Ue,be,Xe,W,K;let h=class extends tt{constructor(){super(...arguments),a(this,oe),a(this,ge),a(this,ue),a(this,be),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,s)=>e===s,this.searchFilter=(e,s)=>s.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,a(this,k,void 0),a(this,ae,()=>{var e;return d`
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
        @input=${s=>{this.value=s.target.value,o(this,P).call(this),o(this,N).call(this,s),o(this,w).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${s=>{s.key==="ArrowDown"&&(s.preventDefault(),o(this,w).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(i=>i.focus())),s.key==="Enter"&&o(this,F).call(this)}}
      />
    `}),a(this,re,()=>d`
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
          <span>${nt(this.displayValue)}</span>
        </slot>
      </button>
    `),a(this,V,e=>{this.open||this.dispatchCustomEvent("gds-blur",{detail:{relatedTarget:e.relatedTarget},bubbles:!1,composed:!0})}),a(this,le,e=>{if(this.combobox){const i=e.getBoundingClientRect(),n=window.innerHeight-i.bottom,g=i.top;let y=Math.min(g,this.maxHeight);return n>g&&(y=Math.min(n,this.maxHeight)),`${y-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),a(this,w,(e,s)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:s,open:e},bubbles:!1,composed:!1})),a(this,ne,e=>{o(this,w).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),a(this,de,e=>{e.preventDefault(),e.stopPropagation(),this.value=void 0,this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),o(this,P).call(this),o(this,F).call(this)}),a(this,N,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const i=e.currentTarget;if(this.options.forEach(n=>n.hidden=!1),!i.value)return;this.options.filter(n=>!this.searchFilter(i.value,n)).forEach(n=>n.hidden=!0)}),a(this,ce,e=>{var s;(s=this._elListbox)==null||s.then(i=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),i.focus();return}})}),a(this,pe,e=>{var s;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(s=this._elSearchInput)==null||s.focus();return}}),a(this,he,e=>{const s=this._elTriggerBtn;s&&(s.ariaActiveDescendantElement=e.target)}),a(this,P,()=>{this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))}),a(this,F,()=>{this.updateComplete.then(()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),a(this,W,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&o(this,w).call(this,!1,"close")&&(this.open=!1)}),a(this,K,e=>{var s;e.key==="Tab"&&!this.searchable&&o(this,w).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,(s=this._elTriggerBtn)==null||s.focus())})}get type(){return"gds-dropdown"}get options(){return o(this,k)?Array.from(o(this,k)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(o(this,k))return Array.from(o(this,k)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var s,i;let e;return Array.isArray(this.value)?e=this.value.slice(0,5).reduce((p,n)=>{var g;return p+((g=this.options.find(y=>y.value===n))==null?void 0:g.innerText)+", "},"").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):e=(s=this.options.find(p=>p.selected))==null?void 0:s.innerText,e||((i=this.placeholder)==null?void 0:i.innerText)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",o(this,V)),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",o(this,V))}render(){return d`
      ${v(!this.plain&&!this.hideLabel,()=>d`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${v(this.supportingText.length>0,()=>d`<span slot="supporting-text" id="supporting-text">
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
        .calcMaxHeight=${o(this,le)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[dt(8),ct()]:Oe.DefaultMiddleware}
        @gds-ui-state=${o(this,ne)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${v(this.value&&this.multiple&&this.value.length>0,()=>d`<gds-badge
                rounded
                size=${this.size==="small"?"small":"default"}
                slot="lead"
                aria-label=${B(Je`${this.value.length} options selected`)}
              >
                ${this.value.length}</gds-badge
              >`)}
          ${v(this.clearable&&!this.disabled&&(Array.isArray(this.value)?this.value.length>0:!!this.value),()=>d`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${this.size==="small"?"xs":"small"}
                label="${B("Clear selection")}"
                @click=${o(this,de)}
                slot="action"
              >
                <gds-icon-cross-small></gds-icon-cross-small>
              </gds-button>`)}
          ${v(this.combobox&&!this.multiple,()=>o(this,ae).call(this))}
          ${v(!this.combobox||this.multiple,()=>o(this,re).call(this))}
          <gds-icon-chevron-bottom
            size=${this.size==="small"?"m":"l"}
            slot="action"
          ></gds-icon-chevron-bottom>
        </gds-field-base>

        ${v(this.searchable,()=>d`<input
              id="searchinput"
              type="text"
              aria-label="${B("Filter available options")}"
              placeholder="${B("Search")}"
              @keydown=${o(this,ce)}
              @input=${o(this,N)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${st(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${u(this,ge,Ke)}"
          @gds-focus="${o(this,he)}"
          @keydown=${o(this,pe)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${v(u(this,oe,Re).call(this),()=>d`
          <gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.invalid?this.errorMessage:ze}
            </slot>
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,s;if(this.requestUpdate(),Me(this,k,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.combobox&&!this.placeholder&&this.options.find(i=>this.compareWith(i.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(s=this.options[0])==null?void 0:s.value),this._handleValueChange()}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(i=>i.hidden=!e),e?u(this,ue,Ue).call(this):(u(this,be,Xe).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const s=this.options.find(i=>i.selected);requestAnimationFrame(async()=>{await this.updateComplete,s==null||s.scrollIntoView({block:"center"})})}};k=new WeakMap;oe=new WeakSet;Re=function(){return!this.plain};ae=new WeakMap;re=new WeakMap;V=new WeakMap;le=new WeakMap;w=new WeakMap;ne=new WeakMap;de=new WeakMap;N=new WeakMap;ce=new WeakMap;pe=new WeakMap;he=new WeakMap;ge=new WeakSet;Ke=function(){this._elListbox.then(e=>{var s;this.multiple?this.value=e.selection.map(i=>i.value):(this.value=(s=e.selection[0])==null?void 0:s.value,o(this,w).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>{var i;return(i=this._elTriggerBtn)==null?void 0:i.focus()},0))),o(this,P).call(this),o(this,F).call(this)})};P=new WeakMap;F=new WeakMap;ue=new WeakSet;Ue=function(){this.addEventListener("blur",o(this,W)),this.addEventListener("gds-blur",o(this,W)),this.addEventListener("keydown",o(this,K))};be=new WeakSet;Xe=function(){this.removeEventListener("blur",o(this,W)),this.removeEventListener("gds-blur",o(this,W)),this.removeEventListener("keydown",o(this,K))};W=new WeakMap;K=new WeakMap;h.styles=[O,Ft,Gt];t([l({attribute:"supporting-text"})],h.prototype,"supportingText",2);t([l({type:Boolean,reflect:!0})],h.prototype,"open",2);t([l({type:Boolean,reflect:!0})],h.prototype,"searchable",2);t([l({type:Boolean,reflect:!0})],h.prototype,"multiple",2);t([l({type:Boolean,reflect:!0})],h.prototype,"clearable",2);t([l({type:Boolean,reflect:!0})],h.prototype,"combobox",2);t([l()],h.prototype,"compareWith",2);t([l()],h.prototype,"searchFilter",2);t([l({type:Boolean,attribute:"sync-popover-width"})],h.prototype,"syncPopoverWidth",2);t([l({type:Number,attribute:"max-height"})],h.prototype,"maxHeight",2);t([l({reflect:!0})],h.prototype,"size",2);t([l({type:Boolean,attribute:"hide-label"})],h.prototype,"hideLabel",2);t([l({type:Boolean})],h.prototype,"plain",2);t([l({type:Boolean})],h.prototype,"disableMobileStyles",2);t([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],h.prototype,"showExtendedSupportingText",2);t([q("#trigger")],h.prototype,"_elTriggerBtn",2);t([wt("#listbox")],h.prototype,"_elListbox",2);t([q("#searchinput")],h.prototype,"_elSearchInput",2);t([et({attributes:!0,childList:!0,subtree:!0,characterData:!0})],h.prototype,"_handleLightDOMChange",1);t([S("value")],h.prototype,"_handleValueChange",1);t([S("open")],h.prototype,"_handleOpenChange",1);h=t([ye()],h);let Te=class extends ve(fe(me(h))){};Te=t([x("gds-dropdown",{dependsOn:[E,C,b,T,Oe,Le,ut,_t]})],Te);export{Te as G,_ as a,H as b,j as c,f as d,zt as e,Ft as f,r as g,E as h,C as i,b as j,ts as k,wt as r};
