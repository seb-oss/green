import{i as d,n as h,D as i,h as c,a as f}from"./iframe-cJ-G3WTm.js";var u=Object.defineProperty,m=Object.getOwnPropertyDescriptor,p=(a,r,o,t)=>{for(var e=t>1?void 0:t?m(r,o):r,n=a.length-1,l;n>=0;n--)(l=a[n])&&(e=(t?l(r,o,e):l(e))||e);return t&&e&&u(r,o,e),e};let s=class extends i{constructor(){super(...arguments),this.show=!1}render(){return c``}};s.styles=d`
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
  `;p([h({type:Boolean,reflect:!0})],s.prototype,"show",2);s=p([f("gds-backdrop")],s);s.define();
