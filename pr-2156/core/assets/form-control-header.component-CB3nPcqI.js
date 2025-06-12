import{n as y,G as w,h as n,g as b,r as M}from"./custom-element-scoping-BmMuu402.js";import{n as x}from"./when-BR7zwNJC.js";import{G as P}from"./badge.component-pxgEJpUU.js";import{a as k,I as B}from"./triangle-exclamation.component-duY5GQo5.js";import{w as f}from"./watch-tFciLXSI.js";import{i as C}from"./lit-element-Bx14lxc-.js";import{m as F}from"./runtime-BL31MtW8.js";import{l as W}from"./localized-decorator-DtmrKsyB.js";import{a as I}from"./query-p8xgzTDt.js";import{G as D}from"./button.component-CELewH5j.js";import{G as H}from"./card.component-DfEPZqJH.js";const V=C`
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
`;var A=Object.defineProperty,N=Object.getOwnPropertyDescriptor,E=e=>{throw TypeError(e)},h=(e,t,s,a)=>{for(var r=a>1?void 0:a?N(t,s):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&A(t,s,r),r},L=(e,t,s)=>t.has(e)||E("Cannot "+s),R=(e,t,s)=>t.has(e)?E("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),j=(e,t,s)=>(L(e,t,"access private method"),s),u,S;let d=class extends w{constructor(){super(...arguments),R(this,u)}_handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter)}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return n`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${x(this.errorMessage,()=>n`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${x(Number.isInteger(this.charCounter),()=>j(this,u,S).call(this,this.charCounter))}
      </div>
    </div>`}};u=new WeakSet;S=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",n`<gds-badge variant="${t}">${e}</gds-badge>`};d.styles=[V];h([y({type:Number})],d.prototype,"charCounter",2);h([y()],d.prototype,"errorMessage",2);h([f("charCounter"),f("errorMessage")],d.prototype,"_handleVisibilityChange",1);d=h([b("gds-form-control-footer",{dependsOn:[P,k]})],d);const q=C`
  @layer base, reset, transitional-styles;
  @layer base {
    #label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: var(--gds-sys-text-line-height-detail-m);
      color: var(--gds-sys-color-l2-content-primary);

      & > div {
        display: flex;
        flex-direction: column;
      }
    }

    ::slotted(label) {
      font-weight: var(--gds-sys-text-weight-book);
    }

    :host(.size-small) {
      & slot[name='supporting-text'],
      & ::slotted(label) {
        font-size: var(--gds-sys-text-size-detail-s);
        line-height: var(--gds-sys-text-line-height-detail-s);
      }
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
`;var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,T=e=>{throw TypeError(e)},g=(e,t,s,a)=>{for(var r=a>1?void 0:a?K(t,s):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&J(t,s,r),r},$=(e,t,s)=>t.has(e)||T("Cannot "+s),_=(e,t,s)=>($(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?T("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),G=(e,t,s)=>($(e,t,"access private method"),s),p,z,v,m,O;let l=class extends w{constructor(){super(...arguments),c(this,p),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,c(this,v,()=>n`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${F("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${_(this,m)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),c(this,m,()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,(e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText})})}render(){return n`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${x(this._hasExtendedSupportingText,_(this,v))}
      </div>

      ${G(this,p,O).call(this)}
    `}};p=new WeakSet;z=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};v=new WeakMap;m=new WeakMap;O=function(){return n`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${G(this,p,z)}
        ></slot>
      </div>
    `};l.styles=[q];g([y({type:Boolean,reflect:!0})],l.prototype,"showExtendedSupportingText",2);g([M()],l.prototype,"_hasExtendedSupportingText",2);g([I("#extended-supporting-text")],l.prototype,"_extendedSupportingText",2);l=g([b("gds-form-control-header",{dependsOn:[D,H,B]}),W()],l);export{l as G,d as a};
