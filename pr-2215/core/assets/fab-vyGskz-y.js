import{g as n}from"./gds-element-KHa0AloG.js";import{e as c}from"./declarative-layout-mixins-V-x3wfiD.js";import{G as d}from"./button.component-BHtocGTN.js";import{i as p}from"./lit-element-Bx14lxc-.js";const f=p`
  :host {
    display: flex;
    z-index: 1050;
    position: fixed;
    inset: auto var(--gds-sys-space-3xl) var(--gds-sys-space-3xl) auto;
  }
  .button {
    box-shadow: var(--gds-shadow-m);
    block-size: calc(var(--_block-size) + var(--gds-sys-space-xs));
    width: max-content;
  }
`;var m=Object.defineProperty,v=Object.getOwnPropertyDescriptor,b=(l,e,o,t)=>{for(var s=t>1?void 0:t?v(e,o):e,a=l.length-1,r;a>=0;a--)(r=l[a])&&(s=(t?r(e,o,s):r(s))||s);return t&&s&&m(e,o,s),s};let i=class extends c(d){connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",f)}};i=b([n("gds-fab")],i);i.define();
