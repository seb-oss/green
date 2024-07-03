import{g as m,h as c}from"./gds-element-54cd6e2a.js";import{t as f}from"./tokens.style-880811e7.js";import{s as a}from"./style-expression-property-89161d08.js";import{i as y}from"./lit-element-71e04f06.js";import{G as g}from"./container-ee833d24.js";const u=y`
  :host {
    gap: var(--_gap-column) var(--_gap-row);
    box-sizing: border-box;
  }
`;var _=Object.defineProperty,d=Object.getOwnPropertyDescriptor,l=(e,t,p,s)=>{for(var r=s>1?void 0:s?d(t,p):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(s?i(t,p,r):i(r))||r);return s&&r&&_(t,p,r),r};let o=class extends g{connectedCallback(){super.connectedCallback(),this.display="flex"}render(){return c`<slot></slot>`}};o.styles=[f,u];l([a({styleTemplate:(e,t)=>{const p=t[0],s=t[1]||p;return`--_gap-column: ${p}; --_gap-row: ${s};`}})],o.prototype,"gap",2);l([a({property:"align-items",valueTemplate:e=>e})],o.prototype,"align",2);l([a({property:"justify-content",valueTemplate:e=>e})],o.prototype,"justify",2);l([a({property:"flex-direction",valueTemplate:e=>e})],o.prototype,"direction",2);o=l([m("gds-flex")],o);
