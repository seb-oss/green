import{i,x as d}from"./lit-element-Bx14lxc-.js";import{G as c,g as p}from"./custom-element-scoping-D6CCRyY9.js";import{T as g}from"./transitional-styles-BOpNQOm4.js";const u=i`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-color-l3-content-secondary);
      background-color: var(--gds-color-l3-background-secondary);
      font-size: var(--gds-text-size-label-input-medium);
      line-height: var(--gds-text-line-height-label-input-medium);
      padding-inline: var(--gds-space-m);
      padding-block: var(--gds-space-xs);
    }
  }
`;var m=Object.defineProperty,b=Object.getOwnPropertyDescriptor,h=(o,s,n,t)=>{for(var e=t>1?void 0:t?b(s,n):s,a=o.length-1,l;a>=0;a--)(l=o[a])&&(e=(t?l(s,n,e):l(e))||e);return t&&e&&m(s,n,e),e};let r=class extends c{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>g.instance.apply(this,"gds-menu-heading"))}render(){return d`<slot></slot>`}};r.styles=u;r=h([p("gds-menu-heading")],r);r.define();
