import{i as c,a5 as g,P as y,g as d,t as f,s as u,a1 as v,J as x,N as b}from"./iframe-CASzBLiX.js";const m=c`
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
`;var h=Object.getOwnPropertyDescriptor,_=(o,e,n,t)=>{for(var s=t>1?void 0:t?h(e,n):e,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=r(s)||s);return s};let i=class extends g(y){connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",m)}};i=_([d("gds-fab")],i);const w=c`
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
`;var P=Object.defineProperty,C=Object.getOwnPropertyDescriptor,p=(o,e,n,t)=>{for(var s=t>1?void 0:t?C(e,n):e,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=(t?r(e,n,s):r(s))||s);return t&&s&&P(e,n,s),s};let l=class extends x{render(){return b`<div part="signal"></div>`}};l.styles=[f,w];p([u({...v("content"),selector:'[part="signal"]'})],l.prototype,"color",2);l=p([d("gds-signal")],l);export{i as G,l as a};
