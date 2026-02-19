import{x as t}from"./iframe-B2R2niah.js";import{a}from"./argTableProps-DuPywhpa.js";import"./summary-UHInBZy0.js";import"./datepicker-hiUHmtxz.js";import"./dropdown-BoCP5Grl.js";import"./option-Bxz1zl7t.js";import"./menu-heading-D81W5KvX.js";import"./input-CqDFol7L.js";import"./rocket-CTQpnkTg.js";import"./checkbox-group-BUQYieMV.js";import"./radio-group-PmSCRrUN.js";import"./summary.component-BoMsrVUM.js";import"./query-async-BWtj5nCM.js";import"./datepicker.component-X7MVCSV8.js";import"./localized-decorator-BD8WDM4_.js";import"./ref-BGaKsjlq.js";import"./dropdown.component-Cm4MRWsX.js";import"./icon.component-D_rcXQJU.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Bb1cLM71.js";import"./form-control-header.component-BygZ2754.js";import"./badge.component-CIH4P-gV.js";import"./flex.component-B1UtaQMG.js";import"./triangle-exclamation.component-WpCN3o0_.js";import"./card.component-BUD21ONz.js";import"./unwrap-slots-CJaj4ImV.js";import"./checkmark.component-Db_3WUGs.js";import"./rbcb-toggle.template-D585XvOD.js";import"./chevron-bottom.component-BYY1jGiz.js";import"./cross-small.component-CbmukxUq.js";import"./popover.component-SilQDNdY.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-gLyQbXZd.js";import"./calender-add.component-C4STjAsK.js";import"./chevron-left.component-CJmla4cd.js";import"./chevron-right.component-BH9vOlqo.js";import"./arrow-up.component-LIxBZ3oX.js";import"./menu-heading.component-BeokrJA8.js";import"./input.component-OQS_QjNM.js";import"./textarea.component-qlOsSPFD.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-C5ZGB23z.js";import"./checkbox-group.component-Be5tTsXV.js";import"./toggle-control-base.component-C3H1hcwu.js";import"./minus-small.component-ATX7h0xL.js";import"./radio-group.component-BYg7-KrA.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
