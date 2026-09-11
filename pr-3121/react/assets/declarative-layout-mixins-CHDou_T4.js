import{c as st}from"./iframe-DgcT_93K.js";var ds=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,Et=s=>{throw TypeError(s)},E=(s,e,t,n)=>{for(var r=n>1?void 0:n?fs(e,t):e,a=s.length-1,c;a>=0;a--)(c=s[a])&&(r=(n?c(e,t,r):c(r))||r);return n&&r&&ds(e,t,r),r},Re=(s,e,t)=>e.has(s)||Et("Cannot "+t),p=(s,e,t)=>(Re(s,e,"read from private field"),t?t.call(s):e.get(s)),M=(s,e,t)=>e.has(s)?Et("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),W=(s,e,t,n)=>(Re(s,e,"write to private field"),e.set(s,t),t),D=(s,e,t)=>(Re(s,e,"access private method"),t);const ye=globalThis,Ge=ye.ShadowRoot&&(ye.ShadyCSS===void 0||ye.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ue=Symbol(),nt=new WeakMap;let xt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ue)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ge&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=nt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&nt.set(t,e))}return e}toString(){return this.cssText}};const R=s=>new xt(typeof s=="string"?s:s+"",void 0,Ue),$t=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((n,r,a)=>n+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[a+1],s[0]);return new xt(t,s,Ue)},hs=(s,e)=>{if(Ge)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),r=ye.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,s.appendChild(n)}},rt=Ge?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return R(t)})(s):s;const{is:us,defineProperty:ps,getOwnPropertyDescriptor:ys,getOwnPropertyNames:gs,getOwnPropertySymbols:Ss,getPrototypeOf:ms}=Object,Ee=globalThis,ot=Ee.trustedTypes,vs=ot?ot.emptyScript:"",_s=Ee.reactiveElementPolyfillSupport,le=(s,e)=>s,Se={toAttribute(s,e){switch(e){case Boolean:s=s?vs:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},je=(s,e)=>!us(s,e),it={attribute:!0,type:String,converter:Se,reflect:!1,useDefault:!1,hasChanged:je};Symbol.metadata??=Symbol("metadata"),Ee.litPropertyMetadata??=new WeakMap;let K=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=it){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ps(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:a}=ys(this.prototype,e)??{get(){return this[t]},set(c){this[t]=c}};return{get:r,set(c){const y=r?.call(this);a?.call(this,c),this.requestUpdate(e,y,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??it}static _$Ei(){if(this.hasOwnProperty(le("elementProperties")))return;const e=ms(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(le("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(le("properties"))){const t=this.properties,n=[...gs(t),...Ss(t)];for(const r of n)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(rt(r))}else e!==void 0&&t.push(rt(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return hs(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){const a=(n.converter?.toAttribute!==void 0?n.converter:Se).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,t){const n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const a=n.getPropertyOptions(r),c=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Se;this._$Em=r;const y=c.fromAttribute(t,a.type);this[r]=y??this._$Ej?.get(r)??y,this._$Em=null}}requestUpdate(e,t,n,r=!1,a){if(e!==void 0){const c=this.constructor;if(r===!1&&(a=this[e]),n??=c.getPropertyOptions(e),!((n.hasChanged??je)(a,t)||n.useDefault&&n.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(c._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:a},c){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,c??t??this[e]),a!==!0||c!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,a]of n){const{wrapped:c}=a,y=this[r];c!==!0||this._$AL.has(r)||y===void 0||this.C(r,void 0,a,y)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};K.elementStyles=[],K.shadowRootOptions={mode:"open"},K[le("elementProperties")]=new Map,K[le("finalized")]=new Map,_s?.({ReactiveElement:K}),(Ee.reactiveElementVersions??=[]).push("2.1.2");const Ie=globalThis,at=s=>s,me=Ie.trustedTypes,lt=me?me.createPolicy("lit-html",{createHTML:s=>s}):void 0,wt="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,At="?"+z,bs=`<${At}>`,X=document,de=()=>X.createComment(""),fe=s=>s===null||typeof s!="object"&&typeof s!="function",Ne=Array.isArray,Es=s=>Ne(s)||typeof s?.[Symbol.iterator]=="function",ke=`[ 	
\f\r]`,oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ct=/-->/g,dt=/>/g,F=RegExp(`>|${ke}(?:([^\\s"'>=/]+)(${ke}*=${ke}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ft=/'/g,ht=/"/g,Bt=/^(?:script|style|textarea|title)$/i,xs=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),$s=xs(1),te=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),ut=new WeakMap,V=X.createTreeWalker(X,129);function Ct(s,e){if(!Ne(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return lt!==void 0?lt.createHTML(e):e}const ws=(s,e)=>{const t=s.length-1,n=[];let r,a=e===2?"<svg>":e===3?"<math>":"",c=oe;for(let y=0;y<t;y++){const f=s[y];let x,g,v=-1,w=0;for(;w<f.length&&(c.lastIndex=w,g=c.exec(f),g!==null);)w=c.lastIndex,c===oe?g[1]==="!--"?c=ct:g[1]!==void 0?c=dt:g[2]!==void 0?(Bt.test(g[2])&&(r=RegExp("</"+g[2],"g")),c=F):g[3]!==void 0&&(c=F):c===F?g[0]===">"?(c=r??oe,v=-1):g[1]===void 0?v=-2:(v=c.lastIndex-g[2].length,x=g[1],c=g[3]===void 0?F:g[3]==='"'?ht:ft):c===ht||c===ft?c=F:c===ct||c===dt?c=oe:(c=F,r=void 0);const k=c===F&&s[y+1].startsWith("/>")?" ":"";a+=c===oe?f+bs:v>=0?(n.push(x),f.slice(0,v)+wt+f.slice(v)+z+k):f+z+(v===-2?y:k)}return[Ct(s,a+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class he{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,c=0;const y=e.length-1,f=this.parts,[x,g]=ws(e,t);if(this.el=he.createElement(x,n),V.currentNode=this.el.content,t===2||t===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(r=V.nextNode())!==null&&f.length<y;){if(r.nodeType===1){if(r.hasAttributes())for(const v of r.getAttributeNames())if(v.endsWith(wt)){const w=g[c++],k=r.getAttribute(v).split(z),O=/([.?@])?(.*)/.exec(w);f.push({type:1,index:a,name:O[2],strings:k,ctor:O[1]==="."?Bs:O[1]==="?"?Cs:O[1]==="@"?Ms:xe}),r.removeAttribute(v)}else v.startsWith(z)&&(f.push({type:6,index:a}),r.removeAttribute(v));if(Bt.test(r.tagName)){const v=r.textContent.split(z),w=v.length-1;if(w>0){r.textContent=me?me.emptyScript:"";for(let k=0;k<w;k++)r.append(v[k],de()),V.nextNode(),f.push({type:2,index:++a});r.append(v[w],de())}}}else if(r.nodeType===8)if(r.data===At)f.push({type:2,index:a});else{let v=-1;for(;(v=r.data.indexOf(z,v+1))!==-1;)f.push({type:7,index:a}),v+=z.length-1}a++}}static createElement(e,t){const n=X.createElement("template");return n.innerHTML=e,n}}function se(s,e,t=s,n){if(e===te)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl;const a=fe(e)?void 0:e._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),a===void 0?r=void 0:(r=new a(s),r._$AT(s,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=se(s,r._$AS(s,e.values),r,n)),e}class As{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??X).importNode(t,!0);V.currentNode=r;let a=V.nextNode(),c=0,y=0,f=n[0];for(;f!==void 0;){if(c===f.index){let x;f.type===2?x=new ne(a,a.nextSibling,this,e):f.type===1?x=new f.ctor(a,f.name,f.strings,this,e):f.type===6&&(x=new ks(a,this,e)),this._$AV.push(x),f=n[++y]}c!==f?.index&&(a=V.nextNode(),c++)}return V.currentNode=X,r}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ne{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=se(this,e,t),fe(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==te&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Es(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==B&&fe(this._$AH)?this._$AA.nextSibling.data=e:this.T(X.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=he.createElement(Ct(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{const a=new As(r,this),c=a.u(this.options);a.p(t),this.T(c),this._$AH=a}}_$AC(e){let t=ut.get(e.strings);return t===void 0&&ut.set(e.strings,t=new he(e)),t}k(e){Ne(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new ne(this.O(de()),this.O(de()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const n=at(e).nextSibling;at(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class xe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,a){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=B}_$AI(e,t=this,n,r){const a=this.strings;let c=!1;if(a===void 0)e=se(this,e,t,0),c=!fe(e)||e!==this._$AH&&e!==te,c&&(this._$AH=e);else{const y=e;let f,x;for(e=a[0],f=0;f<a.length-1;f++)x=se(this,y[n+f],t,f),x===te&&(x=this._$AH[f]),c||=!fe(x)||x!==this._$AH[f],x===B?e=B:e!==B&&(e+=(x??"")+a[f+1]),this._$AH[f]=x}c&&!r&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Bs extends xe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}class Cs extends xe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class Ms extends xe{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){if((e=se(this,e,t,0)??B)===te)return;const n=this._$AH,r=e===B&&n!==B||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==B&&(n===B||r);r&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ks{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){se(this,e)}}const sn={I:ne},Ts=Ie.litHtmlPolyfillSupport;Ts?.(he,ne),(Ie.litHtmlVersions??=[]).push("3.3.3");const Ps=(s,e,t)=>{const n=t?.renderBefore??e;let r=n._$litPart$;if(r===void 0){const a=t?.renderBefore??null;n._$litPart$=r=new ne(e.insertBefore(de(),a),a,void 0,t??{})}return r._$AI(s),r};const He=globalThis;class ce extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ps(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return te}}ce._$litElement$=!0,ce.finalized=!0,He.litElementHydrateSupport?.({LitElement:ce});const Os=He.litElementPolyfillSupport;Os?.({LitElement:ce});(He.litElementVersions??=[]).push("4.2.2");const Ds={attribute:!0,type:String,converter:Se,reflect:!1,hasChanged:je},Rs=(s=Ds,e,t)=>{const{kind:n,metadata:r}=t;let a=globalThis.litPropertyMetadata.get(r);if(a===void 0&&globalThis.litPropertyMetadata.set(r,a=new Map),n==="setter"&&((s=Object.create(s)).wrapped=!0),a.set(t.name,s),n==="accessor"){const{name:c}=t;return{set(y){const f=e.get.call(this);e.set.call(this,y),this.requestUpdate(c,f,s,!0,y)},init(y){return y!==void 0&&this.C(c,void 0,s,y),y}}}if(n==="setter"){const{name:c}=t;return function(y){const f=this[c];e.call(this,y),this.requestUpdate(c,f,s,!0,y)}}throw Error("Unsupported decorator location: "+n)};function Le(s){return(e,t)=>typeof t=="object"?Rs(s,e,t):((n,r,a)=>{const c=r.hasOwnProperty(a);return r.constructor.createProperty(a,n),c?Object.getOwnPropertyDescriptor(r,a):void 0})(s,e,t)}function Gs(s){return Le({...s,state:!0,attribute:!1})}var G,ve,N,_e,Z,U,I,be,L,Mt,ie,kt;class Us{constructor(e){M(this,L),M(this,G,!Tt()),M(this,ve,!1),M(this,N,[]),M(this,_e,[]),M(this,Z,new Map),M(this,U,new Map),M(this,I,[]),M(this,be,[]),this.host=e,this.host.addController(this)}hostConnected(){D(this,L,kt).call(this)}has(e){return p(this,G)?p(this,U).has(e):p(this,Z).has(e)}inject(e,t){D(this,L,Mt).call(this,e,t),D(this,L,ie).call(this)}clear(e){p(this,G)?this.host.updateComplete.then(()=>{p(this,U).get(e)?.remove(),p(this,U).delete(e)}):p(this,Z).delete(e),D(this,L,ie).call(this)}clearAll(){p(this,G)?this.host.updateComplete.then(()=>{p(this,U).forEach(e=>e.remove()),p(this,I).forEach(e=>e.remove()),p(this,U).clear(),W(this,I,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],p(this,Z).clear(),W(this,N,[]))}clearInitial(){p(this,G)?this.host.updateComplete.then(()=>{p(this,I).forEach(e=>e.remove()),W(this,I,[])}):W(this,N,[]),D(this,L,ie).call(this)}restoreInitial(){p(this,G)?p(this,be).forEach(e=>{p(this,I).push(e.cloneNode(!0))}):W(this,N,[...p(this,_e)]),D(this,L,ie).call(this)}}G=new WeakMap;ve=new WeakMap;N=new WeakMap;_e=new WeakMap;Z=new WeakMap;U=new WeakMap;I=new WeakMap;be=new WeakMap;L=new WeakSet;Mt=function(s,e){if(p(this,G)){let t=p(this,U).get(s);t||(t=document.createElement("style"),p(this,U).set(s,t)),t.textContent=e.cssText}else{if(!this.host.shadowRoot||!e.styleSheet)return;p(this,Z).set(s,e.styleSheet)}};ie=function(){if(p(this,G))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(s=>{s.remove()}),p(this,I).forEach(s=>{this.host.shadowRoot?.appendChild(s)}),p(this,U).forEach(s=>{this.host.shadowRoot?.appendChild(s)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...p(this,N),...Array.from(p(this,Z).values())]}};kt=function(){p(this,ve)||(p(this,G)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(s=>{p(this,I).push(s),p(this,be).push(s.cloneNode(!0))})}):this.host.shadowRoot&&p(this,N).length===0&&(W(this,N,[...this.host.shadowRoot.adoptedStyleSheets||[]]),W(this,_e,[...p(this,N)])),W(this,ve,!0))};function Tt(){try{return new CSSStyleSheet,!0}catch{return!1}}function pt(s){return s&&(s.includes("-")?s.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""):s.charAt(0).toUpperCase()+s.slice(1))}var yt={};var gt;function js(){if(gt)return yt;gt=1;var s;return(function(e){(function(t){var n=typeof st=="object"?st:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),r=a(e);typeof n.Reflect>"u"?n.Reflect=e:r=a(n.Reflect,r),t(r);function a(c,y){return function(f,x){typeof c[f]!="function"&&Object.defineProperty(c,f,{configurable:!0,writable:!0,value:x}),y&&y(f,x)}}})(function(t){var n=Object.prototype.hasOwnProperty,r=typeof Symbol=="function",a=r&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",c=r&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",y=typeof Object.create=="function",f={__proto__:[]}instanceof Array,x=!y&&!f,g={create:y?function(){return Me(Object.create(null))}:f?function(){return Me({__proto__:null})}:function(){return Me({})},has:x?function(o,i){return n.call(o,i)}:function(o,i){return i in o},get:x?function(o,i){return n.call(o,i)?o[i]:void 0}:function(o,i){return o[i]}},v=Object.getPrototypeOf(Function),w=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",k=!w&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:as(),O=!w&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:ls(),Ae=!w&&typeof WeakMap=="function"?WeakMap:cs(),Y=new Ae;function ue(o,i,l,d){if(A(l)){if(!Qe(o))throw new TypeError;if(!Ke(i))throw new TypeError;return Jt(o,i)}else{if(!Qe(o))throw new TypeError;if(!C(i))throw new TypeError;if(!C(d)&&!A(d)&&!Q(d))throw new TypeError;return Q(d)&&(d=void 0),l=j(l),Xt(o,i,l,d)}}t("decorate",ue);function Nt(o,i){function l(d,h){if(!C(d))throw new TypeError;if(!A(h)&&!ss(h))throw new TypeError;Ze(o,i,d,h)}return l}t("metadata",Nt);function Ht(o,i,l,d){if(!C(l))throw new TypeError;return A(d)||(d=j(d)),Ze(o,i,l,d)}t("defineMetadata",Ht);function Lt(o,i,l){if(!C(i))throw new TypeError;return A(l)||(l=j(l)),qe(o,i,l)}t("hasMetadata",Lt);function Wt(o,i,l){if(!C(i))throw new TypeError;return A(l)||(l=j(l)),Be(o,i,l)}t("hasOwnMetadata",Wt);function zt(o,i,l){if(!C(i))throw new TypeError;return A(l)||(l=j(l)),Fe(o,i,l)}t("getMetadata",zt);function qt(o,i,l){if(!C(i))throw new TypeError;return A(l)||(l=j(l)),Ve(o,i,l)}t("getOwnMetadata",qt);function Ft(o,i){if(!C(o))throw new TypeError;return A(i)||(i=j(i)),Je(o,i)}t("getMetadataKeys",Ft);function Vt(o,i){if(!C(o))throw new TypeError;return A(i)||(i=j(i)),Xe(o,i)}t("getOwnMetadataKeys",Vt);function Zt(o,i,l){if(!C(i))throw new TypeError;A(l)||(l=j(l));var d=re(i,l,!1);if(A(d)||!d.delete(o))return!1;if(d.size>0)return!0;var h=Y.get(i);return h.delete(l),h.size>0||Y.delete(i),!0}t("deleteMetadata",Zt);function Jt(o,i){for(var l=o.length-1;l>=0;--l){var d=o[l],h=d(i);if(!A(h)&&!Q(h)){if(!Ke(h))throw new TypeError;i=h}}return i}function Xt(o,i,l,d){for(var h=o.length-1;h>=0;--h){var T=o[h],S=T(i,l,d);if(!A(S)&&!Q(S)){if(!C(S))throw new TypeError;d=S}}return d}function re(o,i,l){var d=Y.get(o);if(A(d)){if(!l)return;d=new k,Y.set(o,d)}var h=d.get(i);if(A(h)){if(!l)return;h=new k,d.set(i,h)}return h}function qe(o,i,l){var d=Be(o,i,l);if(d)return!0;var h=Ce(i);return Q(h)?!1:qe(o,h,l)}function Be(o,i,l){var d=re(i,l,!1);return A(d)?!1:es(d.has(o))}function Fe(o,i,l){var d=Be(o,i,l);if(d)return Ve(o,i,l);var h=Ce(i);if(!Q(h))return Fe(o,h,l)}function Ve(o,i,l){var d=re(i,l,!1);if(!A(d))return d.get(o)}function Ze(o,i,l,d){var h=re(l,d,!0);h.set(o,i)}function Je(o,i){var l=Xe(o,i),d=Ce(o);if(d===null)return l;var h=Je(d,i);if(h.length<=0)return l;if(l.length<=0)return h;for(var T=new O,S=[],m=0,u=l;m<u.length;m++){var _=u[m],b=T.has(_);b||(T.add(_),S.push(_))}for(var H=0,tt=h;H<tt.length;H++){var _=tt[H],b=T.has(_);b||(T.add(_),S.push(_))}return S}function Xe(o,i){var l=[],d=re(o,i,!1);if(A(d))return l;for(var h=d.keys(),T=ns(h),S=0;;){var m=os(T);if(!m)return l.length=S,l;var u=rs(m);try{l[S]=u}catch(_){try{is(T)}finally{throw _}}S++}}function Ye(o){if(o===null)return 1;switch(typeof o){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return o===null?1:6;default:return 6}}function A(o){return o===void 0}function Q(o){return o===null}function Yt(o){return typeof o=="symbol"}function C(o){return typeof o=="object"?o!==null:typeof o=="function"}function Qt(o,i){switch(Ye(o)){case 0:return o;case 1:return o;case 2:return o;case 3:return o;case 4:return o;case 5:return o}var l="string",d=et(o,a);if(d!==void 0){var h=d.call(o,l);if(C(h))throw new TypeError;return h}return Kt(o)}function Kt(o,i){var l,d;{var h=o.toString;if(pe(h)){var d=h.call(o);if(!C(d))return d}var l=o.valueOf;if(pe(l)){var d=l.call(o);if(!C(d))return d}}throw new TypeError}function es(o){return!!o}function ts(o){return""+o}function j(o){var i=Qt(o);return Yt(i)?i:ts(i)}function Qe(o){return Array.isArray?Array.isArray(o):o instanceof Object?o instanceof Array:Object.prototype.toString.call(o)==="[object Array]"}function pe(o){return typeof o=="function"}function Ke(o){return typeof o=="function"}function ss(o){switch(Ye(o)){case 3:return!0;case 4:return!0;default:return!1}}function et(o,i){var l=o[i];if(l!=null){if(!pe(l))throw new TypeError;return l}}function ns(o){var i=et(o,c);if(!pe(i))throw new TypeError;var l=i.call(o);if(!C(l))throw new TypeError;return l}function rs(o){return o.value}function os(o){var i=o.next();return i.done?!1:i}function is(o){var i=o.return;i&&i.call(o)}function Ce(o){var i=Object.getPrototypeOf(o);if(typeof o!="function"||o===v||i!==v)return i;var l=o.prototype,d=l&&Object.getPrototypeOf(l);if(d==null||d===Object.prototype)return i;var h=d.constructor;return typeof h!="function"||h===o?i:h}function as(){var o={},i=[],l=(function(){function S(m,u,_){this._index=0,this._keys=m,this._values=u,this._selector=_}return S.prototype["@@iterator"]=function(){return this},S.prototype[c]=function(){return this},S.prototype.next=function(){var m=this._index;if(m>=0&&m<this._keys.length){var u=this._selector(this._keys[m],this._values[m]);return m+1>=this._keys.length?(this._index=-1,this._keys=i,this._values=i):this._index++,{value:u,done:!1}}return{value:void 0,done:!0}},S.prototype.throw=function(m){throw this._index>=0&&(this._index=-1,this._keys=i,this._values=i),m},S.prototype.return=function(m){return this._index>=0&&(this._index=-1,this._keys=i,this._values=i),{value:m,done:!0}},S})();return(function(){function S(){this._keys=[],this._values=[],this._cacheKey=o,this._cacheIndex=-2}return Object.defineProperty(S.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),S.prototype.has=function(m){return this._find(m,!1)>=0},S.prototype.get=function(m){var u=this._find(m,!1);return u>=0?this._values[u]:void 0},S.prototype.set=function(m,u){var _=this._find(m,!0);return this._values[_]=u,this},S.prototype.delete=function(m){var u=this._find(m,!1);if(u>=0){for(var _=this._keys.length,b=u+1;b<_;b++)this._keys[b-1]=this._keys[b],this._values[b-1]=this._values[b];return this._keys.length--,this._values.length--,m===this._cacheKey&&(this._cacheKey=o,this._cacheIndex=-2),!0}return!1},S.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=o,this._cacheIndex=-2},S.prototype.keys=function(){return new l(this._keys,this._values,d)},S.prototype.values=function(){return new l(this._keys,this._values,h)},S.prototype.entries=function(){return new l(this._keys,this._values,T)},S.prototype["@@iterator"]=function(){return this.entries()},S.prototype[c]=function(){return this.entries()},S.prototype._find=function(m,u){return this._cacheKey!==m&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=m)),this._cacheIndex<0&&u&&(this._cacheIndex=this._keys.length,this._keys.push(m),this._values.push(void 0)),this._cacheIndex},S})();function d(S,m){return S}function h(S,m){return m}function T(S,m){return[S,m]}}function ls(){return(function(){function o(){this._map=new k}return Object.defineProperty(o.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),o.prototype.has=function(i){return this._map.has(i)},o.prototype.add=function(i){return this._map.set(i,i),this},o.prototype.delete=function(i){return this._map.delete(i)},o.prototype.clear=function(){this._map.clear()},o.prototype.keys=function(){return this._map.keys()},o.prototype.values=function(){return this._map.values()},o.prototype.entries=function(){return this._map.entries()},o.prototype["@@iterator"]=function(){return this.keys()},o.prototype[c]=function(){return this.keys()},o})()}function cs(){var o=16,i=g.create(),l=d();return(function(){function u(){this._key=d()}return u.prototype.has=function(_){var b=h(_,!1);return b!==void 0?g.has(b,this._key):!1},u.prototype.get=function(_){var b=h(_,!1);return b!==void 0?g.get(b,this._key):void 0},u.prototype.set=function(_,b){var H=h(_,!0);return H[this._key]=b,this},u.prototype.delete=function(_){var b=h(_,!1);return b!==void 0?delete b[this._key]:!1},u.prototype.clear=function(){this._key=d()},u})();function d(){var u;do u="@@WeakMap@@"+m();while(g.has(i,u));return i[u]=!0,u}function h(u,_){if(!n.call(u,l)){if(!_)return;Object.defineProperty(u,l,{value:g.create()})}return u[l]}function T(u,_){for(var b=0;b<_;++b)u[b]=Math.random()*255|0;return u}function S(u){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(u)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(u)):T(new Uint8Array(u),u):T(new Array(u),u)}function m(){var u=S(o);u[6]=u[6]&79|64,u[8]=u[8]&191|128;for(var _="",b=0;b<o;++b){var H=u[b];(b===4||b===6||b===8)&&(_+="-"),H<16&&(_+="0"),_+=H.toString(16).toLowerCase()}return _}}function Me(o){return o.__=void 0,delete o.__,o}})})(s||(s={})),yt}js();var De,Pt;class $e extends ce{constructor(){super(),M(this,De),this.semanticVersion="3.22.1",this.syncFirstRender=!1,this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new Us(this)}static define(){}connectedCallback(){super.connectedCallback(),this.setAttribute("gds-element",this.gdsElementName?.toString()||""),this.syncFirstRender&&D(this,De,Pt).call(this)}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(e,t){const n={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new Event(e,n)),this.dispatchEvent(new Event(pt(e),n))].every(r=>r!==!1)}dispatchCustomEvent(e,t={}){const n={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new CustomEvent(e,n)),this.dispatchEvent(new CustomEvent(pt(e),n))].every(r=>r!==!1)}}De=new WeakSet;Pt=function(){this.hasUpdated||this.performUpdate();const s=this,e=this.constructor._styleExpressionProps;if(e)for(const t of e){const n=`__sep_${t}`,r=s[n];r!==void 0&&(s[t]=r)}};$e.isDefined=!1;$e.styleExpressionBaseSelector=":host";E([Le({type:Boolean,attribute:"sync-first-render"})],$e.prototype,"syncFirstRender",2);E([Gs()],$e.prototype,"_isUsingTransitionalStyles",2);const q="-4c21a3";class We{static get instance(){return globalThis.__gdsElementLookupTable?.[q]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[q]:new Map}),globalThis.__gdsElementLookupTable[q]}}const nn=(s,e)=>function(t){var n;return n=class extends t{constructor(){super(...arguments),this.gdsElementName=s}static define(){if(n.isDefined)return;const a=globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?s:s+q;customElements.get(a)||(n.isDefined=!0,We.instance.set(s,a),customElements.define(a,n),e?.dependsOn&&e.dependsOn.forEach(c=>c.define()))}},n.isDefined=!1,n},St=new WeakMap;function Is(s,...e){let t=St.get(s);return t||(t=mt(s),t.raw=mt(s.raw),St.set(s,t)),[t,...e]}const mt=s=>s.map(e=>{for(const[t,n]of We.instance.entries())e=e.replace(new RegExp(`(</?)${t}(?![-a-z])`,"mg"),`$1${n}`);return e});function Ns(s){return(e,...t)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return s(e,...t);const[n,...r]=Is(e,...t);return s(n,...r)}}const rn=Ns($s);function on(s,e=!1){return We.instance.get(s)??s+(e?q:"")}const Ot=`/**
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
  --gds-sys-radius-max: 999px;`,vt=`/**
 * Do not edit directly, this file was auto-generated.
 */


  color-scheme: dark;
  --gds-sys-color-l1-neutral-01: #0a0b0b;
  --gds-sys-color-l1-neutral-02: #0a0b0b;
  --gds-sys-color-l1-brand-01: #003824;
  --gds-sys-color-l1-neutral-03: #ffffff;
  --gds-sys-color-l2-neutral-01: #191a1a;
  --gds-sys-color-l2-neutral-01-2: #282a29;
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
  --gds-sys-color-l3-neutral-01: #313533;
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
  --gds-sys-color-state-warning-06: #f19e38 20%;`,_t=`/**
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
  --gds-sys-shadow-2xl-02: 0px 0px 0px 0px transparent;`;var Hs={};const ze=typeof process<"u"&&Hs!==void 0;var ge,J,ee,we,ae,Rt,Gt,Ut;function Ls(){return ze?[]:[...document.adoptedStyleSheets]}const Ws=class jt{constructor(){M(this,ae),M(this,ge,!Tt()),M(this,J,new Map),M(this,ee,new Map),M(this,we,Ls())}static get instance(){return globalThis.__gdsGlobalStylesRegistryScoped?.[q]||(globalThis.__gdsGlobalStylesRegistryScoped={...globalThis.__gdsGlobalStylesRegistryScoped,[q]:new jt}),globalThis.__gdsGlobalStylesRegistryScoped[q]}injectGlobalStyles(e,t){if(p(this,ge)){const n=Array.isArray(t)?t.map(r=>r.toString()).join(""):t.toString();D(this,ae,Rt).call(this,e,n)}else t.styleSheet&&D(this,ae,Gt).call(this,e,t.styleSheet)}clearGlobalStyles(e){if(p(this,ge)){const t=p(this,ee).get(e);t&&t.parentNode&&(t.parentNode.removeChild(t),p(this,ee).delete(e))}else D(this,ae,Ut).call(this,e)}};ge=new WeakMap;J=new WeakMap;ee=new WeakMap;we=new WeakMap;ae=new WeakSet;Rt=function(s,e){if(ze)return;let t=p(this,ee).get(s);t||(t=document.createElement("style"),p(this,ee).set(s,t)),t.textContent=e,document.head.appendChild(t)};Gt=function(s,e){ze||(p(this,J).set(s,e),document.adoptedStyleSheets=[...p(this,we),...Array.from(p(this,J).values())])};Ut=function(s){p(this,J).has(s)&&(p(this,J).delete(s),document.adoptedStyleSheets=[...p(this,we),...Array.from(p(this,J).values())])};let zs=Ws;const an=[$t`
    :host {
      ${R(Ot)}
      ${R(Dt)}
    }
  `];zs.instance.injectGlobalStyles("root-tokens",$t`
    :root {
      ${R(Ot)}
      ${R(Dt)}
    }
    :root:not([gds-theme]),
    :root[gds-theme='light'] {
      ${R(_t)}
    }
    :root[gds-theme='dark'] {
      ${R(vt)}
    }
    :root[gds-theme='auto'] {
      @media (prefers-color-scheme: dark) {
        ${R(vt)}
      }
      @media (prefers-color-scheme: light) {
        ${R(_t)}
      }
    }
  `);const qs={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},Fs=/^([<|>]=?)?([0-9a-z]+)/,It=["{","}",";",":",","],bt=[" ","/n"];function Vs(s=""){const e=[];let t="";for(let n=0;n<s.length;n++){const r=s[n];if(bt.includes(r)||(t+=r),It.includes(r)){e.push(t.slice(0,-1)),e.push(r),t="";continue}if(bt.includes(r)||n===s.length-1){e.push(t),t="";continue}}return e.filter(n=>n!=="")}function Zs(s){const e=[];let t={breakpoint:"-",values:[]};const n=()=>({sel:"",values:[]});let r=n();for(const a of s){if(!It.includes(a)){r.values.push(a);continue}if(a==="{"&&(t={breakpoint:r.values.join(","),values:[]},r=n()),a===";"&&(e.length===0&&e.push(t),r.values.length>0&&(t.values.push(r),r=n())),a===":"){const c=r.values.pop()??"";r.sel=c}t&&a==="}"&&(t.values.push(r),r=n(),e.push(t))}return r.values.length>0&&t.values.push(r),e.length===0&&e.push(t),e}function Js(s){return s.split(",").map(t=>{const n=t.trim().match(Fs);if(!n)throw new Error(`Invalid breakpoint specifier: ${t}`);return{condition:n[1],value:n[2]}})}function Xs(s,e,t,n=a=>a,r=(a,c)=>`${a}: ${c.join(" ")};`){let a="";for(const c of t){const x=`@media ${(c.breakpoint==="-"?[{condition:">=",value:"0"}]:Js(c.breakpoint)).map(g=>`(${g.condition?.includes("<")?"max-width":"min-width"}: ${qs[g.value]??g.value})`).join(" and ")} {${c.values.map(g=>{let v=s;g.sel.length>0&&(v=s===":host"?`:host(:${g.sel})`:`${s}:${g.sel}`);const w=r(e,g.values.map(n));return g.sel==="hover"?`@media (hover: hover) {${v}{${w}}}`:`${v}{${w}}`}).join("")}}`;a+=x}return a}const Te=new Map;function $(s){return(e,t)=>{const n=s?.property??String(t),r=s?.valueTemplate,a=s?.styleTemplate,c=s?.cacheOverrideKey??"0",y=s?.attribute??String(t),f=`__sep_${String(t)}`,x=e.constructor;(x._styleExpressionProps??(x._styleExpressionProps=new Set)).add(String(t)),Le({attribute:y,reflect:s?.reflect,noAccessor:!0})(e,t),Object.defineProperty(e,t,{get:function(){return this[f]},set:function(g){g=g?.toString().trim()??"",this[f]=g,s?.reflect&&(g?this.setAttribute(y,String(g)):this.removeAttribute(y));const v=()=>{const w=s?.selector??this.constructor.styleExpressionBaseSelector,k=this.level??"0",O=w+n+g+k+c;if(Te.has(O)){this._dynamicStylesController.inject(f,Te.get(O));return}const Ae=Zs(Vs(g)),Y=Xs(w,n,Ae,r?.bind(this),a?.bind(this)),ue=R(Y);Te.set(O,ue),this._dynamicStylesController.inject(f,ue)};this.syncFirstRender&&this.shadowRoot?v():this.updateComplete.then(()=>v())}})}}function Ys(s,e,t){if(s==="transparent"||s==="currentColor"||s==="inherit")return s;const[n,r]=s.split("/");let a;return t&&e==="background"?a=`var(--gds-sys-color-l${t}-${n})`:a=`var(--gds-sys-color-${e}-${n})`,r?`color-mix(in srgb, ${a} ${parseFloat(r)*100}%, transparent 0%)`:a}function ln(s){return{valueTemplate:function(e){return Ys(e,s,this.level)}}}const Pe={valueTemplate:s=>`var(--gds-sys-space-${s}, 0)`},cn={valueTemplate:s=>`var(--gds-sys-radius-${s}, 0)`},P={valueTemplate:s=>`var(--gds-sys-space-${Qs(s)}, ${s})`},Oe={valueTemplate:s=>{const t=(s.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${s})`:`calc(var(--gds-sys-space-${s.substring(1)}) * -1)`;return s==="auto"?"auto":t},styleTemplate:(s,e)=>{const t=r=>r==="auto"?"auto":`${r}`,n=e.map(t).join(" ");return`${s}: ${n};`}};function Qs(s){return s.replace(/[^a-zA-Z0-9-]/g,"")}function dn(s){class e extends s{}return E([$(P)],e.prototype,"width",2),E([$(P)],e.prototype,"min-width",2),E([$(P)],e.prototype,"max-width",2),E([$(P)],e.prototype,"inline-size",2),E([$(P)],e.prototype,"min-inline-size",2),E([$(P)],e.prototype,"max-inline-size",2),e}function fn(s){class e extends s{}return E([$(P)],e.prototype,"height",2),E([$(P)],e.prototype,"min-height",2),E([$(P)],e.prototype,"max-height",2),E([$(P)],e.prototype,"block-size",2),E([$(P)],e.prototype,"min-block-size",2),E([$(P)],e.prototype,"max-block-size",2),e}function hn(s){class e extends s{}return E([$(Oe)],e.prototype,"margin",2),E([$(Oe)],e.prototype,"margin-inline",2),E([$(Oe)],e.prototype,"margin-block",2),e}function un(s){class e extends s{}return E([$(Pe)],e.prototype,"padding",2),E([$(Pe)],e.prototype,"padding-inline",2),E([$(Pe)],e.prototype,"padding-block",2),e}function pn(s){class e extends s{}return E([$()],e.prototype,"align-self",2),E([$()],e.prototype,"justify-self",2),E([$()],e.prototype,"place-self",2),E([$()],e.prototype,"grid-column",2),E([$()],e.prototype,"grid-row",2),E([$()],e.prototype,"grid-area",2),E([$()],e.prototype,"flex",2),E([$()],e.prototype,"order",2),e}function yn(s){class e extends s{}return E([$()],e.prototype,"position",2),E([$()],e.prototype,"transform",2),E([$()],e.prototype,"inset",2),e}export{B as A,vt as B,_t as C,ze as D,te as E,Tt as F,$e as G,q as V,E as _,on as a,M as b,p as c,D as d,W as e,dn as f,nn as g,rn as h,$t as i,sn as j,fn as k,un as l,pn as m,Le as n,yn as o,ln as p,Ys as q,Gs as r,$ as s,an as t,Pe as u,cn as v,hn as w,$s as x,P as y,R as z};
