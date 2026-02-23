import{x as t}from"./iframe-l2jj9Yet.js";import{a}from"./argTableProps-B0K9BzVB.js";import"./summary-CozXPVb0.js";import"./datepicker-PxZoLREP.js";import"./dropdown-9xDVEORL.js";import"./option-Df5u7y1-.js";import"./menu-heading-Cl3lDDeT.js";import"./input-q3b5PPoo.js";import"./rocket-CrnzrkTn.js";import"./checkbox-group-fhB8k2bq.js";import"./radio-group-OR5KQnb9.js";import"./summary.component-ypH21JwW.js";import"./query-async-B-YMZace.js";import"./datepicker.component-BZnwbWEw.js";import"./localized-decorator-BDYX6RVq.js";import"./ref-uyL8nDc6.js";import"./dropdown.component-UsWn-Tm1.js";import"./icon.component-BozruYzA.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BFJ5eNbe.js";import"./form-control-header.component-ChdE7994.js";import"./badge.component-DZpMVDkD.js";import"./flex.component-Dddci-fu.js";import"./triangle-exclamation.component-cHuzqF3E.js";import"./card.component-BcFA_-GE.js";import"./unwrap-slots-CdxBnEpp.js";import"./checkmark.component-CvaeJIMA.js";import"./rbcb-toggle.template-D89hkUaU.js";import"./chevron-bottom.component-l8n_kOcL.js";import"./cross-small.component-BERuS5c3.js";import"./popover.component-DRqYK9ct.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Cu9oNrgR.js";import"./calender-add.component-i8zo-5Gi.js";import"./chevron-left.component-d3Tdx-g7.js";import"./chevron-right.component-Bb8gUa4U.js";import"./arrow-up.component-DkWFS2p1.js";import"./menu-heading.component-Cq51ovhQ.js";import"./input.component-C4-AZP0V.js";import"./textarea.component-ff94MAEK.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DjMbGeZE.js";import"./checkbox-group.component-BcuuSJvn.js";import"./toggle-control-base.component-B5AqaszJ.js";import"./minus-small.component-DYjUPGpK.js";import"./radio-group.component-D9aPvrbn.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
