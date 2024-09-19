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
`;var f=Object.defineProperty,b=Object.getOwnPropertyDescriptor,d=(a,t,r,s)=>{for(var e=s>1?void 0:s?b(t,r):t,o=a.length-1,l;o>=0;o--)(l=a[o])&&(e=(s?l(t,r,e):l(e))||e);return s&&e&&f(t,r,e),e};let n=class extends g{render(){return i`<div class="badge">
      <slot name="lead"></slot>
      <slot></slot>
      <slot name="trail"></slot>
    </div>`}};n.styles=[p,y];d([v({valueTemplate:a=>`${a}`,selector:".badge",styleTemplate:(a,t)=>{const r="l3",s=t[0],e=`background-color: var(--gds-color-${r}-background-${s}-secondary);`,o=`color: var(--gds-color-${r}-content-${s});`;return`${e} ${o}`}})],n.prototype,"variant",2);n=d([c("gds-badge")],n);
