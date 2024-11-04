import{m as k,s as se}from"./runtime-CMQcyTl6.js";import{n as l,g as H,h as g,G as N}from"./custom-element-scoping-77kCHgjl.js";import{a as R}from"./query-p8xgzTDt.js";import{r as ie}from"./query-async-MEroNOeJ.js";import{e as K}from"./class-map-Bz98xO8-.js";import{o as re}from"./if-defined-Ct9lF4W9.js";import{o as ae}from"./icon-BdeMloRO.js";import{n as S}from"./when-BR7zwNJC.js";import{t as Y}from"./tokens.style-Drw-Y0fR.js";import{T as B}from"./transitional-styles-6JdI43tl.js";import{o as oe}from"./observe-light-dom-CmJPHUQ4.js";import{w as E}from"./watch-tFciLXSI.js";import{a as ne}from"./button-BpXKkI3D.js";import{i as J}from"./lit-element-C_s9q329.js";import"./popover-UHAG6moi.js";import"./backdrop-CTb3Ex63.js";import"./chevron-bottom-D8WBPt0U.js";import"./checkmark-N45Lv2XY.js";import{n as le,e as he}from"./ref-D_ho-JAG.js";import{s as pe,F as de,L as ce,u as ue}from"./menu-heading-Dv0SZF1y.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class fe{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(V,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(V,this.__litLocalizeEventHandler)}}const ge=e=>e.addController(new fe(e)),ve=ge,me=J`
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
`,be=J`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var ye=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,Q=e=>{throw TypeError(e)},b=(e,t,s,i)=>{for(var r=i>1?void 0:i?_e(t,s):t,n=e.length-1,p;n>=0;n--)(p=e[n])&&(r=(i?p(t,s,r):p(r))||r);return i&&r&&ye(t,s,r),r},F=(e,t,s)=>t.has(e)||Q("Cannot "+s),we=(e,t,s)=>(F(e,t,"read from private field"),s?s.call(e):t.get(e)),I=(e,t,s)=>t.has(e)?Q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),w=(e,t,s,i)=>(F(e,t,"write to private field"),t.set(e,s),s),U=(e,t,s)=>(F(e,t,"access private method"),s),f,C,A;let u=class extends de(N){constructor(){super(),I(this,C),I(this,f,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",U(this,C,A)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),U(this,C,A).call(this,e))})}get hidden(){return we(this,f)}set hidden(e){this.isPlaceholder||(w(this,f,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(w(this,f,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>B.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(w(this,f,!0),this.setAttribute("aria-hidden","true")):(w(this,f,!1),this.setAttribute("aria-hidden","false"))}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple,t=g`
      <span class="checkbox ${K({checked:this.selected})}">
        ${this.selected?g`<gds-icon-checkmark stroke="4"></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),g`<div>${S(e,()=>t)} <slot></slot></div>`}};f=new WeakMap;C=new WeakSet;A=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};u.styles=[Y,pe];b([l()],u.prototype,"value",2);b([l({attribute:"aria-hidden",reflect:!0})],u.prototype,"hidden",1);b([l({attribute:"aria-selected",reflect:!0})],u.prototype,"selected",2);b([l({type:Boolean,reflect:!0})],u.prototype,"isPlaceholder",2);b([E("isplaceholder")],u.prototype,"_handlePlaceholderStatusChange",1);u=b([H("gds-option")],u);var xe=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,X=e=>{throw TypeError(e)},$=(e,t,s,i)=>{for(var r=i>1?void 0:i?Ce(t,s):t,n=e.length-1,p;n>=0;n--)(p=e[n])&&(r=(i?p(t,s,r):p(r))||r);return i&&r&&xe(t,s,r),r},Ee=(e,t,s)=>t.has(e)||X("Cannot "+s),x=(e,t,s)=>(Ee(e,t,"read from private field"),s?s.call(e):t.get(e)),q=(e,t,s)=>t.has(e)?X("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),y,M;let v=class extends N{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,q(this,y,he()),q(this,M,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new ce(this)}get navigableItems(){return this.visibleOptionElements}get options(){return x(this,y).value?ue(x(this,y).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),B.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",x(this,M))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return g`<slot ${le(x(this,y))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};y=new WeakMap;M=new WeakMap;v.styles=be;$([l({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);$([l()],v.prototype,"compareWith",2);$([E("multiple")],v.prototype,"_rerenderOptions",1);v=$([H("gds-listbox")],v);var $e=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,Z=e=>{throw TypeError(e)},o=(e,t,s,i)=>{for(var r=i>1?void 0:i?Le(t,s):t,n=e.length-1,p;n>=0;n--)(p=e[n])&&(r=(i?p(t,s,r):p(r))||r);return i&&r&&$e(t,s,r),r},G=(e,t,s)=>t.has(e)||Z("Cannot "+s),h=(e,t,s)=>(G(e,t,"read from private field"),t.get(e)),d=(e,t,s)=>t.has(e)?Z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),ke=(e,t,s,i)=>(G(e,t,"write to private field"),t.set(e,s),s),O=(e,t,s)=>(G(e,t,"access private method"),s),c,W,T,D,P,z,_,j,ee,te,m,L;let a=class extends ne{constructor(){super(),d(this,_),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,d(this,c),d(this,W,e=>{const t=e.getBoundingClientRect(),i=window.innerHeight-t.bottom,r=t.top;let n=Math.min(r,this.maxHeight);return i>r&&(n=Math.min(i,this.maxHeight)),`${n-16}px`}),d(this,T,e=>{if(!e.currentTarget)return;const t=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!t.value)return;this.options.filter(i=>!this.searchFilter(t.value,i)).forEach(i=>i.hidden=!0)}),d(this,D,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),d(this,P,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),d(this,z,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),d(this,m,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),d(this,L,e=>{var t;e.key==="Tab"&&!this.searchable&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())}),ve(this)}get type(){return"gds-dropdown"}get options(){return h(this,c)?Array.from(h(this,c)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(h(this,c))return Array.from(h(this,c)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=k(se`${this.value.length} selected`):e=this.value.reduce((i,r)=>{var n;return i+((n=this.options.find(p=>p.value===r))==null?void 0:n.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(i=>i.selected))==null?void 0:t.innerHTML,e||((s=this.placeholder)==null?void 0:s.innerHTML)||""}connectedCallback(){super.connectedCallback(),B.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return g`
      ${S(this.label&&!this.hideLabel,()=>g`<label for="trigger">${this.label}</label>`)}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${h(this,W)}
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
          class=${K({small:this.size==="small"})}
        >
          <slot name="trigger">
            <span>${ae(this.displayValue)}</span>
          </slot>
          <div class="icon">
            <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
          </div>
        </button>
        ${S(this.searchable,()=>g`<input
              id="searchinput"
              type="text"
              aria-label="${k("Filter available options")}"
              placeholder="${k("Search")}"
              @keydown=${h(this,D)}
              @input=${h(this,T)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${re(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${O(this,_,j)}"
          @gds-focus="${h(this,z)}"
          @keydown=${h(this,P)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"
        ><slot name="message">${this.validationMessage}</slot></span
      >
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),ke(this,c,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){var s;const e=this.open;(s=h(this,c))==null||s.forEach(i=>i.hidden=!e),e?O(this,_,ee).call(this):(O(this,_,te).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(i=>i.selected);this.updateComplete.then(()=>t==null?void 0:t.scrollIntoView()),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};c=new WeakMap;W=new WeakMap;T=new WeakMap;D=new WeakMap;P=new WeakMap;z=new WeakMap;_=new WeakSet;j=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};ee=function(){this.addEventListener("blur",h(this,m)),this.addEventListener("gds-blur",h(this,m)),this.addEventListener("keydown",h(this,L))};te=function(){this.removeEventListener("blur",h(this,m)),this.removeEventListener("gds-blur",h(this,m)),this.removeEventListener("keydown",h(this,L))};m=new WeakMap;L=new WeakMap;a.styles=[Y,me];a.shadowRootOptions={mode:"open",delegatesFocus:!0};o([l()],a.prototype,"label",2);o([l({type:Boolean,reflect:!0})],a.prototype,"open",2);o([l({type:Boolean,reflect:!0})],a.prototype,"searchable",2);o([l({type:Boolean,reflect:!0})],a.prototype,"multiple",2);o([l()],a.prototype,"compareWith",2);o([l()],a.prototype,"searchFilter",2);o([l({type:Boolean,attribute:"sync-popover-width"})],a.prototype,"syncPopoverWidth",2);o([l({type:Number,attribute:"max-height"})],a.prototype,"maxHeight",2);o([l()],a.prototype,"size",2);o([l({type:Boolean,attribute:"hide-label"})],a.prototype,"hideLabel",2);o([l()],a.prototype,"disableMobileStyles",2);o([R("#trigger")],a.prototype,"_elTriggerBtn",2);o([ie("#listbox")],a.prototype,"_elListbox",2);o([R("#searchinput")],a.prototype,"_elSearchInput",2);o([oe({attributes:!0,childList:!0,subtree:!0,characterData:!0})],a.prototype,"_handleLightDOMChange",1);o([E("value")],a.prototype,"_handleValueChange",1);o([E("open")],a.prototype,"_onOpenChange",1);a=o([H("gds-dropdown")],a);
