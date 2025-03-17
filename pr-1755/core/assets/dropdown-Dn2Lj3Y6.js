import{m as O,s as ae}from"./runtime-BL31MtW8.js";import{l as le}from"./localized-decorator-DtmrKsyB.js";import{n,g as I,h as c,G as J}from"./custom-element-scoping-BEGY3AqQ.js";import{a as Q}from"./query-p8xgzTDt.js";import{r as ne}from"./query-async-MEroNOeJ.js";import{o as he}from"./if-defined-Ct9lF4W9.js";import{o as pe}from"./icon-DYBgint3.js";import{n as b}from"./when-BR7zwNJC.js";import{o as de,f as ce}from"./floating-ui.dom-BmFOYU71.js";import{t as X}from"./tokens.style-D2uXUvKM.js";import{o as ue}from"./observe-light-dom-CmJPHUQ4.js";import{w as L}from"./watch-tFciLXSI.js";import{a as ge}from"./button-CYVJ_aNX.js";import{G as fe}from"./popover-Cy9mbxrN.js";import"./backdrop-DObgcszK.js";import{i as Z}from"./lit-element-C_s9q329.js";import"./form-control-footer-Seqs4CGm.js";import"./field-base-BBL4Ciwa.js";import{n as be,e as ve}from"./ref-D_ho-JAG.js";import{T as j}from"./transitional-styles-DeTyU6yi.js";import{s as me,F as ye,L as _e,u as we}from"./menu-heading-_-lRagZN.js";import{e as xe}from"./class-map-Bz98xO8-.js";import"./checkmark-DGx1mICj.js";import"./chevron-bottom-CcRSBbmu.js";const $e=Z`
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
`,Ce=Z`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var Ee=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,ee=e=>{throw TypeError(e)},y=(e,t,i,o)=>{for(var s=o>1?void 0:o?ke(t,i):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(s=(o?p(t,i,s):p(s))||s);return o&&s&&Ee(t,i,s),s},q=(e,t,i)=>t.has(e)||ee("Cannot "+i),U=(e,t,i)=>(q(e,t,"read from private field"),i?i.call(e):t.get(e)),K=(e,t,i)=>t.has(e)?ee("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Me=(e,t,i,o)=>(q(e,t,"write to private field"),t.set(e,i),i),N=(e,t,i)=>(q(e,t,"access private method"),i),_,C,T;let g=class extends ye(J){constructor(){super(),K(this,C),K(this,_,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",N(this,C,T)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),N(this,C,T).call(this,e))})}get hidden(){return U(this,_)}set hidden(e){const t=e.toString();Me(this,_,t==="true"),U(this,_)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),j.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){var i;const e=(i=this.parentElement)==null?void 0:i.multiple,t=c`
      <span class="checkbox ${xe({checked:this.selected})}">
        ${this.selected?c`<gds-icon-checkmark
              width="10"
              height="10"
              stroke="4"
            ></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),c`<div>${b(e,()=>t)} <slot></slot></div>`}};_=new WeakMap;C=new WeakSet;T=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};g.styles=[X,me];y([n()],g.prototype,"value",2);y([n({type:Boolean,reflect:!0})],g.prototype,"hidden",1);y([n({attribute:"aria-selected",reflect:!0})],g.prototype,"selected",2);y([n({type:Boolean,reflect:!0})],g.prototype,"isPlaceholder",2);y([L("isPlaceholder")],g.prototype,"_handlePlaceholderStatusChange",1);g=y([I("gds-option")],g);var Le=Object.defineProperty,We=Object.getOwnPropertyDescriptor,te=e=>{throw TypeError(e)},W=(e,t,i,o)=>{for(var s=o>1?void 0:o?We(t,i):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(s=(o?p(t,i,s):p(s))||s);return o&&s&&Le(t,i,s),s},Se=(e,t,i)=>t.has(e)||te("Cannot "+i),$=(e,t,i)=>(Se(e,t,"read from private field"),i?i.call(e):t.get(e)),Y=(e,t,i)=>t.has(e)?te("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),w,P;let v=class extends J{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,Y(this,w,ve()),Y(this,P,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(i=>{i!==t&&(i.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new _e(this)}get navigableItems(){return this.visibleOptionElements}get options(){return $(this,w).value?we($(this,w).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(i=>this.compareWith(i,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),j.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",$(this,P))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return c`<slot ${be($(this,w))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};w=new WeakMap;P=new WeakMap;v.styles=Ce;W([n({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);W([n()],v.prototype,"compareWith",2);W([L("multiple")],v.prototype,"_rerenderOptions",1);v=W([I("gds-listbox")],v);var Oe=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,ie=e=>{throw TypeError(e)},l=(e,t,i,o)=>{for(var s=o>1?void 0:o?Ae(t,i):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(s=(o?p(t,i,s):p(s))||s);return o&&s&&Oe(t,i,s),s},R=(e,t,i)=>t.has(e)||ie("Cannot "+i),r=(e,t,i)=>(R(e,t,"read from private field"),t.get(e)),d=(e,t,i)=>t.has(e)?ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Te=(e,t,i,o)=>(R(e,t,"write to private field"),t.set(e,i),i),A=(e,t,i)=>(R(e,t,"access private method"),i),f,D,B,H,u,F,E,z,G,V,x,se,k,M,re,oe,m,S;let a=class extends ge{constructor(){super(...arguments),d(this,x),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,d(this,f),d(this,D,()=>{var e;return c`
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
        @input=${t=>{this.value=t.target.value,r(this,k).call(this),r(this,E).call(this,t),r(this,u).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${t=>{t.key==="ArrowDown"&&(t.preventDefault(),r(this,u).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(i=>i.focus())),t.key==="Enter"&&r(this,M).call(this)}}
      />
    `}),d(this,B,()=>c`
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
          <span>${pe(this.displayValue)}</span>
        </slot>
      </button>
    `),d(this,H,e=>{if(this.combobox){const i=e.getBoundingClientRect(),s=window.innerHeight-i.bottom,h=i.top;let p=Math.min(h,this.maxHeight);return s>h&&(p=Math.min(s,this.maxHeight)),`${p-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),d(this,u,(e,t)=>this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1,cancelable:!0}))),d(this,F,e=>{r(this,u).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),d(this,E,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchEvent(new CustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value},cancelable:!0}))))return;const i=e.currentTarget;if(this.options.forEach(s=>s.hidden=!1),!i.value)return;this.options.filter(s=>!this.searchFilter(i.value,s)).forEach(s=>s.hidden=!0)}),d(this,z,e=>{var t;(t=this._elListbox)==null||t.then(i=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),i.focus();return}})}),d(this,G,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),d(this,V,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),d(this,k,()=>{this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),d(this,M,()=>{this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),d(this,m,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&r(this,u).call(this,!1,"close")&&(this.open=!1)}),d(this,S,e=>{var t;e.key==="Tab"&&!this.searchable&&r(this,u).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())})}get type(){return"gds-dropdown"}get options(){return r(this,f)?Array.from(r(this,f)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(r(this,f))return Array.from(r(this,f)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,i;let e;return Array.isArray(this.value)?this.value.length>2?e=O(ae`${this.value.length} selected`):e=this.value.reduce((o,s)=>{var h;return o+((h=this.options.find(p=>p.value===s))==null?void 0:h.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(o=>o.selected))==null?void 0:t.innerHTML,e||((i=this.placeholder)==null?void 0:i.innerHTML)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}render(){return c`
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
        .calcMaxHeight=${r(this,H)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[de(8),ce()]:fe.DefaultMiddleware}
        @gds-ui-state=${r(this,F)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${this.combobox&&!this.multiple?r(this,D).call(this):r(this,B).call(this)}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${b(this.searchable,()=>c`<input
              id="searchinput"
              type="text"
              aria-label="${O("Filter available options")}"
              placeholder="${O("Search")}"
              @keydown=${r(this,z)}
              @input=${r(this,E)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${he(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${A(this,x,se)}"
          @gds-focus="${r(this,V)}"
          @keydown=${r(this,G)}
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
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),Te(this,f,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.combobox&&!this.placeholder&&this.options.find(i=>this.compareWith(i.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(i=>i.hidden=!e),e?A(this,x,re).call(this):(A(this,x,oe).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(i=>i.selected);requestAnimationFrame(async()=>{await this.updateComplete,t==null||t.scrollIntoView({block:"center"})})}};f=new WeakMap;D=new WeakMap;B=new WeakMap;H=new WeakMap;u=new WeakMap;F=new WeakMap;E=new WeakMap;z=new WeakMap;G=new WeakMap;V=new WeakMap;x=new WeakSet;se=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(i=>i.value):(this.value=(t=e.selection[0])==null?void 0:t.value,r(this,u).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>{var i;return(i=this._elTriggerBtn)==null?void 0:i.focus()},0))),r(this,k).call(this),r(this,M).call(this)})};k=new WeakMap;M=new WeakMap;re=function(){this.addEventListener("blur",r(this,m)),this.addEventListener("gds-blur",r(this,m)),this.addEventListener("keydown",r(this,S))};oe=function(){this.removeEventListener("blur",r(this,m)),this.removeEventListener("gds-blur",r(this,m)),this.removeEventListener("keydown",r(this,S))};m=new WeakMap;S=new WeakMap;a.styles=[X,$e];l([n({attribute:"supporting-text"})],a.prototype,"supportingText",2);l([n({type:Boolean,reflect:!0})],a.prototype,"open",2);l([n({type:Boolean,reflect:!0})],a.prototype,"searchable",2);l([n({type:Boolean,reflect:!0})],a.prototype,"multiple",2);l([n({type:Boolean,reflect:!0})],a.prototype,"combobox",2);l([n()],a.prototype,"compareWith",2);l([n()],a.prototype,"searchFilter",2);l([n({type:Boolean,attribute:"sync-popover-width"})],a.prototype,"syncPopoverWidth",2);l([n({type:Number,attribute:"max-height"})],a.prototype,"maxHeight",2);l([n()],a.prototype,"size",2);l([n({type:Boolean,attribute:"hide-label"})],a.prototype,"hideLabel",2);l([n()],a.prototype,"disableMobileStyles",2);l([Q("#trigger")],a.prototype,"_elTriggerBtn",2);l([ne("#listbox")],a.prototype,"_elListbox",2);l([Q("#searchinput")],a.prototype,"_elSearchInput",2);l([ue({attributes:!0,childList:!0,subtree:!0,characterData:!0})],a.prototype,"_handleLightDOMChange",1);l([L("value")],a.prototype,"_handleValueChange",1);l([L("open")],a.prototype,"_handleOpenChange",1);a=l([I("gds-dropdown"),le()],a);
