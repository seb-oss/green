import{x as me,a as ss,i as q,r as v}from"./lit-element-Bx14lxc-.js";import{s as ts}from"./chunk-GKNNPQCW-BkHQSocK.js";import{c as Ge}from"./custom-elements-DJGm7XyP.js";import{r as ns}from"./transitional-styles-Bm3BmXCN.js";import{j as p}from"./jsx-runtime-BjG_zV1W.js";import{u as Fe}from"./index-Dw7eL6hQ.js";import{ag as U,as as os,ae as M,at as je,af as rs,au as as,av as is,aw as ls,ax as ds,ay as cs}from"./index-DkiWHR4W.js";import{r as xe,n as y}from"./gds-element-DKcDvDP5.js";import{m as Le,l as bs,s as u,c as gs}from"./runtime-CNluP0A8.js";import{a as ve}from"./query-p8xgzTDt.js";import{o as fs}from"./unsafe-html-CYO4avEf.js";import"./theme-W9HdWhQt.js";import"./button-BwUZbgoj.js";import"./grid-Dkc3CuPK.js";import"./tokens.style-DY0D4SO1.js";import"./iframe-bJIH1T_T.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./directive-CF8sV3Lr.js";import"./theme.component-DsLs2R3a.js";import"./watch-tFciLXSI.js";import"./button.component-BqOVSUyV.js";import"./class-map-CXsQwv0r.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-D-CzJZ0x.js";import"./grid.component-CRXj-1t7.js";import"./div.component-CeZvfGos.js";var ps=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,Ne=s=>{throw TypeError(s)},o=(s,e,t,n)=>{for(var r=n>1?void 0:n?hs(e,t):e,l=s.length-1,b;l>=0;l--)(b=s[l])&&(r=(n?b(e,t,r):b(r))||r);return n&&r&&ps(e,t,r),r},ke=(s,e,t)=>e.has(s)||Ne("Cannot "+t),i=(s,e,t)=>(ke(s,e,"read from private field"),t?t.call(s):e.get(s)),g=(s,e,t)=>e.has(s)?Ne("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),S=(s,e,t,n)=>(ke(s,e,"write to private field"),e.set(s,t),t),z=(s,e,t)=>(ke(s,e,"access private method"),t);const G="-e04378";class _e{static get instance(){var e;return(e=globalThis.__gdsElementLookupTable)!=null&&e[G]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[G]:new Map}),globalThis.__gdsElementLookupTable[G]}}const N=(s,e)=>function(t){var n;return n=class extends t{constructor(){super(...arguments),this.gdsElementName=s}static define(){if(n.isDefined)return;const l=globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?s:s+G;customElements.get(l)||(n.isDefined=!0,_e.instance.set(s,l),customElements.define(l,n),e!=null&&e.dependsOn&&e.dependsOn.forEach(b=>b.define()))}},n.isDefined=!1,n},Oe=new WeakMap;function us(s,...e){let t=Oe.get(s);return t||(t=Ae(s),t.raw=Ae(s.raw),Oe.set(s,t)),[t,...e]}const Ae=s=>s.map(e=>{for(const[t,n]of _e.instance.entries())e=e.replace(new RegExp(`${t}(?![-a-z])`,"mg"),n);return e});function ys(s){return(e,...t)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return s(e,...t);const[n,...r]=us(e,...t);return s(n,...r)}}const oe=ys(me);function ms(s){return _e.instance.get(s)??s}function re(s){return ms(s)}var C,Q,E,ee,W,$,T,se,A,Ie,B,Be;class xs{constructor(e){g(this,A),g(this,C,!Se()),g(this,Q,!1),g(this,E,[]),g(this,ee,[]),g(this,W,new Map),g(this,$,new Map),g(this,T,[]),g(this,se,[]),this.host=e,this.host.addController(this)}hostConnected(){z(this,A,Be).call(this)}has(e){return i(this,C)?i(this,$).has(e):i(this,W).has(e)}inject(e,t){z(this,A,Ie).call(this,e,t),z(this,A,B).call(this)}clear(e){i(this,C)?this.host.updateComplete.then(()=>{const t=i(this,$).get(e);t==null||t.remove(),i(this,$).delete(e)}):i(this,W).delete(e),z(this,A,B).call(this)}clearAll(){i(this,C)?this.host.updateComplete.then(()=>{i(this,$).forEach(e=>e.remove()),i(this,T).forEach(e=>e.remove()),i(this,$).clear(),S(this,T,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],i(this,W).clear(),S(this,E,[]))}clearInitial(){i(this,C)?this.host.updateComplete.then(()=>{i(this,T).forEach(e=>e.remove()),S(this,T,[])}):S(this,E,[]),z(this,A,B).call(this)}restoreInitial(){i(this,C)?i(this,se).forEach(e=>{i(this,T).push(e.cloneNode(!0))}):S(this,E,[...i(this,ee)]),z(this,A,B).call(this)}}C=new WeakMap;Q=new WeakMap;E=new WeakMap;ee=new WeakMap;W=new WeakMap;$=new WeakMap;T=new WeakMap;se=new WeakMap;A=new WeakSet;Ie=function(s,e){if(i(this,C)){let t=i(this,$).get(s);t||(t=document.createElement("style"),i(this,$).set(s,t)),t.textContent=e.cssText}else{if(!this.host.shadowRoot||!e.styleSheet)return;i(this,W).set(s,e.styleSheet)}};B=function(){if(i(this,C))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(s=>{s.remove()}),i(this,T).forEach(s=>{var e;(e=this.host.shadowRoot)==null||e.appendChild(s)}),i(this,$).forEach(s=>{var e;(e=this.host.shadowRoot)==null||e.appendChild(s)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...i(this,E),...Array.from(i(this,W).values())]}};Be=function(){i(this,Q)||(i(this,C)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(s=>{i(this,T).push(s),i(this,se).push(s.cloneNode(!0))})}):this.host.shadowRoot&&i(this,E).length===0&&(S(this,E,[...this.host.shadowRoot.adoptedStyleSheets||[]]),S(this,ee,[...i(this,E)])),S(this,Q,!0))};function Se(){try{return new CSSStyleSheet,!0}catch{return!1}}function De(s){return s.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join("")}class P extends ss{constructor(){super(),this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new xs(this)}static define(){}connectedCallback(){var e;super.connectedCallback(),this.setAttribute("gds-element",((e=this.gdsElementName)==null?void 0:e.toString())||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(e,t){const n={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new Event(e,n)),this.dispatchEvent(new Event(De(e),n))].every(r=>r!==!1)}dispatchCustomEvent(e,t={}){const n={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new CustomEvent(e,n)),this.dispatchEvent(new CustomEvent(De(e),n))].every(r=>r!==!1)}}P.isDefined=!1;P.styleExpressionBaseSelector=":host";o([xe()],P.prototype,"_isUsingTransitionalStyles",2);const Je=`/**
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
  --gds-sys-space-max: 999px;`,de=`/**
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
  --gds-sys-color-l3-states-negative-pressed: #ee8375 20%;`,qe=`/**
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
  --gds-sys-color-l3-states-negative-pressed: #a63e2a 20%;`,Ue=`/**
 * Do not edit directly, this file was auto-generated.
 */

--gds-sys-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
--gds-sys-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
--gds-sys-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);
--gds-sys-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03);
--gds-sys-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03);
`;var vs={};const we=typeof process<"u"&&vs!==void 0;var ce,te,ne,Ce,H,Xe,He;function ks(){return we?[]:document.adoptedStyleSheets||[]}const _s=class Ze{constructor(){g(this,H),g(this,ce,!Se()),g(this,te,new Map),g(this,ne,new Map),g(this,Ce,ks())}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new Ze),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(e,t){if(i(this,ce)){const n=Array.isArray(t)?t.map(r=>r.toString()).join(""):t.toString();z(this,H,Xe).call(this,e,n)}else t.styleSheet&&z(this,H,He).call(this,e,t.styleSheet)}};ce=new WeakMap;te=new WeakMap;ne=new WeakMap;Ce=new WeakMap;H=new WeakSet;Xe=function(s,e){if(we)return;let t=i(this,ne).get(s);t||(t=document.createElement("style"),i(this,ne).set(s,t)),t.textContent=e,document.head.appendChild(t)};He=function(s,e){we||(i(this,te).set(s,e),document.adoptedStyleSheets=[...i(this,Ce),...Array.from(i(this,te).values())])};let Ss=_s;const X=[q`
    :host {
      ${v(Je)}
      ${v(Ue)}
    }
  `];Ss.instance.injectGlobalStyles("root-tokens",q`
    :root,
    :root[gds-theme='light'] {
      ${v(Je)}
      ${v(Ue)}
      ${v(qe)}
    }
    :root[gds-theme='dark'] {
      ${v(de)}
    }
  `);var Z,K,be;const ws=class Ke{constructor(){g(this,Z,new Map),g(this,K,new Map),g(this,be,!Se())}static get instance(){var e;return(e=globalThis.__gdsTransitionalStyles)!=null&&e[G]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[G]:new Ke}),globalThis.__gdsTransitionalStyles[G]}apply(e,t){if(!e.shadowRoot)return;const n=i(this,Z).get(t);n&&(i(this,K).set(t,e),this.applyToElement(t,n))}applyToElement(e,t){var O,f;const n=i(this,K).get(e);if(!n||!n.shadowRoot)return;const r=()=>{n._dynamicStylesController.clearInitial(),n._dynamicStylesController.inject("t-styles",v(t)),n._isUsingTransitionalStyles=!0},l=()=>{n._isUsingTransitionalStyles=!1,n._dynamicStylesController.clear("t-styles"),n._dynamicStylesController.restoreInitial()},b="[gds-element=gds-theme]";let c=n.getRootNode(),m=n.closest(b);for(;m===null&&c!==document;)m=(O=c.host)==null?void 0:O.closest(b),c=(f=c.host)==null?void 0:f.getRootNode();if(m){const h=m,w=()=>{h.designVersion==="2023"?l():r()};if(h.addEventListener("gds-design-version-changed",w),n.addEventListener("gds-element-disconnected",()=>h.removeEventListener("gds-design-version-changed",w)),h.designVersion==="2023"){l();return}}r()}register(e,t){let n=t;i(this,be)&&(n=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${t}`),i(this,Z).set(e,n),this.applyToElement(e,n)}};Z=new WeakMap;K=new WeakMap;be=new WeakMap;let $e=ws;function Me(s,e){const t={waitUntilFirstUpdate:!1,...e};return(n,r,l)=>{const{update:b}=n,c=Array.isArray(s)?s:[s];n.update=function(m){c.forEach(O=>{var h;const f=O;if(m.has(f)){const w=m.get(f),I=this[f];w!==I&&(!t.waitUntilFirstUpdate||this.hasUpdated)&&((h=l.value)==null||h.call(this,w,I))}}),b.call(this,m)}}}const Cs={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},$s=/^([<|>]=?)?([0-9a-z]+)/,Ye=["{","}",";",":",","],Ve=[" ","/n"];function Ms(s=""){const e=[];let t="";for(let n=0;n<s.length;n++){const r=s[n];if(Ve.includes(r)||(t+=r),Ye.includes(r)){e.push(t.slice(0,-1)),e.push(r),t="";continue}if(Ve.includes(r)||n===s.length-1){e.push(t),t="";continue}}return e.filter(n=>n!=="")}function zs(s){const e=[];let t={breakpoint:"-",values:[]};const n=()=>({sel:"",values:[]});let r=n();for(const l of s){if(!Ye.includes(l)){r.values.push(l);continue}if(l==="{"&&(t={breakpoint:r.values.join(","),values:[]},r=n()),l===";"&&(e.length===0&&e.push(t),r.values.length>0&&(t.values.push(r),r=n())),l===":"){const b=r.values.pop()??"";r.sel=b}t&&l==="}"&&(t.values.push(r),r=n(),e.push(t))}return r.values.length>0&&t.values.push(r),e.length===0&&e.push(t),e}function Ts(s){return s.split(",").map(t=>{const n=t.trim().match($s);if(!n)throw new Error(`Invalid breakpoint specifier: ${t}`);return{condition:n[1],value:n[2]}})}function Es(s,e,t,n=l=>l,r=(l,b)=>`${l}: ${b.join(" ")};`){let l="";for(const b of t){const O=`@media ${(b.breakpoint==="-"?[{condition:">=",value:"0"}]:Ts(b.breakpoint)).map(f=>{var h;return`(${(h=f.condition)!=null&&h.includes("<")?"max-width":"min-width"}: ${Cs[f.value]??f.value})`}).join(" and ")} {${b.values.map(f=>{let h=s;f.sel.length>0&&(h=s===":host"?`:host(:${f.sel})`:`${s}:${f.sel}`);const w=r(e,f.values.map(n));return f.sel==="hover"?`@media (hover: hover) {${h}{${w}}}`:`${h}{${w}}`}).join("")}}`;l+=O}return l}const ie=new Map;function a(s){return(e,t)=>{const n=(s==null?void 0:s.property)??String(t),r=s==null?void 0:s.valueTemplate,l=s==null?void 0:s.styleTemplate,b=(s==null?void 0:s.cacheOverrideKey)??"0";y({attribute:s==null?void 0:s.attribute,noAccessor:!0})(e,t),Object.defineProperty(e,t,{get:function(){return this["__"+String(t)]},set:async function(c){if(!c)return;this["__"+String(t)]=c,await this.updateComplete;const m=(s==null?void 0:s.selector)??this.constructor.styleExpressionBaseSelector,O=this.level??"0",f=m+n+c+O+b;if(ie.has(f)){this._dynamicStylesController.inject(`sep_${String(t)}`,ie.get(f));return}const h=zs(Ms(c)),w=Es(m,n,h,r==null?void 0:r.bind(this),l==null?void 0:l.bind(this)),I=v(w);ie.set(f,I),this._dynamicStylesController.inject(`sep_${String(t)}`,I)}})}}function Qe(s,e,t){if(s==="transparent"||s==="currentColor"||s==="inherit")return s;const[n,r]=s.split("/"),l=`var(--gds-sys-color-l${t}-${e}-${n})`;return r?`color-mix(in srgb, ${l} ${parseFloat(r)*100}%, transparent 0%)`:l}function ae(s){return{valueTemplate:function(e){return Qe(e,s,this.level)}}}const F={valueTemplate:s=>`var(--gds-sys-space-${s}, 0)`},x={valueTemplate:s=>`var(--gds-sys-space-${js(s)}, ${s})`},le={valueTemplate:s=>{const t=(s.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${s})`:`calc(var(--gds-sys-space-${s.substring(1)}) * -1)`;return s==="auto"?"auto":t},styleTemplate:(s,e)=>{const t=c=>c==="auto"?"auto":`${c}`,n=t(e[0]),r=e.length>1?t(e[1]):n,l=e.length>2?t(e[2]):n,b=e.length>3?t(e[3]):r;return`${s}: ${n} ${r} ${l} ${b};`}};function js(s){return s.replace(/[^a-zA-Z0-9-]/g,"")}function ze(s){class e extends s{}return o([a(x)],e.prototype,"width",2),o([a(x)],e.prototype,"min-width",2),o([a(x)],e.prototype,"max-width",2),o([a(x)],e.prototype,"inline-size",2),o([a(x)],e.prototype,"min-inline-size",2),o([a(x)],e.prototype,"max-inline-size",2),e}function Ls(s){class e extends s{}return o([a(x)],e.prototype,"height",2),o([a(x)],e.prototype,"min-height",2),o([a(x)],e.prototype,"max-height",2),o([a(x)],e.prototype,"block-size",2),o([a(x)],e.prototype,"min-block-size",2),o([a(x)],e.prototype,"max-block-size",2),e}function Te(s){class e extends s{}return o([a(le)],e.prototype,"margin",2),o([a(le)],e.prototype,"margin-inline",2),o([a(le)],e.prototype,"margin-block",2),e}function Os(s){class e extends s{}return o([a(F)],e.prototype,"padding",2),o([a(F)],e.prototype,"padding-inline",2),o([a(F)],e.prototype,"padding-block",2),e}function Ee(s){class e extends s{}return o([a()],e.prototype,"align-self",2),o([a()],e.prototype,"justify-self",2),o([a()],e.prototype,"place-self",2),o([a()],e.prototype,"grid-column",2),o([a()],e.prototype,"grid-row",2),o([a()],e.prototype,"grid-area",2),o([a()],e.prototype,"flex",2),o([a()],e.prototype,"order",2),e}function As(s){class e extends s{}return o([a()],e.prototype,"position",2),o([a()],e.prototype,"transform",2),o([a()],e.prototype,"inset",2),e}const Ds=q`
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
`;var Vs=Ds;let d=class extends ze(Ls(Te(Os(Ee(As(P)))))){constructor(){super(...arguments),this.level="2"}render(){return oe`<slot></slot>`}};d.styles=[X,Vs];o([a()],d.prototype,"display",2);o([y()],d.prototype,"level",2);o([a(ae("content"))],d.prototype,"color",2);o([a(ae("background"))],d.prototype,"background",2);o([a({styleTemplate:function(s,e){const t=this,[n,r=t["border-style"]||"solid",l=t["border-color"]||"primary"]=e,b=`var(--gds-sys-space-${n})`,c=Qe(l,"border",t.level);return`border: ${b} ${r} ${c};`}})],d.prototype,"border",2);o([a(ae("border"))],d.prototype,"border-color",2);o([a(F)],d.prototype,"border-width",2);o([a()],d.prototype,"border-style",2);o([a(F)],d.prototype,"border-radius",2);o([a({valueTemplate:s=>`var(--gds-sys-shadow-${s})`})],d.prototype,"box-shadow",2);o([a()],d.prototype,"opacity",2);o([a()],d.prototype,"overflow",2);o([a()],d.prototype,"box-sizing",2);o([a()],d.prototype,"z-index",2);o([a({styleTemplate:(s,e)=>{const t=e[0],n=`font-size: var(--gds-sys-text-size-${t});`,r=`line-height: var(--gds-sys-text-line-height-${t});`;return n+r}})],d.prototype,"font-size",2);o([a({valueTemplate:s=>`var(--gds-sys-text-weight-${s})`})],d.prototype,"font-weight",2);o([a()],d.prototype,"text-align",2);o([a()],d.prototype,"text-wrap",2);o([a()],d.prototype,"overflow-wrap",2);o([a()],d.prototype,"white-space",2);o([a({...F,styleTemplate:(s,e)=>{const t=e[0],n=e[1]||t;return`gap: ${t} ${n};`},cacheOverrideKey:"flex"})],d.prototype,"gap",2);o([a()],d.prototype,"align-items",2);o([a()],d.prototype,"align-content",2);o([a()],d.prototype,"justify-content",2);o([a()],d.prototype,"justify-items",2);o([a()],d.prototype,"flex-direction",2);o([a()],d.prototype,"flex-wrap",2);o([a()],d.prototype,"place-items",2);o([a()],d.prototype,"place-content",2);d=o([N("gds-div")],d);const Rs=q`
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
`;var Ps=Rs;class k extends Te(Ee(P)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.box=!1,this.label=""}get svgAttributes(){const e=this.constructor,t={fill:"none",xmlns:"http://www.w3.org/2000/svg",...this.size===void 0&&{width:this.width||e._width,height:this.width||e._height}||{},viewBox:this.box||e._viewBox,part:"icon"};return this.label?{...t,"aria-label":this.label}:{...t,role:"presentation"}}get svgContent(){const e=this.constructor;return this.solid?e._solidSVG:e._regularSVG}applyStroke(e){return this.stroke?e.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):e}generateAttributesString(e){return Object.entries(e).filter(([t,n])=>n!==void 0).map(([t,n])=>`${t}="${n}"`).join(`
      `)}render(){const e=this.svgAttributes;let t=this.svgContent||"";this.stroke&&(t=this.applyStroke(t));const n=`
      <svg ${this.generateAttributesString(e)}>
        ${t}
      </svg>
    `;return me`${fs(n)}`}}k.styles=[X,Ps];o([a({...x,property:"height",selector:"svg"})],k.prototype,"size",2);o([y({type:Number})],k.prototype,"width",2);o([y({type:Number})],k.prototype,"height",2);o([y({type:Boolean})],k.prototype,"solid",2);o([y({type:Number})],k.prototype,"stroke",2);o([y()],k.prototype,"level",2);o([a(ae("content"))],k.prototype,"color",2);o([y({type:String})],k.prototype,"box",2);o([y({type:String})],k.prototype,"label",2);k.define();let j=class extends k{};j._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';j._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>';j._name="chevron-left";j._width=24;j._height=24;j._viewBox="0 0 24 24";j=o([N("gds-icon-chevron-left")],j);let L=class extends k{};L._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';L._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>';L._name="chevron-right";L._width=24;L._height=24;L._viewBox="0 0 24 24";L=o([N("gds-icon-chevron-right")],L);function Ws(){return(s,e,t)=>{const n=s.connectedCallback,r=s.disconnectedCallback;s.connectedCallback=function(){n==null||n.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[e]=new ResizeObserver(()=>{this.__resizeObserver_tids[e]&&clearTimeout(this.__resizeObserver_tids[e]),this.__resizeObserver_tids[e]=setTimeout(()=>{var l;(l=t.value)==null||l.call(this)},20)}),this.__resizeObservers[e].observe(this)},s.disconnectedCallback=function(){r==null||r.call(this),this.__resizeObservers[e].disconnect()}}}const Gs=`@layer base {
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
`;let V=class extends ze(P){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),$e.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return oe`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};V.styles=[...X,v(Gs)];o([y({type:Boolean,reflect:!0})],V.prototype,"selected",2);o([y()],V.prototype,"value",2);o([y({type:Boolean,reflect:!0})],V.prototype,"disabled",2);V=o([N("gds-segment")],V);const Fs=`@layer base {
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
`;var D,ge,es,fe,pe,he,J,Y,ue,ye;const Ns=(s,e)=>{let t;return()=>{clearTimeout(t),t=setTimeout(s,e)}};let _=class extends Ee(ze(Te(P))){constructor(){super(...arguments),g(this,ge),this.size="medium",g(this,D),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,g(this,fe,()=>{const e=this.segments.filter((t,n,r)=>{var l;return((l=r[n+1])==null?void 0:l.isVisible)&&!t.isVisible})[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),g(this,pe,()=>{const e=this.segments.filter((t,n,r)=>{var l;return((l=r[n-1])==null?void 0:l.isVisible)&&!t.isVisible}).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),g(this,he,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),g(this,J,Ns(i(this,he),50)),g(this,Y,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,n=e.offsetLeft;this._elIndicator.style.transform=`translateX(${n}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),g(this,ue,e=>{const t=this.segments.find(n=>n===e.target||n.contains(e.target));t&&(this.segments.forEach(n=>n.selected=!1),t.selected=!0,S(this,D,t.value),i(this,Y).call(this),this.dispatchCustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0}))}),g(this,ye,()=>{i(this,D)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===i(this,D));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return i(this,D)}set value(e){S(this,D,e),i(this,ye).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),$e.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{i(this,J).call(this)})})}render(){return oe`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${i(this,fe)}
        aria-label=${Le("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${i(this,ue)}
          @slotchange=${z(this,ge,es)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${i(this,pe)}
        aria-label=${Le("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{i(this,J).call(this),i(this,Y).call(this)})}};D=new WeakMap;ge=new WeakSet;es=function(){var e,t;const s=(e=this.segments.find(n=>n.selected))==null?void 0:e.value;s&&S(this,D,s),(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=new IntersectionObserver(n=>{n.forEach(r=>{const l=r.target;l._isVisible=r.intersectionRatio>.99,i(this,J).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(n=>{var r;(r=this.intersectionObserver)==null||r.observe(n)})};fe=new WeakMap;pe=new WeakMap;he=new WeakMap;J=new WeakMap;Y=new WeakMap;ue=new WeakMap;ye=new WeakMap;_.styles=[X,v(Fs)];o([y({reflect:!0})],_.prototype,"size",2);o([y()],_.prototype,"value",1);o([ve("slot")],_.prototype,"_elSlot",2);o([ve("#indicator")],_.prototype,"_elIndicator",2);o([ve("#track")],_.prototype,"_elTrack",2);o([xe()],_.prototype,"_showPrevButton",2);o([xe()],_.prototype,"_showNextButton",2);o([Ws(),Me("value")],_.prototype,"_recalculateMinWidth",1);_=o([N("gds-segmented-control",{dependsOn:[V,j,L]}),bs()],_);let R=class extends P{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2016"}connectedCallback(){super.connectedCallback(),$e.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",v(`:host {${de}}`))}render(){return oe`<slot></slot>`}_onColorSchemeChange(){this.colorScheme==="dark"?this._dynamicStylesController.inject("color-scheme",v(`:host { ${de}}`)):this._dynamicStylesController.inject("color-scheme",v(`:host { ${qe}}`)),this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}_onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}};R.styles=[X,q`
      :host {
        display: contents;
      }
    `];o([y({reflect:!0,attribute:"color-scheme"})],R.prototype,"colorScheme",2);o([y({reflect:!0,attribute:"design-version"})],R.prototype,"designVersion",2);o([Me("colorScheme")],R.prototype,"_onColorSchemeChange",1);o([Me("designVersion")],R.prototype,"_onDesignVersionChange",1);R=o([N("gds-theme")],R);const Is=s=>{d.define();const e=re("gds-div"),t={...s,class:s.className};return U.createElement(e,t)},Bs=s=>{_.define();const e=re("gds-segmented-control"),t={...s,class:s.className};return U.createElement(e,t)},Js=s=>{R.define();const e=re("gds-theme"),t={...s,class:s.className};return U.createElement(e,t)},Re=s=>{V.define();const e=re("gds-segment"),t={...s,class:s.className};return U.createElement(e,t)};function qs(s){const e=Ge.modules.find(t=>t.declarations.find(n=>n.tagName===s));return e.exports.map(t=>({name:t.declaration.name,path:e.path.replace(/src\//,"@sebgroup/green-core/")}))}const Us=s=>{const{of:e}=s,[t,n]=U.useState("web"),r=os(e||"meta"),l=qs(r.preparedMeta.component),b=Object.keys({...r.preparedMeta.subcomponents});return M.createElement(Js,{designVersion:"2023"},M.createElement(Is,{margin:"0 0 2xl 0"},M.createElement("h2",null,"Import"),M.createElement(Bs,{"max-width":"500px",value:t,onChange:c=>n(c.target.value)},M.createElement(Re,{value:"web"},"Web component (Angular and others)"),M.createElement(Re,{value:"react"},"React JSX")),l.filter(c=>c.name!=="*").map(c=>M.createElement("div",{key:c.name},t==="web"?M.createElement(je,{language:"javascript",dark:!0,code:`import { ${c.name} } from '@sebgroup/green-core/pure'
${c.name}.define()

// or, from direct path:
import { ${c.name} } from '${c.path}'
${c.name}.define()`}):M.createElement(je,{language:"javascript",dark:!0,code:`// Use as JSX element(s) in React
import { ${c.name}${b.length>0?b.map(m=>`, ${m}`):""} } from '@sebgroup/green-core/react'`})))))};function Pe(s){const e={blockquote:"blockquote",em:"em",h2:"h2",p:"p",strong:"strong",...Fe(),...s.components};return p.jsxs(p.Fragment,{children:[p.jsx(rs,{isTemplate:!0}),`
`,p.jsx(as,{}),`
`,p.jsx(is,{}),`
`,p.jsx(ls,{}),`
`,p.jsx(Us,{}),`
`,p.jsx(e.h2,{id:"public-api",children:"Public API"}),`
`,p.jsx(e.p,{children:"This table lists all public attributes, properties, methods, events and slots of the component."}),`
`,p.jsxs(e.blockquote,{children:[`
`,p.jsx(e.p,{children:p.jsxs(e.em,{children:[p.jsx(e.strong,{children:"Note:"})," JS properties and DOM attributes have different naming conventions in Green Core (camelCase vs snake-case), so some of them will show up under both sections, even though they refer to the same underlying property."]})}),`
`]}),`
`,p.jsx(ds,{}),`
`,p.jsx(e.h2,{id:"additional-examples-and-customization-options",children:"Additional examples and customization options"}),`
`,p.jsx(cs,{})]})}function Xs(s={}){const{wrapper:e}={...Fe(),...s.components};return e?p.jsx(e,{...s,children:p.jsx(Pe,{...s})}):Pe(s)}const Hs="en",Zs=["da","de","fi","fr","it","nl","no","sv"],Ks={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Åbn kalender-popup",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Man",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Annuller",s307db9af9905317d:"Formularfejloversigt",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brødkrummer",s407a88a592a0987c:"August",s46d6587089bd0356:"Næste måned",s49730f3d5751a433:"Indlæser...",s5052d10b539eabf0:"Marts",s58bfb494feb8eb02:u`${0} valgt`,s5d929ff1619ac0c9:"Søg",s5e8250fb85d64c23:"Luk",s5febcd9b311c16fe:"Rul til højre",s62931b2a50168976:"Forrige måned",s63d040e37887f17e:"I dag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Ti",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"Åbn kontekstmenu",s83c436ed1bc16dfb:"Vis flere oplysninger",s8ade4e9d5e804d6a:"Første tilgængelige dato",s9836b719fa8ef857:"Lør",s987ac119fac8d621:"Søn",s9af3c72c33088826:u`Der er ${0} fejl, der skal rettes, før du kan fortsætte:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Måned",sb4f1dffbb6be6302:"Ryd",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filtrer tilgængelige muligheder",sdc42f1da42d6411a:"Ryd inputfelt",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sidste tilgængelige dato",sf295af199c723ec8:"Fre"},Ys=Object.freeze(Object.defineProperty({__proto__:null,templates:Ks},Symbol.toStringTag,{value:"Module"})),Qs={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Kalender-Modal öffnen",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Mo",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Abbrechen",s307db9af9905317d:"Formularfehlerübersicht",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brotkrümelnavigation",s407a88a592a0987c:"August",s46d6587089bd0356:"Nächster Monat",s49730f3d5751a433:"Laden...",s5052d10b539eabf0:"März",s58bfb494feb8eb02:u`${0} ausgewählt`,s5d929ff1619ac0c9:"Suche",s5e8250fb85d64c23:"Schließen",s5febcd9b311c16fe:"Nach rechts scrollen",s62931b2a50168976:"Vorheriger Monat",s63d040e37887f17e:"Heute",s6cfed919e21ac6ac:"Do",s6d24cd19e23b8185:"Di",s74aa0319e62b2eb7:"Mi",s7793b811d20184fe:"Dezember",s7fd3469f78111589:"Kontextmenü öffnen",s83c436ed1bc16dfb:"Weitere Informationen anzeigen",s8ade4e9d5e804d6a:"Erstes verfügbares Datum",s9836b719fa8ef857:"Sa",s987ac119fac8d621:"So",s9af3c72c33088826:u`Es gibt ${0} Fehler zu beheben, bevor du fortfahren kannst:`,sa6f2645578b2d2bc:"Jahr",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Monat",sb4f1dffbb6be6302:"Löschen",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Verfügbare Optionen filtern",sdc42f1da42d6411a:"Feld löschen",se0955919920ee87d:"Tag",se4129fd6b9d7b4c2:"Letztes verfügbares Datum",sf295af199c723ec8:"Fr"},et=Object.freeze(Object.defineProperty({__proto__:null,templates:Qs},Symbol.toStringTag,{value:"Module"})),st={s15a16ae9f99f19bf:"Heinä",s15a852e9f9a50fa5:"Kesä",s17e3edbe032f79ec:"Avaa kalenteri-modal",s1a2dda8f763a68bd:"Tammikuu",s1e118319b5202c41:"Ma",s1e187019b5262aa6:"Touko",s281846ef0421c71f:"Marraskuu",s2ceb11be2290bb1b:"Peruuta",s307db9af9905317d:"Lomakkeen virheiden yhteenveto",s39938ecdae568740:"Syys",s3b8a6245b12fa2ad:"Murupolku",s407a88a592a0987c:"Elokuu",s46d6587089bd0356:"Seuraava kuukausi",s49730f3d5751a433:"Ladataan...",s5052d10b539eabf0:"Maalis",s58bfb494feb8eb02:u`${0} valittua`,s5d929ff1619ac0c9:"Hae",s5e8250fb85d64c23:"Sulje",s5febcd9b311c16fe:"Vieritä oikealle",s62931b2a50168976:"Edellinen kuukausi",s63d040e37887f17e:"Tänään",s6cfed919e21ac6ac:"To",s6d24cd19e23b8185:"Ti",s74aa0319e62b2eb7:"Ke",s7793b811d20184fe:"Joulukuu",s7fd3469f78111589:"Avaa pikavalikko",s83c436ed1bc16dfb:"Näytä lisää tietoja",s8ade4e9d5e804d6a:"Ensimmäinen saatavilla oleva päivämäärä",s9836b719fa8ef857:"La",s987ac119fac8d621:"Su",s9af3c72c33088826:u`On ${0} virhettä, jotka täytyy korjata ennen kuin voit jatkaa:`,sa6f2645578b2d2bc:"Vuosi",sa7cd5c2ff6d266e7:"Lokakuu",sb47daaf9e1c4a905:"Kuukausi",sb4f1dffbb6be6302:"Tyhjennä",sbc083a1dbee9af73:"Helmikuu",scb6b9cb49cf93277:"Huhti",sd898d99fd9c13de6:"Suodata saatavilla olevia vaihtoehtoja",sdc42f1da42d6411a:"Tyhjennä syöte",se0955919920ee87d:"Päivä",se4129fd6b9d7b4c2:"Viimeinen saatavilla oleva päivämäärä",sf295af199c723ec8:"Pe"},tt=Object.freeze(Object.defineProperty({__proto__:null,templates:st},Symbol.toStringTag,{value:"Module"})),nt={s15a16ae9f99f19bf:"Juillet",s15a852e9f9a50fa5:"Juin",s17e3edbe032f79ec:"Ouvrir le calendrier modal",s1a2dda8f763a68bd:"Janvier",s1e118319b5202c41:"Lun",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"Novembre",s2ceb11be2290bb1b:"Annuler",s307db9af9905317d:"Résumé des erreurs du formulaire",s39938ecdae568740:"Septembre",s3b8a6245b12fa2ad:"Fil d'Ariane",s407a88a592a0987c:"Août",s46d6587089bd0356:"Mois suivant",s49730f3d5751a433:"Chargement...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:u`${0} sélectionné(s)`,s5d929ff1619ac0c9:"Rechercher",s5e8250fb85d64c23:"Fermer",s5febcd9b311c16fe:"Faire défiler à droite",s62931b2a50168976:"Mois précédent",s63d040e37887f17e:"Aujourd'hui",s6cfed919e21ac6ac:"Jeu",s6d24cd19e23b8185:"Mar",s74aa0319e62b2eb7:"Mer",s7793b811d20184fe:"Décembre",s7fd3469f78111589:"Ouvrir le menu contextuel",s83c436ed1bc16dfb:"Afficher plus d'informations",s8ade4e9d5e804d6a:"Première date disponible",s9836b719fa8ef857:"Sam",s987ac119fac8d621:"Dim",s9af3c72c33088826:u`Il y a ${0} erreur(s) à corriger avant de pouvoir continuer :`,sa6f2645578b2d2bc:"Année",sa7cd5c2ff6d266e7:"Octobre",sb47daaf9e1c4a905:"Mois",sb4f1dffbb6be6302:"Effacer",sbc083a1dbee9af73:"Février",scb6b9cb49cf93277:"Avril",sd898d99fd9c13de6:"Filtrer les options disponibles",sdc42f1da42d6411a:"Effacer la saisie",se0955919920ee87d:"Jour",se4129fd6b9d7b4c2:"Dernière date disponible",sf295af199c723ec8:"Ven"},ot=Object.freeze(Object.defineProperty({__proto__:null,templates:nt},Symbol.toStringTag,{value:"Module"})),rt={s15a16ae9f99f19bf:"Luglio",s15a852e9f9a50fa5:"Giugno",s17e3edbe032f79ec:"Apri la finestra del calendario",s1a2dda8f763a68bd:"Gennaio",s1e118319b5202c41:"Lun",s1e187019b5262aa6:"Maggio",s281846ef0421c71f:"Novembre",s2ceb11be2290bb1b:"Annulla",s307db9af9905317d:"Riepilogo degli errori del modulo",s39938ecdae568740:"Settembre",s3b8a6245b12fa2ad:"Percorso di navigazione",s407a88a592a0987c:"Agosto",s46d6587089bd0356:"Mese successivo",s49730f3d5751a433:"Caricamento...",s5052d10b539eabf0:"Marzo",s58bfb494feb8eb02:u`${0} selezionato`,s5d929ff1619ac0c9:"Cerca",s5e8250fb85d64c23:"Chiudi",s5febcd9b311c16fe:"Scorri a destra",s62931b2a50168976:"Mese precedente",s63d040e37887f17e:"Oggi",s6cfed919e21ac6ac:"Gio",s6d24cd19e23b8185:"Mar",s74aa0319e62b2eb7:"Mer",s7793b811d20184fe:"Dicembre",s7fd3469f78111589:"Apri il menu contestuale",s83c436ed1bc16dfb:"Mostra più informazioni",s8ade4e9d5e804d6a:"Prima data disponibile",s9836b719fa8ef857:"Sab",s987ac119fac8d621:"Dom",s9af3c72c33088826:u`Ci sono ${0} errori da correggere prima di poter continuare:`,sa6f2645578b2d2bc:"Anno",sa7cd5c2ff6d266e7:"Ottobre",sb47daaf9e1c4a905:"Mese",sb4f1dffbb6be6302:"Pulisci",sbc083a1dbee9af73:"Febbraio",scb6b9cb49cf93277:"Aprile",sd898d99fd9c13de6:"Filtra le opzioni disponibili",sdc42f1da42d6411a:"Pulisci il campo di input",se0955919920ee87d:"Giorno",se4129fd6b9d7b4c2:"Ultima data disponibile",sf295af199c723ec8:"Ven"},at=Object.freeze(Object.defineProperty({__proto__:null,templates:rt},Symbol.toStringTag,{value:"Module"})),it={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Open kalenderpop-up",s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"Ma",s1e187019b5262aa6:"Mei",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Annuleren",s307db9af9905317d:"Formulierfoutoverzicht",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Kruimelpad",s407a88a592a0987c:"Augustus",s46d6587089bd0356:"Volgende maand",s49730f3d5751a433:"Laden...",s5052d10b539eabf0:"Maart",s58bfb494feb8eb02:u`${0} geselecteerd`,s5d929ff1619ac0c9:"Zoeken",s5e8250fb85d64c23:"Sluiten",s5febcd9b311c16fe:"Scroll rechts",s62931b2a50168976:"Vorige maand",s63d040e37887f17e:"Vandaag",s6cfed919e21ac6ac:"Do",s6d24cd19e23b8185:"Di",s74aa0319e62b2eb7:"Wo",s7793b811d20184fe:"December",s7fd3469f78111589:"Open contextmenu",s83c436ed1bc16dfb:"Toon meer informatie",s8ade4e9d5e804d6a:"Eerste beschikbare datum",s9836b719fa8ef857:"Za",s987ac119fac8d621:"Zo",s9af3c72c33088826:u`Er zijn ${0} fouten die gecorrigeerd moeten worden voordat je verder kunt gaan:`,sa6f2645578b2d2bc:"Jaar",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Maand",sb4f1dffbb6be6302:"Wis",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filter beschikbare opties",sdc42f1da42d6411a:"Wis invoer",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Laatste beschikbare datum",sf295af199c723ec8:"Vr"},lt=Object.freeze(Object.defineProperty({__proto__:null,templates:it},Symbol.toStringTag,{value:"Module"})),dt={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Åpne kalendermodal",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Man",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s307db9af9905317d:"Skjema feil oppsummering",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brødsmuler",s407a88a592a0987c:"August",s46d6587089bd0356:"Neste måned",s49730f3d5751a433:"Laster...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:u`${0} valgt`,s5d929ff1619ac0c9:"Søk",s5e8250fb85d64c23:"Lukk",s5febcd9b311c16fe:"Rull til høyre",s62931b2a50168976:"Forrige måned",s63d040e37887f17e:"I dag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tir",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"Desember",s7fd3469f78111589:"Åpne kontekstmeny",s83c436ed1bc16dfb:"Vis mer informasjon",s8ade4e9d5e804d6a:"Første tilgjengelige dato",s9836b719fa8ef857:"Lør",s987ac119fac8d621:"Søn",s9af3c72c33088826:u`Det er ${0} feil som må rettes før du kan fortsette:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Måned",sb4f1dffbb6be6302:"Rens",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filtrer tilgjengelige alternativer",sdc42f1da42d6411a:"Rens inputfelt",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Siste tilgjengelige dato",sf295af199c723ec8:"Fre"},ct=Object.freeze(Object.defineProperty({__proto__:null,templates:dt},Symbol.toStringTag,{value:"Module"})),bt={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Öppna kalender",s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"Mån",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s307db9af9905317d:"Sammanfattning av formulärfel",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brödsmulor",s407a88a592a0987c:"Augusti",s46d6587089bd0356:"Nästa månad",s49730f3d5751a433:"Laddar...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:u`${0} valda`,s5d929ff1619ac0c9:"Sök",s5e8250fb85d64c23:"Stäng",s5febcd9b311c16fe:"Scrolla höger",s62931b2a50168976:"Föregående månad",s63d040e37887f17e:"Idag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tis",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"Öppna meny",s83c436ed1bc16dfb:"Visa mer information",s8ade4e9d5e804d6a:"Första tillgängliga datum",s9836b719fa8ef857:"Lör",s987ac119fac8d621:"Sön",s9af3c72c33088826:u`Det finns ${0} fel att åtgärda innan du kan fortsätta:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Månad",sb4f1dffbb6be6302:"Rensa",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Sök i listan av val",sdc42f1da42d6411a:"Rensa text",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sista tillgängliga datum",sf295af199c723ec8:"Fre"},gt=Object.freeze(Object.defineProperty({__proto__:null,templates:bt},Symbol.toStringTag,{value:"Module"})),We=new Map([["sv",gt],["no",ct],["nl",lt],["it",at],["fr",ot],["fi",tt],["de",et],["da",Ys]]),ft=({extraLocales:s,extraTemplates:e}={extraLocales:[],extraTemplates:new Map})=>{const t=[...Zs];for(const[n,r]of e)We.set(n,r);for(const n of s)t.push(n);return gs({sourceLocale:Hs,targetLocales:t,loadLocale:async n=>{const r=We.get(n);return r||Promise.reject(new Error(`Locale ${n} not found`))}})};ts(Ge);ns();const Yt={style:{name:"Change design version",defaultValue:"2023",toolbar:{icon:"lightning",items:["2016","2023"],showName:!0,dynamicTitle:!0}},language:{name:"Language",defaultValue:"en",toolbar:{icon:"globe",items:["en","sv","da","de","fi","fr","it","nl","no"],showName:!0,dynamicTitle:!0}}},{setLocale:pt}=ft(),Qt={parameters:{docs:{page:Xs,transformSource:s=>{const e=s.match(/<gds-theme>([\s\S]*?)<\/gds-theme>/);return e?e[1]:s}},options:{storySort:{order:["Green Design System","Get started","What's what?","Docs","Components","Style",["Components","Layout","Media","Content","Style"],"Concepts",["Architecture"],"Contributing",["Introduction"]]}}},decorators:[(s,e)=>(pt(e.globals.language),setTimeout(()=>{const t=Array.from(document.querySelectorAll("tr")).find(r=>{var l;return(l=r.getAttribute("title"))==null?void 0:l.startsWith("Hide Declarative layout")}),n=t==null?void 0:t.querySelector('button[tabindex="0"]');n&&n.click()},10),me`<gds-theme .designVersion=${e.globals.style}
        >${s()}</gds-theme
      >`)]};export{Qt as default,Yt as globalTypes};
