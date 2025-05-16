import{m as c}from"./runtime-BL31MtW8.js";import{l as d}from"./localized-decorator-DtmrKsyB.js";import{i as h,x as o}from"./lit-element-Bx14lxc-.js";import{n as m,G as y,g as f}from"./custom-element-scoping-CNGU1oQ0.js";import{e as g}from"./class-map-CXsQwv0r.js";import{t as v}from"./tokens.style-DQsNuKSy.js";import{w as u,a as x,b}from"./declarative-layout-mixins-dHcexrGz.js";import{a as z}from"./chevron-right.component-BEaAedbo.js";const w=h`
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
`;var P=Object.defineProperty,O=Object.getOwnPropertyDescriptor,p=(t,i,n,e)=>{for(var s=e>1?void 0:e?O(i,n):i,r=t.length-1,l;r>=0;r--)(l=t[r])&&(s=(e?l(i,n,s):l(s))||s);return e&&s&&P(i,n,s),s};let a=class extends u(x(b(y))){constructor(){super(...arguments),this.size="large",this.label=c("Open context menu")}render(){const t=Array.from(this.children),i=t.length-2;return o`
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
    `}};a.styles=[v,w];p([m({type:String})],a.prototype,"size",2);p([m({type:String})],a.prototype,"label",2);a=p([f("gds-breadcrumb",{dependsOn:[z]}),d()],a);export{a as G};
