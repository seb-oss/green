import{m as _,s as V}from"./runtime-BL31MtW8.js";import{l as P}from"./localized-decorator-DtmrKsyB.js";import{n,h as c,g as q}from"./custom-element-scoping-D6CCRyY9.js";import{a as D}from"./query-p8xgzTDt.js";import{r as R}from"./query-async-MEroNOeJ.js";import{o as U}from"./if-defined-CVqwUuaf.js";import{o as K}from"./icon-VtWCMrZF.js";import{n as b}from"./when-BR7zwNJC.js";import{o as N,f as Y}from"./floating-ui.dom-BmFOYU71.js";import{G as A}from"./field-base.component-Bg0FHBoT.js";import{a as F,G as H}from"./form-control-header.component-BlMICpmi.js";import{t as J}from"./tokens.style-KMm7w703.js";import{o as Q}from"./observe-light-dom-CmJPHUQ4.js";import{w as B}from"./watch-tFciLXSI.js";import{a as X}from"./button.component-Bf_kcYRO.js";import{I as Z}from"./checkmark.component-D1nasFEo.js";import{I as j}from"./chevron-bottom.component-DtmuIaRS.js";import{G as ee}from"./popover.component-owrGZj7b.js";import{i as te}from"./lit-element-Bx14lxc-.js";A.define();F.define();H.define();const ie=te`
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
`;var se=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,O=e=>{throw TypeError(e)},a=(e,t,i,h)=>{for(var r=h>1?void 0:h?oe(t,i):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(r=(h?p(t,i,r):p(r))||r);return h&&r&&se(t,i,r),r},S=(e,t,i)=>t.has(e)||O("Cannot "+i),s=(e,t,i)=>(S(e,t,"read from private field"),t.get(e)),l=(e,t,i)=>t.has(e)?O("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ae=(e,t,i,h)=>(S(e,t,"write to private field"),t.set(e,i),i),$=(e,t,i)=>(S(e,t,"access private method"),i),g,C,M,k,u,L,v,E,T,W,m,z,y,x,I,G,f,w;let o=class extends X{constructor(){super(...arguments),l(this,m),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,l(this,g),l(this,C,()=>{var e;return c`
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
        @input=${t=>{this.value=t.target.value,s(this,y).call(this),s(this,v).call(this,t),s(this,u).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${t=>{t.key==="ArrowDown"&&(t.preventDefault(),s(this,u).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(i=>i.focus())),t.key==="Enter"&&s(this,x).call(this)}}
      />
    `}),l(this,M,()=>c`
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
          <span>${K(this.displayValue)}</span>
        </slot>
      </button>
    `),l(this,k,e=>{if(this.combobox){const i=e.getBoundingClientRect(),r=window.innerHeight-i.bottom,d=i.top;let p=Math.min(d,this.maxHeight);return r>d&&(p=Math.min(r,this.maxHeight)),`${p-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),l(this,u,(e,t)=>this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1,cancelable:!0}))),l(this,L,e=>{s(this,u).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),l(this,v,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchEvent(new CustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value},cancelable:!0}))))return;const i=e.currentTarget;if(this.options.forEach(r=>r.hidden=!1),!i.value)return;this.options.filter(r=>!this.searchFilter(i.value,r)).forEach(r=>r.hidden=!0)}),l(this,E,e=>{var t;(t=this._elListbox)==null||t.then(i=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),i.focus();return}})}),l(this,T,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),l(this,W,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),l(this,y,()=>{this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),l(this,x,()=>{this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),l(this,f,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&s(this,u).call(this,!1,"close")&&(this.open=!1)}),l(this,w,e=>{var t;e.key==="Tab"&&!this.searchable&&s(this,u).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())})}get type(){return"gds-dropdown"}get options(){return s(this,g)?Array.from(s(this,g)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(s(this,g))return Array.from(s(this,g)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,i;let e;return Array.isArray(this.value)?this.value.length>2?e=_(V`${this.value.length} selected`):e=this.value.reduce((h,r)=>{var d;return h+((d=this.options.find(p=>p.value===r))==null?void 0:d.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(h=>h.selected))==null?void 0:t.innerHTML,e||((i=this.placeholder)==null?void 0:i.innerHTML)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}render(){return c`
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
        .calcMaxHeight=${s(this,k)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[N(8),Y()]:ee.DefaultMiddleware}
        @gds-ui-state=${s(this,L)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${this.combobox&&!this.multiple?s(this,C).call(this):s(this,M).call(this)}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${b(this.searchable,()=>c`<input
              id="searchinput"
              type="text"
              aria-label="${_("Filter available options")}"
              placeholder="${_("Search")}"
              @keydown=${s(this,E)}
              @input=${s(this,v)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${U(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${$(this,m,z)}"
          @gds-focus="${s(this,W)}"
          @keydown=${s(this,T)}
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
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),ae(this,g,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.combobox&&!this.placeholder&&this.options.find(i=>this.compareWith(i.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(i=>i.hidden=!e),e?$(this,m,I).call(this):($(this,m,G).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(i=>i.selected);requestAnimationFrame(async()=>{await this.updateComplete,t==null||t.scrollIntoView({block:"center"})})}};g=new WeakMap;C=new WeakMap;M=new WeakMap;k=new WeakMap;u=new WeakMap;L=new WeakMap;v=new WeakMap;E=new WeakMap;T=new WeakMap;W=new WeakMap;m=new WeakSet;z=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(i=>i.value):(this.value=(t=e.selection[0])==null?void 0:t.value,s(this,u).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>{var i;return(i=this._elTriggerBtn)==null?void 0:i.focus()},0))),s(this,y).call(this),s(this,x).call(this)})};y=new WeakMap;x=new WeakMap;I=function(){this.addEventListener("blur",s(this,f)),this.addEventListener("gds-blur",s(this,f)),this.addEventListener("keydown",s(this,w))};G=function(){this.removeEventListener("blur",s(this,f)),this.removeEventListener("gds-blur",s(this,f)),this.removeEventListener("keydown",s(this,w))};f=new WeakMap;w=new WeakMap;o.styles=[J,ie];a([n({attribute:"supporting-text"})],o.prototype,"supportingText",2);a([n({type:Boolean,reflect:!0})],o.prototype,"open",2);a([n({type:Boolean,reflect:!0})],o.prototype,"searchable",2);a([n({type:Boolean,reflect:!0})],o.prototype,"multiple",2);a([n({type:Boolean,reflect:!0})],o.prototype,"combobox",2);a([n()],o.prototype,"compareWith",2);a([n()],o.prototype,"searchFilter",2);a([n({type:Boolean,attribute:"sync-popover-width"})],o.prototype,"syncPopoverWidth",2);a([n({type:Number,attribute:"max-height"})],o.prototype,"maxHeight",2);a([n()],o.prototype,"size",2);a([n({type:Boolean,attribute:"hide-label"})],o.prototype,"hideLabel",2);a([n()],o.prototype,"disableMobileStyles",2);a([D("#trigger")],o.prototype,"_elTriggerBtn",2);a([R("#listbox")],o.prototype,"_elListbox",2);a([D("#searchinput")],o.prototype,"_elSearchInput",2);a([Q({attributes:!0,childList:!0,subtree:!0,characterData:!0})],o.prototype,"_handleLightDOMChange",1);a([B("value")],o.prototype,"_handleValueChange",1);a([B("open")],o.prototype,"_handleOpenChange",1);o=a([q("gds-dropdown",{dependsOn:[H,F,A,Z,j]}),P()],o);export{o as G};
