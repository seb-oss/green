import{i as Z,x as v}from"./lit-element-C_s9q329.js";import{n as s,g as S,G as ee,h as g,r as le}from"./custom-element-scoping-BEGY3AqQ.js";import{e as te}from"./class-map-Bz98xO8-.js";import{t as ae}from"./tokens.style-CFvqdzpw.js";import{l as pe}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{T as ue}from"./transitional-styles-iv5lM2WH.js";import{w as z}from"./watch-tFciLXSI.js";import{a as ge}from"./query-p8xgzTDt.js";import{a as ce}from"./button-DMqiAWPO.js";import"./form-control-footer-31u3ZPFB.js";import"./flex-tnFv_7np.js";import"./card-BihnooJR.js";import"./text-DbVC2snl.js";import"./divider-Dm4d-5N4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./triangle-exclamation-BVOOPWQa.js";import"./icon-DYBgint3.js";import"./badge-Dc9DlXiN.js";import"./div-Cnle9s5w.js";import"./default-typography.styles-Bl0hQgz1.js";const oe=Z`
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
        position: relative;
        display: flex;
        flex-direction: column;
        gap: var(--gds-space-xs);
        max-width: max-content;
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
`,xe=Z`
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
    }

    @media (hover: hover) {
    }
  }
`;var he=Object.defineProperty,be=Object.getOwnPropertyDescriptor,c=(e,t,o,r)=>{for(var a=r>1?void 0:r?be(t,o):t,i=e.length-1,d;i>=0;i--)(d=e[i])&&(a=(r?d(t,o,a):d(a))||a);return r&&a&&he(t,o,a),a};let l=class extends ee{constructor(){super(),this.label="",this.supportingText="",this.type="radio",this.size="large",this.disabled=!1,this.invalid=!1}connectedCallback(){super.connectedCallback(),ue.instance.apply(this,"gds-selection-field-label")}render(){const e={"selection-field-label":!0,[`type-${this.type}`]:!0,invalid:this.invalid,disabled:this.disabled,small:this.size==="small","has-supporting-text":!!this.supportingText};return g`
      <div class="selection-field-container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${te(e)}" part="_selection-field-label">
          <label class="primary-label" part="primary-label">
            ${this.label}
          </label>
          ${this.supportingText?g`
                <span class="supporting-text" part="_supporting-text">
                  ${this.supportingText}
                </span>
              `:""}
        </div>
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};l.styles=[ae,xe];c([s()],l.prototype,"label",2);c([s({attribute:"supporting-text"})],l.prototype,"supportingText",2);c([s()],l.prototype,"type",2);c([s()],l.prototype,"size",2);c([s({type:Boolean,reflect:!0})],l.prototype,"disabled",2);c([s({type:Boolean})],l.prototype,"invalid",2);c([z("disabled")],l.prototype,"_handleDisabledChange",1);l=c([S("gds-selection-field-label"),pe()],l);var ve=Object.defineProperty,me=Object.getOwnPropertyDescriptor,x=(e,t,o,r)=>{for(var a=r>1?void 0:r?me(t,o):t,i=e.length-1,d;i>=0;i--)(d=e[i])&&(a=(r?d(t,o,a):d(a))||a);return r&&a&&ve(t,o,a),a};let p=class extends ee{constructor(){super(...arguments),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.size="large",this._isFocused=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio")}_handleClick(){this.disabled||(this.checked=!0,this.focus(),this.dispatchEvent(new Event("change",{bubbles:!0})))}_handleKeyDown(e){this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._handleClick())}focus(){var t;const e=(t=this.renderRoot)==null?void 0:t.querySelector(".radio");e&&e.focus()}render(){const e={radio:!0,checked:this.checked,disabled:this.disabled,focused:this._isFocused};return g`
      <gds-selection-field-label
        supporting-text=${this.supportingText}
        label=${this.label}
        size=${this.size}
        @click=${this._handleClick}
        aria-disabled=${this.disabled}
        aria-checked=${this.checked}
        ?disabled=${this.disabled}
        type="radio"
      >
        <div
          class=${te(e)}
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
    `}};p.styles=[ae,oe];x([s()],p.prototype,"label",2);x([s({attribute:"supporting-text"})],p.prototype,"supportingText",2);x([s()],p.prototype,"value",2);x([s({type:Boolean,reflect:!0})],p.prototype,"checked",2);x([s({type:Boolean,reflect:!0})],p.prototype,"disabled",2);x([s()],p.prototype,"size",2);x([le()],p.prototype,"_isFocused",2);p=x([S("gds-radio")],p);var fe=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,re=e=>{throw TypeError(e)},u=(e,t,o,r)=>{for(var a=r>1?void 0:r?ye(t,o):t,i=e.length-1,d;i>=0;i--)(d=e[i])&&(a=(r?d(t,o,a):d(a))||a);return r&&a&&fe(t,o,a),a},Ee=(e,t,o)=>t.has(e)||re("Cannot "+o),_e=(e,t,o)=>t.has(e)?re("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),L=(e,t,o)=>(Ee(e,t,"access private method"),o),b,se,ie,de,ne;let n=class extends ce{constructor(){super(...arguments),_e(this,b),this.label="",this.name="",this.size="large",this.supportingText="",this.showExtendedSupportingText=!1}get radios(){return Array.from(this.querySelectorAll("gds-radio"))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.updateComplete.then(()=>{this._syncRadioStates(),this._initializeFocusable()})}_initializeFocusable(){this._contentElement.setAttribute("tabindex","0"),this.radios.forEach(e=>{e.setAttribute("tabindex","-1")})}_handleValueChange(){this._syncRadioStates(),this.checkValidity()}_handleSizeChange(){this.radios.forEach(e=>{e.size=this.size})}_syncRadioStates(){this.radios.forEach(e=>{e.checked=e.value===this.value,e.size=this.size})}_handleFocus(){const t=this.radios.find(o=>o.checked)||this.radios[0];t&&t.focus()}_handleRadioChange(e){const t=e.target;if(t.hasAttribute("value")){const o=t.getAttribute("value");this.value=o,this._syncRadioStates(),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))}}_handleKeyDown(e){const t=this.radios.filter(i=>!i.hasAttribute("disabled"));if(t.length===0)return;let o=t.findIndex(i=>i.checked||document.activeElement===i);o===-1&&(o=0);let r;switch(e.key){case"ArrowDown":case"ArrowRight":{e.preventDefault(),r=(o+1)%t.length;break}case"ArrowUp":case"ArrowLeft":{e.preventDefault(),r=(o-1+t.length)%t.length;break}case"Tab":return;default:return}const a=t[r];a.checked=!0,a.focus(),this.value=a.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))}_getValidityAnchor(){return this._contentElement||this}render(){return g`<div class="radio-group">
      ${L(this,b,se).call(this)}
    </div>`}};b=new WeakSet;se=function(){return[L(this,b,ie).call(this),L(this,b,de).call(this),L(this,b,ne).call(this)].map(t=>g`${t}`)};ie=function(){if(this.label)return g` <gds-form-control-header class="size-${this.size}">
        <label id="group-label" for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};de=function(){return g` <div
      class="content"
      @keydown=${this._handleKeyDown}
      @focus=${this._handleFocus}
    >
      <slot @change=${this._handleRadioChange}></slot>
    </div>`};ne=function(){return g` <gds-form-control-footer
      class="size-${this.size}"
      .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
    >
    </gds-form-control-footer>`};n.styles=[oe];u([s()],n.prototype,"label",2);u([s()],n.prototype,"name",2);u([s()],n.prototype,"size",2);u([s({attribute:"supporting-text"})],n.prototype,"supportingText",2);u([s({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],n.prototype,"showExtendedSupportingText",2);u([ge(".content")],n.prototype,"_contentElement",2);u([z("value")],n.prototype,"_handleValueChange",1);u([z("size")],n.prototype,"_handleSizeChange",1);n=u([S("gds-radio-group")],n);const Qe={title:"Components/Radio",component:"gds-radio-group",tags:["autodocs"]},h={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0},args:{label:"Label",supportingText:"Label support text."}}},m={...h,name:"Radio",args:{label:"Label",supportingText:"Label support text.",innerHTML:`
    <gds-radio label="Radio Option 1" supporting-text="Supporting text" value="1"></gds-radio>
    <gds-radio label="Radio Option 2" supporting-text="Supporting text" value="2"></gds-radio>
    <gds-radio label="Radio Option 3" supporting-text="Supporting text" value="3"></gds-radio>`}},y={...h,name:"States",render:()=>v`
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
  `},f={...h,name:"Validation",render:()=>v`
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
  `},E={...h,name:"Required",render:()=>v`
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
  `},_={...h,name:"Disabled",render:()=>v`
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
  `},R={...h,name:"Size",render:()=>v`
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
  `},w={...h,name:"No Label on group",render:()=>v`
    <div class="radio-group">
      <gds-radio-group>
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio label="Radio Label" value="1"></gds-radio>
        <gds-radio label="Radio Label" value="2"></gds-radio>
      </gds-radio-group>
    </div>
  `};var k,$,C,D,T;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(C=($=m.parameters)==null?void 0:$.docs)==null?void 0:C.source},description:{story:"TODO: Add documentation",...(T=(D=m.parameters)==null?void 0:D.docs)==null?void 0:T.description}}};var O,G,P;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(G=y.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var A,F,V,B,j;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(V=(F=f.parameters)==null?void 0:F.docs)==null?void 0:V.source},description:{story:"TODO: Add documentation",...(j=(B=f.parameters)==null?void 0:B.docs)==null?void 0:j.description}}};var q,M,I;E.parameters={...E.parameters,docs:{...(q=E.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(I=(M=E.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var K,H,N;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(N=(H=_.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var W,U,J;R.parameters={...R.parameters,docs:{...(W=R.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(J=(U=R.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var Q,X,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Xe=["RadioButton","States","Validation","Required","Disabled","Size","GroupLabel"];export{_ as Disabled,w as GroupLabel,m as RadioButton,E as Required,R as Size,y as States,f as Validation,Xe as __namedExportsOrder,Qe as default};
