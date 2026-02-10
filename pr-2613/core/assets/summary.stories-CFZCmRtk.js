import{x as t}from"./iframe-Dza7UAsM.js";import{a}from"./argTableProps-lNCYVuPK.js";import"./summary-CYLfVl5E.js";import"./datepicker-B7fsFV8X.js";import"./dropdown-CXAHxmbM.js";import"./option-E-1usAij.js";import"./menu-heading-UkaGfvlP.js";import"./input-BDdwrKMt.js";import"./rocket-DYNrHA4t.js";import"./checkbox-group-CJ4al7LP.js";import"./radio-group-B12XXBc-.js";import"./summary.component-BVYjKxmB.js";import"./query-async-742Oplf1.js";import"./datepicker.component-DUvkdl3N.js";import"./localized-decorator-D9HKVfyR.js";import"./ref-B8mzLGhC.js";import"./dropdown.component-BuG2DxhO.js";import"./icon.component-DjJydk4a.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CdXQB53z.js";import"./form-control-header.component-Cluus4jN.js";import"./badge.component-JAfqJv81.js";import"./flex.component-C5bD0V58.js";import"./triangle-exclamation.component-Cgq5g-yd.js";import"./card.component-BH5v5fQe.js";import"./unwrap-slots-DvHP2LjV.js";import"./checkmark.component-Bq-JLvxO.js";import"./rbcb-toggle.template-D85wlM5Z.js";import"./chevron-bottom.component-B3G4AtmQ.js";import"./cross-small.component-ByaUsE3o.js";import"./popover.component-BmKY8279.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-D5F1vsb9.js";import"./calender-add.component-nWqk08i3.js";import"./chevron-left.component-BrWK_N1L.js";import"./chevron-right.component-CInCjTGT.js";import"./arrow-up.component-BiV48HOL.js";import"./menu-heading.component-CZVBhmUZ.js";import"./input.component-BUM2OdYW.js";import"./textarea.component-DDrHTafv.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DK52kKkX.js";import"./checkbox-group.component-C_OshrKT.js";import"./toggle-control-base.component-B0hMCr3r.js";import"./minus-small.component-D5CQ6_i7.js";import"./radio-group.component-CqwbmOd0.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
