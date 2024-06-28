import{n as y,g as m,G as v,h as d}from"./gds-element-54cd6e2a.js";import{t as h}from"./tokens.style-ae076d02.js";import{s as o}from"./style-expression-property-89161d08.js";import{i as f}from"./lit-element-71e04f06.js";const u=f`
  :host {
    display: contents;
  }

  figure {
    aspect-ratio: var(--_ratio, inital);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    inset: var(--_inset, initial);
    width: 100%;
    height: auto;
    opacity: var(--_opacity, 1);
    overflow: hidden;
    border-radius: inherit;
  }

  img {
    display: flex;
    object-fit: var(--_fit, cover);
    object-position: var(--_position, relative);
    width: 100%;
    height: 100%;
  }
`;var g=Object.defineProperty,c=Object.getOwnPropertyDescriptor,r=(t,i,s,a)=>{for(var p=a>1?void 0:a?c(i,s):i,l=t.length-1,n;l>=0;l--)(n=t[l])&&(p=(a?n(i,s,p):n(p))||p);return a&&p&&g(i,s,p),p};let e=class extends v{render(){return d`<figure><img src="${this.src}" alt="${this.alt}" /></figure>`}};e.styles=[h,u];r([o({property:"--_ratio",valueTemplate:t=>`${t}`})],e.prototype,"ratio",2);r([o({property:"--_position",valueTemplate:t=>t})],e.prototype,"position",2);r([o({property:"--_inset",valueTemplate:t=>t})],e.prototype,"inset",2);r([o({property:"width",valueTemplate:t=>t})],e.prototype,"width",2);r([o({property:"height",valueTemplate:t=>t})],e.prototype,"height",2);r([o({property:"--_opacity",valueTemplate:t=>t})],e.prototype,"opacity",2);r([o({property:"--_fit",valueTemplate:t=>t})],e.prototype,"fit",2);r([y()],e.prototype,"src",2);r([y()],e.prototype,"alt",2);r([o({property:"border-radius",valueTemplate:t=>`var(--gds-space-${t})`})],e.prototype,"radius",2);e=r([m("gds-img")],e);
