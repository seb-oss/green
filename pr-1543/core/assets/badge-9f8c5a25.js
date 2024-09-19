import{k as i}from"./static-c0094392.js";import{g as c,G as g}from"./gds-element-86064462.js";import{t as p}from"./tokens.style-dc3ad24e.js";import{s as v}from"./style-expression-property-0e3d4d40.js";import{i as m}from"./lit-element-1d72f0ce.js";const y=m`
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
      // background-color: var(--gds-color-l2-background-information);
      padding-inline: var(--gds-space-xs);
      border-radius: var(--gds-space-2xs);
      block-size: var(--gds-space-l);
      gap: var(--gds-space-2xs);
      inline-size: max-content;
    }
  }
`;var f=Object.defineProperty,b=Object.getOwnPropertyDescriptor,d=(a,s,t,r)=>{for(var e=r>1?void 0:r?b(s,t):s,o=a.length-1,n;o>=0;o--)(n=a[o])&&(e=(r?n(s,t,e):n(e))||e);return r&&e&&f(s,t,e),e};let l=class extends g{render(){return i`<div class="badge">
      <slot name="lead"></slot>
      <slot></slot>
      <slot name="trail"></slot>
    </div>`}};l.styles=[p,y];d([v({valueTemplate:a=>`${a}`,selector:".badge",styleTemplate:(a,s)=>{const t=s[0],r=`background-color: var(--gds-color-l3-background-${t}-secondary);`,e=`color: var(--gds-color-l3-content-${t});`;return`${r} ${e}`}})],l.prototype,"variant",2);l=d([c("gds-badge")],l);
