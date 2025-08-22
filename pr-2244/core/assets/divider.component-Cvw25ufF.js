import{i as m,E as h}from"./lit-element-Bx14lxc-.js";import{n as d}from"./Reflect-DJ7r0WLU.js";import{G as c,h as g,g as y}from"./gds-element-DJNCW3iR.js";import{t as f}from"./tokens.style-iX6aIK9m.js";import{s as a,g as u}from"./declarative-layout-mixins-CquYcIh8.js";const v=m`
  :host {
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--_size);
  }

  hr {
    border: 0;
    min-height: 1px;
    max-height: 1px;
    height: 1px;
    width: 100%;
    margin: unset;
    background: var(--_color, currentColor);
    box-sizing: border-box;
  }
`;var x=Object.defineProperty,_=Object.getOwnPropertyDescriptor,o=(t,s,i,p)=>{for(var r=p>1?void 0:p?_(s,i):s,l=t.length-1,n;l>=0;l--)(n=t[l])&&(r=(p?n(s,i,r):n(r))||r);return p&&r&&x(s,i,r),r};let e=class extends c{constructor(){super(...arguments),this.role=null}render(){return g`<hr role=${this.role||h} />`}};e.styles=[f,v];o([a({...u("border"),property:"--_color"})],e.prototype,"color",2);o([a({property:"--_size",valueTemplate:t=>`var(--gds-sys-space-${t})`})],e.prototype,"size",2);o([a()],e.prototype,"opacity",2);o([d()],e.prototype,"role",2);e=o([y("gds-divider")],e);export{e as G};
