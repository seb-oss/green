import{n as m,G as _,h as n,g as w,r as M}from"./custom-element-scoping-CNGU1oQ0.js";import{n as c}from"./when-BR7zwNJC.js";import{G as O}from"./badge.component-B0YxZeN0.js";import{a as k,I as P}from"./triangle-exclamation.component-y6G1ChOv.js";import{i as E}from"./lit-element-Bx14lxc-.js";import{m as B}from"./runtime-BL31MtW8.js";import{l as F}from"./localized-decorator-DtmrKsyB.js";import{a as W}from"./query-p8xgzTDt.js";import{G as I}from"./button.component-w05jGZro.js";import{G as D}from"./card.component-a_DdskCg.js";const H=E`
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
`;var A=Object.defineProperty,L=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},y=(e,t,s,a)=>{for(var r=a>1?void 0:a?L(t,s):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&A(t,s,r),r},N=(e,t,s)=>t.has(e)||S("Cannot "+s),R=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),j=(e,t,s)=>(N(e,t,"access private method"),s),x,b;let l=class extends _{constructor(){super(...arguments),R(this,x)}updated(e){super.updated(e),(e.has("errorMessage")||e.has("charCounter"))&&this.classList.toggle("visually-hidden",!this.errorMessage)}connectedCallback(){super.connectedCallback(),!this.errorMessage&&!this.charCounter&&this.classList.add("visually-hidden")}render(){return n`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${c(this.errorMessage,()=>n`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${c(Number.isInteger(this.charCounter),()=>j(this,x,b).call(this,this.charCounter))}
      </div>
    </div>`}};x=new WeakSet;b=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",n`<gds-badge variant="${t}">${e}</gds-badge>`};l.styles=[H];y([m({type:Number})],l.prototype,"charCounter",2);y([m()],l.prototype,"errorMessage",2);l=y([w("gds-form-control-footer",{dependsOn:[O,k]})],l);const q=E`
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
`;var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,C=e=>{throw TypeError(e)},h=(e,t,s,a)=>{for(var r=a>1?void 0:a?K(t,s):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&J(t,s,r),r},T=(e,t,s)=>t.has(e)||C("Cannot "+s),f=(e,t,s)=>(T(e,t,"read from private field"),s?s.call(e):t.get(e)),g=(e,t,s)=>t.has(e)?C("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),$=(e,t,s)=>(T(e,t,"access private method"),s),p,G,u,v,z;let d=class extends _{constructor(){super(...arguments),g(this,p),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,g(this,u,()=>n`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${B("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${f(this,v)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),g(this,v,()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,(e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))})}render(){return n`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${c(this._hasExtendedSupportingText,f(this,u))}
      </div>

      ${$(this,p,z).call(this)}
    `}};p=new WeakSet;G=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};u=new WeakMap;v=new WeakMap;z=function(){return n`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${$(this,p,G)}
        ></slot>
      </div>
    `};d.styles=[q];h([m({type:Boolean,reflect:!0})],d.prototype,"showExtendedSupportingText",2);h([M()],d.prototype,"_hasExtendedSupportingText",2);h([W("#extended-supporting-text")],d.prototype,"_extendedSupportingText",2);d=h([w("gds-form-control-header",{dependsOn:[I,D,P]}),F()],d);export{d as G,l as a};
