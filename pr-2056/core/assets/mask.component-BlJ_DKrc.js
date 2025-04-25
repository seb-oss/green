import{u as m}from"./static-B8S6DEnV.js";import{t as c}from"./tokens.style-OWC-W9l-.js";import{s as p}from"./declarative-layout-mixins-DCzV-Sjo.js";import{g as u}from"./custom-element-scoping-b4c89-hi.js";import{G as v}from"./flex.component-BAUFwSAu.js";import{i as d}from"./lit-element-Bx14lxc-.js";const k=d`
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
`;var g=Object.defineProperty,b=Object.getOwnPropertyDescriptor,s=(t,e,a,l)=>{for(var r=l>1?void 0:l?b(e,a):e,i=t.length-1,n;i>=0;i--)(n=t[i])&&(r=(l?n(e,a,r):n(r))||r);return l&&r&&g(e,a,r),r};let o=class extends v{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.inset="0"}render(){return m`<div part="mask"></div>
      <div part="content"><slot></slot></div>`}};o.styles=[c,k];s([p({selector:'[part="mask"]',valueTemplate:t=>{const[e]=t.split("/");return`linear-gradient(to ${e}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`}})],o.prototype,"mask-image",2);s([p({valueTemplate:t=>t,selector:'[part="mask"]'})],o.prototype,"mask-size",2);s([p({valueTemplate:t=>t,selector:'[part="mask"]'})],o.prototype,"mask-repeat",2);s([p({valueTemplate:t=>t,selector:'[part="mask"]'})],o.prototype,"mask-position",2);s([p({selector:'[part="mask"]',valueTemplate:function(t){const[e,a]=t.split("/");return a?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-background-${e}) ${parseFloat(a)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-background-${e})`}})],o.prototype,"background-color",2);s([p({valueTemplate:t=>t,selector:'[part="mask"]'})],o.prototype,"backdrop-filter",2);o=s([u("gds-mask")],o);export{o as G};
