import{n as y,g,G as c,h as n}from"./gds-element-86064462.js";import{t as u}from"./tokens.style-01187a75.js";import{s as o}from"./style-expression-property-26695edd.js";import{i as f}from"./lit-element-1d72f0ce.js";const d=f`
  :host {
    display: contents;
  }

  figure {
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
`;var h=Object.defineProperty,v=Object.getOwnPropertyDescriptor,r=(e,s,a,i)=>{for(var p=i>1?void 0:i?v(s,a):s,l=e.length-1,m;l>=0;l--)(m=e[l])&&(p=(i?m(s,a,p):m(p))||p);return i&&p&&h(s,a,p),p};let t=class extends c{render(){return n`<figure><img src="${this.src}" alt="${this.alt}" /></figure>`}};t.styles=[u,d];r([o({property:"aspect-ratio",selector:"figure",valueTemplate:e=>e})],t.prototype,"aspect-ratio",2);r([o({property:"object-position",selector:"img",valueTemplate:e=>e})],t.prototype,"position",2);r([o({property:"inset",selector:"figure",valueTemplate:e=>e})],t.prototype,"inset",2);r([o({property:"width",valueTemplate:e=>e})],t.prototype,"width",2);r([o({property:"height",valueTemplate:e=>e})],t.prototype,"height",2);r([o({property:"opacity",selector:"figure",valueTemplate:e=>e})],t.prototype,"opacity",2);r([o({property:"object-fit",selector:"img",valueTemplate:e=>e})],t.prototype,"object-fit",2);r([y()],t.prototype,"src",2);r([y()],t.prototype,"alt",2);r([o({property:"border-radius",selector:"figure",valueTemplate:e=>`var(--gds-space-${e})`})],t.prototype,"border-radius",2);t=r([g("gds-img")],t);