import{x as t}from"./iframe-C_i6AL_Q.js";import{a}from"./argTableProps-ASXGYJz4.js";import"./summary-DaCPAyOb.js";import"./datepicker-LyHzQtpF.js";import"./dropdown-9hEa-t-N.js";import"./option-7F1ejBa7.js";import"./menu-heading-DpqcOCou.js";import"./input-BnrdyIT5.js";import"./rocket-CHLK4AoA.js";import"./checkbox-group-B6NGCCiV.js";import"./radio-group-DhIEnTG3.js";import"./summary.component-Barqcdmx.js";import"./query-async-CrfPln-v.js";import"./datepicker.component-CbJMJDSh.js";import"./localized-decorator-H-7TKaX0.js";import"./ref-Dw-i-UzM.js";import"./dropdown.component-DZIFw3g7.js";import"./icon.component-Cxua7B4s.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-h9bPqo2H.js";import"./form-control-header.component-BUILzmie.js";import"./badge.component-BRfPul_e.js";import"./flex.component-MfkHdtn5.js";import"./triangle-exclamation.component-Bmf25bT_.js";import"./card.component-adkOUnoK.js";import"./unwrap-slots-BW3-39lB.js";import"./checkmark.component-B977KDkv.js";import"./rbcb-toggle.template-DG2MrcEa.js";import"./chevron-bottom.component-DB5JoJv-.js";import"./cross-small.component-DxGSSh45.js";import"./popover.component-DtrObb_y.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-B8XSLiNi.js";import"./calender-add.component-DMloIFPe.js";import"./chevron-left.component-C715SLNh.js";import"./chevron-right.component-BubL4qH4.js";import"./arrow-up.component-B6IJX2tu.js";import"./menu-heading.component-COC956OW.js";import"./input.component-8aT6Xipa.js";import"./textarea.component-B3TIkxm-.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Bfl7aw_D.js";import"./checkbox-group.component-C12zpiZD.js";import"./toggle-control-base.component-DqtD0wyR.js";import"./minus-small.component-DreqIuwC.js";import"./radio-group.component-bmhBc9Rx.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
