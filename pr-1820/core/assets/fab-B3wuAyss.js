import{g as i}from"./custom-element-scoping-b4lD3laR.js";import{s as c}from"./style-expression-property-CYg4CGI6.js";import{G as m}from"./button-DE_BYt3a.js";import{i as d}from"./lit-element-C_s9q329.js";const v=d`
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
`;var f=Object.defineProperty,u=Object.getOwnPropertyDescriptor,r=(e,o,l,a)=>{for(var t=a>1?void 0:a?u(o,l):o,p=e.length-1,n;p>=0;p--)(n=e[p])&&(t=(a?n(o,l,t):n(t))||t);return a&&t&&f(o,l,t),t};let s=class extends m{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",v)}};r([c({valueTemplate:e=>e,selector:'[part="_button"]'})],s.prototype,"position",2);r([c({valueTemplate:e=>e})],s.prototype,"transform",2);r([c({valueTemplate:e=>e})],s.prototype,"inset",2);s=r([i("gds-fab")],s);
