import{x as t}from"./iframe-CpY1XI_F.js";import{a}from"./argTableProps-8dH89c3h.js";import"./summary-giuUxDrH.js";import"./datepicker-BmPDDOfN.js";import"./dropdown-BoYvJ0xg.js";import"./option-jxIciUyd.js";import"./menu-heading-Ct7t09b0.js";import"./input-Dahzl3YU.js";import"./rocket-DTfFj6jw.js";import"./checkbox-group-aLWqApCw.js";import"./radio-group-Dig0bEc9.js";import"./summary.component-BVso8b4b.js";import"./query-async-C3ouLxgw.js";import"./datepicker.component-CUpLVGDB.js";import"./localized-decorator-OYUXpxX4.js";import"./ref-9K8DzPNF.js";import"./dropdown.component-Cmw4X8MN.js";import"./icon.component-GpGYD9eN.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DRVS9UTl.js";import"./form-control-header.component-DLPW20gT.js";import"./badge.component-Brg-KJA6.js";import"./flex.component-BmF7ws3m.js";import"./triangle-exclamation.component-B9CYdz3P.js";import"./card.component-Cxuf-lUX.js";import"./unwrap-slots-gIlfNhUu.js";import"./checkmark.component-mc92pgy1.js";import"./rbcb-toggle.template-CCLmQpIn.js";import"./chevron-bottom.component-DqwKdhdr.js";import"./cross-small.component-An5jg8v9.js";import"./popover.component-CWey9yAA.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-GacU1gyS.js";import"./calender-add.component-CP8_rwtE.js";import"./chevron-left.component-yyXVIUB2.js";import"./chevron-right.component-mr7C99tW.js";import"./arrow-up.component-XjEKiUgY.js";import"./menu-heading.component-DBkslsR9.js";import"./input.component-CAUbX1KQ.js";import"./textarea.component-CCOcg0x3.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CIvpWEjx.js";import"./checkbox-group.component-CHGyrN31.js";import"./toggle-control-base.component-WhmUq7Wm.js";import"./minus-small.component-DzB1LAo5.js";import"./radio-group.component-BtIKnZJE.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
