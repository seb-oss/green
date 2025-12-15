import{i as $,n as u,A as k,h as p,g as C,Y as P,L as z,K as E,a as x,t as W,d as w,a0 as M,J as D}from"./iframe-BZMmfzq-.js";const G=$`
  :host {
    display: contents;
  }
`;var B=Object.defineProperty,I=Object.getOwnPropertyDescriptor,S=(e,t,s,o)=>{for(var a=o>1?void 0:o?I(t,s):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(a=(o?d(t,s,a):d(a))||a);return o&&a&&B(t,s,a),a};let h=class extends k{constructor(){super(...arguments),this.open=!1}render(){return p`
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        id="plus"
      >
        <line x1="4" y1="10" x2="16" y2="10" />
        <line x1="10" y1="4" x2="10" y2="16">
          <animate
            attributeName="y1"
            dur="240ms"
            from="${this.open?"4":"10"}"
            to="${this.open?"10":"4"}"
            begin="plus.toggle"
            fill="freeze"
          />
          <animate
            attributeName="y2"
            dur="240ms"
            from="${this.open?"16":"10"}"
            to="${this.open?"10":"16"}"
            begin="plus.toggle"
            fill="freeze"
          />
        </line>
      </svg>
    `}updated(e){var t;if(e.has("open")){const s=(t=this.shadowRoot)==null?void 0:t.querySelector("svg");if(s){const o=new CustomEvent("toggle",{bubbles:!0,composed:!0});s.dispatchEvent(o)}}}};h.styles=[G];S([u({type:Boolean,reflect:!0})],h.prototype,"open",2);h=S([C("gds-icon-details")],h);const A=$`
  @layer base, reset;
  @layer base {
    .details {
      border-bottom: solid var(--gds-sys-space-5xs)
        var(--gds-sys-color-border-subtle-01);
      font: var(--gds-sys-text-body-regular-m);
      color: var(--gds-sys-color-content-neutral-01);
      transition: border-color 240ms linear;
    }

    .summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      user-select: none;
      outline-offset: var(--gds-sys-space-3xs);
      outline-color: currentColor;
      transition: all 120ms;
      color: var(--gds-sys-color-content-neutral-01);
    }

    .summary-icon {
      border-radius: var(--gds-sys-radius-max);
      background-color: transparent;
      transition: all 280ms;
      aspect-ratio: 1;
      width: max-content;
      height: max-content;
      line-height: 1;
      position: relative;
    }

    .summary-icon::after {
      content: '';
      position: absolute;
      border-radius: var(--gds-sys-radius-max);
      transition: all 280ms;
      inset: 0;
      scale: 0.9;
      opacity: 0;
      pointer-events: none;
    }

    .summary:focus {
      outline-color: var(--gds-sys-color-content-neutral-01);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      .summary:hover .summary-icon::after,
      .summary:focus-visible .summary-icon::after {
        opacity: 1;
        scale: 1;
      }

      .summary:active .summary-icon::after {
        opacity: 1;
        scale: 1;
      }

      .details:hover,
      .details:focus-within {
        border-color: var(--gds-sys-color-border-strong);
      }
    }

    .summary-label {
      font: var(--gds-sys-text-heading-xs);
      padding-block: var(--gds-sys-space-m);
      cursor: pointer;
      flex: 1;
      outline: none;
    }

    .details.small .summary-label {
      font: var(--gds-sys-text-heading-2xs);
      padding-block: var(--gds-sys-space-s);
    }

    .details.small .content {
      font: var(--gds-sys-text-heading-2xs);
    }

    .details:focus-visible {
      border-radius: var(--gds-sys-radius-2xs);
    }

    .details.open .content {
      padding-block-end: var(--gds-sys-space-l);
    }

    .details.small.open .content {
      padding-block-end: var(--gds-sys-space-s);
    }

    .content {
      interpolate-size: allow-keywords;
      height: 0;
      transition:
        height 0.35s ease,
        padding-block-end 0.35s ease;
      overflow: hidden;
      outline: none;
      scrollbar-width: none;
    }

    .content.open {
      overflow: auto;
      height: max-content;
      max-height: 100vh;
    }
  }
`;var L=Object.defineProperty,q=Object.getOwnPropertyDescriptor,O=e=>{throw TypeError(e)},i=(e,t,s,o)=>{for(var a=o>1?void 0:o?q(t,s):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(a=(o?d(t,s,a):d(a))||a);return o&&a&&L(t,s,a),a},K=(e,t,s)=>t.has(e)||O("Cannot "+s),r=(e,t,s)=>(K(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?O("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),m,g,v,y,f,b,_;let n=class extends P(z(E(k))){constructor(){super(...arguments),this.summary="",this.name="",this.open=!1,this.size="large",c(this,m,()=>{this.open=!this.open,r(this,y).call(this)}),c(this,g,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),r(this,m).call(this))}),c(this,v,()=>{!this.open||!this.name||document.querySelectorAll('[gds-element="gds-details"]').forEach(e=>{var t;if(e!==this&&e.name===this.name){const s=e;s.open=!1,r(t=s,y).call(t)}})}),c(this,y,()=>{this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.open})}),c(this,f,()=>p`
      <div
        class="summary"
        part="summary"
        role="button"
        tabindex="0"
        @click=${r(this,m)}
        @keydown=${r(this,g)}
        aria-expanded="${this.open}"
        aria-controls="content-${this.name||"default"}"
      >
        <div id="summary-${this.name||"default"}" class="summary-label">
          ${this.summary||"Summary"}
        </div>
        ${r(this,b).call(this)}
      </div>
    `),c(this,b,()=>p`
      <div class="summary-icon" role="presentation" aria-hidden="true">
        <gds-button
          rank="tertiary"
          size=${this.size==="small"?"xs":"medium"}
          role="presentation"
          tabindex="-1"
        >
          <gds-icon-details .open=${this.open}></gds-icon-details>
        </gds-button>
      </div>
    `),c(this,_,()=>p`
      <div
        id="content-${this.name||"default"}"
        class=${x({content:!0,open:this.open,small:this.size==="small"})}
        aria-hidden="${!this.open}"
        ?inert="${!this.open}"
      >
        <slot></slot>
      </div>
    `)}__handleOpenChange(){r(this,v).call(this)}render(){return p`
      <div
        class=${x({details:!0,open:this.open,small:this.size==="small"})}
      >
        ${r(this,f).call(this)} ${r(this,_).call(this)}
      </div>
    `}};m=new WeakMap;g=new WeakMap;v=new WeakMap;y=new WeakMap;f=new WeakMap;b=new WeakMap;_=new WeakMap;n.styles=[W,A];i([u({type:String})],n.prototype,"summary",2);i([u({type:String})],n.prototype,"name",2);i([u({type:Boolean,reflect:!0})],n.prototype,"open",2);i([u({type:String})],n.prototype,"size",2);i([w(".content")],n.prototype,"_content",2);i([w('slot[name="summary-icon-open"]')],n.prototype,"_openIconSlot",2);i([w('slot[name="summary-icon-closed"]')],n.prototype,"_closedIconSlot",2);i([M("open")],n.prototype,"__handleOpenChange",1);n=i([C("gds-details",{dependsOn:[D,h]})],n);n.define();
