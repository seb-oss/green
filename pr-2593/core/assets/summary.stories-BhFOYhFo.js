import{x as t}from"./iframe-Bk-MxZ0z.js";import{a}from"./argTableProps-C-syCgfB.js";import"./summary-CpqX-_nh.js";import"./datepicker-DIc3CcJf.js";import"./dropdown-Ciel4hEn.js";import"./option-CwmTnMzV.js";import"./menu-heading-DxX8YxTt.js";import"./input-QbnvvvGz.js";import"./rocket-CmnI0Yap.js";import"./checkbox-group-Dzr2cUR6.js";import"./radio-group-Cj5nST1Z.js";import"./summary.component-BHBc8r1M.js";import"./query-async-bBN8WLzI.js";import"./datepicker.component-DdiMEMxY.js";import"./localized-decorator-B9bUXMXJ.js";import"./ref-CDPOzDcO.js";import"./dropdown.component-BotyT4x5.js";import"./icon.component-Eez9FLLu.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-z8BFTuar.js";import"./form-control-header.component-GyV-dNpi.js";import"./badge.component-7Vl6TzJw.js";import"./flex.component-DgzV2LW_.js";import"./triangle-exclamation.component-CvPDgBhF.js";import"./card.component-CRa9AmYs.js";import"./unwrap-slots-0DZMUSaE.js";import"./checkmark.component-CY-Hz2M8.js";import"./rbcb-toggle.template-CDu8vnrL.js";import"./chevron-bottom.component-B3DyHPAK.js";import"./cross-small.component-BMf_QwWg.js";import"./popover.component-D82SLCgx.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DaLH6BAq.js";import"./calender-add.component-B8tJ0br5.js";import"./chevron-left.component-8fBfK4dL.js";import"./chevron-right.component-Bm1g1-dK.js";import"./arrow-up.component-b7BmYNdP.js";import"./menu-heading.component-azeQl40w.js";import"./input.component-BSnk53qS.js";import"./textarea.component-CvI7PHob.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-C_ndHk2Y.js";import"./checkbox-group.component-B87W7Idw.js";import"./toggle-control-base.component-wJijlRJZ.js";import"./minus-small.component-CAR56dKe.js";import"./radio-group.component-ObbdBBqQ.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
