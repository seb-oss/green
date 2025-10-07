import{m as E,s as pe,l as de}from"./runtime-CNluP0A8.js";import{i as Q,E as ce}from"./lit-element-Bx14lxc-.js";import{n}from"./Reflect-DJ7r0WLU.js";import{a as X}from"./query-p8xgzTDt.js";import{r as ue}from"./query-async-MEroNOeJ.js";import{o as ge}from"./if-defined-BAXgs-ZI.js";import{o as fe}from"./unsafe-html-CYO4avEf.js";import{n as u}from"./when-BR7zwNJC.js";import{o as me,f as ve}from"./floating-ui.dom-BmFOYU71.js";import{f as be,G as ye}from"./form-control-host.style-Dpb-myPT.js";import{G as _e,a as xe}from"./form-control-header.component-BsYCtMDh.js";import{n as we,e as $e}from"./ref-R0wBYijq.js";import{h as c,g as q,G as Z}from"./gds-element-DTROifYq.js";import{a as Ce,T as j}from"./transitional-styles-CxCTYKOe.js";import{s as Ee,F as ke,L as Se,u as Me}from"./unwrap-slots-CufDiWNZ.js";import{w as W}from"./watch-tFciLXSI.js";import{I as ee}from"./checkmark.component-K4lmNIQ0.js";import{c as Te}from"./rbcb-toggle.template-B-MDayTD.js";import{t as te}from"./tokens.style-CyN6927s.js";import{o as We}from"./observe-light-dom-CmJPHUQ4.js";import{a as Oe}from"./button.component-C8uPUP0S.js";import{I as Le}from"./chevron-bottom.component-BFzbbltK.js";import{I as Ae}from"./cross-small.component-C9atjG1I.js";import{G as se}from"./popover.component-DPBrsEed.js";const Pe=Q`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
      overscroll-behavior: contain;
    }
  }
`;var De=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,ie=e=>{throw TypeError(e)},_=(e,t,s,r)=>{for(var i=r>1?void 0:r?Be(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(r?p(t,s,i):p(i))||i);return r&&i&&De(t,s,i),i},R=(e,t,s)=>t.has(e)||ie("Cannot "+s),K=(e,t,s)=>(R(e,t,"read from private field"),s?s.call(e):t.get(e)),N=(e,t,s)=>t.has(e)?ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Fe=(e,t,s,r)=>(R(e,t,"write to private field"),t.set(e,s),s),Y=(e,t,s)=>(R(e,t,"access private method"),s),x,M,A;let g=class extends ke(Z){constructor(){super(),N(this,M),N(this,x,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",Y(this,M,A)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),Y(this,M,A).call(this,e))})}get hidden(){return K(this,x)}set hidden(e){const t=e.toString();Fe(this,x,t==="true"),K(this,x)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),j.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){var t;const e=(t=this.parentElement)==null?void 0:t.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),c`<div class="item">
      ${u(e,()=>Te({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};x=new WeakMap;M=new WeakSet;A=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};g.styles=[te,Ce,Ee];_([n()],g.prototype,"value",2);_([n({type:Boolean,reflect:!0})],g.prototype,"hidden",1);_([n({attribute:"aria-selected",reflect:!0})],g.prototype,"selected",2);_([n({type:Boolean,reflect:!0})],g.prototype,"isPlaceholder",2);_([W("isPlaceholder")],g.prototype,"_handlePlaceholderStatusChange",1);g=_([q("gds-option",{dependsOn:[ee]})],g);var Ge=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,oe=e=>{throw TypeError(e)},O=(e,t,s,r)=>{for(var i=r>1?void 0:r?Ie(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(r?p(t,s,i):p(i))||i);return r&&i&&Ge(t,s,i),i},ze=(e,t,s)=>t.has(e)||oe("Cannot "+s),k=(e,t,s)=>(ze(e,t,"read from private field"),s?s.call(e):t.get(e)),J=(e,t,s)=>t.has(e)?oe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),w,P;let v=class extends Z{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,J(this,w,$e()),J(this,P,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})}),new Se(this)}get navigableItems(){return this.visibleOptionElements}get options(){return k(this,w).value?Me(k(this,w).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),j.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",k(this,P))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return c`<slot ${we(k(this,w))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};w=new WeakMap;P=new WeakMap;v.styles=Pe;O([n({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);O([n()],v.prototype,"compareWith",2);O([W("multiple")],v.prototype,"_rerenderOptions",1);v=O([q("gds-listbox",{dependsOn:[g]})],v);const He=Q`
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
      border-radius: var(--gds-sys-radius-xs);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      font-size: inherit;
      line-height: inherit;
      border: none;
      outline: none;
      color: var(--gds-sys-color-content-disabled-01);
      border-color: var(--gds-sys-color-border-interactive);
      border-width: 0 0 var(--gds-sys-space-5xs) 0;
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
`;var Ve=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,ae=e=>{throw TypeError(e)},l=(e,t,s,r)=>{for(var i=r>1?void 0:r?qe(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(r?p(t,s,i):p(i))||i);return r&&i&&Ve(t,s,i),i},U=(e,t,s)=>t.has(e)||ae("Cannot "+s),o=(e,t,s)=>(U(e,t,"read from private field"),t.get(e)),d=(e,t,s)=>t.has(e)?ae("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Re=(e,t,s,r)=>(U(e,t,"write to private field"),t.set(e,s),s),S=(e,t,s)=>(U(e,t,"access private method"),s),m,b,re,D,B,F,f,G,I,T,z,H,V,le,$,C,ne,he,y,L;let a=class extends Oe{constructor(){super(...arguments),d(this,b),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,d(this,m),d(this,D,()=>{var e;return c`
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
        @input=${t=>{this.value=t.target.value,o(this,$).call(this),o(this,T).call(this,t),o(this,f).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${t=>{t.key==="ArrowDown"&&(t.preventDefault(),o(this,f).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(s=>s.focus())),t.key==="Enter"&&o(this,C).call(this)}}
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
        aria-label="${this.label}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
      >
        <slot name="trigger">
          <span>${fe(this.displayValue)}</span>
        </slot>
      </button>
    `),d(this,F,e=>{if(this.combobox){const s=e.getBoundingClientRect(),i=window.innerHeight-s.bottom,h=s.top;let p=Math.min(h,this.maxHeight);return i>h&&(p=Math.min(i,this.maxHeight)),`${p-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),d(this,f,(e,t)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1})),d(this,G,e=>{o(this,f).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),d(this,I,e=>{e.preventDefault(),e.stopPropagation(),this.value=void 0,this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),o(this,$).call(this),o(this,C).call(this)}),d(this,T,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const s=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!s.value)return;this.options.filter(i=>!this.searchFilter(s.value,i)).forEach(i=>i.hidden=!0)}),d(this,z,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),d(this,H,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),d(this,V,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),d(this,$,()=>{this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))}),d(this,C,()=>{this.updateComplete.then(()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),d(this,y,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&o(this,f).call(this,!1,"close")&&(this.open=!1)}),d(this,L,e=>{var t;e.key==="Tab"&&!this.searchable&&o(this,f).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())})}get type(){return"gds-dropdown"}get options(){return o(this,m)?Array.from(o(this,m)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(o(this,m))return Array.from(o(this,m)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?e=this.value.slice(0,5).reduce((r,i)=>{var h;return r+((h=this.options.find(p=>p.value===i))==null?void 0:h.innerText)+", "},"").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):e=(t=this.options.find(r=>r.selected))==null?void 0:t.innerText,e||((s=this.placeholder)==null?void 0:s.innerText)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}render(){return c`
      ${u(!this.plain&&!this.hideLabel,()=>c`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${u(this.supportingText.length>0,()=>c`<span slot="supporting-text" id="supporting-text">
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
        .floatingUIMiddleware=${this.combobox?[me(8),ve()]:se.DefaultMiddleware}
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
          ${u(this.value&&this.multiple&&this.value.length>0,()=>c`<gds-badge
                rounded
                size=${this.size==="small"?"small":"default"}
                slot="lead"
                aria-label=${E(pe`${this.value.length} options selected`)}
              >
                ${this.value.length}</gds-badge
              >`)}
          ${u(this.clearable&&this.value&&!this.disabled,()=>c`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${this.size==="small"?"xs":"small"}
                label="${E("Clear selection")}"
                @click=${o(this,I)}
                slot="action"
              >
                <gds-icon-cross-small></gds-icon-cross-small>
              </gds-button>`)}
          ${u(this.combobox&&!this.multiple,()=>o(this,D).call(this))}
          ${u(!this.combobox||this.multiple,()=>o(this,B).call(this))}
          <gds-icon-chevron-bottom slot="action"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${u(this.searchable,()=>c`<input
              id="searchinput"
              type="text"
              aria-label="${E("Filter available options")}"
              placeholder="${E("Search")}"
              @keydown=${o(this,z)}
              @input=${o(this,T)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${ge(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${S(this,b,le)}"
          @gds-focus="${o(this,V)}"
          @keydown=${o(this,H)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${u(S(this,b,re).call(this),()=>c`
          <gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.invalid?this.errorMessage:ce}
            </slot>
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),Re(this,m,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.combobox&&!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?S(this,b,ne).call(this):(S(this,b,he).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t==null||t.scrollIntoView({block:"center"})})}};m=new WeakMap;b=new WeakSet;re=function(){return!this.plain};D=new WeakMap;B=new WeakMap;F=new WeakMap;f=new WeakMap;G=new WeakMap;I=new WeakMap;T=new WeakMap;z=new WeakMap;H=new WeakMap;V=new WeakMap;le=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,o(this,f).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0))),o(this,$).call(this),o(this,C).call(this)})};$=new WeakMap;C=new WeakMap;ne=function(){this.addEventListener("blur",o(this,y)),this.addEventListener("gds-blur",o(this,y)),this.addEventListener("keydown",o(this,L))};he=function(){this.removeEventListener("blur",o(this,y)),this.removeEventListener("gds-blur",o(this,y)),this.removeEventListener("keydown",o(this,L))};y=new WeakMap;L=new WeakMap;a.styles=[te,be,He];l([n({attribute:"supporting-text"})],a.prototype,"supportingText",2);l([n({type:Boolean,reflect:!0})],a.prototype,"open",2);l([n({type:Boolean,reflect:!0})],a.prototype,"searchable",2);l([n({type:Boolean,reflect:!0})],a.prototype,"multiple",2);l([n({type:Boolean,reflect:!0})],a.prototype,"clearable",2);l([n({type:Boolean,reflect:!0})],a.prototype,"combobox",2);l([n()],a.prototype,"compareWith",2);l([n()],a.prototype,"searchFilter",2);l([n({type:Boolean,attribute:"sync-popover-width"})],a.prototype,"syncPopoverWidth",2);l([n({type:Number,attribute:"max-height"})],a.prototype,"maxHeight",2);l([n({reflect:!0})],a.prototype,"size",2);l([n({type:Boolean,attribute:"hide-label"})],a.prototype,"hideLabel",2);l([n({type:Boolean})],a.prototype,"plain",2);l([n({type:Boolean})],a.prototype,"disableMobileStyles",2);l([n({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],a.prototype,"showExtendedSupportingText",2);l([X("#trigger")],a.prototype,"_elTriggerBtn",2);l([ue("#listbox")],a.prototype,"_elListbox",2);l([X("#searchinput")],a.prototype,"_elSearchInput",2);l([We({attributes:!0,childList:!0,subtree:!0,characterData:!0})],a.prototype,"_handleLightDOMChange",1);l([W("value")],a.prototype,"_handleValueChange",1);l([W("open")],a.prototype,"_handleOpenChange",1);a=l([q("gds-dropdown",{dependsOn:[_e,xe,ye,v,se,ee,Le,Ae]}),de()],a);export{a as G,g as a};
