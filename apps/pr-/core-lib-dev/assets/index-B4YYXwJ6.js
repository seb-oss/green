(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yn=globalThis,xo=yn.ShadowRoot&&(yn.ShadyCSS===void 0||yn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_o=Symbol(),ba=new WeakMap;let tl=class{constructor(t,s,n){if(this._$cssResult$=!0,n!==_o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(xo&&t===void 0){const n=s!==void 0&&s.length===1;n&&(t=ba.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ba.set(s,t))}return t}toString(){return this.cssText}};const ne=e=>new tl(typeof e=="string"?e:e+"",void 0,_o),H=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((n,i,r)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new tl(s,e,_o)},ec=(e,t)=>{if(xo)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const n=document.createElement("style"),i=yn.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=s.cssText,e.appendChild(n)}},ma=xo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const n of t.cssRules)s+=n.cssText;return ne(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:tc,defineProperty:sc,getOwnPropertyDescriptor:nc,getOwnPropertyNames:ic,getOwnPropertySymbols:rc,getPrototypeOf:oc}=Object,mt=globalThis,va=mt.trustedTypes,ac=va?va.emptyScript:"",Si=mt.reactiveElementPolyfillSupport,Ys=(e,t)=>e,Fn={toAttribute(e,t){switch(t){case Boolean:e=e?ac:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},wo=(e,t)=>!tc(e,t),ya={attribute:!0,type:String,converter:Fn,reflect:!1,hasChanged:wo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),mt.litPropertyMetadata??(mt.litPropertyMetadata=new WeakMap);class Qt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=ya){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,s);i!==void 0&&sc(this.prototype,t,i)}}static getPropertyDescriptor(t,s,n){const{get:i,set:r}=nc(this.prototype,t)??{get(){return this[s]},set(a){this[s]=a}};return{get(){return i==null?void 0:i.call(this)},set(a){const c=i==null?void 0:i.call(this);r.call(this,a),this.requestUpdate(t,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ya}static _$Ei(){if(this.hasOwnProperty(Ys("elementProperties")))return;const t=oc(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ys("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ys("properties"))){const s=this.properties,n=[...ic(s),...rc(s)];for(const i of n)this.createProperty(i,s[i])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[n,i]of s)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[s,n]of this.elementProperties){const i=this._$Eu(s,n);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)s.unshift(ma(i))}else t!==void 0&&s.push(ma(t));return s}static _$Eu(t,s){const n=s.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(s=>s(this))}addController(t){var s;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var s;(s=this._$EO)==null||s.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const n of s.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ec(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var n;return(n=s.hostConnected)==null?void 0:n.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(s=>{var n;return(n=s.hostDisconnected)==null?void 0:n.call(s)})}attributeChangedCallback(t,s,n){this._$AK(t,n)}_$EC(t,s){var r;const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const a=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:Fn).toAttribute(s,n.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,s){var r;const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=n.getPropertyOptions(i),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:Fn;this._$Em=i,this[i]=c.fromAttribute(s,a.type),this._$Em=null}}requestUpdate(t,s,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??wo)(this[t],s))return;this.P(t,s,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,s,n){this._$AL.has(t)||this._$AL.set(t,s),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,a]of i)a.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],a)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(n=this._$EO)==null||n.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(s)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(s)}willUpdate(t){}_$AE(t){var s;(s=this._$EO)==null||s.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EC(s,this[s]))),this._$EU()}updated(t){}firstUpdated(t){}}Qt.elementStyles=[],Qt.shadowRootOptions={mode:"open"},Qt[Ys("elementProperties")]=new Map,Qt[Ys("finalized")]=new Map,Si==null||Si({ReactiveElement:Qt}),(mt.reactiveElementVersions??(mt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zs=globalThis,Hn=Zs.trustedTypes,xa=Hn?Hn.createPolicy("lit-html",{createHTML:e=>e}):void 0,ko="$lit$",rt=`lit$${Math.random().toFixed(9).slice(2)}$`,$o="?"+rt,lc=`<${$o}>`,Ft=document,Xs=()=>Ft.createComment(""),Ks=e=>e===null||typeof e!="object"&&typeof e!="function",Co=Array.isArray,sl=e=>Co(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ei=`[ 	
\f\r]`,Os=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_a=/-->/g,wa=/>/g,Ct=RegExp(`>|${Ei}(?:([^\\s"'>=/]+)(${Ei}*=${Ei}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ka=/'/g,$a=/"/g,nl=/^(?:script|style|textarea|title)$/i,dc=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),ce=dc(1),Ae=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),Ca=new WeakMap,Ot=Ft.createTreeWalker(Ft,129);function il(e,t){if(!Co(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return xa!==void 0?xa.createHTML(t):t}const rl=(e,t)=>{const s=e.length-1,n=[];let i,r=t===2?"<svg>":t===3?"<math>":"",a=Os;for(let c=0;c<s;c++){const d=e[c];let u,b,f=-1,_=0;for(;_<d.length&&(a.lastIndex=_,b=a.exec(d),b!==null);)_=a.lastIndex,a===Os?b[1]==="!--"?a=_a:b[1]!==void 0?a=wa:b[2]!==void 0?(nl.test(b[2])&&(i=RegExp("</"+b[2],"g")),a=Ct):b[3]!==void 0&&(a=Ct):a===Ct?b[0]===">"?(a=i??Os,f=-1):b[1]===void 0?f=-2:(f=a.lastIndex-b[2].length,u=b[1],a=b[3]===void 0?Ct:b[3]==='"'?$a:ka):a===$a||a===ka?a=Ct:a===_a||a===wa?a=Os:(a=Ct,i=void 0);const v=a===Ct&&e[c+1].startsWith("/>")?" ":"";r+=a===Os?d+lc:f>=0?(n.push(u),d.slice(0,f)+ko+d.slice(f)+rt+v):d+rt+(f===-2?c:v)}return[il(e,r+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Qs{constructor({strings:t,_$litType$:s},n){let i;this.parts=[];let r=0,a=0;const c=t.length-1,d=this.parts,[u,b]=rl(t,s);if(this.el=Qs.createElement(u,n),Ot.currentNode=this.el.content,s===2||s===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=Ot.nextNode())!==null&&d.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(ko)){const _=b[a++],v=i.getAttribute(f).split(rt),C=/([.?@])?(.*)/.exec(_);d.push({type:1,index:r,name:C[2],strings:v,ctor:C[1]==="."?al:C[1]==="?"?ll:C[1]==="@"?dl:ln}),i.removeAttribute(f)}else f.startsWith(rt)&&(d.push({type:6,index:r}),i.removeAttribute(f));if(nl.test(i.tagName)){const f=i.textContent.split(rt),_=f.length-1;if(_>0){i.textContent=Hn?Hn.emptyScript:"";for(let v=0;v<_;v++)i.append(f[v],Xs()),Ot.nextNode(),d.push({type:2,index:++r});i.append(f[_],Xs())}}}else if(i.nodeType===8)if(i.data===$o)d.push({type:2,index:r});else{let f=-1;for(;(f=i.data.indexOf(rt,f+1))!==-1;)d.push({type:7,index:r}),f+=rt.length-1}r++}}static createElement(t,s){const n=Ft.createElement("template");return n.innerHTML=t,n}}function Ht(e,t,s=e,n){var a,c;if(t===Ae)return t;let i=n!==void 0?(a=s._$Co)==null?void 0:a[n]:s._$Cl;const r=Ks(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),r===void 0?i=void 0:(i=new r(e),i._$AT(e,s,n)),n!==void 0?(s._$Co??(s._$Co=[]))[n]=i:s._$Cl=i),i!==void 0&&(t=Ht(e,i._$AS(e,t.values),i,n)),t}let ol=class{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:n}=this._$AD,i=((t==null?void 0:t.creationScope)??Ft).importNode(s,!0);Ot.currentNode=i;let r=Ot.nextNode(),a=0,c=0,d=n[0];for(;d!==void 0;){if(a===d.index){let u;d.type===2?u=new Ss(r,r.nextSibling,this,t):d.type===1?u=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(u=new cl(r,this,t)),this._$AV.push(u),d=n[++c]}a!==(d==null?void 0:d.index)&&(r=Ot.nextNode(),a++)}return Ot.currentNode=Ft,i}p(t){let s=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,s),s+=n.strings.length-2):n._$AI(t[s])),s++}};class Ss{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,s,n,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=Ht(this,t,s),Ks(t)?t===F||t==null||t===""?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==Ae&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):sl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&Ks(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ft.createTextNode(t)),this._$AH=t}$(t){var r;const{values:s,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Qs.createElement(il(n.h,n.h[0]),this.options)),n);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(s);else{const a=new ol(i,this),c=a.u(this.options);a.p(s),this.T(c),this._$AH=a}}_$AC(t){let s=Ca.get(t.strings);return s===void 0&&Ca.set(t.strings,s=new Qs(t)),s}k(t){Co(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let n,i=0;for(const r of t)i===s.length?s.push(n=new Ss(this.O(Xs()),this.O(Xs()),this,this.options)):n=s[i],n._$AI(r),i++;i<s.length&&(this._$AR(n&&n._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,s);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var s;this._$AM===void 0&&(this._$Cv=t,(s=this._$AP)==null||s.call(this,t))}}class ln{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,n,i,r){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=s,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=F}_$AI(t,s=this,n,i){const r=this.strings;let a=!1;if(r===void 0)t=Ht(this,t,s,0),a=!Ks(t)||t!==this._$AH&&t!==Ae,a&&(this._$AH=t);else{const c=t;let d,u;for(t=r[0],d=0;d<r.length-1;d++)u=Ht(this,c[n+d],s,d),u===Ae&&(u=this._$AH[d]),a||(a=!Ks(u)||u!==this._$AH[d]),u===F?t=F:t!==F&&(t+=(u??"")+r[d+1]),this._$AH[d]=u}a&&!i&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class al extends ln{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class ll extends ln{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class dl extends ln{constructor(t,s,n,i,r){super(t,s,n,i,r),this.type=5}_$AI(t,s=this){if((t=Ht(this,t,s,0)??F)===Ae)return;const n=this._$AH,i=t===F&&n!==F||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==F&&(n===F||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,t):this._$AH.handleEvent(t)}}class cl{constructor(t,s,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ht(this,t)}}const cc={M:ko,P:rt,A:$o,C:1,L:rl,R:ol,D:sl,V:Ht,I:Ss,H:ln,N:ll,U:dl,B:al,F:cl},Mi=Zs.litHtmlPolyfillSupport;Mi==null||Mi(Qs,Ss),(Zs.litHtmlVersions??(Zs.litHtmlVersions=[])).push("3.2.1");const hc=(e,t,s)=>{const n=(s==null?void 0:s.renderBefore)??t;let i=n._$litPart$;if(i===void 0){const r=(s==null?void 0:s.renderBefore)??null;n._$litPart$=i=new Ss(t.insertBefore(Xs(),r),r,void 0,s??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ke=class extends Qt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const t=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=t.firstChild),t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=hc(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Ae}};var el;ke._$litElement$=!0,ke.finalized=!0,(el=globalThis.litElementHydrateSupport)==null||el.call(globalThis,{LitElement:ke});const Ai=globalThis.litElementPolyfillSupport;Ai==null||Ai({LitElement:ke});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Es=e=>(t,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uc={attribute:!0,type:String,converter:Fn,reflect:!1,hasChanged:wo},pc=(e=uc,t,s)=>{const{kind:n,metadata:i}=s;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(s.name,e),n==="accessor"){const{name:a}=s;return{set(c){const d=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,d,e)},init(c){return c!==void 0&&this.P(a,void 0,e),c}}}if(n==="setter"){const{name:a}=s;return function(c){const d=this[a];t.call(this,c),this.requestUpdate(a,d,e)}}throw Error("Unsupported decorator location: "+n)};function g(e){return(t,s)=>typeof s=="object"?pc(e,t,s):((n,i,r)=>{const a=i.hasOwnProperty(r);return i.constructor.createProperty(r,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(i,r):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(e){return g({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const So=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ae(e,t){return(s,n,i)=>{const r=a=>{var c;return((c=a.renderRoot)==null?void 0:c.querySelector(e))??null};return So(s,n,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let gc;function fc(e){return(t,s)=>So(t,s,{get(){return(this.renderRoot??gc??(gc=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xt(e){return(t,s)=>So(t,s,{async get(){var n;return await this.updateComplete,((n=this.renderRoot)==null?void 0:n.querySelector(e))??null}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hl=(e,t,s)=>{for(const n of t)if(n[0]===e)return(0,n[1])();return s==null?void 0:s()};var bc=Object.defineProperty,mc=Object.getOwnPropertyDescriptor,o=(e,t,s,n)=>{for(var i=n>1?void 0:n?mc(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(n?a(t,s,i):a(i))||i);return n&&i&&bc(t,s,i),i},Eo=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},l=(e,t,s)=>(Eo(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},B=(e,t,s,n)=>(Eo(e,t,"write to private field"),t.set(e,s),s),y=(e,t,s)=>(Eo(e,t,"access private method"),s);const Vt="-b3d99b";class ul{static get instance(){var t;return(t=globalThis.__gdsElementLookupTable)!=null&&t[Vt]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[Vt]:new Map}),globalThis.__gdsElementLookupTable[Vt]}}const A=(e,t)=>function(s){var n;return n=class extends s{constructor(){super(...arguments),this.gdsElementName=e}static define(){if(n.isDefined)return;const r=globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?e:e+Vt;customElements.get(r)||(n.isDefined=!0,ul.instance.set(e,r),customElements.define(r,n),t!=null&&t.dependsOn&&t.dependsOn.forEach(a=>a.define()))}},n.isDefined=!1,n},Sa=new WeakMap;function vc(e,...t){let s=Sa.get(e);return s||(s=Ea(e),s.raw=Ea(e.raw),Sa.set(e,s)),[s,...t]}const Ea=e=>e.map(t=>{for(const[s,n]of ul.instance.entries())t=t.replace(new RegExp(`${s}(?![-a-z])`,"mg"),n);return t});function yc(e){return(t,...s)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return e(t,...s);const[n,...i]=vc(t,...s);return e(n,...i)}}const w=yc(ce);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mo=Symbol.for(""),xc=e=>{if((e==null?void 0:e.r)===Mo)return e==null?void 0:e._$litStatic$},_c=e=>({_$litStatic$:e,r:Mo}),Nn=(e,...t)=>({_$litStatic$:t.reduce((s,n,i)=>s+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[i+1],e[0]),r:Mo}),Ma=new Map,wc=e=>(t,...s)=>{const n=s.length;let i,r;const a=[],c=[];let d,u=0,b=!1;for(;u<n;){for(d=t[u];u<n&&(r=s[u],(i=xc(r))!==void 0);)d+=i+t[++u],b=!0;u!==n&&c.push(r),a.push(d),u++}if(u===n&&a.push(t[n]),b){const f=a.join("$$lit$$");(t=Ma.get(f))===void 0&&(a.raw=a,Ma.set(f,t=a)),s=c}return e(t,...s)},Ao=wc(ce),Pi=`/**
 * Do not edit directly
 * Generated on Fri, 04 Apr 2025 14:45:15 GMT
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
  --gds-color-l2-content-information: #d7d7d7;
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
  --gds-color-l3-states-dark-hover: #ffffff 15%;
  --gds-color-l3-states-dark-pressed: #ffffff 25%;
  --gds-color-l3-states-light-hover: #d7d7d7 10%;
  --gds-color-l3-states-light-pressed: #d7d7d7 20%;
  --gds-color-l3-states-positive-hover: #54b561 10%;
  --gds-color-l3-states-positive-pressed: #54b561 20%;
  --gds-color-l3-states-negative-hover: #ee8375 10%;
  --gds-color-l3-states-negative-pressed: #ee8375 20%;
`,pl=`/**
 * Do not edit directly
 * Generated on Fri, 04 Apr 2025 14:45:15 GMT
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
  --gds-color-l2-content-information: #1b1b1b;
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
  --gds-color-l3-states-dark-hover: #ffffff 15%;
  --gds-color-l3-states-dark-pressed: #ffffff 25%;
  --gds-color-l3-states-light-hover: #1b1b1b 10%;
  --gds-color-l3-states-light-pressed: #1b1b1b 20%;
  --gds-color-l3-states-positive-hover: #35723d 10%;
  --gds-color-l3-states-positive-pressed: #35723d 20%;
  --gds-color-l3-states-negative-hover: #a63e2a 10%;
  --gds-color-l3-states-negative-pressed: #a63e2a 20%;
`,kc=`/**
 * Do not edit directly
 * Generated on Fri, 04 Apr 2025 14:45:15 GMT
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
`,$c=`/**
 * Do not edit directly
 * Generated on Fri, 04 Apr 2025 14:45:15 GMT
 */

:host {
--gds-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
--gds-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
--gds-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);
--gds-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03);
--gds-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03);
}
`,Cc=`/**
 * Do not edit directly
 * Generated on Fri, 04 Apr 2025 14:45:15 GMT
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
`,Sc=`/**
 * Do not edit directly
 * Generated on Fri, 04 Apr 2025 14:45:15 GMT
 */

:host {
  --gds-text-weight-bold: 700;
  --gds-text-weight-medium: 500;
  --gds-text-weight-book: 450;
  --gds-text-weight-regular: 400;
  --gds-text-weight-light: 300;
  --gds-text-size-preamble-xs: 1rem;
  --gds-text-size-preamble-s: 1.125rem;
  --gds-text-size-preamble-m: 1.25rem;
  --gds-text-size-preamble-l: 1.5rem;
  --gds-text-size-preamble-xl: 1.75rem;
  --gds-text-size-preamble-2xl: 2rem;
  --gds-text-size-display-s: 2rem;
  --gds-text-size-display-m: 2.25rem;
  --gds-text-size-display-l: 3rem;
  --gds-text-size-display-xl: 4rem;
  --gds-text-size-display-2xl: 5.125rem;
  --gds-text-size-body-s: 0.875rem;
  --gds-text-size-body-m: 1rem;
  --gds-text-size-body-l: 1.25rem;
  --gds-text-size-detail-xs: 0.75rem;
  --gds-text-size-detail-s: 0.875rem;
  --gds-text-size-detail-m: 1rem;
  --gds-text-size-heading-2xl: 0.875rem;
  --gds-text-size-heading-2xs: 0.875rem;
  --gds-text-size-heading-xs: 1rem;
  --gds-text-size-heading-s: 1.25rem;
  --gds-text-size-heading-m: 1.5rem;
  --gds-text-size-heading-l: 1.75rem;
  --gds-text-size-heading-xl: 2rem;
  --gds-text-line-height-preamble-xs: 1.5rem;
  --gds-text-line-height-preamble-s: 1.625rem;
  --gds-text-line-height-preamble-m: 1.75rem;
  --gds-text-line-height-preamble-l: 2rem;
  --gds-text-line-height-preamble-xl: 2.25rem;
  --gds-text-line-height-preamble-2xl: 2.5rem;
  --gds-text-line-height-display-s: 2.5rem;
  --gds-text-line-height-display-m: 2.75rem;
  --gds-text-line-height-display-l: 3.5rem;
  --gds-text-line-height-display-xl: 4.5rem;
  --gds-text-line-height-display-2xl: 5.625rem;
  --gds-text-line-height-body-s: 1.25rem;
  --gds-text-line-height-body-m: 1.5rem;
  --gds-text-line-height-body-l: 1.625rem;
  --gds-text-line-height-detail-xs: 1rem;
  --gds-text-line-height-detail-s: 1.125rem;
  --gds-text-line-height-detail-m: 1.25rem;
  --gds-text-line-height-heading-2xs: 1.25rem;
  --gds-text-line-height-heading-xs: 1.5rem;
  --gds-text-line-height-heading-s: 1.75rem;
  --gds-text-line-height-heading-m: 2rem;
  --gds-text-line-height-heading-l: 2.5rem;
  --gds-text-line-height-heading-xl: 2.75rem;
}
`;var Re,In,ot,Bn,Dt,Fe,it,jn,Ri,gl,es,zs,Fi,fl;class Ec{constructor(t){h(this,Ri),h(this,es),h(this,Fi),h(this,Re,!To()),h(this,In,!1),h(this,ot,[]),h(this,Bn,[]),h(this,Dt,new Map),h(this,Fe,new Map),h(this,it,[]),h(this,jn,[]),this.host=t,this.host.addController(this)}hostConnected(){y(this,Fi,fl).call(this)}has(t){return l(this,Re)?l(this,Fe).has(t):l(this,Dt).has(t)}inject(t,s){y(this,Ri,gl).call(this,t,s),y(this,es,zs).call(this)}clear(t){l(this,Re)?this.host.updateComplete.then(()=>{const s=l(this,Fe).get(t);s==null||s.remove(),l(this,Fe).delete(t)}):l(this,Dt).delete(t),y(this,es,zs).call(this)}clearAll(){l(this,Re)?this.host.updateComplete.then(()=>{l(this,Fe).forEach(t=>t.remove()),l(this,it).forEach(t=>t.remove()),l(this,Fe).clear(),B(this,it,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],l(this,Dt).clear(),B(this,ot,[]))}clearInitial(){l(this,Re)?this.host.updateComplete.then(()=>{l(this,it).forEach(t=>t.remove()),B(this,it,[])}):B(this,ot,[]),y(this,es,zs).call(this)}restoreInitial(){l(this,Re)?l(this,jn).forEach(t=>{l(this,it).push(t.cloneNode(!0))}):B(this,ot,[...l(this,Bn)]),y(this,es,zs).call(this)}}Re=new WeakMap;In=new WeakMap;ot=new WeakMap;Bn=new WeakMap;Dt=new WeakMap;Fe=new WeakMap;it=new WeakMap;jn=new WeakMap;Ri=new WeakSet;gl=function(e,t){if(l(this,Re)){let s=l(this,Fe).get(e);s||(s=document.createElement("style"),l(this,Fe).set(e,s)),s.textContent=t.cssText}else{if(!this.host.shadowRoot||!t.styleSheet)return;l(this,Dt).set(e,t.styleSheet)}};es=new WeakSet;zs=function(){if(l(this,Re))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(e=>{e.remove()}),l(this,it).forEach(e=>{var t;(t=this.host.shadowRoot)==null||t.appendChild(e)}),l(this,Fe).forEach(e=>{var t;(t=this.host.shadowRoot)==null||t.appendChild(e)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...l(this,ot),...Array.from(l(this,Dt).values())]}};Fi=new WeakSet;fl=function(){l(this,In)||(l(this,Re)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(e=>{l(this,it).push(e),l(this,jn).push(e.cloneNode(!0))})}):this.host.shadowRoot&&l(this,ot).length===0&&(B(this,ot,[...this.host.shadowRoot.adoptedStyleSheets||[]]),B(this,Bn,[...l(this,ot)])),B(this,In,!0))};function To(){try{return new CSSStyleSheet,!0}catch{return!1}}var Mc={};const fi=typeof process<"u"&&Mc!==void 0;var Hi,Gn,Un,Lo,Ni,bl,Ii,ml;function Ac(){return fi?[]:document.adoptedStyleSheets||[]}const Tc=class vl{constructor(){h(this,Ni),h(this,Ii),h(this,Hi,!To()),h(this,Gn,new Map),h(this,Un,new Map),h(this,Lo,Ac())}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new vl),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(t,s){if(l(this,Hi)){const n=Array.isArray(s)?s.map(i=>i.toString()).join(""):s.toString();y(this,Ni,bl).call(this,t,n)}else s.styleSheet&&y(this,Ii,ml).call(this,t,s.styleSheet)}};Hi=new WeakMap;Gn=new WeakMap;Un=new WeakMap;Lo=new WeakMap;Ni=new WeakSet;bl=function(e,t){if(fi)return;let s=l(this,Un).get(e);s||(s=document.createElement("style"),l(this,Un).set(e,s)),s.textContent=t,document.head.appendChild(s)};Ii=new WeakSet;ml=function(e,t){fi||(l(this,Gn).set(e,t),document.adoptedStyleSheets=[...l(this,Lo),...Array.from(l(this,Gn).values())])};let Lc=Tc;const K=[ne(Cc),ne(Sc),ne(kc),ne($c)];Lc.instance.injectGlobalStyles("root-tokens",H`
    :root,
    :root[gds-theme='light'] {
      ${ne(pl)}
    }
    :root[gds-theme='dark'] {
      ${ne(Pi)}
    }
  `);const Oc={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},Dc=/^([<|>]=?)?([0-9a-z]+)/,yl=["{","}",";",":",","],Aa=[" ","/n"];function zc(e=""){const t=[];let s="";for(let n=0;n<e.length;n++){const i=e[n];if(Aa.includes(i)||(s+=i),yl.includes(i)){t.push(s.slice(0,-1)),t.push(i),s="";continue}if(Aa.includes(i)||n===e.length-1){t.push(s),s="";continue}}return t.filter(n=>n!=="")}function Vc(e){const t=[];let s={breakpoint:"-",values:[]};const n=()=>({sel:"",values:[]});let i=n();for(const r of e){if(!yl.includes(r)){i.values.push(r);continue}if(r==="{"&&(s={breakpoint:i.values.join(","),values:[]},i=n()),r===";"&&(t.length===0&&t.push(s),i.values.length>0&&(s.values.push(i),i=n())),r===":"){const a=i.values.pop()??"";i.sel=a}s&&r==="}"&&(s.values.push(i),i=n(),t.push(s))}return i.values.length>0&&s.values.push(i),t.length===0&&t.push(s),t}function Wc(e){return e.split(",").map(s=>{const n=s.trim().match(Dc);if(!n)throw new Error(`Invalid breakpoint specifier: ${s}`);return{condition:n[1],value:n[2]}})}function Pc(e,t,s,n=r=>r,i=(r,a)=>`${r}: ${a.join(" ")};`){let r="";for(const a of s){const u=`@media ${(a.breakpoint==="-"?[{condition:">=",value:"0"}]:Wc(a.breakpoint)).map(b=>{var f;return`(${(f=b.condition)!=null&&f.includes("<")?"max-width":"min-width"}: ${Oc[b.value]??b.value})`}).join(" and ")} {${a.values.map(b=>{let f=e;b.sel.length>0&&(f=e===":host"?`:host(:${b.sel})`:`${e}:${b.sel}`);const _=i(t,b.values.map(n));return b.sel==="hover"?`@media (hover: hover) {${f}{${_}}}`:`${f}{${_}}`}).join("")}}`;r+=u}return r}const Ti=new Map;function k(e){return(t,s)=>{const n=(e==null?void 0:e.selector)??":host",i=(e==null?void 0:e.property)??String(s),r=e==null?void 0:e.valueTemplate,a=e==null?void 0:e.styleTemplate,c=(e==null?void 0:e.cacheOverrideKey)??"0";g({attribute:e==null?void 0:e.attribute,noAccessor:!0})(t,s),Object.defineProperty(t,s,{get:function(){return this["__"+String(s)]},set:async function(d){if(!d)return;this["__"+String(s)]=d,await this.updateComplete;const u=this.level??"0",b=n+i+d+u+c;if(Ti.has(b)){this._dynamicStylesController.inject(`sep_${String(s)}`,Ti.get(b));return}const f=Vc(zc(d)),_=Pc(n,i,f,r==null?void 0:r.bind(this),a==null?void 0:a.bind(this)),v=ne(_);Ti.set(b,v),this._dynamicStylesController.inject(`sep_${String(s)}`,v)}})}}var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/*! *****************************************************************************
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
***************************************************************************** */var La;(function(e){(function(t){var s=typeof Ta=="object"?Ta:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),n=i(e);typeof s.Reflect>"u"?s.Reflect=e:n=i(s.Reflect,n),t(n);function i(r,a){return function(c,d){typeof r[c]!="function"&&Object.defineProperty(r,c,{configurable:!0,writable:!0,value:d}),a&&a(c,d)}}})(function(t){var s=Object.prototype.hasOwnProperty,n=typeof Symbol=="function",i=n&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",r=n&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",a=typeof Object.create=="function",c={__proto__:[]}instanceof Array,d=!a&&!c,u={create:a?function(){return Ci(Object.create(null))}:c?function(){return Ci({__proto__:null})}:function(){return Ci({})},has:d?function(p,m){return s.call(p,m)}:function(p,m){return m in p},get:d?function(p,m){return s.call(p,m)?p[m]:void 0}:function(p,m){return p[m]}},b=Object.getPrototypeOf(Function),f=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",_=!f&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:Xd(),v=!f&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:Kd(),C=!f&&typeof WeakMap=="function"?WeakMap:Qd(),E=new C;function V(p,m,x,$){if(te(x)){if(!ua(p))throw new TypeError;if(!pa(m))throw new TypeError;return Pe(p,m)}else{if(!ua(p))throw new TypeError;if(!le(m))throw new TypeError;if(!le($)&&!te($)&&!Kt($))throw new TypeError;return Kt($)&&($=void 0),x=Qe(x),$t(p,m,x,$)}}t("decorate",V);function O(p,m){function x($,S){if(!le($))throw new TypeError;if(!te(S)&&!Ud(S))throw new TypeError;be(p,m,$,S)}return x}t("metadata",O);function N(p,m,x,$){if(!le(x))throw new TypeError;return te($)||($=Qe($)),be(p,m,x,$)}t("defineMetadata",N);function G(p,m,x){if(!le(m))throw new TypeError;return te(x)||(x=Qe(x)),dt(p,m,x)}t("hasMetadata",G);function se(p,m,x){if(!le(m))throw new TypeError;return te(x)||(x=Qe(x)),ee(p,m,x)}t("hasOwnMetadata",se);function J(p,m,x){if(!le(m))throw new TypeError;return te(x)||(x=Qe(x)),Ke(p,m,x)}t("getMetadata",J);function ye(p,m,x){if(!le(m))throw new TypeError;return te(x)||(x=Qe(x)),xe(p,m,x)}t("getOwnMetadata",ye);function Je(p,m){if(!le(p))throw new TypeError;return te(m)||(m=Qe(m)),Ee(p,m)}t("getMetadataKeys",Je);function kt(p,m){if(!le(p))throw new TypeError;return te(m)||(m=Qe(m)),Me(p,m)}t("getOwnMetadataKeys",kt);function Xe(p,m,x){if(!le(m))throw new TypeError;te(x)||(x=Qe(x));var $=fe(m,x,!1);if(te($)||!$.delete(p))return!1;if($.size>0)return!0;var S=E.get(m);return S.delete(x),S.size>0||E.delete(m),!0}t("deleteMetadata",Xe);function Pe(p,m){for(var x=p.length-1;x>=0;--x){var $=p[x],S=$(m);if(!te(S)&&!Kt(S)){if(!pa(S))throw new TypeError;m=S}}return m}function $t(p,m,x,$){for(var S=p.length-1;S>=0;--S){var he=p[S],L=he(m,x,$);if(!te(L)&&!Kt(L)){if(!le(L))throw new TypeError;$=L}}return $}function fe(p,m,x){var $=E.get(p);if(te($)){if(!x)return;$=new _,E.set(p,$)}var S=$.get(m);if(te(S)){if(!x)return;S=new _,$.set(m,S)}return S}function dt(p,m,x){var $=ee(p,m,x);if($)return!0;var S=$i(m);return Kt(S)?!1:dt(p,S,x)}function ee(p,m,x){var $=fe(m,x,!1);return te($)?!1:jd($.has(p))}function Ke(p,m,x){var $=ee(p,m,x);if($)return xe(p,m,x);var S=$i(m);if(!Kt(S))return Ke(p,S,x)}function xe(p,m,x){var $=fe(m,x,!1);if(!te($))return $.get(p)}function be(p,m,x,$){var S=fe(x,$,!0);S.set(p,m)}function Ee(p,m){var x=Me(p,m),$=$i(p);if($===null)return x;var S=Ee($,m);if(S.length<=0)return x;if(x.length<=0)return S;for(var he=new v,L=[],D=0,M=x;D<M.length;D++){var P=M[D],R=he.has(P);R||(he.add(P),L.push(P))}for(var ct=0,fa=S;ct<fa.length;ct++){var P=fa[ct],R=he.has(P);R||(he.add(P),L.push(P))}return L}function Me(p,m){var x=[],$=fe(p,m,!1);if(te($))return x;for(var S=$.keys(),he=Yd(S),L=0;;){var D=qd(he);if(!D)return x.length=L,x;var M=Zd(D);try{x[L]=M}catch(P){try{Jd(he)}finally{throw P}}L++}}function gn(p){if(p===null)return 1;switch(typeof p){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return p===null?1:6;default:return 6}}function te(p){return p===void 0}function Kt(p){return p===null}function Nd(p){return typeof p=="symbol"}function le(p){return typeof p=="object"?p!==null:typeof p=="function"}function Id(p,m){switch(gn(p)){case 0:return p;case 1:return p;case 2:return p;case 3:return p;case 4:return p;case 5:return p}var x="string",$=ga(p,i);if($!==void 0){var S=$.call(p,x);if(le(S))throw new TypeError;return S}return Bd(p)}function Bd(p,m){var x,$;{var S=p.toString;if(fn(S)){var $=S.call(p);if(!le($))return $}var x=p.valueOf;if(fn(x)){var $=x.call(p);if(!le($))return $}}throw new TypeError}function jd(p){return!!p}function Gd(p){return""+p}function Qe(p){var m=Id(p);return Nd(m)?m:Gd(m)}function ua(p){return Array.isArray?Array.isArray(p):p instanceof Object?p instanceof Array:Object.prototype.toString.call(p)==="[object Array]"}function fn(p){return typeof p=="function"}function pa(p){return typeof p=="function"}function Ud(p){switch(gn(p)){case 3:return!0;case 4:return!0;default:return!1}}function ga(p,m){var x=p[m];if(x!=null){if(!fn(x))throw new TypeError;return x}}function Yd(p){var m=ga(p,r);if(!fn(m))throw new TypeError;var x=m.call(p);if(!le(x))throw new TypeError;return x}function Zd(p){return p.value}function qd(p){var m=p.next();return m.done?!1:m}function Jd(p){var m=p.return;m&&m.call(p)}function $i(p){var m=Object.getPrototypeOf(p);if(typeof p!="function"||p===b||m!==b)return m;var x=p.prototype,$=x&&Object.getPrototypeOf(x);if($==null||$===Object.prototype)return m;var S=$.constructor;return typeof S!="function"||S===p?m:S}function Xd(){var p={},m=[],x=function(){function L(D,M,P){this._index=0,this._keys=D,this._values=M,this._selector=P}return L.prototype["@@iterator"]=function(){return this},L.prototype[r]=function(){return this},L.prototype.next=function(){var D=this._index;if(D>=0&&D<this._keys.length){var M=this._selector(this._keys[D],this._values[D]);return D+1>=this._keys.length?(this._index=-1,this._keys=m,this._values=m):this._index++,{value:M,done:!1}}return{value:void 0,done:!0}},L.prototype.throw=function(D){throw this._index>=0&&(this._index=-1,this._keys=m,this._values=m),D},L.prototype.return=function(D){return this._index>=0&&(this._index=-1,this._keys=m,this._values=m),{value:D,done:!0}},L}();return function(){function L(){this._keys=[],this._values=[],this._cacheKey=p,this._cacheIndex=-2}return Object.defineProperty(L.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),L.prototype.has=function(D){return this._find(D,!1)>=0},L.prototype.get=function(D){var M=this._find(D,!1);return M>=0?this._values[M]:void 0},L.prototype.set=function(D,M){var P=this._find(D,!0);return this._values[P]=M,this},L.prototype.delete=function(D){var M=this._find(D,!1);if(M>=0){for(var P=this._keys.length,R=M+1;R<P;R++)this._keys[R-1]=this._keys[R],this._values[R-1]=this._values[R];return this._keys.length--,this._values.length--,D===this._cacheKey&&(this._cacheKey=p,this._cacheIndex=-2),!0}return!1},L.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=p,this._cacheIndex=-2},L.prototype.keys=function(){return new x(this._keys,this._values,$)},L.prototype.values=function(){return new x(this._keys,this._values,S)},L.prototype.entries=function(){return new x(this._keys,this._values,he)},L.prototype["@@iterator"]=function(){return this.entries()},L.prototype[r]=function(){return this.entries()},L.prototype._find=function(D,M){return this._cacheKey!==D&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=D)),this._cacheIndex<0&&M&&(this._cacheIndex=this._keys.length,this._keys.push(D),this._values.push(void 0)),this._cacheIndex},L}();function $(L,D){return L}function S(L,D){return D}function he(L,D){return[L,D]}}function Kd(){return function(){function p(){this._map=new _}return Object.defineProperty(p.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),p.prototype.has=function(m){return this._map.has(m)},p.prototype.add=function(m){return this._map.set(m,m),this},p.prototype.delete=function(m){return this._map.delete(m)},p.prototype.clear=function(){this._map.clear()},p.prototype.keys=function(){return this._map.keys()},p.prototype.values=function(){return this._map.values()},p.prototype.entries=function(){return this._map.entries()},p.prototype["@@iterator"]=function(){return this.keys()},p.prototype[r]=function(){return this.keys()},p}()}function Qd(){var p=16,m=u.create(),x=$();return function(){function M(){this._key=$()}return M.prototype.has=function(P){var R=S(P,!1);return R!==void 0?u.has(R,this._key):!1},M.prototype.get=function(P){var R=S(P,!1);return R!==void 0?u.get(R,this._key):void 0},M.prototype.set=function(P,R){var ct=S(P,!0);return ct[this._key]=R,this},M.prototype.delete=function(P){var R=S(P,!1);return R!==void 0?delete R[this._key]:!1},M.prototype.clear=function(){this._key=$()},M}();function $(){var M;do M="@@WeakMap@@"+D();while(u.has(m,M));return m[M]=!0,M}function S(M,P){if(!s.call(M,x)){if(!P)return;Object.defineProperty(M,x,{value:u.create()})}return M[x]}function he(M,P){for(var R=0;R<P;++R)M[R]=Math.random()*255|0;return M}function L(M){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(M)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(M)):he(new Uint8Array(M),M):he(new Array(M),M)}function D(){var M=L(p);M[6]=M[6]&79|64,M[8]=M[8]&191|128;for(var P="",R=0;R<p;++R){var ct=M[R];(R===4||R===6||R===8)&&(P+="-"),ct<16&&(P+="0"),P+=ct.toString(16).toLowerCase()}return P}}function Ci(p){return p.__=void 0,delete p.__,p}})})(La||(La={}));class I extends ke{constructor(){super(),this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new Ec(this)}static define(){}connectedCallback(){var t;super.connectedCallback(),this.setAttribute("gds-element",((t=this.gdsElementName)==null?void 0:t.toString())||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}}I.isDefined=!1;o([U()],I.prototype,"_isUsingTransitionalStyles",2);function xl(e,t,s){if(e==="transparent"||e==="currentColor"||e==="inherit")return e;const[n,i]=e.split("/"),r=`var(--gds-color-l${s}-${t}-${n})`;return i?`color-mix(in srgb, ${r} ${parseFloat(i)*100}%, transparent 0%)`:r}function Oo(e){return{valueTemplate:function(t){return xl(t,e,this.level)}}}const Wt={valueTemplate:e=>`var(--gds-space-${e}, 0)`},_e={valueTemplate:e=>`var(--gds-space-${Rc(e)}, ${e})`},Li={valueTemplate:e=>{const s=(e.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-space-${e})`:`calc(var(--gds-space-${e.substring(1)}) * -1)`;return e==="auto"?"auto":s},styleTemplate:(e,t)=>{const s=c=>c==="auto"?"auto":`${c}`,n=s(t[0]),i=t.length>1?s(t[1]):n,r=t.length>2?s(t[2]):n,a=t.length>3?s(t[3]):i;return`${e}: ${n} ${i} ${r} ${a};`}};function Rc(e){return e.replace(/[^a-zA-Z0-9-]/g,"")}function Ue(e){class t extends e{}return o([k(_e)],t.prototype,"width",2),o([k(_e)],t.prototype,"min-width",2),o([k(_e)],t.prototype,"max-width",2),o([k(_e)],t.prototype,"inline-size",2),o([k(_e)],t.prototype,"min-inline-size",2),o([k(_e)],t.prototype,"max-inline-size",2),t}function Do(e){class t extends e{}return o([k(_e)],t.prototype,"height",2),o([k(_e)],t.prototype,"min-height",2),o([k(_e)],t.prototype,"max-height",2),o([k(_e)],t.prototype,"block-size",2),o([k(_e)],t.prototype,"min-block-size",2),o([k(_e)],t.prototype,"max-block-size",2),t}function at(e){class t extends e{}return o([k(Li)],t.prototype,"margin",2),o([k(Li)],t.prototype,"margin-inline",2),o([k(Li)],t.prototype,"margin-block",2),t}function Fc(e){class t extends e{}return o([k(Wt)],t.prototype,"padding",2),o([k(Wt)],t.prototype,"padding-inline",2),o([k(Wt)],t.prototype,"padding-block",2),t}function Ye(e){class t extends e{}return o([k()],t.prototype,"align-self",2),o([k()],t.prototype,"justify-self",2),o([k()],t.prototype,"place-self",2),o([k()],t.prototype,"grid-column",2),o([k()],t.prototype,"grid-row",2),o([k()],t.prototype,"grid-area",2),o([k()],t.prototype,"flex",2),o([k()],t.prototype,"order",2),t}function dn(e){class t extends e{}return o([k()],t.prototype,"position",2),o([k()],t.prototype,"transform",2),o([k()],t.prototype,"inset",2),t}const Hc=H`
  :host {
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-color-l2-border-primary);
  }
  :host(:focus-visible) {
    outline-color: color-mix(in srgb, currentcolor, #000 100%);
    outline-offset: var(--gds-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-space-3xs);
  }
`;var Nc=Hc;let W=class extends Ue(Do(at(Fc(Ye(dn(I)))))){constructor(){super(...arguments),this.level="2"}render(){return w`<slot></slot>`}};W.styles=[K,Nc];o([k()],W.prototype,"display",2);o([g()],W.prototype,"level",2);o([k(Oo("content"))],W.prototype,"color",2);o([k(Oo("background"))],W.prototype,"background",2);o([k({styleTemplate:function(e,t){const s=this,[n,i=s["border-style"]||"solid",r=s["border-color"]||"primary"]=t,a=`var(--gds-space-${n})`,c=xl(r,"border",s.level);return`border: ${a} ${i} ${c};`}})],W.prototype,"border",2);o([k(Oo("border"))],W.prototype,"border-color",2);o([k(Wt)],W.prototype,"border-width",2);o([k()],W.prototype,"border-style",2);o([k(Wt)],W.prototype,"border-radius",2);o([k({valueTemplate:e=>`var(--gds-shadow-${e})`})],W.prototype,"box-shadow",2);o([k()],W.prototype,"opacity",2);o([k()],W.prototype,"overflow",2);o([k()],W.prototype,"box-sizing",2);o([k()],W.prototype,"z-index",2);o([k({styleTemplate:(e,t)=>{const s=t[0],n=`font-size: var(--gds-text-size-${s});`,i=`line-height: var(--gds-text-line-height-${s});`;return n+i}})],W.prototype,"font-size",2);o([k({valueTemplate:e=>`var(--gds-text-weight-${e})`})],W.prototype,"font-weight",2);o([k()],W.prototype,"text-align",2);o([k()],W.prototype,"text-wrap",2);o([k()],W.prototype,"overflow-wrap",2);o([k()],W.prototype,"white-space",2);o([k({...Wt,styleTemplate:(e,t)=>{const s=t[0],n=t[1]||s;return`gap: ${s} ${n};`},cacheOverrideKey:"flex"})],W.prototype,"gap",2);o([k()],W.prototype,"align-items",2);o([k()],W.prototype,"align-content",2);o([k()],W.prototype,"justify-content",2);o([k()],W.prototype,"justify-items",2);o([k()],W.prototype,"flex-direction",2);o([k()],W.prototype,"flex-wrap",2);o([k()],W.prototype,"place-items",2);o([k()],W.prototype,"place-content",2);W=o([A("gds-div")],W);const Ic=H`
  @layer defaults {
    a:link {
      color: currentColor;
      text-underline-offset: 0.1lh;
      font-weight: var(--gds-text-weight-book);
    }

    a:visited {
      color: currentColor;
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
`,Bc=H`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var jc=Bc;let Te=class extends W{constructor(){super(...arguments),this.tag="span"}render(){const e=_c(encodeURI(this.tag));return Ao`<${e} tag><slot></slot></${e}>`}};Te.styles=[K,Ic,jc];o([g({type:String})],Te.prototype,"tag",2);o([k({selector:"[tag]",styleTemplate:(e,t)=>{const s=t[0],n=`font-size: var(--gds-text-size-${s});`,i=`line-height: var(--gds-text-line-height-${s});`;return n+i}})],Te.prototype,"font-size",2);o([k({selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],Te.prototype,"font-weight",2);o([k()],Te.prototype,"text-transform",2);o([k({selector:"[tag]"})],Te.prototype,"text-decoration",2);o([k({selector:"[tag]",styleTemplate:(e,t)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${t[0]};
      -webkit-box-orient: vertical;`})],Te.prototype,"lines",2);Te=o([A("gds-text")],Te);Te.define();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bi="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gc=(e,...t)=>({strTag:!0,strings:e,values:t}),ie=Gc,Uc=e=>typeof e!="string"&&"strTag"in e,_l=(e,t,s)=>{let n=e[0];for(let i=1;i<e.length;i++)n+=t[s?s[i-1]:i-1],n+=e[i];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wl=e=>Uc(e)?_l(e.strings,e.values):e;let T=wl,Oa=!1;function Yc(e){if(Oa)throw new Error("lit-localize can only be configured once");T=e,Oa=!0}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Zc{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(Bi,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Bi,this.__litLocalizeEventHandler)}}const qc=e=>e.addController(new Zc(e)),Jc=qc;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze=()=>(e,t)=>(e.addInitializer(Jc),e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class kl{constructor(){this.settled=!1,this.promise=new Promise((t,s)=>{this._resolve=t,this._reject=s})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const et=[];for(let e=0;e<256;e++)et[e]=(e>>4&15).toString(16)+(e&15).toString(16);function Xc(e){let t=0,s=8997,n=0,i=33826,r=0,a=40164,c=0,d=52210;for(let u=0;u<e.length;u++)s^=e.charCodeAt(u),t=s*435,n=i*435,r=a*435,c=d*435,r+=s<<8,c+=i<<8,n+=t>>>16,s=t&65535,r+=n>>>16,i=n&65535,d=c+(r>>>16)&65535,a=r&65535;return et[d>>8]+et[d&255]+et[a>>8]+et[a&255]+et[i>>8]+et[i&255]+et[s>>8]+et[s&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kc="",Qc="h",eh="s";function th(e,t){return(t?Qc:eh)+Xc(typeof e=="string"?e:e.join(Kc))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Da=new WeakMap,za=new Map;function sh(e,t,s){if(e){const n=(s==null?void 0:s.id)??nh(t),i=e[n];if(i){if(typeof i=="string")return i;if("strTag"in i)return _l(i.strings,t.values,i.values);{let r=Da.get(i);return r===void 0&&(r=i.values,Da.set(i,r)),{...i,values:r.map(a=>t.values[a])}}}}return wl(t)}function nh(e){const t=typeof e=="string"?e:e.strings;let s=za.get(t);return s===void 0&&(s=th(t,typeof e!="string"&&!("strTag"in e)),za.set(t,s)),s}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Oi(e){window.dispatchEvent(new CustomEvent(Bi,{detail:e}))}let Yn="",Di,$l,Zn,ji,Cl,Et=new kl;Et.resolve();let bn=0;const ih=e=>(Yc((t,s)=>sh(Cl,t,s)),Yn=$l=e.sourceLocale,Zn=new Set(e.targetLocales),Zn.add(e.sourceLocale),ji=e.loadLocale,{getLocale:rh,setLocale:oh}),rh=()=>Yn,oh=e=>{if(e===(Di??Yn))return Et.promise;if(!Zn||!ji)throw new Error("Internal error");if(!Zn.has(e))throw new Error("Invalid locale code");bn++;const t=bn;return Di=e,Et.settled&&(Et=new kl),Oi({status:"loading",loadingLocale:e}),(e===$l?Promise.resolve({templates:void 0}):ji(e)).then(n=>{bn===t&&(Yn=e,Di=void 0,Cl=n.templates,Oi({status:"ready",readyLocale:e}),Et.resolve())},n=>{bn===t&&(Oi({status:"error",errorLocale:e,errorMessage:n.toString()}),Et.reject(n))}),Et.promise};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ms=e=>(...t)=>({_$litDirective$:e,values:t});let hn=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=Ms(class extends hn{constructor(e){var t;if(super(e),e.type!==cn.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!((n=this.nt)!=null&&n.has(r))&&this.st.add(r);return this.render(t)}const s=e.element.classList;for(const r of this.st)r in t||(s.remove(r),this.st.delete(r));for(const r in t){const a=!!t[r];a===this.st.has(r)||(i=this.nt)!=null&&i.has(r)||(a?(s.add(r),this.st.add(r)):(s.remove(r),this.st.delete(r)))}return Ae}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function X(e,t,s){return e?t(e):s==null?void 0:s(e)}var xn,_n,Gi;const ah=class Sl{constructor(){h(this,xn,new Map),h(this,_n,new Map),h(this,Gi,!To())}static get instance(){var t;return(t=globalThis.__gdsTransitionalStyles)!=null&&t[Vt]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[Vt]:new Sl}),globalThis.__gdsTransitionalStyles[Vt]}apply(t,s){if(!t.shadowRoot)return;const n=l(this,xn).get(s);n&&(l(this,_n).set(s,t),this.applyToElement(s,n))}applyToElement(t,s){var u,b;const n=l(this,_n).get(t);if(!n||!n.shadowRoot)return;const i=()=>{n._dynamicStylesController.clearInitial(),n._dynamicStylesController.inject("t-styles",ne(s)),n._isUsingTransitionalStyles=!0},r=()=>{n._isUsingTransitionalStyles=!1,n._dynamicStylesController.clear("t-styles"),n._dynamicStylesController.restoreInitial()},a="[gds-element=gds-theme]";let c=n.getRootNode(),d=n.closest(a);for(;d===null&&c!==document;)d=(u=c.host)==null?void 0:u.closest(a),c=(b=c.host)==null?void 0:b.getRootNode();if(d){const f=d,_=()=>{f.designVersion==="2023"?r():i()};if(f.addEventListener("gds-design-version-changed",_),n.addEventListener("gds-element-disconnected",()=>f.removeEventListener("gds-design-version-changed",_)),f.designVersion==="2023"){r();return}}i()}register(t,s){let n=s;l(this,Gi)&&(n=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${s}`),l(this,xn).set(t,n),this.applyToElement(t,n)}};xn=new WeakMap;_n=new WeakMap;Gi=new WeakMap;let pe=ah;const El=e=>{class t extends e{constructor(){super(...arguments),this.onblur=n=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:n.relatedTarget}))},this.onfocus=n=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:n.relatedTarget}))}}focus(n){this.setAttribute("tabindex","0"),super.focus(n)}}return t},lh=H`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-color-l2-border-primary);
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
      position: relative;

      &::before {
        content: ' ';
        display: flex;
        inset: var(--gds-space-2xs);
        position: absolute;
        border: var(--gds-space-3xs) solid currentColor;
        border-radius: var(--gds-space-xs);
        opacity: 0;
        visitility: hidden;
        pointer-events: none;
      }
    }

    :host([highlighted]) {
      background-color: var(--gds-color-l2-background-tertiary);
      color: var(--gds-color-l2-content-tertiary);
    }

    :host(:hover:not([highlighted])) div {
      background-color: var(--gds-color-l3-background-secondary);
    }

    :host(:focus-visible) {
      outline: none;

      div::before {
        inset: var(--gds-space-2xs);
        opacity: 1;
        visivility: visible;
      }
    }

    :host([inert]) {
      display: none;
    }

    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1lh;
      width: 1lh;
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
            color: var(--gds-color-l2-content-tertiary);
            stroke-width: var(--gds-space-2xs);
          }
        }
      }
    }
  }
`;var Ml=lh,Ui;let ls=class extends El(I){constructor(){super(...arguments),h(this,Ui,()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",l(this,Ui)),pe.instance.apply(this,"gds-option")}render(){return w`<div><slot></slot></div>`}};Ui=new WeakMap;ls.styles=[Ml];ls=o([A("gds-menu-item")],ls);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:dh}=cc,ch=e=>e===null||typeof e!="object"&&typeof e!="function",hh=e=>e.strings===void 0,Va=()=>document.createComment(""),Ds=(e,t,s)=>{var r;const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(s===void 0){const a=n.insertBefore(Va(),i),c=n.insertBefore(Va(),i);s=new dh(a,c,e,e.options)}else{const a=s._$AB.nextSibling,c=s._$AM,d=c!==e;if(d){let u;(r=s._$AQ)==null||r.call(s,e),s._$AM=e,s._$AP!==void 0&&(u=e._$AU)!==c._$AU&&s._$AP(u)}if(a!==i||d){let u=s._$AA;for(;u!==a;){const b=u.nextSibling;n.insertBefore(u,i),u=b}}}return s},St=(e,t,s=e)=>(e._$AI(t,s),e),uh={},ph=(e,t=uh)=>e._$AH=t,gh=e=>e._$AH,zi=e=>{var n;(n=e._$AP)==null||n.call(e,!1,!0);let t=e._$AA;const s=e._$AB.nextSibling;for(;t!==s;){const i=t.nextSibling;t.remove(),t=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qs=(e,t)=>{var n;const s=e._$AN;if(s===void 0)return!1;for(const i of s)(n=i._$AO)==null||n.call(i,t,!1),qs(i,t);return!0},qn=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},Al=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),mh(t)}};function fh(e){this._$AN!==void 0?(qn(this),this._$AM=e,Al(this)):this._$AM=e}function bh(e,t=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let r=s;r<n.length;r++)qs(n[r],!1),qn(n[r]);else n!=null&&(qs(n,!1),qn(n));else qs(this,e)}const mh=e=>{e.type==cn.CHILD&&(e._$AP??(e._$AP=bh),e._$AQ??(e._$AQ=fh))};class Tl extends hn{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),Al(this),this.isConnected=t._$AU}_$AO(t,s=!0){var n,i;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),s&&(qs(this,t),qn(this))}setValue(t){if(hh(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jn=()=>new vh;let vh=class{};const Vi=new WeakMap,Xn=Ms(class extends Tl{render(e){return F}update(e,[t]){var n;const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=(n=e.options)==null?void 0:n.host,this.rt(this.ct=e.element)),F}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let s=Vi.get(t);s===void 0&&(s=new WeakMap,Vi.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=Vi.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var wn;class Ll{constructor(t){h(this,wn,s=>{var r,a;const n=s.target;if(!this.host.navigableItems.includes(n))return;let i=!1;if(s.key==="ArrowDown"){const c=this.host.navigableItems.indexOf(n)+1,d=this.host.navigableItems[c];d==null||d.focus(),i=!0}else if(s.key==="ArrowUp"){const c=this.host.navigableItems.indexOf(n)-1,d=this.host.navigableItems[c];d==null||d.focus(),i=!0}else if(s.key==="Home")(r=this.host.navigableItems[0])==null||r.focus(),i=!0;else if(s.key==="End")(a=this.host.navigableItems[this.host.navigableItems.length-1])==null||a.focus(),i=!0;else{const c=s.key.toLowerCase();if(c.length!==1)return;const d=c>="a"&&c<="z",u=c>="0"&&c<="9";if(d||u){const b=this.host.navigableItems.find(f=>{var v;const _=(v=f.textContent)==null?void 0:v.trim().toLowerCase();return _==null?void 0:_.startsWith(c)});b==null||b.focus(),i=!0}}i&&(s.preventDefault(),s.stopPropagation())}),(this.host=t).addController(this)}hostConnected(){this.host.addEventListener("keydown",l(this,wn))}hostDisconnected(){this.host.removeEventListener("keydown",l(this,wn))}}wn=new WeakMap;function Ol(e){let t=e;for(;t.assignedElements().length>0&&t.assignedElements()[0].nodeName==="SLOT";)t=t.assignedElements()[0];return t}var Vs;let Yi=class extends I{constructor(){super(),h(this,Vs,Jn()),new Ll(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),pe.instance.apply(this,"gds-listbox")}get navigableItems(){return l(this,Vs).value?Ol(l(this,Vs).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return w`<slot ${Xn(l(this,Vs))}></slot>`}};Vs=new WeakMap;Yi=o([A("gds-menu",{dependsOn:[ls]})],Yi);const yh=["top","right","bottom","left"],ds=Math.min,Pt=Math.max,Kn=Math.round,mn=Math.floor,He=e=>({x:e,y:e}),xh={left:"right",right:"left",bottom:"top",top:"bottom"},_h={start:"end",end:"start"};function Zi(e,t,s){return Pt(e,ds(t,s))}function As(e,t){return typeof e=="function"?e(t):e}function Nt(e){return e.split("-")[0]}function un(e){return e.split("-")[1]}function Dl(e){return e==="x"?"y":"x"}function zo(e){return e==="y"?"height":"width"}function cs(e){return["top","bottom"].includes(Nt(e))?"y":"x"}function Vo(e){return Dl(cs(e))}function wh(e,t,s){s===void 0&&(s=!1);const n=un(e),i=Vo(e),r=zo(i);let a=i==="x"?n===(s?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=Qn(a)),[a,Qn(a)]}function kh(e){const t=Qn(e);return[qi(e),t,qi(t)]}function qi(e){return e.replace(/start|end/g,t=>_h[t])}function $h(e,t,s){const n=["left","right"],i=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return s?t?i:n:t?n:i;case"left":case"right":return t?r:a;default:return[]}}function Ch(e,t,s,n){const i=un(e);let r=$h(Nt(e),s==="start",n);return i&&(r=r.map(a=>a+"-"+i),t&&(r=r.concat(r.map(qi)))),r}function Qn(e){return e.replace(/left|right|bottom|top/g,t=>xh[t])}function Sh(e){return{top:0,right:0,bottom:0,left:0,...e}}function zl(e){return typeof e!="number"?Sh(e):{top:e,right:e,bottom:e,left:e}}function ei(e){const{x:t,y:s,width:n,height:i}=e;return{width:n,height:i,top:s,left:t,right:t+n,bottom:s+i,x:t,y:s}}function Wa(e,t,s){let{reference:n,floating:i}=e;const r=cs(t),a=Vo(t),c=zo(a),d=Nt(t),u=r==="y",b=n.x+n.width/2-i.width/2,f=n.y+n.height/2-i.height/2,_=n[c]/2-i[c]/2;let v;switch(d){case"top":v={x:b,y:n.y-i.height};break;case"bottom":v={x:b,y:n.y+n.height};break;case"right":v={x:n.x+n.width,y:f};break;case"left":v={x:n.x-i.width,y:f};break;default:v={x:n.x,y:n.y}}switch(un(t)){case"start":v[a]-=_*(s&&u?-1:1);break;case"end":v[a]+=_*(s&&u?-1:1);break}return v}const Eh=async(e,t,s)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:a}=s,c=r.filter(Boolean),d=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:b,y:f}=Wa(u,n,d),_=n,v={},C=0;for(let E=0;E<c.length;E++){const{name:V,fn:O}=c[E],{x:N,y:G,data:se,reset:J}=await O({x:b,y:f,initialPlacement:n,placement:_,strategy:i,middlewareData:v,rects:u,platform:a,elements:{reference:e,floating:t}});b=N??b,f=G??f,v={...v,[V]:{...v[V],...se}},J&&C<=50&&(C++,typeof J=="object"&&(J.placement&&(_=J.placement),J.rects&&(u=J.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):J.rects),{x:b,y:f}=Wa(u,_,d)),E=-1)}return{x:b,y:f,placement:_,strategy:i,middlewareData:v}};async function en(e,t){var s;t===void 0&&(t={});const{x:n,y:i,platform:r,rects:a,elements:c,strategy:d}=e,{boundary:u="clippingAncestors",rootBoundary:b="viewport",elementContext:f="floating",altBoundary:_=!1,padding:v=0}=As(t,e),C=zl(v),V=c[_?f==="floating"?"reference":"floating":f],O=ei(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(V)))==null||s?V:V.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:u,rootBoundary:b,strategy:d})),N=f==="floating"?{x:n,y:i,width:a.floating.width,height:a.floating.height}:a.reference,G=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),se=await(r.isElement==null?void 0:r.isElement(G))?await(r.getScale==null?void 0:r.getScale(G))||{x:1,y:1}:{x:1,y:1},J=ei(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:N,offsetParent:G,strategy:d}):N);return{top:(O.top-J.top+C.top)/se.y,bottom:(J.bottom-O.bottom+C.bottom)/se.y,left:(O.left-J.left+C.left)/se.x,right:(J.right-O.right+C.right)/se.x}}const Mh=e=>({name:"arrow",options:e,async fn(t){const{x:s,y:n,placement:i,rects:r,platform:a,elements:c,middlewareData:d}=t,{element:u,padding:b=0}=As(e,t)||{};if(u==null)return{};const f=zl(b),_={x:s,y:n},v=Vo(i),C=zo(v),E=await a.getDimensions(u),V=v==="y",O=V?"top":"left",N=V?"bottom":"right",G=V?"clientHeight":"clientWidth",se=r.reference[C]+r.reference[v]-_[v]-r.floating[C],J=_[v]-r.reference[v],ye=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u));let Je=ye?ye[G]:0;(!Je||!await(a.isElement==null?void 0:a.isElement(ye)))&&(Je=c.floating[G]||r.floating[C]);const kt=se/2-J/2,Xe=Je/2-E[C]/2-1,Pe=ds(f[O],Xe),$t=ds(f[N],Xe),fe=Pe,dt=Je-E[C]-$t,ee=Je/2-E[C]/2+kt,Ke=Zi(fe,ee,dt),xe=!d.arrow&&un(i)!=null&&ee!==Ke&&r.reference[C]/2-(ee<fe?Pe:$t)-E[C]/2<0,be=xe?ee<fe?ee-fe:ee-dt:0;return{[v]:_[v]+be,data:{[v]:Ke,centerOffset:ee-Ke-be,...xe&&{alignmentOffset:be}},reset:xe}}}),Ah=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,n;const{placement:i,middlewareData:r,rects:a,initialPlacement:c,platform:d,elements:u}=t,{mainAxis:b=!0,crossAxis:f=!0,fallbackPlacements:_,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:C="none",flipAlignment:E=!0,...V}=As(e,t);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const O=Nt(i),N=cs(c),G=Nt(c)===c,se=await(d.isRTL==null?void 0:d.isRTL(u.floating)),J=_||(G||!E?[Qn(c)]:kh(c)),ye=C!=="none";!_&&ye&&J.push(...Ch(c,E,C,se));const Je=[c,...J],kt=await en(t,V),Xe=[];let Pe=((n=r.flip)==null?void 0:n.overflows)||[];if(b&&Xe.push(kt[O]),f){const ee=wh(i,a,se);Xe.push(kt[ee[0]],kt[ee[1]])}if(Pe=[...Pe,{placement:i,overflows:Xe}],!Xe.every(ee=>ee<=0)){var $t,fe;const ee=((($t=r.flip)==null?void 0:$t.index)||0)+1,Ke=Je[ee];if(Ke)return{data:{index:ee,overflows:Pe},reset:{placement:Ke}};let xe=(fe=Pe.filter(be=>be.overflows[0]<=0).sort((be,Ee)=>be.overflows[1]-Ee.overflows[1])[0])==null?void 0:fe.placement;if(!xe)switch(v){case"bestFit":{var dt;const be=(dt=Pe.filter(Ee=>{if(ye){const Me=cs(Ee.placement);return Me===N||Me==="y"}return!0}).map(Ee=>[Ee.placement,Ee.overflows.filter(Me=>Me>0).reduce((Me,gn)=>Me+gn,0)]).sort((Ee,Me)=>Ee[1]-Me[1])[0])==null?void 0:dt[0];be&&(xe=be);break}case"initialPlacement":xe=c;break}if(i!==xe)return{reset:{placement:xe}}}return{}}}};function Pa(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Ra(e){return yh.some(t=>e[t]>=0)}const Th=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:s}=t,{strategy:n="referenceHidden",...i}=As(e,t);switch(n){case"referenceHidden":{const r=await en(t,{...i,elementContext:"reference"}),a=Pa(r,s.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:Ra(a)}}}case"escaped":{const r=await en(t,{...i,altBoundary:!0}),a=Pa(r,s.floating);return{data:{escapedOffsets:a,escaped:Ra(a)}}}default:return{}}}}};async function Lh(e,t){const{placement:s,platform:n,elements:i}=e,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),a=Nt(s),c=un(s),d=cs(s)==="y",u=["left","top"].includes(a)?-1:1,b=r&&d?-1:1,f=As(t,e);let{mainAxis:_,crossAxis:v,alignmentAxis:C}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return c&&typeof C=="number"&&(v=c==="end"?C*-1:C),d?{x:v*b,y:_*u}:{x:_*u,y:v*b}}const Oh=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var s,n;const{x:i,y:r,placement:a,middlewareData:c}=t,d=await Lh(t,e);return a===((s=c.offset)==null?void 0:s.placement)&&(n=c.arrow)!=null&&n.alignmentOffset?{}:{x:i+d.x,y:r+d.y,data:{...d,placement:a}}}}},Dh=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:n,placement:i}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:c={fn:V=>{let{x:O,y:N}=V;return{x:O,y:N}}},...d}=As(e,t),u={x:s,y:n},b=await en(t,d),f=cs(Nt(i)),_=Dl(f);let v=u[_],C=u[f];if(r){const V=_==="y"?"top":"left",O=_==="y"?"bottom":"right",N=v+b[V],G=v-b[O];v=Zi(N,v,G)}if(a){const V=f==="y"?"top":"left",O=f==="y"?"bottom":"right",N=C+b[V],G=C-b[O];C=Zi(N,C,G)}const E=c.fn({...t,[_]:v,[f]:C});return{...E,data:{x:E.x-s,y:E.y-n,enabled:{[_]:r,[f]:a}}}}}};function bi(){return typeof window<"u"}function Ts(e){return Vl(e)?(e.nodeName||"").toLowerCase():"#document"}function me(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function qe(e){var t;return(t=(Vl(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Vl(e){return bi()?e instanceof Node||e instanceof me(e).Node:!1}function Le(e){return bi()?e instanceof Element||e instanceof me(e).Element:!1}function Ne(e){return bi()?e instanceof HTMLElement||e instanceof me(e).HTMLElement:!1}function Fa(e){return!bi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof me(e).ShadowRoot}function pn(e){const{overflow:t,overflowX:s,overflowY:n,display:i}=Oe(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+s)&&!["inline","contents"].includes(i)}function zh(e){return["table","td","th"].includes(Ts(e))}function mi(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Wo(e){const t=Po(),s=Le(e)?Oe(e):e;return s.transform!=="none"||s.perspective!=="none"||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(s.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(s.contain||"").includes(n))}function Vh(e){let t=vt(e);for(;Ne(t)&&!hs(t);){if(Wo(t))return t;if(mi(t))return null;t=vt(t)}return null}function Po(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function hs(e){return["html","body","#document"].includes(Ts(e))}function Oe(e){return me(e).getComputedStyle(e)}function vi(e){return Le(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function vt(e){if(Ts(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Fa(e)&&e.host||qe(e);return Fa(t)?t.host:t}function Wl(e){const t=vt(e);return hs(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ne(t)&&pn(t)?t:Wl(t)}function tn(e,t,s){var n;t===void 0&&(t=[]),s===void 0&&(s=!0);const i=Wl(e),r=i===((n=e.ownerDocument)==null?void 0:n.body),a=me(i);if(r){const c=Ji(a);return t.concat(a,a.visualViewport||[],pn(i)?i:[],c&&s?tn(c):[])}return t.concat(i,tn(i,[],s))}function Ji(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Pl(e){const t=Oe(e);let s=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=Ne(e),r=i?e.offsetWidth:s,a=i?e.offsetHeight:n,c=Kn(s)!==r||Kn(n)!==a;return c&&(s=r,n=a),{width:s,height:n,$:c}}function Ro(e){return Le(e)?e:e.contextElement}function as(e){const t=Ro(e);if(!Ne(t))return He(1);const s=t.getBoundingClientRect(),{width:n,height:i,$:r}=Pl(t);let a=(r?Kn(s.width):s.width)/n,c=(r?Kn(s.height):s.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!c||!Number.isFinite(c))&&(c=1),{x:a,y:c}}const Wh=He(0);function Rl(e){const t=me(e);return!Po()||!t.visualViewport?Wh:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ph(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==me(e)?!1:t}function It(e,t,s,n){t===void 0&&(t=!1),s===void 0&&(s=!1);const i=e.getBoundingClientRect(),r=Ro(e);let a=He(1);t&&(n?Le(n)&&(a=as(n)):a=as(e));const c=Ph(r,s,n)?Rl(r):He(0);let d=(i.left+c.x)/a.x,u=(i.top+c.y)/a.y,b=i.width/a.x,f=i.height/a.y;if(r){const _=me(r),v=n&&Le(n)?me(n):n;let C=_,E=Ji(C);for(;E&&n&&v!==C;){const V=as(E),O=E.getBoundingClientRect(),N=Oe(E),G=O.left+(E.clientLeft+parseFloat(N.paddingLeft))*V.x,se=O.top+(E.clientTop+parseFloat(N.paddingTop))*V.y;d*=V.x,u*=V.y,b*=V.x,f*=V.y,d+=G,u+=se,C=me(E),E=Ji(C)}}return ei({width:b,height:f,x:d,y:u})}function Fo(e,t){const s=vi(e).scrollLeft;return t?t.left+s:It(qe(e)).left+s}function Fl(e,t,s){s===void 0&&(s=!1);const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-(s?0:Fo(e,n)),r=n.top+t.scrollTop;return{x:i,y:r}}function Rh(e){let{elements:t,rect:s,offsetParent:n,strategy:i}=e;const r=i==="fixed",a=qe(n),c=t?mi(t.floating):!1;if(n===a||c&&r)return s;let d={scrollLeft:0,scrollTop:0},u=He(1);const b=He(0),f=Ne(n);if((f||!f&&!r)&&((Ts(n)!=="body"||pn(a))&&(d=vi(n)),Ne(n))){const v=It(n);u=as(n),b.x=v.x+n.clientLeft,b.y=v.y+n.clientTop}const _=a&&!f&&!r?Fl(a,d,!0):He(0);return{width:s.width*u.x,height:s.height*u.y,x:s.x*u.x-d.scrollLeft*u.x+b.x+_.x,y:s.y*u.y-d.scrollTop*u.y+b.y+_.y}}function Fh(e){return Array.from(e.getClientRects())}function Hh(e){const t=qe(e),s=vi(e),n=e.ownerDocument.body,i=Pt(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=Pt(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let a=-s.scrollLeft+Fo(e);const c=-s.scrollTop;return Oe(n).direction==="rtl"&&(a+=Pt(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:a,y:c}}function Nh(e,t){const s=me(e),n=qe(e),i=s.visualViewport;let r=n.clientWidth,a=n.clientHeight,c=0,d=0;if(i){r=i.width,a=i.height;const u=Po();(!u||u&&t==="fixed")&&(c=i.offsetLeft,d=i.offsetTop)}return{width:r,height:a,x:c,y:d}}function Ih(e,t){const s=It(e,!0,t==="fixed"),n=s.top+e.clientTop,i=s.left+e.clientLeft,r=Ne(e)?as(e):He(1),a=e.clientWidth*r.x,c=e.clientHeight*r.y,d=i*r.x,u=n*r.y;return{width:a,height:c,x:d,y:u}}function Ha(e,t,s){let n;if(t==="viewport")n=Nh(e,s);else if(t==="document")n=Hh(qe(e));else if(Le(t))n=Ih(t,s);else{const i=Rl(e);n={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return ei(n)}function Hl(e,t){const s=vt(e);return s===t||!Le(s)||hs(s)?!1:Oe(s).position==="fixed"||Hl(s,t)}function Bh(e,t){const s=t.get(e);if(s)return s;let n=tn(e,[],!1).filter(c=>Le(c)&&Ts(c)!=="body"),i=null;const r=Oe(e).position==="fixed";let a=r?vt(e):e;for(;Le(a)&&!hs(a);){const c=Oe(a),d=Wo(a);!d&&c.position==="fixed"&&(i=null),(r?!d&&!i:!d&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||pn(a)&&!d&&Hl(e,a))?n=n.filter(b=>b!==a):i=c,a=vt(a)}return t.set(e,n),n}function jh(e){let{element:t,boundary:s,rootBoundary:n,strategy:i}=e;const a=[...s==="clippingAncestors"?mi(t)?[]:Bh(t,this._c):[].concat(s),n],c=a[0],d=a.reduce((u,b)=>{const f=Ha(t,b,i);return u.top=Pt(f.top,u.top),u.right=ds(f.right,u.right),u.bottom=ds(f.bottom,u.bottom),u.left=Pt(f.left,u.left),u},Ha(t,c,i));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function Gh(e){const{width:t,height:s}=Pl(e);return{width:t,height:s}}function Uh(e,t,s){const n=Ne(t),i=qe(t),r=s==="fixed",a=It(e,!0,r,t);let c={scrollLeft:0,scrollTop:0};const d=He(0);if(n||!n&&!r)if((Ts(t)!=="body"||pn(i))&&(c=vi(t)),n){const _=It(t,!0,r,t);d.x=_.x+t.clientLeft,d.y=_.y+t.clientTop}else i&&(d.x=Fo(i));const u=i&&!n&&!r?Fl(i,c):He(0),b=a.left+c.scrollLeft-d.x-u.x,f=a.top+c.scrollTop-d.y-u.y;return{x:b,y:f,width:a.width,height:a.height}}function Wi(e){return Oe(e).position==="static"}function Na(e,t){if(!Ne(e)||Oe(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return qe(e)===s&&(s=s.ownerDocument.body),s}function Nl(e,t){const s=me(e);if(mi(e))return s;if(!Ne(e)){let i=vt(e);for(;i&&!hs(i);){if(Le(i)&&!Wi(i))return i;i=vt(i)}return s}let n=Na(e,t);for(;n&&zh(n)&&Wi(n);)n=Na(n,t);return n&&hs(n)&&Wi(n)&&!Wo(n)?s:n||Vh(e)||s}const Yh=async function(e){const t=this.getOffsetParent||Nl,s=this.getDimensions,n=await s(e.floating);return{reference:Uh(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Zh(e){return Oe(e).direction==="rtl"}const qh={convertOffsetParentRelativeRectToViewportRelativeRect:Rh,getDocumentElement:qe,getClippingRect:jh,getOffsetParent:Nl,getElementRects:Yh,getClientRects:Fh,getDimensions:Gh,getScale:as,isElement:Le,isRTL:Zh};function Jh(e,t){let s=null,n;const i=qe(e);function r(){var c;clearTimeout(n),(c=s)==null||c.disconnect(),s=null}function a(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),r();const{left:u,top:b,width:f,height:_}=e.getBoundingClientRect();if(c||t(),!f||!_)return;const v=mn(b),C=mn(i.clientWidth-(u+f)),E=mn(i.clientHeight-(b+_)),V=mn(u),N={rootMargin:-v+"px "+-C+"px "+-E+"px "+-V+"px",threshold:Pt(0,ds(1,d))||1};let G=!0;function se(J){const ye=J[0].intersectionRatio;if(ye!==d){if(!G)return a();ye?a(!1,ye):n=setTimeout(()=>{a(!1,1e-7)},1e3)}G=!1}try{s=new IntersectionObserver(se,{...N,root:i.ownerDocument})}catch{s=new IntersectionObserver(se,N)}s.observe(e)}return a(!0),r}function Il(e,t,s,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:d=!1}=n,u=Ro(e),b=i||r?[...u?tn(u):[],...tn(t)]:[];b.forEach(O=>{i&&O.addEventListener("scroll",s,{passive:!0}),r&&O.addEventListener("resize",s)});const f=u&&c?Jh(u,s):null;let _=-1,v=null;a&&(v=new ResizeObserver(O=>{let[N]=O;N&&N.target===u&&v&&(v.unobserve(t),cancelAnimationFrame(_),_=requestAnimationFrame(()=>{var G;(G=v)==null||G.observe(t)})),s()}),u&&!d&&v.observe(u),v.observe(t));let C,E=d?It(e):null;d&&V();function V(){const O=It(e);E&&(O.x!==E.x||O.y!==E.y||O.width!==E.width||O.height!==E.height)&&s(),E=O,C=requestAnimationFrame(V)}return s(),()=>{var O;b.forEach(N=>{i&&N.removeEventListener("scroll",s),r&&N.removeEventListener("resize",s)}),f==null||f(),(O=v)==null||O.disconnect(),v=null,d&&cancelAnimationFrame(C)}}const Xh=en,Ho=Oh,Bl=Dh,jl=Ah,Kh=Th,Qh=Mh,Gl=(e,t,s)=>{const n=new Map,i={platform:qh,...s},r={...i.platform,_c:n};return Eh(e,t,{...i,platform:r})};function Q(e,t){const s={waitUntilFirstUpdate:!1,...t};return(n,i,r)=>{const{update:a}=n,c=Array.isArray(e)?e:[e];n.update=function(d){c.forEach(u=>{var f;const b=u;if(d.has(b)){const _=d.get(b),v=this[b];_!==v&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&((f=r.value)==null||f.call(this,_,v))}}),a.call(this,d)}}}function Ul(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,n)=>{let i;const r=t.connectedCallback,a=t.disconnectedCallback;t.connectedCallback=function(){r==null||r.call(this);const c=(d,u)=>{var b;(b=n.value)==null||b.call(this)};i=new MutationObserver(c),i.observe(this,e)},t.disconnectedCallback=function(){a==null||a.call(this),i.disconnect()}}}function eu(e){return(t,s,n)=>{if(fi)return;const i=window.matchMedia(e),r=t.connectedCallback,a=t.disconnectedCallback;t.connectedCallback=function(){var d;r==null||r.call(this);const c=u=>{var b;(b=n.value)==null||b.call(this,u.matches)};i.addEventListener("change",c),this.disconnectedCallback=function(){a==null||a.call(this),i.removeEventListener("change",c)},(d=n.value)==null||d.call(this,i.matches)}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xi extends hn{constructor(t){if(super(t),this.it=F,t.type!==cn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===F||t==null)return this._t=void 0,this.it=t;if(t===Ae)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}Xi.directiveName="unsafeHTML",Xi.resultType=1;const Yl=Ms(Xi),tu=H`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    svg {
      display: block;
    }
  }
`;var su=tu;class Y extends I{constructor(){super(...arguments),this.solid=!1,this.box=!1,this.label=""}render(){const t=this.constructor._name==="brand-seb",s=t?"55px":this.width!==void 0?`${this.width.toString()}px`:void 0,n=t?"24px":this.height!==void 0?`${this.height.toString()}px`:"1lh",i=t?"0 0 55 24":this.box||"0 0 24 24";let r=`<svg
      style="height:${n};${s?`width:${s};`:""}"
      viewBox="${i}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
      part="icon"
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return this.stroke&&(r=r.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`)),ce`${Yl(r)}`}}Y.styles=[su];o([g({type:Number})],Y.prototype,"width",2);o([g({type:Number})],Y.prototype,"height",2);o([g({type:Boolean})],Y.prototype,"solid",2);o([g({type:Number})],Y.prototype,"stroke",2);o([g({type:String})],Y.prototype,"box",2);o([g({type:String})],Y.prototype,"label",2);Y.define();let us=class extends Y{};us._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';us._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>';us._name="cross-small";us=o([A("gds-icon-cross-small")],us);const nu=H`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: contents;
    }

    :host > div:not([hidden]) {
      display: contents;
    }

    :host([open]) dialog {
      opacity: 1;
      box-sizing: border-box;
      /*transform: translate3d(0, 0, 0);*/
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

    :host([nonmodal]) dialog {
      z-index: 1;
    }

    @media (max-width: 767px) {
      dialog.use-modal-in-mobile {
        border-radius: 1rem 1rem 0 0;
        transition: all 200ms ease;
        min-width: 100vw;
        position: fixed;
        bottom: 0;
        left: 0;

        max-height: 50svh;
        padding-bottom: 0;

        transform: translateY(0);
        @starting-style {
          transform: translateY(100%);
        }

        &::backdrop {
          background-color: rgba(0, 0, 0, 0.3);
          display: block;
          position: fixed;
          opacity: 1;
          transition: opacity 200ms ease;
          @starting-style {
            opacity: 0;
          }
        }
      }
    }

    @media (min-width: 768px) {
      header {
        display: none;
      }
    }

    header {
      display: none;
    }

    @media (min-width: 768px) {
      dialog:not(.has-backdrop)::backdrop {
        background-color: transparent;
        display: block;
        position: fixed;
      }
    }
  }
`;var iu=nu,Ki,Zl,Rt,ti,ht,Ws,Mt,Qi,kn,er,tr,ql,sr,Jl,$n,nr,yi,xi,Cn,Sn;let z=class extends I{constructor(){super(...arguments),h(this,Ki),h(this,kn),h(this,tr),h(this,sr),h(this,$n),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.autofocus=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>`${window.innerHeight-16}px`,this.nonmodal=!1,this.floatingUIMiddleware=z.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,h(this,Rt,void 0),h(this,ti,!1),h(this,ht,void 0),h(this,Ws,()=>{l(this,Mt).call(this,"cancel")&&(this.open=!1)}),h(this,Mt,e=>{const t=e==="show";return this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:t,reason:e},bubbles:!1,composed:!1,cancelable:!0}))}),h(this,Qi,e=>{e.stopPropagation(),e.preventDefault(),l(this,Mt).call(this,"close")&&(this.open=!1,setTimeout(()=>{var t;return(t=this._trigger)==null?void 0:t.focus()},250))}),h(this,yi,e=>{(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),this.open=!0,l(this,Mt).call(this,"show")),e.key==="Escape"&&this.open&&l(this,Ws).call(this)}),h(this,xi,e=>{e.preventDefault(),l(this,Mt).call(this,this.open?"close":"show")&&(this.open=!this.open)}),h(this,Cn,()=>{var t;const e=(t=this._elDefaultSlot)==null?void 0:t.assignedElements()[0];this.updateComplete.then(()=>{e==null||e.focus()})}),h(this,Sn,e=>{const t=e,s=this._elDialog;if((t.clientX>0||t.clientY>0)&&s&&this.open){const i=s.getBoundingClientRect();!(i.top<=t.clientY&&t.clientY<=i.top+i.height&&i.left<=t.clientX&&t.clientX<=i.left+i.width)&&l(this,Mt).call(this,"close")&&(this.open=!1)}})}_handleTriggerRefChanged(){var e;(e=this.triggerRef)==null||e.then(t=>{t&&(this._trigger=t)})}_handleAnchorRefChanged(){var e;(e=this.anchorRef)==null||e.then(t=>{t&&(this._anchor=t)})}_handleTriggerChanged(){y(this,kn,er).call(this),y(this,sr,Jl).call(this)}_handleAnchorChanged(){y(this,$n,nr).call(this)}connectedCallback(){super.connectedCallback(),pe.instance.apply(this,"gds-popover"),y(this,kn,er).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{e.key==="Escape"&&this.open&&(l(this,Ws).call(this),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{const t=e.target;t.tagName==="INPUT"||t.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),y(this,tr,ql).call(this)}render(){return w`<slot
        name="trigger"
        @slotchange=${y(this,Ki,Zl)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${lt({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&l(this,Ws).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${l(this,Qi)}
              class="close"
              label="${T("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></gds-icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const e=(this.nonmodal?l(this,ht):this._elDialog)||document;this.updateComplete.then(()=>{var t,s,n,i;(t=this._trigger)==null||t.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?(n=this._elDialog)==null||n.setAttribute("open","true"):(s=this._elDialog)==null||s.showModal(),this.autofocus&&(l(this,Cn).call(this),setTimeout(()=>l(this,Cn).call(this),250)),requestAnimationFrame(()=>{l(this,ht)&&(l(this,ht).show=!0)}),setTimeout(()=>e.addEventListener("click",l(this,Sn)),0)):((i=this._elDialog)==null||i.close(),e.removeEventListener("click",l(this,Sn)),l(this,ht)&&(l(this,ht).show=!1))})}_handleBackdropChange(){var t;const e=(t=this.parentElement)==null?void 0:t.getRootNode();!this.backdrop||!e||B(this,ht,e.querySelector(this.backdrop))}_handleMobileLayout(e){var s,n,i;var t;B(this,ti,e),e&&!this.disableMobileStyles?((t=l(this,Rt))==null||t.call(this),(s=this._elDialog)==null||s.style.removeProperty("left"),(n=this._elDialog)==null||n.style.removeProperty("top"),(i=this._elDialog)==null||i.style.removeProperty("minWidth"),this.updateComplete.then(()=>{var r;this.open&&((r=this._elDialog)==null||r.showModal())})):this.updateComplete.then(()=>{y(this,$n,nr).call(this)})}};Ki=new WeakSet;Zl=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};Rt=new WeakMap;ti=new WeakMap;ht=new WeakMap;Ws=new WeakMap;Mt=new WeakMap;Qi=new WeakMap;kn=new WeakSet;er=function(){var e,t;(e=this._trigger)==null||e.addEventListener("keydown",l(this,yi)),(t=this._trigger)==null||t.addEventListener("click",l(this,xi))};tr=new WeakSet;ql=function(){var t,s;var e;(t=this._trigger)==null||t.removeEventListener("keydown",l(this,yi)),(s=this._trigger)==null||s.removeEventListener("click",l(this,xi)),(e=l(this,Rt))==null||e.call(this)};sr=new WeakSet;Jl=function(){var e;if(this._trigger){(e=this._trigger)==null||e.setAttribute("aria-expanded",String(this.open));const t=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||t.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const n=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";this._trigger.getAttribute(n)===null&&this._trigger.setAttribute(n,this.popupRole)}};$n=new WeakSet;nr=function(){if(!this._anchor||!this._elDialog)return;const e=this._anchor,t=this._elDialog;!e||!t||l(this,ti)&&!this.disableMobileStyles||(l(this,Rt)&&l(this,Rt).call(this),B(this,Rt,Il(e,t,()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),Gl(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:s,y:n})=>Object.assign(t.style,{left:`${s}px`,top:`${n}px`}))})))};yi=new WeakMap;xi=new WeakMap;Cn=new WeakMap;Sn=new WeakMap;z.styles=ne(iu);z.DefaultMiddleware=[Ho(8),Bl({crossAxis:!0,padding:8})];o([g({type:Boolean,reflect:!0})],z.prototype,"open",2);o([g({attribute:"popup-role"})],z.prototype,"popupRole",2);o([g({attribute:!1})],z.prototype,"triggerRef",2);o([g({attribute:!1})],z.prototype,"anchorRef",2);o([g()],z.prototype,"label",2);o([g()],z.prototype,"placement",2);o([g({type:Boolean})],z.prototype,"disableMobileStyles",2);o([g({type:Boolean})],z.prototype,"autofocus",2);o([g({attribute:!1})],z.prototype,"calcMinWidth",2);o([g({attribute:!1})],z.prototype,"calcMaxWidth",2);o([g({attribute:!1})],z.prototype,"calcMinHeight",2);o([g({attribute:!1})],z.prototype,"calcMaxHeight",2);o([g({type:Boolean,reflect:!0})],z.prototype,"nonmodal",2);o([g()],z.prototype,"backdrop",2);o([g({attribute:!1})],z.prototype,"floatingUIMiddleware",2);o([U()],z.prototype,"_trigger",2);o([U()],z.prototype,"_anchor",2);o([U()],z.prototype,"_isVirtKbVisible",2);o([ae("slot:not([name])")],z.prototype,"_elDefaultSlot",2);o([ae('slot[name="trigger"]')],z.prototype,"_elTriggerSlot",2);o([ae("dialog")],z.prototype,"_elDialog",2);o([Q("triggerRef")],z.prototype,"_handleTriggerRefChanged",1);o([Q("anchorRef")],z.prototype,"_handleAnchorRefChanged",1);o([Q("_trigger")],z.prototype,"_handleTriggerChanged",1);o([Q("_anchor")],z.prototype,"_handleAnchorChanged",1);o([Q("open")],z.prototype,"_handleOpenChange",1);o([Q("backdrop")],z.prototype,"_handleBackdropChange",1);o([eu("(max-width: 576px)")],z.prototype,"_handleMobileLayout",1);z=o([A("gds-popover",{dependsOn:[us]}),Ze()],z);const ru=H`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: inline-block;
    }
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
`;var ou=ru;const au=H`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-color-l3-content-secondary);
      background-color: var(--gds-color-l3-background-secondary);
      font-size: var(--gds-text-size-label-input-medium);
      line-height: var(--gds-text-line-height-label-input-medium);
      padding-inline: var(--gds-space-m);
      padding-block: var(--gds-space-xs);
    }
  }
`;var lu=au;let si=class extends I{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>pe.instance.apply(this,"gds-menu-heading"))}render(){return ce`<slot></slot>`}};si.styles=lu;si=o([A("gds-menu-heading")],si);var ir,rr,Xl;let De=class extends at(Ye(I)){constructor(){super(...arguments),h(this,rr),this.open=!1,this.buttonLabel=T("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",h(this,ir,()=>w`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${this.elTriggerBtn}
      .anchorRef=${this.elTriggerBtn}
      .label=${this.label}
      .placement=${this.placement}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${y(this,rr,Xl)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),pe.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){return w`<button
        id="trigger"
        class="icon border-0 small ${lt({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${()=>this.open=!0}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:F}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M14 12C14 13.1042 13.1042 14 12 14C10.8958 14 10 13.1042 10 12C10 10.8958 10.8958 10 12 10C13.1042 10 14 10.8958 14 12ZM19 10C17.8958 10 17 10.8958 17 12C17 13.1042 17.8958 14 19 14C20.1042 14 21 13.1042 21 12C21 10.8958 20.1042 10 19 10ZM5 10C3.89583 10 3 10.8958 3 12C3 13.1042 3.89583 14 5 14C6.10417 14 7 13.1042 7 12C7 10.8958 6.10417 10 5 10Z"
              fill="#353531"
            />
          </svg>
        </slot>
      </button>
      ${X(this.open,l(this,ir))}`}};ir=new WeakMap;rr=new WeakSet;Xl=function(){this.open=!1};De.styles=[K,ou];De.shadowRootOptions={mode:"open",delegatesFocus:!0};o([g({type:Boolean,reflect:!0})],De.prototype,"open",2);o([g({attribute:"button-label"})],De.prototype,"buttonLabel",2);o([g({attribute:"show-label",type:Boolean})],De.prototype,"showLabel",2);o([g()],De.prototype,"label",2);o([g()],De.prototype,"placement",2);o([Xt("#trigger")],De.prototype,"elTriggerBtn",2);De=o([A("gds-context-menu",{dependsOn:[ls,Yi,z]}),Ze()],De);De.define();ls.define();si.define();let ps=class extends Y{};ps._regularSVG='<path d="M14 5.75L20.25 12L14 18.25M19.5 12H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';ps._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1161 5.36612C13.6043 4.87796 14.3957 4.87796 14.8839 5.36612L20.6339 11.1161C20.8683 11.3505 21 11.6685 21 12C21 12.3315 20.8683 12.6494 20.6339 12.8839L14.8839 18.6339C14.3957 19.122 13.6043 19.122 13.1161 18.6339C12.628 18.1457 12.628 17.3543 13.1161 16.8661L16.7322 13.25H4.25C3.55964 13.25 3 12.6903 3 12C3 11.3096 3.55964 10.75 4.25 10.75H16.7322L13.1161 7.13388C12.628 6.64573 12.628 5.85427 13.1161 5.36612Z" fill="currentColor"/>';ps._name="arrow-right";ps=o([A("gds-icon-arrow-right")],ps);ps.define();let gs=class extends Y{};gs._regularSVG='<path d="M4.75 21.25V14.75M4.75 14.75V2.75H20.25L16.25 8.75L20.25 14.75H4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';gs._solidSVG='<path d="M4.75 2C4.33579 2 4 2.33579 4 2.75V21.25C4 21.6642 4.33579 22 4.75 22C5.16421 22 5.5 21.6642 5.5 21.25V15.5H20.25C20.5266 15.5 20.7807 15.3478 20.9113 15.1039C21.0418 14.86 21.0275 14.5641 20.874 14.334L17.1514 8.75L20.874 3.16603C21.0275 2.93588 21.0418 2.63997 20.9113 2.39611C20.7807 2.15224 20.5266 2 20.25 2H4.75Z" fill="currentColor"/>';gs._name="flag";gs=o([A("gds-icon-flag")],gs);gs.define();let fs=class extends Y{};fs._regularSVG='<path d="M12 12V10.75C12 6.88401 8.86599 3.75 5 3.75H3.75V5C3.75 8.86599 6.88401 12 10.75 12H12ZM12 12V20.25M19 6.75H20.25V8.25C20.25 12.116 17.116 15.25 13.25 15.25H12V13.75C12 9.88401 15.134 6.75 19 6.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';fs._solidSVG='<path d="M3.75 3C3.33579 3 3 3.33579 3 3.75V5C3 9.28021 6.46979 12.75 10.75 12.75H11.25V20.25C11.25 20.6642 11.5858 21 12 21C12.4142 21 12.75 20.6642 12.75 20.25V16H13.25C17.5302 16 21 12.5302 21 8.25V6.75C21 6.33579 20.6642 6 20.25 6H19C16.3562 6 14.0216 7.32382 12.6229 9.34475C11.9618 5.73541 8.80036 3 5 3H3.75Z" fill="currentColor"/>';fs._name="growth";fs=o([A("gds-icon-growth")],fs);fs.define();let bs=class extends Y{};bs._regularSVG='<path d="M14.957 6.12105L11.9903 8.31798C10.5943 7.11834 8.78371 6.88708 7.78755 6.88708C6.78411 6.88708 5.72977 7.17615 5.5698 7.8916C5.40984 8.58537 6.06425 9.12737 7.18403 9.43089C8.46378 9.77055 9.61991 10.0741 11.4159 10.5799C14.0772 11.3388 15.9023 12.4806 15.9023 15.1328C15.9023 18.7967 12.6302 20.6902 8.25291 20.6902C3.87559 20.6902 0.894368 18.4282 0 17.3731L3.13392 15.0461C5.33712 16.9539 6.86409 17.2213 8.14384 17.2213C9.61264 17.2213 10.9869 16.9106 11.1614 16.0867C11.3068 15.4219 10.7542 14.8943 9.50357 14.6052C8.09294 14.28 6.89318 14.0199 5.56253 13.673C1.9487 12.7335 0.930724 10.645 0.930724 8.76604C0.930724 6.18609 3.34479 3.53388 7.773 3.53388C12.303 3.53388 14.957 6.11382 14.957 6.12105ZM33.8551 3.79404H20.6359V20.206H34.0951V16.4192H25.275V13.7742H31.3465V10.1536H25.275V7.53749H33.8478V3.79404H33.8551ZM17.2184 23.9928H18.2437V0H17.2184V23.9928ZM35.8329 23.9928H36.8581V0H35.8329V23.9928ZM39.2504 20.206H49.8665C52.7023 20.206 55.0073 18.5077 55.0073 15.7832C55.0073 13.6585 53.6112 12.2493 51.6479 11.6278C51.5825 11.6134 51.5243 11.6061 51.4589 11.6061C51.5243 11.5989 51.5898 11.5917 51.6479 11.57C52.775 11.1292 54.0111 9.95122 54.0111 7.94941C54.0111 5.4056 51.7497 3.78681 48.9576 3.78681H39.2431L39.2504 20.206ZM43.9113 7.20506H47.6196C48.4704 7.20506 49.1612 7.87715 49.1612 8.64318C49.1612 9.40921 48.4704 10.0885 47.6196 10.0885H43.9113V7.20506ZM48.4413 16.5637H43.904V13.5718H48.4413C49.2411 13.5718 49.8956 14.215 49.8956 15.0678C49.8956 15.9133 49.2484 16.5637 48.4413 16.5637Z" fill="currentColor"/>';bs._solidSVG='<path d="M14.957 6.12105L11.9903 8.31798C10.5943 7.11834 8.78371 6.88708 7.78755 6.88708C6.78411 6.88708 5.72977 7.17615 5.5698 7.8916C5.40984 8.58537 6.06425 9.12737 7.18403 9.43089C8.46378 9.77055 9.61991 10.0741 11.4159 10.5799C14.0772 11.3388 15.9023 12.4806 15.9023 15.1328C15.9023 18.7967 12.6302 20.6902 8.25291 20.6902C3.87559 20.6902 0.894368 18.4282 0 17.3731L3.13392 15.0461C5.33712 16.9539 6.86409 17.2213 8.14384 17.2213C9.61264 17.2213 10.9869 16.9106 11.1614 16.0867C11.3068 15.4219 10.7542 14.8943 9.50357 14.6052C8.09294 14.28 6.89318 14.0199 5.56253 13.673C1.9487 12.7335 0.930724 10.645 0.930724 8.76604C0.930724 6.18609 3.34479 3.53388 7.773 3.53388C12.303 3.53388 14.957 6.11382 14.957 6.12105ZM33.8551 3.79404H20.6359V20.206H34.0951V16.4192H25.275V13.7742H31.3465V10.1536H25.275V7.53749H33.8478V3.79404H33.8551ZM17.2184 23.9928H18.2437V0H17.2184V23.9928ZM35.8329 23.9928H36.8581V0H35.8329V23.9928ZM39.2504 20.206H49.8665C52.7023 20.206 55.0073 18.5077 55.0073 15.7832C55.0073 13.6585 53.6112 12.2493 51.6479 11.6278C51.5825 11.6134 51.5243 11.6061 51.4589 11.6061C51.5243 11.5989 51.5898 11.5917 51.6479 11.57C52.775 11.1292 54.0111 9.95122 54.0111 7.94941C54.0111 5.4056 51.7497 3.78681 48.9576 3.78681H39.2431L39.2504 20.206ZM43.9113 7.20506H47.6196C48.4704 7.20506 49.1612 7.87715 49.1612 8.64318C49.1612 9.40921 48.4704 10.0885 47.6196 10.0885H43.9113V7.20506ZM48.4413 16.5637H43.904V13.5718H48.4413C49.2411 13.5718 49.8956 14.215 49.8956 15.0678C49.8956 15.9133 49.2484 16.5637 48.4413 16.5637Z" fill="currentColor"/>';bs._name="seb";bs=o([A("gds-icon-seb")],bs);bs.define();let ms=class extends Y{};ms._regularSVG='<path d="M2.75 12H21.25M2.75 5.75H21.25M2.75 18.25H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';ms._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.75C2 5.33579 2.33579 5 2.75 5H21.25C21.6642 5 22 5.33579 22 5.75C22 6.16421 21.6642 6.5 21.25 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75ZM2 12C2 11.5858 2.33579 11.25 2.75 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H2.75C2.33579 12.75 2 12.4142 2 12ZM2 18.25C2 17.8358 2.33579 17.5 2.75 17.5H21.25C21.6642 17.5 22 17.8358 22 18.25C22 18.6642 21.6642 19 21.25 19H2.75C2.33579 19 2 18.6642 2 18.25Z" fill="currentColor"/>';ms._name="bars-three";ms=o([A("gds-icon-bars-three")],ms);ms.define();let vs=class extends Y{};vs._regularSVG='<path d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75M12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75M12 21.25C9.65279 21.25 7.75 17.1086 7.75 12C7.75 6.89137 9.65279 2.75 12 2.75M12 21.25C14.3472 21.25 16.25 17.1086 16.25 12C16.25 6.89137 14.3472 2.75 12 2.75M21 12H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>';vs._solidSVG='<path d="M2.02771 11.2499H7.01143C7.08916 8.70549 7.55991 6.38765 8.30456 4.63553C8.71256 3.67552 9.2176 2.85039 9.81666 2.2542C9.82324 2.24765 9.82984 2.24112 9.83645 2.23462C5.59031 3.17115 2.35718 6.80647 2.02771 11.2499Z" fill="currentColor"/><path d="M2.02771 12.7499C2.35718 17.1934 5.59031 20.8288 9.83645 21.7653C9.82984 21.7588 9.82324 21.7522 9.81666 21.7457C9.2176 21.1495 8.71256 20.3244 8.30456 19.3644C7.55991 17.6122 7.08916 15.2944 7.01143 12.7499H2.02771Z" fill="currentColor"/><path d="M14.1636 21.7653C18.4097 20.8287 21.6428 17.1934 21.9723 12.7499H16.9886C16.9109 15.2944 16.4401 17.6122 15.6955 19.3644C15.2875 20.3244 14.7824 21.1495 14.1834 21.7457C14.1768 21.7522 14.1702 21.7588 14.1636 21.7653Z" fill="currentColor"/><path d="M21.9723 11.2499C21.6428 6.80648 18.4097 3.17115 14.1636 2.23462C14.1702 2.24112 14.1768 2.24765 14.1834 2.2542C14.7824 2.85039 15.2875 3.67552 15.6955 4.63553C16.4401 6.38765 16.9109 8.70549 16.9886 11.2499H21.9723Z" fill="currentColor"/><path d="M13.1252 3.3174C12.7104 2.90457 12.3309 2.74995 12 2.74995C11.6691 2.74995 11.2896 2.90457 10.8748 3.3174C10.4569 3.73326 10.0462 4.3726 9.68505 5.22224C9.03191 6.75905 8.58961 8.8698 8.51216 11.2499H15.4879C15.4104 8.8698 14.9681 6.75905 14.315 5.22224C13.9539 4.3726 13.5431 3.73326 13.1252 3.3174Z" fill="currentColor"/><path d="M14.315 18.7777C14.9681 17.2409 15.4104 15.1301 15.4879 12.7499L8.51216 12.7499C8.58961 15.1301 9.03191 17.2409 9.68505 18.7777C10.0462 19.6273 10.4569 20.2666 10.8748 20.6825C11.2896 21.0953 11.6691 21.2499 12 21.2499C12.3309 21.2499 12.7104 21.0953 13.1252 20.6825C13.5431 20.2666 13.9539 19.6273 14.315 18.7777Z" fill="currentColor"/>';vs._name="globus";vs=o([A("gds-icon-globus")],vs);vs.define();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Kl(e,t){if(e!==void 0){let s=0;for(const n of e)yield t(n,s++)}}const du=H`
  @layer base, a11y;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .field {
        transition: none;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    .field {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
      gap: var(--gds-space-xs);
      padding-block: var(--gds-space-xs);
      padding-inline: var(--gds-space-m) var(--gds-space-s);
      min-block-size: var(--gds-space-3xl);
      block-size: var(--gds-space-3xl);
      outline-style: solid;
      outline-width: 0;
      border-radius: var(--gds-space-xs);
      background: var(--gds-color-l3-background-secondary);
      color: var(--gds-color-l3-content-tertiary);
      border: var(--gds-space-4xs) solid var(--gds-color-l3-border-secondary);
      cursor: text;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: background-color;

      .right {
        display: flex;
        position: absolute;
        gap: var(--gds-space-xs);
        right: var(--gds-space-s);
        top: var(--gds-space-xs);
        block-size: max-content;
      }
    }

    .field.lead-slot-occupied {
      padding-inline-start: var(--gds-space-s);
    }

    .field.action-slot-occupied:not(.trail-slot-occupied) {
      padding-inline-end: var(--gds-space-s);

      &.small {
        padding-inline-end: var(--gds-space-xs);
      }
    }

    .field:focus-within {
      outline-width: var(--gds-space-3xs);
      outline-offset: var(--gds-space-3xs);
      outline-color: currentColor;
      border-color: currentColor;
    }

    .field.small {
      gap: var(--gds-space-2xs);
      padding: calc(var(--gds-space-xs) - 1px) var(--gds-space-xs);
      min-block-size: var(--gds-space-xl);
      block-size: var(--gds-space-xl);
    }

    .field.multiline {
      align-items: flex-start;
      padding: var(--gds-space-s);
      padding-inline-start: var(--gds-space-m);
      height: max-content;
    }

    .field.disabled {
      background: var(--gds-color-l3-background-disabled);
      color: var(--gds-color-l3-content-disabled);
      border-color: transparent;
      pointer-events: none;
    }

    .field.invalid {
      background: var(--gds-color-l3-background-negative-secondary);
      border-color: var(--gds-color-l3-border-negative);
      color: var(--gds-color-l3-content-negative);
    }

    slot:not([name])::slotted(*) {
      color: currentColor;
    }

    .main-slot-wrap {
      display: flex;
      gap: var(--gds-space-xs);
      flex: 1;
    }

    .main-slot-wrap.multiline {
      height: max-content;
    }

    @media (hover: hover) {
      .field:hover {
        background: color-mix(
          in srgb,
          var(--gds-color-l3-background-secondary),
          var(--gds-color-l3-states-light-hover)
        );
      }

      .field.invalid:hover {
        background: color-mix(
          in srgb,
          var(--gds-color-l3-background-negative-secondary),
          var(--gds-color-l3-states-negative-hover)
        );
      }
    }

    slot[name='lead']::slotted([gds-element^='gds-icon-']) {
      align-items: center;
      justify-content: center;
      display: flex;
      inline-size: var(--gds-space-l);
      block-size: var(--gds-space-l);
    }

    .multiline slot[name='action']::slotted([gds-element]) {
      margin-top: -4px;
    }
  }
`;var Ls,or,Ql,ni,ar,ii,lr,ri,dr,oi,cr;let ue=class extends I{constructor(){super(),h(this,or),h(this,ni),h(this,ii),h(this,ri),h(this,oi),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,h(this,Ls,(e,t)=>{const n=t.target.assignedNodes({flatten:!0}),i=n.length>0&&n.some(r=>{var a;return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&((a=r.textContent)==null?void 0:a.trim())!==""});e==="lead"?this._leadSlotOccupied=i:e==="trail"?this._trailSlotOccupied=i:e==="action"&&(this._actionSlotOccupied=i)})}connectedCallback(){super.connectedCallback(),pe.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return w`
      <div class="field ${lt(e)}" part="_base">
        ${y(this,or,Ql).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};Ls=new WeakMap;or=new WeakSet;Ql=function(){if(this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied))return w`
        ${y(this,ni,ar).call(this)} ${y(this,ii,lr).call(this)}
        <div class="right">
          ${y(this,ri,dr).call(this)} ${y(this,oi,cr).call(this)}
        </div>
      `;{const e=[y(this,ni,ar).call(this),y(this,ii,lr).call(this),y(this,ri,dr).call(this),y(this,oi,cr).call(this)];return w`${Kl(e,t=>t)}`}};ni=new WeakSet;ar=function(){return w` <slot
      name="lead"
      @slotchange=${e=>l(this,Ls).call(this,"lead",e)}
    ></slot>`};ii=new WeakSet;lr=function(){return w`<div
      class="main-slot-wrap ${lt({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>l(this,Ls).call(this,"main",e)}
      ></slot>
    </div>`};ri=new WeakSet;dr=function(){return w`
      <slot
        name="action"
        @slotchange=${e=>l(this,Ls).call(this,"action",e)}
      ></slot>
    `};oi=new WeakSet;cr=function(){return w`
      <slot
        name="trail"
        @slotchange=${e=>l(this,Ls).call(this,"trail",e)}
      ></slot>
    `};ue.styles=[du];o([g()],ue.prototype,"size",2);o([g({type:Boolean})],ue.prototype,"multiline",2);o([g({type:Boolean,reflect:!0})],ue.prototype,"disabled",2);o([g({type:Boolean})],ue.prototype,"invalid",2);o([ae("slot:not([name])")],ue.prototype,"_mainSlotElement",2);o([U()],ue.prototype,"_leadSlotOccupied",2);o([U()],ue.prototype,"_trailSlotOccupied",2);o([U()],ue.prototype,"_actionSlotOccupied",2);o([Q("disabled")],ue.prototype,"_handleDisabledChange",1);ue=o([A("gds-field-base"),Ze()],ue);const cu=H`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-color-l2-border-primary);
  }
`;var hu=cu;let yt=class extends W{render(){return w`<slot></slot>`}};yt.styles=[K,hu];yt=o([A("gds-flex")],yt);const uu=H`
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
`;var pu=uu,hr,ed,ur,td,No,sd,pr,nd;let Ie=class extends Ue(at(Ye(I))){constructor(){super(...arguments),h(this,hr),h(this,ur),h(this,No),h(this,pr),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1}render(){const e=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",t=this.disabled?"disabled":this.notification?"primary":this.variant,s=this.size==="small"||this.notification?"2xs":"xs",n=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs";return w`<gds-flex
      level="3"
      background=${e}
      color=${t}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${s}"
      border-radius="${this.notification||this.rounded?"max":"2xs"}"
      block-size="${n}"
      width="100%"
      font-size="${this.size==="small"||this.notification?"detail-xs":"detail-s"}"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${y(this,hr,ed).call(this)} ${y(this,ur,td).call(this)}
      ${y(this,pr,nd).call(this)}
    </gds-flex>`}};hr=new WeakSet;ed=function(){if(this.size!=="small"||!this.notification)return w`<slot name="lead"></slot>`};ur=new WeakSet;td=function(){return w`<slot @slotchange=${y(this,No,sd)}></slot>`};No=new WeakSet;sd=function(e){const s=e.target.assignedNodes({flatten:!0});this.mainSlotOccupied=s.length>0&&s.some(n=>{var i;return n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE&&((i=n.textContent)==null?void 0:i.trim())!==""})};pr=new WeakSet;nd=function(){return w`<slot name="trail"></slot>`};Ie.styles=[K,pu];o([g()],Ie.prototype,"variant",2);o([g({type:String})],Ie.prototype,"size",2);o([g({attribute:"disabled",type:Boolean,reflect:!0})],Ie.prototype,"disabled",2);o([g({attribute:"notification",type:Boolean,reflect:!0})],Ie.prototype,"notification",2);o([g({attribute:"rounded",type:Boolean,reflect:!0})],Ie.prototype,"rounded",2);o([U()],Ie.prototype,"mainSlotOccupied",2);Ie=o([A("gds-badge",{dependsOn:[yt]})],Ie);let ys=class extends Y{};ys._regularSVG='<path d="M12 2.75L12.6457 2.36845C12.5108 2.1401 12.2652 2 12 2C11.7348 2 11.4892 2.1401 11.3543 2.36845L12 2.75ZM2.25 19.25L1.60431 18.8685C1.4673 19.1003 1.46512 19.3878 1.59859 19.6217C1.73207 19.8556 1.9807 20 2.25 20V19.25ZM21.75 19.25V20C22.0193 20 22.2679 19.8556 22.4014 19.6217C22.5349 19.3878 22.5327 19.1003 22.3957 18.8685L21.75 19.25ZM12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75H12.75ZM11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25H11.25ZM11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75H11.25ZM12.75 15.74C12.75 15.3258 12.4142 14.99 12 14.99C11.5858 14.99 11.25 15.3258 11.25 15.74H12.75ZM11.3543 2.36845L1.60431 18.8685L2.89569 19.6315L12.6457 3.13155L11.3543 2.36845ZM2.25 20H21.75V18.5H2.25V20ZM22.3957 18.8685L12.6457 2.36845L11.3543 3.13155L21.1043 19.6315L22.3957 18.8685ZM11.25 9.75V13.25H12.75V9.75H11.25ZM11.5 15.75C11.5 15.4739 11.7239 15.25 12 15.25V16.75C12.5523 16.75 13 16.3023 13 15.75H11.5ZM12 15.25C12.2761 15.25 12.5 15.4739 12.5 15.75H11C11 16.3023 11.4477 16.75 12 16.75V15.25ZM12.5 15.75C12.5 16.0261 12.2761 16.25 12 16.25V14.75C11.4477 14.75 11 15.1977 11 15.75H12.5ZM12 16.25C11.7239 16.25 11.5 16.0261 11.5 15.75H13C13 15.1977 12.5523 14.75 12 14.75V16.25ZM12.75 15.75V15.74H11.25V15.75H12.75Z" fill="currentColor"/>';ys._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2652 2 12.5108 2.1401 12.6457 2.36845L22.3957 18.8685C22.5327 19.1003 22.5349 19.3878 22.4014 19.6217C22.2679 19.8556 22.0193 20 21.75 20H2.25C1.9807 20 1.73207 19.8556 1.59859 19.6217C1.46512 19.3878 1.4673 19.1003 1.60431 18.8685L11.3543 2.36845C11.4892 2.1401 11.7348 2 12 2ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V9.75C11.25 9.33579 11.5858 9 12 9ZM13 15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75C11 15.1977 11.4477 14.75 12 14.75C12.5523 14.75 13 15.1977 13 15.75Z" fill="currentColor"/>';ys._name="triangle-exclamation";ys=o([A("gds-icon-triangle-exclamation")],ys);const gu=H`
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
`;var gr,id;let Bt=class extends I{constructor(){super(...arguments),h(this,gr)}render(){return w`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${X(this.validationMessage,()=>w`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.validationMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter">
        ${X(Number.isInteger(this.charCounter),()=>y(this,gr,id).call(this,this.charCounter))}
      </div>
    </div>`}};gr=new WeakSet;id=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",w`<gds-badge variant="${t}">${e}</gds-badge>`};Bt.styles=[gu];o([g({type:Number})],Bt.prototype,"charCounter",2);o([g()],Bt.prototype,"validationMessage",2);Bt=o([A("gds-form-control-footer",{dependsOn:[Ie,ys]})],Bt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=e=>e??F,fu=`:host {
  --gds-ripple-motion-name: ripple;
  --gds-ripple-motion: var(--gds-ripple-motion-name) 1.25s
    cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal none running;
  border-radius: var(--gds-space-max);
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
  border-radius: var(--gds-space-max);
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
}`;let sn=class extends I{constructor(){super(...arguments),this.onmousedown=e=>{const s=e.target.getBoundingClientRect(),n=this._rippleEl;n&&(n.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-s.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-s.left}px`),setTimeout(()=>{n.classList.add("gds-ripple-effect")},20))}}render(){return ce`<div></div>`}};sn.styles=[K,ne(fu)];o([ae("div")],sn.prototype,"_rippleEl",2);sn=o([A("gds-ripple")],sn);class bu extends hn{constructor(t){if(super(t),t.type!==cn.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(t){return F}update(t,[s]){var r;const n=t.element,i=(r=t.options)==null?void 0:r.host;Array.from(i.attributes).forEach(a=>{s(a)&&n.setAttribute(a.name.replace("gds-",""),a.value)})}}const rd=Ms(bu),Ia=new WeakMap;function mu(e){return(t,...s)=>{let n=Ia.get(t);return n||(n=t.map(i=>i.replace(/\n[\s]+</gm,"<")),n.raw=t.raw,Ia.set(t,n)),e(n,...s)}}var re;class ge extends I{constructor(){super(),h(this,re,void 0),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{B(this,re,this.attachInternals())}catch{B(this,re,{form:this.closest("form"),setFormValue:s=>{this.value=s},setValidity:(s,n)=>{l(this,re).validity=s,this.errorMessage=n||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0})}}set invalid(t){const s=this.invalid;l(this,re).setValidity({...l(this,re).validity,customError:t,valid:!t},this.validationMessage||T("Error message."),this._getValidityAnchor()||void 0),this.requestUpdate("invalid",s),l(this,re).checkValidity()}get invalid(){return!l(this,re).validity.valid}get value(){return this._internalValue}set value(t){this._internalValue=t}get form(){return l(this,re).form}get validity(){return l(this,re).validity}get validationMessage(){return l(this,re).validationMessage}get willValidate(){return l(this,re).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const s=this.invalid,n=this.validator.validate(this)||[{...this.validity,valid:!0},""];return l(this,re).setValidity(n[0],n[1],this._getValidityAnchor()),s!==this.invalid&&this.requestUpdate(),l(this,re).checkValidity()}reportValidity(){return l(this,re).reportValidity()}__handleValueChange(){l(this,re).setFormValue(this.value),this.checkValidity()}formResetCallback(){typeof this.value=="string"?this.value="":this.value=void 0}formAssociatedCallback(t){t==null||t.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(t){this.checkValidity(),this.validity.valid||t.preventDefault()}focus(t){this._getValidityAnchor().focus(t)}}re=new WeakMap;ge.formAssociated=!0;o([g({attribute:!1})],ge.prototype,"validator",2);o([g({type:Boolean})],ge.prototype,"required",2);o([g({attribute:"error-message"})],ge.prototype,"errorMessage",2);o([g({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:e=>e==null?void 0:e.toString()}})],ge.prototype,"invalid",1);o([g()],ge.prototype,"label",2);o([g()],ge.prototype,"value",1);o([g({reflect:!0})],ge.prototype,"name",2);o([g({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);o([Q("value")],ge.prototype,"__handleValueChange",1);const vu=`@layer tokens, core, a11y, ranks, sizes, variants, disabled;

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
    --_block-size: var(--gds-space-3xl);
    display: flex;
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
    transition-property: color, border-colorm, background;
    transition-duration: 0.2s;
    flex: 1;

    &:focus {
      outline-color: var(--gds-color-l3-content-tertiary);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-color-l3-background-primary),
          var(--gds-color-l3-states-dark-hover)
        );
      }
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-primary),
        var(--gds-color-l3-states-dark-pressed)
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

/* High specificity */
.button.circle {
  aspect-ratio: 1 / 1;
  padding: 0;
  min-block-size: var(--_block-size);
  min-inline-size: var(--_block-size);
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

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-color-l3-background-secondary),
          var(--gds-color-l3-states-light-hover)
        );
      }
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

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-light-hover)
        );
      }
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

    &:focus {
      outline-color: var(--gds-color-l3-content-positive);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-color-l3-background-positive),
          var(--gds-color-l3-states-dark-hover)
        );
      }
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

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-color-l3-background-positive-secondary),
            var(--gds-color-l3-states-positive-hover)
          );
        }
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

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-color-l3-states-positive-hover)
          );
        }
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

    &:focus {
      outline-color: var(--gds-color-l3-content-negative);
      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-color-l3-background-negative),
          var(--gds-color-l3-states-dark-hover)
        );
      }
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

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-color-l3-background-negative-secondary),
            var(--gds-color-l3-states-negative-hover)
          );
        }
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

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-color-l3-states-negative-hover)
          );
        }
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
`;var Ps,tt,ut,fr,od,br,mr;const yu=["aria-label","aria-haspopup","aria-expanded"],xu=mu(w);class de extends ge{constructor(){super(...arguments),h(this,tt),h(this,fr),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",h(this,Ps,!1),h(this,br,()=>{var s;const t=((s=this._mainSlot)==null?void 0:s.assignedElements())??[];B(this,Ps,t.length===1&&t.some(n=>n.tagName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),h(this,mr,t=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:t})),this.form&&!l(this,tt,ut)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),pe.instance.apply(this,"gds-button")}render(){const t={button:!0,circle:l(this,Ps),icon:l(this,Ps),xs:this.size==="xs",small:this.size==="small",large:this.size==="large",positive:this.variant==="positive",negative:this.variant==="negative",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},s=l(this,tt,ut)?Nn`a`:Nn`button`;return Ao`
      <${s}
        class=${lt(t)}
        type="${we(l(this,tt,ut)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||F}
        href=${we(l(this,tt,ut)?this.href:void 0)}
        target=${we(l(this,tt,ut)?this.target:void 0)}
        rel=${we(l(this,tt,ut)?this.rel||l(this,fr,od):void 0)}
        download=${we(l(this,tt,ut)?this.download:void 0)}
        part="_button"
        @click="${l(this,mr)}"
        ${rd(n=>n.name.startsWith("gds-aria")||n.name==="gds-role"||yu.includes(n.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${l(this,br)}></slot>
        <slot name="trail"></slot>
        ${X(!this._isUsingTransitionalStyles,()=>xu`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${s}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}}Ps=new WeakMap;tt=new WeakSet;ut=function(){return this.href.length>0};fr=new WeakSet;od=function(){return this.target==="_blank"?"noreferrer noopener":void 0};br=new WeakMap;mr=new WeakMap;de.styles=[K,ne(vu)];de.shadowRootOptions={mode:"open",delegatesFocus:!0};o([g({type:Boolean,reflect:!0})],de.prototype,"disabled",2);o([g({reflect:!0})],de.prototype,"type",2);o([g({reflect:!0})],de.prototype,"rank",2);o([g({reflect:!0})],de.prototype,"variant",2);o([g({reflect:!0})],de.prototype,"size",2);o([g()],de.prototype,"label",2);o([g()],de.prototype,"href",2);o([g()],de.prototype,"target",2);o([g()],de.prototype,"rel",2);o([g()],de.prototype,"download",2);o([ae("slot:not([name])")],de.prototype,"_mainSlot",2);o([ae(".button")],de.prototype,"_button",2);o([Ul({attributes:!0,childList:!1,subtree:!1,characterData:!1})],de.prototype,"_attributeChanged",1);let jt=class extends Ue(at(Ye(de))){};jt=o([A("gds-button",{dependsOn:[sn]})],jt);let xt=class extends W{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return w`<slot></slot>`}};xt.styles=[K,H`
      :host {
        box-sizing: border-box;
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
        border-width: var(--gds-space-4xs);
        border-style: solid;
        display: flex;
        flex-direction: column;
      }
    `];o([k({property:"box-shadow",valueTemplate:e=>`var(--gds-shadow-${e})`})],xt.prototype,"shadow",2);o([k({styleTemplate:function(e,t){return`
      --_border-color: var(--gds-color-l${this.level}-background-${t});
      --_background-color: var(--gds-color-l${this.level}-background-${t});
      --_color: var(--gds-color-l${this.level}-content-${t});
      `}})],xt.prototype,"variant",2);xt=o([A("gds-card")],xt);let xs=class extends Y{};xs._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.375 8C11.375 8.34518 11.6548 8.625 12 8.625C12.3452 8.625 12.625 8.34518 12.625 8C12.625 7.65482 12.3452 7.375 12 7.375C11.6548 7.375 11.375 7.65482 11.375 8Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>';xs._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>';xs._name="circle-info";xs=o([A("gds-icon-circle-info")],xs);const _u=H`
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
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: all;
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
`;var Io,ad,vr,yr,xr,ld;let _t=class extends I{constructor(){super(...arguments),h(this,Io),h(this,xr),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,h(this,vr,()=>w`
      <gds-button
        size="small"
        rank="tertiary"
        label="${T("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${l(this,yr)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),h(this,yr,()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,(e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))})}render(){return w`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${X(this._hasExtendedSupportingText,l(this,vr))}
      </div>

      ${y(this,xr,ld).call(this)}
    `}};Io=new WeakSet;ad=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};vr=new WeakMap;yr=new WeakMap;xr=new WeakSet;ld=function(){return w`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${y(this,Io,ad)}
        ></slot>
      </div>
    `};_t.styles=[_u];o([g({type:Boolean,reflect:!0})],_t.prototype,"showExtendedSupportingText",2);o([U()],_t.prototype,"_hasExtendedSupportingText",2);o([ae("#extended-supporting-text")],_t.prototype,"_extendedSupportingText",2);_t=o([A("gds-form-control-header",{dependsOn:[jt,xt,xs]}),Ze()],_t);let _s=class extends Y{};_s._regularSVG='<path d="M4.75 4.75L19.25 19.25M19.25 4.75L4.75 19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';_s._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4.11612 4.11612C4.60427 3.62796 5.39573 3.62796 5.88388 4.11612L12 10.2322L18.1161 4.11612C18.6043 3.62796 19.3957 3.62796 19.8839 4.11612C20.372 4.60427 20.372 5.39573 19.8839 5.88388L13.7678 12L19.8839 18.1161C20.372 18.6043 20.372 19.3957 19.8839 19.8839C19.3957 20.372 18.6043 20.372 18.1161 19.8839L12 13.7678L5.88388 19.8839C5.39573 20.372 4.60427 20.372 4.11612 19.8839C3.62796 19.3957 3.62796 18.6043 4.11612 18.1161L10.2322 12L4.11612 5.88388C3.62796 5.39573 3.62796 4.60427 4.11612 4.11612Z" fill="currentColor"/>';_s._name="cross-large";_s=o([A("gds-icon-cross-large")],_s);const wu=H`
  @layer base, simplified;

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
`;var _r,dd,wr,cd,Bo,jo,Go,Uo,Yo,Zo,hd,qo,ud,Jo,pd,Xo,gd,Ko,fd,Qo,bd;let $e=class extends ge{constructor(){super(),h(this,_r),h(this,wr),h(this,Zo),h(this,qo),h(this,Jo),h(this,Xo),h(this,Ko),h(this,Qo),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",h(this,Bo,e=>["type","placeholder","required"].includes(e.name)),h(this,jo,e=>{const t=e.target;this.value=t.value}),h(this,Go,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),h(this,Uo,()=>{this.elInputAsync.then(e=>e.focus())}),h(this,Yo,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#clear-button")}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}render(){return w`${hl(this.variant,[["default",()=>y(this,_r,dd).call(this)],["floating-label",()=>y(this,wr,cd).call(this)]])}`}_getValidityAnchor(){return this.elInput}};_r=new WeakSet;dd=function(){var e;return w`
      <gds-form-control-header class="size-${this.size}">
        <label for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${l(this,Uo)}
        id="field"
      >
        ${y(this,Zo,hd).call(this)}
      </gds-field-base>
      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${l(this,Qo,bd)&&this.maxlength-(((e=this.value)==null?void 0:e.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};wr=new WeakSet;cd=function(){return F};Bo=new WeakMap;jo=new WeakMap;Go=new WeakMap;Uo=new WeakMap;Yo=new WeakMap;Zo=new WeakSet;hd=function(){return[y(this,qo,ud).call(this),y(this,Xo,gd).call(this),y(this,Ko,fd).call(this),y(this,Jo,pd).call(this)].map(t=>w`${t}`)};qo=new WeakSet;ud=function(){return w` <slot slot="lead" name="lead"></slot> `};Jo=new WeakSet;pd=function(){return w`<slot slot="trail" name="trail"></slot>`};Xo=new WeakSet;gd=function(){return w`
      <input
        @input=${l(this,jo)}
        @change=${l(this,Go)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        placeholder=" "
        ${rd(l(this,Bo))}
      />
    `};Ko=new WeakSet;fd=function(){var e;return this.clearable&&(((e=this.value)==null?void 0:e.length)||0)>0?w`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${this.invalid?"negative":""}"
        ?disabled="${this.disabled}"
        label="${T("Clear input")}"
        @click=${l(this,Yo)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-large />
      </gds-button>`:F};Qo=new WeakSet;bd=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};$e.styles=[K,wu];o([g({attribute:"supporting-text"})],$e.prototype,"supportingText",2);o([g({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],$e.prototype,"showExtendedSupportingText",2);o([g({type:Boolean})],$e.prototype,"clearable",2);o([g({type:Number})],$e.prototype,"maxlength",2);o([g({type:String})],$e.prototype,"variant",2);o([g({type:String})],$e.prototype,"size",2);o([Xt("input")],$e.prototype,"elInputAsync",2);o([ae("input")],$e.prototype,"elInput",2);$e=o([Ze()],$e);let kr=class extends Ue(at(Ye($e))){};kr=o([A("gds-input",{dependsOn:[_t,Bt,ue,yt,jt,_s]})],kr);kr.define();let wt=class extends I{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2016"}connectedCallback(){super.connectedCallback(),pe.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",ne(`:host {${Pi}}`))}render(){return w`<slot></slot>`}_onColorSchemeChange(){this.colorScheme==="dark"?this._dynamicStylesController.inject("color-scheme",ne(`:host { ${Pi}}`)):this._dynamicStylesController.inject("color-scheme",ne(`:host { ${pl}}`)),this.dispatchEvent(new CustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}}))}_onDesignVersionChange(){this.dispatchEvent(new CustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}}))}};wt.styles=[K,H`
      :host {
        display: contents;
      }
    `];o([g({reflect:!0,attribute:"color-scheme"})],wt.prototype,"colorScheme",2);o([g({reflect:!0,attribute:"design-version"})],wt.prototype,"designVersion",2);o([Q("colorScheme")],wt.prototype,"_onColorSchemeChange",1);o([Q("designVersion")],wt.prototype,"_onDesignVersionChange",1);wt=o([A("gds-theme")],wt);wt.define();xt.define();yt.define();const ku=H`
  :host {
    --_c: 12;
    --_grid-col: repeat(var(--_c), 1fr);
    width: 100%;
    display: grid;
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
`;var $u=ku;let Gt=class extends W{render(){return w`<slot></slot>`}};Gt.styles=[K,$u];o([k({property:"--_c"})],Gt.prototype,"columns",2);o([k({...Wt,styleTemplate:(e,t)=>{const s=t[0];return`--_gap-column: ${t[1]||s}; --_gap-row: ${s};`}})],Gt.prototype,"gap",2);o([k({property:"--_col-width",valueTemplate:e=>`${isNaN(e)?e:`${e}px`}`})],Gt.prototype,"auto-columns",2);Gt=o([A("gds-grid")],Gt);Gt.define();const Cu=H`
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
`;var Su=Cu;let Be=class extends dn(Ue(Do(I))){render(){return w`<img src="${this.src}" alt="${this.alt}" />`}};Be.styles=[K,Su];o([k()],Be.prototype,"aspect-ratio",2);o([k({property:"border-radius",valueTemplate:e=>`var(--gds-space-${e})`})],Be.prototype,"border-radius",2);o([k({selector:"img"})],Be.prototype,"object-fit",2);o([k({selector:"img"})],Be.prototype,"object-position",2);o([g()],Be.prototype,"src",2);o([g()],Be.prototype,"alt",2);Be=o([A("gds-img")],Be);Be.define();const Eu=H`
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
`;var Mu=Eu;let oe=class extends Ue(Do(at(Ye(dn(I))))){applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return w`<video></video>`}firstUpdated(){this.applyVideoSettings()}};oe.styles=[K,Mu];o([k()],oe.prototype,"aspect-ratio",2);o([k({selector:"video"})],oe.prototype,"object-position",2);o([k()],oe.prototype,"opacity",2);o([k({selector:"video"})],oe.prototype,"object-fit",2);o([k({selector:"video"})],oe.prototype,"pointer-events",2);o([k({valueTemplate:e=>`var(--gds-space-${e})`})],oe.prototype,"border-radius",2);o([g()],oe.prototype,"src",2);o([g()],oe.prototype,"poster",2);o([g({type:Boolean})],oe.prototype,"muted",2);o([g({type:Boolean})],oe.prototype,"playsinline",2);o([g({type:Boolean})],oe.prototype,"autoplay",2);o([g({type:Boolean})],oe.prototype,"loop",2);o([ae("video")],oe.prototype,"videoElement",2);oe=o([A("gds-video")],oe);oe.define();const Au=H`
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
`;var Tu=Au,At,ts,$r,md;let ve=class extends Ue(Ye(I)){constructor(){super(),h(this,At),h(this,$r),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const e={button:!0,selected:this.selected,compact:this.compact},t=l(this,At,ts)?Nn`a`:Nn`button`;return Ao`
      <${t}
        class="${lt(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${we(l(this,At,ts)?this.href:void 0)}
        target=${we(l(this,At,ts)?this.target:void 0)}
        rel=${we(l(this,At,ts)?this.rel||l(this,$r,md):void 0)}
        download=${we(l(this,At,ts)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${t}>
    `}};At=new WeakSet;ts=function(){return this.href.length>0};$r=new WeakSet;md=function(){return this.target==="_blank"?"noreferrer noopener":void 0};ve.styles=[K,ne(Tu)];ve.shadowRootOptions={mode:"open",delegatesFocus:!0};o([g({type:Boolean,reflect:!0})],ve.prototype,"disabled",2);o([g()],ve.prototype,"label",2);o([g()],ve.prototype,"href",2);o([g()],ve.prototype,"target",2);o([g()],ve.prototype,"rel",2);o([g()],ve.prototype,"download",2);o([g({type:Boolean,reflect:!0})],ve.prototype,"compact",2);o([g({type:Boolean,reflect:!0})],ve.prototype,"selected",2);ve=o([A("gds-menu-button")],ve);ve.define();function Lu(){return(e,t,s)=>{const n=e.connectedCallback,i=e.disconnectedCallback;e.connectedCallback=function(){n==null||n.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver(()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout(()=>{var r;(r=s.value)==null||r.call(this)},20)}),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){i==null||i.call(this),this.__resizeObservers[t].disconnect()}}}let Ut=class extends Y{};Ut._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Ut._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>';Ut._name="chevron-left";Ut=o([A("gds-icon-chevron-left")],Ut);let Yt=class extends Y{};Yt._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Yt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>';Yt._name="chevron-right";Yt=o([A("gds-icon-chevron-right")],Yt);const Ou=`@layer base {
  :host {
    display: flex;
    z-index: 1;
  }

  button {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    background: transparent;
    border-radius: var(--gds-space-max);
    border-width: 0;
    color: var(--gds-color-l3-content-tertiary);
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
        var(--gds-color-l3-states-light-hover),
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
      var(--gds-color-l3-content-tertiary) 100%
    );
  }
}
`;let Zt=class extends Ue(I){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),pe.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return w`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};Zt.styles=[...K,ne(Ou)];o([g({type:Boolean,reflect:!0})],Zt.prototype,"selected",2);o([g()],Zt.prototype,"value",2);o([g({type:Boolean,reflect:!0})],Zt.prototype,"disabled",2);Zt=o([A("gds-segment")],Zt);const Du=`@layer base {
  :host {
    background-color: var(--gds-color-l3-background-secondary);
    border: 0.25rem solid transparent;
    border-radius: var(--gds-space-max);
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
    border-radius: var(--gds-space-max);
    border-width: 0;
    background-color: var(--gds-color-l3-background-secondary);
    color: var(--gds-color-l3-content-tertiary);
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
          var(--gds-color-l3-background-secondary),
          var(--gds-color-l3-states-light-hover)
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
    background-color: var(--gds-color-l3-background-quarternary);
    border-radius: var(--gds-space-max);
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
`;var gt,Cr,vd,Sr,Er,Mr,Js,En,Ar,Tr;const zu=(e,t)=>{let s;return()=>{clearTimeout(s),s=setTimeout(e,t)}};let Ce=class extends Ye(Ue(at(I))){constructor(){super(...arguments),h(this,Cr),this.size="medium",h(this,gt,void 0),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,h(this,Sr,()=>{const e=this.segments.filter((t,s,n)=>{var i;return((i=n[s+1])==null?void 0:i.isVisible)&&!t.isVisible})[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),h(this,Er,()=>{const e=this.segments.filter((t,s,n)=>{var i;return((i=n[s-1])==null?void 0:i.isVisible)&&!t.isVisible}).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),h(this,Mr,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),h(this,Js,zu(l(this,Mr),50)),h(this,En,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,s=e.offsetLeft;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),h(this,Ar,e=>{const t=this.segments.find(s=>s===e.target||s.contains(e.target));t&&(this.segments.forEach(s=>s.selected=!1),t.selected=!0,B(this,gt,t.value),l(this,En).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0})))}),h(this,Tr,()=>{l(this,gt)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===l(this,gt));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return l(this,gt)}set value(e){B(this,gt,e),l(this,Tr).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),pe.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{l(this,Js).call(this)})})}render(){return w`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${l(this,Sr)}
        aria-label=${T("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${l(this,Ar)}
          @slotchange=${y(this,Cr,vd)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${l(this,Er)}
        aria-label=${T("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{l(this,Js).call(this),l(this,En).call(this)})}};gt=new WeakMap;Cr=new WeakSet;vd=function(){var t,s;const e=(t=this.segments.find(n=>n.selected))==null?void 0:t.value;e&&B(this,gt,e),(s=this.intersectionObserver)==null||s.disconnect(),this.intersectionObserver=new IntersectionObserver(n=>{n.forEach(i=>{const r=i.target;r._isVisible=i.intersectionRatio>.99,l(this,Js).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(n=>{var i;(i=this.intersectionObserver)==null||i.observe(n)})};Sr=new WeakMap;Er=new WeakMap;Mr=new WeakMap;Js=new WeakMap;En=new WeakMap;Ar=new WeakMap;Tr=new WeakMap;Ce.styles=[K,ne(Du)];o([g({reflect:!0})],Ce.prototype,"size",2);o([g()],Ce.prototype,"value",1);o([ae("slot")],Ce.prototype,"_elSlot",2);o([ae("#indicator")],Ce.prototype,"_elIndicator",2);o([ae("#track")],Ce.prototype,"_elTrack",2);o([U()],Ce.prototype,"_showPrevButton",2);o([U()],Ce.prototype,"_showNextButton",2);o([Lu(),Q("value")],Ce.prototype,"_recalculateMinWidth",1);Ce=o([A("gds-segmented-control",{dependsOn:[Zt,Ut,Yt]}),Ze()],Ce);Ce.define();const Vu=H`
  /* Host configuration with core variables */
  :host {
    /* Size variables with indexed access using CSS custom properties */
    --spinner-sizes: 2rem 3.75rem 6rem;
    --spinner-size-sm: 2rem;
    --spinner-size-md: 3.75rem;
    --spinner-size-lg: 6rem;

    --track-widths: 0.1rem 0.2rem 0.3rem;
    --track-width-sm: 0.275rem;
    --track-width-md: 0.375rem;
    --track-width-lg: 0.375rem;

    /* Default to light mode as fallback */
    --spinner-track-color: var(--gds-color-l3-background-secondary);
    --spinner-active-color: var(--gds-color-l3-content-secondary);
    --spinner-label-color: currentColor;
    --spinner-backdrop-color: rgba(0, 0, 0, 0.8);

    --spinner-backdrop-blur: 2px;

    /* Base sizing, will be overridden by size-specific variables */
    --size: var(--spinner-size-md);
    --track-width: var(--track-width-md);

    /* Use CSS variable for color-scheme to avoid minification issues */
    --spinner-color-scheme: light dark;
    color-scheme: var(--spinner-color-scheme);

    display: block;
  }

  /* Size-specific host settings */
  :host([size='sm']) {
    --size: var(--spinner-size-sm);
    --track-width: var(--track-width-sm);
  }

  :host([size='md']),
  :host([size='default']) {
    --size: var(--spinner-size-md);
    --track-width: var(--track-width-md);
  }

  :host([size='lg']) {
    --size: var(--spinner-size-lg);
    --track-width: var(--track-width-lg);
  }

  /* Fullscreen positioning */
  :host([fullscreen]) {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
  }

  /* Focus styles */
  :host(:focus-visible) {
    outline: 2px solid var(--spinner-active-color);
    outline-offset: 2px;
  }

  /* Spinner component */
  .spinner {
    border-radius: 50%;
    border: var(--track-width, 0.375rem) solid var(--spinner-track-color);
    border-top-color: var(--spinner-active-color);
    height: var(--size, 3.75rem);
    width: var(--size, 3.75rem);
    animation: gdsSpinnerRotation 1s linear infinite;
  }

  /* Motion preference adjustments */
  @media (prefers-reduced-motion: reduce) {
    .spinner {
      /* Slower rotation for reduced motion preference */
      animation-duration: 2s;
      /* Smaller rotation to reduce visual intensity */
      animation-name: gdsSpinnerReducedRotation;
    }

    @keyframes gdsSpinnerReducedRotation {
      to {
        transform: rotate(180deg);
      }
    }
  }

  /* Layout components */
  .spinner-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .spinner-wrapper.spinner-cover {
    position: absolute;
    inset: 0;
    z-index: 999;
  }

  .spinner-wrapper.spinner-fullscreen {
    position: fixed;
    inset: 0;
    z-index: 9999;
  }

  .spinner-wrapper.spinner-backdrop {
    background-color: var(--spinner-backdrop-color);
    backdrop-filter: blur(var(--spinner-backdrop-blur));
    --spinner-label-color: #fff;
    --spinner-track-color: var(--gds-color-l3-content-secondary);
    --spinner-active-color: var(--gds-color-l3-background-secondary);
  }

  /* Label styling */
  .spinner-label {
    margin-top: 1rem;
    color: var(--spinner-label-color);
    text-align: center;
  }

  /* Animation keyframes */
  @keyframes gdsSpinnerRotation {
    to {
      transform: rotate(360deg);
    }
  }
`;var Lr,yd,Rs;let Se=class extends at(dn(Ye(I))){constructor(){super(...arguments),h(this,Lr),this.label=T("Loading..."),this.showLabel=!1,this.cover=!1,this.fullscreen=!1,this.size="md",this._isAnimating=!1,h(this,Rs,{overflow:"visible",overscrollBehavior:"auto"})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","status"),this.setAttribute("aria-live","polite"),this._isAnimating=!0,this.dispatchEvent(new CustomEvent("gds-spinner-connected"))}disconnectedCallback(){super.disconnectedCallback(),this.fullscreen&&(this.fullscreen=!1,this._toggleRootStyles()),this._isAnimating=!1,super.disconnectedCallback()}_updateAriaLabel(){this.setAttribute("aria-label",this.label)}render(){return w`
      <div part="wrapper" class=${lt(y(this,Lr,yd).call(this))}>
        <span part="spinner" class="spinner"></span>
        ${X(this.label&&this.showLabel,()=>w`<span part="label" class="spinner-label">${this.label}</span>`,()=>null)}
      </div>
    `}_toggleRootStyles(){const{style:e}=document.documentElement;this.fullscreen?(B(this,Rs,{overflow:e.overflow,overscrollBehavior:e.overscrollBehavior}),e.overflow="hidden",e.overscrollBehavior="none"):(e.overflow=l(this,Rs).overflow,e.overscrollBehavior=l(this,Rs).overscrollBehavior)}};Lr=new WeakSet;yd=function(){return{"spinner-wrapper":!0,"spinner-fullscreen":this.fullscreen,"spinner-cover":this.cover,"spinner-backdrop":this.cover||this.fullscreen,"spinner-animating":this._isAnimating}};Rs=new WeakMap;Se.styles=[K,Vu];o([g({type:String})],Se.prototype,"label",2);o([g({type:Boolean,reflect:!0})],Se.prototype,"showLabel",2);o([g({type:Boolean,reflect:!0})],Se.prototype,"cover",2);o([g({type:Boolean,reflect:!0})],Se.prototype,"fullscreen",2);o([g({type:String,reflect:!0})],Se.prototype,"size",2);o([U()],Se.prototype,"_isAnimating",2);o([Q("label")],Se.prototype,"_updateAriaLabel",1);o([Q("fullscreen")],Se.prototype,"_toggleRootStyles",1);Se=o([A("gds-spinner"),Ze()],Se);Se.define();const Wu="en",Pu=["da","de","fi","fr","it","nl","no","sv"],Ru={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Åbn kalender-popup",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Man",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Annuller",s39938ecdae568740:"September",s3b151ca64eb26ec1:"Udvide",s407a88a592a0987c:"August",s46d6587089bd0356:"Næste måned",s49730f3d5751a433:"Indlæser...",s5052d10b539eabf0:"Marts",s58bfb494feb8eb02:ie`${0} valgt`,s5d929ff1619ac0c9:"Søg",s5e8250fb85d64c23:"Luk",s5febcd9b311c16fe:"Rul til højre",s62931b2a50168976:"Forrige måned",s63d040e37887f17e:"I dag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Ti",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"Åbn kontekstmenu",s83c436ed1bc16dfb:"Vis flere oplysninger",s8ade4e9d5e804d6a:"Første tilgængelige dato",s9836b719fa8ef857:"Lør",s987ac119fac8d621:"Søn",s9af3c72c33088826:ie`Der er ${0} fejl, der skal rettes, før du kan fortsætte:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Måned",sb4f1dffbb6be6302:"Ryd",sb77f4dce69a005ac:"Fejlmeddelelse.",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filtrer tilgængelige muligheder",sdc42f1da42d6411a:"Ryd inputfelt",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sidste tilgængelige dato",sf295af199c723ec8:"Fre"},Fu=Object.freeze(Object.defineProperty({__proto__:null,templates:Ru},Symbol.toStringTag,{value:"Module"})),Hu={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Kalender-Modal öffnen",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Mo",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Abbrechen",s39938ecdae568740:"September",s3b151ca64eb26ec1:"Expandieren",s407a88a592a0987c:"August",s46d6587089bd0356:"Nächster Monat",s49730f3d5751a433:"Laden...",s5052d10b539eabf0:"März",s58bfb494feb8eb02:ie`${0} ausgewählt`,s5d929ff1619ac0c9:"Suche",s5e8250fb85d64c23:"Schließen",s5febcd9b311c16fe:"Nach rechts scrollen",s62931b2a50168976:"Vorheriger Monat",s63d040e37887f17e:"Heute",s6cfed919e21ac6ac:"Do",s6d24cd19e23b8185:"Di",s74aa0319e62b2eb7:"Mi",s7793b811d20184fe:"Dezember",s7fd3469f78111589:"Kontextmenü öffnen",s83c436ed1bc16dfb:"Weitere Informationen anzeigen",s8ade4e9d5e804d6a:"Erstes verfügbares Datum",s9836b719fa8ef857:"Sa",s987ac119fac8d621:"So",s9af3c72c33088826:ie`Es gibt ${0} Fehler zu beheben, bevor du fortfahren kannst:`,sa6f2645578b2d2bc:"Jahr",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Monat",sb4f1dffbb6be6302:"Löschen",sb77f4dce69a005ac:"Fehlermeldung.",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Verfügbare Optionen filtern",sdc42f1da42d6411a:"Feld löschen",se0955919920ee87d:"Tag",se4129fd6b9d7b4c2:"Letztes verfügbares Datum",sf295af199c723ec8:"Fr"},Nu=Object.freeze(Object.defineProperty({__proto__:null,templates:Hu},Symbol.toStringTag,{value:"Module"})),Iu={s15a16ae9f99f19bf:"Heinä",s15a852e9f9a50fa5:"Kesä",s17e3edbe032f79ec:"Avaa kalenteri-modal",s1a2dda8f763a68bd:"Tammikuu",s1e118319b5202c41:"Ma",s1e187019b5262aa6:"Touko",s281846ef0421c71f:"Marraskuu",s2ceb11be2290bb1b:"Peruuta",s39938ecdae568740:"Syys",s3b151ca64eb26ec1:"Laajentaa",s407a88a592a0987c:"Elokuu",s46d6587089bd0356:"Seuraava kuukausi",s49730f3d5751a433:"Ladataan...",s5052d10b539eabf0:"Maalis",s58bfb494feb8eb02:ie`${0} valittua`,s5d929ff1619ac0c9:"Hae",s5e8250fb85d64c23:"Sulje",s5febcd9b311c16fe:"Vieritä oikealle",s62931b2a50168976:"Edellinen kuukausi",s63d040e37887f17e:"Tänään",s6cfed919e21ac6ac:"To",s6d24cd19e23b8185:"Ti",s74aa0319e62b2eb7:"Ke",s7793b811d20184fe:"Joulukuu",s7fd3469f78111589:"Avaa pikavalikko",s83c436ed1bc16dfb:"Näytä lisää tietoja",s8ade4e9d5e804d6a:"Ensimmäinen saatavilla oleva päivämäärä",s9836b719fa8ef857:"La",s987ac119fac8d621:"Su",s9af3c72c33088826:ie`On ${0} virhettä, jotka täytyy korjata ennen kuin voit jatkaa:`,sa6f2645578b2d2bc:"Vuosi",sa7cd5c2ff6d266e7:"Lokakuu",sb47daaf9e1c4a905:"Kuukausi",sb4f1dffbb6be6302:"Tyhjennä",sb77f4dce69a005ac:"Virheilmoitus.",sbc083a1dbee9af73:"Helmikuu",scb6b9cb49cf93277:"Huhti",sd898d99fd9c13de6:"Suodata saatavilla olevia vaihtoehtoja",sdc42f1da42d6411a:"Tyhjennä syöte",se0955919920ee87d:"Päivä",se4129fd6b9d7b4c2:"Viimeinen saatavilla oleva päivämäärä",sf295af199c723ec8:"Pe"},Bu=Object.freeze(Object.defineProperty({__proto__:null,templates:Iu},Symbol.toStringTag,{value:"Module"})),ju={s15a16ae9f99f19bf:"Juillet",s15a852e9f9a50fa5:"Juin",s17e3edbe032f79ec:"Ouvrir le calendrier modal",s1a2dda8f763a68bd:"Janvier",s1e118319b5202c41:"Lun",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"Novembre",s2ceb11be2290bb1b:"Annuler",s39938ecdae568740:"Septembre",s3b151ca64eb26ec1:"Développer",s407a88a592a0987c:"Août",s46d6587089bd0356:"Mois suivant",s49730f3d5751a433:"Chargement...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:ie`${0} sélectionné(s)`,s5d929ff1619ac0c9:"Rechercher",s5e8250fb85d64c23:"Fermer",s5febcd9b311c16fe:"Faire défiler à droite",s62931b2a50168976:"Mois précédent",s63d040e37887f17e:"Aujourd'hui",s6cfed919e21ac6ac:"Jeu",s6d24cd19e23b8185:"Mar",s74aa0319e62b2eb7:"Mer",s7793b811d20184fe:"Décembre",s7fd3469f78111589:"Ouvrir le menu contextuel",s83c436ed1bc16dfb:"Afficher plus d'informations",s8ade4e9d5e804d6a:"Première date disponible",s9836b719fa8ef857:"Sam",s987ac119fac8d621:"Dim",s9af3c72c33088826:ie`Il y a ${0} erreur(s) à corriger avant de pouvoir continuer :`,sa6f2645578b2d2bc:"Année",sa7cd5c2ff6d266e7:"Octobre",sb47daaf9e1c4a905:"Mois",sb4f1dffbb6be6302:"Effacer",sb77f4dce69a005ac:"Message d'erreur.",sbc083a1dbee9af73:"Février",scb6b9cb49cf93277:"Avril",sd898d99fd9c13de6:"Filtrer les options disponibles",sdc42f1da42d6411a:"Effacer la saisie",se0955919920ee87d:"Jour",se4129fd6b9d7b4c2:"Dernière date disponible",sf295af199c723ec8:"Ven"},Gu=Object.freeze(Object.defineProperty({__proto__:null,templates:ju},Symbol.toStringTag,{value:"Module"})),Uu={s15a16ae9f99f19bf:"Luglio",s15a852e9f9a50fa5:"Giugno",s17e3edbe032f79ec:"Apri la finestra del calendario",s1a2dda8f763a68bd:"Gennaio",s1e118319b5202c41:"Lun",s1e187019b5262aa6:"Maggio",s281846ef0421c71f:"Novembre",s2ceb11be2290bb1b:"Annulla",s39938ecdae568740:"Settembre",s3b151ca64eb26ec1:"Espandere",s407a88a592a0987c:"Agosto",s46d6587089bd0356:"Mese successivo",s49730f3d5751a433:"Caricamento...",s5052d10b539eabf0:"Marzo",s58bfb494feb8eb02:ie`${0} selezionato`,s5d929ff1619ac0c9:"Cerca",s5e8250fb85d64c23:"Chiudi",s5febcd9b311c16fe:"Scorri a destra",s62931b2a50168976:"Mese precedente",s63d040e37887f17e:"Oggi",s6cfed919e21ac6ac:"Gio",s6d24cd19e23b8185:"Mar",s74aa0319e62b2eb7:"Mer",s7793b811d20184fe:"Dicembre",s7fd3469f78111589:"Apri il menu contestuale",s83c436ed1bc16dfb:"Mostra più informazioni",s8ade4e9d5e804d6a:"Prima data disponibile",s9836b719fa8ef857:"Sab",s987ac119fac8d621:"Dom",s9af3c72c33088826:ie`Ci sono ${0} errori da correggere prima di poter continuare:`,sa6f2645578b2d2bc:"Anno",sa7cd5c2ff6d266e7:"Ottobre",sb47daaf9e1c4a905:"Mese",sb4f1dffbb6be6302:"Pulisci",sb77f4dce69a005ac:"Messaggio di errore.",sbc083a1dbee9af73:"Febbraio",scb6b9cb49cf93277:"Aprile",sd898d99fd9c13de6:"Filtra le opzioni disponibili",sdc42f1da42d6411a:"Pulisci il campo di input",se0955919920ee87d:"Giorno",se4129fd6b9d7b4c2:"Ultima data disponibile",sf295af199c723ec8:"Ven"},Yu=Object.freeze(Object.defineProperty({__proto__:null,templates:Uu},Symbol.toStringTag,{value:"Module"})),Zu={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Open kalenderpop-up",s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"Ma",s1e187019b5262aa6:"Mei",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Annuleren",s39938ecdae568740:"September",s3b151ca64eb26ec1:"Uitbreiden",s407a88a592a0987c:"Augustus",s46d6587089bd0356:"Volgende maand",s49730f3d5751a433:"Laden...",s5052d10b539eabf0:"Maart",s58bfb494feb8eb02:ie`${0} geselecteerd`,s5d929ff1619ac0c9:"Zoeken",s5e8250fb85d64c23:"Sluiten",s5febcd9b311c16fe:"Scroll rechts",s62931b2a50168976:"Vorige maand",s63d040e37887f17e:"Vandaag",s6cfed919e21ac6ac:"Do",s6d24cd19e23b8185:"Di",s74aa0319e62b2eb7:"Wo",s7793b811d20184fe:"December",s7fd3469f78111589:"Open contextmenu",s83c436ed1bc16dfb:"Toon meer informatie",s8ade4e9d5e804d6a:"Eerste beschikbare datum",s9836b719fa8ef857:"Za",s987ac119fac8d621:"Zo",s9af3c72c33088826:ie`Er zijn ${0} fouten die gecorrigeerd moeten worden voordat je verder kunt gaan:`,sa6f2645578b2d2bc:"Jaar",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Maand",sb4f1dffbb6be6302:"Wis",sb77f4dce69a005ac:"Foutmelding.",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filter beschikbare opties",sdc42f1da42d6411a:"Wis invoer",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Laatste beschikbare datum",sf295af199c723ec8:"Vr"},qu=Object.freeze(Object.defineProperty({__proto__:null,templates:Zu},Symbol.toStringTag,{value:"Module"})),Ju={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Åpne kalendermodal",s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Man",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s39938ecdae568740:"September",s3b151ca64eb26ec1:"Utvide",s407a88a592a0987c:"August",s46d6587089bd0356:"Neste måned",s49730f3d5751a433:"Laster...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:ie`${0} valgt`,s5d929ff1619ac0c9:"Søk",s5e8250fb85d64c23:"Lukk",s5febcd9b311c16fe:"Rull til høyre",s62931b2a50168976:"Forrige måned",s63d040e37887f17e:"I dag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tir",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"Desember",s7fd3469f78111589:"Åpne kontekstmeny",s83c436ed1bc16dfb:"Vis mer informasjon",s8ade4e9d5e804d6a:"Første tilgjengelige dato",s9836b719fa8ef857:"Lør",s987ac119fac8d621:"Søn",s9af3c72c33088826:ie`Det er ${0} feil som må rettes før du kan fortsette:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Måned",sb4f1dffbb6be6302:"Rens",sb77f4dce69a005ac:"Feilmelding.",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filtrer tilgjengelige alternativer",sdc42f1da42d6411a:"Rens inputfelt",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Siste tilgjengelige dato",sf295af199c723ec8:"Fre"},Xu=Object.freeze(Object.defineProperty({__proto__:null,templates:Ju},Symbol.toStringTag,{value:"Module"})),Ku={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"Öppna kalender",s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"Mån",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s39938ecdae568740:"September",s3b151ca64eb26ec1:"Expandera",s407a88a592a0987c:"Augusti",s46d6587089bd0356:"Nästa månad",s49730f3d5751a433:"Laddar...",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:ie`${0} valda`,s5d929ff1619ac0c9:"Sök",s5e8250fb85d64c23:"Stäng",s5febcd9b311c16fe:"Scrolla höger",s62931b2a50168976:"Föregående månad",s63d040e37887f17e:"Idag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tis",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"Öppna meny",s83c436ed1bc16dfb:"Visa mer information",s8ade4e9d5e804d6a:"Första tillgängliga datum",s9836b719fa8ef857:"Lör",s987ac119fac8d621:"Sön",s9af3c72c33088826:ie`Det finns ${0} fel att åtgärda innan du kan fortsätta:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Månad",sb4f1dffbb6be6302:"Rensa",sb77f4dce69a005ac:"Felmeddelande.",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Sök i listan av val",sdc42f1da42d6411a:"Rensa text",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sista tillgängliga datum",sf295af199c723ec8:"Fre"},Qu=Object.freeze(Object.defineProperty({__proto__:null,templates:Ku},Symbol.toStringTag,{value:"Module"})),Ba=new Map([["sv",Qu],["no",Xu],["nl",qu],["it",Yu],["fr",Gu],["fi",Bu],["de",Nu],["da",Fu]]),ep=({extraLocales:e,extraTemplates:t}={extraLocales:[],extraTemplates:new Map})=>{const s=[...Pu];for(const[n,i]of t)Ba.set(n,i);for(const n of e)s.push(n);return ih({sourceLocale:Wu,targetLocales:s,loadLocale:async n=>{const i=Ba.get(n);return i||Promise.reject(new Error(`Locale ${n} not found`))}})};var tp=Object.defineProperty,sp=Object.getOwnPropertyDescriptor,np=(e,t,s,n)=>{for(var i=n>1?void 0:n?sp(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(n?a(t,s,i):a(i))||i);return n&&i&&tp(t,s,i),i};const{setLocale:ja}=ep();let Ga=class extends ke{connectedCallback(){super.connectedCallback()}handleButtonClick(e){this.dispatchEvent(new CustomEvent("view-change",{detail:{view:e},bubbles:!0,composed:!0}))}render(){return w`
      <gds-flex
        align-items="stretch"
        width="100%"
        justify-content="space-between"
        background="l1-background-primary"
        position="relative"
        height="4rem"
      >
        <gds-div display="xs{flex} s{flex} m{flex} l{none}">
          <gds-context-menu>
            <gds-flex align-items="center" gap="s" slot="trigger">
              Menu
              <gds-icon-bars-three></gds-icon-bars-three>
            </gds-flex>
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
        </gds-div>
        <gds-div display="xs{none} s{none} m{none} l{flex}">
          <gds-menu-button @click=${()=>this.handleButtonClick("login")}>
            Login
          </gds-menu-button>
          <gds-menu-button
            @click=${()=>this.handleButtonClick("form-validation")}
          >
            Validation
          </gds-menu-button>
          <gds-menu-button @click=${()=>this.handleButtonClick("datepicker")}>
            Datepicker
          </gds-menu-button>
          <gds-menu-button @click=${()=>this.handleButtonClick("calendar")}>
            Calendar
          </gds-menu-button>
          <gds-menu-button @click=${()=>this.handleButtonClick("spinner")}>
            Spinner
          </gds-menu-button>
        </gds-div>
        <gds-flex
          position="2xs{relative} l{absolute}"
          inset="auto 0"
          margin="0 auto"
          width="max-content"
          height="4rem"
          align-items="center"
        >
          <gds-icon-brands-seb></gds-icon-brands-seb>
        </gds-flex>
        <gds-flex align-items="center" margin="0 m 0 0">
          <gds-context-menu>
            <gds-flex align-items="center" gap="s" slot="trigger">
              Language
              <gds-icon-globus></gds-icon-globus>
            </gds-flex>
            <gds-menu-item @click=${()=>ja("en")}>EN</gds-menu-item>
            <gds-menu-item @click=${()=>ja("sv")}>SV</gds-menu-item>
          </gds-context-menu>
        </gds-flex>
      </gds-flex>
    `}};Ga=np([Es("gds-header")],Ga);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ip(e,t){const s=typeof t=="function";if(e!==void 0){let n=-1;for(const i of e)n>-1&&(yield s?t(n):t),n++,yield i}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ua=(e,t,s)=>{const n=new Map;for(let i=t;i<=s;i++)n.set(e[i],i);return n},rp=Ms(class extends hn{constructor(e){if(super(e),e.type!==cn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let n;s===void 0?s=t:t!==void 0&&(n=t);const i=[],r=[];let a=0;for(const c of e)i[a]=n?n(c,a):a,r[a]=s(c,a),a++;return{values:r,keys:i}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,n]){const i=gh(e),{values:r,keys:a}=this.dt(t,s,n);if(!Array.isArray(i))return this.ut=a,r;const c=this.ut??(this.ut=[]),d=[];let u,b,f=0,_=i.length-1,v=0,C=r.length-1;for(;f<=_&&v<=C;)if(i[f]===null)f++;else if(i[_]===null)_--;else if(c[f]===a[v])d[v]=St(i[f],r[v]),f++,v++;else if(c[_]===a[C])d[C]=St(i[_],r[C]),_--,C--;else if(c[f]===a[C])d[C]=St(i[f],r[C]),Ds(e,d[C+1],i[f]),f++,C--;else if(c[_]===a[v])d[v]=St(i[_],r[v]),Ds(e,i[f],i[_]),_--,v++;else if(u===void 0&&(u=Ua(a,v,C),b=Ua(c,f,_)),u.has(c[f]))if(u.has(c[_])){const E=b.get(a[v]),V=E!==void 0?i[E]:null;if(V===null){const O=Ds(e,i[f]);St(O,r[v]),d[v]=O}else d[v]=St(V,r[v]),Ds(e,i[f],V),i[E]=null;v++}else zi(i[_]),_--;else zi(i[f]),f++;for(;v<=C;){const E=Ds(e,d[C+1]);St(E,r[v]),d[v++]=E}for(;f<=_;){const E=i[f++];E!==null&&zi(E)}return this.ut=a,ph(e,d),Ae}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class op{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class ap{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ya=e=>!ch(e)&&typeof e.then=="function",Za=1073741823;class lp extends Tl{constructor(){super(...arguments),this._$Cwt=Za,this._$Cbt=[],this._$CK=new op(this),this._$CX=new ap}render(...t){return t.find(s=>!Ya(s))??Ae}update(t,s){const n=this._$Cbt;let i=n.length;this._$Cbt=s;const r=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<s.length&&!(c>this._$Cwt);c++){const d=s[c];if(!Ya(d))return this._$Cwt=c,d;c<i&&d===n[c]||(this._$Cwt=Za,i=0,Promise.resolve(d).then(async u=>{for(;a.get();)await a.get();const b=r.deref();if(b!==void 0){const f=b._$Cbt.indexOf(d);f>-1&&f<b._$Cwt&&(b._$Cwt=f,b.setValue(u))}}))}return Ae}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const dp=Ms(lp),cp=6048e5,qa=Symbol.for("constructDateFrom");function je(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&qa in e?e[qa](t):e instanceof Date?new e.constructor(t):new Date(t)}function ze(e,t){return je(t||e,e)}function zt(e,t,s){const n=ze(e,s==null?void 0:s.in);return isNaN(t)?je(e,NaN):(t&&n.setDate(n.getDate()+t),n)}function xd(e,t,s){const n=ze(e,s==null?void 0:s.in);if(isNaN(t))return je(e,NaN);if(!t)return n;const i=n.getDate(),r=je(e,n.getTime());r.setMonth(n.getMonth()+t+1,0);const a=r.getDate();return i>=a?r:(n.setFullYear(r.getFullYear(),r.getMonth(),i),n)}let hp={};function ea(){return hp}function bt(e,t){var c,d,u,b;const s=ea(),n=(t==null?void 0:t.weekStartsOn)??((d=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:d.weekStartsOn)??s.weekStartsOn??((b=(u=s.locale)==null?void 0:u.options)==null?void 0:b.weekStartsOn)??0,i=ze(e,t==null?void 0:t.in),r=i.getDay(),a=(r<n?7:0)+r-n;return i.setDate(i.getDate()-a),i.setHours(0,0,0,0),i}function ta(e,...t){const s=je.bind(null,e||t.find(n=>typeof n=="object"));return t.map(s)}function Ja(e,t){const s=ze(e,t==null?void 0:t.in);return s.setHours(0,0,0,0),s}function up(e,t,s){return zt(e,t*7,s)}function pt(e,t,s){const[n,i]=ta(s==null?void 0:s.in,e,t);return+Ja(n)==+Ja(i)}function pp(e,t){const s=ze(e,t==null?void 0:t.in),n=s.getMonth();return s.setFullYear(s.getFullYear(),n+1,0),s.setHours(23,59,59,999),s}function _d(e,t){const[s,n]=ta(e,t.start,t.end);return{start:s,end:n}}function gp(e,t){const{start:s,end:n}=_d(t==null?void 0:t.in,e);let i=+s>+n;const r=i?+s:+n,a=i?n:s;a.setHours(0,0,0,0);let c=1;const d=[];for(;+a<=r;)d.push(je(s,a)),a.setDate(a.getDate()+c),a.setHours(0,0,0,0);return i?d.reverse():d}function fp(e,t){const{start:s,end:n}=_d(t==null?void 0:t.in,e);let i=+s>+n;const r=bt(i?n:s,t),a=bt(i?s:n,t);r.setHours(15),a.setHours(15);const c=+a.getTime();let d=r,u=(t==null?void 0:t.step)??1;if(!u)return[];u<0&&(u=-u,i=!i);const b=[];for(;+d<=c;)d.setHours(0),b.push(je(s,d)),d=up(d,u),d.setHours(15);return i?b.reverse():b}function bp(e,t){const s=ze(e,t==null?void 0:t.in);return s.setDate(1),s.setHours(0,0,0,0),s}function mp(e,t){var b,f;const s=ze(e,t==null?void 0:t.in),n=s.getFullYear(),i=ea(),r=i.firstWeekContainsDate??((f=(b=i.locale)==null?void 0:b.options)==null?void 0:f.firstWeekContainsDate)??1,a=je(e,0);a.setFullYear(n+1,0,r),a.setHours(0,0,0,0);const c=bt(a,t),d=je(e,0);d.setFullYear(n,0,r),d.setHours(0,0,0,0);const u=bt(d,t);return+s>=+c?n+1:+s>=+u?n:n-1}function vp(e,t){var c,d;const s=ea(),n=s.firstWeekContainsDate??((d=(c=s.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??1,i=mp(e,t),r=je(e,0);return r.setFullYear(i,0,n),r.setHours(0,0,0,0),bt(r,t)}function yp(e,t){const s=ze(e,t==null?void 0:t.in),n=+bt(s,t)-+vp(s,t);return Math.round(n/cp)+1}function xp(e,t){const s=ze(e,t==null?void 0:t.in),n=s.getMonth();return s.setFullYear(s.getFullYear(),n+1,0),s.setHours(0,0,0,0),ze(s,t==null?void 0:t.in)}function _p(e,t,s){const[n,i]=ta(s==null?void 0:s.in,e,t);return n.getFullYear()===i.getFullYear()&&n.getMonth()===i.getMonth()}function wp(e,t,s){const n=ze(e,s==null?void 0:s.in);return n.setHours(t),n}function kp(e,t,s){return xd(e,-t,s)}const $p=H`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var Cp=$p;let qt=class extends Y{};qt._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';qt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99454C22.2979 3.40464 22.4157 4.18729 22.0056 4.74263L10.0056 20.9926C9.80433 21.2652 9.50107 21.4443 9.16524 21.4891C8.82942 21.5339 8.4898 21.4404 8.22417 21.2301L2.22417 16.4801C1.6829 16.0516 1.59149 15.2655 2.01999 14.7242C2.4485 14.1829 3.23466 14.0915 3.77593 14.52L8.76241 18.4677L19.9945 3.25753C20.4046 2.70218 21.1873 2.58444 21.7426 2.99454Z" fill="currentColor"/>';qt._name="checkmark";qt=o([A("gds-icon-checkmark")],qt);var Fs,Mn,Or;let Ge=class extends El(I){constructor(){super(),h(this,Mn),h(this,Fs,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",y(this,Mn,Or)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),y(this,Mn,Or).call(this,e))})}get hidden(){return l(this,Fs)}set hidden(e){const t=e.toString();B(this,Fs,t==="true"),l(this,Fs)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),pe.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple,t=w`
      <span class="checkbox ${lt({checked:this.selected})}">
        ${this.selected?w`<gds-icon-checkmark
              width="10"
              height="10"
              stroke="4"
            ></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),w`<div>${X(e,()=>t)} <slot></slot></div>`}};Fs=new WeakMap;Mn=new WeakSet;Or=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};Ge.styles=[K,Ml];o([g()],Ge.prototype,"value",2);o([g({type:Boolean,reflect:!0})],Ge.prototype,"hidden",1);o([g({attribute:"aria-selected",reflect:!0})],Ge.prototype,"selected",2);o([g({type:Boolean,reflect:!0})],Ge.prototype,"isPlaceholder",2);o([Q("isPlaceholder")],Ge.prototype,"_handlePlaceholderStatusChange",1);Ge=o([A("gds-option",{dependsOn:[qt]})],Ge);var Hs,Dr;let Jt=class extends I{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,h(this,Hs,Jn()),h(this,Dr,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new Ll(this)}get navigableItems(){return this.visibleOptionElements}get options(){return l(this,Hs).value?Ol(l(this,Hs).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),pe.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",l(this,Dr))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return w`<slot ${Xn(l(this,Hs))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};Hs=new WeakMap;Dr=new WeakMap;Jt.styles=Cp;o([g({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],Jt.prototype,"multiple",2);o([g()],Jt.prototype,"compareWith",2);o([Q("multiple")],Jt.prototype,"_rerenderOptions",1);Jt=o([A("gds-listbox",{dependsOn:[Ge]})],Jt);let ws=class extends Y{};ws._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';ws._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>';ws._name="chevron-bottom";ws=o([A("gds-icon-chevron-bottom")],ws);const Sp=H`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: var(--gds-space-xs);
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    #field::part(_base) {
      cursor: pointer;
    }

    button {
      appearance: none;
      background: transparent;
      border-width: 0;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      color: currentColor;
      cursor: pointer;
      padding: 0;
      text-align: left;
      flex: 0 1 100%;

      /* This prevents overflow when the text is too long */
      display: grid;
    }

    button:focus {
      outline: none;
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    input[type='text'] {
      border-radius: var(--gds-space-xs);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      font-size: inherit;
      line-height: inherit;
      border: none;
      outline: none;
      color: var(--gds-color-l3-content-disabled);
      border-color: var(--gds-color-l3-border-tertiary);
      border-width: 0 0 var(--gds-space-4xs) 0;
      border-style: solid;
      width: 100%;
      padding: var(--gds-space-m);
      font-weight: var(--gds-text-weight-regular);
      flex: 1;
      box-sizing: border-box;
      font-family: inherit;

      &:focus {
        border-color: var(--gds-color-l3-border-secondary);
        color: var(--gds-color-l3-content-tertiary);
      }

      &::placeholder {
        font-family: inherit;
        font-weight: var(--gds-text-weight-book);
        color: var(--gds-color-l3-content-disabled);
      }
    }

    input[role='combobox'] {
      appearance: none;
      background: transparent;
      border: none;
      font-size: inherit;
      outline: none;
    }

    [aria-expanded='true'] [slot='trail'] {
      transform: scaleY(-1);
    }
  }
`;var Ep=Sp,Tt,zr,Vr,Wr,ft,Pr,An,Rr,Fr,Hr,Nr,wd,ai,li,Ir,kd,Br,$d,ks,_i;let Z=class extends ge{constructor(){super(...arguments),h(this,Nr),h(this,Ir),h(this,Br),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,h(this,Tt,void 0),h(this,zr,()=>{var e;return w`
      <input
        id="trigger"
        role="combobox"
        aria-expanded="${this.open}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        placeholder="${(e=this.placeholder)==null?void 0:e.innerHTML}"
        name="trigger"
        aria-label="${this.label} ${this.displayValue}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
        .value=${this.value}
        @click=${t=>{t.stopImmediatePropagation()}}
        @input=${t=>{this.value=t.target.value,l(this,ai).call(this),l(this,An).call(this,t),l(this,ft).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${t=>{t.key==="ArrowDown"&&(t.preventDefault(),l(this,ft).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(s=>s.focus())),t.key==="Enter"&&l(this,li).call(this)}}
      />
    `}),h(this,Vr,()=>w`
      <button
        id="trigger"
        role="combobox"
        aria-expanded="${this.open}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        name="trigger"
        aria-label="${this.label} ${this.displayValue}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
      >
        <slot name="trigger">
          <span>${Yl(this.displayValue)}</span>
        </slot>
      </button>
    `),h(this,Wr,e=>{if(this.combobox){const s=e.getBoundingClientRect(),i=window.innerHeight-s.bottom,r=s.top;let a=Math.min(r,this.maxHeight);return i>r&&(a=Math.min(i,this.maxHeight)),`${a-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),h(this,ft,(e,t)=>this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1,cancelable:!0}))),h(this,Pr,e=>{l(this,ft).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),h(this,An,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchEvent(new CustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value},cancelable:!0}))))return;const s=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!s.value)return;this.options.filter(i=>!this.searchFilter(s.value,i)).forEach(i=>i.hidden=!0)}),h(this,Rr,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),h(this,Fr,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),h(this,Hr,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),h(this,ai,()=>{this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),h(this,li,()=>{this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),h(this,ks,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&l(this,ft).call(this,!1,"close")&&(this.open=!1)}),h(this,_i,e=>{var t;e.key==="Tab"&&!this.searchable&&l(this,ft).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())})}get type(){return"gds-dropdown"}get options(){return l(this,Tt)?Array.from(l(this,Tt)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(l(this,Tt))return Array.from(l(this,Tt)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=T(ie`${this.value.length} selected`):e=this.value.reduce((n,i)=>{var r;return n+((r=this.options.find(a=>a.value===i))==null?void 0:r.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(n=>n.selected))==null?void 0:t.innerHTML,e||((s=this.placeholder)==null?void 0:s.innerHTML)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}render(){return w`
      ${X(!this.hideLabel,()=>w`
          <gds-form-control-header class="size-${this.size}">
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${X(this.supportingText.length>0,()=>w`<span slot="supporting-text" id="supporting-text">
                  ${this.supportingText}
                </span>`)}
            <slot
              id="extended-supporting-text"
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
            <!-- @deprecated: use 'supporting-text' slot instead. Remove in 2.0 release. -->
            <slot id="sub-label" name="sub-label" slot="supporting-text"></slot>
          </gds-form-control-header>
        `)}
      <gds-popover
        .autofocus=${!this.combobox}
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${l(this,Wr)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[Ho(8),jl()]:z.DefaultMiddleware}
        @gds-ui-state=${l(this,Pr)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${this.combobox&&!this.multiple?l(this,zr).call(this):l(this,Vr).call(this)}
          <gds-icon-chevron-bottom
            slot="trail"
            label=${T("Expand")}
          ></gds-icon-chevron-bottom>
        </gds-field-base>

        ${X(this.searchable,()=>w`<input
              id="searchinput"
              type="text"
              aria-label="${T("Filter available options")}"
              placeholder="${T("Search")}"
              @keydown=${l(this,Rr)}
              @input=${l(this,An)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${we(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${y(this,Nr,wd)}"
          @gds-focus="${l(this,Hr)}"
          @keydown=${l(this,Fr)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${X(!this.hideLabel,()=>w`
          <gds-form-control-footer class="size-${this.size}">
            ${X(this.invalid,()=>w`
                <slot id="message" name="message" slot="message">
                  <gds-icon-triangle-exclamation
                    solid
                  ></gds-icon-triangle-exclamation>
                  ${this.errorMessage||this.validationMessage}
                </slot>
              `)}
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),B(this,Tt,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.combobox&&!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?y(this,Ir,kd).call(this):(y(this,Br,$d).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t==null||t.scrollIntoView({block:"center"})})}};Tt=new WeakMap;zr=new WeakMap;Vr=new WeakMap;Wr=new WeakMap;ft=new WeakMap;Pr=new WeakMap;An=new WeakMap;Rr=new WeakMap;Fr=new WeakMap;Hr=new WeakMap;Nr=new WeakSet;wd=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,l(this,ft).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0))),l(this,ai).call(this),l(this,li).call(this)})};ai=new WeakMap;li=new WeakMap;Ir=new WeakSet;kd=function(){this.addEventListener("blur",l(this,ks)),this.addEventListener("gds-blur",l(this,ks)),this.addEventListener("keydown",l(this,_i))};Br=new WeakSet;$d=function(){this.removeEventListener("blur",l(this,ks)),this.removeEventListener("gds-blur",l(this,ks)),this.removeEventListener("keydown",l(this,_i))};ks=new WeakMap;_i=new WeakMap;Z.styles=[K,Ep];o([g({attribute:"supporting-text"})],Z.prototype,"supportingText",2);o([g({type:Boolean,reflect:!0})],Z.prototype,"open",2);o([g({type:Boolean,reflect:!0})],Z.prototype,"searchable",2);o([g({type:Boolean,reflect:!0})],Z.prototype,"multiple",2);o([g({type:Boolean,reflect:!0})],Z.prototype,"combobox",2);o([g()],Z.prototype,"compareWith",2);o([g()],Z.prototype,"searchFilter",2);o([g({type:Boolean,attribute:"sync-popover-width"})],Z.prototype,"syncPopoverWidth",2);o([g({type:Number,attribute:"max-height"})],Z.prototype,"maxHeight",2);o([g()],Z.prototype,"size",2);o([g({type:Boolean,attribute:"hide-label"})],Z.prototype,"hideLabel",2);o([g()],Z.prototype,"disableMobileStyles",2);o([ae("#trigger")],Z.prototype,"_elTriggerBtn",2);o([Xt("#listbox")],Z.prototype,"_elListbox",2);o([ae("#searchinput")],Z.prototype,"_elSearchInput",2);o([Ul({attributes:!0,childList:!0,subtree:!0,characterData:!0})],Z.prototype,"_handleLightDOMChange",1);o([Q("value")],Z.prototype,"_handleValueChange",1);o([Q("open")],Z.prototype,"_handleOpenChange",1);Z=o([A("gds-dropdown",{dependsOn:[_t,Bt,ue,Jt,z,qt,ws]}),Ze()],Z);const sa={fromAttribute(e){return new Date(e)},toAttribute(e){return e.toISOString()}},Mp={fromAttribute(e){return e.split(",").map(t=>new Date(t.trim()))},toAttribute(e){return JSON.stringify(e.map(t=>t.toISOString()))}},Ap=H`
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
        transition: background 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-space-3xs);

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          background: var(--gds-color-l2-background-tertiary);
          cursor: pointer;
          color: var(--gds-color-l2-content-tertiary);
        }

        &.today {
          border-color: var(--gds-color-l2-background-tertiary);
        }

        &.disabled {
          color: var(--gds-color-l3-content-disabled);
          cursor: not-allowed;
        }

        &:active:not(.disabled) {
          scale: 0.96;
        }

        &:focus-visible {
          outline-color: var(--gds-color-l2-content-primary);
          outline-width: var(--gds-space-3xs);
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
`;var Tp=Ap;function Lp(e,t){const s=bp(e),n=pp(e),i=fp({start:s,end:n},{weekStartsOn:1});for(;i.length<6;)i.push(zt(i[i.length-1],7));return ce`${t(i.map(r=>({days:gp({start:r,end:zt(r,6)})})))}`}var di,na,jr,Cd;let q=class extends I{constructor(){super(...arguments),h(this,di),h(this,jr),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=e=>e.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=xp(new Date(this.focusedYear,e,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),s.setMonth(e),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),pe.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",y(this,jr,Cd)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date;return ce`<table role="grid" aria-label="${we(this.label)}">
      ${X(!this.hideDayNames,()=>ce`<thead role="rowgroup">
            <tr role="row">
              ${X(this.showWeekNumbers,()=>ce`<th></th>`)}
              <th>${T("Mon")}</th>
              <th>${T("Tue")}</th>
              <th>${T("Wed")}</th>
              <th>${T("Thu")}</th>
              <th>${T("Fri")}</th>
              <th>${T("Sat")}</th>
              <th>${T("Sun")}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${Lp(this.focusedDate,t=>ce`
            ${t.map(s=>ce`
                <tr role="row">
                  ${X(this.showWeekNumbers,()=>ce`<td class="week-number" scope="row">
                        ${yp(s.days[0])}
                      </td>`)}
                  ${s.days.map(n=>{const i=this.customizedDates&&this.customizedDates.find(f=>pt(f.date,n)),r={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(f=>pt(f,n))),...i},a=!_p(this.focusedDate,n),c=(n<this.min||n>this.max)&&!pt(n,this.min)&&!pt(n,this.max),d=n.getDay()===0||n.getDay()===6,u=r.disabled||a||c||this.disabledWeekends&&d;return this.hideExtraneousDays&&a?ce`<td inert></td>`:ce`
                          <td
                            role="${we(u?void 0:"gridcell")}"
                            class="${lt({"custom-date":!!i,disabled:!!u,today:pt(e,n)})}"
                            ?disabled=${u}
                            tabindex="${pt(this.focusedDate,n)?0:-1}"
                            aria-selected="${this.value&&pt(this.value,n)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(n)}"
                            @click=${()=>u?null:y(this,di,na).call(this,n)}
                            id="dateCell-${n.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${r?r==null?void 0:r.color:""}"
                              >${n.getDate()}</span
                            >

                            ${X(r.indicator,()=>ce`<span
                                  class="indicator-${r==null?void 0:r.indicator}"
                                  style="--_color: ${r==null?void 0:r.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};di=new WeakSet;na=function(e){const t=wp(e,12);this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:t,bubbles:!1,composed:!1}))};jr=new WeakSet;Cd=function(e){var n;let t=!1,s=new Date(this.focusedDate);e.key==="ArrowLeft"?(s=zt(this.focusedDate,-1),t=!0):e.key==="ArrowRight"?(s=zt(this.focusedDate,1),t=!0):e.key==="ArrowUp"?(s=zt(this.focusedDate,-7),t=!0):e.key==="ArrowDown"?(s=zt(this.focusedDate,7),t=!0):e.key==="Enter"||e.key===" "?((n=this._elFocusedCell)!=null&&n.hasAttribute("disabled")||y(this,di,na).call(this,this.focusedDate),t=!0):e.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),t=!0):e.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):e.key==="PageUp"?(s=kp(this.focusedDate,1),t=!0):e.key==="PageDown"&&(s=xd(this.focusedDate,1),t=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1,cancelable:!0}))&&(this.focusedDate=s),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var i;(i=this._elFocusedCell)==null||i.focus()}))};q.styles=[K,Tp];q.shadowRootOptions={mode:"open",delegatesFocus:!0};o([g()],q.prototype,"value",2);o([g({type:Date})],q.prototype,"min",2);o([g({type:Date})],q.prototype,"max",2);o([g()],q.prototype,"focusedDate",2);o([g({type:Boolean,attribute:"disabled-weekends"})],q.prototype,"disabledWeekends",2);o([g({type:Array,attribute:"disabled-dates"})],q.prototype,"disabledDates",2);o([g({type:Number})],q.prototype,"focusedMonth",1);o([g({type:Number})],q.prototype,"focusedYear",1);o([g({type:Boolean})],q.prototype,"showWeekNumbers",2);o([g({type:Boolean})],q.prototype,"hideExtraneousDays",2);o([g({type:Boolean})],q.prototype,"hideDayNames",2);o([g({attribute:!1})],q.prototype,"customizedDates",2);o([g()],q.prototype,"label",2);o([g({attribute:!1})],q.prototype,"dateLabelTemplate",2);o([U()],q.prototype,"_currentLocale",2);o([ae('td[tabindex="0"]')],q.prototype,"_elFocusedCell",2);o([Q("value")],q.prototype,"_valueChanged",1);q=o([A("gds-calendar"),Ze()],q);let $s=class extends Y{};$s._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';$s._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>';$s._name="calendar";$s=o([A("gds-icon-calendar")],$s);let Cs=class extends Y{};Cs._regularSVG='<path d="M7.75 4.75H3.75V9.25M7.75 4.75H16.25M7.75 4.75V2.75M16.25 4.75H20.25V9.25M16.25 4.75V2.75M11.25 20.25H3.75V9.25M3.75 9.25H20.25M20.25 9.25V11.25M17.75 14.75V18M17.75 18V21.25M17.75 18H14.5M17.75 18H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Cs._solidSVG='<path d="M8.5 2.75C8.5 2.33579 8.16421 2 7.75 2C7.33579 2 7 2.33579 7 2.75V4H3.75C3.33579 4 3 4.33579 3 4.75V20.25C3 20.6642 3.33579 21 3.75 21H11.25C11.6642 21 12 20.6642 12 20.25C12 19.8358 11.6642 19.5 11.25 19.5H4.5V10H19.5V11.25C19.5 11.6642 19.8358 12 20.25 12C20.6642 12 21 11.6642 21 11.25V4.75C21 4.33579 20.6642 4 20.25 4H17V2.75C17 2.33579 16.6642 2 16.25 2C15.8358 2 15.5 2.33579 15.5 2.75V4H8.5V2.75Z" fill="currentColor"/><path d="M18.5 14.75C18.5 14.3358 18.1642 14 17.75 14C17.3358 14 17 14.3358 17 14.75V17.25H14.5C14.0858 17.25 13.75 17.5858 13.75 18C13.75 18.4142 14.0858 18.75 14.5 18.75H17V21.25C17 21.6642 17.3358 22 17.75 22C18.1642 22 18.5 21.6642 18.5 21.25V18.75H21C21.4142 18.75 21.75 18.4142 21.75 18C21.75 17.5858 21.4142 17.25 21 17.25H18.5V14.75Z" fill="currentColor"/>';Cs._name="calender-add";Cs=o([A("gds-icon-calender-add")],Cs);var nt,Tn,Ln,On,Dn,Gr,Ur,Yr,Zr,Sd,ss,Ns,zn,qr,ns,Is,Bs,Vn;let Ve=class extends I{constructor(){super(...arguments),h(this,Zr),h(this,ss),h(this,zn),h(this,ns),h(this,Bs),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=y(this,zn,qr).call(this,this.value,this.length),h(this,nt,""),h(this,Tn,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=y(this,ns,Is).call(this,e+1),y(this,ss,Ns).call(this)}),h(this,Ln,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=y(this,ns,Is).call(this,e-1),y(this,ss,Ns).call(this)}),h(this,On,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),h(this,Dn,()=>{y(this,Bs,Vn).call(this)}),h(this,Gr,()=>{l(this,nt)!==""&&(y(this,Bs,Vn).call(this),this.value=y(this,ns,Is).call(this,parseInt(this.value.toString())),y(this,ss,Ns).call(this))}),h(this,Ur,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?l(this,Ln).call(this):l(this,Tn).call(this)}),h(this,Yr,e=>{let t=!1;if(e.key==="ArrowUp")l(this,Tn).call(this),t=!0;else if(e.key==="ArrowDown")l(this,Ln).call(this),t=!0;else{const s=parseInt(e.key);isNaN(s)||(l(this,nt).length<this.length&&(B(this,nt,l(this,nt)+s.toString()),this.value=parseInt(l(this,nt))),l(this,nt).length===this.length&&(this.value=y(this,ns,Is).call(this,this.value),y(this,Bs,Vn).call(this),y(this,Zr,Sd).call(this),y(this,ss,Ns).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",l(this,Ur)),this.addEventListener("keydown",l(this,Yr)),this.addEventListener("blur",l(this,Gr)),this.addEventListener("focus",l(this,Dn)),this.addEventListener("click",l(this,On)),this.addEventListener("mousedown",l(this,On))}focus(e){super.focus(e),l(this,Dn).call(this)}render(){return w`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=y(this,zn,qr).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};nt=new WeakMap;Tn=new WeakMap;Ln=new WeakMap;On=new WeakMap;Dn=new WeakMap;Gr=new WeakMap;Ur=new WeakMap;Yr=new WeakMap;Zr=new WeakSet;Sd=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof Ve){e.focus();break}e=e.nextElementSibling}};ss=new WeakSet;Ns=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};zn=new WeakSet;qr=function(e,t){return String(e).padStart(t,"0")};ns=new WeakSet;Is=function(e){return Math.max(this.min,Math.min(this.max,e))};Bs=new WeakSet;Vn=function(){B(this,nt,"")};Ve.formAssociated=!0;o([g({type:Number})],Ve.prototype,"value",2);o([g({type:Number})],Ve.prototype,"length",2);o([g({type:Number,attribute:"aria-valuemin"})],Ve.prototype,"min",2);o([g({type:Number,attribute:"aria-valuemax"})],Ve.prototype,"max",2);o([U()],Ve.prototype,"displayValue",2);o([Q("value")],Ve.prototype,"_refreshDisplayValue",1);Ve=o([A("gds-date-part-spinner")],Ve);const Op=H`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      contain: layout;
      isolation: isolate;
      gap: var(--gds-space-xs);
      font-family: inherit;
      min-width: 200px;
    }

    ::part(_button) {
      outline-offset: -1px;
    }

    .spinners {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      inline-size: 11ch;
      gap: var(--gds-space-4xs);
      font-size: var(--gds-text-size-detail-s);
      font-weight: var(--gds-text-weight-regular);
    }

    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      /* border-radius: var(--gds-space-2xs); */
      outline: none;
      padding-block: var(--gds-space-3xs);
      text-transform: uppercase;
      line-height: 1;
      text-align: center;

      &:focus {
        background-color: var(--gds-color-l3-background-primary);
        color: var(--gds-color-l3-content-primary);
      }
    }
  }
`;var js,Jr,Ed,nn,ci,Xr,Md,Kr,Ad,Wn,Qr,Lt,is,rs,Gs,Td,eo,to,so,no,io,ro,oo,ao,lo,hi,co,ho,Pn,uo,po,st,go,Ld,ia,Od;let j=class extends ge{constructor(){super(),h(this,Jr),h(this,nn),h(this,Xr),h(this,Kr),h(this,Wn),h(this,Lt),h(this,rs),h(this,Pn),h(this,go),h(this,ia),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.showWeekNumbers=!1,this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=y(this,Pn,uo).call(this,"y-m-d"),h(this,js,void 0),h(this,Td,e=>{this._elTrigger.then(t=>{var n,i;((n=e.relatedTarget)==null?void 0:n.parentElement)!==e.target&&((i=document.getSelection())==null||i.removeAllRanges())})}),h(this,eo,e=>{this._elTrigger.then(t=>{var n,i;(n=document.getSelection())==null||n.removeAllRanges();const s=new Range;s.setStart(t.firstChild,0),s.setEnd(t.lastChild,4),(i=document.getSelection())==null||i.addRange(s)})}),h(this,to,e=>{this._elFieldAsync.then(t=>{var s;e.currentTarget===t&&(e.preventDefault(),(s=e.clipboardData)==null||s.setData("text/plain",this.displayValue))})}),h(this,so,e=>{this._elFieldAsync.then(t=>{var a;if(e.currentTarget!==t)return;e.preventDefault();const s=(a=e.clipboardData)==null?void 0:a.getData("text/plain");if(!s)return;let n=new Date("-");const i="Invalid Date",r=s.split(this._dateFormatLayout.delimiter);if(r.length===3){const c=this._dateFormatLayout.layout,d=parseInt(r[c.findIndex(f=>f.token==="y")]),u=parseInt(r[c.findIndex(f=>f.token==="m")])-1,b=parseInt(r[c.findIndex(f=>f.token==="d")]);!isNaN(d)&&!isNaN(u)&&!isNaN(b)&&(n=new Date(`${d}-${u+1}-${b}`))}n.toString()===i&&(n=new Date(s),n.toString()===i)||(this.value=n,y(this,Lt,is).call(this))})}),h(this,no,e=>{var t;(t=this._elSpinners[0])==null||t.focus()}),h(this,io,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,y(this,Lt,is).call(this),y(this,rs,Gs).call(this)}),h(this,ro,e=>{var t;e.stopPropagation(),this._focusedMonth=(t=e.target)==null?void 0:t.value}),h(this,oo,e=>{var t;e.stopPropagation(),this._focusedYear=(t=e.target)==null?void 0:t.value}),h(this,ao,e=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),h(this,lo,e=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),h(this,hi,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),y(this,rs,Gs).call(this)}),h(this,co,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;!pt(t||new Date(0),l(this,js)||new Date(0))&&(this.value=t,y(this,Lt,is).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=l(this,js),y(this,rs,Gs).call(this))}}),h(this,ho,e=>{const t=Array.from(this._elSpinners).findIndex(s=>s===e.target);if(e.key==="ArrowRight"){const s=this._elSpinners[t+1];s&&s.focus()}if(e.key==="ArrowLeft"){const s=this._elSpinners[t-1];s&&s.focus()}}),h(this,po,(e,t)=>{l(this,st)[t]=e;const s=new Date;s.setFullYear(parseInt(l(this,st).year)),s.setMonth(parseInt(l(this,st).month)-1),s.setDate(parseInt(l(this,st).day)),s.setHours(12,0,0,0),s.toString()!=="Invalid Date"&&(this.value=s,y(this,Lt,is).call(this),y(this,rs,Gs).call(this))}),h(this,st,{year:"yyyy",month:"mm",day:"dd"}),Ve.define()}get type(){return"gds-datepicker"}get value(){return this._internalValue}set value(e){this._internalValue=e}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=y(this,Pn,uo).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),pe.instance.apply(this,"gds-datepicker")}render(){return w`
      <gds-form-control-header class="size-${this.size}">
        <label id="label" for="spinner-0" slot="label">${this.label}</label>
        ${X(this.supportingText.length>0,()=>w`<span slot="supporting-text" id="supporting-text">
              ${this.supportingText}
            </span>`)}
        <slot
          id="supporting-text-slot"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
        <!-- @deprecated: use 'supporting-text' slot instead. Remove in 2.0 release. -->
        <slot
          id="sub-label-slot"
          name="sub-label"
          slot="supporting-text"
        ></slot>
      </gds-form-control-header>
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${l(this,no)}
        @copy=${l(this,to)}
        @paste=${l(this,so)}
        id="field"
      >
        <div class="spinners">
          ${ip(Kl(this._dateFormatLayout.layout,(e,t)=>w`<gds-date-part-spinner
                  id="spinner-${t}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${l(this,st)[e.name]}
                  aria-valuemin=${y(this,Kr,Ad).call(this,e.name)}
                  aria-valuemax=${y(this,Wn,Qr).call(this,e.name)}
                  aria-label=${y(this,Xr,Md).call(this,e.name)}
                  aria-describedby="label supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${y(this,Wn,Qr).call(this,e.name).toString().length}
                  @keydown=${l(this,ho)}
                  @change=${s=>l(this,po).call(this,s.detail.value,e.name)}
                  @focus=${l(this,eo)}
                  @touchend=${s=>{this.open=!0,s.preventDefault()}}
                ></gds-date-part-spinner>`),w`<span class="separator"
              >${this._dateFormatLayout.delimiter}</span
            >`)}
        </div>
        <gds-button
          id="calendar-button"
          slot="action"
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant=${this.invalid?"negative":""}
          aria-label="${T("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          ${X(this.size==="small",()=>w`<gds-icon-calender-add
                height="16"
                stroke="2"
              ></gds-icon-calender-add>`,()=>w`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      <gds-form-control-footer class="size-${this.size}">
        ${X(this.invalid,()=>w`
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage||this.validationMessage}
            </slot>
          `)}
      </gds-form-control-footer>

      <gds-popover
        autofocus
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elFieldAsync}
        .open=${this.open}
        @gds-ui-state=${l(this,co)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{var s;((s=e.target)==null?void 0:s.id)==="calendar-popover"&&this._elCalendar.then(n=>n.focus())}}
      >
        <gds-div overflow="auto">
          <gds-flex
            align-items="center"
            justify-content="space-between"
            gap="s"
            padding="m m 0 m"
          >
            <gds-button
              @click=${l(this,lo)}
              aria-label=${T("Previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${l(this,ro)}
              .maxHeight=${300}
              label="${T("Month")}"
              size="small"
              class="month"
              hide-label
            >
              <gds-option value="0">${T("January")}</gds-option>
              <gds-option value="1">${T("February")}</gds-option>
              <gds-option value="2">${T("March")}</gds-option>
              <gds-option value="3">${T("April")}</gds-option>
              <gds-option value="4">${T("May")}</gds-option>
              <gds-option value="5">${T("June")}</gds-option>
              <gds-option value="6">${T("July")}</gds-option>
              <gds-option value="7">${T("August")}</gds-option>
              <gds-option value="8">${T("September")}</gds-option>
              <gds-option value="9">${T("October")}</gds-option>
              <gds-option value="10">${T("November")}</gds-option>
              <gds-option value="11">${T("December")}</gds-option>
            </gds-dropdown>
            <gds-dropdown
              .value=${this._focusedYear.toString()}
              @change=${l(this,oo)}
              .maxHeight=${300}
              label="${T("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${rp(l(this,go,Ld),e=>e,e=>w`<gds-option value=${e}>${e}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${l(this,ao)}
              aria-label=${T("Next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${l(this,io)}
            @gds-date-focused=${l(this,hi)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          <gds-flex
            align-items="center"
            justify-content="space-between"
            padding="0 m m m"
          >
            <gds-button
              rank="tertiary"
              size="small"
              @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,y(this,Lt,is).call(this)}}
            >
              ${T("Clear")}
            </gds-button>
            ${dp(y(this,Jr,Ed).call(this),F)}
            <gds-button
              rank="tertiary"
              size="small"
              @click=${e=>{e.stopPropagation(),y(this,nn,ci).call(this,new Date)}}
            >
              ${T("Today")}
            </gds-button>
          </gds-flex>
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){B(this,st,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");B(this,st,{year:t,month:s,day:n})}_handleOpenChange(){this.open&&(B(this,js,this.value),this._elCalendar.then(e=>e.focus()))}};js=new WeakMap;Jr=new WeakSet;Ed=async function(){const e=await this.getFocusedDate();let t="",s;return e&&e>this.max?(t=T("Last available date"),s=n=>{n.stopPropagation(),y(this,nn,ci).call(this,this.max)}):e&&e<this.min&&(t=T("First available date"),s=n=>{n.stopPropagation(),y(this,nn,ci).call(this,this.min)}),w`${X(t.length>0,()=>w`<gds-button rank="tertiary" size="small" @click=${s}>
          ${t}
        </gds-button>`,()=>F)}`};nn=new WeakSet;ci=function(e){const t=new Date(e);this._elCalendar.then(s=>s.focusedDate=t).then(l(this,hi))};Xr=new WeakSet;Md=function(e){return{year:T("Year"),month:T("Month"),day:T("Day")}[e]};Kr=new WeakSet;Ad=function(e){return{year:1900,month:1,day:1}[e]};Wn=new WeakSet;Qr=function(e){return{year:9999,month:12,day:31}[e]};Lt=new WeakSet;is=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))};rs=new WeakSet;Gs=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))};Td=new WeakMap;eo=new WeakMap;to=new WeakMap;so=new WeakMap;no=new WeakMap;io=new WeakMap;ro=new WeakMap;oo=new WeakMap;ao=new WeakMap;lo=new WeakMap;hi=new WeakMap;co=new WeakMap;ho=new WeakMap;Pn=new WeakSet;uo=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),n=s.findIndex(d=>d==="y"),i=s.findIndex(d=>d==="m"),r=s.findIndex(d=>d==="d");if(n===-1||i===-1||r===-1)throw new Error("Invalid date format for <gds-datepicker>");const c=[n,i,r].sort((d,u)=>d-u).map(d=>s[d]).map(d=>({token:d,name:d==="y"?"year":d==="m"?"month":"day"}));return{delimiter:t,layout:c}};po=new WeakMap;st=new WeakMap;go=new WeakSet;Ld=function(){var i;const e=this.min.getFullYear(),t=this.max.getFullYear(),s=l(this,ia,Od),n=(i=this.value)==null?void 0:i.getFullYear();return{*[Symbol.iterator](){s&&(yield n);for(let r=e;r<=t;r++)yield r}}};ia=new WeakSet;Od=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};j.styles=[K,Op];o([g({converter:sa})],j.prototype,"value",1);o([g({converter:sa})],j.prototype,"min",2);o([g({converter:sa})],j.prototype,"max",2);o([g({type:Boolean})],j.prototype,"open",2);o([g({attribute:"supporting-text"})],j.prototype,"supportingText",2);o([g({type:String})],j.prototype,"size",2);o([g({type:Boolean,attribute:"show-week-numbers"})],j.prototype,"showWeekNumbers",2);o([g({type:Boolean,attribute:"hide-label"})],j.prototype,"hideLabel",2);o([g()],j.prototype,"dateformat",1);o([g({type:Boolean,attribute:"disabled-weekends"})],j.prototype,"disabledWeekends",2);o([g({converter:Mp,attribute:"disabled-dates"})],j.prototype,"disabledDates",2);o([Xt("#calendar-button")],j.prototype,"test_calendarButton",2);o([U()],j.prototype,"_focusedMonth",2);o([U()],j.prototype,"_focusedYear",2);o([U()],j.prototype,"_dateFormatLayout",2);o([Xt("#calendar")],j.prototype,"_elCalendar",2);o([Xt("#calendar-button")],j.prototype,"_elTrigger",2);o([Xt("#field")],j.prototype,"_elFieldAsync",2);o([fc("[role=spinbutton]")],j.prototype,"_elSpinners",2);o([ae("#field")],j.prototype,"_elField",2);o([Q("value")],j.prototype,"_handleValueChange",1);o([Q("open")],j.prototype,"_handleOpenChange",1);j=o([Ze()],j);let fo=class extends Ue(at(Ye(j))){};fo=o([A("gds-datepicker",{dependsOn:[yt,jt,Z,q,z,$s,Cs,Ut,Yt]})],fo);fo.define();Z.define();Ge.define();let ui=class extends I{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.formObserver)==null||e.disconnect()}render(){var s;const t=Array.from(((s=this.form)==null?void 0:s.elements)||[]).filter(n=>n.invalid);return X(t.length>0,()=>w`<gds-card
          level="2"
          border="4xs"
          border-color="negative"
          border-radius="xs"
          padding="l"
          background="negative"
          color="negative"
        >
          <gds-flex gap="s">
            <gds-text font-size="heading-xs" font-weight="book">
              ${T(ie`There are ${t.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${t.map(n=>w`<li>
                    <a
                      href=""
                      @click=${i=>{i.preventDefault(),n.focus()}}
                      >${n.label}</a
                    >
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};ui.styles=H`
    ul {
      list-style-type: none;
      margin: 1rem 0 0;
      padding: 0;
    }
    li {
      margin: 0.5rem 0;
    }
    a {
      color: inherit;
    }
  `;ui=o([A("gds-form-summary",{dependsOn:[xt,yt,Te]})],ui);ui.define();const Dp=H`
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
`;var zp=Dp,rn,pi,wi,os,Us,bo,Dd,ra,zd,oa,Vd,aa,Wd,la,Pd,da,Rd,Rn,mo;let We=class extends I{constructor(){super(...arguments),h(this,os),h(this,bo),h(this,ra),h(this,oa),h(this,aa),h(this,la),h(this,da),h(this,Rn),this.placement="bottom",this.overlappedBy=[],this.target=[],this.label="Coachmark",this.computeVisibility=(e,t,s)=>s,this.targetElement=void 0,this._isVisible=!1,this._preventClose=!1,h(this,rn,Jn()),h(this,pi,Jn()),h(this,wi,void 0)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",()=>{setTimeout(()=>{y(this,Rn,mo).call(this),y(this,os,Us).call(this)},400)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this._isVisible&&y(this,os,Us).call(this)})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",y(this,os,Us)),document.removeEventListener("keydown",e=>{e.key==="Escape"&&this._isVisible&&y(this,os,Us).call(this)})}firstUpdated(){this.target.length>0&&(this.targetElement=y(this,bo,Dd).call(this,this.target),y(this,Rn,mo).call(this))}setPreventClose(e){this._preventClose=e}render(){return w`${X(this.target.length>0,()=>w`
        <div
          role="dialog"
          id="body"
          aria-label=${this.label}
          ${Xn(l(this,rn))}
        >
          <slot></slot>
          <div id="arrow" ${Xn(l(this,pi))}></div>
        </div>
      `,()=>w``)}`}};rn=new WeakMap;pi=new WeakMap;wi=new WeakMap;os=new WeakSet;Us=function(){var t;var e;this._isVisible&&(this._isVisible=!1,(t=l(this,rn).value)==null||t.remove(),(e=l(this,wi))==null||e.call(this),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this._isVisible,reason:"closed"},bubbles:!1,composed:!1})))};bo=new WeakSet;Dd=function(e){let t=!1,s;for(const n of e){if(n==="shadowRoot"){t=!0;continue}s?t&&s.shadowRoot?(s=s.shadowRoot.querySelector(n),t=!1):s=s.querySelector(n):s=document.querySelector(n)}return s};ra=new WeakSet;zd=function(e,t){if(e==t)return;const s=e.getBoundingClientRect(),n=t.getBoundingClientRect();return s.top<n.bottom&&s.bottom>n.top&&s.left<n.right&&s.right>n.left};oa=new WeakSet;Vd=function(e){if(!e)return!1;for(const t of e){const s=document.querySelector(t);if(!(!s||getComputedStyle(s).visibility==="hidden")&&y(this,ra,zd).call(this,this.targetElement,s))return!0}return!1};aa=new WeakSet;Wd=function(e){const t=e.getBoundingClientRect(),s=window.innerHeight||document.documentElement.clientHeight,n=window.innerWidth||document.documentElement.clientWidth;return t.top+t.height<0||t.top>s||t.left+t.width<0||t.left>n};la=new WeakSet;Pd=async function(e,t,s){return Gl(e,t,{placement:this.placement,middleware:[Ho(()=>({mainAxis:16,alignmentAxis:16})),{name:"detectOverflow",async fn(n){return{data:await Xh(n,{boundary:document.body,rootBoundary:"document",altBoundary:!0,padding:{top:167,left:20}})}}},Bl({padding:16}),jl(),Kh(),Qh({padding:16,element:s})]})};da=new WeakSet;Rd=function(){if(!this.targetElement)return!1;const e=y(this,aa,Wd).call(this,this.targetElement),t=this.targetElement.checkVisibility(),s=this.overlappedBy.length===0?!1:y(this,oa,Vd).call(this,this.overlappedBy);return this.computeVisibility(this,this.targetElement,!s&&!e&&t)};Rn=new WeakSet;mo=async function(){const e=this.targetElement,t=l(this,rn).value,s=l(this,pi).value;if(!(!e||!t||!s))try{B(this,wi,Il(e,t,()=>{y(this,la,Pd).call(this,e,t,s).then(({x:n,y:i,middlewareData:r,placement:a})=>{if(y(this,da,Rd).call(this)){if(this._isVisible=!0,Object.assign(t.style,{visibility:"visible",opacity:1,left:`${n}px`,top:`${i}px`}),r.arrow){const{x:c,y:d}=r.arrow;s.removeAttribute("class"),s.classList.add("arrow-"+a),Object.assign(s.style,{left:c!=null?`${c}px`:"",top:d!=null?`${d}px`:""})}}else this._isVisible=!1,Object.assign(t.style,{visibility:"hidden",opacity:0})})}))}catch{console.warn("failed to render tooltips")}};We.styles=zp;o([g()],We.prototype,"placement",2);o([g({attribute:!1})],We.prototype,"overlappedBy",2);o([g({attribute:!1})],We.prototype,"target",2);o([g()],We.prototype,"label",2);o([g({attribute:!1})],We.prototype,"computeVisibility",2);o([U()],We.prototype,"_isVisible",2);o([U()],We.prototype,"_preventClose",2);We=o([A("gds-coachmark")],We);We.define();jt.define();const Vp=H`
  :host {
    display: flex;
    z-index: 1050;
    position: fixed;
    inset: auto var(--gds-space-3xl) var(--gds-space-3xl) auto;
  }
  .button {
    box-shadow: var(--gds-shadow-m);
    block-size: calc(var(--_block-size) + var(--gds-space-xs));
    width: max-content;
  }
`;var Wp=Vp;let vo=class extends dn(jt){connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",Wp)}};vo=o([A("gds-fab")],vo);vo.define();var Pp=Object.defineProperty,Rp=Object.getOwnPropertyDescriptor,Fp=(e,t,s,n)=>{for(var i=n>1?void 0:n?Rp(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(n?a(t,s,i):a(i))||i);return n&&i&&Pp(t,s,i),i};let Xa=class extends ke{createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return w`<gds-card border="4xs/base300" padding="m" border-radius="s">
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
          .validator=${{validate:e=>{if(e.value==="cat")return[{...e.validity,valid:!1,customError:!0},"Only cats are allowed!"]}}}
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
    </gds-card>`}};Xa=Fp([Es("form-validation")],Xa);var Hp=Object.defineProperty,Np=Object.getOwnPropertyDescriptor,ca=(e,t,s,n)=>{for(var i=n>1?void 0:n?Np(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(n?a(t,s,i):a(i))||i);return n&&i&&Hp(t,s,i),i};let gi=class extends ke{constructor(){super(...arguments),this.disabledWeekends=!1,this.showWeekNumbers=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return w` <div style="width:320px; margin: 8rem auto;">
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
            @change=${t=>this.disabledWeekends=t.target.checked} /><span>Disable weekends</span><i></i
        ></label>
        <label class="form-control"
          ><input
            type="checkbox"
            .checked=${this.showWeekNumbers}
            @change=${t=>{var s;return this.showWeekNumbers=(s=t.target)==null?void 0:s.checked}} /><span>Show week numbers</span><i></i
        ></label>
      </fieldset>
    </div>`}};ca([U()],gi.prototype,"disabledWeekends",2);ca([U()],gi.prototype,"showWeekNumbers",2);gi=ca([Es("datepicker-example")],gi);q.define();var Ip=Object.defineProperty,Bp=Object.getOwnPropertyDescriptor,Fd=e=>{throw TypeError(e)},ki=(e,t,s,n)=>{for(var i=n>1?void 0:n?Bp(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(n?a(t,s,i):a(i))||i);return n&&i&&Ip(t,s,i),i},jp=(e,t,s)=>t.has(e)||Fd("Cannot "+s),Gp=(e,t,s)=>(jp(e,t,"read from private field"),s?s.call(e):t.get(e)),Up=(e,t,s)=>t.has(e)?Fd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),yo;const vn=`${new Date().getFullYear()}-${new Date().getMonth()+1}`;let on=class extends ke{constructor(){super(...arguments),this.disabledWeekends=!1,this.showWeekNumbers=!1,this.showCustomizedDates=!1,Up(this,yo,[{date:new Date(`${vn}-07`),indicator:"dot",color:"var(--intent-danger-background)"},{date:new Date(`${vn}-12`),indicator:"dot",color:"var(--intent-danger-background)"},{date:new Date(`${vn}-24`),indicator:"dot",color:"var(--intent-danger-background)"},{date:new Date(`${vn}-21`),indicator:"dot",disabled:!0}])}createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return w` <div style="width:320px; margin: 8rem auto;">
      <h3 style="margin-bottom: 2rem;">Standalone calendar</h3>
      <div class="card" style="padding: 0">
        <gds-calendar
          .disabledWeekends=${this.disabledWeekends}
          .showWeekNumbers=${this.showWeekNumbers}
          .customizedDates=${this.showCustomizedDates?Gp(this,yo):[]}
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
    </div>`}};yo=new WeakMap;ki([U()],on.prototype,"disabledWeekends",2);ki([U()],on.prototype,"showWeekNumbers",2);ki([U()],on.prototype,"showCustomizedDates",2);on=ki([Es("calendar-example")],on);var Yp=Object.defineProperty,Zp=Object.getOwnPropertyDescriptor,qp=(e,t,s,n)=>{for(var i=n>1?void 0:n?Zp(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(n?a(t,s,i):a(i))||i);return n&&i&&Yp(t,s,i),i};let Ka=class extends ke{createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return w`<gds-flex
      flex-direction="column"
      gap="s"
      align-items="center"
      justify-content="center"
      min-height="50vh"
    >
      <h3>Spinner</h3>
      <gds-spinner></gds-spinner>
    </gds-flex> `}};Ka=qp([Es("spinner-example")],Ka);var Jp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,Kp=(e,t,s,n)=>{for(var i=n>1?void 0:n?Xp(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(n?a(t,s,i):a(i))||i);return n&&i&&Jp(t,s,i),i};const Qp="https://github.com/user-attachments/assets/1c038c0b-b468-48d2-b171-092534b3a0e2";let Qa=class extends ke{createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return w`
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
                src=${Qp}
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
                <gds-div>
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
                </gds-div>
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
                      .validator=${{validate:e=>e.value===""?[{...e.validity,valid:!1,customError:!0},"Du måste fylla i ditt personnummer."]:e.value.length!==12||isNaN(e.value)?[{...e.validity,valid:!1,customError:!0},"Personnumret måste vara 12 siffror."]:void 0}}
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
                      .validator=${{validate:e=>e.value===""?[{...e.validity,valid:!1,customError:!0},"Du måste fylla i en kod."]:e.value.length!==6||isNaN(e.value)?[{...e.validity,valid:!1,customError:!0},"Koden måste vara 6 siffror."]:void 0}}
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
    `}};Qa=Kp([Es("gds-login")],Qa);var eg=Object.defineProperty,Hd=(e,t,s,n)=>{for(var i=void 0,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=a(t,s,i)||i);return i&&eg(t,s,i),i};const ha=class ha extends ke{constructor(){super(...arguments),this.popoverOpen=!1,this.currentView="login"}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.addEventListener("view-change",this.handleViewChange)}disconnectedCallback(){this.removeEventListener("view-change",this.handleViewChange),super.disconnectedCallback()}handleViewChange(t){this.currentView=t.detail.view}render(){return w`
      <gds-theme color-scheme="light">
        <gds-header></gds-header>
        <gds-div padding="s{0} m{s} l{4xl}">
          ${hl(this.currentView,[["login",()=>w`<gds-login></gds-login>`],["form-validation",()=>w`<form-validation></form-validation>`],["datepicker",()=>w`<datepicker-example></datepicker-example>`],["calendar",()=>w`<calendar-example></calendar-example>`],["spinner",()=>w`<spinner-example></spinner-example>`]],()=>w`No view selected`)}
        </gds-div>
      </gds-theme>
    `}};ha.styles=H`
    :host {
      --gds-test-color: red;
    }
  `;let an=ha;Hd([g()],an.prototype,"popoverOpen");Hd([U()],an.prototype,"currentView");customElements.define("sebgroup-root",an);
