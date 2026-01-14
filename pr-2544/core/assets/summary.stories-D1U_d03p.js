import{x as t}from"./iframe-CDTFv-C8.js";import{a}from"./argTableProps-D94_5j3M.js";import"./summary-B6yeAMZy.js";import"./datepicker-CtxaVUzY.js";import"./dropdown-Sic0CgXj.js";import"./option-BxCPgMit.js";import"./menu-heading-DotiJLd8.js";import"./input-BGmTplw2.js";import"./rocket-ClGuBZos.js";import"./checkbox-group-BwcSWaH9.js";import"./radio-group-CYEV1HBK.js";import"./summary.component-CkyzSWb7.js";import"./query-async-BdXIivAD.js";import"./datepicker.component-DTIpdhjs.js";import"./localized-decorator-De96p8FJ.js";import"./ref-W6bRgyxi.js";import"./dropdown.component-DuTuEGbo.js";import"./icon.component-BD9gw1Q3.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-B5qHfjrN.js";import"./form-control-header.component-DOgwvtBM.js";import"./badge.component-BQWBTu9s.js";import"./flex.component-DealITh5.js";import"./triangle-exclamation.component-CY53aWF8.js";import"./card.component-CrPfjVg7.js";import"./unwrap-slots-BHSDCyxa.js";import"./checkmark.component-DjIDtIz9.js";import"./rbcb-toggle.template-llI16XEs.js";import"./chevron-bottom.component-BfTbqR3t.js";import"./cross-small.component-BmAku09M.js";import"./popover.component-Bh_0CVbR.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Bz08CqI6.js";import"./calender-add.component-CQMJIkBN.js";import"./chevron-left.component-DZLmI6sq.js";import"./chevron-right.component-7VGCMyoA.js";import"./arrow-up.component-Bk3s3BCM.js";import"./menu-heading.component-D-Ed1b60.js";import"./input.component-CuQ1SpA9.js";import"./textarea.component-C0SQm64C.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BpEw7zak.js";import"./checkbox-group.component-BhenbHSX.js";import"./toggle-control-base.component-9-T5skXc.js";import"./minus-small.component-CgrjsUpx.js";import"./radio-group.component-1YTz3xNz.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
