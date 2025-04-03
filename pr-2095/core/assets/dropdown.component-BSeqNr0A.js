import{m as $,s as ne}from"./runtime-BL31MtW8.js";import{l as he}from"./localized-decorator-DtmrKsyB.js";import{n,h as c,g as V,G as J}from"./custom-element-scoping-b4c89-hi.js";import{a as Q}from"./query-p8xgzTDt.js";import{r as pe}from"./query-async-MEroNOeJ.js";import{o as de}from"./if-defined-CVqwUuaf.js";import{o as ce}from"./icon-TXeUf8MR.js";import{n as b}from"./when-BR7zwNJC.js";import{o as ue,f as fe}from"./floating-ui.dom-BmFOYU71.js";import{G as ge}from"./field-base.component-u2-leZ5O.js";import{G as ve,a as be}from"./form-control-header.component-CS8g-3iX.js";import{n as me,e as ye}from"./ref-R0wBYijq.js";import{T as X}from"./transitional-styles-Dj-EwcI7.js";import{s as _e,F as we,L as xe,u as $e}from"./option.styles-OvFRlCj3.js";import{w as O}from"./watch-tFciLXSI.js";import{i as Z}from"./lit-element-Bx14lxc-.js";import{e as Ce}from"./class-map-CXsQwv0r.js";import{I as j}from"./checkmark.component-CyUx_gWJ.js";import{t as ee}from"./tokens.style-BScLRl5F.js";import{o as Ee}from"./observe-light-dom-CmJPHUQ4.js";import{a as ke}from"./button.component-Z9yRxVMZ.js";import{I as Me}from"./chevron-bottom.component-HDbW-OqF.js";import{G as te}from"./popover.component-y_i0MF4L.js";const Le=Z`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var Oe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,se=e=>{throw TypeError(e)},y=(e,t,s,r)=>{for(var i=r>1?void 0:r?We(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(r?p(t,s,i):p(i))||i);return r&&i&&Oe(t,s,i),i},q=(e,t,s)=>t.has(e)||se("Cannot "+s),U=(e,t,s)=>(q(e,t,"read from private field"),s?s.call(e):t.get(e)),K=(e,t,s)=>t.has(e)?se("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Se=(e,t,s,r)=>(q(e,t,"write to private field"),t.set(e,s),s),N=(e,t,s)=>(q(e,t,"access private method"),s),_,E,T;let u=class extends we(J){constructor(){super(),K(this,E),K(this,_,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",N(this,E,T)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),N(this,E,T).call(this,e))})}get hidden(){return U(this,_)}set hidden(e){const t=e.toString();Se(this,_,t==="true"),U(this,_)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),X.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple,t=c`
      <span class="checkbox ${Ce({checked:this.selected})}">
        ${this.selected?c`<gds-icon-checkmark
              width="10"
              height="10"
              stroke="4"
            ></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),c`<div>${b(e,()=>t)} <slot></slot></div>`}};_=new WeakMap;E=new WeakSet;T=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};u.styles=[ee,_e];y([n()],u.prototype,"value",2);y([n({type:Boolean,reflect:!0})],u.prototype,"hidden",1);y([n({attribute:"aria-selected",reflect:!0})],u.prototype,"selected",2);y([n({type:Boolean,reflect:!0})],u.prototype,"isPlaceholder",2);y([O("isPlaceholder")],u.prototype,"_handlePlaceholderStatusChange",1);u=y([V("gds-option",{dependsOn:[j]})],u);var Ae=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,ie=e=>{throw TypeError(e)},W=(e,t,s,r)=>{for(var i=r>1?void 0:r?Te(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(r?p(t,s,i):p(i))||i);return r&&i&&Ae(t,s,i),i},Pe=(e,t,s)=>t.has(e)||ie("Cannot "+s),C=(e,t,s)=>(Pe(e,t,"read from private field"),s?s.call(e):t.get(e)),Y=(e,t,s)=>t.has(e)?ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),w,P;let v=class extends J{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,Y(this,w,ye()),Y(this,P,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new xe(this)}get navigableItems(){return this.visibleOptionElements}get options(){return C(this,w).value?$e(C(this,w).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),X.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",C(this,P))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return c`<slot ${me(C(this,w))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};w=new WeakMap;P=new WeakMap;v.styles=Le;W([n({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);W([n()],v.prototype,"compareWith",2);W([O("multiple")],v.prototype,"_rerenderOptions",1);v=W([V("gds-listbox",{dependsOn:[u]})],v);const De=Z`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: var(--gds-space-xs);
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    #field::part(_base) {
      cursor: pointer;
    }

    button {
      appearance: none;
      background: transparent;
      border-width: 0;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      color: currentColor;
      cursor: pointer;
      padding: 0;
      text-align: left;
      flex: 0 1 100%;

      /* This prevents overflow when the text is too long */
      display: grid;
    }

    button:focus {
      outline: none;
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    input[type='text'] {
      border-radius: var(--gds-space-xs);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      font-size: inherit;
      line-height: inherit;
      border: none;
      outline: none;
      color: var(--gds-color-l3-content-disabled);
      border-color: var(--gds-color-l3-border-tertiary);
      border-width: 0 0 var(--gds-space-4xs) 0;
      border-style: solid;
      width: 100%;
      padding: var(--gds-space-m);
      font-weight: var(--gds-text-weight-regular);
      flex: 1;
      box-sizing: border-box;
      font-family: inherit;

      &:focus {
        border-color: var(--gds-color-l3-border-secondary);
        color: var(--gds-color-l3-content-tertiary);
      }

      &::placeholder {
        font-family: inherit;
        font-weight: var(--gds-text-weight-book);
        color: var(--gds-color-l3-content-disabled);
      }
    }

    input[role='combobox'] {
      appearance: none;
      background: transparent;
      border: none;
      font-size: inherit;
      outline: none;
    }

    [aria-expanded='true'] [slot='trail'] {
      transform: scaleY(-1);
    }
  }
`;var Be=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,oe=e=>{throw TypeError(e)},l=(e,t,s,r)=>{for(var i=r>1?void 0:r?Fe(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(r?p(t,s,i):p(i))||i);return r&&i&&Be(t,s,i),i},R=(e,t,s)=>t.has(e)||oe("Cannot "+s),o=(e,t,s)=>(R(e,t,"read from private field"),t.get(e)),d=(e,t,s)=>t.has(e)?oe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Ge=(e,t,s,r)=>(R(e,t,"write to private field"),t.set(e,s),s),A=(e,t,s)=>(R(e,t,"access private method"),s),g,D,B,F,f,G,k,H,I,z,x,re,M,L,ae,le,m,S;let a=class extends ke{constructor(){super(...arguments),d(this,x),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,d(this,g),d(this,D,()=>{var e;return c`
      <input
        id="trigger"
        role="combobox"
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
        @input=${t=>{this.value=t.target.value,o(this,M).call(this),o(this,k).call(this,t),o(this,f).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${t=>{t.key==="ArrowDown"&&(t.preventDefault(),o(this,f).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(s=>s.focus())),t.key==="Enter"&&o(this,L).call(this)}}
      />
    `}),d(this,B,()=>c`
      <button
        id="trigger"
        role="combobox"
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
          <span>${ce(this.displayValue)}</span>
        </slot>
      </button>
    `),d(this,F,e=>{if(this.combobox){const s=e.getBoundingClientRect(),i=window.innerHeight-s.bottom,h=s.top;let p=Math.min(h,this.maxHeight);return i>h&&(p=Math.min(i,this.maxHeight)),`${p-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),d(this,f,(e,t)=>this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1,cancelable:!0}))),d(this,G,e=>{o(this,f).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),d(this,k,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchEvent(new CustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value},cancelable:!0}))))return;const s=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!s.value)return;this.options.filter(i=>!this.searchFilter(s.value,i)).forEach(i=>i.hidden=!0)}),d(this,H,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),d(this,I,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),d(this,z,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),d(this,M,()=>{this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),d(this,L,()=>{this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),d(this,m,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&o(this,f).call(this,!1,"close")&&(this.open=!1)}),d(this,S,e=>{var t;e.key==="Tab"&&!this.searchable&&o(this,f).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())})}get type(){return"gds-dropdown"}get options(){return o(this,g)?Array.from(o(this,g)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(o(this,g))return Array.from(o(this,g)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=$(ne`${this.value.length} selected`):e=this.value.reduce((r,i)=>{var h;return r+((h=this.options.find(p=>p.value===i))==null?void 0:h.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(r=>r.selected))==null?void 0:t.innerHTML,e||((s=this.placeholder)==null?void 0:s.innerHTML)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}render(){return c`
      ${b(!this.plain&&!this.hideLabel,()=>c`
          <gds-form-control-header class="size-${this.size}">
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${b(this.supportingText.length>0,()=>c`<span slot="supporting-text" id="supporting-text">
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
        .floatingUIMiddleware=${this.combobox?[ue(8),fe()]:te.DefaultMiddleware}
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
          <gds-icon-chevron-bottom
            slot="trail"
            label=${$("Expand")}
          ></gds-icon-chevron-bottom>
        </gds-field-base>

        ${b(this.searchable,()=>c`<input
              id="searchinput"
              type="text"
              aria-label="${$("Filter available options")}"
              placeholder="${$("Search")}"
              @keydown=${o(this,H)}
              @input=${o(this,k)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${de(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${A(this,x,re)}"
          @gds-focus="${o(this,z)}"
          @keydown=${o(this,I)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${b(!this.plain,()=>c`
          <gds-form-control-footer class="size-${this.size}">
            ${b(this.invalid,()=>c`
                <slot id="message" name="message" slot="message">
                  <gds-icon-triangle-exclamation
                    solid
                  ></gds-icon-triangle-exclamation>
                  ${this.errorMessage||this.validationMessage}
                </slot>
              `)}
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),Ge(this,g,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.combobox&&!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?A(this,x,ae).call(this):(A(this,x,le).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t==null||t.scrollIntoView({block:"center"})})}};g=new WeakMap;D=new WeakMap;B=new WeakMap;F=new WeakMap;f=new WeakMap;G=new WeakMap;k=new WeakMap;H=new WeakMap;I=new WeakMap;z=new WeakMap;x=new WeakSet;re=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,o(this,f).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0))),o(this,M).call(this),o(this,L).call(this)})};M=new WeakMap;L=new WeakMap;ae=function(){this.addEventListener("blur",o(this,m)),this.addEventListener("gds-blur",o(this,m)),this.addEventListener("keydown",o(this,S))};le=function(){this.removeEventListener("blur",o(this,m)),this.removeEventListener("gds-blur",o(this,m)),this.removeEventListener("keydown",o(this,S))};m=new WeakMap;S=new WeakMap;a.styles=[ee,De];l([n({attribute:"supporting-text"})],a.prototype,"supportingText",2);l([n({type:Boolean,reflect:!0})],a.prototype,"open",2);l([n({type:Boolean,reflect:!0})],a.prototype,"searchable",2);l([n({type:Boolean,reflect:!0})],a.prototype,"multiple",2);l([n({type:Boolean,reflect:!0})],a.prototype,"combobox",2);l([n()],a.prototype,"compareWith",2);l([n()],a.prototype,"searchFilter",2);l([n({type:Boolean,attribute:"sync-popover-width"})],a.prototype,"syncPopoverWidth",2);l([n({type:Number,attribute:"max-height"})],a.prototype,"maxHeight",2);l([n()],a.prototype,"size",2);l([n({type:Boolean,attribute:"hide-label"})],a.prototype,"hideLabel",2);l([n({type:Boolean})],a.prototype,"plain",2);l([n({type:Boolean})],a.prototype,"disableMobileStyles",2);l([Q("#trigger")],a.prototype,"_elTriggerBtn",2);l([pe("#listbox")],a.prototype,"_elListbox",2);l([Q("#searchinput")],a.prototype,"_elSearchInput",2);l([Ee({attributes:!0,childList:!0,subtree:!0,characterData:!0})],a.prototype,"_handleLightDOMChange",1);l([O("value")],a.prototype,"_handleValueChange",1);l([O("open")],a.prototype,"_handleOpenChange",1);a=l([V("gds-dropdown",{dependsOn:[ve,be,ge,v,te,j,Me]}),he()],a);export{u as G,a};
