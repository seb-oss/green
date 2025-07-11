import{m as p,l as c}from"./runtime-CNluP0A8.js";import{h as o,n as h,G as m,g as y}from"./gds-element-DKcDvDP5.js";import{e as g}from"./class-map-CXsQwv0r.js";import{t as f}from"./tokens.style-Khpz0lp_.js";import{d as v,w as u,b}from"./declarative-layout-mixins-D-CzJZ0x.js";import{a as x}from"./chevron-right.component-Be7TENGg.js";import{i as z}from"./lit-element-Bx14lxc-.js";const w=z`
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
      font-size: var(--gds-sys-text-size-detail-m);
      line-height: var(--gds-sys-text-line-height-detail-m);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    .size-small {
      font-size: var(--gds-sys-text-size-detail-s);
      line-height: var(--gds-sys-text-line-height-detail-s);
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
      color: var(--gds-sys-color-l3-content-secondary);
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
`;var P=Object.defineProperty,_=Object.getOwnPropertyDescriptor,d=(t,i,n,e)=>{for(var s=e>1?void 0:e?_(i,n):i,r=t.length-1,l;r>=0;r--)(l=t[r])&&(s=(e?l(i,n,s):l(s))||s);return e&&s&&P(i,n,s),s};let a=class extends v(u(b(m))){constructor(){super(...arguments),this.size="large",this.label=p("Breadcrumbs")}render(){const t=Array.from(this.children),i=t.length-2;return o`
      <nav
        role="navigation"
        aria-label=${this.label}
        class=${g({"size-small":this.size==="small"})}
      >
        <div class="mobile-return">
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </div>
        <ol>
          ${t.map((n,e)=>o`
              <li
                class=${g({"show-on-mobile":e===i})}
              >
                ${n}
              </li>
              ${e<t.length-1?o`<span class="separator" aria-hidden="true">/</span>`:null}
            `)}
        </ol>
      </nav>
    `}};a.styles=[f,w];d([h({type:String})],a.prototype,"size",2);d([h({type:String})],a.prototype,"label",2);a=d([y("gds-breadcrumbs",{dependsOn:[x]}),c()],a);export{a as G};
