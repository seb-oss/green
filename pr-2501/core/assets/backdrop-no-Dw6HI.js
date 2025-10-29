import{i}from"./lit-element-Bx14lxc-.js";import{n as d}from"./Reflect-DJ7r0WLU.js";import{G as f,h,g as c}from"./gds-element-DTROifYq.js";var m=Object.defineProperty,u=Object.getOwnPropertyDescriptor,a=(l,s,t,o)=>{for(var e=o>1?void 0:o?u(s,t):s,n=l.length-1,p;n>=0;n--)(p=l[n])&&(e=(o?p(s,t,e):p(e))||e);return o&&e&&m(s,t,e),e};let r=class extends f{constructor(){super(...arguments),this.show=!1}render(){return h``}};r.styles=i`
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
  `;a([d({type:Boolean,reflect:!0})],r.prototype,"show",2);r=a([c("gds-backdrop")],r);r.define();
