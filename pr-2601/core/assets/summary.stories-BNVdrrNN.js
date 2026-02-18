import{x as t}from"./iframe-CQ6C5171.js";import{a}from"./argTableProps-DPj_u8QI.js";import"./summary-DUqWTCQB.js";import"./datepicker-DHF3szrI.js";import"./dropdown-DCZigNyu.js";import"./option-CbgRmTL7.js";import"./menu-heading-BNFo_jv0.js";import"./input-w6FE6iLc.js";import"./rocket-pc9NheKL.js";import"./checkbox-group-wdWsK51T.js";import"./radio-group-CCFf40g4.js";import"./summary.component-DWe7yhOz.js";import"./query-async-DAnI5z5h.js";import"./datepicker.component-D3PAj8Hn.js";import"./localized-decorator-Dv1M8wEZ.js";import"./ref-NAIIJLYI.js";import"./dropdown.component-Do81YfNH.js";import"./icon.component-DN5ag0d3.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DdStfeXc.js";import"./form-control-header.component-D-oZMTqh.js";import"./badge.component-DTrdNATK.js";import"./flex.component-DFXFpgUj.js";import"./triangle-exclamation.component-CgvfOWt_.js";import"./card.component-C6dS-oCl.js";import"./unwrap-slots-CFg4IoNk.js";import"./checkmark.component-C0sGJdQl.js";import"./rbcb-toggle.template-wtX0uZhO.js";import"./chevron-bottom.component-DoOuMjBM.js";import"./cross-small.component-Dvrn8N-F.js";import"./popover.component-CtKQiClK.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DkZPcZzp.js";import"./calender-add.component-CgFzvkVr.js";import"./chevron-left.component-CYUJzev9.js";import"./chevron-right.component-CZsC5BFd.js";import"./arrow-up.component-Cvc9SU0P.js";import"./menu-heading.component-B6fRrMiQ.js";import"./input.component-D-VAUhLz.js";import"./textarea.component-Dkkfbt_U.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DixtcFb6.js";import"./checkbox-group.component-XwU5f6Bn.js";import"./toggle-control-base.component-By9N8uQH.js";import"./minus-small.component-q7HkHsJ5.js";import"./radio-group.component-CldVayhb.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
