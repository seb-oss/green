import{x as t}from"./iframe-OlsBgo_r.js";import{a}from"./argTableProps-gvuQkRNa.js";import"./summary-D2CXBOeS.js";import"./datepicker-AG4EwwCC.js";import"./dropdown-SThHeE-z.js";import"./option-Bhv2Jg47.js";import"./menu-heading-CUFhy77H.js";import"./input-CAcKkU-Y.js";import"./rocket-Bd6gdPy-.js";import"./checkbox-group-DE1jS66p.js";import"./radio-group-DWUrq5Ii.js";import"./summary.component-DvEUYlD5.js";import"./query-async-sMJztgIg.js";import"./datepicker.component-3lASsCrW.js";import"./localized-decorator-C6p1g9cH.js";import"./ref-DvYhXRe2.js";import"./calendar.component-DofbFdvV.js";import"./dropdown.component-qSvMQCIf.js";import"./icon.component-DeTz_6Cg.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DWksh68R.js";import"./form-control-header.component-BMpy16-Q.js";import"./badge.component-C9ENFnkv.js";import"./flex.component-Dh4lRNXB.js";import"./triangle-exclamation.component-B5JkVR_x.js";import"./card.component-B6VtkSNZ.js";import"./unwrap-slots-CMWqG-V8.js";import"./checkmark.component-DcompkXR.js";import"./rbcb-toggle.template-DholKlBY.js";import"./chevron-bottom.component-CUD5kGRa.js";import"./cross-small.component-BXwdOc5M.js";import"./popover.component-DKa76RI0.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-_Lqpo4fV.js";import"./chevron-left.component-6bwp7gNf.js";import"./chevron-right.component-CU_HSeEw.js";import"./arrow-up.component-gkAsbsVS.js";import"./menu-heading.component-CKrl2Juk.js";import"./input.component-DZ9xe-kf.js";import"./textarea.component-DmgsLTsZ.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-2GtUVMm5.js";import"./checkbox-group.component-F-ElTe56.js";import"./toggle-control-base.component-fTaLc6m0.js";import"./minus-small.component-QdbLkzvU.js";import"./radio-group.component-DQLztFGB.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
