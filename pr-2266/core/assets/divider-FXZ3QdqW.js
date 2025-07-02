import{i as m,E as c}from"./lit-element-Bx14lxc-.js";import{n as d,G as f,h as u,g as v}from"./gds-element-DKcDvDP5.js";import{t as y}from"./tokens.style-rtCEChfV.js";import{s as n,g as h}from"./declarative-layout-mixins-Bw_LIblW.js";const g=m`
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
`;var _=Object.defineProperty,b=Object.getOwnPropertyDescriptor,o=(s,t,l,p)=>{for(var e=p>1?void 0:p?b(t,l):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(e=(p?a(t,l,e):a(e))||e);return p&&e&&_(t,l,e),e};let r=class extends f{constructor(){super(...arguments),this.role=null}render(){return u`<hr role=${this.role||c} />`}};r.styles=[y,g];o([n(h("border"))],r.prototype,"color",2);o([n({property:"--_size",valueTemplate:s=>`var(--gds-sys-space-${s})`})],r.prototype,"size",2);o([n()],r.prototype,"opacity",2);o([d()],r.prototype,"role",2);r=o([v("gds-divider")],r);r.define();
