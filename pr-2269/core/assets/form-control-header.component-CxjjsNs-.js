import{n as f,G as w,h as i,g as C,r as P}from"./gds-element-DKcDvDP5.js";import{n as x}from"./when-BR7zwNJC.js";import{G as B}from"./badge.component-B6BlXRd0.js";import{a as F,I as W}from"./triangle-exclamation.component-BXUh77Bf.js";import{w as y}from"./watch-tFciLXSI.js";import{i as E}from"./lit-element-Bx14lxc-.js";import{m as k}from"./runtime-BL31MtW8.js";import{l as z}from"./localized-decorator-DtmrKsyB.js";import{a as I}from"./query-p8xgzTDt.js";import{G as D}from"./button.component-CU4pYY1v.js";import{G as H}from"./card.component-hRPqaha2.js";const V=E`
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
`;var A=Object.defineProperty,N=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},g=(e,t,s,a)=>{for(var r=a>1?void 0:a?N(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(r=(a?n(t,s,r):n(r))||r);return a&&r&&A(t,s,r),r},L=(e,t,s)=>t.has(e)||S("Cannot "+s),R=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),j=(e,t,s)=>(L(e,t,"access private method"),s),u,b;let d=class extends w{constructor(){super(...arguments),R(this,u)}_handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter)}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return i`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${x(this.errorMessage,()=>i`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${x(Number.isInteger(this.charCounter),()=>j(this,u,b).call(this,this.charCounter))}
      </div>
    </div>`}};u=new WeakSet;b=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",i`<gds-badge variant="${t}">${e}</gds-badge>`};d.styles=[V];g([f({type:Number})],d.prototype,"charCounter",2);g([f()],d.prototype,"errorMessage",2);g([y("charCounter"),y("errorMessage")],d.prototype,"_handleVisibilityChange",1);d=g([C("gds-form-control-footer",{dependsOn:[B,F]})],d);const q=E`
  @layer base, reset, transitional-styles;
  @layer base {
    #label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--gds-sys-color-content-01);

      & > div {
        display: flex;
        flex-direction: column;
      }
    }

    slot[name='label']::slotted(*) {
      font: var(--gds-sys-text-detail-book-m);
    }
    slot[name='supporting-text']::slotted(*) {
      font: var(--gds-sys-text-detail-regular-s);
    }

    :host(.size-small) {
      & slot[name='supporting-text'],
      & ::slotted(label) {
        font: var(--gds-sys-text-detail-s);
      }

      #extended-supporting-text[aria-hidden='false'] {
        padding: var(--gds-sys-space-xs) var(--gds-sys-space-s);
      }
    }

    #extended-supporting-text {
      opacity: 1;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: all;
      font: var(--gds-sys-text-detail-regular-s);
      border-radius: var(--gds-sys-space-xs);
      background-color: var(--gds-sys-color-l3-02);
      color: var(--gds-sys-color-content-01);
      max-height: var(--_max-height);

      &[aria-hidden='false'] {
        margin: var(--gds-sys-space-2xs) 0 0 0;
        padding: var(--gds-sys-space-s) var(--gds-sys-space-m);
      }

      &[aria-hidden='true'] {
        max-height: 0;
        opacity: 0;
        translate: 0 2px;
        padding: 0 var(--gds-sys-space-m);
        margin: 0;
        overflow: hidden;
      }
    }
  }
`;var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,T=e=>{throw TypeError(e)},h=(e,t,s,a)=>{for(var r=a>1?void 0:a?K(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(r=(a?n(t,s,r):n(r))||r);return a&&r&&J(t,s,r),r},$=(e,t,s)=>t.has(e)||T("Cannot "+s),_=(e,t,s)=>($(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?T("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),G=(e,t,s)=>($(e,t,"access private method"),s),p,O,v,m,M;let l=class extends w{constructor(){super(...arguments),c(this,p),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,c(this,v,()=>i`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${k("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${_(this,m)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),c(this,m,()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,(e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText})})}render(){return i`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${x(this._hasExtendedSupportingText,_(this,v))}
      </div>

      ${G(this,p,M).call(this)}
    `}};p=new WeakSet;O=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};v=new WeakMap;m=new WeakMap;M=function(){return i`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${G(this,p,O)}
        ></slot>
      </div>
    `};l.styles=[q];h([f({type:Boolean,reflect:!0})],l.prototype,"showExtendedSupportingText",2);h([P()],l.prototype,"_hasExtendedSupportingText",2);h([I("#extended-supporting-text")],l.prototype,"_extendedSupportingText",2);l=h([C("gds-form-control-header",{dependsOn:[D,H,W]}),z()],l);export{l as G,d as a};
