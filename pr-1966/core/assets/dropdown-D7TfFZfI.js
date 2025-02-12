import{m as A,s as ie}from"./runtime-CMQcyTl6.js";import{l as se}from"./localized-decorator-iufJoRiP.js";import{n,g as H,h as p,G as K}from"./custom-element-scoping-BEGY3AqQ.js";import{a as N}from"./query-p8xgzTDt.js";import{r as re}from"./query-async-MEroNOeJ.js";import{o as oe}from"./if-defined-Ct9lF4W9.js";import{o as ae}from"./icon-DYBgint3.js";import{n as b}from"./when-BR7zwNJC.js";import{t as U}from"./tokens.style-CFvqdzpw.js";import{o as le}from"./observe-light-dom-CmJPHUQ4.js";import{w as k}from"./watch-tFciLXSI.js";import{a as ne}from"./button-Cyoz7L5y.js";import{i as Y}from"./lit-element-C_s9q329.js";import"./field-base-BJBRlZ2h.js";import{n as he,e as de}from"./ref-D_ho-JAG.js";import{T as J}from"./transitional-styles-gKBkOdeg.js";import{s as pe,F as ce,L as ue,u as ge}from"./menu-heading-CRd3Rn1p.js";import{e as fe}from"./class-map-Bz98xO8-.js";import"./checkmark-DGx1mICj.js";import"./chevron-bottom-CcRSBbmu.js";import"./popover-Vhl5uRI3.js";import"./backdrop-DObgcszK.js";const be=Y`
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
`,ve=Y`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var me=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,Q=e=>{throw TypeError(e)},y=(e,t,i,r)=>{for(var s=r>1?void 0:r?ye(t,i):t,h=e.length-1,d;h>=0;h--)(d=e[h])&&(s=(r?d(t,i,s):d(s))||s);return r&&s&&me(t,i,s),s},V=(e,t,i)=>t.has(e)||Q("Cannot "+i),_e=(e,t,i)=>(V(e,t,"read from private field"),i?i.call(e):t.get(e)),q=(e,t,i)=>t.has(e)?Q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),w=(e,t,i,r)=>(V(e,t,"write to private field"),t.set(e,i),i),I=(e,t,i)=>(V(e,t,"access private method"),i),f,C,O;let g=class extends ce(K){constructor(){super(),q(this,C),q(this,f,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",I(this,C,O)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),I(this,C,O).call(this,e))})}get hidden(){return _e(this,f)}set hidden(e){this.isPlaceholder||(w(this,f,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(w(this,f,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>J.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(w(this,f,!0),this.setAttribute("aria-hidden","true")):(w(this,f,!1),this.setAttribute("aria-hidden","false"))}render(){var i;const e=(i=this.parentElement)==null?void 0:i.multiple,t=p`
      <span class="checkbox ${fe({checked:this.selected})}">
        ${this.selected?p`<gds-icon-checkmark
              width="10"
              height="10"
              stroke="4"
            ></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),p`<div>${b(e,()=>t)} <slot></slot></div>`}};f=new WeakMap;C=new WeakSet;O=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};g.styles=[U,pe];y([n()],g.prototype,"value",2);y([n({attribute:"aria-hidden",reflect:!0})],g.prototype,"hidden",1);y([n({attribute:"aria-selected",reflect:!0})],g.prototype,"selected",2);y([n({type:Boolean,reflect:!0})],g.prototype,"isPlaceholder",2);y([k("isplaceholder")],g.prototype,"_handlePlaceholderStatusChange",1);g=y([H("gds-option")],g);var xe=Object.defineProperty,we=Object.getOwnPropertyDescriptor,X=e=>{throw TypeError(e)},L=(e,t,i,r)=>{for(var s=r>1?void 0:r?we(t,i):t,h=e.length-1,d;h>=0;h--)(d=e[h])&&(s=(r?d(t,i,s):d(s))||s);return r&&s&&xe(t,i,s),s},$e=(e,t,i)=>t.has(e)||X("Cannot "+i),$=(e,t,i)=>($e(e,t,"read from private field"),i?i.call(e):t.get(e)),R=(e,t,i)=>t.has(e)?X("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),_,W;let v=class extends K{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,R(this,_,de()),R(this,W,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(i=>{i!==t&&(i.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new ue(this)}get navigableItems(){return this.visibleOptionElements}get options(){return $(this,_).value?ge($(this,_).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(i=>this.compareWith(i,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),J.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",$(this,W))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return p`<slot ${he($(this,_))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};_=new WeakMap;W=new WeakMap;v.styles=ve;L([n({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);L([n()],v.prototype,"compareWith",2);L([k("multiple")],v.prototype,"_rerenderOptions",1);v=L([H("gds-listbox")],v);var Ce=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,Z=e=>{throw TypeError(e)},l=(e,t,i,r)=>{for(var s=r>1?void 0:r?Ee(t,i):t,h=e.length-1,d;h>=0;h--)(d=e[h])&&(s=(r?d(t,i,s):d(s))||s);return r&&s&&Ce(t,i,s),s},G=(e,t,i)=>t.has(e)||Z("Cannot "+i),a=(e,t,i)=>(G(e,t,"read from private field"),t.get(e)),c=(e,t,i)=>t.has(e)?Z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ke=(e,t,i,r)=>(G(e,t,"write to private field"),t.set(e,i),i),S=(e,t,i)=>(G(e,t,"access private method"),i),u,T,P,D,E,B,z,F,x,j,ee,te,m,M;let o=class extends ne{constructor(){super(...arguments),c(this,x),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,c(this,u),c(this,T,()=>{var e;return p`
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
    `}),c(this,P,()=>p`
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
          <span>${ae(this.displayValue)}</span>
        </slot>
      </button>
    `),c(this,D,e=>{const t=e.getBoundingClientRect(),r=window.innerHeight-t.bottom,s=t.top;let h=Math.min(s,this.maxHeight);return r>s&&(h=Math.min(r,this.maxHeight)),`${h-16}px`}),c(this,E,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchEvent(new CustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value},cancelable:!0}))))return;const i=e.currentTarget;if(this.options.forEach(s=>s.hidden=!1),!i.value)return;this.options.filter(s=>!this.searchFilter(i.value,s)).forEach(s=>s.hidden=!0)}),c(this,B,e=>{var t;(t=this._elListbox)==null||t.then(i=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),i.focus();return}})}),c(this,z,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),c(this,F,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),c(this,m,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),c(this,M,e=>{var t;e.key==="Tab"&&!this.searchable&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())})}get type(){return"gds-dropdown"}get options(){return a(this,u)?Array.from(a(this,u)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(a(this,u))return Array.from(a(this,u)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,i;let e;return Array.isArray(this.value)?this.value.length>2?e=A(ie`${this.value.length} selected`):e=this.value.reduce((r,s)=>{var h;return r+((h=this.options.find(d=>d.value===s))==null?void 0:h.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(r=>r.selected))==null?void 0:t.innerHTML,e||((i=this.placeholder)==null?void 0:i.innerHTML)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return p`
      ${b(!this.hideLabel,()=>p`
          <gds-form-control-header class="size-${this.size}">
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${b(this.supportingText.length>0,()=>p`<span slot="supporting-text" id="supporting-text">
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
        @gds-ui-state=${e=>this.open=e.detail.open}
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

        ${b(this.searchable,()=>p`<input
              id="searchinput"
              type="text"
              aria-label="${A("Filter available options")}"
              placeholder="${A("Search")}"
              @keydown=${a(this,B)}
              @input=${a(this,E)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${oe(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${S(this,x,j)}"
          @gds-focus="${a(this,F)}"
          @keydown=${a(this,z)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${b(!this.hideLabel,()=>p`
          <gds-form-control-footer class="size-${this.size}">
            ${b(this.invalid,()=>p`
                <slot id="message" name="message" slot="message">
                  <gds-icon-triangle-exclamation
                    solid
                  ></gds-icon-triangle-exclamation>
                  ${this.errorMessage||this.validationMessage}
                </slot>
              `)}
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),ke(this,u,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(i=>this.compareWith(i.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){var i;const e=this.open;(i=a(this,u))==null||i.forEach(r=>r.hidden=!e),e?S(this,x,ee).call(this):(S(this,x,te).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(r=>r.selected);this.updateComplete.then(()=>t==null?void 0:t.scrollIntoView()),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};u=new WeakMap;T=new WeakMap;P=new WeakMap;D=new WeakMap;E=new WeakMap;B=new WeakMap;z=new WeakMap;F=new WeakMap;x=new WeakSet;j=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(i=>i.value):(this.value=(t=e.selection[0])==null?void 0:t.value,this.open=!1,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),setTimeout(()=>{var i;return(i=this._elTriggerBtn)==null?void 0:i.focus()},0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};ee=function(){this.addEventListener("blur",a(this,m)),this.addEventListener("gds-blur",a(this,m)),this.addEventListener("keydown",a(this,M))};te=function(){this.removeEventListener("blur",a(this,m)),this.removeEventListener("gds-blur",a(this,m)),this.removeEventListener("keydown",a(this,M))};m=new WeakMap;M=new WeakMap;o.styles=[U,be];l([n({attribute:"supporting-text"})],o.prototype,"supportingText",2);l([n({type:Boolean,reflect:!0})],o.prototype,"open",2);l([n({type:Boolean,reflect:!0})],o.prototype,"searchable",2);l([n({type:Boolean,reflect:!0})],o.prototype,"multiple",2);l([n({type:Boolean,reflect:!0})],o.prototype,"combobox",2);l([n()],o.prototype,"compareWith",2);l([n()],o.prototype,"searchFilter",2);l([n({type:Boolean,attribute:"sync-popover-width"})],o.prototype,"syncPopoverWidth",2);l([n({type:Number,attribute:"max-height"})],o.prototype,"maxHeight",2);l([n()],o.prototype,"size",2);l([n({type:Boolean,attribute:"hide-label"})],o.prototype,"hideLabel",2);l([n()],o.prototype,"disableMobileStyles",2);l([N("#trigger")],o.prototype,"_elTriggerBtn",2);l([re("#listbox")],o.prototype,"_elListbox",2);l([N("#searchinput")],o.prototype,"_elSearchInput",2);l([le({attributes:!0,childList:!0,subtree:!0,characterData:!0})],o.prototype,"_handleLightDOMChange",1);l([k("value")],o.prototype,"_handleValueChange",1);l([k("open")],o.prototype,"_onOpenChange",1);o=l([H("gds-dropdown"),se()],o);
