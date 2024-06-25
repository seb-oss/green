import{i as m}from"./lit-element-2a5e401f.js";import{n as h,g as y,G as g,h as c}from"./gds-element-24e794df.js";import{t as u}from"./tokens.style-6bc9b0c8.js";import{s as i}from"./style-expression-property-6dbce61b.js";const d=m`
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
`;var v=Object.defineProperty,f=Object.getOwnPropertyDescriptor,r=(e,p,o,a)=>{for(var s=a>1?void 0:a?f(p,o):p,n=e.length-1,l;n>=0;n--)(l=e[n])&&(s=(a?l(p,o,s):l(s))||s);return a&&s&&v(p,o,s),s};let t=class extends g{constructor(){super(...arguments),this.tag="p"}createTag(){const e=document.createElement(this.tag);return e.classList.add("truncate"),e.appendChild(document.createElement("slot")),this.lines&&(e.style.webkitLineClamp=`${this.lines}`),e}render(){return c`${this.createTag()}`}};t.styles=[u,d,m`
      .truncate {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `];r([h({type:String})],t.prototype,"tag",2);r([i({valueTemplate:e=>`${e}`,styleTemplate:(e,p)=>{const o=p[0];return`font-size: var(--gds-text-size-${o}); line-height: var(--gds-sys-typography-line-height-${o});`}})],t.prototype,"size",2);r([i()],t.prototype,"margin",2);r([i({property:"text-wrap",valueTemplate:e=>e})],t.prototype,"wrap",2);r([i({property:"max-width",valueTemplate:e=>`${e}ch`})],t.prototype,"length",2);r([i({property:"min-width",valueTemplate:e=>`${e}ch`})],t.prototype,"min",2);r([i({property:"text-align",valueTemplate:e=>e})],t.prototype,"align",2);r([h({type:Number})],t.prototype,"lines",2);t=r([y("gds-text")],t);
