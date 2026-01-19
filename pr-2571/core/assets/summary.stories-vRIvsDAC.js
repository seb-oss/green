import{x as t}from"./iframe-i-YM5Qxf.js";import{a}from"./argTableProps--LUrPRXA.js";import"./summary-DYlZzOAU.js";import"./datepicker-g_CgR-L3.js";import"./dropdown-6dEZ7Cco.js";import"./option-FGgBRt-N.js";import"./menu-heading-cdoXxKwo.js";import"./input-DliRtRer.js";import"./rocket-DGnBgG0p.js";import"./checkbox-group-eJFS7l5y.js";import"./radio-group-vSIvKgrq.js";import"./summary.component-gENIkcsF.js";import"./query-async-DTBNIskl.js";import"./datepicker.component-Cb_9I-QY.js";import"./localized-decorator-CkxI7jm-.js";import"./ref-Ckq4e1Um.js";import"./dropdown.component-BP7Ha3Aa.js";import"./icon.component-C7iCEPBm.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CWcp7a5Y.js";import"./form-control-header.component-BROlX29F.js";import"./badge.component-JUnsRAnk.js";import"./flex.component-CiVGWwuh.js";import"./triangle-exclamation.component-NnZIPnEc.js";import"./card.component-BdRWpuNF.js";import"./unwrap-slots-zBYlFB86.js";import"./checkmark.component-DEsiMZ_Y.js";import"./rbcb-toggle.template-CND3QVBk.js";import"./chevron-bottom.component-CAYHFbff.js";import"./cross-small.component-CC38gYo1.js";import"./popover.component-DdjztAeu.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BddPohJM.js";import"./calender-add.component-DZm5my0N.js";import"./chevron-left.component-Dh6jrKx6.js";import"./chevron-right.component-C_UhusWM.js";import"./arrow-up.component-CrwvYo-4.js";import"./menu-heading.component-CfxDiun8.js";import"./input.component-BmgqhrRT.js";import"./textarea.component-CGjkFyka.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BKkC21zp.js";import"./checkbox-group.component-C2qSlDof.js";import"./toggle-control-base.component-DemL83md.js";import"./minus-small.component-DLEk8Oo3.js";import"./radio-group.component-CUaDwDnY.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...a("gds-form-summary")}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},Y={...o,render:e=>t`<form style="width: 450px" novalidate>
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
    </form> `},tr=["Usage","ManualUpdate","NativeControls"];export{Z as ManualUpdate,rr as NativeControls,Y as Usage,tr as __namedExportsOrder,X as default};
