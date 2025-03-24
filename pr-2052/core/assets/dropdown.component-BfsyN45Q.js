import{m as S,s as pe}from"./runtime-BL31MtW8.js";import{l as ce}from"./localized-decorator-DtmrKsyB.js";import{n,h as c,g as V,G as J}from"./custom-element-scoping-D6CCRyY9.js";import{a as Q}from"./query-p8xgzTDt.js";import{r as ue}from"./query-async-MEroNOeJ.js";import{o as fe}from"./if-defined-CVqwUuaf.js";import{o as ge}from"./icon-VtWCMrZF.js";import{n as b}from"./when-BR7zwNJC.js";import{o as ve,f as be}from"./floating-ui.dom-BmFOYU71.js";import{G as X}from"./field-base.component-Bg0FHBoT.js";import{a as Z,G as j}from"./form-control-header.component-BlMICpmi.js";import{n as me,e as ye}from"./ref-R0wBYijq.js";import{T as ee}from"./transitional-styles-BOpNQOm4.js";import{s as _e,F as we,L as xe,u as $e}from"./option.styles-OvFRlCj3.js";import{w as L}from"./watch-tFciLXSI.js";import{i as te}from"./lit-element-Bx14lxc-.js";import{e as Ce}from"./class-map-CXsQwv0r.js";import{I as se}from"./checkmark.component-D1nasFEo.js";import{t as ie}from"./tokens.style-KMm7w703.js";import{o as Ee}from"./observe-light-dom-CmJPHUQ4.js";import{a as ke}from"./button.component-Bf_kcYRO.js";import{I as Me}from"./chevron-bottom.component-DtmuIaRS.js";import{G as re}from"./popover.component-owrGZj7b.js";X.define();Z.define();j.define();const Le=te`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var Oe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,oe=e=>{throw TypeError(e)},y=(e,t,s,o)=>{for(var i=o>1?void 0:o?We(t,s):t,h=e.length-1,d;h>=0;h--)(d=e[h])&&(i=(o?d(t,s,i):d(i))||i);return o&&i&&Oe(t,s,i),i},q=(e,t,s)=>t.has(e)||oe("Cannot "+s),U=(e,t,s)=>(q(e,t,"read from private field"),s?s.call(e):t.get(e)),K=(e,t,s)=>t.has(e)?oe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Se=(e,t,s,o)=>(q(e,t,"write to private field"),t.set(e,s),s),N=(e,t,s)=>(q(e,t,"access private method"),s),_,C,T;let u=class extends we(J){constructor(){super(),K(this,C),K(this,_,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",N(this,C,T)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),N(this,C,T).call(this,e))})}get hidden(){return U(this,_)}set hidden(e){const t=e.toString();Se(this,_,t==="true"),U(this,_)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),ee.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple,t=c`
      <span class="checkbox ${Ce({checked:this.selected})}">
        ${this.selected?c`<gds-icon-checkmark
              width="10"
              height="10"
              stroke="4"
            ></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),c`<div>${b(e,()=>t)} <slot></slot></div>`}};_=new WeakMap;C=new WeakSet;T=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};u.styles=[ie,_e];y([n()],u.prototype,"value",2);y([n({type:Boolean,reflect:!0})],u.prototype,"hidden",1);y([n({attribute:"aria-selected",reflect:!0})],u.prototype,"selected",2);y([n({type:Boolean,reflect:!0})],u.prototype,"isPlaceholder",2);y([L("isPlaceholder")],u.prototype,"_handlePlaceholderStatusChange",1);u=y([V("gds-option",{dependsOn:[se]})],u);var Ae=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,ae=e=>{throw TypeError(e)},O=(e,t,s,o)=>{for(var i=o>1?void 0:o?Te(t,s):t,h=e.length-1,d;h>=0;h--)(d=e[h])&&(i=(o?d(t,s,i):d(i))||i);return o&&i&&Ae(t,s,i),i},Pe=(e,t,s)=>t.has(e)||ae("Cannot "+s),$=(e,t,s)=>(Pe(e,t,"read from private field"),s?s.call(e):t.get(e)),Y=(e,t,s)=>t.has(e)?ae("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),w,P;let g=class extends J{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,Y(this,w,ye()),Y(this,P,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new xe(this)}get navigableItems(){return this.visibleOptionElements}get options(){return $(this,w).value?$e($(this,w).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),ee.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",$(this,P))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return c`<slot ${me($(this,w))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};w=new WeakMap;P=new WeakMap;g.styles=Le;O([n({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],g.prototype,"multiple",2);O([n()],g.prototype,"compareWith",2);O([L("multiple")],g.prototype,"_rerenderOptions",1);g=O([V("gds-listbox",{dependsOn:[u]})],g);g.define();const De=te`
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
`;var Be=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,le=e=>{throw TypeError(e)},l=(e,t,s,o)=>{for(var i=o>1?void 0:o?Fe(t,s):t,h=e.length-1,d;h>=0;h--)(d=e[h])&&(i=(o?d(t,s,i):d(i))||i);return o&&i&&Be(t,s,i),i},R=(e,t,s)=>t.has(e)||le("Cannot "+s),r=(e,t,s)=>(R(e,t,"read from private field"),t.get(e)),p=(e,t,s)=>t.has(e)?le("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Ge=(e,t,s,o)=>(R(e,t,"write to private field"),t.set(e,s),s),A=(e,t,s)=>(R(e,t,"access private method"),s),v,D,B,F,f,G,E,H,I,z,x,ne,k,M,he,de,m,W;let a=class extends ke{constructor(){super(...arguments),p(this,x),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,p(this,v),p(this,D,()=>{var e;return c`
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
        @input=${t=>{this.value=t.target.value,r(this,k).call(this),r(this,E).call(this,t),r(this,f).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${t=>{t.key==="ArrowDown"&&(t.preventDefault(),r(this,f).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(s=>s.focus())),t.key==="Enter"&&r(this,M).call(this)}}
      />
    `}),p(this,B,()=>c`
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
          <span>${ge(this.displayValue)}</span>
        </slot>
      </button>
    `),p(this,F,e=>{if(this.combobox){const s=e.getBoundingClientRect(),i=window.innerHeight-s.bottom,h=s.top;let d=Math.min(h,this.maxHeight);return i>h&&(d=Math.min(i,this.maxHeight)),`${d-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),p(this,f,(e,t)=>this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1,cancelable:!0}))),p(this,G,e=>{r(this,f).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),p(this,E,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchEvent(new CustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value},cancelable:!0}))))return;const s=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!s.value)return;this.options.filter(i=>!this.searchFilter(s.value,i)).forEach(i=>i.hidden=!0)}),p(this,H,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),p(this,I,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),p(this,z,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),p(this,k,()=>{this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),p(this,M,()=>{this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),p(this,m,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&r(this,f).call(this,!1,"close")&&(this.open=!1)}),p(this,W,e=>{var t;e.key==="Tab"&&!this.searchable&&r(this,f).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())})}get type(){return"gds-dropdown"}get options(){return r(this,v)?Array.from(r(this,v)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(r(this,v))return Array.from(r(this,v)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=S(pe`${this.value.length} selected`):e=this.value.reduce((o,i)=>{var h;return o+((h=this.options.find(d=>d.value===i))==null?void 0:h.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(o=>o.selected))==null?void 0:t.innerHTML,e||((s=this.placeholder)==null?void 0:s.innerHTML)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}render(){return c`
      ${b(!this.hideLabel,()=>c`
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
        .calcMaxHeight=${r(this,F)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[ve(8),be()]:re.DefaultMiddleware}
        @gds-ui-state=${r(this,G)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${this.combobox&&!this.multiple?r(this,D).call(this):r(this,B).call(this)}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${b(this.searchable,()=>c`<input
              id="searchinput"
              type="text"
              aria-label="${S("Filter available options")}"
              placeholder="${S("Search")}"
              @keydown=${r(this,H)}
              @input=${r(this,E)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${fe(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${A(this,x,ne)}"
          @gds-focus="${r(this,z)}"
          @keydown=${r(this,I)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${b(!this.hideLabel,()=>c`
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
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),Ge(this,v,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.combobox&&!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?A(this,x,he).call(this):(A(this,x,de).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t==null||t.scrollIntoView({block:"center"})})}};v=new WeakMap;D=new WeakMap;B=new WeakMap;F=new WeakMap;f=new WeakMap;G=new WeakMap;E=new WeakMap;H=new WeakMap;I=new WeakMap;z=new WeakMap;x=new WeakSet;ne=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,r(this,f).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0))),r(this,k).call(this),r(this,M).call(this)})};k=new WeakMap;M=new WeakMap;he=function(){this.addEventListener("blur",r(this,m)),this.addEventListener("gds-blur",r(this,m)),this.addEventListener("keydown",r(this,W))};de=function(){this.removeEventListener("blur",r(this,m)),this.removeEventListener("gds-blur",r(this,m)),this.removeEventListener("keydown",r(this,W))};m=new WeakMap;W=new WeakMap;a.styles=[ie,De];l([n({attribute:"supporting-text"})],a.prototype,"supportingText",2);l([n({type:Boolean,reflect:!0})],a.prototype,"open",2);l([n({type:Boolean,reflect:!0})],a.prototype,"searchable",2);l([n({type:Boolean,reflect:!0})],a.prototype,"multiple",2);l([n({type:Boolean,reflect:!0})],a.prototype,"combobox",2);l([n()],a.prototype,"compareWith",2);l([n()],a.prototype,"searchFilter",2);l([n({type:Boolean,attribute:"sync-popover-width"})],a.prototype,"syncPopoverWidth",2);l([n({type:Number,attribute:"max-height"})],a.prototype,"maxHeight",2);l([n()],a.prototype,"size",2);l([n({type:Boolean,attribute:"hide-label"})],a.prototype,"hideLabel",2);l([n()],a.prototype,"disableMobileStyles",2);l([Q("#trigger")],a.prototype,"_elTriggerBtn",2);l([ue("#listbox")],a.prototype,"_elListbox",2);l([Q("#searchinput")],a.prototype,"_elSearchInput",2);l([Ee({attributes:!0,childList:!0,subtree:!0,characterData:!0})],a.prototype,"_handleLightDOMChange",1);l([L("value")],a.prototype,"_handleValueChange",1);l([L("open")],a.prototype,"_handleOpenChange",1);a=l([V("gds-dropdown",{dependsOn:[j,Z,X,g,re,se,Me]}),ce()],a);export{u as G,a};
