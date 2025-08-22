import{i as m,E as h}from"./lit-element-Bx14lxc-.js";import{n as c}from"./Reflect-DJ7r0WLU.js";import{G as d,h as y,g as f}from"./gds-element-DJNCW3iR.js";import{t as g}from"./tokens.style-iX6aIK9m.js";import{s as n,g as v}from"./declarative-layout-mixins-CquYcIh8.js";const u=m`
  :host {
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--_size);
  }

  hr {
    background: var(--_color, currentColor);
    border: 0;
    min-height: 1px;
    max-height: 1px;
    height: 1px;
    width: 100%;
  }
`;var _=Object.defineProperty,x=Object.getOwnPropertyDescriptor,o=(t,s,i,p)=>{for(var r=p>1?void 0:p?x(s,i):s,l=t.length-1,a;l>=0;l--)(a=t[l])&&(r=(p?a(s,i,r):a(r))||r);return p&&r&&_(s,i,r),r};let e=class extends d{constructor(){super(...arguments),this.role=null}render(){return y`<hr role=${this.role||h} />`}};e.styles=[g,u];o([n({...v("border"),property:"--_color"})],e.prototype,"color",2);o([n({property:"--_size",valueTemplate:t=>`var(--gds-sys-space-${t})`})],e.prototype,"size",2);o([n()],e.prototype,"opacity",2);o([c()],e.prototype,"role",2);e=o([f("gds-divider")],e);export{e as G};
