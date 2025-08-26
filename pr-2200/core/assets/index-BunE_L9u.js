import{x as xs,a as Ks,i as w,r as x,E as As}from"./lit-element-Bx14lxc-.js";import{r as Ys,n as g}from"./Reflect-DJ7r0WLU.js";import{a as Ss}from"./query-p8xgzTDt.js";import{e as Qs,o as X}from"./if-defined-BAXgs-ZI.js";import{n as se}from"./when-BR7zwNJC.js";import{i as Gs,u as Ls,s as ee}from"./static-B8S6DEnV.js";import{e as te,i as oe,t as re}from"./directive-CF8sV3Lr.js";import{ag as O}from"./index-D4ozlNIy.js";import{o as ne}from"./unsafe-html-CYO4avEf.js";var ae=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,Rs=e=>{throw TypeError(e)},r=(e,s,t,o)=>{for(var n=o>1?void 0:o?ie(s,t):s,l=e.length-1,d;l>=0;l--)(d=e[l])&&(n=(o?d(s,t,n):d(n))||n);return o&&n&&ae(s,t,n),n},ws=(e,s,t)=>s.has(e)||Rs("Cannot "+t),a=(e,s,t)=>(ws(e,s,"read from private field"),t?t.call(e):s.get(e)),y=(e,s,t)=>s.has(e)?Rs("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),S=(e,s,t,o)=>(ws(e,s,"write to private field"),s.set(e,t),t),j=(e,s,t)=>(ws(e,s,"access private method"),t);const T="-34d53b";class ks{static get instance(){var s;return(s=globalThis.__gdsElementLookupTable)!=null&&s[T]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[T]:new Map}),globalThis.__gdsElementLookupTable[T]}}const L=(e,s)=>function(t){var o;return o=class extends t{constructor(){super(...arguments),this.gdsElementName=e}static define(){if(o.isDefined)return;const l=globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?e:e+T;customElements.get(l)||(o.isDefined=!0,ks.instance.set(e,l),customElements.define(l,o),s!=null&&s.dependsOn&&s.dependsOn.forEach(d=>d.define()))}},o.isDefined=!1,o},Ms=new WeakMap;function le(e,...s){let t=Ms.get(e);return t||(t=Ds(e),t.raw=Ds(e.raw),Ms.set(e,t)),[t,...s]}const Ds=e=>e.map(s=>{for(const[t,o]of ks.instance.entries())s=s.replace(new RegExp(`${t}(?![-a-z])`,"mg"),o);return s});function ce(e){return(s,...t)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return e(s,...t);const[o,...n]=le(s,...t);return e(o,...n)}}const Q=ce(xs);function de(e){return ks.instance.get(e)??e}function U(e){return de(e)}var E,rs,B,ns,I,$,V,as,R,Ws,J,js;class ge{constructor(s){y(this,R),y(this,E,!_s()),y(this,rs,!1),y(this,B,[]),y(this,ns,[]),y(this,I,new Map),y(this,$,new Map),y(this,V,[]),y(this,as,[]),this.host=s,this.host.addController(this)}hostConnected(){j(this,R,js).call(this)}has(s){return a(this,E)?a(this,$).has(s):a(this,I).has(s)}inject(s,t){j(this,R,Ws).call(this,s,t),j(this,R,J).call(this)}clear(s){a(this,E)?this.host.updateComplete.then(()=>{const t=a(this,$).get(s);t==null||t.remove(),a(this,$).delete(s)}):a(this,I).delete(s),j(this,R,J).call(this)}clearAll(){a(this,E)?this.host.updateComplete.then(()=>{a(this,$).forEach(s=>s.remove()),a(this,V).forEach(s=>s.remove()),a(this,$).clear(),S(this,V,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],a(this,I).clear(),S(this,B,[]))}clearInitial(){a(this,E)?this.host.updateComplete.then(()=>{a(this,V).forEach(s=>s.remove()),S(this,V,[])}):S(this,B,[]),j(this,R,J).call(this)}restoreInitial(){a(this,E)?a(this,as).forEach(s=>{a(this,V).push(s.cloneNode(!0))}):S(this,B,[...a(this,ns)]),j(this,R,J).call(this)}}E=new WeakMap;rs=new WeakMap;B=new WeakMap;ns=new WeakMap;I=new WeakMap;$=new WeakMap;V=new WeakMap;as=new WeakMap;R=new WeakSet;Ws=function(e,s){if(a(this,E)){let t=a(this,$).get(e);t||(t=document.createElement("style"),a(this,$).set(e,t)),t.textContent=s.cssText}else{if(!this.host.shadowRoot||!s.styleSheet)return;a(this,I).set(e,s.styleSheet)}};J=function(){if(a(this,E))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(e=>{e.remove()}),a(this,V).forEach(e=>{var s;(s=this.host.shadowRoot)==null||s.appendChild(e)}),a(this,$).forEach(e=>{var s;(s=this.host.shadowRoot)==null||s.appendChild(e)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...a(this,B),...Array.from(a(this,I).values())]}};js=function(){a(this,rs)||(a(this,E)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(e=>{a(this,V).push(e),a(this,as).push(e.cloneNode(!0))})}):this.host.shadowRoot&&a(this,B).length===0&&(S(this,B,[...this.host.shadowRoot.adoptedStyleSheets||[]]),S(this,ns,[...a(this,B)])),S(this,rs,!0))};function _s(){try{return new CSSStyleSheet,!0}catch{return!1}}function Vs(e){return e.split("-").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join("")}class F extends Ks{constructor(){super(),this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new ge(this)}static define(){}connectedCallback(){var s;super.connectedCallback(),this.setAttribute("gds-element",((s=this.gdsElementName)==null?void 0:s.toString())||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(s,t){const o={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new Event(s,o)),this.dispatchEvent(new Event(Vs(s),o))].every(n=>n!==!1)}dispatchCustomEvent(s,t={}){const o={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new CustomEvent(s,o)),this.dispatchEvent(new CustomEvent(Vs(s),o))].every(n=>n!==!1)}}F.isDefined=!1;F.styleExpressionBaseSelector=":host";r([Ys()],F.prototype,"_isUsingTransitionalStyles",2);const Ps=`/**
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
  --gds-sys-radius-max: 999px;`,ss=`/**
 * Do not edit directly, this file was auto-generated.
 */


  color-scheme: dark;
  --gds-sys-color-l1-neutral-01: #0a0b0b;
  --gds-sys-color-l1-neutral-02: #282a29;
  --gds-sys-color-l1-brand-01: #003824;
  --gds-sys-color-l1-inversed: #ffffff;
  --gds-sys-color-l2-neutral-01: #191a1a;
  --gds-sys-color-l2-neutral-02: #191a1a;
  --gds-sys-color-l2-neutral-03: #3b3f3e;
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
  --gds-sys-color-l3-neutral-01: #d5d7d7;
  --gds-sys-color-l3-neutral-02: #282a29;
  --gds-sys-color-l3-neutral-03: #3b3f3e;
  --gds-sys-color-l3-neutral-04: #3b3f3e;
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
  --gds-sys-color-content-neutral-01: #f7f8f7;
  --gds-sys-color-content-neutral-02: #abb0ae;
  --gds-sys-color-content-neutral-03: #0a0b0b;
  --gds-sys-color-content-neutral-04: #595f5d;
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
  --gds-sys-color-state-warning-06: #f19e38 20%;`,fs=`/**
 * Do not edit directly, this file was auto-generated.
 */


  color-scheme: light;
  --gds-sys-color-l1-neutral-01: #ffffff;
  --gds-sys-color-l1-neutral-02: #eaebeb;
  --gds-sys-color-l1-brand-01: #003824;
  --gds-sys-color-l1-inversed: #0a0b0b;
  --gds-sys-color-l2-neutral-01: #f7f8f7;
  --gds-sys-color-l2-neutral-02: #ffffff;
  --gds-sys-color-l2-neutral-03: #0a0b0b;
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
  --gds-sys-color-l3-neutral-01: #0a0b0b;
  --gds-sys-color-l3-neutral-02: #eaebeb;
  --gds-sys-color-l3-neutral-03: #d5d7d7;
  --gds-sys-color-l3-neutral-04: #ffffff;
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
  --gds-sys-color-content-neutral-01: #0a0b0b;
  --gds-sys-color-content-neutral-02: #636967;
  --gds-sys-color-content-neutral-03: #ffffff;
  --gds-sys-color-content-neutral-04: #a0a6a4;
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
  --gds-sys-color-state-warning-06: #8f530a 16%;`,Fs=`/**
 * Do not edit directly, this file was auto-generated.
 */

  --gds-sys-shadow-s-01: 0px 0px 2px 0px #060D1314;
  --gds-sys-shadow-s-02: 0px 0px 0px 0px transparent;
  --gds-sys-shadow-m-01: 0px 4px 8px -2px #060D131a;
  --gds-sys-shadow-m-02: 0px 2px 4px -2px #060D130f;
  --gds-sys-shadow-l-01: 0px 20px 24px -4px #060D1314;
  --gds-sys-shadow-l-02: 0px 8px 8px -4px #060D1308;
  --gds-sys-shadow-xl-01: 0px 24px 48px -12px #060D132e;
  --gds-sys-shadow-xl-02: 0px 0px 0px 0px transparent;`;var pe={};const ds=typeof process<"u"&&pe!==void 0;var hs,is,ls,Cs,es,qs,Is;function ye(){return ds?[]:document.adoptedStyleSheets||[]}const fe=class Os{constructor(){y(this,es),y(this,hs,!_s()),y(this,is,new Map),y(this,ls,new Map),y(this,Cs,ye())}static get instance(){var s;return(s=globalThis.__gdsGlobalStylesRegistryScoped)!=null&&s[T]||(globalThis.__gdsGlobalStylesRegistryScoped={...globalThis.__gdsGlobalStylesRegistryScoped,[T]:new Os}),globalThis.__gdsGlobalStylesRegistryScoped[T]}injectGlobalStyles(s,t){if(a(this,hs)){const o=Array.isArray(t)?t.map(n=>n.toString()).join(""):t.toString();j(this,es,qs).call(this,s,o)}else t.styleSheet&&j(this,es,Is).call(this,s,t.styleSheet)}};hs=new WeakMap;is=new WeakMap;ls=new WeakMap;Cs=new WeakMap;es=new WeakSet;qs=function(e,s){if(ds)return;let t=a(this,ls).get(e);t||(t=document.createElement("style"),a(this,ls).set(e,t)),t.textContent=s,document.head.appendChild(t)};Is=function(e,s){ds||(a(this,is).set(e,s),document.adoptedStyleSheets=[...a(this,Cs),...Array.from(a(this,is).values())])};let he=fe;const q=[w`
    :host {
      ${x(Ps)}
      ${x(Fs)}
    }
  `];he.instance.injectGlobalStyles("root-tokens",w`
    :root,
    :root[gds-theme='light'] {
      ${x(Ps)}
      ${x(Fs)}
      ${x(fs)}
    }
    :root[gds-theme='dark'] {
      ${x(ss)}
    }
  `);const ue=w`
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
`;var be=ue;let K=class extends F{constructor(){super(...arguments),this.onmousedown=e=>{const t=e.target.getBoundingClientRect(),o=this._rippleEl;o&&(o.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-t.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-t.left}px`),setTimeout(()=>{o.classList.add("gds-ripple-effect")},20))}}render(){return xs`<div></div>`}};K.styles=[q,be];r([Ss("div")],K.prototype,"_rippleEl",2);K=r([L("gds-ripple")],K);var ts,os,us;const ve=class Us{constructor(){y(this,ts,new Map),y(this,os,new Map),y(this,us,!_s())}static get instance(){var s;return(s=globalThis.__gdsTransitionalStyles)!=null&&s[T]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[T]:new Us}),globalThis.__gdsTransitionalStyles[T]}apply(s,t){if(!s.shadowRoot)return;const o=a(this,ts).get(t);o&&(a(this,os).set(t,s),this.applyToElement(t,o))}applyToElement(s,t){var D,p;const o=a(this,os).get(s);if(!o||!o.shadowRoot)return;const n=()=>{o._dynamicStylesController.clearInitial(),o._dynamicStylesController.inject("t-styles",x(t)),o._isUsingTransitionalStyles=!0},l=()=>{o._isUsingTransitionalStyles=!1,o._dynamicStylesController.clear("t-styles"),o._dynamicStylesController.restoreInitial()},d="[gds-element=gds-theme]";let f=o.getRootNode(),v=o.closest(d);for(;v===null&&f!==document;)v=(D=f.host)==null?void 0:D.closest(d),f=(p=f.host)==null?void 0:p.getRootNode();if(v){const b=v,_=()=>{b.designVersion==="2023"?l():n()};if(b.addEventListener("gds-design-version-changed",_),o.addEventListener("gds-element-disconnected",()=>b.removeEventListener("gds-design-version-changed",_)),b.designVersion==="2023"){l();return}}n()}register(s,t){let o=t;a(this,us)&&(o=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${t}`),a(this,ts).set(s,o),this.applyToElement(s,o)}};ts=new WeakMap;os=new WeakMap;us=new WeakMap;let Ns=ve;function Es(e,s){const t={waitUntilFirstUpdate:!1,...s};return(o,n,l)=>{const{update:d}=o,f=Array.isArray(e)?e:[e];o.update=function(v){f.forEach(D=>{var b;const p=D;if(v.has(p)){const _=v.get(p),H=this[p];_!==H&&(!t.waitUntilFirstUpdate||this.hasUpdated)&&((b=l.value)==null||b.call(this,_,H))}}),d.call(this,v)}}}function me(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(s,t,o)=>{let n;const l=s.connectedCallback,d=s.disconnectedCallback;s.connectedCallback=function(){l==null||l.call(this);const f=(v,D)=>{var p;(p=o.value)==null||p.call(this)};n=new MutationObserver(f),n.observe(this,e)},s.disconnectedCallback=function(){d==null||d.call(this),n.disconnect()}}}const xe={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},Se=/^([<|>]=?)?([0-9a-z]+)/,Hs=["{","}",";",":",","],Bs=[" ","/n"];function we(e=""){const s=[];let t="";for(let o=0;o<e.length;o++){const n=e[o];if(Bs.includes(n)||(t+=n),Hs.includes(n)){s.push(t.slice(0,-1)),s.push(n),t="";continue}if(Bs.includes(n)||o===e.length-1){s.push(t),t="";continue}}return s.filter(o=>o!=="")}function ke(e){const s=[];let t={breakpoint:"-",values:[]};const o=()=>({sel:"",values:[]});let n=o();for(const l of e){if(!Hs.includes(l)){n.values.push(l);continue}if(l==="{"&&(t={breakpoint:n.values.join(","),values:[]},n=o()),l===";"&&(s.length===0&&s.push(t),n.values.length>0&&(t.values.push(n),n=o())),l===":"){const d=n.values.pop()??"";n.sel=d}t&&l==="}"&&(t.values.push(n),n=o(),s.push(t))}return n.values.length>0&&t.values.push(n),s.length===0&&s.push(t),s}function _e(e){return e.split(",").map(t=>{const o=t.trim().match(Se);if(!o)throw new Error(`Invalid breakpoint specifier: ${t}`);return{condition:o[1],value:o[2]}})}function Ce(e,s,t,o=l=>l,n=(l,d)=>`${l}: ${d.join(" ")};`){let l="";for(const d of t){const D=`@media ${(d.breakpoint==="-"?[{condition:">=",value:"0"}]:_e(d.breakpoint)).map(p=>{var b;return`(${(b=p.condition)!=null&&b.includes("<")?"max-width":"min-width"}: ${xe[p.value]??p.value})`}).join(" and ")} {${d.values.map(p=>{let b=e;p.sel.length>0&&(b=e===":host"?`:host(:${p.sel})`:`${e}:${p.sel}`);const _=n(s,p.values.map(o));return p.sel==="hover"?`@media (hover: hover) {${b}{${_}}}`:`${b}{${_}}`}).join("")}}`;l+=D}return l}const ps=new Map;function i(e){return(s,t)=>{const o=(e==null?void 0:e.property)??String(t),n=e==null?void 0:e.valueTemplate,l=e==null?void 0:e.styleTemplate,d=(e==null?void 0:e.cacheOverrideKey)??"0";g({attribute:e==null?void 0:e.attribute,noAccessor:!0})(s,t),Object.defineProperty(s,t,{get:function(){return this["__"+String(t)]},set:async function(f){if(!f)return;this["__"+String(t)]=f,await this.updateComplete;const v=(e==null?void 0:e.selector)??this.constructor.styleExpressionBaseSelector,D=this.level??"0",p=v+o+f+D+d;if(ps.has(p)){this._dynamicStylesController.inject(`sep_${String(t)}`,ps.get(p));return}const b=ke(we(f)),_=Ce(v,o,b,n==null?void 0:n.bind(this),l==null?void 0:l.bind(this)),H=x(_);ps.set(p,H),this._dynamicStylesController.inject(`sep_${String(t)}`,H)}})}}class Ee extends oe{constructor(s){if(super(s),s.type!==re.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(s){return As}update(s,[t]){var l;const o=s.element,n=(l=s.options)==null?void 0:l.host;Array.from(n.attributes).forEach(d=>{t(d)&&o.setAttribute(d.name.replace("gds-",""),d.value)})}}const $e=te(Ee),zs=new WeakMap;function Te(e){return(s,...t)=>{let o=zs.get(s);return o||(o=s.map(n=>n.replace(/\n[\s]+</gm,"<")),o.raw=s.raw,zs.set(s,o)),e(o,...t)}}function Xs(e,s,t){if(e==="transparent"||e==="currentColor"||e==="inherit")return e;const[o,n]=e.split("/");let l;return t&&s==="background"?l=`var(--gds-sys-color-l${t}-${o})`:l=`var(--gds-sys-color-${s}-${o})`,n?`color-mix(in srgb, ${l} ${parseFloat(n)*100}%, transparent 0%)`:l}function gs(e){return{valueTemplate:function(s){return Xs(s,e,this.level)}}}const N={valueTemplate:e=>`var(--gds-sys-space-${e}, 0)`},m={valueTemplate:e=>`var(--gds-sys-space-${Ge(e)}, ${e})`},ys={valueTemplate:e=>{const t=(e.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${e})`:`calc(var(--gds-sys-space-${e.substring(1)}) * -1)`;return e==="auto"?"auto":t},styleTemplate:(e,s)=>{const t=f=>f==="auto"?"auto":`${f}`,o=t(s[0]),n=s.length>1?t(s[1]):o,l=s.length>2?t(s[2]):o,d=s.length>3?t(s[3]):n;return`${e}: ${o} ${n} ${l} ${d};`}};function Ge(e){return e.replace(/[^a-zA-Z0-9-]/g,"")}function Js(e){class s extends e{}return r([i(m)],s.prototype,"width",2),r([i(m)],s.prototype,"min-width",2),r([i(m)],s.prototype,"max-width",2),r([i(m)],s.prototype,"inline-size",2),r([i(m)],s.prototype,"min-inline-size",2),r([i(m)],s.prototype,"max-inline-size",2),s}function Me(e){class s extends e{}return r([i(m)],s.prototype,"height",2),r([i(m)],s.prototype,"min-height",2),r([i(m)],s.prototype,"max-height",2),r([i(m)],s.prototype,"block-size",2),r([i(m)],s.prototype,"min-block-size",2),r([i(m)],s.prototype,"max-block-size",2),s}function $s(e){class s extends e{}return r([i(ys)],s.prototype,"margin",2),r([i(ys)],s.prototype,"margin-inline",2),r([i(ys)],s.prototype,"margin-block",2),s}function De(e){class s extends e{}return r([i(N)],s.prototype,"padding",2),r([i(N)],s.prototype,"padding-inline",2),r([i(N)],s.prototype,"padding-block",2),s}function Ts(e){class s extends e{}return r([i()],s.prototype,"align-self",2),r([i()],s.prototype,"justify-self",2),r([i()],s.prototype,"place-self",2),r([i()],s.prototype,"grid-column",2),r([i()],s.prototype,"grid-row",2),r([i()],s.prototype,"grid-area",2),r([i()],s.prototype,"flex",2),r([i()],s.prototype,"order",2),s}function Ve(e){class s extends e{}return r([i()],s.prototype,"position",2),r([i()],s.prototype,"transform",2),r([i()],s.prototype,"inset",2),s}ds||function(e){if(typeof e.requestSubmit=="function")return;e.requestSubmit=function(o=null){o?(s(o,this),o.click()):(o=document.createElement("input"),o.type="submit",o.hidden=!0,this.appendChild(o),o.click(),this.removeChild(o))};function s(o,n){o instanceof HTMLElement||t(TypeError,"parameter 1 is not of type 'HTMLElement'"),o.type=="submit"||t(TypeError,"The specified element is not a submit button"),o.form==n||t(DOMException,"The specified element is not owned by this form element","NotFoundError")}function t(o,n,l="Error"){throw new o("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+n+".",l)}}(HTMLFormElement.prototype);var h;class k extends F{constructor(){super(),y(this,h),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{S(this,h,this.attachInternals())}catch{S(this,h,{form:this.closest("form"),setFormValue:t=>{this._internalValue=t},setValidity:(t,o)=>{a(this,h).validity=t,this.errorMessage=o||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:this.checkValidity.bind(this),reportValidity:this.reportValidity.bind(this)})}}connectedCallback(){if(super.connectedCallback(),typeof this.attachInternals!="function"){const s=this.closest("form");s&&(s.addEventListener("submit",this._handleFormSubmit.bind(this)),s.addEventListener("reset",this.formResetCallback.bind(this)))}}set invalid(s){const t=this.invalid;a(this,h).setValidity({...a(this,h).validity,customError:s,valid:!s},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",t),a(this,h).checkValidity()}get invalid(){return!a(this,h).validity.valid}get value(){return this._internalValue}set value(s){this._internalValue=s,a(this,h).setFormValue(s)}get form(){return a(this,h).form}get validity(){return a(this,h).validity}get validationMessage(){return a(this,h).validationMessage}get willValidate(){return a(this,h).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const t=this.invalid,o=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=o[1]||this.errorMessage,a(this,h).setValidity(o[0],o[1],this._getValidityAnchor()),t!==this.invalid&&(this.requestUpdate("invalid",t),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),a(this,h).checkValidity()}reportValidity(){return a(this,h).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){typeof this.value=="string"?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(s){s==null||s.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(s){this.checkValidity(),this.validity.valid||s.preventDefault()}}h=new WeakMap;k.formAssociated=!0;r([g({attribute:!1})],k.prototype,"validator",2);r([g({type:Boolean})],k.prototype,"required",2);r([g({attribute:"error-message"})],k.prototype,"errorMessage",2);r([g({type:Boolean,reflect:!0})],k.prototype,"invalid",1);r([g()],k.prototype,"label",2);r([g()],k.prototype,"value",1);r([g({reflect:!0})],k.prototype,"name",2);r([g({type:Boolean,reflect:!0})],k.prototype,"disabled",2);r([Es("value",{waitUntilFirstUpdate:!0})],k.prototype,"__handleValueChange",1);const Be=w`
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
      background-color: var(--gds-sys-color-l3-neutral-01);
      color: var(--gds-sys-color-content-neutral-03);
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
        outline-color: var(--gds-sys-color-content-neutral-01);

        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-neutral-01),
            var(--gds-sys-color-state-neutral-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-01),
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
      background-color: var(--gds-sys-color-l3-neutral-02);
      color: var(--gds-sys-color-content-neutral-01);

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-neutral-02),
            var(--gds-sys-color-state-neutral-03)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-02),
          var(--gds-sys-color-state-neutral-04)
        );
      }
    }

    :host([rank*='tertiary']) .button {
      background-color: transparent;
      color: var(--gds-sys-color-content-neutral-01);

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
        background-color: var(--gds-sys-color-l3-neutral-02);
        color: var(--gds-sys-color-content-neutral-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l3-neutral-02),
              var(--gds-sys-color-state-brand-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-neutral-02),
            var(--gds-sys-color-state-brand-04)
          );
        }
      }

      &.tertiary {
        background-color: transparent;
        color: var(--gds-sys-color-content-neutral-01);

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
      color: var(--gds-sys-color-content-neutral-03);

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
`;var ze=Be,Z,C,W,Zs,bs,vs;const Ae=["aria-label","aria-haspopup","aria-expanded"],Le=Te(Q);class u extends k{constructor(){super(...arguments),y(this,C),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",y(this,Z,!1),y(this,bs,()=>{var t;const s=((t=this._mainSlot)==null?void 0:t.assignedElements())??[];S(this,Z,s.length===1&&(s[0].tagName.toLowerCase().startsWith("gds-icon")||s[0].getAttribute("name")==="icon")),this.requestUpdate()}),y(this,vs,s=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:s}),this.form&&!a(this,C,W)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),Ns.instance.apply(this,"gds-button")}focus(s){var t;(t=this._getValidityAnchor())==null||t.focus(s)}render(){const s={button:!0,circle:a(this,Z),icon:a(this,Z),xs:this.size==="xs",small:this.size==="small",large:this.size==="large",brand:this.variant==="brand",positive:this.variant==="positive",negative:this.variant==="negative",notice:this.variant==="notice",warning:this.variant==="warning",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},t=a(this,C,W)?Gs`a`:Gs`button`;return Ls`
      <${t}
        class=${Qs(s)}
        type="${X(a(this,C,W)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||As}
        href=${X(a(this,C,W)?this.href:void 0)}
        target=${X(a(this,C,W)?this.target:void 0)}
        rel=${X(a(this,C,W)?this.rel||a(this,C,Zs):void 0)}
        download=${X(a(this,C,W)?this.download:void 0)}
        part="_button"
        @click="${a(this,vs)}"
        ${$e(o=>o.name.startsWith("gds-aria")||o.name==="gds-role"||Ae.includes(o.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${a(this,bs)}></slot>
        <slot name="trail"></slot>
        ${se(!this._isUsingTransitionalStyles,()=>Le`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${t}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}}Z=new WeakMap;C=new WeakSet;W=function(){return this.href.length>0};Zs=function(){return this.target==="_blank"?"noreferrer noopener":void 0};bs=new WeakMap;vs=new WeakMap;u.styles=[q,ze];u.shadowRootOptions={mode:"open",delegatesFocus:!0};r([g({type:Boolean,reflect:!0})],u.prototype,"disabled",2);r([i({selector:".button"})],u.prototype,"justify-content",2);r([g({reflect:!0})],u.prototype,"type",2);r([g({reflect:!0})],u.prototype,"rank",2);r([g({reflect:!0})],u.prototype,"variant",2);r([g({reflect:!0})],u.prototype,"size",2);r([g()],u.prototype,"label",2);r([g()],u.prototype,"href",2);r([g()],u.prototype,"target",2);r([g()],u.prototype,"rel",2);r([g()],u.prototype,"download",2);r([Ss("slot:not([name])")],u.prototype,"_mainSlot",2);r([Ss(".button")],u.prototype,"_button",2);r([me({attributes:!0,childList:!1,subtree:!1,characterData:!1})],u.prototype,"_attributeChanged",1);let ms=class extends Js($s(Ts(u))){};ms=r([L("gds-button",{dependsOn:[K]})],ms);const Re=w`
  :host {
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
  :host(:focus-visible) {
    outline-color: color-mix(in srgb, currentcolor, #000 100%);
    outline-offset: var(--gds-sys-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-sys-space-3xs);
  }
`;var We=Re;let c=class extends Js(Me($s(De(Ts(Ve(F)))))){constructor(){super(...arguments),this.level="2"}render(){return Q`<slot></slot>`}};c.styles=[q,We];r([i()],c.prototype,"display",2);r([g()],c.prototype,"level",2);r([i(gs("content"))],c.prototype,"color",2);r([i(gs("background"))],c.prototype,"background",2);r([i({styleTemplate:function(e,s){const t=this,[o,n=t["border-style"]||"solid",l=t["border-color"]||"subtle-01"]=s,d=`var(--gds-sys-space-${o})`,f=Xs(l,"border",t.level);return`border: ${d} ${n} ${f};`}})],c.prototype,"border",2);r([i(gs("border"))],c.prototype,"border-color",2);r([i(N)],c.prototype,"border-width",2);r([i()],c.prototype,"border-style",2);r([i(N)],c.prototype,"border-radius",2);r([i({valueTemplate:e=>`var(--gds-sys-shadow-${e}-01), var(--gds-sys-shadow-${e}-02)`})],c.prototype,"box-shadow",2);r([i()],c.prototype,"opacity",2);r([i()],c.prototype,"overflow",2);r([i()],c.prototype,"box-sizing",2);r([i()],c.prototype,"z-index",2);r([i({styleTemplate:(e,s)=>`font: var(--gds-sys-text-${s[0]});`})],c.prototype,"font",2);r([i({valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],c.prototype,"font-weight",2);r([i()],c.prototype,"text-align",2);r([i()],c.prototype,"text-wrap",2);r([i()],c.prototype,"overflow-wrap",2);r([i()],c.prototype,"white-space",2);r([i({...N,styleTemplate:(e,s)=>{const t=s[0],o=s[1]||t;return`gap: ${t} ${o};`},cacheOverrideKey:"flex"})],c.prototype,"gap",2);r([i()],c.prototype,"align-items",2);r([i()],c.prototype,"align-content",2);r([i()],c.prototype,"justify-content",2);r([i()],c.prototype,"justify-items",2);r([i()],c.prototype,"flex-direction",2);r([i()],c.prototype,"flex-wrap",2);r([i()],c.prototype,"place-items",2);r([i()],c.prototype,"place-content",2);c=r([L("gds-div")],c);let Y=class extends c{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return Q`<slot></slot>`}};Y.styles=[q,w`
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
    `];r([i({styleTemplate:function(e,s){let t,o,n;switch(s[0]){case"primary":t="transparent",o=`var(--gds-sys-color-l${this.level}-neutral-01)`,n="var(--gds-sys-color-content-neutral-01)";break;case"secondary":t="var(--gds-sys-color-border-subtle-01)",o=`var(--gds-sys-color-l${this.level}-neutral-02)`,n="var(--gds-sys-color-content-neutral-01)";break;case"brand-01":t="transparent",o=`var(--gds-sys-color-l${this.level}-brand-01)`,n="var(--gds-sys-color-content-inversed)";break;case"brand-02":t="transparent",o=`var(--gds-sys-color-l${this.level}-brand-02)`,n="var(--gds-sys-color-content-brand-02)";break;case"positive":case"negative":case"warning":case"information":case"notice":t=`var(--gds-sys-color-border-${s[0]}-02)`,o=`var(--gds-sys-color-l${this.level}-${s[0]}-01)`,n=`var(--gds-sys-color-content-${s[0]}-01)`;break;default:t="transparent",o=`var(--gds-sys-color-l${this.level}-neutral-01)`,n="var(--gds-sys-color-content-neutral-01)";break}return`
      --_border-color: ${t};
      --_background-color: ${o};
      --_color: ${n};
      `}})],Y.prototype,"variant",2);Y=r([L("gds-card")],Y);const je=w`
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
`;var Pe=je;class M extends $s(Ts(F)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.label=""}get svgAttributes(){const t={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:this.constructor._viewBox,part:"icon"};return this.label?{...t,"aria-label":this.label}:{...t,role:"presentation"}}get svgContent(){const s=this.constructor;return this.solid?s._solidSVG:s._regularSVG}applyStroke(s){return this.stroke?s.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):s}generateAttributesString(s){return Object.entries(s).filter(([t,o])=>o!==void 0).map(([t,o])=>`${t}="${o}"`).join(`
      `)}render(){const s=this.svgAttributes;let t=this.svgContent||"";this.stroke&&(t=this.applyStroke(t));const o=`
      <svg ${this.generateAttributesString(s)}>
        ${t}
      </svg>
    `;return xs`${ne(o)}`}}M.styles=[q,Pe];r([i({...m,property:"height",selector:"svg"})],M.prototype,"size",2);r([g({type:Boolean})],M.prototype,"solid",2);r([g({type:Number})],M.prototype,"stroke",2);r([g()],M.prototype,"level",2);r([i(gs("content"))],M.prototype,"color",2);r([g({type:String})],M.prototype,"label",2);M.define();const Fe=w`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
`;var qe=Fe;let cs=class extends c{render(){return Q`<slot></slot>`}};cs.styles=[q,qe];cs=r([L("gds-flex")],cs);const rt=e=>{ms.define();const s=U("gds-button"),t={...e,class:e.className};return O.createElement(s,t)},nt=e=>{Y.define();const s=U("gds-card"),t={...e,class:e.className};return O.createElement(s,t)};let z=class extends M{};z._regularSVG='<path d="M20.7999 7C17.0999 7 13.8999 9.1 12.1999 12.2C11.9999 10.2 11.1999 8.4 10.0999 6.8C8.69995 4.7 6.59995 3.1 4.29995 2.2L3.69995 2L3.49995 2.5C2.59995 3.9 2.09995 5.5 1.99995 7.2C1.89995 8.9 2.29995 10.5 2.99995 12.1C3.69995 13.6 4.79995 14.9 6.19995 15.8C7.49995 16.8 9.09995 17.4 10.6999 17.5C10.3999 19 9.99995 21 9.99995 21V21.1C9.99995 21.2 9.99995 21.2 10.0999 21.3C10.0999 21.3 10.0999 21.4 10.1999 21.4C10.2999 21.4 10.2999 21.4 10.3999 21.4H11.4999C11.5999 21.4 11.6999 21.4 11.7999 21.4C11.8999 21.3 11.8999 21.2 11.8999 21.1C11.8999 21.1 12.0999 18.8 12.1999 17.6C17.2999 17.3 21.3999 13 21.3999 7.7V7H20.7999ZM3.29995 7.7C3.29995 6.3 3.69995 4.9 4.29995 3.7C8.39995 5.5 11.0999 9.6 11.0999 14.1C11.0999 14.8 10.9999 15.5 10.8999 16.2C8.79995 16 6.89995 15 5.49995 13.4C4.09995 11.9 3.29995 9.8 3.29995 7.7ZM12.3999 16.2C12.6999 12.1 15.9999 8.7 20.0999 8.4C19.7999 12.6 16.4999 15.9 12.3999 16.2Z" fill="currentColor"/>';z._solidSVG='<path d="M20.8 7C17.1 7 13.9 9.1 12.2 12.2C12 10.2 11.2 8.4 10.1 6.8C8.70001 4.7 6.60001 3.1 4.30001 2.2L3.70001 2L3.50001 2.5C2.60001 3.9 2.10001 5.5 2.00001 7.2C1.90001 8.9 2.30001 10.5 3.00001 12.1C3.70001 13.6 4.80001 14.9 6.20001 15.8C7.50001 16.8 9.10001 17.4 10.7 17.5C10.4 19 10 21 10 21V21.1C10 21.2 10 21.2 10.1 21.3C10.1 21.3 10.1 21.4 10.2 21.4C10.3 21.4 10.3 21.4 10.4 21.4H11.5C11.6 21.4 11.7 21.4 11.8 21.4C11.9 21.3 11.9 21.2 11.9 21.1C11.9 21.1 12.1 18.8 12.2 17.6C17.3 17.3 21.4 13 21.4 7.7V7H20.8Z" fill="currentColor"/>';z._name="brand-green";z._width=24;z._height=24;z._viewBox="0 0 24 24";z=r([L("gds-icon-brand-green")],z);let A=class extends M{};A._regularSVG='<path d="M9.25 3.75H3.75V20.25H20.25V14.75M13.75 3.75H20.25M20.25 3.75V10.25M20.25 3.75L11 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';A._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H9.25C9.66421 3 10 3.33579 10 3.75C10 4.16421 9.66421 4.5 9.25 4.5H4.5V19.5H19.5V14.75C19.5 14.3358 19.8358 14 20.25 14C20.6642 14 21 14.3358 21 14.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75ZM13 3.75C13 3.33579 13.3358 3 13.75 3H20.25C20.6642 3 21 3.33579 21 3.75V10.25C21 10.6642 20.6642 11 20.25 11C19.8358 11 19.5 10.6642 19.5 10.25V5.56066L11.5303 13.5303C11.2374 13.8232 10.7626 13.8232 10.4697 13.5303C10.1768 13.2374 10.1768 12.7626 10.4697 12.4697L18.4393 4.5H13.75C13.3358 4.5 13 4.16421 13 3.75Z" fill="currentColor"/>';A._name="square-arrow-top-right";A._width=24;A._height=24;A._viewBox="0 0 24 24";A=r([L("gds-icon-square-arrow-top-right")],A);const Ie=w`
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
`,Oe=w`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var Ue=Oe;let G=class extends c{constructor(){super(...arguments),this.tag="span"}render(){const s=ee(encodeURI(this.tag));return Ls`<${s} tag><slot></slot></${s}>`}};G.styles=[q,Ie,Ue];r([g({type:String})],G.prototype,"tag",2);r([i({selector:"[tag]",styleTemplate:(e,s)=>`font: var(--gds-sys-text-${s[0]});`})],G.prototype,"font",2);r([i({selector:"[tag]",valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],G.prototype,"font-weight",2);r([i()],G.prototype,"text-transform",2);r([i({selector:"[tag]"})],G.prototype,"text-decoration",2);r([i({selector:"[tag]",styleTemplate:(e,s)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${s[0]};
      -webkit-box-orient: vertical;`})],G.prototype,"lines",2);G=r([L("gds-text")],G);let P=class extends F{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2023"}connectedCallback(){super.connectedCallback(),Ns.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",x(`:host {${ss}}`))}render(){return Q`<slot></slot>`}_onColorSchemeChange(){switch(this.colorScheme){case"dark":this._dynamicStylesController.inject("color-scheme",x(`:host { ${ss}}`));break;case"light":this._dynamicStylesController.inject("color-scheme",x(`:host { ${fs}}`));break;case"auto":default:this._dynamicStylesController.inject("color-scheme",x(`:host { ${fs}} @media (prefers-color-scheme: dark) { :host { ${ss} } }`));break}this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}_onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}};P.styles=[q,w`
      :host {
        display: contents;
        color: var(--gds-sys-color-content-neutral-01);
      }
    `];r([g({reflect:!0,attribute:"color-scheme"})],P.prototype,"colorScheme",2);r([g({reflect:!0,attribute:"design-version"})],P.prototype,"designVersion",2);r([Es("colorScheme")],P.prototype,"_onColorSchemeChange",1);r([Es("designVersion")],P.prototype,"_onDesignVersionChange",1);P=r([L("gds-theme")],P);const dt=e=>{cs.define();const s=U("gds-flex"),t={...e,class:e.className};return O.createElement(s,t)},gt=e=>{G.define();const s=U("gds-text"),t={...e,class:e.className};return O.createElement(s,t)},pt=e=>{P.define();const s=U("gds-theme"),t={...e,class:e.className};return O.createElement(s,t)},yt=e=>{z.define();const s=U("gds-icon-brand-green"),t={...e,class:e.className};return O.createElement(s,t)},ft=e=>{A.define();const s=U("gds-icon-square-arrow-top-right"),t={...e,class:e.className};return O.createElement(s,t)};export{M as G,yt as I,Ns as T,r as _,Js as a,Ts as b,y as c,a as d,F as e,U as f,L as g,pt as h,dt as i,gt as j,rt as k,nt as l,ft as m,Q as n,S as o,j as p,Es as q,c as r,i as s,q as t,$s as w};
