import{n as h,g as H,G as Y,h as w,a as ie}from"./gds-element-7aeb5dea.js";import{a as J}from"./query-b9d3c2af.js";import{r as re}from"./query-async-1ff18261.js";import{o as ae}from"./icon-b03b5b36.js";import{n as O}from"./when-cf7256a5.js";import{o as oe}from"./if-defined-86aa62fe.js";import{e as Q}from"./class-map-4d7ebbd7.js";import{m as L,s as le}from"./lit-localize-87611c26.js";import{c as ne}from"./constrain-slots-08d8606c.js";import{w as C}from"./watch-c4961afe.js";import"./chevron-bottom-9285428f.js";import"./checkmark-6542ac50.js";import{n as he,e as de}from"./ref-1b5a919a.js";import{T as G}from"./transitional-styles-05c0db21.js";import{x as k,i as X}from"./lit-element-da1d3957.js";import{s as ce,F as pe,L as ue,u as fe}from"./menu-heading-d741b6bd.js";import{t as Z}from"./tokens.style-8a0fa4c3.js";import"./popover-9aae7909.js";import"./backdrop-f8e85519.js";import"./button-948d0024.js";import{G as ge}from"./form-control-86c8becc.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ve{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(U,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(U,this.__litLocalizeEventHandler)}}const be=e=>e.addController(new ve(e)),me=be;function ye(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,r)=>{let i;const o=t.connectedCallback,n=t.disconnectedCallback;t.connectedCallback=function(){o==null||o.call(this);const se=(We,Me)=>{var N;(N=r.value)==null||N.call(this)};i=new MutationObserver(se),i.observe(this,e)},t.disconnectedCallback=function(){n==null||n.call(this),i.disconnect()}}}var _e=Object.defineProperty,we=Object.getOwnPropertyDescriptor,b=(e,t,s,r)=>{for(var i=r>1?void 0:r?we(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&_e(t,s,i),i},V=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},xe=(e,t,s)=>(V(e,t,"read from private field"),s?s.call(e):t.get(e)),K=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},y=(e,t,s,r)=>(V(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),q=(e,t,s)=>(V(e,t,"access private method"),s),u,x,A;let p=class extends pe(Y){constructor(){super(),K(this,x),K(this,u,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",q(this,x,A)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),q(this,x,A).call(this,e))})}get hidden(){return xe(this,u)}set hidden(e){this.isPlaceholder||(y(this,u,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(y(this,u,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>G.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(y(this,u,!0),this.setAttribute("aria-hidden","true")):(y(this,u,!1),this.setAttribute("aria-hidden","false"))}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple,t=k`
      <span class="checkbox ${Q({checked:this.selected})}">
        ${this.selected?k`<gds-icon-checkmark stroke></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),k`<div>${O(e,()=>t)} <slot></slot></div>`}};u=new WeakMap;x=new WeakSet;A=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};p.styles=[Z,ce];b([h()],p.prototype,"value",2);b([h({attribute:"aria-hidden",reflect:!0})],p.prototype,"hidden",1);b([h({attribute:"aria-selected",reflect:!0})],p.prototype,"selected",2);b([h({type:Boolean,reflect:!0})],p.prototype,"isPlaceholder",2);b([C("isplaceholder")],p.prototype,"_handlePlaceholderStatusChange",1);p=b([H("gds-option")],p);const Ce=X`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
    }
  }
`;var Ee=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,E=(e,t,s,r)=>{for(var i=r>1?void 0:r?$e(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&Ee(t,s,i),i},Le=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},_=(e,t,s)=>(Le(e,t,"read from private field"),s?s.call(e):t.get(e)),R=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},m,W;let g=class extends Y{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,R(this,m,de()),R(this,W,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new ue(this)}get navigableItems(){return this.visibleOptionElements}get options(){return _(this,m).value?fe(_(this,m).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),G.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",_(this,W))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return w`<slot ${he(_(this,m))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};m=new WeakMap;W=new WeakMap;g.styles=Ce;E([h({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],g.prototype,"multiple",2);E([h()],g.prototype,"compareWith",2);E([C("multiple")],g.prototype,"_rerenderOptions",1);g=E([H("gds-listbox")],g);const ke=X`
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
`;var Se=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,l=(e,t,s,r)=>{for(var i=r>1?void 0:r?Oe(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&Se(t,s,i),i},I=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},d=(e,t,s)=>(I(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},Ae=(e,t,s,r)=>(I(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),S=(e,t,s)=>(I(e,t,"access private method"),s),f,M,T,D,P,z,j,B,ee,F,te,v,$;let a=class extends ge{constructor(){super(),c(this,z),c(this,B),c(this,F),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,c(this,f,void 0),c(this,M,e=>{const t=this._elSearchInput,s=Array.from(d(this,f));if(s.forEach(i=>i.hidden=!1),!t.value)return;s.filter(i=>!this.searchFilter(t.value,i)).forEach(i=>i.hidden=!0)}),c(this,T,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),c(this,D,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),c(this,P,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),c(this,v,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),c(this,$,e=>{var t;e.key==="Tab"&&!this.searchable&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())}),ne(this),me(this),Ae(this,f,this.getElementsByTagName(ie("gds-option")))}get type(){return"gds-dropdown"}get options(){return Array.from(d(this,f)).filter(e=>!e.hasAttribute("isplaceholder"))}get placeholder(){return Array.from(d(this,f)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=L(le`${this.value.length} selected`):e=this.value.reduce((r,i)=>{var o;return r+((o=this.options.find(n=>n.value===i))==null?void 0:o.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(r=>r.selected))==null?void 0:t.innerHTML,e||((s=this.placeholder)==null?void 0:s.innerHTML)||""}connectedCallback(){super.connectedCallback(),G.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return w`
      ${O(this.label&&!this.hideLabel,()=>w`<label for="trigger">${this.label}</label>`)}

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
          class=${Q({small:this.size==="small"})}
        >
          <slot name="trigger">
            <span>${ae(this.displayValue)}</span>
          </slot>
          <div class="icon">
            <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
          </div>
        </button>
        ${O(this.searchable,()=>w`<input
              id="searchinput"
              type="text"
              aria-label="${L("Filter available options")}"
              placeholder="${L("Search")}"
              @keydown=${d(this,T)}
              @keyup=${d(this,M)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${oe(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${S(this,z,j)}"
          @gds-focus="${d(this,P)}"
          @keydown=${d(this,D)}
        >
          <slot gds-allow="gds-option gds-menu-heading"></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"
        ><slot name="message">${this.validationMessage}</slot></span
      >
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){const e=this.open;Array.from(d(this,f)).forEach(t=>t.hidden=!e),e?S(this,B,ee).call(this):(S(this,F,te).call(this),this._elSearchInput&&(this._elSearchInput.value="")),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};f=new WeakMap;M=new WeakMap;T=new WeakMap;D=new WeakMap;P=new WeakMap;z=new WeakSet;j=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};B=new WeakSet;ee=function(){this.addEventListener("blur",d(this,v)),this.addEventListener("gds-blur",d(this,v)),this.addEventListener("keydown",d(this,$))};F=new WeakSet;te=function(){this.removeEventListener("blur",d(this,v)),this.removeEventListener("gds-blur",d(this,v)),this.removeEventListener("keydown",d(this,$))};v=new WeakMap;$=new WeakMap;a.styles=[Z,ke];a.shadowRootOptions={mode:"open",delegatesFocus:!0};l([h()],a.prototype,"label",2);l([h({type:Boolean,reflect:!0})],a.prototype,"open",2);l([h({type:Boolean,reflect:!0})],a.prototype,"searchable",2);l([h({type:Boolean,reflect:!0})],a.prototype,"multiple",2);l([h()],a.prototype,"compareWith",2);l([h()],a.prototype,"searchFilter",2);l([h({type:Boolean,attribute:"sync-popover-width"})],a.prototype,"syncPopoverWidth",2);l([h({type:Number,attribute:"max-height"})],a.prototype,"maxHeight",2);l([h()],a.prototype,"size",2);l([h({type:Boolean,attribute:"hide-label"})],a.prototype,"hideLabel",2);l([h()],a.prototype,"disableMobileStyles",2);l([J("#trigger")],a.prototype,"_elTriggerBtn",2);l([re("#listbox")],a.prototype,"_elListbox",2);l([J("#searchinput")],a.prototype,"_elSearchInput",2);l([ye({attributes:!0,childList:!0,subtree:!0,characterData:!0})],a.prototype,"_handleLightDOMChange",1);l([C("value")],a.prototype,"_handleValueChange",1);l([C("open")],a.prototype,"_onOpenChange",1);a=l([H("gds-dropdown")],a);
