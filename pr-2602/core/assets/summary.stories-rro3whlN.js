import{x as t}from"./iframe-C1rAZNES.js";import{a}from"./argTableProps-Dwm9i1L6.js";import"./summary-BumILTMq.js";import"./datepicker-0HZLa4Dq.js";import"./dropdown-DNe2s4Fv.js";import"./option-BPgKt0qo.js";import"./menu-heading-ClhlFLY8.js";import"./input-DfcaXWhQ.js";import"./rocket-moTqqSy8.js";import"./checkbox-group-BAnMrUhL.js";import"./radio-group-CcgPtRiu.js";import"./summary.component-Dkaa9mDj.js";import"./query-async-BghkAqFq.js";import"./datepicker.component-CYNvPTTG.js";import"./localized-decorator-BVfD1jcZ.js";import"./ref-CdPiRzS2.js";import"./dropdown.component-BOGhuodQ.js";import"./icon.component-CK0E683U.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Bewqvn5c.js";import"./form-control-header.component-DVm7RJtM.js";import"./badge.component-C9MFCsK5.js";import"./flex.component-DUe94c28.js";import"./triangle-exclamation.component-DXfASxC-.js";import"./card.component-CAtRNgbP.js";import"./unwrap-slots-CCXIszC4.js";import"./checkmark.component-Cvq98IYU.js";import"./rbcb-toggle.template-CCGYFIE4.js";import"./chevron-bottom.component-AwGobeo9.js";import"./cross-small.component-D3q0fDXK.js";import"./popover.component-oEMiOJtE.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CZp2xeCP.js";import"./calender-add.component-CESkpIcG.js";import"./chevron-left.component-msDjGSDb.js";import"./chevron-right.component-BtvLfVqg.js";import"./arrow-up.component-D2BIdAJu.js";import"./menu-heading.component-CvHsUcl-.js";import"./input.component-CZ3fDGtK.js";import"./textarea.component-BOesA8X1.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-R_UKfvYO.js";import"./checkbox-group.component-7StTzaaF.js";import"./toggle-control-base.component-jhimD-YY.js";import"./minus-small.component-Cs6W6DXx.js";import"./radio-group.component-84sOJFQI.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
