var u=e=>{throw TypeError(e)};var y=(e,s,o)=>s.has(e)||u("Cannot "+o);var d=(e,s,o)=>(y(e,s,"read from private field"),o?o.call(e):s.get(e)),b=(e,s,o)=>s.has(e)?u("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,o);import{i as f}from"./lit-element-Bx14lxc-.js";const k=e=>{class s extends e{constructor(){super(...arguments),this.onblur=t=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:t.relatedTarget}))},this.onfocus=t=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:t.relatedTarget}))}}focus(t){this.setAttribute("tabindex","0"),super.focus(t)}}return s},w=f`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-sys-color-l2-border-primary);
    }

    :host div {
      display: flex;
      align-items: center;
      user-select: none;
      padding-inline: var(--gds-sys-space-m);
      padding-block: var(--gds-sys-space-m);
      cursor: pointer;
      font-size: var(--gds-sys-text-size-label-input-large);
      font-weight: var(--gds-sys-text-weight-regular);
      line-height: var(--gds-sys-text-line-height-label-input-large);
      gap: 1ch;
      max-width: 100%;
      box-sizing: border-box;
      position: relative;

      &::before {
        content: ' ';
        display: flex;
        inset: var(--gds-sys-space-2xs);
        position: absolute;
        border: var(--gds-sys-space-3xs) solid currentColor;
        border-radius: var(--gds-sys-space-xs);
        opacity: 0;
        visitility: hidden;
        pointer-events: none;
      }
    }

    :host([highlighted]) {
      background-color: var(--gds-sys-color-l2-background-tertiary);
      color: var(--gds-sys-color-l2-content-tertiary);
    }

    :host(:hover:not([highlighted])) div {
      background-color: var(--gds-sys-color-l3-background-secondary);
    }

    :host(:focus-visible) {
      outline: none;
    }

    :host(:focus-visible) div::before {
      inset: var(--gds-sys-space-2xs);
      opacity: 1;
      visivility: visible;
    }

    :host([inert]) {
      display: none;
    }

    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1lh;
      width: 1lh;
      box-sizing: border-box;
      position: relative;
      aspect-ratio: 1/1;
      border-radius: var(--gds-sys-space-2xs);
      border: var(--gds-sys-space-3xs) solid currentColor;
      padding: var(--gds-sys-space-3xs);

      &.checked {
        background-color: currentColor;

        gds-icon-checkmark {
          &::part(icon) {
            color: var(--gds-sys-color-l2-content-tertiary);
            stroke-width: var(--gds-sys-space-2xs);
          }
        }
      }
    }
  }
`;var n;class E{constructor(s){b(this,n,s=>{var c,h;const o=s.target;if(!this.host.navigableItems.includes(o))return;let t=!1;if(s.key==="ArrowDown"){const r=this.host.navigableItems.indexOf(o)+1,i=this.host.navigableItems[r];i==null||i.focus(),t=!0}else if(s.key==="ArrowUp"){const r=this.host.navigableItems.indexOf(o)-1,i=this.host.navigableItems[r];i==null||i.focus(),t=!0}else if(s.key==="Home")(c=this.host.navigableItems[0])==null||c.focus(),t=!0;else if(s.key==="End")(h=this.host.navigableItems[this.host.navigableItems.length-1])==null||h.focus(),t=!0;else{const r=s.key.toLowerCase();if(r.length!==1)return;const i=r>="a"&&r<="z",v=r>="0"&&r<="9";if(i||v){const a=this.host.navigableItems.find(p=>{var g;const l=(g=p.textContent)==null?void 0:g.trim().toLowerCase();return l==null?void 0:l.startsWith(r)});a==null||a.focus(),t=!0}}t&&(s.preventDefault(),s.stopPropagation())});(this.host=s).addController(this)}hostConnected(){this.host.addEventListener("keydown",d(this,n))}hostDisconnected(){this.host.removeEventListener("keydown",d(this,n))}}n=new WeakMap;function I(e){let s=e;for(;s.assignedElements().length>0&&s.assignedElements()[0].nodeName==="SLOT";)s=s.assignedElements()[0];return s}export{k as F,E as L,w as s,I as u};
