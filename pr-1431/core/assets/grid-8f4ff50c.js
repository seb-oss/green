import{i as p,r as C}from"./lit-element-2a5e401f.js";import{n as m,g as k,G as x,h as O}from"./gds-element-24e794df.js";import{w as v}from"./watch-c4961afe.js";import{t as P}from"./tokens.style-f227efef.js";const R=p`
  @layer grid, grid.desktop, grid.tablet, grid.mobile, grid.span, grid.space, grid.align, grid.debug;

  @layer grid {
    :host {
      --_c: var(--gds-sys-grid-columns-12);
      --_grid-col: repeat(var(--_c), 1fr);
      --_grid-col-start: 1;
      --_grid-col-end: -1;
      --_gap-column: 0;
      --_gap-row: 0;
      display: grid;
      width: 100%;
      grid-template-columns: var(--_grid-col);
      grid-column-gap: var(--_gap-column);
      grid-row-gap: var(--_gap-row);
      padding: var(--_grid-padding);
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
  }

  /* Responsive */

  :host([columns]) {
    --_c: var(--_columns-desktop);
  }

  :host {
    --_gap-column: var(--_gap-desktop);
    --_gap-row: var(--_row-gap-desktop);
    --_grid-padding: var(--_padding-desktop);
    --_col-width: var(--_col-width-desktop);
  }

  @media only screen and (max-width: 768px) {
    :host([columns]) {
      --_c: var(--_columns-tablet);
    }

    :host {
      --_gap-column: var(--_gap-tablet);
      --_gap-row: var(--_row-gap-tablet);
      --_grid-padding: var(--_padding-tablet);
      --_col-width: var(--_col-width-tablet);
    }
  }

  @media only screen and (max-width: 425px) {
    :host([columns]) {
      --_c: var(--_columns-mobile);
    }

    :host {
      --_gap-column: var(--_gap-mobile);
      --_gap-row: var(--_row-gap-mobile);
      --_grid-padding: var(--_padding-mobile);
      --_col-width: var(--_col-width-mobile);
    }
  }
`;var A=Object.defineProperty,E=Object.getOwnPropertyDescriptor,d=(a,t,s,l)=>{for(var i=l>1?void 0:l?E(t,s):t,o=a.length-1,e;o>=0;o--)(e=a[o])&&(i=(l?e(t,s,i):e(i))||i);return l&&i&&A(t,s,i),i},y=(a,t,s)=>{if(!t.has(a))throw TypeError("Cannot "+s)},f=(a,t,s)=>(y(a,t,"read from private field"),s?s.call(a):t.get(a)),z=(a,t,s)=>{if(t.has(a))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(a):t.set(a,s)},B=(a,t,s,l)=>(y(a,t,"write to private field"),l?l.call(a,s):t.set(a,s),s),_;const D=/(?<l>l:([a-z0-9]+))?\s*(?<m>m:([a-z0-9]+))?\s*(?<s>s:([a-z0-9]+))?/;let r=class extends x{constructor(){super(...arguments),z(this,_,{varsColumn:p``,varsGap:p``,varsRowGap:p``,varsPadding:p``,varsAutoColumns:p``})}connectedCallback(){super.connectedCallback(),this._updateColumnVariables(),this._updateGapVariables(),this._updateRowGapVariables(),this._updatePaddingVariables(),this._updateAutoColumnsVariables()}_updateCSSVariables(a,t){let s;a in this&&(s=this[a]);const l=(s==null?void 0:s.match(D))||null;let i,o,e;const{l:n,m:g,s:u}=(l==null?void 0:l.groups)||{},b=(c,h,w)=>{const S=c?`var(--gds-sys-grid-gap-${c.split(":")[1]})`:void 0,G=h?`var(--gds-sys-grid-gap-${h.split(":")[1]})`:void 0,$=w?`var(--gds-sys-grid-gap-${w.split(":")[1]})`:void 0;return{desktop:S,tablet:G,mobile:$}};a==="columns"&&(this.columns&&!isNaN(Number(this.columns))?i=o=e=Number(this.columns):(i=n?n.split(":")[1]:void 0,o=g?g.split(":")[1]:void 0,e=u?u.split(":")[1]:void 0)),a==="gap"&&(this.gap&&!this.gap.includes(" ")?i=o=e=`var(--gds-sys-grid-gap-${this.gap})`:{desktop:i,tablet:o,mobile:e}=b(n,g,u)),a==="rowGap"&&(this.rowGap&&!this.rowGap.includes(" ")?i=o=e=`var(--gds-sys-grid-gap-${this.rowGap})`:{desktop:i,tablet:o,mobile:e}=b(n,g,u)),a==="padding"&&(this.padding&&!this.padding.includes(" ")?i=o=e=`var(--gds-sys-grid-gap-${this.padding})`:{desktop:i,tablet:o,mobile:e}=b(n,g,u)),a==="autoColumns"&&(this.autoColumns&&!this.autoColumns.includes(" ")?i=o=e=`${this.autoColumns}px`:(i=n?`${n.split(":")[1]}px`:void 0,o=g?`${g.split(":")[1]}px`:void 0,e=u?`${u.split(":")[1]}px`:void 0));const V=[{name:`${t}-desktop`,value:i},{name:`${t}-tablet`,value:o},{name:`${t}-mobile`,value:e}].filter(({value:c})=>c!==void 0).map(({name:c,value:h})=>`--_${c}: ${h};`).join(" ");B(this,_,{...f(this,_),[t]:p`
        ${C(V)}
      `}),this._dynamicStylesController.inject("grid-vars",p`
        :host {
          ${C(Object.values(f(this,_)).join(""))}
        }
      `)}_updateColumnVariables(){this._updateCSSVariables("columns","columns")}_updateGapVariables(){this._updateCSSVariables("gap","gap")}_updateRowGapVariables(){this._updateCSSVariables("rowGap","row-gap")}_updatePaddingVariables(){this._updateCSSVariables("padding","padding")}_updateAutoColumnsVariables(){this._updateCSSVariables("autoColumns","col-width")}render(){return O`<slot></slot>`}};_=new WeakMap;r.styles=[P,R];r.shadowRootOptions={mode:"open",delegatesFocus:!0};d([m({attribute:"columns",type:String})],r.prototype,"columns",2);d([m({attribute:"gap",type:String})],r.prototype,"gap",2);d([m({attribute:"row-gap",type:String})],r.prototype,"rowGap",2);d([m({attribute:"padding",type:String})],r.prototype,"padding",2);d([m({attribute:"auto-columns",type:String})],r.prototype,"autoColumns",2);d([v("columns")],r.prototype,"_updateColumnVariables",1);d([v("gap")],r.prototype,"_updateGapVariables",1);d([v("row-gap")],r.prototype,"_updateRowGapVariables",1);d([v("padding")],r.prototype,"_updatePaddingVariables",1);d([v("autoColumns")],r.prototype,"_updateAutoColumnsVariables",1);r=d([k("gds-grid")],r);
