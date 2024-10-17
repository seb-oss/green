import{R as p}from"./class-map-BBGuaYF3.js";import{k as d,t as v}from"./static-C_6dgFWo.js";import{n as h,g as x,G as m}from"./gds-element-RTlSuh_R.js";import{t as f}from"./tokens.style-Dwr4YKnv.js";import{s as o}from"./style-expression-property-Da3P080T.js";import{i as z}from"./lit-element-BoQqPHl6.js";const y=z`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
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
`;var c=Object.defineProperty,w=Object.getOwnPropertyDescriptor,i=(e,s,r,a)=>{for(var n=a>1?void 0:a?w(s,r):s,l=e.length-1,g;l>=0;l--)(g=e[l])&&(n=(a?g(s,r,n):g(n))||n);return a&&n&&c(s,r,n),n};let t=class extends m{constructor(){super(...arguments),this.level="2",this.tag="span"}render(){const e=encodeURI(this.tag),s=v(e),r={"no-size-set":!this["font-size"],"no-weight-set":!this["font-weight"],"lines-set":!!this.lines};return d`<${s} tag class=${p(r)}><slot></slot></${s}>`}};t.styles=[f,y];i([h()],t.prototype,"level",2);i([h({type:String})],t.prototype,"tag",2);i([o({valueTemplate:e=>`${e}`,styleTemplate:(e,s)=>{console.log(s);const r=s[0],a=`font-size: var(--gds-text-size-${r});`,n=`line-height: var(--gds-text-line-height-${r});`;return a+n}})],t.prototype,"font-size",2);i([o({property:"font-weight",selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],t.prototype,"font-weight",2);i([o({property:"margin",valueTemplate:e=>e})],t.prototype,"margin",2);i([o({property:"text-wrap",valueTemplate:e=>e})],t.prototype,"text-wrap",2);i([o({property:"text-transform",valueTemplate:e=>e})],t.prototype,"text-transform",2);i([o({property:"max-width",valueTemplate:e=>`${e}ch`})],t.prototype,"max-width",2);i([o({property:"min-width",valueTemplate:e=>`${e}ch`})],t.prototype,"min-width",2);i([o({property:"text-align",valueTemplate:e=>e})],t.prototype,"text-align",2);i([o({property:"--_lines",valueTemplate:e=>e})],t.prototype,"lines",2);i([o({property:"color",valueTemplate:function(e){const[s,r]=e.split("/");return r?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-content-${s}) ${parseFloat(r)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-content-${s})`}})],t.prototype,"color",2);t=i([x("gds-text")],t);
