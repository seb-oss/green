import{g as n,h as i}from"./gds-element-86064462.js";import{G as _}from"./container-80cf1c56.js";import{t as u}from"./tokens.style-b5b8efd2.js";import{s as m}from"./style-expression-property-cbf85b4b.js";import{i as g}from"./lit-element-1d72f0ce.js";const d=g`
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
`;var v=Object.defineProperty,h=Object.getOwnPropertyDescriptor,l=(t,o,a,p)=>{for(var r=p>1?void 0:p?h(o,a):o,s=t.length-1,c;s>=0;s--)(c=t[s])&&(r=(p?c(o,a,r):c(r))||r);return p&&r&&v(o,a,r),r};let e=class extends _{constructor(){super(),this.display="grid",this.width="100%"}render(){return i`<slot></slot>`}};e.styles=[u,d];l([m({property:"--_c",valueTemplate:t=>t})],e.prototype,"columns",2);l([m({styleTemplate:(t,o)=>{const a=o[0],p=o[1]||a;return`--_gap-column: ${a}; --_gap-row: ${p};`}})],e.prototype,"gap",2);l([m({attribute:"auto-columns",property:"--_col-width",valueTemplate:t=>`${t}px`})],e.prototype,"autoColumns",2);e=l([n("gds-grid")],e);
