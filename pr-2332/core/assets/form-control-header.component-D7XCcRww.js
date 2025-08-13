import{n as _,G as b,h as o,g as C,r as O}from"./gds-element-DKcDvDP5.js";import{n as v}from"./when-BR7zwNJC.js";import{G as P}from"./badge.component-i6097UKo.js";import{a as W,I as B}from"./triangle-exclamation.component-BQNg54Op.js";import{w}from"./watch-tFciLXSI.js";import{i as E}from"./lit-element-Bx14lxc-.js";import{l as F,m as I}from"./runtime-CNluP0A8.js";import{a as D}from"./query-p8xgzTDt.js";import{G as H}from"./button.component-BkjhbsKb.js";import{G as L}from"./card.component-DkFuee-h.js";const V=E`
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
      margin-top: var(--gds-sys-space-2xs);
      font-weight: var(--gds-sys-text-weight-book);
      font-size: var(--gds-sys-text-size-detail-s);
      color: var(--gds-sys-color-l3-content-negative);
    }

    [gds-element^='gds-icon'] {
      width: 18px;
      height: 18px;
    }

    :host(.size-small) {
      & .error-message {
        font-size: var(--gds-sys-text-size-detail-xs);
        line-height: var(--gds-sys-text-line-height-detail-s);
        gap: var(--gds-sys-space-2xs);
      }
      & [gds-element^='gds-icon'] {
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-right: 2px;
      }
    }
  }
`;var A=Object.defineProperty,N=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},x=(e,t,s,a)=>{for(var r=a>1?void 0:a?N(t,s):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(a?n(t,s,r):n(r))||r);return a&&r&&A(t,s,r),r},R=(e,t,s)=>t.has(e)||S("Cannot "+s),j=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),q=(e,t,s)=>(R(e,t,"access private method"),s),m,T;let d=class extends b{constructor(){super(...arguments),j(this,m)}_handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter)}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return o`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${v(this.errorMessage,()=>o`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${v(Number.isInteger(this.charCounter),()=>q(this,m,T).call(this,this.charCounter))}
      </div>
    </div>`}};m=new WeakSet;T=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",o`<gds-badge variant="${t}">${e}</gds-badge>`};d.styles=[V];x([_({type:Number})],d.prototype,"charCounter",2);x([_()],d.prototype,"errorMessage",2);x([w("charCounter"),w("errorMessage")],d.prototype,"_handleVisibilityChange",1);d=x([C("gds-form-control-footer",{dependsOn:[P,W]})],d);const J=E`
  @layer base, reset, transitional-styles;
  @layer base {
    #label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: var(--gds-sys-text-line-height-detail-m);
      color: var(--gds-sys-color-l2-content-primary);
    }

    #label-row > div {
      display: flex;
      flex-direction: column;
    }

    ::slotted(label) {
      font-weight: var(--gds-sys-text-weight-book);
    }

    :host(.size-small) slot[name='supporting-text'],
    :host(.size-small) ::slotted(label) {
      font-size: var(--gds-sys-text-size-detail-s);
      line-height: var(--gds-sys-text-line-height-detail-s);
    }

    #extended-supporting-text {
      opacity: 1;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: all;
      font-size: var(--gds-sys-text-size-body-s);
      line-height: var(--gds-sys-text-line-height-body-s);
      border-radius: var(--gds-sys-space-xs);
      background-color: var(--gds-sys-color-l3-background-secondary);
      color: var(--gds-sys-color-l3-content-tertiary);
      max-height: var(--_max-height);
    }

    #extended-supporting-text[aria-hidden='false'] {
      margin: var(--gds-sys-space-2xs) 0 0 0;
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
`;var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,$=e=>{throw TypeError(e)},u=(e,t,s,a)=>{for(var r=a>1?void 0:a?Q(t,s):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(a?n(t,s,r):n(r))||r);return a&&r&&K(t,s,r),r},z=(e,t,s)=>t.has(e)||$("Cannot "+s),p=(e,t,s)=>(z(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),G=(e,t,s)=>(z(e,t,"access private method"),s),c,k,y,f,g,M;let l=class extends b{constructor(){super(...arguments),h(this,c),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,h(this,y,()=>o`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${I("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${p(this,f)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),h(this,f,()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,(e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText})}),h(this,g,()=>{var e;this.showExtendedSupportingText&&((e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`))})}render(){return o`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${v(this._hasExtendedSupportingText,p(this,y))}
      </div>

      ${G(this,c,M).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",p(this,g))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",p(this,g))}};c=new WeakSet;k=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};y=new WeakMap;f=new WeakMap;g=new WeakMap;M=function(){return o`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${G(this,c,k)}
        ></slot>
      </div>
    `};l.styles=[J];u([_({type:Boolean,reflect:!0})],l.prototype,"showExtendedSupportingText",2);u([O()],l.prototype,"_hasExtendedSupportingText",2);u([D("#extended-supporting-text")],l.prototype,"_extendedSupportingText",2);l=u([C("gds-form-control-header",{dependsOn:[H,L,B]}),F()],l);export{l as G,d as a};
