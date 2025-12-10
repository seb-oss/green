import{i as m,H as O,N as G,D as S,I as v,U as E,a as I,h as c,t as A,n as d,g as y,P as B,o as g,E as D}from"./iframe-CGsiwAoU.js";import{I as M}from"./chevron-left.component-Bb42n1ll.js";import{G as k}from"./link-DjROFqiI.js";import{G as L}from"./text-DQ_j5u45.js";const j=m`
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
`;var T=Object.defineProperty,W=Object.getOwnPropertyDescriptor,u=(t,e,s,n)=>{for(var r=n>1?void 0:n?W(e,s):e,l=t.length-1,o;l>=0;l--)(o=t[l])&&(r=(n?o(e,s,r):o(r))||r);return n&&r&&T(e,s,r),r};let h=class extends O(G(S(v))){constructor(){super(...arguments),this.size="large",this.label=E("Breadcrumbs")}get breadcrumbItems(){return Array.from(this.querySelectorAll("[gds-element=gds-breadcrumb]"))}handleSlotChange(){const t=this.breadcrumbItems;t.forEach((e,s)=>{s===t.length-2?e.setAttribute("return",""):e.removeAttribute("return")})}render(){return c`
      <nav
        role="navigation"
        aria-label=${this.label}
        class=${I({"size-small":this.size==="small"})}
      >
        <div class="mobile-return">
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </div>
        <div role="list" class="list">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      </nav>
    `}};h.styles=[A,j];u([d({type:String})],h.prototype,"size",2);u([d({type:String})],h.prototype,"label",2);h=u([y("gds-breadcrumbs",{dependsOn:[M]}),B()],h);h.define();const q=m`
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
`;var H=Object.defineProperty,N=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},p=(t,e,s,n)=>{for(var r=n>1?void 0:n?N(e,s):e,l=t.length-1,o;l>=0;l--)(o=t[l])&&(r=(n?o(e,s,r):o(r))||r);return n&&r&&H(e,s,r),r},b=(t,e,s)=>e.has(t)||_("Cannot "+s),R=(t,e,s)=>(b(t,e,"read from private field"),s?s.call(t):e.get(t)),U=(t,e,s)=>e.has(t)?_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),f=(t,e,s)=>(b(t,e,"access private method"),s),i,x,w,$,C,P,z;let a=class extends v{constructor(){super(...arguments),U(this,i),this.href="",this.label="",this.overflow=!1}render(){return c`
      <div role="listitem" class="list-item">${f(this,i,w).call(this)}</div>
    `}};i=new WeakSet;x=function(){return this.target==="_blank"?"noreferrer noopener":void 0};w=function(){return[f(this,i,$).call(this)].map(e=>c`${e}`)};$=function(){return this.overflow?f(this,i,C).call(this):this.href?f(this,i,P).call(this):f(this,i,z).call(this)};C=function(){return c`<slot></slot>`};P=function(){return c`
      <gds-link
        href=${g(this.href)}
        target=${g(this.target)}
        rel=${g(this.rel||R(this,i,x))}
        aria-label=${this.label||D}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </gds-link>
    `};z=function(){return c`
      <gds-text
        color="neutral-02"
        font-weight="regular"
        aria-current=${g(this.href?void 0:"page")}
      >
        <slot></slot>
      </gds-text>
    `};a.styles=[q];p([d()],a.prototype,"href",2);p([d()],a.prototype,"target",2);p([d()],a.prototype,"rel",2);p([d()],a.prototype,"label",2);p([d({type:Boolean,reflect:!0})],a.prototype,"overflow",2);a=p([y("gds-breadcrumb",{dependsOn:[k,L]})],a);a.define();
