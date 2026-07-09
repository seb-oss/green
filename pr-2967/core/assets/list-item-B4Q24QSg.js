import{i as m,v as p,n as b,h as v,g as h,H as _,z as g}from"./iframe-DVOBMRBC.js";import{G as y}from"./flex.component-CiNWtacO.js";const C=m`
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
`;var E=Object.defineProperty,w=Object.getOwnPropertyDescriptor,u=e=>{throw TypeError(e)},f=(e,t,s,o)=>{for(var r=o>1?void 0:o?w(t,s):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(o?n(t,s,r):n(r))||r);return o&&r&&E(t,s,r),r},x=(e,t,s)=>t.has(e)||u("Cannot "+s),d=(e,t,s)=>(x(e,t,"read from private field"),s?s.call(e):t.get(e)),G=(e,t,s)=>t.has(e)?u("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),a;let l=class extends y{constructor(){super(...arguments),this.dividers=!1,G(this,a,e=>{if(!this.dividers)return;const t=e.target.closest?.("[href]:not([selectable])");t?.parentElement===this&&t.previousElementSibling?.toggleAttribute("hide-prev-border",e.type==="pointerover")})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","list"),this.addEventListener("pointerover",d(this,a)),this.addEventListener("pointerout",d(this,a))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("pointerover",d(this,a)),this.removeEventListener("pointerout",d(this,a))}render(){return v`<slot></slot>`}};a=new WeakMap;l.styles=[p,C];f([b({type:Boolean,reflect:!0})],l.prototype,"dividers",2);l=f([h("gds-list")],l);l.define();var L=Object.getOwnPropertyDescriptor,O=(e,t,s,o)=>{for(var r=o>1?void 0:o?L(t,s):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=n(r)||r);return r};let c=class extends _(g){connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return v`<slot></slot>`}};c.styles=p;c=O([h("gds-list-item")],c);c.define();export{c as G};
