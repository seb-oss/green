import{n as m,g as f}from"./custom-element-scoping-BEGY3AqQ.js";import{s as d,u as c}from"./static-_ukc2i0J.js";import{t as g}from"./tokens.style-CFvqdzpw.js";import{s as a}from"./style-expression-property-w7JDbrjA.js";import{G as y}from"./div-C3mzrM3A.js";import{d as u}from"./default-typography.styles-Bl0hQgz1.js";import{i as v}from"./lit-element-C_s9q329.js";const x=v`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var b=Object.defineProperty,w=Object.getOwnPropertyDescriptor,s=(r,o,i,p)=>{for(var t=p>1?void 0:p?w(o,i):o,l=r.length-1,n;l>=0;l--)(n=r[l])&&(t=(p?n(o,i,t):n(t))||t);return p&&t&&b(o,i,t),t};let e=class extends y{constructor(){super(...arguments),this.tag="span"}render(){const r=d(encodeURI(this.tag));return c`<${r} tag><slot></slot></${r}>`}};e.styles=[g,u,x];s([m({type:String})],e.prototype,"tag",2);s([a()],e.prototype,"text-transform",2);s([a({selector:"[tag]"})],e.prototype,"text-decoration",2);s([a({styleTemplate:(r,o)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${o[0]};
      -webkit-box-orient: vertical;`})],e.prototype,"lines",2);e=s([f("gds-text")],e);
