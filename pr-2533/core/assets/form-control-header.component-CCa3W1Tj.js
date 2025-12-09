import{i as w,n as f,Q as _,I as C,b,h as i,E as M,g as E,O as z,d as W,U as B,P as F,V as I}from"./iframe-B3RQzD1b.js";import{G as D}from"./badge.component-CEN5HMKV.js";import{I as H,a as V}from"./triangle-exclamation.component-H1oLaxiR.js";import{G as A}from"./card.component-nTacJsON.js";const L=w`
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
`;var R=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},x=(e,t,s,a)=>{for(var r=a>1?void 0:a?Q(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&R(t,s,r),r},U=(e,t,s)=>t.has(e)||S("Cannot "+s),j=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),q=(e,t,s)=>(U(e,t,"access private method"),s),v,T;let d=class extends C{constructor(){super(...arguments),j(this,v)}_handleVisibilityChange(){var e;this.classList.toggle("visually-hidden",!this.errorMessage&&!((e=this.charCounter)!=null&&e[1]))}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return i`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${b(this.errorMessage,()=>i`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${q(this,v,T).call(this)}
      </div>
    </div>`}};v=new WeakSet;T=function(){if(!this.charCounter||this.charCounter[1]===!1)return M;const[e,t]=this.charCounter;return i`<gds-badge variant="${t}">${e}</gds-badge>`};d.styles=[L];x([f({type:Array})],d.prototype,"charCounter",2);x([f()],d.prototype,"errorMessage",2);x([_("charCounter"),_("errorMessage")],d.prototype,"_handleVisibilityChange",1);d=x([E("gds-form-control-footer",{dependsOn:[D,H]})],d);const J=w`
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
`;var K=Object.defineProperty,N=Object.getOwnPropertyDescriptor,$=e=>{throw TypeError(e)},u=(e,t,s,a)=>{for(var r=a>1?void 0:a?N(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&K(t,s,r),r},G=(e,t,s)=>t.has(e)||$("Cannot "+s),p=(e,t,s)=>(G(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),k=(e,t,s)=>(G(e,t,"access private method"),s),c,O,m,y,g,P;let l=class extends C{constructor(){super(...arguments),h(this,c),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,h(this,m,()=>i`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${B("Show more information")}"
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
        ${b(this._hasExtendedSupportingText,p(this,m))}
      </div>

      ${k(this,c,P).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",p(this,g))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",p(this,g))}};c=new WeakSet;O=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};m=new WeakMap;y=new WeakMap;g=new WeakMap;P=function(){return i`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${k(this,c,O)}
        ></slot>
      </div>
    `};l.styles=[J];u([f({type:Boolean,reflect:!0})],l.prototype,"showExtendedSupportingText",2);u([z()],l.prototype,"_hasExtendedSupportingText",2);u([W("#extended-supporting-text")],l.prototype,"_extendedSupportingText",2);l=u([E("gds-form-control-header",{dependsOn:[I,A,V]}),F()],l);export{l as G,d as a};
