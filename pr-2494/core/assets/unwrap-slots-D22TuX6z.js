var g=e=>{throw TypeError(e)};var f=(e,s,o)=>s.has(e)||g("Cannot "+o);var d=(e,s,o)=>(f(e,s,"read from private field"),o?o.call(e):s.get(e)),b=(e,s,o)=>s.has(e)?g("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,o);import{i as m}from"./iframe-r7XMIE4J.js";const k=e=>{class s extends e{constructor(){super(...arguments),this.onblur=t=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!1,composed:!0,relatedTarget:t.relatedTarget}))},this.onfocus=t=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!1,composed:!0,relatedTarget:t.relatedTarget}))}}focus(t){this.setAttribute("tabindex","0"),super.focus(t)}}return s},w=m`
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
`;var r;class E{constructor(s){b(this,r,s=>{var c,h;const o=s.target;if(!this.host.navigableItems.includes(o))return;let t=!1;if(s.key==="ArrowDown"){const i=this.host.navigableItems.indexOf(o)+1,n=this.host.navigableItems[i];n==null||n.focus(),t=!0}else if(s.key==="ArrowUp"){const i=this.host.navigableItems.indexOf(o)-1,n=this.host.navigableItems[i];n==null||n.focus(),t=!0}else if(s.key==="Home")(c=this.host.navigableItems[0])==null||c.focus(),t=!0;else if(s.key==="End")(h=this.host.navigableItems[this.host.navigableItems.length-1])==null||h.focus(),t=!0;else{const i=s.key.toLowerCase();if(i.length!==1)return;const n=i>="a"&&i<="z",v=i>="0"&&i<="9";if(n||v){const a=this.host.navigableItems.find(p=>{var u;const l=(u=p.textContent)==null?void 0:u.trim().toLowerCase();return l==null?void 0:l.startsWith(i)});a==null||a.focus(),t=!0}}t&&(s.preventDefault(),s.stopPropagation())});(this.host=s).addController(this)}hostConnected(){this.host.addEventListener("keydown",d(this,r))}hostDisconnected(){this.host.removeEventListener("keydown",d(this,r))}}r=new WeakMap;function I(e){let s=e;for(;s.assignedElements().length>0&&s.assignedElements()[0].nodeName==="SLOT";)s=s.assignedElements()[0];return s}export{k as F,E as L,w as s,I as u};
