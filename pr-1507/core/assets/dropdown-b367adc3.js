import{n as h,g as H,G as Y,h as w,a as ie}from"./gds-element-24e794df.js";import{a as J}from"./query-b9d3c2af.js";import{r as re}from"./query-async-1ff18261.js";import{o as ae}from"./icon-228a1b71.js";import{n as A}from"./when-cf7256a5.js";import{o as oe}from"./if-defined-76b9fd71.js";import{e as Q}from"./class-map-43969d56.js";import{m as x,s as le}from"./lit-localize-87611c26.js";import{c as ne}from"./constrain-slots-08d8606c.js";import{w as E}from"./watch-c4961afe.js";import"./chevron-bottom-ff60f39a.js";import{n as he,e as pe}from"./ref-783c8f8f.js";import{T as z}from"./transitional-styles-63f7f7e5.js";import{x as N,i as X}from"./lit-element-2a5e401f.js";import{s as de,F as ce,L as ue,u as fe}from"./menu-heading-69e5cbd3.js";import{t as Z}from"./tokens.style-f52cb050.js";import"./popover-c218e73b.js";import"./backdrop-3ac2ea4c.js";import{G as ve}from"./button-84cc7829.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ge{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(K,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(K,this.__litLocalizeEventHandler)}}const me=e=>e.addController(new ge(e)),be=me;function _e(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,r)=>{let i;const o=t.connectedCallback,n=t.disconnectedCallback;t.connectedCallback=function(){o==null||o.call(this);const se=(We,Me)=>{var I;(I=r.value)==null||I.call(this)};i=new MutationObserver(se),i.observe(this,e)},t.disconnectedCallback=function(){n==null||n.call(this),i.disconnect()}}}var ye=Object.defineProperty,we=Object.getOwnPropertyDescriptor,m=(e,t,s,r)=>{for(var i=r>1?void 0:r?we(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&ye(t,s,i),i},G=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},Ce=(e,t,s)=>(G(e,t,"read from private field"),s?s.call(e):t.get(e)),U=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},_=(e,t,s,r)=>(G(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),q=(e,t,s)=>(G(e,t,"access private method"),s),u,C,k;let c=class extends ce(Y){constructor(){super(),U(this,C),U(this,u,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",q(this,C,k)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),q(this,C,k).call(this,e))})}get hidden(){return Ce(this,u)}set hidden(e){this.isPlaceholder||(_(this,u,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(_(this,u,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>z.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(_(this,u,!0),this.setAttribute("aria-hidden","true")):(_(this,u,!1),this.setAttribute("aria-hidden","false"))}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple,t=N` <span
      class="checkbox ${Q({checked:this.selected})}"
    ></span>`;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),N`<div>${A(e,()=>t)} <slot></slot></div>`}};u=new WeakMap;C=new WeakSet;k=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};c.styles=[Z,de];m([h()],c.prototype,"value",2);m([h({attribute:"aria-hidden",reflect:!0})],c.prototype,"hidden",1);m([h({attribute:"aria-selected",reflect:!0})],c.prototype,"selected",2);m([h({type:Boolean,reflect:!0})],c.prototype,"isPlaceholder",2);m([E("isplaceholder")],c.prototype,"_handlePlaceholderStatusChange",1);c=m([H("gds-option")],c);const Ee=X`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
    }
  }
`;var $e=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,$=(e,t,s,r)=>{for(var i=r>1?void 0:r?Le(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&$e(t,s,i),i},xe=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},y=(e,t,s)=>(xe(e,t,"read from private field"),s?s.call(e):t.get(e)),R=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},b,O;let v=class extends Y{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,R(this,b,pe()),R(this,O,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new ue(this)}get navigableItems(){return this.visibleOptionElements}get options(){return y(this,b).value?fe(y(this,b).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),z.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",y(this,O))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return w`<slot ${he(y(this,b))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};b=new WeakMap;O=new WeakMap;v.styles=Ee;$([h({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);$([h()],v.prototype,"compareWith",2);$([E("multiple")],v.prototype,"_rerenderOptions",1);v=$([H("gds-listbox")],v);const Se=X`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      color: var(--gds-sys-color-base800);
      font-family: inherit;
    }

    ::part(_button) {
      --pad: var(--_padding-inline);
      border-radius: var(--gds-space-2xs);
      padding-inline: calc(var(--pad) / 2);
    }

    :slot(trail) {
      transform: scaleY(-1);
    }

    ::part(ripple) {
      border-radius: var(--gds-space-2xs);
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
`;var Ae=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,l=(e,t,s,r)=>{for(var i=r>1?void 0:r?ke(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&Ae(t,s,i),i},V=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},p=(e,t,s)=>(V(e,t,"read from private field"),s?s.call(e):t.get(e)),d=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},Oe=(e,t,s,r)=>(V(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),S=(e,t,s)=>(V(e,t,"access private method"),s),f,W,M,T,D,P,j,B,ee,F,te,g,L;let a=class extends ve{constructor(){super(),d(this,P),d(this,B),d(this,F),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,d(this,f,void 0),d(this,W,e=>{const t=this._elSearchInput,s=Array.from(p(this,f));if(s.forEach(i=>i.hidden=!1),!t.value)return;s.filter(i=>!this.searchFilter(t.value,i)).forEach(i=>i.hidden=!0)}),d(this,M,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),d(this,T,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),d(this,D,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),d(this,g,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),d(this,L,e=>{var t;e.key==="Tab"&&!this.searchable&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())}),ne(this),be(this),Oe(this,f,this.getElementsByTagName(ie("gds-option")))}get type(){return"gds-dropdown"}get options(){return Array.from(p(this,f)).filter(e=>!e.hasAttribute("isplaceholder"))}get placeholder(){return Array.from(p(this,f)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=x(le`${this.value.length} selected`):e=this.value.reduce((r,i)=>{var o;return r+((o=this.options.find(n=>n.value===i))==null?void 0:o.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(r=>r.selected))==null?void 0:t.innerHTML,e||((s=this.placeholder)==null?void 0:s.innerHTML)||""}connectedCallback(){super.connectedCallback(),z.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return w`
      ${A(this.label&&!this.hideLabel,()=>w`<label for="trigger">${this.label}</label>`)}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${e=>`${this.maxHeight}px`}
        .disableMobileStyles=${this.disableMobileStyles}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        <gds-button
          id="trigger"
          name="trigger"
          aria-haspopup="listbox"
          slot="trigger"
          role="combobox"
          aria-owns="listbox"
          aria-controls="listbox"
          aria-expanded="${this.open}"
          aria-label="${this.label}"
          rank="secondary"
          part="trigger"
          class=${Q({small:this.size==="small"})}
        >
          <slot name="trigger">
            <span>${ae(this.displayValue)}</span>
          </slot>
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-button>
        ${A(this.searchable,()=>w`<input
              id="searchinput"
              type="text"
              aria-label="${x("Filter available options")}"
              placeholder="${x("Search")}"
              @keydown=${p(this,M)}
              @keyup=${p(this,W)}
            />`)}

        <gds-listbox
          id="listbox"
          .multiple="${oe(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${S(this,P,j)}"
          @gds-focus="${p(this,D)}"
          @keydown=${p(this,T)}
        >
          <slot gds-allow="gds-option gds-menu-heading"></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"
        ><slot name="message">${this.validationMessage}</slot></span
      >
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){const e=this.open;Array.from(p(this,f)).forEach(t=>t.hidden=!e),e?S(this,B,ee).call(this):(S(this,F,te).call(this),this._elSearchInput&&(this._elSearchInput.value="")),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};f=new WeakMap;W=new WeakMap;M=new WeakMap;T=new WeakMap;D=new WeakMap;P=new WeakSet;j=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};B=new WeakSet;ee=function(){this.addEventListener("blur",p(this,g)),this.addEventListener("gds-blur",p(this,g)),this.addEventListener("keydown",p(this,L))};F=new WeakSet;te=function(){this.removeEventListener("blur",p(this,g)),this.removeEventListener("gds-blur",p(this,g)),this.removeEventListener("keydown",p(this,L))};g=new WeakMap;L=new WeakMap;a.styles=[Z,Se];a.shadowRootOptions={mode:"open",delegatesFocus:!0};l([h()],a.prototype,"label",2);l([h({type:Boolean,reflect:!0})],a.prototype,"open",2);l([h({type:Boolean,reflect:!0})],a.prototype,"searchable",2);l([h({type:Boolean,reflect:!0})],a.prototype,"multiple",2);l([h()],a.prototype,"compareWith",2);l([h()],a.prototype,"searchFilter",2);l([h({type:Boolean,attribute:"sync-popover-width"})],a.prototype,"syncPopoverWidth",2);l([h({type:Number,attribute:"max-height"})],a.prototype,"maxHeight",2);l([h()],a.prototype,"size",2);l([h({type:Boolean,attribute:"hide-label"})],a.prototype,"hideLabel",2);l([h()],a.prototype,"disableMobileStyles",2);l([J("#trigger")],a.prototype,"_elTriggerBtn",2);l([re("#listbox")],a.prototype,"_elListbox",2);l([J("#searchinput")],a.prototype,"_elSearchInput",2);l([_e({attributes:!0,childList:!0,subtree:!0,characterData:!0})],a.prototype,"_handleLightDOMChange",1);l([E("value")],a.prototype,"_handleValueChange",1);l([E("open")],a.prototype,"_onOpenChange",1);a=l([H("gds-dropdown")],a);
