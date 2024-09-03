import{i as h,n as p}from"./static-ecb8bd0e.js";import{n as d,g as v,G as x}from"./gds-element-54cd6e2a.js";import{t as m}from"./tokens.style-aacfe7e1.js";import{s as i}from"./style-expression-property-89161d08.js";import{i as y}from"./lit-element-71e04f06.js";const c=y`
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
      font-weight: var(--gds-text-weight-bold);
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
`;var f=Object.defineProperty,w=Object.getOwnPropertyDescriptor,r=(e,s,o,g)=>{for(var a=g>1?void 0:g?w(s,o):s,n=e.length-1,l;n>=0;n--)(l=e[n])&&(a=(g?l(s,o,a):l(a))||a);return g&&a&&f(s,o,a),a};let t=class extends x{constructor(){super(...arguments),this.tag="p"}render(){const e=h(this.tag);return p`<${e} tag><slot></slot></${e}>`}};t.styles=[m,c];r([d({type:String})],t.prototype,"tag",2);r([i({valueTemplate:e=>`${e}`,selector:"[tag]",styleTemplate:(e,s)=>{const o=s[0],g=`font-size: var(--gds-text-size-${o});`,a=`line-height: var(--gds-text-line-height-${o});`;return g+a}})],t.prototype,"size",2);r([i({property:"font-weight",selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],t.prototype,"weight",2);r([i({property:"margin",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"margin",2);r([i({property:"text-wrap",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"wrap",2);r([i({property:"text-transform",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"transform",2);r([i({property:"max-width",selector:"[tag]",valueTemplate:e=>`${e}ch`})],t.prototype,"length",2);r([i({property:"min-width",selector:"[tag]",valueTemplate:e=>`${e}ch`})],t.prototype,"min",2);r([i({property:"text-align",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"align",2);r([i({property:"--_lines",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"lines",2);r([i({property:"color",selector:"[tag]",valueTemplate:e=>{const[s,o]=e.split("/");return o?`color-mix(in srgb, var(--gds-sys-color-${s}) ${parseFloat(o)*100}%, transparent 0%)`:`var(--gds-sys-color-${s})`}})],t.prototype,"color",2);t=r([v("gds-text")],t);
