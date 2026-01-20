import{x as t}from"./iframe-CmrrH2XL.js";import{a}from"./argTableProps-B_GSohNW.js";import"./summary-CavC7gc8.js";import"./datepicker-BaHwf-S-.js";import"./dropdown-SjGsesen.js";import"./option-DxHcOcWP.js";import"./menu-heading-CzYLOWDR.js";import"./input-DUxA2P6R.js";import"./rocket-DHByItoa.js";import"./checkbox-group-D-TWN5Gd.js";import"./radio-group-DtBCWCTJ.js";import"./summary.component-Cj8aD_A7.js";import"./query-async-BzhBZjCp.js";import"./datepicker.component-CE2YxyiT.js";import"./localized-decorator-TsOf8-hd.js";import"./ref-D8-0i1re.js";import"./dropdown.component-CSGy11kc.js";import"./icon.component-sO0eXaYd.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CTb07bTa.js";import"./form-control-header.component-CyYnA_N3.js";import"./badge.component-5rJ2HRcy.js";import"./flex.component-D7AFLKmM.js";import"./triangle-exclamation.component-BH7ZBI33.js";import"./card.component-skVbPrMS.js";import"./unwrap-slots-bwvwNLI9.js";import"./checkmark.component-CX2atU5p.js";import"./rbcb-toggle.template-DeF0FZDI.js";import"./chevron-bottom.component-BqVd0s4E.js";import"./cross-small.component-DqKFYKsw.js";import"./popover.component-BKAuFpFh.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CQrjbbbz.js";import"./calender-add.component-BPlNZIkY.js";import"./chevron-left.component-Fa3L5-77.js";import"./chevron-right.component-2GWzepi2.js";import"./arrow-up.component-DK49AULt.js";import"./menu-heading.component-Dubqhr7G.js";import"./input.component-DLo7rc_C.js";import"./textarea.component-B0rkGad0.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Dw_YPocd.js";import"./checkbox-group.component--tAYkxRr.js";import"./toggle-control-base.component-2FyxvFij.js";import"./minus-small.component-DzM3S6ay.js";import"./radio-group.component-BEh3P8tD.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
