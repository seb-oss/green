import{i as d,n as h,J as i,h as c,g as f}from"./iframe-CGVjz2_e.js";var u=Object.defineProperty,g=Object.getOwnPropertyDescriptor,a=(p,r,o,t)=>{for(var e=t>1?void 0:t?g(r,o):r,n=p.length-1,l;n>=0;n--)(l=p[n])&&(e=(t?l(r,o,e):l(e))||e);return t&&e&&u(r,o,e),e};let s=class extends i{constructor(){super(...arguments),this.show=!1}render(){return c``}};s.styles=d`
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
  `;a([h({type:Boolean,reflect:!0})],s.prototype,"show",2);s=a([f("gds-backdrop")],s);s.define();
