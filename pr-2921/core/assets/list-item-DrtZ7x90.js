import{i as u,v as n,n as f,h as c,g as p,H as h,z as m}from"./iframe-D12PU7C-.js";import{G as b}from"./flex.component-DPXlP2QX.js";const g=u`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
  }

  :host([dividers]) {
    gap: 0;
  }

  :host([dividers]) ::slotted(*:not(:last-child)) {
    border-bottom: 1px solid var(--gds-sys-color-border-neutral-03);
    border-radius: 0;
  }

  :host([dividers]) ::slotted([href]) {
    padding: var(--gds-sys-space-s) 0;
  }
`;var y=Object.defineProperty,_=Object.getOwnPropertyDescriptor,v=(o,s,d,t)=>{for(var e=t>1?void 0:t?_(s,d):s,r=o.length-1,l;r>=0;r--)(l=o[r])&&(e=(t?l(s,d,e):l(e))||e);return t&&e&&y(s,d,e),e};let a=class extends b{constructor(){super(...arguments),this.dividers=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","list")}render(){return c`<slot></slot>`}};a.styles=[n,g];v([f({type:Boolean,reflect:!0})],a.prototype,"dividers",2);a=v([p("gds-list")],a);a.define();var C=Object.getOwnPropertyDescriptor,x=(o,s,d,t)=>{for(var e=t>1?void 0:t?C(s,d):s,r=o.length-1,l;r>=0;r--)(l=o[r])&&(e=l(e)||e);return e};let i=class extends h(m){connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return c`<slot></slot>`}};i.styles=n;i=x([p("gds-list-item")],i);i.define();export{i as G};
