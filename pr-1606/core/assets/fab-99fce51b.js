import{g as i}from"./gds-element-86064462.js";import{s as c}from"./style-expression-property-26695edd.js";import{G as m}from"./button-7f889fcf.js";import{i as d}from"./lit-element-1d72f0ce.js";const v=d`
  :host {
    display: contents;
  }

  .button {
    box-shadow: var(--gds-shadow-m);
    position: fixed;
    inset: auto var(--gds-space-3xl) var(--gds-space-3xl) auto;
    block-size: calc(var(--_block-size) + var(--gds-space-xs));
  }
`;var u=Object.defineProperty,b=Object.getOwnPropertyDescriptor,a=(t,o,l,r)=>{for(var e=r>1?void 0:r?b(o,l):o,p=t.length-1,n;p>=0;p--)(n=t[p])&&(e=(r?n(o,l,e):n(e))||e);return r&&e&&u(o,l,e),e};let s=class extends m{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",v)}};a([c({valueTemplate:t=>t,selector:'[part="_button"]'})],s.prototype,"position",2);a([c({valueTemplate:t=>t})],s.prototype,"transform",2);a([c({valueTemplate:t=>t,selector:'[part="_button"]'})],s.prototype,"inset",2);s=a([i("gds-fab")],s);
