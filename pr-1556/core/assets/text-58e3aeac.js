import{k as h,t as p}from"./static-c0094392.js";import{n as d,g as v,G as x}from"./gds-element-d791ed3d.js";import{t as m}from"./tokens.style-711a3a94.js";import{s as i}from"./style-expression-property-731c6e0d.js";import{i as c}from"./lit-element-1d72f0ce.js";const y=c`
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
`;var f=Object.defineProperty,w=Object.getOwnPropertyDescriptor,s=(e,r,o,g)=>{for(var a=g>1?void 0:g?w(r,o):r,n=e.length-1,l;n>=0;n--)(l=e[n])&&(a=(g?l(r,o,a):l(a))||a);return g&&a&&f(r,o,a),a};let t=class extends x{constructor(){super(...arguments),this.tag="span"}render(){const e=encodeURI(this.tag),r=p(e);return h`<${r} tag><slot></slot></${r}>`}};t.styles=[m,y];s([d({type:String})],t.prototype,"tag",2);s([i({valueTemplate:e=>`${e}`,selector:"[tag]",styleTemplate:(e,r)=>{const o=r[0],g=`font-size: var(--gds-text-size-${o});`,a=`line-height: var(--gds-text-line-height-${o});`;return g+a}})],t.prototype,"size",2);s([i({property:"font-weight",selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],t.prototype,"weight",2);s([i({property:"margin",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"margin",2);s([i({property:"text-wrap",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"wrap",2);s([i({property:"text-transform",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"transform",2);s([i({property:"max-width",selector:"[tag]",valueTemplate:e=>`${e}ch`})],t.prototype,"length",2);s([i({property:"min-width",selector:"[tag]",valueTemplate:e=>`${e}ch`})],t.prototype,"min",2);s([i({property:"text-align",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"align",2);s([i({property:"--_lines",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"lines",2);s([i({property:"color",selector:"[tag]",valueTemplate:e=>{const[r,o]=e.split("/");return o?`color-mix(in srgb, var(--gds-sys-color-${r}) ${parseFloat(o)*100}%, transparent 0%)`:`var(--gds-sys-color-${r})`}})],t.prototype,"color",2);t=s([v("gds-text")],t);
