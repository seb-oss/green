import{t as m}from"./tokens.style-CA5ADGwW.js";import{s as i,g as n}from"./declarative-layout-mixins-DFPXvh_g.js";import{h as _,g}from"./gds-element-DTROifYq.js";import{G as d}from"./div.component-DTdhfIq2.js";import{i as u}from"./lit-element-Bx14lxc-.js";const v=u`
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
`;var f=Object.defineProperty,w=Object.getOwnPropertyDescriptor,l=(o,r,p,e)=>{for(var t=e>1?void 0:e?w(r,p):r,c=o.length-1,s;c>=0;c--)(s=o[c])&&(t=(e?s(r,p,t):s(t))||t);return e&&t&&f(r,p,t),t};let a=class extends d{render(){return _`<slot></slot>`}};a.styles=[m,v];l([i({property:"--_c"})],a.prototype,"columns",2);l([i({...n,styleTemplate:(o,r)=>{const p=r[0];return`--_gap-column: ${r[1]||p}; --_gap-row: ${p};`}})],a.prototype,"gap",2);l([i({reflect:!0,property:"--_col-width",valueTemplate:o=>`${isNaN(o)?o:`${o}px`}`})],a.prototype,"auto-columns",2);a=l([g("gds-grid")],a);a.define();
