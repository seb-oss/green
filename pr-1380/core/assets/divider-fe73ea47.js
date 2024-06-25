import{g as m,G as n,h as v}from"./gds-element-24e794df.js";import{t as y}from"./tokens.style-6bc9b0c8.js";import{s as c}from"./style-expression-property-6dbce61b.js";import{i as d}from"./lit-element-2a5e401f.js";const _=d`
  :host {
    display: contents;
  }

  hr {
    border-radius: 200px;
    background: currentColor;
    font-size: 0;
    border: 0;
    height: 1px;
    width: 100%;
    margin-top: calc((var(--_size) / 2) - (1px / 2));
    margin-bottom: calc((var(--_size) / 2) - (1px / 2));
    opacity: var(--_opacity, 1);
  }
`;var f=Object.defineProperty,u=Object.getOwnPropertyDescriptor,p=(r,o,a,s)=>{for(var e=s>1?void 0:s?u(o,a):o,i=r.length-1,l;i>=0;i--)(l=r[i])&&(e=(s?l(o,a,e):l(e))||e);return s&&e&&f(o,a,e),e};let t=class extends n{render(){return v`<hr />`}};t.styles=[y,_];p([c({property:"color",valueTemplate:r=>`var(--gds-sys-color-${r})`})],t.prototype,"color",2);p([c({property:"--_size",valueTemplate:r=>`var(--gds-space-${r})`})],t.prototype,"size",2);p([c({property:"--_opacity",valueTemplate:r=>r})],t.prototype,"opacity",2);t=p([m("gds-divider")],t);
