import{n as d}from"./Reflect-DJ7r0WLU.js";import{o as n}from"./if-defined-CVqwUuaf.js";import{h as g,G as h,g as f}from"./gds-element-DTROifYq.js";import{t as c}from"./tokens.style-BcVhf7GG.js";import{e as y,b,w,a as P,s as p}from"./declarative-layout-mixins-DFPXvh_g.js";import{i as v}from"./lit-element-Bx14lxc-.js";const u=v`
  :host {
    display: block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  img {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;var _=Object.defineProperty,x=Object.getOwnPropertyDescriptor,o=(e,s,a,i)=>{for(var r=i>1?void 0:i?x(s,a):s,m=e.length-1,l;m>=0;m--)(l=e[m])&&(r=(i?l(s,a,r):l(r))||r);return i&&r&&_(s,a,r),r};let t=class extends y(b(w(P(h)))){render(){return g`<img
      src="${n(this.src)}"
      alt="${n(this.alt)}"
    />`}};t.styles=[c,u];o([p()],t.prototype,"aspect-ratio",2);o([p({property:"border-radius",valueTemplate:e=>`var(--gds-sys-space-${e})`})],t.prototype,"border-radius",2);o([p({selector:"img"})],t.prototype,"object-fit",2);o([p({selector:"img"})],t.prototype,"object-position",2);o([d()],t.prototype,"src",2);o([d()],t.prototype,"alt",2);t=o([f("gds-img")],t);t.define();
