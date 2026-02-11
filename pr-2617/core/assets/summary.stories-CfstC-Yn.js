import{x as t}from"./iframe-DBW64OS2.js";import{a}from"./argTableProps-maZYkxIi.js";import"./summary-Cmci_jhi.js";import"./datepicker-B7f3P895.js";import"./dropdown-DzTmjOdz.js";import"./option-D9tAaIND.js";import"./menu-heading-CDLGE6M-.js";import"./input-COKC2Wd9.js";import"./rocket-AQdscZnq.js";import"./checkbox-group-BGHX4Ii4.js";import"./radio-group-DKEBBfdN.js";import"./summary.component-BxdhJRmM.js";import"./query-async-Duuabrga.js";import"./datepicker.component-BoSFoyP9.js";import"./localized-decorator-CxexuxZQ.js";import"./ref-DfF7RndY.js";import"./dropdown.component-BLeUE6vL.js";import"./icon.component-POUIiQrW.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-B5UxD-H-.js";import"./form-control-header.component-ByLX1fbm.js";import"./badge.component-Ci_7cTjN.js";import"./flex.component-xcxbZ-V6.js";import"./triangle-exclamation.component-D3GwV0Zw.js";import"./card.component-Bji3JkL7.js";import"./unwrap-slots-Btaovt9M.js";import"./checkmark.component-CA8xwvBC.js";import"./rbcb-toggle.template-76NSMSGg.js";import"./chevron-bottom.component-M4FqUg7G.js";import"./cross-small.component-CX6M_NkQ.js";import"./popover.component-Btoenqba.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DQ-9vW10.js";import"./calender-add.component-D_pjAxWG.js";import"./chevron-left.component--zAHD8wb.js";import"./chevron-right.component-BRry_L0w.js";import"./arrow-up.component-GvX0KKNl.js";import"./menu-heading.component-D4P2W_mR.js";import"./input.component-7OLaTXiB.js";import"./textarea.component-BAVlFq7s.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Da81wAMo.js";import"./checkbox-group.component-CYCPRIMz.js";import"./toggle-control-base.component-BjukRF5h.js";import"./minus-small.component-DCSiLAWX.js";import"./radio-group.component-Cko0MO7d.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
