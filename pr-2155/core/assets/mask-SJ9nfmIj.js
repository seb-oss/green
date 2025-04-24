import{u as m}from"./static-B8S6DEnV.js";import{t as c}from"./tokens.style-C9bLefPj.js";import{s as p}from"./declarative-layout-mixins-CxeMR8ZJ.js";import{g as u}from"./custom-element-scoping-b4c89-hi.js";import{G as d}from"./flex.component-BDILfbvS.js";import{i as v}from"./lit-element-Bx14lxc-.js";const k=v`
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
`;var g=Object.defineProperty,b=Object.getOwnPropertyDescriptor,s=(t,o,a,i)=>{for(var r=i>1?void 0:i?b(o,a):o,l=t.length-1,n;l>=0;l--)(n=t[l])&&(r=(i?n(o,a,r):n(r))||r);return i&&r&&g(o,a,r),r};let e=class extends d{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.inset="0"}render(){return m`<div part="mask"></div>
      <div part="content"><slot></slot></div>`}};e.styles=[c,k];s([p({selector:'[part="mask"]',valueTemplate:t=>{const[o]=t.split("/");return`linear-gradient(to ${o}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`}})],e.prototype,"mask-image",2);s([p({valueTemplate:t=>t,selector:'[part="mask"]'})],e.prototype,"mask-size",2);s([p({valueTemplate:t=>t,selector:'[part="mask"]'})],e.prototype,"mask-repeat",2);s([p({valueTemplate:t=>t,selector:'[part="mask"]'})],e.prototype,"mask-position",2);s([p({selector:'[part="mask"]',valueTemplate:function(t){const[o,a]=t.split("/");return a?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-background-${o}) ${parseFloat(a)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-background-${o})`}})],e.prototype,"background-color",2);s([p({valueTemplate:t=>t,selector:'[part="mask"]'})],e.prototype,"backdrop-filter",2);e=s([u("gds-mask")],e);e.define();
