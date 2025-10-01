import{i as d,x as i}from"./lit-element-Bx14lxc-.js";import{G as c,g as p}from"./gds-element-DTROifYq.js";import{T as g}from"./transitional-styles-BfqUw7Aj.js";const u=d`
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
`;var b=Object.defineProperty,m=Object.getOwnPropertyDescriptor,y=(l,e,o,t)=>{for(var s=t>1?void 0:t?m(e,o):e,n=l.length-1,a;n>=0;n--)(a=l[n])&&(s=(t?a(e,o,s):a(s))||s);return t&&s&&b(e,o,s),s};let r=class extends c{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>g.instance.apply(this,"gds-menu-heading"))}render(){return i`<slot></slot>`}};r.styles=u;r=y([p("gds-menu-heading")],r);r.define();
