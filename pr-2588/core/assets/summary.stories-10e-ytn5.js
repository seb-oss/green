import{x as t}from"./iframe-CJRfEGsj.js";import{a}from"./argTableProps-D9-n2ZLu.js";import"./summary-Cfxcqz5Z.js";import"./datepicker-lrcf0_1u.js";import"./dropdown-D6uBRlLf.js";import"./option-BNtbycUF.js";import"./menu-heading-DZC2j9Wj.js";import"./input-Djtpl7ql.js";import"./rocket-DhnUZ-Ro.js";import"./checkbox-group-M39HrCXw.js";import"./radio-group-C1MI1KOi.js";import"./summary.component-C5zplBi4.js";import"./query-async-B6g4zKNk.js";import"./datepicker.component-9qbZ_hDA.js";import"./localized-decorator-bnc5vlTW.js";import"./ref-k4IaeWXf.js";import"./dropdown.component-DSYrJ4M4.js";import"./icon.component-HGYExgJl.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BsB4Rlcf.js";import"./form-control-header.component-Bifo4n9C.js";import"./badge.component-DN8Q1GqG.js";import"./flex.component-g7nEBmBL.js";import"./triangle-exclamation.component-BWzSUwsd.js";import"./card.component-CU8R5XfF.js";import"./unwrap-slots-DQrdBXFp.js";import"./checkmark.component-CmN0yaht.js";import"./rbcb-toggle.template-MVFq5vSP.js";import"./chevron-bottom.component-NN6S77vU.js";import"./cross-small.component-CrK2q8zh.js";import"./popover.component-lqDLou-6.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Ccq7Axvq.js";import"./calender-add.component-30qB04mc.js";import"./chevron-left.component-DIPr5DzC.js";import"./chevron-right.component-CcCREbix.js";import"./arrow-up.component-Dpsxus64.js";import"./menu-heading.component-By55qa_n.js";import"./input.component-DicsBkDG.js";import"./textarea.component-VPBcEGuY.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CuhPj2Mo.js";import"./checkbox-group.component-BOZIwsZ1.js";import"./toggle-control-base.component-7Oi1EWHE.js";import"./minus-small.component-Dc_13eel.js";import"./radio-group.component-BGO2L8bX.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
