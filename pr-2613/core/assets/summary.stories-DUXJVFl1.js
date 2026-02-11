import{x as t}from"./iframe-CQq7046-.js";import{a}from"./argTableProps-D4V1ERLU.js";import"./summary-C5xepLxu.js";import"./datepicker-CEfmPtER.js";import"./dropdown-BcwAiyXq.js";import"./option-C3BN8HXq.js";import"./menu-heading-BPx3sYf4.js";import"./input-OgldKsmF.js";import"./rocket-B4czEqfx.js";import"./checkbox-group-D2fVN4nd.js";import"./radio-group-lergD_V7.js";import"./summary.component-BDXjp0aj.js";import"./query-async-CcorEOtD.js";import"./datepicker.component-B-jY8eWr.js";import"./localized-decorator-CbvQAhQB.js";import"./ref-CjOSATE7.js";import"./dropdown.component-iK0P77OZ.js";import"./icon.component-DyWYKULO.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-mE3f1gJn.js";import"./form-control-header.component-C_gB3-2W.js";import"./badge.component-D_3kNL1E.js";import"./flex.component-CxtwwoO6.js";import"./triangle-exclamation.component-D3KzfzTi.js";import"./card.component-Cx6vq4fa.js";import"./unwrap-slots-CYlrFtb7.js";import"./checkmark.component-DSXUKqrT.js";import"./rbcb-toggle.template-BOcAtw3m.js";import"./chevron-bottom.component-CYASL9OQ.js";import"./cross-small.component-Bwr3kRkD.js";import"./popover.component-DIiUus2u.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-W-WJhtY8.js";import"./calender-add.component-ClQ8klPv.js";import"./chevron-left.component-CIgcDde6.js";import"./chevron-right.component-DrJ95scj.js";import"./arrow-up.component-ooxXBIkI.js";import"./menu-heading.component-D1xVGKsR.js";import"./input.component-DwOIb8Ip.js";import"./textarea.component-B3DUZeyE.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BYOnIo3a.js";import"./checkbox-group.component-TI8OwUfe.js";import"./toggle-control-base.component-CIRAMfLD.js";import"./minus-small.component-BPBf8sNt.js";import"./radio-group.component-BYvNBtK5.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
