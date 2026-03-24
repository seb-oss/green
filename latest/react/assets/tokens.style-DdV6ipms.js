import{e as Ke}from"./iframe-ZZ_Gn_js.js";var os=Object.defineProperty,is=Object.getOwnPropertyDescriptor,as=(n,e,t,s)=>{for(var r=s>1?void 0:s?is(e,t):e,c=n.length-1,l;c>=0;c--)(l=n[c])&&(r=(s?l(e,t,r):l(r))||r);return s&&r&&os(e,t,r),r},Re=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)},y=(n,e,t)=>(Re(n,e,"read from private field"),t?t.call(n):e.get(n)),x=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},I=(n,e,t,s)=>(Re(n,e,"write to private field"),e.set(n,t),t),P=(n,e,t)=>(Re(n,e,"access private method"),t);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=globalThis,Ue=ue.ShadowRoot&&(ue.ShadyCSS===void 0||ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ge=Symbol(),et=new WeakMap;let vt=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ue&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=et.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&et.set(t,e))}return e}toString(){return this.cssText}};const D=n=>new vt(typeof n=="string"?n:n+"",void 0,Ge),mt=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((s,r,c)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[c+1],n[0]);return new vt(t,n,Ge)},ls=(n,e)=>{if(Ue)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),r=ue.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,n.appendChild(s)}},tt=Ue?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return D(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:cs,defineProperty:ds,getOwnPropertyDescriptor:fs,getOwnPropertyNames:hs,getOwnPropertySymbols:us,getPrototypeOf:ys}=Object,N=globalThis,st=N.trustedTypes,gs=st?st.emptyScript:"",Ae=N.reactiveElementPolyfillSupport,oe=(n,e)=>n,ge={toAttribute(n,e){switch(e){case Boolean:n=n?gs:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Ie=(n,e)=>!cs(n,e),nt={attribute:!0,type:String,converter:ge,reflect:!1,useDefault:!1,hasChanged:Ie};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),N.litPropertyMetadata??(N.litPropertyMetadata=new WeakMap);let X=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=nt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&ds(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:c}=fs(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get:r,set(l){const g=r==null?void 0:r.call(this);c==null||c.call(this,l),this.requestUpdate(e,g,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??nt}static _$Ei(){if(this.hasOwnProperty(oe("elementProperties")))return;const e=ys(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(oe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(oe("properties"))){const t=this.properties,s=[...hs(t),...us(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(tt(r))}else e!==void 0&&t.push(tt(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ls(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var c;const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const l=(((c=s.converter)==null?void 0:c.toAttribute)!==void 0?s.converter:ge).toAttribute(t,s.type);this._$Em=e,l==null?this.removeAttribute(r):this.setAttribute(r,l),this._$Em=null}}_$AK(e,t){var c,l;const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const g=s.getPropertyOptions(r),f=typeof g.converter=="function"?{fromAttribute:g.converter}:((c=g.converter)==null?void 0:c.fromAttribute)!==void 0?g.converter:ge;this._$Em=r;const _=f.fromAttribute(t,g.type);this[r]=_??((l=this._$Ej)==null?void 0:l.get(r))??_,this._$Em=null}}requestUpdate(e,t,s,r=!1,c){var l;if(e!==void 0){const g=this.constructor;if(r===!1&&(c=this[e]),s??(s=g.getPropertyOptions(e)),!((s.hasChanged??Ie)(c,t)||s.useDefault&&s.reflect&&c===((l=this._$Ej)==null?void 0:l.get(e))&&!this.hasAttribute(g._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:c},l){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,l??t??this[e]),c!==!0||l!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[c,l]of this._$Ep)this[c]=l;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[c,l]of r){const{wrapped:g}=l,f=this[c];g!==!0||this._$AL.has(c)||f===void 0||this.C(c,void 0,l,f)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(r=>{var c;return(c=r.hostUpdate)==null?void 0:c.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[oe("elementProperties")]=new Map,X[oe("finalized")]=new Map,Ae==null||Ae({ReactiveElement:X}),(N.reactiveElementVersions??(N.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=globalThis,pe=ie.trustedTypes,rt=pe?pe.createPolicy("lit-html",{createHTML:n=>n}):void 0,_t="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,bt="?"+j,ps=`<${bt}>`,F=document,le=()=>F.createComment(""),ce=n=>n===null||typeof n!="object"&&typeof n!="function",je=Array.isArray,Ss=n=>je(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Be=`[ 	
\f\r]`,ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,it=/>/g,L=RegExp(`>|${Be}(?:([^\\s"'>=/]+)(${Be}*=${Be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),at=/'/g,lt=/"/g,Et=/^(?:script|style|textarea|title)$/i,vs=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),ms=vs(1),K=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),ct=new WeakMap,W=F.createTreeWalker(F,129);function wt(n,e){if(!je(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return rt!==void 0?rt.createHTML(e):e}const _s=(n,e)=>{const t=n.length-1,s=[];let r,c=e===2?"<svg>":e===3?"<math>":"",l=ne;for(let g=0;g<t;g++){const f=n[g];let _,E,b=-1,M=0;for(;M<f.length&&(l.lastIndex=M,E=l.exec(f),E!==null);)M=l.lastIndex,l===ne?E[1]==="!--"?l=ot:E[1]!==void 0?l=it:E[2]!==void 0?(Et.test(E[2])&&(r=RegExp("</"+E[2],"g")),l=L):E[3]!==void 0&&(l=L):l===L?E[0]===">"?(l=r??ne,b=-1):E[1]===void 0?b=-2:(b=l.lastIndex-E[2].length,_=E[1],l=E[3]===void 0?L:E[3]==='"'?lt:at):l===lt||l===at?l=L:l===ot||l===it?l=ne:(l=L,r=void 0);const C=l===L&&n[g+1].startsWith("/>")?" ":"";c+=l===ne?f+ps:b>=0?(s.push(_),f.slice(0,b)+_t+f.slice(b)+j+C):f+j+(b===-2?g:C)}return[wt(n,c+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class de{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let c=0,l=0;const g=e.length-1,f=this.parts,[_,E]=_s(e,t);if(this.el=de.createElement(_,s),W.currentNode=this.el.content,t===2||t===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(r=W.nextNode())!==null&&f.length<g;){if(r.nodeType===1){if(r.hasAttributes())for(const b of r.getAttributeNames())if(b.endsWith(_t)){const M=E[l++],C=r.getAttribute(b).split(j),Z=/([.?@])?(.*)/.exec(M);f.push({type:1,index:c,name:Z[2],strings:C,ctor:Z[1]==="."?Es:Z[1]==="?"?ws:Z[1]==="@"?xs:_e}),r.removeAttribute(b)}else b.startsWith(j)&&(f.push({type:6,index:c}),r.removeAttribute(b));if(Et.test(r.tagName)){const b=r.textContent.split(j),M=b.length-1;if(M>0){r.textContent=pe?pe.emptyScript:"";for(let C=0;C<M;C++)r.append(b[C],le()),W.nextNode(),f.push({type:2,index:++c});r.append(b[M],le())}}}else if(r.nodeType===8)if(r.data===bt)f.push({type:2,index:c});else{let b=-1;for(;(b=r.data.indexOf(j,b+1))!==-1;)f.push({type:7,index:c}),b+=j.length-1}c++}}static createElement(e,t){const s=F.createElement("template");return s.innerHTML=e,s}}function ee(n,e,t=n,s){var l,g;if(e===K)return e;let r=s!==void 0?(l=t._$Co)==null?void 0:l[s]:t._$Cl;const c=ce(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==c&&((g=r==null?void 0:r._$AO)==null||g.call(r,!1),c===void 0?r=void 0:(r=new c(n),r._$AT(n,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=r:t._$Cl=r),r!==void 0&&(e=ee(n,r._$AS(n,e.values),r,s)),e}class bs{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=((e==null?void 0:e.creationScope)??F).importNode(t,!0);W.currentNode=r;let c=W.nextNode(),l=0,g=0,f=s[0];for(;f!==void 0;){if(l===f.index){let _;f.type===2?_=new te(c,c.nextSibling,this,e):f.type===1?_=new f.ctor(c,f.name,f.strings,this,e):f.type===6&&(_=new $s(c,this,e)),this._$AV.push(_),f=s[++g]}l!==(f==null?void 0:f.index)&&(c=W.nextNode(),l++)}return W.currentNode=F,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class te{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ee(this,e,t),ce(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==K&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ss(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&ce(this._$AH)?this._$AA.nextSibling.data=e:this.T(F.createTextNode(e)),this._$AH=e}$(e){var c;const{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=de.createElement(wt(s.h,s.h[0]),this.options)),s);if(((c=this._$AH)==null?void 0:c._$AD)===r)this._$AH.p(t);else{const l=new bs(r,this),g=l.u(this.options);l.p(t),this.T(g),this._$AH=l}}_$AC(e){let t=ct.get(e.strings);return t===void 0&&ct.set(e.strings,t=new de(e)),t}k(e){je(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const c of e)r===t.length?t.push(s=new te(this.O(le()),this.O(le()),this,this.options)):s=t[r],s._$AI(c),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class _e{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,c){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=c,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=$}_$AI(e,t=this,s,r){const c=this.strings;let l=!1;if(c===void 0)e=ee(this,e,t,0),l=!ce(e)||e!==this._$AH&&e!==K,l&&(this._$AH=e);else{const g=e;let f,_;for(e=c[0],f=0;f<c.length-1;f++)_=ee(this,g[s+f],t,f),_===K&&(_=this._$AH[f]),l||(l=!ce(_)||_!==this._$AH[f]),_===$?e=$:e!==$&&(e+=(_??"")+c[f+1]),this._$AH[f]=_}l&&!r&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Es extends _e{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}class ws extends _e{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$)}}class xs extends _e{constructor(e,t,s,r,c){super(e,t,s,r,c),this.type=5}_$AI(e,t=this){if((e=ee(this,e,t,0)??$)===K)return;const s=this._$AH,r=e===$&&s!==$||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,c=e!==$&&(s===$||r);r&&this.element.removeEventListener(this.name,this,s),c&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class $s{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}}const Ls={I:te},Me=ie.litHtmlPolyfillSupport;Me==null||Me(de,te),(ie.litHtmlVersions??(ie.litHtmlVersions=[])).push("3.3.1");const As=(n,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let r=s._$litPart$;if(r===void 0){const c=(t==null?void 0:t.renderBefore)??null;s._$litPart$=r=new te(e.insertBefore(le(),c),c,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis;class ae extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=As(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return K}}var St;ae._$litElement$=!0,ae.finalized=!0,(St=V.litElementHydrateSupport)==null||St.call(V,{LitElement:ae});const Ce=V.litElementPolyfillSupport;Ce==null||Ce({LitElement:ae});(V.litElementVersions??(V.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bs={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:Ie},Ms=(n=Bs,e,t)=>{const{kind:s,metadata:r}=t;let c=globalThis.litPropertyMetadata.get(r);if(c===void 0&&globalThis.litPropertyMetadata.set(r,c=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),c.set(t.name,n),s==="accessor"){const{name:l}=t;return{set(g){const f=e.get.call(this);e.set.call(this,g),this.requestUpdate(l,f,n,!0,g)},init(g){return g!==void 0&&this.C(l,void 0,n,g),g}}}if(s==="setter"){const{name:l}=t;return function(g){const f=this[l];e.call(this,g),this.requestUpdate(l,f,n,!0,g)}}throw Error("Unsupported decorator location: "+s)};function Cs(n){return(e,t)=>typeof t=="object"?Ms(n,e,t):((s,r,c)=>{const l=r.hasOwnProperty(c);return r.constructor.createProperty(c,s),l?Object.getOwnPropertyDescriptor(r,c):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ts(n){return Cs({...n,state:!0,attribute:!1})}var T,Se,U,ve,z,k,R,me,Te,xt,Y,re,ke,$t;class ks{constructor(e){x(this,Te),x(this,Y),x(this,ke),x(this,T,!At()),x(this,Se,!1),x(this,U,[]),x(this,ve,[]),x(this,z,new Map),x(this,k,new Map),x(this,R,[]),x(this,me,[]),this.host=e,this.host.addController(this)}hostConnected(){P(this,ke,$t).call(this)}has(e){return y(this,T)?y(this,k).has(e):y(this,z).has(e)}inject(e,t){P(this,Te,xt).call(this,e,t),P(this,Y,re).call(this)}clear(e){y(this,T)?this.host.updateComplete.then(()=>{const t=y(this,k).get(e);t==null||t.remove(),y(this,k).delete(e)}):y(this,z).delete(e),P(this,Y,re).call(this)}clearAll(){y(this,T)?this.host.updateComplete.then(()=>{y(this,k).forEach(e=>e.remove()),y(this,R).forEach(e=>e.remove()),y(this,k).clear(),I(this,R,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],y(this,z).clear(),I(this,U,[]))}clearInitial(){y(this,T)?this.host.updateComplete.then(()=>{y(this,R).forEach(e=>e.remove()),I(this,R,[])}):I(this,U,[]),P(this,Y,re).call(this)}restoreInitial(){y(this,T)?y(this,me).forEach(e=>{y(this,R).push(e.cloneNode(!0))}):I(this,U,[...y(this,ve)]),P(this,Y,re).call(this)}}T=new WeakMap;Se=new WeakMap;U=new WeakMap;ve=new WeakMap;z=new WeakMap;k=new WeakMap;R=new WeakMap;me=new WeakMap;Te=new WeakSet;xt=function(n,e){if(y(this,T)){let t=y(this,k).get(n);t||(t=document.createElement("style"),y(this,k).set(n,t)),t.textContent=e.cssText}else{if(!this.host.shadowRoot||!e.styleSheet)return;y(this,z).set(n,e.styleSheet)}};Y=new WeakSet;re=function(){if(y(this,T))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(n=>{n.remove()}),y(this,R).forEach(n=>{var e;(e=this.host.shadowRoot)==null||e.appendChild(n)}),y(this,k).forEach(n=>{var e;(e=this.host.shadowRoot)==null||e.appendChild(n)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...y(this,U),...Array.from(y(this,z).values())]}};ke=new WeakSet;$t=function(){y(this,Se)||(y(this,T)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(n=>{y(this,R).push(n),y(this,me).push(n.cloneNode(!0))})}):this.host.shadowRoot&&y(this,U).length===0&&(I(this,U,[...this.host.shadowRoot.adoptedStyleSheets||[]]),I(this,ve,[...y(this,U)])),I(this,Se,!0))};function At(){try{return new CSSStyleSheet,!0}catch{return!1}}function dt(n){return n&&(n.includes("-")?n.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""):n.charAt(0).toUpperCase()+n.slice(1))}var ft={};/*! *****************************************************************************
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
***************************************************************************** */var ht;function Os(){if(ht)return ft;ht=1;var n;return(function(e){(function(t){var s=typeof Ke=="object"?Ke:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),r=c(e);typeof s.Reflect>"u"?s.Reflect=e:r=c(s.Reflect,r),t(r);function c(l,g){return function(f,_){typeof l[f]!="function"&&Object.defineProperty(l,f,{configurable:!0,writable:!0,value:_}),g&&g(f,_)}}})(function(t){var s=Object.prototype.hasOwnProperty,r=typeof Symbol=="function",c=r&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",l=r&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",g=typeof Object.create=="function",f={__proto__:[]}instanceof Array,_=!g&&!f,E={create:g?function(){return $e(Object.create(null))}:f?function(){return $e({__proto__:null})}:function(){return $e({})},has:_?function(o,i){return s.call(o,i)}:function(o,i){return i in o},get:_?function(o,i){return s.call(o,i)?o[i]:void 0}:function(o,i){return o[i]}},b=Object.getPrototypeOf(Function),M=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",C=!M&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:ss(),Z=!M&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:ns(),Pt=!M&&typeof WeakMap=="function"?WeakMap:rs(),fe=new Pt;function Dt(o,i,a,d){if(w(a)){if(!Je(o))throw new TypeError;if(!Xe(i))throw new TypeError;return zt(o,i)}else{if(!Je(o))throw new TypeError;if(!B(i))throw new TypeError;if(!B(d)&&!w(d)&&!J(d))throw new TypeError;return J(d)&&(d=void 0),a=O(a),Vt(o,i,a,d)}}t("decorate",Dt);function Rt(o,i){function a(d,u){if(!B(d))throw new TypeError;if(!w(u)&&!Yt(u))throw new TypeError;Ve(o,i,d,u)}return a}t("metadata",Rt);function Ut(o,i,a,d){if(!B(a))throw new TypeError;return w(d)||(d=O(d)),Ve(o,i,a,d)}t("defineMetadata",Ut);function Gt(o,i,a){if(!B(i))throw new TypeError;return w(a)||(a=O(a)),Le(o,i,a)}t("hasMetadata",Gt);function It(o,i,a){if(!B(i))throw new TypeError;return w(a)||(a=O(a)),we(o,i,a)}t("hasOwnMetadata",It);function jt(o,i,a){if(!B(i))throw new TypeError;return w(a)||(a=O(a)),We(o,i,a)}t("getMetadata",jt);function Nt(o,i,a){if(!B(i))throw new TypeError;return w(a)||(a=O(a)),ze(o,i,a)}t("getOwnMetadata",Nt);function Ht(o,i){if(!B(o))throw new TypeError;return w(i)||(i=O(i)),qe(o,i)}t("getMetadataKeys",Ht);function Lt(o,i){if(!B(o))throw new TypeError;return w(i)||(i=O(i)),Fe(o,i)}t("getOwnMetadataKeys",Lt);function Wt(o,i,a){if(!B(i))throw new TypeError;w(a)||(a=O(a));var d=se(i,a,!1);if(w(d)||!d.delete(o))return!1;if(d.size>0)return!0;var u=fe.get(i);return u.delete(a),u.size>0||fe.delete(i),!0}t("deleteMetadata",Wt);function zt(o,i){for(var a=o.length-1;a>=0;--a){var d=o[a],u=d(i);if(!w(u)&&!J(u)){if(!Xe(u))throw new TypeError;i=u}}return i}function Vt(o,i,a,d){for(var u=o.length-1;u>=0;--u){var A=o[u],p=A(i,a,d);if(!w(p)&&!J(p)){if(!B(p))throw new TypeError;d=p}}return d}function se(o,i,a){var d=fe.get(o);if(w(d)){if(!a)return;d=new C,fe.set(o,d)}var u=d.get(i);if(w(u)){if(!a)return;u=new C,d.set(i,u)}return u}function Le(o,i,a){var d=we(o,i,a);if(d)return!0;var u=xe(i);return J(u)?!1:Le(o,u,a)}function we(o,i,a){var d=se(i,a,!1);return w(d)?!1:Jt(d.has(o))}function We(o,i,a){var d=we(o,i,a);if(d)return ze(o,i,a);var u=xe(i);if(!J(u))return We(o,u,a)}function ze(o,i,a){var d=se(i,a,!1);if(!w(d))return d.get(o)}function Ve(o,i,a,d){var u=se(a,d,!0);u.set(o,i)}function qe(o,i){var a=Fe(o,i),d=xe(o);if(d===null)return a;var u=qe(d,i);if(u.length<=0)return a;if(a.length<=0)return u;for(var A=new Z,p=[],S=0,h=a;S<h.length;S++){var v=h[S],m=A.has(v);m||(A.add(v),p.push(v))}for(var G=0,Qe=u;G<Qe.length;G++){var v=Qe[G],m=A.has(v);m||(A.add(v),p.push(v))}return p}function Fe(o,i){var a=[],d=se(o,i,!1);if(w(d))return a;for(var u=d.keys(),A=Qt(u),p=0;;){var S=es(A);if(!S)return a.length=p,a;var h=Kt(S);try{a[p]=h}catch(v){try{ts(A)}finally{throw v}}p++}}function Ze(o){if(o===null)return 1;switch(typeof o){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return o===null?1:6;default:return 6}}function w(o){return o===void 0}function J(o){return o===null}function qt(o){return typeof o=="symbol"}function B(o){return typeof o=="object"?o!==null:typeof o=="function"}function Ft(o,i){switch(Ze(o)){case 0:return o;case 1:return o;case 2:return o;case 3:return o;case 4:return o;case 5:return o}var a="string",d=Ye(o,c);if(d!==void 0){var u=d.call(o,a);if(B(u))throw new TypeError;return u}return Zt(o)}function Zt(o,i){var a,d,u;{var A=o.toString;if(he(A)){var d=A.call(o);if(!B(d))return d}var a=o.valueOf;if(he(a)){var d=a.call(o);if(!B(d))return d}}throw new TypeError}function Jt(o){return!!o}function Xt(o){return""+o}function O(o){var i=Ft(o);return qt(i)?i:Xt(i)}function Je(o){return Array.isArray?Array.isArray(o):o instanceof Object?o instanceof Array:Object.prototype.toString.call(o)==="[object Array]"}function he(o){return typeof o=="function"}function Xe(o){return typeof o=="function"}function Yt(o){switch(Ze(o)){case 3:return!0;case 4:return!0;default:return!1}}function Ye(o,i){var a=o[i];if(a!=null){if(!he(a))throw new TypeError;return a}}function Qt(o){var i=Ye(o,l);if(!he(i))throw new TypeError;var a=i.call(o);if(!B(a))throw new TypeError;return a}function Kt(o){return o.value}function es(o){var i=o.next();return i.done?!1:i}function ts(o){var i=o.return;i&&i.call(o)}function xe(o){var i=Object.getPrototypeOf(o);if(typeof o!="function"||o===b||i!==b)return i;var a=o.prototype,d=a&&Object.getPrototypeOf(a);if(d==null||d===Object.prototype)return i;var u=d.constructor;return typeof u!="function"||u===o?i:u}function ss(){var o={},i=[],a=(function(){function p(S,h,v){this._index=0,this._keys=S,this._values=h,this._selector=v}return p.prototype["@@iterator"]=function(){return this},p.prototype[l]=function(){return this},p.prototype.next=function(){var S=this._index;if(S>=0&&S<this._keys.length){var h=this._selector(this._keys[S],this._values[S]);return S+1>=this._keys.length?(this._index=-1,this._keys=i,this._values=i):this._index++,{value:h,done:!1}}return{value:void 0,done:!0}},p.prototype.throw=function(S){throw this._index>=0&&(this._index=-1,this._keys=i,this._values=i),S},p.prototype.return=function(S){return this._index>=0&&(this._index=-1,this._keys=i,this._values=i),{value:S,done:!0}},p})();return(function(){function p(){this._keys=[],this._values=[],this._cacheKey=o,this._cacheIndex=-2}return Object.defineProperty(p.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),p.prototype.has=function(S){return this._find(S,!1)>=0},p.prototype.get=function(S){var h=this._find(S,!1);return h>=0?this._values[h]:void 0},p.prototype.set=function(S,h){var v=this._find(S,!0);return this._values[v]=h,this},p.prototype.delete=function(S){var h=this._find(S,!1);if(h>=0){for(var v=this._keys.length,m=h+1;m<v;m++)this._keys[m-1]=this._keys[m],this._values[m-1]=this._values[m];return this._keys.length--,this._values.length--,S===this._cacheKey&&(this._cacheKey=o,this._cacheIndex=-2),!0}return!1},p.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=o,this._cacheIndex=-2},p.prototype.keys=function(){return new a(this._keys,this._values,d)},p.prototype.values=function(){return new a(this._keys,this._values,u)},p.prototype.entries=function(){return new a(this._keys,this._values,A)},p.prototype["@@iterator"]=function(){return this.entries()},p.prototype[l]=function(){return this.entries()},p.prototype._find=function(S,h){return this._cacheKey!==S&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=S)),this._cacheIndex<0&&h&&(this._cacheIndex=this._keys.length,this._keys.push(S),this._values.push(void 0)),this._cacheIndex},p})();function d(p,S){return p}function u(p,S){return S}function A(p,S){return[p,S]}}function ns(){return(function(){function o(){this._map=new C}return Object.defineProperty(o.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),o.prototype.has=function(i){return this._map.has(i)},o.prototype.add=function(i){return this._map.set(i,i),this},o.prototype.delete=function(i){return this._map.delete(i)},o.prototype.clear=function(){this._map.clear()},o.prototype.keys=function(){return this._map.keys()},o.prototype.values=function(){return this._map.values()},o.prototype.entries=function(){return this._map.entries()},o.prototype["@@iterator"]=function(){return this.keys()},o.prototype[l]=function(){return this.keys()},o})()}function rs(){var o=16,i=E.create(),a=d();return(function(){function h(){this._key=d()}return h.prototype.has=function(v){var m=u(v,!1);return m!==void 0?E.has(m,this._key):!1},h.prototype.get=function(v){var m=u(v,!1);return m!==void 0?E.get(m,this._key):void 0},h.prototype.set=function(v,m){var G=u(v,!0);return G[this._key]=m,this},h.prototype.delete=function(v){var m=u(v,!1);return m!==void 0?delete m[this._key]:!1},h.prototype.clear=function(){this._key=d()},h})();function d(){var h;do h="@@WeakMap@@"+S();while(E.has(i,h));return i[h]=!0,h}function u(h,v){if(!s.call(h,a)){if(!v)return;Object.defineProperty(h,a,{value:E.create()})}return h[a]}function A(h,v){for(var m=0;m<v;++m)h[m]=Math.random()*255|0;return h}function p(h){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(h)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(h)):A(new Uint8Array(h),h):A(new Array(h),h)}function S(){var h=p(o);h[6]=h[6]&79|64,h[8]=h[8]&191|128;for(var v="",m=0;m<o;++m){var G=h[m];(m===4||m===6||m===8)&&(v+="-"),G<16&&(v+="0"),v+=G.toString(16).toLowerCase()}return v}}function $e(o){return o.__=void 0,delete o.__,o}})})(n||(n={})),ft}Os();class Ne extends ae{constructor(){super(),this.semanticVersion="2.37.4",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new ks(this)}static define(){}connectedCallback(){var e;super.connectedCallback(),this.setAttribute("gds-element",((e=this.gdsElementName)==null?void 0:e.toString())||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(e,t){const s={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new Event(e,s)),this.dispatchEvent(new Event(dt(e),s))].every(r=>r!==!1)}dispatchCustomEvent(e,t={}){const s={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new CustomEvent(e,s)),this.dispatchEvent(new CustomEvent(dt(e),s))].every(r=>r!==!1)}}Ne.isDefined=!1;Ne.styleExpressionBaseSelector=":host";as([Ts()],Ne.prototype,"_isUsingTransitionalStyles",2);const H="-011c8e";class He{static get instance(){var e;return(e=globalThis.__gdsElementLookupTable)!=null&&e[H]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[H]:new Map}),globalThis.__gdsElementLookupTable[H]}}const Ws=(n,e)=>function(t){var s;return s=class extends t{constructor(){super(...arguments),this.gdsElementName=n}static define(){if(s.isDefined)return;const c=globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?n:n+H;customElements.get(c)||(s.isDefined=!0,He.instance.set(n,c),customElements.define(c,s),e!=null&&e.dependsOn&&e.dependsOn.forEach(l=>l.define()))}},s.isDefined=!1,s},ut=new WeakMap;function Ps(n,...e){let t=ut.get(n);return t||(t=yt(n),t.raw=yt(n.raw),ut.set(n,t)),[t,...e]}const yt=n=>n.map(e=>{for(const[t,s]of He.instance.entries())e=e.replace(new RegExp(`${t}(?![-a-z])`,"mg"),s);return e});function Ds(n){return(e,...t)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return n(e,...t);const[s,...r]=Ps(e,...t);return n(s,...r)}}const zs=Ds(ms);function Vs(n,e=!1){return He.instance.get(n)??n+(e?H:"")}const Bt=`/**
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
  --gds-sys-text-display-2xl: 450 5.125rem/5.625rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-xl: 450 4rem/4.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-l: 450 3rem/3.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-m: 450 2.25rem/2.75rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-s: 450 2rem/2.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-xl: 450 2rem/2.75rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-l: 450 1.75rem/2.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-m: 450 1.5rem/2rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-s: 450 1.25rem/1.75rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-xs: 450 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-2xs: 450 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-2xl: 450 2rem/2.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-xl: 450 1.75rem/2.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-l: 450 1.5rem/2rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-m: 450 1.25rem/1.75rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-s: 450 1.125rem/1.625rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-xs: 450 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-book-m: 450 1rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-book-s: 450 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-book-xs: 450 0.75rem/1rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-regular-m: 400 1rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-regular-s: 400 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-regular-xs: 400 0.75rem/1rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-medium-m: 500 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-medium-s: 500 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-book-m: 450 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-book-s: 450 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-regular-l: 400 1.25rem/1.625rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-regular-m: 400 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-regular-s: 400 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-italic-m: italic 400 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-italic-s: italic 400 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
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
  --gds-sys-radius-max: 999px;`,gt=`/**
 * Do not edit directly, this file was auto-generated.
 */


  color-scheme: dark;
  --gds-sys-color-l1-neutral-01: #0a0b0b;
  --gds-sys-color-l1-neutral-02: #0a0b0b;
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
  --gds-sys-color-border-subtle-01: #454a48;
  --gds-sys-color-border-subtle-02: #282a29;
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
  --gds-sys-color-state-warning-06: #f19e38 20%;`,pt=`/**
 * Do not edit directly, this file was auto-generated.
 */


  color-scheme: light;
  --gds-sys-color-l1-neutral-01: #ffffff;
  --gds-sys-color-l1-neutral-02: #f4f5f5;
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
  --gds-sys-color-state-warning-06: #8f530a 16%;`,Mt=`/**
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
  --gds-sys-shadow-2xl-02: 0px 0px 0px 0px transparent;`;var Rs={};const be=typeof process<"u"&&Rs!==void 0,qs=/iPad|iPhone|iPod/.test(be?"":navigator.userAgent);var ye,q,Q,Ee,Oe,Ct,Pe,Tt,De,kt;function Us(){return be?[]:[...document.adoptedStyleSheets]}const Gs=class Ot{constructor(){x(this,Oe),x(this,Pe),x(this,De),x(this,ye,!At()),x(this,q,new Map),x(this,Q,new Map),x(this,Ee,Us())}static get instance(){var e;return(e=globalThis.__gdsGlobalStylesRegistryScoped)!=null&&e[H]||(globalThis.__gdsGlobalStylesRegistryScoped={...globalThis.__gdsGlobalStylesRegistryScoped,[H]:new Ot}),globalThis.__gdsGlobalStylesRegistryScoped[H]}injectGlobalStyles(e,t){if(y(this,ye)){const s=Array.isArray(t)?t.map(r=>r.toString()).join(""):t.toString();P(this,Oe,Ct).call(this,e,s)}else t.styleSheet&&P(this,Pe,Tt).call(this,e,t.styleSheet)}clearGlobalStyles(e){if(y(this,ye)){const t=y(this,Q).get(e);t&&t.parentNode&&(t.parentNode.removeChild(t),y(this,Q).delete(e))}else P(this,De,kt).call(this,e)}};ye=new WeakMap;q=new WeakMap;Q=new WeakMap;Ee=new WeakMap;Oe=new WeakSet;Ct=function(n,e){if(be)return;let t=y(this,Q).get(n);t||(t=document.createElement("style"),y(this,Q).set(n,t)),t.textContent=e,document.head.appendChild(t)};Pe=new WeakSet;Tt=function(n,e){be||(y(this,q).set(n,e),document.adoptedStyleSheets=[...y(this,Ee),...Array.from(y(this,q).values())])};De=new WeakSet;kt=function(n){y(this,q).has(n)&&(y(this,q).delete(n),document.adoptedStyleSheets=[...y(this,Ee),...Array.from(y(this,q).values())])};let Is=Gs;const Fs=[mt`
    :host {
      ${D(Bt)}
      ${D(Mt)}
    }
  `];Is.instance.injectGlobalStyles("root-tokens",mt`
    :root {
      ${D(Bt)}
      ${D(Mt)}
    }
    :root:not([gds-theme]),
    :root[gds-theme='light'] {
      ${D(pt)}
    }
    :root[gds-theme='dark'] {
      ${D(gt)}
    }
    :root[gds-theme='auto'] {
      @media (prefers-color-scheme: dark) {
        ${D(gt)}
      }
      @media (prefers-color-scheme: light) {
        ${D(pt)}
      }
    }
  `);export{$ as E,Ne as G,K as T,H as V,Ls as Z,as as _,Vs as a,x as b,P as c,y as d,I as e,be as f,Ws as g,zs as h,mt as i,D as j,Is as k,qs as l,gt as m,Cs as n,pt as o,Ts as r,At as s,Fs as t,ms as x};
