import{i as D,x as c}from"./lit-element-C_s9q329.js";import{n as i,g as C,G as De,h as x,r as Me}from"./custom-element-scoping-BEGY3AqQ.js";import{t as Ce}from"./tokens.style-CFvqdzpw.js";import{w as k}from"./watch-tFciLXSI.js";import{l as Ge}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{e as Te}from"./class-map-Bz98xO8-.js";import{T as Fe}from"./transitional-styles-iv5lM2WH.js";import{a as Ve}from"./query-p8xgzTDt.js";import{a as Ie}from"./button-DMqiAWPO.js";import"./form-control-footer-31u3ZPFB.js";import"./flex-tnFv_7np.js";import"./card-BihnooJR.js";import"./text-DQ_oI5A1.js";import"./divider-Dm4d-5N4.js";import"./circle-check-DzwSpRnk.js";import"./cross-small-CIJy4RQ0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./triangle-exclamation-BVOOPWQa.js";import"./icon-DYBgint3.js";import"./badge-Dc9DlXiN.js";import"./div-Cnle9s5w.js";const We=D`
  @layer base, a11y, reset, transitional-styles;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .radio {
        transition: none;
      }
    }
  }

  @layer base {
    :host([disabled]) {
      --_radio-label-color: var(--gds-color-l3-content-disabled);
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
      cursor: pointer;
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

    :host(:focus) {
      outline: none;
    }

    :host(:focus) .radio {
      outline-color: var(--gds-color-l3-content-tertiary);
    }

    :host(:not(:focus-visible)) .radio {
      outline-color: transparent;
    }

    .dot {
      appearance: none;
      width: var(--radio-dot-size);
      height: var(--radio-dot-size);
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

    :host([checked]) .dot,
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
  }
`,je=D`
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
      --_color: var(--_radio-label-color, inherit);
    }

    .selection-field-container {
      display: flex;
      gap: var(--gds-space-2xs);
    }

    .selection-field-label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: var(--_color);
    }

    .primary-label {
      font-weight: var(--gds-text-weight-book);
      cursor: pointer;
    }

    .supporting-text {
      font-size: var(--_font-size-supporting-text);
      line-height: var(--_line-height-supporting-text);
      font-weight: var(--gds-text-weight-regular);
    }

    .has-supporting-text {
      padding-block-start: calc(1cap / 2);
    }
  }
`;var Be=Object.defineProperty,He=Object.getOwnPropertyDescriptor,G=(e,t,o,r)=>{for(var a=r>1?void 0:r?He(t,o):t,s=e.length-1,l;s>=0;s--)(l=e[s])&&(a=(r?l(t,o,a):l(a))||a);return r&&a&&Be(t,o,a),a};let _=class extends De{constructor(){super(),this.label="",this.supportingText=""}connectedCallback(){super.connectedCallback(),Fe.instance.apply(this,"gds-selection-field-label")}render(){const e={"selection-field-label":!0,"has-supporting-text":!!this.supportingText};return x`
      <div class="selection-field-container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${Te(e)}">
          <label class="primary-label"> ${this.label} </label>
          ${this.label?x`
                <span class="supporting-text"> ${this.supportingText} </span>
              `:""}
        </div>
      </div>
    `}};_.styles=[Ce,je];G([i()],_.prototype,"label",2);G([i({attribute:"supporting-text"})],_.prototype,"supportingText",2);_=G([C("gds-selection-field-label"),Ge()],_);var Ke=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,p=(e,t,o,r)=>{for(var a=r>1?void 0:r?Ue(t,o):t,s=e.length-1,l;s>=0;s--)(l=e[s])&&(a=(r?l(t,o,a):l(a))||a);return r&&a&&Ke(t,o,a),a};let d=class extends De{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.size="large",this.invalid=!1,this._isFocused=!1,this.addEventListener("keydown",this._handleKeyDown),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.disabled||this.setAttribute("tabindex","0")}updated(e){super.updated(e),e.has("checked")&&this.setAttribute("aria-checked",this.checked.toString()),e.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0")),e.has("label")&&this.setAttribute("aria-label",this.label),e.has("invalid")&&this.setAttribute("aria-invalid",this.invalid.toString())}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}_handleClick(e){this.disabled||(e.preventDefault(),this.checked=!0,this.focus(),this.dispatchEvent(new Event("change",{bubbles:!0})))}_handleKeyDown(e){this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0})))}render(){return x`
      <gds-selection-field-label
        supporting-text=${this.supportingText}
        label=${this.label}
        @click=${this._handleClick}
        type="radio"
      >
        <div class="radio">
          <div class="dot"></div>
        </div>
      </gds-selection-field-label>
    `}};d.styles=[Ce,We];p([i()],d.prototype,"label",2);p([i({attribute:"supporting-text"})],d.prototype,"supportingText",2);p([i()],d.prototype,"value",2);p([i({type:Boolean,reflect:!0})],d.prototype,"checked",2);p([i({type:Boolean,reflect:!0})],d.prototype,"disabled",2);p([i()],d.prototype,"size",2);p([i({type:Boolean})],d.prototype,"invalid",2);p([Me()],d.prototype,"_isFocused",2);p([k("disabled")],d.prototype,"_handleDisabledChange",1);d=p([C("gds-radio")],d);const Je=D`
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
    --radio-dot-size: var(--gds-space-m);
    --radio-radius: var(--gds-space-max);
    --radio-border-color: var(--gds-color-l3-border-secondary);
    --radio-border-color-selected: var(--gds-color-l3-border-primary);
    --radio-border-width: var(--gds-space-4xs);
    --radio-border-width-selected: var(--gds-space-2xs);
    --radio-dot-background-color: var(--gds-color-l3-content-primary);

    /* Font Sizes */
    --_font-size-label: var(--gds-text-size-detail-m);
    --_line-height-label: var(--gds-text-line-height-detail-m);
    --_font-size-supporting-text: var(--gds-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-text-line-height-detail-s);
    font-size: var(--_font-size-label);
    line-height: var(--_line-height-label);

    /* Color */
    --_radio-label-color: var(--gds-color-l3-content-tertiary);
  }

  :host(:invalid) {
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
    --_radio-label-color: var(--gds-color-l3-content-negative);
  }

  :host([size='small']) {
    --_font-size-label: var(--gds-text-size-detail-s);
    --_line-height-label: var(--gds-text-line-height-detail-s);
    --_font-size-supporting-text: var(--gds-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-text-line-height-detail-s);
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
    color: var(--_radio-label-color);
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
`;var Ne=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,$e=e=>{throw TypeError(e)},g=(e,t,o,r)=>{for(var a=r>1?void 0:r?Qe(t,o):t,s=e.length-1,l;s>=0;s--)(l=e[s])&&(a=(r?l(t,o,a):l(a))||a);return r&&a&&Ne(t,o,a),a},Xe=(e,t,o)=>t.has(e)||$e("Cannot "+o),Ye=(e,t,o)=>t.has(e)?$e("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),z=(e,t,o)=>(Xe(e,t,"access private method"),o),b,Ae,qe,Oe,Pe;let n=class extends Ie{constructor(){super(...arguments),Ye(this,b),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.updateComplete.then(()=>{this._syncRadioStates(),this._initializeFocusable()}),this.addEventListener("invalid",this._syncRadioStates)}_initializeFocusable(){this._contentElement.setAttribute("tabindex","0"),this.radios.forEach(e=>{e.setAttribute("tabindex","-1")})}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._syncRadioStates()}_handleSizeChange(){this.radios.forEach(e=>{e.size=this.size})}_syncRadioStates(){this.radios.forEach(e=>{e.checked=e.value===this.value,e.size=this.size,e.invalid=this.invalid})}_handleFocus(){const t=this.radios.find(o=>o.checked)||this.radios[0];t&&t.focus()}_handleRadioChange(e){const t=e.target;if(t.hasAttribute("value")){const o=t.value;this.value=o,this._syncRadioStates(),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))}}_handleKeyDown(e){const t=this.radios.filter(s=>!s.hasAttribute("disabled"));if(t.length===0)return;let o=t.findIndex(s=>s.checked||document.activeElement===s);o===-1&&(o=0);let r;switch(e.key){case"ArrowDown":case"ArrowRight":{e.preventDefault(),r=(o+1)%t.length;break}case"ArrowUp":case"ArrowLeft":{e.preventDefault(),r=(o-1+t.length)%t.length;break}case"Tab":return;default:return}const a=t[r];a.checked=!0,a.focus(),this.value=a.value,this._syncRadioStates(),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))}render(){const e={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return x`<div class=${Te(e)}>
      ${z(this,b,Ae).call(this)}
    </div>`}};b=new WeakSet;Ae=function(){return[z(this,b,qe).call(this),z(this,b,Oe).call(this),z(this,b,Pe).call(this)].map(t=>x`${t}`)};qe=function(){if(this.label)return x` <gds-form-control-header class="size-${this.size}">
        <label id="group-label" for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};Oe=function(){return x` <div
      class="content"
      @keydown=${this._handleKeyDown}
      @focus=${this._handleFocus}
    >
      <slot @change=${this._handleRadioChange}></slot>
    </div>`};Pe=function(){return x` <gds-form-control-footer
      class="size-${this.size}"
      .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
    >
    </gds-form-control-footer>`};n.styles=[Je];g([i()],n.prototype,"size",2);g([i()],n.prototype,"direction",2);g([i({attribute:"supporting-text"})],n.prototype,"supportingText",2);g([i({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],n.prototype,"showExtendedSupportingText",2);g([Ve(".content")],n.prototype,"_contentElement",2);g([k("value")],n.prototype,"_handleValueChange",1);g([k("size")],n.prototype,"_handleSizeChange",1);g([k("invalid")],n.prototype,"_syncRadioStates",1);n=g([Ge()],n);let T=class extends n{};T=g([C("gds-radio-group")],T);const zt={title:"Components/Radio",component:"gds-radio-group",tags:["autodocs"],parameters:{docs:{description:{component:`Radio buttons are form controls that allow users to select a single option from a set of mutually exclusive choices.<br/>
They are grouped using a radio group component which manages selection, keyboard navigation, and validation.

Radio groups provide built-in validation for required selection, proper configuration (label/value),
and minimum number of options.<br/> They support both vertical and horizontal layouts, and can be sized
to fit different space requirements.`}}}},u={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0},args:{label:"Label",supportingText:"Label support text."}}},m={...u,name:"Radio",args:{label:"Label",supportingText:"Label support text.",innerHTML:`
    <gds-radio label="Radio Option 1" supporting-text="Supporting text" value="1"></gds-radio>
    <gds-radio label="Radio Option 2" supporting-text="Supporting text" value="2"></gds-radio>
    <gds-radio label="Radio Option 3" supporting-text="Supporting text" value="3"></gds-radio>`}},h={...u,name:"States",render:()=>c`
    <div class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        value="2"
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
  `},v={...u,name:"Validation",render:()=>c`
    <form class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        show-extended-supporting-text
        .validator=${{validate:e=>{if(!e.value)return[{...e.validity,valid:!1,customError:!0},"This is required"]}}}
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio
          label="Radio Label"
          value="1"
          .invalid=${!0}
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="2"
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
      <gds-button type="submit">Submit</gds-button>
    </form>
  `},f={...u,name:"Missing Label",render:()=>c`
    <gds-flex gap="xl">
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="positive"
        >
          <gds-icon-circle-check></gds-icon-circle-check>
          <gds-text tag="small">Valid: Label and Value</gds-text>
        </gds-card>
        <gds-card>
          <gds-radio-group label="Group Label" supporting-text="Support text">
            <span slot="extended-supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <gds-radio label="Radio Label" value="1"></gds-radio>
            <gds-radio label="Radio Label" value="2"></gds-radio>
          </gds-radio-group>
        </gds-card>
      </gds-flex>
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="negative"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
          <gds-text tag="small"> Invalid: Missing label </gds-text>
        </gds-card>
        <gds-card>
          <gds-radio-group label="Group Label" supporting-text="Support text">
            <span slot="extended-supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <gds-radio value="1"></gds-radio>
            <gds-radio value="2"></gds-radio>
          </gds-radio-group>
        </gds-card>
      </gds-flex>
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="negative"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
          <gds-text tag="small"> Invalid: Missing value </gds-text>
        </gds-card>
        <gds-card>
          <gds-radio-group label="Group Label" supporting-text="Support text">
            <span slot="extended-supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <gds-radio label="Radio Label"></gds-radio>
            <gds-radio label="Radio Label"></gds-radio>
          </gds-radio-group>
        </gds-card>
      </gds-flex>
    </gds-flex>
  `},y={...u,name:"Single Radio",render:()=>c`
    <div class="radio-group">
      <gds-radio-group>
        <gds-radio value="1" label="Radio Label"></gds-radio>
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
  `},w={...u,name:"Disabled",render:()=>c`
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
  `},R={...u,name:"Size",render:()=>c`
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
  `},E={...u,name:"Direction",render:()=>c`
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
  `},S={...u,name:"Radio group label",render:()=>c`
    <div class="radio-group">
      <gds-radio-group>
        <gds-radio label="Radio Label" value="1"></gds-radio>
        <gds-radio label="Radio Label" value="2"></gds-radio>
      </gds-radio-group>
    </div>
  `};var $,A,q,O,P;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(q=(A=m.parameters)==null?void 0:A.docs)==null?void 0:q.source},description:{story:`Radio buttons allow users to select a single option from a list of two or more mutually exclusive options.<br />
Each radio button must have both a label and a value.

Usage:

\`\`\`html
<gds-radio-group label="Select an option">
  <gds-radio label="Option 1" value="1"></gds-radio>
  <gds-radio label="Option 2" value="2"></gds-radio>
</gds-radio-group>
\`\`\``,...(P=(O=m.parameters)==null?void 0:O.docs)==null?void 0:P.description}}};var M,F,V,I,W;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'States',
  render: () => html\`
    <div class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        value="2"
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
}`,...(V=(F=h.parameters)==null?void 0:F.docs)==null?void 0:V.source},description:{story:`Radio buttons can be in different states:
- Default: The normal, interactive state
- Selected: When a radio button is chosen
- Disabled: When the radio button cannot be interacted with
- With supporting text: Additional context below the label`,...(W=(I=h.parameters)==null?void 0:I.docs)==null?void 0:W.description}}};var j,B,H,K,U;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Validation',
  render: () => html\`
    <form class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        show-extended-supporting-text
        .validator=\${{
    validate: (el: GdsRadioGroup) => {
      if (!el.value) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'This is required'];
    }
  }}
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio
          label="Radio Label"
          value="1"
          .invalid=\${true}
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="2"
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
      <gds-button type="submit">Submit</gds-button>
    </form>
  \`
}`,...(H=(B=v.parameters)==null?void 0:B.docs)==null?void 0:H.source},description:{story:`Radio groups support validation:
- Required selection: Shows error when no option is selected
- Missing properties: Shows error when radios lack required label or value
- Minimum options: Shows error when group has fewer than two radio buttons

The error message appears below the radio group.`,...(U=(K=v.parameters)==null?void 0:K.docs)==null?void 0:U.description}}};var J,N,Q,X,Y;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Missing Label',
  render: () => html\`
    <gds-flex gap="xl">
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="positive"
        >
          <gds-icon-circle-check></gds-icon-circle-check>
          <gds-text tag="small">Valid: Label and Value</gds-text>
        </gds-card>
        <gds-card>
          <gds-radio-group label="Group Label" supporting-text="Support text">
            <span slot="extended-supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <gds-radio label="Radio Label" value="1"></gds-radio>
            <gds-radio label="Radio Label" value="2"></gds-radio>
          </gds-radio-group>
        </gds-card>
      </gds-flex>
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="negative"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
          <gds-text tag="small"> Invalid: Missing label </gds-text>
        </gds-card>
        <gds-card>
          <gds-radio-group label="Group Label" supporting-text="Support text">
            <span slot="extended-supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <gds-radio value="1"></gds-radio>
            <gds-radio value="2"></gds-radio>
          </gds-radio-group>
        </gds-card>
      </gds-flex>
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="negative"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
          <gds-text tag="small"> Invalid: Missing value </gds-text>
        </gds-card>
        <gds-card>
          <gds-radio-group label="Group Label" supporting-text="Support text">
            <span slot="extended-supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <gds-radio label="Radio Label"></gds-radio>
            <gds-radio label="Radio Label"></gds-radio>
          </gds-radio-group>
        </gds-card>
      </gds-flex>
    </gds-flex>
  \`
}`,...(Q=(N=f.parameters)==null?void 0:N.docs)==null?void 0:Q.source},description:{story:`This example demonstrates validation when radio buttons are missing required properties.
Each radio button must have both:
- label: The text displayed next to the radio button
- value: The data value associated with the option`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,te,ae,oe;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Single Radio',
  render: () => html\`
    <div class="radio-group">
      <gds-radio-group>
        <gds-radio value="1" label="Radio Label"></gds-radio>
      </gds-radio-group>
    </div>
  \`
}`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:`This example shows the validation error when attempting to create a radio group with only one radio button.<br/>
Radio groups must contain at least two options to provide a meaningful choice.`,...(oe=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:oe.description}}};var re,se,ie,de,ne;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
An error message is displayed if the form is submitted without a selection.`,...(ne=(de=L.parameters)==null?void 0:de.docs)==null?void 0:ne.description}}};var le,pe,ge,ue,ce;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ge=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:ge.source},description:{story:`Disabled radio buttons cannot be interacted with and appear visually muted.
Use this state for options that are temporarily unavailable.`,...(ce=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:ce.description}}};var xe,be,me,he,ve;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(me=(be=R.parameters)==null?void 0:be.docs)==null?void 0:me.source},description:{story:`Radio buttons support two sizes:
- Large (default): Standard size for most use cases
- Small: Compact size for space-constrained layouts

The size can be set on the radio group and applies to all radio buttons within.`,...(ve=(he=R.parameters)==null?void 0:he.docs)==null?void 0:ve.description}}};var fe,ye,Le,we,Re;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Le=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:Le.source},description:{story:`Radio buttons can be arranged in two directions:
- Column (default): Vertical stacking for clear separation
- Row: Horizontal alignment for compact layouts that will break to new line when not enough space is available

Choose the direction based on available space and number of options.`,...(Re=(we=E.parameters)==null?void 0:we.docs)==null?void 0:Re.description}}};var Ee,Se,_e,ze,ke;S.parameters={...S.parameters,docs:{...(Ee=S.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(_e=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:_e.source},description:{story:`While radio groups can be created without a label, it's recommended to always provide one for clarity and accessibility.
The label helps users understand what the options are for.

In certain cases when space is limited, the group label can be omitted.`,...(ke=(ze=S.parameters)==null?void 0:ze.docs)==null?void 0:ke.description}}};const kt=["RadioButton","States","Validation","MissingLabel","Single","Required","Disabled","Size","Direction","GroupLabel"];export{E as Direction,w as Disabled,S as GroupLabel,f as MissingLabel,m as RadioButton,L as Required,y as Single,R as Size,h as States,v as Validation,kt as __namedExportsOrder,zt as default};
