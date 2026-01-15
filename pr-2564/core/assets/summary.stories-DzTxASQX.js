import{x as t}from"./iframe-B2ZAK5ky.js";import{a}from"./argTableProps-wkae4PTT.js";import"./summary-CH_hM8de.js";import"./datepicker-CzHR4Lfi.js";import"./dropdown-d-kS06sO.js";import"./option-C90Ih04t.js";import"./menu-heading-BGuejAec.js";import"./input-BaCKmjRX.js";import"./rocket-C-H_VpTa.js";import"./checkbox-group-DcwVzQpe.js";import"./radio-group-cHagfkIf.js";import"./summary.component-iABd4WL1.js";import"./query-async-0ijGk4-W.js";import"./datepicker.component-D06VTxNn.js";import"./localized-decorator-CNiVa-Zr.js";import"./ref-Uu8HQ8ao.js";import"./dropdown.component-yWGNXUeO.js";import"./icon.component-CkR84q4C.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DbIFuxeM.js";import"./form-control-header.component-DqnWrc8U.js";import"./badge.component-D_6jyJLl.js";import"./flex.component-CU0xqsGF.js";import"./triangle-exclamation.component-B0YayEFX.js";import"./card.component-Dz94111C.js";import"./unwrap-slots-Ds3J0naJ.js";import"./checkmark.component-Bj_mXKCR.js";import"./rbcb-toggle.template-BMTPnazz.js";import"./chevron-bottom.component-D4tiHFpo.js";import"./cross-small.component-uPD9hBCo.js";import"./popover.component-BfSSblA7.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-B8wpZAaN.js";import"./calender-add.component-BYxwrtlS.js";import"./chevron-left.component-Byhootph.js";import"./chevron-right.component-DXepuVIQ.js";import"./arrow-up.component-D0XHCL1-.js";import"./menu-heading.component-D2XEFdYa.js";import"./input.component-DUlVbzrY.js";import"./textarea.component-aGrkBZrw.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Cq8nAYAQ.js";import"./checkbox-group.component-DyurT_kd.js";import"./toggle-control-base.component-BuWDh4H4.js";import"./minus-small.component-4brkgh7j.js";import"./radio-group.component-BXjMJrYQ.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
