import{n as m,g as h,G as y,h as g}from"./gds-element-24e794df.js";import{t as c}from"./tokens.style-6bc9b0c8.js";import{s as p}from"./style-expression-property-6dbce61b.js";import{i as u}from"./lit-element-2a5e401f.js";const v=u`
  :host {
    display: block;
  }

  * {
    margin: unset;
    font-weight: normal;
    font-size: inherit;
    line-height: inherit;
    text-wrap: inherit;
  }

  :host([lines]) {
    * {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: var(--_lines);
    }
  }
`;var d=Object.defineProperty,f=Object.getOwnPropertyDescriptor,r=(e,s,a,i)=>{for(var o=i>1?void 0:i?f(s,a):s,n=e.length-1,l;n>=0;n--)(l=e[n])&&(o=(i?l(s,a,o):l(o))||o);return i&&o&&d(s,a,o),o};let t=class extends y{constructor(){super(...arguments),this.tag="p"}createTag(){const e=document.createElement(this.tag);return e.appendChild(document.createElement("slot")),e}render(){return g`${this.createTag()}`}};t.styles=[c,v];r([m({type:String})],t.prototype,"tag",2);r([p({valueTemplate:e=>`${e}`,styleTemplate:(e,s)=>{const a=s[0];return`font-size: var(--gds-text-size-${a}); line-height: var(--gds-sys-typography-line-height-${a});`}})],t.prototype,"size",2);r([p()],t.prototype,"margin",2);r([p({property:"text-wrap",valueTemplate:e=>e})],t.prototype,"wrap",2);r([p({property:"text-transform",valueTemplate:e=>e})],t.prototype,"transform",2);r([p({property:"max-width",valueTemplate:e=>`${e}ch`})],t.prototype,"length",2);r([p({property:"min-width",valueTemplate:e=>`${e}ch`})],t.prototype,"min",2);r([p({property:"text-align",valueTemplate:e=>e})],t.prototype,"align",2);r([p({property:"--_lines",valueTemplate:e=>e})],t.prototype,"lines",2);t=r([h("gds-text")],t);
