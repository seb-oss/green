import{g as c}from"./custom-element-scoping-BRwcB39g.js";import{s as i}from"./style-expression-property-DQISEWql.js";import{G as m}from"./button-C7RbB4wd.js";import{i as d}from"./lit-element-C_s9q329.js";const v=d`
  :host {
    display: flex;
    z-index: 1050;
    position: fixed;
    inset: auto var(--gds-space-3xl) var(--gds-space-3xl) auto;
  }
  .button {
    box-shadow: var(--gds-shadow-m);
    block-size: calc(var(--_block-size) + var(--gds-space-xs));
    width: max-content;
  }
`;var f=Object.defineProperty,u=Object.getOwnPropertyDescriptor,r=(e,o,l,a)=>{for(var s=a>1?void 0:a?u(o,l):o,p=e.length-1,n;p>=0;p--)(n=e[p])&&(s=(a?n(o,l,s):n(s))||s);return a&&s&&f(o,l,s),s};let t=class extends m{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",v)}};r([i({valueTemplate:e=>e})],t.prototype,"position",2);r([i({valueTemplate:e=>e})],t.prototype,"transform",2);r([i({valueTemplate:e=>e})],t.prototype,"inset",2);t=r([c("gds-fab")],t);
