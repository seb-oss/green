import{i as m,E as h}from"./lit-element-Bx14lxc-.js";import{n as d}from"./Reflect-DJ7r0WLU.js";import{G as g,h as c,g as y}from"./gds-element-DTROifYq.js";import{t as f}from"./tokens.style-BAmYQ5hh.js";import{s as n,g as v}from"./declarative-layout-mixins-DjJmHTNk.js";const u=m`
  :host {
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--_size);
  }

  hr {
    width: 100%;
    height: 1px;
    min-height: 1px;
    max-height: 1px;
    border: 0;
    margin: 0;
    padding: 0;
    background: var(--_color, currentColor);
    box-sizing: border-box;
  }
`;var x=Object.defineProperty,_=Object.getOwnPropertyDescriptor,o=(t,s,i,p)=>{for(var r=p>1?void 0:p?_(s,i):s,l=t.length-1,a;l>=0;l--)(a=t[l])&&(r=(p?a(s,i,r):a(r))||r);return p&&r&&x(s,i,r),r};let e=class extends g{constructor(){super(...arguments),this.role=null}render(){return c`<hr role=${this.role||h} />`}};e.styles=[f,u];o([n({...v("border"),property:"--_color"})],e.prototype,"color",2);o([n({property:"--_size",valueTemplate:t=>`var(--gds-sys-space-${t})`})],e.prototype,"size",2);o([n()],e.prototype,"opacity",2);o([d()],e.prototype,"role",2);e=o([y("gds-divider")],e);export{e as G};
