import{g as n,h as i}from"./gds-element-DjAhZX8m.js";import{G as _}from"./container-hdF8iWI7.js";import{t as u}from"./tokens.style-B_4vLAFn.js";import{s as m}from"./style-expression-property-aSqd3nq4.js";import{i as g}from"./lit-element-C_s9q329.js";const d=g`
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
`;var v=Object.defineProperty,h=Object.getOwnPropertyDescriptor,e=(o,r,a,l)=>{for(var t=l>1?void 0:l?h(r,a):r,c=o.length-1,s;c>=0;c--)(s=o[c])&&(t=(l?s(r,a,t):s(t))||t);return l&&t&&v(r,a,t),t};let p=class extends _{constructor(){super(),this.display="grid",this.width="100%"}render(){return i`<slot></slot>`}};p.styles=[u,d];e([m({property:"--_c",valueTemplate:o=>o})],p.prototype,"columns",2);e([m({styleTemplate:(o,r)=>{const a=r[0];return`--_gap-column: ${r[1]||a}; --_gap-row: ${a};`}})],p.prototype,"gap",2);e([m({property:"--_col-width",valueTemplate:o=>`${o}px`})],p.prototype,"auto-columns",2);p=e([n("gds-grid")],p);
