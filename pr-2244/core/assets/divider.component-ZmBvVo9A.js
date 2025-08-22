import{i as m,E as h}from"./lit-element-Bx14lxc-.js";import{n as d}from"./Reflect-DJ7r0WLU.js";import{G as c,h as f,g}from"./gds-element-DJNCW3iR.js";import{t as y}from"./tokens.style-iX6aIK9m.js";import{s as n,g as u}from"./declarative-layout-mixins-CquYcIh8.js";const v=m`
  :host {
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--_size);
  }

  hr {
    background: currentColor;
    border: 0;
    min-height: 1px;
    max-height: 1px;
    height: 1px;
    width: 100%;
  }
`;var x=Object.defineProperty,_=Object.getOwnPropertyDescriptor,t=(o,s,i,p)=>{for(var r=p>1?void 0:p?_(s,i):s,l=o.length-1,a;l>=0;l--)(a=o[l])&&(r=(p?a(s,i,r):a(r))||r);return p&&r&&x(s,i,r),r};let e=class extends c{constructor(){super(...arguments),this.role=null}render(){return f`<hr role=${this.role||h} />`}};e.styles=[y,v];t([n(u("border"))],e.prototype,"color",2);t([n({property:"--_size",valueTemplate:o=>`var(--gds-sys-space-${o})`})],e.prototype,"size",2);t([n()],e.prototype,"opacity",2);t([d()],e.prototype,"role",2);e=t([g("gds-divider")],e);export{e as G};
