import{i as v,h as r,G as M,t as W,_ as t,n,g as x,b as p,c as g,r as B,d as o,E as ve,e as xe}from"./tokens.style-jGquZEWS.js";import{l as pe,m as D,s as Ie}from"./runtime-nRyYmvPb.js";import{a as He,e as U,w as C}from"./watch-Bh1rs_BK.js";import{G as Ve,o as Ne,a as qe,b as Re}from"./button.component-CcwMjbu5.js";import{w as he,c as je,b as ue,d as Ke,a as ge,f as Ue,s as c,g as be,p as Xe,h as _e,j as Ye,o as Je}from"./icon.component-BJ6-Skqf.js";import{n as f}from"./when-BR7zwNJC.js";import{G as we,o as Qe,f as Ze}from"./popover.component-CLJOgCO7.js";import{e as X}from"./class-map-Df9skny_.js";import{T as fe,c as et}from"./transitional-styles-BPJsGQBn.js";import{I as tt}from"./triangle-exclamation.component-nUZWUI0G.js";import{I as st,a as it}from"./chevron-bottom.component-ReCAqpPN.js";import{F as ot,o as at,e as rt,L as lt,u as nt,n as dt}from"./unwrap-slots-0Lx2yfjF.js";import{I as $e}from"./checkmark.component-DoEU5INd.js";import{I as ct}from"./cross-small.component-D2upBYe-.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(e){return(s,i)=>He(s,i,{async get(){var d;return await this.updateComplete,((d=this.renderRoot)==null?void 0:d.querySelector(e))??null}})}const ht=v`
  :host {
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
`;var ut=ht;let a=class extends he(je(ue(Ke(ge(Ue(M)))))){constructor(){super(...arguments),this.level="2"}render(){return r`<slot></slot>`}};a.styles=[W,ut];t([c()],a.prototype,"display",2);t([n()],a.prototype,"level",2);t([c(be("content"))],a.prototype,"color",2);t([c(be("background"))],a.prototype,"background",2);t([c({styleTemplate:function(e,s){const i=this,[d,l=i["border-style"]||"solid",b=i["border-color"]||"subtle-01"]=s,u=`var(--gds-sys-space-${d})`,J=Xe(b,"border",i.level);return`border: ${u} ${l} ${J};`}})],a.prototype,"border",2);t([c(be("border"))],a.prototype,"border-color",2);t([c(_e)],a.prototype,"border-width",2);t([c()],a.prototype,"border-style",2);t([c(Ye)],a.prototype,"border-radius",2);t([c({valueTemplate:e=>`var(--gds-sys-shadow-${e}-01), var(--gds-sys-shadow-${e}-02)`})],a.prototype,"box-shadow",2);t([c()],a.prototype,"opacity",2);t([c()],a.prototype,"overflow",2);t([c()],a.prototype,"box-sizing",2);t([c()],a.prototype,"z-index",2);t([c({styleTemplate:(e,s)=>`font: var(--gds-sys-text-${s[0]});`})],a.prototype,"font",2);t([c({valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],a.prototype,"font-weight",2);t([c()],a.prototype,"text-align",2);t([c()],a.prototype,"text-wrap",2);t([c()],a.prototype,"overflow-wrap",2);t([c()],a.prototype,"white-space",2);t([c({..._e,styleTemplate:(e,s)=>{const i=s[0],d=s[1]||i;return`gap: ${i} ${d};`},cacheOverrideKey:"flex"})],a.prototype,"gap",2);t([c()],a.prototype,"align-items",2);t([c()],a.prototype,"align-content",2);t([c()],a.prototype,"justify-content",2);t([c()],a.prototype,"justify-items",2);t([c()],a.prototype,"flex-direction",2);t([c()],a.prototype,"flex-wrap",2);t([c()],a.prototype,"place-items",2);t([c()],a.prototype,"place-content",2);t([c()],a.prototype,"aspect-ratio",2);t([c()],a.prototype,"cursor",2);t([c()],a.prototype,"pointer-events",2);a=t([x("gds-div")],a);let H=class extends a{constructor(){super(),this.variant="primary",this.padding="m;m{xl}",this["border-radius"]="s",this.gap="m;m{l}"}render(){return r`<slot></slot>`}};H.styles=[W,v`
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
    `];t([c({styleTemplate:function(e,s){let i,d,l;switch(s[0]){case"primary":i="transparent",d=`var(--gds-sys-color-l${this.level}-neutral-01)`,l="var(--gds-sys-color-content-neutral-01)";break;case"secondary":i="var(--gds-sys-color-border-subtle-01)",d=`var(--gds-sys-color-l${this.level}-neutral-02)`,l="var(--gds-sys-color-content-neutral-01)";break;case"tertiary":i="transparent",d=`var(--gds-sys-color-l${this.level}-neutral-02)`,l="var(--gds-sys-color-content-neutral-01)";break;case"brand-01":i="transparent",d=`var(--gds-sys-color-l${this.level}-brand-01)`,l="var(--gds-sys-color-content-inversed)";break;case"brand-02":i="transparent",d=`var(--gds-sys-color-l${this.level}-brand-02)`,l="var(--gds-sys-color-content-brand-02)";break;case"positive":case"negative":case"warning":case"information":case"notice":i=`var(--gds-sys-color-border-${s[0]}-02)`,d=`var(--gds-sys-color-l${this.level}-${s[0]}-01)`,l=`var(--gds-sys-color-content-${s[0]}-01)`;break;default:i="transparent",d=`var(--gds-sys-color-l${this.level}-neutral-01)`,l="var(--gds-sys-color-content-neutral-01)";break}return`
      --_border-color: ${i};
      --_background-color: ${d};
      --_color: ${l};
      `}})],H.prototype,"variant",2);H=t([x("gds-card")],H);const gt=v`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
`;var bt=gt;let j=class extends a{render(){return r`<slot></slot>`}};j.styles=[W,bt];j=t([x("gds-flex")],j);const ft=v`
  :host {
    display: inline-block;
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
`;var yt=ft,k,ye,ke,Se,Ce;let m=class extends he(ue(ge(M))){constructor(){super(...arguments),p(this,k),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1,this.leadSlotOccupied=!1}render(){let e,s;if(this.notification)e="negative-01",s="inversed";else switch(this.variant){case"information":e="information-03",s="information-01";break;case"notice":e="notice-03",s="notice-01";break;case"positive":e="positive-03",s="positive-03";break;case"warning":e="warning-03",s="warning-01";break;case"negative":e="negative-03",s="negative-01";break;case"disabled":e="disabled-03",s="disabled-01";break;default:e="information-03",s="information-01";break}const i=(()=>{const u={notification:{occupied:"4xs 2xs",default:"3xs"},small:{occupied:"4xs 3xs",default:"4xs 3xs"},default:{occupied:"3xs xs 3xs 2xs",default:"4xs xs"}};if(this.notification)return u.notification[this.mainSlotOccupied?"occupied":"default"];const J=this.size==="small";return u[J?"small":"default"][this.leadSlotOccupied?"occupied":"default"]})(),d=(()=>{const u={occupied:{small:"m",default:"l"},default:"xs"};return this.mainSlotOccupied?u.occupied[this.size==="small"||this.notification?"small":"default"]:u.default})(),l=(()=>{const u={notification:{occupied:"l",default:"0"},default:"l"};return this.notification?u.notification[this.mainSlotOccupied?"occupied":"default"]:u.default})(),b=(()=>{const u={small:"3xs",notification:"max",default:"2xs"};return this.rounded?"max":this.notification?u.notification:this.size==="small"?u.small:u.default})();return r`<gds-flex
      level="3"
      background=${e}
      color=${s}
      gap="${this.notification?"":"3xs"}"
      align-items="center"
      justify-content="${this.notification?"center":"flex-start"}"
      padding="${i}"
      min-height="${d}"
      border-radius="${b}"
      width="100%"
      min-width="${l}"
      font="${this.size==="small"||this.notification?"detail-book-xs":"detail-book-s"}"
    >
      ${g(this,k,ke).call(this)} ${g(this,k,Se).call(this)}
      ${g(this,k,Ce).call(this)}
    </gds-flex>`}};k=new WeakSet;ye=function(e,s){const d=e.target.assignedNodes({flatten:!0});this[s]=d.length>0&&d.some(l=>{var b;return l.nodeType===Node.ELEMENT_NODE||l.nodeType===Node.TEXT_NODE&&((b=l.textContent)==null?void 0:b.trim())!==""})};ke=function(){if(this.size!=="small"||!this.notification)return r`<slot
        name="lead"
        @slotchange=${e=>g(this,k,ye).call(this,e,"leadSlotOccupied")}
      ></slot>`};Se=function(){return r`<slot
      @slotchange=${e=>g(this,k,ye).call(this,e,"mainSlotOccupied")}
    ></slot>`};Ce=function(){return r`<slot name="trail"></slot>`};m.styles=[W,yt];t([n()],m.prototype,"variant",2);t([n({type:String})],m.prototype,"size",2);t([n({attribute:"notification",type:Boolean,reflect:!0})],m.prototype,"notification",2);t([n({attribute:"rounded",type:Boolean,reflect:!0})],m.prototype,"rounded",2);t([B()],m.prototype,"mainSlotOccupied",2);t([B()],m.prototype,"leadSlotOccupied",2);m=t([x("gds-badge",{dependsOn:[j]})],m);const mt=e=>Ee({...e,type:"checkbox"}),qt=e=>Ee({...e,type:"radio"}),Ee=e=>{const{type:s,checked:i,indeterminate:d,disabled:l,invalid:b}=e;return r`
    <div class="rbcb ${X({"rbcb--checkbox":s==="checkbox","rbcb--radio":s==="radio","--checked":i,"--indeterminate":d,"--disabled":l,"--invalid":b})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${f(s==="checkbox",()=>r`
            ${f(d,()=>r`<gds-icon-minus-small
                  class="rbcb__icon"
                  stroke="4"
                ></gds-icon-minus-small>`,()=>f(i,()=>r`<gds-icon-checkmark
                      class="rbcb__icon"
                      stroke="4"
                    ></gds-icon-checkmark>`))}
          `)}
      </div>
    </div>
  `},vt=v`
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
      padding: calc(var(--gds-sys-space-xs) - 1px) var(--gds-sys-space-xs);
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
`;var xt=vt,A,S,Te,ze,Me,Oe,Le;let y=class extends M{constructor(){super(),p(this,S),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,p(this,A,(e,s)=>{const d=s.target.assignedNodes({flatten:!0}),l=d.length>0&&d.some(b=>{var u;return b.nodeType===Node.ELEMENT_NODE||b.nodeType===Node.TEXT_NODE&&((u=b.textContent)==null?void 0:u.trim())!==""});e==="lead"?this._leadSlotOccupied=l:e==="trail"?this._trailSlotOccupied=l:e==="action"&&(this._actionSlotOccupied=l)})}connectedCallback(){super.connectedCallback(),fe.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return r`
      <div class="field ${X(e)}" part="_base">
        ${g(this,S,Te).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};A=new WeakMap;S=new WeakSet;Te=function(){const e={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return r`
      ${g(this,S,ze).call(this)} ${g(this,S,Me).call(this)}
      <div class="${X(e)}">
        ${g(this,S,Oe).call(this)} ${g(this,S,Le).call(this)}
      </div>
    `};ze=function(){return r` <slot
      name="lead"
      @slotchange=${e=>o(this,A).call(this,"lead",e)}
    ></slot>`};Me=function(){return r`<div
      class="main-slot-wrap ${X({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>o(this,A).call(this,"main",e)}
      ></slot>
    </div>`};Oe=function(){return r`
      <slot
        name="action"
        @slotchange=${e=>o(this,A).call(this,"action",e)}
      ></slot>
    `};Le=function(){return r`
      <slot
        name="trail"
        @slotchange=${e=>o(this,A).call(this,"trail",e)}
      ></slot>
    `};y.styles=[xt];t([n()],y.prototype,"size",2);t([n({type:Boolean})],y.prototype,"multiline",2);t([n({type:Boolean,reflect:!0})],y.prototype,"disabled",2);t([n({type:Boolean})],y.prototype,"invalid",2);t([U("slot:not([name])")],y.prototype,"_mainSlotElement",2);t([B()],y.prototype,"_leadSlotOccupied",2);t([B()],y.prototype,"_trailSlotOccupied",2);t([B()],y.prototype,"_actionSlotOccupied",2);t([C("disabled")],y.prototype,"_handleDisabledChange",1);y=t([x("gds-field-base"),pe()],y);const _t=v`
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
`;var wt=_t,Q,We;let E=class extends M{constructor(){super(...arguments),p(this,Q)}_handleVisibilityChange(){var e;this.classList.toggle("visually-hidden",!this.errorMessage&&!((e=this.charCounter)!=null&&e[1]))}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return r`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${f(this.errorMessage,()=>r`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${g(this,Q,We).call(this)}
      </div>
    </div>`}};Q=new WeakSet;We=function(){if(!this.charCounter||this.charCounter[1]===!1)return ve;const[e,s]=this.charCounter;return r`<gds-badge variant="${s}">${e}</gds-badge>`};E.styles=[wt];t([n({type:Array})],E.prototype,"charCounter",2);t([n()],E.prototype,"errorMessage",2);t([C("charCounter"),C("errorMessage")],E.prototype,"_handleVisibilityChange",1);E=t([x("gds-form-control-footer",{dependsOn:[m,tt]})],E);const $t=v`
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
`;var kt=$t,K,Be,Z,ee,V,Ae;let T=class extends M{constructor(){super(...arguments),p(this,K),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,p(this,Z,()=>r`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${D("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${o(this,ee)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),p(this,ee,()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,(e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText})}),p(this,V,()=>{var e;this.showExtendedSupportingText&&((e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`))})}render(){return r`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${f(this._hasExtendedSupportingText,o(this,Z))}
      </div>

      ${g(this,K,Ae).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",o(this,V))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",o(this,V))}};K=new WeakSet;Be=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};Z=new WeakMap;ee=new WeakMap;V=new WeakMap;Ae=function(){return r`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${g(this,K,Be)}
        ></slot>
      </div>
    `};T.styles=[kt];t([n({type:Boolean,reflect:!0})],T.prototype,"showExtendedSupportingText",2);t([B()],T.prototype,"_hasExtendedSupportingText",2);t([U("#extended-supporting-text")],T.prototype,"_extendedSupportingText",2);T=t([x("gds-form-control-header",{dependsOn:[Ve,H,st]}),pe()],T);const St=v`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
      overscroll-behavior: contain;
    }
  }
`;var Ct=St,P,N,te;let _=class extends ot(M){constructor(){super(),p(this,N),p(this,P,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",g(this,N,te)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),g(this,N,te).call(this,e))})}get hidden(){return o(this,P)}set hidden(e){const s=e.toString();xe(this,P,s==="true"),o(this,P)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),fe.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),r`<div class="item">
      ${f(e,()=>mt({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};P=new WeakMap;N=new WeakSet;te=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};_.styles=[W,et,at];t([n()],_.prototype,"value",2);t([n({type:Boolean,reflect:!0})],_.prototype,"hidden",1);t([n({attribute:"aria-selected",reflect:!0})],_.prototype,"selected",2);t([n({type:Boolean,reflect:!0})],_.prototype,"isPlaceholder",2);t([C("isPlaceholder")],_.prototype,"_handlePlaceholderStatusChange",1);_=t([x("gds-option",{dependsOn:[$e]})],_);var F,se;let z=class extends M{constructor(){super(),this.multiple=!1,this.compareWith=(e,s)=>e===s,p(this,F,rt()),p(this,se,e=>{const s=e.target;this.multiple?s.selected=!s.selected:(s.selected=!0,Array.from(this.options).forEach(i=>{i!==s&&(i.selected=!1)})),this.ariaActiveDescendantElement=s,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})}),new lt(this)}get navigableItems(){return this.visibleOptionElements}get options(){return o(this,F).value?nt(o(this,F).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(s=>{s.selected=e.some(i=>this.compareWith(i,s.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),fe.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",o(this,se))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return r`<slot ${dt(o(this,F))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};F=new WeakMap;se=new WeakMap;z.styles=Ct;t([n({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],z.prototype,"multiple",2);t([n()],z.prototype,"compareWith",2);t([C("multiple")],z.prototype,"_rerenderOptions",1);z=t([x("gds-listbox",{dependsOn:[_]})],z);var Et=v`
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
`;const Tt=v`
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
`;var zt=Tt,$,O,De,ie,oe,q,ae,w,re,le,R,ne,de,ce,Pe,G,I,Fe,Ge,L,Y;let h=class extends qe{constructor(){super(...arguments),p(this,O),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,s)=>e===s,this.searchFilter=(e,s)=>s.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,p(this,$),p(this,ie,()=>{var e;return r`
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
        @keydown=${s=>{s.key==="ArrowDown"&&(s.preventDefault(),o(this,w).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(i=>i.focus())),s.key==="Enter"&&o(this,I).call(this)}}
      />
    `}),p(this,oe,()=>r`
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
    `),p(this,q,e=>{this.open||this.dispatchCustomEvent("gds-blur",{detail:{relatedTarget:e.relatedTarget},bubbles:!1,composed:!0})}),p(this,ae,e=>{if(this.combobox){const i=e.getBoundingClientRect(),l=window.innerHeight-i.bottom,b=i.top;let u=Math.min(b,this.maxHeight);return l>b&&(u=Math.min(l,this.maxHeight)),`${u-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),p(this,w,(e,s)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:s,open:e},bubbles:!1,composed:!1})),p(this,re,e=>{o(this,w).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),p(this,le,e=>{e.preventDefault(),e.stopPropagation(),this.value=void 0,this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),o(this,G).call(this),o(this,I).call(this)}),p(this,R,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const i=e.currentTarget;if(this.options.forEach(l=>l.hidden=!1),!i.value)return;this.options.filter(l=>!this.searchFilter(i.value,l)).forEach(l=>l.hidden=!0)}),p(this,ne,e=>{var s;(s=this._elListbox)==null||s.then(i=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),i.focus();return}})}),p(this,de,e=>{var s;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(s=this._elSearchInput)==null||s.focus();return}}),p(this,ce,e=>{const s=this._elTriggerBtn;s&&(s.ariaActiveDescendantElement=e.target)}),p(this,G,()=>{this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))}),p(this,I,()=>{this.updateComplete.then(()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),p(this,L,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&o(this,w).call(this,!1,"close")&&(this.open=!1)}),p(this,Y,e=>{var s;e.key==="Tab"&&!this.searchable&&o(this,w).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,(s=this._elTriggerBtn)==null||s.focus())})}get type(){return"gds-dropdown"}get options(){return o(this,$)?Array.from(o(this,$)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(o(this,$))return Array.from(o(this,$)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var s,i;let e;return Array.isArray(this.value)?e=this.value.slice(0,5).reduce((d,l)=>{var b;return d+((b=this.options.find(u=>u.value===l))==null?void 0:b.innerText)+", "},"").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):e=(s=this.options.find(d=>d.selected))==null?void 0:s.innerText,e||((i=this.placeholder)==null?void 0:i.innerText)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",o(this,q)),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",o(this,q))}render(){return r`
      ${f(!this.plain&&!this.hideLabel,()=>r`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${f(this.supportingText.length>0,()=>r`<span slot="supporting-text" id="supporting-text">
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
        .calcMaxHeight=${o(this,ae)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[Qe(8),Ze()]:we.DefaultMiddleware}
        @gds-ui-state=${o(this,re)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${f(this.value&&this.multiple&&this.value.length>0,()=>r`<gds-badge
                rounded
                size=${this.size==="small"?"small":"default"}
                slot="lead"
                aria-label=${D(Ie`${this.value.length} options selected`)}
              >
                ${this.value.length}</gds-badge
              >`)}
          ${f(this.clearable&&this.value&&!this.disabled,()=>r`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${this.size==="small"?"xs":"small"}
                label="${D("Clear selection")}"
                @click=${o(this,le)}
                slot="action"
              >
                <gds-icon-cross-small></gds-icon-cross-small>
              </gds-button>`)}
          ${f(this.combobox&&!this.multiple,()=>o(this,ie).call(this))}
          ${f(!this.combobox||this.multiple,()=>o(this,oe).call(this))}
          <gds-icon-chevron-bottom slot="action"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${f(this.searchable,()=>r`<input
              id="searchinput"
              type="text"
              aria-label="${D("Filter available options")}"
              placeholder="${D("Search")}"
              @keydown=${o(this,ne)}
              @input=${o(this,R)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${Re(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${g(this,O,Pe)}"
          @gds-focus="${o(this,ce)}"
          @keydown=${o(this,de)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${f(g(this,O,De).call(this),()=>r`
          <gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.invalid?this.errorMessage:ve}
            </slot>
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,s;if(this.requestUpdate(),xe(this,$,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.combobox&&!this.placeholder&&this.options.find(i=>this.compareWith(i.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(s=this.options[0])==null?void 0:s.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(i=>i.hidden=!e),e?g(this,O,Fe).call(this):(g(this,O,Ge).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const s=this.options.find(i=>i.selected);requestAnimationFrame(async()=>{await this.updateComplete,s==null||s.scrollIntoView({block:"center"})})}};$=new WeakMap;O=new WeakSet;De=function(){return!this.plain};ie=new WeakMap;oe=new WeakMap;q=new WeakMap;ae=new WeakMap;w=new WeakMap;re=new WeakMap;le=new WeakMap;R=new WeakMap;ne=new WeakMap;de=new WeakMap;ce=new WeakMap;Pe=function(){this._elListbox.then(e=>{var s;this.multiple?this.value=e.selection.map(i=>i.value):(this.value=(s=e.selection[0])==null?void 0:s.value,o(this,w).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>{var i;return(i=this._elTriggerBtn)==null?void 0:i.focus()},0))),o(this,G).call(this),o(this,I).call(this)})};G=new WeakMap;I=new WeakMap;Fe=function(){this.addEventListener("blur",o(this,L)),this.addEventListener("gds-blur",o(this,L)),this.addEventListener("keydown",o(this,Y))};Ge=function(){this.removeEventListener("blur",o(this,L)),this.removeEventListener("gds-blur",o(this,L)),this.removeEventListener("keydown",o(this,Y))};L=new WeakMap;Y=new WeakMap;h.styles=[W,Et,zt];t([n({attribute:"supporting-text"})],h.prototype,"supportingText",2);t([n({type:Boolean,reflect:!0})],h.prototype,"open",2);t([n({type:Boolean,reflect:!0})],h.prototype,"searchable",2);t([n({type:Boolean,reflect:!0})],h.prototype,"multiple",2);t([n({type:Boolean,reflect:!0})],h.prototype,"clearable",2);t([n({type:Boolean,reflect:!0})],h.prototype,"combobox",2);t([n()],h.prototype,"compareWith",2);t([n()],h.prototype,"searchFilter",2);t([n({type:Boolean,attribute:"sync-popover-width"})],h.prototype,"syncPopoverWidth",2);t([n({type:Number,attribute:"max-height"})],h.prototype,"maxHeight",2);t([n({reflect:!0})],h.prototype,"size",2);t([n({type:Boolean,attribute:"hide-label"})],h.prototype,"hideLabel",2);t([n({type:Boolean})],h.prototype,"plain",2);t([n({type:Boolean})],h.prototype,"disableMobileStyles",2);t([n({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],h.prototype,"showExtendedSupportingText",2);t([U("#trigger")],h.prototype,"_elTriggerBtn",2);t([pt("#listbox")],h.prototype,"_elListbox",2);t([U("#searchinput")],h.prototype,"_elSearchInput",2);t([Ne({attributes:!0,childList:!0,subtree:!0,characterData:!0})],h.prototype,"_handleLightDOMChange",1);t([C("value")],h.prototype,"_handleValueChange",1);t([C("open")],h.prototype,"_handleOpenChange",1);h=t([pe()],h);let me=class extends he(ue(ge(h))){};me=t([x("gds-dropdown",{dependsOn:[T,E,y,z,we,$e,it,ct]})],me);export{me as G,_ as a,H as b,j as c,m as d,mt as e,Et as f,a as g,T as h,E as i,y as j,qt as k,pt as r};
