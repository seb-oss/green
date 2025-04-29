import{x as d}from"./lit-element-Bx14lxc-.js";import{a as n}from"./argTableProps-CGPSRrgG.js";import{G as m}from"./summary.component-naWCx-Vz.js";import"./datepicker-RJCFNkM3.js";import"./dropdown-BhO3FIaY.js";import"./option-yXqBFqjx.js";import"./menu-heading-DcpsJjyR.js";import"./input-CqsT7nMX.js";import"./rocket-C7Lh1IXr.js";import"./custom-elements-D9ZV_1Kd.js";import"./runtime-BL31MtW8.js";import"./when-BR7zwNJC.js";import"./custom-element-scoping-b4c89-hi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./card.component-BJRQ7Qi8.js";import"./tokens.style-OWC-W9l-.js";import"./declarative-layout-mixins-DCzV-Sjo.js";import"./div.component-DDYeyHVz.js";import"./flex.component-BAUFwSAu.js";import"./text.component-BQ_keSYA.js";import"./static-B8S6DEnV.js";import"./datepicker.component-Cx3n_0SS.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./ref-R0wBYijq.js";import"./button.component-JH9MBQut.js";import"./class-map-CXsQwv0r.js";import"./if-defined-CVqwUuaf.js";import"./transitional-styles-Ckr_5-pT.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./dropdown.component-CFbMXnG9.js";import"./icon-BQ6Bryuw.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-GwSQv2RY.js";import"./form-control-header.component-DlYtB3HG.js";import"./badge.component-BJH5hoZ7.js";import"./triangle-exclamation.component-C1Ok1HN4.js";import"./option.styles-B-eFIeek.js";import"./checkmark.component-CHwwHQjg.js";import"./chevron-bottom.component-DWCKJL6a.js";import"./popover.component-C26SUBPV.js";import"./cross-small.component-Bgqlocab.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Drn5DnlM.js";import"./calender-add.component-CEPU4Wof.js";import"./chevron-right.component-BWYpY4aM.js";import"./menu-heading.component-DVZTfZQC.js";import"./input.component-B4FA7JjZ.js";import"./cross-large.component-D6yBJiCV.js";import"./rocket.component-CLQdlBLu.js";m.define();const ut={title:"Components/Form/Validation/Summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form/summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)


When a user attempts to submit a form with errors, this component displays a summary of those errors.
Including an error summary greatly assists users in promptly identifying and addressing multiple errors
in a consolidated manner. It provides a clear indication of what went wrong and what needs to be corrected.

Each form component that contains an error is listed as a row, displaying the name of the field and
linking it to the corresponding form element.`}}},tags:["autodocs"],argTypes:{...n("gds-form-summary")}},p={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},o={...p,render:l=>d`<form style="width: 450px">
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
    </form>`};var r,e,i,s,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(e=o.parameters)==null?void 0:e.docs)==null?void 0:i.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nThe suammry component will automatically detect any form elements with validation errors and display them.",...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.description}}};const gt=["Usage"];export{o as Usage,gt as __namedExportsOrder,ut as default};
