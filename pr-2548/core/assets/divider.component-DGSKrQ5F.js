import{i as h,Y as d,A as c,E as g,h as y,t as m,s as n,X as v,n as u,g as x}from"./iframe-Drqb4zoq.js";const _=h`
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
`;var b=Object.defineProperty,f=Object.getOwnPropertyDescriptor,o=(s,t,i,p)=>{for(var e=p>1?void 0:p?f(t,i):t,l=s.length-1,a;l>=0;l--)(a=s[l])&&(e=(p?a(t,i,e):a(e))||e);return p&&e&&b(t,i,e),e};let r=class extends d(c){constructor(){super(...arguments),this.role=null}render(){return y`<hr role=${this.role||g} />`}};r.styles=[m,_];o([n({...v("border"),property:"--_color"})],r.prototype,"color",2);o([n({property:"--_size",valueTemplate:s=>`var(--gds-sys-space-${s})`})],r.prototype,"size",2);o([n()],r.prototype,"opacity",2);o([u()],r.prototype,"role",2);r=o([x("gds-divider")],r);export{r as G};
