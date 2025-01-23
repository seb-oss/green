import{m as M,s as ee}from"./runtime-CMQcyTl6.js";import{l as te}from"./localized-decorator-iufJoRiP.js";import{n,g as F,h as p,G as q}from"./custom-element-scoping-BRwcB39g.js";import{a as R}from"./query-p8xgzTDt.js";import{r as se}from"./query-async-MEroNOeJ.js";import{o as ie}from"./if-defined-Ct9lF4W9.js";import{o as re}from"./icon-B0MZHPzy.js";import{n as v}from"./when-BR7zwNJC.js";import{t as K}from"./tokens.style-ORrtMT1R.js";import{o as oe}from"./observe-light-dom-CmJPHUQ4.js";import{w as C}from"./watch-tFciLXSI.js";import{a as ae}from"./button-91mdixU4.js";import{i as N}from"./lit-element-C_s9q329.js";import"./field-base-Bgn4HPzP.js";import{n as le,e as ne}from"./ref-D_ho-JAG.js";import{T as U}from"./transitional-styles-DmGQO-4x.js";import{s as he,F as de,L as pe,u as ce}from"./menu-heading-XFxs8GKd.js";import{e as ue}from"./class-map-Bz98xO8-.js";import"./checkmark-U2REtlhW.js";import"./chevron-bottom-bIUUPBrH.js";import"./popover-Sgqol2dX.js";import"./backdrop-ec3yctIc.js";const ge=N`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: var(--gds-space-xs);
      contain: layout;
      isolation: isolate;
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

    [aria-expanded='true'] [slot='trail'] {
      transform: scaleY(-1);
    }
  }
`,fe=N`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var ve=Object.defineProperty,me=Object.getOwnPropertyDescriptor,Y=e=>{throw TypeError(e)},y=(e,t,s,i)=>{for(var r=i>1?void 0:i?me(t,s):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(r=(i?d(t,s,r):d(r))||r);return i&&r&&ve(t,s,r),r},H=(e,t,s)=>t.has(e)||Y("Cannot "+s),be=(e,t,s)=>(H(e,t,"read from private field"),s?s.call(e):t.get(e)),G=(e,t,s)=>t.has(e)?Y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),x=(e,t,s,i)=>(H(e,t,"write to private field"),t.set(e,s),s),V=(e,t,s)=>(H(e,t,"access private method"),s),f,E,A;let g=class extends de(q){constructor(){super(),G(this,E),G(this,f,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",V(this,E,A)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),V(this,E,A).call(this,e))})}get hidden(){return be(this,f)}set hidden(e){this.isPlaceholder||(x(this,f,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(x(this,f,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>U.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(x(this,f,!0),this.setAttribute("aria-hidden","true")):(x(this,f,!1),this.setAttribute("aria-hidden","false"))}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple,t=p`
      <span class="checkbox ${ue({checked:this.selected})}">
        ${this.selected?p`<gds-icon-checkmark
              width="10"
              height="10"
              stroke="4"
            ></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),p`<div>${v(e,()=>t)} <slot></slot></div>`}};f=new WeakMap;E=new WeakSet;A=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};g.styles=[K,he];y([n()],g.prototype,"value",2);y([n({attribute:"aria-hidden",reflect:!0})],g.prototype,"hidden",1);y([n({attribute:"aria-selected",reflect:!0})],g.prototype,"selected",2);y([n({type:Boolean,reflect:!0})],g.prototype,"isPlaceholder",2);y([C("isplaceholder")],g.prototype,"_handlePlaceholderStatusChange",1);g=y([F("gds-option")],g);var ye=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,J=e=>{throw TypeError(e)},L=(e,t,s,i)=>{for(var r=i>1?void 0:i?_e(t,s):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(r=(i?d(t,s,r):d(r))||r);return i&&r&&ye(t,s,r),r},we=(e,t,s)=>t.has(e)||J("Cannot "+s),$=(e,t,s)=>(we(e,t,"read from private field"),s?s.call(e):t.get(e)),I=(e,t,s)=>t.has(e)?J("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),_,O;let m=class extends q{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,I(this,_,ne()),I(this,O,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new pe(this)}get navigableItems(){return this.visibleOptionElements}get options(){return $(this,_).value?ce($(this,_).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),U.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",$(this,O))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return p`<slot ${le($(this,_))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};_=new WeakMap;O=new WeakMap;m.styles=fe;L([n({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],m.prototype,"multiple",2);L([n()],m.prototype,"compareWith",2);L([C("multiple")],m.prototype,"_rerenderOptions",1);m=L([F("gds-listbox")],m);var xe=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,Q=e=>{throw TypeError(e)},a=(e,t,s,i)=>{for(var r=i>1?void 0:i?$e(t,s):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(r=(i?d(t,s,r):d(r))||r);return i&&r&&xe(t,s,r),r},z=(e,t,s)=>t.has(e)||Q("Cannot "+s),h=(e,t,s)=>(z(e,t,"read from private field"),t.get(e)),c=(e,t,s)=>t.has(e)?Q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Ee=(e,t,s,i)=>(z(e,t,"write to private field"),t.set(e,s),s),S=(e,t,s)=>(z(e,t,"access private method"),s),u,W,T,P,D,B,w,X,Z,j,b,k;let o=class extends ae{constructor(){super(...arguments),c(this,w),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,c(this,u),c(this,W,e=>{const t=e.getBoundingClientRect(),i=window.innerHeight-t.bottom,r=t.top;let l=Math.min(r,this.maxHeight);return i>r&&(l=Math.min(i,this.maxHeight)),`${l-16}px`}),c(this,T,e=>{if(!e.currentTarget)return;e.stopPropagation();const t=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!t.value)return;this.options.filter(i=>!this.searchFilter(t.value,i)).forEach(i=>i.hidden=!0)}),c(this,P,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),c(this,D,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),c(this,B,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),c(this,b,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),c(this,k,e=>{var t;e.key==="Tab"&&!this.searchable&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())})}get type(){return"gds-dropdown"}get options(){return h(this,u)?Array.from(h(this,u)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(h(this,u))return Array.from(h(this,u)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=M(ee`${this.value.length} selected`):e=this.value.reduce((i,r)=>{var l;return i+((l=this.options.find(d=>d.value===r))==null?void 0:l.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(i=>i.selected))==null?void 0:t.innerHTML,e||((s=this.placeholder)==null?void 0:s.innerHTML)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return p`
      ${v(!this.hideLabel,()=>p`
          <gds-form-control-header>
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${v(this.supportingText.length>0,()=>p`<span slot="supporting-text" id="supporting-text">
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
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${h(this,W)}
        .disableMobileStyles=${this.disableMobileStyles}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
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
              <span>${re(this.displayValue)}</span>
            </slot>
          </button>
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${v(this.searchable,()=>p`<input
              id="searchinput"
              type="text"
              aria-label="${M("Filter available options")}"
              placeholder="${M("Search")}"
              @keydown=${h(this,P)}
              @input=${h(this,T)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${ie(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${S(this,w,X)}"
          @gds-focus="${h(this,B)}"
          @keydown=${h(this,D)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${v(!this.hideLabel,()=>p`
          <gds-form-control-footer class="size-${this.size}">
            ${v(this.invalid,()=>p`
                <slot id="message" name="message" slot="message">
                  <gds-icon-triangle-exclamation
                    solid
                  ></gds-icon-triangle-exclamation>
                  ${this.errorMessage||this.validationMessage}
                </slot>
              `)}
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),Ee(this,u,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){var s;const e=this.open;(s=h(this,u))==null||s.forEach(i=>i.hidden=!e),e?S(this,w,Z).call(this):(S(this,w,j).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(i=>i.selected);this.updateComplete.then(()=>t==null?void 0:t.scrollIntoView()),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};u=new WeakMap;W=new WeakMap;T=new WeakMap;P=new WeakMap;D=new WeakMap;B=new WeakMap;w=new WeakSet;X=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,this.open=!1,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};Z=function(){this.addEventListener("blur",h(this,b)),this.addEventListener("gds-blur",h(this,b)),this.addEventListener("keydown",h(this,k))};j=function(){this.removeEventListener("blur",h(this,b)),this.removeEventListener("gds-blur",h(this,b)),this.removeEventListener("keydown",h(this,k))};b=new WeakMap;k=new WeakMap;o.styles=[K,ge];a([n({attribute:"supporting-text"})],o.prototype,"supportingText",2);a([n({type:Boolean,reflect:!0})],o.prototype,"open",2);a([n({type:Boolean,reflect:!0})],o.prototype,"searchable",2);a([n({type:Boolean,reflect:!0})],o.prototype,"multiple",2);a([n()],o.prototype,"compareWith",2);a([n()],o.prototype,"searchFilter",2);a([n({type:Boolean,attribute:"sync-popover-width"})],o.prototype,"syncPopoverWidth",2);a([n({type:Number,attribute:"max-height"})],o.prototype,"maxHeight",2);a([n()],o.prototype,"size",2);a([n({type:Boolean,attribute:"hide-label"})],o.prototype,"hideLabel",2);a([n()],o.prototype,"disableMobileStyles",2);a([R("#trigger")],o.prototype,"_elTriggerBtn",2);a([se("#listbox")],o.prototype,"_elListbox",2);a([R("#searchinput")],o.prototype,"_elSearchInput",2);a([oe({attributes:!0,childList:!0,subtree:!0,characterData:!0})],o.prototype,"_handleLightDOMChange",1);a([C("value")],o.prototype,"_handleValueChange",1);a([C("open")],o.prototype,"_onOpenChange",1);o=a([F("gds-dropdown"),te()],o);
