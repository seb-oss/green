import{i as l}from"./iframe-oKN12R8m.js";const u=o=>{class e extends o{focus(t){this.setAttribute("tabindex","0"),super.focus(t)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",t=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!1,composed:!0,relatedTarget:t.relatedTarget}))}),this.addEventListener("focus",t=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!1,composed:!0,relatedTarget:t.relatedTarget}))})}}return e},g=l`
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
`;class b{constructor(e){(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",this.#e)}hostDisconnected(){this.host.removeEventListener("keydown",this.#e)}#e=e=>{const n=e.target;if(!this.host.navigableItems.includes(n))return;let t=!1;if(e.key==="ArrowDown"){const s=this.host.navigableItems.indexOf(n)+1;this.host.navigableItems[s]?.focus(),t=!0}else if(e.key==="ArrowUp"){const s=this.host.navigableItems.indexOf(n)-1;this.host.navigableItems[s]?.focus(),t=!0}else if(e.key==="Home")this.host.navigableItems[0]?.focus(),t=!0;else if(e.key==="End")this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),t=!0;else{const s=e.key.toLowerCase();if(s.length!==1)return;const i=s>="a"&&s<="z",r=s>="0"&&s<="9";(i||r)&&(this.host.navigableItems.find(a=>a.textContent?.trim().toLowerCase()?.startsWith(s))?.focus(),t=!0)}t&&(e.preventDefault(),e.stopPropagation())}}function v(o){let e=o;for(;e.assignedElements().length>0&&e.assignedElements()[0].nodeName==="SLOT";)e=e.assignedElements()[0];return e}export{u as F,b as L,g as s,v as u};
