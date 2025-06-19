import{h as g,n as h,g as b,G as f}from"./gds-element-DKcDvDP5.js";import{t as u}from"./tokens.style-BAMmArAm.js";import{a as m,c as v,b as w,d as x,w as P,e as z,s as e,g as y,p as _,f as c}from"./declarative-layout-mixins-BN2gVja9.js";import{i as $}from"./lit-element-Bx14lxc-.js";const C=$`
  :host {
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-l2-border-primary);
  }
  :host(:focus-visible) {
    outline-color: color-mix(in srgb, currentcolor, #000 100%);
    outline-offset: var(--gds-sys-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-sys-space-3xs);
  }
`;var T=Object.defineProperty,G=Object.getOwnPropertyDescriptor,t=(l,s,r,i)=>{for(var p=i>1?void 0:i?G(s,r):s,a=l.length-1,n;a>=0;a--)(n=l[a])&&(p=(i?n(s,r,p):n(p))||p);return i&&p&&T(s,r,p),p};let o=class extends m(v(w(x(P(z(f)))))){constructor(){super(...arguments),this.level="2"}render(){return g`<slot></slot>`}};o.styles=[u,C];t([e()],o.prototype,"display",2);t([h()],o.prototype,"level",2);t([e(y("content"))],o.prototype,"color",2);t([e(y("background"))],o.prototype,"background",2);t([e({styleTemplate:function(l,s){const r=this,[i,p=r["border-style"]||"solid",a=r["border-color"]||"primary"]=s,n=`var(--gds-sys-space-${i})`,d=_(a,"border",r.level);return`border: ${n} ${p} ${d};`}})],o.prototype,"border",2);t([e(y("border"))],o.prototype,"border-color",2);t([e(c)],o.prototype,"border-width",2);t([e()],o.prototype,"border-style",2);t([e(c)],o.prototype,"border-radius",2);t([e({valueTemplate:l=>`var(--gds-sys-shadow-${l})`})],o.prototype,"box-shadow",2);t([e()],o.prototype,"opacity",2);t([e()],o.prototype,"overflow",2);t([e()],o.prototype,"box-sizing",2);t([e()],o.prototype,"z-index",2);t([e({styleTemplate:(l,s)=>{const r=s[0],i=`font-size: var(--gds-sys-text-size-${r});`,p=`line-height: var(--gds-sys-text-line-height-${r});`;return i+p}})],o.prototype,"font-size",2);t([e({valueTemplate:l=>`var(--gds-sys-text-weight-${l})`})],o.prototype,"font-weight",2);t([e()],o.prototype,"text-align",2);t([e()],o.prototype,"text-wrap",2);t([e()],o.prototype,"overflow-wrap",2);t([e()],o.prototype,"white-space",2);t([e({...c,styleTemplate:(l,s)=>{const r=s[0],i=s[1]||r;return`gap: ${r} ${i};`},cacheOverrideKey:"flex"})],o.prototype,"gap",2);t([e()],o.prototype,"align-items",2);t([e()],o.prototype,"align-content",2);t([e()],o.prototype,"justify-content",2);t([e()],o.prototype,"justify-items",2);t([e()],o.prototype,"flex-direction",2);t([e()],o.prototype,"flex-wrap",2);t([e()],o.prototype,"place-items",2);t([e()],o.prototype,"place-content",2);o=t([b("gds-div")],o);export{o as G};
