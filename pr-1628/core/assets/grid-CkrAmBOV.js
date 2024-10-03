import{g as n,h as i}from"./gds-element-QykLKB9o.js";import{G as _}from"./container-CcASHre0.js";import{t as u}from"./tokens.style-DuOE18tp.js";import{s as m}from"./style-expression-property-B8dCtxc-.js";import{i as g}from"./lit-element-BoQqPHl6.js";const d=g`
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
`;var v=Object.defineProperty,h=Object.getOwnPropertyDescriptor,l=(r,t,a,p)=>{for(var o=p>1?void 0:p?h(t,a):t,c=r.length-1,s;c>=0;c--)(s=r[c])&&(o=(p?s(t,a,o):s(o))||o);return p&&o&&v(t,a,o),o};let e=class extends _{constructor(){super(),this.display="grid",this.width="100%"}render(){return i`<slot></slot>`}};e.styles=[u,d];l([m({property:"--_c",valueTemplate:r=>r})],e.prototype,"columns",2);l([m({styleTemplate:(r,t)=>{const a=t[0],p=t[1]||a;return`--_gap-column: ${a}; --_gap-row: ${p};`}})],e.prototype,"gap",2);l([m({property:"--_col-width",valueTemplate:r=>`${r}px`})],e.prototype,"auto-columns",2);e=l([n("gds-grid")],e);
