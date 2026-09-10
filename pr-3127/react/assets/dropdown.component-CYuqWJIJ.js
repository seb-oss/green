import{i as k,t as N,_ as t,g as S,h as r,f as Ee,w as Te,m as Me,G as D,b as i,d as n,n as o,r as $,c as s,A as ze,e as E}from"./declarative-layout-mixins-BS4dSwRN.js";import{l as me,m as W,s as Xe}from"./runtime-Cgryh99k.js";import{e as V,w as T,a as Ye}from"./watch-rsnQmdjn.js";import{o as Je}from"./icon.component-BKEu8ijP.js";import{n as u}from"./when-CI7b_ccM.js";import{G as We,o as Qe,f as Ze}from"./popover.component-lqPOR2DV.js";import{e as x}from"./class-map-DmEGGV1h.js";import{T as ye,c as et}from"./transitional-styles-BpLaneQw.js";import{a as tt,G as st}from"./card.component-CHCUPIlh.js";import{I as it}from"./triangle-exclamation.component-CMzHeJnN.js";import{G as at,o as ot,a as rt}from"./button.component-1xOLJkiW.js";import{I as lt,a as nt}from"./chevron-bottom.component-BD1p8OzJ.js";import{F as dt,m as ct,a as ht,L as pt}from"./menu-listbox.style-XQI27dSY.js";import{I as Oe}from"./checkmark.component-CVzeIYvP.js";import{I as gt}from"./cross-small.component-P6AOPwkS.js";const ut=k`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-neutral-02);
  }
`;var bt=ut;let G=class extends tt{render(){return r`<slot></slot>`}};G.styles=[N,bt];G=t([S("gds-flex")],G);const ft=k`
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
      --_color: var(--gds-sys-color-content-neutral-01);
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
`;var vt=ft,q,xe,U,Le,K,Be,X,Ae;let b=class extends Ee(Te(Me(D))){constructor(){super(...arguments),i(this,q),i(this,U),i(this,K),i(this,X),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1,this.leadSlotOccupied=!1}render(){const e=x({badge:!0,[this.variant]:!0,[this.size]:this.size==="small",notification:this.notification,"with-content":this.notification&&this.mainSlotOccupied,rounded:this.rounded});return r`
      <div class="${e}">
        ${[n(this,U,Le).call(this),n(this,K,Be).call(this),n(this,X,Ae).call(this)]}
      </div>
    `}};q=new WeakSet;xe=function(e,a){const h=e.target.assignedNodes({flatten:!0});this[a]=h.length>0&&h.some(l=>l.nodeType===Node.ELEMENT_NODE||l.nodeType===Node.TEXT_NODE&&l.textContent?.trim()!=="")};U=new WeakSet;Le=function(){if(this.size!=="small"||!this.notification)return r`<slot
        name="lead"
        @slotchange=${e=>n(this,q,xe).call(this,e,"leadSlotOccupied")}
      ></slot>`};K=new WeakSet;Be=function(){return r`<slot
      @slotchange=${e=>n(this,q,xe).call(this,e,"mainSlotOccupied")}
    ></slot>`};X=new WeakSet;Ae=function(){return r`<slot name="trail"></slot>`};b.styles=[N,vt];t([o()],b.prototype,"variant",2);t([o({type:String})],b.prototype,"size",2);t([o({attribute:"notification",type:Boolean,reflect:!0})],b.prototype,"notification",2);t([o({attribute:"rounded",type:Boolean,reflect:!0})],b.prototype,"rounded",2);t([$()],b.prototype,"mainSlotOccupied",2);t([$()],b.prototype,"leadSlotOccupied",2);b=t([S("gds-badge",{dependsOn:[G]})],b);const mt=e=>yt({...e,type:"checkbox"}),yt=e=>{const{type:a,checked:c,indeterminate:h,disabled:l,invalid:g}=e;return r`
    <div class="rbcb ${x({"rbcb--checkbox":a==="checkbox","rbcb--radio":a==="radio","--checked":c,"--indeterminate":h,"--disabled":l,"--invalid":g})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${u(a==="checkbox",()=>r`
            <gds-icon-minus-small
              class=${x({rbcb__icon:!0,"rbcb__icon--visible":h})}
              stroke="4"
            ></gds-icon-minus-small>
            <gds-icon-checkmark
              class=${x({rbcb__icon:!0,"rbcb__icon--visible":c})}
              stroke="4"
            ></gds-icon-checkmark>
          `)}
      </div>
    </div>
  `},xt=k`
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
`;var _t=xt,z,Y,De,_e,Fe,we,Ie,ke,Pe,Se,He;let p=class extends D{constructor(){super(),i(this,Y),i(this,_e),i(this,we),i(this,ke),i(this,Se),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._leadHasBadge=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,i(this,z,(e,a)=>{const h=a.target.assignedNodes({flatten:!0}),l=h.length>0&&h.some(g=>g.nodeType===Node.ELEMENT_NODE||g.nodeType===Node.TEXT_NODE&&g.textContent?.trim()!=="");e==="lead"?(this._leadSlotOccupied=l,this._leadHasBadge=l&&h.some(g=>g.getAttribute?.("gds-element")==="gds-badge")):e==="trail"?this._trailSlotOccupied=l:e==="action"&&(this._actionSlotOccupied=l)})}connectedCallback(){super.connectedCallback(),ye.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"lead-has-badge":this._leadHasBadge,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return r`
      <div class="field ${x(e)}" part="_base">
        ${n(this,Y,De).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};z=new WeakMap;Y=new WeakSet;De=function(){const e={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return r`
      ${n(this,_e,Fe).call(this)} ${n(this,we,Ie).call(this)}
      <div class="${x(e)}">
        ${n(this,ke,Pe).call(this)} ${n(this,Se,He).call(this)}
      </div>
    `};_e=new WeakSet;Fe=function(){return r` <slot
      name="lead"
      @slotchange=${e=>s(this,z).call(this,"lead",e)}
    ></slot>`};we=new WeakSet;Ie=function(){return r`<div
      class="main-slot-wrap ${x({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>s(this,z).call(this,"main",e)}
      ></slot>
    </div>`};ke=new WeakSet;Pe=function(){return r`
      <slot
        name="action"
        @slotchange=${e=>s(this,z).call(this,"action",e)}
      ></slot>
    `};Se=new WeakSet;He=function(){return r`
      <slot
        name="trail"
        @slotchange=${e=>s(this,z).call(this,"trail",e)}
      ></slot>
    `};p.styles=[_t];t([o()],p.prototype,"size",2);t([o({type:Boolean})],p.prototype,"multiline",2);t([o({type:Boolean,reflect:!0})],p.prototype,"disabled",2);t([o({type:Boolean})],p.prototype,"invalid",2);t([V("slot:not([name])")],p.prototype,"_mainSlotElement",2);t([$()],p.prototype,"_leadSlotOccupied",2);t([$()],p.prototype,"_leadHasBadge",2);t([$()],p.prototype,"_trailSlotOccupied",2);t([$()],p.prototype,"_actionSlotOccupied",2);t([T("disabled")],p.prototype,"_handleDisabledChange",1);p=t([S("gds-field-base"),me()],p);const wt=k`
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
        font: var(--gds-sys-text-detail-xs-regular);
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
`;var kt=wt,J,Ge;let _=class extends D{constructor(){super(...arguments),i(this,J)}_handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter?.[1])}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return r`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${u(this.errorMessage,()=>r`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${n(this,J,Ge).call(this)}
      </div>
    </div>`}};J=new WeakSet;Ge=function(){if(!this.charCounter||this.charCounter[1]===!1)return ze;const[e,a]=this.charCounter;return r`<gds-badge variant="${a}">${e}</gds-badge>`};_.styles=[kt];t([o({type:Array})],_.prototype,"charCounter",2);t([o()],_.prototype,"errorMessage",2);t([T("charCounter"),T("errorMessage")],_.prototype,"_handleVisibilityChange",1);_=t([S("gds-form-control-footer",{dependsOn:[b,it]})],_);const St=k`
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
`;var $t=St,$e,Ne,Q,Z,F,ee,Ve;let w=class extends D{constructor(){super(...arguments),i(this,$e),i(this,ee),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,i(this,Q,()=>r`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${W("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${s(this,Z)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),i(this,Z,()=>{this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText,cancelable:!0})&&(this.showExtendedSupportingText=!this.showExtendedSupportingText,this._extendedSupportingText?.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"))}),i(this,F,()=>{this.showExtendedSupportingText&&this._extendedSupportingText?.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`)})}render(){return r`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${u(this._hasExtendedSupportingText,s(this,Q))}
      </div>

      ${n(this,ee,Ve).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",s(this,F))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",s(this,F))}};$e=new WeakSet;Ne=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};Q=new WeakMap;Z=new WeakMap;F=new WeakMap;ee=new WeakSet;Ve=function(){return r`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${n(this,$e,Ne)}
        ></slot>
      </div>
    `};w.styles=[$t];t([o({type:Boolean,reflect:!0})],w.prototype,"showExtendedSupportingText",2);t([$()],w.prototype,"_hasExtendedSupportingText",2);t([V("#extended-supporting-text")],w.prototype,"_extendedSupportingText",2);w=t([S("gds-form-control-header",{dependsOn:[at,st,lt]}),me()],w);var Ct=k`
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
`;const Et=k`
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
`;var Tt=Et,O,I,te;let f=class extends dt(D){constructor(){super(),i(this,I),i(this,O,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",n(this,I,te)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),n(this,I,te).call(this,e))})}get hidden(){return s(this,O)}set hidden(e){const a=e.toString();E(this,O,a==="true"),s(this,O)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("tabindex","-1"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),ye.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){const e=this.parentElement?.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),r`<div class="item">
      ${u(e,()=>mt({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};O=new WeakMap;I=new WeakSet;te=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};f.styles=[N,et,ct];t([o()],f.prototype,"value",2);t([o({type:Boolean,reflect:!0})],f.prototype,"hidden",1);t([o({attribute:"aria-selected",reflect:!0,converter:{fromAttribute:e=>e==="true",toAttribute:e=>e?"true":"false"}})],f.prototype,"selected",2);t([o({type:Boolean,reflect:!0})],f.prototype,"isPlaceholder",2);t([T("isPlaceholder")],f.prototype,"_handlePlaceholderStatusChange",1);f=t([S("gds-option",{dependsOn:[Oe]})],f);var m,se,qe,ie,ae,P,oe,v,re,le,H,ne,de,ce,he,pe,je,ge,Re,L,B,ue,be,A,y,C,fe,Ue,ve,Ke,M,j;let d=class extends rt{constructor(){super(),i(this,se),i(this,pe),i(this,ge),i(this,y),i(this,fe),i(this,ve),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,a)=>e===a,this.searchFilter=(e,a)=>a.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,i(this,m,void 0),i(this,ie,()=>r`
      <input
        id="trigger"
        role="combobox"
        class="native-control"
        aria-expanded="${this.open}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        placeholder="${this.placeholder?.innerHTML}"
        name="trigger"
        aria-label="${this.label} ${this.displayValue}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
        .value=${this.value}
        @click=${e=>{e.stopImmediatePropagation()}}
        @input=${e=>{n(this,y,C).call(this,e.target.value,{emitChange:!1}),s(this,H).call(this,e),s(this,v).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{e.key==="ArrowDown"&&(e.preventDefault(),s(this,v).call(this,!0,"show")&&(this.open=!0),this.updateComplete.then(()=>s(this,L).call(this))),e.key==="Enter"&&n(this,y,C).call(this,this.value,{emitInput:!1})}}
      />
    `),i(this,ae,()=>r`
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
    `),i(this,P,e=>{this.open||this.dispatchCustomEvent("gds-blur",{detail:{relatedTarget:e.relatedTarget},bubbles:!1,composed:!0})}),i(this,oe,e=>{if(this.combobox){const c=e.getBoundingClientRect(),l=window.innerHeight-c.bottom,g=c.top;let R=Math.min(g,this.maxHeight);return l>g&&(R=Math.min(l,this.maxHeight)),`${R-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),i(this,v,(e,a)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:a,open:e},bubbles:!1,composed:!1})),i(this,re,e=>{s(this,v).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),i(this,le,e=>{e.preventDefault(),e.stopPropagation(),n(this,y,C).call(this,void 0,{beforeDispatch:()=>this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0})})}),i(this,H,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const c=e.currentTarget;if(this.options.forEach(l=>l.hidden=!1),!c.value)return;this.options.filter(l=>!this.searchFilter(c.value,l)).forEach(l=>l.hidden=!0)}),i(this,ne,e=>{(e.key==="ArrowDown"||e.key==="Tab")&&(e.preventDefault(),s(this,L).call(this))}),i(this,de,e=>{if(e.key==="Tab"&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),i(this,ce,e=>{const a=this._elTriggerBtn;a&&(a.ariaActiveDescendantElement=e.target)}),i(this,he,e=>{const a=e.target;this.options.includes(a)&&(this.multiple?n(this,y,C).call(this,n(this,pe,je).call(this,a)):n(this,y,C).call(this,a.value,{beforeDispatch:()=>{s(this,v).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0))}}))}),i(this,L,()=>{this.updateComplete.then(()=>{const e=this.navigableItems;(e.find(a=>a.selected)||e[0])?.focus()})}),i(this,B,!1),i(this,ue,()=>{E(this,B,!0),window.addEventListener("pointerup",()=>E(this,B,!1),{once:!0})}),i(this,be,()=>{s(this,B)||s(this,L).call(this)}),i(this,A,!1),i(this,M,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&s(this,v).call(this,!1,"close")&&(this.open=!1)}),i(this,j,e=>{e.key==="Tab"&&!this.searchable&&s(this,v).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())}),new pt(this)}get type(){return"gds-dropdown"}get options(){return s(this,m)?Array.from(s(this,m)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(s(this,m))return Array.from(s(this,m)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){if(this.value===void 0)return this.placeholder?.innerText||"";let e;return Array.isArray(this.value)?e=this.value.slice(0,5).reduce((a,c)=>a+this.options.find(h=>this.compareWith(h.value,c))?.innerText+", ","").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):e=this.options.find(a=>this.compareWith(a.value,this.value))?.innerText,e||this.placeholder?.innerText||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}get navigableItems(){return this.options.filter(e=>!e.hidden)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",s(this,P)),ye.instance.applyScoped(this,"gds-dropdown","t-listbox"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleOpenChange()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",s(this,P))}render(){return r`
      ${u(!this.plain&&!this.hideLabel,()=>r`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${u(this.supportingText.length>0,()=>r`<span slot="supporting-text" id="supporting-text">
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
        .calcMaxHeight=${s(this,oe)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[Qe(8),Ze()]:We.DefaultMiddleware}
        @gds-ui-state=${s(this,re)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${u(this.value&&this.multiple&&this.value.length>0,()=>r`<gds-badge
                rounded
                size=${this.size==="small"?"small":"default"}
                slot="lead"
                aria-label=${W(Xe`${this.value.length} options selected`)}
              >
                ${this.value.length}</gds-badge
              >`)}
          ${u(this.clearable&&!this.disabled&&(Array.isArray(this.value)?this.value.length>0:!!this.value),()=>r`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${this.size==="small"?"xs":"small"}
                label="${W("Clear selection")}"
                @click=${s(this,le)}
                slot="action"
              >
                <gds-icon-cross-small></gds-icon-cross-small>
              </gds-button>`)}
          ${u(this.combobox&&!this.multiple,()=>s(this,ie).call(this))}
          ${u(!this.combobox||this.multiple,()=>s(this,ae).call(this))}
          <gds-icon-chevron-bottom
            size=${this.size==="small"?"m":"l"}
            slot="action"
          ></gds-icon-chevron-bottom>
        </gds-field-base>

        ${u(this.searchable,()=>r`<input
              id="searchinput"
              type="text"
              aria-label="${W("Filter available options")}"
              placeholder="${W("Search")}"
              @keydown=${s(this,ne)}
              @input=${s(this,H)}
            />`)}
        <div
          id="listbox"
          class="menu-listbox"
          role="listbox"
          aria-multiselectable="${this.multiple}"
          tabindex="-1"
          @focus="${s(this,be)}"
          @pointerdown="${s(this,ue)}"
          @gds-select="${s(this,he)}"
          @gds-focus="${s(this,ce)}"
          @keydown=${s(this,de)}
        >
          <slot></slot>
        </div>
      </gds-popover>

      ${u(n(this,se,qe).call(this),()=>r`
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
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){this.requestUpdate(),E(this,m,this.querySelectorAll("[gds-element=gds-option]")),!this.multiple&&(this.options.length===0&&!this.placeholder||(this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:!this.combobox&&!this.placeholder&&this.options.find(e=>this.compareWith(e.value,this.value))===void 0&&(this.value=this.options[0]?.value)))}updated(){n(this,ge,Re).call(this)}_handleMultipleChange(){this.options.forEach(e=>e.requestUpdate())}get value(){return super.value}set value(e){s(this,A)||(super.value=e)}_handleOpenChange(){const e=this.open;this.options.forEach(c=>c.hidden=!e),e?n(this,fe,Ue).call(this):(n(this,ve,Ke).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const a=this.options.find(c=>c.selected);requestAnimationFrame(async()=>{await this.updateComplete,a?.scrollIntoView({block:"center"})})}};m=new WeakMap;se=new WeakSet;qe=function(){return!this.plain};ie=new WeakMap;ae=new WeakMap;P=new WeakMap;oe=new WeakMap;v=new WeakMap;re=new WeakMap;le=new WeakMap;H=new WeakMap;ne=new WeakMap;de=new WeakMap;ce=new WeakMap;he=new WeakMap;pe=new WeakSet;je=function(e){const a=Array.isArray(this.value)?this.value:[],c=l=>a.some(g=>this.compareWith(g,l)),h=!c(e.value);return this.options.filter(l=>l===e?h:c(l.value)).map(l=>l.value)};ge=new WeakSet;Re=function(){const e=this.multiple?Array.isArray(this.value)?this.value:[]:[this.value];this.options.forEach(a=>{a.selected=e.some(c=>this.compareWith(c,a.value))})};L=new WeakMap;B=new WeakMap;ue=new WeakMap;be=new WeakMap;A=new WeakMap;y=new WeakSet;C=function(e,a={}){const{emitInput:c=!0,emitChange:h=!0,beforeDispatch:l}=a;this.value=e,E(this,A,!0);try{l?.(),c&&this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}),h&&this.dispatchCustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0})}finally{E(this,A,!1)}};fe=new WeakSet;Ue=function(){this.addEventListener("blur",s(this,M)),this.addEventListener("gds-blur",s(this,M)),this.addEventListener("keydown",s(this,j))};ve=new WeakSet;Ke=function(){this.removeEventListener("blur",s(this,M)),this.removeEventListener("gds-blur",s(this,M)),this.removeEventListener("keydown",s(this,j))};M=new WeakMap;j=new WeakMap;d.styles=[N,Ct,ht,Tt];t([o({attribute:"supporting-text"})],d.prototype,"supportingText",2);t([o({type:Boolean,reflect:!0})],d.prototype,"open",2);t([o({type:Boolean,reflect:!0})],d.prototype,"searchable",2);t([o({type:Boolean,reflect:!0})],d.prototype,"multiple",2);t([o({type:Boolean,reflect:!0})],d.prototype,"clearable",2);t([o({type:Boolean,reflect:!0})],d.prototype,"combobox",2);t([o()],d.prototype,"compareWith",2);t([o()],d.prototype,"searchFilter",2);t([o({type:Boolean,attribute:"sync-popover-width"})],d.prototype,"syncPopoverWidth",2);t([o({type:Number,attribute:"max-height"})],d.prototype,"maxHeight",2);t([o({reflect:!0})],d.prototype,"size",2);t([o({type:Boolean,attribute:"hide-label"})],d.prototype,"hideLabel",2);t([o({type:Boolean})],d.prototype,"plain",2);t([o({type:Boolean})],d.prototype,"disableMobileStyles",2);t([o({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],d.prototype,"showExtendedSupportingText",2);t([V("#trigger")],d.prototype,"_elTriggerBtn",2);t([V("#searchinput")],d.prototype,"_elSearchInput",2);t([ot({attributes:!0,attributeFilter:["gds-element","value","isplaceholder"],childList:!0,subtree:!0,characterData:!0})],d.prototype,"_handleLightDOMChange",1);t([T("multiple")],d.prototype,"_handleMultipleChange",1);t([T("open")],d.prototype,"_handleOpenChange",1);d=t([Ye({labelledBy:"#trigger",describedBy:"#trigger",errorMessage:"#trigger"}),me()],d);let Ce=class extends Ee(Te(Me(d))){};Ce=t([S("gds-dropdown",{dependsOn:[w,_,p,f,We,Oe,nt,gt]})],Ce);export{Ce as G,f as a,G as b,Ct as f};
