import{g as n}from"./custom-element-scoping-BEGY3AqQ.js";import{e as c}from"./declarative-layout-mixins-C8_oSfbi.js";import{G as d}from"./button-CpkwU52b.js";import{i as p}from"./lit-element-C_s9q329.js";const m=p`
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
`;var f=Object.defineProperty,v=Object.getOwnPropertyDescriptor,b=(l,e,o,t)=>{for(var s=t>1?void 0:t?v(e,o):e,a=l.length-1,r;a>=0;a--)(r=l[a])&&(s=(t?r(e,o,s):r(s))||s);return t&&s&&f(e,o,s),s};let i=class extends c(d){connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",m)}};i=b([n("gds-fab")],i);
