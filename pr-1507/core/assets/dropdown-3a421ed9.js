import{n as h,g as H,G as Y,h as w,a as ie}from"./gds-element-24e794df.js";import{a as J}from"./query-b9d3c2af.js";import{r as re}from"./query-async-1ff18261.js";import{o as ae}from"./icon-3fbd0bd5.js";import{n as A}from"./when-cf7256a5.js";import{o as oe}from"./if-defined-76b9fd71.js";import{e as Q}from"./class-map-43969d56.js";import{m as L,s as le}from"./lit-localize-87611c26.js";import{c as ne}from"./constrain-slots-08d8606c.js";import{w as E}from"./watch-c4961afe.js";import"./chevron-bottom-daa4db34.js";import"./checkmark-53ef9d16.js";import{n as he,e as pe}from"./ref-783c8f8f.js";import{T as G}from"./transitional-styles-9087e48b.js";import{x as k,i as X}from"./lit-element-2a5e401f.js";import{s as de,F as ce,L as ue,u as fe}from"./menu-heading-eb5793e4.js";import{t as Z}from"./tokens.style-f52cb050.js";import"./popover-77b9d55f.js";import"./backdrop-3ac2ea4c.js";import{G as ge}from"./button-380f1e57.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ve{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(K,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(K,this.__litLocalizeEventHandler)}}const me=e=>e.addController(new ve(e)),be=me;function ye(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,r)=>{let i;const o=t.connectedCallback,n=t.disconnectedCallback;t.connectedCallback=function(){o==null||o.call(this);const se=(We,Me)=>{var N;(N=r.value)==null||N.call(this)};i=new MutationObserver(se),i.observe(this,e)},t.disconnectedCallback=function(){n==null||n.call(this),i.disconnect()}}}var _e=Object.defineProperty,we=Object.getOwnPropertyDescriptor,m=(e,t,s,r)=>{for(var i=r>1?void 0:r?we(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&_e(t,s,i),i},V=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},Ce=(e,t,s)=>(V(e,t,"read from private field"),s?s.call(e):t.get(e)),U=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},y=(e,t,s,r)=>(V(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),q=(e,t,s)=>(V(e,t,"access private method"),s),u,C,O;let c=class extends ce(Y){constructor(){super(),U(this,C),U(this,u,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",q(this,C,O)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),q(this,C,O).call(this,e))})}get hidden(){return Ce(this,u)}set hidden(e){this.isPlaceholder||(y(this,u,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(y(this,u,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>G.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(y(this,u,!0),this.setAttribute("aria-hidden","true")):(y(this,u,!1),this.setAttribute("aria-hidden","false"))}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple,t=k`
      <span class="checkbox ${Q({checked:this.selected})}">
        ${this.selected?k`<gds-icon-checkmark stroke></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),k`<div>${A(e,()=>t)} <slot></slot></div>`}};u=new WeakMap;C=new WeakSet;O=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};c.styles=[Z,de];m([h()],c.prototype,"value",2);m([h({attribute:"aria-hidden",reflect:!0})],c.prototype,"hidden",1);m([h({attribute:"aria-selected",reflect:!0})],c.prototype,"selected",2);m([h({type:Boolean,reflect:!0})],c.prototype,"isPlaceholder",2);m([E("isplaceholder")],c.prototype,"_handlePlaceholderStatusChange",1);c=m([H("gds-option")],c);const Ee=X`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
    }
  }
`;var $e=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,$=(e,t,s,r)=>{for(var i=r>1?void 0:r?xe(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&$e(t,s,i),i},Le=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},_=(e,t,s)=>(Le(e,t,"read from private field"),s?s.call(e):t.get(e)),R=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},b,W;let g=class extends Y{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,R(this,b,pe()),R(this,W,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new ue(this)}get navigableItems(){return this.visibleOptionElements}get options(){return _(this,b).value?fe(_(this,b).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),G.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",_(this,W))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return w`<slot ${he(_(this,b))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};b=new WeakMap;W=new WeakMap;g.styles=Ee;$([h({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],g.prototype,"multiple",2);$([h()],g.prototype,"compareWith",2);$([E("multiple")],g.prototype,"_rerenderOptions",1);g=$([H("gds-listbox")],g);const ke=X`
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
      --gap: var(--_gap);
      border-radius: var(--gds-space-2xs);
      padding-inline: calc(var(--pad) / 2);
      gap: calc(var(--gap) / 2);
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
      font-weight: var(--gds-text-weight-regular);
      flex: 1;
      box-sizing: border-box;

      &:focus {
        border-color: var(--gds-sys-color-base800);
      }

      &::placeholder {
        color: currrentColor;
        font-family: inherit;
        font-weight: var(--gds-text-weight-regular);
        color: var(--gds-sys-color-base800);
      }
    }
  }
`;var Se=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,l=(e,t,s,r)=>{for(var i=r>1?void 0:r?Ae(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&Se(t,s,i),i},I=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},p=(e,t,s)=>(I(e,t,"read from private field"),s?s.call(e):t.get(e)),d=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},Oe=(e,t,s,r)=>(I(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),S=(e,t,s)=>(I(e,t,"access private method"),s),f,M,T,D,P,B,j,F,ee,z,te,v,x;let a=class extends ge{constructor(){super(),d(this,B),d(this,F),d(this,z),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,d(this,f,void 0),d(this,M,e=>{const t=this._elSearchInput,s=Array.from(p(this,f));if(s.forEach(i=>i.hidden=!1),!t.value)return;s.filter(i=>!this.searchFilter(t.value,i)).forEach(i=>i.hidden=!0)}),d(this,T,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),d(this,D,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),d(this,P,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),d(this,v,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),d(this,x,e=>{var t;e.key==="Tab"&&!this.searchable&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())}),ne(this),be(this),Oe(this,f,this.getElementsByTagName(ie("gds-option")))}get type(){return"gds-dropdown"}get options(){return Array.from(p(this,f)).filter(e=>!e.hasAttribute("isplaceholder"))}get placeholder(){return Array.from(p(this,f)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=L(le`${this.value.length} selected`):e=this.value.reduce((r,i)=>{var o;return r+((o=this.options.find(n=>n.value===i))==null?void 0:o.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(r=>r.selected))==null?void 0:t.innerHTML,e||((s=this.placeholder)==null?void 0:s.innerHTML)||""}connectedCallback(){super.connectedCallback(),G.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return w`
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
              aria-label="${L("Filter available options")}"
              placeholder="${L("Search")}"
              @keydown=${p(this,T)}
              @keyup=${p(this,M)}
            />`)}

        <gds-listbox
          id="listbox"
          .multiple="${oe(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${S(this,B,j)}"
          @gds-focus="${p(this,P)}"
          @keydown=${p(this,D)}
        >
          <slot gds-allow="gds-option gds-menu-heading"></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"
        ><slot name="message">${this.validationMessage}</slot></span
      >
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){const e=this.open;Array.from(p(this,f)).forEach(t=>t.hidden=!e),e?S(this,F,ee).call(this):(S(this,z,te).call(this),this._elSearchInput&&(this._elSearchInput.value="")),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};f=new WeakMap;M=new WeakMap;T=new WeakMap;D=new WeakMap;P=new WeakMap;B=new WeakSet;j=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};F=new WeakSet;ee=function(){this.addEventListener("blur",p(this,v)),this.addEventListener("gds-blur",p(this,v)),this.addEventListener("keydown",p(this,x))};z=new WeakSet;te=function(){this.removeEventListener("blur",p(this,v)),this.removeEventListener("gds-blur",p(this,v)),this.removeEventListener("keydown",p(this,x))};v=new WeakMap;x=new WeakMap;a.styles=[Z,ke];a.shadowRootOptions={mode:"open",delegatesFocus:!0};l([h()],a.prototype,"label",2);l([h({type:Boolean,reflect:!0})],a.prototype,"open",2);l([h({type:Boolean,reflect:!0})],a.prototype,"searchable",2);l([h({type:Boolean,reflect:!0})],a.prototype,"multiple",2);l([h()],a.prototype,"compareWith",2);l([h()],a.prototype,"searchFilter",2);l([h({type:Boolean,attribute:"sync-popover-width"})],a.prototype,"syncPopoverWidth",2);l([h({type:Number,attribute:"max-height"})],a.prototype,"maxHeight",2);l([h()],a.prototype,"size",2);l([h({type:Boolean,attribute:"hide-label"})],a.prototype,"hideLabel",2);l([h()],a.prototype,"disableMobileStyles",2);l([J("#trigger")],a.prototype,"_elTriggerBtn",2);l([re("#listbox")],a.prototype,"_elListbox",2);l([J("#searchinput")],a.prototype,"_elSearchInput",2);l([ye({attributes:!0,childList:!0,subtree:!0,characterData:!0})],a.prototype,"_handleLightDOMChange",1);l([E("value")],a.prototype,"_handleValueChange",1);l([E("open")],a.prototype,"_onOpenChange",1);a=l([H("gds-dropdown")],a);
