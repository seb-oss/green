import{g as p,G as c,h as i,n as u}from"./gds-element-RTlSuh_R.js";import{n as v}from"./when-BxLAFfhK.js";import{T as m}from"./transitional-styles-9whFD-yV.js";var f=Object.defineProperty,_=Object.getOwnPropertyDescriptor,h=(n,s,l,t)=>{for(var e=t>1?void 0:t?_(s,l):s,r=n.length-1,a;r>=0;r--)(a=n[r])&&(e=(t?a(s,l,e):a(e))||e);return t&&e&&f(s,l,e),e};let d=class extends c{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return i`<slot></slot>`}};d=h([p("gds-list-item")],d);var g=Object.defineProperty,O=Object.getOwnPropertyDescriptor,b=(n,s,l,t)=>{for(var e=t>1?void 0:t?O(s,l):s,r=n.length-1,a;r>=0;r--)(a=n[r])&&(e=(t?a(s,l,e):a(e))||e);return t&&e&&g(s,l,e),e};let o=class extends c{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),m.instance.apply(this,"gds-grouped-list")}render(){return i`${v(this.label,()=>i`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};b([u()],o.prototype,"label",2);o=b([p("gds-grouped-list")],o);
