import{x as ue,a as Ye,i as Q,r as y}from"./lit-element-Bx14lxc-.js";import{s as es}from"./chunk-GKNNPQCW-BkHQSocK.js";import{c as Re}from"./custom-elements-BpCwG0n2.js";import{r as ss}from"./transitional-styles-BVKDYdtY.js";import{j as f}from"./jsx-runtime-BjG_zV1W.js";import{u as We}from"./index-BpkT3Nfm.js";import{ag as Y,as as ts,ae as j,at as Ee,af as ns,au as os,av as rs,aw as as,ax as ls,ay as is}from"./index-vdv2ihiE.js";import{r as ye,n as u}from"./gds-element-DKcDvDP5.js";import{m as Te,l as ds,s as p,c as cs}from"./runtime-CNluP0A8.js";import{a as me}from"./query-p8xgzTDt.js";import{o as bs}from"./unsafe-html-CYO4avEf.js";import"./theme-CtQAT9Gd.js";import"./button-DvsBnM4i.js";import"./grid-WW5inqkO.js";import"./tokens.style-BAMmArAm.js";import"./iframe-CDc2c-38.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./directive-CF8sV3Lr.js";import"./theme.component-CgNV-Xxb.js";import"./watch-tFciLXSI.js";import"./button.component-Dvch3JiS.js";import"./class-map-CXsQwv0r.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-BN2gVja9.js";import"./grid.component-COlBE-wl.js";import"./div.component-CtWtQCO9.js";var fs=Object.defineProperty,gs=Object.getOwnPropertyDescriptor,l=(s,e,t,n)=>{for(var o=n>1?void 0:n?gs(e,t):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&fs(e,t,o),o},xe=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)},r=(s,e,t)=>(xe(s,e,"read from private field"),t?t.call(s):e.get(s)),d=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},k=(s,e,t,n)=>(xe(s,e,"write to private field"),e.set(s,t),t),C=(s,e,t)=>(xe(s,e,"access private method"),t);const R="-94bd25";class ve{static get instance(){var e;return(e=globalThis.__gdsElementLookupTable)!=null&&e[R]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[R]:new Map}),globalThis.__gdsElementLookupTable[R]}}const I=(s,e)=>function(t){var n;return n=class extends t{constructor(){super(...arguments),this.gdsElementName=s}static define(){if(n.isDefined)return;const a=globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?s:s+R;customElements.get(a)||(n.isDefined=!0,ve.instance.set(s,a),customElements.define(a,n),e!=null&&e.dependsOn&&e.dependsOn.forEach(i=>i.define()))}},n.isDefined=!1,n},ze=new WeakMap;function ps(s,...e){let t=ze.get(s);return t||(t=je(s),t.raw=je(s.raw),ze.set(s,t)),[t,...e]}const je=s=>s.map(e=>{for(const[t,n]of ve.instance.entries())e=e.replace(new RegExp(`${t}(?![-a-z])`,"mg"),n);return e});function hs(s){return(e,...t)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return s(e,...t);const[n,...o]=ps(e,...t);return s(n,...o)}}const ke=hs(ue);function us(s){return ve.instance.get(s)??s}function Se(s){return us(s)}var _,U,M,X,V,w,$,H,ne,Fe,F,G,oe,Pe;class ys{constructor(e){d(this,ne),d(this,F),d(this,oe),d(this,_,!_e()),d(this,U,!1),d(this,M,[]),d(this,X,[]),d(this,V,new Map),d(this,w,new Map),d(this,$,[]),d(this,H,[]),this.host=e,this.host.addController(this)}hostConnected(){C(this,oe,Pe).call(this)}has(e){return r(this,_)?r(this,w).has(e):r(this,V).has(e)}inject(e,t){C(this,ne,Fe).call(this,e,t),C(this,F,G).call(this)}clear(e){r(this,_)?this.host.updateComplete.then(()=>{const t=r(this,w).get(e);t==null||t.remove(),r(this,w).delete(e)}):r(this,V).delete(e),C(this,F,G).call(this)}clearAll(){r(this,_)?this.host.updateComplete.then(()=>{r(this,w).forEach(e=>e.remove()),r(this,$).forEach(e=>e.remove()),r(this,w).clear(),k(this,$,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],r(this,V).clear(),k(this,M,[]))}clearInitial(){r(this,_)?this.host.updateComplete.then(()=>{r(this,$).forEach(e=>e.remove()),k(this,$,[])}):k(this,M,[]),C(this,F,G).call(this)}restoreInitial(){r(this,_)?r(this,H).forEach(e=>{r(this,$).push(e.cloneNode(!0))}):k(this,M,[...r(this,X)]),C(this,F,G).call(this)}}_=new WeakMap;U=new WeakMap;M=new WeakMap;X=new WeakMap;V=new WeakMap;w=new WeakMap;$=new WeakMap;H=new WeakMap;ne=new WeakSet;Fe=function(s,e){if(r(this,_)){let t=r(this,w).get(s);t||(t=document.createElement("style"),r(this,w).set(s,t)),t.textContent=e.cssText}else{if(!this.host.shadowRoot||!e.styleSheet)return;r(this,V).set(s,e.styleSheet)}};F=new WeakSet;G=function(){if(r(this,_))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(s=>{s.remove()}),r(this,$).forEach(s=>{var e;(e=this.host.shadowRoot)==null||e.appendChild(s)}),r(this,w).forEach(s=>{var e;(e=this.host.shadowRoot)==null||e.appendChild(s)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...r(this,M),...Array.from(r(this,V).values())]}};oe=new WeakSet;Pe=function(){r(this,U)||(r(this,_)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(s=>{r(this,$).push(s),r(this,H).push(s.cloneNode(!0))})}):this.host.shadowRoot&&r(this,M).length===0&&(k(this,M,[...this.host.shadowRoot.adoptedStyleSheets||[]]),k(this,X,[...r(this,M)])),k(this,U,!0))};function _e(){try{return new CSSStyleSheet,!0}catch{return!1}}function Le(s){return s.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join("")}class W extends Ye{constructor(){super(),this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new ys(this)}static define(){}connectedCallback(){var e;super.connectedCallback(),this.setAttribute("gds-element",((e=this.gdsElementName)==null?void 0:e.toString())||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(e,t){const n={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new Event(e,n)),this.dispatchEvent(new Event(Le(e),n))].every(o=>o!==!1)}dispatchCustomEvent(e,t={}){const n={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new CustomEvent(e,n)),this.dispatchEvent(new CustomEvent(Le(e),n))].every(o=>o!==!1)}}W.isDefined=!1;W.styleExpressionBaseSelector=":host";l([ye()],W.prototype,"_isUsingTransitionalStyles",2);const Ge=`/**
 * Do not edit directly, this file was auto-generated.
 */

  --gds-sys-state-hover-state-layer-opacity: 0.10;
  --gds-sys-motion-easing-ease-in: cubic-bezier(0.64, 0, 0.78, 0);
  --gds-sys-motion-easing-ease-in-out: cubic-bezier(0.83, 0, 0.17, 1);
  --gds-sys-motion-easing-ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --gds-sys-motion-easing-linear: cubic-bezier(0, 0, 1, 1);
  --gds-sys-motion-duration-fastest: .2s;
  --gds-sys-motion-duration-fast: .4s;
  --gds-sys-motion-duration-default: .5s;
  --gds-sys-motion-duration-slow: 1s;
  --gds-sys-motion-duration-slowest: 1.5s;
  --gds-sys-viewport-xs: 375;
  --gds-sys-viewport-s: 430;
  --gds-sys-viewport-m: 768;
  --gds-sys-viewport-l: 1024;
  --gds-sys-viewport-xl: 1440;
  --gds-sys-viewport-2-xl: 2560;
  --gds-sys-viewport-3-xl: 3840;
  --gds-sys-text-size-heading-xl: 32px;
  --gds-sys-text-size-heading-l: 28px;
  --gds-sys-text-size-heading-m: 24px;
  --gds-sys-text-size-heading-s: 20px;
  --gds-sys-text-size-heading-xs: 16px;
  --gds-sys-text-size-heading-2xs: 14px;
  --gds-sys-text-size-heading-2xl: 14px;
  --gds-sys-text-size-detail-m: 16px;
  --gds-sys-text-size-detail-s: 14px;
  --gds-sys-text-size-detail-xs: 12px;
  --gds-sys-text-size-body-l: 20px;
  --gds-sys-text-size-body-m: 16px;
  --gds-sys-text-size-body-s: 14px;
  --gds-sys-text-size-display-2xl: 82px;
  --gds-sys-text-size-display-xl: 64px;
  --gds-sys-text-size-display-l: 48px;
  --gds-sys-text-size-display-m: 36px;
  --gds-sys-text-size-display-s: 32px;
  --gds-sys-text-size-preamble-2xl: 32px;
  --gds-sys-text-size-preamble-xl: 28px;
  --gds-sys-text-size-preamble-l: 24px;
  --gds-sys-text-size-preamble-m: 20px;
  --gds-sys-text-size-preamble-s: 18px;
  --gds-sys-text-size-preamble-xs: 16px;
  --gds-sys-text-line-height-heading-xl: 44px;
  --gds-sys-text-line-height-heading-l: 40px;
  --gds-sys-text-line-height-heading-m: 32px;
  --gds-sys-text-line-height-heading-s: 28px;
  --gds-sys-text-line-height-heading-xs: 24px;
  --gds-sys-text-line-height-heading-2xs: 20px;
  --gds-sys-text-line-height-detail-m: 20px;
  --gds-sys-text-line-height-detail-s: 18px;
  --gds-sys-text-line-height-detail-xs: 16px;
  --gds-sys-text-line-height-body-l: 26px;
  --gds-sys-text-line-height-body-m: 24px;
  --gds-sys-text-line-height-body-s: 20px;
  --gds-sys-text-line-height-display-2xl: 90px;
  --gds-sys-text-line-height-display-xl: 72px;
  --gds-sys-text-line-height-display-l: 56px;
  --gds-sys-text-line-height-display-m: 44px;
  --gds-sys-text-line-height-display-s: 40px;
  --gds-sys-text-line-height-preamble-2xl: 40px;
  --gds-sys-text-line-height-preamble-xl: 36px;
  --gds-sys-text-line-height-preamble-l: 32px;
  --gds-sys-text-line-height-preamble-m: 28px;
  --gds-sys-text-line-height-preamble-s: 26px;
  --gds-sys-text-line-height-preamble-xs: 24px;
  --gds-sys-text-weight-light: 300;
  --gds-sys-text-weight-regular: 400;
  --gds-sys-text-weight-book: 450;
  --gds-sys-text-weight-medium: 500;
  --gds-sys-text-weight-bold: 700;
  --gds-sys-space-0: 0px;
  --gds-sys-space-4xs: 1px;
  --gds-sys-space-3xs: 2px;
  --gds-sys-space-2xs: 4px;
  --gds-sys-space-xs: 8px;
  --gds-sys-space-s: 12px;
  --gds-sys-space-m: 16px;
  --gds-sys-space-l: 24px;
  --gds-sys-space-xl: 32px;
  --gds-sys-space-2xl: 40px;
  --gds-sys-space-3xl: 48px;
  --gds-sys-space-4xl: 64px;
  --gds-sys-space-5xl: 80px;
  --gds-sys-space-6xl: 96px;
  --gds-sys-space-7xl: 112px;
  --gds-sys-space-8xl: 120px;
  --gds-sys-space-max: 999px;`,re=`/**
 * Do not edit directly, this file was auto-generated.
 */


  color-scheme: dark;
  --gds-sys-color-l1-background-primary: #0e0e0e;
  --gds-sys-color-l1-background-tertiary: #d7d7d7;
  --gds-sys-color-l1-background-secondary: #131313;
  --gds-sys-color-l1-content-positive: #54b561;
  --gds-sys-color-l1-content-negative: #a63e2a;
  --gds-sys-color-l1-content-primary: #d7d7d7;
  --gds-sys-color-l1-content-secondary: #ababab;
  --gds-sys-color-l1-content-tertiary: #1b1b1b;
  --gds-sys-color-l2-background-primary: #242424;
  --gds-sys-color-l2-background-secondary: #242424;
  --gds-sys-color-l2-background-tertiary: #d7d7d7;
  --gds-sys-color-l2-background-positive: #1d3f22;
  --gds-sys-color-l2-background-negative: #4a1c13;
  --gds-sys-color-l2-background-notice: #152c41;
  --gds-sys-color-l2-background-warning: #4c3212;
  --gds-sys-color-l2-background-information: #353535;
  --gds-sys-color-l2-background-copper-01: #f2efeb;
  --gds-sys-color-l2-background-copper-02: #332a18;
  --gds-sys-color-l2-background-purple-01: #f3eff7;
  --gds-sys-color-l2-background-purple-02: #372b40;
  --gds-sys-color-l2-background-green-01: #ecf6ed;
  --gds-sys-color-l2-background-green-02: #1d3f22;
  --gds-sys-color-l2-background-blue-01: #eaf0f7;
  --gds-sys-color-l2-background-blue-02: #152c41;
  --gds-sys-color-l2-content-primary: #d7d7d7;
  --gds-sys-color-l2-content-secondary: #ababab;
  --gds-sys-color-l2-content-tertiary: #1b1b1b;
  --gds-sys-color-l2-content-positive: #54b561;
  --gds-sys-color-l2-content-negative: #ee8375;
  --gds-sys-color-l2-content-warning: #f3b274;
  --gds-sys-color-l2-content-notice: #78a3d5;
  --gds-sys-color-l2-content-information: #d7d7d7;
  --gds-sys-color-l2-content-copper-01: #1b1b1b;
  --gds-sys-color-l2-content-copper-02: #ffffff;
  --gds-sys-color-l2-content-purple-01: #1b1b1b;
  --gds-sys-color-l2-content-purple-02: #ffffff;
  --gds-sys-color-l2-content-green-01: #1b1b1b;
  --gds-sys-color-l2-content-green-02: #ffffff;
  --gds-sys-color-l2-content-blue-01: #1b1b1b;
  --gds-sys-color-l2-content-blue-02: #ffffff;
  --gds-sys-color-l2-border-primary: #353535;
  --gds-sys-color-l2-border-secondary: #5e5e5e;
  --gds-sys-color-l2-border-tertiary: #2c2c2c;
  --gds-sys-color-l2-border-quarternary: #d7d7d7;
  --gds-sys-color-l2-border-inversed: #1b1b1b;
  --gds-sys-color-l3-background-primary: #d7d7d7;
  --gds-sys-color-l3-background-secondary: #353535;
  --gds-sys-color-l3-background-tertiary: #424242;
  --gds-sys-color-l3-background-quarternary: #0e0e0e;
  --gds-sys-color-l3-background-positive: #54b561;
  --gds-sys-color-l3-background-positive-secondary: #25512b;
  --gds-sys-color-l3-background-positive-badge: #306938;
  --gds-sys-color-l3-background-negative: #c04831;
  --gds-sys-color-l3-background-negative-secondary: #602418;
  --gds-sys-color-l3-background-negative-badge: #4a1c13;
  --gds-sys-color-l3-background-notice: #78a3d5;
  --gds-sys-color-l3-background-notice-secondary: #1a3853;
  --gds-sys-color-l3-background-notice-badge: #214769;
  --gds-sys-color-l3-background-warning: #f3b274;
  --gds-sys-color-l3-background-warning-secondary: #624017;
  --gds-sys-color-l3-background-warning-badge: #744c1b;
  --gds-sys-color-l3-background-information: #d7d7d7;
  --gds-sys-color-l3-background-information-secondary: #424242;
  --gds-sys-color-l3-background-information-badge: #616161;
  --gds-sys-color-l3-background-buy: #3571a6;
  --gds-sys-color-l3-background-copper-01: #e4ded5;
  --gds-sys-color-l3-background-copper-02: #42361f;
  --gds-sys-color-l3-background-purple-01: #e7deee;
  --gds-sys-color-l3-background-purple-02: #473752;
  --gds-sys-color-l3-background-green-01: #d7edd9;
  --gds-sys-color-l3-background-green-02: #25512b;
  --gds-sys-color-l3-background-blue-01: #d3dfef;
  --gds-sys-color-l3-background-blue-02: #1a3853;
  --gds-sys-color-l3-background-disabled: #181818;
  --gds-sys-color-l3-background-disabled-secondary: #1b1b1b;
  --gds-sys-color-l3-content-primary: #1b1b1b;
  --gds-sys-color-l3-content-secondary: #ababab;
  --gds-sys-color-l3-content-tertiary: #d7d7d7;
  --gds-sys-color-l3-content-notice: #78a3d5;
  --gds-sys-color-l3-content-warning: #f3b274;
  --gds-sys-color-l3-content-information: #d7d7d7;
  --gds-sys-color-l3-content-buy: #ffffff;
  --gds-sys-color-l3-content-copper-01: #1b1b1b;
  --gds-sys-color-l3-content-copper-02: #ffffff;
  --gds-sys-color-l3-content-purple-01: #1b1b1b;
  --gds-sys-color-l3-content-purple-02: #ffffff;
  --gds-sys-color-l3-content-green-01: #1b1b1b;
  --gds-sys-color-l3-content-green-02: #ffffff;
  --gds-sys-color-l3-content-blue-01: #1b1b1b;
  --gds-sys-color-l3-content-blue-02: #ffffff;
  --gds-sys-color-l3-content-disabled: #5e5e5e;
  --gds-sys-color-l3-content-positive: #54b561;
  --gds-sys-color-l3-content-negative: #ee8375;
  --gds-sys-color-l3-border-primary: #d7d7d7;
  --gds-sys-color-l3-border-secondary: #ababab;
  --gds-sys-color-l3-border-tertiary: #1b1b1b;
  --gds-sys-color-l3-border-negative: #ee8375;
  --gds-sys-color-l3-states-dark-hover: #ffffff 15%;
  --gds-sys-color-l3-states-dark-pressed: #ffffff 25%;
  --gds-sys-color-l3-states-light-hover: #d7d7d7 10%;
  --gds-sys-color-l3-states-light-pressed: #d7d7d7 20%;
  --gds-sys-color-l3-states-positive-hover: #54b561 10%;
  --gds-sys-color-l3-states-positive-pressed: #54b561 20%;
  --gds-sys-color-l3-states-negative-hover: #ee8375 10%;
  --gds-sys-color-l3-states-negative-pressed: #ee8375 20%;`,Ne=`/**
 * Do not edit directly, this file was auto-generated.
 */


  color-scheme: light;
  --gds-sys-color-l1-background-primary: #ffffff;
  --gds-sys-color-l1-background-tertiary: #1b1b1b;
  --gds-sys-color-l1-background-secondary: #eeeeee;
  --gds-sys-color-l1-content-positive: #35723d;
  --gds-sys-color-l1-content-negative: #a63e2a;
  --gds-sys-color-l1-content-primary: #1b1b1b;
  --gds-sys-color-l1-content-secondary: #5e5e5e;
  --gds-sys-color-l1-content-tertiary: #ffffff;
  --gds-sys-color-l2-background-primary: #f3f3f3;
  --gds-sys-color-l2-background-secondary: #ffffff;
  --gds-sys-color-l2-background-tertiary: #242424;
  --gds-sys-color-l2-background-positive: #ecf6ed;
  --gds-sys-color-l2-background-negative: #fcecea;
  --gds-sys-color-l2-background-notice: #eaf0f7;
  --gds-sys-color-l2-background-warning: #fcecbc;
  --gds-sys-color-l2-background-information: #e2e2e2;
  --gds-sys-color-l2-background-copper-01: #f2efeb;
  --gds-sys-color-l2-background-copper-02: #332a18;
  --gds-sys-color-l2-background-purple-01: #f3eff7;
  --gds-sys-color-l2-background-purple-02: #372b40;
  --gds-sys-color-l2-background-green-01: #ecf6ed;
  --gds-sys-color-l2-background-green-02: #1d3f22;
  --gds-sys-color-l2-background-blue-01: #eaf0f7;
  --gds-sys-color-l2-background-blue-02: #152c41;
  --gds-sys-color-l2-content-primary: #1b1b1b;
  --gds-sys-color-l2-content-secondary: #5e5e5e;
  --gds-sys-color-l2-content-tertiary: #ffffff;
  --gds-sys-color-l2-content-positive: #35723d;
  --gds-sys-color-l2-content-negative: #a63e2a;
  --gds-sys-color-l2-content-warning: #65581e;
  --gds-sys-color-l2-content-notice: #005fac;
  --gds-sys-color-l2-content-information: #1b1b1b;
  --gds-sys-color-l2-content-copper-01: #1b1b1b;
  --gds-sys-color-l2-content-copper-02: #ffffff;
  --gds-sys-color-l2-content-purple-01: #1b1b1b;
  --gds-sys-color-l2-content-purple-02: #ffffff;
  --gds-sys-color-l2-content-green-01: #1b1b1b;
  --gds-sys-color-l2-content-green-02: #ffffff;
  --gds-sys-color-l2-content-blue-01: #1b1b1b;
  --gds-sys-color-l2-content-blue-02: #ffffff;
  --gds-sys-color-l2-border-primary: #d7d7d7;
  --gds-sys-color-l2-border-secondary: #6f6f6f;
  --gds-sys-color-l2-border-tertiary: #f9f9f9;
  --gds-sys-color-l2-border-quarternary: #1b1b1b;
  --gds-sys-color-l2-border-inversed: #ffffff;
  --gds-sys-color-l3-background-primary: #003824;
  --gds-sys-color-l3-background-secondary: #e2e2e2;
  --gds-sys-color-l3-background-tertiary: #d7d7d7;
  --gds-sys-color-l3-background-quarternary: #ffffff;
  --gds-sys-color-l3-background-positive: #35723d;
  --gds-sys-color-l3-background-positive-secondary: #d7edd9;
  --gds-sys-color-l3-background-positive-badge: #d7edd9;
  --gds-sys-color-l3-background-negative: #a63e2a;
  --gds-sys-color-l3-background-negative-secondary: #fcecea;
  --gds-sys-color-l3-background-negative-badge: #f8d6d3;
  --gds-sys-color-l3-background-notice: #005fac;
  --gds-sys-color-l3-background-notice-secondary: #d3dfef;
  --gds-sys-color-l3-background-notice-badge: #d3dfef;
  --gds-sys-color-l3-background-warning: #65581e;
  --gds-sys-color-l3-background-warning-secondary: #fadf7b;
  --gds-sys-color-l3-background-warning-badge: #fadf7b;
  --gds-sys-color-l3-background-information: #1b1b1b;
  --gds-sys-color-l3-background-information-secondary: #d7d7d7;
  --gds-sys-color-l3-background-information-badge: #d7d7d7;
  --gds-sys-color-l3-background-buy: #2e6290;
  --gds-sys-color-l3-background-copper-01: #e4ded5;
  --gds-sys-color-l3-background-copper-02: #42361f;
  --gds-sys-color-l3-background-purple-01: #e7deee;
  --gds-sys-color-l3-background-purple-02: #473752;
  --gds-sys-color-l3-background-green-01: #d7edd9;
  --gds-sys-color-l3-background-green-02: #25512b;
  --gds-sys-color-l3-background-blue-01: #d3dfef;
  --gds-sys-color-l3-background-blue-02: #1a3853;
  --gds-sys-color-l3-background-disabled: #f9f9f9;
  --gds-sys-color-l3-background-disabled-secondary: #f3f3f3;
  --gds-sys-color-l3-content-primary: #ffffff;
  --gds-sys-color-l3-content-secondary: #5e5e5e;
  --gds-sys-color-l3-content-tertiary: #1b1b1b;
  --gds-sys-color-l3-content-notice: #005fac;
  --gds-sys-color-l3-content-warning: #65581e;
  --gds-sys-color-l3-content-information: #1b1b1b;
  --gds-sys-color-l3-content-buy: #ffffff;
  --gds-sys-color-l3-content-copper-01: #1b1b1b;
  --gds-sys-color-l3-content-copper-02: #ffffff;
  --gds-sys-color-l3-content-purple-01: #1b1b1b;
  --gds-sys-color-l3-content-purple-02: #ffffff;
  --gds-sys-color-l3-content-green-01: #1b1b1b;
  --gds-sys-color-l3-content-green-02: #ffffff;
  --gds-sys-color-l3-content-blue-01: #1b1b1b;
  --gds-sys-color-l3-content-blue-02: #ffffff;
  --gds-sys-color-l3-content-disabled: #ababab;
  --gds-sys-color-l3-content-positive: #35723d;
  --gds-sys-color-l3-content-negative: #a63e2a;
  --gds-sys-color-l3-border-primary: #1b1b1b;
  --gds-sys-color-l3-border-secondary: #6f6f6f;
  --gds-sys-color-l3-border-tertiary: #d7d7d7;
  --gds-sys-color-l3-border-negative: #a63e2a;
  --gds-sys-color-l3-states-dark-hover: #ffffff 15%;
  --gds-sys-color-l3-states-dark-pressed: #ffffff 25%;
  --gds-sys-color-l3-states-light-hover: #1b1b1b 10%;
  --gds-sys-color-l3-states-light-pressed: #1b1b1b 20%;
  --gds-sys-color-l3-states-positive-hover: #35723d 10%;
  --gds-sys-color-l3-states-positive-pressed: #35723d 20%;
  --gds-sys-color-l3-states-negative-hover: #a63e2a 10%;
  --gds-sys-color-l3-states-negative-pressed: #a63e2a 20%;`,Ie=`/**
 * Do not edit directly, this file was auto-generated.
 */

--gds-sys-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
--gds-sys-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
--gds-sys-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);
--gds-sys-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03);
--gds-sys-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03);
`;var ms={};const we=typeof process<"u"&&ms!==void 0;var ae,Z,K,Ce,le,Be,ie,Je;function xs(){return we?[]:document.adoptedStyleSheets||[]}const vs=class qe{constructor(){d(this,le),d(this,ie),d(this,ae,!_e()),d(this,Z,new Map),d(this,K,new Map),d(this,Ce,xs())}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new qe),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(e,t){if(r(this,ae)){const n=Array.isArray(t)?t.map(o=>o.toString()).join(""):t.toString();C(this,le,Be).call(this,e,n)}else t.styleSheet&&C(this,ie,Je).call(this,e,t.styleSheet)}};ae=new WeakMap;Z=new WeakMap;K=new WeakMap;Ce=new WeakMap;le=new WeakSet;Be=function(s,e){if(we)return;let t=r(this,K).get(s);t||(t=document.createElement("style"),r(this,K).set(s,t)),t.textContent=e,document.head.appendChild(t)};ie=new WeakSet;Je=function(s,e){we||(r(this,Z).set(s,e),document.adoptedStyleSheets=[...r(this,Ce),...Array.from(r(this,Z).values())])};let ks=vs;const ee=[Q`
    :host {
      ${y(Ge)}
      ${y(Ie)}
    }
  `];ks.instance.injectGlobalStyles("root-tokens",Q`
    :root,
    :root[gds-theme='light'] {
      ${y(Ge)}
      ${y(Ie)}
      ${y(Ne)}
    }
    :root[gds-theme='dark'] {
      ${y(re)}
    }
  `);var B,J,de;const Ss=class Ue{constructor(){d(this,B,new Map),d(this,J,new Map),d(this,de,!_e())}static get instance(){var e;return(e=globalThis.__gdsTransitionalStyles)!=null&&e[R]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[R]:new Ue}),globalThis.__gdsTransitionalStyles[R]}apply(e,t){if(!e.shadowRoot)return;const n=r(this,B).get(t);n&&(r(this,J).set(t,e),this.applyToElement(t,n))}applyToElement(e,t){var z,c;const n=r(this,J).get(e);if(!n||!n.shadowRoot)return;const o=()=>{n._dynamicStylesController.clearInitial(),n._dynamicStylesController.inject("t-styles",y(t)),n._isUsingTransitionalStyles=!0},a=()=>{n._isUsingTransitionalStyles=!1,n._dynamicStylesController.clear("t-styles"),n._dynamicStylesController.restoreInitial()},i="[gds-element=gds-theme]";let h=n.getRootNode(),x=n.closest(i);for(;x===null&&h!==document;)x=(z=h.host)==null?void 0:z.closest(i),h=(c=h.host)==null?void 0:c.getRootNode();if(x){const g=x,S=()=>{g.designVersion==="2023"?a():o()};if(g.addEventListener("gds-design-version-changed",S),n.addEventListener("gds-element-disconnected",()=>g.removeEventListener("gds-design-version-changed",S)),g.designVersion==="2023"){a();return}}o()}register(e,t){let n=t;r(this,de)&&(n=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${t}`),r(this,B).set(e,n),this.applyToElement(e,n)}};B=new WeakMap;J=new WeakMap;de=new WeakMap;let $e=Ss;function Me(s,e){const t={waitUntilFirstUpdate:!1,...e};return(n,o,a)=>{const{update:i}=n,h=Array.isArray(s)?s:[s];n.update=function(x){h.forEach(z=>{var g;const c=z;if(x.has(c)){const S=x.get(c),P=this[c];S!==P&&(!t.waitUntilFirstUpdate||this.hasUpdated)&&((g=a.value)==null||g.call(this,S,P))}}),i.call(this,x)}}}const _s={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},ws=/^([<|>]=?)?([0-9a-z]+)/,Xe=["{","}",";",":",","],Oe=[" ","/n"];function Cs(s=""){const e=[];let t="";for(let n=0;n<s.length;n++){const o=s[n];if(Oe.includes(o)||(t+=o),Xe.includes(o)){e.push(t.slice(0,-1)),e.push(o),t="";continue}if(Oe.includes(o)||n===s.length-1){e.push(t),t="";continue}}return e.filter(n=>n!=="")}function $s(s){const e=[];let t={breakpoint:"-",values:[]};const n=()=>({sel:"",values:[]});let o=n();for(const a of s){if(!Xe.includes(a)){o.values.push(a);continue}if(a==="{"&&(t={breakpoint:o.values.join(","),values:[]},o=n()),a===";"&&(e.length===0&&e.push(t),o.values.length>0&&(t.values.push(o),o=n())),a===":"){const i=o.values.pop()??"";o.sel=i}t&&a==="}"&&(t.values.push(o),o=n(),e.push(t))}return o.values.length>0&&t.values.push(o),e.length===0&&e.push(t),e}function Ms(s){return s.split(",").map(t=>{const n=t.trim().match(ws);if(!n)throw new Error(`Invalid breakpoint specifier: ${t}`);return{condition:n[1],value:n[2]}})}function Es(s,e,t,n=a=>a,o=(a,i)=>`${a}: ${i.join(" ")};`){let a="";for(const i of t){const z=`@media ${(i.breakpoint==="-"?[{condition:">=",value:"0"}]:Ms(i.breakpoint)).map(c=>{var g;return`(${(g=c.condition)!=null&&g.includes("<")?"max-width":"min-width"}: ${_s[c.value]??c.value})`}).join(" and ")} {${i.values.map(c=>{let g=s;c.sel.length>0&&(g=s===":host"?`:host(:${c.sel})`:`${s}:${c.sel}`);const S=o(e,c.values.map(n));return c.sel==="hover"?`@media (hover: hover) {${g}{${S}}}`:`${g}{${S}}`}).join("")}}`;a+=z}return a}const se=new Map;function b(s){return(e,t)=>{const n=(s==null?void 0:s.property)??String(t),o=s==null?void 0:s.valueTemplate,a=s==null?void 0:s.styleTemplate,i=(s==null?void 0:s.cacheOverrideKey)??"0";u({attribute:s==null?void 0:s.attribute,noAccessor:!0})(e,t),Object.defineProperty(e,t,{get:function(){return this["__"+String(t)]},set:async function(h){if(!h)return;this["__"+String(t)]=h,await this.updateComplete;const x=(s==null?void 0:s.selector)??this.constructor.styleExpressionBaseSelector,z=this.level??"0",c=x+n+h+z+i;if(se.has(c)){this._dynamicStylesController.inject(`sep_${String(t)}`,se.get(c));return}const g=$s(Cs(h)),S=Es(x,n,g,o==null?void 0:o.bind(this),a==null?void 0:a.bind(this)),P=y(S);se.set(c,P),this._dynamicStylesController.inject(`sep_${String(t)}`,P)}})}}function Ts(s,e,t){if(s==="transparent"||s==="currentColor"||s==="inherit")return s;const[n,o]=s.split("/"),a=`var(--gds-sys-color-l${t}-${e}-${n})`;return o?`color-mix(in srgb, ${a} ${parseFloat(o)*100}%, transparent 0%)`:a}function zs(s){return{valueTemplate:function(e){return Ts(e,s,this.level)}}}const D={valueTemplate:s=>`var(--gds-sys-space-${js(s)}, ${s})`},te={valueTemplate:s=>{const t=(s.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${s})`:`calc(var(--gds-sys-space-${s.substring(1)}) * -1)`;return s==="auto"?"auto":t},styleTemplate:(s,e)=>{const t=h=>h==="auto"?"auto":`${h}`,n=t(e[0]),o=e.length>1?t(e[1]):n,a=e.length>2?t(e[2]):n,i=e.length>3?t(e[3]):o;return`${s}: ${n} ${o} ${a} ${i};`}};function js(s){return s.replace(/[^a-zA-Z0-9-]/g,"")}function He(s){class e extends s{}return l([b(D)],e.prototype,"width",2),l([b(D)],e.prototype,"min-width",2),l([b(D)],e.prototype,"max-width",2),l([b(D)],e.prototype,"inline-size",2),l([b(D)],e.prototype,"min-inline-size",2),l([b(D)],e.prototype,"max-inline-size",2),e}function Ze(s){class e extends s{}return l([b(te)],e.prototype,"margin",2),l([b(te)],e.prototype,"margin-inline",2),l([b(te)],e.prototype,"margin-block",2),e}function Ke(s){class e extends s{}return l([b()],e.prototype,"align-self",2),l([b()],e.prototype,"justify-self",2),l([b()],e.prototype,"place-self",2),l([b()],e.prototype,"grid-column",2),l([b()],e.prototype,"grid-row",2),l([b()],e.prototype,"grid-area",2),l([b()],e.prototype,"flex",2),l([b()],e.prototype,"order",2),e}const Ls=Q`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    svg {
      display: block;
      height: 1lh;
      width: auto;
    }
  }
`;var Os=Ls;class m extends Ze(Ke(W)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.box=!1,this.label=""}get svgAttributes(){const e=this.constructor,t={fill:"none",xmlns:"http://www.w3.org/2000/svg",...this.size===void 0&&{width:this.width||e._width,height:this.width||e._height}||{},viewBox:this.box||e._viewBox,part:"icon"};return this.label?{...t,"aria-label":this.label}:{...t,role:"presentation"}}get svgContent(){const e=this.constructor;return this.solid?e._solidSVG:e._regularSVG}applyStroke(e){return this.stroke?e.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):e}generateAttributesString(e){return Object.entries(e).filter(([t,n])=>n!==void 0).map(([t,n])=>`${t}="${n}"`).join(`
      `)}render(){const e=this.svgAttributes;let t=this.svgContent||"";this.stroke&&(t=this.applyStroke(t));const n=`
      <svg ${this.generateAttributesString(e)}>
        ${t}
      </svg>
    `;return ue`${bs(n)}`}}m.styles=[ee,Os];l([b({...D,property:"height",selector:"svg"})],m.prototype,"size",2);l([u({type:Number})],m.prototype,"width",2);l([u({type:Number})],m.prototype,"height",2);l([u({type:Boolean})],m.prototype,"solid",2);l([u({type:Number})],m.prototype,"stroke",2);l([u()],m.prototype,"level",2);l([b(zs("content"))],m.prototype,"color",2);l([u({type:String})],m.prototype,"box",2);l([u({type:String})],m.prototype,"label",2);m.define();let E=class extends m{};E._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';E._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>';E._name="chevron-left";E._width=24;E._height=24;E._viewBox="0 0 24 24";E=l([I("gds-icon-chevron-left")],E);let T=class extends m{};T._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';T._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>';T._name="chevron-right";T._width=24;T._height=24;T._viewBox="0 0 24 24";T=l([I("gds-icon-chevron-right")],T);function As(){return(s,e,t)=>{const n=s.connectedCallback,o=s.disconnectedCallback;s.connectedCallback=function(){n==null||n.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[e]=new ResizeObserver(()=>{this.__resizeObserver_tids[e]&&clearTimeout(this.__resizeObserver_tids[e]),this.__resizeObserver_tids[e]=setTimeout(()=>{var a;(a=t.value)==null||a.call(this)},20)}),this.__resizeObservers[e].observe(this)},s.disconnectedCallback=function(){o==null||o.call(this),this.__resizeObservers[e].disconnect()}}}const Ds=`@layer base {
  :host {
    display: flex;
    z-index: 1;
  }

  button {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    background: transparent;
    border-radius: var(--gds-sys-space-max);
    border-width: 0;
    color: var(--gds-sys-color-l3-content-tertiary);
    cursor: pointer;
    flex-grow: 1;
    flex-shrink: 0;
    font-family: inherit;
    font-size: inherit;
    overflow: hidden;
    padding: 0 1rem;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    transition:
      background-color 0.2s,
      border-color 0.2s,
      color 0.2s,
      outline-color 422ms;

    outline-width: var(--gds-size-3xs);
    outline-style: solid;
    outline-offset: -2px;
    outline-color: transparent;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  @media (pointer: fine) {
    :host(:not([selected])) button:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-l3-states-light-hover),
        transparent
      );

      &:disabled {
        background-color: transparent;
      }
    }
  }

  button:focus-visible {
    outline-color: color-mix(
      in srgb,
      transparent,
      var(--gds-sys-color-l3-content-tertiary) 100%
    );
  }
}
`;let O=class extends He(W){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),$e.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return ke`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};O.styles=[...ee,y(Ds)];l([u({type:Boolean,reflect:!0})],O.prototype,"selected",2);l([u()],O.prototype,"value",2);l([u({type:Boolean,reflect:!0})],O.prototype,"disabled",2);O=l([I("gds-segment")],O);const Vs=`@layer base {
  :host {
    background-color: var(--gds-sys-color-l3-background-secondary);
    border: 0.25rem solid transparent;
    border-radius: var(--gds-sys-space-max);
    box-sizing: border-box;
    contain: layout;
    display: inline-flex;
    height: 3rem;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  :host([size='small']) {
    height: 2.5rem;
  }

  #track {
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    scroll-snap-type: inline mandatory;
    overscroll-behavior-x: contain;
    scroll-behavior: smooth;
    overflow-x: scroll;
    gap: 0.25rem;
    position: relative;
    scrollbar-width: none;
  }

  #track::-webkit-scrollbar {
    display: none;
  }

  #btn-prev,
  #btn-next {
    box-sizing: border-box;
    align-items: center;
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    aspect-ratio: 1;
    border-radius: var(--gds-sys-space-max);
    border-width: 0;
    background-color: var(--gds-sys-color-l3-background-secondary);
    color: var(--gds-sys-color-l3-content-tertiary);
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    height: 100%;
    justify-content: center;
    width: 2.5rem;
    transition: 0.2s;
    z-index: 2;
    position: absolute;

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-background-secondary),
          var(--gds-sys-color-l3-states-light-hover)
        );
      }
    }
  }
  #btn-prev {
    margin: 0 0.25rem 0 0;
  }
  #btn-next {
    margin: 0 0 0 0.25rem;
    right: 0;
  }

  #btn-prev[aria-hidden='true'],
  #btn-next[aria-hidden='true'] {
    opacity: 0;
    width: 0;
    margin: 0;
    padding: 0;
  }

  :host([size='small']) #btn-prev,
  :host([size='small']) #btn-next {
    width: 2rem;
  }

  ::slotted(*) {
    flex-grow: 1;
    flex-shrink: 0;
    z-index: 1;
    scroll-margin: 0 2.75rem;
    scroll-snap-align: start;
  }

  #indicator {
    background-color: var(--gds-sys-color-l3-background-quarternary);
    border-radius: var(--gds-sys-space-max);
    height: 100%;
    left: 0;
    position: absolute;
    z-index: 0;
    transition:
      transform 0.2s,
      width 0.2s;
    z-index: 0;
  }
}
`;var L,ce,Qe,be,fe,ge,N,q,pe,he;const Rs=(s,e)=>{let t;return()=>{clearTimeout(t),t=setTimeout(s,e)}};let v=class extends Ke(He(Ze(W))){constructor(){super(...arguments),d(this,ce),this.size="medium",d(this,L,void 0),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,d(this,be,()=>{const e=this.segments.filter((t,n,o)=>{var a;return((a=o[n+1])==null?void 0:a.isVisible)&&!t.isVisible})[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),d(this,fe,()=>{const e=this.segments.filter((t,n,o)=>{var a;return((a=o[n-1])==null?void 0:a.isVisible)&&!t.isVisible}).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),d(this,ge,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),d(this,N,Rs(r(this,ge),50)),d(this,q,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,n=e.offsetLeft;this._elIndicator.style.transform=`translateX(${n}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),d(this,pe,e=>{const t=this.segments.find(n=>n===e.target||n.contains(e.target));t&&(this.segments.forEach(n=>n.selected=!1),t.selected=!0,k(this,L,t.value),r(this,q).call(this),this.dispatchCustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0}))}),d(this,he,()=>{r(this,L)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===r(this,L));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return r(this,L)}set value(e){k(this,L,e),r(this,he).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),$e.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{r(this,N).call(this)})})}render(){return ke`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${r(this,be)}
        aria-label=${Te("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${r(this,pe)}
          @slotchange=${C(this,ce,Qe)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${r(this,fe)}
        aria-label=${Te("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{r(this,N).call(this),r(this,q).call(this)})}};L=new WeakMap;ce=new WeakSet;Qe=function(){var e,t;const s=(e=this.segments.find(n=>n.selected))==null?void 0:e.value;s&&k(this,L,s),(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=new IntersectionObserver(n=>{n.forEach(o=>{const a=o.target;a._isVisible=o.intersectionRatio>.99,r(this,N).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(n=>{var o;(o=this.intersectionObserver)==null||o.observe(n)})};be=new WeakMap;fe=new WeakMap;ge=new WeakMap;N=new WeakMap;q=new WeakMap;pe=new WeakMap;he=new WeakMap;v.styles=[ee,y(Vs)];l([u({reflect:!0})],v.prototype,"size",2);l([u()],v.prototype,"value",1);l([me("slot")],v.prototype,"_elSlot",2);l([me("#indicator")],v.prototype,"_elIndicator",2);l([me("#track")],v.prototype,"_elTrack",2);l([ye()],v.prototype,"_showPrevButton",2);l([ye()],v.prototype,"_showNextButton",2);l([As(),Me("value")],v.prototype,"_recalculateMinWidth",1);v=l([I("gds-segmented-control",{dependsOn:[O,E,T]}),ds()],v);let A=class extends W{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2016"}connectedCallback(){super.connectedCallback(),$e.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",y(`:host {${re}}`))}render(){return ke`<slot></slot>`}_onColorSchemeChange(){this.colorScheme==="dark"?this._dynamicStylesController.inject("color-scheme",y(`:host { ${re}}`)):this._dynamicStylesController.inject("color-scheme",y(`:host { ${Ne}}`)),this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}_onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}};A.styles=[ee,Q`
      :host {
        display: contents;
      }
    `];l([u({reflect:!0,attribute:"color-scheme"})],A.prototype,"colorScheme",2);l([u({reflect:!0,attribute:"design-version"})],A.prototype,"designVersion",2);l([Me("colorScheme")],A.prototype,"_onColorSchemeChange",1);l([Me("designVersion")],A.prototype,"_onDesignVersionChange",1);A=l([I("gds-theme")],A);const Ws=s=>{v.define();const e=Se("gds-segmented-control"),t={...s,class:s.className};return Y.createElement(e,t)},Fs=s=>{A.define();const e=Se("gds-theme"),t={...s,class:s.className};return Y.createElement(e,t)},Ae=s=>{O.define();const e=Se("gds-segment"),t={...s,class:s.className};return Y.createElement(e,t)};function Ps(s){const e=Re.modules.find(t=>t.declarations.find(n=>n.tagName===s));return console.log("IM HERE!"),console.log(e),e.exports.map(t=>({name:t.declaration.name,path:e.path.replace(/src\//,"@sebgroup/green-core/")}))}const Gs=s=>{const{of:e}=s,[t,n]=Y.useState("web");if("of"in s&&e===void 0)throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");const o=ts(e||"meta"),a=Ps(o.preparedMeta.component);return j.createElement(Fs,{designVersion:"2023"},j.createElement("h2",null,"Import"),j.createElement(Ws,{"max-width":"500px",value:t,onChange:i=>n(i.target.value)},j.createElement(Ae,{value:"web"},"Web component (Angular and others)"),j.createElement(Ae,{value:"react"},"React JSX")),a.map(i=>j.createElement("div",{key:i.name},t==="web"?j.createElement(Ee,{language:"javascript",dark:!0,code:`import { ${i.name} } from '@sebgroup/green-core/pure'
            ${i.name}.define()

            // or, from direct path:
            import { ${i.name} } from '${i.path}'
            ${i.name}.define()`}):j.createElement(Ee,{language:"javascript",dark:!0,code:`// This import can be used as a JSX element in React
              import { ${i.name} } from '@sebgroup/green-core/react'`}))))};function De(s){const e={blockquote:"blockquote",em:"em",h2:"h2",p:"p",strong:"strong",...We(),...s.components};return f.jsxs(f.Fragment,{children:[f.jsx(ns,{isTemplate:!0}),`
`,f.jsx(os,{}),`
`,f.jsx(rs,{}),`
`,f.jsx(as,{}),`
`,f.jsx(Gs,{}),`
`,f.jsx(e.h2,{id:"public-api",children:"Public API"}),`
`,f.jsx(e.p,{children:"This table lists all public attributes, properties, methods, events and slots of the component."}),`
`,f.jsxs(e.blockquote,{children:[`
`,f.jsx(e.p,{children:f.jsxs(e.em,{children:[f.jsx(e.strong,{children:"Note:"})," JS properties and DOM attributes have different naming conventions in Green Core (camelCase vs snake-case), so some of them will show up under both sections, even though they refer to the same underlying property."]})}),`
`]}),`
`,f.jsx(ls,{}),`
`,f.jsx(e.h2,{id:"additional-examples-and-customization-options",children:"Additional examples and customization options"}),`
`,f.jsx(is,{})]})}function Ns(s={}){const{wrapper:e}={...We(),...s.components};return e?f.jsx(e,{...s,children:f.jsx(De,{...s})}):De(s)}const Is="en",Bs=["da","de","fi","fr","it","nl","no","sv"],Js={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Åbn kalender-popup",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Man",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Annuller",s307db9af9905317d:"Formularfejloversigt",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brødkrummer",s407a88a592a0987c:"August",s46d6587089bd0356:"Næste måned",s49730f3d5751a433:"Indlæser...",s5052d10b539eabf0:"Marts",s58bfb494feb8eb02:p`${0} valgt`,s5d929ff1619ac0c9:"Søg",s5e8250fb85d64c23:"Luk",s5febcd9b311c16fe:"Rul til højre",s62931b2a50168976:"Forrige måned",s63d040e37887f17e:"I dag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Ti",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"Åbn kontekstmenu",s83c436ed1bc16dfb:"Vis flere oplysninger",s8ade4e9d5e804d6a:"Første tilgængelige dato",s9836b719fa8ef857:"Lør",s987ac119fac8d621:"Søn",s9af3c72c33088826:p`Der er ${0} fejl, der skal rettes, før du kan fortsætte:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Måned",sb4f1dffbb6be6302:"Ryd",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filtrer tilgængelige muligheder",sdc42f1da42d6411a:"Ryd inputfelt",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sidste tilgængelige dato",sf295af199c723ec8:"Fre"},qs=Object.freeze(Object.defineProperty({__proto__:null,templates:Js},Symbol.toStringTag,{value:"Module"})),Us={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Kalender-Modal öffnen",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Mo",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Abbrechen",s307db9af9905317d:"Formularfehlerübersicht",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brotkrümelnavigation",s407a88a592a0987c:"August",s46d6587089bd0356:"Nächster Monat",s49730f3d5751a433:"Laden...",s5052d10b539eabf0:"März",s58bfb494feb8eb02:p`${0} ausgewählt`,s5d929ff1619ac0c9:"Suche",s5e8250fb85d64c23:"Schließen",s5febcd9b311c16fe:"Nach rechts scrollen",s62931b2a50168976:"Vorheriger Monat",s63d040e37887f17e:"Heute",s6cfed919e21ac6ac:"Do",s6d24cd19e23b8185:"Di",s74aa0319e62b2eb7:"Mi",s7793b811d20184fe:"Dezember",s7fd3469f78111589:"Kontextmenü öffnen",s83c436ed1bc16dfb:"Weitere Informationen anzeigen",s8ade4e9d5e804d6a:"Erstes verfügbares Datum",s9836b719fa8ef857:"Sa",s987ac119fac8d621:"So",s9af3c72c33088826:p`Es gibt ${0} Fehler zu beheben, bevor du fortfahren kannst:`,sa6f2645578b2d2bc:"Jahr",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Monat",sb4f1dffbb6be6302:"Löschen",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Verfügbare Optionen filtern",sdc42f1da42d6411a:"Feld löschen",se0955919920ee87d:"Tag",se4129fd6b9d7b4c2:"Letztes verfügbares Datum",sf295af199c723ec8:"Fr"},Xs=Object.freeze(Object.defineProperty({__proto__:null,templates:Us},Symbol.toStringTag,{value:"Module"})),Hs={s15a16ae9f99f19bf:"Heinä",s15a852e9f9a50fa5:"Kesä",s17e3edbe032f79ec:"Avaa kalenteri-modal",s1a2dda8f763a68bd:"Tammikuu",s1e118319b5202c41:"Ma",s1e187019b5262aa6:"Touko",s281846ef0421c71f:"Marraskuu",s2ceb11be2290bb1b:"Peruuta",s307db9af9905317d:"Lomakkeen virheiden yhteenveto",s39938ecdae568740:"Syys",s3b8a6245b12fa2ad:"Murupolku",s407a88a592a0987c:"Elokuu",s46d6587089bd0356:"Seuraava kuukausi",s49730f3d5751a433:"Ladataan...",s5052d10b539eabf0:"Maalis",s58bfb494feb8eb02:p`${0} valittua`,s5d929ff1619ac0c9:"Hae",s5e8250fb85d64c23:"Sulje",s5febcd9b311c16fe:"Vieritä oikealle",s62931b2a50168976:"Edellinen kuukausi",s63d040e37887f17e:"Tänään",s6cfed919e21ac6ac:"To",s6d24cd19e23b8185:"Ti",s74aa0319e62b2eb7:"Ke",s7793b811d20184fe:"Joulukuu",s7fd3469f78111589:"Avaa pikavalikko",s83c436ed1bc16dfb:"Näytä lisää tietoja",s8ade4e9d5e804d6a:"Ensimmäinen saatavilla oleva päivämäärä",s9836b719fa8ef857:"La",s987ac119fac8d621:"Su",s9af3c72c33088826:p`On ${0} virhettä, jotka täytyy korjata ennen kuin voit jatkaa:`,sa6f2645578b2d2bc:"Vuosi",sa7cd5c2ff6d266e7:"Lokakuu",sb47daaf9e1c4a905:"Kuukausi",sb4f1dffbb6be6302:"Tyhjennä",sbc083a1dbee9af73:"Helmikuu",scb6b9cb49cf93277:"Huhti",sd898d99fd9c13de6:"Suodata saatavilla olevia vaihtoehtoja",sdc42f1da42d6411a:"Tyhjennä syöte",se0955919920ee87d:"Päivä",se4129fd6b9d7b4c2:"Viimeinen saatavilla oleva päivämäärä",sf295af199c723ec8:"Pe"},Zs=Object.freeze(Object.defineProperty({__proto__:null,templates:Hs},Symbol.toStringTag,{value:"Module"})),Ks={s15a16ae9f99f19bf:"Juillet",s15a852e9f9a50fa5:"Juin",s17e3edbe032f79ec:"Ouvrir le calendrier modal",s1a2dda8f763a68bd:"Janvier",s1e118319b5202c41:"Lun",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"Novembre",s2ceb11be2290bb1b:"Annuler",s307db9af9905317d:"Résumé des erreurs du formulaire",s39938ecdae568740:"Septembre",s3b8a6245b12fa2ad:"Fil d'Ariane",s407a88a592a0987c:"Août",s46d6587089bd0356:"Mois suivant",s49730f3d5751a433:"Chargement...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:p`${0} sélectionné(s)`,s5d929ff1619ac0c9:"Rechercher",s5e8250fb85d64c23:"Fermer",s5febcd9b311c16fe:"Faire défiler à droite",s62931b2a50168976:"Mois précédent",s63d040e37887f17e:"Aujourd'hui",s6cfed919e21ac6ac:"Jeu",s6d24cd19e23b8185:"Mar",s74aa0319e62b2eb7:"Mer",s7793b811d20184fe:"Décembre",s7fd3469f78111589:"Ouvrir le menu contextuel",s83c436ed1bc16dfb:"Afficher plus d'informations",s8ade4e9d5e804d6a:"Première date disponible",s9836b719fa8ef857:"Sam",s987ac119fac8d621:"Dim",s9af3c72c33088826:p`Il y a ${0} erreur(s) à corriger avant de pouvoir continuer :`,sa6f2645578b2d2bc:"Année",sa7cd5c2ff6d266e7:"Octobre",sb47daaf9e1c4a905:"Mois",sb4f1dffbb6be6302:"Effacer",sbc083a1dbee9af73:"Février",scb6b9cb49cf93277:"Avril",sd898d99fd9c13de6:"Filtrer les options disponibles",sdc42f1da42d6411a:"Effacer la saisie",se0955919920ee87d:"Jour",se4129fd6b9d7b4c2:"Dernière date disponible",sf295af199c723ec8:"Ven"},Qs=Object.freeze(Object.defineProperty({__proto__:null,templates:Ks},Symbol.toStringTag,{value:"Module"})),Ys={s15a16ae9f99f19bf:"Luglio",s15a852e9f9a50fa5:"Giugno",s17e3edbe032f79ec:"Apri la finestra del calendario",s1a2dda8f763a68bd:"Gennaio",s1e118319b5202c41:"Lun",s1e187019b5262aa6:"Maggio",s281846ef0421c71f:"Novembre",s2ceb11be2290bb1b:"Annulla",s307db9af9905317d:"Riepilogo degli errori del modulo",s39938ecdae568740:"Settembre",s3b8a6245b12fa2ad:"Percorso di navigazione",s407a88a592a0987c:"Agosto",s46d6587089bd0356:"Mese successivo",s49730f3d5751a433:"Caricamento...",s5052d10b539eabf0:"Marzo",s58bfb494feb8eb02:p`${0} selezionato`,s5d929ff1619ac0c9:"Cerca",s5e8250fb85d64c23:"Chiudi",s5febcd9b311c16fe:"Scorri a destra",s62931b2a50168976:"Mese precedente",s63d040e37887f17e:"Oggi",s6cfed919e21ac6ac:"Gio",s6d24cd19e23b8185:"Mar",s74aa0319e62b2eb7:"Mer",s7793b811d20184fe:"Dicembre",s7fd3469f78111589:"Apri il menu contestuale",s83c436ed1bc16dfb:"Mostra più informazioni",s8ade4e9d5e804d6a:"Prima data disponibile",s9836b719fa8ef857:"Sab",s987ac119fac8d621:"Dom",s9af3c72c33088826:p`Ci sono ${0} errori da correggere prima di poter continuare:`,sa6f2645578b2d2bc:"Anno",sa7cd5c2ff6d266e7:"Ottobre",sb47daaf9e1c4a905:"Mese",sb4f1dffbb6be6302:"Pulisci",sbc083a1dbee9af73:"Febbraio",scb6b9cb49cf93277:"Aprile",sd898d99fd9c13de6:"Filtra le opzioni disponibili",sdc42f1da42d6411a:"Pulisci il campo di input",se0955919920ee87d:"Giorno",se4129fd6b9d7b4c2:"Ultima data disponibile",sf295af199c723ec8:"Ven"},et=Object.freeze(Object.defineProperty({__proto__:null,templates:Ys},Symbol.toStringTag,{value:"Module"})),st={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Open kalenderpop-up",s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"Ma",s1e187019b5262aa6:"Mei",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Annuleren",s307db9af9905317d:"Formulierfoutoverzicht",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Kruimelpad",s407a88a592a0987c:"Augustus",s46d6587089bd0356:"Volgende maand",s49730f3d5751a433:"Laden...",s5052d10b539eabf0:"Maart",s58bfb494feb8eb02:p`${0} geselecteerd`,s5d929ff1619ac0c9:"Zoeken",s5e8250fb85d64c23:"Sluiten",s5febcd9b311c16fe:"Scroll rechts",s62931b2a50168976:"Vorige maand",s63d040e37887f17e:"Vandaag",s6cfed919e21ac6ac:"Do",s6d24cd19e23b8185:"Di",s74aa0319e62b2eb7:"Wo",s7793b811d20184fe:"December",s7fd3469f78111589:"Open contextmenu",s83c436ed1bc16dfb:"Toon meer informatie",s8ade4e9d5e804d6a:"Eerste beschikbare datum",s9836b719fa8ef857:"Za",s987ac119fac8d621:"Zo",s9af3c72c33088826:p`Er zijn ${0} fouten die gecorrigeerd moeten worden voordat je verder kunt gaan:`,sa6f2645578b2d2bc:"Jaar",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Maand",sb4f1dffbb6be6302:"Wis",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filter beschikbare opties",sdc42f1da42d6411a:"Wis invoer",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Laatste beschikbare datum",sf295af199c723ec8:"Vr"},tt=Object.freeze(Object.defineProperty({__proto__:null,templates:st},Symbol.toStringTag,{value:"Module"})),nt={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Åpne kalendermodal",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Man",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s307db9af9905317d:"Skjema feil oppsummering",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brødsmuler",s407a88a592a0987c:"August",s46d6587089bd0356:"Neste måned",s49730f3d5751a433:"Laster...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:p`${0} valgt`,s5d929ff1619ac0c9:"Søk",s5e8250fb85d64c23:"Lukk",s5febcd9b311c16fe:"Rull til høyre",s62931b2a50168976:"Forrige måned",s63d040e37887f17e:"I dag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tir",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"Desember",s7fd3469f78111589:"Åpne kontekstmeny",s83c436ed1bc16dfb:"Vis mer informasjon",s8ade4e9d5e804d6a:"Første tilgjengelige dato",s9836b719fa8ef857:"Lør",s987ac119fac8d621:"Søn",s9af3c72c33088826:p`Det er ${0} feil som må rettes før du kan fortsette:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Måned",sb4f1dffbb6be6302:"Rens",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filtrer tilgjengelige alternativer",sdc42f1da42d6411a:"Rens inputfelt",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Siste tilgjengelige dato",sf295af199c723ec8:"Fre"},ot=Object.freeze(Object.defineProperty({__proto__:null,templates:nt},Symbol.toStringTag,{value:"Module"})),rt={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Öppna kalender",s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"Mån",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s307db9af9905317d:"Sammanfattning av formulärfel",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brödsmulor",s407a88a592a0987c:"Augusti",s46d6587089bd0356:"Nästa månad",s49730f3d5751a433:"Laddar...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:p`${0} valda`,s5d929ff1619ac0c9:"Sök",s5e8250fb85d64c23:"Stäng",s5febcd9b311c16fe:"Scrolla höger",s62931b2a50168976:"Föregående månad",s63d040e37887f17e:"Idag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tis",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"Öppna meny",s83c436ed1bc16dfb:"Visa mer information",s8ade4e9d5e804d6a:"Första tillgängliga datum",s9836b719fa8ef857:"Lör",s987ac119fac8d621:"Sön",s9af3c72c33088826:p`Det finns ${0} fel att åtgärda innan du kan fortsätta:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Månad",sb4f1dffbb6be6302:"Rensa",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Sök i listan av val",sdc42f1da42d6411a:"Rensa text",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sista tillgängliga datum",sf295af199c723ec8:"Fre"},at=Object.freeze(Object.defineProperty({__proto__:null,templates:rt},Symbol.toStringTag,{value:"Module"})),Ve=new Map([["sv",at],["no",ot],["nl",tt],["it",et],["fr",Qs],["fi",Zs],["de",Xs],["da",qs]]),lt=({extraLocales:s,extraTemplates:e}={extraLocales:[],extraTemplates:new Map})=>{const t=[...Bs];for(const[n,o]of e)Ve.set(n,o);for(const n of s)t.push(n);return cs({sourceLocale:Is,targetLocales:t,loadLocale:async n=>{const o=Ve.get(n);return o||Promise.reject(new Error(`Locale ${n} not found`))}})};es(Re);ss();const Jt={style:{name:"Change design version",defaultValue:"2023",toolbar:{icon:"lightning",items:["2016","2023"],showName:!0,dynamicTitle:!0}},language:{name:"Language",defaultValue:"en",toolbar:{icon:"globe",items:["en","sv","da","de","fi","fr","it","nl","no"],showName:!0,dynamicTitle:!0}}},{setLocale:it}=lt(),qt={parameters:{docs:{page:Ns,transformSource:s=>{const e=s.match(/<gds-theme>([\s\S]*?)<\/gds-theme>/);return e?e[1]:s}},options:{storySort:{order:["Green Design System","Get started","What's what?","Docs","Components","Style",["Components","Layout","Media","Content","Style"],"Concepts",["Architecture"],"Contributing",["Introduction"]]}}},decorators:[(s,e)=>(it(e.globals.language),setTimeout(()=>{const t=Array.from(document.querySelectorAll("tr")).find(o=>{var a;return(a=o.getAttribute("title"))==null?void 0:a.startsWith("Hide Declarative layout")}),n=t==null?void 0:t.querySelector('button[tabindex="0"]');n&&n.click()},10),ue`<gds-theme .designVersion=${e.globals.style}
        >${s()}</gds-theme
      >`)]};export{qt as default,Jt as globalTypes};
