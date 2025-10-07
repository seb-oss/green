import{n as d}from"./Reflect-DJ7r0WLU.js";import{o as n}from"./if-defined-CVqwUuaf.js";import{h as g,G as h,g as c}from"./gds-element-DTROifYq.js";import{t as f}from"./tokens.style-CyN6927s.js";import{e as y,b,w,a as P,s as p}from"./declarative-layout-mixins-DFPXvh_g.js";import{i as v}from"./lit-element-Bx14lxc-.js";const u=v`
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
`;var x=Object.defineProperty,_=Object.getOwnPropertyDescriptor,o=(e,s,a,i)=>{for(var r=i>1?void 0:i?_(s,a):s,m=e.length-1,l;m>=0;m--)(l=e[m])&&(r=(i?l(s,a,r):l(r))||r);return i&&r&&x(s,a,r),r};let t=class extends y(b(w(P(h)))){render(){return g`<img
      src="${n(this.src)}"
      alt="${n(this.alt)}"
    />`}};t.styles=[f,u];o([p({selector:"img"})],t.prototype,"aspect-ratio",2);o([p({property:"border-radius",valueTemplate:e=>`var(--gds-sys-space-${e})`})],t.prototype,"border-radius",2);o([p({selector:"img"})],t.prototype,"object-fit",2);o([p({selector:"img"})],t.prototype,"object-position",2);o([d()],t.prototype,"src",2);o([d()],t.prototype,"alt",2);t=o([c("gds-img")],t);export{t as G};
