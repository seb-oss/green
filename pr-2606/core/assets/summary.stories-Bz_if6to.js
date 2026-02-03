import{x as t}from"./iframe-DSf9_LvW.js";import{a}from"./argTableProps-CvLgaC2h.js";import"./summary-CHntgdgB.js";import"./datepicker-D6cWN-_z.js";import"./dropdown-HJ8LImVb.js";import"./option-DpBBSYa9.js";import"./menu-heading-CcL5OwYl.js";import"./input-CXD1pCLG.js";import"./rocket-Co8cSJQa.js";import"./checkbox-group-BjotuXgr.js";import"./radio-group-D0fKmlDu.js";import"./summary.component-y8XlLxG3.js";import"./query-async-CGjM2uOB.js";import"./datepicker.component-Cxr788PV.js";import"./localized-decorator-BO2Z1bIQ.js";import"./ref-BRQSEM6S.js";import"./dropdown.component-C4RSq8sc.js";import"./icon.component-C4RQA5n_.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-IV1ubbQo.js";import"./form-control-header.component-emtmnr5j.js";import"./badge.component-DGQwnDw4.js";import"./flex.component-Du3E9zfb.js";import"./triangle-exclamation.component-DFBDhAzi.js";import"./card.component-CItJSOYu.js";import"./unwrap-slots-DbHxlebI.js";import"./checkmark.component-Cn4iuj3-.js";import"./rbcb-toggle.template-BLqIwDi1.js";import"./chevron-bottom.component-DLVHmMKX.js";import"./cross-small.component-DlYNlu4M.js";import"./popover.component-BXksBs2q.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-G40l1f85.js";import"./calender-add.component-BBfaIDoS.js";import"./chevron-left.component-BjLSvk3R.js";import"./chevron-right.component-BtgLYxrI.js";import"./arrow-up.component-CvVHgNXR.js";import"./menu-heading.component-CRZj_q6b.js";import"./input.component-mnGCgvy4.js";import"./textarea.component-C7bJQwiZ.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DCFfk1mO.js";import"./checkbox-group.component-D-xCnWmy.js";import"./toggle-control-base.component-uelIJP9b.js";import"./minus-small.component-DoY60lcO.js";import"./radio-group.component-BSwTOWaz.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
