import{m as I,l as g}from"./runtime-CNluP0A8.js";import{n as o}from"./Reflect-DJ7r0WLU.js";import{e as E,o as m}from"./if-defined-BAXgs-ZI.js";import{h as d,G as v,g as y}from"./gds-element-DTROifYq.js";import{t as A}from"./tokens.style-CJKwYBen.js";import{d as B,w as D,b as M}from"./declarative-layout-mixins-DFPXvh_g.js";import{I as L,a as j}from"./chevron-right.component-Cs1IvQXA.js";import{i as _,E as b}from"./lit-element-Bx14lxc-.js";import{G as k}from"./link-DSf3KgtY.js";import{G as R}from"./text-BCzZBxkI.js";const T=_`
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
`;var W=Object.defineProperty,q=Object.getOwnPropertyDescriptor,u=(t,e,r,a)=>{for(var s=a>1?void 0:a?q(e,r):e,l=t.length-1,h;l>=0;l--)(h=t[l])&&(s=(a?h(e,r,s):h(s))||s);return a&&s&&W(e,r,s),s};let f=class extends B(D(M(v))){constructor(){super(...arguments),this.size="large",this.label=I("Breadcrumbs")}get breadcrumbItems(){return Array.from(this.querySelectorAll("[gds-element=gds-breadcrumbs-item]"))}handleSlotChange(){const t=this.breadcrumbItems;t.forEach((e,r)=>{r===t.length-2?e.setAttribute("return",""):e.removeAttribute("return")})}render(){return d`
      <nav
        role="navigation"
        aria-label=${this.label}
        class=${E({"size-small":this.size==="small"})}
      >
        <div class="mobile-return">
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </div>
        <ol>
          <slot @slotchange=${this.handleSlotChange}></slot>
        </ol>
      </nav>
    `}};f.styles=[A,T];u([o({type:String})],f.prototype,"size",2);u([o({type:String})],f.prototype,"label",2);f=u([y("gds-breadcrumbs",{dependsOn:[L]}),g()],f);f.define();const X=_`
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
      :host(:not([return])),
      :host([return]) .separator {
        display: none;
      }

      :host([return]) {
        display: contents;
      }
    }
  }
`;var F=Object.defineProperty,H=Object.getOwnPropertyDescriptor,w=t=>{throw TypeError(t)},p=(t,e,r,a)=>{for(var s=a>1?void 0:a?H(e,r):e,l=t.length-1,h;l>=0;l--)(h=t[l])&&(s=(a?h(e,r,s):h(s))||s);return a&&s&&F(e,r,s),s},x=(t,e,r)=>e.has(t)||w("Cannot "+r),J=(t,e,r)=>(x(t,e,"read from private field"),r?r.call(t):e.get(t)),K=(t,e,r)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),c=(t,e,r)=>(x(t,e,"access private method"),r),i,$,C,z,O,P,G,S;let n=class extends v{constructor(){super(...arguments),K(this,i),this.href="",this.label="",this.overflow=!1}render(){return d`
      <li
        role="listitem"
        aria-current=${m(this.href?void 0:"page")}
      >
        ${c(this,i,C).call(this)}
      </li>
    `}};i=new WeakSet;$=function(){return this.target==="_blank"?"noreferrer noopener":void 0};C=function(){return[c(this,i,z).call(this),c(this,i,O).call(this)].map(e=>d`${e}`)};z=function(){return this.overflow?c(this,i,P).call(this):this.href?c(this,i,G).call(this):c(this,i,S).call(this)};O=function(){return!this.href&&!this.overflow?b:d`<span class="separator" aria-hidden="true">/</span>`};P=function(){return d`<slot></slot>`};G=function(){return d`
      <gds-link
        href=${m(this.href)}
        target=${m(this.target)}
        rel=${m(this.rel||J(this,i,$))}
        download=${m(this.download)}
        aria-label=${this.label||b}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </gds-link>
    `};S=function(){return d`
      <gds-text color="neutral-02" font-weight="regular">
        <slot></slot>
      </gds-text>
    `};n.styles=[X];p([o()],n.prototype,"href",2);p([o()],n.prototype,"target",2);p([o()],n.prototype,"rel",2);p([o()],n.prototype,"label",2);p([o()],n.prototype,"download",2);p([o({type:Boolean,reflect:!0})],n.prototype,"overflow",2);n=p([y("gds-breadcrumbs-item",{dependsOn:[k,R,j]}),g()],n);n.define();
