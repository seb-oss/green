import{i as m}from"./lit-element-2a5e401f.js";import{n as h,g as y,G as g,h as c}from"./gds-element-24e794df.js";import{t as d}from"./tokens.style-6bc9b0c8.js";import{s as p}from"./style-expression-property-6dbce61b.js";const u=m`
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
`;var v=Object.defineProperty,w=Object.getOwnPropertyDescriptor,r=(e,i,s,a)=>{for(var o=a>1?void 0:a?w(i,s):i,n=e.length-1,l;n>=0;n--)(l=e[n])&&(o=(a?l(i,s,o):l(o))||o);return a&&o&&v(i,s,o),o};let t=class extends g{constructor(){super(...arguments),this.tag="p"}createTag(){const e=document.createElement(this.tag);return e.appendChild(document.createElement("slot")),e}render(){return c`${this.createTag()}`}};t.styles=[d,u,m`
      // .truncate {
      //   display: -webkit-box;
      //   -webkit-box-orient: vertical;
      //   overflow: hidden;
      // }
    `];r([h({type:String})],t.prototype,"tag",2);r([p({valueTemplate:e=>`${e}`,styleTemplate:(e,i)=>{const s=i[0];return`font-size: var(--gds-text-size-${s}); line-height: var(--gds-sys-typography-line-height-${s});`}})],t.prototype,"size",2);r([p()],t.prototype,"margin",2);r([p({property:"text-wrap",valueTemplate:e=>e})],t.prototype,"wrap",2);r([p({property:"max-width",valueTemplate:e=>`${e}ch`})],t.prototype,"length",2);r([p({property:"min-width",valueTemplate:e=>`${e}ch`})],t.prototype,"min",2);r([p({property:"text-align",valueTemplate:e=>e})],t.prototype,"align",2);r([p({property:"--_lines",valueTemplate:e=>e})],t.prototype,"lines",2);t=r([y("gds-text")],t);
