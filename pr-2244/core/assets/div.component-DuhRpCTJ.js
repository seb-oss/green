import{n as g}from"./Reflect-DJ7r0WLU.js";import{h as b,g as f,G as m}from"./gds-element-DJNCW3iR.js";import{t as h}from"./tokens.style-B41Dpirr.js";import{w as u,a as w,b as v,c as x,d as P,e as _,s as e,g as n,p as $,f as d}from"./declarative-layout-mixins-CquYcIh8.js";import{i as z}from"./lit-element-Bx14lxc-.js";const C=z`
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
`;var T=Object.defineProperty,G=Object.getOwnPropertyDescriptor,t=(p,r,s,l)=>{for(var i=l>1?void 0:l?G(r,s):r,a=p.length-1,y;a>=0;a--)(y=p[a])&&(i=(l?y(r,s,i):y(i))||i);return l&&i&&T(r,s,i),i};let o=class extends u(w(v(x(P(_(m)))))){constructor(){super(...arguments),this.level="2"}render(){return b`<slot></slot>`}};o.styles=[h,C];t([e()],o.prototype,"display",2);t([g()],o.prototype,"level",2);t([e(n("content"))],o.prototype,"color",2);t([e(n("background"))],o.prototype,"background",2);t([e({styleTemplate:function(p,r){const s=this,[l,i=s["border-style"]||"solid",a=s["border-color"]||"primary"]=r,y=`var(--gds-sys-space-${l})`,c=$(a,"border",s.level);return`border: ${y} ${i} ${c};`}})],o.prototype,"border",2);t([e(n("border"))],o.prototype,"border-color",2);t([e(d)],o.prototype,"border-width",2);t([e()],o.prototype,"border-style",2);t([e(d)],o.prototype,"border-radius",2);t([e({valueTemplate:p=>`var(--gds-sys-shadow-${p}-01), var(--gds-sys-shadow-${p}-02)`})],o.prototype,"box-shadow",2);t([e()],o.prototype,"opacity",2);t([e()],o.prototype,"overflow",2);t([e()],o.prototype,"box-sizing",2);t([e()],o.prototype,"z-index",2);t([e({styleTemplate:(p,r)=>`font: var(--gds-sys-text-${r[0]});`})],o.prototype,"font",2);t([e({valueTemplate:p=>`var(--gds-sys-text-weight-${p})`})],o.prototype,"font-weight",2);t([e()],o.prototype,"text-align",2);t([e()],o.prototype,"text-wrap",2);t([e()],o.prototype,"overflow-wrap",2);t([e()],o.prototype,"white-space",2);t([e({...d,styleTemplate:(p,r)=>{const s=r[0],l=r[1]||s;return`gap: ${s} ${l};`},cacheOverrideKey:"flex"})],o.prototype,"gap",2);t([e()],o.prototype,"align-items",2);t([e()],o.prototype,"align-content",2);t([e()],o.prototype,"justify-content",2);t([e()],o.prototype,"justify-items",2);t([e()],o.prototype,"flex-direction",2);t([e()],o.prototype,"flex-wrap",2);t([e()],o.prototype,"place-items",2);t([e()],o.prototype,"place-content",2);o=t([f("gds-div")],o);export{o as G};
