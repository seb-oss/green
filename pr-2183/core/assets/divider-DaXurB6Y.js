import{i as c,E as d}from"./lit-element-Bx14lxc-.js";import{n as m,G as v,h as y,g as f}from"./custom-element-scoping-CNGU1oQ0.js";import{t as h}from"./tokens.style-DQsNuKSy.js";import{s as n,g as u}from"./declarative-layout-mixins-D1Y0gyd7.js";const g=c`
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
`;var _=Object.defineProperty,b=Object.getOwnPropertyDescriptor,o=(t,s,l,p)=>{for(var e=p>1?void 0:p?b(s,l):s,i=t.length-1,a;i>=0;i--)(a=t[i])&&(e=(p?a(s,l,e):a(e))||e);return p&&e&&_(s,l,e),e};let r=class extends v{constructor(){super(...arguments),this.level="2",this.role=null}render(){return y`<hr role=${this.role||d} />`}};r.styles=[h,g];o([m()],r.prototype,"level",2);o([n(u("border"))],r.prototype,"color",2);o([n({property:"--_size",valueTemplate:t=>`var(--gds-sys-space-${t})`})],r.prototype,"size",2);o([n()],r.prototype,"opacity",2);o([m()],r.prototype,"role",2);r=o([f("gds-divider")],r);r.define();
