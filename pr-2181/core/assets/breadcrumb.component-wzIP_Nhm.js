import{i as p,x as o}from"./lit-element-Bx14lxc-.js";import{n as g,G as m,g as c}from"./custom-element-scoping-CNGU1oQ0.js";import{e as d}from"./class-map-CXsQwv0r.js";import{t as f}from"./tokens.style-DQsNuKSy.js";import{w as y,a as u,b as v}from"./declarative-layout-mixins-dHcexrGz.js";import{a as x}from"./chevron-right.component-BEaAedbo.js";const z=p`
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
      font-weight: var(--gds-sys-text-weight-book);
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
`;var b=Object.defineProperty,w=Object.getOwnPropertyDescriptor,h=(e,i,n,s)=>{for(var t=s>1?void 0:s?w(i,n):i,r=e.length-1,l;r>=0;r--)(l=e[r])&&(t=(s?l(i,n,t):l(t))||t);return s&&t&&b(i,n,t),t};let a=class extends y(u(v(m))){constructor(){super(...arguments),this.size="large"}updated(e){super.updated(e),e.has("size")&&this.updateChildrenSize()}updateChildrenSize(){Array.from(this.children).forEach(e=>{"size"in e&&e.setAttribute("size",this.size)})}render(){const e=Array.from(this.children),i=e.length-2;return o`
      <nav
        role="navigation"
        aria-label="Breadcrumb"
        class=${d({"size-small":this.size==="small"})}
      >
        <div class="mobile-return">
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </div>
        <ol>
          ${e.map((n,s)=>o`
              <li
                class=${d({"show-on-mobile":s===i})}
              >
                ${n}
              </li>
              ${s<e.length-1?o`<span class="separator" aria-hidden="true">/</span>`:null}
            `)}
        </ol>
      </nav>
    `}};a.styles=[f,z];h([g({type:String})],a.prototype,"size",2);a=h([c("gds-breadcrumb",{dependsOn:[x]})],a);export{a as G};
