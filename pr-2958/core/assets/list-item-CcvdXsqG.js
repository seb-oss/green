import{i as u,v as c,n as m,h,g as v,H as b,z as _}from"./iframe-DOT61pU6.js";import{G as y}from"./flex.component-BP9ANZYa.js";const C=u`
  :host {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  /* Use padding instead of gap on the list items to make spacing easier to control when dividers are present */
  :host ::slotted(*:not(:last-child)) {
    padding-bottom: var(--gds-sys-space-s);
  }

  :host([dividers]) ::slotted(*:not(:first-child)) {
    padding-top: var(--gds-sys-space-s);
  }

  /* Navigational items handle their own spacing */
  :host ::slotted([href]:not([selectable])) {
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;
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
`;var E=Object.defineProperty,w=Object.getOwnPropertyDescriptor,f=e=>{throw TypeError(e)},g=(e,t,s,o)=>{for(var r=o>1?void 0:o?w(t,s):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(r=(o?a(t,s,r):a(r))||r);return o&&r&&E(t,s,r),r},x=(e,t,s)=>t.has(e)||f("Cannot "+s),l=(e,t,s)=>(x(e,t,"read from private field"),s?s.call(e):t.get(e)),G=(e,t,s)=>t.has(e)?f("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),n;let d=class extends y{constructor(){super(...arguments),this.dividers=!1,G(this,n,e=>{if(!this.dividers)return;const t=e.target.closest?.("[href]:not([selectable])");t?.parentElement===this&&t.previousElementSibling?.toggleAttribute("hide-prev-border",e.type==="pointerover")})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","list"),this.addEventListener("pointerover",l(this,n)),this.addEventListener("pointerout",l(this,n))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("pointerover",l(this,n)),this.removeEventListener("pointerout",l(this,n))}render(){return h`<slot></slot>`}};n=new WeakMap;d.styles=[c,C];g([m({type:Boolean,reflect:!0})],d.prototype,"dividers",2);d=g([v("gds-list")],d);d.define();var L=Object.getOwnPropertyDescriptor,O=(e,t,s,o)=>{for(var r=o>1?void 0:o?L(t,s):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(r=a(r)||r);return r};let p=class extends b(_){connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return h`<slot></slot>`}};p.styles=c;p=O([v("gds-list-item")],p);p.define();export{p as G};
