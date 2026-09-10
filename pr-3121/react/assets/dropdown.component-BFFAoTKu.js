import{i as S,t as q,_ as t,g as C,h as o,f as he,w as pe,m as ge,G as D,b as l,d as n,n as a,r as E,c as s,A as ue,e as P}from"./declarative-layout-mixins-qhlmn3Eh.js";import{l as le,m as B,s as We}from"./runtime-Cgryh99k.js";import{e as j,w as z,a as Le}from"./watch-rsnQmdjn.js";import{o as Ae}from"./icon.component-CAofjGnH.js";import{n as b}from"./when-CI7b_ccM.js";import{G as be,o as De,f as Fe}from"./popover.component-rwnBe69h.js";import{e as w}from"./class-map-CWftihNH.js";import{T as ne,c as Ge}from"./transitional-styles--Sf0A24C.js";import{a as He,G as Ie}from"./card.component-BKgIAeaZ.js";import{I as Pe}from"./triangle-exclamation.component-C0N8A3rw.js";import{G as Ne,o as Ve,a as qe}from"./button.component-CQcepbFA.js";import{I as je,a as Re}from"./chevron-bottom.component-sZw8SXiD.js";import{F as Ue,m as Ke,a as Xe,L as Ye}from"./menu-listbox.style-BsrRqb_u.js";import{I as fe}from"./checkmark.component-PWPV95-w.js";import{I as Je}from"./cross-small.component-CLPBvSQK.js";const Qe=S`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-neutral-02);
  }
`;var Ze=Qe;let N=class extends He{render(){return o`<slot></slot>`}};N.styles=[q,Ze];N=t([C("gds-flex")],N);const et=S`
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
`;var tt=et,x,de,ve,me,ye;let f=class extends he(pe(ge(D))){constructor(){super(...arguments),l(this,x),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1,this.leadSlotOccupied=!1}render(){const e=w({badge:!0,[this.variant]:!0,[this.size]:this.size==="small",notification:this.notification,"with-content":this.notification&&this.mainSlotOccupied,rounded:this.rounded});return o`
      <div class="${e}">
        ${[n(this,x,ve).call(this),n(this,x,me).call(this),n(this,x,ye).call(this)]}
      </div>
    `}};x=new WeakSet;de=function(e,i){const h=e.target.assignedNodes({flatten:!0});this[i]=h.length>0&&h.some(r=>r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&r.textContent?.trim()!=="")};ve=function(){if(this.size!=="small"||!this.notification)return o`<slot
        name="lead"
        @slotchange=${e=>n(this,x,de).call(this,e,"leadSlotOccupied")}
      ></slot>`};me=function(){return o`<slot
      @slotchange=${e=>n(this,x,de).call(this,e,"mainSlotOccupied")}
    ></slot>`};ye=function(){return o`<slot name="trail"></slot>`};f.styles=[q,tt];t([a()],f.prototype,"variant",2);t([a({type:String})],f.prototype,"size",2);t([a({attribute:"notification",type:Boolean,reflect:!0})],f.prototype,"notification",2);t([a({attribute:"rounded",type:Boolean,reflect:!0})],f.prototype,"rounded",2);t([E()],f.prototype,"mainSlotOccupied",2);t([E()],f.prototype,"leadSlotOccupied",2);f=t([C("gds-badge",{dependsOn:[N]})],f);const st=e=>it({...e,type:"checkbox"}),it=e=>{const{type:i,checked:c,indeterminate:h,disabled:r,invalid:g}=e;return o`
    <div class="rbcb ${w({"rbcb--checkbox":i==="checkbox","rbcb--radio":i==="radio","--checked":c,"--indeterminate":h,"--disabled":r,"--invalid":g})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${b(i==="checkbox",()=>o`
            <gds-icon-minus-small
              class=${w({rbcb__icon:!0,"rbcb__icon--visible":h})}
              stroke="4"
            ></gds-icon-minus-small>
            <gds-icon-checkmark
              class=${w({rbcb__icon:!0,"rbcb__icon--visible":c})}
              stroke="4"
            ></gds-icon-checkmark>
          `)}
      </div>
    </div>
  `},at=S`
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
`;var ot=at,O,_,xe,_e,we,ke,$e;let p=class extends D{constructor(){super(),l(this,_),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._leadHasBadge=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,l(this,O,(e,i)=>{const h=i.target.assignedNodes({flatten:!0}),r=h.length>0&&h.some(g=>g.nodeType===Node.ELEMENT_NODE||g.nodeType===Node.TEXT_NODE&&g.textContent?.trim()!=="");e==="lead"?(this._leadSlotOccupied=r,this._leadHasBadge=r&&h.some(g=>g.getAttribute?.("gds-element")==="gds-badge")):e==="trail"?this._trailSlotOccupied=r:e==="action"&&(this._actionSlotOccupied=r)})}connectedCallback(){super.connectedCallback(),ne.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"lead-has-badge":this._leadHasBadge,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return o`
      <div class="field ${w(e)}" part="_base">
        ${n(this,_,xe).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};O=new WeakMap;_=new WeakSet;xe=function(){const e={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return o`
      ${n(this,_,_e).call(this)} ${n(this,_,we).call(this)}
      <div class="${w(e)}">
        ${n(this,_,ke).call(this)} ${n(this,_,$e).call(this)}
      </div>
    `};_e=function(){return o` <slot
      name="lead"
      @slotchange=${e=>s(this,O).call(this,"lead",e)}
    ></slot>`};we=function(){return o`<div
      class="main-slot-wrap ${w({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>s(this,O).call(this,"main",e)}
      ></slot>
    </div>`};ke=function(){return o`
      <slot
        name="action"
        @slotchange=${e=>s(this,O).call(this,"action",e)}
      ></slot>
    `};$e=function(){return o`
      <slot
        name="trail"
        @slotchange=${e=>s(this,O).call(this,"trail",e)}
      ></slot>
    `};p.styles=[ot];t([a()],p.prototype,"size",2);t([a({type:Boolean})],p.prototype,"multiline",2);t([a({type:Boolean,reflect:!0})],p.prototype,"disabled",2);t([a({type:Boolean})],p.prototype,"invalid",2);t([j("slot:not([name])")],p.prototype,"_mainSlotElement",2);t([E()],p.prototype,"_leadSlotOccupied",2);t([E()],p.prototype,"_leadHasBadge",2);t([E()],p.prototype,"_trailSlotOccupied",2);t([E()],p.prototype,"_actionSlotOccupied",2);t([z("disabled")],p.prototype,"_handleDisabledChange",1);p=t([C("gds-field-base"),le()],p);const rt=S`
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
`;var lt=rt,K,Se;let k=class extends D{constructor(){super(...arguments),l(this,K)}_handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter?.[1])}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return o`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${b(this.errorMessage,()=>o`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${n(this,K,Se).call(this)}
      </div>
    </div>`}};K=new WeakSet;Se=function(){if(!this.charCounter||this.charCounter[1]===!1)return ue;const[e,i]=this.charCounter;return o`<gds-badge variant="${i}">${e}</gds-badge>`};k.styles=[lt];t([a({type:Array})],k.prototype,"charCounter",2);t([a()],k.prototype,"errorMessage",2);t([z("charCounter"),z("errorMessage")],k.prototype,"_handleVisibilityChange",1);k=t([C("gds-form-control-footer",{dependsOn:[f,Pe]})],k);const nt=S`
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
`;var dt=nt,V,Ce,X,Y,F,Ee;let $=class extends D{constructor(){super(...arguments),l(this,V),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,l(this,X,()=>o`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${B("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${s(this,Y)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),l(this,Y,()=>{this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText,cancelable:!0})&&(this.showExtendedSupportingText=!this.showExtendedSupportingText,this._extendedSupportingText?.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"))}),l(this,F,()=>{this.showExtendedSupportingText&&this._extendedSupportingText?.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`)})}render(){return o`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${b(this._hasExtendedSupportingText,s(this,X))}
      </div>

      ${n(this,V,Ee).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",s(this,F))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",s(this,F))}};V=new WeakSet;Ce=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};X=new WeakMap;Y=new WeakMap;F=new WeakMap;Ee=function(){return o`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${n(this,V,Ce)}
        ></slot>
      </div>
    `};$.styles=[dt];t([a({type:Boolean,reflect:!0})],$.prototype,"showExtendedSupportingText",2);t([E()],$.prototype,"_hasExtendedSupportingText",2);t([j("#extended-supporting-text")],$.prototype,"_extendedSupportingText",2);$=t([C("gds-form-control-header",{dependsOn:[Ne,Ie,je]}),le()],$);var ct=S`
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
`;const ht=S`
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
`;var pt=ht,W,G,J;let v=class extends Ue(D){constructor(){super(),l(this,G),l(this,W,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",n(this,G,J)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),n(this,G,J).call(this,e))})}get hidden(){return s(this,W)}set hidden(e){const i=e.toString();P(this,W,i==="true"),s(this,W)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),ne.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){const e=this.parentElement?.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),o`<div class="item">
      ${b(e,()=>st({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};W=new WeakMap;G=new WeakSet;J=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};v.styles=[q,Ge,Ke];t([a()],v.prototype,"value",2);t([a({type:Boolean,reflect:!0})],v.prototype,"hidden",1);t([a({attribute:"aria-selected",reflect:!0,converter:{fromAttribute:e=>e==="true",toAttribute:e=>e?"true":"false"}})],v.prototype,"selected",2);t([a({type:Boolean,reflect:!0})],v.prototype,"isPlaceholder",2);t([z("isPlaceholder")],v.prototype,"_handlePlaceholderStatusChange",1);v=t([C("gds-option",{dependsOn:[fe]})],v);var y,u,Te,Q,Z,H,ee,m,te,se,I,ie,ae,oe,re,ze,Me,L,A,T,Oe,Be,M,R;let d=class extends qe{constructor(){super(),l(this,u),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,i)=>e===i,this.searchFilter=(e,i)=>i.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,l(this,y),l(this,Q,()=>o`
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
        @input=${e=>{n(this,u,T).call(this,e.target.value,{emitChange:!1}),s(this,I).call(this,e),s(this,m).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{e.key==="ArrowDown"&&(e.preventDefault(),s(this,m).call(this,!0,"show")&&(this.open=!0),this.updateComplete.then(()=>s(this,L).call(this))),e.key==="Enter"&&n(this,u,T).call(this,this.value,{emitInput:!1})}}
      />
    `),l(this,Z,()=>o`
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
          <span>${Ae(this.displayValue)}</span>
        </slot>
      </button>
    `),l(this,H,e=>{this.open||this.dispatchCustomEvent("gds-blur",{detail:{relatedTarget:e.relatedTarget},bubbles:!1,composed:!0})}),l(this,ee,e=>{if(this.combobox){const c=e.getBoundingClientRect(),r=window.innerHeight-c.bottom,g=c.top;let U=Math.min(g,this.maxHeight);return r>g&&(U=Math.min(r,this.maxHeight)),`${U-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),l(this,m,(e,i)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:i,open:e},bubbles:!1,composed:!1})),l(this,te,e=>{s(this,m).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),l(this,se,e=>{e.preventDefault(),e.stopPropagation(),n(this,u,T).call(this,void 0,{beforeDispatch:()=>this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0})})}),l(this,I,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const c=e.currentTarget;if(this.options.forEach(r=>r.hidden=!1),!c.value)return;this.options.filter(r=>!this.searchFilter(c.value,r)).forEach(r=>r.hidden=!0)}),l(this,ie,e=>{(e.key==="ArrowDown"||e.key==="Tab")&&(e.preventDefault(),s(this,L).call(this))}),l(this,ae,e=>{if(e.key==="Tab"&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),l(this,oe,e=>{const i=this._elTriggerBtn;i&&(i.ariaActiveDescendantElement=e.target)}),l(this,re,e=>{const i=e.target;this.options.includes(i)&&(this.multiple?n(this,u,T).call(this,n(this,u,ze).call(this,i)):n(this,u,T).call(this,i.value,{beforeDispatch:()=>{s(this,m).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0))}}))}),l(this,L,()=>{this.updateComplete.then(()=>{const e=this.navigableItems;(e.find(i=>i.selected)||e[0])?.focus()})}),l(this,A,!1),l(this,M,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&s(this,m).call(this,!1,"close")&&(this.open=!1)}),l(this,R,e=>{e.key==="Tab"&&!this.searchable&&s(this,m).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())}),new Ye(this)}get type(){return"gds-dropdown"}get options(){return s(this,y)?Array.from(s(this,y)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(s(this,y))return Array.from(s(this,y)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){if(this.value===void 0)return this.placeholder?.innerText||"";let e;return Array.isArray(this.value)?e=this.value.slice(0,5).reduce((i,c)=>i+this.options.find(h=>this.compareWith(h.value,c))?.innerText+", ","").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):e=this.options.find(i=>this.compareWith(i.value,this.value))?.innerText,e||this.placeholder?.innerText||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}get navigableItems(){return this.options.filter(e=>!e.hidden)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",s(this,H)),ne.instance.applyScoped(this,"gds-dropdown","t-listbox"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleOpenChange()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",s(this,H))}render(){return o`
      ${b(!this.plain&&!this.hideLabel,()=>o`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${b(this.supportingText.length>0,()=>o`<span slot="supporting-text" id="supporting-text">
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
        .calcMaxHeight=${s(this,ee)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[De(8),Fe()]:be.DefaultMiddleware}
        @gds-ui-state=${s(this,te)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${b(this.value&&this.multiple&&this.value.length>0,()=>o`<gds-badge
                rounded
                size=${this.size==="small"?"small":"default"}
                slot="lead"
                aria-label=${B(We`${this.value.length} options selected`)}
              >
                ${this.value.length}</gds-badge
              >`)}
          ${b(this.clearable&&!this.disabled&&(Array.isArray(this.value)?this.value.length>0:!!this.value),()=>o`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${this.size==="small"?"xs":"small"}
                label="${B("Clear selection")}"
                @click=${s(this,se)}
                slot="action"
              >
                <gds-icon-cross-small></gds-icon-cross-small>
              </gds-button>`)}
          ${b(this.combobox&&!this.multiple,()=>s(this,Q).call(this))}
          ${b(!this.combobox||this.multiple,()=>s(this,Z).call(this))}
          <gds-icon-chevron-bottom
            size=${this.size==="small"?"m":"l"}
            slot="action"
          ></gds-icon-chevron-bottom>
        </gds-field-base>

        ${b(this.searchable,()=>o`<input
              id="searchinput"
              type="text"
              aria-label="${B("Filter available options")}"
              placeholder="${B("Search")}"
              @keydown=${s(this,ie)}
              @input=${s(this,I)}
            />`)}
        <div
          id="listbox"
          class="menu-listbox"
          role="listbox"
          aria-multiselectable="${this.multiple}"
          tabindex="-1"
          @focus="${s(this,L)}"
          @gds-select="${s(this,re)}"
          @gds-focus="${s(this,oe)}"
          @keydown=${s(this,ae)}
        >
          <slot></slot>
        </div>
      </gds-popover>

      ${b(n(this,u,Te).call(this),()=>o`
          <gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.invalid?this.errorMessage:ue}
            </slot>
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){this.requestUpdate(),P(this,y,this.querySelectorAll("[gds-element=gds-option]")),!this.multiple&&(this.options.length===0&&!this.placeholder||(this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:!this.combobox&&!this.placeholder&&this.options.find(e=>this.compareWith(e.value,this.value))===void 0&&(this.value=this.options[0]?.value)))}updated(){n(this,u,Me).call(this)}_handleMultipleChange(){this.options.forEach(e=>e.requestUpdate())}get value(){return super.value}set value(e){s(this,A)||(super.value=e)}_handleOpenChange(){const e=this.open;this.options.forEach(c=>c.hidden=!e),e?n(this,u,Oe).call(this):(n(this,u,Be).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const i=this.options.find(c=>c.selected);requestAnimationFrame(async()=>{await this.updateComplete,i?.scrollIntoView({block:"center"})})}};y=new WeakMap;u=new WeakSet;Te=function(){return!this.plain};Q=new WeakMap;Z=new WeakMap;H=new WeakMap;ee=new WeakMap;m=new WeakMap;te=new WeakMap;se=new WeakMap;I=new WeakMap;ie=new WeakMap;ae=new WeakMap;oe=new WeakMap;re=new WeakMap;ze=function(e){const i=Array.isArray(this.value)?this.value:[],c=r=>i.some(g=>this.compareWith(g,r)),h=!c(e.value);return this.options.filter(r=>r===e?h:c(r.value)).map(r=>r.value)};Me=function(){const e=this.multiple?Array.isArray(this.value)?this.value:[]:[this.value];this.options.forEach(i=>{i.selected=e.some(c=>this.compareWith(c,i.value))})};L=new WeakMap;A=new WeakMap;T=function(e,i={}){const{emitInput:c=!0,emitChange:h=!0,beforeDispatch:r}=i;this.value=e,P(this,A,!0);try{r?.(),c&&this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}),h&&this.dispatchCustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0})}finally{P(this,A,!1)}};Oe=function(){this.addEventListener("blur",s(this,M)),this.addEventListener("gds-blur",s(this,M)),this.addEventListener("keydown",s(this,R))};Be=function(){this.removeEventListener("blur",s(this,M)),this.removeEventListener("gds-blur",s(this,M)),this.removeEventListener("keydown",s(this,R))};M=new WeakMap;R=new WeakMap;d.styles=[q,ct,Xe,pt];t([a({attribute:"supporting-text"})],d.prototype,"supportingText",2);t([a({type:Boolean,reflect:!0})],d.prototype,"open",2);t([a({type:Boolean,reflect:!0})],d.prototype,"searchable",2);t([a({type:Boolean,reflect:!0})],d.prototype,"multiple",2);t([a({type:Boolean,reflect:!0})],d.prototype,"clearable",2);t([a({type:Boolean,reflect:!0})],d.prototype,"combobox",2);t([a()],d.prototype,"compareWith",2);t([a()],d.prototype,"searchFilter",2);t([a({type:Boolean,attribute:"sync-popover-width"})],d.prototype,"syncPopoverWidth",2);t([a({type:Number,attribute:"max-height"})],d.prototype,"maxHeight",2);t([a({reflect:!0})],d.prototype,"size",2);t([a({type:Boolean,attribute:"hide-label"})],d.prototype,"hideLabel",2);t([a({type:Boolean})],d.prototype,"plain",2);t([a({type:Boolean})],d.prototype,"disableMobileStyles",2);t([a({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],d.prototype,"showExtendedSupportingText",2);t([j("#trigger")],d.prototype,"_elTriggerBtn",2);t([j("#searchinput")],d.prototype,"_elSearchInput",2);t([Ve({attributes:!0,attributeFilter:["gds-element","value","isplaceholder"],childList:!0,subtree:!0,characterData:!0})],d.prototype,"_handleLightDOMChange",1);t([z("multiple")],d.prototype,"_handleMultipleChange",1);t([z("open")],d.prototype,"_handleOpenChange",1);d=t([Le({labelledBy:"#trigger",describedBy:"#trigger",errorMessage:"#trigger"}),le()],d);let ce=class extends he(pe(ge(d))){};ce=t([C("gds-dropdown",{dependsOn:[$,k,p,v,be,fe,Re,Je]})],ce);export{ce as G,v as a,N as b,ct as f};
