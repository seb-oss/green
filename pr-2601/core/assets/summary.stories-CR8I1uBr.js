import{x as t}from"./iframe-Dyp66QAI.js";import{a}from"./argTableProps-Chvf3EUj.js";import"./summary-B_yU_hhi.js";import"./datepicker-Bs8z56k7.js";import"./dropdown-C4zbgC2g.js";import"./option--BxowJqM.js";import"./menu-heading-CcSu9Am5.js";import"./input-BbCz3ZuA.js";import"./rocket-kaWkdwGz.js";import"./checkbox-group-C_f12Y13.js";import"./radio-group-CwfLCbMD.js";import"./summary.component-S08AR1Y1.js";import"./query-async-BAKE91eB.js";import"./datepicker.component-DLx2cU1q.js";import"./localized-decorator-CMm4RR_6.js";import"./ref-CbaFRCRZ.js";import"./dropdown.component-qfGheMU_.js";import"./icon.component-DraLhdkX.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-2jsFriqf.js";import"./form-control-header.component-DwpOg073.js";import"./badge.component-CYPeLYDJ.js";import"./flex.component-rHWEU2RC.js";import"./triangle-exclamation.component-ntLFccpd.js";import"./card.component-DU9QvY6-.js";import"./unwrap-slots-awI2S8Wz.js";import"./checkmark.component-DMi7fnHU.js";import"./rbcb-toggle.template-CIvRENxv.js";import"./chevron-bottom.component-CRW3c-Lz.js";import"./cross-small.component-Chgvmx6e.js";import"./popover.component-B83dDhMU.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Dc43hczP.js";import"./calender-add.component-B64a40sK.js";import"./chevron-left.component--9R0zLdo.js";import"./chevron-right.component-Tw_XLS2H.js";import"./arrow-up.component-D35ykhE3.js";import"./menu-heading.component-cmFLIu57.js";import"./input.component-DqU2m-T1.js";import"./textarea.component-Ra1cLjov.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-B6ToG6Fh.js";import"./checkbox-group.component-DFe3AEIR.js";import"./toggle-control-base.component-BTRcSCuG.js";import"./minus-small.component-F7nXfO7I.js";import"./radio-group.component-CxZFZLJl.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
