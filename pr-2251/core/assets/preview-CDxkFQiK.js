import{x as ke,a as ns,i as q,r as x}from"./lit-element-Bx14lxc-.js";import{s as os}from"./chunk-GKNNPQCW-BkHQSocK.js";import{c as Ie}from"./custom-elements-B0LMZ_uE.js";import{r as rs}from"./transitional-styles-BVKDYdtY.js";import{j as f}from"./jsx-runtime-BjG_zV1W.js";import{u as Be}from"./index-Cz1IeFxn.js";import{ag as X,as,ae as M,at as Ae,af as is,au as ls,av as ds,aw as cs,ax as bs,ay as gs}from"./index-BAUPK-6y.js";import{r as Se,n as y}from"./gds-element-DKcDvDP5.js";import{m as De,l as fs,s as u,c as ps}from"./runtime-CNluP0A8.js";import{a as _e}from"./query-p8xgzTDt.js";import{o as hs}from"./unsafe-html-CYO4avEf.js";import"./theme-CtQAT9Gd.js";import"./button-DvsBnM4i.js";import"./grid-WW5inqkO.js";import"./tokens.style-BAMmArAm.js";import"./iframe-D4cxk5Tl.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./directive-CF8sV3Lr.js";import"./theme.component-CgNV-Xxb.js";import"./watch-tFciLXSI.js";import"./button.component-Dvch3JiS.js";import"./class-map-CXsQwv0r.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-BN2gVja9.js";import"./grid.component-COlBE-wl.js";import"./div.component-CtWtQCO9.js";var us=Object.defineProperty,ys=Object.getOwnPropertyDescriptor,o=(s,e,t,n)=>{for(var r=n>1?void 0:n?ys(e,t):e,l=s.length-1,d;l>=0;l--)(d=s[l])&&(r=(n?d(e,t,r):d(r))||r);return n&&r&&us(e,t,r),r},we=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)},i=(s,e,t)=>(we(s,e,"read from private field"),t?t.call(s):e.get(s)),b=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},_=(s,e,t,n)=>(we(s,e,"write to private field"),e.set(s,t),t),z=(s,e,t)=>(we(s,e,"access private method"),t);const P="-94bd25";class Ce{static get instance(){var e;return(e=globalThis.__gdsElementLookupTable)!=null&&e[P]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[P]:new Map}),globalThis.__gdsElementLookupTable[P]}}const N=(s,e)=>function(t){var n;return n=class extends t{constructor(){super(...arguments),this.gdsElementName=s}static define(){if(n.isDefined)return;const l=globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?s:s+P;customElements.get(l)||(n.isDefined=!0,Ce.instance.set(s,l),customElements.define(l,n),e!=null&&e.dependsOn&&e.dependsOn.forEach(d=>d.define()))}},n.isDefined=!1,n},Ve=new WeakMap;function ms(s,...e){let t=Ve.get(s);return t||(t=Re(s),t.raw=Re(s.raw),Ve.set(s,t)),[t,...e]}const Re=s=>s.map(e=>{for(const[t,n]of Ce.instance.entries())e=e.replace(new RegExp(`${t}(?![-a-z])`,"mg"),n);return e});function xs(s){return(e,...t)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return s(e,...t);const[n,...r]=ms(e,...t);return s(n,...r)}}const ne=xs(ke);function vs(s){return Ce.instance.get(s)??s}function oe(s){return vs(s)}var C,Y,E,Q,W,$,T,ee,le,Je,G,B,de,qe;class ks{constructor(e){b(this,le),b(this,G),b(this,de),b(this,C,!$e()),b(this,Y,!1),b(this,E,[]),b(this,Q,[]),b(this,W,new Map),b(this,$,new Map),b(this,T,[]),b(this,ee,[]),this.host=e,this.host.addController(this)}hostConnected(){z(this,de,qe).call(this)}has(e){return i(this,C)?i(this,$).has(e):i(this,W).has(e)}inject(e,t){z(this,le,Je).call(this,e,t),z(this,G,B).call(this)}clear(e){i(this,C)?this.host.updateComplete.then(()=>{const t=i(this,$).get(e);t==null||t.remove(),i(this,$).delete(e)}):i(this,W).delete(e),z(this,G,B).call(this)}clearAll(){i(this,C)?this.host.updateComplete.then(()=>{i(this,$).forEach(e=>e.remove()),i(this,T).forEach(e=>e.remove()),i(this,$).clear(),_(this,T,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],i(this,W).clear(),_(this,E,[]))}clearInitial(){i(this,C)?this.host.updateComplete.then(()=>{i(this,T).forEach(e=>e.remove()),_(this,T,[])}):_(this,E,[]),z(this,G,B).call(this)}restoreInitial(){i(this,C)?i(this,ee).forEach(e=>{i(this,T).push(e.cloneNode(!0))}):_(this,E,[...i(this,Q)]),z(this,G,B).call(this)}}C=new WeakMap;Y=new WeakMap;E=new WeakMap;Q=new WeakMap;W=new WeakMap;$=new WeakMap;T=new WeakMap;ee=new WeakMap;le=new WeakSet;Je=function(s,e){if(i(this,C)){let t=i(this,$).get(s);t||(t=document.createElement("style"),i(this,$).set(s,t)),t.textContent=e.cssText}else{if(!this.host.shadowRoot||!e.styleSheet)return;i(this,W).set(s,e.styleSheet)}};G=new WeakSet;B=function(){if(i(this,C))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(s=>{s.remove()}),i(this,T).forEach(s=>{var e;(e=this.host.shadowRoot)==null||e.appendChild(s)}),i(this,$).forEach(s=>{var e;(e=this.host.shadowRoot)==null||e.appendChild(s)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...i(this,E),...Array.from(i(this,W).values())]}};de=new WeakSet;qe=function(){i(this,Y)||(i(this,C)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(s=>{i(this,T).push(s),i(this,ee).push(s.cloneNode(!0))})}):this.host.shadowRoot&&i(this,E).length===0&&(_(this,E,[...this.host.shadowRoot.adoptedStyleSheets||[]]),_(this,Q,[...i(this,E)])),_(this,Y,!0))};function $e(){try{return new CSSStyleSheet,!0}catch{return!1}}function We(s){return s.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join("")}class R extends ns{constructor(){super(),this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new ks(this)}static define(){}connectedCallback(){var e;super.connectedCallback(),this.setAttribute("gds-element",((e=this.gdsElementName)==null?void 0:e.toString())||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(e,t){const n={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new Event(e,n)),this.dispatchEvent(new Event(We(e),n))].every(r=>r!==!1)}dispatchCustomEvent(e,t={}){const n={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new CustomEvent(e,n)),this.dispatchEvent(new CustomEvent(We(e),n))].every(r=>r!==!1)}}R.isDefined=!1;R.styleExpressionBaseSelector=":host";o([Se()],R.prototype,"_isUsingTransitionalStyles",2);const Xe=`/**
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
  --gds-sys-space-max: 999px;`,ce=`/**
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
  --gds-sys-color-l3-states-negative-pressed: #ee8375 20%;`,Ue=`/**
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
  --gds-sys-color-l3-states-negative-pressed: #a63e2a 20%;`,He=`/**
 * Do not edit directly, this file was auto-generated.
 */

--gds-sys-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
--gds-sys-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
--gds-sys-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);
--gds-sys-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03);
--gds-sys-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03);
`;var Ss={};const Me=typeof process<"u"&&Ss!==void 0;var be,se,te,ze,ge,Ze,fe,Ke;function _s(){return Me?[]:document.adoptedStyleSheets||[]}const ws=class Ye{constructor(){b(this,ge),b(this,fe),b(this,be,!$e()),b(this,se,new Map),b(this,te,new Map),b(this,ze,_s())}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new Ye),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(e,t){if(i(this,be)){const n=Array.isArray(t)?t.map(r=>r.toString()).join(""):t.toString();z(this,ge,Ze).call(this,e,n)}else t.styleSheet&&z(this,fe,Ke).call(this,e,t.styleSheet)}};be=new WeakMap;se=new WeakMap;te=new WeakMap;ze=new WeakMap;ge=new WeakSet;Ze=function(s,e){if(Me)return;let t=i(this,te).get(s);t||(t=document.createElement("style"),i(this,te).set(s,t)),t.textContent=e,document.head.appendChild(t)};fe=new WeakSet;Ke=function(s,e){Me||(i(this,se).set(s,e),document.adoptedStyleSheets=[...i(this,ze),...Array.from(i(this,se).values())])};let Cs=ws;const U=[q`
    :host {
      ${x(Xe)}
      ${x(He)}
    }
  `];Cs.instance.injectGlobalStyles("root-tokens",q`
    :root,
    :root[gds-theme='light'] {
      ${x(Xe)}
      ${x(He)}
      ${x(Ue)}
    }
    :root[gds-theme='dark'] {
      ${x(ce)}
    }
  `);var H,Z,pe;const $s=class Qe{constructor(){b(this,H,new Map),b(this,Z,new Map),b(this,pe,!$e())}static get instance(){var e;return(e=globalThis.__gdsTransitionalStyles)!=null&&e[P]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[P]:new Qe}),globalThis.__gdsTransitionalStyles[P]}apply(e,t){if(!e.shadowRoot)return;const n=i(this,H).get(t);n&&(i(this,Z).set(t,e),this.applyToElement(t,n))}applyToElement(e,t){var O,g;const n=i(this,Z).get(e);if(!n||!n.shadowRoot)return;const r=()=>{n._dynamicStylesController.clearInitial(),n._dynamicStylesController.inject("t-styles",x(t)),n._isUsingTransitionalStyles=!0},l=()=>{n._isUsingTransitionalStyles=!1,n._dynamicStylesController.clear("t-styles"),n._dynamicStylesController.restoreInitial()},d="[gds-element=gds-theme]";let p=n.getRootNode(),k=n.closest(d);for(;k===null&&p!==document;)k=(O=p.host)==null?void 0:O.closest(d),p=(g=p.host)==null?void 0:g.getRootNode();if(k){const h=k,w=()=>{h.designVersion==="2023"?l():r()};if(h.addEventListener("gds-design-version-changed",w),n.addEventListener("gds-element-disconnected",()=>h.removeEventListener("gds-design-version-changed",w)),h.designVersion==="2023"){l();return}}r()}register(e,t){let n=t;i(this,pe)&&(n=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${t}`),i(this,H).set(e,n),this.applyToElement(e,n)}};H=new WeakMap;Z=new WeakMap;pe=new WeakMap;let Te=$s;function Ee(s,e){const t={waitUntilFirstUpdate:!1,...e};return(n,r,l)=>{const{update:d}=n,p=Array.isArray(s)?s:[s];n.update=function(k){p.forEach(O=>{var h;const g=O;if(k.has(g)){const w=k.get(g),I=this[g];w!==I&&(!t.waitUntilFirstUpdate||this.hasUpdated)&&((h=l.value)==null||h.call(this,w,I))}}),d.call(this,k)}}}const Ms={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},zs=/^([<|>]=?)?([0-9a-z]+)/,es=["{","}",";",":",","],Pe=[" ","/n"];function Ts(s=""){const e=[];let t="";for(let n=0;n<s.length;n++){const r=s[n];if(Pe.includes(r)||(t+=r),es.includes(r)){e.push(t.slice(0,-1)),e.push(r),t="";continue}if(Pe.includes(r)||n===s.length-1){e.push(t),t="";continue}}return e.filter(n=>n!=="")}function Es(s){const e=[];let t={breakpoint:"-",values:[]};const n=()=>({sel:"",values:[]});let r=n();for(const l of s){if(!es.includes(l)){r.values.push(l);continue}if(l==="{"&&(t={breakpoint:r.values.join(","),values:[]},r=n()),l===";"&&(e.length===0&&e.push(t),r.values.length>0&&(t.values.push(r),r=n())),l===":"){const d=r.values.pop()??"";r.sel=d}t&&l==="}"&&(t.values.push(r),r=n(),e.push(t))}return r.values.length>0&&t.values.push(r),e.length===0&&e.push(t),e}function js(s){return s.split(",").map(t=>{const n=t.trim().match(zs);if(!n)throw new Error(`Invalid breakpoint specifier: ${t}`);return{condition:n[1],value:n[2]}})}function Ls(s,e,t,n=l=>l,r=(l,d)=>`${l}: ${d.join(" ")};`){let l="";for(const d of t){const O=`@media ${(d.breakpoint==="-"?[{condition:">=",value:"0"}]:js(d.breakpoint)).map(g=>{var h;return`(${(h=g.condition)!=null&&h.includes("<")?"max-width":"min-width"}: ${Ms[g.value]??g.value})`}).join(" and ")} {${d.values.map(g=>{let h=s;g.sel.length>0&&(h=s===":host"?`:host(:${g.sel})`:`${s}:${g.sel}`);const w=r(e,g.values.map(n));return g.sel==="hover"?`@media (hover: hover) {${h}{${w}}}`:`${h}{${w}}`}).join("")}}`;l+=O}return l}const ae=new Map;function a(s){return(e,t)=>{const n=(s==null?void 0:s.property)??String(t),r=s==null?void 0:s.valueTemplate,l=s==null?void 0:s.styleTemplate,d=(s==null?void 0:s.cacheOverrideKey)??"0";y({attribute:s==null?void 0:s.attribute,noAccessor:!0})(e,t),Object.defineProperty(e,t,{get:function(){return this["__"+String(t)]},set:async function(p){if(!p)return;this["__"+String(t)]=p,await this.updateComplete;const k=(s==null?void 0:s.selector)??this.constructor.styleExpressionBaseSelector,O=this.level??"0",g=k+n+p+O+d;if(ae.has(g)){this._dynamicStylesController.inject(`sep_${String(t)}`,ae.get(g));return}const h=Es(Ts(p)),w=Ls(k,n,h,r==null?void 0:r.bind(this),l==null?void 0:l.bind(this)),I=x(w);ae.set(g,I),this._dynamicStylesController.inject(`sep_${String(t)}`,I)}})}}function ss(s,e,t){if(s==="transparent"||s==="currentColor"||s==="inherit")return s;const[n,r]=s.split("/"),l=`var(--gds-sys-color-l${t}-${e}-${n})`;return r?`color-mix(in srgb, ${l} ${parseFloat(r)*100}%, transparent 0%)`:l}function re(s){return{valueTemplate:function(e){return ss(e,s,this.level)}}}const F={valueTemplate:s=>`var(--gds-sys-space-${s}, 0)`},m={valueTemplate:s=>`var(--gds-sys-space-${Os(s)}, ${s})`},ie={valueTemplate:s=>{const t=(s.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${s})`:`calc(var(--gds-sys-space-${s.substring(1)}) * -1)`;return s==="auto"?"auto":t},styleTemplate:(s,e)=>{const t=p=>p==="auto"?"auto":`${p}`,n=t(e[0]),r=e.length>1?t(e[1]):n,l=e.length>2?t(e[2]):n,d=e.length>3?t(e[3]):r;return`${s}: ${n} ${r} ${l} ${d};`}};function Os(s){return s.replace(/[^a-zA-Z0-9-]/g,"")}function je(s){class e extends s{}return o([a(m)],e.prototype,"width",2),o([a(m)],e.prototype,"min-width",2),o([a(m)],e.prototype,"max-width",2),o([a(m)],e.prototype,"inline-size",2),o([a(m)],e.prototype,"min-inline-size",2),o([a(m)],e.prototype,"max-inline-size",2),e}function As(s){class e extends s{}return o([a(m)],e.prototype,"height",2),o([a(m)],e.prototype,"min-height",2),o([a(m)],e.prototype,"max-height",2),o([a(m)],e.prototype,"block-size",2),o([a(m)],e.prototype,"min-block-size",2),o([a(m)],e.prototype,"max-block-size",2),e}function Le(s){class e extends s{}return o([a(ie)],e.prototype,"margin",2),o([a(ie)],e.prototype,"margin-inline",2),o([a(ie)],e.prototype,"margin-block",2),e}function Ds(s){class e extends s{}return o([a(F)],e.prototype,"padding",2),o([a(F)],e.prototype,"padding-inline",2),o([a(F)],e.prototype,"padding-block",2),e}function Oe(s){class e extends s{}return o([a()],e.prototype,"align-self",2),o([a()],e.prototype,"justify-self",2),o([a()],e.prototype,"place-self",2),o([a()],e.prototype,"grid-column",2),o([a()],e.prototype,"grid-row",2),o([a()],e.prototype,"grid-area",2),o([a()],e.prototype,"flex",2),o([a()],e.prototype,"order",2),e}function Vs(s){class e extends s{}return o([a()],e.prototype,"position",2),o([a()],e.prototype,"transform",2),o([a()],e.prototype,"inset",2),e}const Rs=q`
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
`;var Ws=Rs;let c=class extends je(As(Le(Ds(Oe(Vs(R)))))){constructor(){super(...arguments),this.level="2"}render(){return ne`<slot></slot>`}};c.styles=[U,Ws];o([a()],c.prototype,"display",2);o([y()],c.prototype,"level",2);o([a(re("content"))],c.prototype,"color",2);o([a(re("background"))],c.prototype,"background",2);o([a({styleTemplate:function(s,e){const t=this,[n,r=t["border-style"]||"solid",l=t["border-color"]||"primary"]=e,d=`var(--gds-sys-space-${n})`,p=ss(l,"border",t.level);return`border: ${d} ${r} ${p};`}})],c.prototype,"border",2);o([a(re("border"))],c.prototype,"border-color",2);o([a(F)],c.prototype,"border-width",2);o([a()],c.prototype,"border-style",2);o([a(F)],c.prototype,"border-radius",2);o([a({valueTemplate:s=>`var(--gds-sys-shadow-${s})`})],c.prototype,"box-shadow",2);o([a()],c.prototype,"opacity",2);o([a()],c.prototype,"overflow",2);o([a()],c.prototype,"box-sizing",2);o([a()],c.prototype,"z-index",2);o([a({styleTemplate:(s,e)=>{const t=e[0],n=`font-size: var(--gds-sys-text-size-${t});`,r=`line-height: var(--gds-sys-text-line-height-${t});`;return n+r}})],c.prototype,"font-size",2);o([a({valueTemplate:s=>`var(--gds-sys-text-weight-${s})`})],c.prototype,"font-weight",2);o([a()],c.prototype,"text-align",2);o([a()],c.prototype,"text-wrap",2);o([a()],c.prototype,"overflow-wrap",2);o([a()],c.prototype,"white-space",2);o([a({...F,styleTemplate:(s,e)=>{const t=e[0],n=e[1]||t;return`gap: ${t} ${n};`},cacheOverrideKey:"flex"})],c.prototype,"gap",2);o([a()],c.prototype,"align-items",2);o([a()],c.prototype,"align-content",2);o([a()],c.prototype,"justify-content",2);o([a()],c.prototype,"justify-items",2);o([a()],c.prototype,"flex-direction",2);o([a()],c.prototype,"flex-wrap",2);o([a()],c.prototype,"place-items",2);o([a()],c.prototype,"place-content",2);c=o([N("gds-div")],c);const Ps=q`
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
`;var Gs=Ps;class v extends Le(Oe(R)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.box=!1,this.label=""}get svgAttributes(){const e=this.constructor,t={fill:"none",xmlns:"http://www.w3.org/2000/svg",...this.size===void 0&&{width:this.width||e._width,height:this.width||e._height}||{},viewBox:this.box||e._viewBox,part:"icon"};return this.label?{...t,"aria-label":this.label}:{...t,role:"presentation"}}get svgContent(){const e=this.constructor;return this.solid?e._solidSVG:e._regularSVG}applyStroke(e){return this.stroke?e.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):e}generateAttributesString(e){return Object.entries(e).filter(([t,n])=>n!==void 0).map(([t,n])=>`${t}="${n}"`).join(`
      `)}render(){const e=this.svgAttributes;let t=this.svgContent||"";this.stroke&&(t=this.applyStroke(t));const n=`
      <svg ${this.generateAttributesString(e)}>
        ${t}
      </svg>
    `;return ke`${hs(n)}`}}v.styles=[U,Gs];o([a({...m,property:"height",selector:"svg"})],v.prototype,"size",2);o([y({type:Number})],v.prototype,"width",2);o([y({type:Number})],v.prototype,"height",2);o([y({type:Boolean})],v.prototype,"solid",2);o([y({type:Number})],v.prototype,"stroke",2);o([y()],v.prototype,"level",2);o([a(re("content"))],v.prototype,"color",2);o([y({type:String})],v.prototype,"box",2);o([y({type:String})],v.prototype,"label",2);v.define();let j=class extends v{};j._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';j._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>';j._name="chevron-left";j._width=24;j._height=24;j._viewBox="0 0 24 24";j=o([N("gds-icon-chevron-left")],j);let L=class extends v{};L._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';L._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>';L._name="chevron-right";L._width=24;L._height=24;L._viewBox="0 0 24 24";L=o([N("gds-icon-chevron-right")],L);function Fs(){return(s,e,t)=>{const n=s.connectedCallback,r=s.disconnectedCallback;s.connectedCallback=function(){n==null||n.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[e]=new ResizeObserver(()=>{this.__resizeObserver_tids[e]&&clearTimeout(this.__resizeObserver_tids[e]),this.__resizeObserver_tids[e]=setTimeout(()=>{var l;(l=t.value)==null||l.call(this)},20)}),this.__resizeObservers[e].observe(this)},s.disconnectedCallback=function(){r==null||r.call(this),this.__resizeObservers[e].disconnect()}}}const Ns=`@layer base {
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
`;let D=class extends je(R){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),Te.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return ne`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};D.styles=[...U,x(Ns)];o([y({type:Boolean,reflect:!0})],D.prototype,"selected",2);o([y()],D.prototype,"value",2);o([y({type:Boolean,reflect:!0})],D.prototype,"disabled",2);D=o([N("gds-segment")],D);const Is=`@layer base {
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
`;var A,he,ts,ue,ye,me,J,K,xe,ve;const Bs=(s,e)=>{let t;return()=>{clearTimeout(t),t=setTimeout(s,e)}};let S=class extends Oe(je(Le(R))){constructor(){super(...arguments),b(this,he),this.size="medium",b(this,A,void 0),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,b(this,ue,()=>{const e=this.segments.filter((t,n,r)=>{var l;return((l=r[n+1])==null?void 0:l.isVisible)&&!t.isVisible})[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),b(this,ye,()=>{const e=this.segments.filter((t,n,r)=>{var l;return((l=r[n-1])==null?void 0:l.isVisible)&&!t.isVisible}).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),b(this,me,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),b(this,J,Bs(i(this,me),50)),b(this,K,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,n=e.offsetLeft;this._elIndicator.style.transform=`translateX(${n}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),b(this,xe,e=>{const t=this.segments.find(n=>n===e.target||n.contains(e.target));t&&(this.segments.forEach(n=>n.selected=!1),t.selected=!0,_(this,A,t.value),i(this,K).call(this),this.dispatchCustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0}))}),b(this,ve,()=>{i(this,A)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===i(this,A));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return i(this,A)}set value(e){_(this,A,e),i(this,ve).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),Te.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{i(this,J).call(this)})})}render(){return ne`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${i(this,ue)}
        aria-label=${De("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${i(this,xe)}
          @slotchange=${z(this,he,ts)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${i(this,ye)}
        aria-label=${De("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{i(this,J).call(this),i(this,K).call(this)})}};A=new WeakMap;he=new WeakSet;ts=function(){var e,t;const s=(e=this.segments.find(n=>n.selected))==null?void 0:e.value;s&&_(this,A,s),(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=new IntersectionObserver(n=>{n.forEach(r=>{const l=r.target;l._isVisible=r.intersectionRatio>.99,i(this,J).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(n=>{var r;(r=this.intersectionObserver)==null||r.observe(n)})};ue=new WeakMap;ye=new WeakMap;me=new WeakMap;J=new WeakMap;K=new WeakMap;xe=new WeakMap;ve=new WeakMap;S.styles=[U,x(Is)];o([y({reflect:!0})],S.prototype,"size",2);o([y()],S.prototype,"value",1);o([_e("slot")],S.prototype,"_elSlot",2);o([_e("#indicator")],S.prototype,"_elIndicator",2);o([_e("#track")],S.prototype,"_elTrack",2);o([Se()],S.prototype,"_showPrevButton",2);o([Se()],S.prototype,"_showNextButton",2);o([Fs(),Ee("value")],S.prototype,"_recalculateMinWidth",1);S=o([N("gds-segmented-control",{dependsOn:[D,j,L]}),fs()],S);let V=class extends R{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2016"}connectedCallback(){super.connectedCallback(),Te.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",x(`:host {${ce}}`))}render(){return ne`<slot></slot>`}_onColorSchemeChange(){this.colorScheme==="dark"?this._dynamicStylesController.inject("color-scheme",x(`:host { ${ce}}`)):this._dynamicStylesController.inject("color-scheme",x(`:host { ${Ue}}`)),this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}_onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}};V.styles=[U,q`
      :host {
        display: contents;
      }
    `];o([y({reflect:!0,attribute:"color-scheme"})],V.prototype,"colorScheme",2);o([y({reflect:!0,attribute:"design-version"})],V.prototype,"designVersion",2);o([Ee("colorScheme")],V.prototype,"_onColorSchemeChange",1);o([Ee("designVersion")],V.prototype,"_onDesignVersionChange",1);V=o([N("gds-theme")],V);const Js=s=>{c.define();const e=oe("gds-div"),t={...s,class:s.className};return X.createElement(e,t)},qs=s=>{S.define();const e=oe("gds-segmented-control"),t={...s,class:s.className};return X.createElement(e,t)},Xs=s=>{V.define();const e=oe("gds-theme"),t={...s,class:s.className};return X.createElement(e,t)},Ge=s=>{D.define();const e=oe("gds-segment"),t={...s,class:s.className};return X.createElement(e,t)};function Us(s){const e=Ie.modules.find(t=>t.declarations.find(n=>n.tagName===s));return e.exports.map(t=>({name:t.declaration.name,path:e.path.replace(/src\//,"@sebgroup/green-core/")}))}const Hs=s=>{const{of:e}=s,[t,n]=X.useState("web"),r=as(e||"meta"),l=Us(r.preparedMeta.component);return M.createElement(Xs,{designVersion:"2023"},M.createElement(Js,{margin:"0 0 2xl 0"},M.createElement("h2",null,"Import"),M.createElement(qs,{"max-width":"500px",value:t,onChange:d=>n(d.target.value)},M.createElement(Ge,{value:"web"},"Web component (Angular and others)"),M.createElement(Ge,{value:"react"},"React JSX")),l.map(d=>M.createElement("div",{key:d.name},t==="web"?M.createElement(Ae,{language:"javascript",dark:!0,code:`import { ${d.name} } from '@sebgroup/green-core/pure'
            ${d.name}.define()

            // or, from direct path:
            import { ${d.name} } from '${d.path}'
            ${d.name}.define()`}):M.createElement(Ae,{language:"javascript",dark:!0,code:`// This import can be used as a JSX element in React
              import { ${d.name} } from '@sebgroup/green-core/react'`})))))};function Fe(s){const e={blockquote:"blockquote",em:"em",h2:"h2",p:"p",strong:"strong",...Be(),...s.components};return f.jsxs(f.Fragment,{children:[f.jsx(is,{isTemplate:!0}),`
`,f.jsx(ls,{}),`
`,f.jsx(ds,{}),`
`,f.jsx(cs,{}),`
`,f.jsx(Hs,{}),`
`,f.jsx(e.h2,{id:"public-api",children:"Public API"}),`
`,f.jsx(e.p,{children:"This table lists all public attributes, properties, methods, events and slots of the component."}),`
`,f.jsxs(e.blockquote,{children:[`
`,f.jsx(e.p,{children:f.jsxs(e.em,{children:[f.jsx(e.strong,{children:"Note:"})," JS properties and DOM attributes have different naming conventions in Green Core (camelCase vs snake-case), so some of them will show up under both sections, even though they refer to the same underlying property."]})}),`
`]}),`
`,f.jsx(bs,{}),`
`,f.jsx(e.h2,{id:"additional-examples-and-customization-options",children:"Additional examples and customization options"}),`
`,f.jsx(gs,{})]})}function Zs(s={}){const{wrapper:e}={...Be(),...s.components};return e?f.jsx(e,{...s,children:f.jsx(Fe,{...s})}):Fe(s)}const Ks="en",Ys=["da","de","fi","fr","it","nl","no","sv"],Qs={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Åbn kalender-popup",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Man",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Annuller",s307db9af9905317d:"Formularfejloversigt",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brødkrummer",s407a88a592a0987c:"August",s46d6587089bd0356:"Næste måned",s49730f3d5751a433:"Indlæser...",s5052d10b539eabf0:"Marts",s58bfb494feb8eb02:u`${0} valgt`,s5d929ff1619ac0c9:"Søg",s5e8250fb85d64c23:"Luk",s5febcd9b311c16fe:"Rul til højre",s62931b2a50168976:"Forrige måned",s63d040e37887f17e:"I dag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Ti",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"Åbn kontekstmenu",s83c436ed1bc16dfb:"Vis flere oplysninger",s8ade4e9d5e804d6a:"Første tilgængelige dato",s9836b719fa8ef857:"Lør",s987ac119fac8d621:"Søn",s9af3c72c33088826:u`Der er ${0} fejl, der skal rettes, før du kan fortsætte:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Måned",sb4f1dffbb6be6302:"Ryd",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filtrer tilgængelige muligheder",sdc42f1da42d6411a:"Ryd inputfelt",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sidste tilgængelige dato",sf295af199c723ec8:"Fre"},et=Object.freeze(Object.defineProperty({__proto__:null,templates:Qs},Symbol.toStringTag,{value:"Module"})),st={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Kalender-Modal öffnen",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Mo",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Abbrechen",s307db9af9905317d:"Formularfehlerübersicht",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brotkrümelnavigation",s407a88a592a0987c:"August",s46d6587089bd0356:"Nächster Monat",s49730f3d5751a433:"Laden...",s5052d10b539eabf0:"März",s58bfb494feb8eb02:u`${0} ausgewählt`,s5d929ff1619ac0c9:"Suche",s5e8250fb85d64c23:"Schließen",s5febcd9b311c16fe:"Nach rechts scrollen",s62931b2a50168976:"Vorheriger Monat",s63d040e37887f17e:"Heute",s6cfed919e21ac6ac:"Do",s6d24cd19e23b8185:"Di",s74aa0319e62b2eb7:"Mi",s7793b811d20184fe:"Dezember",s7fd3469f78111589:"Kontextmenü öffnen",s83c436ed1bc16dfb:"Weitere Informationen anzeigen",s8ade4e9d5e804d6a:"Erstes verfügbares Datum",s9836b719fa8ef857:"Sa",s987ac119fac8d621:"So",s9af3c72c33088826:u`Es gibt ${0} Fehler zu beheben, bevor du fortfahren kannst:`,sa6f2645578b2d2bc:"Jahr",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Monat",sb4f1dffbb6be6302:"Löschen",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Verfügbare Optionen filtern",sdc42f1da42d6411a:"Feld löschen",se0955919920ee87d:"Tag",se4129fd6b9d7b4c2:"Letztes verfügbares Datum",sf295af199c723ec8:"Fr"},tt=Object.freeze(Object.defineProperty({__proto__:null,templates:st},Symbol.toStringTag,{value:"Module"})),nt={s15a16ae9f99f19bf:"Heinä",s15a852e9f9a50fa5:"Kesä",s17e3edbe032f79ec:"Avaa kalenteri-modal",s1a2dda8f763a68bd:"Tammikuu",s1e118319b5202c41:"Ma",s1e187019b5262aa6:"Touko",s281846ef0421c71f:"Marraskuu",s2ceb11be2290bb1b:"Peruuta",s307db9af9905317d:"Lomakkeen virheiden yhteenveto",s39938ecdae568740:"Syys",s3b8a6245b12fa2ad:"Murupolku",s407a88a592a0987c:"Elokuu",s46d6587089bd0356:"Seuraava kuukausi",s49730f3d5751a433:"Ladataan...",s5052d10b539eabf0:"Maalis",s58bfb494feb8eb02:u`${0} valittua`,s5d929ff1619ac0c9:"Hae",s5e8250fb85d64c23:"Sulje",s5febcd9b311c16fe:"Vieritä oikealle",s62931b2a50168976:"Edellinen kuukausi",s63d040e37887f17e:"Tänään",s6cfed919e21ac6ac:"To",s6d24cd19e23b8185:"Ti",s74aa0319e62b2eb7:"Ke",s7793b811d20184fe:"Joulukuu",s7fd3469f78111589:"Avaa pikavalikko",s83c436ed1bc16dfb:"Näytä lisää tietoja",s8ade4e9d5e804d6a:"Ensimmäinen saatavilla oleva päivämäärä",s9836b719fa8ef857:"La",s987ac119fac8d621:"Su",s9af3c72c33088826:u`On ${0} virhettä, jotka täytyy korjata ennen kuin voit jatkaa:`,sa6f2645578b2d2bc:"Vuosi",sa7cd5c2ff6d266e7:"Lokakuu",sb47daaf9e1c4a905:"Kuukausi",sb4f1dffbb6be6302:"Tyhjennä",sbc083a1dbee9af73:"Helmikuu",scb6b9cb49cf93277:"Huhti",sd898d99fd9c13de6:"Suodata saatavilla olevia vaihtoehtoja",sdc42f1da42d6411a:"Tyhjennä syöte",se0955919920ee87d:"Päivä",se4129fd6b9d7b4c2:"Viimeinen saatavilla oleva päivämäärä",sf295af199c723ec8:"Pe"},ot=Object.freeze(Object.defineProperty({__proto__:null,templates:nt},Symbol.toStringTag,{value:"Module"})),rt={s15a16ae9f99f19bf:"Juillet",s15a852e9f9a50fa5:"Juin",s17e3edbe032f79ec:"Ouvrir le calendrier modal",s1a2dda8f763a68bd:"Janvier",s1e118319b5202c41:"Lun",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"Novembre",s2ceb11be2290bb1b:"Annuler",s307db9af9905317d:"Résumé des erreurs du formulaire",s39938ecdae568740:"Septembre",s3b8a6245b12fa2ad:"Fil d'Ariane",s407a88a592a0987c:"Août",s46d6587089bd0356:"Mois suivant",s49730f3d5751a433:"Chargement...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:u`${0} sélectionné(s)`,s5d929ff1619ac0c9:"Rechercher",s5e8250fb85d64c23:"Fermer",s5febcd9b311c16fe:"Faire défiler à droite",s62931b2a50168976:"Mois précédent",s63d040e37887f17e:"Aujourd'hui",s6cfed919e21ac6ac:"Jeu",s6d24cd19e23b8185:"Mar",s74aa0319e62b2eb7:"Mer",s7793b811d20184fe:"Décembre",s7fd3469f78111589:"Ouvrir le menu contextuel",s83c436ed1bc16dfb:"Afficher plus d'informations",s8ade4e9d5e804d6a:"Première date disponible",s9836b719fa8ef857:"Sam",s987ac119fac8d621:"Dim",s9af3c72c33088826:u`Il y a ${0} erreur(s) à corriger avant de pouvoir continuer :`,sa6f2645578b2d2bc:"Année",sa7cd5c2ff6d266e7:"Octobre",sb47daaf9e1c4a905:"Mois",sb4f1dffbb6be6302:"Effacer",sbc083a1dbee9af73:"Février",scb6b9cb49cf93277:"Avril",sd898d99fd9c13de6:"Filtrer les options disponibles",sdc42f1da42d6411a:"Effacer la saisie",se0955919920ee87d:"Jour",se4129fd6b9d7b4c2:"Dernière date disponible",sf295af199c723ec8:"Ven"},at=Object.freeze(Object.defineProperty({__proto__:null,templates:rt},Symbol.toStringTag,{value:"Module"})),it={s15a16ae9f99f19bf:"Luglio",s15a852e9f9a50fa5:"Giugno",s17e3edbe032f79ec:"Apri la finestra del calendario",s1a2dda8f763a68bd:"Gennaio",s1e118319b5202c41:"Lun",s1e187019b5262aa6:"Maggio",s281846ef0421c71f:"Novembre",s2ceb11be2290bb1b:"Annulla",s307db9af9905317d:"Riepilogo degli errori del modulo",s39938ecdae568740:"Settembre",s3b8a6245b12fa2ad:"Percorso di navigazione",s407a88a592a0987c:"Agosto",s46d6587089bd0356:"Mese successivo",s49730f3d5751a433:"Caricamento...",s5052d10b539eabf0:"Marzo",s58bfb494feb8eb02:u`${0} selezionato`,s5d929ff1619ac0c9:"Cerca",s5e8250fb85d64c23:"Chiudi",s5febcd9b311c16fe:"Scorri a destra",s62931b2a50168976:"Mese precedente",s63d040e37887f17e:"Oggi",s6cfed919e21ac6ac:"Gio",s6d24cd19e23b8185:"Mar",s74aa0319e62b2eb7:"Mer",s7793b811d20184fe:"Dicembre",s7fd3469f78111589:"Apri il menu contestuale",s83c436ed1bc16dfb:"Mostra più informazioni",s8ade4e9d5e804d6a:"Prima data disponibile",s9836b719fa8ef857:"Sab",s987ac119fac8d621:"Dom",s9af3c72c33088826:u`Ci sono ${0} errori da correggere prima di poter continuare:`,sa6f2645578b2d2bc:"Anno",sa7cd5c2ff6d266e7:"Ottobre",sb47daaf9e1c4a905:"Mese",sb4f1dffbb6be6302:"Pulisci",sbc083a1dbee9af73:"Febbraio",scb6b9cb49cf93277:"Aprile",sd898d99fd9c13de6:"Filtra le opzioni disponibili",sdc42f1da42d6411a:"Pulisci il campo di input",se0955919920ee87d:"Giorno",se4129fd6b9d7b4c2:"Ultima data disponibile",sf295af199c723ec8:"Ven"},lt=Object.freeze(Object.defineProperty({__proto__:null,templates:it},Symbol.toStringTag,{value:"Module"})),dt={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Open kalenderpop-up",s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"Ma",s1e187019b5262aa6:"Mei",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Annuleren",s307db9af9905317d:"Formulierfoutoverzicht",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Kruimelpad",s407a88a592a0987c:"Augustus",s46d6587089bd0356:"Volgende maand",s49730f3d5751a433:"Laden...",s5052d10b539eabf0:"Maart",s58bfb494feb8eb02:u`${0} geselecteerd`,s5d929ff1619ac0c9:"Zoeken",s5e8250fb85d64c23:"Sluiten",s5febcd9b311c16fe:"Scroll rechts",s62931b2a50168976:"Vorige maand",s63d040e37887f17e:"Vandaag",s6cfed919e21ac6ac:"Do",s6d24cd19e23b8185:"Di",s74aa0319e62b2eb7:"Wo",s7793b811d20184fe:"December",s7fd3469f78111589:"Open contextmenu",s83c436ed1bc16dfb:"Toon meer informatie",s8ade4e9d5e804d6a:"Eerste beschikbare datum",s9836b719fa8ef857:"Za",s987ac119fac8d621:"Zo",s9af3c72c33088826:u`Er zijn ${0} fouten die gecorrigeerd moeten worden voordat je verder kunt gaan:`,sa6f2645578b2d2bc:"Jaar",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Maand",sb4f1dffbb6be6302:"Wis",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filter beschikbare opties",sdc42f1da42d6411a:"Wis invoer",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Laatste beschikbare datum",sf295af199c723ec8:"Vr"},ct=Object.freeze(Object.defineProperty({__proto__:null,templates:dt},Symbol.toStringTag,{value:"Module"})),bt={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Åpne kalendermodal",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Man",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s307db9af9905317d:"Skjema feil oppsummering",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brødsmuler",s407a88a592a0987c:"August",s46d6587089bd0356:"Neste måned",s49730f3d5751a433:"Laster...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:u`${0} valgt`,s5d929ff1619ac0c9:"Søk",s5e8250fb85d64c23:"Lukk",s5febcd9b311c16fe:"Rull til høyre",s62931b2a50168976:"Forrige måned",s63d040e37887f17e:"I dag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tir",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"Desember",s7fd3469f78111589:"Åpne kontekstmeny",s83c436ed1bc16dfb:"Vis mer informasjon",s8ade4e9d5e804d6a:"Første tilgjengelige dato",s9836b719fa8ef857:"Lør",s987ac119fac8d621:"Søn",s9af3c72c33088826:u`Det er ${0} feil som må rettes før du kan fortsette:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Måned",sb4f1dffbb6be6302:"Rens",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filtrer tilgjengelige alternativer",sdc42f1da42d6411a:"Rens inputfelt",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Siste tilgjengelige dato",sf295af199c723ec8:"Fre"},gt=Object.freeze(Object.defineProperty({__proto__:null,templates:bt},Symbol.toStringTag,{value:"Module"})),ft={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Öppna kalender",s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"Mån",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s307db9af9905317d:"Sammanfattning av formulärfel",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brödsmulor",s407a88a592a0987c:"Augusti",s46d6587089bd0356:"Nästa månad",s49730f3d5751a433:"Laddar...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:u`${0} valda`,s5d929ff1619ac0c9:"Sök",s5e8250fb85d64c23:"Stäng",s5febcd9b311c16fe:"Scrolla höger",s62931b2a50168976:"Föregående månad",s63d040e37887f17e:"Idag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tis",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"Öppna meny",s83c436ed1bc16dfb:"Visa mer information",s8ade4e9d5e804d6a:"Första tillgängliga datum",s9836b719fa8ef857:"Lör",s987ac119fac8d621:"Sön",s9af3c72c33088826:u`Det finns ${0} fel att åtgärda innan du kan fortsätta:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Månad",sb4f1dffbb6be6302:"Rensa",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Sök i listan av val",sdc42f1da42d6411a:"Rensa text",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sista tillgängliga datum",sf295af199c723ec8:"Fre"},pt=Object.freeze(Object.defineProperty({__proto__:null,templates:ft},Symbol.toStringTag,{value:"Module"})),Ne=new Map([["sv",pt],["no",gt],["nl",ct],["it",lt],["fr",at],["fi",ot],["de",tt],["da",et]]),ht=({extraLocales:s,extraTemplates:e}={extraLocales:[],extraTemplates:new Map})=>{const t=[...Ys];for(const[n,r]of e)Ne.set(n,r);for(const n of s)t.push(n);return ps({sourceLocale:Ks,targetLocales:t,loadLocale:async n=>{const r=Ne.get(n);return r||Promise.reject(new Error(`Locale ${n} not found`))}})};os(Ie);rs();const en={style:{name:"Change design version",defaultValue:"2023",toolbar:{icon:"lightning",items:["2016","2023"],showName:!0,dynamicTitle:!0}},language:{name:"Language",defaultValue:"en",toolbar:{icon:"globe",items:["en","sv","da","de","fi","fr","it","nl","no"],showName:!0,dynamicTitle:!0}}},{setLocale:ut}=ht(),sn={parameters:{docs:{page:Zs,transformSource:s=>{const e=s.match(/<gds-theme>([\s\S]*?)<\/gds-theme>/);return e?e[1]:s}},options:{storySort:{order:["Green Design System","Get started","What's what?","Docs","Components","Style",["Components","Layout","Media","Content","Style"],"Concepts",["Architecture"],"Contributing",["Introduction"]]}}},decorators:[(s,e)=>(ut(e.globals.language),setTimeout(()=>{const t=Array.from(document.querySelectorAll("tr")).find(r=>{var l;return(l=r.getAttribute("title"))==null?void 0:l.startsWith("Hide Declarative layout")}),n=t==null?void 0:t.querySelector('button[tabindex="0"]');n&&n.click()},10),ke`<gds-theme .designVersion=${e.globals.style}
        >${s()}</gds-theme
      >`)]};export{sn as default,en as globalTypes};
