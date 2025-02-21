import{m as A,s as se}from"./runtime-CMQcyTl6.js";import{l as re}from"./localized-decorator-iufJoRiP.js";import{n as l,g as V,h as c,G as N}from"./custom-element-scoping-BEGY3AqQ.js";import{a as U}from"./query-p8xgzTDt.js";import{r as oe}from"./query-async-MEroNOeJ.js";import{o as ae}from"./if-defined-Ct9lF4W9.js";import{o as ne}from"./icon-DYBgint3.js";import{n as b}from"./when-BR7zwNJC.js";import{t as Y}from"./tokens.style-CFvqdzpw.js";import{o as le}from"./observe-light-dom-CmJPHUQ4.js";import{w as k}from"./watch-tFciLXSI.js";import{a as he}from"./button-C0h0e6wM.js";import{i as J}from"./lit-element-C_s9q329.js";import"./field-base-BjGBFlXT.js";import{n as pe,e as de}from"./ref-D_ho-JAG.js";import{T as Q}from"./transitional-styles-iv5lM2WH.js";import{s as ce,F as ue,L as ge,u as fe}from"./menu-heading-5UouMWYY.js";import{e as be}from"./class-map-Bz98xO8-.js";import"./checkmark-DGx1mICj.js";import"./chevron-bottom-CcRSBbmu.js";import"./popover-CaMPb2ni.js";import"./backdrop-DObgcszK.js";const ve=J`
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
`,me=J`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var ye=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,X=e=>{throw TypeError(e)},y=(e,t,i,r)=>{for(var s=r>1?void 0:r?_e(t,i):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(s=(r?p(t,i,s):p(s))||s);return r&&s&&ye(t,i,s),s},G=(e,t,i)=>t.has(e)||X("Cannot "+i),xe=(e,t,i)=>(G(e,t,"read from private field"),i?i.call(e):t.get(e)),I=(e,t,i)=>t.has(e)?X("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),w=(e,t,i,r)=>(G(e,t,"write to private field"),t.set(e,i),i),R=(e,t,i)=>(G(e,t,"access private method"),i),f,C,W;let g=class extends ue(N){constructor(){super(),I(this,C),I(this,f,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",R(this,C,W)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),R(this,C,W).call(this,e))})}get hidden(){return xe(this,f)}set hidden(e){this.isPlaceholder||(w(this,f,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(w(this,f,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>Q.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(w(this,f,!0),this.setAttribute("aria-hidden","true")):(w(this,f,!1),this.setAttribute("aria-hidden","false"))}render(){var i;const e=(i=this.parentElement)==null?void 0:i.multiple,t=c`
      <span class="checkbox ${be({checked:this.selected})}">
        ${this.selected?c`<gds-icon-checkmark
              width="10"
              height="10"
              stroke="4"
            ></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),c`<div>${b(e,()=>t)} <slot></slot></div>`}};f=new WeakMap;C=new WeakSet;W=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};g.styles=[Y,ce];y([l()],g.prototype,"value",2);y([l({attribute:"aria-hidden",reflect:!0})],g.prototype,"hidden",1);y([l({attribute:"aria-selected",reflect:!0})],g.prototype,"selected",2);y([l({type:Boolean,reflect:!0})],g.prototype,"isPlaceholder",2);y([k("isplaceholder")],g.prototype,"_handlePlaceholderStatusChange",1);g=y([V("gds-option")],g);var we=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,Z=e=>{throw TypeError(e)},L=(e,t,i,r)=>{for(var s=r>1?void 0:r?$e(t,i):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(s=(r?p(t,i,s):p(s))||s);return r&&s&&we(t,i,s),s},Ce=(e,t,i)=>t.has(e)||Z("Cannot "+i),$=(e,t,i)=>(Ce(e,t,"read from private field"),i?i.call(e):t.get(e)),K=(e,t,i)=>t.has(e)?Z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),_,O;let v=class extends N{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,K(this,_,de()),K(this,O,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(i=>{i!==t&&(i.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new ge(this)}get navigableItems(){return this.visibleOptionElements}get options(){return $(this,_).value?fe($(this,_).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(i=>this.compareWith(i,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),Q.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",$(this,O))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return c`<slot ${pe($(this,_))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};_=new WeakMap;O=new WeakMap;v.styles=me;L([l({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);L([l()],v.prototype,"compareWith",2);L([k("multiple")],v.prototype,"_rerenderOptions",1);v=L([V("gds-listbox")],v);var Ee=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,j=e=>{throw TypeError(e)},n=(e,t,i,r)=>{for(var s=r>1?void 0:r?ke(t,i):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(s=(r?p(t,i,s):p(s))||s);return r&&s&&Ee(t,i,s),s},q=(e,t,i)=>t.has(e)||j("Cannot "+i),a=(e,t,i)=>(q(e,t,"read from private field"),t.get(e)),d=(e,t,i)=>t.has(e)?j("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Le=(e,t,i,r)=>(q(e,t,"write to private field"),t.set(e,i),i),S=(e,t,i)=>(q(e,t,"access private method"),i),u,T,P,D,B,E,F,z,H,x,ee,te,ie,m,M;let o=class extends he{constructor(){super(...arguments),d(this,x),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,d(this,u),d(this,T,()=>{var e;return c`
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
        @input=${t=>{this.value=t.target.value,a(this,E).call(this,t),this.open=!0}}
        @keydown=${t=>{t.key==="ArrowDown"&&(t.preventDefault(),this.open=!0,this._elListbox.then(i=>i.focus()))}}
      />
    `}),d(this,P,()=>c`
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
    `),d(this,D,e=>{const t=e.getBoundingClientRect(),r=window.innerHeight-t.bottom,s=t.top;let h=Math.min(s,this.maxHeight);return r>s&&(h=Math.min(r,this.maxHeight)),`${h-16}px`}),d(this,B,e=>{this.open=e.detail.open}),d(this,E,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchEvent(new CustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value},cancelable:!0}))))return;const i=e.currentTarget;if(this.options.forEach(s=>s.hidden=!1),!i.value)return;this.options.filter(s=>!this.searchFilter(i.value,s)).forEach(s=>s.hidden=!0)}),d(this,F,e=>{var t;(t=this._elListbox)==null||t.then(i=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),i.focus();return}})}),d(this,z,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),d(this,H,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),d(this,m,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),d(this,M,e=>{var t;e.key==="Tab"&&!this.searchable&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())})}get type(){return"gds-dropdown"}get options(){return a(this,u)?Array.from(a(this,u)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(a(this,u))return Array.from(a(this,u)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,i;let e;return Array.isArray(this.value)?this.value.length>2?e=A(se`${this.value.length} selected`):e=this.value.reduce((r,s)=>{var h;return r+((h=this.options.find(p=>p.value===s))==null?void 0:h.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(r=>r.selected))==null?void 0:t.innerHTML,e||((i=this.placeholder)==null?void 0:i.innerHTML)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return c`
      ${b(!this.hideLabel,()=>c`
          <gds-form-control-header class="size-${this.size}">
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${b(this.supportingText.length>0,()=>c`<span slot="supporting-text" id="supporting-text">
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
        .calcMaxHeight=${a(this,D)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        @gds-ui-state=${a(this,B)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${this.combobox&&!this.multiple?a(this,T).call(this):a(this,P).call(this)}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${b(this.searchable,()=>c`<input
              id="searchinput"
              type="text"
              aria-label="${A("Filter available options")}"
              placeholder="${A("Search")}"
              @keydown=${a(this,F)}
              @input=${a(this,E)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${ae(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${S(this,x,ee)}"
          @gds-focus="${a(this,H)}"
          @keydown=${a(this,z)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${b(!this.hideLabel,()=>c`
          <gds-form-control-footer class="size-${this.size}">
            ${b(this.invalid,()=>c`
                <slot id="message" name="message" slot="message">
                  <gds-icon-triangle-exclamation
                    solid
                  ></gds-icon-triangle-exclamation>
                  ${this.errorMessage||this.validationMessage}
                </slot>
              `)}
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),Le(this,u,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(i=>this.compareWith(i.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){var i;const e=this.open;(i=a(this,u))==null||i.forEach(r=>r.hidden=!e),e?S(this,x,te).call(this):(S(this,x,ie).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(r=>r.selected);requestAnimationFrame(async()=>{await this.updateComplete,t==null||t.scrollIntoView({block:"center"})}),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};u=new WeakMap;T=new WeakMap;P=new WeakMap;D=new WeakMap;B=new WeakMap;E=new WeakMap;F=new WeakMap;z=new WeakMap;H=new WeakMap;x=new WeakSet;ee=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(i=>i.value):(this.value=(t=e.selection[0])==null?void 0:t.value,this.open=!1,setTimeout(()=>{var i;return(i=this._elTriggerBtn)==null?void 0:i.focus()},0)),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};te=function(){this.addEventListener("blur",a(this,m)),this.addEventListener("gds-blur",a(this,m)),this.addEventListener("keydown",a(this,M))};ie=function(){this.removeEventListener("blur",a(this,m)),this.removeEventListener("gds-blur",a(this,m)),this.removeEventListener("keydown",a(this,M))};m=new WeakMap;M=new WeakMap;o.styles=[Y,ve];n([l({attribute:"supporting-text"})],o.prototype,"supportingText",2);n([l({type:Boolean,reflect:!0})],o.prototype,"open",2);n([l({type:Boolean,reflect:!0})],o.prototype,"searchable",2);n([l({type:Boolean,reflect:!0})],o.prototype,"multiple",2);n([l({type:Boolean,reflect:!0})],o.prototype,"combobox",2);n([l()],o.prototype,"compareWith",2);n([l()],o.prototype,"searchFilter",2);n([l({type:Boolean,attribute:"sync-popover-width"})],o.prototype,"syncPopoverWidth",2);n([l({type:Number,attribute:"max-height"})],o.prototype,"maxHeight",2);n([l()],o.prototype,"size",2);n([l({type:Boolean,attribute:"hide-label"})],o.prototype,"hideLabel",2);n([l()],o.prototype,"disableMobileStyles",2);n([U("#trigger")],o.prototype,"_elTriggerBtn",2);n([oe("#listbox")],o.prototype,"_elListbox",2);n([U("#searchinput")],o.prototype,"_elSearchInput",2);n([le({attributes:!0,childList:!0,subtree:!0,characterData:!0})],o.prototype,"_handleLightDOMChange",1);n([k("value")],o.prototype,"_handleValueChange",1);n([k("open")],o.prototype,"_onOpenChange",1);o=n([V("gds-dropdown"),re()],o);
