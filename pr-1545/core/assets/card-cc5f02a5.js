import{g,h as n}from"./gds-element-54cd6e2a.js";import{t as m}from"./tokens.style-5dcc1eb8.js";import{s as l}from"./style-expression-property-89161d08.js";import{G as b}from"./flex-521a9c9a.js";import{i}from"./lit-element-71e04f06.js";const c=i`
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
`;var h=Object.defineProperty,y=Object.getOwnPropertyDescriptor,a=(p,r,o,s)=>{for(var t=s>1?void 0:s?y(r,o):r,x=p.length-1,d;x>=0;x--)(d=p[x])&&(t=(s?d(r,o,t):d(t))||t);return s&&t&&h(r,o,t),t};let e=class extends b{render(){return n`<slot></slot>`}};e.styles=[m,c];a([l({property:"box-shadow",valueTemplate:p=>`var(--gds-shadow-${p})`})],e.prototype,"shadow",2);a([l({valueTemplate:p=>{const[r,o]=p.split("/");return`var(--gds-space-${r}) solid ${o?`var(--gds-sys-color-${o})`:"currentColor"}`},styleTemplate:(p,r)=>{const o=r[0],s=r.length>1?r[1]:o,t=r.length>2?r[2]:o,x=r.length>3?r[3]:o;return`border-top: ${o}; border-right: ${s}; border-bottom: ${t}; border-left: ${x};`}})],e.prototype,"border",2);a([l({property:"border-radius",valueTemplate:p=>`var(--gds-space-${p})`})],e.prototype,"radius",2);a([l({property:"backdrop-filter",valueTemplate:p=>`blur(${p})`})],e.prototype,"filter",2);a([l({property:"mask-image",valueTemplate:p=>`linear-gradient(to ${p}, currentColor 40%, transparent)`})],e.prototype,"mask",2);e=a([g("gds-card")],e);
