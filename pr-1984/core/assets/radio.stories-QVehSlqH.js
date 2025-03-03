import{i as Ce,x as c}from"./lit-element-C_s9q329.js";import{n as r,g as $,G as De,h as b,r as Ae}from"./custom-element-scoping-BEGY3AqQ.js";import{e as T}from"./class-map-Bz98xO8-.js";import{t as $e}from"./tokens.style-CFvqdzpw.js";import{l as Ve}from"./localized-decorator-DtmrKsyB.js";import{m as D}from"./runtime-BL31MtW8.js";import{T as Fe}from"./transitional-styles-iv5lM2WH.js";import{w as C}from"./watch-tFciLXSI.js";import{a as Ie}from"./query-p8xgzTDt.js";import{a as Be}from"./button-DMqiAWPO.js";import"./form-control-footer-31u3ZPFB.js";import"./flex-tnFv_7np.js";import"./card-BihnooJR.js";import"./text-DQ_oI5A1.js";import"./divider-Dm4d-5N4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./triangle-exclamation-BVOOPWQa.js";import"./icon-DYBgint3.js";import"./badge-Dc9DlXiN.js";import"./div-Cnle9s5w.js";const Te=Ce`
  @layer base, a11y, reset, transitional-styles;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .radio {
        transition: none;
      }
    }
  }

  @layer base {
    :host {
      --radio-bg-mix: color-mix(
        in srgb,
        var(--gds-color-l3-background-secondary),
        var(--gds-color-l3-states-light-hover)
      );
      --radio-bg-mix-active: color-mix(
        in srgb,
        var(--gds-color-l3-background-secondary),
        var(--gds-color-l3-states-light-pressed)
      );
      --radio-size: var(--gds-space-xl);
      --radio-pill-size: var(--gds-space-m);
      --radio-radius: var(--gds-space-max);
      --radio-border-color: var(--gds-color-l3-border-secondary);
      --radio-border-color-selected: var(--gds-color-l3-border-primary);
      --radio-border-width: var(--gds-space-4xs);
      --radio-border-width-selected: var(--gds-space-2xs);
      --radio-border-style: solid;
      --radio-dot-background-color: var(--gds-color-l3-content-primary);
    }

    .radio-group {
      display: flex;
      flex-direction: column;
      gap: var(--gds-space-m);
    }

    .content {
      display: flex;
      position: relative;
      max-width: max-content;
    }

    .direction-row .content {
      flex-direction: row;
      flex-wrap: wrap;
      gap: var(--gds-space-l);
    }

    .direction-column .content {
      flex-direction: column;
      gap: var(--gds-space-xs);
    }

    .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-sizing: border-box;
      backface-visibility: hidden;
      transition-property: background-color, scale, outline;
      transition-duration: 248ms;
      outline-style: solid;
      outline-offset: calc(-2 * var(--radio-border-width));
      outline-width: var(--gds-space-3xs);
      outline-color: transparent;
      border-radius: var(--radio-radius);
      width: var(--radio-size);
      height: var(--radio-size);
    }

    @media (hover: hover) {
      .radio:hover,
      :host(:hover) .radio {
        background-color: var(--radio-bg-mix);
      }
    }

    .radio:active,
    :host(:active) .radio {
      background-color: var(--radio-bg-mix-active);
      scale: 0.96;
    }

    .radio:focus {
      outline-color: var(--gds-color-l3-content-tertiary);
    }

    .radio:not(:focus-visible) {
      outline-color: transparent;
    }

    :host([aria-checked='true']):active .dot {
      box-shadow: inset 0 0 0 1px var(--radio-border-color-selected);
    }

    .dot {
      appearance: none;
      width: var(--radio-pill-size);
      height: var(--radio-pill-size);
      border-radius: var(--radio-radius);
      border: none;
      box-shadow: inset 0 0 0 var(--radio-border-width)
        var(--radio-border-color);
      background-color: var(--radio-dot-background-color);
      box-sizing: border-box;
      transition-property: box-shadow;
      transition-duration: 248ms;
      will-change: box-shadow;
    }

    [aria-checked='true'] .dot,
    :host(:active) .dot {
      box-shadow: inset 0 0 0 var(--radio-border-width-selected)
        var(--radio-border-color-selected);
    }

    /* Disabled styles */

    :host([disabled]) {
      pointer-events: none;
    }

    :host([disabled]) .radio .dot {
      box-shadow: none;
      background-color: var(--gds-color-l3-content-disabled);
    }

    /*
    TODO:
     - [ ] Invalid styles 
     - [ ] Consider shuffling the logic to consolidate the styles
      

     */
    .radio.invalid {
      --radio-border-color: var(--gds-color-l3-border-negative);
      --radio-dot-background-color: var(
        --gds-color-l3-background-negative-secondary
      );
      --radio-bg-mix: color-mix(
        in srgb,
        var(--gds-color-l3-background-negative-secondary),
        var(--gds-color-l3-states-negative-hover)
      );
      --radio-bg-mix-active: color-mix(
        in srgb,
        var(--gds-color-l3-background-negative-secondary),
        var(--gds-color-l3-states-negative-pressed)
      );
    }
  }
`,We=Ce`
  @layer base, a11y;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .field-label {
        transition: none;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    .selection-field-container {
      display: flex;
      gap: var(--gds-space-2xs);
    }

    .selection-field-label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: var(--gds-color-l3-content-tertiary);
    }

    .primary-label {
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-book);
      cursor: pointer;
    }

    .small .primary-label {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
    }

    .supporting-text {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
      font-weight: var(--gds-text-weight-regular);
      cursor: pointer;
    }

    .small .supporting-text {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-line-height-detail-s);
    }

    .disabled {
      color: var(--gds-color-l3-content-disabled);
    }

    .has-supporting-text {
      padding-block-start: calc(1cap / 2);
    }

    .invalid {
      color: var(--gds-color-l3-content-negative);
    }
  }
`;var je=Object.defineProperty,He=Object.getOwnPropertyDescriptor,h=(t,e,o,s)=>{for(var a=s>1?void 0:s?He(e,o):e,i=t.length-1,n;i>=0;i--)(n=t[i])&&(a=(s?n(e,o,a):n(a))||a);return s&&a&&je(e,o,a),a};let g=class extends De{constructor(){super(),this.label="",this.supportingText="",this.type="radio",this.size="large",this.disabled=!1,this.invalid=!1}connectedCallback(){super.connectedCallback(),Fe.instance.apply(this,"gds-selection-field-label")}render(){const t={"selection-field-label":!0,[`type-${this.type}`]:!0,invalid:this.invalid,disabled:this.disabled,small:this.size==="small","has-supporting-text":!!this.supportingText};return b`
      <div class="selection-field-container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${T(t)}" part="_selection-field-label">
          <label class="primary-label" part="primary-label">
            ${this.label}
          </label>
          ${this.label?b`
                <span class="supporting-text" part="_supporting-text">
                  ${this.supportingText}
                </span>
              `:""}
        </div>
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};g.styles=[$e,We];h([r()],g.prototype,"label",2);h([r({attribute:"supporting-text"})],g.prototype,"supportingText",2);h([r()],g.prototype,"type",2);h([r()],g.prototype,"size",2);h([r({type:Boolean,reflect:!0})],g.prototype,"disabled",2);h([r({type:Boolean})],g.prototype,"invalid",2);h([C("disabled")],g.prototype,"_handleDisabledChange",1);g=h([$("gds-selection-field-label"),Ve()],g);var Ke=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,x=(t,e,o,s)=>{for(var a=s>1?void 0:s?Ue(e,o):e,i=t.length-1,n;i>=0;i--)(n=t[i])&&(a=(s?n(e,o,a):n(a))||a);return s&&a&&Ke(e,o,a),a};let l=class extends De{constructor(){super(...arguments),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.size="large",this.invalid=!1,this._isFocused=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio")}_handleClick(){this.disabled||(this.checked=!0,this.focus(),this.dispatchEvent(new Event("change",{bubbles:!0})))}_handleKeyDown(t){this.disabled||(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this._handleClick())}focus(){var e;const t=(e=this.renderRoot)==null?void 0:e.querySelector(".radio");t&&t.focus()}render(){const t={radio:!0,checked:this.checked,disabled:this.disabled,focused:this._isFocused,invalid:this.invalid};return b`
      <gds-selection-field-label
        supporting-text=${this.supportingText}
        label=${this.label}
        size=${this.size}
        @click=${this._handleClick}
        aria-disabled=${this.disabled}
        aria-checked=${this.checked}
        ?disabled=${this.disabled}
        ?invalid=${this.invalid}
        type="radio"
      >
        <div
          class=${T(t)}
          role="radio"
          tabindex="-1"
          aria-checked=${this.checked}
          aria-disabled=${this.disabled}
          @click=${this._handleClick}
          @keydown=${this._handleKeyDown}
          @focus=${()=>this._isFocused=!0}
          @blur=${()=>this._isFocused=!1}
        >
          <div class="dot"></div>
          <slot></slot>
        </div>
      </gds-selection-field-label>
    `}};l.styles=[$e,Te];x([r()],l.prototype,"label",2);x([r({attribute:"supporting-text"})],l.prototype,"supportingText",2);x([r()],l.prototype,"value",2);x([r({type:Boolean,reflect:!0})],l.prototype,"checked",2);x([r({type:Boolean,reflect:!0})],l.prototype,"disabled",2);x([r()],l.prototype,"size",2);x([r({type:Boolean})],l.prototype,"invalid",2);x([Ae()],l.prototype,"_isFocused",2);l=x([$("gds-radio")],l);var Je=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,Ge=t=>{throw TypeError(t)},p=(t,e,o,s)=>{for(var a=s>1?void 0:s?Ne(e,o):e,i=t.length-1,n;i>=0;i--)(n=t[i])&&(a=(s?n(e,o,a):n(a))||a);return s&&a&&Je(e,o,a),a},Qe=(t,e,o)=>e.has(t)||Ge("Cannot "+o),Xe=(t,e,o)=>e.has(t)?Ge("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),k=(t,e,o)=>(Qe(t,e,"access private method"),o),v,Pe,Me,Oe,qe;let d=class extends Be{constructor(){super(...arguments),Xe(this,v),this.label="",this.name="",this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1}get radios(){return Array.from(this.querySelectorAll("gds-radio"))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.updateComplete.then(()=>{this._syncRadioStates(),this._initializeFocusable(),this._validateRadios()})}_validateRadios(){return this.radios.filter(e=>!e.label||!e.value).length>0?(this.invalid=!0,this.errorMessage=D("Radio buttons require label and value"),!1):this.radios.length<2?(this.invalid=!0,this.errorMessage=D("Minimum two radio buttons required"),!1):!0}_initializeFocusable(){this._contentElement.setAttribute("tabindex","0"),this.radios.forEach(t=>{t.setAttribute("tabindex","-1")})}checkValidity(){if(!this.validator)return this.required&&!this.value?(this.invalid=!0,this.errorMessage=D("Please select an option"),!1):!0;const t=this.validator.validate(this);return t&&(this.invalid=!t[0].valid,this.errorMessage=t[1]),this.radios.forEach(e=>{e.invalid=this.invalid}),this.validity.valid}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._syncRadioStates(),this._validateRadios(),this.checkValidity()}_handleRequiredChange(){this.checkValidity()}_handleSizeChange(){this.radios.forEach(t=>{t.size=this.size})}_syncRadioStates(){const t=this.checkValidity();this.radios.forEach(e=>{e.checked=e.value===this.value,e.size=this.size,e.invalid=!t})}_handleFocus(){const e=this.radios.find(o=>o.checked)||this.radios[0];e&&e.focus()}_handleRadioChange(t){const e=t.target;if(e.hasAttribute("value")){const o=e.getAttribute("value");this.value=o,this._syncRadioStates(),this._validateRadios(),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))}}_handleKeyDown(t){const e=this.radios.filter(i=>!i.hasAttribute("disabled"));if(e.length===0)return;let o=e.findIndex(i=>i.checked||document.activeElement===i);o===-1&&(o=0);let s;switch(t.key){case"ArrowDown":case"ArrowRight":{t.preventDefault(),s=(o+1)%e.length;break}case"ArrowUp":case"ArrowLeft":{t.preventDefault(),s=(o-1+e.length)%e.length;break}case"Tab":return;default:return}const a=e[s];a.checked=!0,a.focus(),this.value=a.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))}render(){const t={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return b`<div class=${T(t)}>
      ${k(this,v,Pe).call(this)}
    </div>`}};v=new WeakSet;Pe=function(){return[k(this,v,Me).call(this),k(this,v,Oe).call(this),k(this,v,qe).call(this)].map(e=>b`${e}`)};Me=function(){if(this.label)return b` <gds-form-control-header class="size-${this.size}">
        <label id="group-label" for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};Oe=function(){return b` <div
      class="content"
      @keydown=${this._handleKeyDown}
      @focus=${this._handleFocus}
    >
      <slot @change=${this._handleRadioChange}></slot>
    </div>`};qe=function(){return b` <gds-form-control-footer
      class="size-${this.size}"
      .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
    >
    </gds-form-control-footer>`};d.styles=[Te];p([r()],d.prototype,"label",2);p([r()],d.prototype,"name",2);p([r()],d.prototype,"size",2);p([r()],d.prototype,"direction",2);p([r({attribute:"supporting-text"})],d.prototype,"supportingText",2);p([r({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],d.prototype,"showExtendedSupportingText",2);p([Ie(".content")],d.prototype,"_contentElement",2);p([C("value")],d.prototype,"_handleValueChange",1);p([C("required")],d.prototype,"_handleRequiredChange",1);p([C("size")],d.prototype,"_handleSizeChange",1);d=p([$("gds-radio-group")],d);const Et={title:"Components/Radio",component:"gds-radio-group",tags:["autodocs"]},u={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0},args:{label:"Label",supportingText:"Label support text."}}},m={...u,name:"Radio",args:{label:"Label",supportingText:"Label support text.",innerHTML:`
    <gds-radio label="Radio Option 1" supporting-text="Supporting text" value="1"></gds-radio>
    <gds-radio label="Radio Option 2" supporting-text="Supporting text" value="2"></gds-radio>
    <gds-radio label="Radio Option 3" supporting-text="Supporting text" value="3"></gds-radio>`}},f={...u,name:"States",render:()=>c`
    <div class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio
          label="Radio Label"
          value="1"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="2"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio label="Selected" value="3"></gds-radio>
        <gds-radio
          label="Radio Label"
          value="4"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="5"
          disabled
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio label="Radio Label" value="5" disabled></gds-radio>
        <gds-radio
          label="Radio Label"
          value="6"
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  `},y={...u,name:"Validation",render:()=>c`
    <div class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        show-extended-supporting-text
        required
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio
          label="Radio Label"
          value="1"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="2"
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  `},R={...u,name:"Missing Label",render:()=>c`
    <gds-flex gap="xl">
      <gds-flex gap="s" flex-direction="column" flex="1">
        <gds-text tag="small">Valid: Label and Value</gds-text>
        <gds-divider opacity="0.1"></gds-divider>
        <gds-radio-group>
          <gds-radio label="Radio Label" value="1"></gds-radio>
          <gds-radio label="Radio Label" value="2"></gds-radio>
        </gds-radio-group>
      </gds-flex>
      <gds-flex gap="s" flex-direction="column" flex="1">
        <gds-text tag="small">Invalid: Missing label</gds-text>
        <gds-divider opacity="0.1"></gds-divider>
        <gds-radio-group>
          <gds-radio value="1"></gds-radio>
          <gds-radio value="2"></gds-radio>
        </gds-radio-group>
      </gds-flex>
      <gds-flex gap="s" flex-direction="column" flex="1">
        <gds-text tag="small">Invalid: Missing value</gds-text>
        <gds-divider opacity="0.1"></gds-divider>
        <gds-radio-group>
          <gds-radio label="Radio Label"></gds-radio>
          <gds-radio label="Radio Label"></gds-radio>
        </gds-radio-group>
      </gds-flex>
    </gds-flex>
  `},w={...u,name:"Single Radio",render:()=>c`
    <div class="radio-group">
      <gds-radio-group>
        <gds-radio value="1" label="Missing value"></gds-radio>
      </gds-radio-group>
    </div>
  `},L={...u,name:"Required",render:()=>c`
    <div class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        required
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio
          label="Radio Label"
          value="1"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="2"
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  `},E={...u,name:"Disabled",render:()=>c`
    <div class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        show-extended-supporting-text
        value="4"
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio
          label="Radio Label"
          value="1"
          disabled
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="2"
          disabled
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  `},_={...u,name:"Size",render:()=>c`
    <div class="radio-group">
      <gds-flex gap="xl" margin="0 auto">
        <gds-flex gap="s" flex-direction="column" flex="1">
          <gds-text tag="small">Size: Large(default)</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-radio-group
            label="Group Label"
            supporting-text="Support text for the group"
            value="4"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-radio
              label="Radio Label"
              value="1"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="2"
              supporting-text="Example support text"
            ></gds-radio>
          </gds-radio-group>
        </gds-flex>
        <gds-flex gap="s" flex-direction="column" flex="1">
          <gds-text tag="small">Size: small</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-radio-group
            label="Group Label"
            supporting-text="Support text for the group"
            value="4"
            size="small"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-radio
              label="Radio Label"
              value="1"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="2"
              supporting-text="Example support text"
            ></gds-radio>
          </gds-radio-group>
        </gds-flex>
      </gds-flex>
    </div>
  `},S={...u,name:"Direction",render:()=>c`
    <div class="radio-group">
      <gds-flex gap="xl" margin="0 auto">
        <gds-flex gap="s" flex-direction="column">
          <gds-text tag="small">Column (default)</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-radio-group
            label="Group Label"
            supporting-text="Support text for the group"
            value="4"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-radio
              label="Radio Label"
              value="1"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="2"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="3"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="4"
              supporting-text="Example support text"
            ></gds-radio>
          </gds-radio-group>
        </gds-flex>
        <gds-flex gap="s" flex="1" flex-direction="column">
          <gds-text tag="small">Row</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-radio-group
            label="Group Label"
            supporting-text="Support text for the group"
            value="4"
            size="small"
            direction="row"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-radio
              label="Radio Label"
              value="1"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="2"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="3"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="4"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="5"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="6"
              supporting-text="Example support text"
            ></gds-radio>
          </gds-radio-group>
        </gds-flex>
      </gds-flex>
    </div>
  `},z={...u,name:"Radio group label",render:()=>c`
    <div class="radio-group">
      <gds-radio-group>
        <gds-radio label="Radio Label" value="1"></gds-radio>
        <gds-radio label="Radio Label" value="2"></gds-radio>
      </gds-radio-group>
    </div>
  `};var G,P,M,O,q;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Radio',
  args: {
    label: 'Label',
    supportingText: 'Label support text.',
    innerHTML: \`
    <gds-radio label="Radio Option 1" supporting-text="Supporting text" value="1"></gds-radio>
    <gds-radio label="Radio Option 2" supporting-text="Supporting text" value="2"></gds-radio>
    <gds-radio label="Radio Option 3" supporting-text="Supporting text" value="3"></gds-radio>\`
  }
}`,...(M=(P=m.parameters)==null?void 0:P.docs)==null?void 0:M.source},description:{story:`Radio buttons allow users to select a single option from a list of two or more mutually exclusive options.<br />
Each radio button must have both a label and a value.

Usage:

\`\`\`html
<gds-radio-group label="Select an option">
  <gds-radio label="Option 1" value="1"></gds-radio>
  <gds-radio label="Option 2" value="2"></gds-radio>
</gds-radio-group>
\`\`\``,...(q=(O=m.parameters)==null?void 0:O.docs)==null?void 0:q.description}}};var A,V,F,I,B;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'States',
  render: () => html\`
    <div class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio
          label="Radio Label"
          value="1"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="2"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio label="Selected" value="3"></gds-radio>
        <gds-radio
          label="Radio Label"
          value="4"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="5"
          disabled
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio label="Radio Label" value="5" disabled></gds-radio>
        <gds-radio
          label="Radio Label"
          value="6"
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  \`
}`,...(F=(V=f.parameters)==null?void 0:V.docs)==null?void 0:F.source},description:{story:`Radio buttons can be in different states:
- Default: The normal, interactive state
- Selected: When a radio button is chosen
- Disabled: When the radio button cannot be interacted with
- With supporting text: Additional context below the label`,...(B=(I=f.parameters)==null?void 0:I.docs)==null?void 0:B.description}}};var W,j,H,K,U;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Validation',
  render: () => html\`
    <div class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        show-extended-supporting-text
        required
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio
          label="Radio Label"
          value="1"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="2"
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  \`
}`,...(H=(j=y.parameters)==null?void 0:j.docs)==null?void 0:H.source},description:{story:`Radio groups support validation:
- Required selection: Shows error when no option is selected
- Missing properties: Shows error when radios lack required label or value
- Minimum options: Shows error when group has fewer than two radio buttons

The error message appears below the radio group.`,...(U=(K=y.parameters)==null?void 0:K.docs)==null?void 0:U.description}}};var J,N,Q,X,Y;R.parameters={...R.parameters,docs:{...(J=R.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Missing Label',
  render: () => html\`
    <gds-flex gap="xl">
      <gds-flex gap="s" flex-direction="column" flex="1">
        <gds-text tag="small">Valid: Label and Value</gds-text>
        <gds-divider opacity="0.1"></gds-divider>
        <gds-radio-group>
          <gds-radio label="Radio Label" value="1"></gds-radio>
          <gds-radio label="Radio Label" value="2"></gds-radio>
        </gds-radio-group>
      </gds-flex>
      <gds-flex gap="s" flex-direction="column" flex="1">
        <gds-text tag="small">Invalid: Missing label</gds-text>
        <gds-divider opacity="0.1"></gds-divider>
        <gds-radio-group>
          <gds-radio value="1"></gds-radio>
          <gds-radio value="2"></gds-radio>
        </gds-radio-group>
      </gds-flex>
      <gds-flex gap="s" flex-direction="column" flex="1">
        <gds-text tag="small">Invalid: Missing value</gds-text>
        <gds-divider opacity="0.1"></gds-divider>
        <gds-radio-group>
          <gds-radio label="Radio Label"></gds-radio>
          <gds-radio label="Radio Label"></gds-radio>
        </gds-radio-group>
      </gds-flex>
    </gds-flex>
  \`
}`,...(Q=(N=R.parameters)==null?void 0:N.docs)==null?void 0:Q.source},description:{story:`This example demonstrates validation when radio buttons are missing required properties.
Each radio button must have both:
- label: The text displayed next to the radio button
- value: The data value associated with the option`,...(Y=(X=R.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,te,ae,oe;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Single Radio',
  render: () => html\`
    <div class="radio-group">
      <gds-radio-group>
        <gds-radio value="1" label="Missing value"></gds-radio>
      </gds-radio-group>
    </div>
  \`
}`,...(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:`This example shows the validation error when attempting to create a radio group with only one radio button.<br/>
Radio groups must contain at least two options to provide a meaningful choice.`,...(oe=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:oe.description}}};var re,se,ie,de,ne;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Required',
  render: () => html\`
    <div class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        required
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio
          label="Radio Label"
          value="1"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="2"
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  \`
}`,...(ie=(se=L.parameters)==null?void 0:se.docs)==null?void 0:ie.source},description:{story:`When the required attribute is set on a radio group, users must select an option before form submission.
An error message is displayed if the form is submitted without a selection.`,...(ne=(de=L.parameters)==null?void 0:de.docs)==null?void 0:ne.description}}};var le,pe,ge,ue,ce;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Disabled',
  render: () => html\`
    <div class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        show-extended-supporting-text
        value="4"
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio
          label="Radio Label"
          value="1"
          disabled
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="2"
          disabled
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  \`
}`,...(ge=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:ge.source},description:{story:`Disabled radio buttons cannot be interacted with and appear visually muted.
Use this state for options that are temporarily unavailable.`,...(ce=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:ce.description}}};var xe,be,he,ve,me;_.parameters={..._.parameters,docs:{...(xe=_.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Size',
  render: () => html\`
    <div class="radio-group">
      <gds-flex gap="xl" margin="0 auto">
        <gds-flex gap="s" flex-direction="column" flex="1">
          <gds-text tag="small">Size: Large(default)</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-radio-group
            label="Group Label"
            supporting-text="Support text for the group"
            value="4"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-radio
              label="Radio Label"
              value="1"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="2"
              supporting-text="Example support text"
            ></gds-radio>
          </gds-radio-group>
        </gds-flex>
        <gds-flex gap="s" flex-direction="column" flex="1">
          <gds-text tag="small">Size: small</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-radio-group
            label="Group Label"
            supporting-text="Support text for the group"
            value="4"
            size="small"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-radio
              label="Radio Label"
              value="1"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="2"
              supporting-text="Example support text"
            ></gds-radio>
          </gds-radio-group>
        </gds-flex>
      </gds-flex>
    </div>
  \`
}`,...(he=(be=_.parameters)==null?void 0:be.docs)==null?void 0:he.source},description:{story:`Radio buttons support two sizes:
- Large (default): Standard size for most use cases
- Small: Compact size for space-constrained layouts

The size can be set on the radio group and applies to all radio buttons within.`,...(me=(ve=_.parameters)==null?void 0:ve.docs)==null?void 0:me.description}}};var fe,ye,Re,we,Le;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Direction',
  render: () => html\`
    <div class="radio-group">
      <gds-flex gap="xl" margin="0 auto">
        <gds-flex gap="s" flex-direction="column">
          <gds-text tag="small">Column (default)</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-radio-group
            label="Group Label"
            supporting-text="Support text for the group"
            value="4"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-radio
              label="Radio Label"
              value="1"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="2"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="3"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="4"
              supporting-text="Example support text"
            ></gds-radio>
          </gds-radio-group>
        </gds-flex>
        <gds-flex gap="s" flex="1" flex-direction="column">
          <gds-text tag="small">Row</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-radio-group
            label="Group Label"
            supporting-text="Support text for the group"
            value="4"
            size="small"
            direction="row"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-radio
              label="Radio Label"
              value="1"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="2"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="3"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="4"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="5"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="6"
              supporting-text="Example support text"
            ></gds-radio>
          </gds-radio-group>
        </gds-flex>
      </gds-flex>
    </div>
  \`
}`,...(Re=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:Re.source},description:{story:`Radio buttons can be arranged in two directions:
- Column (default): Vertical stacking for clear separation
- Row: Horizontal alignment for compact layouts that will break to new line when not enough space is available

Choose the direction based on available space and number of options.`,...(Le=(we=S.parameters)==null?void 0:we.docs)==null?void 0:Le.description}}};var Ee,_e,Se,ze,ke;z.parameters={...z.parameters,docs:{...(Ee=z.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Radio group label',
  render: () => html\`
    <div class="radio-group">
      <gds-radio-group>
        <gds-radio label="Radio Label" value="1"></gds-radio>
        <gds-radio label="Radio Label" value="2"></gds-radio>
      </gds-radio-group>
    </div>
  \`
}`,...(Se=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:Se.source},description:{story:`While radio groups can be created without a label, it's recommended to always provide one for clarity and accessibility.
The label helps users understand what the options are for.

In certain cases when space is limited, the group label can be omitted.`,...(ke=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:ke.description}}};const _t=["RadioButton","States","Validation","MissingLabel","Single","Required","Disabled","Size","Direction","GroupLabel"];export{S as Direction,E as Disabled,z as GroupLabel,R as MissingLabel,m as RadioButton,L as Required,w as Single,_ as Size,f as States,y as Validation,_t as __namedExportsOrder,Et as default};
