import{i as O,x as T}from"./lit-element-C_s9q329.js";import{n as s,g as m,G as P,h}from"./custom-element-scoping-BEGY3AqQ.js";import{e as R}from"./class-map-Bz98xO8-.js";import{t as L}from"./tokens.style-CFvqdzpw.js";import{T as S}from"./transitional-styles-iv5lM2WH.js";import{l as G}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{w as j}from"./watch-tFciLXSI.js";import{a as B}from"./button-DMqiAWPO.js";import"./form-control-footer-31u3ZPFB.js";import"./flex-tnFv_7np.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./query-p8xgzTDt.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./triangle-exclamation-BVOOPWQa.js";import"./icon-DYBgint3.js";import"./card-BihnooJR.js";import"./div-Cnle9s5w.js";import"./badge-Dc9DlXiN.js";const C=O`
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
        &:hover {
          background-color: var(--radio-bg-mix);
        }
      }

      &:active {
        background-color: var(--radio-bg-mix-active);
        scale: 0.96;
      }

      &.selected:active {
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

        .selected &,
        :active & {
          box-shadow: inset 0 0 0 var(--radio-border-width-selected)
            var(--radio-border-color-selected);
        }
      }
    }
  }
`,A=O`
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

    .field-label-container {
      display: flex;
      gap: var(--gds-spacing-m);
    }

    .field-label {
      display: flex;
      flex-direction: column;
      gap: var(--gds-spacing-xxs);

      .label {
        font-size: var(--gds-text-size-detail-m);
        line-height: var(--gds-line-height-detail-m);
        font-weight: var(--gds-text-weight-book);
      }

      .support-text {
      }
    }

    @media (hover: hover) {
    }
  }
`;var F=Object.defineProperty,M=Object.getOwnPropertyDescriptor,n=(o,t,a,r)=>{for(var e=r>1?void 0:r?M(t,a):t,i=o.length-1,d;i>=0;i--)(d=o[i])&&(e=(r?d(t,a,e):d(e))||e);return r&&e&&F(t,a,e),e};let l=class extends P{constructor(){super(),this.label="",this["support-text"]="",this.size="large",this.disabled=!1,this.invalid=!1}connectedCallback(){super.connectedCallback(),S.instance.apply(this,"gds-field-label")}render(){const o={invalid:this.invalid??!1,disabled:this.disabled,small:this.size==="small"};return h`
      <div class="field-label-container">
        <slot></slot>
        <div class="field-label ${R(o)}" part="_label">
          <label class="label" part="_label-text"> ${this.label} </label>
          <span class="support-text" part="_support-text">
            ${this["support-text"]}
          </span>
        </div>
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};l.styles=[L,A];n([s()],l.prototype,"label",2);n([s()],l.prototype,"support-text",2);n([s()],l.prototype,"size",2);n([s({type:Boolean,reflect:!0})],l.prototype,"disabled",2);n([s({type:Boolean})],l.prototype,"invalid",2);n([j("disabled")],l.prototype,"_handleDisabledChange",1);l=n([m("gds-field-label"),G()],l);var V=Object.defineProperty,q=Object.getOwnPropertyDescriptor,x=(o,t,a,r)=>{for(var e=r>1?void 0:r?q(t,a):t,i=o.length-1,d;i>=0;i--)(d=o[i])&&(e=(r?d(t,a,e):d(e))||e);return r&&e&&V(t,a,e),e};let c=class extends P{constructor(){super(...arguments),this.label="",this.supportingText="",this.selected=!1}connectedCallback(){super.connectedCallback(),S.instance.apply(this,"gds-radio")}render(){const o={radio:!0,selected:this.selected};return h`
      <gds-field-label support-text=${this.supportingText} label=${this.label}>
        <div tabindex="0" class=${R(o)}>
          <div class="dot"></div>
        </div>
      </gds-field-label>
    `}};c.styles=[L,C];x([s()],c.prototype,"label",2);x([s({attribute:"supporting-text"})],c.prototype,"supportingText",2);x([s({type:Boolean})],c.prototype,"selected",2);c=x([m("gds-radio")],c);var H=Object.defineProperty,I=Object.getOwnPropertyDescriptor,u=(o,t,a,r)=>{for(var e=r>1?void 0:r?I(t,a):t,i=o.length-1,d;i>=0;i--)(d=o[i])&&(e=(r?d(t,a,e):d(e))||e);return r&&e&&H(t,a,e),e};let p=class extends B{constructor(){super(...arguments),this.label="",this.size="large",this.supportingText="",this.showExtendedSupportingText=!1}render(){return h`
      <div class="radio-group">
        <gds-form-control-header class="size-${this.size}">
          <label for="input" slot="label">${this.label}</label>
          <span slot="supporting-text" id="supporting-text">
            ${this.supportingText}
          </span>
          <slot
            name="extended-supporting-text"
            slot="extended-supporting-text"
          ></slot>
        </gds-form-control-header>
        <slot></slot>
        <gds-form-control-footer
          class="size-${this.size}"
        ></gds-form-control-footer>
      </div>
    `}_getValidityAnchor(){throw new Error("Method not implemented.")}};p.styles=[C];u([s()],p.prototype,"label",2);u([s()],p.prototype,"size",2);u([s({attribute:"supporting-text"})],p.prototype,"supportingText",2);u([s({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],p.prototype,"showExtendedSupportingText",2);p=u([m("gds-radio-group")],p);const be={title:"Components/Radio",component:"gds-radio",tags:["autodocs"]},D={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},g={...D,name:"radio"},b={...D,name:"States",render:()=>T`
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
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          selected
          label="Selected"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  `};var v,f,y,w,_;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'radio'
}`,...(y=(f=g.parameters)==null?void 0:f.docs)==null?void 0:y.source},description:{story:"TODO: Add documentation",...(_=(w=g.parameters)==null?void 0:w.docs)==null?void 0:_.description}}};var z,E,$;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          selected
          label="Selected"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  \`
}`,...($=(E=b.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};const xe=["RadioButton","States"];export{g as RadioButton,b as States,xe as __namedExportsOrder,be as default};
