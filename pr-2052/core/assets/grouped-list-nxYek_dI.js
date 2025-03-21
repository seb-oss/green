import{G as p,h as o,g as c,n as u}from"./custom-element-scoping-BOlwUH_F.js";import{n as v}from"./when-BR7zwNJC.js";import{T as f}from"./transitional-styles-D9IvMC4x.js";var m=Object.defineProperty,_=Object.getOwnPropertyDescriptor,h=(i,s,l,t)=>{for(var e=t>1?void 0:t?_(s,l):s,r=i.length-1,a;r>=0;r--)(a=i[r])&&(e=(t?a(s,l,e):a(e))||e);return t&&e&&m(s,l,e),e};let d=class extends p{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return o`<slot></slot>`}};d=h([c("gds-list-item")],d);d.define();var g=Object.defineProperty,O=Object.getOwnPropertyDescriptor,b=(i,s,l,t)=>{for(var e=t>1?void 0:t?O(s,l):s,r=i.length-1,a;r>=0;r--)(a=i[r])&&(e=(t?a(s,l,e):a(e))||e);return t&&e&&g(s,l,e),e};let n=class extends p{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),f.instance.apply(this,"gds-grouped-list")}render(){return o`${v(this.label,()=>o`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};b([u()],n.prototype,"label",2);n=b([c("gds-grouped-list")],n);n.define();
