import{m as c,l as h}from"./runtime-CNluP0A8.js";import{i as m,x as o}from"./lit-element-Bx14lxc-.js";import{n as p,G as y,g as f}from"./gds-element-DKcDvDP5.js";import{e as g}from"./class-map-CXsQwv0r.js";import{t as v}from"./tokens.style-BAMmArAm.js";import{w as u,a as x,b}from"./declarative-layout-mixins-BN2gVja9.js";import{a as z}from"./chevron-right.component-Dtyw5UGT.js";const w=m`
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
`;var P=Object.defineProperty,_=Object.getOwnPropertyDescriptor,d=(t,i,n,e)=>{for(var s=e>1?void 0:e?_(i,n):i,r=t.length-1,l;r>=0;r--)(l=t[r])&&(s=(e?l(i,n,s):l(s))||s);return e&&s&&P(i,n,s),s};let a=class extends u(x(b(y))){constructor(){super(...arguments),this.size="large",this.label=c("Breadcrumbs")}render(){const t=Array.from(this.children),i=t.length-2;return o`
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
    `}};a.styles=[v,w];d([p({type:String})],a.prototype,"size",2);d([p({type:String})],a.prototype,"label",2);a=d([f("gds-breadcrumbs",{dependsOn:[z]}),h()],a);export{a as G};
