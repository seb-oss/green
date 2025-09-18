import{n}from"./Reflect-DJ7r0WLU.js";import{h as d,G as g,g as h}from"./gds-element-DTROifYq.js";import{t as c}from"./tokens.style-BS_h03Rl.js";import{e as f,w as y,a as b,s as p}from"./declarative-layout-mixins-DjJmHTNk.js";import{i as v}from"./lit-element-Bx14lxc-.js";const w=v`
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
`;var P=Object.defineProperty,u=Object.getOwnPropertyDescriptor,r=(o,s,a,i)=>{for(var e=i>1?void 0:i?u(s,a):s,l=o.length-1,m;l>=0;l--)(m=o[l])&&(e=(i?m(s,a,e):m(e))||e);return i&&e&&P(s,a,e),e};let t=class extends f(y(b(g))){render(){return d`<img src="${this.src}" alt="${this.alt}" />`}};t.styles=[c,w];r([p()],t.prototype,"aspect-ratio",2);r([p({property:"border-radius",valueTemplate:o=>`var(--gds-sys-space-${o})`})],t.prototype,"border-radius",2);r([p({selector:"img"})],t.prototype,"object-fit",2);r([p({selector:"img"})],t.prototype,"object-position",2);r([n()],t.prototype,"src",2);r([n()],t.prototype,"alt",2);t=r([h("gds-img")],t);export{t as G};
