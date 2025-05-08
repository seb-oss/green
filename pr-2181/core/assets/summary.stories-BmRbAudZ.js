import{x as d}from"./lit-element-Bx14lxc-.js";import{a as n}from"./argTableProps-lilpp6BK.js";import{G as m}from"./summary.component-C0NkIwGD.js";import"./datepicker-CX3TgZo2.js";import"./dropdown-BD-8WGDM.js";import"./option--WA1X-7A.js";import"./menu-heading-Cosv1ajY.js";import"./input-B5mFKpxi.js";import"./rocket-DnE6yxKq.js";import"./custom-elements-CnfegdPF.js";import"./runtime-BL31MtW8.js";import"./when-BR7zwNJC.js";import"./custom-element-scoping-CNGU1oQ0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./card.component-McCzQM22.js";import"./tokens.style-DQsNuKSy.js";import"./declarative-layout-mixins-D1Y0gyd7.js";import"./div.component-laA26zwj.js";import"./flex.component-CkL0ce-t.js";import"./text.component-BPAifzqH.js";import"./static-B8S6DEnV.js";import"./datepicker.component-DRa4Qsx6.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./ref-R0wBYijq.js";import"./button.component-DinZMa0g.js";import"./class-map-CXsQwv0r.js";import"./if-defined-CVqwUuaf.js";import"./transitional-styles-lz-XxrEG.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./dropdown.component-CgEyyFM1.js";import"./icon-BNiJwJst.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-tmPF1Pqn.js";import"./form-control-header.component-DoK0aXgw.js";import"./badge.component-ShI0WekJ.js";import"./triangle-exclamation.component-Boc6TMtU.js";import"./unwrap-slots-C4xryOWd.js";import"./checkmark.component-D3UvSWzQ.js";import"./chevron-bottom.component-DERCCTLV.js";import"./popover.component-CjYbOnBF.js";import"./cross-small.component-YAxQyR0g.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-D3C6D2rD.js";import"./calender-add.component-C-Q3TpP9.js";import"./chevron-left.component-DLRQhhB2.js";import"./chevron-right.component-CtQt4uEn.js";import"./menu-heading.component-B6mtOJhl.js";import"./input.component-DefRaKVM.js";import"./cross-large.component-CK7gJC5Z.js";import"./rocket.component-Dlq1OF7j.js";m.define();const gt={title:"Components/Form/Validation/Summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form/summary)
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
}`,...(i=(e=o.parameters)==null?void 0:e.docs)==null?void 0:i.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nThe suammry component will automatically detect any form elements with validation errors and display them.",...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.description}}};const ct=["Usage"];export{o as Usage,ct as __namedExportsOrder,gt as default};
