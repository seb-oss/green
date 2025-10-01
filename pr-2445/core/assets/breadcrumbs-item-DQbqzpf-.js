import{m as w,l as f}from"./runtime-CNluP0A8.js";import{n as l}from"./Reflect-DJ7r0WLU.js";import{e as x,o as p}from"./if-defined-BAXgs-ZI.js";import{h as m,G as u,g as v}from"./gds-element-DTROifYq.js";import{t as $}from"./tokens.style-CJKwYBen.js";import{d as z,w as C,b as P}from"./declarative-layout-mixins-DFPXvh_g.js";import{I as G,a as O}from"./chevron-right.component-Cs1IvQXA.js";import{i as b,E as S}from"./lit-element-Bx14lxc-.js";import{n as I}from"./when-BR7zwNJC.js";import{G as E}from"./link-DSf3KgtY.js";import{G as A}from"./text-C9Q_emhW.js";const B=b`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      container-type: inline-size;
      container-name: gds-breadcrumbs;
      --_gap: var(--gds-sys-space-s);
    }

    nav {
      display: flex;
      align-items: center;
      width: max-content;
      gap: var(--_gap);
      font: var(--gds-sys-text-detail-book-m);
    }

    .size-small {
      font: var(--gds-sys-text-detail-book-s);
      --_gap: var(--gds-sys-space-xs);
    }

    .size-small ol {
      --_gap: var(--gds-sys-space-xs);
    }

    ol {
      display: flex;
      align-items: center;
      gap: var(--_gap);
      list-style: none;
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start: 0;
      height: max-content;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
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
    }
  }
`;var D=Object.defineProperty,L=Object.getOwnPropertyDescriptor,g=(t,e,s,a)=>{for(var r=a>1?void 0:a?L(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(r=(a?i(e,s,r):i(r))||r);return a&&r&&D(e,s,r),r};let d=class extends z(C(P(u))){constructor(){super(...arguments),this.size="large",this.label=w("Breadcrumbs")}get breadcrumbItems(){return Array.from(this.querySelectorAll("[gds-element=gds-breadcrumbs-item]"))}handleSlotChange(){const t=this.breadcrumbItems;t.forEach((e,s)=>{s===t.length-2?e.setAttribute("show-on-mobile",""):e.removeAttribute("show-on-mobile")})}render(){return m`
      <nav
        role="navigation"
        aria-label=${this.label}
        class=${x({"size-small":this.size==="small"})}
      >
        <div class="mobile-return">
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </div>
        <ol>
          <slot @slotchange=${this.handleSlotChange}></slot>
        </ol>
      </nav>
    `}};d.styles=[$,B];g([l({type:String})],d.prototype,"size",2);g([l({type:String})],d.prototype,"label",2);d=g([v("gds-breadcrumbs",{dependsOn:[G]}),f()],d);d.define();const j=b`
  @layer base {
    :host {
      display: contents;
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
      gap: var(--_gap);
    }

    @container (max-width: 400px) {
      :host(:not([show-on-mobile])),
      :host([show-on-mobile]) .separator {
        display: none;
      }

      :host([show-on-mobile]) {
        display: contents;
      }
    }
  }
`;var k=Object.defineProperty,R=Object.getOwnPropertyDescriptor,y=t=>{throw TypeError(t)},h=(t,e,s,a)=>{for(var r=a>1?void 0:a?R(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(r=(a?i(e,s,r):i(r))||r);return a&&r&&k(e,s,r),r},T=(t,e,s)=>e.has(t)||y("Cannot "+s),W=(t,e,s)=>(T(t,e,"read from private field"),s?s.call(t):e.get(t)),q=(t,e,s)=>e.has(t)?y("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),c,_;let n=class extends u{constructor(){super(...arguments),q(this,c),this.href="",this.label=""}render(){return m` <li aria-current=${p(this.href?void 0:"page")}>
      ${I(this.href,()=>m`
          <gds-link
            href=${p(this.href)}
            target=${p(this.target)}
            rel=${p(this.rel||W(this,c,_))}
            download=${p(this.download)}
            aria-label=${this.label||S}
          >
            <slot name="lead"></slot>
            <slot></slot>
            <slot name="trail"></slot>
          </gds-link>
          <span class="separator" aria-hidden="true">/</span>
        `,()=>m`
          <gds-text color="neutral-02" font-weight="regular">
            <slot></slot>
          </gds-text>
        `)}
    </li>`}};c=new WeakSet;_=function(){return this.target==="_blank"?"noreferrer noopener":void 0};n.styles=[j];h([l()],n.prototype,"href",2);h([l()],n.prototype,"target",2);h([l()],n.prototype,"rel",2);h([l()],n.prototype,"label",2);h([l()],n.prototype,"download",2);n=h([v("gds-breadcrumbs-item",{dependsOn:[E,A,O]}),f()],n);n.define();
