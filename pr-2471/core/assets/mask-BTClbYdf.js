import{u as n}from"./static-B8S6DEnV.js";import{t as c}from"./tokens.style-gnTMHtP9.js";import{s as a,p as u}from"./declarative-layout-mixins-DFPXvh_g.js";import{g as v}from"./gds-element-DTROifYq.js";import{G as k}from"./flex.component-IB3lNnTs.js";import{i as f}from"./lit-element-Bx14lxc-.js";const d=f`
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
`;var h=Object.defineProperty,y=Object.getOwnPropertyDescriptor,o=(e,s,i,p)=>{for(var r=p>1?void 0:p?y(s,i):s,l=e.length-1,m;l>=0;l--)(m=e[l])&&(r=(p?m(s,i,r):m(r))||r);return p&&r&&h(s,i,r),r};let t=class extends k{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.display="flex",this.inset="0"}render(){return n`<div part="mask"></div>
      <slot></slot>`}};t.styles=[c,d];o([a({selector:'[part="mask"]',valueTemplate:function(e){return u(e,"background",this.level)}})],t.prototype,"background",2);o([a({valueTemplate:e=>{const[s]=e.split("/");return`linear-gradient(to ${s}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`},selector:'[part="mask"]'})],t.prototype,"mask-image",2);o([a({valueTemplate:e=>e,selector:'[part="mask"]'})],t.prototype,"mask-size",2);o([a({valueTemplate:e=>e,selector:'[part="mask"]'})],t.prototype,"mask-repeat",2);o([a({valueTemplate:e=>e,selector:'[part="mask"]'})],t.prototype,"mask-position",2);o([a({valueTemplate:e=>e,selector:'[part="mask"]'})],t.prototype,"backdrop-filter",2);t=o([v("gds-mask")],t);t.define();
