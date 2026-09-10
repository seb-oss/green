import{i as de,B as Q,a1 as pe,n as h,$ as R,D as ce,V as Z,d as f,h as g,a as j,l as ee,N as ue,F as ge,T as fe,C as be,L as ve,a0 as me,J as E,a9 as ye,A as xe}from"./iframe-Dz6-vQgF.js";import{l as we}from"./localized-decorator-4p4f9LY5.js";import{o as _e}from"./icon.component-BS_klImN.js";import{o as $e,f as Ce}from"./floating-ui.dom-DzQH3ivI.js";import{f as ke,G as Me}from"./form-control-host.style-628cZVIV.js";import{G as Ee,a as Se}from"./form-control-header.component-DbMX86ao.js";import{s as Le,F as Te,m as We,L as Ae}from"./menu-listbox.style-DSQlPsq9.js";import{I as te}from"./checkmark.component-fYR-bM0m.js";import{I as Pe}from"./chevron-bottom.component-g2SlWiSJ.js";import{I as De}from"./cross-small.component-BymhRheS.js";import{G as se}from"./popover.component-HVoI_ciC.js";import{c as Be}from"./rbcb-toggle.template-dsk3dHZy.js";const Oe=de`
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
`;var Fe=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,ie=e=>{throw TypeError(e)},w=(e,t,s,n)=>{for(var a=n>1?void 0:n?Ie(t,s):t,d=e.length-1,c;d>=0;d--)(c=e[d])&&(a=(n?c(t,s,a):c(a))||a);return n&&a&&Fe(t,s,a),a},U=(e,t,s)=>t.has(e)||ie("Cannot "+s),N=(e,t,s)=>(U(e,t,"read from private field"),s?s.call(e):t.get(e)),J=(e,t,s)=>t.has(e)?ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),ze=(e,t,s,n)=>(U(e,t,"write to private field"),t.set(e,s),s),X=(e,t,s)=>(U(e,t,"access private method"),s),_,S,A;let b=class extends Te(ce){constructor(){super(),J(this,S),J(this,_,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",X(this,S,A)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),X(this,S,A).call(this,e))})}get hidden(){return N(this,_)}set hidden(e){const t=e.toString();ze(this,_,t==="true"),N(this,_)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("tabindex","-1"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),Z.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){const e=this.parentElement?.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),g`<div class="item">
      ${f(e,()=>Be({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};_=new WeakMap;S=new WeakSet;A=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};b.styles=[Q,pe,Le];w([h()],b.prototype,"value",2);w([h({type:Boolean,reflect:!0})],b.prototype,"hidden",1);w([h({attribute:"aria-selected",reflect:!0,converter:{fromAttribute:e=>e==="true",toAttribute:e=>e?"true":"false"}})],b.prototype,"selected",2);w([h({type:Boolean,reflect:!0})],b.prototype,"isPlaceholder",2);w([R("isPlaceholder")],b.prototype,"_handlePlaceholderStatusChange",1);b=w([j("gds-option",{dependsOn:[te]})],b);var Ge=Object.defineProperty,He=Object.getOwnPropertyDescriptor,ae=e=>{throw TypeError(e)},r=(e,t,s,n)=>{for(var a=n>1?void 0:n?He(t,s):t,d=e.length-1,c;d>=0;d--)(c=e[d])&&(a=(n?c(t,s,a):c(a))||a);return n&&a&&Ge(t,s,a),a},K=(e,t,s)=>t.has(e)||ae("Cannot "+s),i=(e,t,s)=>(K(e,t,"read from private field"),t.get(e)),l=(e,t,s)=>t.has(e)?ae("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),k=(e,t,s,n)=>(K(e,t,"write to private field"),t.set(e,s),s),u=(e,t,s)=>(K(e,t,"access private method"),s),m,p,oe,P,D,L,B,v,O,F,T,I,z,G,H,re,le,$,C,V,q,M,y,ne,he,x,W;let o=class extends me{constructor(){super(),l(this,p),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,l(this,m),l(this,P,()=>g`
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
        @input=${e=>{u(this,p,y).call(this,e.target.value,{emitChange:!1}),i(this,T).call(this,e),i(this,v).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{e.key==="ArrowDown"&&(e.preventDefault(),i(this,v).call(this,!0,"show")&&(this.open=!0),this.updateComplete.then(()=>i(this,$).call(this))),e.key==="Enter"&&u(this,p,y).call(this,this.value,{emitInput:!1})}}
      />
    `),l(this,D,()=>g`
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
          <span>${_e(this.displayValue)}</span>
        </slot>
      </button>
    `),l(this,L,e=>{this.open||this.dispatchCustomEvent("gds-blur",{detail:{relatedTarget:e.relatedTarget},bubbles:!1,composed:!0})}),l(this,B,e=>{if(this.combobox){const s=e.getBoundingClientRect(),a=window.innerHeight-s.bottom,d=s.top;let c=Math.min(d,this.maxHeight);return a>d&&(c=Math.min(a,this.maxHeight)),`${c-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),l(this,v,(e,t)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1})),l(this,O,e=>{i(this,v).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),l(this,F,e=>{e.preventDefault(),e.stopPropagation(),u(this,p,y).call(this,void 0,{beforeDispatch:()=>this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0})})}),l(this,T,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const s=e.currentTarget;if(this.options.forEach(a=>a.hidden=!1),!s.value)return;this.options.filter(a=>!this.searchFilter(s.value,a)).forEach(a=>a.hidden=!0)}),l(this,I,e=>{(e.key==="ArrowDown"||e.key==="Tab")&&(e.preventDefault(),i(this,$).call(this))}),l(this,z,e=>{if(e.key==="Tab"&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),l(this,G,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),l(this,H,e=>{const t=e.target;this.options.includes(t)&&(this.multiple?u(this,p,y).call(this,u(this,p,re).call(this,t)):u(this,p,y).call(this,t.value,{beforeDispatch:()=>{i(this,v).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0))}}))}),l(this,$,()=>{this.updateComplete.then(()=>{const e=this.navigableItems;(e.find(t=>t.selected)||e[0])?.focus()})}),l(this,C,!1),l(this,V,()=>{k(this,C,!0),window.addEventListener("pointerup",()=>k(this,C,!1),{once:!0})}),l(this,q,()=>{i(this,C)||i(this,$).call(this)}),l(this,M,!1),l(this,x,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&i(this,v).call(this,!1,"close")&&(this.open=!1)}),l(this,W,e=>{e.key==="Tab"&&!this.searchable&&i(this,v).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())}),new Ae(this)}get type(){return"gds-dropdown"}get options(){return i(this,m)?Array.from(i(this,m)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(i(this,m))return Array.from(i(this,m)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){if(this.value===void 0)return this.placeholder?.innerText||"";let e;return Array.isArray(this.value)?e=this.value.slice(0,5).reduce((t,s)=>t+this.options.find(n=>this.compareWith(n.value,s))?.innerText+", ","").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):e=this.options.find(t=>this.compareWith(t.value,this.value))?.innerText,e||this.placeholder?.innerText||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}get navigableItems(){return this.options.filter(e=>!e.hidden)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",i(this,L)),Z.instance.applyScoped(this,"gds-dropdown","t-listbox"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleOpenChange()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",i(this,L))}render(){return g`
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
        .calcMaxHeight=${i(this,B)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[$e(8),Ce()]:se.DefaultMiddleware}
        @gds-ui-state=${i(this,O)}
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
                aria-label=${E(ye`${this.value.length} options selected`)}
              >
                ${this.value.length}</gds-badge
              >`)}
          ${f(this.clearable&&!this.disabled&&(Array.isArray(this.value)?this.value.length>0:!!this.value),()=>g`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${this.size==="small"?"xs":"small"}
                label="${E("Clear selection")}"
                @click=${i(this,F)}
                slot="action"
              >
                <gds-icon-cross-small></gds-icon-cross-small>
              </gds-button>`)}
          ${f(this.combobox&&!this.multiple,()=>i(this,P).call(this))}
          ${f(!this.combobox||this.multiple,()=>i(this,D).call(this))}
          <gds-icon-chevron-bottom
            size=${this.size==="small"?"m":"l"}
            slot="action"
          ></gds-icon-chevron-bottom>
        </gds-field-base>

        ${f(this.searchable,()=>g`<input
              id="searchinput"
              type="text"
              aria-label="${E("Filter available options")}"
              placeholder="${E("Search")}"
              @keydown=${i(this,I)}
              @input=${i(this,T)}
            />`)}
        <div
          id="listbox"
          class="menu-listbox"
          role="listbox"
          aria-multiselectable="${this.multiple}"
          tabindex="-1"
          @focus="${i(this,q)}"
          @pointerdown="${i(this,V)}"
          @gds-select="${i(this,H)}"
          @gds-focus="${i(this,G)}"
          @keydown=${i(this,z)}
        >
          <slot></slot>
        </div>
      </gds-popover>

      ${f(u(this,p,oe).call(this),()=>g`
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
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){this.requestUpdate(),k(this,m,this.querySelectorAll("[gds-element=gds-option]")),!this.multiple&&(this.options.length===0&&!this.placeholder||(this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:!this.combobox&&!this.placeholder&&this.options.find(e=>this.compareWith(e.value,this.value))===void 0&&(this.value=this.options[0]?.value)))}updated(){u(this,p,le).call(this)}_handleMultipleChange(){this.options.forEach(e=>e.requestUpdate())}get value(){return super.value}set value(e){i(this,M)||(super.value=e)}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?u(this,p,ne).call(this):(u(this,p,he).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t?.scrollIntoView({block:"center"})})}};m=new WeakMap;p=new WeakSet;oe=function(){return!this.plain};P=new WeakMap;D=new WeakMap;L=new WeakMap;B=new WeakMap;v=new WeakMap;O=new WeakMap;F=new WeakMap;T=new WeakMap;I=new WeakMap;z=new WeakMap;G=new WeakMap;H=new WeakMap;re=function(e){const t=Array.isArray(this.value)?this.value:[],s=a=>t.some(d=>this.compareWith(d,a)),n=!s(e.value);return this.options.filter(a=>a===e?n:s(a.value)).map(a=>a.value)};le=function(){const e=this.multiple?Array.isArray(this.value)?this.value:[]:[this.value];this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})};$=new WeakMap;C=new WeakMap;V=new WeakMap;q=new WeakMap;M=new WeakMap;y=function(e,t={}){const{emitInput:s=!0,emitChange:n=!0,beforeDispatch:a}=t;this.value=e,k(this,M,!0);try{a?.(),s&&this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}),n&&this.dispatchCustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0})}finally{k(this,M,!1)}};ne=function(){this.addEventListener("blur",i(this,x)),this.addEventListener("gds-blur",i(this,x)),this.addEventListener("keydown",i(this,W))};he=function(){this.removeEventListener("blur",i(this,x)),this.removeEventListener("gds-blur",i(this,x)),this.removeEventListener("keydown",i(this,W))};x=new WeakMap;W=new WeakMap;o.styles=[Q,ke,We,Oe];r([h({attribute:"supporting-text"})],o.prototype,"supportingText",2);r([h({type:Boolean,reflect:!0})],o.prototype,"open",2);r([h({type:Boolean,reflect:!0})],o.prototype,"searchable",2);r([h({type:Boolean,reflect:!0})],o.prototype,"multiple",2);r([h({type:Boolean,reflect:!0})],o.prototype,"clearable",2);r([h({type:Boolean,reflect:!0})],o.prototype,"combobox",2);r([h()],o.prototype,"compareWith",2);r([h()],o.prototype,"searchFilter",2);r([h({type:Boolean,attribute:"sync-popover-width"})],o.prototype,"syncPopoverWidth",2);r([h({type:Number,attribute:"max-height"})],o.prototype,"maxHeight",2);r([h({reflect:!0})],o.prototype,"size",2);r([h({type:Boolean,attribute:"hide-label"})],o.prototype,"hideLabel",2);r([h({type:Boolean})],o.prototype,"plain",2);r([h({type:Boolean})],o.prototype,"disableMobileStyles",2);r([h({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],o.prototype,"showExtendedSupportingText",2);r([ee("#trigger")],o.prototype,"_elTriggerBtn",2);r([ee("#searchinput")],o.prototype,"_elSearchInput",2);r([ue({attributes:!0,attributeFilter:["gds-element","value","isplaceholder"],childList:!0,subtree:!0,characterData:!0})],o.prototype,"_handleLightDOMChange",1);r([R("multiple")],o.prototype,"_handleMultipleChange",1);r([R("open")],o.prototype,"_handleOpenChange",1);o=r([ge({labelledBy:"#trigger",describedBy:"#trigger",errorMessage:"#trigger"}),we()],o);let Y=class extends fe(be(ve(o))){};Y=r([j("gds-dropdown",{dependsOn:[Ee,Se,Me,b,se,te,Pe,De]})],Y);export{b as G,Y as a};
