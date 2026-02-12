import{x as t}from"./iframe-D81rLJ6U.js";import{a}from"./argTableProps-D6vTgEqi.js";import"./summary-DQraxfos.js";import"./datepicker-BK-lIKhU.js";import"./dropdown-D0anGv8p.js";import"./option-uDVkVQ1B.js";import"./menu-heading-PfrYrKn7.js";import"./input-cZgKNdDa.js";import"./rocket-B5QglK5q.js";import"./checkbox-group-CgEZdz9_.js";import"./radio-group-D04eLx2w.js";import"./summary.component-CNNzHVTi.js";import"./query-async-cb3_WM7h.js";import"./datepicker.component-D7VHUvgP.js";import"./localized-decorator-Cm8IE26K.js";import"./ref-Dj7Aile1.js";import"./dropdown.component-CFO-eYQR.js";import"./icon.component-DTpz19Q-.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-By9lxb75.js";import"./form-control-header.component-Cmft-EZt.js";import"./badge.component-Dt6rerHJ.js";import"./flex.component-BR9MmH-R.js";import"./triangle-exclamation.component-DMZw8QUd.js";import"./card.component-BUCoIXfd.js";import"./unwrap-slots-QTO2xSow.js";import"./checkmark.component-CwNeZKJH.js";import"./rbcb-toggle.template-Cp8aMKgQ.js";import"./chevron-bottom.component-bO-Ior0Z.js";import"./cross-small.component-Sa-v6soQ.js";import"./popover.component-CQwKH93c.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component--sSPtEbw.js";import"./calender-add.component--b7aYJBh.js";import"./chevron-left.component-NVY2Ef3G.js";import"./chevron-right.component-Fi3Rfnga.js";import"./arrow-up.component-CN-YoNCA.js";import"./menu-heading.component-BFwNGK9D.js";import"./input.component-n-N_6_kb.js";import"./textarea.component-DeIs2S7H.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-B4KL0cwT.js";import"./checkbox-group.component-C14csU5_.js";import"./toggle-control-base.component-DzRy3ErF.js";import"./minus-small.component-cTkj9RDQ.js";import"./radio-group.component-0COyBf3y.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
