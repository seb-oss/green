import{n as m,g as h,G as g,h as y}from"./gds-element-24e794df.js";import{t as c}from"./tokens.style-6bc9b0c8.js";import{s as a}from"./style-expression-property-6dbce61b.js";import{i as u}from"./lit-element-2a5e401f.js";const d=u`
  :host {
    display: block;

    & > * {
      margin: unset;
      font-weight: normal;
      font-size: inherit;
      line-height: inherit;
      text-wrap: inherit;
    }
  }
`;var v=Object.defineProperty,f=Object.getOwnPropertyDescriptor,r=(t,o,s,n)=>{for(var p=n>1?void 0:n?f(o,s):o,i=t.length-1,l;i>=0;i--)(l=t[i])&&(p=(n?l(o,s,p):l(p))||p);return n&&p&&v(o,s,p),p};let e=class extends g{constructor(){super(...arguments),this.tag="p"}createTag(){const t=document.createElement(this.tag);return t.appendChild(document.createElement("slot")),t}render(){return y`${this.createTag()}`}};e.styles=[c,d];r([m({type:String})],e.prototype,"tag",2);r([a({valueTemplate:t=>`${t}`,styleTemplate:(t,o)=>{const s=o[0];return`font-size: var(--gds-text-size-${s}); line-height: var(--gds-sys-typography-line-height-${s});`}})],e.prototype,"size",2);r([a()],e.prototype,"margin",2);r([a({property:"text-wrap",valueTemplate:t=>t})],e.prototype,"wrap",2);r([a({property:"max-width",valueTemplate:t=>`${t}ch`})],e.prototype,"length",2);r([a({property:"min-width",valueTemplate:t=>`${t}ch`})],e.prototype,"min",2);r([a({property:"text-align",valueTemplate:t=>t})],e.prototype,"align",2);e=r([h("gds-text")],e);
