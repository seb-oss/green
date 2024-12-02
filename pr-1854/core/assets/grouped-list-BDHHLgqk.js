import{g as p,G as c,h as n,n as u}from"./custom-element-scoping-b4lD3laR.js";import{n as v}from"./when-BR7zwNJC.js";import{T as m}from"./transitional-styles-DxQYqyXn.js";var f=Object.defineProperty,_=Object.getOwnPropertyDescriptor,h=(i,s,l,t)=>{for(var e=t>1?void 0:t?_(s,l):s,r=i.length-1,a;r>=0;r--)(a=i[r])&&(e=(t?a(s,l,e):a(e))||e);return t&&e&&f(s,l,e),e};let d=class extends c{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return n`<slot></slot>`}};d=h([p("gds-list-item")],d);var g=Object.defineProperty,O=Object.getOwnPropertyDescriptor,b=(i,s,l,t)=>{for(var e=t>1?void 0:t?O(s,l):s,r=i.length-1,a;r>=0;r--)(a=i[r])&&(e=(t?a(s,l,e):a(e))||e);return t&&e&&g(s,l,e),e};let o=class extends c{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),m.instance.apply(this,"gds-grouped-list")}render(){return n`${v(this.label,()=>n`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};b([u()],o.prototype,"label",2);o=b([p("gds-grouped-list")],o);
