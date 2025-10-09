import{i as m,E as h}from"./lit-element-Bx14lxc-.js";import{n as d}from"./Reflect-DJ7r0WLU.js";import{h as c,G as f,g}from"./gds-element-DTROifYq.js";import{t as y}from"./tokens.style-CyN6927s.js";import{w as v,s as a,f as u}from"./declarative-layout-mixins-DLWGR3wk.js";const _=m`
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
`;var x=Object.defineProperty,b=Object.getOwnPropertyDescriptor,o=(t,s,p,i)=>{for(var e=i>1?void 0:i?b(s,p):s,l=t.length-1,n;l>=0;l--)(n=t[l])&&(e=(i?n(s,p,e):n(e))||e);return i&&e&&x(s,p,e),e};let r=class extends v(f){constructor(){super(...arguments),this.role=null}render(){return c`<hr role=${this.role||h} />`}};r.styles=[y,_];o([a({...u("border"),property:"--_color"})],r.prototype,"color",2);o([a({property:"--_size",valueTemplate:t=>`var(--gds-sys-space-${t})`})],r.prototype,"size",2);o([a()],r.prototype,"opacity",2);o([d()],r.prototype,"role",2);r=o([g("gds-divider")],r);r.define();
