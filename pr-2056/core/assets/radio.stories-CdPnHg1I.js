import{i as ue,x as m}from"./lit-element-Bx14lxc-.js";import{n as l,r as Le,G as Ee,h,g as ce}from"./custom-element-scoping-b4c89-hi.js";import{G as Re}from"./selection-field-label.component-YG8VO96b.js";import{w as C}from"./watch-tFciLXSI.js";import{l as Se}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{a as ze}from"./query-p8xgzTDt.js";import{e as ke}from"./class-map-CXsQwv0r.js";import{G as Ce,a as Ge}from"./form-control-header.component-C4JQUZjZ.js";import{t as De}from"./tokens.style-C9bLefPj.js";import{d as Ae,b as $e,w as Te}from"./declarative-layout-mixins-BB4ZLY5n.js";import{a as Pe}from"./button.component-Bdos8zoN.js";import"./flex-DTBzRj2-.js";import"./card-VanqcJEE.js";import"./text-BhQaTdoS.js";import"./divider-D1LCDXE2.js";import"./circle-check-C3nwY0Y-.js";import"./cross-small-Cc2_mHhK.js";import{a as Oe}from"./argTableProps-DwQcFV4K.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./transitional-styles-BOwn52Fb.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./badge.component-C6J1p3VS.js";import"./flex.component-QD4FtwzU.js";import"./div.component-DQzJWx6E.js";import"./triangle-exclamation.component-BC2b4__3.js";import"./icon-TXeUf8MR.js";import"./card.component-URb5HL5V.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./text.component-B4D18gL7.js";import"./cross-small.component-DGKi69Og.js";import"./custom-elements-XkCQEGUf.js";const Fe=ue`
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
`;var Ie=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,xe=e=>{throw TypeError(e)},p=(e,t,a,o)=>{for(var r=o>1?void 0:o?qe(t,a):t,u=e.length-1,c;u>=0;u--)(c=e[u])&&(r=(o?c(t,a,r):c(r))||r);return o&&r&&Ie(t,a,r),r},Ve=(e,t,a)=>t.has(e)||xe("Cannot "+a),D=(e,t,a)=>(Ve(e,t,"read from private field"),a?a.call(e):t.get(e)),A=(e,t,a)=>t.has(e)?xe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),E,R;let d=class extends Ee{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,A(this,E,e=>{this.disabled||!this.value||!this.label||(e.preventDefault(),this.checked=!0,this.focus(),this.dispatchEvent(new Event("gds-radio-change",{bubbles:!0})))}),A(this,R,e=>{this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.checked=!0,this.dispatchEvent(new Event("gds-radio-change",{bubbles:!0})))}),this.addEventListener("keydown",D(this,R)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this._updateAriaState(),this.addEventListener("click",D(this,E))}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.toggleAttribute("aria-invalid",this.invalid)}updated(e){super.updated(e),(e.has("checked")||e.has("disabled")||e.has("invalid"))&&this._updateAriaState()}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}render(){return h`
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
    `}};E=new WeakMap;R=new WeakMap;d.styles=[Fe];p([l()],d.prototype,"label",2);p([l({attribute:"supporting-text"})],d.prototype,"supportingText",2);p([l()],d.prototype,"value",2);p([l({type:Boolean,reflect:!0})],d.prototype,"checked",2);p([l({type:Boolean,reflect:!0})],d.prototype,"disabled",2);p([l({type:Boolean})],d.prototype,"invalid",2);p([Le()],d.prototype,"_isFocused",2);p([C("disabled")],d.prototype,"_handleDisabledChange",1);d=p([ce("gds-radio",{dependsOn:[Re]})],d);d.define();const Me=ue`
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
`;var Be=Object.defineProperty,We=Object.getOwnPropertyDescriptor,me=e=>{throw TypeError(e)},g=(e,t,a,o)=>{for(var r=o>1?void 0:o?We(t,a):t,u=e.length-1,c;u>=0;u--)(c=e[u])&&(r=(o?c(t,a,r):c(r))||r);return o&&r&&Be(t,a,r),r},He=(e,t,a)=>t.has(e)||me("Cannot "+a),Ne=(e,t,a)=>t.has(e)?me("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),i=(e,t,a)=>(He(e,t,"access private method"),a),s,S,he,G,be,ve,z,fe,ye,we,_e;let n=class extends Pe{constructor(){super(...arguments),Ne(this,s),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,this._isConnected=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this._isConnected=!0,this.updateComplete.then(()=>{this._syncRadioStates(),i(this,s,S).call(this)}),this.addEventListener("invalid",this._syncRadioStates)}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this.removeEventListener("invalid",this._syncRadioStates)}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._isConnected&&(this._syncRadioStates(),this.updateComplete.then(()=>{i(this,s,S).call(this)}))}_syncRadioStates(){this._isConnected&&this.radios.forEach(e=>{e.checked=e.value===this.value,e.size=this.size,e.invalid=this.invalid})}render(){const e={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return h`<div
      role="radiogroup"
      id="radiogroup"
      class=${ke(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
    >
      ${i(this,s,fe).call(this)}
    </div>`}};s=new WeakSet;S=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(t=>t.checked);e?(e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")):this._contentElement.setAttribute("tabindex","0"),this.radios.filter(t=>!t.checked).forEach(t=>t.setAttribute("tabindex","-1"))};he=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(a=>a.checked),t=e||this.radios[0];t&&(t.focus(),e||(this.radios.forEach(a=>a.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")))};G=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))};be=function(e){const t=e.target;t.hasAttribute("value")&&(this.value=t.value,this._syncRadioStates(),i(this,s,G).call(this))};ve=function(e){if(!this._isConnected)return;const t=this.radios.filter(o=>!o.hasAttribute("disabled"));if(t.length===0)return;let a=t.findIndex(o=>document.activeElement===o);switch(a===-1&&(a=t.findIndex(o=>o.checked),a===-1&&(a=0)),e.key){case"ArrowDown":case"ArrowRight":{e.preventDefault();const o=(a+1)%t.length;i(this,s,z).call(this,t[o]);break}case"ArrowUp":case"ArrowLeft":{e.preventDefault();const o=(a-1+t.length)%t.length;i(this,s,z).call(this,t[o]);break}default:return}};z=function(e){!this._contentElement||!this._isConnected||(this.radios.forEach(t=>t.setAttribute("tabindex","-1")),e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1"),e.checked=!0,e.focus(),this.value=e.value,this._syncRadioStates(),i(this,s,G).call(this))};fe=function(){return[i(this,s,ye).call(this),i(this,s,we).call(this),i(this,s,_e).call(this)].map(t=>h`${t}`)};ye=function(){if(this.label)return h` <gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};we=function(){return h` <div
      class="content"
      @keydown=${i(this,s,ve)}
      @focus=${i(this,s,he)}
    >
      <slot @gds-radio-change=${i(this,s,be)}></slot>
    </div>`};_e=function(){return h` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
    >
    </gds-form-control-footer>`};n.styles=[De,Me];g([l()],n.prototype,"size",2);g([l()],n.prototype,"direction",2);g([l({attribute:"supporting-text"})],n.prototype,"supportingText",2);g([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],n.prototype,"showExtendedSupportingText",2);g([ze(".content")],n.prototype,"_contentElement",2);g([C("value")],n.prototype,"_handleValueChange",1);g([C("invalid")],n.prototype,"_syncRadioStates",1);n=g([Se()],n);let k=class extends Ae($e(Te(n))){};k=g([ce("gds-radio-group",{dependsOn:[Ce,Ge]})],k);k.define();const zt={title:"Components/Radio",component:"gds-radio-group",subcomponents:{GdsRadio:"gds-radio"},tags:["autodocs"],argTypes:{...Oe("gds-radio-group")},parameters:{docs:{description:{component:`Radio buttons are form controls that allow users to select a single option from a set of mutually exclusive choices.<br/>
They are grouped using a radio group component which manages selection, keyboard navigation, and validation.

Radio groups provide validation and selection management and implements the ElementInternals \`formAssociated\` API.

Groups support vertical and horizontal layouts, and can be sized to fit different space requirements.`}}}},x={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0},args:{label:"Label",supportingText:"Label support text."}}},b={...x,name:"Radio",args:{label:"Pick an option",supportingText:"Label support text.",innerHTML:`
    <gds-radio label="Radio Option 1" supporting-text="Supporting text" value="1"></gds-radio>
    <gds-radio label="Radio Option 2" supporting-text="Supporting text" value="2"></gds-radio>
    <gds-radio label="Radio Option 3" supporting-text="Supporting text" value="3"></gds-radio>`}},v={...x,name:"Validation",render:()=>m`
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
  `},L={...x,name:"Do's and dont's",render:()=>m`
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
  `},f={...x,name:"Disabled",render:()=>m`
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
  `},y={...x,name:"Size",render:()=>m`
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
  `},w={...x,name:"Direction",render:()=>m`
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
  `},_={...x,name:"Radio group label",render:()=>m`
    <div class="radio-group">
      <gds-radio-group>
        <gds-radio label="Radio Label" value="1"></gds-radio>
        <gds-radio label="Radio Label" value="2"></gds-radio>
      </gds-radio-group>
    </div>
  `};var $,T,P,O,F;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(P=(T=b.parameters)==null?void 0:T.docs)==null?void 0:P.source},description:{story:`Radio buttons allow users to select a single option from a list of two or more mutually exclusive options.<br />
Each radio button must have both a label and a value.

Usage:

\`\`\`html
<gds-radio-group label="Select an option">
  <gds-radio label="Option 1" value="1"></gds-radio>
  <gds-radio label="Option 2" value="2"></gds-radio>
</gds-radio-group>
\`\`\`

Interactive example with supporting texts:`,...(F=(O=b.parameters)==null?void 0:O.docs)==null?void 0:F.description}}};var I,q,V,M,B;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(q=v.parameters)==null?void 0:q.docs)==null?void 0:V.source},description:{story:`Radio groups support validation using Green Core's [form validation API](/docs/components-form-validation-documentation--docs).

The error message appears below the radio group, and can be set either trough a validator, or explicctly using the using the \`error-message\` attribute.

If you click on 'submit' first on the example below it will validate the radio group and show the error message.`,...(B=(M=v.parameters)==null?void 0:M.docs)==null?void 0:B.description}}};var W,H,N;L.parameters={...L.parameters,docs:{...(W=L.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(N=(H=L.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var K,U,X,J,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(U=f.parameters)==null?void 0:U.docs)==null?void 0:X.source},description:{story:`Disabled radio buttons cannot be interacted with and appear visually muted.

In general, this state should never be used. Instead, aim to explain to the user why the choice is wrong in an error message and make sure they understand how to correct it.`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var Y,Z,j,ee,te;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(j=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:j.source},description:{story:`Radio buttons support two sizes:
- Large (default): Standard size for most use cases
- Small: Compact size for space-constrained layouts

The size can be set on the radio group and applies to all radio buttons within.`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ae,oe,re,se,ie;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:re.source},description:{story:`Radio buttons can be arranged in two directions:
- Column (default): Vertical stacking for clear separation
- Row: Horizontal alignment for compact layouts that will break to new line when not enough space is available

Choose the direction based on available space and number of options.`,...(ie=(se=w.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var de,ne,le,pe,ge;_.parameters={..._.parameters,docs:{...(de=_.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(le=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:le.source},description:{story:`While radio groups can be created without a label, it's recommended to always provide one for clarity and accessibility.
The label helps users understand what the options are for.

In certain cases when space is limited, the group label can be omitted.`,...(ge=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:ge.description}}};const kt=["RadioButton","Validation","DosAndDonts","Disabled","Size","Direction","GroupLabel"];export{w as Direction,f as Disabled,L as DosAndDonts,_ as GroupLabel,b as RadioButton,y as Size,v as Validation,kt as __namedExportsOrder,zt as default};
