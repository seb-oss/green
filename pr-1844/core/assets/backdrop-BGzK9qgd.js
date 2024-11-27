import{i as h}from"./lit-element-C_s9q329.js";import{n as i,g as c,G as d,h as f}from"./custom-element-scoping-b4lD3laR.js";var m=Object.defineProperty,u=Object.getOwnPropertyDescriptor,a=(p,s,t,r)=>{for(var e=r>1?void 0:r?u(s,t):s,l=p.length-1,n;l>=0;l--)(n=p[l])&&(e=(r?n(s,t,e):n(e))||e);return r&&e&&m(s,t,e),e};let o=class extends d{constructor(){super(...arguments),this.show=!1}render(){return f``}};o.styles=h`
    :host {
      display: none;
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 100%;
    }

    :host([show]) {
      display: block;
    }
  `;a([i({type:Boolean,reflect:!0})],o.prototype,"show",2);o=a([c("gds-backdrop")],o);
