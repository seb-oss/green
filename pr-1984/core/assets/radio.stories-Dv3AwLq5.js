import{i as z,x}from"./lit-element-C_s9q329.js";import{n as i,g as k,G as we,h as c,r as $e}from"./custom-element-scoping-BEGY3AqQ.js";import{t as Ee}from"./tokens.style-CFvqdzpw.js";import{w as G}from"./watch-tFciLXSI.js";import{l as _e}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{e as Se}from"./class-map-Bz98xO8-.js";import{T as Te}from"./transitional-styles-iv5lM2WH.js";import{a as qe}from"./query-p8xgzTDt.js";import{a as Ae}from"./button-DMqiAWPO.js";import"./form-control-footer-31u3ZPFB.js";import"./flex-tnFv_7np.js";import"./card-BihnooJR.js";import"./text-DQ_oI5A1.js";import"./divider-Dm4d-5N4.js";import"./circle-check-DzwSpRnk.js";import"./cross-small-CIJy4RQ0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./triangle-exclamation-BVOOPWQa.js";import"./icon-DYBgint3.js";import"./badge-Dc9DlXiN.js";import"./div-Cnle9s5w.js";const Oe=z`
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
      outline-color: var(--_radio-outline-color);
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

    :host([disabled]) {
      pointer-events: none;
    }

    :host([disabled]) .radio .dot {
      box-shadow: none;
      background-color: var(--gds-color-l3-content-disabled);
    }
  }
`,Pe=z`
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
`;var Me=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,D=(e,t,a,r)=>{for(var o=r>1?void 0:r?Fe(t,a):t,s=e.length-1,d;s>=0;s--)(d=e[s])&&(o=(r?d(t,a,o):d(o))||o);return r&&o&&Me(t,a,o),o};let _=class extends we{constructor(){super(),this.label="",this.supportingText=""}connectedCallback(){super.connectedCallback(),Te.instance.apply(this,"gds-selection-field-label")}render(){const e={"selection-field-label":!0,"has-supporting-text":!!this.supportingText};return c`
      <div class="selection-field-container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${Se(e)}">
          <label class="primary-label"> ${this.label} </label>
          ${this.label?c`
                <span class="supporting-text"> ${this.supportingText} </span>
              `:""}
        </div>
      </div>
    `}};_.styles=[Ee,Pe];D([i()],_.prototype,"label",2);D([i({attribute:"supporting-text"})],_.prototype,"supportingText",2);_=D([k("gds-selection-field-label"),_e()],_);var We=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,p=(e,t,a,r)=>{for(var o=r>1?void 0:r?Ve(t,a):t,s=e.length-1,d;s>=0;s--)(d=e[s])&&(o=(r?d(t,a,o):d(o))||o);return r&&o&&We(t,a,o),o};let n=class extends we{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,this.addEventListener("keydown",this._handleKeyDown),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this._updateAriaState()}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.toggleAttribute("aria-invalid",this.invalid)}updated(e){super.updated(e),(e.has("checked")||e.has("disabled")||e.has("invalid"))&&this._updateAriaState()}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}_handleClick(e){this.disabled||!this.value||!this.label||(e.preventDefault(),this.checked=!0,this.focus(),this.dispatchEvent(new Event("change",{bubbles:!0})))}_handleKeyDown(e){this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0})))}render(){return c`
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
    `}};n.styles=[Ee,Oe];p([i()],n.prototype,"label",2);p([i({attribute:"supporting-text"})],n.prototype,"supportingText",2);p([i()],n.prototype,"value",2);p([i({type:Boolean,reflect:!0})],n.prototype,"checked",2);p([i({type:Boolean,reflect:!0})],n.prototype,"disabled",2);p([i({type:Boolean})],n.prototype,"invalid",2);p([$e()],n.prototype,"_isFocused",2);p([G("disabled")],n.prototype,"_handleDisabledChange",1);n=p([k("gds-radio")],n);const Ie=z`
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
    --_radio-outline-color: var(--gds-color-l3-content-tertiary);
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
    --_radio-outline-color: var(--gds-color-l3-content-negative);
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
`;var je=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,ze=e=>{throw TypeError(e)},u=(e,t,a,r)=>{for(var o=r>1?void 0:r?Be(t,a):t,s=e.length-1,d;s>=0;s--)(d=e[s])&&(o=(r?d(t,a,o):d(o))||o);return r&&o&&je(t,a,o),o},He=(e,t,a)=>t.has(e)||ze("Cannot "+a),Ke=(e,t,a)=>t.has(e)?ze("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),S=(e,t,a)=>(He(e,t,"access private method"),a),b,ke,Ge,De,Ce;let l=class extends Ae{constructor(){super(...arguments),Ke(this,b),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.updateComplete.then(()=>{this._syncRadioStates(),this._initializeFocusable()}),this.addEventListener("invalid",this._syncRadioStates)}_initializeFocusable(){this._contentElement.setAttribute("tabindex","0"),this.radios.forEach(e=>{e.setAttribute("tabindex","-1")})}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._syncRadioStates()}_syncRadioStates(){this.radios.forEach(e=>{e.checked=e.value===this.value,e.size=this.size,e.invalid=this.invalid})}_handleFocus(){const t=this.radios.find(a=>a.checked)||this.radios[0];t&&t.focus()}_dispatchChangeEvents(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))}_handleRadioChange(e){const t=e.target;t.hasAttribute("value")&&(this.value=t.value,this._syncRadioStates(),this._dispatchChangeEvents())}_handleKeyDown(e){const t=this.radios.filter(s=>!s.hasAttribute("disabled"));if(t.length===0)return;let a=t.findIndex(s=>s.checked||document.activeElement===s);a===-1&&(a=0);let r;switch(e.key){case"ArrowDown":case"ArrowRight":{e.preventDefault(),r=(a+1)%t.length;break}case"ArrowUp":case"ArrowLeft":{e.preventDefault(),r=(a-1+t.length)%t.length;break}case"Tab":return;default:return}const o=t[r];o.checked=!0,o.focus(),this.value=o.value,this._syncRadioStates(),this._dispatchChangeEvents()}render(){const e={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return c`<div class=${Se(e)}>
      ${S(this,b,ke).call(this)}
    </div>`}};b=new WeakSet;ke=function(){return[S(this,b,Ge).call(this),S(this,b,De).call(this),S(this,b,Ce).call(this)].map(t=>c`${t}`)};Ge=function(){if(this.label)return c` <gds-form-control-header class="size-${this.size}">
        <label id="group-label" for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};De=function(){return c` <div
      class="content"
      @keydown=${this._handleKeyDown}
      @focus=${this._handleFocus}
    >
      <slot @change=${this._handleRadioChange}></slot>
    </div>`};Ce=function(){return c` <gds-form-control-footer
      class="size-${this.size}"
      .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
    >
    </gds-form-control-footer>`};l.styles=[Ie];u([i()],l.prototype,"size",2);u([i()],l.prototype,"direction",2);u([i({attribute:"supporting-text"})],l.prototype,"supportingText",2);u([i({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],l.prototype,"showExtendedSupportingText",2);u([qe(".content")],l.prototype,"_contentElement",2);u([G("value")],l.prototype,"_handleValueChange",1);u([G("invalid")],l.prototype,"_syncRadioStates",1);l=u([_e()],l);let C=class extends l{};C=u([k("gds-radio-group")],C);const Lt={title:"Components/Radio",component:"gds-radio-group",tags:["autodocs"],parameters:{docs:{description:{component:`Radio buttons are form controls that allow users to select a single option from a set of mutually exclusive choices.<br/>
They are grouped using a radio group component which manages selection, keyboard navigation, and validation.

Radio groups provide built-in validation for required selection, proper configuration (label/value),
and minimum number of options.<br/> They support both vertical and horizontal layouts, and can be sized
to fit different space requirements.`}}}},g={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0},args:{label:"Label",supportingText:"Label support text."}}},m={...g,name:"Radio",args:{label:"Label",supportingText:"Label support text.",innerHTML:`
    <gds-radio label="Radio Option 1" supporting-text="Supporting text" value="1"></gds-radio>
    <gds-radio label="Radio Option 2" supporting-text="Supporting text" value="2"></gds-radio>
    <gds-radio label="Radio Option 3" supporting-text="Supporting text" value="3"></gds-radio>`}},h={...g,name:"States",render:()=>x`
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
  `},v={...g,name:"Validation",render:()=>x`
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
  `},f={...g,name:"Missing Properties",render:()=>x`
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
        <gds-card align-items="flex-start" gap="m">
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
        <form method="dialog">
          <gds-card align-items="flex-start" gap="m">
            <gds-radio-group
              label="Group Label"
              supporting-text="Support text"
              .validator=${{validate:e=>e.radios.filter(a=>!a.label).length>0?[{...e.validity,valid:!1,customError:!0},"Radio buttons require label"]:[{...e.validity,valid:!0,customError:!1},""]}}
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-radio value="1"></gds-radio>
              <gds-radio value="2"></gds-radio>
            </gds-radio-group>
            <gds-button type="submit" size="small">Submit</gds-button>
          </gds-card>
        </form>
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
        <form method="dialog">
          <gds-card align-items="flex-start" gap="m">
            <gds-radio-group
              label="Group Label"
              supporting-text="Support text"
              .validator=${{validate:e=>e.radios.filter(a=>!a.value).length>0?[{...e.validity,valid:!1,customError:!0},"Radio buttons require value"]:[{...e.validity,valid:!0,customError:!1},""]}}
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-radio label="Radio Label"></gds-radio>
              <gds-radio label="Radio Label"></gds-radio>
            </gds-radio-group>
            <gds-button type="submit" size="small">Submit</gds-button>
          </gds-card>
        </form>
      </gds-flex>
    </gds-flex>
  `},y={...g,name:"Required",render:()=>x`
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
  `},L={...g,name:"Disabled",render:()=>x`
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
  `},R={...g,name:"Size",render:()=>x`
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
  `},w={...g,name:"Direction",render:()=>x`
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
  `},E={...g,name:"Radio group label",render:()=>x`
    <div class="radio-group">
      <gds-radio-group>
        <gds-radio label="Radio Label" value="1"></gds-radio>
        <gds-radio label="Radio Label" value="2"></gds-radio>
      </gds-radio-group>
    </div>
  `};var $,T,q,A,O;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(q=(T=m.parameters)==null?void 0:T.docs)==null?void 0:q.source},description:{story:`Radio buttons allow users to select a single option from a list of two or more mutually exclusive options.<br />
Each radio button must have both a label and a value.

Usage:

\`\`\`html
<gds-radio-group label="Select an option">
  <gds-radio label="Option 1" value="1"></gds-radio>
  <gds-radio label="Option 2" value="2"></gds-radio>
</gds-radio-group>
\`\`\``,...(O=(A=m.parameters)==null?void 0:A.docs)==null?void 0:O.description}}};var P,M,F,W,V;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(M=h.parameters)==null?void 0:M.docs)==null?void 0:F.source},description:{story:`Radio buttons can be in different states:
- Default: The normal, interactive state
- Selected: When a radio button is chosen
- Disabled: When the radio button cannot be interacted with
- With supporting text: Additional context below the label`,...(V=(W=h.parameters)==null?void 0:W.docs)==null?void 0:V.description}}};var I,j,B,H,K;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(B=(j=v.parameters)==null?void 0:j.docs)==null?void 0:B.source},description:{story:`Radio groups support validation:
- Required selection: Shows error when no option is selected
- Missing properties: Shows error when radios lack required label or value
- Minimum options: Shows error when group has fewer than two radio buttons

The error message appears below the radio group.`,...(K=(H=v.parameters)==null?void 0:H.docs)==null?void 0:K.description}}};var U,J,N,Q,X;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Missing Properties',
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
        <gds-card align-items="flex-start" gap="m">
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
        <form method="dialog">
          <gds-card align-items="flex-start" gap="m">
            <gds-radio-group
              label="Group Label"
              supporting-text="Support text"
              .validator=\${{
    validate: (el: GdsRadioGroup) => {
      const radiosWithoutLabel = el.radios.filter(radio => !radio.label);
      if (radiosWithoutLabel.length > 0) {
        return [{
          ...el.validity,
          valid: false,
          customError: true
        }, 'Radio buttons require label'];
      }
      return [{
        ...el.validity,
        valid: true,
        customError: false
      }, ''];
    }
  }}
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-radio value="1"></gds-radio>
              <gds-radio value="2"></gds-radio>
            </gds-radio-group>
            <gds-button type="submit" size="small">Submit</gds-button>
          </gds-card>
        </form>
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
        <form method="dialog">
          <gds-card align-items="flex-start" gap="m">
            <gds-radio-group
              label="Group Label"
              supporting-text="Support text"
              .validator=\${{
    validate: (el: GdsRadioGroup) => {
      const radiosWithoutLabel = el.radios.filter(radio => !radio.value);
      if (radiosWithoutLabel.length > 0) {
        return [{
          ...el.validity,
          valid: false,
          customError: true
        }, 'Radio buttons require value'];
      }
      return [{
        ...el.validity,
        valid: true,
        customError: false
      }, ''];
    }
  }}
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-radio label="Radio Label"></gds-radio>
              <gds-radio label="Radio Label"></gds-radio>
            </gds-radio-group>
            <gds-button type="submit" size="small">Submit</gds-button>
          </gds-card>
        </form>
      </gds-flex>
    </gds-flex>
  \`
}`,...(N=(J=f.parameters)==null?void 0:J.docs)==null?void 0:N.source},description:{story:`This example demonstrates validation when radio buttons are missing required properties.
Each radio button must have both:
- label: The text displayed next to the radio button
- value: The data value associated with the option`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,ee,te,ae;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:`When the required attribute is set on a radio group, users must select an option before form submission.
An error message is displayed if the form is submitted without a selection.`,...(ae=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ae.description}}};var oe,re,se,ie,de;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(re=L.parameters)==null?void 0:re.docs)==null?void 0:se.source},description:{story:`Disabled radio buttons cannot be interacted with and appear visually muted.
Use this state for options that are temporarily unavailable.`,...(de=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:de.description}}};var ne,le,pe,ue,ge;R.parameters={...R.parameters,docs:{...(ne=R.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(pe=(le=R.parameters)==null?void 0:le.docs)==null?void 0:pe.source},description:{story:`Radio buttons support two sizes:
- Large (default): Standard size for most use cases
- Small: Compact size for space-constrained layouts

The size can be set on the radio group and applies to all radio buttons within.`,...(ge=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:ge.description}}};var ce,xe,be,me,he;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(be=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:be.source},description:{story:`Radio buttons can be arranged in two directions:
- Column (default): Vertical stacking for clear separation
- Row: Horizontal alignment for compact layouts that will break to new line when not enough space is available

Choose the direction based on available space and number of options.`,...(he=(me=w.parameters)==null?void 0:me.docs)==null?void 0:he.description}}};var ve,fe,ye,Le,Re;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ye=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:ye.source},description:{story:`While radio groups can be created without a label, it's recommended to always provide one for clarity and accessibility.
The label helps users understand what the options are for.

In certain cases when space is limited, the group label can be omitted.`,...(Re=(Le=E.parameters)==null?void 0:Le.docs)==null?void 0:Re.description}}};const Rt=["RadioButton","States","Validation","MissingLabel","Required","Disabled","Size","Direction","GroupLabel"];export{w as Direction,L as Disabled,E as GroupLabel,f as MissingLabel,m as RadioButton,y as Required,R as Size,h as States,v as Validation,Rt as __namedExportsOrder,Lt as default};
