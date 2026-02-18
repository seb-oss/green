import{x as t}from"./iframe-D3LkGrTu.js";import{a}from"./argTableProps-B3G29lOC.js";import"./summary-CXKrCJYo.js";import"./datepicker-BS1NNxop.js";import"./dropdown-BCeLnA_S.js";import"./option-C50ypayx.js";import"./menu-heading-BxsyiS7y.js";import"./input-DWTNNd4z.js";import"./rocket-A814QbRO.js";import"./checkbox-group-BEmyu4lE.js";import"./radio-group-CmQCj89z.js";import"./summary.component-CaolzzmR.js";import"./query-async-Df9s8pij.js";import"./datepicker.component-BEpxZARc.js";import"./localized-decorator-B9Zts4yp.js";import"./ref-CXSVQ8-J.js";import"./dropdown.component-KH2PCnww.js";import"./icon.component-BGKmC-sG.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-UnwN4dPP.js";import"./form-control-header.component-DaaGaivf.js";import"./badge.component-D3GS4mu2.js";import"./flex.component-BNcfiOGN.js";import"./triangle-exclamation.component-U58N0vV1.js";import"./card.component-68vw3gHC.js";import"./unwrap-slots-D-BS7JUx.js";import"./checkmark.component-BsVz1wIr.js";import"./rbcb-toggle.template-DN40HB6B.js";import"./chevron-bottom.component-DALJJjN2.js";import"./cross-small.component-Bh33xCXa.js";import"./popover.component-BbycZSjJ.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-D4XXq4DI.js";import"./calender-add.component-BCPzioXr.js";import"./chevron-left.component-BczYewcU.js";import"./chevron-right.component-CkNcf4xk.js";import"./arrow-up.component-xbBiJUcZ.js";import"./menu-heading.component-BlvvPB0a.js";import"./input.component-DLAG5IRo.js";import"./textarea.component-lj1-VFyS.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-B4YevKvB.js";import"./checkbox-group.component-B3wNlskx.js";import"./toggle-control-base.component-CMkfM4Nz.js";import"./minus-small.component-D8UCP7Mc.js";import"./radio-group.component-fHTsXgd1.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
