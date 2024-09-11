import{n as h,i as p}from"./static-50b4adfb.js";import{n as d,g as v,G as x}from"./gds-element-90c5f05b.js";import{t as m}from"./tokens.style-681e2422.js";import{s}from"./style-expression-property-5a4dd319.js";import{i as c}from"./lit-element-2a5e401f.js";const f=c`
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

  :host(:not([size])) {
    h1 {
      font-size: var(--gds-text-size-heading-xl);
      line-height: var(--gds-text-line-height-heading-xl);
      font-weight: var(--gds-text-weight-regular);
    }

    h2 {
      font-size: var(--gds-text-size-heading-l);
      line-height: var(--gds-text-line-height-heading-l);
      font-weight: var(--gds-text-weight-regular);
    }

    h3 {
      font-size: var(--gds-text-size-heading-m);
      line-height: var(--gds-text-line-height-heading-m);
      font-weight: var(--gds-text-weight-regular);
    }

    h4 {
      font-size: var(--gds-text-size-heading-s);
      line-height: var(--gds-text-line-height-heading-s);
      font-weight: var(--gds-text-weight-regular);
    }

    h5 {
      font-size: var(--gds-text-size-heading-xs);
      line-height: var(--gds-text-line-height-heading-xs);
      font-weight: var(--gds-text-weight-regular);
    }

    h6 {
      font-size: var(--gds-text-size-heading-2xs);
      line-height: var(--gds-text-line-height-heading-2xs);
      font-weight: var(--gds-text-weight-regular);
    }

    p,
    span,
    em,
    strong,
    mark {
      font-size: var(--gds-text-size-body-m);
      line-height: var(--gds-text-line-height-body-m);
    }

    small {
      font-size: var(--gds-text-size-detail-xs);
      line-height: var(--gds-text-line-height-detail-xs);
    }
  }

  :host(:not([weight])) {
    strong {
      font-weight: var(--gds-text-weight-book);
    }
  }

  :host([lines]) {
    * {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: var(--_lines);
    }
  }
`;var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,i=(e,r,o,g)=>{for(var a=g>1?void 0:g?w(r,o):r,n=e.length-1,l;n>=0;n--)(l=e[n])&&(a=(g?l(r,o,a):l(a))||a);return g&&a&&y(r,o,a),a};let t=class extends x{constructor(){super(...arguments),this.tag="span"}render(){const e=encodeURI(this.tag),r=p(e);return h`<${r} tag><slot></slot></${r}>`}};t.styles=[m,f];i([d({type:String})],t.prototype,"tag",2);i([s({valueTemplate:e=>`${e}`,selector:"[tag]",styleTemplate:(e,r)=>{const o=r[0],g=`font-size: var(--gds-text-size-${o});`,a=`line-height: var(--gds-text-line-height-${o});`;return g+a}})],t.prototype,"size",2);i([s({property:"font-weight",selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],t.prototype,"weight",2);i([s({property:"margin",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"margin",2);i([s({property:"text-wrap",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"wrap",2);i([s({property:"text-transform",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"transform",2);i([s({property:"max-width",selector:"[tag]",valueTemplate:e=>`${e}ch`})],t.prototype,"length",2);i([s({property:"min-width",selector:"[tag]",valueTemplate:e=>`${e}ch`})],t.prototype,"min",2);i([s({property:"text-align",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"align",2);i([s({property:"--_lines",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"lines",2);i([s({property:"color",selector:"[tag]",valueTemplate:e=>{const[r,o]=e.split("/");return o?`color-mix(in srgb, var(--gds-color-${r}) ${parseFloat(o)*100}%, transparent 0%)`:`var(--gds-color-${r})`}})],t.prototype,"color",2);t=i([v("gds-text")],t);
