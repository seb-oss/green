import{i as d,J as i,a4 as c,x as g,g as u}from"./iframe-HNUltHSW.js";const p=d`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-sys-color-content-neutral-02);
      background-color: var(--gds-sys-color-l2-neutral-01);
      border-bottom: 1px solid var(--gds-sys-color-border-subtle-01);
      font: var(--gds-sys-text-detail-book-s);
      padding-inline: var(--gds-sys-space-s);
      padding-block: var(--gds-sys-space-xs);
    }
  }
`;var y=Object.getOwnPropertyDescriptor,b=(r,a,l,n)=>{for(var s=n>1?void 0:n?y(a,l):a,t=r.length-1,o;t>=0;t--)(o=r[t])&&(s=o(s)||s);return s};let e=class extends i{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>c.instance.apply(this,"gds-menu-heading"))}render(){return g`<slot></slot>`}};e.styles=p;e=b([u("gds-menu-heading")],e);e.define();
