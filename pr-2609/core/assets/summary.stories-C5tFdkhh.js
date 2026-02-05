import{x as t}from"./iframe-CxPMWD1t.js";import{a}from"./argTableProps-DAAGqmsd.js";import"./summary-B7B4ghVu.js";import"./datepicker-DAnVSW0H.js";import"./dropdown-CZCesLuN.js";import"./option-CWaOvBTx.js";import"./menu-heading-CXuEcloQ.js";import"./input-DQdlRdC4.js";import"./rocket-Dc2UzrqN.js";import"./checkbox-group-CaFZpMmD.js";import"./radio-group-DOJdOeCS.js";import"./summary.component-BekU89oc.js";import"./query-async-BWFCH2u8.js";import"./datepicker.component-BmT59Hir.js";import"./localized-decorator-eN8oFF7e.js";import"./ref-DMF3Hzx-.js";import"./dropdown.component-CYKeS0ze.js";import"./icon.component-Bb4T45-R.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-C3opQxod.js";import"./form-control-header.component-BffOoUXc.js";import"./badge.component-BtQTJP0x.js";import"./flex.component-DjYesgfy.js";import"./triangle-exclamation.component-Bap_bn68.js";import"./card.component-BPIgfRAY.js";import"./unwrap-slots-Hm_UWKF3.js";import"./checkmark.component-BlZgJowN.js";import"./rbcb-toggle.template-3himz5jV.js";import"./chevron-bottom.component-C_kNKFjY.js";import"./cross-small.component-C6Ou90KH.js";import"./popover.component-YnSOsLck.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-ByXPcr1a.js";import"./calender-add.component-QvB0Kp7-.js";import"./chevron-left.component-DJDrxsjx.js";import"./chevron-right.component-gMQJYEsY.js";import"./arrow-up.component-CrymvNdX.js";import"./menu-heading.component-Cjk7DeLv.js";import"./input.component-CQf9DDh7.js";import"./textarea.component-BCy1xVLx.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DCMK3_BP.js";import"./checkbox-group.component-DPsadWjM.js";import"./toggle-control-base.component-GVJ_4aoU.js";import"./minus-small.component-DMoxAHub.js";import"./radio-group.component-CwHjtRSp.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
