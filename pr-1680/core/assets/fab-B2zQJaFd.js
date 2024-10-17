import{g as i}from"./gds-element-RTlSuh_R.js";import{s as c}from"./style-expression-property-Da3P080T.js";import{G as m}from"./button-BcMK733K.js";import{i as v}from"./lit-element-BoQqPHl6.js";const d=v`
  .button {
    box-shadow: var(--gds-shadow-m);
    position: fixed;
    inset: auto var(--gds-space-3xl) var(--gds-space-3xl) auto;
    block-size: calc(var(--_block-size) + var(--gds-space-xs));
  }
`;var u=Object.defineProperty,b=Object.getOwnPropertyDescriptor,a=(e,o,l,r)=>{for(var t=r>1?void 0:r?b(o,l):o,p=e.length-1,n;p>=0;p--)(n=e[p])&&(t=(r?n(o,l,t):n(t))||t);return r&&t&&u(o,l,t),t};let s=class extends m{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",d)}};a([c({valueTemplate:e=>e,selector:'[part="_button"]'})],s.prototype,"position",2);a([c({valueTemplate:e=>e})],s.prototype,"transform",2);a([c({valueTemplate:e=>e,selector:'[part="_button"]'})],s.prototype,"inset",2);s=a([i("gds-fab")],s);
