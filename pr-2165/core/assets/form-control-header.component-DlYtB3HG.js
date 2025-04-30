import{n as m,G as _,h as o,g as w,r as O}from"./custom-element-scoping-b4c89-hi.js";import{n as c}from"./when-BR7zwNJC.js";import{G as P}from"./badge.component-BJH5hoZ7.js";import{a as M,I as B}from"./triangle-exclamation.component-C1Ok1HN4.js";import{i as E}from"./lit-element-Bx14lxc-.js";import{m as F}from"./runtime-BL31MtW8.js";import{l as W}from"./localized-decorator-DtmrKsyB.js";import{a as k}from"./query-p8xgzTDt.js";import{G as I}from"./button.component-JH9MBQut.js";import{G as D}from"./card.component-BJRQ7Qi8.js";const H=E`
  @layer base, reset, transitional-styles;
  @layer base {
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
`;var A=Object.defineProperty,N=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},y=(e,t,s,a)=>{for(var r=a>1?void 0:a?N(t,s):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(a?n(t,s,r):n(r))||r);return a&&r&&A(t,s,r),r},R=(e,t,s)=>t.has(e)||S("Cannot "+s),j=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),q=(e,t,s)=>(R(e,t,"access private method"),s),x,T;let l=class extends _{constructor(){super(...arguments),j(this,x)}render(){return o`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${c(this.validationMessage,()=>o`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.validationMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter">
        ${c(Number.isInteger(this.charCounter),()=>q(this,x,T).call(this,this.charCounter))}
      </div>
    </div>`}};x=new WeakSet;T=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",o`<gds-badge variant="${t}">${e}</gds-badge>`};l.styles=[H];y([m({type:Number})],l.prototype,"charCounter",2);y([m()],l.prototype,"validationMessage",2);l=y([w("gds-form-control-footer",{dependsOn:[P,M]})],l);const J=E`
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
`;var K=Object.defineProperty,L=Object.getOwnPropertyDescriptor,$=e=>{throw TypeError(e)},g=(e,t,s,a)=>{for(var r=a>1?void 0:a?L(t,s):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(a?n(t,s,r):n(r))||r);return a&&r&&K(t,s,r),r},b=(e,t,s)=>t.has(e)||$("Cannot "+s),f=(e,t,s)=>(b(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),C=(e,t,s)=>(b(e,t,"access private method"),s),p,G,v,u,z;let d=class extends _{constructor(){super(...arguments),h(this,p),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,h(this,v,()=>o`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${F("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${f(this,u)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),h(this,u,()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,(e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))})}render(){return o`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${c(this._hasExtendedSupportingText,f(this,v))}
      </div>

      ${C(this,p,z).call(this)}
    `}};p=new WeakSet;G=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};v=new WeakMap;u=new WeakMap;z=function(){return o`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${C(this,p,G)}
        ></slot>
      </div>
    `};d.styles=[J];g([m({type:Boolean,reflect:!0})],d.prototype,"showExtendedSupportingText",2);g([O()],d.prototype,"_hasExtendedSupportingText",2);g([k("#extended-supporting-text")],d.prototype,"_extendedSupportingText",2);d=g([w("gds-form-control-header",{dependsOn:[I,D,B]}),W()],d);export{d as G,l as a};
