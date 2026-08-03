import{i as m,t as P,_ as t,g as y,h as r,w as we,k as ke,m as Se,G as T,b as a,c,n as o,r as $,d as i,A as $e,e as Ce}from"./declarative-layout-mixins-_06SKQMp.js";import{l as ge,m as M,s as qe}from"./runtime-Cgryh99k.js";import{b as Re,e as G,w as C,a as je}from"./watch-QkQzTQuG.js";import{G as Ue,o as Ke,a as Xe,b as Ye}from"./button.component-B6W6L_OS.js";import{o as Je}from"./icon.component-DsViI2Je.js";import{n as g}from"./when-CI7b_ccM.js";import{G as Ee,o as Qe,f as Ze}from"./popover.component-CwE2S-3u.js";import{e as _}from"./class-map-p9a7aOqr.js";import{T as ue,c as et}from"./transitional-styles-DZI2zshL.js";import{a as tt,G as st}from"./card.component-BSqDm8we.js";import{I as it}from"./triangle-exclamation.component-iz0VZVBH.js";import{I as at,a as ot}from"./chevron-bottom.component-DvZ3ej60.js";import{e as rt,n as lt}from"./ref-gL6JZIvB.js";import{F as nt,o as dt,L as ct,u as ht}from"./option.styles-DSzMKSW7.js";import{I as Te}from"./checkmark.component-DH9mV39j.js";import{I as pt}from"./cross-small.component-B1GB_eHr.js";function gt(e){return(s,n)=>Re(s,n,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}const ut=m`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-neutral-02);
  }
`;var bt=ut;let I=class extends tt{render(){return r`<slot></slot>`}};I.styles=[P,bt];I=t([y("gds-flex")],I);const ft=m`
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
`;var vt=ft,N,be,R,ze,j,Me,U,We;let b=class extends we(ke(Se(T))){constructor(){super(...arguments),a(this,N),a(this,R),a(this,j),a(this,U),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1,this.leadSlotOccupied=!1}render(){const e=_({badge:!0,[this.variant]:!0,[this.size]:this.size==="small",notification:this.notification,"with-content":this.notification&&this.mainSlotOccupied,rounded:this.rounded});return r`
      <div class="${e}">
        ${[c(this,R,ze).call(this),c(this,j,Me).call(this),c(this,U,We).call(this)]}
      </div>
    `}};N=new WeakSet;be=function(e,s){const p=e.target.assignedNodes({flatten:!0});this[s]=p.length>0&&p.some(d=>d.nodeType===Node.ELEMENT_NODE||d.nodeType===Node.TEXT_NODE&&d.textContent?.trim()!=="")};R=new WeakSet;ze=function(){if(this.size!=="small"||!this.notification)return r`<slot
        name="lead"
        @slotchange=${e=>c(this,N,be).call(this,e,"leadSlotOccupied")}
      ></slot>`};j=new WeakSet;Me=function(){return r`<slot
      @slotchange=${e=>c(this,N,be).call(this,e,"mainSlotOccupied")}
    ></slot>`};U=new WeakSet;We=function(){return r`<slot name="trail"></slot>`};b.styles=[P,vt];t([o()],b.prototype,"variant",2);t([o({type:String})],b.prototype,"size",2);t([o({attribute:"notification",type:Boolean,reflect:!0})],b.prototype,"notification",2);t([o({attribute:"rounded",type:Boolean,reflect:!0})],b.prototype,"rounded",2);t([$()],b.prototype,"mainSlotOccupied",2);t([$()],b.prototype,"leadSlotOccupied",2);b=t([y("gds-badge",{dependsOn:[I]})],b);const mt=e=>yt({...e,type:"checkbox"}),yt=e=>{const{type:s,checked:n,indeterminate:p,disabled:d,invalid:u}=e;return r`
    <div class="rbcb ${_({"rbcb--checkbox":s==="checkbox","rbcb--radio":s==="radio","--checked":n,"--indeterminate":p,"--disabled":d,"--invalid":u})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${g(s==="checkbox",()=>r`
            <gds-icon-minus-small
              class=${_({rbcb__icon:!0,"rbcb__icon--visible":p})}
              stroke="4"
            ></gds-icon-minus-small>
            <gds-icon-checkmark
              class=${_({rbcb__icon:!0,"rbcb__icon--visible":n})}
              stroke="4"
            ></gds-icon-checkmark>
          `)}
      </div>
    </div>
  `},xt=m`
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
`;var _t=xt,z,K,Oe,fe,Le,ve,Be,me,Ae,ye,De;let h=class extends T{constructor(){super(),a(this,K),a(this,fe),a(this,ve),a(this,me),a(this,ye),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._leadHasBadge=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,a(this,z,(e,s)=>{const p=s.target.assignedNodes({flatten:!0}),d=p.length>0&&p.some(u=>u.nodeType===Node.ELEMENT_NODE||u.nodeType===Node.TEXT_NODE&&u.textContent?.trim()!=="");e==="lead"?(this._leadSlotOccupied=d,this._leadHasBadge=d&&p.some(u=>u.getAttribute?.("gds-element")==="gds-badge")):e==="trail"?this._trailSlotOccupied=d:e==="action"&&(this._actionSlotOccupied=d)})}connectedCallback(){super.connectedCallback(),ue.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"lead-has-badge":this._leadHasBadge,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return r`
      <div class="field ${_(e)}" part="_base">
        ${c(this,K,Oe).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};z=new WeakMap;K=new WeakSet;Oe=function(){const e={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return r`
      ${c(this,fe,Le).call(this)} ${c(this,ve,Be).call(this)}
      <div class="${_(e)}">
        ${c(this,me,Ae).call(this)} ${c(this,ye,De).call(this)}
      </div>
    `};fe=new WeakSet;Le=function(){return r` <slot
      name="lead"
      @slotchange=${e=>i(this,z).call(this,"lead",e)}
    ></slot>`};ve=new WeakSet;Be=function(){return r`<div
      class="main-slot-wrap ${_({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>i(this,z).call(this,"main",e)}
      ></slot>
    </div>`};me=new WeakSet;Ae=function(){return r`
      <slot
        name="action"
        @slotchange=${e=>i(this,z).call(this,"action",e)}
      ></slot>
    `};ye=new WeakSet;De=function(){return r`
      <slot
        name="trail"
        @slotchange=${e=>i(this,z).call(this,"trail",e)}
      ></slot>
    `};h.styles=[_t];t([o()],h.prototype,"size",2);t([o({type:Boolean})],h.prototype,"multiline",2);t([o({type:Boolean,reflect:!0})],h.prototype,"disabled",2);t([o({type:Boolean})],h.prototype,"invalid",2);t([G("slot:not([name])")],h.prototype,"_mainSlotElement",2);t([$()],h.prototype,"_leadSlotOccupied",2);t([$()],h.prototype,"_leadHasBadge",2);t([$()],h.prototype,"_trailSlotOccupied",2);t([$()],h.prototype,"_actionSlotOccupied",2);t([C("disabled")],h.prototype,"_handleDisabledChange",1);h=t([y("gds-field-base"),ge()],h);const wt=m`
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
`;var kt=wt,X,Fe;let w=class extends T{constructor(){super(...arguments),a(this,X)}_handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter?.[1])}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return r`<div aria-live="polite">
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
        ${c(this,X,Fe).call(this)}
      </div>
    </div>`}};X=new WeakSet;Fe=function(){if(!this.charCounter||this.charCounter[1]===!1)return $e;const[e,s]=this.charCounter;return r`<gds-badge variant="${s}">${e}</gds-badge>`};w.styles=[kt];t([o({type:Array})],w.prototype,"charCounter",2);t([o()],w.prototype,"errorMessage",2);t([C("charCounter"),C("errorMessage")],w.prototype,"_handleVisibilityChange",1);w=t([y("gds-form-control-footer",{dependsOn:[b,it]})],w);const St=m`
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
`;var $t=St,xe,He,Y,J,A,Q,Ie;let k=class extends T{constructor(){super(...arguments),a(this,xe),a(this,Q),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,a(this,Y,()=>r`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${M("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${i(this,J)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),a(this,J,()=>{this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText,cancelable:!0})&&(this.showExtendedSupportingText=!this.showExtendedSupportingText,this._extendedSupportingText?.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"))}),a(this,A,()=>{this.showExtendedSupportingText&&this._extendedSupportingText?.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`)})}render(){return r`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${g(this._hasExtendedSupportingText,i(this,Y))}
      </div>

      ${c(this,Q,Ie).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",i(this,A))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",i(this,A))}};xe=new WeakSet;He=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};Y=new WeakMap;J=new WeakMap;A=new WeakMap;Q=new WeakSet;Ie=function(){return r`
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
    `};k.styles=[$t];t([o({type:Boolean,reflect:!0})],k.prototype,"showExtendedSupportingText",2);t([$()],k.prototype,"_hasExtendedSupportingText",2);t([G("#extended-supporting-text")],k.prototype,"_extendedSupportingText",2);k=t([y("gds-form-control-header",{dependsOn:[Ue,st,at]}),ge()],k);const Ct=m`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
      overscroll-behavior: contain;
    }
  }
`;var Et=Ct,W,D,Z;let f=class extends nt(T){constructor(){super(),a(this,D),a(this,W,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",c(this,D,Z)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),c(this,D,Z).call(this,e))})}get hidden(){return i(this,W)}set hidden(e){const s=e.toString();Ce(this,W,s==="true"),i(this,W)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),ue.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){const e=this.parentElement?.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),r`<div class="item">
      ${g(e,()=>mt({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};W=new WeakMap;D=new WeakSet;Z=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};f.styles=[P,et,dt];t([o()],f.prototype,"value",2);t([o({type:Boolean,reflect:!0})],f.prototype,"hidden",1);t([o({attribute:"aria-selected",reflect:!0})],f.prototype,"selected",2);t([o({type:Boolean,reflect:!0})],f.prototype,"isPlaceholder",2);t([C("isPlaceholder")],f.prototype,"_handlePlaceholderStatusChange",1);f=t([y("gds-option",{dependsOn:[Te]})],f);var O,ee;let S=class extends T{constructor(){super(),this.multiple=!1,this.compareWith=(e,s)=>e===s,a(this,O,rt()),a(this,ee,e=>{const s=e.target;this.multiple?s.selected=!s.selected:(s.selected=!0,Array.from(this.options).forEach(n=>{n!==s&&(n.selected=!1)})),this.ariaActiveDescendantElement=s,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})}),new ct(this)}get navigableItems(){return this.visibleOptionElements}get options(){return i(this,O).value?ht(i(this,O).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(s=>{s.selected=e.some(n=>this.compareWith(n,s.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),ue.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",i(this,ee))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return r`<slot ${lt(i(this,O))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};O=new WeakMap;ee=new WeakMap;S.styles=Et;t([o({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],S.prototype,"multiple",2);t([o()],S.prototype,"compareWith",2);t([C("multiple")],S.prototype,"_rerenderOptions",1);S=t([y("gds-listbox",{dependsOn:[f]})],S);var Tt=m`
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
`;const zt=m`
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
`;var Mt=zt,x,te,Pe,se,ie,F,ae,v,oe,re,H,le,ne,de,ce,Ge,L,B,he,Ne,pe,Ve,E,V;let l=class extends Xe{constructor(){super(...arguments),a(this,te),a(this,ce),a(this,he),a(this,pe),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,s)=>e===s,this.searchFilter=(e,s)=>s.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,a(this,x,void 0),a(this,se,()=>r`
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
        @input=${e=>{this.value=e.target.value,i(this,L).call(this),i(this,H).call(this,e),i(this,v).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{e.key==="ArrowDown"&&(e.preventDefault(),i(this,v).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(s=>s.focus())),e.key==="Enter"&&i(this,B).call(this)}}
      />
    `),a(this,ie,()=>r`
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
    `),a(this,F,e=>{this.open||this.dispatchCustomEvent("gds-blur",{detail:{relatedTarget:e.relatedTarget},bubbles:!1,composed:!0})}),a(this,ae,e=>{if(this.combobox){const n=e.getBoundingClientRect(),d=window.innerHeight-n.bottom,u=n.top;let q=Math.min(u,this.maxHeight);return d>u&&(q=Math.min(d,this.maxHeight)),`${q-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),a(this,v,(e,s)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:s,open:e},bubbles:!1,composed:!1})),a(this,oe,e=>{i(this,v).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),a(this,re,e=>{e.preventDefault(),e.stopPropagation(),this.value=void 0,this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),i(this,L).call(this),i(this,B).call(this)}),a(this,H,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const n=e.currentTarget;if(this.options.forEach(d=>d.hidden=!1),!n.value)return;this.options.filter(d=>!this.searchFilter(n.value,d)).forEach(d=>d.hidden=!0)}),a(this,le,e=>{this._elListbox?.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),a(this,ne,e=>{if(e.key==="Tab"&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),a(this,de,e=>{const s=this._elTriggerBtn;s&&(s.ariaActiveDescendantElement=e.target)}),a(this,L,()=>{this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))}),a(this,B,()=>{this.updateComplete.then(()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),a(this,E,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&i(this,v).call(this,!1,"close")&&(this.open=!1)}),a(this,V,e=>{e.key==="Tab"&&!this.searchable&&i(this,v).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())})}get type(){return"gds-dropdown"}get options(){return i(this,x)?Array.from(i(this,x)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(i(this,x))return Array.from(i(this,x)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){if(this.value===void 0)return this.placeholder?.innerText||"";let e;return Array.isArray(this.value)?e=this.value.slice(0,5).reduce((s,n)=>s+this.options.find(p=>this.compareWith(p.value,n))?.innerText+", ","").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):e=this.options.find(s=>this.compareWith(s.value,this.value))?.innerText,e||this.placeholder?.innerText||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",i(this,F)),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleOpenChange()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",i(this,F))}render(){return r`
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
        .calcMaxHeight=${i(this,ae)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[Qe(8),Ze()]:Ee.DefaultMiddleware}
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
          ${g(this.value&&this.multiple&&this.value.length>0,()=>r`<gds-badge
                rounded
                size=${this.size==="small"?"small":"default"}
                slot="lead"
                aria-label=${M(qe`${this.value.length} options selected`)}
              >
                ${this.value.length}</gds-badge
              >`)}
          ${g(this.clearable&&!this.disabled&&(Array.isArray(this.value)?this.value.length>0:!!this.value),()=>r`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${this.size==="small"?"xs":"small"}
                label="${M("Clear selection")}"
                @click=${i(this,re)}
                slot="action"
              >
                <gds-icon-cross-small></gds-icon-cross-small>
              </gds-button>`)}
          ${g(this.combobox&&!this.multiple,()=>i(this,se).call(this))}
          ${g(!this.combobox||this.multiple,()=>i(this,ie).call(this))}
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
              @keydown=${i(this,le)}
              @input=${i(this,H)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${Ye(this.multiple)}"
          .compareWith="${this.compareWith}"
          .selection="${this.multiple?this.value:[this.value]}"
          @change="${c(this,ce,Ge)}"
          @gds-focus="${i(this,de)}"
          @keydown=${i(this,ne)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${g(c(this,te,Pe).call(this),()=>r`
          <gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.invalid?this.errorMessage:$e}
            </slot>
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){this.requestUpdate(),Ce(this,x,this.querySelectorAll("[gds-element=gds-option]")),!this.multiple&&(this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:!this.combobox&&!this.placeholder&&this.options.find(e=>this.compareWith(e.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value))}_handleOpenChange(){const e=this.open;this.options.forEach(n=>n.hidden=!e),e?c(this,he,Ne).call(this):(c(this,pe,Ve).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const s=this.options.find(n=>n.selected);requestAnimationFrame(async()=>{await this.updateComplete,s?.scrollIntoView({block:"center"})})}};x=new WeakMap;te=new WeakSet;Pe=function(){return!this.plain};se=new WeakMap;ie=new WeakMap;F=new WeakMap;ae=new WeakMap;v=new WeakMap;oe=new WeakMap;re=new WeakMap;H=new WeakMap;le=new WeakMap;ne=new WeakMap;de=new WeakMap;ce=new WeakSet;Ge=function(){this._elListbox.then(e=>{this.multiple?this.value=e.selection.map(s=>s.value):(this.value=e.selection[0]?.value,i(this,v).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0))),i(this,L).call(this),i(this,B).call(this)})};L=new WeakMap;B=new WeakMap;he=new WeakSet;Ne=function(){this.addEventListener("blur",i(this,E)),this.addEventListener("gds-blur",i(this,E)),this.addEventListener("keydown",i(this,V))};pe=new WeakSet;Ve=function(){this.removeEventListener("blur",i(this,E)),this.removeEventListener("gds-blur",i(this,E)),this.removeEventListener("keydown",i(this,V))};E=new WeakMap;V=new WeakMap;l.styles=[P,Tt,Mt];t([o({attribute:"supporting-text"})],l.prototype,"supportingText",2);t([o({type:Boolean,reflect:!0})],l.prototype,"open",2);t([o({type:Boolean,reflect:!0})],l.prototype,"searchable",2);t([o({type:Boolean,reflect:!0})],l.prototype,"multiple",2);t([o({type:Boolean,reflect:!0})],l.prototype,"clearable",2);t([o({type:Boolean,reflect:!0})],l.prototype,"combobox",2);t([o()],l.prototype,"compareWith",2);t([o()],l.prototype,"searchFilter",2);t([o({type:Boolean,attribute:"sync-popover-width"})],l.prototype,"syncPopoverWidth",2);t([o({type:Number,attribute:"max-height"})],l.prototype,"maxHeight",2);t([o({reflect:!0})],l.prototype,"size",2);t([o({type:Boolean,attribute:"hide-label"})],l.prototype,"hideLabel",2);t([o({type:Boolean})],l.prototype,"plain",2);t([o({type:Boolean})],l.prototype,"disableMobileStyles",2);t([o({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],l.prototype,"showExtendedSupportingText",2);t([G("#trigger")],l.prototype,"_elTriggerBtn",2);t([gt("#listbox")],l.prototype,"_elListbox",2);t([G("#searchinput")],l.prototype,"_elSearchInput",2);t([Ke({attributes:!0,childList:!0,subtree:!0,characterData:!0})],l.prototype,"_handleLightDOMChange",1);t([C("open")],l.prototype,"_handleOpenChange",1);l=t([je({labelledBy:"#trigger",describedBy:"#trigger",errorMessage:"#trigger"}),ge()],l);let _e=class extends we(ke(Se(l))){};_e=t([y("gds-dropdown",{dependsOn:[k,w,h,S,Ee,Te,ot,pt]})],_e);export{_e as G,f as a,I as b,Tt as f,gt as r};
