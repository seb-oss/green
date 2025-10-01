import{n as m}from"./Reflect-DJ7r0WLU.js";import{s as f,u as g}from"./static-B8S6DEnV.js";import{t as d}from"./tokens.style-CJKwYBen.js";import{s as p}from"./declarative-layout-mixins-DFPXvh_g.js";import{g as y}from"./gds-element-DTROifYq.js";import{G as c}from"./div.component-CpSRkgEJ.js";import{d as u}from"./default-typography.styles-DG7u6j1x.js";import{i as v}from"./lit-element-Bx14lxc-.js";const x=v`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var w=Object.defineProperty,b=Object.getOwnPropertyDescriptor,s=(e,o,l,i)=>{for(var r=i>1?void 0:i?b(o,l):o,a=e.length-1,n;a>=0;a--)(n=e[a])&&(r=(i?n(o,l,r):n(r))||r);return i&&r&&w(o,l,r),r};let t=class extends c{constructor(){super(...arguments),this.tag="span"}render(){const e=f(encodeURI(this.tag));return g`<${e} tag><slot></slot></${e}>`}};t.styles=[d,u,x];s([m({type:String})],t.prototype,"tag",2);s([p({selector:"[tag]",styleTemplate:(e,o)=>`font: var(--gds-sys-text-${o[0]});`})],t.prototype,"font",2);s([p({selector:"[tag]",valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],t.prototype,"font-weight",2);s([p()],t.prototype,"text-transform",2);s([p({selector:"[tag]"})],t.prototype,"text-decoration",2);s([p({selector:"[tag]",styleTemplate:(e,o)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${o[0]};
      -webkit-box-orient: vertical;`})],t.prototype,"lines",2);t=s([y("gds-text")],t);t.define();export{t as G};
