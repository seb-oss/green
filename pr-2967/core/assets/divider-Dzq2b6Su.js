import{i as h,Q as d,z as c,A as g,h as v,v as y,R as n,a7 as m,n as u,g as x}from"./iframe-DVOBMRBC.js";const _=h`
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
`;var f=Object.defineProperty,b=Object.getOwnPropertyDescriptor,o=(s,t,i,p)=>{for(var r=p>1?void 0:p?b(t,i):t,l=s.length-1,a;l>=0;l--)(a=s[l])&&(r=(p?a(t,i,r):a(r))||r);return p&&r&&f(t,i,r),r};let e=class extends d(c){constructor(){super(...arguments),this.role=null}render(){return v`<hr role=${this.role||g} />`}};e.styles=[y,_];o([n({...m("border"),property:"--_color"})],e.prototype,"color",2);o([n({property:"--_size",valueTemplate:s=>`var(--gds-sys-space-${s})`})],e.prototype,"size",2);o([n()],e.prototype,"opacity",2);o([u()],e.prototype,"role",2);e=o([x("gds-divider")],e);e.define();export{e as G};
