import{g as i}from"./custom-element-scoping-b4lD3laR.js";import{s as l}from"./style-expression-property-CYg4CGI6.js";import{G as m}from"./button-DE_BYt3a.js";import{i as d}from"./lit-element-C_s9q329.js";const v=d`
  :host {
    display: flex;
  }
  .button {
    box-shadow: var(--gds-shadow-m);
    position: fixed;
    inset: auto var(--gds-space-3xl) var(--gds-space-3xl) auto;
    block-size: calc(var(--_block-size) + var(--gds-space-xs));
    width: max-content;
  }
`;var u=Object.defineProperty,f=Object.getOwnPropertyDescriptor,o=(e,a,p,r)=>{for(var t=r>1?void 0:r?f(a,p):a,n=e.length-1,c;n>=0;n--)(c=e[n])&&(t=(r?c(a,p,t):c(t))||t);return r&&t&&u(a,p,t),t};let s=class extends m{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",v)}};o([l({valueTemplate:e=>e,selector:'[part="_button"]'})],s.prototype,"position",2);o([l({valueTemplate:e=>e})],s.prototype,"transform",2);o([l({valueTemplate:e=>e,selector:'[part="_button"]'})],s.prototype,"inset",2);o([l({valueTemplate:e=>e})],s.prototype,"z-index",2);s=o([i("gds-fab")],s);
