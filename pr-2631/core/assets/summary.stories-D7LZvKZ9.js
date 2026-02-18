import{x as t}from"./iframe-BVoLPnv3.js";import{a}from"./argTableProps-CY2QTUI5.js";import"./summary-krw2mpte.js";import"./datepicker-Bt3O_5iq.js";import"./dropdown-C4b8vB33.js";import"./option-BAkrzFBj.js";import"./menu-heading-BHh0fGhg.js";import"./input-C4qpIs0c.js";import"./rocket-B4dcySoX.js";import"./checkbox-group-Djzx9YVe.js";import"./radio-group-DaexLB_P.js";import"./summary.component-DSXPi7EX.js";import"./query-async-Dbyemdbn.js";import"./datepicker.component-C2PRbirV.js";import"./localized-decorator-BLYPI52E.js";import"./ref-pmyQR8XX.js";import"./dropdown.component-BV6zGp5U.js";import"./icon.component-Bnk9i1lH.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CoH60cxO.js";import"./form-control-header.component-CCW-PKD7.js";import"./badge.component-D2Z9j_hW.js";import"./flex.component-CNqmiosl.js";import"./triangle-exclamation.component-CPVNcR7e.js";import"./card.component-J6cqnWpe.js";import"./unwrap-slots-lItjASD4.js";import"./checkmark.component-WFxTWqP_.js";import"./rbcb-toggle.template-BoU_3I2M.js";import"./chevron-bottom.component-CmneTVn9.js";import"./cross-small.component-Dgkwmafn.js";import"./popover.component-Byj8vsry.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-B1BkuqgZ.js";import"./calender-add.component-DbdsT0B0.js";import"./chevron-left.component-TDpb5nAV.js";import"./chevron-right.component-C4Luh_uh.js";import"./arrow-up.component-qFHxwade.js";import"./menu-heading.component-Baw3o82I.js";import"./input.component-Cylx0WV4.js";import"./textarea.component-49A_Jf4x.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DYNu6dHS.js";import"./checkbox-group.component-cCXn6HYJ.js";import"./toggle-control-base.component-CczAEvFY.js";import"./minus-small.component-BuQPpX2i.js";import"./radio-group.component-CrgHmoxD.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
