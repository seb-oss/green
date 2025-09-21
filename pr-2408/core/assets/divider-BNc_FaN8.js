import{i as m,E as d}from"./lit-element-Bx14lxc-.js";import{n as h}from"./Reflect-DJ7r0WLU.js";import{G as c,h as f,g}from"./gds-element-DTROifYq.js";import{t as y}from"./tokens.style-CJKwYBen.js";import{s as a,f as v}from"./declarative-layout-mixins-XrCARJjW.js";const u=m`
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
`;var _=Object.defineProperty,x=Object.getOwnPropertyDescriptor,o=(t,s,i,p)=>{for(var e=p>1?void 0:p?x(s,i):s,l=t.length-1,n;l>=0;l--)(n=t[l])&&(e=(p?n(s,i,e):n(e))||e);return p&&e&&_(s,i,e),e};let r=class extends c{constructor(){super(...arguments),this.role=null}render(){return f`<hr role=${this.role||d} />`}};r.styles=[y,u];o([a({...v("border"),property:"--_color"})],r.prototype,"color",2);o([a({property:"--_size",valueTemplate:t=>`var(--gds-sys-space-${t})`})],r.prototype,"size",2);o([a()],r.prototype,"opacity",2);o([h()],r.prototype,"role",2);r=o([g("gds-divider")],r);r.define();
