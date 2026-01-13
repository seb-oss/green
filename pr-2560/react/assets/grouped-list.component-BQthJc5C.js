import{G as l,h as e,_ as a,g as d,i as r,t as o,n as i}from"./tokens.style-Cq4gfrZh.js";import{n}from"./when-BR7zwNJC.js";import{T as c}from"./transitional-styles-CKoxrVHz.js";let t=class extends l{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return e`<slot></slot>`}};t=a([d("gds-list-item")],t);const g=r`
  .gds-list-heading {
    padding: var(--gds-sys-space-xs) var(--gds-sys-space-m);
    background: var(--gds-sys-color-l3-neutral-02);
    border-radius: var(--gds-sys-radius-s);
  }

  ::slotted([gds-element='gds-list-item']) {
    padding: var(--gds-sys-space-xs) var(--gds-sys-space-m);
    border-bottom-color: var(--gds-sys-color-border-subtle-02);
    border-bottom-width: var(--gds-sys-space-5xs);
    border-bottom-style: solid;
    display: flex;
    justify-content: space-between;
    gap: var(--gds-sys-space-3xs);
  }
`;var p=g;let s=class extends l{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),c.instance.apply(this,"gds-grouped-list")}render(){return e`${n(this.label,()=>e`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};s.styles=[o,p];a([i()],s.prototype,"label",2);s=a([d("gds-grouped-list",{dependsOn:[t]})],s);export{s as G,t as a};
