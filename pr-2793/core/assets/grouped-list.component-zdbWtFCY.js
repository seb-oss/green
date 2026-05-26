import{J as c,h as n,g as p,i as b,E as v,n as u,a1 as y,d as m}from"./iframe-CL7Bfxf7.js";var h=Object.getOwnPropertyDescriptor,f=(l,e,d,t)=>{for(var s=t>1?void 0:t?h(e,d):e,r=l.length-1,a;r>=0;r--)(a=l[r])&&(s=a(s)||s);return s};let i=class extends c{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return n`<slot></slot>`}};i=f([p("gds-list-item")],i);const _=b`
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
`;var x=Object.defineProperty,O=Object.getOwnPropertyDescriptor,g=(l,e,d,t)=>{for(var s=t>1?void 0:t?O(e,d):e,r=l.length-1,a;r>=0;r--)(a=l[r])&&(s=(t?a(e,d,s):a(s))||s);return t&&s&&x(e,d,s),s};let o=class extends c{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),y.instance.apply(this,"gds-grouped-list")}render(){return n`${m(this.label,()=>n`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};o.styles=[v,_];g([u()],o.prototype,"label",2);o=g([p("gds-grouped-list",{dependsOn:[i]})],o);export{o as G,i as a};
