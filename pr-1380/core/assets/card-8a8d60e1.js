import{g,h as l}from"./gds-element-54cd6e2a.js";import{t as m}from"./tokens.style-880811e7.js";import{s as b}from"./style-expression-property-89161d08.js";import{G as h}from"./container-11dcf82b.js";import{i as n}from"./lit-element-71e04f06.js";const f=n`
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
`;var w=Object.defineProperty,i=Object.getOwnPropertyDescriptor,d=(s,x,a,r)=>{for(var p=r>1?void 0:r?i(x,a):x,e=s.length-1,t;e>=0;e--)(t=s[e])&&(p=(r?t(x,a,p):t(p))||p);return r&&p&&w(x,a,p),p};let o=class extends h{render(){return l`<slot></slot>`}};o.styles=[m,f];d([b({property:"box-shadow",valueTemplate:s=>`var(--gds-shadow-${s})`})],o.prototype,"shadow",2);o=d([g("gds-card")],o);
