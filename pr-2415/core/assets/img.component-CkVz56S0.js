import{o as m}from"./if-defined-CVqwUuaf.js";import{h as c,g as h,G as f}from"./gds-element-DTROifYq.js";import{t as y}from"./tokens.style-CA5ADGwW.js";import{e as u,b as v,w as P,a as b,s as g}from"./declarative-layout-mixins-DFPXvh_g.js";import{n as a}from"./Reflect-DJ7r0WLU.js";import{i as w}from"./lit-element-Bx14lxc-.js";var _=Object.defineProperty,n=(e,t,r,l)=>{for(var s=void 0,o=e.length-1,p;o>=0;o--)(p=e[o])&&(s=p(t,r,s)||s);return s&&_(t,r,s),s};function x(e){class t extends e{constructor(){super(...arguments),this.loading="lazy",this.decoding="auto"}}return n([a()],t.prototype,"src"),n([a()],t.prototype,"srcset"),n([a()],t.prototype,"sizes"),n([a()],t.prototype,"alt"),n([a()],t.prototype,"loading"),n([a()],t.prototype,"decoding"),t}const z=w`
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
`;var $=Object.defineProperty,j=Object.getOwnPropertyDescriptor,d=(e,t,r,l)=>{for(var s=l>1?void 0:l?j(t,r):t,o=e.length-1,p;o>=0;o--)(p=e[o])&&(s=(l?p(t,r,s):p(s))||s);return l&&s&&$(t,r,s),s};let i=class extends u(v(P(b(x(f))))){render(){return c`<img
      src="${m(this.src)}"
      alt="${m(this.alt)}"
      srcset=${m(this.srcset)}
      sizes=${m(this.sizes)}
    />`}};i.styles=[y,z];d([g({selector:"img"})],i.prototype,"aspect-ratio",2);d([g({property:"border-radius",valueTemplate:e=>`var(--gds-sys-space-${e})`})],i.prototype,"border-radius",2);d([g({selector:"img"})],i.prototype,"object-fit",2);d([g({selector:"img"})],i.prototype,"object-position",2);i=d([h("gds-img")],i);export{i as G,x as w};
