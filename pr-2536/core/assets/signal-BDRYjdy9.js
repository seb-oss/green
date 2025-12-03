import{i as c,ac as g,Q as y,g as d,t as f,s as u,a8 as v,J as b,a2 as m}from"./iframe-HNUltHSW.js";const x=c`
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
`;var h=Object.getOwnPropertyDescriptor,_=(o,e,n,t)=>{for(var s=t>1?void 0:t?h(e,n):e,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=r(s)||s);return s};let l=class extends g(y){connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",x)}};l=_([d("gds-fab")],l);l.define();const w=c`
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
`;var C=Object.defineProperty,P=Object.getOwnPropertyDescriptor,p=(o,e,n,t)=>{for(var s=t>1?void 0:t?P(e,n):e,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=(t?r(e,n,s):r(s))||s);return t&&s&&C(e,n,s),s};let i=class extends b{render(){return m`<div part="signal"></div>`}};i.styles=[f,w];p([u({...v("content"),selector:'[part="signal"]'})],i.prototype,"color",2);i=p([d("gds-signal")],i);i.define();
