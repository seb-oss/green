import{n as y,g as d,G as n,h}from"./custom-element-scoping-CpYtbs9r.js";import{t as c}from"./tokens.style-RalixZsd.js";import{s as o}from"./style-expression-property-D0nhDdjH.js";import{i as g}from"./lit-element-C_s9q329.js";const v=g`
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
`;var u=Object.defineProperty,f=Object.getOwnPropertyDescriptor,r=(e,s,a,i)=>{for(var p=i>1?void 0:i?f(s,a):s,l=e.length-1,m;l>=0;l--)(m=e[l])&&(p=(i?m(s,a,p):m(p))||p);return i&&p&&u(s,a,p),p};let t=class extends n{render(){return h`<img src="${this.src}" alt="${this.alt}" />`}};t.styles=[c,v];r([o({property:"aspect-ratio",valueTemplate:e=>e})],t.prototype,"aspect-ratio",2);r([o({property:"object-position",selector:"img",valueTemplate:e=>e})],t.prototype,"position",2);r([o({property:"inset",valueTemplate:e=>e})],t.prototype,"inset",2);r([o({property:"width",valueTemplate:e=>e})],t.prototype,"width",2);r([o({property:"height",valueTemplate:e=>e})],t.prototype,"height",2);r([o({property:"opacity",valueTemplate:e=>e})],t.prototype,"opacity",2);r([o({property:"object-fit",selector:"img",valueTemplate:e=>e})],t.prototype,"object-fit",2);r([y()],t.prototype,"src",2);r([y()],t.prototype,"alt",2);r([o({property:"border-radius",valueTemplate:e=>`var(--gds-space-${e})`})],t.prototype,"border-radius",2);t=r([d("gds-img")],t);
