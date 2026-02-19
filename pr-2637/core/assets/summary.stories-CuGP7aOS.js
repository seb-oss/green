import{x as t}from"./iframe-C-Uylk6O.js";import{a}from"./argTableProps-BPS6FRW5.js";import"./summary-DmFc0-P4.js";import"./datepicker-B-6OJgF4.js";import"./dropdown-CApVIQxv.js";import"./option-ChWelmF0.js";import"./menu-heading-Cqcr7MDI.js";import"./input-eQR7zFmm.js";import"./rocket-BMv0tWmf.js";import"./checkbox-group-DA8xkkil.js";import"./radio-group-wERJ3I6w.js";import"./summary.component-CLr3xvwy.js";import"./query-async-Du4XRjer.js";import"./datepicker.component-CpgXNrI2.js";import"./localized-decorator-CqCBDPdF.js";import"./ref-BIQS9AQK.js";import"./dropdown.component-BD1T-gp-.js";import"./icon.component-CbLGnDoY.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BQ1Sr1MH.js";import"./form-control-header.component-B0g2oaDS.js";import"./badge.component-D3wslndL.js";import"./flex.component-BmOr5rhE.js";import"./triangle-exclamation.component-BR6GwCcM.js";import"./card.component-C4TCglxs.js";import"./unwrap-slots-DZinduju.js";import"./checkmark.component-OaSRfHki.js";import"./rbcb-toggle.template-BqIJvwDf.js";import"./chevron-bottom.component-DA3b0o47.js";import"./cross-small.component-DK1urPRi.js";import"./popover.component-aWXaC6AB.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-IoB80j30.js";import"./calender-add.component-CxUuVQ-z.js";import"./chevron-left.component-DNyx5qRL.js";import"./chevron-right.component-c90jfk9A.js";import"./arrow-up.component-CWFGvd9u.js";import"./menu-heading.component-BnlqCEzI.js";import"./input.component-AzrVHrpu.js";import"./textarea.component--Xkh_RZ2.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CiikGF2H.js";import"./checkbox-group.component-44WSUFuY.js";import"./toggle-control-base.component-DWGbuX9g.js";import"./minus-small.component-BkxS0a7s.js";import"./radio-group.component-Bl_IgSUY.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
