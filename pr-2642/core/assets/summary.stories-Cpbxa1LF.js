import{x as t}from"./iframe-ByV2Hk15.js";import{a}from"./argTableProps-dh6_PC9d.js";import"./summary-BiZiPmhV.js";import"./datepicker-C6iPbCft.js";import"./dropdown-JUtO2WTF.js";import"./option-DUrtOvDt.js";import"./menu-heading-DJqh6jyR.js";import"./input-C3AwJnb3.js";import"./rocket-DsjDTYUl.js";import"./checkbox-group-BcJJEhrd.js";import"./radio-group-CNV1sRuZ.js";import"./summary.component-ConwBE6N.js";import"./query-async-B8we33pn.js";import"./datepicker.component-XjLGF9Dr.js";import"./localized-decorator-rFdNAhQz.js";import"./ref-D_ZBSf_P.js";import"./dropdown.component-BHGi4338.js";import"./icon.component-BopIGL_s.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-R0eOHkR1.js";import"./form-control-header.component-D38sxE13.js";import"./badge.component-CjCN_QWh.js";import"./flex.component-BRqfWEAh.js";import"./triangle-exclamation.component-CXnPpeeL.js";import"./card.component-BoU0eflb.js";import"./unwrap-slots-DcZgFnoC.js";import"./checkmark.component-BQeWK9qJ.js";import"./rbcb-toggle.template-CZ5iRhQu.js";import"./chevron-bottom.component-CZ3H-YfX.js";import"./cross-small.component-BB1iPWPd.js";import"./popover.component-DvZzjuOT.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-zJ6Pdc1M.js";import"./calender-add.component-Dy0C8nm6.js";import"./chevron-left.component-DQpq8LWe.js";import"./chevron-right.component-C85UXogr.js";import"./arrow-up.component-Re4GFR7E.js";import"./menu-heading.component-wogJ-yJc.js";import"./input.component-C8ZBj7y3.js";import"./textarea.component-CQWoIXIB.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CPMJjoNj.js";import"./checkbox-group.component-hZ6F9bO7.js";import"./toggle-control-base.component-DfUCVc_i.js";import"./minus-small.component-LbEG9cD8.js";import"./radio-group.component-DOf4zpqc.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
