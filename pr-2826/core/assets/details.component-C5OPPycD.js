import{i as k,n as u,z as C,h as p,g as S,Q as O,I as P,H as W,a as $,v as M,w as A,f as x,$ as B,F as D,y as G}from"./iframe-DsnYsTSu.js";const I=k`
  :host {
    display: contents;
  }
`;var N=Object.defineProperty,T=Object.getOwnPropertyDescriptor,z=(e,t,s,i)=>{for(var a=i>1?void 0:i?T(t,s):t,d=e.length-1,c;d>=0;d--)(c=e[d])&&(a=(i?c(t,s,a):c(a))||a);return i&&a&&N(t,s,a),a};let h=class extends C{constructor(){super(...arguments),this.open=!1}render(){return p`
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
    `}updated(e){if(e.has("open")){const t=this.shadowRoot?.querySelector("svg");if(t){const s=new CustomEvent("toggle",{bubbles:!0,composed:!0});t.dispatchEvent(s)}}}};h.styles=[I];z([u({type:Boolean,reflect:!0})],h.prototype,"open",2);h=z([S("gds-icon-details")],h);const q=k`
  @layer base, reset;
  @layer base {
    .details {
      border-bottom: solid var(--gds-sys-space-5xs)
        var(--gds-sys-color-border-neutral-02);
      font: var(--gds-sys-text-body-m-regular);
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
        border-color: var(--gds-sys-color-border-neutral-04);
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
      font: var(--gds-sys-text-heading-xs);
      padding-block: var(--gds-sys-space-s);
    }

    .details.small .content {
      font: var(--gds-sys-text-heading-xs);
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
      height: max-content;
    }

    .content.open:not(.animating) {
      overflow: visible;
    }
  }
`;var F=Object.defineProperty,H=Object.getOwnPropertyDescriptor,E=e=>{throw TypeError(e)},r=(e,t,s,i)=>{for(var a=i>1?void 0:i?H(t,s):t,d=e.length-1,c;d>=0;d--)(c=e[d])&&(a=(i?c(t,s,a):c(a))||a);return i&&a&&F(t,s,a),a},L=(e,t,s)=>t.has(e)||E("Cannot "+s),o=(e,t,s)=>(L(e,t,"read from private field"),s?s.call(e):t.get(e)),l=(e,t,s)=>t.has(e)?E("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),m,g,v,y,f,b,_,w;let n=class extends O(P(W(C))){constructor(){super(...arguments),this._isAnimating=!1,this.summary="",this.name="",this.open=!1,this.size="large",l(this,m,()=>{this.open=!this.open,o(this,y).call(this)}),l(this,g,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),o(this,m).call(this))}),l(this,v,()=>{!this.open||!this.name||document.querySelectorAll('[gds-element="gds-details"]').forEach(e=>{var t;if(e!==this&&e.name===this.name){const s=e;s.open=!1,o(t=s,y).call(t)}})}),l(this,y,()=>{this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.open})}),l(this,f,e=>{e.target!==this._content||e.propertyName!=="height"||(this._isAnimating=!1)}),l(this,b,()=>p`
      <div
        class="summary"
        part="summary"
        role="button"
        tabindex="0"
        @click=${o(this,m)}
        @keydown=${o(this,g)}
        aria-expanded="${this.open}"
        aria-controls="content-${this.name||"default"}"
      >
        <div id="summary-${this.name||"default"}" class="summary-label">
          ${this.summary||"Summary"}
        </div>
        ${o(this,_).call(this)}
      </div>
    `),l(this,_,()=>p`
      <div class="summary-icon" role="presentation" aria-hidden="true">
        <gds-button
          rank="tertiary"
          size=${this.size==="small"?"xs":"medium"}
          role="presentation"
          gds-tabindex="-1"
        >
          <gds-icon-details .open=${this.open}></gds-icon-details>
        </gds-button>
      </div>
    `),l(this,w,()=>p`
      <div
        id="content-${this.name||"default"}"
        class=${$({content:!0,open:this.open,animating:this._isAnimating,small:this.size==="small"})}
        aria-hidden="${!this.open}"
        ?inert="${!this.open}"
        @transitionend=${o(this,f)}
      >
        <slot></slot>
      </div>
    `)}__handleOpenChange(){o(this,v).call(this),this.hasUpdated&&(this._isAnimating=!0)}render(){return p`
      <div
        class=${$({details:!0,open:this.open,small:this.size==="small"})}
      >
        ${o(this,b).call(this)} ${o(this,w).call(this)}
      </div>
    `}};m=new WeakMap;g=new WeakMap;v=new WeakMap;y=new WeakMap;f=new WeakMap;b=new WeakMap;_=new WeakMap;w=new WeakMap;n.styles=[M,q];r([A()],n.prototype,"_isAnimating",2);r([u({type:String})],n.prototype,"summary",2);r([u({type:String})],n.prototype,"name",2);r([u({type:Boolean,reflect:!0})],n.prototype,"open",2);r([u({type:String})],n.prototype,"size",2);r([x(".content")],n.prototype,"_content",2);r([x('slot[name="summary-icon-open"]')],n.prototype,"_openIconSlot",2);r([x('slot[name="summary-icon-closed"]')],n.prototype,"_closedIconSlot",2);r([B("open")],n.prototype,"__handleOpenChange",1);n=r([S("gds-details",{dependsOn:[D,h]}),G({labelledBy:".summary",describedBy:".summary"})],n);export{n as G};
