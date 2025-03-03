import{i as oe,x as b}from"./lit-element-C_s9q329.js";import{n as o,g as k,G as se,h as c,r as ce}from"./custom-element-scoping-BEGY3AqQ.js";import{e as $}from"./class-map-Bz98xO8-.js";import{t as ie}from"./tokens.style-CFvqdzpw.js";import{l as xe}from"./localized-decorator-DtmrKsyB.js";import{m as he}from"./runtime-BL31MtW8.js";import{T as be}from"./transitional-styles-iv5lM2WH.js";import{w as z}from"./watch-tFciLXSI.js";import{a as ve}from"./query-p8xgzTDt.js";import{a as me}from"./button-DMqiAWPO.js";import"./form-control-footer-31u3ZPFB.js";import"./flex-tnFv_7np.js";import"./card-BihnooJR.js";import"./text-DQ_oI5A1.js";import"./divider-Dm4d-5N4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./triangle-exclamation-BVOOPWQa.js";import"./icon-DYBgint3.js";import"./badge-Dc9DlXiN.js";import"./div-Cnle9s5w.js";const de=oe`
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
`,fe=oe`
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
`;var ye=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,x=(e,t,a,s)=>{for(var r=s>1?void 0:s?Ee(t,a):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(s?n(t,a,r):n(r))||r);return s&&r&&ye(t,a,r),r};let g=class extends se{constructor(){super(),this.label="",this.supportingText="",this.type="radio",this.size="large",this.disabled=!1,this.invalid=!1}connectedCallback(){super.connectedCallback(),be.instance.apply(this,"gds-selection-field-label")}render(){const e={"selection-field-label":!0,[`type-${this.type}`]:!0,invalid:this.invalid,disabled:this.disabled,small:this.size==="small","has-supporting-text":!!this.supportingText};return c`
      <div class="selection-field-container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${$(e)}" part="_selection-field-label">
          <label class="primary-label" part="primary-label">
            ${this.label}
          </label>
          ${this.supportingText?c`
                <span class="supporting-text" part="_supporting-text">
                  ${this.supportingText}
                </span>
              `:""}
        </div>
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};g.styles=[ie,fe];x([o()],g.prototype,"label",2);x([o({attribute:"supporting-text"})],g.prototype,"supportingText",2);x([o()],g.prototype,"type",2);x([o()],g.prototype,"size",2);x([o({type:Boolean,reflect:!0})],g.prototype,"disabled",2);x([o({type:Boolean})],g.prototype,"invalid",2);x([z("disabled")],g.prototype,"_handleDisabledChange",1);g=x([k("gds-selection-field-label"),xe()],g);var we=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,u=(e,t,a,s)=>{for(var r=s>1?void 0:s?Re(t,a):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(s?n(t,a,r):n(r))||r);return s&&r&&we(t,a,r),r};let l=class extends se{constructor(){super(...arguments),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.size="large",this.invalid=!1,this._isFocused=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio")}_handleClick(){this.disabled||(this.checked=!0,this.focus(),this.dispatchEvent(new Event("change",{bubbles:!0})))}_handleKeyDown(e){this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._handleClick())}focus(){var t;const e=(t=this.renderRoot)==null?void 0:t.querySelector(".radio");e&&e.focus()}render(){const e={radio:!0,checked:this.checked,disabled:this.disabled,focused:this._isFocused,invalid:this.invalid};return c`
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
          class=${$(e)}
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
    `}};l.styles=[ie,de];u([o()],l.prototype,"label",2);u([o({attribute:"supporting-text"})],l.prototype,"supportingText",2);u([o()],l.prototype,"value",2);u([o({type:Boolean,reflect:!0})],l.prototype,"checked",2);u([o({type:Boolean,reflect:!0})],l.prototype,"disabled",2);u([o()],l.prototype,"size",2);u([o({type:Boolean})],l.prototype,"invalid",2);u([ce()],l.prototype,"_isFocused",2);l=u([k("gds-radio")],l);var Le=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,ne=e=>{throw TypeError(e)},p=(e,t,a,s)=>{for(var r=s>1?void 0:s?_e(t,a):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(s?n(t,a,r):n(r))||r);return s&&r&&Le(t,a,r),r},Se=(e,t,a)=>t.has(e)||ne("Cannot "+a),ze=(e,t,a)=>t.has(e)?ne("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),S=(e,t,a)=>(Se(e,t,"access private method"),a),v,le,pe,ge,ue;let d=class extends me{constructor(){super(...arguments),ze(this,v),this.label="",this.name="",this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1}get radios(){return Array.from(this.querySelectorAll("gds-radio"))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.updateComplete.then(()=>{this._syncRadioStates(),this._initializeFocusable()})}_initializeFocusable(){this._contentElement.setAttribute("tabindex","0"),this.radios.forEach(e=>{e.setAttribute("tabindex","-1")})}checkValidity(){if(!this.validator)return this.required&&!this.value?(this.invalid=!0,this.errorMessage=he("Please select an option"),!1):!0;const e=this.validator.validate(this);return e&&(this.invalid=!e[0].valid,this.errorMessage=e[1]),this.radios.forEach(t=>{t.invalid=this.invalid}),this.validity.valid}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._syncRadioStates(),this.checkValidity()}_handleRequiredChange(){this.checkValidity()}_handleSizeChange(){this.radios.forEach(e=>{e.size=this.size})}_syncRadioStates(){const e=this.checkValidity();this.radios.forEach(t=>{t.checked=t.value===this.value,t.size=this.size,t.invalid=!e})}_handleFocus(){const t=this.radios.find(a=>a.checked)||this.radios[0];t&&t.focus()}_handleRadioChange(e){const t=e.target;if(t.hasAttribute("value")){const a=t.getAttribute("value");this.value=a,this._syncRadioStates(),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))}}_handleKeyDown(e){const t=this.radios.filter(i=>!i.hasAttribute("disabled"));if(t.length===0)return;let a=t.findIndex(i=>i.checked||document.activeElement===i);a===-1&&(a=0);let s;switch(e.key){case"ArrowDown":case"ArrowRight":{e.preventDefault(),s=(a+1)%t.length;break}case"ArrowUp":case"ArrowLeft":{e.preventDefault(),s=(a-1+t.length)%t.length;break}case"Tab":return;default:return}const r=t[s];r.checked=!0,r.focus(),this.value=r.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))}render(){const e={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return c`<div class=${$(e)}>
      ${S(this,v,le).call(this)}
    </div>`}};v=new WeakSet;le=function(){return[S(this,v,pe).call(this),S(this,v,ge).call(this),S(this,v,ue).call(this)].map(t=>c`${t}`)};pe=function(){if(this.label)return c` <gds-form-control-header class="size-${this.size}">
        <label id="group-label" for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};ge=function(){return c` <div
      class="content"
      @keydown=${this._handleKeyDown}
      @focus=${this._handleFocus}
    >
      <slot @change=${this._handleRadioChange}></slot>
    </div>`};ue=function(){return c` <gds-form-control-footer
      class="size-${this.size}"
      .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
    >
    </gds-form-control-footer>`};d.styles=[de];p([o()],d.prototype,"label",2);p([o()],d.prototype,"name",2);p([o()],d.prototype,"size",2);p([o()],d.prototype,"direction",2);p([o({attribute:"supporting-text"})],d.prototype,"supportingText",2);p([o({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],d.prototype,"showExtendedSupportingText",2);p([ve(".content")],d.prototype,"_contentElement",2);p([z("value")],d.prototype,"_handleValueChange",1);p([z("required")],d.prototype,"_handleRequiredChange",1);p([z("size")],d.prototype,"_handleSizeChange",1);d=p([k("gds-radio-group")],d);const et={title:"Components/Radio",component:"gds-radio-group",tags:["autodocs"]},h={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0},args:{label:"Label",supportingText:"Label support text."}}},m={...h,name:"Radio",args:{label:"Label",supportingText:"Label support text.",innerHTML:`
    <gds-radio label="Radio Option 1" supporting-text="Supporting text" value="1"></gds-radio>
    <gds-radio label="Radio Option 2" supporting-text="Supporting text" value="2"></gds-radio>
    <gds-radio label="Radio Option 3" supporting-text="Supporting text" value="3"></gds-radio>`}},y={...h,name:"States",render:()=>b`
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
  `},f={...h,name:"Validation",render:()=>b`
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
  `},E={...h,name:"Required",render:()=>b`
    <div class="radio-group">
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
    </div>
  `},w={...h,name:"Disabled",render:()=>b`
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
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="2"
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  `},R={...h,name:"Size",render:()=>b`
    <div class="radio-group">
      <gds-flex max-width="640px" gap="xl" margin="0 auto">
        <gds-card gap="s">
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
        </gds-card>
        <gds-card gap="s">
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
        </gds-card>
      </gds-flex>
    </div>
  `},L={...h,name:"Direction",render:()=>b`
    <div class="radio-group">
      <gds-flex gap="xl" margin="0 auto">
        <gds-card gap="s">
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
          </gds-radio-group>
        </gds-card>
        <gds-card gap="s" flex="1">
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
          </gds-radio-group>
        </gds-card>
      </gds-flex>
    </div>
  `},_={...h,name:"No Label on group",render:()=>b`
    <div class="radio-group">
      <gds-radio-group>
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio label="Radio Label" value="1"></gds-radio>
        <gds-radio label="Radio Label" value="2"></gds-radio>
      </gds-radio-group>
    </div>
  `};var C,D,G,T,O;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(G=(D=m.parameters)==null?void 0:D.docs)==null?void 0:G.source},description:{story:"TODO: Add documentation",...(O=(T=m.parameters)==null?void 0:T.docs)==null?void 0:O.description}}};var P,A,F;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(A=y.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var V,q,B,M,j;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(B=(q=f.parameters)==null?void 0:q.docs)==null?void 0:B.source},description:{story:"TODO: Add documentation",...(j=(M=f.parameters)==null?void 0:M.docs)==null?void 0:j.description}}};var I,K,H;E.parameters={...E.parameters,docs:{...(I=E.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Required',
  render: () => html\`
    <div class="radio-group">
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
    </div>
  \`
}`,...(H=(K=E.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var N,W,U;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(U=(W=w.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var J,Q,X;R.parameters={...R.parameters,docs:{...(J=R.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Size',
  render: () => html\`
    <div class="radio-group">
      <gds-flex max-width="640px" gap="xl" margin="0 auto">
        <gds-card gap="s">
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
        </gds-card>
        <gds-card gap="s">
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
        </gds-card>
      </gds-flex>
    </div>
  \`
}`,...(X=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;L.parameters={...L.parameters,docs:{...(Y=L.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Direction',
  render: () => html\`
    <div class="radio-group">
      <gds-flex gap="xl" margin="0 auto">
        <gds-card gap="s">
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
          </gds-radio-group>
        </gds-card>
        <gds-card gap="s" flex="1">
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
          </gds-radio-group>
        </gds-card>
      </gds-flex>
    </div>
  \`
}`,...(ee=(Z=L.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ae;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'No Label on group',
  render: () => html\`
    <div class="radio-group">
      <gds-radio-group>
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio label="Radio Label" value="1"></gds-radio>
        <gds-radio label="Radio Label" value="2"></gds-radio>
      </gds-radio-group>
    </div>
  \`
}`,...(ae=(re=_.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const tt=["RadioButton","States","Validation","Required","Disabled","Size","Direction","GroupLabel"];export{L as Direction,w as Disabled,_ as GroupLabel,m as RadioButton,E as Required,R as Size,y as States,f as Validation,tt as __namedExportsOrder,et as default};
