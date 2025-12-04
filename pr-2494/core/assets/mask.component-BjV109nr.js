import{i as m,t as c,s as o,a0 as u,D as v,g as k}from"./iframe-BvO6JDjo.js";import{G as d}from"./flex.component-0j1zyJs2.js";const h=m`
  :host {
    contain: strict;
  }

  [part='mask'] {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    mask-composite: intersect;
  }
`;var y=Object.defineProperty,f=Object.getOwnPropertyDescriptor,a=(e,s,i,p)=>{for(var r=p>1?void 0:p?f(s,i):s,l=e.length-1,n;l>=0;l--)(n=e[l])&&(r=(p?n(s,i,r):n(r))||r);return p&&r&&y(s,i,r),r};let t=class extends d{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.display="flex",this.inset="0"}render(){return v`<div part="mask"></div>
      <slot></slot>`}};t.styles=[c,h];a([o({selector:'[part="mask"]',valueTemplate:function(e){return u(e,"background",this.level)}})],t.prototype,"background",2);a([o({valueTemplate:e=>{const[s]=e.split("/");return`linear-gradient(to ${s}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`},selector:'[part="mask"]'})],t.prototype,"mask-image",2);a([o({valueTemplate:e=>e,selector:'[part="mask"]'})],t.prototype,"mask-size",2);a([o({valueTemplate:e=>e,selector:'[part="mask"]'})],t.prototype,"mask-repeat",2);a([o({valueTemplate:e=>e,selector:'[part="mask"]'})],t.prototype,"mask-position",2);a([o({valueTemplate:e=>e,selector:'[part="mask"]'})],t.prototype,"backdrop-filter",2);t=a([k("gds-mask")],t);export{t as G};
