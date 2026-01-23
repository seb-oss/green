import{i as Z,t as j,ai as ce,n,a8 as O,J as ee,a3 as te,b as u,h as c,g as R,d as se,U as ue,a0 as ge,S as fe,Q as be,a9 as ve,o as me,O as E,a7 as ye,E as _e}from"./iframe-DMCXEGAu.js";import{l as xe}from"./localized-decorator-BZdAib6r.js";import{r as we}from"./query-async-R6IyWz66.js";import{o as $e}from"./icon.component-Biye4ssi.js";import{o as Ce,f as Ee}from"./floating-ui.dom-B1INwmQZ.js";import{f as ke,G as Se}from"./form-control-host.style-C25skd3j.js";import{G as Me,a as Le}from"./form-control-header.component-CiO1KsOp.js";import{n as We,e as Oe}from"./ref-BHw8Lwyk.js";import{s as Te,F as Ae,L as Pe,u as De}from"./unwrap-slots-wNymKo7B.js";import{I as ie}from"./checkmark.component-DQrtt9So.js";import{c as Be}from"./rbcb-toggle.template-BJL2ueSN.js";import{I as Fe}from"./chevron-bottom.component-DljMsFHf.js";import{I as ze}from"./cross-small.component-BXsopI24.js";import{G as ae}from"./popover.component-BMzFlfQP.js";const Ge=Z`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
      overscroll-behavior: contain;
    }
  }
`;var Ie=Object.defineProperty,He=Object.getOwnPropertyDescriptor,oe=e=>{throw TypeError(e)},_=(e,t,s,l)=>{for(var i=l>1?void 0:l?He(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(l?p(t,s,i):p(i))||i);return l&&i&&Ie(t,s,i),i},U=(e,t,s)=>t.has(e)||oe("Cannot "+s),N=(e,t,s)=>(U(e,t,"read from private field"),s?s.call(e):t.get(e)),J=(e,t,s)=>t.has(e)?oe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Ve=(e,t,s,l)=>(U(e,t,"write to private field"),t.set(e,s),s),Q=(e,t,s)=>(U(e,t,"access private method"),s),x,M,P;let g=class extends Ae(ee){constructor(){super(),J(this,M),J(this,x,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",Q(this,M,P)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),Q(this,M,P).call(this,e))})}get hidden(){return N(this,x)}set hidden(e){const t=e.toString();Ve(this,x,t==="true"),N(this,x)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),te.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){var t;const e=(t=this.parentElement)==null?void 0:t.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),c`<div class="item">
      ${u(e,()=>Be({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};x=new WeakMap;M=new WeakSet;P=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};g.styles=[j,ce,Te];_([n()],g.prototype,"value",2);_([n({type:Boolean,reflect:!0})],g.prototype,"hidden",1);_([n({attribute:"aria-selected",reflect:!0})],g.prototype,"selected",2);_([n({type:Boolean,reflect:!0})],g.prototype,"isPlaceholder",2);_([O("isPlaceholder")],g.prototype,"_handlePlaceholderStatusChange",1);g=_([R("gds-option",{dependsOn:[ie]})],g);var qe=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,re=e=>{throw TypeError(e)},T=(e,t,s,l)=>{for(var i=l>1?void 0:l?Re(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(l?p(t,s,i):p(i))||i);return l&&i&&qe(t,s,i),i},Ue=(e,t,s)=>t.has(e)||re("Cannot "+s),k=(e,t,s)=>(Ue(e,t,"read from private field"),s?s.call(e):t.get(e)),X=(e,t,s)=>t.has(e)?re("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),w,D;let v=class extends ee{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,X(this,w,Oe()),X(this,D,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})}),new Pe(this)}get navigableItems(){return this.visibleOptionElements}get options(){return k(this,w).value?De(k(this,w).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),te.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",k(this,D))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return c`<slot ${We(k(this,w))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};w=new WeakMap;D=new WeakMap;v.styles=Ge;T([n({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);T([n()],v.prototype,"compareWith",2);T([O("multiple")],v.prototype,"_rerenderOptions",1);v=T([R("gds-listbox",{dependsOn:[g]})],v);const Ke=Z`
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
`;var Ne=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,le=e=>{throw TypeError(e)},r=(e,t,s,l)=>{for(var i=l>1?void 0:l?Je(t,s):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(l?p(t,s,i):p(i))||i);return l&&i&&Ne(t,s,i),i},K=(e,t,s)=>t.has(e)||le("Cannot "+s),a=(e,t,s)=>(K(e,t,"read from private field"),t.get(e)),d=(e,t,s)=>t.has(e)?le("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Qe=(e,t,s,l)=>(K(e,t,"write to private field"),t.set(e,s),s),S=(e,t,s)=>(K(e,t,"access private method"),s),b,m,ne,B,F,L,z,f,G,I,W,H,V,q,he,$,C,de,pe,y,A;let o=class extends ve{constructor(){super(...arguments),d(this,m),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,d(this,b),d(this,B,()=>{var e;return c`
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
        @input=${t=>{this.value=t.target.value,a(this,$).call(this),a(this,W).call(this,t),a(this,f).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${t=>{t.key==="ArrowDown"&&(t.preventDefault(),a(this,f).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(s=>s.focus())),t.key==="Enter"&&a(this,C).call(this)}}
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
          <span>${$e(this.displayValue)}</span>
        </slot>
      </button>
    `),d(this,L,e=>{this.open||this.dispatchCustomEvent("gds-blur",{detail:{relatedTarget:e.relatedTarget},bubbles:!1,composed:!0})}),d(this,z,e=>{if(this.combobox){const s=e.getBoundingClientRect(),i=window.innerHeight-s.bottom,h=s.top;let p=Math.min(h,this.maxHeight);return i>h&&(p=Math.min(i,this.maxHeight)),`${p-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),d(this,f,(e,t)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1})),d(this,G,e=>{a(this,f).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),d(this,I,e=>{e.preventDefault(),e.stopPropagation(),this.value=void 0,this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),a(this,$).call(this),a(this,C).call(this)}),d(this,W,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const s=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!s.value)return;this.options.filter(i=>!this.searchFilter(s.value,i)).forEach(i=>i.hidden=!0)}),d(this,H,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),d(this,V,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),d(this,q,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),d(this,$,()=>{this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))}),d(this,C,()=>{this.updateComplete.then(()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),d(this,y,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&a(this,f).call(this,!1,"close")&&(this.open=!1)}),d(this,A,e=>{var t;e.key==="Tab"&&!this.searchable&&a(this,f).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())})}get type(){return"gds-dropdown"}get options(){return a(this,b)?Array.from(a(this,b)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(a(this,b))return Array.from(a(this,b)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?e=this.value.slice(0,5).reduce((l,i)=>{var h;return l+((h=this.options.find(p=>p.value===i))==null?void 0:h.innerText)+", "},"").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):e=(t=this.options.find(l=>l.selected))==null?void 0:t.innerText,e||((s=this.placeholder)==null?void 0:s.innerText)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",a(this,L)),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",a(this,L))}render(){return c`
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
        .calcMaxHeight=${a(this,z)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[Ce(8),Ee()]:ae.DefaultMiddleware}
        @gds-ui-state=${a(this,G)}
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
                aria-label=${E(ye`${this.value.length} options selected`)}
              >
                ${this.value.length}</gds-badge
              >`)}
          ${u(this.clearable&&this.value&&!this.disabled,()=>c`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${this.size==="small"?"xs":"small"}
                label="${E("Clear selection")}"
                @click=${a(this,I)}
                slot="action"
              >
                <gds-icon-cross-small></gds-icon-cross-small>
              </gds-button>`)}
          ${u(this.combobox&&!this.multiple,()=>a(this,B).call(this))}
          ${u(!this.combobox||this.multiple,()=>a(this,F).call(this))}
          <gds-icon-chevron-bottom
            size=${this.size==="small"?"m":"l"}
            slot="action"
          ></gds-icon-chevron-bottom>
        </gds-field-base>

        ${u(this.searchable,()=>c`<input
              id="searchinput"
              type="text"
              aria-label="${E("Filter available options")}"
              placeholder="${E("Search")}"
              @keydown=${a(this,H)}
              @input=${a(this,W)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${me(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${S(this,m,he)}"
          @gds-focus="${a(this,q)}"
          @keydown=${a(this,V)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${u(S(this,m,ne).call(this),()=>c`
          <gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.invalid?this.errorMessage:_e}
            </slot>
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),Qe(this,b,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.combobox&&!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?S(this,m,de).call(this):(S(this,m,pe).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t==null||t.scrollIntoView({block:"center"})})}};b=new WeakMap;m=new WeakSet;ne=function(){return!this.plain};B=new WeakMap;F=new WeakMap;L=new WeakMap;z=new WeakMap;f=new WeakMap;G=new WeakMap;I=new WeakMap;W=new WeakMap;H=new WeakMap;V=new WeakMap;q=new WeakMap;he=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,a(this,f).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0))),a(this,$).call(this),a(this,C).call(this)})};$=new WeakMap;C=new WeakMap;de=function(){this.addEventListener("blur",a(this,y)),this.addEventListener("gds-blur",a(this,y)),this.addEventListener("keydown",a(this,A))};pe=function(){this.removeEventListener("blur",a(this,y)),this.removeEventListener("gds-blur",a(this,y)),this.removeEventListener("keydown",a(this,A))};y=new WeakMap;A=new WeakMap;o.styles=[j,ke,Ke];r([n({attribute:"supporting-text"})],o.prototype,"supportingText",2);r([n({type:Boolean,reflect:!0})],o.prototype,"open",2);r([n({type:Boolean,reflect:!0})],o.prototype,"searchable",2);r([n({type:Boolean,reflect:!0})],o.prototype,"multiple",2);r([n({type:Boolean,reflect:!0})],o.prototype,"clearable",2);r([n({type:Boolean,reflect:!0})],o.prototype,"combobox",2);r([n()],o.prototype,"compareWith",2);r([n()],o.prototype,"searchFilter",2);r([n({type:Boolean,attribute:"sync-popover-width"})],o.prototype,"syncPopoverWidth",2);r([n({type:Number,attribute:"max-height"})],o.prototype,"maxHeight",2);r([n({reflect:!0})],o.prototype,"size",2);r([n({type:Boolean,attribute:"hide-label"})],o.prototype,"hideLabel",2);r([n({type:Boolean})],o.prototype,"plain",2);r([n({type:Boolean})],o.prototype,"disableMobileStyles",2);r([n({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],o.prototype,"showExtendedSupportingText",2);r([se("#trigger")],o.prototype,"_elTriggerBtn",2);r([we("#listbox")],o.prototype,"_elListbox",2);r([se("#searchinput")],o.prototype,"_elSearchInput",2);r([ue({attributes:!0,childList:!0,subtree:!0,characterData:!0})],o.prototype,"_handleLightDOMChange",1);r([O("value")],o.prototype,"_handleValueChange",1);r([O("open")],o.prototype,"_handleOpenChange",1);o=r([xe()],o);let Y=class extends ge(fe(be(o))){};Y=r([R("gds-dropdown",{dependsOn:[Me,Le,Se,v,ae,ie,Fe,ze]})],Y);export{g as G,Y as a};
