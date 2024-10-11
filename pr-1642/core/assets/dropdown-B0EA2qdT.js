import{n as h,g as B,h as f,G as U,a as ae}from"./gds-element-CNG85WuL.js";import{a as q}from"./query-p8xgzTDt.js";import{r as re}from"./query-async-MEroNOeJ.js";import{a as oe}from"./icon-DqepV8Oa.js";import{n as S}from"./when-BxLAFfhK.js";import{t as ne}from"./if-defined-OiR-h1RO.js";import{R as Y}from"./class-map-BBGuaYF3.js";import{m as k,s as le}from"./runtime-CMQcyTl6.js";import{c as he}from"./constrain-slots-I5VCMCIw.js";import{w as E}from"./watch-tFciLXSI.js";import"./chevron-bottom-DvoZQsCf.js";import"./checkmark-CJZ0AXZ-.js";import{K as de,i as ce}from"./ref-Bq52Xjdl.js";import{T as H}from"./transitional-styles-CR09P99V.js";import{s as pe,F as ue,L as ge,u as fe}from"./menu-heading-Uetv9M9_.js";import{t as J}from"./tokens.style-DuOE18tp.js";import{i as Q}from"./lit-element-BoQqPHl6.js";import"./popover-BHnekmV_.js";import"./backdrop-DOU9KOvk.js";import{a as ve}from"./button-eMGaOrM6.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class be{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(K,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(K,this.__litLocalizeEventHandler)}}const me=e=>e.addController(new be(e)),ye=me;function _e(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,a)=>{let i;const r=t.connectedCallback,l=t.disconnectedCallback;t.connectedCallback=function(){r==null||r.call(this);const ie=(We,Te)=>{var V;(V=a.value)==null||V.call(this)};i=new MutationObserver(ie),i.observe(this,e)},t.disconnectedCallback=function(){l==null||l.call(this),i.disconnect()}}}var we=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,X=e=>{throw TypeError(e)},m=(e,t,s,a)=>{for(var i=a>1?void 0:a?xe(t,s):t,r=e.length-1,l;r>=0;r--)(l=e[r])&&(i=(a?l(t,s,i):l(i))||i);return a&&i&&we(t,s,i),i},F=(e,t,s)=>t.has(e)||X("Cannot "+s),Ce=(e,t,s)=>(F(e,t,"read from private field"),s?s.call(e):t.get(e)),I=(e,t,s)=>t.has(e)?X("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),w=(e,t,s,a)=>(F(e,t,"write to private field"),t.set(e,s),s),N=(e,t,s)=>(F(e,t,"access private method"),s),u,C,A;let p=class extends ue(U){constructor(){super(),I(this,C),I(this,u,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",N(this,C,A)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),N(this,C,A).call(this,e))})}get hidden(){return Ce(this,u)}set hidden(e){this.isPlaceholder||(w(this,u,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(w(this,u,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>H.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(w(this,u,!0),this.setAttribute("aria-hidden","true")):(w(this,u,!1),this.setAttribute("aria-hidden","false"))}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple,t=f`
      <span class="checkbox ${Y({checked:this.selected})}">
        ${this.selected?f`<gds-icon-checkmark stroke="4"></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),f`<div>${S(e,()=>t)} <slot></slot></div>`}};u=new WeakMap;C=new WeakSet;A=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};p.styles=[J,pe];m([h()],p.prototype,"value",2);m([h({attribute:"aria-hidden",reflect:!0})],p.prototype,"hidden",1);m([h({attribute:"aria-selected",reflect:!0})],p.prototype,"selected",2);m([h({type:Boolean,reflect:!0})],p.prototype,"isPlaceholder",2);m([E("isplaceholder")],p.prototype,"_handlePlaceholderStatusChange",1);p=m([B("gds-option")],p);const Ee=Q`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var $e=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,Z=e=>{throw TypeError(e)},$=(e,t,s,a)=>{for(var i=a>1?void 0:a?Le(t,s):t,r=e.length-1,l;r>=0;r--)(l=e[r])&&(i=(a?l(t,s,i):l(i))||i);return a&&i&&$e(t,s,i),i},ke=(e,t,s)=>t.has(e)||Z("Cannot "+s),x=(e,t,s)=>(ke(e,t,"read from private field"),s?s.call(e):t.get(e)),R=(e,t,s)=>t.has(e)?Z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),y,M;let v=class extends U{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,R(this,y,ce()),R(this,M,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new ge(this)}get navigableItems(){return this.visibleOptionElements}get options(){return x(this,y).value?fe(x(this,y).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),H.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",x(this,M))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return f`<slot ${de(x(this,y))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};y=new WeakMap;M=new WeakMap;v.styles=Ee;$([h({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);$([h()],v.prototype,"compareWith",2);$([E("multiple")],v.prototype,"_rerenderOptions",1);v=$([B("gds-listbox")],v);const Oe=Q`
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
`;var Se=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,j=e=>{throw TypeError(e)},n=(e,t,s,a)=>{for(var i=a>1?void 0:a?Ae(t,s):t,r=e.length-1,l;r>=0;r--)(l=e[r])&&(i=(a?l(t,s,i):l(i))||i);return a&&i&&Se(t,s,i),i},G=(e,t,s)=>t.has(e)||j("Cannot "+s),d=(e,t,s)=>(G(e,t,"read from private field"),t.get(e)),c=(e,t,s)=>t.has(e)?j("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Me=(e,t,s,a)=>(G(e,t,"write to private field"),t.set(e,s),s),O=(e,t,s)=>(G(e,t,"access private method"),s),g,W,T,D,P,z,_,ee,te,se,b,L;let o=class extends ve{constructor(){super(),c(this,_),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,c(this,g),c(this,W,e=>{const t=e.getBoundingClientRect(),a=window.innerHeight-t.bottom,i=t.top;let r=Math.min(i,this.maxHeight);return a>i&&(r=Math.min(a,this.maxHeight)),`${r-16}px`}),c(this,T,e=>{const t=this._elSearchInput,s=Array.from(d(this,g));if(s.forEach(i=>i.hidden=!1),!t.value)return;s.filter(i=>!this.searchFilter(t.value,i)).forEach(i=>i.hidden=!0)}),c(this,D,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),c(this,P,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),c(this,z,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),c(this,b,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),c(this,L,e=>{var t;e.key==="Tab"&&!this.searchable&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())}),he(this),ye(this),Me(this,g,this.getElementsByTagName(ae("gds-option")))}get type(){return"gds-dropdown"}get options(){return Array.from(d(this,g)).filter(e=>!e.hasAttribute("isplaceholder"))}get placeholder(){return Array.from(d(this,g)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=k(le`${this.value.length} selected`):e=this.value.reduce((a,i)=>{var r;return a+((r=this.options.find(l=>l.value===i))==null?void 0:r.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(a=>a.selected))==null?void 0:t.innerHTML,e||((s=this.placeholder)==null?void 0:s.innerHTML)||""}connectedCallback(){super.connectedCallback(),H.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return f`
      ${S(this.label&&!this.hideLabel,()=>f`<label for="trigger">${this.label}</label>`)}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${d(this,W)}
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
          class=${Y({small:this.size==="small"})}
        >
          <slot name="trigger">
            <span>${oe(this.displayValue)}</span>
          </slot>
          <div class="icon">
            <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
          </div>
        </button>
        ${S(this.searchable,()=>f`<input
              id="searchinput"
              type="text"
              aria-label="${k("Filter available options")}"
              placeholder="${k("Search")}"
              @keydown=${d(this,D)}
              @keyup=${d(this,T)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${ne(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${O(this,_,ee)}"
          @gds-focus="${d(this,z)}"
          @keydown=${d(this,P)}
        >
          <slot gds-allow="gds-option gds-menu-heading"></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"
        ><slot name="message">${this.validationMessage}</slot></span
      >
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){const e=this.open;Array.from(d(this,g)).forEach(t=>t.hidden=!e),e?O(this,_,te).call(this):(O(this,_,se).call(this),this._elSearchInput&&(this._elSearchInput.value="")),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};g=new WeakMap;W=new WeakMap;T=new WeakMap;D=new WeakMap;P=new WeakMap;z=new WeakMap;_=new WeakSet;ee=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};te=function(){this.addEventListener("blur",d(this,b)),this.addEventListener("gds-blur",d(this,b)),this.addEventListener("keydown",d(this,L))};se=function(){this.removeEventListener("blur",d(this,b)),this.removeEventListener("gds-blur",d(this,b)),this.removeEventListener("keydown",d(this,L))};b=new WeakMap;L=new WeakMap;o.styles=[J,Oe];o.shadowRootOptions={mode:"open",delegatesFocus:!0};n([h()],o.prototype,"label",2);n([h({type:Boolean,reflect:!0})],o.prototype,"open",2);n([h({type:Boolean,reflect:!0})],o.prototype,"searchable",2);n([h({type:Boolean,reflect:!0})],o.prototype,"multiple",2);n([h()],o.prototype,"compareWith",2);n([h()],o.prototype,"searchFilter",2);n([h({type:Boolean,attribute:"sync-popover-width"})],o.prototype,"syncPopoverWidth",2);n([h({type:Number,attribute:"max-height"})],o.prototype,"maxHeight",2);n([h()],o.prototype,"size",2);n([h({type:Boolean,attribute:"hide-label"})],o.prototype,"hideLabel",2);n([h()],o.prototype,"disableMobileStyles",2);n([q("#trigger")],o.prototype,"_elTriggerBtn",2);n([re("#listbox")],o.prototype,"_elListbox",2);n([q("#searchinput")],o.prototype,"_elSearchInput",2);n([_e({attributes:!0,childList:!0,subtree:!0,characterData:!0})],o.prototype,"_handleLightDOMChange",1);n([E("value")],o.prototype,"_handleValueChange",1);n([E("open")],o.prototype,"_onOpenChange",1);o=n([B("gds-dropdown")],o);
