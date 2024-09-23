import{n,g as b,G as m,h as p}from"./gds-element-86064462.js";import{t as h}from"./tokens.style-01187a75.js";import{i as f}from"./lit-element-1d72f0ce.js";const g=f`
  @layer badge, shell, tokens, a11y, variants, types;

  @layer badge {
    :host {
      display: contents;
    }
  }
`;var u=Object.defineProperty,c=Object.getOwnPropertyDescriptor,i=(d,s,l,a)=>{for(var e=a>1?void 0:a?c(s,l):s,o=d.length-1,r;o>=0;o--)(r=d[o])&&(e=(a?r(s,l,e):r(e))||e);return a&&e&&u(s,l,e),e};let t=class extends m{constructor(){super(...arguments),this.variant="information",this.size="default",this.disabled=!1}render(){return p`<gds-flex
      level="3"
      background=${this.disabled?"disabled":this.variant+"-badge"}
      color=${this.disabled?"disabled":this.variant}
      gap="2xs"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${this.size==="small"?"2xs":"xs"}"
      border-radius="2xs"
      block-size="${this.size==="small"?"m":"l"}"
      width="max-content"
      font-size="detail-s"
      font-weight="book"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${this.size!=="small"?p`<slot name="lead"></slot>`:""}
      <slot></slot>
      <slot name="trail"></slot>
    </gds-flex>`}};t.styles=[h,g];i([n()],t.prototype,"variant",2);i([n({type:String})],t.prototype,"size",2);i([n({attribute:"disabled",type:Boolean,reflect:!0})],t.prototype,"disabled",2);t=i([b("gds-badge")],t);
