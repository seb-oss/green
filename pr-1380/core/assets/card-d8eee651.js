import{g,G as b,h as m}from"./gds-element-4f5906f2.js";import{t as n}from"./tokens.style-6bc9b0c8.js";import{s as a}from"./style-expression-property-0e3e1bae.js";import{i as h}from"./lit-element-2a5e401f.js";const y=h`
  :host {
    --gds-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1),
      0px 0px 1px 0px rgba(0, 0, 0, 0.1);
    --gds-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
      0px 1px 2px 0px rgba(0, 0, 0, 0.06);
    --gds-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1),
      0px 2px 4px -2px rgba(0, 0, 0, 0.06);
    --gds-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08),
      0px 4px 6px -2px rgba(0, 0, 0, 0.03);
    --gds-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08),
      0px 8px 8px -4px rgba(0, 0, 0, 0.03);
    display: block;
  }
`;var c=Object.defineProperty,f=Object.getOwnPropertyDescriptor,s=(p,r,e,x)=>{for(var o=x>1?void 0:x?f(r,e):r,d=p.length-1,l;d>=0;d--)(l=p[d])&&(o=(x?l(r,e,o):l(o))||o);return x&&o&&c(r,e,o),o};let t=class extends b{render(){return m`<slot></slot>`}};t.styles=[n,y];s([a({property:"overflow",valueTemplate:p=>p})],t.prototype,"overflow",2);s([a({property:"box-shadow",valueTemplate:p=>`var(--gds-shadow-${p})`})],t.prototype,"shadow",2);s([a({property:"border-radius",valueTemplate:p=>`var(--gds-space-${p})`})],t.prototype,"radius",2);s([a({property:"background",valueTemplate:p=>`var(--gds-sys-color-${p})`})],t.prototype,"background",2);s([a({valueTemplate:p=>`1px solid ${p}`,styleTemplate:(p,r)=>{const e=r[0],x=r.length>1?r[1]:e,o=r.length>2?r[2]:e,d=r.length>3?r[3]:e;return`border-top: ${e}; border-right: ${x}; border-bottom: ${o}; border-left: ${d};`}})],t.prototype,"border",2);s([a()],t.prototype,"padding",2);t=s([g("gds-card")],t);
