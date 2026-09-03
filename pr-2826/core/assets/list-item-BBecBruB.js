import{i as m,y as p,n as b,h,a as v,J as _,B as g}from"./iframe-Db8hCJ7u.js";import{G as y}from"./flex.component-m6iZ_CDd.js";const C=m`
  :host {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  :host ::slotted(*:not(:first-child)) {
    padding-top: var(--gds-sys-space-s);
  }

  :host ::slotted(*:not(:last-child)) {
    padding-bottom: var(--gds-sys-space-s);
  }

  :host([dividers]) ::slotted(*:not(:last-child)) {
    border-bottom: 1px solid var(--gds-sys-color-border-neutral-03);
    border-radius: 0;
  }

  @media (pointer: fine) {
    :host([dividers])
      ::slotted([href]:not([selectable]):not(:last-child):hover) {
      border-bottom-color: transparent;
    }

    :host([dividers]) ::slotted([hide-prev-border]:not(:last-child)) {
      border-bottom-color: transparent;
    }
  }
`;var E=Object.defineProperty,w=Object.getOwnPropertyDescriptor,u=e=>{throw TypeError(e)},f=(e,t,s,o)=>{for(var r=o>1?void 0:o?w(t,s):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(r=(o?a(t,s,r):a(r))||r);return o&&r&&E(t,s,r),r},x=(e,t,s)=>t.has(e)||u("Cannot "+s),d=(e,t,s)=>(x(e,t,"read from private field"),s?s.call(e):t.get(e)),G=(e,t,s)=>t.has(e)?u("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),n;let l=class extends y{constructor(){super(...arguments),this.dividers=!1,G(this,n,e=>{if(!this.dividers)return;const t=e.target.closest?.("[href]:not([selectable])");t?.parentElement===this&&t.previousElementSibling?.toggleAttribute("hide-prev-border",e.type==="pointerover")})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","list"),this.addEventListener("pointerover",d(this,n)),this.addEventListener("pointerout",d(this,n))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("pointerover",d(this,n)),this.removeEventListener("pointerout",d(this,n))}render(){return h`<slot></slot>`}};n=new WeakMap;l.styles=[p,C];f([b({type:Boolean,reflect:!0})],l.prototype,"dividers",2);l=f([v("gds-list")],l);l.define();var L=Object.getOwnPropertyDescriptor,O=(e,t,s,o)=>{for(var r=o>1?void 0:o?L(t,s):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(r=a(r)||r);return r};let c=class extends _(g){connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return h`<slot></slot>`}};c.styles=p;c=O([v("gds-list-item")],c);c.define();export{c as G};
