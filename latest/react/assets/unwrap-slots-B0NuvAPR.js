import{i as p,b as f,d as g}from"./tokens.style-B9dm16Su.js";const x=r=>{class s extends r{focus(o){this.setAttribute("tabindex","0"),super.focus(o)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",o=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!1,composed:!0,relatedTarget:o.relatedTarget}))}),this.addEventListener("focus",o=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!1,composed:!0,relatedTarget:o.relatedTarget}))})}}return s},m=p`
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
`;var k=m,a;class w{constructor(s){f(this,a,t=>{var c,h;const o=t.target;if(!this.host.navigableItems.includes(o))return;let i=!1;if(t.key==="ArrowDown"){const e=this.host.navigableItems.indexOf(o)+1,n=this.host.navigableItems[e];n==null||n.focus(),i=!0}else if(t.key==="ArrowUp"){const e=this.host.navigableItems.indexOf(o)-1,n=this.host.navigableItems[e];n==null||n.focus(),i=!0}else if(t.key==="Home")(c=this.host.navigableItems[0])==null||c.focus(),i=!0;else if(t.key==="End")(h=this.host.navigableItems[this.host.navigableItems.length-1])==null||h.focus(),i=!0;else{const e=t.key.toLowerCase();if(e.length!==1)return;const n=e>="a"&&e<="z",b=e>="0"&&e<="9";if(n||b){const l=this.host.navigableItems.find(v=>{var u;const d=(u=v.textContent)==null?void 0:u.trim().toLowerCase();return d==null?void 0:d.startsWith(e)});l==null||l.focus(),i=!0}}i&&(t.preventDefault(),t.stopPropagation())}),(this.host=s).addController(this)}hostConnected(){this.host.addEventListener("keydown",g(this,a))}hostDisconnected(){this.host.removeEventListener("keydown",g(this,a))}}a=new WeakMap;function E(r){let s=r;for(;s.assignedElements().length>0&&s.assignedElements()[0].nodeName==="SLOT";)s=s.assignedElements()[0];return s}export{x as F,w as L,k as o,E as u};
