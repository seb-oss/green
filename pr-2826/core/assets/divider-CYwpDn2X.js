import{i as h,R as d,B as c,A as y,h as g,y as m,S as n,a6 as v,n as u,a as x}from"./iframe-NY0pB7lA.js";const _=h`
  :host {
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--_size);
  }

  hr {
    width: 100%;
    height: 1px;
    min-height: 1px;
    max-height: 1px;
    border: 0;
    margin: 0;
    padding: 0;
    background: var(--_color, currentColor);
    box-sizing: border-box;
  }
`;var f=Object.defineProperty,b=Object.getOwnPropertyDescriptor,o=(s,t,i,p)=>{for(var r=p>1?void 0:p?b(t,i):t,l=s.length-1,a;l>=0;l--)(a=s[l])&&(r=(p?a(t,i,r):a(r))||r);return p&&r&&f(t,i,r),r};let e=class extends d(c){constructor(){super(...arguments),this.role=null}render(){return g`<hr role=${this.role||y} />`}};e.styles=[m,_];o([n({...v("border"),property:"--_color"})],e.prototype,"color",2);o([n({property:"--_size",valueTemplate:s=>`var(--gds-sys-space-${s})`})],e.prototype,"size",2);o([n()],e.prototype,"opacity",2);o([u()],e.prototype,"role",2);e=o([x("gds-divider")],e);e.define();export{e as G};
