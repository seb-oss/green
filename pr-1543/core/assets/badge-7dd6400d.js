import{n as d,g,G as p,h as c}from"./gds-element-86064462.js";import{t as v}from"./tokens.style-01187a75.js";import{i as m}from"./lit-element-1d72f0ce.js";const f=m`
  @layer badge, shell, tokens, a11y, variants, types;

  @layer badge {
    :host {
      display: contents;
    }

    .badge {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
      padding-inline: var(--gds-space-xs);
      border-radius: var(--gds-space-2xs);
      block-size: var(--gds-space-l);
      gap: var(--gds-space-2xs);
      inline-size: max-content;
    }
  }
`;var h=Object.defineProperty,b=Object.getOwnPropertyDescriptor,o=(i,s,r,t)=>{for(var e=t>1?void 0:t?b(s,r):s,l=i.length-1,n;l>=0;l--)(n=i[l])&&(e=(t?n(s,r,e):n(e))||e);return t&&e&&h(s,r,e),e};let a=class extends p{constructor(){super(...arguments),this.variant="information"}render(){return c`<gds-flex
      level="3"
      background=${this.variant+"-badge"}
      color=${this.variant}
      class="badge"
    >
      <slot name="lead"></slot>
      <slot></slot>
      <slot name="trail"></slot>
    </gds-flex>`}};a.styles=[v,f];o([d()],a.prototype,"variant",2);a=o([g("gds-badge")],a);
