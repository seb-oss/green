import{x as t}from"./iframe-B_Sc2FD_.js";import{a}from"./argTableProps-BYn1nrRx.js";import"./summary-CWw_9Km2.js";import"./datepicker-DA94aRUG.js";import"./dropdown-CpdVOrmp.js";import"./option-BJ_T6GCr.js";import"./menu-heading-bwi6J71G.js";import"./input-DxAwP7RX.js";import"./rocket-uu1KkBU9.js";import"./checkbox-group-DNivGutb.js";import"./radio-group-BLkpG_Ov.js";import"./summary.component-DLOk-7H_.js";import"./query-async-Cljm_av7.js";import"./datepicker.component-BI9wFa1a.js";import"./localized-decorator-yp3xEb-A.js";import"./ref-DKplbPIQ.js";import"./dropdown.component-CBx-cUCj.js";import"./icon.component-CO_afi3Z.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-kXceGqis.js";import"./form-control-header.component-CrPY8q0e.js";import"./badge.component-7OrAhW2Y.js";import"./flex.component-7kB9yVhW.js";import"./triangle-exclamation.component-DBoTeYrv.js";import"./card.component-DqqIVQ9y.js";import"./unwrap-slots-DT7fXUN7.js";import"./checkmark.component-n22IpYYL.js";import"./rbcb-toggle.template-Diol-Wd2.js";import"./chevron-bottom.component-QNdAGytU.js";import"./cross-small.component-iid_FxYQ.js";import"./popover.component-B98PXTcZ.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-B98sAWSy.js";import"./calender-add.component-D8QuO5JO.js";import"./chevron-left.component-BWJT3YKG.js";import"./chevron-right.component-oayS4KNZ.js";import"./arrow-up.component-C95FNqA7.js";import"./menu-heading.component-D24b0oAN.js";import"./input.component-MiVBCOVj.js";import"./textarea.component-7SukMNVf.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DKU5yPOd.js";import"./checkbox-group.component-DI0Bu2Ns.js";import"./toggle-control-base.component-CwDmK_ni.js";import"./minus-small.component-BGQNhhVF.js";import"./radio-group.component-iRnqfzfr.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
