import{m as G,l as u}from"./runtime-CNluP0A8.js";import{n as o}from"./Reflect-DJ7r0WLU.js";import{e as S,o as f}from"./if-defined-BAXgs-ZI.js";import{h as p,G as v,g as y}from"./gds-element-DTROifYq.js";import{t as E}from"./tokens.style-CJKwYBen.js";import{d as I,w as A,b as B}from"./declarative-layout-mixins-DFPXvh_g.js";import{I as D,a as M}from"./chevron-right.component-Cs1IvQXA.js";import{i as _,E as k}from"./lit-element-Bx14lxc-.js";import{G as L}from"./link-DSf3KgtY.js";import{G as j}from"./text-BCzZBxkI.js";const R=_`
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

    ::slotted(*) {
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
    }
  }
`;var T=Object.defineProperty,W=Object.getOwnPropertyDescriptor,g=(t,e,r,a)=>{for(var s=a>1?void 0:a?W(e,r):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(s=(a?d(e,r,s):d(s))||s);return a&&s&&T(e,r,s),s};let c=class extends I(A(B(v))){constructor(){super(...arguments),this.size="large",this.label=G("Breadcrumbs")}get breadcrumbItems(){return Array.from(this.querySelectorAll("[gds-element=gds-breadcrumbs-item]"))}handleSlotChange(){const t=this.breadcrumbItems;t.forEach((e,r)=>{r===t.length-2?e.setAttribute("return",""):e.removeAttribute("return")})}render(){return p`
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
    `}};c.styles=[E,R];g([o({type:String})],c.prototype,"size",2);g([o({type:String})],c.prototype,"label",2);c=g([y("gds-breadcrumbs",{dependsOn:[D]}),u()],c);c.define();const q=_`
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
      :host(:not([return])),
      :host([return]) .separator {
        display: none;
      }

      :host([return]) {
        display: contents;
      }
    }
  }
`;var X=Object.defineProperty,F=Object.getOwnPropertyDescriptor,b=t=>{throw TypeError(t)},h=(t,e,r,a)=>{for(var s=a>1?void 0:a?F(e,r):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(s=(a?d(e,r,s):d(s))||s);return a&&s&&X(e,r,s),s},w=(t,e,r)=>e.has(t)||b("Cannot "+r),H=(t,e,r)=>(w(t,e,"read from private field"),r?r.call(t):e.get(t)),J=(t,e,r)=>e.has(t)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),m=(t,e,r)=>(w(t,e,"access private method"),r),i,x,$,C,z,O,P;let n=class extends v{constructor(){super(...arguments),J(this,i),this.href="",this.label="",this.overflow=!1}render(){return p`
      <div
        role="listitem"
        class="list-item"
        aria-current=${f(this.href?void 0:"page")}
      >
        ${m(this,i,$).call(this)}
      </div>
    `}};i=new WeakSet;x=function(){return this.target==="_blank"?"noreferrer noopener":void 0};$=function(){return[m(this,i,C).call(this)].map(e=>p`${e}`)};C=function(){return this.overflow?m(this,i,z).call(this):this.href?m(this,i,O).call(this):m(this,i,P).call(this)};z=function(){return p`<slot></slot>`};O=function(){return p`
      <gds-link
        href=${f(this.href)}
        target=${f(this.target)}
        rel=${f(this.rel||H(this,i,x))}
        download=${f(this.download)}
        aria-label=${this.label||k}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </gds-link>
    `};P=function(){return p`
      <gds-text color="neutral-02" font-weight="regular">
        <slot></slot>
      </gds-text>
    `};n.styles=[q];h([o()],n.prototype,"href",2);h([o()],n.prototype,"target",2);h([o()],n.prototype,"rel",2);h([o()],n.prototype,"label",2);h([o()],n.prototype,"download",2);h([o({type:Boolean,reflect:!0})],n.prototype,"overflow",2);n=h([y("gds-breadcrumb",{dependsOn:[L,j,M]}),u()],n);n.define();
