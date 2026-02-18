import{x as t}from"./iframe-DoN8QKNg.js";import{a}from"./argTableProps-eEBgmDLZ.js";import"./summary-DCxxe9Pn.js";import"./datepicker-CSoDU7LI.js";import"./dropdown-FhKA0wcW.js";import"./option-kDy3EvSy.js";import"./menu-heading-BRQMwoEV.js";import"./input-Omcp5IJz.js";import"./rocket-BziIZO77.js";import"./checkbox-group-Bjhrq-GE.js";import"./radio-group-BROVWyHT.js";import"./summary.component-C46YBAl4.js";import"./query-async-Bs8rt78r.js";import"./datepicker.component-DZkr1iP1.js";import"./localized-decorator-BflXXV4W.js";import"./ref-CicGNikr.js";import"./dropdown.component-D-Hq4_sh.js";import"./icon.component-BM_rlRnz.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-lreP4xuB.js";import"./form-control-header.component-D4S2rY9A.js";import"./badge.component-C_BdtyZ2.js";import"./flex.component-Cs0vbcsz.js";import"./triangle-exclamation.component-CEy7PnY4.js";import"./card.component-DW9cGvxx.js";import"./unwrap-slots-DsWARAwf.js";import"./checkmark.component-Bs_0XWKt.js";import"./rbcb-toggle.template-DIMSid4L.js";import"./chevron-bottom.component-BEHx3Kao.js";import"./cross-small.component-Bq2t_uSa.js";import"./popover.component-Joky28O-.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BKjb6nVh.js";import"./calender-add.component-CxrIdeP2.js";import"./chevron-left.component-LDcNAFcS.js";import"./chevron-right.component-By1NHY1d.js";import"./arrow-up.component-B4S5zyu-.js";import"./menu-heading.component-DLRLyz6t.js";import"./input.component-BkL9NFZ4.js";import"./textarea.component-D3nS3kKk.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DbqCAs2p.js";import"./checkbox-group.component-CBrICLY2.js";import"./toggle-control-base.component-D3ImnPyL.js";import"./minus-small.component-BkbA3Upj.js";import"./radio-group.component-DIILN23P.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
