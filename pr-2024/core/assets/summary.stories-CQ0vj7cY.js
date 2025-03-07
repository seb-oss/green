import{i as f,x as v}from"./lit-element-C_s9q329.js";import{a as y}from"./argTableProps-DSNJ9ZM1.js";import{m as h,s as b}from"./runtime-BL31MtW8.js";import{n as x}from"./when-BR7zwNJC.js";import{g as w,G as k,h as m}from"./custom-element-scoping-BEGY3AqQ.js";import"./container-CBRi4R0h.js";import"./card-BihnooJR.js";import"./flex-tnFv_7np.js";import"./text-DQ_oI5A1.js";import"./datepicker-D0OHNXA1.js";import"./dropdown-AD1Iim4u.js";import"./menu-heading-5UouMWYY.js";import"./input-W9dTqVzQ.js";import"./rocket-aQtI4YJ4.js";import"./custom-elements-Cc3Waf23.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./div-Cnle9s5w.js";import"./tokens.style-CFvqdzpw.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./static-_ukc2i0J.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./field-base-DrpYf7Nt.js";import"./button-DMqiAWPO.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./transitional-styles-iv5lM2WH.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./triangle-exclamation-BVOOPWQa.js";import"./icon-DYBgint3.js";import"./badge-Dc9DlXiN.js";import"./directive-helpers-C6DiESt7.js";import"./ref-D_ho-JAG.js";import"./attribute-converters-CdI0trPX.js";import"./calendar-Be21rDzt.js";import"./calender-add-CE9vLacF.js";import"./chevron-right-CuFgXs1t.js";import"./popover-Dra5GKNA.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small-CIJy4RQ0.js";import"./backdrop-DObgcszK.js";import"./checkmark-DGx1mICj.js";import"./chevron-bottom-CcRSBbmu.js";import"./choose-Dh3k58u9.js";import"./cross-large-DrW_LU0E.js";var E=Object.defineProperty,C=Object.getOwnPropertyDescriptor,O=(o,t,s,r)=>{for(var e=r>1?void 0:r?C(t,s):t,a=o.length-1,n;a>=0;a--)(n=o[a])&&(e=(r?n(t,s,e):n(e))||e);return r&&e&&E(t,s,e),e};let d=class extends k{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this.formObserver)==null||o.disconnect()}render(){var s;const t=Array.from(((s=this.form)==null?void 0:s.elements)||[]).filter(r=>r.invalid);return x(t.length>0,()=>m`<gds-card level="2" border="4xs/negative" border-radius="xs" padding="l" background="negative" color="negative">
          <gds-flex gap="s"></gds-flex>
            <gds-text font-size="heading-xs" font-weight="book">
              ${h(b`There are ${t.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${t.map(r=>m`<li><a href @click=${e=>{e.preventDefault(),r.focus()}}>${r.label}</li>`)}
            </ul>
        <gds-flex>
      </gds-card>`)}};d.styles=f`
    ul {
      list-style-type: none;
      margin: 1rem 0 0;
      padding: 0;
    }
    li {
      margin: 0.5rem 0;
    }
    a {
      color: inherit;
    }
  `;d=O([w("gds-form-summary")],d);const wt={title:"Components/Form/Validation/Summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form/summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)


When a user attempts to submit a form with errors, this component displays a summary of those errors.
Including an error summary greatly assists users in promptly identifying and addressing multiple errors
in a consolidated manner. It provides a clear indication of what went wrong and what needs to be corrected.

Each form component that contains an error is listed as a row, displaying the name of the field and
linking it to the corresponding form element.`}}},tags:["autodocs"],argTypes:{...y("gds-form-summary")}},$={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},i={...$,render:o=>v`<form style="width: 450px">
      <gds-flex flex-direction="column" gap="m">
        <gds-dropdown
          label="Astronaut"
          .validator=${{validate:t=>{if(t.value!=="cat")return[{...t.validity,valid:!1,customError:!0},t.value===void 0?"An astronaut is required":"Only cats can pilot rockets!"]}}}
        >
          <gds-option>Pick your astronaut</gds-option>
          <gds-option value="dog">Dog</gds-option>
          <gds-option value="cat">Cat</gds-option>
          <gds-option value="fish">Fish</gds-option>
        </gds-dropdown>
        <gds-datepicker
          label="Launch date"
          .validator=${{validate:t=>{if(t.value===void 0)return[{...t.validity,valid:!1,customError:!0},"A date is required"]}}}
        ></gds-datepicker>
        <gds-input
          label="Designation"
          .validator=${{validate:t=>{if(t.value==="")return[{...t.validity,valid:!1,customError:!0},"A designation is required"]}}}
        ></gds-input>
        <gds-div margin="s 0 s">
          <gds-form-summary></gds-form-summary>
        </gds-div>
        <gds-flex gap="m">
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
          <gds-button type="reset">Reset</gds-button>
        </gds-flex>
      </gds-flex>
    </form>`};var l,p,u,g,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px">
      <gds-flex flex-direction="column" gap="m">
        <gds-dropdown
          label="Astronaut"
          .validator=\${{
    validate: (el: any) => {
      if (el.value !== 'cat') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, el.value === undefined ? 'An astronaut is required' : 'Only cats can pilot rockets!'];
    }
  }}
        >
          <gds-option>Pick your astronaut</gds-option>
          <gds-option value="dog">Dog</gds-option>
          <gds-option value="cat">Cat</gds-option>
          <gds-option value="fish">Fish</gds-option>
        </gds-dropdown>
        <gds-datepicker
          label="Launch date"
          .validator=\${{
    validate: (el: any) => {
      if (el.value === undefined) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A date is required'];
    }
  }}
        ></gds-datepicker>
        <gds-input
          label="Designation"
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A designation is required'];
    }
  }}
        ></gds-input>
        <gds-div margin="s 0 s">
          <gds-form-summary></gds-form-summary>
        </gds-div>
        <gds-flex gap="m">
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
          <gds-button type="reset">Reset</gds-button>
        </gds-flex>
      </gds-flex>
    </form>\`
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nThe suammry component will automatically detect any form elements with validation errors and display them.",...(c=(g=i.parameters)==null?void 0:g.docs)==null?void 0:c.description}}};const kt=["Usage"];export{i as Usage,kt as __namedExportsOrder,wt as default};
