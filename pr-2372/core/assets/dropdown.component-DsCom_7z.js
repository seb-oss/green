import{m as $,s as pe,l as de}from"./runtime-CNluP0A8.js";import{n}from"./Reflect-DJ7r0WLU.js";import{a as Q}from"./query-p8xgzTDt.js";import{r as ce}from"./query-async-MEroNOeJ.js";import{o as ue}from"./if-defined-BAXgs-ZI.js";import{o as ge}from"./unsafe-html-CYO4avEf.js";import{n as _}from"./when-BR7zwNJC.js";import{o as fe,f as ve}from"./floating-ui.dom-BmFOYU71.js";import{f as me,G as be}from"./form-control-host.style-ClrCrq8A.js";import{G as ye,a as _e}from"./form-control-header.component-BPTUDchH.js";import{n as xe,e as we}from"./ref-R0wBYijq.js";import{h as c,g as q,G as X}from"./gds-element-DJNCW3iR.js";import{a as $e,T as Z}from"./transitional-styles-DRTvhbpp.js";import{s as Ce,F as Ee,L as ke,u as Me}from"./unwrap-slots-dIUgOhQO.js";import{w as W}from"./watch-tFciLXSI.js";import{i as j}from"./lit-element-Bx14lxc-.js";import{I as ee}from"./checkmark.component-DoDUErgW.js";import{c as Se}from"./rbcb-toggle.template-DKcNVEZ_.js";import{t as te}from"./tokens.style-iX6aIK9m.js";import{o as Te}from"./observe-light-dom-CmJPHUQ4.js";import{a as We}from"./button.component-CLPWbXlB.js";import{I as Le}from"./chevron-bottom.component-Dgm8zoKz.js";import{I as Oe}from"./cross-large.component-D-03cj5-.js";import{G as se}from"./popover.component-BTUjX2CI.js";const Ae=j`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
      overscroll-behavior: contain;
    }
  }
`;var Pe=Object.defineProperty,De=Object.getOwnPropertyDescriptor,ie=e=>{throw TypeError(e)},y=(e,t,s,a)=>{for(var i=a>1?void 0:a?De(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(a?p(t,s,i):p(i))||i);return a&&i&&Pe(t,s,i),i},R=(e,t,s)=>t.has(e)||ie("Cannot "+s),K=(e,t,s)=>(R(e,t,"read from private field"),s?s.call(e):t.get(e)),N=(e,t,s)=>t.has(e)?ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Be=(e,t,s,a)=>(R(e,t,"write to private field"),t.set(e,s),s),Y=(e,t,s)=>(R(e,t,"access private method"),s),x,k,A;let u=class extends Ee(X){constructor(){super(),N(this,k),N(this,x,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",Y(this,k,A)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),Y(this,k,A).call(this,e))})}get hidden(){return K(this,x)}set hidden(e){const t=e.toString();Be(this,x,t==="true"),K(this,x)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),Z.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){var t;const e=(t=this.parentElement)==null?void 0:t.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),c`<div class="item">
      ${_(e,()=>Se({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};x=new WeakMap;k=new WeakSet;A=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};u.styles=[te,$e,Ce];y([n()],u.prototype,"value",2);y([n({type:Boolean,reflect:!0})],u.prototype,"hidden",1);y([n({attribute:"aria-selected",reflect:!0})],u.prototype,"selected",2);y([n({type:Boolean,reflect:!0})],u.prototype,"isPlaceholder",2);y([W("isPlaceholder")],u.prototype,"_handlePlaceholderStatusChange",1);u=y([q("gds-option",{dependsOn:[ee]})],u);var Fe=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,oe=e=>{throw TypeError(e)},L=(e,t,s,a)=>{for(var i=a>1?void 0:a?Ge(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(a?p(t,s,i):p(i))||i);return a&&i&&Fe(t,s,i),i},Ie=(e,t,s)=>t.has(e)||oe("Cannot "+s),C=(e,t,s)=>(Ie(e,t,"read from private field"),s?s.call(e):t.get(e)),J=(e,t,s)=>t.has(e)?oe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),w,P;let v=class extends X{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,J(this,w,we()),J(this,P,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})}),new ke(this)}get navigableItems(){return this.visibleOptionElements}get options(){return C(this,w).value?Me(C(this,w).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),Z.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",C(this,P))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return c`<slot ${xe(C(this,w))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};w=new WeakMap;P=new WeakMap;v.styles=Ae;L([n({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);L([n()],v.prototype,"compareWith",2);L([W("multiple")],v.prototype,"_rerenderOptions",1);v=L([q("gds-listbox",{dependsOn:[u]})],v);const He=j`
  @layer base, reset;

  @layer base {
    :host {
      isolation: auto;
      contain: none;
    }

    #field::part(_base) {
      cursor: pointer;
    }

    button#trigger {
      flex: 0 1 100%;
      cursor: pointer;

      /* This prevents overflow when the text is too long */
      display: grid;
    }

    #trigger:focus {
      outline: none;
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    input[type='text'] {
      border-radius: var(--gds-sys-space-xs);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      font-size: inherit;
      line-height: inherit;
      border: none;
      outline: none;
      color: var(--gds-sys-color-content-disabled-01);
      border-color: var(--gds-sys-color-border-interactive);
      border-width: 0 0 var(--gds-sys-space-4xs) 0;
      border-style: solid;
      width: 100%;
      padding: var(--gds-sys-space-m);
      font-weight: var(--gds-sys-text-weight-regular);
      flex: 1;
      box-sizing: border-box;
      font-family: inherit;

      &:focus {
        border-color: var(--gds-sys-color-border-interactive);
        color: var(--gds-sys-color-content-neutral-01);
      }

      &::placeholder {
        font-family: inherit;
        font-weight: var(--gds-sys-text-weight-book);
        color: var(--gds-sys-color-content-disabled-01);
      }
    }

    [aria-expanded='true'] [slot='trail'] {
      transform: scaleY(-1);
    }
  }
`;var ze=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,re=e=>{throw TypeError(e)},l=(e,t,s,a)=>{for(var i=a>1?void 0:a?Ve(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(a?p(t,s,i):p(i))||i);return a&&i&&ze(t,s,i),i},U=(e,t,s)=>t.has(e)||re("Cannot "+s),o=(e,t,s)=>(U(e,t,"read from private field"),t.get(e)),d=(e,t,s)=>t.has(e)?re("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),qe=(e,t,s,a)=>(U(e,t,"write to private field"),t.set(e,s),s),E=(e,t,s)=>(U(e,t,"access private method"),s),f,m,ae,D,B,F,g,G,I,M,H,z,V,le,S,T,ne,he,b,O;let r=class extends We{constructor(){super(...arguments),d(this,m),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,d(this,f),d(this,D,()=>{var e;return c`
      <input
        id="trigger"
        role="combobox"
        class="native-control"
        aria-expanded="${this.open}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        placeholder="${(e=this.placeholder)==null?void 0:e.innerHTML}"
        name="trigger"
        aria-label="${this.label} ${this.displayValue}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
        .value=${this.value}
        @click=${t=>{t.stopImmediatePropagation()}}
        @input=${t=>{this.value=t.target.value,o(this,S).call(this),o(this,M).call(this,t),o(this,g).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${t=>{t.key==="ArrowDown"&&(t.preventDefault(),o(this,g).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(s=>s.focus())),t.key==="Enter"&&o(this,T).call(this)}}
      />
    `}),d(this,B,()=>c`
      <button
        id="trigger"
        role="combobox"
        class="native-control"
        aria-expanded="${this.open}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        name="trigger"
        aria-label="${this.label} ${this.displayValue}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
      >
        <slot name="trigger">
          <span>${ge(this.displayValue)}</span>
        </slot>
      </button>
    `),d(this,F,e=>{if(this.combobox){const s=e.getBoundingClientRect(),i=window.innerHeight-s.bottom,h=s.top;let p=Math.min(h,this.maxHeight);return i>h&&(p=Math.min(i,this.maxHeight)),`${p-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),d(this,g,(e,t)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1})),d(this,G,e=>{o(this,g).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),d(this,I,e=>{e.preventDefault(),e.stopPropagation(),this.value=void 0}),d(this,M,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const s=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!s.value)return;this.options.filter(i=>!this.searchFilter(s.value,i)).forEach(i=>i.hidden=!0)}),d(this,H,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),d(this,z,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),d(this,V,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),d(this,S,()=>{this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))}),d(this,T,()=>{this.updateComplete.then(()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),d(this,b,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&o(this,g).call(this,!1,"close")&&(this.open=!1)}),d(this,O,e=>{var t;e.key==="Tab"&&!this.searchable&&o(this,g).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())})}get type(){return"gds-dropdown"}get options(){return o(this,f)?Array.from(o(this,f)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(o(this,f))return Array.from(o(this,f)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=$(pe`${this.value.length} selected`):e=this.value.reduce((a,i)=>{var h;return a+((h=this.options.find(p=>p.value===i))==null?void 0:h.innerText)+", "},"").slice(0,-2):e=(t=this.options.find(a=>a.selected))==null?void 0:t.innerText,e||((s=this.placeholder)==null?void 0:s.innerText)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}render(){return c`
      ${_(!this.plain&&!this.hideLabel,()=>c`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${_(this.supportingText.length>0,()=>c`<span slot="supporting-text" id="supporting-text">
                  ${this.supportingText}
                </span>`)}
            <slot
              id="extended-supporting-text"
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
            <!-- @deprecated: use 'supporting-text' slot instead. Remove in 2.0 release. -->
            <slot id="sub-label" name="sub-label" slot="supporting-text"></slot>
          </gds-form-control-header>
        `)}
      <gds-popover
        .autofocus=${!this.combobox}
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${o(this,F)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[fe(8),ve()]:se.DefaultMiddleware}
        @gds-ui-state=${o(this,G)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${this.clearable&&this.value&&!this.disabled?c`<gds-button
                rank="tertiary"
                size=${this.size==="small"?"xs":"small"}
                label="${$("Clear selection")}"
                @click=${o(this,I)}
                slot="trail"
              >
                <gds-icon-cross-large></gds-icon-cross-large>
              </gds-button>`:""}
          ${this.combobox&&!this.multiple?o(this,D).call(this):o(this,B).call(this)}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${_(this.searchable,()=>c`<input
              id="searchinput"
              type="text"
              aria-label="${$("Filter available options")}"
              placeholder="${$("Search")}"
              @keydown=${o(this,H)}
              @input=${o(this,M)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${ue(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${E(this,m,le)}"
          @gds-focus="${o(this,V)}"
          @keydown=${o(this,z)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${_(E(this,m,ae).call(this),()=>c`
          <gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            </slot>
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),qe(this,f,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.combobox&&!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?E(this,m,ne).call(this):(E(this,m,he).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t==null||t.scrollIntoView({block:"center"})})}};f=new WeakMap;m=new WeakSet;ae=function(){return!this.plain};D=new WeakMap;B=new WeakMap;F=new WeakMap;g=new WeakMap;G=new WeakMap;I=new WeakMap;M=new WeakMap;H=new WeakMap;z=new WeakMap;V=new WeakMap;le=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,o(this,g).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0))),o(this,S).call(this),o(this,T).call(this)})};S=new WeakMap;T=new WeakMap;ne=function(){this.addEventListener("blur",o(this,b)),this.addEventListener("gds-blur",o(this,b)),this.addEventListener("keydown",o(this,O))};he=function(){this.removeEventListener("blur",o(this,b)),this.removeEventListener("gds-blur",o(this,b)),this.removeEventListener("keydown",o(this,O))};b=new WeakMap;O=new WeakMap;r.styles=[te,me,He];l([n({attribute:"supporting-text"})],r.prototype,"supportingText",2);l([n({type:Boolean,reflect:!0})],r.prototype,"open",2);l([n({type:Boolean,reflect:!0})],r.prototype,"searchable",2);l([n({type:Boolean,reflect:!0})],r.prototype,"multiple",2);l([n({type:Boolean,reflect:!0})],r.prototype,"clearable",2);l([n({type:Boolean,reflect:!0})],r.prototype,"combobox",2);l([n()],r.prototype,"compareWith",2);l([n()],r.prototype,"searchFilter",2);l([n({type:Boolean,attribute:"sync-popover-width"})],r.prototype,"syncPopoverWidth",2);l([n({type:Number,attribute:"max-height"})],r.prototype,"maxHeight",2);l([n()],r.prototype,"size",2);l([n({type:Boolean,attribute:"hide-label"})],r.prototype,"hideLabel",2);l([n({type:Boolean})],r.prototype,"plain",2);l([n({type:Boolean})],r.prototype,"disableMobileStyles",2);l([n({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);l([Q("#trigger")],r.prototype,"_elTriggerBtn",2);l([ce("#listbox")],r.prototype,"_elListbox",2);l([Q("#searchinput")],r.prototype,"_elSearchInput",2);l([Te({attributes:!0,childList:!0,subtree:!0,characterData:!0})],r.prototype,"_handleLightDOMChange",1);l([W("value")],r.prototype,"_handleValueChange",1);l([W("open")],r.prototype,"_handleOpenChange",1);r=l([q("gds-dropdown",{dependsOn:[ye,_e,be,v,se,ee,Le,Oe]}),de()],r);export{r as G,u as a};
