import{t as i}from"./tokens.style-RalixZsd.js";import{s as c}from"./style-expression-property-D0nhDdjH.js";import{g as n,h as _}from"./custom-element-scoping-CpYtbs9r.js";import{G as u}from"./container-C3DkMOGl.js";import{i as g}from"./lit-element-C_s9q329.js";const d=g`
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
`;var v=Object.defineProperty,h=Object.getOwnPropertyDescriptor,e=(o,r,p,l)=>{for(var a=l>1?void 0:l?h(r,p):r,s=o.length-1,m;s>=0;s--)(m=o[s])&&(a=(l?m(r,p,a):m(a))||a);return l&&a&&v(r,p,a),a};let t=class extends u{constructor(){super(),this.display="grid",this.width="100%"}render(){return _`<slot></slot>`}};t.styles=[i,d];e([c({property:"--_c",valueTemplate:o=>o})],t.prototype,"columns",2);e([c({styleTemplate:(o,r)=>{const p=r[0];return`--_gap-column: ${r[1]||p}; --_gap-row: ${p};`}})],t.prototype,"gap",2);e([c({property:"--_col-width",valueTemplate:o=>`${o}px`})],t.prototype,"auto-columns",2);e([c({valueTemplate:o=>`${o}`})],t.prototype,"grid-column",2);e([c({valueTemplate:o=>`${o}`})],t.prototype,"grid-row",2);t=e([n("gds-grid")],t);
