import{k as d}from"./static-c0094392.js";import{n as c,g,G as p}from"./gds-element-86064462.js";import{t as v}from"./tokens.style-dc3ad24e.js";import{s as m}from"./style-expression-property-0e3d4d40.js";import{i as y}from"./lit-element-1d72f0ce.js";const u=y`
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
`;var f=Object.defineProperty,b=Object.getOwnPropertyDescriptor,i=(s,e,t,o)=>{for(var r=o>1?void 0:o?b(e,t):e,l=s.length-1,n;l>=0;l--)(n=s[l])&&(r=(o?n(e,t,r):n(r))||r);return o&&r&&f(e,t,r),r};let a=class extends p{constructor(){super(...arguments),this.level="l3"}generateColorStyles(s,e){const t=`background-color: var(--gds-color-${s}-background-${e}-secondary);`,o=`color: var(--gds-color-${s}-content-${e});`;return`${t} ${o}`}render(){return d`<div class="badge">
      <slot name="lead"></slot>
      <slot></slot>
      <slot name="trail"></slot>
    </div>`}};a.styles=[v,u];i([c({type:String})],a.prototype,"level",2);i([m({valueTemplate:s=>`${s}`,selector:".badge",styleTemplate:function(s,e){const t=e[0];return this.generateColorStyles(this.level,t)}})],a.prototype,"variant",2);a=i([g("gds-badge")],a);
