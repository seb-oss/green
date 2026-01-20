import{x as t}from"./iframe-CdkNm90d.js";import{a}from"./argTableProps-BcVyA3w1.js";import"./summary-wUNdKF7t.js";import"./datepicker-Yumi9K0E.js";import"./dropdown-DYwjkcAE.js";import"./option-D6ZjTWxR.js";import"./menu-heading-CDsmmizW.js";import"./input-BrNyjRDX.js";import"./rocket-42H5kLJz.js";import"./checkbox-group-B8SC5BTq.js";import"./radio-group-Bkl11Mwm.js";import"./summary.component-D1TJdFIX.js";import"./query-async-BzEtScRC.js";import"./datepicker.component-Dd8SgNw-.js";import"./localized-decorator-ManM-QDy.js";import"./ref-BWoTEewu.js";import"./dropdown.component-CI5ZZbA9.js";import"./icon.component-CSACcb-9.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-C31hnt3t.js";import"./form-control-header.component-BO-JWNyf.js";import"./badge.component-BORcxns_.js";import"./flex.component-CR4a_v6h.js";import"./triangle-exclamation.component-CzO9M-TC.js";import"./card.component-BzQ8QK_Z.js";import"./unwrap-slots-P7U3d2VX.js";import"./checkmark.component-2KXnux_7.js";import"./rbcb-toggle.template-B8KzoDP3.js";import"./chevron-bottom.component-CuhqLLWj.js";import"./cross-small.component-C7uVfe56.js";import"./popover.component-B6k9T_hf.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DAAA81-g.js";import"./calender-add.component-h6cBvM1M.js";import"./chevron-left.component-DdwDoti8.js";import"./chevron-right.component-acYSFc-g.js";import"./arrow-up.component-pZ8LAUXy.js";import"./menu-heading.component-8vLXKI1A.js";import"./input.component-8VUu-Wws.js";import"./textarea.component-CHtHCEAF.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CTzrc5ZE.js";import"./checkbox-group.component-DXNwOnTI.js";import"./toggle-control-base.component-DSZE_Boi.js";import"./minus-small.component-CrAG2vUF.js";import"./radio-group.component-CBfpu7FB.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
