import{g as c,G as f}from"./gds-element-DTROifYq.js";import{e as m,s as g,f as y}from"./declarative-layout-mixins-DFPXvh_g.js";import{G as v}from"./button.component-DpNXiJAt.js";import{i as p}from"./lit-element-Bx14lxc-.js";import{u}from"./static-B8S6DEnV.js";import{t as b}from"./tokens.style-CyN6927s.js";const x=p`
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

  ::slotted([gds-element='gds-signal']) {
    margin-left: var(--gds-sys-space-xs);
  }
`;var _=Object.defineProperty,h=Object.getOwnPropertyDescriptor,P=(n,e,t,r)=>{for(var s=r>1?void 0:r?h(e,t):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(r?a(e,t,s):a(s))||s);return r&&s&&_(e,t,s),s};let l=class extends m(v){connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",x)}};l=P([c("gds-fab")],l);l.define();const w=p`
  :host {
    display: inline-block;
  }

  [part='signal'] {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 6px;
    height: 6px;
    border-radius: var(--gds-sys-radius-max);
    background-color: currentColor;
    transition: all 0.4s;

    &::before {
      display: flex;
      position: absolute;
      content: '';
      inset: -4px;
      border-radius: inherit;
      background-color: color-mix(in srgb, currentColor, transparent 80%);
      animation: signal 3s ease-in-out infinite;
    }
  }

  @keyframes signal {
    0% {
      transform: scale(2);
      opacity: 0;
    }
    60% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }
`;var C=Object.defineProperty,O=Object.getOwnPropertyDescriptor,d=(n,e,t,r)=>{for(var s=r>1?void 0:r?O(e,t):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(r?a(e,t,s):a(s))||s);return r&&s&&C(e,t,s),s};let i=class extends f{render(){return u`<div part="signal"></div>`}};i.styles=[b,w];d([g({...y("content"),selector:'[part="signal"]'})],i.prototype,"color",2);i=d([c("gds-signal")],i);i.define();
