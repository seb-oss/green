import{x as t}from"./iframe-C0ENvUwZ.js";import{a}from"./argTableProps-CI6qYZxK.js";import"./summary-Ti1Pwbzk.js";import"./datepicker-75a2rMdA.js";import"./dropdown-Cc_uGRSk.js";import"./option-D672Aa06.js";import"./menu-heading-y2aTjOD9.js";import"./input-nT05UGkB.js";import"./rocket-Bl3tpJ9v.js";import"./checkbox-group-XBr8dCXb.js";import"./radio-group-DIOhIJOa.js";import"./summary.component-Btdorg5e.js";import"./query-async-DVNRTCDv.js";import"./datepicker.component-CMk96Lm_.js";import"./localized-decorator-Bqx6JSBv.js";import"./ref-DRI7ckJG.js";import"./dropdown.component-DoaU-fmK.js";import"./icon.component-BDA8aQIq.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DzZvhi8S.js";import"./form-control-header.component-DJ48-0vr.js";import"./badge.component-dCKNho8A.js";import"./flex.component-CrfzWcgs.js";import"./triangle-exclamation.component-CH7MvA4W.js";import"./card.component-BjlzAPJq.js";import"./unwrap-slots-DP01I9xu.js";import"./checkmark.component-B-gBIeCC.js";import"./rbcb-toggle.template-BovhpWea.js";import"./chevron-bottom.component-DMDqqGwx.js";import"./cross-small.component-BYyCG_qa.js";import"./popover.component-Bo1JWUG7.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BcfXH0dX.js";import"./calender-add.component-KnN_BEEb.js";import"./chevron-left.component-BB0YFLWc.js";import"./chevron-right.component-lwAi8U48.js";import"./arrow-up.component-DLzTd6Ev.js";import"./menu-heading.component-DewLSjt-.js";import"./input.component-DEUljhL9.js";import"./textarea.component-CVwbpzWa.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BaP9PsQZ.js";import"./checkbox-group.component-Cvu61tbQ.js";import"./toggle-control-base.component-BS9vPafY.js";import"./minus-small.component-MQTUD_J8.js";import"./radio-group.component-Cz6nCeKd.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
