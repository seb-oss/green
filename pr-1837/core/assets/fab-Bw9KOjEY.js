import{g as i}from"./custom-element-scoping-b4lD3laR.js";import{s as c}from"./style-expression-property-CYg4CGI6.js";import{G as m}from"./button-DRwD-DCX.js";import{i as d}from"./lit-element-C_s9q329.js";const v=d`
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
`;var f=Object.defineProperty,u=Object.getOwnPropertyDescriptor,a=(t,o,l,r)=>{for(var e=r>1?void 0:r?u(o,l):o,p=t.length-1,n;p>=0;p--)(n=t[p])&&(e=(r?n(o,l,e):n(e))||e);return r&&e&&f(o,l,e),e};let s=class extends m{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",v)}};a([c({valueTemplate:t=>t,selector:'[part="_button"]'})],s.prototype,"position",2);a([c({valueTemplate:t=>t})],s.prototype,"transform",2);a([c({valueTemplate:t=>t,selector:'[part="_button"]'})],s.prototype,"inset",2);s=a([i("gds-fab")],s);
