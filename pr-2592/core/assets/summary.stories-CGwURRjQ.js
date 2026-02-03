import{x as t}from"./iframe-DY4zMYuy.js";import{a}from"./argTableProps-CdcpGbWc.js";import"./summary-BchyhNvZ.js";import"./datepicker-CAf9uUFJ.js";import"./dropdown-CgSQWB1e.js";import"./option-DS_AS7Yi.js";import"./menu-heading-DSo9Djej.js";import"./input-CrahxCqu.js";import"./rocket-CF1ZCR2y.js";import"./checkbox-group-DnV0MdK2.js";import"./radio-group-kwLlRXJS.js";import"./summary.component-DQlasDbJ.js";import"./query-async-Decz3F18.js";import"./datepicker.component-BBO34Ze_.js";import"./localized-decorator-BXYk1OcL.js";import"./ref-BRGwLPid.js";import"./dropdown.component-BDHWovw3.js";import"./icon.component-DYtvIxiB.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CWqT0Q5B.js";import"./form-control-header.component-lwybuvDq.js";import"./badge.component-DGYeSSjw.js";import"./flex.component-RC8ATDCr.js";import"./triangle-exclamation.component-pBTla8ZC.js";import"./card.component-_Nmo-84j.js";import"./unwrap-slots-Ctcj9d_J.js";import"./checkmark.component-CpWDrgah.js";import"./rbcb-toggle.template-BQr0UDri.js";import"./chevron-bottom.component-f-q_a-8f.js";import"./cross-small.component-D-aIl8Wk.js";import"./popover.component-BNjy2HzE.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-v5DbF9s8.js";import"./calender-add.component-Djrwth2o.js";import"./chevron-left.component-ClggJY0i.js";import"./chevron-right.component-CHLVxyuO.js";import"./arrow-up.component-fyOJ6n9_.js";import"./menu-heading.component-r5eUZhMX.js";import"./input.component-CZbj6TtN.js";import"./textarea.component-DvcbMd5U.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-qsITSs_t.js";import"./checkbox-group.component-d690pF-k.js";import"./toggle-control-base.component-tNhf4FQ8.js";import"./minus-small.component-Dkl4EB5W.js";import"./radio-group.component-Bh1LYIcF.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
