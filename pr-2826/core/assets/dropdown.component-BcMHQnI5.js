import{i as le,y as J,a1 as ne,n,U as G,B as he,T as X,d as f,h as g,a as Y,l as Q,K as de,D as pe,R as ce,z as ue,J as ge,a0 as fe,H as k,a9 as be,A as me}from"./iframe-NY0pB7lA.js";import{l as ve}from"./localized-decorator-CvI9_CFH.js";import{o as ye}from"./icon.component-DynT1T0a.js";import{o as xe,f as we}from"./floating-ui.dom-DPpwG6Py.js";import{G as _e}from"./field-base.component-Bk3Tgf5y.js";import{G as $e,a as Ce}from"./form-control-header.component-FZTmUq_k.js";import{f as ke}from"./form-control-host.style-D-t35chm.js";import{s as Me,F as Se,m as Ee,L as Te}from"./menu-listbox.style-DEg4_09V.js";import{I as Z}from"./checkmark.component-DiaclVHV.js";import{I as We}from"./chevron-bottom.component-DRli1qcO.js";import{I as Le}from"./cross-small.component-CwyjU3sd.js";import{G as j}from"./popover.component-6H3Wb9Ag.js";import{c as Ae}from"./rbcb-toggle.template-BQKQaLqz.js";const Be=le`
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
`;var De=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,ee=e=>{throw TypeError(e)},w=(e,t,s,l)=>{for(var i=l>1?void 0:l?Oe(t,s):t,d=e.length-1,c;d>=0;d--)(c=e[d])&&(i=(l?c(t,s,i):c(i))||i);return l&&i&&De(t,s,i),i},q=(e,t,s)=>t.has(e)||ee("Cannot "+s),R=(e,t,s)=>(q(e,t,"read from private field"),s?s.call(e):t.get(e)),U=(e,t,s)=>t.has(e)?ee("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Pe=(e,t,s,l)=>(q(e,t,"write to private field"),t.set(e,s),s),K=(e,t,s)=>(q(e,t,"access private method"),s),_,M,W;let b=class extends Se(he){constructor(){super(),U(this,M),U(this,_,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",K(this,M,W)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),K(this,M,W).call(this,e))})}get hidden(){return R(this,_)}set hidden(e){const t=e.toString();Pe(this,_,t==="true"),R(this,_)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),X.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){const e=this.parentElement?.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),g`<div class="item">
      ${f(e,()=>Ae({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};_=new WeakMap;M=new WeakSet;W=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};b.styles=[J,ne,Me];w([n()],b.prototype,"value",2);w([n({type:Boolean,reflect:!0})],b.prototype,"hidden",1);w([n({attribute:"aria-selected",reflect:!0,converter:{fromAttribute:e=>e==="true",toAttribute:e=>e?"true":"false"}})],b.prototype,"selected",2);w([n({type:Boolean,reflect:!0})],b.prototype,"isPlaceholder",2);w([G("isPlaceholder")],b.prototype,"_handlePlaceholderStatusChange",1);b=w([Y("gds-option",{dependsOn:[Z]})],b);var Fe=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,te=e=>{throw TypeError(e)},r=(e,t,s,l)=>{for(var i=l>1?void 0:l?ze(t,s):t,d=e.length-1,c;d>=0;d--)(c=e[d])&&(i=(l?c(t,s,i):c(i))||i);return l&&i&&Fe(t,s,i),i},V=(e,t,s)=>t.has(e)||te("Cannot "+s),a=(e,t,s)=>(V(e,t,"read from private field"),t.get(e)),h=(e,t,s)=>t.has(e)?te("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),L=(e,t,s,l)=>(V(e,t,"write to private field"),t.set(e,s),s),u=(e,t,s)=>(V(e,t,"access private method"),s),v,p,se,A,B,S,D,m,O,P,E,F,z,I,H,ie,ae,$,C,y,oe,re,x,T;let o=class extends fe{constructor(){super(),h(this,p),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,h(this,v),h(this,A,()=>g`
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
        @input=${e=>{u(this,p,y).call(this,e.target.value,{emitChange:!1}),a(this,E).call(this,e),a(this,m).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{e.key==="ArrowDown"&&(e.preventDefault(),a(this,m).call(this,!0,"show")&&(this.open=!0),this.updateComplete.then(()=>a(this,$).call(this))),e.key==="Enter"&&u(this,p,y).call(this,this.value,{emitInput:!1})}}
      />
    `),h(this,B,()=>g`
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
          <span>${ye(this.displayValue)}</span>
        </slot>
      </button>
    `),h(this,S,e=>{this.open||this.dispatchCustomEvent("gds-blur",{detail:{relatedTarget:e.relatedTarget},bubbles:!1,composed:!0})}),h(this,D,e=>{if(this.combobox){const s=e.getBoundingClientRect(),i=window.innerHeight-s.bottom,d=s.top;let c=Math.min(d,this.maxHeight);return i>d&&(c=Math.min(i,this.maxHeight)),`${c-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),h(this,m,(e,t)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1})),h(this,O,e=>{a(this,m).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),h(this,P,e=>{e.preventDefault(),e.stopPropagation(),u(this,p,y).call(this,void 0,{beforeDispatch:()=>this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0})})}),h(this,E,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const s=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!s.value)return;this.options.filter(i=>!this.searchFilter(s.value,i)).forEach(i=>i.hidden=!0)}),h(this,F,e=>{(e.key==="ArrowDown"||e.key==="Tab")&&(e.preventDefault(),a(this,$).call(this))}),h(this,z,e=>{if(e.key==="Tab"&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),h(this,I,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),h(this,H,e=>{const t=e.target;this.options.includes(t)&&(this.multiple?u(this,p,y).call(this,u(this,p,ie).call(this,t)):u(this,p,y).call(this,t.value,{beforeDispatch:()=>{a(this,m).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0))}}))}),h(this,$,()=>{this.updateComplete.then(()=>{const e=this.navigableItems;(e.find(t=>t.selected)||e[0])?.focus()})}),h(this,C,!1),h(this,x,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&a(this,m).call(this,!1,"close")&&(this.open=!1)}),h(this,T,e=>{e.key==="Tab"&&!this.searchable&&a(this,m).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())}),new Te(this)}get type(){return"gds-dropdown"}get options(){return a(this,v)?Array.from(a(this,v)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(a(this,v))return Array.from(a(this,v)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){if(this.value===void 0)return this.placeholder?.innerText||"";let e;return Array.isArray(this.value)?e=this.value.slice(0,5).reduce((t,s)=>t+this.options.find(l=>this.compareWith(l.value,s))?.innerText+", ","").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):e=this.options.find(t=>this.compareWith(t.value,this.value))?.innerText,e||this.placeholder?.innerText||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}get navigableItems(){return this.options.filter(e=>!e.hidden)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",a(this,S)),X.instance.applyScoped(this,"gds-dropdown","t-listbox"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleOpenChange()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",a(this,S))}render(){return g`
      ${f(!this.plain&&!this.hideLabel,()=>g`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${f(this.supportingText.length>0,()=>g`<span slot="supporting-text" id="supporting-text">
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
        .calcMaxHeight=${a(this,D)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[xe(8),we()]:j.DefaultMiddleware}
        @gds-ui-state=${a(this,O)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${f(this.value&&this.multiple&&this.value.length>0,()=>g`<gds-badge
                rounded
                size=${this.size==="small"?"small":"default"}
                slot="lead"
                aria-label=${k(be`${this.value.length} options selected`)}
              >
                ${this.value.length}</gds-badge
              >`)}
          ${f(this.clearable&&!this.disabled&&(Array.isArray(this.value)?this.value.length>0:!!this.value),()=>g`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${this.size==="small"?"xs":"small"}
                label="${k("Clear selection")}"
                @click=${a(this,P)}
                slot="action"
              >
                <gds-icon-cross-small></gds-icon-cross-small>
              </gds-button>`)}
          ${f(this.combobox&&!this.multiple,()=>a(this,A).call(this))}
          ${f(!this.combobox||this.multiple,()=>a(this,B).call(this))}
          <gds-icon-chevron-bottom
            size=${this.size==="small"?"m":"l"}
            slot="action"
          ></gds-icon-chevron-bottom>
        </gds-field-base>

        ${f(this.searchable,()=>g`<input
              id="searchinput"
              type="text"
              aria-label="${k("Filter available options")}"
              placeholder="${k("Search")}"
              @keydown=${a(this,F)}
              @input=${a(this,E)}
            />`)}
        <div
          id="listbox"
          class="menu-listbox"
          role="listbox"
          aria-multiselectable="${this.multiple}"
          tabindex="-1"
          @focus="${a(this,$)}"
          @gds-select="${a(this,H)}"
          @gds-focus="${a(this,I)}"
          @keydown=${a(this,z)}
        >
          <slot></slot>
        </div>
      </gds-popover>

      ${f(u(this,p,se).call(this),()=>g`
          <gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.invalid?this.errorMessage:me}
            </slot>
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){this.requestUpdate(),L(this,v,this.querySelectorAll("[gds-element=gds-option]")),!this.multiple&&(this.options.length===0&&!this.placeholder||(this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:!this.combobox&&!this.placeholder&&this.options.find(e=>this.compareWith(e.value,this.value))===void 0&&(this.value=this.options[0]?.value)))}updated(){u(this,p,ae).call(this)}_handleMultipleChange(){this.options.forEach(e=>e.requestUpdate())}get value(){return super.value}set value(e){a(this,C)||(super.value=e)}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?u(this,p,oe).call(this):(u(this,p,re).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t?.scrollIntoView({block:"center"})})}};v=new WeakMap;p=new WeakSet;se=function(){return!this.plain};A=new WeakMap;B=new WeakMap;S=new WeakMap;D=new WeakMap;m=new WeakMap;O=new WeakMap;P=new WeakMap;E=new WeakMap;F=new WeakMap;z=new WeakMap;I=new WeakMap;H=new WeakMap;ie=function(e){const t=Array.isArray(this.value)?this.value:[],s=i=>t.some(d=>this.compareWith(d,i)),l=!s(e.value);return this.options.filter(i=>i===e?l:s(i.value)).map(i=>i.value)};ae=function(){const e=this.multiple?Array.isArray(this.value)?this.value:[]:[this.value];this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})};$=new WeakMap;C=new WeakMap;y=function(e,t={}){const{emitInput:s=!0,emitChange:l=!0,beforeDispatch:i}=t;this.value=e,L(this,C,!0);try{i?.(),s&&this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}),l&&this.dispatchCustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0})}finally{L(this,C,!1)}};oe=function(){this.addEventListener("blur",a(this,x)),this.addEventListener("gds-blur",a(this,x)),this.addEventListener("keydown",a(this,T))};re=function(){this.removeEventListener("blur",a(this,x)),this.removeEventListener("gds-blur",a(this,x)),this.removeEventListener("keydown",a(this,T))};x=new WeakMap;T=new WeakMap;o.styles=[J,ke,Ee,Be];r([n({attribute:"supporting-text"})],o.prototype,"supportingText",2);r([n({type:Boolean,reflect:!0})],o.prototype,"open",2);r([n({type:Boolean,reflect:!0})],o.prototype,"searchable",2);r([n({type:Boolean,reflect:!0})],o.prototype,"multiple",2);r([n({type:Boolean,reflect:!0})],o.prototype,"clearable",2);r([n({type:Boolean,reflect:!0})],o.prototype,"combobox",2);r([n()],o.prototype,"compareWith",2);r([n()],o.prototype,"searchFilter",2);r([n({type:Boolean,attribute:"sync-popover-width"})],o.prototype,"syncPopoverWidth",2);r([n({type:Number,attribute:"max-height"})],o.prototype,"maxHeight",2);r([n({reflect:!0})],o.prototype,"size",2);r([n({type:Boolean,attribute:"hide-label"})],o.prototype,"hideLabel",2);r([n({type:Boolean})],o.prototype,"plain",2);r([n({type:Boolean})],o.prototype,"disableMobileStyles",2);r([n({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],o.prototype,"showExtendedSupportingText",2);r([Q("#trigger")],o.prototype,"_elTriggerBtn",2);r([Q("#searchinput")],o.prototype,"_elSearchInput",2);r([de({attributes:!0,attributeFilter:["gds-element","value","isplaceholder"],childList:!0,subtree:!0,characterData:!0})],o.prototype,"_handleLightDOMChange",1);r([G("multiple")],o.prototype,"_handleMultipleChange",1);r([G("open")],o.prototype,"_handleOpenChange",1);o=r([pe({labelledBy:"#trigger",describedBy:"#trigger",errorMessage:"#trigger"}),ve()],o);let N=class extends ce(ue(ge(o))){};N=r([Y("gds-dropdown",{dependsOn:[$e,Ce,_e,b,j,Z,We,Le]})],N);export{b as G,N as a};
