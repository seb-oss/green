import{n as l,g as F,h as g,G as q,a as te}from"./gds-element-86064462.js";import{a as Y}from"./query-b9d3c2af.js";import{r as se}from"./query-async-1ff18261.js";import{a as ie}from"./icon-a640baec.js";import{n as S}from"./when-748fcf30.js";import{t as re}from"./if-defined-5f576255.js";import{R as J}from"./class-map-f04c1558.js";import{m as $,s as ae}from"./runtime-c06dc943.js";import{c as oe}from"./constrain-slots-08d8606c.js";import{w as C}from"./watch-c4961afe.js";import{o as ne}from"./observe-light-dom-ff3ee03f.js";import"./chevron-bottom-2d87aad2.js";import"./checkmark-da617071.js";import{K as le,i as he}from"./ref-f16d4147.js";import{T as G}from"./transitional-styles-8ea9588a.js";import{s as pe,F as de,L as ce,u as ue}from"./menu-heading-59143ba4.js";import{t as Q}from"./tokens.style-01187a75.js";import{i as X}from"./lit-element-1d72f0ce.js";import"./popover-dd11fc1b.js";import"./backdrop-0315f321.js";import{a as fe}from"./button-7f889fcf.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ge{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(K,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(K,this.__litLocalizeEventHandler)}}const ve=e=>e.addController(new ge(e)),me=ve;var be=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,b=(e,t,s,r)=>{for(var i=r>1?void 0:r?ye(t,s):t,n=e.length-1,p;n>=0;n--)(p=e[n])&&(i=(r?p(t,s,i):p(i))||i);return r&&i&&be(t,s,i),i},V=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},_e=(e,t,s)=>(V(e,t,"read from private field"),s?s.call(e):t.get(e)),N=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},_=(e,t,s,r)=>(V(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),R=(e,t,s)=>(V(e,t,"access private method"),s),u,x,A;let c=class extends de(q){constructor(){super(),N(this,x),N(this,u,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",R(this,x,A)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),R(this,x,A).call(this,e))})}get hidden(){return _e(this,u)}set hidden(e){this.isPlaceholder||(_(this,u,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(_(this,u,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>G.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(_(this,u,!0),this.setAttribute("aria-hidden","true")):(_(this,u,!1),this.setAttribute("aria-hidden","false"))}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple,t=g`
      <span class="checkbox ${J({checked:this.selected})}">
        ${this.selected?g`<gds-icon-checkmark stroke="4"></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),g`<div>${S(e,()=>t)} <slot></slot></div>`}};u=new WeakMap;x=new WeakSet;A=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};c.styles=[Q,pe];b([l()],c.prototype,"value",2);b([l({attribute:"aria-hidden",reflect:!0})],c.prototype,"hidden",1);b([l({attribute:"aria-selected",reflect:!0})],c.prototype,"selected",2);b([l({type:Boolean,reflect:!0})],c.prototype,"isPlaceholder",2);b([C("isplaceholder")],c.prototype,"_handlePlaceholderStatusChange",1);c=b([F("gds-option")],c);const we=X`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var xe=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,E=(e,t,s,r)=>{for(var i=r>1?void 0:r?Ce(t,s):t,n=e.length-1,p;n>=0;n--)(p=e[n])&&(i=(r?p(t,s,i):p(i))||i);return r&&i&&xe(t,s,i),i},Ee=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},w=(e,t,s)=>(Ee(e,t,"read from private field"),s?s.call(e):t.get(e)),U=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},y,O;let v=class extends q{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,U(this,y,he()),U(this,O,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new ce(this)}get navigableItems(){return this.visibleOptionElements}get options(){return w(this,y).value?ue(w(this,y).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),G.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",w(this,O))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return g`<slot ${le(w(this,y))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};y=new WeakMap;O=new WeakMap;v.styles=we;E([l({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);E([l()],v.prototype,"compareWith",2);E([C("multiple")],v.prototype,"_rerenderOptions",1);v=E([F("gds-listbox")],v);const Le=X`
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
`;var $e=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,o=(e,t,s,r)=>{for(var i=r>1?void 0:r?ke(t,s):t,n=e.length-1,p;n>=0;n--)(p=e[n])&&(i=(r?p(t,s,i):p(i))||i);return r&&i&&$e(t,s,i),i},I=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},h=(e,t,s)=>(I(e,t,"read from private field"),s?s.call(e):t.get(e)),d=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},Se=(e,t,s,r)=>(I(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),k=(e,t,s)=>(I(e,t,"access private method"),s),f,W,M,T,D,P,z,Z,B,j,H,ee,m,L;let a=class extends fe{constructor(){super(),d(this,z),d(this,B),d(this,H),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,d(this,f,void 0),d(this,W,e=>{const t=e.getBoundingClientRect(),r=window.innerHeight-t.bottom,i=t.top;let n=Math.min(i,this.maxHeight);return r>i&&(n=Math.min(r,this.maxHeight)),`${n-16}px`}),d(this,M,e=>{const t=this._elSearchInput,s=Array.from(h(this,f));if(s.forEach(i=>i.hidden=!1),!t.value)return;s.filter(i=>!this.searchFilter(t.value,i)).forEach(i=>i.hidden=!0)}),d(this,T,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),d(this,D,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),d(this,P,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),d(this,m,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),d(this,L,e=>{var t;e.key==="Tab"&&!this.searchable&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())}),oe(this),me(this),Se(this,f,this.getElementsByTagName(te("gds-option")))}get type(){return"gds-dropdown"}get options(){return Array.from(h(this,f)).filter(e=>!e.hasAttribute("isplaceholder"))}get placeholder(){return Array.from(h(this,f)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=$(ae`${this.value.length} selected`):e=this.value.reduce((r,i)=>{var n;return r+((n=this.options.find(p=>p.value===i))==null?void 0:n.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(r=>r.selected))==null?void 0:t.innerHTML,e||((s=this.placeholder)==null?void 0:s.innerHTML)||""}connectedCallback(){super.connectedCallback(),G.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return g`
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
          class=${J({small:this.size==="small"})}
        >
          <slot name="trigger">
            <span>${ie(this.displayValue)}</span>
          </slot>
          <div class="icon">
            <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
          </div>
        </button>
        ${S(this.searchable,()=>g`<input
              id="searchinput"
              type="text"
              aria-label="${$("Filter available options")}"
              placeholder="${$("Search")}"
              @keydown=${h(this,T)}
              @keyup=${h(this,M)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${re(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${k(this,z,Z)}"
          @gds-focus="${h(this,P)}"
          @keydown=${h(this,D)}
        >
          <slot gds-allow="gds-option gds-menu-heading"></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"
        ><slot name="message">${this.validationMessage}</slot></span
      >
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){const e=this.open;Array.from(h(this,f)).forEach(t=>t.hidden=!e),e?k(this,B,j).call(this):(k(this,H,ee).call(this),this._elSearchInput&&(this._elSearchInput.value="")),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};f=new WeakMap;W=new WeakMap;M=new WeakMap;T=new WeakMap;D=new WeakMap;P=new WeakMap;z=new WeakSet;Z=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};B=new WeakSet;j=function(){this.addEventListener("blur",h(this,m)),this.addEventListener("gds-blur",h(this,m)),this.addEventListener("keydown",h(this,L))};H=new WeakSet;ee=function(){this.removeEventListener("blur",h(this,m)),this.removeEventListener("gds-blur",h(this,m)),this.removeEventListener("keydown",h(this,L))};m=new WeakMap;L=new WeakMap;a.styles=[Q,Le];a.shadowRootOptions={mode:"open",delegatesFocus:!0};o([l()],a.prototype,"label",2);o([l({type:Boolean,reflect:!0})],a.prototype,"open",2);o([l({type:Boolean,reflect:!0})],a.prototype,"searchable",2);o([l({type:Boolean,reflect:!0})],a.prototype,"multiple",2);o([l()],a.prototype,"compareWith",2);o([l()],a.prototype,"searchFilter",2);o([l({type:Boolean,attribute:"sync-popover-width"})],a.prototype,"syncPopoverWidth",2);o([l({type:Number,attribute:"max-height"})],a.prototype,"maxHeight",2);o([l()],a.prototype,"size",2);o([l({type:Boolean,attribute:"hide-label"})],a.prototype,"hideLabel",2);o([l()],a.prototype,"disableMobileStyles",2);o([Y("#trigger")],a.prototype,"_elTriggerBtn",2);o([se("#listbox")],a.prototype,"_elListbox",2);o([Y("#searchinput")],a.prototype,"_elSearchInput",2);o([ne({attributes:!0,childList:!0,subtree:!0,characterData:!0})],a.prototype,"_handleLightDOMChange",1);o([C("value")],a.prototype,"_handleValueChange",1);o([C("open")],a.prototype,"_onOpenChange",1);a=o([F("gds-dropdown")],a);
