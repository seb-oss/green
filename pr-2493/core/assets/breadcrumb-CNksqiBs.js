import{m as P,l as G}from"./runtime-CNluP0A8.js";import{n as d}from"./Reflect-DJ7r0WLU.js";import{e as S}from"./class-map-CXsQwv0r.js";import{h as c,G as u,g as v}from"./gds-element-DTROifYq.js";import{t as E}from"./tokens.style-CA5ADGwW.js";import{d as A,w as B,b as I}from"./declarative-layout-mixins-DFPXvh_g.js";import{I as D}from"./chevron-left.component-D8lZsGKs.js";import{i as y,E as M}from"./lit-element-Bx14lxc-.js";import{o as m}from"./if-defined-CVqwUuaf.js";import{G as k}from"./link-BaqWKDmC.js";import{G as L}from"./text-BmaBdEcP.js";const j=y`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      container-type: inline-size;
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

    .size-small .list {
      --_gap: var(--gds-sys-space-xs);
    }

    .list {
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

    ::slotted(*:not(:last-child))::after {
      content: '/';
      display: block;
    }

    ::slotted(*:not([gds-element='gds-breadcrumb'])) {
      display: contents;
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

      ::slotted(*[return])::after {
        display: none;
      }
    }
  }
`;var T=Object.defineProperty,W=Object.getOwnPropertyDescriptor,g=(t,e,r,n)=>{for(var s=n>1?void 0:n?W(e,r):e,l=t.length-1,o;l>=0;l--)(o=t[l])&&(s=(n?o(e,r,s):o(s))||s);return n&&s&&T(e,r,s),s};let h=class extends A(B(I(u))){constructor(){super(...arguments),this.size="large",this.label=P("Breadcrumbs")}get breadcrumbItems(){return Array.from(this.querySelectorAll("[gds-element=gds-breadcrumb]"))}handleSlotChange(){const t=this.breadcrumbItems;t.forEach((e,r)=>{r===t.length-2?e.setAttribute("return",""):e.removeAttribute("return")})}render(){return c`
      <nav
        role="navigation"
        aria-label=${this.label}
        class=${S({"size-small":this.size==="small"})}
      >
        <div class="mobile-return">
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </div>
        <div role="list" class="list">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      </nav>
    `}};h.styles=[E,j];g([d({type:String})],h.prototype,"size",2);g([d({type:String})],h.prototype,"label",2);h=g([v("gds-breadcrumbs",{dependsOn:[D]}),G()],h);h.define();const q=y`
  @layer base {
    :host {
      display: contents;
    }

    .list-item {
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
      :host(:not([return])) {
        display: none;
      }

      :host([return]) {
        display: contents;
      }
    }
  }
`;var R=Object.defineProperty,X=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},p=(t,e,r,n)=>{for(var s=n>1?void 0:n?X(e,r):e,l=t.length-1,o;l>=0;l--)(o=t[l])&&(s=(n?o(e,r,s):o(s))||s);return n&&s&&R(e,r,s),s},b=(t,e,r)=>e.has(t)||_("Cannot "+r),F=(t,e,r)=>(b(t,e,"read from private field"),r?r.call(t):e.get(t)),H=(t,e,r)=>e.has(t)?_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),f=(t,e,r)=>(b(t,e,"access private method"),r),i,w,x,$,C,z,O;let a=class extends u{constructor(){super(...arguments),H(this,i),this.href="",this.label="",this.overflow=!1}render(){return c`
      <div role="listitem" class="list-item">${f(this,i,x).call(this)}</div>
    `}};i=new WeakSet;w=function(){return this.target==="_blank"?"noreferrer noopener":void 0};x=function(){return[f(this,i,$).call(this)].map(e=>c`${e}`)};$=function(){return this.overflow?f(this,i,C).call(this):this.href?f(this,i,z).call(this):f(this,i,O).call(this)};C=function(){return c`<slot></slot>`};z=function(){return c`
      <gds-link
        href=${m(this.href)}
        target=${m(this.target)}
        rel=${m(this.rel||F(this,i,w))}
        aria-label=${this.label||M}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </gds-link>
    `};O=function(){return c`
      <gds-text
        color="neutral-02"
        font-weight="regular"
        aria-current=${m(this.href?void 0:"page")}
      >
        <slot></slot>
      </gds-text>
    `};a.styles=[q];p([d()],a.prototype,"href",2);p([d()],a.prototype,"target",2);p([d()],a.prototype,"rel",2);p([d()],a.prototype,"label",2);p([d({type:Boolean,reflect:!0})],a.prototype,"overflow",2);a=p([v("gds-breadcrumb",{dependsOn:[k,L]})],a);a.define();
