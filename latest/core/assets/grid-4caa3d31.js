import{g as n,G as _,h as i}from"./gds-element-86064462.js";import{t as u}from"./tokens.style-b5b8efd2.js";import{s as c}from"./style-expression-property-a96dbce8.js";import{i as g}from"./lit-element-1d72f0ce.js";const d=g`
  :host {
    --_c: 12;
    --_grid-col: repeat(var(--_c), 1fr);
    display: grid;
    width: 100%;
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
`;var v=Object.defineProperty,w=Object.getOwnPropertyDescriptor,l=(t,o,p,e)=>{for(var r=e>1?void 0:e?w(o,p):o,s=t.length-1,m;s>=0;s--)(m=t[s])&&(r=(e?m(o,p,r):m(r))||r);return e&&r&&v(o,p,r),r};let a=class extends _{render(){return i`<slot></slot>`}};a.styles=[u,d];l([c({property:"--_c",valueTemplate:t=>t})],a.prototype,"columns",2);l([c({styleTemplate:(t,o)=>{const p=o[0],e=o[1]||p;return`--_gap-column: ${p}; --_gap-row: ${e};`}})],a.prototype,"gap",2);l([c()],a.prototype,"padding",2);l([c({attribute:"auto-columns",property:"--_col-width",valueTemplate:t=>`${t}px`})],a.prototype,"autoColumns",2);a=l([n("gds-grid")],a);
