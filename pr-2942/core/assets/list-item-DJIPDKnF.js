import{i as a,v as c,n as m,h as p,g as u,H as f,z as h}from"./iframe-DzFVIyCe.js";import{G as b}from"./flex.component-DkXZb1a9.js";const g=a`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
  }

  :host([divider]) {
    --_in-divider-list: 1;
    gap: 0;
  }

  :host([divider]) ::slotted(*:not(:last-child)) {
    border-bottom: 1px solid var(--gds-sys-color-border-neutral-03);
    border-radius: 0;
  }
`;var y=Object.defineProperty,_=Object.getOwnPropertyDescriptor,v=(o,t,i,s)=>{for(var e=s>1?void 0:s?_(t,i):t,r=o.length-1,l;r>=0;r--)(l=o[r])&&(e=(s?l(t,i,e):l(e))||e);return s&&e&&y(t,i,e),e};let n=class extends b{constructor(){super(...arguments),this.divider=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","list")}render(){return p`<slot></slot>`}};n.styles=[c,g];v([m({type:Boolean,reflect:!0})],n.prototype,"divider",2);n=v([u("gds-list")],n);n.define();const C=a`
  :host {
  }

  slot:not([name]) {
  }
`;var x=Object.getOwnPropertyDescriptor,O=(o,t,i,s)=>{for(var e=s>1?void 0:s?x(t,i):t,r=o.length-1,l;r>=0;r--)(l=o[r])&&(e=l(e)||e);return e};let d=class extends f(h){connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return p`<slot></slot>`}};d.styles=[c,C];d=O([u("gds-list-item")],d);d.define();export{d as G};
