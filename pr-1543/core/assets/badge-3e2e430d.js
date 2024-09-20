import{n as d,g,G as p,h as c}from"./gds-element-86064462.js";import{t as v}from"./tokens.style-01187a75.js";import{s as m}from"./style-expression-property-0e3d4d40.js";import{i as y}from"./lit-element-1d72f0ce.js";const f=y`
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
`;var u=Object.defineProperty,b=Object.getOwnPropertyDescriptor,i=(t,e,s,a)=>{for(var r=a>1?void 0:a?b(e,s):e,l=t.length-1,n;l>=0;l--)(n=t[l])&&(r=(a?n(e,s,r):n(r))||r);return a&&r&&u(e,s,r),r};let o=class extends p{constructor(){super(...arguments),this.level="l3",this.variant="information"}generateColorStyles(t,e){const s=`background-color: var(--gds-color-${t}-background-${e}-badge);`,a=`color: var(--gds-color-${t}-content-${e});`;return`${s} ${a}`}render(){return c`<div class="badge">
      <slot name="lead"></slot>
      <slot></slot>
      <slot name="trail"></slot>
    </div>`}};o.styles=[v,f];i([d({type:String})],o.prototype,"level",2);i([m({valueTemplate:t=>`${t}`,selector:".badge",styleTemplate:function(t,e){const s=e[0];return this.generateColorStyles(this.level,s)}})],o.prototype,"variant",2);o=i([g("gds-badge")],o);
