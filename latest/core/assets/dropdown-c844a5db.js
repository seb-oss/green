import{n as h,g as F,h as g,G as R,a as se}from"./gds-element-90c5f05b.js";import{a as Y}from"./query-b9d3c2af.js";import{r as ie}from"./query-async-1ff18261.js";import{o as re}from"./icon-f5e30329.js";import{n as S}from"./when-cf7256a5.js";import{o as ae}from"./if-defined-39fa3d49.js";import{e as J}from"./class-map-43969d56.js";import{m as L,s as oe}from"./lit-localize-87611c26.js";import{c as le}from"./constrain-slots-08d8606c.js";import{w as C}from"./watch-c4961afe.js";import"./chevron-bottom-e55f6467.js";import"./checkmark-104a6d13.js";import{n as ne,e as he}from"./ref-f09415fa.js";import{T as H}from"./transitional-styles-46270d55.js";import{s as de,F as ce,L as pe,u as ue}from"./menu-heading-201ad871.js";import{t as Q}from"./tokens.style-681e2422.js";import{i as X}from"./lit-element-2a5e401f.js";import"./popover-622e84f2.js";import"./backdrop-8fb40f42.js";import"./button-ba14a1a9.js";import{G as fe}from"./form-control-341856bb.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ge{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(N,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(N,this.__litLocalizeEventHandler)}}const ve=e=>e.addController(new ge(e)),be=ve;function me(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,r)=>{let i;const o=t.connectedCallback,n=t.disconnectedCallback;t.connectedCallback=function(){o==null||o.call(this);const te=(Ae,We)=>{var I;(I=r.value)==null||I.call(this)};i=new MutationObserver(te),i.observe(this,e)},t.disconnectedCallback=function(){n==null||n.call(this),i.disconnect()}}}var ye=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,m=(e,t,s,r)=>{for(var i=r>1?void 0:r?_e(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&ye(t,s,i),i},G=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},we=(e,t,s)=>(G(e,t,"read from private field"),s?s.call(e):t.get(e)),U=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},_=(e,t,s,r)=>(G(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),K=(e,t,s)=>(G(e,t,"access private method"),s),u,x,O;let p=class extends ce(R){constructor(){super(),U(this,x),U(this,u,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",K(this,x,O)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),K(this,x,O).call(this,e))})}get hidden(){return we(this,u)}set hidden(e){this.isPlaceholder||(_(this,u,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(_(this,u,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>H.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(_(this,u,!0),this.setAttribute("aria-hidden","true")):(_(this,u,!1),this.setAttribute("aria-hidden","false"))}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple,t=g`
      <span class="checkbox ${J({checked:this.selected})}">
        ${this.selected?g`<gds-icon-checkmark stroke="4"></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),g`<div>${S(e,()=>t)} <slot></slot></div>`}};u=new WeakMap;x=new WeakSet;O=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};p.styles=[Q,de];m([h()],p.prototype,"value",2);m([h({attribute:"aria-hidden",reflect:!0})],p.prototype,"hidden",1);m([h({attribute:"aria-selected",reflect:!0})],p.prototype,"selected",2);m([h({type:Boolean,reflect:!0})],p.prototype,"isPlaceholder",2);m([C("isplaceholder")],p.prototype,"_handlePlaceholderStatusChange",1);p=m([F("gds-option")],p);const xe=X`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var Ce=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,E=(e,t,s,r)=>{for(var i=r>1?void 0:r?Ee(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&Ce(t,s,i),i},$e=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},w=(e,t,s)=>($e(e,t,"read from private field"),s?s.call(e):t.get(e)),q=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},y,A;let v=class extends R{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,q(this,y,he()),q(this,A,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new pe(this)}get navigableItems(){return this.visibleOptionElements}get options(){return w(this,y).value?ue(w(this,y).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),H.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",w(this,A))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return g`<slot ${ne(w(this,y))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};y=new WeakMap;A=new WeakMap;v.styles=xe;E([h({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);E([h()],v.prototype,"compareWith",2);E([C("multiple")],v.prototype,"_rerenderOptions",1);v=E([F("gds-listbox")],v);const Le=X`
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
`;var ke=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,l=(e,t,s,r)=>{for(var i=r>1?void 0:r?Se(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&ke(t,s,i),i},V=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},d=(e,t,s)=>(V(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},Oe=(e,t,s,r)=>(V(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),k=(e,t,s)=>(V(e,t,"access private method"),s),f,W,M,T,D,P,Z,z,j,B,ee,b,$;let a=class extends fe{constructor(){super(),c(this,P),c(this,z),c(this,B),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,c(this,f,void 0),c(this,W,e=>{const t=this._elSearchInput,s=Array.from(d(this,f));if(s.forEach(i=>i.hidden=!1),!t.value)return;s.filter(i=>!this.searchFilter(t.value,i)).forEach(i=>i.hidden=!0)}),c(this,M,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),c(this,T,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),c(this,D,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),c(this,b,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),c(this,$,e=>{var t;e.key==="Tab"&&!this.searchable&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())}),le(this),be(this),Oe(this,f,this.getElementsByTagName(se("gds-option")))}get type(){return"gds-dropdown"}get options(){return Array.from(d(this,f)).filter(e=>!e.hasAttribute("isplaceholder"))}get placeholder(){return Array.from(d(this,f)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=L(oe`${this.value.length} selected`):e=this.value.reduce((r,i)=>{var o;return r+((o=this.options.find(n=>n.value===i))==null?void 0:o.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(r=>r.selected))==null?void 0:t.innerHTML,e||((s=this.placeholder)==null?void 0:s.innerHTML)||""}connectedCallback(){super.connectedCallback(),H.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return g`
      ${S(this.label&&!this.hideLabel,()=>g`<label for="trigger">${this.label}</label>`)}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${e=>`${this.maxHeight}px`}
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
          class=${J({small:this.size==="small"})}
        >
          <slot name="trigger">
            <span>${re(this.displayValue)}</span>
          </slot>
          <div class="icon">
            <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
          </div>
        </button>
        ${S(this.searchable,()=>g`<input
              id="searchinput"
              type="text"
              aria-label="${L("Filter available options")}"
              placeholder="${L("Search")}"
              @keydown=${d(this,M)}
              @keyup=${d(this,W)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${ae(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${k(this,P,Z)}"
          @gds-focus="${d(this,D)}"
          @keydown=${d(this,T)}
        >
          <slot gds-allow="gds-option gds-menu-heading"></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"
        ><slot name="message">${this.validationMessage}</slot></span
      >
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){const e=this.open;Array.from(d(this,f)).forEach(t=>t.hidden=!e),e?k(this,z,j).call(this):(k(this,B,ee).call(this),this._elSearchInput&&(this._elSearchInput.value="")),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};f=new WeakMap;W=new WeakMap;M=new WeakMap;T=new WeakMap;D=new WeakMap;P=new WeakSet;Z=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};z=new WeakSet;j=function(){this.addEventListener("blur",d(this,b)),this.addEventListener("gds-blur",d(this,b)),this.addEventListener("keydown",d(this,$))};B=new WeakSet;ee=function(){this.removeEventListener("blur",d(this,b)),this.removeEventListener("gds-blur",d(this,b)),this.removeEventListener("keydown",d(this,$))};b=new WeakMap;$=new WeakMap;a.styles=[Q,Le];a.shadowRootOptions={mode:"open",delegatesFocus:!0};l([h()],a.prototype,"label",2);l([h({type:Boolean,reflect:!0})],a.prototype,"open",2);l([h({type:Boolean,reflect:!0})],a.prototype,"searchable",2);l([h({type:Boolean,reflect:!0})],a.prototype,"multiple",2);l([h()],a.prototype,"compareWith",2);l([h()],a.prototype,"searchFilter",2);l([h({type:Boolean,attribute:"sync-popover-width"})],a.prototype,"syncPopoverWidth",2);l([h({type:Number,attribute:"max-height"})],a.prototype,"maxHeight",2);l([h()],a.prototype,"size",2);l([h({type:Boolean,attribute:"hide-label"})],a.prototype,"hideLabel",2);l([h()],a.prototype,"disableMobileStyles",2);l([Y("#trigger")],a.prototype,"_elTriggerBtn",2);l([ie("#listbox")],a.prototype,"_elListbox",2);l([Y("#searchinput")],a.prototype,"_elSearchInput",2);l([me({attributes:!0,childList:!0,subtree:!0,characterData:!0})],a.prototype,"_handleLightDOMChange",1);l([C("value")],a.prototype,"_handleValueChange",1);l([C("open")],a.prototype,"_onOpenChange",1);a=l([F("gds-dropdown")],a);
