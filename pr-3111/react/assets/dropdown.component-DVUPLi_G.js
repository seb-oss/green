import{i as k,t as N,_ as t,g as S,h as r,f as Ce,w as Ee,m as Te,G as B,b as a,d as n,n as o,r as $,c as s,A as ze,e as H}from"./declarative-layout-mixins-C-CSOFD9.js";import{l as fe,m as M,s as Ke}from"./runtime-Cgryh99k.js";import{e as V,w as E,a as Xe}from"./watch-rsnQmdjn.js";import{o as Ye}from"./icon.component-AYCMO6me.js";import{n as g}from"./when-CI7b_ccM.js";import{G as Me,o as Je,f as Qe}from"./popover.component-DRPMZIXS.js";import{e as x}from"./class-map-BcN550NF.js";import{a as Ze,I as et,b as tt}from"./chevron-bottom.component-DtORkkl_.js";import{T as ye,c as st}from"./transitional-styles-BcTj1V6W.js";import{a as it,G as at}from"./card.component-DkeHy_WC.js";import{I as ot}from"./triangle-exclamation.component-CBS-cjWq.js";import{G as rt,o as lt,a as nt}from"./button.component-pWtr8RLJ.js";import{F as dt,m as ct,a as ht,L as pt}from"./menu-listbox.style-zVV_Wr9Y.js";import{I as We}from"./checkmark.component-G8TxAMih.js";import{I as gt}from"./cross-small.component-BDqPoeiv.js";const ut=k`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-neutral-02);
  }
`;var bt=ut;let P=class extends it{render(){return r`<slot></slot>`}};P.styles=[N,bt];P=t([S("gds-flex")],P);const ft=k`
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
`;var yt=ft,q,ve,U,Oe,K,Le,X,Be;let b=class extends Ce(Ee(Te(B))){constructor(){super(...arguments),a(this,q),a(this,U),a(this,K),a(this,X),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1,this.leadSlotOccupied=!1}render(){const e=x({badge:!0,[this.variant]:!0,[this.size]:this.size==="small",notification:this.notification,"with-content":this.notification&&this.mainSlotOccupied,rounded:this.rounded});return r`
      <div class="${e}">
        ${[n(this,U,Oe).call(this),n(this,K,Le).call(this),n(this,X,Be).call(this)]}
      </div>
    `}};q=new WeakSet;ve=function(e,i){const h=e.target.assignedNodes({flatten:!0});this[i]=h.length>0&&h.some(l=>l.nodeType===Node.ELEMENT_NODE||l.nodeType===Node.TEXT_NODE&&l.textContent?.trim()!=="")};U=new WeakSet;Oe=function(){if(this.size!=="small"||!this.notification)return r`<slot
        name="lead"
        @slotchange=${e=>n(this,q,ve).call(this,e,"leadSlotOccupied")}
      ></slot>`};K=new WeakSet;Le=function(){return r`<slot
      @slotchange=${e=>n(this,q,ve).call(this,e,"mainSlotOccupied")}
    ></slot>`};X=new WeakSet;Be=function(){return r`<slot name="trail"></slot>`};b.styles=[N,yt];t([o()],b.prototype,"variant",2);t([o({type:String})],b.prototype,"size",2);t([o({attribute:"notification",type:Boolean,reflect:!0})],b.prototype,"notification",2);t([o({attribute:"rounded",type:Boolean,reflect:!0})],b.prototype,"rounded",2);t([$()],b.prototype,"mainSlotOccupied",2);t([$()],b.prototype,"leadSlotOccupied",2);b=t([S("gds-badge",{dependsOn:[P]})],b);const vt=e=>mt({...e,type:"checkbox"}),mt=e=>{const{type:i,checked:c,indeterminate:h,disabled:l,invalid:u}=e;return r`
    <div class="rbcb ${x({"rbcb--checkbox":i==="checkbox","rbcb--radio":i==="radio","--checked":c,"--indeterminate":h,"--disabled":l,"--invalid":u})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${g(i==="checkbox",()=>r`
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

    .field.readonly {
      background: var(--gds-sys-color-l3-disabled-01);
      border-color: var(--gds-sys-color-l3-disabled-01);
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
      .field:hover:not(.readonly) {
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

    gds-icon-lock {
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
`;var _t=xt,z,Y,Ae,G,me,xe,De,_e,Fe,we,Ie,ke,He;let p=class extends B{constructor(){super(),a(this,Y),a(this,G),a(this,xe),a(this,_e),a(this,we),a(this,ke),this.size="large",this.multiline=!1,this.disabled=!1,this.readonly=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._leadHasBadge=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,a(this,z,(e,i)=>{const h=i.target.assignedNodes({flatten:!0}),l=h.length>0&&h.some(u=>u.nodeType===Node.ELEMENT_NODE||u.nodeType===Node.TEXT_NODE&&u.textContent?.trim()!=="");e==="lead"?(this._leadSlotOccupied=l,this._leadHasBadge=l&&h.some(u=>u.getAttribute?.("gds-element")==="gds-badge")):e==="trail"?this._trailSlotOccupied=l:e==="action"&&(this._actionSlotOccupied=l)})}connectedCallback(){super.connectedCallback(),ye.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,readonly:this.readonly,"lead-slot-occupied":this._leadSlotOccupied||s(this,G,me),"lead-has-badge":this._leadHasBadge,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return r`
      <div class="field ${x(e)}" part="_base">
        ${n(this,Y,Ae).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};z=new WeakMap;Y=new WeakSet;Ae=function(){const e={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return r`
      ${n(this,xe,De).call(this)} ${n(this,_e,Fe).call(this)}
      <div class="${x(e)}">
        ${n(this,we,Ie).call(this)} ${n(this,ke,He).call(this)}
      </div>
    `};G=new WeakSet;me=function(){return this.readonly&&!this._leadSlotOccupied};xe=new WeakSet;De=function(){return r`
      ${g(s(this,G,me),()=>r`<gds-icon-lock solid></gds-icon-lock>`)}
      <slot
        name="lead"
        @slotchange=${e=>s(this,z).call(this,"lead",e)}
      ></slot>
    `};_e=new WeakSet;Fe=function(){return r`<div
      class="main-slot-wrap ${x({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>s(this,z).call(this,"main",e)}
      ></slot>
    </div>`};we=new WeakSet;Ie=function(){return r`
      <slot
        name="action"
        @slotchange=${e=>s(this,z).call(this,"action",e)}
      ></slot>
    `};ke=new WeakSet;He=function(){return r`
      <slot
        name="trail"
        @slotchange=${e=>s(this,z).call(this,"trail",e)}
      ></slot>
    `};p.styles=[_t];t([o()],p.prototype,"size",2);t([o({type:Boolean})],p.prototype,"multiline",2);t([o({type:Boolean,reflect:!0})],p.prototype,"disabled",2);t([o({type:Boolean,reflect:!0})],p.prototype,"readonly",2);t([o({type:Boolean})],p.prototype,"invalid",2);t([V("slot:not([name])")],p.prototype,"_mainSlotElement",2);t([$()],p.prototype,"_leadSlotOccupied",2);t([$()],p.prototype,"_leadHasBadge",2);t([$()],p.prototype,"_trailSlotOccupied",2);t([$()],p.prototype,"_actionSlotOccupied",2);t([E("disabled")],p.prototype,"_handleDisabledChange",1);p=t([S("gds-field-base",{dependsOn:[Ze]}),fe()],p);const wt=k`
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
`;var kt=wt,J,Pe;let _=class extends B{constructor(){super(...arguments),a(this,J)}_handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter?.[1])}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return r`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${g(this.errorMessage,()=>r`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${n(this,J,Pe).call(this)}
      </div>
    </div>`}};J=new WeakSet;Pe=function(){if(!this.charCounter||this.charCounter[1]===!1)return ze;const[e,i]=this.charCounter;return r`<gds-badge variant="${i}">${e}</gds-badge>`};_.styles=[kt];t([o({type:Array})],_.prototype,"charCounter",2);t([o()],_.prototype,"errorMessage",2);t([E("charCounter"),E("errorMessage")],_.prototype,"_handleVisibilityChange",1);_=t([S("gds-form-control-footer",{dependsOn:[b,ot]})],_);const St=k`
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
`;var $t=St,Se,Ge,Q,Z,A,ee,Ne;let w=class extends B{constructor(){super(...arguments),a(this,Se),a(this,ee),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,a(this,Q,()=>r`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${M("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${s(this,Z)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),a(this,Z,()=>{this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText,cancelable:!0})&&(this.showExtendedSupportingText=!this.showExtendedSupportingText,this._extendedSupportingText?.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"))}),a(this,A,()=>{this.showExtendedSupportingText&&this._extendedSupportingText?.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`)})}render(){return r`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${g(this._hasExtendedSupportingText,s(this,Q))}
      </div>

      ${n(this,ee,Ne).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",s(this,A))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",s(this,A))}};Se=new WeakSet;Ge=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};Q=new WeakMap;Z=new WeakMap;A=new WeakMap;ee=new WeakSet;Ne=function(){return r`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${n(this,Se,Ge)}
        ></slot>
      </div>
    `};w.styles=[$t];t([o({type:Boolean,reflect:!0})],w.prototype,"showExtendedSupportingText",2);t([$()],w.prototype,"_hasExtendedSupportingText",2);t([V("#extended-supporting-text")],w.prototype,"_extendedSupportingText",2);w=t([S("gds-form-control-header",{dependsOn:[rt,at,et]}),fe()],w);var Ct=k`
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
`;var Tt=Et,W,D,te;let f=class extends dt(B){constructor(){super(),a(this,D),a(this,W,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",n(this,D,te)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),n(this,D,te).call(this,e))})}get hidden(){return s(this,W)}set hidden(e){const i=e.toString();H(this,W,i==="true"),s(this,W)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),ye.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){const e=this.parentElement?.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),r`<div class="item">
      ${g(e,()=>vt({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};W=new WeakMap;D=new WeakSet;te=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};f.styles=[N,st,ct];t([o()],f.prototype,"value",2);t([o({type:Boolean,reflect:!0})],f.prototype,"hidden",1);t([o({attribute:"aria-selected",reflect:!0,converter:{fromAttribute:e=>e==="true",toAttribute:e=>e?"true":"false"}})],f.prototype,"selected",2);t([o({type:Boolean,reflect:!0})],f.prototype,"isPlaceholder",2);t([E("isPlaceholder")],f.prototype,"_handlePlaceholderStatusChange",1);f=t([S("gds-option",{dependsOn:[We]})],f);var v,se,Ve,ie,ae,F,oe,y,re,le,I,ne,de,ce,he,pe,qe,ge,Re,O,L,m,C,ue,je,be,Ue,T,R;let d=class extends nt{constructor(){super(),a(this,se),a(this,pe),a(this,ge),a(this,m),a(this,ue),a(this,be),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,i)=>e===i,this.searchFilter=(e,i)=>i.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,a(this,v,void 0),a(this,ie,()=>r`
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
        @input=${e=>{n(this,m,C).call(this,e.target.value,{emitChange:!1}),s(this,I).call(this,e),s(this,y).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{e.key==="ArrowDown"&&(e.preventDefault(),s(this,y).call(this,!0,"show")&&(this.open=!0),this.updateComplete.then(()=>s(this,O).call(this))),e.key==="Enter"&&n(this,m,C).call(this,this.value,{emitInput:!1})}}
      />
    `),a(this,ae,()=>r`
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
    `),a(this,F,e=>{this.open||this.dispatchCustomEvent("gds-blur",{detail:{relatedTarget:e.relatedTarget},bubbles:!1,composed:!0})}),a(this,oe,e=>{if(this.combobox){const c=e.getBoundingClientRect(),l=window.innerHeight-c.bottom,u=c.top;let j=Math.min(u,this.maxHeight);return l>u&&(j=Math.min(l,this.maxHeight)),`${j-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),a(this,y,(e,i)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:i,open:e},bubbles:!1,composed:!1})),a(this,re,e=>{s(this,y).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),a(this,le,e=>{e.preventDefault(),e.stopPropagation(),n(this,m,C).call(this,void 0,{beforeDispatch:()=>this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0})})}),a(this,I,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const c=e.currentTarget;if(this.options.forEach(l=>l.hidden=!1),!c.value)return;this.options.filter(l=>!this.searchFilter(c.value,l)).forEach(l=>l.hidden=!0)}),a(this,ne,e=>{(e.key==="ArrowDown"||e.key==="Tab")&&(e.preventDefault(),s(this,O).call(this))}),a(this,de,e=>{if(e.key==="Tab"&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),a(this,ce,e=>{const i=this._elTriggerBtn;i&&(i.ariaActiveDescendantElement=e.target)}),a(this,he,e=>{const i=e.target;this.options.includes(i)&&(this.multiple?n(this,m,C).call(this,n(this,pe,qe).call(this,i)):n(this,m,C).call(this,i.value,{beforeDispatch:()=>{s(this,y).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0))}}))}),a(this,O,()=>{this.updateComplete.then(()=>{const e=this.navigableItems;(e.find(i=>i.selected)||e[0])?.focus()})}),a(this,L,!1),a(this,T,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&s(this,y).call(this,!1,"close")&&(this.open=!1)}),a(this,R,e=>{e.key==="Tab"&&!this.searchable&&s(this,y).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())}),new pt(this)}get type(){return"gds-dropdown"}get options(){return s(this,v)?Array.from(s(this,v)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(s(this,v))return Array.from(s(this,v)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){if(this.value===void 0)return this.placeholder?.innerText||"";let e;return Array.isArray(this.value)?e=this.value.slice(0,5).reduce((i,c)=>i+this.options.find(h=>this.compareWith(h.value,c))?.innerText+", ","").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):e=this.options.find(i=>this.compareWith(i.value,this.value))?.innerText,e||this.placeholder?.innerText||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}get navigableItems(){return this.options.filter(e=>!e.hidden)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",s(this,F)),ye.instance.applyScoped(this,"gds-dropdown","t-listbox"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleOpenChange()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",s(this,F))}render(){return r`
      ${g(!this.plain&&!this.hideLabel,()=>r`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${g(this.supportingText.length>0,()=>r`<span slot="supporting-text" id="supporting-text">
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
        .floatingUIMiddleware=${this.combobox?[Je(8),Qe()]:Me.DefaultMiddleware}
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
          ${g(this.value&&this.multiple&&this.value.length>0,()=>r`<gds-badge
                rounded
                size=${this.size==="small"?"small":"default"}
                slot="lead"
                aria-label=${M(Ke`${this.value.length} options selected`)}
              >
                ${this.value.length}</gds-badge
              >`)}
          ${g(this.clearable&&!this.disabled&&(Array.isArray(this.value)?this.value.length>0:!!this.value),()=>r`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${this.size==="small"?"xs":"small"}
                label="${M("Clear selection")}"
                @click=${s(this,le)}
                slot="action"
              >
                <gds-icon-cross-small></gds-icon-cross-small>
              </gds-button>`)}
          ${g(this.combobox&&!this.multiple,()=>s(this,ie).call(this))}
          ${g(!this.combobox||this.multiple,()=>s(this,ae).call(this))}
          <gds-icon-chevron-bottom
            size=${this.size==="small"?"m":"l"}
            slot="action"
          ></gds-icon-chevron-bottom>
        </gds-field-base>

        ${g(this.searchable,()=>r`<input
              id="searchinput"
              type="text"
              aria-label="${M("Filter available options")}"
              placeholder="${M("Search")}"
              @keydown=${s(this,ne)}
              @input=${s(this,I)}
            />`)}
        <div
          id="listbox"
          class="menu-listbox"
          role="listbox"
          aria-multiselectable="${this.multiple}"
          tabindex="-1"
          @focus="${s(this,O)}"
          @gds-select="${s(this,he)}"
          @gds-focus="${s(this,ce)}"
          @keydown=${s(this,de)}
        >
          <slot></slot>
        </div>
      </gds-popover>

      ${g(n(this,se,Ve).call(this),()=>r`
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
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){this.requestUpdate(),H(this,v,this.querySelectorAll("[gds-element=gds-option]")),!this.multiple&&(this.options.length===0&&!this.placeholder||(this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:!this.combobox&&!this.placeholder&&this.options.find(e=>this.compareWith(e.value,this.value))===void 0&&(this.value=this.options[0]?.value)))}updated(){n(this,ge,Re).call(this)}_handleMultipleChange(){this.options.forEach(e=>e.requestUpdate())}get value(){return super.value}set value(e){s(this,L)||(super.value=e)}_handleOpenChange(){const e=this.open;this.options.forEach(c=>c.hidden=!e),e?n(this,ue,je).call(this):(n(this,be,Ue).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const i=this.options.find(c=>c.selected);requestAnimationFrame(async()=>{await this.updateComplete,i?.scrollIntoView({block:"center"})})}};v=new WeakMap;se=new WeakSet;Ve=function(){return!this.plain};ie=new WeakMap;ae=new WeakMap;F=new WeakMap;oe=new WeakMap;y=new WeakMap;re=new WeakMap;le=new WeakMap;I=new WeakMap;ne=new WeakMap;de=new WeakMap;ce=new WeakMap;he=new WeakMap;pe=new WeakSet;qe=function(e){const i=Array.isArray(this.value)?this.value:[],c=l=>i.some(u=>this.compareWith(u,l)),h=!c(e.value);return this.options.filter(l=>l===e?h:c(l.value)).map(l=>l.value)};ge=new WeakSet;Re=function(){const e=this.multiple?Array.isArray(this.value)?this.value:[]:[this.value];this.options.forEach(i=>{i.selected=e.some(c=>this.compareWith(c,i.value))})};O=new WeakMap;L=new WeakMap;m=new WeakSet;C=function(e,i={}){const{emitInput:c=!0,emitChange:h=!0,beforeDispatch:l}=i;this.value=e,H(this,L,!0);try{l?.(),c&&this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}),h&&this.dispatchCustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0})}finally{H(this,L,!1)}};ue=new WeakSet;je=function(){this.addEventListener("blur",s(this,T)),this.addEventListener("gds-blur",s(this,T)),this.addEventListener("keydown",s(this,R))};be=new WeakSet;Ue=function(){this.removeEventListener("blur",s(this,T)),this.removeEventListener("gds-blur",s(this,T)),this.removeEventListener("keydown",s(this,R))};T=new WeakMap;R=new WeakMap;d.styles=[N,Ct,ht,Tt];t([o({attribute:"supporting-text"})],d.prototype,"supportingText",2);t([o({type:Boolean,reflect:!0})],d.prototype,"open",2);t([o({type:Boolean,reflect:!0})],d.prototype,"searchable",2);t([o({type:Boolean,reflect:!0})],d.prototype,"multiple",2);t([o({type:Boolean,reflect:!0})],d.prototype,"clearable",2);t([o({type:Boolean,reflect:!0})],d.prototype,"combobox",2);t([o()],d.prototype,"compareWith",2);t([o()],d.prototype,"searchFilter",2);t([o({type:Boolean,attribute:"sync-popover-width"})],d.prototype,"syncPopoverWidth",2);t([o({type:Number,attribute:"max-height"})],d.prototype,"maxHeight",2);t([o({reflect:!0})],d.prototype,"size",2);t([o({type:Boolean,attribute:"hide-label"})],d.prototype,"hideLabel",2);t([o({type:Boolean})],d.prototype,"plain",2);t([o({type:Boolean})],d.prototype,"disableMobileStyles",2);t([o({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],d.prototype,"showExtendedSupportingText",2);t([V("#trigger")],d.prototype,"_elTriggerBtn",2);t([V("#searchinput")],d.prototype,"_elSearchInput",2);t([lt({attributes:!0,attributeFilter:["gds-element","value","isplaceholder"],childList:!0,subtree:!0,characterData:!0})],d.prototype,"_handleLightDOMChange",1);t([E("multiple")],d.prototype,"_handleMultipleChange",1);t([E("open")],d.prototype,"_handleOpenChange",1);d=t([Xe({labelledBy:"#trigger",describedBy:"#trigger",errorMessage:"#trigger"}),fe()],d);let $e=class extends Ce(Ee(Te(d))){};$e=t([S("gds-dropdown",{dependsOn:[w,_,p,f,Me,We,tt,gt]})],$e);export{$e as G,f as a,P as b,Ct as f};
