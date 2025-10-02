import{m as d,l as g}from"./runtime-CNluP0A8.js";import{n as c}from"./Reflect-DJ7r0WLU.js";import{e as p}from"./if-defined-BAXgs-ZI.js";import{h as o,G as h,g as f}from"./gds-element-DTROifYq.js";import{t as y}from"./tokens.style-CJKwYBen.js";import{d as b,w as u,b as v}from"./declarative-layout-mixins-DFPXvh_g.js";import{I as x}from"./chevron-right.component-Cs1IvQXA.js";import{i as w}from"./lit-element-Bx14lxc-.js";const z=w`
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
      color: var(--gds-sys-color-content-neutral-02);
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
`;var P=Object.defineProperty,_=Object.getOwnPropertyDescriptor,m=(t,n,r,e)=>{for(var s=e>1?void 0:e?_(n,r):n,a=t.length-1,l;a>=0;a--)(l=t[a])&&(s=(e?l(n,r,s):l(s))||s);return e&&s&&P(n,r,s),s};let i=class extends b(u(v(h))){constructor(){super(...arguments),this.size="large",this.label=d("Breadcrumbs")}render(){const t=Array.from(this.children),n=t.length-2;return o`
      <nav
        role="navigation"
        aria-label=${this.label}
        class=${p({"size-small":this.size==="small"})}
      >
        <div class="mobile-return">
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </div>
        <ol>
          ${t.map((r,e)=>o`
              <li
                class=${p({"show-on-mobile":e===n})}
              >
                ${r}
              </li>
              ${e<t.length-1?o`<span class="separator" aria-hidden="true">/</span>`:null}
            `)}
        </ol>
      </nav>
    `}};i.styles=[y,z];m([c({type:String})],i.prototype,"size",2);m([c({type:String})],i.prototype,"label",2);i=m([f("gds-breadcrumbs",{dependsOn:[x]}),g()],i);i.define();
