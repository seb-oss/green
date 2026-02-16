import{x as t}from"./iframe-CVFmexQP.js";import{a}from"./argTableProps-DHpoDzPJ.js";import"./summary-QQDhvMO8.js";import"./datepicker-BlKRqnQg.js";import"./dropdown-BSuRIgS7.js";import"./option-B0CQwbYb.js";import"./menu-heading-LxZc4Jfz.js";import"./input-BJPA6h5J.js";import"./rocket-DM3J5MVn.js";import"./checkbox-group-D3KKX4mz.js";import"./radio-group-D2EHC9hP.js";import"./summary.component-B_RtiP2K.js";import"./query-async-BF5o5Skz.js";import"./datepicker.component-Cz-Y-to4.js";import"./localized-decorator-BNQExEAA.js";import"./ref-Be1dJHWd.js";import"./dropdown.component-BbMiaohD.js";import"./icon.component-Da1jjeO2.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BUf6DaqT.js";import"./form-control-header.component-BbX-eBR7.js";import"./badge.component-Cd6zhJEr.js";import"./flex.component-CNFtT5Hn.js";import"./triangle-exclamation.component-CF18PKoi.js";import"./card.component-BfEPcx_t.js";import"./unwrap-slots-DnWo2wWM.js";import"./checkmark.component-CtPU_pie.js";import"./rbcb-toggle.template-CLCJ0a5m.js";import"./chevron-bottom.component-BBm1Dnnc.js";import"./cross-small.component-CqAFuBps.js";import"./popover.component-ecYmGvc_.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CwI0z_Jw.js";import"./calender-add.component-ac4Mq8pJ.js";import"./chevron-left.component-21WGcGBY.js";import"./chevron-right.component-Cv22YMT2.js";import"./arrow-up.component-BRY_YBuh.js";import"./menu-heading.component-DlG9toNG.js";import"./input.component-RnmAkwFo.js";import"./textarea.component-xutEPp5h.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-D-Q0AxpL.js";import"./checkbox-group.component-BfMNSvy0.js";import"./toggle-control-base.component-BPGxuo0I.js";import"./minus-small.component-CNg118Ij.js";import"./radio-group.component-D-wvFz9B.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
