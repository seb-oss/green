import{i as p,x as o}from"./lit-element-Bx14lxc-.js";import{n as c,G as m,g}from"./custom-element-scoping-CNGU1oQ0.js";import{e as d}from"./class-map-CXsQwv0r.js";import{t as f}from"./tokens.style-DQsNuKSy.js";import{w as y,a as u,b}from"./declarative-layout-mixins-dHcexrGz.js";import{a as v}from"./chevron-right.component-BEaAedbo.js";const x=p`
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
`;var z=Object.defineProperty,w=Object.getOwnPropertyDescriptor,h=(e,s,n,i)=>{for(var t=i>1?void 0:i?w(s,n):s,r=e.length-1,l;r>=0;r--)(l=e[r])&&(t=(i?l(s,n,t):l(t))||t);return i&&t&&z(s,n,t),t};let a=class extends y(u(b(m))){constructor(){super(),this.size="large"}updated(e){super.updated(e),e.has("size")&&this.updateChildrenSize()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","navigation"),this.setAttribute("aria-label","Breadcrumb"),this.updateChildrenSize()}updateChildrenSize(){Array.from(this.children).forEach(e=>{"size"in e&&e.setAttribute("size",this.size)})}render(){const e=Array.from(this.children),s=e.length-2,n={"size-small":this.size==="small"};return o`
      <nav aria-label="Breadcrumb" class=${d(n)}>
        <div class="mobile-return">
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </div>
        <ol>
          ${e.map((i,t)=>o`
              <li
                class=${d({"show-on-mobile":t===s})}
              >
                ${i}
              </li>
              ${t<e.length-1?o`<span class="separator" aria-hidden="true">/</span>`:null}
            `)}
        </ol>
      </nav>
    `}};a.styles=[f,x];h([c({type:String})],a.prototype,"size",2);a=h([g("gds-breadcrumb",{dependsOn:[v]})],a);export{a as G};
