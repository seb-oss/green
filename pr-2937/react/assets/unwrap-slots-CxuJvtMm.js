import{i as h,b as u,d as l}from"./declarative-layout-mixins-ODE1hYrC.js";const m=i=>{class t extends i{focus(o){this.setAttribute("tabindex","0"),super.focus(o)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",o=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!1,composed:!0,relatedTarget:o.relatedTarget}))}),this.addEventListener("focus",o=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!1,composed:!0,relatedTarget:o.relatedTarget}))})}}return t},g=h`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-sys-color-border-neutral-02);
    }

    :host .item {
      display: flex;
      align-items: center;
      user-select: none;
      padding-inline: var(--gds-sys-space-m);
      padding-block: var(--gds-sys-space-s);
      cursor: pointer;
      font: var(--gds-sys-text-detail-m-regular);
      gap: 1ch;
      max-width: 100%;
      box-sizing: border-box;
      position: relative;

      &::before {
        content: ' ';
        display: flex;
        inset: var(--gds-sys-space-3xs);
        position: absolute;
        border: var(--gds-sys-space-4xs) solid currentColor;
        border-radius: var(--gds-sys-space-xs);
        opacity: 0;
        visitility: hidden;
        pointer-events: none;
      }
    }

    :host([highlighted]) {
      background-color: color-mix(
        in srgb,
        transparent,
        var(--gds-sys-color-state-neutral-06)
      );
      color: var(--gds-sys-color-content-neutral-01);
    }

    :host(:hover:not([highlighted])) .item {
      background-color: color-mix(
        in srgb,
        transparent,
        var(--gds-sys-color-state-neutral-05)
      );
    }

    :host(:focus-visible) {
      outline: none;
    }

    :host(:focus-visible) div::before {
      inset: var(--gds-sys-space-3xs);
      opacity: 1;
      visivility: visible;
    }

    :host([inert]) {
      display: none;
    }
  }
`;var f=g,r;class y{constructor(t){u(this,r,s=>{const o=s.target;if(!this.host.navigableItems.includes(o))return;let n=!1;if(s.key==="ArrowDown"){const e=this.host.navigableItems.indexOf(o)+1;this.host.navigableItems[e]?.focus(),n=!0}else if(s.key==="ArrowUp"){const e=this.host.navigableItems.indexOf(o)-1;this.host.navigableItems[e]?.focus(),n=!0}else if(s.key==="Home")this.host.navigableItems[0]?.focus(),n=!0;else if(s.key==="End")this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),n=!0;else{const e=s.key.toLowerCase();if(e.length!==1)return;const a=e>="a"&&e<="z",d=e>="0"&&e<="9";(a||d)&&(this.host.navigableItems.find(c=>c.textContent?.trim().toLowerCase()?.startsWith(e))?.focus(),n=!0)}n&&(s.preventDefault(),s.stopPropagation())}),(this.host=t).addController(this)}hostConnected(){this.host.addEventListener("keydown",l(this,r))}hostDisconnected(){this.host.removeEventListener("keydown",l(this,r))}}r=new WeakMap;function x(i){let t=i;for(;t.assignedElements().length>0&&t.assignedElements()[0].nodeName==="SLOT";)t=t.assignedElements()[0];return t}export{m as F,y as L,f as o,x as u};
