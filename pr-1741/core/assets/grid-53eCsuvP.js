import{t as n}from"./tokens.style-Drw-Y0fR.js";import{s as m}from"./style-expression-property-C9va4vna.js";import{g as i,h as _}from"./custom-element-scoping-77kCHgjl.js";import{G as u}from"./container-CjZ50xAE.js";import{i as g}from"./lit-element-C_s9q329.js";const d=g`
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
`;var v=Object.defineProperty,h=Object.getOwnPropertyDescriptor,e=(o,r,a,l)=>{for(var t=l>1?void 0:l?h(r,a):r,c=o.length-1,s;c>=0;c--)(s=o[c])&&(t=(l?s(r,a,t):s(t))||t);return l&&t&&v(r,a,t),t};let p=class extends u{constructor(){super(),this.display="grid",this.width="100%"}render(){return _`<slot></slot>`}};p.styles=[n,d];e([m({property:"--_c",valueTemplate:o=>o})],p.prototype,"columns",2);e([m({styleTemplate:(o,r)=>{const a=r[0];return`--_gap-column: ${r[1]||a}; --_gap-row: ${a};`}})],p.prototype,"gap",2);e([m({property:"--_col-width",valueTemplate:o=>`${o}px`})],p.prototype,"auto-columns",2);p=e([i("gds-grid")],p);
