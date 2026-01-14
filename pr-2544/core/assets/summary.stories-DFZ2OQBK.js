import{x as t}from"./iframe-ZOlFYfLy.js";import{a}from"./argTableProps-Xr2WtL-R.js";import"./summary-DS-L-JNg.js";import"./datepicker-B3GYngos.js";import"./dropdown-VCU6xlAr.js";import"./option-eNOYHCXP.js";import"./menu-heading-N01yQOts.js";import"./input-Cu4BATuv.js";import"./rocket-Bhop14yf.js";import"./checkbox-group-BFp3V57G.js";import"./radio-group-2HbDcO4p.js";import"./summary.component-Beyl0DaP.js";import"./query-async-nMG0gEyS.js";import"./datepicker.component-CUtvDjKL.js";import"./localized-decorator-Dp7ZB-qa.js";import"./ref-ByV2Xpjd.js";import"./dropdown.component-D-DsMH-9.js";import"./icon.component-CZj7Ui7t.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-vD866N63.js";import"./form-control-header.component-Csu1JtTO.js";import"./badge.component-DGoL3ouW.js";import"./flex.component-N13VCGcr.js";import"./triangle-exclamation.component-BJjnBBjP.js";import"./card.component-C62jPbK8.js";import"./unwrap-slots-D-bT6lUx.js";import"./checkmark.component-D4CzBJi3.js";import"./rbcb-toggle.template-qamksaq_.js";import"./chevron-bottom.component-B93Nz1nv.js";import"./cross-small.component-C4sXXw9y.js";import"./popover.component-BPSct5Hk.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Dy0rnjn4.js";import"./calender-add.component-pbKcywr5.js";import"./chevron-left.component-sgCwSSJl.js";import"./chevron-right.component-dfhWVdOt.js";import"./arrow-up.component-CfCCFcVF.js";import"./menu-heading.component-7OW7bVmq.js";import"./input.component-CVd1PCyH.js";import"./textarea.component-CPLledrs.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CUFUobEf.js";import"./checkbox-group.component-49mOBcim.js";import"./toggle-control-base.component-Cq5JI1xt.js";import"./minus-small.component-Bj6oh22V.js";import"./radio-group.component-D42qZYdp.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...a("gds-form-summary")}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},Y={...o,render:e=>t`<form style="width: 450px" novalidate>
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
    </form> `},tr=["Usage","ManualUpdate","NativeControls"];export{Z as ManualUpdate,rr as NativeControls,Y as Usage,tr as __namedExportsOrder,X as default};
