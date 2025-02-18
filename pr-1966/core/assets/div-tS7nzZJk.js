import{h as g,n as b,g as f,G as h}from"./custom-element-scoping-BEGY3AqQ.js";import{t as u}from"./tokens.style-CFvqdzpw.js";import{w as m,a as v,b as w,c as x,d as P,e as z,s as e,g as y,p as _,f as c}from"./declarative-layout-mixins-C8_oSfbi.js";import{i as $}from"./lit-element-C_s9q329.js";const C=$`
  :host {
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-color-l2-border-primary);
  }
  :host(:focus-visible) {
    outline-color: color-mix(in srgb, currentcolor, #000 100%);
    outline-offset: var(--gds-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-space-3xs);
  }
`;var G=Object.defineProperty,T=Object.getOwnPropertyDescriptor,t=(l,s,r,i)=>{for(var p=i>1?void 0:i?T(s,r):s,n=l.length-1,a;n>=0;n--)(a=l[n])&&(p=(i?a(s,r,p):a(p))||p);return i&&p&&G(s,r,p),p};let o=class extends m(v(w(x(P(z(h)))))){constructor(){super(...arguments),this.level="2"}render(){return g`<slot></slot>`}};o.styles=[u,C];t([e()],o.prototype,"display",2);t([b()],o.prototype,"level",2);t([e(y("content"))],o.prototype,"color",2);t([e(y("background"))],o.prototype,"background",2);t([e({styleTemplate:function(l,s){const r=this,[i,p=r["border-style"]||"solid",n=r["border-color"]||"primary"]=s,a=`var(--gds-space-${i})`,d=_(n,"border",r.level);return`border: ${a} ${p} ${d};`}})],o.prototype,"border",2);t([e(y("border"))],o.prototype,"border-color",2);t([e(c)],o.prototype,"border-width",2);t([e()],o.prototype,"border-style",2);t([e(c)],o.prototype,"border-radius",2);t([e()],o.prototype,"opacity",2);t([e()],o.prototype,"overflow",2);t([e()],o.prototype,"box-sizing",2);t([e()],o.prototype,"z-index",2);t([e({styleTemplate:(l,s)=>{const r=s[0],i=`font-size: var(--gds-text-size-${r});`,p=`line-height: var(--gds-text-line-height-${r});`;return i+p}})],o.prototype,"font-size",2);t([e({property:"font-weight",valueTemplate:l=>`var(--gds-text-weight-${l})`})],o.prototype,"font-weight",2);t([e()],o.prototype,"text-align",2);t([e()],o.prototype,"text-wrap",2);t([e({...c,styleTemplate:(l,s)=>{const r=s[0],i=s[1]||r;return`gap: ${r} ${i};`},cacheOverrideKey:"flex"})],o.prototype,"gap",2);t([e()],o.prototype,"align-items",2);t([e()],o.prototype,"align-content",2);t([e()],o.prototype,"justify-content",2);t([e()],o.prototype,"justify-items",2);t([e()],o.prototype,"flex-direction",2);t([e()],o.prototype,"flex-wrap",2);t([e()],o.prototype,"place-items",2);t([e()],o.prototype,"place-content",2);o=t([f("gds-div")],o);export{o as G};
