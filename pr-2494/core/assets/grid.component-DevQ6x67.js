import{t as i}from"./tokens.style-CA5ADGwW.js";import{s as m,f as n}from"./declarative-layout-mixins-C4FFYA_h.js";import{h as _,g}from"./gds-element-DTROifYq.js";import{G as u}from"./div.component-CsVib3S8.js";import{i as d}from"./lit-element-Bx14lxc-.js";const v=d`
  :host {
    --_c: 12;
    --_grid-col: repeat(var(--_c), 1fr);
    width: 100%;
    display: grid;
    grid-template-columns: var(--_grid-col);
    grid-column-gap: var(--_gap-column, 0px);
    grid-row-gap: var(--_gap-row, 0px);
    box-sizing: border-box;
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
`;var f=Object.defineProperty,w=Object.getOwnPropertyDescriptor,l=(o,r,a,e)=>{for(var t=e>1?void 0:e?w(r,a):r,c=o.length-1,s;c>=0;c--)(s=o[c])&&(t=(e?s(r,a,t):s(t))||t);return e&&t&&f(r,a,t),t};let p=class extends u{render(){return _`<slot></slot>`}};p.styles=[i,v];l([m({property:"--_c"})],p.prototype,"columns",2);l([m({...n,styleTemplate:(o,r)=>{const a=r[0];return`--_gap-column: ${r[1]||a}; --_gap-row: ${a};`}})],p.prototype,"gap",2);l([m({reflect:!0,property:"--_col-width",valueTemplate:o=>`${isNaN(o)?o:`${o}px`}`})],p.prototype,"auto-columns",2);p=l([g("gds-grid")],p);export{p as G};
