import{t as i}from"./tokens.style-CFvqdzpw.js";import{s as m}from"./style-expression-property-w7JDbrjA.js";import{f as n}from"./declarative-layout-mixins-DZOZCYEp.js";import{g as _,h as u}from"./custom-element-scoping-BEGY3AqQ.js";import{G as g}from"./container-BS_5VP9k.js";import{i as d}from"./lit-element-C_s9q329.js";const f=d`
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
`;var v=Object.defineProperty,h=Object.getOwnPropertyDescriptor,l=(o,r,a,e)=>{for(var t=e>1?void 0:e?h(r,a):r,s=o.length-1,c;s>=0;s--)(c=o[s])&&(t=(e?c(r,a,t):c(t))||t);return e&&t&&v(r,a,t),t};let p=class extends g{constructor(){super(),this.display="grid",this.width="100%"}render(){return u`<slot></slot>`}};p.styles=[i,f];l([m({property:"--_c"})],p.prototype,"columns",2);l([m({...n,styleTemplate:(o,r)=>{const a=r[0];return`--_gap-column: ${r[1]||a}; --_gap-row: ${a};`}})],p.prototype,"gap",2);l([m({property:"--_col-width",valueTemplate:o=>`${isNaN(o)?o:`${o}px`}`})],p.prototype,"auto-columns",2);p=l([_("gds-grid")],p);
