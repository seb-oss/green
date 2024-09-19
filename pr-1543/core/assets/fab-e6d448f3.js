import{g as i}from"./gds-element-86064462.js";import{s as c}from"./style-expression-property-0e3d4d40.js";import{G as m}from"./button-62abad27.js";import{i as d}from"./lit-element-1d72f0ce.js";const v=d`
  :host {
    display: contents;
  }

  .button {
    box-shadow: var(--gds-shadow-m);
    position: fixed;
    inset: auto var(--gds-space-3xl) var(--gds-space-3xl) auto;
    block-size: calc(var(--_block-size) + var(--gds-space-xs));
  }
`;var f=Object.defineProperty,u=Object.getOwnPropertyDescriptor,a=(e,o,l,r)=>{for(var t=r>1?void 0:r?u(o,l):o,p=e.length-1,n;p>=0;p--)(n=e[p])&&(t=(r?n(o,l,t):n(t))||t);return r&&t&&f(o,l,t),t};let s=class extends m{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",v)}};a([c({valueTemplate:e=>e})],s.prototype,"position",2);a([c({valueTemplate:e=>e})],s.prototype,"transform",2);a([c({valueTemplate:e=>e,selector:'[part="_button"]'})],s.prototype,"inset",2);s=a([i("gds-fab")],s);
