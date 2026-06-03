import{i as h,$ as d,J as c,A as g,h as y,E as m,a0 as n,ah as v,n as u,g as x}from"./iframe-DeOIKC_g.js";const _=h`
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
`;var f=Object.defineProperty,b=Object.getOwnPropertyDescriptor,o=(s,t,i,p)=>{for(var r=p>1?void 0:p?b(t,i):t,l=s.length-1,a;l>=0;l--)(a=s[l])&&(r=(p?a(t,i,r):a(r))||r);return p&&r&&f(t,i,r),r};let e=class extends d(c){constructor(){super(...arguments),this.role=null}render(){return y`<hr role=${this.role||g} />`}};e.styles=[m,_];o([n({...v("border"),property:"--_color"})],e.prototype,"color",2);o([n({property:"--_size",valueTemplate:s=>`var(--gds-sys-space-${s})`})],e.prototype,"size",2);o([n()],e.prototype,"opacity",2);o([u()],e.prototype,"role",2);e=o([x("gds-divider")],e);e.define();export{e as G};
