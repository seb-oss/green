import{k as c}from"./static-c0094392.js";import{g,G as d}from"./gds-element-86064462.js";import{t as p}from"./tokens.style-dc3ad24e.js";import{s as v}from"./style-expression-property-0e3d4d40.js";import{i as m}from"./lit-element-1d72f0ce.js";const b=m`
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
      background-color: var(--gds-color-l2-background-information);
      padding-inline: var(--gds-space-xs);
      border-radius: var(--gds-space-2xs);
      block-size: var(--gds-space-l);
      gap: var(--gds-space-2xs);
      inline-size: max-content;
    }
  }
`;var f=Object.defineProperty,y=Object.getOwnPropertyDescriptor,i=(o,t,s,r)=>{for(var e=r>1?void 0:r?y(t,s):t,a=o.length-1,n;a>=0;a--)(n=o[a])&&(e=(r?n(t,s,e):n(e))||e);return r&&e&&f(t,s,e),e};let l=class extends d{render(){return c`<div class="badge">
      <slot name="lead"></slot>
      <slot></slot>
      <slot name="trail"></slot>
    </div>`}};l.styles=[p,b];i([v({valueTemplate:o=>`${o}`,selector:".badge",styleTemplate:(o,t)=>{const s=t[0],e={information:{bg:"information",color:"information"},notice:{bg:"notice",color:"notice"},success:{bg:"positive",color:"positive"},warning:{bg:"warning",color:"warning"},negative:{bg:"negative",color:"negative"}}[s]||{bg:"default-bg",color:"default-content"},a=`background-color: var(--gds-color-l3-background-${e.bg}-secondary);`,n=`color: var(--gds-color-l3-content-${e.color});`;return`${a} ${n}`}})],l.prototype,"variant",2);l=i([g("gds-badge")],l);
