var b=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var c=(s,e,t)=>(b(s,e,"read from private field"),t?t.call(s):e.get(s)),v=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},p=(s,e,t,o)=>(b(s,e,"write to private field"),o?o.call(s,t):e.set(s,t),t);import{i as x}from"./lit-element-1d72f0ce.js";var a;class w{constructor(e){v(this,a,void 0);p(this,a,t=>{var h,g;const o=t.target;if(!this.host.navigableItems.includes(o))return;let i=!1;if(t.key==="ArrowDown"){const r=this.host.navigableItems.indexOf(o)+1,n=this.host.navigableItems[r];n==null||n.focus(),i=!0}else if(t.key==="ArrowUp"){const r=this.host.navigableItems.indexOf(o)-1,n=this.host.navigableItems[r];n==null||n.focus(),i=!0}else if(t.key==="Home")(h=this.host.navigableItems[0])==null||h.focus(),i=!0;else if(t.key==="End")(g=this.host.navigableItems[this.host.navigableItems.length-1])==null||g.focus(),i=!0;else{const r=t.key.toLowerCase();if(r.length!==1)return;const n=r>="a"&&r<="z",f=r>="0"&&r<="9";if(n||f){const l=this.host.navigableItems.find(m=>{var u;const d=(u=m.textContent)==null?void 0:u.trim().toLowerCase();return d==null?void 0:d.startsWith(r)});l==null||l.focus(),i=!0}}i&&(t.preventDefault(),t.stopPropagation())}),(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",c(this,a))}hostDisconnected(){this.host.removeEventListener("keydown",c(this,a))}}a=new WeakMap;function E(s){let e=s;for(;e.assignedElements().length>0&&e.assignedElements()[0].nodeName==="SLOT";)e=e.assignedElements()[0];return e}const I=s=>{class e extends s{constructor(){super(...arguments),this.onblur=o=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:o.relatedTarget}))},this.onfocus=o=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:o.relatedTarget}))}}focus(o){this.setAttribute("tabindex","0"),super.focus(o)}}return e},C=x`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-sys-color-border-stroke-variant2);
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
    }

    :host([highlighted]) div {
      background-color: var(--gds-sys-color-container-container-shade1);
      color: var(--gds-sys-color-content-content-inverse);
    }

    :host(:hover:not([highlighted])) div {
      background-color: var(--gds-sys-color-container-container-dim1);
    }

    :host(:focus-visible) {
      outline: auto;
      outline-offset: -6px;
      outline-color: currentColor;
      outline-width: 2px;
    }

    :host([aria-hidden='true']) div {
      display: none;
    }

    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1lh;
      width: auto;
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
            color: var(--gds-sys-color-base-white);
            stroke-width: var(--gds-space-2xs);
          }
        }
      }
    }
  }
`;export{I as F,w as L,C as s,E as u};
