import{x as t}from"./iframe-DRKs3nTV.js";import{a}from"./argTableProps-B7LTRWY5.js";import"./summary-BI_lnOIK.js";import"./datepicker-Dej5SiQQ.js";import"./dropdown-DalKaF3a.js";import"./option-BsREv3-N.js";import"./menu-heading-z9nrbkax.js";import"./input-Dr-uIJLi.js";import"./rocket-Td_nUAGb.js";import"./checkbox-group-CvJ7d-aN.js";import"./radio-group-DInchb21.js";import"./summary.component-BqJ-bFqi.js";import"./query-async-B7FAYRT9.js";import"./datepicker.component-DA13fotZ.js";import"./localized-decorator-QZA6ESDO.js";import"./ref-wYy7G4F6.js";import"./dropdown.component-sCCLMse0.js";import"./icon.component-B9rMDmtx.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-TItwIFXt.js";import"./form-control-header.component-CFajlstY.js";import"./badge.component-DX0xuMHN.js";import"./flex.component-DrK28tAb.js";import"./triangle-exclamation.component-CwX54xz4.js";import"./card.component-DIPr--u9.js";import"./unwrap-slots-LlZE5dxY.js";import"./checkmark.component-BjvJATWg.js";import"./rbcb-toggle.template-DJstmj-O.js";import"./chevron-bottom.component-Bgdj5dah.js";import"./cross-small.component-Dl3GskPt.js";import"./popover.component-L4afsyd-.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DdHwy29_.js";import"./calender-add.component-vTaem12T.js";import"./chevron-left.component-B2KEf-eV.js";import"./chevron-right.component-CscZwZOo.js";import"./arrow-up.component-BrZU8qyJ.js";import"./menu-heading.component-JyYr8pt3.js";import"./input.component-DBMOrQfP.js";import"./textarea.component-BzMrNkcm.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DW8ZFxnc.js";import"./checkbox-group.component-BRkvCFRJ.js";import"./toggle-control-base.component-BH-i20T9.js";import"./minus-small.component-DgIxd-ho.js";import"./radio-group.component-yIOAeduT.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
