import{n as g}from"./Reflect-DJ7r0WLU.js";import{n as m}from"./when-BR7zwNJC.js";import{G as p,h as n,g as c}from"./gds-element-DTROifYq.js";import{T as v}from"./transitional-styles-DSirreiK.js";import{t as u}from"./tokens.style-CQAfIFlK.js";import{i as f}from"./lit-element-Bx14lxc-.js";var y=Object.defineProperty,h=Object.getOwnPropertyDescriptor,_=(o,e,r,t)=>{for(var s=t>1?void 0:t?h(e,r):e,l=o.length-1,a;l>=0;l--)(a=o[l])&&(s=(t?a(e,r,s):a(s))||s);return t&&s&&y(e,r,s),s};let i=class extends p{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return n`<slot></slot>`}};i=_([c("gds-list-item")],i);const O=f`
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
`;var P=Object.defineProperty,x=Object.getOwnPropertyDescriptor,b=(o,e,r,t)=>{for(var s=t>1?void 0:t?x(e,r):e,l=o.length-1,a;l>=0;l--)(a=o[l])&&(s=(t?a(e,r,s):a(s))||s);return t&&s&&P(e,r,s),s};let d=class extends p{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),v.instance.apply(this,"gds-grouped-list")}render(){return n`${m(this.label,()=>n`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};d.styles=[u,O];b([g()],d.prototype,"label",2);d=b([c("gds-grouped-list",{dependsOn:[i]})],d);d.define();i.define();
