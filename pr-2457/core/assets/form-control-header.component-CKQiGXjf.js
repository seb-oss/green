import{n as _,r as P}from"./Reflect-DJ7r0WLU.js";import{n as v}from"./when-BR7zwNJC.js";import{G as z}from"./badge.component-B0wy3ID0.js";import{I as W,a as B}from"./triangle-exclamation.component-eeWWsEkG.js";import{G as b,h as i,g as C}from"./gds-element-DTROifYq.js";import{w}from"./watch-tFciLXSI.js";import{i as E}from"./lit-element-Bx14lxc-.js";import{l as F,m as I}from"./runtime-CNluP0A8.js";import{a as D}from"./query-p8xgzTDt.js";import{G as H}from"./button.component-qvVtjlow.js";import{G as L}from"./card.component-B3VXlthL.js";const V=E`
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
`;var A=Object.defineProperty,N=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},x=(e,t,s,a)=>{for(var r=a>1?void 0:a?N(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&A(t,s,r),r},R=(e,t,s)=>t.has(e)||S("Cannot "+s),j=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),q=(e,t,s)=>(R(e,t,"access private method"),s),m,T;let d=class extends b{constructor(){super(...arguments),j(this,m)}_handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter)}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return i`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${v(this.errorMessage,()=>i`
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
    </div>`}};m=new WeakSet;T=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",i`<gds-badge variant="${t}">${e}</gds-badge>`};d.styles=[V];x([_({type:Number})],d.prototype,"charCounter",2);x([_()],d.prototype,"errorMessage",2);x([w("charCounter"),w("errorMessage")],d.prototype,"_handleVisibilityChange",1);d=x([C("gds-form-control-footer",{dependsOn:[z,W]})],d);const J=E`
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
`;var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,$=e=>{throw TypeError(e)},u=(e,t,s,a)=>{for(var r=a>1?void 0:a?Q(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&K(t,s,r),r},G=(e,t,s)=>t.has(e)||$("Cannot "+s),p=(e,t,s)=>(G(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),k=(e,t,s)=>(G(e,t,"access private method"),s),c,M,f,y,g,O;let l=class extends b{constructor(){super(...arguments),h(this,c),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,h(this,f,()=>i`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${I("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${p(this,y)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),h(this,y,()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,(e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText})}),h(this,g,()=>{var e;this.showExtendedSupportingText&&((e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`))})}render(){return i`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${v(this._hasExtendedSupportingText,p(this,f))}
      </div>

      ${k(this,c,O).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",p(this,g))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",p(this,g))}};c=new WeakSet;M=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};f=new WeakMap;y=new WeakMap;g=new WeakMap;O=function(){return i`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${k(this,c,M)}
        ></slot>
      </div>
    `};l.styles=[J];u([_({type:Boolean,reflect:!0})],l.prototype,"showExtendedSupportingText",2);u([P()],l.prototype,"_hasExtendedSupportingText",2);u([D("#extended-supporting-text")],l.prototype,"_extendedSupportingText",2);l=u([C("gds-form-control-header",{dependsOn:[H,L,B]}),F()],l);export{l as G,d as a};
