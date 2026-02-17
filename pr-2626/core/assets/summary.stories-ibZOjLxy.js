import{x as t}from"./iframe-9Cc4SVh6.js";import{a}from"./argTableProps-DvCV5CVB.js";import"./summary-DHeALtUQ.js";import"./datepicker-mqFIK9Kg.js";import"./dropdown-C_orDywi.js";import"./option-ByGtfuqf.js";import"./menu-heading-DgOauGm7.js";import"./input-kBdhDGS8.js";import"./rocket-CQ6C9bpk.js";import"./checkbox-group-Ck7-hgnU.js";import"./radio-group-WxL1y6FA.js";import"./summary.component-vWDpv7sG.js";import"./query-async-C2T3P9eI.js";import"./datepicker.component-D7yXrCr0.js";import"./localized-decorator-DidKBAlI.js";import"./ref-BIuMFRXG.js";import"./dropdown.component-CGs_Ggab.js";import"./icon.component-CkCDfQFb.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DAPDshT7.js";import"./form-control-header.component-D4GRaL3y.js";import"./badge.component-VSXyemAo.js";import"./flex.component-H_OEGOx6.js";import"./triangle-exclamation.component-BosMln9Y.js";import"./card.component-C04W1d44.js";import"./unwrap-slots-BbYFF_lw.js";import"./checkmark.component-BSsbfkdK.js";import"./rbcb-toggle.template-C8fD3s08.js";import"./chevron-bottom.component-JUaa88m-.js";import"./cross-small.component-BEJH3FmH.js";import"./popover.component-CwY69XUx.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BUGrBjfj.js";import"./calender-add.component-PR6FZ3o2.js";import"./chevron-left.component-NOno9VjQ.js";import"./chevron-right.component-BSjVQKAB.js";import"./arrow-up.component-D3ZWbnGZ.js";import"./menu-heading.component-CUqJjnXN.js";import"./input.component-zVSjqf_r.js";import"./textarea.component-HAqtfVnT.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-fe6Pnyq9.js";import"./checkbox-group.component-DGiJ16iG.js";import"./toggle-control-base.component-1l7QGduQ.js";import"./minus-small.component-Ds4u9zTR.js";import"./radio-group.component-zqtZb92h.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
