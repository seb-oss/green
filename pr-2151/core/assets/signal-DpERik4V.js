import{u as p}from"./static-B8S6DEnV.js";import{G as c,g as m}from"./custom-element-scoping-b4c89-hi.js";import{t as f}from"./tokens.style-OWC-W9l-.js";import{s as d}from"./declarative-layout-mixins-BgWwoHZ-.js";import{i as g}from"./lit-element-Bx14lxc-.js";const u=g`
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
`;var y=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(s,t,i,o)=>{for(var r=o>1?void 0:o?v(t,i):t,a=s.length-1,n;a>=0;a--)(n=s[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&y(t,i,r),r};let e=class extends c{render(){return p`<div part="signal"></div>`}};e.styles=[f,u];l([d({valueTemplate:s=>`var(--gds-color-${s})`,selector:'[part="signal"]'})],e.prototype,"color",2);e=l([m("gds-signal")],e);e.define();
