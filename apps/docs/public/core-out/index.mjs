var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,s=(s,i,a,r)=>{for(var o,n=r>1?void 0:r?t(i,a):i,l=s.length-1;l>=0;l--)(o=s[l])&&(n=(r?o(i,a,n):o(n))||n);return r&&n&&e(i,a,n),n},i=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},a=(e,t,s)=>(i(e,t,"read from private field"),s?s.call(e):t.get(e)),r=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},o=(e,t,s,a)=>(i(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),n=(e,t,s,i)=>({set _(i){o(e,t,i,s)},get _(){return a(e,t,i)}}),l=(e,t,s)=>(i(e,t,"access private method"),s);import{property as d,query as h,queryAsync as c,state as p}from"lit/decorators.js";import{unsafeHTML as g}from"lit/directives/unsafe-html.js";import{when as u}from"lit/directives/when.js";import{ifDefined as y}from"lit/directives/if-defined.js";import{classMap as m}from"lit/directives/class-map.js";import{msg as f,str as b,updateWhenLocaleChanges as v}from"@lit/localize";import"reflect-metadata";function w(e){e.updateComplete.then((()=>{const t=e.shadowRoot?.querySelectorAll("slot[gds-allow]");if(!t)return;for(const i of Array.from(e.childNodes))i.nodeType===Node.TEXT_NODE&&""===i.textContent?.trim()&&i.parentNode?.removeChild(i);const s=e=>{const t=e.getAttribute("gds-allow")?.split(" ")||[];for(const s of Array.from(e.assignedNodes()))t.includes(s.nodeName.toLowerCase())||s.parentNode?.removeChild(s)};t.forEach((e=>{s(e),e.addEventListener("slotchange",(()=>s(e)))}))}))}function k(e,t){const s={waitUntilFirstUpdate:!1,...t};return(t,i,a)=>{const{update:r}=t,o=Array.isArray(e)?e:[e];t.update=function(e){o.forEach((t=>{const i=t;if(e.has(i)){const t=e.get(i),r=this[i];t!==r&&(s.waitUntilFirstUpdate&&!this.hasUpdated||a.value?.call(this,t,r))}})),r.call(this,e)}}}import{html as x}from"lit";import{customElement as _}from"lit/decorators.js";var F="-gdsvsuffix",C=new Map,$=e=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return C.set(e,e),_(e);const t=e+F;return C.set(e,t),customElements.get(t)?e=>!1:_(t)},E=new WeakMap;var S=e=>e.map((e=>{for(const[t,s]of C.entries())e=e.replace(new RegExp(`${t}(?![-a-z])`,"mg"),s);return e}));function D(e){return(t,...s)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return e(t,...s);const[i,...a]=function(e,...t){let s=E.get(e);return s||(s=S(e),s.raw=S(e.raw),E.set(e,s)),[s,...t]}(t,...s);return e(i,...a)}}var M=D(x);function A(e){return C.get(e)??e}function z(e){return[...C.entries()].find((([,t])=>t===e))?.[0]}import{property as W,state as L}from"lit/decorators.js";import{createRef as T,ref as V}from"lit/directives/ref.js";import{html as B}from"lit";import{unsafeHTML as N}from"lit/directives/unsafe-html.js";var j=class e{constructor(){this.sheets=new Map,this.elements=new Map,this.sheetsLegacy=new Map,this.useLegacyStylesheets=!function(){try{return new CSSStyleSheet,!0}catch{return!1}}()}static get instance(){return globalThis.__gdsTransitionalStyles?.[F]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[F]:new e}),globalThis.__gdsTransitionalStyles[F]}apply(e,t){if(!e.shadowRoot)return;if(this.useLegacyStylesheets)return this.elements.set(t,e),void this.applyToElementLegacy(t);const s=this.sheets.get(t);s&&(this.elements.set(t,e),this.applyToElement(t,s))}applyToElement(e,t){const s=this.elements.get(e);s&&s.shadowRoot&&(s.shadowRoot.adoptedStyleSheets=[t],s.isUsingTransitionalStyles=!0)}applyToElementLegacy(e){const t=this.sheetsLegacy.get(e),s=this.elements.get(e);s&&(s._tStyles=B`<style>
      @layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${N(t)}
    </style>`)}register(e,t){if(this.useLegacyStylesheets)return this.sheetsLegacy.set(e,t),void this.applyToElementLegacy(e);const s=new CSSStyleSheet;s.replaceSync(t),this.sheets.set(e,s),this.applyToElement(e,s)}};import"reflect-metadata";import{LitElement as I}from"lit";var R=class extends I{constructor(){super(...arguments),this.gdsElementName="",this.isUsingTransitionalStyles=!1}connectedCallback(){super.connectedCallback(),this.gdsElementName=z(this.tagName.toLowerCase())||this.gdsElementName,this.setAttribute("gds-element",this.gdsElementName)}};import{css as O}from"lit";var Y,P,H=O`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
    }
  }
`,G=class{constructor(e){this.#e=e=>{const t=e.target;if(!this.host.navigableItems.includes(t))return;let s=!1;if("ArrowDown"===e.key){const e=this.host.navigableItems.indexOf(t)+1,i=this.host.navigableItems[e];i?.focus(),s=!0}else if("ArrowUp"===e.key){const e=this.host.navigableItems.indexOf(t)-1,i=this.host.navigableItems[e];i?.focus(),s=!0}else if("Home"===e.key)this.host.navigableItems[0]?.focus(),s=!0;else if("End"===e.key)this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),s=!0;else{const t=e.key.toLowerCase();if(1!==t.length)return;if(t>="a"&&t<="z"||t>="0"&&t<="9"){const e=this.host.navigableItems.find((e=>{const s=e.textContent?.trim().toLowerCase();return s?.startsWith(t)}));e?.focus(),s=!0}}s&&(e.preventDefault(),e.stopPropagation())},(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",this.#e)}hostDisconnected(){this.host.removeEventListener("keydown",this.#e)}#e};function U(e){let t=e;for(;t.assignedElements().length>0&&"SLOT"===t.assignedElements()[0].nodeName;)t=t.assignedElements()[0];return t}var q=class extends R{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,r(this,Y,T()),r(this,P,(e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach((e=>{e!==t&&(e.selected=!1)}))),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))})),new G(this)}get navigableItems(){return this.visibleOptionElements}get options(){return a(this,Y).value&&U(a(this,Y).value).assignedElements().filter((e=>!e.hasAttribute("isplaceholder")&&"gds-option"===e.gdsElementName))||[]}get visibleOptionElements(){return this.options.filter((e=>!e.hidden))}get visibleSelectedOptionElements(){return this.options.filter((e=>e.selected&&!e.hidden))}get selection(){return this.options.filter((e=>e.selected))}set selection(e){this.options.forEach((t=>{t.selected=e.some((e=>this.compareWith(e,t.value)))}))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),j.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",a(this,P))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return M`${this._tStyles}<slot ${V(a(this,Y))}></slot>`}_rerenderOptions(){this.options.forEach((e=>{e.requestUpdate()}))}};Y=new WeakMap,P=new WeakMap,q.styles=H,s([W({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],q.prototype,"multiple",2),s([W()],q.prototype,"compareWith",2),s([L()],q.prototype,"_tStyles",2),s([k("multiple")],q.prototype,"_rerenderOptions",1),q=s([$("gds-listbox")],q);import{html as X}from"lit";import{property as K,state as J}from"lit/decorators.js";import{when as Z}from"lit/directives/when.js";import{classMap as Q}from"lit/directives/class-map.js";import{css as ee}from"lit";var te=ee`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: block;
      padding: 1rem 1.5rem;
      cursor: pointer;
    }

    :host(:not(:last-child)) {
      border-bottom: 1px solid #e0e0e0;
    }

    :host(:hover) {
      background-color: #ededed;
    }

    :host(:focus-visible) {
      outline: auto;
      outline-offset: -6px;
      outline-color: #666;
    }
  }
`;import"reflect-metadata";var se,ie,ae,re=e=>class extends e{constructor(){super(...arguments),this.onblur=e=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},this.onfocus=e=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))}}focus(e){this.setAttribute("tabindex","0"),super.focus(e)}},oe=class extends(re(R)){constructor(){super(),r(this,ie),r(this,se,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",l(this,ie,ae)),this.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),l(this,ie,ae).call(this,e))}))}get hidden(){return a(this,se)}set hidden(e){this.isPlaceholder||(o(this,se,"true"===e||!0===e),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(o(this,se,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then((()=>j.instance.apply(this,"gds-option")))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(o(this,se,!0),this.setAttribute("aria-hidden","true")):(o(this,se,!1),this.setAttribute("aria-hidden","false"))}render(){const e=this.parentElement?.multiple,t=X` <span
      class="checkbox ${Q({checked:this.selected})}"
    ></span>`;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),X`${this._tStyles}${Z(e,(()=>t))}
      <slot></slot>`}};se=new WeakMap,ie=new WeakSet,ae=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))},oe.styles=te,s([K()],oe.prototype,"value",2),s([K({attribute:"aria-hidden",reflect:!0})],oe.prototype,"hidden",1),s([K({attribute:"aria-selected",reflect:!0})],oe.prototype,"selected",2),s([K({type:Boolean,reflect:!0})],oe.prototype,"isPlaceholder",2),s([J()],oe.prototype,"_tStyles",2),s([k("isplaceholder")],oe.prototype,"_handlePlaceholderStatusChange",1),oe=s([$("gds-option")],oe);import{html as ne,unsafeCSS as le}from"lit";import{property as de,state as he}from"lit/decorators.js";import{classMap as ce}from"lit/directives/class-map.js";import{msg as pe}from"@lit/localize";import{createRef as ge,ref as ue}from"lit/directives/ref.js";import{computePosition as ye,autoUpdate as me,offset as fe,flip as be}from"@floating-ui/dom";import{css as ve}from"lit";var we,ke,xe,_e,Fe,Ce,$e,Ee,Se,De,Me,Ae,ze,We,Le,Te=ve`
  @layer base, reset, transitional-styles;
  @layer base {
    :host([open]) dialog {
      opacity: 1;
      box-sizing: border-box;
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    dialog {
      inset: auto;
      position: fixed;
      overflow: hidden;
      padding: 0px;
      box-sizing: border-box;
      right: 0;
      margin: 0;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2), 0 1rem 28px rgba(0, 0, 0, 0.15);
      border-width: 0;
      border-radius: 0.5rem;
    }

    header {
      display: none;
    }

    dialog::backdrop {
      background-color: transparent;
      display: block;
      position: fixed;
    }
  }
`,Ve=class extends R{constructor(){super(...arguments),r(this,Ce),r(this,Ee),r(this,De),this.open=!1,this.triggerRef=Promise.resolve(void 0),this.label=void 0,this.placement="bottom-start",this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>"500px",this._trigger=void 0,this._isVirtKbVisible=!1,r(this,we,ge()),r(this,ke,void 0),r(this,xe,!1),r(this,_e,(e=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason:e},bubbles:!1,composed:!1}))})),r(this,Fe,(e=>{e.stopPropagation(),e.preventDefault(),this.open=!1,a(this,_e).call(this,"close"),setTimeout((()=>this._trigger?.focus()),250)})),r(this,Ae,(e=>{"ArrowDown"===e.key&&(e.preventDefault(),this.open=!0,a(this,_e).call(this,"show")),"Escape"===e.key&&(this.open=!1,a(this,_e).call(this,"cancel"))})),r(this,ze,(()=>{const e=this.shadowRoot?.querySelector("slot")?.assignedElements()[0];this.updateComplete.then((()=>{e?.focus()}))})),r(this,We,(e=>{const t=e,s=a(this,we).value;if((t.clientX>0||t.clientY>0)&&s&&this.open){const e=s.getBoundingClientRect();e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width||(t.stopPropagation(),this.open=!1,a(this,_e).call(this,"close"))}}))}_handleTriggerRefChanged(){this.triggerRef.then((e=>{e&&(this._trigger=e)}))}_handleTriggerChanged(){l(this,Ce,$e).call(this),l(this,De,Me).call(this)}connectedCallback(){super.connectedCallback(),j.instance.apply(this,"gds-popover"),l(this,Ce,$e).call(this),this._handleOpenChange(),this.addEventListener("keydown",(e=>{"Escape"===e.key&&(this.open=!1,a(this,_e).call(this,"cancel"),e.stopPropagation(),e.preventDefault())})),this.addEventListener("focusin",(e=>{const t=e.target;"INPUT"===t.tagName||"TEXTAREA"===t.tagName?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1})),this.addEventListener("blurin",(e=>{this._isVirtKbVisible=!1}))}disconnectedCallback(){super.disconnectedCallback(),l(this,Ee,Se).call(this)}render(){return ne`${this._tStyles}
      <dialog
        class="${ce({"v-kb-visible":this._isVirtKbVisible})}"
        ${ue(a(this,we))}
      >
        <header>
          <h2>${this.label}</h2>
          <button
            class="close"
            @click=${a(this,Fe)}
            aria-label="${pe("Close")}"
          >
            <i></i>
          </button>
        </header>
        <slot></slot>
      </dialog>`}_handleOpenChange(){this.setAttribute("aria-hidden",String(!this.open)),this.hidden=!this.open,this.updateComplete.then((()=>{this.open?(a(this,we).value?.showModal(),a(this,ze).call(this),setTimeout((()=>a(this,we).value?.addEventListener("click",a(this,We))),0)):(a(this,we).value?.close(),a(this,we).value?.removeEventListener("click",a(this,We)))}))}_handleMobileLayout(e){var t;o(this,xe,e),e?(null==(t=a(this,ke))||t.call(this),a(this,we).value?.style.removeProperty("left"),a(this,we).value?.style.removeProperty("top"),a(this,we).value?.style.removeProperty("minWidth"),this.updateComplete.then((()=>{this.open&&a(this,we).value?.showModal()}))):this.updateComplete.then((()=>{l(this,De,Me).call(this)}))}};we=new WeakMap,ke=new WeakMap,xe=new WeakMap,_e=new WeakMap,Fe=new WeakMap,Ce=new WeakSet,$e=function(){this._trigger?.addEventListener("keydown",a(this,Ae))},Ee=new WeakSet,Se=function(){var e;this._trigger?.removeEventListener("keydown",a(this,Ae)),null==(e=a(this,ke))||e.call(this)},De=new WeakSet,Me=function(){const e=this._trigger,t=a(this,we).value;e&&t&&!a(this,xe)&&(a(this,ke)&&a(this,ke).call(this),o(this,ke,me(e,t,(()=>{ye(e,t,{placement:this.placement,middleware:[fe(8),be()],strategy:"fixed"}).then((({x:s,y:i})=>Object.assign(t.style,{left:`${s}px`,top:`${i}px`,minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)})))}))))},Ae=new WeakMap,ze=new WeakMap,We=new WeakMap,Ve.styles=le(Te),s([de({type:Boolean,reflect:!0})],Ve.prototype,"open",2),s([de()],Ve.prototype,"triggerRef",2),s([de()],Ve.prototype,"label",2),s([de()],Ve.prototype,"placement",2),s([de()],Ve.prototype,"calcMinWidth",2),s([de()],Ve.prototype,"calcMaxWidth",2),s([de()],Ve.prototype,"calcMinHeight",2),s([de()],Ve.prototype,"calcMaxHeight",2),s([he()],Ve.prototype,"_trigger",2),s([he()],Ve.prototype,"_isVirtKbVisible",2),s([k("triggerRef")],Ve.prototype,"_handleTriggerRefChanged",1),s([k("_trigger")],Ve.prototype,"_handleTriggerChanged",1),s([he()],Ve.prototype,"_tStyles",2),s([k("open")],Ve.prototype,"_handleOpenChange",1),s([(Le="(max-width: 576px)",(e,t,s)=>{const i=window.matchMedia(Le),a=e.connectedCallback,r=e.disconnectedCallback;e.connectedCallback=function(){a?.call(this);const e=e=>{s.value?.call(this,e.matches)};i.addEventListener("change",e),this.disconnectedCallback=function(){r?.call(this),i.removeEventListener("change",e)},s.value?.call(this,i.matches)}})],Ve.prototype,"_handleMobileLayout",1),Ve=s([$("gds-popover")],Ve);import{property as Be}from"lit/decorators.js";var Ne=class extends R{constructor(){super(),this.invalid=!1,this.name="",this._handleFormReset=()=>{this.value=void 0};try{this.#t=this.attachInternals()}catch(e){this.#t={form:this.closest("form"),setFormValue:e=>{this.value=e},setValidity:(e,t)=>{this.invalid=e.customError},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0}}}#t;static{this.formAssociated=!0}get form(){return this.#t.form}get validity(){return this.#t.validity}get validationMessage(){return this.#t.validationMessage}get willValidate(){return this.#t.willValidate}checkValidity(){return this.#t.checkValidity()}reportValidity(){return this.#t.reportValidity()}connectedCallback(){super.connectedCallback(),this.#t.form?.addEventListener("reset",this._handleFormReset)}disconnectedCallback(){super.disconnectedCallback(),this.#t.form?.removeEventListener("reset",this._handleFormReset)}__handleValidityChange(){this.#t.setValidity({badInput:!1,customError:this.invalid,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!this.invalid},this.validationMessage||"Error message")}__handleValueChange(){this.#t.setFormValue(this.value)}};s([Be({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:e=>e?.toString()}})],Ne.prototype,"invalid",2),s([Be()],Ne.prototype,"value",2),s([Be({reflect:!0})],Ne.prototype,"name",2),s([k("invalid")],Ne.prototype,"__handleValidityChange",1),s([k("value")],Ne.prototype,"__handleValueChange",1);import{css as je}from"lit";var Ie,Re,Oe,Ye,Pe,He,Ge,Ue,qe,Xe,Ke,Je,Ze,Qe=je`
  @layer base, reset, transitional-styles;

  @layer base {
    button {
      appearance: none;
      display: block;
      background-color: black;
      border-radius: 2rem;
      border: none;
      color: white;
      padding: 0.7rem 2rem;
      margin: 0.5rem 0;
      box-sizing: border-box;
    }
  }
`,et=class extends Ne{constructor(){super(),r(this,He),r(this,Ue),r(this,Xe),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,r(this,Ie,void 0),r(this,Re,(e=>{const t=this._elSearchInput,s=Array.from(a(this,Ie));if(s.forEach((e=>e.hidden=!1)),!t.value)return;s.filter((e=>!this.searchFilter(t.value,e))).forEach((e=>e.hidden=!0))})),r(this,Oe,(e=>{this._elListbox?.then((t=>{if("ArrowDown"===e.key||"Tab"===e.key)return e.preventDefault(),void t.focus()}))})),r(this,Ye,(e=>{if("Tab"===e.key&&this.searchable)return e.preventDefault(),void this._elSearchInput?.focus()})),r(this,Pe,(e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)})),r(this,Je,(e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)})),r(this,Ze,(e=>{"Tab"!==e.key||this.searchable||(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())})),w(this),v(this),o(this,Ie,this.getElementsByTagName(A("gds-option")))}get type(){return"gds-dropdown"}get options(){return Array.from(a(this,Ie)).filter((e=>!e.hasAttribute("isplaceholder")))}get placeholder(){return Array.from(a(this,Ie)).find((e=>e.hasAttribute("isplaceholder")))}get displayValue(){let e;return e=Array.isArray(this.value)?this.value.length>2?f(b`${this.value.length} selected`):this.value.reduce(((e,t)=>e+this.options.find((e=>e.value===t))?.innerHTML+", "),"").slice(0,-2):this.options.find((e=>e.selected))?.innerHTML,e||this.placeholder?.innerHTML||""}connectedCallback(){super.connectedCallback(),j.instance.apply(this,"gds-dropdown"),this.updateComplete.then((()=>{this._handleLightDOMChange(),this._handleValueChange()}))}render(){return M`
      ${this._tStyles}
      ${u(this.label&&!this.hideLabel,(()=>M`<label for="trigger">${this.label}</label>`))}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <button
        id="trigger"
        @click="${()=>this.open=!this.open}"
        aria-haspopup="listbox"
        role="combobox"
        aria-owns="listbox"
        aria-controls="listbox"
        aria-expanded="${this.open}"
        aria-label="${this.label}"
        class=${m({small:"small"===this.size})}
      >
        <slot name="trigger">
          <span>${g(this.displayValue)}</span>
        </slot>
      </button>

      <span class="form-info"><slot name="message"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .triggerRef=${this._elTriggerBtnAsync}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${e=>`${this.maxHeight}px`}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        ${u(this.searchable,(()=>M`<input
            id="searchinput"
            type="text"
            aria-label="${f("Filter available options")}"
            placeholder="${f("Search")}"
            @keydown=${a(this,Oe)}
            @keyup=${a(this,Re)}
          />`))}

        <gds-listbox
          id="listbox"
          .multiple="${y(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${l(this,He,Ge)}"
          @gds-focus="${a(this,Pe)}"
          @keydown=${a(this,Ye)}
        >
          <slot gds-allow="gds-option gds-menu-heading"></slot>
        </gds-listbox>
      </gds-popover>
    `}_handleLightDOMChange(){this.requestUpdate(),this.multiple?this._handleValueChange():void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:this.placeholder||void 0!==this.options.find((e=>this.compareWith(e.value,this.value)))||(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value)}_handleValueChange(){this._elListbox.then((e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])}))}_onOpenChange(){const e=this.open;Array.from(a(this,Ie)).forEach((t=>t.hidden=!e)),e?l(this,Ue,qe).call(this):(l(this,Xe,Ke).call(this),this._elSearchInput&&(this._elSearchInput.value="")),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};Ie=new WeakMap,Re=new WeakMap,Oe=new WeakMap,Ye=new WeakMap,Pe=new WeakMap,He=new WeakSet,Ge=function(){this._elListbox.then((e=>{this.multiple?this.value=e.selection.map((e=>e.value)):(this.value=e.selection[0]?.value,this.open=!1,setTimeout((()=>this._elTriggerBtn?.focus()),0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}))},Ue=new WeakSet,qe=function(){this.addEventListener("blur",a(this,Je)),this.addEventListener("gds-blur",a(this,Je)),this.addEventListener("keydown",a(this,Ze))},Xe=new WeakSet,Ke=function(){this.removeEventListener("blur",a(this,Je)),this.removeEventListener("gds-blur",a(this,Je)),this.removeEventListener("keydown",a(this,Ze))},Je=new WeakMap,Ze=new WeakMap,et.styles=Qe,et.shadowRootOptions={mode:"open",delegatesFocus:!0},s([d()],et.prototype,"label",2),s([d({type:Boolean,reflect:!0})],et.prototype,"open",2),s([d({type:Boolean,reflect:!0})],et.prototype,"searchable",2),s([d({type:Boolean,reflect:!0})],et.prototype,"multiple",2),s([d()],et.prototype,"compareWith",2),s([d()],et.prototype,"searchFilter",2),s([d({type:Boolean,attribute:"sync-popover-width"})],et.prototype,"syncPopoverWidth",2),s([d({type:Number,attribute:"max-height"})],et.prototype,"maxHeight",2),s([d()],et.prototype,"size",2),s([d({type:Boolean,attribute:"hide-label"})],et.prototype,"hideLabel",2),s([p()],et.prototype,"_tStyles",2),s([h("#trigger")],et.prototype,"_elTriggerBtn",2),s([c("#trigger")],et.prototype,"_elTriggerBtnAsync",2),s([c("#listbox")],et.prototype,"_elListbox",2),s([h("#searchinput")],et.prototype,"_elSearchInput",2),s([function(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,i)=>{let a;const r=t.connectedCallback,o=t.disconnectedCallback;t.connectedCallback=function(){r?.call(this);a=new MutationObserver(((e,t)=>{i.value?.call(this)})),a.observe(this,e)},t.disconnectedCallback=function(){o?.call(this),a.disconnect()}}}({attributes:!0,childList:!0,subtree:!0,characterData:!0})],et.prototype,"_handleLightDOMChange",1),s([k("value")],et.prototype,"_handleValueChange",1),s([k("open")],et.prototype,"_onOpenChange",1),et=s([$("gds-dropdown")],et);import{html as tt}from"lit";import{css as st}from"lit";var it=st`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      padding: 0.5 1rem;
      cursor: pointer;
    }

    :host(:hover) {
      background-color: grey;
    }
  }
`,at=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then((()=>j.instance.apply(this,"gds-menu-heading")))}render(){return tt`<slot></slot>`}};at.styles=it,at=s([$("gds-menu-heading")],at);import{nothing as rt}from"lit";import{msg as ot}from"@lit/localize";import{classMap as nt}from"lit-html/directives/class-map.js";import{property as lt,queryAsync as dt,state as ht}from"lit/decorators.js";import{css as ct}from"lit";var pt,gt=ct`
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
`;import{createRef as ut,ref as yt}from"lit/directives/ref.js";import{state as mt}from"lit/decorators.js";var ft,bt,vt=class extends R{constructor(){super(),r(this,pt,ut()),new G(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),j.instance.apply(this,"gds-listbox")}get navigableItems(){return a(this,pt).value&&U(a(this,pt).value).assignedElements().filter((e=>!e.hasAttribute("isplaceholder")&&"gds-menu-item"===e.gdsElementName))||[]}focus(){this.navigableItems[0]?.focus()}render(){return M`${this._tStyles}<slot ${yt(a(this,pt))}></slot>`}};pt=new WeakMap,s([mt()],vt.prototype,"_tStyles",2),vt=s([$("gds-menu")],vt);var wt,kt=class extends R{constructor(){super(),r(this,ft),this.open=!1,this.buttonLabel=ot("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",w(this)}connectedCallback(){super.connectedCallback(),j.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",(e=>{this.open&&"Tab"==e.key&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then((e=>e.focus())))}))}render(){return M`${this._tStyles}
      <button
        id="trigger"
        class="icon border-0 small ${nt({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${()=>this.open=!this.open}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:rt}
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
        .label=${this.label}
        .placement=${this.placement}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        <gds-menu
          aria-label=${this.label??this.buttonLabel}
          @gds-menu-item-click=${l(this,ft,bt)}
        >
          <slot allow="gds-menu-item gds-menu-heading"></slot>
        </gds-menu>
      </gds-popover>`}};ft=new WeakSet,bt=function(){this.open=!1},kt.styles=[gt],kt.shadowRootOptions={mode:"open",delegatesFocus:!0},s([lt({type:Boolean,reflect:!0})],kt.prototype,"open",2),s([lt({attribute:"button-label"})],kt.prototype,"buttonLabel",2),s([lt({attribute:"show-label"})],kt.prototype,"showLabel",2),s([lt()],kt.prototype,"label",2),s([lt()],kt.prototype,"placement",2),s([ht()],kt.prototype,"_tStyles",2),s([dt("#trigger")],kt.prototype,"elTriggerBtn",2),kt=s([$("gds-context-menu")],kt);import{state as xt}from"lit/decorators.js";var _t=class extends(re(R)){constructor(){super(...arguments),r(this,wt,(()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))}))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.click())})),this.addEventListener("click",a(this,wt)),j.instance.apply(this,"gds-option")}render(){return M`${this._tStyles}<slot></slot>`}};wt=new WeakMap,_t.styles=[te],s([xt()],_t.prototype,"_tStyles",2),_t=s([$("gds-menu-item")],_t);import{property as Ft,query as Ct,queryAll as $t,queryAsync as Et,state as St}from"lit/decorators.js";import{join as Dt}from"lit/directives/join.js";import{when as Mt}from"lit/directives/when.js";import{until as At}from"lit/directives/until.js";import{map as zt}from"lit/directives/map.js";import{repeat as Wt}from"lit/directives/repeat.js";import{classMap as Lt}from"lit/directives/class-map.js";import{nothing as Tt}from"lit";import{msg as Vt}from"@lit/localize";import{html as Bt}from"lit";import{classMap as Nt}from"lit/directives/class-map.js";import{when as jt}from"lit/directives/when.js";import{property as It,query as Rt,state as Ot}from"lit/decorators.js";import{msg as Yt}from"@lit/localize";import{addDays as Pt,isSameDay as Ht,isSameMonth as Gt,getWeek as Ut,subMonths as qt,addMonths as Xt}from"date-fns";import{startOfMonth as Kt,endOfMonth as Jt,addDays as Zt,eachWeekOfInterval as Qt,eachDayOfInterval as es}from"date-fns";import{html as ts}from"lit-html";import{css as ss}from"lit";var is,as,rs,os,ns,ls,ds,hs,cs,ps,gs,us,ys,ms,fs,bs,vs,ws,ks,xs,_s,Fs,Cs=ss`
  @layer base, reset, transitional-styles;
  @layer base {
    td.disabled {
      color: #999;
      cursor: default;
    }
    td.today {
      background-color: #eee;
    }
  }
`,$s=class extends R{constructor(){super(...arguments),r(this,is),r(this,rs),this.min=new Date((new Date).getFullYear()-10,0,1),this.max=new Date((new Date).getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=new Date(this.focusedDate);t.setMonth(e),t.setHours(0,0,0,0),this.focusedDate=t}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){return this.shadowRoot?.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),j.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",l(this,rs,os))}focus(){super.focus(),this._elFocusedCell?.focus()}render(){const e=new Date;return Bt`${this._tStyles}
      <table>
        <thead>
          <tr>
            ${jt(this.showWeekNumbers,(()=>Bt`<th></th>`))}
            <th>${Yt("Mon")}</th>
            <th>${Yt("Tue")}</th>
            <th>${Yt("Wed")}</th>
            <th>${Yt("Thu")}</th>
            <th>${Yt("Fri")}</th>
            <th>${Yt("Sat")}</th>
            <th>${Yt("Sun")}</th>
          </tr>
        </thead>
        <tbody>
          ${function(e,t){const s=Kt(e),i=Jt(e),a=Qt({start:s,end:i},{weekStartsOn:1});return ts`${t(a.map((e=>({days:es({start:e,end:Zt(e,6)})}))))}`}(this.focusedDate,(t=>Bt`
              ${t.map((t=>Bt`
                  <tr>
                    ${jt(this.showWeekNumbers,(()=>Bt`<td class="week-number">
                          ${Ut(t.days[0])}
                        </td>`))}
                    ${t.days.map((t=>{const s=!Gt(this.focusedDate,t)||t<this.min||t>this.max,i=0===t.getDay()||6===t.getDay(),a=s||this.disabledWeekends&&i||this.disabledDates&&this.disabledDates.some((e=>Ht(e,t)));return Bt`
                        <td
                          class="${Nt({disabled:Boolean(a),today:Ht(e,t)})}"
                          ?disabled=${a}
                          tabindex="${Ht(this.focusedDate,t)?0:-1}"
                          aria-selected="${this.value&&Ht(this.value,t)}"
                          aria-label="${t.toDateString()}"
                          @click=${()=>a?null:l(this,is,as).call(this,t)}
                          id="dateCell-${t.getDate()}"
                        >
                          ${t.getDate()}
                        </td>
                      `}))}
                  </tr>
                `))}
            `))}
        </tbody>
      </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};is=new WeakSet,as=function(e){this.value=e,this.dispatchEvent(new CustomEvent("change",{detail:e,bubbles:!1,composed:!1}))},rs=new WeakSet,os=function(e){let t=!1,s=new Date(this.focusedDate);"ArrowLeft"===e.key?(s=Pt(this.focusedDate,-1),t=!0):"ArrowRight"===e.key?(s=Pt(this.focusedDate,1),t=!0):"ArrowUp"===e.key?(s=Pt(this.focusedDate,-7),t=!0):"ArrowDown"===e.key?(s=Pt(this.focusedDate,7),t=!0):"Enter"===e.key||" "===e.key?(this._elFocusedCell?.hasAttribute("disabled")||l(this,is,as).call(this,this.focusedDate),t=!0):"Home"===e.key?(s=new Date(this.focusedYear,this.focusedMonth,1),t=!0):"End"===e.key?(s=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):"PageUp"===e.key?(s=qt(this.focusedDate,1),t=!0):"PageDown"===e.key&&(s=Xt(this.focusedDate,1),t=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&(this.focusedDate=s),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then((()=>{this._elFocusedCell?.focus(),this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:this.focusedDate,bubbles:!1,composed:!1}))})))},$s.styles=[Cs],$s.shadowRootOptions={mode:"open",delegatesFocus:!0},s([It()],$s.prototype,"value",2),s([It({type:Date})],$s.prototype,"min",2),s([It({type:Date})],$s.prototype,"max",2),s([It()],$s.prototype,"focusedDate",2),s([It({type:Boolean,attribute:"disabled-weekends"})],$s.prototype,"disabledWeekends",2),s([It({type:Array,attribute:"disabled-dates"})],$s.prototype,"disabledDates",2),s([It({type:Number})],$s.prototype,"focusedMonth",1),s([It({type:Number})],$s.prototype,"focusedYear",1),s([It({type:Boolean})],$s.prototype,"showWeekNumbers",2),s([Rt('td[tabindex="0"]')],$s.prototype,"_elFocusedCell",2),s([Ot()],$s.prototype,"_tStyles",2),s([k("value")],$s.prototype,"_valueChanged",1),$s=s([$("gds-calendar")],$s);import{LitElement as Es}from"lit";import{property as Ss,state as Ds}from"lit/decorators.js";var Ms=class extends Es{constructor(){super(...arguments),r(this,ys),r(this,fs),r(this,vs),r(this,ks),r(this,_s),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=l(this,vs,ws).call(this,this.value,this.length),r(this,ns,""),r(this,ls,(()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.min:(new Date).getFullYear()-1),this.value=l(this,ks,xs).call(this,e+1),l(this,fs,bs).call(this)})),r(this,ds,(()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.max:(new Date).getFullYear()+1),this.value=l(this,ks,xs).call(this,e-1),l(this,fs,bs).call(this)})),r(this,hs,(e=>{e.stopPropagation(),e.preventDefault(),this.focus()})),r(this,cs,(()=>{l(this,_s,Fs).call(this)})),r(this,ps,(()=>{""!==a(this,ns)&&(l(this,_s,Fs).call(this),this.value=l(this,ks,xs).call(this,parseInt(this.value.toString())),l(this,fs,bs).call(this))})),r(this,gs,(e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?a(this,ds).call(this):a(this,ls).call(this)})),r(this,us,(e=>{let t=!1;if("ArrowUp"===e.key)a(this,ls).call(this),t=!0;else if("ArrowDown"===e.key)a(this,ds).call(this),t=!0;else{const s=parseInt(e.key);isNaN(s)||(a(this,ns).length<this.length&&(o(this,ns,a(this,ns)+s.toString()),this.value=parseInt(a(this,ns))),a(this,ns).length===this.length&&(this.value=l(this,ks,xs).call(this,this.value),l(this,_s,Fs).call(this),l(this,ys,ms).call(this),l(this,fs,bs).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())}))}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",a(this,gs)),this.addEventListener("keydown",a(this,us)),this.addEventListener("blur",a(this,ps)),this.addEventListener("focus",a(this,cs)),this.addEventListener("click",a(this,hs)),this.addEventListener("mousedown",a(this,hs))}focus(e){super.focus(e),a(this,cs).call(this)}render(){return M`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=l(this,vs,ws).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};ns=new WeakMap,ls=new WeakMap,ds=new WeakMap,hs=new WeakMap,cs=new WeakMap,ps=new WeakMap,gs=new WeakMap,us=new WeakMap,ys=new WeakSet,ms=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof Ms){e.focus();break}e=e.nextElementSibling}},fs=new WeakSet,bs=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))},vs=new WeakSet,ws=function(e,t){return String(e).padStart(t,"0")},ks=new WeakSet,xs=function(e){return Math.max(this.min,Math.min(this.max,e))},_s=new WeakSet,Fs=function(){o(this,ns,"")},Ms.formAssociated=!0,s([Ss({type:Number})],Ms.prototype,"value",2),s([Ss({type:Number})],Ms.prototype,"length",2),s([Ss({type:Number,attribute:"aria-valuemin"})],Ms.prototype,"min",2),s([Ss({type:Number,attribute:"aria-valuemax"})],Ms.prototype,"max",2),s([Ds()],Ms.prototype,"displayValue",2),s([k("value")],Ms.prototype,"_refreshDisplayValue",1),Ms=s([$("gds-date-part-spinner")],Ms);import{css as As}from"lit";var zs,Ws,Ls,Ts,Vs,Bs,Ns,js,Is,Rs,Os,Ys,Ps,Hs,Gs,Us,qs,Xs,Ks,Js,Zs,Qs,ei,ti,si,ii,ai,ri,oi,ni,li,di,hi,ci,pi,gi,ui=As`
  @layer base, reset, transitional-styles;
  @layer base {
    label {
      display: block;
    }
  }
`,yi={fromAttribute:e=>new Date(e),toAttribute:e=>e.toISOString()},mi={fromAttribute:e=>e.split(",").map((e=>new Date(e.trim()))),toAttribute:e=>JSON.stringify(e.map((e=>e.toISOString())))},fi=class extends Ne{constructor(){super(...arguments),r(this,Ws),r(this,Ts),r(this,Bs),r(this,js),r(this,Rs),r(this,Ys),r(this,Hs),r(this,oi),r(this,hi),r(this,pi),this.min=new Date((new Date).getFullYear()-10,0,1),this.max=new Date((new Date).getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=(new Date).getMonth(),this._focusedYear=(new Date).getFullYear(),this._dateFormatLayout=l(this,oi,ni).call(this,"y-m-d"),r(this,zs,void 0),r(this,Us,(e=>{this._elTrigger.then((t=>{const s=e.relatedTarget?.parentElement;s!==e.target&&document.getSelection()?.removeAllRanges()}))})),r(this,qs,(e=>{this._elTrigger.then((e=>{document.getSelection()?.removeAllRanges();const t=new Range;t.setStart(e.firstChild,0),t.setEnd(e.lastChild,4),document.getSelection()?.addRange(t)}))})),r(this,Xs,(e=>{this._elTrigger.then((t=>{e.currentTarget===t&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))}))})),r(this,Ks,(e=>{this._elTrigger.then((t=>{if(e.currentTarget!==t)return;e.preventDefault();const s=e.clipboardData?.getData("text/plain");if(!s)return;const i=new Date(s);"Invalid Date"!==i.toString()&&(this.value=i,l(this,Ys,Ps).call(this))}))})),r(this,Js,(e=>{this._elSpinners[0].focus()})),r(this,Zs,(e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,l(this,Ys,Ps).call(this)})),r(this,Qs,(e=>{e.stopPropagation(),this._focusedMonth=e.target?.value})),r(this,ei,(e=>{e.stopPropagation(),this._focusedYear=e.target?.value})),r(this,ti,(e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)})),r(this,si,(e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)})),r(this,ii,(async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),l(this,Hs,Gs).call(this)})),r(this,ai,(async e=>{e.target===e.currentTarget&&(this.open=e.detail.open,"close"===e.detail.reason&&(this.value=(await this._elCalendar).value,this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear()),l(this,Ys,Ps).call(this)),"cancel"===e.detail.reason&&(this.value=a(this,zs)))})),r(this,ri,(e=>{const t=Array.from(this._elSpinners).findIndex((t=>t===e.target));if("ArrowRight"===e.key){const e=this._elSpinners[t+1];e&&e.focus()}if("ArrowLeft"===e.key){const e=this._elSpinners[t-1];e&&e.focus()}})),r(this,li,((e,t)=>{a(this,di)[t]=e;const s=new Date;s.setFullYear(parseInt(a(this,di).year)),s.setMonth(parseInt(a(this,di).month)-1),s.setDate(parseInt(a(this,di).day)),"Invalid Date"!==s.toString()&&(this.value=s,l(this,Ys,Ps).call(this))})),r(this,di,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map((e=>e.token)).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=l(this,oi,ni).call(this,e)}async getFocusedDate(){return this.open?this._elCalendar.then((e=>e.focusedDate)):void 0}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then((t=>t.getDateCell(e)))}connectedCallback(){super.connectedCallback(),j.instance.apply(this,"gds-datepicker")}render(){return M`${this._tStyles}
      ${Mt(this.label&&!this.hideLabel,(()=>M`<label for="spinner-0" id="label">${this.label}</label>`))}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${Lt({field:!0,small:"small"===this.size})}
        id="trigger"
        @click=${a(this,Js)}
        @copy=${a(this,Xs)}
        @paste=${a(this,Ks)}
      >
        <div
          class=${Lt({input:!0,"is-placeholder":!this.value})}
          @focusout=${a(this,Us)}
        >
          ${Dt(zt(this._dateFormatLayout.layout,((e,t)=>M`<gds-date-part-spinner
                  id="spinner-${t}"
                  .length=${"y"===e.token?4:2}
                  .value=${a(this,di)[e.name]}
                  aria-valuemin=${l(this,js,Is).call(this,e.name)}
                  aria-valuemax=${l(this,Rs,Os).call(this,e.name)}
                  aria-label=${l(this,Bs,Ns).call(this,e.name)}
                  aria-describedby="label"
                  @keydown=${a(this,ri)}
                  @change=${t=>a(this,li).call(this,t.detail.value,e.name)}
                  @focus=${a(this,qs)}
                  @touchend=${e=>{this.open=!0,e.preventDefault()}}
                ></gds-date-part-spinner>`)),M`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${Vt("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          @click=${()=>this.open=!this.open}
        >
          <svg viewBox="0 0 24 24" inert>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </button>
      </div>

      <div class="form-info"><slot name="message"></slot></div>

      <gds-popover
        .triggerRef=${this._elTrigger}
        .open=${this.open}
        @gds-ui-state=${a(this,ai)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        @focusin=${async e=>{"calendar-popover"===e.target?.id&&this._elCalendar.then((e=>e.focus()))}}
      >
        <div class="header">
          <button
            @click=${a(this,si)}
            aria-label=${Vt("Previous month")}
          >
            <i class="icon prev"></i>
          </button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${a(this,Qs)}
            .maxHeight=${300}
            label="${Vt("Month")}"
            style="width:120px"
            size="small"
            hide-label
          >
            <gds-option value="0">${Vt("January")}</gds-option>
            <gds-option value="1">${Vt("February")}</gds-option>
            <gds-option value="2">${Vt("March")}</gds-option>
            <gds-option value="3">${Vt("April")}</gds-option>
            <gds-option value="4">${Vt("May")}</gds-option>
            <gds-option value="5">${Vt("June")}</gds-option>
            <gds-option value="6">${Vt("July")}</gds-option>
            <gds-option value="7">${Vt("August")}</gds-option>
            <gds-option value="8">${Vt("September")}</gds-option>
            <gds-option value="9">${Vt("October")}</gds-option>
            <gds-option value="10">${Vt("November")}</gds-option>
            <gds-option value="11">${Vt("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${a(this,ei)}
            .maxHeight=${300}
            label="${Vt("Year")}"
            size="small"
            hide-label
          >
            ${Wt(a(this,hi,ci),(e=>e),(e=>M`<gds-option value=${e}>${e}</gds-option>`))}
          </gds-dropdown>
          <button
            @click=${a(this,ti)}
            aria-label=${Vt("Next month")}
          >
            <i class="icon next"></i>
          </button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${a(this,Zs)}
          @gds-date-focused=${a(this,ii)}
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
          <button
            class="tertiary clear"
            @click=${()=>{this.value=void 0,l(this,Ys,Ps).call(this)}}
          >
            ${Vt("Clear")}
          </button>
          ${At(l(this,Ws,Ls).call(this),Tt)}
          <button
            class="tertiary today"
            @click=${()=>{this.value=new Date,l(this,Ys,Ps).call(this)}}
          >
            ${Vt("Today")}
          </button>
        </div>
      </gds-popover> `}_handleValueChange(){if(!this.value)return void o(this,di,{year:"yyyy",month:"mm",day:"dd"});const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0");o(this,di,{year:t,month:s,day:i})}_handleOpenChange(){this.open&&(o(this,zs,this.value),this._elCalendar.then((e=>e.focus())))}};zs=new WeakMap,Ws=new WeakSet,Ls=async function(){const e=await this.getFocusedDate();let t,s="";return e&&e>this.max?(s=Vt("Last available date"),t=()=>l(this,Ts,Vs).call(this,this.max)):e&&e<this.min&&(s=Vt("First available date"),t=()=>l(this,Ts,Vs).call(this,this.min)),M`${Mt(s.length>0,(()=>M`<button class="tertiary back-to-range" @click=${t}>
          ${s}
        </button>`),(()=>Tt))}`},Ts=new WeakSet,Vs=function(e){const t=new Date(e);this._elCalendar.then((e=>e.focusedDate=t)).then(a(this,ii))},Bs=new WeakSet,Ns=function(e){return{year:Vt("Year"),month:Vt("Month"),day:Vt("Day")}[e]},js=new WeakSet,Is=function(e){return{year:1900,month:1,day:1}[e]},Rs=new WeakSet,Os=function(e){return{year:9999,month:12,day:31}[e]},Ys=new WeakSet,Ps=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))},Hs=new WeakSet,Gs=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))},Us=new WeakMap,qs=new WeakMap,Xs=new WeakMap,Ks=new WeakMap,Js=new WeakMap,Zs=new WeakMap,Qs=new WeakMap,ei=new WeakMap,ti=new WeakMap,si=new WeakMap,ii=new WeakMap,ai=new WeakMap,ri=new WeakMap,oi=new WeakSet,ni=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),i=s.findIndex((e=>"y"===e)),a=s.findIndex((e=>"m"===e)),r=s.findIndex((e=>"d"===e));if(-1===i||-1===a||-1===r)throw new Error("Invalid date format for <gds-datepicker>");return{delimiter:t,layout:[i,a,r].sort(((e,t)=>e-t)).map((e=>s[e])).map((e=>({token:e,name:"y"===e?"year":"m"===e?"month":"day"})))}},li=new WeakMap,di=new WeakMap,hi=new WeakSet,ci=function(){const e=this.min.getFullYear(),t=this.max.getFullYear(),s=a(this,pi,gi),i=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield i);for(let s=e;s<=t;s++)yield s}}},pi=new WeakSet,gi=function(){return!!this.value&&(this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear())},fi.styles=[ui],fi.shadowRootOptions={mode:"open",delegatesFocus:!0},s([Ft({converter:yi})],fi.prototype,"value",2),s([Ft({converter:yi})],fi.prototype,"min",2),s([Ft({converter:yi})],fi.prototype,"max",2),s([Ft({type:Boolean})],fi.prototype,"open",2),s([Ft()],fi.prototype,"label",2),s([Ft({type:Boolean,attribute:"show-week-numbers"})],fi.prototype,"showWeekNumbers",2),s([Ft()],fi.prototype,"size",2),s([Ft({type:Boolean,attribute:"hide-label"})],fi.prototype,"hideLabel",2),s([Ft()],fi.prototype,"dateformat",1),s([Ft({type:Boolean,attribute:"disabled-weekends"})],fi.prototype,"disabledWeekends",2),s([Ft({converter:mi,attribute:"disabled-dates"})],fi.prototype,"disabledDates",2),s([Et("#calendar-button")],fi.prototype,"test_calendarButton",2),s([St()],fi.prototype,"_focusedMonth",2),s([St()],fi.prototype,"_focusedYear",2),s([St()],fi.prototype,"_dateFormatLayout",2),s([Et("#calendar")],fi.prototype,"_elCalendar",2),s([Et("#trigger")],fi.prototype,"_elTrigger",2),s([$t(A("gds-date-part-spinner"))],fi.prototype,"_elSpinners",2),s([Ct(".input")],fi.prototype,"_elInput",2),s([St()],fi.prototype,"_tStyles",2),s([k("value")],fi.prototype,"_handleValueChange",1),s([k("open")],fi.prototype,"_handleOpenChange",1),fi=s([$("gds-datepicker")],fi);import{css as bi,LitElement as vi,unsafeCSS as wi}from"lit";import{property as ki,state as xi}from"lit/decorators.js";import{unsafeCSS as _i}from"lit";var Fi=[_i("/**\n * Do not edit directly\n * Generated on Tue, 16 Apr 2024 14:56:29 GMT\n */\n\n:host {\n  --gds-ref-color-neutral000: #ffffff;\n  --gds-ref-color-neutral050: #f8f8f8;\n  --gds-ref-color-neutral100: #e9e9e9;\n  --gds-ref-color-neutral150: #eeeeee;\n  --gds-ref-color-neutral200: #dedede;\n  --gds-ref-color-neutral250: #cecece;\n  --gds-ref-color-neutral300: #ababab;\n  --gds-ref-color-neutral350: #adadad;\n  --gds-ref-color-neutral400: #868686;\n  --gds-ref-color-neutral450: #757575;\n  --gds-ref-color-neutral500: #494949;\n  --gds-ref-color-neutral525: #464646;\n  --gds-ref-color-neutral550: #333333;\n  --gds-ref-color-neutral600: #2c2c2c;\n  --gds-ref-color-neutral650: #272727;\n  --gds-ref-color-neutral700: #222222;\n  --gds-ref-color-neutral750: #1a1a1a;\n  --gds-ref-color-neutral800: #121212;\n  --gds-ref-color-blue100: #58b8ee;\n  --gds-ref-color-blue200: #41b0ee;\n  --gds-ref-color-blue300: #00adff;\n  --gds-ref-color-blue400: #2c9cd9;\n  --gds-ref-color-blue500: #0092e1;\n  --gds-ref-color-blue600: #007ac7;\n  --gds-ref-color-blue700: #0062bc;\n  --gds-ref-color-green100: #75b44a;\n  --gds-ref-color-green200: #60cd18;\n  --gds-ref-color-green300: #45b400;\n  --gds-ref-color-green400: #308800;\n  --gds-ref-color-red100: #f7706d;\n  --gds-ref-color-red200: #ff594f;\n  --gds-ref-color-red300: #f03529;\n  --gds-ref-color-red400: #d81a1a;\n  --gds-ref-color-red500: #c82a29;\n  --gds-ref-color-red600: #bb000c;\n  --gds-ref-color-red700: #9f000a;\n  --gds-ref-color-red800: #9e2120;\n  --gds-ref-color-purple100: #ad91dc;\n  --gds-ref-color-purple200: #7e52cc;\n  --gds-ref-color-purple300: #673ab6;\n  --gds-ref-color-purple400: #4f2C99;\n  --gds-ref-color-purple500: #4a328f;\n  --gds-ref-color-purple600: #3f2587;\n  --gds-ref-color-yellow100: #ffe182;\n  --gds-ref-color-yellow200: #ffc500;\n  --gds-ref-color-yellow300: #ffb400;\n  --gds-ref-color-yellow400: #f8a000;\n  --gds-ref-color-yellow500: #f0be47;\n  --gds-ref-color-yellow600: #ebab39;\n  --gds-ref-color-blue-5: #001127;\n  --gds-ref-color-blue-10: #001C39;\n  --gds-ref-color-blue-15: #00264B;\n  --gds-ref-color-blue-20: #00315D;\n  --gds-ref-color-blue-25: #003C70;\n  --gds-ref-color-blue-30: #004883;\n  --gds-ref-color-blue-35: #005397;\n  --gds-ref-color-blue-40: #005FAC;\n  --gds-ref-color-blue-45: #006CC1;\n  --gds-ref-color-blue-50: #0078D7;\n  --gds-ref-color-blue-55: #0085EC;\n  --gds-ref-color-blue-60: #1992FF;\n  --gds-ref-color-blue-65: #4EA0FF;\n  --gds-ref-color-blue-70: #6FAEFF;\n  --gds-ref-color-blue-75: #8ABBFF;\n  --gds-ref-color-blue-80: #A4C9FF;\n  --gds-ref-color-blue-85: #BCD6FF;\n  --gds-ref-color-blue-90: #D4E3FF;\n  --gds-ref-color-blue-95: #EBF1FF;\n  --gds-ref-color-blue-98: #F8F9FF;\n  --gds-ref-color-green-5: #001505;\n  --gds-ref-color-green-10: #00210E;\n  --gds-ref-color-green-15: #002D10;\n  --gds-ref-color-green-20: #003916;\n  --gds-ref-color-green-25: #00461D;\n  --gds-ref-color-green-30: #005323;\n  --gds-ref-color-green-35: #00602A;\n  --gds-ref-color-green-40: #006D31;\n  --gds-ref-color-green-45: #007B38;\n  --gds-ref-color-green-50: #138942;\n  --gds-ref-color-green-55: #29964D;\n  --gds-ref-color-green-60: #39A459;\n  --gds-ref-color-green-65: #48B265;\n  --gds-ref-color-green-70: #57C071;\n  --gds-ref-color-green-75: #65CE7E;\n  --gds-ref-color-green-80: #73DC8A;\n  --gds-ref-color-green-85: #81EA97;\n  --gds-ref-color-green-90: #8FF9A4;\n  --gds-ref-color-green-95: #C5FFCA;\n  --gds-ref-color-green-98: #EAFFE8;\n  --gds-ref-color-black: #000000;\n  --gds-ref-color-white: #FFFFFF;\n  --gds-ref-color-grey-5: #0D0D0C;\n  --gds-ref-color-grey-10: #1B1B18;\n  --gds-ref-color-grey-15: #282825;\n  --gds-ref-color-grey-20: #353531;\n  --gds-ref-color-grey-25: #42423D;\n  --gds-ref-color-grey-30: #505049;\n  --gds-ref-color-grey-35: #5D5D56;\n  --gds-ref-color-grey-40: #6A6A62;\n  --gds-ref-color-grey-45: #77776E;\n  --gds-ref-color-grey-50: #85857A;\n  --gds-ref-color-grey-55: #919188;\n  --gds-ref-color-grey-60: #9D9D95;\n  --gds-ref-color-grey-65: #A9A9A2;\n  --gds-ref-color-grey-70: #B6B6AF;\n  --gds-ref-color-grey-75: #C2C2BD;\n  --gds-ref-color-grey-80: #CECECA;\n  --gds-ref-color-grey-85: #DADAD7;\n  --gds-ref-color-grey-90: #E7E7E4;\n  --gds-ref-color-grey-95: #F3F3F2;\n  --gds-ref-color-grey-98: #F9F9F9;\n  --gds-ref-color-orange-5: #1A0F00;\n  --gds-ref-color-orange-10: #271900;\n  --gds-ref-color-orange-15: #352200;\n  --gds-ref-color-orange-20: #422C00;\n  --gds-ref-color-orange-25: #503700;\n  --gds-ref-color-orange-30: #503700;\n  --gds-ref-color-orange-35: #6E4C00;\n  --gds-ref-color-orange-40: #7D5700;\n  --gds-ref-color-orange-45: #8D6300;\n  --gds-ref-color-orange-50: #9D6E00;\n  --gds-ref-color-orange-55: #AE7A00;\n  --gds-ref-color-orange-60: #BE8600;\n  --gds-ref-color-orange-65: #CF9300;\n  --gds-ref-color-orange-70: #E19F00;\n  --gds-ref-color-orange-75: #F2AC00;\n  --gds-ref-color-orange-80: #FFBA30;\n  --gds-ref-color-orange-85: #FFCC77;\n  --gds-ref-color-orange-90: #FFDEAB;\n  --gds-ref-color-orange-95: #FFEED9;\n  --gds-ref-color-orange-98: #FFF8F3;\n  --gds-ref-color-red-5: #2B0200;\n  --gds-ref-color-red-10: #3E0400;\n  --gds-ref-color-red-15: #510700;\n  --gds-ref-color-red-20: #650B00;\n  --gds-ref-color-red-25: #790F00;\n  --gds-ref-color-red-30: #8E1400;\n  --gds-ref-color-red-35: #A31800;\n  --gds-ref-color-red-40: #BA1D00;\n  --gds-ref-color-red-45: #D02200;\n  --gds-ref-color-red-50: #E23010;\n  --gds-ref-color-red-55: #F53E1D;\n  --gds-ref-color-red-60: #FF5636;\n  --gds-ref-color-red-65: #FF7257;\n  --gds-ref-color-red-70: #FF8A73;\n  --gds-ref-color-red-75: #FFA08D;\n  --gds-ref-color-red-80: #FFB4A5;\n  --gds-ref-color-red-85: #FFC8BC;\n  --gds-ref-color-red-90: #FFDAD3;\n  --gds-ref-color-red-95: #FFEDE9;\n  --gds-ref-color-red-98: #FFF8F6;\n}\n"),_i("/**\n * Do not edit directly\n * Generated on Tue, 16 Apr 2024 14:56:29 GMT\n */\n\n:host {\n  color-scheme: light;\n  --gds-sys-color-blue: #41b0ee;\n  --gds-sys-color-dark-blue-1: #41b0ee;\n  --gds-sys-color-dark-blue-2: #007ac7;\n  --gds-sys-color-green: #60cd18;\n  --gds-sys-color-dark-green-1: #45b400;\n  --gds-sys-color-dark-green-2: #308800;\n  --gds-sys-color-yellow: #ffc500;\n  --gds-sys-color-dark-yellow-1: #ffb400;\n  --gds-sys-color-dark-yellow-2: #f8a000;\n  --gds-sys-color-primary-text: #333333;\n  --gds-sys-color-secondary-text: #ababab;\n  --gds-sys-color-white-text: #ffffff;\n  --gds-sys-color-link-text: #0062bc;\n  --gds-sys-color-error-text: #9f000a;\n  --gds-sys-color-disabled-text: #adadad;\n  --gds-sys-color-red: #f03529;\n  --gds-sys-color-dark-red-1: #d81a1a;\n  --gds-sys-color-dark-red-2: #bb000c;\n  --gds-sys-color-purple: #673ab6;\n  --gds-sys-color-dark-purple-1: #4f2C99;\n  --gds-sys-color-dark-purple-2: #3f2587;\n  --gds-sys-color-base-white: #ffffff;\n  --gds-sys-color-base100: #f8f8f8;\n  --gds-sys-color-base200: #e9e9e9;\n  --gds-sys-color-base300: #dedede;\n  --gds-sys-color-base400: #cecece;\n  --gds-sys-color-base500: #adadad;\n  --gds-sys-color-base600: #868686;\n  --gds-sys-color-base700: #494949;\n  --gds-sys-color-base800: #333333;\n  --gds-sys-color-base900: #1a1a1a;\n  --gds-sys-color-accent-accent-green: #006D31;\n  --gds-sys-color-accent-on-accent-green: #FFFFFF;\n  --gds-sys-color-accent-accent-orange: #FFBA30;\n  --gds-sys-color-accent-on-accent-orange: #353531;\n  --gds-sys-color-background-background: #FFFFFF;\n  --gds-sys-color-background-background-dim: #F3F3F2;\n  --gds-sys-color-container-container: #F3F3F2;\n  --gds-sys-color-container-container-dim1: #E7E7E4;\n  --gds-sys-color-container-container-dim2: #DADAD7;\n  --gds-sys-color-container-container-bright: #FFFFFF;\n  --gds-sys-color-container-container-shade1: #353531;\n  --gds-sys-color-container-container-shade2: #1B1B18;\n  --gds-sys-color-container-container-shade3: #353531;\n  --gds-sys-color-container-container-disabled: #F9F9F9;\n  --gds-sys-color-container-container-positive: #006D31;\n  --gds-sys-color-container-container-negative: #BA1D00;\n  --gds-sys-color-container-container-negative-bright: #FFEDE9;\n  --gds-sys-color-content-content: #353531;\n  --gds-sys-color-content-content-inverse: #FFFFFF;\n  --gds-sys-color-content-content-secondary: #6A6A62;\n  --gds-sys-color-content-content-positive: #006D31;\n  --gds-sys-color-content-content-positive-bright: #EAFFE8;\n  --gds-sys-color-content-content-negative: #BA1D00;\n  --gds-sys-color-content-content-negative-bright: #FFF8F6;\n  --gds-sys-color-content-content-custom-blue-bright: #F8F9FF;\n  --gds-sys-color-content-content-disabled: #9D9D95;\n  --gds-sys-color-custom-custom-blue: #005FAC;\n  --gds-sys-color-custom-on-custom-blue: #D4E3FF;\n  --gds-sys-color-custom-custom-blue-bright: #D4E3FF;\n  --gds-sys-color-custom-on-custom-blue-bright: #00315D;\n  --gds-sys-color-custom-custom-green: #003916;\n  --gds-sys-color-custom-on-custom-green: #EAFFE8;\n  --gds-sys-color-custom-custom-green-bright: #EAFFE8;\n  --gds-sys-color-custom-on-custom-green-bright: #003916;\n  --gds-sys-color-custom-custom-grey: #353531;\n  --gds-sys-color-custom-on-custom-grey: #E7E7E4;\n  --gds-sys-color-custom-custom-grey-bright: #E7E7E4;\n  --gds-sys-color-custom-on-custom-grey-bright: #353531;\n  --gds-sys-color-primary-primary: #353531;\n  --gds-sys-color-state-layers-state-black: #000000 10%;\n  --gds-sys-color-state-layers-state-black-dim1: #000000 20%;\n  --gds-sys-color-state-layers-state-black-dim2: #000000 40%;\n  --gds-sys-color-state-layers-state-black-shade: #000000 60%;\n  --gds-sys-color-state-layers-state-positive: #006d31 10%;\n  --gds-sys-color-state-layers-state-positive-dim: #006d31 20%;\n  --gds-sys-color-state-layers-state-negative: #ba1d00 10%;\n  --gds-sys-color-state-layers-state-negative-dim: #ba1d00 20%;\n  --gds-sys-color-state-layers-state-custom-blue: #005fac 20%;\n  --gds-sys-color-status-information-information: #353531;\n  --gds-sys-color-status-information-on-information: #FFFFFF;\n  --gds-sys-color-status-information-information-bright: #F3F3F2;\n  --gds-sys-color-status-information-on-information-bright: #353531;\n  --gds-sys-color-status-negative-negative: #BA1D00;\n  --gds-sys-color-status-negative-on-negative: #FFFFFF;\n  --gds-sys-color-status-negative-negative-bright: #FFEDE9;\n  --gds-sys-color-status-negative-on-negative-bright: #BA1D00;\n  --gds-sys-color-status-warning-warning: #9D6E00;\n  --gds-sys-color-status-warning-on-warning: #FFFFFF;\n  --gds-sys-color-status-warning-warning-bright: #FFEED9;\n  --gds-sys-color-status-warning-on-warning-bright: #7D5700;\n  --gds-sys-color-status-positive-positive: #006D31;\n  --gds-sys-color-status-positive-on-positive: #FFFFFF;\n  --gds-sys-color-status-positive-positive-bright: #EAFFE8;\n  --gds-sys-color-status-positive-on-positive-bright: #006D31;\n  --gds-sys-color-status-notice-notice: #005FAC;\n  --gds-sys-color-status-notice-on-notice: #FFFFFF;\n  --gds-sys-color-status-notice-notice-bright: #EBF1FF;\n  --gds-sys-color-status-notice-on-notice-bright: #005FAC;\n  --gds-sys-color-stroke-stroke: #353531;\n  --gds-sys-color-stroke-stroke-variant1: #85857A;\n  --gds-sys-color-stroke-stroke-variant2: #CECECA;\n  --gds-sys-color-stroke-stroke-disabled: #9D9D95;\n  --gds-sys-color-stroke-stroke-notice: #005FAC;\n  --gds-sys-color-stroke-stroke-positive: #006D31;\n  --gds-sys-color-stroke-stroke-warning: #7D5700;\n  --gds-sys-color-stroke-stroke-negative: #BA1D00;\n  --gds-sys-color-stroke-stroke-custom-blue: #005FAC;\n  --gds-sys-color-stroke-stroke-custom-blue-bright: #6FAEFF;\n  --gds-sys-color-stroke-stroke-inversed: #FFFFFF;\n}\n"),_i("/**\n * Do not edit directly\n * Generated on Tue, 16 Apr 2024 14:56:29 GMT\n */\n\n:host {\n  --gds-sys-typography-weight-bold: 700;\n  --gds-sys-typography-weight-medium: 500;\n  --gds-sys-typography-weight-book: 450;\n  --gds-sys-typography-weight-regular: 400;\n  --gds-sys-typography-weight-light: 300;\n  --gds-sys-typography-size-label-overline: 14px;\n  --gds-sys-typography-size-label-input-medium: 14px;\n  --gds-sys-typography-size-label-input-large: 16px;\n  --gds-sys-typography-size-label-information-medium: 14px;\n  --gds-sys-typography-size-label-information-large: 16px;\n  --gds-sys-typography-size-label-small: 12px;\n  --gds-sys-typography-size-label-medium: 14px;\n  --gds-sys-typography-size-label-large: 16px;\n  --gds-sys-typography-size-body-small: 12px;\n  --gds-sys-typography-size-body-medium: 14px;\n  --gds-sys-typography-size-body-large: 16px;\n  --gds-sys-typography-size-title-small: 14px;\n  --gds-sys-typography-size-title-medium: 16px;\n  --gds-sys-typography-size-title-large: 22px;\n  --gds-sys-typography-size-headline-small: 24px;\n  --gds-sys-typography-size-headline-medium: 28px;\n  --gds-sys-typography-size-headline-large: 32px;\n  --gds-sys-typography-size-display-small: 40px;\n  --gds-sys-typography-size-display-medium: 64px;\n  --gds-sys-typography-size-display-large: 82px;\n  --gds-sys-typography-line-height-label-overline: 18px;\n  --gds-sys-typography-line-height-label-input-medium: 20px;\n  --gds-sys-typography-line-height-label-input-large: 20px;\n  --gds-sys-typography-line-height-label-information-medium: 20px;\n  --gds-sys-typography-line-height-label-information-large: 20px;\n  --gds-sys-typography-line-height-label-small: 16px;\n  --gds-sys-typography-line-height-label-medium: 20px;\n  --gds-sys-typography-line-height-label-large: 20px;\n  --gds-sys-typography-line-height-body-small: 16px;\n  --gds-sys-typography-line-height-body-medium: 20px;\n  --gds-sys-typography-line-height-body-large: 20px;\n  --gds-sys-typography-line-height-title-small: 20px;\n  --gds-sys-typography-line-height-title-medium: 24px;\n  --gds-sys-typography-line-height-title-large: 28px;\n  --gds-sys-typography-line-height-headline-small: 30px;\n  --gds-sys-typography-line-height-headline-medium: 36px;\n  --gds-sys-typography-line-height-headline-large: 40px;\n  --gds-sys-typography-line-height-display-small: 52px;\n  --gds-sys-typography-line-height-display-medium: 80px;\n  --gds-sys-typography-line-height-display-large: 98px;\n  --gds-sys-state-hover-state-layer-opacity: 0.10;\n  --gds-sys-grid-width-desktop-lg: 2560px;\n  --gds-sys-grid-width-desktop-md: 1440px;\n  --gds-sys-grid-width-desktop-sm: 1024px;\n  --gds-sys-grid-width-tablet: 768px;\n  --gds-sys-grid-width-mobile: 425px;\n  --gds-sys-grid-columns-24: 24;\n  --gds-sys-grid-columns-12: 12;\n  --gds-sys-grid-columns-8: 8;\n  --gds-sys-grid-columns-6: 6;\n  --gds-sys-grid-columns-4: 4;\n  --gds-sys-grid-columns-2: 2;\n  --gds-ref-size-15: 9999px;\n  --gds-ref-size-14: 128px;\n  --gds-ref-size-13: 112px;\n  --gds-ref-size-12: 96px;\n  --gds-ref-size-11: 80px;\n  --gds-ref-size-10: 64px;\n  --gds-ref-size-9: 48px;\n  --gds-ref-size-8: 40px;\n  --gds-ref-size-7: 32px;\n  --gds-ref-size-6: 24px;\n  --gds-ref-size-5: 16px;\n  --gds-ref-size-4: 12px;\n  --gds-ref-size-3: 8px;\n  --gds-ref-size-2: 4px;\n  --gds-ref-size-1: 2px;\n  --gds-ref-size-0: 0px;\n  --gds-sys-space-spacer-120: var(--gds-ref-size-14);\n  --gds-sys-space-spacer-112: var(--gds-ref-size-13);\n  --gds-sys-space-spacer-96: var(--gds-ref-size-12);\n  --gds-sys-space-spacer-80: var(--gds-ref-size-11);\n  --gds-sys-space-spacer-64: var(--gds-ref-size-10);\n  --gds-sys-space-spacer-48: var(--gds-ref-size-9);\n  --gds-sys-space-spacer-40: var(--gds-ref-size-8);\n  --gds-sys-space-spacer-32: var(--gds-ref-size-7);\n  --gds-sys-space-spacer-24: var(--gds-ref-size-6);\n  --gds-sys-space-spacer-16: var(--gds-ref-size-5);\n  --gds-sys-space-spacer-12: var(--gds-ref-size-4);\n  --gds-sys-space-spacer-8: var(--gds-ref-size-3);\n  --gds-sys-space-spacer-4: var(--gds-ref-size-2);\n  --gds-sys-space-spacer-2: var(--gds-ref-size-1);\n  --gds-sys-space-spacer-0: var(--gds-ref-size-0);\n  --gds-sys-space-padding-120: var(--gds-ref-size-14);\n  --gds-sys-space-padding-112: var(--gds-ref-size-13);\n  --gds-sys-space-padding-96: var(--gds-ref-size-12);\n  --gds-sys-space-padding-80: var(--gds-ref-size-11);\n  --gds-sys-space-padding-64: var(--gds-ref-size-10);\n  --gds-sys-space-padding-48: var(--gds-ref-size-9);\n  --gds-sys-space-padding-40: var(--gds-ref-size-8);\n  --gds-sys-space-padding-32: var(--gds-ref-size-7);\n  --gds-sys-space-padding-24: var(--gds-ref-size-6);\n  --gds-sys-space-padding-16: var(--gds-ref-size-5);\n  --gds-sys-space-padding-12: var(--gds-ref-size-4);\n  --gds-sys-space-padding-8: var(--gds-ref-size-3);\n  --gds-sys-space-padding-4: var(--gds-ref-size-2);\n  --gds-sys-space-padding-2: var(--gds-ref-size-1);\n  --gds-sys-space-padding-0: var(--gds-ref-size-0);\n  --gds-sys-space-margins-120: var(--gds-ref-size-14);\n  --gds-sys-space-margins-112: var(--gds-ref-size-13);\n  --gds-sys-space-margins-96: var(--gds-ref-size-12);\n  --gds-sys-space-margins-80: var(--gds-ref-size-11);\n  --gds-sys-space-margins-64: var(--gds-ref-size-10);\n  --gds-sys-space-margins-48: var(--gds-ref-size-9);\n  --gds-sys-space-margins-40: var(--gds-ref-size-8);\n  --gds-sys-space-margins-32: var(--gds-ref-size-7);\n  --gds-sys-space-margins-24: var(--gds-ref-size-6);\n  --gds-sys-space-margins-16: var(--gds-ref-size-5);\n  --gds-sys-space-margins-12: var(--gds-ref-size-4);\n  --gds-sys-space-margins-8: var(--gds-ref-size-3);\n  --gds-sys-space-margins-4: var(--gds-ref-size-2);\n  --gds-sys-space-margins-2: var(--gds-ref-size-1);\n  --gds-sys-space-margins-0: var(--gds-ref-size-0);\n  --gds-sys-radii-full: var(--gds-ref-size-15);\n  --gds-sys-radii-4xl: var(--gds-ref-size-12);\n  --gds-sys-radii-3xl: var(--gds-ref-size-9);\n  --gds-sys-radii-2xl: var(--gds-ref-size-7);\n  --gds-sys-radii-xl: var(--gds-ref-size-6);\n  --gds-sys-radii-l: var(--gds-ref-size-5);\n  --gds-sys-radii-m: var(--gds-ref-size-4);\n  --gds-sys-radii-s: var(--gds-ref-size-3);\n  --gds-sys-radii-xs: var(--gds-ref-size-2);\n  --gds-sys-radii-none: var(--gds-ref-size-0);\n  --gds-sys-grid-padding-3xl: var(--gds-ref-size-12);\n  --gds-sys-grid-padding-2xl: var(--gds-ref-size-9);\n  --gds-sys-grid-padding-xl: var(--gds-ref-size-7);\n  --gds-sys-grid-padding-l: var(--gds-ref-size-6);\n  --gds-sys-grid-padding-m: var(--gds-ref-size-5);\n  --gds-sys-grid-padding-s: var(--gds-ref-size-3);\n  --gds-sys-grid-padding-xs: var(--gds-ref-size-2);\n  --gds-sys-grid-padding-none: var(--gds-ref-size-0);\n  --gds-sys-grid-gap-3xl: var(--gds-ref-size-12);\n  --gds-sys-grid-gap-2xl: var(--gds-ref-size-9);\n  --gds-sys-grid-gap-xl: var(--gds-ref-size-7);\n  --gds-sys-grid-gap-l: var(--gds-ref-size-6);\n  --gds-sys-grid-gap-m: var(--gds-ref-size-5);\n  --gds-sys-grid-gap-s: var(--gds-ref-size-3);\n  --gds-sys-grid-gap-xs: var(--gds-ref-size-2);\n  --gds-sys-grid-gap-none: var(--gds-ref-size-0);\n  --gds-sys-grid-breakpoint-desktop-lg: var(--gds-sys-grid-columns-12);\n  --gds-sys-grid-breakpoint-desktop-md: var(--gds-sys-grid-columns-12);\n  --gds-sys-grid-breakpoint-desktop-sm: var(--gds-sys-grid-columns-12);\n  --gds-sys-grid-breakpoint-tablet: var(--gds-sys-grid-columns-12);\n  --gds-sys-grid-breakpoint-mobile: var(--gds-sys-grid-columns-4);\n}\n")];import{css as Ci}from"lit";var $i=Ci`
  @layer grid, grid.desktop, grid.tablet, grid.mobile, grid.span, grid.space, grid.align, grid.debug;

  @layer grid {
    :host {
      --_c: var(--gds-sys-grid-columns-12);
      --_grid-col: repeat(var(--_c), 1fr);
      --_grid-col-start: 1;
      --_grid-col-end: -1;
      --_gap-column: 0;
      --_gap-row: 0;
      display: grid;
      width: 100%;
      grid-template-columns: var(--_grid-col);
      grid-column-gap: var(--_gap-column);
      grid-row-gap: var(--_gap-row);
      padding: var(--_grid-padding);
      text-wrap: balance;
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
  }

  /* Responsive */
  :host {
    --_c: var(--_columns-desktop);
    --_gap-column: var(--_gap-desktop);
    --_gap-row: var(--_row-gap-desktop);
    --_grid-padding: var(--_padding-desktop);
    --_col-width: var(--_col-width-desktop);
  }

  @media only screen and (max-width: 768px) {
    :host {
      --_c: var(--_columns-tablet);
      --_gap-column: var(--_gap-tablet);
      --_gap-row: var(--_row-gap-tablet);
      --_grid-padding: var(--_padding-tablet);
      --_col-width: var(--_col-width-tablet);
    }
  }

  @media only screen and (max-width: 425px) {
    :host {
      --_c: var(--_columns-mobile);
      --_gap-column: var(--_gap-mobile);
      --_gap-row: var(--_row-gap-mobile);
      --_grid-padding: var(--_padding-mobile);
      --_col-width: var(--_col-width-mobile);
    }
  }
`,Ei=/(?<l>l:([a-z0-9]+))?\s*(?<m>m:([a-z0-9]+))?\s*(?<s>s:([a-z0-9]+))?/,Si=class extends vi{constructor(){super(...arguments),this._gridVariables={varsColumn:bi``,varsGap:bi``,varsRowGap:bi``,varsPadding:bi``,varsAutoColumns:bi``}}connectedCallback(){super.connectedCallback(),this._updateColumnVariables(),this._updateGapVariables(),this._updateRowGapVariables(),this._updatePaddingVariables(),this._updateAutoColumnsVariables()}_updateColumnVariables(){const e=this.columns?.match(Ei);let t,s,i;if(this.columns&&!isNaN(Number(this.columns)))t=s=i=Number(this.columns);else{const{l:a,m:r,s:o}=e?.groups||{};t=a?Number(a.split(":")[1]):void 0,s=r?Number(r.split(":")[1]):void 0,i=o?Number(o.split(":")[1]):void 0}const a=[{name:"_columns-desktop",value:t},{name:"_columns-tablet",value:s},{name:"_columns-mobile",value:i}].filter((({value:e})=>void 0!==e)).map((({name:e,value:t})=>`--${e}: ${t};`)).join(" ");this._gridVariables={...this._gridVariables,varsColumn:bi`
        ${wi(a)}
      `},this.requestUpdate("_gridVariables")}_updateGapVariables(){const e=this.gap?.match(Ei);let t,s,i;if(this.gap&&!this.gap.includes(" "))t=s=i=`var(--gds-sys-grid-gap-${this.gap})`;else{const{l:a,m:r,s:o}=e?.groups||{};t=a?`var(--gds-sys-grid-gap-${a.split(":")[1]})`:void 0,s=r?`var(--gds-sys-grid-gap-${r.split(":")[1]})`:void 0,i=o?`var(--gds-sys-grid-gap-${o.split(":")[1]})`:void 0}const a=[{name:"_gap-desktop",value:t},{name:"_gap-tablet",value:s},{name:"_gap-mobile",value:i}].filter((({value:e})=>void 0!==e)).map((({name:e,value:t})=>`--${e}: ${t};`)).join(" ");this._gridVariables={...this._gridVariables,varsGap:bi`
        ${wi(a)}
      `},this.requestUpdate("_gridVariables")}_updateRowGapVariables(){const e=this.rowGap?.match(Ei);let t,s,i;if(this.rowGap&&!this.rowGap.includes(" "))t=s=i=`var(--gds-sys-grid-gap-${this.rowGap})`;else{const{l:a,m:r,s:o}=e?.groups||{};t=a?`var(--gds-sys-grid-gap-${a.split(":")[1]})`:void 0,s=r?`var(--gds-sys-grid-gap-${r.split(":")[1]})`:void 0,i=o?`var(--gds-sys-grid-gap-${o.split(":")[1]})`:void 0}const a=[{name:"_row-gap-desktop",value:t},{name:"_row-gap-tablet",value:s},{name:"_row-gap-mobile",value:i}].filter((({value:e})=>void 0!==e)).map((({name:e,value:t})=>`--${e}: ${t};`)).join(" ");this._gridVariables={...this._gridVariables,varsRowGap:bi`
        ${wi(a)}
      `},this.requestUpdate("_gridVariables")}_updatePaddingVariables(){const e=this.padding?.match(Ei);let t,s,i;if(this.padding&&!this.padding.includes(" "))t=s=i=`var(--gds-sys-grid-gap-${this.gap})`;else{const{l:a,m:r,s:o}=e?.groups||{};t=a?`var(--gds-sys-grid-gap-${a.split(":")[1]})`:void 0,s=r?`var(--gds-sys-grid-gap-${r.split(":")[1]})`:void 0,i=o?`var(--gds-sys-grid-gap-${o.split(":")[1]})`:void 0}const a=[{name:"_padding-desktop",value:t},{name:"_padding-tablet",value:s},{name:"_padding-mobile",value:i}].filter((({value:e})=>void 0!==e)).map((({name:e,value:t})=>`--${e}: ${t};`)).join(" ");this._gridVariables={...this._gridVariables,varsPadding:bi`
        ${wi(a)}
      `},this.requestUpdate("_gridVariables")}_updateAutoColumnsVariables(){const e=this.autoColumns?.match(Ei);let t,s,i;if(this.autoColumns&&!this.autoColumns.includes(" "))t=s=i=`${this.autoColumns}px`;else{const{l:a,m:r,s:o}=e?.groups||{};t=a?`${a.split(":")[1]}px`:void 0,s=r?`${r.split(":")[1]}px`:void 0,i=o?`${o.split(":")[1]}px`:void 0}const a=[{name:"_col-width-mobile",value:i},{name:"_col-width-tablet",value:s},{name:"_col-width-desktop",value:t}].filter((({value:e})=>void 0!==e)).map((({name:e,value:t})=>`--${e}: ${t};`)).join(" ");this._gridVariables={...this._gridVariables,varsAutoColumns:bi`
        ${wi(a)}
      `},this.requestUpdate("_gridVariables")}_updateGridCss(){const e=new CSSStyleSheet;if(e.replaceSync(`:host {${Object.values(this._gridVariables).join("")}} `),this.shadowRoot){const t=(Array.isArray(Si.styles)?Si.styles:[Si.styles]).flatMap((e=>{if(Array.isArray(e))return e.map((e=>{const t=new CSSStyleSheet;return t.replaceSync(e.cssText),t}));{const t=new CSSStyleSheet;return t.replaceSync(e.cssText),[t]}}));this.shadowRoot.adoptedStyleSheets=[e,...t]}}render(){return M` <slot></slot> `}};Si.styles=[Fi,$i],Si.shadowRootOptions={mode:"open",delegatesFocus:!0},s([ki({attribute:"columns",type:String})],Si.prototype,"columns",2),s([ki({attribute:"gap",type:String})],Si.prototype,"gap",2),s([ki({attribute:"row-gap",type:String})],Si.prototype,"rowGap",2),s([ki({attribute:"padding",type:String})],Si.prototype,"padding",2),s([ki({attribute:"auto-columns",type:String})],Si.prototype,"autoColumns",2),s([xi()],Si.prototype,"_gridVariables",2),s([k("columns")],Si.prototype,"_updateColumnVariables",1),s([k("gap")],Si.prototype,"_updateGapVariables",1),s([k("row-gap")],Si.prototype,"_updateRowGapVariables",1),s([k("padding")],Si.prototype,"_updatePaddingVariables",1),s([k("autoColumns")],Si.prototype,"_updateAutoColumnsVariables",1),s([k("_gridVariables")],Si.prototype,"_updateGridCss",1),Si=s([$("gds-grid")],Si);import{state as Di,property as Mi}from"lit/decorators.js";import{when as Ai}from"lit/directives/when.js";var zi=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return M`<slot></slot>`}};zi=s([$("gds-list-item")],zi);var Wi=class extends R{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),w(this),j.instance.apply(this,"gds-grouped-list")}render(){return M`${this._tStyles}${Ai(this.label,(()=>M`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`))}
      <div role="list" aria-labelledby="label">
        <slot gds-allow="gds-list-item"></slot>
      </div>`}};s([Di()],Wi.prototype,"_tStyles",2),s([Mi()],Wi.prototype,"label",2),Wi=s([$("gds-grouped-list")],Wi);import{unsafeCSS as Li}from"lit";import{query as Ti,state as Vi,property as Bi}from"lit/decorators.js";import{when as Ni}from"lit/directives/when.js";import{msg as ji}from"@lit/localize";import{property as Ii}from"lit/decorators.js";import{unsafeCSS as Ri}from"lit";var Oi=class extends R{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),j.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return M`<button aria-current=${String(this.selected)}>
      <slot></slot>
    </button>`}};Oi.styles=[...Fi,Ri(":host {\n  z-index: 1;\n  display: flex;\n  transition: 0.2s;\n}\n\nbutton {\n  flex-shrink: 0;\n  flex-grow: 1;\n  font-family: inherit;\n  padding: 0 1rem;\n  text-align: center;\n  cursor: pointer;\n  border-radius: calc(infinity * 1px);\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: transparent;\n  border-width: 0;\n  font-size: inherit;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  color: var(--gds-sys-color-content-content);\n}\n\n@media (pointer: fine) {\n  button:hover {\n    background-color: color-mix(\n      in srgb,\n      var(--gds-sys-color-state-layers-state-black-dim1),\n      transparent\n    );\n  }\n}\n\nbutton:focus-visible {\n  outline: 2px solid #000;\n  outline-offset: -2px;\n}\n")],s([Ii({type:Boolean,reflect:!0})],Oi.prototype,"selected",2),s([Ii()],Oi.prototype,"value",2),Oi=s([$("gds-segment")],Oi);var Yi,Pi,Hi,Gi,Ui,qi,Xi,Ki,Ji,Zi,Qi,ea,ta,sa,ia,aa,ra,oa,na,la,da,ha,ca,pa,ga,ua={small:36,medium:44},ya=e=>e?0:4,ma=class extends R{constructor(){super(...arguments),r(this,oa),this.segMinWidth=100,this.size="medium",r(this,Yi,void 0),this._showPrevButton=!1,this._showNextButton=!1,r(this,Pi,void 0),r(this,Hi,new ResizeObserver((()=>{a(this,Pi)&&clearTimeout(a(this,Pi)),o(this,Pi,setTimeout((()=>{a(this,aa).call(this)}),20))}))),r(this,Gi,0),r(this,Ui,0),r(this,qi,0),r(this,Xi,0),r(this,Ki,0),r(this,Ji,0),r(this,Zi,0),r(this,Qi,!1),r(this,ea,(e=>{o(this,Ji,e.clientX),o(this,Zi,a(this,Xi)),o(this,Qi,!0)})),r(this,ta,(e=>{if(!a(this,Qi))return;e.preventDefault();const t=e.clientX-a(this,Ji);if(!(Math.abs(t)<5))try{this._elSegments.hasPointerCapture(e.pointerId)||this._elSegments.setPointerCapture(e.pointerId),o(this,Xi,a(this,Zi)+t),a(this,ra).call(this)}catch{}})),r(this,sa,(e=>{if(a(this,Qi)){o(this,Qi,!1);try{this._elSegments.releasePointerCapture(e.pointerId),a(this,ia).call(this)}catch{}}})),r(this,ia,(()=>{o(this,Gi,Math.round(-a(this,Xi)/a(this,Ui))),a(this,aa).call(this)})),r(this,aa,((e=!1)=>{const t=()=>{const e=this.segments.length,t=this._elTrack.offsetWidth;if(t/e>this.segMinWidth)return{count:e,segmentWidth:(t-ya(this.isUsingTransitionalStyles)*(e-1))/e};const s=this.offsetWidth-2*ua[this.size],i=Math.floor(s/this.segMinWidth);return{count:i,segmentWidth:(t-ya(this.isUsingTransitionalStyles)*(i-1))/i}},{count:s}=t();e&&(a(this,Ki)>=a(this,Gi)+s&&o(this,Gi,a(this,Ki)-s+1),a(this,Ki)<a(this,Gi)&&o(this,Gi,a(this,Ki)));const i=this.segments.length-s,r=a(this,Gi)>=i,n=a(this,Gi)<=0;r&&o(this,Gi,i),n&&o(this,Gi,0),a(this,ha).call(this,s),this.updateComplete.then((()=>{const{segmentWidth:e,count:s}=t();this.segments.forEach((t=>{t.style.width=e+"px"})),o(this,Xi,-a(this,Gi)*e-ya(this.isUsingTransitionalStyles)*a(this,Gi)),a(this,ra).call(this),o(this,Ui,e),o(this,qi,e),a(this,ca).call(this)}))})),r(this,ra,(()=>{window.requestAnimationFrame((()=>{this._elSegments.style.transform=`translateX(${a(this,Xi)}px)`}))})),r(this,la,(()=>{n(this,Gi)._--,a(this,aa).call(this)})),r(this,da,(()=>{n(this,Gi)._++,a(this,aa).call(this)})),r(this,ha,(e=>{this._showPrevButton=a(this,Gi)>0,this._showNextButton=a(this,Gi)<this.segments.length-e})),r(this,ca,(()=>{const e=this.segments.find((e=>e.selected));if(e){const t=this.segments.indexOf(e),s=t*a(this,qi)+ya(this.isUsingTransitionalStyles)*t;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${a(this,qi)}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"})),r(this,pa,(e=>{const t=this.segments.find((t=>t===e.target||t.contains(e.target)));t&&(this.segments.forEach((e=>e.selected=!1)),t.selected=!0,o(this,Yi,t.value),a(this,ca).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0})))})),r(this,ga,(()=>{a(this,Yi)&&this.updateComplete.then((()=>{const e=this.segments.find((e=>e.value===a(this,Yi)));e&&(this.segments.forEach((e=>e.selected=!1)),e.selected=!0,o(this,Ki,this.segments.indexOf(e)),a(this,aa).call(this,!0))}))}))}get value(){return a(this,Yi)}set value(e){o(this,Yi,e),a(this,ga).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),j.instance.apply(this,"gds-segmented-control"),a(this,Hi).observe(this),this.addEventListener("focusin",(e=>{e.target instanceof Oi&&(o(this,Ki,this.segments.indexOf(e.target)),a(this,aa).call(this,!0))}))}disconnectedCallback(){super.disconnectedCallback(),a(this,Hi).unobserve(this)}render(){return M`${this._tStyles}
      ${Ni(this._showPrevButton,(()=>M`<button
            id="btn-prev"
            @click=${a(this,la)}
            aria-label=${ji("Scroll right")}
          >
            <gds-icon name="chevron-left"></gds-icon>
          </button>`))}
      <div
        id="track"
        @scroll=${()=>{this._elTrack.scrollLeft=0}}
      >
        <div
          id="segments"
          @pointerdown=${a(this,ea)}
          @pointermove=${a(this,ta)}
          @touchmove=${a(this,ta)}
          @pointerup=${a(this,sa)}
          @pointercancel=${a(this,sa)}
          role="list"
        >
          <slot
            gds-allow="gds-segment"
            @click=${a(this,pa)}
            @slotchange=${l(this,oa,na)}
            role="none"
          ></slot>
          <div id="indicator" role="none"></div>
        </div>
      </div>
      ${Ni(this._showNextButton,(()=>M`<button
            id="btn-next"
            @click=${a(this,da)}
            aria-label=${ji("Scroll right")}
          >
            <gds-icon name="chevron-right"></gds-icon>
          </button>`))}`}_recalculateMinWidth(){this.updateComplete.then((()=>a(this,aa).call(this)))}};Yi=new WeakMap,Pi=new WeakMap,Hi=new WeakMap,Gi=new WeakMap,Ui=new WeakMap,qi=new WeakMap,Xi=new WeakMap,Ki=new WeakMap,Ji=new WeakMap,Zi=new WeakMap,Qi=new WeakMap,ea=new WeakMap,ta=new WeakMap,sa=new WeakMap,ia=new WeakMap,aa=new WeakMap,ra=new WeakMap,oa=new WeakSet,na=function(){const e=this.segments.find((e=>e.selected))?.value;e&&o(this,Yi,e),a(this,aa).call(this)},la=new WeakMap,da=new WeakMap,ha=new WeakMap,ca=new WeakMap,pa=new WeakMap,ga=new WeakMap,ma.styles=[Fi,Li(":host {\n  box-sizing: border-box;\n  display: inline-flex;\n  background-color: var(--gds-sys-color-container-container-dim1);\n  border: 0.25rem solid var(--gds-sys-color-container-container-dim1);\n  gap: 0.25rem;\n  border-radius: calc(infinity * 1px);\n  contain: layout;\n  max-width: 100%;\n  overflow: hidden;\n  height: 3rem;\n}\n\n:host([size='small']) {\n  height: 2.5rem;\n}\n\n#track {\n  box-sizing: border-box;\n  display: flex;\n  flex-grow: 0;\n  flex-shrink: 1;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n\n#segments {\n  box-sizing: border-box;\n  display: inline-flex;\n  transition: 0.2s;\n  position: relative;\n  z-index: 1;\n  gap: 0.25rem;\n}\n\n#btn-prev,\n#btn-next {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  border-radius: calc(infinity * 1px);\n  background-color: var(--gds-sys-color-container-container-dim1);\n  border-width: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  aspect-ratio: 1;\n  height: 100%;\n  width: 2.5rem;\n  cursor: pointer;\n  color: var(--gds-sys-color-content-content);\n\n  @media (pointer: fine) {\n    &:hover {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-sys-color-state-layers-state-black-dim1),\n        var(--gds-sys-color-container-container-dim1)\n      );\n    }\n  }\n}\n\n:host([size='small']) #btn-prev,\n:host([size='small']) #btn-next {\n  width: 2rem;\n}\n\n::slotted(*) {\n  flex-shrink: 0;\n  flex-grow: 1;\n  z-index: 1;\n}\n\n#indicator {\n  position: absolute;\n  left: 0;\n  height: 100%;\n  background-color: var(--gds-sys-color-container-container-bright);\n  border-radius: calc(infinity * 1px);\n  transition: transform 0.2s, width 0.2s;\n  z-index: 0;\n}\n")],s([Bi({type:Number,attribute:"seg-min-width"})],ma.prototype,"segMinWidth",2),s([Bi()],ma.prototype,"size",2),s([Bi()],ma.prototype,"value",1),s([Vi()],ma.prototype,"_tStyles",2),s([Ti("slot")],ma.prototype,"_elSlot",2),s([Ti("#indicator")],ma.prototype,"_elIndicator",2),s([Ti("#track")],ma.prototype,"_elTrack",2),s([Ti("#segments")],ma.prototype,"_elSegments",2),s([Vi()],ma.prototype,"_showPrevButton",2),s([Vi()],ma.prototype,"_showNextButton",2),s([k("segMinWidth")],ma.prototype,"_recalculateMinWidth",1),ma=s([$("gds-segmented-control")],ma);import{LitElement as fa,html as ba,unsafeCSS as va}from"lit";import{customElement as wa}from"lit/decorators.js";var ka=class extends fa{constructor(){super(...arguments),this.open=!1,this.name=""}static get styles(){return va("svg:not([display=none]) {\n  contain: layout style;\n  display: flex;\n  height: 1lh;\n  isolation: isolate;\n  overflow: hidden;\n  width: auto;\n}\n\nsymbol {\n  fill: none;\n  height: 24px;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2px;\n  width: 24px;\n}")}render(){const{name:e}=this;return ba`
      <svg display="none">
        <symbol id="plus">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </symbol>
        <symbol id="x">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </symbol>
        <symbol id="chevron-right">
          <polyline points="9 18 15 12 9 6" />
        </symbol>
        <symbol id="chevron-left">
          <polyline points="15 18 9 12 15 6" />
        </symbol>
        <symbol id="chevron-down">
          <polyline points="6 9 12 15 18 9" />
        </symbol>
        <symbol id="arrow">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </symbol>
        <symbol id="bell">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </symbol>
        <symbol id="calendar">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </symbol>
        <symbol id="lock">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </symbol>
        <symbol id="eye">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </symbol>
        <symbol id="hash">
          <line x1="4" y1="9" x2="20" y2="9" />
          <line x1="4" y1="15" x2="20" y2="15" />
          <line x1="10" y1="3" x2="8" y2="21" />
          <line x1="16" y1="3" x2="14" y2="21" />
        </symbol>
        <symbol id="mail">
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          />
          <polyline points="22,6 12,13 2,6" />
        </symbol>
        <symbol id="send">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </symbol>
        <symbol id="info">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </symbol>
        <symbol id="tel">
          <path
            d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
          />
        </symbol>
        <symbol id="search">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </symbol>
        <symbol id="user">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </symbol>
        <symbol id="arrow-up">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </symbol>
        <symbol id="arrow-down">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </symbol>
        <symbol id="warning">
          <path
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
          />
          <line x1="12" y1="9" x2="12" y2="13" />
          <path x1="12" y1="17" x2="12.01" y2="17" />
        </symbol>
      </svg>
      <svg viewBox="0 0 24 24">
        <use href="#${e}"></use>
      </svg>
    `}};ka.properties={open:{type:String,reflect:!0},name:{type:String}},ka=s([wa("gds-icon")],ka);export{kt as GdsContextMenu,fi as GdsDatepicker,et as GdsDropdown,Si as GdsGrid,Wi as GdsGroupedList,ka as GdsIcon,at as GdsMenuHeading,_t as GdsMenuItem,oe as GdsOption,ma as GdsSegmentedControl,F as VER_SUFFIX,$ as gdsCustomElement,A as getScopedTagName,z as getUnscopedTagName,M as html,D as htmlTemplateTagFactory};