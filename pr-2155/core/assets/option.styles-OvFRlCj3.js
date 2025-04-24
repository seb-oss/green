var u=t=>{throw TypeError(t)};var f=(t,e,o)=>e.has(t)||u("Cannot "+o);var d=(t,e,o)=>(f(t,e,"read from private field"),o?o.call(t):e.get(t)),b=(t,e,o)=>e.has(t)?u("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o);import{i as m}from"./lit-element-Bx14lxc-.js";var n;class k{constructor(e){b(this,n,e=>{var c,h;const o=e.target;if(!this.host.navigableItems.includes(o))return;let s=!1;if(e.key==="ArrowDown"){const r=this.host.navigableItems.indexOf(o)+1,i=this.host.navigableItems[r];i==null||i.focus(),s=!0}else if(e.key==="ArrowUp"){const r=this.host.navigableItems.indexOf(o)-1,i=this.host.navigableItems[r];i==null||i.focus(),s=!0}else if(e.key==="Home")(c=this.host.navigableItems[0])==null||c.focus(),s=!0;else if(e.key==="End")(h=this.host.navigableItems[this.host.navigableItems.length-1])==null||h.focus(),s=!0;else{const r=e.key.toLowerCase();if(r.length!==1)return;const i=r>="a"&&r<="z",v=r>="0"&&r<="9";if(i||v){const a=this.host.navigableItems.find(p=>{var g;const l=(g=p.textContent)==null?void 0:g.trim().toLowerCase();return l==null?void 0:l.startsWith(r)});a==null||a.focus(),s=!0}}s&&(e.preventDefault(),e.stopPropagation())});(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",d(this,n))}hostDisconnected(){this.host.removeEventListener("keydown",d(this,n))}}n=new WeakMap;function w(t){let e=t;for(;e.assignedElements().length>0&&e.assignedElements()[0].nodeName==="SLOT";)e=e.assignedElements()[0];return e}const E=t=>{class e extends t{constructor(){super(...arguments),this.onblur=s=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:s.relatedTarget}))},this.onfocus=s=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:s.relatedTarget}))}}focus(s){this.setAttribute("tabindex","0"),super.focus(s)}}return e},I=m`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-color-l2-border-primary);
    }

    :host div {
      display: flex;
      align-items: center;
      user-select: none;
      padding-inline: var(--gds-space-m);
      padding-block: var(--gds-space-m);
      cursor: pointer;
      font-size: var(--gds-text-size-label-input-large);
      font-weight: var(--gds-text-weight-regular);
      line-height: var(--gds-text-line-height-label-input-large);
      gap: 1ch;
      max-width: 100%;
      box-sizing: border-box;
      position: relative;

      &::before {
        content: ' ';
        display: flex;
        inset: var(--gds-space-2xs);
        position: absolute;
        border: var(--gds-space-3xs) solid currentColor;
        border-radius: var(--gds-space-xs);
        opacity: 0;
        visitility: hidden;
        pointer-events: none;
      }
    }

    :host([highlighted]) {
      background-color: var(--gds-color-l2-background-tertiary);
      color: var(--gds-color-l2-content-tertiary);
    }

    :host(:hover:not([highlighted])) div {
      background-color: var(--gds-color-l3-background-secondary);
    }

    :host(:focus-visible) {
      outline: none;

      div::before {
        inset: var(--gds-space-2xs);
        opacity: 1;
        visivility: visible;
      }
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
      border-radius: var(--gds-space-2xs);
      border: var(--gds-space-3xs) solid currentColor;
      padding: var(--gds-space-3xs);

      &.checked {
        background-color: currentColor;

        gds-icon-checkmark {
          &::part(icon) {
            color: var(--gds-color-l2-content-tertiary);
            stroke-width: var(--gds-space-2xs);
          }
        }
      }
    }
  }
`;export{E as F,k as L,I as s,w as u};
