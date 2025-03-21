import{i as f,x as v}from"./lit-element-Bx14lxc-.js";import{a as y}from"./argTableProps-TPHCbZ2t.js";import{m as h,s as b}from"./runtime-BL31MtW8.js";import{n as x}from"./when-BR7zwNJC.js";import{G as w,h as m,g as k}from"./custom-element-scoping-BOlwUH_F.js";import"./container-85SW4Wdc.js";import"./card-qmuy8_pa.js";import"./flex-COKa8ndQ.js";import"./text-Ddpzuayr.js";import"./datepicker-CuBYgeiq.js";import"./option-BERNrmk2.js";import"./menu-heading-DQK3Mkeh.js";import"./input-CRrqrclN.js";import"./rocket-BeCI6NFo.js";import"./custom-elements-DSJaHGoJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./div-D-66otxp.js";import"./tokens.style-Db3B8yEB.js";import"./declarative-layout-mixins-CvhbdVQ9.js";import"./static-B8S6DEnV.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./field-base-0clmOCSV.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./transitional-styles-D9IvMC4x.js";import"./watch-tFciLXSI.js";import"./directive-helpers-BF33kFuJ.js";import"./ref-R0wBYijq.js";import"./attribute-converters-CdI0trPX.js";import"./button-DC9S9tme.js";import"./if-defined-CVqwUuaf.js";import"./observe-light-dom-CmJPHUQ4.js";import"./calendar-CPmwOJ2k.js";import"./calender-add-DC5_q3rF.js";import"./icon-BqRznh8Y.js";import"./chevron-right-DWqOHJ5_.js";import"./popover-CpyhYS8Q.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small-B7-HgGqq.js";import"./backdrop-zpEJm7mF.js";import"./form-control-footer-CmSOcy4e.js";import"./triangle-exclamation-Dt6bLdUK.js";import"./badge-Brdw-L5K.js";import"./checkmark-D28m9aNM.js";import"./chevron-bottom-0XUJqOMx.js";import"./choose-Dh3k58u9.js";import"./cross-large-HtIrBfFL.js";var E=Object.defineProperty,C=Object.getOwnPropertyDescriptor,O=(o,t,s,r)=>{for(var e=r>1?void 0:r?C(t,s):t,n=o.length-1,d;n>=0;n--)(d=o[n])&&(e=(r?d(t,s,e):d(e))||e);return r&&e&&E(t,s,e),e};let a=class extends w{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this.formObserver)==null||o.disconnect()}render(){var s;const t=Array.from(((s=this.form)==null?void 0:s.elements)||[]).filter(r=>r.invalid);return x(t.length>0,()=>m`<gds-card
          level="2"
          border="4xs"
          border-color="negative"
          border-radius="xs"
          padding="l"
          background="negative"
          color="negative"
        >
          <gds-flex gap="s">
            <gds-text font-size="heading-xs" font-weight="book">
              ${h(b`There are ${t.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${t.map(r=>m`<li>
                    <a
                      href=""
                      @click=${e=>{e.preventDefault(),r.focus()}}
                      >${r.label}</a
                    >
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};a.styles=f`
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
  `;a=O([k("gds-form-summary")],a);a.define();const kt={title:"Components/Form/Validation/Summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form/summary)
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
    </form>`};var l,p,u,c,g;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nThe suammry component will automatically detect any form elements with validation errors and display them.",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.description}}};const Et=["Usage"];export{i as Usage,Et as __namedExportsOrder,kt as default};
