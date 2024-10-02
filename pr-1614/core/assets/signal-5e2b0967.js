import{k as p}from"./static-c0094392.js";import{g as c,G as m}from"./gds-element-86064462.js";import{s as f}from"./style-expression-property-26695edd.js";import{t as d}from"./tokens.style-01187a75.js";import{i as g}from"./lit-element-1d72f0ce.js";const u=g`
  :host {
    display: contents;
  }

  [part='signal'] {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 6px;
    height: 6px;
    border-radius: var(--gds-space-max);
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
`;var y=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(e,s,a,t)=>{for(var r=t>1?void 0:t?v(s,a):s,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(t?n(s,a,r):n(r))||r);return t&&r&&y(s,a,r),r};let o=class extends m{render(){return p`<div part="signal"></div>`}};o.styles=[d,u];l([f({valueTemplate:e=>`var(--gds-color-${e})`,selector:'[part="signal"]'})],o.prototype,"color",2);o=l([c("gds-signal")],o);