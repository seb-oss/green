import{I as c,h as i,g as p,i as b,t as v,n as u,a7 as y,b as m}from"./iframe-Dbe_U8av.js";var h=Object.getOwnPropertyDescriptor,f=(a,e,d,t)=>{for(var s=t>1?void 0:t?h(e,d):e,r=a.length-1,l;r>=0;r--)(l=a[r])&&(s=l(s)||s);return s};let n=class extends c{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return i`<slot></slot>`}};n=f([p("gds-list-item")],n);const _=b`
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
`;var O=Object.defineProperty,x=Object.getOwnPropertyDescriptor,g=(a,e,d,t)=>{for(var s=t>1?void 0:t?x(e,d):e,r=a.length-1,l;r>=0;r--)(l=a[r])&&(s=(t?l(e,d,s):l(s))||s);return t&&s&&O(e,d,s),s};let o=class extends c{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),y.instance.apply(this,"gds-grouped-list")}render(){return i`${m(this.label,()=>i`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};o.styles=[v,_];g([u()],o.prototype,"label",2);o=g([p("gds-grouped-list",{dependsOn:[n]})],o);o.define();n.define();
