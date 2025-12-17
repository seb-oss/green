import{i as m,K as P,Y as G,L as S,A as v,H as A,a as E,h,t as I,n as d,g as y,I as B,o as g,E as D}from"./iframe-CKJEIZ91.js";import{I as L}from"./chevron-left.component-z8G94Sj_.js";import{G as M}from"./link.component-DFWbogYT.js";import{G as k}from"./text-CBfpEg4R.js";const j=m`
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
`;var T=Object.defineProperty,W=Object.getOwnPropertyDescriptor,u=(t,e,s,n)=>{for(var r=n>1?void 0:n?W(e,s):e,l=t.length-1,o;l>=0;l--)(o=t[l])&&(r=(n?o(e,s,r):o(r))||r);return n&&r&&T(e,s,r),r};let f=class extends P(G(S(v))){constructor(){super(...arguments),this.size="large",this.label=A("Breadcrumbs")}get breadcrumbItems(){return Array.from(this.querySelectorAll("[gds-element=gds-breadcrumb]"))}handleSlotChange(){const t=this.breadcrumbItems;t.forEach((e,s)=>{s===t.length-2?e.setAttribute("return",""):e.removeAttribute("return")})}render(){return h`
      <nav
        role="navigation"
        aria-label=${this.label}
        class=${E({"size-small":this.size==="small"})}
      >
        <div class="mobile-return">
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </div>
        <div role="list" class="list">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      </nav>
    `}};f.styles=[I,j];u([d({type:String})],f.prototype,"size",2);u([d({type:String})],f.prototype,"label",2);f=u([y("gds-breadcrumbs",{dependsOn:[L]}),B()],f);const q=m`
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
`;var H=Object.defineProperty,K=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},c=(t,e,s,n)=>{for(var r=n>1?void 0:n?K(e,s):e,l=t.length-1,o;l>=0;l--)(o=t[l])&&(r=(n?o(e,s,r):o(r))||r);return n&&r&&H(e,s,r),r},b=(t,e,s)=>e.has(t)||_("Cannot "+s),R=(t,e,s)=>(b(t,e,"read from private field"),s?s.call(t):e.get(t)),X=(t,e,s)=>e.has(t)?_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),p=(t,e,s)=>(b(t,e,"access private method"),s),a,x,w,$,C,z,O;let i=class extends v{constructor(){super(...arguments),X(this,a),this.href="",this.label="",this.overflow=!1}render(){return h`
      <div role="listitem" class="list-item">${p(this,a,w).call(this)}</div>
    `}};a=new WeakSet;x=function(){return this.target==="_blank"?"noreferrer noopener":void 0};w=function(){return[p(this,a,$).call(this)].map(e=>h`${e}`)};$=function(){return this.overflow?p(this,a,C).call(this):this.href?p(this,a,z).call(this):p(this,a,O).call(this)};C=function(){return h`<slot></slot>`};z=function(){return h`
      <gds-link
        href=${g(this.href)}
        target=${g(this.target)}
        rel=${g(this.rel||R(this,a,x))}
        aria-label=${this.label||D}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </gds-link>
    `};O=function(){return h`
      <gds-text
        color="neutral-02"
        font-weight="regular"
        aria-current=${g(this.href?void 0:"page")}
      >
        <slot></slot>
      </gds-text>
    `};i.styles=[q];c([d()],i.prototype,"href",2);c([d()],i.prototype,"target",2);c([d()],i.prototype,"rel",2);c([d()],i.prototype,"label",2);c([d({type:Boolean,reflect:!0})],i.prototype,"overflow",2);i=c([y("gds-breadcrumb",{dependsOn:[M,k]})],i);export{f as G,i as a};
