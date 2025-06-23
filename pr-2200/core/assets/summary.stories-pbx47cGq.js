import{x as o}from"./lit-element-Bx14lxc-.js";import{a as w}from"./argTableProps-NUc7aS2w.js";import{G as D}from"./summary.component-VfSPDhra.js";import"./datepicker-Ce0q0fj3.js";import"./dropdown-oMggVDSb.js";import"./option-BHadwJRA.js";import"./menu-heading-ButTBDM4.js";import"./input-CrnSdQfF.js";import"./rocket-Cg4u28tW.js";import"./custom-elements-WxLGOKZt.js";import"./runtime-BL31MtW8.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-async-MEroNOeJ.js";import"./query-p8xgzTDt.js";import"./datepicker.component-CtB62UwF.js";import"./localized-decorator-DtmrKsyB.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./ref-R0wBYijq.js";import"./when-BR7zwNJC.js";import"./button.component-Dvch3JiS.js";import"./class-map-CXsQwv0r.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./tokens.style-BAMmArAm.js";import"./transitional-styles-BVKDYdtY.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-BN2gVja9.js";import"./watch-tFciLXSI.js";import"./dropdown.component-DGKretTO.js";import"./icon-D5wMM1Kz.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-D_FydH-c.js";import"./form-control-header.component-kQQ-_mfS.js";import"./badge.component-Cecy4xtR.js";import"./flex.component-JReqUiPc.js";import"./div.component-CtWtQCO9.js";import"./triangle-exclamation.component-B3ktSNCC.js";import"./card.component-Dud9SFBD.js";import"./unwrap-slots-C4xryOWd.js";import"./checkmark.component-dBOXRQUr.js";import"./chevron-bottom.component-BrhiIe-o.js";import"./popover.component-CYOUBm8v.js";import"./cross-small.component-w7U1EI-L.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-rcK-5UON.js";import"./index-C4WLrI9v.js";import"./calendar.component-KKP38z9m.js";import"./calender-add.component-BPqkXrSW.js";import"./chevron-right.component-BTQV8b4B.js";import"./arrow-up.component-B-cmHtMn.js";import"./menu-heading.component-pnojtWrU.js";import"./input.component-BWBVyIZy.js";import"./cross-large.component-Dh9Y75ud.js";import"./rocket.component-BPR0xhlY.js";D.define();const Et={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...w("gds-form-summary")}},i={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},r={...i,render:s=>o`<form style="width: 450px" novalidate>
      <gds-card
        display="flex"
        flex-direction="column"
        gap="m"
        variant="secondary"
        border-color="primary"
      >
        <gds-text tag="h2">Launch control</gds-text>
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
        <gds-flex gap="m" justify-content="center" margin="s 0 0 0">
          <gds-button type="reset" rank="tertiary">Reset</gds-button>
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
        </gds-flex>
      </gds-card>
    </form>`},e={...i,render:s=>o`<form style="width: 450px" novalidate>
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
    </form> `},a={...i,render:s=>o`<form style="width: 450px">
      <gds-flex flex-direction="column" gap="m">
        <label for="designation">Designation</label>
        <input
          id="designation"
          type="text"
          aria-invalid="true"
          data-label="Designation"
          data-errormessage="A designation is required"
          required
        />
        <gds-form-summary id="summary"></gds-form-summary>
      </gds-flex>
    </form> `};var n,d,m,l,u;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px" novalidate>
      <gds-card
        display="flex"
        flex-direction="column"
        gap="m"
        variant="secondary"
        border-color="primary"
      >
        <gds-text tag="h2">Launch control</gds-text>
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
        <gds-flex gap="m" justify-content="center" margin="s 0 0 0">
          <gds-button type="reset" rank="tertiary">Reset</gds-button>
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
        </gds-flex>
      </gds-card>
    </form>\`
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nIn this example we're using a reactive form summary below the form controls. The `reactive` attribute makes the summary\nupdate automatically as the user interacts with the form.",...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.description}}};var p,g,c,f,y;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px" novalidate>
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
}`,...(c=(g=e.parameters)==null?void 0:g.docs)==null?void 0:c.source},description:{story:'The `gds-form-summary` component can also be used in a non-reactive way.\nIn this example, the summary is placed above the form controls and\nis updated manually when the user clicks the "Submit" button.',...(y=(f=e.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};var v,b,h,x,k;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px">
      <gds-flex flex-direction="column" gap="m">
        <label for="designation">Designation</label>
        <input
          id="designation"
          type="text"
          aria-invalid="true"
          data-label="Designation"
          data-errormessage="A designation is required"
          required
        />
        <gds-form-summary id="summary"></gds-form-summary>
      </gds-flex>
    </form> \`
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:"`gds-form-summary` can also be used with native controls by specifying label and error message as data attributes on the control.\nAny control that has `aria-invalid` set to `true` will be included in the summary.",...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.description}}};const St=["Usage","ManualUpdate","NativeControls"];export{e as ManualUpdate,a as NativeControls,r as Usage,St as __namedExportsOrder,Et as default};
