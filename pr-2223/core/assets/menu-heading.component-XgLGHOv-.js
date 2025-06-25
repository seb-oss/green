import{i,x as d}from"./lit-element-Bx14lxc-.js";import{G as c,g as p}from"./gds-element-DKcDvDP5.js";import{T as g}from"./transitional-styles-rRd_qHFH.js";const u=i`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-sys-color-content-02);
      background-color: var(--gds-sys-color-l3-02);
      font: var(--gds-sys-text-label-input-medium);
      padding-inline: var(--gds-sys-space-s);
      padding-block: var(--gds-sys-space-xs);
    }
  }
`;var m=Object.defineProperty,y=Object.getOwnPropertyDescriptor,v=(l,e,r,t)=>{for(var s=t>1?void 0:t?y(e,r):e,n=l.length-1,a;n>=0;n--)(a=l[n])&&(s=(t?a(e,r,s):a(s))||s);return t&&s&&m(e,r,s),s};let o=class extends c{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>g.instance.apply(this,"gds-menu-heading"))}render(){return d`<slot></slot>`}};o.styles=u;o=v([p("gds-menu-heading")],o);export{o as G};
