import{x as t}from"./iframe-Dju8L9ft.js";import{a}from"./argTableProps-Dt-czP5Y.js";import"./summary-Blsz-WEZ.js";import"./datepicker-D3geE1CS.js";import"./dropdown-DorxUokk.js";import"./option-CjTr43Zr.js";import"./menu-heading-m-yzs257.js";import"./input-DsRE_MMq.js";import"./rocket-D3AfOikP.js";import"./checkbox-group-BoNfz_Nu.js";import"./radio-group-CaUByXmX.js";import"./summary.component-CeLQsOwO.js";import"./query-async-ClIhVm7m.js";import"./datepicker.component-DT80v-Fy.js";import"./localized-decorator-CuXAXstt.js";import"./ref-Ck10RQW2.js";import"./dropdown.component-ChFiXCLy.js";import"./icon.component-CEYc1IuV.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-D0iN_3eZ.js";import"./form-control-header.component-BgzRHBMM.js";import"./badge.component-D7FN6W-K.js";import"./flex.component-Cz6OeJgR.js";import"./triangle-exclamation.component-BforXQul.js";import"./card.component-B4Ap9MbW.js";import"./unwrap-slots-8X-Y51Aw.js";import"./checkmark.component-Ch49CzP8.js";import"./rbcb-toggle.template-DNCDsEP9.js";import"./chevron-bottom.component-BkJHqS3F.js";import"./cross-small.component-BN4njoyB.js";import"./popover.component-y8_ONLDF.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-2uH5ppbB.js";import"./calender-add.component-CTVz1ZGN.js";import"./chevron-left.component-CIjgNoaI.js";import"./chevron-right.component-Dv8qKY2G.js";import"./arrow-up.component-CLRde-0Z.js";import"./menu-heading.component-CRjio7DB.js";import"./input.component-Cwd32n9t.js";import"./textarea.component-ChCGLsT3.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-B2BGbOnT.js";import"./checkbox-group.component-BBRR6Tky.js";import"./toggle-control-base.component-Dk-PVwHj.js";import"./minus-small.component-BwyBbCAN.js";import"./radio-group.component-G4i6R0kl.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
