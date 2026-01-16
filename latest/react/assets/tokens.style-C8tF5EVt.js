import{h as Je}from"./iframe-CnL1hne7.js";var ts=Object.defineProperty,ss=Object.getOwnPropertyDescriptor,yt=r=>{throw TypeError(r)},ns=(r,e,t,s)=>{for(var n=s>1?void 0:s?ss(e,t):e,c=r.length-1,l;c>=0;c--)(l=r[c])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&ts(e,t,n),n},Te=(r,e,t)=>e.has(r)||yt("Cannot "+t),p=(r,e,t)=>(Te(r,e,"read from private field"),t?t.call(r):e.get(r)),B=(r,e,t)=>e.has(r)?yt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),j=(r,e,t,s)=>(Te(r,e,"write to private field"),e.set(r,t),t),I=(r,e,t)=>(Te(r,e,"access private method"),t);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=globalThis,Oe=fe.ShadowRoot&&(fe.ShadyCSS===void 0||fe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ke=Symbol(),Xe=new WeakMap;let gt=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ke)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Oe&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Xe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Xe.set(t,e))}return e}toString(){return this.cssText}};const P=r=>new gt(typeof r=="string"?r:r+"",void 0,ke),pt=(r,...e)=>{const t=r.length===1?r[0]:e.reduce(((s,n,c)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[c+1]),r[0]);return new gt(t,r,ke)},rs=(r,e)=>{if(Oe)r.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const s=document.createElement("style"),n=fe.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=t.cssText,r.appendChild(s)}},Ye=Oe?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return P(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:os,defineProperty:is,getOwnPropertyDescriptor:as,getOwnPropertyNames:ls,getOwnPropertySymbols:cs,getPrototypeOf:ds}=Object,N=globalThis,Qe=N.trustedTypes,fs=Qe?Qe.emptyScript:"",$e=N.reactiveElementPolyfillSupport,ne=(r,e)=>r,ue={toAttribute(r,e){switch(e){case Boolean:r=r?fs:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Pe=(r,e)=>!os(r,e),Ke={attribute:!0,type:String,converter:ue,reflect:!1,useDefault:!1,hasChanged:Pe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),N.litPropertyMetadata??(N.litPropertyMetadata=new WeakMap);let X=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ke){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(e,s,t);n!==void 0&&is(this.prototype,e,n)}}static getPropertyDescriptor(e,t,s){const{get:n,set:c}=as(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get:n,set(l){const y=n==null?void 0:n.call(this);c==null||c.call(this,l),this.requestUpdate(e,y,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ke}static _$Ei(){if(this.hasOwnProperty(ne("elementProperties")))return;const e=ds(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ne("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ne("properties"))){const t=this.properties,s=[...ls(t),...cs(t)];for(const n of s)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,n]of t)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const n=this._$Eu(t,s);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const n of s)t.unshift(Ye(n))}else e!==void 0&&t.push(Ye(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach((t=>t(this)))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return rs(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach((t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach((t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)}))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var c;const s=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,s);if(n!==void 0&&s.reflect===!0){const l=(((c=s.converter)==null?void 0:c.toAttribute)!==void 0?s.converter:ue).toAttribute(t,s.type);this._$Em=e,l==null?this.removeAttribute(n):this.setAttribute(n,l),this._$Em=null}}_$AK(e,t){var c,l;const s=this.constructor,n=s._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const y=s.getPropertyOptions(n),f=typeof y.converter=="function"?{fromAttribute:y.converter}:((c=y.converter)==null?void 0:c.fromAttribute)!==void 0?y.converter:ue;this._$Em=n;const _=f.fromAttribute(t,y.type);this[n]=_??((l=this._$Ej)==null?void 0:l.get(n))??_,this._$Em=null}}requestUpdate(e,t,s){var n;if(e!==void 0){const c=this.constructor,l=this[e];if(s??(s=c.getPropertyOptions(e)),!((s.hasChanged??Pe)(l,t)||s.useDefault&&s.reflect&&l===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(c._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:n,wrapped:c},l){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,l??t??this[e]),c!==!0||l!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[c,l]of this._$Ep)this[c]=l;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[c,l]of n){const{wrapped:y}=l,f=this[c];y!==!0||this._$AL.has(c)||f===void 0||this.C(c,void 0,l,f)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach((n=>{var c;return(c=n.hostUpdate)==null?void 0:c.call(n)})),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach((s=>{var n;return(n=s.hostUpdated)==null?void 0:n.call(s)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach((t=>this._$ET(t,this[t])))),this._$EM()}updated(e){}firstUpdated(e){}};X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[ne("elementProperties")]=new Map,X[ne("finalized")]=new Map,$e==null||$e({ReactiveElement:X}),(N.reactiveElementVersions??(N.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=globalThis,ye=re.trustedTypes,et=ye?ye.createPolicy("lit-html",{createHTML:r=>r}):void 0,St="$lit$",H=`lit$${Math.random().toFixed(9).slice(2)}$`,vt="?"+H,hs=`<${vt}>`,F=document,ie=()=>F.createComment(""),ae=r=>r===null||typeof r!="object"&&typeof r!="function",De=Array.isArray,us=r=>De(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Ae=`[ 	
\f\r]`,te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,st=/>/g,W=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,rt=/"/g,mt=/^(?:script|style|textarea|title)$/i,ys=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),gs=ys(1),Y=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),ot=new WeakMap,V=F.createTreeWalker(F,129);function _t(r,e){if(!De(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(e):e}const ps=(r,e)=>{const t=r.length-1,s=[];let n,c=e===2?"<svg>":e===3?"<math>":"",l=te;for(let y=0;y<t;y++){const f=r[y];let _,E,b=-1,M=0;for(;M<f.length&&(l.lastIndex=M,E=l.exec(f),E!==null);)M=l.lastIndex,l===te?E[1]==="!--"?l=tt:E[1]!==void 0?l=st:E[2]!==void 0?(mt.test(E[2])&&(n=RegExp("</"+E[2],"g")),l=W):E[3]!==void 0&&(l=W):l===W?E[0]===">"?(l=n??te,b=-1):E[1]===void 0?b=-2:(b=l.lastIndex-E[2].length,_=E[1],l=E[3]===void 0?W:E[3]==='"'?rt:nt):l===rt||l===nt?l=W:l===tt||l===st?l=te:(l=W,n=void 0);const C=l===W&&r[y+1].startsWith("/>")?" ":"";c+=l===te?f+hs:b>=0?(s.push(_),f.slice(0,b)+St+f.slice(b)+H+C):f+H+(b===-2?y:C)}return[_t(r,c+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class le{constructor({strings:e,_$litType$:t},s){let n;this.parts=[];let c=0,l=0;const y=e.length-1,f=this.parts,[_,E]=ps(e,t);if(this.el=le.createElement(_,s),V.currentNode=this.el.content,t===2||t===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(n=V.nextNode())!==null&&f.length<y;){if(n.nodeType===1){if(n.hasAttributes())for(const b of n.getAttributeNames())if(b.endsWith(St)){const M=E[l++],C=n.getAttribute(b).split(H),Z=/([.?@])?(.*)/.exec(M);f.push({type:1,index:c,name:Z[2],strings:C,ctor:Z[1]==="."?vs:Z[1]==="?"?ms:Z[1]==="@"?_s:_e}),n.removeAttribute(b)}else b.startsWith(H)&&(f.push({type:6,index:c}),n.removeAttribute(b));if(mt.test(n.tagName)){const b=n.textContent.split(H),M=b.length-1;if(M>0){n.textContent=ye?ye.emptyScript:"";for(let C=0;C<M;C++)n.append(b[C],ie()),V.nextNode(),f.push({type:2,index:++c});n.append(b[M],ie())}}}else if(n.nodeType===8)if(n.data===vt)f.push({type:2,index:c});else{let b=-1;for(;(b=n.data.indexOf(H,b+1))!==-1;)f.push({type:7,index:c}),b+=H.length-1}c++}}static createElement(e,t){const s=F.createElement("template");return s.innerHTML=e,s}}function Q(r,e,t=r,s){var l,y;if(e===Y)return e;let n=s!==void 0?(l=t._$Co)==null?void 0:l[s]:t._$Cl;const c=ae(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==c&&((y=n==null?void 0:n._$AO)==null||y.call(n,!1),c===void 0?n=void 0:(n=new c(r),n._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=n:t._$Cl=n),n!==void 0&&(e=Q(r,n._$AS(r,e.values),n,s)),e}class Ss{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,n=((e==null?void 0:e.creationScope)??F).importNode(t,!0);V.currentNode=n;let c=V.nextNode(),l=0,y=0,f=s[0];for(;f!==void 0;){if(l===f.index){let _;f.type===2?_=new K(c,c.nextSibling,this,e):f.type===1?_=new f.ctor(c,f.name,f.strings,this,e):f.type===6&&(_=new bs(c,this,e)),this._$AV.push(_),f=s[++y]}l!==(f==null?void 0:f.index)&&(c=V.nextNode(),l++)}return V.currentNode=F,n}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class K{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,n){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),ae(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==Y&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):us(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&ae(this._$AH)?this._$AA.nextSibling.data=e:this.T(F.createTextNode(e)),this._$AH=e}$(e){var c;const{values:t,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=le.createElement(_t(s.h,s.h[0]),this.options)),s);if(((c=this._$AH)==null?void 0:c._$AD)===n)this._$AH.p(t);else{const l=new Ss(n,this),y=l.u(this.options);l.p(t),this.T(y),this._$AH=l}}_$AC(e){let t=ot.get(e.strings);return t===void 0&&ot.set(e.strings,t=new le(e)),t}k(e){De(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,n=0;for(const c of e)n===t.length?t.push(s=new K(this.O(ie()),this.O(ie()),this,this.options)):s=t[n],s._$AI(c),n++;n<t.length&&(this._$AR(s&&s._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class _e{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,n,c){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=c,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=x}_$AI(e,t=this,s,n){const c=this.strings;let l=!1;if(c===void 0)e=Q(this,e,t,0),l=!ae(e)||e!==this._$AH&&e!==Y,l&&(this._$AH=e);else{const y=e;let f,_;for(e=c[0],f=0;f<c.length-1;f++)_=Q(this,y[s+f],t,f),_===Y&&(_=this._$AH[f]),l||(l=!ae(_)||_!==this._$AH[f]),_===x?e=x:e!==x&&(e+=(_??"")+c[f+1]),this._$AH[f]=_}l&&!n&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class vs extends _e{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}}class ms extends _e{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}}class _s extends _e{constructor(e,t,s,n,c){super(e,t,s,n,c),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??x)===Y)return;const s=this._$AH,n=e===x&&s!==x||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,c=e!==x&&(s===x||n);n&&this.element.removeEventListener(this.name,this,s),c&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class bs{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const Is={I:K},Be=re.litHtmlPolyfillSupport;Be==null||Be(le,K),(re.litHtmlVersions??(re.litHtmlVersions=[])).push("3.3.1");const Es=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let n=s._$litPart$;if(n===void 0){const c=(t==null?void 0:t.renderBefore)??null;s._$litPart$=n=new K(e.insertBefore(ie(),c),c,void 0,t??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis;class oe extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Es(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Y}}var ut;oe._$litElement$=!0,oe.finalized=!0,(ut=q.litElementHydrateSupport)==null||ut.call(q,{LitElement:oe});const Me=q.litElementPolyfillSupport;Me==null||Me({LitElement:oe});(q.litElementVersions??(q.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ws={attribute:!0,type:String,converter:ue,reflect:!1,hasChanged:Pe},xs=(r=ws,e,t)=>{const{kind:s,metadata:n}=t;let c=globalThis.litPropertyMetadata.get(n);if(c===void 0&&globalThis.litPropertyMetadata.set(n,c=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),c.set(t.name,r),s==="accessor"){const{name:l}=t;return{set(y){const f=e.get.call(this);e.set.call(this,y),this.requestUpdate(l,f,r)},init(y){return y!==void 0&&this.C(l,void 0,r,y),y}}}if(s==="setter"){const{name:l}=t;return function(y){const f=this[l];e.call(this,y),this.requestUpdate(l,f,r)}}throw Error("Unsupported decorator location: "+s)};function $s(r){return(e,t)=>typeof t=="object"?xs(r,e,t):((s,n,c)=>{const l=n.hasOwnProperty(c);return n.constructor.createProperty(c,s),l?Object.getOwnPropertyDescriptor(n,c):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function As(r){return $s({...r,state:!0,attribute:!1})}var T,ge,R,pe,z,O,D,Se,G,bt,se,Et;class Bs{constructor(e){B(this,G),B(this,T,!wt()),B(this,ge,!1),B(this,R,[]),B(this,pe,[]),B(this,z,new Map),B(this,O,new Map),B(this,D,[]),B(this,Se,[]),this.host=e,this.host.addController(this)}hostConnected(){I(this,G,Et).call(this)}has(e){return p(this,T)?p(this,O).has(e):p(this,z).has(e)}inject(e,t){I(this,G,bt).call(this,e,t),I(this,G,se).call(this)}clear(e){p(this,T)?this.host.updateComplete.then(()=>{const t=p(this,O).get(e);t==null||t.remove(),p(this,O).delete(e)}):p(this,z).delete(e),I(this,G,se).call(this)}clearAll(){p(this,T)?this.host.updateComplete.then(()=>{p(this,O).forEach(e=>e.remove()),p(this,D).forEach(e=>e.remove()),p(this,O).clear(),j(this,D,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],p(this,z).clear(),j(this,R,[]))}clearInitial(){p(this,T)?this.host.updateComplete.then(()=>{p(this,D).forEach(e=>e.remove()),j(this,D,[])}):j(this,R,[]),I(this,G,se).call(this)}restoreInitial(){p(this,T)?p(this,Se).forEach(e=>{p(this,D).push(e.cloneNode(!0))}):j(this,R,[...p(this,pe)]),I(this,G,se).call(this)}}T=new WeakMap;ge=new WeakMap;R=new WeakMap;pe=new WeakMap;z=new WeakMap;O=new WeakMap;D=new WeakMap;Se=new WeakMap;G=new WeakSet;bt=function(r,e){if(p(this,T)){let t=p(this,O).get(r);t||(t=document.createElement("style"),p(this,O).set(r,t)),t.textContent=e.cssText}else{if(!this.host.shadowRoot||!e.styleSheet)return;p(this,z).set(r,e.styleSheet)}};se=function(){if(p(this,T))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(r=>{r.remove()}),p(this,D).forEach(r=>{var e;(e=this.host.shadowRoot)==null||e.appendChild(r)}),p(this,O).forEach(r=>{var e;(e=this.host.shadowRoot)==null||e.appendChild(r)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...p(this,R),...Array.from(p(this,z).values())]}};Et=function(){p(this,ge)||(p(this,T)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(r=>{p(this,D).push(r),p(this,Se).push(r.cloneNode(!0))})}):this.host.shadowRoot&&p(this,R).length===0&&(j(this,R,[...this.host.shadowRoot.adoptedStyleSheets||[]]),j(this,pe,[...p(this,R)])),j(this,ge,!0))};function wt(){try{return new CSSStyleSheet,!0}catch{return!1}}var it={};/*! *****************************************************************************
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
***************************************************************************** */var at;function Ms(){if(at)return it;at=1;var r;return(function(e){(function(t){var s=typeof Je=="object"?Je:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),n=c(e);typeof s.Reflect>"u"?s.Reflect=e:n=c(s.Reflect,n),t(n);function c(l,y){return function(f,_){typeof l[f]!="function"&&Object.defineProperty(l,f,{configurable:!0,writable:!0,value:_}),y&&y(f,_)}}})(function(t){var s=Object.prototype.hasOwnProperty,n=typeof Symbol=="function",c=n&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",l=n&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",y=typeof Object.create=="function",f={__proto__:[]}instanceof Array,_=!y&&!f,E={create:y?function(){return xe(Object.create(null))}:f?function(){return xe({__proto__:null})}:function(){return xe({})},has:_?function(o,i){return s.call(o,i)}:function(o,i){return i in o},get:_?function(o,i){return s.call(o,i)?o[i]:void 0}:function(o,i){return o[i]}},b=Object.getPrototypeOf(Function),M=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",C=!M&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:Qt(),Z=!M&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:Kt(),Ct=!M&&typeof WeakMap=="function"?WeakMap:es(),ce=new Ct;function Tt(o,i,a,d){if(w(a)){if(!ze(o))throw new TypeError;if(!qe(i))throw new TypeError;return Ht(o,i)}else{if(!ze(o))throw new TypeError;if(!A(i))throw new TypeError;if(!A(d)&&!w(d)&&!J(d))throw new TypeError;return J(d)&&(d=void 0),a=k(a),Nt(o,i,a,d)}}t("decorate",Tt);function Ot(o,i){function a(d,u){if(!A(d))throw new TypeError;if(!w(u)&&!Ft(u))throw new TypeError;Ne(o,i,d,u)}return a}t("metadata",Ot);function kt(o,i,a,d){if(!A(a))throw new TypeError;return w(d)||(d=k(d)),Ne(o,i,a,d)}t("defineMetadata",kt);function Pt(o,i,a){if(!A(i))throw new TypeError;return w(a)||(a=k(a)),Ie(o,i,a)}t("hasMetadata",Pt);function Dt(o,i,a){if(!A(i))throw new TypeError;return w(a)||(a=k(a)),Ee(o,i,a)}t("hasOwnMetadata",Dt);function Rt(o,i,a){if(!A(i))throw new TypeError;return w(a)||(a=k(a)),je(o,i,a)}t("getMetadata",Rt);function Ut(o,i,a){if(!A(i))throw new TypeError;return w(a)||(a=k(a)),He(o,i,a)}t("getOwnMetadata",Ut);function Gt(o,i){if(!A(o))throw new TypeError;return w(i)||(i=k(i)),Le(o,i)}t("getMetadataKeys",Gt);function It(o,i){if(!A(o))throw new TypeError;return w(i)||(i=k(i)),We(o,i)}t("getOwnMetadataKeys",It);function jt(o,i,a){if(!A(i))throw new TypeError;w(a)||(a=k(a));var d=ee(i,a,!1);if(w(d)||!d.delete(o))return!1;if(d.size>0)return!0;var u=ce.get(i);return u.delete(a),u.size>0||ce.delete(i),!0}t("deleteMetadata",jt);function Ht(o,i){for(var a=o.length-1;a>=0;--a){var d=o[a],u=d(i);if(!w(u)&&!J(u)){if(!qe(u))throw new TypeError;i=u}}return i}function Nt(o,i,a,d){for(var u=o.length-1;u>=0;--u){var $=o[u],g=$(i,a,d);if(!w(g)&&!J(g)){if(!A(g))throw new TypeError;d=g}}return d}function ee(o,i,a){var d=ce.get(o);if(w(d)){if(!a)return;d=new C,ce.set(o,d)}var u=d.get(i);if(w(u)){if(!a)return;u=new C,d.set(i,u)}return u}function Ie(o,i,a){var d=Ee(o,i,a);if(d)return!0;var u=we(i);return J(u)?!1:Ie(o,u,a)}function Ee(o,i,a){var d=ee(i,a,!1);return w(d)?!1:zt(d.has(o))}function je(o,i,a){var d=Ee(o,i,a);if(d)return He(o,i,a);var u=we(i);if(!J(u))return je(o,u,a)}function He(o,i,a){var d=ee(i,a,!1);if(!w(d))return d.get(o)}function Ne(o,i,a,d){var u=ee(a,d,!0);u.set(o,i)}function Le(o,i){var a=We(o,i),d=we(o);if(d===null)return a;var u=Le(d,i);if(u.length<=0)return a;if(a.length<=0)return u;for(var $=new Z,g=[],S=0,h=a;S<h.length;S++){var v=h[S],m=$.has(v);m||($.add(v),g.push(v))}for(var U=0,Ze=u;U<Ze.length;U++){var v=Ze[U],m=$.has(v);m||($.add(v),g.push(v))}return g}function We(o,i){var a=[],d=ee(o,i,!1);if(w(d))return a;for(var u=d.keys(),$=Zt(u),g=0;;){var S=Xt($);if(!S)return a.length=g,a;var h=Jt(S);try{a[g]=h}catch(v){try{Yt($)}finally{throw v}}g++}}function Ve(o){if(o===null)return 1;switch(typeof o){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return o===null?1:6;default:return 6}}function w(o){return o===void 0}function J(o){return o===null}function Lt(o){return typeof o=="symbol"}function A(o){return typeof o=="object"?o!==null:typeof o=="function"}function Wt(o,i){switch(Ve(o)){case 0:return o;case 1:return o;case 2:return o;case 3:return o;case 4:return o;case 5:return o}var a="string",d=Fe(o,c);if(d!==void 0){var u=d.call(o,a);if(A(u))throw new TypeError;return u}return Vt(o)}function Vt(o,i){var a,d,u;{var $=o.toString;if(de($)){var d=$.call(o);if(!A(d))return d}var a=o.valueOf;if(de(a)){var d=a.call(o);if(!A(d))return d}}throw new TypeError}function zt(o){return!!o}function qt(o){return""+o}function k(o){var i=Wt(o);return Lt(i)?i:qt(i)}function ze(o){return Array.isArray?Array.isArray(o):o instanceof Object?o instanceof Array:Object.prototype.toString.call(o)==="[object Array]"}function de(o){return typeof o=="function"}function qe(o){return typeof o=="function"}function Ft(o){switch(Ve(o)){case 3:return!0;case 4:return!0;default:return!1}}function Fe(o,i){var a=o[i];if(a!=null){if(!de(a))throw new TypeError;return a}}function Zt(o){var i=Fe(o,l);if(!de(i))throw new TypeError;var a=i.call(o);if(!A(a))throw new TypeError;return a}function Jt(o){return o.value}function Xt(o){var i=o.next();return i.done?!1:i}function Yt(o){var i=o.return;i&&i.call(o)}function we(o){var i=Object.getPrototypeOf(o);if(typeof o!="function"||o===b||i!==b)return i;var a=o.prototype,d=a&&Object.getPrototypeOf(a);if(d==null||d===Object.prototype)return i;var u=d.constructor;return typeof u!="function"||u===o?i:u}function Qt(){var o={},i=[],a=(function(){function g(S,h,v){this._index=0,this._keys=S,this._values=h,this._selector=v}return g.prototype["@@iterator"]=function(){return this},g.prototype[l]=function(){return this},g.prototype.next=function(){var S=this._index;if(S>=0&&S<this._keys.length){var h=this._selector(this._keys[S],this._values[S]);return S+1>=this._keys.length?(this._index=-1,this._keys=i,this._values=i):this._index++,{value:h,done:!1}}return{value:void 0,done:!0}},g.prototype.throw=function(S){throw this._index>=0&&(this._index=-1,this._keys=i,this._values=i),S},g.prototype.return=function(S){return this._index>=0&&(this._index=-1,this._keys=i,this._values=i),{value:S,done:!0}},g})();return(function(){function g(){this._keys=[],this._values=[],this._cacheKey=o,this._cacheIndex=-2}return Object.defineProperty(g.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),g.prototype.has=function(S){return this._find(S,!1)>=0},g.prototype.get=function(S){var h=this._find(S,!1);return h>=0?this._values[h]:void 0},g.prototype.set=function(S,h){var v=this._find(S,!0);return this._values[v]=h,this},g.prototype.delete=function(S){var h=this._find(S,!1);if(h>=0){for(var v=this._keys.length,m=h+1;m<v;m++)this._keys[m-1]=this._keys[m],this._values[m-1]=this._values[m];return this._keys.length--,this._values.length--,S===this._cacheKey&&(this._cacheKey=o,this._cacheIndex=-2),!0}return!1},g.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=o,this._cacheIndex=-2},g.prototype.keys=function(){return new a(this._keys,this._values,d)},g.prototype.values=function(){return new a(this._keys,this._values,u)},g.prototype.entries=function(){return new a(this._keys,this._values,$)},g.prototype["@@iterator"]=function(){return this.entries()},g.prototype[l]=function(){return this.entries()},g.prototype._find=function(S,h){return this._cacheKey!==S&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=S)),this._cacheIndex<0&&h&&(this._cacheIndex=this._keys.length,this._keys.push(S),this._values.push(void 0)),this._cacheIndex},g})();function d(g,S){return g}function u(g,S){return S}function $(g,S){return[g,S]}}function Kt(){return(function(){function o(){this._map=new C}return Object.defineProperty(o.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),o.prototype.has=function(i){return this._map.has(i)},o.prototype.add=function(i){return this._map.set(i,i),this},o.prototype.delete=function(i){return this._map.delete(i)},o.prototype.clear=function(){this._map.clear()},o.prototype.keys=function(){return this._map.keys()},o.prototype.values=function(){return this._map.values()},o.prototype.entries=function(){return this._map.entries()},o.prototype["@@iterator"]=function(){return this.keys()},o.prototype[l]=function(){return this.keys()},o})()}function es(){var o=16,i=E.create(),a=d();return(function(){function h(){this._key=d()}return h.prototype.has=function(v){var m=u(v,!1);return m!==void 0?E.has(m,this._key):!1},h.prototype.get=function(v){var m=u(v,!1);return m!==void 0?E.get(m,this._key):void 0},h.prototype.set=function(v,m){var U=u(v,!0);return U[this._key]=m,this},h.prototype.delete=function(v){var m=u(v,!1);return m!==void 0?delete m[this._key]:!1},h.prototype.clear=function(){this._key=d()},h})();function d(){var h;do h="@@WeakMap@@"+S();while(E.has(i,h));return i[h]=!0,h}function u(h,v){if(!s.call(h,a)){if(!v)return;Object.defineProperty(h,a,{value:E.create()})}return h[a]}function $(h,v){for(var m=0;m<v;++m)h[m]=Math.random()*255|0;return h}function g(h){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(h)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(h)):$(new Uint8Array(h),h):$(new Array(h),h)}function S(){var h=g(o);h[6]=h[6]&79|64,h[8]=h[8]&191|128;for(var v="",m=0;m<o;++m){var U=h[m];(m===4||m===6||m===8)&&(v+="-"),U<16&&(v+="0"),v+=U.toString(16).toLowerCase()}return v}}function xe(o){return o.__=void 0,delete o.__,o}})})(r||(r={})),it}Ms();function lt(r){return r.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join("")}class Re extends oe{constructor(){super(),this.semanticVersion="2.23.0",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new Bs(this)}static define(){}connectedCallback(){var e;super.connectedCallback(),this.setAttribute("gds-element",((e=this.gdsElementName)==null?void 0:e.toString())||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(e,t){const s={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new Event(e,s)),this.dispatchEvent(new Event(lt(e),s))].every(n=>n!==!1)}dispatchCustomEvent(e,t={}){const s={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new CustomEvent(e,s)),this.dispatchEvent(new CustomEvent(lt(e),s))].every(n=>n!==!1)}}Re.isDefined=!1;Re.styleExpressionBaseSelector=":host";ns([As()],Re.prototype,"_isUsingTransitionalStyles",2);const L="-7f568d";class Ue{static get instance(){var e;return(e=globalThis.__gdsElementLookupTable)!=null&&e[L]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[L]:new Map}),globalThis.__gdsElementLookupTable[L]}}const js=(r,e)=>function(t){var s;return s=class extends t{constructor(){super(...arguments),this.gdsElementName=r}static define(){if(s.isDefined)return;const c=globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?r:r+L;customElements.get(c)||(s.isDefined=!0,Ue.instance.set(r,c),customElements.define(c,s),e!=null&&e.dependsOn&&e.dependsOn.forEach(l=>l.define()))}},s.isDefined=!1,s},ct=new WeakMap;function Cs(r,...e){let t=ct.get(r);return t||(t=dt(r),t.raw=dt(r.raw),ct.set(r,t)),[t,...e]}const dt=r=>r.map(e=>{for(const[t,s]of Ue.instance.entries())e=e.replace(new RegExp(`${t}(?![-a-z])`,"mg"),s);return e});function Ts(r){return(e,...t)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return r(e,...t);const[s,...n]=Cs(e,...t);return r(s,...n)}}const Hs=Ts(gs);function Ns(r,e=!1){return Ue.instance.get(r)??r+(e?L:"")}const xt=`/**
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
  --gds-sys-radius-max: 999px;`,ft=`/**
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
  --gds-sys-color-state-warning-06: #f19e38 20%;`,ht=`/**
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
  --gds-sys-color-state-warning-06: #8f530a 16%;`,$t=`/**
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
  --gds-sys-shadow-2xl-02: 0px 0px 0px 0px transparent;`;var Os={};const be=typeof process<"u"&&Os!==void 0,Ls=/iPad|iPhone|iPod/.test(be?"":navigator.userAgent);var Ce,ve,me,Ge,he,At,Bt;function ks(){return be?[]:document.adoptedStyleSheets||[]}const Ps=class Mt{constructor(){B(this,he),B(this,Ce,!wt()),B(this,ve,new Map),B(this,me,new Map),B(this,Ge,ks())}static get instance(){var e;return(e=globalThis.__gdsGlobalStylesRegistryScoped)!=null&&e[L]||(globalThis.__gdsGlobalStylesRegistryScoped={...globalThis.__gdsGlobalStylesRegistryScoped,[L]:new Mt}),globalThis.__gdsGlobalStylesRegistryScoped[L]}injectGlobalStyles(e,t){if(p(this,Ce)){const s=Array.isArray(t)?t.map(n=>n.toString()).join(""):t.toString();I(this,he,At).call(this,e,s)}else t.styleSheet&&I(this,he,Bt).call(this,e,t.styleSheet)}};Ce=new WeakMap;ve=new WeakMap;me=new WeakMap;Ge=new WeakMap;he=new WeakSet;At=function(r,e){if(be)return;let t=p(this,me).get(r);t||(t=document.createElement("style"),p(this,me).set(r,t)),t.textContent=e,document.head.appendChild(t)};Bt=function(r,e){be||(p(this,ve).set(r,e),document.adoptedStyleSheets=[...p(this,Ge),...Array.from(p(this,ve).values())])};let Ds=Ps;const Ws=[pt`
    :host {
      ${P(xt)}
      ${P($t)}
    }
  `];Ds.instance.injectGlobalStyles("root-tokens",pt`
    :root {
      ${P(xt)}
      ${P($t)}
    }
    :root:not([gds-theme]),
    :root[gds-theme='light'] {
      ${P(ht)}
    }
    :root[gds-theme='dark'] {
      ${P(ft)}
    }
    :root[gds-theme='auto'] {
      @media (prefers-color-scheme: dark) {
        ${P(ft)}
      }
      @media (prefers-color-scheme: light) {
        ${P(ht)}
      }
    }
  `);export{x as E,Re as G,Y as T,L as V,Is as Z,ns as _,Ns as a,B as b,I as c,p as d,j as e,be as f,js as g,Hs as h,pt as i,P as j,Ds as k,Ls as l,ft as m,$s as n,ht as o,As as r,wt as s,Ws as t,gs as x};
