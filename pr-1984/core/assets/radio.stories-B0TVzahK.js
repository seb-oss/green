import{i as ae,x as h}from"./lit-element-C_s9q329.js";import{n as a,g as z,G as se,h as c,r as ce}from"./custom-element-scoping-BEGY3AqQ.js";import{e as k}from"./class-map-Bz98xO8-.js";import{t as de}from"./tokens.style-CFvqdzpw.js";import{l as xe}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{T as be}from"./transitional-styles-iv5lM2WH.js";import{w as $}from"./watch-tFciLXSI.js";import{a as he}from"./query-p8xgzTDt.js";import{a as ve}from"./button-DMqiAWPO.js";import"./form-control-footer-31u3ZPFB.js";import"./flex-tnFv_7np.js";import"./card-BihnooJR.js";import"./text-DQ_oI5A1.js";import"./divider-Dm4d-5N4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./triangle-exclamation-BVOOPWQa.js";import"./icon-DYBgint3.js";import"./badge-Dc9DlXiN.js";import"./div-Cnle9s5w.js";const ie=ae`
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

      .content {
        display: flex;
        position: relative;
        max-width: max-content;
      }

      &.direction-row .content {
        flex-direction: row;
        flex-wrap: wrap;
        gap: var(--gds-space-l);
      }

      &.direction-column .content {
        flex-direction: column;
        gap: var(--gds-space-xs);
      }
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

      &:focus {
        outline-color: var(--gds-color-l3-content-tertiary);

        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (hover: hover) {
        &:hover,
        :host(:hover) & {
          background-color: var(--radio-bg-mix);
        }
      }

      &:active,
      :host(:active) & {
        background-color: var(--radio-bg-mix-active);
        scale: 0.96;
      }

      &[aria-checked='true']:active {
        .dot {
          box-shadow: inset 0 0 0 1px var(--radio-border-color-selected);
        }
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

        [aria-checked='true'] &,
        :active & {
          box-shadow: inset 0 0 0 var(--radio-border-width-selected)
            var(--radio-border-color-selected);
        }
      }
    }

    /* Disabled styles */

    :host([disabled]) {
      pointer-events: none;

      .radio .dot {
        box-shadow: none;
        background-color: var(--gds-color-l3-content-disabled);
      }
    }

    /*
    TODO:
     - [ ] Invalid styles 
     - [ ] Consider shuffling the logic to consolidate the styles
      

     */
    :host([invalid]:not([checked])) {
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
`,me=ae`
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

      .primary-label {
        font-size: var(--gds-text-size-detail-m);
        line-height: var(--gds-text-line-height-detail-m);
        font-weight: var(--gds-text-weight-book);

        .small & {
          font-size: var(--gds-text-size-detail-s);
          line-height: var(--gds-text-line-height-detail-s);
        }
      }

      .supporting-text {
        font-size: var(--gds-text-size-detail-s);
        line-height: var(--gds-text-line-height-detail-s);
        font-weight: var(--gds-text-weight-regular);

        .small & {
          font-size: var(--gds-text-size-detail-s);
          line-height: var(--gds-line-height-detail-s);
        }
      }

      &.disabled {
        color: var(--gds-color-l3-content-disabled);
      }

      &.has-supporting-text {
        padding-block-start: calc(1cap / 2);
      }

      &.invalid {
        color: var(--gds-color-l3-content-negative);
      }
    }

    @media (hover: hover) {
    }
  }
`;var fe=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,x=(e,t,r,s)=>{for(var o=s>1?void 0:s?ye(t,r):t,d=e.length-1,n;d>=0;d--)(n=e[d])&&(o=(s?n(t,r,o):n(o))||o);return s&&o&&fe(t,r,o),o};let p=class extends se{constructor(){super(),this.label="",this.supportingText="",this.type="radio",this.size="large",this.disabled=!1,this.invalid=!1}connectedCallback(){super.connectedCallback(),be.instance.apply(this,"gds-selection-field-label")}render(){const e={"selection-field-label":!0,[`type-${this.type}`]:!0,invalid:this.invalid,disabled:this.disabled,small:this.size==="small","has-supporting-text":!!this.supportingText};return c`
      <div class="selection-field-container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${k(e)}" part="_selection-field-label">
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
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};p.styles=[de,me];x([a()],p.prototype,"label",2);x([a({attribute:"supporting-text"})],p.prototype,"supportingText",2);x([a()],p.prototype,"type",2);x([a()],p.prototype,"size",2);x([a({type:Boolean,reflect:!0})],p.prototype,"disabled",2);x([a({type:Boolean})],p.prototype,"invalid",2);x([$("disabled")],p.prototype,"_handleDisabledChange",1);p=x([z("gds-selection-field-label"),xe()],p);var Ee=Object.defineProperty,we=Object.getOwnPropertyDescriptor,u=(e,t,r,s)=>{for(var o=s>1?void 0:s?we(t,r):t,d=e.length-1,n;d>=0;d--)(n=e[d])&&(o=(s?n(t,r,o):n(o))||o);return s&&o&&Ee(t,r,o),o};let l=class extends se{constructor(){super(...arguments),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.size="large",this.invalid=!1,this._isFocused=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio")}_handleClick(){this.disabled||(this.checked=!0,this.focus(),this.dispatchEvent(new Event("change",{bubbles:!0})))}_handleKeyDown(e){this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._handleClick())}focus(){var t;const e=(t=this.renderRoot)==null?void 0:t.querySelector(".radio");e&&e.focus()}render(){const e={radio:!0,checked:this.checked,disabled:this.disabled,focused:this._isFocused};return c`
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
          class=${k(e)}
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
    `}};l.styles=[de,ie];u([a()],l.prototype,"label",2);u([a({attribute:"supporting-text"})],l.prototype,"supportingText",2);u([a()],l.prototype,"value",2);u([a({type:Boolean,reflect:!0})],l.prototype,"checked",2);u([a({type:Boolean,reflect:!0})],l.prototype,"disabled",2);u([a()],l.prototype,"size",2);u([a({type:Boolean})],l.prototype,"invalid",2);u([ce()],l.prototype,"_isFocused",2);l=u([z("gds-radio")],l);var Re=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,ne=e=>{throw TypeError(e)},g=(e,t,r,s)=>{for(var o=s>1?void 0:s?Le(t,r):t,d=e.length-1,n;d>=0;d--)(n=e[d])&&(o=(s?n(t,r,o):n(o))||o);return s&&o&&Re(t,r,o),o},_e=(e,t,r)=>t.has(e)||ne("Cannot "+r),Se=(e,t,r)=>t.has(e)?ne("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),S=(e,t,r)=>(_e(e,t,"access private method"),r),v,le,pe,ge,ue;let i=class extends ve{constructor(){super(...arguments),Se(this,v),this.label="",this.name="",this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1}get radios(){return Array.from(this.querySelectorAll("gds-radio"))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.updateComplete.then(()=>{this._syncRadioStates(),this._initializeFocusable()})}_initializeFocusable(){this._contentElement.setAttribute("tabindex","0"),this.radios.forEach(e=>{e.setAttribute("tabindex","-1")})}_handleValueChange(){this._syncRadioStates(),this.checkValidity()}_handleSizeChange(){this.radios.forEach(e=>{e.size=this.size})}_syncRadioStates(){this.radios.forEach(e=>{e.checked=e.value===this.value,e.size=this.size})}_handleFocus(){const t=this.radios.find(r=>r.checked)||this.radios[0];t&&t.focus()}_handleRadioChange(e){const t=e.target;if(t.hasAttribute("value")){const r=t.getAttribute("value");this.value=r,this._syncRadioStates(),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))}}_handleKeyDown(e){const t=this.radios.filter(d=>!d.hasAttribute("disabled"));if(t.length===0)return;let r=t.findIndex(d=>d.checked||document.activeElement===d);r===-1&&(r=0);let s;switch(e.key){case"ArrowDown":case"ArrowRight":{e.preventDefault(),s=(r+1)%t.length;break}case"ArrowUp":case"ArrowLeft":{e.preventDefault(),s=(r-1+t.length)%t.length;break}case"Tab":return;default:return}const o=t[s];o.checked=!0,o.focus(),this.value=o.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))}_getValidityAnchor(){return this._contentElement||this}render(){const e={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return c`<div class=${k(e)}>
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
    </gds-form-control-footer>`};i.styles=[ie];g([a()],i.prototype,"label",2);g([a()],i.prototype,"name",2);g([a()],i.prototype,"size",2);g([a()],i.prototype,"direction",2);g([a({attribute:"supporting-text"})],i.prototype,"supportingText",2);g([a({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);g([he(".content")],i.prototype,"_contentElement",2);g([$("value")],i.prototype,"_handleValueChange",1);g([$("size")],i.prototype,"_handleSizeChange",1);i=g([z("gds-radio-group")],i);const Ze={title:"Components/Radio",component:"gds-radio-group",tags:["autodocs"]},b={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0},args:{label:"Label",supportingText:"Label support text."}}},m={...b,name:"Radio",args:{label:"Label",supportingText:"Label support text.",innerHTML:`
    <gds-radio label="Radio Option 1" supporting-text="Supporting text" value="1"></gds-radio>
    <gds-radio label="Radio Option 2" supporting-text="Supporting text" value="2"></gds-radio>
    <gds-radio label="Radio Option 3" supporting-text="Supporting text" value="3"></gds-radio>`}},y={...b,name:"States",render:()=>h`
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
          invalid
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  `},f={...b,name:"Validation",render:()=>h`
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
  `},E={...b,name:"Required",render:()=>h`
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
  `},w={...b,name:"Disabled",render:()=>h`
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
  `},R={...b,name:"Size",render:()=>h`
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
  `},L={...b,name:"Direction",render:()=>h`
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
  `},_={...b,name:"No Label on group",render:()=>h`
    <div class="radio-group">
      <gds-radio-group>
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio label="Radio Label" value="1"></gds-radio>
        <gds-radio label="Radio Label" value="2"></gds-radio>
      </gds-radio-group>
    </div>
  `};var D,C,G,T,O;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(G=(C=m.parameters)==null?void 0:C.docs)==null?void 0:G.source},description:{story:"TODO: Add documentation",...(O=(T=m.parameters)==null?void 0:T.docs)==null?void 0:O.description}}};var P,A,F;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'States',
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
          invalid
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  \`
}`,...(F=(A=y.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var V,B,j,q,M;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Validation',
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
}`,...(j=(B=f.parameters)==null?void 0:B.docs)==null?void 0:j.source},description:{story:"TODO: Add documentation",...(M=(q=f.parameters)==null?void 0:q.docs)==null?void 0:M.description}}};var I,K,H;E.parameters={...E.parameters,docs:{...(I=E.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(ee=(Z=L.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,re;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};const et=["RadioButton","States","Validation","Required","Disabled","Size","Direction","GroupLabel"];export{L as Direction,w as Disabled,_ as GroupLabel,m as RadioButton,E as Required,R as Size,y as States,f as Validation,et as __namedExportsOrder,Ze as default};
