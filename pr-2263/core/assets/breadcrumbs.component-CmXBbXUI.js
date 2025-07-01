import{m as d}from"./runtime-BL31MtW8.js";import{l as g}from"./localized-decorator-DtmrKsyB.js";import{i as h,x as o}from"./lit-element-Bx14lxc-.js";import{n as c,G as y,g as f}from"./gds-element-DKcDvDP5.js";import{e as m}from"./if-defined-BAXgs-ZI.js";import{t as b}from"./tokens.style-C9n1Y52h.js";import{w as v,a as u,b as x}from"./declarative-layout-mixins-Bw_LIblW.js";import{a as w}from"./chevron-right.component-DJ7RRRvj.js";const z=h`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      container-type: inline-size;
    }

    nav {
      display: flex;
      align-items: center;
      width: max-content;
      gap: var(--gds-sys-space-s);
      font: var(--gds-sys-text-detail-book-m);
    }

    .size-small {
      font: var(--gds-sys-text-detail-book-s);
      gap: var(--gds-sys-space-xs);
    }

    .size-small ol {
      gap: var(--gds-sys-space-xs);
    }

    ol {
      display: flex;
      align-items: center;
      gap: var(--gds-sys-space-s);
      list-style: none;
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start: 0;
      height: max-content;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      margin: unset;
      padding: unset;
      height: max-content;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    li:last-child {
      color: var(--gds-sys-color-content-02);
    }

    .separator {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .mobile-return {
      display: none;
      align-items: center;
      justify-content: center;
    }

    @container (max-width: 400px) {
      .mobile-return {
        display: flex;
      }

      li {
        display: none;
      }

      .show-on-mobile {
        display: flex;
      }

      .separator {
        display: none;
      }
    }
  }
`;var P=Object.defineProperty,_=Object.getOwnPropertyDescriptor,p=(t,i,n,e)=>{for(var s=e>1?void 0:e?_(i,n):i,a=t.length-1,l;a>=0;a--)(l=t[a])&&(s=(e?l(i,n,s):l(s))||s);return e&&s&&P(i,n,s),s};let r=class extends v(u(x(y))){constructor(){super(...arguments),this.size="large",this.label=d("Breadcrumbs")}render(){const t=Array.from(this.children),i=t.length-2;return o`
      <nav
        role="navigation"
        aria-label=${this.label}
        class=${m({"size-small":this.size==="small"})}
      >
        <div class="mobile-return">
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </div>
        <ol>
          ${t.map((n,e)=>o`
              <li
                class=${m({"show-on-mobile":e===i})}
              >
                ${n}
              </li>
              ${e<t.length-1?o`<span class="separator" aria-hidden="true">/</span>`:null}
            `)}
        </ol>
      </nav>
    `}};r.styles=[b,z];p([c({type:String})],r.prototype,"size",2);p([c({type:String})],r.prototype,"label",2);r=p([f("gds-breadcrumbs",{dependsOn:[w]}),g()],r);export{r as G};
