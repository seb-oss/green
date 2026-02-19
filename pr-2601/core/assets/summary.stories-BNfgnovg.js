import{x as t}from"./iframe-A1dnVg9O.js";import{a}from"./argTableProps-uW7596B4.js";import"./summary-BKkF9C9S.js";import"./datepicker-mCd53Dhh.js";import"./dropdown-xjKmliI1.js";import"./option-C0RCSSKG.js";import"./menu-heading-BNTC4M2E.js";import"./input-ChJAKAJz.js";import"./rocket-BJ6biqrY.js";import"./checkbox-group-D_pWl3j2.js";import"./radio-group-Bstlm6LY.js";import"./summary.component-Cw0JhahW.js";import"./query-async-CFccVqnM.js";import"./datepicker.component-BDb6OPwC.js";import"./localized-decorator-C8qrxAb-.js";import"./ref-BbMEauSw.js";import"./dropdown.component-BjIJ42_-.js";import"./icon.component-BJ9VgAdq.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Dyuh1NaG.js";import"./form-control-header.component-onFNRgIz.js";import"./badge.component-DSy-Erxs.js";import"./flex.component-403VBaxF.js";import"./triangle-exclamation.component-BoAI3pT_.js";import"./card.component-BD2dovE9.js";import"./unwrap-slots-DMPa6rA7.js";import"./checkmark.component-B-Oo6qH8.js";import"./rbcb-toggle.template-ntwhq3Mj.js";import"./chevron-bottom.component-DIy-9kSJ.js";import"./cross-small.component-BfZl0nDu.js";import"./popover.component-Dv2CFL60.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DdPOwHMj.js";import"./calender-add.component-D33tVyME.js";import"./chevron-left.component-BODg_YG0.js";import"./chevron-right.component-CbC5hrsh.js";import"./arrow-up.component-CDIJeL56.js";import"./menu-heading.component-DE99X6QW.js";import"./input.component-Cu6gIaEW.js";import"./textarea.component-CStUMs4M.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CyGMlHBH.js";import"./checkbox-group.component-Bb9P_51u.js";import"./toggle-control-base.component-CugISvHU.js";import"./minus-small.component-DkRaGi-V.js";import"./radio-group.component-DiCXohG6.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
