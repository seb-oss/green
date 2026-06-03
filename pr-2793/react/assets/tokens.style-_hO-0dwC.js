import{e as et}from"./iframe-CNIez2W3.js";var cs=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,vt=(n,e,t,s)=>{for(var r=s>1?void 0:s?fs(e,t):e,d=n.length-1,l;d>=0;d--)(l=n[d])&&(r=(s?l(e,t,r):l(r))||r);return s&&r&&cs(e,t,r),r},Ge=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)},y=(n,e,t)=>(Ge(n,e,"read from private field"),t?t.call(n):e.get(n)),x=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},I=(n,e,t,s)=>(Ge(n,e,"write to private field"),e.set(n,t),t),T=(n,e,t)=>(Ge(n,e,"access private method"),t);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=globalThis,Ue=ue.ShadowRoot&&(ue.ShadyCSS===void 0||ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ie=Symbol(),tt=new WeakMap;let bt=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ue&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=tt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&tt.set(t,e))}return e}toString(){return this.cssText}};const P=n=>new bt(typeof n=="string"?n:n+"",void 0,Ie),Et=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((s,r,d)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[d+1],n[0]);return new bt(t,n,Ie)},hs=(n,e)=>{if(Ue)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),r=ue.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,n.appendChild(s)}},st=Ue?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return P(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:us,defineProperty:ys,getOwnPropertyDescriptor:gs,getOwnPropertyNames:ps,getOwnPropertySymbols:Ss,getPrototypeOf:ms}=Object,N=globalThis,nt=N.trustedTypes,_s=nt?nt.emptyScript:"",Ae=N.reactiveElementPolyfillSupport,oe=(n,e)=>n,ge={toAttribute(n,e){switch(e){case Boolean:n=n?_s:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},je=(n,e)=>!us(n,e),rt={attribute:!0,type:String,converter:ge,reflect:!1,useDefault:!1,hasChanged:je};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),N.litPropertyMetadata??(N.litPropertyMetadata=new WeakMap);let X=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=rt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&ys(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:d}=gs(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get:r,set(l){const g=r==null?void 0:r.call(this);d==null||d.call(this,l),this.requestUpdate(e,g,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??rt}static _$Ei(){if(this.hasOwnProperty(oe("elementProperties")))return;const e=ms(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(oe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(oe("properties"))){const t=this.properties,s=[...ps(t),...Ss(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(st(r))}else e!==void 0&&t.push(st(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return hs(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var d;const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const l=(((d=s.converter)==null?void 0:d.toAttribute)!==void 0?s.converter:ge).toAttribute(t,s.type);this._$Em=e,l==null?this.removeAttribute(r):this.setAttribute(r,l),this._$Em=null}}_$AK(e,t){var d,l;const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const g=s.getPropertyOptions(r),f=typeof g.converter=="function"?{fromAttribute:g.converter}:((d=g.converter)==null?void 0:d.fromAttribute)!==void 0?g.converter:ge;this._$Em=r;const v=f.fromAttribute(t,g.type);this[r]=v??((l=this._$Ej)==null?void 0:l.get(r))??v,this._$Em=null}}requestUpdate(e,t,s,r=!1,d){var l;if(e!==void 0){const g=this.constructor;if(r===!1&&(d=this[e]),s??(s=g.getPropertyOptions(e)),!((s.hasChanged??je)(d,t)||s.useDefault&&s.reflect&&d===((l=this._$Ej)==null?void 0:l.get(e))&&!this.hasAttribute(g._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:d},l){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,l??t??this[e]),d!==!0||l!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[d,l]of this._$Ep)this[d]=l;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[d,l]of r){const{wrapped:g}=l,f=this[d];g!==!0||this._$AL.has(d)||f===void 0||this.C(d,void 0,l,f)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(r=>{var d;return(d=r.hostUpdate)==null?void 0:d.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[oe("elementProperties")]=new Map,X[oe("finalized")]=new Map,Ae==null||Ae({ReactiveElement:X}),(N.reactiveElementVersions??(N.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=globalThis,ot=n=>n,pe=ie.trustedTypes,it=pe?pe.createPolicy("lit-html",{createHTML:n=>n}):void 0,wt="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,xt="?"+j,vs=`<${xt}>`,q=document,le=()=>q.createComment(""),de=n=>n===null||typeof n!="object"&&typeof n!="function",Ne=Array.isArray,bs=n=>Ne(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Be=`[ 	
\f\r]`,ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,lt=/>/g,L=RegExp(`>|${Be}(?:([^\\s"'>=/]+)(${Be}*=${Be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dt=/'/g,ct=/"/g,$t=/^(?:script|style|textarea|title)$/i,Es=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),ws=Es(1),K=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),ft=new WeakMap,W=q.createTreeWalker(q,129);function At(n,e){if(!Ne(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(e):e}const xs=(n,e)=>{const t=n.length-1,s=[];let r,d=e===2?"<svg>":e===3?"<math>":"",l=ne;for(let g=0;g<t;g++){const f=n[g];let v,E,b=-1,M=0;for(;M<f.length&&(l.lastIndex=M,E=l.exec(f),E!==null);)M=l.lastIndex,l===ne?E[1]==="!--"?l=at:E[1]!==void 0?l=lt:E[2]!==void 0?($t.test(E[2])&&(r=RegExp("</"+E[2],"g")),l=L):E[3]!==void 0&&(l=L):l===L?E[0]===">"?(l=r??ne,b=-1):E[1]===void 0?b=-2:(b=l.lastIndex-E[2].length,v=E[1],l=E[3]===void 0?L:E[3]==='"'?ct:dt):l===ct||l===dt?l=L:l===at||l===lt?l=ne:(l=L,r=void 0);const C=l===L&&n[g+1].startsWith("/>")?" ":"";d+=l===ne?f+vs:b>=0?(s.push(v),f.slice(0,b)+wt+f.slice(b)+j+C):f+j+(b===-2?g:C)}return[At(n,d+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class ce{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let d=0,l=0;const g=e.length-1,f=this.parts,[v,E]=xs(e,t);if(this.el=ce.createElement(v,s),W.currentNode=this.el.content,t===2||t===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(r=W.nextNode())!==null&&f.length<g;){if(r.nodeType===1){if(r.hasAttributes())for(const b of r.getAttributeNames())if(b.endsWith(wt)){const M=E[l++],C=r.getAttribute(b).split(j),Z=/([.?@])?(.*)/.exec(M);f.push({type:1,index:d,name:Z[2],strings:C,ctor:Z[1]==="."?As:Z[1]==="?"?Bs:Z[1]==="@"?Ms:ve}),r.removeAttribute(b)}else b.startsWith(j)&&(f.push({type:6,index:d}),r.removeAttribute(b));if($t.test(r.tagName)){const b=r.textContent.split(j),M=b.length-1;if(M>0){r.textContent=pe?pe.emptyScript:"";for(let C=0;C<M;C++)r.append(b[C],le()),W.nextNode(),f.push({type:2,index:++d});r.append(b[M],le())}}}else if(r.nodeType===8)if(r.data===xt)f.push({type:2,index:d});else{let b=-1;for(;(b=r.data.indexOf(j,b+1))!==-1;)f.push({type:7,index:d}),b+=j.length-1}d++}}static createElement(e,t){const s=q.createElement("template");return s.innerHTML=e,s}}function ee(n,e,t=n,s){var l,g;if(e===K)return e;let r=s!==void 0?(l=t._$Co)==null?void 0:l[s]:t._$Cl;const d=de(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==d&&((g=r==null?void 0:r._$AO)==null||g.call(r,!1),d===void 0?r=void 0:(r=new d(n),r._$AT(n,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=r:t._$Cl=r),r!==void 0&&(e=ee(n,r._$AS(n,e.values),r,s)),e}class $s{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=((e==null?void 0:e.creationScope)??q).importNode(t,!0);W.currentNode=r;let d=W.nextNode(),l=0,g=0,f=s[0];for(;f!==void 0;){if(l===f.index){let v;f.type===2?v=new te(d,d.nextSibling,this,e):f.type===1?v=new f.ctor(d,f.name,f.strings,this,e):f.type===6&&(v=new Cs(d,this,e)),this._$AV.push(v),f=s[++g]}l!==(f==null?void 0:f.index)&&(d=W.nextNode(),l++)}return W.currentNode=q,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class te{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ee(this,e,t),de(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==K&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):bs(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&de(this._$AH)?this._$AA.nextSibling.data=e:this.T(q.createTextNode(e)),this._$AH=e}$(e){var d;const{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ce.createElement(At(s.h,s.h[0]),this.options)),s);if(((d=this._$AH)==null?void 0:d._$AD)===r)this._$AH.p(t);else{const l=new $s(r,this),g=l.u(this.options);l.p(t),this.T(g),this._$AH=l}}_$AC(e){let t=ft.get(e.strings);return t===void 0&&ft.set(e.strings,t=new ce(e)),t}k(e){Ne(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const d of e)r===t.length?t.push(s=new te(this.O(le()),this.O(le()),this,this.options)):s=t[r],s._$AI(d),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const r=ot(e).nextSibling;ot(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class ve{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,d){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=d,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=$}_$AI(e,t=this,s,r){const d=this.strings;let l=!1;if(d===void 0)e=ee(this,e,t,0),l=!de(e)||e!==this._$AH&&e!==K,l&&(this._$AH=e);else{const g=e;let f,v;for(e=d[0],f=0;f<d.length-1;f++)v=ee(this,g[s+f],t,f),v===K&&(v=this._$AH[f]),l||(l=!de(v)||v!==this._$AH[f]),v===$?e=$:e!==$&&(e+=(v??"")+d[f+1]),this._$AH[f]=v}l&&!r&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class As extends ve{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}class Bs extends ve{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$)}}class Ms extends ve{constructor(e,t,s,r,d){super(e,t,s,r,d),this.type=5}_$AI(e,t=this){if((e=ee(this,e,t,0)??$)===K)return;const s=this._$AH,r=e===$&&s!==$||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,d=e!==$&&(s===$||r);r&&this.element.removeEventListener(this.name,this,s),d&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Cs{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}}const zs={I:te},Me=ie.litHtmlPolyfillSupport;Me==null||Me(ce,te),(ie.litHtmlVersions??(ie.litHtmlVersions=[])).push("3.3.2");const Ts=(n,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let r=s._$litPart$;if(r===void 0){const d=(t==null?void 0:t.renderBefore)??null;s._$litPart$=r=new te(e.insertBefore(le(),d),d,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis;class ae extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ts(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return K}}var _t;ae._$litElement$=!0,ae.finalized=!0,(_t=z.litElementHydrateSupport)==null||_t.call(z,{LitElement:ae});const Ce=z.litElementPolyfillSupport;Ce==null||Ce({LitElement:ae});(z.litElementVersions??(z.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ks={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:je},Os=(n=ks,e,t)=>{const{kind:s,metadata:r}=t;let d=globalThis.litPropertyMetadata.get(r);if(d===void 0&&globalThis.litPropertyMetadata.set(r,d=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),d.set(t.name,n),s==="accessor"){const{name:l}=t;return{set(g){const f=e.get.call(this);e.set.call(this,g),this.requestUpdate(l,f,n,!0,g)},init(g){return g!==void 0&&this.C(l,void 0,n,g),g}}}if(s==="setter"){const{name:l}=t;return function(g){const f=this[l];e.call(this,g),this.requestUpdate(l,f,n,!0,g)}}throw Error("Unsupported decorator location: "+s)};function Bt(n){return(e,t)=>typeof t=="object"?Os(n,e,t):((s,r,d)=>{const l=r.hasOwnProperty(d);return r.constructor.createProperty(d,s),l?Object.getOwnPropertyDescriptor(r,d):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ds(n){return Bt({...n,state:!0,attribute:!1})}var k,Se,G,me,V,O,R,_e,Te,Mt,Y,re,ke,Ct;class Ps{constructor(e){x(this,Te),x(this,Y),x(this,ke),x(this,k,!Tt()),x(this,Se,!1),x(this,G,[]),x(this,me,[]),x(this,V,new Map),x(this,O,new Map),x(this,R,[]),x(this,_e,[]),this.host=e,this.host.addController(this)}hostConnected(){T(this,ke,Ct).call(this)}has(e){return y(this,k)?y(this,O).has(e):y(this,V).has(e)}inject(e,t){T(this,Te,Mt).call(this,e,t),T(this,Y,re).call(this)}clear(e){y(this,k)?this.host.updateComplete.then(()=>{const t=y(this,O).get(e);t==null||t.remove(),y(this,O).delete(e)}):y(this,V).delete(e),T(this,Y,re).call(this)}clearAll(){y(this,k)?this.host.updateComplete.then(()=>{y(this,O).forEach(e=>e.remove()),y(this,R).forEach(e=>e.remove()),y(this,O).clear(),I(this,R,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],y(this,V).clear(),I(this,G,[]))}clearInitial(){y(this,k)?this.host.updateComplete.then(()=>{y(this,R).forEach(e=>e.remove()),I(this,R,[])}):I(this,G,[]),T(this,Y,re).call(this)}restoreInitial(){y(this,k)?y(this,_e).forEach(e=>{y(this,R).push(e.cloneNode(!0))}):I(this,G,[...y(this,me)]),T(this,Y,re).call(this)}}k=new WeakMap;Se=new WeakMap;G=new WeakMap;me=new WeakMap;V=new WeakMap;O=new WeakMap;R=new WeakMap;_e=new WeakMap;Te=new WeakSet;Mt=function(n,e){if(y(this,k)){let t=y(this,O).get(n);t||(t=document.createElement("style"),y(this,O).set(n,t)),t.textContent=e.cssText}else{if(!this.host.shadowRoot||!e.styleSheet)return;y(this,V).set(n,e.styleSheet)}};Y=new WeakSet;re=function(){if(y(this,k))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(n=>{n.remove()}),y(this,R).forEach(n=>{var e;(e=this.host.shadowRoot)==null||e.appendChild(n)}),y(this,O).forEach(n=>{var e;(e=this.host.shadowRoot)==null||e.appendChild(n)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...y(this,G),...Array.from(y(this,V).values())]}};ke=new WeakSet;Ct=function(){y(this,Se)||(y(this,k)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(n=>{y(this,R).push(n),y(this,_e).push(n.cloneNode(!0))})}):this.host.shadowRoot&&y(this,G).length===0&&(I(this,G,[...this.host.shadowRoot.adoptedStyleSheets||[]]),I(this,me,[...y(this,G)])),I(this,Se,!0))};function Tt(){try{return new CSSStyleSheet,!0}catch{return!1}}function ht(n){return n&&(n.includes("-")?n.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""):n.charAt(0).toUpperCase()+n.slice(1))}var ut={};/*! *****************************************************************************
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
***************************************************************************** */var yt;function Rs(){if(yt)return ut;yt=1;var n;return(function(e){(function(t){var s=typeof et=="object"?et:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),r=d(e);typeof s.Reflect>"u"?s.Reflect=e:r=d(s.Reflect,r),t(r);function d(l,g){return function(f,v){typeof l[f]!="function"&&Object.defineProperty(l,f,{configurable:!0,writable:!0,value:v}),g&&g(f,v)}}})(function(t){var s=Object.prototype.hasOwnProperty,r=typeof Symbol=="function",d=r&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",l=r&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",g=typeof Object.create=="function",f={__proto__:[]}instanceof Array,v=!g&&!f,E={create:g?function(){return $e(Object.create(null))}:f?function(){return $e({__proto__:null})}:function(){return $e({})},has:v?function(o,i){return s.call(o,i)}:function(o,i){return i in o},get:v?function(o,i){return s.call(o,i)?o[i]:void 0}:function(o,i){return o[i]}},b=Object.getPrototypeOf(Function),M=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",C=!M&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:as(),Z=!M&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:ls(),It=!M&&typeof WeakMap=="function"?WeakMap:ds(),fe=new It;function jt(o,i,a,c){if(w(a)){if(!Xe(o))throw new TypeError;if(!Ye(i))throw new TypeError;return Jt(o,i)}else{if(!Xe(o))throw new TypeError;if(!A(i))throw new TypeError;if(!A(c)&&!w(c)&&!J(c))throw new TypeError;return J(c)&&(c=void 0),a=D(a),Xt(o,i,a,c)}}t("decorate",jt);function Nt(o,i){function a(c,h){if(!A(c))throw new TypeError;if(!w(h)&&!ss(h))throw new TypeError;Fe(o,i,c,h)}return a}t("metadata",Nt);function Ht(o,i,a,c){if(!A(a))throw new TypeError;return w(c)||(c=D(c)),Fe(o,i,a,c)}t("defineMetadata",Ht);function Lt(o,i,a){if(!A(i))throw new TypeError;return w(a)||(a=D(a)),We(o,i,a)}t("hasMetadata",Lt);function Wt(o,i,a){if(!A(i))throw new TypeError;return w(a)||(a=D(a)),we(o,i,a)}t("hasOwnMetadata",Wt);function Vt(o,i,a){if(!A(i))throw new TypeError;return w(a)||(a=D(a)),Ve(o,i,a)}t("getMetadata",Vt);function zt(o,i,a){if(!A(i))throw new TypeError;return w(a)||(a=D(a)),ze(o,i,a)}t("getOwnMetadata",zt);function Ft(o,i){if(!A(o))throw new TypeError;return w(i)||(i=D(i)),qe(o,i)}t("getMetadataKeys",Ft);function qt(o,i){if(!A(o))throw new TypeError;return w(i)||(i=D(i)),Ze(o,i)}t("getOwnMetadataKeys",qt);function Zt(o,i,a){if(!A(i))throw new TypeError;w(a)||(a=D(a));var c=se(i,a,!1);if(w(c)||!c.delete(o))return!1;if(c.size>0)return!0;var h=fe.get(i);return h.delete(a),h.size>0||fe.delete(i),!0}t("deleteMetadata",Zt);function Jt(o,i){for(var a=o.length-1;a>=0;--a){var c=o[a],h=c(i);if(!w(h)&&!J(h)){if(!Ye(h))throw new TypeError;i=h}}return i}function Xt(o,i,a,c){for(var h=o.length-1;h>=0;--h){var B=o[h],p=B(i,a,c);if(!w(p)&&!J(p)){if(!A(p))throw new TypeError;c=p}}return c}function se(o,i,a){var c=fe.get(o);if(w(c)){if(!a)return;c=new C,fe.set(o,c)}var h=c.get(i);if(w(h)){if(!a)return;h=new C,c.set(i,h)}return h}function We(o,i,a){var c=we(o,i,a);if(c)return!0;var h=xe(i);return J(h)?!1:We(o,h,a)}function we(o,i,a){var c=se(i,a,!1);return w(c)?!1:es(c.has(o))}function Ve(o,i,a){var c=we(o,i,a);if(c)return ze(o,i,a);var h=xe(i);if(!J(h))return Ve(o,h,a)}function ze(o,i,a){var c=se(i,a,!1);if(!w(c))return c.get(o)}function Fe(o,i,a,c){var h=se(a,c,!0);h.set(o,i)}function qe(o,i){var a=Ze(o,i),c=xe(o);if(c===null)return a;var h=qe(c,i);if(h.length<=0)return a;if(a.length<=0)return h;for(var B=new Z,p=[],S=0,u=a;S<u.length;S++){var m=u[S],_=B.has(m);_||(B.add(m),p.push(m))}for(var U=0,Ke=h;U<Ke.length;U++){var m=Ke[U],_=B.has(m);_||(B.add(m),p.push(m))}return p}function Ze(o,i){var a=[],c=se(o,i,!1);if(w(c))return a;for(var h=c.keys(),B=ns(h),p=0;;){var S=os(B);if(!S)return a.length=p,a;var u=rs(S);try{a[p]=u}catch(m){try{is(B)}finally{throw m}}p++}}function Je(o){if(o===null)return 1;switch(typeof o){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return o===null?1:6;default:return 6}}function w(o){return o===void 0}function J(o){return o===null}function Yt(o){return typeof o=="symbol"}function A(o){return typeof o=="object"?o!==null:typeof o=="function"}function Qt(o,i){switch(Je(o)){case 0:return o;case 1:return o;case 2:return o;case 3:return o;case 4:return o;case 5:return o}var a="string",c=Qe(o,d);if(c!==void 0){var h=c.call(o,a);if(A(h))throw new TypeError;return h}return Kt(o)}function Kt(o,i){var a,c;{var h=o.toString;if(he(h)){var c=h.call(o);if(!A(c))return c}var a=o.valueOf;if(he(a)){var c=a.call(o);if(!A(c))return c}}throw new TypeError}function es(o){return!!o}function ts(o){return""+o}function D(o){var i=Qt(o);return Yt(i)?i:ts(i)}function Xe(o){return Array.isArray?Array.isArray(o):o instanceof Object?o instanceof Array:Object.prototype.toString.call(o)==="[object Array]"}function he(o){return typeof o=="function"}function Ye(o){return typeof o=="function"}function ss(o){switch(Je(o)){case 3:return!0;case 4:return!0;default:return!1}}function Qe(o,i){var a=o[i];if(a!=null){if(!he(a))throw new TypeError;return a}}function ns(o){var i=Qe(o,l);if(!he(i))throw new TypeError;var a=i.call(o);if(!A(a))throw new TypeError;return a}function rs(o){return o.value}function os(o){var i=o.next();return i.done?!1:i}function is(o){var i=o.return;i&&i.call(o)}function xe(o){var i=Object.getPrototypeOf(o);if(typeof o!="function"||o===b||i!==b)return i;var a=o.prototype,c=a&&Object.getPrototypeOf(a);if(c==null||c===Object.prototype)return i;var h=c.constructor;return typeof h!="function"||h===o?i:h}function as(){var o={},i=[],a=(function(){function p(S,u,m){this._index=0,this._keys=S,this._values=u,this._selector=m}return p.prototype["@@iterator"]=function(){return this},p.prototype[l]=function(){return this},p.prototype.next=function(){var S=this._index;if(S>=0&&S<this._keys.length){var u=this._selector(this._keys[S],this._values[S]);return S+1>=this._keys.length?(this._index=-1,this._keys=i,this._values=i):this._index++,{value:u,done:!1}}return{value:void 0,done:!0}},p.prototype.throw=function(S){throw this._index>=0&&(this._index=-1,this._keys=i,this._values=i),S},p.prototype.return=function(S){return this._index>=0&&(this._index=-1,this._keys=i,this._values=i),{value:S,done:!0}},p})();return(function(){function p(){this._keys=[],this._values=[],this._cacheKey=o,this._cacheIndex=-2}return Object.defineProperty(p.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),p.prototype.has=function(S){return this._find(S,!1)>=0},p.prototype.get=function(S){var u=this._find(S,!1);return u>=0?this._values[u]:void 0},p.prototype.set=function(S,u){var m=this._find(S,!0);return this._values[m]=u,this},p.prototype.delete=function(S){var u=this._find(S,!1);if(u>=0){for(var m=this._keys.length,_=u+1;_<m;_++)this._keys[_-1]=this._keys[_],this._values[_-1]=this._values[_];return this._keys.length--,this._values.length--,S===this._cacheKey&&(this._cacheKey=o,this._cacheIndex=-2),!0}return!1},p.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=o,this._cacheIndex=-2},p.prototype.keys=function(){return new a(this._keys,this._values,c)},p.prototype.values=function(){return new a(this._keys,this._values,h)},p.prototype.entries=function(){return new a(this._keys,this._values,B)},p.prototype["@@iterator"]=function(){return this.entries()},p.prototype[l]=function(){return this.entries()},p.prototype._find=function(S,u){return this._cacheKey!==S&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=S)),this._cacheIndex<0&&u&&(this._cacheIndex=this._keys.length,this._keys.push(S),this._values.push(void 0)),this._cacheIndex},p})();function c(p,S){return p}function h(p,S){return S}function B(p,S){return[p,S]}}function ls(){return(function(){function o(){this._map=new C}return Object.defineProperty(o.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),o.prototype.has=function(i){return this._map.has(i)},o.prototype.add=function(i){return this._map.set(i,i),this},o.prototype.delete=function(i){return this._map.delete(i)},o.prototype.clear=function(){this._map.clear()},o.prototype.keys=function(){return this._map.keys()},o.prototype.values=function(){return this._map.values()},o.prototype.entries=function(){return this._map.entries()},o.prototype["@@iterator"]=function(){return this.keys()},o.prototype[l]=function(){return this.keys()},o})()}function ds(){var o=16,i=E.create(),a=c();return(function(){function u(){this._key=c()}return u.prototype.has=function(m){var _=h(m,!1);return _!==void 0?E.has(_,this._key):!1},u.prototype.get=function(m){var _=h(m,!1);return _!==void 0?E.get(_,this._key):void 0},u.prototype.set=function(m,_){var U=h(m,!0);return U[this._key]=_,this},u.prototype.delete=function(m){var _=h(m,!1);return _!==void 0?delete _[this._key]:!1},u.prototype.clear=function(){this._key=c()},u})();function c(){var u;do u="@@WeakMap@@"+S();while(E.has(i,u));return i[u]=!0,u}function h(u,m){if(!s.call(u,a)){if(!m)return;Object.defineProperty(u,a,{value:E.create()})}return u[a]}function B(u,m){for(var _=0;_<m;++_)u[_]=Math.random()*255|0;return u}function p(u){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(u)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(u)):B(new Uint8Array(u),u):B(new Array(u),u)}function S(){var u=p(o);u[6]=u[6]&79|64,u[8]=u[8]&191|128;for(var m="",_=0;_<o;++_){var U=u[_];(_===4||_===6||_===8)&&(m+="-"),U<16&&(m+="0"),m+=U.toString(16).toLowerCase()}return m}}function $e(o){return o.__=void 0,delete o.__,o}})})(n||(n={})),ut}Rs();var Oe,kt;class be extends ae{constructor(){super(),x(this,Oe),this.semanticVersion="__GDS_SEM_VER__",this.syncFirstRender=!1,this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new Ps(this)}static define(){}connectedCallback(){var e;super.connectedCallback(),this.setAttribute("gds-element",((e=this.gdsElementName)==null?void 0:e.toString())||""),this.syncFirstRender&&T(this,Oe,kt).call(this)}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(e,t){const s={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new Event(e,s)),this.dispatchEvent(new Event(ht(e),s))].every(r=>r!==!1)}dispatchCustomEvent(e,t={}){const s={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new CustomEvent(e,s)),this.dispatchEvent(new CustomEvent(ht(e),s))].every(r=>r!==!1)}}Oe=new WeakSet;kt=function(){this.hasUpdated||this.performUpdate();const n=this,e=this.constructor._styleExpressionProps;if(e)for(const t of e){const s=`__sep_${t}`,r=n[s];r!==void 0&&(n[t]=r)}};be.isDefined=!1;be.styleExpressionBaseSelector=":host";vt([Bt({type:Boolean,attribute:"sync-first-render"})],be.prototype,"syncFirstRender",2);vt([Ds()],be.prototype,"_isUsingTransitionalStyles",2);const H="-gdsvsuffix";class He{static get instance(){var e;return(e=globalThis.__gdsElementLookupTable)!=null&&e[H]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[H]:new Map}),globalThis.__gdsElementLookupTable[H]}}const Fs=(n,e)=>function(t){var s;return s=class extends t{constructor(){super(...arguments),this.gdsElementName=n}static define(){if(s.isDefined)return;const d=globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?n:n+H;customElements.get(d)||(s.isDefined=!0,He.instance.set(n,d),customElements.define(d,s),e!=null&&e.dependsOn&&e.dependsOn.forEach(l=>l.define()))}},s.isDefined=!1,s},gt=new WeakMap;function Gs(n,...e){let t=gt.get(n);return t||(t=pt(n),t.raw=pt(n.raw),gt.set(n,t)),[t,...e]}const pt=n=>n.map(e=>{for(const[t,s]of He.instance.entries())e=e.replace(new RegExp(`${t}(?![-a-z])`,"mg"),s);return e});function Us(n){return(e,...t)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return n(e,...t);const[s,...r]=Gs(e,...t);return n(s,...r)}}const qs=Us(ws);function Zs(n,e=!1){return He.instance.get(n)??n+(e?H:"")}const Ot=`/**
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
  --gds-sys-text-display-l: 450 4rem/4.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-m: 450 3rem/3.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-s: 450 2.25rem/2.75rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-xl: 450 2rem/2.375rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-l: 450 1.75rem/2.125rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-m: 450 1.5rem/1.875rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-s: 450 1.25rem/1.625rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-xs: 450 1rem/1.375rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-xl: 450 1.75rem/2.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-l: 450 1.5rem/2rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-m: 450 1.25rem/1.75rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-s: 450 1.125rem/1.625rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-l-regular: 400 1.125rem/1.375rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-l-book: 450 1.125rem/1.375rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-l-medium: 500 1.125rem/1.375rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-m-regular: 400 1rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-m-book: 450 1rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-m-medium: 500 1rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-s-regular: 400 0.875rem/1.125rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-s-book: 450 0.875rem/1.125rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-s-medium: 500 0.875rem/1.125rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-xs-regular: 400 0.75rem/1rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-xs-book: 450 0.75rem/1rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-xs-medium: 500 0.75rem/1rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-2xs-regular: 400 0.625rem/0.875rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-2xs-book: 450 0.625rem/0.875rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-2xs-medium: 500 0.625rem/0.875rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-l-regular: 400 1.125rem/1.625rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-l-regular-italic: italic 400 1.125rem/1.625rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-l-book: 450 1.125rem/1.625rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-l-medium: 500 1.125rem/1.625rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-m-regular: 400 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-m-regular-italic: italic 400 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-m-book: 450 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-m-medium: 500 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-s-regular: 400 0.875rem/1.375rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-s-regular-italic: italic 400 0.875rem/1.375rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-s-book: 450 0.875rem/1.375rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-s-medium: 500 0.875rem/1.375rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
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
  --gds-sys-radius-max: 999px;`,St=`/**
 * Do not edit directly, this file was auto-generated.
 */


  color-scheme: dark;
  --gds-sys-color-l1-neutral-01: #0a0b0b;
  --gds-sys-color-l1-neutral-02: #0a0b0b;
  --gds-sys-color-l1-brand-01: #003824;
  --gds-sys-color-l1-neutral-03: #ffffff;
  --gds-sys-color-l2-neutral-01: #191a1a;
  --gds-sys-color-l2-neutral-01-2: #313533;
  --gds-sys-color-l2-neutral-02: #191a1a;
  --gds-sys-color-l2-neutral-02-2: #282a29;
  --gds-sys-color-l2-neutral-03: #313533;
  --gds-sys-color-l2-brand-01: #003824;
  --gds-sys-color-l2-brand-02: #231d10;
  --gds-sys-color-l2-positive-01: #003d26;
  --gds-sys-color-l2-negative-01: #451207;
  --gds-sys-color-l2-warning-01: #482a05;
  --gds-sys-color-l2-information-01: #1e201f;
  --gds-sys-color-l2-notice-01: #00294d;
  --gds-sys-color-l3-neutral-01: #282a29;
  --gds-sys-color-l3-neutral-01-2: #3b3f3e;
  --gds-sys-color-l3-neutral-02: #313533;
  --gds-sys-color-l3-neutral-02-2: #3b3f3e;
  --gds-sys-color-l3-neutral-03: #d5d7d7;
  --gds-sys-color-l3-neutral-03-2: #c0c4c2;
  --gds-sys-color-l3-brand-01: #d5d7d7;
  --gds-sys-color-l3-brand-02: #342b18;
  --gds-sys-color-l3-brand-02-2: #453921;
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
  --gds-sys-color-border-neutral-01: #a0a6a4;
  --gds-sys-color-border-neutral-02: #454a48;
  --gds-sys-color-border-neutral-03: #282a29;
  --gds-sys-color-border-neutral-04: #f7f8f7;
  --gds-sys-color-border-neutral-05: #ffffff;
  --gds-sys-color-border-information-01: #636967;
  --gds-sys-color-border-information-02: rgba(99, 105, 103, 0.4);
  --gds-sys-color-border-positive-01: #8ae58d;
  --gds-sys-color-border-positive-02: rgba(138, 229, 141, 0.4);
  --gds-sys-color-border-negative-01: #f08975;
  --gds-sys-color-border-negative-02: rgba(240, 137, 117, 0.4);
  --gds-sys-color-border-warning-01: #f5b970;
  --gds-sys-color-border-warning-02: rgba(245, 185, 112, 0.4);
  --gds-sys-color-border-notice-01: #66b8ff;
  --gds-sys-color-border-notice-02: rgba(102, 184, 255, 0.4);
  --gds-sys-color-content-neutral-01: #f7f8f7;
  --gds-sys-color-content-neutral-02: #abb0ae;
  --gds-sys-color-content-neutral-03: #0a0b0b;
  --gds-sys-color-content-neutral-04: #595f5d;
  --gds-sys-color-content-neutral-05: #f7f8f7;
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
  --gds-sys-color-state-neutral-01: #000000 20%;
  --gds-sys-color-state-neutral-02: #000000 35%;
  --gds-sys-color-state-neutral-03: #ffffff 20%;
  --gds-sys-color-state-neutral-04: #ffffff 30%;
  --gds-sys-color-state-neutral-05: #ffffff 12%;
  --gds-sys-color-state-neutral-06: #ffffff 25%;
  --gds-sys-color-state-brand-01: #000000 20%;
  --gds-sys-color-state-brand-02: #000000 30%;
  --gds-sys-color-state-brand-03: #003824 30%;
  --gds-sys-color-state-brand-04: #003824 70%;
  --gds-sys-color-state-brand-05: #003824 50%;
  --gds-sys-color-state-brand-06: #003824 90%;
  --gds-sys-color-state-brand-02-2: #d6c7a8 12%;
  --gds-sys-color-state-brand-02-3: #d6c7a8 18%;
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
  --gds-sys-color-state-warning-06: #f19e38 20%;`,mt=`/**
 * Do not edit directly, this file was auto-generated.
 */


  color-scheme: light;
  --gds-sys-color-l1-neutral-01: #ffffff;
  --gds-sys-color-l1-neutral-02: #f4f5f5;
  --gds-sys-color-l1-brand-01: #003824;
  --gds-sys-color-l1-neutral-03: #0a0b0b;
  --gds-sys-color-l2-neutral-01: #f7f8f7;
  --gds-sys-color-l2-neutral-01-2: #ffffff;
  --gds-sys-color-l2-neutral-02: #ffffff;
  --gds-sys-color-l2-neutral-02-2: #f7f8f7;
  --gds-sys-color-l2-neutral-03: #0a0b0b;
  --gds-sys-color-l2-brand-01: #003824;
  --gds-sys-color-l2-brand-02: #f8f6f1;
  --gds-sys-color-l2-positive-01: #f1f9f1;
  --gds-sys-color-l2-negative-01: #fef7f6;
  --gds-sys-color-l2-warning-01: #fef8f1;
  --gds-sys-color-l2-information-01: #f7f8f7;
  --gds-sys-color-l2-notice-01: #f5faff;
  --gds-sys-color-l3-neutral-01: #ffffff;
  --gds-sys-color-l3-neutral-01-2: #eff0f0;
  --gds-sys-color-l3-neutral-02: #eaebeb;
  --gds-sys-color-l3-neutral-02-2: #ffffff;
  --gds-sys-color-l3-neutral-03: #0a0b0b;
  --gds-sys-color-l3-neutral-03-2: #282a29;
  --gds-sys-color-l3-brand-01: #003824;
  --gds-sys-color-l3-brand-02: #efe9dc;
  --gds-sys-color-l3-brand-02-2: #e7ddcb;
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
  --gds-sys-color-border-neutral-01: #777e7c;
  --gds-sys-color-border-neutral-02: #dfe1e1;
  --gds-sys-color-border-neutral-03: #eff0f0;
  --gds-sys-color-border-neutral-04: #0a0b0b;
  --gds-sys-color-border-neutral-05: #ffffff;
  --gds-sys-color-border-information-01: #0a0b0b;
  --gds-sys-color-border-information-02: rgba(10, 11, 11, 0.4);
  --gds-sys-color-border-positive-01: #027839;
  --gds-sys-color-border-positive-02: rgba(2, 120, 57, 0.4);
  --gds-sys-color-border-negative-01: #b92f13;
  --gds-sys-color-border-negative-02: rgba(185, 47, 19, 0.4);
  --gds-sys-color-border-warning-01: #8f530a;
  --gds-sys-color-border-warning-02: rgba(143, 83, 10, 0.4);
  --gds-sys-color-border-notice-01: #005fb3;
  --gds-sys-color-border-notice-02: rgba(0, 95, 179, 0.4);
  --gds-sys-color-content-neutral-01: #0a0b0b;
  --gds-sys-color-content-neutral-02: #636967;
  --gds-sys-color-content-neutral-03: #ffffff;
  --gds-sys-color-content-neutral-04: #a0a6a4;
  --gds-sys-color-content-neutral-05: #ffffff;
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
  --gds-sys-color-state-neutral-01: #ffffff 20%;
  --gds-sys-color-state-neutral-02: #ffffff 35%;
  --gds-sys-color-state-neutral-03: #000000 6%;
  --gds-sys-color-state-neutral-04: #000000 14%;
  --gds-sys-color-state-neutral-05: #000000 6%;
  --gds-sys-color-state-neutral-06: #000000 14%;
  --gds-sys-color-state-brand-01: #ffffff 20%;
  --gds-sys-color-state-brand-02: #ffffff 35%;
  --gds-sys-color-state-brand-03: #003824 6%;
  --gds-sys-color-state-brand-04: #003824 14%;
  --gds-sys-color-state-brand-05: #003824 6%;
  --gds-sys-color-state-brand-06: #003824 14%;
  --gds-sys-color-state-brand-02-2: #685631 4%;
  --gds-sys-color-state-brand-02-3: #685631 10%;
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
  --gds-sys-color-state-warning-06: #8f530a 16%;`,Dt=`/**
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
  --gds-sys-shadow-2xl-02: 0px 0px 0px 0px transparent;`;var Is={};const Le=typeof process<"u"&&Is!==void 0;var ye,F,Q,Ee,De,Pt,Pe,Rt,Re,Gt;function js(){return Le?[]:[...document.adoptedStyleSheets]}const Ns=class Ut{constructor(){x(this,De),x(this,Pe),x(this,Re),x(this,ye,!Tt()),x(this,F,new Map),x(this,Q,new Map),x(this,Ee,js())}static get instance(){var e;return(e=globalThis.__gdsGlobalStylesRegistryScoped)!=null&&e[H]||(globalThis.__gdsGlobalStylesRegistryScoped={...globalThis.__gdsGlobalStylesRegistryScoped,[H]:new Ut}),globalThis.__gdsGlobalStylesRegistryScoped[H]}injectGlobalStyles(e,t){if(y(this,ye)){const s=Array.isArray(t)?t.map(r=>r.toString()).join(""):t.toString();T(this,De,Pt).call(this,e,s)}else t.styleSheet&&T(this,Pe,Rt).call(this,e,t.styleSheet)}clearGlobalStyles(e){if(y(this,ye)){const t=y(this,Q).get(e);t&&t.parentNode&&(t.parentNode.removeChild(t),y(this,Q).delete(e))}else T(this,Re,Gt).call(this,e)}};ye=new WeakMap;F=new WeakMap;Q=new WeakMap;Ee=new WeakMap;De=new WeakSet;Pt=function(n,e){if(Le)return;let t=y(this,Q).get(n);t||(t=document.createElement("style"),y(this,Q).set(n,t)),t.textContent=e,document.head.appendChild(t)};Pe=new WeakSet;Rt=function(n,e){Le||(y(this,F).set(n,e),document.adoptedStyleSheets=[...y(this,Ee),...Array.from(y(this,F).values())])};Re=new WeakSet;Gt=function(n){y(this,F).has(n)&&(y(this,F).delete(n),document.adoptedStyleSheets=[...y(this,Ee),...Array.from(y(this,F).values())])};let Hs=Ns;const Js=[Et`
    :host {
      ${P(Ot)}
      ${P(Dt)}
    }
  `];Hs.instance.injectGlobalStyles("root-tokens",Et`
    :root {
      ${P(Ot)}
      ${P(Dt)}
    }
    :root:not([gds-theme]),
    :root[gds-theme='light'] {
      ${P(mt)}
    }
    :root[gds-theme='dark'] {
      ${P(St)}
    }
    :root[gds-theme='auto'] {
      @media (prefers-color-scheme: dark) {
        ${P(St)}
      }
      @media (prefers-color-scheme: light) {
        ${P(mt)}
      }
    }
  `);export{$ as A,K as E,be as G,H as V,vt as _,Zs as a,x as b,T as c,y as d,I as e,P as f,Fs as g,qs as h,Et as i,zs as j,mt as k,ws as l,Le as m,Bt as n,Tt as o,Ds as r,St as s,Js as t};
