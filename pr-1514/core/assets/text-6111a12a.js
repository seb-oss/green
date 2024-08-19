import{n as m,g as y,G as c,h as g}from"./gds-element-54cd6e2a.js";import{s}from"./style-expression-property-89161d08.js";import{i as h}from"./lit-element-71e04f06.js";const u=h`
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
`;var v=Object.defineProperty,d=Object.getOwnPropertyDescriptor,r=(e,o,p,l)=>{for(var a=l>1?void 0:l?d(o,p):o,n=e.length-1,i;n>=0;n--)(i=e[n])&&(a=(l?i(o,p,a):i(a))||a);return l&&a&&v(o,p,a),a};let t=class extends c{constructor(){super(...arguments),this.tag="p"}createTag(){const e=document.createElement(this.tag);return e.appendChild(document.createElement("slot")),e}render(){return g`${this.createTag()}`}};t.styles=[u];r([m({type:String})],t.prototype,"tag",2);r([s({valueTemplate:e=>`${e}`,styleTemplate:(e,o)=>{const p=o[0];return`font-size: var(--gds-text-size-${p}); line-height: var(--gds-text-line-height-${p});`}})],t.prototype,"size",2);r([s()],t.prototype,"margin",2);r([s({property:"text-wrap",valueTemplate:e=>e})],t.prototype,"wrap",2);r([s({property:"text-transform",valueTemplate:e=>e})],t.prototype,"transform",2);r([s({property:"max-width",valueTemplate:e=>`${e}ch`})],t.prototype,"length",2);r([s({property:"min-width",valueTemplate:e=>`${e}ch`})],t.prototype,"min",2);r([s({property:"text-align",valueTemplate:e=>e})],t.prototype,"align",2);r([s({property:"--_lines",valueTemplate:e=>e})],t.prototype,"lines",2);r([s({property:"color",valueTemplate:e=>{const[o,p]=e.split("/");return p?`color-mix(in srgb, var(--gds-sys-color-${o}) ${parseFloat(p)*100}%, transparent 0%)`:`var(--gds-sys-color-${o})`}})],t.prototype,"color",2);t=r([y("gds-text")],t);
