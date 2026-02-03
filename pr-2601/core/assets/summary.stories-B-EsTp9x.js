import{x as t}from"./iframe-DLqKMtk0.js";import{a}from"./argTableProps-C5Se0E7_.js";import"./summary-C4EgscL8.js";import"./datepicker-kGcz3stQ.js";import"./dropdown-Dx6VLDc5.js";import"./option-BQZ9hR0i.js";import"./menu-heading-BS7eMtK7.js";import"./input-BhRbw8se.js";import"./rocket-Cn1iaCMT.js";import"./checkbox-group-DPtfUR42.js";import"./radio-group-CZQzJlFR.js";import"./summary.component-DySJVX_8.js";import"./query-async-BjGxF6G-.js";import"./datepicker.component-fy_0a_hR.js";import"./localized-decorator-DOVk7XSQ.js";import"./ref-BHj6CIZp.js";import"./dropdown.component-tFc76OAZ.js";import"./icon.component-D1vcvTVf.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BmgZTsAy.js";import"./form-control-header.component-DzcDFmXb.js";import"./badge.component-C8f7xlte.js";import"./flex.component-DeoECx29.js";import"./triangle-exclamation.component-clAVJ6gM.js";import"./card.component-HuMgwQrE.js";import"./unwrap-slots-DfQbNeLz.js";import"./checkmark.component-B1QN-spq.js";import"./rbcb-toggle.template-B7GIK3WA.js";import"./chevron-bottom.component-DU4Ub9Oq.js";import"./cross-small.component-Bdgc3Vde.js";import"./popover.component-D2U_gyG4.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BaCl6gt1.js";import"./calender-add.component-DZ-Qgz0Q.js";import"./chevron-left.component-Ijn7j8FA.js";import"./chevron-right.component-Dc2SftcD.js";import"./arrow-up.component-DM-ulDep.js";import"./menu-heading.component-BqEuZMJy.js";import"./input.component-Bub0FMsu.js";import"./textarea.component-CwVMBoT0.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BKYAQ-kt.js";import"./checkbox-group.component-QvUVbEvI.js";import"./toggle-control-base.component-6UjHF4uC.js";import"./minus-small.component-Dv_4h67q.js";import"./radio-group.component-CfI3TDQh.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...a("gds-form-summary")}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},X={...o,render:e=>t`<form style="width: 450px" novalidate>
      <gds-card
        display="flex"
        flex-direction="column"
        gap="m"
        variant="secondary"
        border-color="subtle-01"
        padding="l"
      >
        <gds-text tag="h2" font="heading-l">Launch control</gds-text>
        <gds-checkbox-group
          direction="row"
          label="Mission type"
          .validator=${{validate:r=>{if(r.value.length===0)return[{...r.validity,valid:!1,customError:!0},"At least one mission type is required"]}}}
        >
          <gds-checkbox value="exploration" label="Exploration"></gds-checkbox>
          <gds-checkbox value="research" label="Research"></gds-checkbox>
          <gds-checkbox value="rescue" label="Rescue"></gds-checkbox>
          <gds-checkbox value="other" label="Other"></gds-checkbox>
        </gds-checkbox-group>
        <gds-radio-group
          direction="row"
          label="Rocket type"
          .validator=${{validate:r=>{if(r.value===void 0)return[{...r.validity,valid:!1,customError:!0},"A rocket type is required"]}}}
        >
          <gds-radio value="falcon" label="Falcon"></gds-radio>
          <gds-radio value="starship" label="Starship"></gds-radio>
          <gds-radio value="saturn" label="Saturn"></gds-radio>
          <gds-radio value="other" label="Other"></gds-radio>
        </gds-radio-group>
        <gds-dropdown
          label="Astronaut"
          .validator=${{validate:r=>{if(r.value!=="cat")return[{...r.validity,valid:!1,customError:!0},r.value===void 0?"An astronaut is required":"Only cats can pilot rockets!"]}}}
        >
          <gds-option>Pick your astronaut</gds-option>
          <gds-option value="dog">Dog</gds-option>
          <gds-option value="cat">Cat</gds-option>
          <gds-option value="fish">Fish</gds-option>
        </gds-dropdown>
        <gds-datepicker
          label="Launch date"
          .validator=${{validate:r=>{if(r.value===void 0)return[{...r.validity,valid:!1,customError:!0},"A date is required"]}}}
        ></gds-datepicker>
        <gds-input
          label="Designation"
          .validator=${{validate:r=>{if(r.value==="")return[{...r.validity,valid:!1,customError:!0},"A designation is required"]}}}
        ></gds-input>
        <gds-checkbox-group
          label="Terms and conditions"
          .hideLabel=${!0}
          .validator=${{validate:r=>{if(r.value.length===0)return[{...r.validity,valid:!1,customError:!0},"You must agree to the terms and conditions"]}}}
        >
          <gds-checkbox
            value="terms-and-conditions"
            label="I agree to the terms and conditions"
          ></gds-checkbox>
        </gds-checkbox-group>
        <gds-form-summary reactive></gds-form-summary>
        <gds-flex gap="m" justify-content="center" margin="s 0 0 0">
          <gds-button type="reset" rank="tertiary">Reset</gds-button>
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
        </gds-flex>
      </gds-card>
    </form>`},Z={...o,render:e=>t`<form style="width: 450px" novalidate>
      <gds-form-summary id="summary"></gds-form-summary>
      <gds-flex flex-direction="column" gap="m" align-items="start">
        <gds-input
          label="Designation"
          .validator=${{validate:r=>{if(r.value==="")return[{...r.validity,valid:!1,customError:!0},"A designation is required"]}}}
        ></gds-input>
        <gds-button
          type="submit"
          onclick="document.getElementById('summary').refresh()"
          >Submit</gds-button
        >
      </gds-flex>
    </form> `},rr={...o,render:e=>t`<form style="width: 450px">
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
    </form> `},tr=["Usage","ManualUpdate","NativeControls"];export{Z as ManualUpdate,rr as NativeControls,X as Usage,tr as __namedExportsOrder,W as default};
