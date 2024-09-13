import{k as c}from"./static-c0094392.js";import{g,G as d}from"./gds-element-86064462.js";import{t as p}from"./tokens.style-b5b8efd2.js";import{s as v}from"./style-expression-property-0e3d4d40.js";import{i as m}from"./lit-element-1d72f0ce.js";const b=m`
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
      background-color: var(--gds-color-l2c-background-information);
      padding-inline: var(--gds-space-xs);
      border-radius: var(--gds-space-2xs);
      block-size: var(--gds-space-l);
      gap: var(--gds-space-2xs);
      inline-size: max-content;
    }
  }
`;var f=Object.defineProperty,y=Object.getOwnPropertyDescriptor,i=(t,o,s,r)=>{for(var e=r>1?void 0:r?y(o,s):o,a=t.length-1,n;a>=0;a--)(n=t[a])&&(e=(r?n(o,s,e):n(e))||e);return r&&e&&f(o,s,e),e};let l=class extends d{render(){return c`<div class="badge">
      <slot name="lead"></slot>
      <slot></slot>
      <slot name="trail"></slot>
    </div>`}};l.styles=[p,b];i([v({valueTemplate:t=>`${t}`,selector:".badge",styleTemplate:(t,o)=>{const s=o[0],e={information:{bg:"information",color:"information"},notice:{bg:"notice",color:"notice"},success:{bg:"positive",color:"positive"},warning:{bg:"warning",color:"warning"},error:{bg:"negative",color:"negative"}}[s]||{bg:"default-bg",color:"default-content"},a=`background-color: var(--gds-color-l3c-background-${e.bg}-secondary);`,n=`color: var(--gds-color-l3c-content-${e.color});`;return`${a} ${n}`}})],l.prototype,"variant",2);l=i([g("gds-badge")],l);
