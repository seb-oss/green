import{g as l}from"./gds-element-DTROifYq.js";import{e as d}from"./declarative-layout-mixins-DjJmHTNk.js";import"./button-BUaZBkmG.js";import{i as c}from"./lit-element-Bx14lxc-.js";import{G as p}from"./button.component-BtdODELZ.js";import{G as m}from"./signal.component-BcxMxLYJ.js";const f=c`
  :host {
    display: flex;
    z-index: 1050;
    position: fixed;
    inset: auto var(--gds-sys-space-3xl) var(--gds-sys-space-3xl) auto;
  }
  .button {
    box-shadow: var(--gds-sys-shadow-m-01), var(--gds-sys-shadow-m-02);
    block-size: calc(var(--_block-size) + var(--gds-sys-space-xs));
    width: max-content;
  }
`;var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,g=(n,e,t,o)=>{for(var s=o>1?void 0:o?b(e,t):e,a=n.length-1,r;a>=0;a--)(r=n[a])&&(s=(o?r(e,t,s):r(s))||s);return o&&s&&v(e,t,s),s};let i=class extends d(p){connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",f)}};i=g([l("gds-fab")],i);i.define();m.define();
