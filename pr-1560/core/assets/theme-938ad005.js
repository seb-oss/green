import{n as m,g as p,G as h,h as i}from"./gds-element-54cd6e2a.js";import{T as u}from"./transitional-styles-1a2d368e.js";import{i as f}from"./lit-element-71e04f06.js";var d=Object.defineProperty,g=Object.getOwnPropertyDescriptor,a=(n,t,o,s)=>{for(var e=s>1?void 0:s?g(t,o):t,l=n.length-1,c;l>=0;l--)(c=n[l])&&(e=(s?c(t,o,e):c(e))||e);return s&&e&&d(t,o,e),e};let r=class extends h{constructor(){super(...arguments),this.colorScheme="light"}connectedCallback(){super.connectedCallback(),u.instance.apply(this,"gds-theme")}render(){return i`<slot></slot>`}};r.styles=f`
    :host {
      display: contents;
    }
  `;a([m({reflect:!0,attribute:"color-scheme"})],r.prototype,"colorScheme",2);r=a([p("gds-theme")],r);
