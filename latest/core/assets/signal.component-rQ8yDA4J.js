import{u as p}from"./static-B8S6DEnV.js";import{G as c,g as m}from"./gds-element-DTROifYq.js";import{t as f}from"./tokens.style-BS_h03Rl.js";import{s as d,g}from"./declarative-layout-mixins-DjJmHTNk.js";import{i as u}from"./lit-element-Bx14lxc-.js";const y=u`
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
`;var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(a,s,t,e)=>{for(var r=e>1?void 0:e?v(s,t):s,i=a.length-1,n;i>=0;i--)(n=a[i])&&(r=(e?n(s,t,r):n(r))||r);return e&&r&&b(s,t,r),r};let o=class extends c{render(){return p`<div part="signal"></div>`}};o.styles=[f,y];l([d({...g("content"),selector:'[part="signal"]'})],o.prototype,"color",2);o=l([m("gds-signal")],o);export{o as G};
