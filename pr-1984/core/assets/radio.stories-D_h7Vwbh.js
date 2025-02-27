import{i as S,x as D}from"./lit-element-C_s9q329.js";import{n as a,g as v,G as k,h as x,r as z}from"./custom-element-scoping-BEGY3AqQ.js";import{e as L}from"./class-map-Bz98xO8-.js";import{t as O}from"./tokens.style-CFvqdzpw.js";import{l as P}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{T as A}from"./transitional-styles-iv5lM2WH.js";import{w as G}from"./watch-tFciLXSI.js";import{a as j}from"./button-DMqiAWPO.js";import"./form-control-footer-31u3ZPFB.js";import"./flex-tnFv_7np.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./query-p8xgzTDt.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./triangle-exclamation-BVOOPWQa.js";import"./icon-DYBgint3.js";import"./card-BihnooJR.js";import"./div-Cnle9s5w.js";import"./badge-Dc9DlXiN.js";const T=S`
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
    }

    .radio-group {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .content {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 8px;
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

      &:active {
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
        background-color: var(--gds-color-l3-content-primary);
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

    :host([disabled]) {
      opacity: 0.4;
      pointer-events: none;
    }
  }
`,B=S`
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

      .label {
        font-size: var(--gds-text-size-detail-m);
        line-height: var(--gds-line-height-detail-m);
        font-weight: var(--gds-text-weight-book);
      }

      .supporting-text {
        font-size: var(--gds-text-size-detail-s);
        line-height: var(--gds-line-height-detail-s);
        font-weight: var(--gds-text-weight-regular);
      }

      &.has-supporting-text {
        padding-block-start: calc(1cap / 2);
      }
    }

    @media (hover: hover) {
    }
  }
`;var F=Object.defineProperty,M=Object.getOwnPropertyDescriptor,c=(e,o,r,s)=>{for(var t=s>1?void 0:s?M(o,r):o,i=e.length-1,l;i>=0;i--)(l=e[i])&&(t=(s?l(o,r,t):l(t))||t);return s&&t&&F(o,r,t),t};let d=class extends k{constructor(){super(),this.label="",this.supportingText="",this.type="radio",this.size="large",this.disabled=!1,this.invalid=!1}connectedCallback(){super.connectedCallback(),A.instance.apply(this,"gds-selection-field-label")}render(){const e={"selection-field-label":!0,[`type-${this.type}`]:!0,invalid:this.invalid,disabled:this.disabled,small:this.size==="small","has-supporting-text":!!this.supportingText};return x`
      <div class="selection-field-container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${L(e)}" part="_selection-field-label">
          <label class="primary-label" part="primary-label">
            ${this.label}
          </label>
          ${this.supportingText?x`
                <span class="supporting-text" part="_supporting-text">
                  ${this.supportingText}
                </span>
              `:""}
        </div>
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};d.styles=[O,B];c([a()],d.prototype,"label",2);c([a({attribute:"supporting-text"})],d.prototype,"supportingText",2);c([a()],d.prototype,"type",2);c([a()],d.prototype,"size",2);c([a({type:Boolean,reflect:!0})],d.prototype,"disabled",2);c([a({type:Boolean})],d.prototype,"invalid",2);c([G("disabled")],d.prototype,"_handleDisabledChange",1);d=c([v("gds-selection-field-label"),P()],d);var q=Object.defineProperty,H=Object.getOwnPropertyDescriptor,u=(e,o,r,s)=>{for(var t=s>1?void 0:s?H(o,r):o,i=e.length-1,l;i>=0;i--)(l=e[i])&&(t=(s?l(o,r,t):l(t))||t);return s&&t&&q(o,r,t),t};let n=class extends k{constructor(){super(...arguments),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this._isFocused=!1}_handleClick(){this.disabled||(this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0})))}_handleKeyDown(e){this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._handleClick())}render(){const e={radio:!0,checked:this.checked,disabled:this.disabled,focused:this._isFocused};return x`
      <gds-selection-field-label
        supporting-text=${this.supportingText}
        label=${this.label}
        @click=${this._handleClick}
        aria-disabled=${this.disabled}
        aria-checked=${this.checked}
        type="radio"
      >
        <div
          tabindex="${this.disabled?"-1":"0"}"
          class=${L(e)}
          role="radio"
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
    `}};n.styles=[O,T];u([a()],n.prototype,"label",2);u([a({attribute:"supporting-text"})],n.prototype,"supportingText",2);u([a()],n.prototype,"value",2);u([a({type:Boolean,reflect:!0})],n.prototype,"checked",2);u([a({type:Boolean,reflect:!0})],n.prototype,"disabled",2);u([z()],n.prototype,"_isFocused",2);n=u([v("gds-radio")],n);var K=Object.defineProperty,V=Object.getOwnPropertyDescriptor,g=(e,o,r,s)=>{for(var t=s>1?void 0:s?V(o,r):o,i=e.length-1,l;i>=0;i--)(l=e[i])&&(t=(s?l(o,r,t):l(t))||t);return s&&t&&K(o,r,t),t};let p=class extends j{constructor(){super(...arguments),this.label="",this.name="",this.size="large",this.supportingText="",this.showExtendedSupportingText=!1}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._syncRadioStates())}_syncRadioStates(){const e=this.querySelectorAll("gds-radio");e.forEach(o=>{const r=o;r.checked=r.value===this.value}),e.length>0&&(this._validityAnchor=e[0])}_uncheckOtherRadios(e){this.querySelectorAll("gds-radio").forEach(r=>{r!==e&&(r.checked=!1)})}_handleRadioChange(e){const o=e.target;if(o.hasAttribute("value")){const r=o.getAttribute("value");this._uncheckOtherRadios(o),this.value=r,this._validityAnchor=o,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))}}_getValidityAnchor(){return this._validityAnchor||this}render(){return x`
      <div class="radio-group" role="radiogroup" aria-labelledby="group-label">
        <gds-form-control-header class="size-${this.size}">
          <label id="group-label" for="input" slot="label">${this.label}</label>
          <span slot="supporting-text" id="supporting-text">
            ${this.supportingText}
          </span>
          <slot
            name="extended-supporting-text"
            slot="extended-supporting-text"
          ></slot>
        </gds-form-control-header>
        <div class="content">
          <slot @change=${this._handleRadioChange}></slot>
        </div>
        <gds-form-control-footer
          class="size-${this.size}"
          .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
        ></gds-form-control-footer>
      </div>
    `}};p.styles=[T];g([a()],p.prototype,"label",2);g([a()],p.prototype,"name",2);g([a()],p.prototype,"size",2);g([a({attribute:"supporting-text"})],p.prototype,"supportingText",2);g([a({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],p.prototype,"showExtendedSupportingText",2);g([z()],p.prototype,"_validityAnchor",2);p=g([v("gds-radio-group")],p);const be={title:"Components/Radio",component:"gds-radio-group",tags:["autodocs"]},C={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0},args:{label:"Label",supportingText:"Label support text."}}},h={...C,name:"radio",args:{label:"Label",supportingText:"Label support text.",innerHTML:`
    <gds-radio label="Radio Option 1" supporting-text="Supporting text" value="1"></gds-radio>
    <gds-radio label="Radio Option 2" supporting-text="Supporting text" value="2"></gds-radio>
    <gds-radio label="Radio Option 3" supporting-text="Supporting text" value="3"></gds-radio>`}},b={...C,name:"States",render:()=>D`
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
  `};var m,f,y,_,w;h.parameters={...h.parameters,docs:{...(m=h.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'radio',
  args: {
    label: 'Label',
    supportingText: 'Label support text.',
    innerHTML: \`
    <gds-radio label="Radio Option 1" supporting-text="Supporting text" value="1"></gds-radio>
    <gds-radio label="Radio Option 2" supporting-text="Supporting text" value="2"></gds-radio>
    <gds-radio label="Radio Option 3" supporting-text="Supporting text" value="3"></gds-radio>\`
  }
}`,...(y=(f=h.parameters)==null?void 0:f.docs)==null?void 0:y.source},description:{story:"TODO: Add documentation",...(w=(_=h.parameters)==null?void 0:_.docs)==null?void 0:w.description}}};var $,R,E;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(E=(R=b.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const xe=["RadioButton","States"];export{h as RadioButton,b as States,xe as __namedExportsOrder,be as default};
