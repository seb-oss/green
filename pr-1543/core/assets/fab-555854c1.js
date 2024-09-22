import{g as i}from"./gds-element-86064462.js";import{s as c}from"./style-expression-property-0e3d4d40.js";import{a as m}from"./button-0a0911ca.js";import{i as d}from"./lit-element-1d72f0ce.js";const v=d`
  :host {
    display: contents;
  }

  .button {
    box-shadow: var(--gds-shadow-m);
    position: fixed;
    inset: auto var(--gds-space-3xl) var(--gds-space-3xl) auto;
    block-size: calc(var(--_block-size) + var(--gds-space-xs));
  }
`;var f=Object.defineProperty,u=Object.getOwnPropertyDescriptor,r=(e,o,l,a)=>{for(var t=a>1?void 0:a?u(o,l):o,p=e.length-1,n;p>=0;p--)(n=e[p])&&(t=(a?n(o,l,t):n(t))||t);return a&&t&&f(o,l,t),t};let s=class extends m{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",v)}};r([c({valueTemplate:e=>e})],s.prototype,"position",2);r([c({valueTemplate:e=>e})],s.prototype,"transform",2);r([c({valueTemplate:e=>e,selector:'[part="_button"]'})],s.prototype,"inset",2);s=r([i("gds-fab")],s);
