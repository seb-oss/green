import{m as A,s as he}from"./runtime-BL31MtW8.js";import{l as pe}from"./localized-decorator-DtmrKsyB.js";import{n,h as c,g as z,G as J}from"./custom-element-scoping-b4c89-hi.js";import{a as Q}from"./query-p8xgzTDt.js";import{r as de}from"./query-async-MEroNOeJ.js";import{o as ce}from"./if-defined-CVqwUuaf.js";import{o as ue}from"./icon-DraK7r0n.js";import{n as _}from"./when-BR7zwNJC.js";import{o as fe,f as ge}from"./floating-ui.dom-BmFOYU71.js";import{f as ve,G as me}from"./form-control-host.style-B9O882Nq.js";import{G as be,a as ye}from"./form-control-header.component-DE15buoc.js";import{n as _e,e as we}from"./ref-R0wBYijq.js";import{T as X}from"./transitional-styles-BOwn52Fb.js";import{s as xe,F as $e,L as Ce,u as Ee}from"./option.styles-OvFRlCj3.js";import{w as S}from"./watch-tFciLXSI.js";import{i as Z}from"./lit-element-Bx14lxc-.js";import{e as ke}from"./class-map-CXsQwv0r.js";import{I as j}from"./checkmark.component-DRHkao1O.js";import{t as ee}from"./tokens.style-C9bLefPj.js";import{o as Me}from"./observe-light-dom-CmJPHUQ4.js";import{a as Le}from"./button.component-CJG_iMlt.js";import{I as Se}from"./chevron-bottom.component-C-Vz_I11.js";import{G as te}from"./popover.component-C4nh7ZG2.js";const Oe=Z`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var We=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,se=e=>{throw TypeError(e)},y=(e,t,s,r)=>{for(var i=r>1?void 0:r?Ae(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(r?p(t,s,i):p(i))||i);return r&&i&&We(t,s,i),i},q=(e,t,s)=>t.has(e)||se("Cannot "+s),U=(e,t,s)=>(q(e,t,"read from private field"),s?s.call(e):t.get(e)),K=(e,t,s)=>t.has(e)?se("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Te=(e,t,s,r)=>(q(e,t,"write to private field"),t.set(e,s),s),N=(e,t,s)=>(q(e,t,"access private method"),s),w,E,T;let u=class extends $e(J){constructor(){super(),K(this,E),K(this,w,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",N(this,E,T)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),N(this,E,T).call(this,e))})}get hidden(){return U(this,w)}set hidden(e){const t=e.toString();Te(this,w,t==="true"),U(this,w)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),X.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple,t=c`
      <span class="checkbox ${ke({checked:this.selected})}">
        ${this.selected?c`<gds-icon-checkmark
              width="10"
              height="10"
              stroke="4"
            ></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),c`<div>${_(e,()=>t)} <slot></slot></div>`}};w=new WeakMap;E=new WeakSet;T=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};u.styles=[ee,xe];y([n()],u.prototype,"value",2);y([n({type:Boolean,reflect:!0})],u.prototype,"hidden",1);y([n({attribute:"aria-selected",reflect:!0})],u.prototype,"selected",2);y([n({type:Boolean,reflect:!0})],u.prototype,"isPlaceholder",2);y([S("isPlaceholder")],u.prototype,"_handlePlaceholderStatusChange",1);u=y([z("gds-option",{dependsOn:[j]})],u);var Pe=Object.defineProperty,De=Object.getOwnPropertyDescriptor,ie=e=>{throw TypeError(e)},O=(e,t,s,r)=>{for(var i=r>1?void 0:r?De(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(r?p(t,s,i):p(i))||i);return r&&i&&Pe(t,s,i),i},Be=(e,t,s)=>t.has(e)||ie("Cannot "+s),$=(e,t,s)=>(Be(e,t,"read from private field"),s?s.call(e):t.get(e)),Y=(e,t,s)=>t.has(e)?ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),x,P;let v=class extends J{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,Y(this,x,we()),Y(this,P,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new Ce(this)}get navigableItems(){return this.visibleOptionElements}get options(){return $(this,x).value?Ee($(this,x).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),X.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",$(this,P))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return c`<slot ${_e($(this,x))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};x=new WeakMap;P=new WeakMap;v.styles=Oe;O([n({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);O([n()],v.prototype,"compareWith",2);O([S("multiple")],v.prototype,"_rerenderOptions",1);v=O([z("gds-listbox",{dependsOn:[u]})],v);const Fe=Z`
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

    [aria-expanded='true'] [slot='trail'] {
      transform: scaleY(-1);
    }
  }
`;var Ge=Object.defineProperty,He=Object.getOwnPropertyDescriptor,oe=e=>{throw TypeError(e)},l=(e,t,s,r)=>{for(var i=r>1?void 0:r?He(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(r?p(t,s,i):p(i))||i);return r&&i&&Ge(t,s,i),i},R=(e,t,s)=>t.has(e)||oe("Cannot "+s),o=(e,t,s)=>(R(e,t,"read from private field"),t.get(e)),d=(e,t,s)=>t.has(e)?oe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Ie=(e,t,s,r)=>(R(e,t,"write to private field"),t.set(e,s),s),C=(e,t,s)=>(R(e,t,"access private method"),s),g,m,re,D,B,F,f,G,k,H,I,V,ae,M,L,le,ne,b,W;let a=class extends Le{constructor(){super(...arguments),d(this,m),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,d(this,g),d(this,D,()=>{var e;return c`
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
        @input=${t=>{this.value=t.target.value,o(this,M).call(this),o(this,k).call(this,t),o(this,f).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${t=>{t.key==="ArrowDown"&&(t.preventDefault(),o(this,f).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(s=>s.focus())),t.key==="Enter"&&o(this,L).call(this)}}
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
    `),d(this,F,e=>{if(this.combobox){const s=e.getBoundingClientRect(),i=window.innerHeight-s.bottom,h=s.top;let p=Math.min(h,this.maxHeight);return i>h&&(p=Math.min(i,this.maxHeight)),`${p-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),d(this,f,(e,t)=>this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1,cancelable:!0}))),d(this,G,e=>{o(this,f).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),d(this,k,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchEvent(new CustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value},cancelable:!0}))))return;const s=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!s.value)return;this.options.filter(i=>!this.searchFilter(s.value,i)).forEach(i=>i.hidden=!0)}),d(this,H,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),d(this,I,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),d(this,V,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),d(this,M,()=>{this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),d(this,L,()=>{this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),d(this,b,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&o(this,f).call(this,!1,"close")&&(this.open=!1)}),d(this,W,e=>{var t;e.key==="Tab"&&!this.searchable&&o(this,f).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())})}get type(){return"gds-dropdown"}get options(){return o(this,g)?Array.from(o(this,g)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(o(this,g))return Array.from(o(this,g)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=A(he`${this.value.length} selected`):e=this.value.reduce((r,i)=>{var h;return r+((h=this.options.find(p=>p.value===i))==null?void 0:h.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(r=>r.selected))==null?void 0:t.innerHTML,e||((s=this.placeholder)==null?void 0:s.innerHTML)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}render(){return c`
      ${_(!this.plain&&!this.hideLabel,()=>c`
          <gds-form-control-header class="size-${this.size}">
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
              aria-label="${A("Filter available options")}"
              placeholder="${A("Search")}"
              @keydown=${o(this,H)}
              @input=${o(this,k)}
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
          <gds-form-control-footer class="size-${this.size}">
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage||this.validationMessage}
            </slot>
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),Ie(this,g,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.combobox&&!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?C(this,m,le).call(this):(C(this,m,ne).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t==null||t.scrollIntoView({block:"center"})})}};g=new WeakMap;m=new WeakSet;re=function(){return!this.plain&&this.invalid};D=new WeakMap;B=new WeakMap;F=new WeakMap;f=new WeakMap;G=new WeakMap;k=new WeakMap;H=new WeakMap;I=new WeakMap;V=new WeakMap;ae=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,o(this,f).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0))),o(this,M).call(this),o(this,L).call(this)})};M=new WeakMap;L=new WeakMap;le=function(){this.addEventListener("blur",o(this,b)),this.addEventListener("gds-blur",o(this,b)),this.addEventListener("keydown",o(this,W))};ne=function(){this.removeEventListener("blur",o(this,b)),this.removeEventListener("gds-blur",o(this,b)),this.removeEventListener("keydown",o(this,W))};b=new WeakMap;W=new WeakMap;a.styles=[ee,ve,Fe];l([n({attribute:"supporting-text"})],a.prototype,"supportingText",2);l([n({type:Boolean,reflect:!0})],a.prototype,"open",2);l([n({type:Boolean,reflect:!0})],a.prototype,"searchable",2);l([n({type:Boolean,reflect:!0})],a.prototype,"multiple",2);l([n({type:Boolean,reflect:!0})],a.prototype,"combobox",2);l([n()],a.prototype,"compareWith",2);l([n()],a.prototype,"searchFilter",2);l([n({type:Boolean,attribute:"sync-popover-width"})],a.prototype,"syncPopoverWidth",2);l([n({type:Number,attribute:"max-height"})],a.prototype,"maxHeight",2);l([n()],a.prototype,"size",2);l([n({type:Boolean,attribute:"hide-label"})],a.prototype,"hideLabel",2);l([n({type:Boolean})],a.prototype,"plain",2);l([n({type:Boolean})],a.prototype,"disableMobileStyles",2);l([Q("#trigger")],a.prototype,"_elTriggerBtn",2);l([de("#listbox")],a.prototype,"_elListbox",2);l([Q("#searchinput")],a.prototype,"_elSearchInput",2);l([Me({attributes:!0,childList:!0,subtree:!0,characterData:!0})],a.prototype,"_handleLightDOMChange",1);l([S("value")],a.prototype,"_handleValueChange",1);l([S("open")],a.prototype,"_handleOpenChange",1);a=l([z("gds-dropdown",{dependsOn:[be,ye,me,v,te,j,Se]}),pe()],a);export{a as G,u as a};
