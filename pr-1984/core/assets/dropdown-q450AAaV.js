import{m as A,s as re}from"./runtime-BL31MtW8.js";import{l as oe}from"./localized-decorator-DtmrKsyB.js";import{n,g as G,h as c,G as U}from"./custom-element-scoping-BEGY3AqQ.js";import{a as Y}from"./query-p8xgzTDt.js";import{r as ae}from"./query-async-MEroNOeJ.js";import{o as le}from"./if-defined-Ct9lF4W9.js";import{o as ne}from"./icon-DYBgint3.js";import{n as v}from"./when-BR7zwNJC.js";import{t as J}from"./tokens.style-CFvqdzpw.js";import{o as he}from"./observe-light-dom-CmJPHUQ4.js";import{w as L}from"./watch-tFciLXSI.js";import{a as pe}from"./button-DMqiAWPO.js";import{i as Q}from"./lit-element-C_s9q329.js";import"./form-control-footer-31u3ZPFB.js";import"./field-base-C22S51EM.js";import{n as de,e as ce}from"./ref-D_ho-JAG.js";import{T as X}from"./transitional-styles-iv5lM2WH.js";import{s as ue,F as ge,L as fe,u as be}from"./menu-heading-5UouMWYY.js";import{e as ve}from"./class-map-Bz98xO8-.js";import"./checkmark-DGx1mICj.js";import"./chevron-bottom-CcRSBbmu.js";import"./popover-DYiW2CC_.js";import"./backdrop-DObgcszK.js";const me=Q`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: var(--gds-space-xs);
      contain: layout;
      isolation: isolate;
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
`,ye=Q`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var _e=Object.defineProperty,we=Object.getOwnPropertyDescriptor,Z=e=>{throw TypeError(e)},_=(e,t,i,r)=>{for(var s=r>1?void 0:r?we(t,i):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(s=(r?p(t,i,s):p(s))||s);return r&&s&&_e(t,i,s),s},q=(e,t,i)=>t.has(e)||Z("Cannot "+i),xe=(e,t,i)=>(q(e,t,"read from private field"),i?i.call(e):t.get(e)),R=(e,t,i)=>t.has(e)?Z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),$=(e,t,i,r)=>(q(e,t,"write to private field"),t.set(e,i),i),K=(e,t,i)=>(q(e,t,"access private method"),i),b,E,O;let f=class extends ge(U){constructor(){super(),R(this,E),R(this,b,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",K(this,E,O)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),K(this,E,O).call(this,e))})}get hidden(){return xe(this,b)}set hidden(e){this.isPlaceholder||($(this,b,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&($(this,b,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>X.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?($(this,b,!0),this.setAttribute("aria-hidden","true")):($(this,b,!1),this.setAttribute("aria-hidden","false"))}render(){var i;const e=(i=this.parentElement)==null?void 0:i.multiple,t=c`
      <span class="checkbox ${ve({checked:this.selected})}">
        ${this.selected?c`<gds-icon-checkmark
              width="10"
              height="10"
              stroke="4"
            ></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),c`<div>${v(e,()=>t)} <slot></slot></div>`}};b=new WeakMap;E=new WeakSet;O=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};f.styles=[J,ue];_([n()],f.prototype,"value",2);_([n({attribute:"aria-hidden",reflect:!0})],f.prototype,"hidden",1);_([n({attribute:"aria-selected",reflect:!0})],f.prototype,"selected",2);_([n({type:Boolean,reflect:!0})],f.prototype,"isPlaceholder",2);_([L("isplaceholder")],f.prototype,"_handlePlaceholderStatusChange",1);f=_([G("gds-option")],f);var $e=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,j=e=>{throw TypeError(e)},M=(e,t,i,r)=>{for(var s=r>1?void 0:r?Ce(t,i):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(s=(r?p(t,i,s):p(s))||s);return r&&s&&$e(t,i,s),s},Ee=(e,t,i)=>t.has(e)||j("Cannot "+i),C=(e,t,i)=>(Ee(e,t,"read from private field"),i?i.call(e):t.get(e)),N=(e,t,i)=>t.has(e)?j("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),w,T;let m=class extends U{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,N(this,w,ce()),N(this,T,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(i=>{i!==t&&(i.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new fe(this)}get navigableItems(){return this.visibleOptionElements}get options(){return C(this,w).value?be(C(this,w).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(i=>this.compareWith(i,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),X.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",C(this,T))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return c`<slot ${de(C(this,w))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};w=new WeakMap;T=new WeakMap;m.styles=ye;M([n({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],m.prototype,"multiple",2);M([n()],m.prototype,"compareWith",2);M([L("multiple")],m.prototype,"_rerenderOptions",1);m=M([G("gds-listbox")],m);var ke=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,ee=e=>{throw TypeError(e)},l=(e,t,i,r)=>{for(var s=r>1?void 0:r?Le(t,i):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(s=(r?p(t,i,s):p(s))||s);return r&&s&&ke(t,i,s),s},I=(e,t,i)=>t.has(e)||ee("Cannot "+i),o=(e,t,i)=>(I(e,t,"read from private field"),t.get(e)),d=(e,t,i)=>t.has(e)?ee("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Me=(e,t,i,r)=>(I(e,t,"write to private field"),t.set(e,i),i),W=(e,t,i)=>(I(e,t,"access private method"),i),u,P,D,B,g,F,k,z,H,V,x,te,ie,se,y,S;let a=class extends pe{constructor(){super(...arguments),d(this,x),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,d(this,u),d(this,P,()=>{var e;return c`
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
        @input=${t=>{this.value=t.target.value,o(this,k).call(this,t),o(this,g).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${t=>{t.key==="ArrowDown"&&(t.preventDefault(),o(this,g).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(i=>i.focus()))}}
      />
    `}),d(this,D,()=>c`
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
          <span>${ne(this.displayValue)}</span>
        </slot>
      </button>
    `),d(this,B,e=>{const t=e.getBoundingClientRect(),r=window.innerHeight-t.bottom,s=t.top;let h=Math.min(s,this.maxHeight);return r>s&&(h=Math.min(r,this.maxHeight)),`${h-16}px`}),d(this,g,(e,t)=>this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1,cancelable:!0}))),d(this,F,e=>{o(this,g).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),d(this,k,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchEvent(new CustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value},cancelable:!0}))))return;const i=e.currentTarget;if(this.options.forEach(s=>s.hidden=!1),!i.value)return;this.options.filter(s=>!this.searchFilter(i.value,s)).forEach(s=>s.hidden=!0)}),d(this,z,e=>{var t;(t=this._elListbox)==null||t.then(i=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),i.focus();return}})}),d(this,H,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),d(this,V,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),d(this,y,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&o(this,g).call(this,!1,"close")&&(this.open=!1)}),d(this,S,e=>{var t;e.key==="Tab"&&!this.searchable&&o(this,g).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())})}get type(){return"gds-dropdown"}get options(){return o(this,u)?Array.from(o(this,u)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(o(this,u))return Array.from(o(this,u)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,i;let e;return Array.isArray(this.value)?this.value.length>2?e=A(re`${this.value.length} selected`):e=this.value.reduce((r,s)=>{var h;return r+((h=this.options.find(p=>p.value===s))==null?void 0:h.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(r=>r.selected))==null?void 0:t.innerHTML,e||((i=this.placeholder)==null?void 0:i.innerHTML)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return c`
      ${v(!this.hideLabel,()=>c`
          <gds-form-control-header class="size-${this.size}">
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${v(this.supportingText.length>0,()=>c`<span slot="supporting-text" id="supporting-text">
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
        .calcMaxHeight=${o(this,B)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        @gds-ui-state=${o(this,F)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${this.combobox&&!this.multiple?o(this,P).call(this):o(this,D).call(this)}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${v(this.searchable,()=>c`<input
              id="searchinput"
              type="text"
              aria-label="${A("Filter available options")}"
              placeholder="${A("Search")}"
              @keydown=${o(this,z)}
              @input=${o(this,k)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${le(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${W(this,x,te)}"
          @gds-focus="${o(this,V)}"
          @keydown=${o(this,H)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${v(!this.hideLabel,()=>c`
          <gds-form-control-footer class="size-${this.size}">
            ${v(this.invalid,()=>c`
                <slot id="message" name="message" slot="message">
                  <gds-icon-triangle-exclamation
                    solid
                  ></gds-icon-triangle-exclamation>
                  ${this.errorMessage||this.validationMessage}
                </slot>
              `)}
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),Me(this,u,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(i=>this.compareWith(i.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){var i;const e=this.open;(i=o(this,u))==null||i.forEach(r=>r.hidden=!e),e?W(this,x,ie).call(this):(W(this,x,se).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(r=>r.selected);requestAnimationFrame(async()=>{await this.updateComplete,t==null||t.scrollIntoView({block:"center"})})}};u=new WeakMap;P=new WeakMap;D=new WeakMap;B=new WeakMap;g=new WeakMap;F=new WeakMap;k=new WeakMap;z=new WeakMap;H=new WeakMap;V=new WeakMap;x=new WeakSet;te=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(i=>i.value):(this.value=(t=e.selection[0])==null?void 0:t.value,o(this,g).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>{var i;return(i=this._elTriggerBtn)==null?void 0:i.focus()},0))),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};ie=function(){this.addEventListener("blur",o(this,y)),this.addEventListener("gds-blur",o(this,y)),this.addEventListener("keydown",o(this,S))};se=function(){this.removeEventListener("blur",o(this,y)),this.removeEventListener("gds-blur",o(this,y)),this.removeEventListener("keydown",o(this,S))};y=new WeakMap;S=new WeakMap;a.styles=[J,me];l([n({attribute:"supporting-text"})],a.prototype,"supportingText",2);l([n({type:Boolean,reflect:!0})],a.prototype,"open",2);l([n({type:Boolean,reflect:!0})],a.prototype,"searchable",2);l([n({type:Boolean,reflect:!0})],a.prototype,"multiple",2);l([n({type:Boolean,reflect:!0})],a.prototype,"combobox",2);l([n()],a.prototype,"compareWith",2);l([n()],a.prototype,"searchFilter",2);l([n({type:Boolean,attribute:"sync-popover-width"})],a.prototype,"syncPopoverWidth",2);l([n({type:Number,attribute:"max-height"})],a.prototype,"maxHeight",2);l([n()],a.prototype,"size",2);l([n({type:Boolean,attribute:"hide-label"})],a.prototype,"hideLabel",2);l([n()],a.prototype,"disableMobileStyles",2);l([Y("#trigger")],a.prototype,"_elTriggerBtn",2);l([ae("#listbox")],a.prototype,"_elListbox",2);l([Y("#searchinput")],a.prototype,"_elSearchInput",2);l([he({attributes:!0,childList:!0,subtree:!0,characterData:!0})],a.prototype,"_handleLightDOMChange",1);l([L("value")],a.prototype,"_handleValueChange",1);l([L("open")],a.prototype,"_onOpenChange",1);a=l([G("gds-dropdown"),oe()],a);
