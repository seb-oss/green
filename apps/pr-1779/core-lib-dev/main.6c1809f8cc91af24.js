(self.webpackChunk=self.webpackChunk||[]).push([[792],{239:(e,t,r)=>{"use strict";const o=globalThis,s=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;class n{constructor(e,t,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(t,e))}return e}toString(){return this.cssText}}const l=(e,t)=>{if(s)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const r of t){const t=document.createElement("style"),s=o.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=r.cssText,e.appendChild(t)}},c=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:d,defineProperty:h,getOwnPropertyDescriptor:u,getOwnPropertyNames:p,getOwnPropertySymbols:g,getPrototypeOf:f}=Object,v=globalThis,y=v.trustedTypes,m=y?y.emptyScript:"",w=v.reactiveElementPolyfillSupport,x=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},C=(e,t)=>!d(e,t),$={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:C};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&h(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:s}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const i=o?.call(this);s.call(this,t),this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...p(e),...g(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const e=this._$Eu(t,r);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){const s=(void 0!==r.converter?.toAttribute?r.converter:_).toAttribute(t,r.type);this._$Em=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=r.getPropertyOptions(o),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_;this._$Em=o,this[o]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??C)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[x("elementProperties")]=new Map,b[x("finalized")]=new Map,w?.({ReactiveElement:b}),(v.reactiveElementVersions??=[]).push("2.0.4");const E=globalThis,S=E.trustedTypes,A=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,F="?"+D,W=`<${F}>`,O=document,P=()=>O.createComment(""),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,V=Array.isArray,B=e=>V(e)||"function"==typeof e?.[Symbol.iterator],U="[ \t\n\f\r]",Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,Y=/>/g,q=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),K=/'/g,X=/"/g,J=/^(?:script|style|textarea|title)$/i,Q=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ee=Q(1),te=Q(2),ne=Q(3),re=Symbol.for("lit-noChange"),oe=Symbol.for("lit-nothing"),se=new WeakMap,ie=O.createTreeWalker(O,129);function ae(e,t){if(!V(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}const le=(e,t)=>{const r=e.length-1,o=[];let s,i=2===t?"<svg>":3===t?"<math>":"",a=Z;for(let l=0;l<r;l++){const t=e[l];let r,c,d=-1,h=0;for(;h<t.length&&(a.lastIndex=h,c=a.exec(t),null!==c);)h=a.lastIndex,a===Z?"!--"===c[1]?a=G:void 0!==c[1]?a=Y:void 0!==c[2]?(J.test(c[2])&&(s=RegExp("</"+c[2],"g")),a=q):void 0!==c[3]&&(a=q):a===q?">"===c[0]?(a=s??Z,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,r=c[1],a=void 0===c[3]?q:'"'===c[3]?X:K):a===X||a===K?a=q:a===G||a===Y?a=Z:(a=q,s=void 0);const u=a===q&&e[l+1].startsWith("/>")?" ":"";i+=a===Z?t+W:d>=0?(o.push(r),t.slice(0,d)+T+t.slice(d)+D+u):t+D+(-2===d?l:u)}return[ae(e,i+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class N{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let s=0,i=0;const a=e.length-1,l=this.parts,[c,d]=le(e,t);if(this.el=N.createElement(c,r),ie.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=ie.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(T)){const t=d[i++],r=o.getAttribute(e).split(D),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:s,name:a[2],strings:r,ctor:"."===a[1]?H:"?"===a[1]?I:"@"===a[1]?L:k}),o.removeAttribute(e)}else e.startsWith(D)&&(l.push({type:6,index:s}),o.removeAttribute(e));if(J.test(o.tagName)){const e=o.textContent.split(D),t=e.length-1;if(t>0){o.textContent=S?S.emptyScript:"";for(let r=0;r<t;r++)o.append(e[r],P()),ie.nextNode(),l.push({type:2,index:++s});o.append(e[t],P())}}}else if(8===o.nodeType)if(o.data===F)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=o.data.indexOf(D,e+1));)l.push({type:7,index:s}),e+=D.length-1}s++}}static createElement(e,t){const r=O.createElement("template");return r.innerHTML=e,r}}function ce(e,t,r=e,o){if(t===re)return t;let s=void 0!==o?r._$Co?.[o]:r._$Cl;const i=j(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),void 0===i?s=void 0:(s=new i(e),s._$AT(e,r,o)),void 0!==o?(r._$Co??=[])[o]=s:r._$Cl=s),void 0!==s&&(t=ce(e,s._$AS(e,t.values),s,o)),t}class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??O).importNode(t,!0);ie.currentNode=o;let s=ie.nextNode(),i=0,a=0,l=r[0];for(;void 0!==l;){if(i===l.index){let t;2===l.type?t=new R(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new z(s,this,e)),this._$AV.push(t),l=r[++a]}i!==l?.index&&(s=ie.nextNode(),i++)}return ie.currentNode=O,o}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=oe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ce(this,e,t),j(e)?e===oe||null==e||""===e?(this._$AH!==oe&&this._$AR(),this._$AH=oe):e!==this._$AH&&e!==re&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):B(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==oe&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=N.createElement(ae(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new M(o,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=se.get(e.strings);return void 0===t&&se.set(e.strings,t=new N(e)),t}k(e){V(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const s of e)o===t.length?t.push(r=new R(this.O(P()),this.O(P()),this,this.options)):r=t[o],r._$AI(s),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,s){this.type=1,this._$AH=oe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=oe}_$AI(e,t=this,r,o){const s=this.strings;let i=!1;if(void 0===s)e=ce(this,e,t,0),i=!j(e)||e!==this._$AH&&e!==re,i&&(this._$AH=e);else{const o=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=ce(this,o[r+a],t,a),l===re&&(l=this._$AH[a]),i||=!j(l)||l!==this._$AH[a],l===oe?e=oe:e!==oe&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}i&&!o&&this.j(e)}j(e){e===oe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===oe?void 0:e}}class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==oe)}}class L extends k{constructor(e,t,r,o,s){super(e,t,r,o,s),this.type=5}_$AI(e,t=this){if((e=ce(this,e,t,0)??oe)===re)return;const r=this._$AH,o=e===oe&&r!==oe||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==oe&&(r===oe||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ce(this,e)}}const de={M:T,P:D,A:F,C:1,L:le,R:M,D:B,V:ce,I:R,H:k,N:I,U:L,B:H,F:z},he=E.litHtmlPolyfillSupport;he?.(N,R),(E.litHtmlVersions??=[]).push("3.2.1");const ue=globalThis,pe=ue.ShadowRoot&&(void 0===ue.ShadyCSS||ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ge=Symbol(),fe=new WeakMap;class css_tag_n{constructor(e,t,r){if(this._$cssResult$=!0,r!==ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(pe&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=fe.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&fe.set(t,e))}return e}toString(){return this.cssText}}const be=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,ge),ve=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1]),e[0]);return new css_tag_n(r,e,ge)},ye=pe?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return be(t)})(e):e,{is:me,defineProperty:we,getOwnPropertyDescriptor:xe,getOwnPropertyNames:ke,getOwnPropertySymbols:_e,getPrototypeOf:Ce}=Object,$e=globalThis,Ee=$e.trustedTypes,Se=Ee?Ee.emptyScript:"",Ae=$e.reactiveElementPolyfillSupport,Te=(e,t)=>e,Me={toAttribute(e,t){switch(t){case Boolean:e=e?Se:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},De=(e,t)=>!me(e,t),Le={attribute:!0,type:String,converter:Me,reflect:!1,hasChanged:De};Symbol.metadata??=Symbol("metadata"),$e.litPropertyMetadata??=new WeakMap;class reactive_element_b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Le){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&we(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:s}=xe(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const i=o?.call(this);s.call(this,t),this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Le}static _$Ei(){if(this.hasOwnProperty(Te("elementProperties")))return;const e=Ce(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Te("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Te("properties"))){const e=this.properties,t=[...ke(e),..._e(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const e=this._$Eu(t,r);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(ye(e))}else void 0!==e&&t.push(ye(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(pe)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const r of t){const t=document.createElement("style"),o=ue.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){const s=(void 0!==r.converter?.toAttribute?r.converter:Me).toAttribute(t,r.type);this._$Em=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=r.getPropertyOptions(o),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Me;this._$Em=o,this[o]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??De)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}reactive_element_b.elementStyles=[],reactive_element_b.shadowRootOptions={mode:"open"},reactive_element_b[Te("elementProperties")]=new Map,reactive_element_b[Te("finalized")]=new Map,Ae?.({ReactiveElement:reactive_element_b}),($e.reactiveElementVersions??=[]).push("2.0.4");class lit_element_r extends reactive_element_b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const o=r?.renderBefore??t;let s=o._$litPart$;if(void 0===s){const e=r?.renderBefore??null;o._$litPart$=s=new R(t.insertBefore(P(),e),e,void 0,r??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return re}}lit_element_r._$litElement$=!0,lit_element_r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_r});const ze=globalThis.litElementPolyfillSupport;ze?.({LitElement:lit_element_r});(globalThis.litElementVersions??=[]).push("4.1.1");const Fe=e=>(t,r)=>{void 0!==r?r.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},We={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:C},Oe=(e=We,t,r)=>{const{kind:o,metadata:s}=r;let i=globalThis.litPropertyMetadata.get(s);if(void 0===i&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(r.name,e),"accessor"===o){const{name:o}=r;return{set(r){const s=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,s,e)},init(t){return void 0!==t&&this.P(o,void 0,e),t}}}if("setter"===o){const{name:o}=r;return function(r){const s=this[o];t.call(this,r),this.requestUpdate(o,s,e)}}throw Error("Unsupported decorator location: "+o)};function Pe(e){return(t,r)=>"object"==typeof r?Oe(e,t,r):((e,t,r)=>{const o=t.hasOwnProperty(r);return t.constructor.createProperty(r,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}function je(e){return Pe({...e,state:!0,attribute:!1})}const Ve=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r);function He(e,t){return(r,o,s)=>{const i=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof o?r:s??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Ve(r,o,{get(){let r=e.call(this);return void 0===r&&(r=i(this),(null!==r||this.hasUpdated)&&t.call(this,r)),r}})}return Ve(r,o,{get(){return i(this)}})}}let Ne;function Re(e){return(t,r)=>Ve(t,r,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}const Be=(e,t,r)=>{for(const o of t)if(o[0]===e)return(0,o[1])();return r?.()};var Ie=Object.defineProperty,Ue=Object.defineProperties,Ze=Object.getOwnPropertyDescriptor,Ge=Object.getOwnPropertyDescriptors,Ye=Object.getOwnPropertySymbols,qe=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable,Xe=(e,t,r)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Je=(e,t)=>{for(var r in t||(t={}))qe.call(t,r)&&Xe(e,r,t[r]);if(Ye)for(var r of Ye(t))Ke.call(t,r)&&Xe(e,r,t[r]);return e},Qe=(e,t)=>Ue(e,Ge(t)),et=(e,t,r,o)=>{for(var s,i=o>1?void 0:o?Ze(t,r):t,a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&Ie(t,r,i),i},tt=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},nt=(e,t,r)=>(tt(e,t,"read from private field"),r?r.call(e):t.get(e)),rt=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},ot=(e,t,r,o)=>(tt(e,t,"write to private field"),o?o.call(e,r):t.set(e,r),r),st=(e,t,r)=>(tt(e,t,"access private method"),r),it="-7bf53a",at=class{static get instance(){var e;return(null==(e=globalThis.__gdsElementLookupTable)?void 0:e[it])||(globalThis.__gdsElementLookupTable=Qe(Je({},globalThis.__gdsElementLookupTable),{[it]:new Map})),globalThis.__gdsElementLookupTable[it]}};var lt=e=>globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?function(e){return at.instance.set(e,e),function(t){return t.prototype.gdsElementName=e,Fe(e)(t)}}(e):function(e){const t=e+it;return at.instance.set(e,t),function(r){return r.prototype.gdsElementName=e,customElements.get(t)?e=>!1:Fe(t)(r)}}(e),ct=new WeakMap;var dt=e=>e.map((e=>{for(const[t,r]of at.instance.entries())e=e.replace(new RegExp(`${t}(?![-a-z])`,"mg"),r);return e}));var ht,ut=(ht=ee,function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return ht(e,...r);const[s,...i]=function(e){let t=ct.get(e);t||(t=dt(e),t.raw=dt(e.raw),ct.set(e,t));for(var r=arguments.length,o=new Array(r>1?r-1:0),s=1;s<r;s++)o[s-1]=arguments[s];return[t,...o]}(e,...r);return ht(s,...i)});var pt=ve`
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
`,gt={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},ft=/^([<|>]=?)?([0-9a-z]+)/,bt=["{","}",";",":",","],vt=[" ","/n"];function yt(e){return e.split(",").map((e=>{const t=e.trim().match(ft);if(!t)throw new Error(`Invalid breakpoint specifier: ${e}`);return{condition:t[1],value:t[2]}}))}var mt,wt,xt,kt,_t,Ct,$t,Et,St,At,Tt,Mt,Dt,Lt,zt=new Map;function Ft(e){return(t,r)=>{var o,s,i,a;const l=null!=(o=null==e?void 0:e.selector)?o:String(":host"),c=null!=(s=null==e?void 0:e.property)?s:String(r),d=null!=(i=null==e?void 0:e.valueTemplate)?i:e=>`var(--gds-space-${e}, 0)`,h=null==e?void 0:e.styleTemplate,u=null!=(a=null==e?void 0:e.cacheOverrideKey)?a:"0";Pe({attribute:null==e?void 0:e.attribute,noAccessor:!0})(t,r),Object.defineProperty(t,r,{get:function(){return this["__"+String(r)]},set:async function(e){var t;this["__"+String(r)]=e,await this.updateComplete;const o=null!=(t=this.level)?t:"0",s=l+c+e+o+u;if(zt.has(s))return void this._dynamicStylesController.inject(`sep_${String(r)}`,zt.get(s));const i=function(e){var t;const r=[];let o={breakpoint:"-",values:[]},s={sel:"",values:[]};for(const i of e)if(bt.includes(i)){if("{"===i&&(o={breakpoint:s.values.join(","),values:[]},s={sel:"",values:[]}),";"===i&&(0===r.length&&r.push(o),s.values.length>0&&(o.values.push(s),s={sel:"",values:[]})),":"===i){const e=null!=(t=s.values.pop())?t:"";s.sel=e}o&&"}"===i&&(o.values.push(s),s={sel:"",values:[]},r.push(o))}else s.values.push(i);return s.values.length>0&&o.values.push(s),0===r.length&&r.push(o),r}(function(e){const t=[];let r="";for(let o=0;o<e.length;o++){const s=e[o];vt.includes(s)||(r+=s),bt.includes(s)?(t.push(r.slice(0,-1)),t.push(s),r=""):(vt.includes(s)||o===e.length-1)&&(t.push(r),r="")}return t.filter((e=>""!==e))}(e)),a=function(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>e,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:(e,t)=>`${e}: ${t.join(" ")};`,i="";for(const a of r){const r=("-"===a.breakpoint?[{condition:">=",value:"0"}]:yt(a.breakpoint)).map((e=>{var t,r;return`(${(null==(t=e.condition)?void 0:t.includes("<"))?"max-width":"min-width"}: ${null!=(r=gt[e.value])?r:e.value})`})).join(" and "),l=`@media ${r} {${a.values.map((r=>{let i=e;r.sel.length>0&&(i=":host"===e?`:host(:${r.sel})`:`${e}:${r.sel}`);const a=s(t,r.values.map(o));return"hover"===r.sel?`@media (hover: hover) {${i}{${a}}}`:`${i}{${a}}`})).join("")}}`;i+=l}return i}(l,c,i,d.bind(this),null==h?void 0:h.bind(this)),p=be(a);zt.set(s,p),this._dynamicStylesController.inject(`sep_${String(r)}`,p)}})}}var Wt,Ot,Pt,jt,Vt,Ht,Nt,Rt,Bt=class{constructor(e){rt(this,St),rt(this,Tt),rt(this,Dt),rt(this,mt,!It()),rt(this,wt,!1),rt(this,xt,[]),rt(this,kt,[]),rt(this,_t,new Map),rt(this,Ct,new Map),rt(this,$t,[]),rt(this,Et,[]),this.host=e,this.host.addController(this)}hostConnected(){st(this,Dt,Lt).call(this)}has(e){return nt(this,mt)?nt(this,Ct).has(e):nt(this,_t).has(e)}inject(e,t){st(this,St,At).call(this,e,t),st(this,Tt,Mt).call(this)}clear(e){if(nt(this,mt)){const t=nt(this,Ct).get(e);null==t||t.remove(),nt(this,Ct).delete(e)}else nt(this,_t).delete(e);st(this,Tt,Mt).call(this)}clearAll(){nt(this,mt)?(nt(this,Ct).forEach((e=>e.remove())),nt(this,$t).forEach((e=>e.remove())),nt(this,Ct).clear(),ot(this,$t,[])):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],nt(this,_t).clear(),ot(this,xt,[]))}clearInitial(){nt(this,mt)?(nt(this,$t).forEach((e=>e.remove())),ot(this,$t,[])):ot(this,xt,[]),st(this,Tt,Mt).call(this)}restoreInitial(){nt(this,mt)?nt(this,Et).forEach((e=>{nt(this,$t).push(e.cloneNode(!0))})):ot(this,xt,[...nt(this,kt)]),st(this,Tt,Mt).call(this)}};function It(){try{return new CSSStyleSheet,!0}catch(s){return!1}}mt=new WeakMap,wt=new WeakMap,xt=new WeakMap,kt=new WeakMap,_t=new WeakMap,Ct=new WeakMap,$t=new WeakMap,Et=new WeakMap,St=new WeakSet,At=function(e,t){if(nt(this,mt)){let r=nt(this,Ct).get(e);r||(r=document.createElement("style"),nt(this,Ct).set(e,r)),r.textContent=t.cssText}else{if(!this.host.shadowRoot||!t.styleSheet)return;nt(this,_t).set(e,t.styleSheet)}},Tt=new WeakSet,Mt=function(){if(nt(this,mt)){if(!this.host.shadowRoot)return;this.host.shadowRoot.querySelectorAll("style").forEach((e=>{e.remove()})),nt(this,Ct).forEach((e=>{var t;null==(t=this.host.shadowRoot)||t.appendChild(e)}))}else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...nt(this,xt),...Array.from(nt(this,_t).values())]}},Dt=new WeakSet,Lt=function(){if(!nt(this,wt)){if(nt(this,mt)){if(!this.host.shadowRoot)return;this.host.shadowRoot.querySelectorAll("style").forEach((e=>{nt(this,$t).push(e),nt(this,Et).push(e.cloneNode(!0))}))}else this.host.shadowRoot&&0===nt(this,xt).length&&(ot(this,xt,[...this.host.shadowRoot.adoptedStyleSheets||[]]),ot(this,kt,[...nt(this,xt)]));ot(this,wt,!0)}};Wt=new WeakMap,Ot=new WeakMap,Pt=new WeakMap,jt=new WeakMap,Vt=new WeakSet,Ht=function(e,t){let r=nt(this,Pt).get(e);r||(r=document.createElement("style"),nt(this,Pt).set(e,r)),r.textContent=t,document.head.appendChild(r)},Nt=new WeakSet,Rt=function(e,t){nt(this,Ot).set(e,t),document.adoptedStyleSheets=[...nt(this,jt),...Array.from(nt(this,Ot).values())]};var Ut=class _GlobalStylesRegistry{constructor(){rt(this,Vt),rt(this,Nt),rt(this,Wt,!It()),rt(this,Ot,new Map),rt(this,Pt,new Map),rt(this,jt,document.adoptedStyleSheets||[])}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new _GlobalStylesRegistry),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(e,t){if(nt(this,Wt)){const r=Array.isArray(t)?t.map((e=>e.toString())).join(""):t.toString();st(this,Vt,Ht).call(this,e,r)}else t.styleSheet&&st(this,Nt,Rt).call(this,e,t.styleSheet)}},Zt="/**\n * Do not edit directly\n * Generated on Wed, 13 Nov 2024 08:14:49 GMT\n */\n\ncolor-scheme: dark;\n  --gds-color-l1-background-primary: #0e0e0e;\n  --gds-color-l1-background-tertiary: #d7d7d7;\n  --gds-color-l1-background-secondary: #131313;\n  --gds-color-l1-content-positive: #54b561;\n  --gds-color-l1-content-negative: #a63e2a;\n  --gds-color-l1-content-primary: #d7d7d7;\n  --gds-color-l1-content-secondary: #ababab;\n  --gds-color-l1-content-tertiary: #1b1b1b;\n  --gds-color-l2-background-primary: #242424;\n  --gds-color-l2-background-secondary: #242424;\n  --gds-color-l2-background-tertiary: #d7d7d7;\n  --gds-color-l2-background-positive: #1d3f22;\n  --gds-color-l2-background-negative: #4a1c13;\n  --gds-color-l2-background-notice: #152c41;\n  --gds-color-l2-background-warning: #4c3212;\n  --gds-color-l2-background-information: #353535;\n  --gds-color-l2-background-copper-01: #f2efeb;\n  --gds-color-l2-background-copper-02: #332a18;\n  --gds-color-l2-background-purple-01: #f3eff7;\n  --gds-color-l2-background-purple-02: #372b40;\n  --gds-color-l2-background-green-01: #ecf6ed;\n  --gds-color-l2-background-green-02: #1d3f22;\n  --gds-color-l2-background-blue-01: #eaf0f7;\n  --gds-color-l2-background-blue-02: #152c41;\n  --gds-color-l2-content-primary: #d7d7d7;\n  --gds-color-l2-content-secondary: #ababab;\n  --gds-color-l2-content-tertiary: #1b1b1b;\n  --gds-color-l2-content-positive: #54b561;\n  --gds-color-l2-content-negative: #ee8375;\n  --gds-color-l2-content-warning: #f3b274;\n  --gds-color-l2-content-notice: #78a3d5;\n  --gds-color-l2-content-infomation: #d7d7d7;\n  --gds-color-l2-content-copper-01: #1b1b1b;\n  --gds-color-l2-content-copper-02: #ffffff;\n  --gds-color-l2-content-purple-01: #1b1b1b;\n  --gds-color-l2-content-purple-02: #ffffff;\n  --gds-color-l2-content-green-01: #1b1b1b;\n  --gds-color-l2-content-green-02: #ffffff;\n  --gds-color-l2-content-blue-01: #1b1b1b;\n  --gds-color-l2-content-blue-02: #ffffff;\n  --gds-color-l2-border-primary: #353535;\n  --gds-color-l2-border-secondary: #5e5e5e;\n  --gds-color-l2-border-tertiary: #2c2c2c;\n  --gds-color-l2-border-quarternary: #d7d7d7;\n  --gds-color-l2-border-inversed: #1b1b1b;\n  --gds-color-l3-background-primary: #d7d7d7;\n  --gds-color-l3-background-secondary: #353535;\n  --gds-color-l3-background-tertiary: #424242;\n  --gds-color-l3-background-quarternary: #0e0e0e;\n  --gds-color-l3-background-positive: #54b561;\n  --gds-color-l3-background-positive-secondary: #25512b;\n  --gds-color-l3-background-positive-badge: #306938;\n  --gds-color-l3-background-negative: #c04831;\n  --gds-color-l3-background-negative-secondary: #602418;\n  --gds-color-l3-background-negative-badge: #4A1C13;\n  --gds-color-l3-background-notice: #78a3d5;\n  --gds-color-l3-background-notice-secondary: #1A3853;\n  --gds-color-l3-background-notice-badge: #214769;\n  --gds-color-l3-background-warning: #f3b274;\n  --gds-color-l3-background-warning-secondary: #624017;\n  --gds-color-l3-background-warning-badge: #744C1B;\n  --gds-color-l3-background-information: #d7d7d7;\n  --gds-color-l3-background-information-secondary: #424242;\n  --gds-color-l3-background-information-badge: #616161;\n  --gds-color-l3-background-buy: #3571a6;\n  --gds-color-l3-background-copper-01: #e4ded5;\n  --gds-color-l3-background-copper-02: #42361f;\n  --gds-color-l3-background-purple-01: #e7deee;\n  --gds-color-l3-background-purple-02: #473752;\n  --gds-color-l3-background-green-01: #d7edd9;\n  --gds-color-l3-background-green-02: #25512b;\n  --gds-color-l3-background-blue-01: #d3dfef;\n  --gds-color-l3-background-blue-02: #1a3853;\n  --gds-color-l3-background-disabled: #181818;\n  --gds-color-l3-background-disabled-secondary: #1b1b1b;\n  --gds-color-l3-content-primary: #1b1b1b;\n  --gds-color-l3-content-secondary: #ababab;\n  --gds-color-l3-content-tertiary: #d7d7d7;\n  --gds-color-l3-content-notice: #78a3d5;\n  --gds-color-l3-content-warning: #f3b274;\n  --gds-color-l3-content-information: #d7d7d7;\n  --gds-color-l3-content-buy: #ffffff;\n  --gds-color-l3-content-copper-01: #1b1b1b;\n  --gds-color-l3-content-copper-02: #ffffff;\n  --gds-color-l3-content-purple-01: #1b1b1b;\n  --gds-color-l3-content-purple-02: #ffffff;\n  --gds-color-l3-content-green-01: #1b1b1b;\n  --gds-color-l3-content-green-02: #ffffff;\n  --gds-color-l3-content-blue-01: #1b1b1b;\n  --gds-color-l3-content-blue-02: #ffffff;\n  --gds-color-l3-content-disabled: #5e5e5e;\n  --gds-color-l3-content-positive: #54b561;\n  --gds-color-l3-content-negative: #ee8375;\n  --gds-color-l3-border-primary: #d7d7d7;\n  --gds-color-l3-border-secondary: #ababab;\n  --gds-color-l3-border-tertiary: #1b1b1b;\n  --gds-color-l3-border-negative: #ee8375;\n  --gds-color-l3-states-dark-hover: #ffffff 10%;\n  --gds-color-l3-states-dark-pressed: #ffffff 20%;\n  --gds-color-l3-states-light-hover: #d7d7d7 10%;\n  --gds-color-l3-states-light-pressed: #d7d7d7 20%;\n  --gds-color-l3-states-positive-hover: #54b561 10%;\n  --gds-color-l3-states-positive-pressed: #54b561 20%;\n  --gds-color-l3-states-negative-hover: #ee8375 10%;\n  --gds-color-l3-states-negative-pressed: #ee8375 20%;\n",Gt="/**\n * Do not edit directly\n * Generated on Wed, 13 Nov 2024 08:14:49 GMT\n */\n\ncolor-scheme: light;\n  --gds-color-l1-background-primary: #ffffff;\n  --gds-color-l1-background-tertiary: #1b1b1b;\n  --gds-color-l1-background-secondary: #eeeeee;\n  --gds-color-l1-content-positive: #35723d;\n  --gds-color-l1-content-negative: #a63e2a;\n  --gds-color-l1-content-primary: #1b1b1b;\n  --gds-color-l1-content-secondary: #5e5e5e;\n  --gds-color-l1-content-tertiary: #ffffff;\n  --gds-color-l2-background-primary: #f3f3f3;\n  --gds-color-l2-background-secondary: #ffffff;\n  --gds-color-l2-background-tertiary: #242424;\n  --gds-color-l2-background-positive: #ecf6ed;\n  --gds-color-l2-background-negative: #fcecea;\n  --gds-color-l2-background-notice: #eaf0f7;\n  --gds-color-l2-background-warning: #fcecbc;\n  --gds-color-l2-background-information: #e2e2e2;\n  --gds-color-l2-background-copper-01: #f2efeb;\n  --gds-color-l2-background-copper-02: #332a18;\n  --gds-color-l2-background-purple-01: #f3eff7;\n  --gds-color-l2-background-purple-02: #372b40;\n  --gds-color-l2-background-green-01: #ecf6ed;\n  --gds-color-l2-background-green-02: #1d3f22;\n  --gds-color-l2-background-blue-01: #eaf0f7;\n  --gds-color-l2-background-blue-02: #152c41;\n  --gds-color-l2-content-primary: #1b1b1b;\n  --gds-color-l2-content-secondary: #5e5e5e;\n  --gds-color-l2-content-tertiary: #ffffff;\n  --gds-color-l2-content-positive: #35723d;\n  --gds-color-l2-content-negative: #a63e2a;\n  --gds-color-l2-content-warning: #65581e;\n  --gds-color-l2-content-notice: #005fac;\n  --gds-color-l2-content-infomation: #1b1b1b;\n  --gds-color-l2-content-copper-01: #1b1b1b;\n  --gds-color-l2-content-copper-02: #ffffff;\n  --gds-color-l2-content-purple-01: #1b1b1b;\n  --gds-color-l2-content-purple-02: #ffffff;\n  --gds-color-l2-content-green-01: #1b1b1b;\n  --gds-color-l2-content-green-02: #ffffff;\n  --gds-color-l2-content-blue-01: #1b1b1b;\n  --gds-color-l2-content-blue-02: #ffffff;\n  --gds-color-l2-border-primary: #d7d7d7;\n  --gds-color-l2-border-secondary: #6f6f6f;\n  --gds-color-l2-border-tertiary: #f9f9f9;\n  --gds-color-l2-border-quarternary: #1b1b1b;\n  --gds-color-l2-border-inversed: #ffffff;\n  --gds-color-l3-background-primary: #1b1b1b;\n  --gds-color-l3-background-secondary: #e2e2e2;\n  --gds-color-l3-background-tertiary: #d7d7d7;\n  --gds-color-l3-background-quarternary: #ffffff;\n  --gds-color-l3-background-positive: #35723d;\n  --gds-color-l3-background-positive-secondary: #d7edd9;\n  --gds-color-l3-background-positive-badge: #d7edd9;\n  --gds-color-l3-background-negative: #a63e2a;\n  --gds-color-l3-background-negative-secondary: #fcecea;\n  --gds-color-l3-background-negative-badge: #f8d6d3;\n  --gds-color-l3-background-notice: #005fac;\n  --gds-color-l3-background-notice-secondary: #d3dfef;\n  --gds-color-l3-background-notice-badge: #d3dfef;\n  --gds-color-l3-background-warning: #65581e;\n  --gds-color-l3-background-warning-secondary: #fadf7b;\n  --gds-color-l3-background-warning-badge: #fadf7b;\n  --gds-color-l3-background-information: #1b1b1b;\n  --gds-color-l3-background-information-secondary: #d7d7d7;\n  --gds-color-l3-background-information-badge: #d7d7d7;\n  --gds-color-l3-background-buy: #2e6290;\n  --gds-color-l3-background-copper-01: #e4ded5;\n  --gds-color-l3-background-copper-02: #42361f;\n  --gds-color-l3-background-purple-01: #e7deee;\n  --gds-color-l3-background-purple-02: #473752;\n  --gds-color-l3-background-green-01: #d7edd9;\n  --gds-color-l3-background-green-02: #25512b;\n  --gds-color-l3-background-blue-01: #d3dfef;\n  --gds-color-l3-background-blue-02: #1a3853;\n  --gds-color-l3-background-disabled: #f9f9f9;\n  --gds-color-l3-background-disabled-secondary: #f3f3f3;\n  --gds-color-l3-content-primary: #ffffff;\n  --gds-color-l3-content-secondary: #5e5e5e;\n  --gds-color-l3-content-tertiary: #1b1b1b;\n  --gds-color-l3-content-notice: #005fac;\n  --gds-color-l3-content-warning: #65581e;\n  --gds-color-l3-content-information: #1b1b1b;\n  --gds-color-l3-content-buy: #ffffff;\n  --gds-color-l3-content-copper-01: #1b1b1b;\n  --gds-color-l3-content-copper-02: #ffffff;\n  --gds-color-l3-content-purple-01: #1b1b1b;\n  --gds-color-l3-content-purple-02: #ffffff;\n  --gds-color-l3-content-green-01: #1b1b1b;\n  --gds-color-l3-content-green-02: #ffffff;\n  --gds-color-l3-content-blue-01: #1b1b1b;\n  --gds-color-l3-content-blue-02: #ffffff;\n  --gds-color-l3-content-disabled: #ababab;\n  --gds-color-l3-content-positive: #35723d;\n  --gds-color-l3-content-negative: #a63e2a;\n  --gds-color-l3-border-primary: #1b1b1b;\n  --gds-color-l3-border-secondary: #6f6f6f;\n  --gds-color-l3-border-tertiary: #d7d7d7;\n  --gds-color-l3-border-negative: #a63e2a;\n  --gds-color-l3-states-dark-hover: #ffffff 10%;\n  --gds-color-l3-states-dark-pressed: #ffffff 20%;\n  --gds-color-l3-states-light-hover: #1b1b1b 10%;\n  --gds-color-l3-states-light-pressed: #1b1b1b 20%;\n  --gds-color-l3-states-positive-hover: #35723d 10%;\n  --gds-color-l3-states-positive-pressed: #35723d 20%;\n  --gds-color-l3-states-negative-hover: #a63e2a 10%;\n  --gds-color-l3-states-negative-pressed: #a63e2a 20%;\n",Yt=[be("/**\n * Do not edit directly\n * Generated on Wed, 13 Nov 2024 08:14:49 GMT\n */\n\n:host {\n  --gds-ref-color-neutral-000: #ffffff;\n  --gds-ref-color-neutral-050: #f8f8f8;\n  --gds-ref-color-neutral-100: #e9e9e9;\n  --gds-ref-color-neutral-150: #eeeeee;\n  --gds-ref-color-neutral-200: #dedede;\n  --gds-ref-color-neutral-250: #cecece;\n  --gds-ref-color-neutral-300: #ababab;\n  --gds-ref-color-neutral-350: #adadad;\n  --gds-ref-color-neutral-400: #868686;\n  --gds-ref-color-neutral-450: #757575;\n  --gds-ref-color-neutral-500: #494949;\n  --gds-ref-color-neutral-525: #464646;\n  --gds-ref-color-neutral-550: #333333;\n  --gds-ref-color-neutral-600: #2c2c2c;\n  --gds-ref-color-neutral-650: #272727;\n  --gds-ref-color-neutral-700: #222222;\n  --gds-ref-color-neutral-750: #1a1a1a;\n  --gds-ref-color-neutral-800: #121212;\n  --gds-ref-color-neutral-1000: #000000;\n  --gds-ref-color-blue-100: #58b8ee;\n  --gds-ref-color-blue-200: #41b0ee;\n  --gds-ref-color-blue-300: #00adff;\n  --gds-ref-color-blue-400: #2c9cd9;\n  --gds-ref-color-blue-500: #0092e1;\n  --gds-ref-color-blue-600: #007ac7;\n  --gds-ref-color-blue-700: #0062bc;\n  --gds-ref-color-green-100: #75b44a;\n  --gds-ref-color-green-200: #60cd18;\n  --gds-ref-color-green-300: #45b400;\n  --gds-ref-color-green-400: #308800;\n  --gds-ref-color-red-100: #f7706d;\n  --gds-ref-color-red-200: #ff594f;\n  --gds-ref-color-red-300: #f03529;\n  --gds-ref-color-red-400: #d81a1a;\n  --gds-ref-color-red-500: #c82a29;\n  --gds-ref-color-red-600: #bb000c;\n  --gds-ref-color-red-700: #9f000a;\n  --gds-ref-color-red-800: #9e2120;\n  --gds-ref-color-purple-100: #ad91dc;\n  --gds-ref-color-purple-200: #7e52cc;\n  --gds-ref-color-purple-300: #673ab6;\n  --gds-ref-color-purple-400: #4f2C99;\n  --gds-ref-color-purple-500: #4a328f;\n  --gds-ref-color-purple-600: #3f2587;\n  --gds-ref-color-yellow-100: #ffe182;\n  --gds-ref-color-yellow-200: #ffc500;\n  --gds-ref-color-yellow-300: #ffb400;\n  --gds-ref-color-yellow-400: #f8a000;\n  --gds-ref-color-yellow-500: #f0be47;\n  --gds-ref-color-yellow-600: #ebab39;\n  --gds-ref-color-blue-5: #001127;\n  --gds-ref-color-blue-10: #001C39;\n  --gds-ref-color-blue-15: #00264B;\n  --gds-ref-color-blue-20: #00315D;\n  --gds-ref-color-blue-25: #003C70;\n  --gds-ref-color-blue-30: #004883;\n  --gds-ref-color-blue-35: #005397;\n  --gds-ref-color-blue-40: #005FAC;\n  --gds-ref-color-blue-45: #006CC1;\n  --gds-ref-color-blue-50: #0078D7;\n  --gds-ref-color-blue-55: #0085EC;\n  --gds-ref-color-blue-60: #1992FF;\n  --gds-ref-color-blue-65: #4EA0FF;\n  --gds-ref-color-blue-70: #6FAEFF;\n  --gds-ref-color-blue-75: #8ABBFF;\n  --gds-ref-color-blue-80: #A4C9FF;\n  --gds-ref-color-blue-85: #BCD6FF;\n  --gds-ref-color-blue-90: #D4E3FF;\n  --gds-ref-color-blue-95: #EBF1FF;\n  --gds-ref-color-blue-98: #F8F9FF;\n  --gds-ref-color-green-5: #001505;\n  --gds-ref-color-green-10: #00210E;\n  --gds-ref-color-green-15: #002D10;\n  --gds-ref-color-green-20: #003916;\n  --gds-ref-color-green-25: #00461D;\n  --gds-ref-color-green-30: #005323;\n  --gds-ref-color-green-35: #00602A;\n  --gds-ref-color-green-40: #006D31;\n  --gds-ref-color-green-45: #007B38;\n  --gds-ref-color-green-50: #138942;\n  --gds-ref-color-green-55: #29964D;\n  --gds-ref-color-green-60: #39A459;\n  --gds-ref-color-green-65: #48B265;\n  --gds-ref-color-green-70: #57C071;\n  --gds-ref-color-green-75: #65CE7E;\n  --gds-ref-color-green-80: #73DC8A;\n  --gds-ref-color-green-85: #81EA97;\n  --gds-ref-color-green-90: #8FF9A4;\n  --gds-ref-color-green-95: #C5FFCA;\n  --gds-ref-color-green-98: #EAFFE8;\n  --gds-ref-color-black: #000000;\n  --gds-ref-color-white: #FFFFFF;\n  --gds-ref-color-grey-5: #0D0D0C;\n  --gds-ref-color-grey-10: #1B1B18;\n  --gds-ref-color-grey-15: #282825;\n  --gds-ref-color-grey-20: #353531;\n  --gds-ref-color-grey-25: #42423D;\n  --gds-ref-color-grey-30: #505049;\n  --gds-ref-color-grey-35: #5D5D56;\n  --gds-ref-color-grey-40: #6A6A62;\n  --gds-ref-color-grey-45: #77776E;\n  --gds-ref-color-grey-50: #85857A;\n  --gds-ref-color-grey-55: #919188;\n  --gds-ref-color-grey-60: #9D9D95;\n  --gds-ref-color-grey-65: #A9A9A2;\n  --gds-ref-color-grey-70: #B6B6AF;\n  --gds-ref-color-grey-75: #C2C2BD;\n  --gds-ref-color-grey-80: #CECECA;\n  --gds-ref-color-grey-85: #DADAD7;\n  --gds-ref-color-grey-90: #E7E7E4;\n  --gds-ref-color-grey-95: #F3F3F2;\n  --gds-ref-color-grey-98: #F9F9F9;\n  --gds-ref-color-orange-5: #1A0F00;\n  --gds-ref-color-orange-10: #271900;\n  --gds-ref-color-orange-15: #352200;\n  --gds-ref-color-orange-20: #422C00;\n  --gds-ref-color-orange-25: #503700;\n  --gds-ref-color-orange-30: #503700;\n  --gds-ref-color-orange-35: #6E4C00;\n  --gds-ref-color-orange-40: #7D5700;\n  --gds-ref-color-orange-45: #8D6300;\n  --gds-ref-color-orange-50: #9D6E00;\n  --gds-ref-color-orange-55: #AE7A00;\n  --gds-ref-color-orange-60: #BE8600;\n  --gds-ref-color-orange-65: #CF9300;\n  --gds-ref-color-orange-70: #E19F00;\n  --gds-ref-color-orange-75: #F2AC00;\n  --gds-ref-color-orange-80: #FFBA30;\n  --gds-ref-color-orange-85: #FFCC77;\n  --gds-ref-color-orange-90: #FFDEAB;\n  --gds-ref-color-orange-95: #FFEED9;\n  --gds-ref-color-orange-98: #FFF8F3;\n  --gds-ref-color-red-5: #2B0200;\n  --gds-ref-color-red-10: #3E0400;\n  --gds-ref-color-red-15: #510700;\n  --gds-ref-color-red-20: #650B00;\n  --gds-ref-color-red-25: #790F00;\n  --gds-ref-color-red-30: #8E1400;\n  --gds-ref-color-red-35: #A31800;\n  --gds-ref-color-red-40: #BA1D00;\n  --gds-ref-color-red-45: #D02200;\n  --gds-ref-color-red-50: #E23010;\n  --gds-ref-color-red-55: #F53E1D;\n  --gds-ref-color-red-60: #FF5636;\n  --gds-ref-color-red-65: #FF7257;\n  --gds-ref-color-red-70: #FF8A73;\n  --gds-ref-color-red-75: #FFA08D;\n  --gds-ref-color-red-80: #FFB4A5;\n  --gds-ref-color-red-85: #FFC8BC;\n  --gds-ref-color-red-90: #FFDAD3;\n  --gds-ref-color-red-95: #FFEDE9;\n  --gds-ref-color-red-98: #FFF8F6;\n}\n"),be("/**\n * Do not edit directly\n * Generated on Wed, 13 Nov 2024 08:14:49 GMT\n */\n\n:host {\n  color-scheme: light;\n  --gds-sys-color-blue: #41b0ee;\n  --gds-sys-color-dark-blue-1: #41b0ee;\n  --gds-sys-color-dark-blue-2: #007ac7;\n  --gds-sys-color-green: #60cd18;\n  --gds-sys-color-dark-green-1: #45b400;\n  --gds-sys-color-dark-green-2: #308800;\n  --gds-sys-color-yellow: #ffc500;\n  --gds-sys-color-dark-yellow-1: #ffb400;\n  --gds-sys-color-dark-yellow-2: #f8a000;\n  --gds-sys-color-text-primary: #333333;\n  --gds-sys-color-text-secondary: #ababab;\n  --gds-sys-color-text-white: #ffffff;\n  --gds-sys-color-text-black: #333333;\n  --gds-sys-color-text-inverted: #ffffff;\n  --gds-sys-color-text-link: #0062bc;\n  --gds-sys-color-text-error: #9f000a;\n  --gds-sys-color-text-disabled: #adadad;\n  --gds-sys-color-red: #f03529;\n  --gds-sys-color-dark-red-1: #d81a1a;\n  --gds-sys-color-dark-red-2: #bb000c;\n  --gds-sys-color-purple: #673ab6;\n  --gds-sys-color-dark-purple-1: #4f2C99;\n  --gds-sys-color-dark-purple-2: #3f2587;\n  --gds-sys-color-white: #ffffff;\n  --gds-sys-color-black: #000000;\n  --gds-sys-color-background-primary: #ffffff;\n  --gds-sys-color-background-secondary: #eeeeee;\n  --gds-sys-color-base100: #f8f8f8;\n  --gds-sys-color-base200: #e9e9e9;\n  --gds-sys-color-base300: #dedede;\n  --gds-sys-color-base400: #cecece;\n  --gds-sys-color-base500: #adadad;\n  --gds-sys-color-base600: #868686;\n  --gds-sys-color-base700: #494949;\n  --gds-sys-color-base800: #333333;\n  --gds-sys-color-base900: #1a1a1a;\n  --gds-sys-color-hover-10: #ffffff 10%;\n  --gds-sys-color-hover-20: #ffffff 20%;\n  --gds-sys-color-accent-accent-green: #006D31;\n  --gds-sys-color-accent-on-accent-green: #FFFFFF;\n  --gds-sys-color-accent-accent-orange: #FFBA30;\n  --gds-sys-color-accent-on-accent-orange: #353531;\n  --gds-sys-color-background-background: #FFFFFF;\n  --gds-sys-color-background-background-dim: #F3F3F2;\n  --gds-sys-color-container-container: #F3F3F2;\n  --gds-sys-color-container-container-dim1: #E7E7E4;\n  --gds-sys-color-container-container-dim2: #DADAD7;\n  --gds-sys-color-container-container-bright: #FFFFFF;\n  --gds-sys-color-container-container-shade1: #353531;\n  --gds-sys-color-container-container-shade2: #1B1B18;\n  --gds-sys-color-container-container-shade3: #353531;\n  --gds-sys-color-container-container-disabled: #F9F9F9;\n  --gds-sys-color-container-container-positive: #006D31;\n  --gds-sys-color-container-container-negative: #BA1D00;\n  --gds-sys-color-container-container-negative-bright: #FFEDE9;\n  --gds-sys-color-content-content: #353531;\n  --gds-sys-color-content-content-inverse: #FFFFFF;\n  --gds-sys-color-content-content-secondary: #6A6A62;\n  --gds-sys-color-content-content-positive: #006D31;\n  --gds-sys-color-content-content-positive-bright: #EAFFE8;\n  --gds-sys-color-content-content-negative: #BA1D00;\n  --gds-sys-color-content-content-negative-bright: #FFF8F6;\n  --gds-sys-color-content-content-custom-blue-bright: #F8F9FF;\n  --gds-sys-color-content-content-disabled: #9D9D95;\n  --gds-sys-color-custom-custom-blue: #005FAC;\n  --gds-sys-color-custom-on-custom-blue: #D4E3FF;\n  --gds-sys-color-custom-custom-blue-bright: #D4E3FF;\n  --gds-sys-color-custom-on-custom-blue-bright: #00315D;\n  --gds-sys-color-custom-custom-green: #003916;\n  --gds-sys-color-custom-on-custom-green: #EAFFE8;\n  --gds-sys-color-custom-custom-green-bright: #EAFFE8;\n  --gds-sys-color-custom-on-custom-green-bright: #003916;\n  --gds-sys-color-custom-custom-grey: #353531;\n  --gds-sys-color-custom-on-custom-grey: #E7E7E4;\n  --gds-sys-color-custom-custom-grey-bright: #E7E7E4;\n  --gds-sys-color-custom-on-custom-grey-bright: #353531;\n  --gds-sys-color-primary-primary: #353531;\n  --gds-sys-color-state-layers-state-black: #000000 10%;\n  --gds-sys-color-state-layers-state-black-dim1: #000000 20%;\n  --gds-sys-color-state-layers-state-black-dim2: #000000 40%;\n  --gds-sys-color-state-layers-state-black-shade: #000000 60%;\n  --gds-sys-color-state-layers-state-positive: #006d31 10%;\n  --gds-sys-color-state-layers-state-positive-dim: #006d31 20%;\n  --gds-sys-color-state-layers-state-negative: #ba1d00 10%;\n  --gds-sys-color-state-layers-state-negative-dim: #ba1d00 20%;\n  --gds-sys-color-state-layers-state-custom-blue: #005fac 20%;\n  --gds-sys-color-status-information-information: #353531;\n  --gds-sys-color-status-information-on-information: #FFFFFF;\n  --gds-sys-color-status-information-information-bright: #F3F3F2;\n  --gds-sys-color-status-information-on-information-bright: #353531;\n  --gds-sys-color-status-negative-negative: #BA1D00;\n  --gds-sys-color-status-negative-on-negative: #FFFFFF;\n  --gds-sys-color-status-negative-negative-bright: #FFEDE9;\n  --gds-sys-color-status-negative-on-negative-bright: #BA1D00;\n  --gds-sys-color-status-warning-warning: #9D6E00;\n  --gds-sys-color-status-warning-on-warning: #FFFFFF;\n  --gds-sys-color-status-warning-warning-bright: #FFEED9;\n  --gds-sys-color-status-warning-on-warning-bright: #7D5700;\n  --gds-sys-color-status-positive-positive: #006D31;\n  --gds-sys-color-status-positive-on-positive: #FFFFFF;\n  --gds-sys-color-status-positive-positive-bright: #EAFFE8;\n  --gds-sys-color-status-positive-on-positive-bright: #006D31;\n  --gds-sys-color-status-notice-notice: #005FAC;\n  --gds-sys-color-status-notice-on-notice: #FFFFFF;\n  --gds-sys-color-status-notice-notice-bright: #EBF1FF;\n  --gds-sys-color-status-notice-on-notice-bright: #005FAC;\n  --gds-sys-color-stroke-stroke: #353531;\n  --gds-sys-color-stroke-stroke-variant1: #85857A;\n  --gds-sys-color-stroke-stroke-variant2: #CECECA;\n  --gds-sys-color-stroke-stroke-disabled: #9D9D95;\n  --gds-sys-color-stroke-stroke-notice: #005FAC;\n  --gds-sys-color-stroke-stroke-positive: #006D31;\n  --gds-sys-color-stroke-stroke-warning: #7D5700;\n  --gds-sys-color-stroke-stroke-negative: #BA1D00;\n  --gds-sys-color-stroke-stroke-custom-blue: #005FAC;\n  --gds-sys-color-stroke-stroke-custom-blue-bright: #6FAEFF;\n  --gds-sys-color-stroke-stroke-inversed: #FFFFFF;\n  --gds-color-level-l1-background-primary: #ffffff;\n  --gds-color-level-l1-background-tertiary: #1b1b1b;\n  --gds-color-level-l1-background-secondary: #eeeeee;\n  --gds-color-level-l1-content-positive: #35723d;\n  --gds-color-level-l1-content-negative: #a63e2a;\n  --gds-color-level-l1-content-primary: #1b1b1b;\n  --gds-color-level-l1-content-secondary: #5e5e5e;\n  --gds-color-level-l1-content-tertiary: #ffffff;\n  --gds-color-level-l2-background-primary: #f3f3f3;\n  --gds-color-level-l2-background-secondary: #ffffff;\n  --gds-color-level-l2-background-tertiary: #242424;\n  --gds-color-level-l2-background-positive: #ecf6ed;\n  --gds-color-level-l2-background-negative: #fcecea;\n  --gds-color-level-l2-background-notice: #eaf0f7;\n  --gds-color-level-l2-background-warning: #fcecbc;\n  --gds-color-level-l2-background-information: #e2e2e2;\n  --gds-color-level-l2-background-copper-01: #f2efeb;\n  --gds-color-level-l2-background-copper-02: #332a18;\n  --gds-color-level-l2-background-purple-01: #f3eff7;\n  --gds-color-level-l2-background-purple-02: #372b40;\n  --gds-color-level-l2-background-green-01: #ecf6ed;\n  --gds-color-level-l2-background-green-02: #1d3f22;\n  --gds-color-level-l2-background-blue-01: #eaf0f7;\n  --gds-color-level-l2-background-blue-02: #152c41;\n  --gds-color-level-l2-content-primary: #1b1b1b;\n  --gds-color-level-l2-content-secondary: #5e5e5e;\n  --gds-color-level-l2-content-tertiary: #ffffff;\n  --gds-color-level-l2-content-positive: #35723d;\n  --gds-color-level-l2-content-negative: #a63e2a;\n  --gds-color-level-l2-content-warning: #65581e;\n  --gds-color-level-l2-content-notice: #005fac;\n  --gds-color-level-l2-content-infomation: #1b1b1b;\n  --gds-color-level-l2-content-copper-01: #1b1b1b;\n  --gds-color-level-l2-content-copper-02: #ffffff;\n  --gds-color-level-l2-content-purple-01: #1b1b1b;\n  --gds-color-level-l2-content-purple-02: #ffffff;\n  --gds-color-level-l2-content-green-01: #1b1b1b;\n  --gds-color-level-l2-content-green-02: #ffffff;\n  --gds-color-level-l2-content-blue-01: #1b1b1b;\n  --gds-color-level-l2-content-blue-02: #ffffff;\n  --gds-color-level-l2-border-primary: #d7d7d7;\n  --gds-color-level-l2-border-secondary: #6f6f6f;\n  --gds-color-level-l2-border-tertiary: #f9f9f9;\n  --gds-color-level-l2-border-quarternary: #1b1b1b;\n  --gds-color-level-l2-border-inversed: #ffffff;\n  --gds-color-level-l3-background-primary: #1b1b1b;\n  --gds-color-level-l3-background-secondary: #e2e2e2;\n  --gds-color-level-l3-background-tertiary: #d7d7d7;\n  --gds-color-level-l3-background-quarternary: #ffffff;\n  --gds-color-level-l3-background-positive: #35723d;\n  --gds-color-level-l3-background-positive-secondary: #d7edd9;\n  --gds-color-level-l3-background-positive-badge: #d7edd9;\n  --gds-color-level-l3-background-negative: #a63e2a;\n  --gds-color-level-l3-background-negative-secondary: #fcecea;\n  --gds-color-level-l3-background-negative-badge: #f8d6d3;\n  --gds-color-level-l3-background-notice: #005fac;\n  --gds-color-level-l3-background-notice-secondary: #d3dfef;\n  --gds-color-level-l3-background-notice-badge: #d3dfef;\n  --gds-color-level-l3-background-warning: #65581e;\n  --gds-color-level-l3-background-warning-secondary: #fadf7b;\n  --gds-color-level-l3-background-warning-badge: #fadf7b;\n  --gds-color-level-l3-background-information: #1b1b1b;\n  --gds-color-level-l3-background-information-secondary: #d7d7d7;\n  --gds-color-level-l3-background-information-badge: #d7d7d7;\n  --gds-color-level-l3-background-buy: #2e6290;\n  --gds-color-level-l3-background-copper-01: #e4ded5;\n  --gds-color-level-l3-background-copper-02: #42361f;\n  --gds-color-level-l3-background-purple-01: #e7deee;\n  --gds-color-level-l3-background-purple-02: #473752;\n  --gds-color-level-l3-background-green-01: #d7edd9;\n  --gds-color-level-l3-background-green-02: #25512b;\n  --gds-color-level-l3-background-blue-01: #d3dfef;\n  --gds-color-level-l3-background-blue-02: #1a3853;\n  --gds-color-level-l3-background-disabled: #f9f9f9;\n  --gds-color-level-l3-background-disabled-secondary: #f3f3f3;\n  --gds-color-level-l3-content-primary: #ffffff;\n  --gds-color-level-l3-content-secondary: #5e5e5e;\n  --gds-color-level-l3-content-tertiary: #1b1b1b;\n  --gds-color-level-l3-content-notice: #005fac;\n  --gds-color-level-l3-content-warning: #65581e;\n  --gds-color-level-l3-content-information: #1b1b1b;\n  --gds-color-level-l3-content-buy: #ffffff;\n  --gds-color-level-l3-content-copper-01: #1b1b1b;\n  --gds-color-level-l3-content-copper-02: #ffffff;\n  --gds-color-level-l3-content-purple-01: #1b1b1b;\n  --gds-color-level-l3-content-purple-02: #ffffff;\n  --gds-color-level-l3-content-green-01: #1b1b1b;\n  --gds-color-level-l3-content-green-02: #ffffff;\n  --gds-color-level-l3-content-blue-01: #1b1b1b;\n  --gds-color-level-l3-content-blue-02: #ffffff;\n  --gds-color-level-l3-content-disabled: #ababab;\n  --gds-color-level-l3-content-positive: #35723d;\n  --gds-color-level-l3-content-negative: #a63e2a;\n  --gds-color-level-l3-border-primary: #1b1b1b;\n  --gds-color-level-l3-border-secondary: #6f6f6f;\n  --gds-color-level-l3-border-tertiary: #d7d7d7;\n  --gds-color-level-l3-border-negative: #a63e2a;\n  --gds-color-level-l3-states-dark-hover: #ffffff NaN%;\n  --gds-color-level-l3-states-dark-pressed: #ffffff NaN%;\n  --gds-color-level-l3-states-light-hover: #1b1b1b NaN%;\n  --gds-color-level-l3-states-light-pressed: #1b1b1b NaN%;\n  --gds-color-level-l3-states-positive-hover: #35723d NaN%;\n  --gds-color-level-l3-states-positive-pressed: #35723d NaN%;\n  --gds-color-level-l3-states-negative-hover: #a63e2a NaN%;\n  --gds-color-level-l3-states-negative-pressed: #a63e2a NaN%;\n}\n"),be("/**\n * Do not edit directly\n * Generated on Wed, 13 Nov 2024 08:14:49 GMT\n */\n\n:host {\n  --gds-space-max: 999px;\n  --gds-space-8xl: 120px;\n  --gds-space-7xl: 112px;\n  --gds-space-6xl: 96px;\n  --gds-space-5xl: 80px;\n  --gds-space-4xl: 64px;\n  --gds-space-3xl: 48px;\n  --gds-space-2xl: 40px;\n  --gds-space-xl: 32px;\n  --gds-space-l: 24px;\n  --gds-space-m: 16px;\n  --gds-space-s: 12px;\n  --gds-space-xs: 8px;\n  --gds-space-2xs: 4px;\n  --gds-space-3xs: 2px;\n  --gds-space-4xs: 1px;\n  --gds-space-0: 0px;\n}\n"),be("/**\n * Do not edit directly\n * Generated on Wed, 13 Nov 2024 08:14:49 GMT\n */\n\n:host {\n  --gds-vp-3xl: 3840px;\n  --gds-vp-2xl: 2560px;\n  --gds-vp-xl: 1440px;\n  --gds-vp-l: 1024px;\n  --gds-vp-m: 768px;\n  --gds-vp-s: 430px;\n  --gds-vp-xs: 375px;\n}\n"),be("/**\n * Do not edit directly\n * Generated on Wed, 13 Nov 2024 08:14:49 GMT\n */\n\n:host {\n  --gds-text-weight-bold: 700;\n  --gds-text-weight-medium: 500;\n  --gds-text-weight-book: 450;\n  --gds-text-weight-regular: 400;\n  --gds-text-weight-light: 300;\n  --gds-text-size-preamble-xs: 16px;\n  --gds-text-size-preamble-s: 18px;\n  --gds-text-size-preamble-m: 20px;\n  --gds-text-size-preamble-l: 24px;\n  --gds-text-size-preamble-xl: 28px;\n  --gds-text-size-preamble-2xl: 32px;\n  --gds-text-size-display-s: 32px;\n  --gds-text-size-display-m: 36px;\n  --gds-text-size-display-l: 48px;\n  --gds-text-size-display-xl: 64px;\n  --gds-text-size-display-2xl: 82px;\n  --gds-text-size-body-s: 14px;\n  --gds-text-size-body-m: 16px;\n  --gds-text-size-body-l: 20px;\n  --gds-text-size-detail-xs: 12px;\n  --gds-text-size-detail-s: 14px;\n  --gds-text-size-detail-m: 16px;\n  --gds-text-size-heading-2xl: 14px;\n  --gds-text-size-heading-xs: 16px;\n  --gds-text-size-heading-s: 20px;\n  --gds-text-size-heading-m: 24px;\n  --gds-text-size-heading-l: 28px;\n  --gds-text-size-heading-xl: 32px;\n  --gds-text-line-height-preamble-xs: 24px;\n  --gds-text-line-height-preamble-s: 26px;\n  --gds-text-line-height-preamble-m: 28px;\n  --gds-text-line-height-preamble-l: 32px;\n  --gds-text-line-height-preamble-xl: 36px;\n  --gds-text-line-height-preamble-2xl: 40px;\n  --gds-text-line-height-display-s: 40px;\n  --gds-text-line-height-display-m: 44px;\n  --gds-text-line-height-display-l: 56px;\n  --gds-text-line-height-display-xl: 72px;\n  --gds-text-line-height-display-2xl: 90px;\n  --gds-text-line-height-body-s: 20px;\n  --gds-text-line-height-body-m: 24px;\n  --gds-text-line-height-body-l: 26px;\n  --gds-text-line-height-detail-xs: 16px;\n  --gds-text-line-height-detail-s: 18px;\n  --gds-text-line-height-detail-m: 20px;\n  --gds-text-line-height-heading-2xs: 20px;\n  --gds-text-line-height-heading-xs: 24px;\n  --gds-text-line-height-heading-s: 28px;\n  --gds-text-line-height-heading-m: 32px;\n  --gds-text-line-height-heading-l: 40px;\n  --gds-text-line-height-heading-xl: 44px;\n}\n"),be("/**\n * Do not edit directly\n * Generated on Wed, 13 Nov 2024 08:14:49 GMT\n */\n\n:host {\n  --gds-sys-motion-duration-slowest: 1.5s;\n  --gds-sys-motion-duration-slow: 1s;\n  --gds-sys-motion-duration-default: .5s;\n  --gds-sys-motion-duration-fast: .4s;\n  --gds-sys-motion-duration-fastest: .2s;\n  --gds-sys-motion-easing-linear: cubic-bezier(0, 0, 1, 1);\n  --gds-sys-motion-easing-ease-out: cubic-bezier(0.22, 1, 0.36, 1);\n  --gds-sys-motion-easing-ease-in-out: cubic-bezier(0.83, 0, 0.17, 1);\n  --gds-sys-motion-easing-ease-in: cubic-bezier(0.64, 0, 0.78, 0);\n}\n"),be("/**\n * Do not edit directly\n * Generated on Wed, 13 Nov 2024 08:14:49 GMT\n */\n\n:host {\n--gds-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 0px 1px 0px rgba(0, 0, 0, 0.1);\n--gds-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);\n--gds-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);\n--gds-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03);\n--gds-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03);\n}\n")];Ut.instance.injectGlobalStyles("root-tokens",ve`
    :root,
    :root[gds-theme='light'] {
      ${be(Gt)}
    }
    :root[gds-theme='dark'] {
      ${be(Zt)}
    }
  `);r(326);var qt=class extends lit_element_r{constructor(){super(),this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new Bt(this)}connectedCallback(){var e;super.connectedCallback(),this.setAttribute("gds-element",(null==(e=this.gdsElementName)?void 0:e.toString())||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}};et([je()],qt.prototype,"_isUsingTransitionalStyles",2);const Kt=Symbol.for(""),Xt=e=>{if(e?.r===Kt)return e?._$litStatic$},Jt=(e,...t)=>({_$litStatic$:t.reduce(((t,r,o)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[o+1]),e[0]),r:Kt}),Qt=new Map,en=e=>(t,...r)=>{const o=r.length;let s,i;const a=[],l=[];let c,d=0,h=!1;for(;d<o;){for(c=t[d];d<o&&void 0!==(i=r[d],s=Xt(i));)c+=s+t[++d],h=!0;d!==o&&l.push(i),a.push(c),d++}if(d===o&&a.push(t[o]),h){const e=a.join("$$lit$$");void 0===(t=Qt.get(e))&&(a.raw=a,Qt.set(e,t=a)),r=l}return e(t,...r)},tn=en(ee);en(te),en(ne);var nn=ve`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`,rn=class extends qt{constructor(){super(...arguments),this.level="2",this.tag="span"}render(){const e=(e=>({_$litStatic$:e,r:Kt}))(encodeURI(this.tag));return tn`<${e} tag><slot></slot></${e}>`}};rn.styles=[Yt,pt,nn],et([Pe()],rn.prototype,"level",2),et([Pe({type:String})],rn.prototype,"tag",2),et([Ft({valueTemplate:e=>`${e}`,selector:"[tag]",styleTemplate:(e,t)=>{const r=t[0];return`font-size: var(--gds-text-size-${r});`+`line-height: var(--gds-text-line-height-${r});`}})],rn.prototype,"font-size",2),et([Ft({property:"font-weight",selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],rn.prototype,"font-weight",2),et([Ft({property:"margin",valueTemplate:e=>e})],rn.prototype,"margin",2),et([Ft({property:"text-wrap",valueTemplate:e=>e})],rn.prototype,"text-wrap",2),et([Ft({property:"text-transform",valueTemplate:e=>e})],rn.prototype,"text-transform",2),et([Ft({property:"max-width",valueTemplate:e=>`${e}ch`})],rn.prototype,"max-width",2),et([Ft({property:"min-width",valueTemplate:e=>`${e}ch`})],rn.prototype,"min-width",2),et([Ft({property:"text-align",valueTemplate:e=>e})],rn.prototype,"text-align",2),et([Ft({valueTemplate:e=>e,selector:"[tag]"})],rn.prototype,"text-decoration",2),et([Ft({valueTemplate:e=>e,styleTemplate:(e,t)=>`overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: ${t[0]};\n      -webkit-box-orient: vertical;`})],rn.prototype,"lines",2),et([Ft({property:"color",valueTemplate:function(e){const[t,r]=e.split("/");return r?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-content-${t}) ${100*parseFloat(r)}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-content-${t})`}})],rn.prototype,"color",2),rn=et([lt("gds-text")],rn);var on,sn,an;on=new WeakMap,sn=new WeakMap,an=new WeakMap;var ln=class _TransitionalStyles{constructor(){rt(this,on,new Map),rt(this,sn,new Map),rt(this,an,!It())}static get instance(){var e;return(null==(e=globalThis.__gdsTransitionalStyles)?void 0:e[it])||(globalThis.__gdsTransitionalStyles=Qe(Je({},globalThis.__gdsTransitionalStyles),{[it]:new _TransitionalStyles})),globalThis.__gdsTransitionalStyles[it]}apply(e,t){if(!e.shadowRoot)return;const r=nt(this,on).get(t);r&&(nt(this,sn).set(t,e),this.applyToElement(t,r))}applyToElement(e,t){var r,o;const s=nt(this,sn).get(e);if(!s||!s.shadowRoot)return;const i=()=>{s._dynamicStylesController.clearInitial(),s._dynamicStylesController.inject("t-styles",be(t)),s._isUsingTransitionalStyles=!0},a=()=>{s._isUsingTransitionalStyles=!1,s._dynamicStylesController.clear("t-styles"),s._dynamicStylesController.restoreInitial()},l="[gds-element=gds-theme]";let c=s.getRootNode(),d=s.closest(l);for(;null===d&&c!==document;)d=null==(r=c.host)?void 0:r.closest(l),c=null==(o=c.host)?void 0:o.getRootNode();if(d){const e=d,t=()=>{"2023"===e.designVersion?a():i()};if(e.addEventListener("gds-design-version-changed",t),s.addEventListener("gds-element-disconnected",(()=>e.removeEventListener("gds-design-version-changed",t))),"2023"===e.designVersion)return void a()}i()}register(e,t){let r=t;nt(this,an)&&(r=`@layer reset {\n        *:not(style, [gds-element]) {\n          all: revert;\n        }\n      }\n      ${t}`),nt(this,on).set(e,r),this.applyToElement(e,r)}};var cn=ve`
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
`,dn=class extends qt{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then((()=>ln.instance.apply(this,"gds-menu-heading")))}render(){return ee`<slot></slot>`}};dn.styles=cn,dn=et([lt("gds-menu-heading")],dn);const hn=(e,...t)=>({strTag:!0,strings:e,values:t}),un=(e,t,r)=>{let o=e[0];for(let s=1;s<e.length;s++)o+=t[r?r[s-1]:s-1],o+=e[s];return o},pn=e=>{return"string"!=typeof(t=e)&&"strTag"in t?un(e.strings,e.values):e;var t};let gn=pn,fn=!1;const bn="lit-localize-status";class LocalizeController{constructor(e){this.__litLocalizeEventHandler=e=>{"ready"===e.detail.status&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(bn,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(bn,this.__litLocalizeEventHandler)}}const vn=e=>e.addController(new LocalizeController(e)),yn=()=>(e,t)=>(e.addInitializer(vn),e);class Deferred{constructor(){this.settled=!1,this.promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t}))}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}const mn=[];for(let th=0;th<256;th++)mn[th]=(th>>4&15).toString(16)+(15&th).toString(16);function wn(e,t){return(t?"h":"s")+function(e){let t=0,r=8997,o=0,s=33826,i=0,a=40164,l=0,c=52210;for(let d=0;d<e.length;d++)r^=e.charCodeAt(d),t=435*r,o=435*s,i=435*a,l=435*c,i+=r<<8,l+=s<<8,o+=t>>>16,r=65535&t,i+=o>>>16,s=65535&o,c=l+(i>>>16)&65535,a=65535&i;return mn[c>>8]+mn[255&c]+mn[a>>8]+mn[255&a]+mn[s>>8]+mn[255&s]+mn[r>>8]+mn[255&r]}("string"==typeof e?e:e.join("\x1e"))}const xn=new WeakMap,kn=new Map;function _n(e,t,r){if(e){const o=r?.id??function(e){const t="string"==typeof e?e:e.strings;let r=kn.get(t);void 0===r&&(r=wn(t,"string"!=typeof e&&!("strTag"in e)),kn.set(t,r));return r}(t),s=e[o];if(s){if("string"==typeof s)return s;if("strTag"in s)return un(s.strings,t.values,s.values);{let e=xn.get(s);return void 0===e&&(e=s.values,xn.set(s,e)),{...s,values:e.map((e=>t.values[e]))}}}}return pn(t)}function Cn(e){window.dispatchEvent(new CustomEvent(bn,{detail:e}))}let $n,En,Sn,An,Tn,Mn="",Dn=new Deferred;Dn.resolve();let Ln=0;const zn=e=>(function(e){if(fn)throw new Error("lit-localize can only be configured once");gn=e,fn=!0}(((e,t)=>_n(Tn,e,t))),Mn=En=e.sourceLocale,Sn=new Set(e.targetLocales),Sn.add(e.sourceLocale),An=e.loadLocale,{getLocale:Fn,setLocale:Wn}),Fn=()=>Mn,Wn=e=>{if(e===($n??Mn))return Dn.promise;if(!Sn||!An)throw new Error("Internal error");if(!Sn.has(e))throw new Error("Invalid locale code");Ln++;const t=Ln;$n=e,Dn.settled&&(Dn=new Deferred),Cn({status:"loading",loadingLocale:e});return(e===En?Promise.resolve({templates:void 0}):An(e)).then((r=>{Ln===t&&(Mn=e,$n=void 0,Tn=r.templates,Cn({status:"ready",readyLocale:e}),Dn.resolve())}),(r=>{Ln===t&&(Cn({status:"error",errorLocale:e,errorMessage:r.toString()}),Dn.reject(r))})),Dn.promise},On=1,Pn=2,jn=6,Vn=e=>(...t)=>({_$litDirective$:e,values:t});class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Hn=Vn(class extends directive_i{constructor(e){if(super(e),e.type!==On||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const e=!!t[o];e===this.st.has(o)||this.nt?.has(o)||(e?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return re}});var Nn,Rn,Bn,In=ve`
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
`,Un=class extends qt{constructor(){super(),rt(this,Nn),this.open=!1,this.buttonLabel=gn("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start"}connectedCallback(){super.connectedCallback(),ln.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",(e=>{this.open&&"Tab"==e.key&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then((e=>e.focus())))}))}render(){var e,t,r;return ut`<button
        id="trigger"
        class="icon border-0 small ${Hn({highlighted:this.open})}"
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
          @gds-menu-item-click=${st(this,Nn,Rn)}
        >
          <slot></slot>
        </gds-menu>
      </gds-popover>`}};Nn=new WeakSet,Rn=function(){this.open=!1},Un.styles=[In],Un.shadowRootOptions={mode:"open",delegatesFocus:!0},et([Pe({type:Boolean,reflect:!0})],Un.prototype,"open",2),et([Pe({attribute:"button-label"})],Un.prototype,"buttonLabel",2),et([Pe({attribute:"show-label",type:Boolean})],Un.prototype,"showLabel",2),et([Pe()],Un.prototype,"label",2),et([Pe()],Un.prototype,"placement",2),et([Re("#trigger")],Un.prototype,"elTriggerBtn",2),Un=et([lt("gds-context-menu"),yn()],Un);var Zn=class{constructor(e){rt(this,Bn,(e=>{var t,r;const o=e.target;if(!this.host.navigableItems.includes(o))return;let s=!1;if("ArrowDown"===e.key){const e=this.host.navigableItems.indexOf(o)+1,t=this.host.navigableItems[e];null==t||t.focus(),s=!0}else if("ArrowUp"===e.key){const e=this.host.navigableItems.indexOf(o)-1,t=this.host.navigableItems[e];null==t||t.focus(),s=!0}else if("Home"===e.key)null==(t=this.host.navigableItems[0])||t.focus(),s=!0;else if("End"===e.key)null==(r=this.host.navigableItems[this.host.navigableItems.length-1])||r.focus(),s=!0;else{const t=e.key.toLowerCase();if(1!==t.length)return;if(t>="a"&&t<="z"||t>="0"&&t<="9"){const e=this.host.navigableItems.find((e=>{var r;const o=null==(r=e.textContent)?void 0:r.trim().toLowerCase();return null==o?void 0:o.startsWith(t)}));null==e||e.focus(),s=!0}}s&&(e.preventDefault(),e.stopPropagation())})),(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",nt(this,Bn))}hostDisconnected(){this.host.removeEventListener("keydown",nt(this,Bn))}};function Gn(e){let t=e;for(;t.assignedElements().length>0&&"SLOT"===t.assignedElements()[0].nodeName;)t=t.assignedElements()[0];return t}Bn=new WeakMap;const{I:Yn}=de,qn=()=>document.createComment(""),Kn=(e,t,r)=>{const o=e._$AA.parentNode,s=void 0===t?e._$AB:t._$AA;if(void 0===r){const t=o.insertBefore(qn(),s),i=o.insertBefore(qn(),s);r=new Yn(t,i,e,e.options)}else{const t=r._$AB.nextSibling,i=r._$AM,a=i!==e;if(a){let t;r._$AQ?.(e),r._$AM=e,void 0!==r._$AP&&(t=e._$AU)!==i._$AU&&r._$AP(t)}if(t!==s||a){let e=r._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,s),e=t}}}return r},Xn=(e,t,r=e)=>(e._$AI(t,r),e),Jn={},Qn=e=>{e._$AP?.(!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const e=t.nextSibling;t.remove(),t=e}},er=(e,t)=>{const r=e._$AN;if(void 0===r)return!1;for(const o of r)o._$AO?.(t,!1),er(o,t);return!0},tr=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===r?.size)},nr=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),sr(t)}};function rr(e){void 0!==this._$AN?(tr(this),this._$AM=e,nr(this)):this._$AM=e}function or(e,t=!1,r=0){const o=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(t)if(Array.isArray(o))for(let i=r;i<o.length;i++)er(o[i],!1),tr(o[i]);else null!=o&&(er(o,!1),tr(o));else er(this,e)}const sr=e=>{e.type==Pn&&(e._$AP??=or,e._$AQ??=rr)};class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),nr(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(er(this,e),tr(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const ir=()=>new ref_h;class ref_h{}const ar=new WeakMap,lr=Vn(class extends async_directive_f{render(e){return oe}update(e,[t]){const r=t!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),oe}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.Y){const t=this.ht??globalThis;let r=ar.get(t);void 0===r&&(r=new WeakMap,ar.set(t,r)),void 0!==r.get(this.Y)&&this.Y.call(this.ht,void 0),r.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?ar.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var cr,dr=class extends qt{constructor(){super(),rt(this,cr,ir()),new Zn(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),ln.instance.apply(this,"gds-listbox")}get navigableItems(){return nt(this,cr).value&&Gn(nt(this,cr).value).assignedElements().filter((e=>!e.hasAttribute("isplaceholder")&&"gds-menu-item"===e.gdsElementName))||[]}focus(){var e;null==(e=this.navigableItems[0])||e.focus()}render(){return ut`<slot ${lr(nt(this,cr))}></slot>`}};cr=new WeakMap,dr=et([lt("gds-menu")],dr);var hr,ur=e=>class HighlightableElement extends e{constructor(){super(...arguments),this.onblur=e=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},this.onfocus=e=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))}}focus(e){this.setAttribute("tabindex","0"),super.focus(e)}},pr=ve`
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
`,gr=class extends(ur(qt)){constructor(){super(...arguments),rt(this,hr,(()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))}))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.click())})),this.addEventListener("click",nt(this,hr)),ln.instance.apply(this,"gds-option")}render(){return ut`<div><slot></slot></div>`}};hr=new WeakMap,gr.styles=[pr],gr=et([lt("gds-menu-item")],gr);var fr=class extends qt{constructor(){super(...arguments),this.show=!1}render(){return ut``}};function br(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{attributes:!0,childList:!0,subtree:!1,characterData:!0};return(t,r,o)=>{let s;const i=t.connectedCallback,a=t.disconnectedCallback;t.connectedCallback=function(){null==i||i.call(this);s=new MutationObserver(((e,t)=>{var r;null==(r=o.value)||r.call(this)})),s.observe(this,e)},t.disconnectedCallback=function(){null==a||a.call(this),s.disconnect()}}}function vr(e,t){const r=Je({waitUntilFirstUpdate:!1},t);return(t,o,s)=>{const{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach((t=>{var o;const i=t;if(e.has(i)){const t=e.get(i),a=this[i];t!==a&&(r.waitUntilFirstUpdate&&!this.hasUpdated||null==(o=s.value)||o.call(this,t,a))}})),i.call(this,e)}}}fr.styles=ve`
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
  `,et([Pe({type:Boolean,reflect:!0})],fr.prototype,"show",2),fr=et([lt("gds-backdrop")],fr);const yr=["top","right","bottom","left"],mr=Math.min,wr=Math.max,xr=Math.round,kr=Math.floor,_r=e=>({x:e,y:e}),Cr={left:"right",right:"left",bottom:"top",top:"bottom"},$r={start:"end",end:"start"};function Er(e,t,r){return wr(e,mr(t,r))}function Sr(e,t){return"function"==typeof e?e(t):e}function Ar(e){return e.split("-")[0]}function Tr(e){return e.split("-")[1]}function Mr(e){return"x"===e?"y":"x"}function Dr(e){return"y"===e?"height":"width"}function Lr(e){return["top","bottom"].includes(Ar(e))?"y":"x"}function zr(e){return Mr(Lr(e))}function Fr(e){return e.replace(/start|end/g,(e=>$r[e]))}function Wr(e){return e.replace(/left|right|bottom|top/g,(e=>Cr[e]))}function Or(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Pr(e){const{x:t,y:r,width:o,height:s}=e;return{width:o,height:s,top:r,left:t,right:t+o,bottom:r+s,x:t,y:r}}function jr(e,t,r){let{reference:o,floating:s}=e;const i=Lr(t),a=zr(t),l=Dr(a),c=Ar(t),d="y"===i,h=o.x+o.width/2-s.width/2,u=o.y+o.height/2-s.height/2,p=o[l]/2-s[l]/2;let g;switch(c){case"top":g={x:h,y:o.y-s.height};break;case"bottom":g={x:h,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:u};break;case"left":g={x:o.x-s.width,y:u};break;default:g={x:o.x,y:o.y}}switch(Tr(t)){case"start":g[a]-=p*(r&&d?-1:1);break;case"end":g[a]+=p*(r&&d?-1:1)}return g}async function Vr(e,t){var r;void 0===t&&(t={});const{x:o,y:s,platform:i,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:p=!1,padding:g=0}=Sr(t,e),f=Or(g),v=l[p?"floating"===u?"reference":"floating":u],y=Pr(await i.getClippingRect({element:null==(r=await(null==i.isElement?void 0:i.isElement(v)))||r?v:v.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:c})),m="floating"===u?{x:o,y:s,width:a.floating.width,height:a.floating.height}:a.reference,w=await(null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),x=await(null==i.isElement?void 0:i.isElement(w))&&await(null==i.getScale?void 0:i.getScale(w))||{x:1,y:1},_=Pr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:m,offsetParent:w,strategy:c}):m);return{top:(y.top-_.top+f.top)/x.y,bottom:(_.bottom-y.bottom+f.bottom)/x.y,left:(y.left-_.left+f.left)/x.x,right:(_.right-y.right+f.right)/x.x}}function Hr(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Nr(e){return yr.some((t=>e[t]>=0))}function Rr(){return"undefined"!=typeof window}function Br(e){return Zr(e)?(e.nodeName||"").toLowerCase():"#document"}function Ir(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Ur(e){var t;return null==(t=(Zr(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Zr(e){return!!Rr()&&(e instanceof Node||e instanceof Ir(e).Node)}function Gr(e){return!!Rr()&&(e instanceof Element||e instanceof Ir(e).Element)}function Yr(e){return!!Rr()&&(e instanceof HTMLElement||e instanceof Ir(e).HTMLElement)}function qr(e){return!(!Rr()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof Ir(e).ShadowRoot)}function Kr(e){const{overflow:t,overflowX:r,overflowY:o,display:s}=no(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!["inline","contents"].includes(s)}function Xr(e){return["table","td","th"].includes(Br(e))}function Jr(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(s){return!1}}))}function Qr(e){const t=eo(),r=Gr(e)?no(e):e;return"none"!==r.transform||"none"!==r.perspective||!!r.containerType&&"normal"!==r.containerType||!t&&!!r.backdropFilter&&"none"!==r.backdropFilter||!t&&!!r.filter&&"none"!==r.filter||["transform","perspective","filter"].some((e=>(r.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(r.contain||"").includes(e)))}function eo(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function to(e){return["html","body","#document"].includes(Br(e))}function no(e){return Ir(e).getComputedStyle(e)}function ro(e){return Gr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function oo(e){if("html"===Br(e))return e;const t=e.assignedSlot||e.parentNode||qr(e)&&e.host||Ur(e);return qr(t)?t.host:t}function so(e){const t=oo(e);return to(t)?e.ownerDocument?e.ownerDocument.body:e.body:Yr(t)&&Kr(t)?t:so(t)}function io(e,t,r){var o;void 0===t&&(t=[]),void 0===r&&(r=!0);const s=so(e),i=s===(null==(o=e.ownerDocument)?void 0:o.body),a=Ir(s);if(i){const e=ao(a);return t.concat(a,a.visualViewport||[],Kr(s)?s:[],e&&r?io(e):[])}return t.concat(s,io(s,[],r))}function ao(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function lo(e){const t=no(e);let r=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const s=Yr(e),i=s?e.offsetWidth:r,a=s?e.offsetHeight:o,l=xr(r)!==i||xr(o)!==a;return l&&(r=i,o=a),{width:r,height:o,$:l}}function co(e){return Gr(e)?e:e.contextElement}function ho(e){const t=co(e);if(!Yr(t))return _r(1);const r=t.getBoundingClientRect(),{width:o,height:s,$:i}=lo(t);let a=(i?xr(r.width):r.width)/o,l=(i?xr(r.height):r.height)/s;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const uo=_r(0);function po(e){const t=Ir(e);return eo()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:uo}function go(e,t,r,o){void 0===t&&(t=!1),void 0===r&&(r=!1);const s=e.getBoundingClientRect(),i=co(e);let a=_r(1);t&&(o?Gr(o)&&(a=ho(o)):a=ho(e));const l=function(e,t,r){return void 0===t&&(t=!1),!(!r||t&&r!==Ir(e))&&t}(i,r,o)?po(i):_r(0);let c=(s.left+l.x)/a.x,d=(s.top+l.y)/a.y,h=s.width/a.x,u=s.height/a.y;if(i){const e=Ir(i),t=o&&Gr(o)?Ir(o):o;let r=e,s=ao(r);for(;s&&o&&t!==r;){const e=ho(s),t=s.getBoundingClientRect(),o=no(s),i=t.left+(s.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(s.clientTop+parseFloat(o.paddingTop))*e.y;c*=e.x,d*=e.y,h*=e.x,u*=e.y,c+=i,d+=a,r=Ir(s),s=ao(r)}}return Pr({width:h,height:u,x:c,y:d})}function fo(e,t){const r=ro(e).scrollLeft;return t?t.left+r:go(Ur(e)).left+r}function bo(e,t,r){void 0===r&&(r=!1);const o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-(r?0:fo(e,o)),y:o.top+t.scrollTop}}function vo(e,t,r){let o;if("viewport"===t)o=function(e,t){const r=Ir(e),o=Ur(e),s=r.visualViewport;let i=o.clientWidth,a=o.clientHeight,l=0,c=0;if(s){i=s.width,a=s.height;const e=eo();(!e||e&&"fixed"===t)&&(l=s.offsetLeft,c=s.offsetTop)}return{width:i,height:a,x:l,y:c}}(e,r);else if("document"===t)o=function(e){const t=Ur(e),r=ro(e),o=e.ownerDocument.body,s=wr(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=wr(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let a=-r.scrollLeft+fo(e);const l=-r.scrollTop;return"rtl"===no(o).direction&&(a+=wr(t.clientWidth,o.clientWidth)-s),{width:s,height:i,x:a,y:l}}(Ur(e));else if(Gr(t))o=function(e,t){const r=go(e,!0,"fixed"===t),o=r.top+e.clientTop,s=r.left+e.clientLeft,i=Yr(e)?ho(e):_r(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:s*i.x,y:o*i.y}}(t,r);else{const r=po(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Pr(o)}function yo(e,t){const r=oo(e);return!(r===t||!Gr(r)||to(r))&&("fixed"===no(r).position||yo(r,t))}function mo(e,t,r){const o=Yr(t),s=Ur(t),i="fixed"===r,a=go(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const c=_r(0);if(o||!o&&!i)if(("body"!==Br(t)||Kr(s))&&(l=ro(t)),o){const e=go(t,!0,i,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else s&&(c.x=fo(s));const d=!s||o||i?_r(0):bo(s,l);return{x:a.left+l.scrollLeft-c.x-d.x,y:a.top+l.scrollTop-c.y-d.y,width:a.width,height:a.height}}function wo(e){return"static"===no(e).position}function xo(e,t){if(!Yr(e)||"fixed"===no(e).position)return null;if(t)return t(e);let r=e.offsetParent;return Ur(e)===r&&(r=r.ownerDocument.body),r}function ko(e,t){const r=Ir(e);if(Jr(e))return r;if(!Yr(e)){let t=oo(e);for(;t&&!to(t);){if(Gr(t)&&!wo(t))return t;t=oo(t)}return r}let o=xo(e,t);for(;o&&Xr(o)&&wo(o);)o=xo(o,t);return o&&to(o)&&wo(o)&&!Qr(o)?r:o||function(e){let t=oo(e);for(;Yr(t)&&!to(t);){if(Qr(t))return t;if(Jr(t))return null;t=oo(t)}return null}(e)||r}const _o={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:r,offsetParent:o,strategy:s}=e;const i="fixed"===s,a=Ur(o),l=!!t&&Jr(t.floating);if(o===a||l&&i)return r;let c={scrollLeft:0,scrollTop:0},d=_r(1);const h=_r(0),u=Yr(o);if((u||!u&&!i)&&(("body"!==Br(o)||Kr(a))&&(c=ro(o)),Yr(o))){const e=go(o);d=ho(o),h.x=e.x+o.clientLeft,h.y=e.y+o.clientTop}const p=!a||u||i?_r(0):bo(a,c,!0);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-c.scrollLeft*d.x+h.x+p.x,y:r.y*d.y-c.scrollTop*d.y+h.y+p.y}},getDocumentElement:Ur,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:o,strategy:s}=e;const i=[..."clippingAncestors"===r?Jr(t)?[]:function(e,t){const r=t.get(e);if(r)return r;let o=io(e,[],!1).filter((e=>Gr(e)&&"body"!==Br(e))),s=null;const i="fixed"===no(e).position;let a=i?oo(e):e;for(;Gr(a)&&!to(a);){const t=no(a),r=Qr(a);r||"fixed"!==t.position||(s=null),(i?!r&&!s:!r&&"static"===t.position&&s&&["absolute","fixed"].includes(s.position)||Kr(a)&&!r&&yo(e,a))?o=o.filter((e=>e!==a)):s=t,a=oo(a)}return t.set(e,o),o}(t,this._c):[].concat(r),o],a=i[0],l=i.reduce(((e,r)=>{const o=vo(t,r,s);return e.top=wr(o.top,e.top),e.right=mr(o.right,e.right),e.bottom=mr(o.bottom,e.bottom),e.left=wr(o.left,e.left),e}),vo(t,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:ko,getElementRects:async function(e){const t=this.getOffsetParent||ko,r=this.getDimensions,o=await r(e.floating);return{reference:mo(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:r}=lo(e);return{width:t,height:r}},getScale:ho,isElement:Gr,isRTL:function(e){return"rtl"===no(e).direction}};function Co(e,t,r,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:d=!1}=o,h=co(e),u=i||a?[...h?io(h):[],...io(t)]:[];u.forEach((e=>{i&&e.addEventListener("scroll",r,{passive:!0}),a&&e.addEventListener("resize",r)}));const p=h&&c?function(e,t){let r,o=null;const i=Ur(e);function a(){var e;clearTimeout(r),null==(e=o)||e.disconnect(),o=null}return function l(c,d){void 0===c&&(c=!1),void 0===d&&(d=1),a();const{left:h,top:u,width:p,height:g}=e.getBoundingClientRect();if(c||t(),!p||!g)return;const f={rootMargin:-kr(u)+"px "+-kr(i.clientWidth-(h+p))+"px "+-kr(i.clientHeight-(u+g))+"px "+-kr(h)+"px",threshold:wr(0,mr(1,d))||1};let v=!0;function y(e){const t=e[0].intersectionRatio;if(t!==d){if(!v)return l();t?l(!1,t):r=setTimeout((()=>{l(!1,1e-7)}),1e3)}v=!1}try{o=new IntersectionObserver(y,{...f,root:i.ownerDocument})}catch(s){o=new IntersectionObserver(y,f)}o.observe(e)}(!0),a}(h,r):null;let g,f=-1,v=null;l&&(v=new ResizeObserver((e=>{let[o]=e;o&&o.target===h&&v&&(v.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame((()=>{var e;null==(e=v)||e.observe(t)}))),r()})),h&&!d&&v.observe(h),v.observe(t));let y=d?go(e):null;return d&&function t(){const o=go(e);!y||o.x===y.x&&o.y===y.y&&o.width===y.width&&o.height===y.height||r();y=o,g=requestAnimationFrame(t)}(),r(),()=>{var e;u.forEach((e=>{i&&e.removeEventListener("scroll",r),a&&e.removeEventListener("resize",r)})),null==p||p(),null==(e=v)||e.disconnect(),v=null,d&&cancelAnimationFrame(g)}}const $o=Vr,Eo=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var r,o;const{x:s,y:i,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:r,platform:o,elements:s}=e,i=await(null==o.isRTL?void 0:o.isRTL(s.floating)),a=Ar(r),l=Tr(r),c="y"===Lr(r),d=["left","top"].includes(a)?-1:1,h=i&&c?-1:1,u=Sr(t,e);let{mainAxis:p,crossAxis:g,alignmentAxis:f}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return l&&"number"==typeof f&&(g="end"===l?-1*f:f),c?{x:g*h,y:p*d}:{x:p*d,y:g*h}}(t,e);return a===(null==(r=l.offset)?void 0:r.placement)&&null!=(o=l.arrow)&&o.alignmentOffset?{}:{x:s+c.x,y:i+c.y,data:{...c,placement:a}}}}},So=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:o,placement:s}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...c}=Sr(e,t),d={x:r,y:o},h=await Vr(t,c),u=Lr(Ar(s)),p=Mr(u);let g=d[p],f=d[u];if(i){const e="y"===p?"bottom":"right";g=Er(g+h["y"===p?"top":"left"],g,g-h[e])}if(a){const e="y"===u?"bottom":"right";f=Er(f+h["y"===u?"top":"left"],f,f-h[e])}const v=l.fn({...t,[p]:g,[u]:f});return{...v,data:{x:v.x-r,y:v.y-o,enabled:{[p]:i,[u]:a}}}}}},Ao=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var r,o;const{placement:s,middlewareData:i,rects:a,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:v=!0,...y}=Sr(e,t);if(null!=(r=i.arrow)&&r.alignmentOffset)return{};const m=Ar(s),w=Lr(l),x=Ar(l)===l,_=await(null==c.isRTL?void 0:c.isRTL(d.floating)),C=p||(x||!v?[Wr(l)]:function(e){const t=Wr(e);return[Fr(e),t,Fr(t)]}(l)),$="none"!==f;!p&&$&&C.push(...function(e,t,r,o){const s=Tr(e);let i=function(e,t,r){const o=["left","right"],s=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return r?t?s:o:t?o:s;case"left":case"right":return t?i:a;default:return[]}}(Ar(e),"start"===r,o);return s&&(i=i.map((e=>e+"-"+s)),t&&(i=i.concat(i.map(Fr)))),i}(l,v,f,_));const E=[l,...C],S=await Vr(t,y),A=[];let T=(null==(o=i.flip)?void 0:o.overflows)||[];if(h&&A.push(S[m]),u){const e=function(e,t,r){void 0===r&&(r=!1);const o=Tr(e),s=zr(e),i=Dr(s);let a="x"===s?o===(r?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=Wr(a)),[a,Wr(a)]}(s,a,_);A.push(S[e[0]],S[e[1]])}if(T=[...T,{placement:s,overflows:A}],!A.every((e=>e<=0))){var D,F;const e=((null==(D=i.flip)?void 0:D.index)||0)+1,t=E[e];if(t)return{data:{index:e,overflows:T},reset:{placement:t}};let r=null==(F=T.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:F.placement;if(!r)switch(g){case"bestFit":{var W;const e=null==(W=T.filter((e=>{if($){const t=Lr(e.placement);return t===w||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:W[0];e&&(r=e);break}case"initialPlacement":r=l}if(s!==r)return{reset:{placement:r}}}return{}}}},To=function(e){return void 0===e&&(e={}),{name:"hide",options:e,async fn(t){const{rects:r}=t,{strategy:o="referenceHidden",...s}=Sr(e,t);switch(o){case"referenceHidden":{const e=Hr(await Vr(t,{...s,elementContext:"reference"}),r.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:Nr(e)}}}case"escaped":{const e=Hr(await Vr(t,{...s,altBoundary:!0}),r.floating);return{data:{escapedOffsets:e,escaped:Nr(e)}}}default:return{}}}}},Mo=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:o,placement:s,rects:i,platform:a,elements:l,middlewareData:c}=t,{element:d,padding:h=0}=Sr(e,t)||{};if(null==d)return{};const u=Or(h),p={x:r,y:o},g=zr(s),f=Dr(g),v=await a.getDimensions(d),y="y"===g,m=y?"top":"left",w=y?"bottom":"right",x=y?"clientHeight":"clientWidth",_=i.reference[f]+i.reference[g]-p[g]-i.floating[f],C=p[g]-i.reference[g],$=await(null==a.getOffsetParent?void 0:a.getOffsetParent(d));let E=$?$[x]:0;E&&await(null==a.isElement?void 0:a.isElement($))||(E=l.floating[x]||i.floating[f]);const S=_/2-C/2,A=E/2-v[f]/2-1,T=mr(u[m],A),D=mr(u[w],A),F=T,W=E-v[f]-D,O=E/2-v[f]/2+S,P=Er(F,O,W),j=!c.arrow&&null!=Tr(s)&&O!==P&&i.reference[f]/2-(O<F?T:D)-v[f]/2<0,V=j?O<F?O-F:O-W:0;return{[g]:p[g]+V,data:{[g]:P,centerOffset:O-P-V,...j&&{alignmentOffset:V}},reset:j}}}),Do=(e,t,r)=>{const o=new Map,s={platform:_o,...r},i={...s.platform,_c:o};return(async(e,t,r)=>{const{placement:o="bottom",strategy:s="absolute",middleware:i=[],platform:a}=r,l=i.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:h,y:u}=jr(d,o,c),p=o,g={},f=0;for(let v=0;v<l.length;v++){const{name:r,fn:i}=l[v],{x:y,y:m,data:w,reset:x}=await i({x:h,y:u,initialPlacement:o,placement:p,strategy:s,middlewareData:g,rects:d,platform:a,elements:{reference:e,floating:t}});h=null!=y?y:h,u=null!=m?m:u,g={...g,[r]:{...g[r],...w}},x&&f<=50&&(f++,"object"==typeof x&&(x.placement&&(p=x.placement),x.rects&&(d=!0===x.rects?await a.getElementRects({reference:e,floating:t,strategy:s}):x.rects),({x:h,y:u}=jr(d,p,c))),v=-1)}return{x:h,y:u,placement:p,strategy:s,middlewareData:g}})(e,t,{...s,platform:i})};var Lo,zo,Fo,Wo,Oo,Po,jo,Vo,Ho,No,Ro,Bo,Io,Uo,Zo,Go,Yo,qo,Ko,Xo,Jo,Qo=ve`
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
`,es=class extends qt{constructor(){super(...arguments),rt(this,Lo),rt(this,Ho),rt(this,Ro),rt(this,Io),rt(this,Zo),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>"500px",this.nonmodal=!1,this.floatingUIMiddleware=[Eo(8),Ao()],this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,rt(this,Fo,void 0),rt(this,Wo,!1),rt(this,Oo,void 0),rt(this,Po,(()=>{this.open=!1,nt(this,jo).call(this,"cancel")})),rt(this,jo,(e=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason:e},bubbles:!1,composed:!1}))})),rt(this,Vo,(e=>{e.stopPropagation(),e.preventDefault(),this.open=!1,nt(this,jo).call(this,"close"),setTimeout((()=>{var e;return null==(e=this._trigger)?void 0:e.focus()}),250)})),rt(this,Yo,(e=>{"ArrowDown"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),this.open=!0,nt(this,jo).call(this,"show")),"Escape"===e.key&&this.open&&nt(this,Po).call(this)})),rt(this,qo,(e=>{e.preventDefault(),this.open=!this.open,nt(this,jo).call(this,this.open?"show":"close")})),rt(this,Ko,(()=>{var e;const t=null==(e=this._elDefaultSlot)?void 0:e.assignedElements()[0];this.updateComplete.then((()=>{null==t||t.focus()}))})),rt(this,Xo,(e=>{const t=e,r=this._elDialog;if((t.clientX>0||t.clientY>0)&&r&&this.open){const e=r.getBoundingClientRect();e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width||(this.open=!1,nt(this,jo).call(this,"close"))}}))}_handleTriggerRefChanged(){var e;null==(e=this.triggerRef)||e.then((e=>{e&&(this._trigger=e)}))}_handleAnchorRefChanged(){var e;null==(e=this.anchorRef)||e.then((e=>{e&&(this._anchor=e)}))}_handleTriggerChanged(){st(this,Ho,No).call(this),st(this,Io,Uo).call(this)}_handleAnchorChanged(){st(this,Zo,Go).call(this)}connectedCallback(){super.connectedCallback(),ln.instance.apply(this,"gds-popover"),st(this,Ho,No).call(this),this._handleOpenChange(),this.addEventListener("keydown",(e=>{"Escape"===e.key&&this.open&&(nt(this,Po).call(this),e.stopPropagation(),e.preventDefault())})),this.addEventListener("focusin",(e=>{const t=e.target;"INPUT"===t.tagName||"TEXTAREA"===t.tagName?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1})),this.addEventListener("blurin",(e=>{this._isVirtKbVisible=!1}))}disconnectedCallback(){super.disconnectedCallback(),st(this,Ro,Bo).call(this)}render(){return ut`<slot
        name="trigger"
        @slotchange=${st(this,Lo,zo)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${Hn({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":Boolean(this.backdrop&&"true"===this.backdrop)})}"
          aria-hidden="${String(!this.open)}"
          @close=${()=>this.open&&nt(this,Po).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${nt(this,Vo)}
              class="close"
              label="${gn("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const e=(this.nonmodal?nt(this,Oo):this._elDialog)||document;this.updateComplete.then((()=>{var t,r,o,s;null==(t=this._trigger)||t.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?null==(o=this._elDialog)||o.setAttribute("open","true"):null==(r=this._elDialog)||r.showModal(),nt(this,Ko).call(this),requestAnimationFrame((()=>{nt(this,Oo)&&(nt(this,Oo).show=!0)})),setTimeout((()=>nt(this,Ko).call(this)),250),setTimeout((()=>e.addEventListener("click",nt(this,Xo))),0)):(null==(s=this._elDialog)||s.close(),e.removeEventListener("click",nt(this,Xo)),nt(this,Oo)&&(nt(this,Oo).show=!1))}))}_handleBackdropChange(){var e;const t=null==(e=this.parentElement)?void 0:e.getRootNode();this.backdrop&&t&&ot(this,Oo,t.querySelector(this.backdrop))}_handleMobileLayout(e){var t,r,o,s;ot(this,Wo,e),e&&!this.disableMobileStyles?(null==(t=nt(this,Fo))||t.call(this),null==(r=this._elDialog)||r.style.removeProperty("left"),null==(o=this._elDialog)||o.style.removeProperty("top"),null==(s=this._elDialog)||s.style.removeProperty("minWidth"),this.updateComplete.then((()=>{var e;this.open&&(null==(e=this._elDialog)||e.showModal())}))):this.updateComplete.then((()=>{st(this,Zo,Go).call(this)}))}};Lo=new WeakSet,zo=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])},Fo=new WeakMap,Wo=new WeakMap,Oo=new WeakMap,Po=new WeakMap,jo=new WeakMap,Vo=new WeakMap,Ho=new WeakSet,No=function(){var e,t;null==(e=this._trigger)||e.addEventListener("keydown",nt(this,Yo)),null==(t=this._trigger)||t.addEventListener("click",nt(this,qo))},Ro=new WeakSet,Bo=function(){var e,t,r;null==(e=this._trigger)||e.removeEventListener("keydown",nt(this,Yo)),null==(t=this._trigger)||t.removeEventListener("click",nt(this,qo)),null==(r=nt(this,Fo))||r.call(this)},Io=new WeakSet,Uo=function(){var e;if(this._trigger){null==(e=this._trigger)||e.setAttribute("aria-expanded",String(this.open));const t=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||t.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const r=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";null===this._trigger.getAttribute(r)&&this._trigger.setAttribute(r,this.popupRole)}},Zo=new WeakSet,Go=function(){if(!this._anchor||!this._elDialog)return;const e=this._anchor,t=this._elDialog;e&&t&&(!nt(this,Wo)||this.disableMobileStyles)&&(nt(this,Fo)&&nt(this,Fo).call(this),ot(this,Fo,Co(e,t,(()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),Do(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then((e=>{let{x:r,y:o}=e;return Object.assign(t.style,{left:`${r}px`,top:`${o}px`})}))}))))},Yo=new WeakMap,qo=new WeakMap,Ko=new WeakMap,Xo=new WeakMap,es.styles=be(Qo),et([Pe({type:Boolean,reflect:!0})],es.prototype,"open",2),et([Pe({attribute:"popup-role"})],es.prototype,"popupRole",2),et([Pe({attribute:!1})],es.prototype,"triggerRef",2),et([Pe({attribute:!1})],es.prototype,"anchorRef",2),et([Pe()],es.prototype,"label",2),et([Pe()],es.prototype,"placement",2),et([Pe({type:Boolean})],es.prototype,"disableMobileStyles",2),et([Pe({attribute:!1})],es.prototype,"calcMinWidth",2),et([Pe({attribute:!1})],es.prototype,"calcMaxWidth",2),et([Pe({attribute:!1})],es.prototype,"calcMinHeight",2),et([Pe({attribute:!1})],es.prototype,"calcMaxHeight",2),et([Pe({type:Boolean})],es.prototype,"nonmodal",2),et([Pe()],es.prototype,"backdrop",2),et([Pe({attribute:!1})],es.prototype,"floatingUIMiddleware",2),et([je()],es.prototype,"_trigger",2),et([je()],es.prototype,"_anchor",2),et([je()],es.prototype,"_isVirtKbVisible",2),et([He("slot:not([name])")],es.prototype,"_elDefaultSlot",2),et([He('slot[name="trigger"]')],es.prototype,"_elTriggerSlot",2),et([He("dialog")],es.prototype,"_elDialog",2),et([vr("triggerRef")],es.prototype,"_handleTriggerRefChanged",1),et([vr("anchorRef")],es.prototype,"_handleAnchorRefChanged",1),et([vr("_trigger")],es.prototype,"_handleTriggerChanged",1),et([vr("_anchor")],es.prototype,"_handleAnchorChanged",1),et([vr("open")],es.prototype,"_handleOpenChange",1),et([vr("backdrop")],es.prototype,"_handleBackdropChange",1),et([(Jo="(max-width: 576px)",(e,t,r)=>{const o=window.matchMedia(Jo),s=e.connectedCallback,i=e.disconnectedCallback;e.connectedCallback=function(){var e;null==s||s.call(this);const t=e=>{var t;null==(t=r.value)||t.call(this,e.matches)};o.addEventListener("change",t),this.disconnectedCallback=function(){null==i||i.call(this),o.removeEventListener("change",t)},null==(e=r.value)||e.call(this,o.matches)}})],es.prototype,"_handleMobileLayout",1),es=et([lt("gds-popover"),yn()],es);class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=oe,e.type!==Pn)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===oe||null==e)return this._t=void 0,this.it=e;if(e===re)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const ts=Vn(unsafe_html_e);var ns=ve`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    svg {
      display: block;
    }
  }
`,rs=class extends qt{constructor(){super(...arguments),this.solid=!1,this.box=!1,this.label=""}render(){const e="brand-seb"===this.constructor._name,t=e?"55":void 0!==this.width?this.width.toString():void 0;let r=`<svg\n      ${t?`width="${t}"`:""}\n      height="${e?"24":void 0!==this.height?this.height.toString():"1lh"}"\n      viewBox="${e?"0 0 55 24":this.box||"0 0 24 24"}"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}\n      role="graphics-symbol"\n      part="icon" \n    >\n      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}\n    </svg>`;return this.stroke&&(r=r.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`)),ee`${ts(r)}`}};rs.styles=[ns],et([Pe({type:Number})],rs.prototype,"width",2),et([Pe({type:Number})],rs.prototype,"height",2),et([Pe({type:Boolean})],rs.prototype,"solid",2),et([Pe({type:Number})],rs.prototype,"stroke",2),et([Pe({type:String})],rs.prototype,"box",2),et([Pe({type:String})],rs.prototype,"label",2);var os=class extends rs{};os._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',os._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>',os._name="cross-small",os=et([lt("gds-icon-cross-small")],os);var ss=class extends rs{};ss._regularSVG='<path d="M14 5.75L20.25 12L14 18.25M19.5 12H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ss._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1161 5.36612C13.6043 4.87796 14.3957 4.87796 14.8839 5.36612L20.6339 11.1161C20.8683 11.3505 21 11.6685 21 12C21 12.3315 20.8683 12.6494 20.6339 12.8839L14.8839 18.6339C14.3957 19.122 13.6043 19.122 13.1161 18.6339C12.628 18.1457 12.628 17.3543 13.1161 16.8661L16.7322 13.25H4.25C3.55964 13.25 3 12.6903 3 12C3 11.3096 3.55964 10.75 4.25 10.75H16.7322L13.1161 7.13388C12.628 6.64573 12.628 5.85427 13.1161 5.36612Z" fill="currentColor"/>',ss._name="arrow-right",ss=et([lt("gds-icon-arrow-right")],ss);var is=class extends rs{};is._regularSVG='<path d="M4.75 21.25V14.75M4.75 14.75V2.75H20.25L16.25 8.75L20.25 14.75H4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',is._solidSVG='<path d="M4.75 2C4.33579 2 4 2.33579 4 2.75V21.25C4 21.6642 4.33579 22 4.75 22C5.16421 22 5.5 21.6642 5.5 21.25V15.5H20.25C20.5266 15.5 20.7807 15.3478 20.9113 15.1039C21.0418 14.86 21.0275 14.5641 20.874 14.334L17.1514 8.75L20.874 3.16603C21.0275 2.93588 21.0418 2.63997 20.9113 2.39611C20.7807 2.15224 20.5266 2 20.25 2H4.75Z" fill="currentColor"/>',is._name="flag",is=et([lt("gds-icon-flag")],is);var as=class extends rs{};as._regularSVG='<path d="M12 12V10.75C12 6.88401 8.86599 3.75 5 3.75H3.75V5C3.75 8.86599 6.88401 12 10.75 12H12ZM12 12V20.25M19 6.75H20.25V8.25C20.25 12.116 17.116 15.25 13.25 15.25H12V13.75C12 9.88401 15.134 6.75 19 6.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',as._solidSVG='<path d="M3.75 3C3.33579 3 3 3.33579 3 3.75V5C3 9.28021 6.46979 12.75 10.75 12.75H11.25V20.25C11.25 20.6642 11.5858 21 12 21C12.4142 21 12.75 20.6642 12.75 20.25V16H13.25C17.5302 16 21 12.5302 21 8.25V6.75C21 6.33579 20.6642 6 20.25 6H19C16.3562 6 14.0216 7.32382 12.6229 9.34475C11.9618 5.73541 8.80036 3 5 3H3.75Z" fill="currentColor"/>',as._name="growth",as=et([lt("gds-icon-growth")],as);var ls=class extends rs{};ls._regularSVG='<path d="M2.75 12H21.25M2.75 5.75H21.25M2.75 18.25H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ls._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.75C2 5.33579 2.33579 5 2.75 5H21.25C21.6642 5 22 5.33579 22 5.75C22 6.16421 21.6642 6.5 21.25 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75ZM2 12C2 11.5858 2.33579 11.25 2.75 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H2.75C2.33579 12.75 2 12.4142 2 12ZM2 18.25C2 17.8358 2.33579 17.5 2.75 17.5H21.25C21.6642 17.5 22 17.8358 22 18.25C22 18.6642 21.6642 19 21.25 19H2.75C2.33579 19 2 18.6642 2 18.25Z" fill="currentColor"/>',ls._name="bars-three",ls=et([lt("gds-icon-bars-three")],ls);var cs=class extends rs{};cs._regularSVG='<path d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75M12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75M12 21.25C9.65279 21.25 7.75 17.1086 7.75 12C7.75 6.89137 9.65279 2.75 12 2.75M12 21.25C14.3472 21.25 16.25 17.1086 16.25 12C16.25 6.89137 14.3472 2.75 12 2.75M21 12H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>',cs._solidSVG='<path d="M2.02771 11.2499H7.01143C7.08916 8.70549 7.55991 6.38765 8.30456 4.63553C8.71256 3.67552 9.2176 2.85039 9.81666 2.2542C9.82324 2.24765 9.82984 2.24112 9.83645 2.23462C5.59031 3.17115 2.35718 6.80647 2.02771 11.2499Z" fill="currentColor"/><path d="M2.02771 12.7499C2.35718 17.1934 5.59031 20.8288 9.83645 21.7653C9.82984 21.7588 9.82324 21.7522 9.81666 21.7457C9.2176 21.1495 8.71256 20.3244 8.30456 19.3644C7.55991 17.6122 7.08916 15.2944 7.01143 12.7499H2.02771Z" fill="currentColor"/><path d="M14.1636 21.7653C18.4097 20.8287 21.6428 17.1934 21.9723 12.7499H16.9886C16.9109 15.2944 16.4401 17.6122 15.6955 19.3644C15.2875 20.3244 14.7824 21.1495 14.1834 21.7457C14.1768 21.7522 14.1702 21.7588 14.1636 21.7653Z" fill="currentColor"/><path d="M21.9723 11.2499C21.6428 6.80648 18.4097 3.17115 14.1636 2.23462C14.1702 2.24112 14.1768 2.24765 14.1834 2.2542C14.7824 2.85039 15.2875 3.67552 15.6955 4.63553C16.4401 6.38765 16.9109 8.70549 16.9886 11.2499H21.9723Z" fill="currentColor"/><path d="M13.1252 3.3174C12.7104 2.90457 12.3309 2.74995 12 2.74995C11.6691 2.74995 11.2896 2.90457 10.8748 3.3174C10.4569 3.73326 10.0462 4.3726 9.68505 5.22224C9.03191 6.75905 8.58961 8.8698 8.51216 11.2499H15.4879C15.4104 8.8698 14.9681 6.75905 14.315 5.22224C13.9539 4.3726 13.5431 3.73326 13.1252 3.3174Z" fill="currentColor"/><path d="M14.315 18.7777C14.9681 17.2409 15.4104 15.1301 15.4879 12.7499L8.51216 12.7499C8.58961 15.1301 9.03191 17.2409 9.68505 18.7777C10.0462 19.6273 10.4569 20.2666 10.8748 20.6825C11.2896 21.0953 11.6691 21.2499 12 21.2499C12.3309 21.2499 12.7104 21.0953 13.1252 20.6825C13.5431 20.2666 13.9539 19.6273 14.315 18.7777Z" fill="currentColor"/>',cs._name="globus",cs=et([lt("gds-icon-globus")],cs);var ds=class extends rs{};ds._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M9.19644 4.64738C9.52928 4.89393 9.59923 5.36362 9.35268 5.69647L6.01935 10.1965C5.7804 10.5191 5.32981 10.5963 4.99708 10.3717L3.33041 9.24668C2.98709 9.01494 2.89664 8.54876 3.12838 8.20544C3.36012 7.86212 3.8263 7.77167 4.16962 8.00341L5.2413 8.72679L8.14735 4.80363C8.3939 4.47078 8.86359 4.40083 9.19644 4.64738ZM11 7.75005C11 7.33583 11.3358 7.00005 11.75 7.00005H20.25C20.6642 7.00005 21 7.33583 21 7.75005C21 8.16426 20.6642 8.50005 20.25 8.50005H11.75C11.3358 8.50005 11 8.16426 11 7.75005ZM9.19644 13.6474C9.52928 13.8939 9.59923 14.3636 9.35268 14.6965L6.01935 19.1965C5.7804 19.5191 5.32981 19.5963 4.99708 19.3717L3.33041 18.2467C2.98709 18.0149 2.89664 17.5488 3.12838 17.2054C3.36012 16.8621 3.8263 16.7717 4.16962 17.0034L5.2413 17.7268L8.14735 13.8036C8.3939 13.4708 8.86359 13.4008 9.19644 13.6474ZM11 16.25C11 15.8358 11.3358 15.5 11.75 15.5H20.25C20.6642 15.5 21 15.8358 21 16.25C21 16.6643 20.6642 17 20.25 17H11.75C11.3358 17 11 16.6643 11 16.25Z" fill="currentColor"/>',ds._solidSVG='<path d="M11.75 16.25H20.25M11.75 7.75H20.25M3.75 8.625L5.41667 9.75L8.75 5.25M3.75 17.625L5.41667 18.75L8.75 14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ds._name="checklist",ds=et([lt("gds-icon-checklist")],ds);var hs=class extends rs{};hs._regularSVG='<path d="M2.75 7.25H21.25M2.75 16.75H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',hs._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 7.25C2 6.83579 2.33579 6.5 2.75 6.5H21.25C21.6642 6.5 22 6.83579 22 7.25C22 7.66421 21.6642 8 21.25 8H2.75C2.33579 8 2 7.66421 2 7.25ZM2 16.75C2 16.3358 2.33579 16 2.75 16H21.25C21.6642 16 22 16.3358 22 16.75C22 17.1642 21.6642 17.5 21.25 17.5H2.75C2.33579 17.5 2 17.1642 2 16.75Z" fill="currentColor"/>',hs._name="bars-two",hs=et([lt("gds-icon-bars-two")],hs);var us=class extends rs{};us._regularSVG='<path d="M14.957 6.12105L11.9903 8.31798C10.5943 7.11834 8.78371 6.88708 7.78755 6.88708C6.78411 6.88708 5.72977 7.17615 5.5698 7.8916C5.40984 8.58537 6.06425 9.12737 7.18403 9.43089C8.46378 9.77055 9.61991 10.0741 11.4159 10.5799C14.0772 11.3388 15.9023 12.4806 15.9023 15.1328C15.9023 18.7967 12.6302 20.6902 8.25291 20.6902C3.87559 20.6902 0.894368 18.4282 0 17.3731L3.13392 15.0461C5.33712 16.9539 6.86409 17.2213 8.14384 17.2213C9.61264 17.2213 10.9869 16.9106 11.1614 16.0867C11.3068 15.4219 10.7542 14.8943 9.50357 14.6052C8.09294 14.28 6.89318 14.0199 5.56253 13.673C1.9487 12.7335 0.930724 10.645 0.930724 8.76604C0.930724 6.18609 3.34479 3.53388 7.773 3.53388C12.303 3.53388 14.957 6.11382 14.957 6.12105ZM33.8551 3.79404H20.6359V20.206H34.0951V16.4192H25.275V13.7742H31.3465V10.1536H25.275V7.53749H33.8478V3.79404H33.8551ZM17.2184 23.9928H18.2437V0H17.2184V23.9928ZM35.8329 23.9928H36.8581V0H35.8329V23.9928ZM39.2504 20.206H49.8665C52.7023 20.206 55.0073 18.5077 55.0073 15.7832C55.0073 13.6585 53.6112 12.2493 51.6479 11.6278C51.5825 11.6134 51.5243 11.6061 51.4589 11.6061C51.5243 11.5989 51.5898 11.5917 51.6479 11.57C52.775 11.1292 54.0111 9.95122 54.0111 7.94941C54.0111 5.4056 51.7497 3.78681 48.9576 3.78681H39.2431L39.2504 20.206ZM43.9113 7.20506H47.6196C48.4704 7.20506 49.1612 7.87715 49.1612 8.64318C49.1612 9.40921 48.4704 10.0885 47.6196 10.0885H43.9113V7.20506ZM48.4413 16.5637H43.904V13.5718H48.4413C49.2411 13.5718 49.8956 14.215 49.8956 15.0678C49.8956 15.9133 49.2484 16.5637 48.4413 16.5637Z" fill="currentColor"/>',us._solidSVG='<path d="M14.957 6.12105L11.9903 8.31798C10.5943 7.11834 8.78371 6.88708 7.78755 6.88708C6.78411 6.88708 5.72977 7.17615 5.5698 7.8916C5.40984 8.58537 6.06425 9.12737 7.18403 9.43089C8.46378 9.77055 9.61991 10.0741 11.4159 10.5799C14.0772 11.3388 15.9023 12.4806 15.9023 15.1328C15.9023 18.7967 12.6302 20.6902 8.25291 20.6902C3.87559 20.6902 0.894368 18.4282 0 17.3731L3.13392 15.0461C5.33712 16.9539 6.86409 17.2213 8.14384 17.2213C9.61264 17.2213 10.9869 16.9106 11.1614 16.0867C11.3068 15.4219 10.7542 14.8943 9.50357 14.6052C8.09294 14.28 6.89318 14.0199 5.56253 13.673C1.9487 12.7335 0.930724 10.645 0.930724 8.76604C0.930724 6.18609 3.34479 3.53388 7.773 3.53388C12.303 3.53388 14.957 6.11382 14.957 6.12105ZM33.8551 3.79404H20.6359V20.206H34.0951V16.4192H25.275V13.7742H31.3465V10.1536H25.275V7.53749H33.8478V3.79404H33.8551ZM17.2184 23.9928H18.2437V0H17.2184V23.9928ZM35.8329 23.9928H36.8581V0H35.8329V23.9928ZM39.2504 20.206H49.8665C52.7023 20.206 55.0073 18.5077 55.0073 15.7832C55.0073 13.6585 53.6112 12.2493 51.6479 11.6278C51.5825 11.6134 51.5243 11.6061 51.4589 11.6061C51.5243 11.5989 51.5898 11.5917 51.6479 11.57C52.775 11.1292 54.0111 9.95122 54.0111 7.94941C54.0111 5.4056 51.7497 3.78681 48.9576 3.78681H39.2431L39.2504 20.206ZM43.9113 7.20506H47.6196C48.4704 7.20506 49.1612 7.87715 49.1612 8.64318C49.1612 9.40921 48.4704 10.0885 47.6196 10.0885H43.9113V7.20506ZM48.4413 16.5637H43.904V13.5718H48.4413C49.2411 13.5718 49.8956 14.215 49.8956 15.0678C49.8956 15.9133 49.2484 16.5637 48.4413 16.5637Z" fill="currentColor"/>',us._name="brand-seb",us=et([lt("gds-icon-brand-seb")],us);var ps=class extends rs{};ps._regularSVG='<path d="M16 17.25C16 19.4591 14.2091 21.25 12 21.25C9.79086 21.25 8 19.4591 8 17.25M3.75 17.25H20.25V16L18.7031 13L18.4965 8.90897C18.3234 5.45882 15.4661 2.75 12 2.75C8.53386 2.75 5.6766 5.45882 5.50351 8.90897L5.29688 13L3.75 16V17.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ps._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C8.13655 2 4.94782 5.0198 4.75447 8.87114L4.556 12.8003L3.0834 15.6563C3.02859 15.7626 3 15.8804 3 16V17.25C3 17.6642 3.33579 18 3.75 18H7.30888C7.66846 20.267 9.63185 22 12 22C14.3682 22 16.3315 20.267 16.6911 18H20.25C20.6642 18 21 17.6642 21 17.25V16C21 15.8804 20.9714 15.7626 20.9166 15.6563L19.444 12.8003L19.2455 8.87139C19.0522 5.02005 15.8634 2 12 2ZM12 20.5C10.4632 20.5 9.17555 19.4333 8.83697 18H15.163C14.8245 19.4333 13.5368 20.5 12 20.5Z" fill="currentColor"/>',ps._name="bell",ps=et([lt("gds-icon-bell")],ps);var gs=class extends rs{};gs._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',gs._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>',gs._name="calendar",gs=et([lt("gds-icon-calendar")],gs);var fs,bs=class extends rs{};bs._regularSVG='<path d="M20 20L16.1265 16.1265M16.1265 16.1265C17.4385 14.8145 18.25 13.002 18.25 11C18.25 6.99594 15.0041 3.75 11 3.75C6.99594 3.75 3.75 6.99594 3.75 11C3.75 15.0041 6.99594 18.25 11 18.25C13.002 18.25 14.8145 17.4385 16.1265 16.1265Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',bs._solidSVG='<path d="M3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.9388 18.3096 14.7174 17.1624 16.1018L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2374 20.8232 19.7625 20.8232 19.4696 20.5303L16.1017 17.1624C14.7174 18.3096 12.9388 19 11 19C6.58172 19 3 15.4183 3 11Z" fill="currentColor"/>',bs._name="magnifying-glass",bs=et([lt("gds-icon-magnifying-glass")],bs);var vs=class extends qt{constructor(){super(),rt(this,fs,void 0),this.required=!1,this.label="",this.name="";try{ot(this,fs,this.attachInternals())}catch(s){ot(this,fs,{form:this.closest("form"),setFormValue:e=>{this.value=e},setValidity:(e,t)=>{this.invalid=e.customError},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0})}}set invalid(e){const t=this.invalid;nt(this,fs).setValidity(Qe(Je({},nt(this,fs).validity),{customError:e,valid:!e}),this.validationMessage||gn("Error message."),this._getValidityAnchor()||void 0),this.requestUpdate("invalid",t),nt(this,fs).checkValidity()}get invalid(){return!nt(this,fs).validity.valid}get form(){return nt(this,fs).form}get validity(){return nt(this,fs).validity}get validationMessage(){return nt(this,fs).validationMessage}get willValidate(){return nt(this,fs).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const e=this.invalid,t=this.validator.validate(this)||[Qe(Je({},this.validity),{valid:!0}),""];return nt(this,fs).setValidity(t[0],t[1],this._getValidityAnchor()),this.requestUpdate("invalid",e),nt(this,fs).checkValidity()}reportValidity(){return nt(this,fs).reportValidity()}__handleValueChange(){nt(this,fs).setFormValue(this.value),this.checkValidity()}formResetCallback(){this.value=void 0}formAssociatedCallback(e){null==e||e.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(e){this.checkValidity(),this.validity.valid||e.preventDefault()}focus(e){this._getValidityAnchor().focus(e)}};fs=new WeakMap,vs.formAssociated=!0,et([Pe({attribute:!1})],vs.prototype,"validator",2),et([Pe({type:Boolean})],vs.prototype,"required",2),et([Pe({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:e=>null==e?void 0:e.toString()}})],vs.prototype,"invalid",1),et([Pe()],vs.prototype,"label",2),et([Pe()],vs.prototype,"value",2),et([Pe({reflect:!0})],vs.prototype,"name",2),et([vr("value")],vs.prototype,"__handleValueChange",1);const ys=e=>e??oe;function ms(e,t,r){return e?t(e):r?.(e)}var ws=Vn(class extends directive_i{constructor(e){if(super(e),e.type!==jn)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(e){return oe}update(e,t){let[r]=t;var o;const s=e.element,i=null==(o=e.options)?void 0:o.host;Array.from(i.attributes).forEach((e=>{r(e)&&s.setAttribute(e.name.replace("gds-",""),e.value)}))}}),xs=new WeakMap;var ks,_s,Cs,$s,Es,Ss,As,Ts=["aria-label","aria-haspopup","aria-expanded"],Ms=function(e){return function(t){let r=xs.get(t);r||(r=t.map((e=>e.replace(/\n[\s]+</gm,"<"))),r.raw=t.raw,xs.set(t,r));for(var o=arguments.length,s=new Array(o>1?o-1:0),i=1;i<o;i++)s[i-1]=arguments[i];return e(r,...s)}}(ut),Ds=class extends vs{constructor(){super(),rt(this,_s),rt(this,$s),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",rt(this,ks,!1),rt(this,Ss,(()=>{var e,t;const r=null!=(t=null==(e=this._mainSlot)?void 0:e.assignedElements())?t:[];ot(this,ks,1===r.length&&r.some((e=>e.tagName.toLowerCase().startsWith("gds-icon")))),this.requestUpdate()})),rt(this,As,(e=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e})),this.form&&!nt(this,_s,Cs)&&("submit"===this.type?this.form.requestSubmit():"reset"===this.type&&this.form.reset())}))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),ln.instance.apply(this,"gds-button")}render(){const e={button:!0,circle:nt(this,ks),icon:nt(this,ks),small:"small"===this.size,large:"large"===this.size,positive:"positive"===this.variant,negative:"negative"===this.variant,primary:"primary"===this.rank,secondary:"secondary"===this.rank,tertiary:"tertiary"===this.rank},t=nt(this,_s,Cs)?Jt`a`:Jt`button`;return tn`
      <${t}
        class=${Hn(e)}
        type="${ys(nt(this,_s,Cs)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||oe}
        href=${ys(nt(this,_s,Cs)?this.href:void 0)}
        target=${ys(nt(this,_s,Cs)?this.target:void 0)}
        rel=${ys(nt(this,_s,Cs)?this.rel||nt(this,$s,Es):void 0)}
        download=${ys(nt(this,_s,Cs)?this.download:void 0)}
        part="_button"
        @click="${nt(this,As)}"
        ${ws((e=>e.name.startsWith("gds-aria")||"gds-role"===e.name||Ts.includes(e.name)))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${nt(this,Ss)}></slot>
        <slot name="trail"></slot>
        ${ms(!this._isUsingTransitionalStyles,(()=>Ms`<gds-ripple part="_ripple"></gds-ripple>`))}
        </${t}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}};ks=new WeakMap,_s=new WeakSet,Cs=function(){return this.href.length>0},$s=new WeakSet,Es=function(){return"_blank"===this.target?"noreferrer noopener":void 0},Ss=new WeakMap,As=new WeakMap,Ds.styles=[Yt,be("@layer tokens, core, a11y, ranks, sizes, variants, disabled;\n\n@layer a11y {\n  @media (prefers-reduced-motion: reduce) {\n    .button {\n      transition: none;\n    }\n  }\n}\n\n@layer core {\n  :host {\n    display: inline-block;\n    max-width: 100%;\n  }\n\n  .button {\n    --_block-size: var(--gds-space-3xl);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    border: none;\n    cursor: pointer;\n    block-size: var(--_block-size);\n    background-color: var(--gds-color-l3-background-primary);\n    color: var(--gds-color-l3-content-primary);\n    border-radius: var(--gds-space-max);\n    font-family: inherit;\n    font-size: var(--gds-text-size-detail-m);\n    line-height: var(--gds-text-line-height-detail-m);\n    font-weight: var(--gds-text-weight-book);\n    gap: var(--gds-space-s);\n    outline-color: transparent;\n    outline-offset: var(--gds-space-3xs);\n    outline-style: solid;\n    outline-width: var(--gds-space-3xs);\n    padding-block: var(--gds-space-s);\n    padding-inline: var(--gds-space-l);\n    position: relative;\n    text-decoration: none;\n    transition-property: color, border-color;\n    transition: all 0.4s;\n    max-width: 100%;\n    width: 100%;\n\n    &:focus {\n      outline-color: color-mix(in srgb, currentcolor, #000 100%);\n\n      &:not(:focus-visible) {\n        outline-color: transparent;\n      }\n    }\n\n    &:hover {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-color-l3-background-primary),\n        var(--gds-color-l3-states-dark-hover)\n      );\n    }\n\n    &:active {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-color-l3-background-primary),\n        var(--gds-color-l3-states-dark-pressed)\n      );\n    }\n\n    &:not(.circle) slot:not([name]) {\n      display: inline-block;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  }\n}\n\n/* High specificity */\n.button.circle {\n  aspect-ratio: 1/1;\n  padding: 0;\n}\n\n.button:disabled {\n  pointer-events: none;\n  background-color: var(--gds-color-l3-background-disabled);\n  color: var(--gds-color-l3-content-disabled);\n}\n\n@layer ranks {\n  :host([rank*='secondary']) .button {\n    background-color: var(--gds-color-l3-background-secondary);\n    color: var(--gds-color-l3-content-tertiary);\n\n    &:hover {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-color-l3-background-secondary),\n        var(--gds-color-l3-states-light-hover)\n      );\n    }\n\n    &:active {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-color-l3-background-secondary),\n        var(--gds-color-l3-states-light-pressed)\n      );\n    }\n  }\n\n  :host([rank*='tertiary']) .button {\n    background-color: transparent;\n    color: var(--gds-color-l3-content-tertiary);\n\n    &:hover {\n      background-color: color-mix(\n        in srgb,\n        transparent,\n        var(--gds-color-l3-states-light-hover)\n      );\n    }\n\n    &:active {\n      background-color: color-mix(\n        in srgb,\n        transparent,\n        var(--gds-color-l3-states-light-pressed)\n      );\n    }\n  }\n}\n\n@layer sizes {\n  :host([size='xs']) .button {\n    --_block-size: var(--gds-space-l);\n    font-size: var(--gds-text-size-detail-s);\n    line-height: var(--gds-text-line-height-detail-s);\n    padding-inline: var(--gds-space-m);\n  }\n\n  :host([size='small']) .button {\n    --_block-size: var(--gds-space-xl);\n    font-size: var(--gds-text-size-detail-s);\n    line-height: var(--gds-text-line-height-detail-s);\n    padding-inline: var(--gds-space-m);\n  }\n\n  :host([size='medium']) .button {\n    --_block-size: var(--gds-space-2xl);\n    font-size: var(--gds-text-size-detail-m);\n    line-height: var(--gds-text-line-height-detail-m);\n  }\n}\n\n@layer variants {\n  .positive {\n    background-color: var(--gds-color-l3-background-positive);\n\n    &:hover {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-color-l3-background-positive),\n        var(--gds-color-l3-states-dark-hover)\n      );\n    }\n\n    &:active {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-color-l3-background-positive),\n        var(--gds-color-l3-states-dark-pressed)\n      );\n    }\n\n    &.secondary {\n      background-color: var(--gds-color-l3-background-positive-secondary);\n      color: var(--gds-color-l3-content-positive);\n\n      &:hover {\n        background-color: color-mix(\n          in srgb,\n          var(--gds-color-l3-background-positive-secondary),\n          var(--gds-color-l3-states-positive-hover)\n        );\n      }\n\n      &:active {\n        background-color: color-mix(\n          in srgb,\n          var(--gds-color-l3-background-positive-secondary),\n          var(--gds-color-l3-states-positive-pressed)\n        );\n      }\n    }\n\n    &.tertiary {\n      background-color: transparent;\n      color: var(--gds-color-l3-content-positive);\n\n      &:hover {\n        background-color: color-mix(\n          in srgb,\n          transparent,\n          var(--gds-color-l3-states-positive-hover)\n        );\n      }\n\n      &:active {\n        background-color: color-mix(\n          in srgb,\n          transparent,\n          var(--gds-color-l3-states-positive-pressed)\n        );\n      }\n    }\n  }\n\n  .negative {\n    background-color: var(--gds-color-l3-background-negative);\n\n    &:hover {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-color-l3-background-negative),\n        var(--gds-color-l3-states-dark-hover)\n      );\n    }\n\n    &:active {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-color-l3-background-negative),\n        var(--gds-color-l3-states-dark-pressed)\n      );\n    }\n\n    &.secondary {\n      background-color: var(--gds-color-l3-background-negative-secondary);\n      color: var(--gds-color-l3-content-negative);\n\n      &:hover {\n        background-color: color-mix(\n          in srgb,\n          var(--gds-color-l3-background-negative-secondary),\n          var(--gds-color-l3-states-negative-hover)\n        );\n      }\n\n      &:active {\n        background-color: color-mix(\n          in srgb,\n          var(--gds-color-l3-background-negative-secondary),\n          var(--gds-color-l3-states-negative-pressed)\n        );\n      }\n    }\n\n    &.tertiary {\n      background-color: transparent;\n      color: var(--gds-color-l3-content-negative);\n\n      &:hover {\n        background-color: color-mix(\n          in srgb,\n          transparent,\n          var(--gds-color-l3-states-negative-hover)\n        );\n      }\n\n      &:active {\n        background-color: color-mix(\n          in srgb,\n          transparent,\n          var(--gds-color-l3-states-negative-pressed)\n        );\n      }\n    }\n  }\n}\n")],Ds.shadowRootOptions={mode:"open",delegatesFocus:!0},et([Pe({type:Boolean,reflect:!0})],Ds.prototype,"disabled",2),et([Pe({reflect:!0})],Ds.prototype,"type",2),et([Pe({reflect:!0})],Ds.prototype,"rank",2),et([Pe({reflect:!0})],Ds.prototype,"variant",2),et([Pe({reflect:!0})],Ds.prototype,"size",2),et([Pe()],Ds.prototype,"label",2),et([Pe()],Ds.prototype,"href",2),et([Pe()],Ds.prototype,"target",2),et([Pe()],Ds.prototype,"rel",2),et([Pe()],Ds.prototype,"download",2),et([He("slot:not([name])")],Ds.prototype,"_mainSlot",2),et([He(".button")],Ds.prototype,"_button",2),et([br({attributes:!0,childList:!1,subtree:!1,characterData:!1})],Ds.prototype,"_attributeChanged",1),Ds=et([lt("gds-button")],Ds);var Ls,zs,Fs,Ws,Os,Ps,js,Vs,Hs,Ns,Rs,Bs,Is,Us,Zs,Gs,Ys,qs,Ks,Xs,Js,Qs=ve`
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
`,ei=class extends vs{constructor(){super(),rt(this,Ls),rt(this,Fs),rt(this,Ns),rt(this,Bs),rt(this,Us),rt(this,Gs),rt(this,qs),rt(this,Xs),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this.trailSlotOccupied=!1,rt(this,Os,(e=>["type","placeholder","required"].includes(e.name))),rt(this,Ps,(e=>{const t=e.target;this.value=t.value})),rt(this,js,(e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),rt(this,Vs,(()=>{this.elInputAsync.then((e=>e.focus()))})),rt(this,Hs,(()=>{this.value=""}))}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return ut`${Be(this.variant,[["default",()=>st(this,Ls,zs).call(this)],["floating-label",()=>st(this,Fs,Ws).call(this)]])}`}_getValidityAnchor(){return this.elInput}};Ls=new WeakSet,zs=function(){return ut`
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
        @click=${nt(this,Vs)}
        cursor="text"
        color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
      >
        ${st(this,Ns,Rs).call(this)} ${st(this,Gs,Ys).call(this)}
        <gds-flex gap="xs" align-items="center">
          ${st(this,qs,Ks).call(this)} ${st(this,Bs,Is).call(this)}
        </gds-flex>
      </gds-flex>

      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${nt(this,Xs,Js)&&this.maxlength-this.value.length}
        .validationMessage=${this.invalid&&this.validationMessage}
      ></gds-form-control-footer>
    `},Fs=new WeakSet,Ws=function(){return oe},Os=new WeakMap,Ps=new WeakMap,js=new WeakMap,Vs=new WeakMap,Hs=new WeakMap,Ns=new WeakSet,Rs=function(){return ut` <slot name="lead"></slot> `},Bs=new WeakSet,Is=function(){return ut`
      <slot name="trail" @slotchange=${st(this,Us,Zs)}></slot>
    `},Us=new WeakSet,Zs=function(e){const t=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=t.length>0&&t.some((e=>{var t;return e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&""!==(null==(t=e.textContent)?void 0:t.trim())}))},Gs=new WeakSet,Ys=function(){return ut`
      <input
        @input=${nt(this,Ps)}
        @change=${nt(this,js)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        aria-invalid=${this.invalid}
        placeholder=" "
        ${ws(nt(this,Os))}
      />
    `},qs=new WeakSet,Ks=function(){return this.clearable&&this.value.length>0?ut`
        <gds-button
          size="${"small"===this.size?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${gn("Clear input")}"
          @click=${nt(this,Hs)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:oe},Xs=new WeakSet,Js=function(){return this.maxlength<Number.MAX_SAFE_INTEGER},ei.styles=[Yt,Qs],et([Pe()],ei.prototype,"value",2),et([Pe()],ei.prototype,"label",2),et([Pe({attribute:"supporting-text"})],ei.prototype,"supportingText",2),et([Pe({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],ei.prototype,"showExtendedSupportingText",2),et([Pe({attribute:"disabled",type:Boolean,reflect:!0})],ei.prototype,"disabled",2),et([Pe({type:Boolean})],ei.prototype,"clearable",2),et([Pe({type:Number})],ei.prototype,"maxlength",2),et([Pe({type:String})],ei.prototype,"variant",2),et([Pe({type:String})],ei.prototype,"size",2),et([Re("input")],ei.prototype,"elInputAsync",2),et([He("input")],ei.prototype,"elInput",2),et([je()],ei.prototype,"trailSlotOccupied",2),ei=et([lt("gds-input"),yn()],ei);var ti,ni,ri,oi,si,ii,ai=ve`
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
`,li=class extends qt{constructor(){super(...arguments),rt(this,ti),rt(this,si),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,rt(this,ri,(()=>ut`
      <gds-button
        size="small"
        rank="tertiary"
        label="${gn("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${nt(this,oi)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `)),rt(this,oi,(()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,null==(e=this._extendedSupportingText)||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}))}render(){return ut`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${ms(this._hasExtendedSupportingText,nt(this,ri))}
      </div>

      ${st(this,si,ii).call(this)}
    `}};ti=new WeakSet,ni=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0},ri=new WeakMap,oi=new WeakMap,si=new WeakSet,ii=function(){return ut`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${st(this,ti,ni)}
        ></slot>
      </div>
    `},li.styles=[ai],et([Pe({type:Boolean,reflect:!0})],li.prototype,"showExtendedSupportingText",2),et([je()],li.prototype,"_hasExtendedSupportingText",2),et([He("#extended-supporting-text")],li.prototype,"_extendedSupportingText",2),li=et([lt("gds-form-control-header"),yn()],li);var ci,di,hi=ve`
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
`,ui=class extends qt{constructor(){super(...arguments),rt(this,ci)}render(){return ut`<div aria-live="polite">
      <div class="error-message">
        ${ms(this.validationMessage,(()=>ut`
            <gds-icon-triangle-exclamation
              solid
            ></gds-icon-triangle-exclamation>
            ${this.validationMessage}
          `))}
      </div>
      <div class="char-counter">
        ${ms(Number.isInteger(this.charCounter),(()=>st(this,ci,di).call(this,this.charCounter)))}
      </div>
    </div>`}};ci=new WeakSet,di=function(e){let t;return t=e<0?"negative":e<20?"warning":"positive",ut`<gds-badge variant="${t}">${e}</gds-badge>`},ui.styles=[hi],et([Pe({type:Number})],ui.prototype,"charCounter",2),et([Pe()],ui.prototype,"validationMessage",2),ui=et([lt("gds-form-control-footer")],ui);var pi=class extends rs{};pi._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.375 8C11.375 8.34518 11.6548 8.625 12 8.625C12.3452 8.625 12.625 8.34518 12.625 8C12.625 7.65482 12.3452 7.375 12 7.375C11.6548 7.375 11.375 7.65482 11.375 8Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>',pi._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>',pi._name="circle-info",pi=et([lt("gds-icon-circle-info")],pi);var gi=class extends rs{};gi._regularSVG='<path d="M12 2.75L12.6457 2.36845C12.5108 2.1401 12.2652 2 12 2C11.7348 2 11.4892 2.1401 11.3543 2.36845L12 2.75ZM2.25 19.25L1.60431 18.8685C1.4673 19.1003 1.46512 19.3878 1.59859 19.6217C1.73207 19.8556 1.9807 20 2.25 20V19.25ZM21.75 19.25V20C22.0193 20 22.2679 19.8556 22.4014 19.6217C22.5349 19.3878 22.5327 19.1003 22.3957 18.8685L21.75 19.25ZM12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75H12.75ZM11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25H11.25ZM11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75H11.25ZM12.75 15.74C12.75 15.3258 12.4142 14.99 12 14.99C11.5858 14.99 11.25 15.3258 11.25 15.74H12.75ZM11.3543 2.36845L1.60431 18.8685L2.89569 19.6315L12.6457 3.13155L11.3543 2.36845ZM2.25 20H21.75V18.5H2.25V20ZM22.3957 18.8685L12.6457 2.36845L11.3543 3.13155L21.1043 19.6315L22.3957 18.8685ZM11.25 9.75V13.25H12.75V9.75H11.25ZM11.5 15.75C11.5 15.4739 11.7239 15.25 12 15.25V16.75C12.5523 16.75 13 16.3023 13 15.75H11.5ZM12 15.25C12.2761 15.25 12.5 15.4739 12.5 15.75H11C11 16.3023 11.4477 16.75 12 16.75V15.25ZM12.5 15.75C12.5 16.0261 12.2761 16.25 12 16.25V14.75C11.4477 14.75 11 15.1977 11 15.75H12.5ZM12 16.25C11.7239 16.25 11.5 16.0261 11.5 15.75H13C13 15.1977 12.5523 14.75 12 14.75V16.25ZM12.75 15.75V15.74H11.25V15.75H12.75Z" fill="currentColor"/>',gi._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2652 2 12.5108 2.1401 12.6457 2.36845L22.3957 18.8685C22.5327 19.1003 22.5349 19.3878 22.4014 19.6217C22.2679 19.8556 22.0193 20 21.75 20H2.25C1.9807 20 1.73207 19.8556 1.59859 19.6217C1.46512 19.3878 1.4673 19.1003 1.60431 18.8685L11.3543 2.36845C11.4892 2.1401 11.7348 2 12 2ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V9.75C11.25 9.33579 11.5858 9 12 9ZM13 15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75C11 15.1977 11.4477 14.75 12 14.75C12.5523 14.75 13 15.1977 13 15.75Z" fill="currentColor"/>',gi._name="triangle-exclamation",gi=et([lt("gds-icon-triangle-exclamation")],gi);var fi=ve`
  :host {
    box-sizing: border-box;
  }
  :host(:focus-visible) {
    outline-color: color-mix(in srgb, currentcolor, #000 100%);
    outline-offset: var(--gds-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-space-3xs);
  }
`,bi=class extends qt{constructor(){super(...arguments),this.display="block",this.level="2"}render(){return ut`<slot></slot>`}};bi.styles=[Yt,fi],et([Ft({valueTemplate:e=>e})],bi.prototype,"display",2),et([Pe()],bi.prototype,"level",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"place-items",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"place-content",2),et([Ft({valueTemplate:function(e){const[t,r]=e.split("/");return((e,t)=>(e=>{const t=e.trim();return t.startsWith("#")||t.startsWith("rgb(")||t.startsWith("rgba(")||t.startsWith("hsl(")||t.startsWith("hsla(")})(e)?t?`color-mix(in srgb, ${e} ${100*parseFloat(t)}%, transparent 0%)`:e:`var(--gds-color-l${this.level}-content-${e})`)(t,r)}})],bi.prototype,"color",2),et([Ft({valueTemplate:function(e){const[t,r]=e.split("/");return((e,t)=>(e=>{const t=e.trim();return t.startsWith("#")||t.startsWith("rgb(")||t.startsWith("rgba(")||t.startsWith("hsl(")||t.startsWith("hsla(")})(e)?t?`color-mix(in srgb, ${e} ${100*parseFloat(t)}%, transparent 0%)`:e:((e,t)=>`var(--gds-color-l${e}-background-${t})`)(this.level,e))(t,r)}})],bi.prototype,"background",2),et([Ft({valueTemplate:function(e){const[t,r]=e.split("/");return`var(--gds-space-${t}) solid ${r?(e=>(e=>{const t=e.trim();return t.startsWith("#")||t.startsWith("rgb(")||t.startsWith("rgba(")||t.startsWith("hsl(")||t.startsWith("hsla(")})(e)?e:((e,t)=>`var(--gds-color-l${e}-border-${t})`)(this.level,e))(r):"currentColor"}`},styleTemplate:(e,t)=>{const r=t[0];return`\n        border-top: ${r};\n        border-right: ${t.length>1?t[1]:r};\n        border-bottom: ${t.length>2?t[2]:r};\n        border-left: ${t.length>3?t[3]:r};\n      `}})],bi.prototype,"border",2),et([Ft({valueTemplate:function(e){const[t]=e.split("/");return t?(e=>(e=>{const t=e.trim();return t.startsWith("#")||t.startsWith("rgb(")||t.startsWith("rgba(")||t.startsWith("hsl(")||t.startsWith("hsla(")})(e)?e:((e,t)=>`var(--gds-color-l${e}-border-${t})`)(this.level,e))(t):"currentColor"},styleTemplate:(e,t)=>{const r=t[0];return`\n        border-top-color: ${r};\n        border-right-color: ${t.length>1?t[1]:r};\n        border-bottom-color: ${t.length>2?t[2]:r};\n        border-left-color: ${t.length>3?t[3]:r};\n      `}})],bi.prototype,"border-color",2),et([Ft({styleTemplate:(e,t)=>{const r=t[0];return`\n        border-top-width: ${r};\n        border-right-width: ${t.length>1?t[1]:r};\n        border-bottom-width: ${t.length>2?t[2]:r};\n        border-left-width: ${t.length>3?t[3]:r};\n        border-style: solid;\n      `}})],bi.prototype,"border-width",2),et([Ft({valueTemplate:e=>`var(--gds-space-${e})`})],bi.prototype,"border-radius",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"opacity",2),et([Ft()],bi.prototype,"padding",2),et([Ft()],bi.prototype,"padding-inline",2),et([Ft()],bi.prototype,"padding-block",2),et([Ft({valueTemplate:e=>{const t="pos"==(e.startsWith("-")?"neg":"pos")?`var(--gds-space-${e})`:`calc(var(--gds-space-${e.substring(1)}) * -1)`;return"auto"===e?"auto":t},styleTemplate:(e,t)=>{const r=e=>"auto"===e?"auto":`${e}`,o=r(t[0]),s=t.length>1?r(t[1]):o;return`margin: ${o} ${s} ${t.length>2?r(t[2]):o} ${t.length>3?r(t[3]):s};`}})],bi.prototype,"margin",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"position",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"inset",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"overflow",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"height",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"max-height",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"min-height",2),et([Ft()],bi.prototype,"block-size",2),et([Ft()],bi.prototype,"min-block-size",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"width",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"max-width",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"min-width",2),et([Ft()],bi.prototype,"inline-size",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"cursor",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"pointer-events",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"user-select",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"z-index",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"transform",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"transform-style",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"transition",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"transition-behavior",2),et([Ft({valueTemplate:e=>e})],bi.prototype,"animation",2),et([Ft({valueTemplate:e=>`${e}`,styleTemplate:(e,t)=>{const r=t[0];return`font-size: var(--gds-text-size-${r});`+`line-height: var(--gds-text-line-height-${r});`}})],bi.prototype,"font-size",2),et([Ft({property:"font-weight",valueTemplate:e=>`var(--gds-text-weight-${e})`})],bi.prototype,"font-weight",2),et([Ft({valueTemplate:e=>`${e}`})],bi.prototype,"grid-column",2),et([Ft({valueTemplate:e=>`${e}`})],bi.prototype,"grid-row",2),et([Ft({valueTemplate:e=>`${e}`})],bi.prototype,"flex",2),bi=et([lt("gds-container")],bi);var vi=ve`
  :host {
    box-sizing: border-box;
  }
`,yi=class extends bi{connectedCallback(){super.connectedCallback(),this.display="flex"}render(){return ut`<slot></slot>`}};yi.styles=[Yt,vi],et([Ft({styleTemplate:(e,t)=>{const r=t[0];return`gap: ${r} ${t[1]||r};`},cacheOverrideKey:"flex"})],yi.prototype,"gap",2),et([Ft({valueTemplate:e=>e})],yi.prototype,"flex",2),et([Ft({valueTemplate:e=>e})],yi.prototype,"align-self",2),et([Ft({valueTemplate:e=>e})],yi.prototype,"align-items",2),et([Ft({valueTemplate:e=>e})],yi.prototype,"align-content",2),et([Ft({valueTemplate:e=>e})],yi.prototype,"justify-content",2),et([Ft({valueTemplate:e=>e})],yi.prototype,"place-content",2),et([Ft({valueTemplate:e=>e})],yi.prototype,"justify-items",2),et([Ft({valueTemplate:e=>e})],yi.prototype,"justify-self",2),et([Ft({property:"flex-direction",valueTemplate:e=>e})],yi.prototype,"flex-direction",2),et([Ft({property:"flex-wrap",valueTemplate:e=>e})],yi.prototype,"flex-wrap",2),yi=et([lt("gds-flex")],yi);var mi=class extends bi{constructor(){super(),this.variant="primary",this.padding="s; m{l}",this["border-radius"]="xs; m{s}",this["border-width"]="4xs"}render(){return ut`<slot></slot>`}};mi.styles=[Yt,ve`
      :host {
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
      }
    `],et([Ft({property:"box-shadow",valueTemplate:e=>`var(--gds-shadow-${e})`})],mi.prototype,"shadow",2),et([Ft({valueTemplate:e=>e,styleTemplate:function(e,t){return`\n      --_border-color: var(--gds-color-l${this.level}-background-${t});\n      --_background-color: var(--gds-color-l${this.level}-background-${t});\n      --_color: var(--gds-color-l${this.level}-content-${t});\n      `}})],mi.prototype,"variant",2),mi=et([lt("gds-card")],mi);var wi,xi,ki,_i,Ci,$i,Ei,Si,Ai=ve`
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
`,Ti=class extends qt{constructor(){super(),rt(this,wi),rt(this,ki),rt(this,Ci),rt(this,Ei),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.mainSlotOccupied=!1}render(){const e=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",t=this.disabled?"disabled":this.notification?"primary":this.variant,r="small"===this.size||this.notification?"2xs":"xs",o=this.mainSlotOccupied?"small"===this.size||this.notification?"m":"l":"xs";return ut`<gds-flex
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
      ${st(this,wi,xi).call(this)} ${st(this,ki,_i).call(this)}
      ${st(this,Ei,Si).call(this)}
    </gds-flex>`}};wi=new WeakSet,xi=function(){if("small"!==this.size||!this.notification)return ut`<slot name="lead"></slot>`},ki=new WeakSet,_i=function(){return ut`<slot @slotchange=${st(this,Ci,$i)}></slot>`},Ci=new WeakSet,$i=function(e){const t=e.target.assignedNodes({flatten:!0});this.mainSlotOccupied=t.length>0&&t.some((e=>{var t;return e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&""!==(null==(t=e.textContent)?void 0:t.trim())}))},Ei=new WeakSet,Si=function(){return ut`<slot name="trail"></slot>`},Ti.styles=[Yt,Ai],et([Pe()],Ti.prototype,"variant",2),et([Pe({type:String})],Ti.prototype,"size",2),et([Pe({attribute:"disabled",type:Boolean,reflect:!0})],Ti.prototype,"disabled",2),et([Pe({attribute:"notification",type:Boolean,reflect:!0})],Ti.prototype,"notification",2),et([je()],Ti.prototype,"mainSlotOccupied",2),Ti=et([lt("gds-badge")],Ti);var Mi=class extends lit_element_r{constructor(){super(...arguments),this.onmousedown=e=>{const t=e.target.getBoundingClientRect(),r=this._rippleEl;r&&(r.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",e.clientY-t.top+"px"),this.style.setProperty("--gds-ripple-left",e.clientX-t.left+"px"),setTimeout((()=>{r.classList.add("gds-ripple-effect")}),20))}}render(){return ee`<div></div>`}};Mi.styles=[Yt,be(":host {\n  --gds-ripple-motion-name: ripple;\n  --gds-ripple-motion: var(--gds-ripple-motion-name) 1.2s\n    cubic-bezier(0.46, 0.03, 0.52, 0.96) 0s 1 normal none running;\n  border-radius: var(--gds-space-max);\n  contain: strict;\n  display: flex;\n  height: 100%;\n  inset: 0;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n}\n\ndiv {\n  background-color: currentColor;\n  border-radius: var(--gds-space-max);\n  display: flex;\n  height: 20px;\n  left: var(--gds-ripple-left, 50%);\n  margin-left: -10px;\n  margin-top: -10px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: var(--gds-ripple-top, 50%);\n  width: 20px;\n  will-change: transform;\n}\n\ndiv.gds-ripple-effect {\n  animation: var(--gds-ripple-motion);\n}\n\n@keyframes ripple {\n  from {\n    opacity: 0.5;\n    transform: scale(0);\n  }\n  to {\n    opacity: 0;\n    transform: scale(calc(3 * var(--mt-ripple-spread, 4)));\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  :host {\n    --gds-ripple-motion-name: none !important;\n  }\n}")],et([He("div")],Mi.prototype,"_rippleEl",2),Mi=et([lt("gds-ripple")],Mi);var Di=class extends qt{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2016"}connectedCallback(){super.connectedCallback(),ln.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",be(`:host {${Zt}}`))}render(){return ut`<slot></slot>`}_onColorSchemeChange(){"dark"===this.colorScheme?this._dynamicStylesController.inject("dark",be(`:host { ${Zt}}`)):this._dynamicStylesController.inject("light",be(`:host { ${Gt}}`)),this.dispatchEvent(new CustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}}))}_onDesignVersionChange(){this.dispatchEvent(new CustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}}))}};Di.styles=ve`
    :host {
      display: contents;
    }
  `,et([Pe({reflect:!0,attribute:"color-scheme"})],Di.prototype,"colorScheme",2),et([Pe({reflect:!0,attribute:"design-version"})],Di.prototype,"designVersion",2),et([vr("colorScheme")],Di.prototype,"_onColorSchemeChange",1),et([vr("designVersion")],Di.prototype,"_onDesignVersionChange",1),Di=et([lt("gds-theme")],Di);var Li=ve`
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
`,zi=class extends bi{constructor(){super(),this.display="grid",this.width="100%"}render(){return ut`<slot></slot>`}};zi.styles=[Yt,Li],et([Ft({property:"--_c",valueTemplate:e=>e})],zi.prototype,"columns",2),et([Ft({styleTemplate:(e,t)=>{const r=t[0];return`--_gap-column: ${t[1]||r}; --_gap-row: ${r};`}})],zi.prototype,"gap",2),et([Ft({property:"--_col-width",valueTemplate:e=>`${e}px`})],zi.prototype,"auto-columns",2),zi=et([lt("gds-grid")],zi);var Fi=ve`
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
`,Wi=class extends qt{render(){return ut`<img src="${this.src}" alt="${this.alt}" />`}};Wi.styles=[Yt,Fi],et([Ft({property:"aspect-ratio",valueTemplate:e=>e})],Wi.prototype,"aspect-ratio",2),et([Ft({property:"object-position",selector:"img",valueTemplate:e=>e})],Wi.prototype,"position",2),et([Ft({property:"inset",valueTemplate:e=>e})],Wi.prototype,"inset",2),et([Ft({property:"width",valueTemplate:e=>e})],Wi.prototype,"width",2),et([Ft({property:"height",valueTemplate:e=>e})],Wi.prototype,"height",2),et([Ft({property:"opacity",valueTemplate:e=>e})],Wi.prototype,"opacity",2),et([Ft({property:"object-fit",selector:"img",valueTemplate:e=>e})],Wi.prototype,"object-fit",2),et([Pe()],Wi.prototype,"src",2),et([Pe()],Wi.prototype,"alt",2),et([Ft({property:"border-radius",valueTemplate:e=>`var(--gds-space-${e})`})],Wi.prototype,"border-radius",2),Wi=et([lt("gds-img")],Wi);var Oi=ve`
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
`,Pi=class extends qt{applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return ut`<video></video>`}firstUpdated(){this.applyVideoSettings()}};Pi.styles=[Yt,Oi],et([Ft({property:"aspect-ratio",valueTemplate:e=>e})],Pi.prototype,"aspect-ratio",2),et([Ft({property:"object-position",selector:"video",valueTemplate:e=>e})],Pi.prototype,"object-position",2),et([Ft({property:"inset",valueTemplate:e=>e})],Pi.prototype,"inset",2),et([Ft({property:"width",valueTemplate:e=>e})],Pi.prototype,"width",2),et([Ft({property:"height",valueTemplate:e=>e})],Pi.prototype,"height",2),et([Ft({property:"opacity",valueTemplate:e=>e})],Pi.prototype,"opacity",2),et([Ft({property:"object-fit",selector:"video",valueTemplate:e=>e})],Pi.prototype,"object-fit",2),et([Ft({property:"pointer-events",selector:"video",valueTemplate:e=>e})],Pi.prototype,"pointer-events",2),et([Ft({property:"border-radius",valueTemplate:e=>`var(--gds-space-${e})`})],Pi.prototype,"border-radius",2),et([Pe()],Pi.prototype,"src",2),et([Pe()],Pi.prototype,"poster",2),et([Pe({type:Boolean})],Pi.prototype,"muted",2),et([Pe({type:Boolean})],Pi.prototype,"playsinline",2),et([Pe({type:Boolean})],Pi.prototype,"autoplay",2),et([Pe({type:Boolean})],Pi.prototype,"loop",2),et([He("video")],Pi.prototype,"videoElement",2),Pi=et([lt("gds-video")],Pi);var ji,Vi,Hi,Ni,Ri=ve`
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
`,Bi=class extends qt{constructor(){super(),rt(this,ji),rt(this,Hi),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const e={button:!0,selected:this.selected,compact:this.compact},t=nt(this,ji,Vi)?Jt`a`:Jt`button`;return tn`
      <${t}
        class="${Hn(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${ys(nt(this,ji,Vi)?this.href:void 0)}
        target=${ys(nt(this,ji,Vi)?this.target:void 0)}
        rel=${ys(nt(this,ji,Vi)?this.rel||nt(this,Hi,Ni):void 0)}
        download=${ys(nt(this,ji,Vi)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${t}>
    `}};ji=new WeakSet,Vi=function(){return this.href.length>0},Hi=new WeakSet,Ni=function(){return"_blank"===this.target?"noreferrer noopener":void 0},Bi.styles=[Yt,be(Ri)],Bi.shadowRootOptions={mode:"open",delegatesFocus:!0},et([Pe({type:Boolean,reflect:!0})],Bi.prototype,"disabled",2),et([Pe()],Bi.prototype,"label",2),et([Pe()],Bi.prototype,"href",2),et([Pe()],Bi.prototype,"target",2),et([Pe()],Bi.prototype,"rel",2),et([Pe()],Bi.prototype,"download",2),et([Pe({type:Boolean,reflect:!0})],Bi.prototype,"compact",2),et([Pe({type:Boolean,reflect:!0})],Bi.prototype,"selected",2),Bi=et([lt("gds-menu-button")],Bi);var Ii,Ui,Zi,Gi,Yi,qi,Ki,Xi,Ji,Qi,ea=class extends qt{constructor(){super(...arguments),rt(this,Ui),this.size="medium",rt(this,Ii,void 0),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,rt(this,Gi,(()=>{const e=this.segments.filter(((e,t,r)=>{var o;return(null==(o=r[t+1])?void 0:o.isVisible)&&!e.isVisible}))[0];this._elTrack.scrollLeft=e.offsetLeft})),rt(this,Yi,(()=>{const e=this.segments.filter(((e,t,r)=>{var o;return(null==(o=r[t-1])?void 0:o.isVisible)&&!e.isVisible})).reverse()[0];this._elTrack.scrollLeft=e.offsetLeft})),rt(this,qi,(()=>{this.segments.every((e=>!e.isVisible))||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)})),rt(this,Ki,((e,t)=>{let r;return()=>{clearTimeout(r),r=setTimeout(e,t)}})(nt(this,qi),50)),rt(this,Xi,(()=>{const e=this.segments.find((e=>e.selected));if(e){const t=e.offsetWidth,r=e.offsetLeft;this._elIndicator.style.transform=`translateX(${r}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"})),rt(this,Ji,(e=>{const t=this.segments.find((t=>t===e.target||t.contains(e.target)));t&&(this.segments.forEach((e=>e.selected=!1)),t.selected=!0,ot(this,Ii,t.value),nt(this,Xi).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0})))})),rt(this,Qi,(()=>{nt(this,Ii)&&this.updateComplete.then((()=>{const e=this.segments.find((e=>e.value===nt(this,Ii)));e&&(this.segments.forEach((e=>e.selected=!1)),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)}))}))}get value(){return nt(this,Ii)}set value(e){ot(this,Ii,e),nt(this,Qi).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),ln.instance.apply(this,"gds-segmented-control"),this.updateComplete.then((()=>{this._elTrack.addEventListener("scroll",(()=>{nt(this,Ki).call(this)}))}))}render(){return ut`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${nt(this,Gi)}
        aria-label=${gn("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${nt(this,Ji)}
          @slotchange=${st(this,Ui,Zi)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${nt(this,Yi)}
        aria-label=${gn("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then((()=>{nt(this,Ki).call(this),nt(this,Xi).call(this)}))}};Ii=new WeakMap,Ui=new WeakSet,Zi=function(){var e,t;const r=null==(e=this.segments.find((e=>e.selected)))?void 0:e.value;r&&ot(this,Ii,r),null==(t=this.intersectionObserver)||t.disconnect(),this.intersectionObserver=new IntersectionObserver((e=>{e.forEach((e=>{e.target._isVisible=e.intersectionRatio>.99}))}),{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach((e=>{var t;null==(t=this.intersectionObserver)||t.observe(e)}))},Gi=new WeakMap,Yi=new WeakMap,qi=new WeakMap,Ki=new WeakMap,Xi=new WeakMap,Ji=new WeakMap,Qi=new WeakMap,ea.styles=[Yt,be("@layer base {\n  :host {\n    background-color: var(--gds-sys-color-container-container-dim1);\n    border: 0.25rem solid var(--gds-sys-color-container-container-dim1);\n    border-radius: calc(infinity * 1px);\n    box-sizing: border-box;\n    contain: layout;\n    display: inline-flex;\n    height: 3rem;\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n  }\n\n  :host([size='small']) {\n    height: 2.5rem;\n  }\n\n  #track {\n    box-sizing: border-box;\n    display: flex;\n    flex-grow: 1;\n    scroll-snap-type: inline mandatory;\n    overscroll-behavior-x: contain;\n    scroll-behavior: smooth;\n    overflow-x: scroll;\n    gap: 0.25rem;\n    position: relative;\n    scrollbar-width: none;\n  }\n\n  #track::-webkit-scrollbar {\n    display: none;\n  }\n\n  #btn-prev,\n  #btn-next {\n    box-sizing: border-box;\n    align-items: center;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    aspect-ratio: 1;\n    background-color: var(--gds-sys-color-container-container-dim1);\n    border-radius: calc(infinity * 1px);\n    border-width: 0;\n    color: var(--gds-sys-color-content-content);\n    cursor: pointer;\n    display: flex;\n    font-size: 1rem;\n    height: 100%;\n    justify-content: center;\n    width: 2.5rem;\n    transition: 0.2s;\n    z-index: 2;\n    position: absolute;\n\n    @media (pointer: fine) {\n      &:hover {\n        background-color: color-mix(\n          in srgb,\n          var(--gds-sys-color-state-layers-state-black-dim1),\n          var(--gds-sys-color-container-container-dim1)\n        );\n      }\n    }\n  }\n  #btn-prev {\n    margin: 0 0.25rem 0 0;\n  }\n  #btn-next {\n    margin: 0 0 0 0.25rem;\n    right: 0;\n  }\n\n  #btn-prev[aria-hidden='true'],\n  #btn-next[aria-hidden='true'] {\n    opacity: 0;\n    width: 0;\n    margin: 0;\n    padding: 0;\n  }\n\n  :host([size='small']) #btn-prev,\n  :host([size='small']) #btn-next {\n    width: 2rem;\n  }\n\n  ::slotted(*) {\n    flex-grow: 1;\n    flex-shrink: 0;\n    z-index: 1;\n    scroll-margin: 0 2.75rem;\n    scroll-snap-align: start;\n  }\n\n  #indicator {\n    background-color: var(--gds-sys-color-container-container-bright);\n    border-radius: calc(infinity * 1px);\n    height: 100%;\n    left: 0;\n    position: absolute;\n    z-index: 0;\n    transition:\n      transform 0.2s,\n      width 0.2s;\n    z-index: 0;\n  }\n}\n")],et([Pe({reflect:!0})],ea.prototype,"size",2),et([Pe()],ea.prototype,"value",1),et([He("slot")],ea.prototype,"_elSlot",2),et([He("#indicator")],ea.prototype,"_elIndicator",2),et([He("#track")],ea.prototype,"_elTrack",2),et([je()],ea.prototype,"_showPrevButton",2),et([je()],ea.prototype,"_showNextButton",2),et([(e,t,r)=>{const o=e.connectedCallback,s=e.disconnectedCallback;e.connectedCallback=function(){null==o||o.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver((()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout((()=>{var e;null==(e=r.value)||e.call(this)}),20)})),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){null==s||s.call(this),this.__resizeObservers[t].disconnect()}},vr("segMinWidth")],ea.prototype,"_recalculateMinWidth",1),ea=et([lt("gds-segmented-control"),yn()],ea);var ta=class extends qt{constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),ln.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return ut`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};ta.styles=[...Yt,be("@layer base {\n  :host {\n    display: flex;\n    z-index: 1;\n  }\n\n  button {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    background: transparent;\n    border-radius: calc(infinity * 1px);\n    border-width: 0;\n    color: var(--gds-sys-color-content-content);\n    cursor: pointer;\n    flex-grow: 1;\n    flex-shrink: 0;\n    font-family: inherit;\n    font-size: inherit;\n    overflow: hidden;\n    padding: 0 1rem;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 100%;\n    transition: 0.1s;\n\n    &:disabled {\n      cursor: not-allowed;\n      opacity: 0.5;\n    }\n  }\n\n  @media (pointer: fine) {\n    :host(:not([selected])) button:hover {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-sys-color-state-layers-state-black-dim1),\n        transparent\n      );\n\n      &:disabled {\n        background-color: transparent;\n      }\n    }\n  }\n\n  button:focus-visible {\n    outline: 2px solid #000;\n    outline-offset: -2px;\n  }\n}\n")],et([Pe({type:Boolean,reflect:!0})],ta.prototype,"selected",2),et([Pe()],ta.prototype,"value",2),et([Pe({type:Boolean,reflect:!0})],ta.prototype,"disabled",2),et([Ft({valueTemplate:e=>e})],ta.prototype,"min-width",2),et([Ft({valueTemplate:e=>e})],ta.prototype,"max-width",2),et([Ft()],ta.prototype,"width",2),ta=et([lt("gds-segment")],ta);var na=class extends rs{};na._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',na._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>',na._name="chevron-left",na=et([lt("gds-icon-chevron-left")],na);var ra=class extends rs{};ra._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ra._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>',ra._name="chevron-right",ra=et([lt("gds-icon-chevron-right")],ra);var oa=["sv"],sa={};((e,t)=>{for(var r in t)Ie(e,r,{get:t[r],enumerable:!0})})(sa,{templates:()=>ia});var ia={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s17e3edbe032f79ec:"\xd6ppna kalender",s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"M\xe5n",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s39938ecdae568740:"September",s407a88a592a0987c:"Augusti",s46d6587089bd0356:"N\xe4sta m\xe5nad",s5052d10b539eabf0:"Mars",s58bfb494feb8eb02:hn`${0} valda`,s5d929ff1619ac0c9:"S\xf6k",s5e8250fb85d64c23:"St\xe4ng",s5febcd9b311c16fe:"Scrolla h\xf6ger",s62931b2a50168976:"F\xf6reg\xe5ende m\xe5nad",s63d040e37887f17e:"Idag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tis",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"\xd6ppna meny",s83c436ed1bc16dfb:"Visa mer information",s8ade4e9d5e804d6a:"F\xf6rsta tillg\xe4ngliga datum",s9836b719fa8ef857:"L\xf6r",s987ac119fac8d621:"S\xf6n",s9af3c72c33088826:hn`Det finns ${0} fel att åtgärda innan du kan fortsätta:`,sa6f2645578b2d2bc:"\xc5r",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"M\xe5nad",sb4f1dffbb6be6302:"Rensa",sb77f4dce69a005ac:"Felmeddelande.",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"S\xf6k i listan av val",sdc42f1da42d6411a:"Rensa text",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sista tillg\xe4ngliga datum",sf295af199c723ec8:"Fre"},aa=new Map([["sv",sa]]);let la,ca;function da(e,t,r,o,s,i){function a(e,t,r){return function(o,s){return r&&r(o),e[t].call(o,s)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function c(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function d(e,t,r,o,s,i,l,d,h,u,p,g,f){function v(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var y,m=t[0],w=t[3],x=!d;if(!x){r||Array.isArray(m)||(m=[m]);var _={},C=[],$=3===s?"get":4===s||g?"set":"value";u?(p||g?_={get:ua((function(){return w(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=w,p||ua(_[$],o,2===s?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var E=e,S=m.length-1;S>=0;S-=r?2:1){var A=m[S],T=r?m[S-1]:void 0,D={},F={kind:["field","accessor","method","getter","setter","class"][s],name:o,metadata:i,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");c(t,"An initializer","be",!0),l.push(t)}).bind(null,D)};try{if(x)(y=c(A.call(T,E,F),"class decorators","return"))&&(E=y);else{var W,O;F.static=h,F.private=u,u?2===s?W=function(e){return v(e),_.value}:(s<4&&(W=a(_,"get",v)),3!==s&&(O=a(_,"set",v))):(W=function(e){return e[o]},(s<2||4===s)&&(O=function(e,t){e[o]=t}));var P=F.access={has:u?f.bind():function(e){return o in e}};if(W&&(P.get=W),O&&(P.set=O),E=A.call(T,g?{get:_.get,set:_.set}:_[$],F),g){if("object"==typeof E&&E)(y=c(E.get,"accessor.get"))&&(_.get=y),(y=c(E.set,"accessor.set"))&&(_.set=y),(y=c(E.init,"accessor.init"))&&C.push(y);else if(void 0!==E)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else c(E,(p?"field":"method")+" decorators","return")&&(p?C.push(E):_[$]=E)}}finally{D.v=!0}}return(p||g)&&d.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||x||(u?g?d.push(a(_,"get"),a(_,"set")):d.push(2===s?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),E}function h(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var u=i[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(u??null),g=function(e,t,r,o){var s,i,a=[],c=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},h=new Map;function u(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],v=g[2],y=g.length>3,m=16&f,w=!!(8&f),x=0==(f&=7),_=v+"/"+w;if(!x&&!y){var C=h.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+v);h.set(_,!(f>2)||f)}d(w?e:e.prototype,g,m,y?"#"+v:ha(v),f,o,w?i=i||[]:s=s||[],a,w,y,x,1===f,w&&y?c:r)}}return u(s),u(i),a}(e,t,s,p);return r.length||h(e,p),{e:g,get c(){var t=[];return r.length&&[h(d(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function ha(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function ua(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}const{setLocale:pa,getLocale:ga}=function(){let{extraLocales:e,extraTemplates:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{extraLocales:[],extraTemplates:new Map};const r=[...oa];for(const[o,s]of t)aa.set(o,s);for(const o of e)r.push(o);return zn({sourceLocale:"en",targetLocales:r,loadLocale:async e=>{const t=aa.get(e);return t||Promise.reject(new Error(`Locale ${e} not found`))}})}();let fa;ca=[Fe("gds-header")];class GdsHeader extends lit_element_r{static#e=(()=>[fa,la]=da(this,[],ca,0,void 0,lit_element_r).c)();connectedCallback(){super.connectedCallback()}handleButtonClick(e){this.dispatchEvent(new CustomEvent("view-change",{detail:{view:e},bubbles:!0,composed:!0}))}render(){return ut`
      <gds-flex
        level="2"
        align-items="stretch"
        width="100%"
        justify-content="space-between"
        background="primary"
        position="relative"
        height="4rem"
      >
        <gds-container display="xs{flex} s{flex} m{flex} l{none}">
          <gds-context-menu>
            <gds-flex align-items="center" gap="s" slot="trigger">
              Menu
              <gds-icon-bars-three></gds-icon-bars-three>
            </gds-flex>
            <gds-menu-item
              @click=${()=>this.handleButtonClick("theme-pages")}
            >
              Theme Pages
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
        </gds-container>
        <gds-flex
          justify-content="space-between"
          display="xs{none} s{none} m{none} l{flex}"
          width="100%"
        >
          <gds-flex>
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
          <gds-flex align-items="center" gap="l" margin="0 m 0 ">
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
              <gds-menu-item @click=${()=>pa("en")}>EN</gds-menu-item>
              <gds-menu-item @click=${()=>pa("sv")}>SV</gds-menu-item>
            </gds-context-menu> -->
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `}static#t=(()=>la())()}var ba={fromAttribute:e=>new Date(e),toAttribute:e=>e.toISOString()},va={fromAttribute:e=>e.split(",").map((e=>new Date(e.trim()))),toAttribute:e=>JSON.stringify(e.map((e=>e.toISOString())))};const ya=(e,t,r)=>{const o=new Map;for(let s=t;s<=r;s++)o.set(e[s],s);return o},ma=Vn(class extends directive_i{constructor(e){if(super(e),e.type!==Pn)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let o;void 0===r?r=t:void 0!==t&&(o=t);const s=[],i=[];let a=0;for(const l of e)s[a]=o?o(l,a):a,i[a]=r(l,a),a++;return{values:i,keys:s}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,o]){const s=(e=>e._$AH)(e),{values:i,keys:a}=this.dt(t,r,o);if(!Array.isArray(s))return this.ut=a,i;const l=this.ut??=[],c=[];let d,h,u=0,p=s.length-1,g=0,f=i.length-1;for(;u<=p&&g<=f;)if(null===s[u])u++;else if(null===s[p])p--;else if(l[u]===a[g])c[g]=Xn(s[u],i[g]),u++,g++;else if(l[p]===a[f])c[f]=Xn(s[p],i[f]),p--,f--;else if(l[u]===a[f])c[f]=Xn(s[u],i[f]),Kn(e,c[f+1],s[u]),u++,f--;else if(l[p]===a[g])c[g]=Xn(s[p],i[g]),Kn(e,s[u],s[p]),p--,g++;else if(void 0===d&&(d=ya(a,g,f),h=ya(l,u,p)),d.has(l[u]))if(d.has(l[p])){const t=h.get(a[g]),r=void 0!==t?s[t]:null;if(null===r){const t=Kn(e,s[u]);Xn(t,i[g]),c[g]=t}else c[g]=Xn(r,i[g]),Kn(e,s[u],r),s[t]=null;g++}else Qn(s[p]),p--;else Qn(s[u]),u++;for(;g<=f;){const t=Kn(e,c[f+1]);Xn(t,i[g]),c[g++]=t}for(;u<=p;){const e=s[u++];null!==e&&Qn(e)}return this.ut=a,((e,t=Jn)=>{e._$AH=t})(e,c),re}});class private_async_helpers_s{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class private_async_helpers_i{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise((e=>this.q=e))}resume(){this.q?.(),this.Z=this.q=void 0}}const wa=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,xa=1073741823;const ka=Vn(class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=xa,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find((e=>!wa(e)))??re}update(e,t){const r=this._$Cbt;let o=r.length;this._$Cbt=t;const s=this._$CK,i=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<t.length&&!(a>this._$Cwt);a++){const e=t[a];if(!wa(e))return this._$Cwt=a,e;a<o&&e===r[a]||(this._$Cwt=xa,o=0,Promise.resolve(e).then((async t=>{for(;i.get();)await i.get();const r=s.deref();if(void 0!==r){const o=r._$Cbt.indexOf(e);o>-1&&o<r._$Cwt&&(r._$Cwt=o,r.setValue(t))}})))}return re}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}});function _a(e){return _a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_a(e)}function Ca(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function $a(e){Ca(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===_a(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function Ea(e){Ca(1,arguments);var t=$a(e);return t.setHours(0,0,0,0),t}function Sa(e,t){Ca(2,arguments);var r=Ea(e),o=Ea(t);return r.getTime()===o.getTime()}var Aa,Ta,Ma,Da,La,za,Fa,Wa,Oa,Pa,ja,Va,Ha,Na,Ra,Ba,Ia,Ua,Za,Ga,Ya,qa,Ka,Xa,Ja,Qa,el,tl,nl,rl,ol,sl,il,al,ll,cl,dl=ve`
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
`,hl=class extends vs{constructor(){super(...arguments),rt(this,Ta),rt(this,Da),rt(this,za),rt(this,Wa),rt(this,Pa),rt(this,Va),rt(this,Na),rt(this,nl),rt(this,il),rt(this,ll),this.min=new Date((new Date).getFullYear()-10,0,1),this.max=new Date((new Date).getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=(new Date).getMonth(),this._focusedYear=(new Date).getFullYear(),this._dateFormatLayout=st(this,nl,rl).call(this,"y-m-d"),rt(this,Aa,void 0),rt(this,Ba,(e=>{this._elTrigger.then((t=>{var r,o;(null==(r=e.relatedTarget)?void 0:r.parentElement)!==e.target&&(null==(o=document.getSelection())||o.removeAllRanges())}))})),rt(this,Ia,(e=>{this._elTrigger.then((e=>{var t,r;null==(t=document.getSelection())||t.removeAllRanges();const o=new Range;o.setStart(e.firstChild,0),o.setEnd(e.lastChild,4),null==(r=document.getSelection())||r.addRange(o)}))})),rt(this,Ua,(e=>{this._elField.then((t=>{var r;e.currentTarget===t&&(e.preventDefault(),null==(r=e.clipboardData)||r.setData("text/plain",this.displayValue))}))})),rt(this,Za,(e=>{this._elField.then((t=>{var r;if(e.currentTarget!==t)return;e.preventDefault();const o=null==(r=e.clipboardData)?void 0:r.getData("text/plain");if(!o)return;let s=new Date("-");const i="Invalid Date",a=o.split(this._dateFormatLayout.delimiter);if(3===a.length){const e=this._dateFormatLayout.layout,t=parseInt(a[e.findIndex((e=>"y"===e.token))]),r=parseInt(a[e.findIndex((e=>"m"===e.token))])-1,o=parseInt(a[e.findIndex((e=>"d"===e.token))]);isNaN(t)||isNaN(r)||isNaN(o)||(s=new Date(`${t}-${r+1}-${o}`))}s.toString()===i&&(s=new Date(o),s.toString()===i)||(this.value=s,st(this,Va,Ha).call(this))}))})),rt(this,Ga,(e=>{var t;null==(t=this._elSpinners[0])||t.focus()})),rt(this,Ya,(e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,st(this,Va,Ha).call(this)})),rt(this,qa,(e=>{var t;e.stopPropagation(),this._focusedMonth=null==(t=e.target)?void 0:t.value})),rt(this,Ka,(e=>{var t;e.stopPropagation(),this._focusedYear=null==(t=e.target)?void 0:t.value})),rt(this,Xa,(e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)})),rt(this,Ja,(e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)})),rt(this,Qa,(async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),st(this,Na,Ra).call(this)})),rt(this,el,(async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,"close"===e.detail.reason){const e=(await this._elCalendar).value;!Sa(e||new Date(0),nt(this,Aa)||new Date(0))&&(this.value=e,st(this,Va,Ha).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}"cancel"===e.detail.reason&&(this.value=nt(this,Aa))}})),rt(this,tl,(e=>{const t=Array.from(this._elSpinners).findIndex((t=>t===e.target));if("ArrowRight"===e.key){const e=this._elSpinners[t+1];e&&e.focus()}if("ArrowLeft"===e.key){const e=this._elSpinners[t-1];e&&e.focus()}})),rt(this,ol,((e,t)=>{nt(this,sl)[t]=e;const r=new Date;r.setFullYear(parseInt(nt(this,sl).year)),r.setMonth(parseInt(nt(this,sl).month)-1),r.setDate(parseInt(nt(this,sl).day)),r.setHours(12,0,0,0),"Invalid Date"!==r.toString()&&(this.value=r,st(this,Va,Ha).call(this))})),rt(this,sl,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map((e=>e.token)).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=st(this,nl,rl).call(this,e)}async getFocusedDate(){return this.open?this._elCalendar.then((e=>e.focusedDate)):void 0}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then((t=>t.getDateCell(e)))}connectedCallback(){super.connectedCallback(),ln.instance.apply(this,"gds-datepicker")}render(){return ut`${ms(this.label&&!this.hideLabel,(()=>ut`<label for="spinner-0" id="label">${this.label}</label>`))}

      <div class="form-info" id="sub-label"><slot name="sub-label"></slot></div>

      <div
        class=${Hn({field:!0,small:"small"===this.size})}
        id="field"
        @click=${nt(this,Ga)}
        @copy=${nt(this,Ua)}
        @paste=${nt(this,Za)}
      >
        <div
          class=${Hn({input:!0,"is-placeholder":!this.value})}
          @focusout=${nt(this,Ba)}
        >
          ${function*(e,t){const r="function"==typeof t;if(void 0!==e){let o=-1;for(const s of e)o>-1&&(yield r?t(o):t),o++,yield s}}(function*(e,t){if(void 0!==e){let r=0;for(const o of e)yield t(o,r++)}}(this._dateFormatLayout.layout,((e,t)=>ut`<gds-date-part-spinner
                  id="spinner-${t}"
                  class="spinner"
                  .length=${"y"===e.token?4:2}
                  .value=${nt(this,sl)[e.name]}
                  aria-valuemin=${st(this,Wa,Oa).call(this,e.name)}
                  aria-valuemax=${st(this,Pa,ja).call(this,e.name)}
                  aria-label=${st(this,za,Fa).call(this,e.name)}
                  aria-describedby="label sub-label message"
                  @keydown=${nt(this,tl)}
                  @change=${t=>nt(this,ol).call(this,t.detail.value,e.name)}
                  @focus=${nt(this,Ia)}
                  @touchend=${e=>{this.open=!0,e.preventDefault()}}
                ></gds-date-part-spinner>`)),ut`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${gn("Open calendar modal")}"
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
        @gds-ui-state=${nt(this,el)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{var t;"calendar-popover"===(null==(t=e.target)?void 0:t.id)&&this._elCalendar.then((e=>e.focus()))}}
      >
        <div class="header">
          <gds-button
            @click=${nt(this,Ja)}
            aria-label=${gn("Previous month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </gds-button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${nt(this,qa)}
            .maxHeight=${300}
            label="${gn("Month")}"
            size="small"
            class="month"
            hide-label
          >
            <gds-option value="0">${gn("January")}</gds-option>
            <gds-option value="1">${gn("February")}</gds-option>
            <gds-option value="2">${gn("March")}</gds-option>
            <gds-option value="3">${gn("April")}</gds-option>
            <gds-option value="4">${gn("May")}</gds-option>
            <gds-option value="5">${gn("June")}</gds-option>
            <gds-option value="6">${gn("July")}</gds-option>
            <gds-option value="7">${gn("August")}</gds-option>
            <gds-option value="8">${gn("September")}</gds-option>
            <gds-option value="9">${gn("October")}</gds-option>
            <gds-option value="10">${gn("November")}</gds-option>
            <gds-option value="11">${gn("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${nt(this,Ka)}
            .maxHeight=${300}
            label="${gn("Year")}"
            size="small"
            class="year"
            hide-label
          >
            ${ma(nt(this,il,al),(e=>e),(e=>ut`<gds-option value=${e}>${e}</gds-option>`))}
          </gds-dropdown>
          <gds-button
            @click=${nt(this,Xa)}
            aria-label=${gn("Next month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${nt(this,Ya)}
          @gds-date-focused=${nt(this,Qa)}
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
            @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,st(this,Va,Ha).call(this)}}
          >
            ${gn("Clear")}
          </gds-button>
          ${ka(st(this,Ta,Ma).call(this),oe)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),st(this,Da,La).call(this,new Date)}}
          >
            ${gn("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(!this.value)return void ot(this,sl,{year:"yyyy",month:"mm",day:"dd"});const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),r=(e.getMonth()+1).toString().padStart(2,"0"),o=e.getDate().toString().padStart(2,"0");ot(this,sl,{year:t,month:r,day:o})}_handleOpenChange(){this.open&&(ot(this,Aa,this.value),this._elCalendar.then((e=>e.focus())))}};Aa=new WeakMap,Ta=new WeakSet,Ma=async function(){const e=await this.getFocusedDate();let t,r="";return e&&e>this.max?(r=gn("Last available date"),t=e=>{e.stopPropagation(),st(this,Da,La).call(this,this.max)}):e&&e<this.min&&(r=gn("First available date"),t=e=>{e.stopPropagation(),st(this,Da,La).call(this,this.min)}),ut`${ms(r.length>0,(()=>ut`<gds-button rank="tertiary" size="small" @click=${t}>
          ${r}
        </gds-button>`),(()=>oe))}`},Da=new WeakSet,La=function(e){const t=new Date(e);this._elCalendar.then((e=>e.focusedDate=t)).then(nt(this,Qa))},za=new WeakSet,Fa=function(e){return{year:gn("Year"),month:gn("Month"),day:gn("Day")}[e]},Wa=new WeakSet,Oa=function(e){return{year:1900,month:1,day:1}[e]},Pa=new WeakSet,ja=function(e){return{year:9999,month:12,day:31}[e]},Va=new WeakSet,Ha=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))},Na=new WeakSet,Ra=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))},Ba=new WeakMap,Ia=new WeakMap,Ua=new WeakMap,Za=new WeakMap,Ga=new WeakMap,Ya=new WeakMap,qa=new WeakMap,Ka=new WeakMap,Xa=new WeakMap,Ja=new WeakMap,Qa=new WeakMap,el=new WeakMap,tl=new WeakMap,nl=new WeakSet,rl=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],r=e.split(t),o=r.findIndex((e=>"y"===e)),s=r.findIndex((e=>"m"===e)),i=r.findIndex((e=>"d"===e));if(-1===o||-1===s||-1===i)throw new Error("Invalid date format for <gds-datepicker>");const a=[o,s,i].sort(((e,t)=>e-t)),l=a.map((e=>r[e])).map((e=>({token:e,name:"y"===e?"year":"m"===e?"month":"day"})));return{delimiter:t,layout:l}},ol=new WeakMap,sl=new WeakMap,il=new WeakSet,al=function(){var e;const t=this.min.getFullYear(),r=this.max.getFullYear(),o=nt(this,ll,cl),s=null==(e=this.value)?void 0:e.getFullYear();return{*[Symbol.iterator](){o&&(yield s);for(let e=t;e<=r;e++)yield e}}},ll=new WeakSet,cl=function(){return!!this.value&&(this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear())},hl.styles=[Yt,dl],hl.shadowRootOptions={mode:"open",delegatesFocus:!0},et([Pe({converter:ba})],hl.prototype,"value",2),et([Pe({converter:ba})],hl.prototype,"min",2),et([Pe({converter:ba})],hl.prototype,"max",2),et([Pe({type:Boolean})],hl.prototype,"open",2),et([Pe()],hl.prototype,"label",2),et([Pe({type:Boolean,attribute:"show-week-numbers"})],hl.prototype,"showWeekNumbers",2),et([Pe()],hl.prototype,"size",2),et([Pe({type:Boolean,attribute:"hide-label"})],hl.prototype,"hideLabel",2),et([Pe()],hl.prototype,"dateformat",1),et([Pe({type:Boolean,attribute:"disabled-weekends"})],hl.prototype,"disabledWeekends",2),et([Pe({converter:va,attribute:"disabled-dates"})],hl.prototype,"disabledDates",2),et([Re("#calendar-button")],hl.prototype,"test_calendarButton",2),et([je()],hl.prototype,"_focusedMonth",2),et([je()],hl.prototype,"_focusedYear",2),et([je()],hl.prototype,"_dateFormatLayout",2),et([Re("#calendar")],hl.prototype,"_elCalendar",2),et([Re("#calendar-button")],hl.prototype,"_elTrigger",2),et([Re("#field")],hl.prototype,"_elField",2),et([function(e){return(t,r)=>Ve(t,r,{get(){return(this.renderRoot??(Ne??=document.createDocumentFragment())).querySelectorAll(e)}})}("[role=spinbutton]")],hl.prototype,"_elSpinners",2),et([He(".input")],hl.prototype,"_elInput",2),et([vr("value")],hl.prototype,"_handleValueChange",1),et([vr("open")],hl.prototype,"_handleOpenChange",1),hl=et([lt("gds-datepicker"),yn()],hl);var ul,pl,gl,fl,bl,vl,yl,ml,wl,xl,kl,_l,Cl,$l,El=ve`
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
`,Sl=class extends vs{constructor(){super(),rt(this,yl),rt(this,wl),rt(this,kl),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,rt(this,ul,void 0),rt(this,pl,(e=>{const t=e.getBoundingClientRect(),r=window.innerHeight-t.bottom,o=t.top;let s=Math.min(o,this.maxHeight);return r>o&&(s=Math.min(r,this.maxHeight)),s-16+"px"})),rt(this,gl,(e=>{if(!e.currentTarget)return;const t=e.currentTarget;if(this.options.forEach((e=>e.hidden=!1)),!t.value)return;const r=this.options.filter((e=>!this.searchFilter(t.value,e)));r.forEach((e=>e.hidden=!0))})),rt(this,fl,(e=>{var t;null==(t=this._elListbox)||t.then((t=>{if("ArrowDown"===e.key||"Tab"===e.key)return e.preventDefault(),void t.focus()}))})),rt(this,bl,(e=>{var t;if("Tab"===e.key&&this.searchable)return e.preventDefault(),void(null==(t=this._elSearchInput)||t.focus())})),rt(this,vl,(e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)})),rt(this,Cl,(e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)})),rt(this,$l,(e=>{var t;"Tab"!==e.key||this.searchable||(e.preventDefault(),this.open=!1,null==(t=this._elTriggerBtn)||t.focus())})),vn(this)}get type(){return"gds-dropdown"}get options(){return nt(this,ul)?Array.from(nt(this,ul)).filter((e=>!e.hasAttribute("isplaceholder"))):[]}get placeholder(){if(nt(this,ul))return Array.from(nt(this,ul)).find((e=>e.hasAttribute("isplaceholder")))}get displayValue(){var e,t;let r;return r=Array.isArray(this.value)?this.value.length>2?gn(hn`${this.value.length} selected`):this.value.reduce(((e,t)=>{var r;return e+(null==(r=this.options.find((e=>e.value===t)))?void 0:r.innerHTML)+", "}),"").slice(0,-2):null==(e=this.options.find((e=>e.selected)))?void 0:e.innerHTML,r||(null==(t=this.placeholder)?void 0:t.innerHTML)||""}connectedCallback(){super.connectedCallback(),ln.instance.apply(this,"gds-dropdown"),this.updateComplete.then((()=>{this._handleLightDOMChange(),this._handleValueChange()}))}render(){return ut`
      ${ms(this.label&&!this.hideLabel,(()=>ut`<label for="trigger">${this.label}</label>`))}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${nt(this,pl)}
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
          class=${Hn({small:"small"===this.size})}
        >
          <slot name="trigger">
            <span>${ts(this.displayValue)}</span>
          </slot>
          <div class="icon">
            <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
          </div>
        </button>
        ${ms(this.searchable,(()=>ut`<input
              id="searchinput"
              type="text"
              aria-label="${gn("Filter available options")}"
              placeholder="${gn("Search")}"
              @keydown=${nt(this,fl)}
              @input=${nt(this,gl)}
            />`))}
        <gds-listbox
          id="listbox"
          .multiple="${ys(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${st(this,yl,ml)}"
          @gds-focus="${nt(this,vl)}"
          @keydown=${nt(this,bl)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"
        ><slot name="message">${this.validationMessage}</slot></span
      >
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;this.requestUpdate(),ot(this,ul,this.querySelectorAll("[gds-element=gds-option]")),this.multiple?this._handleValueChange():void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=null==(e=this.options[0])?void 0:e.value:this.placeholder||void 0!==this.options.find((e=>this.compareWith(e.value,this.value)))||(this.options[0]&&(this.options[0].selected=!0),this.value=null==(t=this.options[0])?void 0:t.value)}_handleValueChange(){this._elListbox.then((e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])}))}_onOpenChange(){var e;const t=this.open;null==(e=nt(this,ul))||e.forEach((e=>e.hidden=!t)),t?st(this,wl,xl).call(this):(st(this,kl,_l).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const r=this.options.find((e=>e.selected));this.updateComplete.then((()=>null==r?void 0:r.scrollIntoView())),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:t},bubbles:!0,composed:!0}))}};ul=new WeakMap,pl=new WeakMap,gl=new WeakMap,fl=new WeakMap,bl=new WeakMap,vl=new WeakMap,yl=new WeakSet,ml=function(){this._elListbox.then((e=>{var t;this.multiple?this.value=e.selection.map((e=>e.value)):(this.value=null==(t=e.selection[0])?void 0:t.value,this.open=!1,setTimeout((()=>{var e;return null==(e=this._elTriggerBtn)?void 0:e.focus()}),0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}))},wl=new WeakSet,xl=function(){this.addEventListener("blur",nt(this,Cl)),this.addEventListener("gds-blur",nt(this,Cl)),this.addEventListener("keydown",nt(this,$l))},kl=new WeakSet,_l=function(){this.removeEventListener("blur",nt(this,Cl)),this.removeEventListener("gds-blur",nt(this,Cl)),this.removeEventListener("keydown",nt(this,$l))},Cl=new WeakMap,$l=new WeakMap,Sl.styles=[Yt,El],Sl.shadowRootOptions={mode:"open",delegatesFocus:!0},et([Pe()],Sl.prototype,"label",2),et([Pe({type:Boolean,reflect:!0})],Sl.prototype,"open",2),et([Pe({type:Boolean,reflect:!0})],Sl.prototype,"searchable",2),et([Pe({type:Boolean,reflect:!0})],Sl.prototype,"multiple",2),et([Pe()],Sl.prototype,"compareWith",2),et([Pe()],Sl.prototype,"searchFilter",2),et([Pe({type:Boolean,attribute:"sync-popover-width"})],Sl.prototype,"syncPopoverWidth",2),et([Pe({type:Number,attribute:"max-height"})],Sl.prototype,"maxHeight",2),et([Pe()],Sl.prototype,"size",2),et([Pe({type:Boolean,attribute:"hide-label"})],Sl.prototype,"hideLabel",2),et([Pe()],Sl.prototype,"disableMobileStyles",2),et([He("#trigger")],Sl.prototype,"_elTriggerBtn",2),et([Re("#listbox")],Sl.prototype,"_elListbox",2),et([He("#searchinput")],Sl.prototype,"_elSearchInput",2),et([br({attributes:!0,childList:!0,subtree:!0,characterData:!0})],Sl.prototype,"_handleLightDOMChange",1),et([vr("value")],Sl.prototype,"_handleValueChange",1),et([vr("open")],Sl.prototype,"_onOpenChange",1),Sl=et([lt("gds-dropdown")],Sl);var Al,Tl,Ml,Dl,Ll,zl=ve`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`,Fl=class extends qt{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,rt(this,Al,ir()),rt(this,Tl,(e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach((e=>{e!==t&&(e.selected=!1)}))),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))})),new Zn(this)}get navigableItems(){return this.visibleOptionElements}get options(){return nt(this,Al).value&&Gn(nt(this,Al).value).assignedElements().filter((e=>!e.hasAttribute("isplaceholder")&&"gds-option"===e.gdsElementName))||[]}get visibleOptionElements(){return this.options.filter((e=>!e.hidden))}get visibleSelectedOptionElements(){return this.options.filter((e=>e.selected&&!e.hidden))}get selection(){return this.options.filter((e=>e.selected))}set selection(e){this.options.forEach((t=>{t.selected=e.some((e=>this.compareWith(e,t.value)))}))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),ln.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",nt(this,Tl))}focus(){var e;null==(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])||e.focus()}render(){return ut`<slot ${lr(nt(this,Al))}></slot>`}_rerenderOptions(){this.options.forEach((e=>{e.requestUpdate()}))}};Al=new WeakMap,Tl=new WeakMap,Fl.styles=zl,et([Pe({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],Fl.prototype,"multiple",2),et([Pe()],Fl.prototype,"compareWith",2),et([vr("multiple")],Fl.prototype,"_rerenderOptions",1),Fl=et([lt("gds-listbox")],Fl);var Wl=class extends(ur(qt)){constructor(){super(),rt(this,Dl),rt(this,Ml,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",st(this,Dl,Ll)),this.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),st(this,Dl,Ll).call(this,e))}))}get hidden(){return nt(this,Ml)}set hidden(e){this.isPlaceholder||(ot(this,Ml,"true"===e||!0===e),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(ot(this,Ml,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then((()=>ln.instance.apply(this,"gds-option")))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(ot(this,Ml,!0),this.setAttribute("aria-hidden","true")):(ot(this,Ml,!1),this.setAttribute("aria-hidden","false"))}render(){var e;const t=null==(e=this.parentElement)?void 0:e.multiple,r=ut`
      <span class="checkbox ${Hn({checked:this.selected})}">
        ${this.selected?ut`<gds-icon-checkmark stroke="4"></gds-icon-checkmark>`:""}
      </span>
    `;return t||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),ut`<div>${ms(t,(()=>r))} <slot></slot></div>`}};Ml=new WeakMap,Dl=new WeakSet,Ll=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))},Wl.styles=[Yt,pr],et([Pe()],Wl.prototype,"value",2),et([Pe({attribute:"aria-hidden",reflect:!0})],Wl.prototype,"hidden",1),et([Pe({attribute:"aria-selected",reflect:!0})],Wl.prototype,"selected",2),et([Pe({type:Boolean,reflect:!0})],Wl.prototype,"isPlaceholder",2),et([vr("isplaceholder")],Wl.prototype,"_handlePlaceholderStatusChange",1),Wl=et([lt("gds-option")],Wl);var Ol=class extends rs{};Ol._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ol._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>',Ol._name="chevron-bottom",Ol=et([lt("gds-icon-chevron-bottom")],Ol);var Pl,jl,Vl,Hl,Nl,Rl,Bl,Il,Ul,Zl,Gl,Yl,ql,Kl,Xl,Jl,Ql,ec,tc=class extends rs{};tc._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',tc._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99454C22.2979 3.40464 22.4157 4.18729 22.0056 4.74263L10.0056 20.9926C9.80433 21.2652 9.50107 21.4443 9.16524 21.4891C8.82942 21.5339 8.4898 21.4404 8.22417 21.2301L2.22417 16.4801C1.6829 16.0516 1.59149 15.2655 2.01999 14.7242C2.4485 14.1829 3.23466 14.0915 3.77593 14.52L8.76241 18.4677L19.9945 3.25753C20.4046 2.70218 21.1873 2.58444 21.7426 2.99454Z" fill="currentColor"/>',tc._name="checkmark",tc=et([lt("gds-icon-checkmark")],tc);var nc=class extends lit_element_r{constructor(){super(...arguments),rt(this,Ul),rt(this,Gl),rt(this,ql),rt(this,Xl),rt(this,Ql),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=st(this,ql,Kl).call(this,this.value,this.length),rt(this,Pl,""),rt(this,jl,(()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.min:(new Date).getFullYear()-1),this.value=st(this,Xl,Jl).call(this,e+1),st(this,Gl,Yl).call(this)})),rt(this,Vl,(()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.max:(new Date).getFullYear()+1),this.value=st(this,Xl,Jl).call(this,e-1),st(this,Gl,Yl).call(this)})),rt(this,Hl,(e=>{e.stopPropagation(),e.preventDefault(),this.focus()})),rt(this,Nl,(()=>{st(this,Ql,ec).call(this)})),rt(this,Rl,(()=>{""!==nt(this,Pl)&&(st(this,Ql,ec).call(this),this.value=st(this,Xl,Jl).call(this,parseInt(this.value.toString())),st(this,Gl,Yl).call(this))})),rt(this,Bl,(e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?nt(this,Vl).call(this):nt(this,jl).call(this)})),rt(this,Il,(e=>{let t=!1;if("ArrowUp"===e.key)nt(this,jl).call(this),t=!0;else if("ArrowDown"===e.key)nt(this,Vl).call(this),t=!0;else{const r=parseInt(e.key);isNaN(r)||(nt(this,Pl).length<this.length&&(ot(this,Pl,nt(this,Pl)+r.toString()),this.value=parseInt(nt(this,Pl))),nt(this,Pl).length===this.length&&(this.value=st(this,Xl,Jl).call(this,this.value),st(this,Ql,ec).call(this),st(this,Ul,Zl).call(this),st(this,Gl,Yl).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())}))}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",nt(this,Bl)),this.addEventListener("keydown",nt(this,Il)),this.addEventListener("blur",nt(this,Rl)),this.addEventListener("focus",nt(this,Nl)),this.addEventListener("click",nt(this,Hl)),this.addEventListener("mousedown",nt(this,Hl))}focus(e){super.focus(e),nt(this,Nl).call(this)}render(){return ut`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=st(this,ql,Kl).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};function rc(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function oc(e,t){Ca(2,arguments);var r=$a(e),o=rc(t);return isNaN(o)?new Date(NaN):o?(r.setDate(r.getDate()+o),r):r}function sc(e,t){return Ca(2,arguments),oc(e,7*rc(t))}Pl=new WeakMap,jl=new WeakMap,Vl=new WeakMap,Hl=new WeakMap,Nl=new WeakMap,Rl=new WeakMap,Bl=new WeakMap,Il=new WeakMap,Ul=new WeakSet,Zl=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof nc){e.focus();break}e=e.nextElementSibling}},Gl=new WeakSet,Yl=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))},ql=new WeakSet,Kl=function(e,t){return String(e).padStart(t,"0")},Xl=new WeakSet,Jl=function(e){return Math.max(this.min,Math.min(this.max,e))},Ql=new WeakSet,ec=function(){ot(this,Pl,"")},nc.formAssociated=!0,et([Pe({type:Number})],nc.prototype,"value",2),et([Pe({type:Number})],nc.prototype,"length",2),et([Pe({type:Number,attribute:"aria-valuemin"})],nc.prototype,"min",2),et([Pe({type:Number,attribute:"aria-valuemax"})],nc.prototype,"max",2),et([je()],nc.prototype,"displayValue",2),et([vr("value")],nc.prototype,"_refreshDisplayValue",1),nc=et([lt("gds-date-part-spinner")],nc);var ic={};function ac(){return ic}function lc(e,t){var r,o,s,i,a,l,c,d;Ca(1,arguments);var h=ac(),u=rc(null!==(r=null!==(o=null!==(s=null!==(i=null==t?void 0:t.weekStartsOn)&&void 0!==i?i:null==t||null===(a=t.locale)||void 0===a||null===(l=a.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==s?s:h.weekStartsOn)&&void 0!==o?o:null===(c=h.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==r?r:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=$a(e),g=p.getDay(),f=(g<u?7:0)+g-u;return p.setDate(p.getDate()-f),p.setHours(0,0,0,0),p}function cc(e,t){var r;Ca(1,arguments);var o=e||{},s=$a(o.start),i=$a(o.end).getTime();if(!(s.getTime()<=i))throw new RangeError("Invalid interval");var a=[],l=s;l.setHours(0,0,0,0);var c=Number(null!==(r=null==t?void 0:t.step)&&void 0!==r?r:1);if(c<1||isNaN(c))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=i;)a.push($a(l)),l.setDate(l.getDate()+c),l.setHours(0,0,0,0);return a}function dc(e,t){const r=function(e){Ca(1,arguments);var t=$a(e);return t.setDate(1),t.setHours(0,0,0,0),t}(e),o=function(e){Ca(1,arguments);var t=$a(e),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}(e),s=function(e,t){Ca(1,arguments);var r=e||{},o=$a(r.start),s=$a(r.end),i=s.getTime();if(!(o.getTime()<=i))throw new RangeError("Invalid interval");var a=lc(o,t),l=lc(s,t);a.setHours(15),l.setHours(15),i=l.getTime();for(var c=[],d=a;d.getTime()<=i;)d.setHours(0),c.push($a(d)),(d=sc(d,1)).setHours(15);return c}({start:r,end:o},{weekStartsOn:1});for(;s.length<6;)s.push(oc(s[s.length-1],7));return ee`${t(s.map((e=>({days:cc({start:e,end:oc(e,6)})}))))}`}function hc(e,t){var r,o,s,i,a,l,c,d;Ca(1,arguments);var h=ac(),u=rc(null!==(r=null!==(o=null!==(s=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t||null===(a=t.locale)||void 0===a||null===(l=a.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==s?s:h.firstWeekContainsDate)&&void 0!==o?o:null===(c=h.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==r?r:1),p=function(e,t){var r,o,s,i,a,l,c,d;Ca(1,arguments);var h=$a(e),u=h.getFullYear(),p=ac(),g=rc(null!==(r=null!==(o=null!==(s=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t||null===(a=t.locale)||void 0===a||null===(l=a.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==s?s:p.firstWeekContainsDate)&&void 0!==o?o:null===(c=p.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==r?r:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=new Date(0);f.setFullYear(u+1,0,g),f.setHours(0,0,0,0);var v=lc(f,t),y=new Date(0);y.setFullYear(u,0,g),y.setHours(0,0,0,0);var m=lc(y,t);return h.getTime()>=v.getTime()?u+1:h.getTime()>=m.getTime()?u:u-1}(e,t),g=new Date(0);return g.setFullYear(p,0,u),g.setHours(0,0,0,0),lc(g,t)}function uc(e,t){Ca(2,arguments);var r=$a(e),o=rc(t);if(isNaN(o))return new Date(NaN);if(!o)return r;var s=r.getDate(),i=new Date(r.getTime());return i.setMonth(r.getMonth()+o+1,0),s>=i.getDate()?i:(r.setFullYear(i.getFullYear(),i.getMonth(),s),r)}var pc,gc,fc,bc,vc=ve`
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
`,yc=class extends qt{constructor(){super(...arguments),rt(this,pc),rt(this,fc),this.min=new Date((new Date).getFullYear()-10,0,1),this.max=new Date((new Date).getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=e=>e.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=function(e){Ca(1,arguments);var t=$a(e),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(0,0,0,0),t}(new Date(this.focusedYear,e,1)),r=new Date(this.focusedDate);r.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),r.setMonth(e),r.setHours(12,0,0,0),this.focusedDate=r}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){var t;return null==(t=this.shadowRoot)?void 0:t.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),ln.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",st(this,fc,bc)),window.addEventListener("lit-localize-status",(e=>{"ready"===e.detail.status&&(this._currentLocale=e.detail.readyLocale)}))}focus(){var e;super.focus(),null==(e=this._elFocusedCell)||e.focus()}render(){const e=new Date;return ee`<table role="grid" aria-label="${ys(this.label)}">
      ${ms(!this.hideDayNames,(()=>ee`<thead role="rowgroup">
            <tr role="row">
              ${ms(this.showWeekNumbers,(()=>ee`<th></th>`))}
              <th>${gn("Mon")}</th>
              <th>${gn("Tue")}</th>
              <th>${gn("Wed")}</th>
              <th>${gn("Thu")}</th>
              <th>${gn("Fri")}</th>
              <th>${gn("Sat")}</th>
              <th>${gn("Sun")}</th>
            </tr>
          </thead>`))}
      <tbody role="rowgroup">
        ${dc(this.focusedDate,(t=>ee`
            ${t.map((t=>ee`
                <tr role="row">
                  ${ms(this.showWeekNumbers,(()=>ee`<td class="week-number" scope="row">
                        ${function(e,t){Ca(1,arguments);var r=$a(e),o=lc(r,t).getTime()-hc(r,t).getTime();return Math.round(o/6048e5)+1}(t.days[0])}
                      </td>`))}
                  ${t.days.map((t=>{const r=this.customizedDates&&this.customizedDates.find((e=>Sa(e.date,t))),o=Je({color:"currentColor",disabled:Boolean(this.disabledDates&&this.disabledDates.some((e=>Sa(e,t))))},r),s=!function(e,t){Ca(2,arguments);var r=$a(e),o=$a(t);return r.getFullYear()===o.getFullYear()&&r.getMonth()===o.getMonth()}(this.focusedDate,t),i=(t<this.min||t>this.max)&&!Sa(t,this.min)&&!Sa(t,this.max),a=0===t.getDay()||6===t.getDay(),l=o.disabled||s||i||this.disabledWeekends&&a;return this.hideExtraneousDays&&s?ee`<td inert></td>`:ee`
                          <td
                            role="${ys(l?void 0:"gridcell")}"
                            class="${Hn({"custom-date":Boolean(r),disabled:Boolean(l),today:Sa(e,t)})}"
                            ?disabled=${l}
                            tabindex="${Sa(this.focusedDate,t)?0:-1}"
                            aria-selected="${this.value&&Sa(this.value,t)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(t)}"
                            @click=${()=>l?null:st(this,pc,gc).call(this,t)}
                            id="dateCell-${t.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${o?null==o?void 0:o.color:""}"
                              >${t.getDate()}</span
                            >

                            ${ms(o.indicator,(()=>ee`<span
                                  class="indicator-${null==o?void 0:o.indicator}"
                                  style="--_color: ${null==o?void 0:o.color}"
                                ></span>`))}
                          </td>
                        `}))}
                </tr>
              `))}
          `))}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};pc=new WeakSet,gc=function(e){const t=function(e,t){Ca(2,arguments);var r=$a(e),o=rc(t);return r.setHours(o),r}(e,12);this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:t,bubbles:!1,composed:!1}))},fc=new WeakSet,bc=function(e){var t;let r=!1,o=new Date(this.focusedDate);if("ArrowLeft"===e.key?(o=oc(this.focusedDate,-1),r=!0):"ArrowRight"===e.key?(o=oc(this.focusedDate,1),r=!0):"ArrowUp"===e.key?(o=oc(this.focusedDate,-7),r=!0):"ArrowDown"===e.key?(o=oc(this.focusedDate,7),r=!0):"Enter"===e.key||" "===e.key?((null==(t=this._elFocusedCell)?void 0:t.hasAttribute("disabled"))||st(this,pc,gc).call(this,this.focusedDate),r=!0):"Home"===e.key?(o=new Date(this.focusedYear,this.focusedMonth,1),r=!0):"End"===e.key?(o=new Date(this.focusedYear,this.focusedMonth+1,0),r=!0):"PageUp"===e.key?(o=function(e,t){return Ca(2,arguments),uc(e,-rc(t))}(this.focusedDate,1),r=!0):"PageDown"===e.key&&(o=uc(this.focusedDate,1),r=!0),o.getFullYear()>=this.min.getFullYear()&&o.getFullYear()<=this.max.getFullYear()){this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:o,bubbles:!1,composed:!1,cancelable:!0}))&&(this.focusedDate=o)}r&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then((()=>{var e;null==(e=this._elFocusedCell)||e.focus()})))},yc.styles=[Yt,vc],yc.shadowRootOptions={mode:"open",delegatesFocus:!0},et([Pe()],yc.prototype,"value",2),et([Pe({type:Date})],yc.prototype,"min",2),et([Pe({type:Date})],yc.prototype,"max",2),et([Pe()],yc.prototype,"focusedDate",2),et([Pe({type:Boolean,attribute:"disabled-weekends"})],yc.prototype,"disabledWeekends",2),et([Pe({type:Array,attribute:"disabled-dates"})],yc.prototype,"disabledDates",2),et([Pe({type:Number})],yc.prototype,"focusedMonth",1),et([Pe({type:Number})],yc.prototype,"focusedYear",1),et([Pe({type:Boolean})],yc.prototype,"showWeekNumbers",2),et([Pe({type:Boolean})],yc.prototype,"hideExtraneousDays",2),et([Pe({type:Boolean})],yc.prototype,"hideDayNames",2),et([Pe({attribute:!1})],yc.prototype,"customizedDates",2),et([Pe()],yc.prototype,"label",2),et([Pe({attribute:!1})],yc.prototype,"dateLabelTemplate",2),et([je()],yc.prototype,"_currentLocale",2),et([He('td[tabindex="0"]')],yc.prototype,"_elFocusedCell",2),et([vr("value")],yc.prototype,"_valueChanged",1),yc=et([lt("gds-calendar"),yn()],yc);var mc=class extends qt{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver((()=>{this.requestUpdate()})),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.formObserver)||e.disconnect()}render(){var e;const t=Array.from((null==(e=this.form)?void 0:e.elements)||[]).filter((e=>e.invalid));return ms(t.length>0,(()=>ut`<gds-card level="3" border="4xs/negative" border-radius="2xs" padding="m" color="error-text">
          <gds-flex gap="s" level=="3" color="negative">
            <gds-container>
              <gds-icon-triangle-exclamation></gds-icon-triangle-exclamation>
            </gds-container>
            <gds-container >
            ${gn(hn`There are ${t.length} errors to correct before you can continue:`)}
            <ul>
              ${t.map((e=>ut`<li><a href @click=${t=>{t.preventDefault(),e.focus()}}>${e.label}</li>`))}
            </ul>
          </gds-container>
        <gds-flex>
      </gds-card>`))}};mc.styles=ve`
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
  `,mc=et([lt("gds-form-summary")],mc);var wc,xc,kc,_c,Cc,$c,Ec,Sc,Ac,Tc,Mc,Dc,Lc,zc,Fc,Wc,Oc,Pc,jc,Vc=ve`
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
`,Hc=class extends qt{constructor(){super(...arguments),rt(this,_c),rt(this,$c),rt(this,Sc),rt(this,Tc),rt(this,Dc),rt(this,zc),rt(this,Wc),rt(this,Pc),this.placement="bottom",this.overlappedBy=[],this.target=[],this.label="Coachmark",this.computeVisibility=(e,t,r)=>r,this.targetElement=void 0,this._isVisible=!1,this._preventClose=!1,rt(this,wc,ir()),rt(this,xc,ir()),rt(this,kc,void 0)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",(()=>{setTimeout((()=>{st(this,Pc,jc).call(this),st(this,_c,Cc).call(this)}),400)})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&this._isVisible&&st(this,_c,Cc).call(this)}))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",st(this,_c,Cc)),document.removeEventListener("keydown",(e=>{"Escape"===e.key&&this._isVisible&&st(this,_c,Cc).call(this)}))}firstUpdated(){this.target.length>0&&(this.targetElement=st(this,$c,Ec).call(this,this.target),st(this,Pc,jc).call(this))}setPreventClose(e){this._preventClose=e}render(){return ut`${ms(this.target.length>0,(()=>ut`
        <div
          role="dialog"
          id="body"
          aria-label=${this.label}
          ${lr(nt(this,wc))}
        >
          <slot></slot>
          <div id="arrow" ${lr(nt(this,xc))}></div>
        </div>
      `),(()=>ut``))}`}};wc=new WeakMap,xc=new WeakMap,kc=new WeakMap,_c=new WeakSet,Cc=function(){var e,t;this._isVisible&&(this._isVisible=!1,null==(e=nt(this,wc).value)||e.remove(),null==(t=nt(this,kc))||t.call(this),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this._isVisible,reason:"closed"},bubbles:!1,composed:!1})))},$c=new WeakSet,Ec=function(e){let t,r=!1;for(const o of e)"shadowRoot"!==o?t?r&&t.shadowRoot?(t=t.shadowRoot.querySelector(o),r=!1):t=t.querySelector(o):t=document.querySelector(o):r=!0;return t},Sc=new WeakSet,Ac=function(e,t){if(e==t)return;const r=e.getBoundingClientRect(),o=t.getBoundingClientRect();return r.top<o.bottom&&r.bottom>o.top&&r.left<o.right&&r.right>o.left},Tc=new WeakSet,Mc=function(e){if(!e)return!1;for(const t of e){const e=document.querySelector(t);if(e&&"hidden"!==getComputedStyle(e).visibility&&st(this,Sc,Ac).call(this,this.targetElement,e))return!0}return!1},Dc=new WeakSet,Lc=function(e){const t=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,o=window.innerWidth||document.documentElement.clientWidth;return t.top+t.height<0||t.top>r||t.left+t.width<0||t.left>o},zc=new WeakSet,Fc=async function(e,t,r){return Do(e,t,{placement:this.placement,middleware:[Eo((()=>({mainAxis:16,alignmentAxis:16}))),{name:"detectOverflow",fn:async e=>({data:await $o(e,{boundary:document.body,rootBoundary:"document",altBoundary:!0,padding:{top:167,left:20}})})},So({padding:16}),Ao(),To(),Mo({padding:16,element:r})]})},Wc=new WeakSet,Oc=function(){if(!this.targetElement)return!1;const e=st(this,Dc,Lc).call(this,this.targetElement),t=this.targetElement.checkVisibility(),r=0!==this.overlappedBy.length&&st(this,Tc,Mc).call(this,this.overlappedBy);return this.computeVisibility(this,this.targetElement,!r&&!e&&t)},Pc=new WeakSet,jc=async function(){const e=this.targetElement,t=nt(this,wc).value,r=nt(this,xc).value;if(e&&t&&r)try{ot(this,kc,Co(e,t,(()=>{st(this,zc,Fc).call(this,e,t,r).then((e=>{let{x:o,y:s,middlewareData:i,placement:a}=e;if(st(this,Wc,Oc).call(this)){if(this._isVisible=!0,Object.assign(t.style,{visibility:"visible",opacity:1,left:`${o}px`,top:`${s}px`}),i.arrow){const{x:e,y:t}=i.arrow;r.removeAttribute("class"),r.classList.add("arrow-"+a),Object.assign(r.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:""})}}else this._isVisible=!1,Object.assign(t.style,{visibility:"hidden",opacity:0})}))})))}catch(o){console.warn("failed to render tooltips")}},Hc.styles=Vc,et([Pe()],Hc.prototype,"placement",2),et([Pe({attribute:!1})],Hc.prototype,"overlappedBy",2),et([Pe({attribute:!1})],Hc.prototype,"target",2),et([Pe()],Hc.prototype,"label",2),et([Pe({attribute:!1})],Hc.prototype,"computeVisibility",2),et([je()],Hc.prototype,"_isVisible",2),et([je()],Hc.prototype,"_preventClose",2),Hc=et([lt("gds-coachmark")],Hc);var Nc=ve`
  .button {
    box-shadow: var(--gds-shadow-m);
    position: fixed;
    inset: auto var(--gds-space-3xl) var(--gds-space-3xl) auto;
    block-size: calc(var(--_block-size) + var(--gds-space-xs));
  }
`,Rc=class extends Ds{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",Nc)}};let Bc,Ic,Uc,Zc,Gc,Yc,qc,Kc,Xc,Jc,Qc,ed,td,nd,rd,od,sd,id,ad,ld;function cd(e,t,r,o,s,i){function a(e,t,r){return function(o,s){return r&&r(o),e[t].call(o,s)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function c(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function d(e,t,r,o,s,i,l,d,h,u,p,g,f){function v(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var y,m=t[0],w=t[3],x=!d;if(!x){r||Array.isArray(m)||(m=[m]);var _={},C=[],$=3===s?"get":4===s||g?"set":"value";u?(p||g?_={get:hd((function(){return w(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=w,p||hd(_[$],o,2===s?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var E=e,S=m.length-1;S>=0;S-=r?2:1){var A=m[S],T=r?m[S-1]:void 0,D={},F={kind:["field","accessor","method","getter","setter","class"][s],name:o,metadata:i,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");c(t,"An initializer","be",!0),l.push(t)}).bind(null,D)};try{if(x)(y=c(A.call(T,E,F),"class decorators","return"))&&(E=y);else{var W,O;F.static=h,F.private=u,u?2===s?W=function(e){return v(e),_.value}:(s<4&&(W=a(_,"get",v)),3!==s&&(O=a(_,"set",v))):(W=function(e){return e[o]},(s<2||4===s)&&(O=function(e,t){e[o]=t}));var P=F.access={has:u?f.bind():function(e){return o in e}};if(W&&(P.get=W),O&&(P.set=O),E=A.call(T,g?{get:_.get,set:_.set}:_[$],F),g){if("object"==typeof E&&E)(y=c(E.get,"accessor.get"))&&(_.get=y),(y=c(E.set,"accessor.set"))&&(_.set=y),(y=c(E.init,"accessor.init"))&&C.push(y);else if(void 0!==E)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else c(E,(p?"field":"method")+" decorators","return")&&(p?C.push(E):_[$]=E)}}finally{D.v=!0}}return(p||g)&&d.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||x||(u?g?d.push(a(_,"get"),a(_,"set")):d.push(2===s?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),E}function h(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var u=i[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(u??null),g=function(e,t,r,o){var s,i,a=[],c=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},h=new Map;function u(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],v=g[2],y=g.length>3,m=16&f,w=!!(8&f),x=0==(f&=7),_=v+"/"+w;if(!x&&!y){var C=h.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+v);h.set(_,!(f>2)||f)}d(w?e:e.prototype,g,m,y?"#"+v:dd(v),f,o,w?i=i||[]:s=s||[],a,w,y,x,1===f,w&&y?c:r)}}return u(s),u(i),a}(e,t,s,p);return r.length||h(e,p),{e:g,get c(){var t=[];return r.length&&[h(d(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function dd(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function hd(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}et([Ft({valueTemplate:e=>e,selector:'[part="_button"]'})],Rc.prototype,"position",2),et([Ft({valueTemplate:e=>e})],Rc.prototype,"transform",2),et([Ft({valueTemplate:e=>e,selector:'[part="_button"]'})],Rc.prototype,"inset",2),Rc=et([lt("gds-fab")],Rc),Ic=[Fe("form-validation")];class FormValidationExample extends lit_element_r{static#e=(()=>[Uc,Bc]=cd(this,[],Ic,0,void 0,lit_element_r).c)();createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return ut`<gds-card border="4xs/base300" padding="m" border-radius="s">
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
    </gds-card>`}static#t=(()=>Bc())()}function ud(e,t,r,o,s,i){function a(e,t,r){return function(o,s){return r&&r(o),e[t].call(o,s)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function c(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function d(e,t,r,o,s,i,l,d,h,u,p,g,f){function v(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var y,m=t[0],w=t[3],x=!d;if(!x){r||Array.isArray(m)||(m=[m]);var _={},C=[],$=3===s?"get":4===s||g?"set":"value";u?(p||g?_={get:gd((function(){return w(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=w,p||gd(_[$],o,2===s?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var E=e,S=m.length-1;S>=0;S-=r?2:1){var A=m[S],T=r?m[S-1]:void 0,D={},F={kind:["field","accessor","method","getter","setter","class"][s],name:o,metadata:i,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");c(t,"An initializer","be",!0),l.push(t)}).bind(null,D)};try{if(x)(y=c(A.call(T,E,F),"class decorators","return"))&&(E=y);else{var W,O;F.static=h,F.private=u,u?2===s?W=function(e){return v(e),_.value}:(s<4&&(W=a(_,"get",v)),3!==s&&(O=a(_,"set",v))):(W=function(e){return e[o]},(s<2||4===s)&&(O=function(e,t){e[o]=t}));var P=F.access={has:u?f.bind():function(e){return o in e}};if(W&&(P.get=W),O&&(P.set=O),E=A.call(T,g?{get:_.get,set:_.set}:_[$],F),g){if("object"==typeof E&&E)(y=c(E.get,"accessor.get"))&&(_.get=y),(y=c(E.set,"accessor.set"))&&(_.set=y),(y=c(E.init,"accessor.init"))&&C.push(y);else if(void 0!==E)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else c(E,(p?"field":"method")+" decorators","return")&&(p?C.push(E):_[$]=E)}}finally{D.v=!0}}return(p||g)&&d.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||x||(u?g?d.push(a(_,"get"),a(_,"set")):d.push(2===s?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),E}function h(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var u=i[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(u??null),g=function(e,t,r,o){var s,i,a=[],c=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},h=new Map;function u(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],v=g[2],y=g.length>3,m=16&f,w=!!(8&f),x=0==(f&=7),_=v+"/"+w;if(!x&&!y){var C=h.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+v);h.set(_,!(f>2)||f)}d(w?e:e.prototype,g,m,y?"#"+v:pd(v),f,o,w?i=i||[]:s=s||[],a,w,y,x,1===f,w&&y?c:r)}}return u(s),u(i),a}(e,t,s,p);return r.length||h(e,p),{e:g,get c(){var t=[];return r.length&&[h(d(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function pd(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function gd(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}Yc=[Fe("datepicker-example")];class CalendarExample extends lit_element_r{static#e=(()=>({e:[Kc,Jc,Zc],c:[Qc,Gc]}=ud(this,[[qc,1,"disabledWeekends"],[Xc,1,"showWeekNumbers"]],Yc,0,void 0,lit_element_r)))();[(qc=je(),Xc=je(),"createRenderRoot")](){return this}connectedCallback(){super.connectedCallback()}#n=(()=>(Zc(this),Kc(this,!1)))();get disabledWeekends(){return this.#n}set disabledWeekends(e){this.#n=e}#r=(()=>Jc(this,!1))();get showWeekNumbers(){return this.#r}set showWeekNumbers(e){this.#r=e}render(){return ut` <div style="width:320px; margin: 8rem auto;">
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
    </div>`}static#t=(()=>Gc())()}function fd(e,t,r,o,s,i){function a(e,t,r){return function(o,s){return r&&r(o),e[t].call(o,s)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function c(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function d(e,t,r,o,s,i,l,d,h,u,p,g,f){function v(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var y,m=t[0],w=t[3],x=!d;if(!x){r||Array.isArray(m)||(m=[m]);var _={},C=[],$=3===s?"get":4===s||g?"set":"value";u?(p||g?_={get:vd((function(){return w(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=w,p||vd(_[$],o,2===s?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var E=e,S=m.length-1;S>=0;S-=r?2:1){var A=m[S],T=r?m[S-1]:void 0,D={},F={kind:["field","accessor","method","getter","setter","class"][s],name:o,metadata:i,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");c(t,"An initializer","be",!0),l.push(t)}).bind(null,D)};try{if(x)(y=c(A.call(T,E,F),"class decorators","return"))&&(E=y);else{var W,O;F.static=h,F.private=u,u?2===s?W=function(e){return v(e),_.value}:(s<4&&(W=a(_,"get",v)),3!==s&&(O=a(_,"set",v))):(W=function(e){return e[o]},(s<2||4===s)&&(O=function(e,t){e[o]=t}));var P=F.access={has:u?f.bind():function(e){return o in e}};if(W&&(P.get=W),O&&(P.set=O),E=A.call(T,g?{get:_.get,set:_.set}:_[$],F),g){if("object"==typeof E&&E)(y=c(E.get,"accessor.get"))&&(_.get=y),(y=c(E.set,"accessor.set"))&&(_.set=y),(y=c(E.init,"accessor.init"))&&C.push(y);else if(void 0!==E)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else c(E,(p?"field":"method")+" decorators","return")&&(p?C.push(E):_[$]=E)}}finally{D.v=!0}}return(p||g)&&d.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||x||(u?g?d.push(a(_,"get"),a(_,"set")):d.push(2===s?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),E}function h(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var u=i[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(u??null),g=function(e,t,r,o){var s,i,a=[],c=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},h=new Map;function u(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],v=g[2],y=g.length>3,m=16&f,w=!!(8&f),x=0==(f&=7),_=v+"/"+w;if(!x&&!y){var C=h.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+v);h.set(_,!(f>2)||f)}d(w?e:e.prototype,g,m,y?"#"+v:bd(v),f,o,w?i=i||[]:s=s||[],a,w,y,x,1===f,w&&y?c:r)}}return u(s),u(i),a}(e,t,s,p);return r.length||h(e,p),{e:g,get c(){var t=[];return r.length&&[h(d(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function bd(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function vd(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}const yd=`${(new Date).getFullYear()}-${(new Date).getMonth()+1}`;let md,wd,xd;nd=[Fe("calendar-example")];class app_calendar_element_CalendarExample extends lit_element_r{static#e=(()=>({e:[od,id,ld,ed],c:[md,td]}=fd(this,[[rd,1,"disabledWeekends"],[sd,1,"showWeekNumbers"],[ad,1,"showCustomizedDates"]],nd,0,void 0,lit_element_r)))();[(rd=je(),sd=je(),ad=je(),"createRenderRoot")](){return this}connectedCallback(){super.connectedCallback()}#n=(()=>(ed(this),od(this,!1)))();get disabledWeekends(){return this.#n}set disabledWeekends(e){this.#n=e}#r=(()=>id(this,!1))();get showWeekNumbers(){return this.#r}set showWeekNumbers(e){this.#r=e}#o=(()=>ld(this,!1))();get showCustomizedDates(){return this.#o}set showCustomizedDates(e){this.#o=e}#s=(()=>[{date:new Date(`${yd}-07`),indicator:"dot",color:"var(--intent-danger-background)"},{date:new Date(`${yd}-12`),indicator:"dot",color:"var(--intent-danger-background)"},{date:new Date(`${yd}-24`),indicator:"dot",color:"var(--intent-danger-background)"},{date:new Date(`${yd}-21`),indicator:"dot",disabled:!0}])();render(){return ut` <div style="width:320px; margin: 8rem auto;">
      <h3 style="margin-bottom: 2rem;">Standalone calendar</h3>
      <div class="card" style="padding: 0">
        <gds-calendar
          .disabledWeekends=${this.disabledWeekends}
          .showWeekNumbers=${this.showWeekNumbers}
          .customizedDates=${this.showCustomizedDates?this.#s:[]}
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
    </div>`}static#t=(()=>td())()}function kd(e,t,r,o,s,i){function a(e,t,r){return function(o,s){return r&&r(o),e[t].call(o,s)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function c(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function d(e,t,r,o,s,i,l,d,h,u,p,g,f){function v(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var y,m=t[0],w=t[3],x=!d;if(!x){r||Array.isArray(m)||(m=[m]);var _={},C=[],$=3===s?"get":4===s||g?"set":"value";u?(p||g?_={get:Cd((function(){return w(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=w,p||Cd(_[$],o,2===s?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var E=e,S=m.length-1;S>=0;S-=r?2:1){var A=m[S],T=r?m[S-1]:void 0,D={},F={kind:["field","accessor","method","getter","setter","class"][s],name:o,metadata:i,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");c(t,"An initializer","be",!0),l.push(t)}).bind(null,D)};try{if(x)(y=c(A.call(T,E,F),"class decorators","return"))&&(E=y);else{var W,O;F.static=h,F.private=u,u?2===s?W=function(e){return v(e),_.value}:(s<4&&(W=a(_,"get",v)),3!==s&&(O=a(_,"set",v))):(W=function(e){return e[o]},(s<2||4===s)&&(O=function(e,t){e[o]=t}));var P=F.access={has:u?f.bind():function(e){return o in e}};if(W&&(P.get=W),O&&(P.set=O),E=A.call(T,g?{get:_.get,set:_.set}:_[$],F),g){if("object"==typeof E&&E)(y=c(E.get,"accessor.get"))&&(_.get=y),(y=c(E.set,"accessor.set"))&&(_.set=y),(y=c(E.init,"accessor.init"))&&C.push(y);else if(void 0!==E)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else c(E,(p?"field":"method")+" decorators","return")&&(p?C.push(E):_[$]=E)}}finally{D.v=!0}}return(p||g)&&d.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||x||(u?g?d.push(a(_,"get"),a(_,"set")):d.push(2===s?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),E}function h(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var u=i[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(u??null),g=function(e,t,r,o){var s,i,a=[],c=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},h=new Map;function u(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],v=g[2],y=g.length>3,m=16&f,w=!!(8&f),x=0==(f&=7),_=v+"/"+w;if(!x&&!y){var C=h.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+v);h.set(_,!(f>2)||f)}d(w?e:e.prototype,g,m,y?"#"+v:_d(v),f,o,w?i=i||[]:s=s||[],a,w,y,x,1===f,w&&y?c:r)}}return u(s),u(i),a}(e,t,s,p);return r.length||h(e,p),{e:g,get c(){var t=[];return r.length&&[h(d(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function _d(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Cd(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}let $d,Ed,Sd,Ad;xd=[Fe("gds-login")];class CardExample extends lit_element_r{static#e=(()=>[$d,wd]=kd(this,[],xd,0,void 0,lit_element_r).c)();createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return ut`
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
    `}static#t=(()=>wd())()}function Td(e,t,r,o,s,i){function a(e,t,r){return function(o,s){return r&&r(o),e[t].call(o,s)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function c(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function d(e,t,r,o,s,i,l,d,h,u,p,g,f){function v(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var y,m=t[0],w=t[3],x=!d;if(!x){r||Array.isArray(m)||(m=[m]);var _={},C=[],$=3===s?"get":4===s||g?"set":"value";u?(p||g?_={get:Dd((function(){return w(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=w,p||Dd(_[$],o,2===s?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var E=e,S=m.length-1;S>=0;S-=r?2:1){var A=m[S],T=r?m[S-1]:void 0,D={},F={kind:["field","accessor","method","getter","setter","class"][s],name:o,metadata:i,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");c(t,"An initializer","be",!0),l.push(t)}).bind(null,D)};try{if(x)(y=c(A.call(T,E,F),"class decorators","return"))&&(E=y);else{var W,O;F.static=h,F.private=u,u?2===s?W=function(e){return v(e),_.value}:(s<4&&(W=a(_,"get",v)),3!==s&&(O=a(_,"set",v))):(W=function(e){return e[o]},(s<2||4===s)&&(O=function(e,t){e[o]=t}));var P=F.access={has:u?f.bind():function(e){return o in e}};if(W&&(P.get=W),O&&(P.set=O),E=A.call(T,g?{get:_.get,set:_.set}:_[$],F),g){if("object"==typeof E&&E)(y=c(E.get,"accessor.get"))&&(_.get=y),(y=c(E.set,"accessor.set"))&&(_.set=y),(y=c(E.init,"accessor.init"))&&C.push(y);else if(void 0!==E)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else c(E,(p?"field":"method")+" decorators","return")&&(p?C.push(E):_[$]=E)}}finally{D.v=!0}}return(p||g)&&d.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||x||(u?g?d.push(a(_,"get"),a(_,"set")):d.push(2===s?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),E}function h(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var u=i[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(u??null),g=function(e,t,r,o){var s,i,a=[],c=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},h=new Map;function u(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],v=g[2],y=g.length>3,m=16&f,w=!!(8&f),x=0==(f&=7),_=v+"/"+w;if(!x&&!y){var C=h.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+v);h.set(_,!(f>2)||f)}d(w?e:e.prototype,g,m,y?"#"+v:Md(v),f,o,w?i=i||[]:s=s||[],a,w,y,x,1===f,w&&y?c:r)}}return u(s),u(i),a}(e,t,s,p);return r.length||h(e,p),{e:g,get c(){var t=[];return r.length&&[h(d(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function Md(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Dd(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}Sd=[Fe("gds-onboarding")];class onboarding_onboarding_element_CardExample extends lit_element_r{static#e=(()=>[Ad,Ed]=Td(this,[],Sd,0,void 0,lit_element_r).c)();createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return ut` <gds-flex gap="lg">
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
    </gds-flex>`}static#t=(()=>Ed())()}var Ld=class extends rs{};Ld._regularSVG='<path d="M7.75 20.75L3.75 16.75L7.75 12.75M16.25 11.25L20.25 7.25L16.25 3.25M5 16.75H20.25M3.75 7.25H19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ld._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7197 2.71967C16.0126 2.42678 16.4874 2.42678 16.7803 2.71967L20.7803 6.71967C21.0732 7.01256 21.0732 7.48744 20.7803 7.78033L16.7803 11.7803C16.4874 12.0732 16.0126 12.0732 15.7197 11.7803C15.4268 11.4874 15.4268 11.0126 15.7197 10.7197L18.4393 8H3.75C3.33579 8 3 7.66421 3 7.25C3 6.83579 3.33579 6.5 3.75 6.5H18.4393L15.7197 3.78033C15.4268 3.48744 15.4268 3.01256 15.7197 2.71967ZM8.28033 12.2197C8.57322 12.5126 8.57322 12.9874 8.28033 13.2803L5.56066 16H20.25C20.6642 16 21 16.3358 21 16.75C21 17.1642 20.6642 17.5 20.25 17.5H5.56066L8.28033 20.2197C8.57322 20.5126 8.57322 20.9874 8.28033 21.2803C7.98744 21.5732 7.51256 21.5732 7.21967 21.2803L3.21967 17.2803C2.92678 16.9874 2.92678 16.5126 3.21967 16.2197L7.21967 12.2197C7.51256 11.9268 7.98744 11.9268 8.28033 12.2197Z" fill="currentColor"/>',Ld._name="arrow-left-right",Ld=et([lt("gds-icon-arrow-left-right")],Ld);var zd=class extends rs{};zd._regularSVG='<path d="M12 3.75V12M12 12V20.25M12 12H3.75M12 12H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',zd._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H12.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H11.25V3.75C11.25 3.33579 11.5858 3 12 3Z" fill="currentColor"/>',zd._name="plus-large",zd=et([lt("gds-icon-plus-large")],zd);var Fd=class extends rs{};let Wd,Od,Pd,jd,Vd,Hd,Nd,Rd,Bd,Id,Ud;function Zd(e,t,r,o,s,i){function a(e,t,r){return function(o,s){return r&&r(o),e[t].call(o,s)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function c(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function d(e,t,r,o,s,i,l,d,h,u,p,g,f){function v(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var y,m=t[0],w=t[3],x=!d;if(!x){r||Array.isArray(m)||(m=[m]);var _={},C=[],$=3===s?"get":4===s||g?"set":"value";u?(p||g?_={get:Yd((function(){return w(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=w,p||Yd(_[$],o,2===s?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var E=e,S=m.length-1;S>=0;S-=r?2:1){var A=m[S],T=r?m[S-1]:void 0,D={},F={kind:["field","accessor","method","getter","setter","class"][s],name:o,metadata:i,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");c(t,"An initializer","be",!0),l.push(t)}).bind(null,D)};try{if(x)(y=c(A.call(T,E,F),"class decorators","return"))&&(E=y);else{var W,O;F.static=h,F.private=u,u?2===s?W=function(e){return v(e),_.value}:(s<4&&(W=a(_,"get",v)),3!==s&&(O=a(_,"set",v))):(W=function(e){return e[o]},(s<2||4===s)&&(O=function(e,t){e[o]=t}));var P=F.access={has:u?f.bind():function(e){return o in e}};if(W&&(P.get=W),O&&(P.set=O),E=A.call(T,g?{get:_.get,set:_.set}:_[$],F),g){if("object"==typeof E&&E)(y=c(E.get,"accessor.get"))&&(_.get=y),(y=c(E.set,"accessor.set"))&&(_.set=y),(y=c(E.init,"accessor.init"))&&C.push(y);else if(void 0!==E)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else c(E,(p?"field":"method")+" decorators","return")&&(p?C.push(E):_[$]=E)}}finally{D.v=!0}}return(p||g)&&d.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||x||(u?g?d.push(a(_,"get"),a(_,"set")):d.push(2===s?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),E}function h(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var u=i[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(u??null),g=function(e,t,r,o){var s,i,a=[],c=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},h=new Map;function u(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],v=g[2],y=g.length>3,m=16&f,w=!!(8&f),x=0==(f&=7),_=v+"/"+w;if(!x&&!y){var C=h.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+v);h.set(_,!(f>2)||f)}d(w?e:e.prototype,g,m,y?"#"+v:Gd(v),f,o,w?i=i||[]:s=s||[],a,w,y,x,1===f,w&&y?c:r)}}return u(s),u(i),a}(e,t,s,p);return r.length||h(e,p),{e:g,get c(){var t=[];return r.length&&[h(d(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function Gd(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Yd(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}Fd._regularSVG='<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" fill="currentColor"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" fill="currentColor"/><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Fd._solidSVG='<path d="M3.75 10.25C2.7835 10.25 2 11.0335 2 12C2 12.9665 2.7835 13.75 3.75 13.75C4.7165 13.75 5.5 12.9665 5.5 12C5.5 11.0335 4.7165 10.25 3.75 10.25Z" fill="currentColor"/><path d="M12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25Z" fill="currentColor"/><path d="M20.25 10.25C19.2835 10.25 18.5 11.0335 18.5 12C18.5 12.9665 19.2835 13.75 20.25 13.75C21.2165 13.75 22 12.9665 22 12C22 11.0335 21.2165 10.25 20.25 10.25Z" fill="currentColor"/>',Fd._name="dot-grid-one-horizontal",Fd=et([lt("gds-icon-dot-grid-one-horizontal")],Fd),Od=[Fe("gds-jit")];class GdsJit extends lit_element_r{static#e=(()=>[Pd,Wd]=Zd(this,[],Od,0,void 0,lit_element_r).c)();connectedCallback(){super.connectedCallback()}render(){return ut`
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
    `}static#t=(()=>Wd())()}function qd(e,t,r,o,s,i){function a(e,t,r){return function(o,s){return r&&r(o),e[t].call(o,s)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function c(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function d(e,t,r,o,s,i,l,d,h,u,p,g,f){function v(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var y,m=t[0],w=t[3],x=!d;if(!x){r||Array.isArray(m)||(m=[m]);var _={},C=[],$=3===s?"get":4===s||g?"set":"value";u?(p||g?_={get:Xd((function(){return w(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=w,p||Xd(_[$],o,2===s?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var E=e,S=m.length-1;S>=0;S-=r?2:1){var A=m[S],T=r?m[S-1]:void 0,D={},F={kind:["field","accessor","method","getter","setter","class"][s],name:o,metadata:i,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");c(t,"An initializer","be",!0),l.push(t)}).bind(null,D)};try{if(x)(y=c(A.call(T,E,F),"class decorators","return"))&&(E=y);else{var W,O;F.static=h,F.private=u,u?2===s?W=function(e){return v(e),_.value}:(s<4&&(W=a(_,"get",v)),3!==s&&(O=a(_,"set",v))):(W=function(e){return e[o]},(s<2||4===s)&&(O=function(e,t){e[o]=t}));var P=F.access={has:u?f.bind():function(e){return o in e}};if(W&&(P.get=W),O&&(P.set=O),E=A.call(T,g?{get:_.get,set:_.set}:_[$],F),g){if("object"==typeof E&&E)(y=c(E.get,"accessor.get"))&&(_.get=y),(y=c(E.set,"accessor.set"))&&(_.set=y),(y=c(E.init,"accessor.init"))&&C.push(y);else if(void 0!==E)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else c(E,(p?"field":"method")+" decorators","return")&&(p?C.push(E):_[$]=E)}}finally{D.v=!0}}return(p||g)&&d.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||x||(u?g?d.push(a(_,"get"),a(_,"set")):d.push(2===s?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),E}function h(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var u=i[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(u??null),g=function(e,t,r,o){var s,i,a=[],c=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},h=new Map;function u(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],v=g[2],y=g.length>3,m=16&f,w=!!(8&f),x=0==(f&=7),_=v+"/"+w;if(!x&&!y){var C=h.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+v);h.set(_,!(f>2)||f)}d(w?e:e.prototype,g,m,y?"#"+v:Kd(v),f,o,w?i=i||[]:s=s||[],a,w,y,x,1===f,w&&y?c:r)}}return u(s),u(i),a}(e,t,s,p);return r.length||h(e,p),{e:g,get c(){var t=[];return r.length&&[h(d(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function Kd(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Xd(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}Vd=[Fe("gds-dashboard")];class dashboard_dashboard_element_CardExample extends lit_element_r{static#e=(()=>[Hd,jd]=qd(this,[],Vd,0,void 0,lit_element_r).c)();createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return ut`
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
          <gds-card>[CONTENT GOES HERE]</gds-card>
          <gds-card>[CONTENT GOES HERE]</gds-card>
          <gds-jit></gds-jit>
        </gds-grid>
      </gds-flex>
    `}static#t=(()=>jd())()}function Jd(e,t,r,o,s,i){function a(e,t,r){return function(o,s){return r&&r(o),e[t].call(o,s)}}function l(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function c(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function d(e,t,r,o,s,i,l,d,h,u,p,g,f){function v(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var y,m=t[0],w=t[3],x=!d;if(!x){r||Array.isArray(m)||(m=[m]);var _={},C=[],$=3===s?"get":4===s||g?"set":"value";u?(p||g?_={get:eh((function(){return w(this)}),o,"get"),set:function(e){t[4](this,e)}}:_[$]=w,p||eh(_[$],o,2===s?"":$)):p||(_=Object.getOwnPropertyDescriptor(e,o))}for(var E=e,S=m.length-1;S>=0;S-=r?2:1){var A=m[S],T=r?m[S-1]:void 0,D={},F={kind:["field","accessor","method","getter","setter","class"][s],name:o,metadata:i,addInitializer:(function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");c(t,"An initializer","be",!0),l.push(t)}).bind(null,D)};try{if(x)(y=c(A.call(T,E,F),"class decorators","return"))&&(E=y);else{var W,O;F.static=h,F.private=u,u?2===s?W=function(e){return v(e),_.value}:(s<4&&(W=a(_,"get",v)),3!==s&&(O=a(_,"set",v))):(W=function(e){return e[o]},(s<2||4===s)&&(O=function(e,t){e[o]=t}));var P=F.access={has:u?f.bind():function(e){return o in e}};if(W&&(P.get=W),O&&(P.set=O),E=A.call(T,g?{get:_.get,set:_.set}:_[$],F),g){if("object"==typeof E&&E)(y=c(E.get,"accessor.get"))&&(_.get=y),(y=c(E.set,"accessor.set"))&&(_.set=y),(y=c(E.init,"accessor.init"))&&C.push(y);else if(void 0!==E)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else c(E,(p?"field":"method")+" decorators","return")&&(p?C.push(E):_[$]=E)}}finally{D.v=!0}}return(p||g)&&d.push((function(e,t){for(var r=C.length-1;r>=0;r--)t=C[r].call(e,t);return t})),p||x||(u?g?d.push(a(_,"get"),a(_,"set")):d.push(2===s?_[$]:a.call.bind(_[$])):Object.defineProperty(e,o,_)),E}function h(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var u=i[Symbol.metadata||Symbol.for("Symbol.metadata")];var p=Object.create(u??null),g=function(e,t,r,o){var s,i,a=[],c=function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e},h=new Map;function u(e){e&&a.push(l.bind(null,e))}for(var p=0;p<t.length;p++){var g=t[p];if(Array.isArray(g)){var f=g[1],v=g[2],y=g.length>3,m=16&f,w=!!(8&f),x=0==(f&=7),_=v+"/"+w;if(!x&&!y){var C=h.get(_);if(!0===C||3===C&&4!==f||4===C&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+v);h.set(_,!(f>2)||f)}d(w?e:e.prototype,g,m,y?"#"+v:Qd(v),f,o,w?i=i||[]:s=s||[],a,w,y,x,1===f,w&&y?c:r)}}return u(s),u(i),a}(e,t,s,p);return r.length||h(e,p),{e:g,get c(){var t=[];return r.length&&[h(d(e,[r],o,e.name,5,p,t),p),l.bind(null,t,e)]}}}function Qd(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function eh(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}class AppElement extends lit_element_r{static#e=(()=>[Bd,Ud,Nd]=Jd(this,[[Rd,1,"popoverOpen"],[Id,1,"currentView"]],[],0,void 0,lit_element_r).e)();static[(Rd=Pe(),Id=je(),"styles")]=(()=>ve`
    :host {
      --gds-test-color: red;
    }
  `)();createRenderRoot(){return this}#n=(()=>(Nd(this),Bd(this,!1)))();get popoverOpen(){return this.#n}set popoverOpen(e){this.#n=e}#r=(()=>Ud(this,"dashboard"))();get currentView(){return this.#r}set currentView(e){this.#r=e}connectedCallback(){super.connectedCallback(),this.addEventListener("view-change",this.handleViewChange),document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){this.removeEventListener("view-change",this.handleViewChange),document.removeEventListener("keydown",this.handleKeyDown),super.disconnectedCallback()}handleViewChange(e){this.currentView=e.detail.view}handleKeyDown=e=>{if("\\"===e.key){const e=this.querySelector('[gds-element="gds-theme"]');if(e){const t=e.getAttribute("color-scheme");e.setAttribute("color-scheme","light"===t?"dark":"light")}}};render(){return ut`
      <gds-theme color-scheme="light">
        <gds-header></gds-header>
        <gds-container padding="s{0} m{s} l{4xl}">
          ${Be(this.currentView,[["onboarding",()=>ut`<gds-onboarding></gds-onboarding>`],["dashboard",()=>ut`<gds-dashboard></gds-dashboard>`],["login",()=>ut`<gds-login></gds-login>`],["form-validation",()=>ut`<form-validation></form-validation>`],["datepicker",()=>ut`<datepicker-example></datepicker-example>`],["calendar",()=>ut`<calendar-example></calendar-example>`]],(()=>ut`No view selected`))}
        </gds-container>
      </gds-theme>
    `}}customElements.define("sebgroup-root",AppElement)},326:()=>{var e;!function(e){!function(){var t="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),r=o(e);function o(e,t){return function(r,o){"function"!=typeof e[r]&&Object.defineProperty(e,r,{configurable:!0,writable:!0,value:o}),t&&t(r,o)}}void 0===t.Reflect?t.Reflect=e:r=o(t.Reflect,r),function(e){var t=Object.prototype.hasOwnProperty,r="function"==typeof Symbol,o=r&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",s=r&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",i="function"==typeof Object.create,a={__proto__:[]}instanceof Array,l=!i&&!a,c={create:i?function(){return pe(Object.create(null))}:a?function(){return pe({__proto__:null})}:function(){return pe({})},has:l?function(e,r){return t.call(e,r)}:function(e,t){return t in e},get:l?function(e,r){return t.call(e,r)?e[r]:void 0}:function(e,t){return e[t]}},d=Object.getPrototypeOf(Function),h="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,u=h||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?de():Map,p=h||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?he():Set,g=new(h||"function"!=typeof WeakMap?ue():WeakMap);function f(e,t,r,o){if(U(r)){if(!ee(e))throw new TypeError;if(!ne(t))throw new TypeError;return S(e,t)}if(!ee(e))throw new TypeError;if(!Y(t))throw new TypeError;if(!Y(o)&&!U(o)&&!Z(o))throw new TypeError;return Z(o)&&(o=void 0),A(e,t,r=Q(r),o)}function v(e,t){function r(r,o){if(!Y(r))throw new TypeError;if(!U(o)&&!re(o))throw new TypeError;P(e,t,r,o)}return r}function y(e,t,r,o){if(!Y(r))throw new TypeError;return U(o)||(o=Q(o)),P(e,t,r,o)}function m(e,t,r){if(!Y(t))throw new TypeError;return U(r)||(r=Q(r)),D(e,t,r)}function w(e,t,r){if(!Y(t))throw new TypeError;return U(r)||(r=Q(r)),F(e,t,r)}function x(e,t,r){if(!Y(t))throw new TypeError;return U(r)||(r=Q(r)),W(e,t,r)}function _(e,t,r){if(!Y(t))throw new TypeError;return U(r)||(r=Q(r)),O(e,t,r)}function C(e,t){if(!Y(e))throw new TypeError;return U(t)||(t=Q(t)),j(e,t)}function $(e,t){if(!Y(e))throw new TypeError;return U(t)||(t=Q(t)),V(e,t)}function E(e,t,r){if(!Y(t))throw new TypeError;U(r)||(r=Q(r));var o=T(t,r,!1);if(U(o))return!1;if(!o.delete(e))return!1;if(o.size>0)return!0;var s=g.get(t);return s.delete(r),s.size>0||g.delete(t),!0}function S(e,t){for(var r=e.length-1;r>=0;--r){var o=(0,e[r])(t);if(!U(o)&&!Z(o)){if(!ne(o))throw new TypeError;t=o}}return t}function A(e,t,r,o){for(var s=e.length-1;s>=0;--s){var i=(0,e[s])(t,r,o);if(!U(i)&&!Z(i)){if(!Y(i))throw new TypeError;o=i}}return o}function T(e,t,r){var o=g.get(e);if(U(o)){if(!r)return;o=new u,g.set(e,o)}var s=o.get(t);if(U(s)){if(!r)return;s=new u,o.set(t,s)}return s}function D(e,t,r){if(F(e,t,r))return!0;var o=ce(t);return!Z(o)&&D(e,o,r)}function F(e,t,r){var o=T(t,r,!1);return!U(o)&&X(o.has(e))}function W(e,t,r){if(F(e,t,r))return O(e,t,r);var o=ce(t);return Z(o)?void 0:W(e,o,r)}function O(e,t,r){var o=T(t,r,!1);if(!U(o))return o.get(e)}function P(e,t,r,o){T(r,o,!0).set(e,t)}function j(e,t){var r=V(e,t),o=ce(e);if(null===o)return r;var s=j(o,t);if(s.length<=0)return r;if(r.length<=0)return s;for(var i=new p,a=[],l=0,c=r;l<c.length;l++){var d=c[l];i.has(d)||(i.add(d),a.push(d))}for(var h=0,u=s;h<u.length;h++){d=u[h];i.has(d)||(i.add(d),a.push(d))}return a}function V(e,t){var r=[],o=T(e,t,!1);if(U(o))return r;for(var s=se(o.keys()),i=0;;){var a=ae(s);if(!a)return r.length=i,r;var l=ie(a);try{r[i]=l}catch(c){try{le(s)}finally{throw c}}i++}}function B(e){if(null===e)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===e?1:6;default:return 6}}function U(e){return void 0===e}function Z(e){return null===e}function G(e){return"symbol"==typeof e}function Y(e){return"object"==typeof e?null!==e:"function"==typeof e}function q(e,t){switch(B(e)){case 0:case 1:case 2:case 3:case 4:case 5:return e}var r=3===t?"string":5===t?"number":"default",s=oe(e,o);if(void 0!==s){var i=s.call(e,r);if(Y(i))throw new TypeError;return i}return K(e,"default"===r?"number":r)}function K(e,t){if("string"===t){var r=e.toString;if(te(r))if(!Y(s=r.call(e)))return s;if(te(o=e.valueOf))if(!Y(s=o.call(e)))return s}else{var o;if(te(o=e.valueOf))if(!Y(s=o.call(e)))return s;var s,i=e.toString;if(te(i))if(!Y(s=i.call(e)))return s}throw new TypeError}function X(e){return!!e}function J(e){return""+e}function Q(e){var t=q(e,3);return G(t)?t:J(t)}function ee(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:"[object Array]"===Object.prototype.toString.call(e)}function te(e){return"function"==typeof e}function ne(e){return"function"==typeof e}function re(e){switch(B(e)){case 3:case 4:return!0;default:return!1}}function oe(e,t){var r=e[t];if(null!=r){if(!te(r))throw new TypeError;return r}}function se(e){var t=oe(e,s);if(!te(t))throw new TypeError;var r=t.call(e);if(!Y(r))throw new TypeError;return r}function ie(e){return e.value}function ae(e){var t=e.next();return!t.done&&t}function le(e){var t=e.return;t&&t.call(e)}function ce(e){var t=Object.getPrototypeOf(e);if("function"!=typeof e||e===d)return t;if(t!==d)return t;var r=e.prototype,o=r&&Object.getPrototypeOf(r);if(null==o||o===Object.prototype)return t;var s=o.constructor;return"function"!=typeof s||s===e?t:s}function de(){var e={},t=[],r=function(){function e(e,t,r){this._index=0,this._keys=e,this._values=t,this._selector=r}return e.prototype["@@iterator"]=function(){return this},e.prototype[s]=function(){return this},e.prototype.next=function(){var e=this._index;if(e>=0&&e<this._keys.length){var r=this._selector(this._keys[e],this._values[e]);return e+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},e.prototype.throw=function(e){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),e},e.prototype.return=function(e){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:e,done:!0}},e}();return function(){function t(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(t.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return this._find(e,!1)>=0},t.prototype.get=function(e){var t=this._find(e,!1);return t>=0?this._values[t]:void 0},t.prototype.set=function(e,t){var r=this._find(e,!0);return this._values[r]=t,this},t.prototype.delete=function(t){var r=this._find(t,!1);if(r>=0){for(var o=this._keys.length,s=r+1;s<o;s++)this._keys[s-1]=this._keys[s],this._values[s-1]=this._values[s];return this._keys.length--,this._values.length--,t===this._cacheKey&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},t.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},t.prototype.keys=function(){return new r(this._keys,this._values,o)},t.prototype.values=function(){return new r(this._keys,this._values,i)},t.prototype.entries=function(){return new r(this._keys,this._values,a)},t.prototype["@@iterator"]=function(){return this.entries()},t.prototype[s]=function(){return this.entries()},t.prototype._find=function(e,t){return this._cacheKey!==e&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=e)),this._cacheIndex<0&&t&&(this._cacheIndex=this._keys.length,this._keys.push(e),this._values.push(void 0)),this._cacheIndex},t}();function o(e,t){return e}function i(e,t){return t}function a(e,t){return[e,t]}}function he(){return function(){function e(){this._map=new u}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(e){return this._map.has(e)},e.prototype.add=function(e){return this._map.set(e,e),this},e.prototype.delete=function(e){return this._map.delete(e)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[s]=function(){return this.keys()},e}()}function ue(){var e=16,r=c.create(),o=s();return function(){function e(){this._key=s()}return e.prototype.has=function(e){var t=i(e,!1);return void 0!==t&&c.has(t,this._key)},e.prototype.get=function(e){var t=i(e,!1);return void 0!==t?c.get(t,this._key):void 0},e.prototype.set=function(e,t){return i(e,!0)[this._key]=t,this},e.prototype.delete=function(e){var t=i(e,!1);return void 0!==t&&delete t[this._key]},e.prototype.clear=function(){this._key=s()},e}();function s(){var e;do{e="@@WeakMap@@"+d()}while(c.has(r,e));return r[e]=!0,e}function i(e,r){if(!t.call(e,o)){if(!r)return;Object.defineProperty(e,o,{value:c.create()})}return e[o]}function a(e,t){for(var r=0;r<t;++r)e[r]=255*Math.random()|0;return e}function l(e){return"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(e)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(e)):a(new Uint8Array(e),e):a(new Array(e),e)}function d(){var t=l(e);t[6]=79&t[6]|64,t[8]=191&t[8]|128;for(var r="",o=0;o<e;++o){var s=t[o];4!==o&&6!==o&&8!==o||(r+="-"),s<16&&(r+="0"),r+=s.toString(16).toLowerCase()}return r}}function pe(e){return e.__=void 0,delete e.__,e}e("decorate",f),e("metadata",v),e("defineMetadata",y),e("hasMetadata",m),e("hasOwnMetadata",w),e("getMetadata",x),e("getOwnMetadata",_),e("getMetadataKeys",C),e("getOwnMetadataKeys",$),e("deleteMetadata",E)}(r)}()}(e||(e={}))}},e=>{var t;t=239,e(e.s=t)}]);