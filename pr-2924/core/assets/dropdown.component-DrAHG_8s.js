import{i as Z,v as j,a2 as ce,n as l,$ as O,z as ee,T as te,d as u,h as c,g as R,f as se,J as ue,y as ge,Q as fe,I as be,H as ve,a0 as me,E,W as ye,o as _e,A as xe}from"./iframe-c0lJwxcK.js";import{l as we}from"./localized-decorator-BvLFbsUv.js";import{r as $e}from"./query-async-B19tm3g_.js";import{o as Ce}from"./icon.component-BJPblfJ5.js";import{o as Ee,f as ke}from"./floating-ui.dom-DPpwG6Py.js";import{f as Me,G as Se}from"./form-control-host.style-Bgf6qDLT.js";import{G as We,a as Le}from"./form-control-header.component-YSto-Ent.js";import{n as Oe,e as Te}from"./ref-tqwGQqzO.js";import{s as Ae,F as Pe,L as Be,u as De}from"./unwrap-slots-ClMFbPEn.js";import{I as ie}from"./checkmark.component-DRLQgOq-.js";import{c as Fe}from"./rbcb-toggle.template--Cb-Bvau.js";import{I as ze}from"./chevron-bottom.component-CgO5qFIx.js";import{I as Ie}from"./cross-small.component-CmRBPOWe.js";import{G as ae}from"./popover.component-CTz4bwpD.js";const Ge=Z`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
      overscroll-behavior: contain;
    }
  }
`;var He=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,oe=e=>{throw TypeError(e)},_=(e,t,s,n)=>{for(var a=n>1?void 0:n?Ve(t,s):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(a=(n?p(t,s,a):p(a))||a);return n&&a&&He(t,s,a),a},U=(e,t,s)=>t.has(e)||oe("Cannot "+s),N=(e,t,s)=>(U(e,t,"read from private field"),s?s.call(e):t.get(e)),J=(e,t,s)=>t.has(e)?oe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),qe=(e,t,s,n)=>(U(e,t,"write to private field"),t.set(e,s),s),Q=(e,t,s)=>(U(e,t,"access private method"),s),x,S,P;let g=class extends Pe(ee){constructor(){super(),J(this,S),J(this,x,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",Q(this,S,P)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),Q(this,S,P).call(this,e))})}get hidden(){return N(this,x)}set hidden(e){const t=e.toString();qe(this,x,t==="true"),N(this,x)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),te.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){const e=this.parentElement?.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),c`<div class="item">
      ${u(e,()=>Fe({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};x=new WeakMap;S=new WeakSet;P=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};g.styles=[j,ce,Ae];_([l()],g.prototype,"value",2);_([l({type:Boolean,reflect:!0})],g.prototype,"hidden",1);_([l({attribute:"aria-selected",reflect:!0})],g.prototype,"selected",2);_([l({type:Boolean,reflect:!0})],g.prototype,"isPlaceholder",2);_([O("isPlaceholder")],g.prototype,"_handlePlaceholderStatusChange",1);g=_([R("gds-option",{dependsOn:[ie]})],g);var Re=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,re=e=>{throw TypeError(e)},T=(e,t,s,n)=>{for(var a=n>1?void 0:n?Ue(t,s):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(a=(n?p(t,s,a):p(a))||a);return n&&a&&Re(t,s,a),a},Ke=(e,t,s)=>t.has(e)||re("Cannot "+s),k=(e,t,s)=>(Ke(e,t,"read from private field"),s?s.call(e):t.get(e)),X=(e,t,s)=>t.has(e)?re("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),w,B;let v=class extends ee{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,X(this,w,Te()),X(this,B,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})}),new Be(this)}get navigableItems(){return this.visibleOptionElements}get options(){return k(this,w).value?De(k(this,w).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),te.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",k(this,B))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return c`<slot ${Oe(k(this,w))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};w=new WeakMap;B=new WeakMap;v.styles=Ge;T([l({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);T([l()],v.prototype,"compareWith",2);T([O("multiple")],v.prototype,"_rerenderOptions",1);v=T([R("gds-listbox",{dependsOn:[g]})],v);const Ne=Z`
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
      border-color: var(--gds-sys-color-border-neutral-01);
      border-width: 0 0 var(--gds-sys-space-5xs) 0;
      border-style: solid;
      width: 100%;
      padding: var(--gds-sys-space-m);
      font-weight: var(--gds-sys-text-weight-regular);
      flex: 1;
      box-sizing: border-box;
      font-family: inherit;

      &:focus {
        border-color: var(--gds-sys-color-border-neutral-01);
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
`;var Je=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,le=e=>{throw TypeError(e)},r=(e,t,s,n)=>{for(var a=n>1?void 0:n?Qe(t,s):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(a=(n?p(t,s,a):p(a))||a);return n&&a&&Je(t,s,a),a},K=(e,t,s)=>t.has(e)||le("Cannot "+s),i=(e,t,s)=>(K(e,t,"read from private field"),t.get(e)),h=(e,t,s)=>t.has(e)?le("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Xe=(e,t,s,n)=>(K(e,t,"write to private field"),t.set(e,s),s),M=(e,t,s)=>(K(e,t,"access private method"),s),b,m,ne,D,F,W,z,f,I,G,L,H,V,q,he,$,C,de,pe,y,A;let o=class extends me{constructor(){super(...arguments),h(this,m),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,h(this,b),h(this,D,()=>c`
      <input
        id="trigger"
        role="combobox"
        class="native-control"
        aria-expanded="${this.open}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        placeholder="${this.placeholder?.innerHTML}"
        name="trigger"
        aria-label="${this.label} ${this.displayValue}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
        .value=${this.value}
        @click=${e=>{e.stopImmediatePropagation()}}
        @input=${e=>{this.value=e.target.value,i(this,$).call(this),i(this,L).call(this,e),i(this,f).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{e.key==="ArrowDown"&&(e.preventDefault(),i(this,f).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(t=>t.focus())),e.key==="Enter"&&i(this,C).call(this)}}
      />
    `),h(this,F,()=>c`
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
          <span>${Ce(this.displayValue)}</span>
        </slot>
      </button>
    `),h(this,W,e=>{this.open||this.dispatchCustomEvent("gds-blur",{detail:{relatedTarget:e.relatedTarget},bubbles:!1,composed:!0})}),h(this,z,e=>{if(this.combobox){const s=e.getBoundingClientRect(),a=window.innerHeight-s.bottom,d=s.top;let p=Math.min(d,this.maxHeight);return a>d&&(p=Math.min(a,this.maxHeight)),`${p-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),h(this,f,(e,t)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1})),h(this,I,e=>{i(this,f).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),h(this,G,e=>{e.preventDefault(),e.stopPropagation(),this.value=void 0,this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),i(this,$).call(this),i(this,C).call(this)}),h(this,L,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const s=e.currentTarget;if(this.options.forEach(a=>a.hidden=!1),!s.value)return;this.options.filter(a=>!this.searchFilter(s.value,a)).forEach(a=>a.hidden=!0)}),h(this,H,e=>{this._elListbox?.then(t=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),t.focus();return}})}),h(this,V,e=>{if(e.key==="Tab"&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),h(this,q,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),h(this,$,()=>{this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))}),h(this,C,()=>{this.updateComplete.then(()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),h(this,y,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&i(this,f).call(this,!1,"close")&&(this.open=!1)}),h(this,A,e=>{e.key==="Tab"&&!this.searchable&&i(this,f).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())})}get type(){return"gds-dropdown"}get options(){return i(this,b)?Array.from(i(this,b)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(i(this,b))return Array.from(i(this,b)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){let e;return Array.isArray(this.value)?e=this.value.slice(0,5).reduce((t,s)=>t+this.options.find(n=>n.value===s)?.innerText+", ","").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):e=this.options.find(t=>t.selected)?.innerText,e||this.placeholder?.innerText||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",i(this,W)),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",i(this,W))}render(){return c`
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
        .calcMaxHeight=${i(this,z)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[Ee(8),ke()]:ae.DefaultMiddleware}
        @gds-ui-state=${i(this,I)}
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
          ${u(this.clearable&&!this.disabled&&(Array.isArray(this.value)?this.value.length>0:!!this.value),()=>c`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${this.size==="small"?"xs":"small"}
                label="${E("Clear selection")}"
                @click=${i(this,G)}
                slot="action"
              >
                <gds-icon-cross-small></gds-icon-cross-small>
              </gds-button>`)}
          ${u(this.combobox&&!this.multiple,()=>i(this,D).call(this))}
          ${u(!this.combobox||this.multiple,()=>i(this,F).call(this))}
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
              @keydown=${i(this,H)}
              @input=${i(this,L)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${_e(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${M(this,m,he)}"
          @gds-focus="${i(this,q)}"
          @keydown=${i(this,V)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${u(M(this,m,ne).call(this),()=>c`
          <gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.invalid?this.errorMessage:xe}
            </slot>
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){if(this.requestUpdate(),Xe(this,b,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:!this.combobox&&!this.placeholder&&this.options.find(e=>this.compareWith(e.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value),this._handleValueChange()}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?M(this,m,de).call(this):(M(this,m,pe).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t?.scrollIntoView({block:"center"})})}};b=new WeakMap;m=new WeakSet;ne=function(){return!this.plain};D=new WeakMap;F=new WeakMap;W=new WeakMap;z=new WeakMap;f=new WeakMap;I=new WeakMap;G=new WeakMap;L=new WeakMap;H=new WeakMap;V=new WeakMap;q=new WeakMap;he=function(){this._elListbox.then(e=>{this.multiple?this.value=e.selection.map(t=>t.value):(this.value=e.selection[0]?.value,i(this,f).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0))),i(this,$).call(this),i(this,C).call(this)})};$=new WeakMap;C=new WeakMap;de=function(){this.addEventListener("blur",i(this,y)),this.addEventListener("gds-blur",i(this,y)),this.addEventListener("keydown",i(this,A))};pe=function(){this.removeEventListener("blur",i(this,y)),this.removeEventListener("gds-blur",i(this,y)),this.removeEventListener("keydown",i(this,A))};y=new WeakMap;A=new WeakMap;o.styles=[j,Me,Ne];r([l({attribute:"supporting-text"})],o.prototype,"supportingText",2);r([l({type:Boolean,reflect:!0})],o.prototype,"open",2);r([l({type:Boolean,reflect:!0})],o.prototype,"searchable",2);r([l({type:Boolean,reflect:!0})],o.prototype,"multiple",2);r([l({type:Boolean,reflect:!0})],o.prototype,"clearable",2);r([l({type:Boolean,reflect:!0})],o.prototype,"combobox",2);r([l()],o.prototype,"compareWith",2);r([l()],o.prototype,"searchFilter",2);r([l({type:Boolean,attribute:"sync-popover-width"})],o.prototype,"syncPopoverWidth",2);r([l({type:Number,attribute:"max-height"})],o.prototype,"maxHeight",2);r([l({reflect:!0})],o.prototype,"size",2);r([l({type:Boolean,attribute:"hide-label"})],o.prototype,"hideLabel",2);r([l({type:Boolean})],o.prototype,"plain",2);r([l({type:Boolean})],o.prototype,"disableMobileStyles",2);r([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],o.prototype,"showExtendedSupportingText",2);r([se("#trigger")],o.prototype,"_elTriggerBtn",2);r([$e("#listbox")],o.prototype,"_elListbox",2);r([se("#searchinput")],o.prototype,"_elSearchInput",2);r([ue({attributes:!0,childList:!0,subtree:!0,characterData:!0})],o.prototype,"_handleLightDOMChange",1);r([O("value")],o.prototype,"_handleValueChange",1);r([O("open")],o.prototype,"_handleOpenChange",1);o=r([ge({labelledBy:"#trigger",describedBy:"#trigger",errorMessage:"#trigger"}),we()],o);let Y=class extends fe(be(ve(o))){};Y=r([R("gds-dropdown",{dependsOn:[We,Le,Se,v,ae,ie,ze,Ie]})],Y);export{g as G,Y as a};
