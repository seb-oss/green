import{u as p}from"./static-B8S6DEnV.js";import{G as c,g as m}from"./gds-element-DKcDvDP5.js";import{t as f}from"./tokens.style-Kn_onYIX.js";import{s as d}from"./declarative-layout-mixins-DHam8wVT.js";import{i as g}from"./lit-element-Bx14lxc-.js";const u=g`
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
    border-radius: var(--gds-sys-space-max);
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
`;var y=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(s,e,a,t)=>{for(var r=t>1?void 0:t?v(e,a):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(r=(t?n(e,a,r):n(r))||r);return t&&r&&y(e,a,r),r};let o=class extends c{render(){return p`<div part="signal"></div>`}};o.styles=[f,u];l([d({valueTemplate:s=>`var(--gds-sys-color-${s})`,selector:'[part="signal"]'})],o.prototype,"color",2);o=l([m("gds-signal")],o);export{o as G};
