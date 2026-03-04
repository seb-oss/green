import{x as t}from"./iframe-BZiKkoLE.js";import{a}from"./argTableProps-Cpq9k_Rz.js";import"./summary-GlScD0Sm.js";import"./datepicker-84z5ZATT.js";import"./dropdown-BQK9f2Yq.js";import"./option-CrjuvYpc.js";import"./menu-heading-CVizqe1x.js";import"./input-CS8Fqc0p.js";import"./rocket-DtVIwZFK.js";import"./checkbox-group-Cg91zgDz.js";import"./radio-group-olPjLZ5F.js";import"./summary.component-BhPbk0vs.js";import"./query-async-ByFIlVgX.js";import"./datepicker.component-C4bmJNcJ.js";import"./localized-decorator-D-weAOVX.js";import"./ref-DWHi0Smu.js";import"./dropdown.component-C0Ra-3So.js";import"./icon.component-DS4xUZ2N.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BV4L1oA_.js";import"./form-control-header.component-DcykGzoy.js";import"./badge.component-DExVo6Lv.js";import"./flex.component-DkRYPV9U.js";import"./triangle-exclamation.component-qw8iyXmo.js";import"./card.component-oFyQ3psH.js";import"./unwrap-slots-qD1aawma.js";import"./checkmark.component-sJHOdhHa.js";import"./rbcb-toggle.template-B90sg2IM.js";import"./chevron-bottom.component-BnSqBu79.js";import"./cross-small.component-llXbPVVc.js";import"./popover.component-C4jM8zoB.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Bc6dDeXX.js";import"./calender-add.component-DnBzWGC0.js";import"./chevron-left.component-CXRpWKR_.js";import"./chevron-right.component-CA2SAxNs.js";import"./arrow-up.component-BONKMUNV.js";import"./menu-heading.component-OL7m9cye.js";import"./input.component-AdHG_U_j.js";import"./textarea.component-CgmfoWOk.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-idfx9MBU.js";import"./checkbox-group.component-CRupiBLP.js";import"./toggle-control-base.component-DbVQSu7R.js";import"./minus-small.component-6nF4UDrI.js";import"./radio-group.component-BobPh7I_.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
