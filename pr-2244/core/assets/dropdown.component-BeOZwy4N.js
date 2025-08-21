import{m as L,s as he,l as pe}from"./runtime-CNluP0A8.js";import{n}from"./Reflect-DJ7r0WLU.js";import{a as J}from"./query-p8xgzTDt.js";import{r as de}from"./query-async-MEroNOeJ.js";import{o as ce}from"./if-defined-BAXgs-ZI.js";import{o as ue}from"./unsafe-html-CYO4avEf.js";import{n as _}from"./when-BR7zwNJC.js";import{o as fe,f as ge}from"./floating-ui.dom-BmFOYU71.js";import{f as ve,G as me}from"./form-control-host.style-Cqr2fwLY.js";import{G as be,a as ye}from"./form-control-header.component-C8yNg31b.js";import{n as _e,e as xe}from"./ref-R0wBYijq.js";import{h as c,g as z,G as Q}from"./gds-element-DJNCW3iR.js";import{T as X}from"./transitional-styles-DTrj-OFY.js";import{s as we,F as $e,L as Ce,u as Ee}from"./unwrap-slots-Z1-BFqVx.js";import{w as T}from"./watch-tFciLXSI.js";import{i as Z}from"./lit-element-Bx14lxc-.js";import{I as j}from"./checkmark.component-CPU33izo.js";import{r as Se,c as Me}from"./rbcb-toggle.template-KVNld5aR.js";import{t as ee}from"./tokens.style-B41Dpirr.js";import{o as ke}from"./observe-light-dom-CmJPHUQ4.js";import{a as Te}from"./button.component-DkxkWQde.js";import{I as Oe}from"./chevron-bottom.component-BUZ1T0bL.js";import{G as te}from"./popover.component-SrErJWu7.js";const We=Z`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var Le=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,se=e=>{throw TypeError(e)},y=(e,t,s,a)=>{for(var i=a>1?void 0:a?Ae(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(a?p(t,s,i):p(i))||i);return a&&i&&Le(t,s,i),i},q=(e,t,s)=>t.has(e)||se("Cannot "+s),U=(e,t,s)=>(q(e,t,"read from private field"),s?s.call(e):t.get(e)),K=(e,t,s)=>t.has(e)?se("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Pe=(e,t,s,a)=>(q(e,t,"write to private field"),t.set(e,s),s),N=(e,t,s)=>(q(e,t,"access private method"),s),x,E,A;let u=class extends $e(Q){constructor(){super(),K(this,E),K(this,x,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",N(this,E,A)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),N(this,E,A).call(this,e))})}get hidden(){return U(this,x)}set hidden(e){const t=e.toString();Pe(this,x,t==="true"),U(this,x)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),X.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){var t;const e=(t=this.parentElement)==null?void 0:t.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),c`<div class="item">
      ${_(e,()=>Me({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};x=new WeakMap;E=new WeakSet;A=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};u.styles=[ee,Se,we];y([n()],u.prototype,"value",2);y([n({type:Boolean,reflect:!0})],u.prototype,"hidden",1);y([n({attribute:"aria-selected",reflect:!0})],u.prototype,"selected",2);y([n({type:Boolean,reflect:!0})],u.prototype,"isPlaceholder",2);y([T("isPlaceholder")],u.prototype,"_handlePlaceholderStatusChange",1);u=y([z("gds-option",{dependsOn:[j]})],u);var De=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,ie=e=>{throw TypeError(e)},O=(e,t,s,a)=>{for(var i=a>1?void 0:a?Be(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(a?p(t,s,i):p(i))||i);return a&&i&&De(t,s,i),i},Fe=(e,t,s)=>t.has(e)||ie("Cannot "+s),$=(e,t,s)=>(Fe(e,t,"read from private field"),s?s.call(e):t.get(e)),Y=(e,t,s)=>t.has(e)?ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),w,P;let v=class extends Q{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,Y(this,w,xe()),Y(this,P,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})}),new Ce(this)}get navigableItems(){return this.visibleOptionElements}get options(){return $(this,w).value?Ee($(this,w).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),X.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",$(this,P))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return c`<slot ${_e($(this,w))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};w=new WeakMap;P=new WeakMap;v.styles=We;O([n({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);O([n()],v.prototype,"compareWith",2);O([T("multiple")],v.prototype,"_rerenderOptions",1);v=O([z("gds-listbox",{dependsOn:[u]})],v);const Ge=Z`
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
        color: var(--gds-sys-color-content-01);
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
`;var He=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,oe=e=>{throw TypeError(e)},l=(e,t,s,a)=>{for(var i=a>1?void 0:a?Ie(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(a?p(t,s,i):p(i))||i);return a&&i&&He(t,s,i),i},R=(e,t,s)=>t.has(e)||oe("Cannot "+s),o=(e,t,s)=>(R(e,t,"read from private field"),t.get(e)),d=(e,t,s)=>t.has(e)?oe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Ve=(e,t,s,a)=>(R(e,t,"write to private field"),t.set(e,s),s),C=(e,t,s)=>(R(e,t,"access private method"),s),g,m,re,D,B,F,f,G,S,H,I,V,ae,M,k,le,ne,b,W;let r=class extends Te{constructor(){super(...arguments),d(this,m),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,d(this,g),d(this,D,()=>{var e;return c`
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
        @input=${t=>{this.value=t.target.value,o(this,M).call(this),o(this,S).call(this,t),o(this,f).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${t=>{t.key==="ArrowDown"&&(t.preventDefault(),o(this,f).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(s=>s.focus())),t.key==="Enter"&&o(this,k).call(this)}}
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
          <span>${ue(this.displayValue)}</span>
        </slot>
      </button>
    `),d(this,F,e=>{if(this.combobox){const s=e.getBoundingClientRect(),i=window.innerHeight-s.bottom,h=s.top;let p=Math.min(h,this.maxHeight);return i>h&&(p=Math.min(i,this.maxHeight)),`${p-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),d(this,f,(e,t)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1})),d(this,G,e=>{o(this,f).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),d(this,S,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const s=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!s.value)return;this.options.filter(i=>!this.searchFilter(s.value,i)).forEach(i=>i.hidden=!0)}),d(this,H,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),d(this,I,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),d(this,V,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),d(this,M,()=>{this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))}),d(this,k,()=>{this.updateComplete.then(()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),d(this,b,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&o(this,f).call(this,!1,"close")&&(this.open=!1)}),d(this,W,e=>{var t;e.key==="Tab"&&!this.searchable&&o(this,f).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())})}get type(){return"gds-dropdown"}get options(){return o(this,g)?Array.from(o(this,g)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(o(this,g))return Array.from(o(this,g)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=L(he`${this.value.length} selected`):e=this.value.reduce((a,i)=>{var h;return a+((h=this.options.find(p=>p.value===i))==null?void 0:h.innerText)+", "},"").slice(0,-2):e=(t=this.options.find(a=>a.selected))==null?void 0:t.innerText,e||((s=this.placeholder)==null?void 0:s.innerText)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}render(){return c`
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
        .floatingUIMiddleware=${this.combobox?[fe(8),ge()]:te.DefaultMiddleware}
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
          ${this.combobox&&!this.multiple?o(this,D).call(this):o(this,B).call(this)}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${_(this.searchable,()=>c`<input
              id="searchinput"
              type="text"
              aria-label="${L("Filter available options")}"
              placeholder="${L("Search")}"
              @keydown=${o(this,H)}
              @input=${o(this,S)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${ce(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${C(this,m,ae)}"
          @gds-focus="${o(this,V)}"
          @keydown=${o(this,I)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${_(C(this,m,re).call(this),()=>c`
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
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),Ve(this,g,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.combobox&&!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?C(this,m,le).call(this):(C(this,m,ne).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t==null||t.scrollIntoView({block:"center"})})}};g=new WeakMap;m=new WeakSet;re=function(){return!this.plain};D=new WeakMap;B=new WeakMap;F=new WeakMap;f=new WeakMap;G=new WeakMap;S=new WeakMap;H=new WeakMap;I=new WeakMap;V=new WeakMap;ae=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,o(this,f).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0))),o(this,M).call(this),o(this,k).call(this)})};M=new WeakMap;k=new WeakMap;le=function(){this.addEventListener("blur",o(this,b)),this.addEventListener("gds-blur",o(this,b)),this.addEventListener("keydown",o(this,W))};ne=function(){this.removeEventListener("blur",o(this,b)),this.removeEventListener("gds-blur",o(this,b)),this.removeEventListener("keydown",o(this,W))};b=new WeakMap;W=new WeakMap;r.styles=[ee,ve,Ge];l([n({attribute:"supporting-text"})],r.prototype,"supportingText",2);l([n({type:Boolean,reflect:!0})],r.prototype,"open",2);l([n({type:Boolean,reflect:!0})],r.prototype,"searchable",2);l([n({type:Boolean,reflect:!0})],r.prototype,"multiple",2);l([n({type:Boolean,reflect:!0})],r.prototype,"combobox",2);l([n()],r.prototype,"compareWith",2);l([n()],r.prototype,"searchFilter",2);l([n({type:Boolean,attribute:"sync-popover-width"})],r.prototype,"syncPopoverWidth",2);l([n({type:Number,attribute:"max-height"})],r.prototype,"maxHeight",2);l([n()],r.prototype,"size",2);l([n({type:Boolean,attribute:"hide-label"})],r.prototype,"hideLabel",2);l([n({type:Boolean})],r.prototype,"plain",2);l([n({type:Boolean})],r.prototype,"disableMobileStyles",2);l([n({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);l([J("#trigger")],r.prototype,"_elTriggerBtn",2);l([de("#listbox")],r.prototype,"_elListbox",2);l([J("#searchinput")],r.prototype,"_elSearchInput",2);l([ke({attributes:!0,childList:!0,subtree:!0,characterData:!0})],r.prototype,"_handleLightDOMChange",1);l([T("value")],r.prototype,"_handleValueChange",1);l([T("open")],r.prototype,"_handleOpenChange",1);r=l([z("gds-dropdown",{dependsOn:[be,ye,me,v,te,j,Oe]}),pe()],r);export{r as G,u as a};
