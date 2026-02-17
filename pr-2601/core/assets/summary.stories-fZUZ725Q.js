import{x as t}from"./iframe-C4uuVPzH.js";import{a}from"./argTableProps-BM-EQa4W.js";import"./summary-BOPOV0lv.js";import"./datepicker-S9ddaa2P.js";import"./dropdown-FJ94m5j8.js";import"./option-B5BKt_UQ.js";import"./menu-heading-DXMraoHx.js";import"./input-BT-El32M.js";import"./rocket-sbf7PeoT.js";import"./checkbox-group-CugFjXLw.js";import"./radio-group-vu5jBKMV.js";import"./summary.component-BgDJwuGy.js";import"./query-async-BQEYl374.js";import"./datepicker.component-CApFCkaG.js";import"./localized-decorator-Bep-fVVs.js";import"./ref-DgrieuU5.js";import"./dropdown.component-CYoYOd7G.js";import"./icon.component-BOdqx_Z5.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CHCwye6B.js";import"./form-control-header.component-0UHnrO6_.js";import"./badge.component-ov4ZrA5C.js";import"./flex.component-CnOoPqjX.js";import"./triangle-exclamation.component-CKLqpedP.js";import"./card.component-BQsfVdbK.js";import"./unwrap-slots-DkhAejeW.js";import"./checkmark.component-DFDKDFwb.js";import"./rbcb-toggle.template-DCplSnOw.js";import"./chevron-bottom.component-Dc-iXEby.js";import"./cross-small.component-DaQtDsz0.js";import"./popover.component-CG62K97A.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-C1x4Dkcr.js";import"./calender-add.component-C__HaTBj.js";import"./chevron-left.component-NtzhVRlw.js";import"./chevron-right.component-BeGySsxM.js";import"./arrow-up.component-gZpCRmXW.js";import"./menu-heading.component-DGgDaVw9.js";import"./input.component-CfBaiQKt.js";import"./textarea.component-DTAnE3no.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DvkDO0vZ.js";import"./checkbox-group.component-C-aUImSh.js";import"./toggle-control-base.component-IH6lrBsZ.js";import"./minus-small.component-C7dhm2ai.js";import"./radio-group.component-DB5E5BcN.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
