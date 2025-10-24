import{o as a}from"./if-defined-CVqwUuaf.js";import{h as g,g as m,G as h}from"./gds-element-DTROifYq.js";import{t as y}from"./tokens.style-CA5ADGwW.js";import{e as u,b as v,w as P,a as b,s as c}from"./declarative-layout-mixins-DFPXvh_g.js";import{n as l}from"./Reflect-DJ7r0WLU.js";import{i as w}from"./lit-element-Bx14lxc-.js";var _=Object.defineProperty,n=(s,e,r,d)=>{for(var t=void 0,o=s.length-1,p;o>=0;o--)(p=s[o])&&(t=p(e,r,t)||t);return t&&_(e,r,t),t};function $(s){class e extends s{constructor(){super(...arguments),this.loading="lazy",this.decoding="auto"}}return n([l({reflect:!1})],e.prototype,"src"),n([l({reflect:!1})],e.prototype,"srcset"),n([l({reflect:!1})],e.prototype,"sizes"),n([l({reflect:!1})],e.prototype,"alt"),n([l({reflect:!1})],e.prototype,"loading"),n([l({reflect:!1})],e.prototype,"decoding"),e}const x=w`
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
`;var z=Object.defineProperty,j=Object.getOwnPropertyDescriptor,f=(s,e,r,d)=>{for(var t=d>1?void 0:d?j(e,r):e,o=s.length-1,p;o>=0;o--)(p=s[o])&&(t=(d?p(e,r,t):p(t))||t);return d&&t&&z(e,r,t),t};let i=class extends u(v(P(b($(h))))){render(){return g`<img
      src="${a(this.src)}"
      alt="${a(this.alt)}"
      srcset=${a(this.srcset)}
      sizes=${a(this.sizes)}
      loading=${a(this.loading)}
      decoding=${a(this.decoding)}
    />`}};i.styles=[y,x];f([c({selector:"img"})],i.prototype,"aspect-ratio",2);f([c({property:"border-radius",valueTemplate:s=>`var(--gds-sys-space-${s})`})],i.prototype,"border-radius",2);f([c({selector:"img"})],i.prototype,"object-fit",2);f([c({selector:"img"})],i.prototype,"object-position",2);i=f([m("gds-img")],i);export{i as G,$ as w};
