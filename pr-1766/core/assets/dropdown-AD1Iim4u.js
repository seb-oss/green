import{m as O,s as oe}from"./runtime-BL31MtW8.js";import{l as le}from"./localized-decorator-DtmrKsyB.js";import{n,g as q,h as c,G as J}from"./custom-element-scoping-BEGY3AqQ.js";import{a as Q}from"./query-p8xgzTDt.js";import{r as ne}from"./query-async-MEroNOeJ.js";import{o as he}from"./if-defined-Ct9lF4W9.js";import{o as pe}from"./icon-DYBgint3.js";import{n as v}from"./when-BR7zwNJC.js";import{t as X}from"./tokens.style-CFvqdzpw.js";import{o as de}from"./observe-light-dom-CmJPHUQ4.js";import{w as W}from"./watch-tFciLXSI.js";import{a as ce}from"./button-DMqiAWPO.js";import{i as Z}from"./lit-element-C_s9q329.js";import"./field-base-DrpYf7Nt.js";import{n as ue,e as ge}from"./ref-D_ho-JAG.js";import{T as j}from"./transitional-styles-iv5lM2WH.js";import{s as fe,F as be,L as ve,u as me}from"./menu-heading-5UouMWYY.js";import{e as ye}from"./class-map-Bz98xO8-.js";import"./checkmark-DGx1mICj.js";import"./chevron-bottom-CcRSBbmu.js";import"./popover-Dra5GKNA.js";import"./backdrop-DObgcszK.js";const _e=Z`
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
`,we=Z`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var xe=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,ee=e=>{throw TypeError(e)},_=(e,t,i,a)=>{for(var s=a>1?void 0:a?$e(t,i):t,h=e.length-1,d;h>=0;h--)(d=e[h])&&(s=(a?d(t,i,s):d(s))||s);return a&&s&&xe(t,i,s),s},R=(e,t,i)=>t.has(e)||ee("Cannot "+i),Ee=(e,t,i)=>(R(e,t,"read from private field"),i?i.call(e):t.get(e)),N=(e,t,i)=>t.has(e)?ee("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),$=(e,t,i,a)=>(R(e,t,"write to private field"),t.set(e,i),i),U=(e,t,i)=>(R(e,t,"access private method"),i),b,C,P;let f=class extends be(J){constructor(){super(),N(this,C),N(this,b,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",U(this,C,P)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),U(this,C,P).call(this,e))})}get hidden(){return Ee(this,b)}set hidden(e){this.isPlaceholder||($(this,b,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&($(this,b,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>j.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?($(this,b,!0),this.setAttribute("aria-hidden","true")):($(this,b,!1),this.setAttribute("aria-hidden","false"))}render(){var i;const e=(i=this.parentElement)==null?void 0:i.multiple,t=c`
      <span class="checkbox ${ye({checked:this.selected})}">
        ${this.selected?c`<gds-icon-checkmark
              width="10"
              height="10"
              stroke="4"
            ></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),c`<div>${v(e,()=>t)} <slot></slot></div>`}};b=new WeakMap;C=new WeakSet;P=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};f.styles=[X,fe];_([n()],f.prototype,"value",2);_([n({attribute:"aria-hidden",reflect:!0})],f.prototype,"hidden",1);_([n({attribute:"aria-selected",reflect:!0})],f.prototype,"selected",2);_([n({type:Boolean,reflect:!0})],f.prototype,"isPlaceholder",2);_([W("isplaceholder")],f.prototype,"_handlePlaceholderStatusChange",1);f=_([q("gds-option")],f);var Ce=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,te=e=>{throw TypeError(e)},S=(e,t,i,a)=>{for(var s=a>1?void 0:a?ke(t,i):t,h=e.length-1,d;h>=0;h--)(d=e[h])&&(s=(a?d(t,i,s):d(s))||s);return a&&s&&Ce(t,i,s),s},Me=(e,t,i)=>t.has(e)||te("Cannot "+i),E=(e,t,i)=>(Me(e,t,"read from private field"),i?i.call(e):t.get(e)),Y=(e,t,i)=>t.has(e)?te("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),w,D;let m=class extends J{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,Y(this,w,ge()),Y(this,D,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(i=>{i!==t&&(i.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new ve(this)}get navigableItems(){return this.visibleOptionElements}get options(){return E(this,w).value?me(E(this,w).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(i=>this.compareWith(i,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),j.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",E(this,D))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return c`<slot ${ue(E(this,w))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};w=new WeakMap;D=new WeakMap;m.styles=we;S([n({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],m.prototype,"multiple",2);S([n()],m.prototype,"compareWith",2);S([W("multiple")],m.prototype,"_rerenderOptions",1);m=S([q("gds-listbox")],m);var Le=Object.defineProperty,We=Object.getOwnPropertyDescriptor,ie=e=>{throw TypeError(e)},l=(e,t,i,a)=>{for(var s=a>1?void 0:a?We(t,i):t,h=e.length-1,d;h>=0;h--)(d=e[h])&&(s=(a?d(t,i,s):d(s))||s);return a&&s&&Le(t,i,s),s},K=(e,t,i)=>t.has(e)||ie("Cannot "+i),r=(e,t,i)=>(K(e,t,"read from private field"),t.get(e)),p=(e,t,i)=>t.has(e)?ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Se=(e,t,i,a)=>(K(e,t,"write to private field"),t.set(e,i),i),T=(e,t,i)=>(K(e,t,"access private method"),i),u,B,F,z,g,H,k,V,G,I,x,se,M,L,re,ae,y,A;let o=class extends ce{constructor(){super(...arguments),p(this,x),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,p(this,u),p(this,B,()=>{var e;return c`
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
        @input=${t=>{this.value=t.target.value,r(this,M).call(this),r(this,k).call(this,t),r(this,g).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${t=>{t.key==="ArrowDown"&&(t.preventDefault(),r(this,g).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(i=>i.focus())),t.key==="Enter"&&r(this,L).call(this)}}
      />
    `}),p(this,F,()=>c`
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
    `),p(this,z,e=>{const t=e.getBoundingClientRect(),a=window.innerHeight-t.bottom,s=t.top;let h=Math.min(s,this.maxHeight);return a>s&&(h=Math.min(a,this.maxHeight)),`${h-16}px`}),p(this,g,(e,t)=>this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1,cancelable:!0}))),p(this,H,e=>{r(this,g).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),p(this,k,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchEvent(new CustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value},cancelable:!0}))))return;const i=e.currentTarget;if(this.options.forEach(s=>s.hidden=!1),!i.value)return;this.options.filter(s=>!this.searchFilter(i.value,s)).forEach(s=>s.hidden=!0)}),p(this,V,e=>{var t;(t=this._elListbox)==null||t.then(i=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),i.focus();return}})}),p(this,G,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),p(this,I,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),p(this,M,()=>{this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),p(this,L,()=>{this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),p(this,y,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&r(this,g).call(this,!1,"close")&&(this.open=!1)}),p(this,A,e=>{var t;e.key==="Tab"&&!this.searchable&&r(this,g).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())})}get type(){return"gds-dropdown"}get options(){return r(this,u)?Array.from(r(this,u)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(r(this,u))return Array.from(r(this,u)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,i;let e;return Array.isArray(this.value)?this.value.length>2?e=O(oe`${this.value.length} selected`):e=this.value.reduce((a,s)=>{var h;return a+((h=this.options.find(d=>d.value===s))==null?void 0:h.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(a=>a.selected))==null?void 0:t.innerHTML,e||((i=this.placeholder)==null?void 0:i.innerHTML)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return c`
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
        .calcMaxHeight=${r(this,z)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        @gds-ui-state=${r(this,H)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${this.combobox&&!this.multiple?r(this,B).call(this):r(this,F).call(this)}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${v(this.searchable,()=>c`<input
              id="searchinput"
              type="text"
              aria-label="${O("Filter available options")}"
              placeholder="${O("Search")}"
              @keydown=${r(this,V)}
              @input=${r(this,k)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${he(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${T(this,x,se)}"
          @gds-focus="${r(this,I)}"
          @keydown=${r(this,G)}
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
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),Se(this,u,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.combobox&&!this.placeholder&&this.options.find(i=>this.compareWith(i.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){var i;const e=this.open;(i=r(this,u))==null||i.forEach(a=>a.hidden=!e),e?T(this,x,re).call(this):(T(this,x,ae).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(a=>a.selected);requestAnimationFrame(async()=>{await this.updateComplete,t==null||t.scrollIntoView({block:"center"})})}};u=new WeakMap;B=new WeakMap;F=new WeakMap;z=new WeakMap;g=new WeakMap;H=new WeakMap;k=new WeakMap;V=new WeakMap;G=new WeakMap;I=new WeakMap;x=new WeakSet;se=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(i=>i.value):(this.value=(t=e.selection[0])==null?void 0:t.value,r(this,g).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>{var i;return(i=this._elTriggerBtn)==null?void 0:i.focus()},0))),r(this,M).call(this),r(this,L).call(this)})};M=new WeakMap;L=new WeakMap;re=function(){this.addEventListener("blur",r(this,y)),this.addEventListener("gds-blur",r(this,y)),this.addEventListener("keydown",r(this,A))};ae=function(){this.removeEventListener("blur",r(this,y)),this.removeEventListener("gds-blur",r(this,y)),this.removeEventListener("keydown",r(this,A))};y=new WeakMap;A=new WeakMap;o.styles=[X,_e];l([n({attribute:"supporting-text"})],o.prototype,"supportingText",2);l([n({type:Boolean,reflect:!0})],o.prototype,"open",2);l([n({type:Boolean,reflect:!0})],o.prototype,"searchable",2);l([n({type:Boolean,reflect:!0})],o.prototype,"multiple",2);l([n({type:Boolean,reflect:!0})],o.prototype,"combobox",2);l([n()],o.prototype,"compareWith",2);l([n()],o.prototype,"searchFilter",2);l([n({type:Boolean,attribute:"sync-popover-width"})],o.prototype,"syncPopoverWidth",2);l([n({type:Number,attribute:"max-height"})],o.prototype,"maxHeight",2);l([n()],o.prototype,"size",2);l([n({type:Boolean,attribute:"hide-label"})],o.prototype,"hideLabel",2);l([n()],o.prototype,"disableMobileStyles",2);l([Q("#trigger")],o.prototype,"_elTriggerBtn",2);l([ne("#listbox")],o.prototype,"_elListbox",2);l([Q("#searchinput")],o.prototype,"_elSearchInput",2);l([de({attributes:!0,childList:!0,subtree:!0,characterData:!0})],o.prototype,"_handleLightDOMChange",1);l([W("value")],o.prototype,"_handleValueChange",1);l([W("open")],o.prototype,"_onOpenChange",1);o=l([q("gds-dropdown"),le()],o);
