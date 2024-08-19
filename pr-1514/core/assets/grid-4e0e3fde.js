import{g as n,G as _,h as i}from"./gds-element-54cd6e2a.js";import{s as c}from"./style-expression-property-89161d08.js";import{i as u}from"./lit-element-71e04f06.js";const g=u`
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
`;var d=Object.defineProperty,v=Object.getOwnPropertyDescriptor,e=(t,o,p,l)=>{for(var r=l>1?void 0:l?v(o,p):o,s=t.length-1,m;s>=0;s--)(m=t[s])&&(r=(l?m(o,p,r):m(r))||r);return l&&r&&d(o,p,r),r};let a=class extends _{render(){return i`<slot></slot>`}};a.styles=[g];e([c({property:"--_c",valueTemplate:t=>t})],a.prototype,"columns",2);e([c({styleTemplate:(t,o)=>{const p=o[0],l=o[1]||p;return`--_gap-column: ${p}; --_gap-row: ${l};`}})],a.prototype,"gap",2);e([c()],a.prototype,"padding",2);e([c({attribute:"auto-columns",property:"--_col-width",valueTemplate:t=>`${t}px`})],a.prototype,"autoColumns",2);a=e([n("gds-grid")],a);
