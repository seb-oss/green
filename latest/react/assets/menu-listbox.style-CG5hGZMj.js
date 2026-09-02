import{i as d,b,c as l}from"./declarative-layout-mixins-Dc4S7uGD.js";const u=d`
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
`;var f=u;const m=n=>{class i extends n{focus(s){this.setAttribute("tabindex","0"),super.focus(s)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",s=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!1,composed:!0,relatedTarget:s.relatedTarget}))}),this.addEventListener("focus",s=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!1,composed:!0,relatedTarget:s.relatedTarget}))})}}return i};var r;class y{constructor(i){b(this,r,t=>{const s=t.target;if(!this.host.navigableItems.includes(s))return;let o=!1;if(t.key==="ArrowDown"){const e=this.host.navigableItems.indexOf(s)+1;this.host.navigableItems[e]?.focus(),o=!0}else if(t.key==="ArrowUp"){const e=this.host.navigableItems.indexOf(s)-1;this.host.navigableItems[e]?.focus(),o=!0}else if(t.key==="Home")this.host.navigableItems[0]?.focus(),o=!0;else if(t.key==="End")this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),o=!0;else{const e=t.key.toLowerCase();if(e.length!==1)return;const a=e>="a"&&e<="z",c=e>="0"&&e<="9";(a||c)&&(this.host.navigableItems.find(h=>h.textContent?.trim().toLowerCase()?.startsWith(e))?.focus(),o=!0)}o&&(t.preventDefault(),t.stopPropagation())}),(this.host=i).addController(this)}hostConnected(){this.host.addEventListener("keydown",l(this,r))}hostDisconnected(){this.host.removeEventListener("keydown",l(this,r))}}r=new WeakMap;var x=d`
  @layer base, reset, transitional-styles;

  @layer base {
    .menu-listbox {
      display: flex;
      flex-direction: column;
      overflow: auto;
      overscroll-behavior: contain;
    }
  }
`;export{m as F,y as L,x as a,f as m};
