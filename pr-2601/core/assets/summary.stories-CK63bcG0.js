import{x as t}from"./iframe-CDYwBWwb.js";import{a}from"./argTableProps-CdpJ1EVI.js";import"./summary-B6PjDrOT.js";import"./datepicker-Dp6Ay9mX.js";import"./dropdown-B5pgHBvL.js";import"./option-BZ2xN96E.js";import"./menu-heading-UGqa_iZH.js";import"./input-bPlbOPVp.js";import"./rocket-DYPgoc2C.js";import"./checkbox-group-B7QcdBOI.js";import"./radio-group-EYni9bCZ.js";import"./summary.component-D-_TMEgr.js";import"./query-async-QBT06sAI.js";import"./datepicker.component-BJuzt1BU.js";import"./localized-decorator-CTPpDN0m.js";import"./ref-CRNBYR0o.js";import"./dropdown.component-Ggs84LXl.js";import"./icon.component-DsQvcCLO.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CY1pZw6A.js";import"./form-control-header.component-BVZz5jGv.js";import"./badge.component-DOkIIYzL.js";import"./flex.component-Ci8HJepP.js";import"./triangle-exclamation.component-kru_ealq.js";import"./card.component-CA9Ke_4r.js";import"./unwrap-slots-DsLTz3oa.js";import"./checkmark.component-CoSq204c.js";import"./rbcb-toggle.template-CroFatrj.js";import"./chevron-bottom.component-CpTXIEaR.js";import"./cross-small.component-DVIXh5fg.js";import"./popover.component-D26aIRBH.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Cxd3ossz.js";import"./calender-add.component-DqZH7bgG.js";import"./chevron-left.component-DzdVKr5d.js";import"./chevron-right.component-CukdDlWK.js";import"./arrow-up.component-rw2IUwWS.js";import"./menu-heading.component-1ad_jZof.js";import"./input.component-B0DMaRDc.js";import"./textarea.component-BdR1a2Sm.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DIGvi3FE.js";import"./checkbox-group.component-BfwMuc-m.js";import"./toggle-control-base.component-Cs8afcKT.js";import"./minus-small.component-CvcM8B-r.js";import"./radio-group.component-CovnVrPa.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
