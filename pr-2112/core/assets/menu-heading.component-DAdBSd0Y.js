import{i,x as d}from"./lit-element-Bx14lxc-.js";import{G as c,g as p}from"./custom-element-scoping-b4c89-hi.js";import{T as g}from"./transitional-styles-DZvN5yHb.js";const u=i`
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
`;var m=Object.defineProperty,b=Object.getOwnPropertyDescriptor,h=(o,s,r,t)=>{for(var e=t>1?void 0:t?b(s,r):s,n=o.length-1,a;n>=0;n--)(a=o[n])&&(e=(t?a(s,r,e):a(e))||e);return t&&e&&m(s,r,e),e};let l=class extends c{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>g.instance.apply(this,"gds-menu-heading"))}render(){return d`<slot></slot>`}};l.styles=u;l=h([p("gds-menu-heading")],l);export{l as G};
