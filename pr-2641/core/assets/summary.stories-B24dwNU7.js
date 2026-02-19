import{x as t}from"./iframe-DdeT6vR5.js";import{a}from"./argTableProps-RrJqzOaK.js";import"./summary-BjeIFamF.js";import"./datepicker-CkZcAsxt.js";import"./dropdown-DjJGoRZs.js";import"./option-CbPQFkeE.js";import"./menu-heading-DYRc8472.js";import"./input-B0MHRrkr.js";import"./rocket-BOA8CUEh.js";import"./checkbox-group-Bu_kGfLZ.js";import"./radio-group-D0gpGgS0.js";import"./summary.component-BaL3YHt1.js";import"./query-async-C503QCds.js";import"./datepicker.component-BSYv1hHs.js";import"./localized-decorator-FTgULxfn.js";import"./ref-BpT-BDQY.js";import"./dropdown.component-C8ZfqL4n.js";import"./icon.component-CaUNXTa8.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-C3-97pH2.js";import"./form-control-header.component-DljVVm-6.js";import"./badge.component-DnBEadfY.js";import"./flex.component-B4NskaHn.js";import"./triangle-exclamation.component-DU12CBRJ.js";import"./card.component-lGrm7vkC.js";import"./unwrap-slots-RW1_PNxZ.js";import"./checkmark.component-DzZCzeAF.js";import"./rbcb-toggle.template-D2On9bqk.js";import"./chevron-bottom.component-D1jXWHt1.js";import"./cross-small.component-BRquWdbu.js";import"./popover.component-NnhnhCKU.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DcxT_e3o.js";import"./calender-add.component-L9nZoUSS.js";import"./chevron-left.component-s9UW0Sij.js";import"./chevron-right.component-FXnF9Dmt.js";import"./arrow-up.component-CrihegbP.js";import"./menu-heading.component-DWvhaSdS.js";import"./input.component-BM5Kznr7.js";import"./textarea.component-BwEBQbXg.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BnXv5nfr.js";import"./checkbox-group.component-B0dY4mj_.js";import"./toggle-control-base.component-CJ_WD0WQ.js";import"./minus-small.component-BxD-RtsE.js";import"./radio-group.component-CoVUQBlJ.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
