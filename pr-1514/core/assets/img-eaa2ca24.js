import{n as m,g,G as u,h as n}from"./gds-element-54cd6e2a.js";import{s as o}from"./style-expression-property-89161d08.js";import{i as c}from"./lit-element-71e04f06.js";const f=c`
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
`;var d=Object.defineProperty,h=Object.getOwnPropertyDescriptor,r=(e,s,l,i)=>{for(var p=i>1?void 0:i?h(s,l):s,a=e.length-1,y;a>=0;a--)(y=e[a])&&(p=(i?y(s,l,p):y(p))||p);return i&&p&&d(s,l,p),p};let t=class extends u{render(){return n`<figure><img src="${this.src}" alt="${this.alt}" /></figure>`}};t.styles=[f];r([o({property:"aspect-ratio",selector:"figure",valueTemplate:e=>e})],t.prototype,"ratio",2);r([o({property:"object-position",selector:"img",valueTemplate:e=>e})],t.prototype,"position",2);r([o({property:"inset",selector:"figure",valueTemplate:e=>e})],t.prototype,"inset",2);r([o({property:"width",valueTemplate:e=>e})],t.prototype,"width",2);r([o({property:"height",valueTemplate:e=>e})],t.prototype,"height",2);r([o({property:"opacity",selector:"figure",valueTemplate:e=>e})],t.prototype,"opacity",2);r([o({property:"object-fit",selector:"img",valueTemplate:e=>e})],t.prototype,"fit",2);r([m()],t.prototype,"src",2);r([m()],t.prototype,"alt",2);r([o({property:"border-radius",selector:"figure",valueTemplate:e=>`var(--gds-space-${e})`})],t.prototype,"radius",2);t=r([g("gds-img")],t);
