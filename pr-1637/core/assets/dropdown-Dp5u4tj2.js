import{n as h,g as H,h as g,G as q}from"./gds-element-RTlSuh_R.js";import{a as N}from"./query-p8xgzTDt.js";import{r as re}from"./query-async-MEroNOeJ.js";import{a as ae}from"./icon-jzQ8K1tO.js";import{n as M}from"./when-BxLAFfhK.js";import{t as oe}from"./if-defined-OiR-h1RO.js";import{R as Y}from"./class-map-BBGuaYF3.js";import{m as k,s as ne}from"./runtime-CMQcyTl6.js";import{w as E}from"./watch-tFciLXSI.js";import"./chevron-bottom-vJKcTK_L.js";import"./checkmark-Dmy_7y5A.js";import{K as le,i as he}from"./ref-Bq52Xjdl.js";import{T as B}from"./transitional-styles-9whFD-yV.js";import{s as de,F as ce,L as pe,u as ue}from"./menu-heading-CrrC9x42.js";import{t as J}from"./tokens.style-Dwr4YKnv.js";import{i as Q}from"./lit-element-BoQqPHl6.js";import"./popover-acoF-ckh.js";import"./backdrop-CljoM9rw.js";import{a as fe}from"./button-3kPB1G4k.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ge{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(I,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(I,this.__litLocalizeEventHandler)}}const ve=e=>e.addController(new ge(e)),be=ve;function me(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,i)=>{let r;const a=t.connectedCallback,l=t.disconnectedCallback;t.connectedCallback=function(){a==null||a.call(this);const ie=(Se,Ae)=>{var V;(V=i.value)==null||V.call(this)};r=new MutationObserver(ie),r.observe(this,e)},t.disconnectedCallback=function(){l==null||l.call(this),r.disconnect()}}}var ye=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,X=e=>{throw TypeError(e)},m=(e,t,s,i)=>{for(var r=i>1?void 0:i?_e(t,s):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(r=(i?l(t,s,r):l(r))||r);return i&&r&&ye(t,s,r),r},F=(e,t,s)=>t.has(e)||X("Cannot "+s),we=(e,t,s)=>(F(e,t,"read from private field"),s?s.call(e):t.get(e)),K=(e,t,s)=>t.has(e)?X("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),w=(e,t,s,i)=>(F(e,t,"write to private field"),t.set(e,s),s),R=(e,t,s)=>(F(e,t,"access private method"),s),f,C,S;let u=class extends ce(q){constructor(){super(),K(this,C),K(this,f,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",R(this,C,S)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),R(this,C,S).call(this,e))})}get hidden(){return we(this,f)}set hidden(e){this.isPlaceholder||(w(this,f,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(w(this,f,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>B.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(w(this,f,!0),this.setAttribute("aria-hidden","true")):(w(this,f,!1),this.setAttribute("aria-hidden","false"))}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple,t=g`
      <span class="checkbox ${Y({checked:this.selected})}">
        ${this.selected?g`<gds-icon-checkmark stroke="4"></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),g`<div>${M(e,()=>t)} <slot></slot></div>`}};f=new WeakMap;C=new WeakSet;S=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};u.styles=[J,de];m([h()],u.prototype,"value",2);m([h({attribute:"aria-hidden",reflect:!0})],u.prototype,"hidden",1);m([h({attribute:"aria-selected",reflect:!0})],u.prototype,"selected",2);m([h({type:Boolean,reflect:!0})],u.prototype,"isPlaceholder",2);m([E("isplaceholder")],u.prototype,"_handlePlaceholderStatusChange",1);u=m([H("gds-option")],u);const xe=Q`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var Ce=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,Z=e=>{throw TypeError(e)},$=(e,t,s,i)=>{for(var r=i>1?void 0:i?Ee(t,s):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(r=(i?l(t,s,r):l(r))||r);return i&&r&&Ce(t,s,r),r},$e=(e,t,s)=>t.has(e)||Z("Cannot "+s),x=(e,t,s)=>($e(e,t,"read from private field"),s?s.call(e):t.get(e)),U=(e,t,s)=>t.has(e)?Z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),y,A;let v=class extends q{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,U(this,y,he()),U(this,A,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new pe(this)}get navigableItems(){return this.visibleOptionElements}get options(){return x(this,y).value?ue(x(this,y).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),B.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",x(this,A))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return g`<slot ${le(x(this,y))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};y=new WeakMap;A=new WeakMap;v.styles=xe;$([h({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);$([h()],v.prototype,"compareWith",2);$([E("multiple")],v.prototype,"_rerenderOptions",1);v=$([H("gds-listbox")],v);const Le=Q`
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
`;var ke=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,j=e=>{throw TypeError(e)},n=(e,t,s,i)=>{for(var r=i>1?void 0:i?Oe(t,s):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(r=(i?l(t,s,r):l(r))||r);return i&&r&&ke(t,s,r),r},G=(e,t,s)=>t.has(e)||j("Cannot "+s),d=(e,t,s)=>(G(e,t,"read from private field"),t.get(e)),c=(e,t,s)=>t.has(e)?j("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Me=(e,t,s,i)=>(G(e,t,"write to private field"),t.set(e,s),s),O=(e,t,s)=>(G(e,t,"access private method"),s),p,W,T,D,P,z,_,ee,te,se,b,L;let o=class extends fe{constructor(){super(),c(this,_),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,c(this,p),c(this,W,e=>{const t=e.getBoundingClientRect(),i=window.innerHeight-t.bottom,r=t.top;let a=Math.min(r,this.maxHeight);return i>r&&(a=Math.min(i,this.maxHeight)),`${a-16}px`}),c(this,T,e=>{if(!e.currentTarget)return;const t=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!t.value)return;this.options.filter(i=>!this.searchFilter(t.value,i)).forEach(i=>i.hidden=!0)}),c(this,D,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),c(this,P,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),c(this,z,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),c(this,b,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),c(this,L,e=>{var t;e.key==="Tab"&&!this.searchable&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())}),be(this)}get type(){return"gds-dropdown"}get options(){return d(this,p)?Array.from(d(this,p)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(d(this,p))return Array.from(d(this,p)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=k(ne`${this.value.length} selected`):e=this.value.reduce((i,r)=>{var a;return i+((a=this.options.find(l=>l.value===r))==null?void 0:a.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(i=>i.selected))==null?void 0:t.innerHTML,e||((s=this.placeholder)==null?void 0:s.innerHTML)||""}connectedCallback(){super.connectedCallback(),B.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return g`
      ${M(this.label&&!this.hideLabel,()=>g`<label for="trigger">${this.label}</label>`)}

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
            <span>${ae(this.displayValue)}</span>
          </slot>
          <div class="icon">
            <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
          </div>
        </button>
        ${M(this.searchable,()=>g`<input
              id="searchinput"
              type="text"
              aria-label="${k("Filter available options")}"
              placeholder="${k("Search")}"
              @keydown=${d(this,D)}
              @input=${d(this,T)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${oe(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${O(this,_,ee)}"
          @gds-focus="${d(this,z)}"
          @keydown=${d(this,P)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"
        ><slot name="message">${this.validationMessage}</slot></span
      >
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),Me(this,p,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){var s;const e=this.open;(s=d(this,p))==null||s.forEach(i=>i.hidden=!e),e?O(this,_,te).call(this):(O(this,_,se).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(i=>i.selected);this.updateComplete.then(()=>t==null?void 0:t.scrollIntoView()),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};p=new WeakMap;W=new WeakMap;T=new WeakMap;D=new WeakMap;P=new WeakMap;z=new WeakMap;_=new WeakSet;ee=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};te=function(){this.addEventListener("blur",d(this,b)),this.addEventListener("gds-blur",d(this,b)),this.addEventListener("keydown",d(this,L))};se=function(){this.removeEventListener("blur",d(this,b)),this.removeEventListener("gds-blur",d(this,b)),this.removeEventListener("keydown",d(this,L))};b=new WeakMap;L=new WeakMap;o.styles=[J,Le];o.shadowRootOptions={mode:"open",delegatesFocus:!0};n([h()],o.prototype,"label",2);n([h({type:Boolean,reflect:!0})],o.prototype,"open",2);n([h({type:Boolean,reflect:!0})],o.prototype,"searchable",2);n([h({type:Boolean,reflect:!0})],o.prototype,"multiple",2);n([h()],o.prototype,"compareWith",2);n([h()],o.prototype,"searchFilter",2);n([h({type:Boolean,attribute:"sync-popover-width"})],o.prototype,"syncPopoverWidth",2);n([h({type:Number,attribute:"max-height"})],o.prototype,"maxHeight",2);n([h()],o.prototype,"size",2);n([h({type:Boolean,attribute:"hide-label"})],o.prototype,"hideLabel",2);n([h()],o.prototype,"disableMobileStyles",2);n([N("#trigger")],o.prototype,"_elTriggerBtn",2);n([re("#listbox")],o.prototype,"_elListbox",2);n([N("#searchinput")],o.prototype,"_elSearchInput",2);n([me({attributes:!0,childList:!0,subtree:!0,characterData:!0})],o.prototype,"_handleLightDOMChange",1);n([E("value")],o.prototype,"_handleValueChange",1);n([E("open")],o.prototype,"_onOpenChange",1);o=n([H("gds-dropdown")],o);
