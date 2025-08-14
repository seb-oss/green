import{m as d,l as g}from"./runtime-CNluP0A8.js";import{h as o,n as m,G as h,g as y}from"./gds-element-DKcDvDP5.js";import{e as c}from"./class-map-CXsQwv0r.js";import{t as f}from"./tokens.style-B4aufDLd.js";import{d as b,w as v,b as u}from"./declarative-layout-mixins-DHam8wVT.js";import{I as x}from"./chevron-right.component-Kg5tKDvy.js";import{i as w}from"./lit-element-Bx14lxc-.js";const z=w`
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
`;var P=Object.defineProperty,_=Object.getOwnPropertyDescriptor,p=(t,n,i,e)=>{for(var s=e>1?void 0:e?_(n,i):n,r=t.length-1,l;r>=0;r--)(l=t[r])&&(s=(e?l(n,i,s):l(s))||s);return e&&s&&P(n,i,s),s};let a=class extends b(v(u(h))){constructor(){super(...arguments),this.size="large",this.label=d("Breadcrumbs")}render(){const t=Array.from(this.children),n=t.length-2;return o`
      <nav
        role="navigation"
        aria-label=${this.label}
        class=${c({"size-small":this.size==="small"})}
      >
        <div class="mobile-return">
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </div>
        <ol>
          ${t.map((i,e)=>o`
              <li
                class=${c({"show-on-mobile":e===n})}
              >
                ${i}
              </li>
              ${e<t.length-1?o`<span class="separator" aria-hidden="true">/</span>`:null}
            `)}
        </ol>
      </nav>
    `}};a.styles=[f,z];p([m({type:String})],a.prototype,"size",2);p([m({type:String})],a.prototype,"label",2);a=p([y("gds-breadcrumbs",{dependsOn:[x]}),g()],a);export{a as G};
