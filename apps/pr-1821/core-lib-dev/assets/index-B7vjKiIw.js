var Tl=e=>{throw TypeError(e)};var Al=(e,t,s)=>t.has(e)||Tl("Cannot "+s);var $t=(e,t,s)=>(Al(e,t,"read from private field"),s?s.call(e):t.get(e)),Qt=(e,t,s)=>t.has(e)?Tl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s);var Tn=(e,t,s)=>(Al(e,t,"access private method"),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hr=globalThis,za=hr.ShadowRoot&&(hr.ShadyCSS===void 0||hr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rd=Symbol(),zl=new WeakMap;let cg=class{constructor(t,s,o){if(this._$cssResult$=!0,o!==Rd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(za&&t===void 0){const o=s!==void 0&&s.length===1;o&&(t=zl.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&zl.set(s,t))}return t}toString(){return this.cssText}};const gg=e=>new cg(typeof e=="string"?e:e+"",void 0,Rd),hg=(e,t)=>{if(za)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const o=document.createElement("style"),r=hr.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=s.cssText,e.appendChild(o)}},Ol=za?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const o of t.cssRules)s+=o.cssText;return gg(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pg,defineProperty:ug,getOwnPropertyDescriptor:fg,getOwnPropertyNames:mg,getOwnPropertySymbols:vg,getPrototypeOf:bg}=Object,ht=globalThis,Ll=ht.trustedTypes,xg=Ll?Ll.emptyScript:"",An=ht.reactiveElementPolyfillSupport,Ns=(e,t)=>e,Vr={toAttribute(e,t){switch(t){case Boolean:e=e?xg:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Oa=(e,t)=>!pg(e,t),Dl={attribute:!0,type:String,converter:Vr,reflect:!1,hasChanged:Oa};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ht.litPropertyMetadata??(ht.litPropertyMetadata=new WeakMap);let Ts=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=Dl){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,s);r!==void 0&&ug(this.prototype,t,r)}}static getPropertyDescriptor(t,s,o){const{get:r,set:n}=fg(this.prototype,t)??{get(){return this[s]},set(i){this[s]=i}};return{get(){return r==null?void 0:r.call(this)},set(i){const l=r==null?void 0:r.call(this);n.call(this,i),this.requestUpdate(t,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Dl}static _$Ei(){if(this.hasOwnProperty(Ns("elementProperties")))return;const t=bg(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ns("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ns("properties"))){const s=this.properties,o=[...mg(s),...vg(s)];for(const r of o)this.createProperty(r,s[r])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[o,r]of s)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[s,o]of this.elementProperties){const r=this._$Eu(s,o);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)s.unshift(Ol(r))}else t!==void 0&&s.push(Ol(t));return s}static _$Eu(t,s){const o=s.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(s=>s(this))}addController(t){var s;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var s;(s=this._$EO)==null||s.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const o of s.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return hg(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var o;return(o=s.hostConnected)==null?void 0:o.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(s=>{var o;return(o=s.hostDisconnected)==null?void 0:o.call(s)})}attributeChangedCallback(t,s,o){this._$AK(t,o)}_$EC(t,s){var n;const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(r!==void 0&&o.reflect===!0){const i=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:Vr).toAttribute(s,o.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,s){var n;const o=this.constructor,r=o._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const i=o.getPropertyOptions(r),l=typeof i.converter=="function"?{fromAttribute:i.converter}:((n=i.converter)==null?void 0:n.fromAttribute)!==void 0?i.converter:Vr;this._$Em=r,this[r]=l.fromAttribute(s,i.type),this._$Em=null}}requestUpdate(t,s,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??Oa)(this[t],s))return;this.P(t,s,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,s,o){this._$AL.has(t)||this._$AL.set(t,s),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,i]of r)i.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],i)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(o=this._$EO)==null||o.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(s)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(s)}willUpdate(t){}_$AE(t){var s;(s=this._$EO)==null||s.forEach(o=>{var r;return(r=o.hostUpdated)==null?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EC(s,this[s]))),this._$EU()}updated(t){}firstUpdated(t){}};Ts.elementStyles=[],Ts.shadowRootOptions={mode:"open"},Ts[Ns("elementProperties")]=new Map,Ts[Ns("finalized")]=new Map,An==null||An({ReactiveElement:Ts}),(ht.reactiveElementVersions??(ht.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gs=globalThis,Pr=Gs.trustedTypes,Vl=Pr?Pr.createPolicy("lit-html",{createHTML:e=>e}):void 0,La="$lit$",Je=`lit$${Math.random().toFixed(9).slice(2)}$`,Da="?"+Je,yg=`<${Da}>`,jt=document,Ys=()=>jt.createComment(""),qs=e=>e===null||typeof e!="object"&&typeof e!="function",Va=Array.isArray,Bd=e=>Va(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",zn=`[ 	
\f\r]`,As=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pl=/-->/g,Hl=/>/g,St=RegExp(`>|${zn}(?:([^\\s"'>=/]+)(${zn}*=${zn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fl=/'/g,jl=/"/g,Id=/^(?:script|style|textarea|title)$/i,wg=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),ge=wg(1),Ae=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),Wl=new WeakMap,Lt=jt.createTreeWalker(jt,129);function Nd(e,t){if(!Va(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vl!==void 0?Vl.createHTML(t):t}const Gd=(e,t)=>{const s=e.length-1,o=[];let r,n=t===2?"<svg>":t===3?"<math>":"",i=As;for(let l=0;l<s;l++){const d=e[l];let h,v,p=-1,x=0;for(;x<d.length&&(i.lastIndex=x,v=i.exec(d),v!==null);)x=i.lastIndex,i===As?v[1]==="!--"?i=Pl:v[1]!==void 0?i=Hl:v[2]!==void 0?(Id.test(v[2])&&(r=RegExp("</"+v[2],"g")),i=St):v[3]!==void 0&&(i=St):i===St?v[0]===">"?(i=r??As,p=-1):v[1]===void 0?p=-2:(p=i.lastIndex-v[2].length,h=v[1],i=v[3]===void 0?St:v[3]==='"'?jl:Fl):i===jl||i===Fl?i=St:i===Pl||i===Hl?i=As:(i=St,r=void 0);const w=i===St&&e[l+1].startsWith("/>")?" ":"";n+=i===As?d+yg:p>=0?(o.push(h),d.slice(0,p)+La+d.slice(p)+Je+w):d+Je+(p===-2?l:w)}return[Nd(e,n+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class Ks{constructor({strings:t,_$litType$:s},o){let r;this.parts=[];let n=0,i=0;const l=t.length-1,d=this.parts,[h,v]=Gd(t,s);if(this.el=Ks.createElement(h,o),Lt.currentNode=this.el.content,s===2||s===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=Lt.nextNode())!==null&&d.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const p of r.getAttributeNames())if(p.endsWith(La)){const x=v[i++],w=r.getAttribute(p).split(Je),$=/([.?@])?(.*)/.exec(x);d.push({type:1,index:n,name:$[2],strings:w,ctor:$[1]==="."?Ud:$[1]==="?"?Yd:$[1]==="@"?qd:Xo}),r.removeAttribute(p)}else p.startsWith(Je)&&(d.push({type:6,index:n}),r.removeAttribute(p));if(Id.test(r.tagName)){const p=r.textContent.split(Je),x=p.length-1;if(x>0){r.textContent=Pr?Pr.emptyScript:"";for(let w=0;w<x;w++)r.append(p[w],Ys()),Lt.nextNode(),d.push({type:2,index:++n});r.append(p[x],Ys())}}}else if(r.nodeType===8)if(r.data===Da)d.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(Je,p+1))!==-1;)d.push({type:7,index:n}),p+=Je.length-1}n++}}static createElement(t,s){const o=jt.createElement("template");return o.innerHTML=t,o}}function Wt(e,t,s=e,o){var i,l;if(t===Ae)return t;let r=o!==void 0?(i=s._$Co)==null?void 0:i[o]:s._$Cl;const n=qs(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),n===void 0?r=void 0:(r=new n(e),r._$AT(e,s,o)),o!==void 0?(s._$Co??(s._$Co=[]))[o]=r:s._$Cl=r),r!==void 0&&(t=Wt(e,r._$AS(e,t.values),r,o)),t}let Zd=class{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:o}=this._$AD,r=((t==null?void 0:t.creationScope)??jt).importNode(s,!0);Lt.currentNode=r;let n=Lt.nextNode(),i=0,l=0,d=o[0];for(;d!==void 0;){if(i===d.index){let h;d.type===2?h=new Cs(n,n.nextSibling,this,t):d.type===1?h=new d.ctor(n,d.name,d.strings,this,t):d.type===6&&(h=new Kd(n,this,t)),this._$AV.push(h),d=o[++l]}i!==(d==null?void 0:d.index)&&(n=Lt.nextNode(),i++)}return Lt.currentNode=jt,r}p(t){let s=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,s),s+=o.strings.length-2):o._$AI(t[s])),s++}};class Cs{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,s,o,r){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=o,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=Wt(this,t,s),qs(t)?t===N||t==null||t===""?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==Ae&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Bd(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==N&&qs(this._$AH)?this._$AA.nextSibling.data=t:this.T(jt.createTextNode(t)),this._$AH=t}$(t){var n;const{values:s,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Ks.createElement(Nd(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(s);else{const i=new Zd(r,this),l=i.u(this.options);i.p(s),this.T(l),this._$AH=i}}_$AC(t){let s=Wl.get(t.strings);return s===void 0&&Wl.set(t.strings,s=new Ks(t)),s}k(t){Va(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let o,r=0;for(const n of t)r===s.length?s.push(o=new Cs(this.O(Ys()),this.O(Ys()),this,this.options)):o=s[r],o._$AI(n),r++;r<s.length&&(this._$AR(o&&o._$AB.nextSibling,r),s.length=r)}_$AR(t=this._$AA.nextSibling,s){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,s);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var s;this._$AM===void 0&&(this._$Cv=t,(s=this._$AP)==null||s.call(this,t))}}class Xo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,o,r,n){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=s,this._$AM=r,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=N}_$AI(t,s=this,o,r){const n=this.strings;let i=!1;if(n===void 0)t=Wt(this,t,s,0),i=!qs(t)||t!==this._$AH&&t!==Ae,i&&(this._$AH=t);else{const l=t;let d,h;for(t=n[0],d=0;d<n.length-1;d++)h=Wt(this,l[o+d],s,d),h===Ae&&(h=this._$AH[d]),i||(i=!qs(h)||h!==this._$AH[d]),h===N?t=N:t!==N&&(t+=(h??"")+n[d+1]),this._$AH[d]=h}i&&!r&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ud extends Xo{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}class Yd extends Xo{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==N)}}class qd extends Xo{constructor(t,s,o,r,n){super(t,s,o,r,n),this.type=5}_$AI(t,s=this){if((t=Wt(this,t,s,0)??N)===Ae)return;const o=this._$AH,r=t===N&&o!==N||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==N&&(o===N||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,t):this._$AH.handleEvent(t)}}class Kd{constructor(t,s,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Wt(this,t)}}const _g={M:La,P:Je,A:Da,C:1,L:Gd,R:Zd,D:Bd,V:Wt,I:Cs,H:Xo,N:Yd,U:qd,B:Ud,F:Kd},On=Gs.litHtmlPolyfillSupport;On==null||On(Ks,Cs),(Gs.litHtmlVersions??(Gs.litHtmlVersions=[])).push("3.2.1");const Cg=(e,t,s)=>{const o=(s==null?void 0:s.renderBefore)??t;let r=o._$litPart$;if(r===void 0){const n=(s==null?void 0:s.renderBefore)??null;o._$litPart$=r=new Cs(t.insertBefore(Ys(),n),n,void 0,s??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pr=globalThis,Pa=pr.ShadowRoot&&(pr.ShadyCSS===void 0||pr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ha=Symbol(),Rl=new WeakMap;let Xd=class{constructor(t,s,o){if(this._$cssResult$=!0,o!==Ha)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(Pa&&t===void 0){const o=s!==void 0&&s.length===1;o&&(t=Rl.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Rl.set(s,t))}return t}toString(){return this.cssText}};const G=e=>new Xd(typeof e=="string"?e:e+"",void 0,Ha),D=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((o,r,n)=>o+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1],e[0]);return new Xd(s,e,Ha)},kg=(e,t)=>{if(Pa)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const o=document.createElement("style"),r=pr.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=s.cssText,e.appendChild(o)}},Bl=Pa?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const o of t.cssRules)s+=o.cssText;return G(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$g,defineProperty:Sg,getOwnPropertyDescriptor:Mg,getOwnPropertyNames:Eg,getOwnPropertySymbols:Tg,getPrototypeOf:Ag}=Object,pt=globalThis,Il=pt.trustedTypes,zg=Il?Il.emptyScript:"",Ln=pt.reactiveElementPolyfillSupport,Zs=(e,t)=>e,In={toAttribute(e,t){switch(t){case Boolean:e=e?zg:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Jd=(e,t)=>!$g(e,t),Nl={attribute:!0,type:String,converter:In,reflect:!1,hasChanged:Jd};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),pt.litPropertyMetadata??(pt.litPropertyMetadata=new WeakMap);class es extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=Nl){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,s);r!==void 0&&Sg(this.prototype,t,r)}}static getPropertyDescriptor(t,s,o){const{get:r,set:n}=Mg(this.prototype,t)??{get(){return this[s]},set(i){this[s]=i}};return{get(){return r==null?void 0:r.call(this)},set(i){const l=r==null?void 0:r.call(this);n.call(this,i),this.requestUpdate(t,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Nl}static _$Ei(){if(this.hasOwnProperty(Zs("elementProperties")))return;const t=Ag(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Zs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Zs("properties"))){const s=this.properties,o=[...Eg(s),...Tg(s)];for(const r of o)this.createProperty(r,s[r])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[o,r]of s)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[s,o]of this.elementProperties){const r=this._$Eu(s,o);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)s.unshift(Bl(r))}else t!==void 0&&s.push(Bl(t));return s}static _$Eu(t,s){const o=s.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(s=>s(this))}addController(t){var s;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var s;(s=this._$EO)==null||s.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const o of s.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return kg(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var o;return(o=s.hostConnected)==null?void 0:o.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(s=>{var o;return(o=s.hostDisconnected)==null?void 0:o.call(s)})}attributeChangedCallback(t,s,o){this._$AK(t,o)}_$EC(t,s){var n;const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(r!==void 0&&o.reflect===!0){const i=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:In).toAttribute(s,o.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,s){var n;const o=this.constructor,r=o._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const i=o.getPropertyOptions(r),l=typeof i.converter=="function"?{fromAttribute:i.converter}:((n=i.converter)==null?void 0:n.fromAttribute)!==void 0?i.converter:In;this._$Em=r,this[r]=l.fromAttribute(s,i.type),this._$Em=null}}requestUpdate(t,s,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??Jd)(this[t],s))return;this.P(t,s,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,s,o){this._$AL.has(t)||this._$AL.set(t,s),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,i]of r)i.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],i)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(o=this._$EO)==null||o.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(s)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(s)}willUpdate(t){}_$AE(t){var s;(s=this._$EO)==null||s.forEach(o=>{var r;return(r=o.hostUpdated)==null?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EC(s,this[s]))),this._$EU()}updated(t){}firstUpdated(t){}}es.elementStyles=[],es.shadowRootOptions={mode:"open"},es[Zs("elementProperties")]=new Map,es[Zs("finalized")]=new Map,Ln==null||Ln({ReactiveElement:es}),(pt.reactiveElementVersions??(pt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let E=class extends es{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const t=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=t.firstChild),t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Cg(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Ae}};var Wd;E._$litElement$=!0,E.finalized=!0,(Wd=globalThis.litElementHydrateSupport)==null||Wd.call(globalThis,{LitElement:E});const Dn=globalThis.litElementPolyfillSupport;Dn==null||Dn({LitElement:E});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=e=>(t,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Og={attribute:!0,type:String,converter:Vr,reflect:!1,hasChanged:Oa},Lg=(e=Og,t,s)=>{const{kind:o,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(s.name,e),o==="accessor"){const{name:i}=s;return{set(l){const d=t.get.call(this);t.set.call(this,l),this.requestUpdate(i,d,e)},init(l){return l!==void 0&&this.P(i,void 0,e),l}}}if(o==="setter"){const{name:i}=s;return function(l){const d=this[i];t.call(this,l),this.requestUpdate(i,d,e)}}throw Error("Unsupported decorator location: "+o)};function g(e){return(t,s)=>typeof s=="object"?Lg(e,t,s):((o,r,n)=>{const i=r.hasOwnProperty(n);return r.constructor.createProperty(n,i?{...o,wrapped:!0}:o),i?Object.getOwnPropertyDescriptor(r,n):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(e){return g({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fa=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function te(e,t){return(s,o,r)=>{const n=i=>{var l;return((l=i.renderRoot)==null?void 0:l.querySelector(e))??null};return Fa(s,o,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Dg;function Vg(e){return(t,s)=>Fa(t,s,{get(){return(this.renderRoot??Dg??(Dg=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xt(e){return(t,s)=>Fa(t,s,{async get(){var o;return await this.updateComplete,((o=this.renderRoot)==null?void 0:o.querySelector(e))??null}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qd=(e,t,s)=>{for(const o of t)if(o[0]===e)return(0,o[1])();return s==null?void 0:s()};var ja=Object.defineProperty,Pg=Object.defineProperties,Hg=Object.getOwnPropertyDescriptor,Fg=Object.getOwnPropertyDescriptors,Gl=Object.getOwnPropertySymbols,jg=Object.prototype.hasOwnProperty,Wg=Object.prototype.propertyIsEnumerable,Zl=(e,t,s)=>t in e?ja(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,ds=(e,t)=>{for(var s in t||(t={}))jg.call(t,s)&&Zl(e,s,t[s]);if(Gl)for(var s of Gl(t))Wg.call(t,s)&&Zl(e,s,t[s]);return e},Hr=(e,t)=>Pg(e,Fg(t)),Rg=(e,t)=>{for(var s in t)ja(e,s,{get:t[s],enumerable:!0})},a=(e,t,s,o)=>{for(var r=o>1?void 0:o?Hg(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&ja(t,s,r),r},Wa=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},c=(e,t,s)=>(Wa(e,t,"read from private field"),s?s.call(e):t.get(e)),f=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},U=(e,t,s,o)=>(Wa(e,t,"write to private field"),t.set(e,s),s),C=(e,t,s)=>(Wa(e,t,"access private method"),s),Pt="-7d8ebe",Ra=class{static get instance(){var t;return(t=globalThis.__gdsElementLookupTable)!=null&&t[Pt]||(globalThis.__gdsElementLookupTable=Hr(ds({},globalThis.__gdsElementLookupTable),{[Pt]:new Map})),globalThis.__gdsElementLookupTable[Pt]}};function Bg(e){const t=e+Pt;return Ra.instance.set(e,t),function(s){return s.prototype.gdsElementName=e,customElements.get(t)?o=>!1:O(t)(s)}}function Ig(e){return Ra.instance.set(e,e),function(t){return t.prototype.gdsElementName=e,O(e)(t)}}var k=e=>globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?Ig(e):Bg(e),Ul=new WeakMap;function Ng(e,...t){let s=Ul.get(e);return s||(s=Yl(e),s.raw=Yl(e.raw),Ul.set(e,s)),[s,...t]}var Yl=e=>e.map(t=>{for(const[s,o]of Ra.instance.entries())t=t.replace(new RegExp(`${s}(?![-a-z])`,"mg"),o);return t});function Gg(e){return(t,...s)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return e(t,...s);const[o,...r]=Ng(t,...s);return e(o,...r)}}var m=Gg(ge),ec=D`
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
`,Zg={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},Ug=/^([<|>]=?)?([0-9a-z]+)/,tc=["{","}",";",":",","],ql=[" ","/n"];function Yg(e){const t=[];let s="";for(let o=0;o<e.length;o++){const r=e[o];if(ql.includes(r)||(s+=r),tc.includes(r)){t.push(s.slice(0,-1)),t.push(r),s="";continue}if(ql.includes(r)||o===e.length-1){t.push(s),s="";continue}}return t.filter(o=>o!=="")}function qg(e){var t;const s=[];let o={breakpoint:"-",values:[]};const r=()=>({sel:"",values:[]});let n=r();for(const i of e){if(!tc.includes(i)){n.values.push(i);continue}if(i==="{"&&(o={breakpoint:n.values.join(","),values:[]},n=r()),i===";"&&(s.length===0&&s.push(o),n.values.length>0&&(o.values.push(n),n=r())),i===":"){const l=(t=n.values.pop())!=null?t:"";n.sel=l}o&&i==="}"&&(o.values.push(n),n=r(),s.push(o))}return n.values.length>0&&o.values.push(n),s.length===0&&s.push(o),s}function Kg(e){return e.split(",").map(s=>{const o=s.trim().match(Ug);if(!o)throw new Error(`Invalid breakpoint specifier: ${s}`);return{condition:o[1],value:o[2]}})}function Xg(e,t,s,o=n=>n,r=(n,i)=>`${n}: ${i.join(" ")};`){let n="";for(const i of s){const h=`@media ${(i.breakpoint==="-"?[{condition:">=",value:"0"}]:Kg(i.breakpoint)).map(v=>{var p,x;return`(${(p=v.condition)!=null&&p.includes("<")?"max-width":"min-width"}: ${(x=Zg[v.value])!=null?x:v.value})`}).join(" and ")} {${i.values.map(v=>{let p=e;v.sel.length>0&&(p=e===":host"?`:host(:${v.sel})`:`${e}:${v.sel}`);const x=r(t,v.values.map(o));return v.sel==="hover"?`@media (hover: hover) {${p}{${x}}}`:`${p}{${x}}`}).join("")}}`;n+=h}return n}var Vn=new Map;function y(e){return(t,s)=>{var o,r,n,i;const l=(o=e==null?void 0:e.selector)!=null?o:":host",d=(r=e==null?void 0:e.property)!=null?r:String(s),h=(n=e==null?void 0:e.valueTemplate)!=null?n:x=>`var(--gds-space-${x}, 0)`,v=e==null?void 0:e.styleTemplate,p=(i=e==null?void 0:e.cacheOverrideKey)!=null?i:"0";g({attribute:e==null?void 0:e.attribute,noAccessor:!0})(t,s),Object.defineProperty(t,s,{get:function(){return this["__"+String(s)]},set:async function(x){var w;this["__"+String(s)]=x,await this.updateComplete;const $=(w=this.level)!=null?w:"0",M=l+d+x+$+p;if(Vn.has(M)){this._dynamicStylesController.inject(`sep_${String(s)}`,Vn.get(M));return}const j=qg(Yg(x)),H=Xg(l,d,j,h.bind(this),v==null?void 0:v.bind(this)),R=G(H);Vn.set(M,R),this._dynamicStylesController.inject(`sep_${String(s)}`,R)}})}}var Ve,Fr,Qe,jr,Dt,Pe,ct,Wr,Nn,sc,ts,Os,Gn,oc,Jg=class{constructor(e){f(this,Nn),f(this,ts),f(this,Gn),f(this,Ve,!Ba()),f(this,Fr,!1),f(this,Qe,[]),f(this,jr,[]),f(this,Dt,new Map),f(this,Pe,new Map),f(this,ct,[]),f(this,Wr,[]),this.host=e,this.host.addController(this)}hostConnected(){C(this,Gn,oc).call(this)}has(e){return c(this,Ve)?c(this,Pe).has(e):c(this,Dt).has(e)}inject(e,t){C(this,Nn,sc).call(this,e,t),C(this,ts,Os).call(this)}clear(e){if(c(this,Ve)){const t=c(this,Pe).get(e);t==null||t.remove(),c(this,Pe).delete(e)}else c(this,Dt).delete(e);C(this,ts,Os).call(this)}clearAll(){c(this,Ve)?(c(this,Pe).forEach(e=>e.remove()),c(this,ct).forEach(e=>e.remove()),c(this,Pe).clear(),U(this,ct,[])):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],c(this,Dt).clear(),U(this,Qe,[]))}clearInitial(){c(this,Ve)?(c(this,ct).forEach(e=>e.remove()),U(this,ct,[])):U(this,Qe,[]),C(this,ts,Os).call(this)}restoreInitial(){c(this,Ve)?c(this,Wr).forEach(e=>{c(this,ct).push(e.cloneNode(!0))}):U(this,Qe,[...c(this,jr)]),C(this,ts,Os).call(this)}};Ve=new WeakMap;Fr=new WeakMap;Qe=new WeakMap;jr=new WeakMap;Dt=new WeakMap;Pe=new WeakMap;ct=new WeakMap;Wr=new WeakMap;Nn=new WeakSet;sc=function(e,t){if(c(this,Ve)){let s=c(this,Pe).get(e);s||(s=document.createElement("style"),c(this,Pe).set(e,s)),s.textContent=t.cssText}else{if(!this.host.shadowRoot||!t.styleSheet)return;c(this,Dt).set(e,t.styleSheet)}};ts=new WeakSet;Os=function(){if(c(this,Ve)){if(!this.host.shadowRoot)return;this.host.shadowRoot.querySelectorAll("style").forEach(e=>{e.remove()}),c(this,Pe).forEach(e=>{var t;(t=this.host.shadowRoot)==null||t.appendChild(e)})}else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...c(this,Qe),...Array.from(c(this,Dt).values())]}};Gn=new WeakSet;oc=function(){if(!c(this,Fr)){if(c(this,Ve)){if(!this.host.shadowRoot)return;this.host.shadowRoot.querySelectorAll("style").forEach(e=>{c(this,ct).push(e),c(this,Wr).push(e.cloneNode(!0))})}else this.host.shadowRoot&&c(this,Qe).length===0&&(U(this,Qe,[...this.host.shadowRoot.adoptedStyleSheets||[]]),U(this,jr,[...c(this,Qe)]));U(this,Fr,!0)}};function Ba(){try{return new CSSStyleSheet,!0}catch{return!1}}var Zn,Rr,Br,Ia,Un,rc,Yn,nc,Qg=class ic{constructor(){f(this,Un),f(this,Yn),f(this,Zn,!Ba()),f(this,Rr,new Map),f(this,Br,new Map),f(this,Ia,document.adoptedStyleSheets||[])}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new ic),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(t,s){if(c(this,Zn)){const o=Array.isArray(s)?s.map(r=>r.toString()).join(""):s.toString();C(this,Un,rc).call(this,t,o)}else s.styleSheet&&C(this,Yn,nc).call(this,t,s.styleSheet)}};Zn=new WeakMap;Rr=new WeakMap;Br=new WeakMap;Ia=new WeakMap;Un=new WeakSet;rc=function(e,t){let s=c(this,Br).get(e);s||(s=document.createElement("style"),c(this,Br).set(e,s)),s.textContent=t,document.head.appendChild(s)};Yn=new WeakSet;nc=function(e,t){c(this,Rr).set(e,t),document.adoptedStyleSheets=[...c(this,Ia),...Array.from(c(this,Rr).values())]};var eh=Qg,qn=`/**
 * Do not edit directly
 * Generated on Tue, 26 Nov 2024 14:04:05 GMT
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
`,ac=`/**
 * Do not edit directly
 * Generated on Tue, 26 Nov 2024 14:04:05 GMT
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
`,th=`/**
 * Do not edit directly
 * Generated on Tue, 26 Nov 2024 14:04:05 GMT
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
`,sh=`/**
 * Do not edit directly
 * Generated on Tue, 26 Nov 2024 14:04:05 GMT
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
`,oh=`/**
 * Do not edit directly
 * Generated on Tue, 26 Nov 2024 14:04:05 GMT
 */

:host {
--gds-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
--gds-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
--gds-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);
--gds-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03);
--gds-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03);
}
`,rh=`/**
 * Do not edit directly
 * Generated on Tue, 26 Nov 2024 14:04:05 GMT
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
`,nh=`/**
 * Do not edit directly
 * Generated on Tue, 26 Nov 2024 14:04:05 GMT
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
`,ih=`/**
 * Do not edit directly
 * Generated on Tue, 26 Nov 2024 14:04:05 GMT
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
`,J=[G(sh),G(rh),G(ih),G(nh),G(th),G(oh)];eh.instance.injectGlobalStyles("root-tokens",D`
    :root,
    :root[gds-theme='light'] {
      ${G(ac)}
    }
    :root[gds-theme='dark'] {
      ${G(qn)}
    }
  `);var Kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/*! *****************************************************************************
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
***************************************************************************** */var Xl;(function(e){(function(t){var s=typeof Kl=="object"?Kl:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),o=r(e);typeof s.Reflect>"u"?s.Reflect=e:o=r(s.Reflect,o),t(o);function r(n,i){return function(l,d){typeof n[l]!="function"&&Object.defineProperty(n,l,{configurable:!0,writable:!0,value:d}),i&&i(l,d)}}})(function(t){var s=Object.prototype.hasOwnProperty,o=typeof Symbol=="function",r=o&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",n=o&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",i=typeof Object.create=="function",l={__proto__:[]}instanceof Array,d=!i&&!l,h={create:i?function(){return En(Object.create(null))}:l?function(){return En({__proto__:null})}:function(){return En({})},has:d?function(u,b){return s.call(u,b)}:function(u,b){return b in u},get:d?function(u,b){return s.call(u,b)?u[b]:void 0}:function(u,b){return u[b]}},v=Object.getPrototypeOf(Function),p=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",x=!p&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:ag(),w=!p&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:lg(),$=!p&&typeof WeakMap=="function"?WeakMap:dg(),M=new $;function j(u,b,_,S){if(oe(_)){if(!$l(u))throw new TypeError;if(!Sl(b))throw new TypeError;return De(u,b)}else{if(!$l(u))throw new TypeError;if(!he(b))throw new TypeError;if(!he(S)&&!oe(S)&&!Jt(S))throw new TypeError;return Jt(S)&&(S=void 0),_=Ue(_),kt(u,b,_,S)}}t("decorate",j);function H(u,b){function _(S,T){if(!he(S))throw new TypeError;if(!oe(T)&&!sg(T))throw new TypeError;we(u,b,S,T)}return _}t("metadata",H);function R(u,b,_,S){if(!he(_))throw new TypeError;return oe(S)||(S=Ue(S)),we(u,b,_,S)}t("defineMetadata",R);function K(u,b,_){if(!he(b))throw new TypeError;return oe(_)||(_=Ue(_)),rt(u,b,_)}t("hasMetadata",K);function ie(u,b,_){if(!he(b))throw new TypeError;return oe(_)||(_=Ue(_)),se(u,b,_)}t("hasOwnMetadata",ie);function X(u,b,_){if(!he(b))throw new TypeError;return oe(_)||(_=Ue(_)),Ze(u,b,_)}t("getMetadata",X);function ke(u,b,_){if(!he(b))throw new TypeError;return oe(_)||(_=Ue(_)),$e(u,b,_)}t("getOwnMetadata",ke);function Ne(u,b){if(!he(u))throw new TypeError;return oe(b)||(b=Ue(b)),Ee(u,b)}t("getMetadataKeys",Ne);function Ct(u,b){if(!he(u))throw new TypeError;return oe(b)||(b=Ue(b)),Te(u,b)}t("getOwnMetadataKeys",Ct);function Ge(u,b,_){if(!he(b))throw new TypeError;oe(_)||(_=Ue(_));var S=ye(b,_,!1);if(oe(S)||!S.delete(u))return!1;if(S.size>0)return!0;var T=M.get(b);return T.delete(_),T.size>0||M.delete(b),!0}t("deleteMetadata",Ge);function De(u,b){for(var _=u.length-1;_>=0;--_){var S=u[_],T=S(b);if(!oe(T)&&!Jt(T)){if(!Sl(T))throw new TypeError;b=T}}return b}function kt(u,b,_,S){for(var T=u.length-1;T>=0;--T){var be=u[T],F=be(b,_,S);if(!oe(F)&&!Jt(F)){if(!he(F))throw new TypeError;S=F}}return S}function ye(u,b,_){var S=M.get(u);if(oe(S)){if(!_)return;S=new x,M.set(u,S)}var T=S.get(b);if(oe(T)){if(!_)return;T=new x,S.set(b,T)}return T}function rt(u,b,_){var S=se(u,b,_);if(S)return!0;var T=Mn(b);return Jt(T)?!1:rt(u,T,_)}function se(u,b,_){var S=ye(b,_,!1);return oe(S)?!1:eg(S.has(u))}function Ze(u,b,_){var S=se(u,b,_);if(S)return $e(u,b,_);var T=Mn(b);if(!Jt(T))return Ze(u,T,_)}function $e(u,b,_){var S=ye(b,_,!1);if(!oe(S))return S.get(u)}function we(u,b,_,S){var T=ye(_,S,!0);T.set(u,b)}function Ee(u,b){var _=Te(u,b),S=Mn(u);if(S===null)return _;var T=Ee(S,b);if(T.length<=0)return _;if(_.length<=0)return T;for(var be=new w,F=[],W=0,A=_;W<A.length;W++){var B=A[W],I=be.has(B);I||(be.add(B),F.push(B))}for(var nt=0,El=T;nt<El.length;nt++){var B=El[nt],I=be.has(B);I||(be.add(B),F.push(B))}return F}function Te(u,b){var _=[],S=ye(u,b,!1);if(oe(S))return _;for(var T=S.keys(),be=og(T),F=0;;){var W=ng(be);if(!W)return _.length=F,_;var A=rg(W);try{_[F]=A}catch(B){try{ig(be)}finally{throw B}}F++}}function ir(u){if(u===null)return 1;switch(typeof u){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return u===null?1:6;default:return 6}}function oe(u){return u===void 0}function Jt(u){return u===null}function X1(u){return typeof u=="symbol"}function he(u){return typeof u=="object"?u!==null:typeof u=="function"}function J1(u,b){switch(ir(u)){case 0:return u;case 1:return u;case 2:return u;case 3:return u;case 4:return u;case 5:return u}var _="string",S=Ml(u,r);if(S!==void 0){var T=S.call(u,_);if(he(T))throw new TypeError;return T}return Q1(u)}function Q1(u,b){var _,S;{var T=u.toString;if(ar(T)){var S=T.call(u);if(!he(S))return S}var _=u.valueOf;if(ar(_)){var S=_.call(u);if(!he(S))return S}}throw new TypeError}function eg(u){return!!u}function tg(u){return""+u}function Ue(u){var b=J1(u);return X1(b)?b:tg(b)}function $l(u){return Array.isArray?Array.isArray(u):u instanceof Object?u instanceof Array:Object.prototype.toString.call(u)==="[object Array]"}function ar(u){return typeof u=="function"}function Sl(u){return typeof u=="function"}function sg(u){switch(ir(u)){case 3:return!0;case 4:return!0;default:return!1}}function Ml(u,b){var _=u[b];if(_!=null){if(!ar(_))throw new TypeError;return _}}function og(u){var b=Ml(u,n);if(!ar(b))throw new TypeError;var _=b.call(u);if(!he(_))throw new TypeError;return _}function rg(u){return u.value}function ng(u){var b=u.next();return b.done?!1:b}function ig(u){var b=u.return;b&&b.call(u)}function Mn(u){var b=Object.getPrototypeOf(u);if(typeof u!="function"||u===v||b!==v)return b;var _=u.prototype,S=_&&Object.getPrototypeOf(_);if(S==null||S===Object.prototype)return b;var T=S.constructor;return typeof T!="function"||T===u?b:T}function ag(){var u={},b=[],_=function(){function F(W,A,B){this._index=0,this._keys=W,this._values=A,this._selector=B}return F.prototype["@@iterator"]=function(){return this},F.prototype[n]=function(){return this},F.prototype.next=function(){var W=this._index;if(W>=0&&W<this._keys.length){var A=this._selector(this._keys[W],this._values[W]);return W+1>=this._keys.length?(this._index=-1,this._keys=b,this._values=b):this._index++,{value:A,done:!1}}return{value:void 0,done:!0}},F.prototype.throw=function(W){throw this._index>=0&&(this._index=-1,this._keys=b,this._values=b),W},F.prototype.return=function(W){return this._index>=0&&(this._index=-1,this._keys=b,this._values=b),{value:W,done:!0}},F}();return function(){function F(){this._keys=[],this._values=[],this._cacheKey=u,this._cacheIndex=-2}return Object.defineProperty(F.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),F.prototype.has=function(W){return this._find(W,!1)>=0},F.prototype.get=function(W){var A=this._find(W,!1);return A>=0?this._values[A]:void 0},F.prototype.set=function(W,A){var B=this._find(W,!0);return this._values[B]=A,this},F.prototype.delete=function(W){var A=this._find(W,!1);if(A>=0){for(var B=this._keys.length,I=A+1;I<B;I++)this._keys[I-1]=this._keys[I],this._values[I-1]=this._values[I];return this._keys.length--,this._values.length--,W===this._cacheKey&&(this._cacheKey=u,this._cacheIndex=-2),!0}return!1},F.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=u,this._cacheIndex=-2},F.prototype.keys=function(){return new _(this._keys,this._values,S)},F.prototype.values=function(){return new _(this._keys,this._values,T)},F.prototype.entries=function(){return new _(this._keys,this._values,be)},F.prototype["@@iterator"]=function(){return this.entries()},F.prototype[n]=function(){return this.entries()},F.prototype._find=function(W,A){return this._cacheKey!==W&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=W)),this._cacheIndex<0&&A&&(this._cacheIndex=this._keys.length,this._keys.push(W),this._values.push(void 0)),this._cacheIndex},F}();function S(F,W){return F}function T(F,W){return W}function be(F,W){return[F,W]}}function lg(){return function(){function u(){this._map=new x}return Object.defineProperty(u.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),u.prototype.has=function(b){return this._map.has(b)},u.prototype.add=function(b){return this._map.set(b,b),this},u.prototype.delete=function(b){return this._map.delete(b)},u.prototype.clear=function(){this._map.clear()},u.prototype.keys=function(){return this._map.keys()},u.prototype.values=function(){return this._map.values()},u.prototype.entries=function(){return this._map.entries()},u.prototype["@@iterator"]=function(){return this.keys()},u.prototype[n]=function(){return this.keys()},u}()}function dg(){var u=16,b=h.create(),_=S();return function(){function A(){this._key=S()}return A.prototype.has=function(B){var I=T(B,!1);return I!==void 0?h.has(I,this._key):!1},A.prototype.get=function(B){var I=T(B,!1);return I!==void 0?h.get(I,this._key):void 0},A.prototype.set=function(B,I){var nt=T(B,!0);return nt[this._key]=I,this},A.prototype.delete=function(B){var I=T(B,!1);return I!==void 0?delete I[this._key]:!1},A.prototype.clear=function(){this._key=S()},A}();function S(){var A;do A="@@WeakMap@@"+W();while(h.has(b,A));return b[A]=!0,A}function T(A,B){if(!s.call(A,_)){if(!B)return;Object.defineProperty(A,_,{value:h.create()})}return A[_]}function be(A,B){for(var I=0;I<B;++I)A[I]=Math.random()*255|0;return A}function F(A){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(A)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(A)):be(new Uint8Array(A),A):be(new Array(A),A)}function W(){var A=F(u);A[6]=A[6]&79|64,A[8]=A[8]&191|128;for(var B="",I=0;I<u;++I){var nt=A[I];(I===4||I===6||I===8)&&(B+="-"),nt<16&&(B+="0"),B+=nt.toString(16).toLowerCase()}return B}}function En(u){return u.__=void 0,delete u.__,u}})})(Xl||(Xl={}));var Y=class extends E{constructor(){super(),this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new Jg(this)}connectedCallback(){var e;super.connectedCallback(),this.setAttribute("gds-element",((e=this.gdsElementName)==null?void 0:e.toString())||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}};a([P()],Y.prototype,"_isUsingTransitionalStyles",2);var ah=D`
  :host {
    box-sizing: border-box;
  }
  :host(:focus-visible) {
    outline-color: color-mix(in srgb, currentcolor, #000 100%);
    outline-offset: var(--gds-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-space-3xs);
  }
`,lh=ah,z=class extends Y{constructor(){super(...arguments),this.display="block",this.level="2"}render(){return m`<slot></slot>`}};z.styles=[J,lh];a([y({valueTemplate:e=>e})],z.prototype,"display",2);a([g()],z.prototype,"level",2);a([y({valueTemplate:e=>e})],z.prototype,"place-items",2);a([y({valueTemplate:e=>e})],z.prototype,"place-content",2);a([y({valueTemplate:function(e){const[t,s]=e.split("/"),o=i=>{const l=i.trim();return l.startsWith("#")||l.startsWith("rgb(")||l.startsWith("rgba(")||l.startsWith("hsl(")||l.startsWith("hsla(")},r=(i,l)=>`var(--gds-color-l${i}-content-${l})`;return((i,l)=>o(i)?l?`color-mix(in srgb, ${i} ${parseFloat(l)*100}%, transparent 0%)`:i:r(this.level,i))(t,s)}})],z.prototype,"color",2);a([y({valueTemplate:function(e){const[t,s]=e.split("/"),o=i=>{const l=i.trim();return l.startsWith("#")||l.startsWith("rgb(")||l.startsWith("rgba(")||l.startsWith("hsl(")||l.startsWith("hsla(")},r=(i,l)=>`var(--gds-color-l${i}-background-${l})`;return((i,l)=>o(i)?l?`color-mix(in srgb, ${i} ${parseFloat(l)*100}%, transparent 0%)`:i:r(this.level,i))(t,s)}})],z.prototype,"background",2);a([y({valueTemplate:function(e){const[t,s]=e.split("/"),o=i=>{const l=i.trim();return l.startsWith("#")||l.startsWith("rgb(")||l.startsWith("rgba(")||l.startsWith("hsl(")||l.startsWith("hsla(")},r=(i,l)=>`var(--gds-color-l${i}-border-${l})`;return`var(--gds-space-${t}) solid ${s?(i=>o(i)?i:r(this.level,i))(s):"currentColor"}`},styleTemplate:(e,t)=>{const s=t[0],o=t.length>1?t[1]:s,r=t.length>2?t[2]:s,n=t.length>3?t[3]:s;return`
        border-top: ${s};
        border-right: ${o};
        border-bottom: ${r};
        border-left: ${n};
      `}})],z.prototype,"border",2);a([y({valueTemplate:function(e){const[t]=e.split("/"),s=n=>{const i=n.trim();return i.startsWith("#")||i.startsWith("rgb(")||i.startsWith("rgba(")||i.startsWith("hsl(")||i.startsWith("hsla(")},o=(n,i)=>`var(--gds-color-l${n}-border-${i})`;return t?(n=>s(n)?n:o(this.level,n))(t):"currentColor"},styleTemplate:(e,t)=>{const s=t[0],o=t.length>1?t[1]:s,r=t.length>2?t[2]:s,n=t.length>3?t[3]:s;return`
        border-top-color: ${s};
        border-right-color: ${o};
        border-bottom-color: ${r};
        border-left-color: ${n};
      `}})],z.prototype,"border-color",2);a([y({styleTemplate:(e,t)=>{const s=t[0],o=t.length>1?t[1]:s,r=t.length>2?t[2]:s,n=t.length>3?t[3]:s;return`
        border-top-width: ${s};
        border-right-width: ${o};
        border-bottom-width: ${r};
        border-left-width: ${n};
        border-style: solid;
      `}})],z.prototype,"border-width",2);a([y({valueTemplate:e=>`var(--gds-space-${e})`})],z.prototype,"border-radius",2);a([y({valueTemplate:e=>e})],z.prototype,"opacity",2);a([y()],z.prototype,"padding",2);a([y()],z.prototype,"padding-inline",2);a([y()],z.prototype,"padding-block",2);a([y({valueTemplate:e=>{const s=(e.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-space-${e})`:`calc(var(--gds-space-${e.substring(1)}) * -1)`;return e==="auto"?"auto":s},styleTemplate:(e,t)=>{const s=l=>l==="auto"?"auto":`${l}`,o=s(t[0]),r=t.length>1?s(t[1]):o,n=t.length>2?s(t[2]):o,i=t.length>3?s(t[3]):r;return`margin: ${o} ${r} ${n} ${i};`}})],z.prototype,"margin",2);a([y({valueTemplate:e=>e})],z.prototype,"position",2);a([y({valueTemplate:e=>e})],z.prototype,"inset",2);a([y({valueTemplate:e=>e})],z.prototype,"overflow",2);a([y({valueTemplate:e=>e})],z.prototype,"height",2);a([y({valueTemplate:e=>e})],z.prototype,"max-height",2);a([y({valueTemplate:e=>e})],z.prototype,"min-height",2);a([y()],z.prototype,"block-size",2);a([y()],z.prototype,"min-block-size",2);a([y({valueTemplate:e=>e})],z.prototype,"width",2);a([y({valueTemplate:e=>e})],z.prototype,"max-width",2);a([y({valueTemplate:e=>e})],z.prototype,"min-width",2);a([y()],z.prototype,"inline-size",2);a([y({valueTemplate:e=>e})],z.prototype,"box-sizing",2);a([y({valueTemplate:e=>e})],z.prototype,"cursor",2);a([y({valueTemplate:e=>e})],z.prototype,"pointer-events",2);a([y({valueTemplate:e=>e})],z.prototype,"user-select",2);a([y({valueTemplate:e=>e})],z.prototype,"z-index",2);a([y({valueTemplate:e=>e})],z.prototype,"transform",2);a([y({valueTemplate:e=>e})],z.prototype,"transform-style",2);a([y({valueTemplate:e=>e})],z.prototype,"transition",2);a([y({valueTemplate:e=>e})],z.prototype,"transition-behavior",2);a([y({valueTemplate:e=>e})],z.prototype,"animation",2);a([y({valueTemplate:e=>`${e}`,styleTemplate:(e,t)=>{const s=t[0],o=`font-size: var(--gds-text-size-${s});`,r=`line-height: var(--gds-text-line-height-${s});`;return o+r}})],z.prototype,"font-size",2);a([y({property:"font-weight",valueTemplate:e=>`var(--gds-text-weight-${e})`})],z.prototype,"font-weight",2);a([y({valueTemplate:e=>`${e}`})],z.prototype,"grid-column",2);a([y({valueTemplate:e=>`${e}`})],z.prototype,"grid-row",2);a([y({valueTemplate:e=>`${e}`})],z.prototype,"flex",2);z=a([k("gds-container")],z);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Na=Symbol.for(""),dh=e=>{if((e==null?void 0:e.r)===Na)return e==null?void 0:e._$litStatic$},ch=e=>({_$litStatic$:e,r:Na}),Ir=(e,...t)=>({_$litStatic$:t.reduce((s,o,r)=>s+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[r+1],e[0]),r:Na}),Jl=new Map,gh=e=>(t,...s)=>{const o=s.length;let r,n;const i=[],l=[];let d,h=0,v=!1;for(;h<o;){for(d=t[h];h<o&&(n=s[h],(r=dh(n))!==void 0);)d+=r+t[++h],v=!0;h!==o&&l.push(n),i.push(d),h++}if(h===o&&i.push(t[o]),v){const p=i.join("$$lit$$");(t=Jl.get(p))===void 0&&(i.raw=i,Jl.set(p,t=i)),s=l}return e(t,...s)},Jo=gh(ge);var hh=D`
  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`,ph=hh,fe=class extends z{constructor(){super(...arguments),this.level="2",this.tag="span"}render(){const e=ch(encodeURI(this.tag));return Jo`<${e} tag><slot></slot></${e}>`}};fe.styles=[J,ec,ph];a([g()],fe.prototype,"level",2);a([g({type:String})],fe.prototype,"tag",2);a([y({valueTemplate:e=>`${e}`,selector:"[tag]",styleTemplate:(e,t)=>{const s=t[0],o=`font-size: var(--gds-text-size-${s});`,r=`line-height: var(--gds-text-line-height-${s});`;return o+r}})],fe.prototype,"font-size",2);a([y({property:"font-weight",selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],fe.prototype,"font-weight",2);a([y({property:"text-wrap",valueTemplate:e=>e})],fe.prototype,"text-wrap",2);a([y({property:"text-transform",valueTemplate:e=>e})],fe.prototype,"text-transform",2);a([y({property:"max-width",valueTemplate:e=>`${e}ch`})],fe.prototype,"max-width",2);a([y({property:"min-width",valueTemplate:e=>`${e}ch`})],fe.prototype,"min-width",2);a([y({property:"text-align",valueTemplate:e=>e})],fe.prototype,"text-align",2);a([y({valueTemplate:e=>e,selector:"[tag]"})],fe.prototype,"text-decoration",2);a([y({valueTemplate:e=>e,styleTemplate:(e,t)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${t[0]};
      -webkit-box-orient: vertical;`})],fe.prototype,"lines",2);a([y({property:"color",valueTemplate:function(e){const[t,s]=e.split("/");return s?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-content-${t}) ${parseFloat(s)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-content-${t})`}})],fe.prototype,"color",2);fe=a([k("gds-text")],fe);var ur,fr,Kn,uh=class lc{constructor(){f(this,ur,new Map),f(this,fr,new Map),f(this,Kn,!Ba())}static get instance(){var t;return(t=globalThis.__gdsTransitionalStyles)!=null&&t[Pt]||(globalThis.__gdsTransitionalStyles=Hr(ds({},globalThis.__gdsTransitionalStyles),{[Pt]:new lc})),globalThis.__gdsTransitionalStyles[Pt]}apply(t,s){if(!t.shadowRoot)return;const o=c(this,ur).get(s);o&&(c(this,fr).set(s,t),this.applyToElement(s,o))}applyToElement(t,s){var o,r;const n=c(this,fr).get(t);if(!n||!n.shadowRoot)return;const i=()=>{n._dynamicStylesController.clearInitial(),n._dynamicStylesController.inject("t-styles",G(s)),n._isUsingTransitionalStyles=!0},l=()=>{n._isUsingTransitionalStyles=!1,n._dynamicStylesController.clear("t-styles"),n._dynamicStylesController.restoreInitial()},d="[gds-element=gds-theme]";let h=n.getRootNode(),v=n.closest(d);for(;v===null&&h!==document;)v=(o=h.host)==null?void 0:o.closest(d),h=(r=h.host)==null?void 0:r.getRootNode();if(v){const p=v,x=()=>{p.designVersion==="2023"?l():i()};if(p.addEventListener("gds-design-version-changed",x),n.addEventListener("gds-element-disconnected",()=>p.removeEventListener("gds-design-version-changed",x)),p.designVersion==="2023"){l();return}}i()}register(t,s){let o=s;c(this,Kn)&&(o=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${s}`),c(this,ur).set(t,o),this.applyToElement(t,o)}};ur=new WeakMap;fr=new WeakMap;Kn=new WeakMap;var xe=uh,fh=D`
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
`,mh=fh,Xn=class extends Y{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>xe.instance.apply(this,"gds-menu-heading"))}render(){return ge`<slot></slot>`}};Xn.styles=mh;Xn=a([k("gds-menu-heading")],Xn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jn="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vh=(e,...t)=>({strTag:!0,strings:e,values:t}),Nr=vh,bh=e=>typeof e!="string"&&"strTag"in e,dc=(e,t,s)=>{let o=e[0];for(let r=1;r<e.length;r++)o+=t[s?s[r-1]:r-1],o+=e[r];return o};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cc=e=>bh(e)?dc(e.strings,e.values):e;let V=cc,Ql=!1;function xh(e){if(Ql)throw new Error("lit-localize can only be configured once");V=e,Ql=!0}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class yh{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(Jn,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Jn,this.__litLocalizeEventHandler)}}const wh=e=>e.addController(new yh(e)),gc=wh;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt=()=>(e,t)=>(e.addInitializer(gc),e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class hc{constructor(){this.settled=!1,this.promise=new Promise((t,s)=>{this._resolve=t,this._reject=s})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const Ye=[];for(let e=0;e<256;e++)Ye[e]=(e>>4&15).toString(16)+(e&15).toString(16);function _h(e){let t=0,s=8997,o=0,r=33826,n=0,i=40164,l=0,d=52210;for(let h=0;h<e.length;h++)s^=e.charCodeAt(h),t=s*435,o=r*435,n=i*435,l=d*435,n+=s<<8,l+=r<<8,o+=t>>>16,s=t&65535,n+=o>>>16,r=o&65535,d=l+(n>>>16)&65535,i=n&65535;return Ye[d>>8]+Ye[d&255]+Ye[i>>8]+Ye[i&255]+Ye[r>>8]+Ye[r&255]+Ye[s>>8]+Ye[s&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ch="",kh="h",$h="s";function Sh(e,t){return(t?kh:$h)+_h(typeof e=="string"?e:e.join(Ch))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ed=new WeakMap,td=new Map;function Mh(e,t,s){if(e){const o=(s==null?void 0:s.id)??Eh(t),r=e[o];if(r){if(typeof r=="string")return r;if("strTag"in r)return dc(r.strings,t.values,r.values);{let n=ed.get(r);return n===void 0&&(n=r.values,ed.set(r,n)),{...r,values:n.map(i=>t.values[i])}}}}return cc(t)}function Eh(e){const t=typeof e=="string"?e:e.strings;let s=td.get(t);return s===void 0&&(s=Sh(t,typeof e!="string"&&!("strTag"in e)),td.set(t,s)),s}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Pn(e){window.dispatchEvent(new CustomEvent(Jn,{detail:e}))}let Gr="",Hn,pc,Zr,Qn,uc,Et=new hc;Et.resolve();let lr=0;const Th=e=>(xh((t,s)=>Mh(uc,t,s)),Gr=pc=e.sourceLocale,Zr=new Set(e.targetLocales),Zr.add(e.sourceLocale),Qn=e.loadLocale,{getLocale:Ah,setLocale:zh}),Ah=()=>Gr,zh=e=>{if(e===(Hn??Gr))return Et.promise;if(!Zr||!Qn)throw new Error("Internal error");if(!Zr.has(e))throw new Error("Invalid locale code");lr++;const t=lr;return Hn=e,Et.settled&&(Et=new hc),Pn({status:"loading",loadingLocale:e}),(e===pc?Promise.resolve({templates:void 0}):Qn(e)).then(o=>{lr===t&&(Gr=e,Hn=void 0,uc=o.templates,Pn({status:"ready",readyLocale:e}),Et.resolve())},o=>{lr===t&&(Pn({status:"error",errorLocale:e,errorMessage:o.toString()}),Et.reject(o))}),Et.promise};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ks=e=>(...t)=>({_$litDirective$:e,values:t});let er=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,o){this._$Ct=t,this._$AM=s,this._$Ci=o}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=ks(class extends er{constructor(e){var t;if(super(e),e.type!==Qo.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var o,r;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!((o=this.nt)!=null&&o.has(n))&&this.st.add(n);return this.render(t)}const s=e.element.classList;for(const n of this.st)n in t||(s.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||(r=this.nt)!=null&&r.has(n)||(i?(s.add(n),this.st.add(n)):(s.remove(n),this.st.delete(n)))}return Ae}});var Oh=D`
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
`,Lh=Oh,ei,fc,je=class extends Y{constructor(){super(),f(this,ei),this.open=!1,this.buttonLabel=V("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start"}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){var e,t,s;return m`<button
        id="trigger"
        class="icon border-0 small ${Fe({highlighted:this.open})}"
        aria-label=${(e=this.buttonLabel)!=null?e:this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
      >
        <slot name="trigger">
          ${this.showLabel?(t=this.buttonLabel)!=null?t:this.label:N}
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
        @gds-ui-state=${o=>this.open=o.detail.open}
      >
        <gds-menu
          aria-label=${(s=this.label)!=null?s:this.buttonLabel}
          @gds-menu-item-click=${C(this,ei,fc)}
        >
          <slot></slot>
        </gds-menu>
      </gds-popover>`}};ei=new WeakSet;fc=function(){this.open=!1};je.styles=[Lh];je.shadowRootOptions={mode:"open",delegatesFocus:!0};a([g({type:Boolean,reflect:!0})],je.prototype,"open",2);a([g({attribute:"button-label"})],je.prototype,"buttonLabel",2);a([g({attribute:"show-label",type:Boolean})],je.prototype,"showLabel",2);a([g()],je.prototype,"label",2);a([g()],je.prototype,"placement",2);a([xt("#trigger")],je.prototype,"elTriggerBtn",2);je=a([k("gds-context-menu"),qt()],je);var mr,mc=class{constructor(e){f(this,mr,t=>{var s,o;const r=t.target;if(!this.host.navigableItems.includes(r))return;let n=!1;if(t.key==="ArrowDown"){const i=this.host.navigableItems.indexOf(r)+1,l=this.host.navigableItems[i];l==null||l.focus(),n=!0}else if(t.key==="ArrowUp"){const i=this.host.navigableItems.indexOf(r)-1,l=this.host.navigableItems[i];l==null||l.focus(),n=!0}else if(t.key==="Home")(s=this.host.navigableItems[0])==null||s.focus(),n=!0;else if(t.key==="End")(o=this.host.navigableItems[this.host.navigableItems.length-1])==null||o.focus(),n=!0;else{const i=t.key.toLowerCase();if(i.length!==1)return;const l=i>="a"&&i<="z",d=i>="0"&&i<="9";if(l||d){const h=this.host.navigableItems.find(v=>{var p;const x=(p=v.textContent)==null?void 0:p.trim().toLowerCase();return x==null?void 0:x.startsWith(i)});h==null||h.focus(),n=!0}}n&&(t.preventDefault(),t.stopPropagation())}),(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",c(this,mr))}hostDisconnected(){this.host.removeEventListener("keydown",c(this,mr))}};mr=new WeakMap;function vc(e){let t=e;for(;t.assignedElements().length>0&&t.assignedElements()[0].nodeName==="SLOT";)t=t.assignedElements()[0];return t}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Dh}=_g,Vh=e=>e===null||typeof e!="object"&&typeof e!="function",Ph=e=>e.strings===void 0,sd=()=>document.createComment(""),zs=(e,t,s)=>{var n;const o=e._$AA.parentNode,r=t===void 0?e._$AB:t._$AA;if(s===void 0){const i=o.insertBefore(sd(),r),l=o.insertBefore(sd(),r);s=new Dh(i,l,e,e.options)}else{const i=s._$AB.nextSibling,l=s._$AM,d=l!==e;if(d){let h;(n=s._$AQ)==null||n.call(s,e),s._$AM=e,s._$AP!==void 0&&(h=e._$AU)!==l._$AU&&s._$AP(h)}if(i!==r||d){let h=s._$AA;for(;h!==i;){const v=h.nextSibling;o.insertBefore(h,r),h=v}}}return s},Mt=(e,t,s=e)=>(e._$AI(t,s),e),Hh={},Fh=(e,t=Hh)=>e._$AH=t,jh=e=>e._$AH,Fn=e=>{var o;(o=e._$AP)==null||o.call(e,!1,!0);let t=e._$AA;const s=e._$AB.nextSibling;for(;t!==s;){const r=t.nextSibling;t.remove(),t=r}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Us=(e,t)=>{var o;const s=e._$AN;if(s===void 0)return!1;for(const r of s)(o=r._$AO)==null||o.call(r,t,!1),Us(r,t);return!0},Ur=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},bc=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Bh(t)}};function Wh(e){this._$AN!==void 0?(Ur(this),this._$AM=e,bc(this)):this._$AM=e}function Rh(e,t=!1,s=0){const o=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(o))for(let n=s;n<o.length;n++)Us(o[n],!1),Ur(o[n]);else o!=null&&(Us(o,!1),Ur(o));else Us(this,e)}const Bh=e=>{e.type==Qo.CHILD&&(e._$AP??(e._$AP=Rh),e._$AQ??(e._$AQ=Wh))};class xc extends er{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,o){super._$AT(t,s,o),bc(this),this.isConnected=t._$AU}_$AO(t,s=!0){var o,r;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)==null||o.call(this):(r=this.disconnected)==null||r.call(this)),s&&(Us(this,t),Ur(this))}setValue(t){if(Ph(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yr=()=>new Ih;let Ih=class{};const jn=new WeakMap,Xs=ks(class extends xc{render(e){return N}update(e,[t]){var o;const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=(o=e.options)==null?void 0:o.host,this.rt(this.ct=e.element)),N}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let s=jn.get(t);s===void 0&&(s=new WeakMap,jn.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=jn.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Ls,od=class extends Y{constructor(){super(),f(this,Ls,Yr()),new mc(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),xe.instance.apply(this,"gds-listbox")}get navigableItems(){return c(this,Ls).value?vc(c(this,Ls).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return m`<slot ${Xs(c(this,Ls))}></slot>`}};Ls=new WeakMap;od=a([k("gds-menu")],od);var yc=e=>{class t extends e{constructor(){super(...arguments),this.onblur=o=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:o.relatedTarget}))},this.onfocus=o=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:o.relatedTarget}))}}focus(o){this.setAttribute("tabindex","0"),super.focus(o)}}return t},Nh=D`
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
`,wc=Nh,ti,si=class extends yc(Y){constructor(){super(...arguments),f(this,ti,()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",c(this,ti)),xe.instance.apply(this,"gds-option")}render(){return m`<div><slot></slot></div>`}};ti=new WeakMap;si.styles=[wc];si=a([k("gds-menu-item")],si);var qr=class extends Y{constructor(){super(...arguments),this.show=!1}render(){return m``}};qr.styles=D`
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
  `;a([g({type:Boolean,reflect:!0})],qr.prototype,"show",2);qr=a([k("gds-backdrop")],qr);function Ga(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,o)=>{let r;const n=t.connectedCallback,i=t.disconnectedCallback;t.connectedCallback=function(){n==null||n.call(this);const l=(d,h)=>{var v;(v=o.value)==null||v.call(this)};r=new MutationObserver(l),r.observe(this,e)},t.disconnectedCallback=function(){i==null||i.call(this),r.disconnect()}}}function Gh(e){return(t,s,o)=>{const r=window.matchMedia(e),n=t.connectedCallback,i=t.disconnectedCallback;t.connectedCallback=function(){var l;n==null||n.call(this);const d=h=>{var v;(v=o.value)==null||v.call(this,h.matches)};r.addEventListener("change",d),this.disconnectedCallback=function(){i==null||i.call(this),r.removeEventListener("change",d)},(l=o.value)==null||l.call(this,r.matches)}}}function ne(e,t){const s=ds({waitUntilFirstUpdate:!1},t);return(o,r,n)=>{const{update:i}=o,l=Array.isArray(e)?e:[e];o.update=function(d){l.forEach(h=>{var v;const p=h;if(d.has(p)){const x=d.get(p),w=this[p];x!==w&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&((v=n.value)==null||v.call(this,x,w))}}),i.call(this,d)}}}const Zh=["top","right","bottom","left"],cs=Math.min,Ht=Math.max,Kr=Math.round,dr=Math.floor,He=e=>({x:e,y:e}),Uh={left:"right",right:"left",bottom:"top",top:"bottom"},Yh={start:"end",end:"start"};function oi(e,t,s){return Ht(e,cs(t,s))}function $s(e,t){return typeof e=="function"?e(t):e}function Rt(e){return e.split("-")[0]}function tr(e){return e.split("-")[1]}function _c(e){return e==="x"?"y":"x"}function Za(e){return e==="y"?"height":"width"}function gs(e){return["top","bottom"].includes(Rt(e))?"y":"x"}function Ua(e){return _c(gs(e))}function qh(e,t,s){s===void 0&&(s=!1);const o=tr(e),r=Ua(e),n=Za(r);let i=r==="x"?o===(s?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(i=Xr(i)),[i,Xr(i)]}function Kh(e){const t=Xr(e);return[ri(e),t,ri(t)]}function ri(e){return e.replace(/start|end/g,t=>Yh[t])}function Xh(e,t,s){const o=["left","right"],r=["right","left"],n=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return s?t?r:o:t?o:r;case"left":case"right":return t?n:i;default:return[]}}function Jh(e,t,s,o){const r=tr(e);let n=Xh(Rt(e),s==="start",o);return r&&(n=n.map(i=>i+"-"+r),t&&(n=n.concat(n.map(ri)))),n}function Xr(e){return e.replace(/left|right|bottom|top/g,t=>Uh[t])}function Qh(e){return{top:0,right:0,bottom:0,left:0,...e}}function Cc(e){return typeof e!="number"?Qh(e):{top:e,right:e,bottom:e,left:e}}function Jr(e){const{x:t,y:s,width:o,height:r}=e;return{width:o,height:r,top:s,left:t,right:t+o,bottom:s+r,x:t,y:s}}function rd(e,t,s){let{reference:o,floating:r}=e;const n=gs(t),i=Ua(t),l=Za(i),d=Rt(t),h=n==="y",v=o.x+o.width/2-r.width/2,p=o.y+o.height/2-r.height/2,x=o[l]/2-r[l]/2;let w;switch(d){case"top":w={x:v,y:o.y-r.height};break;case"bottom":w={x:v,y:o.y+o.height};break;case"right":w={x:o.x+o.width,y:p};break;case"left":w={x:o.x-r.width,y:p};break;default:w={x:o.x,y:o.y}}switch(tr(t)){case"start":w[i]-=x*(s&&h?-1:1);break;case"end":w[i]+=x*(s&&h?-1:1);break}return w}const ep=async(e,t,s)=>{const{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:i}=s,l=n.filter(Boolean),d=await(i.isRTL==null?void 0:i.isRTL(t));let h=await i.getElementRects({reference:e,floating:t,strategy:r}),{x:v,y:p}=rd(h,o,d),x=o,w={},$=0;for(let M=0;M<l.length;M++){const{name:j,fn:H}=l[M],{x:R,y:K,data:ie,reset:X}=await H({x:v,y:p,initialPlacement:o,placement:x,strategy:r,middlewareData:w,rects:h,platform:i,elements:{reference:e,floating:t}});v=R??v,p=K??p,w={...w,[j]:{...w[j],...ie}},X&&$<=50&&($++,typeof X=="object"&&(X.placement&&(x=X.placement),X.rects&&(h=X.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:r}):X.rects),{x:v,y:p}=rd(h,x,d)),M=-1)}return{x:v,y:p,placement:x,strategy:r,middlewareData:w}};async function Js(e,t){var s;t===void 0&&(t={});const{x:o,y:r,platform:n,rects:i,elements:l,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:v="viewport",elementContext:p="floating",altBoundary:x=!1,padding:w=0}=$s(t,e),$=Cc(w),j=l[x?p==="floating"?"reference":"floating":p],H=Jr(await n.getClippingRect({element:(s=await(n.isElement==null?void 0:n.isElement(j)))==null||s?j:j.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:h,rootBoundary:v,strategy:d})),R=p==="floating"?{x:o,y:r,width:i.floating.width,height:i.floating.height}:i.reference,K=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),ie=await(n.isElement==null?void 0:n.isElement(K))?await(n.getScale==null?void 0:n.getScale(K))||{x:1,y:1}:{x:1,y:1},X=Jr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:R,offsetParent:K,strategy:d}):R);return{top:(H.top-X.top+$.top)/ie.y,bottom:(X.bottom-H.bottom+$.bottom)/ie.y,left:(H.left-X.left+$.left)/ie.x,right:(X.right-H.right+$.right)/ie.x}}const tp=e=>({name:"arrow",options:e,async fn(t){const{x:s,y:o,placement:r,rects:n,platform:i,elements:l,middlewareData:d}=t,{element:h,padding:v=0}=$s(e,t)||{};if(h==null)return{};const p=Cc(v),x={x:s,y:o},w=Ua(r),$=Za(w),M=await i.getDimensions(h),j=w==="y",H=j?"top":"left",R=j?"bottom":"right",K=j?"clientHeight":"clientWidth",ie=n.reference[$]+n.reference[w]-x[w]-n.floating[$],X=x[w]-n.reference[w],ke=await(i.getOffsetParent==null?void 0:i.getOffsetParent(h));let Ne=ke?ke[K]:0;(!Ne||!await(i.isElement==null?void 0:i.isElement(ke)))&&(Ne=l.floating[K]||n.floating[$]);const Ct=ie/2-X/2,Ge=Ne/2-M[$]/2-1,De=cs(p[H],Ge),kt=cs(p[R],Ge),ye=De,rt=Ne-M[$]-kt,se=Ne/2-M[$]/2+Ct,Ze=oi(ye,se,rt),$e=!d.arrow&&tr(r)!=null&&se!==Ze&&n.reference[$]/2-(se<ye?De:kt)-M[$]/2<0,we=$e?se<ye?se-ye:se-rt:0;return{[w]:x[w]+we,data:{[w]:Ze,centerOffset:se-Ze-we,...$e&&{alignmentOffset:we}},reset:$e}}}),sp=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,o;const{placement:r,middlewareData:n,rects:i,initialPlacement:l,platform:d,elements:h}=t,{mainAxis:v=!0,crossAxis:p=!0,fallbackPlacements:x,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:$="none",flipAlignment:M=!0,...j}=$s(e,t);if((s=n.arrow)!=null&&s.alignmentOffset)return{};const H=Rt(r),R=gs(l),K=Rt(l)===l,ie=await(d.isRTL==null?void 0:d.isRTL(h.floating)),X=x||(K||!M?[Xr(l)]:Kh(l)),ke=$!=="none";!x&&ke&&X.push(...Jh(l,M,$,ie));const Ne=[l,...X],Ct=await Js(t,j),Ge=[];let De=((o=n.flip)==null?void 0:o.overflows)||[];if(v&&Ge.push(Ct[H]),p){const se=qh(r,i,ie);Ge.push(Ct[se[0]],Ct[se[1]])}if(De=[...De,{placement:r,overflows:Ge}],!Ge.every(se=>se<=0)){var kt,ye;const se=(((kt=n.flip)==null?void 0:kt.index)||0)+1,Ze=Ne[se];if(Ze)return{data:{index:se,overflows:De},reset:{placement:Ze}};let $e=(ye=De.filter(we=>we.overflows[0]<=0).sort((we,Ee)=>we.overflows[1]-Ee.overflows[1])[0])==null?void 0:ye.placement;if(!$e)switch(w){case"bestFit":{var rt;const we=(rt=De.filter(Ee=>{if(ke){const Te=gs(Ee.placement);return Te===R||Te==="y"}return!0}).map(Ee=>[Ee.placement,Ee.overflows.filter(Te=>Te>0).reduce((Te,ir)=>Te+ir,0)]).sort((Ee,Te)=>Ee[1]-Te[1])[0])==null?void 0:rt[0];we&&($e=we);break}case"initialPlacement":$e=l;break}if(r!==$e)return{reset:{placement:$e}}}return{}}}};function nd(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function id(e){return Zh.some(t=>e[t]>=0)}const op=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:s}=t,{strategy:o="referenceHidden",...r}=$s(e,t);switch(o){case"referenceHidden":{const n=await Js(t,{...r,elementContext:"reference"}),i=nd(n,s.reference);return{data:{referenceHiddenOffsets:i,referenceHidden:id(i)}}}case"escaped":{const n=await Js(t,{...r,altBoundary:!0}),i=nd(n,s.floating);return{data:{escapedOffsets:i,escaped:id(i)}}}default:return{}}}}};async function rp(e,t){const{placement:s,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),i=Rt(s),l=tr(s),d=gs(s)==="y",h=["left","top"].includes(i)?-1:1,v=n&&d?-1:1,p=$s(t,e);let{mainAxis:x,crossAxis:w,alignmentAxis:$}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&typeof $=="number"&&(w=l==="end"?$*-1:$),d?{x:w*v,y:x*h}:{x:x*h,y:w*v}}const np=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var s,o;const{x:r,y:n,placement:i,middlewareData:l}=t,d=await rp(t,e);return i===((s=l.offset)==null?void 0:s.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:r+d.x,y:n+d.y,data:{...d,placement:i}}}}},ip=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:o,placement:r}=t,{mainAxis:n=!0,crossAxis:i=!1,limiter:l={fn:j=>{let{x:H,y:R}=j;return{x:H,y:R}}},...d}=$s(e,t),h={x:s,y:o},v=await Js(t,d),p=gs(Rt(r)),x=_c(p);let w=h[x],$=h[p];if(n){const j=x==="y"?"top":"left",H=x==="y"?"bottom":"right",R=w+v[j],K=w-v[H];w=oi(R,w,K)}if(i){const j=p==="y"?"top":"left",H=p==="y"?"bottom":"right",R=$+v[j],K=$-v[H];$=oi(R,$,K)}const M=l.fn({...t,[x]:w,[p]:$});return{...M,data:{x:M.x-s,y:M.y-o,enabled:{[x]:n,[p]:i}}}}}};function bn(){return typeof window<"u"}function Ss(e){return kc(e)?(e.nodeName||"").toLowerCase():"#document"}function _e(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ie(e){var t;return(t=(kc(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function kc(e){return bn()?e instanceof Node||e instanceof _e(e).Node:!1}function ze(e){return bn()?e instanceof Element||e instanceof _e(e).Element:!1}function We(e){return bn()?e instanceof HTMLElement||e instanceof _e(e).HTMLElement:!1}function ad(e){return!bn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof _e(e).ShadowRoot}function sr(e){const{overflow:t,overflowX:s,overflowY:o,display:r}=Oe(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+s)&&!["inline","contents"].includes(r)}function ap(e){return["table","td","th"].includes(Ss(e))}function xn(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Ya(e){const t=qa(),s=ze(e)?Oe(e):e;return s.transform!=="none"||s.perspective!=="none"||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(s.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(s.contain||"").includes(o))}function lp(e){let t=ut(e);for(;We(t)&&!hs(t);){if(Ya(t))return t;if(xn(t))return null;t=ut(t)}return null}function qa(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function hs(e){return["html","body","#document"].includes(Ss(e))}function Oe(e){return _e(e).getComputedStyle(e)}function yn(e){return ze(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ut(e){if(Ss(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ad(e)&&e.host||Ie(e);return ad(t)?t.host:t}function $c(e){const t=ut(e);return hs(t)?e.ownerDocument?e.ownerDocument.body:e.body:We(t)&&sr(t)?t:$c(t)}function Qs(e,t,s){var o;t===void 0&&(t=[]),s===void 0&&(s=!0);const r=$c(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),i=_e(r);if(n){const l=ni(i);return t.concat(i,i.visualViewport||[],sr(r)?r:[],l&&s?Qs(l):[])}return t.concat(r,Qs(r,[],s))}function ni(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Sc(e){const t=Oe(e);let s=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=We(e),n=r?e.offsetWidth:s,i=r?e.offsetHeight:o,l=Kr(s)!==n||Kr(o)!==i;return l&&(s=n,o=i),{width:s,height:o,$:l}}function Ka(e){return ze(e)?e:e.contextElement}function as(e){const t=Ka(e);if(!We(t))return He(1);const s=t.getBoundingClientRect(),{width:o,height:r,$:n}=Sc(t);let i=(n?Kr(s.width):s.width)/o,l=(n?Kr(s.height):s.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!l||!Number.isFinite(l))&&(l=1),{x:i,y:l}}const dp=He(0);function Mc(e){const t=_e(e);return!qa()||!t.visualViewport?dp:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function cp(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==_e(e)?!1:t}function Bt(e,t,s,o){t===void 0&&(t=!1),s===void 0&&(s=!1);const r=e.getBoundingClientRect(),n=Ka(e);let i=He(1);t&&(o?ze(o)&&(i=as(o)):i=as(e));const l=cp(n,s,o)?Mc(n):He(0);let d=(r.left+l.x)/i.x,h=(r.top+l.y)/i.y,v=r.width/i.x,p=r.height/i.y;if(n){const x=_e(n),w=o&&ze(o)?_e(o):o;let $=x,M=ni($);for(;M&&o&&w!==$;){const j=as(M),H=M.getBoundingClientRect(),R=Oe(M),K=H.left+(M.clientLeft+parseFloat(R.paddingLeft))*j.x,ie=H.top+(M.clientTop+parseFloat(R.paddingTop))*j.y;d*=j.x,h*=j.y,v*=j.x,p*=j.y,d+=K,h+=ie,$=_e(M),M=ni($)}}return Jr({width:v,height:p,x:d,y:h})}function Xa(e,t){const s=yn(e).scrollLeft;return t?t.left+s:Bt(Ie(e)).left+s}function Ec(e,t,s){s===void 0&&(s=!1);const o=e.getBoundingClientRect(),r=o.left+t.scrollLeft-(s?0:Xa(e,o)),n=o.top+t.scrollTop;return{x:r,y:n}}function gp(e){let{elements:t,rect:s,offsetParent:o,strategy:r}=e;const n=r==="fixed",i=Ie(o),l=t?xn(t.floating):!1;if(o===i||l&&n)return s;let d={scrollLeft:0,scrollTop:0},h=He(1);const v=He(0),p=We(o);if((p||!p&&!n)&&((Ss(o)!=="body"||sr(i))&&(d=yn(o)),We(o))){const w=Bt(o);h=as(o),v.x=w.x+o.clientLeft,v.y=w.y+o.clientTop}const x=i&&!p&&!n?Ec(i,d,!0):He(0);return{width:s.width*h.x,height:s.height*h.y,x:s.x*h.x-d.scrollLeft*h.x+v.x+x.x,y:s.y*h.y-d.scrollTop*h.y+v.y+x.y}}function hp(e){return Array.from(e.getClientRects())}function pp(e){const t=Ie(e),s=yn(e),o=e.ownerDocument.body,r=Ht(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),n=Ht(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let i=-s.scrollLeft+Xa(e);const l=-s.scrollTop;return Oe(o).direction==="rtl"&&(i+=Ht(t.clientWidth,o.clientWidth)-r),{width:r,height:n,x:i,y:l}}function up(e,t){const s=_e(e),o=Ie(e),r=s.visualViewport;let n=o.clientWidth,i=o.clientHeight,l=0,d=0;if(r){n=r.width,i=r.height;const h=qa();(!h||h&&t==="fixed")&&(l=r.offsetLeft,d=r.offsetTop)}return{width:n,height:i,x:l,y:d}}function fp(e,t){const s=Bt(e,!0,t==="fixed"),o=s.top+e.clientTop,r=s.left+e.clientLeft,n=We(e)?as(e):He(1),i=e.clientWidth*n.x,l=e.clientHeight*n.y,d=r*n.x,h=o*n.y;return{width:i,height:l,x:d,y:h}}function ld(e,t,s){let o;if(t==="viewport")o=up(e,s);else if(t==="document")o=pp(Ie(e));else if(ze(t))o=fp(t,s);else{const r=Mc(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Jr(o)}function Tc(e,t){const s=ut(e);return s===t||!ze(s)||hs(s)?!1:Oe(s).position==="fixed"||Tc(s,t)}function mp(e,t){const s=t.get(e);if(s)return s;let o=Qs(e,[],!1).filter(l=>ze(l)&&Ss(l)!=="body"),r=null;const n=Oe(e).position==="fixed";let i=n?ut(e):e;for(;ze(i)&&!hs(i);){const l=Oe(i),d=Ya(i);!d&&l.position==="fixed"&&(r=null),(n?!d&&!r:!d&&l.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||sr(i)&&!d&&Tc(e,i))?o=o.filter(v=>v!==i):r=l,i=ut(i)}return t.set(e,o),o}function vp(e){let{element:t,boundary:s,rootBoundary:o,strategy:r}=e;const i=[...s==="clippingAncestors"?xn(t)?[]:mp(t,this._c):[].concat(s),o],l=i[0],d=i.reduce((h,v)=>{const p=ld(t,v,r);return h.top=Ht(p.top,h.top),h.right=cs(p.right,h.right),h.bottom=cs(p.bottom,h.bottom),h.left=Ht(p.left,h.left),h},ld(t,l,r));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function bp(e){const{width:t,height:s}=Sc(e);return{width:t,height:s}}function xp(e,t,s){const o=We(t),r=Ie(t),n=s==="fixed",i=Bt(e,!0,n,t);let l={scrollLeft:0,scrollTop:0};const d=He(0);if(o||!o&&!n)if((Ss(t)!=="body"||sr(r))&&(l=yn(t)),o){const x=Bt(t,!0,n,t);d.x=x.x+t.clientLeft,d.y=x.y+t.clientTop}else r&&(d.x=Xa(r));const h=r&&!o&&!n?Ec(r,l):He(0),v=i.left+l.scrollLeft-d.x-h.x,p=i.top+l.scrollTop-d.y-h.y;return{x:v,y:p,width:i.width,height:i.height}}function Wn(e){return Oe(e).position==="static"}function dd(e,t){if(!We(e)||Oe(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return Ie(e)===s&&(s=s.ownerDocument.body),s}function Ac(e,t){const s=_e(e);if(xn(e))return s;if(!We(e)){let r=ut(e);for(;r&&!hs(r);){if(ze(r)&&!Wn(r))return r;r=ut(r)}return s}let o=dd(e,t);for(;o&&ap(o)&&Wn(o);)o=dd(o,t);return o&&hs(o)&&Wn(o)&&!Ya(o)?s:o||lp(e)||s}const yp=async function(e){const t=this.getOffsetParent||Ac,s=this.getDimensions,o=await s(e.floating);return{reference:xp(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function wp(e){return Oe(e).direction==="rtl"}const _p={convertOffsetParentRelativeRectToViewportRelativeRect:gp,getDocumentElement:Ie,getClippingRect:vp,getOffsetParent:Ac,getElementRects:yp,getClientRects:hp,getDimensions:bp,getScale:as,isElement:ze,isRTL:wp};function Cp(e,t){let s=null,o;const r=Ie(e);function n(){var l;clearTimeout(o),(l=s)==null||l.disconnect(),s=null}function i(l,d){l===void 0&&(l=!1),d===void 0&&(d=1),n();const{left:h,top:v,width:p,height:x}=e.getBoundingClientRect();if(l||t(),!p||!x)return;const w=dr(v),$=dr(r.clientWidth-(h+p)),M=dr(r.clientHeight-(v+x)),j=dr(h),R={rootMargin:-w+"px "+-$+"px "+-M+"px "+-j+"px",threshold:Ht(0,cs(1,d))||1};let K=!0;function ie(X){const ke=X[0].intersectionRatio;if(ke!==d){if(!K)return i();ke?i(!1,ke):o=setTimeout(()=>{i(!1,1e-7)},1e3)}K=!1}try{s=new IntersectionObserver(ie,{...R,root:r.ownerDocument})}catch{s=new IntersectionObserver(ie,R)}s.observe(e)}return i(!0),n}function zc(e,t,s,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:d=!1}=o,h=Ka(e),v=r||n?[...h?Qs(h):[],...Qs(t)]:[];v.forEach(H=>{r&&H.addEventListener("scroll",s,{passive:!0}),n&&H.addEventListener("resize",s)});const p=h&&l?Cp(h,s):null;let x=-1,w=null;i&&(w=new ResizeObserver(H=>{let[R]=H;R&&R.target===h&&w&&(w.unobserve(t),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{var K;(K=w)==null||K.observe(t)})),s()}),h&&!d&&w.observe(h),w.observe(t));let $,M=d?Bt(e):null;d&&j();function j(){const H=Bt(e);M&&(H.x!==M.x||H.y!==M.y||H.width!==M.width||H.height!==M.height)&&s(),M=H,$=requestAnimationFrame(j)}return s(),()=>{var H;v.forEach(R=>{r&&R.removeEventListener("scroll",s),n&&R.removeEventListener("resize",s)}),p==null||p(),(H=w)==null||H.disconnect(),w=null,d&&cancelAnimationFrame($)}}const kp=Js,Oc=np,$p=ip,Lc=sp,Sp=op,Mp=tp,Dc=(e,t,s)=>{const o=new Map,r={platform:_p,...s},n={...r.platform,_c:o};return ep(e,t,{...r,platform:n})};var Ep=D`
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
`,Tp=Ep,ii,Vc,Ft,Qr,it,Ds,Tt,ai,vr,li,di,Pc,ci,Hc,br,gi,wn,_n,xr,yr,Z=class extends Y{constructor(){super(...arguments),f(this,ii),f(this,vr),f(this,di),f(this,ci),f(this,br),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>"500px",this.nonmodal=!1,this.floatingUIMiddleware=[Oc(8),Lc()],this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,f(this,Ft,void 0),f(this,Qr,!1),f(this,it,void 0),f(this,Ds,()=>{this.open=!1,c(this,Tt).call(this,"cancel")}),f(this,Tt,e=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason:e},bubbles:!1,composed:!1}))}),f(this,ai,e=>{e.stopPropagation(),e.preventDefault(),this.open=!1,c(this,Tt).call(this,"close"),setTimeout(()=>{var t;return(t=this._trigger)==null?void 0:t.focus()},250)}),f(this,wn,e=>{(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),this.open=!0,c(this,Tt).call(this,"show")),e.key==="Escape"&&this.open&&c(this,Ds).call(this)}),f(this,_n,e=>{e.preventDefault(),this.open=!this.open,c(this,Tt).call(this,this.open?"show":"close")}),f(this,xr,()=>{var e;const t=(e=this._elDefaultSlot)==null?void 0:e.assignedElements()[0];this.updateComplete.then(()=>{t==null||t.focus()})}),f(this,yr,e=>{const t=e,s=this._elDialog;if((t.clientX>0||t.clientY>0)&&s&&this.open){const r=s.getBoundingClientRect();r.top<=t.clientY&&t.clientY<=r.top+r.height&&r.left<=t.clientX&&t.clientX<=r.left+r.width||(this.open=!1,c(this,Tt).call(this,"close"))}})}_handleTriggerRefChanged(){var e;(e=this.triggerRef)==null||e.then(t=>{t&&(this._trigger=t)})}_handleAnchorRefChanged(){var e;(e=this.anchorRef)==null||e.then(t=>{t&&(this._anchor=t)})}_handleTriggerChanged(){C(this,vr,li).call(this),C(this,ci,Hc).call(this)}_handleAnchorChanged(){C(this,br,gi).call(this)}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-popover"),C(this,vr,li).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{e.key==="Escape"&&this.open&&(c(this,Ds).call(this),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{const t=e.target;t.tagName==="INPUT"||t.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),C(this,di,Pc).call(this)}render(){return m`<slot
        name="trigger"
        @slotchange=${C(this,ii,Vc)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${Fe({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          aria-hidden="${String(!this.open)}"
          @close=${()=>this.open&&c(this,Ds).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${c(this,ai)}
              class="close"
              label="${V("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const e=(this.nonmodal?c(this,it):this._elDialog)||document;this.updateComplete.then(()=>{var t,s,o,r;(t=this._trigger)==null||t.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?(o=this._elDialog)==null||o.setAttribute("open","true"):(s=this._elDialog)==null||s.showModal(),c(this,xr).call(this),requestAnimationFrame(()=>{c(this,it)&&(c(this,it).show=!0)}),setTimeout(()=>c(this,xr).call(this),250),setTimeout(()=>e.addEventListener("click",c(this,yr)),0)):((r=this._elDialog)==null||r.close(),e.removeEventListener("click",c(this,yr)),c(this,it)&&(c(this,it).show=!1))})}_handleBackdropChange(){var e;const t=(e=this.parentElement)==null?void 0:e.getRootNode();!this.backdrop||!t||U(this,it,t.querySelector(this.backdrop))}_handleMobileLayout(e){var t,s,o,r;U(this,Qr,e),e&&!this.disableMobileStyles?((t=c(this,Ft))==null||t.call(this),(s=this._elDialog)==null||s.style.removeProperty("left"),(o=this._elDialog)==null||o.style.removeProperty("top"),(r=this._elDialog)==null||r.style.removeProperty("minWidth"),this.updateComplete.then(()=>{var n;this.open&&((n=this._elDialog)==null||n.showModal())})):this.updateComplete.then(()=>{C(this,br,gi).call(this)})}};ii=new WeakSet;Vc=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};Ft=new WeakMap;Qr=new WeakMap;it=new WeakMap;Ds=new WeakMap;Tt=new WeakMap;ai=new WeakMap;vr=new WeakSet;li=function(){var e,t;(e=this._trigger)==null||e.addEventListener("keydown",c(this,wn)),(t=this._trigger)==null||t.addEventListener("click",c(this,_n))};di=new WeakSet;Pc=function(){var e,t,s;(e=this._trigger)==null||e.removeEventListener("keydown",c(this,wn)),(t=this._trigger)==null||t.removeEventListener("click",c(this,_n)),(s=c(this,Ft))==null||s.call(this)};ci=new WeakSet;Hc=function(){var e;if(this._trigger){(e=this._trigger)==null||e.setAttribute("aria-expanded",String(this.open));const t=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||t.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const o=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";this._trigger.getAttribute(o)===null&&this._trigger.setAttribute(o,this.popupRole)}};br=new WeakSet;gi=function(){if(!this._anchor||!this._elDialog)return;const e=this._anchor,t=this._elDialog;!e||!t||c(this,Qr)&&!this.disableMobileStyles||(c(this,Ft)&&c(this,Ft).call(this),U(this,Ft,zc(e,t,()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),Dc(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:s,y:o})=>Object.assign(t.style,{left:`${s}px`,top:`${o}px`}))})))};wn=new WeakMap;_n=new WeakMap;xr=new WeakMap;yr=new WeakMap;Z.styles=G(Tp);a([g({type:Boolean,reflect:!0})],Z.prototype,"open",2);a([g({attribute:"popup-role"})],Z.prototype,"popupRole",2);a([g({attribute:!1})],Z.prototype,"triggerRef",2);a([g({attribute:!1})],Z.prototype,"anchorRef",2);a([g()],Z.prototype,"label",2);a([g()],Z.prototype,"placement",2);a([g({type:Boolean})],Z.prototype,"disableMobileStyles",2);a([g({attribute:!1})],Z.prototype,"calcMinWidth",2);a([g({attribute:!1})],Z.prototype,"calcMaxWidth",2);a([g({attribute:!1})],Z.prototype,"calcMinHeight",2);a([g({attribute:!1})],Z.prototype,"calcMaxHeight",2);a([g({type:Boolean})],Z.prototype,"nonmodal",2);a([g()],Z.prototype,"backdrop",2);a([g({attribute:!1})],Z.prototype,"floatingUIMiddleware",2);a([P()],Z.prototype,"_trigger",2);a([P()],Z.prototype,"_anchor",2);a([P()],Z.prototype,"_isVirtKbVisible",2);a([te("slot:not([name])")],Z.prototype,"_elDefaultSlot",2);a([te('slot[name="trigger"]')],Z.prototype,"_elTriggerSlot",2);a([te("dialog")],Z.prototype,"_elDialog",2);a([ne("triggerRef")],Z.prototype,"_handleTriggerRefChanged",1);a([ne("anchorRef")],Z.prototype,"_handleAnchorRefChanged",1);a([ne("_trigger")],Z.prototype,"_handleTriggerChanged",1);a([ne("_anchor")],Z.prototype,"_handleAnchorChanged",1);a([ne("open")],Z.prototype,"_handleOpenChange",1);a([ne("backdrop")],Z.prototype,"_handleBackdropChange",1);a([Gh("(max-width: 576px)")],Z.prototype,"_handleMobileLayout",1);Z=a([k("gds-popover"),qt()],Z);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class hi extends er{constructor(t){if(super(t),this.it=N,t.type!==Qo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===N||t==null)return this._t=void 0,this.it=t;if(t===Ae)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}hi.directiveName="unsafeHTML",hi.resultType=1;const Fc=ks(hi);var Ap=D`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    svg {
      display: block;
    }
  }
`,zp=Ap,L=class extends Y{constructor(){super(...arguments),this.solid=!1,this.box=!1,this.label=""}render(){const e=this.constructor._name==="brand-seb",t=e?"55":this.width!==void 0?this.width.toString():void 0,s=e?"24":this.height!==void 0?this.height.toString():"1lh",o=e?"0 0 55 24":this.box||"0 0 24 24";let r=`<svg
      ${t?`width="${t}"`:""}
      height="${s}"
      viewBox="${o}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
      part="icon" 
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return this.stroke&&(r=r.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`)),ge`${Fc(r)}`}};L.styles=[zp];a([g({type:Number})],L.prototype,"width",2);a([g({type:Number})],L.prototype,"height",2);a([g({type:Boolean})],L.prototype,"solid",2);a([g({type:Number})],L.prototype,"stroke",2);a([g({type:String})],L.prototype,"box",2);a([g({type:String})],L.prototype,"label",2);var eo=class extends L{};eo._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';eo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>';eo._name="cross-small";eo=a([k("gds-icon-cross-small")],eo);var to=class extends L{};to._regularSVG='<path d="M14 5.75L20.25 12L14 18.25M19.5 12H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';to._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1161 5.36612C13.6043 4.87796 14.3957 4.87796 14.8839 5.36612L20.6339 11.1161C20.8683 11.3505 21 11.6685 21 12C21 12.3315 20.8683 12.6494 20.6339 12.8839L14.8839 18.6339C14.3957 19.122 13.6043 19.122 13.1161 18.6339C12.628 18.1457 12.628 17.3543 13.1161 16.8661L16.7322 13.25H4.25C3.55964 13.25 3 12.6903 3 12C3 11.3096 3.55964 10.75 4.25 10.75H16.7322L13.1161 7.13388C12.628 6.64573 12.628 5.85427 13.1161 5.36612Z" fill="currentColor"/>';to._name="arrow-right";to=a([k("gds-icon-arrow-right")],to);var so=class extends L{};so._regularSVG='<path d="M4.75 21.25V14.75M4.75 14.75V2.75H20.25L16.25 8.75L20.25 14.75H4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';so._solidSVG='<path d="M4.75 2C4.33579 2 4 2.33579 4 2.75V21.25C4 21.6642 4.33579 22 4.75 22C5.16421 22 5.5 21.6642 5.5 21.25V15.5H20.25C20.5266 15.5 20.7807 15.3478 20.9113 15.1039C21.0418 14.86 21.0275 14.5641 20.874 14.334L17.1514 8.75L20.874 3.16603C21.0275 2.93588 21.0418 2.63997 20.9113 2.39611C20.7807 2.15224 20.5266 2 20.25 2H4.75Z" fill="currentColor"/>';so._name="flag";so=a([k("gds-icon-flag")],so);var oo=class extends L{};oo._regularSVG='<path d="M12 12V10.75C12 6.88401 8.86599 3.75 5 3.75H3.75V5C3.75 8.86599 6.88401 12 10.75 12H12ZM12 12V20.25M19 6.75H20.25V8.25C20.25 12.116 17.116 15.25 13.25 15.25H12V13.75C12 9.88401 15.134 6.75 19 6.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';oo._solidSVG='<path d="M3.75 3C3.33579 3 3 3.33579 3 3.75V5C3 9.28021 6.46979 12.75 10.75 12.75H11.25V20.25C11.25 20.6642 11.5858 21 12 21C12.4142 21 12.75 20.6642 12.75 20.25V16H13.25C17.5302 16 21 12.5302 21 8.25V6.75C21 6.33579 20.6642 6 20.25 6H19C16.3562 6 14.0216 7.32382 12.6229 9.34475C11.9618 5.73541 8.80036 3 5 3H3.75Z" fill="currentColor"/>';oo._name="growth";oo=a([k("gds-icon-growth")],oo);var ro=class extends L{};ro._regularSVG='<path d="M2.75 12H21.25M2.75 5.75H21.25M2.75 18.25H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';ro._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.75C2 5.33579 2.33579 5 2.75 5H21.25C21.6642 5 22 5.33579 22 5.75C22 6.16421 21.6642 6.5 21.25 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75ZM2 12C2 11.5858 2.33579 11.25 2.75 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H2.75C2.33579 12.75 2 12.4142 2 12ZM2 18.25C2 17.8358 2.33579 17.5 2.75 17.5H21.25C21.6642 17.5 22 17.8358 22 18.25C22 18.6642 21.6642 19 21.25 19H2.75C2.33579 19 2 18.6642 2 18.25Z" fill="currentColor"/>';ro._name="bars-three";ro=a([k("gds-icon-bars-three")],ro);var no=class extends L{};no._regularSVG='<path d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75M12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75M12 21.25C9.65279 21.25 7.75 17.1086 7.75 12C7.75 6.89137 9.65279 2.75 12 2.75M12 21.25C14.3472 21.25 16.25 17.1086 16.25 12C16.25 6.89137 14.3472 2.75 12 2.75M21 12H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>';no._solidSVG='<path d="M2.02771 11.2499H7.01143C7.08916 8.70549 7.55991 6.38765 8.30456 4.63553C8.71256 3.67552 9.2176 2.85039 9.81666 2.2542C9.82324 2.24765 9.82984 2.24112 9.83645 2.23462C5.59031 3.17115 2.35718 6.80647 2.02771 11.2499Z" fill="currentColor"/><path d="M2.02771 12.7499C2.35718 17.1934 5.59031 20.8288 9.83645 21.7653C9.82984 21.7588 9.82324 21.7522 9.81666 21.7457C9.2176 21.1495 8.71256 20.3244 8.30456 19.3644C7.55991 17.6122 7.08916 15.2944 7.01143 12.7499H2.02771Z" fill="currentColor"/><path d="M14.1636 21.7653C18.4097 20.8287 21.6428 17.1934 21.9723 12.7499H16.9886C16.9109 15.2944 16.4401 17.6122 15.6955 19.3644C15.2875 20.3244 14.7824 21.1495 14.1834 21.7457C14.1768 21.7522 14.1702 21.7588 14.1636 21.7653Z" fill="currentColor"/><path d="M21.9723 11.2499C21.6428 6.80648 18.4097 3.17115 14.1636 2.23462C14.1702 2.24112 14.1768 2.24765 14.1834 2.2542C14.7824 2.85039 15.2875 3.67552 15.6955 4.63553C16.4401 6.38765 16.9109 8.70549 16.9886 11.2499H21.9723Z" fill="currentColor"/><path d="M13.1252 3.3174C12.7104 2.90457 12.3309 2.74995 12 2.74995C11.6691 2.74995 11.2896 2.90457 10.8748 3.3174C10.4569 3.73326 10.0462 4.3726 9.68505 5.22224C9.03191 6.75905 8.58961 8.8698 8.51216 11.2499H15.4879C15.4104 8.8698 14.9681 6.75905 14.315 5.22224C13.9539 4.3726 13.5431 3.73326 13.1252 3.3174Z" fill="currentColor"/><path d="M14.315 18.7777C14.9681 17.2409 15.4104 15.1301 15.4879 12.7499L8.51216 12.7499C8.58961 15.1301 9.03191 17.2409 9.68505 18.7777C10.0462 19.6273 10.4569 20.2666 10.8748 20.6825C11.2896 21.0953 11.6691 21.2499 12 21.2499C12.3309 21.2499 12.7104 21.0953 13.1252 20.6825C13.5431 20.2666 13.9539 19.6273 14.315 18.7777Z" fill="currentColor"/>';no._name="globus";no=a([k("gds-icon-globus")],no);var io=class extends L{};io._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M9.19644 4.64738C9.52928 4.89393 9.59923 5.36362 9.35268 5.69647L6.01935 10.1965C5.7804 10.5191 5.32981 10.5963 4.99708 10.3717L3.33041 9.24668C2.98709 9.01494 2.89664 8.54876 3.12838 8.20544C3.36012 7.86212 3.8263 7.77167 4.16962 8.00341L5.2413 8.72679L8.14735 4.80363C8.3939 4.47078 8.86359 4.40083 9.19644 4.64738ZM11 7.75005C11 7.33583 11.3358 7.00005 11.75 7.00005H20.25C20.6642 7.00005 21 7.33583 21 7.75005C21 8.16426 20.6642 8.50005 20.25 8.50005H11.75C11.3358 8.50005 11 8.16426 11 7.75005ZM9.19644 13.6474C9.52928 13.8939 9.59923 14.3636 9.35268 14.6965L6.01935 19.1965C5.7804 19.5191 5.32981 19.5963 4.99708 19.3717L3.33041 18.2467C2.98709 18.0149 2.89664 17.5488 3.12838 17.2054C3.36012 16.8621 3.8263 16.7717 4.16962 17.0034L5.2413 17.7268L8.14735 13.8036C8.3939 13.4708 8.86359 13.4008 9.19644 13.6474ZM11 16.25C11 15.8358 11.3358 15.5 11.75 15.5H20.25C20.6642 15.5 21 15.8358 21 16.25C21 16.6643 20.6642 17 20.25 17H11.75C11.3358 17 11 16.6643 11 16.25Z" fill="currentColor"/>';io._solidSVG='<path d="M11.75 16.25H20.25M11.75 7.75H20.25M3.75 8.625L5.41667 9.75L8.75 5.25M3.75 17.625L5.41667 18.75L8.75 14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';io._name="checklist";io=a([k("gds-icon-checklist")],io);var ao=class extends L{};ao._regularSVG='<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" fill="currentColor"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" fill="currentColor"/><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';ao._solidSVG='<path d="M3.75 10.25C2.7835 10.25 2 11.0335 2 12C2 12.9665 2.7835 13.75 3.75 13.75C4.7165 13.75 5.5 12.9665 5.5 12C5.5 11.0335 4.7165 10.25 3.75 10.25Z" fill="currentColor"/><path d="M12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25Z" fill="currentColor"/><path d="M20.25 10.25C19.2835 10.25 18.5 11.0335 18.5 12C18.5 12.9665 19.2835 13.75 20.25 13.75C21.2165 13.75 22 12.9665 22 12C22 11.0335 21.2165 10.25 20.25 10.25Z" fill="currentColor"/>';ao._name="dot-grid-one-horizontal";ao=a([k("gds-icon-dot-grid-one-horizontal")],ao);var lo=class extends L{};lo._regularSVG='<path d="M2.75 7.25H21.25M2.75 16.75H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';lo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 7.25C2 6.83579 2.33579 6.5 2.75 6.5H21.25C21.6642 6.5 22 6.83579 22 7.25C22 7.66421 21.6642 8 21.25 8H2.75C2.33579 8 2 7.66421 2 7.25ZM2 16.75C2 16.3358 2.33579 16 2.75 16H21.25C21.6642 16 22 16.3358 22 16.75C22 17.1642 21.6642 17.5 21.25 17.5H2.75C2.33579 17.5 2 17.1642 2 16.75Z" fill="currentColor"/>';lo._name="bars-two";lo=a([k("gds-icon-bars-two")],lo);var co=class extends L{};co._regularSVG='<path d="M14.957 6.12105L11.9903 8.31798C10.5943 7.11834 8.78371 6.88708 7.78755 6.88708C6.78411 6.88708 5.72977 7.17615 5.5698 7.8916C5.40984 8.58537 6.06425 9.12737 7.18403 9.43089C8.46378 9.77055 9.61991 10.0741 11.4159 10.5799C14.0772 11.3388 15.9023 12.4806 15.9023 15.1328C15.9023 18.7967 12.6302 20.6902 8.25291 20.6902C3.87559 20.6902 0.894368 18.4282 0 17.3731L3.13392 15.0461C5.33712 16.9539 6.86409 17.2213 8.14384 17.2213C9.61264 17.2213 10.9869 16.9106 11.1614 16.0867C11.3068 15.4219 10.7542 14.8943 9.50357 14.6052C8.09294 14.28 6.89318 14.0199 5.56253 13.673C1.9487 12.7335 0.930724 10.645 0.930724 8.76604C0.930724 6.18609 3.34479 3.53388 7.773 3.53388C12.303 3.53388 14.957 6.11382 14.957 6.12105ZM33.8551 3.79404H20.6359V20.206H34.0951V16.4192H25.275V13.7742H31.3465V10.1536H25.275V7.53749H33.8478V3.79404H33.8551ZM17.2184 23.9928H18.2437V0H17.2184V23.9928ZM35.8329 23.9928H36.8581V0H35.8329V23.9928ZM39.2504 20.206H49.8665C52.7023 20.206 55.0073 18.5077 55.0073 15.7832C55.0073 13.6585 53.6112 12.2493 51.6479 11.6278C51.5825 11.6134 51.5243 11.6061 51.4589 11.6061C51.5243 11.5989 51.5898 11.5917 51.6479 11.57C52.775 11.1292 54.0111 9.95122 54.0111 7.94941C54.0111 5.4056 51.7497 3.78681 48.9576 3.78681H39.2431L39.2504 20.206ZM43.9113 7.20506H47.6196C48.4704 7.20506 49.1612 7.87715 49.1612 8.64318C49.1612 9.40921 48.4704 10.0885 47.6196 10.0885H43.9113V7.20506ZM48.4413 16.5637H43.904V13.5718H48.4413C49.2411 13.5718 49.8956 14.215 49.8956 15.0678C49.8956 15.9133 49.2484 16.5637 48.4413 16.5637Z" fill="currentColor"/>';co._solidSVG='<path d="M14.957 6.12105L11.9903 8.31798C10.5943 7.11834 8.78371 6.88708 7.78755 6.88708C6.78411 6.88708 5.72977 7.17615 5.5698 7.8916C5.40984 8.58537 6.06425 9.12737 7.18403 9.43089C8.46378 9.77055 9.61991 10.0741 11.4159 10.5799C14.0772 11.3388 15.9023 12.4806 15.9023 15.1328C15.9023 18.7967 12.6302 20.6902 8.25291 20.6902C3.87559 20.6902 0.894368 18.4282 0 17.3731L3.13392 15.0461C5.33712 16.9539 6.86409 17.2213 8.14384 17.2213C9.61264 17.2213 10.9869 16.9106 11.1614 16.0867C11.3068 15.4219 10.7542 14.8943 9.50357 14.6052C8.09294 14.28 6.89318 14.0199 5.56253 13.673C1.9487 12.7335 0.930724 10.645 0.930724 8.76604C0.930724 6.18609 3.34479 3.53388 7.773 3.53388C12.303 3.53388 14.957 6.11382 14.957 6.12105ZM33.8551 3.79404H20.6359V20.206H34.0951V16.4192H25.275V13.7742H31.3465V10.1536H25.275V7.53749H33.8478V3.79404H33.8551ZM17.2184 23.9928H18.2437V0H17.2184V23.9928ZM35.8329 23.9928H36.8581V0H35.8329V23.9928ZM39.2504 20.206H49.8665C52.7023 20.206 55.0073 18.5077 55.0073 15.7832C55.0073 13.6585 53.6112 12.2493 51.6479 11.6278C51.5825 11.6134 51.5243 11.6061 51.4589 11.6061C51.5243 11.5989 51.5898 11.5917 51.6479 11.57C52.775 11.1292 54.0111 9.95122 54.0111 7.94941C54.0111 5.4056 51.7497 3.78681 48.9576 3.78681H39.2431L39.2504 20.206ZM43.9113 7.20506H47.6196C48.4704 7.20506 49.1612 7.87715 49.1612 8.64318C49.1612 9.40921 48.4704 10.0885 47.6196 10.0885H43.9113V7.20506ZM48.4413 16.5637H43.904V13.5718H48.4413C49.2411 13.5718 49.8956 14.215 49.8956 15.0678C49.8956 15.9133 49.2484 16.5637 48.4413 16.5637Z" fill="currentColor"/>';co._name="brand-seb";co=a([k("gds-icon-brand-seb")],co);var go=class extends L{};go._regularSVG='<path d="M16 17.25C16 19.4591 14.2091 21.25 12 21.25C9.79086 21.25 8 19.4591 8 17.25M3.75 17.25H20.25V16L18.7031 13L18.4965 8.90897C18.3234 5.45882 15.4661 2.75 12 2.75C8.53386 2.75 5.6766 5.45882 5.50351 8.90897L5.29688 13L3.75 16V17.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';go._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C8.13655 2 4.94782 5.0198 4.75447 8.87114L4.556 12.8003L3.0834 15.6563C3.02859 15.7626 3 15.8804 3 16V17.25C3 17.6642 3.33579 18 3.75 18H7.30888C7.66846 20.267 9.63185 22 12 22C14.3682 22 16.3315 20.267 16.6911 18H20.25C20.6642 18 21 17.6642 21 17.25V16C21 15.8804 20.9714 15.7626 20.9166 15.6563L19.444 12.8003L19.2455 8.87139C19.0522 5.02005 15.8634 2 12 2ZM12 20.5C10.4632 20.5 9.17555 19.4333 8.83697 18H15.163C14.8245 19.4333 13.5368 20.5 12 20.5Z" fill="currentColor"/>';go._name="bell";go=a([k("gds-icon-bell")],go);var ho=class extends L{};ho._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';ho._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>';ho._name="calendar";ho=a([k("gds-icon-calendar")],ho);var po=class extends L{};po._regularSVG='<path d="M20 20L16.1265 16.1265M16.1265 16.1265C17.4385 14.8145 18.25 13.002 18.25 11C18.25 6.99594 15.0041 3.75 11 3.75C6.99594 3.75 3.75 6.99594 3.75 11C3.75 15.0041 6.99594 18.25 11 18.25C13.002 18.25 14.8145 17.4385 16.1265 16.1265Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';po._solidSVG='<path d="M3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.9388 18.3096 14.7174 17.1624 16.1018L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2374 20.8232 19.7625 20.8232 19.4696 20.5303L16.1017 17.1624C14.7174 18.3096 12.9388 19 11 19C6.58172 19 3 15.4183 3 11Z" fill="currentColor"/>';po._name="magnifying-glass";po=a([k("gds-icon-magnifying-glass")],po);var pe,Me=class extends Y{constructor(){super(),f(this,pe,void 0),this.required=!1,this.label="",this.name="";try{U(this,pe,this.attachInternals())}catch{U(this,pe,{form:this.closest("form"),setFormValue:t=>{this.value=t},setValidity:(t,s)=>{this.invalid=t.customError},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0})}}set invalid(e){const t=this.invalid;c(this,pe).setValidity(Hr(ds({},c(this,pe).validity),{customError:e,valid:!e}),this.validationMessage||V("Error message."),this._getValidityAnchor()||void 0),this.requestUpdate("invalid",t),c(this,pe).checkValidity()}get invalid(){return!c(this,pe).validity.valid}get form(){return c(this,pe).form}get validity(){return c(this,pe).validity}get validationMessage(){return c(this,pe).validationMessage}get willValidate(){return c(this,pe).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const t=this.invalid,s=this.validator.validate(this)||[Hr(ds({},this.validity),{valid:!0}),""];return c(this,pe).setValidity(s[0],s[1],this._getValidityAnchor()),this.requestUpdate("invalid",t),c(this,pe).checkValidity()}reportValidity(){return c(this,pe).reportValidity()}__handleValueChange(){c(this,pe).setFormValue(this.value),this.checkValidity()}formResetCallback(){this.value=void 0}formAssociatedCallback(e){e==null||e.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(e){this.checkValidity(),this.validity.valid||e.preventDefault()}focus(e){this._getValidityAnchor().focus(e)}};pe=new WeakMap;Me.formAssociated=!0;a([g({attribute:!1})],Me.prototype,"validator",2);a([g({type:Boolean})],Me.prototype,"required",2);a([g({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:e=>e==null?void 0:e.toString()}})],Me.prototype,"invalid",1);a([g()],Me.prototype,"label",2);a([g()],Me.prototype,"value",2);a([g({reflect:!0})],Me.prototype,"name",2);a([ne("value")],Me.prototype,"__handleValueChange",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=e=>e??N;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ae(e,t,s){return e?t(e):s==null?void 0:s(e)}var Op=class extends er{constructor(e){if(super(e),e.type!==Qo.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(e){return N}update(e,[t]){var s;const o=e.element,r=(s=e.options)==null?void 0:s.host;Array.from(r.attributes).forEach(n=>{t(n)&&o.setAttribute(n.name.replace("gds-",""),n.value)})}},jc=ks(Op),cd=new WeakMap;function Lp(e){return(t,...s)=>{let o=cd.get(t);return o||(o=t.map(r=>r.replace(/\n[\s]+</gm,"<")),o.raw=t.raw,cd.set(t,o)),e(o,...s)}}var Dp=`@layer tokens, core, a11y, ranks, sizes, variants, disabled;

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
`,Vp=["aria-label","aria-haspopup","aria-expanded"],Pp=Lp(m),Vs,qe,at,pi,Wc,ui,fi,de=class extends Me{constructor(){super(),f(this,qe),f(this,pi),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",f(this,Vs,!1),f(this,ui,()=>{var e,t;const s=(t=(e=this._mainSlot)==null?void 0:e.assignedElements())!=null?t:[];U(this,Vs,s.length===1&&s.some(o=>o.tagName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),f(this,fi,e=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e})),this.form&&!c(this,qe,at)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),xe.instance.apply(this,"gds-button")}render(){const e={button:!0,circle:c(this,Vs),icon:c(this,Vs),small:this.size==="small",large:this.size==="large",positive:this.variant==="positive",negative:this.variant==="negative",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},t=c(this,qe,at)?Ir`a`:Ir`button`;return Jo`
      <${t}
        class=${Fe(e)}
        type="${ue(c(this,qe,at)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||N}
        href=${ue(c(this,qe,at)?this.href:void 0)}
        target=${ue(c(this,qe,at)?this.target:void 0)}
        rel=${ue(c(this,qe,at)?this.rel||c(this,pi,Wc):void 0)}
        download=${ue(c(this,qe,at)?this.download:void 0)}
        part="_button"
        @click="${c(this,fi)}"
        ${jc(s=>s.name.startsWith("gds-aria")||s.name==="gds-role"||Vp.includes(s.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${c(this,ui)}></slot>
        <slot name="trail"></slot>
        ${ae(!this._isUsingTransitionalStyles,()=>Pp`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${t}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}};Vs=new WeakMap;qe=new WeakSet;at=function(){return this.href.length>0};pi=new WeakSet;Wc=function(){return this.target==="_blank"?"noreferrer noopener":void 0};ui=new WeakMap;fi=new WeakMap;de.styles=[J,G(Dp)];de.shadowRootOptions={mode:"open",delegatesFocus:!0};a([g({type:Boolean,reflect:!0})],de.prototype,"disabled",2);a([g({reflect:!0})],de.prototype,"type",2);a([g({reflect:!0})],de.prototype,"rank",2);a([g({reflect:!0})],de.prototype,"variant",2);a([g({reflect:!0})],de.prototype,"size",2);a([g()],de.prototype,"label",2);a([g()],de.prototype,"href",2);a([g()],de.prototype,"target",2);a([g()],de.prototype,"rel",2);a([g()],de.prototype,"download",2);a([te("slot:not([name])")],de.prototype,"_mainSlot",2);a([te(".button")],de.prototype,"_button",2);a([Ga({attributes:!0,childList:!1,subtree:!1,characterData:!1})],de.prototype,"_attributeChanged",1);de=a([k("gds-button")],de);var Hp=D`
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
`,mi,Rc,vi,Bc,Ja,Qa,el,tl,sl,ol,Ic,rl,Nc,nl,Gc,il,Zc,al,Uc,ll,Yc,me=class extends Me{constructor(){super(),f(this,mi),f(this,vi),f(this,ol),f(this,rl),f(this,nl),f(this,il),f(this,al),f(this,ll),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this.trailSlotOccupied=!1,f(this,Ja,e=>["type","placeholder","required"].includes(e.name)),f(this,Qa,e=>{const t=e.target;this.value=t.value}),f(this,el,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),f(this,tl,()=>{this.elInputAsync.then(e=>e.focus())}),f(this,sl,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return m`${Qd(this.variant,[["default",()=>C(this,mi,Rc).call(this)],["floating-label",()=>C(this,vi,Bc).call(this)]])}`}_getValidityAnchor(){return this.elInput}};mi=new WeakSet;Rc=function(){return m`
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
        @click=${c(this,tl)}
        cursor="text"
        color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
      >
        ${C(this,ol,Ic).call(this)} ${C(this,il,Zc).call(this)}
        <gds-flex gap="xs" align-items="center">
          ${C(this,al,Uc).call(this)} ${C(this,rl,Nc).call(this)}
        </gds-flex>
      </gds-flex>

      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${c(this,ll,Yc)&&this.maxlength-this.value.length}
        .validationMessage=${this.invalid&&this.validationMessage}
      ></gds-form-control-footer>
    `};vi=new WeakSet;Bc=function(){return N};Ja=new WeakMap;Qa=new WeakMap;el=new WeakMap;tl=new WeakMap;sl=new WeakMap;ol=new WeakSet;Ic=function(){return m` <slot name="lead"></slot> `};rl=new WeakSet;Nc=function(){return m`
      <slot name="trail" @slotchange=${C(this,nl,Gc)}></slot>
    `};nl=new WeakSet;Gc=function(e){const s=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(o=>{var r;return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE&&((r=o.textContent)==null?void 0:r.trim())!==""})};il=new WeakSet;Zc=function(){return m`
      <input
        @input=${c(this,Qa)}
        @change=${c(this,el)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        aria-invalid=${this.invalid}
        placeholder=" "
        ${jc(c(this,Ja))}
      />
    `};al=new WeakSet;Uc=function(){return this.clearable&&this.value.length>0?m`
        <gds-button
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${V("Clear input")}"
          @click=${c(this,sl)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:N};ll=new WeakSet;Yc=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};me.styles=[J,Hp];a([g()],me.prototype,"value",2);a([g()],me.prototype,"label",2);a([g({attribute:"supporting-text"})],me.prototype,"supportingText",2);a([g({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],me.prototype,"showExtendedSupportingText",2);a([g({attribute:"disabled",type:Boolean,reflect:!0})],me.prototype,"disabled",2);a([g({type:Boolean})],me.prototype,"clearable",2);a([g({type:Number})],me.prototype,"maxlength",2);a([g({type:String})],me.prototype,"variant",2);a([g({type:String})],me.prototype,"size",2);a([xt("input")],me.prototype,"elInputAsync",2);a([te("input")],me.prototype,"elInput",2);a([P()],me.prototype,"trailSlotOccupied",2);me=a([k("gds-input"),qt()],me);var Fp=D`
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
`,dl,qc,bi,xi,yi,Kc,ps=class extends Y{constructor(){super(...arguments),f(this,dl),f(this,yi),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,f(this,bi,()=>m`
      <gds-button
        size="small"
        rank="tertiary"
        label="${V("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${c(this,xi)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),f(this,xi,()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,(e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))})}render(){return m`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${ae(this._hasExtendedSupportingText,c(this,bi))}
      </div>

      ${C(this,yi,Kc).call(this)}
    `}};dl=new WeakSet;qc=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};bi=new WeakMap;xi=new WeakMap;yi=new WeakSet;Kc=function(){return m`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${C(this,dl,qc)}
        ></slot>
      </div>
    `};ps.styles=[Fp];a([g({type:Boolean,reflect:!0})],ps.prototype,"showExtendedSupportingText",2);a([P()],ps.prototype,"_hasExtendedSupportingText",2);a([te("#extended-supporting-text")],ps.prototype,"_extendedSupportingText",2);ps=a([k("gds-form-control-header"),qt()],ps);var jp=D`
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
`,wi,Xc,uo=class extends Y{constructor(){super(...arguments),f(this,wi)}render(){return m`<div aria-live="polite">
      <div class="error-message">
        ${ae(this.validationMessage,()=>m`
            <gds-icon-triangle-exclamation
              solid
            ></gds-icon-triangle-exclamation>
            ${this.validationMessage}
          `)}
      </div>
      <div class="char-counter">
        ${ae(Number.isInteger(this.charCounter),()=>C(this,wi,Xc).call(this,this.charCounter))}
      </div>
    </div>`}};wi=new WeakSet;Xc=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",m`<gds-badge variant="${t}">${e}</gds-badge>`};uo.styles=[jp];a([g({type:Number})],uo.prototype,"charCounter",2);a([g()],uo.prototype,"validationMessage",2);uo=a([k("gds-form-control-footer")],uo);var fo=class extends L{};fo._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.375 8C11.375 8.34518 11.6548 8.625 12 8.625C12.3452 8.625 12.625 8.34518 12.625 8C12.625 7.65482 12.3452 7.375 12 7.375C11.6548 7.375 11.375 7.65482 11.375 8Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>';fo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>';fo._name="circle-info";fo=a([k("gds-icon-circle-info")],fo);var mo=class extends L{};mo._regularSVG='<path d="M12 2.75L12.6457 2.36845C12.5108 2.1401 12.2652 2 12 2C11.7348 2 11.4892 2.1401 11.3543 2.36845L12 2.75ZM2.25 19.25L1.60431 18.8685C1.4673 19.1003 1.46512 19.3878 1.59859 19.6217C1.73207 19.8556 1.9807 20 2.25 20V19.25ZM21.75 19.25V20C22.0193 20 22.2679 19.8556 22.4014 19.6217C22.5349 19.3878 22.5327 19.1003 22.3957 18.8685L21.75 19.25ZM12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75H12.75ZM11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25H11.25ZM11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75H11.25ZM12.75 15.74C12.75 15.3258 12.4142 14.99 12 14.99C11.5858 14.99 11.25 15.3258 11.25 15.74H12.75ZM11.3543 2.36845L1.60431 18.8685L2.89569 19.6315L12.6457 3.13155L11.3543 2.36845ZM2.25 20H21.75V18.5H2.25V20ZM22.3957 18.8685L12.6457 2.36845L11.3543 3.13155L21.1043 19.6315L22.3957 18.8685ZM11.25 9.75V13.25H12.75V9.75H11.25ZM11.5 15.75C11.5 15.4739 11.7239 15.25 12 15.25V16.75C12.5523 16.75 13 16.3023 13 15.75H11.5ZM12 15.25C12.2761 15.25 12.5 15.4739 12.5 15.75H11C11 16.3023 11.4477 16.75 12 16.75V15.25ZM12.5 15.75C12.5 16.0261 12.2761 16.25 12 16.25V14.75C11.4477 14.75 11 15.1977 11 15.75H12.5ZM12 16.25C11.7239 16.25 11.5 16.0261 11.5 15.75H13C13 15.1977 12.5523 14.75 12 14.75V16.25ZM12.75 15.75V15.74H11.25V15.75H12.75Z" fill="currentColor"/>';mo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2652 2 12.5108 2.1401 12.6457 2.36845L22.3957 18.8685C22.5327 19.1003 22.5349 19.3878 22.4014 19.6217C22.2679 19.8556 22.0193 20 21.75 20H2.25C1.9807 20 1.73207 19.8556 1.59859 19.6217C1.46512 19.3878 1.4673 19.1003 1.60431 18.8685L11.3543 2.36845C11.4892 2.1401 11.7348 2 12 2ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V9.75C11.25 9.33579 11.5858 9 12 9ZM13 15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75C11 15.1977 11.4477 14.75 12 14.75C12.5523 14.75 13 15.1977 13 15.75Z" fill="currentColor"/>';mo._name="triangle-exclamation";mo=a([k("gds-icon-triangle-exclamation")],mo);var Wp=D`
  :host {
    box-sizing: border-box;
  }
`,Rp=Wp,ve=class extends z{constructor(){super(),this.display="flex"}render(){return m`<slot></slot>`}};ve.styles=[J,Rp];a([y({styleTemplate:(e,t)=>{const s=t[0],o=t[1]||s;return`gap: ${s} ${o};`},cacheOverrideKey:"flex"})],ve.prototype,"gap",2);a([y({valueTemplate:e=>e})],ve.prototype,"flex",2);a([y({valueTemplate:e=>e})],ve.prototype,"align-self",2);a([y({valueTemplate:e=>e})],ve.prototype,"align-items",2);a([y({valueTemplate:e=>e})],ve.prototype,"align-content",2);a([y({valueTemplate:e=>e})],ve.prototype,"justify-content",2);a([y({valueTemplate:e=>e})],ve.prototype,"place-content",2);a([y({valueTemplate:e=>e})],ve.prototype,"justify-items",2);a([y({valueTemplate:e=>e})],ve.prototype,"justify-self",2);a([y({property:"flex-direction",valueTemplate:e=>e})],ve.prototype,"flex-direction",2);a([y({property:"flex-wrap",valueTemplate:e=>e})],ve.prototype,"flex-wrap",2);ve=a([k("gds-flex")],ve);var vo=class extends z{constructor(){super(),this.variant="primary",this.padding="s; m{l}",this["border-radius"]="xs; m{s}",this["border-width"]="4xs"}render(){return m`<slot></slot>`}};vo.styles=[J,D`
      :host {
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
      }
    `];a([y({property:"box-shadow",valueTemplate:e=>`var(--gds-shadow-${e})`})],vo.prototype,"shadow",2);a([y({valueTemplate:e=>e,styleTemplate:function(e,t){return`
      --_border-color: var(--gds-color-l${this.level}-background-${t});
      --_background-color: var(--gds-color-l${this.level}-background-${t});
      --_color: var(--gds-color-l${this.level}-content-${t});
      `}})],vo.prototype,"variant",2);vo=a([k("gds-card")],vo);var Bp=D`
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
`,Ip=Bp,_i,Jc,Ci,Qc,cl,e1,ki,t1,ft=class extends Y{constructor(){super(),f(this,_i),f(this,Ci),f(this,cl),f(this,ki),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.mainSlotOccupied=!1}render(){const e=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",t=this.disabled?"disabled":this.notification?"primary":this.variant,s=this.size==="small"||this.notification?"2xs":"xs",o=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs";return m`<gds-flex
      level="3"
      background=${e}
      color=${t}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${s}"
      border-radius="${this.notification?"max":"2xs"}"
      block-size="${o}"
      width="max-content"
      font-size="${this.size==="small"||this.notification?"detail-xs":"detail-s"}"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${C(this,_i,Jc).call(this)} ${C(this,Ci,Qc).call(this)}
      ${C(this,ki,t1).call(this)}
    </gds-flex>`}};_i=new WeakSet;Jc=function(){if(this.size!=="small"||!this.notification)return m`<slot name="lead"></slot>`};Ci=new WeakSet;Qc=function(){return m`<slot @slotchange=${C(this,cl,e1)}></slot>`};cl=new WeakSet;e1=function(e){const s=e.target.assignedNodes({flatten:!0});this.mainSlotOccupied=s.length>0&&s.some(o=>{var r;return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE&&((r=o.textContent)==null?void 0:r.trim())!==""})};ki=new WeakSet;t1=function(){return m`<slot name="trail"></slot>`};ft.styles=[J,Ip];a([g()],ft.prototype,"variant",2);a([g({type:String})],ft.prototype,"size",2);a([g({attribute:"disabled",type:Boolean,reflect:!0})],ft.prototype,"disabled",2);a([g({attribute:"notification",type:Boolean,reflect:!0})],ft.prototype,"notification",2);a([P()],ft.prototype,"mainSlotOccupied",2);ft=a([k("gds-badge")],ft);var Np=`:host {
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
}`,en=class extends E{constructor(){super(...arguments),this.onmousedown=t=>{const o=t.target.getBoundingClientRect(),r=this._rippleEl;r&&(r.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${t.clientY-o.top}px`),this.style.setProperty("--gds-ripple-left",`${t.clientX-o.left}px`),setTimeout(()=>{r.classList.add("gds-ripple-effect")},20))}}render(){return ge`<div></div>`}};en.styles=[J,G(Np)];a([te("div")],en.prototype,"_rippleEl",2);en=a([k("gds-ripple")],en);var It=class extends Y{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2016"}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",G(`:host {${qn}}`))}render(){return m`<slot></slot>`}_onColorSchemeChange(){this.colorScheme==="dark"?this._dynamicStylesController.inject("dark",G(`:host { ${qn}}`)):this._dynamicStylesController.inject("light",G(`:host { ${ac}}`)),this.dispatchEvent(new CustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}}))}_onDesignVersionChange(){this.dispatchEvent(new CustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}}))}};It.styles=D`
    :host {
      display: contents;
    }
  `;a([g({reflect:!0,attribute:"color-scheme"})],It.prototype,"colorScheme",2);a([g({reflect:!0,attribute:"design-version"})],It.prototype,"designVersion",2);a([ne("colorScheme")],It.prototype,"_onColorSchemeChange",1);a([ne("designVersion")],It.prototype,"_onDesignVersionChange",1);It=a([k("gds-theme")],It);var Gp=D`
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
`,Zp=Gp,us=class extends z{constructor(){super(),this.display="grid",this.width="100%"}render(){return m`<slot></slot>`}};us.styles=[J,Zp];a([y({property:"--_c",valueTemplate:e=>e})],us.prototype,"columns",2);a([y({styleTemplate:(e,t)=>{const s=t[0];return`--_gap-column: ${t[1]||s}; --_gap-row: ${s};`}})],us.prototype,"gap",2);a([y({property:"--_col-width",valueTemplate:e=>`${e}px`})],us.prototype,"auto-columns",2);us=a([k("gds-grid")],us);var Up=D`
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
`,Yp=Up,$i,s1,et=class extends Y{constructor(){super(),f(this,$i),this.href="",this.variant="default"}render(){const e={secondary:this.variant==="secondary",hidden:this.variant==="hidden"};return Jo`
      <a
        href=${ue(this.href)}
        target=${ue(this.target)}
        rel=${ue(this.rel||c(this,$i,s1))}
        download=${ue(this.download)}
        class=${Fe(e)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};$i=new WeakSet;s1=function(){return this.target==="_blank"?"noreferrer noopener":void 0};et.styles=[J,G(Yp)];et.shadowRootOptions={mode:"open",delegatesFocus:!0};a([g()],et.prototype,"href",2);a([g()],et.prototype,"target",2);a([g()],et.prototype,"rel",2);a([g()],et.prototype,"download",2);a([g()],et.prototype,"variant",2);et=a([k("gds-link")],et);var qp=D`
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
`,Kp=qp,Ce=class extends Y{render(){return m`<img src="${this.src}" alt="${this.alt}" />`}};Ce.styles=[J,Kp];a([y({property:"aspect-ratio",valueTemplate:e=>e})],Ce.prototype,"aspect-ratio",2);a([y({property:"object-position",selector:"img",valueTemplate:e=>e})],Ce.prototype,"position",2);a([y({property:"inset",valueTemplate:e=>e})],Ce.prototype,"inset",2);a([y({property:"width",valueTemplate:e=>e})],Ce.prototype,"width",2);a([y({property:"height",valueTemplate:e=>e})],Ce.prototype,"height",2);a([y({property:"opacity",valueTemplate:e=>e})],Ce.prototype,"opacity",2);a([y({property:"object-fit",selector:"img",valueTemplate:e=>e})],Ce.prototype,"object-fit",2);a([g()],Ce.prototype,"src",2);a([g()],Ce.prototype,"alt",2);a([y({property:"border-radius",valueTemplate:e=>`var(--gds-space-${e})`})],Ce.prototype,"border-radius",2);Ce=a([k("gds-img")],Ce);var Xp=D`
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
`,Jp=Xp,re=class extends Y{applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return m`<video></video>`}firstUpdated(){this.applyVideoSettings()}};re.styles=[J,Jp];a([y({property:"aspect-ratio",valueTemplate:e=>e})],re.prototype,"aspect-ratio",2);a([y({property:"object-position",selector:"video",valueTemplate:e=>e})],re.prototype,"object-position",2);a([y({property:"inset",valueTemplate:e=>e})],re.prototype,"inset",2);a([y({property:"width",valueTemplate:e=>e})],re.prototype,"width",2);a([y({property:"height",valueTemplate:e=>e})],re.prototype,"height",2);a([y({property:"opacity",valueTemplate:e=>e})],re.prototype,"opacity",2);a([y({property:"object-fit",selector:"video",valueTemplate:e=>e})],re.prototype,"object-fit",2);a([y({property:"pointer-events",selector:"video",valueTemplate:e=>e})],re.prototype,"pointer-events",2);a([y({property:"border-radius",valueTemplate:e=>`var(--gds-space-${e})`})],re.prototype,"border-radius",2);a([g()],re.prototype,"src",2);a([g()],re.prototype,"poster",2);a([g({type:Boolean})],re.prototype,"muted",2);a([g({type:Boolean})],re.prototype,"playsinline",2);a([g({type:Boolean})],re.prototype,"autoplay",2);a([g({type:Boolean})],re.prototype,"loop",2);a([te("video")],re.prototype,"videoElement",2);re=a([k("gds-video")],re);var Qp=D`
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
`,e2=Qp,At,ss,Si,o1,Se=class extends Y{constructor(){super(),f(this,At),f(this,Si),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const e={button:!0,selected:this.selected,compact:this.compact},t=c(this,At,ss)?Ir`a`:Ir`button`;return Jo`
      <${t}
        class="${Fe(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${ue(c(this,At,ss)?this.href:void 0)}
        target=${ue(c(this,At,ss)?this.target:void 0)}
        rel=${ue(c(this,At,ss)?this.rel||c(this,Si,o1):void 0)}
        download=${ue(c(this,At,ss)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${t}>
    `}};At=new WeakSet;ss=function(){return this.href.length>0};Si=new WeakSet;o1=function(){return this.target==="_blank"?"noreferrer noopener":void 0};Se.styles=[J,G(e2)];Se.shadowRootOptions={mode:"open",delegatesFocus:!0};a([g({type:Boolean,reflect:!0})],Se.prototype,"disabled",2);a([g()],Se.prototype,"label",2);a([g()],Se.prototype,"href",2);a([g()],Se.prototype,"target",2);a([g()],Se.prototype,"rel",2);a([g()],Se.prototype,"download",2);a([g({type:Boolean,reflect:!0})],Se.prototype,"compact",2);a([g({type:Boolean,reflect:!0})],Se.prototype,"selected",2);Se=a([k("gds-menu-button")],Se);function r1(){return(e,t,s)=>{const o=e.connectedCallback,r=e.disconnectedCallback;e.connectedCallback=function(){o==null||o.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver(()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout(()=>{var n;(n=s.value)==null||n.call(this)},20)}),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){r==null||r.call(this),this.__resizeObservers[t].disconnect()}}}var t2=`@layer base {
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
`,s2=(e,t)=>{let s;return()=>{clearTimeout(s),s=setTimeout(e,t)}},gt,Mi,n1,Ei,Ti,Ai,wr,_r,zi,Oi,Le=class extends Y{constructor(){super(...arguments),f(this,Mi),this.size="medium",f(this,gt,void 0),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,f(this,Ei,()=>{const e=this.segments.filter((t,s,o)=>{var r;return((r=o[s+1])==null?void 0:r.isVisible)&&!t.isVisible})[0];this._elTrack.scrollLeft=e.offsetLeft}),f(this,Ti,()=>{const e=this.segments.filter((t,s,o)=>{var r;return((r=o[s-1])==null?void 0:r.isVisible)&&!t.isVisible}).reverse()[0];this._elTrack.scrollLeft=e.offsetLeft}),f(this,Ai,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),f(this,wr,s2(c(this,Ai),50)),f(this,_r,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,s=e.offsetLeft;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),f(this,zi,e=>{const t=this.segments.find(s=>s===e.target||s.contains(e.target));t&&(this.segments.forEach(s=>s.selected=!1),t.selected=!0,U(this,gt,t.value),c(this,_r).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0})))}),f(this,Oi,()=>{c(this,gt)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===c(this,gt));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return c(this,gt)}set value(e){U(this,gt,e),c(this,Oi).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{c(this,wr).call(this)})})}render(){return m`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${c(this,Ei)}
        aria-label=${V("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${c(this,zi)}
          @slotchange=${C(this,Mi,n1)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${c(this,Ti)}
        aria-label=${V("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{c(this,wr).call(this),c(this,_r).call(this)})}};gt=new WeakMap;Mi=new WeakSet;n1=function(){var e,t;const s=(e=this.segments.find(o=>o.selected))==null?void 0:e.value;s&&U(this,gt,s),(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=new IntersectionObserver(o=>{o.forEach(r=>{const n=r.target;n._isVisible=r.intersectionRatio>.99})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(o=>{var r;(r=this.intersectionObserver)==null||r.observe(o)})};Ei=new WeakMap;Ti=new WeakMap;Ai=new WeakMap;wr=new WeakMap;_r=new WeakMap;zi=new WeakMap;Oi=new WeakMap;Le.styles=[J,G(t2)];a([g({reflect:!0})],Le.prototype,"size",2);a([g()],Le.prototype,"value",1);a([te("slot")],Le.prototype,"_elSlot",2);a([te("#indicator")],Le.prototype,"_elIndicator",2);a([te("#track")],Le.prototype,"_elTrack",2);a([P()],Le.prototype,"_showPrevButton",2);a([P()],Le.prototype,"_showNextButton",2);a([r1(),ne("segMinWidth")],Le.prototype,"_recalculateMinWidth",1);Le=a([k("gds-segmented-control"),qt()],Le);var o2=`@layer base {
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
`,tt=class extends Y{constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return m`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};tt.styles=[...J,G(o2)];a([g({type:Boolean,reflect:!0})],tt.prototype,"selected",2);a([g()],tt.prototype,"value",2);a([g({type:Boolean,reflect:!0})],tt.prototype,"disabled",2);a([y({valueTemplate:e=>e})],tt.prototype,"min-width",2);a([y({valueTemplate:e=>e})],tt.prototype,"max-width",2);a([y()],tt.prototype,"width",2);tt=a([k("gds-segment")],tt);var bo=class extends L{};bo._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';bo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>';bo._name="chevron-left";bo=a([k("gds-icon-chevron-left")],bo);var xo=class extends L{};xo._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';xo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>';xo._name="chevron-right";xo=a([k("gds-icon-chevron-right")],xo);var r2="en",n2=["sv"],i1={};Rg(i1,{templates:()=>i2});var i2={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Öppna kalender",s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"Mån",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s39938ecdae568740:"September",s407a88a592a0987c:"Augusti",s46d6587089bd0356:"Nästa månad",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:Nr`${0} valda`,s5d929ff1619ac0c9:"Sök",s5e8250fb85d64c23:"Stäng",s5febcd9b311c16fe:"Scrolla höger",s62931b2a50168976:"Föregående månad",s63d040e37887f17e:"Idag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tis",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"Öppna meny",s83c436ed1bc16dfb:"Visa mer information",s8ade4e9d5e804d6a:"Första tillgängliga datum",s9836b719fa8ef857:"Lör",s987ac119fac8d621:"Sön",s9af3c72c33088826:Nr`Det finns ${0} fel att åtgärda innan du kan fortsätta:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Månad",sb4f1dffbb6be6302:"Rensa",sb77f4dce69a005ac:"Felmeddelande.",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Sök i listan av val",sdc42f1da42d6411a:"Rensa text",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sista tillgängliga datum",sf295af199c723ec8:"Fre"},gd=new Map([["sv",i1]]),a2=({extraLocales:e,extraTemplates:t}={extraLocales:[],extraTemplates:new Map})=>{const s=[...n2];for(const[o,r]of t)gd.set(o,r);for(const o of e)s.push(o);return Th({sourceLocale:r2,targetLocales:s,loadLocale:async o=>{const r=gd.get(o);return r||Promise.reject(new Error(`Locale ${o} not found`))}})},l2=Object.defineProperty,d2=Object.getOwnPropertyDescriptor,c2=(e,t,s,o)=>{for(var r=o>1?void 0:o?d2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&l2(t,s,r),r};const{setLocale:hd}=a2();let pd=class extends E{connectedCallback(){super.connectedCallback()}handleButtonClick(e){this.dispatchEvent(new CustomEvent("view-change",{detail:{view:e},bubbles:!0,composed:!0}))}render(){return m`
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
              <gds-menu-item @click=${()=>hd("en")}>EN</gds-menu-item>
              <gds-menu-item @click=${()=>hd("sv")}>SV</gds-menu-item>
            </gds-context-menu> -->
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `}};pd=c2([O("gds-header")],pd);var gl={fromAttribute(e){return new Date(e)},toAttribute(e){return e.toISOString()}},g2={fromAttribute(e){return e.split(",").map(t=>new Date(t.trim()))},toAttribute(e){return JSON.stringify(e.map(t=>t.toISOString()))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*h2(e,t){const s=typeof t=="function";if(e!==void 0){let o=-1;for(const r of e)o>-1&&(yield s?t(o):t),o++,yield r}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*p2(e,t){if(e!==void 0){let s=0;for(const o of e)yield t(o,s++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ud=(e,t,s)=>{const o=new Map;for(let r=t;r<=s;r++)o.set(e[r],r);return o},u2=ks(class extends er{constructor(e){if(super(e),e.type!==Qo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let o;s===void 0?s=t:t!==void 0&&(o=t);const r=[],n=[];let i=0;for(const l of e)r[i]=o?o(l,i):i,n[i]=s(l,i),i++;return{values:n,keys:r}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,o]){const r=jh(e),{values:n,keys:i}=this.dt(t,s,o);if(!Array.isArray(r))return this.ut=i,n;const l=this.ut??(this.ut=[]),d=[];let h,v,p=0,x=r.length-1,w=0,$=n.length-1;for(;p<=x&&w<=$;)if(r[p]===null)p++;else if(r[x]===null)x--;else if(l[p]===i[w])d[w]=Mt(r[p],n[w]),p++,w++;else if(l[x]===i[$])d[$]=Mt(r[x],n[$]),x--,$--;else if(l[p]===i[$])d[$]=Mt(r[p],n[$]),zs(e,d[$+1],r[p]),p++,$--;else if(l[x]===i[w])d[w]=Mt(r[x],n[w]),zs(e,r[p],r[x]),x--,w++;else if(h===void 0&&(h=ud(i,w,$),v=ud(l,p,x)),h.has(l[p]))if(h.has(l[x])){const M=v.get(i[w]),j=M!==void 0?r[M]:null;if(j===null){const H=zs(e,r[p]);Mt(H,n[w]),d[w]=H}else d[w]=Mt(j,n[w]),zs(e,r[p],j),r[M]=null;w++}else Fn(r[x]),x--;else Fn(r[p]),p++;for(;w<=$;){const M=zs(e,d[$+1]);Mt(M,n[w]),d[w++]=M}for(;p<=x;){const M=r[p++];M!==null&&Fn(M)}return this.ut=i,Fh(e,d),Ae}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class f2{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class m2{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fd=e=>!Vh(e)&&typeof e.then=="function",md=1073741823;class v2 extends xc{constructor(){super(...arguments),this._$Cwt=md,this._$Cbt=[],this._$CK=new f2(this),this._$CX=new m2}render(...t){return t.find(s=>!fd(s))??Ae}update(t,s){const o=this._$Cbt;let r=o.length;this._$Cbt=s;const n=this._$CK,i=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<s.length&&!(l>this._$Cwt);l++){const d=s[l];if(!fd(d))return this._$Cwt=l,d;l<r&&d===o[l]||(this._$Cwt=md,r=0,Promise.resolve(d).then(async h=>{for(;i.get();)await i.get();const v=n.deref();if(v!==void 0){const p=v._$Cbt.indexOf(d);p>-1&&p<v._$Cwt&&(v._$Cwt=p,v.setValue(h))}}))}return Ae}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const b2=ks(v2);function Li(e){"@babel/helpers - typeof";return Li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Li(e)}function yt(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function ce(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function le(e){ce(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||Li(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Vt(e,t){ce(2,arguments);var s=le(e),o=yt(t);return isNaN(o)?new Date(NaN):(o&&s.setDate(s.getDate()+o),s)}function a1(e,t){ce(2,arguments);var s=le(e),o=yt(t);if(isNaN(o))return new Date(NaN);if(!o)return s;var r=s.getDate(),n=new Date(s.getTime());n.setMonth(s.getMonth()+o+1,0);var i=n.getDate();return r>=i?n:(s.setFullYear(n.getFullYear(),n.getMonth(),r),s)}var x2={};function hl(){return x2}function fs(e,t){var s,o,r,n,i,l,d,h;ce(1,arguments);var v=hl(),p=yt((s=(o=(r=(n=t==null?void 0:t.weekStartsOn)!==null&&n!==void 0?n:t==null||(i=t.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&r!==void 0?r:v.weekStartsOn)!==null&&o!==void 0?o:(d=v.locale)===null||d===void 0||(h=d.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&s!==void 0?s:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var x=le(e),w=x.getDay(),$=(w<p?7:0)+w-p;return x.setDate(x.getDate()-$),x.setHours(0,0,0,0),x}function vd(e){ce(1,arguments);var t=le(e);return t.setHours(0,0,0,0),t}function y2(e,t){ce(2,arguments);var s=yt(t),o=s*7;return Vt(e,o)}function lt(e,t){ce(2,arguments);var s=vd(e),o=vd(t);return s.getTime()===o.getTime()}function w2(e){ce(1,arguments);var t=le(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(23,59,59,999),t}function _2(e,t){var s;ce(1,arguments);var o=e||{},r=le(o.start),n=le(o.end),i=n.getTime();if(!(r.getTime()<=i))throw new RangeError("Invalid interval");var l=[],d=r;d.setHours(0,0,0,0);var h=Number((s=void 0)!==null&&s!==void 0?s:1);if(h<1||isNaN(h))throw new RangeError("`options.step` must be a number greater than 1");for(;d.getTime()<=i;)l.push(le(d)),d.setDate(d.getDate()+h),d.setHours(0,0,0,0);return l}function C2(e,t){ce(1,arguments);var s=e||{},o=le(s.start),r=le(s.end),n=r.getTime();if(!(o.getTime()<=n))throw new RangeError("Invalid interval");var i=fs(o,t),l=fs(r,t);i.setHours(15),l.setHours(15),n=l.getTime();for(var d=[],h=i;h.getTime()<=n;)h.setHours(0),d.push(le(h)),h=y2(h,1),h.setHours(15);return d}function k2(e){ce(1,arguments);var t=le(e);return t.setDate(1),t.setHours(0,0,0,0),t}function $2(e,t){var s,o,r,n,i,l;ce(1,arguments);var d=le(e),h=d.getFullYear(),v=hl(),p=yt((s=(o=(r=(n=void 0)!==null&&n!==void 0?n:void 0)!==null&&r!==void 0?r:v.firstWeekContainsDate)!==null&&o!==void 0?o:(i=v.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var x=new Date(0);x.setFullYear(h+1,0,p),x.setHours(0,0,0,0);var w=fs(x,t),$=new Date(0);$.setFullYear(h,0,p),$.setHours(0,0,0,0);var M=fs($,t);return d.getTime()>=w.getTime()?h+1:d.getTime()>=M.getTime()?h:h-1}function S2(e,t){var s,o,r,n,i,l;ce(1,arguments);var d=hl(),h=yt((s=(o=(r=(n=void 0)!==null&&n!==void 0?n:void 0)!==null&&r!==void 0?r:d.firstWeekContainsDate)!==null&&o!==void 0?o:(i=d.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&s!==void 0?s:1),v=$2(e,t),p=new Date(0);p.setFullYear(v,0,h),p.setHours(0,0,0,0);var x=fs(p,t);return x}var M2=6048e5;function E2(e,t){ce(1,arguments);var s=le(e),o=fs(s,t).getTime()-S2(s,t).getTime();return Math.round(o/M2)+1}function T2(e){ce(1,arguments);var t=le(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(0,0,0,0),t}function A2(e,t){ce(2,arguments);var s=le(e),o=le(t);return s.getFullYear()===o.getFullYear()&&s.getMonth()===o.getMonth()}function z2(e,t){ce(2,arguments);var s=le(e),o=yt(t);return s.setHours(o),s}function O2(e,t){ce(2,arguments);var s=yt(t);return a1(e,-s)}var L2=D`
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
`,Ps,Di,l1,yo,tn,Vi,d1,Pi,c1,Hi,g1,zt,os,Fi,h1,ji,Wi,Ri,Bi,Ii,Ni,Gi,Zi,Ui,Yi,sn,qi,Ki,Cr,Xi,Ji,Ke,Qi,p1,pl,u1,q=class extends Me{constructor(){super(...arguments),f(this,Di),f(this,yo),f(this,Vi),f(this,Pi),f(this,Hi),f(this,zt),f(this,Fi),f(this,Cr),f(this,Qi),f(this,pl),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=C(this,Cr,Xi).call(this,"y-m-d"),f(this,Ps,void 0),f(this,ji,e=>{this._elTrigger.then(t=>{var s,o;((s=e.relatedTarget)==null?void 0:s.parentElement)!==e.target&&((o=document.getSelection())==null||o.removeAllRanges())})}),f(this,Wi,e=>{this._elTrigger.then(t=>{var s,o;(s=document.getSelection())==null||s.removeAllRanges();const r=new Range;r.setStart(t.firstChild,0),r.setEnd(t.lastChild,4),(o=document.getSelection())==null||o.addRange(r)})}),f(this,Ri,e=>{this._elField.then(t=>{var s;e.currentTarget===t&&(e.preventDefault(),(s=e.clipboardData)==null||s.setData("text/plain",this.displayValue))})}),f(this,Bi,e=>{this._elField.then(t=>{var s;if(e.currentTarget!==t)return;e.preventDefault();const o=(s=e.clipboardData)==null?void 0:s.getData("text/plain");if(!o)return;let r=new Date("-");const n="Invalid Date",i=o.split(this._dateFormatLayout.delimiter);if(i.length===3){const l=this._dateFormatLayout.layout,d=parseInt(i[l.findIndex(p=>p.token==="y")]),h=parseInt(i[l.findIndex(p=>p.token==="m")])-1,v=parseInt(i[l.findIndex(p=>p.token==="d")]);!isNaN(d)&&!isNaN(h)&&!isNaN(v)&&(r=new Date(`${d}-${h+1}-${v}`))}r.toString()===n&&(r=new Date(o),r.toString()===n)||(this.value=r,C(this,zt,os).call(this))})}),f(this,Ii,e=>{var t;(t=this._elSpinners[0])==null||t.focus()}),f(this,Ni,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,C(this,zt,os).call(this)}),f(this,Gi,e=>{var t;e.stopPropagation(),this._focusedMonth=(t=e.target)==null?void 0:t.value}),f(this,Zi,e=>{var t;e.stopPropagation(),this._focusedYear=(t=e.target)==null?void 0:t.value}),f(this,Ui,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),f(this,Yi,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),f(this,sn,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),C(this,Fi,h1).call(this)}),f(this,qi,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;!lt(t||new Date(0),c(this,Ps)||new Date(0))&&(this.value=t,C(this,zt,os).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=c(this,Ps))}}),f(this,Ki,e=>{const t=Array.from(this._elSpinners).findIndex(s=>s===e.target);if(e.key==="ArrowRight"){const s=this._elSpinners[t+1];s&&s.focus()}if(e.key==="ArrowLeft"){const s=this._elSpinners[t-1];s&&s.focus()}}),f(this,Ji,(e,t)=>{c(this,Ke)[t]=e;const s=new Date;s.setFullYear(parseInt(c(this,Ke).year)),s.setMonth(parseInt(c(this,Ke).month)-1),s.setDate(parseInt(c(this,Ke).day)),s.setHours(12,0,0,0),s.toString()!=="Invalid Date"&&(this.value=s,C(this,zt,os).call(this))}),f(this,Ke,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=C(this,Cr,Xi).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-datepicker")}render(){return m`${ae(this.label&&!this.hideLabel,()=>m`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info" id="sub-label"><slot name="sub-label"></slot></div>

      <div
        class=${Fe({field:!0,small:this.size==="small"})}
        id="field"
        @click=${c(this,Ii)}
        @copy=${c(this,Ri)}
        @paste=${c(this,Bi)}
      >
        <div
          class=${Fe({input:!0,"is-placeholder":!this.value})}
          @focusout=${c(this,ji)}
        >
          ${h2(p2(this._dateFormatLayout.layout,(e,t)=>m`<gds-date-part-spinner
                  id="spinner-${t}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${c(this,Ke)[e.name]}
                  aria-valuemin=${C(this,Pi,c1).call(this,e.name)}
                  aria-valuemax=${C(this,Hi,g1).call(this,e.name)}
                  aria-label=${C(this,Vi,d1).call(this,e.name)}
                  aria-describedby="label sub-label message"
                  @keydown=${c(this,Ki)}
                  @change=${s=>c(this,Ji).call(this,s.detail.value,e.name)}
                  @focus=${c(this,Wi)}
                  @touchend=${s=>{this.open=!0,s.preventDefault()}}
                ></gds-date-part-spinner>`),m`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${V("Open calendar modal")}"
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
        @gds-ui-state=${c(this,qi)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{var t;((t=e.target)==null?void 0:t.id)==="calendar-popover"&&this._elCalendar.then(o=>o.focus())}}
      >
        <div class="header">
          <gds-button
            @click=${c(this,Yi)}
            aria-label=${V("Previous month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </gds-button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${c(this,Gi)}
            .maxHeight=${300}
            label="${V("Month")}"
            size="small"
            class="month"
            hide-label
          >
            <gds-option value="0">${V("January")}</gds-option>
            <gds-option value="1">${V("February")}</gds-option>
            <gds-option value="2">${V("March")}</gds-option>
            <gds-option value="3">${V("April")}</gds-option>
            <gds-option value="4">${V("May")}</gds-option>
            <gds-option value="5">${V("June")}</gds-option>
            <gds-option value="6">${V("July")}</gds-option>
            <gds-option value="7">${V("August")}</gds-option>
            <gds-option value="8">${V("September")}</gds-option>
            <gds-option value="9">${V("October")}</gds-option>
            <gds-option value="10">${V("November")}</gds-option>
            <gds-option value="11">${V("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${c(this,Zi)}
            .maxHeight=${300}
            label="${V("Year")}"
            size="small"
            class="year"
            hide-label
          >
            ${u2(c(this,Qi,p1),e=>e,e=>m`<gds-option value=${e}>${e}</gds-option>`)}
          </gds-dropdown>
          <gds-button
            @click=${c(this,Ui)}
            aria-label=${V("Next month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${c(this,Ni)}
          @gds-date-focused=${c(this,sn)}
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
            @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,C(this,zt,os).call(this)}}
          >
            ${V("Clear")}
          </gds-button>
          ${b2(C(this,Di,l1).call(this),N)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),C(this,yo,tn).call(this,new Date)}}
          >
            ${V("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(!this.value){U(this,Ke,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),o=e.getDate().toString().padStart(2,"0");U(this,Ke,{year:t,month:s,day:o})}_handleOpenChange(){this.open&&(U(this,Ps,this.value),this._elCalendar.then(e=>e.focus()))}};Ps=new WeakMap;Di=new WeakSet;l1=async function(){const e=await this.getFocusedDate();let t="",s;return e&&e>this.max?(t=V("Last available date"),s=o=>{o.stopPropagation(),C(this,yo,tn).call(this,this.max)}):e&&e<this.min&&(t=V("First available date"),s=o=>{o.stopPropagation(),C(this,yo,tn).call(this,this.min)}),m`${ae(t.length>0,()=>m`<gds-button rank="tertiary" size="small" @click=${s}>
          ${t}
        </gds-button>`,()=>N)}`};yo=new WeakSet;tn=function(e){const t=new Date(e);this._elCalendar.then(s=>s.focusedDate=t).then(c(this,sn))};Vi=new WeakSet;d1=function(e){return{year:V("Year"),month:V("Month"),day:V("Day")}[e]};Pi=new WeakSet;c1=function(e){return{year:1900,month:1,day:1}[e]};Hi=new WeakSet;g1=function(e){return{year:9999,month:12,day:31}[e]};zt=new WeakSet;os=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))};Fi=new WeakSet;h1=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))};ji=new WeakMap;Wi=new WeakMap;Ri=new WeakMap;Bi=new WeakMap;Ii=new WeakMap;Ni=new WeakMap;Gi=new WeakMap;Zi=new WeakMap;Ui=new WeakMap;Yi=new WeakMap;sn=new WeakMap;qi=new WeakMap;Ki=new WeakMap;Cr=new WeakSet;Xi=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),o=s.findIndex(d=>d==="y"),r=s.findIndex(d=>d==="m"),n=s.findIndex(d=>d==="d");if(o===-1||r===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const l=[o,r,n].sort((d,h)=>d-h).map(d=>s[d]).map(d=>({token:d,name:d==="y"?"year":d==="m"?"month":"day"}));return{delimiter:t,layout:l}};Ji=new WeakMap;Ke=new WeakMap;Qi=new WeakSet;p1=function(){var e;const t=this.min.getFullYear(),s=this.max.getFullYear(),o=c(this,pl,u1),r=(e=this.value)==null?void 0:e.getFullYear();return{*[Symbol.iterator](){o&&(yield r);for(let n=t;n<=s;n++)yield n}}};pl=new WeakSet;u1=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};q.styles=[J,L2];q.shadowRootOptions={mode:"open",delegatesFocus:!0};a([g({converter:gl})],q.prototype,"value",2);a([g({converter:gl})],q.prototype,"min",2);a([g({converter:gl})],q.prototype,"max",2);a([g({type:Boolean})],q.prototype,"open",2);a([g()],q.prototype,"label",2);a([g({type:Boolean,attribute:"show-week-numbers"})],q.prototype,"showWeekNumbers",2);a([g()],q.prototype,"size",2);a([g({type:Boolean,attribute:"hide-label"})],q.prototype,"hideLabel",2);a([g()],q.prototype,"dateformat",1);a([g({type:Boolean,attribute:"disabled-weekends"})],q.prototype,"disabledWeekends",2);a([g({converter:g2,attribute:"disabled-dates"})],q.prototype,"disabledDates",2);a([xt("#calendar-button")],q.prototype,"test_calendarButton",2);a([P()],q.prototype,"_focusedMonth",2);a([P()],q.prototype,"_focusedYear",2);a([P()],q.prototype,"_dateFormatLayout",2);a([xt("#calendar")],q.prototype,"_elCalendar",2);a([xt("#calendar-button")],q.prototype,"_elTrigger",2);a([xt("#field")],q.prototype,"_elField",2);a([Vg("[role=spinbutton]")],q.prototype,"_elSpinners",2);a([te(".input")],q.prototype,"_elInput",2);a([ne("value")],q.prototype,"_handleValueChange",1);a([ne("open")],q.prototype,"_handleOpenChange",1);q=a([k("gds-datepicker"),qt()],q);var D2=D`
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
`,V2=D2,dt,ea,ta,sa,oa,ra,na,f1,ia,m1,aa,v1,ms,Cn,Q=class extends Me{constructor(){super(),f(this,na),f(this,ia),f(this,aa),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,f(this,dt,void 0),f(this,ea,e=>{const t=e.getBoundingClientRect(),o=window.innerHeight-t.bottom,r=t.top;let n=Math.min(r,this.maxHeight);return o>r&&(n=Math.min(o,this.maxHeight)),`${n-16}px`}),f(this,ta,e=>{if(!e.currentTarget)return;const t=e.currentTarget;if(this.options.forEach(o=>o.hidden=!1),!t.value)return;this.options.filter(o=>!this.searchFilter(t.value,o)).forEach(o=>o.hidden=!0)}),f(this,sa,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),f(this,oa,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),f(this,ra,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),f(this,ms,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),f(this,Cn,e=>{var t;e.key==="Tab"&&!this.searchable&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())}),gc(this)}get type(){return"gds-dropdown"}get options(){return c(this,dt)?Array.from(c(this,dt)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(c(this,dt))return Array.from(c(this,dt)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var e,t;let s;return Array.isArray(this.value)?this.value.length>2?s=V(Nr`${this.value.length} selected`):s=this.value.reduce((o,r)=>{var n;return o+((n=this.options.find(i=>i.value===r))==null?void 0:n.innerHTML)+", "},"").slice(0,-2):s=(e=this.options.find(o=>o.selected))==null?void 0:e.innerHTML,s||((t=this.placeholder)==null?void 0:t.innerHTML)||""}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return m`
      ${ae(this.label&&!this.hideLabel,()=>m`<label for="trigger">${this.label}</label>`)}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${c(this,ea)}
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
          class=${Fe({small:this.size==="small"})}
        >
          <slot name="trigger">
            <span>${Fc(this.displayValue)}</span>
          </slot>
          <div class="icon">
            <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
          </div>
        </button>
        ${ae(this.searchable,()=>m`<input
              id="searchinput"
              type="text"
              aria-label="${V("Filter available options")}"
              placeholder="${V("Search")}"
              @keydown=${c(this,sa)}
              @input=${c(this,ta)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${ue(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${C(this,na,f1)}"
          @gds-focus="${c(this,ra)}"
          @keydown=${c(this,oa)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"
        ><slot name="message">${this.validationMessage}</slot></span
      >
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),U(this,dt,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){var e;const t=this.open;(e=c(this,dt))==null||e.forEach(o=>o.hidden=!t),t?C(this,ia,m1).call(this):(C(this,aa,v1).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const s=this.options.find(o=>o.selected);this.updateComplete.then(()=>s==null?void 0:s.scrollIntoView()),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:t},bubbles:!0,composed:!0}))}};dt=new WeakMap;ea=new WeakMap;ta=new WeakMap;sa=new WeakMap;oa=new WeakMap;ra=new WeakMap;na=new WeakSet;f1=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};ia=new WeakSet;m1=function(){this.addEventListener("blur",c(this,ms)),this.addEventListener("gds-blur",c(this,ms)),this.addEventListener("keydown",c(this,Cn))};aa=new WeakSet;v1=function(){this.removeEventListener("blur",c(this,ms)),this.removeEventListener("gds-blur",c(this,ms)),this.removeEventListener("keydown",c(this,Cn))};ms=new WeakMap;Cn=new WeakMap;Q.styles=[J,V2];Q.shadowRootOptions={mode:"open",delegatesFocus:!0};a([g()],Q.prototype,"label",2);a([g({type:Boolean,reflect:!0})],Q.prototype,"open",2);a([g({type:Boolean,reflect:!0})],Q.prototype,"searchable",2);a([g({type:Boolean,reflect:!0})],Q.prototype,"multiple",2);a([g()],Q.prototype,"compareWith",2);a([g()],Q.prototype,"searchFilter",2);a([g({type:Boolean,attribute:"sync-popover-width"})],Q.prototype,"syncPopoverWidth",2);a([g({type:Number,attribute:"max-height"})],Q.prototype,"maxHeight",2);a([g()],Q.prototype,"size",2);a([g({type:Boolean,attribute:"hide-label"})],Q.prototype,"hideLabel",2);a([g()],Q.prototype,"disableMobileStyles",2);a([te("#trigger")],Q.prototype,"_elTriggerBtn",2);a([xt("#listbox")],Q.prototype,"_elListbox",2);a([te("#searchinput")],Q.prototype,"_elSearchInput",2);a([Ga({attributes:!0,childList:!0,subtree:!0,characterData:!0})],Q.prototype,"_handleLightDOMChange",1);a([ne("value")],Q.prototype,"_handleValueChange",1);a([ne("open")],Q.prototype,"_onOpenChange",1);Q=a([k("gds-dropdown")],Q);var P2=D`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`,H2=P2,Hs,la,vs=class extends Y{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,f(this,Hs,Yr()),f(this,la,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new mc(this)}get navigableItems(){return this.visibleOptionElements}get options(){return c(this,Hs).value?vc(c(this,Hs).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),xe.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",c(this,la))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return m`<slot ${Xs(c(this,Hs))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};Hs=new WeakMap;la=new WeakMap;vs.styles=H2;a([g({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],vs.prototype,"multiple",2);a([g()],vs.prototype,"compareWith",2);a([ne("multiple")],vs.prototype,"_rerenderOptions",1);vs=a([k("gds-listbox")],vs);var Ot,kr,da,mt=class extends yc(Y){constructor(){super(),f(this,kr),f(this,Ot,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",C(this,kr,da)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),C(this,kr,da).call(this,e))})}get hidden(){return c(this,Ot)}set hidden(e){this.isPlaceholder||(U(this,Ot,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(U(this,Ot,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>xe.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(U(this,Ot,!0),this.setAttribute("aria-hidden","true")):(U(this,Ot,!1),this.setAttribute("aria-hidden","false"))}render(){var e;const t=(e=this.parentElement)==null?void 0:e.multiple,s=m`
      <span class="checkbox ${Fe({checked:this.selected})}">
        ${this.selected?m`<gds-icon-checkmark stroke="4"></gds-icon-checkmark>`:""}
      </span>
    `;return t||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),m`<div>${ae(t,()=>s)} <slot></slot></div>`}};Ot=new WeakMap;kr=new WeakSet;da=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};mt.styles=[J,wc];a([g()],mt.prototype,"value",2);a([g({attribute:"aria-hidden",reflect:!0})],mt.prototype,"hidden",1);a([g({attribute:"aria-selected",reflect:!0})],mt.prototype,"selected",2);a([g({type:Boolean,reflect:!0})],mt.prototype,"isPlaceholder",2);a([ne("isplaceholder")],mt.prototype,"_handlePlaceholderStatusChange",1);mt=a([k("gds-option")],mt);var wo=class extends L{};wo._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';wo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>';wo._name="chevron-bottom";wo=a([k("gds-icon-chevron-bottom")],wo);var _o=class extends L{};_o._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';_o._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99454C22.2979 3.40464 22.4157 4.18729 22.0056 4.74263L10.0056 20.9926C9.80433 21.2652 9.50107 21.4443 9.16524 21.4891C8.82942 21.5339 8.4898 21.4404 8.22417 21.2301L2.22417 16.4801C1.6829 16.0516 1.59149 15.2655 2.01999 14.7242C2.4485 14.1829 3.23466 14.0915 3.77593 14.52L8.76241 18.4677L19.9945 3.25753C20.4046 2.70218 21.1873 2.58444 21.7426 2.99454Z" fill="currentColor"/>';_o._name="checkmark";_o=a([k("gds-icon-checkmark")],_o);var Xe,$r,Sr,Mr,Er,ca,ga,ha,pa,b1,rs,Fs,Tr,ua,ns,js,Ws,Ar,Re=class extends E{constructor(){super(...arguments),f(this,pa),f(this,rs),f(this,Tr),f(this,ns),f(this,Ws),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=C(this,Tr,ua).call(this,this.value,this.length),f(this,Xe,""),f(this,$r,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=C(this,ns,js).call(this,e+1),C(this,rs,Fs).call(this)}),f(this,Sr,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=C(this,ns,js).call(this,e-1),C(this,rs,Fs).call(this)}),f(this,Mr,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),f(this,Er,()=>{C(this,Ws,Ar).call(this)}),f(this,ca,()=>{c(this,Xe)!==""&&(C(this,Ws,Ar).call(this),this.value=C(this,ns,js).call(this,parseInt(this.value.toString())),C(this,rs,Fs).call(this))}),f(this,ga,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?c(this,Sr).call(this):c(this,$r).call(this)}),f(this,ha,e=>{let t=!1;if(e.key==="ArrowUp")c(this,$r).call(this),t=!0;else if(e.key==="ArrowDown")c(this,Sr).call(this),t=!0;else{const s=parseInt(e.key);isNaN(s)||(c(this,Xe).length<this.length&&(U(this,Xe,c(this,Xe)+s.toString()),this.value=parseInt(c(this,Xe))),c(this,Xe).length===this.length&&(this.value=C(this,ns,js).call(this,this.value),C(this,Ws,Ar).call(this),C(this,pa,b1).call(this),C(this,rs,Fs).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",c(this,ga)),this.addEventListener("keydown",c(this,ha)),this.addEventListener("blur",c(this,ca)),this.addEventListener("focus",c(this,Er)),this.addEventListener("click",c(this,Mr)),this.addEventListener("mousedown",c(this,Mr))}focus(e){super.focus(e),c(this,Er).call(this)}render(){return m`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=C(this,Tr,ua).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};Xe=new WeakMap;$r=new WeakMap;Sr=new WeakMap;Mr=new WeakMap;Er=new WeakMap;ca=new WeakMap;ga=new WeakMap;ha=new WeakMap;pa=new WeakSet;b1=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof Re){e.focus();break}e=e.nextElementSibling}};rs=new WeakSet;Fs=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};Tr=new WeakSet;ua=function(e,t){return String(e).padStart(t,"0")};ns=new WeakSet;js=function(e){return Math.max(this.min,Math.min(this.max,e))};Ws=new WeakSet;Ar=function(){U(this,Xe,"")};Re.formAssociated=!0;a([g({type:Number})],Re.prototype,"value",2);a([g({type:Number})],Re.prototype,"length",2);a([g({type:Number,attribute:"aria-valuemin"})],Re.prototype,"min",2);a([g({type:Number,attribute:"aria-valuemax"})],Re.prototype,"max",2);a([P()],Re.prototype,"displayValue",2);a([ne("value")],Re.prototype,"_refreshDisplayValue",1);Re=a([k("gds-date-part-spinner")],Re);function F2(e,t){const s=k2(e),o=w2(e),r=C2({start:s,end:o},{weekStartsOn:1});for(;r.length<6;)r.push(Vt(r[r.length-1],7));return ge`${t(r.map(n=>({days:_2({start:n,end:Vt(n,6)})})))}`}var j2=D`
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
`,W2=j2,on,ul,fa,x1,ee=class extends Y{constructor(){super(...arguments),f(this,on),f(this,fa),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=e=>e.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=T2(new Date(this.focusedYear,e,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),s.setMonth(e),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),xe.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",C(this,fa,x1)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date;return ge`<table role="grid" aria-label="${ue(this.label)}">
      ${ae(!this.hideDayNames,()=>ge`<thead role="rowgroup">
            <tr role="row">
              ${ae(this.showWeekNumbers,()=>ge`<th></th>`)}
              <th>${V("Mon")}</th>
              <th>${V("Tue")}</th>
              <th>${V("Wed")}</th>
              <th>${V("Thu")}</th>
              <th>${V("Fri")}</th>
              <th>${V("Sat")}</th>
              <th>${V("Sun")}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${F2(this.focusedDate,t=>ge`
            ${t.map(s=>ge`
                <tr role="row">
                  ${ae(this.showWeekNumbers,()=>ge`<td class="week-number" scope="row">
                        ${E2(s.days[0])}
                      </td>`)}
                  ${s.days.map(o=>{const r=this.customizedDates&&this.customizedDates.find(p=>lt(p.date,o)),n=ds({color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(p=>lt(p,o)))},r),i=!A2(this.focusedDate,o),l=(o<this.min||o>this.max)&&!lt(o,this.min)&&!lt(o,this.max),d=o.getDay()===0||o.getDay()===6,h=n.disabled||i||l||this.disabledWeekends&&d;return this.hideExtraneousDays&&i?ge`<td inert></td>`:ge`
                          <td
                            role="${ue(h?void 0:"gridcell")}"
                            class="${Fe({"custom-date":!!r,disabled:!!h,today:lt(e,o)})}"
                            ?disabled=${h}
                            tabindex="${lt(this.focusedDate,o)?0:-1}"
                            aria-selected="${this.value&&lt(this.value,o)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(o)}"
                            @click=${()=>h?null:C(this,on,ul).call(this,o)}
                            id="dateCell-${o.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${n?n==null?void 0:n.color:""}"
                              >${o.getDate()}</span
                            >

                            ${ae(n.indicator,()=>ge`<span
                                  class="indicator-${n==null?void 0:n.indicator}"
                                  style="--_color: ${n==null?void 0:n.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};on=new WeakSet;ul=function(e){const t=z2(e,12);this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:t,bubbles:!1,composed:!1}))};fa=new WeakSet;x1=function(e){var t;let s=!1,o=new Date(this.focusedDate);e.key==="ArrowLeft"?(o=Vt(this.focusedDate,-1),s=!0):e.key==="ArrowRight"?(o=Vt(this.focusedDate,1),s=!0):e.key==="ArrowUp"?(o=Vt(this.focusedDate,-7),s=!0):e.key==="ArrowDown"?(o=Vt(this.focusedDate,7),s=!0):e.key==="Enter"||e.key===" "?((t=this._elFocusedCell)!=null&&t.hasAttribute("disabled")||C(this,on,ul).call(this,this.focusedDate),s=!0):e.key==="Home"?(o=new Date(this.focusedYear,this.focusedMonth,1),s=!0):e.key==="End"?(o=new Date(this.focusedYear,this.focusedMonth+1,0),s=!0):e.key==="PageUp"?(o=O2(this.focusedDate,1),s=!0):e.key==="PageDown"&&(o=a1(this.focusedDate,1),s=!0),o.getFullYear()>=this.min.getFullYear()&&o.getFullYear()<=this.max.getFullYear()&&this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:o,bubbles:!1,composed:!1,cancelable:!0}))&&(this.focusedDate=o),s&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var r;(r=this._elFocusedCell)==null||r.focus()}))};ee.styles=[J,W2];ee.shadowRootOptions={mode:"open",delegatesFocus:!0};a([g()],ee.prototype,"value",2);a([g({type:Date})],ee.prototype,"min",2);a([g({type:Date})],ee.prototype,"max",2);a([g()],ee.prototype,"focusedDate",2);a([g({type:Boolean,attribute:"disabled-weekends"})],ee.prototype,"disabledWeekends",2);a([g({type:Array,attribute:"disabled-dates"})],ee.prototype,"disabledDates",2);a([g({type:Number})],ee.prototype,"focusedMonth",1);a([g({type:Number})],ee.prototype,"focusedYear",1);a([g({type:Boolean})],ee.prototype,"showWeekNumbers",2);a([g({type:Boolean})],ee.prototype,"hideExtraneousDays",2);a([g({type:Boolean})],ee.prototype,"hideDayNames",2);a([g({attribute:!1})],ee.prototype,"customizedDates",2);a([g()],ee.prototype,"label",2);a([g({attribute:!1})],ee.prototype,"dateLabelTemplate",2);a([P()],ee.prototype,"_currentLocale",2);a([te('td[tabindex="0"]')],ee.prototype,"_elFocusedCell",2);a([ne("value")],ee.prototype,"_valueChanged",1);ee=a([k("gds-calendar"),qt()],ee);var ma=class extends Y{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.formObserver)==null||e.disconnect()}render(){var e;const s=Array.from(((e=this.form)==null?void 0:e.elements)||[]).filter(o=>o.invalid);return ae(s.length>0,()=>m`<gds-card level="3" border="4xs/negative" border-radius="2xs" padding="m" color="error-text">
          <gds-flex gap="s" level=="3" color="negative">
            <gds-container>
              <gds-icon-triangle-exclamation></gds-icon-triangle-exclamation>
            </gds-container>
            <gds-container >
            ${V(Nr`There are ${s.length} errors to correct before you can continue:`)}
            <ul>
              ${s.map(o=>m`<li><a href @click=${r=>{r.preventDefault(),o.focus()}}>${o.label}</li>`)}
            </ul>
          </gds-container>
        <gds-flex>
      </gds-card>`)}};ma.styles=D`
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
  `;ma=a([k("gds-form-summary")],ma);var R2=D`
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
`,B2=R2,Co,rn,kn,is,Rs,va,y1,fl,w1,ml,_1,vl,C1,bl,k1,xl,$1,zr,ba,Be=class extends Y{constructor(){super(...arguments),f(this,is),f(this,va),f(this,fl),f(this,ml),f(this,vl),f(this,bl),f(this,xl),f(this,zr),this.placement="bottom",this.overlappedBy=[],this.target=[],this.label="Coachmark",this.computeVisibility=(e,t,s)=>s,this.targetElement=void 0,this._isVisible=!1,this._preventClose=!1,f(this,Co,Yr()),f(this,rn,Yr()),f(this,kn,void 0)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",()=>{setTimeout(()=>{C(this,zr,ba).call(this),C(this,is,Rs).call(this)},400)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this._isVisible&&C(this,is,Rs).call(this)})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",C(this,is,Rs)),document.removeEventListener("keydown",e=>{e.key==="Escape"&&this._isVisible&&C(this,is,Rs).call(this)})}firstUpdated(){this.target.length>0&&(this.targetElement=C(this,va,y1).call(this,this.target),C(this,zr,ba).call(this))}setPreventClose(e){this._preventClose=e}render(){return m`${ae(this.target.length>0,()=>m`
        <div
          role="dialog"
          id="body"
          aria-label=${this.label}
          ${Xs(c(this,Co))}
        >
          <slot></slot>
          <div id="arrow" ${Xs(c(this,rn))}></div>
        </div>
      `,()=>m``)}`}};Co=new WeakMap;rn=new WeakMap;kn=new WeakMap;is=new WeakSet;Rs=function(){var e,t;this._isVisible&&(this._isVisible=!1,(e=c(this,Co).value)==null||e.remove(),(t=c(this,kn))==null||t.call(this),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this._isVisible,reason:"closed"},bubbles:!1,composed:!1})))};va=new WeakSet;y1=function(e){let t=!1,s;for(const o of e){if(o==="shadowRoot"){t=!0;continue}s?t&&s.shadowRoot?(s=s.shadowRoot.querySelector(o),t=!1):s=s.querySelector(o):s=document.querySelector(o)}return s};fl=new WeakSet;w1=function(e,t){if(e==t)return;const s=e.getBoundingClientRect(),o=t.getBoundingClientRect();return s.top<o.bottom&&s.bottom>o.top&&s.left<o.right&&s.right>o.left};ml=new WeakSet;_1=function(e){if(!e)return!1;for(const t of e){const s=document.querySelector(t);if(!(!s||getComputedStyle(s).visibility==="hidden")&&C(this,fl,w1).call(this,this.targetElement,s))return!0}return!1};vl=new WeakSet;C1=function(e){const t=e.getBoundingClientRect(),s=window.innerHeight||document.documentElement.clientHeight,o=window.innerWidth||document.documentElement.clientWidth;return t.top+t.height<0||t.top>s||t.left+t.width<0||t.left>o};bl=new WeakSet;k1=async function(e,t,s){return Dc(e,t,{placement:this.placement,middleware:[Oc(()=>({mainAxis:16,alignmentAxis:16})),{name:"detectOverflow",async fn(o){return{data:await kp(o,{boundary:document.body,rootBoundary:"document",altBoundary:!0,padding:{top:167,left:20}})}}},$p({padding:16}),Lc(),Sp(),Mp({padding:16,element:s})]})};xl=new WeakSet;$1=function(){if(!this.targetElement)return!1;const e=C(this,vl,C1).call(this,this.targetElement),t=this.targetElement.checkVisibility(),s=this.overlappedBy.length===0?!1:C(this,ml,_1).call(this,this.overlappedBy);return this.computeVisibility(this,this.targetElement,!s&&!e&&t)};zr=new WeakSet;ba=async function(){const e=this.targetElement,t=c(this,Co).value,s=c(this,rn).value;if(!(!e||!t||!s))try{U(this,kn,zc(e,t,()=>{C(this,bl,k1).call(this,e,t,s).then(({x:o,y:r,middlewareData:n,placement:i})=>{if(C(this,xl,$1).call(this)){if(this._isVisible=!0,Object.assign(t.style,{visibility:"visible",opacity:1,left:`${o}px`,top:`${r}px`}),n.arrow){const{x:l,y:d}=n.arrow;s.removeAttribute("class"),s.classList.add("arrow-"+i),Object.assign(s.style,{left:l!=null?`${l}px`:"",top:d!=null?`${d}px`:""})}}else this._isVisible=!1,Object.assign(t.style,{visibility:"hidden",opacity:0})})}))}catch{console.warn("failed to render tooltips")}};Be.styles=B2;a([g()],Be.prototype,"placement",2);a([g({attribute:!1})],Be.prototype,"overlappedBy",2);a([g({attribute:!1})],Be.prototype,"target",2);a([g()],Be.prototype,"label",2);a([g({attribute:!1})],Be.prototype,"computeVisibility",2);a([P()],Be.prototype,"_isVisible",2);a([P()],Be.prototype,"_preventClose",2);Be=a([k("gds-coachmark")],Be);var I2=D`
  :host {
    display: flex;
  }
  .button {
    box-shadow: var(--gds-shadow-m);
    position: fixed;
    inset: auto var(--gds-space-3xl) var(--gds-space-3xl) auto;
    block-size: calc(var(--_block-size) + var(--gds-space-xs));
    width: max-content;
  }
`,N2=I2,ko=class extends de{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",N2)}};a([y({valueTemplate:e=>e,selector:'[part="_button"]'})],ko.prototype,"position",2);a([y({valueTemplate:e=>e})],ko.prototype,"transform",2);a([y({valueTemplate:e=>e,selector:'[part="_button"]'})],ko.prototype,"inset",2);ko=a([k("gds-fab")],ko);var G2=Object.defineProperty,Z2=Object.getOwnPropertyDescriptor,U2=(e,t,s,o)=>{for(var r=o>1?void 0:o?Z2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&G2(t,s,r),r};let bd=class extends E{createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return m`<gds-card border="4xs/base300" padding="m" border-radius="s">
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
    </gds-card>`}};bd=U2([O("form-validation")],bd);var Y2=Object.defineProperty,q2=Object.getOwnPropertyDescriptor,yl=(e,t,s,o)=>{for(var r=o>1?void 0:o?q2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&Y2(t,s,r),r};let nn=class extends E{constructor(){super(...arguments),this.disabledWeekends=!1,this.showWeekNumbers=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return m` <div style="width:320px; margin: 8rem auto;">
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
    </div>`}};yl([P()],nn.prototype,"disabledWeekends",2);yl([P()],nn.prototype,"showWeekNumbers",2);nn=yl([O("datepicker-example")],nn);var K2=Object.defineProperty,X2=Object.getOwnPropertyDescriptor,S1=e=>{throw TypeError(e)},$n=(e,t,s,o)=>{for(var r=o>1?void 0:o?X2(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&K2(t,s,r),r},J2=(e,t,s)=>t.has(e)||S1("Cannot "+s),Q2=(e,t,s)=>(J2(e,t,"read from private field"),s?s.call(e):t.get(e)),eu=(e,t,s)=>t.has(e)?S1("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),xa;const cr=`${new Date().getFullYear()}-${new Date().getMonth()+1}`;let $o=class extends E{constructor(){super(...arguments),this.disabledWeekends=!1,this.showWeekNumbers=!1,this.showCustomizedDates=!1,eu(this,xa,[{date:new Date(`${cr}-07`),indicator:"dot",color:"var(--intent-danger-background)"},{date:new Date(`${cr}-12`),indicator:"dot",color:"var(--intent-danger-background)"},{date:new Date(`${cr}-24`),indicator:"dot",color:"var(--intent-danger-background)"},{date:new Date(`${cr}-21`),indicator:"dot",disabled:!0}])}createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return m` <div style="width:320px; margin: 8rem auto;">
      <h3 style="margin-bottom: 2rem;">Standalone calendar</h3>
      <div class="card" style="padding: 0">
        <gds-calendar
          .disabledWeekends=${this.disabledWeekends}
          .showWeekNumbers=${this.showWeekNumbers}
          .customizedDates=${this.showCustomizedDates?Q2(this,xa):[]}
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
    </div>`}};xa=new WeakMap;$n([P()],$o.prototype,"disabledWeekends",2);$n([P()],$o.prototype,"showWeekNumbers",2);$n([P()],$o.prototype,"showCustomizedDates",2);$o=$n([O("calendar-example")],$o);var tu=Object.defineProperty,su=Object.getOwnPropertyDescriptor,ou=(e,t,s,o)=>{for(var r=o>1?void 0:o?su(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&tu(t,s,r),r};const ru="https://github.com/user-attachments/assets/1c038c0b-b468-48d2-b171-092534b3a0e2";let xd=class extends E{createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return m`
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
                src=${ru}
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
    `}};xd=ou([O("gds-login")],xd);var nu=Object.defineProperty,iu=Object.getOwnPropertyDescriptor,au=(e,t,s,o)=>{for(var r=o>1?void 0:o?iu(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&nu(t,s,r),r};let yd=class extends E{render(){return m`
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
        `}};yd=au([O("tp-card-carousel")],yd);var lu=Object.defineProperty,du=Object.getOwnPropertyDescriptor,cu=(e,t,s,o)=>{for(var r=o>1?void 0:o?du(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&lu(t,s,r),r};let wd=class extends E{createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return m`<tp-card-carousel></tp-card-carousel>`}};wd=cu([O("gds-onboarding")],wd);var gu=D`
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
`,hu=gu,Nt=class extends Y{constructor(){super(...arguments),this.level="2"}render(){return m`<hr />`}};Nt.styles=[J,hu];a([g()],Nt.prototype,"level",2);a([y({valueTemplate:function(e){const[t,s]=e.split("/"),o=i=>{const l=i.trim();return l.startsWith("#")||l.startsWith("rgb(")||l.startsWith("rgba(")||l.startsWith("hsl(")||l.startsWith("hsla(")},r=(i,l)=>`var(--gds-color-l${i}-border-${l})`;return((i,l)=>o(i)?l?`color-mix(in srgb, ${i} ${parseFloat(l)*100}%, transparent 0%)`:i:r(this.level,i))(t,s)}})],Nt.prototype,"color",2);a([y({property:"--_size",valueTemplate:e=>`var(--gds-space-${e})`})],Nt.prototype,"size",2);a([y({property:"opacity",valueTemplate:e=>e})],Nt.prototype,"opacity",2);Nt=a([k("gds-divider")],Nt);var So=class extends L{};So._regularSVG='<path d="M7.75 20.75L3.75 16.75L7.75 12.75M16.25 11.25L20.25 7.25L16.25 3.25M5 16.75H20.25M3.75 7.25H19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';So._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7197 2.71967C16.0126 2.42678 16.4874 2.42678 16.7803 2.71967L20.7803 6.71967C21.0732 7.01256 21.0732 7.48744 20.7803 7.78033L16.7803 11.7803C16.4874 12.0732 16.0126 12.0732 15.7197 11.7803C15.4268 11.4874 15.4268 11.0126 15.7197 10.7197L18.4393 8H3.75C3.33579 8 3 7.66421 3 7.25C3 6.83579 3.33579 6.5 3.75 6.5H18.4393L15.7197 3.78033C15.4268 3.48744 15.4268 3.01256 15.7197 2.71967ZM8.28033 12.2197C8.57322 12.5126 8.57322 12.9874 8.28033 13.2803L5.56066 16H20.25C20.6642 16 21 16.3358 21 16.75C21 17.1642 20.6642 17.5 20.25 17.5H5.56066L8.28033 20.2197C8.57322 20.5126 8.57322 20.9874 8.28033 21.2803C7.98744 21.5732 7.51256 21.5732 7.21967 21.2803L3.21967 17.2803C2.92678 16.9874 2.92678 16.5126 3.21967 16.2197L7.21967 12.2197C7.51256 11.9268 7.98744 11.9268 8.28033 12.2197Z" fill="currentColor"/>';So._name="arrow-left-right";So=a([k("gds-icon-arrow-left-right")],So);var Mo=class extends L{};Mo._regularSVG='<path d="M12 3.75V12M12 12V20.25M12 12H3.75M12 12H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Mo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H12.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H11.25V3.75C11.25 3.33579 11.5858 3 12 3Z" fill="currentColor"/>';Mo._name="plus-large";Mo=a([k("gds-icon-plus-large")],Mo);var Eo=class extends L{};Eo._regularSVG='<path d="M2.75 9.75005V19.2461H21.2461V9.75005M2.75 9.75005V4.75293H21.2422C21.247 6.41863 21.2461 8.08434 21.2461 9.75005M2.75 9.75005H21.2461M6.75 13.25H9.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Eo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 4.00293C2.33579 4.00293 2 4.33872 2 4.75293V9H21.9961V10.5H2V19.2461C2 19.6604 2.33579 19.9961 2.75 19.9961H21.2461C21.6603 19.9961 21.9961 19.6604 21.9961 19.2461L21.9961 9.05303C21.9962 7.61979 21.9964 6.18525 21.9922 4.75075C21.991 4.33739 21.6556 4.00293 21.2422 4.00293H2.75ZM6.75 12.5C6.33579 12.5 6 12.8358 6 13.25C6 13.6642 6.33579 14 6.75 14H9.75C10.1642 14 10.5 13.6642 10.5 13.25C10.5 12.8358 10.1642 12.5 9.75 12.5H6.75Z" fill="currentColor"/>';Eo._name="credit-card";Eo=a([k("gds-icon-credit-card")],Eo);var To=class extends L{};To._regularSVG='<path d="M20.7125 11.5768L22.25 7.25L15.075 3.75C14.0732 7.01444 9.92685 7.01444 8.925 3.75L1.75 7.25L3.2875 11.5768L5.75 10.45V20.25H18.25V10.45L20.7125 11.5768Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>';To._solidSVG='<path d="M9.642 3.52996C9.57767 3.32033 9.42482 3.14936 9.22368 3.06204C9.02254 2.97471 8.79327 2.97979 8.59619 3.07592L1.42119 6.57592C1.07817 6.74325 0.915507 7.1415 1.0433 7.50112L2.5808 10.8279C2.65123 11.0261 2.80164 11.1856 2.99536 11.2676C3.18908 11.3495 3.40831 11.3463 3.59957 11.2588L5.00001 10.618V20.25C5.00001 20.6642 5.33579 21 5.75001 21H18.25C18.6642 21 19 20.6642 19 20.25V10.618L20.4004 11.2588C20.5917 11.3463 20.8109 11.3495 21.0047 11.2676C21.1984 11.1856 21.3488 11.0261 21.4192 10.8279L22.9567 7.50112C23.0845 7.1415 22.9218 6.74325 22.5788 6.57592L15.4038 3.07592C15.2067 2.97979 14.9775 2.97471 14.7763 3.06204C14.5752 3.14936 14.4223 3.32033 14.358 3.52996C13.9516 4.85432 12.9502 5.44833 12 5.44833C11.0498 5.44833 10.0484 4.85432 9.642 3.52996Z" fill="currentColor"/>';To._name="fashion";To=a([k("gds-icon-fashion")],To);var Ao=class extends L{};Ao._regularSVG='<path d="M7.75 6.75H2.75V20.25H21.25V6.75H16.25M7.75 6.75V2.75H16.25V6.75M7.75 6.75H16.25" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>';Ao._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7 2.75C7 2.33579 7.33579 2 7.75 2H16.25C16.6642 2 17 2.33579 17 2.75V6H21.25C21.6642 6 22 6.33579 22 6.75V20.25C22 20.6642 21.6642 21 21.25 21H2.75C2.33579 21 2 20.6642 2 20.25V6.75C2 6.33579 2.33579 6 2.75 6H7V2.75ZM8.5 6H15.5V3.5H8.5V6Z" fill="currentColor"/>';Ao._name="suitcase-work";Ao=a([k("gds-icon-suitcase-work")],Ao);var zo=class extends L{};zo._regularSVG='<path d="M20.25 12V20.25H3.75002V12M9.50002 3.75H14.5001M9.50002 3.75L8.90899 8.77398C8.69131 10.6243 10.137 12.25 12.0001 12.25C13.8631 12.25 15.3088 10.6243 15.0911 8.77397L14.5001 3.75M9.50002 3.75H4.41668L2.97236 8.35377C2.36638 10.2853 3.8091 12.25 5.83349 12.25C7.35405 12.25 8.63391 11.1119 8.81158 9.60174L9.50002 3.75ZM14.5001 3.75H19.5833L21.0277 8.35377C21.6337 10.2853 20.1909 12.25 18.1665 12.25C16.646 12.25 15.3661 11.1119 15.1885 9.60174L14.5001 3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';zo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.70108 3.52549C3.79918 3.21279 4.08896 3 4.41669 3H19.5834C19.9111 3 20.2009 3.21279 20.299 3.52549L21.7433 8.12926C22.1626 9.4657 21.7973 10.8148 20.9585 11.7532C20.9854 11.8305 21 11.9135 21 12V20.25C21 20.6642 20.6642 21 20.25 21H3.75002C3.33581 21 3.00002 20.6642 3.00002 20.25V12C3.00002 11.9135 3.01466 11.8305 3.04158 11.7532C2.20273 10.8148 1.83749 9.4657 2.25676 8.12926L3.70108 3.52549ZM10.167 4.5L9.65386 8.86161C9.48864 10.266 10.586 11.5 12.0001 11.5C13.4097 11.5 14.5046 10.2738 14.3478 8.87488L13.8331 4.5H10.167ZM15.8379 8.70317C15.8373 8.69756 15.8366 8.69195 15.836 8.68634L15.3435 4.5H19.0326L20.3121 8.57827C20.7665 10.0267 19.6846 11.5 18.1665 11.5C17.0263 11.5 16.0666 10.6465 15.9333 9.51411L15.8379 8.70317ZM8.65662 4.5L8.06672 9.51411C7.93349 10.6465 6.97374 11.5 5.8335 11.5C4.31543 11.5 3.23356 10.0267 3.68798 8.57827L4.96744 4.5H8.65662Z" fill="currentColor"/>';zo._name="store";zo=a([k("gds-icon-store")],zo);var Oo=class extends L{};Oo._regularSVG='<path d="M3.75 3.75V9C3.75 10.7949 5.20507 12.25 7 12.25C8.79493 12.25 10.25 10.7949 10.25 9V3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/><path d="M7 12.25V20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/><path d="M17 12.5V20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/><path d="M20.5 8.00758C20.5 10.4238 18.933 12.25 17 12.25C15.067 12.25 13.5 10.4238 13.5 8.00758C13.5 5.59133 15.067 3.5 17 3.5C18.933 3.5 20.5 5.59133 20.5 8.00758Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 3.75V9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>';Oo._solidSVG='<path d="M17 2.75C15.7463 2.75 14.669 3.42888 13.9303 4.39093C13.1911 5.35359 12.75 6.64303 12.75 8.00758C12.75 10.4237 14.1789 12.5161 16.25 12.927V21H17.75V12.927C19.8211 12.5161 21.25 10.4237 21.25 8.00758C21.25 6.64303 20.8089 5.35359 20.0697 4.39093C19.331 3.42888 18.2537 2.75 17 2.75Z" fill="currentColor"/><path d="M4.5 3H3V9C3 10.9528 4.39935 12.5787 6.25 12.9298V21H7.75V12.9298C9.60065 12.5787 11 10.9528 11 9V3H9.5V9C9.5 10.3807 8.38071 11.5 7 11.5C5.61929 11.5 4.5 10.3807 4.5 9V3Z" fill="currentColor"/><path d="M7.75 3H6.25V10H7.75V3Z" fill="currentColor"/>';Oo._name="knife-spoon";Oo=a([k("gds-icon-knife-spoon")],Oo);var Lo=class extends L{};Lo._regularSVG='<path d="M12 3.75V15M12 3.75L16.5 8.25M12 3.75L7.5 8.25M20.25 12.75V20.25H3.75V12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Lo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967L17.0303 7.71967C17.3232 8.01256 17.3232 8.48744 17.0303 8.78033C16.7374 9.07322 16.2626 9.07322 15.9697 8.78033L12.75 5.56066V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V5.56066L8.03033 8.78033C7.73744 9.07322 7.26256 9.07322 6.96967 8.78033C6.67678 8.48744 6.67678 8.01256 6.96967 7.71967L11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 12C4.16421 12 4.5 12.3358 4.5 12.75V19.5H19.5V12.75C19.5 12.3358 19.8358 12 20.25 12C20.6642 12 21 12.3358 21 12.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V12.75C3 12.3358 3.33579 12 3.75 12Z" fill="currentColor"/>';Lo._name="arrow-out-of-box";Lo=a([k("gds-icon-arrow-out-of-box")],Lo);var pu=D`
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
`,uu=pu,st=class extends ve{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.inset="0"}render(){return Jo`<div part="mask"></div>
      <div part="content"><slot></slot></div>`}};st.styles=[J,uu];a([y({selector:'[part="mask"]',valueTemplate:e=>{const[t]=e.split("/");return`linear-gradient(to ${t}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`}})],st.prototype,"mask-image",2);a([y({valueTemplate:e=>e,selector:'[part="mask"]'})],st.prototype,"mask-size",2);a([y({valueTemplate:e=>e,selector:'[part="mask"]'})],st.prototype,"mask-repeat",2);a([y({valueTemplate:e=>e,selector:'[part="mask"]'})],st.prototype,"mask-position",2);a([y({selector:'[part="mask"]',valueTemplate:function(e){const[t,s]=e.split("/");return s?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-background-${t}) ${parseFloat(s)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-background-${t})`}})],st.prototype,"background-color",2);a([y({valueTemplate:e=>e,selector:'[part="mask"]'})],st.prototype,"backdrop-filter",2);st=a([k("gds-mask")],st);var fu=Object.defineProperty,mu=Object.getOwnPropertyDescriptor,vu=(e,t,s,o)=>{for(var r=o>1?void 0:o?mu(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&fu(t,s,r),r};let _d=class extends E{connectedCallback(){super.connectedCallback()}render(){return m`
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
    `}};_d=vu([O("gds-jit")],_d);const Or="-gdsvsuffix";class M1{static get instance(){var t;return(t=globalThis.__gdsElementLookupTable)!=null&&t[Or]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[Or]:new Map}),globalThis.__gdsElementLookupTable[Or]}}function bu(e){const t=e+Or;return M1.instance.set(e,t),function(s){return s.prototype.gdsElementName=e,customElements.get(t)?o=>!1:O(t)(s)}}function xu(e){return M1.instance.set(e,e),function(t){return t.prototype.gdsElementName=e,O(e)(t)}}const yu=e=>globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?xu(e):bu(e),wu="color-scheme: dark; --gds-color-l1-background-primary: #0e0e0e; --gds-color-l1-background-tertiary: #d7d7d7; --gds-color-l1-background-secondary: #131313; --gds-color-l1-content-positive: #54b561; --gds-color-l1-content-negative: #a63e2a; --gds-color-l1-content-primary: #d7d7d7; --gds-color-l1-content-secondary: #ababab; --gds-color-l1-content-tertiary: #1b1b1b; --gds-color-l2-background-primary: #242424; --gds-color-l2-background-secondary: #242424; --gds-color-l2-background-tertiary: #d7d7d7; --gds-color-l2-background-positive: #1d3f22; --gds-color-l2-background-negative: #4a1c13; --gds-color-l2-background-notice: #152c41; --gds-color-l2-background-warning: #4c3212; --gds-color-l2-background-information: #353535; --gds-color-l2-background-copper-01: #f2efeb; --gds-color-l2-background-copper-02: #332a18; --gds-color-l2-background-purple-01: #f3eff7; --gds-color-l2-background-purple-02: #372b40; --gds-color-l2-background-green-01: #ecf6ed; --gds-color-l2-background-green-02: #1d3f22; --gds-color-l2-background-blue-01: #eaf0f7; --gds-color-l2-background-blue-02: #152c41; --gds-color-l2-content-primary: #d7d7d7; --gds-color-l2-content-secondary: #ababab; --gds-color-l2-content-tertiary: #1b1b1b; --gds-color-l2-content-positive: #54b561; --gds-color-l2-content-negative: #ee8375; --gds-color-l2-content-warning: #f3b274; --gds-color-l2-content-notice: #78a3d5; --gds-color-l2-content-infomation: #d7d7d7; --gds-color-l2-content-copper-01: #1b1b1b; --gds-color-l2-content-copper-02: #ffffff; --gds-color-l2-content-purple-01: #1b1b1b; --gds-color-l2-content-purple-02: #ffffff; --gds-color-l2-content-green-01: #1b1b1b; --gds-color-l2-content-green-02: #ffffff; --gds-color-l2-content-blue-01: #1b1b1b; --gds-color-l2-content-blue-02: #ffffff; --gds-color-l2-border-primary: #353535; --gds-color-l2-border-secondary: #5e5e5e; --gds-color-l2-border-tertiary: #2c2c2c; --gds-color-l2-border-quarternary: #d7d7d7; --gds-color-l2-border-inversed: #1b1b1b; --gds-color-l3-background-primary: #d7d7d7; --gds-color-l3-background-secondary: #353535; --gds-color-l3-background-tertiary: #424242; --gds-color-l3-background-quarternary: #0e0e0e; --gds-color-l3-background-positive: #54b561; --gds-color-l3-background-positive-secondary: #25512b; --gds-color-l3-background-positive-badge: #306938; --gds-color-l3-background-negative: #c04831; --gds-color-l3-background-negative-secondary: #602418; --gds-color-l3-background-negative-badge: #4A1C13; --gds-color-l3-background-notice: #78a3d5; --gds-color-l3-background-notice-secondary: #1A3853; --gds-color-l3-background-notice-badge: #214769; --gds-color-l3-background-warning: #f3b274; --gds-color-l3-background-warning-secondary: #624017; --gds-color-l3-background-warning-badge: #744C1B; --gds-color-l3-background-information: #d7d7d7; --gds-color-l3-background-information-secondary: #424242; --gds-color-l3-background-information-badge: #616161; --gds-color-l3-background-buy: #3571a6; --gds-color-l3-background-copper-01: #e4ded5; --gds-color-l3-background-copper-02: #42361f; --gds-color-l3-background-purple-01: #e7deee; --gds-color-l3-background-purple-02: #473752; --gds-color-l3-background-green-01: #d7edd9; --gds-color-l3-background-green-02: #25512b; --gds-color-l3-background-blue-01: #d3dfef; --gds-color-l3-background-blue-02: #1a3853; --gds-color-l3-background-disabled: #181818; --gds-color-l3-background-disabled-secondary: #1b1b1b; --gds-color-l3-content-primary: #1b1b1b; --gds-color-l3-content-secondary: #ababab; --gds-color-l3-content-tertiary: #d7d7d7; --gds-color-l3-content-notice: #78a3d5; --gds-color-l3-content-warning: #f3b274; --gds-color-l3-content-information: #d7d7d7; --gds-color-l3-content-buy: #ffffff; --gds-color-l3-content-copper-01: #1b1b1b; --gds-color-l3-content-copper-02: #ffffff; --gds-color-l3-content-purple-01: #1b1b1b; --gds-color-l3-content-purple-02: #ffffff; --gds-color-l3-content-green-01: #1b1b1b; --gds-color-l3-content-green-02: #ffffff; --gds-color-l3-content-blue-01: #1b1b1b; --gds-color-l3-content-blue-02: #ffffff; --gds-color-l3-content-disabled: #5e5e5e; --gds-color-l3-content-positive: #54b561; --gds-color-l3-content-negative: #ee8375; --gds-color-l3-border-primary: #d7d7d7; --gds-color-l3-border-secondary: #ababab; --gds-color-l3-border-tertiary: #1b1b1b; --gds-color-l3-border-negative: #ee8375; --gds-color-l3-states-dark-hover: #ffffff 10%; --gds-color-l3-states-dark-pressed: #ffffff 20%; --gds-color-l3-states-light-hover: #d7d7d7 10%; --gds-color-l3-states-light-pressed: #d7d7d7 20%; --gds-color-l3-states-positive-hover: #54b561 10%; --gds-color-l3-states-positive-pressed: #54b561 20%; --gds-color-l3-states-negative-hover: #ee8375 10%; --gds-color-l3-states-negative-pressed: #ee8375 20%;{}",_u="color-scheme: light; --gds-color-l1-background-primary: #ffffff; --gds-color-l1-background-tertiary: #1b1b1b; --gds-color-l1-background-secondary: #eeeeee; --gds-color-l1-content-positive: #35723d; --gds-color-l1-content-negative: #a63e2a; --gds-color-l1-content-primary: #1b1b1b; --gds-color-l1-content-secondary: #5e5e5e; --gds-color-l1-content-tertiary: #ffffff; --gds-color-l2-background-primary: #f3f3f3; --gds-color-l2-background-secondary: #ffffff; --gds-color-l2-background-tertiary: #242424; --gds-color-l2-background-positive: #ecf6ed; --gds-color-l2-background-negative: #fcecea; --gds-color-l2-background-notice: #eaf0f7; --gds-color-l2-background-warning: #fcecbc; --gds-color-l2-background-information: #e2e2e2; --gds-color-l2-background-copper-01: #f2efeb; --gds-color-l2-background-copper-02: #332a18; --gds-color-l2-background-purple-01: #f3eff7; --gds-color-l2-background-purple-02: #372b40; --gds-color-l2-background-green-01: #ecf6ed; --gds-color-l2-background-green-02: #1d3f22; --gds-color-l2-background-blue-01: #eaf0f7; --gds-color-l2-background-blue-02: #152c41; --gds-color-l2-content-primary: #1b1b1b; --gds-color-l2-content-secondary: #5e5e5e; --gds-color-l2-content-tertiary: #ffffff; --gds-color-l2-content-positive: #35723d; --gds-color-l2-content-negative: #a63e2a; --gds-color-l2-content-warning: #65581e; --gds-color-l2-content-notice: #005fac; --gds-color-l2-content-infomation: #1b1b1b; --gds-color-l2-content-copper-01: #1b1b1b; --gds-color-l2-content-copper-02: #ffffff; --gds-color-l2-content-purple-01: #1b1b1b; --gds-color-l2-content-purple-02: #ffffff; --gds-color-l2-content-green-01: #1b1b1b; --gds-color-l2-content-green-02: #ffffff; --gds-color-l2-content-blue-01: #1b1b1b; --gds-color-l2-content-blue-02: #ffffff; --gds-color-l2-border-primary: #d7d7d7; --gds-color-l2-border-secondary: #6f6f6f; --gds-color-l2-border-tertiary: #f9f9f9; --gds-color-l2-border-quarternary: #1b1b1b; --gds-color-l2-border-inversed: #ffffff; --gds-color-l3-background-primary: #1b1b1b; --gds-color-l3-background-secondary: #e2e2e2; --gds-color-l3-background-tertiary: #d7d7d7; --gds-color-l3-background-quarternary: #ffffff; --gds-color-l3-background-positive: #35723d; --gds-color-l3-background-positive-secondary: #d7edd9; --gds-color-l3-background-positive-badge: #d7edd9; --gds-color-l3-background-negative: #a63e2a; --gds-color-l3-background-negative-secondary: #fcecea; --gds-color-l3-background-negative-badge: #f8d6d3; --gds-color-l3-background-notice: #005fac; --gds-color-l3-background-notice-secondary: #d3dfef; --gds-color-l3-background-notice-badge: #d3dfef; --gds-color-l3-background-warning: #65581e; --gds-color-l3-background-warning-secondary: #fadf7b; --gds-color-l3-background-warning-badge: #fadf7b; --gds-color-l3-background-information: #1b1b1b; --gds-color-l3-background-information-secondary: #d7d7d7; --gds-color-l3-background-information-badge: #d7d7d7; --gds-color-l3-background-buy: #2e6290; --gds-color-l3-background-copper-01: #e4ded5; --gds-color-l3-background-copper-02: #42361f; --gds-color-l3-background-purple-01: #e7deee; --gds-color-l3-background-purple-02: #473752; --gds-color-l3-background-green-01: #d7edd9; --gds-color-l3-background-green-02: #25512b; --gds-color-l3-background-blue-01: #d3dfef; --gds-color-l3-background-blue-02: #1a3853; --gds-color-l3-background-disabled: #f9f9f9; --gds-color-l3-background-disabled-secondary: #f3f3f3; --gds-color-l3-content-primary: #ffffff; --gds-color-l3-content-secondary: #5e5e5e; --gds-color-l3-content-tertiary: #1b1b1b; --gds-color-l3-content-notice: #005fac; --gds-color-l3-content-warning: #65581e; --gds-color-l3-content-information: #1b1b1b; --gds-color-l3-content-buy: #ffffff; --gds-color-l3-content-copper-01: #1b1b1b; --gds-color-l3-content-copper-02: #ffffff; --gds-color-l3-content-purple-01: #1b1b1b; --gds-color-l3-content-purple-02: #ffffff; --gds-color-l3-content-green-01: #1b1b1b; --gds-color-l3-content-green-02: #ffffff; --gds-color-l3-content-blue-01: #1b1b1b; --gds-color-l3-content-blue-02: #ffffff; --gds-color-l3-content-disabled: #ababab; --gds-color-l3-content-positive: #35723d; --gds-color-l3-content-negative: #a63e2a; --gds-color-l3-border-primary: #1b1b1b; --gds-color-l3-border-secondary: #6f6f6f; --gds-color-l3-border-tertiary: #d7d7d7; --gds-color-l3-border-negative: #a63e2a; --gds-color-l3-states-dark-hover: #ffffff 10%; --gds-color-l3-states-dark-pressed: #ffffff 20%; --gds-color-l3-states-light-hover: #1b1b1b 10%; --gds-color-l3-states-light-pressed: #1b1b1b 20%; --gds-color-l3-states-positive-hover: #35723d 10%; --gds-color-l3-states-positive-pressed: #35723d 20%; --gds-color-l3-states-negative-hover: #a63e2a 10%; --gds-color-l3-states-negative-pressed: #a63e2a 20%;{}",Cu=":host{--gds-sys-motion-duration-slowest: 1.5s;--gds-sys-motion-duration-slow: 1s;--gds-sys-motion-duration-default: .5s;--gds-sys-motion-duration-fast: .4s;--gds-sys-motion-duration-fastest: .2s;--gds-sys-motion-easing-linear: cubic-bezier(0, 0, 1, 1);--gds-sys-motion-easing-ease-out: cubic-bezier(.22, 1, .36, 1);--gds-sys-motion-easing-ease-in-out: cubic-bezier(.83, 0, .17, 1);--gds-sys-motion-easing-ease-in: cubic-bezier(.64, 0, .78, 0)}",ku=":host{--gds-ref-color-neutral-000: #ffffff;--gds-ref-color-neutral-050: #f8f8f8;--gds-ref-color-neutral-100: #e9e9e9;--gds-ref-color-neutral-150: #eeeeee;--gds-ref-color-neutral-200: #dedede;--gds-ref-color-neutral-250: #cecece;--gds-ref-color-neutral-300: #ababab;--gds-ref-color-neutral-350: #adadad;--gds-ref-color-neutral-400: #868686;--gds-ref-color-neutral-450: #757575;--gds-ref-color-neutral-500: #494949;--gds-ref-color-neutral-525: #464646;--gds-ref-color-neutral-550: #333333;--gds-ref-color-neutral-600: #2c2c2c;--gds-ref-color-neutral-650: #272727;--gds-ref-color-neutral-700: #222222;--gds-ref-color-neutral-750: #1a1a1a;--gds-ref-color-neutral-800: #121212;--gds-ref-color-neutral-1000: #000000;--gds-ref-color-blue-100: #58b8ee;--gds-ref-color-blue-200: #41b0ee;--gds-ref-color-blue-300: #00adff;--gds-ref-color-blue-400: #2c9cd9;--gds-ref-color-blue-500: #0092e1;--gds-ref-color-blue-600: #007ac7;--gds-ref-color-blue-700: #0062bc;--gds-ref-color-green-100: #75b44a;--gds-ref-color-green-200: #60cd18;--gds-ref-color-green-300: #45b400;--gds-ref-color-green-400: #308800;--gds-ref-color-red-100: #f7706d;--gds-ref-color-red-200: #ff594f;--gds-ref-color-red-300: #f03529;--gds-ref-color-red-400: #d81a1a;--gds-ref-color-red-500: #c82a29;--gds-ref-color-red-600: #bb000c;--gds-ref-color-red-700: #9f000a;--gds-ref-color-red-800: #9e2120;--gds-ref-color-purple-100: #ad91dc;--gds-ref-color-purple-200: #7e52cc;--gds-ref-color-purple-300: #673ab6;--gds-ref-color-purple-400: #4f2C99;--gds-ref-color-purple-500: #4a328f;--gds-ref-color-purple-600: #3f2587;--gds-ref-color-yellow-100: #ffe182;--gds-ref-color-yellow-200: #ffc500;--gds-ref-color-yellow-300: #ffb400;--gds-ref-color-yellow-400: #f8a000;--gds-ref-color-yellow-500: #f0be47;--gds-ref-color-yellow-600: #ebab39;--gds-ref-color-blue-5: #001127;--gds-ref-color-blue-10: #001C39;--gds-ref-color-blue-15: #00264B;--gds-ref-color-blue-20: #00315D;--gds-ref-color-blue-25: #003C70;--gds-ref-color-blue-30: #004883;--gds-ref-color-blue-35: #005397;--gds-ref-color-blue-40: #005FAC;--gds-ref-color-blue-45: #006CC1;--gds-ref-color-blue-50: #0078D7;--gds-ref-color-blue-55: #0085EC;--gds-ref-color-blue-60: #1992FF;--gds-ref-color-blue-65: #4EA0FF;--gds-ref-color-blue-70: #6FAEFF;--gds-ref-color-blue-75: #8ABBFF;--gds-ref-color-blue-80: #A4C9FF;--gds-ref-color-blue-85: #BCD6FF;--gds-ref-color-blue-90: #D4E3FF;--gds-ref-color-blue-95: #EBF1FF;--gds-ref-color-blue-98: #F8F9FF;--gds-ref-color-green-5: #001505;--gds-ref-color-green-10: #00210E;--gds-ref-color-green-15: #002D10;--gds-ref-color-green-20: #003916;--gds-ref-color-green-25: #00461D;--gds-ref-color-green-30: #005323;--gds-ref-color-green-35: #00602A;--gds-ref-color-green-40: #006D31;--gds-ref-color-green-45: #007B38;--gds-ref-color-green-50: #138942;--gds-ref-color-green-55: #29964D;--gds-ref-color-green-60: #39A459;--gds-ref-color-green-65: #48B265;--gds-ref-color-green-70: #57C071;--gds-ref-color-green-75: #65CE7E;--gds-ref-color-green-80: #73DC8A;--gds-ref-color-green-85: #81EA97;--gds-ref-color-green-90: #8FF9A4;--gds-ref-color-green-95: #C5FFCA;--gds-ref-color-green-98: #EAFFE8;--gds-ref-color-black: #000000;--gds-ref-color-white: #FFFFFF;--gds-ref-color-grey-5: #0D0D0C;--gds-ref-color-grey-10: #1B1B18;--gds-ref-color-grey-15: #282825;--gds-ref-color-grey-20: #353531;--gds-ref-color-grey-25: #42423D;--gds-ref-color-grey-30: #505049;--gds-ref-color-grey-35: #5D5D56;--gds-ref-color-grey-40: #6A6A62;--gds-ref-color-grey-45: #77776E;--gds-ref-color-grey-50: #85857A;--gds-ref-color-grey-55: #919188;--gds-ref-color-grey-60: #9D9D95;--gds-ref-color-grey-65: #A9A9A2;--gds-ref-color-grey-70: #B6B6AF;--gds-ref-color-grey-75: #C2C2BD;--gds-ref-color-grey-80: #CECECA;--gds-ref-color-grey-85: #DADAD7;--gds-ref-color-grey-90: #E7E7E4;--gds-ref-color-grey-95: #F3F3F2;--gds-ref-color-grey-98: #F9F9F9;--gds-ref-color-orange-5: #1A0F00;--gds-ref-color-orange-10: #271900;--gds-ref-color-orange-15: #352200;--gds-ref-color-orange-20: #422C00;--gds-ref-color-orange-25: #503700;--gds-ref-color-orange-30: #503700;--gds-ref-color-orange-35: #6E4C00;--gds-ref-color-orange-40: #7D5700;--gds-ref-color-orange-45: #8D6300;--gds-ref-color-orange-50: #9D6E00;--gds-ref-color-orange-55: #AE7A00;--gds-ref-color-orange-60: #BE8600;--gds-ref-color-orange-65: #CF9300;--gds-ref-color-orange-70: #E19F00;--gds-ref-color-orange-75: #F2AC00;--gds-ref-color-orange-80: #FFBA30;--gds-ref-color-orange-85: #FFCC77;--gds-ref-color-orange-90: #FFDEAB;--gds-ref-color-orange-95: #FFEED9;--gds-ref-color-orange-98: #FFF8F3;--gds-ref-color-red-5: #2B0200;--gds-ref-color-red-10: #3E0400;--gds-ref-color-red-15: #510700;--gds-ref-color-red-20: #650B00;--gds-ref-color-red-25: #790F00;--gds-ref-color-red-30: #8E1400;--gds-ref-color-red-35: #A31800;--gds-ref-color-red-40: #BA1D00;--gds-ref-color-red-45: #D02200;--gds-ref-color-red-50: #E23010;--gds-ref-color-red-55: #F53E1D;--gds-ref-color-red-60: #FF5636;--gds-ref-color-red-65: #FF7257;--gds-ref-color-red-70: #FF8A73;--gds-ref-color-red-75: #FFA08D;--gds-ref-color-red-80: #FFB4A5;--gds-ref-color-red-85: #FFC8BC;--gds-ref-color-red-90: #FFDAD3;--gds-ref-color-red-95: #FFEDE9;--gds-ref-color-red-98: #FFF8F6}",$u=":host{--gds-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, .1), 0px 0px 1px 0px rgba(0, 0, 0, .1);--gds-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, .1), 0px 1px 2px 0px rgba(0, 0, 0, .06);--gds-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, .1), 0px 2px 4px -2px rgba(0, 0, 0, .06);--gds-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, .08), 0px 4px 6px -2px rgba(0, 0, 0, .03);--gds-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, .08), 0px 8px 8px -4px rgba(0, 0, 0, .03)}",Su=":host{--gds-space-max: 999px;--gds-space-8xl: 120px;--gds-space-7xl: 112px;--gds-space-6xl: 96px;--gds-space-5xl: 80px;--gds-space-4xl: 64px;--gds-space-3xl: 48px;--gds-space-2xl: 40px;--gds-space-xl: 32px;--gds-space-l: 24px;--gds-space-m: 16px;--gds-space-s: 12px;--gds-space-xs: 8px;--gds-space-2xs: 4px;--gds-space-3xs: 2px;--gds-space-4xs: 1px;--gds-space-0: 0px}",Mu=":host{--gds-text-weight-bold: 700;--gds-text-weight-medium: 500;--gds-text-weight-book: 450;--gds-text-weight-regular: 400;--gds-text-weight-light: 300;--gds-text-size-preamble-xs: 16px;--gds-text-size-preamble-s: 18px;--gds-text-size-preamble-m: 20px;--gds-text-size-preamble-l: 24px;--gds-text-size-preamble-xl: 28px;--gds-text-size-preamble-2xl: 32px;--gds-text-size-display-s: 32px;--gds-text-size-display-m: 36px;--gds-text-size-display-l: 48px;--gds-text-size-display-xl: 64px;--gds-text-size-display-2xl: 82px;--gds-text-size-body-s: 14px;--gds-text-size-body-m: 16px;--gds-text-size-body-l: 20px;--gds-text-size-detail-xs: 12px;--gds-text-size-detail-s: 14px;--gds-text-size-detail-m: 16px;--gds-text-size-heading-2xl: 14px;--gds-text-size-heading-xs: 16px;--gds-text-size-heading-s: 20px;--gds-text-size-heading-m: 24px;--gds-text-size-heading-l: 28px;--gds-text-size-heading-xl: 32px;--gds-text-line-height-preamble-xs: 24px;--gds-text-line-height-preamble-s: 26px;--gds-text-line-height-preamble-m: 28px;--gds-text-line-height-preamble-l: 32px;--gds-text-line-height-preamble-xl: 36px;--gds-text-line-height-preamble-2xl: 40px;--gds-text-line-height-display-s: 40px;--gds-text-line-height-display-m: 44px;--gds-text-line-height-display-l: 56px;--gds-text-line-height-display-xl: 72px;--gds-text-line-height-display-2xl: 90px;--gds-text-line-height-body-s: 20px;--gds-text-line-height-body-m: 24px;--gds-text-line-height-body-l: 26px;--gds-text-line-height-detail-xs: 16px;--gds-text-line-height-detail-s: 18px;--gds-text-line-height-detail-m: 20px;--gds-text-line-height-heading-2xs: 20px;--gds-text-line-height-heading-xs: 24px;--gds-text-line-height-heading-s: 28px;--gds-text-line-height-heading-m: 32px;--gds-text-line-height-heading-l: 40px;--gds-text-line-height-heading-xl: 44px}",Eu=":host{--gds-vp-3xl: 3840px;--gds-vp-2xl: 2560px;--gds-vp-xl: 1440px;--gds-vp-l: 1024px;--gds-vp-m: 768px;--gds-vp-s: 430px;--gds-vp-xs: 375px}";function Tu(){try{return new CSSStyleSheet,!0}catch{return!1}}var mn,qo,Ko,vn,_s,E1,T1;const Cl=class Cl{constructor(){Qt(this,_s);Qt(this,mn,!Tu());Qt(this,qo,new Map);Qt(this,Ko,new Map);Qt(this,vn,document.adoptedStyleSheets||[])}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new Cl),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(t,s){if($t(this,mn)){const o=Array.isArray(s)?s.map(r=>r.toString()).join(""):s.toString();Tn(this,_s,E1).call(this,t,o)}else s.styleSheet&&Tn(this,_s,T1).call(this,t,s.styleSheet)}};mn=new WeakMap,qo=new WeakMap,Ko=new WeakMap,vn=new WeakMap,_s=new WeakSet,E1=function(t,s){let o=$t(this,Ko).get(t);o||(o=document.createElement("style"),$t(this,Ko).set(t,o)),o.textContent=s,document.head.appendChild(o)},T1=function(t,s){$t(this,qo).set(t,s),document.adoptedStyleSheets=[...$t(this,vn),...Array.from($t(this,qo).values())]};let an=Cl;const Au=[G(ku),G(Su),G(Eu),G(Mu),G(Cu),G($u)];an.instance.injectGlobalStyles("root-tokens",D`
    :root,
    :root[gds-theme='light'] {
      ${G(_u)}
    }
    :root[gds-theme='dark'] {
      ${G(wu)}
    }
  `);const zu=":host{--gds-ripple-motion-name: ripple;--gds-ripple-motion: var(--gds-ripple-motion-name) 1.2s cubic-bezier(.46, .03, .52, .96) 0s 1 normal none running;border-radius:var(--gds-space-max);contain:strict;display:flex;height:100%;top:0;right:0;bottom:0;left:0;overflow:hidden;position:absolute;width:100%}div{background-color:currentColor;border-radius:var(--gds-space-max);display:flex;height:20px;left:var(--gds-ripple-left, 50%);margin-left:-10px;margin-top:-10px;opacity:0;pointer-events:none;position:absolute;top:var(--gds-ripple-top, 50%);width:20px;will-change:transform}div.gds-ripple-effect{animation:var(--gds-ripple-motion)}@keyframes ripple{0%{opacity:.5;transform:scale(0)}to{opacity:0;transform:scale(calc(3 * var(--mt-ripple-spread, 4)))}}@media (prefers-reduced-motion: reduce){:host{--gds-ripple-motion-name: none !important}}";var Ou=Object.defineProperty,Lu=Object.getOwnPropertyDescriptor,A1=(e,t,s,o)=>{for(var r=o>1?void 0:o?Lu(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&Ou(t,s,r),r};let ln=class extends E{constructor(){super(...arguments),this.onmousedown=e=>{const s=e.target.getBoundingClientRect(),o=this._rippleEl;o&&(o.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-s.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-s.left}px`),setTimeout(()=>{o.classList.add("gds-ripple-effect")},20))}}render(){return ge`<div></div>`}};ln.styles=[Au,G(zu)];A1([te("div")],ln.prototype,"_rippleEl",2);ln=A1([yu("gds-ripple")],ln);var Do=class extends L{};Do._regularSVG='<path d="M3.75 9L3.27507 8.41953C3.10097 8.56198 3 8.77505 3 9H3.75ZM20.25 9H21C21 8.77505 20.899 8.56198 20.7249 8.41953L20.25 9ZM20.25 20.25V21C20.6642 21 21 20.6642 21 20.25H20.25ZM3.75 20.25H3C3 20.6642 3.33579 21 3.75 21V20.25ZM12 2.25L12.4749 1.66953C12.1987 1.44349 11.8013 1.44349 11.5251 1.66953L12 2.25ZM9.75 14.75V14C9.33579 14 9 14.3358 9 14.75H9.75ZM14.25 14.75H15C15 14.3358 14.6642 14 14.25 14V14.75ZM14.25 20.25H13.5C13.5 20.6642 13.8358 21 14.25 21V20.25ZM9.75 20.25V21C10.1642 21 10.5 20.6642 10.5 20.25H9.75ZM19.5 9V20.25H21V9H19.5ZM4.5 20.25V9H3V20.25H4.5ZM4.22493 9.58047L12.4749 2.83047L11.5251 1.66953L3.27507 8.41953L4.22493 9.58047ZM11.5251 2.83047L19.7751 9.58047L20.7249 8.41953L12.4749 1.66953L11.5251 2.83047ZM9.75 15.5H14.25V14H9.75V15.5ZM13.5 14.75V20.25H15V14.75H13.5ZM10.5 20.25V14.75H9V20.25H10.5ZM9.75 19.5H3.75V21H9.75V19.5ZM14.25 21H20.25V19.5H14.25V21Z" fill="currentColor"/>';Do._solidSVG='<path d="M12.4749 1.66953C12.1987 1.44349 11.8013 1.44349 11.5251 1.66953L3.27507 8.41953C3.10097 8.56198 3 8.77505 3 9V20.25C3 20.6642 3.33579 21 3.75 21H9.25C9.66421 21 10 20.6642 10 20.25V15H14V20.25C14 20.6642 14.3358 21 14.75 21H20.25C20.6642 21 21 20.6642 21 20.25V9C21 8.77505 20.899 8.56198 20.7249 8.41953L12.4749 1.66953Z" fill="currentColor"/>';Do._name="home-open";Do=a([k("gds-icon-home-open")],Do);var Vo=class extends L{};Vo._regularSVG='<path d="M4.75 20.25V3.75H19.25V20.25M4.75 20.25H19.25M4.75 20.25H2.75M19.25 20.25H21.25M8.75 7.75H10.25M13.75 7.75H15.25M8.75 11.75H10.25M13.75 11.75H15.25M8.75 15.75H10.25M13.75 15.75H15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Vo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4 3.75C4 3.33579 4.33579 3 4.75 3H19.25C19.6642 3 20 3.33579 20 3.75V19.5H21.25C21.6642 19.5 22 19.8358 22 20.25C22 20.6642 21.6642 21 21.25 21H2.75C2.33579 21 2 20.6642 2 20.25C2 19.8358 2.33579 19.5 2.75 19.5H4V3.75ZM8 7.75C8 7.33579 8.33579 7 8.75 7H10.25C10.6642 7 11 7.33579 11 7.75C11 8.16421 10.6642 8.5 10.25 8.5H8.75C8.33579 8.5 8 8.16421 8 7.75ZM13 7.75C13 7.33579 13.3358 7 13.75 7H15.25C15.6642 7 16 7.33579 16 7.75C16 8.16421 15.6642 8.5 15.25 8.5H13.75C13.3358 8.5 13 8.16421 13 7.75ZM8 11.75C8 11.3358 8.33579 11 8.75 11H10.25C10.6642 11 11 11.3358 11 11.75C11 12.1642 10.6642 12.5 10.25 12.5H8.75C8.33579 12.5 8 12.1642 8 11.75ZM13 11.75C13 11.3358 13.3358 11 13.75 11H15.25C15.6642 11 16 11.3358 16 11.75C16 12.1642 15.6642 12.5 15.25 12.5H13.75C13.3358 12.5 13 12.1642 13 11.75ZM8 15.75C8 15.3358 8.33579 15 8.75 15H10.25C10.6642 15 11 15.3358 11 15.75C11 16.1642 10.6642 16.5 10.25 16.5H8.75C8.33579 16.5 8 16.1642 8 15.75ZM13 15.75C13 15.3358 13.3358 15 13.75 15H15.25C15.6642 15 16 15.3358 16 15.75C16 16.1642 15.6642 16.5 15.25 16.5H13.75C13.3358 16.5 13 16.1642 13 15.75Z" fill="currentColor"/>';Vo._name="block";Vo=a([k("gds-icon-block")],Vo);var Po=class extends L{};Po._regularSVG='<path d="M22.25 9.75H23.25M15.25 2.75V1.75M20.1997 4.80025L20.9069 4.09315M9.59375 4.09315L10.3009 4.80026M18.5495 12.0119C18.9914 11.3686 19.25 10.5895 19.25 9.75C19.25 7.54086 17.4591 5.75 15.25 5.75C13.2972 5.75 11.6713 7.14935 11.3202 9M16.625 11.95C15.867 11.95 15.1517 12.1333 14.5203 12.4583C13.872 11.0435 12.7092 9.91622 11.273 9.31871C10.547 9.01667 9.7512 8.85 8.91667 8.85C5.51091 8.85 2.75 11.6258 2.75 15.05C2.75 18.4742 5.51091 21.25 8.91667 21.25H16.625C19.1793 21.25 21.25 19.1681 21.25 16.6C21.25 14.6435 20.0481 12.9692 18.3462 12.2827C17.8142 12.0681 17.2333 11.95 16.625 11.95Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>';Po._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4903 8.28083C9.98427 8.16249 9.45738 8.1 8.91667 8.1C5.09289 8.1 2 11.2154 2 15.05C2 18.8846 5.09289 22 8.91667 22H16.625C19.5973 22 22 19.5785 22 16.6C22 14.6634 20.985 12.9643 19.4597 12.0113C19.7703 11.3676 19.9444 10.6453 19.9444 9.88333C19.9444 7.19016 17.7719 5 15.0833 5C12.9547 5 11.1501 6.37275 10.4903 8.28083ZM11.9046 8.78036C13.1377 9.3746 14.167 10.3245 14.8624 11.4973C15.4151 11.3046 16.0084 11.2 16.625 11.2C17.1313 11.2 17.622 11.2705 18.0876 11.4025C18.3159 10.9462 18.4444 10.4306 18.4444 9.88333C18.4444 8.01095 16.9358 6.5 15.0833 6.5C13.6134 6.5 12.3594 7.45154 11.9046 8.78036Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 1V3.5H14.5V1H16ZM21.9675 4.09315L20.1997 5.86091L19.1391 4.80025L20.9069 3.03249L21.9675 4.09315ZM9.59375 3.03249L11.3615 4.80026L10.3009 5.86092L8.53309 4.09315L9.59375 3.03249ZM21.5 9H24V10.5H21.5V9Z" fill="currentColor"/>';Po._name="cloudy-sun";Po=a([k("gds-icon-cloudy-sun")],Po);var Du=Object.defineProperty,Vu=Object.getOwnPropertyDescriptor,or=(e,t,s,o)=>{for(var r=o>1?void 0:o?Vu(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&Du(t,s,r),r};let Gt=class extends E{constructor(){super(),this.value=50,this.min=0,this.max=100,this.step=1,this._onMouseMoveBound=this._onMouseMove.bind(this),this._onTouchMoveBound=this._onTouchMove.bind(this),this._onMouseUpBound=this._onMouseUp.bind(this)}render(){const t=Math.max(0,Math.max(0,this.value-this.min)/(this.max-this.min)),s=Math.max(0,1-t),o=16;return m`
      <div
        class="slider"
        style="grid-template-columns: calc(${t*100}% - var(--gds-space-2xs) - calc(${o}px / 2)) ${o}px calc(${s*100}% - var(--gds-space-2xs) - calc(${o}px / 2))"
        @mousedown=${this._onMouseDown}
        @touchstart=${this._onTouchStart}
      >
        <!-- Left Track -->
        <div class="track track-left"></div>

        <!-- Thumb -->
        <div class="thumb"></div>

        <!-- Right Track -->
        <div class="track track-right"></div>
      </div>
    `}_onMouseDown(t){this._startDragging(t),t.preventDefault()}_onTouchStart(t){this._startDragging(t.touches[0]),t.preventDefault()}_startDragging(t){window.addEventListener("mousemove",this._onMouseMoveBound),window.addEventListener("mouseup",this._onMouseUpBound),window.addEventListener("touchmove",this._onTouchMoveBound),window.addEventListener("touchend",this._onMouseUpBound),this._updateValue(t)}_onMouseMove(t){this._updateValue(t)}_onTouchMove(t){this._updateValue(t.touches[0])}_onMouseUp(){window.removeEventListener("mousemove",this._onMouseMoveBound),window.removeEventListener("mouseup",this._onMouseUpBound),window.removeEventListener("touchmove",this._onTouchMoveBound),window.removeEventListener("touchend",this._onMouseUpBound)}_updateValue(t){var d;const s=(d=this.shadowRoot)==null?void 0:d.querySelector(".slider");if(!s)return;const o=s.getBoundingClientRect(),n=(t.clientX-o.left)/o.width*100,i=this.max-this.min;let l=this.min+n/100*i;l=Math.round(l/this.step)*this.step,l=Math.min(this.max,Math.max(this.min,l)),l!==this.value&&(this.value=l,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}})))}};Gt.styles=D`
    .slider {
      width: 100%;
      cursor: pointer;
      display: grid;
      gap: var(--gds-space-2xs);
      align-items: center;

      transition: grid-template-columns 0.1s;
    }
    .track {
      height: 4px;
      border-radius: var(--gds-space-max);
    }
    .track-left {
      left: 0;
      background-color: var(--gds-color-l3-background-positive);
    }
    .track-right {
      background-color: var(--gds-color-l3-background-secondary);
    }
    .thumb {
      --thumb-size: 16px;
      width: var(--thumb-size);
      height: var(--thumb-size);
      background-color: var(--gds-color-l3-background-positive);
      border-radius: 50%;
    }
  `;or([g({type:Number})],Gt.prototype,"value",2);or([g({type:Number})],Gt.prototype,"min",2);or([g({type:Number})],Gt.prototype,"max",2);or([g({type:Number})],Gt.prototype,"step",2);Gt=or([O("tp-slider")],Gt);var Pu=Object.defineProperty,Hu=Object.getOwnPropertyDescriptor,Kt=(e,t,s,o)=>{for(var r=o>1?void 0:o?Hu(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&Pu(t,s,r),r};let vt=class extends E{constructor(){super(),this.heading="",this.step=1,this.min=0,this.max=100,this.value=Math.max(this.min,this.max/2)}render(){return m`<gds-flex flex-direction="column" gap="xs"
      ><gds-flex flex-direction="column" gap="2xs">
        <gds-text font-size="heading-xs">${this.heading}</gds-text>
        <gds-text font-size="heading-s"
          >${this.formatter?this.formatter.format(this.value):this.value}</gds-text
        >
      </gds-flex>
      <tp-slider
        .min=${this.min}
        .max=${this.max}
        .value=${this.value}
        .step=${this.step}
        @change=${e=>{this.value=e.detail.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))}}
      ></tp-slider
    ></gds-flex>`}};Kt([g({type:String})],vt.prototype,"heading",2);Kt([g({type:Number})],vt.prototype,"step",2);Kt([g({type:Number})],vt.prototype,"min",2);Kt([g({type:Number})],vt.prototype,"max",2);Kt([g({type:Number})],vt.prototype,"value",2);Kt([g({type:Object})],vt.prototype,"formatter",2);vt=Kt([O("tp-slider-input")],vt);var Fu=Object.defineProperty,ju=Object.getOwnPropertyDescriptor,ot=(e,t,s,o)=>{for(var r=o>1?void 0:o?ju(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&Fu(t,s,r),r};let bs=class extends E{constructor(){super(...arguments),this.amount=175e3,this.year=5,this.rate=6.95,this.tab="house",this.currencyFormatter=new Intl.NumberFormat("sv-SE",{style:"currency",currency:"SEK",maximumFractionDigits:0}),this.percentageFormatter=new Intl.NumberFormat("sv-SE",{style:"percent",maximumFractionDigits:2})}render(){const e=Wu(this.amount,this.year,this.rate),t=this.currencyFormatter.format(e),s=this.currencyFormatter.format(e+135);return m`<gds-card>
      <gds-flex flex-direction="column" gap="l" padding="l">
        <gds-grid columns="1; xs{3}">
          <tp-calculator-icon-button
            @click=${()=>{this.tab="house"}}
            .selected=${this.tab==="house"}
            label="Villa"
            icon="house"
          ></tp-calculator-icon-button>
          <tp-calculator-icon-button
            @click=${()=>{this.tab="apartment"}}
            .selected=${this.tab==="apartment"}
            label="Lägenhet"
            icon="apartment"
          ></tp-calculator-icon-button>
          <tp-calculator-icon-button
            @click=${()=>{this.tab="vacation"}}
            .selected=${this.tab==="vacation"}
            label="Fritidshus"
            icon="vacation"
          ></tp-calculator-icon-button>
        </gds-grid>

        <tp-slider-input
          heading="Jag vill låna"
          .max=${35e4}
          .value=${this.amount}
          .step=${1e3}
          .formatter=${this.currencyFormatter}
          @change=${o=>{this.amount=o.detail.value}}
        ></tp-slider-input>

        <tp-slider-input
          heading="Återbetalningstid"
          .min=${1}
          .max=${10}
          .value=${this.year}
          .step=${1}
          .formatter=${{format:o=>`${o} år`}}
          @change=${o=>{this.year=o.detail.value}}
        ></tp-slider-input>

        <tp-slider-input
          heading="Exempelränta"
          .min=${5}
          .max=${20}
          .value=${this.rate}
          .step=${.1}
          .formatter=${{format:o=>this.percentageFormatter.format(o/100)}}
          @change=${o=>{this.rate=o.detail.value}}
        ></tp-slider-input>

        <gds-flex flex-direction="column" gap="xs">
          <gds-text
            margin="0 auto 0 auto"
            font-size="heading-l"
            width="fit-content"
            >${t}/mån</gds-text
          >
          <gds-text
            level="2"
            margin="0 auto 0 auto"
            font-size="preamble-m"
            width="fit-content"
            >med låneskydd ${s}/mån</gds-text
          >
        </gds-flex>

        <gds-button href="#"
          ><gds-text font-size="detail-m">Ansök om bolån</gds-text></gds-button
        >
      </gds-flex>
    </gds-card>`}};ot([P()],bs.prototype,"amount",2);ot([P()],bs.prototype,"year",2);ot([P()],bs.prototype,"rate",2);ot([P()],bs.prototype,"tab",2);bs=ot([O("tp-loan-calculator")],bs);function Wu(e,t,s){const o=s/12/100,r=t*12;return e*o*Math.pow(1+o,r)/(Math.pow(1+o,r)-1)}let xs=class extends E{constructor(){super(...arguments),this.label="",this.icon="house",this.selected=!1}render(){return m`<button
      @click=${()=>{this.dispatchEvent(new CustomEvent("click"))}}
      aria-selected="${this.selected}"
      type="button"
      rank="tertiary"
      size="large"
      padding="m"
    >
      <gds-card
        clas="card"
        variant="${this.selected?"primary":"secondary"}"
        level="3"
      >
        <gds-flex
          flex-direction="column"
          justify-content="center"
          align-items="center"
          gap="2xs"
          width="100%"
        >
          ${this.icon==="house"?m` <gds-icon-home-open
                height="24"
                width="24"
              ></gds-icon-home-open>`:void 0}
          ${this.icon==="apartment"?m` <gds-icon-block height="24" width="24"></gds-icon-block>`:void 0}
          ${this.icon==="vacation"?m` <gds-icon-cloudy-sun
                height="24"
                width="24"
              ></gds-icon-cloudy-sun>`:void 0}
          <gds-text font-size="detail-s">${this.label}</gds-text>
        </gds-flex>
      </gds-card>
      <gds-ripple class="fix"></gds-ripple>
    </button>`}};xs.styles=D`
    button {
      border: none;
      cursor: pointer;

      border-radius: var(--gds-space-s);
      overflow: hidden;

      position: relative;

      padding: 0;
      width: 100%;
    }
    .fix {
      border-radius: 0;
    }
  `;ot([g({type:String})],xs.prototype,"label",2);ot([g({type:String})],xs.prototype,"icon",2);ot([g({type:Boolean})],xs.prototype,"selected",2);xs=ot([O("tp-calculator-icon-button")],xs);var Ru=Object.defineProperty,Bu=Object.getOwnPropertyDescriptor,z1=e=>{throw TypeError(e)},O1=(e,t,s,o)=>{for(var r=o>1?void 0:o?Bu(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&Ru(t,s,r),r},Iu=(e,t,s)=>t.has(e)||z1("Cannot "+s),Cd=(e,t,s)=>(Iu(e,t,"read from private field"),s?s.call(e):t.get(e)),kd=(e,t,s)=>t.has(e)?z1("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),ya,wa;let dn=class extends E{constructor(){super(...arguments),this.value="",kd(this,ya,e=>{const t=e.target;this.value=t.value}),kd(this,wa,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){return ge`
      <div>
        <input
          @input=${Cd(this,ya)}
          @change=${Cd(this,wa)}
          style="width: ${this.value.length}ch;"
          type="text"
          .value=${this.value}
        />
      </div>
    `}};ya=new WeakMap;wa=new WeakMap;dn.styles=D`
    div {
      width: fit-content;
    }
    input {
      min-width: 20px;
      background-color: var(--gds-color-l1-background-primary);
      color: var(--gds-color-l1-content-primary);
      border-radius: var(--gds-space-max);
      border: none;

      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      text-align: center;

      padding: var(--gds-space-xs) var(--gds-space-s);
      margin: 0;
    }
  `;O1([g({type:String})],dn.prototype,"value",2);dn=O1([O("tp-pill-input")],dn);var Nu=Object.defineProperty,Gu=Object.getOwnPropertyDescriptor,Ms=(e,t,s,o)=>{for(var r=o>1?void 0:o?Gu(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&Nu(t,s,r),r};let cn=class extends E{constructor(){super(...arguments),this.heading="",this.detail=""}render(){return m`<gds-flex flex-direction="column" gap="l">
      <gds-flex justify-content="center" gap="4xl; s{8xl}" width="100%">
        <tp-rate-card heading="1.85%" detail="3 mån"></tp-rate-card>
        <tp-rate-card heading="1.65%" detail="6 mån"></tp-rate-card> </gds-flex
      ><gds-flex justify-content="center" gap="4xl; s{8xl}" width="100%">
        <tp-rate-card heading="1.55%" detail="1 år"></tp-rate-card>
        <tp-rate-card heading="1.45%" detail="5 år"></tp-rate-card>
      </gds-flex>

      <gds-container margin="0 auto 0 auto" width="auto">
        <gds-button href="#" rank="secondary" size="large">
          <gds-text font-size="detail-m">All the rates</gds-text>
        </gds-button>
      </gds-container>
    </gds-flex>`}};Ms([g({type:String})],cn.prototype,"heading",2);Ms([g({type:String})],cn.prototype,"detail",2);cn=Ms([O("tp-rates")],cn);let gn=class extends E{constructor(){super(...arguments),this.heading="",this.detail=""}render(){return m`<gds-flex
      flex-direction="column"
      justify-content="center"
      align-items="center"
      gap="xs"
    >
      <gds-card padding="xs m xs m" margin="0" width="auto" border-radius="max">
        <gds-text font-size="heading-m">${this.heading}</gds-text>
      </gds-card>
      <gds-text ,argin font-size="detail-s">${this.detail}</gds-text>
    </gds-flex>`}};Ms([g({type:String})],gn.prototype,"heading",2);Ms([g({type:String})],gn.prototype,"detail",2);gn=Ms([O("tp-rate-card")],gn);var Ho=class extends L{};Ho._regularSVG='<path d="M19.7181 14.5359C20.0626 13.7609 20.254 12.9028 20.254 12C20.254 8.54822 17.4558 5.75 14.004 5.75H10.004C9.93732 5.75 9.87088 5.75104 9.8047 5.75312C8.32457 3.97909 6.38818 3.75 5.75 3.75V7.4211C5.06066 8.06182 4.51621 8.85631 4.17124 9.75H1.75V14.25H4.17124C4.51621 15.1437 5.06066 15.9382 5.75 16.5789V20.25H10.25V18.25H13.75V20.25H18.25V16.5863C18.8686 16.0134 19.371 15.3168 19.7181 14.5359ZM19.7181 14.5359C20.085 14.9725 20.6351 15.25 21.25 15.25C22.3546 15.25 23.25 14.3546 23.25 13.25C23.25 12.777 23.0858 12.3424 22.8113 12M8 10.75H8.5M8.75 10.75C8.75 11.0261 8.52614 11.25 8.25 11.25C7.97386 11.25 7.75 11.0261 7.75 10.75C7.75 10.4739 7.97386 10.25 8.25 10.25C8.52614 10.25 8.75 10.4739 8.75 10.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Ho._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.75C5 3.33579 5.33579 3 5.75 3C6.47743 3 8.50198 3.24069 10.1403 5H14.004C17.87 5 21.004 8.13401 21.004 12C21.004 12.8135 20.8649 13.5957 20.6089 14.3235C20.7965 14.4358 21.0156 14.5 21.25 14.5C21.9404 14.5 22.5 13.9404 22.5 13.25C22.5 12.9537 22.3978 12.6832 22.2262 12.4691C21.9671 12.1459 22.0191 11.6739 22.3422 11.4148C22.6654 11.1557 23.1374 11.2077 23.3965 11.5309C23.7738 12.0016 24 12.6004 24 13.25C24 14.7688 22.7688 16 21.25 16C20.7839 16 20.3448 15.8838 19.9602 15.6792C19.6857 16.1227 19.3632 16.533 19 16.9031V20.25C19 20.6642 18.6642 21 18.25 21H13.75C13.3358 21 13 20.6642 13 20.25V19H11V20.25C11 20.6642 10.6642 21 10.25 21H5.75C5.33579 21 5 20.6642 5 20.25V16.8949C4.46134 16.3443 4.01257 15.7048 3.67782 15H1.75C1.33579 15 1 14.6642 1 14.25V9.75C1 9.33579 1.33579 9 1.75 9H3.67782C4.01257 8.29522 4.46134 7.65571 5 7.1051V3.75ZM8.25 12C8.94036 12 9.5 11.4404 9.5 10.75C9.5 10.0596 8.94036 9.5 8.25 9.5C7.55964 9.5 7 10.0596 7 10.75C7 11.4404 7.55964 12 8.25 12Z" fill="currentColor"/>';Ho._name="piggy-bank";Ho=a([k("gds-icon-piggy-bank")],Ho);var Fo=class extends L{};Fo._regularSVG='<path d="M21 18C21 18 19.666 19.5444 18.166 19.5444C16.666 19.5444 15.4594 18.115 13.9866 18.115C12.5138 18.115 11.6598 18.786 10.75 19.75M17 2.75L20.25 6L6 20.25H2.75V17L17 2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Fo._solidSVG='<path d="M16.4697 2.21967C16.7626 1.92678 17.2374 1.92678 17.5303 2.21967L20.7803 5.46967C21.0732 5.76256 21.0732 6.23744 20.7803 6.53033L6.53033 20.7803C6.38968 20.921 6.19891 21 6 21H2.75C2.33579 21 2 20.6642 2 20.25V17C2 16.8011 2.07902 16.6103 2.21967 16.4697L16.4697 2.21967Z" fill="currentColor"/><path d="M21.4903 17.4324C21.1769 17.1618 20.7035 17.1963 20.4327 17.5095L20.4261 17.5168C20.4192 17.5246 20.4075 17.5374 20.3914 17.5547C20.3592 17.5892 20.3095 17.641 20.2446 17.7043C20.1139 17.8317 19.9261 18.0013 19.699 18.1696C19.2229 18.5224 18.675 18.7944 18.166 18.7944C17.6346 18.7944 17.124 18.5421 16.4177 18.1672L16.3494 18.131C15.7225 17.7975 14.9093 17.365 13.9866 17.365C12.2062 17.365 11.1671 18.2154 10.2046 19.2352C9.92027 19.5364 9.93398 20.0111 10.2352 20.2954C10.5364 20.5797 11.0111 20.566 11.2954 20.2648C12.1526 19.3567 12.8215 18.865 13.9866 18.865C14.5028 18.865 15.0037 19.1149 15.7145 19.4922L15.7677 19.5205C16.4011 19.8571 17.2241 20.2944 18.166 20.2944C19.1571 20.2944 20.0262 19.7942 20.5921 19.3748C20.886 19.157 21.1254 18.9405 21.2917 18.7783C21.3753 18.6968 21.4415 18.628 21.4881 18.578C21.5114 18.5531 21.5299 18.5328 21.5432 18.5179L21.5593 18.4997L21.5645 18.4939L21.5663 18.4918L21.5676 18.4903C21.5676 18.4903 21.5676 18.4903 21 18L21.5676 18.4903C21.8383 18.1768 21.8037 17.7032 21.4903 17.4324Z" fill="currentColor"/>';Fo._name="pencil-wave";Fo=a([k("gds-icon-pencil-wave")],Fo);var jo=class extends L{};jo._regularSVG='<path d="M19.25 9.25V17.25M15.25 17.25V9.25M4.75 9.25V17.25M8.75 17.25V9.25M2.75 7.17308L12 2.5L21.25 7.17308V9.25H2.75V7.17308ZM2.75 20.25H21.25L20.25 17.25H3.75L2.75 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>';jo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3382 1.83058C12.1255 1.72314 11.8745 1.72314 11.6618 1.83058L2.41181 6.50365C2.15926 6.63125 2.00001 6.89012 2.00001 7.17308V9.25C2.00001 9.66421 2.33579 10 2.75001 10H4.00001V16.5H3.75001C3.42718 16.5 3.14058 16.7066 3.03849 17.0128L2.03849 20.0128C1.96226 20.2415 2.00061 20.493 2.14157 20.6885C2.28254 20.8841 2.50892 21 2.75001 21H21.25C21.4911 21 21.7175 20.8841 21.8584 20.6885C21.9994 20.493 22.0378 20.2415 21.9615 20.0128L20.9615 17.0128C20.8594 16.7066 20.5728 16.5 20.25 16.5H20V10H21.25C21.6642 10 22 9.66421 22 9.25V7.17308C22 6.89012 21.8408 6.63125 21.5882 6.50365L12.3382 1.83058ZM16 10H18.5V16.5H16V10ZM8.00001 16.5H5.50001V10H8.00001V16.5ZM9.50001 16.5V10H14.5V16.5H9.50001Z" fill="currentColor"/>';jo._name="bank";jo=a([k("gds-icon-bank")],jo);var Zu=Object.defineProperty,Uu=Object.getOwnPropertyDescriptor,rr=(e,t,s,o)=>{for(var r=o>1?void 0:o?Uu(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&Zu(t,s,r),r};let Zt=class extends E{render(){return m`
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
    `}};Zt.styles=D`
    :host {
      display: contents;
    }
    @supports ((animation-timeline: scroll()) and (animation-range: 0% 100%)) {
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

        @media (max-width: 768px) {
          animation-range:
            entry 0% entry 60vw,
            exit -10vw exit 100vw;
        }
      }

      @keyframes tp-scale {
        0% {
          scale: 0.8;
          opacity: 0.4;
        }
      }
    }
    @media (max-width: 768px) {
      .step:first-child {
        margin-left: 10vw;
      }
      .step:last-child {
        margin-right: 10vw;
      }
    }
  `;rr([g({type:String})],Zt.prototype,"name",2);rr([g({type:String})],Zt.prototype,"title",2);rr([g({type:String})],Zt.prototype,"description",2);rr([g({type:String})],Zt.prototype,"label",2);Zt=rr([O("tp-step")],Zt);var Yu=Object.defineProperty,qu=Object.getOwnPropertyDescriptor,L1=(e,t,s,o)=>{for(var r=o>1?void 0:o?qu(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&Yu(t,s,r),r};let _a=class extends E{constructor(){super(...arguments),this.active=!1}render(){return m`
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
    `}};L1([g({type:Boolean})],_a.prototype,"active",2);_a=L1([O("tp-step-bullet")],_a);const Ku=""+new URL("child-BrY-C-gt.png",import.meta.url).href,Xu=""+new URL("solarpanels-DB6hMlzS.png",import.meta.url).href,Ju=""+new URL("woman-QYshS-x3.png",import.meta.url).href;var Qu=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,wt=(e,t,s,o)=>{for(var r=o>1?void 0:o?e0(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&Qu(t,s,r),r};let Wo=class extends E{constructor(){super(...arguments),this.activeStep="s1"}firstUpdated(){this.addEventListeners();const e=this.cardsContainer.querySelectorAll("tp-content-card"),t=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&(e.forEach(r=>r.classList.remove("active")),o.target.classList.add("active"),this.activeStep=o.target.getAttribute("name")||"s1")})},{root:this.cardsContainer,threshold:.6});this.cardsContainer.querySelectorAll("tp-content-card").forEach(s=>t.observe(s)),this.style.setProperty("--cards",e.length.toString())}addEventListeners(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("tp-step-bullet");e==null||e.forEach(s=>{s.addEventListener("click",this.handleBulletClick.bind(this))})}handleBulletClick(e){var n,i,l;const t=e.currentTarget,s=t.getAttribute("step"),o=(n=this.shadowRoot)==null?void 0:n.querySelector(`[name="${s}"]::part(step)`);o&&o.scrollIntoView({behavior:"smooth",block:"center"});const r=(i=this.shadowRoot)==null?void 0:i.querySelectorAll("tp-step-bullet");r==null||r.forEach(d=>d.removeAttribute("active")),t.setAttribute("active",""),(l=this.cardsContainer.querySelector(`[name="${t.getAttribute("step")}"]`))==null||l.scrollIntoView({behavior:"smooth",block:"center"})}render(){return m`
      <gds-flex flex-direction="column" gap="xl">
        <div class="cards">
          <tp-content-card
            part="step"
            name="s1"
            img="${Xu}"
            heading="Gröna Bolånet"
            body="Köp ett klimatsmart boende och få en bättre ränta"
            link="Är ditt boende klimatsmart?"
          ></tp-content-card>
          <tp-content-card
            part="step"
            name="s2"
            img="${Ku}"
            heading="Gröna Bolånet"
            body="Köp ett klimatsmart boende och få en bättre ränta"
            link="Är ditt boende klimatsmart?"
          ></tp-content-card>
          <tp-content-card
            part="step"
            name="s3"
            img="${Ju}"
            heading="Gröna Bolånet"
            body="Köp ett klimatsmart boende och få en bättre ränta"
            link="Är ditt boende klimatsmart?"
          ></tp-content-card>
        </div>
        <gds-flex
          align-items="center"
          justify-content="center"
          gap="2xs"
          max-width="calc(100vw - calc(var(--gds-space-xl) * 2))"
        >
          <tp-step-bullet
            step="s1"
            .active=${this.activeStep==="s1"}
          ></tp-step-bullet>
          <tp-step-bullet
            step="s2"
            .active=${this.activeStep==="s2"}
          ></tp-step-bullet>
          <tp-step-bullet
            step="s3"
            .active=${this.activeStep==="s3"}
          ></tp-step-bullet>
        </gds-flex>
      </gds-flex>
    `}};Wo.styles=D`
    .cards {
      width: 100%;
      max-width: calc(100vw - calc(var(--gds-space-xl) * 2));
      overflow-x: auto;
      scroll-snap-type: x mandatory;

      display: grid;
      grid-template-columns: repeat(var(--cards), 87%);
      gap: var(--gds-space-m);
      align-items: center;
      scrollbar-width: none;

      > * {
        scroll-snap-align: center;
        scroll-margin-inline-start: var(--gds-space-l);
      }
    }

    tp-content-card {
      opacity: 1;
      transform: scale(1);

      transition:
        opacity 0.3s,
        transform 0.3s;
    }

    tp-content-card:not(.active) {
      opacity: 0.5;
      transform: scale(0.9);
    }
  `;wt([P()],Wo.prototype,"activeStep",2);wt([te(".cards")],Wo.prototype,"cardsContainer",2);Wo=wt([O("tp-content-cards")],Wo);let Ut=class extends E{constructor(){super(...arguments),this.heading="",this.img="",this.body="",this.link=""}render(){return m`
      <gds-card class="content-card" padding="0" border="0">
        <gds-img src="${this.img}" object-fit="cover"></gds-img>
        <gds-flex
          justify-content="flex-end"
          flex-direction="column"
          width="100%"
        >
          <gds-card level="2" margin="xl" padding="xl">
            <gds-flex flex-direction="column" gap="l">
              <gds-text font-size="heading-m" text-wrap="wrap"
                >${this.heading}</gds-text
              >
              <gds-text font-size="detail-s" text-wrap="wrap"
                >${this.body}</gds-text
              >
              <gds-link href="#" variant="secondary"
                ><gds-flex
                  justify-content="space-between"
                  width="100%"
                  flex-wrap="wrap"
                  ><gds-text text-wrap="wrap">${this.link}</gds-text
                  ><gds-icon-arrow-right></gds-icon-arrow-right></gds-flex
              ></gds-link>
            </gds-flex>
          </gds-card>
        </gds-flex>
      </gds-card>
    `}};Ut.styles=D`
    .content-card {
      display: grid;
      grid: 1fr / 1fr;

      > * {
        grid-column: 1;
        grid-row: 1;
      }

      aspect-ratio: 3 / 4;
      overflow: hidden;
    }
  `;wt([g({type:String})],Ut.prototype,"heading",2);wt([g({type:String})],Ut.prototype,"img",2);wt([g({type:String})],Ut.prototype,"body",2);wt([g({type:String})],Ut.prototype,"link",2);Ut=wt([O("tp-content-card")],Ut);const Ca=new Set;function t0(){an.instance.injectGlobalStyles("dialog-scroll-lock",D`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function s0(e){if(Ca.add(e),!document.documentElement.classList.contains("gds-scroll-lock")){const t=r0()+n0();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),t<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${t}px`)}}function o0(e){Ca.delete(e),Ca.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function r0(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function n0(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}const $d=""+new URL("forest-CySO3eH8.mp4",import.meta.url).href;var i0=Object.defineProperty,a0=Object.getOwnPropertyDescriptor,D1=e=>{throw TypeError(e)},_t=(e,t,s,o)=>{for(var r=o>1?void 0:o?a0(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&i0(t,s,r),r},l0=(e,t,s)=>t.has(e)||D1("Cannot "+s),d0=(e,t,s)=>t.has(e)?D1("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Rn=(e,t,s)=>(l0(e,t,"access private method"),s),Bs,V1,ka;t0();let hn=class extends E{constructor(){super(...arguments),d0(this,Bs)}connectedCallback(){super.connectedCallback()}render(){return m` <dialog
        @click=${async e=>{const t=await this.dialogElement;t!=null&&t.contains(e.target)&&t!==e.target||Rn(this,Bs,ka).call(this)}}
      >
        <gds-theme color-scheme="dark">
          <gds-card
            level="1"
            height="100%"
            padding="0"
            border="0"
            border-radius="0"
          >
            <gds-flex flex-direction="column" gap="xl">
              <div class="grid">
                <div class="button">
                  <gds-button
                    rank="secondary"
                    variant="neutral"
                    size="small"
                    @click="${Rn(this,Bs,ka)}"
                  >
                    <gds-icon-cross-small></gds-icon-cross-small>
                  </gds-button>
                </div>
                <gds-flex flex-direction="column" gap="xl">
                  <gds-video
                    style="pointer-events: none;"
                    class="image"
                    src="${$d}"
                    object-fit="cover"
                    muted
                    autoplay
                    loop
                  ></gds-video>

                  <gds-container class="blur merge" padding="l xl 0 xl">
                    <gds-text
                      class="heading"
                      font-size="heading-l"
                      margin="l 0 l 0"
                      >Letar du nytt boende?</gds-text
                    >

                    <gds-text font-size="body-l"
                      >Bostadsköpet är en av livet största affärer och vi är
                      gärna med dig hela vägen.</gds-text
                    >
                  </gds-container>

                  <gds-flex
                    flex-direction="column"
                    gap="xl"
                    padding="0 xl xl xl"
                  >
                    <tp-interaction-stuff></tp-interaction-stuff>

                    <gds-text font-size="preamble-s"
                      >More insights, what´s the biggest decline rate for
                      interest times right now?</gds-text
                    >

                    <tp-rates></tp-rates>

                    <gds-text font-size="preamble-s"
                      >Time to test out what I can get out of this.</gds-text
                    >

                    <tp-loan-calculator></tp-loan-calculator>

                    <gds-text font-size="preamble-s">More content</gds-text>

                    <tp-content-cards></tp-content-cards>
                  </gds-flex>
                </gds-flex>
              </div>
            </gds-flex>
          </gds-card>
        </gds-theme>
      </dialog>
      <gds-card
        class="news"
        border="4xs/primary"
        border-radius="xs"
        overflow="hidden"
        padding="0"
        variant="tertiary"
        @click="${Rn(this,Bs,V1)}"
      >
        <gds-flex position="relative" height="100%">
          <gds-video
            class="image"
            src="${$d}"
            object-fit="cover"
            muted
            autoplay
            loop
          ></gds-video>
          <gds-flex
            position="absolute"
            flex-direction="column"
            justify-content="flex-end"
            gap="l"
            height="100%"
            width="100%"
          >
            <gds-container class="blur"
              ><gds-flex flex-direction="column" gap="m" padding="2xl l l l">
                <gds-text class="heading" tag="h3" font-size="heading-s"
                  >Letar du nytt boende?</gds-text
                >
                <gds-link variant="secondary"
                  ><gds-flex justify-content="space-between" width="100%"
                    ><gds-text>Hur mycket kan du låna?</gds-text
                    ><gds-icon-arrow-right></gds-icon-arrow-right
                  ></gds-flex>
                </gds-link> </gds-flex
            ></gds-container>
          </gds-flex>
        </gds-flex>
      </gds-card>`}};Bs=new WeakSet;V1=async function(){const e=await this.dialogElement;e&&document.startViewTransition(()=>{e.showModal(),s0(e)})};ka=async function(){const e=await this.dialogElement;e&&document.startViewTransition(()=>{e.close(),o0(e)})};hn.styles=D`
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
      width: 100%;

      min-height: 100vh;

      opacity: 1;
    }

    dialog:modal::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }

    dialog::backdrop {
      backdrop-filter: blur(4px);
    }

    .grid {
      overflow: hidden;
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
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

    .heading {
      view-transition-name: --news-heading;
    }

    .blur {
      mask-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 1) 80%,
        rgba(0, 0, 0, 0) 100%
      );

      mask-size: cover;
      mask-repeat: no-repeat;
      mask-position: center;

      backdrop-filter: blur(10px);
    }

    .merge {
      margin-top: -127px;
      z-index: 5;
    }
  `;_t([xt("dialog")],hn.prototype,"dialogElement",2);hn=_t([O("tp-news")],hn);let Sd=class extends E{render(){return m`<gds-card>
      <gds-flex flex-direction="column" gap="l" padding="l">
        <gds-text margin="0 auto 0 auto" font-size="heading-s"
          >Interaction stuff</gds-text
        >

        <tp-interaction-slider
          max="18"
          min="0"
          .value=${9}
        ></tp-interaction-slider>

        <gds-flex flex-direction="column" gap="xs">
          <gds-text
            margin="0 auto 0 auto"
            font-size="detail-m"
            width="fit-content"
            >Så mycket kostar det</gds-text
          >
          <gds-text
            margin="0 auto 0 auto"
            font-size="display-m"
            width="fit-content"
            >1 135 000</gds-text
          >
        </gds-flex>
      </gds-flex>
    </gds-card>`}};Sd=_t([O("tp-interaction-stuff")],Sd);let ys=class extends E{constructor(){super(...arguments),this.min=0,this.max=100,this.value=this.max/2}render(){return m`<gds-flex flex-direction="column" gap="xs">
      ${this.label?m`<gds-text font-size="detail-m">${this.label}</gds-text>`:void 0}
      <gds-flex flex-direction="row" justify-content="space-between">
        <tp-pill-input .value=${this.min.toString()}></tp-pill-input>
        <tp-pill-input .value=${this.max.toString()}></tp-pill-input>
      </gds-flex>
      <gds-flex flex-direction="column" gap="xs">
        <tp-slider
          .min=${this.min}
          .max=${this.max}
          .value=${this.value}
          @change=${e=>{this.value=e.detail.value}}
        ></tp-slider>
        <gds-card
          level="1"
          color="primary"
          width="fit-content"
          padding="xs s xs s"
          margin="0 auto 0 auto"
          border="0"
          border-radius="max"
          min-width="20px"
          ><gds-text
            style="text-align: center;"
            margin="0 auto 0 auto"
            font-size="detail-m"
            >${this.value}</gds-text
          ></gds-card
        >
      </gds-flex>
    </gds-flex>`}};_t([g({type:String})],ys.prototype,"label",2);_t([g({type:Number})],ys.prototype,"min",2);_t([g({type:Number})],ys.prototype,"max",2);_t([P()],ys.prototype,"value",2);ys=_t([O("tp-interaction-slider")],ys);var Ro=class extends L{};Ro._regularSVG='<path d="M3.75 6.5V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H20.25V8.75H16.25M3.75 6.5C3.75 7.74264 4.75736 8.75 6 8.75H16.25M3.75 6.5C3.75 4.98122 4.98122 3.75 6.5 3.75H16.25V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/><path d="M15.5 15.25C15.9142 15.25 16.25 14.9142 16.25 14.5C16.25 14.0858 15.9142 13.75 15.5 13.75C15.0858 13.75 14.75 14.0858 14.75 14.5C14.75 14.9142 15.0858 15.25 15.5 15.25Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linejoin="round"/>';Ro._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3C4.567 3 3 4.567 3 6.5V17.25C3 19.3211 4.67893 21 6.75 21H20.25C20.6642 21 21 20.6642 21 20.25V8.75C21 8.33579 20.6642 8 20.25 8H17V3.75C17 3.33579 16.6642 3 16.25 3H6.5ZM15.5 8V4.5H6.5C5.39543 4.5 4.5 5.39543 4.5 6.5C4.5 7.32843 5.17157 8 6 8H15.5ZM15.5 15.5C16.0523 15.5 16.5 15.0523 16.5 14.5C16.5 13.9477 16.0523 13.5 15.5 13.5C14.9477 13.5 14.5 13.9477 14.5 14.5C14.5 15.0523 14.9477 15.5 15.5 15.5Z" fill="currentColor"/>';Ro._name="wallet";Ro=a([k("gds-icon-wallet")],Ro);const c0={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"};var g0=Object.defineProperty,h0=Object.getOwnPropertyDescriptor,P1=e=>{throw TypeError(e)},wl=(e,t,s,o)=>{for(var r=o>1?void 0:o?h0(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&g0(t,s,r),r},p0=(e,t,s)=>t.has(e)||P1("Cannot "+s),u0=(e,t,s)=>t.has(e)?P1("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Md=(e,t,s)=>(p0(e,t,"access private method"),s),Lr,H1,F1;const gr=[{text:"Todo 1",url:"#"},{text:"Todo 2",url:"#"},{text:"Todo 3",url:"#"},{text:"Todo 1",url:"#"}];let pn=class extends E{constructor(){super(...arguments),u0(this,Lr),this.expanded=!window.matchMedia(`(max-width: ${c0.s})`).matches}connectedCallback(){super.connectedCallback()}renderTodo(e){return m`<gds-card
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
            calc(var(--gds-space-m, 0) * ${gr.length-1}) +
              calc(var(--todo-height, 0) * ${gr.length})
          );
        }

        .todo.loaded {
          transition: all var(--duration);
        }

        .todo {
          height: 100%;
          width: 100%;
          z-index: calc(${gr.length} - var(--todo-index));
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
          <button class="expand-button" @click="${Md(this,Lr,F1)}">
            <gds-text font-size="detail-m"
              >${this.expanded?"Visa färre":"Visa allt"}</gds-text
            >
          </button>
        </gds-flex>

        <gds-flex
          @click="${Md(this,Lr,H1)}"
          class="stack"
          flex-direction="column"
          gap="m"
          aria-expanded="${this.expanded}"
        >
          ${gr.map((e,t)=>m`<gds-link
                class="todo"
                style="--todo-index: ${t};"
                href="${e.url}"
                variant="hidden"
                ${Xs(this.onRef)}
              >
                ${this.renderTodo(e)}
              </gds-link>`)}</gds-flex
        >
      </gds-flex>`}};Lr=new WeakSet;H1=function(){this.expanded||(this.expanded=!0)};F1=function(){this.expanded=!this.expanded};wl([g({type:Boolean})],pn.prototype,"expanded",2);wl([te(".todo")],pn.prototype,"todo",2);pn=wl([O("tp-todos")],pn);var f0=Object.defineProperty,m0=Object.getOwnPropertyDescriptor,v0=(e,t,s,o)=>{for(var r=o>1?void 0:o?m0(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&f0(t,s,r),r};let Ed=class extends E{connectedCallback(){super.connectedCallback()}render(){return m` <gds-card variant="secondary" shadow="s" padding="l">
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
    </gds-card>`}};Ed=v0([O("tp-savings-outside")],Ed);var b0=Object.defineProperty,x0=Object.getOwnPropertyDescriptor,j1=e=>{throw TypeError(e)},nr=(e,t,s,o)=>{for(var r=o>1?void 0:o?x0(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&b0(t,s,r),r},y0=(e,t,s)=>t.has(e)||j1("Cannot "+s),w0=(e,t,s)=>t.has(e)?j1("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),un=(e,t,s)=>(y0(e,t,"access private method"),s),ls,W1,R1,B1,I1;let ws=class extends E{constructor(){super(),w0(this,ls),this.hideFooter=!1,this.wide=!1,this.footerSlotOccupied=!1,this.mainSlotOccupied=!1}connectedCallback(){super.connectedCallback()}render(){return m`
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
          ${un(this,ls,B1).call(this)}
        </gds-flex>
        ${un(this,ls,W1).call(this)}
      </gds-card>
    `}};ls=new WeakSet;W1=function(){return m`<div style="display: ${this.footerSlotOccupied?"":"none"}">
      <gds-flex
        border="4xs/primary 0 0 0"
        flex-direction="column"
        padding="m l m m"
      >
        <slot name="footer" @slotchange=${un(this,ls,R1)}></slot>
      </gds-flex>
    </div>`};R1=function(e){const s=e.target.assignedNodes({flatten:!0});this.footerSlotOccupied=s.length>0&&s.some(o=>{var r;return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE&&((r=o.textContent)==null?void 0:r.trim())!==""})};B1=function(){return m`<gds-flex class="main-slot" flex-direction="column" gap="l">
      <slot @slotchange=${un(this,ls,I1)}></slot>
    </gds-flex>`};I1=function(e){const s=e.target.assignedNodes({flatten:!0});this.mainSlotOccupied=s.length>0&&s.some(o=>{var r;return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE&&((r=o.textContent)==null?void 0:r.trim())!==""})};nr([P()],ws.prototype,"hideFooter",2);nr([g({type:Boolean})],ws.prototype,"wide",2);nr([P()],ws.prototype,"footerSlotOccupied",2);nr([P()],ws.prototype,"mainSlotOccupied",2);ws=nr([O("tp-card")],ws);var _0=Object.defineProperty,C0=Object.getOwnPropertyDescriptor,k0=(e,t,s,o)=>{for(var r=o>1?void 0:o?C0(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&_0(t,s,r),r};let Td=class extends E{connectedCallback(){super.connectedCallback()}render(){return m`<tp-card>
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
    </tp-card>`}};Td=k0([O("tp-savings-goal")],Td);var $0=Object.defineProperty,S0=Object.getOwnPropertyDescriptor,M0=(e,t,s,o)=>{for(var r=o>1?void 0:o?S0(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&$0(t,s,r),r};let Ad=class extends E{constructor(){super(...arguments),this.isCollapsed=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}toggleCollapse(){this.isCollapsed=!this.isCollapsed,this.requestUpdate()}render(){return m` <tp-card gap=${this.isCollapsed?"0":"xl"}>
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
    </tp-card>`}};Ad=M0([O("tp-savings")],Ad);var E0=Object.defineProperty,T0=Object.getOwnPropertyDescriptor,A0=(e,t,s,o)=>{for(var r=o>1?void 0:o?T0(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&E0(t,s,r),r};let zd=class extends E{render(){return m`
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
    `}};zd=A0([O("tp-accounts")],zd);const z0=""+new URL("acne-CDrPujUB.svg",import.meta.url).href,O0=""+new URL("ica-DL3rRfwZ.svg",import.meta.url).href,L0=""+new URL("swish-B-td8wCi.svg",import.meta.url).href;var D0=Object.defineProperty,V0=Object.getOwnPropertyDescriptor,P0=(e,t,s,o)=>{for(var r=o>1?void 0:o?V0(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&D0(t,s,r),r};let Od=class extends E{connectedCallback(){super.connectedCallback()}renderIca(){return m`<img src="${O0}" alt="ICA Logo" />`}renderSwish(){return m`<img src="${L0}" alt="Swish Logo" />`}renderAcne(){return m`<img src="${z0}" alt="Acne Logo" />`}render(){return m` <style>
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
      </gds-card>`}};Od=P0([O("gds-carousel-trans")],Od);var H0=Object.defineProperty,F0=Object.getOwnPropertyDescriptor,j0=(e,t,s,o)=>{for(var r=o>1?void 0:o?F0(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&H0(t,s,r),r};let Ld=class extends E{render(){return m`
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
    `}};Ld=j0([O("tp-cards")],Ld);var W0=Object.defineProperty,R0=Object.getOwnPropertyDescriptor,B0=(e,t,s,o)=>{for(var r=o>1?void 0:o?R0(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&W0(t,s,r),r};let Dd=class extends E{render(){return m`
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
    `}};Dd=B0([O("tp-transactions")],Dd);var I0=Object.defineProperty,N0=Object.getOwnPropertyDescriptor,G0=(e,t,s,o)=>{for(var r=o>1?void 0:o?N0(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&I0(t,s,r),r};let Vd=class extends E{connectedCallback(){super.connectedCallback()}render(){return m`
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
    `}};Vd=G0([O("tp-list-item")],Vd);var Z0=Object.defineProperty,U0=Object.getOwnPropertyDescriptor,Y0=(e,t,s,o)=>{for(var r=o>1?void 0:o?U0(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&Z0(t,s,r),r};let Pd=class extends E{createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return m`
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
    `}};Pd=Y0([O("gds-dashboard")],Pd);var q0=D`
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
`,fn=class extends Y{querySelectorAll(e){return this.shadowRoot?this.shadowRoot.querySelectorAll(e):new NodeList}querySelector(e){return this.shadowRoot?this.shadowRoot.querySelector(e):null}get innerHTML(){var e;return((e=this.shadowRoot)==null?void 0:e.innerHTML)||""}set innerHTML(e){this.shadowRoot&&(this.shadowRoot.innerHTML=e)}connectedCallback(){super.connectedCallback(),this._captureDOM()}_captureDOM(){!this.shadowRoot||this.childNodes.length===0||this.shadowRoot.replaceChildren(...Array.from(this.childNodes))}};fn.styles=[J,ec,q0];a([Ga()],fn.prototype,"_captureDOM",1);fn=a([k("gds-rich-text")],fn);var K0=Object.defineProperty,X0=Object.getOwnPropertyDescriptor,N1=e=>{throw TypeError(e)},G1=(e,t,s,o)=>{for(var r=o>1?void 0:o?X0(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&K0(t,s,r),r},J0=(e,t,s)=>t.has(e)||N1("Cannot "+s),Q0=(e,t,s)=>t.has(e)?N1("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Bn=(e,t,s)=>(J0(e,t,"access private method"),s),Is,Dr;let $a=class extends E{constructor(){super(...arguments),Q0(this,Is),this.viewOptions={hasAccounts:!1,hasSavings:!1,hasCards:!1}}createRenderRoot(){return this}render(){return m`
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
                      @change=${e=>Bn(this,Is,Dr).call(this,{...this.viewOptions,hasAccounts:e.target.checked})}
                    />
                    <i></i>
                  </label>
                </gds-menu-item>
                <gds-menu-item>
                  <label class="form-control"
                    >Has savings
                    <input
                      type="checkbox"
                      @change=${e=>Bn(this,Is,Dr).call(this,{...this.viewOptions,hasSavings:e.target.checked})}
                    />
                    <i></i>
                  </label>
                </gds-menu-item>
                <gds-menu-item>
                  <label class="form-control">
                    Has cards
                    <input
                      type="checkbox"
                      @change=${e=>Bn(this,Is,Dr).call(this,{...this.viewOptions,hasCards:e.target.checked})}
                    />
                    <i></i>
                  </label>
                </gds-menu-item>
              </gds-popover>
            </gds-flex>
          </gds-flex>
        </gds-flex>
      </gds-container>
    `}};Is=new WeakSet;Dr=function(e){this.viewOptions=e,this.dispatchEvent(new CustomEvent("view-options-change",{detail:{view:e},bubbles:!0,composed:!0}))};G1([P()],$a.prototype,"viewOptions",2);$a=G1([O("tp-page-header")],$a);var ef=Object.defineProperty,tf=Object.getOwnPropertyDescriptor,Z1=(e,t,s,o)=>{for(var r=o>1?void 0:o?tf(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&ef(t,s,r),r};let Sa=class extends E{render(){return m`
      <style>
        :host {
          display: contents;
        }

        .account {
          scroll-snap-align: center;
          width: 246px;
          transition: all 248ms;
          scale: 1;
          opacity: 1;

          svg {
            width: 80%;
            height: auto;
          }

          @supports (animation-timeline: view(x)) and
            (animation-range: entry 0% entry 60vw) {
            animation-name: tp-card, tp-card;
            animation-fill-mode: both;
            animation-timing-function: ease-in-out;
            animation-direction: normal, reverse;
            animation-timeline: view(x);
            animation-range:
              entry 0% entry 60vw,
              exit -20vw exit 40vw;
          }
        }

        @keyframes tp-card {
          0% {
            scale: 0.8;
            opacity: 0.4;
          }
        }
      </style>
      <gds-card
        variant=${this.name}
        part="account"
        class="account"
        padding="0"
        border="0"
      >
        <gds-flex
          align-items="center"
          justify-content="center"
          padding="l"
          flex-direction="column"
          gap="l"
        >
          <slot></slot>
        </gds-flex>
      </gds-card>
    `}};Z1([g({type:String})],Sa.prototype,"name",2);Sa=Z1([O("tp-accounts-card")],Sa);var sf=Object.defineProperty,of=Object.getOwnPropertyDescriptor,U1=(e,t,s,o)=>{for(var r=o>1?void 0:o?of(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&sf(t,s,r),r};let Ma=class extends E{constructor(){super(...arguments),this.isModalOpen=!1}handleCardClick(){this.isModalOpen=!0}closeModal(){this.isModalOpen=!1}handleKeyDown(e){e.key==="Escape"&&(this.isModalOpen=!1)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.handleKeyDown.bind(this))}disconnectedCallback(){window.removeEventListener("keydown",this.handleKeyDown.bind(this)),super.disconnectedCallback()}render(){return m`
      <style>
        .car {
          display: flex;
          overflow-x: scroll;
          scroll-snap-type: x mandatory;
          width: 100%;
          position: relative;
          scrollbar-width: none;
          box-sizing: border-box;
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
      <gds-container display="block; m{none}">
        <tp-card wide>
          <gds-text slot="header" font-size="heading-s">Transaction</gds-text>
          <gds-button slot="action" size="small" rank="tertiary">
            <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
          </gds-button>
          <gds-flex flex-direction="column" gap="l" padding="0 0 l 0">
            <div class="car">
              <gds-flex gap="2">
                <gds-container width="100px"></gds-container>
                <tp-accounts-card
                  @click=${this.handleCardClick}
                  name="positive"
                >
                  <gds-card
                    display="flex"
                    width="43px"
                    height="43px"
                    background="#bad8bd"
                    border="none"
                    level="3"
                    align-tiems="center"
                    padding="xs"
                  >
                    <svg viewBox="0 0 400 210">
                      <path
                        fill="#1a6a54"
                        fill-rule="evenodd"
                        d="M9.992468 172.829655V37.141674l27.1557-27.1557h325.777881l27.065181 27.1557v135.687981l-27.065181 27.1557H37.148168z"
                      />
                      <path
                        fill="#ffe32a"
                        fill-rule="evenodd"
                        d="m18.048659 40.490877 22.448712-22.448712h318.898437l22.62975 22.448712v128.989575l-22.539231 22.448712H40.497371l-22.448712-22.448712z"
                      />
                      <path
                        fill="#1a6a54"
                        fill-rule="evenodd"
                        d="m357.40439 23.201748 19.461585 19.371066v124.825701l-19.461585 19.371066H42.579308l-19.371066-19.371066V42.572814l19.371066-19.371066z"
                      />
                      <path
                        fill="#ffe32a"
                        fill-rule="evenodd"
                        d="M95.631 59.605c1.0681.10862 1.7199-.62459 2.1634-1.5569.97761 0 1.7108.02717 3.1229 0v10.853c-1.4212-.01815-2.1091-.01815-3.1591-.01815-.74225-4.9786-5.576-7.9838-12.057-7.9838-4.888 0-8.9886 1.566-8.9886 4.5622 0 3.7203 3.9195 3.7294 6.0467 4.001 6.4812 1.0229 14.546-.55217 18.375 6.3545 1.3306 2.8876 1.3306 6.7075 0 9.6041-3.0234 6.0557-9.5045 7.3592-15.624 6.617-3.5574-.19009-7.7394-2.607-9.4864-2.607-1.0953 0-1.5026 1.0319-1.8647 1.9643h-3.179v-11.704h3.1591c.18104 4.001 5.3497 8.5541 12.836 8.5541 9.242 0 11.034-7.5946 6.5174-9.07-7.7303-2.8061-19.806 1.4845-22.901-9.1425-.70605-3.4488-.09957-7.2778 2.7518-9.6946 6.1191-5.395 15.596-3.5212 22.286-.73321zM132.47 58.066h15.37v3.6389c-2.3535 0-4.3721-.05434-5.757 1.7289 0 0-9.3597 11.659-10.772 13.741 0 1.575-.0362 6.0829-.0362 6.0829-.0272 3.3854 5.2139 4.4988 6.6351 4.4988v3.6841h-21.453v-3.7022c2.0186 0 6.6351-1.0772 6.6351-4.4898v-6.065l-10.52-13.705c-1.52-1.72-2.73-1.72-5.71-1.72v-3.6932h20.611v3.6932c-6.0286.02717-3.829 2.5345-3.829 2.5345l6.3182 8.2192 6.4721-8.2192s2.3354-2.5617-3.9919-2.5617l.018-3.666zM177.01 59.605c1.0772.10862 1.7108-.62459 2.1634-1.5569.9776 0 1.7018.02717 3.1229 0v10.853c-1.4212-.01815-2.1091-.01815-3.1591-.01815-.7332-4.9786-5.576-7.9838-12.057-7.9838-4.888 0-8.9886 1.566-8.9886 4.5622 0 3.7203 3.9195 3.7294 6.0467 4.001 6.4812 1.0229 14.565-.55217 18.375 6.3545 1.3216 2.8876 1.3216 6.7075 0 9.6041-3.0143 6.0557-9.5045 7.3592-15.624 6.617-3.5665-.19009-7.7394-2.607-9.4774-2.607-1.1043 0-1.5117 1.0319-1.8738 1.9643h-3.1772v-11.704h3.1501c.19009 4.001 5.3678 8.5541 12.845 8.5541 9.242 0 11.034-7.5946 6.5174-9.07-7.7213-2.8061-19.797 1.4845-22.91-9.1425-.697-3.4488-.0815-7.2778 2.7699-9.6946 6.1282-5.395 15.587-3.5212 22.277-.73321zM227.07 58.066v10.88c-1.5479.05434-1.9914-.01805-3.3673 0-.53406-2.7156-1.1496-4.2906-3.9919-5.9652-1.5841-.9595-5.0329-1.1677-7.8299-1.2039v21.553c0 3.313 5.223 4.4264 6.6351 4.4264v3.6841h-21.453v-3.7022c2.0186 0 6.6441-1.0229 6.6441-4.4173v-21.535c-2.797.0362-6.11.24441-7.6489 1.1949-2.8423 1.6837-3.4759 3.313-4.001 6.0105-1.3668-.0095-1.8194.06337-3.3764 0v-10.925h38.389zM247.34 87.756l10.111-.05431c5.4674-.0362 7.2053-4.4445 7.7394-7.142 1.3759.0095 1.8285-.07239 3.3764 0v10.862h-36.054v-3.7022c2.0276 0 6.6351-1.041 6.6351-4.4173v-17.498c0-3.6298-5.7842-4.0643-6.626-4.0643v-3.6932h36.045v10.88c-1.5479.05434-2.0005-.01814-3.3764 0-.54311-2.7156-2.3897-7.1601-7.7394-7.1601l-10.111-.0095v10.699h4.7523c3.5393 0 3.9738-4.6346 3.9738-5.5941h3.1048v14.592h-3.1139c0-1.3759-.25345-5.6031-3.9828-5.6031h-4.7342v11.903zM329.71 58.066v3.6841c-.84183 0-6.626.44355-6.626 4.0734v17.497c0 3.3583 4.6255 4.4083 6.6441 4.4083v3.7022h-21.471v-3.7022c2.0276 0 6.6441-1.05 6.6441-4.4083v-16.881l.20819-1.4121-12.808 26.423h-4.001l-12.51-28.45.18104 1.4936v18.828c0 3.3583 4.6255 4.4083 6.6441 4.4083v3.7022h-17.153v-3.7022c2.0186 0 6.6351-1.05 6.6351-4.4083V65.823c0-3.6298-5.8023-4.0734-6.617-4.0734v-3.6841h17.262l9.4593 21.417.4888 1.6112.52501-1.6112 10.6-21.471 15.895.05434zM201.99 133.11l-5.3044-10.437-.25346-.9052-.25345.91424-5.4674 10.428h11.279zm-10.111 12.383h-15.37v-3.6479c2.3535 0 4.707.28061 5.757-1.7108l14.809-28.179h3.3764l14.592 28.124c1.5298 1.7199 2.7337 1.7199 5.7118 1.7199v3.6932h-20.62v-3.6932c6.0286-.0272 4.9695-2.5345 4.9695-2.5345l-1.6927-3.3221h-14.157l-1.738 3.3221s-1.9371 2.5617 4.3721 2.5617v3.666h-.01zM95.45 128.76c0-11.125 9.3959-17.543 20.982-17.543 11.605 0 21.01 6.4178 21.01 17.543 0 12.039-9.405 17.543-21.01 17.543-11.586 0-20.982-5.5579-20.982-17.543zm9.0067 0c0-9.0338 5.3678-13.723 11.976-13.723 6.626 0 11.994 4.7342 11.994 13.723 0 9.4683-5.3678 13.714-11.994 13.714-6.6079 0-11.976-4.2454-11.976-13.714zM56.346 120.25c0-3.304-5.2139-4.4083-6.6441-4.4083v-3.6932l29.708-.009c2.9238.23534 5.585.98666 7.5493 3.5936 1.7742 2.3354 2.2177 5.6937.88709 8.3006-1.2401 2.1453-3.6389 2.9872-5.232 3.9286 2.4802.92329 5.232 2.4169 6.6532 4.9333.97761 1.9643.80562 4.6708.09052 6.7075-2.3988 5.5941-8.2463 6.0286-13.397 5.9381h-26.25v-3.7113c2.0276 0 6.6441-1.0229 6.6441-4.4083v-17.172h-.009zm16.963 10.256c-.009-.0362-8.8075.01-8.7985 0v11.333s9.0067-.009 9.0157 0c3.3673 0 7.2415-2.4802 7.2325-6.0105 0-3.3583-3.8652-5.3225-7.4497-5.3225zm0-14.655c-.009-.0362-8.8075.0272-8.7985 0v11.333s9.0157-.01 9.0248 0c3.3402 0 7.2325-2.4802 7.2325-6.0014 0-3.3221-3.9195-5.3316-7.4588-5.3316zM146.5 120.25c0-3.304-5.223-4.4083-6.6351-4.4083v-3.6932h21.444v3.7022c-2.0186 0-6.617 1.0229-6.617 4.4173v21.544c2.7789-.0543 9.405-.25345 10.944-1.2039 2.8423-1.6837 3.4669-5.5217 3.9919-8.2282h3.3673v13.152l-22.503.009h-10.627v-3.7113c2.0186 0 6.6351-1.0229 6.6351-4.4083v-17.172zM246.89 133.02v-3.6841h19.444v3.6841c-1.4212 0-5.3678 1.1134-5.3678 4.4083l-.56122 8.1015h-2.9057l-1.3668-3.7022c-2.9781 3.0143-7.3683 4.4535-13.324 4.4535-11.605 0-20.991-5.5488-20.991-17.543 0-9.5588 6.9247-15.633 16.212-17.162 1.5298-.32587 3.1229-.44355 4.7251-.38924 4.001.17199 8.02 1.3216 11.333 2.7246 1.0681.0905 1.7199-.81468 2.1815-1.738.9595 0 1.7018.0182 3.1139 0v11.025c-1.4121-.0272-2.1091-.0272-3.1591-.009-.75131-4.9876-7.4407-8.1648-13.415-8.1648-6.617 0-11.994 4.6889-11.994 13.723 0 9.4683 5.3768 13.714 11.994 13.714 4.182 0 10.039-2.0367 10.039-5.3406.01-3.7837-4.5441-4.1005-5.9562-4.1005zM283.91 141.89l10.129-.0634c5.4674-.0362 7.2144-4.4445 7.7304-7.151 1.3668.01 1.8104-.0634 3.3673 0v10.88l-36.054-.01v-3.6932c2.0276 0 6.6441-1.05 6.6441-4.4264v-17.479c0-3.6389-5.7932-4.0915-6.626-4.0915v-3.6841h36.036v10.88c-1.5569.0543-2.0005-.01-3.3673 0-.54312-2.7065-2.3807-7.151-7.7485-7.151l-10.111-.01v10.69l4.7432.01c3.5665 0 3.9828-4.6346 3.9828-5.6032h3.1229v14.592h-3.141c0-1.3668-.23536-5.5941-3.9648-5.5941h-4.7432v11.903zM350.35 112.11v10.88c-1.5569.0634-2.0005-.01-3.3673 0-.54311-2.7065-1.1586-4.2725-4.001-5.9562-1.575-.96857-5.0238-1.1677-7.8299-1.1949v22.901c0 2.1272 5.223 3.0596 6.6441 3.0596v3.6932h-21.453v-3.7022c2.0186 0 6.6351-.87804 6.6351-3.0596v-22.892c-2.797.0362-6.11.23536-7.6579 1.1949-2.8333 1.6927-3.4669 3.3039-3.9828 6.0105-1.3668-.01-1.8104.0634-3.3854 0v-10.935h38.398z"
                      />
                    </svg>
                  </gds-card>
                  <gds-flex
                    flex-direction="column"
                    gap="2xs"
                    align-items="center"
                  >
                    <gds-flex
                      flex-direction="column"
                      gap="3xs"
                      align-items="center"
                    >
                      <gds-text
                        font-size="detail-s"
                        font-weight="book"
                        color="secondary"
                      >
                        Livsmedel
                      </gds-text>
                      <gds-text
                        font-size="detail-m"
                        font-weight="book"
                        color="primary"
                      >
                        Systembolaget
                      </gds-text>
                    </gds-flex>
                    <gds-text
                      font-size="detail-m"
                      font-weight="book"
                      color="primary"
                    >
                      –345,50
                    </gds-text>
                  </gds-flex>
                </tp-accounts-card>
                <tp-accounts-card
                  @click=${this.handleCardClick}
                  name="negative"
                >
                  <gds-card
                    width="43px"
                    height="43px"
                    background="#f1dfdc"
                    border="none"
                    level="3"
                    padding="xs"
                    box-sizing="border-box"
                  >
                    <gds-flex
                      align-items="center"
                      justify-content="center"
                      height="100%"
                    >
                      <svg
                        fill="none"
                        width="28"
                        height="18"
                        viewBox="0 0 48 25"
                      >
                        <path
                          fill="#E3000B"
                          fill-rule="evenodd"
                          d="M34.4756.986356 47.8582 24.4723h-6.7799l-1.4712-2.5524h-6.7445l2.3575-4.1389h2.0295l-2.7828-4.9099-2.9158 5.0961c-.4582.7976-.9218 1.4977-1.3737 2.1004-2.2246 2.9335-5.8317 4.8124-9.8376 4.8124-6.7178 0-12.23039-5.3176-12.23039-11.8759 0-6.55836 5.46819-11.87594 12.23039-11.87594 2.2955 0 4.3604.6062 6.1596 1.62186l-2.8804 5.06942c-.9944-.58372-2.1261-.89265-3.2792-.89512-3.4387 0-6.2215 2.71196-6.2215 6.05318 0 3.3501 2.7828 6.0532 6.2215 6.0532 1.87 0 3.4033-.7649 4.52-1.8789.4918-.4777 1.0458-1.2762 1.2142-1.5598L34.4579.880005l.0177.106351ZM0 24.4723V1.60674h5.96455V24.4723H0Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </gds-flex>
                  </gds-card>
                  <gds-flex
                    flex-direction="column"
                    gap="2xs"
                    align-items="center"
                  >
                    <gds-flex
                      flex-direction="column"
                      gap="3xs"
                      align-items="center"
                    >
                      <gds-text
                        font-size="detail-s"
                        font-weight="book"
                        color="secondary"
                      >
                        Livsmedel
                      </gds-text>
                      <gds-text
                        font-size="detail-m"
                        font-weight="book"
                        color="primary"
                      >
                        ICA Sabbatsberg
                      </gds-text>
                    </gds-flex>
                    <gds-text
                      font-size="detail-m"
                      font-weight="book"
                      color="primary"
                    >
                      –942,85
                    </gds-text>
                  </gds-flex>
                </tp-accounts-card>
                <tp-accounts-card @click=${this.handleCardClick} name="primary">
                  <gds-card
                    width="43px"
                    height="43px"
                    background="#ffffff"
                    border="none"
                    level="3"
                    padding="xs"
                    box-sizing="border-box"
                  >
                    <gds-flex
                      align-items="center"
                      justify-content="center"
                      height="100%"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 76 25"
                      >
                        <path
                          fill="#000"
                          d="M8.80355.934998.449219 24.5505H4.54084l1.38289-4.2689h8.43007l1.3833 4.2689h4.1184L11.5965.934998H8.80355ZM13.1879 16.672H7.0892l3.0482-9.42492 3.0505 9.42492ZM30.3087 21.6172c-2.3773 0-4.3028-2.024-4.3028-4.5198 0-2.4957 1.9255-4.5197 4.3028-4.5197 1.7081 0 3.1868 1.0487 3.8796 2.5644l3.087-1.7429c-1.3326-2.4597-3.9527-4.1326-6.9666-4.1326-4.3638 0-7.9003 3.5053-7.9021 7.8291v.004c.0018 4.3228 3.5383 7.8304 7.9021 7.8304 3.0139 0 5.634-1.6734 6.9666-4.1331l-3.087-1.742c-.6924 1.5144-2.1715 2.5622-3.8796 2.5622ZM75.0917 17.1028c0-4.3255-3.5383-7.83128-7.9026-7.83128-4.3638 0-7.9008 3.50578-7.9008 7.83128 0 4.3264 3.537 7.8322 7.9008 7.8322 2.6219 0 4.9444-1.2662 6.3816-3.2144l-2.8397-2.0503c-.7766 1.1789-2.073 1.9518-3.5419 1.9518-1.9536 0-3.6042-1.3686-4.1281-3.1805l11.926-.0018c.0677-.4754.1047-.9026.1047-1.337Zm-11.9261-1.6965c.6158-1.7046 2.1844-2.9164 4.0231-2.9164 1.8391 0 3.4095 1.2118 4.0252 2.9164h-8.0483ZM54.582 12.7189c-.904-2.183-2.7916-3.43403-5.1791-3.43403-2.8513 0-4.3701 2.29883-4.3701 2.29883V9.71123h-3.533V24.5652h3.6738v-8.1984c0-.6482.0334-1.4635.2967-2.0204.5337-1.1183 1.5718-1.7585 2.8513-1.7585 1.2532 0 2.2302.622 2.7511 1.754.2664.5797.3038 1.2506.3038 1.8926l.0022 8.3325h3.6689l-.0009-8.6747c.0004-1.0656-.0553-2.1875-.4647-3.1734Z"
                        />
                      </svg>
                    </gds-flex>
                  </gds-card>
                  <gds-flex
                    flex-direction="column"
                    gap="2xs"
                    align-items="center"
                  >
                    <gds-flex
                      flex-direction="column"
                      gap="3xs"
                      align-items="center"
                    >
                      <gds-text
                        font-size="detail-s"
                        font-weight="book"
                        color="secondary"
                      >
                        Shopping
                      </gds-text>
                      <gds-text
                        font-size="detail-m"
                        font-weight="book"
                        color="primary"
                      >
                        Acne Studios
                      </gds-text>
                    </gds-flex>
                    <gds-text
                      font-size="detail-m"
                      font-weight="book"
                      color="primary"
                    >
                      –345,50
                    </gds-text>
                  </gds-flex>
                </tp-accounts-card>
                <gds-container width="100px"></gds-container>
              </gds-flex>
            </div>
            <gds-flex align-items="center" justify-content="center" gap="2xs">
              <tp-step-bullet step="s1"></tp-step-bullet>
              <tp-step-bullet step="s2" active></tp-step-bullet>
              <tp-step-bullet step="s3"></tp-step-bullet>
              <tp-step-bullet step="s4"></tp-step-bullet>
            </gds-flex>
          </gds-flex>
        </tp-card>
      </gds-container>
      <gds-container display="none; m{block}">
        <tp-card>
          <!-- Header -->
          <gds-text slot="header" font-size="heading-s">
            Transactions
          </gds-text>
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
              <gds-icon-knife-spoon
                width="20"
                height="20"
              ></gds-icon-knife-spoon>
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

            <gds-flex
              flex-direction="column"
              gap="xs"
              padding="0 0 m 0"
              flex="1"
            >
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
      </gds-container>
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
          `:N}
    `}};U1([P()],Ma.prototype,"isModalOpen",2);Ma=U1([O("tp-accounts-modal")],Ma);var Bo=class extends L{};Bo._regularSVG='<path d="M19.2618 3.75V7.75H15.2618M4.75 20.25V16.25H8.75M3.81383 13.0312C3.7717 12.6934 3.75 12.3492 3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C14.6766 3.75 17.1111 5.02463 18.6322 7M20.1862 10.9688C20.2283 11.3066 20.25 11.6508 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C9.32342 20.25 6.88887 18.9754 5.36784 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Bo._solidSVG='<path d="M6.3448 17C7.73561 18.5332 9.77612 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 11.6819 19.4802 11.3687 19.4419 11.0616C19.3907 10.6505 19.6823 10.2758 20.0934 10.2245C20.5044 10.1733 20.8792 10.4649 20.9304 10.8759C20.9764 11.2445 21 11.6197 21 12C21 16.9706 16.9706 21 12 21C9.4791 21 7.1554 19.9626 5.5 18.2888V20.25C5.5 20.6642 5.16421 21 4.75 21C4.33579 21 4 20.6642 4 20.25V16.25C4 15.8358 4.33579 15.5 4.75 15.5H8.75C9.16421 15.5 9.5 15.8358 9.5 16.25C9.5 16.6642 9.16421 17 8.75 17H6.3448Z" fill="currentColor"/><path d="M4.55806 12.9384C4.60932 13.3495 4.31766 13.7242 3.90663 13.7755C3.4956 13.8267 3.12085 13.5351 3.06959 13.1241C3.02364 12.7555 3 12.3803 3 12C3 7.02944 7.02944 3 12 3C14.5269 3 16.8557 4.04238 18.5118 5.72322V3.75C18.5118 3.33579 18.8476 3 19.2618 3C19.6761 3 20.0118 3.33579 20.0118 3.75V7.75C20.0118 8.16421 19.6761 8.5 19.2618 8.5H15.2618C14.8476 8.5 14.5118 8.16421 14.5118 7.75C14.5118 7.33579 14.8476 7 15.2618 7H17.6552C16.2644 5.46681 14.2239 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 12.3181 4.51977 12.6313 4.55806 12.9384Z" fill="currentColor"/>';Bo._name="arrow-rotate-right-left";Bo=a([k("gds-icon-arrow-rotate-right-left")],Bo);var rf=Object.defineProperty,nf=Object.getOwnPropertyDescriptor,af=(e,t,s,o)=>{for(var r=o>1?void 0:o?nf(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&rf(t,s,r),r};let Ea=class extends E{render(){return m`
      <gds-grid columns="3" gap="m">
        <a href="javascript:;">
          <gds-card variant="secondary" level="3">
            <gds-flex flex-direction="column" align-items="center" gap="2xs">
              <gds-icon-credit-card height="16"></gds-icon-credit-card>
              <gds-text font-size="detail-s" font-weight="book">Kort</gds-text>
            </gds-flex>
          </gds-card>
        </a>
        <a href="javascript:;">
          <gds-card variant="secondary" level="3">
            <gds-flex flex-direction="column" align-items="center" gap="2xs">
              <gds-icon-arrow-rotate-right-left height="16">
              </gds-icon-arrow-rotate-right-left>
              <gds-text font-size="detail-s" font-weight="book">
                Flytta pengar
              </gds-text>
            </gds-flex>
          </gds-card>
        </a>
        <a href="javascript:;">
          <gds-card variant="secondary" level="3">
            <gds-flex flex-direction="column" align-items="center" gap="2xs">
              <gds-icon-growth height="16"></gds-icon-growth>
              <gds-text font-size="detail-s" font-weight="book">
                Framtiden
              </gds-text>
            </gds-flex>
          </gds-card>
        </a>
      </gds-grid>
    `}};Ea.styles=D`
    :host {
      display: contents;
    }

    a,
    a:link,
    a:visited,
    a:focus,
    a:hover,
    a:active {
      text-decoration: none;
      cursor: crosshair;
    }

    a:-webkit-any-link {
      color: -webkit-link;
      text-decoration: none;
      cursor: auto;
    }

    a [gds-element='gds-card'] {
      transition: background-color 0.2s;
      cursor: pointer;
    }
    a:active [gds-element='gds-card'] {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-secondary) 100%,
        black 10%
      );
    }
  `;Ea=af([O("tp-quicklinks")],Ea);var lf=Object.defineProperty,df=Object.getOwnPropertyDescriptor,Y1=(e,t,s,o)=>{for(var r=o>1?void 0:o?df(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&lf(t,s,r),r};let Ta=class extends E{firstUpdated(){this.addEventListeners()}addEventListeners(){this.shadowRoot.querySelectorAll("tp-step-bullet").forEach(t=>{t.addEventListener("click",this.handleBulletClick.bind(this))})}handleBulletClick(e){const t=e.currentTarget,s=t.getAttribute("step"),o=this.shadowRoot.querySelector(`tp-step[name="${s}"]::part(step)`);o&&o.scrollIntoView({behavior:"smooth",block:"center"}),this.shadowRoot.querySelectorAll("tp-step-bullet").forEach(n=>n.removeAttribute("active")),t.setAttribute("active","")}render(){return m`
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
      <gds-flex flex-direction="column" padding="0; l{xl 0}" gap="xl">
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
    `}};Y1([te(".steps")],Ta.prototype,"stepsContainer",2);Ta=Y1([O("tp-steps")],Ta);var cf=Object.defineProperty,gf=Object.getOwnPropertyDescriptor,hf=(e,t,s,o)=>{for(var r=o>1?void 0:o?gf(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&cf(t,s,r),r};let Hd=class extends E{render(){return m`
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
    `}};Hd=hf([O("tp-carousel-pink")],Hd);var pf=Object.defineProperty,uf=Object.getOwnPropertyDescriptor,Sn=(e,t,s,o)=>{for(var r=o>1?void 0:o?uf(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&pf(t,s,r),r};let Io=class extends E{constructor(){super(...arguments),this.amountPerMonth=500,this.years=5,this.total="26 325"}connectedCallback(){super.connectedCallback()}render(){return m`<gds-card variant="secondary" border-color="primary">
      <gds-flex gap="l" flex-direction="column">
        <div>
          <gds-input
            label="How much can you save per month?"
            value=${this.amountPerMonth}
            @input=${e=>this.amountPerMonth=e.currentTarget.value}
          ></gds-input>
          ${Fd}
        </div>
        <div>
          <gds-input
            label="How many years do you want to save?"
            value=${this.years}
            @input=${e=>this.years=e.currentTarget.value}
          ></gds-input>
          ${Fd}
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
    </gds-card>`}};Sn([P()],Io.prototype,"amountPerMonth",2);Sn([P()],Io.prototype,"years",2);Sn([P()],Io.prototype,"total",2);Io=Sn([O("tp-savings-calc")],Io);const Fd=m` <svg
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
</svg>`;var ff=Object.defineProperty,mf=Object.getOwnPropertyDescriptor,vf=(e,t,s,o)=>{for(var r=o>1?void 0:o?mf(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&ff(t,s,r),r};let jd=class extends E{render(){return m`
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
    `}};jd=vf([O("tp-empty-konton")],jd);var bf=Object.defineProperty,xf=Object.getOwnPropertyDescriptor,q1=(e,t,s,o)=>{for(var r=o>1?void 0:o?xf(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&bf(t,s,r),r};let Aa=class extends E{constructor(){super(...arguments),this.isVisible=!0}handleCloseClick(){this.isVisible=!1}render(){return m` <style>
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
          `:N}`}};q1([P()],Aa.prototype,"isVisible",2);Aa=q1([O("tp-empty-card")],Aa);var No=class extends L{};No._regularSVG='<path d="M8.75 8.75L14.5694 14.5694M15.25 9.75V15.25H9.75M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';No._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 15.25C16 15.6642 15.6642 16 15.25 16H9.75C9.33579 16 9 15.6642 9 15.25C9 14.8358 9.33579 14.5 9.75 14.5H13.4393L8.21967 9.28033C7.92678 8.98744 7.92678 8.51256 8.21967 8.21967C8.51256 7.92678 8.98744 7.92678 9.28033 8.21967L14.5 13.4393V9.75C14.5 9.33579 14.8358 9 15.25 9C15.6642 9 16 9.33579 16 9.75V15.25Z" fill="currentColor"/>';No._name="arrow-right-down-circle";No=a([k("gds-icon-arrow-right-down-circle")],No);var Go=class extends L{};Go._regularSVG='<path d="M4 15L12 7L20 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Go._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.25C12.1989 6.25 12.3897 6.32902 12.5303 6.46967L20.5303 14.4697C20.8232 14.7626 20.8232 15.2374 20.5303 15.5303C20.2374 15.8232 19.7626 15.8232 19.4697 15.5303L12 8.06066L4.53033 15.5303C4.23744 15.8232 3.76256 15.8232 3.46967 15.5303C3.17678 15.2374 3.17678 14.7626 3.46967 14.4697L11.4697 6.46967C11.6103 6.32902 11.8011 6.25 12 6.25Z" fill="currentColor"/>';Go._name="chevron-top";Go=a([k("gds-icon-chevron-top")],Go);var Zo=class extends L{};Zo._regularSVG='<path d="M6.86111 13.25H3.25L6.25 7.75H11.2292M6.86111 13.25L10.75 17.1389M6.86111 13.25L11.2292 7.75M10.75 17.1389V20.75L16.25 17.75V12.7708M10.75 17.1389L16.25 12.7708M16.25 12.7708C19.3333 9.94444 21.25 6.86111 21.25 2.75C17.1389 2.75 14.0556 4.66667 11.2292 7.75M4.80556 21.25H2.75V19.1944C2.75 18.0592 3.6703 17.1389 4.80556 17.1389C5.94081 17.1389 6.86111 18.0592 6.86111 19.1944C6.86111 20.3297 5.94081 21.25 4.80556 21.25Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>';Zo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 14.3242L11.5 17.501V19.4866L15.5 17.3048V14.3242ZM10 17.4495L6.55045 14H3.25C2.9853 14 2.7402 13.8605 2.60508 13.6328C2.46995 13.4052 2.46482 13.1232 2.59158 12.8909L5.59158 7.39086C5.723 7.14992 5.97554 7 6.25 7H10.902C13.7571 3.96176 16.9703 2 21.25 2C21.6642 2 22 2.33579 22 2.75C22 7.02966 20.0382 10.2429 17 13.098V17.75C17 18.0245 16.8501 18.277 16.6091 18.4084L11.1091 21.4084C10.8768 21.5352 10.5948 21.53 10.3672 21.3949C10.1395 21.2598 10 21.0147 10 20.75V17.4495ZM6.499 12.5L9.67577 8.5H6.69522L4.51341 12.5H6.499ZM2 19.1944C2 17.645 3.25609 16.3889 4.80556 16.3889C6.35502 16.3889 7.61111 17.645 7.61111 19.1944C7.61111 20.7439 6.35502 22 4.80556 22H2.75C2.33579 22 2 21.6642 2 21.25V19.1944Z" fill="currentColor"/>';Zo._name="rocket";Zo=a([k("gds-icon-rocket")],Zo);var yf=Object.defineProperty,wf=Object.getOwnPropertyDescriptor,Xt=(e,t,s,o)=>{for(var r=o>1?void 0:o?wf(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&yf(t,s,r),r};let bt=class extends E{constructor(){super(...arguments),this.activeCategory="Nöje",this.isExpanded=!1,this.label="Nöje",this.amount="13 523,00",this.amountDiff="Ökat",this.status="+3 567,00"}connectedCallback(){super.connectedCallback()}expand(){this.isExpanded=!this.isExpanded}renderIcon(){return this.isExpanded?m`<gds-icon-chevron-top></gds-icon-chevron-top>`:m`<gds-icon-chevron-bottom></gds-icon-chevron-bottom>`}renderCategory(e,t,s,o){this.activeCategory=e,this.label=e,this.amount=t,this.amountDiff=s,this.status=o}render(){return m`<tp-card>
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
            ></gds-flex
          ><gds-flex></gds-flex></gds-flex></gds-flex> <gds-flex margin="l 0 0 0" justify-content="center">
            <gds-flex flex-direction="column" gap="m">
                <gds-text text-align="center" font-size="heading-xs">You spend less money on food than before! <br>How about saving a little extra each <br> in a savings account?</gds-text>
                    <gds-flex gap="m" flex-direction="row"><gds-button href="#" rank="secondary" variant="positive">Not right now</gds-button>
                        <gds-button rank="primary" href="#" variant="positive" >Save more</gds-button>
                    </gds-flex>
                </gds-flex>
            </gds-flex>
          </gds-flex></gds-flex></gds-flex>
    </tp-card>`}};Xt([P()],bt.prototype,"activeCategory",2);Xt([P()],bt.prototype,"isExpanded",2);Xt([P()],bt.prototype,"label",2);Xt([P()],bt.prototype,"amount",2);Xt([P()],bt.prototype,"amountDiff",2);Xt([P()],bt.prototype,"status",2);bt=Xt([O("tp-expenses")],bt);var _f=Object.defineProperty,Cf=Object.getOwnPropertyDescriptor,_l=(e,t,s,o)=>{for(var r=o>1?void 0:o?Cf(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&_f(t,s,r),r};let Uo=class extends E{constructor(){super(...arguments),this.show=!1}render(){return m`<slot
      @slotchange=${()=>{setTimeout(()=>this.onShowChange(),0)}}
    ></slot>`}onShowChange(){console.log("show",this.show);const e=this.scrollHeight;this.show?(this.style.height=`${e}px`,this.style.opacity="1",this.style.marginBottom="var(--gds-space-3xl)",setTimeout(()=>{this.style.height="auto"},500)):(this.style.height="0",this.style.opacity="0",this.style.marginBottom="0")}};Uo.styles=D`
    :host {
      display: block;
      transition: all 0.5s;
      overflow: hidden;
      padding-bottom: 2px;
    }
  `;_l([g()],Uo.prototype,"show",2);_l([ne("show",{waitUntilFirstUpdate:!0}),r1()],Uo.prototype,"onShowChange",1);Uo=_l([O("tp-page-section")],Uo);var kf=Object.defineProperty,$f=Object.getOwnPropertyDescriptor,Es=(e,t,s,o)=>{for(var r=o>1?void 0:o?$f(t,s):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&kf(t,s,r),r};let Yt=class extends E{constructor(){super(...arguments),this.hasExternalAccounts=!1,this.hasAccounts=!1,this.hasCards=!1,this.hasSavings=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){var e,t,s;return m`
      <gds-flex flex-direction="column">
        <gds-container margin="0 0 3xl 0">
          <tp-page-header style="flex:1" @view-options-change=${()=>{this.hasAccounts=this.pageHeader.viewOptions.hasAccounts,this.hasCards=this.pageHeader.viewOptions.hasCards,this.hasSavings=this.pageHeader.viewOptions.hasSavings}}></tp-page-header>
        </gds-container>


        <gds-flex flex-direction="column" gap="xl" padding="xs">
          <tp-accounts-modal></tp-accounts-modal>
          <!-- <tp-transactions></tp-transactions> -->
          <!-- <tp-accounts></tp-accounts> -->
          <!-- <gds-carousel-trans></gds-carousel-trans> -->
        </gds-flex>

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
    `}};Es([te("tp-page-header")],Yt.prototype,"pageHeader",2);Es([g()],Yt.prototype,"hasExternalAccounts",2);Es([g()],Yt.prototype,"hasAccounts",2);Es([g()],Yt.prototype,"hasCards",2);Es([g()],Yt.prototype,"hasSavings",2);Yt=Es([O("tp-theme-page")],Yt);var Sf=Object.defineProperty,K1=(e,t,s,o)=>{for(var r=void 0,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=i(t,s,r)||r);return r&&Sf(t,s,r),r};const kl=class kl extends E{constructor(){super(...arguments),this.popoverOpen=!1,this.currentView="theme-page",this.handleKeyDown=t=>{if(t.key==="\\"){const s=this.querySelector("html");if(s){const o=s.getAttribute("gds-theme");s.setAttribute("color-scheme",o==="light"?"dark":"light")}}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.addEventListener("view-change",this.handleViewChange),document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){this.removeEventListener("view-change",this.handleViewChange),document.removeEventListener("keydown",this.handleKeyDown),super.disconnectedCallback()}handleViewChange(t){this.currentView=t.detail.view}render(){return m`
      <gds-theme color-scheme="light">
        <gds-header></gds-header>
        <gds-container>
          ${Qd(this.currentView,[["theme-page",()=>m`<tp-theme-page></tp-theme-page>`],["onboarding",()=>m`<gds-onboarding></gds-onboarding>`],["dashboard",()=>m`<gds-dashboard></gds-dashboard>`],["onboarding",()=>m`<gds-onboarding></gds-onboarding>`],["login",()=>m`<gds-login></gds-login>`],["form-validation",()=>m`<form-validation></form-validation>`],["datepicker",()=>m`<datepicker-example></datepicker-example>`],["calendar",()=>m`<calendar-example></calendar-example>`]],()=>m`No view selected`)}
        </gds-container>
      </gds-theme>
    `}};kl.styles=D`
    :host {
      --gds-test-color: red;
    }
  `;let Yo=kl;K1([g()],Yo.prototype,"popoverOpen");K1([P()],Yo.prototype,"currentView");customElements.define("sebgroup-root",Yo);
