import{m as M,s as ee}from"./runtime-CMQcyTl6.js";import{u as te}from"./localized-decorator-B8fm5KIw.js";import{n,g as F,h as u,G as q}from"./custom-element-scoping-b4lD3laR.js";import{a as K}from"./query-p8xgzTDt.js";import{r as se}from"./query-async-MEroNOeJ.js";import{o as ie}from"./if-defined-Ct9lF4W9.js";import{o as re}from"./icon-BAGUC4Iy.js";import{n as $}from"./when-BR7zwNJC.js";import{t as N}from"./tokens.style-B6Zq2CtY.js";import{T as H}from"./transitional-styles-BzIRfoob.js";import{o as oe}from"./observe-light-dom-CmJPHUQ4.js";import{w as E}from"./watch-tFciLXSI.js";import{a as ae}from"./button-BB5hldnR.js";import{i as U}from"./lit-element-C_s9q329.js";import"./field-base-BeAE-v4V.js";import{n as ne,e as le}from"./ref-D_ho-JAG.js";import{s as he,F as pe,L as de,u as ce}from"./menu-heading-DmdQ-KOX.js";import{e as ue}from"./class-map-Bz98xO8-.js";import"./checkmark-D62oMl69.js";import"./chevron-bottom-CTTxLLl8.js";import"./popover-CR9ET1PA.js";import"./backdrop-BGzK9qgd.js";const fe=U`
  @layer base, reset;

  @layer base {
    :host {
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: var(--gds-space-xs);
      font-family: inherit;
    }

    #trigger::part(_base) {
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

    [aria-expanded='true'] [slot='trail'] {
      transform: scaleY(-1);
    }
  }
`,ge=U`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var ve=Object.defineProperty,me=Object.getOwnPropertyDescriptor,Y=e=>{throw TypeError(e)},b=(e,t,s,i)=>{for(var r=i>1?void 0:i?me(t,s):t,l=e.length-1,p;l>=0;l--)(p=e[l])&&(r=(i?p(t,s,r):p(r))||r);return i&&r&&ve(t,s,r),r},G=(e,t,s)=>t.has(e)||Y("Cannot "+s),be=(e,t,s)=>(G(e,t,"read from private field"),s?s.call(e):t.get(e)),z=(e,t,s)=>t.has(e)?Y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),w=(e,t,s,i)=>(G(e,t,"write to private field"),t.set(e,s),s),I=(e,t,s)=>(G(e,t,"access private method"),s),g,C,S;let f=class extends pe(q){constructor(){super(),z(this,C),z(this,g,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",I(this,C,S)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),I(this,C,S).call(this,e))})}get hidden(){return be(this,g)}set hidden(e){this.isPlaceholder||(w(this,g,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(w(this,g,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>H.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(w(this,g,!0),this.setAttribute("aria-hidden","true")):(w(this,g,!1),this.setAttribute("aria-hidden","false"))}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple,t=u`
      <span class="checkbox ${ue({checked:this.selected})}">
        ${this.selected?u`<gds-icon-checkmark
              width="10"
              height="10"
              stroke="4"
            ></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),u`<div>${$(e,()=>t)} <slot></slot></div>`}};g=new WeakMap;C=new WeakSet;S=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};f.styles=[N,he];b([n()],f.prototype,"value",2);b([n({attribute:"aria-hidden",reflect:!0})],f.prototype,"hidden",1);b([n({attribute:"aria-selected",reflect:!0})],f.prototype,"selected",2);b([n({type:Boolean,reflect:!0})],f.prototype,"isPlaceholder",2);b([E("isplaceholder")],f.prototype,"_handlePlaceholderStatusChange",1);f=b([F("gds-option")],f);var ye=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,J=e=>{throw TypeError(e)},L=(e,t,s,i)=>{for(var r=i>1?void 0:i?_e(t,s):t,l=e.length-1,p;l>=0;l--)(p=e[l])&&(r=(i?p(t,s,r):p(r))||r);return i&&r&&ye(t,s,r),r},we=(e,t,s)=>t.has(e)||J("Cannot "+s),x=(e,t,s)=>(we(e,t,"read from private field"),s?s.call(e):t.get(e)),R=(e,t,s)=>t.has(e)?J("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),y,A;let v=class extends q{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,R(this,y,le()),R(this,A,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new de(this)}get navigableItems(){return this.visibleOptionElements}get options(){return x(this,y).value?ce(x(this,y).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),H.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",x(this,A))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return u`<slot ${ne(x(this,y))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};y=new WeakMap;A=new WeakMap;v.styles=ge;L([n({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);L([n()],v.prototype,"compareWith",2);L([E("multiple")],v.prototype,"_rerenderOptions",1);v=L([F("gds-listbox")],v);var xe=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,Q=e=>{throw TypeError(e)},a=(e,t,s,i)=>{for(var r=i>1?void 0:i?$e(t,s):t,l=e.length-1,p;l>=0;l--)(p=e[l])&&(r=(i?p(t,s,r):p(r))||r);return i&&r&&xe(t,s,r),r},V=(e,t,s)=>t.has(e)||Q("Cannot "+s),h=(e,t,s)=>(V(e,t,"read from private field"),t.get(e)),d=(e,t,s)=>t.has(e)?Q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Ce=(e,t,s,i)=>(V(e,t,"write to private field"),t.set(e,s),s),O=(e,t,s)=>(V(e,t,"access private method"),s),c,W,T,P,D,B,_,X,Z,j,m,k;let o=class extends ae{constructor(){super(),d(this,_),this.label="",this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,d(this,c),d(this,W,e=>{const t=e.getBoundingClientRect(),i=window.innerHeight-t.bottom,r=t.top;let l=Math.min(r,this.maxHeight);return i>r&&(l=Math.min(i,this.maxHeight)),`${l-16}px`}),d(this,T,e=>{if(!e.currentTarget)return;e.stopPropagation();const t=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!t.value)return;this.options.filter(i=>!this.searchFilter(t.value,i)).forEach(i=>i.hidden=!0)}),d(this,P,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),d(this,D,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),d(this,B,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),d(this,m,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),d(this,k,e=>{var t;e.key==="Tab"&&!this.searchable&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())}),te(this)}get type(){return"gds-dropdown"}get options(){return h(this,c)?Array.from(h(this,c)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(h(this,c))return Array.from(h(this,c)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=M(ee`${this.value.length} selected`):e=this.value.reduce((i,r)=>{var l;return i+((l=this.options.find(p=>p.value===r))==null?void 0:l.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(i=>i.selected))==null?void 0:t.innerHTML,e||((s=this.placeholder)==null?void 0:s.innerHTML)||""}connectedCallback(){super.connectedCallback(),H.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return u`
      ${$(!this.hideLabel,()=>u`
          <gds-form-control-header>
            <label for="trigger" slot="label">${this.label}</label>
            <span slot="supporting-text" id="supporting-text">
              ${this.supportingText}
            </span>
            <slot
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
          </gds-form-control-header>
        `)}
      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${h(this,W)}
        .disableMobileStyles=${this.disableMobileStyles}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          id="trigger"
          name="trigger"
          aria-haspopup="listbox"
          slot="trigger"
          role="combobox"
          aria-owns="listbox"
          aria-controls="listbox"
          aria-expanded="${this.open}"
          aria-label="${this.label}"
        >
          <slot name="lead" slot="lead"></slot>
          <button>
            <slot name="trigger">
              <span>${re(this.displayValue)}</span>
            </slot>
          </button>
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${$(this.searchable,()=>u`<input
              id="searchinput"
              type="text"
              aria-label="${M("Filter available options")}"
              placeholder="${M("Search")}"
              @keydown=${h(this,P)}
              @input=${h(this,T)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${ie(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${O(this,_,X)}"
          @gds-focus="${h(this,B)}"
          @keydown=${h(this,D)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${$(!this.hideLabel,()=>u`
          <gds-form-control-footer
            .validationMessage=${this.invalid&&this.validationMessage}
          ></gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),Ce(this,c,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){var s;const e=this.open;(s=h(this,c))==null||s.forEach(i=>i.hidden=!e),e?O(this,_,Z).call(this):(O(this,_,j).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(i=>i.selected);this.updateComplete.then(()=>t==null?void 0:t.scrollIntoView()),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};c=new WeakMap;W=new WeakMap;T=new WeakMap;P=new WeakMap;D=new WeakMap;B=new WeakMap;_=new WeakSet;X=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,this.open=!1,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};Z=function(){this.addEventListener("blur",h(this,m)),this.addEventListener("gds-blur",h(this,m)),this.addEventListener("keydown",h(this,k))};j=function(){this.removeEventListener("blur",h(this,m)),this.removeEventListener("gds-blur",h(this,m)),this.removeEventListener("keydown",h(this,k))};m=new WeakMap;k=new WeakMap;o.styles=[N,fe];o.shadowRootOptions={mode:"open",delegatesFocus:!0};a([n()],o.prototype,"label",2);a([n({attribute:"supporting-text"})],o.prototype,"supportingText",2);a([n({type:Boolean,reflect:!0})],o.prototype,"open",2);a([n({type:Boolean,reflect:!0})],o.prototype,"searchable",2);a([n({type:Boolean,reflect:!0})],o.prototype,"multiple",2);a([n()],o.prototype,"compareWith",2);a([n()],o.prototype,"searchFilter",2);a([n({type:Boolean,attribute:"sync-popover-width"})],o.prototype,"syncPopoverWidth",2);a([n({type:Number,attribute:"max-height"})],o.prototype,"maxHeight",2);a([n()],o.prototype,"size",2);a([n({type:Boolean,attribute:"hide-label"})],o.prototype,"hideLabel",2);a([n()],o.prototype,"disableMobileStyles",2);a([K("#trigger")],o.prototype,"_elTriggerBtn",2);a([se("#listbox")],o.prototype,"_elListbox",2);a([K("#searchinput")],o.prototype,"_elSearchInput",2);a([oe({attributes:!0,childList:!0,subtree:!0,characterData:!0})],o.prototype,"_handleLightDOMChange",1);a([E("value")],o.prototype,"_handleValueChange",1);a([E("open")],o.prototype,"_onOpenChange",1);o=a([F("gds-dropdown")],o);
