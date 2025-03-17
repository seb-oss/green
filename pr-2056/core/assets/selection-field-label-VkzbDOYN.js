import{l as d}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{n as c,g as f,G as b,h as p}from"./custom-element-scoping-BEGY3AqQ.js";import{e as g}from"./class-map-Bz98xO8-.js";import{t as u}from"./tokens.style-CFvqdzpw.js";import{T as m}from"./transitional-styles-iv5lM2WH.js";import{i as h}from"./lit-element-C_s9q329.js";const v=h`
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
`;var x=Object.defineProperty,y=Object.getOwnPropertyDescriptor,n=(s,l,o,r)=>{for(var e=r>1?void 0:r?y(l,o):l,i=s.length-1,a;i>=0;i--)(a=s[i])&&(e=(r?a(l,o,e):a(e))||e);return r&&e&&x(l,o,e),e};let t=class extends b{constructor(){super(),this.label="",this.supportingText=""}connectedCallback(){super.connectedCallback(),m.instance.apply(this,"gds-selection-field-label")}render(){const s={"selection-field-label":!0,"has-supporting-text":!!this.supportingText};return p`
      <div class="selection-field-container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${g(s)}">
          <label class="primary-label"> ${this.label} </label>
          ${this.label?p`
                <span class="supporting-text"> ${this.supportingText} </span>
              `:""}
        </div>
      </div>
    `}};t.styles=[u,v];n([c()],t.prototype,"label",2);n([c({attribute:"supporting-text"})],t.prototype,"supportingText",2);t=n([f("gds-selection-field-label"),d()],t);
