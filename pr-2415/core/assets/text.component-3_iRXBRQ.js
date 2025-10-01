import{n as m}from"./Reflect-DJ7r0WLU.js";import{s as f,u as g}from"./static-B8S6DEnV.js";import{t as y}from"./tokens.style-CJKwYBen.js";import{s as p}from"./declarative-layout-mixins-DFPXvh_g.js";import{g as c}from"./gds-element-DTROifYq.js";import{G as d}from"./div.component-B56RLpJM.js";import{d as u}from"./default-typography.styles-DG7u6j1x.js";import{i as v}from"./lit-element-Bx14lxc-.js";const x=v`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var w=Object.defineProperty,b=Object.getOwnPropertyDescriptor,s=(t,o,l,a)=>{for(var r=a>1?void 0:a?b(o,l):o,i=t.length-1,n;i>=0;i--)(n=t[i])&&(r=(a?n(o,l,r):n(r))||r);return a&&r&&w(o,l,r),r};let e=class extends d{constructor(){super(...arguments),this.tag="span"}render(){const t=f(encodeURI(this.tag));return g`<${t} tag><slot></slot></${t}>`}};e.styles=[y,u,x];s([m({type:String})],e.prototype,"tag",2);s([p({selector:"[tag]",styleTemplate:(t,o)=>`font: var(--gds-sys-text-${o[0]});`})],e.prototype,"font",2);s([p({selector:"[tag]",valueTemplate:t=>`var(--gds-sys-text-weight-${t})`})],e.prototype,"font-weight",2);s([p()],e.prototype,"text-transform",2);s([p({selector:"[tag]"})],e.prototype,"text-decoration",2);s([p({selector:"[tag]",styleTemplate:(t,o)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${o[0]};
      -webkit-box-orient: vertical;`})],e.prototype,"lines",2);e=s([c("gds-text")],e);export{e as G};
