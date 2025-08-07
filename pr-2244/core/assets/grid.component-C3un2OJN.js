import{t as _}from"./tokens.style-BebDwfJu.js";import{s as m,f as i}from"./declarative-layout-mixins-DHam8wVT.js";import{h as n,g}from"./gds-element-DKcDvDP5.js";import{G as u}from"./div.component-DV4jT0Ib.js";import{i as d}from"./lit-element-Bx14lxc-.js";const v=d`
  :host {
    --_c: 12;
    --_grid-col: repeat(var(--_c), 1fr);
    width: 100%;
    display: grid;
    grid-template-columns: var(--_grid-col);
    grid-column-gap: var(--_gap-column, 0px);
    grid-row-gap: var(--_gap-row, 0px);
  }

  :host([auto-columns]) {
    --_col-count: var(--_c, 0);
    --_gap-count: calc(var(--_col-count) - 1);
    --_total-gap-width: calc(var(--_gap-count) * var(--_gap-column, 0px));
    --_col-width-max: calc(
      (100% - var(--_total-gap-width)) / var(--_col-count)
    );
    grid-template-columns: repeat(
      auto-fill,
      minmax(max(var(--_col-width), var(--_col-width-max)), 1fr)
    );
  }
`;var f=Object.defineProperty,w=Object.getOwnPropertyDescriptor,e=(o,r,a,l)=>{for(var t=l>1?void 0:l?w(r,a):r,c=o.length-1,s;c>=0;c--)(s=o[c])&&(t=(l?s(r,a,t):s(t))||t);return l&&t&&f(r,a,t),t};let p=class extends u{render(){return n`<slot></slot>`}};p.styles=[_,v];e([m({property:"--_c"})],p.prototype,"columns",2);e([m({...i,styleTemplate:(o,r)=>{const a=r[0];return`--_gap-column: ${r[1]||a}; --_gap-row: ${a};`}})],p.prototype,"gap",2);e([m({property:"--_col-width",valueTemplate:o=>`${isNaN(o)?o:`${o}px`}`})],p.prototype,"auto-columns",2);p=e([g("gds-grid")],p);export{p as G};
