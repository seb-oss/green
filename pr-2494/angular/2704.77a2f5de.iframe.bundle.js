"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[2704],{227:(e,t,s)=>{s.d(t,{w:()=>x});var i,o,a,r,l,n,d,c=s(6861),p=s(6743),h=s(4367),g=s(3578),u=s(8641),y=s(7526),b=s(4457),v=s(1374),m=s(9443).AH`
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
`;let x=class extends u.j{constructor(){super(),(0,c.VK)(this,o),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._leadHasBadge=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,(0,c.VK)(this,i,(e,t)=>{const s=t.target.assignedNodes({flatten:!0}),i=s.length>0&&s.some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&""!==e.textContent?.trim());"lead"===e?(this._leadSlotOccupied=i,this._leadHasBadge=i&&s.some(e=>"gds-badge"===e.getAttribute?.("gds-element"))):"trail"===e?this._trailSlotOccupied=i:"action"===e&&(this._actionSlotOccupied=i)})}connectedCallback(){super.connectedCallback(),b.n.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"lead-has-badge":this._leadHasBadge,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:"small"===this.size};return y.qy`
      <div class="field ${(0,g.H)(e)}" part="_base">
        ${(0,c.jq)(this,o,a).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};i=new WeakMap,o=new WeakSet,a=function(){const e={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return y.qy`
      ${(0,c.jq)(this,o,r).call(this)} ${(0,c.jq)(this,o,l).call(this)}
      <div class="${(0,g.H)(e)}">
        ${(0,c.jq)(this,o,n).call(this)} ${(0,c.jq)(this,o,d).call(this)}
      </div>
    `},r=function(){return y.qy` <slot
      name="lead"
      @slotchange=${e=>(0,c.S7)(this,i).call(this,"lead",e)}
    ></slot>`},l=function(){return y.qy`<div
      class="main-slot-wrap ${(0,g.H)({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>(0,c.S7)(this,i).call(this,"main",e)}
      ></slot>
    </div>`},n=function(){return y.qy`
      <slot
        name="action"
        @slotchange=${e=>(0,c.S7)(this,i).call(this,"action",e)}
      ></slot>
    `},d=function(){return y.qy`
      <slot
        name="trail"
        @slotchange=${e=>(0,c.S7)(this,i).call(this,"trail",e)}
      ></slot>
    `},x.styles=[m],(0,c.Cc)([(0,h.MZ)()],x.prototype,"size",2),(0,c.Cc)([(0,h.MZ)({type:Boolean})],x.prototype,"multiline",2),(0,c.Cc)([(0,h.MZ)({type:Boolean,reflect:!0})],x.prototype,"disabled",2),(0,c.Cc)([(0,h.MZ)({type:Boolean})],x.prototype,"invalid",2),(0,c.Cc)([(0,h.P)("slot:not([name])")],x.prototype,"_mainSlotElement",2),(0,c.Cc)([(0,h.wk)()],x.prototype,"_leadSlotOccupied",2),(0,c.Cc)([(0,h.wk)()],x.prototype,"_leadHasBadge",2),(0,c.Cc)([(0,h.wk)()],x.prototype,"_trailSlotOccupied",2),(0,c.Cc)([(0,h.wk)()],x.prototype,"_actionSlotOccupied",2),(0,c.Cc)([(0,v.w)("disabled")],x.prototype,"_handleDisabledChange",1),x=(0,c.Cc)([(0,y.Y$)("gds-field-base"),(0,p.cc)()],x)},801:(e,t,s)=>{s.d(t,{K:()=>v});var i,o,a,r,l,n=s(6861),d=s(4367),c=s(3578),p=s(8641),h=s(7526),g=s(5073),u=s(4987),y=s(6312),b=s(9443).AH`
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
`;let v=class extends((0,u.Q8)((0,u.TM)((0,u.lt)(p.j)))){constructor(){super(...arguments),(0,n.VK)(this,i),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1,this.leadSlotOccupied=!1}render(){const e=(0,c.H)({badge:!0,[this.variant]:!0,[this.size]:"small"===this.size,notification:this.notification,"with-content":this.notification&&this.mainSlotOccupied,rounded:this.rounded});return h.qy`
      <div class="${e}">
        ${[(0,n.jq)(this,i,a).call(this),(0,n.jq)(this,i,r).call(this),(0,n.jq)(this,i,l).call(this)]}
      </div>
    `}};i=new WeakSet,o=function(e,t){const s=e.target.assignedNodes({flatten:!0});this[t]=s.length>0&&s.some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&""!==e.textContent?.trim())},a=function(){if("small"!==this.size||!this.notification)return h.qy`<slot
        name="lead"
        @slotchange=${e=>(0,n.jq)(this,i,o).call(this,e,"leadSlotOccupied")}
      ></slot>`},r=function(){return h.qy`<slot
      @slotchange=${e=>(0,n.jq)(this,i,o).call(this,e,"mainSlotOccupied")}
    ></slot>`},l=function(){return h.qy`<slot name="trail"></slot>`},v.styles=[g.LU,b],(0,n.Cc)([(0,d.MZ)()],v.prototype,"variant",2),(0,n.Cc)([(0,d.MZ)({type:String})],v.prototype,"size",2),(0,n.Cc)([(0,d.MZ)({attribute:"notification",type:Boolean,reflect:!0})],v.prototype,"notification",2),(0,n.Cc)([(0,d.MZ)({attribute:"rounded",type:Boolean,reflect:!0})],v.prototype,"rounded",2),(0,n.Cc)([(0,d.wk)()],v.prototype,"mainSlotOccupied",2),(0,n.Cc)([(0,d.wk)()],v.prototype,"leadSlotOccupied",2),v=(0,n.Cc)([(0,h.Y$)("gds-badge",{dependsOn:[y.o]})],v)},2606:(e,t,s)=>{s.d(t,{A:()=>i}),s(6861);var i=s(9443).AH`
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
`},2655:(e,t,s)=>{s.d(t,{$:()=>x});var i,o,a,r,l,n,d=s(6861),c=s(6743),p=s(4367),h=s(505),g=s(7595),u=s(7617),y=s(4464),b=s(8641),v=s(7526),m=s(9443).AH`
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
`;let x=class extends b.j{constructor(){super(...arguments),(0,d.VK)(this,i),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,(0,d.VK)(this,a,()=>v.qy`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${(0,c.ab)("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${(0,d.S7)(this,r)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),(0,d.VK)(this,r,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this._extendedSupportingText?.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText})}),(0,d.VK)(this,l,()=>{this.showExtendedSupportingText&&this._extendedSupportingText?.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`)})}render(){return v.qy`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${(0,h.z)(this._hasExtendedSupportingText,(0,d.S7)(this,a))}
      </div>

      ${(0,d.jq)(this,i,n).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",(0,d.S7)(this,l))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",(0,d.S7)(this,l))}};i=new WeakSet,o=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0},a=new WeakMap,r=new WeakMap,l=new WeakMap,n=function(){return v.qy`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${(0,d.jq)(this,i,o)}
        ></slot>
      </div>
    `},x.styles=[m],(0,d.Cc)([(0,p.MZ)({type:Boolean,reflect:!0})],x.prototype,"showExtendedSupportingText",2),(0,d.Cc)([(0,p.wk)()],x.prototype,"_hasExtendedSupportingText",2),(0,d.Cc)([(0,p.P)("#extended-supporting-text")],x.prototype,"_extendedSupportingText",2),x=(0,d.Cc)([(0,v.Y$)("gds-form-control-header",{dependsOn:[g.t,u.z,y.w]}),(0,c.cc)()],x)},2704:(e,t,s)=>{s.d(t,{E:()=>ae});var i,o,a=s(7198),r=s(6861),l=s(6743),n=s(9443),d=s(4367),c=s(4652),p=s(7639),h=s(505),g=s(7956),u=s(227),y=s(7708),b=s(2655),v=s(3104),m=s(8641),x=s(7526),f=s(4457),C=s(5552),w=s(1374),k=s(825),_=n.AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
      overscroll-behavior: contain;
    }
  }
`,$=s(5017);let S=class extends m.j{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,(0,r.VK)(this,i,(0,v._)()),(0,r.VK)(this,o,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(e=>{e!==t&&(e.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})}),new C.y(this)}get navigableItems(){return this.visibleOptionElements}get options(){return(0,r.S7)(this,i).value&&(0,k.o)((0,r.S7)(this,i).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&"gds-option"===e.gdsElementName)||[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(e=>this.compareWith(e,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),f.n.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",(0,r.S7)(this,o))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return x.qy`<slot ${(0,v.K)((0,r.S7)(this,i))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};i=new WeakMap,o=new WeakMap,S.styles=_,(0,r.Cc)([(0,d.MZ)({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],S.prototype,"multiple",2),(0,r.Cc)([(0,d.MZ)()],S.prototype,"compareWith",2),(0,r.Cc)([(0,w.w)("multiple")],S.prototype,"_rerenderOptions",1),S=(0,r.Cc)([(0,x.Y$)("gds-listbox",{dependsOn:[$.Y]})],S);var M,E,z,T,q,V,L,O,A,Z,W,F,j,H,B,K,D,P,Y,N,U,G=s(2606),I=s(5073),Q=s(685),R=s(4987),J=s(8558),X=s(6290),ee=s(6428),te=s(2581),se=s(2144),ie=n.AH`
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
`;let oe=class extends J.S{constructor(){super(...arguments),(0,r.VK)(this,E),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,(0,r.VK)(this,M),(0,r.VK)(this,T,()=>x.qy`
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
        @input=${e=>{this.value=e.target.value,(0,r.S7)(this,K).call(this),(0,r.S7)(this,W).call(this,e),(0,r.S7)(this,O).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{"ArrowDown"===e.key&&(e.preventDefault(),(0,r.S7)(this,O).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(e=>e.focus())),"Enter"===e.key&&(0,r.S7)(this,D).call(this)}}
      />
    `),(0,r.VK)(this,q,()=>x.qy`
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
          <span>${(0,p._)(this.displayValue)}</span>
        </slot>
      </button>
    `),(0,r.VK)(this,V,e=>{this.open||this.dispatchCustomEvent("gds-blur",{detail:{relatedTarget:e.relatedTarget},bubbles:!1,composed:!0})}),(0,r.VK)(this,L,e=>{if(this.combobox){const t=e.getBoundingClientRect(),s=window.innerHeight-t.bottom,i=t.top;let o=Math.min(i,this.maxHeight);return s>i&&(o=Math.min(s,this.maxHeight)),o-16+"px"}return Math.min(window.innerHeight,this.maxHeight)-16+"px"}),(0,r.VK)(this,O,(e,t)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1})),(0,r.VK)(this,A,e=>{(0,r.S7)(this,O).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),(0,r.VK)(this,Z,e=>{e.preventDefault(),e.stopPropagation(),this.value=void 0,this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),(0,r.S7)(this,K).call(this),(0,r.S7)(this,D).call(this)}),(0,r.VK)(this,W,e=>{if(!e.currentTarget)return;if(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}}))return;const t=e.currentTarget;this.options.forEach(e=>e.hidden=!1),t.value&&this.options.filter(e=>!this.searchFilter(t.value,e)).forEach(e=>e.hidden=!0)}),(0,r.VK)(this,F,e=>{this._elListbox?.then(t=>{if("ArrowDown"===e.key||"Tab"===e.key)return e.preventDefault(),void t.focus()})}),(0,r.VK)(this,j,e=>{if("Tab"===e.key&&this.searchable)return e.preventDefault(),void this._elSearchInput?.focus()}),(0,r.VK)(this,H,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),(0,r.VK)(this,K,()=>{this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))}),(0,r.VK)(this,D,()=>{this.updateComplete.then(()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),(0,r.VK)(this,N,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(0,r.S7)(this,O).call(this,!1,"close")&&(this.open=!1)}),(0,r.VK)(this,U,e=>{"Tab"===e.key&&!this.searchable&&(0,r.S7)(this,O).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())})}get type(){return"gds-dropdown"}get options(){return(0,r.S7)(this,M)?Array.from((0,r.S7)(this,M)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if((0,r.S7)(this,M))return Array.from((0,r.S7)(this,M)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){let e;return e=Array.isArray(this.value)?this.value.slice(0,5).reduce((e,t)=>e+this.options.find(e=>e.value===t)?.innerText+", ","").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):this.options.find(e=>e.selected)?.innerText,e||this.placeholder?.innerText||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",(0,r.S7)(this,V)),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",(0,r.S7)(this,V))}render(){return x.qy`
      ${(0,h.z)(!this.plain&&!this.hideLabel,()=>x.qy`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${(0,h.z)(this.supportingText.length>0,()=>x.qy`<span slot="supporting-text" id="supporting-text">
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
        .calcMaxHeight=${(0,r.S7)(this,L)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[(0,g.cY)(8),(0,g.UU)()]:se.E.DefaultMiddleware}
        @gds-ui-state=${(0,r.S7)(this,A)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${(0,h.z)(this.value&&this.multiple&&this.value.length>0,()=>x.qy`<gds-badge
                rounded
                size=${"small"===this.size?"small":"default"}
                slot="lead"
                aria-label=${(0,l.ab)(l.gx`${this.value.length} options selected`)}
              >
                ${this.value.length}</gds-badge
              >`)}
          ${(0,h.z)(this.clearable&&this.value&&!this.disabled,()=>x.qy`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${"small"===this.size?"xs":"small"}
                label="${(0,l.ab)("Clear selection")}"
                @click=${(0,r.S7)(this,Z)}
                slot="action"
              >
                <gds-icon-cross-small></gds-icon-cross-small>
              </gds-button>`)}
          ${(0,h.z)(this.combobox&&!this.multiple,()=>(0,r.S7)(this,T).call(this))}
          ${(0,h.z)(!this.combobox||this.multiple,()=>(0,r.S7)(this,q).call(this))}
          <gds-icon-chevron-bottom
            size=${"small"===this.size?"m":"l"}
            slot="action"
          ></gds-icon-chevron-bottom>
        </gds-field-base>

        ${(0,h.z)(this.searchable,()=>x.qy`<input
              id="searchinput"
              type="text"
              aria-label="${(0,l.ab)("Filter available options")}"
              placeholder="${(0,l.ab)("Search")}"
              @keydown=${(0,r.S7)(this,F)}
              @input=${(0,r.S7)(this,W)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${(0,c.J)(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${(0,r.jq)(this,E,B)}"
          @gds-focus="${(0,r.S7)(this,H)}"
          @keydown=${(0,r.S7)(this,j)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${(0,h.z)((0,r.jq)(this,E,z).call(this),()=>x.qy`
          <gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.invalid?this.errorMessage:n.s6}
            </slot>
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){this.requestUpdate(),(0,r.OV)(this,M,this.querySelectorAll("[gds-element=gds-option]")),this.multiple?this._handleValueChange():void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:this.combobox||this.placeholder||void 0!==this.options.find(e=>this.compareWith(e.value,this.value))||(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){var e=this;const t=this.open;this.options.forEach(e=>e.hidden=!t),t?(0,r.jq)(this,E,P).call(this):((0,r.jq)(this,E,Y).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const s=this.options.find(e=>e.selected);requestAnimationFrame((0,a.A)(function*(){yield e.updateComplete,s?.scrollIntoView({block:"center"})}))}};M=new WeakMap,E=new WeakSet,z=function(){return!this.plain},T=new WeakMap,q=new WeakMap,V=new WeakMap,L=new WeakMap,O=new WeakMap,A=new WeakMap,Z=new WeakMap,W=new WeakMap,F=new WeakMap,j=new WeakMap,H=new WeakMap,B=function(){this._elListbox.then(e=>{this.multiple?this.value=e.selection.map(e=>e.value):(this.value=e.selection[0]?.value,(0,r.S7)(this,O).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0))),(0,r.S7)(this,K).call(this),(0,r.S7)(this,D).call(this)})},K=new WeakMap,D=new WeakMap,P=function(){this.addEventListener("blur",(0,r.S7)(this,N)),this.addEventListener("gds-blur",(0,r.S7)(this,N)),this.addEventListener("keydown",(0,r.S7)(this,U))},Y=function(){this.removeEventListener("blur",(0,r.S7)(this,N)),this.removeEventListener("gds-blur",(0,r.S7)(this,N)),this.removeEventListener("keydown",(0,r.S7)(this,U))},N=new WeakMap,U=new WeakMap,oe.styles=[I.LU,G.A,ie],(0,r.Cc)([(0,d.MZ)({attribute:"supporting-text"})],oe.prototype,"supportingText",2),(0,r.Cc)([(0,d.MZ)({type:Boolean,reflect:!0})],oe.prototype,"open",2),(0,r.Cc)([(0,d.MZ)({type:Boolean,reflect:!0})],oe.prototype,"searchable",2),(0,r.Cc)([(0,d.MZ)({type:Boolean,reflect:!0})],oe.prototype,"multiple",2),(0,r.Cc)([(0,d.MZ)({type:Boolean,reflect:!0})],oe.prototype,"clearable",2),(0,r.Cc)([(0,d.MZ)({type:Boolean,reflect:!0})],oe.prototype,"combobox",2),(0,r.Cc)([(0,d.MZ)()],oe.prototype,"compareWith",2),(0,r.Cc)([(0,d.MZ)()],oe.prototype,"searchFilter",2),(0,r.Cc)([(0,d.MZ)({type:Boolean,attribute:"sync-popover-width"})],oe.prototype,"syncPopoverWidth",2),(0,r.Cc)([(0,d.MZ)({type:Number,attribute:"max-height"})],oe.prototype,"maxHeight",2),(0,r.Cc)([(0,d.MZ)({reflect:!0})],oe.prototype,"size",2),(0,r.Cc)([(0,d.MZ)({type:Boolean,attribute:"hide-label"})],oe.prototype,"hideLabel",2),(0,r.Cc)([(0,d.MZ)({type:Boolean})],oe.prototype,"plain",2),(0,r.Cc)([(0,d.MZ)({type:Boolean})],oe.prototype,"disableMobileStyles",2),(0,r.Cc)([(0,d.MZ)({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],oe.prototype,"showExtendedSupportingText",2),(0,r.Cc)([(0,d.P)("#trigger")],oe.prototype,"_elTriggerBtn",2),(0,r.Cc)([(0,d.nJ)("#listbox")],oe.prototype,"_elListbox",2),(0,r.Cc)([(0,d.P)("#searchinput")],oe.prototype,"_elSearchInput",2),(0,r.Cc)([(0,Q.L)({attributes:!0,childList:!0,subtree:!0,characterData:!0})],oe.prototype,"_handleLightDOMChange",1),(0,r.Cc)([(0,w.w)("value")],oe.prototype,"_handleValueChange",1),(0,r.Cc)([(0,w.w)("open")],oe.prototype,"_handleOpenChange",1),oe=(0,r.Cc)([(0,l.cc)()],oe);let ae=class extends((0,R.Q8)((0,R.TM)((0,R.lt)(oe)))){};ae=(0,r.Cc)([(0,x.Y$)("gds-dropdown",{dependsOn:[b.$,y.V,u.w,S,se.E,X.V,ee.o,te.r]})],ae)},4464:(e,t,s)=>{s.d(t,{w:()=>r});var i=s(6861),o=s(7526),a=s(2610);let r=class extends a.M{};r._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7.375C12.3452 7.375 12.625 7.65482 12.625 8C12.625 8.34518 12.3452 8.625 12 8.625C11.6548 8.625 11.375 8.34518 11.375 8C11.375 7.65482 11.6548 7.375 12 7.375Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>',r._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>',r._name="circle-info",r._width=24,r._height=24,r._viewBox="0 0 24 24",r=(0,i.Cc)([(0,o.Y$)("gds-icon-circle-info")],r)},5017:(e,t,s)=>{s.d(t,{Y:()=>x});var i,o,a,r=s(6861),l=s(4367),n=s(505),d=s(6290),c=s(8641),p=s(7526),h=s(8146),g=s(8057),u=s(5073),y=s(4457),b=s(1374),v=s(4397),m=s(7326);let x=class extends((0,v.z)(c.j)){constructor(){super(),(0,r.VK)(this,o),(0,r.VK)(this,i,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",(0,r.jq)(this,o,a)),this.addEventListener("keydown",e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),(0,r.jq)(this,o,a).call(this,e))})}get hidden(){return(0,r.S7)(this,i)}set hidden(e){const t=e.toString();(0,r.OV)(this,i,"true"===t),(0,r.S7)(this,i)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),y.n.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){const e=this.parentElement?.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),p.qy`<div class="item">
      ${(0,n.z)(e,()=>(0,g.o)({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};i=new WeakMap,o=new WeakSet,a=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})},x.styles=[u.LU,h.A,m.A],(0,r.Cc)([(0,l.MZ)()],x.prototype,"value",2),(0,r.Cc)([(0,l.MZ)({type:Boolean,reflect:!0})],x.prototype,"hidden",1),(0,r.Cc)([(0,l.MZ)({attribute:"aria-selected",reflect:!0})],x.prototype,"selected",2),(0,r.Cc)([(0,l.MZ)({type:Boolean,reflect:!0})],x.prototype,"isPlaceholder",2),(0,r.Cc)([(0,b.w)("isPlaceholder")],x.prototype,"_handlePlaceholderStatusChange",1),x=(0,r.Cc)([(0,p.Y$)("gds-option",{dependsOn:[d.V]})],x)},6290:(e,t,s)=>{s.d(t,{V:()=>r});var i=s(6861),o=s(7526),a=s(2610);let r=class extends a.M{};r._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',r._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7425 2.99442C22.2979 3.40452 22.4156 4.18717 22.0055 4.74251L10.0055 20.9925C9.80427 21.2651 9.501 21.4442 9.16518 21.489C8.82936 21.5338 8.48974 21.4403 8.22411 21.23L2.22411 16.48C1.68284 16.0515 1.59143 15.2654 2.01993 14.7241C2.44844 14.1828 3.2346 14.0914 3.77587 14.5199L8.76235 18.4675L19.9944 3.2574C20.4045 2.70206 21.1872 2.58432 21.7425 2.99442Z" fill="currentColor"/>',r._name="checkmark",r._width=24,r._height=24,r._viewBox="0 0 24 24",r=(0,i.Cc)([(0,o.Y$)("gds-icon-checkmark")],r)},6312:(e,t,s)=>{s.d(t,{o:()=>n});var i=s(6861),o=s(5073),a=s(7526),r=s(8833),l=s(9443).AH`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
`;let n=class extends r.o{render(){return a.qy`<slot></slot>`}};n.styles=[o.LU,l],n=(0,i.Cc)([(0,a.Y$)("gds-flex")],n)},6428:(e,t,s)=>{s.d(t,{o:()=>r});var i=s(6861),o=s(7526),a=s(2610);let r=class extends a.M{};r._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',r._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>',r._name="chevron-bottom",r._width=24,r._height=24,r._viewBox="0 0 24 24",r=(0,i.Cc)([(0,o.Y$)("gds-icon-chevron-bottom")],r)},7617:(e,t,s)=>{s.d(t,{z:()=>d});var i=s(6861),o=s(9443),a=s(5073),r=s(9399),l=s(7526),n=s(8833);let d=class extends n.o{constructor(){super(),this.variant="primary",this.padding="m;m{xl}",this["border-radius"]="s",this.gap="m;m{l}"}render(){return l.qy`<slot></slot>`}};d.styles=[a.LU,o.AH`
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
    `],(0,i.Cc)([(0,r.F)({styleTemplate:function(e,t){let s,i,o;switch(t[0]){case"primary":default:s="transparent",i=`var(--gds-sys-color-l${this.level}-neutral-01)`,o="var(--gds-sys-color-content-neutral-01)";break;case"secondary":s="var(--gds-sys-color-border-subtle-01)",i=`var(--gds-sys-color-l${this.level}-neutral-02)`,o="var(--gds-sys-color-content-neutral-01)";break;case"tertiary":s="transparent",i=`var(--gds-sys-color-l${this.level}-neutral-02)`,o="var(--gds-sys-color-content-neutral-01)";break;case"brand-01":s="transparent",i=`var(--gds-sys-color-l${this.level}-brand-01)`,o="var(--gds-sys-color-content-inversed)";break;case"brand-02":s="transparent",i=`var(--gds-sys-color-l${this.level}-brand-02)`,o="var(--gds-sys-color-content-brand-02)";break;case"positive":case"negative":case"warning":case"information":case"notice":s=`var(--gds-sys-color-border-${t[0]}-02)`,i=`var(--gds-sys-color-l${this.level}-${t[0]}-01)`,o=`var(--gds-sys-color-content-${t[0]}-01)`}return`\n      --_border-color: ${s};\n      --_background-color: ${i};\n      --_color: ${o};\n      `}})],d.prototype,"variant",2),d=(0,i.Cc)([(0,l.Y$)("gds-card")],d)},7708:(e,t,s)=>{s.d(t,{V:()=>y});var i,o,a=s(6861),r=s(9443),l=s(4367),n=s(505),d=s(801),c=s(8745),p=s(8641),h=s(1374),g=s(7526),u=r.AH`
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
`;let y=class extends p.j{constructor(){super(...arguments),(0,a.VK)(this,i)}_handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter?.[1])}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return g.qy`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${(0,n.z)(this.errorMessage,()=>g.qy`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${(0,a.jq)(this,i,o).call(this)}
      </div>
    </div>`}};i=new WeakSet,o=function(){if(!this.charCounter||!1===this.charCounter[1])return r.s6;const[e,t]=this.charCounter;return g.qy`<gds-badge variant="${t}">${e}</gds-badge>`},y.styles=[u],(0,a.Cc)([(0,l.MZ)({type:Array})],y.prototype,"charCounter",2),(0,a.Cc)([(0,l.MZ)()],y.prototype,"errorMessage",2),(0,a.Cc)([(0,h.w)("charCounter"),(0,h.w)("errorMessage")],y.prototype,"_handleVisibilityChange",1),y=(0,a.Cc)([(0,g.Y$)("gds-form-control-footer",{dependsOn:[d.K,c.f]})],y)},8057:(e,t,s)=>{s.d(t,{U:()=>l,o:()=>r}),s(6861);var i=s(3578),o=s(505),a=s(7526);const r=e=>n({...e,type:"checkbox"}),l=e=>n({...e,type:"radio"}),n=e=>{const{type:t,checked:s,indeterminate:r,disabled:l,invalid:n}=e,d={"rbcb--checkbox":"checkbox"===t,"rbcb--radio":"radio"===t,"--checked":s,"--indeterminate":r,"--disabled":l,"--invalid":n};return a.qy`
    <div class="rbcb ${(0,i.H)(d)}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${(0,o.z)("checkbox"===t,()=>a.qy`
            ${(0,o.z)(r,()=>a.qy`<gds-icon-minus-small
                  class="rbcb__icon"
                  stroke="4"
                ></gds-icon-minus-small>`,()=>(0,o.z)(s,()=>a.qy`<gds-icon-checkmark
                      class="rbcb__icon"
                      stroke="4"
                    ></gds-icon-checkmark>`))}
          `)}
      </div>
    </div>
  `}},8745:(e,t,s)=>{s.d(t,{f:()=>r});var i=s(6861),o=s(7526),a=s(2610);let r=class extends a.M{};r._regularSVG='<path d="M12 8.75V12.75M12 15.5V15.49M12.25 15.5C12.25 15.6381 12.1381 15.75 12 15.75C11.8619 15.75 11.75 15.6381 11.75 15.5C11.75 15.3619 11.8619 15.25 12 15.25C12.1381 15.25 12.25 15.3619 12.25 15.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M2.79693 16.2279L10.2809 3.64118C11.0561 2.33738 12.9438 2.33738 13.719 3.64118L21.203 16.2279C21.9957 17.561 21.035 19.25 19.484 19.25H4.516C2.96497 19.25 2.00424 17.561 2.79693 16.2279Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>',r._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M9.63618 3.25787C10.7021 1.46515 13.2977 1.46515 14.3636 3.25787L21.8476 15.8446C22.9376 17.6777 21.6165 20 19.4839 20H4.51593C2.38326 20 1.06225 17.6777 2.15221 15.8446L9.63618 3.25787ZM12 8C12.4142 8 12.75 8.33579 12.75 8.75V12.75C12.75 13.1642 12.4142 13.5 12 13.5C11.5858 13.5 11.25 13.1642 11.25 12.75V8.75C11.25 8.33579 11.5858 8 12 8ZM13 15.5C13 16.0523 12.5523 16.5 12 16.5C11.4477 16.5 11 16.0523 11 15.5C11 14.9477 11.4477 14.5 12 14.5C12.5523 14.5 13 14.9477 13 15.5Z" fill="currentColor"/>',r._name="triangle-exclamation",r._width=24,r._height=24,r._viewBox="0 0 24 24",r=(0,i.Cc)([(0,o.Y$)("gds-icon-triangle-exclamation")],r)},8833:(e,t,s)=>{s.d(t,{o:()=>h});var i=s(6861),o=s(4367),a=s(8641),r=s(5073),l=s(9399),n=s(4508),d=s(7526),c=s(4987),p=s(9443).AH`
  :host {
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
`;let h=class extends((0,c.Q8)((0,c.vi)((0,c.TM)((0,c.Md)((0,c.lt)((0,c.qC)(a.j))))))){constructor(){super(...arguments),this.level="2"}render(){return d.qy`<slot></slot>`}};h.styles=[r.LU,p],(0,i.Cc)([(0,l.F)()],h.prototype,"display",2),(0,i.Cc)([(0,o.MZ)()],h.prototype,"level",2),(0,i.Cc)([(0,l.F)((0,n.T$)("content"))],h.prototype,"color",2),(0,i.Cc)([(0,l.F)((0,n.T$)("background"))],h.prototype,"background",2),(0,i.Cc)([(0,l.F)({styleTemplate:function(e,t){const s=this,[i,o=s["border-style"]||"solid",a=s["border-color"]||"subtle-01"]=t;return`border: var(--gds-sys-space-${i}) ${o} ${(0,n.ol)(a,"border",s.level)};`}})],h.prototype,"border",2),(0,i.Cc)([(0,l.F)((0,n.T$)("border"))],h.prototype,"border-color",2),(0,i.Cc)([(0,l.F)(n.MF)],h.prototype,"border-width",2),(0,i.Cc)([(0,l.F)()],h.prototype,"border-style",2),(0,i.Cc)([(0,l.F)(n.SE)],h.prototype,"border-radius",2),(0,i.Cc)([(0,l.F)({valueTemplate:e=>`var(--gds-sys-shadow-${e}-01), var(--gds-sys-shadow-${e}-02)`})],h.prototype,"box-shadow",2),(0,i.Cc)([(0,l.F)()],h.prototype,"opacity",2),(0,i.Cc)([(0,l.F)()],h.prototype,"overflow",2),(0,i.Cc)([(0,l.F)()],h.prototype,"box-sizing",2),(0,i.Cc)([(0,l.F)()],h.prototype,"z-index",2),(0,i.Cc)([(0,l.F)({styleTemplate:(e,t)=>`font: var(--gds-sys-text-${t[0]});`})],h.prototype,"font",2),(0,i.Cc)([(0,l.F)({valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],h.prototype,"font-weight",2),(0,i.Cc)([(0,l.F)()],h.prototype,"text-align",2),(0,i.Cc)([(0,l.F)()],h.prototype,"text-wrap",2),(0,i.Cc)([(0,l.F)()],h.prototype,"overflow-wrap",2),(0,i.Cc)([(0,l.F)()],h.prototype,"white-space",2),(0,i.Cc)([(0,l.F)({...n.MF,styleTemplate:(e,t)=>{const s=t[0];return`gap: ${s} ${t[1]||s};`},cacheOverrideKey:"flex"})],h.prototype,"gap",2),(0,i.Cc)([(0,l.F)()],h.prototype,"align-items",2),(0,i.Cc)([(0,l.F)()],h.prototype,"align-content",2),(0,i.Cc)([(0,l.F)()],h.prototype,"justify-content",2),(0,i.Cc)([(0,l.F)()],h.prototype,"justify-items",2),(0,i.Cc)([(0,l.F)()],h.prototype,"flex-direction",2),(0,i.Cc)([(0,l.F)()],h.prototype,"flex-wrap",2),(0,i.Cc)([(0,l.F)()],h.prototype,"place-items",2),(0,i.Cc)([(0,l.F)()],h.prototype,"place-content",2),(0,i.Cc)([(0,l.F)()],h.prototype,"aspect-ratio",2),(0,i.Cc)([(0,l.F)()],h.prototype,"cursor",2),(0,i.Cc)([(0,l.F)()],h.prototype,"pointer-events",2),h=(0,i.Cc)([(0,d.Y$)("gds-div")],h)}}]);
//# sourceMappingURL=2704.77a2f5de.iframe.bundle.js.map