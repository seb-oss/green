import{n as h,g as F,G as Y,h as w,a as ie}from"./gds-element-54cd6e2a.js";import{a as J}from"./query-b9d3c2af.js";import{r as re}from"./query-async-1ff18261.js";import{o as ae}from"./icon-178ad4ed.js";import{n as S}from"./when-cf7256a5.js";import{o as oe}from"./if-defined-e4b5fcf9.js";import{e as Q}from"./class-map-4ef1884f.js";import{m as L,s as le}from"./lit-localize-87611c26.js";import{c as ne}from"./constrain-slots-08d8606c.js";import{w as E}from"./watch-c4961afe.js";import"./chevron-bottom-29b250de.js";import{n as he,e as pe}from"./ref-ff2f01fc.js";import{T as H}from"./transitional-styles-73ecf23d.js";import{x as N,i as X}from"./lit-element-71e04f06.js";import{s as ce,F as de,L as ue,u as fe}from"./menu-heading-ebc282a0.js";import{t as Z}from"./tokens.style-880811e7.js";import"./popover-bc7a8b4e.js";import"./backdrop-24fc6001.js";import{G as ve}from"./form-control-be1a61da.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ge{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(K,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(K,this.__litLocalizeEventHandler)}}const me=e=>e.addController(new ge(e)),be=me;function ye(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,r)=>{let i;const o=t.connectedCallback,n=t.disconnectedCallback;t.connectedCallback=function(){o==null||o.call(this);const se=(We,Me)=>{var I;(I=r.value)==null||I.call(this)};i=new MutationObserver(se),i.observe(this,e)},t.disconnectedCallback=function(){n==null||n.call(this),i.disconnect()}}}var _e=Object.defineProperty,we=Object.getOwnPropertyDescriptor,m=(e,t,s,r)=>{for(var i=r>1?void 0:r?we(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&_e(t,s,i),i},G=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},Ce=(e,t,s)=>(G(e,t,"read from private field"),s?s.call(e):t.get(e)),U=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},y=(e,t,s,r)=>(G(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),q=(e,t,s)=>(G(e,t,"access private method"),s),u,C,A;let d=class extends de(Y){constructor(){super(),U(this,C),U(this,u,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",q(this,C,A)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),q(this,C,A).call(this,e))})}get hidden(){return Ce(this,u)}set hidden(e){this.isPlaceholder||(y(this,u,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(y(this,u,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>H.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(y(this,u,!0),this.setAttribute("aria-hidden","true")):(y(this,u,!1),this.setAttribute("aria-hidden","false"))}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple,t=N` <span
      class="checkbox ${Q({checked:this.selected})}"
    ></span>`;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),N`<div>${S(e,()=>t)} <slot></slot></div>`}};u=new WeakMap;C=new WeakSet;A=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};d.styles=[Z,ce];m([h()],d.prototype,"value",2);m([h({attribute:"aria-hidden",reflect:!0})],d.prototype,"hidden",1);m([h({attribute:"aria-selected",reflect:!0})],d.prototype,"selected",2);m([h({type:Boolean,reflect:!0})],d.prototype,"isPlaceholder",2);m([E("isplaceholder")],d.prototype,"_handlePlaceholderStatusChange",1);d=m([F("gds-option")],d);const Ee=X`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
    }
  }
`;var xe=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,x=(e,t,s,r)=>{for(var i=r>1?void 0:r?$e(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&xe(t,s,i),i},Le=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},_=(e,t,s)=>(Le(e,t,"read from private field"),s?s.call(e):t.get(e)),R=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},b,O;let v=class extends Y{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,R(this,b,pe()),R(this,O,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new ue(this)}get navigableItems(){return this.visibleOptionElements}get options(){return _(this,b).value?fe(_(this,b).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),H.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",_(this,O))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return w`<slot ${he(_(this,b))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};b=new WeakMap;O=new WeakMap;v.styles=Ee;x([h({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);x([h()],v.prototype,"compareWith",2);x([E("multiple")],v.prototype,"_rerenderOptions",1);v=x([F("gds-listbox")],v);const ke=X`
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
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      gap: 1ch;
      border-radius: var(--gds-space-2xs);
      font-size: var(--gds-text-size-label-medium);
      line-height: var(--gds-text-line-height-label-medium);
      font-weight: var(--gds-text-weight-regular);
      font-family: inherit;
      padding-inline: var(--gds-space-s);
      padding-block: var(--gds-space-xs);
      background-color: var(--gds-sys-color-container-container-bright);
      border: 1px solid var(--gds-sys-color-base600);
      width: 100%;
      max-width: 100%;
      cursor: pointer;
      color: currentColor;

      // Motion
      transition:
        0.3s cubic-bezier(0.23, 1, 0.32, 1),
        outline-offset,
        outline-width;

      // Hover
      &:hover {
        background-color: var(--gds-sys-color-container-container-dim1);
      }
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    button ::part(icon) {
      // min-width: 24px;
      block-size: 1lh;
      inline-size: 1lh;
    }

    :host(:focus) button {
      outline: auto;
      outline-offset: 4px;
      outline-color: currentColor;
      outline-width: 2px;
    }

    button[aria-expanded='true'] ::part(icon) {
      transform: scaleY(-1);
    }

    label {
      font-weight: var(--gds-text-weight-regular);
      line-height: var(--gds-text-line-height-label-input-large);
      font-size: var(--gds-text-size-label-input-large);
      padding-block: var(--gds-space-2xs);
      font-family: inherit;
    }

    gds-listbox {
      user-select: none;
    }
  }
`;var Se=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,l=(e,t,s,r)=>{for(var i=r>1?void 0:r?Ae(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&Se(t,s,i),i},V=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},p=(e,t,s)=>(V(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},Oe=(e,t,s,r)=>(V(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),k=(e,t,s)=>(V(e,t,"access private method"),s),f,W,M,T,D,P,j,z,ee,B,te,g,$;let a=class extends ve{constructor(){super(),c(this,P),c(this,z),c(this,B),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,c(this,f,void 0),c(this,W,e=>{const t=this._elSearchInput,s=Array.from(p(this,f));if(s.forEach(i=>i.hidden=!1),!t.value)return;s.filter(i=>!this.searchFilter(t.value,i)).forEach(i=>i.hidden=!0)}),c(this,M,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),c(this,T,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),c(this,D,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),c(this,g,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),c(this,$,e=>{var t;e.key==="Tab"&&!this.searchable&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())}),ne(this),be(this),Oe(this,f,this.getElementsByTagName(ie("gds-option")))}get type(){return"gds-dropdown"}get options(){return Array.from(p(this,f)).filter(e=>!e.hasAttribute("isplaceholder"))}get placeholder(){return Array.from(p(this,f)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=L(le`${this.value.length} selected`):e=this.value.reduce((r,i)=>{var o;return r+((o=this.options.find(n=>n.value===i))==null?void 0:o.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(r=>r.selected))==null?void 0:t.innerHTML,e||((s=this.placeholder)==null?void 0:s.innerHTML)||""}connectedCallback(){super.connectedCallback(),H.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return w`
      ${S(this.label&&!this.hideLabel,()=>w`<label for="trigger">${this.label}</label>`)}

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
          slot="trigger"
          aria-haspopup="listbox"
          role="combobox"
          aria-owns="listbox"
          aria-controls="listbox"
          aria-expanded="${this.open}"
          aria-label="${this.label}"
          class=${Q({small:this.size==="small"})}
        >
          <slot name="trigger">
            <span>${ae(this.displayValue)}</span>
            <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
          </slot>
        </button>
        ${S(this.searchable,()=>w`<input
              id="searchinput"
              type="text"
              aria-label="${L("Filter available options")}"
              placeholder="${L("Search")}"
              @keydown=${p(this,M)}
              @keyup=${p(this,W)}
            />`)}

        <gds-listbox
          id="listbox"
          .multiple="${oe(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${k(this,P,j)}"
          @gds-focus="${p(this,D)}"
          @keydown=${p(this,T)}
        >
          <slot gds-allow="gds-option gds-menu-heading"></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"
        ><slot name="message">${this.validationMessage}</slot></span
      >
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){const e=this.open;Array.from(p(this,f)).forEach(t=>t.hidden=!e),e?k(this,z,ee).call(this):(k(this,B,te).call(this),this._elSearchInput&&(this._elSearchInput.value="")),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};f=new WeakMap;W=new WeakMap;M=new WeakMap;T=new WeakMap;D=new WeakMap;P=new WeakSet;j=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};z=new WeakSet;ee=function(){this.addEventListener("blur",p(this,g)),this.addEventListener("gds-blur",p(this,g)),this.addEventListener("keydown",p(this,$))};B=new WeakSet;te=function(){this.removeEventListener("blur",p(this,g)),this.removeEventListener("gds-blur",p(this,g)),this.removeEventListener("keydown",p(this,$))};g=new WeakMap;$=new WeakMap;a.styles=[Z,ke];a.shadowRootOptions={mode:"open",delegatesFocus:!0};l([h()],a.prototype,"label",2);l([h({type:Boolean,reflect:!0})],a.prototype,"open",2);l([h({type:Boolean,reflect:!0})],a.prototype,"searchable",2);l([h({type:Boolean,reflect:!0})],a.prototype,"multiple",2);l([h()],a.prototype,"compareWith",2);l([h()],a.prototype,"searchFilter",2);l([h({type:Boolean,attribute:"sync-popover-width"})],a.prototype,"syncPopoverWidth",2);l([h({type:Number,attribute:"max-height"})],a.prototype,"maxHeight",2);l([h()],a.prototype,"size",2);l([h({type:Boolean,attribute:"hide-label"})],a.prototype,"hideLabel",2);l([h()],a.prototype,"disableMobileStyles",2);l([J("#trigger")],a.prototype,"_elTriggerBtn",2);l([re("#listbox")],a.prototype,"_elListbox",2);l([J("#searchinput")],a.prototype,"_elSearchInput",2);l([ye({attributes:!0,childList:!0,subtree:!0,characterData:!0})],a.prototype,"_handleLightDOMChange",1);l([E("value")],a.prototype,"_handleValueChange",1);l([E("open")],a.prototype,"_onOpenChange",1);a=l([F("gds-dropdown")],a);
