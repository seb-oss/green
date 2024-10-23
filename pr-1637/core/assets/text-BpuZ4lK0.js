import{e as p}from"./class-map-Bz98xO8-.js";import{u as d,s as v}from"./static-_ukc2i0J.js";import{n as h,g as x,G as m}from"./gds-element-DjAhZX8m.js";import{t as f}from"./tokens.style-B_4vLAFn.js";import{s as o}from"./style-expression-property-aSqd3nq4.js";import{i as z}from"./lit-element-C_s9q329.js";const y=z`
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
`;var c=Object.defineProperty,w=Object.getOwnPropertyDescriptor,s=(e,i,r,a)=>{for(var n=a>1?void 0:a?w(i,r):i,l=e.length-1,g;l>=0;l--)(g=e[l])&&(n=(a?g(i,r,n):g(n))||n);return a&&n&&c(i,r,n),n};let t=class extends m{constructor(){super(...arguments),this.level="2",this.tag="span"}render(){const e=encodeURI(this.tag),i=v(e),r={"no-size-set":!this["font-size"],"no-weight-set":!this["font-weight"],"lines-set":!!this.lines};return d`<${i} tag class=${p(r)}><slot></slot></${i}>`}};t.styles=[f,y];s([h()],t.prototype,"level",2);s([h({type:String})],t.prototype,"tag",2);s([o({valueTemplate:e=>`${e}`,selector:"[tag]",styleTemplate:(e,i)=>{const r=i[0],a=`font-size: var(--gds-text-size-${r});`,n=`line-height: var(--gds-text-line-height-${r});`;return a+n}})],t.prototype,"font-size",2);s([o({property:"font-weight",selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],t.prototype,"font-weight",2);s([o({property:"margin",valueTemplate:e=>e})],t.prototype,"margin",2);s([o({property:"text-wrap",valueTemplate:e=>e})],t.prototype,"text-wrap",2);s([o({property:"text-transform",valueTemplate:e=>e})],t.prototype,"text-transform",2);s([o({property:"max-width",valueTemplate:e=>`${e}ch`})],t.prototype,"max-width",2);s([o({property:"min-width",valueTemplate:e=>`${e}ch`})],t.prototype,"min-width",2);s([o({property:"text-align",valueTemplate:e=>e})],t.prototype,"text-align",2);s([o({property:"--_lines",valueTemplate:e=>e})],t.prototype,"lines",2);s([o({property:"color",valueTemplate:function(e){const[i,r]=e.split("/");return r?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-content-${i}) ${parseFloat(r)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-content-${i})`}})],t.prototype,"color",2);t=s([x("gds-text")],t);