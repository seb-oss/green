import{k as m}from"./static-c0094392.js";import{g as c}from"./gds-element-86064462.js";import{s as p}from"./style-expression-property-0e3d4d40.js";import{t as k}from"./tokens.style-b5b8efd2.js";import{G as u}from"./flex-7f848c39.js";import{i as v}from"./lit-element-1d72f0ce.js";const d=v`
  :host {
    isolation: isolate;
  }

  [part='mask'] {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
  }

  [part='content'] {
    z-index: 1;
    position: absolute;
    inset: 0;
  }
`;var g=Object.defineProperty,b=Object.getOwnPropertyDescriptor,s=(t,e,a,i)=>{for(var o=i>1?void 0:i?b(e,a):e,l=t.length-1,n;l>=0;l--)(n=t[l])&&(o=(i?n(e,a,o):n(o))||o);return i&&o&&g(e,a,o),o};let r=class extends u{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.inset="0"}render(){return m`<div part="mask"></div>
      <div part="content"><slot></slot></div>`}};r.styles=[k,d];s([p({selector:'[part="mask"]',valueTemplate:t=>{const[e]=t.split("/");return`linear-gradient(to ${e}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`}})],r.prototype,"mask-image",2);s([p({valueTemplate:t=>t,selector:'[part="mask"]'})],r.prototype,"mask-size",2);s([p({valueTemplate:t=>t,selector:'[part="mask"]'})],r.prototype,"mask-repeat",2);s([p({valueTemplate:t=>t,selector:'[part="mask"]'})],r.prototype,"mask-position",2);s([p({selector:'[part="mask"]',valueTemplate:t=>{const[e,a]=t.split("/");return a?`color-mix(in srgb, var(--gds-color-${e}) ${parseFloat(a)*100}%, transparent 0%)`:`var(--gds-color-${e})`}})],r.prototype,"background-color",2);s([p({valueTemplate:t=>t,selector:'[part="mask"]'})],r.prototype,"backdrop-filter",2);r=s([c("gds-mask")],r);
