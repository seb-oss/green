import{x as ms,a as Ys,i as w,r as S,E as Rs}from"./lit-element-Bx14lxc-.js";import{r as Qs,n as g}from"./Reflect-DJ7r0WLU.js";import{a as xs}from"./query-p8xgzTDt.js";import{e as se}from"./class-map-CXsQwv0r.js";import{o as U}from"./if-defined-CVqwUuaf.js";import{n as ee}from"./when-BR7zwNJC.js";import{i as Gs,u as Ls,s as te}from"./static-B8S6DEnV.js";import{e as oe,i as re,t as ne}from"./directive-CF8sV3Lr.js";import{ag as O}from"./index-DJLbqXMY.js";import{o as ae}from"./unsafe-html-CYO4avEf.js";var ie=Object.defineProperty,le=Object.getOwnPropertyDescriptor,Ws=e=>{throw TypeError(e)},r=(e,s,t,o)=>{for(var n=o>1?void 0:o?le(s,t):s,l=e.length-1,d;l>=0;l--)(d=e[l])&&(n=(o?d(s,t,n):d(n))||n);return o&&n&&ie(s,t,n),n},ws=(e,s,t)=>s.has(e)||Ws("Cannot "+t),a=(e,s,t)=>(ws(e,s,"read from private field"),t?t.call(e):s.get(e)),p=(e,s,t)=>s.has(e)?Ws("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),x=(e,s,t,o)=>(ws(e,s,"write to private field"),s.set(e,t),t),j=(e,s,t)=>(ws(e,s,"access private method"),t);const T="-gdsvsuffix";class ks{static get instance(){var s;return(s=globalThis.__gdsElementLookupTable)!=null&&s[T]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[T]:new Map}),globalThis.__gdsElementLookupTable[T]}}const R=(e,s)=>function(t){var o;return o=class extends t{constructor(){super(...arguments),this.gdsElementName=e}static define(){if(o.isDefined)return;const l=globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?e:e+T;customElements.get(l)||(o.isDefined=!0,ks.instance.set(e,l),customElements.define(l,o),s!=null&&s.dependsOn&&s.dependsOn.forEach(d=>d.define()))}},o.isDefined=!1,o},Ms=new WeakMap;function ce(e,...s){let t=Ms.get(e);return t||(t=Ds(e),t.raw=Ds(e.raw),Ms.set(e,t)),[t,...s]}const Ds=e=>e.map(s=>{for(const[t,o]of ks.instance.entries())s=s.replace(new RegExp(`${t}(?![-a-z])`,"mg"),o);return s});function de(e){return(s,...t)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return e(s,...t);const[o,...n]=ce(s,...t);return e(o,...n)}}const Q=de(ms);function ge(e){return ks.instance.get(e)??e}function N(e){return ge(e)}var $,rs,V,ns,I,B,D,as,L,js,H,Ps;class pe{constructor(s){p(this,L),p(this,$,!Es()),p(this,rs,!1),p(this,V,[]),p(this,ns,[]),p(this,I,new Map),p(this,B,new Map),p(this,D,[]),p(this,as,[]),this.host=s,this.host.addController(this)}hostConnected(){j(this,L,Ps).call(this)}has(s){return a(this,$)?a(this,B).has(s):a(this,I).has(s)}inject(s,t){j(this,L,js).call(this,s,t),j(this,L,H).call(this)}clear(s){a(this,$)?this.host.updateComplete.then(()=>{const t=a(this,B).get(s);t==null||t.remove(),a(this,B).delete(s)}):a(this,I).delete(s),j(this,L,H).call(this)}clearAll(){a(this,$)?this.host.updateComplete.then(()=>{a(this,B).forEach(s=>s.remove()),a(this,D).forEach(s=>s.remove()),a(this,B).clear(),x(this,D,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],a(this,I).clear(),x(this,V,[]))}clearInitial(){a(this,$)?this.host.updateComplete.then(()=>{a(this,D).forEach(s=>s.remove()),x(this,D,[])}):x(this,V,[]),j(this,L,H).call(this)}restoreInitial(){a(this,$)?a(this,as).forEach(s=>{a(this,D).push(s.cloneNode(!0))}):x(this,V,[...a(this,ns)]),j(this,L,H).call(this)}}$=new WeakMap;rs=new WeakMap;V=new WeakMap;ns=new WeakMap;I=new WeakMap;B=new WeakMap;D=new WeakMap;as=new WeakMap;L=new WeakSet;js=function(e,s){if(a(this,$)){let t=a(this,B).get(e);t||(t=document.createElement("style"),a(this,B).set(e,t)),t.textContent=s.cssText}else{if(!this.host.shadowRoot||!s.styleSheet)return;a(this,I).set(e,s.styleSheet)}};H=function(){if(a(this,$))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(e=>{e.remove()}),a(this,D).forEach(e=>{var s;(s=this.host.shadowRoot)==null||s.appendChild(e)}),a(this,B).forEach(e=>{var s;(s=this.host.shadowRoot)==null||s.appendChild(e)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...a(this,V),...Array.from(a(this,I).values())]}};Ps=function(){a(this,rs)||(a(this,$)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(e=>{a(this,D).push(e),a(this,as).push(e.cloneNode(!0))})}):this.host.shadowRoot&&a(this,V).length===0&&(x(this,V,[...this.host.shadowRoot.adoptedStyleSheets||[]]),x(this,ns,[...a(this,V)])),x(this,rs,!0))};function Es(){try{return new CSSStyleSheet,!0}catch{return!1}}function Vs(e){return e.split("-").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join("")}class F extends Ys{constructor(){super(),this.semanticVersion="__GDS_SEM_VER__",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new pe(this)}static define(){}connectedCallback(){var s;super.connectedCallback(),this.setAttribute("gds-element",((s=this.gdsElementName)==null?void 0:s.toString())||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(s,t){const o={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new Event(s,o)),this.dispatchEvent(new Event(Vs(s),o))].every(n=>n!==!1)}dispatchCustomEvent(s,t={}){const o={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new CustomEvent(s,o)),this.dispatchEvent(new CustomEvent(Vs(s),o))].every(n=>n!==!1)}}F.isDefined=!1;F.styleExpressionBaseSelector=":host";r([Qs()],F.prototype,"_isUsingTransitionalStyles",2);const Fs=`/**
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
  --gds-sys-viewport-0: 0;
  --gds-sys-viewport-2xs: 320;
  --gds-sys-viewport-xs: 425;
  --gds-sys-viewport-s: 768;
  --gds-sys-viewport-m: 1024;
  --gds-sys-viewport-l: 1280;
  --gds-sys-viewport-xl: 1440;
  --gds-sys-viewport-2xl: 2560;
  --gds-sys-viewport-3xl: 3840;
  --gds-sys-viewport-4xl: 4320;
  --gds-sys-viewport-5xl: 6016;
  --gds-sys-viewport-6xl: 7680;
  --gds-sys-text-family: SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-weight-light: 300;
  --gds-sys-text-weight-regular: 400;
  --gds-sys-text-weight-book: 450;
  --gds-sys-text-weight-medium: 500;
  --gds-sys-text-weight-bold: 700;
  --gds-sys-text-heading-xl: 450 32px/44px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-l: 450 28px/40px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-m: 450 24px/32px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-s: 450 20px/28px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-xs: 450 16px/24px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-2xs: 450 14px/20px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-book-m: 450 16px/20px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-book-s: 450 14px/20px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-book-xs: 450 12px/16px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-regular-m: 400 16px/20px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-regular-s: 400 14px/20px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-regular-xs: 400 12px/16px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-book-l: 450 20px/26px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-book-m: 450 16px/24px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-book-s: 450 14px/20px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-regular-l: 400 20px/26px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-regular-m: 400 16px/24px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-regular-s: 400 14px/20px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-italic-l: italic 400 20px/26px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-italic-m: italic 400 16px/24px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-italic-s: italic 400 14px/20px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-2xl: 450 82px/90px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-xl: 450 64px/72px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-l: 450 48px/56px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-m: 450 36px/44px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-s: 450 32px/40px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-2xl: 450 32px/40px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-xl: 450 28px/36px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-l: 450 24px/32px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-m: 450 20px/28px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-s: 450 18px/26px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-xs: 450 16px/24px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-space-0: 0px;
  --gds-sys-space-5xs: 1px;
  --gds-sys-space-4xs: 2px;
  --gds-sys-space-3xs: 4px;
  --gds-sys-space-2xs: 6px;
  --gds-sys-space-xs: 8px;
  --gds-sys-space-s: 12px;
  --gds-sys-space-m: 16px;
  --gds-sys-space-l: 20px;
  --gds-sys-space-xl: 24px;
  --gds-sys-space-2xl: 32px;
  --gds-sys-space-3xl: 40px;
  --gds-sys-space-4xl: 48px;
  --gds-sys-space-5xl: 64px;
  --gds-sys-space-6xl: 80px;
  --gds-sys-space-7xl: 96px;
  --gds-sys-space-8xl: 112px;
  --gds-sys-space-9xl: 120px;
  --gds-sys-space-max: 999px;
  --gds-sys-radius-0: 0px;
  --gds-sys-radius-none: 0px;
  --gds-sys-radius-5xs: 1px;
  --gds-sys-radius-4xs: 2px;
  --gds-sys-radius-3xs: 4px;
  --gds-sys-radius-2xs: 6px;
  --gds-sys-radius-xs: 8px;
  --gds-sys-radius-s: 12px;
  --gds-sys-radius-m: 16px;
  --gds-sys-radius-l: 20px;
  --gds-sys-radius-xl: 24px;
  --gds-sys-radius-2xl: 32px;
  --gds-sys-radius-3xl: 40px;
  --gds-sys-radius-4xl: 48px;
  --gds-sys-radius-5xl: 64px;
  --gds-sys-radius-max: 999px;`,J=`/**
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
  --gds-sys-color-l3-neutral-05: #003824;
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
  --gds-sys-color-state-warning-06: #f19e38 20%;`,is=`/**
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
  --gds-sys-color-l3-neutral-05: #ffffff;
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
  --gds-sys-color-state-warning-06: #8f530a 16%;`,qs=`/**
 * Do not edit directly, this file was auto-generated.
 */

  --gds-sys-shadow-xs-01: 0px 1px 2px 0px rgba(10, 11, 10, 0.05);
  --gds-sys-shadow-xs-02: 0px 0px 0px 0px transparent;
  --gds-sys-shadow-s-01: 0px 1px 2px 0px rgba(10, 11, 10, 0.10);
  --gds-sys-shadow-s-02: 0px 1px 3px 0px rgba(10, 11, 10, 0.06);
  --gds-sys-shadow-m-01: 0px 2px 4px -2px rgba(10, 11, 10, 0.10);
  --gds-sys-shadow-m-02: 0px 4px 8px -2px rgba(10, 11, 10, 0.06);
  --gds-sys-shadow-l-01: 0px 4px 6px -2px rgba(10, 11, 10, 0.08);
  --gds-sys-shadow-l-02: 0px 12px 16px -4px rgba(10, 11, 10, 0.03);
  --gds-sys-shadow-xl-01: 0px 20px 24px -4px rgba(10, 11, 10, 0.08);
  --gds-sys-shadow-xl-02: 0px 0px 0px 0px rgba(10, 11, 10, 0.08);
  --gds-sys-shadow-2xl-01: 0px 24px 48px -12px rgba(10, 11, 10, 0.18);
  --gds-sys-shadow-2xl-02: 0px 0px 0px 0px transparent;`;var ye={};const gs=typeof process<"u"&&ye!==void 0;var hs,ls,cs,_s,es,Is,Os;function fe(){return gs?[]:document.adoptedStyleSheets||[]}const he=class Ns{constructor(){p(this,es),p(this,hs,!Es()),p(this,ls,new Map),p(this,cs,new Map),p(this,_s,fe())}static get instance(){var s;return(s=globalThis.__gdsGlobalStylesRegistryScoped)!=null&&s[T]||(globalThis.__gdsGlobalStylesRegistryScoped={...globalThis.__gdsGlobalStylesRegistryScoped,[T]:new Ns}),globalThis.__gdsGlobalStylesRegistryScoped[T]}injectGlobalStyles(s,t){if(a(this,hs)){const o=Array.isArray(t)?t.map(n=>n.toString()).join(""):t.toString();j(this,es,Is).call(this,s,o)}else t.styleSheet&&j(this,es,Os).call(this,s,t.styleSheet)}};hs=new WeakMap;ls=new WeakMap;cs=new WeakMap;_s=new WeakMap;es=new WeakSet;Is=function(e,s){if(gs)return;let t=a(this,cs).get(e);t||(t=document.createElement("style"),a(this,cs).set(e,t)),t.textContent=s,document.head.appendChild(t)};Os=function(e,s){gs||(a(this,ls).set(e,s),document.adoptedStyleSheets=[...a(this,_s),...Array.from(a(this,ls).values())])};let ue=he;const q=[w`
    :host {
      ${S(Fs)}
      ${S(qs)}
    }
  `];ue.instance.injectGlobalStyles("root-tokens",w`
    :root {
      ${S(Fs)}
      ${S(qs)}
    }
    :root:not([gds-theme]),
    :root[gds-theme='light'] {
      ${S(is)}
    }
    :root[gds-theme='dark'] {
      ${S(J)}
    }
    :root[gds-theme='auto'] {
      @media (prefers-color-scheme: dark) {
        ${S(J)}
      }
      @media (prefers-color-scheme: light) {
        ${S(is)}
      }
    }
  `);const be=w`
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
`;var ve=be;let K=class extends F{constructor(){super(...arguments),this.onmousedown=e=>{const t=e.target.getBoundingClientRect(),o=this._rippleEl;o&&(o.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-t.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-t.left}px`),setTimeout(()=>{o.classList.add("gds-ripple-effect")},20))}}render(){return ms`<div></div>`}};K.styles=[q,ve];r([xs("div")],K.prototype,"_rippleEl",2);K=r([R("gds-ripple")],K);var ts,os,us;const Se=class Us{constructor(){p(this,ts,new Map),p(this,os,new Map),p(this,us,!Es())}static get instance(){var s;return(s=globalThis.__gdsTransitionalStyles)!=null&&s[T]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[T]:new Us}),globalThis.__gdsTransitionalStyles[T]}apply(s,t){if(!s.shadowRoot)return;const o=a(this,ts).get(t);o&&(a(this,os).set(t,s),this.applyToElement(t,o))}applyToElement(s,t){var E,y;const o=a(this,os).get(s);if(!o||!o.shadowRoot)return;const n=()=>{o._dynamicStylesController.clearInitial(),o._dynamicStylesController.inject("t-styles",S(t)),o._isUsingTransitionalStyles=!0},l=()=>{o._isUsingTransitionalStyles=!1,o._dynamicStylesController.clear("t-styles"),o._dynamicStylesController.restoreInitial()},d="[gds-element=gds-theme]";let h=o.getRootNode(),f=o.closest(d);for(;f===null&&h!==document;)f=(E=h.host)==null?void 0:E.closest(d),h=(y=h.host)==null?void 0:y.getRootNode();if(f){const u=f,_=()=>{u.designVersion==="2023"?l():n()};if(u.addEventListener("gds-design-version-changed",_),o.addEventListener("gds-element-disconnected",()=>u.removeEventListener("gds-design-version-changed",_)),u.designVersion==="2023"){l();return}}n()}register(s,t){let o=t;a(this,us)&&(o=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${t}`),a(this,ts).set(s,o),this.applyToElement(s,o)}};ts=new WeakMap;os=new WeakMap;us=new WeakMap;let Hs=Se;function Cs(e,s){const t={waitUntilFirstUpdate:!1,...s};return(o,n,l)=>{const{update:d}=o,h=Array.isArray(e)?e:[e];o.update=function(f){h.forEach(E=>{var u;const y=E;if(f.has(y)){const _=f.get(y),ss=this[y];_!==ss&&(!t.waitUntilFirstUpdate||this.hasUpdated)&&((u=l.value)==null||u.call(this,_,ss))}}),d.call(this,f)}}}function me(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(s,t,o)=>{let n;const l=s.connectedCallback,d=s.disconnectedCallback;s.connectedCallback=function(){l==null||l.call(this);const h=(f,E)=>{var y;(y=o.value)==null||y.call(this)};n=new MutationObserver(h),n.observe(this,e)},s.disconnectedCallback=function(){d==null||d.call(this),n.disconnect()}}}const xe={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},we=/^([<|>]=?)?([0-9a-z]+)/,Xs=["{","}",";",":",","],zs=[" ","/n"];function ke(e=""){const s=[];let t="";for(let o=0;o<e.length;o++){const n=e[o];if(zs.includes(n)||(t+=n),Xs.includes(n)){s.push(t.slice(0,-1)),s.push(n),t="";continue}if(zs.includes(n)||o===e.length-1){s.push(t),t="";continue}}return s.filter(o=>o!=="")}function Ee(e){const s=[];let t={breakpoint:"-",values:[]};const o=()=>({sel:"",values:[]});let n=o();for(const l of e){if(!Xs.includes(l)){n.values.push(l);continue}if(l==="{"&&(t={breakpoint:n.values.join(","),values:[]},n=o()),l===";"&&(s.length===0&&s.push(t),n.values.length>0&&(t.values.push(n),n=o())),l===":"){const d=n.values.pop()??"";n.sel=d}t&&l==="}"&&(t.values.push(n),n=o(),s.push(t))}return n.values.length>0&&t.values.push(n),s.length===0&&s.push(t),s}function _e(e){return e.split(",").map(t=>{const o=t.trim().match(we);if(!o)throw new Error(`Invalid breakpoint specifier: ${t}`);return{condition:o[1],value:o[2]}})}function Ce(e,s,t,o=l=>l,n=(l,d)=>`${l}: ${d.join(" ")};`){let l="";for(const d of t){const E=`@media ${(d.breakpoint==="-"?[{condition:">=",value:"0"}]:_e(d.breakpoint)).map(y=>{var u;return`(${(u=y.condition)!=null&&u.includes("<")?"max-width":"min-width"}: ${xe[y.value]??y.value})`}).join(" and ")} {${d.values.map(y=>{let u=e;y.sel.length>0&&(u=e===":host"?`:host(:${y.sel})`:`${e}:${y.sel}`);const _=n(s,y.values.map(o));return y.sel==="hover"?`@media (hover: hover) {${u}{${_}}}`:`${u}{${_}}`}).join("")}}`;l+=E}return l}const ys=new Map;function i(e){return(s,t)=>{const o=(e==null?void 0:e.property)??String(t),n=e==null?void 0:e.valueTemplate,l=e==null?void 0:e.styleTemplate,d=(e==null?void 0:e.cacheOverrideKey)??"0",h=(e==null?void 0:e.attribute)??String(t);g({attribute:h,reflect:e==null?void 0:e.reflect,noAccessor:!0})(s,t),Object.defineProperty(s,t,{get:function(){return this["__"+String(t)]},set:async function(f){f=(f==null?void 0:f.toString().trim())??"",this["__"+String(t)]=f,e!=null&&e.reflect&&(f?this.setAttribute(h,String(f)):this.removeAttribute(h)),await this.updateComplete;const E=(e==null?void 0:e.selector)??this.constructor.styleExpressionBaseSelector,y=this.level??"0",u=E+o+f+y+d;if(ys.has(u)){this._dynamicStylesController.inject(`sep_${String(t)}`,ys.get(u));return}const _=Ee(ke(f)),ss=Ce(E,o,_,n==null?void 0:n.bind(this),l==null?void 0:l.bind(this)),Ts=S(ss);ys.set(u,Ts),this._dynamicStylesController.inject(`sep_${String(t)}`,Ts)}})}}class $e extends re{constructor(s){if(super(s),s.type!==ne.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(s){return Rs}update(s,[t]){var l;const o=s.element,n=(l=s.options)==null?void 0:l.host;Array.from(n.attributes).forEach(d=>{t(d)&&o.setAttribute(d.name.replace("gds-",""),d.value)})}}const Be=oe($e),As=new WeakMap;function Te(e){return(s,...t)=>{let o=As.get(s);return o||(o=s.map(n=>n.replace(/\n[\s]+</gm,"<")),o.raw=s.raw,As.set(s,o)),e(o,...t)}}function Js(e,s,t){if(e==="transparent"||e==="currentColor"||e==="inherit")return e;const[o,n]=e.split("/");let l;return t&&s==="background"?l=`var(--gds-sys-color-l${t}-${o})`:l=`var(--gds-sys-color-${s}-${o})`,n?`color-mix(in srgb, ${l} ${parseFloat(n)*100}%, transparent 0%)`:l}function ps(e){return{valueTemplate:function(s){return Js(s,e,this.level)}}}const Z={valueTemplate:e=>`var(--gds-sys-space-${e}, 0)`},Ge={valueTemplate:e=>`var(--gds-sys-radius-${e}, 0)`},m={valueTemplate:e=>`var(--gds-sys-space-${Me(e)}, ${e})`},fs={valueTemplate:e=>{const t=(e.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${e})`:`calc(var(--gds-sys-space-${e.substring(1)}) * -1)`;return e==="auto"?"auto":t},styleTemplate:(e,s)=>{const t=h=>h==="auto"?"auto":`${h}`,o=t(s[0]),n=s.length>1?t(s[1]):o,l=s.length>2?t(s[2]):o,d=s.length>3?t(s[3]):n;return`${e}: ${o} ${n} ${l} ${d};`}};function Me(e){return e.replace(/[^a-zA-Z0-9-]/g,"")}function Zs(e){class s extends e{}return r([i(m)],s.prototype,"width",2),r([i(m)],s.prototype,"min-width",2),r([i(m)],s.prototype,"max-width",2),r([i(m)],s.prototype,"inline-size",2),r([i(m)],s.prototype,"min-inline-size",2),r([i(m)],s.prototype,"max-inline-size",2),s}function De(e){class s extends e{}return r([i(m)],s.prototype,"height",2),r([i(m)],s.prototype,"min-height",2),r([i(m)],s.prototype,"max-height",2),r([i(m)],s.prototype,"block-size",2),r([i(m)],s.prototype,"min-block-size",2),r([i(m)],s.prototype,"max-block-size",2),s}function $s(e){class s extends e{}return r([i(fs)],s.prototype,"margin",2),r([i(fs)],s.prototype,"margin-inline",2),r([i(fs)],s.prototype,"margin-block",2),s}function Ve(e){class s extends e{}return r([i(Z)],s.prototype,"padding",2),r([i(Z)],s.prototype,"padding-inline",2),r([i(Z)],s.prototype,"padding-block",2),s}function Bs(e){class s extends e{}return r([i()],s.prototype,"align-self",2),r([i()],s.prototype,"justify-self",2),r([i()],s.prototype,"place-self",2),r([i()],s.prototype,"grid-column",2),r([i()],s.prototype,"grid-row",2),r([i()],s.prototype,"grid-area",2),r([i()],s.prototype,"flex",2),r([i()],s.prototype,"order",2),s}function ze(e){class s extends e{}return r([i()],s.prototype,"position",2),r([i()],s.prototype,"transform",2),r([i()],s.prototype,"inset",2),s}gs||function(e){if(typeof e.requestSubmit=="function")return;e.requestSubmit=function(o=null){o?(s(o,this),o.click()):(o=document.createElement("input"),o.type="submit",o.hidden=!0,this.appendChild(o),o.click(),this.removeChild(o))};function s(o,n){o instanceof HTMLElement||t(TypeError,"parameter 1 is not of type 'HTMLElement'"),o.type=="submit"||t(TypeError,"The specified element is not a submit button"),o.form==n||t(DOMException,"The specified element is not owned by this form element","NotFoundError")}function t(o,n,l="Error"){throw new o("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+n+".",l)}}(HTMLFormElement.prototype);var b;class k extends F{constructor(){super(),p(this,b),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{x(this,b,this.attachInternals())}catch{x(this,b,{form:this.closest("form"),setFormValue:t=>{this._internalValue=t},setValidity:(t,o)=>{a(this,b).validity=t,this.errorMessage=o||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:this.checkValidity.bind(this),reportValidity:this.reportValidity.bind(this)})}}connectedCallback(){if(super.connectedCallback(),typeof this.attachInternals!="function"){const s=this.closest("form");s&&(s.addEventListener("submit",this._handleFormSubmit.bind(this)),s.addEventListener("reset",this.formResetCallback.bind(this)))}}set invalid(s){const t=this.invalid;a(this,b).setValidity({...a(this,b).validity,customError:s,valid:!s},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",t),a(this,b).checkValidity()}get invalid(){return!a(this,b).validity.valid}get value(){return this._internalValue}set value(s){this._internalValue=s,a(this,b).setFormValue(s)}get form(){return a(this,b).form}get validity(){return a(this,b).validity}get validationMessage(){return a(this,b).validationMessage}get willValidate(){return a(this,b).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const t=this.invalid,o=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=o[1]||this.errorMessage,a(this,b).setValidity(o[0],o[1],this._getValidityAnchor()),t!==this.invalid&&(this.requestUpdate("invalid",t),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),a(this,b).checkValidity()}reportValidity(){return a(this,b).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){typeof this.value=="string"?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(s){s==null||s.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(s){this.checkValidity(),this.validity.valid||s.preventDefault()}}b=new WeakMap;k.formAssociated=!0;r([g({attribute:!1})],k.prototype,"validator",2);r([g({type:Boolean})],k.prototype,"required",2);r([g({attribute:"error-message"})],k.prototype,"errorMessage",2);r([g({type:Boolean,reflect:!0})],k.prototype,"invalid",1);r([g()],k.prototype,"label",2);r([g()],k.prototype,"value",1);r([g({reflect:!0})],k.prototype,"name",2);r([g({type:Boolean,reflect:!0})],k.prototype,"disabled",2);r([Cs("value",{waitUntilFirstUpdate:!0})],k.prototype,"__handleValueChange",1);const Ae=w`
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
      --_block-size: var(--gds-sys-space-4xl);
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border: none;
      cursor: pointer;
      block-size: var(--_block-size);
      background-color: var(--gds-sys-color-l3-neutral-01);
      color: var(--gds-sys-color-content-neutral-03);
      border-radius: var(--gds-sys-radius-max);
      font-family: inherit;
      font: var(--gds-sys-text-detail-book-m);
      gap: var(--gds-sys-space-xs);
      outline-color: transparent;
      outline-offset: var(--gds-sys-space-4xs);
      outline-style: solid;
      outline-width: var(--gds-sys-space-4xs);
      padding-block: var(--gds-sys-space-s);
      padding-inline: var(--gds-sys-space-xl);
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
      --_block-size: var(--gds-sys-space-xl);
      gap: var(--gds-sys-space-3xs);
      font: var(--gds-sys-text-detail-book-xs);
      padding-inline: var(--gds-sys-space-s);
    }

    :host([size='small']) .button {
      --_block-size: var(--gds-sys-space-2xl);
      font: var(--gds-sys-text-detail-book-s);
      gap: var(--gds-sys-space-3xs);
      padding-block: var(--gds-sys-space-3xs);
      padding-inline: var(--gds-sys-space-m);
    }

    :host([size='medium']) .button {
      --_block-size: var(--gds-sys-space-3xl);
      gap: var(--gds-sys-space-2xs);
      font: var(--gds-sys-text-detail-book-m);
      padding-inline: var(--gds-sys-space-l);
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
`;var Re=Ae,X,C,W,Ks,bs,vs;const Le=["aria-label","aria-haspopup","aria-expanded"],We=Te(Q);class v extends k{constructor(){super(...arguments),p(this,C),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",p(this,X,!1),p(this,bs,()=>{var t;const s=((t=this._mainSlot)==null?void 0:t.assignedElements())??[];x(this,X,s.length===1&&(s[0].tagName.toLowerCase().startsWith("gds-icon")||s[0].getAttribute("name")==="icon")),this.requestUpdate()}),p(this,vs,s=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:s}),this.form&&!a(this,C,W)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())})}focus(s){var t;(t=this._getValidityAnchor())==null||t.focus(s)}click(){var s;(s=this._getValidityAnchor())==null||s.click()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),Hs.instance.apply(this,"gds-button")}render(){const s={button:!0,circle:a(this,X),icon:a(this,X),xs:this.size==="xs",small:this.size==="small",large:this.size==="large",brand:this.variant==="brand",positive:this.variant==="positive",negative:this.variant==="negative",notice:this.variant==="notice",warning:this.variant==="warning",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},t=a(this,C,W)?Gs`a`:Gs`button`;return Ls`
      <${t}
        class=${se(s)}
        type="${U(a(this,C,W)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||Rs}
        href=${U(a(this,C,W)?this.href:void 0)}
        target=${U(a(this,C,W)?this.target:void 0)}
        rel=${U(a(this,C,W)?this.rel||a(this,C,Ks):void 0)}
        download=${U(a(this,C,W)?this.download:void 0)}
        part="_button"
        @click="${a(this,vs)}"
        ${Be(o=>o.name.startsWith("gds-aria")||o.name==="gds-role"||Le.includes(o.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${a(this,bs)}></slot>
        <slot name="trail"></slot>
        ${ee(!this._isUsingTransitionalStyles,()=>We`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${t}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}}X=new WeakMap;C=new WeakSet;W=function(){return this.href.length>0};Ks=function(){return this.target==="_blank"?"noreferrer noopener":void 0};bs=new WeakMap;vs=new WeakMap;v.styles=[q,Re];v.shadowRootOptions={mode:"open",delegatesFocus:!0};r([g({type:Boolean,reflect:!0})],v.prototype,"disabled",2);r([i({selector:".button"})],v.prototype,"justify-content",2);r([g({reflect:!0})],v.prototype,"type",2);r([g({reflect:!0})],v.prototype,"rank",2);r([g({reflect:!0})],v.prototype,"variant",2);r([g({reflect:!0})],v.prototype,"size",2);r([g()],v.prototype,"label",2);r([g()],v.prototype,"href",2);r([g()],v.prototype,"target",2);r([g()],v.prototype,"rel",2);r([g()],v.prototype,"download",2);r([xs("slot:not([name])")],v.prototype,"_mainSlot",2);r([xs(".button")],v.prototype,"_button",2);r([me({attributes:!0,childList:!1,subtree:!1,characterData:!1})],v.prototype,"_attributeChanged",1);let Ss=class extends Zs($s(Bs(v))){};Ss=r([R("gds-button",{dependsOn:[K]})],Ss);const je=w`
  :host {
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
  :host(:focus-visible) {
    outline-color: color-mix(in srgb, currentcolor, #000 100%);
    outline-offset: var(--gds-sys-space-4xs);
    outline-style: solid;
    outline-width: var(--gds-sys-space-4xs);
  }
`;var Pe=je;let c=class extends Zs(De($s(Ve(Bs(ze(F)))))){constructor(){super(...arguments),this.level="2"}render(){return Q`<slot></slot>`}};c.styles=[q,Pe];r([i()],c.prototype,"display",2);r([g()],c.prototype,"level",2);r([i(ps("content"))],c.prototype,"color",2);r([i(ps("background"))],c.prototype,"background",2);r([i({styleTemplate:function(e,s){const t=this,[o,n=t["border-style"]||"solid",l=t["border-color"]||"subtle-01"]=s,d=`var(--gds-sys-space-${o})`,h=Js(l,"border",t.level);return`border: ${d} ${n} ${h};`}})],c.prototype,"border",2);r([i(ps("border"))],c.prototype,"border-color",2);r([i(Z)],c.prototype,"border-width",2);r([i()],c.prototype,"border-style",2);r([i(Ge)],c.prototype,"border-radius",2);r([i({valueTemplate:e=>`var(--gds-sys-shadow-${e}-01), var(--gds-sys-shadow-${e}-02)`})],c.prototype,"box-shadow",2);r([i()],c.prototype,"opacity",2);r([i()],c.prototype,"overflow",2);r([i()],c.prototype,"box-sizing",2);r([i()],c.prototype,"z-index",2);r([i({styleTemplate:(e,s)=>`font: var(--gds-sys-text-${s[0]});`})],c.prototype,"font",2);r([i({valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],c.prototype,"font-weight",2);r([i()],c.prototype,"text-align",2);r([i()],c.prototype,"text-wrap",2);r([i()],c.prototype,"overflow-wrap",2);r([i()],c.prototype,"white-space",2);r([i({...Z,styleTemplate:(e,s)=>{const t=s[0],o=s[1]||t;return`gap: ${t} ${o};`},cacheOverrideKey:"flex"})],c.prototype,"gap",2);r([i()],c.prototype,"align-items",2);r([i()],c.prototype,"align-content",2);r([i()],c.prototype,"justify-content",2);r([i()],c.prototype,"justify-items",2);r([i()],c.prototype,"flex-direction",2);r([i()],c.prototype,"flex-wrap",2);r([i()],c.prototype,"place-items",2);r([i()],c.prototype,"place-content",2);r([i()],c.prototype,"aspect-ratio",2);r([i()],c.prototype,"cursor",2);c=r([R("gds-div")],c);let Y=class extends c{constructor(){super(),this.variant="primary",this.padding="m;m{xl}",this["border-radius"]="s",this.gap="m;m{l}"}render(){return Q`<slot></slot>`}};Y.styles=[q,w`
      :host {
        box-sizing: border-box;
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
        border-width: var(--gds-sys-space-5xs);
        border-style: solid;
        display: flex;
        flex-direction: column;
      }
    `];r([i({styleTemplate:function(e,s){let t,o,n;switch(s[0]){case"primary":t="transparent",o=`var(--gds-sys-color-l${this.level}-neutral-01)`,n="var(--gds-sys-color-content-neutral-01)";break;case"secondary":t="var(--gds-sys-color-border-subtle-01)",o=`var(--gds-sys-color-l${this.level}-neutral-02)`,n="var(--gds-sys-color-content-neutral-01)";break;case"tertiary":t="transparent",o=`var(--gds-sys-color-l${this.level}-neutral-02)`,n="var(--gds-sys-color-content-neutral-01)";break;case"brand-01":t="transparent",o=`var(--gds-sys-color-l${this.level}-brand-01)`,n="var(--gds-sys-color-content-inversed)";break;case"brand-02":t="transparent",o=`var(--gds-sys-color-l${this.level}-brand-02)`,n="var(--gds-sys-color-content-brand-02)";break;case"positive":case"negative":case"warning":case"information":case"notice":t=`var(--gds-sys-color-border-${s[0]}-02)`,o=`var(--gds-sys-color-l${this.level}-${s[0]}-01)`,n=`var(--gds-sys-color-content-${s[0]}-01)`;break;default:t="transparent",o=`var(--gds-sys-color-l${this.level}-neutral-01)`,n="var(--gds-sys-color-content-neutral-01)";break}return`
      --_border-color: ${t};
      --_background-color: ${o};
      --_color: ${n};
      `}})],Y.prototype,"variant",2);Y=r([R("gds-card")],Y);const Fe=w`
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
`;var qe=Fe;class M extends $s(Bs(F)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.label=""}get svgAttributes(){const t={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:this.constructor._viewBox,part:"icon"};return this.label?{...t,"aria-label":this.label}:{...t,role:"presentation"}}get svgContent(){const s=this.constructor;return this.solid?s._solidSVG:s._regularSVG}applyStroke(s){return this.stroke?s.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):s}generateAttributesString(s){return Object.entries(s).filter(([t,o])=>o!==void 0).map(([t,o])=>`${t}="${o}"`).join(`
      `)}render(){const s=this.svgAttributes;let t=this.svgContent||"";this.stroke&&(t=this.applyStroke(t));const o=`
      <svg ${this.generateAttributesString(s)}>
        ${t}
      </svg>
    `;return ms`${ae(o)}`}}M.styles=[q,qe];r([i({...m,property:"height",selector:"svg"})],M.prototype,"size",2);r([g({type:Boolean})],M.prototype,"solid",2);r([g({type:Number})],M.prototype,"stroke",2);r([g()],M.prototype,"level",2);r([i(ps("content"))],M.prototype,"color",2);r([g({type:String})],M.prototype,"label",2);M.define();const Ie=w`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
`;var Oe=Ie;let ds=class extends c{render(){return Q`<slot></slot>`}};ds.styles=[q,Oe];ds=r([R("gds-flex")],ds);const it=e=>{Ss.define();const s=N("gds-button"),t={...e,class:e.className};return O.createElement(s,t)},lt=e=>{Y.define();const s=N("gds-card"),t={...e,class:e.className};return O.createElement(s,t)},Ne=w`
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
`,Ue=w`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var He=Ue;let G=class extends c{constructor(){super(...arguments),this.tag="span"}render(){const s=te(encodeURI(this.tag));return Ls`<${s} tag><slot></slot></${s}>`}};G.styles=[q,Ne,He];r([g({type:String})],G.prototype,"tag",2);r([i({selector:"[tag]",styleTemplate:(e,s)=>`font: var(--gds-sys-text-${s[0]});`})],G.prototype,"font",2);r([i({selector:"[tag]",valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],G.prototype,"font-weight",2);r([i()],G.prototype,"text-transform",2);r([i({selector:"[tag]"})],G.prototype,"text-decoration",2);r([i({selector:"[tag]",styleTemplate:(e,s)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${s[0]};
      -webkit-box-orient: vertical;`})],G.prototype,"lines",2);G=r([R("gds-text")],G);const dt=e=>{ds.define();const s=N("gds-flex"),t={...e,class:e.className};return O.createElement(s,t)},gt=e=>{G.define();const s=N("gds-text"),t={...e,class:e.className};return O.createElement(s,t)};let P=class extends F{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2023"}connectedCallback(){super.connectedCallback(),Hs.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",S(`:host {${J}}`))}render(){return Q`<slot></slot>`}_onColorSchemeChange(){switch(this.colorScheme){case"dark":this._dynamicStylesController.inject("color-scheme",S(`:host { ${J}}`));break;case"light":default:this._dynamicStylesController.inject("color-scheme",S(`:host { ${is}}`));break;case"auto":this._dynamicStylesController.inject("color-scheme",S(`:host { ${is}} @media (prefers-color-scheme: dark) { :host { ${J} } }`));break}this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}_onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}};P.styles=[q,w`
      :host {
        display: contents;
        color: var(--gds-sys-color-content-neutral-01);
        font-family: var(--gds-sys-text-family);
      }
    `];r([g({reflect:!0,attribute:"color-scheme"})],P.prototype,"colorScheme",2);r([g({reflect:!0,attribute:"design-version"})],P.prototype,"designVersion",2);r([Cs("colorScheme")],P.prototype,"_onColorSchemeChange",1);r([Cs("designVersion")],P.prototype,"_onDesignVersionChange",1);P=r([R("gds-theme")],P);const yt=e=>{P.define();const s=N("gds-theme"),t={...e,class:e.className};return O.createElement(s,t)};let z=class extends M{};z._regularSVG='<path d="M20.7999 7C17.0999 7 13.8999 9.1 12.1999 12.2C11.9999 10.2 11.1999 8.4 10.0999 6.8C8.69995 4.7 6.59995 3.1 4.29995 2.2L3.69995 2L3.49995 2.5C2.59995 3.9 2.09995 5.5 1.99995 7.2C1.89995 8.9 2.29995 10.5 2.99995 12.1C3.69995 13.6 4.79995 14.9 6.19995 15.8C7.49995 16.8 9.09995 17.4 10.6999 17.5C10.3999 19 9.99995 21 9.99995 21V21.1C9.99995 21.2 9.99995 21.2 10.0999 21.3C10.0999 21.3 10.0999 21.4 10.1999 21.4C10.2999 21.4 10.2999 21.4 10.3999 21.4H11.4999C11.5999 21.4 11.6999 21.4 11.7999 21.4C11.8999 21.3 11.8999 21.2 11.8999 21.1C11.8999 21.1 12.0999 18.8 12.1999 17.6C17.2999 17.3 21.3999 13 21.3999 7.7V7H20.7999ZM3.29995 7.7C3.29995 6.3 3.69995 4.9 4.29995 3.7C8.39995 5.5 11.0999 9.6 11.0999 14.1C11.0999 14.8 10.9999 15.5 10.8999 16.2C8.79995 16 6.89995 15 5.49995 13.4C4.09995 11.9 3.29995 9.8 3.29995 7.7ZM12.3999 16.2C12.6999 12.1 15.9999 8.7 20.0999 8.4C19.7999 12.6 16.4999 15.9 12.3999 16.2Z" fill="currentColor"/>';z._solidSVG='<path d="M20.8 7C17.1 7 13.9 9.1 12.2 12.2C12 10.2 11.2 8.4 10.1 6.8C8.70001 4.7 6.60001 3.1 4.30001 2.2L3.70001 2L3.50001 2.5C2.60001 3.9 2.10001 5.5 2.00001 7.2C1.90001 8.9 2.30001 10.5 3.00001 12.1C3.70001 13.6 4.80001 14.9 6.20001 15.8C7.50001 16.8 9.10001 17.4 10.7 17.5C10.4 19 10 21 10 21V21.1C10 21.2 10 21.2 10.1 21.3C10.1 21.3 10.1 21.4 10.2 21.4C10.3 21.4 10.3 21.4 10.4 21.4H11.5C11.6 21.4 11.7 21.4 11.8 21.4C11.9 21.3 11.9 21.2 11.9 21.1C11.9 21.1 12.1 18.8 12.2 17.6C17.3 17.3 21.4 13 21.4 7.7V7H20.8Z" fill="currentColor"/>';z._name="brand-green";z._width=24;z._height=24;z._viewBox="0 0 24 24";z=r([R("gds-icon-brand-green")],z);const ht=e=>{z.define();const s=N("gds-icon-brand-green"),t={...e,class:e.className};return O.createElement(s,t)};let A=class extends M{};A._regularSVG='<path d="M9.25 3.75H3.75V20.25H20.25V14.75M13.75 3.75H20.25M20.25 3.75V10.25M20.25 3.75L11 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';A._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H9.25C9.66421 3 10 3.33579 10 3.75C10 4.16421 9.66421 4.5 9.25 4.5H4.5V19.5H19.5V14.75C19.5 14.3358 19.8358 14 20.25 14C20.6642 14 21 14.3358 21 14.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75ZM13 3.75C13 3.33579 13.3358 3 13.75 3H20.25C20.6642 3 21 3.33579 21 3.75V10.25C21 10.6642 20.6642 11 20.25 11C19.8358 11 19.5 10.6642 19.5 10.25V5.56066L11.5303 13.5303C11.2374 13.8232 10.7626 13.8232 10.4697 13.5303C10.1768 13.2374 10.1768 12.7626 10.4697 12.4697L18.4393 4.5H13.75C13.3358 4.5 13 4.16421 13 3.75Z" fill="currentColor"/>';A._name="square-arrow-top-right";A._width=24;A._height=24;A._viewBox="0 0 24 24";A=r([R("gds-icon-square-arrow-top-right")],A);const bt=e=>{A.define();const s=N("gds-icon-square-arrow-top-right"),t={...e,class:e.className};return O.createElement(s,t)};export{F as G,ht as I,Hs as T,p as _,Zs as a,Bs as b,a as c,r as d,N as e,M as f,R as g,yt as h,dt as i,gt as j,it as k,lt as l,bt as m,c as n,Q as o,x as p,j as q,Cs as r,i as s,q as t,$s as w};
