import{i as m,E as h}from"./lit-element-Bx14lxc-.js";import{n as d}from"./Reflect-DJ7r0WLU.js";import{h as g,G as c,g as y}from"./gds-element-DTROifYq.js";import{t as f}from"./tokens.style-CQAfIFlK.js";import{w as v,s as n,g as u}from"./declarative-layout-mixins-C4FFYA_h.js";const x=m`
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
`;var _=Object.defineProperty,b=Object.getOwnPropertyDescriptor,o=(t,s,i,p)=>{for(var r=p>1?void 0:p?b(s,i):s,l=t.length-1,a;l>=0;l--)(a=t[l])&&(r=(p?a(s,i,r):a(r))||r);return p&&r&&_(s,i,r),r};let e=class extends v(c){constructor(){super(...arguments),this.role=null}render(){return g`<hr role=${this.role||h} />`}};e.styles=[f,x];o([n({...u("border"),property:"--_color"})],e.prototype,"color",2);o([n({property:"--_size",valueTemplate:t=>`var(--gds-sys-space-${t})`})],e.prototype,"size",2);o([n()],e.prototype,"opacity",2);o([d()],e.prototype,"role",2);e=o([y("gds-divider")],e);export{e as G};
