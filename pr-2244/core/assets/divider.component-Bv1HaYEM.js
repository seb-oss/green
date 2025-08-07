import{i as m,E as c}from"./lit-element-Bx14lxc-.js";import{n as d,G as u,h as v,g as y}from"./gds-element-DKcDvDP5.js";import{t as f}from"./tokens.style-BebDwfJu.js";import{s as n,g as h}from"./declarative-layout-mixins-DHam8wVT.js";const g=m`
  :host {
    display: block;
  }

  hr {
    border-radius: 200px;
    background: currentColor;
    font-size: 0;
    border: 0;
    height: 1px;
    width: 100%;
    margin-top: calc((var(--_size, 0) / 2) - (1px / 2));
    margin-bottom: calc((var(--_size, 0) / 2) - (1px / 2));
  }
`;var _=Object.defineProperty,b=Object.getOwnPropertyDescriptor,o=(s,t,l,p)=>{for(var r=p>1?void 0:p?b(t,l):t,a=s.length-1,i;a>=0;a--)(i=s[a])&&(r=(p?i(t,l,r):i(r))||r);return p&&r&&_(t,l,r),r};let e=class extends u{constructor(){super(...arguments),this.role=null}render(){return v`<hr role=${this.role||c} />`}};e.styles=[f,g];o([n(h("border"))],e.prototype,"color",2);o([n({property:"--_size",valueTemplate:s=>`var(--gds-sys-space-${s})`})],e.prototype,"size",2);o([n()],e.prototype,"opacity",2);o([d()],e.prototype,"role",2);e=o([y("gds-divider")],e);export{e as G};
