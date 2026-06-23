import{i as n,v as c,n as h,h as p,g as v,H as m,z as f}from"./iframe-DIuetfR5.js";import{G as b}from"./flex.component-DJxDbP2P.js";const g=n`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
  }

  :host([divider]) {
    gap: 0;
  }

  :host([divider]) ::slotted(*:not(:last-child)) {
    border-bottom: 1px solid var(--gds-sys-color-border-neutral-03);
    border-radius: 0;
  }

  :host([divider]) ::slotted(*[href]:not(:last-child)) {
    padding-bottom: var(--gds-sys-space-s);
  }
`;var y=Object.defineProperty,_=Object.getOwnPropertyDescriptor,u=(o,t,d,s)=>{for(var e=s>1?void 0:s?_(t,d):t,r=o.length-1,l;r>=0;r--)(l=o[r])&&(e=(s?l(t,d,e):l(e))||e);return s&&e&&y(t,d,e),e};let a=class extends b{constructor(){super(...arguments),this.divider=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","list")}render(){return p`<slot></slot>`}};a.styles=[c,g];u([h({type:Boolean,reflect:!0})],a.prototype,"divider",2);a=u([v("gds-list")],a);a.define();const C=n`
  :host {
  }

  slot:not([name]) {
  }
`;var x=Object.getOwnPropertyDescriptor,O=(o,t,d,s)=>{for(var e=s>1?void 0:s?x(t,d):t,r=o.length-1,l;r>=0;r--)(l=o[r])&&(e=l(e)||e);return e};let i=class extends m(f){connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return p`<slot></slot>`}};i.styles=[c,C];i=O([v("gds-list-item")],i);i.define();export{i as G};
