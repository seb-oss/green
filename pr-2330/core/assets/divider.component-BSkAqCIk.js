import{i as h,E as m}from"./lit-element-Bx14lxc-.js";import{n as d,G as c,h as g,g as y}from"./gds-element-DKcDvDP5.js";import{t as f}from"./tokens.style-Bfj-148u.js";import{s as n,g as u}from"./declarative-layout-mixins-DHam8wVT.js";const v=h`
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
`;var x=Object.defineProperty,_=Object.getOwnPropertyDescriptor,t=(o,s,i,p)=>{for(var e=p>1?void 0:p?_(s,i):s,l=o.length-1,a;l>=0;l--)(a=o[l])&&(e=(p?a(s,i,e):a(e))||e);return p&&e&&x(s,i,e),e};let r=class extends c{constructor(){super(...arguments),this.role=null}render(){return g`<hr role=${this.role||m} />`}};r.styles=[f,v];t([n(u("border"))],r.prototype,"color",2);t([n({property:"--_size",valueTemplate:o=>`var(--gds-sys-space-${o})`})],r.prototype,"size",2);t([n()],r.prototype,"opacity",2);t([d()],r.prototype,"role",2);r=t([y("gds-divider")],r);export{r as G};
