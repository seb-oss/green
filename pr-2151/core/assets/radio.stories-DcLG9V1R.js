import{i as D,x as b}from"./lit-element-Bx14lxc-.js";import{n,G as me,h as x,g as G,r as ke}from"./custom-element-scoping-b4c89-hi.js";import{l as be}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{e as ve}from"./class-map-CXsQwv0r.js";import{t as fe}from"./tokens.style-FJSmZZcv.js";import{T as De}from"./transitional-styles-CLkQCQV5.js";import{w as A}from"./watch-tFciLXSI.js";import{a as Ge}from"./query-p8xgzTDt.js";import{G as Ae,a as $e}from"./form-control-header.component-B10A3La-.js";import{d as Te,b as Pe,w as Oe}from"./declarative-layout-mixins-BgWwoHZ-.js";import{a as Fe}from"./button.component-DtF9Ct8d.js";import"./flex-C_x5I4jr.js";import"./card-OAT857aB.js";import"./text-BO4AnSPY.js";import"./divider-C38Yo85Y.js";import"./circle-check-BWcERZ1A.js";import"./cross-small-DrnH-Mhy.js";import{a as Ie}from"./argTableProps-DV1J3WxS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./badge.component-TZirAiZ9.js";import"./flex.component-CPPMsy9S.js";import"./div.component-BuGkGqpt.js";import"./triangle-exclamation.component-CxJk4dIA.js";import"./icon-61apcvHX.js";import"./card.component-NhDjIX8u.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./text.component-CVlwMV6p.js";import"./cross-small.component-CpVSYm7P.js";import"./custom-elements-DswHMhod.js";const qe=D`
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
      gap: var(--gds-sys-space-s);
      cursor: pointer;
    }

    .selection-field-label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: var(--_color);
    }

    .primary-label {
      font-weight: var(--gds-sys-text-weight-book);
      cursor: pointer;
    }

    .supporting-text {
      font-size: var(--_font-size-supporting-text);
      line-height: var(--_line-height-supporting-text);
      font-weight: var(--gds-sys-text-weight-regular);
    }
  }
`;var Ve=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,$=(e,t,a,o)=>{for(var s=o>1?void 0:o?Me(t,a):t,l=e.length-1,p;l>=0;l--)(p=e[l])&&(s=(o?p(t,a,s):p(s))||s);return o&&s&&Ve(t,a,s),s};let m=class extends me{constructor(){super(),this.label="",this.supportingText=""}connectedCallback(){super.connectedCallback(),De.instance.apply(this,"gds-selection-field-label")}render(){const e={"selection-field-label":!0,"has-supporting-text":!!this.supportingText};return x`
      <div class="selection-field-container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${ve(e)}">
          <label class="primary-label"> ${this.label} </label>
          ${this.label?x`
                <span class="supporting-text"> ${this.supportingText} </span>
              `:""}
        </div>
      </div>
    `}};m.styles=[fe,qe];$([n()],m.prototype,"label",2);$([n({attribute:"supporting-text"})],m.prototype,"supportingText",2);m=$([G("gds-selection-field-label"),be()],m);const Be=D`
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
      --_radio-label-color: var(--gds-sys-color-l3-content-disabled);
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
      background-color: var(--gds-sys-color-l3-content-disabled);
    }
  }
`;var We=Object.defineProperty,He=Object.getOwnPropertyDescriptor,ye=e=>{throw TypeError(e)},u=(e,t,a,o)=>{for(var s=o>1?void 0:o?He(t,a):t,l=e.length-1,p;l>=0;l--)(p=e[l])&&(s=(o?p(t,a,s):p(s))||s);return o&&s&&We(t,a,s),s},Ne=(e,t,a)=>t.has(e)||ye("Cannot "+a),P=(e,t,a)=>(Ne(e,t,"read from private field"),a?a.call(e):t.get(e)),O=(e,t,a)=>t.has(e)?ye("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),R,S;let d=class extends me{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,O(this,R,e=>{this.disabled||!this.value||!this.label||(e.preventDefault(),this.checked=!0,this.focus(),this.dispatchEvent(new Event("gds-radio-change",{bubbles:!0})))}),O(this,S,e=>{this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.checked=!0,this.dispatchEvent(new Event("gds-radio-change",{bubbles:!0})))}),this.addEventListener("keydown",P(this,S)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this._updateAriaState(),this.addEventListener("click",P(this,R))}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.toggleAttribute("aria-invalid",this.invalid)}updated(e){super.updated(e),(e.has("checked")||e.has("disabled")||e.has("invalid"))&&this._updateAriaState()}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}render(){return x`
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
    `}};R=new WeakMap;S=new WeakMap;d.styles=[Be];u([n()],d.prototype,"label",2);u([n({attribute:"supporting-text"})],d.prototype,"supportingText",2);u([n()],d.prototype,"value",2);u([n({type:Boolean,reflect:!0})],d.prototype,"checked",2);u([n({type:Boolean,reflect:!0})],d.prototype,"disabled",2);u([n({type:Boolean})],d.prototype,"invalid",2);u([ke()],d.prototype,"_isFocused",2);u([A("disabled")],d.prototype,"_handleDisabledChange",1);d=u([G("gds-radio",{dependsOn:[m]})],d);d.define();const je=D`
  :host {
    --radio-bg-mix: color-mix(
      in srgb,
      var(--gds-sys-color-l3-background-secondary),
      var(--gds-sys-color-l3-states-light-hover)
    );
    --radio-bg-mix-active: color-mix(
      in srgb,
      var(--gds-sys-color-l3-background-secondary),
      var(--gds-sys-color-l3-states-light-pressed)
    );

    --radio-size: var(--gds-sys-space-xl);
    --radio-disc-size: var(--gds-sys-space-m);
    --radio-radius: var(--gds-sys-space-max);
    --radio-border-color: var(--gds-sys-color-l3-border-secondary);
    --radio-border-color-selected: var(--gds-sys-color-l3-border-primary);
    --radio-border-width: var(--gds-sys-space-4xs);
    --radio-border-width-selected: var(--gds-sys-space-2xs);
    --radio-outline-width: var(--gds-sys-space-3xs);
    --radio-disc-background-color: var(--gds-sys-color-l3-content-primary);

    /* Font Sizes */
    --_font-size-label: var(--gds-sys-text-size-detail-m);
    --_line-height-label: var(--gds-sys-text-line-height-detail-m);
    --_font-size-supporting-text: var(--gds-sys-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-sys-text-line-height-detail-s);
    font-size: var(--_font-size-label);
    line-height: var(--_line-height-label);

    /* Color */
    --_radio-label-color: var(--gds-sys-color-l3-content-tertiary);
    --_radio-outline-color: var(--gds-sys-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --radio-border-color: var(--gds-sys-color-l3-border-negative);
    --radio-disc-background-color: var(
      --gds-sys-color-l3-background-negative-secondary
    );
    --radio-border-color-selected: var(--gds-sys-color-l3-border-negative);
    --radio-bg-mix: color-mix(
      in srgb,
      var(--gds-sys-color-l3-background-negative-secondary),
      var(--gds-sys-color-l3-states-negative-hover)
    );
    --radio-bg-mix-active: color-mix(
      in srgb,
      var(--gds-sys-color-l3-background-negative-secondary),
      var(--gds-sys-color-l3-states-negative-pressed)
    );
    --_radio-label-color: var(--gds-sys-color-l3-content-negative);
    --_radio-outline-color: var(--gds-sys-color-l3-content-negative);
  }

  :host([size='small']) {
    --_font-size-label: var(--gds-sys-text-size-detail-s);
    --_line-height-label: var(--gds-sys-text-line-height-detail-s);
    --_font-size-supporting-text: var(--gds-sys-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-sys-text-line-height-detail-s);
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
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
    gap: var(--gds-sys-space-l);
  }

  .direction-column .content {
    flex-direction: column;
    gap: var(--gds-sys-space-xs);
  }
`;var Ke=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,_e=e=>{throw TypeError(e)},c=(e,t,a,o)=>{for(var s=o>1?void 0:o?Ue(t,a):t,l=e.length-1,p;l>=0;l--)(p=e[l])&&(s=(o?p(t,a,s):p(s))||s);return o&&s&&Ke(t,a,s),s},Xe=(e,t,a)=>t.has(e)||_e("Cannot "+a),Je=(e,t,a)=>t.has(e)?_e("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),i=(e,t,a)=>(Xe(e,t,"access private method"),a),r,z,we,T,Le,Ee,C,Re,Se,ze,Ce;let g=class extends Fe{constructor(){super(...arguments),Je(this,r),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,this._isConnected=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this._isConnected=!0,this.updateComplete.then(()=>{this._syncRadioStates(),i(this,r,z).call(this)}),this.addEventListener("invalid",this._syncRadioStates)}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this.removeEventListener("invalid",this._syncRadioStates)}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._isConnected&&(this._syncRadioStates(),this.updateComplete.then(()=>{i(this,r,z).call(this)}))}_syncRadioStates(){this._isConnected&&this.radios.forEach(e=>{e.checked=e.value===this.value,e.size=this.size,e.invalid=this.invalid})}render(){const e={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return x`<div
      role="radiogroup"
      id="radiogroup"
      class=${ve(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
    >
      ${i(this,r,Re).call(this)}
    </div>`}};r=new WeakSet;z=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(t=>t.checked);e?(e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")):this._contentElement.setAttribute("tabindex","0"),this.radios.filter(t=>!t.checked).forEach(t=>t.setAttribute("tabindex","-1"))};we=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(a=>a.checked),t=e||this.radios[0];t&&(t.focus(),e||(this.radios.forEach(a=>a.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")))};T=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))};Le=function(e){const t=e.target;t.hasAttribute("value")&&(this.value=t.value,this._syncRadioStates(),i(this,r,T).call(this))};Ee=function(e){if(!this._isConnected)return;const t=this.radios.filter(o=>!o.hasAttribute("disabled"));if(t.length===0)return;let a=t.findIndex(o=>document.activeElement===o);switch(a===-1&&(a=t.findIndex(o=>o.checked),a===-1&&(a=0)),e.key){case"ArrowDown":case"ArrowRight":{e.preventDefault();const o=(a+1)%t.length;i(this,r,C).call(this,t[o]);break}case"ArrowUp":case"ArrowLeft":{e.preventDefault();const o=(a-1+t.length)%t.length;i(this,r,C).call(this,t[o]);break}default:return}};C=function(e){!this._contentElement||!this._isConnected||(this.radios.forEach(t=>t.setAttribute("tabindex","-1")),e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1"),e.checked=!0,e.focus(),this.value=e.value,this._syncRadioStates(),i(this,r,T).call(this))};Re=function(){return[i(this,r,Se).call(this),i(this,r,ze).call(this),i(this,r,Ce).call(this)].map(t=>x`${t}`)};Se=function(){if(this.label)return x` <gds-form-control-header class="size-${this.size}">
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
      @keydown=${i(this,r,Ee)}
      @focus=${i(this,r,we)}
    >
      <slot @gds-radio-change=${i(this,r,Le)}></slot>
    </div>`};Ce=function(){return x` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
    >
    </gds-form-control-footer>`};g.styles=[fe,je];c([n()],g.prototype,"size",2);c([n()],g.prototype,"direction",2);c([n({attribute:"supporting-text"})],g.prototype,"supportingText",2);c([n({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],g.prototype,"showExtendedSupportingText",2);c([Ge(".content")],g.prototype,"_contentElement",2);c([A("value")],g.prototype,"_handleValueChange",1);c([A("invalid")],g.prototype,"_syncRadioStates",1);g=c([be()],g);let k=class extends Te(Pe(Oe(g))){};k=c([G("gds-radio-group",{dependsOn:[Ae,$e]})],k);k.define();const Gt={title:"Components/Radio",component:"gds-radio-group",subcomponents:{GdsRadio:"gds-radio"},tags:["autodocs"],argTypes:{...Ie("gds-radio-group")},parameters:{docs:{description:{component:`Radio buttons are form controls that allow users to select a single option from a set of mutually exclusive choices.<br/>
They are grouped using a radio group component which manages selection, keyboard navigation, and validation.

Radio groups provide validation and selection management and implements the ElementInternals \`formAssociated\` API.

Groups support vertical and horizontal layouts, and can be sized to fit different space requirements.`}}}},h={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0},args:{label:"Label",supportingText:"Label support text."}}},v={...h,name:"Radio",args:{label:"Pick an option",supportingText:"Label support text.",innerHTML:`
    <gds-radio label="Radio Option 1" supporting-text="Supporting text" value="1"></gds-radio>
    <gds-radio label="Radio Option 2" supporting-text="Supporting text" value="2"></gds-radio>
    <gds-radio label="Radio Option 3" supporting-text="Supporting text" value="3"></gds-radio>`}},f={...h,name:"Validation",render:()=>b`
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
  `},y={...h,name:"Disabled",render:()=>b`
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
  `},_={...h,name:"Size",render:()=>b`
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
  `},w={...h,name:"Direction",render:()=>b`
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
  `},L={...h,name:"Radio group label",render:()=>b`
    <div class="radio-group">
      <gds-radio-group>
        <gds-radio label="Radio Label" value="1"></gds-radio>
        <gds-radio label="Radio Label" value="2"></gds-radio>
      </gds-radio-group>
    </div>
  `};var F,I,q,V,M;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(I=v.parameters)==null?void 0:I.docs)==null?void 0:q.source},description:{story:`Radio buttons allow users to select a single option from a list of two or more mutually exclusive options.<br />
Each radio button must have both a label and a value.

Usage:

\`\`\`html
<gds-radio-group label="Select an option">
  <gds-radio label="Option 1" value="1"></gds-radio>
  <gds-radio label="Option 2" value="2"></gds-radio>
</gds-radio-group>
\`\`\`

Interactive example with supporting texts:`,...(M=(V=v.parameters)==null?void 0:V.docs)==null?void 0:M.description}}};var B,W,H,N,j;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(W=f.parameters)==null?void 0:W.docs)==null?void 0:H.source},description:{story:`Radio groups support validation using Green Core's [form validation API](/docs/components-form-validation-documentation--docs).

The error message appears below the radio group, and can be set either trough a validator, or explicctly using the using the \`error-message\` attribute.

If you click on 'submit' first on the example below it will validate the radio group and show the error message.`,...(j=(N=f.parameters)==null?void 0:N.docs)==null?void 0:j.description}}};var K,U,X;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(U=E.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var J,Q,Y,Z,ee;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:Y.source},description:{story:`Disabled radio buttons cannot be interacted with and appear visually muted.

In general, this state should never be used. Instead, aim to explain to the user why the choice is wrong in an error message and make sure they understand how to correct it.`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,ae,oe,se,re;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:oe.source},description:{story:`Radio buttons support two sizes:
- Large (default): Standard size for most use cases
- Small: Compact size for space-constrained layouts

The size can be set on the radio group and applies to all radio buttons within.`,...(re=(se=_.parameters)==null?void 0:se.docs)==null?void 0:re.description}}};var ie,de,ne,le,pe;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ne=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ne.source},description:{story:`Radio buttons can be arranged in two directions:
- Column (default): Vertical stacking for clear separation
- Row: Horizontal alignment for compact layouts that will break to new line when not enough space is available

Choose the direction based on available space and number of options.`,...(pe=(le=w.parameters)==null?void 0:le.docs)==null?void 0:pe.description}}};var ge,ue,ce,xe,he;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ce=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:ce.source},description:{story:`While radio groups can be created without a label, it's recommended to always provide one for clarity and accessibility.
The label helps users understand what the options are for.

In certain cases when space is limited, the group label can be omitted.`,...(he=(xe=L.parameters)==null?void 0:xe.docs)==null?void 0:he.description}}};const At=["RadioButton","Validation","DosAndDonts","Disabled","Size","Direction","GroupLabel"];export{w as Direction,y as Disabled,E as DosAndDonts,L as GroupLabel,v as RadioButton,_ as Size,f as Validation,At as __namedExportsOrder,Gt as default};
