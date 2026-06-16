import{i as p,v as c,n as g,z as b,T as v,d as u,h as i,g as y}from"./iframe-CUpmeMNK.js";import{G as m}from"./list-item-BDrIYv_1.js";const h=p`
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
`;var f=Object.defineProperty,x=Object.getOwnPropertyDescriptor,n=(o,e,a,t)=>{for(var s=t>1?void 0:t?x(e,a):e,l=o.length-1,d;l>=0;l--)(d=o[l])&&(s=(t?d(e,a,s):d(s))||s);return t&&s&&f(e,a,s),s};let r=class extends b{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),v.instance.apply(this,"gds-grouped-list")}render(){return i`${u(this.label,()=>i`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};r.styles=[c,h];n([g()],r.prototype,"label",2);r=n([y("gds-grouped-list",{dependsOn:[m]})],r);export{r as G};
