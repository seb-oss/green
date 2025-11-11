import{m as E,s as ce,l as ue}from"./runtime-CNluP0A8.js";import{i as Z,E as ge}from"./lit-element-Bx14lxc-.js";import{n}from"./Reflect-DJ7r0WLU.js";import{a as j}from"./query-p8xgzTDt.js";import{r as fe}from"./query-async-MEroNOeJ.js";import{o as be}from"./if-defined-CVqwUuaf.js";import{o as me}from"./unsafe-html-CYO4avEf.js";import{n as u}from"./when-BR7zwNJC.js";import{o as ve,f as ye}from"./floating-ui.dom-BmFOYU71.js";import{f as _e,G as xe}from"./form-control-host.style-BNxo0jP1.js";import{G as we,a as $e}from"./form-control-header.component-D_Yz-lGW.js";import{n as Ce,e as Ee}from"./ref-R0wBYijq.js";import{h as c,g as R,G as ee}from"./gds-element-DTROifYq.js";import{c as ke,T as te}from"./transitional-styles-Cp5Oq-hX.js";import{s as Me,F as Se,L as Le,u as Te}from"./unwrap-slots-CdkSbl-V.js";import{w as W}from"./watch-tFciLXSI.js";import{I as se}from"./checkmark.component-B7EWT7bF.js";import{c as We}from"./rbcb-toggle.template-DqXF-ZkM.js";import{t as ie}from"./tokens.style-DeseHqaM.js";import{o as Oe}from"./observe-light-dom-CmJPHUQ4.js";import{w as Ae,b as Pe,d as De}from"./declarative-layout-mixins-C4FFYA_h.js";import{a as Be}from"./button.component-C2sgS_dm.js";import{I as Fe}from"./chevron-bottom.component-CqVznPhR.js";import{I as Ge}from"./cross-small.component-D-53T6Cl.js";import{G as oe}from"./popover.component-DDJScLhz.js";const ze=Z`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
      overscroll-behavior: contain;
    }
  }
`;var Ie=Object.defineProperty,He=Object.getOwnPropertyDescriptor,ae=e=>{throw TypeError(e)},_=(e,t,s,l)=>{for(var i=l>1?void 0:l?He(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(l?p(t,s,i):p(i))||i);return l&&i&&Ie(t,s,i),i},U=(e,t,s)=>t.has(e)||ae("Cannot "+s),N=(e,t,s)=>(U(e,t,"read from private field"),s?s.call(e):t.get(e)),X=(e,t,s)=>t.has(e)?ae("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Ve=(e,t,s,l)=>(U(e,t,"write to private field"),t.set(e,s),s),Y=(e,t,s)=>(U(e,t,"access private method"),s),x,S,P;let g=class extends Se(ee){constructor(){super(),X(this,S),X(this,x,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",Y(this,S,P)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),Y(this,S,P).call(this,e))})}get hidden(){return N(this,x)}set hidden(e){const t=e.toString();Ve(this,x,t==="true"),N(this,x)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),te.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){var t;const e=(t=this.parentElement)==null?void 0:t.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),c`<div class="item">
      ${u(e,()=>We({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};x=new WeakMap;S=new WeakSet;P=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};g.styles=[ie,ke,Me];_([n()],g.prototype,"value",2);_([n({type:Boolean,reflect:!0})],g.prototype,"hidden",1);_([n({attribute:"aria-selected",reflect:!0})],g.prototype,"selected",2);_([n({type:Boolean,reflect:!0})],g.prototype,"isPlaceholder",2);_([W("isPlaceholder")],g.prototype,"_handlePlaceholderStatusChange",1);g=_([R("gds-option",{dependsOn:[se]})],g);var qe=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,re=e=>{throw TypeError(e)},O=(e,t,s,l)=>{for(var i=l>1?void 0:l?Re(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(l?p(t,s,i):p(i))||i);return l&&i&&qe(t,s,i),i},Ue=(e,t,s)=>t.has(e)||re("Cannot "+s),k=(e,t,s)=>(Ue(e,t,"read from private field"),s?s.call(e):t.get(e)),J=(e,t,s)=>t.has(e)?re("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),w,D;let m=class extends ee{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,J(this,w,Ee()),J(this,D,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})}),new Le(this)}get navigableItems(){return this.visibleOptionElements}get options(){return k(this,w).value?Te(k(this,w).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),te.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",k(this,D))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return c`<slot ${Ce(k(this,w))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};w=new WeakMap;D=new WeakMap;m.styles=ze;O([n({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],m.prototype,"multiple",2);O([n()],m.prototype,"compareWith",2);O([W("multiple")],m.prototype,"_rerenderOptions",1);m=O([R("gds-listbox",{dependsOn:[g]})],m);const Ke=Z`
  @layer base, reset;

  @layer base {
    :host {
      isolation: auto;
      contain: none;
    }

    #field::part(_base) {
      cursor: pointer;
      block-size: auto;
    }

    #clear-btn {
      margin-top: calc(-1 * var(--gds-sys-space-xs));
      margin-bottom: calc(-1 * var(--gds-sys-space-xs));
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
`;var Ne=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,le=e=>{throw TypeError(e)},r=(e,t,s,l)=>{for(var i=l>1?void 0:l?Xe(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(l?p(t,s,i):p(i))||i);return l&&i&&Ne(t,s,i),i},K=(e,t,s)=>t.has(e)||le("Cannot "+s),o=(e,t,s)=>(K(e,t,"read from private field"),t.get(e)),d=(e,t,s)=>t.has(e)?le("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Ye=(e,t,s,l)=>(K(e,t,"write to private field"),t.set(e,s),s),M=(e,t,s)=>(K(e,t,"access private method"),s),b,v,ne,B,F,L,G,f,z,I,T,H,V,q,he,$,C,de,pe,y,A;let a=class extends Be{constructor(){super(...arguments),d(this,v),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,d(this,b),d(this,B,()=>{var e;return c`
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
    `}),d(this,F,()=>c`
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
          <span>${me(this.displayValue)}</span>
        </slot>
      </button>
    `),d(this,L,e=>{this.open||this.dispatchCustomEvent("gds-blur",{detail:{relatedTarget:e.relatedTarget},bubbles:!1,composed:!0})}),d(this,G,e=>{if(this.combobox){const s=e.getBoundingClientRect(),i=window.innerHeight-s.bottom,h=s.top;let p=Math.min(h,this.maxHeight);return i>h&&(p=Math.min(i,this.maxHeight)),`${p-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),d(this,f,(e,t)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1})),d(this,z,e=>{o(this,f).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),d(this,I,e=>{e.preventDefault(),e.stopPropagation(),this.value=void 0,this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),o(this,$).call(this),o(this,C).call(this)}),d(this,T,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const s=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!s.value)return;this.options.filter(i=>!this.searchFilter(s.value,i)).forEach(i=>i.hidden=!0)}),d(this,H,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),d(this,V,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),d(this,q,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),d(this,$,()=>{this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))}),d(this,C,()=>{this.updateComplete.then(()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),d(this,y,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&o(this,f).call(this,!1,"close")&&(this.open=!1)}),d(this,A,e=>{var t;e.key==="Tab"&&!this.searchable&&o(this,f).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())})}get type(){return"gds-dropdown"}get options(){return o(this,b)?Array.from(o(this,b)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(o(this,b))return Array.from(o(this,b)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?e=this.value.slice(0,5).reduce((l,i)=>{var h;return l+((h=this.options.find(p=>p.value===i))==null?void 0:h.innerText)+", "},"").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):e=(t=this.options.find(l=>l.selected))==null?void 0:t.innerText,e||((s=this.placeholder)==null?void 0:s.innerText)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",o(this,L)),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",o(this,L))}render(){return c`
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
        .calcMaxHeight=${o(this,G)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[ve(8),ye()]:oe.DefaultMiddleware}
        @gds-ui-state=${o(this,z)}
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
                aria-label=${E(ce`${this.value.length} options selected`)}
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
          ${u(this.combobox&&!this.multiple,()=>o(this,B).call(this))}
          ${u(!this.combobox||this.multiple,()=>o(this,F).call(this))}
          <gds-icon-chevron-bottom slot="action"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${u(this.searchable,()=>c`<input
              id="searchinput"
              type="text"
              aria-label="${E("Filter available options")}"
              placeholder="${E("Search")}"
              @keydown=${o(this,H)}
              @input=${o(this,T)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${be(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${M(this,v,he)}"
          @gds-focus="${o(this,q)}"
          @keydown=${o(this,V)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${u(M(this,v,ne).call(this),()=>c`
          <gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.invalid?this.errorMessage:ge}
            </slot>
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),Ye(this,b,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.combobox&&!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?M(this,v,de).call(this):(M(this,v,pe).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t==null||t.scrollIntoView({block:"center"})})}};b=new WeakMap;v=new WeakSet;ne=function(){return!this.plain};B=new WeakMap;F=new WeakMap;L=new WeakMap;G=new WeakMap;f=new WeakMap;z=new WeakMap;I=new WeakMap;T=new WeakMap;H=new WeakMap;V=new WeakMap;q=new WeakMap;he=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,o(this,f).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0))),o(this,$).call(this),o(this,C).call(this)})};$=new WeakMap;C=new WeakMap;de=function(){this.addEventListener("blur",o(this,y)),this.addEventListener("gds-blur",o(this,y)),this.addEventListener("keydown",o(this,A))};pe=function(){this.removeEventListener("blur",o(this,y)),this.removeEventListener("gds-blur",o(this,y)),this.removeEventListener("keydown",o(this,A))};y=new WeakMap;A=new WeakMap;a.styles=[ie,_e,Ke];r([n({attribute:"supporting-text"})],a.prototype,"supportingText",2);r([n({type:Boolean,reflect:!0})],a.prototype,"open",2);r([n({type:Boolean,reflect:!0})],a.prototype,"searchable",2);r([n({type:Boolean,reflect:!0})],a.prototype,"multiple",2);r([n({type:Boolean,reflect:!0})],a.prototype,"clearable",2);r([n({type:Boolean,reflect:!0})],a.prototype,"combobox",2);r([n()],a.prototype,"compareWith",2);r([n()],a.prototype,"searchFilter",2);r([n({type:Boolean,attribute:"sync-popover-width"})],a.prototype,"syncPopoverWidth",2);r([n({type:Number,attribute:"max-height"})],a.prototype,"maxHeight",2);r([n({reflect:!0})],a.prototype,"size",2);r([n({type:Boolean,attribute:"hide-label"})],a.prototype,"hideLabel",2);r([n({type:Boolean})],a.prototype,"plain",2);r([n({type:Boolean})],a.prototype,"disableMobileStyles",2);r([n({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],a.prototype,"showExtendedSupportingText",2);r([j("#trigger")],a.prototype,"_elTriggerBtn",2);r([fe("#listbox")],a.prototype,"_elListbox",2);r([j("#searchinput")],a.prototype,"_elSearchInput",2);r([Oe({attributes:!0,childList:!0,subtree:!0,characterData:!0})],a.prototype,"_handleLightDOMChange",1);r([W("value")],a.prototype,"_handleValueChange",1);r([W("open")],a.prototype,"_handleOpenChange",1);a=r([ue()],a);let Q=class extends Ae(Pe(De(a))){};Q=r([R("gds-dropdown",{dependsOn:[we,$e,xe,m,oe,se,Fe,Ge]})],Q);export{Q as G,g as a};
