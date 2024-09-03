import{i as g,n as h}from"./static-ecb8bd0e.js";import{n as d,g as m,G as v}from"./gds-element-54cd6e2a.js";import{t as x}from"./tokens.style-aacfe7e1.js";import{s}from"./style-expression-property-89161d08.js";import{i as y}from"./lit-element-71e04f06.js";const c=y`
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
    }

    h2 {
      font-size: var(--gds-text-size-heading-l);
      line-height: var(--gds-text-line-height-heading-l);
    }

    h3 {
      font-size: var(--gds-text-size-heading-m);
      line-height: var(--gds-text-line-height-heading-m);
    }

    h4 {
      font-size: var(--gds-text-size-heading-s);
      line-height: var(--gds-text-line-height-heading-s);
    }

    h5 {
      font-size: var(--gds-text-size-heading-xs);
      line-height: var(--gds-text-line-height-heading-xs);
    }

    h6 {
      font-size: var(--gds-text-size-heading-2xs);
      line-height: var(--gds-text-line-height-heading-2xs);
    }

    p {
      font-size: var(--gds-text-size-body-m);
      line-height: var(--gds-text-line-height-body-m);
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
`;var f=Object.defineProperty,u=Object.getOwnPropertyDescriptor,r=(e,i,o,n)=>{for(var a=n>1?void 0:n?u(i,o):i,l=e.length-1,p;l>=0;l--)(p=e[l])&&(a=(n?p(i,o,a):p(a))||a);return n&&a&&f(i,o,a),a};let t=class extends v{constructor(){super(...arguments),this.tag="p"}render(){const e=g(this.tag);return h`<${e} tag><slot></slot></${e}>`}};t.styles=[x,c];r([d({type:String})],t.prototype,"tag",2);r([s({valueTemplate:e=>`${e}`,selector:"[tag]",styleTemplate:(e,i)=>{const o=i[0],n=`font-size: var(--gds-text-size-${o});`,a=`line-height: var(--gds-text-line-height-${o});`;return n+a}})],t.prototype,"size",2);r([s({property:"font-weight",selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],t.prototype,"weight",2);r([s({property:"margin",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"margin",2);r([s({property:"text-wrap",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"wrap",2);r([s({property:"text-transform",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"transform",2);r([s({property:"max-width",selector:"[tag]",valueTemplate:e=>`${e}ch`})],t.prototype,"length",2);r([s({property:"min-width",selector:"[tag]",valueTemplate:e=>`${e}ch`})],t.prototype,"min",2);r([s({property:"text-align",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"align",2);r([s({property:"--_lines",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"lines",2);r([s({property:"color",selector:"[tag]",valueTemplate:e=>{const[i,o]=e.split("/");return o?`color-mix(in srgb, var(--gds-sys-color-${i}) ${parseFloat(o)*100}%, transparent 0%)`:`var(--gds-sys-color-${i})`}})],t.prototype,"color",2);t=r([m("gds-text")],t);
