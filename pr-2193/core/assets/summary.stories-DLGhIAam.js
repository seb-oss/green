import{x as g}from"./lit-element-Bx14lxc-.js";import{a as y}from"./argTableProps-DSj7JWK6.js";import{G as v}from"./summary.component-CbyAmLWE.js";import"./datepicker-G2GVc7K0.js";import"./dropdown-iuYmKCTU.js";import"./option-rWvuVSBK.js";import"./menu-heading-Cosv1ajY.js";import"./input-Cq3T9A8u.js";import"./rocket-BM_WBZ7u.js";import"./custom-elements-D3jjM8UY.js";import"./runtime-BL31MtW8.js";import"./custom-element-scoping-CNGU1oQ0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./when-BR7zwNJC.js";import"./button.component-DdDd8Lgo.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./tokens.style-DQsNuKSy.js";import"./transitional-styles-lz-XxrEG.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-dHcexrGz.js";import"./watch-tFciLXSI.js";import"./card.component-a_DdskCg.js";import"./div.component-COo6-rOq.js";import"./flex.component-DXi-h7Ch.js";import"./arrow-up.component-CpuW_oY-.js";import"./icon-1rFpnFmF.js";import"./datepicker.component-CgQ1IwTf.js";import"./localized-decorator-DtmrKsyB.js";import"./query-async-MEroNOeJ.js";import"./directive-helpers-BF33kFuJ.js";import"./ref-R0wBYijq.js";import"./dropdown.component-JP6xfIWg.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-tmPF1Pqn.js";import"./form-control-header.component-eQ5T0KzH.js";import"./badge.component-B0YxZeN0.js";import"./triangle-exclamation.component-y6G1ChOv.js";import"./unwrap-slots-C4xryOWd.js";import"./checkmark.component-CrrBmXGM.js";import"./chevron-bottom.component-DzNg7GNq.js";import"./popover.component-CpXVgFzi.js";import"./cross-small.component-B2GUrnOH.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-D3C6D2rD.js";import"./calender-add.component-BzTmGDIv.js";import"./chevron-right.component-BEaAedbo.js";import"./menu-heading.component-B6mtOJhl.js";import"./input.component-CMbfDlC3.js";import"./cross-large.component-BoQaUmR8.js";import"./rocket.component-BQY6UgHT.js";v.define();const bt={title:"Components/Form/Validation/Summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form/summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

When a user attempts to submit a form with errors, this component displays a summary of those errors.
Including an error summary greatly assists users in promptly identifying and addressing multiple errors
in a consolidated manner. It provides a clear indication of what went wrong and what needs to be corrected.`}}},tags:["autodocs"],argTypes:{...y("gds-form-summary")}},c={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},r={...c,render:f=>g`<form style="width: 450px">
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
        <gds-form-summary reactive></gds-form-summary>
        <gds-flex gap="m">
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
          <gds-button type="reset">Reset</gds-button>
        </gds-flex>
      </gds-flex>
    </form>`},e={...c,render:f=>g`<form style="width: 450px">
      <gds-form-summary id="summary"></gds-form-summary>
      <gds-flex flex-direction="column" gap="m" align-items="start">
        <gds-input
          label="Designation"
          .validator=${{validate:t=>{if(t.value==="")return[{...t.validity,valid:!1,customError:!0},"A designation is required"]}}}
        ></gds-input>
        <gds-button
          type="submit"
          onclick="document.getElementById('summary').refresh()"
          >Submit</gds-button
        >
      </gds-flex>
    </form> `};var o,a,s,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        <gds-form-summary reactive></gds-form-summary>
        <gds-flex gap="m">
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
          <gds-button type="reset">Reset</gds-button>
        </gds-flex>
      </gds-flex>
    </form>\`
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nIn this example we're using a reactive form summary below the form controls. The `reactive` attribute makes the summary\nupdate automatically as the user interacts with the form.",...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.description}}};var d,n,l,u,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px">
      <gds-form-summary id="summary"></gds-form-summary>
      <gds-flex flex-direction="column" gap="m" align-items="start">
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
        <gds-button
          type="submit"
          onclick="document.getElementById('summary').refresh()"
          >Submit</gds-button
        >
      </gds-flex>
    </form> \`
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source},description:{story:'The `gds-form-summary` component can also be used in a non-reactive way.\nIn this example, the summary is placed above the form controls and\nis updated manually when the user clicks the "Submit" button.',...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.description}}};const ht=["Usage","ManualUpdate"];export{e as ManualUpdate,r as Usage,ht as __namedExportsOrder,bt as default};
