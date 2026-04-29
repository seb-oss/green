import{R as l}from"./iframe-CQUnwiD8.js";import{o as r}from"./create-component-CPRSibq9.js";import{G as d,h as t,_ as a,g as o,i as n,t as c,n as g,a as i}from"./tokens.style-B9dm16Su.js";import{n as m}from"./when-BR7zwNJC.js";import{T as p,r as b}from"./transitional-styles-DrHEwaoE.js";let e=class extends d{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return t`<slot></slot>`}};e=a([o("gds-list-item")],e);const u=n`
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
`;var y=u;let s=class extends d{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),p.instance.apply(this,"gds-grouped-list")}render(){return t`${m(this.label,()=>t`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};s.styles=[c,y];a([g()],s.prototype,"label",2);s=a([o("gds-grouped-list",{dependsOn:[e]})],s);s.define();b();const G=r({tagName:i("gds-grouped-list"),elementClass:s,react:l}),k=r({tagName:i("gds-list-item"),elementClass:e,react:l});export{G,k as L};
