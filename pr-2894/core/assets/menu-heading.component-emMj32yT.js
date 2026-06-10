import{i as d,z as c,T as i,b as g,g as p}from"./iframe-BAeHdauH.js";const u=d`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-sys-color-content-neutral-02);
      background-color: var(--gds-sys-color-l2-neutral-01);
      border-bottom: 1px solid var(--gds-sys-color-border-subtle-01);
      font: var(--gds-sys-text-detail-s-book);
      padding-inline: var(--gds-sys-space-s);
      padding-block: var(--gds-sys-space-xs);
    }
  }
`;var b=Object.getOwnPropertyDescriptor,y=(r,a,l,n)=>{for(var s=n>1?void 0:n?b(a,l):a,e=r.length-1,o;e>=0;e--)(o=r[e])&&(s=o(s)||s);return s};let t=class extends c{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>i.instance.apply(this,"gds-menu-heading"))}render(){return g`<slot></slot>`}};t.styles=u;t=y([p("gds-menu-heading")],t);export{t as G};
