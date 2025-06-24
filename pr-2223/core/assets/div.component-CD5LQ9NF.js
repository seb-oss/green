import{h as b,n as g,g as f,G as u}from"./gds-element-DKcDvDP5.js";import{t as h}from"./tokens.style-BxbMzGpH.js";import{a as m,c as v,b as w,d as x,w as P,e as _,s as e,g as y,p as z,f as d}from"./declarative-layout-mixins-mU9_fNeX.js";import{i as $}from"./lit-element-Bx14lxc-.js";const C=$`
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
`;var T=Object.defineProperty,G=Object.getOwnPropertyDescriptor,t=(p,r,s,i)=>{for(var l=i>1?void 0:i?G(r,s):r,a=p.length-1,n;a>=0;a--)(n=p[a])&&(l=(i?n(r,s,l):n(l))||l);return i&&l&&T(r,s,l),l};let o=class extends m(v(w(x(P(_(u)))))){constructor(){super(...arguments),this.level="2"}render(){return b`<slot></slot>`}};o.styles=[h,C];t([e()],o.prototype,"display",2);t([g()],o.prototype,"level",2);t([e(y("content"))],o.prototype,"color",2);t([e(y("background"))],o.prototype,"background",2);t([e({styleTemplate:function(p,r){const s=this,[i,l=s["border-style"]||"solid",a=s["border-color"]||"primary"]=r,n=`var(--gds-sys-space-${i})`,c=z(a,"border",s.level);return`border: ${n} ${l} ${c};`}})],o.prototype,"border",2);t([e(y("border"))],o.prototype,"border-color",2);t([e(d)],o.prototype,"border-width",2);t([e()],o.prototype,"border-style",2);t([e(d)],o.prototype,"border-radius",2);t([e({valueTemplate:p=>`var(--gds-sys-shadow-${p})`})],o.prototype,"box-shadow",2);t([e()],o.prototype,"opacity",2);t([e()],o.prototype,"overflow",2);t([e()],o.prototype,"box-sizing",2);t([e()],o.prototype,"z-index",2);t([e({styleTemplate:(p,r)=>`font: var(--gds-sys-text-${r[0]});`})],o.prototype,"font",2);t([e({valueTemplate:p=>`var(--gds-sys-text-weight-${p})`})],o.prototype,"font-weight",2);t([e()],o.prototype,"text-align",2);t([e()],o.prototype,"text-wrap",2);t([e()],o.prototype,"overflow-wrap",2);t([e()],o.prototype,"white-space",2);t([e({...d,styleTemplate:(p,r)=>{const s=r[0],i=r[1]||s;return`gap: ${s} ${i};`},cacheOverrideKey:"flex"})],o.prototype,"gap",2);t([e()],o.prototype,"align-items",2);t([e()],o.prototype,"align-content",2);t([e()],o.prototype,"justify-content",2);t([e()],o.prototype,"justify-items",2);t([e()],o.prototype,"flex-direction",2);t([e()],o.prototype,"flex-wrap",2);t([e()],o.prototype,"place-items",2);t([e()],o.prototype,"place-content",2);o=t([f("gds-div")],o);export{o as G};
