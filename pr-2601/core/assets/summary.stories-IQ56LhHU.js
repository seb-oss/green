import{x as t}from"./iframe-CA8kBw1Y.js";import{a}from"./argTableProps-D5MCDgFe.js";import"./summary-QD1XKosw.js";import"./datepicker-CcIu2UR4.js";import"./dropdown-D0f9UAO6.js";import"./option-C0H5O_cz.js";import"./menu-heading-Bt6Ad_5w.js";import"./input-Zpx3ShIE.js";import"./rocket-G9MiE9kY.js";import"./checkbox-group-DTn_fO2i.js";import"./radio-group-C6tUEzVd.js";import"./summary.component-m-dQM6kU.js";import"./query-async-BsktVRD7.js";import"./datepicker.component-ivoAFqdT.js";import"./localized-decorator-ByhwzS7Z.js";import"./ref-DQTYaZkf.js";import"./dropdown.component-9ZT-vmhk.js";import"./icon.component-Cm1_nEuM.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BCpTHyDJ.js";import"./form-control-header.component-CtfX6jHX.js";import"./badge.component-2fhVjfq2.js";import"./flex.component-CDbs7xdf.js";import"./triangle-exclamation.component-laVhXIjP.js";import"./card.component-DcGWAmkC.js";import"./unwrap-slots-C4HrBVu9.js";import"./checkmark.component-DBhwB9DT.js";import"./rbcb-toggle.template-Cp4uLKA1.js";import"./chevron-bottom.component-Bmiq2pKD.js";import"./cross-small.component-CQOcMzBo.js";import"./popover.component-CuRB3-fz.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BHaRviOo.js";import"./calender-add.component-DtSV8olc.js";import"./chevron-left.component-CkbWPork.js";import"./chevron-right.component-BUSYW4IF.js";import"./arrow-up.component-ANf1EV9M.js";import"./menu-heading.component-DdntOQss.js";import"./input.component-D0PV0Va2.js";import"./textarea.component-CVz_croa.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-B1Hl_ZYl.js";import"./checkbox-group.component-kXcPZgmK.js";import"./toggle-control-base.component-CXDnoyxq.js";import"./minus-small.component-Dbg807im.js";import"./radio-group.component-DYR6B-nA.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
