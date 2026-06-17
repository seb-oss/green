import{e as l}from"./iframe-qhgJgJ0r.js";import{o as r}from"./create-component-CVDMTe9T.js";import{i as d,m as g,h as t,G as o,t as i,_ as a,g as n,n as m,a as c}from"./declarative-layout-mixins-DIKaGszh.js";import{n as p}from"./when-CI7b_ccM.js";import{T as u,r as y}from"./transitional-styles-BPUvwSO0.js";const b=d`
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
`;var v=b;const h=d`
  :host {
  }

  slot:not([name]) {
  }
`;var f=h;let e=class extends g(o){connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return t`<slot></slot>`}};e.styles=[i,f];e=a([n("gds-list-item")],e);let s=class extends o{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),u.instance.apply(this,"gds-grouped-list")}render(){return t`${p(this.label,()=>t`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};s.styles=[i,v];a([m()],s.prototype,"label",2);s=a([n("gds-grouped-list",{dependsOn:[e]})],s);s.define();y();const L=r({tagName:c("gds-grouped-list"),elementClass:s,react:l}),T=r({tagName:c("gds-list-item"),elementClass:e,react:l});export{L as G,T as L};
