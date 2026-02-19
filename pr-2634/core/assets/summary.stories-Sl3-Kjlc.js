import{x as t}from"./iframe-CKOey5cL.js";import{a}from"./argTableProps-Dr6zKbEE.js";import"./summary-DTeW0Gq7.js";import"./datepicker-CwAvt7SA.js";import"./dropdown-CT8Ukt3R.js";import"./option-CqDo5X1e.js";import"./menu-heading-DbFpRrrd.js";import"./input-CF0Me2xy.js";import"./rocket-CReZTrKm.js";import"./checkbox-group-BNfbC5_J.js";import"./radio-group-tGA6ix0z.js";import"./summary.component-GtP6lhyi.js";import"./query-async-G7DQdDrp.js";import"./datepicker.component-Bm3Gp2ce.js";import"./localized-decorator-EzyKryh1.js";import"./ref-C7SeSl0N.js";import"./dropdown.component-F1tzG1G8.js";import"./icon.component-mybfkHUV.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CZVsx5A8.js";import"./form-control-header.component-D76dGb8Q.js";import"./badge.component-BdEnP5-t.js";import"./flex.component-SIwlxQ8w.js";import"./triangle-exclamation.component-dIqp1lE_.js";import"./card.component-B4pI5jko.js";import"./unwrap-slots-BbZRhXZk.js";import"./checkmark.component-D7N8S5S7.js";import"./rbcb-toggle.template-CLOwFSHF.js";import"./chevron-bottom.component-DS_kTQcS.js";import"./cross-small.component-T8zeMgWc.js";import"./popover.component-BgZdjnK6.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Ba4Q40Rb.js";import"./calender-add.component-BaXRyhzJ.js";import"./chevron-left.component-DMwTy1i9.js";import"./chevron-right.component-w7cT2Usq.js";import"./arrow-up.component-C6GgUTU3.js";import"./menu-heading.component-DmC4Hrn0.js";import"./input.component-D3CVrPqQ.js";import"./textarea.component-CpbwYr6t.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BdgJysqD.js";import"./checkbox-group.component-CjNg7T24.js";import"./toggle-control-base.component-BJ76ER1i.js";import"./minus-small.component-D9uKeohr.js";import"./radio-group.component-Bq1yxqLQ.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
