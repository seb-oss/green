import{g as x,h as b}from"./gds-element-54cd6e2a.js";import{t as f}from"./tokens.style-ae076d02.js";import{s as d}from"./style-expression-property-89161d08.js";import{G as g}from"./container-cdd6d93b.js";import{i}from"./lit-element-71e04f06.js";const c=i`
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

  :host([variant]) {
    display: flex;
    padding: 40px;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--_button);
  }

  :host([variant='midnight']) {
    --_color: #152b41;
    background: var(--_color);
    color: color-mix(in srgb, var(--_color) 10%, #ffffff);
    --_button: #1b3853;
  }

  :host([variant='frost']) {
    background: #eaf0f7;
    color: #000;
    --_button: #d3dfef;
  }

  :host([variant='plum']) {
    background: #372b40;
    color: #fff;
    --_button: #473752;
  }

  :host([variant='silver']) {
    background: #e2e2e2;
    color: #fff;
    --_button: #202020;
  }

  :host([variant='mist']) {
    background: #eee;
    color: #000;
    --_button: #e2e2e2;
  }

  :host([variant='pearl']) {
    background: #f2efeb;
    color: #000;
    --_button: #e4ded5;
  }

  :host([variant='outlined']) {
    background: #fff;
    color: #fff;
    border: 1px solid #eee;
    --_button: #000;
  }
`;var m=Object.defineProperty,h=Object.getOwnPropertyDescriptor,a=(o,r,e,s)=>{for(var t=s>1?void 0:s?h(r,e):r,n=o.length-1,l;n>=0;n--)(l=o[n])&&(t=(s?l(r,e,t):l(t))||t);return s&&t&&m(r,e,t),t};let p=class extends g{render(){return b`<slot></slot>`}};p.styles=[f,c];a([d({property:"overflow",valueTemplate:o=>o})],p.prototype,"overflow",2);a([d({property:"box-shadow",valueTemplate:o=>`var(--gds-shadow-${o})`})],p.prototype,"shadow",2);a([d({property:"border-radius",valueTemplate:o=>`var(--gds-space-${o})`})],p.prototype,"radius",2);a([d({property:"background",valueTemplate:o=>`var(--gds-sys-color-${o})`})],p.prototype,"background",2);a([d({valueTemplate:o=>`1px solid ${o}`,styleTemplate:(o,r)=>{const e=r[0],s=r.length>1?r[1]:e,t=r.length>2?r[2]:e,n=r.length>3?r[3]:e;return`border-top: ${e}; border-right: ${s}; border-bottom: ${t}; border-left: ${n};`}})],p.prototype,"border",2);a([d()],p.prototype,"padding",2);p=a([x("gds-card")],p);
