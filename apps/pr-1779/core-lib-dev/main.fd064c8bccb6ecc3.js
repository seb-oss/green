(self.webpackChunk=self.webpackChunk||[]).push([[792],{683:(e,t,r)=>{"use strict";const o=globalThis,i=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),a=new WeakMap;class n{constructor(e,t,r){if(this._$cssResult$=!0,r!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(t,e))}return e}toString(){return this.cssText}}const l=(e,t)=>{if(i)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const r of t){const t=document.createElement("style"),i=o.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:c,defineProperty:u,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:g,getPrototypeOf:f}=Object,m=globalThis,v=m.trustedTypes,y=v?v.emptyScript:"",x=m.reactiveElementPolyfillSupport,w=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},C=(e,t)=>!c(e,t),$={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:C};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&u(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:i}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const s=o?.call(this);i.call(this,t),this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,t=[...p(e),...g(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const e=this._$Eu(t,r);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:_).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=r.getPropertyOptions(o),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_;this._$Em=o,this[o]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??C)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[w("elementProperties")]=new Map,b[w("finalized")]=new Map,x?.({ReactiveElement:b}),(m.reactiveElementVersions??=[]).push("2.0.4");const S=globalThis,E=S.trustedTypes,A=E?E.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+j,P=`<${O}>`,D=document,V=()=>D.createComment(""),W=e=>null===e||"object"!=typeof e&&"function"!=typeof e,F=Array.isArray,B=e=>F(e)||"function"==typeof e?.[Symbol.iterator],U="[ \t\n\f\r]",Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,Y=/>/g,q=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),K=/'/g,X=/"/g,J=/^(?:script|style|textarea|title)$/i,Q=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ee=Q(1),te=Q(2),re=Q(3),ne=Symbol.for("lit-noChange"),oe=Symbol.for("lit-nothing"),ie=new WeakMap,se=D.createTreeWalker(D,129);function ae(e,t){if(!F(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}const le=(e,t)=>{const r=e.length-1,o=[];let i,s=2===t?"<svg>":3===t?"<math>":"",a=Z;for(let l=0;l<r;l++){const t=e[l];let r,d,c=-1,u=0;for(;u<t.length&&(a.lastIndex=u,d=a.exec(t),null!==d);)u=a.lastIndex,a===Z?"!--"===d[1]?a=G:void 0!==d[1]?a=Y:void 0!==d[2]?(J.test(d[2])&&(i=RegExp("</"+d[2],"g")),a=q):void 0!==d[3]&&(a=q):a===q?">"===d[0]?(a=i??Z,c=-1):void 0===d[1]?c=-2:(c=a.lastIndex-d[2].length,r=d[1],a=void 0===d[3]?q:'"'===d[3]?X:K):a===X||a===K?a=q:a===G||a===Y?a=Z:(a=q,i=void 0);const h=a===q&&e[l+1].startsWith("/>")?" ":"";s+=a===Z?t+P:c>=0?(o.push(r),t.slice(0,c)+T+t.slice(c)+j+h):t+j+(-2===c?l:h)}return[ae(e,s+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class N{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,s=0;const a=e.length-1,l=this.parts,[d,c]=le(e,t);if(this.el=N.createElement(d,r),se.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=se.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(T)){const t=c[s++],r=o.getAttribute(e).split(j),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:i,name:a[2],strings:r,ctor:"."===a[1]?H:"?"===a[1]?I:"@"===a[1]?L:k}),o.removeAttribute(e)}else e.startsWith(j)&&(l.push({type:6,index:i}),o.removeAttribute(e));if(J.test(o.tagName)){const e=o.textContent.split(j),t=e.length-1;if(t>0){o.textContent=E?E.emptyScript:"";for(let r=0;r<t;r++)o.append(e[r],V()),se.nextNode(),l.push({type:2,index:++i});o.append(e[t],V())}}}else if(8===o.nodeType)if(o.data===O)l.push({type:2,index:i});else{let e=-1;for(;-1!==(e=o.data.indexOf(j,e+1));)l.push({type:7,index:i}),e+=j.length-1}i++}}static createElement(e,t){const r=D.createElement("template");return r.innerHTML=e,r}}function de(e,t,r=e,o){if(t===ne)return t;let i=void 0!==o?r._$Co?.[o]:r._$Cl;const s=W(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(e),i._$AT(e,r,o)),void 0!==o?(r._$Co??=[])[o]=i:r._$Cl=i),void 0!==i&&(t=de(e,i._$AS(e,t.values),i,o)),t}class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??D).importNode(t,!0);se.currentNode=o;let i=se.nextNode(),s=0,a=0,l=r[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new R(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new z(i,this,e)),this._$AV.push(t),l=r[++a]}s!==l?.index&&(i=se.nextNode(),s++)}return se.currentNode=D,o}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=oe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=de(this,e,t),W(e)?e===oe||null==e||""===e?(this._$AH!==oe&&this._$AR(),this._$AH=oe):e!==this._$AH&&e!==ne&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):B(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==oe&&W(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=N.createElement(ae(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new M(o,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=ie.get(e.strings);return void 0===t&&ie.set(e.strings,t=new N(e)),t}k(e){F(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const i of e)o===t.length?t.push(r=new R(this.O(V()),this.O(V()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,i){this.type=1,this._$AH=oe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=oe}_$AI(e,t=this,r,o){const i=this.strings;let s=!1;if(void 0===i)e=de(this,e,t,0),s=!W(e)||e!==this._$AH&&e!==ne,s&&(this._$AH=e);else{const o=e;let a,l;for(e=i[0],a=0;a<i.length-1;a++)l=de(this,o[r+a],t,a),l===ne&&(l=this._$AH[a]),s||=!W(l)||l!==this._$AH[a],l===oe?e=oe:e!==oe&&(e+=(l??"")+i[a+1]),this._$AH[a]=l}s&&!o&&this.j(e)}j(e){e===oe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===oe?void 0:e}}class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==oe)}}class L extends k{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){if((e=de(this,e,t,0)??oe)===ne)return;const r=this._$AH,o=e===oe&&r!==oe||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==oe&&(r===oe||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){de(this,e)}}const ce={M:T,P:j,A:O,C:1,L:le,R:M,D:B,V:de,I:R,H:k,N:I,U:L,B:H,F:z},ue=S.litHtmlPolyfillSupport;ue?.(N,R),(S.litHtmlVersions??=[]).push("3.2.1");const he=globalThis,pe=he.ShadowRoot&&(void 0===he.ShadyCSS||he.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ge=Symbol(),fe=new WeakMap;class css_tag_n{constructor(e,t,r){if(this._$cssResult$=!0,r!==ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(pe&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=fe.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&fe.set(t,e))}return e}toString(){return this.cssText}}const me=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,ge),be=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1]),e[0]);return new css_tag_n(r,e,ge)},ve=pe?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return me(t)})(e):e,{is:ye,defineProperty:xe,getOwnPropertyDescriptor:we,getOwnPropertyNames:ke,getOwnPropertySymbols:_e,getPrototypeOf:Ce}=Object,$e=globalThis,Se=$e.trustedTypes,Ee=Se?Se.emptyScript:"",Ae=$e.reactiveElementPolyfillSupport,Te=(e,t)=>e,Me={toAttribute(e,t){switch(t){case Boolean:e=e?Ee:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},ze=(e,t)=>!ye(e,t),je={attribute:!0,type:String,converter:Me,reflect:!1,hasChanged:ze};Symbol.metadata??=Symbol("metadata"),$e.litPropertyMetadata??=new WeakMap;class reactive_element_b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=je){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&xe(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:i}=we(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const s=o?.call(this);i.call(this,t),this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??je}static _$Ei(){if(this.hasOwnProperty(Te("elementProperties")))return;const e=Ce(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Te("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Te("properties"))){const e=this.properties,t=[...ke(e),..._e(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const e=this._$Eu(t,r);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(ve(e))}else void 0!==e&&t.push(ve(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(pe)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const r of t){const t=document.createElement("style"),o=he.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:Me).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=r.getPropertyOptions(o),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Me;this._$Em=o,this[o]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??ze)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}reactive_element_b.elementStyles=[],reactive_element_b.shadowRootOptions={mode:"open"},reactive_element_b[Te("elementProperties")]=new Map,reactive_element_b[Te("finalized")]=new Map,Ae?.({ReactiveElement:reactive_element_b}),($e.reactiveElementVersions??=[]).push("2.0.4");class lit_element_r extends reactive_element_b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const o=r?.renderBefore??t;let i=o._$litPart$;if(void 0===i){const e=r?.renderBefore??null;o._$litPart$=i=new R(t.insertBefore(V(),e),e,void 0,r??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ne}}lit_element_r._$litElement$=!0,lit_element_r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_r});const Oe=globalThis.litElementPolyfillSupport;Oe?.({LitElement:lit_element_r});(globalThis.litElementVersions??=[]).push("4.1.1");const Le=e=>(t,r)=>{void 0!==r?r.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},Pe={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:C},De=(e=Pe,t,r)=>{const{kind:o,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,e),"accessor"===o){const{name:o}=r;return{set(r){const i=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,i,e)},init(t){return void 0!==t&&this.P(o,void 0,e),t}}}if("setter"===o){const{name:o}=r;return function(r){const i=this[o];t.call(this,r),this.requestUpdate(o,i,e)}}throw Error("Unsupported decorator location: "+o)};function Ve(e){return(t,r)=>"object"==typeof r?De(e,t,r):((e,t,r)=>{const o=t.hasOwnProperty(r);return t.constructor.createProperty(r,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}function He(e){return Ve({...e,state:!0,attribute:!1})}const We=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r);function Ne(e,t){return(r,o,i)=>{const s=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof o?r:i??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return We(r,o,{get(){let r=e.call(this);return void 0===r&&(r=s(this),(null!==r||this.hasUpdated)&&t.call(this,r)),r}})}return We(r,o,{get(){return s(this)}})}}let Re;function Fe(e){return(t,r)=>We(t,r,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}const Ie=(e,t,r)=>{for(const o of t)if(o[0]===e)return(0,o[1])();return r?.()};var Be=Object.defineProperty,Ue=Object.defineProperties,Ze=Object.getOwnPropertyDescriptor,Ge=Object.getOwnPropertyDescriptors,Ye=Object.getOwnPropertySymbols,qe=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable,Xe=(e,t,r)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Je=(e,t)=>{for(var r in t||(t={}))qe.call(t,r)&&Xe(e,r,t[r]);if(Ye)for(var r of Ye(t))Ke.call(t,r)&&Xe(e,r,t[r]);return e},Qe=(e,t)=>Ue(e,Ge(t)),et=(e,t,r,o)=>{for(var i,s=o>1?void 0:o?Ze(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o?i(t,r,s):i(s))||s);return o&&s&&Be(t,r,s),s},tt=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},rt=(e,t,r)=>(tt(e,t,"read from private field"),r?r.call(e):t.get(e)),nt=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},ot=(e,t,r,o)=>(tt(e,t,"write to private field"),o?o.call(e,r):t.set(e,r),r),it=(e,t,r)=>(tt(e,t,"access private method"),r),st="-86c716",at=class{static get instance(){var e;return(null==(e=globalThis.__gdsElementLookupTable)?void 0:e[st])||(globalThis.__gdsElementLookupTable=Qe(Je({},globalThis.__gdsElementLookupTable),{[st]:new Map})),globalThis.__gdsElementLookupTable[st]}};var lt=e=>globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?function(e){return at.instance.set(e,e),function(t){return t.prototype.gdsElementName=e,Le(e)(t)}}(e):function(e){const t=e+st;return at.instance.set(e,t),function(r){return r.prototype.gdsElementName=e,customElements.get(t)?e=>!1:Le(t)(r)}}(e),dt=new WeakMap;var ct=e=>e.map((e=>{for(const[t,r]of at.instance.entries())e=e.replace(new RegExp(`${t}(?![-a-z])`,"mg"),r);return e}));var ut,ht=(ut=ee,function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return ut(e,...r);const[i,...s]=function(e){let t=dt.get(e);t||(t=ct(e),t.raw=ct(e.raw),dt.set(e,t));for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return[t,...o]}(e,...r);return ut(i,...s)});var pt=be`
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
`,gt={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},ft=/^([<|>]=?)?([0-9a-z]+)/,mt=["{","}",";",":",","],bt=[" ","/n"];function vt(e){return e.split(",").map((e=>{const t=e.trim().match(ft);if(!t)throw new Error(`Invalid breakpoint specifier: ${e}`);return{condition:t[1],value:t[2]}}))}var yt,xt,wt,kt,_t,Ct,$t,St,Et,At,Tt,Mt,zt,jt,Ot=new Map;function Lt(e){return(t,r)=>{var o,i,s,a;const l=null!=(o=null==e?void 0:e.selector)?o:String(":host"),d=null!=(i=null==e?void 0:e.property)?i:String(r),c=null!=(s=null==e?void 0:e.valueTemplate)?s:e=>`var(--gds-space-${e}, 0)`,u=null==e?void 0:e.styleTemplate,h=null!=(a=null==e?void 0:e.cacheOverrideKey)?a:"0";Ve({attribute:null==e?void 0:e.attribute,noAccessor:!0})(t,r),Object.defineProperty(t,r,{get:function(){return this["__"+String(r)]},set:async function(e){var t;this["__"+String(r)]=e,await this.updateComplete;const o=null!=(t=this.level)?t:"0",i=l+d+e+o+h;if(Ot.has(i))return void this._dynamicStylesController.inject(`sep_${String(r)}`,Ot.get(i));const s=function(e){var t;const r=[];let o={breakpoint:"-",values:[]},i={sel:"",values:[]};for(const s of e)if(mt.includes(s)){if("{"===s&&(o={breakpoint:i.values.join(","),values:[]},i={sel:"",values:[]}),";"===s&&(0===r.length&&r.push(o),i.values.length>0&&(o.values.push(i),i={sel:"",values:[]})),":"===s){const e=null!=(t=i.values.pop())?t:"";i.sel=e}o&&"}"===s&&(o.values.push(i),i={sel:"",values:[]},r.push(o))}else i.values.push(s);return i.values.length>0&&o.values.push(i),0===r.length&&r.push(o),r}(function(e){const t=[];let r="";for(let o=0;o<e.length;o++){const i=e[o];bt.includes(i)||(r+=i),mt.includes(i)?(t.push(r.slice(0,-1)),t.push(i),r=""):(bt.includes(i)||o===e.length-1)&&(t.push(r),r="")}return t.filter((e=>""!==e))}(e)),a=function(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>e,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:(e,t)=>`${e}: ${t.join(" ")};`,s="";for(const a of r){const r=("-"===a.breakpoint?[{condition:">=",value:"0"}]:vt(a.breakpoint)).map((e=>{var t,r;return`(${(null==(t=e.condition)?void 0:t.includes("<"))?"max-width":"min-width"}: ${null!=(r=gt[e.value])?r:e.value})`})).join(" and "),l=`@media ${r} {${a.values.map((r=>{let s=e;r.sel.length>0&&(s=":host"===e?`:host(:${r.sel})`:`${e}:${r.sel}`);const a=i(t,r.values.map(o));return"hover"===r.sel?`@media (hover: hover) {${s}{${a}}}`:`${s}{${a}}`})).join("")}}`;s+=l}return s}(l,d,s,c.bind(this),null==u?void 0:u.bind(this)),p=me(a);Ot.set(i,p),this._dynamicStylesController.inject(`sep_${String(r)}`,p)}})}}var Pt,Dt,Vt,Ht,Wt,Nt,Rt,Ft,It=class{constructor(e){nt(this,Et),nt(this,Tt),nt(this,zt),nt(this,yt,!Bt()),nt(this,xt,!1),nt(this,wt,[]),nt(this,kt,[]),nt(this,_t,new Map),nt(this,Ct,new Map),nt(this,$t,[]),nt(this,St,[]),this.host=e,this.host.addController(this)}hostConnected(){it(this,zt,jt).call(this)}has(e){return rt(this,yt)?rt(this,Ct).has(e):rt(this,_t).has(e)}inject(e,t){it(this,Et,At).call(this,e,t),it(this,Tt,Mt).call(this)}clear(e){if(rt(this,yt)){const t=rt(this,Ct).get(e);null==t||t.remove(),rt(this,Ct).delete(e)}else rt(this,_t).delete(e);it(this,Tt,Mt).call(this)}clearAll(){rt(this,yt)?(rt(this,Ct).forEach((e=>e.remove())),rt(this,$t).forEach((e=>e.remove())),rt(this,Ct).clear(),ot(this,$t,[])):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],rt(this,_t).clear(),ot(this,wt,[]))}clearInitial(){rt(this,yt)?(rt(this,$t).forEach((e=>e.remove())),ot(this,$t,[])):ot(this,wt,[]),it(this,Tt,Mt).call(this)}restoreInitial(){rt(this,yt)?rt(this,St).forEach((e=>{rt(this,$t).push(e.cloneNode(!0))})):ot(this,wt,[...rt(this,kt)]),it(this,Tt,Mt).call(this)}};function Bt(){try{return new CSSStyleSheet,!0}catch(i){return!1}}yt=new WeakMap,xt=new WeakMap,wt=new WeakMap,kt=new WeakMap,_t=new WeakMap,Ct=new WeakMap,$t=new WeakMap,St=new WeakMap,Et=new WeakSet,At=function(e,t){if(rt(this,yt)){let r=rt(this,Ct).get(e);r||(r=document.createElement("style"),rt(this,Ct).set(e,r)),r.textContent=t.cssText}else{if(!this.host.shadowRoot||!t.styleSheet)return;rt(this,_t).set(e,t.styleSheet)}},Tt=new WeakSet,Mt=function(){if(rt(this,yt)){if(!this.host.shadowRoot)return;this.host.shadowRoot.querySelectorAll("style").forEach((e=>{e.remove()})),rt(this,Ct).forEach((e=>{var t;null==(t=this.host.shadowRoot)||t.appendChild(e)}))}else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...rt(this,wt),...Array.from(rt(this,_t).values())]}},zt=new WeakSet,jt=function(){if(!rt(this,xt)){if(rt(this,yt)){if(!this.host.shadowRoot)return;this.host.shadowRoot.querySelectorAll("style").forEach((e=>{rt(this,$t).push(e),rt(this,St).push(e.cloneNode(!0))}))}else this.host.shadowRoot&&0===rt(this,wt).length&&(ot(this,wt,[...this.host.shadowRoot.adoptedStyleSheets||[]]),ot(this,kt,[...rt(this,wt)]));ot(this,xt,!0)}};Pt=new WeakMap,Dt=new WeakMap,Vt=new WeakMap,Ht=new WeakMap,Wt=new WeakSet,Nt=function(e,t){let r=rt(this,Vt).get(e);r||(r=document.createElement("style"),rt(this,Vt).set(e,r)),r.textContent=t,document.head.appendChild(r)},Rt=new WeakSet,Ft=function(e,t){rt(this,Dt).set(e,t),document.adoptedStyleSheets=[...rt(this,Ht),...Array.from(rt(this,Dt).values())]};var Ut=class _GlobalStylesRegistry{constructor(){nt(this,Wt),nt(this,Rt),nt(this,Pt,!Bt()),nt(this,Dt,new Map),nt(this,Vt,new Map),nt(this,Ht,document.adoptedStyleSheets||[])}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new _GlobalStylesRegistry),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(e,t){if(rt(this,Pt)){const r=Array.isArray(t)?t.map((e=>e.toString())).join(""):t.toString();it(this,Wt,Nt).call(this,e,r)}else t.styleSheet&&it(this,Rt,Ft).call(this,e,t.styleSheet)}},Zt="/**\n * Do not edit directly\n * Generated on Wed, 13 Nov 2024 14:13:01 GMT\n */\n\ncolor-scheme: dark;\n  --gds-color-l1-background-primary: #0e0e0e;\n  --gds-color-l1-background-tertiary: #d7d7d7;\n  --gds-color-l1-background-secondary: #131313;\n  --gds-color-l1-content-positive: #54b561;\n  --gds-color-l1-content-negative: #a63e2a;\n  --gds-color-l1-content-primary: #d7d7d7;\n  --gds-color-l1-content-secondary: #ababab;\n  --gds-color-l1-content-tertiary: #1b1b1b;\n  --gds-color-l2-background-primary: #242424;\n  --gds-color-l2-background-secondary: #242424;\n  --gds-color-l2-background-tertiary: #d7d7d7;\n  --gds-color-l2-background-positive: #1d3f22;\n  --gds-color-l2-background-negative: #4a1c13;\n  --gds-color-l2-background-notice: #152c41;\n  --gds-color-l2-background-warning: #4c3212;\n  --gds-color-l2-background-information: #353535;\n  --gds-color-l2-background-copper-01: #f2efeb;\n  --gds-color-l2-background-copper-02: #332a18;\n  --gds-color-l2-background-purple-01: #f3eff7;\n  --gds-color-l2-background-purple-02: #372b40;\n  --gds-color-l2-background-green-01: #ecf6ed;\n  --gds-color-l2-background-green-02: #1d3f22;\n  --gds-color-l2-background-blue-01: #eaf0f7;\n  --gds-color-l2-background-blue-02: #152c41;\n  --gds-color-l2-content-primary: #d7d7d7;\n  --gds-color-l2-content-secondary: #ababab;\n  --gds-color-l2-content-tertiary: #1b1b1b;\n  --gds-color-l2-content-positive: #54b561;\n  --gds-color-l2-content-negative: #ee8375;\n  --gds-color-l2-content-warning: #f3b274;\n  --gds-color-l2-content-notice: #78a3d5;\n  --gds-color-l2-content-infomation: #d7d7d7;\n  --gds-color-l2-content-copper-01: #1b1b1b;\n  --gds-color-l2-content-copper-02: #ffffff;\n  --gds-color-l2-content-purple-01: #1b1b1b;\n  --gds-color-l2-content-purple-02: #ffffff;\n  --gds-color-l2-content-green-01: #1b1b1b;\n  --gds-color-l2-content-green-02: #ffffff;\n  --gds-color-l2-content-blue-01: #1b1b1b;\n  --gds-color-l2-content-blue-02: #ffffff;\n  --gds-color-l2-border-primary: #353535;\n  --gds-color-l2-border-secondary: #5e5e5e;\n  --gds-color-l2-border-tertiary: #2c2c2c;\n  --gds-color-l2-border-quarternary: #d7d7d7;\n  --gds-color-l2-border-inversed: #1b1b1b;\n  --gds-color-l3-background-primary: #d7d7d7;\n  --gds-color-l3-background-secondary: #353535;\n  --gds-color-l3-background-tertiary: #424242;\n  --gds-color-l3-background-quarternary: #0e0e0e;\n  --gds-color-l3-background-positive: #54b561;\n  --gds-color-l3-background-positive-secondary: #25512b;\n  --gds-color-l3-background-positive-badge: #306938;\n  --gds-color-l3-background-negative: #c04831;\n  --gds-color-l3-background-negative-secondary: #602418;\n  --gds-color-l3-background-negative-badge: #4A1C13;\n  --gds-color-l3-background-notice: #78a3d5;\n  --gds-color-l3-background-notice-secondary: #1A3853;\n  --gds-color-l3-background-notice-badge: #214769;\n  --gds-color-l3-background-warning: #f3b274;\n  --gds-color-l3-background-warning-secondary: #624017;\n  --gds-color-l3-background-warning-badge: #744C1B;\n  --gds-color-l3-background-information: #d7d7d7;\n  --gds-color-l3-background-information-secondary: #424242;\n  --gds-color-l3-background-information-badge: #616161;\n  --gds-color-l3-background-buy: #3571a6;\n  --gds-color-l3-background-copper-01: #e4ded5;\n  --gds-color-l3-background-copper-02: #42361f;\n  --gds-color-l3-background-purple-01: #e7deee;\n  --gds-color-l3-background-purple-02: #473752;\n  --gds-color-l3-background-green-01: #d7edd9;\n  --gds-color-l3-background-green-02: #25512b;\n  --gds-color-l3-background-blue-01: #d3dfef;\n  --gds-color-l3-background-blue-02: #1a3853;\n  --gds-color-l3-background-disabled: #181818;\n  --gds-color-l3-background-disabled-secondary: #1b1b1b;\n  --gds-color-l3-content-primary: #1b1b1b;\n  --gds-color-l3-content-secondary: #ababab;\n  --gds-color-l3-content-tertiary: #d7d7d7;\n  --gds-color-l3-content-notice: #78a3d5;\n  --gds-color-l3-content-warning: #f3b274;\n  --gds-color-l3-content-information: #d7d7d7;\n  --gds-color-l3-content-buy: #ffffff;\n  --gds-color-l3-content-copper-01: #1b1b1b;\n  --gds-color-l3-content-copper-02: #ffffff;\n  --gds-color-l3-content-purple-01: #1b1b1b;\n  --gds-color-l3-content-purple-02: #ffffff;\n  --gds-color-l3-content-green-01: #1b1b1b;\n  --gds-color-l3-content-green-02: #ffffff;\n  --gds-color-l3-content-blue-01: #1b1b1b;\n  --gds-color-l3-content-blue-02: #ffffff;\n  --gds-color-l3-content-disabled: #5e5e5e;\n  --gds-color-l3-content-positive: #54b561;\n  --gds-color-l3-content-negative: #ee8375;\n  --gds-color-l3-border-primary: #d7d7d7;\n  --gds-color-l3-border-secondary: #ababab;\n  --gds-color-l3-border-tertiary: #1b1b1b;\n  --gds-color-l3-border-negative: #ee8375;\n  --gds-color-l3-states-dark-hover: #ffffff 10%;\n  --gds-color-l3-states-dark-pressed: #ffffff 20%;\n  --gds-color-l3-states-light-hover: #d7d7d7 10%;\n  --gds-color-l3-states-light-pressed: #d7d7d7 20%;\n  --gds-color-l3-states-positive-hover: #54b561 10%;\n  --gds-color-l3-states-positive-pressed: #54b561 20%;\n  --gds-color-l3-states-negative-hover: #ee8375 10%;\n  --gds-color-l3-states-negative-pressed: #ee8375 20%;\n",Gt="/**\n * Do not edit directly\n * Generated on Wed, 13 Nov 2024 14:13:01 GMT\n */\n\ncolor-scheme: light;\n  --gds-color-l1-background-primary: #ffffff;\n  --gds-color-l1-background-tertiary: #1b1b1b;\n  --gds-color-l1-background-secondary: #eeeeee;\n  --gds-color-l1-content-positive: #35723d;\n  --gds-color-l1-content-negative: #a63e2a;\n  --gds-color-l1-content-primary: #1b1b1b;\n  --gds-color-l1-content-secondary: #5e5e5e;\n  --gds-color-l1-content-tertiary: #ffffff;\n  --gds-color-l2-background-primary: #f3f3f3;\n  --gds-color-l2-background-secondary: #ffffff;\n  --gds-color-l2-background-tertiary: #242424;\n  --gds-color-l2-background-positive: #ecf6ed;\n  --gds-color-l2-background-negative: #fcecea;\n  --gds-color-l2-background-notice: #eaf0f7;\n  --gds-color-l2-background-warning: #fcecbc;\n  --gds-color-l2-background-information: #e2e2e2;\n  --gds-color-l2-background-copper-01: #f2efeb;\n  --gds-color-l2-background-copper-02: #332a18;\n  --gds-color-l2-background-purple-01: #f3eff7;\n  --gds-color-l2-background-purple-02: #372b40;\n  --gds-color-l2-background-green-01: #ecf6ed;\n  --gds-color-l2-background-green-02: #1d3f22;\n  --gds-color-l2-background-blue-01: #eaf0f7;\n  --gds-color-l2-background-blue-02: #152c41;\n  --gds-color-l2-content-primary: #1b1b1b;\n  --gds-color-l2-content-secondary: #5e5e5e;\n  --gds-color-l2-content-tertiary: #ffffff;\n  --gds-color-l2-content-positive: #35723d;\n  --gds-color-l2-content-negative: #a63e2a;\n  --gds-color-l2-content-warning: #65581e;\n  --gds-color-l2-content-notice: #005fac;\n  --gds-color-l2-content-infomation: #1b1b1b;\n  --gds-color-l2-content-copper-01: #1b1b1b;\n  --gds-color-l2-content-copper-02: #ffffff;\n  --gds-color-l2-content-purple-01: #1b1b1b;\n  --gds-color-l2-content-purple-02: #ffffff;\n  --gds-color-l2-content-green-01: #1b1b1b;\n  --gds-color-l2-content-green-02: #ffffff;\n  --gds-color-l2-content-blue-01: #1b1b1b;\n  --gds-color-l2-content-blue-02: #ffffff;\n  --gds-color-l2-border-primary: #d7d7d7;\n  --gds-color-l2-border-secondary: #6f6f6f;\n  --gds-color-l2-border-tertiary: #f9f9f9;\n  --gds-color-l2-border-quarternary: #1b1b1b;\n  --gds-color-l2-border-inversed: #ffffff;\n  --gds-color-l3-background-primary: #1b1b1b;\n  --gds-color-l3-background-secondary: #e2e2e2;\n  --gds-color-l3-background-tertiary: #d7d7d7;\n  --gds-color-l3-background-quarternary: #ffffff;\n  --gds-color-l3-background-positive: #35723d;\n  --gds-color-l3-background-positive-secondary: #d7edd9;\n  --gds-color-l3-background-positive-badge: #d7edd9;\n  --gds-color-l3-background-negative: #a63e2a;\n  --gds-color-l3-background-negative-secondary: #fcecea;\n  --gds-color-l3-background-negative-badge: #f8d6d3;\n  --gds-color-l3-background-notice: #005fac;\n  --gds-color-l3-background-notice-secondary: #d3dfef;\n  --gds-color-l3-background-notice-badge: #d3dfef;\n  --gds-color-l3-background-warning: #65581e;\n  --gds-color-l3-background-warning-secondary: #fadf7b;\n  --gds-color-l3-background-warning-badge: #fadf7b;\n  --gds-color-l3-background-information: #1b1b1b;\n  --gds-color-l3-background-information-secondary: #d7d7d7;\n  --gds-color-l3-background-information-badge: #d7d7d7;\n  --gds-color-l3-background-buy: #2e6290;\n  --gds-color-l3-background-copper-01: #e4ded5;\n  --gds-color-l3-background-copper-02: #42361f;\n  --gds-color-l3-background-purple-01: #e7deee;\n  --gds-color-l3-background-purple-02: #473752;\n  --gds-color-l3-background-green-01: #d7edd9;\n  --gds-color-l3-background-green-02: #25512b;\n  --gds-color-l3-background-blue-01: #d3dfef;\n  --gds-color-l3-background-blue-02: #1a3853;\n  --gds-color-l3-background-disabled: #f9f9f9;\n  --gds-color-l3-background-disabled-secondary: #f3f3f3;\n  --gds-color-l3-content-primary: #ffffff;\n  --gds-color-l3-content-secondary: #5e5e5e;\n  --gds-color-l3-content-tertiary: #1b1b1b;\n  --gds-color-l3-content-notice: #005fac;\n  --gds-color-l3-content-warning: #65581e;\n  --gds-color-l3-content-information: #1b1b1b;\n  --gds-color-l3-content-buy: #ffffff;\n  --gds-color-l3-content-copper-01: #1b1b1b;\n  --gds-color-l3-content-copper-02: #ffffff;\n  --gds-color-l3-content-purple-01: #1b1b1b;\n  --gds-color-l3-content-purple-02: #ffffff;\n  --gds-color-l3-content-green-01: #1b1b1b;\n  --gds-color-l3-content-green-02: #ffffff;\n  --gds-color-l3-content-blue-01: #1b1b1b;\n  --gds-color-l3-content-blue-02: #ffffff;\n  --gds-color-l3-content-disabled: #ababab;\n  --gds-color-l3-content-positive: #35723d;\n  --gds-color-l3-content-negative: #a63e2a;\n  --gds-color-l3-border-primary: #1b1b1b;\n  --gds-color-l3-border-secondary: #6f6f6f;\n  --gds-color-l3-border-tertiary: #d7d7d7;\n  --gds-color-l3-border-negative: #a63e2a;\n  --gds-color-l3-states-dark-hover: #ffffff 10%;\n  --gds-color-l3-states-dark-pressed: #ffffff 20%;\n  --gds-color-l3-states-light-hover: #1b1b1b 10%;\n  --gds-color-l3-states-light-pressed: #1b1b1b 20%;\n  --gds-color-l3-states-positive-hover: #35723d 10%;\n  --gds-color-l3-states-positive-pressed: #35723d 20%;\n  --gds-color-l3-states-negative-hover: #a63e2a 10%;\n  --gds-color-l3-states-negative-pressed: #a63e2a 20%;\n",Yt=[me("/**\n * Do not edit directly\n * Generated on Wed, 13 Nov 2024 14:13:01 GMT\n */\n\n:host {\n  --gds-ref-color-neutral-000: #ffffff;\n  --gds-ref-color-neutral-050: #f8f8f8;\n  --gds-ref-color-neutral-100: #e9e9e9;\n  --gds-ref-color-neutral-150: #eeeeee;\n  --gds-ref-color-neutral-200: #dedede;\n  --gds-ref-color-neutral-250: #cecece;\n  --gds-ref-color-neutral-300: #ababab;\n  --gds-ref-color-neutral-350: #adadad;\n  --gds-ref-color-neutral-400: #868686;\n  --gds-ref-color-neutral-450: #757575;\n  --gds-ref-color-neutral-500: #494949;\n  --gds-ref-color-neutral-525: #464646;\n  --gds-ref-color-neutral-550: #333333;\n  --gds-ref-color-neutral-600: #2c2c2c;\n  --gds-ref-color-neutral-650: #272727;\n  --gds-ref-color-neutral-700: #222222;\n  --gds-ref-color-neutral-750: #1a1a1a;\n  --gds-ref-color-neutral-800: #121212;\n  --gds-ref-color-neutral-1000: #000000;\n  --gds-ref-color-blue-100: #58b8ee;\n  --gds-ref-color-blue-200: #41b0ee;\n  --gds-ref-color-blue-300: #00adff;\n  --gds-ref-color-blue-400: #2c9cd9;\n  --gds-ref-color-blue-500: #0092e1;\n  --gds-ref-color-blue-600: #007ac7;\n  --gds-ref-color-blue-700: #0062bc;\n  --gds-ref-color-green-100: #75b44a;\n  --gds-ref-color-green-200: #60cd18;\n  --gds-ref-color-green-300: #45b400;\n  --gds-ref-color-green-400: #308800;\n  --gds-ref-color-red-100: #f7706d;\n  --gds-ref-color-red-200: #ff594f;\n  --gds-ref-color-red-300: #f03529;\n  --gds-ref-color-red-400: #d81a1a;\n  --gds-ref-color-red-500: #c82a29;\n  --gds-ref-color-red-600: #bb000c;\n  --gds-ref-color-red-700: #9f000a;\n  --gds-ref-color-red-800: #9e2120;\n  --gds-ref-color-purple-100: #ad91dc;\n  --gds-ref-color-purple-200: #7e52cc;\n  --gds-ref-color-purple-300: #673ab6;\n  --gds-ref-color-purple-400: #4f2C99;\n  --gds-ref-color-purple-500: #4a328f;\n  --gds-ref-color-purple-600: #3f2587;\n  --gds-ref-color-yellow-100: #ffe182;\n  --gds-ref-color-yellow-200: #ffc500;\n  --gds-ref-color-yellow-300: #ffb400;\n  --gds-ref-color-yellow-400: #f8a000;\n  --gds-ref-color-yellow-500: #f0be47;\n  --gds-ref-color-yellow-600: #ebab39;\n  --gds-ref-color-blue-5: #001127;\n  --gds-ref-color-blue-10: #001C39;\n  --gds-ref-color-blue-15: #00264B;\n  --gds-ref-color-blue-20: #00315D;\n  --gds-ref-color-blue-25: #003C70;\n  --gds-ref-color-blue-30: #004883;\n  --gds-ref-color-blue-35: #005397;\n  --gds-ref-color-blue-40: #005FAC;\n  --gds-ref-color-blue-45: #006CC1;\n  --gds-ref-color-blue-50: #0078D7;\n  --gds-ref-color-blue-55: #0085EC;\n  --gds-ref-color-blue-60: #1992FF;\n  --gds-ref-color-blue-65: #4EA0FF;\n  --gds-ref-color-blue-70: #6FAEFF;\n  --gds-ref-color-blue-75: #8ABBFF;\n  --gds-ref-color-blue-80: #A4C9FF;\n  --gds-ref-color-blue-85: #BCD6FF;\n  --gds-ref-color-blue-90: #D4E3FF;\n  --gds-ref-color-blue-95: #EBF1FF;\n  --gds-ref-color-blue-98: #F8F9FF;\n  --gds-ref-color-green-5: #001505;\n  --gds-ref-color-green-10: #00210E;\n  --gds-ref-color-green-15: #002D10;\n  --gds-ref-color-green-20: #003916;\n  --gds-ref-color-green-25: #00461D;\n  --gds-ref-color-green-30: #005323;\n  --gds-ref-color-green-35: #00602A;\n  --gds-ref-color-green-40: #006D31;\n  --gds-ref-color-green-45: #007B38;\n  --gds-ref-color-green-50: #138942;\n  --gds-ref-color-green-55: #29964D;\n  --gds-ref-color-green-60: #39A459;\n  --gds-ref-color-green-65: #48B265;\n  --gds-ref-color-green-70: #57C071;\n  --gds-ref-color-green-75: #65CE7E;\n  --gds-ref-color-green-80: #73DC8A;\n  --gds-ref-color-green-85: #81EA97;\n  --gds-ref-color-green-90: #8FF9A4;\n  --gds-ref-color-green-95: #C5FFCA;\n  --gds-ref-color-green-98: #EAFFE8;\n  --gds-ref-color-black: #000000;\n  --gds-ref-color-white: #FFFFFF;\n  --gds-ref-color-grey-5: #0D0D0C;\n  --gds-ref-color-grey-10: #1B1B18;\n  --gds-ref-color-grey-15: #282825;\n  --gds-ref-color-grey-20: #353531;\n  --gds-ref-color-grey-25: #42423D;\n  --gds-ref-color-grey-30: #505049;\n  --gds-ref-color-grey-35: #5D5D56;\n  --gds-ref-color-grey-40: #6A6A62;\n  --gds-ref-color-grey-45: #77776E;\n  --gds-ref-color-grey-50: #85857A;\n  --gds-ref-color-grey-55: #919188;\n  --gds-ref-color-grey-60: #9D9D95;\n  --gds-ref-color-grey-65: #A9A9A2;\n  --gds-ref-color-grey-70: #B6B6AF;\n  --gds-ref-color-grey-75: #C2C2BD;\n  --gds-ref-color-grey-80: #CECECA;\n  --gds-ref-color-grey-85: #DADAD7;\n  --gds-ref-color-grey-90: #E7E7E4;\n  --gds-ref-color-grey-95: #F3F3F2;\n  --gds-ref-color-grey-98: #F9F9F9;\n  --gds-ref-color-orange-5: #1A0F00;\n  --gds-ref-color-orange-10: #271900;\n  --gds-ref-color-orange-15: #352200;\n  --gds-ref-color-orange-20: #422C00;\n  --gds-ref-color-orange-25: #503700;\n  --gds-ref-color-orange-30: #503700;\n  --gds-ref-color-orange-35: #6E4C00;\n  --gds-ref-color-orange-40: #7D5700;\n  --gds-ref-color-orange-45: #8D6300;\n  --gds-ref-color-orange-50: #9D6E00;\n  --gds-ref-color-orange-55: #AE7A00;\n  --gds-ref-color-orange-60: #BE8600;\n  --gds-ref-color-orange-65: #CF9300;\n  --gds-ref-color-orange-70: #E19F00;\n  --gds-ref-color-orange-75: #F2AC00;\n  --gds-ref-color-orange-80: #FFBA30;\n  --gds-ref-color-orange-85: #FFCC77;\n  --gds-ref-color-orange-90: #FFDEAB;\n  --gds-ref-color-orange-95: #FFEED9;\n  --gds-ref-color-orange-98: #FFF8F3;\n  --gds-ref-color-red-5: #2B0200;\n  --gds-ref-color-red-10: #3E0400;\n  --gds-ref-color-red-15: #510700;\n  --gds-ref-color-red-20: #650B00;\n  --gds-ref-color-red-25: #790F00;\n  --gds-ref-color-red-30: #8E1400;\n  --gds-ref-color-red-35: #A31800;\n  --gds-ref-color-red-40: #BA1D00;\n  --gds-ref-color-red-45: #D02200;\n  --gds-ref-color-red-50: #E23010;\n  --gds-ref-color-red-55: #F53E1D;\n  --gds-ref-color-red-60: #FF5636;\n  --gds-ref-color-red-65: #FF7257;\n  --gds-ref-color-red-70: #FF8A73;\n  --gds-ref-color-red-75: #FFA08D;\n  --gds-ref-color-red-80: #FFB4A5;\n  --gds-ref-color-red-85: #FFC8BC;\n  --gds-ref-color-red-90: #FFDAD3;\n  --gds-ref-color-red-95: #FFEDE9;\n  --gds-ref-color-red-98: #FFF8F6;\n}\n"),me("/**\n * Do not edit directly\n * Generated on Wed, 13 Nov 2024 14:13:01 GMT\n */\n\n:host {\n  --gds-space-max: 999px;\n  --gds-space-8xl: 120px;\n  --gds-space-7xl: 112px;\n  --gds-space-6xl: 96px;\n  --gds-space-5xl: 80px;\n  --gds-space-4xl: 64px;\n  --gds-space-3xl: 48px;\n  --gds-space-2xl: 40px;\n  --gds-space-xl: 32px;\n  --gds-space-l: 24px;\n  --gds-space-m: 16px;\n  --gds-space-s: 12px;\n  --gds-space-xs: 8px;\n  --gds-space-2xs: 4px;\n  --gds-space-3xs: 2px;\n  --gds-space-4xs: 1px;\n  --gds-space-0: 0px;\n}\n"),me("/**\n * Do not edit directly\n * Generated on Wed, 13 Nov 2024 14:13:01 GMT\n */\n\n:host {\n  --gds-vp-3xl: 3840px;\n  --gds-vp-2xl: 2560px;\n  --gds-vp-xl: 1440px;\n  --gds-vp-l: 1024px;\n  --gds-vp-m: 768px;\n  --gds-vp-s: 430px;\n  --gds-vp-xs: 375px;\n}\n"),me("/**\n * Do not edit directly\n * Generated on Wed, 13 Nov 2024 14:13:01 GMT\n */\n\n:host {\n  --gds-text-weight-bold: 700;\n  --gds-text-weight-medium: 500;\n  --gds-text-weight-book: 450;\n  --gds-text-weight-regular: 400;\n  --gds-text-weight-light: 300;\n  --gds-text-size-preamble-xs: 16px;\n  --gds-text-size-preamble-s: 18px;\n  --gds-text-size-preamble-m: 20px;\n  --gds-text-size-preamble-l: 24px;\n  --gds-text-size-preamble-xl: 28px;\n  --gds-text-size-preamble-2xl: 32px;\n  --gds-text-size-display-s: 32px;\n  --gds-text-size-display-m: 36px;\n  --gds-text-size-display-l: 48px;\n  --gds-text-size-display-xl: 64px;\n  --gds-text-size-display-2xl: 82px;\n  --gds-text-size-body-s: 14px;\n  --gds-text-size-body-m: 16px;\n  --gds-text-size-body-l: 20px;\n  --gds-text-size-detail-xs: 12px;\n  --gds-text-size-detail-s: 14px;\n  --gds-text-size-detail-m: 16px;\n  --gds-text-size-heading-2xl: 14px;\n  --gds-text-size-heading-xs: 16px;\n  --gds-text-size-heading-s: 20px;\n  --gds-text-size-heading-m: 24px;\n  --gds-text-size-heading-l: 28px;\n  --gds-text-size-heading-xl: 32px;\n  --gds-text-line-height-preamble-xs: 24px;\n  --gds-text-line-height-preamble-s: 26px;\n  --gds-text-line-height-preamble-m: 28px;\n  --gds-text-line-height-preamble-l: 32px;\n  --gds-text-line-height-preamble-xl: 36px;\n  --gds-text-line-height-preamble-2xl: 40px;\n  --gds-text-line-height-display-s: 40px;\n  --gds-text-line-height-display-m: 44px;\n  --gds-text-line-height-display-l: 56px;\n  --gds-text-line-height-display-xl: 72px;\n  --gds-text-line-height-display-2xl: 90px;\n  --gds-text-line-height-body-s: 20px;\n  --gds-text-line-height-body-m: 24px;\n  --gds-text-line-height-body-l: 26px;\n  --gds-text-line-height-detail-xs: 16px;\n  --gds-text-line-height-detail-s: 18px;\n  --gds-text-line-height-detail-m: 20px;\n  --gds-text-line-height-heading-2xs: 20px;\n  --gds-text-line-height-heading-xs: 24px;\n  --gds-text-line-height-heading-s: 28px;\n  --gds-text-line-height-heading-m: 32px;\n  --gds-text-line-height-heading-l: 40px;\n  --gds-text-line-height-heading-xl: 44px;\n}\n"),me("/**\n * Do not edit directly\n * Generated on Wed, 13 Nov 2024 14:13:01 GMT\n */\n\n:host {\n  --gds-sys-motion-duration-slowest: 1.5s;\n  --gds-sys-motion-duration-slow: 1s;\n  --gds-sys-motion-duration-default: .5s;\n  --gds-sys-motion-duration-fast: .4s;\n  --gds-sys-motion-duration-fastest: .2s;\n  --gds-sys-motion-easing-linear: cubic-bezier(0, 0, 1, 1);\n  --gds-sys-motion-easing-ease-out: cubic-bezier(0.22, 1, 0.36, 1);\n  --gds-sys-motion-easing-ease-in-out: cubic-bezier(0.83, 0, 0.17, 1);\n  --gds-sys-motion-easing-ease-in: cubic-bezier(0.64, 0, 0.78, 0);\n}\n"),me("/**\n * Do not edit directly\n * Generated on Wed, 13 Nov 2024 14:13:01 GMT\n */\n\n:host {\n--gds-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 0px 1px 0px rgba(0, 0, 0, 0.1);\n--gds-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);\n--gds-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);\n--gds-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03);\n--gds-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03);\n}\n")];Ut.instance.injectGlobalStyles("root-tokens",be`
    :root,
    :root[gds-theme='light'] {
      ${me(Gt)}
    }
    :root[gds-theme='dark'] {
      ${me(Zt)}
    }
  `);r(326);var qt=class extends lit_element_r{constructor(){super(),this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new It(this)}connectedCallback(){var e;super.connectedCallback(),this.setAttribute("gds-element",(null==(e=this.gdsElementName)?void 0:e.toString())||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}};et([He()],qt.prototype,"_isUsingTransitionalStyles",2);var Kt=be`
  :host {
    box-sizing: border-box;
  }
  :host(:focus-visible) {
    outline-color: color-mix(in srgb, currentcolor, #000 100%);
    outline-offset: var(--gds-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-space-3xs);
  }
`,Xt=class extends qt{constructor(){super(...arguments),this.display="block",this.level="2"}render(){return ht`<slot></slot>`}};Xt.styles=[Yt,Kt],et([Lt({valueTemplate:e=>e})],Xt.prototype,"display",2),et([Ve()],Xt.prototype,"level",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"place-items",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"place-content",2),et([Lt({valueTemplate:function(e){const[t,r]=e.split("/");return((e,t)=>(e=>{const t=e.trim();return t.startsWith("#")||t.startsWith("rgb(")||t.startsWith("rgba(")||t.startsWith("hsl(")||t.startsWith("hsla(")})(e)?t?`color-mix(in srgb, ${e} ${100*parseFloat(t)}%, transparent 0%)`:e:`var(--gds-color-l${this.level}-content-${e})`)(t,r)}})],Xt.prototype,"color",2),et([Lt({valueTemplate:function(e){const[t,r]=e.split("/");return((e,t)=>(e=>{const t=e.trim();return t.startsWith("#")||t.startsWith("rgb(")||t.startsWith("rgba(")||t.startsWith("hsl(")||t.startsWith("hsla(")})(e)?t?`color-mix(in srgb, ${e} ${100*parseFloat(t)}%, transparent 0%)`:e:((e,t)=>`var(--gds-color-l${e}-background-${t})`)(this.level,e))(t,r)}})],Xt.prototype,"background",2),et([Lt({valueTemplate:function(e){const[t,r]=e.split("/");return`var(--gds-space-${t}) solid ${r?(e=>(e=>{const t=e.trim();return t.startsWith("#")||t.startsWith("rgb(")||t.startsWith("rgba(")||t.startsWith("hsl(")||t.startsWith("hsla(")})(e)?e:((e,t)=>`var(--gds-color-l${e}-border-${t})`)(this.level,e))(r):"currentColor"}`},styleTemplate:(e,t)=>{const r=t[0];return`\n        border-top: ${r};\n        border-right: ${t.length>1?t[1]:r};\n        border-bottom: ${t.length>2?t[2]:r};\n        border-left: ${t.length>3?t[3]:r};\n      `}})],Xt.prototype,"border",2),et([Lt({valueTemplate:function(e){const[t]=e.split("/");return t?(e=>(e=>{const t=e.trim();return t.startsWith("#")||t.startsWith("rgb(")||t.startsWith("rgba(")||t.startsWith("hsl(")||t.startsWith("hsla(")})(e)?e:((e,t)=>`var(--gds-color-l${e}-border-${t})`)(this.level,e))(t):"currentColor"},styleTemplate:(e,t)=>{const r=t[0];return`\n        border-top-color: ${r};\n        border-right-color: ${t.length>1?t[1]:r};\n        border-bottom-color: ${t.length>2?t[2]:r};\n        border-left-color: ${t.length>3?t[3]:r};\n      `}})],Xt.prototype,"border-color",2),et([Lt({styleTemplate:(e,t)=>{const r=t[0];return`\n        border-top-width: ${r};\n        border-right-width: ${t.length>1?t[1]:r};\n        border-bottom-width: ${t.length>2?t[2]:r};\n        border-left-width: ${t.length>3?t[3]:r};\n        border-style: solid;\n      `}})],Xt.prototype,"border-width",2),et([Lt({valueTemplate:e=>`var(--gds-space-${e})`})],Xt.prototype,"border-radius",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"opacity",2),et([Lt()],Xt.prototype,"padding",2),et([Lt()],Xt.prototype,"padding-inline",2),et([Lt()],Xt.prototype,"padding-block",2),et([Lt({valueTemplate:e=>{const t="pos"==(e.startsWith("-")?"neg":"pos")?`var(--gds-space-${e})`:`calc(var(--gds-space-${e.substring(1)}) * -1)`;return"auto"===e?"auto":t},styleTemplate:(e,t)=>{const r=e=>"auto"===e?"auto":`${e}`,o=r(t[0]),i=t.length>1?r(t[1]):o;return`margin: ${o} ${i} ${t.length>2?r(t[2]):o} ${t.length>3?r(t[3]):i};`}})],Xt.prototype,"margin",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"position",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"inset",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"overflow",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"height",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"max-height",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"min-height",2),et([Lt()],Xt.prototype,"block-size",2),et([Lt()],Xt.prototype,"min-block-size",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"width",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"max-width",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"min-width",2),et([Lt()],Xt.prototype,"inline-size",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"cursor",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"pointer-events",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"user-select",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"z-index",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"transform",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"transform-style",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"transition",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"transition-behavior",2),et([Lt({valueTemplate:e=>e})],Xt.prototype,"animation",2),et([Lt({valueTemplate:e=>`${e}`,styleTemplate:(e,t)=>{const r=t[0];return`font-size: var(--gds-text-size-${r});`+`line-height: var(--gds-text-line-height-${r});`}})],Xt.prototype,"font-size",2),et([Lt({property:"font-weight",valueTemplate:e=>`var(--gds-text-weight-${e})`})],Xt.prototype,"font-weight",2),et([Lt({valueTemplate:e=>`${e}`})],Xt.prototype,"grid-column",2),et([Lt({valueTemplate:e=>`${e}`})],Xt.prototype,"grid-row",2),et([Lt({valueTemplate:e=>`${e}`})],Xt.prototype,"flex",2),Xt=et([lt("gds-container")],Xt);const Jt=Symbol.for(""),Qt=e=>{if(e?.r===Jt)return e?._$litStatic$},er=(e,...t)=>({_$litStatic$:t.reduce(((t,r,o)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[o+1]),e[0]),r:Jt}),tr=new Map,rr=e=>(t,...r)=>{const o=r.length;let i,s;const a=[],l=[];let d,c=0,u=!1;for(;c<o;){for(d=t[c];c<o&&void 0!==(s=r[c],i=Qt(s));)d+=i+t[++c],u=!0;c!==o&&l.push(s),a.push(d),c++}if(c===o&&a.push(t[o]),u){const e=a.join("$$lit$$");void 0===(t=tr.get(e))&&(a.raw=a,tr.set(e,t=a)),r=l}return e(t,...r)},nr=rr(ee);rr(te),rr(re);var or=be`
  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`,ir=class extends Xt{constructor(){super(...arguments),this.level="2",this.tag="span"}render(){const e=(e=>({_$litStatic$:e,r:Jt}))(encodeURI(this.tag));return nr`<${e} tag><slot></slot></${e}>`}};ir.styles=[Yt,pt,or],et([Ve()],ir.prototype,"level",2),et([Ve({type:String})],ir.prototype,"tag",2),et([Lt({valueTemplate:e=>`${e}`,selector:"[tag]",styleTemplate:(e,t)=>{const r=t[0];return`font-size: var(--gds-text-size-${r});`+`line-height: var(--gds-text-line-height-${r});`}})],ir.prototype,"font-size",2),et([Lt({property:"font-weight",selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],ir.prototype,"font-weight",2),et([Lt({property:"text-wrap",valueTemplate:e=>e})],ir.prototype,"text-wrap",2),et([Lt({property:"text-transform",valueTemplate:e=>e})],ir.prototype,"text-transform",2),et([Lt({property:"max-width",valueTemplate:e=>`${e}ch`})],ir.prototype,"max-width",2),et([Lt({property:"min-width",valueTemplate:e=>`${e}ch`})],ir.prototype,"min-width",2),et([Lt({property:"text-align",valueTemplate:e=>e})],ir.prototype,"text-align",2),et([Lt({valueTemplate:e=>e,selector:"[tag]"})],ir.prototype,"text-decoration",2),et([Lt({valueTemplate:e=>e,styleTemplate:(e,t)=>`overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: ${t[0]};\n      -webkit-box-orient: vertical;`})],ir.prototype,"lines",2),et([Lt({property:"color",valueTemplate:function(e){const[t,r]=e.split("/");return r?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-content-${t}) ${100*parseFloat(r)}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-content-${t})`}})],ir.prototype,"color",2),ir=et([lt("gds-text")],ir);var sr,ar,lr;sr=new WeakMap,ar=new WeakMap,lr=new WeakMap;var dr=class _TransitionalStyles{constructor(){nt(this,sr,new Map),nt(this,ar,new Map),nt(this,lr,!Bt())}static get instance(){var e;return(null==(e=globalThis.__gdsTransitionalStyles)?void 0:e[st])||(globalThis.__gdsTransitionalStyles=Qe(Je({},globalThis.__gdsTransitionalStyles),{[st]:new _TransitionalStyles})),globalThis.__gdsTransitionalStyles[st]}apply(e,t){if(!e.shadowRoot)return;const r=rt(this,sr).get(t);r&&(rt(this,ar).set(t,e),this.applyToElement(t,r))}applyToElement(e,t){var r,o;const i=rt(this,ar).get(e);if(!i||!i.shadowRoot)return;const s=()=>{i._dynamicStylesController.clearInitial(),i._dynamicStylesController.inject("t-styles",me(t)),i._isUsingTransitionalStyles=!0},a=()=>{i._isUsingTransitionalStyles=!1,i._dynamicStylesController.clear("t-styles"),i._dynamicStylesController.restoreInitial()},l="[gds-element=gds-theme]";let d=i.getRootNode(),c=i.closest(l);for(;null===c&&d!==document;)c=null==(r=d.host)?void 0:r.closest(l),d=null==(o=d.host)?void 0:o.getRootNode();if(c){const e=c,t=()=>{"2023"===e.designVersion?a():s()};if(e.addEventListener("gds-design-version-changed",t),i.addEventListener("gds-element-disconnected",(()=>e.removeEventListener("gds-design-version-changed",t))),"2023"===e.designVersion)return void a()}s()}register(e,t){let r=t;rt(this,lr)&&(r=`@layer reset {\n        *:not(style, [gds-element]) {\n          all: revert;\n        }\n      }\n      ${t}`),rt(this,sr).set(e,r),this.applyToElement(e,r)}};var cr=be`
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
`,ur=class extends qt{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then((()=>dr.instance.apply(this,"gds-menu-heading")))}render(){return ee`<slot></slot>`}};ur.styles=cr,ur=et([lt("gds-menu-heading")],ur);const hr=(e,...t)=>({strTag:!0,strings:e,values:t}),pr=(e,t,r)=>{let o=e[0];for(let i=1;i<e.length;i++)o+=t[r?r[i-1]:i-1],o+=e[i];return o},gr=e=>{return"string"!=typeof(t=e)&&"strTag"in t?pr(e.strings,e.values):e;var t};let fr=gr,mr=!1;const br="lit-localize-status";class LocalizeController{constructor(e){this.__litLocalizeEventHandler=e=>{"ready"===e.detail.status&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(br,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(br,this.__litLocalizeEventHandler)}}const vr=e=>e.addController(new LocalizeController(e)),yr=()=>(e,t)=>(e.addInitializer(vr),e);class Deferred{constructor(){this.settled=!1,this.promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t}))}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}const xr=[];for(let rp=0;rp<256;rp++)xr[rp]=(rp>>4&15).toString(16)+(15&rp).toString(16);function wr(e,t){return(t?"h":"s")+function(e){let t=0,r=8997,o=0,i=33826,s=0,a=40164,l=0,d=52210;for(let c=0;c<e.length;c++)r^=e.charCodeAt(c),t=435*r,o=435*i,s=435*a,l=435*d,s+=r<<8,l+=i<<8,o+=t>>>16,r=65535&t,s+=o>>>16,i=65535&o,d=l+(s>>>16)&65535,a=65535&s;return xr[d>>8]+xr[255&d]+xr[a>>8]+xr[255&a]+xr[i>>8]+xr[255&i]+xr[r>>8]+xr[255&r]}("string"==typeof e?e:e.join("\x1e"))}const kr=new WeakMap,_r=new Map;function Cr(e,t,r){if(e){const o=r?.id??function(e){const t="string"==typeof e?e:e.strings;let r=_r.get(t);void 0===r&&(r=wr(t,"string"!=typeof e&&!("strTag"in e)),_r.set(t,r));return r}(t),i=e[o];if(i){if("string"==typeof i)return i;if("strTag"in i)return pr(i.strings,t.values,i.values);{let e=kr.get(i);return void 0===e&&(e=i.values,kr.set(i,e)),{...i,values:e.map((e=>t.values[e]))}}}}return gr(t)}function $r(e){window.dispatchEvent(new CustomEvent(br,{detail:e}))}let Sr,Er,Ar,Tr,Mr,zr="",jr=new Deferred;jr.resolve();let Or=0;const Lr=e=>(function(e){if(mr)throw new Error("lit-localize can only be configured once");fr=e,mr=!0}(((e,t)=>Cr(Mr,e,t))),zr=Er=e.sourceLocale,Ar=new Set(e.targetLocales),Ar.add(e.sourceLocale),Tr=e.loadLocale,{getLocale:Pr,setLocale:Dr}),Pr=()=>zr,Dr=e=>{if(e===(Sr??zr))return jr.promise;if(!Ar||!Tr)throw new Error("Internal error");if(!Ar.has(e))throw new Error("Invalid locale code");Or++;const t=Or;Sr=e,jr.settled&&(jr=new Deferred),$r({status:"loading",loadingLocale:e});return(e===Er?Promise.resolve({templates:void 0}):Tr(e)).then((r=>{Or===t&&(zr=e,Sr=void 0,Mr=r.templates,$r({status:"ready",readyLocale:e}),jr.resolve())}),(r=>{Or===t&&($r({status:"error",errorLocale:e,errorMessage:r.toString()}),jr.reject(r))})),jr.promise},Vr=1,Hr=2,Wr=6,Nr=e=>(...t)=>({_$litDirective$:e,values:t});class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Rr=Nr(class extends directive_i{constructor(e){if(super(e),e.type!==Vr||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const e=!!t[o];e===this.st.has(o)||this.nt?.has(o)||(e?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return ne}});var Fr,Ir,Br,Ur=be`
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
`,Zr=class extends qt{constructor(){super(),nt(this,Fr),this.open=!1,this.buttonLabel=fr("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start"}connectedCallback(){super.connectedCallback(),dr.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",(e=>{this.open&&"Tab"==e.key&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then((e=>e.focus())))}))}render(){var e,t,r;return ht`<button
        id="trigger"
        class="icon border-0 small ${Rr({highlighted:this.open})}"
        aria-label=${null!=(e=this.buttonLabel)?e:this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
      >
        <slot name="trigger">
          ${this.showLabel?null!=(t=this.buttonLabel)?t:this.label:oe}
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
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        <gds-menu
          aria-label=${null!=(r=this.label)?r:this.buttonLabel}
          @gds-menu-item-click=${it(this,Fr,Ir)}
        >
          <slot></slot>
        </gds-menu>
      </gds-popover>`}};Fr=new WeakSet,Ir=function(){this.open=!1},Zr.styles=[Ur],Zr.shadowRootOptions={mode:"open",delegatesFocus:!0},et([Ve({type:Boolean,reflect:!0})],Zr.prototype,"open",2),et([Ve({attribute:"button-label"})],Zr.prototype,"buttonLabel",2),et([Ve({attribute:"show-label",type:Boolean})],Zr.prototype,"showLabel",2),et([Ve()],Zr.prototype,"label",2),et([Ve()],Zr.prototype,"placement",2),et([Fe("#trigger")],Zr.prototype,"elTriggerBtn",2),Zr=et([lt("gds-context-menu"),yr()],Zr);var Gr=class{constructor(e){nt(this,Br,(e=>{var t,r;const o=e.target;if(!this.host.navigableItems.includes(o))return;let i=!1;if("ArrowDown"===e.key){const e=this.host.navigableItems.indexOf(o)+1,t=this.host.navigableItems[e];null==t||t.focus(),i=!0}else if("ArrowUp"===e.key){const e=this.host.navigableItems.indexOf(o)-1,t=this.host.navigableItems[e];null==t||t.focus(),i=!0}else if("Home"===e.key)null==(t=this.host.navigableItems[0])||t.focus(),i=!0;else if("End"===e.key)null==(r=this.host.navigableItems[this.host.navigableItems.length-1])||r.focus(),i=!0;else{const t=e.key.toLowerCase();if(1!==t.length)return;if(t>="a"&&t<="z"||t>="0"&&t<="9"){const e=this.host.navigableItems.find((e=>{var r;const o=null==(r=e.textContent)?void 0:r.trim().toLowerCase();return null==o?void 0:o.startsWith(t)}));null==e||e.focus(),i=!0}}i&&(e.preventDefault(),e.stopPropagation())})),(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",rt(this,Br))}hostDisconnected(){this.host.removeEventListener("keydown",rt(this,Br))}};function Yr(e){let t=e;for(;t.assignedElements().length>0&&"SLOT"===t.assignedElements()[0].nodeName;)t=t.assignedElements()[0];return t}Br=new WeakMap;const{I:qr}=ce,Kr=()=>document.createComment(""),Xr=(e,t,r)=>{const o=e._$AA.parentNode,i=void 0===t?e._$AB:t._$AA;if(void 0===r){const t=o.insertBefore(Kr(),i),s=o.insertBefore(Kr(),i);r=new qr(t,s,e,e.options)}else{const t=r._$AB.nextSibling,s=r._$AM,a=s!==e;if(a){let t;r._$AQ?.(e),r._$AM=e,void 0!==r._$AP&&(t=e._$AU)!==s._$AU&&r._$AP(t)}if(t!==i||a){let e=r._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,i),e=t}}}return r},Jr=(e,t,r=e)=>(e._$AI(t,r),e),Qr={},en=e=>{e._$AP?.(!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const e=t.nextSibling;t.remove(),t=e}},tn=(e,t)=>{const r=e._$AN;if(void 0===r)return!1;for(const o of r)o._$AO?.(t,!1),tn(o,t);return!0},rn=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===r?.size)},nn=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),an(t)}};function on(e){void 0!==this._$AN?(rn(this),this._$AM=e,nn(this)):this._$AM=e}function sn(e,t=!1,r=0){const o=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(o))for(let s=r;s<o.length;s++)tn(o[s],!1),rn(o[s]);else null!=o&&(tn(o,!1),rn(o));else tn(this,e)}const an=e=>{e.type==Hr&&(e._$AP??=sn,e._$AQ??=on)};class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),nn(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(tn(this,e),rn(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const ln=()=>new ref_h;class ref_h{}const dn=new WeakMap,cn=Nr(class extends async_directive_f{render(e){return oe}update(e,[t]){const r=t!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),oe}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.Y){const t=this.ht??globalThis;let r=dn.get(t);void 0===r&&(r=new WeakMap,dn.set(t,r)),void 0!==r.get(this.Y)&&this.Y.call(this.ht,void 0),r.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?dn.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var un,hn=class extends qt{constructor(){super(),nt(this,un,ln()),new Gr(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),dr.instance.apply(this,"gds-listbox")}get navigableItems(){return rt(this,un).value&&Yr(rt(this,un).value).assignedElements().filter((e=>!e.hasAttribute("isplaceholder")&&"gds-menu-item"===e.gdsElementName))||[]}focus(){var e;null==(e=this.navigableItems[0])||e.focus()}render(){return ht`<slot ${cn(rt(this,un))}></slot>`}};un=new WeakMap,hn=et([lt("gds-menu")],hn);var pn,gn=e=>class HighlightableElement extends e{constructor(){super(...arguments),this.onblur=e=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},this.onfocus=e=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))}}focus(e){this.setAttribute("tabindex","0"),super.focus(e)}},fn=be`
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
`,mn=class extends(gn(qt)){constructor(){super(...arguments),nt(this,pn,(()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))}))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.click())})),this.addEventListener("click",rt(this,pn)),dr.instance.apply(this,"gds-option")}render(){return ht`<div><slot></slot></div>`}};pn=new WeakMap,mn.styles=[fn],mn=et([lt("gds-menu-item")],mn);var bn=class extends qt{constructor(){super(...arguments),this.show=!1}render(){return ht``}};function vn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{attributes:!0,childList:!0,subtree:!1,characterData:!0};return(t,r,o)=>{let i;const s=t.connectedCallback,a=t.disconnectedCallback;t.connectedCallback=function(){null==s||s.call(this);i=new MutationObserver(((e,t)=>{var r;null==(r=o.value)||r.call(this)})),i.observe(this,e)},t.disconnectedCallback=function(){null==a||a.call(this),i.disconnect()}}}function yn(e,t){const r=Je({waitUntilFirstUpdate:!1},t);return(t,o,i)=>{const{update:s}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach((t=>{var o;const s=t;if(e.has(s)){const t=e.get(s),a=this[s];t!==a&&(r.waitUntilFirstUpdate&&!this.hasUpdated||null==(o=i.value)||o.call(this,t,a))}})),s.call(this,e)}}}bn.styles=be`
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
  `,et([Ve({type:Boolean,reflect:!0})],bn.prototype,"show",2),bn=et([lt("gds-backdrop")],bn);const xn=["top","right","bottom","left"],wn=Math.min,kn=Math.max,_n=Math.round,Cn=Math.floor,$n=e=>({x:e,y:e}),Sn={left:"right",right:"left",bottom:"top",top:"bottom"},En={start:"end",end:"start"};function An(e,t,r){return kn(e,wn(t,r))}function Tn(e,t){return"function"==typeof e?e(t):e}function Mn(e){return e.split("-")[0]}function zn(e){return e.split("-")[1]}function jn(e){return"x"===e?"y":"x"}function On(e){return"y"===e?"height":"width"}function Ln(e){return["top","bottom"].includes(Mn(e))?"y":"x"}function Pn(e){return jn(Ln(e))}function Dn(e){return e.replace(/start|end/g,(e=>En[e]))}function Vn(e){return e.replace(/left|right|bottom|top/g,(e=>Sn[e]))}function Hn(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Wn(e){const{x:t,y:r,width:o,height:i}=e;return{width:o,height:i,top:r,left:t,right:t+o,bottom:r+i,x:t,y:r}}function Nn(e,t,r){let{reference:o,floating:i}=e;const s=Ln(t),a=Pn(t),l=On(a),d=Mn(t),c="y"===s,u=o.x+o.width/2-i.width/2,h=o.y+o.height/2-i.height/2,p=o[l]/2-i[l]/2;let g;switch(d){case"top":g={x:u,y:o.y-i.height};break;case"bottom":g={x:u,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:h};break;case"left":g={x:o.x-i.width,y:h};break;default:g={x:o.x,y:o.y}}switch(zn(t)){case"start":g[a]-=p*(r&&c?-1:1);break;case"end":g[a]+=p*(r&&c?-1:1)}return g}async function Rn(e,t){var r;void 0===t&&(t={});const{x:o,y:i,platform:s,rects:a,elements:l,strategy:d}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:p=!1,padding:g=0}=Tn(t,e),f=Hn(g),m=l[p?"floating"===h?"reference":"floating":h],v=Wn(await s.getClippingRect({element:null==(r=await(null==s.isElement?void 0:s.isElement(m)))||r?m:m.contextElement||await(null==s.getDocumentElement?void 0:s.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:d})),y="floating"===h?{x:o,y:i,width:a.floating.width,height:a.floating.height}:a.reference,x=await(null==s.getOffsetParent?void 0:s.getOffsetParent(l.floating)),w=await(null==s.isElement?void 0:s.isElement(x))&&await(null==s.getScale?void 0:s.getScale(x))||{x:1,y:1},_=Wn(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:x,strategy:d}):y);return{top:(v.top-_.top+f.top)/w.y,bottom:(_.bottom-v.bottom+f.bottom)/w.y,left:(v.left-_.left+f.left)/w.x,right:(_.right-v.right+f.right)/w.x}}function Fn(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function In(e){return xn.some((t=>e[t]>=0))}function Bn(){return"undefined"!=typeof window}function Un(e){return Yn(e)?(e.nodeName||"").toLowerCase():"#document"}function Zn(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Gn(e){var t;return null==(t=(Yn(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Yn(e){return!!Bn()&&(e instanceof Node||e instanceof Zn(e).Node)}function qn(e){return!!Bn()&&(e instanceof Element||e instanceof Zn(e).Element)}function Kn(e){return!!Bn()&&(e instanceof HTMLElement||e instanceof Zn(e).HTMLElement)}function Xn(e){return!(!Bn()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof Zn(e).ShadowRoot)}function Jn(e){const{overflow:t,overflowX:r,overflowY:o,display:i}=oo(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!["inline","contents"].includes(i)}function Qn(e){return["table","td","th"].includes(Un(e))}function eo(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(i){return!1}}))}function to(e){const t=ro(),r=qn(e)?oo(e):e;return"none"!==r.transform||"none"!==r.perspective||!!r.containerType&&"normal"!==r.containerType||!t&&!!r.backdropFilter&&"none"!==r.backdropFilter||!t&&!!r.filter&&"none"!==r.filter||["transform","perspective","filter"].some((e=>(r.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(r.contain||"").includes(e)))}function ro(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function no(e){return["html","body","#document"].includes(Un(e))}function oo(e){return Zn(e).getComputedStyle(e)}function io(e){return qn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function so(e){if("html"===Un(e))return e;const t=e.assignedSlot||e.parentNode||Xn(e)&&e.host||Gn(e);return Xn(t)?t.host:t}function ao(e){const t=so(e);return no(t)?e.ownerDocument?e.ownerDocument.body:e.body:Kn(t)&&Jn(t)?t:ao(t)}function lo(e,t,r){var o;void 0===t&&(t=[]),void 0===r&&(r=!0);const i=ao(e),s=i===(null==(o=e.ownerDocument)?void 0:o.body),a=Zn(i);if(s){const e=co(a);return t.concat(a,a.visualViewport||[],Jn(i)?i:[],e&&r?lo(e):[])}return t.concat(i,lo(i,[],r))}function co(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function uo(e){const t=oo(e);let r=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const i=Kn(e),s=i?e.offsetWidth:r,a=i?e.offsetHeight:o,l=_n(r)!==s||_n(o)!==a;return l&&(r=s,o=a),{width:r,height:o,$:l}}function ho(e){return qn(e)?e:e.contextElement}function po(e){const t=ho(e);if(!Kn(t))return $n(1);const r=t.getBoundingClientRect(),{width:o,height:i,$:s}=uo(t);let a=(s?_n(r.width):r.width)/o,l=(s?_n(r.height):r.height)/i;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const go=$n(0);function fo(e){const t=Zn(e);return ro()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:go}function mo(e,t,r,o){void 0===t&&(t=!1),void 0===r&&(r=!1);const i=e.getBoundingClientRect(),s=ho(e);let a=$n(1);t&&(o?qn(o)&&(a=po(o)):a=po(e));const l=function(e,t,r){return void 0===t&&(t=!1),!(!r||t&&r!==Zn(e))&&t}(s,r,o)?fo(s):$n(0);let d=(i.left+l.x)/a.x,c=(i.top+l.y)/a.y,u=i.width/a.x,h=i.height/a.y;if(s){const e=Zn(s),t=o&&qn(o)?Zn(o):o;let r=e,i=co(r);for(;i&&o&&t!==r;){const e=po(i),t=i.getBoundingClientRect(),o=oo(i),s=t.left+(i.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(i.clientTop+parseFloat(o.paddingTop))*e.y;d*=e.x,c*=e.y,u*=e.x,h*=e.y,d+=s,c+=a,r=Zn(i),i=co(r)}}return Wn({width:u,height:h,x:d,y:c})}function bo(e,t){const r=io(e).scrollLeft;return t?t.left+r:mo(Gn(e)).left+r}function vo(e,t,r){void 0===r&&(r=!1);const o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-(r?0:bo(e,o)),y:o.top+t.scrollTop}}function yo(e,t,r){let o;if("viewport"===t)o=function(e,t){const r=Zn(e),o=Gn(e),i=r.visualViewport;let s=o.clientWidth,a=o.clientHeight,l=0,d=0;if(i){s=i.width,a=i.height;const e=ro();(!e||e&&"fixed"===t)&&(l=i.offsetLeft,d=i.offsetTop)}return{width:s,height:a,x:l,y:d}}(e,r);else if("document"===t)o=function(e){const t=Gn(e),r=io(e),o=e.ownerDocument.body,i=kn(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),s=kn(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let a=-r.scrollLeft+bo(e);const l=-r.scrollTop;return"rtl"===oo(o).direction&&(a+=kn(t.clientWidth,o.clientWidth)-i),{width:i,height:s,x:a,y:l}}(Gn(e));else if(qn(t))o=function(e,t){const r=mo(e,!0,"fixed"===t),o=r.top+e.clientTop,i=r.left+e.clientLeft,s=Kn(e)?po(e):$n(1);return{width:e.clientWidth*s.x,height:e.clientHeight*s.y,x:i*s.x,y:o*s.y}}(t,r);else{const r=fo(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Wn(o)}function xo(e,t){const r=so(e);return!(r===t||!qn(r)||no(r))&&("fixed"===oo(r).position||xo(r,t))}function wo(e,t,r){const o=Kn(t),i=Gn(t),s="fixed"===r,a=mo(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const d=$n(0);if(o||!o&&!s)if(("body"!==Un(t)||Jn(i))&&(l=io(t)),o){const e=mo(t,!0,s,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else i&&(d.x=bo(i));const c=!i||o||s?$n(0):vo(i,l);return{x:a.left+l.scrollLeft-d.x-c.x,y:a.top+l.scrollTop-d.y-c.y,width:a.width,height:a.height}}function ko(e){return"static"===oo(e).position}function _o(e,t){if(!Kn(e)||"fixed"===oo(e).position)return null;if(t)return t(e);let r=e.offsetParent;return Gn(e)===r&&(r=r.ownerDocument.body),r}function Co(e,t){const r=Zn(e);if(eo(e))return r;if(!Kn(e)){let t=so(e);for(;t&&!no(t);){if(qn(t)&&!ko(t))return t;t=so(t)}return r}let o=_o(e,t);for(;o&&Qn(o)&&ko(o);)o=_o(o,t);return o&&no(o)&&ko(o)&&!to(o)?r:o||function(e){let t=so(e);for(;Kn(t)&&!no(t);){if(to(t))return t;if(eo(t))return null;t=so(t)}return null}(e)||r}const $o={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:r,offsetParent:o,strategy:i}=e;const s="fixed"===i,a=Gn(o),l=!!t&&eo(t.floating);if(o===a||l&&s)return r;let d={scrollLeft:0,scrollTop:0},c=$n(1);const u=$n(0),h=Kn(o);if((h||!h&&!s)&&(("body"!==Un(o)||Jn(a))&&(d=io(o)),Kn(o))){const e=mo(o);c=po(o),u.x=e.x+o.clientLeft,u.y=e.y+o.clientTop}const p=!a||h||s?$n(0):vo(a,d,!0);return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-d.scrollLeft*c.x+u.x+p.x,y:r.y*c.y-d.scrollTop*c.y+u.y+p.y}},getDocumentElement:Gn,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:o,strategy:i}=e;const s=[..."clippingAncestors"===r?eo(t)?[]:function(e,t){const r=t.get(e);if(r)return r;let o=lo(e,[],!1).filter((e=>qn(e)&&"body"!==Un(e))),i=null;const s="fixed"===oo(e).position;let a=s?so(e):e;for(;qn(a)&&!no(a);){const t=oo(a),r=to(a);r||"fixed"!==t.position||(i=null),(s?!r&&!i:!r&&"static"===t.position&&i&&["absolute","fixed"].includes(i.position)||Jn(a)&&!r&&xo(e,a))?o=o.filter((e=>e!==a)):i=t,a=so(a)}return t.set(e,o),o}(t,this._c):[].concat(r),o],a=s[0],l=s.reduce(((e,r)=>{const o=yo(t,r,i);return e.top=kn(o.top,e.top),e.right=wn(o.right,e.right),e.bottom=wn(o.bottom,e.bottom),e.left=kn(o.left,e.left),e}),yo(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:Co,getElementRects:async function(e){const t=this.getOffsetParent||Co,r=this.getDimensions,o=await r(e.floating);return{reference:wo(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:r}=uo(e);return{width:t,height:r}},getScale:po,isElement:qn,isRTL:function(e){return"rtl"===oo(e).direction}};function So(e,t,r,o){void 0===o&&(o={});const{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:d="function"==typeof IntersectionObserver,animationFrame:c=!1}=o,u=ho(e),h=s||a?[...u?lo(u):[],...lo(t)]:[];h.forEach((e=>{s&&e.addEventListener("scroll",r,{passive:!0}),a&&e.addEventListener("resize",r)}));const p=u&&d?function(e,t){let r,o=null;const s=Gn(e);function a(){var e;clearTimeout(r),null==(e=o)||e.disconnect(),o=null}return function l(d,c){void 0===d&&(d=!1),void 0===c&&(c=1),a();const{left:u,top:h,width:p,height:g}=e.getBoundingClientRect();if(d||t(),!p||!g)return;const f={rootMargin:-Cn(h)+"px "+-Cn(s.clientWidth-(u+p))+"px "+-Cn(s.clientHeight-(h+g))+"px "+-Cn(u)+"px",threshold:kn(0,wn(1,c))||1};let m=!0;function v(e){const t=e[0].intersectionRatio;if(t!==c){if(!m)return l();t?l(!1,t):r=setTimeout((()=>{l(!1,1e-7)}),1e3)}m=!1}try{o=new IntersectionObserver(v,{...f,root:s.ownerDocument})}catch(i){o=new IntersectionObserver(v,f)}o.observe(e)}(!0),a}(u,r):null;let g,f=-1,m=null;l&&(m=new ResizeObserver((e=>{let[o]=e;o&&o.target===u&&m&&(m.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame((()=>{var e;null==(e=m)||e.observe(t)}))),r()})),u&&!c&&m.observe(u),m.observe(t));let v=c?mo(e):null;return c&&function t(){const o=mo(e);!v||o.x===v.x&&o.y===v.y&&o.width===v.width&&o.height===v.height||r();v=o,g=requestAnimationFrame(t)}(),r(),()=>{var e;h.forEach((e=>{s&&e.removeEventListener("scroll",r),a&&e.removeEventListener("resize",r)})),null==p||p(),null==(e=m)||e.disconnect(),m=null,c&&cancelAnimationFrame(g)}}const Eo=Rn,Ao=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var r,o;const{x:i,y:s,placement:a,middlewareData:l}=t,d=await async function(e,t){const{placement:r,platform:o,elements:i}=e,s=await(null==o.isRTL?void 0:o.isRTL(i.floating)),a=Mn(r),l=zn(r),d="y"===Ln(r),c=["left","top"].includes(a)?-1:1,u=s&&d?-1:1,h=Tn(t,e);let{mainAxis:p,crossAxis:g,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return l&&"number"==typeof f&&(g="end"===l?-1*f:f),d?{x:g*u,y:p*c}:{x:p*c,y:g*u}}(t,e);return a===(null==(r=l.offset)?void 0:r.placement)&&null!=(o=l.arrow)&&o.alignmentOffset?{}:{x:i+d.x,y:s+d.y,data:{...d,placement:a}}}}},To=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:o,placement:i}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...d}=Tn(e,t),c={x:r,y:o},u=await Rn(t,d),h=Ln(Mn(i)),p=jn(h);let g=c[p],f=c[h];if(s){const e="y"===p?"bottom":"right";g=An(g+u["y"===p?"top":"left"],g,g-u[e])}if(a){const e="y"===h?"bottom":"right";f=An(f+u["y"===h?"top":"left"],f,f-u[e])}const m=l.fn({...t,[p]:g,[h]:f});return{...m,data:{x:m.x-r,y:m.y-o,enabled:{[p]:s,[h]:a}}}}}},Mo=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var r,o;const{placement:i,middlewareData:s,rects:a,initialPlacement:l,platform:d,elements:c}=t,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...v}=Tn(e,t);if(null!=(r=s.arrow)&&r.alignmentOffset)return{};const y=Mn(i),x=Ln(l),w=Mn(l)===l,_=await(null==d.isRTL?void 0:d.isRTL(c.floating)),C=p||(w||!m?[Vn(l)]:function(e){const t=Vn(e);return[Dn(e),t,Dn(t)]}(l)),$="none"!==f;!p&&$&&C.push(...function(e,t,r,o){const i=zn(e);let s=function(e,t,r){const o=["left","right"],i=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return r?t?i:o:t?o:i;case"left":case"right":return t?s:a;default:return[]}}(Mn(e),"start"===r,o);return i&&(s=s.map((e=>e+"-"+i)),t&&(s=s.concat(s.map(Dn)))),s}(l,m,f,_));const S=[l,...C],E=await Rn(t,v),A=[];let T=(null==(o=s.flip)?void 0:o.overflows)||[];if(u&&A.push(E[y]),h){const e=function(e,t,r){void 0===r&&(r=!1);const o=zn(e),i=Pn(e),s=On(i);let a="x"===i?o===(r?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=Vn(a)),[a,Vn(a)]}(i,a,_);A.push(E[e[0]],E[e[1]])}if(T=[...T,{placement:i,overflows:A}],!A.every((e=>e<=0))){var j,O;const e=((null==(j=s.flip)?void 0:j.index)||0)+1,t=S[e];if(t)return{data:{index:e,overflows:T},reset:{placement:t}};let r=null==(O=T.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:O.placement;if(!r)switch(g){case"bestFit":{var P;const e=null==(P=T.filter((e=>{if($){const t=Ln(e.placement);return t===x||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:P[0];e&&(r=e);break}case"initialPlacement":r=l}if(i!==r)return{reset:{placement:r}}}return{}}}},zo=function(e){return void 0===e&&(e={}),{name:"hide",options:e,async fn(t){const{rects:r}=t,{strategy:o="referenceHidden",...i}=Tn(e,t);switch(o){case"referenceHidden":{const e=Fn(await Rn(t,{...i,elementContext:"reference"}),r.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:In(e)}}}case"escaped":{const e=Fn(await Rn(t,{...i,altBoundary:!0}),r.floating);return{data:{escapedOffsets:e,escaped:In(e)}}}default:return{}}}}},jo=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:o,placement:i,rects:s,platform:a,elements:l,middlewareData:d}=t,{element:c,padding:u=0}=Tn(e,t)||{};if(null==c)return{};const h=Hn(u),p={x:r,y:o},g=Pn(i),f=On(g),m=await a.getDimensions(c),v="y"===g,y=v?"top":"left",x=v?"bottom":"right",w=v?"clientHeight":"clientWidth",_=s.reference[f]+s.reference[g]-p[g]-s.floating[f],C=p[g]-s.reference[g],$=await(null==a.getOffsetParent?void 0:a.getOffsetParent(c));let S=$?$[w]:0;S&&await(null==a.isElement?void 0:a.isElement($))||(S=l.floating[w]||s.floating[f]);const E=_/2-C/2,A=S/2-m[f]/2-1,T=wn(h[y],A),j=wn(h[x],A),O=T,P=S-m[f]-j,D=S/2-m[f]/2+E,V=An(O,D,P),W=!d.arrow&&null!=zn(i)&&D!==V&&s.reference[f]/2-(D<O?T:j)-m[f]/2<0,F=W?D<O?D-O:D-P:0;return{[g]:p[g]+F,data:{[g]:V,centerOffset:D-V-F,...W&&{alignmentOffset:F}},reset:W}}}),Oo=(e,t,r)=>{const o=new Map,i={platform:$o,...r},s={...i.platform,_c:o};return(async(e,t,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:a}=r,l=s.filter(Boolean),d=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:h}=Nn(c,o,d),p=o,g={},f=0;for(let m=0;m<l.length;m++){const{name:r,fn:s}=l[m],{x:v,y,data:x,reset:w}=await s({x:u,y:h,initialPlacement:o,placement:p,strategy:i,middlewareData:g,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=v?v:u,h=null!=y?y:h,g={...g,[r]:{...g[r],...x}},w&&f<=50&&(f++,"object"==typeof w&&(w.placement&&(p=w.placement),w.rects&&(c=!0===w.rects?await a.getElementRects({reference:e,floating:t,strategy:i}):w.rects),({x:u,y:h}=Nn(c,p,d))),m=-1)}return{x:u,y:h,placement:p,strategy:i,middlewareData:g}})(e,t,{...i,platform:s})};var Lo,Po,Do,Vo,Ho,Wo,No,Ro,Fo,Io,Bo,Uo,Zo,Go,Yo,qo,Ko,Xo,Jo,Qo,ei,ti=be`
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
`,ri=class extends qt{constructor(){super(...arguments),nt(this,Lo),nt(this,Fo),nt(this,Bo),nt(this,Zo),nt(this,Yo),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>"500px",this.nonmodal=!1,this.floatingUIMiddleware=[Ao(8),Mo()],this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,nt(this,Do,void 0),nt(this,Vo,!1),nt(this,Ho,void 0),nt(this,Wo,(()=>{this.open=!1,rt(this,No).call(this,"cancel")})),nt(this,No,(e=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason:e},bubbles:!1,composed:!1}))})),nt(this,Ro,(e=>{e.stopPropagation(),e.preventDefault(),this.open=!1,rt(this,No).call(this,"close"),setTimeout((()=>{var e;return null==(e=this._trigger)?void 0:e.focus()}),250)})),nt(this,Ko,(e=>{"ArrowDown"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),this.open=!0,rt(this,No).call(this,"show")),"Escape"===e.key&&this.open&&rt(this,Wo).call(this)})),nt(this,Xo,(e=>{e.preventDefault(),this.open=!this.open,rt(this,No).call(this,this.open?"show":"close")})),nt(this,Jo,(()=>{var e;const t=null==(e=this._elDefaultSlot)?void 0:e.assignedElements()[0];this.updateComplete.then((()=>{null==t||t.focus()}))})),nt(this,Qo,(e=>{const t=e,r=this._elDialog;if((t.clientX>0||t.clientY>0)&&r&&this.open){const e=r.getBoundingClientRect();e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width||(this.open=!1,rt(this,No).call(this,"close"))}}))}_handleTriggerRefChanged(){var e;null==(e=this.triggerRef)||e.then((e=>{e&&(this._trigger=e)}))}_handleAnchorRefChanged(){var e;null==(e=this.anchorRef)||e.then((e=>{e&&(this._anchor=e)}))}_handleTriggerChanged(){it(this,Fo,Io).call(this),it(this,Zo,Go).call(this)}_handleAnchorChanged(){it(this,Yo,qo).call(this)}connectedCallback(){super.connectedCallback(),dr.instance.apply(this,"gds-popover"),it(this,Fo,Io).call(this),this._handleOpenChange(),this.addEventListener("keydown",(e=>{"Escape"===e.key&&this.open&&(rt(this,Wo).call(this),e.stopPropagation(),e.preventDefault())})),this.addEventListener("focusin",(e=>{const t=e.target;"INPUT"===t.tagName||"TEXTAREA"===t.tagName?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1})),this.addEventListener("blurin",(e=>{this._isVirtKbVisible=!1}))}disconnectedCallback(){super.disconnectedCallback(),it(this,Bo,Uo).call(this)}render(){return ht`<slot
        name="trigger"
        @slotchange=${it(this,Lo,Po)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${Rr({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":Boolean(this.backdrop&&"true"===this.backdrop)})}"
          aria-hidden="${String(!this.open)}"
          @close=${()=>this.open&&rt(this,Wo).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${rt(this,Ro)}
              class="close"
              label="${fr("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const e=(this.nonmodal?rt(this,Ho):this._elDialog)||document;this.updateComplete.then((()=>{var t,r,o,i;null==(t=this._trigger)||t.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?null==(o=this._elDialog)||o.setAttribute("open","true"):null==(r=this._elDialog)||r.showModal(),rt(this,Jo).call(this),requestAnimationFrame((()=>{rt(this,Ho)&&(rt(this,Ho).show=!0)})),setTimeout((()=>rt(this,Jo).call(this)),250),setTimeout((()=>e.addEventListener("click",rt(this,Qo))),0)):(null==(i=this._elDialog)||i.close(),e.removeEventListener("click",rt(this,Qo)),rt(this,Ho)&&(rt(this,Ho).show=!1))}))}_handleBackdropChange(){var e;const t=null==(e=this.parentElement)?void 0:e.getRootNode();this.backdrop&&t&&ot(this,Ho,t.querySelector(this.backdrop))}_handleMobileLayout(e){var t,r,o,i;ot(this,Vo,e),e&&!this.disableMobileStyles?(null==(t=rt(this,Do))||t.call(this),null==(r=this._elDialog)||r.style.removeProperty("left"),null==(o=this._elDialog)||o.style.removeProperty("top"),null==(i=this._elDialog)||i.style.removeProperty("minWidth"),this.updateComplete.then((()=>{var e;this.open&&(null==(e=this._elDialog)||e.showModal())}))):this.updateComplete.then((()=>{it(this,Yo,qo).call(this)}))}};Lo=new WeakSet,Po=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])},Do=new WeakMap,Vo=new WeakMap,Ho=new WeakMap,Wo=new WeakMap,No=new WeakMap,Ro=new WeakMap,Fo=new WeakSet,Io=function(){var e,t;null==(e=this._trigger)||e.addEventListener("keydown",rt(this,Ko)),null==(t=this._trigger)||t.addEventListener("click",rt(this,Xo))},Bo=new WeakSet,Uo=function(){var e,t,r;null==(e=this._trigger)||e.removeEventListener("keydown",rt(this,Ko)),null==(t=this._trigger)||t.removeEventListener("click",rt(this,Xo)),null==(r=rt(this,Do))||r.call(this)},Zo=new WeakSet,Go=function(){var e;if(this._trigger){null==(e=this._trigger)||e.setAttribute("aria-expanded",String(this.open));const t=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||t.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const r=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";null===this._trigger.getAttribute(r)&&this._trigger.setAttribute(r,this.popupRole)}},Yo=new WeakSet,qo=function(){if(!this._anchor||!this._elDialog)return;const e=this._anchor,t=this._elDialog;e&&t&&(!rt(this,Vo)||this.disableMobileStyles)&&(rt(this,Do)&&rt(this,Do).call(this),ot(this,Do,So(e,t,(()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),Oo(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then((e=>{let{x:r,y:o}=e;return Object.assign(t.style,{left:`${r}px`,top:`${o}px`})}))}))))},Ko=new WeakMap,Xo=new WeakMap,Jo=new WeakMap,Qo=new WeakMap,ri.styles=me(ti),et([Ve({type:Boolean,reflect:!0})],ri.prototype,"open",2),et([Ve({attribute:"popup-role"})],ri.prototype,"popupRole",2),et([Ve({attribute:!1})],ri.prototype,"triggerRef",2),et([Ve({attribute:!1})],ri.prototype,"anchorRef",2),et([Ve()],ri.prototype,"label",2),et([Ve()],ri.prototype,"placement",2),et([Ve({type:Boolean})],ri.prototype,"disableMobileStyles",2),et([Ve({attribute:!1})],ri.prototype,"calcMinWidth",2),et([Ve({attribute:!1})],ri.prototype,"calcMaxWidth",2),et([Ve({attribute:!1})],ri.prototype,"calcMinHeight",2),et([Ve({attribute:!1})],ri.prototype,"calcMaxHeight",2),et([Ve({type:Boolean})],ri.prototype,"nonmodal",2),et([Ve()],ri.prototype,"backdrop",2),et([Ve({attribute:!1})],ri.prototype,"floatingUIMiddleware",2),et([He()],ri.prototype,"_trigger",2),et([He()],ri.prototype,"_anchor",2),et([He()],ri.prototype,"_isVirtKbVisible",2),et([Ne("slot:not([name])")],ri.prototype,"_elDefaultSlot",2),et([Ne('slot[name="trigger"]')],ri.prototype,"_elTriggerSlot",2),et([Ne("dialog")],ri.prototype,"_elDialog",2),et([yn("triggerRef")],ri.prototype,"_handleTriggerRefChanged",1),et([yn("anchorRef")],ri.prototype,"_handleAnchorRefChanged",1),et([yn("_trigger")],ri.prototype,"_handleTriggerChanged",1),et([yn("_anchor")],ri.prototype,"_handleAnchorChanged",1),et([yn("open")],ri.prototype,"_handleOpenChange",1),et([yn("backdrop")],ri.prototype,"_handleBackdropChange",1),et([(ei="(max-width: 576px)",(e,t,r)=>{const o=window.matchMedia(ei),i=e.connectedCallback,s=e.disconnectedCallback;e.connectedCallback=function(){var e;null==i||i.call(this);const t=e=>{var t;null==(t=r.value)||t.call(this,e.matches)};o.addEventListener("change",t),this.disconnectedCallback=function(){null==s||s.call(this),o.removeEventListener("change",t)},null==(e=r.value)||e.call(this,o.matches)}})],ri.prototype,"_handleMobileLayout",1),ri=et([lt("gds-popover"),yr()],ri);class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=oe,e.type!==Hr)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===oe||null==e)return this._t=void 0,this.it=e;if(e===ne)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const ni=Nr(unsafe_html_e);var oi=be`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    svg {
      display: block;
    }
  }
`,ii=class extends qt{constructor(){super(...arguments),this.solid=!1,this.box=!1,this.label=""}render(){const e="brand-seb"===this.constructor._name,t=e?"55":void 0!==this.width?this.width.toString():void 0;let r=`<svg\n      ${t?`width="${t}"`:""}\n      height="${e?"24":void 0!==this.height?this.height.toString():"1lh"}"\n      viewBox="${e?"0 0 55 24":this.box||"0 0 24 24"}"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}\n      role="graphics-symbol"\n      part="icon" \n    >\n      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}\n    </svg>`;return this.stroke&&(r=r.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`)),ee`${ni(r)}`}};ii.styles=[oi],et([Ve({type:Number})],ii.prototype,"width",2),et([Ve({type:Number})],ii.prototype,"height",2),et([Ve({type:Boolean})],ii.prototype,"solid",2),et([Ve({type:Number})],ii.prototype,"stroke",2),et([Ve({type:String})],ii.prototype,"box",2),et([Ve({type:String})],ii.prototype,"label",2);var si=class extends ii{};si._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',si._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>',si._name="cross-small",si=et([lt("gds-icon-cross-small")],si);var ai=class extends ii{};ai._regularSVG='<path d="M14 5.75L20.25 12L14 18.25M19.5 12H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ai._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1161 5.36612C13.6043 4.87796 14.3957 4.87796 14.8839 5.36612L20.6339 11.1161C20.8683 11.3505 21 11.6685 21 12C21 12.3315 20.8683 12.6494 20.6339 12.8839L14.8839 18.6339C14.3957 19.122 13.6043 19.122 13.1161 18.6339C12.628 18.1457 12.628 17.3543 13.1161 16.8661L16.7322 13.25H4.25C3.55964 13.25 3 12.6903 3 12C3 11.3096 3.55964 10.75 4.25 10.75H16.7322L13.1161 7.13388C12.628 6.64573 12.628 5.85427 13.1161 5.36612Z" fill="currentColor"/>',ai._name="arrow-right",ai=et([lt("gds-icon-arrow-right")],ai);var li=class extends ii{};li._regularSVG='<path d="M4.75 21.25V14.75M4.75 14.75V2.75H20.25L16.25 8.75L20.25 14.75H4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',li._solidSVG='<path d="M4.75 2C4.33579 2 4 2.33579 4 2.75V21.25C4 21.6642 4.33579 22 4.75 22C5.16421 22 5.5 21.6642 5.5 21.25V15.5H20.25C20.5266 15.5 20.7807 15.3478 20.9113 15.1039C21.0418 14.86 21.0275 14.5641 20.874 14.334L17.1514 8.75L20.874 3.16603C21.0275 2.93588 21.0418 2.63997 20.9113 2.39611C20.7807 2.15224 20.5266 2 20.25 2H4.75Z" fill="currentColor"/>',li._name="flag",li=et([lt("gds-icon-flag")],li);var di=class extends ii{};di._regularSVG='<path d="M12 12V10.75C12 6.88401 8.86599 3.75 5 3.75H3.75V5C3.75 8.86599 6.88401 12 10.75 12H12ZM12 12V20.25M19 6.75H20.25V8.25C20.25 12.116 17.116 15.25 13.25 15.25H12V13.75C12 9.88401 15.134 6.75 19 6.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',di._solidSVG='<path d="M3.75 3C3.33579 3 3 3.33579 3 3.75V5C3 9.28021 6.46979 12.75 10.75 12.75H11.25V20.25C11.25 20.6642 11.5858 21 12 21C12.4142 21 12.75 20.6642 12.75 20.25V16H13.25C17.5302 16 21 12.5302 21 8.25V6.75C21 6.33579 20.6642 6 20.25 6H19C16.3562 6 14.0216 7.32382 12.6229 9.34475C11.9618 5.73541 8.80036 3 5 3H3.75Z" fill="currentColor"/>',di._name="growth",di=et([lt("gds-icon-growth")],di);var ci=class extends ii{};ci._regularSVG='<path d="M2.75 12H21.25M2.75 5.75H21.25M2.75 18.25H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ci._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.75C2 5.33579 2.33579 5 2.75 5H21.25C21.6642 5 22 5.33579 22 5.75C22 6.16421 21.6642 6.5 21.25 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75ZM2 12C2 11.5858 2.33579 11.25 2.75 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H2.75C2.33579 12.75 2 12.4142 2 12ZM2 18.25C2 17.8358 2.33579 17.5 2.75 17.5H21.25C21.6642 17.5 22 17.8358 22 18.25C22 18.6642 21.6642 19 21.25 19H2.75C2.33579 19 2 18.6642 2 18.25Z" fill="currentColor"/>',ci._name="bars-three",ci=et([lt("gds-icon-bars-three")],ci);var ui=class extends ii{};ui._regularSVG='<path d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75M12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75M12 21.25C9.65279 21.25 7.75 17.1086 7.75 12C7.75 6.89137 9.65279 2.75 12 2.75M12 21.25C14.3472 21.25 16.25 17.1086 16.25 12C16.25 6.89137 14.3472 2.75 12 2.75M21 12H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>',ui._solidSVG='<path d="M2.02771 11.2499H7.01143C7.08916 8.70549 7.55991 6.38765 8.30456 4.63553C8.71256 3.67552 9.2176 2.85039 9.81666 2.2542C9.82324 2.24765 9.82984 2.24112 9.83645 2.23462C5.59031 3.17115 2.35718 6.80647 2.02771 11.2499Z" fill="currentColor"/><path d="M2.02771 12.7499C2.35718 17.1934 5.59031 20.8288 9.83645 21.7653C9.82984 21.7588 9.82324 21.7522 9.81666 21.7457C9.2176 21.1495 8.71256 20.3244 8.30456 19.3644C7.55991 17.6122 7.08916 15.2944 7.01143 12.7499H2.02771Z" fill="currentColor"/><path d="M14.1636 21.7653C18.4097 20.8287 21.6428 17.1934 21.9723 12.7499H16.9886C16.9109 15.2944 16.4401 17.6122 15.6955 19.3644C15.2875 20.3244 14.7824 21.1495 14.1834 21.7457C14.1768 21.7522 14.1702 21.7588 14.1636 21.7653Z" fill="currentColor"/><path d="M21.9723 11.2499C21.6428 6.80648 18.4097 3.17115 14.1636 2.23462C14.1702 2.24112 14.1768 2.24765 14.1834 2.2542C14.7824 2.85039 15.2875 3.67552 15.6955 4.63553C16.4401 6.38765 16.9109 8.70549 16.9886 11.2499H21.9723Z" fill="currentColor"/><path d="M13.1252 3.3174C12.7104 2.90457 12.3309 2.74995 12 2.74995C11.6691 2.74995 11.2896 2.90457 10.8748 3.3174C10.4569 3.73326 10.0462 4.3726 9.68505 5.22224C9.03191 6.75905 8.58961 8.8698 8.51216 11.2499H15.4879C15.4104 8.8698 14.9681 6.75905 14.315 5.22224C13.9539 4.3726 13.5431 3.73326 13.1252 3.3174Z" fill="currentColor"/><path d="M14.315 18.7777C14.9681 17.2409 15.4104 15.1301 15.4879 12.7499L8.51216 12.7499C8.58961 15.1301 9.03191 17.2409 9.68505 18.7777C10.0462 19.6273 10.4569 20.2666 10.8748 20.6825C11.2896 21.0953 11.6691 21.2499 12 21.2499C12.3309 21.2499 12.7104 21.0953 13.1252 20.6825C13.5431 20.2666 13.9539 19.6273 14.315 18.7777Z" fill="currentColor"/>',ui._name="globus",ui=et([lt("gds-icon-globus")],ui);var hi=class extends ii{};hi._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M9.19644 4.64738C9.52928 4.89393 9.59923 5.36362 9.35268 5.69647L6.01935 10.1965C5.7804 10.5191 5.32981 10.5963 4.99708 10.3717L3.33041 9.24668C2.98709 9.01494 2.89664 8.54876 3.12838 8.20544C3.36012 7.86212 3.8263 7.77167 4.16962 8.00341L5.2413 8.72679L8.14735 4.80363C8.3939 4.47078 8.86359 4.40083 9.19644 4.64738ZM11 7.75005C11 7.33583 11.3358 7.00005 11.75 7.00005H20.25C20.6642 7.00005 21 7.33583 21 7.75005C21 8.16426 20.6642 8.50005 20.25 8.50005H11.75C11.3358 8.50005 11 8.16426 11 7.75005ZM9.19644 13.6474C9.52928 13.8939 9.59923 14.3636 9.35268 14.6965L6.01935 19.1965C5.7804 19.5191 5.32981 19.5963 4.99708 19.3717L3.33041 18.2467C2.98709 18.0149 2.89664 17.5488 3.12838 17.2054C3.36012 16.8621 3.8263 16.7717 4.16962 17.0034L5.2413 17.7268L8.14735 13.8036C8.3939 13.4708 8.86359 13.4008 9.19644 13.6474ZM11 16.25C11 15.8358 11.3358 15.5 11.75 15.5H20.25C20.6642 15.5 21 15.8358 21 16.25C21 16.6643 20.6642 17 20.25 17H11.75C11.3358 17 11 16.6643 11 16.25Z" fill="currentColor"/>',hi._solidSVG='<path d="M11.75 16.25H20.25M11.75 7.75H20.25M3.75 8.625L5.41667 9.75L8.75 5.25M3.75 17.625L5.41667 18.75L8.75 14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',hi._name="checklist",hi=et([lt("gds-icon-checklist")],hi);var pi=class extends ii{};pi._regularSVG='<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" fill="currentColor"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" fill="currentColor"/><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',pi._solidSVG='<path d="M3.75 10.25C2.7835 10.25 2 11.0335 2 12C2 12.9665 2.7835 13.75 3.75 13.75C4.7165 13.75 5.5 12.9665 5.5 12C5.5 11.0335 4.7165 10.25 3.75 10.25Z" fill="currentColor"/><path d="M12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25Z" fill="currentColor"/><path d="M20.25 10.25C19.2835 10.25 18.5 11.0335 18.5 12C18.5 12.9665 19.2835 13.75 20.25 13.75C21.2165 13.75 22 12.9665 22 12C22 11.0335 21.2165 10.25 20.25 10.25Z" fill="currentColor"/>',pi._name="dot-grid-one-horizontal",pi=et([lt("gds-icon-dot-grid-one-horizontal")],pi);var gi=class extends ii{};gi._regularSVG='<path d="M2.75 7.25H21.25M2.75 16.75H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',gi._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 7.25C2 6.83579 2.33579 6.5 2.75 6.5H21.25C21.6642 6.5 22 6.83579 22 7.25C22 7.66421 21.6642 8 21.25 8H2.75C2.33579 8 2 7.66421 2 7.25ZM2 16.75C2 16.3358 2.33579 16 2.75 16H21.25C21.6642 16 22 16.3358 22 16.75C22 17.1642 21.6642 17.5 21.25 17.5H2.75C2.33579 17.5 2 17.1642 2 16.75Z" fill="currentColor"/>',gi._name="bars-two",gi=et([lt("gds-icon-bars-two")],gi);var fi=class extends ii{};fi._regularSVG='<path d="M14.957 6.12105L11.9903 8.31798C10.5943 7.11834 8.78371 6.88708 7.78755 6.88708C6.78411 6.88708 5.72977 7.17615 5.5698 7.8916C5.40984 8.58537 6.06425 9.12737 7.18403 9.43089C8.46378 9.77055 9.61991 10.0741 11.4159 10.5799C14.0772 11.3388 15.9023 12.4806 15.9023 15.1328C15.9023 18.7967 12.6302 20.6902 8.25291 20.6902C3.87559 20.6902 0.894368 18.4282 0 17.3731L3.13392 15.0461C5.33712 16.9539 6.86409 17.2213 8.14384 17.2213C9.61264 17.2213 10.9869 16.9106 11.1614 16.0867C11.3068 15.4219 10.7542 14.8943 9.50357 14.6052C8.09294 14.28 6.89318 14.0199 5.56253 13.673C1.9487 12.7335 0.930724 10.645 0.930724 8.76604C0.930724 6.18609 3.34479 3.53388 7.773 3.53388C12.303 3.53388 14.957 6.11382 14.957 6.12105ZM33.8551 3.79404H20.6359V20.206H34.0951V16.4192H25.275V13.7742H31.3465V10.1536H25.275V7.53749H33.8478V3.79404H33.8551ZM17.2184 23.9928H18.2437V0H17.2184V23.9928ZM35.8329 23.9928H36.8581V0H35.8329V23.9928ZM39.2504 20.206H49.8665C52.7023 20.206 55.0073 18.5077 55.0073 15.7832C55.0073 13.6585 53.6112 12.2493 51.6479 11.6278C51.5825 11.6134 51.5243 11.6061 51.4589 11.6061C51.5243 11.5989 51.5898 11.5917 51.6479 11.57C52.775 11.1292 54.0111 9.95122 54.0111 7.94941C54.0111 5.4056 51.7497 3.78681 48.9576 3.78681H39.2431L39.2504 20.206ZM43.9113 7.20506H47.6196C48.4704 7.20506 49.1612 7.87715 49.1612 8.64318C49.1612 9.40921 48.4704 10.0885 47.6196 10.0885H43.9113V7.20506ZM48.4413 16.5637H43.904V13.5718H48.4413C49.2411 13.5718 49.8956 14.215 49.8956 15.0678C49.8956 15.9133 49.2484 16.5637 48.4413 16.5637Z" fill="currentColor"/>',fi._solidSVG='<path d="M14.957 6.12105L11.9903 8.31798C10.5943 7.11834 8.78371 6.88708 7.78755 6.88708C6.78411 6.88708 5.72977 7.17615 5.5698 7.8916C5.40984 8.58537 6.06425 9.12737 7.18403 9.43089C8.46378 9.77055 9.61991 10.0741 11.4159 10.5799C14.0772 11.3388 15.9023 12.4806 15.9023 15.1328C15.9023 18.7967 12.6302 20.6902 8.25291 20.6902C3.87559 20.6902 0.894368 18.4282 0 17.3731L3.13392 15.0461C5.33712 16.9539 6.86409 17.2213 8.14384 17.2213C9.61264 17.2213 10.9869 16.9106 11.1614 16.0867C11.3068 15.4219 10.7542 14.8943 9.50357 14.6052C8.09294 14.28 6.89318 14.0199 5.56253 13.673C1.9487 12.7335 0.930724 10.645 0.930724 8.76604C0.930724 6.18609 3.34479 3.53388 7.773 3.53388C12.303 3.53388 14.957 6.11382 14.957 6.12105ZM33.8551 3.79404H20.6359V20.206H34.0951V16.4192H25.275V13.7742H31.3465V10.1536H25.275V7.53749H33.8478V3.79404H33.8551ZM17.2184 23.9928H18.2437V0H17.2184V23.9928ZM35.8329 23.9928H36.8581V0H35.8329V23.9928ZM39.2504 20.206H49.8665C52.7023 20.206 55.0073 18.5077 55.0073 15.7832C55.0073 13.6585 53.6112 12.2493 51.6479 11.6278C51.5825 11.6134 51.5243 11.6061 51.4589 11.6061C51.5243 11.5989 51.5898 11.5917 51.6479 11.57C52.775 11.1292 54.0111 9.95122 54.0111 7.94941C54.0111 5.4056 51.7497 3.78681 48.9576 3.78681H39.2431L39.2504 20.206ZM43.9113 7.20506H47.6196C48.4704 7.20506 49.1612 7.87715 49.1612 8.64318C49.1612 9.40921 48.4704 10.0885 47.6196 10.0885H43.9113V7.20506ZM48.4413 16.5637H43.904V13.5718H48.4413C49.2411 13.5718 49.8956 14.215 49.8956 15.0678C49.8956 15.9133 49.2484 16.5637 48.4413 16.5637Z" fill="currentColor"/>',fi._name="brand-seb",fi=et([lt("gds-icon-brand-seb")],fi);var mi=class extends ii{};mi._regularSVG='<path d="M16 17.25C16 19.4591 14.2091 21.25 12 21.25C9.79086 21.25 8 19.4591 8 17.25M3.75 17.25H20.25V16L18.7031 13L18.4965 8.90897C18.3234 5.45882 15.4661 2.75 12 2.75C8.53386 2.75 5.6766 5.45882 5.50351 8.90897L5.29688 13L3.75 16V17.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',mi._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C8.13655 2 4.94782 5.0198 4.75447 8.87114L4.556 12.8003L3.0834 15.6563C3.02859 15.7626 3 15.8804 3 16V17.25C3 17.6642 3.33579 18 3.75 18H7.30888C7.66846 20.267 9.63185 22 12 22C14.3682 22 16.3315 20.267 16.6911 18H20.25C20.6642 18 21 17.6642 21 17.25V16C21 15.8804 20.9714 15.7626 20.9166 15.6563L19.444 12.8003L19.2455 8.87139C19.0522 5.02005 15.8634 2 12 2ZM12 20.5C10.4632 20.5 9.17555 19.4333 8.83697 18H15.163C14.8245 19.4333 13.5368 20.5 12 20.5Z" fill="currentColor"/>',mi._name="bell",mi=et([lt("gds-icon-bell")],mi);var bi=class extends ii{};bi._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',bi._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>',bi._name="calendar",bi=et([lt("gds-icon-calendar")],bi);var vi,yi=class extends ii{};yi._regularSVG='<path d="M20 20L16.1265 16.1265M16.1265 16.1265C17.4385 14.8145 18.25 13.002 18.25 11C18.25 6.99594 15.0041 3.75 11 3.75C6.99594 3.75 3.75 6.99594 3.75 11C3.75 15.0041 6.99594 18.25 11 18.25C13.002 18.25 14.8145 17.4385 16.1265 16.1265Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',yi._solidSVG='<path d="M3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.9388 18.3096 14.7174 17.1624 16.1018L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2374 20.8232 19.7625 20.8232 19.4696 20.5303L16.1017 17.1624C14.7174 18.3096 12.9388 19 11 19C6.58172 19 3 15.4183 3 11Z" fill="currentColor"/>',yi._name="magnifying-glass",yi=et([lt("gds-icon-magnifying-glass")],yi);var xi=class extends qt{constructor(){super(),nt(this,vi,void 0),this.required=!1,this.label="",this.name="";try{ot(this,vi,this.attachInternals())}catch(i){ot(this,vi,{form:this.closest("form"),setFormValue:e=>{this.value=e},setValidity:(e,t)=>{this.invalid=e.customError},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0})}}set invalid(e){const t=this.invalid;rt(this,vi).setValidity(Qe(Je({},rt(this,vi).validity),{customError:e,valid:!e}),this.validationMessage||fr("Error message."),this._getValidityAnchor()||void 0),this.requestUpdate("invalid",t),rt(this,vi).checkValidity()}get invalid(){return!rt(this,vi).validity.valid}get form(){return rt(this,vi).form}get validity(){return rt(this,vi).validity}get validationMessage(){return rt(this,vi).validationMessage}get willValidate(){return rt(this,vi).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const e=this.invalid,t=this.validator.validate(this)||[Qe(Je({},this.validity),{valid:!0}),""];return rt(this,vi).setValidity(t[0],t[1],this._getValidityAnchor()),this.requestUpdate("invalid",e),rt(this,vi).checkValidity()}reportValidity(){return rt(this,vi).reportValidity()}__handleValueChange(){rt(this,vi).setFormValue(this.value),this.checkValidity()}formResetCallback(){this.value=void 0}formAssociatedCallback(e){null==e||e.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(e){this.checkValidity(),this.validity.valid||e.preventDefault()}focus(e){this._getValidityAnchor().focus(e)}};vi=new WeakMap,xi.formAssociated=!0,et([Ve({attribute:!1})],xi.prototype,"validator",2),et([Ve({type:Boolean})],xi.prototype,"required",2),et([Ve({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:e=>null==e?void 0:e.toString()}})],xi.prototype,"invalid",1),et([Ve()],xi.prototype,"label",2),et([Ve()],xi.prototype,"value",2),et([Ve({reflect:!0})],xi.prototype,"name",2),et([yn("value")],xi.prototype,"__handleValueChange",1);const wi=e=>e??oe;function ki(e,t,r){return e?t(e):r?.(e)}var _i=Nr(class extends directive_i{constructor(e){if(super(e),e.type!==Wr)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(e){return oe}update(e,t){let[r]=t;var o;const i=e.element,s=null==(o=e.options)?void 0:o.host;Array.from(s.attributes).forEach((e=>{r(e)&&i.setAttribute(e.name.replace("gds-",""),e.value)}))}}),Ci=new WeakMap;var $i,Si,Ei,Ai,Ti,Mi,zi,ji=["aria-label","aria-haspopup","aria-expanded"],Oi=function(e){return function(t){let r=Ci.get(t);r||(r=t.map((e=>e.replace(/\n[\s]+</gm,"<"))),r.raw=t.raw,Ci.set(t,r));for(var o=arguments.length,i=new Array(o>1?o-1:0),s=1;s<o;s++)i[s-1]=arguments[s];return e(r,...i)}}(ht),Li=class extends xi{constructor(){super(),nt(this,Si),nt(this,Ai),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",nt(this,$i,!1),nt(this,Mi,(()=>{var e,t;const r=null!=(t=null==(e=this._mainSlot)?void 0:e.assignedElements())?t:[];ot(this,$i,1===r.length&&r.some((e=>e.tagName.toLowerCase().startsWith("gds-icon")))),this.requestUpdate()})),nt(this,zi,(e=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e})),this.form&&!rt(this,Si,Ei)&&("submit"===this.type?this.form.requestSubmit():"reset"===this.type&&this.form.reset())}))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),dr.instance.apply(this,"gds-button")}render(){const e={button:!0,circle:rt(this,$i),icon:rt(this,$i),small:"small"===this.size,large:"large"===this.size,positive:"positive"===this.variant,negative:"negative"===this.variant,primary:"primary"===this.rank,secondary:"secondary"===this.rank,tertiary:"tertiary"===this.rank},t=rt(this,Si,Ei)?er`a`:er`button`;return nr`
      <${t}
        class=${Rr(e)}
        type="${wi(rt(this,Si,Ei)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||oe}
        href=${wi(rt(this,Si,Ei)?this.href:void 0)}
        target=${wi(rt(this,Si,Ei)?this.target:void 0)}
        rel=${wi(rt(this,Si,Ei)?this.rel||rt(this,Ai,Ti):void 0)}
        download=${wi(rt(this,Si,Ei)?this.download:void 0)}
        part="_button"
        @click="${rt(this,zi)}"
        ${_i((e=>e.name.startsWith("gds-aria")||"gds-role"===e.name||ji.includes(e.name)))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${rt(this,Mi)}></slot>
        <slot name="trail"></slot>
        ${ki(!this._isUsingTransitionalStyles,(()=>Oi`<gds-ripple part="_ripple"></gds-ripple>`))}
        </${t}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}};$i=new WeakMap,Si=new WeakSet,Ei=function(){return this.href.length>0},Ai=new WeakSet,Ti=function(){return"_blank"===this.target?"noreferrer noopener":void 0},Mi=new WeakMap,zi=new WeakMap,Li.styles=[Yt,me("@layer tokens, core, a11y, ranks, sizes, variants, disabled;\n\n@layer a11y {\n  @media (prefers-reduced-motion: reduce) {\n    .button {\n      transition: none;\n    }\n  }\n}\n\n@layer core {\n  :host {\n    display: inline-block;\n    max-width: 100%;\n  }\n\n  .button {\n    --_block-size: var(--gds-space-3xl);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    border: none;\n    cursor: pointer;\n    block-size: var(--_block-size);\n    background-color: var(--gds-color-l3-background-primary);\n    color: var(--gds-color-l3-content-primary);\n    border-radius: var(--gds-space-max);\n    font-family: inherit;\n    font-size: var(--gds-text-size-detail-m);\n    line-height: var(--gds-text-line-height-detail-m);\n    font-weight: var(--gds-text-weight-book);\n    gap: var(--gds-space-s);\n    outline-color: transparent;\n    outline-offset: var(--gds-space-3xs);\n    outline-style: solid;\n    outline-width: var(--gds-space-3xs);\n    padding-block: var(--gds-space-s);\n    padding-inline: var(--gds-space-l);\n    position: relative;\n    text-decoration: none;\n    transition-property: color, border-color;\n    transition: all 0.4s;\n    max-width: 100%;\n    width: 100%;\n\n    &:focus {\n      outline-color: color-mix(in srgb, currentcolor, #000 100%);\n\n      &:not(:focus-visible) {\n        outline-color: transparent;\n      }\n    }\n\n    &:hover {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-color-l3-background-primary),\n        var(--gds-color-l3-states-dark-hover)\n      );\n    }\n\n    &:active {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-color-l3-background-primary),\n        var(--gds-color-l3-states-dark-pressed)\n      );\n    }\n\n    &:not(.circle) slot:not([name]) {\n      display: inline-block;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  }\n}\n\n/* High specificity */\n.button.circle {\n  aspect-ratio: 1/1;\n  padding: 0;\n}\n\n.button:disabled {\n  pointer-events: none;\n  background-color: var(--gds-color-l3-background-disabled);\n  color: var(--gds-color-l3-content-disabled);\n}\n\n@layer ranks {\n  :host([rank*='secondary']) .button {\n    background-color: var(--gds-color-l3-background-secondary);\n    color: var(--gds-color-l3-content-tertiary);\n\n    &:hover {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-color-l3-background-secondary),\n        var(--gds-color-l3-states-light-hover)\n      );\n    }\n\n    &:active {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-color-l3-background-secondary),\n        var(--gds-color-l3-states-light-pressed)\n      );\n    }\n  }\n\n  :host([rank*='tertiary']) .button {\n    background-color: transparent;\n    color: var(--gds-color-l3-content-tertiary);\n\n    &:hover {\n      background-color: color-mix(\n        in srgb,\n        transparent,\n        var(--gds-color-l3-states-light-hover)\n      );\n    }\n\n    &:active {\n      background-color: color-mix(\n        in srgb,\n        transparent,\n        var(--gds-color-l3-states-light-pressed)\n      );\n    }\n  }\n}\n\n@layer sizes {\n  :host([size='xs']) .button {\n    --_block-size: var(--gds-space-l);\n    font-size: var(--gds-text-size-detail-s);\n    line-height: var(--gds-text-line-height-detail-s);\n    padding-inline: var(--gds-space-m);\n  }\n\n  :host([size='small']) .button {\n    --_block-size: var(--gds-space-xl);\n    font-size: var(--gds-text-size-detail-s);\n    line-height: var(--gds-text-line-height-detail-s);\n    padding-inline: var(--gds-space-m);\n  }\n\n  :host([size='medium']) .button {\n    --_block-size: var(--gds-space-2xl);\n    font-size: var(--gds-text-size-detail-m);\n    line-height: var(--gds-text-line-height-detail-m);\n  }\n}\n\n@layer variants {\n  .positive {\n    background-color: var(--gds-color-l3-background-positive);\n\n    &:hover {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-color-l3-background-positive),\n        var(--gds-color-l3-states-dark-hover)\n      );\n    }\n\n    &:active {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-color-l3-background-positive),\n        var(--gds-color-l3-states-dark-pressed)\n      );\n    }\n\n    &.secondary {\n      background-color: var(--gds-color-l3-background-positive-secondary);\n      color: var(--gds-color-l3-content-positive);\n\n      &:hover {\n        background-color: color-mix(\n          in srgb,\n          var(--gds-color-l3-background-positive-secondary),\n          var(--gds-color-l3-states-positive-hover)\n        );\n      }\n\n      &:active {\n        background-color: color-mix(\n          in srgb,\n          var(--gds-color-l3-background-positive-secondary),\n          var(--gds-color-l3-states-positive-pressed)\n        );\n      }\n    }\n\n    &.tertiary {\n      background-color: transparent;\n      color: var(--gds-color-l3-content-positive);\n\n      &:hover {\n        background-color: color-mix(\n          in srgb,\n          transparent,\n          var(--gds-color-l3-states-positive-hover)\n        );\n      }\n\n      &:active {\n        background-color: color-mix(\n          in srgb,\n          transparent,\n          var(--gds-color-l3-states-positive-pressed)\n        );\n      }\n    }\n  }\n\n  .negative {\n    background-color: var(--gds-color-l3-background-negative);\n\n    &:hover {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-color-l3-background-negative),\n        var(--gds-color-l3-states-dark-hover)\n      );\n    }\n\n    &:active {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-color-l3-background-negative),\n        var(--gds-color-l3-states-dark-pressed)\n      );\n    }\n\n    &.secondary {\n      background-color: var(--gds-color-l3-background-negative-secondary);\n      color: var(--gds-color-l3-content-negative);\n\n      &:hover {\n        background-color: color-mix(\n          in srgb,\n          var(--gds-color-l3-background-negative-secondary),\n          var(--gds-color-l3-states-negative-hover)\n        );\n      }\n\n      &:active {\n        background-color: color-mix(\n          in srgb,\n          var(--gds-color-l3-background-negative-secondary),\n          var(--gds-color-l3-states-negative-pressed)\n        );\n      }\n    }\n\n    &.tertiary {\n      background-color: transparent;\n      color: var(--gds-color-l3-content-negative);\n\n      &:hover {\n        background-color: color-mix(\n          in srgb,\n          transparent,\n          var(--gds-color-l3-states-negative-hover)\n        );\n      }\n\n      &:active {\n        background-color: color-mix(\n          in srgb,\n          transparent,\n          var(--gds-color-l3-states-negative-pressed)\n        );\n      }\n    }\n  }\n}\n")],Li.shadowRootOptions={mode:"open",delegatesFocus:!0},et([Ve({type:Boolean,reflect:!0})],Li.prototype,"disabled",2),et([Ve({reflect:!0})],Li.prototype,"type",2),et([Ve({reflect:!0})],Li.prototype,"rank",2),et([Ve({reflect:!0})],Li.prototype,"variant",2),et([Ve({reflect:!0})],Li.prototype,"size",2),et([Ve()],Li.prototype,"label",2),et([Ve()],Li.prototype,"href",2),et([Ve()],Li.prototype,"target",2),et([Ve()],Li.prototype,"rel",2),et([Ve()],Li.prototype,"download",2),et([Ne("slot:not([name])")],Li.prototype,"_mainSlot",2),et([Ne(".button")],Li.prototype,"_button",2),et([vn({attributes:!0,childList:!1,subtree:!1,characterData:!1})],Li.prototype,"_attributeChanged",1),Li=et([lt("gds-button")],Li);var Pi,Di,Vi,Hi,Wi,Ni,Ri,Fi,Ii,Bi,Ui,Zi,Gi,Yi,qi,Ki,Xi,Ji,Qi,es,ts,rs=be`
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
`,ns=class extends xi{constructor(){super(),nt(this,Pi),nt(this,Vi),nt(this,Bi),nt(this,Zi),nt(this,Yi),nt(this,Ki),nt(this,Ji),nt(this,es),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this.trailSlotOccupied=!1,nt(this,Wi,(e=>["type","placeholder","required"].includes(e.name))),nt(this,Ni,(e=>{const t=e.target;this.value=t.value})),nt(this,Ri,(e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),nt(this,Fi,(()=>{this.elInputAsync.then((e=>e.focus()))})),nt(this,Ii,(()=>{this.value=""}))}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return ht`${Ie(this.variant,[["default",()=>it(this,Pi,Di).call(this)],["floating-label",()=>it(this,Vi,Hi).call(this)]])}`}_getValidityAnchor(){return this.elInput}};Pi=new WeakSet,Di=function(){return ht`
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
        gap="${"small"===this.size?"2xs":"xs"}"
        padding="${"small"===this.size?"xs s":this.trailSlotOccupied?"xs m":"xs xs xs m"}"
        min-block-size="${"small"===this.size?"xl":"3xl"}"
        block-size="${"small"===this.size?"xl":"3xl"}"
        border-radius="xs"
        .background=${this.disabled?"disabled":this.invalid?"negative-secondary":"secondary"}
        .border=${this.disabled?"":this.invalid?"4xs/negative":"4xs/secondary"}
        class="field ${this.invalid?"invalid":""}"
        @click=${rt(this,Fi)}
        cursor="text"
        color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
      >
        ${it(this,Bi,Ui).call(this)} ${it(this,Ki,Xi).call(this)}
        <gds-flex gap="xs" align-items="center">
          ${it(this,Ji,Qi).call(this)} ${it(this,Zi,Gi).call(this)}
        </gds-flex>
      </gds-flex>

      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${rt(this,es,ts)&&this.maxlength-this.value.length}
        .validationMessage=${this.invalid&&this.validationMessage}
      ></gds-form-control-footer>
    `},Vi=new WeakSet,Hi=function(){return oe},Wi=new WeakMap,Ni=new WeakMap,Ri=new WeakMap,Fi=new WeakMap,Ii=new WeakMap,Bi=new WeakSet,Ui=function(){return ht` <slot name="lead"></slot> `},Zi=new WeakSet,Gi=function(){return ht`
      <slot name="trail" @slotchange=${it(this,Yi,qi)}></slot>
    `},Yi=new WeakSet,qi=function(e){const t=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=t.length>0&&t.some((e=>{var t;return e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&""!==(null==(t=e.textContent)?void 0:t.trim())}))},Ki=new WeakSet,Xi=function(){return ht`
      <input
        @input=${rt(this,Ni)}
        @change=${rt(this,Ri)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        aria-invalid=${this.invalid}
        placeholder=" "
        ${_i(rt(this,Wi))}
      />
    `},Ji=new WeakSet,Qi=function(){return this.clearable&&this.value.length>0?ht`
        <gds-button
          size="${"small"===this.size?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${fr("Clear input")}"
          @click=${rt(this,Ii)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:oe},es=new WeakSet,ts=function(){return this.maxlength<Number.MAX_SAFE_INTEGER},ns.styles=[Yt,rs],et([Ve()],ns.prototype,"value",2),et([Ve()],ns.prototype,"label",2),et([Ve({attribute:"supporting-text"})],ns.prototype,"supportingText",2),et([Ve({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],ns.prototype,"showExtendedSupportingText",2),et([Ve({attribute:"disabled",type:Boolean,reflect:!0})],ns.prototype,"disabled",2),et([Ve({type:Boolean})],ns.prototype,"clearable",2),et([Ve({type:Number})],ns.prototype,"maxlength",2),et([Ve({type:String})],ns.prototype,"variant",2),et([Ve({type:String})],ns.prototype,"size",2),et([Fe("input")],ns.prototype,"elInputAsync",2),et([Ne("input")],ns.prototype,"elInput",2),et([He()],ns.prototype,"trailSlotOccupied",2),ns=et([lt("gds-input"),yr()],ns);var os,is,ss,as,ls,ds,cs=be`
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
`,us=class extends qt{constructor(){super(...arguments),nt(this,os),nt(this,ls),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,nt(this,ss,(()=>ht`
      <gds-button
        size="small"
        rank="tertiary"
        label="${fr("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${rt(this,as)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `)),nt(this,as,(()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,null==(e=this._extendedSupportingText)||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}))}render(){return ht`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${ki(this._hasExtendedSupportingText,rt(this,ss))}
      </div>

      ${it(this,ls,ds).call(this)}
    `}};os=new WeakSet,is=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0},ss=new WeakMap,as=new WeakMap,ls=new WeakSet,ds=function(){return ht`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${it(this,os,is)}
        ></slot>
      </div>
    `},us.styles=[cs],et([Ve({type:Boolean,reflect:!0})],us.prototype,"showExtendedSupportingText",2),et([He()],us.prototype,"_hasExtendedSupportingText",2),et([Ne("#extended-supporting-text")],us.prototype,"_extendedSupportingText",2),us=et([lt("gds-form-control-header"),yr()],us);var hs,ps,gs=be`
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
`,fs=class extends qt{constructor(){super(...arguments),nt(this,hs)}render(){return ht`<div aria-live="polite">
      <div class="error-message">
        ${ki(this.validationMessage,(()=>ht`
            <gds-icon-triangle-exclamation
              solid
            ></gds-icon-triangle-exclamation>
            ${this.validationMessage}
          `))}
      </div>
      <div class="char-counter">
        ${ki(Number.isInteger(this.charCounter),(()=>it(this,hs,ps).call(this,this.charCounter)))}
      </div>
    </div>`}};hs=new WeakSet,ps=function(e){let t;return t=e<0?"negative":e<20?"warning":"positive",ht`<gds-badge variant="${t}">${e}</gds-badge>`},fs.styles=[gs],et([Ve({type:Number})],fs.prototype,"charCounter",2),et([Ve()],fs.prototype,"validationMessage",2),fs=et([lt("gds-form-control-footer")],fs);var ms=class extends ii{};ms._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.375 8C11.375 8.34518 11.6548 8.625 12 8.625C12.3452 8.625 12.625 8.34518 12.625 8C12.625 7.65482 12.3452 7.375 12 7.375C11.6548 7.375 11.375 7.65482 11.375 8Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>',ms._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>',ms._name="circle-info",ms=et([lt("gds-icon-circle-info")],ms);var bs=class extends ii{};bs._regularSVG='<path d="M12 2.75L12.6457 2.36845C12.5108 2.1401 12.2652 2 12 2C11.7348 2 11.4892 2.1401 11.3543 2.36845L12 2.75ZM2.25 19.25L1.60431 18.8685C1.4673 19.1003 1.46512 19.3878 1.59859 19.6217C1.73207 19.8556 1.9807 20 2.25 20V19.25ZM21.75 19.25V20C22.0193 20 22.2679 19.8556 22.4014 19.6217C22.5349 19.3878 22.5327 19.1003 22.3957 18.8685L21.75 19.25ZM12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75H12.75ZM11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25H11.25ZM11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75H11.25ZM12.75 15.74C12.75 15.3258 12.4142 14.99 12 14.99C11.5858 14.99 11.25 15.3258 11.25 15.74H12.75ZM11.3543 2.36845L1.60431 18.8685L2.89569 19.6315L12.6457 3.13155L11.3543 2.36845ZM2.25 20H21.75V18.5H2.25V20ZM22.3957 18.8685L12.6457 2.36845L11.3543 3.13155L21.1043 19.6315L22.3957 18.8685ZM11.25 9.75V13.25H12.75V9.75H11.25ZM11.5 15.75C11.5 15.4739 11.7239 15.25 12 15.25V16.75C12.5523 16.75 13 16.3023 13 15.75H11.5ZM12 15.25C12.2761 15.25 12.5 15.4739 12.5 15.75H11C11 16.3023 11.4477 16.75 12 16.75V15.25ZM12.5 15.75C12.5 16.0261 12.2761 16.25 12 16.25V14.75C11.4477 14.75 11 15.1977 11 15.75H12.5ZM12 16.25C11.7239 16.25 11.5 16.0261 11.5 15.75H13C13 15.1977 12.5523 14.75 12 14.75V16.25ZM12.75 15.75V15.74H11.25V15.75H12.75Z" fill="currentColor"/>',bs._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2652 2 12.5108 2.1401 12.6457 2.36845L22.3957 18.8685C22.5327 19.1003 22.5349 19.3878 22.4014 19.6217C22.2679 19.8556 22.0193 20 21.75 20H2.25C1.9807 20 1.73207 19.8556 1.59859 19.6217C1.46512 19.3878 1.4673 19.1003 1.60431 18.8685L11.3543 2.36845C11.4892 2.1401 11.7348 2 12 2ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V9.75C11.25 9.33579 11.5858 9 12 9ZM13 15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75C11 15.1977 11.4477 14.75 12 14.75C12.5523 14.75 13 15.1977 13 15.75Z" fill="currentColor"/>',bs._name="triangle-exclamation",bs=et([lt("gds-icon-triangle-exclamation")],bs);var vs=be`
  :host {
    box-sizing: border-box;
  }
`,ys=class extends Xt{constructor(){super(),this.display="flex"}render(){return ht`<slot></slot>`}};ys.styles=[Yt,vs],et([Lt({styleTemplate:(e,t)=>{const r=t[0];return`gap: ${r} ${t[1]||r};`},cacheOverrideKey:"flex"})],ys.prototype,"gap",2),et([Lt({valueTemplate:e=>e})],ys.prototype,"flex",2),et([Lt({valueTemplate:e=>e})],ys.prototype,"align-self",2),et([Lt({valueTemplate:e=>e})],ys.prototype,"align-items",2),et([Lt({valueTemplate:e=>e})],ys.prototype,"align-content",2),et([Lt({valueTemplate:e=>e})],ys.prototype,"justify-content",2),et([Lt({valueTemplate:e=>e})],ys.prototype,"place-content",2),et([Lt({valueTemplate:e=>e})],ys.prototype,"justify-items",2),et([Lt({valueTemplate:e=>e})],ys.prototype,"justify-self",2),et([Lt({property:"flex-direction",valueTemplate:e=>e})],ys.prototype,"flex-direction",2),et([Lt({property:"flex-wrap",valueTemplate:e=>e})],ys.prototype,"flex-wrap",2),ys=et([lt("gds-flex")],ys);var xs=class extends Xt{constructor(){super(),this.variant="primary",this.padding="s; m{l}",this["border-radius"]="xs; m{s}",this["border-width"]="4xs"}render(){return ht`<slot></slot>`}};xs.styles=[Yt,be`
      :host {
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
      }
    `],et([Lt({property:"box-shadow",valueTemplate:e=>`var(--gds-shadow-${e})`})],xs.prototype,"shadow",2),et([Lt({valueTemplate:e=>e,styleTemplate:function(e,t){return`\n      --_border-color: var(--gds-color-l${this.level}-background-${t});\n      --_background-color: var(--gds-color-l${this.level}-background-${t});\n      --_color: var(--gds-color-l${this.level}-content-${t});\n      `}})],xs.prototype,"variant",2),xs=et([lt("gds-card")],xs);var ws,ks,_s,Cs,$s,Ss,Es,As,Ts=be`
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
`,Ms=class extends qt{constructor(){super(),nt(this,ws),nt(this,_s),nt(this,$s),nt(this,Es),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.mainSlotOccupied=!1}render(){const e=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",t=this.disabled?"disabled":this.notification?"primary":this.variant,r="small"===this.size||this.notification?"2xs":"xs",o=this.mainSlotOccupied?"small"===this.size||this.notification?"m":"l":"xs";return ht`<gds-flex
      level="3"
      background=${e}
      color=${t}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${r}"
      border-radius="${this.notification?"max":"2xs"}"
      block-size="${o}"
      width="max-content"
      font-size="${"small"===this.size||this.notification?"detail-xs":"detail-s"}"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${it(this,ws,ks).call(this)} ${it(this,_s,Cs).call(this)}
      ${it(this,Es,As).call(this)}
    </gds-flex>`}};ws=new WeakSet,ks=function(){if("small"!==this.size||!this.notification)return ht`<slot name="lead"></slot>`},_s=new WeakSet,Cs=function(){return ht`<slot @slotchange=${it(this,$s,Ss)}></slot>`},$s=new WeakSet,Ss=function(e){const t=e.target.assignedNodes({flatten:!0});this.mainSlotOccupied=t.length>0&&t.some((e=>{var t;return e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&""!==(null==(t=e.textContent)?void 0:t.trim())}))},Es=new WeakSet,As=function(){return ht`<slot name="trail"></slot>`},Ms.styles=[Yt,Ts],et([Ve()],Ms.prototype,"variant",2),et([Ve({type:String})],Ms.prototype,"size",2),et([Ve({attribute:"disabled",type:Boolean,reflect:!0})],Ms.prototype,"disabled",2),et([Ve({attribute:"notification",type:Boolean,reflect:!0})],Ms.prototype,"notification",2),et([He()],Ms.prototype,"mainSlotOccupied",2),Ms=et([lt("gds-badge")],Ms);var zs=class extends lit_element_r{constructor(){super(...arguments),this.onmousedown=e=>{const t=e.target.getBoundingClientRect(),r=this._rippleEl;r&&(r.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",e.clientY-t.top+"px"),this.style.setProperty("--gds-ripple-left",e.clientX-t.left+"px"),setTimeout((()=>{r.classList.add("gds-ripple-effect")}),20))}}render(){return ee`<div></div>`}};zs.styles=[Yt,me(":host {\n  --gds-ripple-motion-name: ripple;\n  --gds-ripple-motion: var(--gds-ripple-motion-name) 1.2s\n    cubic-bezier(0.46, 0.03, 0.52, 0.96) 0s 1 normal none running;\n  border-radius: var(--gds-space-max);\n  contain: strict;\n  display: flex;\n  height: 100%;\n  inset: 0;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n}\n\ndiv {\n  background-color: currentColor;\n  border-radius: var(--gds-space-max);\n  display: flex;\n  height: 20px;\n  left: var(--gds-ripple-left, 50%);\n  margin-left: -10px;\n  margin-top: -10px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: var(--gds-ripple-top, 50%);\n  width: 20px;\n  will-change: transform;\n}\n\ndiv.gds-ripple-effect {\n  animation: var(--gds-ripple-motion);\n}\n\n@keyframes ripple {\n  from {\n    opacity: 0.5;\n    transform: scale(0);\n  }\n  to {\n    opacity: 0;\n    transform: scale(calc(3 * var(--mt-ripple-spread, 4)));\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  :host {\n    --gds-ripple-motion-name: none !important;\n  }\n}")],et([Ne("div")],zs.prototype,"_rippleEl",2),zs=et([lt("gds-ripple")],zs);var js=class extends qt{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2016"}connectedCallback(){super.connectedCallback(),dr.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",me(`:host {${Zt}}`))}render(){return ht`<slot></slot>`}_onColorSchemeChange(){"dark"===this.colorScheme?this._dynamicStylesController.inject("dark",me(`:host { ${Zt}}`)):this._dynamicStylesController.inject("light",me(`:host { ${Gt}}`)),this.dispatchEvent(new CustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}}))}_onDesignVersionChange(){this.dispatchEvent(new CustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}}))}};js.styles=be`
    :host {
      display: contents;
    }
  `,et([Ve({reflect:!0,attribute:"color-scheme"})],js.prototype,"colorScheme",2),et([Ve({reflect:!0,attribute:"design-version"})],js.prototype,"designVersion",2),et([yn("colorScheme")],js.prototype,"_onColorSchemeChange",1),et([yn("designVersion")],js.prototype,"_onDesignVersionChange",1),js=et([lt("gds-theme")],js);var Os=be`
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
`,Ls=class extends Xt{constructor(){super(),this.display="grid",this.width="100%"}render(){return ht`<slot></slot>`}};Ls.styles=[Yt,Os],et([Lt({property:"--_c",valueTemplate:e=>e})],Ls.prototype,"columns",2),et([Lt({styleTemplate:(e,t)=>{const r=t[0];return`--_gap-column: ${t[1]||r}; --_gap-row: ${r};`}})],Ls.prototype,"gap",2),et([Lt({property:"--_col-width",valueTemplate:e=>`${e}px`})],Ls.prototype,"auto-columns",2),Ls=et([lt("gds-grid")],Ls);var Ps,Ds,Vs=be`
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
    }
  }
`,Hs=class extends qt{constructor(){super(),nt(this,Ps),this.href="",this.variant="default"}render(){const e={secondary:"secondary"===this.variant};return nr`
      <a
        href=${wi(this.href)}
        target=${wi(this.target)}
        rel=${wi(this.rel||rt(this,Ps,Ds))}
        download=${wi(this.download)}
        class=${Rr(e)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};Ps=new WeakSet,Ds=function(){return"_blank"===this.target?"noreferrer noopener":void 0},Hs.styles=[Yt,me(Vs)],Hs.shadowRootOptions={mode:"open",delegatesFocus:!0},et([Ve()],Hs.prototype,"href",2),et([Ve()],Hs.prototype,"target",2),et([Ve()],Hs.prototype,"rel",2),et([Ve()],Hs.prototype,"download",2),et([Ve()],Hs.prototype,"variant",2),Hs=et([lt("gds-link")],Hs);var Ws=be`
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
`,Ns=class extends qt{render(){return ht`<img src="${this.src}" alt="${this.alt}" />`}};Ns.styles=[Yt,Ws],et([Lt({property:"aspect-ratio",valueTemplate:e=>e})],Ns.prototype,"aspect-ratio",2),et([Lt({property:"object-position",selector:"img",valueTemplate:e=>e})],Ns.prototype,"position",2),et([Lt({property:"inset",valueTemplate:e=>e})],Ns.prototype,"inset",2),et([Lt({property:"width",valueTemplate:e=>e})],Ns.prototype,"width",2),et([Lt({property:"height",valueTemplate:e=>e})],Ns.prototype,"height",2),et([Lt({property:"opacity",valueTemplate:e=>e})],Ns.prototype,"opacity",2),et([Lt({property:"object-fit",selector:"img",valueTemplate:e=>e})],Ns.prototype,"object-fit",2),et([Ve()],Ns.prototype,"src",2),et([Ve()],Ns.prototype,"alt",2),et([Lt({property:"border-radius",valueTemplate:e=>`var(--gds-space-${e})`})],Ns.prototype,"border-radius",2),Ns=et([lt("gds-img")],Ns);var Rs=be`
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
`,Fs=class extends qt{applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return ht`<video></video>`}firstUpdated(){this.applyVideoSettings()}};Fs.styles=[Yt,Rs],et([Lt({property:"aspect-ratio",valueTemplate:e=>e})],Fs.prototype,"aspect-ratio",2),et([Lt({property:"object-position",selector:"video",valueTemplate:e=>e})],Fs.prototype,"object-position",2),et([Lt({property:"inset",valueTemplate:e=>e})],Fs.prototype,"inset",2),et([Lt({property:"width",valueTemplate:e=>e})],Fs.prototype,"width",2),et([Lt({property:"height",valueTemplate:e=>e})],Fs.prototype,"height",2),et([Lt({property:"opacity",valueTemplate:e=>e})],Fs.prototype,"opacity",2),et([Lt({property:"object-fit",selector:"video",valueTemplate:e=>e})],Fs.prototype,"object-fit",2),et([Lt({property:"pointer-events",selector:"video",valueTemplate:e=>e})],Fs.prototype,"pointer-events",2),et([Lt({property:"border-radius",valueTemplate:e=>`var(--gds-space-${e})`})],Fs.prototype,"border-radius",2),et([Ve()],Fs.prototype,"src",2),et([Ve()],Fs.prototype,"poster",2),et([Ve({type:Boolean})],Fs.prototype,"muted",2),et([Ve({type:Boolean})],Fs.prototype,"playsinline",2),et([Ve({type:Boolean})],Fs.prototype,"autoplay",2),et([Ve({type:Boolean})],Fs.prototype,"loop",2),et([Ne("video")],Fs.prototype,"videoElement",2),Fs=et([lt("gds-video")],Fs);var Is,Bs,Us,Zs,Gs=be`
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
`,Ys=class extends qt{constructor(){super(),nt(this,Is),nt(this,Us),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const e={button:!0,selected:this.selected,compact:this.compact},t=rt(this,Is,Bs)?er`a`:er`button`;return nr`
      <${t}
        class="${Rr(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${wi(rt(this,Is,Bs)?this.href:void 0)}
        target=${wi(rt(this,Is,Bs)?this.target:void 0)}
        rel=${wi(rt(this,Is,Bs)?this.rel||rt(this,Us,Zs):void 0)}
        download=${wi(rt(this,Is,Bs)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${t}>
    `}};Is=new WeakSet,Bs=function(){return this.href.length>0},Us=new WeakSet,Zs=function(){return"_blank"===this.target?"noreferrer noopener":void 0},Ys.styles=[Yt,me(Gs)],Ys.shadowRootOptions={mode:"open",delegatesFocus:!0},et([Ve({type:Boolean,reflect:!0})],Ys.prototype,"disabled",2),et([Ve()],Ys.prototype,"label",2),et([Ve()],Ys.prototype,"href",2),et([Ve()],Ys.prototype,"target",2),et([Ve()],Ys.prototype,"rel",2),et([Ve()],Ys.prototype,"download",2),et([Ve({type:Boolean,reflect:!0})],Ys.prototype,"compact",2),et([Ve({type:Boolean,reflect:!0})],Ys.prototype,"selected",2),Ys=et([lt("gds-menu-button")],Ys);var qs,Ks,Xs,Js,Qs,ea,ta,ra,na,oa,ia=class extends qt{constructor(){super(...arguments),nt(this,Ks),this.size="medium",nt(this,qs,void 0),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,nt(this,Js,(()=>{const e=this.segments.filter(((e,t,r)=>{var o;return(null==(o=r[t+1])?void 0:o.isVisible)&&!e.isVisible}))[0];this._elTrack.scrollLeft=e.offsetLeft})),nt(this,Qs,(()=>{const e=this.segments.filter(((e,t,r)=>{var o;return(null==(o=r[t-1])?void 0:o.isVisible)&&!e.isVisible})).reverse()[0];this._elTrack.scrollLeft=e.offsetLeft})),nt(this,ea,(()=>{this.segments.every((e=>!e.isVisible))||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)})),nt(this,ta,((e,t)=>{let r;return()=>{clearTimeout(r),r=setTimeout(e,t)}})(rt(this,ea),50)),nt(this,ra,(()=>{const e=this.segments.find((e=>e.selected));if(e){const t=e.offsetWidth,r=e.offsetLeft;this._elIndicator.style.transform=`translateX(${r}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"})),nt(this,na,(e=>{const t=this.segments.find((t=>t===e.target||t.contains(e.target)));t&&(this.segments.forEach((e=>e.selected=!1)),t.selected=!0,ot(this,qs,t.value),rt(this,ra).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0})))})),nt(this,oa,(()=>{rt(this,qs)&&this.updateComplete.then((()=>{const e=this.segments.find((e=>e.value===rt(this,qs)));e&&(this.segments.forEach((e=>e.selected=!1)),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)}))}))}get value(){return rt(this,qs)}set value(e){ot(this,qs,e),rt(this,oa).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),dr.instance.apply(this,"gds-segmented-control"),this.updateComplete.then((()=>{this._elTrack.addEventListener("scroll",(()=>{rt(this,ta).call(this)}))}))}render(){return ht`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${rt(this,Js)}
        aria-label=${fr("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${rt(this,na)}
          @slotchange=${it(this,Ks,Xs)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${rt(this,Qs)}
        aria-label=${fr("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then((()=>{rt(this,ta).call(this),rt(this,ra).call(this)}))}};qs=new WeakMap,Ks=new WeakSet,Xs=function(){var e,t;const r=null==(e=this.segments.find((e=>e.selected)))?void 0:e.value;r&&ot(this,qs,r),null==(t=this.intersectionObserver)||t.disconnect(),this.intersectionObserver=new IntersectionObserver((e=>{e.forEach((e=>{e.target._isVisible=e.intersectionRatio>.99}))}),{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach((e=>{var t;null==(t=this.intersectionObserver)||t.observe(e)}))},Js=new WeakMap,Qs=new WeakMap,ea=new WeakMap,ta=new WeakMap,ra=new WeakMap,na=new WeakMap,oa=new WeakMap,ia.styles=[Yt,me("@layer base {\n  :host {\n    background-color: var(--gds-sys-color-container-container-dim1);\n    border: 0.25rem solid var(--gds-sys-color-container-container-dim1);\n    border-radius: calc(infinity * 1px);\n    box-sizing: border-box;\n    contain: layout;\n    display: inline-flex;\n    height: 3rem;\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n  }\n\n  :host([size='small']) {\n    height: 2.5rem;\n  }\n\n  #track {\n    box-sizing: border-box;\n    display: flex;\n    flex-grow: 1;\n    scroll-snap-type: inline mandatory;\n    overscroll-behavior-x: contain;\n    scroll-behavior: smooth;\n    overflow-x: scroll;\n    gap: 0.25rem;\n    position: relative;\n    scrollbar-width: none;\n  }\n\n  #track::-webkit-scrollbar {\n    display: none;\n  }\n\n  #btn-prev,\n  #btn-next {\n    box-sizing: border-box;\n    align-items: center;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    aspect-ratio: 1;\n    background-color: var(--gds-sys-color-container-container-dim1);\n    border-radius: calc(infinity * 1px);\n    border-width: 0;\n    color: var(--gds-sys-color-content-content);\n    cursor: pointer;\n    display: flex;\n    font-size: 1rem;\n    height: 100%;\n    justify-content: center;\n    width: 2.5rem;\n    transition: 0.2s;\n    z-index: 2;\n    position: absolute;\n\n    @media (pointer: fine) {\n      &:hover {\n        background-color: color-mix(\n          in srgb,\n          var(--gds-sys-color-state-layers-state-black-dim1),\n          var(--gds-sys-color-container-container-dim1)\n        );\n      }\n    }\n  }\n  #btn-prev {\n    margin: 0 0.25rem 0 0;\n  }\n  #btn-next {\n    margin: 0 0 0 0.25rem;\n    right: 0;\n  }\n\n  #btn-prev[aria-hidden='true'],\n  #btn-next[aria-hidden='true'] {\n    opacity: 0;\n    width: 0;\n    margin: 0;\n    padding: 0;\n  }\n\n  :host([size='small']) #btn-prev,\n  :host([size='small']) #btn-next {\n    width: 2rem;\n  }\n\n  ::slotted(*) {\n    flex-grow: 1;\n    flex-shrink: 0;\n    z-index: 1;\n    scroll-margin: 0 2.75rem;\n    scroll-snap-align: start;\n  }\n\n  #indicator {\n    background-color: var(--gds-sys-color-container-container-bright);\n    border-radius: calc(infinity * 1px);\n    height: 100%;\n    left: 0;\n    position: absolute;\n    z-index: 0;\n    transition:\n      transform 0.2s,\n      width 0.2s;\n    z-index: 0;\n  }\n}\n")],et([Ve({reflect:!0})],ia.prototype,"size",2),et([Ve()],ia.prototype,"value",1),et([Ne("slot")],ia.prototype,"_elSlot",2),et([Ne("#indicator")],ia.prototype,"_elIndicator",2),et([Ne("#track")],ia.prototype,"_elTrack",2),et([He()],ia.prototype,"_showPrevButton",2),et([He()],ia.prototype,"_showNextButton",2),et([(e,t,r)=>{const o=e.connectedCallback,i=e.disconnectedCallback;e.connectedCallback=function(){null==o||o.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver((()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout((()=>{var e;null==(e=r.value)||e.call(this)}),20)})),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){null==i||i.call(this),this.__resizeObservers[t].disconnect()}},yn("segMinWidth")],ia.prototype,"_recalculateMinWidth",1),ia=et([lt("gds-segmented-control"),yr()],ia);var sa=class extends qt{constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),dr.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return ht`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};sa.styles=[...Yt,me("@layer base {\n  :host {\n    display: flex;\n    z-index: 1;\n  }\n\n  button {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    background: transparent;\n    border-radius: calc(infinity * 1px);\n    border-width: 0;\n    color: var(--gds-sys-color-content-content);\n    cursor: pointer;\n    flex-grow: 1;\n    flex-shrink: 0;\n    font-family: inherit;\n    font-size: inherit;\n    overflow: hidden;\n    padding: 0 1rem;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 100%;\n    transition: 0.1s;\n\n    &:disabled {\n      cursor: not-allowed;\n      opacity: 0.5;\n    }\n  }\n\n  @media (pointer: fine) {\n    :host(:not([selected])) button:hover {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-sys-color-state-layers-state-black-dim1),\n        transparent\n      );\n\n      &:disabled {\n        background-color: transparent;\n      }\n    }\n  }\n\n  button:focus-visible {\n    outline: 2px solid #000;\n    outline-offset: -2px;\n  }\n}\n")],et([Ve({type:Boolean,reflect:!0})],sa.prototype,"selected",2),et([Ve()],sa.prototype,"value",2),et([Ve({type:Boolean,reflect:!0})],sa.prototype,"disabled",2),et([Lt({valueTemplate:e=>e})],sa.prototype,"min-width",2),et([Lt({valueTemplate:e=>e})],sa.prototype,"max-width",2),et([Lt()],sa.prototype,"width",2),sa=et([lt("gds-segment")],sa);var aa=class extends ii{};aa._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',aa._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>',aa._name="chevron-left",aa=et([lt("gds-icon-chevron-left")],aa);var la=class extends ii{};la._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',la._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>',la._name="chevron-right",la=et([lt("gds-icon-chevron-right")],la);var da=["sv"],ca={};((e,t)=>{for(var r in t)Be(e,r,{get:t[r],enumerable:!0})})(ca,{templates:()=>ua});var ua={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"\xd6ppna kalender",s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"M\xe5n",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s39938ecdae568740:"September",s407a88a592a0987c:"Augusti",s46d6587089bd0356:"N\xe4sta m\xe5nad",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:hr`${0} valda`,s5d929ff1619ac0c9:"S\xf6k",s5e8250fb85d64c23:"St\xe4ng",s5febcd9b311c16fe:"Scrolla h\xf6ger",s62931b2a50168976:"F\xf6reg\xe5ende m\xe5nad",s63d040e37887f17e:"Idag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tis",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"\xd6ppna meny",s83c436ed1bc16dfb:"Visa mer information",s8ade4e9d5e804d6a:"F\xf6rsta tillg\xe4ngliga datum",s9836b719fa8ef857:"L\xf6r",s987ac119fac8d621:"S\xf6n",s9af3c72c33088826:hr`Det finns ${0} fel att åtgärda innan du kan fortsätta:`,sa6f2645578b2d2bc:"\xc5r",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"M\xe5nad",sb4f1dffbb6be6302:"Rensa",sb77f4dce69a005ac:"Felmeddelande.",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"S\xf6k i listan av val",sdc42f1da42d6411a:"Rensa text",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sista tillg\xe4ngliga datum",sf295af199c723ec8:"Fre"},ha=new Map([["sv",ca]]);let pa,ga;function fa(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:ba((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||ba(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:ma(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function ma(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function ba(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}const{setLocale:va,getLocale:ya}=function(){let{extraLocales:e,extraTemplates:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{extraLocales:[],extraTemplates:new Map};const r=[...da];for(const[o,i]of t)ha.set(o,i);for(const o of e)r.push(o);return Lr({sourceLocale:"en",targetLocales:r,loadLocale:async e=>{const t=ha.get(e);return t||Promise.reject(new Error(`Locale ${e} not found`))}})}();let xa;ga=[Le("gds-header")];class GdsHeader extends lit_element_r{static#e=(()=>[xa,pa]=fa(this,[],ga,0,void 0,lit_element_r).c)();connectedCallback(){super.connectedCallback()}handleButtonClick(e){this.dispatchEvent(new CustomEvent("view-change",{detail:{view:e},bubbles:!0,composed:!0}))}render(){return ht`
      <gds-flex
        align-items="stretch"
        width="100%"
        justify-content="space-between"
        background="primary"
        position="relative"
        height="4rem"
      >
        <gds-flex align-items="center">
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
              <gds-menu-item @click=${()=>va("en")}>EN</gds-menu-item>
              <gds-menu-item @click=${()=>va("sv")}>SV</gds-menu-item>
            </gds-context-menu> -->
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `}static#t=(()=>pa())()}var wa=class extends ii{};wa._regularSVG='<path d="M2.75 9.75005V19.2461H21.2461V9.75005M2.75 9.75005V4.75293H21.2422C21.247 6.41863 21.2461 8.08434 21.2461 9.75005M2.75 9.75005H21.2461M6.75 13.25H9.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',wa._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 4.00293C2.33579 4.00293 2 4.33872 2 4.75293V9H21.9961V10.5H2V19.2461C2 19.6604 2.33579 19.9961 2.75 19.9961H21.2461C21.6603 19.9961 21.9961 19.6604 21.9961 19.2461L21.9961 9.05303C21.9962 7.61979 21.9964 6.18525 21.9922 4.75075C21.991 4.33739 21.6556 4.00293 21.2422 4.00293H2.75ZM6.75 12.5C6.33579 12.5 6 12.8358 6 13.25C6 13.6642 6.33579 14 6.75 14H9.75C10.1642 14 10.5 13.6642 10.5 13.25C10.5 12.8358 10.1642 12.5 9.75 12.5H6.75Z" fill="currentColor"/>',wa._name="credit-card",wa=et([lt("gds-icon-credit-card")],wa);var ka=class extends ii{};let _a,Ca,$a;function Sa(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:Aa((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||Aa(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:Ea(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function Ea(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Aa(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}ka._regularSVG='<path d="M19.2618 3.75V7.75H15.2618M4.75 20.25V16.25H8.75M3.81383 13.0312C3.7717 12.6934 3.75 12.3492 3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C14.6766 3.75 17.1111 5.02463 18.6322 7M20.1862 10.9688C20.2283 11.3066 20.25 11.6508 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C9.32342 20.25 6.88887 18.9754 5.36784 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ka._solidSVG='<path d="M6.3448 17C7.73561 18.5332 9.77612 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 11.6819 19.4802 11.3687 19.4419 11.0616C19.3907 10.6505 19.6823 10.2758 20.0934 10.2245C20.5044 10.1733 20.8792 10.4649 20.9304 10.8759C20.9764 11.2445 21 11.6197 21 12C21 16.9706 16.9706 21 12 21C9.4791 21 7.1554 19.9626 5.5 18.2888V20.25C5.5 20.6642 5.16421 21 4.75 21C4.33579 21 4 20.6642 4 20.25V16.25C4 15.8358 4.33579 15.5 4.75 15.5H8.75C9.16421 15.5 9.5 15.8358 9.5 16.25C9.5 16.6642 9.16421 17 8.75 17H6.3448Z" fill="currentColor"/><path d="M4.55806 12.9384C4.60932 13.3495 4.31766 13.7242 3.90663 13.7755C3.4956 13.8267 3.12085 13.5351 3.06959 13.1241C3.02364 12.7555 3 12.3803 3 12C3 7.02944 7.02944 3 12 3C14.5269 3 16.8557 4.04238 18.5118 5.72322V3.75C18.5118 3.33579 18.8476 3 19.2618 3C19.6761 3 20.0118 3.33579 20.0118 3.75V7.75C20.0118 8.16421 19.6761 8.5 19.2618 8.5H15.2618C14.8476 8.5 14.5118 8.16421 14.5118 7.75C14.5118 7.33579 14.8476 7 15.2618 7H17.6552C16.2644 5.46681 14.2239 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 12.3181 4.51977 12.6313 4.55806 12.9384Z" fill="currentColor"/>',ka._name="arrow-rotate-right-left",ka=et([lt("gds-icon-arrow-rotate-right-left")],ka),Ca=[Le("tp-quicklinks")];class TpQuicklinks extends lit_element_r{static#e=(()=>[$a,_a]=Sa(this,[],Ca,0,void 0,lit_element_r).c)();render(){return ht`
      <gds-grid
        columns="3"
        gap="m"
        level="2"
        border-bottom-left-radius="m"
        border-bottom-right-radius="m"
        max-width="max-content"
      >
        <gds-link variant="secondary">
          <gds-flex
            level="3"
            padding="m"
            align-items="center"
            justify-content="center"
            flex-direction="column"
            background="secondary"
            border-radius="s"
            width="100%"
          >
            <gds-icon-credit-card></gds-icon-credit-card>
            <gds-text margin="4px 0 0">Kort</gds-text>
          </gds-flex>
        </gds-link>

        <gds-link variant="secondary">
          <gds-flex
            level="3"
            padding="m"
            align-items="center"
            justify-content="center"
            flex-direction="column"
            background="secondary"
            border-radius="s"
            width="100%"
          >
            <gds-icon-arrow-rotate-right-left></gds-icon-arrow-rotate-right-left>
            <gds-text margin="4px 0 0">Flytta pengar</gds-text>
          </gds-flex>
        </gds-link>

        <gds-link variant="secondary">
          <gds-flex
            level="3"
            padding="m"
            align-items="center"
            justify-content="center"
            flex-direction="column"
            background="secondary"
            border-radius="s"
            width="100%"
          >
            <gds-icon-growth></gds-icon-growth>
            <gds-text margin="4px 0 0">Framtiden</gds-text>
          </gds-flex>
        </gds-link>
      </gds-grid>
    `}static#t=(()=>_a())()}var Ta=be`
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
`,Ma=class extends ys{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.inset="0"}render(){return nr`<div part="mask"></div>
      <div part="content"><slot></slot></div>`}};Ma.styles=[Yt,Ta],et([Lt({selector:'[part="mask"]',valueTemplate:e=>{const[t]=e.split("/");return`linear-gradient(to ${t}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`}})],Ma.prototype,"mask-image",2),et([Lt({valueTemplate:e=>e,selector:'[part="mask"]'})],Ma.prototype,"mask-size",2),et([Lt({valueTemplate:e=>e,selector:'[part="mask"]'})],Ma.prototype,"mask-repeat",2),et([Lt({valueTemplate:e=>e,selector:'[part="mask"]'})],Ma.prototype,"mask-position",2),et([Lt({selector:'[part="mask"]',valueTemplate:function(e){const[t,r]=e.split("/");return r?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-background-${t}) ${100*parseFloat(r)}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-background-${t})`}})],Ma.prototype,"background-color",2),et([Lt({valueTemplate:e=>e,selector:'[part="mask"]'})],Ma.prototype,"backdrop-filter",2),Ma=et([lt("gds-mask")],Ma);const za=r.p+"image 23.295f27d8244d5f11.png";let ja,Oa;function La(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:Da((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||Da(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:Pa(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function Pa(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Da(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}const Va=[{img:za,heading:"Nu s\xe4nker vi bol\xe5ner\xe4ntan!",body:"Den 8 november s\xe4nker vi v\xe5ra bol\xe5ne\xad\xadr\xe4ntor f\xf6r flera bindnings\xad\xadtider. Den r\xf6rliga 3-m\xe5naders\xad\xadr\xe4ntan s\xe4nks med 0,50 procent\xadenheter.",button:"Read article"},{img:za,heading:"Nu s\xe4nker vi bol\xe5ner\xe4ntan!",body:"Den 8 november s\xe4nker vi v\xe5ra bol\xe5ne\xad\xadr\xe4ntor f\xf6r flera bindnings\xad\xadtider. Den r\xf6rliga 3-m\xe5naders\xad\xadr\xe4ntan s\xe4nks med 0,50 procent\xadenheter.",button:"Read article"},{img:za,heading:"Nu s\xe4nker vi bol\xe5ner\xe4ntan!",body:"Den 8 november s\xe4nker vi v\xe5ra bol\xe5ne\xad\xadr\xe4ntor f\xf6r flera bindnings\xad\xadtider. Den r\xf6rliga 3-m\xe5naders\xad\xadr\xe4ntan s\xe4nks med 0,50 procent\xadenheter.",button:"Read article"}];let Ha;Oa=[Le("tp-news-widget")];class TpNewsWidget extends lit_element_r{static#e=(()=>[Ha,ja]=La(this,[],Oa,0,void 0,lit_element_r).c)();connectedCallback(){super.connectedCallback()}render(){return ht` <gds-theme>
      <gds-flex flex-direction="column" gap="l">
        <gds-text tag="h2" font-size="heading-m">${"Inspiration och annat"}</gds-text>
        <gds-grid columns="1; s{2} m{3}" gap="m">
          ${Va.map((e=>ht`<gds-card
                border="4xs/primary"
                border-radius="xs"
                overflow="hidden"
                padding="0"
                variant="tertiary"
              >
                <gds-flex position="relative" height="100%">
                  <gds-img
                    src="${e.img}"
                    object-fit="cover"
                    aspect-ratio="1/1"
                  ></gds-img>
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
                      <gds-flex flex-direction="column" gap="xs">
                        <gds-text tag="h3" font-size="heading-s"
                          >${e.heading}</gds-text
                        >
                        <gds-text font-size="detail-m">${e.body}</gds-text>
                      </gds-flex>
                      <div>
                        <gds-button size="medium">${e.button}</gds-button>
                      </div>
                    </gds-flex>
                  </gds-mask>
                </gds-flex>
              </gds-card>`))}
        </gds-grid>
      </gds-flex>
    </gds-theme>`}static#t=(()=>ja())()}var Wa={fromAttribute:e=>new Date(e),toAttribute:e=>e.toISOString()},Na={fromAttribute:e=>e.split(",").map((e=>new Date(e.trim()))),toAttribute:e=>JSON.stringify(e.map((e=>e.toISOString())))};const Ra=(e,t,r)=>{const o=new Map;for(let i=t;i<=r;i++)o.set(e[i],i);return o},Fa=Nr(class extends directive_i{constructor(e){if(super(e),e.type!==Hr)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let o;void 0===r?r=t:void 0!==t&&(o=t);const i=[],s=[];let a=0;for(const l of e)i[a]=o?o(l,a):a,s[a]=r(l,a),a++;return{values:s,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,o]){const i=(e=>e._$AH)(e),{values:s,keys:a}=this.dt(t,r,o);if(!Array.isArray(i))return this.ut=a,s;const l=this.ut??=[],d=[];let c,u,h=0,p=i.length-1,g=0,f=s.length-1;for(;h<=p&&g<=f;)if(null===i[h])h++;else if(null===i[p])p--;else if(l[h]===a[g])d[g]=Jr(i[h],s[g]),h++,g++;else if(l[p]===a[f])d[f]=Jr(i[p],s[f]),p--,f--;else if(l[h]===a[f])d[f]=Jr(i[h],s[f]),Xr(e,d[f+1],i[h]),h++,f--;else if(l[p]===a[g])d[g]=Jr(i[p],s[g]),Xr(e,i[h],i[p]),p--,g++;else if(void 0===c&&(c=Ra(a,g,f),u=Ra(l,h,p)),c.has(l[h]))if(c.has(l[p])){const t=u.get(a[g]),r=void 0!==t?i[t]:null;if(null===r){const t=Xr(e,i[h]);Jr(t,s[g]),d[g]=t}else d[g]=Jr(r,s[g]),Xr(e,i[h],r),i[t]=null;g++}else en(i[p]),p--;else en(i[h]),h++;for(;g<=f;){const t=Xr(e,d[f+1]);Jr(t,s[g]),d[g++]=t}for(;h<=p;){const e=i[h++];null!==e&&en(e)}return this.ut=a,((e,t=Qr)=>{e._$AH=t})(e,d),ne}});class private_async_helpers_s{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class private_async_helpers_i{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise((e=>this.q=e))}resume(){this.q?.(),this.Z=this.q=void 0}}const Ia=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,Ba=1073741823;const Ua=Nr(class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=Ba,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find((e=>!Ia(e)))??ne}update(e,t){const r=this._$Cbt;let o=r.length;this._$Cbt=t;const i=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<t.length&&!(a>this._$Cwt);a++){const e=t[a];if(!Ia(e))return this._$Cwt=a,e;a<o&&e===r[a]||(this._$Cwt=Ba,o=0,Promise.resolve(e).then((async t=>{for(;s.get();)await s.get();const r=i.deref();if(void 0!==r){const o=r._$Cbt.indexOf(e);o>-1&&o<r._$Cwt&&(r._$Cwt=o,r.setValue(t))}})))}return ne}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}});function Za(e){return Za="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Za(e)}function Ga(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function Ya(e){Ga(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===Za(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function qa(e){Ga(1,arguments);var t=Ya(e);return t.setHours(0,0,0,0),t}function Ka(e,t){Ga(2,arguments);var r=qa(e),o=qa(t);return r.getTime()===o.getTime()}var Xa,Ja,Qa,el,tl,rl,nl,ol,il,sl,al,ll,dl,cl,ul,hl,pl,gl,fl,ml,bl,vl,yl,xl,wl,kl,_l,Cl,$l,Sl,El,Al,Tl,Ml,zl,jl,Ol=be`
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
`,Ll=class extends xi{constructor(){super(...arguments),nt(this,Ja),nt(this,el),nt(this,rl),nt(this,ol),nt(this,sl),nt(this,ll),nt(this,cl),nt(this,$l),nt(this,Tl),nt(this,zl),this.min=new Date((new Date).getFullYear()-10,0,1),this.max=new Date((new Date).getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=(new Date).getMonth(),this._focusedYear=(new Date).getFullYear(),this._dateFormatLayout=it(this,$l,Sl).call(this,"y-m-d"),nt(this,Xa,void 0),nt(this,hl,(e=>{this._elTrigger.then((t=>{var r,o;(null==(r=e.relatedTarget)?void 0:r.parentElement)!==e.target&&(null==(o=document.getSelection())||o.removeAllRanges())}))})),nt(this,pl,(e=>{this._elTrigger.then((e=>{var t,r;null==(t=document.getSelection())||t.removeAllRanges();const o=new Range;o.setStart(e.firstChild,0),o.setEnd(e.lastChild,4),null==(r=document.getSelection())||r.addRange(o)}))})),nt(this,gl,(e=>{this._elField.then((t=>{var r;e.currentTarget===t&&(e.preventDefault(),null==(r=e.clipboardData)||r.setData("text/plain",this.displayValue))}))})),nt(this,fl,(e=>{this._elField.then((t=>{var r;if(e.currentTarget!==t)return;e.preventDefault();const o=null==(r=e.clipboardData)?void 0:r.getData("text/plain");if(!o)return;let i=new Date("-");const s="Invalid Date",a=o.split(this._dateFormatLayout.delimiter);if(3===a.length){const e=this._dateFormatLayout.layout,t=parseInt(a[e.findIndex((e=>"y"===e.token))]),r=parseInt(a[e.findIndex((e=>"m"===e.token))])-1,o=parseInt(a[e.findIndex((e=>"d"===e.token))]);isNaN(t)||isNaN(r)||isNaN(o)||(i=new Date(`${t}-${r+1}-${o}`))}i.toString()===s&&(i=new Date(o),i.toString()===s)||(this.value=i,it(this,ll,dl).call(this))}))})),nt(this,ml,(e=>{var t;null==(t=this._elSpinners[0])||t.focus()})),nt(this,bl,(e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,it(this,ll,dl).call(this)})),nt(this,vl,(e=>{var t;e.stopPropagation(),this._focusedMonth=null==(t=e.target)?void 0:t.value})),nt(this,yl,(e=>{var t;e.stopPropagation(),this._focusedYear=null==(t=e.target)?void 0:t.value})),nt(this,xl,(e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)})),nt(this,wl,(e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)})),nt(this,kl,(async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),it(this,cl,ul).call(this)})),nt(this,_l,(async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,"close"===e.detail.reason){const e=(await this._elCalendar).value;!Ka(e||new Date(0),rt(this,Xa)||new Date(0))&&(this.value=e,it(this,ll,dl).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}"cancel"===e.detail.reason&&(this.value=rt(this,Xa))}})),nt(this,Cl,(e=>{const t=Array.from(this._elSpinners).findIndex((t=>t===e.target));if("ArrowRight"===e.key){const e=this._elSpinners[t+1];e&&e.focus()}if("ArrowLeft"===e.key){const e=this._elSpinners[t-1];e&&e.focus()}})),nt(this,El,((e,t)=>{rt(this,Al)[t]=e;const r=new Date;r.setFullYear(parseInt(rt(this,Al).year)),r.setMonth(parseInt(rt(this,Al).month)-1),r.setDate(parseInt(rt(this,Al).day)),r.setHours(12,0,0,0),"Invalid Date"!==r.toString()&&(this.value=r,it(this,ll,dl).call(this))})),nt(this,Al,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map((e=>e.token)).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=it(this,$l,Sl).call(this,e)}async getFocusedDate(){return this.open?this._elCalendar.then((e=>e.focusedDate)):void 0}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then((t=>t.getDateCell(e)))}connectedCallback(){super.connectedCallback(),dr.instance.apply(this,"gds-datepicker")}render(){return ht`${ki(this.label&&!this.hideLabel,(()=>ht`<label for="spinner-0" id="label">${this.label}</label>`))}

      <div class="form-info" id="sub-label"><slot name="sub-label"></slot></div>

      <div
        class=${Rr({field:!0,small:"small"===this.size})}
        id="field"
        @click=${rt(this,ml)}
        @copy=${rt(this,gl)}
        @paste=${rt(this,fl)}
      >
        <div
          class=${Rr({input:!0,"is-placeholder":!this.value})}
          @focusout=${rt(this,hl)}
        >
          ${function*(e,t){const r="function"==typeof t;if(void 0!==e){let o=-1;for(const i of e)o>-1&&(yield r?t(o):t),o++,yield i}}(function*(e,t){if(void 0!==e){let r=0;for(const o of e)yield t(o,r++)}}(this._dateFormatLayout.layout,((e,t)=>ht`<gds-date-part-spinner
                  id="spinner-${t}"
                  class="spinner"
                  .length=${"y"===e.token?4:2}
                  .value=${rt(this,Al)[e.name]}
                  aria-valuemin=${it(this,ol,il).call(this,e.name)}
                  aria-valuemax=${it(this,sl,al).call(this,e.name)}
                  aria-label=${it(this,rl,nl).call(this,e.name)}
                  aria-describedby="label sub-label message"
                  @keydown=${rt(this,Cl)}
                  @change=${t=>rt(this,El).call(this,t.detail.value,e.name)}
                  @focus=${rt(this,pl)}
                  @touchend=${e=>{this.open=!0,e.preventDefault()}}
                ></gds-date-part-spinner>`)),ht`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${fr("Open calendar modal")}"
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
        @gds-ui-state=${rt(this,_l)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{var t;"calendar-popover"===(null==(t=e.target)?void 0:t.id)&&this._elCalendar.then((e=>e.focus()))}}
      >
        <div class="header">
          <gds-button
            @click=${rt(this,wl)}
            aria-label=${fr("Previous month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </gds-button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${rt(this,vl)}
            .maxHeight=${300}
            label="${fr("Month")}"
            size="small"
            class="month"
            hide-label
          >
            <gds-option value="0">${fr("January")}</gds-option>
            <gds-option value="1">${fr("February")}</gds-option>
            <gds-option value="2">${fr("March")}</gds-option>
            <gds-option value="3">${fr("April")}</gds-option>
            <gds-option value="4">${fr("May")}</gds-option>
            <gds-option value="5">${fr("June")}</gds-option>
            <gds-option value="6">${fr("July")}</gds-option>
            <gds-option value="7">${fr("August")}</gds-option>
            <gds-option value="8">${fr("September")}</gds-option>
            <gds-option value="9">${fr("October")}</gds-option>
            <gds-option value="10">${fr("November")}</gds-option>
            <gds-option value="11">${fr("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${rt(this,yl)}
            .maxHeight=${300}
            label="${fr("Year")}"
            size="small"
            class="year"
            hide-label
          >
            ${Fa(rt(this,Tl,Ml),(e=>e),(e=>ht`<gds-option value=${e}>${e}</gds-option>`))}
          </gds-dropdown>
          <gds-button
            @click=${rt(this,xl)}
            aria-label=${fr("Next month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${rt(this,bl)}
          @gds-date-focused=${rt(this,kl)}
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
            @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,it(this,ll,dl).call(this)}}
          >
            ${fr("Clear")}
          </gds-button>
          ${Ua(it(this,Ja,Qa).call(this),oe)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),it(this,el,tl).call(this,new Date)}}
          >
            ${fr("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(!this.value)return void ot(this,Al,{year:"yyyy",month:"mm",day:"dd"});const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),r=(e.getMonth()+1).toString().padStart(2,"0"),o=e.getDate().toString().padStart(2,"0");ot(this,Al,{year:t,month:r,day:o})}_handleOpenChange(){this.open&&(ot(this,Xa,this.value),this._elCalendar.then((e=>e.focus())))}};Xa=new WeakMap,Ja=new WeakSet,Qa=async function(){const e=await this.getFocusedDate();let t,r="";return e&&e>this.max?(r=fr("Last available date"),t=e=>{e.stopPropagation(),it(this,el,tl).call(this,this.max)}):e&&e<this.min&&(r=fr("First available date"),t=e=>{e.stopPropagation(),it(this,el,tl).call(this,this.min)}),ht`${ki(r.length>0,(()=>ht`<gds-button rank="tertiary" size="small" @click=${t}>
          ${r}
        </gds-button>`),(()=>oe))}`},el=new WeakSet,tl=function(e){const t=new Date(e);this._elCalendar.then((e=>e.focusedDate=t)).then(rt(this,kl))},rl=new WeakSet,nl=function(e){return{year:fr("Year"),month:fr("Month"),day:fr("Day")}[e]},ol=new WeakSet,il=function(e){return{year:1900,month:1,day:1}[e]},sl=new WeakSet,al=function(e){return{year:9999,month:12,day:31}[e]},ll=new WeakSet,dl=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))},cl=new WeakSet,ul=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))},hl=new WeakMap,pl=new WeakMap,gl=new WeakMap,fl=new WeakMap,ml=new WeakMap,bl=new WeakMap,vl=new WeakMap,yl=new WeakMap,xl=new WeakMap,wl=new WeakMap,kl=new WeakMap,_l=new WeakMap,Cl=new WeakMap,$l=new WeakSet,Sl=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],r=e.split(t),o=r.findIndex((e=>"y"===e)),i=r.findIndex((e=>"m"===e)),s=r.findIndex((e=>"d"===e));if(-1===o||-1===i||-1===s)throw new Error("Invalid date format for <gds-datepicker>");const a=[o,i,s].sort(((e,t)=>e-t)),l=a.map((e=>r[e])).map((e=>({token:e,name:"y"===e?"year":"m"===e?"month":"day"})));return{delimiter:t,layout:l}},El=new WeakMap,Al=new WeakMap,Tl=new WeakSet,Ml=function(){var e;const t=this.min.getFullYear(),r=this.max.getFullYear(),o=rt(this,zl,jl),i=null==(e=this.value)?void 0:e.getFullYear();return{*[Symbol.iterator](){o&&(yield i);for(let e=t;e<=r;e++)yield e}}},zl=new WeakSet,jl=function(){return!!this.value&&(this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear())},Ll.styles=[Yt,Ol],Ll.shadowRootOptions={mode:"open",delegatesFocus:!0},et([Ve({converter:Wa})],Ll.prototype,"value",2),et([Ve({converter:Wa})],Ll.prototype,"min",2),et([Ve({converter:Wa})],Ll.prototype,"max",2),et([Ve({type:Boolean})],Ll.prototype,"open",2),et([Ve()],Ll.prototype,"label",2),et([Ve({type:Boolean,attribute:"show-week-numbers"})],Ll.prototype,"showWeekNumbers",2),et([Ve()],Ll.prototype,"size",2),et([Ve({type:Boolean,attribute:"hide-label"})],Ll.prototype,"hideLabel",2),et([Ve()],Ll.prototype,"dateformat",1),et([Ve({type:Boolean,attribute:"disabled-weekends"})],Ll.prototype,"disabledWeekends",2),et([Ve({converter:Na,attribute:"disabled-dates"})],Ll.prototype,"disabledDates",2),et([Fe("#calendar-button")],Ll.prototype,"test_calendarButton",2),et([He()],Ll.prototype,"_focusedMonth",2),et([He()],Ll.prototype,"_focusedYear",2),et([He()],Ll.prototype,"_dateFormatLayout",2),et([Fe("#calendar")],Ll.prototype,"_elCalendar",2),et([Fe("#calendar-button")],Ll.prototype,"_elTrigger",2),et([Fe("#field")],Ll.prototype,"_elField",2),et([function(e){return(t,r)=>We(t,r,{get(){return(this.renderRoot??(Re??=document.createDocumentFragment())).querySelectorAll(e)}})}("[role=spinbutton]")],Ll.prototype,"_elSpinners",2),et([Ne(".input")],Ll.prototype,"_elInput",2),et([yn("value")],Ll.prototype,"_handleValueChange",1),et([yn("open")],Ll.prototype,"_handleOpenChange",1),Ll=et([lt("gds-datepicker"),yr()],Ll);var Pl,Dl,Vl,Hl,Wl,Nl,Rl,Fl,Il,Bl,Ul,Zl,Gl,Yl,ql=be`
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
`,Kl=class extends xi{constructor(){super(),nt(this,Rl),nt(this,Il),nt(this,Ul),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,nt(this,Pl,void 0),nt(this,Dl,(e=>{const t=e.getBoundingClientRect(),r=window.innerHeight-t.bottom,o=t.top;let i=Math.min(o,this.maxHeight);return r>o&&(i=Math.min(r,this.maxHeight)),i-16+"px"})),nt(this,Vl,(e=>{if(!e.currentTarget)return;const t=e.currentTarget;if(this.options.forEach((e=>e.hidden=!1)),!t.value)return;const r=this.options.filter((e=>!this.searchFilter(t.value,e)));r.forEach((e=>e.hidden=!0))})),nt(this,Hl,(e=>{var t;null==(t=this._elListbox)||t.then((t=>{if("ArrowDown"===e.key||"Tab"===e.key)return e.preventDefault(),void t.focus()}))})),nt(this,Wl,(e=>{var t;if("Tab"===e.key&&this.searchable)return e.preventDefault(),void(null==(t=this._elSearchInput)||t.focus())})),nt(this,Nl,(e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)})),nt(this,Gl,(e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)})),nt(this,Yl,(e=>{var t;"Tab"!==e.key||this.searchable||(e.preventDefault(),this.open=!1,null==(t=this._elTriggerBtn)||t.focus())})),vr(this)}get type(){return"gds-dropdown"}get options(){return rt(this,Pl)?Array.from(rt(this,Pl)).filter((e=>!e.hasAttribute("isplaceholder"))):[]}get placeholder(){if(rt(this,Pl))return Array.from(rt(this,Pl)).find((e=>e.hasAttribute("isplaceholder")))}get displayValue(){var e,t;let r;return r=Array.isArray(this.value)?this.value.length>2?fr(hr`${this.value.length} selected`):this.value.reduce(((e,t)=>{var r;return e+(null==(r=this.options.find((e=>e.value===t)))?void 0:r.innerHTML)+", "}),"").slice(0,-2):null==(e=this.options.find((e=>e.selected)))?void 0:e.innerHTML,r||(null==(t=this.placeholder)?void 0:t.innerHTML)||""}connectedCallback(){super.connectedCallback(),dr.instance.apply(this,"gds-dropdown"),this.updateComplete.then((()=>{this._handleLightDOMChange(),this._handleValueChange()}))}render(){return ht`
      ${ki(this.label&&!this.hideLabel,(()=>ht`<label for="trigger">${this.label}</label>`))}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${rt(this,Dl)}
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
          class=${Rr({small:"small"===this.size})}
        >
          <slot name="trigger">
            <span>${ni(this.displayValue)}</span>
          </slot>
          <div class="icon">
            <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
          </div>
        </button>
        ${ki(this.searchable,(()=>ht`<input
              id="searchinput"
              type="text"
              aria-label="${fr("Filter available options")}"
              placeholder="${fr("Search")}"
              @keydown=${rt(this,Hl)}
              @input=${rt(this,Vl)}
            />`))}
        <gds-listbox
          id="listbox"
          .multiple="${wi(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${it(this,Rl,Fl)}"
          @gds-focus="${rt(this,Nl)}"
          @keydown=${rt(this,Wl)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"
        ><slot name="message">${this.validationMessage}</slot></span
      >
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;this.requestUpdate(),ot(this,Pl,this.querySelectorAll("[gds-element=gds-option]")),this.multiple?this._handleValueChange():void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=null==(e=this.options[0])?void 0:e.value:this.placeholder||void 0!==this.options.find((e=>this.compareWith(e.value,this.value)))||(this.options[0]&&(this.options[0].selected=!0),this.value=null==(t=this.options[0])?void 0:t.value)}_handleValueChange(){this._elListbox.then((e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])}))}_onOpenChange(){var e;const t=this.open;null==(e=rt(this,Pl))||e.forEach((e=>e.hidden=!t)),t?it(this,Il,Bl).call(this):(it(this,Ul,Zl).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const r=this.options.find((e=>e.selected));this.updateComplete.then((()=>null==r?void 0:r.scrollIntoView())),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:t},bubbles:!0,composed:!0}))}};Pl=new WeakMap,Dl=new WeakMap,Vl=new WeakMap,Hl=new WeakMap,Wl=new WeakMap,Nl=new WeakMap,Rl=new WeakSet,Fl=function(){this._elListbox.then((e=>{var t;this.multiple?this.value=e.selection.map((e=>e.value)):(this.value=null==(t=e.selection[0])?void 0:t.value,this.open=!1,setTimeout((()=>{var e;return null==(e=this._elTriggerBtn)?void 0:e.focus()}),0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}))},Il=new WeakSet,Bl=function(){this.addEventListener("blur",rt(this,Gl)),this.addEventListener("gds-blur",rt(this,Gl)),this.addEventListener("keydown",rt(this,Yl))},Ul=new WeakSet,Zl=function(){this.removeEventListener("blur",rt(this,Gl)),this.removeEventListener("gds-blur",rt(this,Gl)),this.removeEventListener("keydown",rt(this,Yl))},Gl=new WeakMap,Yl=new WeakMap,Kl.styles=[Yt,ql],Kl.shadowRootOptions={mode:"open",delegatesFocus:!0},et([Ve()],Kl.prototype,"label",2),et([Ve({type:Boolean,reflect:!0})],Kl.prototype,"open",2),et([Ve({type:Boolean,reflect:!0})],Kl.prototype,"searchable",2),et([Ve({type:Boolean,reflect:!0})],Kl.prototype,"multiple",2),et([Ve()],Kl.prototype,"compareWith",2),et([Ve()],Kl.prototype,"searchFilter",2),et([Ve({type:Boolean,attribute:"sync-popover-width"})],Kl.prototype,"syncPopoverWidth",2),et([Ve({type:Number,attribute:"max-height"})],Kl.prototype,"maxHeight",2),et([Ve()],Kl.prototype,"size",2),et([Ve({type:Boolean,attribute:"hide-label"})],Kl.prototype,"hideLabel",2),et([Ve()],Kl.prototype,"disableMobileStyles",2),et([Ne("#trigger")],Kl.prototype,"_elTriggerBtn",2),et([Fe("#listbox")],Kl.prototype,"_elListbox",2),et([Ne("#searchinput")],Kl.prototype,"_elSearchInput",2),et([vn({attributes:!0,childList:!0,subtree:!0,characterData:!0})],Kl.prototype,"_handleLightDOMChange",1),et([yn("value")],Kl.prototype,"_handleValueChange",1),et([yn("open")],Kl.prototype,"_onOpenChange",1),Kl=et([lt("gds-dropdown")],Kl);var Xl,Jl,Ql,ed,td,rd=be`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`,nd=class extends qt{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,nt(this,Xl,ln()),nt(this,Jl,(e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach((e=>{e!==t&&(e.selected=!1)}))),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))})),new Gr(this)}get navigableItems(){return this.visibleOptionElements}get options(){return rt(this,Xl).value&&Yr(rt(this,Xl).value).assignedElements().filter((e=>!e.hasAttribute("isplaceholder")&&"gds-option"===e.gdsElementName))||[]}get visibleOptionElements(){return this.options.filter((e=>!e.hidden))}get visibleSelectedOptionElements(){return this.options.filter((e=>e.selected&&!e.hidden))}get selection(){return this.options.filter((e=>e.selected))}set selection(e){this.options.forEach((t=>{t.selected=e.some((e=>this.compareWith(e,t.value)))}))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),dr.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",rt(this,Jl))}focus(){var e;null==(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])||e.focus()}render(){return ht`<slot ${cn(rt(this,Xl))}></slot>`}_rerenderOptions(){this.options.forEach((e=>{e.requestUpdate()}))}};Xl=new WeakMap,Jl=new WeakMap,nd.styles=rd,et([Ve({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],nd.prototype,"multiple",2),et([Ve()],nd.prototype,"compareWith",2),et([yn("multiple")],nd.prototype,"_rerenderOptions",1),nd=et([lt("gds-listbox")],nd);var od=class extends(gn(qt)){constructor(){super(),nt(this,ed),nt(this,Ql,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",it(this,ed,td)),this.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),it(this,ed,td).call(this,e))}))}get hidden(){return rt(this,Ql)}set hidden(e){this.isPlaceholder||(ot(this,Ql,"true"===e||!0===e),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(ot(this,Ql,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then((()=>dr.instance.apply(this,"gds-option")))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(ot(this,Ql,!0),this.setAttribute("aria-hidden","true")):(ot(this,Ql,!1),this.setAttribute("aria-hidden","false"))}render(){var e;const t=null==(e=this.parentElement)?void 0:e.multiple,r=ht`
      <span class="checkbox ${Rr({checked:this.selected})}">
        ${this.selected?ht`<gds-icon-checkmark stroke="4"></gds-icon-checkmark>`:""}
      </span>
    `;return t||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),ht`<div>${ki(t,(()=>r))} <slot></slot></div>`}};Ql=new WeakMap,ed=new WeakSet,td=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))},od.styles=[Yt,fn],et([Ve()],od.prototype,"value",2),et([Ve({attribute:"aria-hidden",reflect:!0})],od.prototype,"hidden",1),et([Ve({attribute:"aria-selected",reflect:!0})],od.prototype,"selected",2),et([Ve({type:Boolean,reflect:!0})],od.prototype,"isPlaceholder",2),et([yn("isplaceholder")],od.prototype,"_handlePlaceholderStatusChange",1),od=et([lt("gds-option")],od);var id=class extends ii{};id._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',id._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>',id._name="chevron-bottom",id=et([lt("gds-icon-chevron-bottom")],id);var sd,ad,ld,dd,cd,ud,hd,pd,gd,fd,md,bd,vd,yd,xd,wd,kd,_d,Cd=class extends ii{};Cd._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Cd._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99454C22.2979 3.40464 22.4157 4.18729 22.0056 4.74263L10.0056 20.9926C9.80433 21.2652 9.50107 21.4443 9.16524 21.4891C8.82942 21.5339 8.4898 21.4404 8.22417 21.2301L2.22417 16.4801C1.6829 16.0516 1.59149 15.2655 2.01999 14.7242C2.4485 14.1829 3.23466 14.0915 3.77593 14.52L8.76241 18.4677L19.9945 3.25753C20.4046 2.70218 21.1873 2.58444 21.7426 2.99454Z" fill="currentColor"/>',Cd._name="checkmark",Cd=et([lt("gds-icon-checkmark")],Cd);var $d=class extends lit_element_r{constructor(){super(...arguments),nt(this,gd),nt(this,md),nt(this,vd),nt(this,xd),nt(this,kd),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=it(this,vd,yd).call(this,this.value,this.length),nt(this,sd,""),nt(this,ad,(()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.min:(new Date).getFullYear()-1),this.value=it(this,xd,wd).call(this,e+1),it(this,md,bd).call(this)})),nt(this,ld,(()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.max:(new Date).getFullYear()+1),this.value=it(this,xd,wd).call(this,e-1),it(this,md,bd).call(this)})),nt(this,dd,(e=>{e.stopPropagation(),e.preventDefault(),this.focus()})),nt(this,cd,(()=>{it(this,kd,_d).call(this)})),nt(this,ud,(()=>{""!==rt(this,sd)&&(it(this,kd,_d).call(this),this.value=it(this,xd,wd).call(this,parseInt(this.value.toString())),it(this,md,bd).call(this))})),nt(this,hd,(e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?rt(this,ld).call(this):rt(this,ad).call(this)})),nt(this,pd,(e=>{let t=!1;if("ArrowUp"===e.key)rt(this,ad).call(this),t=!0;else if("ArrowDown"===e.key)rt(this,ld).call(this),t=!0;else{const r=parseInt(e.key);isNaN(r)||(rt(this,sd).length<this.length&&(ot(this,sd,rt(this,sd)+r.toString()),this.value=parseInt(rt(this,sd))),rt(this,sd).length===this.length&&(this.value=it(this,xd,wd).call(this,this.value),it(this,kd,_d).call(this),it(this,gd,fd).call(this),it(this,md,bd).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())}))}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",rt(this,hd)),this.addEventListener("keydown",rt(this,pd)),this.addEventListener("blur",rt(this,ud)),this.addEventListener("focus",rt(this,cd)),this.addEventListener("click",rt(this,dd)),this.addEventListener("mousedown",rt(this,dd))}focus(e){super.focus(e),rt(this,cd).call(this)}render(){return ht`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=it(this,vd,yd).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};function Sd(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function Ed(e,t){Ga(2,arguments);var r=Ya(e),o=Sd(t);return isNaN(o)?new Date(NaN):o?(r.setDate(r.getDate()+o),r):r}function Ad(e,t){return Ga(2,arguments),Ed(e,7*Sd(t))}sd=new WeakMap,ad=new WeakMap,ld=new WeakMap,dd=new WeakMap,cd=new WeakMap,ud=new WeakMap,hd=new WeakMap,pd=new WeakMap,gd=new WeakSet,fd=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof $d){e.focus();break}e=e.nextElementSibling}},md=new WeakSet,bd=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))},vd=new WeakSet,yd=function(e,t){return String(e).padStart(t,"0")},xd=new WeakSet,wd=function(e){return Math.max(this.min,Math.min(this.max,e))},kd=new WeakSet,_d=function(){ot(this,sd,"")},$d.formAssociated=!0,et([Ve({type:Number})],$d.prototype,"value",2),et([Ve({type:Number})],$d.prototype,"length",2),et([Ve({type:Number,attribute:"aria-valuemin"})],$d.prototype,"min",2),et([Ve({type:Number,attribute:"aria-valuemax"})],$d.prototype,"max",2),et([He()],$d.prototype,"displayValue",2),et([yn("value")],$d.prototype,"_refreshDisplayValue",1),$d=et([lt("gds-date-part-spinner")],$d);var Td={};function Md(){return Td}function zd(e,t){var r,o,i,s,a,l,d,c;Ga(1,arguments);var u=Md(),h=Sd(null!==(r=null!==(o=null!==(i=null!==(s=null==t?void 0:t.weekStartsOn)&&void 0!==s?s:null==t||null===(a=t.locale)||void 0===a||null===(l=a.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==i?i:u.weekStartsOn)&&void 0!==o?o:null===(d=u.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==r?r:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=Ya(e),g=p.getDay(),f=(g<h?7:0)+g-h;return p.setDate(p.getDate()-f),p.setHours(0,0,0,0),p}function jd(e,t){var r;Ga(1,arguments);var o=e||{},i=Ya(o.start),s=Ya(o.end).getTime();if(!(i.getTime()<=s))throw new RangeError("Invalid interval");var a=[],l=i;l.setHours(0,0,0,0);var d=Number(null!==(r=null==t?void 0:t.step)&&void 0!==r?r:1);if(d<1||isNaN(d))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=s;)a.push(Ya(l)),l.setDate(l.getDate()+d),l.setHours(0,0,0,0);return a}function Od(e,t){const r=function(e){Ga(1,arguments);var t=Ya(e);return t.setDate(1),t.setHours(0,0,0,0),t}(e),o=function(e){Ga(1,arguments);var t=Ya(e),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}(e),i=function(e,t){Ga(1,arguments);var r=e||{},o=Ya(r.start),i=Ya(r.end),s=i.getTime();if(!(o.getTime()<=s))throw new RangeError("Invalid interval");var a=zd(o,t),l=zd(i,t);a.setHours(15),l.setHours(15),s=l.getTime();for(var d=[],c=a;c.getTime()<=s;)c.setHours(0),d.push(Ya(c)),(c=Ad(c,1)).setHours(15);return d}({start:r,end:o},{weekStartsOn:1});for(;i.length<6;)i.push(Ed(i[i.length-1],7));return ee`${t(i.map((e=>({days:jd({start:e,end:Ed(e,6)})}))))}`}function Ld(e,t){var r,o,i,s,a,l,d,c;Ga(1,arguments);var u=Md(),h=Sd(null!==(r=null!==(o=null!==(i=null!==(s=null==t?void 0:t.firstWeekContainsDate)&&void 0!==s?s:null==t||null===(a=t.locale)||void 0===a||null===(l=a.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==i?i:u.firstWeekContainsDate)&&void 0!==o?o:null===(d=u.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==r?r:1),p=function(e,t){var r,o,i,s,a,l,d,c;Ga(1,arguments);var u=Ya(e),h=u.getFullYear(),p=Md(),g=Sd(null!==(r=null!==(o=null!==(i=null!==(s=null==t?void 0:t.firstWeekContainsDate)&&void 0!==s?s:null==t||null===(a=t.locale)||void 0===a||null===(l=a.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==i?i:p.firstWeekContainsDate)&&void 0!==o?o:null===(d=p.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==r?r:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=new Date(0);f.setFullYear(h+1,0,g),f.setHours(0,0,0,0);var m=zd(f,t),v=new Date(0);v.setFullYear(h,0,g),v.setHours(0,0,0,0);var y=zd(v,t);return u.getTime()>=m.getTime()?h+1:u.getTime()>=y.getTime()?h:h-1}(e,t),g=new Date(0);return g.setFullYear(p,0,h),g.setHours(0,0,0,0),zd(g,t)}function Pd(e,t){Ga(2,arguments);var r=Ya(e),o=Sd(t);if(isNaN(o))return new Date(NaN);if(!o)return r;var i=r.getDate(),s=new Date(r.getTime());return s.setMonth(r.getMonth()+o+1,0),i>=s.getDate()?s:(r.setFullYear(s.getFullYear(),s.getMonth(),i),r)}var Dd,Vd,Hd,Wd,Nd=be`
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
`,Rd=class extends qt{constructor(){super(...arguments),nt(this,Dd),nt(this,Hd),this.min=new Date((new Date).getFullYear()-10,0,1),this.max=new Date((new Date).getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=e=>e.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=function(e){Ga(1,arguments);var t=Ya(e),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(0,0,0,0),t}(new Date(this.focusedYear,e,1)),r=new Date(this.focusedDate);r.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),r.setMonth(e),r.setHours(12,0,0,0),this.focusedDate=r}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){var t;return null==(t=this.shadowRoot)?void 0:t.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),dr.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",it(this,Hd,Wd)),window.addEventListener("lit-localize-status",(e=>{"ready"===e.detail.status&&(this._currentLocale=e.detail.readyLocale)}))}focus(){var e;super.focus(),null==(e=this._elFocusedCell)||e.focus()}render(){const e=new Date;return ee`<table role="grid" aria-label="${wi(this.label)}">
      ${ki(!this.hideDayNames,(()=>ee`<thead role="rowgroup">
            <tr role="row">
              ${ki(this.showWeekNumbers,(()=>ee`<th></th>`))}
              <th>${fr("Mon")}</th>
              <th>${fr("Tue")}</th>
              <th>${fr("Wed")}</th>
              <th>${fr("Thu")}</th>
              <th>${fr("Fri")}</th>
              <th>${fr("Sat")}</th>
              <th>${fr("Sun")}</th>
            </tr>
          </thead>`))}
      <tbody role="rowgroup">
        ${Od(this.focusedDate,(t=>ee`
            ${t.map((t=>ee`
                <tr role="row">
                  ${ki(this.showWeekNumbers,(()=>ee`<td class="week-number" scope="row">
                        ${function(e,t){Ga(1,arguments);var r=Ya(e),o=zd(r,t).getTime()-Ld(r,t).getTime();return Math.round(o/6048e5)+1}(t.days[0])}
                      </td>`))}
                  ${t.days.map((t=>{const r=this.customizedDates&&this.customizedDates.find((e=>Ka(e.date,t))),o=Je({color:"currentColor",disabled:Boolean(this.disabledDates&&this.disabledDates.some((e=>Ka(e,t))))},r),i=!function(e,t){Ga(2,arguments);var r=Ya(e),o=Ya(t);return r.getFullYear()===o.getFullYear()&&r.getMonth()===o.getMonth()}(this.focusedDate,t),s=(t<this.min||t>this.max)&&!Ka(t,this.min)&&!Ka(t,this.max),a=0===t.getDay()||6===t.getDay(),l=o.disabled||i||s||this.disabledWeekends&&a;return this.hideExtraneousDays&&i?ee`<td inert></td>`:ee`
                          <td
                            role="${wi(l?void 0:"gridcell")}"
                            class="${Rr({"custom-date":Boolean(r),disabled:Boolean(l),today:Ka(e,t)})}"
                            ?disabled=${l}
                            tabindex="${Ka(this.focusedDate,t)?0:-1}"
                            aria-selected="${this.value&&Ka(this.value,t)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(t)}"
                            @click=${()=>l?null:it(this,Dd,Vd).call(this,t)}
                            id="dateCell-${t.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${o?null==o?void 0:o.color:""}"
                              >${t.getDate()}</span
                            >

                            ${ki(o.indicator,(()=>ee`<span
                                  class="indicator-${null==o?void 0:o.indicator}"
                                  style="--_color: ${null==o?void 0:o.color}"
                                ></span>`))}
                          </td>
                        `}))}
                </tr>
              `))}
          `))}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};Dd=new WeakSet,Vd=function(e){const t=function(e,t){Ga(2,arguments);var r=Ya(e),o=Sd(t);return r.setHours(o),r}(e,12);this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:t,bubbles:!1,composed:!1}))},Hd=new WeakSet,Wd=function(e){var t;let r=!1,o=new Date(this.focusedDate);if("ArrowLeft"===e.key?(o=Ed(this.focusedDate,-1),r=!0):"ArrowRight"===e.key?(o=Ed(this.focusedDate,1),r=!0):"ArrowUp"===e.key?(o=Ed(this.focusedDate,-7),r=!0):"ArrowDown"===e.key?(o=Ed(this.focusedDate,7),r=!0):"Enter"===e.key||" "===e.key?((null==(t=this._elFocusedCell)?void 0:t.hasAttribute("disabled"))||it(this,Dd,Vd).call(this,this.focusedDate),r=!0):"Home"===e.key?(o=new Date(this.focusedYear,this.focusedMonth,1),r=!0):"End"===e.key?(o=new Date(this.focusedYear,this.focusedMonth+1,0),r=!0):"PageUp"===e.key?(o=function(e,t){return Ga(2,arguments),Pd(e,-Sd(t))}(this.focusedDate,1),r=!0):"PageDown"===e.key&&(o=Pd(this.focusedDate,1),r=!0),o.getFullYear()>=this.min.getFullYear()&&o.getFullYear()<=this.max.getFullYear()){this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:o,bubbles:!1,composed:!1,cancelable:!0}))&&(this.focusedDate=o)}r&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then((()=>{var e;null==(e=this._elFocusedCell)||e.focus()})))},Rd.styles=[Yt,Nd],Rd.shadowRootOptions={mode:"open",delegatesFocus:!0},et([Ve()],Rd.prototype,"value",2),et([Ve({type:Date})],Rd.prototype,"min",2),et([Ve({type:Date})],Rd.prototype,"max",2),et([Ve()],Rd.prototype,"focusedDate",2),et([Ve({type:Boolean,attribute:"disabled-weekends"})],Rd.prototype,"disabledWeekends",2),et([Ve({type:Array,attribute:"disabled-dates"})],Rd.prototype,"disabledDates",2),et([Ve({type:Number})],Rd.prototype,"focusedMonth",1),et([Ve({type:Number})],Rd.prototype,"focusedYear",1),et([Ve({type:Boolean})],Rd.prototype,"showWeekNumbers",2),et([Ve({type:Boolean})],Rd.prototype,"hideExtraneousDays",2),et([Ve({type:Boolean})],Rd.prototype,"hideDayNames",2),et([Ve({attribute:!1})],Rd.prototype,"customizedDates",2),et([Ve()],Rd.prototype,"label",2),et([Ve({attribute:!1})],Rd.prototype,"dateLabelTemplate",2),et([He()],Rd.prototype,"_currentLocale",2),et([Ne('td[tabindex="0"]')],Rd.prototype,"_elFocusedCell",2),et([yn("value")],Rd.prototype,"_valueChanged",1),Rd=et([lt("gds-calendar"),yr()],Rd);var Fd=class extends qt{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver((()=>{this.requestUpdate()})),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.formObserver)||e.disconnect()}render(){var e;const t=Array.from((null==(e=this.form)?void 0:e.elements)||[]).filter((e=>e.invalid));return ki(t.length>0,(()=>ht`<gds-card level="3" border="4xs/negative" border-radius="2xs" padding="m" color="error-text">
          <gds-flex gap="s" level=="3" color="negative">
            <gds-container>
              <gds-icon-triangle-exclamation></gds-icon-triangle-exclamation>
            </gds-container>
            <gds-container >
            ${fr(hr`There are ${t.length} errors to correct before you can continue:`)}
            <ul>
              ${t.map((e=>ht`<li><a href @click=${t=>{t.preventDefault(),e.focus()}}>${e.label}</li>`))}
            </ul>
          </gds-container>
        <gds-flex>
      </gds-card>`))}};Fd.styles=be`
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
  `,Fd=et([lt("gds-form-summary")],Fd);var Id,Bd,Ud,Zd,Gd,Yd,qd,Kd,Xd,Jd,Qd,ec,tc,rc,nc,oc,ic,sc,ac,lc=be`
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
`,dc=class extends qt{constructor(){super(...arguments),nt(this,Zd),nt(this,Yd),nt(this,Kd),nt(this,Jd),nt(this,ec),nt(this,rc),nt(this,oc),nt(this,sc),this.placement="bottom",this.overlappedBy=[],this.target=[],this.label="Coachmark",this.computeVisibility=(e,t,r)=>r,this.targetElement=void 0,this._isVisible=!1,this._preventClose=!1,nt(this,Id,ln()),nt(this,Bd,ln()),nt(this,Ud,void 0)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",(()=>{setTimeout((()=>{it(this,sc,ac).call(this),it(this,Zd,Gd).call(this)}),400)})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&this._isVisible&&it(this,Zd,Gd).call(this)}))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",it(this,Zd,Gd)),document.removeEventListener("keydown",(e=>{"Escape"===e.key&&this._isVisible&&it(this,Zd,Gd).call(this)}))}firstUpdated(){this.target.length>0&&(this.targetElement=it(this,Yd,qd).call(this,this.target),it(this,sc,ac).call(this))}setPreventClose(e){this._preventClose=e}render(){return ht`${ki(this.target.length>0,(()=>ht`
        <div
          role="dialog"
          id="body"
          aria-label=${this.label}
          ${cn(rt(this,Id))}
        >
          <slot></slot>
          <div id="arrow" ${cn(rt(this,Bd))}></div>
        </div>
      `),(()=>ht``))}`}};Id=new WeakMap,Bd=new WeakMap,Ud=new WeakMap,Zd=new WeakSet,Gd=function(){var e,t;this._isVisible&&(this._isVisible=!1,null==(e=rt(this,Id).value)||e.remove(),null==(t=rt(this,Ud))||t.call(this),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this._isVisible,reason:"closed"},bubbles:!1,composed:!1})))},Yd=new WeakSet,qd=function(e){let t,r=!1;for(const o of e)"shadowRoot"!==o?t?r&&t.shadowRoot?(t=t.shadowRoot.querySelector(o),r=!1):t=t.querySelector(o):t=document.querySelector(o):r=!0;return t},Kd=new WeakSet,Xd=function(e,t){if(e==t)return;const r=e.getBoundingClientRect(),o=t.getBoundingClientRect();return r.top<o.bottom&&r.bottom>o.top&&r.left<o.right&&r.right>o.left},Jd=new WeakSet,Qd=function(e){if(!e)return!1;for(const t of e){const e=document.querySelector(t);if(e&&"hidden"!==getComputedStyle(e).visibility&&it(this,Kd,Xd).call(this,this.targetElement,e))return!0}return!1},ec=new WeakSet,tc=function(e){const t=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,o=window.innerWidth||document.documentElement.clientWidth;return t.top+t.height<0||t.top>r||t.left+t.width<0||t.left>o},rc=new WeakSet,nc=async function(e,t,r){return Oo(e,t,{placement:this.placement,middleware:[Ao((()=>({mainAxis:16,alignmentAxis:16}))),{name:"detectOverflow",fn:async e=>({data:await Eo(e,{boundary:document.body,rootBoundary:"document",altBoundary:!0,padding:{top:167,left:20}})})},To({padding:16}),Mo(),zo(),jo({padding:16,element:r})]})},oc=new WeakSet,ic=function(){if(!this.targetElement)return!1;const e=it(this,ec,tc).call(this,this.targetElement),t=this.targetElement.checkVisibility(),r=0!==this.overlappedBy.length&&it(this,Jd,Qd).call(this,this.overlappedBy);return this.computeVisibility(this,this.targetElement,!r&&!e&&t)},sc=new WeakSet,ac=async function(){const e=this.targetElement,t=rt(this,Id).value,r=rt(this,Bd).value;if(e&&t&&r)try{ot(this,Ud,So(e,t,(()=>{it(this,rc,nc).call(this,e,t,r).then((e=>{let{x:o,y:i,middlewareData:s,placement:a}=e;if(it(this,oc,ic).call(this)){if(this._isVisible=!0,Object.assign(t.style,{visibility:"visible",opacity:1,left:`${o}px`,top:`${i}px`}),s.arrow){const{x:e,y:t}=s.arrow;r.removeAttribute("class"),r.classList.add("arrow-"+a),Object.assign(r.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:""})}}else this._isVisible=!1,Object.assign(t.style,{visibility:"hidden",opacity:0})}))})))}catch(o){console.warn("failed to render tooltips")}},dc.styles=lc,et([Ve()],dc.prototype,"placement",2),et([Ve({attribute:!1})],dc.prototype,"overlappedBy",2),et([Ve({attribute:!1})],dc.prototype,"target",2),et([Ve()],dc.prototype,"label",2),et([Ve({attribute:!1})],dc.prototype,"computeVisibility",2),et([He()],dc.prototype,"_isVisible",2),et([He()],dc.prototype,"_preventClose",2),dc=et([lt("gds-coachmark")],dc);var cc=be`
  .button {
    box-shadow: var(--gds-shadow-m);
    position: fixed;
    inset: auto var(--gds-space-3xl) var(--gds-space-3xl) auto;
    block-size: calc(var(--_block-size) + var(--gds-space-xs));
  }
`,uc=class extends Li{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",cc)}};let hc,pc,gc,fc,mc,bc,vc,yc,xc,wc,kc,_c,Cc,$c,Sc,Ec,Ac,Tc,Mc,zc;function jc(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:Lc((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||Lc(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:Oc(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function Oc(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Lc(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}et([Lt({valueTemplate:e=>e,selector:'[part="_button"]'})],uc.prototype,"position",2),et([Lt({valueTemplate:e=>e})],uc.prototype,"transform",2),et([Lt({valueTemplate:e=>e,selector:'[part="_button"]'})],uc.prototype,"inset",2),uc=et([lt("gds-fab")],uc),pc=[Le("form-validation")];class FormValidationExample extends lit_element_r{static#e=(()=>[gc,hc]=jc(this,[],pc,0,void 0,lit_element_r).c)();createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return ht`<gds-card border="4xs/base300" padding="m" border-radius="s">
      <form>
        <gds-input
          required
          label="Name"
          placeholder="Enter your name"
        ></gds-input>
        <gds-datepicker
          label="Birth date"
          .validator=${{validate:e=>{if(console.log("Inside datepicker validator",e.value),void 0===e.value)return[{...e.validity,valid:!1,customError:!0},"This field is required"]}}}
        ></gds-datepicker>
        <gds-dropdown
          label="Favorite pet"
          .validator=${{validate:e=>{if(console.log("Inside custom validator",e.value),"cat"!==e.value)return[{...e.validity,valid:!1,customError:!0},"Only cats are allowed!"]}}}
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
    </gds-card>`}static#t=(()=>hc())()}function Pc(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:Vc((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||Vc(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:Dc(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function Dc(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Vc(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}bc=[Le("datepicker-example")];class CalendarExample extends lit_element_r{static#e=(()=>({e:[yc,wc,fc],c:[kc,mc]}=Pc(this,[[vc,1,"disabledWeekends"],[xc,1,"showWeekNumbers"]],bc,0,void 0,lit_element_r)))();[(vc=He(),xc=He(),"createRenderRoot")](){return this}connectedCallback(){super.connectedCallback()}#r=(()=>(fc(this),yc(this,!1)))();get disabledWeekends(){return this.#r}set disabledWeekends(e){this.#r=e}#n=(()=>wc(this,!1))();get showWeekNumbers(){return this.#n}set showWeekNumbers(e){this.#n=e}render(){return ht` <div style="width:320px; margin: 8rem auto;">
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
    </div>`}static#t=(()=>mc())()}function Hc(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:Nc((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||Nc(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:Wc(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function Wc(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Nc(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}const Rc=`${(new Date).getFullYear()}-${(new Date).getMonth()+1}`;let Fc,Ic,Bc;$c=[Le("calendar-example")];class app_calendar_element_CalendarExample extends lit_element_r{static#e=(()=>({e:[Ec,Tc,zc,_c],c:[Fc,Cc]}=Hc(this,[[Sc,1,"disabledWeekends"],[Ac,1,"showWeekNumbers"],[Mc,1,"showCustomizedDates"]],$c,0,void 0,lit_element_r)))();[(Sc=He(),Ac=He(),Mc=He(),"createRenderRoot")](){return this}connectedCallback(){super.connectedCallback()}#r=(()=>(_c(this),Ec(this,!1)))();get disabledWeekends(){return this.#r}set disabledWeekends(e){this.#r=e}#n=(()=>Tc(this,!1))();get showWeekNumbers(){return this.#n}set showWeekNumbers(e){this.#n=e}#o=(()=>zc(this,!1))();get showCustomizedDates(){return this.#o}set showCustomizedDates(e){this.#o=e}#i=(()=>[{date:new Date(`${Rc}-07`),indicator:"dot",color:"var(--intent-danger-background)"},{date:new Date(`${Rc}-12`),indicator:"dot",color:"var(--intent-danger-background)"},{date:new Date(`${Rc}-24`),indicator:"dot",color:"var(--intent-danger-background)"},{date:new Date(`${Rc}-21`),indicator:"dot",disabled:!0}])();render(){return ht` <div style="width:320px; margin: 8rem auto;">
      <h3 style="margin-bottom: 2rem;">Standalone calendar</h3>
      <div class="card" style="padding: 0">
        <gds-calendar
          .disabledWeekends=${this.disabledWeekends}
          .showWeekNumbers=${this.showWeekNumbers}
          .customizedDates=${this.showCustomizedDates?this.#i:[]}
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
    </div>`}static#t=(()=>Cc())()}function Uc(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:Gc((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||Gc(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:Zc(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function Zc(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Gc(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}let Yc,qc,Kc,Xc,Jc,Qc,eu;Bc=[Le("gds-login")];class CardExample extends lit_element_r{static#e=(()=>[Yc,Ic]=Uc(this,[],Bc,0,void 0,lit_element_r).c)();createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return ht`
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
                src=${"https://github.com/user-attachments/assets/1c038c0b-b468-48d2-b171-092534b3a0e2"}
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
                      .validator=${{validate:e=>""===e.value?[{...e.validity,valid:!1,customError:!0},"Du m\xe5ste fylla i ditt personnummer."]:12!==e.value.length||isNaN(e.value)?[{...e.validity,valid:!1,customError:!0},"Personnumret m\xe5ste vara 12 siffror."]:void 0}}
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
                      .validator=${{validate:e=>""===e.value?[{...e.validity,valid:!1,customError:!0},"Du m\xe5ste fylla i en kod."]:6!==e.value.length||isNaN(e.value)?[{...e.validity,valid:!1,customError:!0},"Koden m\xe5ste vara 6 siffror."]:void 0}}
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
    `}static#t=(()=>Ic())()}function tu(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:nu((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||nu(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:ru(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function ru(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function nu(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}Kc=[Le("tp-card-carousel")];class CardCarousel extends lit_element_r{static#e=(()=>[Xc,qc]=tu(this,[],Kc,0,void 0,lit_element_r).c)();render(){return ht`
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
        `}static#t=(()=>qc())()}function ou(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:su((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||su(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:iu(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function iu(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function su(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}Qc=[Le("gds-onboarding")];class onboarding_onboarding_element_CardExample extends lit_element_r{static#e=(()=>[eu,Jc]=ou(this,[],Qc,0,void 0,lit_element_r).c)();createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return ht`<tp-card-carousel></tp-card-carousel>`}static#t=(()=>Jc())()}var au=be`
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
`,lu=class extends qt{constructor(){super(...arguments),this.level="2"}render(){return ht`<hr />`}};lu.styles=[Yt,au],et([Ve()],lu.prototype,"level",2),et([Lt({valueTemplate:function(e){const[t,r]=e.split("/");return((e,t)=>(e=>{const t=e.trim();return t.startsWith("#")||t.startsWith("rgb(")||t.startsWith("rgba(")||t.startsWith("hsl(")||t.startsWith("hsla(")})(e)?t?`color-mix(in srgb, ${e} ${100*parseFloat(t)}%, transparent 0%)`:e:`var(--gds-color-l${this.level}-border-${e})`)(t,r)}})],lu.prototype,"color",2),et([Lt({property:"--_size",valueTemplate:e=>`var(--gds-space-${e})`})],lu.prototype,"size",2),et([Lt({property:"opacity",valueTemplate:e=>e})],lu.prototype,"opacity",2),lu=et([lt("gds-divider")],lu);var du=class extends ii{};du._regularSVG='<path d="M7.75 20.75L3.75 16.75L7.75 12.75M16.25 11.25L20.25 7.25L16.25 3.25M5 16.75H20.25M3.75 7.25H19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',du._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7197 2.71967C16.0126 2.42678 16.4874 2.42678 16.7803 2.71967L20.7803 6.71967C21.0732 7.01256 21.0732 7.48744 20.7803 7.78033L16.7803 11.7803C16.4874 12.0732 16.0126 12.0732 15.7197 11.7803C15.4268 11.4874 15.4268 11.0126 15.7197 10.7197L18.4393 8H3.75C3.33579 8 3 7.66421 3 7.25C3 6.83579 3.33579 6.5 3.75 6.5H18.4393L15.7197 3.78033C15.4268 3.48744 15.4268 3.01256 15.7197 2.71967ZM8.28033 12.2197C8.57322 12.5126 8.57322 12.9874 8.28033 13.2803L5.56066 16H20.25C20.6642 16 21 16.3358 21 16.75C21 17.1642 20.6642 17.5 20.25 17.5H5.56066L8.28033 20.2197C8.57322 20.5126 8.57322 20.9874 8.28033 21.2803C7.98744 21.5732 7.51256 21.5732 7.21967 21.2803L3.21967 17.2803C2.92678 16.9874 2.92678 16.5126 3.21967 16.2197L7.21967 12.2197C7.51256 11.9268 7.98744 11.9268 8.28033 12.2197Z" fill="currentColor"/>',du._name="arrow-left-right",du=et([lt("gds-icon-arrow-left-right")],du);var cu=class extends ii{};cu._regularSVG='<path d="M12 3.75V12M12 12V20.25M12 12H3.75M12 12H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',cu._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H12.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H11.25V3.75C11.25 3.33579 11.5858 3 12 3Z" fill="currentColor"/>',cu._name="plus-large",cu=et([lt("gds-icon-plus-large")],cu);var uu=class extends ii{};uu._regularSVG='<path d="M20.7125 11.5768L22.25 7.25L15.075 3.75C14.0732 7.01444 9.92685 7.01444 8.925 3.75L1.75 7.25L3.2875 11.5768L5.75 10.45V20.25H18.25V10.45L20.7125 11.5768Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>',uu._solidSVG='<path d="M9.642 3.52996C9.57767 3.32033 9.42482 3.14936 9.22368 3.06204C9.02254 2.97471 8.79327 2.97979 8.59619 3.07592L1.42119 6.57592C1.07817 6.74325 0.915507 7.1415 1.0433 7.50112L2.5808 10.8279C2.65123 11.0261 2.80164 11.1856 2.99536 11.2676C3.18908 11.3495 3.40831 11.3463 3.59957 11.2588L5.00001 10.618V20.25C5.00001 20.6642 5.33579 21 5.75001 21H18.25C18.6642 21 19 20.6642 19 20.25V10.618L20.4004 11.2588C20.5917 11.3463 20.8109 11.3495 21.0047 11.2676C21.1984 11.1856 21.3488 11.0261 21.4192 10.8279L22.9567 7.50112C23.0845 7.1415 22.9218 6.74325 22.5788 6.57592L15.4038 3.07592C15.2067 2.97979 14.9775 2.97471 14.7763 3.06204C14.5752 3.14936 14.4223 3.32033 14.358 3.52996C13.9516 4.85432 12.9502 5.44833 12 5.44833C11.0498 5.44833 10.0484 4.85432 9.642 3.52996Z" fill="currentColor"/>',uu._name="fashion",uu=et([lt("gds-icon-fashion")],uu);var hu=class extends ii{};hu._regularSVG='<path d="M7.75 6.75H2.75V20.25H21.25V6.75H16.25M7.75 6.75V2.75H16.25V6.75M7.75 6.75H16.25" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',hu._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7 2.75C7 2.33579 7.33579 2 7.75 2H16.25C16.6642 2 17 2.33579 17 2.75V6H21.25C21.6642 6 22 6.33579 22 6.75V20.25C22 20.6642 21.6642 21 21.25 21H2.75C2.33579 21 2 20.6642 2 20.25V6.75C2 6.33579 2.33579 6 2.75 6H7V2.75ZM8.5 6H15.5V3.5H8.5V6Z" fill="currentColor"/>',hu._name="suitcase-work",hu=et([lt("gds-icon-suitcase-work")],hu);var pu=class extends ii{};pu._regularSVG='<path d="M20.25 12V20.25H3.75002V12M9.50002 3.75H14.5001M9.50002 3.75L8.90899 8.77398C8.69131 10.6243 10.137 12.25 12.0001 12.25C13.8631 12.25 15.3088 10.6243 15.0911 8.77397L14.5001 3.75M9.50002 3.75H4.41668L2.97236 8.35377C2.36638 10.2853 3.8091 12.25 5.83349 12.25C7.35405 12.25 8.63391 11.1119 8.81158 9.60174L9.50002 3.75ZM14.5001 3.75H19.5833L21.0277 8.35377C21.6337 10.2853 20.1909 12.25 18.1665 12.25C16.646 12.25 15.3661 11.1119 15.1885 9.60174L14.5001 3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',pu._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.70108 3.52549C3.79918 3.21279 4.08896 3 4.41669 3H19.5834C19.9111 3 20.2009 3.21279 20.299 3.52549L21.7433 8.12926C22.1626 9.4657 21.7973 10.8148 20.9585 11.7532C20.9854 11.8305 21 11.9135 21 12V20.25C21 20.6642 20.6642 21 20.25 21H3.75002C3.33581 21 3.00002 20.6642 3.00002 20.25V12C3.00002 11.9135 3.01466 11.8305 3.04158 11.7532C2.20273 10.8148 1.83749 9.4657 2.25676 8.12926L3.70108 3.52549ZM10.167 4.5L9.65386 8.86161C9.48864 10.266 10.586 11.5 12.0001 11.5C13.4097 11.5 14.5046 10.2738 14.3478 8.87488L13.8331 4.5H10.167ZM15.8379 8.70317C15.8373 8.69756 15.8366 8.69195 15.836 8.68634L15.3435 4.5H19.0326L20.3121 8.57827C20.7665 10.0267 19.6846 11.5 18.1665 11.5C17.0263 11.5 16.0666 10.6465 15.9333 9.51411L15.8379 8.70317ZM8.65662 4.5L8.06672 9.51411C7.93349 10.6465 6.97374 11.5 5.8335 11.5C4.31543 11.5 3.23356 10.0267 3.68798 8.57827L4.96744 4.5H8.65662Z" fill="currentColor"/>',pu._name="store",pu=et([lt("gds-icon-store")],pu);var gu=class extends ii{};gu._regularSVG='<path d="M3.75 3.75V9C3.75 10.7949 5.20507 12.25 7 12.25C8.79493 12.25 10.25 10.7949 10.25 9V3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/><path d="M7 12.25V20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/><path d="M17 12.5V20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/><path d="M20.5 8.00758C20.5 10.4238 18.933 12.25 17 12.25C15.067 12.25 13.5 10.4238 13.5 8.00758C13.5 5.59133 15.067 3.5 17 3.5C18.933 3.5 20.5 5.59133 20.5 8.00758Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 3.75V9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>',gu._solidSVG='<path d="M17 2.75C15.7463 2.75 14.669 3.42888 13.9303 4.39093C13.1911 5.35359 12.75 6.64303 12.75 8.00758C12.75 10.4237 14.1789 12.5161 16.25 12.927V21H17.75V12.927C19.8211 12.5161 21.25 10.4237 21.25 8.00758C21.25 6.64303 20.8089 5.35359 20.0697 4.39093C19.331 3.42888 18.2537 2.75 17 2.75Z" fill="currentColor"/><path d="M4.5 3H3V9C3 10.9528 4.39935 12.5787 6.25 12.9298V21H7.75V12.9298C9.60065 12.5787 11 10.9528 11 9V3H9.5V9C9.5 10.3807 8.38071 11.5 7 11.5C5.61929 11.5 4.5 10.3807 4.5 9V3Z" fill="currentColor"/><path d="M7.75 3H6.25V10H7.75V3Z" fill="currentColor"/>',gu._name="knife-spoon",gu=et([lt("gds-icon-knife-spoon")],gu);var fu=class extends ii{};let mu,bu,vu,yu,xu,wu,ku,_u,Cu,$u,Su,Eu;function Au(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:Mu((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||Mu(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:Tu(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function Tu(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Mu(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}fu._regularSVG='<path d="M12 3.75V15M12 3.75L16.5 8.25M12 3.75L7.5 8.25M20.25 12.75V20.25H3.75V12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',fu._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967L17.0303 7.71967C17.3232 8.01256 17.3232 8.48744 17.0303 8.78033C16.7374 9.07322 16.2626 9.07322 15.9697 8.78033L12.75 5.56066V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V5.56066L8.03033 8.78033C7.73744 9.07322 7.26256 9.07322 6.96967 8.78033C6.67678 8.48744 6.67678 8.01256 6.96967 7.71967L11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 12C4.16421 12 4.5 12.3358 4.5 12.75V19.5H19.5V12.75C19.5 12.3358 19.8358 12 20.25 12C20.6642 12 21 12.3358 21 12.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V12.75C3 12.3358 3.33579 12 3.75 12Z" fill="currentColor"/>',fu._name="arrow-out-of-box",fu=et([lt("gds-icon-arrow-out-of-box")],fu),bu=[Le("gds-jit")];class GdsJit extends lit_element_r{static#e=(()=>[vu,mu]=Au(this,[],bu,0,void 0,lit_element_r).c)();connectedCallback(){super.connectedCallback()}render(){return ht`
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
    `}static#t=(()=>mu())()}function zu(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:Ou((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||Ou(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:ju(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function ju(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Ou(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}xu=[Le("tp-savings-outside")];class TpSavingsOutside extends lit_element_r{static#e=(()=>[wu,yu]=zu(this,[],xu,0,void 0,lit_element_r).c)();connectedCallback(){super.connectedCallback()}render(){return ht` <gds-card variant="secondary" padding="l">
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
    </gds-card>`}static#t=(()=>yu())()}function Lu(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:Du((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||Du(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:Pu(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function Pu(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Du(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}_u=[Le("tp-savings-goal")];class TpSavingsGoal extends lit_element_r{static#e=(()=>[Cu,ku]=Lu(this,[],_u,0,void 0,lit_element_r).c)();connectedCallback(){super.connectedCallback()}render(){return ht`<gds-card variant="secondary" padding="2xs 0">
      <gds-flex flex-direction="column" gap="m" padding="xs m">
        <gds-flex gap="s" align-items="center" justify-content="space-between">
          <gds-text font-size="preamble-s">Sparmål</gds-text>
          <gds-button rank="tertiary"
            ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal
          ></gds-button>
        </gds-flex>
        <gds-flex>
          <gds-container
            background-image="url('/assets/copenhagen.png')"
            width="24px"
            height="24px"
          ></gds-container>
        </gds-flex>
      </gds-flex>
    </gds-card>`}static#t=(()=>ku())()}function Vu(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:Wu((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||Wu(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:Hu(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function Hu(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Wu(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}Su=[Le("tp-accounts")];class TPAccounts extends lit_element_r{static#e=(()=>[Eu,$u]=Vu(this,[],Su,0,void 0,lit_element_r).c)();render(){return ht`
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

          <gds-flex
            flex-direction="column"
            gap="xs"
            border="0 0 4xs/primary 0"
            padding="0 0 m 0"
            flex="1"
          >
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
          <gds-flex
            flex-direction="column"
            gap="xs"
            border="0 0 4xs/primary 0"
            padding="0 0 m 0"
            flex="1"
          >
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
    `}static#t=(()=>$u())()}const Nu=r.p+"acne.af6eeff3cdaaa9e6.svg",Ru=r.p+"ica.d0f84408050e18c8.svg",Fu=r.p+"swish.07852426f1267e02.svg";let Iu,Bu,Uu,Zu,Gu,Yu,qu,Ku,Xu,Ju,Qu,eh,th,rh,nh,oh,ih,sh,ah,lh,dh;function ch(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:hh((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||hh(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:uh(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function uh(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function hh(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}Bu=[Le("gds-carousel-trans")];class GdsCarousel extends lit_element_r{static#e=(()=>[Uu,Iu]=ch(this,[],Bu,0,void 0,lit_element_r).c)();connectedCallback(){super.connectedCallback()}renderIca(){return ht`<img src="${Ru}" alt="ICA Logo" />`}renderSwish(){return ht`<img src="${Fu}" alt="Swish Logo" />`}renderAcne(){return ht`<img src="${Nu}" alt="Acne Logo" />`}render(){return ht` <style>
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
          <gds-card class="item" padding="0" min-width="40%">
            <gds-flex place-items="center" flex-direction="column">
              <gds-card padding="0 0 m 0">${this.renderIca()}</gds-card>
              <gds-text font-size="detail-s" tag="p">Livsmedel</gds-text
              ><gds-card padding="0" margin="3xs 0 2xs 0"
                ><gds-text font-size="detail-m" tag="p"
                  >ICA Sabbatsberg</gds-text
                ></gds-card
              >
              <gds-text font-size="detail-m" tag="p"
                >-240,00</gds-text
              ></gds-flex
            ></gds-card
          >
          <gds-card class="item" padding="0" min-width="40%">
            <gds-flex place-items="center" flex-direction="column">
              <gds-card padding="0 0 m 0">${this.renderSwish()}</gds-card>
              <gds-text font-size="detail-s">Inkomst</gds-text>
              <gds-card padding="0" margin="2xs 0 0 0">
                <gds-text font-size="detail-m">Swish Tobbe</gds-text>
              </gds-card>
              <gds-text color="positive" font-size="detail-m"
                >500,00</gds-text
              ></gds-flex
            ></gds-card
          >
          <gds-card class="item" padding="0" min-width="40%">
            <gds-flex place-items="center" flex-direction="column">
              <gds-card padding="0 0 m 0">${this.renderIca()}</gds-card>
              <gds-text font-size="detail-s" tag="p">Livsmedel</gds-text
              ><gds-card padding="0" margin="3xs 0 2xs 0"
                ><gds-text font-size="detail-m" tag="p"
                  >ICA Sabbatsberg</gds-text
                ></gds-card
              >
              <gds-text font-size="detail-m" tag="p"
                >-345,50</gds-text
              ></gds-flex
            ></gds-card
          >
          <gds-card class="item" padding="0" min-width="40%">
            <gds-flex place-items="center" flex-direction="column">
              <gds-card padding="0 0 m 0">${this.renderIca()}</gds-card>
              <gds-text font-size="detail-s">Livsmedel</gds-text>
              <gds-card padding="0" margin="2xs 0 0 0">
                <gds-text font-size="detail-m">ICA Sabbatsberg</gds-text>
              </gds-card>
              <gds-text font-size="detail-m">-488,00</gds-text></gds-flex
            ></gds-card
          >
        </gds-flex>
      </gds-card>`}static#t=(()=>Iu())()}function ph(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:fh((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||fh(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:gh(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function gh(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function fh(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}Gu=[Le("tp-cards")];class TPCards extends lit_element_r{static#e=(()=>[Yu,Zu]=ph(this,[],Gu,0,void 0,lit_element_r).c)();render(){return ht`
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

          <gds-flex
            flex-direction="column"
            gap="xs"
            border="0 0 4xs/primary 0"
            padding="0 0 m 0"
            flex="1"
          >
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

          <gds-flex
            flex-direction="column"
            gap="xs"
            border="0 0 4xs/primary 0"
            padding="0 0 m 0"
            flex="1"
          >
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

          <gds-flex
            flex-direction="column"
            gap="xs"
            border="0 0 4xs/primary 0"
            padding="0 0 m 0"
            flex="1"
          >
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
    `}static#t=(()=>Zu())()}function mh(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:vh((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||vh(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:bh(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function bh(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function vh(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}Ku=[Le("tp-transactions")];class TPTransactions extends lit_element_r{static#e=(()=>[Xu,qu]=mh(this,[],Ku,0,void 0,lit_element_r).c)();render(){return ht`
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

          <gds-flex
            flex-direction="column"
            gap="xs"
            border="0 0 4xs/primary 0"
            padding="0 0 m 0"
            flex="1"
          >
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
          <gds-flex
            flex-direction="column"
            gap="xs"
            border="0 0 4xs/primary 0"
            padding="0 0 m 0"
            flex="1"
          >
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
    `}static#t=(()=>qu())()}function yh(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:wh((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||wh(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:xh(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function xh(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function wh(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}eh=[Le("tp-card")];class TPCard extends lit_element_r{static#e=(()=>({e:[rh,Ju],c:[nh,Qu]}=yh(this,[[th,1,"footerSlotOccupied"]],eh,0,void 0,lit_element_r)))();[(th=He(),"connectedCallback")](){super.connectedCallback()}#r=(()=>(Ju(this),rh(this,!1)))();get footerSlotOccupied(){return this.#r}set footerSlotOccupied(e){this.#r=e}render(){return ht`
      <gds-card background="secondary" padding="0">
        <gds-flex flex-direction="column" gap="xl" padding="l">
          <gds-flex justify-content="space-between" align-items="center">
            <slot name="header"></slot>
            <slot name="action"></slot>
          </gds-flex>
          <gds-flex flex-direction="column" gap="m">
            <slot></slot>
          </gds-flex>
        </gds-flex>
        <gds-flex
          border="4xs/primary 0 0 0"
          flex-direction="column"
          padding="m l m m"
        >
          <slot name="footer"></slot>
        </gds-flex>
      </gds-card>
    `}static#t=(()=>Qu())()}function kh(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:Ch((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||Ch(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:_h(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function _h(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Ch(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}ih=[Le("tp-list-item")];class common_list_item_TPCard extends lit_element_r{static#e=(()=>[sh,oh]=kh(this,[],ih,0,void 0,lit_element_r).c)();connectedCallback(){super.connectedCallback()}render(){return ht`
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
    `}static#t=(()=>oh())()}function $h(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:Eh((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||Eh(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:Sh(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function Sh(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Eh(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}lh=[Le("gds-dashboard")];class dashboard_dashboard_element_CardExample extends lit_element_r{static#e=(()=>[dh,ah]=$h(this,[],lh,0,void 0,lit_element_r).c)();createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return ht`
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
        <gds-grid columns="3" gap="xl">
          <tp-transactions></tp-transactions>
          <tp-accounts></tp-accounts>
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
        <tp-news-widget></tp-news-widget>
      </gds-flex>
    `}static#t=(()=>ah())()}var Ah=be`
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
`,Th=class extends qt{querySelectorAll(e){return this.shadowRoot?this.shadowRoot.querySelectorAll(e):new NodeList}querySelector(e){return this.shadowRoot?this.shadowRoot.querySelector(e):null}get innerHTML(){var e;return(null==(e=this.shadowRoot)?void 0:e.innerHTML)||""}set innerHTML(e){this.shadowRoot&&(this.shadowRoot.innerHTML=e)}connectedCallback(){super.connectedCallback(),this._captureDOM()}_captureDOM(){this.shadowRoot&&0!==this.childNodes.length&&this.shadowRoot.replaceChildren(...Array.from(this.childNodes))}};let Mh,zh,jh,Oh,Lh,Ph,Dh,Vh,Hh,Wh,Nh,Rh,Fh,Ih,Bh,Uh,Zh;function Gh(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:qh((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||qh(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:Yh(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function Yh(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function qh(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}Th.styles=[Yt,pt,Ah],et([vn()],Th.prototype,"_captureDOM",1),Th=et([lt("gds-rich-text")],Th),jh=[Le("tp-page-header")];class PageHeader extends lit_element_r{static#e=(()=>({e:[Lh,Mh],c:[Ph,zh]}=Gh(this,[[Oh,1,"viewOptions"]],jh,0,void 0,lit_element_r)))();[(Oh=He(),"createRenderRoot")](){return this}#r=(()=>(Mh(this),Lh(this,{hasAccounts:!1,hasSavings:!1,hasCards:!1})))();get viewOptions(){return this.#r}set viewOptions(e){this.#r=e}render(){return ht`
      <gds-flex justify-content="space-between" flex-direction="row" gap="l">
        <gds-flex flex-direction="row; s{column}" align-items="center">
          <gds-text tag="h1" font-size="heading-s; s{heading-l}"
            >Hey Josephine!</gds-text
          >
          <gds-text
            display="none; s{block}"
            tag="h2"
            font-size="heading-s; s{heading-l}"
            color="secondary"
            >Whats going on?</gds-text
          >
        </gds-flex>
        <gds-flex gap="xs" justify-content="center">
         <!-- <tp-quicklinks></tp-quicklinks> -->
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
            <div slot="trigger">
              <gds-container display="s{none}">
                <gds-button rank="secondary">
                  <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
                </gds-button>
              </gds-container>
              <gds-container display="none; s{block}">
                <gds-button rank="secondary">
                  Shortcuts
                  <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
                </gds-button>
              </gds-container>
            </div>
            <gds-menu-item>
              <label class="form-control"
              >Has accounts
              <input type="checkbox" @change=${e=>this.#s({...this.viewOptions,hasAccounts:e.target.checked})} />
              <i></i>
            </label>
            </gds-menu-item>
            <gds-menu-item>
              <label class="form-control"
                >Has savings
                <input type="checkbox" @change=${e=>this.#s({...this.viewOptions,hasSavings:e.target.checked})} />
                <i></i>
              </label>
            </gds-menu-item>
            <gds-menu-item>
              <label class="form-control"
                >Has cards
                <input type="checkbox" @change=${e=>this.#s({...this.viewOptions,hasCards:e.target.checked})} />
                <i></i>
              </label>
            </gds-menu-item>
          </gds-popover>

        </gds-flex>
      </gds-flex>
    `}#s(e){this.viewOptions=e,this.dispatchEvent(new CustomEvent("view-options-change",{detail:{view:e},bubbles:!0,composed:!0}))}static#t=(()=>zh())()}function Kh(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:Jh((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||Jh(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:Xh(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function Xh(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Jh(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}Hh=[Le("tp-theme-page")];class ThemePage extends lit_element_r{static#e=(()=>({e:[Nh,Dh],c:[Rh,Vh]}=Kh(this,[[Wh,1,"pageHeader"]],Hh,0,void 0,lit_element_r)))();[(Wh=Ne("tp-page-header"),"createRenderRoot")](){return this}#r=(()=>(Dh(this),Nh(this)))();get pageHeader(){return this.#r}set pageHeader(e){this.#r=e}connectedCallback(){super.connectedCallback()}render(){return ht`
      <gds-flex gap="3xl" flex-direction="column">
        <tp-page-header style="flex:1" @view-options-change=${()=>{console.log("asdasd"),this.requestUpdate()}}></tp-page-header>

        <!-- (Blue) Main dashboard section -->
        ${ki(this.pageHeader?.viewOptions.hasAccounts,(()=>ht`
          <gds-grid columns="1; m{12}" gap="l">
            <gds-flex
              grid-column="1; m{1 / span 5}"
              flex-direction="column"
              gap="l"
            >
              <tp-accounts></tp-accounts>
             
              <gds-card variant="notice" height="200px" border="4xs"
                >Expenses</gds-card
              >
            </gds-flex>
            <gds-flex
              grid-column="1; m{6 / span 4}"
              flex-direction="column"
              gap="l"
            >
              ${ki(this.pageHeader?.viewOptions.hasCards,(()=>ht`<tp-cards></tp-cards>`),(()=>ht` <gds-card variant="negative" height="250px" border="4xs"
                >Get some cards!</gds-card
              >`))}
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
              <gds-card variant="notice" height="220px" border="4xs"
              >Todo</gds-card
              >
              <gds-jit></gds-jit>
            </gds-flex>
          </gds-grid>
        `))}

        <!-- (Blue) Savings section -->
         ${ki(this.pageHeader?.viewOptions.hasSavings,(()=>ht`
          <gds-text tag="h2" font-size="heading-l">Savings</gds-text>
          <gds-grid columns="1; m{12}" gap="l">
            <gds-flex
              grid-column="1; m{1 / span 8}"
              flex-direction="column"
              gap="l"
            >
              <gds-card variant="notice" height="400px" border="4xs"
                >My savings</gds-card
              >
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
        `))}

        <!-- (Pink) Dream State, get started cards -->
        ${ki(!this.pageHeader?.viewOptions.hasSavings&&!this.pageHeader?.viewOptions.hasAccounts,(()=>ht`
          <gds-grid columns="1; m{2}" gap="l" max-width="800px" margin="0 auto">
            <gds-card variant="negative" height="300px" border="4xs">s</gds-card>
            <gds-card variant="negative" height="300px" border="4xs">s</gds-card>
            <!-- <gds-card
              variant="negative; hover: green-01"
              height="300px"
              border="4xs"
              opacity=".25"
            >s</gds-card> -->
          </gds-grid>
          <gds-flex gap="xs" justify-content="center">
            <gds-card
              variant="green-02"
              padding="0"
              width="4px"
              height="4px"
            ></gds-card>
            <gds-card
              variant="green-02"
              padding="0"
              width="70px"
              height="4px"
            ></gds-card>
          </gds-flex>
        `))}

        <!-- (Pink) Dream State, savings calculator -->
        ${ki(!this.pageHeader?.viewOptions.hasSavings,(()=>ht`
          <gds-grid columns="1; m{2}" gap="l"  max-width="800px" margin="0 auto">
            <gds-rich-text>
              <h3>What are you dreaming about?</h3>
              <p>
                Oavsett om det är att ha en buffert, en resa eller en trygg
                pension, är NU den bästa tiden att starta ett sparande. Testa och
                se hur snabbt du kan spara ihop till dina mål.
              </p>
              <p><gds-button>Start saving</gds-button></p>
            </gds-rich-text>
            <gds-card variant="negative" height="400px" border="4xs"></gds-card>
          </gds-grid>
        `))}

        <!-- (Pink) Dream State, testimonials -->
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

        
          <tp-news-widget></tp-news-widget>


      </gds-flex>
    `}static#t=(()=>Vh())()}function Qh(e,t,r,o,i,s){function a(e,t,r){return function(o,i){return r&&r(o),e[t].call(o,i)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function d(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function c(e,t,r,o,i,s,l,c,u,h,p,g,f){function m(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var v,y=t[0],x=t[3],w=!c;if(!w){r||Array.isArray(y)||(y=[y]);var _={},C=[],$=3===i?"get":4===i||g?"set":"value";h?(p||g?_={get:tp((function(){return x(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=x,p||tp(_[$],o,2===i?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var S=e,E=y.length-1;E>=0;E-=r?2:1){var A=y[E],T=r?y[E-1]:void 0,j={},O={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:s,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");d(t,"An initializer","be",!0),l.push(t)}).bind(null,j)};try{if(w)(v=d(A.call(T,S,O),"class decorators","return"))&&(S=v);else{var P,D;O.static=u,O.private=h,h?2===i?P=function(e){return m(e),_.value}:(i<4&&(P=a(_,"get",m)),3!==i&&(D=a(_,"set",m))):(P=function(e){return e[o]},(i<2||4===i)&&(D=function(e,t){e[o]=t}));var V=O.access={has:h?f.bind():function(e){return o in e}};if(P&&(V.get=P),D&&(V.set=D),S=A.call(T,g?{get:_.get,set:_.set}:_[$],O),g){if("object"==typeof S&&S)(v=d(S.get,"accessor.get"))&&(_.get=v),(v=d(S.set,"accessor.set"))&&(_.set=v),(v=d(S.init,"accessor.init"))&&C.push(v);else if(void 0!==S)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else d(S,(p?"field":"method")+" decorators","return")&&(p?C.push(S):_[$]=S)}}finally{j.v=!0}}return(p||g)&&c.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||w||(h?g?c.push(a(_,"get"),a(_,"set")):c.push(2===i?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),S}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var h=s[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(h??null),g=function(e,t,r,o){var i,s,a=[],d=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},u=new Map;function h(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],m=g[2],v=g.length>3,y=16&f,x=!!(8&f),w=0==(f&=7),_=m+"/"+x;if(!w&&!v){var C=u.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);u.set(_,!(f>2)||f)}c(x?e:e.prototype,g,y,v?"#"+m:ep(m),f,o,x?s=s||[]:i=i||[],a,x,v,w,1===f,x&&v?d:r)}}return h(i),h(s),a}(e,t,i,p);return r.length||u(e,p),{e:g,get c(){var t=[];return r.length&&[u(c(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function ep(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function tp(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}class AppElement extends lit_element_r{static#e=(()=>[Bh,Zh,Fh]=Qh(this,[[Ih,1,"popoverOpen"],[Uh,1,"currentView"]],[],0,void 0,lit_element_r).e)();static[(Ih=Ve(),Uh=He(),"styles")]=(()=>be`
    :host {
      --gds-test-color: red;
    }
  `)();createRenderRoot(){return this}#r=(()=>(Fh(this),Bh(this,!1)))();get popoverOpen(){return this.#r}set popoverOpen(e){this.#r=e}#n=(()=>Zh(this,"theme-page"))();get currentView(){return this.#n}set currentView(e){this.#n=e}connectedCallback(){super.connectedCallback(),this.addEventListener("view-change",this.handleViewChange),document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){this.removeEventListener("view-change",this.handleViewChange),document.removeEventListener("keydown",this.handleKeyDown),super.disconnectedCallback()}handleViewChange(e){this.currentView=e.detail.view}handleKeyDown=e=>{if("\\"===e.key){const e=this.querySelector("html");if(e){const t=e.getAttribute("gds-theme");e.setAttribute("color-scheme","light"===t?"dark":"light")}}};render(){return ht`
      <gds-theme color-scheme="light">
        <gds-header></gds-header>
        <gds-container padding="s; l{4xl}">
          ${Ie(this.currentView,[["theme-page",()=>ht`<tp-theme-page></tp-theme-page>`],["onboarding",()=>ht`<gds-onboarding></gds-onboarding>`],["dashboard",()=>ht`<gds-dashboard></gds-dashboard>`],["onboarding",()=>ht`<gds-onboarding></gds-onboarding>`],["login",()=>ht`<gds-login></gds-login>`],["form-validation",()=>ht`<form-validation></form-validation>`],["datepicker",()=>ht`<datepicker-example></datepicker-example>`],["calendar",()=>ht`<calendar-example></calendar-example>`]],(()=>ht`No view selected`))}
        </gds-container>
      </gds-theme>
    `}}customElements.define("sebgroup-root",AppElement)},326:()=>{var e;!function(e){!function(){var t="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),r=o(e);function o(e,t){return function(r,o){"function"!=typeof e[r]&&Object.defineProperty(e,r,{configurable:!0,writable:!0,value:o}),t&&t(r,o)}}void 0===t.Reflect?t.Reflect=e:r=o(t.Reflect,r),function(e){var t=Object.prototype.hasOwnProperty,r="function"==typeof Symbol,o=r&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",i=r&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",s="function"==typeof Object.create,a={__proto__:[]}instanceof Array,l=!s&&!a,d={create:s?function(){return pe(Object.create(null))}:a?function(){return pe({__proto__:null})}:function(){return pe({})},has:l?function(e,r){return t.call(e,r)}:function(e,t){return t in e},get:l?function(e,r){return t.call(e,r)?e[r]:void 0}:function(e,t){return e[t]}},c=Object.getPrototypeOf(Function),u="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,h=u||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?ce():Map,p=u||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?ue():Set,g=new(u||"function"!=typeof WeakMap?he():WeakMap);function f(e,t,r,o){if(U(r)){if(!ee(e))throw new TypeError;if(!re(t))throw new TypeError;return E(e,t)}if(!ee(e))throw new TypeError;if(!Y(t))throw new TypeError;if(!Y(o)&&!U(o)&&!Z(o))throw new TypeError;return Z(o)&&(o=void 0),A(e,t,r=Q(r),o)}function m(e,t){function r(r,o){if(!Y(r))throw new TypeError;if(!U(o)&&!ne(o))throw new TypeError;V(e,t,r,o)}return r}function v(e,t,r,o){if(!Y(r))throw new TypeError;return U(o)||(o=Q(o)),V(e,t,r,o)}function y(e,t,r){if(!Y(t))throw new TypeError;return U(r)||(r=Q(r)),j(e,t,r)}function x(e,t,r){if(!Y(t))throw new TypeError;return U(r)||(r=Q(r)),O(e,t,r)}function w(e,t,r){if(!Y(t))throw new TypeError;return U(r)||(r=Q(r)),P(e,t,r)}function _(e,t,r){if(!Y(t))throw new TypeError;return U(r)||(r=Q(r)),D(e,t,r)}function C(e,t){if(!Y(e))throw new TypeError;return U(t)||(t=Q(t)),W(e,t)}function $(e,t){if(!Y(e))throw new TypeError;return U(t)||(t=Q(t)),F(e,t)}function S(e,t,r){if(!Y(t))throw new TypeError;U(r)||(r=Q(r));var o=T(t,r,!1);if(U(o))return!1;if(!o.delete(e))return!1;if(o.size>0)return!0;var i=g.get(t);return i.delete(r),i.size>0||g.delete(t),!0}function E(e,t){for(var r=e.length-1;r>=0;--r){var o=(0,e[r])(t);if(!U(o)&&!Z(o)){if(!re(o))throw new TypeError;t=o}}return t}function A(e,t,r,o){for(var i=e.length-1;i>=0;--i){var s=(0,e[i])(t,r,o);if(!U(s)&&!Z(s)){if(!Y(s))throw new TypeError;o=s}}return o}function T(e,t,r){var o=g.get(e);if(U(o)){if(!r)return;o=new h,g.set(e,o)}var i=o.get(t);if(U(i)){if(!r)return;i=new h,o.set(t,i)}return i}function j(e,t,r){if(O(e,t,r))return!0;var o=de(t);return!Z(o)&&j(e,o,r)}function O(e,t,r){var o=T(t,r,!1);return!U(o)&&X(o.has(e))}function P(e,t,r){if(O(e,t,r))return D(e,t,r);var o=de(t);return Z(o)?void 0:P(e,o,r)}function D(e,t,r){var o=T(t,r,!1);if(!U(o))return o.get(e)}function V(e,t,r,o){T(r,o,!0).set(e,t)}function W(e,t){var r=F(e,t),o=de(e);if(null===o)return r;var i=W(o,t);if(i.length<=0)return r;if(r.length<=0)return i;for(var s=new p,a=[],l=0,d=r;l<d.length;l++){var c=d[l];s.has(c)||(s.add(c),a.push(c))}for(var u=0,h=i;u<h.length;u++){c=h[u];s.has(c)||(s.add(c),a.push(c))}return a}function F(e,t){var r=[],o=T(e,t,!1);if(U(o))return r;for(var i=ie(o.keys()),s=0;;){var a=ae(i);if(!a)return r.length=s,r;var l=se(a);try{r[s]=l}catch(d){try{le(i)}finally{throw d}}s++}}function B(e){if(null===e)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===e?1:6;default:return 6}}function U(e){return void 0===e}function Z(e){return null===e}function G(e){return"symbol"==typeof e}function Y(e){return"object"==typeof e?null!==e:"function"==typeof e}function q(e,t){switch(B(e)){case 0:case 1:case 2:case 3:case 4:case 5:return e}var r=3===t?"string":5===t?"number":"default",i=oe(e,o);if(void 0!==i){var s=i.call(e,r);if(Y(s))throw new TypeError;return s}return K(e,"default"===r?"number":r)}function K(e,t){if("string"===t){var r=e.toString;if(te(r))if(!Y(i=r.call(e)))return i;if(te(o=e.valueOf))if(!Y(i=o.call(e)))return i}else{var o;if(te(o=e.valueOf))if(!Y(i=o.call(e)))return i;var i,s=e.toString;if(te(s))if(!Y(i=s.call(e)))return i}throw new TypeError}function X(e){return!!e}function J(e){return""+e}function Q(e){var t=q(e,3);return G(t)?t:J(t)}function ee(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:"[object Array]"===Object.prototype.toString.call(e)}function te(e){return"function"==typeof e}function re(e){return"function"==typeof e}function ne(e){switch(B(e)){case 3:case 4:return!0;default:return!1}}function oe(e,t){var r=e[t];if(null!=r){if(!te(r))throw new TypeError;return r}}function ie(e){var t=oe(e,i);if(!te(t))throw new TypeError;var r=t.call(e);if(!Y(r))throw new TypeError;return r}function se(e){return e.value}function ae(e){var t=e.next();return!t.done&&t}function le(e){var t=e.return;t&&t.call(e)}function de(e){var t=Object.getPrototypeOf(e);if("function"!=typeof e||e===c)return t;if(t!==c)return t;var r=e.prototype,o=r&&Object.getPrototypeOf(r);if(null==o||o===Object.prototype)return t;var i=o.constructor;return"function"!=typeof i||i===e?t:i}function ce(){var e={},t=[],r=function(){function e(e,t,r){this._index=0,this._keys=e,this._values=t,this._selector=r}return e.prototype["@@iterator"]=function(){return this},e.prototype[i]=function(){return this},e.prototype.next=function(){var e=this._index;if(e>=0&&e<this._keys.length){var r=this._selector(this._keys[e],this._values[e]);return e+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},e.prototype.throw=function(e){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),e},e.prototype.return=function(e){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:e,done:!0}},e}();return function(){function t(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(t.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return this._find(e,!1)>=0},t.prototype.get=function(e){var t=this._find(e,!1);return t>=0?this._values[t]:void 0},t.prototype.set=function(e,t){var r=this._find(e,!0);return this._values[r]=t,this},t.prototype.delete=function(t){var r=this._find(t,!1);if(r>=0){for(var o=this._keys.length,i=r+1;i<o;i++)this._keys[i-1]=this._keys[i],this._values[i-1]=this._values[i];return this._keys.length--,this._values.length--,t===this._cacheKey&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},t.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},t.prototype.keys=function(){return new r(this._keys,this._values,o)},t.prototype.values=function(){return new r(this._keys,this._values,s)},t.prototype.entries=function(){return new r(this._keys,this._values,a)},t.prototype["@@iterator"]=function(){return this.entries()},t.prototype[i]=function(){return this.entries()},t.prototype._find=function(e,t){return this._cacheKey!==e&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=e)),this._cacheIndex<0&&t&&(this._cacheIndex=this._keys.length,this._keys.push(e),this._values.push(void 0)),this._cacheIndex},t}();function o(e,t){return e}function s(e,t){return t}function a(e,t){return[e,t]}}function ue(){return function(){function e(){this._map=new h}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(e){return this._map.has(e)},e.prototype.add=function(e){return this._map.set(e,e),this},e.prototype.delete=function(e){return this._map.delete(e)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[i]=function(){return this.keys()},e}()}function he(){var e=16,r=d.create(),o=i();return function(){function e(){this._key=i()}return e.prototype.has=function(e){var t=s(e,!1);return void 0!==t&&d.has(t,this._key)},e.prototype.get=function(e){var t=s(e,!1);return void 0!==t?d.get(t,this._key):void 0},e.prototype.set=function(e,t){return s(e,!0)[this._key]=t,this},e.prototype.delete=function(e){var t=s(e,!1);return void 0!==t&&delete t[this._key]},e.prototype.clear=function(){this._key=i()},e}();function i(){var e;do{e="@@WeakMap@@"+c()}while(d.has(r,e));return r[e]=!0,e}function s(e,r){if(!t.call(e,o)){if(!r)return;Object.defineProperty(e,o,{value:d.create()})}return e[o]}function a(e,t){for(var r=0;r<t;++r)e[r]=255*Math.random()|0;return e}function l(e){return"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(e)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(e)):a(new Uint8Array(e),e):a(new Array(e),e)}function c(){var t=l(e);t[6]=79&t[6]|64,t[8]=191&t[8]|128;for(var r="",o=0;o<e;++o){var i=t[o];4!==o&&6!==o&&8!==o||(r+="-"),i<16&&(r+="0"),r+=i.toString(16).toLowerCase()}return r}}function pe(e){return e.__=void 0,delete e.__,e}e("decorate",f),e("metadata",m),e("defineMetadata",v),e("hasMetadata",y),e("hasOwnMetadata",x),e("getMetadata",w),e("getOwnMetadata",_),e("getMetadataKeys",C),e("getOwnMetadataKeys",$),e("deleteMetadata",S)}(r)}()}(e||(e={}))}},e=>{var t;t=683,e(e.s=t)}]);