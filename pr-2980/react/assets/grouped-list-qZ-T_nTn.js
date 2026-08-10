import{e as l}from"./iframe-B_CUK6li.js";import{o as r}from"./create-component-CVDMTe9T.js";import{i as c,m as g,h as t,G as d,t as o,_ as a,g as i,n as m,a as n}from"./declarative-layout-mixins-CKzaNluH.js";import{n as p}from"./when-CI7b_ccM.js";import{T as u,r as b}from"./transitional-styles-ZTtv53dN.js";const y=c`
  .gds-list-heading {
    padding: var(--gds-sys-space-xs) var(--gds-sys-space-m);
    background: var(--gds-sys-color-l3-neutral-02);
    border-radius: var(--gds-sys-radius-s);
  }

  ::slotted([gds-element='gds-list-item']) {
    padding: var(--gds-sys-space-xs) var(--gds-sys-space-m);
    border-bottom-color: var(--gds-sys-color-border-neutral-03);
    border-bottom-width: var(--gds-sys-space-5xs);
    border-bottom-style: solid;
    display: flex;
    justify-content: space-between;
    gap: var(--gds-sys-space-3xs);
  }
`;var v=y;let e=class extends g(d){connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return t`<slot></slot>`}};e.styles=o;e=a([i("gds-list-item")],e);let s=class extends d{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),u.instance.apply(this,"gds-grouped-list")}render(){return t`${p(this.label,()=>t`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};s.styles=[o,v];a([m()],s.prototype,"label",2);s=a([i("gds-grouped-list",{dependsOn:[e]})],s);s.define();b();const k=r({tagName:n("gds-grouped-list"),elementClass:s,react:l}),L=r({tagName:n("gds-list-item"),elementClass:e,react:l});export{k as G,L};
