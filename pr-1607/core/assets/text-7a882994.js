import{R as h}from"./class-map-f04c1558.js";import{k as p,t as d}from"./static-c0094392.js";import{n as v,g as x,G as m}from"./gds-element-86064462.js";import{t as c}from"./tokens.style-b5b8efd2.js";import{s as o}from"./style-expression-property-cbf85b4b.js";import{i as z}from"./lit-element-1d72f0ce.js";const f=z`
  :host {
    display: contents;
  }

  * {
    margin: unset;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    text-wrap: inherit;
  }

  h1.no-size-set {
    font-size: var(--gds-text-size-heading-xl);
    line-height: var(--gds-text-line-height-heading-xl);
    font-weight: var(--gds-text-weight-regular);
  }

  h2.no-size-set {
    font-size: var(--gds-text-size-heading-l);
    line-height: var(--gds-text-line-height-heading-l);
    font-weight: var(--gds-text-weight-regular);
  }

  h3.no-size-set {
    font-size: var(--gds-text-size-heading-m);
    line-height: var(--gds-text-line-height-heading-m);
    font-weight: var(--gds-text-weight-regular);
  }

  h4.no-size-set {
    font-size: var(--gds-text-size-heading-s);
    line-height: var(--gds-text-line-height-heading-s);
    font-weight: var(--gds-text-weight-regular);
  }

  h5.no-size-set {
    font-size: var(--gds-text-size-heading-xs);
    line-height: var(--gds-text-line-height-heading-xs);
    font-weight: var(--gds-text-weight-regular);
  }

  h6.no-size-set {
    font-size: var(--gds-text-size-heading-2xs);
    line-height: var(--gds-text-line-height-heading-2xs);
    font-weight: var(--gds-text-weight-regular);
  }

  p.no-size-set,
  span.no-size-set,
  em.no-size-set,
  strong.no-size-set,
  mark.no-size-set {
    font-size: var(--gds-text-size-body-m);
    line-height: var(--gds-text-line-height-body-m);
  }

  small.no-size-set {
    font-size: var(--gds-text-size-detail-xs);
    line-height: var(--gds-text-line-height-detail-xs);
  }

  strong.no-weight-set {
    font-weight: var(--gds-text-weight-book);
  }

  .lines-set {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: var(--_lines);
  }
`;var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,i=(e,s,r,a)=>{for(var n=a>1?void 0:a?w(s,r):s,g=e.length-1,l;g>=0;g--)(l=e[g])&&(n=(a?l(s,r,n):l(n))||n);return a&&n&&y(s,r,n),n};let t=class extends m{constructor(){super(...arguments),this.tag="span"}render(){const e=encodeURI(this.tag),s=d(e),r={"no-size-set":!this.size,"no-weight-set":!this.weight,"lines-set":!!this.lines};return p`<${s} tag class=${h(r)}><slot></slot></${s}>`}};t.styles=[c,f];i([v({type:String})],t.prototype,"tag",2);i([o({valueTemplate:e=>`${e}`,selector:"[tag]",styleTemplate:(e,s)=>{const r=s[0],a=`font-size: var(--gds-text-size-${r});`,n=`line-height: var(--gds-text-line-height-${r});`;return a+n}})],t.prototype,"size",2);i([o({property:"font-weight",selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],t.prototype,"weight",2);i([o({property:"margin",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"margin",2);i([o({property:"text-wrap",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"wrap",2);i([o({property:"text-transform",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"transform",2);i([o({property:"max-width",selector:"[tag]",valueTemplate:e=>`${e}ch`})],t.prototype,"length",2);i([o({property:"min-width",selector:"[tag]",valueTemplate:e=>`${e}ch`})],t.prototype,"min",2);i([o({property:"text-align",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"align",2);i([o({property:"--_lines",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"lines",2);i([o({property:"color",selector:"[tag]",valueTemplate:e=>{const[s,r]=e.split("/");return r?`color-mix(in srgb, var(--gds-color-${s}) ${parseFloat(r)*100}%, transparent 0%)`:`var(--gds-color-${s})`}})],t.prototype,"color",2);t=i([x("gds-text")],t);
