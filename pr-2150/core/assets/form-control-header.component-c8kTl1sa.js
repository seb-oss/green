import{n as h,G as y,h as d,g as w,r as O}from"./custom-element-scoping-b4c89-hi.js";import{n as x}from"./when-BR7zwNJC.js";import{G as P}from"./badge.component-lHGwzMdV.js";import{I as B,a as M}from"./triangle-exclamation.component-D_ZmLszF.js";import{i as E}from"./lit-element-Bx14lxc-.js";import{m as F}from"./runtime-BL31MtW8.js";import{l as W}from"./localized-decorator-DtmrKsyB.js";import{a as k}from"./query-p8xgzTDt.js";import{G as I}from"./button.component-DJEDQUDh.js";import{G as D}from"./card.component-ESUepO5H.js";const H=E`
  @layer base, reset, transitional-styles;
  @layer base {
    :host > *:not(style) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--gds-space-xl);
    }

    .error-message {
      display: flex;
      align-items: flex-start;
      gap: var(--gds-space-xs);
      margin-top: var(--gds-space-2xs);
      font-weight: var(--gds-text-weight-book);
      font-size: var(--gds-text-size-detail-s);
      color: var(--gds-color-l3-content-negative);
    }

    [gds-element^='gds-icon'] {
      width: 18px;
      height: 18px;
    }

    :host(.size-small) {
      & .error-message {
        font-size: var(--gds-text-size-detail-xs);
        line-height: var(--gds-text-line-height-detail-s);
        gap: var(--gds-space-2xs);
      }
      & [gds-element^='gds-icon'] {
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-right: 2px;
      }
    }
  }
`;var A=Object.defineProperty,N=Object.getOwnPropertyDescriptor,b=e=>{throw TypeError(e)},f=(e,t,s,a)=>{for(var r=a>1?void 0:a?N(t,s):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(a?n(t,s,r):n(r))||r);return a&&r&&A(t,s,r),r},R=(e,t,s)=>t.has(e)||b("Cannot "+s),j=(e,t,s)=>t.has(e)?b("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),q=(e,t,s)=>(R(e,t,"access private method"),s),v,S;let l=class extends y{constructor(){super(...arguments),j(this,v)}render(){return d`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${x(this.validationMessage,()=>d`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.validationMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter">
        ${x(Number.isInteger(this.charCounter),()=>q(this,v,S).call(this,this.charCounter))}
      </div>
    </div>`}};v=new WeakSet;S=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",d`<gds-badge variant="${t}">${e}</gds-badge>`};l.styles=[H];f([h({type:Number})],l.prototype,"charCounter",2);f([h()],l.prototype,"validationMessage",2);l=f([w("gds-form-control-footer",{dependsOn:[P,B]})],l);const J=E`
  @layer base, reset, transitional-styles;
  @layer base {
    #label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: var(--gds-text-line-height-detail-m);

      & > div {
        display: flex;
        flex-direction: column;
      }
    }

    ::slotted(label) {
      font-weight: var(--gds-text-weight-book);
    }

    :host(.size-small) {
      & slot[name='supporting-text'],
      & ::slotted(label) {
        font-size: var(--gds-text-size-detail-s);
        line-height: var(--gds-text-line-height-detail-s);
      }
    }

    #extended-supporting-text {
      opacity: 1;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: all;
      font-size: var(--gds-text-size-body-s);
      line-height: var(--gds-text-line-height-body-s);
      border-radius: var(--gds-space-xs);
      background-color: var(--gds-color-l3-background-secondary);
      color: var(--gds-color-l3-content-tertiary);
      max-height: var(--_max-height);

      &[aria-hidden='false'] {
        margin: var(--gds-space-2xs) 0 0 0;
        padding: var(--gds-space-s) var(--gds-space-m);
      }

      &[aria-hidden='true'] {
        max-height: 0;
        opacity: 0;
        translate: 0 2px;
        padding: 0 var(--gds-space-m);
        margin: 0;
        overflow: hidden;
      }
    }
  }
`;var K=Object.defineProperty,L=Object.getOwnPropertyDescriptor,$=e=>{throw TypeError(e)},p=(e,t,s,a)=>{for(var r=a>1?void 0:a?L(t,s):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(a?n(t,s,r):n(r))||r);return a&&r&&K(t,s,r),r},T=(e,t,s)=>t.has(e)||$("Cannot "+s),_=(e,t,s)=>(T(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),C=(e,t,s)=>(T(e,t,"access private method"),s),g,G,u,m,z;let o=class extends y{constructor(){super(...arguments),c(this,g),this.disabled=!1,this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,c(this,u,()=>d`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${F("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${_(this,m)}
        ?disabled=${this.disabled}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),c(this,m,()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,(e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))})}render(){return d`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${x(this._hasExtendedSupportingText,_(this,u))}
      </div>

      ${C(this,g,z).call(this)}
    `}};g=new WeakSet;G=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};u=new WeakMap;m=new WeakMap;z=function(){return d`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${C(this,g,G)}
        ></slot>
      </div>
    `};o.styles=[J];p([h({type:Boolean,reflect:!0})],o.prototype,"disabled",2);p([h({type:Boolean,reflect:!0})],o.prototype,"showExtendedSupportingText",2);p([O()],o.prototype,"_hasExtendedSupportingText",2);p([k("#extended-supporting-text")],o.prototype,"_extendedSupportingText",2);o=p([w("gds-form-control-header",{dependsOn:[I,D,M]}),W()],o);export{o as G,l as a};
