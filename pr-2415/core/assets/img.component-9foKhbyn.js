import{n as a}from"./Reflect-DJ7r0WLU.js";import{o as p}from"./if-defined-CVqwUuaf.js";import{h as c,G as d,g}from"./gds-element-DTROifYq.js";import{t as y}from"./tokens.style-CyN6927s.js";import{e as f,b,w,a as P,s as m}from"./declarative-layout-mixins-DFPXvh_g.js";import{i as v}from"./lit-element-Bx14lxc-.js";const u=v`
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
`;var z=Object.defineProperty,x=Object.getOwnPropertyDescriptor,s=(r,o,l,i)=>{for(var e=i>1?void 0:i?x(o,l):o,n=r.length-1,h;n>=0;n--)(h=r[n])&&(e=(i?h(o,l,e):h(e))||e);return i&&e&&z(o,l,e),e};let t=class extends f(b(w(P(d)))){render(){return c`<img
      src="${p(this.src)}"
      alt="${p(this.alt)}"
      srcset=${p(this.srcset)}
      sizes=${p(this.sizes)}
    />`}};t.styles=[y,u];s([m({selector:"img"})],t.prototype,"aspect-ratio",2);s([m({property:"border-radius",valueTemplate:r=>`var(--gds-sys-space-${r})`})],t.prototype,"border-radius",2);s([m({selector:"img"})],t.prototype,"object-fit",2);s([m({selector:"img"})],t.prototype,"object-position",2);s([a()],t.prototype,"src",2);s([a()],t.prototype,"srcset",2);s([a()],t.prototype,"sizes",2);s([a()],t.prototype,"alt",2);t=s([g("gds-img")],t);export{t as G};
