var nl=e=>{throw TypeError(e)};var il=(e,t,s)=>t.has(e)||nl("Cannot "+s);var wt=(e,t,s)=>(il(e,t,"read from private field"),s?s.call(e):t.get(e)),Gt=(e,t,s)=>t.has(e)?nl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s);var ln=(e,t,s)=>(il(e,t,"access private method"),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qr=globalThis,ia=qr.ShadowRoot&&(qr.ShadyCSS===void 0||qr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vd=Symbol(),al=new WeakMap;let P1=class{constructor(t,s,r){if(this._$cssResult$=!0,r!==vd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(ia&&t===void 0){const r=s!==void 0&&s.length===1;r&&(t=al.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&al.set(s,t))}return t}toString(){return this.cssText}};const H1=e=>new P1(typeof e=="string"?e:e+"",void 0,vd),W1=(e,t)=>{if(ia)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const r=document.createElement("style"),o=qr.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=s.cssText,e.appendChild(r)}},ll=ia?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const r of t.cssRules)s+=r.cssText;return H1(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:j1,defineProperty:R1,getOwnPropertyDescriptor:F1,getOwnPropertyNames:N1,getOwnPropertySymbols:I1,getPrototypeOf:B1}=Object,gt=globalThis,dl=gt.trustedTypes,G1=dl?dl.emptyScript:"",dn=gt.reactiveElementPolyfillSupport,Ls=(e,t)=>e,xo={toAttribute(e,t){switch(t){case Boolean:e=e?G1:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},aa=(e,t)=>!j1(e,t),cl={attribute:!0,type:String,converter:xo,reflect:!1,hasChanged:aa};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),gt.litPropertyMetadata??(gt.litPropertyMetadata=new WeakMap);let bs=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=cl){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,s);o!==void 0&&R1(this.prototype,t,o)}}static getPropertyDescriptor(t,s,r){const{get:o,set:n}=F1(this.prototype,t)??{get(){return this[s]},set(i){this[s]=i}};return{get(){return o==null?void 0:o.call(this)},set(i){const l=o==null?void 0:o.call(this);n.call(this,i),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??cl}static _$Ei(){if(this.hasOwnProperty(Ls("elementProperties")))return;const t=B1(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ls("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ls("properties"))){const s=this.properties,r=[...N1(s),...I1(s)];for(const o of r)this.createProperty(o,s[o])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[r,o]of s)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[s,r]of this.elementProperties){const o=this._$Eu(s,r);o!==void 0&&this._$Eh.set(o,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)s.unshift(ll(o))}else t!==void 0&&s.push(ll(t));return s}static _$Eu(t,s){const r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(s=>s(this))}addController(t){var s;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var s;(s=this._$EO)==null||s.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const r of s.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return W1(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostDisconnected)==null?void 0:r.call(s)})}attributeChangedCallback(t,s,r){this._$AK(t,r)}_$EC(t,s){var n;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const i=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:xo).toAttribute(s,r.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,s){var n;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=r.getPropertyOptions(o),l=typeof i.converter=="function"?{fromAttribute:i.converter}:((n=i.converter)==null?void 0:n.fromAttribute)!==void 0?i.converter:xo;this._$Em=o,this[o]=l.fromAttribute(s,i.type),this._$Em=null}}requestUpdate(t,s,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??aa)(this[t],s))return;this.P(t,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,s,r){this._$AL.has(t)||this._$AL.set(t,s),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,i]of o)i.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],i)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(r=this._$EO)==null||r.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(s)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(s)}willUpdate(t){}_$AE(t){var s;(s=this._$EO)==null||s.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EC(s,this[s]))),this._$EU()}updated(t){}firstUpdated(t){}};bs.elementStyles=[],bs.shadowRootOptions={mode:"open"},bs[Ls("elementProperties")]=new Map,bs[Ls("finalized")]=new Map,dn==null||dn({ReactiveElement:bs}),(gt.reactiveElementVersions??(gt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ds=globalThis,yo=Ds.trustedTypes,hl=yo?yo.createPolicy("lit-html",{createHTML:e=>e}):void 0,la="$lit$",Je=`lit$${Math.random().toFixed(9).slice(2)}$`,da="?"+Je,Z1=`<${da}>`,Vt=document,Ps=()=>Vt.createComment(""),Hs=e=>e===null||typeof e!="object"&&typeof e!="function",ca=Array.isArray,md=e=>ca(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",cn=`[ 	
\f\r]`,xs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gl=/-->/g,pl=/>/g,_t=RegExp(`>|${cn}(?:([^\\s"'>=/]+)(${cn}*=${cn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ul=/'/g,fl=/"/g,bd=/^(?:script|style|textarea|title)$/i,U1=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),ue=U1(1),Ae=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),vl=new WeakMap,Tt=Vt.createTreeWalker(Vt,129);function xd(e,t){if(!ca(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return hl!==void 0?hl.createHTML(t):t}const yd=(e,t)=>{const s=e.length-1,r=[];let o,n=t===2?"<svg>":t===3?"<math>":"",i=xs;for(let l=0;l<s;l++){const d=e[l];let h,v,p=-1,x=0;for(;x<d.length&&(i.lastIndex=x,v=i.exec(d),v!==null);)x=i.lastIndex,i===xs?v[1]==="!--"?i=gl:v[1]!==void 0?i=pl:v[2]!==void 0?(bd.test(v[2])&&(o=RegExp("</"+v[2],"g")),i=_t):v[3]!==void 0&&(i=_t):i===_t?v[0]===">"?(i=o??xs,p=-1):v[1]===void 0?p=-2:(p=i.lastIndex-v[2].length,h=v[1],i=v[3]===void 0?_t:v[3]==='"'?fl:ul):i===fl||i===ul?i=_t:i===gl||i===pl?i=xs:(i=_t,o=void 0);const w=i===_t&&e[l+1].startsWith("/>")?" ":"";n+=i===xs?d+Z1:p>=0?(r.push(h),d.slice(0,p)+la+d.slice(p)+Je+w):d+Je+(p===-2?l:w)}return[xd(e,n+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Ws{constructor({strings:t,_$litType$:s},r){let o;this.parts=[];let n=0,i=0;const l=t.length-1,d=this.parts,[h,v]=yd(t,s);if(this.el=Ws.createElement(h,r),Tt.currentNode=this.el.content,s===2||s===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=Tt.nextNode())!==null&&d.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(la)){const x=v[i++],w=o.getAttribute(p).split(Je),$=/([.?@])?(.*)/.exec(x);d.push({type:1,index:n,name:$[2],strings:w,ctor:$[1]==="."?_d:$[1]==="?"?Cd:$[1]==="@"?kd:Vr}),o.removeAttribute(p)}else p.startsWith(Je)&&(d.push({type:6,index:n}),o.removeAttribute(p));if(bd.test(o.tagName)){const p=o.textContent.split(Je),x=p.length-1;if(x>0){o.textContent=yo?yo.emptyScript:"";for(let w=0;w<x;w++)o.append(p[w],Ps()),Tt.nextNode(),d.push({type:2,index:++n});o.append(p[x],Ps())}}}else if(o.nodeType===8)if(o.data===da)d.push({type:2,index:n});else{let p=-1;for(;(p=o.data.indexOf(Je,p+1))!==-1;)d.push({type:7,index:n}),p+=Je.length-1}n++}}static createElement(t,s){const r=Vt.createElement("template");return r.innerHTML=t,r}}function Pt(e,t,s=e,r){var i,l;if(t===Ae)return t;let o=r!==void 0?(i=s._$Co)==null?void 0:i[r]:s._$Cl;const n=Hs(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),n===void 0?o=void 0:(o=new n(e),o._$AT(e,s,r)),r!==void 0?(s._$Co??(s._$Co=[]))[r]=o:s._$Cl=o),o!==void 0&&(t=Pt(e,o._$AS(e,t.values),o,r)),t}let wd=class{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??Vt).importNode(s,!0);Tt.currentNode=o;let n=Tt.nextNode(),i=0,l=0,d=r[0];for(;d!==void 0;){if(i===d.index){let h;d.type===2?h=new ps(n,n.nextSibling,this,t):d.type===1?h=new d.ctor(n,d.name,d.strings,this,t):d.type===6&&(h=new $d(n,this,t)),this._$AV.push(h),d=r[++l]}i!==(d==null?void 0:d.index)&&(n=Tt.nextNode(),i++)}return Tt.currentNode=Vt,o}p(t){let s=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,s),s+=r.strings.length-2):r._$AI(t[s])),s++}};class ps{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,s,r,o){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=Pt(this,t,s),Hs(t)?t===B||t==null||t===""?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==Ae&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):md(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&Hs(this._$AH)?this._$AA.nextSibling.data=t:this.T(Vt.createTextNode(t)),this._$AH=t}$(t){var n;const{values:s,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ws.createElement(xd(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(s);else{const i=new wd(o,this),l=i.u(this.options);i.p(s),this.T(l),this._$AH=i}}_$AC(t){let s=vl.get(t.strings);return s===void 0&&vl.set(t.strings,s=new Ws(t)),s}k(t){ca(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let r,o=0;for(const n of t)o===s.length?s.push(r=new ps(this.O(Ps()),this.O(Ps()),this,this.options)):r=s[o],r._$AI(n),o++;o<s.length&&(this._$AR(r&&r._$AB.nextSibling,o),s.length=o)}_$AR(t=this._$AA.nextSibling,s){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,s);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var s;this._$AM===void 0&&(this._$Cv=t,(s=this._$AP)==null||s.call(this,t))}}class Vr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,r,o,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=s,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=B}_$AI(t,s=this,r,o){const n=this.strings;let i=!1;if(n===void 0)t=Pt(this,t,s,0),i=!Hs(t)||t!==this._$AH&&t!==Ae,i&&(this._$AH=t);else{const l=t;let d,h;for(t=n[0],d=0;d<n.length-1;d++)h=Pt(this,l[r+d],s,d),h===Ae&&(h=this._$AH[d]),i||(i=!Hs(h)||h!==this._$AH[d]),h===B?t=B:t!==B&&(t+=(h??"")+n[d+1]),this._$AH[d]=h}i&&!o&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _d extends Vr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class Cd extends Vr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class kd extends Vr{constructor(t,s,r,o,n){super(t,s,r,o,n),this.type=5}_$AI(t,s=this){if((t=Pt(this,t,s,0)??B)===Ae)return;const r=this._$AH,o=t===B&&r!==B||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==B&&(r===B||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,t):this._$AH.handleEvent(t)}}class $d{constructor(t,s,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Pt(this,t)}}const Y1={M:la,P:Je,A:da,C:1,L:yd,R:wd,D:md,V:Pt,I:ps,H:Vr,N:Cd,U:kd,B:_d,F:$d},hn=Ds.litHtmlPolyfillSupport;hn==null||hn(Ws,ps),(Ds.litHtmlVersions??(Ds.litHtmlVersions=[])).push("3.2.1");const q1=(e,t,s)=>{const r=(s==null?void 0:s.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const n=(s==null?void 0:s.renderBefore)??null;r._$litPart$=o=new ps(t.insertBefore(Ps(),n),n,void 0,s??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kr=globalThis,ha=Kr.ShadowRoot&&(Kr.ShadyCSS===void 0||Kr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ga=Symbol(),ml=new WeakMap;let Sd=class{constructor(t,s,r){if(this._$cssResult$=!0,r!==ga)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(ha&&t===void 0){const r=s!==void 0&&s.length===1;r&&(t=ml.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ml.set(s,t))}return t}toString(){return this.cssText}};const J=e=>new Sd(typeof e=="string"?e:e+"",void 0,ga),R=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((r,o,n)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new Sd(s,e,ga)},K1=(e,t)=>{if(ha)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const r=document.createElement("style"),o=Kr.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=s.cssText,e.appendChild(r)}},bl=ha?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const r of t.cssRules)s+=r.cssText;return J(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:X1,defineProperty:J1,getOwnPropertyDescriptor:Q1,getOwnPropertyNames:eh,getOwnPropertySymbols:th,getPrototypeOf:sh}=Object,pt=globalThis,xl=pt.trustedTypes,rh=xl?xl.emptyScript:"",gn=pt.reactiveElementPolyfillSupport,zs=(e,t)=>e,wn={toAttribute(e,t){switch(t){case Boolean:e=e?rh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Md=(e,t)=>!X1(e,t),yl={attribute:!0,type:String,converter:wn,reflect:!1,hasChanged:Md};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),pt.litPropertyMetadata??(pt.litPropertyMetadata=new WeakMap);class Zt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=yl){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,s);o!==void 0&&J1(this.prototype,t,o)}}static getPropertyDescriptor(t,s,r){const{get:o,set:n}=Q1(this.prototype,t)??{get(){return this[s]},set(i){this[s]=i}};return{get(){return o==null?void 0:o.call(this)},set(i){const l=o==null?void 0:o.call(this);n.call(this,i),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??yl}static _$Ei(){if(this.hasOwnProperty(zs("elementProperties")))return;const t=sh(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(zs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(zs("properties"))){const s=this.properties,r=[...eh(s),...th(s)];for(const o of r)this.createProperty(o,s[o])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[r,o]of s)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[s,r]of this.elementProperties){const o=this._$Eu(s,r);o!==void 0&&this._$Eh.set(o,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)s.unshift(bl(o))}else t!==void 0&&s.push(bl(t));return s}static _$Eu(t,s){const r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(s=>s(this))}addController(t){var s;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var s;(s=this._$EO)==null||s.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const r of s.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return K1(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostDisconnected)==null?void 0:r.call(s)})}attributeChangedCallback(t,s,r){this._$AK(t,r)}_$EC(t,s){var n;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const i=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:wn).toAttribute(s,r.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,s){var n;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=r.getPropertyOptions(o),l=typeof i.converter=="function"?{fromAttribute:i.converter}:((n=i.converter)==null?void 0:n.fromAttribute)!==void 0?i.converter:wn;this._$Em=o,this[o]=l.fromAttribute(s,i.type),this._$Em=null}}requestUpdate(t,s,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Md)(this[t],s))return;this.P(t,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,s,r){this._$AL.has(t)||this._$AL.set(t,s),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,i]of o)i.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],i)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(r=this._$EO)==null||r.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(s)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(s)}willUpdate(t){}_$AE(t){var s;(s=this._$EO)==null||s.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EC(s,this[s]))),this._$EU()}updated(t){}firstUpdated(t){}}Zt.elementStyles=[],Zt.shadowRootOptions={mode:"open"},Zt[zs("elementProperties")]=new Map,Zt[zs("finalized")]=new Map,gn==null||gn({ReactiveElement:Zt}),(pt.reactiveElementVersions??(pt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let D=class extends Zt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const t=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=t.firstChild),t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=q1(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Ae}};var fd;D._$litElement$=!0,D.finalized=!0,(fd=globalThis.litElementHydrateSupport)==null||fd.call(globalThis,{LitElement:D});const pn=globalThis.litElementPolyfillSupport;pn==null||pn({LitElement:D});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=e=>(t,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oh={attribute:!0,type:String,converter:xo,reflect:!1,hasChanged:aa},nh=(e=oh,t,s)=>{const{kind:r,metadata:o}=s;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(s.name,e),r==="accessor"){const{name:i}=s;return{set(l){const d=t.get.call(this);t.set.call(this,l),this.requestUpdate(i,d,e)},init(l){return l!==void 0&&this.P(i,void 0,e),l}}}if(r==="setter"){const{name:i}=s;return function(l){const d=this[i];t.call(this,l),this.requestUpdate(i,d,e)}}throw Error("Unsupported decorator location: "+r)};function g(e){return(t,s)=>typeof s=="object"?nh(e,t,s):((r,o,n)=>{const i=o.hasOwnProperty(n);return o.constructor.createProperty(n,i?{...r,wrapped:!0}:r),i?Object.getOwnPropertyDescriptor(o,n):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function W(e){return g({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pa=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function oe(e,t){return(s,r,o)=>{const n=i=>{var l;return((l=i.renderRoot)==null?void 0:l.querySelector(e))??null};return pa(s,r,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ih;function ah(e){return(t,s)=>pa(t,s,{get(){return(this.renderRoot??ih??(ih=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rt(e){return(t,s)=>pa(t,s,{async get(){var r;return await this.updateComplete,((r=this.renderRoot)==null?void 0:r.querySelector(e))??null}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ed=(e,t,s)=>{for(const r of t)if(r[0]===e)return(0,r[1])();return s==null?void 0:s()};var ua=Object.defineProperty,lh=Object.defineProperties,dh=Object.getOwnPropertyDescriptor,ch=Object.getOwnPropertyDescriptors,wl=Object.getOwnPropertySymbols,hh=Object.prototype.hasOwnProperty,gh=Object.prototype.propertyIsEnumerable,_l=(e,t,s)=>t in e?ua(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,ts=(e,t)=>{for(var s in t||(t={}))hh.call(t,s)&&_l(e,s,t[s]);if(wl)for(var s of wl(t))gh.call(t,s)&&_l(e,s,t[s]);return e},wo=(e,t)=>lh(e,ch(t)),ph=(e,t)=>{for(var s in t)ua(e,s,{get:t[s],enumerable:!0})},a=(e,t,s,r)=>{for(var o=r>1?void 0:r?dh(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&ua(t,s,o),o},fa=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},c=(e,t,s)=>(fa(e,t,"read from private field"),s?s.call(e):t.get(e)),f=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},Z=(e,t,s,r)=>(fa(e,t,"write to private field"),t.set(e,s),s),C=(e,t,s)=>(fa(e,t,"access private method"),s),Lt="-13dd20",va=class{static get instance(){var e;return(e=globalThis.__gdsElementLookupTable)!=null&&e[Lt]||(globalThis.__gdsElementLookupTable=wo(ts({},globalThis.__gdsElementLookupTable),{[Lt]:new Map})),globalThis.__gdsElementLookupTable[Lt]}};function uh(e){const t=e+Lt;return va.instance.set(e,t),function(s){return s.prototype.gdsElementName=e,customElements.get(t)?r=>!1:j(t)(s)}}function fh(e){return va.instance.set(e,e),function(t){return t.prototype.gdsElementName=e,j(e)(t)}}var k=e=>globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?fh(e):uh(e),Cl=new WeakMap;function vh(e,...t){let s=Cl.get(e);return s||(s=kl(e),s.raw=kl(e.raw),Cl.set(e,s)),[s,...t]}var kl=e=>e.map(t=>{for(const[s,r]of va.instance.entries())t=t.replace(new RegExp(`${s}(?![-a-z])`,"mg"),r);return t});function mh(e){return(t,...s)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return e(t,...s);const[r,...o]=vh(t,...s);return e(r,...o)}}var m=mh(ue),Td=R`
  @layer defaults {
    a:link {
      color: currentColor;
      text-undeline-offset: 0.2lh;
      font-weight: var(--gds-text-weight-book);
    }

    h1 {
      font-size: var(--gds-text-size-heading-xl);
      line-height: var(--gds-text-line-height-heading-xl);
      font-weight: var(--gds-text-weight-regular);
    }

    h2 {
      font-size: var(--gds-text-size-heading-l);
      line-height: var(--gds-text-line-height-heading-l);
      font-weight: var(--gds-text-weight-regular);
    }

    h3 {
      font-size: var(--gds-text-size-heading-m);
      line-height: var(--gds-text-line-height-heading-m);
      font-weight: var(--gds-text-weight-regular);
    }

    h4 {
      font-size: var(--gds-text-size-heading-s);
      line-height: var(--gds-text-line-height-heading-s);
      font-weight: var(--gds-text-weight-regular);
    }

    h5 {
      font-size: var(--gds-text-size-heading-xs);
      line-height: var(--gds-text-line-height-heading-xs);
      font-weight: var(--gds-text-weight-regular);
    }

    h6 {
      font-size: var(--gds-text-size-heading-2xs);
      line-height: var(--gds-text-line-height-heading-2xs);
      font-weight: var(--gds-text-weight-regular);
    }

    p,
    li {
      font-size: var(--gds-text-size-body-m);
      line-height: var(--gds-text-line-height-body-m);
    }

    strong {
      font-weight: var(--gds-text-weight-medium);
    }
  }
`,bh={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},xh=/^([<|>]=?)?([0-9a-z]+)/,Ad=["{","}",";",":",","],$l=[" ","/n"];function yh(e){const t=[];let s="";for(let r=0;r<e.length;r++){const o=e[r];if($l.includes(o)||(s+=o),Ad.includes(o)){t.push(s.slice(0,-1)),t.push(o),s="";continue}if($l.includes(o)||r===e.length-1){t.push(s),s="";continue}}return t.filter(r=>r!=="")}function wh(e){var t;const s=[];let r={breakpoint:"-",values:[]};const o=()=>({sel:"",values:[]});let n=o();for(const i of e){if(!Ad.includes(i)){n.values.push(i);continue}if(i==="{"&&(r={breakpoint:n.values.join(","),values:[]},n=o()),i===";"&&(s.length===0&&s.push(r),n.values.length>0&&(r.values.push(n),n=o())),i===":"){const l=(t=n.values.pop())!=null?t:"";n.sel=l}r&&i==="}"&&(r.values.push(n),n=o(),s.push(r))}return n.values.length>0&&r.values.push(n),s.length===0&&s.push(r),s}function _h(e){return e.split(",").map(s=>{const r=s.trim().match(xh);if(!r)throw new Error(`Invalid breakpoint specifier: ${s}`);return{condition:r[1],value:r[2]}})}function Ch(e,t,s,r=n=>n,o=(n,i)=>`${n}: ${i.join(" ")};`){let n="";for(const i of s){const h=`@media ${(i.breakpoint==="-"?[{condition:">=",value:"0"}]:_h(i.breakpoint)).map(v=>{var p,x;return`(${(p=v.condition)!=null&&p.includes("<")?"max-width":"min-width"}: ${(x=bh[v.value])!=null?x:v.value})`}).join(" and ")} {${i.values.map(v=>{let p=e;v.sel.length>0&&(p=e===":host"?`:host(:${v.sel})`:`${e}:${v.sel}`);const x=o(t,v.values.map(r));return v.sel==="hover"?`@media (hover: hover) {${p}{${x}}}`:`${p}{${x}}`}).join("")}}`;n+=h}return n}var un=new Map;function y(e){return(t,s)=>{var r,o,n,i;const l=(r=e==null?void 0:e.selector)!=null?r:":host",d=(o=e==null?void 0:e.property)!=null?o:String(s),h=(n=e==null?void 0:e.valueTemplate)!=null?n:x=>`var(--gds-space-${x}, 0)`,v=e==null?void 0:e.styleTemplate,p=(i=e==null?void 0:e.cacheOverrideKey)!=null?i:"0";g({attribute:e==null?void 0:e.attribute,noAccessor:!0})(t,s),Object.defineProperty(t,s,{get:function(){return this["__"+String(s)]},set:async function(x){var w;this["__"+String(s)]=x,await this.updateComplete;const $=(w=this.level)!=null?w:"0",M=l+d+x+$+p;if(un.has(M)){this._dynamicStylesController.inject(`sep_${String(s)}`,un.get(M));return}const P=wh(yh(x)),z=Ch(l,d,P,h.bind(this),v==null?void 0:v.bind(this)),F=J(z);un.set(M,F),this._dynamicStylesController.inject(`sep_${String(s)}`,F)}})}}var Ve,_o,Qe,Co,At,Pe,ct,ko,_n,Od,Ut,ws,Cn,Ld,kh=class{constructor(e){f(this,_n),f(this,Ut),f(this,Cn),f(this,Ve,!ma()),f(this,_o,!1),f(this,Qe,[]),f(this,Co,[]),f(this,At,new Map),f(this,Pe,new Map),f(this,ct,[]),f(this,ko,[]),this.host=e,this.host.addController(this)}hostConnected(){C(this,Cn,Ld).call(this)}has(e){return c(this,Ve)?c(this,Pe).has(e):c(this,At).has(e)}inject(e,t){C(this,_n,Od).call(this,e,t),C(this,Ut,ws).call(this)}clear(e){if(c(this,Ve)){const t=c(this,Pe).get(e);t==null||t.remove(),c(this,Pe).delete(e)}else c(this,At).delete(e);C(this,Ut,ws).call(this)}clearAll(){c(this,Ve)?(c(this,Pe).forEach(e=>e.remove()),c(this,ct).forEach(e=>e.remove()),c(this,Pe).clear(),Z(this,ct,[])):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],c(this,At).clear(),Z(this,Qe,[]))}clearInitial(){c(this,Ve)?(c(this,ct).forEach(e=>e.remove()),Z(this,ct,[])):Z(this,Qe,[]),C(this,Ut,ws).call(this)}restoreInitial(){c(this,Ve)?c(this,ko).forEach(e=>{c(this,ct).push(e.cloneNode(!0))}):Z(this,Qe,[...c(this,Co)]),C(this,Ut,ws).call(this)}};Ve=new WeakMap;_o=new WeakMap;Qe=new WeakMap;Co=new WeakMap;At=new WeakMap;Pe=new WeakMap;ct=new WeakMap;ko=new WeakMap;_n=new WeakSet;Od=function(e,t){if(c(this,Ve)){let s=c(this,Pe).get(e);s||(s=document.createElement("style"),c(this,Pe).set(e,s)),s.textContent=t.cssText}else{if(!this.host.shadowRoot||!t.styleSheet)return;c(this,At).set(e,t.styleSheet)}};Ut=new WeakSet;ws=function(){if(c(this,Ve)){if(!this.host.shadowRoot)return;this.host.shadowRoot.querySelectorAll("style").forEach(e=>{e.remove()}),c(this,Pe).forEach(e=>{var t;(t=this.host.shadowRoot)==null||t.appendChild(e)})}else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...c(this,Qe),...Array.from(c(this,At).values())]}};Cn=new WeakSet;Ld=function(){if(!c(this,_o)){if(c(this,Ve)){if(!this.host.shadowRoot)return;this.host.shadowRoot.querySelectorAll("style").forEach(e=>{c(this,ct).push(e),c(this,ko).push(e.cloneNode(!0))})}else this.host.shadowRoot&&c(this,Qe).length===0&&(Z(this,Qe,[...this.host.shadowRoot.adoptedStyleSheets||[]]),Z(this,Co,[...c(this,Qe)]));Z(this,_o,!0)}};function ma(){try{return new CSSStyleSheet,!0}catch{return!1}}var kn,$o,So,ba,$n,Dd,Sn,zd,$h=class Vd{constructor(){f(this,$n),f(this,Sn),f(this,kn,!ma()),f(this,$o,new Map),f(this,So,new Map),f(this,ba,document.adoptedStyleSheets||[])}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new Vd),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(t,s){if(c(this,kn)){const r=Array.isArray(s)?s.map(o=>o.toString()).join(""):s.toString();C(this,$n,Dd).call(this,t,r)}else s.styleSheet&&C(this,Sn,zd).call(this,t,s.styleSheet)}};kn=new WeakMap;$o=new WeakMap;So=new WeakMap;ba=new WeakMap;$n=new WeakSet;Dd=function(e,t){let s=c(this,So).get(e);s||(s=document.createElement("style"),c(this,So).set(e,s)),s.textContent=t,document.head.appendChild(s)};Sn=new WeakSet;zd=function(e,t){c(this,$o).set(e,t),document.adoptedStyleSheets=[...c(this,ba),...Array.from(c(this,$o).values())]};var Sh=$h,Mn=`/**
 * Do not edit directly
 * Generated on Thu, 14 Nov 2024 15:15:52 GMT
 */

color-scheme: dark;
  --gds-color-l1-background-primary: #0e0e0e;
  --gds-color-l1-background-tertiary: #d7d7d7;
  --gds-color-l1-background-secondary: #131313;
  --gds-color-l1-content-positive: #54b561;
  --gds-color-l1-content-negative: #a63e2a;
  --gds-color-l1-content-primary: #d7d7d7;
  --gds-color-l1-content-secondary: #ababab;
  --gds-color-l1-content-tertiary: #1b1b1b;
  --gds-color-l2-background-primary: #242424;
  --gds-color-l2-background-secondary: #242424;
  --gds-color-l2-background-tertiary: #d7d7d7;
  --gds-color-l2-background-positive: #1d3f22;
  --gds-color-l2-background-negative: #4a1c13;
  --gds-color-l2-background-notice: #152c41;
  --gds-color-l2-background-warning: #4c3212;
  --gds-color-l2-background-information: #353535;
  --gds-color-l2-background-copper-01: #f2efeb;
  --gds-color-l2-background-copper-02: #332a18;
  --gds-color-l2-background-purple-01: #f3eff7;
  --gds-color-l2-background-purple-02: #372b40;
  --gds-color-l2-background-green-01: #ecf6ed;
  --gds-color-l2-background-green-02: #1d3f22;
  --gds-color-l2-background-blue-01: #eaf0f7;
  --gds-color-l2-background-blue-02: #152c41;
  --gds-color-l2-content-primary: #d7d7d7;
  --gds-color-l2-content-secondary: #ababab;
  --gds-color-l2-content-tertiary: #1b1b1b;
  --gds-color-l2-content-positive: #54b561;
  --gds-color-l2-content-negative: #ee8375;
  --gds-color-l2-content-warning: #f3b274;
  --gds-color-l2-content-notice: #78a3d5;
  --gds-color-l2-content-infomation: #d7d7d7;
  --gds-color-l2-content-copper-01: #1b1b1b;
  --gds-color-l2-content-copper-02: #ffffff;
  --gds-color-l2-content-purple-01: #1b1b1b;
  --gds-color-l2-content-purple-02: #ffffff;
  --gds-color-l2-content-green-01: #1b1b1b;
  --gds-color-l2-content-green-02: #ffffff;
  --gds-color-l2-content-blue-01: #1b1b1b;
  --gds-color-l2-content-blue-02: #ffffff;
  --gds-color-l2-border-primary: #353535;
  --gds-color-l2-border-secondary: #5e5e5e;
  --gds-color-l2-border-tertiary: #2c2c2c;
  --gds-color-l2-border-quarternary: #d7d7d7;
  --gds-color-l2-border-inversed: #1b1b1b;
  --gds-color-l3-background-primary: #d7d7d7;
  --gds-color-l3-background-secondary: #353535;
  --gds-color-l3-background-tertiary: #424242;
  --gds-color-l3-background-quarternary: #0e0e0e;
  --gds-color-l3-background-positive: #54b561;
  --gds-color-l3-background-positive-secondary: #25512b;
  --gds-color-l3-background-positive-badge: #306938;
  --gds-color-l3-background-negative: #c04831;
  --gds-color-l3-background-negative-secondary: #602418;
  --gds-color-l3-background-negative-badge: #4A1C13;
  --gds-color-l3-background-notice: #78a3d5;
  --gds-color-l3-background-notice-secondary: #1A3853;
  --gds-color-l3-background-notice-badge: #214769;
  --gds-color-l3-background-warning: #f3b274;
  --gds-color-l3-background-warning-secondary: #624017;
  --gds-color-l3-background-warning-badge: #744C1B;
  --gds-color-l3-background-information: #d7d7d7;
  --gds-color-l3-background-information-secondary: #424242;
  --gds-color-l3-background-information-badge: #616161;
  --gds-color-l3-background-buy: #3571a6;
  --gds-color-l3-background-copper-01: #e4ded5;
  --gds-color-l3-background-copper-02: #42361f;
  --gds-color-l3-background-purple-01: #e7deee;
  --gds-color-l3-background-purple-02: #473752;
  --gds-color-l3-background-green-01: #d7edd9;
  --gds-color-l3-background-green-02: #25512b;
  --gds-color-l3-background-blue-01: #d3dfef;
  --gds-color-l3-background-blue-02: #1a3853;
  --gds-color-l3-background-disabled: #181818;
  --gds-color-l3-background-disabled-secondary: #1b1b1b;
  --gds-color-l3-content-primary: #1b1b1b;
  --gds-color-l3-content-secondary: #ababab;
  --gds-color-l3-content-tertiary: #d7d7d7;
  --gds-color-l3-content-notice: #78a3d5;
  --gds-color-l3-content-warning: #f3b274;
  --gds-color-l3-content-information: #d7d7d7;
  --gds-color-l3-content-buy: #ffffff;
  --gds-color-l3-content-copper-01: #1b1b1b;
  --gds-color-l3-content-copper-02: #ffffff;
  --gds-color-l3-content-purple-01: #1b1b1b;
  --gds-color-l3-content-purple-02: #ffffff;
  --gds-color-l3-content-green-01: #1b1b1b;
  --gds-color-l3-content-green-02: #ffffff;
  --gds-color-l3-content-blue-01: #1b1b1b;
  --gds-color-l3-content-blue-02: #ffffff;
  --gds-color-l3-content-disabled: #5e5e5e;
  --gds-color-l3-content-positive: #54b561;
  --gds-color-l3-content-negative: #ee8375;
  --gds-color-l3-border-primary: #d7d7d7;
  --gds-color-l3-border-secondary: #ababab;
  --gds-color-l3-border-tertiary: #1b1b1b;
  --gds-color-l3-border-negative: #ee8375;
  --gds-color-l3-states-dark-hover: #ffffff 10%;
  --gds-color-l3-states-dark-pressed: #ffffff 20%;
  --gds-color-l3-states-light-hover: #d7d7d7 10%;
  --gds-color-l3-states-light-pressed: #d7d7d7 20%;
  --gds-color-l3-states-positive-hover: #54b561 10%;
  --gds-color-l3-states-positive-pressed: #54b561 20%;
  --gds-color-l3-states-negative-hover: #ee8375 10%;
  --gds-color-l3-states-negative-pressed: #ee8375 20%;
`,Pd=`/**
 * Do not edit directly
 * Generated on Thu, 14 Nov 2024 15:15:52 GMT
 */

color-scheme: light;
  --gds-color-l1-background-primary: #ffffff;
  --gds-color-l1-background-tertiary: #1b1b1b;
  --gds-color-l1-background-secondary: #eeeeee;
  --gds-color-l1-content-positive: #35723d;
  --gds-color-l1-content-negative: #a63e2a;
  --gds-color-l1-content-primary: #1b1b1b;
  --gds-color-l1-content-secondary: #5e5e5e;
  --gds-color-l1-content-tertiary: #ffffff;
  --gds-color-l2-background-primary: #f3f3f3;
  --gds-color-l2-background-secondary: #ffffff;
  --gds-color-l2-background-tertiary: #242424;
  --gds-color-l2-background-positive: #ecf6ed;
  --gds-color-l2-background-negative: #fcecea;
  --gds-color-l2-background-notice: #eaf0f7;
  --gds-color-l2-background-warning: #fcecbc;
  --gds-color-l2-background-information: #e2e2e2;
  --gds-color-l2-background-copper-01: #f2efeb;
  --gds-color-l2-background-copper-02: #332a18;
  --gds-color-l2-background-purple-01: #f3eff7;
  --gds-color-l2-background-purple-02: #372b40;
  --gds-color-l2-background-green-01: #ecf6ed;
  --gds-color-l2-background-green-02: #1d3f22;
  --gds-color-l2-background-blue-01: #eaf0f7;
  --gds-color-l2-background-blue-02: #152c41;
  --gds-color-l2-content-primary: #1b1b1b;
  --gds-color-l2-content-secondary: #5e5e5e;
  --gds-color-l2-content-tertiary: #ffffff;
  --gds-color-l2-content-positive: #35723d;
  --gds-color-l2-content-negative: #a63e2a;
  --gds-color-l2-content-warning: #65581e;
  --gds-color-l2-content-notice: #005fac;
  --gds-color-l2-content-infomation: #1b1b1b;
  --gds-color-l2-content-copper-01: #1b1b1b;
  --gds-color-l2-content-copper-02: #ffffff;
  --gds-color-l2-content-purple-01: #1b1b1b;
  --gds-color-l2-content-purple-02: #ffffff;
  --gds-color-l2-content-green-01: #1b1b1b;
  --gds-color-l2-content-green-02: #ffffff;
  --gds-color-l2-content-blue-01: #1b1b1b;
  --gds-color-l2-content-blue-02: #ffffff;
  --gds-color-l2-border-primary: #d7d7d7;
  --gds-color-l2-border-secondary: #6f6f6f;
  --gds-color-l2-border-tertiary: #f9f9f9;
  --gds-color-l2-border-quarternary: #1b1b1b;
  --gds-color-l2-border-inversed: #ffffff;
  --gds-color-l3-background-primary: #1b1b1b;
  --gds-color-l3-background-secondary: #e2e2e2;
  --gds-color-l3-background-tertiary: #d7d7d7;
  --gds-color-l3-background-quarternary: #ffffff;
  --gds-color-l3-background-positive: #35723d;
  --gds-color-l3-background-positive-secondary: #d7edd9;
  --gds-color-l3-background-positive-badge: #d7edd9;
  --gds-color-l3-background-negative: #a63e2a;
  --gds-color-l3-background-negative-secondary: #fcecea;
  --gds-color-l3-background-negative-badge: #f8d6d3;
  --gds-color-l3-background-notice: #005fac;
  --gds-color-l3-background-notice-secondary: #d3dfef;
  --gds-color-l3-background-notice-badge: #d3dfef;
  --gds-color-l3-background-warning: #65581e;
  --gds-color-l3-background-warning-secondary: #fadf7b;
  --gds-color-l3-background-warning-badge: #fadf7b;
  --gds-color-l3-background-information: #1b1b1b;
  --gds-color-l3-background-information-secondary: #d7d7d7;
  --gds-color-l3-background-information-badge: #d7d7d7;
  --gds-color-l3-background-buy: #2e6290;
  --gds-color-l3-background-copper-01: #e4ded5;
  --gds-color-l3-background-copper-02: #42361f;
  --gds-color-l3-background-purple-01: #e7deee;
  --gds-color-l3-background-purple-02: #473752;
  --gds-color-l3-background-green-01: #d7edd9;
  --gds-color-l3-background-green-02: #25512b;
  --gds-color-l3-background-blue-01: #d3dfef;
  --gds-color-l3-background-blue-02: #1a3853;
  --gds-color-l3-background-disabled: #f9f9f9;
  --gds-color-l3-background-disabled-secondary: #f3f3f3;
  --gds-color-l3-content-primary: #ffffff;
  --gds-color-l3-content-secondary: #5e5e5e;
  --gds-color-l3-content-tertiary: #1b1b1b;
  --gds-color-l3-content-notice: #005fac;
  --gds-color-l3-content-warning: #65581e;
  --gds-color-l3-content-information: #1b1b1b;
  --gds-color-l3-content-buy: #ffffff;
  --gds-color-l3-content-copper-01: #1b1b1b;
  --gds-color-l3-content-copper-02: #ffffff;
  --gds-color-l3-content-purple-01: #1b1b1b;
  --gds-color-l3-content-purple-02: #ffffff;
  --gds-color-l3-content-green-01: #1b1b1b;
  --gds-color-l3-content-green-02: #ffffff;
  --gds-color-l3-content-blue-01: #1b1b1b;
  --gds-color-l3-content-blue-02: #ffffff;
  --gds-color-l3-content-disabled: #ababab;
  --gds-color-l3-content-positive: #35723d;
  --gds-color-l3-content-negative: #a63e2a;
  --gds-color-l3-border-primary: #1b1b1b;
  --gds-color-l3-border-secondary: #6f6f6f;
  --gds-color-l3-border-tertiary: #d7d7d7;
  --gds-color-l3-border-negative: #a63e2a;
  --gds-color-l3-states-dark-hover: #ffffff 10%;
  --gds-color-l3-states-dark-pressed: #ffffff 20%;
  --gds-color-l3-states-light-hover: #1b1b1b 10%;
  --gds-color-l3-states-light-pressed: #1b1b1b 20%;
  --gds-color-l3-states-positive-hover: #35723d 10%;
  --gds-color-l3-states-positive-pressed: #35723d 20%;
  --gds-color-l3-states-negative-hover: #a63e2a 10%;
  --gds-color-l3-states-negative-pressed: #a63e2a 20%;
`,Mh=`/**
 * Do not edit directly
 * Generated on Thu, 14 Nov 2024 15:15:52 GMT
 */

:host {
  --gds-sys-motion-duration-slowest: 1.5s;
  --gds-sys-motion-duration-slow: 1s;
  --gds-sys-motion-duration-default: .5s;
  --gds-sys-motion-duration-fast: .4s;
  --gds-sys-motion-duration-fastest: .2s;
  --gds-sys-motion-easing-linear: cubic-bezier(0, 0, 1, 1);
  --gds-sys-motion-easing-ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --gds-sys-motion-easing-ease-in-out: cubic-bezier(0.83, 0, 0.17, 1);
  --gds-sys-motion-easing-ease-in: cubic-bezier(0.64, 0, 0.78, 0);
}
`,Eh=`/**
 * Do not edit directly
 * Generated on Thu, 14 Nov 2024 15:15:52 GMT
 */

:host {
  --gds-ref-color-neutral-000: #ffffff;
  --gds-ref-color-neutral-050: #f8f8f8;
  --gds-ref-color-neutral-100: #e9e9e9;
  --gds-ref-color-neutral-150: #eeeeee;
  --gds-ref-color-neutral-200: #dedede;
  --gds-ref-color-neutral-250: #cecece;
  --gds-ref-color-neutral-300: #ababab;
  --gds-ref-color-neutral-350: #adadad;
  --gds-ref-color-neutral-400: #868686;
  --gds-ref-color-neutral-450: #757575;
  --gds-ref-color-neutral-500: #494949;
  --gds-ref-color-neutral-525: #464646;
  --gds-ref-color-neutral-550: #333333;
  --gds-ref-color-neutral-600: #2c2c2c;
  --gds-ref-color-neutral-650: #272727;
  --gds-ref-color-neutral-700: #222222;
  --gds-ref-color-neutral-750: #1a1a1a;
  --gds-ref-color-neutral-800: #121212;
  --gds-ref-color-neutral-1000: #000000;
  --gds-ref-color-blue-100: #58b8ee;
  --gds-ref-color-blue-200: #41b0ee;
  --gds-ref-color-blue-300: #00adff;
  --gds-ref-color-blue-400: #2c9cd9;
  --gds-ref-color-blue-500: #0092e1;
  --gds-ref-color-blue-600: #007ac7;
  --gds-ref-color-blue-700: #0062bc;
  --gds-ref-color-green-100: #75b44a;
  --gds-ref-color-green-200: #60cd18;
  --gds-ref-color-green-300: #45b400;
  --gds-ref-color-green-400: #308800;
  --gds-ref-color-red-100: #f7706d;
  --gds-ref-color-red-200: #ff594f;
  --gds-ref-color-red-300: #f03529;
  --gds-ref-color-red-400: #d81a1a;
  --gds-ref-color-red-500: #c82a29;
  --gds-ref-color-red-600: #bb000c;
  --gds-ref-color-red-700: #9f000a;
  --gds-ref-color-red-800: #9e2120;
  --gds-ref-color-purple-100: #ad91dc;
  --gds-ref-color-purple-200: #7e52cc;
  --gds-ref-color-purple-300: #673ab6;
  --gds-ref-color-purple-400: #4f2C99;
  --gds-ref-color-purple-500: #4a328f;
  --gds-ref-color-purple-600: #3f2587;
  --gds-ref-color-yellow-100: #ffe182;
  --gds-ref-color-yellow-200: #ffc500;
  --gds-ref-color-yellow-300: #ffb400;
  --gds-ref-color-yellow-400: #f8a000;
  --gds-ref-color-yellow-500: #f0be47;
  --gds-ref-color-yellow-600: #ebab39;
  --gds-ref-color-blue-5: #001127;
  --gds-ref-color-blue-10: #001C39;
  --gds-ref-color-blue-15: #00264B;
  --gds-ref-color-blue-20: #00315D;
  --gds-ref-color-blue-25: #003C70;
  --gds-ref-color-blue-30: #004883;
  --gds-ref-color-blue-35: #005397;
  --gds-ref-color-blue-40: #005FAC;
  --gds-ref-color-blue-45: #006CC1;
  --gds-ref-color-blue-50: #0078D7;
  --gds-ref-color-blue-55: #0085EC;
  --gds-ref-color-blue-60: #1992FF;
  --gds-ref-color-blue-65: #4EA0FF;
  --gds-ref-color-blue-70: #6FAEFF;
  --gds-ref-color-blue-75: #8ABBFF;
  --gds-ref-color-blue-80: #A4C9FF;
  --gds-ref-color-blue-85: #BCD6FF;
  --gds-ref-color-blue-90: #D4E3FF;
  --gds-ref-color-blue-95: #EBF1FF;
  --gds-ref-color-blue-98: #F8F9FF;
  --gds-ref-color-green-5: #001505;
  --gds-ref-color-green-10: #00210E;
  --gds-ref-color-green-15: #002D10;
  --gds-ref-color-green-20: #003916;
  --gds-ref-color-green-25: #00461D;
  --gds-ref-color-green-30: #005323;
  --gds-ref-color-green-35: #00602A;
  --gds-ref-color-green-40: #006D31;
  --gds-ref-color-green-45: #007B38;
  --gds-ref-color-green-50: #138942;
  --gds-ref-color-green-55: #29964D;
  --gds-ref-color-green-60: #39A459;
  --gds-ref-color-green-65: #48B265;
  --gds-ref-color-green-70: #57C071;
  --gds-ref-color-green-75: #65CE7E;
  --gds-ref-color-green-80: #73DC8A;
  --gds-ref-color-green-85: #81EA97;
  --gds-ref-color-green-90: #8FF9A4;
  --gds-ref-color-green-95: #C5FFCA;
  --gds-ref-color-green-98: #EAFFE8;
  --gds-ref-color-black: #000000;
  --gds-ref-color-white: #FFFFFF;
  --gds-ref-color-grey-5: #0D0D0C;
  --gds-ref-color-grey-10: #1B1B18;
  --gds-ref-color-grey-15: #282825;
  --gds-ref-color-grey-20: #353531;
  --gds-ref-color-grey-25: #42423D;
  --gds-ref-color-grey-30: #505049;
  --gds-ref-color-grey-35: #5D5D56;
  --gds-ref-color-grey-40: #6A6A62;
  --gds-ref-color-grey-45: #77776E;
  --gds-ref-color-grey-50: #85857A;
  --gds-ref-color-grey-55: #919188;
  --gds-ref-color-grey-60: #9D9D95;
  --gds-ref-color-grey-65: #A9A9A2;
  --gds-ref-color-grey-70: #B6B6AF;
  --gds-ref-color-grey-75: #C2C2BD;
  --gds-ref-color-grey-80: #CECECA;
  --gds-ref-color-grey-85: #DADAD7;
  --gds-ref-color-grey-90: #E7E7E4;
  --gds-ref-color-grey-95: #F3F3F2;
  --gds-ref-color-grey-98: #F9F9F9;
  --gds-ref-color-orange-5: #1A0F00;
  --gds-ref-color-orange-10: #271900;
  --gds-ref-color-orange-15: #352200;
  --gds-ref-color-orange-20: #422C00;
  --gds-ref-color-orange-25: #503700;
  --gds-ref-color-orange-30: #503700;
  --gds-ref-color-orange-35: #6E4C00;
  --gds-ref-color-orange-40: #7D5700;
  --gds-ref-color-orange-45: #8D6300;
  --gds-ref-color-orange-50: #9D6E00;
  --gds-ref-color-orange-55: #AE7A00;
  --gds-ref-color-orange-60: #BE8600;
  --gds-ref-color-orange-65: #CF9300;
  --gds-ref-color-orange-70: #E19F00;
  --gds-ref-color-orange-75: #F2AC00;
  --gds-ref-color-orange-80: #FFBA30;
  --gds-ref-color-orange-85: #FFCC77;
  --gds-ref-color-orange-90: #FFDEAB;
  --gds-ref-color-orange-95: #FFEED9;
  --gds-ref-color-orange-98: #FFF8F3;
  --gds-ref-color-red-5: #2B0200;
  --gds-ref-color-red-10: #3E0400;
  --gds-ref-color-red-15: #510700;
  --gds-ref-color-red-20: #650B00;
  --gds-ref-color-red-25: #790F00;
  --gds-ref-color-red-30: #8E1400;
  --gds-ref-color-red-35: #A31800;
  --gds-ref-color-red-40: #BA1D00;
  --gds-ref-color-red-45: #D02200;
  --gds-ref-color-red-50: #E23010;
  --gds-ref-color-red-55: #F53E1D;
  --gds-ref-color-red-60: #FF5636;
  --gds-ref-color-red-65: #FF7257;
  --gds-ref-color-red-70: #FF8A73;
  --gds-ref-color-red-75: #FFA08D;
  --gds-ref-color-red-80: #FFB4A5;
  --gds-ref-color-red-85: #FFC8BC;
  --gds-ref-color-red-90: #FFDAD3;
  --gds-ref-color-red-95: #FFEDE9;
  --gds-ref-color-red-98: #FFF8F6;
}
`,Th=`/**
 * Do not edit directly
 * Generated on Thu, 14 Nov 2024 15:15:52 GMT
 */

:host {
--gds-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
--gds-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
--gds-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);
--gds-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03);
--gds-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03);
}
`,Ah=`/**
 * Do not edit directly
 * Generated on Thu, 14 Nov 2024 15:15:52 GMT
 */

:host {
  --gds-space-max: 999px;
  --gds-space-8xl: 120px;
  --gds-space-7xl: 112px;
  --gds-space-6xl: 96px;
  --gds-space-5xl: 80px;
  --gds-space-4xl: 64px;
  --gds-space-3xl: 48px;
  --gds-space-2xl: 40px;
  --gds-space-xl: 32px;
  --gds-space-l: 24px;
  --gds-space-m: 16px;
  --gds-space-s: 12px;
  --gds-space-xs: 8px;
  --gds-space-2xs: 4px;
  --gds-space-3xs: 2px;
  --gds-space-4xs: 1px;
  --gds-space-0: 0px;
}
`,Oh=`/**
 * Do not edit directly
 * Generated on Thu, 14 Nov 2024 15:15:52 GMT
 */

:host {
  --gds-text-weight-bold: 700;
  --gds-text-weight-medium: 500;
  --gds-text-weight-book: 450;
  --gds-text-weight-regular: 400;
  --gds-text-weight-light: 300;
  --gds-text-size-preamble-xs: 16px;
  --gds-text-size-preamble-s: 18px;
  --gds-text-size-preamble-m: 20px;
  --gds-text-size-preamble-l: 24px;
  --gds-text-size-preamble-xl: 28px;
  --gds-text-size-preamble-2xl: 32px;
  --gds-text-size-display-s: 32px;
  --gds-text-size-display-m: 36px;
  --gds-text-size-display-l: 48px;
  --gds-text-size-display-xl: 64px;
  --gds-text-size-display-2xl: 82px;
  --gds-text-size-body-s: 14px;
  --gds-text-size-body-m: 16px;
  --gds-text-size-body-l: 20px;
  --gds-text-size-detail-xs: 12px;
  --gds-text-size-detail-s: 14px;
  --gds-text-size-detail-m: 16px;
  --gds-text-size-heading-2xl: 14px;
  --gds-text-size-heading-xs: 16px;
  --gds-text-size-heading-s: 20px;
  --gds-text-size-heading-m: 24px;
  --gds-text-size-heading-l: 28px;
  --gds-text-size-heading-xl: 32px;
  --gds-text-line-height-preamble-xs: 24px;
  --gds-text-line-height-preamble-s: 26px;
  --gds-text-line-height-preamble-m: 28px;
  --gds-text-line-height-preamble-l: 32px;
  --gds-text-line-height-preamble-xl: 36px;
  --gds-text-line-height-preamble-2xl: 40px;
  --gds-text-line-height-display-s: 40px;
  --gds-text-line-height-display-m: 44px;
  --gds-text-line-height-display-l: 56px;
  --gds-text-line-height-display-xl: 72px;
  --gds-text-line-height-display-2xl: 90px;
  --gds-text-line-height-body-s: 20px;
  --gds-text-line-height-body-m: 24px;
  --gds-text-line-height-body-l: 26px;
  --gds-text-line-height-detail-xs: 16px;
  --gds-text-line-height-detail-s: 18px;
  --gds-text-line-height-detail-m: 20px;
  --gds-text-line-height-heading-2xs: 20px;
  --gds-text-line-height-heading-xs: 24px;
  --gds-text-line-height-heading-s: 28px;
  --gds-text-line-height-heading-m: 32px;
  --gds-text-line-height-heading-l: 40px;
  --gds-text-line-height-heading-xl: 44px;
}
`,Lh=`/**
 * Do not edit directly
 * Generated on Thu, 14 Nov 2024 15:15:52 GMT
 */

:host {
  --gds-vp-3xl: 3840px;
  --gds-vp-2xl: 2560px;
  --gds-vp-xl: 1440px;
  --gds-vp-l: 1024px;
  --gds-vp-m: 768px;
  --gds-vp-s: 430px;
  --gds-vp-xs: 375px;
}
`,X=[J(Eh),J(Ah),J(Lh),J(Oh),J(Mh),J(Th)];Sh.instance.injectGlobalStyles("root-tokens",R`
    :root,
    :root[gds-theme='light'] {
      ${J(Pd)}
    }
    :root[gds-theme='dark'] {
      ${J(Mn)}
    }
  `);var Sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ml;(function(e){(function(t){var s=typeof Sl=="object"?Sl:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),r=o(e);typeof s.Reflect>"u"?s.Reflect=e:r=o(s.Reflect,r),t(r);function o(n,i){return function(l,d){typeof n[l]!="function"&&Object.defineProperty(n,l,{configurable:!0,writable:!0,value:d}),i&&i(l,d)}}})(function(t){var s=Object.prototype.hasOwnProperty,r=typeof Symbol=="function",o=r&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",n=r&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",i=typeof Object.create=="function",l={__proto__:[]}instanceof Array,d=!i&&!l,h={create:i?function(){return an(Object.create(null))}:l?function(){return an({__proto__:null})}:function(){return an({})},has:d?function(u,b){return s.call(u,b)}:function(u,b){return b in u},get:d?function(u,b){return s.call(u,b)?u[b]:void 0}:function(u,b){return u[b]}},v=Object.getPrototypeOf(Function),p=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",x=!p&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:D1(),w=!p&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:z1(),$=!p&&typeof WeakMap=="function"?WeakMap:V1(),M=new $;function P(u,b,_,S){if(se(_)){if(!tl(u))throw new TypeError;if(!sl(b))throw new TypeError;return ze(u,b)}else{if(!tl(u))throw new TypeError;if(!he(b))throw new TypeError;if(!he(S)&&!se(S)&&!Bt(S))throw new TypeError;return Bt(S)&&(S=void 0),_=Ue(_),yt(u,b,_,S)}}t("decorate",P);function z(u,b){function _(S,E){if(!he(S))throw new TypeError;if(!se(E)&&!E1(E))throw new TypeError;we(u,b,S,E)}return _}t("metadata",z);function F(u,b,_,S){if(!he(_))throw new TypeError;return se(S)||(S=Ue(S)),we(u,b,_,S)}t("defineMetadata",F);function q(u,b,_){if(!he(b))throw new TypeError;return se(_)||(_=Ue(_)),ot(u,b,_)}t("hasMetadata",q);function ie(u,b,_){if(!he(b))throw new TypeError;return se(_)||(_=Ue(_)),te(u,b,_)}t("hasOwnMetadata",ie);function K(u,b,_){if(!he(b))throw new TypeError;return se(_)||(_=Ue(_)),Ze(u,b,_)}t("getMetadata",K);function ke(u,b,_){if(!he(b))throw new TypeError;return se(_)||(_=Ue(_)),$e(u,b,_)}t("getOwnMetadata",ke);function Be(u,b){if(!he(u))throw new TypeError;return se(b)||(b=Ue(b)),Ee(u,b)}t("getMetadataKeys",Be);function xt(u,b){if(!he(u))throw new TypeError;return se(b)||(b=Ue(b)),Te(u,b)}t("getOwnMetadataKeys",xt);function Ge(u,b,_){if(!he(b))throw new TypeError;se(_)||(_=Ue(_));var S=ye(b,_,!1);if(se(S)||!S.delete(u))return!1;if(S.size>0)return!0;var E=M.get(b);return E.delete(_),E.size>0||M.delete(b),!0}t("deleteMetadata",Ge);function ze(u,b){for(var _=u.length-1;_>=0;--_){var S=u[_],E=S(b);if(!se(E)&&!Bt(E)){if(!sl(E))throw new TypeError;b=E}}return b}function yt(u,b,_,S){for(var E=u.length-1;E>=0;--E){var be=u[E],V=be(b,_,S);if(!se(V)&&!Bt(V)){if(!he(V))throw new TypeError;S=V}}return S}function ye(u,b,_){var S=M.get(u);if(se(S)){if(!_)return;S=new x,M.set(u,S)}var E=S.get(b);if(se(E)){if(!_)return;E=new x,S.set(b,E)}return E}function ot(u,b,_){var S=te(u,b,_);if(S)return!0;var E=nn(b);return Bt(E)?!1:ot(u,E,_)}function te(u,b,_){var S=ye(b,_,!1);return se(S)?!1:S1(S.has(u))}function Ze(u,b,_){var S=te(u,b,_);if(S)return $e(u,b,_);var E=nn(b);if(!Bt(E))return Ze(u,E,_)}function $e(u,b,_){var S=ye(b,_,!1);if(!se(S))return S.get(u)}function we(u,b,_,S){var E=ye(_,S,!0);E.set(u,b)}function Ee(u,b){var _=Te(u,b),S=nn(u);if(S===null)return _;var E=Ee(S,b);if(E.length<=0)return _;if(_.length<=0)return E;for(var be=new w,V=[],H=0,T=_;H<T.length;H++){var N=T[H],I=be.has(N);I||(be.add(N),V.push(N))}for(var nt=0,ol=E;nt<ol.length;nt++){var N=ol[nt],I=be.has(N);I||(be.add(N),V.push(N))}return V}function Te(u,b){var _=[],S=ye(u,b,!1);if(se(S))return _;for(var E=S.keys(),be=T1(E),V=0;;){var H=O1(be);if(!H)return _.length=V,_;var T=A1(H);try{_[V]=T}catch(N){try{L1(be)}finally{throw N}}V++}}function Ir(u){if(u===null)return 1;switch(typeof u){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return u===null?1:6;default:return 6}}function se(u){return u===void 0}function Bt(u){return u===null}function C1(u){return typeof u=="symbol"}function he(u){return typeof u=="object"?u!==null:typeof u=="function"}function k1(u,b){switch(Ir(u)){case 0:return u;case 1:return u;case 2:return u;case 3:return u;case 4:return u;case 5:return u}var _="string",S=rl(u,o);if(S!==void 0){var E=S.call(u,_);if(he(E))throw new TypeError;return E}return $1(u)}function $1(u,b){var _,S;{var E=u.toString;if(Br(E)){var S=E.call(u);if(!he(S))return S}var _=u.valueOf;if(Br(_)){var S=_.call(u);if(!he(S))return S}}throw new TypeError}function S1(u){return!!u}function M1(u){return""+u}function Ue(u){var b=k1(u);return C1(b)?b:M1(b)}function tl(u){return Array.isArray?Array.isArray(u):u instanceof Object?u instanceof Array:Object.prototype.toString.call(u)==="[object Array]"}function Br(u){return typeof u=="function"}function sl(u){return typeof u=="function"}function E1(u){switch(Ir(u)){case 3:return!0;case 4:return!0;default:return!1}}function rl(u,b){var _=u[b];if(_!=null){if(!Br(_))throw new TypeError;return _}}function T1(u){var b=rl(u,n);if(!Br(b))throw new TypeError;var _=b.call(u);if(!he(_))throw new TypeError;return _}function A1(u){return u.value}function O1(u){var b=u.next();return b.done?!1:b}function L1(u){var b=u.return;b&&b.call(u)}function nn(u){var b=Object.getPrototypeOf(u);if(typeof u!="function"||u===v||b!==v)return b;var _=u.prototype,S=_&&Object.getPrototypeOf(_);if(S==null||S===Object.prototype)return b;var E=S.constructor;return typeof E!="function"||E===u?b:E}function D1(){var u={},b=[],_=function(){function V(H,T,N){this._index=0,this._keys=H,this._values=T,this._selector=N}return V.prototype["@@iterator"]=function(){return this},V.prototype[n]=function(){return this},V.prototype.next=function(){var H=this._index;if(H>=0&&H<this._keys.length){var T=this._selector(this._keys[H],this._values[H]);return H+1>=this._keys.length?(this._index=-1,this._keys=b,this._values=b):this._index++,{value:T,done:!1}}return{value:void 0,done:!0}},V.prototype.throw=function(H){throw this._index>=0&&(this._index=-1,this._keys=b,this._values=b),H},V.prototype.return=function(H){return this._index>=0&&(this._index=-1,this._keys=b,this._values=b),{value:H,done:!0}},V}();return function(){function V(){this._keys=[],this._values=[],this._cacheKey=u,this._cacheIndex=-2}return Object.defineProperty(V.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),V.prototype.has=function(H){return this._find(H,!1)>=0},V.prototype.get=function(H){var T=this._find(H,!1);return T>=0?this._values[T]:void 0},V.prototype.set=function(H,T){var N=this._find(H,!0);return this._values[N]=T,this},V.prototype.delete=function(H){var T=this._find(H,!1);if(T>=0){for(var N=this._keys.length,I=T+1;I<N;I++)this._keys[I-1]=this._keys[I],this._values[I-1]=this._values[I];return this._keys.length--,this._values.length--,H===this._cacheKey&&(this._cacheKey=u,this._cacheIndex=-2),!0}return!1},V.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=u,this._cacheIndex=-2},V.prototype.keys=function(){return new _(this._keys,this._values,S)},V.prototype.values=function(){return new _(this._keys,this._values,E)},V.prototype.entries=function(){return new _(this._keys,this._values,be)},V.prototype["@@iterator"]=function(){return this.entries()},V.prototype[n]=function(){return this.entries()},V.prototype._find=function(H,T){return this._cacheKey!==H&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=H)),this._cacheIndex<0&&T&&(this._cacheIndex=this._keys.length,this._keys.push(H),this._values.push(void 0)),this._cacheIndex},V}();function S(V,H){return V}function E(V,H){return H}function be(V,H){return[V,H]}}function z1(){return function(){function u(){this._map=new x}return Object.defineProperty(u.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),u.prototype.has=function(b){return this._map.has(b)},u.prototype.add=function(b){return this._map.set(b,b),this},u.prototype.delete=function(b){return this._map.delete(b)},u.prototype.clear=function(){this._map.clear()},u.prototype.keys=function(){return this._map.keys()},u.prototype.values=function(){return this._map.values()},u.prototype.entries=function(){return this._map.entries()},u.prototype["@@iterator"]=function(){return this.keys()},u.prototype[n]=function(){return this.keys()},u}()}function V1(){var u=16,b=h.create(),_=S();return function(){function T(){this._key=S()}return T.prototype.has=function(N){var I=E(N,!1);return I!==void 0?h.has(I,this._key):!1},T.prototype.get=function(N){var I=E(N,!1);return I!==void 0?h.get(I,this._key):void 0},T.prototype.set=function(N,I){var nt=E(N,!0);return nt[this._key]=I,this},T.prototype.delete=function(N){var I=E(N,!1);return I!==void 0?delete I[this._key]:!1},T.prototype.clear=function(){this._key=S()},T}();function S(){var T;do T="@@WeakMap@@"+H();while(h.has(b,T));return b[T]=!0,T}function E(T,N){if(!s.call(T,_)){if(!N)return;Object.defineProperty(T,_,{value:h.create()})}return T[_]}function be(T,N){for(var I=0;I<N;++I)T[I]=Math.random()*255|0;return T}function V(T){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(T)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(T)):be(new Uint8Array(T),T):be(new Array(T),T)}function H(){var T=V(u);T[6]=T[6]&79|64,T[8]=T[8]&191|128;for(var N="",I=0;I<u;++I){var nt=T[I];(I===4||I===6||I===8)&&(N+="-"),nt<16&&(N+="0"),N+=nt.toString(16).toLowerCase()}return N}}function an(u){return u.__=void 0,delete u.__,u}})})(Ml||(Ml={}));var U=class extends D{constructor(){super(),this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new kh(this)}connectedCallback(){var e;super.connectedCallback(),this.setAttribute("gds-element",((e=this.gdsElementName)==null?void 0:e.toString())||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}};a([W()],U.prototype,"_isUsingTransitionalStyles",2);var Dh=R`
  :host {
    box-sizing: border-box;
  }
  :host(:focus-visible) {
    outline-color: color-mix(in srgb, currentcolor, #000 100%);
    outline-offset: var(--gds-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-space-3xs);
  }
`,zh=Dh,A=class extends U{constructor(){super(...arguments),this.display="block",this.level="2"}render(){return m`<slot></slot>`}};A.styles=[X,zh];a([y({valueTemplate:e=>e})],A.prototype,"display",2);a([g()],A.prototype,"level",2);a([y({valueTemplate:e=>e})],A.prototype,"place-items",2);a([y({valueTemplate:e=>e})],A.prototype,"place-content",2);a([y({valueTemplate:function(e){const[t,s]=e.split("/"),r=i=>{const l=i.trim();return l.startsWith("#")||l.startsWith("rgb(")||l.startsWith("rgba(")||l.startsWith("hsl(")||l.startsWith("hsla(")},o=(i,l)=>`var(--gds-color-l${i}-content-${l})`;return((i,l)=>r(i)?l?`color-mix(in srgb, ${i} ${parseFloat(l)*100}%, transparent 0%)`:i:o(this.level,i))(t,s)}})],A.prototype,"color",2);a([y({valueTemplate:function(e){const[t,s]=e.split("/"),r=i=>{const l=i.trim();return l.startsWith("#")||l.startsWith("rgb(")||l.startsWith("rgba(")||l.startsWith("hsl(")||l.startsWith("hsla(")},o=(i,l)=>`var(--gds-color-l${i}-background-${l})`;return((i,l)=>r(i)?l?`color-mix(in srgb, ${i} ${parseFloat(l)*100}%, transparent 0%)`:i:o(this.level,i))(t,s)}})],A.prototype,"background",2);a([y({valueTemplate:function(e){const[t,s]=e.split("/"),r=i=>{const l=i.trim();return l.startsWith("#")||l.startsWith("rgb(")||l.startsWith("rgba(")||l.startsWith("hsl(")||l.startsWith("hsla(")},o=(i,l)=>`var(--gds-color-l${i}-border-${l})`;return`var(--gds-space-${t}) solid ${s?(i=>r(i)?i:o(this.level,i))(s):"currentColor"}`},styleTemplate:(e,t)=>{const s=t[0],r=t.length>1?t[1]:s,o=t.length>2?t[2]:s,n=t.length>3?t[3]:s;return`
        border-top: ${s};
        border-right: ${r};
        border-bottom: ${o};
        border-left: ${n};
      `}})],A.prototype,"border",2);a([y({valueTemplate:function(e){const[t]=e.split("/"),s=n=>{const i=n.trim();return i.startsWith("#")||i.startsWith("rgb(")||i.startsWith("rgba(")||i.startsWith("hsl(")||i.startsWith("hsla(")},r=(n,i)=>`var(--gds-color-l${n}-border-${i})`;return t?(n=>s(n)?n:r(this.level,n))(t):"currentColor"},styleTemplate:(e,t)=>{const s=t[0],r=t.length>1?t[1]:s,o=t.length>2?t[2]:s,n=t.length>3?t[3]:s;return`
        border-top-color: ${s};
        border-right-color: ${r};
        border-bottom-color: ${o};
        border-left-color: ${n};
      `}})],A.prototype,"border-color",2);a([y({styleTemplate:(e,t)=>{const s=t[0],r=t.length>1?t[1]:s,o=t.length>2?t[2]:s,n=t.length>3?t[3]:s;return`
        border-top-width: ${s};
        border-right-width: ${r};
        border-bottom-width: ${o};
        border-left-width: ${n};
        border-style: solid;
      `}})],A.prototype,"border-width",2);a([y({valueTemplate:e=>`var(--gds-space-${e})`})],A.prototype,"border-radius",2);a([y({valueTemplate:e=>e})],A.prototype,"opacity",2);a([y()],A.prototype,"padding",2);a([y()],A.prototype,"padding-inline",2);a([y()],A.prototype,"padding-block",2);a([y({valueTemplate:e=>{const s=(e.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-space-${e})`:`calc(var(--gds-space-${e.substring(1)}) * -1)`;return e==="auto"?"auto":s},styleTemplate:(e,t)=>{const s=l=>l==="auto"?"auto":`${l}`,r=s(t[0]),o=t.length>1?s(t[1]):r,n=t.length>2?s(t[2]):r,i=t.length>3?s(t[3]):o;return`margin: ${r} ${o} ${n} ${i};`}})],A.prototype,"margin",2);a([y({valueTemplate:e=>e})],A.prototype,"position",2);a([y({valueTemplate:e=>e})],A.prototype,"inset",2);a([y({valueTemplate:e=>e})],A.prototype,"overflow",2);a([y({valueTemplate:e=>e})],A.prototype,"height",2);a([y({valueTemplate:e=>e})],A.prototype,"max-height",2);a([y({valueTemplate:e=>e})],A.prototype,"min-height",2);a([y()],A.prototype,"block-size",2);a([y()],A.prototype,"min-block-size",2);a([y({valueTemplate:e=>e})],A.prototype,"width",2);a([y({valueTemplate:e=>e})],A.prototype,"max-width",2);a([y({valueTemplate:e=>e})],A.prototype,"min-width",2);a([y()],A.prototype,"inline-size",2);a([y({valueTemplate:e=>e})],A.prototype,"cursor",2);a([y({valueTemplate:e=>e})],A.prototype,"pointer-events",2);a([y({valueTemplate:e=>e})],A.prototype,"user-select",2);a([y({valueTemplate:e=>e})],A.prototype,"z-index",2);a([y({valueTemplate:e=>e})],A.prototype,"transform",2);a([y({valueTemplate:e=>e})],A.prototype,"transform-style",2);a([y({valueTemplate:e=>e})],A.prototype,"transition",2);a([y({valueTemplate:e=>e})],A.prototype,"transition-behavior",2);a([y({valueTemplate:e=>e})],A.prototype,"animation",2);a([y({valueTemplate:e=>`${e}`,styleTemplate:(e,t)=>{const s=t[0],r=`font-size: var(--gds-text-size-${s});`,o=`line-height: var(--gds-text-line-height-${s});`;return r+o}})],A.prototype,"font-size",2);a([y({property:"font-weight",valueTemplate:e=>`var(--gds-text-weight-${e})`})],A.prototype,"font-weight",2);a([y({valueTemplate:e=>`${e}`})],A.prototype,"grid-column",2);a([y({valueTemplate:e=>`${e}`})],A.prototype,"grid-row",2);a([y({valueTemplate:e=>`${e}`})],A.prototype,"flex",2);A=a([k("gds-container")],A);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xa=Symbol.for(""),Vh=e=>{if((e==null?void 0:e.r)===xa)return e==null?void 0:e._$litStatic$},Ph=e=>({_$litStatic$:e,r:xa}),Mo=(e,...t)=>({_$litStatic$:t.reduce((s,r,o)=>s+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[o+1],e[0]),r:xa}),El=new Map,Hh=e=>(t,...s)=>{const r=s.length;let o,n;const i=[],l=[];let d,h=0,v=!1;for(;h<r;){for(d=t[h];h<r&&(n=s[h],(o=Vh(n))!==void 0);)d+=o+t[++h],v=!0;h!==r&&l.push(n),i.push(d),h++}if(h===r&&i.push(t[r]),v){const p=i.join("$$lit$$");(t=El.get(p))===void 0&&(i.raw=i,El.set(p,t=i)),s=l}return e(t,...s)},Pr=Hh(ue);var Wh=R`
  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`,jh=Wh,fe=class extends A{constructor(){super(...arguments),this.level="2",this.tag="span"}render(){const e=Ph(encodeURI(this.tag));return Pr`<${e} tag><slot></slot></${e}>`}};fe.styles=[X,Td,jh];a([g()],fe.prototype,"level",2);a([g({type:String})],fe.prototype,"tag",2);a([y({valueTemplate:e=>`${e}`,selector:"[tag]",styleTemplate:(e,t)=>{const s=t[0],r=`font-size: var(--gds-text-size-${s});`,o=`line-height: var(--gds-text-line-height-${s});`;return r+o}})],fe.prototype,"font-size",2);a([y({property:"font-weight",selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],fe.prototype,"font-weight",2);a([y({property:"text-wrap",valueTemplate:e=>e})],fe.prototype,"text-wrap",2);a([y({property:"text-transform",valueTemplate:e=>e})],fe.prototype,"text-transform",2);a([y({property:"max-width",valueTemplate:e=>`${e}ch`})],fe.prototype,"max-width",2);a([y({property:"min-width",valueTemplate:e=>`${e}ch`})],fe.prototype,"min-width",2);a([y({property:"text-align",valueTemplate:e=>e})],fe.prototype,"text-align",2);a([y({valueTemplate:e=>e,selector:"[tag]"})],fe.prototype,"text-decoration",2);a([y({valueTemplate:e=>e,styleTemplate:(e,t)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${t[0]};
      -webkit-box-orient: vertical;`})],fe.prototype,"lines",2);a([y({property:"color",valueTemplate:function(e){const[t,s]=e.split("/");return s?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-content-${t}) ${parseFloat(s)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-content-${t})`}})],fe.prototype,"color",2);fe=a([k("gds-text")],fe);var Xr,Jr,En,Rh=class Hd{constructor(){f(this,Xr,new Map),f(this,Jr,new Map),f(this,En,!ma())}static get instance(){var t;return(t=globalThis.__gdsTransitionalStyles)!=null&&t[Lt]||(globalThis.__gdsTransitionalStyles=wo(ts({},globalThis.__gdsTransitionalStyles),{[Lt]:new Hd})),globalThis.__gdsTransitionalStyles[Lt]}apply(t,s){if(!t.shadowRoot)return;const r=c(this,Xr).get(s);r&&(c(this,Jr).set(s,t),this.applyToElement(s,r))}applyToElement(t,s){var r,o;const n=c(this,Jr).get(t);if(!n||!n.shadowRoot)return;const i=()=>{n._dynamicStylesController.clearInitial(),n._dynamicStylesController.inject("t-styles",J(s)),n._isUsingTransitionalStyles=!0},l=()=>{n._isUsingTransitionalStyles=!1,n._dynamicStylesController.clear("t-styles"),n._dynamicStylesController.restoreInitial()},d="[gds-element=gds-theme]";let h=n.getRootNode(),v=n.closest(d);for(;v===null&&h!==document;)v=(r=h.host)==null?void 0:r.closest(d),h=(o=h.host)==null?void 0:o.getRootNode();if(v){const p=v,x=()=>{p.designVersion==="2023"?l():i()};if(p.addEventListener("gds-design-version-changed",x),n.addEventListener("gds-element-disconnected",()=>p.removeEventListener("gds-design-version-changed",x)),p.designVersion==="2023"){l();return}}i()}register(t,s){let r=s;c(this,En)&&(r=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${s}`),c(this,Xr).set(t,r),this.applyToElement(t,r)}};Xr=new WeakMap;Jr=new WeakMap;En=new WeakMap;var xe=Rh,Fh=R`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-sys-color-primary-text);
      background-color: var(--gds-sys-color-container-container-dim1);
      font-size: var(--gds-text-size-label-input-medium);
      line-height: var(--gds-text-line-height-label-input-medium);
      padding-inline: var(--gds-space-m);
      padding-block: var(--gds-space-xs);
    }
  }
`,Nh=Fh,Tn=class extends U{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>xe.instance.apply(this,"gds-menu-heading"))}render(){return ue`<slot></slot>`}};Tn.styles=Nh;Tn=a([k("gds-menu-heading")],Tn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const An="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ih=(e,...t)=>({strTag:!0,strings:e,values:t}),Eo=Ih,Bh=e=>typeof e!="string"&&"strTag"in e,Wd=(e,t,s)=>{let r=e[0];for(let o=1;o<e.length;o++)r+=t[s?s[o-1]:o-1],r+=e[o];return r};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jd=e=>Bh(e)?Wd(e.strings,e.values):e;let O=jd,Tl=!1;function Gh(e){if(Tl)throw new Error("lit-localize can only be configured once");O=e,Tl=!0}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Zh{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(An,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(An,this.__litLocalizeEventHandler)}}const Uh=e=>e.addController(new Zh(e)),Rd=Uh;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=()=>(e,t)=>(e.addInitializer(Rd),e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Fd{constructor(){this.settled=!1,this.promise=new Promise((t,s)=>{this._resolve=t,this._reject=s})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const Ye=[];for(let e=0;e<256;e++)Ye[e]=(e>>4&15).toString(16)+(e&15).toString(16);function Yh(e){let t=0,s=8997,r=0,o=33826,n=0,i=40164,l=0,d=52210;for(let h=0;h<e.length;h++)s^=e.charCodeAt(h),t=s*435,r=o*435,n=i*435,l=d*435,n+=s<<8,l+=o<<8,r+=t>>>16,s=t&65535,n+=r>>>16,o=r&65535,d=l+(n>>>16)&65535,i=n&65535;return Ye[d>>8]+Ye[d&255]+Ye[i>>8]+Ye[i&255]+Ye[o>>8]+Ye[o&255]+Ye[s>>8]+Ye[s&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qh="",Kh="h",Xh="s";function Jh(e,t){return(t?Kh:Xh)+Yh(typeof e=="string"?e:e.join(qh))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Al=new WeakMap,Ol=new Map;function Qh(e,t,s){if(e){const r=(s==null?void 0:s.id)??eg(t),o=e[r];if(o){if(typeof o=="string")return o;if("strTag"in o)return Wd(o.strings,t.values,o.values);{let n=Al.get(o);return n===void 0&&(n=o.values,Al.set(o,n)),{...o,values:n.map(i=>t.values[i])}}}}return jd(t)}function eg(e){const t=typeof e=="string"?e:e.strings;let s=Ol.get(t);return s===void 0&&(s=Jh(t,typeof e!="string"&&!("strTag"in e)),Ol.set(t,s)),s}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fn(e){window.dispatchEvent(new CustomEvent(An,{detail:e}))}let To="",vn,Nd,Ao,On,Id,kt=new Fd;kt.resolve();let Gr=0;const tg=e=>(Gh((t,s)=>Qh(Id,t,s)),To=Nd=e.sourceLocale,Ao=new Set(e.targetLocales),Ao.add(e.sourceLocale),On=e.loadLocale,{getLocale:sg,setLocale:rg}),sg=()=>To,rg=e=>{if(e===(vn??To))return kt.promise;if(!Ao||!On)throw new Error("Internal error");if(!Ao.has(e))throw new Error("Invalid locale code");Gr++;const t=Gr;return vn=e,kt.settled&&(kt=new Fd),fn({status:"loading",loadingLocale:e}),(e===Nd?Promise.resolve({templates:void 0}):On(e)).then(r=>{Gr===t&&(To=e,vn=void 0,Id=r.templates,fn({status:"ready",readyLocale:e}),kt.resolve())},r=>{Gr===t&&(fn({status:"error",errorLocale:e,errorMessage:r.toString()}),kt.reject(r))}),kt.promise};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},us=e=>(...t)=>({_$litDirective$:e,values:t});let Wr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,r){this._$Ct=t,this._$AM=s,this._$Ci=r}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=us(class extends Wr{constructor(e){var t;if(super(e),e.type!==Hr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!((r=this.nt)!=null&&r.has(n))&&this.st.add(n);return this.render(t)}const s=e.element.classList;for(const n of this.st)n in t||(s.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||(o=this.nt)!=null&&o.has(n)||(i?(s.add(n),this.st.add(n)):(s.remove(n),this.st.delete(n)))}return Ae}});var og=R`
  @layer base, reset, transitional-styles;
  @layer base {
    button {
      display: flex;
      border-width: 0;
      background-color: #ededed;
      border-radius: calc(1px * infinity);
      padding: 0.4rem 0.8rem;
      font-family: inherit;
      cursor: pointer;
      align-items: center;
      gap: 0.5rem;
    }

    button:hover {
      background-color: #dcdcdc;
    }
  }
`,ng=og,Ln,Bd,je=class extends U{constructor(){super(),f(this,Ln),this.open=!1,this.buttonLabel=O("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start"}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){var e,t,s;return m`<button
        id="trigger"
        class="icon border-0 small ${We({highlighted:this.open})}"
        aria-label=${(e=this.buttonLabel)!=null?e:this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
      >
        <slot name="trigger">
          ${this.showLabel?(t=this.buttonLabel)!=null?t:this.label:B}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M14 12C14 13.1042 13.1042 14 12 14C10.8958 14 10 13.1042 10 12C10 10.8958 10.8958 10 12 10C13.1042 10 14 10.8958 14 12ZM19 10C17.8958 10 17 10.8958 17 12C17 13.1042 17.8958 14 19 14C20.1042 14 21 13.1042 21 12C21 10.8958 20.1042 10 19 10ZM5 10C3.89583 10 3 10.8958 3 12C3 13.1042 3.89583 14 5 14C6.10417 14 7 13.1042 7 12C7 10.8958 6.10417 10 5 10Z"
              fill="#353531"
            />
          </svg>
        </slot>
      </button>
      <gds-popover
        id="menu"
        .open=${this.open}
        .triggerRef=${this.elTriggerBtn}
        .anchorRef=${this.elTriggerBtn}
        .label=${this.label}
        .placement=${this.placement}
        @gds-ui-state=${r=>this.open=r.detail.open}
      >
        <gds-menu
          aria-label=${(s=this.label)!=null?s:this.buttonLabel}
          @gds-menu-item-click=${C(this,Ln,Bd)}
        >
          <slot></slot>
        </gds-menu>
      </gds-popover>`}};Ln=new WeakSet;Bd=function(){this.open=!1};je.styles=[ng];je.shadowRootOptions={mode:"open",delegatesFocus:!0};a([g({type:Boolean,reflect:!0})],je.prototype,"open",2);a([g({attribute:"button-label"})],je.prototype,"buttonLabel",2);a([g({attribute:"show-label",type:Boolean})],je.prototype,"showLabel",2);a([g()],je.prototype,"label",2);a([g()],je.prototype,"placement",2);a([rt("#trigger")],je.prototype,"elTriggerBtn",2);je=a([k("gds-context-menu"),Nt()],je);var Qr,Gd=class{constructor(e){f(this,Qr,t=>{var s,r;const o=t.target;if(!this.host.navigableItems.includes(o))return;let n=!1;if(t.key==="ArrowDown"){const i=this.host.navigableItems.indexOf(o)+1,l=this.host.navigableItems[i];l==null||l.focus(),n=!0}else if(t.key==="ArrowUp"){const i=this.host.navigableItems.indexOf(o)-1,l=this.host.navigableItems[i];l==null||l.focus(),n=!0}else if(t.key==="Home")(s=this.host.navigableItems[0])==null||s.focus(),n=!0;else if(t.key==="End")(r=this.host.navigableItems[this.host.navigableItems.length-1])==null||r.focus(),n=!0;else{const i=t.key.toLowerCase();if(i.length!==1)return;const l=i>="a"&&i<="z",d=i>="0"&&i<="9";if(l||d){const h=this.host.navigableItems.find(v=>{var p;const x=(p=v.textContent)==null?void 0:p.trim().toLowerCase();return x==null?void 0:x.startsWith(i)});h==null||h.focus(),n=!0}}n&&(t.preventDefault(),t.stopPropagation())}),(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",c(this,Qr))}hostDisconnected(){this.host.removeEventListener("keydown",c(this,Qr))}};Qr=new WeakMap;function Zd(e){let t=e;for(;t.assignedElements().length>0&&t.assignedElements()[0].nodeName==="SLOT";)t=t.assignedElements()[0];return t}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ig}=Y1,ag=e=>e===null||typeof e!="object"&&typeof e!="function",lg=e=>e.strings===void 0,Ll=()=>document.createComment(""),ys=(e,t,s)=>{var n;const r=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(s===void 0){const i=r.insertBefore(Ll(),o),l=r.insertBefore(Ll(),o);s=new ig(i,l,e,e.options)}else{const i=s._$AB.nextSibling,l=s._$AM,d=l!==e;if(d){let h;(n=s._$AQ)==null||n.call(s,e),s._$AM=e,s._$AP!==void 0&&(h=e._$AU)!==l._$AU&&s._$AP(h)}if(i!==o||d){let h=s._$AA;for(;h!==i;){const v=h.nextSibling;r.insertBefore(h,o),h=v}}}return s},Ct=(e,t,s=e)=>(e._$AI(t,s),e),dg={},cg=(e,t=dg)=>e._$AH=t,hg=e=>e._$AH,mn=e=>{var r;(r=e._$AP)==null||r.call(e,!1,!0);let t=e._$AA;const s=e._$AB.nextSibling;for(;t!==s;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vs=(e,t)=>{var r;const s=e._$AN;if(s===void 0)return!1;for(const o of s)(r=o._$AO)==null||r.call(o,t,!1),Vs(o,t);return!0},Oo=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},Ud=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),ug(t)}};function gg(e){this._$AN!==void 0?(Oo(this),this._$AM=e,Ud(this)):this._$AM=e}function pg(e,t=!1,s=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(r))for(let n=s;n<r.length;n++)Vs(r[n],!1),Oo(r[n]);else r!=null&&(Vs(r,!1),Oo(r));else Vs(this,e)}const ug=e=>{e.type==Hr.CHILD&&(e._$AP??(e._$AP=pg),e._$AQ??(e._$AQ=gg))};class Yd extends Wr{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,r){super._$AT(t,s,r),Ud(this),this.isConnected=t._$AU}_$AO(t,s=!0){var r,o;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(o=this.disconnected)==null||o.call(this)),s&&(Vs(this,t),Oo(this))}setValue(t){if(lg(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lo=()=>new fg;let fg=class{};const bn=new WeakMap,js=us(class extends Yd{render(e){return B}update(e,[t]){var r;const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=(r=e.options)==null?void 0:r.host,this.rt(this.ct=e.element)),B}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let s=bn.get(t);s===void 0&&(s=new WeakMap,bn.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=bn.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var _s,Dl=class extends U{constructor(){super(),f(this,_s,Lo()),new Gd(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),xe.instance.apply(this,"gds-listbox")}get navigableItems(){return c(this,_s).value?Zd(c(this,_s).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return m`<slot ${js(c(this,_s))}></slot>`}};_s=new WeakMap;Dl=a([k("gds-menu")],Dl);var qd=e=>{class t extends e{constructor(){super(...arguments),this.onblur=r=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:r.relatedTarget}))},this.onfocus=r=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:r.relatedTarget}))}}focus(r){this.setAttribute("tabindex","0"),super.focus(r)}}return t},vg=R`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-sys-color-border-stroke-variant2);
    }

    :host div {
      display: flex;
      align-items: center;
      user-select: none;
      padding-inline: var(--gds-space-m);
      padding-block: var(--gds-space-m);
      cursor: pointer;
      font-size: var(--gds-text-size-label-input-large);
      font-weight: var(--gds-text-weight-regular);
      line-height: var(--gds-text-line-height-label-input-large);
      gap: 1ch;
      max-width: 100%;
      box-sizing: border-box;
    }

    :host([highlighted]) div {
      background-color: var(--gds-sys-color-container-container-shade1);
      color: var(--gds-sys-color-content-content-inverse);
    }

    :host(:hover:not([highlighted])) div {
      background-color: var(--gds-sys-color-container-container-dim1);
    }

    :host(:focus-visible) {
      outline: auto;
      outline-offset: -6px;
      outline-color: currentColor;
      outline-width: 2px;
    }

    :host([aria-hidden='true']) div {
      display: none;
    }

    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1lh;
      width: auto;
      box-sizing: border-box;
      position: relative;
      aspect-ratio: 1/1;
      border-radius: var(--gds-space-2xs);
      border: var(--gds-space-3xs) solid currentColor;
      padding: var(--gds-space-3xs);

      &.checked {
        background-color: currentColor;

        gds-icon-checkmark {
          &::part(icon) {
            color: var(--gds-sys-color-base-white);
            stroke-width: var(--gds-space-2xs);
          }
        }
      }
    }
  }
`,Kd=vg,Dn,zn=class extends qd(U){constructor(){super(...arguments),f(this,Dn,()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",c(this,Dn)),xe.instance.apply(this,"gds-option")}render(){return m`<div><slot></slot></div>`}};Dn=new WeakMap;zn.styles=[Kd];zn=a([k("gds-menu-item")],zn);var Do=class extends U{constructor(){super(...arguments),this.show=!1}render(){return m``}};Do.styles=R`
    :host {
      display: none;
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 100%;
    }

    :host([show]) {
      display: block;
    }
  `;a([g({type:Boolean,reflect:!0})],Do.prototype,"show",2);Do=a([k("gds-backdrop")],Do);function ya(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,r)=>{let o;const n=t.connectedCallback,i=t.disconnectedCallback;t.connectedCallback=function(){n==null||n.call(this);const l=(d,h)=>{var v;(v=r.value)==null||v.call(this)};o=new MutationObserver(l),o.observe(this,e)},t.disconnectedCallback=function(){i==null||i.call(this),o.disconnect()}}}function mg(e){return(t,s,r)=>{const o=window.matchMedia(e),n=t.connectedCallback,i=t.disconnectedCallback;t.connectedCallback=function(){var l;n==null||n.call(this);const d=h=>{var v;(v=r.value)==null||v.call(this,h.matches)};o.addEventListener("change",d),this.disconnectedCallback=function(){i==null||i.call(this),o.removeEventListener("change",d)},(l=r.value)==null||l.call(this,o.matches)}}}function ne(e,t){const s=ts({waitUntilFirstUpdate:!1},t);return(r,o,n)=>{const{update:i}=r,l=Array.isArray(e)?e:[e];r.update=function(d){l.forEach(h=>{var v;const p=h;if(d.has(p)){const x=d.get(p),w=this[p];x!==w&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&((v=n.value)==null||v.call(this,x,w))}}),i.call(this,d)}}}const bg=["top","right","bottom","left"],ss=Math.min,Dt=Math.max,zo=Math.round,Zr=Math.floor,He=e=>({x:e,y:e}),xg={left:"right",right:"left",bottom:"top",top:"bottom"},yg={start:"end",end:"start"};function Vn(e,t,s){return Dt(e,ss(t,s))}function fs(e,t){return typeof e=="function"?e(t):e}function Ht(e){return e.split("-")[0]}function jr(e){return e.split("-")[1]}function Xd(e){return e==="x"?"y":"x"}function wa(e){return e==="y"?"height":"width"}function rs(e){return["top","bottom"].includes(Ht(e))?"y":"x"}function _a(e){return Xd(rs(e))}function wg(e,t,s){s===void 0&&(s=!1);const r=jr(e),o=_a(e),n=wa(o);let i=o==="x"?r===(s?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(i=Vo(i)),[i,Vo(i)]}function _g(e){const t=Vo(e);return[Pn(e),t,Pn(t)]}function Pn(e){return e.replace(/start|end/g,t=>yg[t])}function Cg(e,t,s){const r=["left","right"],o=["right","left"],n=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return s?t?o:r:t?r:o;case"left":case"right":return t?n:i;default:return[]}}function kg(e,t,s,r){const o=jr(e);let n=Cg(Ht(e),s==="start",r);return o&&(n=n.map(i=>i+"-"+o),t&&(n=n.concat(n.map(Pn)))),n}function Vo(e){return e.replace(/left|right|bottom|top/g,t=>xg[t])}function $g(e){return{top:0,right:0,bottom:0,left:0,...e}}function Jd(e){return typeof e!="number"?$g(e):{top:e,right:e,bottom:e,left:e}}function Po(e){const{x:t,y:s,width:r,height:o}=e;return{width:r,height:o,top:s,left:t,right:t+r,bottom:s+o,x:t,y:s}}function zl(e,t,s){let{reference:r,floating:o}=e;const n=rs(t),i=_a(t),l=wa(i),d=Ht(t),h=n==="y",v=r.x+r.width/2-o.width/2,p=r.y+r.height/2-o.height/2,x=r[l]/2-o[l]/2;let w;switch(d){case"top":w={x:v,y:r.y-o.height};break;case"bottom":w={x:v,y:r.y+r.height};break;case"right":w={x:r.x+r.width,y:p};break;case"left":w={x:r.x-o.width,y:p};break;default:w={x:r.x,y:r.y}}switch(jr(t)){case"start":w[i]-=x*(s&&h?-1:1);break;case"end":w[i]+=x*(s&&h?-1:1);break}return w}const Sg=async(e,t,s)=>{const{placement:r="bottom",strategy:o="absolute",middleware:n=[],platform:i}=s,l=n.filter(Boolean),d=await(i.isRTL==null?void 0:i.isRTL(t));let h=await i.getElementRects({reference:e,floating:t,strategy:o}),{x:v,y:p}=zl(h,r,d),x=r,w={},$=0;for(let M=0;M<l.length;M++){const{name:P,fn:z}=l[M],{x:F,y:q,data:ie,reset:K}=await z({x:v,y:p,initialPlacement:r,placement:x,strategy:o,middlewareData:w,rects:h,platform:i,elements:{reference:e,floating:t}});v=F??v,p=q??p,w={...w,[P]:{...w[P],...ie}},K&&$<=50&&($++,typeof K=="object"&&(K.placement&&(x=K.placement),K.rects&&(h=K.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:o}):K.rects),{x:v,y:p}=zl(h,x,d)),M=-1)}return{x:v,y:p,placement:x,strategy:o,middlewareData:w}};async function Rs(e,t){var s;t===void 0&&(t={});const{x:r,y:o,platform:n,rects:i,elements:l,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:v="viewport",elementContext:p="floating",altBoundary:x=!1,padding:w=0}=fs(t,e),$=Jd(w),P=l[x?p==="floating"?"reference":"floating":p],z=Po(await n.getClippingRect({element:(s=await(n.isElement==null?void 0:n.isElement(P)))==null||s?P:P.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:h,rootBoundary:v,strategy:d})),F=p==="floating"?{x:r,y:o,width:i.floating.width,height:i.floating.height}:i.reference,q=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),ie=await(n.isElement==null?void 0:n.isElement(q))?await(n.getScale==null?void 0:n.getScale(q))||{x:1,y:1}:{x:1,y:1},K=Po(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:F,offsetParent:q,strategy:d}):F);return{top:(z.top-K.top+$.top)/ie.y,bottom:(K.bottom-z.bottom+$.bottom)/ie.y,left:(z.left-K.left+$.left)/ie.x,right:(K.right-z.right+$.right)/ie.x}}const Mg=e=>({name:"arrow",options:e,async fn(t){const{x:s,y:r,placement:o,rects:n,platform:i,elements:l,middlewareData:d}=t,{element:h,padding:v=0}=fs(e,t)||{};if(h==null)return{};const p=Jd(v),x={x:s,y:r},w=_a(o),$=wa(w),M=await i.getDimensions(h),P=w==="y",z=P?"top":"left",F=P?"bottom":"right",q=P?"clientHeight":"clientWidth",ie=n.reference[$]+n.reference[w]-x[w]-n.floating[$],K=x[w]-n.reference[w],ke=await(i.getOffsetParent==null?void 0:i.getOffsetParent(h));let Be=ke?ke[q]:0;(!Be||!await(i.isElement==null?void 0:i.isElement(ke)))&&(Be=l.floating[q]||n.floating[$]);const xt=ie/2-K/2,Ge=Be/2-M[$]/2-1,ze=ss(p[z],Ge),yt=ss(p[F],Ge),ye=ze,ot=Be-M[$]-yt,te=Be/2-M[$]/2+xt,Ze=Vn(ye,te,ot),$e=!d.arrow&&jr(o)!=null&&te!==Ze&&n.reference[$]/2-(te<ye?ze:yt)-M[$]/2<0,we=$e?te<ye?te-ye:te-ot:0;return{[w]:x[w]+we,data:{[w]:Ze,centerOffset:te-Ze-we,...$e&&{alignmentOffset:we}},reset:$e}}}),Eg=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,r;const{placement:o,middlewareData:n,rects:i,initialPlacement:l,platform:d,elements:h}=t,{mainAxis:v=!0,crossAxis:p=!0,fallbackPlacements:x,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:$="none",flipAlignment:M=!0,...P}=fs(e,t);if((s=n.arrow)!=null&&s.alignmentOffset)return{};const z=Ht(o),F=rs(l),q=Ht(l)===l,ie=await(d.isRTL==null?void 0:d.isRTL(h.floating)),K=x||(q||!M?[Vo(l)]:_g(l)),ke=$!=="none";!x&&ke&&K.push(...kg(l,M,$,ie));const Be=[l,...K],xt=await Rs(t,P),Ge=[];let ze=((r=n.flip)==null?void 0:r.overflows)||[];if(v&&Ge.push(xt[z]),p){const te=wg(o,i,ie);Ge.push(xt[te[0]],xt[te[1]])}if(ze=[...ze,{placement:o,overflows:Ge}],!Ge.every(te=>te<=0)){var yt,ye;const te=(((yt=n.flip)==null?void 0:yt.index)||0)+1,Ze=Be[te];if(Ze)return{data:{index:te,overflows:ze},reset:{placement:Ze}};let $e=(ye=ze.filter(we=>we.overflows[0]<=0).sort((we,Ee)=>we.overflows[1]-Ee.overflows[1])[0])==null?void 0:ye.placement;if(!$e)switch(w){case"bestFit":{var ot;const we=(ot=ze.filter(Ee=>{if(ke){const Te=rs(Ee.placement);return Te===F||Te==="y"}return!0}).map(Ee=>[Ee.placement,Ee.overflows.filter(Te=>Te>0).reduce((Te,Ir)=>Te+Ir,0)]).sort((Ee,Te)=>Ee[1]-Te[1])[0])==null?void 0:ot[0];we&&($e=we);break}case"initialPlacement":$e=l;break}if(o!==$e)return{reset:{placement:$e}}}return{}}}};function Vl(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Pl(e){return bg.some(t=>e[t]>=0)}const Tg=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:s}=t,{strategy:r="referenceHidden",...o}=fs(e,t);switch(r){case"referenceHidden":{const n=await Rs(t,{...o,elementContext:"reference"}),i=Vl(n,s.reference);return{data:{referenceHiddenOffsets:i,referenceHidden:Pl(i)}}}case"escaped":{const n=await Rs(t,{...o,altBoundary:!0}),i=Vl(n,s.floating);return{data:{escapedOffsets:i,escaped:Pl(i)}}}default:return{}}}}};async function Ag(e,t){const{placement:s,platform:r,elements:o}=e,n=await(r.isRTL==null?void 0:r.isRTL(o.floating)),i=Ht(s),l=jr(s),d=rs(s)==="y",h=["left","top"].includes(i)?-1:1,v=n&&d?-1:1,p=fs(t,e);let{mainAxis:x,crossAxis:w,alignmentAxis:$}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&typeof $=="number"&&(w=l==="end"?$*-1:$),d?{x:w*v,y:x*h}:{x:x*h,y:w*v}}const Og=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var s,r;const{x:o,y:n,placement:i,middlewareData:l}=t,d=await Ag(t,e);return i===((s=l.offset)==null?void 0:s.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:o+d.x,y:n+d.y,data:{...d,placement:i}}}}},Lg=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:r,placement:o}=t,{mainAxis:n=!0,crossAxis:i=!1,limiter:l={fn:P=>{let{x:z,y:F}=P;return{x:z,y:F}}},...d}=fs(e,t),h={x:s,y:r},v=await Rs(t,d),p=rs(Ht(o)),x=Xd(p);let w=h[x],$=h[p];if(n){const P=x==="y"?"top":"left",z=x==="y"?"bottom":"right",F=w+v[P],q=w-v[z];w=Vn(F,w,q)}if(i){const P=p==="y"?"top":"left",z=p==="y"?"bottom":"right",F=$+v[P],q=$-v[z];$=Vn(F,$,q)}const M=l.fn({...t,[x]:w,[p]:$});return{...M,data:{x:M.x-s,y:M.y-r,enabled:{[x]:n,[p]:i}}}}}};function Ko(){return typeof window<"u"}function vs(e){return Qd(e)?(e.nodeName||"").toLowerCase():"#document"}function _e(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ie(e){var t;return(t=(Qd(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Qd(e){return Ko()?e instanceof Node||e instanceof _e(e).Node:!1}function Oe(e){return Ko()?e instanceof Element||e instanceof _e(e).Element:!1}function Re(e){return Ko()?e instanceof HTMLElement||e instanceof _e(e).HTMLElement:!1}function Hl(e){return!Ko()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof _e(e).ShadowRoot}function Rr(e){const{overflow:t,overflowX:s,overflowY:r,display:o}=Le(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+s)&&!["inline","contents"].includes(o)}function Dg(e){return["table","td","th"].includes(vs(e))}function Xo(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Ca(e){const t=ka(),s=Oe(e)?Le(e):e;return s.transform!=="none"||s.perspective!=="none"||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(s.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(s.contain||"").includes(r))}function zg(e){let t=ut(e);for(;Re(t)&&!os(t);){if(Ca(t))return t;if(Xo(t))return null;t=ut(t)}return null}function ka(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function os(e){return["html","body","#document"].includes(vs(e))}function Le(e){return _e(e).getComputedStyle(e)}function Jo(e){return Oe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ut(e){if(vs(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Hl(e)&&e.host||Ie(e);return Hl(t)?t.host:t}function ec(e){const t=ut(e);return os(t)?e.ownerDocument?e.ownerDocument.body:e.body:Re(t)&&Rr(t)?t:ec(t)}function Fs(e,t,s){var r;t===void 0&&(t=[]),s===void 0&&(s=!0);const o=ec(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),i=_e(o);if(n){const l=Hn(i);return t.concat(i,i.visualViewport||[],Rr(o)?o:[],l&&s?Fs(l):[])}return t.concat(o,Fs(o,[],s))}function Hn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function tc(e){const t=Le(e);let s=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Re(e),n=o?e.offsetWidth:s,i=o?e.offsetHeight:r,l=zo(s)!==n||zo(r)!==i;return l&&(s=n,r=i),{width:s,height:r,$:l}}function $a(e){return Oe(e)?e:e.contextElement}function Qt(e){const t=$a(e);if(!Re(t))return He(1);const s=t.getBoundingClientRect(),{width:r,height:o,$:n}=tc(t);let i=(n?zo(s.width):s.width)/r,l=(n?zo(s.height):s.height)/o;return(!i||!Number.isFinite(i))&&(i=1),(!l||!Number.isFinite(l))&&(l=1),{x:i,y:l}}const Vg=He(0);function sc(e){const t=_e(e);return!ka()||!t.visualViewport?Vg:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Pg(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==_e(e)?!1:t}function Wt(e,t,s,r){t===void 0&&(t=!1),s===void 0&&(s=!1);const o=e.getBoundingClientRect(),n=$a(e);let i=He(1);t&&(r?Oe(r)&&(i=Qt(r)):i=Qt(e));const l=Pg(n,s,r)?sc(n):He(0);let d=(o.left+l.x)/i.x,h=(o.top+l.y)/i.y,v=o.width/i.x,p=o.height/i.y;if(n){const x=_e(n),w=r&&Oe(r)?_e(r):r;let $=x,M=Hn($);for(;M&&r&&w!==$;){const P=Qt(M),z=M.getBoundingClientRect(),F=Le(M),q=z.left+(M.clientLeft+parseFloat(F.paddingLeft))*P.x,ie=z.top+(M.clientTop+parseFloat(F.paddingTop))*P.y;d*=P.x,h*=P.y,v*=P.x,p*=P.y,d+=q,h+=ie,$=_e(M),M=Hn($)}}return Po({width:v,height:p,x:d,y:h})}function Sa(e,t){const s=Jo(e).scrollLeft;return t?t.left+s:Wt(Ie(e)).left+s}function rc(e,t,s){s===void 0&&(s=!1);const r=e.getBoundingClientRect(),o=r.left+t.scrollLeft-(s?0:Sa(e,r)),n=r.top+t.scrollTop;return{x:o,y:n}}function Hg(e){let{elements:t,rect:s,offsetParent:r,strategy:o}=e;const n=o==="fixed",i=Ie(r),l=t?Xo(t.floating):!1;if(r===i||l&&n)return s;let d={scrollLeft:0,scrollTop:0},h=He(1);const v=He(0),p=Re(r);if((p||!p&&!n)&&((vs(r)!=="body"||Rr(i))&&(d=Jo(r)),Re(r))){const w=Wt(r);h=Qt(r),v.x=w.x+r.clientLeft,v.y=w.y+r.clientTop}const x=i&&!p&&!n?rc(i,d,!0):He(0);return{width:s.width*h.x,height:s.height*h.y,x:s.x*h.x-d.scrollLeft*h.x+v.x+x.x,y:s.y*h.y-d.scrollTop*h.y+v.y+x.y}}function Wg(e){return Array.from(e.getClientRects())}function jg(e){const t=Ie(e),s=Jo(e),r=e.ownerDocument.body,o=Dt(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),n=Dt(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let i=-s.scrollLeft+Sa(e);const l=-s.scrollTop;return Le(r).direction==="rtl"&&(i+=Dt(t.clientWidth,r.clientWidth)-o),{width:o,height:n,x:i,y:l}}function Rg(e,t){const s=_e(e),r=Ie(e),o=s.visualViewport;let n=r.clientWidth,i=r.clientHeight,l=0,d=0;if(o){n=o.width,i=o.height;const h=ka();(!h||h&&t==="fixed")&&(l=o.offsetLeft,d=o.offsetTop)}return{width:n,height:i,x:l,y:d}}function Fg(e,t){const s=Wt(e,!0,t==="fixed"),r=s.top+e.clientTop,o=s.left+e.clientLeft,n=Re(e)?Qt(e):He(1),i=e.clientWidth*n.x,l=e.clientHeight*n.y,d=o*n.x,h=r*n.y;return{width:i,height:l,x:d,y:h}}function Wl(e,t,s){let r;if(t==="viewport")r=Rg(e,s);else if(t==="document")r=jg(Ie(e));else if(Oe(t))r=Fg(t,s);else{const o=sc(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return Po(r)}function oc(e,t){const s=ut(e);return s===t||!Oe(s)||os(s)?!1:Le(s).position==="fixed"||oc(s,t)}function Ng(e,t){const s=t.get(e);if(s)return s;let r=Fs(e,[],!1).filter(l=>Oe(l)&&vs(l)!=="body"),o=null;const n=Le(e).position==="fixed";let i=n?ut(e):e;for(;Oe(i)&&!os(i);){const l=Le(i),d=Ca(i);!d&&l.position==="fixed"&&(o=null),(n?!d&&!o:!d&&l.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Rr(i)&&!d&&oc(e,i))?r=r.filter(v=>v!==i):o=l,i=ut(i)}return t.set(e,r),r}function Ig(e){let{element:t,boundary:s,rootBoundary:r,strategy:o}=e;const i=[...s==="clippingAncestors"?Xo(t)?[]:Ng(t,this._c):[].concat(s),r],l=i[0],d=i.reduce((h,v)=>{const p=Wl(t,v,o);return h.top=Dt(p.top,h.top),h.right=ss(p.right,h.right),h.bottom=ss(p.bottom,h.bottom),h.left=Dt(p.left,h.left),h},Wl(t,l,o));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function Bg(e){const{width:t,height:s}=tc(e);return{width:t,height:s}}function Gg(e,t,s){const r=Re(t),o=Ie(t),n=s==="fixed",i=Wt(e,!0,n,t);let l={scrollLeft:0,scrollTop:0};const d=He(0);if(r||!r&&!n)if((vs(t)!=="body"||Rr(o))&&(l=Jo(t)),r){const x=Wt(t,!0,n,t);d.x=x.x+t.clientLeft,d.y=x.y+t.clientTop}else o&&(d.x=Sa(o));const h=o&&!r&&!n?rc(o,l):He(0),v=i.left+l.scrollLeft-d.x-h.x,p=i.top+l.scrollTop-d.y-h.y;return{x:v,y:p,width:i.width,height:i.height}}function xn(e){return Le(e).position==="static"}function jl(e,t){if(!Re(e)||Le(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return Ie(e)===s&&(s=s.ownerDocument.body),s}function nc(e,t){const s=_e(e);if(Xo(e))return s;if(!Re(e)){let o=ut(e);for(;o&&!os(o);){if(Oe(o)&&!xn(o))return o;o=ut(o)}return s}let r=jl(e,t);for(;r&&Dg(r)&&xn(r);)r=jl(r,t);return r&&os(r)&&xn(r)&&!Ca(r)?s:r||zg(e)||s}const Zg=async function(e){const t=this.getOffsetParent||nc,s=this.getDimensions,r=await s(e.floating);return{reference:Gg(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ug(e){return Le(e).direction==="rtl"}const Yg={convertOffsetParentRelativeRectToViewportRelativeRect:Hg,getDocumentElement:Ie,getClippingRect:Ig,getOffsetParent:nc,getElementRects:Zg,getClientRects:Wg,getDimensions:Bg,getScale:Qt,isElement:Oe,isRTL:Ug};function qg(e,t){let s=null,r;const o=Ie(e);function n(){var l;clearTimeout(r),(l=s)==null||l.disconnect(),s=null}function i(l,d){l===void 0&&(l=!1),d===void 0&&(d=1),n();const{left:h,top:v,width:p,height:x}=e.getBoundingClientRect();if(l||t(),!p||!x)return;const w=Zr(v),$=Zr(o.clientWidth-(h+p)),M=Zr(o.clientHeight-(v+x)),P=Zr(h),F={rootMargin:-w+"px "+-$+"px "+-M+"px "+-P+"px",threshold:Dt(0,ss(1,d))||1};let q=!0;function ie(K){const ke=K[0].intersectionRatio;if(ke!==d){if(!q)return i();ke?i(!1,ke):r=setTimeout(()=>{i(!1,1e-7)},1e3)}q=!1}try{s=new IntersectionObserver(ie,{...F,root:o.ownerDocument})}catch{s=new IntersectionObserver(ie,F)}s.observe(e)}return i(!0),n}function ic(e,t,s,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:d=!1}=r,h=$a(e),v=o||n?[...h?Fs(h):[],...Fs(t)]:[];v.forEach(z=>{o&&z.addEventListener("scroll",s,{passive:!0}),n&&z.addEventListener("resize",s)});const p=h&&l?qg(h,s):null;let x=-1,w=null;i&&(w=new ResizeObserver(z=>{let[F]=z;F&&F.target===h&&w&&(w.unobserve(t),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{var q;(q=w)==null||q.observe(t)})),s()}),h&&!d&&w.observe(h),w.observe(t));let $,M=d?Wt(e):null;d&&P();function P(){const z=Wt(e);M&&(z.x!==M.x||z.y!==M.y||z.width!==M.width||z.height!==M.height)&&s(),M=z,$=requestAnimationFrame(P)}return s(),()=>{var z;v.forEach(F=>{o&&F.removeEventListener("scroll",s),n&&F.removeEventListener("resize",s)}),p==null||p(),(z=w)==null||z.disconnect(),w=null,d&&cancelAnimationFrame($)}}const Kg=Rs,ac=Og,Xg=Lg,lc=Eg,Jg=Tg,Qg=Mg,dc=(e,t,s)=>{const r=new Map,o={platform:Yg,...s},n={...o.platform,_c:r};return Sg(e,t,{...o,platform:n})};var ep=R`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: contents;
    }

    :host([open]) dialog {
      opacity: 1;
      box-sizing: border-box;
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    dialog {
      display: flex;
      flex-direction: column;
      inset: auto;
      position: fixed;
      overflow: hidden;
      padding: 0px;
      box-sizing: border-box;
      right: 0;
      margin: 0;
      box-shadow:
        0 0 0 1px rgba(0, 0, 0, 0.2),
        0 1rem 28px rgba(0, 0, 0, 0.15);
      border-width: 0;
      border-radius: 0.5rem;
    }

    header {
      display: none;
    }

    dialog:not(.has-backdrop)::backdrop {
      background-color: transparent;
      display: block;
      position: fixed;
    }
  }
`,tp=ep,Wn,cc,zt,Ho,it,Cs,$t,jn,eo,Rn,Fn,hc,Nn,gc,to,In,Qo,en,so,ro,G=class extends U{constructor(){super(...arguments),f(this,Wn),f(this,eo),f(this,Fn),f(this,Nn),f(this,to),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>"500px",this.nonmodal=!1,this.floatingUIMiddleware=[ac(8),lc()],this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,f(this,zt,void 0),f(this,Ho,!1),f(this,it,void 0),f(this,Cs,()=>{this.open=!1,c(this,$t).call(this,"cancel")}),f(this,$t,e=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason:e},bubbles:!1,composed:!1}))}),f(this,jn,e=>{e.stopPropagation(),e.preventDefault(),this.open=!1,c(this,$t).call(this,"close"),setTimeout(()=>{var t;return(t=this._trigger)==null?void 0:t.focus()},250)}),f(this,Qo,e=>{(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),this.open=!0,c(this,$t).call(this,"show")),e.key==="Escape"&&this.open&&c(this,Cs).call(this)}),f(this,en,e=>{e.preventDefault(),this.open=!this.open,c(this,$t).call(this,this.open?"show":"close")}),f(this,so,()=>{var e;const t=(e=this._elDefaultSlot)==null?void 0:e.assignedElements()[0];this.updateComplete.then(()=>{t==null||t.focus()})}),f(this,ro,e=>{const t=e,s=this._elDialog;if((t.clientX>0||t.clientY>0)&&s&&this.open){const o=s.getBoundingClientRect();o.top<=t.clientY&&t.clientY<=o.top+o.height&&o.left<=t.clientX&&t.clientX<=o.left+o.width||(this.open=!1,c(this,$t).call(this,"close"))}})}_handleTriggerRefChanged(){var e;(e=this.triggerRef)==null||e.then(t=>{t&&(this._trigger=t)})}_handleAnchorRefChanged(){var e;(e=this.anchorRef)==null||e.then(t=>{t&&(this._anchor=t)})}_handleTriggerChanged(){C(this,eo,Rn).call(this),C(this,Nn,gc).call(this)}_handleAnchorChanged(){C(this,to,In).call(this)}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-popover"),C(this,eo,Rn).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{e.key==="Escape"&&this.open&&(c(this,Cs).call(this),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{const t=e.target;t.tagName==="INPUT"||t.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),C(this,Fn,hc).call(this)}render(){return m`<slot
        name="trigger"
        @slotchange=${C(this,Wn,cc)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${We({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          aria-hidden="${String(!this.open)}"
          @close=${()=>this.open&&c(this,Cs).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${c(this,jn)}
              class="close"
              label="${O("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const e=(this.nonmodal?c(this,it):this._elDialog)||document;this.updateComplete.then(()=>{var t,s,r,o;(t=this._trigger)==null||t.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?(r=this._elDialog)==null||r.setAttribute("open","true"):(s=this._elDialog)==null||s.showModal(),c(this,so).call(this),requestAnimationFrame(()=>{c(this,it)&&(c(this,it).show=!0)}),setTimeout(()=>c(this,so).call(this),250),setTimeout(()=>e.addEventListener("click",c(this,ro)),0)):((o=this._elDialog)==null||o.close(),e.removeEventListener("click",c(this,ro)),c(this,it)&&(c(this,it).show=!1))})}_handleBackdropChange(){var e;const t=(e=this.parentElement)==null?void 0:e.getRootNode();!this.backdrop||!t||Z(this,it,t.querySelector(this.backdrop))}_handleMobileLayout(e){var t,s,r,o;Z(this,Ho,e),e&&!this.disableMobileStyles?((t=c(this,zt))==null||t.call(this),(s=this._elDialog)==null||s.style.removeProperty("left"),(r=this._elDialog)==null||r.style.removeProperty("top"),(o=this._elDialog)==null||o.style.removeProperty("minWidth"),this.updateComplete.then(()=>{var n;this.open&&((n=this._elDialog)==null||n.showModal())})):this.updateComplete.then(()=>{C(this,to,In).call(this)})}};Wn=new WeakSet;cc=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};zt=new WeakMap;Ho=new WeakMap;it=new WeakMap;Cs=new WeakMap;$t=new WeakMap;jn=new WeakMap;eo=new WeakSet;Rn=function(){var e,t;(e=this._trigger)==null||e.addEventListener("keydown",c(this,Qo)),(t=this._trigger)==null||t.addEventListener("click",c(this,en))};Fn=new WeakSet;hc=function(){var e,t,s;(e=this._trigger)==null||e.removeEventListener("keydown",c(this,Qo)),(t=this._trigger)==null||t.removeEventListener("click",c(this,en)),(s=c(this,zt))==null||s.call(this)};Nn=new WeakSet;gc=function(){var e;if(this._trigger){(e=this._trigger)==null||e.setAttribute("aria-expanded",String(this.open));const t=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||t.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const r=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";this._trigger.getAttribute(r)===null&&this._trigger.setAttribute(r,this.popupRole)}};to=new WeakSet;In=function(){if(!this._anchor||!this._elDialog)return;const e=this._anchor,t=this._elDialog;!e||!t||c(this,Ho)&&!this.disableMobileStyles||(c(this,zt)&&c(this,zt).call(this),Z(this,zt,ic(e,t,()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),dc(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:s,y:r})=>Object.assign(t.style,{left:`${s}px`,top:`${r}px`}))})))};Qo=new WeakMap;en=new WeakMap;so=new WeakMap;ro=new WeakMap;G.styles=J(tp);a([g({type:Boolean,reflect:!0})],G.prototype,"open",2);a([g({attribute:"popup-role"})],G.prototype,"popupRole",2);a([g({attribute:!1})],G.prototype,"triggerRef",2);a([g({attribute:!1})],G.prototype,"anchorRef",2);a([g()],G.prototype,"label",2);a([g()],G.prototype,"placement",2);a([g({type:Boolean})],G.prototype,"disableMobileStyles",2);a([g({attribute:!1})],G.prototype,"calcMinWidth",2);a([g({attribute:!1})],G.prototype,"calcMaxWidth",2);a([g({attribute:!1})],G.prototype,"calcMinHeight",2);a([g({attribute:!1})],G.prototype,"calcMaxHeight",2);a([g({type:Boolean})],G.prototype,"nonmodal",2);a([g()],G.prototype,"backdrop",2);a([g({attribute:!1})],G.prototype,"floatingUIMiddleware",2);a([W()],G.prototype,"_trigger",2);a([W()],G.prototype,"_anchor",2);a([W()],G.prototype,"_isVirtKbVisible",2);a([oe("slot:not([name])")],G.prototype,"_elDefaultSlot",2);a([oe('slot[name="trigger"]')],G.prototype,"_elTriggerSlot",2);a([oe("dialog")],G.prototype,"_elDialog",2);a([ne("triggerRef")],G.prototype,"_handleTriggerRefChanged",1);a([ne("anchorRef")],G.prototype,"_handleAnchorRefChanged",1);a([ne("_trigger")],G.prototype,"_handleTriggerChanged",1);a([ne("_anchor")],G.prototype,"_handleAnchorChanged",1);a([ne("open")],G.prototype,"_handleOpenChange",1);a([ne("backdrop")],G.prototype,"_handleBackdropChange",1);a([mg("(max-width: 576px)")],G.prototype,"_handleMobileLayout",1);G=a([k("gds-popover"),Nt()],G);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Bn extends Wr{constructor(t){if(super(t),this.it=B,t.type!==Hr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===B||t==null)return this._t=void 0,this.it=t;if(t===Ae)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}Bn.directiveName="unsafeHTML",Bn.resultType=1;const pc=us(Bn);var sp=R`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    svg {
      display: block;
    }
  }
`,rp=sp,L=class extends U{constructor(){super(...arguments),this.solid=!1,this.box=!1,this.label=""}render(){const e=this.constructor._name==="brand-seb",t=e?"55":this.width!==void 0?this.width.toString():void 0,s=e?"24":this.height!==void 0?this.height.toString():"1lh",r=e?"0 0 55 24":this.box||"0 0 24 24";let o=`<svg
      ${t?`width="${t}"`:""}
      height="${s}"
      viewBox="${r}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
      part="icon" 
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return this.stroke&&(o=o.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`)),ue`${pc(o)}`}};L.styles=[rp];a([g({type:Number})],L.prototype,"width",2);a([g({type:Number})],L.prototype,"height",2);a([g({type:Boolean})],L.prototype,"solid",2);a([g({type:Number})],L.prototype,"stroke",2);a([g({type:String})],L.prototype,"box",2);a([g({type:String})],L.prototype,"label",2);var Ns=class extends L{};Ns._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';Ns._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>';Ns._name="cross-small";Ns=a([k("gds-icon-cross-small")],Ns);var Is=class extends L{};Is._regularSVG='<path d="M14 5.75L20.25 12L14 18.25M19.5 12H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Is._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1161 5.36612C13.6043 4.87796 14.3957 4.87796 14.8839 5.36612L20.6339 11.1161C20.8683 11.3505 21 11.6685 21 12C21 12.3315 20.8683 12.6494 20.6339 12.8839L14.8839 18.6339C14.3957 19.122 13.6043 19.122 13.1161 18.6339C12.628 18.1457 12.628 17.3543 13.1161 16.8661L16.7322 13.25H4.25C3.55964 13.25 3 12.6903 3 12C3 11.3096 3.55964 10.75 4.25 10.75H16.7322L13.1161 7.13388C12.628 6.64573 12.628 5.85427 13.1161 5.36612Z" fill="currentColor"/>';Is._name="arrow-right";Is=a([k("gds-icon-arrow-right")],Is);var Bs=class extends L{};Bs._regularSVG='<path d="M4.75 21.25V14.75M4.75 14.75V2.75H20.25L16.25 8.75L20.25 14.75H4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Bs._solidSVG='<path d="M4.75 2C4.33579 2 4 2.33579 4 2.75V21.25C4 21.6642 4.33579 22 4.75 22C5.16421 22 5.5 21.6642 5.5 21.25V15.5H20.25C20.5266 15.5 20.7807 15.3478 20.9113 15.1039C21.0418 14.86 21.0275 14.5641 20.874 14.334L17.1514 8.75L20.874 3.16603C21.0275 2.93588 21.0418 2.63997 20.9113 2.39611C20.7807 2.15224 20.5266 2 20.25 2H4.75Z" fill="currentColor"/>';Bs._name="flag";Bs=a([k("gds-icon-flag")],Bs);var Gs=class extends L{};Gs._regularSVG='<path d="M12 12V10.75C12 6.88401 8.86599 3.75 5 3.75H3.75V5C3.75 8.86599 6.88401 12 10.75 12H12ZM12 12V20.25M19 6.75H20.25V8.25C20.25 12.116 17.116 15.25 13.25 15.25H12V13.75C12 9.88401 15.134 6.75 19 6.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Gs._solidSVG='<path d="M3.75 3C3.33579 3 3 3.33579 3 3.75V5C3 9.28021 6.46979 12.75 10.75 12.75H11.25V20.25C11.25 20.6642 11.5858 21 12 21C12.4142 21 12.75 20.6642 12.75 20.25V16H13.25C17.5302 16 21 12.5302 21 8.25V6.75C21 6.33579 20.6642 6 20.25 6H19C16.3562 6 14.0216 7.32382 12.6229 9.34475C11.9618 5.73541 8.80036 3 5 3H3.75Z" fill="currentColor"/>';Gs._name="growth";Gs=a([k("gds-icon-growth")],Gs);var Zs=class extends L{};Zs._regularSVG='<path d="M2.75 12H21.25M2.75 5.75H21.25M2.75 18.25H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Zs._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.75C2 5.33579 2.33579 5 2.75 5H21.25C21.6642 5 22 5.33579 22 5.75C22 6.16421 21.6642 6.5 21.25 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75ZM2 12C2 11.5858 2.33579 11.25 2.75 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H2.75C2.33579 12.75 2 12.4142 2 12ZM2 18.25C2 17.8358 2.33579 17.5 2.75 17.5H21.25C21.6642 17.5 22 17.8358 22 18.25C22 18.6642 21.6642 19 21.25 19H2.75C2.33579 19 2 18.6642 2 18.25Z" fill="currentColor"/>';Zs._name="bars-three";Zs=a([k("gds-icon-bars-three")],Zs);var Us=class extends L{};Us._regularSVG='<path d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75M12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75M12 21.25C9.65279 21.25 7.75 17.1086 7.75 12C7.75 6.89137 9.65279 2.75 12 2.75M12 21.25C14.3472 21.25 16.25 17.1086 16.25 12C16.25 6.89137 14.3472 2.75 12 2.75M21 12H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>';Us._solidSVG='<path d="M2.02771 11.2499H7.01143C7.08916 8.70549 7.55991 6.38765 8.30456 4.63553C8.71256 3.67552 9.2176 2.85039 9.81666 2.2542C9.82324 2.24765 9.82984 2.24112 9.83645 2.23462C5.59031 3.17115 2.35718 6.80647 2.02771 11.2499Z" fill="currentColor"/><path d="M2.02771 12.7499C2.35718 17.1934 5.59031 20.8288 9.83645 21.7653C9.82984 21.7588 9.82324 21.7522 9.81666 21.7457C9.2176 21.1495 8.71256 20.3244 8.30456 19.3644C7.55991 17.6122 7.08916 15.2944 7.01143 12.7499H2.02771Z" fill="currentColor"/><path d="M14.1636 21.7653C18.4097 20.8287 21.6428 17.1934 21.9723 12.7499H16.9886C16.9109 15.2944 16.4401 17.6122 15.6955 19.3644C15.2875 20.3244 14.7824 21.1495 14.1834 21.7457C14.1768 21.7522 14.1702 21.7588 14.1636 21.7653Z" fill="currentColor"/><path d="M21.9723 11.2499C21.6428 6.80648 18.4097 3.17115 14.1636 2.23462C14.1702 2.24112 14.1768 2.24765 14.1834 2.2542C14.7824 2.85039 15.2875 3.67552 15.6955 4.63553C16.4401 6.38765 16.9109 8.70549 16.9886 11.2499H21.9723Z" fill="currentColor"/><path d="M13.1252 3.3174C12.7104 2.90457 12.3309 2.74995 12 2.74995C11.6691 2.74995 11.2896 2.90457 10.8748 3.3174C10.4569 3.73326 10.0462 4.3726 9.68505 5.22224C9.03191 6.75905 8.58961 8.8698 8.51216 11.2499H15.4879C15.4104 8.8698 14.9681 6.75905 14.315 5.22224C13.9539 4.3726 13.5431 3.73326 13.1252 3.3174Z" fill="currentColor"/><path d="M14.315 18.7777C14.9681 17.2409 15.4104 15.1301 15.4879 12.7499L8.51216 12.7499C8.58961 15.1301 9.03191 17.2409 9.68505 18.7777C10.0462 19.6273 10.4569 20.2666 10.8748 20.6825C11.2896 21.0953 11.6691 21.2499 12 21.2499C12.3309 21.2499 12.7104 21.0953 13.1252 20.6825C13.5431 20.2666 13.9539 19.6273 14.315 18.7777Z" fill="currentColor"/>';Us._name="globus";Us=a([k("gds-icon-globus")],Us);var Ys=class extends L{};Ys._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M9.19644 4.64738C9.52928 4.89393 9.59923 5.36362 9.35268 5.69647L6.01935 10.1965C5.7804 10.5191 5.32981 10.5963 4.99708 10.3717L3.33041 9.24668C2.98709 9.01494 2.89664 8.54876 3.12838 8.20544C3.36012 7.86212 3.8263 7.77167 4.16962 8.00341L5.2413 8.72679L8.14735 4.80363C8.3939 4.47078 8.86359 4.40083 9.19644 4.64738ZM11 7.75005C11 7.33583 11.3358 7.00005 11.75 7.00005H20.25C20.6642 7.00005 21 7.33583 21 7.75005C21 8.16426 20.6642 8.50005 20.25 8.50005H11.75C11.3358 8.50005 11 8.16426 11 7.75005ZM9.19644 13.6474C9.52928 13.8939 9.59923 14.3636 9.35268 14.6965L6.01935 19.1965C5.7804 19.5191 5.32981 19.5963 4.99708 19.3717L3.33041 18.2467C2.98709 18.0149 2.89664 17.5488 3.12838 17.2054C3.36012 16.8621 3.8263 16.7717 4.16962 17.0034L5.2413 17.7268L8.14735 13.8036C8.3939 13.4708 8.86359 13.4008 9.19644 13.6474ZM11 16.25C11 15.8358 11.3358 15.5 11.75 15.5H20.25C20.6642 15.5 21 15.8358 21 16.25C21 16.6643 20.6642 17 20.25 17H11.75C11.3358 17 11 16.6643 11 16.25Z" fill="currentColor"/>';Ys._solidSVG='<path d="M11.75 16.25H20.25M11.75 7.75H20.25M3.75 8.625L5.41667 9.75L8.75 5.25M3.75 17.625L5.41667 18.75L8.75 14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Ys._name="checklist";Ys=a([k("gds-icon-checklist")],Ys);var qs=class extends L{};qs._regularSVG='<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" fill="currentColor"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" fill="currentColor"/><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';qs._solidSVG='<path d="M3.75 10.25C2.7835 10.25 2 11.0335 2 12C2 12.9665 2.7835 13.75 3.75 13.75C4.7165 13.75 5.5 12.9665 5.5 12C5.5 11.0335 4.7165 10.25 3.75 10.25Z" fill="currentColor"/><path d="M12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25Z" fill="currentColor"/><path d="M20.25 10.25C19.2835 10.25 18.5 11.0335 18.5 12C18.5 12.9665 19.2835 13.75 20.25 13.75C21.2165 13.75 22 12.9665 22 12C22 11.0335 21.2165 10.25 20.25 10.25Z" fill="currentColor"/>';qs._name="dot-grid-one-horizontal";qs=a([k("gds-icon-dot-grid-one-horizontal")],qs);var Ks=class extends L{};Ks._regularSVG='<path d="M2.75 7.25H21.25M2.75 16.75H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';Ks._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 7.25C2 6.83579 2.33579 6.5 2.75 6.5H21.25C21.6642 6.5 22 6.83579 22 7.25C22 7.66421 21.6642 8 21.25 8H2.75C2.33579 8 2 7.66421 2 7.25ZM2 16.75C2 16.3358 2.33579 16 2.75 16H21.25C21.6642 16 22 16.3358 22 16.75C22 17.1642 21.6642 17.5 21.25 17.5H2.75C2.33579 17.5 2 17.1642 2 16.75Z" fill="currentColor"/>';Ks._name="bars-two";Ks=a([k("gds-icon-bars-two")],Ks);var Xs=class extends L{};Xs._regularSVG='<path d="M14.957 6.12105L11.9903 8.31798C10.5943 7.11834 8.78371 6.88708 7.78755 6.88708C6.78411 6.88708 5.72977 7.17615 5.5698 7.8916C5.40984 8.58537 6.06425 9.12737 7.18403 9.43089C8.46378 9.77055 9.61991 10.0741 11.4159 10.5799C14.0772 11.3388 15.9023 12.4806 15.9023 15.1328C15.9023 18.7967 12.6302 20.6902 8.25291 20.6902C3.87559 20.6902 0.894368 18.4282 0 17.3731L3.13392 15.0461C5.33712 16.9539 6.86409 17.2213 8.14384 17.2213C9.61264 17.2213 10.9869 16.9106 11.1614 16.0867C11.3068 15.4219 10.7542 14.8943 9.50357 14.6052C8.09294 14.28 6.89318 14.0199 5.56253 13.673C1.9487 12.7335 0.930724 10.645 0.930724 8.76604C0.930724 6.18609 3.34479 3.53388 7.773 3.53388C12.303 3.53388 14.957 6.11382 14.957 6.12105ZM33.8551 3.79404H20.6359V20.206H34.0951V16.4192H25.275V13.7742H31.3465V10.1536H25.275V7.53749H33.8478V3.79404H33.8551ZM17.2184 23.9928H18.2437V0H17.2184V23.9928ZM35.8329 23.9928H36.8581V0H35.8329V23.9928ZM39.2504 20.206H49.8665C52.7023 20.206 55.0073 18.5077 55.0073 15.7832C55.0073 13.6585 53.6112 12.2493 51.6479 11.6278C51.5825 11.6134 51.5243 11.6061 51.4589 11.6061C51.5243 11.5989 51.5898 11.5917 51.6479 11.57C52.775 11.1292 54.0111 9.95122 54.0111 7.94941C54.0111 5.4056 51.7497 3.78681 48.9576 3.78681H39.2431L39.2504 20.206ZM43.9113 7.20506H47.6196C48.4704 7.20506 49.1612 7.87715 49.1612 8.64318C49.1612 9.40921 48.4704 10.0885 47.6196 10.0885H43.9113V7.20506ZM48.4413 16.5637H43.904V13.5718H48.4413C49.2411 13.5718 49.8956 14.215 49.8956 15.0678C49.8956 15.9133 49.2484 16.5637 48.4413 16.5637Z" fill="currentColor"/>';Xs._solidSVG='<path d="M14.957 6.12105L11.9903 8.31798C10.5943 7.11834 8.78371 6.88708 7.78755 6.88708C6.78411 6.88708 5.72977 7.17615 5.5698 7.8916C5.40984 8.58537 6.06425 9.12737 7.18403 9.43089C8.46378 9.77055 9.61991 10.0741 11.4159 10.5799C14.0772 11.3388 15.9023 12.4806 15.9023 15.1328C15.9023 18.7967 12.6302 20.6902 8.25291 20.6902C3.87559 20.6902 0.894368 18.4282 0 17.3731L3.13392 15.0461C5.33712 16.9539 6.86409 17.2213 8.14384 17.2213C9.61264 17.2213 10.9869 16.9106 11.1614 16.0867C11.3068 15.4219 10.7542 14.8943 9.50357 14.6052C8.09294 14.28 6.89318 14.0199 5.56253 13.673C1.9487 12.7335 0.930724 10.645 0.930724 8.76604C0.930724 6.18609 3.34479 3.53388 7.773 3.53388C12.303 3.53388 14.957 6.11382 14.957 6.12105ZM33.8551 3.79404H20.6359V20.206H34.0951V16.4192H25.275V13.7742H31.3465V10.1536H25.275V7.53749H33.8478V3.79404H33.8551ZM17.2184 23.9928H18.2437V0H17.2184V23.9928ZM35.8329 23.9928H36.8581V0H35.8329V23.9928ZM39.2504 20.206H49.8665C52.7023 20.206 55.0073 18.5077 55.0073 15.7832C55.0073 13.6585 53.6112 12.2493 51.6479 11.6278C51.5825 11.6134 51.5243 11.6061 51.4589 11.6061C51.5243 11.5989 51.5898 11.5917 51.6479 11.57C52.775 11.1292 54.0111 9.95122 54.0111 7.94941C54.0111 5.4056 51.7497 3.78681 48.9576 3.78681H39.2431L39.2504 20.206ZM43.9113 7.20506H47.6196C48.4704 7.20506 49.1612 7.87715 49.1612 8.64318C49.1612 9.40921 48.4704 10.0885 47.6196 10.0885H43.9113V7.20506ZM48.4413 16.5637H43.904V13.5718H48.4413C49.2411 13.5718 49.8956 14.215 49.8956 15.0678C49.8956 15.9133 49.2484 16.5637 48.4413 16.5637Z" fill="currentColor"/>';Xs._name="brand-seb";Xs=a([k("gds-icon-brand-seb")],Xs);var Js=class extends L{};Js._regularSVG='<path d="M16 17.25C16 19.4591 14.2091 21.25 12 21.25C9.79086 21.25 8 19.4591 8 17.25M3.75 17.25H20.25V16L18.7031 13L18.4965 8.90897C18.3234 5.45882 15.4661 2.75 12 2.75C8.53386 2.75 5.6766 5.45882 5.50351 8.90897L5.29688 13L3.75 16V17.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Js._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C8.13655 2 4.94782 5.0198 4.75447 8.87114L4.556 12.8003L3.0834 15.6563C3.02859 15.7626 3 15.8804 3 16V17.25C3 17.6642 3.33579 18 3.75 18H7.30888C7.66846 20.267 9.63185 22 12 22C14.3682 22 16.3315 20.267 16.6911 18H20.25C20.6642 18 21 17.6642 21 17.25V16C21 15.8804 20.9714 15.7626 20.9166 15.6563L19.444 12.8003L19.2455 8.87139C19.0522 5.02005 15.8634 2 12 2ZM12 20.5C10.4632 20.5 9.17555 19.4333 8.83697 18H15.163C14.8245 19.4333 13.5368 20.5 12 20.5Z" fill="currentColor"/>';Js._name="bell";Js=a([k("gds-icon-bell")],Js);var Qs=class extends L{};Qs._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Qs._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>';Qs._name="calendar";Qs=a([k("gds-icon-calendar")],Qs);var er=class extends L{};er._regularSVG='<path d="M20 20L16.1265 16.1265M16.1265 16.1265C17.4385 14.8145 18.25 13.002 18.25 11C18.25 6.99594 15.0041 3.75 11 3.75C6.99594 3.75 3.75 6.99594 3.75 11C3.75 15.0041 6.99594 18.25 11 18.25C13.002 18.25 14.8145 17.4385 16.1265 16.1265Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';er._solidSVG='<path d="M3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.9388 18.3096 14.7174 17.1624 16.1018L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2374 20.8232 19.7625 20.8232 19.4696 20.5303L16.1017 17.1624C14.7174 18.3096 12.9388 19 11 19C6.58172 19 3 15.4183 3 11Z" fill="currentColor"/>';er._name="magnifying-glass";er=a([k("gds-icon-magnifying-glass")],er);var ge,Me=class extends U{constructor(){super(),f(this,ge,void 0),this.required=!1,this.label="",this.name="";try{Z(this,ge,this.attachInternals())}catch{Z(this,ge,{form:this.closest("form"),setFormValue:t=>{this.value=t},setValidity:(t,s)=>{this.invalid=t.customError},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0})}}set invalid(e){const t=this.invalid;c(this,ge).setValidity(wo(ts({},c(this,ge).validity),{customError:e,valid:!e}),this.validationMessage||O("Error message."),this._getValidityAnchor()||void 0),this.requestUpdate("invalid",t),c(this,ge).checkValidity()}get invalid(){return!c(this,ge).validity.valid}get form(){return c(this,ge).form}get validity(){return c(this,ge).validity}get validationMessage(){return c(this,ge).validationMessage}get willValidate(){return c(this,ge).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const t=this.invalid,s=this.validator.validate(this)||[wo(ts({},this.validity),{valid:!0}),""];return c(this,ge).setValidity(s[0],s[1],this._getValidityAnchor()),this.requestUpdate("invalid",t),c(this,ge).checkValidity()}reportValidity(){return c(this,ge).reportValidity()}__handleValueChange(){c(this,ge).setFormValue(this.value),this.checkValidity()}formResetCallback(){this.value=void 0}formAssociatedCallback(e){e==null||e.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(e){this.checkValidity(),this.validity.valid||e.preventDefault()}focus(e){this._getValidityAnchor().focus(e)}};ge=new WeakMap;Me.formAssociated=!0;a([g({attribute:!1})],Me.prototype,"validator",2);a([g({type:Boolean})],Me.prototype,"required",2);a([g({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:e=>e==null?void 0:e.toString()}})],Me.prototype,"invalid",1);a([g()],Me.prototype,"label",2);a([g()],Me.prototype,"value",2);a([g({reflect:!0})],Me.prototype,"name",2);a([ne("value")],Me.prototype,"__handleValueChange",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=e=>e??B;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ae(e,t,s){return e?t(e):s==null?void 0:s(e)}var op=class extends Wr{constructor(e){if(super(e),e.type!==Hr.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(e){return B}update(e,[t]){var s;const r=e.element,o=(s=e.options)==null?void 0:s.host;Array.from(o.attributes).forEach(n=>{t(n)&&r.setAttribute(n.name.replace("gds-",""),n.value)})}},uc=us(op),Rl=new WeakMap;function np(e){return(t,...s)=>{let r=Rl.get(t);return r||(r=t.map(o=>o.replace(/\n[\s]+</gm,"<")),r.raw=t.raw,Rl.set(t,r)),e(r,...s)}}var ip=`@layer tokens, core, a11y, ranks, sizes, variants, disabled;

@layer a11y {
  @media (prefers-reduced-motion: reduce) {
    .button {
      transition: none;
    }
  }
}

@layer core {
  :host {
    display: inline-block;
    max-width: 100%;
  }

  .button {
    --_block-size: var(--gds-space-3xl);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    block-size: var(--_block-size);
    background-color: var(--gds-color-l3-background-primary);
    color: var(--gds-color-l3-content-primary);
    border-radius: var(--gds-space-max);
    font-family: inherit;
    font-size: var(--gds-text-size-detail-m);
    line-height: var(--gds-text-line-height-detail-m);
    font-weight: var(--gds-text-weight-book);
    gap: var(--gds-space-s);
    outline-color: transparent;
    outline-offset: var(--gds-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-space-3xs);
    padding-block: var(--gds-space-s);
    padding-inline: var(--gds-space-l);
    position: relative;
    text-decoration: none;
    transition-property: color, border-color;
    transition: all 0.4s;
    max-width: 100%;
    width: 100%;

    &:focus {
      outline-color: color-mix(in srgb, currentcolor, #000 100%);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-primary),
        var(--gds-color-l3-states-dark-hover)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-primary),
        var(--gds-color-l3-states-dark-pressed)
      );
    }

    &:not(.circle) slot:not([name]) {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

/* High specificity */
.button.circle {
  aspect-ratio: 1/1;
  padding: 0;
}

.button:disabled {
  pointer-events: none;
  background-color: var(--gds-color-l3-background-disabled);
  color: var(--gds-color-l3-content-disabled);
}

@layer ranks {
  :host([rank*='secondary']) .button {
    background-color: var(--gds-color-l3-background-secondary);
    color: var(--gds-color-l3-content-tertiary);

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-secondary),
        var(--gds-color-l3-states-light-hover)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-secondary),
        var(--gds-color-l3-states-light-pressed)
      );
    }
  }

  :host([rank*='tertiary']) .button {
    background-color: transparent;
    color: var(--gds-color-l3-content-tertiary);

    &:hover {
      background-color: color-mix(
        in srgb,
        transparent,
        var(--gds-color-l3-states-light-hover)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        transparent,
        var(--gds-color-l3-states-light-pressed)
      );
    }
  }
}

@layer sizes {
  :host([size='xs']) .button {
    --_block-size: var(--gds-space-l);
    font-size: var(--gds-text-size-detail-s);
    line-height: var(--gds-text-line-height-detail-s);
    padding-inline: var(--gds-space-m);
  }

  :host([size='small']) .button {
    --_block-size: var(--gds-space-xl);
    font-size: var(--gds-text-size-detail-s);
    line-height: var(--gds-text-line-height-detail-s);
    padding-inline: var(--gds-space-m);
  }

  :host([size='medium']) .button {
    --_block-size: var(--gds-space-2xl);
    font-size: var(--gds-text-size-detail-m);
    line-height: var(--gds-text-line-height-detail-m);
  }
}

@layer variants {
  .positive {
    background-color: var(--gds-color-l3-background-positive);

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-positive),
        var(--gds-color-l3-states-dark-hover)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-positive),
        var(--gds-color-l3-states-dark-pressed)
      );
    }

    &.secondary {
      background-color: var(--gds-color-l3-background-positive-secondary);
      color: var(--gds-color-l3-content-positive);

      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-color-l3-background-positive-secondary),
          var(--gds-color-l3-states-positive-hover)
        );
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-color-l3-background-positive-secondary),
          var(--gds-color-l3-states-positive-pressed)
        );
      }
    }

    &.tertiary {
      background-color: transparent;
      color: var(--gds-color-l3-content-positive);

      &:hover {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-positive-hover)
        );
      }

      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-positive-pressed)
        );
      }
    }
  }

  .negative {
    background-color: var(--gds-color-l3-background-negative);

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-negative),
        var(--gds-color-l3-states-dark-hover)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-negative),
        var(--gds-color-l3-states-dark-pressed)
      );
    }

    &.secondary {
      background-color: var(--gds-color-l3-background-negative-secondary);
      color: var(--gds-color-l3-content-negative);

      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-color-l3-background-negative-secondary),
          var(--gds-color-l3-states-negative-hover)
        );
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-color-l3-background-negative-secondary),
          var(--gds-color-l3-states-negative-pressed)
        );
      }
    }

    &.tertiary {
      background-color: transparent;
      color: var(--gds-color-l3-content-negative);

      &:hover {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-negative-hover)
        );
      }

      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-negative-pressed)
        );
      }
    }
  }
}
`,ap=["aria-label","aria-haspopup","aria-expanded"],lp=np(m),ks,qe,at,Gn,fc,Zn,Un,de=class extends Me{constructor(){super(),f(this,qe),f(this,Gn),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",f(this,ks,!1),f(this,Zn,()=>{var e,t;const s=(t=(e=this._mainSlot)==null?void 0:e.assignedElements())!=null?t:[];Z(this,ks,s.length===1&&s.some(r=>r.tagName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),f(this,Un,e=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e})),this.form&&!c(this,qe,at)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),xe.instance.apply(this,"gds-button")}render(){const e={button:!0,circle:c(this,ks),icon:c(this,ks),small:this.size==="small",large:this.size==="large",positive:this.variant==="positive",negative:this.variant==="negative",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},t=c(this,qe,at)?Mo`a`:Mo`button`;return Pr`
      <${t}
        class=${We(e)}
        type="${pe(c(this,qe,at)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||B}
        href=${pe(c(this,qe,at)?this.href:void 0)}
        target=${pe(c(this,qe,at)?this.target:void 0)}
        rel=${pe(c(this,qe,at)?this.rel||c(this,Gn,fc):void 0)}
        download=${pe(c(this,qe,at)?this.download:void 0)}
        part="_button"
        @click="${c(this,Un)}"
        ${uc(s=>s.name.startsWith("gds-aria")||s.name==="gds-role"||ap.includes(s.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${c(this,Zn)}></slot>
        <slot name="trail"></slot>
        ${ae(!this._isUsingTransitionalStyles,()=>lp`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${t}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}};ks=new WeakMap;qe=new WeakSet;at=function(){return this.href.length>0};Gn=new WeakSet;fc=function(){return this.target==="_blank"?"noreferrer noopener":void 0};Zn=new WeakMap;Un=new WeakMap;de.styles=[X,J(ip)];de.shadowRootOptions={mode:"open",delegatesFocus:!0};a([g({type:Boolean,reflect:!0})],de.prototype,"disabled",2);a([g({reflect:!0})],de.prototype,"type",2);a([g({reflect:!0})],de.prototype,"rank",2);a([g({reflect:!0})],de.prototype,"variant",2);a([g({reflect:!0})],de.prototype,"size",2);a([g()],de.prototype,"label",2);a([g()],de.prototype,"href",2);a([g()],de.prototype,"target",2);a([g()],de.prototype,"rel",2);a([g()],de.prototype,"download",2);a([oe("slot:not([name])")],de.prototype,"_mainSlot",2);a([oe(".button")],de.prototype,"_button",2);a([ya({attributes:!0,childList:!1,subtree:!1,characterData:!1})],de.prototype,"_attributeChanged",1);de=a([k("gds-button")],de);var dp=R`
  @layer tokens, a11y, base, simplified;

  @layer tokens {
    :host {
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      :host {
        --_transition: none;
      }
    }

    @media (prefers-reduced-transparency: reduce) {
      :host {
        --_transparency: 1;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      contain: layout;
      isolation: isolate;
      gap: var(--gds-space-xs);
    }

    :host([disabled]) {
      color: var(--gds-color-l3-content-disabled);
      pointer-events: none;
    }

    :host([size='small']) input {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
    }

    .field {
      transition: var(--_transition);
      position: relative;
      outline: 2px solid transparent;
      outline-offset: 2px;

      &:has(input:focus-visible) {
        border-color: var(--gds-color-l3-border-primary);
        outline-color: currentColor;
      }

      &.invalid:has(input:focus-visible) {
        border-color: var(--gds-color-l3-border-negative);
      }
    }

    @media (hover: hover) {
      .field {
        &:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-secondary),
            var(--gds-color-l3-states-light-hover)
          );
        }

        &.invalid:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-negative-secondary),
            var(--gds-color-l3-states-negative-hover)
          );
        }
      }
    }

    input {
      appearance: none;
      background-color: transparent;
      border: 0;
      box-sizing: border-box;
      font-family: inherit;
      margin: unset;
      outline: none;
      overflow: hidden;
      padding: unset;
      transition: var(--_transition);
      width: 100%;
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      line-height: 18px;
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-m);
      max-width: var(--gds-space-m);
      display: flex;
    }

    slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-l);
      display: flex;
    }
  }

  @layer simplified {
  }
`,Yn,vc,qn,mc,Ma,Ea,Ta,Aa,Oa,La,bc,Da,xc,za,yc,Va,wc,Pa,_c,Ha,Cc,ve=class extends Me{constructor(){super(),f(this,Yn),f(this,qn),f(this,La),f(this,Da),f(this,za),f(this,Va),f(this,Pa),f(this,Ha),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this.trailSlotOccupied=!1,f(this,Ma,e=>["type","placeholder","required"].includes(e.name)),f(this,Ea,e=>{const t=e.target;this.value=t.value}),f(this,Ta,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),f(this,Aa,()=>{this.elInputAsync.then(e=>e.focus())}),f(this,Oa,()=>{this.value=""})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return m`${Ed(this.variant,[["default",()=>C(this,Yn,vc).call(this)],["floating-label",()=>C(this,qn,mc).call(this)]])}`}_getValidityAnchor(){return this.elInput}};Yn=new WeakSet;vc=function(){return m`
      <gds-form-control-header class="size-${this.size}">
        <label for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text"
          >${this.supportingText}</span
        >
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>

      <gds-flex
        level="3"
        position="relative"
        align-items="center"
        justify-content="center"
        gap="${this.size==="small"?"2xs":"xs"}"
        padding="${this.size==="small"?"xs s":this.trailSlotOccupied?"xs m":"xs xs xs m"}"
        min-block-size="${this.size==="small"?"xl":"3xl"}"
        block-size="${this.size==="small"?"xl":"3xl"}"
        border-radius="xs"
        .background=${this.disabled?"disabled":this.invalid?"negative-secondary":"secondary"}
        .border=${this.disabled?"":this.invalid?"4xs/negative":"4xs/secondary"}
        class="field ${this.invalid?"invalid":""}"
        @click=${c(this,Aa)}
        cursor="text"
        color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
      >
        ${C(this,La,bc).call(this)} ${C(this,Va,wc).call(this)}
        <gds-flex gap="xs" align-items="center">
          ${C(this,Pa,_c).call(this)} ${C(this,Da,xc).call(this)}
        </gds-flex>
      </gds-flex>

      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${c(this,Ha,Cc)&&this.maxlength-this.value.length}
        .validationMessage=${this.invalid&&this.validationMessage}
      ></gds-form-control-footer>
    `};qn=new WeakSet;mc=function(){return B};Ma=new WeakMap;Ea=new WeakMap;Ta=new WeakMap;Aa=new WeakMap;Oa=new WeakMap;La=new WeakSet;bc=function(){return m` <slot name="lead"></slot> `};Da=new WeakSet;xc=function(){return m`
      <slot name="trail" @slotchange=${C(this,za,yc)}></slot>
    `};za=new WeakSet;yc=function(e){const s=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(r=>{var o;return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&((o=r.textContent)==null?void 0:o.trim())!==""})};Va=new WeakSet;wc=function(){return m`
      <input
        @input=${c(this,Ea)}
        @change=${c(this,Ta)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        aria-invalid=${this.invalid}
        placeholder=" "
        ${uc(c(this,Ma))}
      />
    `};Pa=new WeakSet;_c=function(){return this.clearable&&this.value.length>0?m`
        <gds-button
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${O("Clear input")}"
          @click=${c(this,Oa)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:B};Ha=new WeakSet;Cc=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};ve.styles=[X,dp];a([g()],ve.prototype,"value",2);a([g()],ve.prototype,"label",2);a([g({attribute:"supporting-text"})],ve.prototype,"supportingText",2);a([g({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],ve.prototype,"showExtendedSupportingText",2);a([g({attribute:"disabled",type:Boolean,reflect:!0})],ve.prototype,"disabled",2);a([g({type:Boolean})],ve.prototype,"clearable",2);a([g({type:Number})],ve.prototype,"maxlength",2);a([g({type:String})],ve.prototype,"variant",2);a([g({type:String})],ve.prototype,"size",2);a([rt("input")],ve.prototype,"elInputAsync",2);a([oe("input")],ve.prototype,"elInput",2);a([W()],ve.prototype,"trailSlotOccupied",2);ve=a([k("gds-input"),Nt()],ve);var cp=R`
  @layer base, reset, transitional-styles;
  @layer base {
    #label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: var(--gds-text-line-height-detail-m);

      & > div {
        display: flex;
        flex-direction: column;
      }
    }

    ::slotted(label) {
      font-weight: var(--gds-text-weight-book);
    }

    :host(.size-small) {
      & slot[name='supporting-text'],
      & ::slotted(label) {
        font-size: var(--gds-text-size-detail-s);
        line-height: var(--gds-text-line-height-detail-s);
      }
    }

    #extended-supporting-text {
      opacity: 1;
      transition: var(--_transition);
      font-size: var(--gds-text-size-body-s);
      line-height: var(--gds-text-line-height-body-s);
      border-radius: var(--gds-space-xs);
      background-color: var(--gds-color-l3-background-secondary);
      color: var(--gds-color-l3-content-tertiary);
      max-height: var(--_max-height);

      &[aria-hidden='false'] {
        margin: var(--gds-space-2xs) 0 0 0;
        padding: var(--gds-space-s) var(--gds-space-m);
      }

      &[aria-hidden='true'] {
        max-height: 0;
        opacity: 0;
        translate: 0 2px;
        padding: 0 var(--gds-space-m);
        margin: 0;
        overflow: hidden;
      }
    }
  }
`,Wa,kc,Kn,Xn,Jn,$c,ns=class extends U{constructor(){super(...arguments),f(this,Wa),f(this,Jn),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,f(this,Kn,()=>m`
      <gds-button
        size="small"
        rank="tertiary"
        label="${O("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${c(this,Xn)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),f(this,Xn,()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,(e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))})}render(){return m`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${ae(this._hasExtendedSupportingText,c(this,Kn))}
      </div>

      ${C(this,Jn,$c).call(this)}
    `}};Wa=new WeakSet;kc=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};Kn=new WeakMap;Xn=new WeakMap;Jn=new WeakSet;$c=function(){return m`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${C(this,Wa,kc)}
        ></slot>
      </div>
    `};ns.styles=[cp];a([g({type:Boolean,reflect:!0})],ns.prototype,"showExtendedSupportingText",2);a([W()],ns.prototype,"_hasExtendedSupportingText",2);a([oe("#extended-supporting-text")],ns.prototype,"_extendedSupportingText",2);ns=a([k("gds-form-control-header"),Nt()],ns);var hp=R`
  @layer base, reset, transitional-styles;
  @layer base {
    :host > *:not(style) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--gds-space-xl);
    }

    .error-message {
      display: flex;
      align-items: flex-start;
      gap: var(--gds-space-xs);
      margin-top: var(--gds-space-2xs);
      font-weight: var(--gds-text-weight-book);
      font-size: var(--gds-text-size-detail-s);
      color: var(--gds-color-l3-content-negative);
    }

    [gds-element^='gds-icon'] {
      width: 18px;
      height: 18px;
    }

    :host(.size-small) {
      & .error-message {
        font-size: var(--gds-text-size-detail-xs);
        line-height: var(--gds-text-line-height-detail-s);
        gap: var(--gds-space-2xs);
      }
      & [gds-element^='gds-icon'] {
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-right: 2px;
      }
    }
  }
`,Qn,Sc,tr=class extends U{constructor(){super(...arguments),f(this,Qn)}render(){return m`<div aria-live="polite">
      <div class="error-message">
        ${ae(this.validationMessage,()=>m`
            <gds-icon-triangle-exclamation
              solid
            ></gds-icon-triangle-exclamation>
            ${this.validationMessage}
          `)}
      </div>
      <div class="char-counter">
        ${ae(Number.isInteger(this.charCounter),()=>C(this,Qn,Sc).call(this,this.charCounter))}
      </div>
    </div>`}};Qn=new WeakSet;Sc=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",m`<gds-badge variant="${t}">${e}</gds-badge>`};tr.styles=[hp];a([g({type:Number})],tr.prototype,"charCounter",2);a([g()],tr.prototype,"validationMessage",2);tr=a([k("gds-form-control-footer")],tr);var sr=class extends L{};sr._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.375 8C11.375 8.34518 11.6548 8.625 12 8.625C12.3452 8.625 12.625 8.34518 12.625 8C12.625 7.65482 12.3452 7.375 12 7.375C11.6548 7.375 11.375 7.65482 11.375 8Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>';sr._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>';sr._name="circle-info";sr=a([k("gds-icon-circle-info")],sr);var rr=class extends L{};rr._regularSVG='<path d="M12 2.75L12.6457 2.36845C12.5108 2.1401 12.2652 2 12 2C11.7348 2 11.4892 2.1401 11.3543 2.36845L12 2.75ZM2.25 19.25L1.60431 18.8685C1.4673 19.1003 1.46512 19.3878 1.59859 19.6217C1.73207 19.8556 1.9807 20 2.25 20V19.25ZM21.75 19.25V20C22.0193 20 22.2679 19.8556 22.4014 19.6217C22.5349 19.3878 22.5327 19.1003 22.3957 18.8685L21.75 19.25ZM12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75H12.75ZM11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25H11.25ZM11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75H11.25ZM12.75 15.74C12.75 15.3258 12.4142 14.99 12 14.99C11.5858 14.99 11.25 15.3258 11.25 15.74H12.75ZM11.3543 2.36845L1.60431 18.8685L2.89569 19.6315L12.6457 3.13155L11.3543 2.36845ZM2.25 20H21.75V18.5H2.25V20ZM22.3957 18.8685L12.6457 2.36845L11.3543 3.13155L21.1043 19.6315L22.3957 18.8685ZM11.25 9.75V13.25H12.75V9.75H11.25ZM11.5 15.75C11.5 15.4739 11.7239 15.25 12 15.25V16.75C12.5523 16.75 13 16.3023 13 15.75H11.5ZM12 15.25C12.2761 15.25 12.5 15.4739 12.5 15.75H11C11 16.3023 11.4477 16.75 12 16.75V15.25ZM12.5 15.75C12.5 16.0261 12.2761 16.25 12 16.25V14.75C11.4477 14.75 11 15.1977 11 15.75H12.5ZM12 16.25C11.7239 16.25 11.5 16.0261 11.5 15.75H13C13 15.1977 12.5523 14.75 12 14.75V16.25ZM12.75 15.75V15.74H11.25V15.75H12.75Z" fill="currentColor"/>';rr._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2652 2 12.5108 2.1401 12.6457 2.36845L22.3957 18.8685C22.5327 19.1003 22.5349 19.3878 22.4014 19.6217C22.2679 19.8556 22.0193 20 21.75 20H2.25C1.9807 20 1.73207 19.8556 1.59859 19.6217C1.46512 19.3878 1.4673 19.1003 1.60431 18.8685L11.3543 2.36845C11.4892 2.1401 11.7348 2 12 2ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V9.75C11.25 9.33579 11.5858 9 12 9ZM13 15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75C11 15.1977 11.4477 14.75 12 14.75C12.5523 14.75 13 15.1977 13 15.75Z" fill="currentColor"/>';rr._name="triangle-exclamation";rr=a([k("gds-icon-triangle-exclamation")],rr);var gp=R`
  :host {
    box-sizing: border-box;
  }
`,pp=gp,me=class extends A{constructor(){super(),this.display="flex"}render(){return m`<slot></slot>`}};me.styles=[X,pp];a([y({styleTemplate:(e,t)=>{const s=t[0],r=t[1]||s;return`gap: ${s} ${r};`},cacheOverrideKey:"flex"})],me.prototype,"gap",2);a([y({valueTemplate:e=>e})],me.prototype,"flex",2);a([y({valueTemplate:e=>e})],me.prototype,"align-self",2);a([y({valueTemplate:e=>e})],me.prototype,"align-items",2);a([y({valueTemplate:e=>e})],me.prototype,"align-content",2);a([y({valueTemplate:e=>e})],me.prototype,"justify-content",2);a([y({valueTemplate:e=>e})],me.prototype,"place-content",2);a([y({valueTemplate:e=>e})],me.prototype,"justify-items",2);a([y({valueTemplate:e=>e})],me.prototype,"justify-self",2);a([y({property:"flex-direction",valueTemplate:e=>e})],me.prototype,"flex-direction",2);a([y({property:"flex-wrap",valueTemplate:e=>e})],me.prototype,"flex-wrap",2);me=a([k("gds-flex")],me);var or=class extends A{constructor(){super(),this.variant="primary",this.padding="s; m{l}",this["border-radius"]="xs; m{s}",this["border-width"]="4xs"}render(){return m`<slot></slot>`}};or.styles=[X,R`
      :host {
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
      }
    `];a([y({property:"box-shadow",valueTemplate:e=>`var(--gds-shadow-${e})`})],or.prototype,"shadow",2);a([y({valueTemplate:e=>e,styleTemplate:function(e,t){return`
      --_border-color: var(--gds-color-l${this.level}-background-${t});
      --_background-color: var(--gds-color-l${this.level}-background-${t});
      --_color: var(--gds-color-l${this.level}-content-${t});
      `}})],or.prototype,"variant",2);or=a([k("gds-card")],or);var up=R`
  :host {
    display: inline-block;
  }

  slot[name='lead']::slotted(*) {
    line-height: var(--gds-space-m);
  }

  :host([notification]) slot[name='trail']::slotted(*) {
    line-height: var(--gds-space-s);
  }

  :host([notification]) slot[name='lead']::slotted(*) {
    line-height: var(--gds-space-s);
  }
`,fp=up,ei,Mc,ti,Ec,ja,Tc,si,Ac,ft=class extends U{constructor(){super(),f(this,ei),f(this,ti),f(this,ja),f(this,si),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.mainSlotOccupied=!1}render(){const e=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",t=this.disabled?"disabled":this.notification?"primary":this.variant,s=this.size==="small"||this.notification?"2xs":"xs",r=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs";return m`<gds-flex
      level="3"
      background=${e}
      color=${t}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${s}"
      border-radius="${this.notification?"max":"2xs"}"
      block-size="${r}"
      width="max-content"
      font-size="${this.size==="small"||this.notification?"detail-xs":"detail-s"}"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${C(this,ei,Mc).call(this)} ${C(this,ti,Ec).call(this)}
      ${C(this,si,Ac).call(this)}
    </gds-flex>`}};ei=new WeakSet;Mc=function(){if(this.size!=="small"||!this.notification)return m`<slot name="lead"></slot>`};ti=new WeakSet;Ec=function(){return m`<slot @slotchange=${C(this,ja,Tc)}></slot>`};ja=new WeakSet;Tc=function(e){const s=e.target.assignedNodes({flatten:!0});this.mainSlotOccupied=s.length>0&&s.some(r=>{var o;return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&((o=r.textContent)==null?void 0:o.trim())!==""})};si=new WeakSet;Ac=function(){return m`<slot name="trail"></slot>`};ft.styles=[X,fp];a([g()],ft.prototype,"variant",2);a([g({type:String})],ft.prototype,"size",2);a([g({attribute:"disabled",type:Boolean,reflect:!0})],ft.prototype,"disabled",2);a([g({attribute:"notification",type:Boolean,reflect:!0})],ft.prototype,"notification",2);a([W()],ft.prototype,"mainSlotOccupied",2);ft=a([k("gds-badge")],ft);var vp=`:host {
  --gds-ripple-motion-name: ripple;
  --gds-ripple-motion: var(--gds-ripple-motion-name) 1.2s
    cubic-bezier(0.46, 0.03, 0.52, 0.96) 0s 1 normal none running;
  border-radius: var(--gds-space-max);
  contain: strict;
  display: flex;
  height: 100%;
  inset: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

div {
  background-color: currentColor;
  border-radius: var(--gds-space-max);
  display: flex;
  height: 20px;
  left: var(--gds-ripple-left, 50%);
  margin-left: -10px;
  margin-top: -10px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: var(--gds-ripple-top, 50%);
  width: 20px;
  will-change: transform;
}

div.gds-ripple-effect {
  animation: var(--gds-ripple-motion);
}

@keyframes ripple {
  from {
    opacity: 0.5;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(calc(3 * var(--mt-ripple-spread, 4)));
  }
}
@media (prefers-reduced-motion: reduce) {
  :host {
    --gds-ripple-motion-name: none !important;
  }
}`,Wo=class extends D{constructor(){super(...arguments),this.onmousedown=e=>{const s=e.target.getBoundingClientRect(),r=this._rippleEl;r&&(r.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-s.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-s.left}px`),setTimeout(()=>{r.classList.add("gds-ripple-effect")},20))}}render(){return ue`<div></div>`}};Wo.styles=[X,J(vp)];a([oe("div")],Wo.prototype,"_rippleEl",2);Wo=a([k("gds-ripple")],Wo);var jt=class extends U{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2016"}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",J(`:host {${Mn}}`))}render(){return m`<slot></slot>`}_onColorSchemeChange(){this.colorScheme==="dark"?this._dynamicStylesController.inject("dark",J(`:host { ${Mn}}`)):this._dynamicStylesController.inject("light",J(`:host { ${Pd}}`)),this.dispatchEvent(new CustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}}))}_onDesignVersionChange(){this.dispatchEvent(new CustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}}))}};jt.styles=R`
    :host {
      display: contents;
    }
  `;a([g({reflect:!0,attribute:"color-scheme"})],jt.prototype,"colorScheme",2);a([g({reflect:!0,attribute:"design-version"})],jt.prototype,"designVersion",2);a([ne("colorScheme")],jt.prototype,"_onColorSchemeChange",1);a([ne("designVersion")],jt.prototype,"_onDesignVersionChange",1);jt=a([k("gds-theme")],jt);var mp=R`
  :host {
    --_c: 12;
    --_grid-col: repeat(var(--_c), 1fr);
    grid-template-columns: var(--_grid-col);
    grid-column-gap: var(--_gap-column, 0px);
    grid-row-gap: var(--_gap-row, 0px);
  }

  :host([auto-columns]) {
    --_col-count: var(--_c, 0);
    --_gap-count: calc(var(--_col-count) - 1);
    --_total-gap-width: calc(var(--_gap-count) * var(--_gap-column, 0px));
    --_col-width-max: calc(
      (100% - var(--_total-gap-width)) / var(--_col-count)
    );
    grid-template-columns: repeat(
      auto-fill,
      minmax(max(var(--_col-width), var(--_col-width-max)), 1fr)
    );
  }
`,bp=mp,is=class extends A{constructor(){super(),this.display="grid",this.width="100%"}render(){return m`<slot></slot>`}};is.styles=[X,bp];a([y({property:"--_c",valueTemplate:e=>e})],is.prototype,"columns",2);a([y({styleTemplate:(e,t)=>{const s=t[0];return`--_gap-column: ${t[1]||s}; --_gap-row: ${s};`}})],is.prototype,"gap",2);a([y({property:"--_col-width",valueTemplate:e=>`${e}px`})],is.prototype,"auto-columns",2);is=a([k("gds-grid")],is);var xp=R`
  @layer core, link;

  @layer core {
    :host {
      display: inline-block;
    }
  }

  @layer link {
    a {
      display: flex;
      align-items: center;
      gap: 1ch;
      text-decoration: underline;
      text-underline-offset: 0.2lh;
      color: currentColor;
      outline-offset: 4px;
      outline-color: currentColor;
      font-weight: var(--gds-text-weight-book);

      &:hover {
        text-decoration: none;
      }

      &.secondary {
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      &.hidden {
        text-decoration: none;
      }
    }
  }
`,yp=xp,ri,Oc,et=class extends U{constructor(){super(),f(this,ri),this.href="",this.variant="default"}render(){const e={secondary:this.variant==="secondary",hidden:this.variant==="hidden"};return Pr`
      <a
        href=${pe(this.href)}
        target=${pe(this.target)}
        rel=${pe(this.rel||c(this,ri,Oc))}
        download=${pe(this.download)}
        class=${We(e)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};ri=new WeakSet;Oc=function(){return this.target==="_blank"?"noreferrer noopener":void 0};et.styles=[X,J(yp)];et.shadowRootOptions={mode:"open",delegatesFocus:!0};a([g()],et.prototype,"href",2);a([g()],et.prototype,"target",2);a([g()],et.prototype,"rel",2);a([g()],et.prototype,"download",2);a([g()],et.prototype,"variant",2);et=a([k("gds-link")],et);var wp=R`
  :host {
    display: block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  img {
    display: flex;
    width: 100%;
    height: 100%;
  }
`,_p=wp,Ce=class extends U{render(){return m`<img src="${this.src}" alt="${this.alt}" />`}};Ce.styles=[X,_p];a([y({property:"aspect-ratio",valueTemplate:e=>e})],Ce.prototype,"aspect-ratio",2);a([y({property:"object-position",selector:"img",valueTemplate:e=>e})],Ce.prototype,"position",2);a([y({property:"inset",valueTemplate:e=>e})],Ce.prototype,"inset",2);a([y({property:"width",valueTemplate:e=>e})],Ce.prototype,"width",2);a([y({property:"height",valueTemplate:e=>e})],Ce.prototype,"height",2);a([y({property:"opacity",valueTemplate:e=>e})],Ce.prototype,"opacity",2);a([y({property:"object-fit",selector:"img",valueTemplate:e=>e})],Ce.prototype,"object-fit",2);a([g()],Ce.prototype,"src",2);a([g()],Ce.prototype,"alt",2);a([y({property:"border-radius",valueTemplate:e=>`var(--gds-space-${e})`})],Ce.prototype,"border-radius",2);Ce=a([k("gds-img")],Ce);var Cp=R`
  :host {
    display: block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  video {
    display: flex;
    width: 100%;
    height: 100%;
  }
`,kp=Cp,re=class extends U{applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return m`<video></video>`}firstUpdated(){this.applyVideoSettings()}};re.styles=[X,kp];a([y({property:"aspect-ratio",valueTemplate:e=>e})],re.prototype,"aspect-ratio",2);a([y({property:"object-position",selector:"video",valueTemplate:e=>e})],re.prototype,"object-position",2);a([y({property:"inset",valueTemplate:e=>e})],re.prototype,"inset",2);a([y({property:"width",valueTemplate:e=>e})],re.prototype,"width",2);a([y({property:"height",valueTemplate:e=>e})],re.prototype,"height",2);a([y({property:"opacity",valueTemplate:e=>e})],re.prototype,"opacity",2);a([y({property:"object-fit",selector:"video",valueTemplate:e=>e})],re.prototype,"object-fit",2);a([y({property:"pointer-events",selector:"video",valueTemplate:e=>e})],re.prototype,"pointer-events",2);a([y({property:"border-radius",valueTemplate:e=>`var(--gds-space-${e})`})],re.prototype,"border-radius",2);a([g()],re.prototype,"src",2);a([g()],re.prototype,"poster",2);a([g({type:Boolean})],re.prototype,"muted",2);a([g({type:Boolean})],re.prototype,"playsinline",2);a([g({type:Boolean})],re.prototype,"autoplay",2);a([g({type:Boolean})],re.prototype,"loop",2);a([oe("video")],re.prototype,"videoElement",2);re=a([k("gds-video")],re);var $p=R`
  @layer tokens, core, a11y, disabled, variants, sizes, sets;

  @layer tokens {
    :host {
      --_gap: var(--gds-space-xs);

      --_padding-inline: var(--gds-space-m);
      --_padding-block: var(--gds-space-xs);

      --_color-bg: transparent;
      --_color-text: var(--gds-color-l3-content-tertiary);
      --_color-border: transparent;

      --_font-size: 1rem;
      --_font-weight: 400;
      --_line-height: 1.25;

      display: inline-block;
      isolation: isolate;
      max-width: 100%;
      height: 100%;
    }
  }

  @layer core {
    .button {
      align-items: center;

      background-color: var(--_color-bg);

      border-color: var(--_color-border);
      border-style: none;
      border-bottom-style: solid;
      border-bottom-width: 2px;

      box-sizing: border-box;
      color: var(--_color-text);
      color-scheme: dark light;
      cursor: pointer;

      display: inline-flex;
      gap: var(--_gap);
      height: 100%;

      inline-size: 100%;
      justify-content: space-between;
      justify-items: center;
      outline-color: transparent;
      outline-offset: -2px;
      outline-style: solid;
      outline-width: 2px;
      padding-block: var(--_padding-block);
      padding-inline: var(--_padding-inline);
      position: relative;
      font-family: inherit;
      font-size: var(--_font-size);
      font-weight: var(--_font-weight);
      line-height: var(--_line-height);
      transition-property: color, border-color;
      transition: all 0.4s;

      &:focus-visible {
        outline-color: currentColor;
        border-radius: 6px;
        overflow: visible;
        border-color: transparent;
      }

      &:hover,
      &.selected:hover,
      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-light-hover)
        );
        --_color-border: var(--gds-color-l3-border-secondary);
      }

      &.selected {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-light-hover)
        );
        --_color-border: var(--gds-color-l3-border-primary);
      }

      slot:not([name]) {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .compact {
      display: flex;
      flex-direction: column;
      --_padding-inline: var(--gds-space-s);
      --_gap: 1px;
      font-size: 0.875rem;
      height: 56px;
      justify-content: center;

      & > slot[name] {
        order: 0;
      }
      & > slot:not([name]) {
        order: 1;
      }
    }

    a {
      text-decoration: none;
    }
  }

  :disabled {
    border-color: var(--_color-bg);
    color: var(--gds-color-l3-content-disabled);
    pointer-events: none;
  }

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .button {
        transition: none;
      }
    }
  }
`,Sp=$p,St,Yt,oi,Lc,Se=class extends U{constructor(){super(),f(this,St),f(this,oi),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const e={button:!0,selected:this.selected,compact:this.compact},t=c(this,St,Yt)?Mo`a`:Mo`button`;return Pr`
      <${t}
        class="${We(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${pe(c(this,St,Yt)?this.href:void 0)}
        target=${pe(c(this,St,Yt)?this.target:void 0)}
        rel=${pe(c(this,St,Yt)?this.rel||c(this,oi,Lc):void 0)}
        download=${pe(c(this,St,Yt)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${t}>
    `}};St=new WeakSet;Yt=function(){return this.href.length>0};oi=new WeakSet;Lc=function(){return this.target==="_blank"?"noreferrer noopener":void 0};Se.styles=[X,J(Sp)];Se.shadowRootOptions={mode:"open",delegatesFocus:!0};a([g({type:Boolean,reflect:!0})],Se.prototype,"disabled",2);a([g()],Se.prototype,"label",2);a([g()],Se.prototype,"href",2);a([g()],Se.prototype,"target",2);a([g()],Se.prototype,"rel",2);a([g()],Se.prototype,"download",2);a([g({type:Boolean,reflect:!0})],Se.prototype,"compact",2);a([g({type:Boolean,reflect:!0})],Se.prototype,"selected",2);Se=a([k("gds-menu-button")],Se);function Dc(){return(e,t,s)=>{const r=e.connectedCallback,o=e.disconnectedCallback;e.connectedCallback=function(){r==null||r.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver(()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout(()=>{var n;(n=s.value)==null||n.call(this)},20)}),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){o==null||o.call(this),this.__resizeObservers[t].disconnect()}}}var Mp=`@layer base {
  :host {
    background-color: var(--gds-sys-color-container-container-dim1);
    border: 0.25rem solid var(--gds-sys-color-container-container-dim1);
    border-radius: calc(infinity * 1px);
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
    background-color: var(--gds-sys-color-container-container-dim1);
    border-radius: calc(infinity * 1px);
    border-width: 0;
    color: var(--gds-sys-color-content-content);
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
          var(--gds-sys-color-state-layers-state-black-dim1),
          var(--gds-sys-color-container-container-dim1)
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
    background-color: var(--gds-sys-color-container-container-bright);
    border-radius: calc(infinity * 1px);
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
`,Ep=(e,t)=>{let s;return()=>{clearTimeout(s),s=setTimeout(e,t)}},ht,ni,zc,ii,ai,li,oo,no,di,ci,De=class extends U{constructor(){super(...arguments),f(this,ni),this.size="medium",f(this,ht,void 0),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,f(this,ii,()=>{const e=this.segments.filter((t,s,r)=>{var o;return((o=r[s+1])==null?void 0:o.isVisible)&&!t.isVisible})[0];this._elTrack.scrollLeft=e.offsetLeft}),f(this,ai,()=>{const e=this.segments.filter((t,s,r)=>{var o;return((o=r[s-1])==null?void 0:o.isVisible)&&!t.isVisible}).reverse()[0];this._elTrack.scrollLeft=e.offsetLeft}),f(this,li,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),f(this,oo,Ep(c(this,li),50)),f(this,no,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,s=e.offsetLeft;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),f(this,di,e=>{const t=this.segments.find(s=>s===e.target||s.contains(e.target));t&&(this.segments.forEach(s=>s.selected=!1),t.selected=!0,Z(this,ht,t.value),c(this,no).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0})))}),f(this,ci,()=>{c(this,ht)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===c(this,ht));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return c(this,ht)}set value(e){Z(this,ht,e),c(this,ci).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{c(this,oo).call(this)})})}render(){return m`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${c(this,ii)}
        aria-label=${O("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${c(this,di)}
          @slotchange=${C(this,ni,zc)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${c(this,ai)}
        aria-label=${O("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{c(this,oo).call(this),c(this,no).call(this)})}};ht=new WeakMap;ni=new WeakSet;zc=function(){var e,t;const s=(e=this.segments.find(r=>r.selected))==null?void 0:e.value;s&&Z(this,ht,s),(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=new IntersectionObserver(r=>{r.forEach(o=>{const n=o.target;n._isVisible=o.intersectionRatio>.99})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(r=>{var o;(o=this.intersectionObserver)==null||o.observe(r)})};ii=new WeakMap;ai=new WeakMap;li=new WeakMap;oo=new WeakMap;no=new WeakMap;di=new WeakMap;ci=new WeakMap;De.styles=[X,J(Mp)];a([g({reflect:!0})],De.prototype,"size",2);a([g()],De.prototype,"value",1);a([oe("slot")],De.prototype,"_elSlot",2);a([oe("#indicator")],De.prototype,"_elIndicator",2);a([oe("#track")],De.prototype,"_elTrack",2);a([W()],De.prototype,"_showPrevButton",2);a([W()],De.prototype,"_showNextButton",2);a([Dc(),ne("segMinWidth")],De.prototype,"_recalculateMinWidth",1);De=a([k("gds-segmented-control"),Nt()],De);var Tp=`@layer base {
  :host {
    display: flex;
    z-index: 1;
  }

  button {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    background: transparent;
    border-radius: calc(infinity * 1px);
    border-width: 0;
    color: var(--gds-sys-color-content-content);
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
    transition: 0.1s;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  @media (pointer: fine) {
    :host(:not([selected])) button:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-state-layers-state-black-dim1),
        transparent
      );

      &:disabled {
        background-color: transparent;
      }
    }
  }

  button:focus-visible {
    outline: 2px solid #000;
    outline-offset: -2px;
  }
}
`,tt=class extends U{constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return m`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};tt.styles=[...X,J(Tp)];a([g({type:Boolean,reflect:!0})],tt.prototype,"selected",2);a([g()],tt.prototype,"value",2);a([g({type:Boolean,reflect:!0})],tt.prototype,"disabled",2);a([y({valueTemplate:e=>e})],tt.prototype,"min-width",2);a([y({valueTemplate:e=>e})],tt.prototype,"max-width",2);a([y()],tt.prototype,"width",2);tt=a([k("gds-segment")],tt);var nr=class extends L{};nr._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';nr._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>';nr._name="chevron-left";nr=a([k("gds-icon-chevron-left")],nr);var ir=class extends L{};ir._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';ir._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>';ir._name="chevron-right";ir=a([k("gds-icon-chevron-right")],ir);var Ap="en",Op=["sv"],Vc={};ph(Vc,{templates:()=>Lp});var Lp={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Öppna kalender",s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"Mån",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s39938ecdae568740:"September",s407a88a592a0987c:"Augusti",s46d6587089bd0356:"Nästa månad",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:Eo`${0} valda`,s5d929ff1619ac0c9:"Sök",s5e8250fb85d64c23:"Stäng",s5febcd9b311c16fe:"Scrolla höger",s62931b2a50168976:"Föregående månad",s63d040e37887f17e:"Idag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tis",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"Öppna meny",s83c436ed1bc16dfb:"Visa mer information",s8ade4e9d5e804d6a:"Första tillgängliga datum",s9836b719fa8ef857:"Lör",s987ac119fac8d621:"Sön",s9af3c72c33088826:Eo`Det finns ${0} fel att åtgärda innan du kan fortsätta:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Månad",sb4f1dffbb6be6302:"Rensa",sb77f4dce69a005ac:"Felmeddelande.",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Sök i listan av val",sdc42f1da42d6411a:"Rensa text",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sista tillgängliga datum",sf295af199c723ec8:"Fre"},Fl=new Map([["sv",Vc]]),Dp=({extraLocales:e,extraTemplates:t}={extraLocales:[],extraTemplates:new Map})=>{const s=[...Op];for(const[r,o]of t)Fl.set(r,o);for(const r of e)s.push(r);return tg({sourceLocale:Ap,targetLocales:s,loadLocale:async r=>{const o=Fl.get(r);return o||Promise.reject(new Error(`Locale ${r} not found`))}})},zp=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,Pp=(e,t,s,r)=>{for(var o=r>1?void 0:r?Vp(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&zp(t,s,o),o};const{setLocale:Nl}=Dp();let Il=class extends D{connectedCallback(){super.connectedCallback()}handleButtonClick(e){this.dispatchEvent(new CustomEvent("view-change",{detail:{view:e},bubbles:!0,composed:!0}))}render(){return m`
      <style>
        :host {
          position: sticky;
          top: 0;
          z-index: 4;
          background-color: color-mix(
            in srgb,
            var(--gds-color-l2-background-secondary),
            transparent 20%
          );
          display: block;
          backdrop-filter: blur(10px);
        }
      </style>
      <gds-flex
        align-items="stretch"
        width="100%"
        justify-content="space-between"
        position="relative"
        height="4rem"
        level="1"
      >
        <gds-flex align-items="center" padding="xl">
          <gds-context-menu>
            <gds-flex align-items="center" gap="s" slot="trigger">
              <gds-icon-bars-three></gds-icon-bars-three>
            </gds-flex>
            <gds-menu-item @click=${()=>this.handleButtonClick("theme-page")}>
              Theme Page
            </gds-menu-item>
            <gds-menu-item @click=${()=>this.handleButtonClick("login")}>
              Login
            </gds-menu-item>
            <gds-menu-item
              @click=${()=>this.handleButtonClick("form-validation")}
            >
              Validation
            </gds-menu-item>
            <gds-menu-item @click=${()=>this.handleButtonClick("datepicker")}>
              Datepicker
            </gds-menu-item>
            <gds-menu-item @click=${()=>this.handleButtonClick("calendar")}>
              Calendar
            </gds-menu-item>
          </gds-context-menu>
        </gds-flex>
        <gds-flex justify-content="space-between" width="100%">
          <gds-flex display="none">
            <gds-menu-button
              @click=${()=>this.handleButtonClick("onboarding")}
            >
              <gds-icon-bars-two></gds-icon-bars-two>
            </gds-menu-button>
            <gds-menu-button
              @click=${()=>this.handleButtonClick("onboarding")}
            >
              Onboarding
            </gds-menu-button>
            <gds-menu-button
              @click=${()=>this.handleButtonClick("dashboard")}
            >
              Dashboard
            </gds-menu-button>
          </gds-flex>
          <gds-flex
            position="absolute"
            inset="0"
            margin="0 auto"
            align-items="center"
            max-width="max-content"
          >
            <gds-icon-brand-seb></gds-icon-brand-seb>
          </gds-flex>
          <gds-flex align-items="center" gap="l" margin="0 m 0 " display="none">
            <gds-icon-magnifying-glass></gds-icon-magnifying-glass>
            <gds-icon-bell></gds-icon-bell>
            <gds-img
              src="https://placehold.co/80x80/000000/FFFFFF/png?text=S"
              border-radius="max"
              width="24px"
              height="24px"
            ></gds-img>
            <gds-icon-calendar></gds-icon-calendar>
            <!-- <gds-context-menu>
              <gds-flex align-items="center" gap="s" slot="trigger">
                Language
                <gds-icon-globus></gds-icon-globus>
              </gds-flex>
              <gds-menu-item @click=${()=>Nl("en")}>EN</gds-menu-item>
              <gds-menu-item @click=${()=>Nl("sv")}>SV</gds-menu-item>
            </gds-context-menu> -->
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `}};Il=Pp([j("gds-header")],Il);var Ra={fromAttribute(e){return new Date(e)},toAttribute(e){return e.toISOString()}},Hp={fromAttribute(e){return e.split(",").map(t=>new Date(t.trim()))},toAttribute(e){return JSON.stringify(e.map(t=>t.toISOString()))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Wp(e,t){const s=typeof t=="function";if(e!==void 0){let r=-1;for(const o of e)r>-1&&(yield s?t(r):t),r++,yield o}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*jp(e,t){if(e!==void 0){let s=0;for(const r of e)yield t(r,s++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bl=(e,t,s)=>{const r=new Map;for(let o=t;o<=s;o++)r.set(e[o],o);return r},Rp=us(class extends Wr{constructor(e){if(super(e),e.type!==Hr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let r;s===void 0?s=t:t!==void 0&&(r=t);const o=[],n=[];let i=0;for(const l of e)o[i]=r?r(l,i):i,n[i]=s(l,i),i++;return{values:n,keys:o}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,r]){const o=hg(e),{values:n,keys:i}=this.dt(t,s,r);if(!Array.isArray(o))return this.ut=i,n;const l=this.ut??(this.ut=[]),d=[];let h,v,p=0,x=o.length-1,w=0,$=n.length-1;for(;p<=x&&w<=$;)if(o[p]===null)p++;else if(o[x]===null)x--;else if(l[p]===i[w])d[w]=Ct(o[p],n[w]),p++,w++;else if(l[x]===i[$])d[$]=Ct(o[x],n[$]),x--,$--;else if(l[p]===i[$])d[$]=Ct(o[p],n[$]),ys(e,d[$+1],o[p]),p++,$--;else if(l[x]===i[w])d[w]=Ct(o[x],n[w]),ys(e,o[p],o[x]),x--,w++;else if(h===void 0&&(h=Bl(i,w,$),v=Bl(l,p,x)),h.has(l[p]))if(h.has(l[x])){const M=v.get(i[w]),P=M!==void 0?o[M]:null;if(P===null){const z=ys(e,o[p]);Ct(z,n[w]),d[w]=z}else d[w]=Ct(P,n[w]),ys(e,o[p],P),o[M]=null;w++}else mn(o[x]),x--;else mn(o[p]),p++;for(;w<=$;){const M=ys(e,d[$+1]);Ct(M,n[w]),d[w++]=M}for(;p<=x;){const M=o[p++];M!==null&&mn(M)}return this.ut=i,cg(e,d),Ae}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Fp{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class Np{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gl=e=>!ag(e)&&typeof e.then=="function",Zl=1073741823;class Ip extends Yd{constructor(){super(...arguments),this._$Cwt=Zl,this._$Cbt=[],this._$CK=new Fp(this),this._$CX=new Np}render(...t){return t.find(s=>!Gl(s))??Ae}update(t,s){const r=this._$Cbt;let o=r.length;this._$Cbt=s;const n=this._$CK,i=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<s.length&&!(l>this._$Cwt);l++){const d=s[l];if(!Gl(d))return this._$Cwt=l,d;l<o&&d===r[l]||(this._$Cwt=Zl,o=0,Promise.resolve(d).then(async h=>{for(;i.get();)await i.get();const v=n.deref();if(v!==void 0){const p=v._$Cbt.indexOf(d);p>-1&&p<v._$Cwt&&(v._$Cwt=p,v.setValue(h))}}))}return Ae}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Bp=us(Ip);function hi(e){"@babel/helpers - typeof";return hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hi(e)}function bt(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function ce(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function le(e){ce(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||hi(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Ot(e,t){ce(2,arguments);var s=le(e),r=bt(t);return isNaN(r)?new Date(NaN):(r&&s.setDate(s.getDate()+r),s)}function Pc(e,t){ce(2,arguments);var s=le(e),r=bt(t);if(isNaN(r))return new Date(NaN);if(!r)return s;var o=s.getDate(),n=new Date(s.getTime());n.setMonth(s.getMonth()+r+1,0);var i=n.getDate();return o>=i?n:(s.setFullYear(n.getFullYear(),n.getMonth(),o),s)}var Gp={};function Fa(){return Gp}function as(e,t){var s,r,o,n,i,l,d,h;ce(1,arguments);var v=Fa(),p=bt((s=(r=(o=(n=t==null?void 0:t.weekStartsOn)!==null&&n!==void 0?n:t==null||(i=t.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&o!==void 0?o:v.weekStartsOn)!==null&&r!==void 0?r:(d=v.locale)===null||d===void 0||(h=d.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&s!==void 0?s:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var x=le(e),w=x.getDay(),$=(w<p?7:0)+w-p;return x.setDate(x.getDate()-$),x.setHours(0,0,0,0),x}function Ul(e){ce(1,arguments);var t=le(e);return t.setHours(0,0,0,0),t}function Zp(e,t){ce(2,arguments);var s=bt(t),r=s*7;return Ot(e,r)}function lt(e,t){ce(2,arguments);var s=Ul(e),r=Ul(t);return s.getTime()===r.getTime()}function Up(e){ce(1,arguments);var t=le(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(23,59,59,999),t}function Yp(e,t){var s;ce(1,arguments);var r=e||{},o=le(r.start),n=le(r.end),i=n.getTime();if(!(o.getTime()<=i))throw new RangeError("Invalid interval");var l=[],d=o;d.setHours(0,0,0,0);var h=Number((s=void 0)!==null&&s!==void 0?s:1);if(h<1||isNaN(h))throw new RangeError("`options.step` must be a number greater than 1");for(;d.getTime()<=i;)l.push(le(d)),d.setDate(d.getDate()+h),d.setHours(0,0,0,0);return l}function qp(e,t){ce(1,arguments);var s=e||{},r=le(s.start),o=le(s.end),n=o.getTime();if(!(r.getTime()<=n))throw new RangeError("Invalid interval");var i=as(r,t),l=as(o,t);i.setHours(15),l.setHours(15),n=l.getTime();for(var d=[],h=i;h.getTime()<=n;)h.setHours(0),d.push(le(h)),h=Zp(h,1),h.setHours(15);return d}function Kp(e){ce(1,arguments);var t=le(e);return t.setDate(1),t.setHours(0,0,0,0),t}function Xp(e,t){var s,r,o,n,i,l;ce(1,arguments);var d=le(e),h=d.getFullYear(),v=Fa(),p=bt((s=(r=(o=(n=void 0)!==null&&n!==void 0?n:void 0)!==null&&o!==void 0?o:v.firstWeekContainsDate)!==null&&r!==void 0?r:(i=v.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var x=new Date(0);x.setFullYear(h+1,0,p),x.setHours(0,0,0,0);var w=as(x,t),$=new Date(0);$.setFullYear(h,0,p),$.setHours(0,0,0,0);var M=as($,t);return d.getTime()>=w.getTime()?h+1:d.getTime()>=M.getTime()?h:h-1}function Jp(e,t){var s,r,o,n,i,l;ce(1,arguments);var d=Fa(),h=bt((s=(r=(o=(n=void 0)!==null&&n!==void 0?n:void 0)!==null&&o!==void 0?o:d.firstWeekContainsDate)!==null&&r!==void 0?r:(i=d.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&s!==void 0?s:1),v=Xp(e,t),p=new Date(0);p.setFullYear(v,0,h),p.setHours(0,0,0,0);var x=as(p,t);return x}var Qp=6048e5;function eu(e,t){ce(1,arguments);var s=le(e),r=as(s,t).getTime()-Jp(s,t).getTime();return Math.round(r/Qp)+1}function tu(e){ce(1,arguments);var t=le(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(0,0,0,0),t}function su(e,t){ce(2,arguments);var s=le(e),r=le(t);return s.getFullYear()===r.getFullYear()&&s.getMonth()===r.getMonth()}function ru(e,t){ce(2,arguments);var s=le(e),r=bt(t);return s.setHours(r),s}function ou(e,t){ce(2,arguments);var s=bt(t);return Pc(e,-s)}var nu=R`
  @layer base, reset;

  @layer base {
    :host {
      font-family: inherit;
      display: flex;
      flex-direction: column;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-inline: var(--gds-space-s);
      padding-block-start: var(--gds-space-m);
      gap: var(--gds-space-xs);
      box-sizing: border-box;
    }

    .header gds-dropdown.month {
      min-width: 140px;
      flex: 1;
    }

    .header gds-dropdown.year {
      width: 110px;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      padding-inline: var(--gds-space-s);
      padding-block-end: var(--gds-space-s);
    }

    label {
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-book);
      font-family: inherit;
    }

    .form-info {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
      font-weight: var(--gds-text-weight-regular);
    }

    .field {
      display: flex;
      justify-content: space-between;
      gap: var(--gds-space-2xs);
      padding: var(--gds-space-2xs);
      border-radius: var(--gds-space-xs);
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-regular);
      font-family: inherit;
      overflow: hidden;
      margin-block: var(--gds-space-xs);
      max-width: 100%;
      cursor: pointer;
      color: currentColor;
      height: var(--gds-space-3xl);
      box-sizing: border-box;
      border-width: var(--gds-space-4xs);
      border-style: solid;

      // TODO: Update colors with tokens
      border-color: #6f6f6f;
      color: #1b1b1b;
      background-color: #e2e2e2;

      &:hover {
        background-color: #cecece;
      }

      .input {
        display: flex;
        align-items: center;
        flex-direction: row;
        max-width: max-content;
        text-transform: uppercase;
        flex: 1;
        font-variant-numeric: tabular-nums;

        &:focus-within span {
          opacity: 0;
        }

        .spinner {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          outline-color: currentcolor;
          outline-offset: -4px;
          outline-width: var(--gds-space-3xs);
          box-sizing: border-box;
          border-radius: var(--gds-space-xs);
          padding-inline: 1ch;

          &:focus-visible {
            outline-style: solid;
          }
        }
      }

      button {
        appearance: none;
        background: transparent;
        border: 0;
        box-sizing: border-box;
        color: currentColor;
        cursor: pointer;
        aspect-ratio: 1;
        margin: 0;
        padding: 0;
        outline-color: inherit;
        outline-offset: -4px;
        border-radius: var(--gds-space-xs);
        padding-top: var(--gds-space-3xs);
        font-family: inherit;

        &:focus-visible,
        &:hover {
          outline: var(--gds-space-3xs) solid currentcolor;
        }
      }

      &.small {
        height: var(--gds-space-xl);
        font-size: var(--gds-text-size-detail-s);
        padding: 0;

        button {
          outline-offset: -4px;
          border-radius: var(--gds-space-xs);
          padding-top: 3px;
        }
      }
    }
  }
`,$s,gi,Hc,ar,jo,pi,Wc,ui,jc,fi,Rc,Mt,qt,vi,Fc,mi,bi,xi,yi,wi,_i,Ci,ki,$i,Si,Ro,Mi,Ei,io,Ti,Ai,Ke,Oi,Nc,Na,Ic,Y=class extends Me{constructor(){super(...arguments),f(this,gi),f(this,ar),f(this,pi),f(this,ui),f(this,fi),f(this,Mt),f(this,vi),f(this,io),f(this,Oi),f(this,Na),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=C(this,io,Ti).call(this,"y-m-d"),f(this,$s,void 0),f(this,mi,e=>{this._elTrigger.then(t=>{var s,r;((s=e.relatedTarget)==null?void 0:s.parentElement)!==e.target&&((r=document.getSelection())==null||r.removeAllRanges())})}),f(this,bi,e=>{this._elTrigger.then(t=>{var s,r;(s=document.getSelection())==null||s.removeAllRanges();const o=new Range;o.setStart(t.firstChild,0),o.setEnd(t.lastChild,4),(r=document.getSelection())==null||r.addRange(o)})}),f(this,xi,e=>{this._elField.then(t=>{var s;e.currentTarget===t&&(e.preventDefault(),(s=e.clipboardData)==null||s.setData("text/plain",this.displayValue))})}),f(this,yi,e=>{this._elField.then(t=>{var s;if(e.currentTarget!==t)return;e.preventDefault();const r=(s=e.clipboardData)==null?void 0:s.getData("text/plain");if(!r)return;let o=new Date("-");const n="Invalid Date",i=r.split(this._dateFormatLayout.delimiter);if(i.length===3){const l=this._dateFormatLayout.layout,d=parseInt(i[l.findIndex(p=>p.token==="y")]),h=parseInt(i[l.findIndex(p=>p.token==="m")])-1,v=parseInt(i[l.findIndex(p=>p.token==="d")]);!isNaN(d)&&!isNaN(h)&&!isNaN(v)&&(o=new Date(`${d}-${h+1}-${v}`))}o.toString()===n&&(o=new Date(r),o.toString()===n)||(this.value=o,C(this,Mt,qt).call(this))})}),f(this,wi,e=>{var t;(t=this._elSpinners[0])==null||t.focus()}),f(this,_i,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,C(this,Mt,qt).call(this)}),f(this,Ci,e=>{var t;e.stopPropagation(),this._focusedMonth=(t=e.target)==null?void 0:t.value}),f(this,ki,e=>{var t;e.stopPropagation(),this._focusedYear=(t=e.target)==null?void 0:t.value}),f(this,$i,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),f(this,Si,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),f(this,Ro,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),C(this,vi,Fc).call(this)}),f(this,Mi,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;!lt(t||new Date(0),c(this,$s)||new Date(0))&&(this.value=t,C(this,Mt,qt).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=c(this,$s))}}),f(this,Ei,e=>{const t=Array.from(this._elSpinners).findIndex(s=>s===e.target);if(e.key==="ArrowRight"){const s=this._elSpinners[t+1];s&&s.focus()}if(e.key==="ArrowLeft"){const s=this._elSpinners[t-1];s&&s.focus()}}),f(this,Ai,(e,t)=>{c(this,Ke)[t]=e;const s=new Date;s.setFullYear(parseInt(c(this,Ke).year)),s.setMonth(parseInt(c(this,Ke).month)-1),s.setDate(parseInt(c(this,Ke).day)),s.setHours(12,0,0,0),s.toString()!=="Invalid Date"&&(this.value=s,C(this,Mt,qt).call(this))}),f(this,Ke,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=C(this,io,Ti).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-datepicker")}render(){return m`${ae(this.label&&!this.hideLabel,()=>m`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info" id="sub-label"><slot name="sub-label"></slot></div>

      <div
        class=${We({field:!0,small:this.size==="small"})}
        id="field"
        @click=${c(this,wi)}
        @copy=${c(this,xi)}
        @paste=${c(this,yi)}
      >
        <div
          class=${We({input:!0,"is-placeholder":!this.value})}
          @focusout=${c(this,mi)}
        >
          ${Wp(jp(this._dateFormatLayout.layout,(e,t)=>m`<gds-date-part-spinner
                  id="spinner-${t}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${c(this,Ke)[e.name]}
                  aria-valuemin=${C(this,ui,jc).call(this,e.name)}
                  aria-valuemax=${C(this,fi,Rc).call(this,e.name)}
                  aria-label=${C(this,pi,Wc).call(this,e.name)}
                  aria-describedby="label sub-label message"
                  @keydown=${c(this,Ei)}
                  @change=${s=>c(this,Ai).call(this,s.detail.value,e.name)}
                  @focus=${c(this,bi)}
                  @touchend=${s=>{this.open=!0,s.preventDefault()}}
                ></gds-date-part-spinner>`),m`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${O("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          size=${this.size}
        >
          <gds-icon-calendar></gds-icon-calendar>
        </button>
      </div>

      <div class="form-info" aria-live="polite" id="message">
        <slot name="message">${this.validationMessage}</slot>
      </div>

      <gds-popover
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elField}
        .open=${this.open}
        @gds-ui-state=${c(this,Mi)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{var t;((t=e.target)==null?void 0:t.id)==="calendar-popover"&&this._elCalendar.then(r=>r.focus())}}
      >
        <div class="header">
          <gds-button
            @click=${c(this,Si)}
            aria-label=${O("Previous month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </gds-button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${c(this,Ci)}
            .maxHeight=${300}
            label="${O("Month")}"
            size="small"
            class="month"
            hide-label
          >
            <gds-option value="0">${O("January")}</gds-option>
            <gds-option value="1">${O("February")}</gds-option>
            <gds-option value="2">${O("March")}</gds-option>
            <gds-option value="3">${O("April")}</gds-option>
            <gds-option value="4">${O("May")}</gds-option>
            <gds-option value="5">${O("June")}</gds-option>
            <gds-option value="6">${O("July")}</gds-option>
            <gds-option value="7">${O("August")}</gds-option>
            <gds-option value="8">${O("September")}</gds-option>
            <gds-option value="9">${O("October")}</gds-option>
            <gds-option value="10">${O("November")}</gds-option>
            <gds-option value="11">${O("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${c(this,ki)}
            .maxHeight=${300}
            label="${O("Year")}"
            size="small"
            class="year"
            hide-label
          >
            ${Rp(c(this,Oi,Nc),e=>e,e=>m`<gds-option value=${e}>${e}</gds-option>`)}
          </gds-dropdown>
          <gds-button
            @click=${c(this,$i)}
            aria-label=${O("Next month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${c(this,_i)}
          @gds-date-focused=${c(this,Ro)}
          .focusedMonth=${this._focusedMonth}
          .focusedYear=${this._focusedYear}
          .value=${this.value}
          .min=${this.min}
          .max=${this.max}
          .showWeekNumbers=${this.showWeekNumbers}
          .disabledWeekends=${this.disabledWeekends}
          .disabledDates=${this.disabledDates}
        ></gds-calendar>

        <div class="footer">
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,C(this,Mt,qt).call(this)}}
          >
            ${O("Clear")}
          </gds-button>
          ${Bp(C(this,gi,Hc).call(this),B)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),C(this,ar,jo).call(this,new Date)}}
          >
            ${O("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(!this.value){Z(this,Ke,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getDate().toString().padStart(2,"0");Z(this,Ke,{year:t,month:s,day:r})}_handleOpenChange(){this.open&&(Z(this,$s,this.value),this._elCalendar.then(e=>e.focus()))}};$s=new WeakMap;gi=new WeakSet;Hc=async function(){const e=await this.getFocusedDate();let t="",s;return e&&e>this.max?(t=O("Last available date"),s=r=>{r.stopPropagation(),C(this,ar,jo).call(this,this.max)}):e&&e<this.min&&(t=O("First available date"),s=r=>{r.stopPropagation(),C(this,ar,jo).call(this,this.min)}),m`${ae(t.length>0,()=>m`<gds-button rank="tertiary" size="small" @click=${s}>
          ${t}
        </gds-button>`,()=>B)}`};ar=new WeakSet;jo=function(e){const t=new Date(e);this._elCalendar.then(s=>s.focusedDate=t).then(c(this,Ro))};pi=new WeakSet;Wc=function(e){return{year:O("Year"),month:O("Month"),day:O("Day")}[e]};ui=new WeakSet;jc=function(e){return{year:1900,month:1,day:1}[e]};fi=new WeakSet;Rc=function(e){return{year:9999,month:12,day:31}[e]};Mt=new WeakSet;qt=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))};vi=new WeakSet;Fc=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))};mi=new WeakMap;bi=new WeakMap;xi=new WeakMap;yi=new WeakMap;wi=new WeakMap;_i=new WeakMap;Ci=new WeakMap;ki=new WeakMap;$i=new WeakMap;Si=new WeakMap;Ro=new WeakMap;Mi=new WeakMap;Ei=new WeakMap;io=new WeakSet;Ti=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),r=s.findIndex(d=>d==="y"),o=s.findIndex(d=>d==="m"),n=s.findIndex(d=>d==="d");if(r===-1||o===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const l=[r,o,n].sort((d,h)=>d-h).map(d=>s[d]).map(d=>({token:d,name:d==="y"?"year":d==="m"?"month":"day"}));return{delimiter:t,layout:l}};Ai=new WeakMap;Ke=new WeakMap;Oi=new WeakSet;Nc=function(){var e;const t=this.min.getFullYear(),s=this.max.getFullYear(),r=c(this,Na,Ic),o=(e=this.value)==null?void 0:e.getFullYear();return{*[Symbol.iterator](){r&&(yield o);for(let n=t;n<=s;n++)yield n}}};Na=new WeakSet;Ic=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};Y.styles=[X,nu];Y.shadowRootOptions={mode:"open",delegatesFocus:!0};a([g({converter:Ra})],Y.prototype,"value",2);a([g({converter:Ra})],Y.prototype,"min",2);a([g({converter:Ra})],Y.prototype,"max",2);a([g({type:Boolean})],Y.prototype,"open",2);a([g()],Y.prototype,"label",2);a([g({type:Boolean,attribute:"show-week-numbers"})],Y.prototype,"showWeekNumbers",2);a([g()],Y.prototype,"size",2);a([g({type:Boolean,attribute:"hide-label"})],Y.prototype,"hideLabel",2);a([g()],Y.prototype,"dateformat",1);a([g({type:Boolean,attribute:"disabled-weekends"})],Y.prototype,"disabledWeekends",2);a([g({converter:Hp,attribute:"disabled-dates"})],Y.prototype,"disabledDates",2);a([rt("#calendar-button")],Y.prototype,"test_calendarButton",2);a([W()],Y.prototype,"_focusedMonth",2);a([W()],Y.prototype,"_focusedYear",2);a([W()],Y.prototype,"_dateFormatLayout",2);a([rt("#calendar")],Y.prototype,"_elCalendar",2);a([rt("#calendar-button")],Y.prototype,"_elTrigger",2);a([rt("#field")],Y.prototype,"_elField",2);a([ah("[role=spinbutton]")],Y.prototype,"_elSpinners",2);a([oe(".input")],Y.prototype,"_elInput",2);a([ne("value")],Y.prototype,"_handleValueChange",1);a([ne("open")],Y.prototype,"_handleOpenChange",1);Y=a([k("gds-datepicker"),Nt()],Y);var iu=R`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      color: var(--gds-sys-color-base800);
      font-family: inherit;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--gds-space-m);
      height: var(--gds-space-3xl);
      border: var(--gds-space-4xs) solid #6f6f6f;
      border-radius: var(--gds-space-xs);
      padding-inline: var(--gds-space-m);
      cursor: pointer;
      box-sizing: border-box;
      font-size: var(--gds-space-m);
      font-family: inherit;

      // TODO: Update colors to use tokens
      border-color: #6f6f6f;
      color: #1b1b1b;
      background-color: #e2e2e2;

      &.small {
        height: var(--gds-space-xl);
        padding: var(--gds-space-s);
        padding-right: var(--gds-space-xs);
        font-size: calc(var(--gds-space-s) + 2px);

        .icon {
          width: var(--gds-space-l);
          height: var(--gds-space-l);
        }
      }

      &:hover {
        background-color: #cecece;
      }

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        height: var(--gds-space-xl);
        width: var(--gds-space-xl);
      }

      &[aria-expanded='true'] ::part(icon) {
        transform: scaleY(-1);
      }
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    label {
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-book);
      padding-block: var(--gds-space-2xs);
      font-family: inherit;
    }

    input[type='text'] {
      border-radius: var(--gds-space-xs);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      font-size: inherit;
      line-height: inherit;
      border: none;
      outline: none;
      color: var(--gds-sys-color-base800);
      border-bottom: 1px solid var(--gds-sys-color-base400);
      width: 100%;
      padding: var(--gds-space-m);
      font-weight: var(--gds-text-weight-book);
      flex: 1;
      box-sizing: border-box;
      font-family: inherit;

      &:focus {
        border-color: var(--gds-sys-color-base800);
      }

      &::placeholder {
        color: currrentColor;
        font-family: inherit;
        font-weight: var(--gds-text-weight-book);
        color: var(--gds-sys-color-base800);
      }
    }
  }
`,au=iu,dt,Li,Di,zi,Vi,Pi,Hi,Bc,Wi,Gc,ji,Zc,ls,tn,Q=class extends Me{constructor(){super(),f(this,Hi),f(this,Wi),f(this,ji),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,f(this,dt,void 0),f(this,Li,e=>{const t=e.getBoundingClientRect(),r=window.innerHeight-t.bottom,o=t.top;let n=Math.min(o,this.maxHeight);return r>o&&(n=Math.min(r,this.maxHeight)),`${n-16}px`}),f(this,Di,e=>{if(!e.currentTarget)return;const t=e.currentTarget;if(this.options.forEach(r=>r.hidden=!1),!t.value)return;this.options.filter(r=>!this.searchFilter(t.value,r)).forEach(r=>r.hidden=!0)}),f(this,zi,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),f(this,Vi,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),f(this,Pi,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),f(this,ls,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),f(this,tn,e=>{var t;e.key==="Tab"&&!this.searchable&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())}),Rd(this)}get type(){return"gds-dropdown"}get options(){return c(this,dt)?Array.from(c(this,dt)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(c(this,dt))return Array.from(c(this,dt)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var e,t;let s;return Array.isArray(this.value)?this.value.length>2?s=O(Eo`${this.value.length} selected`):s=this.value.reduce((r,o)=>{var n;return r+((n=this.options.find(i=>i.value===o))==null?void 0:n.innerHTML)+", "},"").slice(0,-2):s=(e=this.options.find(r=>r.selected))==null?void 0:e.innerHTML,s||((t=this.placeholder)==null?void 0:t.innerHTML)||""}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return m`
      ${ae(this.label&&!this.hideLabel,()=>m`<label for="trigger">${this.label}</label>`)}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${c(this,Li)}
        .disableMobileStyles=${this.disableMobileStyles}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        <button
          id="trigger"
          name="trigger"
          aria-haspopup="listbox"
          slot="trigger"
          role="combobox"
          aria-owns="listbox"
          aria-controls="listbox"
          aria-expanded="${this.open}"
          aria-label="${this.label}"
          part="trigger"
          class=${We({small:this.size==="small"})}
        >
          <slot name="trigger">
            <span>${pc(this.displayValue)}</span>
          </slot>
          <div class="icon">
            <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
          </div>
        </button>
        ${ae(this.searchable,()=>m`<input
              id="searchinput"
              type="text"
              aria-label="${O("Filter available options")}"
              placeholder="${O("Search")}"
              @keydown=${c(this,zi)}
              @input=${c(this,Di)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${pe(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${C(this,Hi,Bc)}"
          @gds-focus="${c(this,Pi)}"
          @keydown=${c(this,Vi)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"
        ><slot name="message">${this.validationMessage}</slot></span
      >
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),Z(this,dt,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){var e;const t=this.open;(e=c(this,dt))==null||e.forEach(r=>r.hidden=!t),t?C(this,Wi,Gc).call(this):(C(this,ji,Zc).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const s=this.options.find(r=>r.selected);this.updateComplete.then(()=>s==null?void 0:s.scrollIntoView()),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:t},bubbles:!0,composed:!0}))}};dt=new WeakMap;Li=new WeakMap;Di=new WeakMap;zi=new WeakMap;Vi=new WeakMap;Pi=new WeakMap;Hi=new WeakSet;Bc=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};Wi=new WeakSet;Gc=function(){this.addEventListener("blur",c(this,ls)),this.addEventListener("gds-blur",c(this,ls)),this.addEventListener("keydown",c(this,tn))};ji=new WeakSet;Zc=function(){this.removeEventListener("blur",c(this,ls)),this.removeEventListener("gds-blur",c(this,ls)),this.removeEventListener("keydown",c(this,tn))};ls=new WeakMap;tn=new WeakMap;Q.styles=[X,au];Q.shadowRootOptions={mode:"open",delegatesFocus:!0};a([g()],Q.prototype,"label",2);a([g({type:Boolean,reflect:!0})],Q.prototype,"open",2);a([g({type:Boolean,reflect:!0})],Q.prototype,"searchable",2);a([g({type:Boolean,reflect:!0})],Q.prototype,"multiple",2);a([g()],Q.prototype,"compareWith",2);a([g()],Q.prototype,"searchFilter",2);a([g({type:Boolean,attribute:"sync-popover-width"})],Q.prototype,"syncPopoverWidth",2);a([g({type:Number,attribute:"max-height"})],Q.prototype,"maxHeight",2);a([g()],Q.prototype,"size",2);a([g({type:Boolean,attribute:"hide-label"})],Q.prototype,"hideLabel",2);a([g()],Q.prototype,"disableMobileStyles",2);a([oe("#trigger")],Q.prototype,"_elTriggerBtn",2);a([rt("#listbox")],Q.prototype,"_elListbox",2);a([oe("#searchinput")],Q.prototype,"_elSearchInput",2);a([ya({attributes:!0,childList:!0,subtree:!0,characterData:!0})],Q.prototype,"_handleLightDOMChange",1);a([ne("value")],Q.prototype,"_handleValueChange",1);a([ne("open")],Q.prototype,"_onOpenChange",1);Q=a([k("gds-dropdown")],Q);var lu=R`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`,du=lu,Ss,Ri,ds=class extends U{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,f(this,Ss,Lo()),f(this,Ri,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new Gd(this)}get navigableItems(){return this.visibleOptionElements}get options(){return c(this,Ss).value?Zd(c(this,Ss).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),xe.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",c(this,Ri))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return m`<slot ${js(c(this,Ss))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};Ss=new WeakMap;Ri=new WeakMap;ds.styles=du;a([g({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],ds.prototype,"multiple",2);a([g()],ds.prototype,"compareWith",2);a([ne("multiple")],ds.prototype,"_rerenderOptions",1);ds=a([k("gds-listbox")],ds);var Et,ao,Fi,vt=class extends qd(U){constructor(){super(),f(this,ao),f(this,Et,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",C(this,ao,Fi)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),C(this,ao,Fi).call(this,e))})}get hidden(){return c(this,Et)}set hidden(e){this.isPlaceholder||(Z(this,Et,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(Z(this,Et,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>xe.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(Z(this,Et,!0),this.setAttribute("aria-hidden","true")):(Z(this,Et,!1),this.setAttribute("aria-hidden","false"))}render(){var e;const t=(e=this.parentElement)==null?void 0:e.multiple,s=m`
      <span class="checkbox ${We({checked:this.selected})}">
        ${this.selected?m`<gds-icon-checkmark stroke="4"></gds-icon-checkmark>`:""}
      </span>
    `;return t||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),m`<div>${ae(t,()=>s)} <slot></slot></div>`}};Et=new WeakMap;ao=new WeakSet;Fi=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};vt.styles=[X,Kd];a([g()],vt.prototype,"value",2);a([g({attribute:"aria-hidden",reflect:!0})],vt.prototype,"hidden",1);a([g({attribute:"aria-selected",reflect:!0})],vt.prototype,"selected",2);a([g({type:Boolean,reflect:!0})],vt.prototype,"isPlaceholder",2);a([ne("isplaceholder")],vt.prototype,"_handlePlaceholderStatusChange",1);vt=a([k("gds-option")],vt);var lr=class extends L{};lr._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';lr._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>';lr._name="chevron-bottom";lr=a([k("gds-icon-chevron-bottom")],lr);var dr=class extends L{};dr._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';dr._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99454C22.2979 3.40464 22.4157 4.18729 22.0056 4.74263L10.0056 20.9926C9.80433 21.2652 9.50107 21.4443 9.16524 21.4891C8.82942 21.5339 8.4898 21.4404 8.22417 21.2301L2.22417 16.4801C1.6829 16.0516 1.59149 15.2655 2.01999 14.7242C2.4485 14.1829 3.23466 14.0915 3.77593 14.52L8.76241 18.4677L19.9945 3.25753C20.4046 2.70218 21.1873 2.58444 21.7426 2.99454Z" fill="currentColor"/>';dr._name="checkmark";dr=a([k("gds-icon-checkmark")],dr);var Xe,lo,co,ho,go,Ni,Ii,Bi,Gi,Uc,Kt,Ms,po,Zi,Xt,Es,Ts,uo,Fe=class extends D{constructor(){super(...arguments),f(this,Gi),f(this,Kt),f(this,po),f(this,Xt),f(this,Ts),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=C(this,po,Zi).call(this,this.value,this.length),f(this,Xe,""),f(this,lo,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=C(this,Xt,Es).call(this,e+1),C(this,Kt,Ms).call(this)}),f(this,co,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=C(this,Xt,Es).call(this,e-1),C(this,Kt,Ms).call(this)}),f(this,ho,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),f(this,go,()=>{C(this,Ts,uo).call(this)}),f(this,Ni,()=>{c(this,Xe)!==""&&(C(this,Ts,uo).call(this),this.value=C(this,Xt,Es).call(this,parseInt(this.value.toString())),C(this,Kt,Ms).call(this))}),f(this,Ii,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?c(this,co).call(this):c(this,lo).call(this)}),f(this,Bi,e=>{let t=!1;if(e.key==="ArrowUp")c(this,lo).call(this),t=!0;else if(e.key==="ArrowDown")c(this,co).call(this),t=!0;else{const s=parseInt(e.key);isNaN(s)||(c(this,Xe).length<this.length&&(Z(this,Xe,c(this,Xe)+s.toString()),this.value=parseInt(c(this,Xe))),c(this,Xe).length===this.length&&(this.value=C(this,Xt,Es).call(this,this.value),C(this,Ts,uo).call(this),C(this,Gi,Uc).call(this),C(this,Kt,Ms).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",c(this,Ii)),this.addEventListener("keydown",c(this,Bi)),this.addEventListener("blur",c(this,Ni)),this.addEventListener("focus",c(this,go)),this.addEventListener("click",c(this,ho)),this.addEventListener("mousedown",c(this,ho))}focus(e){super.focus(e),c(this,go).call(this)}render(){return m`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=C(this,po,Zi).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};Xe=new WeakMap;lo=new WeakMap;co=new WeakMap;ho=new WeakMap;go=new WeakMap;Ni=new WeakMap;Ii=new WeakMap;Bi=new WeakMap;Gi=new WeakSet;Uc=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof Fe){e.focus();break}e=e.nextElementSibling}};Kt=new WeakSet;Ms=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};po=new WeakSet;Zi=function(e,t){return String(e).padStart(t,"0")};Xt=new WeakSet;Es=function(e){return Math.max(this.min,Math.min(this.max,e))};Ts=new WeakSet;uo=function(){Z(this,Xe,"")};Fe.formAssociated=!0;a([g({type:Number})],Fe.prototype,"value",2);a([g({type:Number})],Fe.prototype,"length",2);a([g({type:Number,attribute:"aria-valuemin"})],Fe.prototype,"min",2);a([g({type:Number,attribute:"aria-valuemax"})],Fe.prototype,"max",2);a([W()],Fe.prototype,"displayValue",2);a([ne("value")],Fe.prototype,"_refreshDisplayValue",1);Fe=a([k("gds-date-part-spinner")],Fe);function cu(e,t){const s=Kp(e),r=Up(e),o=qp({start:s,end:r},{weekStartsOn:1});for(;o.length<6;)o.push(Ot(o[o.length-1],7));return ue`${t(o.map(n=>({days:Yp({start:n,end:Ot(n,6)})})))}`}var hu=R`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-space-2xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;
    }

    thead {
      box-shadow: 0 var(--gds-space-4xs) 0 0 var(--gds-color-l2-border-primary);
      th {
        height: var(--gds-space-2xl);
        width: var(--gds-space-2xl);
        background: var(--gds-sys-color-container-container-bright);
        box-sizing: border-box;
        text-align: center;
        font-weight: normal;
      }
    }

    tbody {
      td {
        position: relative;
        height: var(--gds-space-3xl);
        width: var(--gds-space-3xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-space-2xs);
        transition: all 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-space-3xs);

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          background: var(--gds-sys-color-base800);
          cursor: pointer;
          color: var(--gds-sys-color-base-white);
        }

        &.today {
          border-color: var(--gds-sys-color-base800);
        }

        &.disabled {
          background-color: var(--gds-sys-color-base100);
          color: var(--gds-sys-color-base500);
          cursor: not-allowed;
        }

        &:active:not(.disabled) {
          scale: 0.96;
        }

        &:focus-visible {
          outline-color: color-mix(in srgb, currentColor, transparent 50%);
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-space-2xs);
        height: var(--gds-space-2xs);
        border-radius: var(--gds-space-max);
        background-color: var(--_color, currentColor);
        inset: var(--gds-space-2xs) var(--gds-space-2xs) auto auto;
      }
    }
  }
`,gu=hu,Fo,Ia,Ui,Yc,ee=class extends U{constructor(){super(...arguments),f(this,Fo),f(this,Ui),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=e=>e.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=tu(new Date(this.focusedYear,e,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),s.setMonth(e),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",C(this,Ui,Yc)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date;return ue`<table role="grid" aria-label="${pe(this.label)}">
      ${ae(!this.hideDayNames,()=>ue`<thead role="rowgroup">
            <tr role="row">
              ${ae(this.showWeekNumbers,()=>ue`<th></th>`)}
              <th>${O("Mon")}</th>
              <th>${O("Tue")}</th>
              <th>${O("Wed")}</th>
              <th>${O("Thu")}</th>
              <th>${O("Fri")}</th>
              <th>${O("Sat")}</th>
              <th>${O("Sun")}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${cu(this.focusedDate,t=>ue`
            ${t.map(s=>ue`
                <tr role="row">
                  ${ae(this.showWeekNumbers,()=>ue`<td class="week-number" scope="row">
                        ${eu(s.days[0])}
                      </td>`)}
                  ${s.days.map(r=>{const o=this.customizedDates&&this.customizedDates.find(p=>lt(p.date,r)),n=ts({color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(p=>lt(p,r)))},o),i=!su(this.focusedDate,r),l=(r<this.min||r>this.max)&&!lt(r,this.min)&&!lt(r,this.max),d=r.getDay()===0||r.getDay()===6,h=n.disabled||i||l||this.disabledWeekends&&d;return this.hideExtraneousDays&&i?ue`<td inert></td>`:ue`
                          <td
                            role="${pe(h?void 0:"gridcell")}"
                            class="${We({"custom-date":!!o,disabled:!!h,today:lt(e,r)})}"
                            ?disabled=${h}
                            tabindex="${lt(this.focusedDate,r)?0:-1}"
                            aria-selected="${this.value&&lt(this.value,r)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(r)}"
                            @click=${()=>h?null:C(this,Fo,Ia).call(this,r)}
                            id="dateCell-${r.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${n?n==null?void 0:n.color:""}"
                              >${r.getDate()}</span
                            >

                            ${ae(n.indicator,()=>ue`<span
                                  class="indicator-${n==null?void 0:n.indicator}"
                                  style="--_color: ${n==null?void 0:n.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};Fo=new WeakSet;Ia=function(e){const t=ru(e,12);this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:t,bubbles:!1,composed:!1}))};Ui=new WeakSet;Yc=function(e){var t;let s=!1,r=new Date(this.focusedDate);e.key==="ArrowLeft"?(r=Ot(this.focusedDate,-1),s=!0):e.key==="ArrowRight"?(r=Ot(this.focusedDate,1),s=!0):e.key==="ArrowUp"?(r=Ot(this.focusedDate,-7),s=!0):e.key==="ArrowDown"?(r=Ot(this.focusedDate,7),s=!0):e.key==="Enter"||e.key===" "?((t=this._elFocusedCell)!=null&&t.hasAttribute("disabled")||C(this,Fo,Ia).call(this,this.focusedDate),s=!0):e.key==="Home"?(r=new Date(this.focusedYear,this.focusedMonth,1),s=!0):e.key==="End"?(r=new Date(this.focusedYear,this.focusedMonth+1,0),s=!0):e.key==="PageUp"?(r=ou(this.focusedDate,1),s=!0):e.key==="PageDown"&&(r=Pc(this.focusedDate,1),s=!0),r.getFullYear()>=this.min.getFullYear()&&r.getFullYear()<=this.max.getFullYear()&&this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:r,bubbles:!1,composed:!1,cancelable:!0}))&&(this.focusedDate=r),s&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var o;(o=this._elFocusedCell)==null||o.focus()}))};ee.styles=[X,gu];ee.shadowRootOptions={mode:"open",delegatesFocus:!0};a([g()],ee.prototype,"value",2);a([g({type:Date})],ee.prototype,"min",2);a([g({type:Date})],ee.prototype,"max",2);a([g()],ee.prototype,"focusedDate",2);a([g({type:Boolean,attribute:"disabled-weekends"})],ee.prototype,"disabledWeekends",2);a([g({type:Array,attribute:"disabled-dates"})],ee.prototype,"disabledDates",2);a([g({type:Number})],ee.prototype,"focusedMonth",1);a([g({type:Number})],ee.prototype,"focusedYear",1);a([g({type:Boolean})],ee.prototype,"showWeekNumbers",2);a([g({type:Boolean})],ee.prototype,"hideExtraneousDays",2);a([g({type:Boolean})],ee.prototype,"hideDayNames",2);a([g({attribute:!1})],ee.prototype,"customizedDates",2);a([g()],ee.prototype,"label",2);a([g({attribute:!1})],ee.prototype,"dateLabelTemplate",2);a([W()],ee.prototype,"_currentLocale",2);a([oe('td[tabindex="0"]')],ee.prototype,"_elFocusedCell",2);a([ne("value")],ee.prototype,"_valueChanged",1);ee=a([k("gds-calendar"),Nt()],ee);var Yi=class extends U{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.formObserver)==null||e.disconnect()}render(){var e;const s=Array.from(((e=this.form)==null?void 0:e.elements)||[]).filter(r=>r.invalid);return ae(s.length>0,()=>m`<gds-card level="3" border="4xs/negative" border-radius="2xs" padding="m" color="error-text">
          <gds-flex gap="s" level=="3" color="negative">
            <gds-container>
              <gds-icon-triangle-exclamation></gds-icon-triangle-exclamation>
            </gds-container>
            <gds-container >
            ${O(Eo`There are ${s.length} errors to correct before you can continue:`)}
            <ul>
              ${s.map(r=>m`<li><a href @click=${o=>{o.preventDefault(),r.focus()}}>${r.label}</li>`)}
            </ul>
          </gds-container>
        <gds-flex>
      </gds-card>`)}};Yi.styles=R`
    :host {
      font-weight: 500;
    }
    ul {
      list-style-type: none;
      margin: 1rem 0 0;
      padding: 0;
    }
    li {
      margin: 0.5rem 0;
    }
    a {
      color: var(--gds-sys-color-primary-text);
      font-weight: 500;
    }
  `;Yi=a([k("gds-form-summary")],Yi);var pu=R`
  #body {
    visibility: hidden;
    position: absolute;
    z-index: 1060;
    box-sizing: border-box;
    padding: 1rem;
    width: 20rem;
    border-radius: 0.25rem;
    background-color: #222;
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s;
  }

  #arrow {
    box-sizing: border-box;
    z-index: -1;
    position: absolute;
    height: 1rem;
    width: 1rem;
    background-color: #222;
    transform: rotate(45deg);
  }

  .arrow-top,
  .arrow-top-start,
  .arrow-top-end {
    bottom: -0.5rem;
  }

  .arrow-bottom,
  .arrow-bottom-start,
  .arrow-bottom-end {
    top: -0.5rem;
  }

  .arrow-left,
  .arrow-left-start,
  .arrow-left-end {
    right: -0.5rem;
  }

  .arrow-right,
  .arrow-right-start,
  .arrow-right-end {
    left: -0.5rem;
  }
`,uu=pu,cr,No,sn,Jt,As,qi,qc,Ba,Kc,Ga,Xc,Za,Jc,Ua,Qc,Ya,e1,fo,Ki,Ne=class extends U{constructor(){super(...arguments),f(this,Jt),f(this,qi),f(this,Ba),f(this,Ga),f(this,Za),f(this,Ua),f(this,Ya),f(this,fo),this.placement="bottom",this.overlappedBy=[],this.target=[],this.label="Coachmark",this.computeVisibility=(e,t,s)=>s,this.targetElement=void 0,this._isVisible=!1,this._preventClose=!1,f(this,cr,Lo()),f(this,No,Lo()),f(this,sn,void 0)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",()=>{setTimeout(()=>{C(this,fo,Ki).call(this),C(this,Jt,As).call(this)},400)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this._isVisible&&C(this,Jt,As).call(this)})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",C(this,Jt,As)),document.removeEventListener("keydown",e=>{e.key==="Escape"&&this._isVisible&&C(this,Jt,As).call(this)})}firstUpdated(){this.target.length>0&&(this.targetElement=C(this,qi,qc).call(this,this.target),C(this,fo,Ki).call(this))}setPreventClose(e){this._preventClose=e}render(){return m`${ae(this.target.length>0,()=>m`
        <div
          role="dialog"
          id="body"
          aria-label=${this.label}
          ${js(c(this,cr))}
        >
          <slot></slot>
          <div id="arrow" ${js(c(this,No))}></div>
        </div>
      `,()=>m``)}`}};cr=new WeakMap;No=new WeakMap;sn=new WeakMap;Jt=new WeakSet;As=function(){var e,t;this._isVisible&&(this._isVisible=!1,(e=c(this,cr).value)==null||e.remove(),(t=c(this,sn))==null||t.call(this),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this._isVisible,reason:"closed"},bubbles:!1,composed:!1})))};qi=new WeakSet;qc=function(e){let t=!1,s;for(const r of e){if(r==="shadowRoot"){t=!0;continue}s?t&&s.shadowRoot?(s=s.shadowRoot.querySelector(r),t=!1):s=s.querySelector(r):s=document.querySelector(r)}return s};Ba=new WeakSet;Kc=function(e,t){if(e==t)return;const s=e.getBoundingClientRect(),r=t.getBoundingClientRect();return s.top<r.bottom&&s.bottom>r.top&&s.left<r.right&&s.right>r.left};Ga=new WeakSet;Xc=function(e){if(!e)return!1;for(const t of e){const s=document.querySelector(t);if(!(!s||getComputedStyle(s).visibility==="hidden")&&C(this,Ba,Kc).call(this,this.targetElement,s))return!0}return!1};Za=new WeakSet;Jc=function(e){const t=e.getBoundingClientRect(),s=window.innerHeight||document.documentElement.clientHeight,r=window.innerWidth||document.documentElement.clientWidth;return t.top+t.height<0||t.top>s||t.left+t.width<0||t.left>r};Ua=new WeakSet;Qc=async function(e,t,s){return dc(e,t,{placement:this.placement,middleware:[ac(()=>({mainAxis:16,alignmentAxis:16})),{name:"detectOverflow",async fn(r){return{data:await Kg(r,{boundary:document.body,rootBoundary:"document",altBoundary:!0,padding:{top:167,left:20}})}}},Xg({padding:16}),lc(),Jg(),Qg({padding:16,element:s})]})};Ya=new WeakSet;e1=function(){if(!this.targetElement)return!1;const e=C(this,Za,Jc).call(this,this.targetElement),t=this.targetElement.checkVisibility(),s=this.overlappedBy.length===0?!1:C(this,Ga,Xc).call(this,this.overlappedBy);return this.computeVisibility(this,this.targetElement,!s&&!e&&t)};fo=new WeakSet;Ki=async function(){const e=this.targetElement,t=c(this,cr).value,s=c(this,No).value;if(!(!e||!t||!s))try{Z(this,sn,ic(e,t,()=>{C(this,Ua,Qc).call(this,e,t,s).then(({x:r,y:o,middlewareData:n,placement:i})=>{if(C(this,Ya,e1).call(this)){if(this._isVisible=!0,Object.assign(t.style,{visibility:"visible",opacity:1,left:`${r}px`,top:`${o}px`}),n.arrow){const{x:l,y:d}=n.arrow;s.removeAttribute("class"),s.classList.add("arrow-"+i),Object.assign(s.style,{left:l!=null?`${l}px`:"",top:d!=null?`${d}px`:""})}}else this._isVisible=!1,Object.assign(t.style,{visibility:"hidden",opacity:0})})}))}catch{console.warn("failed to render tooltips")}};Ne.styles=uu;a([g()],Ne.prototype,"placement",2);a([g({attribute:!1})],Ne.prototype,"overlappedBy",2);a([g({attribute:!1})],Ne.prototype,"target",2);a([g()],Ne.prototype,"label",2);a([g({attribute:!1})],Ne.prototype,"computeVisibility",2);a([W()],Ne.prototype,"_isVisible",2);a([W()],Ne.prototype,"_preventClose",2);Ne=a([k("gds-coachmark")],Ne);var fu=R`
  .button {
    box-shadow: var(--gds-shadow-m);
    position: fixed;
    inset: auto var(--gds-space-3xl) var(--gds-space-3xl) auto;
    block-size: calc(var(--_block-size) + var(--gds-space-xs));
  }
`,vu=fu,hr=class extends de{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",vu)}};a([y({valueTemplate:e=>e,selector:'[part="_button"]'})],hr.prototype,"position",2);a([y({valueTemplate:e=>e})],hr.prototype,"transform",2);a([y({valueTemplate:e=>e,selector:'[part="_button"]'})],hr.prototype,"inset",2);hr=a([k("gds-fab")],hr);var mu=Object.defineProperty,bu=Object.getOwnPropertyDescriptor,xu=(e,t,s,r)=>{for(var o=r>1?void 0:r?bu(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&mu(t,s,o),o};let Yl=class extends D{createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return m`<gds-card border="4xs/base300" padding="m" border-radius="s">
      <form>
        <gds-input
          required
          label="Name"
          placeholder="Enter your name"
        ></gds-input>
        <gds-datepicker
          label="Birth date"
          .validator=${{validate:e=>{if(console.log("Inside datepicker validator",e.value),e.value===void 0)return[{...e.validity,valid:!1,customError:!0},"This field is required"]}}}
        ></gds-datepicker>
        <gds-dropdown
          label="Favorite pet"
          .validator=${{validate:e=>{if(console.log("Inside custom validator",e.value),e.value!=="cat")return[{...e.validity,valid:!1,customError:!0},"Only cats are allowed!"]}}}
        >
          <gds-option>Pick favorite</gds-option>
          <gds-option value="dog">Dog</gds-option>
          <gds-option value="cat">Cat</gds-option>
          <gds-option value="fish">Fish</gds-option>
        </gds-dropdown>
        <gds-form-summary></gds-form-summary>
        <gds-button type="submit">Submit</gds-button>
        <gds-button id="reset-button" type="reset">Reset</gds-button>
      </form>
      <!-- <gds-coachmark .target=${["#reset-button"]}>
          <div>Hey, I'm a coachmark!</div>
        </gds-coachmark> -->
    </gds-card>`}};Yl=xu([j("form-validation")],Yl);var yu=Object.defineProperty,wu=Object.getOwnPropertyDescriptor,qa=(e,t,s,r)=>{for(var o=r>1?void 0:r?wu(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&yu(t,s,o),o};let Io=class extends D{constructor(){super(...arguments),this.disabledWeekends=!1,this.showWeekNumbers=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return m` <div style="width:320px; margin: 8rem auto;">
      <h3 style="margin-bottom: 2rem;">Datepicker</h3>
        <gds-datepicker
          .disabledWeekends=${this.disabledWeekends}
          .showWeekNumbers=${this.showWeekNumbers}
          label="Pick a date"
        ></gds-datepicker>
      <fieldset class="form-group" style="margin-top: 2rem">
        <legend>Example controls</legend>
        <label class="form-control"
          ><input
            type="checkbox"
            .checked=${this.disabledWeekends}
            @change=${t=>this.disabledWeekends=t.target.checked} /><span
            >Disable weekends</span
          ><i
        ></i></label>
        <label class="form-control"
          ><input
            type="checkbox"
            .checked=${this.showWeekNumbers}
            @change=${t=>this.showWeekNumbers=t.target.checked} /><span
            >Show week numbers</span
          ><i
        ></i></label>
    </div>`}};qa([W()],Io.prototype,"disabledWeekends",2);qa([W()],Io.prototype,"showWeekNumbers",2);Io=qa([j("datepicker-example")],Io);var _u=Object.defineProperty,Cu=Object.getOwnPropertyDescriptor,t1=e=>{throw TypeError(e)},rn=(e,t,s,r)=>{for(var o=r>1?void 0:r?Cu(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&_u(t,s,o),o},ku=(e,t,s)=>t.has(e)||t1("Cannot "+s),$u=(e,t,s)=>(ku(e,t,"read from private field"),s?s.call(e):t.get(e)),Su=(e,t,s)=>t.has(e)?t1("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Xi;const Ur=`${new Date().getFullYear()}-${new Date().getMonth()+1}`;let gr=class extends D{constructor(){super(...arguments),this.disabledWeekends=!1,this.showWeekNumbers=!1,this.showCustomizedDates=!1,Su(this,Xi,[{date:new Date(`${Ur}-07`),indicator:"dot",color:"var(--intent-danger-background)"},{date:new Date(`${Ur}-12`),indicator:"dot",color:"var(--intent-danger-background)"},{date:new Date(`${Ur}-24`),indicator:"dot",color:"var(--intent-danger-background)"},{date:new Date(`${Ur}-21`),indicator:"dot",disabled:!0}])}createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return m` <div style="width:320px; margin: 8rem auto;">
      <h3 style="margin-bottom: 2rem;">Standalone calendar</h3>
      <div class="card" style="padding: 0">
        <gds-calendar
          .disabledWeekends=${this.disabledWeekends}
          .showWeekNumbers=${this.showWeekNumbers}
          .customizedDates=${this.showCustomizedDates?$u(this,Xi):[]}
        ></gds-calendar>
      </div>
      <fieldset class="form-group" style="margin-top: 2rem">
        <legend>Example controls</legend>
        <label class="form-control"
          ><input
            type="checkbox"
            .checked=${this.disabledWeekends}
            @change=${e=>this.disabledWeekends=e.target.checked} /><span
            >Disable weekends</span
          ><i
        ></i></label>
        <label class="form-control"
          ><input
            type="checkbox"
            .checked=${this.showWeekNumbers}
            @change=${e=>this.showWeekNumbers=e.target.checked} /><span
            >Show week numbers</span
          ><i
        ></i></label>
        <label class="form-control"
          ><input
            type="checkbox"
            .checked=${this.showCustomizedDates}
            @change=${e=>this.showCustomizedDates=e.target.checked} /><span
            >Show customized dates</span
          ><i
        ></i></label>
      </div>
    </div>`}};Xi=new WeakMap;rn([W()],gr.prototype,"disabledWeekends",2);rn([W()],gr.prototype,"showWeekNumbers",2);rn([W()],gr.prototype,"showCustomizedDates",2);gr=rn([j("calendar-example")],gr);var Mu=Object.defineProperty,Eu=Object.getOwnPropertyDescriptor,Tu=(e,t,s,r)=>{for(var o=r>1?void 0:r?Eu(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Mu(t,s,o),o};const Au="https://github.com/user-attachments/assets/1c038c0b-b468-48d2-b171-092534b3a0e2";let ql=class extends D{createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return m`
      <gds-flex justify-content="center">
        <gds-card
          shadow="2xs{0} s{0} m{s} l{s} xl{s}"
          border-radius="2xs{0} s{0} m{xs} l{xs} xl{xs}"
          background="l2-background-secondary"
          overflow="hidden"
          width="clamp(320px, 100%, 1440px)"
        >
          <gds-grid columns="2xs{1} s{1} m{2} l{2} xl{2}">
            <gds-flex position="relative">
              <gds-video
                aspect-ratio="2xs{1/1} s{16/9} m{16/9} l{1/1} xl{2/2.4}"
                src=${Au}
                alt="Cards"
                object-fit="cover"
                position="center"
                pointer-events="none"
                playsinline
                autoplay
                muted
                loop
              ></gds-video>
              <gds-card
                color="l2-content-tertiary"
                filter="2px"
                inset="40% 0 0 0"
                mask="top/l1-background-tertiary/0.3"
                padding="2xs{l} s{l} m{xl} l{4xl} xl{4xl}"
                position="absolute"
                border-radius="xs"
                z-index="2"
              >
                <gds-flex
                  flex-direction="column"
                  justify-content="flex-end"
                  height="100%"
                  gap="xs"
                >
                  <gds-text text-wrap="balance">
                    Sector by sector. Industry by industry.
                  </gds-text>
                  <gds-text text-wrap="balance">
                    Together with our clients, we're accelerating the
                    sustainable transition.
                  </gds-text>
                  <gds-flex align-items="center" gap="s" margin="s 0 0 0">
                    <gds-text>Net Zero Transition</gds-text>
                    <gds-icon-arrow-right></gds-icon-arrow-right>
                  </gds-flex>
                </gds-flex>
              </gds-card>
            </gds-flex>
            <gds-flex
              flex-direction="column"
              padding="2xs{l} s{l} m{xl} l{4xl} xl{4xl}"
              gap="2xl"
              align-items="stretch"
              justify-content="center"
              height="100%"
            >
              <form novalidate>
                <gds-container>
                  <gds-text tag="h1" color="l2-content-primary" weight="book">
                    Välkommen till Internetbanken
                  </gds-text>
                  <gds-text
                    tag="p"
                    size="heading-l"
                    color="l2-content-secondary"
                  >
                    Hur vill du logga in?
                  </gds-text>
                </gds-container>
                <gds-card
                  border-radius="s"
                  border="4xs/l2-stroke-primary"
                  padding="xl"
                >
                  <gds-flex flex-direction="column" gap="l">
                    <gds-text font-size="heading-l"
                      >Logga in med digipass</gds-text
                    >
                    <gds-input
                      label="Personnummer"
                      showExtendedSupportingText="true"
                      supportingText="Fyll i med 12 siffror."
                      .validator=${{validate:t=>{if(t.value==="")return[{...t.validity,valid:!1,customError:!0},"Du måste fylla i ditt personnummer."];if(t.value.length!==12||isNaN(t.value))return[{...t.validity,valid:!1,customError:!0},"Personnumret måste vara 12 siffror."]}}}
                    ></gds-input>

                    <ol>
                      <li>Skriv in din PIN i digipassen.</li>
                      <li>Tryck 2 när APPLI visas.</li>
                      <li>
                        Skriv in <gds-text tag="code">1234</gds-text> och sedan
                        <gds-text tag="code">5678</gds-text> i digipassen.
                      </li>
                      <li>Fyll i signeringskoden, den visas i 30 sekunder.</li>
                    </ol>

                    <gds-input
                      label="Inloggningskod"
                      supportingText="Fyll i koden med 6 siffror."
                      .validator=${{validate:t=>{if(t.value==="")return[{...t.validity,valid:!1,customError:!0},"Du måste fylla i en kod."];if(t.value.length!==6||isNaN(t.value))return[{...t.validity,valid:!1,customError:!0},"Koden måste vara 6 siffror."]}}}
                    ></gds-input>

                    <gds-form-summary></gds-form-summary>

                    <gds-button type="submit" size="large">Logga in</gds-button>

                    <gds-button rank="tertiary">
                      Ändra identifieringsmetod
                    </gds-button>
                  </gds-flex>
                </gds-card>
              </form>
            </gds-flex>
          </gds-grid>
        </gds-card>
      </gds-flex>
    `}};ql=Tu([j("gds-login")],ql);var Ou=Object.defineProperty,Lu=Object.getOwnPropertyDescriptor,Du=(e,t,s,r)=>{for(var o=r>1?void 0:r?Lu(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Ou(t,s,o),o};let Kl=class extends D{render(){return m`
    <gds-card variant="copper-01" padding="s">
        <gds-flex
          padding="l"
          align-items="center"
          justify-content="space-between"
        >
          <gds-text tag="h3" font-size="heading-s">Kom igång här!</gds-text>
          <gds-flex background="#F7F5F3" border-radius="max" padding="m">
            <gds-icon-checklist width="24" height="24"></gds-icon-checklist>
          </gds-flex>
        </gds-flex>
        <gds-card padding="l" level="3" variant="copper-01">
          <gds-flex flex-direction="column" gap="l" align-items="flex-start">
            <gds-text
              >Få en översikt av dina konton, transaktioner, debit och
              kreditkort.</gds-text
            >
            <gds-button href="#">Skaffa Enkla vardagen</gds-button>
          </gds-flex>
        </gds-card>
      </gds-card>
    </gds-flex>
        `}};Kl=Du([j("tp-card-carousel")],Kl);var zu=Object.defineProperty,Vu=Object.getOwnPropertyDescriptor,Pu=(e,t,s,r)=>{for(var o=r>1?void 0:r?Vu(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&zu(t,s,o),o};let Xl=class extends D{createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return m`<tp-card-carousel></tp-card-carousel>`}};Xl=Pu([j("gds-onboarding")],Xl);var Hu=R`
  :host {
    display: block;
  }

  hr {
    border-radius: 200px;
    background: currentColor;
    font-size: 0;
    border: 0;
    height: 1px;
    width: 100%;
    margin-top: calc((var(--_size, 0) / 2) - (1px / 2));
    margin-bottom: calc((var(--_size, 0) / 2) - (1px / 2));
  }
`,Wu=Hu,Rt=class extends U{constructor(){super(...arguments),this.level="2"}render(){return m`<hr />`}};Rt.styles=[X,Wu];a([g()],Rt.prototype,"level",2);a([y({valueTemplate:function(e){const[t,s]=e.split("/"),r=i=>{const l=i.trim();return l.startsWith("#")||l.startsWith("rgb(")||l.startsWith("rgba(")||l.startsWith("hsl(")||l.startsWith("hsla(")},o=(i,l)=>`var(--gds-color-l${i}-border-${l})`;return((i,l)=>r(i)?l?`color-mix(in srgb, ${i} ${parseFloat(l)*100}%, transparent 0%)`:i:o(this.level,i))(t,s)}})],Rt.prototype,"color",2);a([y({property:"--_size",valueTemplate:e=>`var(--gds-space-${e})`})],Rt.prototype,"size",2);a([y({property:"opacity",valueTemplate:e=>e})],Rt.prototype,"opacity",2);Rt=a([k("gds-divider")],Rt);var pr=class extends L{};pr._regularSVG='<path d="M7.75 20.75L3.75 16.75L7.75 12.75M16.25 11.25L20.25 7.25L16.25 3.25M5 16.75H20.25M3.75 7.25H19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';pr._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7197 2.71967C16.0126 2.42678 16.4874 2.42678 16.7803 2.71967L20.7803 6.71967C21.0732 7.01256 21.0732 7.48744 20.7803 7.78033L16.7803 11.7803C16.4874 12.0732 16.0126 12.0732 15.7197 11.7803C15.4268 11.4874 15.4268 11.0126 15.7197 10.7197L18.4393 8H3.75C3.33579 8 3 7.66421 3 7.25C3 6.83579 3.33579 6.5 3.75 6.5H18.4393L15.7197 3.78033C15.4268 3.48744 15.4268 3.01256 15.7197 2.71967ZM8.28033 12.2197C8.57322 12.5126 8.57322 12.9874 8.28033 13.2803L5.56066 16H20.25C20.6642 16 21 16.3358 21 16.75C21 17.1642 20.6642 17.5 20.25 17.5H5.56066L8.28033 20.2197C8.57322 20.5126 8.57322 20.9874 8.28033 21.2803C7.98744 21.5732 7.51256 21.5732 7.21967 21.2803L3.21967 17.2803C2.92678 16.9874 2.92678 16.5126 3.21967 16.2197L7.21967 12.2197C7.51256 11.9268 7.98744 11.9268 8.28033 12.2197Z" fill="currentColor"/>';pr._name="arrow-left-right";pr=a([k("gds-icon-arrow-left-right")],pr);var ur=class extends L{};ur._regularSVG='<path d="M12 3.75V12M12 12V20.25M12 12H3.75M12 12H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';ur._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H12.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H11.25V3.75C11.25 3.33579 11.5858 3 12 3Z" fill="currentColor"/>';ur._name="plus-large";ur=a([k("gds-icon-plus-large")],ur);var fr=class extends L{};fr._regularSVG='<path d="M2.75 9.75005V19.2461H21.2461V9.75005M2.75 9.75005V4.75293H21.2422C21.247 6.41863 21.2461 8.08434 21.2461 9.75005M2.75 9.75005H21.2461M6.75 13.25H9.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';fr._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 4.00293C2.33579 4.00293 2 4.33872 2 4.75293V9H21.9961V10.5H2V19.2461C2 19.6604 2.33579 19.9961 2.75 19.9961H21.2461C21.6603 19.9961 21.9961 19.6604 21.9961 19.2461L21.9961 9.05303C21.9962 7.61979 21.9964 6.18525 21.9922 4.75075C21.991 4.33739 21.6556 4.00293 21.2422 4.00293H2.75ZM6.75 12.5C6.33579 12.5 6 12.8358 6 13.25C6 13.6642 6.33579 14 6.75 14H9.75C10.1642 14 10.5 13.6642 10.5 13.25C10.5 12.8358 10.1642 12.5 9.75 12.5H6.75Z" fill="currentColor"/>';fr._name="credit-card";fr=a([k("gds-icon-credit-card")],fr);var vr=class extends L{};vr._regularSVG='<path d="M20.7125 11.5768L22.25 7.25L15.075 3.75C14.0732 7.01444 9.92685 7.01444 8.925 3.75L1.75 7.25L3.2875 11.5768L5.75 10.45V20.25H18.25V10.45L20.7125 11.5768Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>';vr._solidSVG='<path d="M9.642 3.52996C9.57767 3.32033 9.42482 3.14936 9.22368 3.06204C9.02254 2.97471 8.79327 2.97979 8.59619 3.07592L1.42119 6.57592C1.07817 6.74325 0.915507 7.1415 1.0433 7.50112L2.5808 10.8279C2.65123 11.0261 2.80164 11.1856 2.99536 11.2676C3.18908 11.3495 3.40831 11.3463 3.59957 11.2588L5.00001 10.618V20.25C5.00001 20.6642 5.33579 21 5.75001 21H18.25C18.6642 21 19 20.6642 19 20.25V10.618L20.4004 11.2588C20.5917 11.3463 20.8109 11.3495 21.0047 11.2676C21.1984 11.1856 21.3488 11.0261 21.4192 10.8279L22.9567 7.50112C23.0845 7.1415 22.9218 6.74325 22.5788 6.57592L15.4038 3.07592C15.2067 2.97979 14.9775 2.97471 14.7763 3.06204C14.5752 3.14936 14.4223 3.32033 14.358 3.52996C13.9516 4.85432 12.9502 5.44833 12 5.44833C11.0498 5.44833 10.0484 4.85432 9.642 3.52996Z" fill="currentColor"/>';vr._name="fashion";vr=a([k("gds-icon-fashion")],vr);var mr=class extends L{};mr._regularSVG='<path d="M7.75 6.75H2.75V20.25H21.25V6.75H16.25M7.75 6.75V2.75H16.25V6.75M7.75 6.75H16.25" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>';mr._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7 2.75C7 2.33579 7.33579 2 7.75 2H16.25C16.6642 2 17 2.33579 17 2.75V6H21.25C21.6642 6 22 6.33579 22 6.75V20.25C22 20.6642 21.6642 21 21.25 21H2.75C2.33579 21 2 20.6642 2 20.25V6.75C2 6.33579 2.33579 6 2.75 6H7V2.75ZM8.5 6H15.5V3.5H8.5V6Z" fill="currentColor"/>';mr._name="suitcase-work";mr=a([k("gds-icon-suitcase-work")],mr);var br=class extends L{};br._regularSVG='<path d="M20.25 12V20.25H3.75002V12M9.50002 3.75H14.5001M9.50002 3.75L8.90899 8.77398C8.69131 10.6243 10.137 12.25 12.0001 12.25C13.8631 12.25 15.3088 10.6243 15.0911 8.77397L14.5001 3.75M9.50002 3.75H4.41668L2.97236 8.35377C2.36638 10.2853 3.8091 12.25 5.83349 12.25C7.35405 12.25 8.63391 11.1119 8.81158 9.60174L9.50002 3.75ZM14.5001 3.75H19.5833L21.0277 8.35377C21.6337 10.2853 20.1909 12.25 18.1665 12.25C16.646 12.25 15.3661 11.1119 15.1885 9.60174L14.5001 3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';br._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.70108 3.52549C3.79918 3.21279 4.08896 3 4.41669 3H19.5834C19.9111 3 20.2009 3.21279 20.299 3.52549L21.7433 8.12926C22.1626 9.4657 21.7973 10.8148 20.9585 11.7532C20.9854 11.8305 21 11.9135 21 12V20.25C21 20.6642 20.6642 21 20.25 21H3.75002C3.33581 21 3.00002 20.6642 3.00002 20.25V12C3.00002 11.9135 3.01466 11.8305 3.04158 11.7532C2.20273 10.8148 1.83749 9.4657 2.25676 8.12926L3.70108 3.52549ZM10.167 4.5L9.65386 8.86161C9.48864 10.266 10.586 11.5 12.0001 11.5C13.4097 11.5 14.5046 10.2738 14.3478 8.87488L13.8331 4.5H10.167ZM15.8379 8.70317C15.8373 8.69756 15.8366 8.69195 15.836 8.68634L15.3435 4.5H19.0326L20.3121 8.57827C20.7665 10.0267 19.6846 11.5 18.1665 11.5C17.0263 11.5 16.0666 10.6465 15.9333 9.51411L15.8379 8.70317ZM8.65662 4.5L8.06672 9.51411C7.93349 10.6465 6.97374 11.5 5.8335 11.5C4.31543 11.5 3.23356 10.0267 3.68798 8.57827L4.96744 4.5H8.65662Z" fill="currentColor"/>';br._name="store";br=a([k("gds-icon-store")],br);var xr=class extends L{};xr._regularSVG='<path d="M3.75 3.75V9C3.75 10.7949 5.20507 12.25 7 12.25C8.79493 12.25 10.25 10.7949 10.25 9V3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/><path d="M7 12.25V20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/><path d="M17 12.5V20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/><path d="M20.5 8.00758C20.5 10.4238 18.933 12.25 17 12.25C15.067 12.25 13.5 10.4238 13.5 8.00758C13.5 5.59133 15.067 3.5 17 3.5C18.933 3.5 20.5 5.59133 20.5 8.00758Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 3.75V9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>';xr._solidSVG='<path d="M17 2.75C15.7463 2.75 14.669 3.42888 13.9303 4.39093C13.1911 5.35359 12.75 6.64303 12.75 8.00758C12.75 10.4237 14.1789 12.5161 16.25 12.927V21H17.75V12.927C19.8211 12.5161 21.25 10.4237 21.25 8.00758C21.25 6.64303 20.8089 5.35359 20.0697 4.39093C19.331 3.42888 18.2537 2.75 17 2.75Z" fill="currentColor"/><path d="M4.5 3H3V9C3 10.9528 4.39935 12.5787 6.25 12.9298V21H7.75V12.9298C9.60065 12.5787 11 10.9528 11 9V3H9.5V9C9.5 10.3807 8.38071 11.5 7 11.5C5.61929 11.5 4.5 10.3807 4.5 9V3Z" fill="currentColor"/><path d="M7.75 3H6.25V10H7.75V3Z" fill="currentColor"/>';xr._name="knife-spoon";xr=a([k("gds-icon-knife-spoon")],xr);var yr=class extends L{};yr._regularSVG='<path d="M12 3.75V15M12 3.75L16.5 8.25M12 3.75L7.5 8.25M20.25 12.75V20.25H3.75V12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';yr._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967L17.0303 7.71967C17.3232 8.01256 17.3232 8.48744 17.0303 8.78033C16.7374 9.07322 16.2626 9.07322 15.9697 8.78033L12.75 5.56066V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V5.56066L8.03033 8.78033C7.73744 9.07322 7.26256 9.07322 6.96967 8.78033C6.67678 8.48744 6.67678 8.01256 6.96967 7.71967L11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 12C4.16421 12 4.5 12.3358 4.5 12.75V19.5H19.5V12.75C19.5 12.3358 19.8358 12 20.25 12C20.6642 12 21 12.3358 21 12.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V12.75C3 12.3358 3.33579 12 3.75 12Z" fill="currentColor"/>';yr._name="arrow-out-of-box";yr=a([k("gds-icon-arrow-out-of-box")],yr);var ju=R`
  :host {
    isolation: isolate;
  }

  [part='mask'] {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
  }

  [part='content'] {
    z-index: 1;
    position: absolute;
    inset: 0;
  }
`,Ru=ju,st=class extends me{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.inset="0"}render(){return Pr`<div part="mask"></div>
      <div part="content"><slot></slot></div>`}};st.styles=[X,Ru];a([y({selector:'[part="mask"]',valueTemplate:e=>{const[t]=e.split("/");return`linear-gradient(to ${t}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`}})],st.prototype,"mask-image",2);a([y({valueTemplate:e=>e,selector:'[part="mask"]'})],st.prototype,"mask-size",2);a([y({valueTemplate:e=>e,selector:'[part="mask"]'})],st.prototype,"mask-repeat",2);a([y({valueTemplate:e=>e,selector:'[part="mask"]'})],st.prototype,"mask-position",2);a([y({selector:'[part="mask"]',valueTemplate:function(e){const[t,s]=e.split("/");return s?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-background-${t}) ${parseFloat(s)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-background-${t})`}})],st.prototype,"background-color",2);a([y({valueTemplate:e=>e,selector:'[part="mask"]'})],st.prototype,"backdrop-filter",2);st=a([k("gds-mask")],st);var Fu=Object.defineProperty,Nu=Object.getOwnPropertyDescriptor,Iu=(e,t,s,r)=>{for(var o=r>1?void 0:r?Nu(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Fu(t,s,o),o};let Jl=class extends D{connectedCallback(){super.connectedCallback()}render(){return m`
      <gds-card variant="tertiary" padding="l"
        ><gds-flex
          ><gds-card
            variant="tertiary"
            border-radius="0"
            border="0 0 0 4xs"
            padding="0 0 0 m"
            width="100%"
            ><gds-flex justify-content="space-between"
              ><gds-flex flex-direction="column" gap="2xs">
                <gds-text font-size="detail-m" tag="h3"
                  >Rådgivningsmöte Ann Magnusson</gds-text
                ><gds-text font-size="detail-s" tag="p"
                  >Tuesday 16 april 16:00</gds-text
                >
              </gds-flex>
              <gds-theme color-scheme="dark">
                <gds-button rank="tertiary" label="options">
                  <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal></gds-button></gds-theme></gds-flex
          ></gds-card> </gds-flex
      ></gds-card>
    `}};Jl=Iu([j("gds-jit")],Jl);function Bu(){try{return new CSSStyleSheet,!0}catch{return!1}}var Yo,Dr,zr,qo,gs,s1,r1;const Qa=class Qa{constructor(){Gt(this,gs);Gt(this,Yo,!Bu());Gt(this,Dr,new Map);Gt(this,zr,new Map);Gt(this,qo,document.adoptedStyleSheets||[])}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new Qa),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(t,s){if(wt(this,Yo)){const r=Array.isArray(s)?s.map(o=>o.toString()).join(""):s.toString();ln(this,gs,s1).call(this,t,r)}else s.styleSheet&&ln(this,gs,r1).call(this,t,s.styleSheet)}};Yo=new WeakMap,Dr=new WeakMap,zr=new WeakMap,qo=new WeakMap,gs=new WeakSet,s1=function(t,s){let r=wt(this,zr).get(t);r||(r=document.createElement("style"),wt(this,zr).set(t,r)),r.textContent=s,document.head.appendChild(r)},r1=function(t,s){wt(this,Dr).set(t,s),document.adoptedStyleSheets=[...wt(this,qo),...Array.from(wt(this,Dr).values())]};let Ji=Qa;const Qi=new Set;function Gu(){Ji.instance.injectGlobalStyles("dialog-scroll-lock",R`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function Zu(e){if(Qi.add(e),!document.documentElement.classList.contains("gds-scroll-lock")){const t=Yu()+qu();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),t<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${t}px`)}}function Uu(e){Qi.delete(e),Qi.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function Yu(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function qu(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}const Ql="/assets/forest-CySO3eH8.mp4";var Ku=Object.defineProperty,Xu=Object.getOwnPropertyDescriptor,o1=e=>{throw TypeError(e)},Ka=(e,t,s,r)=>{for(var o=r>1?void 0:r?Xu(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Ku(t,s,o),o},Ju=(e,t,s)=>t.has(e)||o1("Cannot "+s),Qu=(e,t,s)=>t.has(e)?o1("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),ed=(e,t,s)=>(Ju(e,t,"access private method"),s),vo,n1,i1;Gu();let Bo=class extends D{constructor(){super(...arguments),Qu(this,vo)}connectedCallback(){super.connectedCallback()}render(){return m` <style>
        @keyframes news--inview {
          from {
            scale: 0.75;
          }
        }
        .news {
          min-height: 391px;
          height: 100%;
          overflow: clip;

          /* scale up animation */
          animation: news--inview linear both;

          /* when a picture crosses a horizontal scrollport */
          animation-timeline: view(y);

          /* animate as element is 10% in, until it reaches 40% */
          animation-range: 0% 30%;
        }

        .news:hover {
          cursor: pointer;
        }

        dialog {
          border: none;
          opacity: 1;

          padding: 0;
          @media (max-width: 768px) {
            margin: 0;
          }
        }

        dialog:modal {
          max-width: 768px;
          max-height: 100vh;
          height: 100vh;

          @media (max-width: 768px) {
            max-width: 100vw;
          }

          opacity: 1;
        }

        dialog:modal::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        .grid {
          overflow: hidden;
          height: 100%;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;

          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
        }

        .grid > * {
          grid-area: 1/1;
        }

        .grid > .button {
          z-index: 2;
          margin: 16px;
          margin-left: auto;
        }

        .image {
          view-transition-name: --news-image;
        }
      </style>
      <dialog>
        <gds-flex flex-direction="column" gap="xl">
          <div class="grid">
            <div class="button">
              <gds-theme colorScheme="dark">
                <gds-button
                  rank="secondary"
                  variant="neutral"
                  size="small"
                  @click="${ed(this,vo,i1)}"
                >
                  <gds-icon-cross-small></gds-icon-cross-small>
                </gds-button>
              </gds-theme>
            </div>
            <gds-video
              class="image"
              src="${Ql}"
              object-fit="cover"
              muted
              autoplay
              loop
            ></gds-video>
          </div>
          <gds-text font-size="heading-l" margin="0 xl 0 xl"
            >Letar du nytt boende?</gds-text
          >
          <gds-text font-size="body-l" margin="0 xl 0 xl"
            >Bostadsköpet är en av livet största affärer och vi är gärna med dig
            hela vägen.</gds-text
          >
          <gds-container margin="2xl xl 2xl xl">
            <tp-savings-calc></tp-savings-calc>
          </gds-container>
        </gds-flex>
      </dialog>
      <gds-card
        class="news"
        border="4xs/primary"
        border-radius="xs"
        overflow="hidden"
        padding="0"
        variant="tertiary"
        @click="${ed(this,vo,n1)}"
      >
        <gds-flex position="relative" height="100%">
          <gds-video
            class="image"
            src="${Ql}"
            object-fit="cover"
            muted
            autoplay
            loop
          ></gds-video>
          <gds-mask
            mask-image="top"
            backdrop-filter="blur(20px)"
            position="absolute"
          >
            <gds-flex
              flex-direction="column"
              justify-content="flex-end"
              padding="l"
              gap="l"
              height="100%"
            >
              <gds-flex flex-direction="column" gap="m">
                <gds-text tag="h3" font-size="heading-s"
                  >Letar du nytt boende?</gds-text
                >
                <gds-text font-size="detail-m"
                  >Bostadsköpet är en av livet största affärer och vi är gärna
                  med dig hela vägen.</gds-text
                >
                <gds-link variant="secondary"
                  ><gds-flex justify-content="space-between" width="100%"
                    ><gds-text>Hur mycket kan du låna?</gds-text
                    ><gds-icon-arrow-right></gds-icon-arrow-right
                  ></gds-flex>
                </gds-link>
              </gds-flex>
            </gds-flex>
          </gds-mask>
        </gds-flex>
      </gds-card>`}};vo=new WeakSet;n1=async function(){const e=await this.dialogElement;e&&document.startViewTransition(()=>{e.showModal(),Zu(e)})};i1=async function(){const e=await this.dialogElement;e&&(e.close(),Uu(e))};Ka([rt(".news")],Bo.prototype,"newsElement",2);Ka([rt("dialog")],Bo.prototype,"dialogElement",2);Bo=Ka([j("tp-news")],Bo);var wr=class extends L{};wr._regularSVG='<path d="M3.75 6.5V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H20.25V8.75H16.25M3.75 6.5C3.75 7.74264 4.75736 8.75 6 8.75H16.25M3.75 6.5C3.75 4.98122 4.98122 3.75 6.5 3.75H16.25V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/><path d="M15.5 15.25C15.9142 15.25 16.25 14.9142 16.25 14.5C16.25 14.0858 15.9142 13.75 15.5 13.75C15.0858 13.75 14.75 14.0858 14.75 14.5C14.75 14.9142 15.0858 15.25 15.5 15.25Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linejoin="round"/>';wr._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3C4.567 3 3 4.567 3 6.5V17.25C3 19.3211 4.67893 21 6.75 21H20.25C20.6642 21 21 20.6642 21 20.25V8.75C21 8.33579 20.6642 8 20.25 8H17V3.75C17 3.33579 16.6642 3 16.25 3H6.5ZM15.5 8V4.5H6.5C5.39543 4.5 4.5 5.39543 4.5 6.5C4.5 7.32843 5.17157 8 6 8H15.5ZM15.5 15.5C16.0523 15.5 16.5 15.0523 16.5 14.5C16.5 13.9477 16.0523 13.5 15.5 13.5C14.9477 13.5 14.5 13.9477 14.5 14.5C14.5 15.0523 14.9477 15.5 15.5 15.5Z" fill="currentColor"/>';wr._name="wallet";wr=a([k("gds-icon-wallet")],wr);const e2={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"};var t2=Object.defineProperty,s2=Object.getOwnPropertyDescriptor,a1=e=>{throw TypeError(e)},Xa=(e,t,s,r)=>{for(var o=r>1?void 0:r?s2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&t2(t,s,o),o},r2=(e,t,s)=>t.has(e)||a1("Cannot "+s),o2=(e,t,s)=>t.has(e)?a1("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),td=(e,t,s)=>(r2(e,t,"access private method"),s),mo,l1,d1;const Yr=[{text:"Todo 1",url:"#"},{text:"Todo 2",url:"#"},{text:"Todo 3",url:"#"},{text:"Todo 1",url:"#"}];let Go=class extends D{constructor(){super(...arguments),o2(this,mo),this.expanded=!window.matchMedia(`(max-width: ${e2.s})`).matches}connectedCallback(){super.connectedCallback()}renderTodo(e){return m`<gds-card
      variant="secondary; hover:information"
      width="100%"
      padding="m"
      shadow="s"
    >
      <gds-flex gap="m" align-items="center">
        <gds-card
          class="icon"
          level="3"
          variant="tertiary"
          border-radius="max"
          padding="s"
          justify-content="center"
          align-items="center"
        >
          <gds-icon-wallet height="20" width="20"></gds-icon-wallet>
        </gds-card>
        <gds-text font-size="detail-m" margin="0 auto 0 0"
          >${e.text}</gds-text
        >
        <gds-icon-chevron-right></gds-icon-chevron-right>
      </gds-flex>
    </gds-card>`}firstUpdated(){setTimeout(()=>{var e;this.style.setProperty("--todo-height",`${(e=this.todo)==null?void 0:e.getBoundingClientRect().height}px`)},0)}onRef(e){e&&e.classList.add("loaded")}render(){return m` <style>
        :host {
          --duration: 1s;
          --todo-height: 83px;
        }

        .stack {
          cursor: pointer;
          pointer-events: all;

          transition: max-height var(--duration);
          max-height: 108px;
        }

        .stack[aria-expanded='true'] {
          cursor: default;
          pointer-events: none;
          max-height: calc(
            calc(var(--gds-space-m, 0) * ${Yr.length-1}) +
              calc(var(--todo-height, 0) * ${Yr.length})
          );
        }

        .todo.loaded {
          transition: all var(--duration);
        }

        .todo {
          height: 100%;
          width: 100%;
          z-index: calc(${Yr.length} - var(--todo-index));
          pointer-events: none;

          transform: translateY(
              calc(
                calc(
                    calc(var(--gds-space-m, 0) / 2) * var(--todo-index, 0) * -1
                  ) + calc(var(--todo-height, 0) * var(--todo-index, 0) * -1)
              )
            )
            scale(calc(1 + calc(var(--todo-index, 0) * -0.01)))
            perspective(1500px);
        }

        [aria-expanded='true'] .todo {
          transform: translateY(0) scale(1) perspective(none);
          pointer-events: all;
        }

        .expand-button {
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .todo:hover .icon {
          background-color: var(--gds-color-l2-background-primary);
        }
      </style>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex justify-content="space-between">
          <gds-text tag="h2" font-size="detail-m">Att göra</gds-text>
          <button class="expand-button" @click="${td(this,mo,d1)}">
            <gds-text font-size="detail-m"
              >${this.expanded?"Visa färre":"Visa allt"}</gds-text
            >
          </button>
        </gds-flex>

        <gds-flex
          @click="${td(this,mo,l1)}"
          class="stack"
          flex-direction="column"
          gap="m"
          aria-expanded="${this.expanded}"
        >
          ${Yr.map((e,t)=>m`<gds-link
                class="todo"
                style="--todo-index: ${t};"
                href="${e.url}"
                variant="hidden"
                ${js(this.onRef)}
              >
                ${this.renderTodo(e)}
              </gds-link>`)}</gds-flex
        >
      </gds-flex>`}};mo=new WeakSet;l1=function(){this.expanded||(this.expanded=!0)};d1=function(){this.expanded=!this.expanded};Xa([g({type:Boolean})],Go.prototype,"expanded",2);Xa([oe(".todo")],Go.prototype,"todo",2);Go=Xa([j("tp-todos")],Go);var n2=Object.defineProperty,i2=Object.getOwnPropertyDescriptor,a2=(e,t,s,r)=>{for(var o=r>1?void 0:r?i2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&n2(t,s,o),o};let sd=class extends D{connectedCallback(){super.connectedCallback()}render(){return m` <gds-card variant="secondary" shadow="s" padding="l">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex gap="s" align>
          <gds-container>
            <gds-container
              width="16px"
              height="16px"
              background="positive"
              border-radius="max"
              level="3"
            ></gds-container>
          </gds-container>
          <gds-flex flex-direction="column">
            <gds-text font-size="detail-m">1 506 408,40</gds-text>
            <gds-text color="secondary" font-size="detail-xs"
              >Sparande totalt i Avanza</gds-text
            >
          </gds-flex>
        </gds-flex>
        <gds-container>
          <svg
            width="100%"
            height="auto"
            height="auto"
            viewBox="0 0 314 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 51.1468C17.0694 51.1468 14.3785 63.7215 27.8333 63.7215C41.2882 63.7215 39.6736 35.0169 53.6667 35.0169C67.6597 35.0169 65.5069 76 79.5 76C93.493 76 91.8785 51.5089 105.333 51.5089C118.788 51.5089 116.097 36.8603 131.167 36.8603C146.236 36.8603 142.469 45.7482 157 45.7482C171.531 45.7482 167.764 27.6432 182.833 27.6432C197.903 27.6432 194.135 34.6219 208.667 34.6219C223.198 34.6219 220.507 45.1886 234.5 45.1886C248.493 45.1886 246.34 7.23398 260.333 7.23398C274.326 7.23398 271.097 16.5169 286.167 16.5169C301.236 16.5169 299.083 2 312 2"
              stroke="url(#paint0_linear_1153_1337)"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1153_1337"
                x1="0.634644"
                y1="62.6185"
                x2="311.038"
                y2="62.6185"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#35723D" stop-opacity="0" />
                <stop
                  offset="0.233608"
                  stop-color="#35723D"
                  stop-opacity="0.25"
                />
                <stop offset="1" stop-color="#35723D" />
              </linearGradient>
            </defs>
          </svg>
        </gds-container>
      </gds-flex>
    </gds-card>`}};sd=a2([j("tp-savings-outside")],sd);var l2=Object.defineProperty,d2=Object.getOwnPropertyDescriptor,c1=e=>{throw TypeError(e)},Fr=(e,t,s,r)=>{for(var o=r>1?void 0:r?d2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&l2(t,s,o),o},c2=(e,t,s)=>t.has(e)||c1("Cannot "+s),h2=(e,t,s)=>t.has(e)?c1("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Zo=(e,t,s)=>(c2(e,t,"access private method"),s),es,h1,g1,p1,u1;let cs=class extends D{constructor(){super(),h2(this,es),this.hideFooter=!1,this.wide=!1,this.footerSlotOccupied=!1,this.mainSlotOccupied=!1}connectedCallback(){super.connectedCallback()}render(){return m`
      <style>
        .main-slot {
          display: ${this.mainSlotOccupied?"flex":"none"};
        }
      </style>
      <gds-card background="secondary" padding="0" shadow="s" border="none">
        <gds-flex
          flex-direction="column"
          gap="xl"
          padding=${this.wide?"":"l"}
        >
          <gds-flex
            justify-content="space-between"
            align-items="center"
            padding=${this.wide?"l l 0 l":""}
          >
            <slot name="header"></slot>
            <slot name="action"></slot>
          </gds-flex>
          ${Zo(this,es,p1).call(this)}
        </gds-flex>
        ${Zo(this,es,h1).call(this)}
      </gds-card>
    `}};es=new WeakSet;h1=function(){return m`<div style="display: ${this.footerSlotOccupied?"":"none"}">
      <gds-flex
        border="4xs/primary 0 0 0"
        flex-direction="column"
        padding="m l m m"
      >
        <slot name="footer" @slotchange=${Zo(this,es,g1)}></slot>
      </gds-flex>
    </div>`};g1=function(e){const s=e.target.assignedNodes({flatten:!0});this.footerSlotOccupied=s.length>0&&s.some(r=>{var o;return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&((o=r.textContent)==null?void 0:o.trim())!==""})};p1=function(){return m`<gds-flex class="main-slot" flex-direction="column" gap="l">
      <slot @slotchange=${Zo(this,es,u1)}></slot>
    </gds-flex>`};u1=function(e){const s=e.target.assignedNodes({flatten:!0});this.mainSlotOccupied=s.length>0&&s.some(r=>{var o;return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&((o=r.textContent)==null?void 0:o.trim())!==""})};Fr([W()],cs.prototype,"hideFooter",2);Fr([g({type:Boolean})],cs.prototype,"wide",2);Fr([W()],cs.prototype,"footerSlotOccupied",2);Fr([W()],cs.prototype,"mainSlotOccupied",2);cs=Fr([j("tp-card")],cs);var g2=Object.defineProperty,p2=Object.getOwnPropertyDescriptor,u2=(e,t,s,r)=>{for(var o=r>1?void 0:r?p2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&g2(t,s,o),o};let rd=class extends D{connectedCallback(){super.connectedCallback()}render(){return m`<tp-card>
      <gds-text slot="header" font-size="heading-s"> Sparmål </gds-text>
      <gds-button slot="action" size="small" rank="tertiary">
        <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
      </gds-button>
      <tp-list-item>
        <gds-flex
          level="3"
          width="40px"
          height="40px"
          background="positive"
          border-radius="max"
          align-items="center"
          justify-content="center"
          slot="icon"
          color="primary"
        >
          <gds-icon-knife-spoon width="20" height="20"></gds-icon-knife-spoon>
        </gds-flex>

        <gds-flex flex-direction="column" gap="xs" flex="1">
          <gds-flex align-items="center" justify-content="space-between">
            <gds-flex flex-direction="column">
              <gds-text font-size="detail-s" font-weight="book">
                Trip to Paris!
              </gds-text>
              <gds-text font-size="detail-s" color="positive"> 8 000 </gds-text>
            </gds-flex>
            <gds-flex flex-direction="column" align-items="flex-end">
              <gds-text font-size="detail-s" font-weight="book">Kvar</gds-text>
              <gds-text font-size="detail-s" color="positive"> 4000 </gds-text>
            </gds-flex>
          </gds-flex>
          <gds-badge variant="positive">
            Good job! You have saved 20% of your goal.
          </gds-badge>
        </gds-flex>
      </tp-list-item>
    </tp-card>`}};rd=u2([j("tp-savings-goal")],rd);var f2=Object.defineProperty,v2=Object.getOwnPropertyDescriptor,m2=(e,t,s,r)=>{for(var o=r>1?void 0:r?v2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&f2(t,s,o),o};let od=class extends D{constructor(){super(...arguments),this.isCollapsed=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}toggleCollapse(){this.isCollapsed=!this.isCollapsed,this.requestUpdate()}render(){return m` <tp-card gap=${this.isCollapsed?"0":"xl"}>
      <!-- Header -->
      <gds-flex level="2" slot="header" flex-direction="row">
        <gds-flex flex-direction="column" justify-content="space-between">
          <gds-text font-size="detail-s" color="secondary">Sparande</gds-text>
          <gds-text font-size="heading-m">1 506 408,40</gds-text>
        </gds-flex>
      </gds-flex>
      <gds-flex
        level="2"
        slot="action"
        justify-content="center"
        align-items="center"
        gap="s"
      >
        <gds-flex flex-direction="column">
          <gds-text font-size="detail-s" color="secondary" text-align="right"
            >Utveckling</gds-text
          >
          <gds-text font-size="heading-m" color="positive">+15,45%</gds-text>
        </gds-flex>
        <gds-container display="block; s{none}">
          <gds-button
            size="small"
            rank="tertiary"
            @click=${()=>this.toggleCollapse()}
          >
            ${ae(!this.isCollapsed,()=>m`
                <gds-icon-chevron-top color="secondary"></gds-icon-chevron-top>
              `,()=>m`<gds-icon-chevron-right
                  color="secondary"
                ></gds-icon-chevron-right>`)}
          </gds-button>
        </gds-container>
        <gds-container display="none; s{block}">
          <gds-button rank="tertiary" size="small">
            <gds-icon-chevron-right color="secondary"></gds-icon-chevron-right>
          </gds-button>
        </gds-container>
      </gds-flex>
      <!-- /Header end-->

      <!-- body -->
      ${ae(!this.isCollapsed,()=>m`
          <!-- body -->
          <gds-flex
            width="100%"
            justify-content="space-between"
            align-items="center"
            gap="xl"
            id="test"
          >
            <gds-flex flex-direction="column">
              <gds-text color="secondary" display="block; s{none}"
                >Värdepapper</gds-text
              >
              <gds-text display="none; s{block}">Värdepapper</gds-text>
              <gds-container display="block; s{none}">
                <gds-text>56 789,00</gds-text>
              </gds-container>
            </gds-flex>
            <gds-container
              display="none; s{block}"
              margin="0 auto; s{0 0 0 auto}"
            >
              <gds-text>56 789,00</gds-text>
            </gds-container>
            <gds-container
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="89"
                height="45"
                viewBox="0 0 89 45"
                fill="none"
              >
                <path
                  d="M3 28.9733C7.03472 28.9733 6.31424 35.2607 9.91667 35.2607C13.5191 35.2607 13.0868 20.9084 16.8333 20.9084C20.5799 20.9084 20.0035 41.3999 23.75 41.3999C27.4965 41.3999 27.0642 29.1544 30.6667 29.1544C34.2691 29.1544 33.5486 21.8301 37.5833 21.8301C41.618 21.8301 40.6094 26.274 44.5 26.274C48.3906 26.274 47.3819 17.2215 51.4167 17.2215C55.4514 17.2215 54.4427 20.7108 58.3333 20.7108C62.224 20.7108 61.5035 25.9942 65.25 25.9942C68.9965 25.9942 68.4201 7.01689 72.1667 7.01689C75.9132 7.01689 75.0486 11.6583 79.0833 11.6583C83.1181 11.6583 82.5417 4.3999 86 4.3999"
                  stroke="url(#paint0_linear_1481_4301)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1481_4301"
                    x1="2.63444"
                    y1="34.7091"
                    x2="85.7424"
                    y2="34.7091"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#35723D" stop-opacity="0" />
                    <stop
                      offset="0.233608"
                      stop-color="#35723D"
                      stop-opacity="0.25"
                    />
                    <stop offset="1" stop-color="#35723D" />
                  </linearGradient>
                </defs>
              </svg>
            </gds-container>
            <gds-container>
              <gds-container display="none; s{block}">
                <gds-text color="secondary" text-align="right"
                  >Utv. i år</gds-text
                >
              </gds-container>
              <gds-text color="positive">1,99%</gds-text>
            </gds-container>
          </gds-flex>

          <gds-flex
            width="100%"
            justify-content="space-between"
            align-items="center"
            gap="xl"
          >
            <gds-flex flex-direction="column">
              <gds-text color="secondary" display="block; s{none}"
                >Aktier</gds-text
              >
              <gds-text display="none; s{block}">Aktier</gds-text>
              <gds-container display="block; s{none}">
                <gds-text>159 200,00</gds-text>
              </gds-container>
            </gds-flex>
            <gds-container
              display="none; s{block}"
              margin="0 auto; s{0 0 0 auto}"
            >
              <gds-text>159 200,00</gds-text>
            </gds-container>
            <gds-container
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="89"
                height="45"
                viewBox="0 0 89 45"
                fill="none"
              >
                <path
                  d="M3 16.8265C7.03472 16.8265 6.31424 10.5391 9.91667 10.5391C13.5191 10.5391 13.0868 24.8915 16.8333 24.8915C20.5799 24.8915 20.0035 4.3999 23.75 4.3999C27.4965 4.3999 27.0642 16.6455 30.6667 16.6455C34.2691 16.6455 33.5486 23.9697 37.5833 23.9697C41.618 23.9697 40.6094 19.5258 44.5 19.5258C48.3906 19.5258 47.3819 28.5783 51.4167 28.5783C55.4514 28.5783 54.4427 25.089 58.3333 25.089C62.224 25.089 61.5035 19.8056 65.25 19.8056C68.9965 19.8056 68.4201 38.7829 72.1667 38.7829C75.9132 38.7829 75.0486 34.1415 79.0833 34.1415C83.1181 34.1415 82.5417 41.3999 86 41.3999"
                  stroke="url(#paint0_linear_1381_2609)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1381_2609"
                    x1="2.63444"
                    y1="11.0907"
                    x2="85.7424"
                    y2="11.0907"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A63E2A" stop-opacity="0" />
                    <stop
                      offset="0.233608"
                      stop-color="#A63E2A"
                      stop-opacity="0.25"
                    />
                    <stop offset="1" stop-color="#A63E2A" />
                  </linearGradient>
                </defs>
              </svg>
            </gds-container>
            <gds-container>
              <gds-container display="none; s{block}">
                <gds-text color="secondary" text-align="right"
                  >Utv. i år</gds-text
                >
              </gds-container>
              <gds-text color="negative">-5,50%</gds-text>
            </gds-container>
          </gds-flex>

          <gds-flex
            width="100%"
            justify-content="space-between"
            align-items="center"
            gap="xl"
          >
            <gds-flex flex-direction="column">
              <gds-text color="secondary" display="block; s{none}"
                >Konto</gds-text
              >
              <gds-text display="none; s{block}">Konto</gds-text>
              <gds-container display="block; s{none}">
                <gds-text>467 200,00</gds-text>
              </gds-container>
            </gds-flex>
            <gds-container
              display="none; s{block}"
              margin="0 auto; s{0 0 0 auto}"
            >
              <gds-text>467 200,00</gds-text>
            </gds-container>
            <gds-container
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="89"
                height="45"
                viewBox="0 0 89 45"
                fill="none"
              >
                <path
                  d="M3 28.9733C7.03472 28.9733 6.31424 35.2607 9.91667 35.2607C13.5191 35.2607 13.0868 20.9084 16.8333 20.9084C20.5799 20.9084 20.0035 41.3999 23.75 41.3999C27.4965 41.3999 27.0642 29.1544 30.6667 29.1544C34.2691 29.1544 33.5486 21.8301 37.5833 21.8301C41.618 21.8301 40.6094 26.274 44.5 26.274C48.3906 26.274 47.3819 17.2215 51.4167 17.2215C55.4514 17.2215 54.4427 20.7108 58.3333 20.7108C62.224 20.7108 61.5035 25.9942 65.25 25.9942C68.9965 25.9942 68.4201 7.01689 72.1667 7.01689C75.9132 7.01689 75.0486 11.6583 79.0833 11.6583C83.1181 11.6583 82.5417 4.3999 86 4.3999"
                  stroke="url(#paint0_linear_1481_4301)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1481_4301"
                    x1="2.63444"
                    y1="34.7091"
                    x2="85.7424"
                    y2="34.7091"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#35723D" stop-opacity="0" />
                    <stop
                      offset="0.233608"
                      stop-color="#35723D"
                      stop-opacity="0.25"
                    />
                    <stop offset="1" stop-color="#35723D" />
                  </linearGradient>
                </defs>
              </svg>
            </gds-container>
            <gds-container>
              <gds-container display="none; s{block}">
                <gds-text color="secondary" text-align="right"
                  >Utv. i år</gds-text
                >
              </gds-container>
              <gds-text color="positive">7,99%</gds-text>
            </gds-container>
          </gds-flex>

          <gds-flex
            width="100%"
            justify-content="space-between"
            align-items="center"
            gap="xl"
          >
            <gds-flex flex-direction="column">
              <gds-text color="secondary" display="block; s{none}"
                >Kapitalförsäkring</gds-text
              >
              <gds-text display="none; s{block}">Kapitalförsäkring</gds-text>
              <gds-container display="block; s{none}">
                <gds-text>359 200,00</gds-text>
              </gds-container>
            </gds-flex>
            <gds-container
              display="none; s{block}"
              margin="0 auto; s{0 0 0 auto}"
            >
              <gds-text>359 200,00</gds-text>
            </gds-container>
            <gds-container
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="89"
                height="53"
                viewBox="0 0 89 53"
                fill="none"
              >
                <path
                  d="M3 34.1685C7.03472 34.1685 6.31424 41.599 9.91667 41.599C13.5191 41.599 13.0868 24.6372 16.8333 24.6372C20.5799 24.6372 20.0035 48.8545 23.75 48.8545C27.4965 48.8545 27.0642 34.3825 30.6667 34.3825C34.2691 34.3825 33.5486 25.7265 37.5833 25.7265C41.618 25.7265 40.6094 30.9784 44.5 30.9784C48.3906 30.9784 47.3819 20.28 51.4167 20.28C55.4514 20.28 54.4427 24.4038 58.3333 24.4038C62.224 24.4038 61.5035 30.6478 65.25 30.6478C68.9965 30.6478 68.4201 8.22003 72.1667 8.22003C75.9132 8.22003 75.0486 13.7054 79.0833 13.7054C83.1181 13.7054 82.5417 5.12722 86 5.12722"
                  stroke="url(#paint0_linear_1481_4319)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1481_4319"
                    x1="2.63444"
                    y1="40.9472"
                    x2="85.7424"
                    y2="40.9472"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#35723D" stop-opacity="0" />
                    <stop
                      offset="0.233608"
                      stop-color="#35723D"
                      stop-opacity="0.25"
                    />
                    <stop offset="1" stop-color="#35723D" />
                  </linearGradient>
                </defs>
              </svg>
            </gds-container>
            <gds-container>
              <gds-container display="none; s{block}">
                <gds-text color="secondary" text-align="right"
                  >Utv. i år</gds-text
                >
              </gds-container>
              <gds-text color="positive">10,03%</gds-text>
            </gds-container>
          </gds-flex>

          <gds-flex
            width="100%"
            justify-content="space-between"
            align-items="center"
            gap="xl"
          >
            <gds-flex flex-direction="column">
              <gds-text color="secondary" display="block; s{none}"
                >Pensionsförsäkring</gds-text
              >
              <gds-text display="none; s{block}">Pensionsförsäkring</gds-text>
              <gds-container display="block; s{none}">
                <gds-text>634 000,00</gds-text>
              </gds-container>
            </gds-flex>
            <gds-container
              display="none; s{block}"
              margin="0 auto; s{0 0 0 auto}"
            >
              <gds-text>634 000,00</gds-text>
            </gds-container>
            <gds-container
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="89"
                height="45"
                viewBox="0 0 89 45"
                fill="none"
              >
                <path
                  d="M3 28.9733C7.03472 28.9733 6.31424 35.2607 9.91667 35.2607C13.5191 35.2607 13.0868 20.9084 16.8333 20.9084C20.5799 20.9084 20.0035 41.3999 23.75 41.3999C27.4965 41.3999 27.0642 29.1544 30.6667 29.1544C34.2691 29.1544 33.5486 21.8301 37.5833 21.8301C41.618 21.8301 40.6094 26.274 44.5 26.274C48.3906 26.274 47.3819 17.2215 51.4167 17.2215C55.4514 17.2215 54.4427 20.7108 58.3333 20.7108C62.224 20.7108 61.5035 25.9942 65.25 25.9942C68.9965 25.9942 68.4201 7.01689 72.1667 7.01689C75.9132 7.01689 75.0486 11.6583 79.0833 11.6583C83.1181 11.6583 82.5417 4.3999 86 4.3999"
                  stroke="url(#paint0_linear_1481_4301)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1481_4301"
                    x1="2.63444"
                    y1="34.7091"
                    x2="85.7424"
                    y2="34.7091"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#35723D" stop-opacity="0" />
                    <stop
                      offset="0.233608"
                      stop-color="#35723D"
                      stop-opacity="0.25"
                    />
                    <stop offset="1" stop-color="#35723D" />
                  </linearGradient>
                </defs>
              </svg>
            </gds-container>
            <gds-container>
              <gds-container display="none; s{block}">
                <gds-text color="secondary" text-align="right"
                  >Utv. i år</gds-text
                >
              </gds-container>
              <gds-text color="positive">4,03%</gds-text>
            </gds-container>
          </gds-flex>
        `,()=>m``)}
      <!-- body end -->
    </tp-card>`}};od=m2([j("tp-savings")],od);var b2=Object.defineProperty,x2=Object.getOwnPropertyDescriptor,y2=(e,t,s,r)=>{for(var o=r>1?void 0:r?x2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&b2(t,s,o),o};let nd=class extends D{render(){return m`
      <tp-card>
        <!-- Header -->
        <gds-text slot="header" font-size="heading-s"> Accounts </gds-text>
        <gds-button slot="action" size="small" rank="tertiary">
          <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
        </gds-button>
        <!-- /Header -->
        <tp-list-item>
          <gds-flex
            width="40px"
            height="40px"
            background="primary"
            border-radius="max"
            align-items="center"
            justify-content="center"
            slot="icon"
            color="primary"
          >
            <gds-icon-credit-card width="20" height="20"></gds-icon-credit-card>
          </gds-flex>

          <gds-flex flex-direction="column" gap="xs" flex="1">
            <gds-flex align-items="center" justify-content="space-between">
              <gds-flex flex-direction="column">
                <gds-text font-size="detail-m">ISK account</gds-text>
                <gds-text font-size="detail-s" color="secondary">
                  8896 13 320 20
                </gds-text>
              </gds-flex>
              <gds-flex flex-direction="column" align-items="flex-end">
                <gds-text font-size="detail-m">32 000,00</gds-text>
                <gds-text font-size="detail-s" color="secondary">
                  5 december
                </gds-text>
              </gds-flex>
            </gds-flex>
            <gds-badge variant="warning">
              Det saknas pengar för nästa dragning.
            </gds-badge>
          </gds-flex>
        </tp-list-item>
        <tp-list-item>
          <gds-flex
            width="40px"
            height="40px"
            background="primary"
            border-radius="max"
            align-items="center"
            justify-content="center"
            slot="icon"
            color="primary"
          >
            <gds-icon-suitcase-work
              width="20"
              height="20"
            ></gds-icon-suitcase-work>
          </gds-flex>
          <gds-flex flex-direction="column" gap="xs" flex="1">
            <gds-flex align-items="center" justify-content="space-between">
              <gds-flex flex-direction="column">
                <gds-text font-size="detail-m">Salary</gds-text>
                <gds-text font-size="detail-s" color="secondary">
                  6896 20 320 20
                </gds-text>
              </gds-flex>
              <gds-flex flex-direction="column" align-items="flex-end">
                <gds-text font-size="detail-m">47 300,00</gds-text>
                <gds-text font-size="detail-s" color="secondary">
                  6 december
                </gds-text>
              </gds-flex>
            </gds-flex>
          </gds-flex>
        </tp-list-item>
        <tp-list-item>
          <gds-flex
            width="40px"
            height="40px"
            background="primary"
            border-radius="max"
            align-items="center"
            justify-content="center"
            slot="icon"
            color="primary"
          >
            <gds-icon-suitcase-work
              width="20"
              height="20"
            ></gds-icon-suitcase-work>
          </gds-flex>

          <gds-flex flex-direction="column" gap="xs" flex="1">
            <gds-flex align-items="center" justify-content="space-between">
              <gds-flex flex-direction="column">
                <gds-text font-size="detail-m">Pension</gds-text>
                <gds-text font-size="detail-s" color="secondary">
                  2896 48 111 19
                </gds-text>
              </gds-flex>
              <gds-flex flex-direction="column" align-items="flex-end">
                <gds-text font-size="detail-m">32 000,00</gds-text>
                <gds-text font-size="detail-s" color="secondary">
                  7 december
                </gds-text>
              </gds-flex>
            </gds-flex>
          </gds-flex>
        </tp-list-item>

        <!-- Footer -->

        <gds-flex slot="footer" flex-direction="column" padding="0 0 0 xs">
          <tp-list-item>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              slot="icon"
            >
              <rect width="24" height="24" fill="#0000A0" rx="12" />
              <g fill="#fff" clip-path="url(#a)">
                <path
                  d="M18.6596 11.0484c-.6462.047-1.1631.5757-1.2101 1.2218-.047.7637.5522 1.3981 1.304 1.3981.2703 0 .6344-.141.7989-.423v.3877h.5052v-1.2453c.0235-.8224-.6344-1.398-1.398-1.3393Zm.8576 1.3393c-.0235.4347-.3995.7636-.8459.7049-.3407-.047-.6109-.3172-.6579-.6579-.047-.4582.3055-.8459.7519-.8459.3994 0 .7284.3172.7519.7167v.0822ZM15.8869 11.0484c-.6932.0235-1.2806.5522-1.2806 1.3275 0 .7049.5757 1.3041 1.3158 1.3041.517 0 1.0221-.3054 1.2218-.8106l-.5051-.1528c-.094.2115-.3172.3877-.5639.4347-.3525.0705-.6814-.1527-.8107-.3877l1.962-.5404c-.0588-.5169-.5052-1.1983-1.3393-1.1748Zm-.7284 1.2453c0-.2702.1645-.5874.5169-.7166.3995-.1528.7519.047.9046.3289l-1.4215.3877ZM11.5753 11.5771v-.5404c-.4934 0-.6579.2467-.7401.3759v-.2937h-.564V13.6213h.5757v-1.2336c0-.5639.329-.7871.7284-.8106ZM6.39433 12.6227 4.67909 10.602h-.58742v3.0193h.61091v-2.0207l1.73874 2.0324H6.97v-3.031h-.57567v2.0207ZM14.2656 10.3318h-.5404v.9868c-.1292-.1645-.5287-.3054-.8694-.2702-.6461.047-1.163.5757-1.21 1.2218-.047.7637.5521 1.3981 1.304 1.3981.282 0 .6697-.1293.7989-.376v.329h.5052V12.329l.0117-1.9972Zm-.5639 2.0559c-.0235.4347-.3994.7636-.8459.7049-.3407-.047-.6109-.3172-.6579-.6579-.0469-.4582.3055-.8459.7519-.8459.3995 0 .7284.3172.7519.7167v.0822ZM8.62647 11.0367c-.72839 0-1.3158.5874-1.3158 1.3158 0 .7283.58741 1.3158 1.3158 1.3158.72839 0 1.31581-.5875 1.31581-1.3158-.01175-.7284-.59916-1.3158-1.31581-1.3158Zm0 2.0676c-.41119 0-.75189-.3407-.75189-.7518 0-.4112.3407-.7519.75189-.7519.41119 0 .75189.3407.75189.7519 0 .4229-.3407.7518-.75189.7518Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M4.07996 10.32h15.9894v3.36H4.07996z" />
                </clipPath>
              </defs>
            </svg>
            <gds-flex flex-direction="column" gap="xs" flex="1">
              <gds-flex align-items="center" justify-content="space-between">
                <gds-flex flex-direction="column">
                  <gds-text font-size="detail-m">Nordea</gds-text>
                  <gds-text font-size="detail-s" color="secondary">
                    2896 48 111 19
                  </gds-text>
                </gds-flex>
                <gds-flex flex-direction="column" align-items="flex-end">
                  <gds-text font-size="detail-m">10 000,00</gds-text>
                  <gds-text font-size="detail-s" color="secondary">
                    7 december
                  </gds-text>
                </gds-flex>
              </gds-flex>
            </gds-flex>
          </tp-list-item>
        </gds-flex>
      </tp-card>
    `}};nd=y2([j("tp-accounts")],nd);const w2="/assets/acne-CDrPujUB.svg",_2="/assets/ica-DL3rRfwZ.svg",C2="/assets/swish-B-td8wCi.svg";var k2=Object.defineProperty,$2=Object.getOwnPropertyDescriptor,S2=(e,t,s,r)=>{for(var o=r>1?void 0:r?$2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&k2(t,s,o),o};let id=class extends D{connectedCallback(){super.connectedCallback()}renderIca(){return m`<img src="${_2}" alt="ICA Logo" />`}renderSwish(){return m`<img src="${C2}" alt="Swish Logo" />`}renderAcne(){return m`<img src="${w2}" alt="Acne Logo" />`}render(){return m` <style>
        /* ::-webkit-scrollbar {
          display: none;
        } */
        .item-wrapper {
          overflow-x: scroll;
          scroll-snap-type: x mandatory;

          scroll-behavior: smooth;
        }
        .item {
          scroll-snap-align: center;
        }

        .item-wrapper::-webkit-scrollbar {
          max-width: 10px;
          max-height: 10px;
          overflow: hidden;
        }
        .item-wrapper::-webkit-scrollbar-thumb {
          background: linear-gradient(
            to right,
            transparent,
            transparent 20%,
            transparent 20%,
            transparent 40%,
            #35723d 40%,
            #35723d 60%,
            transparent 60%,
            transparent 80%,
            transparent 80%,
            transparent
          );
        }
        .item-wrapper::-webkit-scrollbar-track {
          background: transparent;
        }
      </style>
      <gds-card variant="secondary" padding="0 0 m 0"
        ><gds-flex padding="m m 0 m" justify-content="space-between"
          ><gds-text font-size="preamble-s" tag="h3">Transaktioner</gds-text
          ><gds-theme color-scheme="light"
            ><gds-button rank="tertiary" label="options">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal></gds-button></gds-theme
        ></gds-flex>
        <gds-flex
          class="item-wrapper"
          margin="0 0 l 0"
          padding="xl m xl m"
          gap="s"
          width="100%"
        >
          <gds-card level="1" class="item" padding="0" min-width="40%">
            <gds-flex place-items="center" flex-direction="column">
              <gds-card level="1" padding="0 0 m 0"
                >${this.renderIca()}</gds-card
              >
              <gds-text font-size="detail-s" tag="p">Livsmedel</gds-text
              ><gds-card level="1" padding="0" margin="3xs 0 2xs 0"
                ><gds-text font-size="detail-m" tag="p"
                  >ICA Sabbatsberg</gds-text
                ></gds-card
              >
              <gds-text font-size="detail-m" tag="p"
                >-240,00</gds-text
              ></gds-flex
            ></gds-card
          >
          <gds-card level="1" class="item" padding="0" min-width="40%">
            <gds-flex place-items="center" flex-direction="column">
              <gds-card level="1" padding="0 0 m 0"
                >${this.renderSwish()}</gds-card
              >
              <gds-text font-size="detail-s">Inkomst</gds-text>
              <gds-card level="1" padding="0" margin="2xs 0 0 0">
                <gds-text font-size="detail-m">Swish Tobbe</gds-text>
              </gds-card>
              <gds-text color="positive" font-size="detail-m"
                >500,00</gds-text
              ></gds-flex
            ></gds-card
          >
          <gds-card level="1" class="item" padding="0" min-width="40%">
            <gds-flex place-items="center" flex-direction="column">
              <gds-card level="1" padding="0 0 m 0"
                >${this.renderIca()}</gds-card
              >
              <gds-text font-size="detail-s" tag="p">Livsmedel</gds-text
              ><gds-card level="1" padding="0" margin="3xs 0 2xs 0"
                ><gds-text font-size="detail-m" tag="p"
                  >ICA Sabbatsberg</gds-text
                ></gds-card
              >
              <gds-text font-size="detail-m" tag="p"
                >-345,50</gds-text
              ></gds-flex
            ></gds-card
          >
          <gds-card level="1" class="item" padding="0" min-width="40%">
            <gds-flex place-items="center" flex-direction="column">
              <gds-card level="1" padding="0 0 m 0"
                >${this.renderIca()}</gds-card
              >
              <gds-text font-size="detail-s">Livsmedel</gds-text>
              <gds-card level="1" padding="0" margin="2xs 0 0 0">
                <gds-text font-size="detail-m">ICA Sabbatsberg</gds-text>
              </gds-card>
              <gds-text font-size="detail-m">-488,00</gds-text></gds-flex
            ></gds-card
          >
        </gds-flex>
      </gds-card>`}};id=S2([j("gds-carousel-trans")],id);var M2=Object.defineProperty,E2=Object.getOwnPropertyDescriptor,T2=(e,t,s,r)=>{for(var o=r>1?void 0:r?E2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&M2(t,s,o),o};let ad=class extends D{render(){return m`
      <tp-card>
        <!-- Header -->
        <gds-text slot="header" font-size="heading-s"> Kort </gds-text>
        <gds-button slot="action" size="small" rank="tertiary">
          <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
        </gds-button>
        <!-- /Header -->
        <tp-list-item>
          <gds-flex
            width="40px"
            height="40px"
            background="primary"
            border-radius="max"
            align-items="center"
            justify-content="center"
            slot="icon"
            color="primary"
          >
            <gds-icon-credit-card width="20" height="20"></gds-icon-credit-card>
          </gds-flex>

          <gds-flex flex-direction="column" gap="xs" flex="1">
            <gds-flex align-items="center" justify-content="space-between">
              <gds-flex flex-direction="column">
                <gds-text font-size="detail-m">SEB Debit</gds-text>
                <gds-text font-size="detail-s" color="secondary">
                  •••• 0329
                </gds-text>
              </gds-flex>
            </gds-flex>
          </gds-flex>
        </tp-list-item>
        <tp-list-item>
          <gds-flex
            width="40px"
            height="40px"
            background="tertiary"
            border-radius="max"
            align-items="center"
            justify-content="center"
            slot="icon"
            color="tertiary"
          >
            <gds-icon-credit-card width="20" height="20"></gds-icon-credit-card>
          </gds-flex>

          <gds-flex flex-direction="column" gap="xs" flex="1">
            <gds-flex align-items="center" justify-content="space-between">
              <gds-flex flex-direction="column">
                <gds-text font-size="detail-m">SEB Carbon</gds-text>
                <gds-text font-size="detail-s" color="secondary">
                  •••• 2864
                </gds-text>
              </gds-flex>
            </gds-flex>
          </gds-flex>
        </tp-list-item>
        <tp-list-item>
          <gds-flex
            width="40px"
            height="40px"
            background="warning"
            border-radius="max"
            align-items="center"
            justify-content="center"
            slot="icon"
            color="warning"
          >
            <gds-icon-credit-card width="20" height="20"></gds-icon-credit-card>
          </gds-flex>

          <gds-flex flex-direction="column" gap="xs" flex="1">
            <gds-flex align-items="center" justify-content="space-between">
              <gds-flex flex-direction="column">
                <gds-text font-size="detail-m">
                  Eurocard Corporate Gold
                </gds-text>
                <gds-text font-size="detail-s" color="secondary">
                  •••• 4231
                </gds-text>
              </gds-flex>
            </gds-flex>
          </gds-flex>
        </tp-list-item>
      </tp-card>
    `}};ad=T2([j("tp-cards")],ad);var A2=Object.defineProperty,O2=Object.getOwnPropertyDescriptor,L2=(e,t,s,r)=>{for(var o=r>1?void 0:r?O2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&A2(t,s,o),o};let ld=class extends D{render(){return m`
      <tp-card>
        <!-- Header -->
        <gds-text slot="header" font-size="heading-s"> Transactions </gds-text>
        <gds-button slot="action" size="small" rank="tertiary">
          <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
        </gds-button>
        <!-- /Header -->
        <tp-list-item>
          <gds-flex
            level="3"
            width="40px"
            height="40px"
            background="positive"
            border-radius="max"
            align-items="center"
            justify-content="center"
            slot="icon"
            color="primary"
          >
            <gds-icon-knife-spoon width="20" height="20"></gds-icon-knife-spoon>
          </gds-flex>

          <gds-flex flex-direction="column" gap="xs" flex="1">
            <gds-flex align-items="center" justify-content="space-between">
              <gds-flex flex-direction="column">
                <gds-text font-size="detail-m">Mäster Anders</gds-text>
                <gds-text font-size="detail-s" color="secondary">
                  Restaurant
                </gds-text>
              </gds-flex>
              <gds-flex flex-direction="column" align-items="flex-end">
                <gds-text font-size="detail-m">32 000,00</gds-text>
                <gds-text font-size="detail-s" color="secondary">
                  5 december
                </gds-text>
              </gds-flex>
            </gds-flex>
          </gds-flex>
        </tp-list-item>
        <tp-list-item>
          <gds-flex
            level="3"
            width="40px"
            height="40px"
            background="blue-02"
            border-radius="max"
            align-items="center"
            justify-content="center"
            slot="icon"
            color="primary"
          >
            <gds-icon-fashion width="20" height="20"></gds-icon-fashion>
          </gds-flex>
          <gds-flex flex-direction="column" gap="xs" flex="1">
            <gds-flex align-items="center" justify-content="space-between">
              <gds-flex flex-direction="column">
                <gds-text font-size="detail-m">ACNE</gds-text>
                <gds-text font-size="detail-s" color="secondary">
                  Shopping
                </gds-text>
              </gds-flex>
              <gds-flex flex-direction="column" align-items="flex-end">
                <gds-text font-size="detail-m">47 300,00</gds-text>
                <gds-text font-size="detail-s" color="secondary">
                  6 december
                </gds-text>
              </gds-flex>
            </gds-flex>
          </gds-flex>
        </tp-list-item>
        <tp-list-item>
          <gds-flex
            level="3"
            width="40px"
            height="40px"
            background="negative"
            border-radius="max"
            align-items="center"
            justify-content="center"
            slot="icon"
            color="primary"
          >
            <gds-icon-store width="20" height="20"></gds-icon-store>
          </gds-flex>

          <gds-flex flex-direction="column" gap="xs" padding="0 0 m 0" flex="1">
            <gds-flex align-items="center" justify-content="space-between">
              <gds-flex flex-direction="column">
                <gds-text font-size="detail-m">Ica Sabbatsberg</gds-text>
                <gds-text font-size="detail-s" color="secondary">
                  Food
                </gds-text>
              </gds-flex>
              <gds-flex flex-direction="column" align-items="flex-end">
                <gds-text font-size="detail-m">32 000,00</gds-text>
                <gds-text font-size="detail-s" color="secondary">
                  7 december
                </gds-text>
              </gds-flex>
            </gds-flex>
          </gds-flex>
        </tp-list-item>

        <!-- Footer -->
        <gds-flex
          slot="footer"
          justify-content="space-between"
          align-items="center"
          flex="1"
        >
          <gds-text> Show more </gds-text>
          <gds-button size="small" rank="tertiary">
            <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
          </gds-button>
        </gds-flex>
      </tp-card>
    `}};ld=L2([j("tp-transactions")],ld);var D2=Object.defineProperty,z2=Object.getOwnPropertyDescriptor,V2=(e,t,s,r)=>{for(var o=r>1?void 0:r?z2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&D2(t,s,o),o};let dd=class extends D{connectedCallback(){super.connectedCallback()}render(){return m`
      <gds-flex gap="s">
        <gds-flex>
          <slot name="icon"></slot>
        </gds-flex>
        <gds-flex flex="1">
          <slot></slot>
        </gds-flex>
        <gds-flex>
          <gds-button size="small" rank="tertiary">
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </gds-flex>
      </gds-flex>
    `}};dd=V2([j("tp-list-item")],dd);var P2=Object.defineProperty,H2=Object.getOwnPropertyDescriptor,W2=(e,t,s,r)=>{for(var o=r>1?void 0:r?H2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&P2(t,s,o),o};let cd=class extends D{createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return m`
      <gds-flex width="100%" flex-direction="column" gap="xl">
        <gds-flex justify-content="space-between">
          <gds-flex flex-direction="column">
            <gds-text tag="h1" font-size="heading-l">Hej!</gds-text>
            <gds-text tag="h2" font-size="heading-l">Whats going on?</gds-text>
          </gds-flex>
          <gds-flex gap="xs">
            <gds-button rank="secondary">
              <gds-icon-arrow-left-right></gds-icon-arrow-left-right>
            </gds-button>
            <gds-button rank="secondary">
              <gds-icon-plus-large></gds-icon-plus-large>
            </gds-button>
            <gds-button rank="secondary">
              <gds-icon-calendar></gds-icon-calendar>
            </gds-button>
            <gds-button rank="secondary">
              Genvägar
              <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
            </gds-button>
          </gds-flex>
        </gds-flex>
        <gds-grid columns="1; s{3}" gap="xl">
          <tp-transactions></tp-transactions>
          <tp-accounts></tp-accounts>
          <tp-todos></tp-todos>
          <tp-cards></tp-cards>
          <gds-carousel-trans></gds-carousel-trans>
          <gds-flex flex-direction="column" gap="m">
            <tp-savings-outside></tp-savings-outside>
            <tp-savings-goal></tp-savings-goal>
          </gds-flex>
          <gds-jit></gds-jit>
        </gds-grid>
        <gds-card max-width="max-content">
          <tp-quicklinks></tp-quicklinks>
        </gds-card>

        <!-- <gds-grid columns="2" gap="l">
          <tp-savings></tp-savings>
        </gds-grid> -->

        <tp-savings></tp-savings>

        <tp-news></tp-news>
      </gds-flex>
    `}};cd=W2([j("gds-dashboard")],cd);var j2=R`
  :host {
    font-size: var(--gds-text-size-body-m);
    line-height: var(--gds-text-line-height-body-m);
    --default-border: 1px solid
      color-mix(in srgb, currentColor, transparent 80%);
    letter-spacing: 0.0125rem;
  }

  :host > :first-child {
    margin-top: 0;
  }

  /*
  * typography
  * -----------------------------------------------------------
  */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0.6lh;
    margin-bottom: 0.3lh;
  }

  p {
    margin-bottom: 1lh;
    max-width: 80ch;
  }

  blockquote {
    margin: unset;
    margin-block: 2lh;
    border-left: 0.2rem solid currentColor;
    padding-left: 2ch;
    max-width: 40ch;
  }

  s {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-underline-offset: -0.22lh;
  }

  mark {
    color: currentColor;
    background-color: color-mix(in srgb, currentColor, transparent 80%);
  }

  /*
  * lists
  * -----------------------------------------------------------
  */
  ul,
  ol,
  li {
    margin: 0 0 0 1ch;
    padding: 0 0 0.3lh 0;
  }
  li:last-child {
    padding: 0;
  }

  ul li::marker {
    content: '– ';
  }

  /*
  * figure
  * -----------------------------------------------------------
  */
  figure {
    margin: 0;
    padding: 0;
    & img {
      display: block;
    }
  }
  figcaption {
    font-size: smaller;
    margin-block-start: 0.4lh;
  }

  /*
  * table
  * -----------------------------------------------------------
  */
  table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    border: var(--default-border);
    border-radius: var(--gds-space-s);
  }
  th {
    font-weight: var(--gds-text-weight-book);
    text-align: left;
    border-bottom: var(--default-border);
    border-left: transparent;
    border-right: transparent;
    color: var(--gds-color-l3-content-secondary);
  }

  th:not(:last-child) {
    border-right: var(--default-border);
  }

  th,
  td {
    padding: 0.3lh 2ch;
  }
  td:not(:last-child) {
    border-right: var(--default-border);
  }
  tr:nth-child(even) td {
    background: color-mix(in srgb, currentColor, transparent 95%);
  }

  /*
  * Details
  * -----------------------------------------------------------
  */
  details {
    border-top: solid var(--gds-space-4xs) var(--gds-color-l3-border-tertiary);
    font-size: var(--gds-text-size-body-m);
    line-height: var(--gds-text-line-height-body-m);
    color: var(--gds-color-l2-content-secondary);
  }

  summary {
    font-weight: var(--gds-text-weight-regular);
    list-style: none;
    padding: 0.4lh 0.2ch;
    font-size: var(--gds-text-size-body-l);
    line-height: var(--gds-text-line-height-body-l);
    color: var(--gds-color-l2-content-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
    outline-offset: var(--gds-space-2xs);
    outline-color: currentColor;

    &:focus-visible {
      border-radius: var(--gds-space-2xs);
    }
  }

  summary::after {
    content: '+';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    font-weight: var(--gds-text-weight-regular);
    font-size: var(--gds-text-size-body-l);
  }

  details[open] summary::after {
    content: '-';
  }

  details[open] {
    margin-bottom: 1lh;
  }

  details[open] summary {
    border-bottom: var(--gds-space-4xs) solid
      var(--gds-color-l3-border-tertiary);
  }
`,Uo=class extends U{querySelectorAll(e){return this.shadowRoot?this.shadowRoot.querySelectorAll(e):new NodeList}querySelector(e){return this.shadowRoot?this.shadowRoot.querySelector(e):null}get innerHTML(){var e;return((e=this.shadowRoot)==null?void 0:e.innerHTML)||""}set innerHTML(e){this.shadowRoot&&(this.shadowRoot.innerHTML=e)}connectedCallback(){super.connectedCallback(),this._captureDOM()}_captureDOM(){!this.shadowRoot||this.childNodes.length===0||this.shadowRoot.replaceChildren(...Array.from(this.childNodes))}};Uo.styles=[X,Td,j2];a([ya()],Uo.prototype,"_captureDOM",1);Uo=a([k("gds-rich-text")],Uo);var R2=Object.defineProperty,F2=Object.getOwnPropertyDescriptor,f1=e=>{throw TypeError(e)},v1=(e,t,s,r)=>{for(var o=r>1?void 0:r?F2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&R2(t,s,o),o},N2=(e,t,s)=>t.has(e)||f1("Cannot "+s),I2=(e,t,s)=>t.has(e)?f1("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),yn=(e,t,s)=>(N2(e,t,"access private method"),s),Os,bo;let ea=class extends D{constructor(){super(...arguments),I2(this,Os),this.viewOptions={hasAccounts:!1,hasSavings:!1,hasCards:!1}}createRenderRoot(){return this}render(){return m`
      <gds-container display="block; m{none}">
        <gds-card variant="secondary" padding="m s" border-radius="0 0 s s">
          <tp-quicklinks></tp-quicklinks>
        </gds-card>
      </gds-container>
      <gds-container display="none; m{block}">
        <gds-flex
          justify-content="space-between"
          flex-direction="column-reverse; m{row}"
          gap="l"
          padding="4xl 4xl 0 4xl"
        >
          <gds-flex flex-direction="column">
            <gds-text tag="h1" font-size="heading-s; s{display-l}">
              Hey Josephine!
            </gds-text>
            <gds-flex>
              <gds-text tag="h2" font-size="display-l" color="secondary">
                Let’s set up your
                <gds-text color="positive" display="inline-block">
                  everyday view!</gds-text
                >
              </gds-text>
            </gds-flex>
          </gds-flex>
          <gds-flex gap="xs" justify-content="center">
            <gds-flex gap="m">
              <gds-button rank="secondary">
                <gds-icon-arrow-left-right></gds-icon-arrow-left-right>
              </gds-button>
              <gds-button rank="secondary" title="test">
                <gds-icon-plus-large></gds-icon-plus-large>
              </gds-button>
              <gds-button rank="secondary">
                <gds-icon-calendar></gds-icon-calendar>
              </gds-button>

              <gds-popover>
                <div slot="trigger" style="max-height: 48px">
                  <gds-container display="s{none}">
                    <gds-button rank="secondary">
                      <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
                    </gds-button>
                  </gds-container>
                  <gds-container display="none; s{block}">
                    <gds-button rank="secondary">
                      Shortcuts
                      <gds-icon-chevron-bottom
                        slot="trail"
                      ></gds-icon-chevron-bottom>
                    </gds-button>
                  </gds-container>
                </div>
                <gds-menu-item>
                  <label class="form-control"
                    >Has accounts
                    <input
                      type="checkbox"
                      @change=${e=>yn(this,Os,bo).call(this,{...this.viewOptions,hasAccounts:e.target.checked})}
                    />
                    <i></i>
                  </label>
                </gds-menu-item>
                <gds-menu-item>
                  <label class="form-control"
                    >Has savings
                    <input
                      type="checkbox"
                      @change=${e=>yn(this,Os,bo).call(this,{...this.viewOptions,hasSavings:e.target.checked})}
                    />
                    <i></i>
                  </label>
                </gds-menu-item>
                <gds-menu-item>
                  <label class="form-control">
                    Has cards
                    <input
                      type="checkbox"
                      @change=${e=>yn(this,Os,bo).call(this,{...this.viewOptions,hasCards:e.target.checked})}
                    />
                    <i></i>
                  </label>
                </gds-menu-item>
              </gds-popover>
            </gds-flex>
          </gds-flex>
        </gds-flex>
      </gds-container>
    `}};Os=new WeakSet;bo=function(e){this.viewOptions=e,this.dispatchEvent(new CustomEvent("view-options-change",{detail:{view:e},bubbles:!0,composed:!0}))};v1([W()],ea.prototype,"viewOptions",2);ea=v1([j("tp-page-header")],ea);var B2=Object.defineProperty,G2=Object.getOwnPropertyDescriptor,m1=(e,t,s,r)=>{for(var o=r>1?void 0:r?G2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&B2(t,s,o),o};let ta=class extends D{constructor(){super(...arguments),this.active=!1}render(){return m`
      <gds-container
        border-radius="max"
        width=${this.active?"16px":"6px"}
        height="6px"
        level="3"
        background="positive; hover:primary"
        cursor="pointer"
        transition="all 0.4s"
        transform="hover:scaleX(1.2)"
      ></gds-container>
    `}};m1([g({type:Boolean})],ta.prototype,"active",2);ta=m1([j("tp-step-bullet")],ta);var Z2=Object.defineProperty,U2=Object.getOwnPropertyDescriptor,b1=(e,t,s,r)=>{for(var o=r>1?void 0:r?U2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Z2(t,s,o),o};let sa=class extends D{render(){return m`
      <style>
        :host {
          display: contents;
        }
        .account {
          animation-name: tp-scale, tp-scale;
          animation-fill-mode: both;
          animation-timing-function: ease-in-out;
          animation-direction: normal, reverse;
          animation-timeline: view(x);
          animation-range:
            entry 0% entry 60%,
            exit -40% exit 40%;
          scale: 1;
          opacity: 1;
          filter: blur(0px);
        }

        @keyframes tp-scale {
          0% {
            scale: 0.8;
            opacity: 0.4;
            filter: blur(14px);
          }
        }
      </style>
      <gds-card variant=${this.name} part="account" class="account">
        <gds-flex align-items="center" justify-content="center" padding="xl">
          <slot></slot>
        </gds-flex>
      </gds-card>
    `}};b1([g({type:String})],sa.prototype,"name",2);sa=b1([j("tp-accounts-card")],sa);var Y2=Object.defineProperty,q2=Object.getOwnPropertyDescriptor,x1=(e,t,s,r)=>{for(var o=r>1?void 0:r?q2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Y2(t,s,o),o};let ra=class extends D{constructor(){super(...arguments),this.isModalOpen=!1}handleCardClick(){this.isModalOpen=!0}closeModal(){this.isModalOpen=!1}handleKeyDown(e){e.key==="Escape"&&(this.isModalOpen=!1)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.handleKeyDown.bind(this))}disconnectedCallback(){window.removeEventListener("keydown",this.handleKeyDown.bind(this)),super.disconnectedCallback()}render(){return m`
      <style>
        :host {
          --steps: 3;
          --space: var(--gds-space-xl);
        }

        .car {
          display: flex;
          overflow-x: scroll;
          scroll-snap-type: x mandatory;
          width: 100%;
          gap: 32px;
          position: relative;
          scrollbar-width: none;
          box-sizing: border-box;
        }

        tp-accounts-card::part(account) {
          scroll-snap-align: center;
          scroll-margin-inline-start: var(--space);
          --width: calc(100% - var(--space) * (var(--steps) - 1));
          min-inline-size: calc(var(--width) / (var(--steps) - 1));
          aspect-ratio: 3 / 2;
        }

        .actionsheet {
          @starting-style {
            opacity: 0;
            transform: translateX(100%);
          }

          @media screen and (max-width: 768px) {
            @starting-style {
              transform: translateY(100%);
            }
          }
        }
      </style>
      <tp-card wide>
        <gds-text slot="header" font-size="heading-s">Transaction</gds-text>
        <gds-button slot="action" size="small" rank="tertiary">
          <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
        </gds-button>
        <gds-flex flex-direction="column" gap="l" padding="0 0 l 0">
          <div class="car" gap="s">
            <tp-accounts-card @click=${this.handleCardClick} name="negative"
              >ICA</tp-accounts-card
            >
            <tp-accounts-card @click=${this.handleCardClick} name="notice"
              >THIS</tp-accounts-card
            >
            <tp-accounts-card @click=${this.handleCardClick} name="green-01"
              >THAT</tp-accounts-card
            >
            <tp-accounts-card @click=${this.handleCardClick} name="copper-01"
              >Coppa</tp-accounts-card
            >
          </div>
          <gds-flex align-items="center" justify-content="center" gap="2xs">
            <tp-step-bullet step="s1"></tp-step-bullet>
            <tp-step-bullet step="s2" active></tp-step-bullet>
            <tp-step-bullet step="s3"></tp-step-bullet>
            <tp-step-bullet step="s4"></tp-step-bullet>
          </gds-flex>
        </gds-flex>
      </tp-card>
      ${this.isModalOpen?m`
            <gds-flex
              position="fixed"
              inset="0"
              background="#00000040"
              z-index="20"
              align-items="flex-end"
              flex-direction="row; m{column}"
            >
              <gds-container
                width="100%; m{25vw}"
                background="#fef5f3"
                level="2"
                height="90vh; m{100%}"
                transition="all 0.2s"
                class="actionsheet"
              >
                <gds-flex padding="l" width="100%" justify-content="flex-end">
                  <gds-button @click=${this.closeModal} rank="tertiary">
                    <gds-icon-cross-small></gds-icon-cross-small>
                  </gds-button>
                </gds-flex>
                <gds-flex
                  flex-direction="column"
                  justify-content="center"
                  align-items="center"
                  padding="l"
                  gap="2xl"
                >
                  <gds-card variant="negative" max-width="max-content"
                    >ICA</gds-card
                  >
                  <gds-card variant="secondary">THIS</gds-card>
                </gds-flex>
              </gds-container>
            </gds-flex>
          `:B}
    `}};x1([W()],ra.prototype,"isModalOpen",2);ra=x1([j("tp-accounts-modal")],ra);var _r=class extends L{};_r._regularSVG='<path d="M19.2618 3.75V7.75H15.2618M4.75 20.25V16.25H8.75M3.81383 13.0312C3.7717 12.6934 3.75 12.3492 3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C14.6766 3.75 17.1111 5.02463 18.6322 7M20.1862 10.9688C20.2283 11.3066 20.25 11.6508 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C9.32342 20.25 6.88887 18.9754 5.36784 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';_r._solidSVG='<path d="M6.3448 17C7.73561 18.5332 9.77612 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 11.6819 19.4802 11.3687 19.4419 11.0616C19.3907 10.6505 19.6823 10.2758 20.0934 10.2245C20.5044 10.1733 20.8792 10.4649 20.9304 10.8759C20.9764 11.2445 21 11.6197 21 12C21 16.9706 16.9706 21 12 21C9.4791 21 7.1554 19.9626 5.5 18.2888V20.25C5.5 20.6642 5.16421 21 4.75 21C4.33579 21 4 20.6642 4 20.25V16.25C4 15.8358 4.33579 15.5 4.75 15.5H8.75C9.16421 15.5 9.5 15.8358 9.5 16.25C9.5 16.6642 9.16421 17 8.75 17H6.3448Z" fill="currentColor"/><path d="M4.55806 12.9384C4.60932 13.3495 4.31766 13.7242 3.90663 13.7755C3.4956 13.8267 3.12085 13.5351 3.06959 13.1241C3.02364 12.7555 3 12.3803 3 12C3 7.02944 7.02944 3 12 3C14.5269 3 16.8557 4.04238 18.5118 5.72322V3.75C18.5118 3.33579 18.8476 3 19.2618 3C19.6761 3 20.0118 3.33579 20.0118 3.75V7.75C20.0118 8.16421 19.6761 8.5 19.2618 8.5H15.2618C14.8476 8.5 14.5118 8.16421 14.5118 7.75C14.5118 7.33579 14.8476 7 15.2618 7H17.6552C16.2644 5.46681 14.2239 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 12.3181 4.51977 12.6313 4.55806 12.9384Z" fill="currentColor"/>';_r._name="arrow-rotate-right-left";_r=a([k("gds-icon-arrow-rotate-right-left")],_r);var K2=Object.defineProperty,X2=Object.getOwnPropertyDescriptor,J2=(e,t,s,r)=>{for(var o=r>1?void 0:r?X2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&K2(t,s,o),o};let hd=class extends D{render(){return m`
      <style>
        :host {
          display: contents;
        }
      </style>
      <gds-grid columns="3" gap="m">
        <gds-card variant="secondary" level="3">
          <gds-flex flex-direction="column" align-items="center" gap="2xs">
            <gds-icon-credit-card height="16"></gds-icon-credit-card>
            <gds-text font-size="detail-s" font-weight="book">Kort</gds-text>
          </gds-flex>
        </gds-card>
        <gds-card variant="secondary" level="3">
          <gds-flex flex-direction="column" align-items="center" gap="2xs">
            <gds-icon-arrow-rotate-right-left height="16">
            </gds-icon-arrow-rotate-right-left>
            <gds-text font-size="detail-s" font-weight="book">
              Flytta pengar
            </gds-text>
          </gds-flex>
        </gds-card>
        <gds-card variant="secondary" level="3">
          <gds-flex flex-direction="column" align-items="center" gap="2xs">
            <gds-icon-growth height="16"></gds-icon-growth>
            <gds-text font-size="detail-s" font-weight="book">
              Framtiden
            </gds-text>
          </gds-flex>
        </gds-card>
      </gds-grid>
    `}};hd=J2([j("tp-quicklinks")],hd);var Cr=class extends L{};Cr._regularSVG='<path d="M19.7181 14.5359C20.0626 13.7609 20.254 12.9028 20.254 12C20.254 8.54822 17.4558 5.75 14.004 5.75H10.004C9.93732 5.75 9.87088 5.75104 9.8047 5.75312C8.32457 3.97909 6.38818 3.75 5.75 3.75V7.4211C5.06066 8.06182 4.51621 8.85631 4.17124 9.75H1.75V14.25H4.17124C4.51621 15.1437 5.06066 15.9382 5.75 16.5789V20.25H10.25V18.25H13.75V20.25H18.25V16.5863C18.8686 16.0134 19.371 15.3168 19.7181 14.5359ZM19.7181 14.5359C20.085 14.9725 20.6351 15.25 21.25 15.25C22.3546 15.25 23.25 14.3546 23.25 13.25C23.25 12.777 23.0858 12.3424 22.8113 12M8 10.75H8.5M8.75 10.75C8.75 11.0261 8.52614 11.25 8.25 11.25C7.97386 11.25 7.75 11.0261 7.75 10.75C7.75 10.4739 7.97386 10.25 8.25 10.25C8.52614 10.25 8.75 10.4739 8.75 10.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Cr._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.75C5 3.33579 5.33579 3 5.75 3C6.47743 3 8.50198 3.24069 10.1403 5H14.004C17.87 5 21.004 8.13401 21.004 12C21.004 12.8135 20.8649 13.5957 20.6089 14.3235C20.7965 14.4358 21.0156 14.5 21.25 14.5C21.9404 14.5 22.5 13.9404 22.5 13.25C22.5 12.9537 22.3978 12.6832 22.2262 12.4691C21.9671 12.1459 22.0191 11.6739 22.3422 11.4148C22.6654 11.1557 23.1374 11.2077 23.3965 11.5309C23.7738 12.0016 24 12.6004 24 13.25C24 14.7688 22.7688 16 21.25 16C20.7839 16 20.3448 15.8838 19.9602 15.6792C19.6857 16.1227 19.3632 16.533 19 16.9031V20.25C19 20.6642 18.6642 21 18.25 21H13.75C13.3358 21 13 20.6642 13 20.25V19H11V20.25C11 20.6642 10.6642 21 10.25 21H5.75C5.33579 21 5 20.6642 5 20.25V16.8949C4.46134 16.3443 4.01257 15.7048 3.67782 15H1.75C1.33579 15 1 14.6642 1 14.25V9.75C1 9.33579 1.33579 9 1.75 9H3.67782C4.01257 8.29522 4.46134 7.65571 5 7.1051V3.75ZM8.25 12C8.94036 12 9.5 11.4404 9.5 10.75C9.5 10.0596 8.94036 9.5 8.25 9.5C7.55964 9.5 7 10.0596 7 10.75C7 11.4404 7.55964 12 8.25 12Z" fill="currentColor"/>';Cr._name="piggy-bank";Cr=a([k("gds-icon-piggy-bank")],Cr);var kr=class extends L{};kr._regularSVG='<path d="M21 18C21 18 19.666 19.5444 18.166 19.5444C16.666 19.5444 15.4594 18.115 13.9866 18.115C12.5138 18.115 11.6598 18.786 10.75 19.75M17 2.75L20.25 6L6 20.25H2.75V17L17 2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';kr._solidSVG='<path d="M16.4697 2.21967C16.7626 1.92678 17.2374 1.92678 17.5303 2.21967L20.7803 5.46967C21.0732 5.76256 21.0732 6.23744 20.7803 6.53033L6.53033 20.7803C6.38968 20.921 6.19891 21 6 21H2.75C2.33579 21 2 20.6642 2 20.25V17C2 16.8011 2.07902 16.6103 2.21967 16.4697L16.4697 2.21967Z" fill="currentColor"/><path d="M21.4903 17.4324C21.1769 17.1618 20.7035 17.1963 20.4327 17.5095L20.4261 17.5168C20.4192 17.5246 20.4075 17.5374 20.3914 17.5547C20.3592 17.5892 20.3095 17.641 20.2446 17.7043C20.1139 17.8317 19.9261 18.0013 19.699 18.1696C19.2229 18.5224 18.675 18.7944 18.166 18.7944C17.6346 18.7944 17.124 18.5421 16.4177 18.1672L16.3494 18.131C15.7225 17.7975 14.9093 17.365 13.9866 17.365C12.2062 17.365 11.1671 18.2154 10.2046 19.2352C9.92027 19.5364 9.93398 20.0111 10.2352 20.2954C10.5364 20.5797 11.0111 20.566 11.2954 20.2648C12.1526 19.3567 12.8215 18.865 13.9866 18.865C14.5028 18.865 15.0037 19.1149 15.7145 19.4922L15.7677 19.5205C16.4011 19.8571 17.2241 20.2944 18.166 20.2944C19.1571 20.2944 20.0262 19.7942 20.5921 19.3748C20.886 19.157 21.1254 18.9405 21.2917 18.7783C21.3753 18.6968 21.4415 18.628 21.4881 18.578C21.5114 18.5531 21.5299 18.5328 21.5432 18.5179L21.5593 18.4997L21.5645 18.4939L21.5663 18.4918L21.5676 18.4903C21.5676 18.4903 21.5676 18.4903 21 18L21.5676 18.4903C21.8383 18.1768 21.8037 17.7032 21.4903 17.4324Z" fill="currentColor"/>';kr._name="pencil-wave";kr=a([k("gds-icon-pencil-wave")],kr);var $r=class extends L{};$r._regularSVG='<path d="M19.25 9.25V17.25M15.25 17.25V9.25M4.75 9.25V17.25M8.75 17.25V9.25M2.75 7.17308L12 2.5L21.25 7.17308V9.25H2.75V7.17308ZM2.75 20.25H21.25L20.25 17.25H3.75L2.75 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>';$r._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3382 1.83058C12.1255 1.72314 11.8745 1.72314 11.6618 1.83058L2.41181 6.50365C2.15926 6.63125 2.00001 6.89012 2.00001 7.17308V9.25C2.00001 9.66421 2.33579 10 2.75001 10H4.00001V16.5H3.75001C3.42718 16.5 3.14058 16.7066 3.03849 17.0128L2.03849 20.0128C1.96226 20.2415 2.00061 20.493 2.14157 20.6885C2.28254 20.8841 2.50892 21 2.75001 21H21.25C21.4911 21 21.7175 20.8841 21.8584 20.6885C21.9994 20.493 22.0378 20.2415 21.9615 20.0128L20.9615 17.0128C20.8594 16.7066 20.5728 16.5 20.25 16.5H20V10H21.25C21.6642 10 22 9.66421 22 9.25V7.17308C22 6.89012 21.8408 6.63125 21.5882 6.50365L12.3382 1.83058ZM16 10H18.5V16.5H16V10ZM8.00001 16.5H5.50001V10H8.00001V16.5ZM9.50001 16.5V10H14.5V16.5H9.50001Z" fill="currentColor"/>';$r._name="bank";$r=a([k("gds-icon-bank")],$r);var Q2=Object.defineProperty,ef=Object.getOwnPropertyDescriptor,Nr=(e,t,s,r)=>{for(var o=r>1?void 0:r?ef(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Q2(t,s,o),o};let hs=class extends D{render(){return m`
      <style>
        :host {
          display: contents;
        }
        .step {
          animation-name: tp-scale, tp-scale;
          animation-fill-mode: both;
          animation-timing-function: ease-in-out;
          animation-direction: normal, reverse;
          animation-timeline: view(x);
          animation-range:
            entry 0% entry 60vw,
            exit -40vw exit 40vw;
          scale: 1;
          opacity: 1;
          filter: blur(0px);
        }

        @keyframes tp-scale {
          0% {
            scale: 0.8;
            opacity: 0.4;
          }
        }
      </style>
      <gds-card
        id=${this.id}
        part="step"
        class="step"
        padding="xs"
        background="#f3efeb"
      >
        <gds-flex
          align-items="center"
          justify-content="space-between"
          padding="xl"
        >
          <gds-text>${this.title}</gds-text>
          <gds-flex
            width="40px"
            height="40px"
            align-items="center"
            justify-content="center"
            border-radius="max"
            background="#f7f5f3"
          >
            <slot name="icon"></slot>
          </gds-flex>
        </gds-flex>
        <gds-flex
          padding="xl"
          background="#f7f5f3"
          gap="l"
          flex-direction="column"
          align-items="flex-start"
          border-radius="s"
        >
          <gds-text font-size="preamble-xs"> ${this.description} </gds-text>
          <gds-button size="small">${this.label}</gds-button>
        </gds-flex>
      </gds-card>
    `}};Nr([g({type:String})],hs.prototype,"name",2);Nr([g({type:String})],hs.prototype,"title",2);Nr([g({type:String})],hs.prototype,"description",2);Nr([g({type:String})],hs.prototype,"label",2);hs=Nr([j("tp-step")],hs);var tf=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,y1=(e,t,s,r)=>{for(var o=r>1?void 0:r?sf(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&tf(t,s,o),o};let oa=class extends D{firstUpdated(){this.addEventListeners()}addEventListeners(){this.shadowRoot.querySelectorAll("tp-step-bullet").forEach(t=>{t.addEventListener("click",this.handleBulletClick.bind(this))})}handleBulletClick(e){const t=e.currentTarget,s=t.getAttribute("step"),r=this.shadowRoot.querySelector(`tp-step[name="${s}"]::part(step)`);r&&r.scrollIntoView({behavior:"smooth",block:"center"}),this.shadowRoot.querySelectorAll("tp-step-bullet").forEach(n=>n.removeAttribute("active")),t.setAttribute("active","")}render(){return m`
      <style>
        :host {
          --steps: 4;
          --space: var(--gds-space-xl);
        }

        .steps {
          display: flex;
          overflow-x: scroll;
          scroll-snap-type: x mandatory;
          width: 100%;
          gap: 32px;
          position: relative;
          scrollbar-width: none;
          padding-inline: var(--space);
          box-sizing: border-box;
        }

        tp-step::part(step) {
          scroll-snap-align: center;
          scroll-margin-inline-start: var(--space);
          --width: calc(100vw - var(--space) * (var(--steps) + 2));
          min-inline-size: calc(var(--width) / (var(--steps) - 1));
        }

        @media screen and (max-width: 768px) {
          .steps {
            padding-inline: 0;
            gap: 0;
          }
          tp-step::part(step) {
            min-width: 80vw;
            scroll-margin-inline-start: 0;
          }
        }
      </style>
      <gds-flex flex-direction="column" padding="xl 0" gap="xl">
        <div class="steps">
          <tp-step
            title="Kom igång här!"
            description="Få en översikt av dina konton, transaktioner, debit och kreditkort."
            label="Skaffa Enkla vardagen"
            name="s1"
          >
            <gds-icon-checklist slot="icon"></gds-icon-checklist>
          </tp-step>
          <tp-step
            title="Länka dina andra banker"
            description="Allt för att göra din vardagsekonomi överskådlig."
            label="Länka konto"
            name="s4"
          >
            <gds-icon-bank slot="icon"></gds-icon-bank>
          </tp-step>
          <tp-step
            title="Börja spara"
            description="Vi hjälper dig att ta första steget mot en stabil och säker ekonomisk framtid."
            label="Öppna ett sparkonto"
            name="s2"
          >
            <gds-icon-piggy-bank slot="icon"></gds-icon-piggy-bank>
          </tp-step>
          <tp-step
            title="Vi vill lära känna dig"
            description="För att vi ska kunna guida dig till en trygg ekonomi behöver vi ställa lite frågor. Det tar bara ett par minuter."
            label="Svara på frågor"
            name="s3"
          >
            <gds-icon-pencil-wave slot="icon"></gds-icon-pencil-wave>
          </tp-step>
        </div>
        <gds-flex align-items="center" justify-content="center" gap="2xs">
          <tp-step-bullet step="s1"></tp-step-bullet>
          <tp-step-bullet step="s2" active></tp-step-bullet>
          <tp-step-bullet step="s3"></tp-step-bullet>
          <tp-step-bullet step="s4"></tp-step-bullet>
        </gds-flex>
      </gds-flex>
    `}};y1([oe(".steps")],oa.prototype,"stepsContainer",2);oa=y1([j("tp-steps")],oa);var rf=Object.defineProperty,of=Object.getOwnPropertyDescriptor,nf=(e,t,s,r)=>{for(var o=r>1?void 0:r?of(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&rf(t,s,o),o};let gd=class extends D{render(){return m`
      <style>
        .carousel {
          display: flex;
          overflow-x: scroll;
          scroll-snap-type: x mandatory;
          width: 100%;
          gap: 32px;
          position: relative;
          scrollbar-width: none;
          padding-inline-start: 5vw;
          box-sizing: border-box;

          &::before {
            content: '';
            display: flex;
            width: 200px;
            height: 100%;
            position: absolute;
            background: linear-gradient(to right, #f5f5f6, transparent);
          }
        }

        .snap {
          scroll-snap-align: start;
          scroll-margin-inline-start: 5vw;
        }
      </style>
      <div class="container">
        <div class="carousel">
          <gds-flex flex="0 0 calc(100vw/2); l{0 0 calc(100vw/3)}" class="snap">
            <gds-card padding="xs" background="#f3efeb">
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="xl"
              >
                <gds-text>Kom igång här!</gds-text>
                <gds-flex
                  width="40px"
                  height="40px"
                  align-items="center"
                  justify-content="center"
                  border-radius="max"
                  background="#f7f5f3"
                >
                  <gds-icon-checklist></gds-icon-checklist>
                </gds-flex>
              </gds-flex>
              <gds-flex
                padding="xl"
                background="#f7f5f3"
                gap="l"
                flex-direction="column"
                align-items="flex-start"
                border-radius="s"
              >
                <gds-text font-size="preamble-xs"
                  >Få en översikt av dina konton, transaktioner, debit och
                  kreditkort.
                </gds-text>
                <gds-button size="small">Skaffa Enkla vardagen</gds-button>
              </gds-flex>
            </gds-card>
          </gds-flex>
          <gds-flex flex="0 0 calc(100vw/3)" class="snap">
            <gds-card padding="xs" background="#f3efeb">
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="xl"
              >
                <gds-text>Kom igång här!</gds-text>
                <gds-flex
                  width="40px"
                  height="40px"
                  align-items="center"
                  justify-content="center"
                  border-radius="max"
                  background="#f7f5f3"
                >
                  <gds-icon-checklist></gds-icon-checklist>
                </gds-flex>
              </gds-flex>
              <gds-flex
                padding="xl"
                background="#f7f5f3"
                gap="l"
                flex-direction="column"
                align-items="flex-start"
                border-radius="s"
              >
                <gds-text font-size="preamble-xs"
                  >Få en översikt av dina konton, transaktioner, debit och
                  kreditkort.
                </gds-text>
                <gds-button size="small">Skaffa Enkla vardagen</gds-button>
              </gds-flex>
            </gds-card>
          </gds-flex>
          <gds-flex flex="0 0 calc(100vw/3)" class="snap">
            <gds-card padding="xs" background="#f3efeb">
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="xl"
              >
                <gds-text>Kom igång här!</gds-text>
                <gds-flex
                  width="40px"
                  height="40px"
                  align-items="center"
                  justify-content="center"
                  border-radius="max"
                  background="#f7f5f3"
                >
                  <gds-icon-checklist></gds-icon-checklist>
                </gds-flex>
              </gds-flex>
              <gds-flex
                padding="xl"
                background="#f7f5f3"
                gap="l"
                flex-direction="column"
                align-items="flex-start"
                border-radius="s"
              >
                <gds-text font-size="preamble-xs"
                  >Få en översikt av dina konton, transaktioner, debit och
                  kreditkort.
                </gds-text>
                <gds-button size="small">Skaffa Enkla vardagen</gds-button>
              </gds-flex>
            </gds-card>
          </gds-flex>
          <gds-flex flex="0 0 calc(100vw/3)" class="snap">
            <gds-card padding="xs" background="#f3efeb">
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="xl"
              >
                <gds-text>Kom igång här!</gds-text>
                <gds-flex
                  width="40px"
                  height="40px"
                  align-items="center"
                  justify-content="center"
                  border-radius="max"
                  background="#f7f5f3"
                >
                  <gds-icon-checklist></gds-icon-checklist>
                </gds-flex>
              </gds-flex>
              <gds-flex
                padding="xl"
                background="#f7f5f3"
                gap="l"
                flex-direction="column"
                align-items="flex-start"
                border-radius="s"
              >
                <gds-text font-size="preamble-xs"
                  >Få en översikt av dina konton, transaktioner, debit och
                  kreditkort.
                </gds-text>
                <gds-button size="small">Skaffa Enkla vardagen</gds-button>
              </gds-flex>
            </gds-card>
          </gds-flex>
        </div>
      </div>
    `}};gd=nf([j("tp-carousel-pink")],gd);var af=Object.defineProperty,lf=Object.getOwnPropertyDescriptor,on=(e,t,s,r)=>{for(var o=r>1?void 0:r?lf(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&af(t,s,o),o};let Sr=class extends D{constructor(){super(...arguments),this.amountPerMonth=500,this.years=5,this.total="26 325"}connectedCallback(){super.connectedCallback()}render(){return m`<gds-card variant="secondary" border-color="primary">
      <gds-flex gap="l" flex-direction="column">
        <div>
          <gds-input
            label="How much can you save per month?"
            value=${this.amountPerMonth}
            @input=${e=>this.amountPerMonth=e.currentTarget.value}
          ></gds-input>
          ${pd}
        </div>
        <div>
          <gds-input
            label="How many years do you want to save?"
            value=${this.years}
            @input=${e=>this.years=e.currentTarget.value}
          ></gds-input>
          ${pd}
        </div>
      </gds-flex>

      <gds-text
        font-size="heading-m"
        tag="div"
        text-align="center"
        margin="l 0 0 0"
      >
        ${this.amountPerMonth} kr/mån i ${this.years} år
      </gds-text>
      <gds-text
        font-size="display-l"
        tag="div"
        color="positive"
        text-align="center"
      >
        ${this.total} kr
      </gds-text>
    </gds-card>`}};on([W()],Sr.prototype,"amountPerMonth",2);on([W()],Sr.prototype,"years",2);on([W()],Sr.prototype,"total",2);Sr=on([j("tp-savings-calc")],Sr);const pd=m` <svg
  width="100%"
  height="32"
  viewBox="0 0 368 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clip-path="url(#clip0_1372_6734)">
    <rect y="14" width="4" height="4" rx="2" fill="#35723D" />
  </g>
  <path
    d="M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16Z"
    fill="#35723D"
  />
  <g clip-path="url(#clip1_1372_6734)">
    <rect x="28" y="14" width="340" height="4" rx="2" fill="#E2E2E2" />
  </g>
  <defs>
    <clipPath id="clip0_1372_6734">
      <rect y="14" width="4" height="4" rx="2" fill="white" />
    </clipPath>
    <clipPath id="clip1_1372_6734">
      <rect x="28" y="14" width="340" height="4" rx="2" fill="white" />
    </clipPath>
  </defs>
</svg>`;var df=Object.defineProperty,cf=Object.getOwnPropertyDescriptor,hf=(e,t,s,r)=>{for(var o=r>1?void 0:r?cf(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&df(t,s,o),o};let ud=class extends D{render(){return m`
      <tp-card>
        <!-- Header -->
        <gds-text slot="header" font-size="heading-s">
          Konton och kort
        </gds-text>
        <gds-button slot="action" size="small" rank="tertiary">
          <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
        </gds-button>
        <!-- /Header -->

        <gds-flex padding="2xl 0" align-items="center" justify-content="center">
          <gds-flex
            flex-direction="column"
            align-items="center"
            justify-content="center"
            gap="l"
          >
            <gds-flex gap="s" align-items="flex-end">
              <gds-container
                background="copper-01"
                width="16px"
                height="62px"
                level="2"
                border-radius="max"
              ></gds-container>
              <gds-container
                background="copper-01"
                width="16px"
                height="120px"
                level="2"
                border-radius="max"
              ></gds-container>
              <gds-container
                background="copper-01"
                width="16px"
                height="68px"
                level="2"
                border-radius="max"
              ></gds-container>
              <gds-container
                background="copper-01"
                width="16px"
                height="54px"
                level="2"
                border-radius="max"
              ></gds-container>
              <gds-container
                background="copper-01"
                width="16px"
                height="78px"
                level="2"
                border-radius="max"
              ></gds-container>
              <gds-container
                background="copper-01"
                width="16px"
                height="70px"
                level="2"
                border-radius="max"
              ></gds-container>
              <gds-container
                background="copper-02"
                width="16px"
                height="28px"
                level="2"
                border-radius="max"
              ></gds-container>
            </gds-flex>
            <gds-text
              font-size="heading-xs"
              font-weight="book"
              text-align="center"
              max-width="32"
              text-wrap="balance"
            >
              Få en översikt av dina konton i SEB, transaktioner, debit och
              kreditkort.
            </gds-text>
            <gds-button>Skaffa Enkla vardagen</gds-button>
          </gds-flex>
        </gds-flex>
        <gds-flex slot="footer" flex-direction="column" padding="0 0 0 xs">
          <tp-list-item>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              slot="icon"
            >
              <rect width="24" height="24" fill="#0000A0" rx="12" />
              <g fill="#fff" clip-path="url(#a)">
                <path
                  d="M18.6596 11.0484c-.6462.047-1.1631.5757-1.2101 1.2218-.047.7637.5522 1.3981 1.304 1.3981.2703 0 .6344-.141.7989-.423v.3877h.5052v-1.2453c.0235-.8224-.6344-1.398-1.398-1.3393Zm.8576 1.3393c-.0235.4347-.3995.7636-.8459.7049-.3407-.047-.6109-.3172-.6579-.6579-.047-.4582.3055-.8459.7519-.8459.3994 0 .7284.3172.7519.7167v.0822ZM15.8869 11.0484c-.6932.0235-1.2806.5522-1.2806 1.3275 0 .7049.5757 1.3041 1.3158 1.3041.517 0 1.0221-.3054 1.2218-.8106l-.5051-.1528c-.094.2115-.3172.3877-.5639.4347-.3525.0705-.6814-.1527-.8107-.3877l1.962-.5404c-.0588-.5169-.5052-1.1983-1.3393-1.1748Zm-.7284 1.2453c0-.2702.1645-.5874.5169-.7166.3995-.1528.7519.047.9046.3289l-1.4215.3877ZM11.5753 11.5771v-.5404c-.4934 0-.6579.2467-.7401.3759v-.2937h-.564V13.6213h.5757v-1.2336c0-.5639.329-.7871.7284-.8106ZM6.39433 12.6227 4.67909 10.602h-.58742v3.0193h.61091v-2.0207l1.73874 2.0324H6.97v-3.031h-.57567v2.0207ZM14.2656 10.3318h-.5404v.9868c-.1292-.1645-.5287-.3054-.8694-.2702-.6461.047-1.163.5757-1.21 1.2218-.047.7637.5521 1.3981 1.304 1.3981.282 0 .6697-.1293.7989-.376v.329h.5052V12.329l.0117-1.9972Zm-.5639 2.0559c-.0235.4347-.3994.7636-.8459.7049-.3407-.047-.6109-.3172-.6579-.6579-.0469-.4582.3055-.8459.7519-.8459.3995 0 .7284.3172.7519.7167v.0822ZM8.62647 11.0367c-.72839 0-1.3158.5874-1.3158 1.3158 0 .7283.58741 1.3158 1.3158 1.3158.72839 0 1.31581-.5875 1.31581-1.3158-.01175-.7284-.59916-1.3158-1.31581-1.3158Zm0 2.0676c-.41119 0-.75189-.3407-.75189-.7518 0-.4112.3407-.7519.75189-.7519.41119 0 .75189.3407.75189.7519 0 .4229-.3407.7518-.75189.7518Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M4.07996 10.32h15.9894v3.36H4.07996z" />
                </clipPath>
              </defs>
            </svg>
            <gds-flex flex-direction="column" gap="xs" flex="1">
              <gds-flex align-items="center" justify-content="space-between">
                <gds-flex flex-direction="column">
                  <gds-text font-size="detail-m">Nordea – Sparkonto</gds-text>
                  <gds-text font-size="detail-s" color="secondary">
                    2896 48 111 19
                  </gds-text>
                </gds-flex>
                <gds-flex flex-direction="column" align-items="flex-end">
                  <gds-text font-size="detail-m">42 000,00</gds-text>
                  <gds-text font-size="detail-s" color="secondary"
                    >&nbsp;</gds-text
                  >
                </gds-flex>
              </gds-flex>
            </gds-flex>
          </tp-list-item>
        </gds-flex>
      </tp-card>
    `}};ud=hf([j("tp-empty-konton")],ud);var gf=Object.defineProperty,pf=Object.getOwnPropertyDescriptor,w1=(e,t,s,r)=>{for(var o=r>1?void 0:r?pf(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&gf(t,s,o),o};let na=class extends D{constructor(){super(...arguments),this.isVisible=!0}handleCloseClick(){this.isVisible=!1}render(){return m` <style>
        :host {
          display: ${this.isVisible?"block":"none"};
        }
        .card {
          aspect-ratio: 1.58 / 1;
        }

        .empty {
          aspect-ratio: 3 / 2;
        }
      </style>
      ${this.isVisible?m`
            <gds-card variant="secondary" shadow="s">
              <gds-flex justify-content="flex-end">
                <gds-button
                  size="small"
                  rank="secondary"
                  @click=${this.handleCloseClick}
                >
                  <gds-icon-cross-small></gds-icon-cross-small>
                </gds-button>
              </gds-flex>
              <gds-flex
                padding="2xl; m{4xl}"
                width="100%"
                flex-direction="column"
                align-items="center"
                gap="l"
              >
                <gds-card class="card" variant="copper-01" width="100%; m{60%}">
                  <gds-icon-brand-seb
                    width="55"
                    height="24"
                  ></gds-icon-brand-seb>
                </gds-card>

                <gds-text
                  text-wrap="balance"
                  max-width="40"
                  font-weight="book"
                  font-size="heading-xs"
                  color="primary"
                  text-align="center"
                >
                  Få en översikt av dina konton i SEB, transaktioner, debit och
                  kreditkort.
                </gds-text>

                <gds-button> Skaffa kreditkort </gds-button>
              </gds-flex>
            </gds-card>
          `:B}`}};w1([W()],na.prototype,"isVisible",2);na=w1([j("tp-empty-card")],na);var Mr=class extends L{};Mr._regularSVG='<path d="M8.75 8.75L14.5694 14.5694M15.25 9.75V15.25H9.75M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Mr._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 15.25C16 15.6642 15.6642 16 15.25 16H9.75C9.33579 16 9 15.6642 9 15.25C9 14.8358 9.33579 14.5 9.75 14.5H13.4393L8.21967 9.28033C7.92678 8.98744 7.92678 8.51256 8.21967 8.21967C8.51256 7.92678 8.98744 7.92678 9.28033 8.21967L14.5 13.4393V9.75C14.5 9.33579 14.8358 9 15.25 9C15.6642 9 16 9.33579 16 9.75V15.25Z" fill="currentColor"/>';Mr._name="arrow-right-down-circle";Mr=a([k("gds-icon-arrow-right-down-circle")],Mr);var Er=class extends L{};Er._regularSVG='<path d="M4 15L12 7L20 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Er._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.25C12.1989 6.25 12.3897 6.32902 12.5303 6.46967L20.5303 14.4697C20.8232 14.7626 20.8232 15.2374 20.5303 15.5303C20.2374 15.8232 19.7626 15.8232 19.4697 15.5303L12 8.06066L4.53033 15.5303C4.23744 15.8232 3.76256 15.8232 3.46967 15.5303C3.17678 15.2374 3.17678 14.7626 3.46967 14.4697L11.4697 6.46967C11.6103 6.32902 11.8011 6.25 12 6.25Z" fill="currentColor"/>';Er._name="chevron-top";Er=a([k("gds-icon-chevron-top")],Er);var Tr=class extends L{};Tr._regularSVG='<path d="M6.86111 13.25H3.25L6.25 7.75H11.2292M6.86111 13.25L10.75 17.1389M6.86111 13.25L11.2292 7.75M10.75 17.1389V20.75L16.25 17.75V12.7708M10.75 17.1389L16.25 12.7708M16.25 12.7708C19.3333 9.94444 21.25 6.86111 21.25 2.75C17.1389 2.75 14.0556 4.66667 11.2292 7.75M4.80556 21.25H2.75V19.1944C2.75 18.0592 3.6703 17.1389 4.80556 17.1389C5.94081 17.1389 6.86111 18.0592 6.86111 19.1944C6.86111 20.3297 5.94081 21.25 4.80556 21.25Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>';Tr._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 14.3242L11.5 17.501V19.4866L15.5 17.3048V14.3242ZM10 17.4495L6.55045 14H3.25C2.9853 14 2.7402 13.8605 2.60508 13.6328C2.46995 13.4052 2.46482 13.1232 2.59158 12.8909L5.59158 7.39086C5.723 7.14992 5.97554 7 6.25 7H10.902C13.7571 3.96176 16.9703 2 21.25 2C21.6642 2 22 2.33579 22 2.75C22 7.02966 20.0382 10.2429 17 13.098V17.75C17 18.0245 16.8501 18.277 16.6091 18.4084L11.1091 21.4084C10.8768 21.5352 10.5948 21.53 10.3672 21.3949C10.1395 21.2598 10 21.0147 10 20.75V17.4495ZM6.499 12.5L9.67577 8.5H6.69522L4.51341 12.5H6.499ZM2 19.1944C2 17.645 3.25609 16.3889 4.80556 16.3889C6.35502 16.3889 7.61111 17.645 7.61111 19.1944C7.61111 20.7439 6.35502 22 4.80556 22H2.75C2.33579 22 2 21.6642 2 21.25V19.1944Z" fill="currentColor"/>';Tr._name="rocket";Tr=a([k("gds-icon-rocket")],Tr);var Ar=class extends L{};Ar._regularSVG='<path d="M3.75 9L3.27507 8.41953C3.10097 8.56198 3 8.77505 3 9H3.75ZM20.25 9H21C21 8.77505 20.899 8.56198 20.7249 8.41953L20.25 9ZM20.25 20.25V21C20.6642 21 21 20.6642 21 20.25H20.25ZM3.75 20.25H3C3 20.6642 3.33579 21 3.75 21V20.25ZM12 2.25L12.4749 1.66953C12.1987 1.44349 11.8013 1.44349 11.5251 1.66953L12 2.25ZM9.75 14.75V14C9.33579 14 9 14.3358 9 14.75H9.75ZM14.25 14.75H15C15 14.3358 14.6642 14 14.25 14V14.75ZM14.25 20.25H13.5C13.5 20.6642 13.8358 21 14.25 21V20.25ZM9.75 20.25V21C10.1642 21 10.5 20.6642 10.5 20.25H9.75ZM19.5 9V20.25H21V9H19.5ZM4.5 20.25V9H3V20.25H4.5ZM4.22493 9.58047L12.4749 2.83047L11.5251 1.66953L3.27507 8.41953L4.22493 9.58047ZM11.5251 2.83047L19.7751 9.58047L20.7249 8.41953L12.4749 1.66953L11.5251 2.83047ZM9.75 15.5H14.25V14H9.75V15.5ZM13.5 14.75V20.25H15V14.75H13.5ZM10.5 20.25V14.75H9V20.25H10.5ZM9.75 19.5H3.75V21H9.75V19.5ZM14.25 21H20.25V19.5H14.25V21Z" fill="currentColor"/>';Ar._solidSVG='<path d="M12.4749 1.66953C12.1987 1.44349 11.8013 1.44349 11.5251 1.66953L3.27507 8.41953C3.10097 8.56198 3 8.77505 3 9V20.25C3 20.6642 3.33579 21 3.75 21H9.25C9.66421 21 10 20.6642 10 20.25V15H14V20.25C14 20.6642 14.3358 21 14.75 21H20.25C20.6642 21 21 20.6642 21 20.25V9C21 8.77505 20.899 8.56198 20.7249 8.41953L12.4749 1.66953Z" fill="currentColor"/>';Ar._name="home-open";Ar=a([k("gds-icon-home-open")],Ar);var uf=Object.defineProperty,ff=Object.getOwnPropertyDescriptor,It=(e,t,s,r)=>{for(var o=r>1?void 0:r?ff(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&uf(t,s,o),o};let mt=class extends D{constructor(){super(...arguments),this.activeCategory="Nöje",this.isExpanded=!1,this.label="Nöje",this.amount="13 523,00",this.amountDiff="Ökat",this.status="+3 567,00"}connectedCallback(){super.connectedCallback()}expand(){this.isExpanded=!this.isExpanded}renderIcon(){return this.isExpanded?m`<gds-icon-chevron-top></gds-icon-chevron-top>`:m`<gds-icon-chevron-bottom></gds-icon-chevron-bottom>`}renderCategory(e,t,s,r){this.activeCategory=e,this.label=e,this.amount=t,this.amountDiff=s,this.status=r}render(){return m`<tp-card>
      <gds-text slot="header" font-size="preamble-s" tag="h3"
        >Utgifter</gds-text
      >

      <gds-theme slot="action" color-scheme="light"
            ><gds-button rank="tertiary" label="options">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal></gds-button></gds-theme
        >
      <gds-flex justify-content="space-between" flex-direction="row">
        <gds-flex flex-direction="column">
          <gds-text color="secondary" font-size="detail-s">Oktober</gds-text
          ><gds-text font-size="heading-s">24 567,00</gds-text></gds-flex
        >
        <gds-flex class="right" gap="2xs" flex-direction="row">
          <gds-flex flex-direction="column">
            <gds-text text-align="end" color="secondary" font-size="detail-s"
              >Trend</gds-text
            ><gds-flex gap="xs"  place-items="center"
              ><gds-icon-arrow-right-down-circle
                width="24"
                height="24"
              ></gds-icon-arrow-right-down-circle
              ><gds-text  font-size="heading-s">
                -5%</gds-text
              ></gds-flex
            > </gds-flex
          ><gds-flex></gds-flex>
            <gds-theme color-scheme="light">
              <gds-button  @click="${()=>this.expand()}" rank="tertiary"
                >${this.renderIcon()}</gds-button></gds-theme></gds-flex></gds-flex
      ></gds-flex>
      <style>

        .Nöje{
            height: 5.75rem;
            width: 1rem;
            border-radius: 8px;
            background-color: #e2e2e2;

        }
        .Mat {
            height: 5rem;
            width: 1rem;
            background-color: #e2e2e2;
            border-radius: 8px;

        }
        .Boende {
            height: 4.5rem;
            width: 1rem;
            background-color: #e2e2e2;
            border-radius: 8px;

        }
        .Stuga {
            height: 2.5rem;
            width: 1rem;
            background-color: #e2e2e2;
            border-radius: 8px;

        }
        .Livstil {
            height: 4rem;
            width: 1rem;
            background-color: #e2e2e2;
            border-radius: 8px;

        }
        .active{


        }
        .active > .overlay  {
  bottom: 0;
  height: 100%;
}
        .wrapper{   max-height: 0;
            transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
        }
        .open{
            max-height: 500px;
            transition: max-height 0.5s ease-in-out;

        }
        span{
            position:relative;
            z-index:1;
        }
        span::after{
            content: "";
    position: absolute;
    bottom: 0;
    border-radius:8px;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleY(0);
    transform-origin: bottom center;
    background: #1b1b1b;
    z-index: -1;
    transition: transform 0.2s;
        }
        span.active::after {
            transform: scaleY(1);
        }
      </style>
      <gds-flex class="${this.isExpanded?"open":""} wrapper" flex-direction="column"  overflow="hidden">
      <gds-flex margin="0 0 l 0" align-items="baseline" justify-content="space-between">
        <gds-flex place-items="center"gap="s"flex-direction="column"><span class="${this.activeCategory==="Nöje"?"active":""} Nöje"></span><gds-text><gds-theme color-scheme="light">
              <gds-button  @click="${()=>this.renderCategory("Nöje","13 523,00","Ökat","+3 567,00")}" rank="${this.activeCategory==="Nöje"?"primary":"secondary"}"
                ><gds-icon-rocket class=""></gds-icon-rocket></gds-button></gds-theme></gds-text></gds-flex>
                <gds-flex place-items="center"gap="s"flex-direction="column"><span class="${this.activeCategory==="Mat"?"active":""} Mat"></span><gds-text><gds-theme color-scheme="light">
              <gds-button  @click="${()=>this.renderCategory("Mat","11 000,00","Ökat","+500,00")}" rank="${this.activeCategory==="Mat"?"primary":"secondary"}"
                ><gds-icon-store class=""></gds-icon-store></gds-button></gds-theme></gds-text></gds-flex>
                <gds-flex place-items="center"gap="s"flex-direction="column"><span class="${this.activeCategory==="Boende"?"active":""} Boende"></span><gds-text><gds-theme color-scheme="light">
              <gds-button  @click="${()=>this.renderCategory("Boende","10 000,00","Minskat","-500,00")}" rank="${this.activeCategory==="Boende"?"primary":"secondary"}"
                ><gds-icon-home-open class=""></gds-icon-home-open></gds-button></gds-theme></gds-text></gds-flex>
                <gds-flex place-items="center"gap="s"flex-direction="column"><span class="${this.activeCategory==="Stuga"?"active":""} Stuga"></span><gds-text><gds-theme color-scheme="light">
              <gds-button  @click="${()=>this.renderCategory("Stuga","8 000,00","Minskat","-250,00")}" rank="${this.activeCategory==="Stuga"?"primary":"secondary"}"
                ><gds-icon-home-open class=""></gds-icon-home-open></gds-button></gds-theme></gds-text></gds-flex>
                <gds-flex place-items="center"gap="s"flex-direction="column"><span class="${this.activeCategory==="Livstil"?"active":""} Livstil"></span><gds-text><gds-theme color-scheme="light">
              <gds-button  @click="${()=>this.renderCategory("Livstil","4 000,00","Ökat","+5200,00")}" rank="${this.activeCategory==="Livstil"?"primary":"secondary"}"
                ><gds-icon-fashion class=""></gds-icon-fashion></gds-button></gds-theme></gds-text></gds-flex>



      </gds-flex>
      <gds-flex justify-content="space-between" flex-direction="row">
        <gds-flex flex-direction="column">
          <gds-text color="secondary" font-size="detail-s">${this.label}</gds-text
          ><gds-text font-size="heading-s">${this.amount}</gds-text></gds-flex
        >
        <gds-flex class="right" gap="2xs" flex-direction="row">
          <gds-flex flex-direction="column">
            <gds-text text-align="end" color="secondary" font-size="detail-s"
              >${this.amountDiff}</gds-text
            ><gds-flex gap="xs" place-items="center"
              ><gds-text  font-size="heading-s">
              ${this.status}</gds-text
              ></gds-flex
            > </gds-flex
          ><gds-flex></gds-flex></gds-flex></gds-flex> <gds-flex margin="l 0 0 0" justify-content="center">
            <gds-flex flex-direction="column" gap="m">
                <gds-text text-align="center" font-size="heading-xs">You spend less money on food than before! <br>How about saving a little extra each <br> in a savings account?</gds-text>
                    <gds-flex gap="m" flex-direction="row"><gds-button href="http://seb.se" rank="secondary" variant="positive">Not right now</gds-button>
                        <gds-button rank="primary" href="http://seb.se" variant="positive" >Save more</gds-button>
                    </gds-flex>
                </gds-flex>
            </gds-flex>
          </gds-flex></gds-flex></gds-flex>
    </tp-card>`}};It([W()],mt.prototype,"activeCategory",2);It([W()],mt.prototype,"isExpanded",2);It([W()],mt.prototype,"label",2);It([W()],mt.prototype,"amount",2);It([W()],mt.prototype,"amountDiff",2);It([W()],mt.prototype,"status",2);mt=It([j("tp-expenses")],mt);var vf=Object.defineProperty,mf=Object.getOwnPropertyDescriptor,Ja=(e,t,s,r)=>{for(var o=r>1?void 0:r?mf(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&vf(t,s,o),o};let Or=class extends D{constructor(){super(...arguments),this.show=!1}render(){return m`<slot
      @slotchange=${()=>{setTimeout(()=>this.onShowChange(),0)}}
    ></slot>`}onShowChange(){console.log("show",this.show);const e=this.scrollHeight;this.show?(this.style.height=`${e}px`,this.style.opacity="1",this.style.marginBottom="var(--gds-space-3xl)",setTimeout(()=>{this.style.height="auto"},500)):(this.style.height="0",this.style.opacity="0",this.style.marginBottom="0")}};Or.styles=R`
    :host {
      display: block;
      transition: all 0.5s;
      overflow: hidden;
      padding-bottom: 2px;
    }
  `;Ja([g()],Or.prototype,"show",2);Ja([ne("show",{waitUntilFirstUpdate:!0}),Dc()],Or.prototype,"onShowChange",1);Or=Ja([j("tp-page-section")],Or);var bf=Object.defineProperty,xf=Object.getOwnPropertyDescriptor,ms=(e,t,s,r)=>{for(var o=r>1?void 0:r?xf(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&bf(t,s,o),o};let Ft=class extends D{constructor(){super(...arguments),this.hasExternalAccounts=!1,this.hasAccounts=!1,this.hasCards=!1,this.hasSavings=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){var e,t,s;return m`
      <gds-flex flex-direction="column">
        <gds-container margin="0 0 3xl 0">
          <tp-page-header style="flex:1" @view-options-change=${()=>{this.hasAccounts=this.pageHeader.viewOptions.hasAccounts,this.hasCards=this.pageHeader.viewOptions.hasCards,this.hasSavings=this.pageHeader.viewOptions.hasSavings}}></tp-page-header>
        </gds-container>

      <gds-container padding="0 2xs; m{0 s}">
        <!-- (Blue) Main dashboard section -->
        <tp-page-section .show=${this.hasAccounts}>
          <gds-grid columns="1; m{12}" gap="l" padding="0 s; l{0 4xl}">
            <gds-flex
              grid-column="1; m{1 / span 5}"
              flex-direction="column"
              gap="l"
            >
              <tp-accounts-modal></tp-accounts-modal>
              <tp-accounts></tp-accounts>
              <tp-expenses></tp-expenses>
            </gds-flex>
            <gds-flex
              grid-column="1; m{6 / span 4}"
              flex-direction="column"
              gap="l"
            >
              ${ae(this.hasCards,()=>m`<tp-cards></tp-cards>`,()=>m`
                  <tp-empty-card
                    @click=${()=>this.hasCards=!0}
                  ></tp-empty-card>
                `)}
              <gds-container display="none; m{block}">
                <tp-transactions></tp-transactions>
              </gds-container>
              <gds-container display="block; m{none}">
                <gds-carousel-trans></gds-carousel-trans>
              </gds-container>
            </gds-flex>
            <gds-flex
              grid-column="1; m{10 / span 3}"
              flex-direction="column"
              gap="l"
            >
              <tp-todos></tp-todos>
              <gds-jit></gds-jit>
            </gds-flex>
          </gds-grid>
        </tp-page-section>

        <!-- (Blue) Savings section -->
        <tp-page-section .show=${this.hasSavings}>
          <gds-flex padding="0 s; l{0 4xl}" gap="l" flex-direction="column">
            <gds-text tag="h2" font-size="heading-l">Savings</gds-text>
            <gds-grid columns="1; m{12}" gap="l">
              <gds-flex
                grid-column="1; m{1 / span 8}"
                flex-direction="column"
                gap="l"
              >
                <tp-savings></tp-savings>
              </gds-flex>
              <gds-flex
                grid-column="1; m{9 / span 4}"
                flex-direction="column"
                gap="l"
              >
                <tp-savings-goal></tp-savings-goal>
                <tp-savings-outside></tp-savings-outside>
              </gds-flex>
            </gds-grid>
          </gds-flex>
        </tp-page-section>

        <!-- (Pink) Dream State, get started cards -->
        <tp-page-section .show=${!((e=this.pageHeader)!=null&&e.viewOptions.hasSavings)&&!((t=this.pageHeader)!=null&&t.viewOptions.hasAccounts)}>
          <tp-steps @click=${()=>this.hasExternalAccounts=!0}></tp-steps>
        </tp-page-section>

        <tp-page-section .show=${this.hasExternalAccounts}>
          <gds-grid  columns="1; m{2}" max-width="1200px" margin="0 auto" gap="l">
            <tp-empty-konton @click=${()=>this.hasAccounts=!0}></tp-empty-konton>
            <tp-empty-card></tp-empty-card>
          </gds-grid>
        </tp-page-section>

        <!-- (Pink) Dream State, savings calculator -->
        <tp-page-section .show=${!((s=this.pageHeader)!=null&&s.viewOptions.hasSavings)}>
          <gds-grid
            columns="1; m{2}"
            gap="l"
            max-width="800px"
            margin="0 auto"
          >
            <gds-rich-text>
              <h3>What are you dreaming about?</h3>
              <p>
                Oavsett om det är att ha en buffert, en resa eller en trygg
                pension, är NU den bästa tiden att starta ett sparande. Testa
                och se hur snabbt du kan spara ihop till dina mål.
              </p>
              <p><gds-button>Start saving</gds-button></p>
            </gds-rich-text>
            <tp-savings-calc></tp-savings-calc>
          </gds-grid>
        </tp-page-section>

        <!-- (Pink) Dream State, testimonials -->
        <tp-page-section show>
          <gds-grid columns="1; m{2}" gap="l"  max-width="800px" margin="0 auto">
            <gds-rich-text>
              <h3>What are you dreaming about?</h3>
              <p>
                Oavsett om det är att ha en buffert, en resa eller en trygg
                pension, är NU den bästa tiden att starta ett sparande. Testa och
                se hur snabbt du kan spara ihop till dina mål.
              </p>
              <p style="line-height:48px">
                <gds-button rank="secondary">Christmas</gds-button>
                <gds-button rank="secondary">Vacation</gds-button>
                <gds-button rank="secondary">Pension</gds-button>
                <gds-button rank="secondary">Birthday</gds-button>
                <gds-button rank="secondary">House</gds-button>
                <gds-button rank="secondary">Car</gds-button>
                <gds-button rank="secondary">Boat</gds-button>
              </p>
            </gds-rich-text>
            <gds-card variant="negative" height="300px" border="4xs"></gds-card>
          </gds-grid>
        </tp-page-section>

        <tp-page-section .show=${!0}>
          <gds-flex flex-direction="column" gap="l" max-width="800px" margin="0 auto" >
              <gds-text tag="h2" font-size="heading-m">Inspiration</gds-text>
              <gds-grid columns="1; m{2}" gap="l">
                <tp-news></tp-news>
                <tp-news></tp-news>
              </gds-grid>
            </gds-flex>
        </tp-page-section>


      </gds-flex>
    `}};ms([oe("tp-page-header")],Ft.prototype,"pageHeader",2);ms([g()],Ft.prototype,"hasExternalAccounts",2);ms([g()],Ft.prototype,"hasAccounts",2);ms([g()],Ft.prototype,"hasCards",2);ms([g()],Ft.prototype,"hasSavings",2);Ft=ms([j("tp-theme-page")],Ft);var yf=Object.defineProperty,_1=(e,t,s,r)=>{for(var o=void 0,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=i(t,s,o)||o);return o&&yf(t,s,o),o};const el=class el extends D{constructor(){super(...arguments),this.popoverOpen=!1,this.currentView="theme-page",this.handleKeyDown=t=>{if(t.key==="\\"){const s=this.querySelector("html");if(s){const r=s.getAttribute("gds-theme");s.setAttribute("color-scheme",r==="light"?"dark":"light")}}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.addEventListener("view-change",this.handleViewChange),document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){this.removeEventListener("view-change",this.handleViewChange),document.removeEventListener("keydown",this.handleKeyDown),super.disconnectedCallback()}handleViewChange(t){this.currentView=t.detail.view}render(){return m`
      <gds-theme color-scheme="light">
        <gds-header></gds-header>
        <gds-container>
          ${Ed(this.currentView,[["theme-page",()=>m`<tp-theme-page></tp-theme-page>`],["onboarding",()=>m`<gds-onboarding></gds-onboarding>`],["dashboard",()=>m`<gds-dashboard></gds-dashboard>`],["onboarding",()=>m`<gds-onboarding></gds-onboarding>`],["login",()=>m`<gds-login></gds-login>`],["form-validation",()=>m`<form-validation></form-validation>`],["datepicker",()=>m`<datepicker-example></datepicker-example>`],["calendar",()=>m`<calendar-example></calendar-example>`]],()=>m`No view selected`)}
        </gds-container>
      </gds-theme>
    `}};el.styles=R`
    :host {
      --gds-test-color: red;
    }
  `;let Lr=el;_1([g()],Lr.prototype,"popoverOpen");_1([W()],Lr.prototype,"currentView");customElements.define("sebgroup-root",Lr);
