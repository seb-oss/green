import{h as d,n,G as g,g as h}from"./custom-element-scoping-CNGU1oQ0.js";import{t as c}from"./tokens.style-CfX8-1wa.js";import{e as y,a as f,c as b,s as p}from"./declarative-layout-mixins-dHcexrGz.js";import{i as v}from"./lit-element-Bx14lxc-.js";const P=v`
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
`;var u=Object.defineProperty,w=Object.getOwnPropertyDescriptor,s=(r,o,a,i)=>{for(var e=i>1?void 0:i?w(o,a):o,l=r.length-1,m;l>=0;l--)(m=r[l])&&(e=(i?m(o,a,e):m(e))||e);return i&&e&&u(o,a,e),e};let t=class extends y(f(b(g))){render(){return d`<img src="${this.src}" alt="${this.alt}" />`}};t.styles=[c,P];s([p()],t.prototype,"aspect-ratio",2);s([p({property:"border-radius",valueTemplate:r=>`var(--gds-sys-space-${r})`})],t.prototype,"border-radius",2);s([p({selector:"img"})],t.prototype,"object-fit",2);s([p({selector:"img"})],t.prototype,"object-position",2);s([n()],t.prototype,"src",2);s([n()],t.prototype,"alt",2);t=s([h("gds-img")],t);export{t as G};
