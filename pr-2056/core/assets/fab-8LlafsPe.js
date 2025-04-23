import{g as n}from"./custom-element-scoping-b4c89-hi.js";import{e as c}from"./declarative-layout-mixins-C09DP4OO.js";import"./button-B0mKZROp.js";import{i as d}from"./lit-element-Bx14lxc-.js";import{G as p}from"./button.component-C2-FBkbF.js";const m=d`
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
`;var f=Object.defineProperty,v=Object.getOwnPropertyDescriptor,b=(l,e,o,t)=>{for(var s=t>1?void 0:t?v(e,o):e,a=l.length-1,r;a>=0;a--)(r=l[a])&&(s=(t?r(e,o,s):r(s))||s);return t&&s&&f(e,o,s),s};let i=class extends c(p){connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",m)}};i=b([n("gds-fab")],i);i.define();
