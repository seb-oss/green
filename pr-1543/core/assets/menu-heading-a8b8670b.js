import{i as o,k as d}from"./lit-element-1d72f0ce.js";import{g as c,G as p}from"./gds-element-86064462.js";import{T as m}from"./transitional-styles-8ea9588a.js";const g=o`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-sys-color-primary-text);
      background-color: var(--gds-sys-color-container-container-dim1);
      font-size: var(--gds-text-size-label-input-medium);
      line-height: var(--gds-text-line-height-label-input-medium);
      padding-inline: var(--gds-space-m);
      padding-block: var(--gds-space-xs);
    }
  }
`;var u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,v=(l,s,r,t)=>{for(var e=t>1?void 0:t?h(s,r):s,n=l.length-1,a;n>=0;n--)(a=l[n])&&(e=(t?a(s,r,e):a(e))||e);return t&&e&&u(s,r,e),e};let i=class extends p{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>m.instance.apply(this,"gds-menu-heading"))}render(){return d`<slot></slot>`}};i.styles=g;i=v([c("gds-menu-heading")],i);
