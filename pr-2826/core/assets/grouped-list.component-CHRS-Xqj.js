import{i as p,y as c,n as g,B as b,T as v,d as y,h as i,a as u}from"./iframe-tS67NpJ4.js";import{G as m}from"./list-item-C_zLPF9W.js";const h=p`
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
`;var f=Object.defineProperty,x=Object.getOwnPropertyDescriptor,n=(o,e,r,t)=>{for(var s=t>1?void 0:t?x(e,r):e,l=o.length-1,d;l>=0;l--)(d=o[l])&&(s=(t?d(e,r,s):d(s))||s);return t&&s&&f(e,r,s),s};let a=class extends b{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),v.instance.apply(this,"gds-grouped-list")}render(){return i`${y(this.label,()=>i`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};a.styles=[c,h];n([g()],a.prototype,"label",2);a=n([u("gds-grouped-list",{dependsOn:[m]})],a);export{a as G};
