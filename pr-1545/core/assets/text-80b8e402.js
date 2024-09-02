import{n as m,g as y,G as g,h}from"./gds-element-54cd6e2a.js";import{t as c}from"./tokens.style-c63c5f55.js";import{s as o}from"./style-expression-property-89161d08.js";import{i as u}from"./lit-element-71e04f06.js";const v=u`
  :host {
    display: block;
  }

  * {
    margin: unset;
    font-weight: inherit;
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
`;var d=Object.defineProperty,f=Object.getOwnPropertyDescriptor,r=(e,p,s,l)=>{for(var a=l>1?void 0:l?f(p,s):p,i=e.length-1,n;i>=0;i--)(n=e[i])&&(a=(l?n(p,s,a):n(a))||a);return l&&a&&d(p,s,a),a};let t=class extends g{constructor(){super(...arguments),this.tag="p"}createTag(){const e=document.createElement(this.tag);return e.appendChild(document.createElement("slot")),e}render(){return h`${this.createTag()}`}};t.styles=[c,v];r([m({type:String})],t.prototype,"tag",2);r([o({valueTemplate:e=>`${e}`,styleTemplate:(e,p)=>{const s=p[0];return`font-size: var(--gds-text-size-${s}); line-height: var(--gds-text-line-height-${s});`}})],t.prototype,"size",2);r([o({property:"font-weight",valueTemplate:e=>`var(--gds-text-weight-${e})`})],t.prototype,"weight",2);r([o()],t.prototype,"margin",2);r([o({property:"text-wrap",valueTemplate:e=>e})],t.prototype,"wrap",2);r([o({property:"text-transform",valueTemplate:e=>e})],t.prototype,"transform",2);r([o({property:"max-width",valueTemplate:e=>`${e}ch`})],t.prototype,"length",2);r([o({property:"min-width",valueTemplate:e=>`${e}ch`})],t.prototype,"min",2);r([o({property:"text-align",valueTemplate:e=>e})],t.prototype,"align",2);r([o({property:"--_lines",valueTemplate:e=>e})],t.prototype,"lines",2);r([o({property:"color",valueTemplate:e=>{const[p,s]=e.split("/");return s?`color-mix(in srgb, var(--gds-sys-color-${p}) ${parseFloat(s)*100}%, transparent 0%)`:`var(--gds-sys-color-${p})`}})],t.prototype,"color",2);t=r([y("gds-text")],t);
