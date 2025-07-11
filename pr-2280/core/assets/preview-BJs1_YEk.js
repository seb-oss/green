import{x as ve,a as zs,i as q,r as _,E as ls}from"./lit-element-Bx14lxc-.js";import{s as Ms}from"./chunk-GKNNPQCW-BkHQSocK.js";import{c as ds}from"./custom-elements-CzCwNwC0.js";import{r as Es}from"./transitional-styles-BiORlPgX.js";import{j as h}from"./jsx-runtime-BjG_zV1W.js";import{u as cs}from"./index-C6r-cWFs.js";import{ag as M,as as gs,ae as v,at as Ke,af as Ts,au as Vs,av as Ls,aw as js,ax as Os,ay as As}from"./index-DNiKcrrv.js";import{r as Je,n as p}from"./gds-element-DKcDvDP5.js";import{m as Ye,l as Ws,s as x,c as Ds}from"./runtime-CNluP0A8.js";import{a as ne}from"./query-p8xgzTDt.js";import{o as Gs}from"./unsafe-html-CYO4avEf.js";import{i as Qe,u as ps,s as Rs}from"./static-B8S6DEnV.js";import{e as Fs}from"./class-map-CXsQwv0r.js";import{o as re}from"./if-defined-CVqwUuaf.js";import{n as Ps}from"./when-BR7zwNJC.js";import{e as Bs,i as Ns,t as Is}from"./directive-CF8sV3Lr.js";import"./theme-DWIp2Q1g.js";import"./button-BQq6yv7d.js";import"./grid-BXb007w6.js";import"./tokens.style-Khpz0lp_.js";import"./iframe-Df7U56Ow.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./theme.component-BDb3g7Zr.js";import"./watch-tFciLXSI.js";import"./button.component-CP7I7SJN.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-D-CzJZ0x.js";import"./grid.component-DRJiNQPF.js";import"./div.component-BCGMV-IS.js";var Js=Object.defineProperty,qs=Object.getOwnPropertyDescriptor,o=(s,e,t,n)=>{for(var r=n>1?void 0:n?qs(e,t):e,l=s.length-1,c;l>=0;l--)(c=s[l])&&(r=(n?c(e,t,r):c(r))||r);return n&&r&&Js(e,t,r),r},qe=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)},a=(s,e,t)=>(qe(s,e,"read from private field"),t?t.call(s):e.get(s)),g=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},S=(s,e,t,n)=>(qe(s,e,"write to private field"),e.set(s,t),t),R=(s,e,t)=>(qe(s,e,"access private method"),t);const Y="-d372c1";class Ue{static get instance(){var e;return(e=globalThis.__gdsElementLookupTable)!=null&&e[Y]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[Y]:new Map}),globalThis.__gdsElementLookupTable[Y]}}const $=(s,e)=>function(t){var n;return n=class extends t{constructor(){super(...arguments),this.gdsElementName=s}static define(){if(n.isDefined)return;const l=globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?s:s+Y;customElements.get(l)||(n.isDefined=!0,Ue.instance.set(s,l),customElements.define(l,n),e!=null&&e.dependsOn&&e.dependsOn.forEach(c=>c.define()))}},n.isDefined=!1,n},es=new WeakMap;function Us(s,...e){let t=es.get(s);return t||(t=ss(s),t.raw=ss(s.raw),es.set(s,t)),[t,...e]}const ss=s=>s.map(e=>{for(const[t,n]of Ue.instance.entries())e=e.replace(new RegExp(`${t}(?![-a-z])`,"mg"),n);return e});function Xs(s){return(e,...t)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return s(e,...t);const[n,...r]=Us(e,...t);return s(n,...r)}}const Q=Xs(ve);function Hs(s){return Ue.instance.get(s)??s}function O(s){return Hs(s)}var V,be,P,fe,K,L,F,he,Me,bs,ee,ae,Ee,fs;class Zs{constructor(e){g(this,Me),g(this,ee),g(this,Ee),g(this,V,!Xe()),g(this,be,!1),g(this,P,[]),g(this,fe,[]),g(this,K,new Map),g(this,L,new Map),g(this,F,[]),g(this,he,[]),this.host=e,this.host.addController(this)}hostConnected(){R(this,Ee,fs).call(this)}has(e){return a(this,V)?a(this,L).has(e):a(this,K).has(e)}inject(e,t){R(this,Me,bs).call(this,e,t),R(this,ee,ae).call(this)}clear(e){a(this,V)?this.host.updateComplete.then(()=>{const t=a(this,L).get(e);t==null||t.remove(),a(this,L).delete(e)}):a(this,K).delete(e),R(this,ee,ae).call(this)}clearAll(){a(this,V)?this.host.updateComplete.then(()=>{a(this,L).forEach(e=>e.remove()),a(this,F).forEach(e=>e.remove()),a(this,L).clear(),S(this,F,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],a(this,K).clear(),S(this,P,[]))}clearInitial(){a(this,V)?this.host.updateComplete.then(()=>{a(this,F).forEach(e=>e.remove()),S(this,F,[])}):S(this,P,[]),R(this,ee,ae).call(this)}restoreInitial(){a(this,V)?a(this,he).forEach(e=>{a(this,F).push(e.cloneNode(!0))}):S(this,P,[...a(this,fe)]),R(this,ee,ae).call(this)}}V=new WeakMap;be=new WeakMap;P=new WeakMap;fe=new WeakMap;K=new WeakMap;L=new WeakMap;F=new WeakMap;he=new WeakMap;Me=new WeakSet;bs=function(s,e){if(a(this,V)){let t=a(this,L).get(s);t||(t=document.createElement("style"),a(this,L).set(s,t)),t.textContent=e.cssText}else{if(!this.host.shadowRoot||!e.styleSheet)return;a(this,K).set(s,e.styleSheet)}};ee=new WeakSet;ae=function(){if(a(this,V))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(s=>{s.remove()}),a(this,F).forEach(s=>{var e;(e=this.host.shadowRoot)==null||e.appendChild(s)}),a(this,L).forEach(s=>{var e;(e=this.host.shadowRoot)==null||e.appendChild(s)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...a(this,P),...Array.from(a(this,K).values())]}};Ee=new WeakSet;fs=function(){a(this,be)||(a(this,V)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(s=>{a(this,F).push(s),a(this,he).push(s.cloneNode(!0))})}):this.host.shadowRoot&&a(this,P).length===0&&(S(this,P,[...this.host.shadowRoot.adoptedStyleSheets||[]]),S(this,fe,[...a(this,P)])),S(this,be,!0))};function Xe(){try{return new CSSStyleSheet,!0}catch{return!1}}function ts(s){return s.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join("")}class A extends zs{constructor(){super(),this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new Zs(this)}static define(){}connectedCallback(){var e;super.connectedCallback(),this.setAttribute("gds-element",((e=this.gdsElementName)==null?void 0:e.toString())||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(e,t){const n={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new Event(e,n)),this.dispatchEvent(new Event(ts(e),n))].every(r=>r!==!1)}dispatchCustomEvent(e,t={}){const n={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new CustomEvent(e,n)),this.dispatchEvent(new CustomEvent(ts(e),n))].every(r=>r!==!1)}}A.isDefined=!1;A.styleExpressionBaseSelector=":host";o([Je()],A.prototype,"_isUsingTransitionalStyles",2);const hs=`/**
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
  --gds-sys-space-max: 999px;`,Te=`/**
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
  --gds-sys-color-l3-states-negative-pressed: #ee8375 20%;`,us=`/**
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
  --gds-sys-color-l3-states-negative-pressed: #a63e2a 20%;`,ys=`/**
 * Do not edit directly, this file was auto-generated.
 */

--gds-sys-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
--gds-sys-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
--gds-sys-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);
--gds-sys-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03);
--gds-sys-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03);
`;var Ks={};const He=typeof process<"u"&&Ks!==void 0;var Ve,ue,ye,Ze,Le,ms,je,vs;function Ys(){return He?[]:document.adoptedStyleSheets||[]}const Qs=class xs{constructor(){g(this,Le),g(this,je),g(this,Ve,!Xe()),g(this,ue,new Map),g(this,ye,new Map),g(this,Ze,Ys())}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new xs),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(e,t){if(a(this,Ve)){const n=Array.isArray(t)?t.map(r=>r.toString()).join(""):t.toString();R(this,Le,ms).call(this,e,n)}else t.styleSheet&&R(this,je,vs).call(this,e,t.styleSheet)}};Ve=new WeakMap;ue=new WeakMap;ye=new WeakMap;Ze=new WeakMap;Le=new WeakSet;ms=function(s,e){if(He)return;let t=a(this,ye).get(s);t||(t=document.createElement("style"),a(this,ye).set(s,t)),t.textContent=e,document.head.appendChild(t)};je=new WeakSet;vs=function(s,e){He||(a(this,ue).set(s,e),document.adoptedStyleSheets=[...a(this,Ze),...Array.from(a(this,ue).values())])};let et=Qs;const W=[q`
    :host {
      ${_(hs)}
      ${_(ys)}
    }
  `];et.instance.injectGlobalStyles("root-tokens",q`
    :root,
    :root[gds-theme='light'] {
      ${_(hs)}
      ${_(ys)}
      ${_(us)}
    }
    :root[gds-theme='dark'] {
      ${_(Te)}
    }
  `);const st=`:host {
  --gds-ripple-motion-name: ripple;
  --gds-ripple-motion: var(--gds-ripple-motion-name) 1.25s
    cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal none running;
  border-radius: var(--gds-sys-space-max);
  contain: strict;
  display: grid;
  place-content: center;
  height: 100%;
  inset: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

div {
  background-color: currentColor;
  border-radius: var(--gds-sys-space-max);
  display: flex;
  height: 100%;
  left: calc((-50% + var(--gds-ripple-left)) / 4);
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  will-change: transform;
}

div.gds-ripple-effect {
  animation: var(--gds-ripple-motion);
}

@keyframes ripple {
  from {
    opacity: 0.2;
    transform: scale(0.6, 1);
  }
  to {
    opacity: 0;
    transform: scale(1.25);
  }
}
@media (prefers-reduced-motion: reduce) {
  :host {
    --gds-ripple-motion-name: none !important;
  }
}`;let de=class extends A{constructor(){super(...arguments),this.onmousedown=s=>{const t=s.target.getBoundingClientRect(),n=this._rippleEl;n&&(n.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${s.clientY-t.top}px`),this.style.setProperty("--gds-ripple-left",`${s.clientX-t.left}px`),setTimeout(()=>{n.classList.add("gds-ripple-effect")},20))}}render(){return ve`<div></div>`}};de.styles=[W,_(st)];o([ne("div")],de.prototype,"_rippleEl",2);de=o([$("gds-ripple")],de);var ce,ge,Oe;const tt=class ks{constructor(){g(this,ce,new Map),g(this,ge,new Map),g(this,Oe,!Xe())}static get instance(){var e;return(e=globalThis.__gdsTransitionalStyles)!=null&&e[Y]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[Y]:new ks}),globalThis.__gdsTransitionalStyles[Y]}apply(e,t){if(!e.shadowRoot)return;const n=a(this,ce).get(t);n&&(a(this,ge).set(t,e),this.applyToElement(t,n))}applyToElement(e,t){var D,f;const n=a(this,ge).get(e);if(!n||!n.shadowRoot)return;const r=()=>{n._dynamicStylesController.clearInitial(),n._dynamicStylesController.inject("t-styles",_(t)),n._isUsingTransitionalStyles=!0},l=()=>{n._isUsingTransitionalStyles=!1,n._dynamicStylesController.clear("t-styles"),n._dynamicStylesController.restoreInitial()},c="[gds-element=gds-theme]";let b=n.getRootNode(),k=n.closest(c);for(;k===null&&b!==document;)k=(D=b.host)==null?void 0:D.closest(c),b=(f=b.host)==null?void 0:f.getRootNode();if(k){const m=k,T=()=>{m.designVersion==="2023"?l():r()};if(m.addEventListener("gds-design-version-changed",T),n.addEventListener("gds-element-disconnected",()=>m.removeEventListener("gds-design-version-changed",T)),m.designVersion==="2023"){l();return}}r()}register(e,t){let n=t;a(this,Oe)&&(n=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${t}`),a(this,ce).set(e,n),this.applyToElement(e,n)}};ce=new WeakMap;ge=new WeakMap;Oe=new WeakMap;let xe=tt;function ke(s,e){const t={waitUntilFirstUpdate:!1,...e};return(n,r,l)=>{const{update:c}=n,b=Array.isArray(s)?s:[s];n.update=function(k){b.forEach(D=>{var m;const f=D;if(k.has(f)){const T=k.get(f),oe=this[f];T!==oe&&(!t.waitUntilFirstUpdate||this.hasUpdated)&&((m=l.value)==null||m.call(this,T,oe))}}),c.call(this,k)}}}function nt(s={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(e,t,n)=>{let r;const l=e.connectedCallback,c=e.disconnectedCallback;e.connectedCallback=function(){l==null||l.call(this);const b=(k,D)=>{var f;(f=n.value)==null||f.call(this)};r=new MutationObserver(b),r.observe(this,s)},e.disconnectedCallback=function(){c==null||c.call(this),r.disconnect()}}}const ot={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},rt=/^([<|>]=?)?([0-9a-z]+)/,_s=["{","}",";",":",","],ns=[" ","/n"];function at(s=""){const e=[];let t="";for(let n=0;n<s.length;n++){const r=s[n];if(ns.includes(r)||(t+=r),_s.includes(r)){e.push(t.slice(0,-1)),e.push(r),t="";continue}if(ns.includes(r)||n===s.length-1){e.push(t),t="";continue}}return e.filter(n=>n!=="")}function it(s){const e=[];let t={breakpoint:"-",values:[]};const n=()=>({sel:"",values:[]});let r=n();for(const l of s){if(!_s.includes(l)){r.values.push(l);continue}if(l==="{"&&(t={breakpoint:r.values.join(","),values:[]},r=n()),l===";"&&(e.length===0&&e.push(t),r.values.length>0&&(t.values.push(r),r=n())),l===":"){const c=r.values.pop()??"";r.sel=c}t&&l==="}"&&(t.values.push(r),r=n(),e.push(t))}return r.values.length>0&&t.values.push(r),e.length===0&&e.push(t),e}function lt(s){return s.split(",").map(t=>{const n=t.trim().match(rt);if(!n)throw new Error(`Invalid breakpoint specifier: ${t}`);return{condition:n[1],value:n[2]}})}function dt(s,e,t,n=l=>l,r=(l,c)=>`${l}: ${c.join(" ")};`){let l="";for(const c of t){const D=`@media ${(c.breakpoint==="-"?[{condition:">=",value:"0"}]:lt(c.breakpoint)).map(f=>{var m;return`(${(m=f.condition)!=null&&m.includes("<")?"max-width":"min-width"}: ${ot[f.value]??f.value})`}).join(" and ")} {${c.values.map(f=>{let m=s;f.sel.length>0&&(m=s===":host"?`:host(:${f.sel})`:`${s}:${f.sel}`);const T=r(e,f.values.map(n));return f.sel==="hover"?`@media (hover: hover) {${m}{${T}}}`:`${m}{${T}}`}).join("")}}`;l+=D}return l}const $e=new Map;function i(s){return(e,t)=>{const n=(s==null?void 0:s.property)??String(t),r=s==null?void 0:s.valueTemplate,l=s==null?void 0:s.styleTemplate,c=(s==null?void 0:s.cacheOverrideKey)??"0";p({attribute:s==null?void 0:s.attribute,noAccessor:!0})(e,t),Object.defineProperty(e,t,{get:function(){return this["__"+String(t)]},set:async function(b){if(!b)return;this["__"+String(t)]=b,await this.updateComplete;const k=(s==null?void 0:s.selector)??this.constructor.styleExpressionBaseSelector,D=this.level??"0",f=k+n+b+D+c;if($e.has(f)){this._dynamicStylesController.inject(`sep_${String(t)}`,$e.get(f));return}const m=it(at(b)),T=dt(k,n,m,r==null?void 0:r.bind(this),l==null?void 0:l.bind(this)),oe=_(T);$e.set(f,oe),this._dynamicStylesController.inject(`sep_${String(t)}`,oe)}})}}class ct extends Ns{constructor(e){if(super(e),e.type!==Is.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(e){return ls}update(e,[t]){var l;const n=e.element,r=(l=e.options)==null?void 0:l.host;Array.from(r.attributes).forEach(c=>{t(c)&&n.setAttribute(c.name.replace("gds-",""),c.value)})}}const gt=Bs(ct),os=new WeakMap;function pt(s){return(e,...t)=>{let n=os.get(e);return n||(n=e.map(r=>r.replace(/\n[\s]+</gm,"<")),n.raw=e.raw,os.set(e,n)),s(n,...t)}}function ws(s,e,t){if(s==="transparent"||s==="currentColor"||s==="inherit")return s;const[n,r]=s.split("/"),l=`var(--gds-sys-color-l${t}-${e}-${n})`;return r?`color-mix(in srgb, ${l} ${parseFloat(r)*100}%, transparent 0%)`:l}function _e(s){return{valueTemplate:function(e){return ws(e,s,this.level)}}}const se={valueTemplate:s=>`var(--gds-sys-space-${s}, 0)`},C={valueTemplate:s=>`var(--gds-sys-space-${bt(s)}, ${s})`},ze={valueTemplate:s=>{const t=(s.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${s})`:`calc(var(--gds-sys-space-${s.substring(1)}) * -1)`;return s==="auto"?"auto":t},styleTemplate:(s,e)=>{const t=b=>b==="auto"?"auto":`${b}`,n=t(e[0]),r=e.length>1?t(e[1]):n,l=e.length>2?t(e[2]):n,c=e.length>3?t(e[3]):r;return`${s}: ${n} ${r} ${l} ${c};`}};function bt(s){return s.replace(/[^a-zA-Z0-9-]/g,"")}function we(s){class e extends s{}return o([i(C)],e.prototype,"width",2),o([i(C)],e.prototype,"min-width",2),o([i(C)],e.prototype,"max-width",2),o([i(C)],e.prototype,"inline-size",2),o([i(C)],e.prototype,"min-inline-size",2),o([i(C)],e.prototype,"max-inline-size",2),e}function ft(s){class e extends s{}return o([i(C)],e.prototype,"height",2),o([i(C)],e.prototype,"min-height",2),o([i(C)],e.prototype,"max-height",2),o([i(C)],e.prototype,"block-size",2),o([i(C)],e.prototype,"min-block-size",2),o([i(C)],e.prototype,"max-block-size",2),e}function Se(s){class e extends s{}return o([i(ze)],e.prototype,"margin",2),o([i(ze)],e.prototype,"margin-inline",2),o([i(ze)],e.prototype,"margin-block",2),e}function ht(s){class e extends s{}return o([i(se)],e.prototype,"padding",2),o([i(se)],e.prototype,"padding-inline",2),o([i(se)],e.prototype,"padding-block",2),e}function Ce(s){class e extends s{}return o([i()],e.prototype,"align-self",2),o([i()],e.prototype,"justify-self",2),o([i()],e.prototype,"place-self",2),o([i()],e.prototype,"grid-column",2),o([i()],e.prototype,"grid-row",2),o([i()],e.prototype,"grid-area",2),o([i()],e.prototype,"flex",2),o([i()],e.prototype,"order",2),e}function ut(s){class e extends s{}return o([i()],e.prototype,"position",2),o([i()],e.prototype,"transform",2),o([i()],e.prototype,"inset",2),e}var u;class E extends A{constructor(){super(),g(this,u,void 0),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{S(this,u,this.attachInternals())}catch{S(this,u,{form:this.closest("form"),setFormValue:t=>{this.value=t},setValidity:(t,n)=>{a(this,u).validity=t,this.errorMessage=n||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0})}}set invalid(e){const t=this.invalid;a(this,u).setValidity({...a(this,u).validity,customError:e,valid:!e},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",t),a(this,u).checkValidity()}get invalid(){return!a(this,u).validity.valid}get value(){return this._internalValue}set value(e){this._internalValue=e,a(this,u).setFormValue(e)}get form(){return a(this,u).form}get validity(){return a(this,u).validity}get validationMessage(){return a(this,u).validationMessage}get willValidate(){return a(this,u).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const t=this.invalid,n=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=n[1]||this.errorMessage,a(this,u).setValidity(n[0],n[1],this._getValidityAnchor()),t!==this.invalid&&(this.requestUpdate("invalid",t),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),a(this,u).checkValidity()}reportValidity(){return a(this,u).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){typeof this.value=="string"?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(e){e==null||e.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(e){this.checkValidity(),this.validity.valid||e.preventDefault()}}u=new WeakMap;E.formAssociated=!0;o([p({attribute:!1})],E.prototype,"validator",2);o([p({type:Boolean})],E.prototype,"required",2);o([p({attribute:"error-message"})],E.prototype,"errorMessage",2);o([p({type:Boolean,reflect:!0})],E.prototype,"invalid",1);o([p()],E.prototype,"label",2);o([p()],E.prototype,"value",1);o([p({reflect:!0})],E.prototype,"name",2);o([p({type:Boolean,reflect:!0})],E.prototype,"disabled",2);o([ke("value",{waitUntilFirstUpdate:!0})],E.prototype,"__handleValueChange",1);const yt=`@layer tokens, core, a11y, ranks, sizes, variants, disabled;

@layer a11y {
  @media (prefers-reduced-motion: reduce) {
    .button {
      transition: none;
    }
  }
}

@layer core {
  :host {
    display: inline-flex;
    max-width: 100%;
  }

  .button {
    --_block-size: var(--gds-sys-space-3xl);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    block-size: var(--_block-size);
    background-color: var(--gds-sys-color-l3-background-primary);
    color: var(--gds-sys-color-l3-content-primary);
    border-radius: var(--gds-sys-space-max);
    font-family: inherit;
    font-size: var(--gds-sys-text-size-detail-m);
    line-height: var(--gds-sys-text-line-height-detail-m);
    font-weight: var(--gds-sys-text-weight-book);
    gap: var(--gds-sys-space-s);
    outline-color: transparent;
    outline-offset: var(--gds-sys-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-sys-space-3xs);
    padding-block: var(--gds-sys-space-s);
    padding-inline: var(--gds-sys-space-l);
    position: relative;
    text-decoration: none;
    transition-property: color, border-colorm, background;
    transition-duration: 0.2s;
    flex: 1;

    &:focus {
      outline-color: var(--gds-sys-color-l3-content-tertiary);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-background-primary),
          var(--gds-sys-color-l3-states-dark-hover)
        );
      }
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-l3-background-primary),
        var(--gds-sys-color-l3-states-dark-pressed)
      );
    }

    &:not(.circle) slot:not([name]) {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

.button.circle {
  aspect-ratio: 1 / 1;
  padding: 0;
  min-block-size: var(--_block-size);
  min-inline-size: var(--_block-size);
}

.button:disabled {
  pointer-events: none;
  background-color: var(--gds-sys-color-l3-background-disabled);
  color: var(--gds-sys-color-l3-content-disabled);
}

@layer ranks {
  :host([rank*='secondary']) .button {
    background-color: var(--gds-sys-color-l3-background-secondary);
    color: var(--gds-sys-color-l3-content-tertiary);

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-background-secondary),
          var(--gds-sys-color-l3-states-light-hover)
        );
      }
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-l3-background-secondary),
        var(--gds-sys-color-l3-states-light-pressed)
      );
    }
  }

  :host([rank*='tertiary']) .button {
    background-color: transparent;
    color: var(--gds-sys-color-l3-content-tertiary);

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-l3-states-light-hover)
        );
      }
    }

    &:active {
      background-color: color-mix(
        in srgb,
        transparent,
        var(--gds-sys-color-l3-states-light-pressed)
      );
    }
  }
}

@layer sizes {
  :host([size='xs']) .button {
    --_block-size: var(--gds-sys-space-l);
    font-size: var(--gds-sys-text-size-detail-s);
    line-height: var(--gds-sys-text-line-height-detail-s);
    padding-inline: var(--gds-sys-space-m);
  }

  :host([size='small']) .button {
    --_block-size: var(--gds-sys-space-xl);
    font-size: var(--gds-sys-text-size-detail-s);
    line-height: var(--gds-sys-text-line-height-detail-s);
    padding-inline: var(--gds-sys-space-m);
  }

  :host([size='medium']) .button {
    --_block-size: var(--gds-sys-space-2xl);
    font-size: var(--gds-sys-text-size-detail-m);
    line-height: var(--gds-sys-text-line-height-detail-m);
  }
}

@layer variants {
  .positive {
    background-color: var(--gds-sys-color-l3-background-positive);

    &:focus {
      outline-color: var(--gds-sys-color-l3-content-positive);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-background-positive),
          var(--gds-sys-color-l3-states-dark-hover)
        );
      }
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-l3-background-positive),
        var(--gds-sys-color-l3-states-dark-pressed)
      );
    }

    &.secondary {
      background-color: var(--gds-sys-color-l3-background-positive-secondary);
      color: var(--gds-sys-color-l3-content-positive);

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-background-positive-secondary),
            var(--gds-sys-color-l3-states-positive-hover)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-background-positive-secondary),
          var(--gds-sys-color-l3-states-positive-pressed)
        );
      }
    }

    &.tertiary {
      background-color: transparent;
      color: var(--gds-sys-color-l3-content-positive);

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-l3-states-positive-hover)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-l3-states-positive-pressed)
        );
      }
    }
  }

  .negative {
    background-color: var(--gds-sys-color-l3-background-negative);

    &:focus {
      outline-color: var(--gds-sys-color-l3-content-negative);
      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-background-negative),
          var(--gds-sys-color-l3-states-dark-hover)
        );
      }
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-l3-background-negative),
        var(--gds-sys-color-l3-states-dark-pressed)
      );
    }

    &.secondary {
      background-color: var(--gds-sys-color-l3-background-negative-secondary);
      color: var(--gds-sys-color-l3-content-negative);

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-background-negative-secondary),
            var(--gds-sys-color-l3-states-negative-hover)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-background-negative-secondary),
          var(--gds-sys-color-l3-states-negative-pressed)
        );
      }
    }

    &.tertiary {
      background-color: transparent;
      color: var(--gds-sys-color-l3-content-negative);

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-l3-states-negative-hover)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-l3-states-negative-pressed)
        );
      }
    }
  }
}
`;var ie,G,U,Ae,Ss,We,De;const mt=["aria-label","aria-haspopup","aria-expanded"],vt=pt(Q);class y extends E{constructor(){super(...arguments),g(this,G),g(this,Ae),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",g(this,ie,!1),g(this,We,()=>{var t;const e=((t=this._mainSlot)==null?void 0:t.assignedElements())??[];S(this,ie,e.length===1&&e.some(n=>n.tagName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),g(this,De,e=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e}),this.form&&!a(this,G,U)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),xe.instance.apply(this,"gds-button")}focus(e){var t;(t=this._getValidityAnchor())==null||t.focus(e)}render(){const e={button:!0,circle:a(this,ie),icon:a(this,ie),xs:this.size==="xs",small:this.size==="small",large:this.size==="large",positive:this.variant==="positive",negative:this.variant==="negative",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},t=a(this,G,U)?Qe`a`:Qe`button`;return ps`
      <${t}
        class=${Fs(e)}
        type="${re(a(this,G,U)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||ls}
        href=${re(a(this,G,U)?this.href:void 0)}
        target=${re(a(this,G,U)?this.target:void 0)}
        rel=${re(a(this,G,U)?this.rel||a(this,Ae,Ss):void 0)}
        download=${re(a(this,G,U)?this.download:void 0)}
        part="_button"
        @click="${a(this,De)}"
        ${gt(n=>n.name.startsWith("gds-aria")||n.name==="gds-role"||mt.includes(n.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${a(this,We)}></slot>
        <slot name="trail"></slot>
        ${Ps(!this._isUsingTransitionalStyles,()=>vt`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${t}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}}ie=new WeakMap;G=new WeakSet;U=function(){return this.href.length>0};Ae=new WeakSet;Ss=function(){return this.target==="_blank"?"noreferrer noopener":void 0};We=new WeakMap;De=new WeakMap;y.styles=[W,_(yt)];y.shadowRootOptions={mode:"open",delegatesFocus:!0};o([p({type:Boolean,reflect:!0})],y.prototype,"disabled",2);o([i({selector:".button"})],y.prototype,"justify-content",2);o([p({reflect:!0})],y.prototype,"type",2);o([p({reflect:!0})],y.prototype,"rank",2);o([p({reflect:!0})],y.prototype,"variant",2);o([p({reflect:!0})],y.prototype,"size",2);o([p()],y.prototype,"label",2);o([p()],y.prototype,"href",2);o([p()],y.prototype,"target",2);o([p()],y.prototype,"rel",2);o([p()],y.prototype,"download",2);o([ne("slot:not([name])")],y.prototype,"_mainSlot",2);o([ne(".button")],y.prototype,"_button",2);o([nt({attributes:!0,childList:!1,subtree:!1,characterData:!1})],y.prototype,"_attributeChanged",1);let Ge=class extends we(Se(Ce(y))){};Ge=o([$("gds-button",{dependsOn:[de]})],Ge);const xt=q`
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
`;var kt=xt;let d=class extends we(ft(Se(ht(Ce(ut(A)))))){constructor(){super(...arguments),this.level="2"}render(){return Q`<slot></slot>`}};d.styles=[W,kt];o([i()],d.prototype,"display",2);o([p()],d.prototype,"level",2);o([i(_e("content"))],d.prototype,"color",2);o([i(_e("background"))],d.prototype,"background",2);o([i({styleTemplate:function(s,e){const t=this,[n,r=t["border-style"]||"solid",l=t["border-color"]||"primary"]=e,c=`var(--gds-sys-space-${n})`,b=ws(l,"border",t.level);return`border: ${c} ${r} ${b};`}})],d.prototype,"border",2);o([i(_e("border"))],d.prototype,"border-color",2);o([i(se)],d.prototype,"border-width",2);o([i()],d.prototype,"border-style",2);o([i(se)],d.prototype,"border-radius",2);o([i({valueTemplate:s=>`var(--gds-sys-shadow-${s})`})],d.prototype,"box-shadow",2);o([i()],d.prototype,"opacity",2);o([i()],d.prototype,"overflow",2);o([i()],d.prototype,"box-sizing",2);o([i()],d.prototype,"z-index",2);o([i({styleTemplate:(s,e)=>{const t=e[0],n=`font-size: var(--gds-sys-text-size-${t});`,r=`line-height: var(--gds-sys-text-line-height-${t});`;return n+r}})],d.prototype,"font-size",2);o([i({valueTemplate:s=>`var(--gds-sys-text-weight-${s})`})],d.prototype,"font-weight",2);o([i()],d.prototype,"text-align",2);o([i()],d.prototype,"text-wrap",2);o([i()],d.prototype,"overflow-wrap",2);o([i()],d.prototype,"white-space",2);o([i({...se,styleTemplate:(s,e)=>{const t=e[0],n=e[1]||t;return`gap: ${t} ${n};`},cacheOverrideKey:"flex"})],d.prototype,"gap",2);o([i()],d.prototype,"align-items",2);o([i()],d.prototype,"align-content",2);o([i()],d.prototype,"justify-content",2);o([i()],d.prototype,"justify-items",2);o([i()],d.prototype,"flex-direction",2);o([i()],d.prototype,"flex-wrap",2);o([i()],d.prototype,"place-items",2);o([i()],d.prototype,"place-content",2);d=o([$("gds-div")],d);let te=class extends d{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return Q`<slot></slot>`}};te.styles=[W,q`
      :host {
        box-sizing: border-box;
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
        border-width: var(--gds-sys-space-4xs);
        border-style: solid;
        display: flex;
        flex-direction: column;
      }
    `];o([i({property:"box-shadow",valueTemplate:s=>`var(--gds-sys-shadow-${s})`})],te.prototype,"shadow",2);o([i({styleTemplate:function(s,e){return`
      --_border-color: var(--gds-sys-color-l${this.level}-background-${e});
      --_background-color: var(--gds-sys-color-l${this.level}-background-${e});
      --_color: var(--gds-sys-color-l${this.level}-content-${e});
      `}})],te.prototype,"variant",2);te=o([$("gds-card")],te);const _t=q`
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
`;var wt=_t;class w extends Se(Ce(A)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.box=!1,this.label=""}get svgAttributes(){const e=this.constructor,t={fill:"none",xmlns:"http://www.w3.org/2000/svg",...this.size===void 0&&{width:this.width||e._width,height:this.width||e._height}||{},viewBox:this.box||e._viewBox,part:"icon"};return this.label?{...t,"aria-label":this.label}:{...t,role:"presentation"}}get svgContent(){const e=this.constructor;return this.solid?e._solidSVG:e._regularSVG}applyStroke(e){return this.stroke?e.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):e}generateAttributesString(e){return Object.entries(e).filter(([t,n])=>n!==void 0).map(([t,n])=>`${t}="${n}"`).join(`
      `)}render(){const e=this.svgAttributes;let t=this.svgContent||"";this.stroke&&(t=this.applyStroke(t));const n=`
      <svg ${this.generateAttributesString(e)}>
        ${t}
      </svg>
    `;return ve`${Gs(n)}`}}w.styles=[W,wt];o([i({...C,property:"height",selector:"svg"})],w.prototype,"size",2);o([p({type:Number})],w.prototype,"width",2);o([p({type:Number})],w.prototype,"height",2);o([p({type:Boolean})],w.prototype,"solid",2);o([p({type:Number})],w.prototype,"stroke",2);o([p()],w.prototype,"level",2);o([i(_e("content"))],w.prototype,"color",2);o([p({type:String})],w.prototype,"box",2);o([p({type:String})],w.prototype,"label",2);w.define();const St=q`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-l2-border-primary);
  }
`;var Ct=St;let me=class extends d{render(){return Q`<slot></slot>`}};me.styles=[W,Ct];me=o([$("gds-flex")],me);let B=class extends w{};B._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';B._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>';B._name="chevron-left";B._width=24;B._height=24;B._viewBox="0 0 24 24";B=o([$("gds-icon-chevron-left")],B);const $t=s=>{Ge.define();const e=O("gds-button"),t={...s,class:s.className};return M.createElement(e,t)},zt=s=>{te.define();const e=O("gds-card"),t={...s,class:s.className};return M.createElement(e,t)};let N=class extends w{};N._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';N._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>';N._name="chevron-right";N._width=24;N._height=24;N._viewBox="0 0 24 24";N=o([$("gds-icon-chevron-right")],N);function Mt(){return(s,e,t)=>{const n=s.connectedCallback,r=s.disconnectedCallback;s.connectedCallback=function(){n==null||n.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[e]=new ResizeObserver(()=>{this.__resizeObserver_tids[e]&&clearTimeout(this.__resizeObserver_tids[e]),this.__resizeObserver_tids[e]=setTimeout(()=>{var l;(l=t.value)==null||l.call(this)},20)}),this.__resizeObservers[e].observe(this)},s.disconnectedCallback=function(){r==null||r.call(this),this.__resizeObservers[e].disconnect()}}}let I=class extends w{};I._regularSVG='<path d="M20.7999 7C17.0999 7 13.8999 9.1 12.1999 12.2C11.9999 10.2 11.1999 8.4 10.0999 6.8C8.69995 4.7 6.59995 3.1 4.29995 2.2L3.69995 2L3.49995 2.5C2.59995 3.9 2.09995 5.5 1.99995 7.2C1.89995 8.9 2.29995 10.5 2.99995 12.1C3.69995 13.6 4.79995 14.9 6.19995 15.8C7.49995 16.8 9.09995 17.4 10.6999 17.5C10.3999 19 9.99995 21 9.99995 21V21.1C9.99995 21.2 9.99995 21.2 10.0999 21.3C10.0999 21.3 10.0999 21.4 10.1999 21.4C10.2999 21.4 10.2999 21.4 10.3999 21.4H11.4999C11.5999 21.4 11.6999 21.4 11.7999 21.4C11.8999 21.3 11.8999 21.2 11.8999 21.1C11.8999 21.1 12.0999 18.8 12.1999 17.6C17.2999 17.3 21.3999 13 21.3999 7.7V7H20.7999ZM3.29995 7.7C3.29995 6.3 3.69995 4.9 4.29995 3.7C8.39995 5.5 11.0999 9.6 11.0999 14.1C11.0999 14.8 10.9999 15.5 10.8999 16.2C8.79995 16 6.89995 15 5.49995 13.4C4.09995 11.9 3.29995 9.8 3.29995 7.7ZM12.3999 16.2C12.6999 12.1 15.9999 8.7 20.0999 8.4C19.7999 12.6 16.4999 15.9 12.3999 16.2Z" fill="currentColor"/>';I._solidSVG='<path d="M20.8 7C17.1 7 13.9 9.1 12.2 12.2C12 10.2 11.2 8.4 10.1 6.8C8.70001 4.7 6.60001 3.1 4.30001 2.2L3.70001 2L3.50001 2.5C2.60001 3.9 2.10001 5.5 2.00001 7.2C1.90001 8.9 2.30001 10.5 3.00001 12.1C3.70001 13.6 4.80001 14.9 6.20001 15.8C7.50001 16.8 9.10001 17.4 10.7 17.5C10.4 19 10 21 10 21V21.1C10 21.2 10 21.2 10.1 21.3C10.1 21.3 10.1 21.4 10.2 21.4C10.3 21.4 10.3 21.4 10.4 21.4H11.5C11.6 21.4 11.7 21.4 11.8 21.4C11.9 21.3 11.9 21.2 11.9 21.1C11.9 21.1 12.1 18.8 12.2 17.6C17.3 17.3 21.4 13 21.4 7.7V7H20.8Z" fill="currentColor"/>';I._name="brand-green";I._width=24;I._height=24;I._viewBox="0 0 24 24";I=o([$("gds-icon-brand-green")],I);let J=class extends w{};J._regularSVG='<path d="M9.25 3.75H3.75V20.25H20.25V14.75M13.75 3.75H20.25M20.25 3.75V10.25M20.25 3.75L11 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';J._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H9.25C9.66421 3 10 3.33579 10 3.75C10 4.16421 9.66421 4.5 9.25 4.5H4.5V19.5H19.5V14.75C19.5 14.3358 19.8358 14 20.25 14C20.6642 14 21 14.3358 21 14.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75ZM13 3.75C13 3.33579 13.3358 3 13.75 3H20.25C20.6642 3 21 3.33579 21 3.75V10.25C21 10.6642 20.6642 11 20.25 11C19.8358 11 19.5 10.6642 19.5 10.25V5.56066L11.5303 13.5303C11.2374 13.8232 10.7626 13.8232 10.4697 13.5303C10.1768 13.2374 10.1768 12.7626 10.4697 12.4697L18.4393 4.5H13.75C13.3358 4.5 13 4.16421 13 3.75Z" fill="currentColor"/>';J._name="square-arrow-top-right";J._width=24;J._height=24;J._viewBox="0 0 24 24";J=o([$("gds-icon-square-arrow-top-right")],J);const Et=`@layer base {
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
`;let H=class extends we(A){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return Q`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};H.styles=[...W,_(Et)];o([p({type:Boolean,reflect:!0})],H.prototype,"selected",2);o([p()],H.prototype,"value",2);o([p({type:Boolean,reflect:!0})],H.prototype,"disabled",2);H=o([$("gds-segment")],H);const Tt=`@layer base {
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
`;var X,Re,Cs,Fe,Pe,Be,le,pe,Ne,Ie;const Vt=(s,e)=>{let t;return()=>{clearTimeout(t),t=setTimeout(s,e)}};let z=class extends Ce(we(Se(A))){constructor(){super(...arguments),g(this,Re),this.size="medium",g(this,X,void 0),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,g(this,Fe,()=>{const e=this.segments.filter((t,n,r)=>{var l;return((l=r[n+1])==null?void 0:l.isVisible)&&!t.isVisible})[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),g(this,Pe,()=>{const e=this.segments.filter((t,n,r)=>{var l;return((l=r[n-1])==null?void 0:l.isVisible)&&!t.isVisible}).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),g(this,Be,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),g(this,le,Vt(a(this,Be),50)),g(this,pe,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,n=e.offsetLeft;this._elIndicator.style.transform=`translateX(${n}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),g(this,Ne,e=>{const t=this.segments.find(n=>n===e.target||n.contains(e.target));t&&(this.segments.forEach(n=>n.selected=!1),t.selected=!0,S(this,X,t.value),a(this,pe).call(this),this.dispatchCustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0}))}),g(this,Ie,()=>{a(this,X)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===a(this,X));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return a(this,X)}set value(e){S(this,X,e),a(this,Ie).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{a(this,le).call(this)})})}render(){return Q`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${a(this,Fe)}
        aria-label=${Ye("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${a(this,Ne)}
          @slotchange=${R(this,Re,Cs)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${a(this,Pe)}
        aria-label=${Ye("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{a(this,le).call(this),a(this,pe).call(this)})}};X=new WeakMap;Re=new WeakSet;Cs=function(){var e,t;const s=(e=this.segments.find(n=>n.selected))==null?void 0:e.value;s&&S(this,X,s),(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=new IntersectionObserver(n=>{n.forEach(r=>{const l=r.target;l._isVisible=r.intersectionRatio>.99,a(this,le).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(n=>{var r;(r=this.intersectionObserver)==null||r.observe(n)})};Fe=new WeakMap;Pe=new WeakMap;Be=new WeakMap;le=new WeakMap;pe=new WeakMap;Ne=new WeakMap;Ie=new WeakMap;z.styles=[W,_(Tt)];o([p({reflect:!0})],z.prototype,"size",2);o([p()],z.prototype,"value",1);o([ne("slot")],z.prototype,"_elSlot",2);o([ne("#indicator")],z.prototype,"_elIndicator",2);o([ne("#track")],z.prototype,"_elTrack",2);o([Je()],z.prototype,"_showPrevButton",2);o([Je()],z.prototype,"_showNextButton",2);o([Mt(),ke("value")],z.prototype,"_recalculateMinWidth",1);z=o([$("gds-segmented-control",{dependsOn:[H,B,N]}),Ws()],z);const Lt=q`
  @layer defaults {
    a:link {
      color: currentColor;
      text-underline-offset: 0.1lh;
      font-weight: var(--gds-sys-text-weight-book);
    }

    a:visited {
      color: currentColor;
    }

    h1 {
      font-size: var(--gds-sys-text-size-heading-xl);
      line-height: var(--gds-sys-text-line-height-heading-xl);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h2 {
      font-size: var(--gds-sys-text-size-heading-l);
      line-height: var(--gds-sys-text-line-height-heading-l);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h3 {
      font-size: var(--gds-sys-text-size-heading-m);
      line-height: var(--gds-sys-text-line-height-heading-m);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h4 {
      font-size: var(--gds-sys-text-size-heading-s);
      line-height: var(--gds-sys-text-line-height-heading-s);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h5 {
      font-size: var(--gds-sys-text-size-heading-xs);
      line-height: var(--gds-sys-text-line-height-heading-xs);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h6 {
      font-size: var(--gds-sys-text-size-heading-2xs);
      line-height: var(--gds-sys-text-line-height-heading-2xs);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    p,
    li {
      font-size: var(--gds-sys-text-size-body-m);
      line-height: var(--gds-sys-text-line-height-body-m);
    }

    strong {
      font-weight: var(--gds-sys-text-weight-medium);
    }
  }
`,jt=q`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var Ot=jt;let j=class extends d{constructor(){super(...arguments),this.tag="span"}render(){const e=Rs(encodeURI(this.tag));return ps`<${e} tag><slot></slot></${e}>`}};j.styles=[W,Lt,Ot];o([p({type:String})],j.prototype,"tag",2);o([i({selector:"[tag]",styleTemplate:(s,e)=>{const t=e[0],n=`font-size: var(--gds-sys-text-size-${t});`,r=`line-height: var(--gds-sys-text-line-height-${t});`;return n+r}})],j.prototype,"font-size",2);o([i({selector:"[tag]",valueTemplate:s=>`var(--gds-sys-text-weight-${s})`})],j.prototype,"font-weight",2);o([i()],j.prototype,"text-transform",2);o([i({selector:"[tag]"})],j.prototype,"text-decoration",2);o([i({selector:"[tag]",styleTemplate:(s,e)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${e[0]};
      -webkit-box-orient: vertical;`})],j.prototype,"lines",2);j=o([$("gds-text")],j);let Z=class extends A{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2016"}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",_(`:host {${Te}}`))}render(){return Q`<slot></slot>`}_onColorSchemeChange(){this.colorScheme==="dark"?this._dynamicStylesController.inject("color-scheme",_(`:host { ${Te}}`)):this._dynamicStylesController.inject("color-scheme",_(`:host { ${us}}`)),this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}_onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}};Z.styles=[W,q`
      :host {
        display: contents;
      }
    `];o([p({reflect:!0,attribute:"color-scheme"})],Z.prototype,"colorScheme",2);o([p({reflect:!0,attribute:"design-version"})],Z.prototype,"designVersion",2);o([ke("colorScheme")],Z.prototype,"_onColorSchemeChange",1);o([ke("designVersion")],Z.prototype,"_onDesignVersionChange",1);Z=o([$("gds-theme")],Z);const At=s=>{d.define();const e=O("gds-div"),t={...s,class:s.className};return M.createElement(e,t)},Wt=s=>{me.define();const e=O("gds-flex"),t={...s,class:s.className};return M.createElement(e,t)},Dt=s=>{z.define();const e=O("gds-segmented-control"),t={...s,class:s.className};return M.createElement(e,t)},Gt=s=>{j.define();const e=O("gds-text"),t={...s,class:s.className};return M.createElement(e,t)},$s=s=>{Z.define();const e=O("gds-theme"),t={...s,class:s.className};return M.createElement(e,t)},rs=s=>{H.define();const e=O("gds-segment"),t={...s,class:s.className};return M.createElement(e,t)},Rt=s=>{I.define();const e=O("gds-icon-brand-green"),t={...s,class:s.className};return M.createElement(e,t)},Ft=s=>{J.define();const e=O("gds-icon-square-arrow-top-right"),t={...s,class:s.className};return M.createElement(e,t)};function Pt(s){const e=ds.modules.find(t=>t.declarations.find(n=>n.tagName===s));return e.exports.map(t=>({name:t.declaration.name,path:e.path.replace(/src\//,"@sebgroup/green-core/")}))}const Bt=s=>{const{of:e}=s,[t,n]=M.useState("web"),r=gs(e||"meta"),l=Pt(r.preparedMeta.component),c=Object.keys({...r.preparedMeta.subcomponents});return v.createElement($s,{designVersion:"2023"},v.createElement(At,{margin:"0 0 2xl 0"},v.createElement("h2",null,"Import"),v.createElement(Dt,{"max-width":"500px",value:t,onChange:b=>n(b.target.value)},v.createElement(rs,{value:"web"},"Web component (Angular and others)"),v.createElement(rs,{value:"react"},"React JSX")),l.filter(b=>b.name!=="*").map(b=>v.createElement("div",{key:b.name},t==="web"?v.createElement(Ke,{language:"javascript",dark:!0,code:`import { ${b.name} } from '@sebgroup/green-core/pure'
${b.name}.define()

// or, from direct path:
import { ${b.name} } from '${b.path}'
${b.name}.define()`}):v.createElement(Ke,{language:"javascript",dark:!0,code:`// Use as JSX element(s) in React
import { ${b.name}${c.length>0?c.map(k=>`, ${k}`):""} } from '@sebgroup/green-core/react'`})))))},Nt=()=>{const s=gs("story"),e=s.story.title.replace("Components/","").trim().toLowerCase(),n=`https://seb.io/component/${s.story.componentId.replace("components-","").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")}`;return v.createElement($s,{designVersion:"2023"},v.createElement(zt,{margin:"0 0 2xl 0","flex-direction":"row","justify-content":"space-between","align-items":"center",padding:"l l l xl"},v.createElement(Wt,{"align-items":"center",gap:"l"},v.createElement(Rt,{size:"xl"}),v.createElement(Gt,null,"View ",e," on seb.io")),v.createElement($t,{href:n,target:"_blank",rel:"noopener noreferrer",rank:"secondary"},"Open documentation",v.createElement(Ft,{slot:"trail"}))))};function as(s){const e={blockquote:"blockquote",em:"em",h2:"h2",p:"p",strong:"strong",...cs(),...s.components};return h.jsxs(h.Fragment,{children:[h.jsx(Ts,{isTemplate:!0}),`
`,h.jsx(Vs,{}),`
`,h.jsx(Ls,{}),`
`,h.jsx(js,{}),`
`,h.jsx(Nt,{}),`
`,h.jsx(Bt,{}),`
`,h.jsx(e.h2,{id:"public-api",children:"Public API"}),`
`,h.jsx(e.p,{children:"This table lists all public attributes, properties, methods, events and slots of the component."}),`
`,h.jsxs(e.blockquote,{children:[`
`,h.jsx(e.p,{children:h.jsxs(e.em,{children:[h.jsx(e.strong,{children:"Note:"})," JS properties and DOM attributes have different naming conventions in Green Core (camelCase vs snake-case), so some of them will show up under both sections, even though they refer to the same underlying property."]})}),`
`]}),`
`,h.jsx(Os,{}),`
`,h.jsx(e.h2,{id:"additional-examples-and-customization-options",children:"Additional examples and customization options"}),`
`,h.jsx(As,{})]})}function It(s={}){const{wrapper:e}={...cs(),...s.components};return e?h.jsx(e,{...s,children:h.jsx(as,{...s})}):as(s)}const Jt="en",qt=["da","de","fi","fr","it","nl","no","sv"],Ut={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Åbn kalender-popup",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Man",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Annuller",s307db9af9905317d:"Formularfejloversigt",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brødkrummer",s407a88a592a0987c:"August",s46d6587089bd0356:"Næste måned",s49730f3d5751a433:"Indlæser...",s5052d10b539eabf0:"Marts",s58bfb494feb8eb02:x`${0} valgt`,s5d929ff1619ac0c9:"Søg",s5e8250fb85d64c23:"Luk",s5febcd9b311c16fe:"Rul til højre",s62931b2a50168976:"Forrige måned",s63d040e37887f17e:"I dag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Ti",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"Åbn kontekstmenu",s83c436ed1bc16dfb:"Vis flere oplysninger",s8ade4e9d5e804d6a:"Første tilgængelige dato",s9836b719fa8ef857:"Lør",s987ac119fac8d621:"Søn",s9af3c72c33088826:x`Der er ${0} fejl, der skal rettes, før du kan fortsætte:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Måned",sb4f1dffbb6be6302:"Ryd",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filtrer tilgængelige muligheder",sdc42f1da42d6411a:"Ryd inputfelt",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sidste tilgængelige dato",sf295af199c723ec8:"Fre"},Xt=Object.freeze(Object.defineProperty({__proto__:null,templates:Ut},Symbol.toStringTag,{value:"Module"})),Ht={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Kalender-Modal öffnen",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Mo",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Abbrechen",s307db9af9905317d:"Formularfehlerübersicht",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brotkrümelnavigation",s407a88a592a0987c:"August",s46d6587089bd0356:"Nächster Monat",s49730f3d5751a433:"Laden...",s5052d10b539eabf0:"März",s58bfb494feb8eb02:x`${0} ausgewählt`,s5d929ff1619ac0c9:"Suche",s5e8250fb85d64c23:"Schließen",s5febcd9b311c16fe:"Nach rechts scrollen",s62931b2a50168976:"Vorheriger Monat",s63d040e37887f17e:"Heute",s6cfed919e21ac6ac:"Do",s6d24cd19e23b8185:"Di",s74aa0319e62b2eb7:"Mi",s7793b811d20184fe:"Dezember",s7fd3469f78111589:"Kontextmenü öffnen",s83c436ed1bc16dfb:"Weitere Informationen anzeigen",s8ade4e9d5e804d6a:"Erstes verfügbares Datum",s9836b719fa8ef857:"Sa",s987ac119fac8d621:"So",s9af3c72c33088826:x`Es gibt ${0} Fehler zu beheben, bevor du fortfahren kannst:`,sa6f2645578b2d2bc:"Jahr",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Monat",sb4f1dffbb6be6302:"Löschen",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Verfügbare Optionen filtern",sdc42f1da42d6411a:"Feld löschen",se0955919920ee87d:"Tag",se4129fd6b9d7b4c2:"Letztes verfügbares Datum",sf295af199c723ec8:"Fr"},Zt=Object.freeze(Object.defineProperty({__proto__:null,templates:Ht},Symbol.toStringTag,{value:"Module"})),Kt={s15a16ae9f99f19bf:"Heinä",s15a852e9f9a50fa5:"Kesä",s17e3edbe032f79ec:"Avaa kalenteri-modal",s1a2dda8f763a68bd:"Tammikuu",s1e118319b5202c41:"Ma",s1e187019b5262aa6:"Touko",s281846ef0421c71f:"Marraskuu",s2ceb11be2290bb1b:"Peruuta",s307db9af9905317d:"Lomakkeen virheiden yhteenveto",s39938ecdae568740:"Syys",s3b8a6245b12fa2ad:"Murupolku",s407a88a592a0987c:"Elokuu",s46d6587089bd0356:"Seuraava kuukausi",s49730f3d5751a433:"Ladataan...",s5052d10b539eabf0:"Maalis",s58bfb494feb8eb02:x`${0} valittua`,s5d929ff1619ac0c9:"Hae",s5e8250fb85d64c23:"Sulje",s5febcd9b311c16fe:"Vieritä oikealle",s62931b2a50168976:"Edellinen kuukausi",s63d040e37887f17e:"Tänään",s6cfed919e21ac6ac:"To",s6d24cd19e23b8185:"Ti",s74aa0319e62b2eb7:"Ke",s7793b811d20184fe:"Joulukuu",s7fd3469f78111589:"Avaa pikavalikko",s83c436ed1bc16dfb:"Näytä lisää tietoja",s8ade4e9d5e804d6a:"Ensimmäinen saatavilla oleva päivämäärä",s9836b719fa8ef857:"La",s987ac119fac8d621:"Su",s9af3c72c33088826:x`On ${0} virhettä, jotka täytyy korjata ennen kuin voit jatkaa:`,sa6f2645578b2d2bc:"Vuosi",sa7cd5c2ff6d266e7:"Lokakuu",sb47daaf9e1c4a905:"Kuukausi",sb4f1dffbb6be6302:"Tyhjennä",sbc083a1dbee9af73:"Helmikuu",scb6b9cb49cf93277:"Huhti",sd898d99fd9c13de6:"Suodata saatavilla olevia vaihtoehtoja",sdc42f1da42d6411a:"Tyhjennä syöte",se0955919920ee87d:"Päivä",se4129fd6b9d7b4c2:"Viimeinen saatavilla oleva päivämäärä",sf295af199c723ec8:"Pe"},Yt=Object.freeze(Object.defineProperty({__proto__:null,templates:Kt},Symbol.toStringTag,{value:"Module"})),Qt={s15a16ae9f99f19bf:"Juillet",s15a852e9f9a50fa5:"Juin",s17e3edbe032f79ec:"Ouvrir le calendrier modal",s1a2dda8f763a68bd:"Janvier",s1e118319b5202c41:"Lun",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"Novembre",s2ceb11be2290bb1b:"Annuler",s307db9af9905317d:"Résumé des erreurs du formulaire",s39938ecdae568740:"Septembre",s3b8a6245b12fa2ad:"Fil d'Ariane",s407a88a592a0987c:"Août",s46d6587089bd0356:"Mois suivant",s49730f3d5751a433:"Chargement...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:x`${0} sélectionné(s)`,s5d929ff1619ac0c9:"Rechercher",s5e8250fb85d64c23:"Fermer",s5febcd9b311c16fe:"Faire défiler à droite",s62931b2a50168976:"Mois précédent",s63d040e37887f17e:"Aujourd'hui",s6cfed919e21ac6ac:"Jeu",s6d24cd19e23b8185:"Mar",s74aa0319e62b2eb7:"Mer",s7793b811d20184fe:"Décembre",s7fd3469f78111589:"Ouvrir le menu contextuel",s83c436ed1bc16dfb:"Afficher plus d'informations",s8ade4e9d5e804d6a:"Première date disponible",s9836b719fa8ef857:"Sam",s987ac119fac8d621:"Dim",s9af3c72c33088826:x`Il y a ${0} erreur(s) à corriger avant de pouvoir continuer :`,sa6f2645578b2d2bc:"Année",sa7cd5c2ff6d266e7:"Octobre",sb47daaf9e1c4a905:"Mois",sb4f1dffbb6be6302:"Effacer",sbc083a1dbee9af73:"Février",scb6b9cb49cf93277:"Avril",sd898d99fd9c13de6:"Filtrer les options disponibles",sdc42f1da42d6411a:"Effacer la saisie",se0955919920ee87d:"Jour",se4129fd6b9d7b4c2:"Dernière date disponible",sf295af199c723ec8:"Ven"},en=Object.freeze(Object.defineProperty({__proto__:null,templates:Qt},Symbol.toStringTag,{value:"Module"})),sn={s15a16ae9f99f19bf:"Luglio",s15a852e9f9a50fa5:"Giugno",s17e3edbe032f79ec:"Apri la finestra del calendario",s1a2dda8f763a68bd:"Gennaio",s1e118319b5202c41:"Lun",s1e187019b5262aa6:"Maggio",s281846ef0421c71f:"Novembre",s2ceb11be2290bb1b:"Annulla",s307db9af9905317d:"Riepilogo degli errori del modulo",s39938ecdae568740:"Settembre",s3b8a6245b12fa2ad:"Percorso di navigazione",s407a88a592a0987c:"Agosto",s46d6587089bd0356:"Mese successivo",s49730f3d5751a433:"Caricamento...",s5052d10b539eabf0:"Marzo",s58bfb494feb8eb02:x`${0} selezionato`,s5d929ff1619ac0c9:"Cerca",s5e8250fb85d64c23:"Chiudi",s5febcd9b311c16fe:"Scorri a destra",s62931b2a50168976:"Mese precedente",s63d040e37887f17e:"Oggi",s6cfed919e21ac6ac:"Gio",s6d24cd19e23b8185:"Mar",s74aa0319e62b2eb7:"Mer",s7793b811d20184fe:"Dicembre",s7fd3469f78111589:"Apri il menu contestuale",s83c436ed1bc16dfb:"Mostra più informazioni",s8ade4e9d5e804d6a:"Prima data disponibile",s9836b719fa8ef857:"Sab",s987ac119fac8d621:"Dom",s9af3c72c33088826:x`Ci sono ${0} errori da correggere prima di poter continuare:`,sa6f2645578b2d2bc:"Anno",sa7cd5c2ff6d266e7:"Ottobre",sb47daaf9e1c4a905:"Mese",sb4f1dffbb6be6302:"Pulisci",sbc083a1dbee9af73:"Febbraio",scb6b9cb49cf93277:"Aprile",sd898d99fd9c13de6:"Filtra le opzioni disponibili",sdc42f1da42d6411a:"Pulisci il campo di input",se0955919920ee87d:"Giorno",se4129fd6b9d7b4c2:"Ultima data disponibile",sf295af199c723ec8:"Ven"},tn=Object.freeze(Object.defineProperty({__proto__:null,templates:sn},Symbol.toStringTag,{value:"Module"})),nn={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Open kalenderpop-up",s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"Ma",s1e187019b5262aa6:"Mei",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Annuleren",s307db9af9905317d:"Formulierfoutoverzicht",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Kruimelpad",s407a88a592a0987c:"Augustus",s46d6587089bd0356:"Volgende maand",s49730f3d5751a433:"Laden...",s5052d10b539eabf0:"Maart",s58bfb494feb8eb02:x`${0} geselecteerd`,s5d929ff1619ac0c9:"Zoeken",s5e8250fb85d64c23:"Sluiten",s5febcd9b311c16fe:"Scroll rechts",s62931b2a50168976:"Vorige maand",s63d040e37887f17e:"Vandaag",s6cfed919e21ac6ac:"Do",s6d24cd19e23b8185:"Di",s74aa0319e62b2eb7:"Wo",s7793b811d20184fe:"December",s7fd3469f78111589:"Open contextmenu",s83c436ed1bc16dfb:"Toon meer informatie",s8ade4e9d5e804d6a:"Eerste beschikbare datum",s9836b719fa8ef857:"Za",s987ac119fac8d621:"Zo",s9af3c72c33088826:x`Er zijn ${0} fouten die gecorrigeerd moeten worden voordat je verder kunt gaan:`,sa6f2645578b2d2bc:"Jaar",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Maand",sb4f1dffbb6be6302:"Wis",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filter beschikbare opties",sdc42f1da42d6411a:"Wis invoer",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Laatste beschikbare datum",sf295af199c723ec8:"Vr"},on=Object.freeze(Object.defineProperty({__proto__:null,templates:nn},Symbol.toStringTag,{value:"Module"})),rn={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Åpne kalendermodal",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Man",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s307db9af9905317d:"Skjema feil oppsummering",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brødsmuler",s407a88a592a0987c:"August",s46d6587089bd0356:"Neste måned",s49730f3d5751a433:"Laster...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:x`${0} valgt`,s5d929ff1619ac0c9:"Søk",s5e8250fb85d64c23:"Lukk",s5febcd9b311c16fe:"Rull til høyre",s62931b2a50168976:"Forrige måned",s63d040e37887f17e:"I dag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tir",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"Desember",s7fd3469f78111589:"Åpne kontekstmeny",s83c436ed1bc16dfb:"Vis mer informasjon",s8ade4e9d5e804d6a:"Første tilgjengelige dato",s9836b719fa8ef857:"Lør",s987ac119fac8d621:"Søn",s9af3c72c33088826:x`Det er ${0} feil som må rettes før du kan fortsette:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Måned",sb4f1dffbb6be6302:"Rens",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filtrer tilgjengelige alternativer",sdc42f1da42d6411a:"Rens inputfelt",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Siste tilgjengelige dato",sf295af199c723ec8:"Fre"},an=Object.freeze(Object.defineProperty({__proto__:null,templates:rn},Symbol.toStringTag,{value:"Module"})),ln={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Öppna kalender",s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"Mån",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s307db9af9905317d:"Sammanfattning av formulärfel",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brödsmulor",s407a88a592a0987c:"Augusti",s46d6587089bd0356:"Nästa månad",s49730f3d5751a433:"Laddar...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:x`${0} valda`,s5d929ff1619ac0c9:"Sök",s5e8250fb85d64c23:"Stäng",s5febcd9b311c16fe:"Scrolla höger",s62931b2a50168976:"Föregående månad",s63d040e37887f17e:"Idag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tis",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"Öppna meny",s83c436ed1bc16dfb:"Visa mer information",s8ade4e9d5e804d6a:"Första tillgängliga datum",s9836b719fa8ef857:"Lör",s987ac119fac8d621:"Sön",s9af3c72c33088826:x`Det finns ${0} fel att åtgärda innan du kan fortsätta:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Månad",sb4f1dffbb6be6302:"Rensa",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Sök i listan av val",sdc42f1da42d6411a:"Rensa text",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sista tillgängliga datum",sf295af199c723ec8:"Fre"},dn=Object.freeze(Object.defineProperty({__proto__:null,templates:ln},Symbol.toStringTag,{value:"Module"})),is=new Map([["sv",dn],["no",an],["nl",on],["it",tn],["fr",en],["fi",Yt],["de",Zt],["da",Xt]]),cn=({extraLocales:s,extraTemplates:e}={extraLocales:[],extraTemplates:new Map})=>{const t=[...qt];for(const[n,r]of e)is.set(n,r);for(const n of s)t.push(n);return Ds({sourceLocale:Jt,targetLocales:t,loadLocale:async n=>{const r=is.get(n);return r||Promise.reject(new Error(`Locale ${n} not found`))}})};Ms(ds);Es();const so={style:{name:"Change design version",defaultValue:"2023",toolbar:{icon:"lightning",items:["2016","2023"],showName:!0,dynamicTitle:!0}},language:{name:"Language",defaultValue:"en",toolbar:{icon:"globe",items:["en","sv","da","de","fi","fr","it","nl","no"],showName:!0,dynamicTitle:!0}}},{setLocale:gn}=cn(),to={parameters:{docs:{page:It,transformSource:s=>{const e=s.match(/<gds-theme>([\s\S]*?)<\/gds-theme>/);return e?e[1]:s}},options:{storySort:{order:["Green Design System","Get started","What's what?","Docs","Components","Style",["Components","Layout","Media","Content","Style"],"Concepts",["Architecture"],"Contributing",["Introduction"]]}}},decorators:[(s,e)=>(gn(e.globals.language),setTimeout(()=>{const t=Array.from(document.querySelectorAll("tr")).find(r=>{var l;return(l=r.getAttribute("title"))==null?void 0:l.startsWith("Hide Declarative layout")}),n=t==null?void 0:t.querySelector('button[tabindex="0"]');n&&n.click()},10),ve`<gds-theme .designVersion=${e.globals.style}
        >${s()}</gds-theme
      >`)]};export{to as default,so as globalTypes};
