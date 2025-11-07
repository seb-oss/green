import{m as O,l as P}from"./runtime-CNluP0A8.js";import{n as d}from"./Reflect-DJ7r0WLU.js";import{e as S}from"./class-map-CXsQwv0r.js";import{h,G as u,g as v}from"./gds-element-DTROifYq.js";import{t as E}from"./tokens.style-DeseHqaM.js";import{d as A,w as B,b as I}from"./declarative-layout-mixins-C4FFYA_h.js";import{I as D}from"./chevron-left.component-CcL7Xxab.js";import{i as y,E as M}from"./lit-element-Bx14lxc-.js";import{o as f}from"./if-defined-CVqwUuaf.js";import{G as k}from"./link.component-Bo4qEWY6.js";import{G as L}from"./text-C8_sHSHj.js";const j=y`
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
`;var T=Object.defineProperty,W=Object.getOwnPropertyDescriptor,g=(t,e,r,n)=>{for(var s=n>1?void 0:n?W(e,r):e,l=t.length-1,o;l>=0;l--)(o=t[l])&&(s=(n?o(e,r,s):o(s))||s);return n&&s&&T(e,r,s),s};let m=class extends A(B(I(u))){constructor(){super(...arguments),this.size="large",this.label=O("Breadcrumbs")}get breadcrumbItems(){return Array.from(this.querySelectorAll("[gds-element=gds-breadcrumb]"))}handleSlotChange(){const t=this.breadcrumbItems;t.forEach((e,r)=>{r===t.length-2?e.setAttribute("return",""):e.removeAttribute("return")})}render(){return h`
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
    `}};m.styles=[E,j];g([d({type:String})],m.prototype,"size",2);g([d({type:String})],m.prototype,"label",2);m=g([v("gds-breadcrumbs",{dependsOn:[D]}),P()],m);const q=y`
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
`;var R=Object.defineProperty,X=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},c=(t,e,r,n)=>{for(var s=n>1?void 0:n?X(e,r):e,l=t.length-1,o;l>=0;l--)(o=t[l])&&(s=(n?o(e,r,s):o(s))||s);return n&&s&&R(e,r,s),s},b=(t,e,r)=>e.has(t)||_("Cannot "+r),F=(t,e,r)=>(b(t,e,"read from private field"),r?r.call(t):e.get(t)),H=(t,e,r)=>e.has(t)?_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),p=(t,e,r)=>(b(t,e,"access private method"),r),a,x,w,$,C,z,G;let i=class extends u{constructor(){super(...arguments),H(this,a),this.href="",this.label="",this.overflow=!1}render(){return h`
      <div role="listitem" class="list-item">${p(this,a,w).call(this)}</div>
    `}};a=new WeakSet;x=function(){return this.target==="_blank"?"noreferrer noopener":void 0};w=function(){return[p(this,a,$).call(this)].map(e=>h`${e}`)};$=function(){return this.overflow?p(this,a,C).call(this):this.href?p(this,a,z).call(this):p(this,a,G).call(this)};C=function(){return h`<slot></slot>`};z=function(){return h`
      <gds-link
        href=${f(this.href)}
        target=${f(this.target)}
        rel=${f(this.rel||F(this,a,x))}
        aria-label=${this.label||M}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </gds-link>
    `};G=function(){return h`
      <gds-text
        color="neutral-02"
        font-weight="regular"
        aria-current=${f(this.href?void 0:"page")}
      >
        <slot></slot>
      </gds-text>
    `};i.styles=[q];c([d()],i.prototype,"href",2);c([d()],i.prototype,"target",2);c([d()],i.prototype,"rel",2);c([d()],i.prototype,"label",2);c([d({type:Boolean,reflect:!0})],i.prototype,"overflow",2);i=c([v("gds-breadcrumb",{dependsOn:[k,L]})],i);export{m as G,i as a};
