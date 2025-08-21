import{x as Se,a as ws,i as w,r as E,E as ns}from"./lit-element-Bx14lxc-.js";import{s as Cs}from"./chunk-GKNNPQCW-BkHQSocK.js";import{c as as}from"./custom-elements-CJR2g0pk.js";import{r as Es}from"./transitional-styles-Be9e-Il_.js";import{j as u}from"./jsx-runtime-BjG_zV1W.js";import{u as is}from"./index-D3sdS70Y.js";import{ag as T,as as ls,ae as v,at as Ue,af as $s,au as Ms,av as Ts,aw as Ds,ax as Vs,ay as zs}from"./index-CylcH3QS.js";import{r as Ie,n as g}from"./gds-element-DKcDvDP5.js";import{m as Xe,l as Gs,s as x,c as Ls}from"./runtime-CNluP0A8.js";import{a as te}from"./query-p8xgzTDt.js";import{o as js}from"./unsafe-html-CYO4avEf.js";import{i as Ze,u as cs,s as Os}from"./static-B8S6DEnV.js";import{e as As}from"./class-map-CXsQwv0r.js";import{o as re}from"./if-defined-CVqwUuaf.js";import{n as Bs}from"./when-BR7zwNJC.js";import{e as Rs,i as Ws,t as Fs}from"./directive-CF8sV3Lr.js";import"./theme-CodKwOZ2.js";import"./button-CnbKiGGd.js";import"./grid-BH6AJiuL.js";import"./tokens.style-Bfj-148u.js";import"./iframe-CJIvC_aa.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./theme.component-swgb7Mz-.js";import"./watch-tFciLXSI.js";import"./button.component-B89ZvrSV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-DHam8wVT.js";import"./grid.component-BgrMa2WA.js";import"./div.component-BeQ16hT1.js";var Ps=Object.defineProperty,Is=Object.getOwnPropertyDescriptor,ds=s=>{throw TypeError(s)},r=(s,e,t,o)=>{for(var n=o>1?void 0:o?Is(e,t):e,l=s.length-1,d;l>=0;l--)(d=s[l])&&(n=(o?d(e,t,n):d(n))||n);return o&&n&&Ps(e,t,n),n},Ne=(s,e,t)=>e.has(s)||ds("Cannot "+t),a=(s,e,t)=>(Ne(s,e,"read from private field"),t?t.call(s):e.get(s)),p=(s,e,t)=>e.has(s)?ds("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),k=(s,e,t,o)=>(Ne(s,e,"write to private field"),e.set(s,t),t),F=(s,e,t)=>(Ne(s,e,"access private method"),t);const j="-e920cd";class Je{static get instance(){var e;return(e=globalThis.__gdsElementLookupTable)!=null&&e[j]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[j]:new Map}),globalThis.__gdsElementLookupTable[j]}}const C=(s,e)=>function(t){var o;return o=class extends t{constructor(){super(...arguments),this.gdsElementName=s}static define(){if(o.isDefined)return;const l=globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?s:s+j;customElements.get(l)||(o.isDefined=!0,Je.instance.set(s,l),customElements.define(l,o),e!=null&&e.dependsOn&&e.dependsOn.forEach(d=>d.define()))}},o.isDefined=!1,o},Ke=new WeakMap;function Ns(s,...e){let t=Ke.get(s);return t||(t=Ye(s),t.raw=Ye(s.raw),Ke.set(s,t)),[t,...e]}const Ye=s=>s.map(e=>{for(const[t,o]of Je.instance.entries())e=e.replace(new RegExp(`${t}(?![-a-z])`,"mg"),o);return e});function Js(s){return(e,...t)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return s(e,...t);const[o,...n]=Ns(e,...t);return s(o,...n)}}const ee=Js(Se);function qs(s){return Je.instance.get(s)??s}function A(s){return qs(s)}var G,ue,I,he,Q,L,P,ye,U,gs,ne,fs;class Hs{constructor(e){p(this,U),p(this,G,!qe()),p(this,ue,!1),p(this,I,[]),p(this,he,[]),p(this,Q,new Map),p(this,L,new Map),p(this,P,[]),p(this,ye,[]),this.host=e,this.host.addController(this)}hostConnected(){F(this,U,fs).call(this)}has(e){return a(this,G)?a(this,L).has(e):a(this,Q).has(e)}inject(e,t){F(this,U,gs).call(this,e,t),F(this,U,ne).call(this)}clear(e){a(this,G)?this.host.updateComplete.then(()=>{const t=a(this,L).get(e);t==null||t.remove(),a(this,L).delete(e)}):a(this,Q).delete(e),F(this,U,ne).call(this)}clearAll(){a(this,G)?this.host.updateComplete.then(()=>{a(this,L).forEach(e=>e.remove()),a(this,P).forEach(e=>e.remove()),a(this,L).clear(),k(this,P,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],a(this,Q).clear(),k(this,I,[]))}clearInitial(){a(this,G)?this.host.updateComplete.then(()=>{a(this,P).forEach(e=>e.remove()),k(this,P,[])}):k(this,I,[]),F(this,U,ne).call(this)}restoreInitial(){a(this,G)?a(this,ye).forEach(e=>{a(this,P).push(e.cloneNode(!0))}):k(this,I,[...a(this,he)]),F(this,U,ne).call(this)}}G=new WeakMap;ue=new WeakMap;I=new WeakMap;he=new WeakMap;Q=new WeakMap;L=new WeakMap;P=new WeakMap;ye=new WeakMap;U=new WeakSet;gs=function(s,e){if(a(this,G)){let t=a(this,L).get(s);t||(t=document.createElement("style"),a(this,L).set(s,t)),t.textContent=e.cssText}else{if(!this.host.shadowRoot||!e.styleSheet)return;a(this,Q).set(s,e.styleSheet)}};ne=function(){if(a(this,G))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(s=>{s.remove()}),a(this,P).forEach(s=>{var e;(e=this.host.shadowRoot)==null||e.appendChild(s)}),a(this,L).forEach(s=>{var e;(e=this.host.shadowRoot)==null||e.appendChild(s)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...a(this,I),...Array.from(a(this,Q).values())]}};fs=function(){a(this,ue)||(a(this,G)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(s=>{a(this,P).push(s),a(this,ye).push(s.cloneNode(!0))})}):this.host.shadowRoot&&a(this,I).length===0&&(k(this,I,[...this.host.shadowRoot.adoptedStyleSheets||[]]),k(this,he,[...a(this,I)])),k(this,ue,!0))};function qe(){try{return new CSSStyleSheet,!0}catch{return!1}}function Qe(s){return s.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join("")}class B extends ws{constructor(){super(),this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new Hs(this)}static define(){}connectedCallback(){var e;super.connectedCallback(),this.setAttribute("gds-element",((e=this.gdsElementName)==null?void 0:e.toString())||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(e,t){const o={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new Event(e,o)),this.dispatchEvent(new Event(Qe(e),o))].every(n=>n!==!1)}dispatchCustomEvent(e,t={}){const o={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new CustomEvent(e,o)),this.dispatchEvent(new CustomEvent(Qe(e),o))].every(n=>n!==!1)}}B.isDefined=!1;B.styleExpressionBaseSelector=":host";r([Ie()],B.prototype,"_isUsingTransitionalStyles",2);const ps=`/**
 * Do not edit directly, this file was auto-generated.
 */

  --gds-sys-state-hover-state-layer-opacity: 0.1;
  --gds-sys-motion-easing-ease-in: 0.64, 0, 0.78, 0;
  --gds-sys-motion-easing-ease-in-out: 0.83, 0, 0.17, 1;
  --gds-sys-motion-easing-ease-out: 0.22, 1, 0.36, 1;
  --gds-sys-motion-easing-linear: 0, 0, 1, 1;
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
  --gds-sys-viewport-2xl: 2560;
  --gds-sys-viewport-3xl: 3840;
  --gds-sys-text-family: SEB SansSerif GDS;
  --gds-sys-text-weight-light: 300;
  --gds-sys-text-weight-regular: 400;
  --gds-sys-text-weight-book: 450;
  --gds-sys-text-weight-medium: 500;
  --gds-sys-text-weight-bold: 700;
  --gds-sys-text-heading-xl: 450 32px/44px SEB SansSerif GDS;
  --gds-sys-text-heading-l: 450 28px/40px SEB SansSerif GDS;
  --gds-sys-text-heading-m: 450 24px/32px SEB SansSerif GDS;
  --gds-sys-text-heading-s: 450 20px/28px SEB SansSerif GDS;
  --gds-sys-text-heading-xs: 450 16px/24px SEB SansSerif GDS;
  --gds-sys-text-heading-2xs: 450 14px/20px SEB SansSerif GDS;
  --gds-sys-text-detail-book-m: 450 16px/20px SEB SansSerif GDS;
  --gds-sys-text-detail-book-s: 450 14px/18px SEB SansSerif GDS;
  --gds-sys-text-detail-book-xs: 450 12px/16px SEB SansSerif GDS;
  --gds-sys-text-detail-regular-m: 400 16px/20px SEB SansSerif GDS;
  --gds-sys-text-detail-regular-s: 400 14px/18px SEB SansSerif GDS;
  --gds-sys-text-detail-regular-xs: 400 12px/16px SEB SansSerif GDS;
  --gds-sys-text-body-book-l: 450 20px/26px SEB SansSerif GDS;
  --gds-sys-text-body-book-m: 450 16px/24px SEB SansSerif GDS;
  --gds-sys-text-body-book-s: 450 14px/20px SEB SansSerif GDS;
  --gds-sys-text-body-regular-l: 400 20px/26px SEB SansSerif GDS;
  --gds-sys-text-body-regular-m: 400 16px/24px SEB SansSerif GDS;
  --gds-sys-text-body-regular-s: 400 14px/20px SEB SansSerif GDS;
  --gds-sys-text-body-italic-l: italic 400 20px/26px SEB SansSerif GDS;
  --gds-sys-text-body-italic-m: italic 400 16px/24px SEB SansSerif GDS;
  --gds-sys-text-body-italic-s: italic 400 14px/20px SEB SansSerif GDS;
  --gds-sys-text-display-2xl: 450 82px/90px SEB SansSerif GDS;
  --gds-sys-text-display-xl: 450 64px/72px SEB SansSerif GDS;
  --gds-sys-text-display-l: 450 48px/56px SEB SansSerif GDS;
  --gds-sys-text-display-m: 450 36px/44px SEB SansSerif GDS;
  --gds-sys-text-display-s: 450 32px/40px SEB SansSerif GDS;
  --gds-sys-text-preamble-2xl: 450 32px/40px SEB SansSerif GDS;
  --gds-sys-text-preamble-xl: 450 28px/36px SEB SansSerif GDS;
  --gds-sys-text-preamble-l: 450 24px/32px SEB SansSerif GDS;
  --gds-sys-text-preamble-m: 450 20px/28px SEB SansSerif GDS;
  --gds-sys-text-preamble-s: 450 18px/26px SEB SansSerif GDS;
  --gds-sys-text-preamble-xs: 450 16px/24px SEB SansSerif GDS;
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
  --gds-sys-space-max: 999px;
  --gds-sys-radius-none: 0px;
  --gds-sys-radius-2xs: 2px;
  --gds-sys-radius-xs: 4px;
  --gds-sys-radius-s: 8px;
  --gds-sys-radius-m: 16px;
  --gds-sys-radius-l: 24px;
  --gds-sys-radius-xl: 32px;
  --gds-sys-radius-2xl: 40px;
  --gds-sys-radius-max: 999px;`,de=`/**
 * Do not edit directly, this file was auto-generated.
 */


  color-scheme: dark;
  --gds-sys-color-l1-01: #0a0b0b;
  --gds-sys-color-l1-02: #282a29;
  --gds-sys-color-l1-brand-01: #003824;
  --gds-sys-color-l1-inversed: #ffffff;
  --gds-sys-color-l2-01: #191a1a;
  --gds-sys-color-l2-02: #191a1a;
  --gds-sys-color-l2-03: #3b3f3e;
  --gds-sys-color-l2-brand-01: #003824;
  --gds-sys-color-l2-brand-02: #231d10;
  --gds-sys-color-l2-positive-01: #003d26;
  --gds-sys-color-l2-negative-01: #451207;
  --gds-sys-color-l2-warning-01: #482a05;
  --gds-sys-color-l2-information-01: #1e201f;
  --gds-sys-color-l2-notice-01: #00294d;
  --gds-sys-color-l3-brand-01: #d5d7d7;
  --gds-sys-color-l3-brand-02: #efe9dc;
  --gds-sys-color-l3-brand-03: #e7ddcb;
  --gds-sys-color-l3-01: #d5d7d7;
  --gds-sys-color-l3-02: #282a29;
  --gds-sys-color-l3-03: #3b3f3e;
  --gds-sys-color-l3-04: #3b3f3e;
  --gds-sys-color-l3-positive-01: #026436;
  --gds-sys-color-l3-positive-02: #015130;
  --gds-sys-color-l3-positive-03: #003d26;
  --gds-sys-color-l3-negative-01: #a22911;
  --gds-sys-color-l3-negative-02: #731d0c;
  --gds-sys-color-l3-negative-03: #5c170a;
  --gds-sys-color-l3-notice-01: #005fb3;
  --gds-sys-color-l3-notice-02: #004480;
  --gds-sys-color-l3-notice-03: #003666;
  --gds-sys-color-l3-warning-01: #f19e38;
  --gds-sys-color-l3-warning-02: #774508;
  --gds-sys-color-l3-warning-03: #5f3707;
  --gds-sys-color-l3-information-01: #d5d7d7;
  --gds-sys-color-l3-information-02: #313533;
  --gds-sys-color-l3-information-03: #595f5d;
  --gds-sys-color-l3-disabled-01: #595f5d;
  --gds-sys-color-l3-disabled-02: #595f5d;
  --gds-sys-color-l3-disabled-03: #818886;
  --gds-sys-color-border-interactive: #a0a6a4;
  --gds-sys-color-border-subtle-01: #595f5d;
  --gds-sys-color-border-subtle-02: #777e7c;
  --gds-sys-color-border-strong: #f7f8f7;
  --gds-sys-color-border-inverse: #ffffff;
  --gds-sys-color-border-information-01: #636967;
  --gds-sys-color-border-positive-01: #8ae58d;
  --gds-sys-color-border-negative-01: #f08975;
  --gds-sys-color-border-warning-01: #f5b970;
  --gds-sys-color-border-notice-01: #66b8ff;
  --gds-sys-color-border-information-02: rgba(99, 105, 103, 0.4);
  --gds-sys-color-border-positive-02: rgba(138, 229, 141, 0.4);
  --gds-sys-color-border-negative-02: rgba(240, 137, 117, 0.4);
  --gds-sys-color-border-warning-02: rgba(245, 185, 112, 0.4);
  --gds-sys-color-border-notice-02: rgba(102, 184, 255, 0.4);
  --gds-sys-color-content-01: #f7f8f7;
  --gds-sys-color-content-02: #abb0ae;
  --gds-sys-color-content-03: #0a0b0b;
  --gds-sys-color-content-04: #595f5d;
  --gds-sys-color-content-inversed: #f7f8f7;
  --gds-sys-color-content-brand-01: #003824;
  --gds-sys-color-content-brand-02: #d6c7a8;
  --gds-sys-color-content-positive-01: #8ae58d;
  --gds-sys-color-content-positive-02: #027839;
  --gds-sys-color-content-positive-03: #8ae58d;
  --gds-sys-color-content-negative-01: #f08975;
  --gds-sys-color-content-negative-02: #f5b0a3;
  --gds-sys-color-content-warning-01: #f5b970;
  --gds-sys-color-content-warning-02: #fce8cf;
  --gds-sys-color-content-notice-01: #66b8ff;
  --gds-sys-color-content-notice-02: #99cfff;
  --gds-sys-color-content-disabled-01: #cacecc;
  --gds-sys-color-content-disabled-02: #cacecc;
  --gds-sys-color-state-brand-01: #000000 20%;
  --gds-sys-color-state-brand-02: #000000 30%;
  --gds-sys-color-state-brand-03: #003824 30%;
  --gds-sys-color-state-brand-04: #003824 70%;
  --gds-sys-color-state-brand-05: #003824 50%;
  --gds-sys-color-state-brand-06: #003824 90%;
  --gds-sys-color-state-neutral-01: #000000 20%;
  --gds-sys-color-state-neutral-02: #000000 35%;
  --gds-sys-color-state-neutral-03: #ffffff 20%;
  --gds-sys-color-state-neutral-04: #ffffff 30%;
  --gds-sys-color-state-neutral-05: #ffffff 12%;
  --gds-sys-color-state-neutral-06: #ffffff 25%;
  --gds-sys-color-state-positive-01: #000000 12%;
  --gds-sys-color-state-positive-02: #000000 23%;
  --gds-sys-color-state-positive-03: #ffffff 8%;
  --gds-sys-color-state-positive-04: #ffffff 14%;
  --gds-sys-color-state-positive-05: #027839 30%;
  --gds-sys-color-state-positive-06: #027839 50%;
  --gds-sys-color-state-negative-01: #000000 15%;
  --gds-sys-color-state-negative-02: #000000 30%;
  --gds-sys-color-state-negative-03: #ffffff 8%;
  --gds-sys-color-state-negative-04: #ffffff 14%;
  --gds-sys-color-state-negative-05: #b92f13 30%;
  --gds-sys-color-state-negative-06: #b92f13 45%;
  --gds-sys-color-state-notice-01: #000000 12%;
  --gds-sys-color-state-notice-02: #000000 20%;
  --gds-sys-color-state-notice-03: #ffffff 6%;
  --gds-sys-color-state-notice-04: #ffffff 10%;
  --gds-sys-color-state-notice-05: #005fb3 40%;
  --gds-sys-color-state-notice-06: #005fb3 60%;
  --gds-sys-color-state-warning-01: #000000 6%;
  --gds-sys-color-state-warning-02: #000000 14%;
  --gds-sys-color-state-warning-03: #ffffff 8%;
  --gds-sys-color-state-warning-04: #ffffff 14%;
  --gds-sys-color-state-warning-05: #f19e38 12%;
  --gds-sys-color-state-warning-06: #f19e38 20%;`,Ve=`/**
 * Do not edit directly, this file was auto-generated.
 */


  color-scheme: light;
  --gds-sys-color-l1-01: #ffffff;
  --gds-sys-color-l1-02: #eaebeb;
  --gds-sys-color-l1-brand-01: #003824;
  --gds-sys-color-l1-inversed: #0a0b0b;
  --gds-sys-color-l2-01: #f7f8f7;
  --gds-sys-color-l2-02: #ffffff;
  --gds-sys-color-l2-03: #0a0b0b;
  --gds-sys-color-l2-brand-01: #003824;
  --gds-sys-color-l2-brand-02: #f8f6f1;
  --gds-sys-color-l2-positive-01: #f1f9f1;
  --gds-sys-color-l2-negative-01: #fef7f6;
  --gds-sys-color-l2-warning-01: #fef8f1;
  --gds-sys-color-l2-information-01: #f7f8f7;
  --gds-sys-color-l2-notice-01: #f5faff;
  --gds-sys-color-l3-brand-01: #003824;
  --gds-sys-color-l3-brand-02: #efe9dc;
  --gds-sys-color-l3-brand-03: #e7ddcb;
  --gds-sys-color-l3-01: #0a0b0b;
  --gds-sys-color-l3-02: #eaebeb;
  --gds-sys-color-l3-03: #d5d7d7;
  --gds-sys-color-l3-04: #ffffff;
  --gds-sys-color-l3-positive-01: #027839;
  --gds-sys-color-l3-positive-02: #dcefdc;
  --gds-sys-color-l3-positive-03: #cceacc;
  --gds-sys-color-l3-negative-01: #b92f13;
  --gds-sys-color-l3-negative-02: #fdebe8;
  --gds-sys-color-l3-negative-03: #fad8d1;
  --gds-sys-color-l3-notice-01: #005fb3;
  --gds-sys-color-l3-notice-02: #e6f3ff;
  --gds-sys-color-l3-notice-03: #cce7ff;
  --gds-sys-color-l3-warning-01: #8f530a;
  --gds-sys-color-l3-warning-02: #fce8cf;
  --gds-sys-color-l3-warning-03: #fadcb7;
  --gds-sys-color-l3-information-01: #0a0b0b;
  --gds-sys-color-l3-information-02: #eaebeb;
  --gds-sys-color-l3-information-03: #dfe1e1;
  --gds-sys-color-l3-disabled-01: #eff0f0;
  --gds-sys-color-l3-disabled-02: #a0a6a4;
  --gds-sys-color-l3-disabled-03: #eff0f0;
  --gds-sys-color-border-interactive: #777e7c;
  --gds-sys-color-border-subtle-01: #dfe1e1;
  --gds-sys-color-border-subtle-02: #eff0f0;
  --gds-sys-color-border-strong: #0a0b0b;
  --gds-sys-color-border-inverse: #ffffff;
  --gds-sys-color-border-information-01: #0a0b0b;
  --gds-sys-color-border-positive-01: #027839;
  --gds-sys-color-border-negative-01: #b92f13;
  --gds-sys-color-border-warning-01: #8f530a;
  --gds-sys-color-border-notice-01: #005fb3;
  --gds-sys-color-border-information-02: rgba(10, 11, 11, 0.4);
  --gds-sys-color-border-positive-02: rgba(2, 120, 57, 0.4);
  --gds-sys-color-border-negative-02: rgba(185, 47, 19, 0.4);
  --gds-sys-color-border-warning-02: rgba(143, 83, 10, 0.4);
  --gds-sys-color-border-notice-02: rgba(0, 95, 179, 0.4);
  --gds-sys-color-content-01: #0a0b0b;
  --gds-sys-color-content-02: #636967;
  --gds-sys-color-content-03: #ffffff;
  --gds-sys-color-content-04: #a0a6a4;
  --gds-sys-color-content-inversed: #ffffff;
  --gds-sys-color-content-brand-01: #003824;
  --gds-sys-color-content-brand-02: #685631;
  --gds-sys-color-content-positive-01: #027839;
  --gds-sys-color-content-positive-02: #eaf6ea;
  --gds-sys-color-content-positive-03: #026436;
  --gds-sys-color-content-negative-01: #b92f13;
  --gds-sys-color-content-negative-02: #fdebe8;
  --gds-sys-color-content-warning-01: #8f530a;
  --gds-sys-color-content-warning-02: #fce8cf;
  --gds-sys-color-content-notice-01: #005fb3;
  --gds-sys-color-content-notice-02: #e6f3ff;
  --gds-sys-color-content-disabled-01: #a0a6a4;
  --gds-sys-color-content-disabled-02: #f7f8f7;
  --gds-sys-color-state-brand-01: #ffffff 20%;
  --gds-sys-color-state-brand-02: #ffffff 35%;
  --gds-sys-color-state-brand-03: #003824 6%;
  --gds-sys-color-state-brand-04: #003824 14%;
  --gds-sys-color-state-brand-05: #003824 6%;
  --gds-sys-color-state-brand-06: #003824 14%;
  --gds-sys-color-state-neutral-01: #ffffff 20%;
  --gds-sys-color-state-neutral-02: #ffffff 35%;
  --gds-sys-color-state-neutral-03: #000000 6%;
  --gds-sys-color-state-neutral-04: #000000 14%;
  --gds-sys-color-state-neutral-05: #000000 6%;
  --gds-sys-color-state-neutral-06: #000000 14%;
  --gds-sys-color-state-positive-01: #ffffff 12%;
  --gds-sys-color-state-positive-02: #ffffff 23%;
  --gds-sys-color-state-positive-03: #027839 8%;
  --gds-sys-color-state-positive-04: #027839 16%;
  --gds-sys-color-state-positive-05: #027839 8%;
  --gds-sys-color-state-positive-06: #027839 16%;
  --gds-sys-color-state-negative-01: #ffffff 8%;
  --gds-sys-color-state-negative-02: #ffffff 16%;
  --gds-sys-color-state-negative-03: #b92f13 8%;
  --gds-sys-color-state-negative-04: #b92f13 16%;
  --gds-sys-color-state-negative-05: #b92f13 8%;
  --gds-sys-color-state-negative-06: #b92f13 16%;
  --gds-sys-color-state-notice-01: #ffffff 20%;
  --gds-sys-color-state-notice-02: #ffffff 35%;
  --gds-sys-color-state-notice-03: #005fb3 8%;
  --gds-sys-color-state-notice-04: #005fb3 16%;
  --gds-sys-color-state-notice-05: #005fb3 8%;
  --gds-sys-color-state-notice-06: #005fb3 16%;
  --gds-sys-color-state-warning-01: #ffffff 20%;
  --gds-sys-color-state-warning-02: #ffffff 35%;
  --gds-sys-color-state-warning-03: #8f530a 8%;
  --gds-sys-color-state-warning-04: #8f530a 16%;
  --gds-sys-color-state-warning-05: #8f530a 8%;
  --gds-sys-color-state-warning-06: #8f530a 16%;`,bs=`/**
 * Do not edit directly, this file was auto-generated.
 */

  --gds-sys-shadow-s-01: 0px 0px 2px 0px #060D1314;
  --gds-sys-shadow-s-02: 0px 0px 0px 0px transparent;
  --gds-sys-shadow-m-01: 0px 4px 8px -2px #060D131a;
  --gds-sys-shadow-m-02: 0px 2px 4px -2px #060D130f;
  --gds-sys-shadow-l-01: 0px 20px 24px -4px #060D1314;
  --gds-sys-shadow-l-02: 0px 8px 8px -4px #060D1308;
  --gds-sys-shadow-xl-01: 0px 24px 48px -12px #060D132e;
  --gds-sys-shadow-xl-02: 0px 0px 0px 0px transparent;`;var Us={};const ke=typeof process<"u"&&Us!==void 0;var ze,me,ve,He,ge,us,hs;function Xs(){return ke?[]:document.adoptedStyleSheets||[]}const Zs=class ys{constructor(){p(this,ge),p(this,ze,!qe()),p(this,me,new Map),p(this,ve,new Map),p(this,He,Xs())}static get instance(){var e;return(e=globalThis.__gdsGlobalStylesRegistryScoped)!=null&&e[j]||(globalThis.__gdsGlobalStylesRegistryScoped={...globalThis.__gdsGlobalStylesRegistryScoped,[j]:new ys}),globalThis.__gdsGlobalStylesRegistryScoped[j]}injectGlobalStyles(e,t){if(a(this,ze)){const o=Array.isArray(t)?t.map(n=>n.toString()).join(""):t.toString();F(this,ge,us).call(this,e,o)}else t.styleSheet&&F(this,ge,hs).call(this,e,t.styleSheet)}};ze=new WeakMap;me=new WeakMap;ve=new WeakMap;He=new WeakMap;ge=new WeakSet;us=function(s,e){if(ke)return;let t=a(this,ve).get(s);t||(t=document.createElement("style"),a(this,ve).set(s,t)),t.textContent=e,document.head.appendChild(t)};hs=function(s,e){ke||(a(this,me).set(s,e),document.adoptedStyleSheets=[...a(this,He),...Array.from(a(this,me).values())])};let Ks=Zs;const R=[w`
    :host {
      ${E(ps)}
      ${E(bs)}
    }
  `];Ks.instance.injectGlobalStyles("root-tokens",w`
    :root,
    :root[gds-theme='light'] {
      ${E(ps)}
      ${E(bs)}
      ${E(Ve)}
    }
    :root[gds-theme='dark'] {
      ${E(de)}
    }
  `);const Ys=w`
  :host {
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
  }
`;var Qs=Ys;let le=class extends B{constructor(){super(...arguments),this.onmousedown=s=>{const t=s.target.getBoundingClientRect(),o=this._rippleEl;o&&(o.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${s.clientY-t.top}px`),this.style.setProperty("--gds-ripple-left",`${s.clientX-t.left}px`),setTimeout(()=>{o.classList.add("gds-ripple-effect")},20))}}render(){return Se`<div></div>`}};le.styles=[R,Qs];r([te("div")],le.prototype,"_rippleEl",2);le=r([C("gds-ripple")],le);var fe,pe,Ge;const et=class ms{constructor(){p(this,fe,new Map),p(this,pe,new Map),p(this,Ge,!qe())}static get instance(){var e;return(e=globalThis.__gdsTransitionalStyles)!=null&&e[j]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[j]:new ms}),globalThis.__gdsTransitionalStyles[j]}apply(e,t){if(!e.shadowRoot)return;const o=a(this,fe).get(t);o&&(a(this,pe).set(t,e),this.applyToElement(t,o))}applyToElement(e,t){var W,b;const o=a(this,pe).get(e);if(!o||!o.shadowRoot)return;const n=()=>{o._dynamicStylesController.clearInitial(),o._dynamicStylesController.inject("t-styles",E(t)),o._isUsingTransitionalStyles=!0},l=()=>{o._isUsingTransitionalStyles=!1,o._dynamicStylesController.clear("t-styles"),o._dynamicStylesController.restoreInitial()},d="[gds-element=gds-theme]";let f=o.getRootNode(),S=o.closest(d);for(;S===null&&f!==document;)S=(W=f.host)==null?void 0:W.closest(d),f=(b=f.host)==null?void 0:b.getRootNode();if(S){const m=S,V=()=>{m.designVersion==="2023"?l():n()};if(m.addEventListener("gds-design-version-changed",V),o.addEventListener("gds-element-disconnected",()=>m.removeEventListener("gds-design-version-changed",V)),m.designVersion==="2023"){l();return}}n()}register(e,t){let o=t;a(this,Ge)&&(o=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${t}`),a(this,fe).set(e,o),this.applyToElement(e,o)}};fe=new WeakMap;pe=new WeakMap;Ge=new WeakMap;let _e=et;function we(s,e){const t={waitUntilFirstUpdate:!1,...e};return(o,n,l)=>{const{update:d}=o,f=Array.isArray(s)?s:[s];o.update=function(S){f.forEach(W=>{var m;const b=W;if(S.has(b)){const V=S.get(b),oe=this[b];V!==oe&&(!t.waitUntilFirstUpdate||this.hasUpdated)&&((m=l.value)==null||m.call(this,V,oe))}}),d.call(this,S)}}}function st(s={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(e,t,o)=>{let n;const l=e.connectedCallback,d=e.disconnectedCallback;e.connectedCallback=function(){l==null||l.call(this);const f=(S,W)=>{var b;(b=o.value)==null||b.call(this)};n=new MutationObserver(f),n.observe(this,s)},e.disconnectedCallback=function(){d==null||d.call(this),n.disconnect()}}}const tt={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},ot=/^([<|>]=?)?([0-9a-z]+)/,vs=["{","}",";",":",","],es=[" ","/n"];function rt(s=""){const e=[];let t="";for(let o=0;o<s.length;o++){const n=s[o];if(es.includes(n)||(t+=n),vs.includes(n)){e.push(t.slice(0,-1)),e.push(n),t="";continue}if(es.includes(n)||o===s.length-1){e.push(t),t="";continue}}return e.filter(o=>o!=="")}function nt(s){const e=[];let t={breakpoint:"-",values:[]};const o=()=>({sel:"",values:[]});let n=o();for(const l of s){if(!vs.includes(l)){n.values.push(l);continue}if(l==="{"&&(t={breakpoint:n.values.join(","),values:[]},n=o()),l===";"&&(e.length===0&&e.push(t),n.values.length>0&&(t.values.push(n),n=o())),l===":"){const d=n.values.pop()??"";n.sel=d}t&&l==="}"&&(t.values.push(n),n=o(),e.push(t))}return n.values.length>0&&t.values.push(n),e.length===0&&e.push(t),e}function at(s){return s.split(",").map(t=>{const o=t.trim().match(ot);if(!o)throw new Error(`Invalid breakpoint specifier: ${t}`);return{condition:o[1],value:o[2]}})}function it(s,e,t,o=l=>l,n=(l,d)=>`${l}: ${d.join(" ")};`){let l="";for(const d of t){const W=`@media ${(d.breakpoint==="-"?[{condition:">=",value:"0"}]:at(d.breakpoint)).map(b=>{var m;return`(${(m=b.condition)!=null&&m.includes("<")?"max-width":"min-width"}: ${tt[b.value]??b.value})`}).join(" and ")} {${d.values.map(b=>{let m=s;b.sel.length>0&&(m=s===":host"?`:host(:${b.sel})`:`${s}:${b.sel}`);const V=n(e,b.values.map(o));return b.sel==="hover"?`@media (hover: hover) {${m}{${V}}}`:`${m}{${V}}`}).join("")}}`;l+=W}return l}const Te=new Map;function i(s){return(e,t)=>{const o=(s==null?void 0:s.property)??String(t),n=s==null?void 0:s.valueTemplate,l=s==null?void 0:s.styleTemplate,d=(s==null?void 0:s.cacheOverrideKey)??"0";g({attribute:s==null?void 0:s.attribute,noAccessor:!0})(e,t),Object.defineProperty(e,t,{get:function(){return this["__"+String(t)]},set:async function(f){if(!f)return;this["__"+String(t)]=f,await this.updateComplete;const S=(s==null?void 0:s.selector)??this.constructor.styleExpressionBaseSelector,W=this.level??"0",b=S+o+f+W+d;if(Te.has(b)){this._dynamicStylesController.inject(`sep_${String(t)}`,Te.get(b));return}const m=nt(rt(f)),V=it(S,o,m,n==null?void 0:n.bind(this),l==null?void 0:l.bind(this)),oe=E(V);Te.set(b,oe),this._dynamicStylesController.inject(`sep_${String(t)}`,oe)}})}}class lt extends Ws{constructor(e){if(super(e),e.type!==Fs.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(e){return ns}update(e,[t]){var l;const o=e.element,n=(l=e.options)==null?void 0:l.host;Array.from(n.attributes).forEach(d=>{t(d)&&o.setAttribute(d.name.replace("gds-",""),d.value)})}}const ct=Rs(lt),ss=new WeakMap;function dt(s){return(e,...t)=>{let o=ss.get(e);return o||(o=e.map(n=>n.replace(/\n[\s]+</gm,"<")),o.raw=e.raw,ss.set(e,o)),s(o,...t)}}function xs(s,e,t){if(s==="transparent"||s==="currentColor"||s==="inherit")return s;const[o,n]=s.split("/");let l;return t&&e==="background"?l=`var(--gds-sys-color-l${t}-${o})`:l=`var(--gds-sys-color-${e}-${o})`,n?`color-mix(in srgb, ${l} ${parseFloat(n)*100}%, transparent 0%)`:l}function Ce(s){return{valueTemplate:function(e){return xs(e,s,this.level)}}}const se={valueTemplate:s=>`var(--gds-sys-space-${s}, 0)`},_={valueTemplate:s=>`var(--gds-sys-space-${gt(s)}, ${s})`},De={valueTemplate:s=>{const t=(s.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${s})`:`calc(var(--gds-sys-space-${s.substring(1)}) * -1)`;return s==="auto"?"auto":t},styleTemplate:(s,e)=>{const t=f=>f==="auto"?"auto":`${f}`,o=t(e[0]),n=e.length>1?t(e[1]):o,l=e.length>2?t(e[2]):o,d=e.length>3?t(e[3]):n;return`${s}: ${o} ${n} ${l} ${d};`}};function gt(s){return s.replace(/[^a-zA-Z0-9-]/g,"")}function Ee(s){class e extends s{}return r([i(_)],e.prototype,"width",2),r([i(_)],e.prototype,"min-width",2),r([i(_)],e.prototype,"max-width",2),r([i(_)],e.prototype,"inline-size",2),r([i(_)],e.prototype,"min-inline-size",2),r([i(_)],e.prototype,"max-inline-size",2),e}function ft(s){class e extends s{}return r([i(_)],e.prototype,"height",2),r([i(_)],e.prototype,"min-height",2),r([i(_)],e.prototype,"max-height",2),r([i(_)],e.prototype,"block-size",2),r([i(_)],e.prototype,"min-block-size",2),r([i(_)],e.prototype,"max-block-size",2),e}function $e(s){class e extends s{}return r([i(De)],e.prototype,"margin",2),r([i(De)],e.prototype,"margin-inline",2),r([i(De)],e.prototype,"margin-block",2),e}function pt(s){class e extends s{}return r([i(se)],e.prototype,"padding",2),r([i(se)],e.prototype,"padding-inline",2),r([i(se)],e.prototype,"padding-block",2),e}function Me(s){class e extends s{}return r([i()],e.prototype,"align-self",2),r([i()],e.prototype,"justify-self",2),r([i()],e.prototype,"place-self",2),r([i()],e.prototype,"grid-column",2),r([i()],e.prototype,"grid-row",2),r([i()],e.prototype,"grid-area",2),r([i()],e.prototype,"flex",2),r([i()],e.prototype,"order",2),e}function bt(s){class e extends s{}return r([i()],e.prototype,"position",2),r([i()],e.prototype,"transform",2),r([i()],e.prototype,"inset",2),e}ke||function(s){if(typeof s.requestSubmit=="function")return;s.requestSubmit=function(o=null){o?(e(o,this),o.click()):(o=document.createElement("input"),o.type="submit",o.hidden=!0,this.appendChild(o),o.click(),this.removeChild(o))};function e(o,n){o instanceof HTMLElement||t(TypeError,"parameter 1 is not of type 'HTMLElement'"),o.type=="submit"||t(TypeError,"The specified element is not a submit button"),o.form==n||t(DOMException,"The specified element is not owned by this form element","NotFoundError")}function t(o,n,l="Error"){throw new o("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+n+".",l)}}(HTMLFormElement.prototype);var h;class D extends B{constructor(){super(),p(this,h),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{k(this,h,this.attachInternals())}catch{k(this,h,{form:this.closest("form"),setFormValue:t=>{this._internalValue=t},setValidity:(t,o)=>{a(this,h).validity=t,this.errorMessage=o||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:this.checkValidity.bind(this),reportValidity:this.reportValidity.bind(this)})}}connectedCallback(){if(super.connectedCallback(),typeof this.attachInternals!="function"){const e=this.closest("form");e&&(e.addEventListener("submit",this._handleFormSubmit.bind(this)),e.addEventListener("reset",this.formResetCallback.bind(this)))}}set invalid(e){const t=this.invalid;a(this,h).setValidity({...a(this,h).validity,customError:e,valid:!e},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",t),a(this,h).checkValidity()}get invalid(){return!a(this,h).validity.valid}get value(){return this._internalValue}set value(e){this._internalValue=e,a(this,h).setFormValue(e)}get form(){return a(this,h).form}get validity(){return a(this,h).validity}get validationMessage(){return a(this,h).validationMessage}get willValidate(){return a(this,h).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const t=this.invalid,o=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=o[1]||this.errorMessage,a(this,h).setValidity(o[0],o[1],this._getValidityAnchor()),t!==this.invalid&&(this.requestUpdate("invalid",t),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),a(this,h).checkValidity()}reportValidity(){return a(this,h).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){typeof this.value=="string"?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(e){e==null||e.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(e){this.checkValidity(),this.validity.valid||e.preventDefault()}}h=new WeakMap;D.formAssociated=!0;r([g({attribute:!1})],D.prototype,"validator",2);r([g({type:Boolean})],D.prototype,"required",2);r([g({attribute:"error-message"})],D.prototype,"errorMessage",2);r([g({type:Boolean,reflect:!0})],D.prototype,"invalid",1);r([g()],D.prototype,"label",2);r([g()],D.prototype,"value",1);r([g({reflect:!0})],D.prototype,"name",2);r([g({type:Boolean,reflect:!0})],D.prototype,"disabled",2);r([we("value",{waitUntilFirstUpdate:!0})],D.prototype,"__handleValueChange",1);const ut=w`
  @layer tokens, core, a11y, ranks, sizes, variants, disabled;

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
      background-color: var(--gds-sys-color-l3-01);
      color: var(--gds-sys-color-content-03);
      border-radius: var(--gds-sys-space-max);
      font-family: inherit;
      font: var(--gds-sys-text-detail-book-m);
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
        outline-color: var(--gds-sys-color-content-01);

        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-01),
            var(--gds-sys-color-state-neutral-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-01),
          var(--gds-sys-color-state-neutral-02)
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
    background-color: var(--gds-sys-color-l3-disabled-01);
    color: var(--gds-sys-color-content-disabled-01);
  }

  @layer ranks {
    :host([rank*='secondary']) .button {
      background-color: var(--gds-sys-color-l3-02);
      color: var(--gds-sys-color-content-01);

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-02),
            var(--gds-sys-color-state-neutral-03)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-02),
          var(--gds-sys-color-state-neutral-04)
        );
      }
    }

    :host([rank*='tertiary']) .button {
      background-color: transparent;
      color: var(--gds-sys-color-content-01);

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-neutral-05)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-06)
        );
      }
    }
  }

  @layer sizes {
    :host([size='xs']) .button {
      --_block-size: var(--gds-sys-space-l);
      font: var(--gds-sys-text-detail-book-s);
      padding-inline: var(--gds-sys-space-m);
    }

    :host([size='small']) .button {
      --_block-size: var(--gds-sys-space-xl);
      font: var(--gds-sys-text-detail-book-s);
      padding-block: var(--gds-sys-space-2xs);
      padding-inline: var(--gds-sys-space-m);
    }

    :host([size='medium']) .button {
      --_block-size: var(--gds-sys-space-2xl);
      font: var(--gds-sys-text-detail-book-m);
    }
  }

  @layer variants {
    .brand {
      background-color: var(--gds-sys-color-l3-brand-01);

      &:focus {
        outline-color: var(--gds-sys-color-content-brand-01);

        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-brand-01),
            var(--gds-sys-color-state-brand-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-brand-01),
          var(--gds-sys-color-state-brand-02)
        );
      }

      &.secondary {
        background-color: var(--gds-sys-color-l3-02);
        color: var(--gds-sys-color-content-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l3-02),
              var(--gds-sys-color-state-brand-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-02),
            var(--gds-sys-color-state-brand-04)
          );
        }
      }

      &.tertiary {
        background-color: transparent;
        color: var(--gds-sys-color-content-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              transparent,
              var(--gds-sys-color-state-brand-05)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-brand-06)
          );
        }
      }
    }

    .positive {
      background-color: var(--gds-sys-color-l3-positive-01);
      color: var(--gds-sys-color-content-inversed);

      &:focus {
        outline-color: var(--gds-sys-color-content-positive-01);

        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-positive-01),
            var(--gds-sys-color-state-positive-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-positive-01),
          var(--gds-sys-color-state-positive-02)
        );
      }

      &.secondary {
        background-color: var(--gds-sys-color-l3-positive-02);
        color: var(--gds-sys-color-content-positive-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l3-positive-02),
              var(--gds-sys-color-state-positive-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-positive-02),
            var(--gds-sys-color-state-positive-04)
          );
        }
      }

      &.tertiary {
        background-color: transparent;
        color: var(--gds-sys-color-content-positive-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              transparent,
              var(--gds-sys-color-state-positive-05)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-positive-06)
          );
        }
      }
    }

    .negative {
      background-color: var(--gds-sys-color-l3-negative-01);
      color: var(--gds-sys-color-content-inversed);

      &:focus {
        outline-color: var(--gds-sys-color-content-negative-01);
        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-negative-01),
            var(--gds-sys-color-state-negative-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-negative-01),
          var(--gds-sys-color-state-negative-02)
        );
      }

      &.secondary {
        background-color: var(--gds-sys-color-l3-negative-02);
        color: var(--gds-sys-color-content-negative-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l3-negative-02),
              var(--gds-sys-color-state-negative-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-negative-02),
            var(--gds-sys-color-state-negative-04)
          );
        }
      }

      &.tertiary {
        background-color: transparent;
        color: var(--gds-sys-color-content-negative-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              transparent,
              var(--gds-sys-color-state-negative-05)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-negative-06)
          );
        }
      }
    }

    .notice {
      background-color: var(--gds-sys-color-l3-notice-01);
      color: var(--gds-sys-color-content-inversed);

      &:focus {
        outline-color: var(--gds-sys-color-content-notice-01);
        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-notice-01),
            var(--gds-sys-color-state-notice-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-notice-01),
          var(--gds-sys-color-state-notice-02)
        );
      }

      &.secondary {
        background-color: var(--gds-sys-color-l3-notice-02);
        color: var(--gds-sys-color-content-notice-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l3-notice-02),
              var(--gds-sys-color-state-notice-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-notice-02),
            var(--gds-sys-color-state-notice-04)
          );
        }
      }

      &.tertiary {
        background-color: transparent;
        color: var(--gds-sys-color-content-notice-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              transparent,
              var(--gds-sys-color-state-notice-05)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-notice-06)
          );
        }
      }
    }

    .warning {
      background-color: var(--gds-sys-color-l3-warning-01);
      color: var(--gds-sys-color-content-03);

      &:focus {
        outline-color: var(--gds-sys-color-content-warning-01);
        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-warning-01),
            var(--gds-sys-color-state-warning-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-warning-01),
          var(--gds-sys-color-state-warning-02)
        );
      }

      &.secondary {
        background-color: var(--gds-sys-color-l3-warning-02);
        color: var(--gds-sys-color-content-warning-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l3-warning-02),
              var(--gds-sys-color-state-warning-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-warning-02),
            var(--gds-sys-color-state-warning-04)
          );
        }
      }

      &.tertiary {
        background-color: transparent;
        color: var(--gds-sys-color-content-warning-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              transparent,
              var(--gds-sys-color-state-warning-05)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-warning-06)
          );
        }
      }
    }
  }
`;var ht=ut,ae,z,X,Ss,Le,je;const yt=["aria-label","aria-haspopup","aria-expanded"],mt=dt(ee);class y extends D{constructor(){super(...arguments),p(this,z),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",p(this,ae,!1),p(this,Le,()=>{var t;const e=((t=this._mainSlot)==null?void 0:t.assignedElements())??[];k(this,ae,e.length===1&&(e[0].tagName.toLowerCase().startsWith("gds-icon")||e[0].getAttribute("name")==="icon")),this.requestUpdate()}),p(this,je,e=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e}),this.form&&!a(this,z,X)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),_e.instance.apply(this,"gds-button")}focus(e){var t;(t=this._getValidityAnchor())==null||t.focus(e)}render(){const e={button:!0,circle:a(this,ae),icon:a(this,ae),xs:this.size==="xs",small:this.size==="small",large:this.size==="large",brand:this.variant==="brand",positive:this.variant==="positive",negative:this.variant==="negative",notice:this.variant==="notice",warning:this.variant==="warning",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},t=a(this,z,X)?Ze`a`:Ze`button`;return cs`
      <${t}
        class=${As(e)}
        type="${re(a(this,z,X)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||ns}
        href=${re(a(this,z,X)?this.href:void 0)}
        target=${re(a(this,z,X)?this.target:void 0)}
        rel=${re(a(this,z,X)?this.rel||a(this,z,Ss):void 0)}
        download=${re(a(this,z,X)?this.download:void 0)}
        part="_button"
        @click="${a(this,je)}"
        ${ct(o=>o.name.startsWith("gds-aria")||o.name==="gds-role"||yt.includes(o.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${a(this,Le)}></slot>
        <slot name="trail"></slot>
        ${Bs(!this._isUsingTransitionalStyles,()=>mt`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${t}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}}ae=new WeakMap;z=new WeakSet;X=function(){return this.href.length>0};Ss=function(){return this.target==="_blank"?"noreferrer noopener":void 0};Le=new WeakMap;je=new WeakMap;y.styles=[R,ht];y.shadowRootOptions={mode:"open",delegatesFocus:!0};r([g({type:Boolean,reflect:!0})],y.prototype,"disabled",2);r([i({selector:".button"})],y.prototype,"justify-content",2);r([g({reflect:!0})],y.prototype,"type",2);r([g({reflect:!0})],y.prototype,"rank",2);r([g({reflect:!0})],y.prototype,"variant",2);r([g({reflect:!0})],y.prototype,"size",2);r([g()],y.prototype,"label",2);r([g()],y.prototype,"href",2);r([g()],y.prototype,"target",2);r([g()],y.prototype,"rel",2);r([g()],y.prototype,"download",2);r([te("slot:not([name])")],y.prototype,"_mainSlot",2);r([te(".button")],y.prototype,"_button",2);r([st({attributes:!0,childList:!1,subtree:!1,characterData:!1})],y.prototype,"_attributeChanged",1);let Oe=class extends Ee($e(Me(y))){};Oe=r([C("gds-button",{dependsOn:[le]})],Oe);const vt=w`
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
`;var xt=vt;let c=class extends Ee(ft($e(pt(Me(bt(B)))))){constructor(){super(...arguments),this.level="2"}render(){return ee`<slot></slot>`}};c.styles=[R,xt];r([i()],c.prototype,"display",2);r([g()],c.prototype,"level",2);r([i(Ce("content"))],c.prototype,"color",2);r([i(Ce("background"))],c.prototype,"background",2);r([i({styleTemplate:function(s,e){const t=this,[o,n=t["border-style"]||"solid",l=t["border-color"]||"primary"]=e,d=`var(--gds-sys-space-${o})`,f=xs(l,"border",t.level);return`border: ${d} ${n} ${f};`}})],c.prototype,"border",2);r([i(Ce("border"))],c.prototype,"border-color",2);r([i(se)],c.prototype,"border-width",2);r([i()],c.prototype,"border-style",2);r([i(se)],c.prototype,"border-radius",2);r([i({valueTemplate:s=>`var(--gds-sys-shadow-${s}-01), var(--gds-sys-shadow-${s}-02)`})],c.prototype,"box-shadow",2);r([i()],c.prototype,"opacity",2);r([i()],c.prototype,"overflow",2);r([i()],c.prototype,"box-sizing",2);r([i()],c.prototype,"z-index",2);r([i({styleTemplate:(s,e)=>`font: var(--gds-sys-text-${e[0]});`})],c.prototype,"font",2);r([i({valueTemplate:s=>`var(--gds-sys-text-weight-${s})`})],c.prototype,"font-weight",2);r([i()],c.prototype,"text-align",2);r([i()],c.prototype,"text-wrap",2);r([i()],c.prototype,"overflow-wrap",2);r([i()],c.prototype,"white-space",2);r([i({...se,styleTemplate:(s,e)=>{const t=e[0],o=e[1]||t;return`gap: ${t} ${o};`},cacheOverrideKey:"flex"})],c.prototype,"gap",2);r([i()],c.prototype,"align-items",2);r([i()],c.prototype,"align-content",2);r([i()],c.prototype,"justify-content",2);r([i()],c.prototype,"justify-items",2);r([i()],c.prototype,"flex-direction",2);r([i()],c.prototype,"flex-wrap",2);r([i()],c.prototype,"place-items",2);r([i()],c.prototype,"place-content",2);c=r([C("gds-div")],c);let ce=class extends c{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return ee`<slot></slot>`}};ce.styles=[R,w`
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
    `];r([i({styleTemplate:function(s,e){let t,o,n;switch(e[0]){case"primary":t="transparent",o=`var(--gds-sys-color-l${this.level}-01)`,n="var(--gds-sys-color-content-01)";break;case"secondary":t="var(--gds-sys-color-border-subtle-01)",o=`var(--gds-sys-color-l${this.level}-02)`,n="var(--gds-sys-color-content-01)";break;case"brand-01":t="transparent",o=`var(--gds-sys-color-l${this.level}-brand-01)`,n="var(--gds-sys-color-content-inversed)";break;case"brand-02":t="transparent",o=`var(--gds-sys-color-l${this.level}-brand-02)`,n="var(--gds-sys-color-content-brand-02)";break;case"positive":case"negative":case"warning":case"information":case"notice":t=`var(--gds-sys-color-border-${e[0]}-02)`,o=`var(--gds-sys-color-l${this.level}-${e[0]}-01)`,n=`var(--gds-sys-color-content-${e[0]}-01)`;break;default:t="transparent",o=`var(--gds-sys-color-l${this.level}-01)`,n="var(--gds-sys-color-content-01)";break}return`
      --_border-color: ${t};
      --_background-color: ${o};
      --_color: ${n};
      `}})],ce.prototype,"variant",2);ce=r([C("gds-card")],ce);const St=w`
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
`;var kt=St;class M extends $e(Me(B)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.label=""}get svgAttributes(){const t={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:this.constructor._viewBox,part:"icon"};return this.label?{...t,"aria-label":this.label}:{...t,role:"presentation"}}get svgContent(){const e=this.constructor;return this.solid?e._solidSVG:e._regularSVG}applyStroke(e){return this.stroke?e.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):e}generateAttributesString(e){return Object.entries(e).filter(([t,o])=>o!==void 0).map(([t,o])=>`${t}="${o}"`).join(`
      `)}render(){const e=this.svgAttributes;let t=this.svgContent||"";this.stroke&&(t=this.applyStroke(t));const o=`
      <svg ${this.generateAttributesString(e)}>
        ${t}
      </svg>
    `;return Se`${js(o)}`}}M.styles=[R,kt];r([i({..._,property:"height",selector:"svg"})],M.prototype,"size",2);r([g({type:Boolean})],M.prototype,"solid",2);r([g({type:Number})],M.prototype,"stroke",2);r([g()],M.prototype,"level",2);r([i(Ce("content"))],M.prototype,"color",2);r([g({type:String})],M.prototype,"label",2);M.define();const _t=w`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-l2-border-primary);
  }
`;var wt=_t;let xe=class extends c{render(){return ee`<slot></slot>`}};xe.styles=[R,wt];xe=r([C("gds-flex")],xe);let N=class extends M{};N._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';N._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>';N._name="chevron-left";N._width=24;N._height=24;N._viewBox="0 0 24 24";N=r([C("gds-icon-chevron-left")],N);const Ct=s=>{Oe.define();const e=A("gds-button"),t={...s,class:s.className};return T.createElement(e,t)},Et=s=>{ce.define();const e=A("gds-card"),t={...s,class:s.className};return T.createElement(e,t)};let J=class extends M{};J._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';J._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>';J._name="chevron-right";J._width=24;J._height=24;J._viewBox="0 0 24 24";J=r([C("gds-icon-chevron-right")],J);function $t(){return(s,e,t)=>{const o=s.connectedCallback,n=s.disconnectedCallback;s.connectedCallback=function(){o==null||o.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[e]=new ResizeObserver(()=>{this.__resizeObserver_tids[e]&&clearTimeout(this.__resizeObserver_tids[e]),this.__resizeObserver_tids[e]=setTimeout(()=>{var l;(l=t.value)==null||l.call(this)},20)}),this.__resizeObservers[e].observe(this)},s.disconnectedCallback=function(){n==null||n.call(this),this.__resizeObservers[e].disconnect()}}}let q=class extends M{};q._regularSVG='<path d="M20.7999 7C17.0999 7 13.8999 9.1 12.1999 12.2C11.9999 10.2 11.1999 8.4 10.0999 6.8C8.69995 4.7 6.59995 3.1 4.29995 2.2L3.69995 2L3.49995 2.5C2.59995 3.9 2.09995 5.5 1.99995 7.2C1.89995 8.9 2.29995 10.5 2.99995 12.1C3.69995 13.6 4.79995 14.9 6.19995 15.8C7.49995 16.8 9.09995 17.4 10.6999 17.5C10.3999 19 9.99995 21 9.99995 21V21.1C9.99995 21.2 9.99995 21.2 10.0999 21.3C10.0999 21.3 10.0999 21.4 10.1999 21.4C10.2999 21.4 10.2999 21.4 10.3999 21.4H11.4999C11.5999 21.4 11.6999 21.4 11.7999 21.4C11.8999 21.3 11.8999 21.2 11.8999 21.1C11.8999 21.1 12.0999 18.8 12.1999 17.6C17.2999 17.3 21.3999 13 21.3999 7.7V7H20.7999ZM3.29995 7.7C3.29995 6.3 3.69995 4.9 4.29995 3.7C8.39995 5.5 11.0999 9.6 11.0999 14.1C11.0999 14.8 10.9999 15.5 10.8999 16.2C8.79995 16 6.89995 15 5.49995 13.4C4.09995 11.9 3.29995 9.8 3.29995 7.7ZM12.3999 16.2C12.6999 12.1 15.9999 8.7 20.0999 8.4C19.7999 12.6 16.4999 15.9 12.3999 16.2Z" fill="currentColor"/>';q._solidSVG='<path d="M20.8 7C17.1 7 13.9 9.1 12.2 12.2C12 10.2 11.2 8.4 10.1 6.8C8.70001 4.7 6.60001 3.1 4.30001 2.2L3.70001 2L3.50001 2.5C2.60001 3.9 2.10001 5.5 2.00001 7.2C1.90001 8.9 2.30001 10.5 3.00001 12.1C3.70001 13.6 4.80001 14.9 6.20001 15.8C7.50001 16.8 9.10001 17.4 10.7 17.5C10.4 19 10 21 10 21V21.1C10 21.2 10 21.2 10.1 21.3C10.1 21.3 10.1 21.4 10.2 21.4C10.3 21.4 10.3 21.4 10.4 21.4H11.5C11.6 21.4 11.7 21.4 11.8 21.4C11.9 21.3 11.9 21.2 11.9 21.1C11.9 21.1 12.1 18.8 12.2 17.6C17.3 17.3 21.4 13 21.4 7.7V7H20.8Z" fill="currentColor"/>';q._name="brand-green";q._width=24;q._height=24;q._viewBox="0 0 24 24";q=r([C("gds-icon-brand-green")],q);let H=class extends M{};H._regularSVG='<path d="M9.25 3.75H3.75V20.25H20.25V14.75M13.75 3.75H20.25M20.25 3.75V10.25M20.25 3.75L11 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';H._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H9.25C9.66421 3 10 3.33579 10 3.75C10 4.16421 9.66421 4.5 9.25 4.5H4.5V19.5H19.5V14.75C19.5 14.3358 19.8358 14 20.25 14C20.6642 14 21 14.3358 21 14.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75ZM13 3.75C13 3.33579 13.3358 3 13.75 3H20.25C20.6642 3 21 3.33579 21 3.75V10.25C21 10.6642 20.6642 11 20.25 11C19.8358 11 19.5 10.6642 19.5 10.25V5.56066L11.5303 13.5303C11.2374 13.8232 10.7626 13.8232 10.4697 13.5303C10.1768 13.2374 10.1768 12.7626 10.4697 12.4697L18.4393 4.5H13.75C13.3358 4.5 13 4.16421 13 3.75Z" fill="currentColor"/>';H._name="square-arrow-top-right";H._width=24;H._height=24;H._viewBox="0 0 24 24";H=r([C("gds-icon-square-arrow-top-right")],H);const Mt=w`
  @layer base {
    :host {
      display: flex;
      z-index: 1;
    }

    button {
      appearance: none;
      background: transparent;
      border-radius: var(--gds-sys-space-max);
      border-width: 0;
      color: var(--gds-sys-color-content-01);
      cursor: pointer;
      flex-grow: 1;
      flex-shrink: 0;
      font-family: inherit;
      font-size: inherit;
      font: var(--gds-sys-text-detail-book-m);
      overflow: hidden;
      padding: 0 1rem;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      transition:
        background-color var(--gds-sys-motion-fast),
        border-color var(--gds-sys-motion-fast),
        color var(--gds-sys-motion-fast);
      outline-width: var(--gds-sys-space-3xs);
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
          transparent,
          var(--gds-sys-color-state-neutral-05)
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
`;var Tt=Mt;let K=class extends Ee(B){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),_e.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return ee`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};K.styles=[...R,Tt];r([g({type:Boolean,reflect:!0})],K.prototype,"selected",2);r([g()],K.prototype,"value",2);r([g({type:Boolean,reflect:!0})],K.prototype,"disabled",2);K=r([C("gds-segment")],K);const Dt=w`
  @layer base {
    :host {
      background-color: var(--gds-sys-color-l3-02);
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
      appearance: none;
      aspect-ratio: 1;
      border-radius: var(--gds-sys-space-max);
      border-width: 0;
      background-color: var(--gds-sys-color-l3-02);
      color: var(--gds-sys-color-content-01);
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
            var(--gds-sys-color-l3-02),
            var(--gds-sys-color-state-neutral-03)
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
      background-color: var(--gds-sys-color-l3-04);
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
`;var Vt=Dt,Z,Ae,ks,Be,Re,We,ie,be,Fe,Pe;const zt=(s,e)=>{let t;return()=>{clearTimeout(t),t=setTimeout(s,e)}};let $=class extends Me(Ee($e(B))){constructor(){super(...arguments),p(this,Ae),this.size="medium",p(this,Z),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,p(this,Be,()=>{const e=this.segments.filter((t,o,n)=>{var l;return((l=n[o+1])==null?void 0:l.isVisible)&&!t.isVisible})[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),p(this,Re,()=>{const e=this.segments.filter((t,o,n)=>{var l;return((l=n[o-1])==null?void 0:l.isVisible)&&!t.isVisible}).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),p(this,We,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),p(this,ie,zt(a(this,We),50)),p(this,be,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,o=e.offsetLeft;this._elIndicator.style.transform=`translateX(${o}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),p(this,Fe,e=>{const t=this.segments.find(o=>o===e.target||o.contains(e.target));t&&(this.segments.forEach(o=>o.selected=!1),t.selected=!0,k(this,Z,t.value),a(this,be).call(this),this.dispatchCustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0}))}),p(this,Pe,()=>{a(this,Z)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===a(this,Z));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return a(this,Z)}set value(e){k(this,Z,e),a(this,Pe).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),_e.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{a(this,ie).call(this)})})}render(){return ee`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${a(this,Be)}
        aria-label=${Xe("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${a(this,Fe)}
          @slotchange=${F(this,Ae,ks)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${a(this,Re)}
        aria-label=${Xe("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{a(this,ie).call(this),a(this,be).call(this)})}};Z=new WeakMap;Ae=new WeakSet;ks=function(){var e,t;const s=(e=this.segments.find(o=>o.selected))==null?void 0:e.value;s&&k(this,Z,s),(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=new IntersectionObserver(o=>{o.forEach(n=>{const l=n.target;l._isVisible=n.intersectionRatio>.99,a(this,ie).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(o=>{var n;(n=this.intersectionObserver)==null||n.observe(o)})};Be=new WeakMap;Re=new WeakMap;We=new WeakMap;ie=new WeakMap;be=new WeakMap;Fe=new WeakMap;Pe=new WeakMap;$.styles=[R,Vt];r([g({reflect:!0})],$.prototype,"size",2);r([g()],$.prototype,"value",1);r([te("slot")],$.prototype,"_elSlot",2);r([te("#indicator")],$.prototype,"_elIndicator",2);r([te("#track")],$.prototype,"_elTrack",2);r([Ie()],$.prototype,"_showPrevButton",2);r([Ie()],$.prototype,"_showNextButton",2);r([$t(),we("value")],$.prototype,"_recalculateMinWidth",1);$=r([C("gds-segmented-control",{dependsOn:[K,N,J]}),Gs()],$);const Gt=w`
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
      font: var(--gds-sys-text-heading-xl);
    }

    h2 {
      font: var(--gds-sys-text-heading-l);
    }

    h3 {
      font: var(--gds-sys-text-heading-m);
    }

    h4 {
      font: var(--gds-sys-text-heading-s);
    }

    h5 {
      font: var(--gds-sys-text-heading-xs);
    }

    h6 {
      font: var(--gds-sys-text-heading-2xs);
    }

    p,
    li {
      font: var(--gds-sys-text-body-book-m);
    }

    strong {
      font: var(--gds-sys-text-body-book-m);
      font-weight: var(--gds-sys-text-weight-medium);
    }
  }
`,Lt=w`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var jt=Lt;let O=class extends c{constructor(){super(...arguments),this.tag="span"}render(){const e=Os(encodeURI(this.tag));return cs`<${e} tag><slot></slot></${e}>`}};O.styles=[R,Gt,jt];r([g({type:String})],O.prototype,"tag",2);r([i({selector:"[tag]",styleTemplate:(s,e)=>`font: var(--gds-sys-text-${e[0]});`})],O.prototype,"font",2);r([i({selector:"[tag]",valueTemplate:s=>`var(--gds-sys-text-weight-${s})`})],O.prototype,"font-weight",2);r([i()],O.prototype,"text-transform",2);r([i({selector:"[tag]"})],O.prototype,"text-decoration",2);r([i({selector:"[tag]",styleTemplate:(s,e)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${e[0]};
      -webkit-box-orient: vertical;`})],O.prototype,"lines",2);O=r([C("gds-text")],O);let Y=class extends B{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2016"}connectedCallback(){super.connectedCallback(),_e.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",E(`:host {${de}}`))}render(){return ee`<slot></slot>`}_onColorSchemeChange(){switch(this.colorScheme){case"dark":this._dynamicStylesController.inject("color-scheme",E(`:host { ${de}}`));break;case"light":this._dynamicStylesController.inject("color-scheme",E(`:host { ${Ve}}`));break;case"auto":default:this._dynamicStylesController.inject("color-scheme",E(`:host { ${Ve}} @media (prefers-color-scheme: dark) { :host { ${de} } }`));break}this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}_onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}};Y.styles=[R,w`
      :host {
        display: contents;
      }
    `];r([g({reflect:!0,attribute:"color-scheme"})],Y.prototype,"colorScheme",2);r([g({reflect:!0,attribute:"design-version"})],Y.prototype,"designVersion",2);r([we("colorScheme")],Y.prototype,"_onColorSchemeChange",1);r([we("designVersion")],Y.prototype,"_onDesignVersionChange",1);Y=r([C("gds-theme")],Y);const Ot=s=>{c.define();const e=A("gds-div"),t={...s,class:s.className};return T.createElement(e,t)},At=s=>{xe.define();const e=A("gds-flex"),t={...s,class:s.className};return T.createElement(e,t)},Bt=s=>{$.define();const e=A("gds-segmented-control"),t={...s,class:s.className};return T.createElement(e,t)},Rt=s=>{O.define();const e=A("gds-text"),t={...s,class:s.className};return T.createElement(e,t)},_s=s=>{Y.define();const e=A("gds-theme"),t={...s,class:s.className};return T.createElement(e,t)},ts=s=>{K.define();const e=A("gds-segment"),t={...s,class:s.className};return T.createElement(e,t)},Wt=s=>{q.define();const e=A("gds-icon-brand-green"),t={...s,class:s.className};return T.createElement(e,t)},Ft=s=>{H.define();const e=A("gds-icon-square-arrow-top-right"),t={...s,class:s.className};return T.createElement(e,t)};function Pt(s){const e=as.modules.find(t=>t.declarations.find(o=>o.tagName===s));return e.exports.map(t=>({name:t.declaration.name,path:e.path.replace(/src\//,"@sebgroup/green-core/")}))}const It=s=>{const{of:e}=s,[t,o]=T.useState("web"),n=ls(e||"meta"),l=Pt(n.preparedMeta.component),d=Object.keys({...n.preparedMeta.subcomponents});return v.createElement(_s,{designVersion:"2023"},v.createElement(Ot,{margin:"0 0 2xl 0"},v.createElement("h2",null,"Import"),v.createElement(Bt,{"max-width":"500px",value:t,onChange:f=>o(f.target.value)},v.createElement(ts,{value:"web"},"Web component (Angular and others)"),v.createElement(ts,{value:"react"},"React JSX")),l.filter(f=>f.name!=="*").map(f=>v.createElement("div",{key:f.name},t==="web"?v.createElement(Ue,{language:"javascript",dark:!0,code:`import { ${f.name} } from '@sebgroup/green-core/pure'
${f.name}.define()

// or, from direct path:
import { ${f.name} } from '${f.path}'
${f.name}.define()`}):v.createElement(Ue,{language:"javascript",dark:!0,code:`// Use as JSX element(s) in React
import { ${f.name}${d.length>0?d.map(S=>`, ${S}`):""} } from '@sebgroup/green-core/react'`})))))},Nt=()=>{const s=ls("story"),e=s.story.title.replace("Components/","").trim().toLowerCase(),o=`https://seb.io/component/${s.story.componentId.replace("components-","").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")}`;return v.createElement(_s,{designVersion:"2023"},v.createElement(Et,{margin:"0 0 2xl 0","flex-direction":"row","justify-content":"space-between","align-items":"center",padding:"l l l xl"},v.createElement(At,{"align-items":"center",gap:"l"},v.createElement(Wt,{size:"xl"}),v.createElement(Rt,null,"View ",e," on seb.io")),v.createElement(Ct,{href:o,target:"_blank",rel:"noopener noreferrer",rank:"secondary"},"Open documentation",v.createElement(Ft,{slot:"trail"}))))};function os(s){const e={blockquote:"blockquote",em:"em",h2:"h2",p:"p",strong:"strong",...is(),...s.components};return u.jsxs(u.Fragment,{children:[u.jsx($s,{isTemplate:!0}),`
`,u.jsx(Ms,{}),`
`,u.jsx(Ts,{}),`
`,u.jsx(Ds,{}),`
`,u.jsx(Nt,{}),`
`,u.jsx(It,{}),`
`,u.jsx(e.h2,{id:"public-api",children:"Public API"}),`
`,u.jsx(e.p,{children:"This table lists all public attributes, properties, methods, events and slots of the component."}),`
`,u.jsxs(e.blockquote,{children:[`
`,u.jsx(e.p,{children:u.jsxs(e.em,{children:[u.jsx(e.strong,{children:"Note:"})," JS properties and DOM attributes have different naming conventions in Green Core (camelCase vs snake-case), so some of them will show up under both sections, even though they refer to the same underlying property."]})}),`
`]}),`
`,u.jsx(Vs,{}),`
`,u.jsx(e.h2,{id:"additional-examples-and-customization-options",children:"Additional examples and customization options"}),`
`,u.jsx(zs,{})]})}function Jt(s={}){const{wrapper:e}={...is(),...s.components};return e?u.jsx(e,{...s,children:u.jsx(os,{...s})}):os(s)}const qt="en",Ht=["da","de","fi","fr","it","nl","no","sv"],Ut={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Åbn kalender-popup",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Man",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Annuller",s307db9af9905317d:"Formularfejloversigt",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brødkrummer",s407a88a592a0987c:"August",s46d6587089bd0356:"Næste måned",s49730f3d5751a433:"Indlæser...",s5052d10b539eabf0:"Marts",s58bfb494feb8eb02:x`${0} valgt`,s5d929ff1619ac0c9:"Søg",s5e8250fb85d64c23:"Luk",s5febcd9b311c16fe:"Rul til højre",s62931b2a50168976:"Forrige måned",s63d040e37887f17e:"I dag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Ti",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"Åbn kontekstmenu",s83c436ed1bc16dfb:"Vis flere oplysninger",s8ade4e9d5e804d6a:"Første tilgængelige dato",s9836b719fa8ef857:"Lør",s987ac119fac8d621:"Søn",s9af3c72c33088826:x`Der er ${0} fejl, der skal rettes, før du kan fortsætte:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Måned",sb4f1dffbb6be6302:"Ryd",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filtrer tilgængelige muligheder",sdc42f1da42d6411a:"Ryd inputfelt",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sidste tilgængelige dato",sf295af199c723ec8:"Fre"},Xt=Object.freeze(Object.defineProperty({__proto__:null,templates:Ut},Symbol.toStringTag,{value:"Module"})),Zt={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Kalender-Modal öffnen",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Mo",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Abbrechen",s307db9af9905317d:"Formularfehlerübersicht",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brotkrümelnavigation",s407a88a592a0987c:"August",s46d6587089bd0356:"Nächster Monat",s49730f3d5751a433:"Laden...",s5052d10b539eabf0:"März",s58bfb494feb8eb02:x`${0} ausgewählt`,s5d929ff1619ac0c9:"Suche",s5e8250fb85d64c23:"Schließen",s5febcd9b311c16fe:"Nach rechts scrollen",s62931b2a50168976:"Vorheriger Monat",s63d040e37887f17e:"Heute",s6cfed919e21ac6ac:"Do",s6d24cd19e23b8185:"Di",s74aa0319e62b2eb7:"Mi",s7793b811d20184fe:"Dezember",s7fd3469f78111589:"Kontextmenü öffnen",s83c436ed1bc16dfb:"Weitere Informationen anzeigen",s8ade4e9d5e804d6a:"Erstes verfügbares Datum",s9836b719fa8ef857:"Sa",s987ac119fac8d621:"So",s9af3c72c33088826:x`Es gibt ${0} Fehler zu beheben, bevor du fortfahren kannst:`,sa6f2645578b2d2bc:"Jahr",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Monat",sb4f1dffbb6be6302:"Löschen",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Verfügbare Optionen filtern",sdc42f1da42d6411a:"Feld löschen",se0955919920ee87d:"Tag",se4129fd6b9d7b4c2:"Letztes verfügbares Datum",sf295af199c723ec8:"Fr"},Kt=Object.freeze(Object.defineProperty({__proto__:null,templates:Zt},Symbol.toStringTag,{value:"Module"})),Yt={s15a16ae9f99f19bf:"Heinä",s15a852e9f9a50fa5:"Kesä",s17e3edbe032f79ec:"Avaa kalenteri-modal",s1a2dda8f763a68bd:"Tammikuu",s1e118319b5202c41:"Ma",s1e187019b5262aa6:"Touko",s281846ef0421c71f:"Marraskuu",s2ceb11be2290bb1b:"Peruuta",s307db9af9905317d:"Lomakkeen virheiden yhteenveto",s39938ecdae568740:"Syys",s3b8a6245b12fa2ad:"Murupolku",s407a88a592a0987c:"Elokuu",s46d6587089bd0356:"Seuraava kuukausi",s49730f3d5751a433:"Ladataan...",s5052d10b539eabf0:"Maalis",s58bfb494feb8eb02:x`${0} valittua`,s5d929ff1619ac0c9:"Hae",s5e8250fb85d64c23:"Sulje",s5febcd9b311c16fe:"Vieritä oikealle",s62931b2a50168976:"Edellinen kuukausi",s63d040e37887f17e:"Tänään",s6cfed919e21ac6ac:"To",s6d24cd19e23b8185:"Ti",s74aa0319e62b2eb7:"Ke",s7793b811d20184fe:"Joulukuu",s7fd3469f78111589:"Avaa pikavalikko",s83c436ed1bc16dfb:"Näytä lisää tietoja",s8ade4e9d5e804d6a:"Ensimmäinen saatavilla oleva päivämäärä",s9836b719fa8ef857:"La",s987ac119fac8d621:"Su",s9af3c72c33088826:x`On ${0} virhettä, jotka täytyy korjata ennen kuin voit jatkaa:`,sa6f2645578b2d2bc:"Vuosi",sa7cd5c2ff6d266e7:"Lokakuu",sb47daaf9e1c4a905:"Kuukausi",sb4f1dffbb6be6302:"Tyhjennä",sbc083a1dbee9af73:"Helmikuu",scb6b9cb49cf93277:"Huhti",sd898d99fd9c13de6:"Suodata saatavilla olevia vaihtoehtoja",sdc42f1da42d6411a:"Tyhjennä syöte",se0955919920ee87d:"Päivä",se4129fd6b9d7b4c2:"Viimeinen saatavilla oleva päivämäärä",sf295af199c723ec8:"Pe"},Qt=Object.freeze(Object.defineProperty({__proto__:null,templates:Yt},Symbol.toStringTag,{value:"Module"})),eo={s15a16ae9f99f19bf:"Juillet",s15a852e9f9a50fa5:"Juin",s17e3edbe032f79ec:"Ouvrir le calendrier modal",s1a2dda8f763a68bd:"Janvier",s1e118319b5202c41:"Lun",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"Novembre",s2ceb11be2290bb1b:"Annuler",s307db9af9905317d:"Résumé des erreurs du formulaire",s39938ecdae568740:"Septembre",s3b8a6245b12fa2ad:"Fil d'Ariane",s407a88a592a0987c:"Août",s46d6587089bd0356:"Mois suivant",s49730f3d5751a433:"Chargement...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:x`${0} sélectionné(s)`,s5d929ff1619ac0c9:"Rechercher",s5e8250fb85d64c23:"Fermer",s5febcd9b311c16fe:"Faire défiler à droite",s62931b2a50168976:"Mois précédent",s63d040e37887f17e:"Aujourd'hui",s6cfed919e21ac6ac:"Jeu",s6d24cd19e23b8185:"Mar",s74aa0319e62b2eb7:"Mer",s7793b811d20184fe:"Décembre",s7fd3469f78111589:"Ouvrir le menu contextuel",s83c436ed1bc16dfb:"Afficher plus d'informations",s8ade4e9d5e804d6a:"Première date disponible",s9836b719fa8ef857:"Sam",s987ac119fac8d621:"Dim",s9af3c72c33088826:x`Il y a ${0} erreur(s) à corriger avant de pouvoir continuer :`,sa6f2645578b2d2bc:"Année",sa7cd5c2ff6d266e7:"Octobre",sb47daaf9e1c4a905:"Mois",sb4f1dffbb6be6302:"Effacer",sbc083a1dbee9af73:"Février",scb6b9cb49cf93277:"Avril",sd898d99fd9c13de6:"Filtrer les options disponibles",sdc42f1da42d6411a:"Effacer la saisie",se0955919920ee87d:"Jour",se4129fd6b9d7b4c2:"Dernière date disponible",sf295af199c723ec8:"Ven"},so=Object.freeze(Object.defineProperty({__proto__:null,templates:eo},Symbol.toStringTag,{value:"Module"})),to={s15a16ae9f99f19bf:"Luglio",s15a852e9f9a50fa5:"Giugno",s17e3edbe032f79ec:"Apri la finestra del calendario",s1a2dda8f763a68bd:"Gennaio",s1e118319b5202c41:"Lun",s1e187019b5262aa6:"Maggio",s281846ef0421c71f:"Novembre",s2ceb11be2290bb1b:"Annulla",s307db9af9905317d:"Riepilogo degli errori del modulo",s39938ecdae568740:"Settembre",s3b8a6245b12fa2ad:"Percorso di navigazione",s407a88a592a0987c:"Agosto",s46d6587089bd0356:"Mese successivo",s49730f3d5751a433:"Caricamento...",s5052d10b539eabf0:"Marzo",s58bfb494feb8eb02:x`${0} selezionato`,s5d929ff1619ac0c9:"Cerca",s5e8250fb85d64c23:"Chiudi",s5febcd9b311c16fe:"Scorri a destra",s62931b2a50168976:"Mese precedente",s63d040e37887f17e:"Oggi",s6cfed919e21ac6ac:"Gio",s6d24cd19e23b8185:"Mar",s74aa0319e62b2eb7:"Mer",s7793b811d20184fe:"Dicembre",s7fd3469f78111589:"Apri il menu contestuale",s83c436ed1bc16dfb:"Mostra più informazioni",s8ade4e9d5e804d6a:"Prima data disponibile",s9836b719fa8ef857:"Sab",s987ac119fac8d621:"Dom",s9af3c72c33088826:x`Ci sono ${0} errori da correggere prima di poter continuare:`,sa6f2645578b2d2bc:"Anno",sa7cd5c2ff6d266e7:"Ottobre",sb47daaf9e1c4a905:"Mese",sb4f1dffbb6be6302:"Pulisci",sbc083a1dbee9af73:"Febbraio",scb6b9cb49cf93277:"Aprile",sd898d99fd9c13de6:"Filtra le opzioni disponibili",sdc42f1da42d6411a:"Pulisci il campo di input",se0955919920ee87d:"Giorno",se4129fd6b9d7b4c2:"Ultima data disponibile",sf295af199c723ec8:"Ven"},oo=Object.freeze(Object.defineProperty({__proto__:null,templates:to},Symbol.toStringTag,{value:"Module"})),ro={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Open kalenderpop-up",s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"Ma",s1e187019b5262aa6:"Mei",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Annuleren",s307db9af9905317d:"Formulierfoutoverzicht",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Kruimelpad",s407a88a592a0987c:"Augustus",s46d6587089bd0356:"Volgende maand",s49730f3d5751a433:"Laden...",s5052d10b539eabf0:"Maart",s58bfb494feb8eb02:x`${0} geselecteerd`,s5d929ff1619ac0c9:"Zoeken",s5e8250fb85d64c23:"Sluiten",s5febcd9b311c16fe:"Scroll rechts",s62931b2a50168976:"Vorige maand",s63d040e37887f17e:"Vandaag",s6cfed919e21ac6ac:"Do",s6d24cd19e23b8185:"Di",s74aa0319e62b2eb7:"Wo",s7793b811d20184fe:"December",s7fd3469f78111589:"Open contextmenu",s83c436ed1bc16dfb:"Toon meer informatie",s8ade4e9d5e804d6a:"Eerste beschikbare datum",s9836b719fa8ef857:"Za",s987ac119fac8d621:"Zo",s9af3c72c33088826:x`Er zijn ${0} fouten die gecorrigeerd moeten worden voordat je verder kunt gaan:`,sa6f2645578b2d2bc:"Jaar",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Maand",sb4f1dffbb6be6302:"Wis",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filter beschikbare opties",sdc42f1da42d6411a:"Wis invoer",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Laatste beschikbare datum",sf295af199c723ec8:"Vr"},no=Object.freeze(Object.defineProperty({__proto__:null,templates:ro},Symbol.toStringTag,{value:"Module"})),ao={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Åpne kalendermodal",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Man",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s307db9af9905317d:"Skjema feil oppsummering",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brødsmuler",s407a88a592a0987c:"August",s46d6587089bd0356:"Neste måned",s49730f3d5751a433:"Laster...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:x`${0} valgt`,s5d929ff1619ac0c9:"Søk",s5e8250fb85d64c23:"Lukk",s5febcd9b311c16fe:"Rull til høyre",s62931b2a50168976:"Forrige måned",s63d040e37887f17e:"I dag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tir",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"Desember",s7fd3469f78111589:"Åpne kontekstmeny",s83c436ed1bc16dfb:"Vis mer informasjon",s8ade4e9d5e804d6a:"Første tilgjengelige dato",s9836b719fa8ef857:"Lør",s987ac119fac8d621:"Søn",s9af3c72c33088826:x`Det er ${0} feil som må rettes før du kan fortsette:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Måned",sb4f1dffbb6be6302:"Rens",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filtrer tilgjengelige alternativer",sdc42f1da42d6411a:"Rens inputfelt",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Siste tilgjengelige dato",sf295af199c723ec8:"Fre"},io=Object.freeze(Object.defineProperty({__proto__:null,templates:ao},Symbol.toStringTag,{value:"Module"})),lo={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Öppna kalender",s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"Mån",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s307db9af9905317d:"Sammanfattning av formulärfel",s39938ecdae568740:"September",s3b8a6245b12fa2ad:"Brödsmulor",s407a88a592a0987c:"Augusti",s46d6587089bd0356:"Nästa månad",s49730f3d5751a433:"Laddar...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:x`${0} valda`,s5d929ff1619ac0c9:"Sök",s5e8250fb85d64c23:"Stäng",s5febcd9b311c16fe:"Scrolla höger",s62931b2a50168976:"Föregående månad",s63d040e37887f17e:"Idag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tis",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"Öppna meny",s83c436ed1bc16dfb:"Visa mer information",s8ade4e9d5e804d6a:"Första tillgängliga datum",s9836b719fa8ef857:"Lör",s987ac119fac8d621:"Sön",s9af3c72c33088826:x`Det finns ${0} fel att åtgärda innan du kan fortsätta:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Månad",sb4f1dffbb6be6302:"Rensa",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Sök i listan av val",sdc42f1da42d6411a:"Rensa text",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sista tillgängliga datum",sf295af199c723ec8:"Fre"},co=Object.freeze(Object.defineProperty({__proto__:null,templates:lo},Symbol.toStringTag,{value:"Module"})),rs=new Map([["sv",co],["no",io],["nl",no],["it",oo],["fr",so],["fi",Qt],["de",Kt],["da",Xt]]),go=({extraLocales:s,extraTemplates:e}={extraLocales:[],extraTemplates:new Map})=>{const t=[...Ht];for(const[o,n]of e)rs.set(o,n);for(const o of s)t.push(o);return Ls({sourceLocale:qt,targetLocales:t,loadLocale:async o=>{const n=rs.get(o);return n||Promise.reject(new Error(`Locale ${o} not found`))}})};Cs(as);Es();const tr={style:{name:"Change design version",defaultValue:"2023",toolbar:{icon:"lightning",items:["2016","2023"],showName:!0,dynamicTitle:!0}},language:{name:"Language",defaultValue:"en",toolbar:{icon:"globe",items:["en","sv","da","de","fi","fr","it","nl","no"],showName:!0,dynamicTitle:!0}}},{setLocale:fo}=go(),or={parameters:{docs:{page:Jt,transformSource:s=>{const e=s.match(/<gds-theme>([\s\S]*?)<\/gds-theme>/);return e?e[1]:s}},options:{storySort:{order:["Green Design System","Get started","What's what?","Docs","Components","Style",["Components","Layout","Media","Content","Style"],"Concepts",["Architecture"],"Contributing",["Introduction"]]}}},decorators:[(s,e)=>(fo(e.globals.language),setTimeout(()=>{const t=Array.from(document.querySelectorAll("tr")).find(n=>{var l;return(l=n.getAttribute("title"))==null?void 0:l.startsWith("Hide Declarative layout")}),o=t==null?void 0:t.querySelector('button[tabindex="0"]');o&&o.click()},10),Se`<gds-theme .designVersion=${e.globals.style}
        >${s()}</gds-theme
      >`)]};export{or as default,tr as globalTypes};
