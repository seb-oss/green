import{i}from"./lit-element-Bx14lxc-.js";import{n as d,G as h,h as c,g as f}from"./gds-element-KHa0AloG.js";var m=Object.defineProperty,u=Object.getOwnPropertyDescriptor,a=(p,r,t,o)=>{for(var e=o>1?void 0:o?u(r,t):r,n=p.length-1,l;n>=0;n--)(l=p[n])&&(e=(o?l(r,t,e):l(e))||e);return o&&e&&m(r,t,e),e};let s=class extends h{constructor(){super(...arguments),this.show=!1}render(){return c``}};s.styles=i`
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
  `;a([d({type:Boolean,reflect:!0})],s.prototype,"show",2);s=a([f("gds-backdrop")],s);s.define();
