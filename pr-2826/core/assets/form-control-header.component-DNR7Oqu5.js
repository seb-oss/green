import{i as w,n as y,S as _,z as C,d as E,h as i,A as O,g as b,w as P,f as F,E as W,F as B}from"./iframe-B0gVlyf4.js";import{G as H}from"./badge.component-Ce1RtLBB.js";import{I}from"./triangle-exclamation.component-Betk8beH.js";import{l as A}from"./localized-decorator-CO-5zfTC.js";import{G as D}from"./card.component-QxFPWcz4.js";import{I as L}from"./circle-info.component-B_KqxWzU.js";const V=w`
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
`;var R=Object.defineProperty,j=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},x=(e,t,s,a)=>{for(var r=a>1?void 0:a?j(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&R(t,s,r),r},q=(e,t,s)=>t.has(e)||S("Cannot "+s),J=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),K=(e,t,s)=>(q(e,t,"access private method"),s),v,T;let d=class extends C{constructor(){super(...arguments),J(this,v)}_handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter?.[1])}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return i`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${E(this.errorMessage,()=>i`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${K(this,v,T).call(this)}
      </div>
    </div>`}};v=new WeakSet;T=function(){if(!this.charCounter||this.charCounter[1]===!1)return O;const[e,t]=this.charCounter;return i`<gds-badge variant="${t}">${e}</gds-badge>`};d.styles=[V];x([y({type:Array})],d.prototype,"charCounter",2);x([y()],d.prototype,"errorMessage",2);x([_("charCounter"),_("errorMessage")],d.prototype,"_handleVisibilityChange",1);d=x([b("gds-form-control-footer",{dependsOn:[H,I]})],d);const N=w`
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
`;var Q=Object.defineProperty,U=Object.getOwnPropertyDescriptor,$=e=>{throw TypeError(e)},u=(e,t,s,a)=>{for(var r=a>1?void 0:a?U(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&Q(t,s,r),r},G=(e,t,s)=>t.has(e)||$("Cannot "+s),p=(e,t,s)=>(G(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),k=(e,t,s)=>(G(e,t,"access private method"),s),c,z,m,f,g,M;let l=class extends C{constructor(){super(...arguments),h(this,c),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,h(this,m,()=>i`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${W("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${p(this,f)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),h(this,f,()=>{this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText,cancelable:!0})&&(this.showExtendedSupportingText=!this.showExtendedSupportingText,this._extendedSupportingText?.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"))}),h(this,g,()=>{this.showExtendedSupportingText&&this._extendedSupportingText?.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`)})}render(){return i`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${E(this._hasExtendedSupportingText,p(this,m))}
      </div>

      ${k(this,c,M).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",p(this,g))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",p(this,g))}};c=new WeakSet;z=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};m=new WeakMap;f=new WeakMap;g=new WeakMap;M=function(){return i`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${k(this,c,z)}
        ></slot>
      </div>
    `};l.styles=[N];u([y({type:Boolean,reflect:!0})],l.prototype,"showExtendedSupportingText",2);u([P()],l.prototype,"_hasExtendedSupportingText",2);u([F("#extended-supporting-text")],l.prototype,"_extendedSupportingText",2);l=u([b("gds-form-control-header",{dependsOn:[B,D,L]}),A()],l);export{l as G,d as a};
