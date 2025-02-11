import{t as n}from"./tokens.style-CFvqdzpw.js";import{s as m}from"./style-expression-property-w7JDbrjA.js";import{G as i,f as _}from"./container-PwjDxieS.js";import{g as u,h as g}from"./custom-element-scoping-BEGY3AqQ.js";import{i as d}from"./lit-element-C_s9q329.js";const v=d`
  :host {
    --_c: 12;
    --_grid-col: repeat(var(--_c), 1fr);
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
`;var f=Object.defineProperty,h=Object.getOwnPropertyDescriptor,l=(o,r,a,e)=>{for(var t=e>1?void 0:e?h(r,a):r,s=o.length-1,c;s>=0;s--)(c=o[s])&&(t=(e?c(r,a,t):c(t))||t);return e&&t&&f(r,a,t),t};let p=class extends i{constructor(){super(),this.display="grid",this.width="100%"}render(){return g`<slot></slot>`}};p.styles=[n,v];l([m({property:"--_c"})],p.prototype,"columns",2);l([m({..._,styleTemplate:(o,r)=>{const a=r[0];return`--_gap-column: ${r[1]||a}; --_gap-row: ${a};`}})],p.prototype,"gap",2);l([m({property:"--_col-width",valueTemplate:o=>`${isNaN(o)?o:`${o}px`}`})],p.prototype,"auto-columns",2);p=l([u("gds-grid")],p);
