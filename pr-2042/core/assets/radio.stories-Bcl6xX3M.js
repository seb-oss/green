import{i as C,x as b}from"./lit-element-C_s9q329.js";import{n as d,g as D,G as be,h as x,r as Ce}from"./custom-element-scoping-BEGY3AqQ.js";import{t as me}from"./tokens.style-CFvqdzpw.js";import{w as A}from"./watch-tFciLXSI.js";import{l as ve}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{e as fe}from"./class-map-Bz98xO8-.js";import{T as De}from"./transitional-styles-iv5lM2WH.js";import{a as Ae}from"./query-p8xgzTDt.js";import{d as Ge,b as $e,w as Te}from"./declarative-layout-mixins-Cg5fmtre.js";import{a as Pe}from"./button-DMqiAWPO.js";import"./form-control-footer-31u3ZPFB.js";import"./flex-tnFv_7np.js";import"./card-BihnooJR.js";import"./text-DQ_oI5A1.js";import"./divider-Dm4d-5N4.js";import"./circle-check-DzwSpRnk.js";import"./cross-small-CIJy4RQ0.js";import{a as Oe}from"./argTableProps-Bt8L13-w.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./observe-light-dom-CmJPHUQ4.js";import"./triangle-exclamation-BVOOPWQa.js";import"./icon-DYBgint3.js";import"./badge-Dc9DlXiN.js";import"./div-Cnle9s5w.js";import"./custom-elements-ChdjPDBN.js";const Fe=C`
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
      position: relative;
      width: var(--radio-disc-size);
      height: var(--radio-disc-size);
      margin-block-start: calc(var(--radio-border-width) * 2);
      cursor: pointer;
    }

    .state {
      display: flex;
      box-sizing: border-box;
      backface-visibility: hidden;
      transition-property: background-color, scale, outline;
      transition-duration: 248ms;
      outline-style: solid;
      outline-offset: calc(-1 * var(--radio-outline-width));
      outline-width: var(--radio-outline-width);
      outline-color: transparent;
      border-radius: var(--radio-radius);
      min-width: var(--radio-size);
      min-height: var(--radio-size);
      position: absolute;
      left: calc(* 1 - calc((var(--radio-size) - var(--radio-disc-size)) / 2));
      top: calc(* 1 - calc((var(--radio-size) - var(--radio-disc-size)) / 2));
      scale: 0.8;
    }

    @media (hover: hover) {
      .radio:hover,
      :host(:hover) .radio .state {
        background-color: var(--radio-bg-mix);
        scale: 1;
      }
    }

    .radio:active .state,
    :host(:active) .radio .state {
      background-color: var(--radio-bg-mix-active);
    }

    :host(:active:not(:focus-visible)) .radio:active .state,
    :host(:active:not(:focus-visible)) .radio .state {
      scale: 0.96;
    }

    :host(:focus) {
      outline: none;
    }

    :host(:focus) .radio .state {
      outline-color: var(--_radio-outline-color);
      scale: 1;
    }

    :host(:not(:focus-visible)) .radio .state {
      outline-color: transparent;
    }

    .disc {
      width: var(--radio-disc-size);
      height: var(--radio-disc-size);
      border-radius: var(--radio-radius);
      box-shadow: inset 0 0 0 var(--radio-border-width)
        var(--radio-border-color);
      background-color: var(--radio-disc-background-color);
      box-sizing: border-box;
      transition-property: box-shadow;
      transition-duration: 248ms;
      will-change: box-shadow;
      position: absolute;
      inset: 0;
    }

    :host([checked]) .disc,
    :host(:active) .disc {
      box-shadow: inset 0 0 0 var(--radio-border-width-selected)
        var(--radio-border-color-selected);
    }

    :host([disabled]) {
      pointer-events: none;
    }

    :host([disabled]) .radio .disc {
      box-shadow: none;
      background-color: var(--gds-color-l3-content-disabled);
    }
  }
`,Ie=C`
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
      gap: var(--gds-space-s);
      cursor: pointer;
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
  }
`;var qe=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,G=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ve(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(r=(o?l(t,a,r):l(r))||r);return o&&r&&qe(t,a,r),r};let L=class extends be{constructor(){super(),this.label="",this.supportingText=""}connectedCallback(){super.connectedCallback(),De.instance.apply(this,"gds-selection-field-label")}render(){const e={"selection-field-label":!0,"has-supporting-text":!!this.supportingText};return x`
      <div class="selection-field-container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${fe(e)}">
          <label class="primary-label"> ${this.label} </label>
          ${this.label?x`
                <span class="supporting-text"> ${this.supportingText} </span>
              `:""}
        </div>
      </div>
    `}};L.styles=[me,Ie];G([d()],L.prototype,"label",2);G([d({attribute:"supporting-text"})],L.prototype,"supportingText",2);L=G([D("gds-selection-field-label"),ve()],L);var Me=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,ye=e=>{throw TypeError(e)},u=(e,t,a,o)=>{for(var r=o>1?void 0:o?Be(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(r=(o?l(t,a,r):l(r))||r);return o&&r&&Me(t,a,r),r},We=(e,t,a)=>t.has(e)||ye("Cannot "+a),T=(e,t,a)=>(We(e,t,"read from private field"),a?a.call(e):t.get(e)),P=(e,t,a)=>t.has(e)?ye("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),R,S;let p=class extends be{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,P(this,R,e=>{this.disabled||!this.value||!this.label||(e.preventDefault(),this.checked=!0,this.focus(),this.dispatchEvent(new Event("gds-radio-change",{bubbles:!0})))}),P(this,S,e=>{this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.checked=!0,this.dispatchEvent(new Event("gds-radio-change",{bubbles:!0})))}),this.addEventListener("keydown",T(this,S)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this._updateAriaState(),this.addEventListener("click",T(this,R))}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.toggleAttribute("aria-invalid",this.invalid)}updated(e){super.updated(e),(e.has("checked")||e.has("disabled")||e.has("invalid"))&&this._updateAriaState()}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}render(){return x`
      <gds-selection-field-label
        supporting-text=${this.supportingText}
        label=${this.label}
        type="radio"
      >
        <div class="radio">
          <div class="state"></div>
          <div class="disc"></div>
        </div>
      </gds-selection-field-label>
    `}};R=new WeakMap;S=new WeakMap;p.styles=[me,Fe];u([d()],p.prototype,"label",2);u([d({attribute:"supporting-text"})],p.prototype,"supportingText",2);u([d()],p.prototype,"value",2);u([d({type:Boolean,reflect:!0})],p.prototype,"checked",2);u([d({type:Boolean,reflect:!0})],p.prototype,"disabled",2);u([d({type:Boolean})],p.prototype,"invalid",2);u([Ce()],p.prototype,"_isFocused",2);u([A("disabled")],p.prototype,"_handleDisabledChange",1);p=u([D("gds-radio")],p);const He=C`
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
    --radio-disc-size: var(--gds-space-m);
    --radio-radius: var(--gds-space-max);
    --radio-border-color: var(--gds-color-l3-border-secondary);
    --radio-border-color-selected: var(--gds-color-l3-border-primary);
    --radio-border-width: var(--gds-space-4xs);
    --radio-border-width-selected: var(--gds-space-2xs);
    --radio-outline-width: var(--gds-space-3xs);
    --radio-disc-background-color: var(--gds-color-l3-content-primary);

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
    --radio-disc-background-color: var(
      --gds-color-l3-background-negative-secondary
    );
    --radio-border-color-selected: var(--gds-color-l3-border-negative);
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
`;var Ne=Object.defineProperty,je=Object.getOwnPropertyDescriptor,_e=e=>{throw TypeError(e)},c=(e,t,a,o)=>{for(var r=o>1?void 0:o?je(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(r=(o?l(t,a,r):l(r))||r);return o&&r&&Ne(t,a,r),r},Ke=(e,t,a)=>t.has(e)||_e("Cannot "+a),Ue=(e,t,a)=>t.has(e)?_e("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),i=(e,t,a)=>(Ke(e,t,"access private method"),a),s,z,we,$,Le,Ee,k,Re,Se,ze,ke;let g=class extends Pe{constructor(){super(...arguments),Ue(this,s),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,this._isConnected=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this._isConnected=!0,this.updateComplete.then(()=>{this._syncRadioStates(),i(this,s,z).call(this)}),this.addEventListener("invalid",this._syncRadioStates)}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this.removeEventListener("invalid",this._syncRadioStates)}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._isConnected&&(this._syncRadioStates(),this.updateComplete.then(()=>{i(this,s,z).call(this)}))}_syncRadioStates(){this._isConnected&&this.radios.forEach(e=>{e.checked=e.value===this.value,e.size=this.size,e.invalid=this.invalid})}render(){const e={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return x`<div
      role="radiogroup"
      id="radiogroup"
      class=${fe(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
    >
      ${i(this,s,Re).call(this)}
    </div>`}};s=new WeakSet;z=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(t=>t.checked);e?(e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")):this._contentElement.setAttribute("tabindex","0"),this.radios.filter(t=>!t.checked).forEach(t=>t.setAttribute("tabindex","-1"))};we=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(a=>a.checked),t=e||this.radios[0];t&&(t.focus(),e||(this.radios.forEach(a=>a.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")))};$=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))};Le=function(e){const t=e.target;t.hasAttribute("value")&&(this.value=t.value,this._syncRadioStates(),i(this,s,$).call(this))};Ee=function(e){if(!this._isConnected)return;const t=this.radios.filter(o=>!o.hasAttribute("disabled"));if(t.length===0)return;let a=t.findIndex(o=>document.activeElement===o);switch(a===-1&&(a=t.findIndex(o=>o.checked),a===-1&&(a=0)),e.key){case"ArrowDown":case"ArrowRight":{e.preventDefault();const o=(a+1)%t.length;i(this,s,k).call(this,t[o]);break}case"ArrowUp":case"ArrowLeft":{e.preventDefault();const o=(a-1+t.length)%t.length;i(this,s,k).call(this,t[o]);break}default:return}};k=function(e){!this._contentElement||!this._isConnected||(this.radios.forEach(t=>t.setAttribute("tabindex","-1")),e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1"),e.checked=!0,e.focus(),this.value=e.value,this._syncRadioStates(),i(this,s,$).call(this))};Re=function(){return[i(this,s,Se).call(this),i(this,s,ze).call(this),i(this,s,ke).call(this)].map(t=>x`${t}`)};Se=function(){if(this.label)return x` <gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};ze=function(){return x` <div
      class="content"
      @keydown=${i(this,s,Ee)}
      @focus=${i(this,s,we)}
    >
      <slot @gds-radio-change=${i(this,s,Le)}></slot>
    </div>`};ke=function(){return x` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
    >
    </gds-form-control-footer>`};g.styles=[He];c([d()],g.prototype,"size",2);c([d()],g.prototype,"direction",2);c([d({attribute:"supporting-text"})],g.prototype,"supportingText",2);c([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],g.prototype,"showExtendedSupportingText",2);c([Ae(".content")],g.prototype,"_contentElement",2);c([A("value")],g.prototype,"_handleValueChange",1);c([A("invalid")],g.prototype,"_syncRadioStates",1);g=c([ve()],g);let O=class extends Ge($e(Te(g))){};O=c([D("gds-radio-group")],O);const Rt={title:"Components/Radio",component:"gds-radio-group",subcomponents:{GdsRadio:"gds-radio"},tags:["autodocs"],argTypes:{...Oe("gds-radio-group")},parameters:{docs:{description:{component:`Radio buttons are form controls that allow users to select a single option from a set of mutually exclusive choices.<br/>
They are grouped using a radio group component which manages selection, keyboard navigation, and validation.

Radio groups provide validation and selection management and implements the ElementInternals \`formAssociated\` API.

Groups support vertical and horizontal layouts, and can be sized to fit different space requirements.`}}}},h={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0},args:{label:"Label",supportingText:"Label support text."}}},m={...h,name:"Radio",args:{label:"Pick an option",supportingText:"Label support text.",innerHTML:`
    <gds-radio label="Radio Option 1" supporting-text="Supporting text" value="1"></gds-radio>
    <gds-radio label="Radio Option 2" supporting-text="Supporting text" value="2"></gds-radio>
    <gds-radio label="Radio Option 3" supporting-text="Supporting text" value="3"></gds-radio>`}},v={...h,name:"Validation",render:()=>b`
    <form method="dialog">
      <gds-flex flex-direction="column" align-items="flex-start" gap="m">
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
      </gds-flex>
    </form>
  `},E={...h,name:"Do's and dont's",render:()=>b`
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
          <gds-text tag="small">Do provide both Label and Value</gds-text>
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
          <gds-text tag="small">Never exclude the label</gds-text>
        </gds-card>
        <form method="dialog">
          <gds-card align-items="flex-start" gap="m">
            <gds-radio-group label="Group Label" supporting-text="Support text">
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-radio value="1"></gds-radio>
              <gds-radio value="2"></gds-radio>
            </gds-radio-group>
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
          <gds-text tag="small">Never exclude the value </gds-text>
        </gds-card>
        <form method="dialog">
          <gds-card align-items="flex-start" gap="m">
            <gds-radio-group label="Group Label" supporting-text="Support text">
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-radio label="Radio Label"></gds-radio>
              <gds-radio label="Radio Label"></gds-radio>
            </gds-radio-group>
          </gds-card>
        </form>
      </gds-flex>
    </gds-flex>
  `},f={...h,name:"Disabled",render:()=>b`
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
  `},y={...h,name:"Size",render:()=>b`
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
  `},_={...h,name:"Direction",render:()=>b`
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
  `},w={...h,name:"Radio group label",render:()=>b`
    <div class="radio-group">
      <gds-radio-group>
        <gds-radio label="Radio Label" value="1"></gds-radio>
        <gds-radio label="Radio Label" value="2"></gds-radio>
      </gds-radio-group>
    </div>
  `};var F,I,q,V,M;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Radio',
  args: {
    label: 'Pick an option',
    supportingText: 'Label support text.',
    innerHTML: \`
    <gds-radio label="Radio Option 1" supporting-text="Supporting text" value="1"></gds-radio>
    <gds-radio label="Radio Option 2" supporting-text="Supporting text" value="2"></gds-radio>
    <gds-radio label="Radio Option 3" supporting-text="Supporting text" value="3"></gds-radio>\`
  }
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source},description:{story:`Radio buttons allow users to select a single option from a list of two or more mutually exclusive options.<br />
Each radio button must have both a label and a value.

Usage:

\`\`\`html
<gds-radio-group label="Select an option">
  <gds-radio label="Option 1" value="1"></gds-radio>
  <gds-radio label="Option 2" value="2"></gds-radio>
</gds-radio-group>
\`\`\`

Interactive example with supporting texts:`,...(M=(V=m.parameters)==null?void 0:V.docs)==null?void 0:M.description}}};var B,W,H,N,j;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Validation',
  render: () => html\`
    <form method="dialog">
      <gds-flex flex-direction="column" align-items="flex-start" gap="m">
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
      </gds-flex>
    </form>
  \`
}`,...(H=(W=v.parameters)==null?void 0:W.docs)==null?void 0:H.source},description:{story:`Radio groups support validation using Green Core's [form validation API](/docs/components-form-validation-documentation--docs).

The error message appears below the radio group, and can be set either trough a validator, or explicctly using the using the \`error-message\` attribute.

If you click on 'submit' first on the example below it will validate the radio group and show the error message.`,...(j=(N=v.parameters)==null?void 0:N.docs)==null?void 0:j.description}}};var K,U,X;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...DefaultParams,
  name: "Do's and dont's",
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
          <gds-text tag="small">Do provide both Label and Value</gds-text>
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
          <gds-text tag="small">Never exclude the label</gds-text>
        </gds-card>
        <form method="dialog">
          <gds-card align-items="flex-start" gap="m">
            <gds-radio-group label="Group Label" supporting-text="Support text">
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-radio value="1"></gds-radio>
              <gds-radio value="2"></gds-radio>
            </gds-radio-group>
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
          <gds-text tag="small">Never exclude the value </gds-text>
        </gds-card>
        <form method="dialog">
          <gds-card align-items="flex-start" gap="m">
            <gds-radio-group label="Group Label" supporting-text="Support text">
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-radio label="Radio Label"></gds-radio>
              <gds-radio label="Radio Label"></gds-radio>
            </gds-radio-group>
          </gds-card>
        </form>
      </gds-flex>
    </gds-flex>
  \`
}`,...(X=(U=E.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var J,Q,Y,Z,ee;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:Y.source},description:{story:`Disabled radio buttons cannot be interacted with and appear visually muted.

In general, this state should never be used. Instead, aim to explain to the user why the choice is wrong in an error message and make sure they understand how to correct it.`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,ae,oe,re,se;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:oe.source},description:{story:`Radio buttons support two sizes:
- Large (default): Standard size for most use cases
- Small: Compact size for space-constrained layouts

The size can be set on the radio group and applies to all radio buttons within.`,...(se=(re=y.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};var ie,de,ne,le,pe;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ne=(de=_.parameters)==null?void 0:de.docs)==null?void 0:ne.source},description:{story:`Radio buttons can be arranged in two directions:
- Column (default): Vertical stacking for clear separation
- Row: Horizontal alignment for compact layouts that will break to new line when not enough space is available

Choose the direction based on available space and number of options.`,...(pe=(le=_.parameters)==null?void 0:le.docs)==null?void 0:pe.description}}};var ge,ue,ce,xe,he;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ce=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:ce.source},description:{story:`While radio groups can be created without a label, it's recommended to always provide one for clarity and accessibility.
The label helps users understand what the options are for.

In certain cases when space is limited, the group label can be omitted.`,...(he=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:he.description}}};const St=["RadioButton","Validation","DosAndDonts","Disabled","Size","Direction","GroupLabel"];export{_ as Direction,f as Disabled,E as DosAndDonts,w as GroupLabel,m as RadioButton,y as Size,v as Validation,St as __namedExportsOrder,Rt as default};
