var g=s=>{throw TypeError(s)};var f=(s,e,o)=>e.has(s)||g("Cannot "+o);var d=(s,e,o)=>(f(s,e,"read from private field"),o?o.call(s):e.get(s)),b=(s,e,o)=>e.has(s)?g("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,o);import{i as m}from"./iframe-Bs7dWGrf.js";const k=s=>{class e extends s{focus(t){this.setAttribute("tabindex","0"),super.focus(t)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",t=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!1,composed:!0,relatedTarget:t.relatedTarget}))}),this.addEventListener("focus",t=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!1,composed:!0,relatedTarget:t.relatedTarget}))})}}return e},E=m`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-sys-color-border-subtle-01);
    }

    :host .item {
      display: flex;
      align-items: center;
      user-select: none;
      padding-inline: var(--gds-sys-space-m);
      padding-block: var(--gds-sys-space-s);
      cursor: pointer;
      font: var(--gds-sys-text-detail-regular-m);
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
      background-color: var(--gds-sys-color-l2-neutral-03);
      color: var(--gds-sys-color-content-inversed);
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
`;var r;class w{constructor(e){b(this,r,e=>{var c,h;const o=e.target;if(!this.host.navigableItems.includes(o))return;let t=!1;if(e.key==="ArrowDown"){const n=this.host.navigableItems.indexOf(o)+1,i=this.host.navigableItems[n];i==null||i.focus(),t=!0}else if(e.key==="ArrowUp"){const n=this.host.navigableItems.indexOf(o)-1,i=this.host.navigableItems[n];i==null||i.focus(),t=!0}else if(e.key==="Home")(c=this.host.navigableItems[0])==null||c.focus(),t=!0;else if(e.key==="End")(h=this.host.navigableItems[this.host.navigableItems.length-1])==null||h.focus(),t=!0;else{const n=e.key.toLowerCase();if(n.length!==1)return;const i=n>="a"&&n<="z",v=n>="0"&&n<="9";if(i||v){const a=this.host.navigableItems.find(p=>{var u;const l=(u=p.textContent)==null?void 0:u.trim().toLowerCase();return l==null?void 0:l.startsWith(n)});a==null||a.focus(),t=!0}}t&&(e.preventDefault(),e.stopPropagation())});(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",d(this,r))}hostDisconnected(){this.host.removeEventListener("keydown",d(this,r))}}r=new WeakMap;function I(s){let e=s;for(;e.assignedElements().length>0&&e.assignedElements()[0].nodeName==="SLOT";)e=e.assignedElements()[0];return e}export{k as F,w as L,E as s,I as u};
