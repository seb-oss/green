import{i as h,D as d,J as c,E as g,h as y,t as m,s as n,a8 as v,n as u,g as _}from"./iframe-Btp_HS2e.js";const f=h`
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
`;var x=Object.defineProperty,b=Object.getOwnPropertyDescriptor,o=(s,t,p,i)=>{for(var r=i>1?void 0:i?b(t,p):t,l=s.length-1,a;l>=0;l--)(a=s[l])&&(r=(i?a(t,p,r):a(r))||r);return i&&r&&x(t,p,r),r};let e=class extends d(c){constructor(){super(...arguments),this.role=null}render(){return y`<hr role=${this.role||g} />`}};e.styles=[m,f];o([n({...v("border"),property:"--_color"})],e.prototype,"color",2);o([n({property:"--_size",valueTemplate:s=>`var(--gds-sys-space-${s})`})],e.prototype,"size",2);o([n()],e.prototype,"opacity",2);o([u()],e.prototype,"role",2);e=o([_("gds-divider")],e);e.define();
